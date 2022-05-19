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
return new cljs.core.Keyword(null,"rating","rating",144173662).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__111625_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__111625_SHARP_),rule);
}),rules)));
});
p1mps.simulator.frontend.main.weapons_component = (function p1mps$simulator$frontend$main$weapons_component(unit_id,weapons){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.columns","div.columns",-437221213),(function (){var iter__4292__auto__ = (function p1mps$simulator$frontend$main$weapons_component_$_iter__111626(s__111627){
return (new cljs.core.LazySeq(null,(function (){
var s__111627__$1 = s__111627;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__111627__$1);
if(temp__5735__auto__){
var s__111627__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__111627__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__111627__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__111629 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__111628 = (0);
while(true){
if((i__111628 < size__4291__auto__)){
var weapon = cljs.core._nth.call(null,c__4290__auto__,i__111628);
cljs.core.chunk_append.call(null,b__111629,(function (){var index = weapons.indexOf(weapon);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Weapon"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Attacks"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"AP"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(weapon)),"x ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(weapon))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#attacks","input#attacks",-1908018929),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),["attacks-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),"input",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"attacks","attacks",-152588999).cljs$core$IFn$_invoke$arity$1(weapon),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__111628,index,weapon,c__4290__auto__,size__4291__auto__,b__111629,s__111627__$2,temp__5735__auto__){
return (function (e){
var attacks = parseInt(e.target.value);
cljs.core.swap_BANG_.call(null,p1mps.simulator.frontend.main.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906),unit_id,new cljs.core.Keyword(null,"weapons","weapons",-1983639898),index,new cljs.core.Keyword(null,"attacks","attacks",-152588999)], null),attacks);

return cljs.core.println.call(null,new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state)));
});})(i__111628,index,weapon,c__4290__auto__,size__4291__auto__,b__111629,s__111627__$2,temp__5735__auto__))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#ap","input#ap",927118533),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3922__auto__ = new cljs.core.Keyword(null,"ap","ap",-1072838153).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"specialRules","specialRules",45874347).cljs$core$IFn$_invoke$arity$1(weapon));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "-";
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),"input",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__111628,index,weapon,c__4290__auto__,size__4291__auto__,b__111629,s__111627__$2,temp__5735__auto__){
return (function (e){
var ap = parseInt(e.target.value);
cljs.core.swap_BANG_.call(null,p1mps.simulator.frontend.main.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906),unit_id,new cljs.core.Keyword(null,"weapons","weapons",-1983639898),index,new cljs.core.Keyword(null,"specialRules","specialRules",45874347),new cljs.core.Keyword(null,"ap","ap",-1072838153)], null),ap);

return cljs.core.println.call(null,new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state)));
});})(i__111628,index,weapon,c__4290__auto__,size__4291__auto__,b__111629,s__111627__$2,temp__5735__auto__))
], null)], null)], null)], null)], null)], null)], null)], null);
})());

var G__111630 = (i__111628 + (1));
i__111628 = G__111630;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__111629),p1mps$simulator$frontend$main$weapons_component_$_iter__111626.call(null,cljs.core.chunk_rest.call(null,s__111627__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__111629),null);
}
} else {
var weapon = cljs.core.first.call(null,s__111627__$2);
return cljs.core.cons.call(null,(function (){var index = weapons.indexOf(weapon);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Weapon"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Attacks"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"AP"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(weapon)),"x ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(weapon))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#attacks","input#attacks",-1908018929),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),["attacks-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),"input",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"attacks","attacks",-152588999).cljs$core$IFn$_invoke$arity$1(weapon),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (index,weapon,s__111627__$2,temp__5735__auto__){
return (function (e){
var attacks = parseInt(e.target.value);
cljs.core.swap_BANG_.call(null,p1mps.simulator.frontend.main.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906),unit_id,new cljs.core.Keyword(null,"weapons","weapons",-1983639898),index,new cljs.core.Keyword(null,"attacks","attacks",-152588999)], null),attacks);

return cljs.core.println.call(null,new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state)));
});})(index,weapon,s__111627__$2,temp__5735__auto__))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#ap","input#ap",927118533),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3922__auto__ = new cljs.core.Keyword(null,"ap","ap",-1072838153).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"specialRules","specialRules",45874347).cljs$core$IFn$_invoke$arity$1(weapon));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "-";
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),"input",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (index,weapon,s__111627__$2,temp__5735__auto__){
return (function (e){
var ap = parseInt(e.target.value);
cljs.core.swap_BANG_.call(null,p1mps.simulator.frontend.main.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906),unit_id,new cljs.core.Keyword(null,"weapons","weapons",-1983639898),index,new cljs.core.Keyword(null,"specialRules","specialRules",45874347),new cljs.core.Keyword(null,"ap","ap",-1072838153)], null),ap);

