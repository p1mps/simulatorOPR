// Compiled by ClojureScript 1.10.238 {}
goog.provide('p1mps.simulator.frontend.main');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('reagent.dom');
if(typeof p1mps.simulator.frontend.main.app_state !== 'undefined'){
} else {
p1mps.simulator.frontend.main.app_state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
p1mps.simulator.frontend.main.attacker_upload_ok = (function p1mps$simulator$frontend$main$attacker_upload_ok(resp){
cljs.core.swap_BANG_.call(null,p1mps.simulator.frontend.main.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"attacker","attacker",48869964),resp);

return cljs.core.swap_BANG_.call(null,p1mps.simulator.frontend.main.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906),cljs.core.first.call(null,new cljs.core.Keyword(null,"attacker","attacker",48869964).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state))));
});
p1mps.simulator.frontend.main.fight_ok = (function p1mps$simulator$frontend$main$fight_ok(resp){
return cljs.core.swap_BANG_.call(null,p1mps.simulator.frontend.main.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"fight","fight",1266695601),new cljs.core.Keyword(null,"fight","fight",1266695601).cljs$core$IFn$_invoke$arity$1(resp),new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(resp));
});
p1mps.simulator.frontend.main.fight_error = (function p1mps$simulator$frontend$main$fight_error(resp){
return cljs.core.println.call(null,"ERROR!",resp);
});
p1mps.simulator.frontend.main.defender_upload_ok = (function p1mps$simulator$frontend$main$defender_upload_ok(resp){
cljs.core.swap_BANG_.call(null,p1mps.simulator.frontend.main.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"defender","defender",1458963871),resp);

return cljs.core.swap_BANG_.call(null,p1mps.simulator.frontend.main.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"defender-selected","defender-selected",1024422726),cljs.core.first.call(null,new cljs.core.Keyword(null,"defender","defender",1458963871).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state))));
});
p1mps.simulator.frontend.main.attacker_upload_error = (function p1mps$simulator$frontend$main$attacker_upload_error(resp){
return cljs.core.println.call(null,"ERROR!",resp);
});
p1mps.simulator.frontend.main.defender_upload_error = (function p1mps$simulator$frontend$main$defender_upload_error(resp){
return cljs.core.println.call(null,"ERROR!",resp);
});
p1mps.simulator.frontend.main.get_special_rule = (function p1mps$simulator$frontend$main$get_special_rule(rules,rule){
return new cljs.core.Keyword(null,"rating","rating",144173662).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__68592_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__68592_SHARP_),rule);
}),rules)));
});
p1mps.simulator.frontend.main.weapons_component = (function p1mps$simulator$frontend$main$weapons_component(unit_id,weapons){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.columns","div.columns",-437221213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"2"], null),(function (){var id = cljs.core.atom.call(null,(-1));
var iter__4292__auto__ = ((function (id){
return (function p1mps$simulator$frontend$main$weapons_component_$_iter__68594(s__68595){
return (new cljs.core.LazySeq(null,((function (id){
return (function (){
var s__68595__$1 = s__68595;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__68595__$1);
if(temp__5735__auto__){
var s__68595__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__68595__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__68595__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__68597 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__68596 = (0);
while(true){
if((i__68596 < size__4291__auto__)){
var weapon = cljs.core._nth.call(null,c__4290__auto__,i__68596);
cljs.core.chunk_append.call(null,b__68597,(function (){
cljs.core.swap_BANG_.call(null,id,cljs.core.inc);

return (new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.deref.call(null,id)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Weapon"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Attacks"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"AP"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(weapon)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#attacks","input#attacks",-1908018929),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),["attacks-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,id))].join(''),new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),"input",new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),new cljs.core.Keyword(null,"attacks","attacks",-152588999).cljs$core$IFn$_invoke$arity$1(weapon),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__68596,weapon,c__4290__auto__,size__4291__auto__,b__68597,s__68595__$2,temp__5735__auto__,id){
return (function (e){
var attacks = e.target.value;
cljs.core.swap_BANG_.call(null,p1mps.simulator.frontend.main.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906),unit_id,new cljs.core.Keyword(null,"weapons","weapons",-1983639898),cljs.core.deref.call(null,id),new cljs.core.Keyword(null,"attacks","attacks",-152588999)], null),attacks);

return cljs.core.println.call(null,new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state)));
});})(i__68596,weapon,c__4290__auto__,size__4291__auto__,b__68597,s__68595__$2,temp__5735__auto__,id))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#ap","input#ap",927118533),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),(function (){var or__3922__auto__ = p1mps.simulator.frontend.main.get_special_rule.call(null,new cljs.core.Keyword(null,"specialRules","specialRules",45874347).cljs$core$IFn$_invoke$arity$1(weapon),"AP");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "-";
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),"input",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__68596,weapon,c__4290__auto__,size__4291__auto__,b__68597,s__68595__$2,temp__5735__auto__,id){
return (function (e){
var ap = e.target.value;
var special_rules = new cljs.core.Keyword(null,"specialRules","specialRules",45874347).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"weapons","weapons",-1983639898).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state)),unit_id)),cljs.core.deref.call(null,id)));
var ap_rule = cljs.core.some.call(null,((function (i__68596,ap,special_rules,weapon,c__4290__auto__,size__4291__auto__,b__68597,s__68595__$2,temp__5735__auto__,id){
return (function (p1__68593_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__68593_SHARP_),"AP")){
return p1__68593_SHARP_;
} else {
return null;
}
});})(i__68596,ap,special_rules,weapon,c__4290__auto__,size__4291__auto__,b__68597,s__68595__$2,temp__5735__auto__,id))
,special_rules);
var index_ap_rule = special_rules.indexOf(ap_rule);
var new_ap_rule = cljs.core.assoc.call(null,ap_rule,new cljs.core.Keyword(null,"rating","rating",144173662),ap);
var new_special_rules = cljs.core.assoc.call(null,special_rules,index_ap_rule,new_ap_rule);
cljs.core.swap_BANG_.call(null,p1mps.simulator.frontend.main.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906),unit_id,new cljs.core.Keyword(null,"weapons","weapons",-1983639898),cljs.core.deref.call(null,id),new cljs.core.Keyword(null,"specialRules","specialRules",45874347)], null),new_special_rules);

