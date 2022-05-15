(ns p1mps.simulator.core-test
  (:require  [clojure.test :refer :all]
             [p1mps.simulator.core :as sut]))

(def weapon
  {:name "weapon"
   :attacks 1
   :specialRules []})

(def weapon-deadly
  {:name "weapon"
   :attacks 1
   :specialRules {:deadly 3}})

(def weapon-ap
  {:name "weapon ap"
   :attacks 1
   :specialRules {:ap 1}})

(def weapon-blast
  {:attacks 1
   :specialRules {:blast 3}})

(def weapon-3-attacks
  {:name "weapon 3 attacks"
   :attacks 3
   :specialRules []})


(def tank
  {:quality 4
   :size    1
   :weapons [{:name         "cannon"
              :attacks      1
              :specialRules {:blast 3}}]})

(def tank-mega-blast
  {:quality 4
   :size    1
   :weapons [{:name         "cannon"
              :attacks      1
              :specialRules {:blast 6}}]})

(def guardsman
  {:quality 5
   :size    1
   :weapons [{:name         "gun"
              :attacks      1
              :specialRules []}]})


(def guardsmen
  {:quality 5
   :size    2
   :weapons [{:name         "gun"
              :attacks      1
              :specialRules []}
             {:name         "ccw"
              :attacks      1
              :specialRules []}]})

(def guardsman-ap
  (assoc guardsman
         :weapons [weapon-ap]))

(def guardsman-3-attacks
  (assoc guardsman
         :weapons [weapon-3-attacks]))

(def spacemarine
  {:size 3
   :defense 3})


(deftest parse-special-rules
  (testing "correct parsing"
    (is (= {:ap 1, :blast 1, :deadly 1, :impact 1}
           (sut/parse-special-rules [{:label "AP(1)"}
                                     {:label "Blast(1)"}
                                     {:label "Deadly(1)"}
                                     {:label "Impact(1)"}])))))

(deftest fight
  (testing "fighting without size with all hits"
    (with-redefs [sut/roll-attacker (fn [] 6)
                  sut/roll-defender (fn [] 2)]
      (sut/fight [guardsman] [spacemarine])))
  (testing "fighting with size with all hits"
    (with-redefs [sut/roll-attacker (fn [] 6)
                  sut/roll-defender (fn [] 2)]
      (is (= {"gun" '(2)
              "ccw" '(2)} (sut/fight [guardsmen] [spacemarine])))))
  (testing "fighting with blast weapon"
    (with-redefs [sut/roll-attacker (fn [] 6)
                  sut/roll-defender (fn [] 2)]
      (is (= {"cannon" [3]} (sut/fight [tank] [spacemarine])))))
  (testing "fighting with ap weapon"
    (with-redefs [sut/roll-attacker (fn [] 6)
                  sut/roll-defender (fn [] 3)]
      (is (= {"weapon ap" [1]} (sut/fight [guardsman-ap] [spacemarine]))))
    (with-redefs [sut/roll-attacker (fn [] 6)
                  sut/roll-defender (fn [] 4)]
      (is (= {"weapon ap" [0]} (sut/fight [guardsman-ap] [spacemarine])))))
  (testing "fighting with mega blast weapon"
    (with-redefs [sut/roll-attacker (fn [] 6)
                  sut/roll-defender (fn [] 2)]
      (is (= {"cannon" [3]} (sut/fight [tank-mega-blast] [spacemarine]))))))


(deftest run-experiments
  (testing "running n experiments"
    (with-redefs [sut/roll-attacker (fn [] 6)
                  sut/roll-defender (fn [] 2)]
      (is (= {"gun"
              {:values '(2 2),
               :stats
               {:mean         2.0,
                :median       2,
                :min          2,
                :max          2,
                :percentiles  {25 2, 50 2, 75 2, 90 2, 95 2, 99 2, 99.9 2},
                :sample-count 2,
                :variance     0.0,
                :stdev        0.0,
                :sum          4.0}},
              "ccw"
              {:values '(2 2),
               :stats
               {:mean         2.0,
                :median       2,
                :min          2,
                :max          2,
                :percentiles  {25 2, 50 2, 75 2, 90 2, 95 2, 99 2, 99.9 2},
                :sample-count 2,
                :variance     0.0,
                :stdev        0.0,
                :sum          4.0}}}
             (sut/run-experiments [guardsmen] [spacemarine] 2))))))

(deftest save?
  (testing "defended with roll of 6"
    (is (= true (sut/save? spacemarine {} 6))))
  (testing "defended with no ap"
    (is (= true (sut/save? spacemarine {} 3)))))


(def army-edn (read-string (slurp "army.edn")))
(def merge-data-edn (read-string (slurp "merge-data.edn")))

(deftest parse-file
  (testing "parse file correctly"
    (is (= army-edn (sut/parse-file (slurp "army.json"))))))


(deftest merge-data
  (testing "merges data correctly"
    (is (= merge-data-edn (sut/merge-data (:units-file army-edn) (:api-data army-edn))))))




(deftest roll-hits
  (testing "rolling hits 3 attacks"
    (with-redefs [sut/roll-attacker (fn [] 6)]
      (is (= '(6 6 6) (sut/roll-hits guardsman weapon-3-attacks spacemarine))))
    )
  (testing "rolling hits missing"
    (with-redefs [sut/roll-attacker (fn [] 3)]
      (is (= '() (sut/roll-hits guardsman weapon-3-attacks spacemarine))))
    )
  (testing "rolling hits with blast"
    (with-redefs [sut/roll-attacker (fn [] 6)]
      (is (= '(6 6 6) (sut/roll-hits guardsman weapon-blast spacemarine))))
    ))


(deftest roll-saves
  (testing "rolling saves"
    (with-redefs [sut/roll-defender (fn [] 2)]
      (sut/roll-saves spacemarine weapon [1])))
  (testing "rolling saves deadly"
    (with-redefs [sut/roll-defender (fn [] 2)]
      (is (= '(3) (sut/roll-saves spacemarine weapon-deadly [1]))))
    ))