return cljs.core.println.call(null,new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state)));
});})(index,weapon,s__111627__$2,temp__5735__auto__))
], null)], null)], null)], null)], null)], null)], null)], null);
})(),p1mps$simulator$frontend$main$weapons_component_$_iter__111626.call(null,cljs.core.rest.call(null,s__111627__$2)));
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
return (function p1mps$simulator$frontend$main$unit_component_attacker_$_iter__111631(s__111632){
return (new cljs.core.LazySeq(null,((function (unit_id){
return (function (){
var s__111632__$1 = s__111632;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__111632__$1);
if(temp__5735__auto__){
var s__111632__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__111632__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__111632__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__111634 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__111633 = (0);
while(true){
if((i__111633 < size__4291__auto__)){
var unit = cljs.core._nth.call(null,c__4290__auto__,i__111633);
cljs.core.chunk_append.call(null,b__111634,(function (){
cljs.core.swap_BANG_.call(null,unit_id,cljs.core.inc);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Quality"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Size"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.deref.call(null,unit_id),new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"quality","quality",147850199).cljs$core$IFn$_invoke$arity$1(unit),new cljs.core.Keyword(null,"class","class",-2030961996),"input",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__111633,unit,c__4290__auto__,size__4291__auto__,b__111634,s__111632__$2,temp__5735__auto__,unit_id){
return (function (e){
var quality_111635 = parseInt(e.target.value);
var unit_id_111636__$1 = parseInt(e.target.id);
cljs.core.swap_BANG_.call(null,p1mps.simulator.frontend.main.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906),unit_id_111636__$1,new cljs.core.Keyword(null,"quality","quality",147850199)], null),quality_111635);

cljs.core.println.call(null,unit_id);

return cljs.core.println.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state)),unit_id));
});})(i__111633,unit,c__4290__auto__,size__4291__auto__,b__111634,s__111632__$2,temp__5735__auto__,unit_id))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(unit)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),p1mps.simulator.frontend.main.weapons_component.call(null,cljs.core.deref.call(null,unit_id),new cljs.core.Keyword(null,"weapons","weapons",-1983639898).cljs$core$IFn$_invoke$arity$1(unit)),(((cljs.core.deref.call(null,unit_id) < (cljs.core.count.call(null,units) - (1))))?(new cljs.core.List(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr.border-black","hr.border-black",1971665940)], null),null,(1),null)):null)], null)], null);
})()
);

var G__111637 = (i__111633 + (1));
i__111633 = G__111637;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__111634),p1mps$simulator$frontend$main$unit_component_attacker_$_iter__111631.call(null,cljs.core.chunk_rest.call(null,s__111632__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__111634),null);
}
} else {
var unit = cljs.core.first.call(null,s__111632__$2);
return cljs.core.cons.call(null,(function (){
cljs.core.swap_BANG_.call(null,unit_id,cljs.core.inc);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Quality"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Size"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.deref.call(null,unit_id),new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"quality","quality",147850199).cljs$core$IFn$_invoke$arity$1(unit),new cljs.core.Keyword(null,"class","class",-2030961996),"input",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (unit,s__111632__$2,temp__5735__auto__,unit_id){
return (function (e){
var quality_111638 = parseInt(e.target.value);
var unit_id_111639__$1 = parseInt(e.target.id);
cljs.core.swap_BANG_.call(null,p1mps.simulator.frontend.main.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906),unit_id_111639__$1,new cljs.core.Keyword(null,"quality","quality",147850199)], null),quality_111638);

cljs.core.println.call(null,unit_id);

return cljs.core.println.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"attacker-selected","attacker-selected",-933178906).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state)),unit_id));
});})(unit,s__111632__$2,temp__5735__auto__,unit_id))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(unit)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),p1mps.simulator.frontend.main.weapons_component.call(null,cljs.core.deref.call(null,unit_id),new cljs.core.Keyword(null,"weapons","weapons",-1983639898).cljs$core$IFn$_invoke$arity$1(unit)),(((cljs.core.deref.call(null,unit_id) < (cljs.core.count.call(null,units) - (1))))?(new cljs.core.List(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr.border-black","hr.border-black",1971665940)], null),null,(1),null)):null)], null)], null);
})()
,p1mps$simulator$frontend$main$unit_component_attacker_$_iter__111631.call(null,cljs.core.rest.call(null,s__111632__$2)));
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
return (function p1mps$simulator$frontend$main$unit_component_defender_$_iter__111640(s__111641){
return (new cljs.core.LazySeq(null,((function (unit_id){
return (function (){
var s__111641__$1 = s__111641;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__111641__$1);
if(temp__5735__auto__){
var s__111641__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__111641__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__111641__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__111643 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__111642 = (0);
while(true){
if((i__111642 < size__4291__auto__)){
var unit = cljs.core._nth.call(null,c__4290__auto__,i__111642);
cljs.core.chunk_append.call(null,b__111643,(function (){
cljs.core.swap_BANG_.call(null,unit_id,cljs.core.inc);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Defense"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Regeneration"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Tough"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Size"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.deref.call(null,unit_id),new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"defense","defense",1755014992).cljs$core$IFn$_invoke$arity$1(unit),new cljs.core.Keyword(null,"class","class",-2030961996),"input",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__111642,unit,c__4290__auto__,size__4291__auto__,b__111643,s__111641__$2,temp__5735__auto__,unit_id){
return (function (e){
var defense_111644 = parseInt(e.target.value);
var unit_id_111645__$1 = parseInt(e.target.id);
cljs.core.swap_BANG_.call(null,p1mps.simulator.frontend.main.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defender-selected","defender-selected",1024422726),unit_id_111645__$1,new cljs.core.Keyword(null,"defense","defense",1755014992)], null),defense_111644);

return cljs.core.println.call(null,new cljs.core.Keyword(null,"defender-selected","defender-selected",1024422726).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state)));
});})(i__111642,unit,c__4290__auto__,size__4291__auto__,b__111643,s__111641__$2,temp__5735__auto__,unit_id))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#rules","input#rules",819069433),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.deref.call(null,unit_id),new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3922__auto__ = new cljs.core.Keyword(null,"regeneration","regeneration",-990906441).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"specialRules","specialRules",45874347).cljs$core$IFn$_invoke$arity$1(unit));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "-";
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),"input",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__111642,unit,c__4290__auto__,size__4291__auto__,b__111643,s__111641__$2,temp__5735__auto__,unit_id){
return (function (e){
var regeneration_111646 = parseInt(e.target.value);
var unit_id_111647__$1 = parseInt(e.target.id);
cljs.core.swap_BANG_.call(null,p1mps.simulator.frontend.main.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defender-selected","defender-selected",1024422726),unit_id_111647__$1,new cljs.core.Keyword(null,"specialRules","specialRules",45874347),new cljs.core.Keyword(null,"regeneration","regeneration",-990906441)], null),regeneration_111646);

return cljs.core.println.call(null,new cljs.core.Keyword(null,"defender-selected","defender-selected",1024422726).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state)));
});})(i__111642,unit,c__4290__auto__,size__4291__auto__,b__111643,s__111641__$2,temp__5735__auto__,unit_id))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),(function (){var or__3922__auto__ = new cljs.core.Keyword(null,"tough","tough",-2080376345).cljs$core$IFn$_invoke$arity$1(unit);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "-";
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(unit)], null)], null)], null)], null)], null);
})()
);

