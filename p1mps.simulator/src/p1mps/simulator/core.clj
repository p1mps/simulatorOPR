(ns p1mps.simulator.core
  (:require
   [cheshire.core :as json]
   [clj-http.client :as client]
   [clojure.string :as string]
   [clojure.walk :as walk]
   [integrant.core :as ig]
   [yada.yada :as yada]))

(defn string-resource
  [x]
  (yada/as-resource x))


(def army
  (atom
   {}))

(def army-fight
  (atom
   {}))


(def api-url
  "https://webapp.onepagerules.com/api/")


(defn merge-data [units-file api-data]
  (->> (for [unit units-file]
         (let [unit-upgrades    (map #(select-keys % [:optionId :upgradeId]) (:selectedUpgrades unit))
               unit-data        (first (filter #(= (:id unit) (:id %)) (:units api-data)))
               upgrades         (for [upgrade unit-upgrades]
                                  (let [selected-upgrade (first (filter #(and (= (:type %) "replace") (= (:uid %) (:upgradeId upgrade)))
                                                                        (mapcat :sections (:upgradePackages api-data))))
                                        selected-option  (first (filter #(= (:uid %) (:optionId upgrade)) (:options selected-upgrade)))]
                                    {:replaceWhat (:replaceWhat selected-upgrade)
                                     :gains       (:gains selected-option)}))
               all-replace-what (map :replaceWhat upgrades)
               all-gains        (mapcat :gains upgrades)
               filtered-weapons (remove #(some #{(:name %)} all-replace-what) all-gains)]
           {:name    (:name unit-data)
            :quality (:quality unit-data)
            :tough  (-> (filter #(= (:key %) "tough") (:specialRules unit-data)) first :rating)
            :defense (:defense unit-data)
            :size    (:size unit-data)
            :combined (:combined unit)
            :id      (:id unit-data)
            :weapons (->> (if (not-empty filtered-weapons)
                            (map #(select-keys % [:name :attacks :specialRules]) filtered-weapons)
                            (:equipment unit-data)))}))
       (group-by :id)
       (map (fn [[_ v]]
              (if (:combined (first v))
                (assoc (first v) :size (apply + (map :size v)))
                v)))))


(defn roll []
  (+ 1 (rand-int 6)))

(defn parse-attacks [attacks]
  (Integer/parseInt (string/replace attacks #"A" "")))

(defn parse-special-rules [rules]
  (reduce (fn [m rule]
            (cond
              (string/includes? rule "AP")
              (assoc m :ap (Integer/parseInt
                            (-> (string/replace rule #"AP\(" "")
                                (string/replace #"\)" ""))))
              (string/includes? rule "Blast")
              (assoc m :blast (Integer/parseInt
                               (-> (string/replace rule #"Blast\(" "")
                                   (string/replace #"\)" ""))))
              (string/includes? rule "Deadly")
              (assoc m :deadly (Integer/parseInt
                                (-> (string/replace rule #"Deadly\(" "")
                                    (string/replace #"\)" "")))))

              )
          {}
          (map :label rules)))

(def tank
  (json/parse-string (slurp "tank.json") true))

(def spacemarine
  {:name "Space Marine"
   :defense 3})

(defn wound? [attacker defender]
  (let [roll-attacker (roll)
        roll-defender (roll)]
    (and (or
          ;; 6 is always success
          (= roll-attacker 6)
          (>= roll-attacker (:quality attacker)))
         (or
          ;; 1 is always failure
          (= roll-defender 1)
          (< roll-defender (:defense defender))))))


(defn fight [attacker defender]
  (reduce (fn [m weapon]
            (assoc m
                   (:name weapon)
                   (for [_ (range 0 (:attacks weapon))]
                     (if (wound? attacker defender)
                       (or (-> weapon :specialRules :blast)
                           (-> weapon :specialRules :deadly) 1)
                       0))))
          {}
          (map #(update % :specialRules (partial parse-special-rules))
               (:weapons attacker))))


(defn calculate-wounds [fight]
  (reduce (fn [m [weapon wounds]]
            (assoc m weapon (apply + wounds)))
          {}
          fight))

(defn find-weapon [unit weapon]
  (first (filter #(= (:name %) weapon) (:weapons unit))))


(defn run-experiments [attacker defender n]
  (->> (repeatedly n #(fight attacker defender))
       (reduce (fn [result m]
                 (merge-with
                  into result
                  m))
               {})
       (reduce (fn [result [k v]]
                 (assoc result
                        k
                        (partition-all (:attacks (find-weapon attacker k)) v)))
               {})
       (reduce (fn [result [k v]]
                 (assoc result
                        k
                        (map (partial apply +) v)))
               {})
       (reduce (fn [result [k v]]
                 (assoc result
                        k
                        {:average (float (/ (apply + v) (count v)))
                         :values  v}))
               {})))

(def army-resource
 (yada/resource
  {:methods
   {:get
    {:produces
     {:media-type "application/json"}
     :response
     (fn [_]
        @army)}
    :post {:parameters {:form {:file String}}
           :consumes #{"multipart/form-data"}
           :produces {:media-type "application/json"}
           :response (fn [ctx]
                       (let [file (-> ctx :parameters :form :file)
                             json (json/parse-string file true)
                             units-file (-> json :list :units)
                             army-id (-> json :armyId)
                             api-data (-> (client/get (str api-url "/army-books/" army-id)) :body (json/parse-string true))]
                         (reset! army {:units (flatten (merge-data units-file api-data))})
                         @army))}}}))

(def fight-resource
 (yada/resource
  {:methods
   {:get
    {:produces
     {:media-type "application/json"}
     :response
     (fn [_]
       @army-fight)}
    :post {:parameters {:form {:attacker-unit String :defender-unit String}}
           :consumes #{"application/json"}
           :produces {:media-type "application/json"}
           :response (fn [ctx]
                       (let [attacker-unit (-> ctx :body :attacker-unit)
                             defender-unit (-> ctx :body :defender-unit)]
                         (swap! army-fight assoc
                                :attacker-unit attacker-unit
                                :defender-unit defender-unit
                                :fight (run-experiments attacker-unit defender-unit 10))

                         @army-fight))}}}))


(defmethod ig/init-key ::string
  [_ x]
  (string-resource x))

(defmethod ig/init-key ::army
  [_ _]
  army-resource)

(defmethod ig/init-key ::fight
  [_ _]
  fight-resource)
