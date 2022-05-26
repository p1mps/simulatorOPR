(ns p1mps.simulator.core-test
  (:require
   [cheshire.core :as json]
   [clojure.test :refer :all]
   [p1mps.simulator.core :as sut]))



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


(slurp "army.json")

(run-tests)
