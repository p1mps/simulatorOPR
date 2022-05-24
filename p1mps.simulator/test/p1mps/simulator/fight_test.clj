(ns p1mps.simulator.fight-test
  (:require [p1mps.simulator.fight :as sut]
            [clojure.test :refer :all]))
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
   :size    1
   :specialRules {:ap 1}})

(def weapon-blast
  {:attacks 1
   :specialRules {:blast 3}})

(def weapon-3-attacks
  {:name "weapon 3 attacks"
   :attacks 3
   :specialRules []})

(def weapon-impact
  {:name "weapon impact"
   :attacks 1
   :size 1
   :specialRules {:impact 1}})

(def weapon-poison
  {:name "weapon poison"
   :attacks 1
   :size    1
   :specialRules {:poison true}})

(def tank
  {:quality 4
   :size    1
   :weapons [{:name         "cannon"
              :attacks      1
              :size         1
              :specialRules {:blast 3}}]})

(def tank-mega-blast
  {:quality 4
   :size    1
   :weapons [{:name         "cannon"
              :attacks      1
              :size         1
              :specialRules {:blast 6}}]})

(def guardsman
  {:quality 5
   :size    1
   :weapons [{:name         "gun"
              :attacks      1
              :size         1
              :specialRules []}]})


(def guardsmen
  {:quality 5
   :size    2
   :weapons [{:name         "gun"
              :attacks      1
              :size         2
              :specialRules []}
             {:name         "ccw"
              :attacks      1
              :size         2
              :specialRules []}]})

(def guardsman-ap
  (assoc guardsman
         :weapons [weapon-ap]))

(def guardsman-3-attacks
  (assoc guardsman
         :weapons [weapon-3-attacks]))

(def guardsman-impact
  (assoc guardsman
         :weapons [weapon-impact]))

(def guardsman-relentless
  (assoc guardsman
         :specialRules {:relentless true}))

(def guardsman-poison
  (assoc guardsman
         :weapons [weapon-poison]))

(def spacemarine
  {:size 1
   :defense 3})

(def spacemarines
  {:size 3
   :defense 3})


(deftest fight
  (testing "fighting without size with all hits"
    (with-redefs [sut/roll-attacker (fn [] 6)
                  sut/roll-defender (fn [] 2)]
      (is (= {"gun" '(1)} (sut/fight guardsman spacemarine)))))
  (testing "fighting with size with all hits"
    (with-redefs [sut/roll-attacker (fn [] 6)
                  sut/roll-defender (fn [] 2)]
      (is (= {"gun" '(2)
              "ccw" '(2)} (sut/fight guardsmen spacemarine)))))
  (testing "fighting with blast weapon"
    (with-redefs [sut/roll-attacker (fn [] 6)
                  sut/roll-defender (fn [] 2)]
      (is (= {"cannon" [1]} (sut/fight tank spacemarine)))
      (is (= {"cannon" [2]} (sut/fight tank (assoc spacemarine :size 2))))
      (is (= {"cannon" [3]} (sut/fight tank spacemarines)))
      (is (= {"cannon" [3]} (sut/fight tank (assoc spacemarine :size 4))))))
  (testing "fighting with ap weapon"
    (with-redefs [sut/roll-attacker (fn [] 6)
                  sut/roll-defender (fn [] 3)]
      (is (= {"weapon ap" [1]} (sut/fight guardsman-ap spacemarine))))
    (with-redefs [sut/roll-attacker (fn [] 6)
                  sut/roll-defender (fn [] 4)]
      (is (= {"weapon ap" [0]} (sut/fight guardsman-ap spacemarine)))))
  (testing "fighting with mega blast weapon"
    (with-redefs [sut/roll-attacker (fn [] 6)
                  sut/roll-defender (fn [] 2)]
      (is (= {"cannon" [3]} (sut/fight tank-mega-blast spacemarines)))
      (is (= {"cannon" [6]} (sut/fight tank-mega-blast (assoc spacemarines :size 7))))))
  (testing "fighting with impact"
    (with-redefs [sut/roll-attacker (fn [] 6)
                  sut/roll-defender (fn [] 2)]
      (is (= {"weapon impact" [4]} (sut/fight guardsman-impact spacemarines)))
      (is (= {"weapon impact" [7]} (sut/fight (assoc guardsman-impact :specialRules {:impact true}) spacemarines)))))
  (testing "fighting with relentless"
    (with-redefs [sut/roll-attacker (fn [] 6)
                  sut/roll-defender (fn [] 2)]
      (is (= {"gun" [2]} (sut/fight guardsman-relentless spacemarines)))))
  (testing "fighting with poison"
    (with-redefs [sut/roll-attacker (fn [] 6)
                  sut/roll-defender (fn [] 2)]
      (is (= {"weapon poison" [3]} (sut/fight guardsman-poison spacemarines))))))

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
             (sut/run-experiments guardsmen spacemarine 2))))))


(run-tests)
