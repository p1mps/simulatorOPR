(ns ^:figwheel-hooks p1mps.simulator.frontend.main
  (:require
   [ajax.core :refer [json-request-format json-response-format POST]]
   [clojure.string :as string]
   [reagent.core :as r]
   [reagent.dom :as rdom]))

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
                                                    (let [attacks (-> e .-target .-value)]
                                                      (swap! app-state
                                                             assoc-in
                                                             [:attacker-selected unit-id :weapons @id :attacks] attacks)
                                                      (println (:attacker-selected @app-state))))}]]
              [:th [:input#ap {:type      "text" :defaultValue (or (get-special-rule (:specialRules weapon) "AP") "-") :class "input"
                               :on-change
                               (fn [e]
                                 (let [ap (-> e .-target .-value)
                                       special-rules (-> @app-state
                                                         :attacker-selected
                                                         (get unit-id)
                                                         :weapons
                                                         (get @id)
                                                         :specialRules)
                                       ap-rule (some #(when (= (:name %) "AP") %) special-rules)
                                       index-ap-rule (.indexOf special-rules ap-rule)
                                       new-ap-rule (assoc ap-rule :rating ap)
                                       new-special-rules (assoc special-rules  index-ap-rule new-ap-rule)]

                                   (swap! app-state
                                          assoc-in
                                          [:attacker-selected unit-id :weapons @id :specialRules] new-special-rules)
                                   (println (:attacker-selected @app-state))))
                               }]]]]]]
          ))))])



(defn unit-component [units show-weapons]
  (let [unit-id (atom -1)]
    (for [unit units]
      (do (swap! unit-id inc)
          (list
           [:div.is-12 {:key "1"}
            [:table.table.is-fullwidth
             [:thead
              [:tr
               [:th "Quality"]
               [:th "Defense"]
               [:th "Regeneration"]
               [:th "Tough"]
               [:th "Size"]]]
             [:tbody
              [:tr
               [:th [:input#quality {:type      "text" :defaultValue (:quality unit) :class "input"
                                     :on-change (fn [e]
                                                  (let [quality (-> e .-target .-value)]
                                                    (swap! app-state
                                                           assoc-in
                                                           [:attacker-selected @unit-id :quality] quality))
                                                  (println (:attacker-selected @app-state)))}]]
               [:th [:input#defense {:type      "text" :defaultValue (:defense unit) :class "input"
                                     :on-change (fn [e]
                                                  (let [defense (-> e .-target .-value)]
                                                    (swap! app-state
                                                           assoc-in
                                                           [:attacker-selected @unit-id :defense] defense))
                                                  (println (:attacker-selected @app-state)))}]]
               [:th [:input#rules {:type "text" :defaultValue (or (-> unit :specialRules :regeneration) "-") :class "input"
                                   :on-change
                                   (fn [e]
                                     (let [regeneration (-> e .-target .-value)]
                                       (swap! app-state
                                              assoc-in
                                              [:attacker-selected @unit-id :special-rules :regeneration] regeneration))
                                     (println (:attacker-selected @app-state)))}]]
               [:th (or (:tough unit) "-")]
               [:th (:size unit)]]]]]
           (when show-weapons (weapons-component @unit-id (:weapons unit)))

           )))))


(defn plot-graph []
  (let [data (for [[weapon wounds] (-> @app-state :fight)]
               (let [data (frequencies (:values wounds))]
                 {:y          (vals data)

                  :name       weapon
                  :showlegend true
                  :type       "bars"}))]
    (println data)
    (js/Plotly.newPlot
     (.getElementById js/document "graph")
     (clj->js
      data)
     (clj->js {:title      "Wounds"
               :yaxis      {:title {:text "N"}}
               :xaxis      {:title {:text "Wounds"}}

               :responsive true}))))

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
           (when (-> @app-state :fight)
             (plot-graph)
             (for [[weapon wounds] (-> @app-state :fight)]
               [:div {:id weapon}
                [:p (str (name weapon) " expected wounds " (:mean (:stats wounds))) ]]))
           ))])

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
