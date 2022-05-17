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
  [:div.columns
   (for [weapon weapons]
     (let [index (.indexOf weapons weapon)]
       [:div [:div.column
              [:table.table
               [:thead
                [:tr
                 [:th "Weapon"]
                 [:th "Attacks"]
                 [:th "AP"]]]
               [:tbody
                [:tr
                 [:th (:name weapon)]
                 [:th [:input#attacks {:id           (str "attacks-" index)
                                       :type         "text" :class "input"
                                       :value (:attacks weapon)
                                       :on-change    (fn [e]
                                                       (let [attacks (js/parseInt (-> e .-target .-value))]
                                                         (swap! app-state
                                                                assoc-in
                                                                [:attacker-selected unit-id :weapons index :attacks] attacks)
                                                         (println (:attacker-selected @app-state))))}]]
                 [:th [:input#ap {:type "text" :value (or (:ap (:specialRules weapon)) "-") :class "input"
                                  :on-change
                                  (fn [e]
                                    (let [ap (js/parseInt (-> e .-target .-value))]
                                      (swap! app-state
                                             assoc-in
                                             [:attacker-selected unit-id :weapons index :specialRules :ap] ap)
                                      (println (:attacker-selected @app-state))))
                                  }]]]]]]]
       ))])




(defn unit-component-attacker [units]
  (let [unit-id (atom -1)]
    (for [unit units]
      (do (swap! unit-id inc)
          [:div [:table.table
                 [:thead
                  [:tr
                   [:th "Quality"]
                   [:th "Size"]]]
                 [:tbody
                  [:tr
                   [:th
                    [:input {:id        @unit-id
                             :type      "text" :value (:quality unit) :class "input"
                             :on-change (fn [e]
                                          (let [quality (js/parseInt (-> e .-target .-value))
                                                unit-id (js/parseInt (-> e .-target .-id))]
                                            (swap! app-state
                                                   assoc-in
                                                   [:attacker-selected unit-id :quality] quality))

                                          (println unit-id)
                                          (println (get (:attacker-selected @app-state) unit-id)))}]]

                   [:th (:size unit)]]]]
           [:div (weapons-component @unit-id (:weapons unit))
            (when (< @unit-id (- (count units) 1))
              (list
               [:hr.border-black]
               ))]]
          ))))

(defn unit-component-defender [units]
  (let [unit-id (atom -1)]
    (for [unit units]
      (do (swap! unit-id inc)
          [:div
           [:table.table
                 [:thead
                  [:tr
                   [:th "Defense"]
                   [:th "Regeneration"]
                   [:th "Tough"]
                   [:th "Size"]]]
                 [:tbody
                  [:tr
                   [:th [:input {:id        @unit-id
                                 :type      "text" :value (:defense unit) :class "input"
                                 :on-change (fn [e]
                                              (let [defense (js/parseInt (-> e .-target .-value))
                                                    unit-id (js/parseInt (-> e .-target .-id))]
                                                (swap! app-state
                                                       assoc-in
                                                       [:defender-selected unit-id :defense] defense))
                                              (println (:defender-selected @app-state)))}]]
                   [:th [:input#rules {:id   @unit-id
                                       :type "text" :value (or (-> unit :specialRules :regeneration) "-") :class "input"
                                       :on-change
                                       (fn [e]
                                         (let [regeneration (js/parseInt (-> e .-target .-value))
                                               unit-id      (js/parseInt (-> e .-target .-id))]
                                           (swap! app-state
                                                  assoc-in
                                                  [:defender-selected unit-id :specialRules :regeneration] regeneration))
                                         (println (:defender-selected @app-state)))}]]
                   [:th (or (:tough unit) "-")]
                   [:th (:size unit)]]]]]
          ))))

(defn graph-title [stats]
  (str
   (name (:name stats))
   " median value " (-> stats :stats :median)))

(defn plot-graph []
  (let [data (vec
              (for [[weapon wounds] (-> @app-state :fight)]
                (let [freqs (into (sorted-map) (frequencies (:values wounds)))]
                  {:y     (vals freqs)
                   :x     (keys freqs)

                   :stats (:stats wounds)
                   :name  weapon
                                        ;:showlegend true
                   :type  "bars"})))]

    (doseq [i (range 0 (count data))]
      (js/Plotly.newPlot
       (.getElementById js/document (str "graph" i))
       (clj->js [(get data i)])
       (clj->js {
                 :title (graph-title (get data i))
                 :xaxis {:title {:text "Wounds"}}

                 :responsive true})))))

(defn app-components []
  [:div
   ;; [:p (str (:attacker-selected @app-state))]
   ;; [:br]
   ;; [:p (str (:defender-selected @app-state))]
   [:form {:method "POST"}
    [:div.file.field.box
       [:label.file-label
        [:input.file-input
         {:id           "Attacker army"
          :name         "army",
          :type         "file"

          :defaultValue ""
          :on-change    (fn [e]
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
    [:div.file.field.box
     [:label.file-label
      [:input.file-input {:id           "Defender army"
                          :name         "army",
                          :type         "file"
                          :defaultValue ""
                          :on-change    (fn [e]
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
     [:div [:div.select.mt-5 {:key "1"}
            [:select
             {:id           "attackers"
              :defaultValue ""
              :on-change    (fn [_]
                              (let [e    (js/document.getElementById "attackers")
                                    id   (.-id (aget (.-options e) (.-selectedIndex e)))
                                    unit (first
                                          (->> (-> @app-state :attacker)
                                               (filter (fn [v]
                                                         (some (comp #{id} :id) v)))))]
                                (println id " " unit)
                                (swap! app-state assoc :attacker-selected unit)))}
             (for [unit (:attacker @app-state)]
               [:option {:id (str (:id (first unit)))} (:name (first unit))])]]
      [:div.mt-5.box.border-black {:key "2"}
       (unit-component-attacker (:attacker-selected @app-state))]])

   (when (:defender-selected @app-state)
     [:div [:div.select.mt-5 {:key "1"}
            [:select
             {:id           "defenders"
              :defaultValue ""
              :on-change    (fn [_]
                              (let [e    (js/document.getElementById "defenders")
                                    id   (.-id (aget (.-options e) (.-selectedIndex e)))
                                    unit (first
                                          (->> (-> @app-state :defender)
                                               (filter (fn [v]
                                                         (some (comp #{id} :id) v)))))]
                                (println id " " unit)
                                (swap! app-state assoc :defender-selected unit)))}
             (for [unit (:defender @app-state)]
               [:option {:id (str (:id (first unit)))} (:name (first unit))])]]
      [:div.mt-5.box.border-black {:key "2"}
       (unit-component-defender (:defender-selected @app-state))]])

   (when (and (:attacker-selected @app-state) (:defender-selected @app-state))
     [:div [:div.field
            [:button.button.mt-5
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

        )]
     )])

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
