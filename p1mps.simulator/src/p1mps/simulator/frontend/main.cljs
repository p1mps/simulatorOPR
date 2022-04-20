(ns ^:figwheel-hooks p1mps.simulator.frontend.main
  (:require
   [ajax.core :refer [POST json-response-format json-request-format]]
   [clojure.string :as string]
   [reagent.core :as r]
   [reagent.dom :as rdom]))

(defonce app-state (r/atom {}))


(defn attacker-upload-ok [resp]
  (swap! app-state assoc :attacker resp)
  (swap! app-state assoc :attacker-unit (first (-> @app-state :attacker :units))))

(defn defender-upload-ok [resp]
  (swap! app-state assoc :defender resp)
  (swap! app-state assoc :defender-unit (first (-> @app-state :defender :units))))

(defn attacker-upload-error [resp]
  (println "ERROR!" resp))

(defn defender-upload-error [resp]
  (println "ERROR!" resp))

(defn upload-form [army]
  )
(defn clj->json
  [ds]
  (.stringify js/JSON (clj->js ds)))

(defn app-components []
  [:div [:form {:method   "POST"}
         [:div.file.field
          [:label.file-label
           [:input.file-input {:id        "Attacker army"
                               :name      "army",
                               :type      "file"
                               :on-change (fn [e]
                                            (swap! app-state assoc "Attacker army" (-> e .-target .-value))
                                            (let [attacker-army      (.getElementById js/document "Attacker army")

                                                  attacker-file      (aget (.-files attacker-army) 0)

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
                               :on-change (fn [e]
                                            (swap! app-state assoc "Defender army" (-> e .-target .-value))
                                            (let [defender-army (.getElementById js/document "Defender army")
                                                  defender-file      (aget (.-files defender-army) 0)
                                                  form-data-defender (js/FormData.)
                                                  _ (.append form-data-defender "file" defender-file)]

                                              (POST "/api/army" {:body            form-data-defender
                                                                 :handler         defender-upload-ok
                                                                 :error-handler   defender-upload-error
                                                                 :response-format (json-response-format {:keywords? true})})
                                              ))}]
           [:span.file-cta
            [:span.file-icon [:i.fas.fa-upload]]
            [:span.file-label "Defender army"]]
           [:span.file-name (last (string/split (get @app-state "Defender army") "\\"))]]]]

   (when (:attacker-unit @app-state)
     [:div.column
      [:div.select
       [:select
        {:on-change (fn [e]
                      (let [id   (-> e .-target .-value)
                            unit (first (filter #(= (:id %) id) (-> @app-state :attacker :units)))]
                        (swap! app-state assoc :attacker-unit unit)))}
        (for [unit (-> @app-state :attacker :units)]
          [:option {:value (:id unit)} (:name unit)])]]
      [:p (str (-> @app-state :attacker-unit))]])

   (when (:defender-unit @app-state)
         [:div.column
          [:div.select
           [:select
            {:on-change (fn [e]
                          (let [id   (-> e .-target .-value)
                                unit (first (filter #(= (:id %) id) (-> @app-state :defender :units)))]
                            (swap! app-state assoc :defender-unit unit)))}
            (for [unit (-> @app-state :defender :units)]
              [:option {:value (:id unit)} (:name unit)])
            ]]
          [:p (str (-> @app-state :defender-unit))]
          ])

   (when (and (:attacker-unit @app-state) (:defender-unit @app-state))
     [:div.column
      [:div.field
       [:button.button
        {:on-click (fn [ev]
                     (.preventDefault ev)
                     (POST "/api/fight" {:params   (select-keys @app-state [:attacker-unit :defender-unit])
                                         :format :json
                                         :response-format (json-response-format {:keywords? true})})
                     )}
        "Fight!"]]])


   ])


;; This is called once
(defn init []
  (enable-console-print!)
  (let [app (js/document.getElementById "app")]
    (rdom/render [app-components] app))
  )

;; This is called every time you make a code change
(defn ^:after-load reload []
  (init))



(defonce run
  (init))
