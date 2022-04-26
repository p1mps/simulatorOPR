(ns p1mps.simulator.core
  (:require
   [cheshire.core :as json]
   [clj-http.client :as client]
   [clojure.string :as string]
   [clojure.walk :as walk]
   [com.stuartsierra.frequencies :as freq]
   [integrant.core :as ig]
   [yada.yada :as yada]))

(defn string-resource
  [x]
  (yada/as-resource x))

(def NUM_EXPERIMENTS 1000)

(def army
  (atom
   {}))

(def army-fight
  (atom
   {}))


(def api-url
  "https://webapp.onepagerules.com/api/")

(defn parse-special-rules [rules]
  (reduce (fn [m rule]
            (when rule
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
                                      (string/replace #"\)" ""))))
                (string/includes? rule "Impact")
                (assoc m :impact (Integer/parseInt
                                  (-> (string/replace rule #"Impact\(" "")
                                      (string/replace #"\)" ""))))
                :else
                m))

              )
          {}
          (map :label rules)))

(defn parse-weapons [weapons]
  (map #(update %
                :specialRules
                (partial parse-special-rules))
       weapons))

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
            :specialRules (map #(select-keys % [:name :rating :label]) (:specialRules unit-data))
            :id      (:id unit-data)
            :weapons (->> (if (not-empty filtered-weapons)
                            (map #(select-keys % [:name :attacks :specialRules]) filtered-weapons)
                            (:equipment unit-data)))}))
       (group-by :id)
       (map (fn [[_ v]]
              (if (:combined (first v))
                (assoc (first v) :size (apply + (map :size v)))
                v)))))


(defn roll-attacker []
  (+ 1 (rand-int 6))
  ;;6
  )

(defn roll-defender []
  (+ 1 (rand-int 6))
  ;;1

  )

(defn parse-attacks [attacks]
  (Integer/parseInt (string/replace attacks #"A" "")))



(defn hit? [attacker roll]
  (or
   ;; 6 is always success
   (= roll 6)
   (>= roll (:quality attacker))))

(defn save? [defender weapon roll]
  ;; 1 is always failure
  (or (= roll 6)
      (>= roll (+ (:defense defender)
                  (or (-> weapon :specialRules :ap) 0)))))

(defn wound? [attacker defender weapon]
  (let [roll-attacker (roll-attacker)
        roll-defender (roll-defender)]
    (and
     (hit? attacker roll-attacker)
     (not (save? defender weapon roll-defender)))))

(defn weapon-damage [weapon]
  (or (-> weapon :specialRules :blast)
      (-> weapon :specialRules :deadly)
      1))




(defn roll-for-impact [attacker defender weapon]
  (for [_ (range 0 (* (or (:size attacker) 1) (-> weapon :specialRules :impact)))]
    (let [roll-defender (roll-defender)]
      (if (save? defender weapon roll-defender)
        (weapon-damage weapon)
        0))))


(defn sum-wounds [fight]
  (reduce-kv (fn [m k v]
               (assoc m k (list (apply + v))))
          {}
          fight))

(defn fight [attacker defender]
  (->
   (apply
    merge-with
    into
    (for [_      (range 0 (:size attacker))
          weapon (parse-weapons (:weapons attacker))
          _ (range 0 (:attacks weapon))]
      {(:name weapon)
       (if (hit? attacker (roll-attacker))
         (for [_ (range 0 (or (-> weapon :specialRules :blast) 1))]
           (if (not (save? defender weapon (roll-defender)))
             (or (-> weapon :specialRules :deadly) 1)
             0))
         '(0))}))
   (sum-wounds)))




(defn find-weapon [unit weapon]
  (first (filter #(= (:name %) weapon) (:weapons unit))))





(defn run-experiments [attacker defender n]
  (->> (repeatedly n #(fight attacker defender))
       (apply merge-with concat)
       (reduce (fn [result [k v]]
                 (assoc result
                        k
                        {:values v
                         :stats  (freq/stats (frequencies v))}))
                        {})


       ))

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
                             defender-unit (-> ctx :body :defender-unit)
                             fight (run-experiments attacker-unit defender-unit NUM_EXPERIMENTS)]
                         (swap! army-fight assoc
                                :attacker-unit attacker-unit
                                :defender-unit defender-unit
                                :fight fight)

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
