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
return new cljs.core.Keyword(null,"rating","rating",144173662).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__60868_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__60868_SHARP_),rule);
}),rules)));
});
p1mps.simulator.frontend.main.weapons_component = (function p1mps$simulator$frontend$main$weapons_component(unit_id,weapons){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.columns","div.columns",-437221213),(function (){var iter__4292__auto__ = (function p1mps$simulator$frontend$main$weapons_component_$_iter__60869(s__60870){
return (new cljs.core.LazySeq(null,(function (){
var s__60870__$1 = s__60870;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__60870__$1);
if(temp__5735__auto__){
var s__60870__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__60870__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__60870__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__60872 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__60871 = (0);
while(true){
if((i__60871 < size__4291__auto__)){
var weapon = cljs.core._nth.call(null,c__4290__auto__,i__60871);
cljs.core.chunk_append.call(null,b__60872,(function (){var index = weapons.indexOf(weapon);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Weapon"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Attacks"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"AP"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(weapon)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#attacks","input#attacks",-1908018929),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),["attacks-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),"input",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"attacks","attacks",-152588999).cljs$core$IFn$_invoke$arity$1(weapon),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__60871,index,weapon,c__4290__auto__,size__4291__auto__,b__60872,s__60870__$2,temp__5735__auto__){
return (function (e){
var attacks = parseInt(e.target.value);
cljs.core.swap_BANG_.call(null,p1mps.simulator.frontend.main.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906),unit_id,new cljs.core.Keyword(null,"weapons","weapons",-1983639898),index,new cljs.core.Keyword(null,"attacks","attacks",-152588999)], null),attacks);

return cljs.core.println.call(null,new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state)));
});})(i__60871,index,weapon,c__4290__auto__,size__4291__auto__,b__60872,s__60870__$2,temp__5735__auto__))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#ap","input#ap",927118533),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3922__auto__ = new cljs.core.Keyword(null,"ap","ap",-1072838153).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"specialRules","specialRules",45874347).cljs$core$IFn$_invoke$arity$1(weapon));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "-";
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),"input",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__60871,index,weapon,c__4290__auto__,size__4291__auto__,b__60872,s__60870__$2,temp__5735__auto__){
return (function (e){
var ap = parseInt(e.target.value);
cljs.core.swap_BANG_.call(null,p1mps.simulator.frontend.main.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906),unit_id,new cljs.core.Keyword(null,"weapons","weapons",-1983639898),index,new cljs.core.Keyword(null,"specialRules","specialRules",45874347),new cljs.core.Keyword(null,"ap","ap",-1072838153)], null),ap);

return cljs.core.println.call(null,new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state)));
});})(i__60871,index,weapon,c__4290__auto__,size__4291__auto__,b__60872,s__60870__$2,temp__5735__auto__))
], null)], null)], null)], null)], null)], null)], null)], null);
})());

var G__60873 = (i__60871 + (1));
i__60871 = G__60873;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__60872),p1mps$simulator$frontend$main$weapons_component_$_iter__60869.call(null,cljs.core.chunk_rest.call(null,s__60870__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__60872),null);
}
} else {
var weapon = cljs.core.first.call(null,s__60870__$2);
return cljs.core.cons.call(null,(function (){var index = weapons.indexOf(weapon);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Weapon"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Attacks"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"AP"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(weapon)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#attacks","input#attacks",-1908018929),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),["attacks-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),"input",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"attacks","attacks",-152588999).cljs$core$IFn$_invoke$arity$1(weapon),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (index,weapon,s__60870__$2,temp__5735__auto__){
return (function (e){
var attacks = parseInt(e.target.value);
cljs.core.swap_BANG_.call(null,p1mps.simulator.frontend.main.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906),unit_id,new cljs.core.Keyword(null,"weapons","weapons",-1983639898),index,new cljs.core.Keyword(null,"attacks","attacks",-152588999)], null),attacks);

return cljs.core.println.call(null,new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state)));
});})(index,weapon,s__60870__$2,temp__5735__auto__))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#ap","input#ap",927118533),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3922__auto__ = new cljs.core.Keyword(null,"ap","ap",-1072838153).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"specialRules","specialRules",45874347).cljs$core$IFn$_invoke$arity$1(weapon));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "-";
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),"input",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (index,weapon,s__60870__$2,temp__5735__auto__){
return (function (e){
var ap = parseInt(e.target.value);
cljs.core.swap_BANG_.call(null,p1mps.simulator.frontend.main.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906),unit_id,new cljs.core.Keyword(null,"weapons","weapons",-1983639898),index,new cljs.core.Keyword(null,"specialRules","specialRules",45874347),new cljs.core.Keyword(null,"ap","ap",-1072838153)], null),ap);