return cljs.core.println.call(null,new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state)));
});})(i__68596,weapon,c__4290__auto__,size__4291__auto__,b__68597,s__68595__$2,temp__5735__auto__,id))
], null)], null)], null)], null)], null)], null)], null),null,(1),null));
})()
);

var G__68598 = (i__68596 + (1));
i__68596 = G__68598;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__68597),p1mps$simulator$frontend$main$weapons_component_$_iter__68594.call(null,cljs.core.chunk_rest.call(null,s__68595__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__68597),null);
}
} else {
var weapon = cljs.core.first.call(null,s__68595__$2);
return cljs.core.cons.call(null,(function (){
cljs.core.swap_BANG_.call(null,id,cljs.core.inc);

return (new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.deref.call(null,id)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Weapon"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Attacks"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"AP"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(weapon)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#attacks","input#attacks",-1908018929),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),["attacks-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,id))].join(''),new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),"input",new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),new cljs.core.Keyword(null,"attacks","attacks",-152588999).cljs$core$IFn$_invoke$arity$1(weapon),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (weapon,s__68595__$2,temp__5735__auto__,id){
return (function (e){
var attacks = e.target.value;
cljs.core.swap_BANG_.call(null,p1mps.simulator.frontend.main.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906),unit_id,new cljs.core.Keyword(null,"weapons","weapons",-1983639898),cljs.core.deref.call(null,id),new cljs.core.Keyword(null,"attacks","attacks",-152588999)], null),attacks);

return cljs.core.println.call(null,new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state)));
});})(weapon,s__68595__$2,temp__5735__auto__,id))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#ap","input#ap",927118533),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),(function (){var or__3922__auto__ = p1mps.simulator.frontend.main.get_special_rule.call(null,new cljs.core.Keyword(null,"specialRules","specialRules",45874347).cljs$core$IFn$_invoke$arity$1(weapon),"AP");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "-";
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),"input",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (weapon,s__68595__$2,temp__5735__auto__,id){
return (function (e){
var ap = e.target.value;
var special_rules = new cljs.core.Keyword(null,"specialRules","specialRules",45874347).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"weapons","weapons",-1983639898).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state)),unit_id)),cljs.core.deref.call(null,id)));
var ap_rule = cljs.core.some.call(null,((function (ap,special_rules,weapon,s__68595__$2,temp__5735__auto__,id){
return (function (p1__68593_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__68593_SHARP_),"AP")){
return p1__68593_SHARP_;
} else {
return null;
}
});})(ap,special_rules,weapon,s__68595__$2,temp__5735__auto__,id))
,special_rules);
var index_ap_rule = special_rules.indexOf(ap_rule);
var new_ap_rule = cljs.core.assoc.call(null,ap_rule,new cljs.core.Keyword(null,"rating","rating",144173662),ap);
var new_special_rules = cljs.core.assoc.call(null,special_rules,index_ap_rule,new_ap_rule);
cljs.core.swap_BANG_.call(null,p1mps.simulator.frontend.main.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906),unit_id,new cljs.core.Keyword(null,"weapons","weapons",-1983639898),cljs.core.deref.call(null,id),new cljs.core.Keyword(null,"specialRules","specialRules",45874347)], null),new_special_rules);

