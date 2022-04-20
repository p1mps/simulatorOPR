(ns ^:figwheel-hooks p1mps.simulator.frontend.main
  (:require
   [ajax.core :refer [POST json-response-format]]
   [clojure.string :as string]
   [reagent.core :as r]
   [reagent.dom :as rdom]))

(defonce app-state (r/atom {:show-armies false}))


(defn attacker-upload-ok [resp]
  (swap! app-state assoc :attacker
         resp))

(defn defender-upload-ok [resp]
  (swap! app-state assoc :defender
         resp))

(defn attacker-upload-error [resp]
  (println "ERROR!" resp))

(defn defender-upload-error [resp]
  (println "ERROR!" resp))

(defn upload-form [army]
  )

(defn app-components []
  [:div [:form {:enc-type "multipart/form-data"
                :method   "POST"}
         [:div.file.field
          [:label.file-label
           [:input.file-input {:id        "Attacker army"
                               :name      "army",
                               :type      "file"
                               :on-change (fn [e]
                                            (swap! app-state assoc "Attacker army" (-> e .-target .-value)))}]
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
                                            (swap! app-state assoc "Defender army" (-> e .-target .-value)))}]
           [:span.file-cta
            [:span.file-icon [:i.fas.fa-upload]]
            [:span.file-label "Defender army"]]
           [:span.file-name (last (string/split (get @app-state "Defender army") "\\"))]]]
         [:div.field
          [:button.button
           {:on-click (fn [ev]
                        (.preventDefault ev)
                        (let [attacker-army      (.getElementById js/document "Attacker army")
                              defender-army      (.getElementById js/document "Defender army")
                              attacker-file      (aget (.-files attacker-army) 0)
                              defender-file      (aget (.-files defender-army) 0)
                              form-data-attacker (js/FormData.)
                              form-data-defender (js/FormData.)
                              _                  (.append form-data-attacker "file" attacker-file)
                              _                  (.append form-data-defender "file" defender-file)]
                          (POST "/api/army" {:body          form-data-attacker
                                             :handler       attacker-upload-ok
                                             :error-handler attacker-upload-error
                                             :response-format (json-response-format {:keywords? true})})
                          (POST "/api/army" {:body          form-data-defender
                                             :handler       defender-upload-ok
                                             :error-handler defender-upload-error
                                             :response-format (json-response-format {:keywords? true})})
                          (swap! app-state assoc :show-armies true)



                          ))}
           "Fight!"]]]
   (when (:show-armies @app-state)
     [:div.colums
      [:div.column
       [:div.select
        [:select
         {:on-change (fn [e]
                       (let [select          (.-target e)
                             selected-option (.-attributes (aget (.-options select) (.-selectedIndex select)))
                             unit-id         (.-value (.getNamedItem selected-option "id"))]
                         (println "unitid" unit-id)
                             ))}
         (for [unit (-> @app-state :attacker :units)]
           [:option {:id unit} (:name unit)])]]
       [:p (str (first (-> @app-state :attacker :units)))]]

      [:div.column
       [:div.select
        [:select
         {:on-change (fn [e]
                       ;;(println e)
                       )}
         (for [unit (-> @app-state :attacker :units)]
           [:option {:id unit} (:name unit)])
         ]]
       [:p (str (first (-> @app-state :defender :units)))]
       ]])])


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