return cljs.core.println.call(null,new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state)));
});})(index,weapon,s__60870__$2,temp__5735__auto__))
], null)], null)], null)], null)], null)], null)], null)], null);
})(),p1mps$simulator$frontend$main$weapons_component_$_iter__60869.call(null,cljs.core.rest.call(null,s__60870__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,weapons);
})()], null);
});
p1mps.simulator.frontend.main.unit_component_attacker = (function p1mps$simulator$frontend$main$unit_component_attacker(units){
var unit_id = cljs.core.atom.call(null,(-1));
var iter__4292__auto__ = ((function (unit_id){
return (function p1mps$simulator$frontend$main$unit_component_attacker_$_iter__60874(s__60875){
return (new cljs.core.LazySeq(null,((function (unit_id){
return (function (){
var s__60875__$1 = s__60875;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__60875__$1);
if(temp__5735__auto__){
var s__60875__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__60875__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__60875__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__60877 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__60876 = (0);
while(true){
if((i__60876 < size__4291__auto__)){
var unit = cljs.core._nth.call(null,c__4290__auto__,i__60876);
cljs.core.chunk_append.call(null,b__60877,(function (){
cljs.core.swap_BANG_.call(null,unit_id,cljs.core.inc);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Quality"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Size"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.deref.call(null,unit_id),new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"quality","quality",147850199).cljs$core$IFn$_invoke$arity$1(unit),new cljs.core.Keyword(null,"class","class",-2030961996),"input",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__60876,unit,c__4290__auto__,size__4291__auto__,b__60877,s__60875__$2,temp__5735__auto__,unit_id){
return (function (e){
var quality_60878 = parseInt(e.target.value);
var unit_id_60879__$1 = parseInt(e.target.id);
cljs.core.swap_BANG_.call(null,p1mps.simulator.frontend.main.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906),unit_id_60879__$1,new cljs.core.Keyword(null,"quality","quality",147850199)], null),quality_60878);

cljs.core.println.call(null,unit_id);

return cljs.core.println.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state)),unit_id));
});})(i__60876,unit,c__4290__auto__,size__4291__auto__,b__60877,s__60875__$2,temp__5735__auto__,unit_id))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(unit)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),p1mps.simulator.frontend.main.weapons_component.call(null,cljs.core.deref.call(null,unit_id),new cljs.core.Keyword(null,"weapons","weapons",-1983639898).cljs$core$IFn$_invoke$arity$1(unit)),(((cljs.core.deref.call(null,unit_id) < (cljs.core.count.call(null,units) - (1))))?(new cljs.core.List(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr.border-black","hr.border-black",1971665940)], null),null,(1),null)):null)], null)], null);
})()
);

var G__60880 = (i__60876 + (1));
i__60876 = G__60880;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__60877),p1mps$simulator$frontend$main$unit_component_attacker_$_iter__60874.call(null,cljs.core.chunk_rest.call(null,s__60875__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__60877),null);
}
} else {
var unit = cljs.core.first.call(null,s__60875__$2);
return cljs.core.cons.call(null,(function (){
cljs.core.swap_BANG_.call(null,unit_id,cljs.core.inc);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Quality"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Size"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.deref.call(null,unit_id),new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"quality","quality",147850199).cljs$core$IFn$_invoke$arity$1(unit),new cljs.core.Keyword(null,"class","class",-2030961996),"input",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (unit,s__60875__$2,temp__5735__auto__,unit_id){
return (function (e){
var quality_60881 = parseInt(e.target.value);
var unit_id_60882__$1 = parseInt(e.target.id);
cljs.core.swap_BANG_.call(null,p1mps.simulator.frontend.main.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906),unit_id_60882__$1,new cljs.core.Keyword(null,"quality","quality",147850199)], null),quality_60881);

cljs.core.println.call(null,unit_id);

return cljs.core.println.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state)),unit_id));
});})(unit,s__60875__$2,temp__5735__auto__,unit_id))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(unit)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),p1mps.simulator.frontend.main.weapons_component.call(null,cljs.core.deref.call(null,unit_id),new cljs.core.Keyword(null,"weapons","weapons",-1983639898).cljs$core$IFn$_invoke$arity$1(unit)),(((cljs.core.deref.call(null,unit_id) < (cljs.core.count.call(null,units) - (1))))?(new cljs.core.List(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr.border-black","hr.border-black",1971665940)], null),null,(1),null)):null)], null)], null);
})()
,p1mps$simulator$frontend$main$unit_component_attacker_$_iter__60874.call(null,cljs.core.rest.call(null,s__60875__$2)));
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
p1mps.simulator.frontend.main.unit_component_defender = (function p1mps$simulator$frontend$main$unit_component_defender(units){
var unit_id = cljs.core.atom.call(null,(-1));
var iter__4292__auto__ = ((function (unit_id){
return (function p1mps$simulator$frontend$main$unit_component_defender_$_iter__60883(s__60884){
return (new cljs.core.LazySeq(null,((function (unit_id){
return (function (){
var s__60884__$1 = s__60884;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__60884__$1);
if(temp__5735__auto__){
var s__60884__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__60884__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__60884__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__60886 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__60885 = (0);
while(true){
if((i__60885 < size__4291__auto__)){
var unit = cljs.core._nth.call(null,c__4290__auto__,i__60885);
cljs.core.chunk_append.call(null,b__60886,(function (){
cljs.core.swap_BANG_.call(null,unit_id,cljs.core.inc);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Defense"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Regeneration"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Tough"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Size"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.deref.call(null,unit_id),new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"defense","defense",1755014992).cljs$core$IFn$_invoke$arity$1(unit),new cljs.core.Keyword(null,"class","class",-2030961996),"input",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__60885,unit,c__4290__auto__,size__4291__auto__,b__60886,s__60884__$2,temp__5735__auto__,unit_id){
return (function (e){
var defense_60887 = parseInt(e.target.value);
var unit_id_60888__$1 = parseInt(e.target.id);
cljs.core.swap_BANG_.call(null,p1mps.simulator.frontend.main.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defender-selected","defender-selected",1024422726),unit_id_60888__$1,new cljs.core.Keyword(null,"defense","defense",1755014992)], null),defense_60887);

return cljs.core.println.call(null,new cljs.core.Keyword(null,"defender-selected","defender-selected",1024422726).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state)));
});})(i__60885,unit,c__4290__auto__,size__4291__auto__,b__60886,s__60884__$2,temp__5735__auto__,unit_id))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#rules","input#rules",819069433),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.deref.call(null,unit_id),new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3922__auto__ = new cljs.core.Keyword(null,"regeneration","regeneration",-990906441).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"specialRules","specialRules",45874347).cljs$core$IFn$_invoke$arity$1(unit));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "-";
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),"input",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__60885,unit,c__4290__auto__,size__4291__auto__,b__60886,s__60884__$2,temp__5735__auto__,unit_id){
return (function (e){
var regeneration_60889 = parseInt(e.target.value);
var unit_id_60890__$1 = parseInt(e.target.id);
cljs.core.swap_BANG_.call(null,p1mps.simulator.frontend.main.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defender-selected","defender-selected",1024422726),unit_id_60890__$1,new cljs.core.Keyword(null,"specialRules","specialRules",45874347),new cljs.core.Keyword(null,"regeneration","regeneration",-990906441)], null),regeneration_60889);

return cljs.core.println.call(null,new cljs.core.Keyword(null,"defender-selected","defender-selected",1024422726).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state)));
});})(i__60885,unit,c__4290__auto__,size__4291__auto__,b__60886,s__60884__$2,temp__5735__auto__,unit_id))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),(function (){var or__3922__auto__ = new cljs.core.Keyword(null,"tough","tough",-2080376345).cljs$core$IFn$_invoke$arity$1(unit);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "-";
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(unit)], null)], null)], null)], null)], null);
})()
);