return cljs.core.println.call(null,new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state)));
});})(weapon,s__68595__$2,temp__5735__auto__,id))
], null)], null)], null)], null)], null)], null)], null),null,(1),null));
})()
,p1mps$simulator$frontend$main$weapons_component_$_iter__68594.call(null,cljs.core.rest.call(null,s__68595__$2)));
}
} else {
return null;
}
break;
}
});})(id))
,null,null));
});})(id))
;
return iter__4292__auto__.call(null,weapons);
})()], null);
});
p1mps.simulator.frontend.main.unit_component = (function p1mps$simulator$frontend$main$unit_component(units,show_weapons){
var unit_id = cljs.core.atom.call(null,(-1));
var iter__4292__auto__ = ((function (unit_id){
return (function p1mps$simulator$frontend$main$unit_component_$_iter__68599(s__68600){
return (new cljs.core.LazySeq(null,((function (unit_id){
return (function (){
var s__68600__$1 = s__68600;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__68600__$1);
if(temp__5735__auto__){
var s__68600__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__68600__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__68600__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__68602 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__68601 = (0);
while(true){
if((i__68601 < size__4291__auto__)){
var unit = cljs.core._nth.call(null,c__4290__auto__,i__68601);
cljs.core.chunk_append.call(null,b__68602,(function (){
cljs.core.swap_BANG_.call(null,unit_id,cljs.core.inc);

return (new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.is-12","div.is-12",-2084069912),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table.is-fullwidth","table.table.is-fullwidth",1922866462),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Quality"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Defense"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Regeneration"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Tough"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Size"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#quality","input#quality",234907154),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),new cljs.core.Keyword(null,"quality","quality",147850199).cljs$core$IFn$_invoke$arity$1(unit),new cljs.core.Keyword(null,"class","class",-2030961996),"input",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__68601,unit,c__4290__auto__,size__4291__auto__,b__68602,s__68600__$2,temp__5735__auto__,unit_id){
return (function (e){
var quality_68603 = e.target.value;
cljs.core.swap_BANG_.call(null,p1mps.simulator.frontend.main.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906),cljs.core.deref.call(null,unit_id),new cljs.core.Keyword(null,"quality","quality",147850199)], null),quality_68603);

return cljs.core.println.call(null,new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state)));
});})(i__68601,unit,c__4290__auto__,size__4291__auto__,b__68602,s__68600__$2,temp__5735__auto__,unit_id))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#defense","input#defense",620779612),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),new cljs.core.Keyword(null,"defense","defense",1755014992).cljs$core$IFn$_invoke$arity$1(unit),new cljs.core.Keyword(null,"class","class",-2030961996),"input",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__68601,unit,c__4290__auto__,size__4291__auto__,b__68602,s__68600__$2,temp__5735__auto__,unit_id){
return (function (e){
var defense_68604 = e.target.value;
cljs.core.swap_BANG_.call(null,p1mps.simulator.frontend.main.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906),cljs.core.deref.call(null,unit_id),new cljs.core.Keyword(null,"defense","defense",1755014992)], null),defense_68604);

return cljs.core.println.call(null,new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state)));
});})(i__68601,unit,c__4290__auto__,size__4291__auto__,b__68602,s__68600__$2,temp__5735__auto__,unit_id))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#rules","input#rules",819069433),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),(function (){var or__3922__auto__ = new cljs.core.Keyword(null,"regeneration","regeneration",-990906441).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"specialRules","specialRules",45874347).cljs$core$IFn$_invoke$arity$1(unit));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "-";
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),"input",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__68601,unit,c__4290__auto__,size__4291__auto__,b__68602,s__68600__$2,temp__5735__auto__,unit_id){
return (function (e){
var regeneration_68605 = e.target.value;
cljs.core.swap_BANG_.call(null,p1mps.simulator.frontend.main.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906),cljs.core.deref.call(null,unit_id),new cljs.core.Keyword(null,"special-rules","special-rules",1341637380),new cljs.core.Keyword(null,"regeneration","regeneration",-990906441)], null),regeneration_68605);

