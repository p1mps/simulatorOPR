(ns p1mps.simulator.core
  (:require
   [cheshire.core :as json]
   [clj-http.client :as client]
   [integrant.core :as ig]
   [yada.yada :as yada]))

(defn string-resource
  [x]
  (yada/as-resource x))


(def army
  (atom
   {:units  []
    :race   ""
    :points 0}))


(def api-url
  "https://webapp.onepagerules.com/api/")

(defn get-units-stats! [army-id]
  (->> (-> (client/get (str api-url "/army-books/" army-id)) :body (json/parse-string true) :units)
       (map #(select-keys % [:cost :defense :quality]))))


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
                             ids (map :id (-> json :list :units))
                             army-id (-> json :armyId)]
                         (println file)
                         (swap! army (fn [army]
                                       (assoc army
                                              :units ids
                                              :units-stats (get-units-stats! army-id))))
                         @army))}}}))


(defmethod ig/init-key ::string
  [_ x]
  (string-resource x))

(defmethod ig/init-key ::army
  [_ _]
  army-resource)