var G__60891 = (i__60885 + (1));
i__60885 = G__60891;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__60886),p1mps$simulator$frontend$main$unit_component_defender_$_iter__60883.call(null,cljs.core.chunk_rest.call(null,s__60884__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__60886),null);
}
} else {
var unit = cljs.core.first.call(null,s__60884__$2);
return cljs.core.cons.call(null,(function (){
cljs.core.swap_BANG_.call(null,unit_id,cljs.core.inc);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Defense"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Regeneration"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Tough"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Size"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.deref.call(null,unit_id),new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"defense","defense",1755014992).cljs$core$IFn$_invoke$arity$1(unit),new cljs.core.Keyword(null,"class","class",-2030961996),"input",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (unit,s__60884__$2,temp__5735__auto__,unit_id){
return (function (e){
var defense_60892 = parseInt(e.target.value);
var unit_id_60893__$1 = parseInt(e.target.id);
cljs.core.swap_BANG_.call(null,p1mps.simulator.frontend.main.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defender-selected","defender-selected",1024422726),unit_id_60893__$1,new cljs.core.Keyword(null,"defense","defense",1755014992)], null),defense_60892);

return cljs.core.println.call(null,new cljs.core.Keyword(null,"defender-selected","defender-selected",1024422726).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state)));
});})(unit,s__60884__$2,temp__5735__auto__,unit_id))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#rules","input#rules",819069433),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.deref.call(null,unit_id),new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3922__auto__ = new cljs.core.Keyword(null,"regeneration","regeneration",-990906441).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"specialRules","specialRules",45874347).cljs$core$IFn$_invoke$arity$1(unit));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "-";
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),"input",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (unit,s__60884__$2,temp__5735__auto__,unit_id){
return (function (e){
var regeneration_60894 = parseInt(e.target.value);
var unit_id_60895__$1 = parseInt(e.target.id);
cljs.core.swap_BANG_.call(null,p1mps.simulator.frontend.main.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defender-selected","defender-selected",1024422726),unit_id_60895__$1,new cljs.core.Keyword(null,"specialRules","specialRules",45874347),new cljs.core.Keyword(null,"regeneration","regeneration",-990906441)], null),regeneration_60894);

return cljs.core.println.call(null,new cljs.core.Keyword(null,"defender-selected","defender-selected",1024422726).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state)));
});})(unit,s__60884__$2,temp__5735__auto__,unit_id))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),(function (){var or__3922__auto__ = new cljs.core.Keyword(null,"tough","tough",-2080376345).cljs$core$IFn$_invoke$arity$1(unit);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "-";
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(unit)], null)], null)], null)], null)], null);
})()
,p1mps$simulator$frontend$main$unit_component_defender_$_iter__60883.call(null,cljs.core.rest.call(null,s__60884__$2)));
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
p1mps.simulator.frontend.main.graph_title = (function p1mps$simulator$frontend$main$graph_title(stats){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(stats)))," mean value ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mean","mean",-1359234715).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(stats)))].join('');
});
p1mps.simulator.frontend.main.plot_graph = (function p1mps$simulator$frontend$main$plot_graph(){
var data = cljs.core.vec.call(null,(function (){var iter__4292__auto__ = (function p1mps$simulator$frontend$main$plot_graph_$_iter__60896(s__60897){
return (new cljs.core.LazySeq(null,(function (){
var s__60897__$1 = s__60897;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__60897__$1);
if(temp__5735__auto__){
var s__60897__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__60897__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__60897__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__60899 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__60898 = (0);
while(true){
if((i__60898 < size__4291__auto__)){
var vec__60900 = cljs.core._nth.call(null,c__4290__auto__,i__60898);
var weapon = cljs.core.nth.call(null,vec__60900,(0),null);
var wounds = cljs.core.nth.call(null,vec__60900,(1),null);
cljs.core.chunk_append.call(null,b__60899,(function (){var freqs = cljs.core.into.call(null,cljs.core.sorted_map.call(null),cljs.core.frequencies.call(null,new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(wounds)));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.keys.call(null,freqs),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.vals.call(null,freqs),new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(wounds),new cljs.core.Keyword(null,"name","name",1843675177),weapon,new cljs.core.Keyword(null,"type","type",1174270348),"bars"], null);
})());

var G__60910 = (i__60898 + (1));
i__60898 = G__60910;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__60899),p1mps$simulator$frontend$main$plot_graph_$_iter__60896.call(null,cljs.core.chunk_rest.call(null,s__60897__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__60899),null);
}
} else {
var vec__60903 = cljs.core.first.call(null,s__60897__$2);
var weapon = cljs.core.nth.call(null,vec__60903,(0),null);
var wounds = cljs.core.nth.call(null,vec__60903,(1),null);
return cljs.core.cons.call(null,(function (){var freqs = cljs.core.into.call(null,cljs.core.sorted_map.call(null),cljs.core.frequencies.call(null,new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(wounds)));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.keys.call(null,freqs),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.vals.call(null,freqs),new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(wounds),new cljs.core.Keyword(null,"name","name",1843675177),weapon,new cljs.core.Keyword(null,"type","type",1174270348),"bars"], null);
})(),p1mps$simulator$frontend$main$plot_graph_$_iter__60896.call(null,cljs.core.rest.call(null,s__60897__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,new cljs.core.Keyword(null,"fight","fight",1266695601).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state)));
})());
var seq__60906 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),cljs.core.count.call(null,data)));
var chunk__60907 = null;
var count__60908 = (0);
var i__60909 = (0);
while(true){
if((i__60909 < count__60908)){
var i = cljs.core._nth.call(null,chunk__60907,i__60909);
Plotly.newPlot(document.getElementById(["graph",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,data,i)], null)),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),p1mps.simulator.frontend.main.graph_title.call(null,cljs.core.get.call(null,data,i)),new cljs.core.Keyword(null,"xaxis","xaxis",488378734),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Wounds"], null)], null),new cljs.core.Keyword(null,"responsive","responsive",-1606632318),true], null)));


var G__60911 = seq__60906;
var G__60912 = chunk__60907;
var G__60913 = count__60908;
var G__60914 = (i__60909 + (1));
seq__60906 = G__60911;
chunk__60907 = G__60912;
count__60908 = G__60913;
i__60909 = G__60914;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__60906);
if(temp__5735__auto__){
var seq__60906__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60906__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__60906__$1);
var G__60915 = cljs.core.chunk_rest.call(null,seq__60906__$1);
var G__60916 = c__4319__auto__;
var G__60917 = cljs.core.count.call(null,c__4319__auto__);
var G__60918 = (0);
seq__60906 = G__60915;
chunk__60907 = G__60916;
count__60908 = G__60917;
i__60909 = G__60918;
continue;
} else {
var i = cljs.core.first.call(null,seq__60906__$1);
Plotly.newPlot(document.getElementById(["graph",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,data,i)], null)),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),p1mps.simulator.frontend.main.graph_title.call(null,cljs.core.get.call(null,data,i)),new cljs.core.Keyword(null,"xaxis","xaxis",488378734),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Wounds"], null)], null),new cljs.core.Keyword(null,"responsive","responsive",-1606632318),true], null)));


