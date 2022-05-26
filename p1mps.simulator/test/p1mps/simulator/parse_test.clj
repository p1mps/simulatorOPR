(ns p1mps.simulator.parse-test
  (:require [p1mps.simulator.parse :as sut]
            [clojure.test :refer :all]))

(deftest parse-special-rules
  (testing "correct parsing"
    (is (= {:ap 1, :blast 1, :deadly 1, :impact true}
           (sut/parse-special-rules
            [{:name "AP" :rating "1"}
             {:name "Blast" :rating "1"}
             {:name "Deadly" :rating "1"}
             {:name "Impact" :rating "1"}]))))
  (testing "correct parsing unit"
    (is (= {:tough 1 :regeneration true :relentless true :impact true}
           (sut/parse-special-rules-unit
            [{:name "Tough" :rating "1"}
             {:name "Regeneration"}
             {:name "Relentless"}
             {:name "Impact"}])))))


(run-tests)


(def data (->
           (slurp "combined.json")
           (cheshire.core/parse-string true)
           (sut/parse-data)))


(map (fn [units]
       (map :name units))
     (vals data))
