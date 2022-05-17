// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__59100){
var map__59101 = p__59100;
var map__59101__$1 = ((((!((map__59101 == null)))?(((((map__59101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59101):map__59101);
var m = map__59101__$1;
var n = cljs.core.get.call(null,map__59101__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__59101__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__59103_59125 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__59104_59126 = null;
var count__59105_59127 = (0);
var i__59106_59128 = (0);
while(true){
if((i__59106_59128 < count__59105_59127)){
var f_59129 = cljs.core._nth.call(null,chunk__59104_59126,i__59106_59128);
cljs.core.println.call(null,"  ",f_59129);


var G__59130 = seq__59103_59125;
var G__59131 = chunk__59104_59126;
var G__59132 = count__59105_59127;
var G__59133 = (i__59106_59128 + (1));
seq__59103_59125 = G__59130;
chunk__59104_59126 = G__59131;
count__59105_59127 = G__59132;
i__59106_59128 = G__59133;
continue;
} else {
var temp__5735__auto___59134 = cljs.core.seq.call(null,seq__59103_59125);
if(temp__5735__auto___59134){
var seq__59103_59135__$1 = temp__5735__auto___59134;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59103_59135__$1)){
var c__4319__auto___59136 = cljs.core.chunk_first.call(null,seq__59103_59135__$1);
var G__59137 = cljs.core.chunk_rest.call(null,seq__59103_59135__$1);
var G__59138 = c__4319__auto___59136;
var G__59139 = cljs.core.count.call(null,c__4319__auto___59136);
var G__59140 = (0);
seq__59103_59125 = G__59137;
chunk__59104_59126 = G__59138;
count__59105_59127 = G__59139;
i__59106_59128 = G__59140;
continue;
} else {
var f_59141 = cljs.core.first.call(null,seq__59103_59135__$1);
cljs.core.println.call(null,"  ",f_59141);


var G__59142 = cljs.core.next.call(null,seq__59103_59135__$1);
var G__59143 = null;
var G__59144 = (0);
var G__59145 = (0);
seq__59103_59125 = G__59142;
chunk__59104_59126 = G__59143;
count__59105_59127 = G__59144;
i__59106_59128 = G__59145;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_59146 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_59146);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_59146)))?cljs.core.second.call(null,arglists_59146):arglists_59146));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__59107_59147 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__59108_59148 = null;
var count__59109_59149 = (0);
var i__59110_59150 = (0);
while(true){
if((i__59110_59150 < count__59109_59149)){
var vec__59111_59151 = cljs.core._nth.call(null,chunk__59108_59148,i__59110_59150);
var name_59152 = cljs.core.nth.call(null,vec__59111_59151,(0),null);
var map__59114_59153 = cljs.core.nth.call(null,vec__59111_59151,(1),null);
var map__59114_59154__$1 = ((((!((map__59114_59153 == null)))?(((((map__59114_59153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59114_59153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59114_59153):map__59114_59153);
var doc_59155 = cljs.core.get.call(null,map__59114_59154__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_59156 = cljs.core.get.call(null,map__59114_59154__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_59152);

cljs.core.println.call(null," ",arglists_59156);

if(cljs.core.truth_(doc_59155)){
cljs.core.println.call(null," ",doc_59155);
} else {
}


var G__59157 = seq__59107_59147;
var G__59158 = chunk__59108_59148;
var G__59159 = count__59109_59149;
var G__59160 = (i__59110_59150 + (1));
seq__59107_59147 = G__59157;
chunk__59108_59148 = G__59158;
count__59109_59149 = G__59159;
i__59110_59150 = G__59160;
continue;
} else {
var temp__5735__auto___59161 = cljs.core.seq.call(null,seq__59107_59147);
if(temp__5735__auto___59161){
var seq__59107_59162__$1 = temp__5735__auto___59161;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59107_59162__$1)){
var c__4319__auto___59163 = cljs.core.chunk_first.call(null,seq__59107_59162__$1);
var G__59164 = cljs.core.chunk_rest.call(null,seq__59107_59162__$1);
var G__59165 = c__4319__auto___59163;
var G__59166 = cljs.core.count.call(null,c__4319__auto___59163);
var G__59167 = (0);
seq__59107_59147 = G__59164;
chunk__59108_59148 = G__59165;
count__59109_59149 = G__59166;
i__59110_59150 = G__59167;
continue;
} else {
var vec__59116_59168 = cljs.core.first.call(null,seq__59107_59162__$1);
var name_59169 = cljs.core.nth.call(null,vec__59116_59168,(0),null);
var map__59119_59170 = cljs.core.nth.call(null,vec__59116_59168,(1),null);
var map__59119_59171__$1 = ((((!((map__59119_59170 == null)))?(((((map__59119_59170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59119_59170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59119_59170):map__59119_59170);
var doc_59172 = cljs.core.get.call(null,map__59119_59171__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_59173 = cljs.core.get.call(null,map__59119_59171__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_59169);

cljs.core.println.call(null," ",arglists_59173);

if(cljs.core.truth_(doc_59172)){
cljs.core.println.call(null," ",doc_59172);
} else {
}


var G__59174 = cljs.core.next.call(null,seq__59107_59162__$1);
var G__59175 = null;
var G__59176 = (0);
var G__59177 = (0);
seq__59107_59147 = G__59174;
chunk__59108_59148 = G__59175;
count__59109_59149 = G__59176;
i__59110_59150 = G__59177;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__59121 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__59122 = null;
var count__59123 = (0);
var i__59124 = (0);
while(true){
if((i__59124 < count__59123)){
var role = cljs.core._nth.call(null,chunk__59122,i__59124);
var temp__5735__auto___59178__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___59178__$1)){
var spec_59179 = temp__5735__auto___59178__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_59179));
} else {
}


var G__59180 = seq__59121;
var G__59181 = chunk__59122;
var G__59182 = count__59123;
var G__59183 = (i__59124 + (1));
seq__59121 = G__59180;
chunk__59122 = G__59181;
count__59123 = G__59182;
i__59124 = G__59183;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__59121);
if(temp__5735__auto____$1){
var seq__59121__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59121__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__59121__$1);
var G__59184 = cljs.core.chunk_rest.call(null,seq__59121__$1);
var G__59185 = c__4319__auto__;
var G__59186 = cljs.core.count.call(null,c__4319__auto__);
var G__59187 = (0);
seq__59121 = G__59184;
chunk__59122 = G__59185;
count__59123 = G__59186;
i__59124 = G__59187;
continue;
} else {
var role = cljs.core.first.call(null,seq__59121__$1);
var temp__5735__auto___59188__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___59188__$2)){
var spec_59189 = temp__5735__auto___59188__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_59189));
} else {
}


var G__59190 = cljs.core.next.call(null,seq__59121__$1);
var G__59191 = null;
var G__59192 = (0);
var G__59193 = (0);
seq__59121 = G__59190;
chunk__59122 = G__59191;
count__59123 = G__59192;
i__59124 = G__59193;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
