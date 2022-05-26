(ns ^:figwheel-hooks p1mps.simulator.frontend.main
  (:require
   [ajax.core :refer [json-request-format json-response-format POST]]
   [clojure.string :as string]
   [reagent.core :as r]
   [reagent.dom :as rdom]))

(def DEBUG false)

(defonce app-state (r/atom {}))

(defn attacker-upload-ok [resp]
  (swap! app-state assoc :attacker resp)
  (swap! app-state assoc :attacker-selected (first (-> @app-state :attacker))))

(defn fight-ok [resp]
  (swap! app-state assoc :fight resp))

(defn fight-error [resp]
  (println "ERROR!" resp))

(defn defender-upload-ok [resp]
  (swap! app-state assoc :defender resp)
  (swap! app-state assoc :defender-selected (first (-> @app-state :defender))))

(defn attacker-upload-error [resp]
  (println "ERROR!" resp))

(defn defender-upload-error [resp]
  (println "ERROR!" resp))


(defn special-rules-attacker [unit]
  (let [rules (map #(str (:name %) " " (:rating %) " ")
                   (:originalSpecialRules unit))]
    (if (empty? rules)
      "-"
      rules))

  ;; (let [special-rules (keys (-> unit :specialRules))]
  ;;   (loop [rule   special-rules
  ;;          result ""]
  ;;     (if (empty? rule)
  ;;       result
  ;;       (condp = (first rule)
  ;;         :relentless (recur (rest rule) (str " Relentless " ))
  ;;         :impact     (recur (rest rule) (str " Impact " ))
  ;;         (recur (rest rule) result)))))


  )

(defn parse-rules [rules]
  (let [rules [(when (:impact rules)
                 "Impact ")
               (when (:deadly rules)
                 (str "Deadly " (:deadly rules)))
               (when (:rending rules)
                 (str "Rending"))]]
    (remove nil? rules)))

(defn special-rules-attacker-weapon [weapon]
  (let [parsed-rules (parse-rules (-> weapon :specialRules))]
    (if (empty? parsed-rules)
      "-"
      (clojure.string/join #" "
                         parsed-rules))))


(defn weapons-component [unit-index weapons]
  [:div [:table.table
         [:thead
          [:tr
           [:th "Weapon"]
           [:th "Attacks"]
           [:th "AP"]
           ;;[:th "N.Models"]
           [:th "Special Rules"]]]
         [:tbody
          (for [weapon weapons]
            (let [index (.indexOf weapons weapon)]
              [:tr
               [:th (or (:name weapon) (:label weapon))]
               [:th [:input#attacks {:id        (str "attacks-" index)
                                     :type      "text" :class "input"
                                     :value     (:attacks weapon)
                                     :on-change (fn [e]
                                                  (let [attacks (js/parseInt (-> e .-target .-value))]
                                                    (swap! app-state
                                                           assoc-in
                                                           [:attacker-selected unit-index :weapons index :attacks] attacks)
                                                    (println (:attacker-selected @app-state))))}]]
               [:th [:input#ap {:type "text" :value (or (:ap (:specialRules weapon)) "-") :class "input"
                                :on-change
                                (fn [e]
                                  (let [ap (js/parseInt (-> e .-target .-value))]
                                    (swap! app-state
                                           assoc-in
                                           [:attacker-selected unit-index :weapons index :specialRules :ap] ap)
                                    (println (:attacker-selected @app-state))))
                                }]]
               ;; [:th [:input#ap {:type "text" :value (:size weapon) :class "input"
               ;;                  :on-change
               ;;                  (fn [e]
               ;;                    (let [size (js/parseInt (-> e .-target .-value))]
               ;;                      (swap! app-state
               ;;                             assoc-in
               ;;                             [:attacker-selected unit-index :weapons index :size] size)
               ;;                      (println (:attacker-selected @app-state))))}]]
               ;;[:th (:size weapon)]
               [:th (special-rules-attacker-weapon weapon)]]))]]])


(defn unit-component-attacker [units]
  (for [unit units]
    (let [index (.indexOf units unit)]
      [:div.columns
       [:div.column
        [:p (:name unit)]
        [:div
         [:table.table
          [:thead
           [:tr
            [:th "Quality"]
            [:th "Size"]
            [:th "Special Rules"]]]
          [:tbody
           [:tr
            [:th
             [:input {:type      "text" :value (:quality unit) :class "input"
                      :on-change (fn [e]
                                   (let [quality (js/parseInt (-> e .-target .-value))]
                                     (swap! app-state
                                            assoc-in
                                            [:attacker-selected index :quality] quality))
                                   (println (:attacker-selected @app-state)))}]]

            [:th (:size unit)]
            [:th (special-rules-attacker unit)]]]]]]
       [:div.column.is-three-fifths [:div (weapons-component index (:weapons unit))]]])))

(defn unit-component-defender [units]
  (for [unit units]
    (let [index (.indexOf units unit)]
         [:p (:name unit)
          [:div
           [:table.table
            [:thead
             [:tr
              [:th "Defense"]
              [:th "Regeneration"]
              ;;[:th "Tough"]
              [:th "Size"]
              [:th "Special Rules"]
              ]]
            [:tbody
             [:tr
              [:th [:input {:type      "text" :value (:defense unit) :class "input"
                            :on-change (fn [e]
                                         (let [defense (js/parseInt (-> e .-target .-value))]
                                           (swap! app-state
                                                  assoc-in
                                                  [:defender-selected index :defense] defense))
                                         (println (:defender-selected @app-state)))}]]
              [:th [:input#rules {:type "text" :value (or (-> unit :specialRules :regeneration) "-") :class "input"
                                  :on-change
                                  (fn [e]
                                    (let [regeneration (js/parseInt (-> e .-target .-value))]
                                      (swap! app-state
                                             assoc-in
                                             [:defender-selected index :specialRules :regeneration] regeneration))
                                    (println (:defender-selected @app-state)))}]]
              ;;[:th (or (-> unit :specialRules :tough) "-")]
              [:th (:size unit)]
              [:th (special-rules-attacker unit)]]]]]])))