return cljs.core.println.call(null,new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state)));
});})(i__68601,unit,c__4290__auto__,size__4291__auto__,b__68602,s__68600__$2,temp__5735__auto__,unit_id))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),(function (){var or__3922__auto__ = new cljs.core.Keyword(null,"tough","tough",-2080376345).cljs$core$IFn$_invoke$arity$1(unit);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "-";
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(unit)], null)], null)], null)], null)], null),(new cljs.core.List(null,(cljs.core.truth_(show_weapons)?p1mps.simulator.frontend.main.weapons_component.call(null,cljs.core.deref.call(null,unit_id),new cljs.core.Keyword(null,"weapons","weapons",-1983639898).cljs$core$IFn$_invoke$arity$1(unit)):null),null,(1),null)),(2),null));
})()
);

var G__68606 = (i__68601 + (1));
i__68601 = G__68606;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__68602),p1mps$simulator$frontend$main$unit_component_$_iter__68599.call(null,cljs.core.chunk_rest.call(null,s__68600__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__68602),null);
}
} else {
var unit = cljs.core.first.call(null,s__68600__$2);
return cljs.core.cons.call(null,(function (){
cljs.core.swap_BANG_.call(null,unit_id,cljs.core.inc);

return (new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.is-12","div.is-12",-2084069912),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table.is-fullwidth","table.table.is-fullwidth",1922866462),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Quality"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Defense"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Regeneration"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Tough"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Size"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#quality","input#quality",234907154),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),new cljs.core.Keyword(null,"quality","quality",147850199).cljs$core$IFn$_invoke$arity$1(unit),new cljs.core.Keyword(null,"class","class",-2030961996),"input",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (unit,s__68600__$2,temp__5735__auto__,unit_id){
return (function (e){
var quality_68607 = e.target.value;
cljs.core.swap_BANG_.call(null,p1mps.simulator.frontend.main.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906),cljs.core.deref.call(null,unit_id),new cljs.core.Keyword(null,"quality","quality",147850199)], null),quality_68607);

return cljs.core.println.call(null,new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state)));
});})(unit,s__68600__$2,temp__5735__auto__,unit_id))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#defense","input#defense",620779612),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),new cljs.core.Keyword(null,"defense","defense",1755014992).cljs$core$IFn$_invoke$arity$1(unit),new cljs.core.Keyword(null,"class","class",-2030961996),"input",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (unit,s__68600__$2,temp__5735__auto__,unit_id){
return (function (e){
var defense_68608 = e.target.value;
cljs.core.swap_BANG_.call(null,p1mps.simulator.frontend.main.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906),cljs.core.deref.call(null,unit_id),new cljs.core.Keyword(null,"defense","defense",1755014992)], null),defense_68608);

return cljs.core.println.call(null,new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state)));
});})(unit,s__68600__$2,temp__5735__auto__,unit_id))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#rules","input#rules",819069433),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),(function (){var or__3922__auto__ = new cljs.core.Keyword(null,"regeneration","regeneration",-990906441).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"specialRules","specialRules",45874347).cljs$core$IFn$_invoke$arity$1(unit));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "-";
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),"input",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (unit,s__68600__$2,temp__5735__auto__,unit_id){
return (function (e){
var regeneration_68609 = e.target.value;
cljs.core.swap_BANG_.call(null,p1mps.simulator.frontend.main.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906),cljs.core.deref.call(null,unit_id),new cljs.core.Keyword(null,"special-rules","special-rules",1341637380),new cljs.core.Keyword(null,"regeneration","regeneration",-990906441)], null),regeneration_68609);

