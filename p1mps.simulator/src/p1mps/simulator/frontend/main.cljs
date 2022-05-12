(ns ^:figwheel-hooks p1mps.simulator.frontend.main
  (:require
   [ajax.core :refer [json-request-format json-response-format POST]]
   [clojure.string :as string]
   [reagent.core :as r]
   [reagent.dom :as rdom]
   ))

(defonce app-state (r/atom {}))

(defn attacker-upload-ok [resp]
  (swap! app-state assoc :attacker resp)
  (swap! app-state assoc :attacker-selected (first (-> @app-state :attacker))))

(defn fight-ok [resp]
  (swap! app-state
         assoc
         :fight (:fight resp)
         :stats (:stats resp)))

(defn fight-error [resp]
  (println "ERROR!" resp))

(defn defender-upload-ok [resp]
  (swap! app-state assoc :defender resp)
  (swap! app-state assoc :defender-selected (first (-> @app-state :defender))))

(defn attacker-upload-error [resp]
  (println "ERROR!" resp))

(defn defender-upload-error [resp]
  (println "ERROR!" resp))


(defn get-special-rule [rules rule]
  (:rating (first (filter #(= (:name %) rule) rules))))

(defn weapons-component [unit-id weapons]
  [:div.columns {:key "2"}
   (let [id (atom -1)]
     (for [weapon weapons]
       (do
         (swap! id inc)
         (list
          [:div.column {:key @id}
           [:table.table
            [:th "Weapon"]
            [:th "Attacks"]
            [:th "AP"]
            [:tbody
             [:tr
              [:th (:name weapon)]
              [:th [:input#attacks {:id           (str "attacks-" @id)
                                    :type         "text" :class "input"
                                    :defaultValue (:attacks weapon)
                                    :on-change    (fn [e]
                                                    (let [attacks (-> e .-target .-value)
                                                          weapons (-> (-> @app-state :attacker-selected)
                                                                      (get unit-id)
                                                                      :weapons)
                                                          weapon  (assoc (get weapons @id) :attacks attacks)
                                                          new-weapons (assoc weapons @id weapon)
                                                          attacker-selected (assoc (get (:attacker-selected @app-state) unit-id)
                                                                             :weapons
                                                                             new-weapons)
                                                          new-attacker (assoc
                                                                        (:attacker-selected @app-state)
                                                                        unit-id
                                                                        attacker-selected
                                                                        )]
                                                      (println attacker-selected)
                                                      (swap! app-state
                                                             assoc
                                                             :attacker-selected
                                                             new-attacker)
                                                      ))}]]
              [:th [:input#ap {:type      "text" :value (or (get-special-rule (:specialRules weapon) "AP") "-") :class "input"
                               :on-change #()}]]]]]]
          ))))])

(defn unit-component [units show-weapons]
  (let [unit-id (atom -1)]
    (for [unit units]
      (do
        (swap! unit-id inc)
        (list
         [:div.is-12 {:key "1"}
          [:table.table.is-fullwidth
           [:thead
            [:tr
             [:th "Quality"]
             [:th "Defense"]
             [:th "Tough"]
             [:th "Size"]
             [:th "Special Rules"]]]
           [:tbody
            [:tr
             [:th [:input#quality {:type      "text" :value (:quality unit) :class "input"
                                   :on-change #()}]]
             [:th [:input#defense {:type      "text" :value (:defense unit) :class "input"
                                   :on-change #()}]]
             [:th (:tough unit)]
             [:th (:size unit)]
             [:th (map #(str " " (:name %) " " (:rating %)) (:specialRules unit))]]]]]
         (when show-weapons (weapons-component @unit-id (:weapons unit)))

         )))))


(defn app-components []
  [:div.box
   [:form {:method "POST"}
    [:div.file.field
     [:label.file-label
      [:input.file-input {:id        "Attacker army"
                          :name      "army",
                          :type      "file"
                          :defaultValue ""
                          :on-change (fn [e]
                                       (swap! app-state assoc "Attacker army" (-> e .-target .-value))
                                       (let [attacker-army (.getElementById js/document "Attacker army")

                                             attacker-file (aget (.-files attacker-army) 0)

                                             form-data-attacker (js/FormData.)
                                             _                  (.append form-data-attacker "file" attacker-file)]
                                         (POST "/api/army" {:body            form-data-attacker
                                                            :handler         attacker-upload-ok
                                                            :error-handler   attacker-upload-error
                                                            :response-format (json-response-format {:keywords? true})})

                                         ))}]
      [:span.file-cta
       [:span.file-icon [:i.fas.fa-upload]]
       [:span.file-label "Attacker army"]]
      [:span.file-name (last (string/split (get @app-state "Attacker army") "\\"))]]]
    [:div.file.field
     [:label.file-label
      [:input.file-input {:id        "Defender army"
                          :name      "army",
                          :type      "file"
                          :defaultValue ""
                          :on-change (fn [e]
                                       (swap! app-state assoc "Defender army" (-> e .-target .-value))
                                       (let [defender-army      (.getElementById js/document "Defender army")
                                             defender-file      (aget (.-files defender-army) 0)
                                             form-data-defender (js/FormData.)
                                             _                  (.append form-data-defender "file" defender-file)]

                                         (POST "/api/army" {:body            form-data-defender
                                                            :handler         defender-upload-ok
                                                            :error-handler   defender-upload-error
                                                            :response-format (json-response-format {:keywords? true})})
                                         ))}]
      [:span.file-cta
       [:span.file-icon [:i.fas.fa-upload]]
       [:span.file-label "Defender army"]]
      [:span.file-name (last (string/split (get @app-state "Defender army") "\\"))]]]]

   (when (:attacker-selected @app-state)
     (list
      [:div.select.mt-5 {:key "1"}
       [:select
        {:defaultValue ""
         :on-change (fn [e]
                      (let [id   (-> e .-target .-value)
                            unit (first
                                  (->> (-> @app-state :attacker)
                                       (filter (fn [v]
                                                 (some (comp #{id} :id) v)))))]
                        (println id " " unit)
                        (swap! app-state assoc :attacker-selected unit)))}
        (for [unit (:attacker @app-state)]
          [:option {:key (:id (first unit))} (:name (first unit))])]]
      [:div {:key "2"}
       (unit-component (:attacker-selected @app-state) true)]))


   (when (:defender-selected @app-state)
     (list
      [:div.select.mt-5
       [:select
        {:defaultValue ""
         :on-change (fn [e]
                      (let [id   (-> e .-target .-value)
                            unit (first
                                  (->> (-> @app-state :defender)
                                       (filter (fn [v]
                                                 (some (comp #{id} :id) v)))))]
                        (println id " " unit)
                        (swap! app-state assoc :defender-selected unit)))}
        (for [unit (:defender @app-state)]
          [:option {:key (:id (first unit))} (:name (first unit))])]]
      [:div
       (unit-component (:defender-selected @app-state) false)]))



   (when (and (:attacker-selected @app-state) (:defender-selected @app-state))
     (list [:div.field
            [:button.button
             {:on-click (fn [ev]
                          (.preventDefault ev)
                          (POST "/api/fight" {:params          (select-keys @app-state [:attacker-selected :defender-selected])
                                              :handler         fight-ok
                                              :error-handler   fight-error
                                              :format          :json
                                              :response-format (json-response-format {:keywords? true})})
                          )}
             "Fight!"]]
           (for [[weapon wounds] (-> @app-state :fight)]
             [:div {:id weapon}
              [:p (str (name weapon) " expected wounds " (:mean (:stats wounds))) ]
              ;;[:p (str (name weapon) " expected wounds " wounds) ]
              ]
             )))])

;; This is called once
(defn init []
  (enable-console-print!)
  (let [app (js/document.getElementById "app")]
    (rdom/render [app-components] app)))

;; This is called every time you make a code change
(defn ^:after-load reload []
  (init))

(defonce run
  (init))