(defn graph-title [stats]
  (str
   (name (:name stats))
   " expected wounds " (-> stats :stats :median)))

(defn plot-graph []
  (doseq [i (range 0 10)]
      (.add (.-classList (.getElementById js/document (str "graph" i))) "no-display"))
  (let [data (vec
              (for [[weapon wounds] (-> @app-state :fight)]
                (let [freqs (into (sorted-map) (frequencies (:values wounds)))]
                  {:y     (vals freqs)
                   :x     (keys freqs)
                   :stats (:stats wounds)
                   :name  weapon
                   :type  "bars"})))]
    (doseq [i (range 0 (count data))]
      (js/Plotly.newPlot
       (.getElementById js/document (str "graph" i))
       (clj->js [(get data i)])
       (clj->js {:title (graph-title (get data i))
                 :xaxis {:title {:text "Wounds"}}
                 :width 650
                 :autosize true
                 :responsive true}))
      (.remove (.-classList (.getElementById js/document (str "graph" i))) "no-display")

      )))

(defn input-attacker-army []
  [:div
   [:div.file.field.box
    [:label.file-label
     [:input.file-input
      {:id           "Attacker army"
       :name         "army",
       :type         "file"
       :defaultValue ""
       :on-change    (fn [e]
                       (swap! app-state assoc :attacker-army (-> e .-target .-value))
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
     [:span.file-name (last (string/split (get @app-state :attacker-army) "\\"))]]]])

(defn input-defender-army []
  [:div.file.field.box
    [:label.file-label
     [:input.file-input {:id           "Defender army"
                         :name         "army",
                         :type         "file"
                         :defaultValue ""
                         :on-change    (fn [e]
                                         (swap! app-state assoc :defender-army (-> e .-target .-value))
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
     [:span.file-name (last (string/split (get @app-state :defender-army) "\\"))]]])

(defn name-unit-option [units]
  (map #(str (:name %) " ") units))

(defn select-attacker []
   (when (:attacker-selected @app-state)
     [:div [:div.select.mt-5 {:key "1"}
            [:select
             {:id           "attackers"
              :defaultValue ""
              :on-change    (fn [_]
                              (let [e    (js/document.getElementById "attackers")
                                    id   (js/parseInt (.-id (aget (.-options e) (.-selectedIndex e))))
                                    unit (get (:attacker @app-state) id)]
                                (swap! app-state assoc :attacker-selected unit)))}
             (doall (for [unit (:attacker @app-state)]
                      [:option {:id (.indexOf (:attacker @app-state) unit)
                                :key (.indexOf (:attacker @app-state) unit)} (name-unit-option unit)]))]]
      [:div.mt-5.box {:key "2"}
       (unit-component-attacker (:attacker-selected @app-state))]]))

(defn select-defender []
  (when (:defender-selected @app-state)
    [:div
     [:div.select.mt-5 {:key "1"}
      [:select {:id           "defenders"
                :defaultValue ""
                :on-change    (fn [_]
                                (let [e    (js/document.getElementById "defenders")
                                      id   (js/parseInt (.-id (aget (.-options e) (.-selectedIndex e))))
                                      unit (get (:defender @app-state) id)]
                                  (swap! app-state assoc :defender-selected unit)))}
       (doall (for [unit (:defender @app-state)]
                [:option {:id  (.indexOf (:defender @app-state) unit)
                          :key (.indexOf (:defender @app-state) unit)} (name-unit-option unit)]))]
      ]
     [:div.mt-5.box {:key "2"}
      (unit-component-defender (:defender-selected @app-state))]]))

(defn fight []
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
             "Fight!"]
            (when (-> @app-state :fight)
              [:div.box.mt-5
               (let [sum-medians (reduce + (->>
                                            (vals (-> @app-state :fight))
                                            (map :stats )
                                            (map :median )))]
                 [:p (str "Total wounds " sum-medians)])
               (plot-graph)])]]))


(defn app-components []
  [:div
   (when DEBUG
     [:div
      [:p (str (-> @app-state :fight))]
      [:p (str "ATTACKER " (:attacker-selected @app-state))]
      [:br]
      [:p (str "DEFENDER " (:defender-selected @app-state))]])
   [:div.columns
    [:div.column (input-attacker-army)]
    [:center
     [:div.column
      [:button.button.m-5
       {:on-click (fn [ev]
                    (.preventDefault ev)
                    (let [attacker-selected (-> @app-state :attacker-selected)
                          attacker          (-> @app-state :attacker)
                          attacker-army     (-> @app-state :attacker-army)
                          defender-selected (-> @app-state :defender-selected)
                          defender          (-> @app-state :defender)
                          defender-army     (-> @app-state :defender-army)]
                      (swap! app-state assoc :attacker defender)
                      (swap! app-state assoc :attacker-selected defender-selected)
                      (swap! app-state assoc :attacker-army defender-army)

                      (swap! app-state assoc :defender-selected attacker-selected)
                      (swap! app-state assoc :defender attacker)
                      (swap! app-state assoc :defender-army attacker-army)

                      )

                    )}
       [:span.file-icon [:i.fas.fa-arrows-alt-h]] "Swap"]]]
    [:div.column (input-defender-army)]]
   [:div.columns [:div.column (select-attacker)]
    [:div.column (select-defender)]]
   (fight)])

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