return cljs.core.println.call(null,new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state)));
});})(unit,s__68600__$2,temp__5735__auto__,unit_id))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),(function (){var or__3922__auto__ = new cljs.core.Keyword(null,"tough","tough",-2080376345).cljs$core$IFn$_invoke$arity$1(unit);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "-";
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(unit)], null)], null)], null)], null)], null),(new cljs.core.List(null,(cljs.core.truth_(show_weapons)?p1mps.simulator.frontend.main.weapons_component.call(null,cljs.core.deref.call(null,unit_id),new cljs.core.Keyword(null,"weapons","weapons",-1983639898).cljs$core$IFn$_invoke$arity$1(unit)):null),null,(1),null)),(2),null));
})()
,p1mps$simulator$frontend$main$unit_component_$_iter__68599.call(null,cljs.core.rest.call(null,s__68600__$2)));
}
} else {
return null;
}
break;
}
});})(unit_id))
,null,null));
});})(unit_id))
;
return iter__4292__auto__.call(null,units);
});
p1mps.simulator.frontend.main.plot_graph = (function p1mps$simulator$frontend$main$plot_graph(){
return Plotly.newPlot(document.getElementById("graph"),cljs.core.clj__GT_js.call(null,(function (){var iter__4292__auto__ = (function p1mps$simulator$frontend$main$plot_graph_$_iter__68610(s__68611){
return (new cljs.core.LazySeq(null,(function (){
var s__68611__$1 = s__68611;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__68611__$1);
if(temp__5735__auto__){
var s__68611__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__68611__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__68611__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__68613 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__68612 = (0);
while(true){
if((i__68612 < size__4291__auto__)){
var vec__68614 = cljs.core._nth.call(null,c__4290__auto__,i__68612);
var weapon = cljs.core.nth.call(null,vec__68614,(0),null);
var wounds = cljs.core.nth.call(null,vec__68614,(1),null);
cljs.core.chunk_append.call(null,b__68613,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),weapon,new cljs.core.Keyword(null,"y","y",-1757859776),wounds,new cljs.core.Keyword(null,"name","name",1843675177),weapon,new cljs.core.Keyword(null,"showlegend","showlegend",-287404369),true,new cljs.core.Keyword(null,"type","type",1174270348),"bar"], null));

var G__68620 = (i__68612 + (1));
i__68612 = G__68620;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__68613),p1mps$simulator$frontend$main$plot_graph_$_iter__68610.call(null,cljs.core.chunk_rest.call(null,s__68611__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__68613),null);
}
} else {
var vec__68617 = cljs.core.first.call(null,s__68611__$2);
var weapon = cljs.core.nth.call(null,vec__68617,(0),null);
var wounds = cljs.core.nth.call(null,vec__68617,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),weapon,new cljs.core.Keyword(null,"y","y",-1757859776),wounds,new cljs.core.Keyword(null,"name","name",1843675177),weapon,new cljs.core.Keyword(null,"showlegend","showlegend",-287404369),true,new cljs.core.Keyword(null,"type","type",1174270348),"bar"], null),p1mps$simulator$frontend$main$plot_graph_$_iter__68610.call(null,cljs.core.rest.call(null,s__68611__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,new cljs.core.Keyword(null,"fight","fight",1266695601).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state)));
})()),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Wounds",new cljs.core.Keyword(null,"yaxis","yaxis",-1783465932),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Percentage"], null)], null),new cljs.core.Keyword(null,"responsive","responsive",-1606632318),true], null)));
});
p1mps.simulator.frontend.main.app_components = (function p1mps$simulator$frontend$main$app_components(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box","div.box",2023391427),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"POST"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.file.field","div.file.field",-535506663),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.file-label","label.file-label",-520604852),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.file-input","input.file-input",-263595274),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"Attacker army",new cljs.core.Keyword(null,"name","name",1843675177),"army",new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),"",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
cljs.core.swap_BANG_.call(null,p1mps.simulator.frontend.main.app_state,cljs.core.assoc,"Attacker army",e.target.value);

