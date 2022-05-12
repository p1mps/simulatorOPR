(ns p1mps.simulator.test.core-test
  (:require  [clojure.test :refer :all]
             [p1mps.simulator.core :as sut]))

(def weapon-ap
  {:specialRules {:ap 1}})

(def weapon-blast
  {:specialRules {:blast 3}})


(def tank
  {:quality 4
   :size    1
   :weapons [{:name         "cannon"
              :attacks      1
              :specialRules [{:label "Blast(3)"}]}]})

(def tank-mega-blast
  {:quality 4
   :size    1
   :weapons [{:name         "cannon"
              :attacks      1
              :specialRules [{:label "Blast(6)"}]}]})

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

(deftest wound?
  (testing "attacker 6 defender 1"
    (with-redefs [sut/roll-attacker (fn [] 6)
                  sut/roll-defender (fn [] 1)]
      (is (= true (sut/wound? guardsman spacemarine {})))))
  (testing "hit and no defense"
    (with-redefs [sut/roll-attacker (fn [] 5)
                  sut/roll-defender (fn [] 2)]
      (is (= true (sut/wound? guardsman spacemarine {})))))
  (testing "hit and no defense with ap"
    (with-redefs [sut/roll-attacker (fn [] 5)
                  sut/roll-defender (fn [] 3)]
      (is (= true (sut/wound? guardsman spacemarine weapon-ap))))))


(deftest fight
  (testing "fighting without size with all hits"
    (with-redefs [sut/roll-attacker (fn [] 6)
                  sut/roll-defender (fn [] 2)]
      (is (= {"gun" '(1)} (sut/fight [guardsman] [spacemarine])))))
  (testing "fighting with size with all hits"
    (with-redefs [sut/roll-attacker (fn [] 6)
                  sut/roll-defender (fn [] 2)]
      (is (= {"gun" '(2)
              "ccw" '(2)} (sut/fight [guardsmen] [spacemarine])))))
  (testing "fighting with blast weapon"
    (with-redefs [sut/roll-attacker (fn [] 6)
                  sut/roll-defender (fn [] 2)]
      (is (= {"cannon" [3]} (sut/fight [tank] [spacemarine])))))
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


(run-tests)