var G__60919 = cljs.core.next.call(null,seq__60906__$1);
var G__60920 = null;
var G__60921 = (0);
var G__60922 = (0);
seq__60906 = G__60919;
chunk__60907 = G__60920;
count__60908 = G__60921;
i__60909 = G__60922;
continue;
}
} else {
return null;
}
}
break;
}
});
p1mps.simulator.frontend.main.app_components = (function p1mps$simulator$frontend$main$app_components(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"POST"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.file.field.box","div.file.field.box",-30726870),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.file-label","label.file-label",-520604852),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.file-input","input.file-input",-263595274),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"Attacker army",new cljs.core.Keyword(null,"name","name",1843675177),"army",new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),"",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
cljs.core.swap_BANG_.call(null,p1mps.simulator.frontend.main.app_state,cljs.core.assoc,"Attacker army",e.target.value);

var attacker_army = document.getElementById("Attacker army");
var attacker_file = (attacker_army.files[(0)]);
var form_data_attacker = (new FormData());
var _ = form_data_attacker.append("file",attacker_file);
return ajax.core.POST.call(null,"/api/army",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"body","body",-2049205669),form_data_attacker,new cljs.core.Keyword(null,"handler","handler",-195596612),p1mps.simulator.frontend.main.attacker_upload_ok,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),p1mps.simulator.frontend.main.attacker_upload_error,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.file-cta","span.file-cta",1078791818),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.file-icon","span.file-icon",890123937),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-upload","i.fas.fa-upload",207000756)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.file-label","span.file-label",1374272136),"Attacker army"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.file-name","span.file-name",-605410282),cljs.core.last.call(null,clojure.string.split.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state),"Attacker army"),"\\"))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.file.field.box","div.file.field.box",-30726870),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.file-label","label.file-label",-520604852),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.file-input","input.file-input",-263595274),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"Defender army",new cljs.core.Keyword(null,"name","name",1843675177),"army",new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),"",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
cljs.core.swap_BANG_.call(null,p1mps.simulator.frontend.main.app_state,cljs.core.assoc,"Defender army",e.target.value);