var attacker_army = document.getElementById("Attacker army");
var attacker_file = (attacker_army.files[(0)]);
var form_data_attacker = (new FormData());
var _ = form_data_attacker.append("file",attacker_file);
return ajax.core.POST.call(null,"/api/army",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"body","body",-2049205669),form_data_attacker,new cljs.core.Keyword(null,"handler","handler",-195596612),p1mps.simulator.frontend.main.attacker_upload_ok,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),p1mps.simulator.frontend.main.attacker_upload_error,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.file-cta","span.file-cta",1078791818),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.file-icon","span.file-icon",890123937),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-upload","i.fas.fa-upload",207000756)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.file-label","span.file-label",1374272136),"Attacker army"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.file-name","span.file-name",-605410282),cljs.core.last.call(null,clojure.string.split.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state),"Attacker army"),"\\"))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.file.field","div.file.field",-535506663),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.file-label","label.file-label",-520604852),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.file-input","input.file-input",-263595274),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"Defender army",new cljs.core.Keyword(null,"name","name",1843675177),"army",new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),"",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
cljs.core.swap_BANG_.call(null,p1mps.simulator.frontend.main.app_state,cljs.core.assoc,"Defender army",e.target.value);

var defender_army = document.getElementById("Defender army");
var defender_file = (defender_army.files[(0)]);
var form_data_defender = (new FormData());
var _ = form_data_defender.append("file",defender_file);
return ajax.core.POST.call(null,"/api/army",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"body","body",-2049205669),form_data_defender,new cljs.core.Keyword(null,"handler","handler",-195596612),p1mps.simulator.frontend.main.defender_upload_ok,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),p1mps.simulator.frontend.main.defender_upload_error,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.file-cta","span.file-cta",1078791818),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.file-icon","span.file-icon",890123937),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-upload","i.fas.fa-upload",207000756)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.file-label","span.file-label",1374272136),"Defender army"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.file-name","span.file-name",-605410282),cljs.core.last.call(null,clojure.string.split.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state),"Defender army"),"\\"))], null)], null)], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state)))?(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.select.mt-5","div.select.mt-5",353691179),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),"",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var id = e.target.value;
var unit = cljs.core.first.call(null,cljs.core.filter.call(null,((function (id){
return (function (v){
return cljs.core.some.call(null,cljs.core.comp.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.Keyword(null,"id","id",-1388402092)),v);
});})(id))
,new cljs.core.Keyword(null,"attacker","attacker",48869964).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state))));
cljs.core.println.call(null,id," ",unit);

return cljs.core.swap_BANG_.call(null,p1mps.simulator.frontend.main.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906),unit);
})], null),(function (){var iter__4292__auto__ = (function p1mps$simulator$frontend$main$app_components_$_iter__68621(s__68622){
return (new cljs.core.LazySeq(null,(function (){
var s__68622__$1 = s__68622;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__68622__$1);
if(temp__5735__auto__){
var s__68622__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__68622__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__68622__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__68624 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__68623 = (0);
while(true){
if((i__68623 < size__4291__auto__)){
var unit = cljs.core._nth.call(null,c__4290__auto__,i__68623);
cljs.core.chunk_append.call(null,b__68624,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,unit))], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,unit))], null));

var G__68639 = (i__68623 + (1));
i__68623 = G__68639;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__68624),p1mps$simulator$frontend$main$app_components_$_iter__68621.call(null,cljs.core.chunk_rest.call(null,s__68622__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__68624),null);
}
} else {
var unit = cljs.core.first.call(null,s__68622__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,unit))], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,unit))], null),p1mps$simulator$frontend$main$app_components_$_iter__68621.call(null,cljs.core.rest.call(null,s__68622__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,new cljs.core.Keyword(null,"attacker","attacker",48869964).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state)));
})()], null)], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"2"], null),p1mps.simulator.frontend.main.unit_component.call(null,new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state)),true)], null),null,(1),null)),(2),null)):null),(cljs.core.truth_(new cljs.core.Keyword(null,"defender-selected","defender-selected",1024422726).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state)))?(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.select.mt-5","div.select.mt-5",353691179),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),"",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var id = e.target.value;
var unit = cljs.core.first.call(null,cljs.core.filter.call(null,((function (id){
return (function (v){
return cljs.core.some.call(null,cljs.core.comp.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.Keyword(null,"id","id",-1388402092)),v);
});})(id))
,new cljs.core.Keyword(null,"defender","defender",1458963871).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state))));
cljs.core.println.call(null,id," ",unit);

