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
   {}))


(def api-url
  "https://webapp.onepagerules.com/api/")


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
            :defense (:defense unit-data)
            :size    (:size unit-data)
            :combined (:combined unit)
            :id      (:id unit-data)
            :weapons (->> (if (not-empty filtered-weapons)
                            (map #(select-keys % [:name :attacks :specialRules]) filtered-weapons)
                            (:equipment unit-data))
                          )

            }))
       (group-by :id)
       (map (fn [[_ v]]
              (if (:combined (first v))
                (assoc (first v) :size (apply + (map :size v)))
                v)))
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
                         (reset! army {:units (merge-data units-file api-data)})
                         @army))}}}))


(defmethod ig/init-key ::string
  [_ x]
  (string-resource x))

(defmethod ig/init-key ::army
  [_ _]
  army-resource)



(comment

  (get-units-stats! "z65fgu0l29i4lnlu")



 )
