// Compiled by ClojureScript 1.10.238 {}
goog.provide('cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.object');
cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.own_property_descriptors = (cljs.core.truth_("getOwnPropertyDescriptors" in Object)?(function (obj){
return Object.getOwnPropertyDescriptors(obj);
}):(function (obj){
return cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (key){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,Object.getOwnPropertyDescriptor(obj,key)], null);
}),Object.getOwnPropertyNames(obj))));
}));
/**
 * 
 */
cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.properties_by_prototype = (function cider$nrepl$inlined_deps$suitable$v0v4v1$suitable$js_introspection$properties_by_prototype(obj){
var obj__$1 = obj;
var protos = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(obj__$1)){
var G__70078 = Object.getPrototypeOf(obj__$1);
var G__70079 = cljs.core.conj.call(null,protos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"props","props",453281727),cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.own_property_descriptors.call(null,obj__$1)], null));
obj__$1 = G__70078;
protos = G__70079;
continue;
} else {
return protos;
}
break;
}
});
.property_names_and_types = (function $property_names_and_types(var_args){
var G__70093 = arguments.length;
switch (G__70093) {
case 1:
return cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

.property_names_and_types.cljs$core$IFn$_invoke$arity$1 = (function (js_obj){
return .property_names_and_types.call(null,js_obj,null);
});

.property_names_and_types.cljs$core$IFn$_invoke$arity$2 = (function (js_obj,prefix){
var seen = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
var iter__4292__auto__ = ((function (seen){
return (function $iter__70153(s__70154){
return (new cljs.core.LazySeq(null,((function (seen){
return (function (){
var s__70154__$1 = s__70154;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__70154__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__70160 = cljs.core.first.call(null,xs__6292__auto__);
var i = cljs.core.nth.call(null,vec__70160,(0),null);
var map__70163 = cljs.core.nth.call(null,vec__70160,(1),null);
var map__70163__$1 = ((((!((map__70163 == null)))?(((((map__70163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70163):map__70163);
var _obj = cljs.core.get.call(null,map__70163__$1,new cljs.core.Keyword(null,"_obj","_obj",-592966725));
var props = cljs.core.get.call(null,map__70163__$1,new cljs.core.Keyword(null,"props","props",453281727));
var iterys__4288__auto__ = ((function (s__70154__$1,vec__70160,i,map__70163,map__70163__$1,_obj,props,xs__6292__auto__,temp__5735__auto__,seen){
return (function $iter__70153_$_iter__70155(s__70156){
return (new cljs.core.LazySeq(null,((function (s__70154__$1,vec__70160,i,map__70163,map__70163__$1,_obj,props,xs__6292__auto__,temp__5735__auto__,seen){
return (function (){
var s__70156__$1 = s__70156;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__70156__$1);
if(temp__5735__auto____$1){
var s__70156__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__70156__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__70156__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__70159 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__70158 = (0);
while(true){
if((i__70158 < size__4291__auto__)){
var key = cljs.core._nth.call(null,c__4290__auto__,i__70158);
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.not.call(null,cljs.core.get.call(null,seen,key));
if(and__3911__auto__){
var or__3922__auto__ = cljs.core.empty_QMARK_.call(null,prefix);
if(or__3922__auto__){
return or__3922__auto__;
} else {
return .starts_with_QMARK_.call(null,key,prefix);
}
} else {
return and__3911__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__70159,(function (){var prop = .oget.call(null,props,key);
cljs.core.conj_BANG_.call(null,seen,key);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),key,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),i,new cljs.core.Keyword(null,"type","type",1174270348),(function (){try{var temp__5733__auto__ = (function (){var or__3922__auto__ = .oget.call(null,prop,"value");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.apply.call(null,.oget.call(null,prop,"get"),cljs.core.PersistentVector.EMPTY);
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var value = temp__5733__auto__;
if(cljs.core.fn_QMARK_.call(null,value)){
return "function";
} else {
return "var";
}
} else {
return "var";
}
}catch (e70165){if((e70165 instanceof Error)){
var _e = e70165;
return "var";
} else {
throw e70165;

}
}})()], null);
})());

var G__70180 = (i__70158 + (1));
i__70158 = G__70180;
continue;
} else {
var G__70181 = (i__70158 + (1));
i__70158 = G__70181;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__70159),$iter__70153_$_iter__70155.call(null,cljs.core.chunk_rest.call(null,s__70156__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__70159),null);
}
} else {
var key = cljs.core.first.call(null,s__70156__$2);
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.not.call(null,cljs.core.get.call(null,seen,key));
if(and__3911__auto__){
var or__3922__auto__ = cljs.core.empty_QMARK_.call(null,prefix);
if(or__3922__auto__){
return or__3922__auto__;
} else {
return .starts_with_QMARK_.call(null,key,prefix);
}
} else {
return and__3911__auto__;
}
})())){
return cljs.core.cons.call(null,(function (){var prop = .oget.call(null,props,key);
cljs.core.conj_BANG_.call(null,seen,key);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),key,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),i,new cljs.core.Keyword(null,"type","type",1174270348),(function (){try{var temp__5733__auto__ = (function (){var or__3922__auto__ = .oget.call(null,prop,"value");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.apply.call(null,.oget.call(null,prop,"get"),cljs.core.PersistentVector.EMPTY);
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var value = temp__5733__auto__;
if(cljs.core.fn_QMARK_.call(null,value)){
return "function";
} else {
return "var";
}
} else {
return "var";
}
}catch (e70168){if((e70168 instanceof Error)){
var _e = e70168;
return "var";
} else {
throw e70168;

}
}})()], null);
})(),$iter__70153_$_iter__70155.call(null,cljs.core.rest.call(null,s__70156__$2)));
} else {
var G__70182 = cljs.core.rest.call(null,s__70156__$2);
s__70156__$1 = G__70182;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__70154__$1,vec__70160,i,map__70163,map__70163__$1,_obj,props,xs__6292__auto__,temp__5735__auto__,seen))
,null,null));
});})(s__70154__$1,vec__70160,i,map__70163,map__70163__$1,_obj,props,xs__6292__auto__,temp__5735__auto__,seen))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,cljs.core.js_keys.call(null,props)));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,$iter__70153.call(null,cljs.core.rest.call(null,s__70154__$1)));
} else {
var G__70183 = cljs.core.rest.call(null,s__70154__$1);
s__70154__$1 = G__70183;
continue;
}
} else {
return null;
}
break;
}
});})(seen))
,null,null));
});})(seen))
;
return iter__4292__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,.properties_by_prototype.call(null,js_obj)));
});

.property_names_and_types.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=js_introspection.js.map
turn null;
}
break;
}
});})(seen))
,null,null));
});})(seen))
;
return iter__4292__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.properties_by_prototype.call(null,js_obj)));
});

cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=js_introspection.js.map
