(ns p1mps.simulator.core
  (:require
   [integrant.core :as ig]
   [p1mps.simulator.fight :as fight]
   [p1mps.simulator.parse :as parse]
   [cheshire.core :as json]
   [yada.yada :as yada]))

(def NUM_EXPERIMENTS 1)


(def army-resource
 (yada/resource
  {:methods
   {:post {:parameters {:form {:file String}}
           :consumes #{"multipart/form-data"}
           :produces {:media-type "application/json"}
           :response (fn [ctx]
                       (let [army-json (-> ctx :parameters :form :file (json/parse-string true))
                             army-data (parse/parse-data army-json)]
                         army-data))}}}))

(def fight-resource
 (yada/resource
  {:methods
   {:post {:parameters {:form {:attacker-unit String :defender-unit String}}
           :consumes #{"application/json"}
           :produces {:media-type "application/json"}
           :response (fn [ctx]
                       (let [attacker-unit (-> ctx :body :attacker-selected)
                             defender-unit (-> ctx :body :defender-selected)
                             fight (fight/run-experiments attacker-unit defender-unit NUM_EXPERIMENTS)]
                         fight))}}}))


(defmethod ig/init-key ::army
  [_ _]
  army-resource)

(defmethod ig/init-key ::fight
  [_ _]
  fight-resource)