var G__111648 = (i__111642 + (1));
i__111642 = G__111648;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__111643),p1mps$simulator$frontend$main$unit_component_defender_$_iter__111640.call(null,cljs.core.chunk_rest.call(null,s__111641__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__111643),null);
}
} else {
var unit = cljs.core.first.call(null,s__111641__$2);
return cljs.core.cons.call(null,(function (){
cljs.core.swap_BANG_.call(null,unit_id,cljs.core.inc);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Defense"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Regeneration"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Tough"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Size"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.deref.call(null,unit_id),new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"defense","defense",1755014992).cljs$core$IFn$_invoke$arity$1(unit),new cljs.core.Keyword(null,"class","class",-2030961996),"input",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (unit,s__111641__$2,temp__5735__auto__,unit_id){
return (function (e){
var defense_111649 = parseInt(e.target.value);
var unit_id_111650__$1 = parseInt(e.target.id);
cljs.core.swap_BANG_.call(null,p1mps.simulator.frontend.main.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defender-selected","defender-selected",1024422726),unit_id_111650__$1,new cljs.core.Keyword(null,"defense","defense",1755014992)], null),defense_111649);

return cljs.core.println.call(null,new cljs.core.Keyword(null,"defender-selected","defender-selected",1024422726).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state)));
});})(unit,s__111641__$2,temp__5735__auto__,unit_id))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#rules","input#rules",819069433),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.deref.call(null,unit_id),new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3922__auto__ = new cljs.core.Keyword(null,"regeneration","regeneration",-990906441).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"specialRules","specialRules",45874347).cljs$core$IFn$_invoke$arity$1(unit));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "-";
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),"input",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (unit,s__111641__$2,temp__5735__auto__,unit_id){
return (function (e){
var regeneration_111651 = parseInt(e.target.value);
var unit_id_111652__$1 = parseInt(e.target.id);
cljs.core.swap_BANG_.call(null,p1mps.simulator.frontend.main.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defender-selected","defender-selected",1024422726),unit_id_111652__$1,new cljs.core.Keyword(null,"specialRules","specialRules",45874347),new cljs.core.Keyword(null,"regeneration","regeneration",-990906441)], null),regeneration_111651);

return cljs.core.println.call(null,new cljs.core.Keyword(null,"defender-selected","defender-selected",1024422726).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1mps.simulator.frontend.main.app_state)));
});})(unit,s__111641__$2,temp__5735__auto__,unit_id))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),(function (){var or__3922__auto__ = new cljs.core.Keyword(null,"tough","tough",-2080376345).cljs$core$IFn$_invoke$arity$1(unit);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "-";
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(unit)], null)], null)], null)], null)], null);
})()
,p1mps$simulator$frontend$main$unit_component_defender_$_iter__111640.call(null,cljs.core.rest.call(null,s__111641__$2)));
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(stats)))," median value ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"median","median",569566131).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(stats)))].join('');
});
p1mps.simulator.frontend.main.plot_graph = (function p1mps$simulator$frontend$main$plot_graph(){
var data = cljs.core.vec.call(null,(function (){var iter__4292__auto__ = (function p1mps$simulator$frontend$main$plot_graph_$_iter__111653(s__111654){
return (new cljs.core.LazySeq(null,(function (){
var s__111654__$1 = s__111654;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__111654__$1);
if(temp__5735__auto__){
var s__111654__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__111654__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__111654__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__111656 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__111655 = (0);
while(true){
if((i__111655 < size__4291__auto__)){
var vec__111657 = cljs.core._nth.call(null,c__4290__auto__,i__111655);
var weapon = cljs.core.nth.call(null,vec__111657,(0),null);
var wounds = cljs.core.nth.call(null,vec__111657,(1),null);
cljs.core.chunk_append.call(null,b__111656,(function (){var freqs = cljs.core.into.call(null,cljs.core.sorted_map.call(null),cljs.core.frequencies.call(null,new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(wounds)));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.vals.call(null,freqs),new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.keys.call(null,freqs),new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(wounds),new cljs.core.Keyword(null,"name","name",1843675177),weapon,new cljs.core.Keyword(null,"type","type",1174270348),"bars"], null);
})());

var G__111667 = (i__111655 + (1));
i__111655 = G__111667;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__111656),p1mps$simulator$frontend$main$plot_graph_$_iter__111653.call(null,cljs.core.chunk_rest.call(null,s__111654__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__111656),null);
}
} else {
var vec__111660 = cljs.core.first.call(null,s__111654__$2);
var weapon = cljs.core.nth.call(null,vec__111660,(0),null);
var wounds = cljs.core.nth.call(null,vec__111660,(1),null);
return cljs.core.cons.call(null,(function (){var freqs = cljs.core.into.call(null,cljs.core.sorted_map.call(null),cljs.core.frequencies.call(null,new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(wounds)));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.vals.call(null,freqs),new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.keys.call(null,freqs),new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(wounds),new cljs.core.Keyword(null,"name","name",1843675177),weapon,new cljs.core.Keyword(null,"type","type",1174270348),"bars"], null);
})(),p1mps$simulator$frontend$main$plot_graph_$_iter__111653.call(null,cljs.core.rest.call(null,s__111654__$2)));
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
var seq__111663 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),cljs.core.count.call(null,data)));
var chunk__111664 = null;
var count__111665 = (0);
var i__111666 = (0);
while(true){
if((i__111666 < count__111665)){
var i = cljs.core._nth.call(null,chunk__111664,i__111666);
Plotly.newPlot(document.getElementById(["graph",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,data,i)], null)),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),p1mps.simulator.frontend.main.graph_title.call(null,cljs.core.get.call(null,data,i)),new cljs.core.Keyword(null,"xaxis","xaxis",488378734),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Wounds"], null)], null),new cljs.core.Keyword(null,"responsive","responsive",-1606632318),true], null)));


var G__111668 = seq__111663;
var G__111669 = chunk__111664;
var G__111670 = count__111665;
var G__111671 = (i__111666 + (1));
seq__111663 = G__111668;
chunk__111664 = G__111669;
count__111665 = G__111670;
i__111666 = G__111671;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__111663);
if(temp__5735__auto__){
var seq__111663__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__111663__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__111663__$1);
var G__111672 = cljs.core.chunk_rest.call(null,seq__111663__$1);
var G__111673 = c__4319__auto__;
var G__111674 = cljs.core.count.call(null,c__4319__auto__);
var G__111675 = (0);
seq__111663 = G__111672;
chunk__111664 = G__111673;
count__111665 = G__111674;
i__111666 = G__111675;
continue;
} else {
var i = cljs.core.first.call(null,seq__111663__$1);
Plotly.newPlot(document.getElementById(["graph",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,data,i)], null)),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),p1mps.simulator.frontend.main.graph_title.call(null,cljs.core.get.call(null,data,i)),new cljs.core.Keyword(null,"xaxis","xaxis",488378734),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Wounds"], null)], null),new cljs.core.Keyword(null,"responsive","responsive",-1606632318),true], null)));


var G__111676 = cljs.core.next.call(null,seq__111663__$1);
var G__111677 = null;
var G__111678 = (0);
var G__111679 = (0);
seq__111663 = G__111676;
chunk__111664 = G__111677;
count__111665 = G__111678;
i__111666 = G__111679;
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
})], null),(function (){var iter__4292__auto__ = (function p1mps$simulator$frontend$main$app_components_$_iter__111680(s__111681){
return (new cljs.core.LazySeq(null,(function (){
var s__111681__$1 = s__111681;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__111681__$1);
if(temp__5735__auto__){
var s__111681__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__111681__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__111681__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__111683 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__111682 = (0);
while(true){
if((i__111682 < size__4291__auto__)){
var unit = cljs.core._nth.call(null,c__4290__auto__,i__111682);
cljs.core.chunk_append.call(null,b__111683,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,unit)))].join('')], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,unit))], null));

var G__111688 = (i__111682 + (1));
i__111682 = G__111688;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__111683),p1mps$simulator$frontend$main$app_components_$_iter__111680.call(null,cljs.core.chunk_rest.call(null,s__111681__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__111683),null);
}
} else {
var unit = cljs.core.first.call(null,s__111681__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,unit)))].join('')], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,unit))], null),p1mps$simulator$frontend$main$app_components_$_iter__111680.call(null,cljs.core.rest.call(null,s__111681__$2)));
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
})], null),(function (){var iter__4292__auto__ = (function p1mps$simulator$frontend$main$app_components_$_iter__111684(s__111685){
return (new cljs.core.LazySeq(null,(function (){
var s__111685__$1 = s__111685;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__111685__$1);
if(temp__5735__auto__){
var s__111685__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__111685__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__111685__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__111687 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__111686 = (0);
while(true){
if((i__111686 < size__4291__auto__)){
var unit = cljs.core._nth.call(null,c__4290__auto__,i__111686);
cljs.core.chunk_append.call(null,b__111687,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,unit)))].join('')], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,unit))], null));

var G__111689 = (i__111686 + (1));
i__111686 = G__111689;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__111687),p1mps$simulator$frontend$main$app_components_$_iter__111684.call(null,cljs.core.chunk_rest.call(null,s__111685__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__111687),null);
}
} else {
var unit = cljs.core.first.call(null,s__111685__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,unit)))].join('')], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,unit))], null),p1mps$simulator$frontend$main$app_components_$_iter__111684.call(null,cljs.core.rest.call(null,s__111685__$2)));
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
