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
                (string/includes? rule "Poison")
                (assoc m :poison true)
                (string/includes? rule "Rending")
                (assoc m :rending true)
                :else
                m))

              )
          {}
          (map :label rules)))

(defn parse-special-rules-equipment [rules]
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
                (string/includes? rule "Poison")
                (assoc m :poison true)
                (string/includes? rule "Rending")
                (assoc m :rending true)
                :else
                m))

              )
          {}
          rules))


(defn parse-special-rules-unit [rules]
  (reduce (fn [m rule]
            (when rule
              (cond
                (string/includes? (:name rule) "Regeneration")
                (assoc m :regeneration 5)
                :else
                m)))
          {}
          rules))


(defn parse-units [units]
  (map #(update %
                :specialRules
                (partial parse-special-rules-unit))
       units))

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
           {:name     (:name unit-data)
            :quality      (:quality unit-data)
            :tough        (-> (filter #(= (:key %) "tough") (:specialRules unit-data)) first :rating)
            :defense      (:defense unit-data)
            :size     (:size unit-data)
            :combined (:combined unit)
            :specialRules (parse-special-rules-unit (:specialRules unit-data))
            :id           (:id unit-data)
            :weapons      (if (not-empty filtered-weapons)
                            (->> (map #(select-keys % [:id :name :attacks :specialRules]) filtered-weapons)
                                 (map #(update % :specialRules (partial parse-special-rules))))
                            (map #(update % :specialRules (partial parse-special-rules-equipment)) (:equipment unit-data)))
            }

           ))
       (group-by (comp :combined))
       (mapcat (fn [[combined units]]
              (if combined
                (partition 2 units)
                (map list units))))
       ))


(defn roll-attacker []
  (+ 1 (rand-int 6))

  )

(defn roll-defender []
  (+ 1 (rand-int 6))


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
                  (or
                   (-> weapon :specialRules :ap)
                   0)))))

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

(defn regeneration-rolls [defender wounds]
  (let [regeneration (-> defender :specialRules :regeneration)]
    (if regeneration
      (->> (map #(if (and (not= % 0) (>= (roll-defender) regeneration)) nil %) wounds)
           (remove nil?))
        wounds)))

(defn max-hits-blast [weapon {:keys [size]}]
  (min (or (-> :specialRules weapon :blast) 1) size))

(defn filter-hits [attacker-unit hits]
  (filter #(>= % (:quality attacker-unit)) hits))


(defn roll-hits [attacker-unit weapon defender-unit]
  (->> (flatten
        (for [_        (range 0 (:size attacker-unit))
              _        (range 0 (:attacks weapon))]
          (let [hits (repeat (max-hits-blast weapon defender-unit) (roll-attacker))]
            (if (-> weapon :specialRules :poison)
              (mapcat #(take 3 (repeat %)) hits)
              hits))))
       (filter-hits attacker-unit)))


(defn roll-saves [defender-unit weapon hits]
  (->> (for [_ hits]
         (when (< (roll-defender)
                  (+ (:defense defender-unit) (or (-> weapon :specialRules :ap) 0)))
           (or (-> weapon :specialRules :deadly) 1)))
       (remove nil?)
       (regeneration-rolls defender-unit)))


;; special rules: blast deadly poison rending
(defn fight [attacker-units defender-units]
  (->
   (apply
    merge-with
    into
    (for [attacker attacker-units
          weapon (:weapons attacker)]
      {(:name weapon) (->> (roll-hits attacker weapon (first defender-units))
                           (roll-saves (first defender-units) weapon))}))
   (sum-wounds)))




(defn find-weapon [unit weapon]
  (first (filter #(= (:name %) weapon) (:weapons unit))))


(defn normalize [values stats]
  (map
   #(/ (- % (:min stats)) (- (:max stats) (:min stats)))
   values))



(defn run-experiments [attacker defender n]
  (->> (repeatedly n #(fight attacker defender))
       (apply merge-with (partial into))
       (reduce (fn [result [k v]]
                 (assoc result
                        k
                        {:values v

                         :stats  (freq/stats (frequencies v))}))
                        {})


       ))

(defn parse-file [file]
  (let [json (json/parse-string file true)
        army-id (-> json :armyId)]
    {:units-file (-> json :list :units)
     :api-data (-> (client/get (str api-url "/army-books/" army-id))
                   :body
                   (json/parse-string true))}))


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
                             {:keys [units-file api-data]}  (parse-file file)]
                         (reset! army (merge-data units-file api-data))
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
                       (let [attacker-unit (-> ctx :body :attacker-selected)
                             defender-unit (-> ctx :body :defender-selected)
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