var defender_army = document.getElementById("Defender army");
var defender_file = (defender_army.files[(0)]);
var form_data_defender = (new FormData());
var _ = form_data_defender.append("file",defender_file);
return ajax.core.POST.call(null,"/api/army",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"body","body",-2049205669),form_data_defender,new cljs.core.Keyword(null,"handler","handler",-195596612),p1mps.simulator.frontend.main.defender_upload_ok,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),p1mps.simulator.frontend.main.defender_upload_error,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.file-cta","span.file-cta",1078791818),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.file-icon","span.file-icon",890123937),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-upload","i.fas.fa-upload",207000756)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.file-label","span.file-label",1374272136),"Defender army"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.file-name","span.file-name",-605410282),cljs.core.last.call(null,clojure.string.split.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state),"Defender army"),"\\"))], null)], null)], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.select.mt-5","div.select.mt-5",353691179),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"attackers",new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),"",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (_){
var e = document.getElementById("attackers");
var id = (e.options[e.selectedIndex]).id;
var unit = cljs.core.first.call(null,cljs.core.filter.call(null,((function (e,id){
return (function (v){
return cljs.core.some.call(null,cljs.core.comp.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.Keyword(null,"id","id",-1388402092)),v);
});})(e,id))
,new cljs.core.Keyword(null,"attacker","attacker",48869964).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state))));
cljs.core.println.call(null,id," ",unit);