return cljs.core.swap_BANG_.call(null,p1mps.simulator.frontend.main.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"defender-selected","defender-selected",1024422726),unit);
})], null),(function (){var iter__4292__auto__ = (function p1mps$simulator$frontend$main$app_components_$_iter__68625(s__68626){
return (new cljs.core.LazySeq(null,(function (){
var s__68626__$1 = s__68626;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__68626__$1);
if(temp__5735__auto__){
var s__68626__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__68626__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__68626__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__68628 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__68627 = (0);
while(true){
if((i__68627 < size__4291__auto__)){
var unit = cljs.core._nth.call(null,c__4290__auto__,i__68627);
cljs.core.chunk_append.call(null,b__68628,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,unit))], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,unit))], null));

var G__68640 = (i__68627 + (1));
i__68627 = G__68640;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__68628),p1mps$simulator$frontend$main$app_components_$_iter__68625.call(null,cljs.core.chunk_rest.call(null,s__68626__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__68628),null);
}
} else {
var unit = cljs.core.first.call(null,s__68626__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,unit))], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,unit))], null),p1mps$simulator$frontend$main$app_components_$_iter__68625.call(null,cljs.core.rest.call(null,s__68626__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,new cljs.core.Keyword(null,"defender","defender",1458963871).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state)));
})()], null)], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),p1mps.simulator.frontend.main.unit_component.call(null,new cljs.core.Keyword(null,"defender-selected","defender-selected",1024422726).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state)),false)], null),null,(1),null)),(2),null)):null),(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state));
if(cljs.core.truth_(and__3911__auto__)){
return new cljs.core.Keyword(null,"defender-selected","defender-selected",1024422726).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state));
} else {
return and__3911__auto__;
}
})())?(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.field","div.field",1089355414),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button","button.button",1464242525),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (ev){
ev.preventDefault();

return ajax.core.POST.call(null,"/api/fight",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.select_keys.call(null,cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906),new cljs.core.Keyword(null,"defender-selected","defender-selected",1024422726)], null)),new cljs.core.Keyword(null,"handler","handler",-195596612),p1mps.simulator.frontend.main.fight_ok,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),p1mps.simulator.frontend.main.fight_error,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
})], null),"Fight!"], null)], null),(new cljs.core.List(null,(cljs.core.truth_(new cljs.core.Keyword(null,"fight","fight",1266695601).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state)))?(function (){
p1mps.simulator.frontend.main.plot_graph.call(null);

var iter__4292__auto__ = (function p1mps$simulator$frontend$main$app_components_$_iter__68629(s__68630){
return (new cljs.core.LazySeq(null,(function (){
var s__68630__$1 = s__68630;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__68630__$1);
if(temp__5735__auto__){
var s__68630__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__68630__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__68630__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__68632 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__68631 = (0);
while(true){
if((i__68631 < size__4291__auto__)){
var vec__68633 = cljs.core._nth.call(null,c__4290__auto__,i__68631);
var weapon = cljs.core.nth.call(null,vec__68633,(0),null);
var wounds = cljs.core.nth.call(null,vec__68633,(1),null);
cljs.core.chunk_append.call(null,b__68632,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),weapon], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,weapon))," expected wounds ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mean","mean",-1359234715).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(wounds)))].join('')], null)], null));

var G__68641 = (i__68631 + (1));
i__68631 = G__68641;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__68632),p1mps$simulator$frontend$main$app_components_$_iter__68629.call(null,cljs.core.chunk_rest.call(null,s__68630__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__68632),null);
}
} else {
var vec__68636 = cljs.core.first.call(null,s__68630__$2);
var weapon = cljs.core.nth.call(null,vec__68636,(0),null);
var wounds = cljs.core.nth.call(null,vec__68636,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),weapon], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,weapon))," expected wounds ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mean","mean",-1359234715).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(wounds)))].join('')], null)], null),p1mps$simulator$frontend$main$app_components_$_iter__68629.call(null,cljs.core.rest.call(null,s__68630__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,new cljs.core.Keyword(null,"fight","fight",1266695601).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state)));
})()
:null),null,(1),null)),(2),null)):null)], null);
});
p1mps.simulator.frontend.main.init = (function p1mps$simulator$frontend$main$init(){
cljs.core.enable_console_print_BANG_.call(null);

var app = document.getElementById("app");
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1mps.simulator.frontend.main.app_components], null),app);
});
p1mps.simulator.frontend.main.reload = (function p1mps$simulator$frontend$main$reload(){
return p1mps.simulator.frontend.main.init.call(null);
});
if(typeof p1mps.simulator.frontend.main.run !== 'undefined'){
} else {
p1mps.simulator.frontend.main.run = p1mps.simulator.frontend.main.init.call(null);
}

//# sourceMappingURL=main.js.map
