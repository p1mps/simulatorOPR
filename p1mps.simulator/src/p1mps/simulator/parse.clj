(ns p1mps.simulator.parse
  (:require [clojure.string :as string]
            [cheshire.core :as json]
            [clojure.set :as s]
            [clj-http.client :as client]))

(def api-url
  "https://webapp.onepagerules.com/api/")

(defn parse-special-rules [rules]
  (reduce (fn [m rule]
            (when rule
              (condp = (:name rule)
                "AP"      (assoc m :ap (read-string (:rating rule)))
                "Blast"   (assoc m :blast (read-string (:rating rule)))
                "Deadly"  (assoc m :deadly (read-string (:rating rule)))
                "Poison"  (assoc m :poison true)
                "Rending" (assoc m :rending true)
                "Impact"      (assoc m :impact true)
                m)))
          {}
          rules))

(defn parse-special-rules-unit [rules]
  (reduce (fn [m rule]
            (condp = (:name rule)
              "Tough"         (assoc m :tough (read-string (:rating rule)))
              "Regeneration"  (assoc m :regeneration true)
              "Relentless"  (assoc m :relentless true)
              "Impact"      (assoc m :impact true)
              m))
          {}
          rules))


(defn get-army-data [army-id]
  (client/get (str api-url "/army-books/" army-id)))


(defn parse-file [file]
  (let [json (json/parse-string file true)
        army-id (-> json :armyId)]
    {:units-file (-> json :list :units)
     :api-data (-> (get-army-data army-id)
                   :body
                   (json/parse-string true))}))


(defn parse-data [json]
  (->> (-> json :units)
       (map #(assoc % :originalSpecialRules (:specialRules %)))
       (map #(update % :specialRules (partial parse-special-rules-unit)))
       (map #(s/rename-keys % {:loadout :weapons
                               :count   :size}))
       (map #(update % :weapons
                     (fn [weapons]
                       (->>
                        (filter (fn [weapon]
                                  (= (:type weapon) "ArmyBookWeapon")) weapons)
                        (group-by :name)
                        (reduce (fn [result [_ weapons]]
                                  (conj result (assoc
                                                (update (first weapons) :specialRules (partial parse-special-rules))
                                                :size (apply + (map :count weapons)))))
                                [])))))
       (group-by :combined)
       (reduce (fn [result [combined units]]
                 (concat result (if combined
                                (partition 2 units)
                                [units])))
               [])
       (map #(group-by :selectionId %))
       (apply merge-with concat)
       (reduce-kv (fn [result _ unit]
                    (if (:joinToUnit (first unit))
                      (update result (:joinToUnit (first unit)) #(concat % unit))
                      (update result (:selectionId (first unit)) #(concat % unit))))
                  {})
       (vals)



       ))