return cljs.core.swap_BANG_.call(null,p1mps.simulator.frontend.main.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906),unit);
})], null),(function (){var iter__4292__auto__ = (function p1mps$simulator$frontend$main$app_components_$_iter__60923(s__60924){
return (new cljs.core.LazySeq(null,(function (){
var s__60924__$1 = s__60924;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__60924__$1);
if(temp__5735__auto__){
var s__60924__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__60924__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__60924__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__60926 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__60925 = (0);
while(true){
if((i__60925 < size__4291__auto__)){
var unit = cljs.core._nth.call(null,c__4290__auto__,i__60925);
cljs.core.chunk_append.call(null,b__60926,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,unit)))].join('')], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,unit))], null));

var G__60931 = (i__60925 + (1));
i__60925 = G__60931;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__60926),p1mps$simulator$frontend$main$app_components_$_iter__60923.call(null,cljs.core.chunk_rest.call(null,s__60924__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__60926),null);
}
} else {
var unit = cljs.core.first.call(null,s__60924__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,unit)))].join('')], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,unit))], null),p1mps$simulator$frontend$main$app_components_$_iter__60923.call(null,cljs.core.rest.call(null,s__60924__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,new cljs.core.Keyword(null,"attacker","attacker",48869964).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state)));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-5.box.border-black","div.mt-5.box.border-black",1949198772),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"2"], null),p1mps.simulator.frontend.main.unit_component_attacker.call(null,new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state)))], null)], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"defender-selected","defender-selected",1024422726).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.select.mt-5","div.select.mt-5",353691179),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"defenders",new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),"",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (_){
var e = document.getElementById("defenders");
var id = (e.options[e.selectedIndex]).id;
var unit = cljs.core.first.call(null,cljs.core.filter.call(null,((function (e,id){
return (function (v){
return cljs.core.some.call(null,cljs.core.comp.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.Keyword(null,"id","id",-1388402092)),v);
});})(e,id))
,new cljs.core.Keyword(null,"defender","defender",1458963871).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state))));
cljs.core.println.call(null,id," ",unit);

