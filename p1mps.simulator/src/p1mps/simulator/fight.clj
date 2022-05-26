(ns p1mps.simulator.fight
  (:require [com.stuartsierra.frequencies :as freq]))

(defn roll-attacker []
  (+ 1 (rand-int 6))
  ;;6
  )

(defn roll-defender []
  (+ 1 (rand-int 6))
  ;;1
  )



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

(defn max-hits-blast [weapon defender]
  (min (or (-> :specialRules weapon :blast) 1) (reduce + (map :size defender))))

(defn filter-hits [attacker-unit hits]
  (filter #(>= % (:quality attacker-unit)) hits))



;;TODO
(defn special-rules-hits [attacker weapon hits]
  (let [hits (if (-> weapon :specialRules :poison)
               (mapcat #(if (= % 6) (take 3 (repeat %)) [%]) hits) hits)
        hits (if (-> attacker :specialRules :relentless) (mapcat #(if (= % 6) (conj [] % (roll-attacker)) [%]) hits) hits)]
    hits))



(defn ap [weapon hit impact-hits]
  (if impact-hits
    0
    (if (and (-> weapon :specialRules :rending) (= hit 6))
      4
      (or (-> weapon :specialRules :ap) 0))))



(defn generate-wounds [defender-unit weapon impact-hits hits]
  (flatten (->> (for [hit hits]
                  (when (< (roll-defender)
                           (+
                            (apply max (map :defense defender-unit))
                            (ap weapon hit impact-hits)))
                    (or (-> weapon :specialRules :deadly) 1)))
                (remove nil?))))

(defn roll-impacts [attacker defender weapon]
  (let [hits-impact-unit (if (-> attacker :specialRules :impact)
                           (take (:size defender) (repeat (:quality attacker))) [])
        hits-impact-weapon (if (-> weapon :specialRules :impact)
                             (take (:size defender) (repeat (:quality attacker))) [])]
    (concat hits-impact-unit hits-impact-weapon)
    ))


(defn roll-saves [hits weapon attacker-unit defender-unit]
  (concat
   (->> (generate-wounds defender-unit weapon false hits)
        (regeneration-rolls defender-unit))
   (->>
    (roll-impacts attacker-unit defender-unit weapon)
    (generate-wounds defender-unit  weapon true)
    (regeneration-rolls defender-unit))))

(defn roll-hits [attacker-unit weapon defender]
  (flatten
   (for [_ (range 0 (:size weapon))
         _ (range 0 (:attacks weapon))]
     (let [hits (->> (repeatedly (max-hits-blast weapon defender) roll-attacker)
                     (filter-hits attacker-unit))]
       (special-rules-hits attacker-unit weapon hits)))))

(defn fight [attacker defender]
  (->
   (apply
    merge-with
    into
    (for [attacker attacker
          weapon (:weapons attacker)]
      {(str (:name attacker) " " (:name weapon)) (roll-saves
                         (roll-hits attacker weapon defender)
                         weapon attacker defender)}))
   (sum-wounds)))

(defn run-experiments [attacker defender n]
  (->> (repeatedly n #(fight attacker defender))
       (apply merge-with (partial into))
       (reduce (fn [result [k v]]
                 (assoc result k {:values v
                                  :stats  (freq/stats (frequencies v))}))
               {})))