return cljs.core.swap_BANG_.call(null,p1mps.simulator.frontend.main.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"defender-selected","defender-selected",1024422726),unit);
})], null),(function (){var iter__4292__auto__ = (function p1mps$simulator$frontend$main$app_components_$_iter__60927(s__60928){
return (new cljs.core.LazySeq(null,(function (){
var s__60928__$1 = s__60928;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__60928__$1);
if(temp__5735__auto__){
var s__60928__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__60928__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__60928__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__60930 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__60929 = (0);
while(true){
if((i__60929 < size__4291__auto__)){
var unit = cljs.core._nth.call(null,c__4290__auto__,i__60929);
cljs.core.chunk_append.call(null,b__60930,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,unit)))].join('')], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,unit))], null));

var G__60932 = (i__60929 + (1));
i__60929 = G__60932;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__60930),p1mps$simulator$frontend$main$app_components_$_iter__60927.call(null,cljs.core.chunk_rest.call(null,s__60928__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__60930),null);
}
} else {
var unit = cljs.core.first.call(null,s__60928__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,unit)))].join('')], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,unit))], null),p1mps$simulator$frontend$main$app_components_$_iter__60927.call(null,cljs.core.rest.call(null,s__60928__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,new cljs.core.Keyword(null,"defender","defender",1458963871).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state)));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-5.box.border-black","div.mt-5.box.border-black",1949198772),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"2"], null),p1mps.simulator.frontend.main.unit_component_defender.call(null,new cljs.core.Keyword(null,"defender-selected","defender-selected",1024422726).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state)))], null)], null):null),(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state));
if(cljs.core.truth_(and__3911__auto__)){
return new cljs.core.Keyword(null,"defender-selected","defender-selected",1024422726).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state));
} else {
return and__3911__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.field","div.field",1089355414),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.mt-5","button.button.mt-5",-1326850226),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (ev){
ev.preventDefault();

return ajax.core.POST.call(null,"/api/fight",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.select_keys.call(null,cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906),new cljs.core.Keyword(null,"defender-selected","defender-selected",1024422726)], null)),new cljs.core.Keyword(null,"handler","handler",-195596612),p1mps.simulator.frontend.main.fight_ok,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),p1mps.simulator.frontend.main.fight_error,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
})], null),"Fight!"], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"fight","fight",1266695601).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state)))?p1mps.simulator.frontend.main.plot_graph.call(null):null)], null):null)], null);
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
