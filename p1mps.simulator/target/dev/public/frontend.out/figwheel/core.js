// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.core');
goog.require('cljs.core');
goog.require('figwheel.tools.heads_up');
goog.require('goog.object');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.log');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.debug.Console');
goog.require('goog.async.Deferred');
goog.require('goog.Promise');
goog.require('goog.events.EventTarget');
goog.require('goog.events.Event');
figwheel.core.distinct_by = (function figwheel$core$distinct_by(f,coll){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.filter.call(null,((function (seen){
return (function (p1__57495_SHARP_){
var k = f.call(null,p1__57495_SHARP_);
var res = cljs.core.not.call(null,cljs.core.deref.call(null,seen).call(null,k));
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),k));

return res;
});})(seen))
,coll);
});
figwheel.core.map_keys = (function figwheel$core$map_keys(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__57496){
var vec__57497 = p__57496;
var k = cljs.core.nth.call(null,vec__57497,(0),null);
var v = cljs.core.nth.call(null,vec__57497,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null);
})),coll);
});
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (80);
figwheel.core.wrap_line = (function figwheel$core$wrap_line(text,size){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[".{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}\\s|.{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}"].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,text,/\n/," "))," "].join(''));
});
figwheel.core.cross_format = (function figwheel$core$cross_format(var_args){
var args__4502__auto__ = [];
var len__4499__auto___57501 = arguments.length;
var i__4500__auto___57502 = (0);
while(true){
if((i__4500__auto___57502 < len__4499__auto___57501)){
args__4502__auto__.push((arguments[i__4500__auto___57502]));

var G__57503 = (i__4500__auto___57502 + (1));
i__4500__auto___57502 = G__57503;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,goog.string.format,args);
});

figwheel.core.cross_format.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.core.cross_format.cljs$lang$applyTo = (function (seq57500){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57500));
});

figwheel.core.pointer_message_lines = (function figwheel$core$pointer_message_lines(p__57506){
var map__57507 = p__57506;
var map__57507__$1 = ((((!((map__57507 == null)))?(((((map__57507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57507):map__57507);
var message = cljs.core.get.call(null,map__57507__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var column = cljs.core.get.call(null,map__57507__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(((column + cljs.core.count.call(null,message)) > figwheel.core._STAR_inline_code_message_max_column_STAR_)){
return cljs.core.mapv.call(null,((function (map__57507,map__57507__$1,message,column){
return (function (p1__57505_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__57505_SHARP_], null)));
});})(map__57507,map__57507__$1,message,column))
,cljs.core.cons.call(null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s"].join('');
})(),"","^---"),cljs.core.map.call(null,((function (map__57507,map__57507__$1,message,column){
return (function (p1__57504_SHARP_){
return figwheel.core.cross_format.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core._STAR_inline_code_message_max_column_STAR_),"s"].join(''),p1__57504_SHARP_);
});})(map__57507,map__57507__$1,message,column))
,figwheel.core.wrap_line.call(null,message,(figwheel.core._STAR_inline_code_message_max_column_STAR_ - (10))))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s %s"].join('');
})(),"","^---",message)], null)], null);
}
});
figwheel.core.inline_message_display_data = (function figwheel$core$inline_message_display_data(p__57510){
var map__57511 = p__57510;
var map__57511__$1 = ((((!((map__57511 == null)))?(((((map__57511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57511):map__57511);
var message_data = map__57511__$1;
var message = cljs.core.get.call(null,map__57511__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__57511__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__57511__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file_excerpt = cljs.core.get.call(null,map__57511__$1,new cljs.core.Keyword(null,"file-excerpt","file-excerpt",-1132330744));
if(cljs.core.truth_(file_excerpt)){
var map__57513 = file_excerpt;
var map__57513__$1 = ((((!((map__57513 == null)))?(((((map__57513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57513):map__57513);
var start_line = cljs.core.get.call(null,map__57513__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var path = cljs.core.get.call(null,map__57513__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var excerpt = cljs.core.get.call(null,map__57513__$1,new cljs.core.Keyword(null,"excerpt","excerpt",219850763));
var lines = cljs.core.map_indexed.call(null,((function (map__57513,map__57513__$1,start_line,path,excerpt,map__57511,map__57511__$1,message_data,message,line,column,file_excerpt){
return (function (i,l){
var ln = (i + start_line);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,line,ln))?new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357):new cljs.core.Keyword(null,"code-line","code-line",-2138627853)),ln,l],null));
});})(map__57513,map__57513__$1,start_line,path,excerpt,map__57511,map__57511__$1,message_data,message,line,column,file_excerpt))
,clojure.string.split_lines.call(null,excerpt));
var vec__57514 = cljs.core.split_with.call(null,((function (map__57513,map__57513__$1,start_line,path,excerpt,lines,map__57511,map__57511__$1,message_data,message,line,column,file_excerpt){
return (function (p1__57509_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),cljs.core.first.call(null,p1__57509_SHARP_));
});})(map__57513,map__57513__$1,start_line,path,excerpt,lines,map__57511,map__57511__$1,message_data,message,line,column,file_excerpt))
,lines);
var begin = cljs.core.nth.call(null,vec__57514,(0),null);
var end = cljs.core.nth.call(null,vec__57514,(1),null);
return cljs.core.concat.call(null,cljs.core.take_last.call(null,(5),begin),cljs.core.take.call(null,(1),end),figwheel.core.pointer_message_lines.call(null,message_data),cljs.core.take.call(null,(5),cljs.core.rest.call(null,end)));
} else {
return null;
}
});
figwheel.core.file_line_column = (function figwheel$core$file_line_column(p__57518){
var map__57519 = p__57518;
var map__57519__$1 = ((((!((map__57519 == null)))?(((((map__57519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57519):map__57519);
var file = cljs.core.get.call(null,map__57519__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__57519__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__57519__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__57521 = "";
var G__57521__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57521),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__57521);
var G__57521__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57521__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__57521__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57521__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__57521__$2;
}
});
if(typeof figwheel.core.logger !== 'undefined'){
} else {
figwheel.core.logger = goog.log.getLogger("Figwheel");
}

figwheel.core.console_logging = (function figwheel$core$console_logging(){
if(cljs.core.truth_(goog.object.get(goog.debug.Console,"instance"))){
} else {
var c_57568 = (new goog.debug.Console());
var G__57528_57569 = c_57568.getFormatter();
goog.object.set(G__57528_57569,"showAbsoluteTime",false);

goog.object.set(G__57528_57569,"showRelativeTime",false);


goog.object.set(goog.debug.Console,"instance",c_57568);

}

var temp__5735__auto__ = goog.object.get(goog.debug.Console,"instance");
if(cljs.core.truth_(temp__5735__auto__)){
var console_instance = temp__5735__auto__;
console_instance.setCapturing(true);

return true;
} else {
return null;
}
});
goog.exportSymbol('figwheel.core.console_logging', figwheel.core.console_logging);

if(typeof figwheel.core.log_console !== 'undefined'){
} else {
figwheel.core.log_console = figwheel.core.console_logging.call(null);
}

figwheel.core.event_target = ((typeof document !== 'undefined')?document:(new goog.events.EventTarget()));
goog.exportSymbol('figwheel.core.event_target', figwheel.core.event_target);

if(typeof figwheel.core.listener_key_map !== 'undefined'){
} else {
figwheel.core.listener_key_map = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}

figwheel.core.unlisten = (function figwheel$core$unlisten(ky,event_name){
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.core.listener_key_map),ky);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
return figwheel.core.event_target.removeEventListener(cljs.core.name.call(null,event_name),f);
} else {
return null;
}
});

figwheel.core.listen = (function figwheel$core$listen(ky,event_name,f){
figwheel.core.unlisten.call(null,ky,event_name);

figwheel.core.event_target.addEventListener(cljs.core.name.call(null,event_name),f);

return cljs.core.swap_BANG_.call(null,figwheel.core.listener_key_map,cljs.core.assoc,ky,f);
});

figwheel.core.dispatch_event = (function figwheel$core$dispatch_event(event_name,data){
return figwheel.core.event_target.dispatchEvent((function (){var G__57529 = (((figwheel.core.event_target instanceof goog.events.EventTarget))?(new goog.events.Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)):(new Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)));
goog.object.add(G__57529,"data",(function (){var or__3922__auto__ = data;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return G__57529;
})());
});

figwheel.core.event_data = (function figwheel$core$event_data(e){
return goog.object.get((function (){var temp__5733__auto__ = e.event_;
if(cljs.core.truth_(temp__5733__auto__)){
var e__$1 = temp__5733__auto__;
return e__$1;
} else {
return e;
}
})(),"data");
});


/** @define {boolean} */
goog.define("figwheel.core.load_warninged_code",false);


/** @define {boolean} */
goog.define("figwheel.core.heads_up_display",true);

if(typeof figwheel.core.state !== 'undefined'){
} else {
figwheel.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY], null));
}

figwheel.core.heads_up_display_QMARK_ = (function figwheel$core$heads_up_display_QMARK_(){
return ((figwheel.core.heads_up_display) && (!((goog.global.document == null))));
});

var last_reload_timestamp_57570 = cljs.core.atom.call(null,(0));
var promise_chain_57571 = (new goog.Promise(((function (last_reload_timestamp_57570){
return (function (r,_){
return r.call(null,true);
});})(last_reload_timestamp_57570))
));
figwheel.core.render_watcher = ((function (last_reload_timestamp_57570,promise_chain_57571){
return (function figwheel$core$render_watcher(_,___$1,o,n){
if(cljs.core.truth_(figwheel.core.heads_up_display_QMARK_.call(null))){
var temp__5733__auto__ = (function (){var temp__5735__auto__ = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null));
if(cljs.core.truth_(temp__5735__auto__)){
var ts = temp__5735__auto__;
var and__3911__auto__ = (cljs.core.deref.call(null,last_reload_timestamp_57570) < ts);
if(and__3911__auto__){
return ts;
} else {
return and__3911__auto__;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var ts = temp__5733__auto__;
var warnings = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
var exception = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null));
cljs.core.reset_BANG_.call(null,last_reload_timestamp_57570,ts);

if(cljs.core.truth_(warnings)){
return promise_chain_57571.then(((function (warnings,exception,ts,temp__5733__auto__,last_reload_timestamp_57570,promise_chain_57571){
return (function (){
var warn = cljs.core.first.call(null,warnings);
var _STAR_inline_code_message_max_column_STAR_57530 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (132);

try{return figwheel.tools.heads_up.display_warning.call(null,cljs.core.assoc.call(null,warn,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,warn))).then(((function (_STAR_inline_code_message_max_column_STAR_57530,warn,warnings,exception,ts,temp__5733__auto__,last_reload_timestamp_57570,promise_chain_57571){
return (function (){
var seq__57531 = cljs.core.seq.call(null,cljs.core.rest.call(null,warnings));
var chunk__57532 = null;
var count__57533 = (0);
var i__57534 = (0);
while(true){
if((i__57534 < count__57533)){
var w = cljs.core._nth.call(null,chunk__57532,i__57534);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__57572 = seq__57531;
var G__57573 = chunk__57532;
var G__57574 = count__57533;
var G__57575 = (i__57534 + (1));
seq__57531 = G__57572;
chunk__57532 = G__57573;
count__57533 = G__57574;
i__57534 = G__57575;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__57531);
if(temp__5735__auto__){
var seq__57531__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57531__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__57531__$1);
var G__57576 = cljs.core.chunk_rest.call(null,seq__57531__$1);
var G__57577 = c__4319__auto__;
var G__57578 = cljs.core.count.call(null,c__4319__auto__);
var G__57579 = (0);
seq__57531 = G__57576;
chunk__57532 = G__57577;
count__57533 = G__57578;
i__57534 = G__57579;
continue;
} else {
var w = cljs.core.first.call(null,seq__57531__$1);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__57580 = cljs.core.next.call(null,seq__57531__$1);
var G__57581 = null;
var G__57582 = (0);
var G__57583 = (0);
seq__57531 = G__57580;
chunk__57532 = G__57581;
count__57533 = G__57582;
i__57534 = G__57583;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_inline_code_message_max_column_STAR_57530,warn,warnings,exception,ts,temp__5733__auto__,last_reload_timestamp_57570,promise_chain_57571))
);
}finally {figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR_57530;
}});})(warnings,exception,ts,temp__5733__auto__,last_reload_timestamp_57570,promise_chain_57571))
);
} else {
if(cljs.core.truth_(exception)){
return promise_chain_57571.then(((function (warnings,exception,ts,temp__5733__auto__,last_reload_timestamp_57570,promise_chain_57571){
return (function (){
var _STAR_inline_code_message_max_column_STAR_57535 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (132);

try{return figwheel.tools.heads_up.display_exception.call(null,cljs.core.assoc.call(null,exception,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,exception)));
}finally {figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR_57535;
}});})(warnings,exception,ts,temp__5733__auto__,last_reload_timestamp_57570,promise_chain_57571))
);
} else {
return promise_chain_57571.then(((function (warnings,exception,ts,temp__5733__auto__,last_reload_timestamp_57570,promise_chain_57571){
return (function (){
return figwheel.tools.heads_up.flash_loaded.call(null);
});})(warnings,exception,ts,temp__5733__auto__,last_reload_timestamp_57570,promise_chain_57571))
);

}
}
} else {
return null;
}
} else {
return null;
}
});})(last_reload_timestamp_57570,promise_chain_57571))
;

cljs.core.add_watch.call(null,figwheel.core.state,new cljs.core.Keyword("figwheel.core","render-watcher","figwheel.core/render-watcher",2046135910),figwheel.core.render_watcher);

figwheel.core.immutable_ns_QMARK_ = (function figwheel$core$immutable_ns_QMARK_(ns){
var ns__$1 = cljs.core.name.call(null,ns);
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["cljs.nodejs",null,"goog",null,"figwheel.connect",null,"cljs.core",null,"figwheel.preload",null], null), null).call(null,ns__$1);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",ns__$1);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return goog.string.startsWith("goog.",ns__$1);
}
}
});

figwheel.core.name__GT_path = (function figwheel$core$name__GT_path(ns){
return goog.object.get(goog.dependencies_.nameToPath,ns);
});

figwheel.core.provided_QMARK_ = (function figwheel$core$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.core.name__GT_path.call(null,cljs.core.name.call(null,ns)));
});

figwheel.core.ns_exists_QMARK_ = (function figwheel$core$ns_exists_QMARK_(ns){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,ns),".")) == null));
});

figwheel.core.reload_ns_QMARK_ = (function figwheel$core$reload_ns_QMARK_(namespace){
var meta_data = cljs.core.meta.call(null,namespace);
var and__3911__auto__ = cljs.core.not.call(null,figwheel.core.immutable_ns_QMARK_.call(null,namespace));
if(and__3911__auto__){
var and__3911__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data));
if(and__3911__auto____$1){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = figwheel.core.provided_QMARK_.call(null,namespace);
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return figwheel.core.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
});

figwheel.core.call_hooks = (function figwheel$core$call_hooks(var_args){
var args__4502__auto__ = [];
var len__4499__auto___57584 = arguments.length;
var i__4500__auto___57585 = (0);
while(true){
if((i__4500__auto___57585 < len__4499__auto___57584)){
args__4502__auto__.push((arguments[i__4500__auto___57585]));

var G__57586 = (i__4500__auto___57585 + (1));
i__4500__auto___57585 = G__57586;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (hook_key,args){
var hooks = cljs.core.keep.call(null,(function (p__57538){
var vec__57539 = p__57538;
var n = cljs.core.nth.call(null,vec__57539,(0),null);
var mdata = cljs.core.nth.call(null,vec__57539,(1),null);
var temp__5735__auto__ = cljs.core.get_in.call(null,mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),hook_key], null));
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,f], null);
} else {
return null;
}
}),new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.core.state)));
var seq__57542 = cljs.core.seq.call(null,hooks);
var chunk__57543 = null;
var count__57544 = (0);
var i__57545 = (0);
while(true){
if((i__57545 < count__57544)){
var vec__57546 = cljs.core._nth.call(null,chunk__57543,i__57545);
var n = cljs.core.nth.call(null,vec__57546,(0),null);
var f = cljs.core.nth.call(null,vec__57546,(1),null);
var temp__5733__auto___57587 = cljs.core.reduce.call(null,((function (seq__57542,chunk__57543,count__57544,i__57545,vec__57546,n,f,hooks){
return (function (p1__57522_SHARP_,p2__57523_SHARP_){
if(cljs.core.truth_(p1__57522_SHARP_)){
return goog.object.get(p1__57522_SHARP_,p2__57523_SHARP_);
} else {
return null;
}
});})(seq__57542,chunk__57543,count__57544,i__57545,vec__57546,n,f,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5733__auto___57587)){
var hook_57588 = temp__5733__auto___57587;
goog.log.info(figwheel.core.logger,["Calling ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,hook_key))," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_57588,args);
} else {
goog.log.warning(figwheel.core.logger,["Unable to find ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,hook_key))," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__57589 = seq__57542;
var G__57590 = chunk__57543;
var G__57591 = count__57544;
var G__57592 = (i__57545 + (1));
seq__57542 = G__57589;
chunk__57543 = G__57590;
count__57544 = G__57591;
i__57545 = G__57592;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__57542);
if(temp__5735__auto__){
var seq__57542__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57542__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__57542__$1);
var G__57593 = cljs.core.chunk_rest.call(null,seq__57542__$1);
var G__57594 = c__4319__auto__;
var G__57595 = cljs.core.count.call(null,c__4319__auto__);
var G__57596 = (0);
seq__57542 = G__57593;
chunk__57543 = G__57594;
count__57544 = G__57595;
i__57545 = G__57596;
continue;
} else {
var vec__57549 = cljs.core.first.call(null,seq__57542__$1);
var n = cljs.core.nth.call(null,vec__57549,(0),null);
var f = cljs.core.nth.call(null,vec__57549,(1),null);
var temp__5733__auto___57597 = cljs.core.reduce.call(null,((function (seq__57542,chunk__57543,count__57544,i__57545,vec__57549,n,f,seq__57542__$1,temp__5735__auto__,hooks){
return (function (p1__57522_SHARP_,p2__57523_SHARP_){
if(cljs.core.truth_(p1__57522_SHARP_)){
return goog.object.get(p1__57522_SHARP_,p2__57523_SHARP_);
} else {
return null;
}
});})(seq__57542,chunk__57543,count__57544,i__57545,vec__57549,n,f,seq__57542__$1,temp__5735__auto__,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5733__auto___57597)){
var hook_57598 = temp__5733__auto___57597;
goog.log.info(figwheel.core.logger,["Calling ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,hook_key))," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_57598,args);
} else {
goog.log.warning(figwheel.core.logger,["Unable to find ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,hook_key))," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__57599 = cljs.core.next.call(null,seq__57542__$1);
var G__57600 = null;
var G__57601 = (0);
var G__57602 = (0);
seq__57542 = G__57599;
chunk__57543 = G__57600;
count__57544 = G__57601;
i__57545 = G__57602;
continue;
}
} else {
return null;
}
}
break;
}
});

figwheel.core.call_hooks.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
figwheel.core.call_hooks.cljs$lang$applyTo = (function (seq57536){
var G__57537 = cljs.core.first.call(null,seq57536);
var seq57536__$1 = cljs.core.next.call(null,seq57536);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57537,seq57536__$1);
});


figwheel.core.reload_namespaces = (function figwheel$core$reload_namespaces(namespaces,figwheel_meta){
var figwheel_meta__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__57552){
var vec__57553 = p__57552;
var k = cljs.core.nth.call(null,vec__57553,(0),null);
var v = cljs.core.nth.call(null,vec__57553,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
})),cljs.core.js__GT_clj.call(null,figwheel_meta,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var namespaces__$1 = cljs.core.map.call(null,((function (figwheel_meta__$1){
return (function (p1__57524_SHARP_){
return cljs.core.with_meta.call(null,cljs.core.symbol.call(null,p1__57524_SHARP_),cljs.core.get.call(null,figwheel_meta__$1,p1__57524_SHARP_));
});})(figwheel_meta__$1))
,namespaces);
cljs.core.swap_BANG_.call(null,figwheel.core.state,((function (figwheel_meta__$1,namespaces__$1){
return (function (p1__57525_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,p1__57525_SHARP_,new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885),figwheel_meta__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime());
});})(figwheel_meta__$1,namespaces__$1))
);

var to_reload = (cljs.core.truth_((function (){var and__3911__auto__ = !(figwheel.core.load_warninged_code);
if(and__3911__auto__){
return cljs.core.not_empty.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
} else {
return and__3911__auto__;
}
})())?null:cljs.core.filter.call(null,((function (figwheel_meta__$1,namespaces__$1){
return (function (p1__57526_SHARP_){
return figwheel.core.reload_ns_QMARK_.call(null,p1__57526_SHARP_);
});})(figwheel_meta__$1,namespaces__$1))
,namespaces__$1));
if(cljs.core.empty_QMARK_.call(null,to_reload)){
} else {
figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"before-load","before-load",-2060117064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));

setTimeout(((function (to_reload,figwheel_meta__$1,namespaces__$1){
return (function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.before-load","figwheel.before-load",58978771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));
});})(to_reload,figwheel_meta__$1,namespaces__$1))
,(0));
}

var seq__57556_57603 = cljs.core.seq.call(null,to_reload);
var chunk__57557_57604 = null;
var count__57558_57605 = (0);
var i__57559_57606 = (0);
while(true){
if((i__57559_57606 < count__57558_57605)){
var ns_57607 = cljs.core._nth.call(null,chunk__57557_57604,i__57559_57606);
goog.require(cljs.core.name.call(null,ns_57607),true);


var G__57608 = seq__57556_57603;
var G__57609 = chunk__57557_57604;
var G__57610 = count__57558_57605;
var G__57611 = (i__57559_57606 + (1));
seq__57556_57603 = G__57608;
chunk__57557_57604 = G__57609;
count__57558_57605 = G__57610;
i__57559_57606 = G__57611;
continue;
} else {
var temp__5735__auto___57612 = cljs.core.seq.call(null,seq__57556_57603);
if(temp__5735__auto___57612){
var seq__57556_57613__$1 = temp__5735__auto___57612;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57556_57613__$1)){
var c__4319__auto___57614 = cljs.core.chunk_first.call(null,seq__57556_57613__$1);
var G__57615 = cljs.core.chunk_rest.call(null,seq__57556_57613__$1);
var G__57616 = c__4319__auto___57614;
var G__57617 = cljs.core.count.call(null,c__4319__auto___57614);
var G__57618 = (0);
seq__57556_57603 = G__57615;
chunk__57557_57604 = G__57616;
count__57558_57605 = G__57617;
i__57559_57606 = G__57618;
continue;
} else {
var ns_57619 = cljs.core.first.call(null,seq__57556_57613__$1);
goog.require(cljs.core.name.call(null,ns_57619),true);


var G__57620 = cljs.core.next.call(null,seq__57556_57613__$1);
var G__57621 = null;
var G__57622 = (0);
var G__57623 = (0);
seq__57556_57603 = G__57620;
chunk__57557_57604 = G__57621;
count__57558_57605 = G__57622;
i__57559_57606 = G__57623;
continue;
}
} else {
}
}
break;
}

var after_reload_fn_57624 = ((function (to_reload,figwheel_meta__$1,namespaces__$1){
return (function (){
try{if(cljs.core.truth_(cljs.core.not_empty.call(null,to_reload))){
goog.log.info(figwheel.core.logger,["loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,to_reload))].join(''));

figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"after-load","after-load",-1278503285),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));

figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.after-load","figwheel.after-load",-1913099389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));
} else {
}

var temp__5735__auto__ = cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.set.call(null,to_reload)),namespaces__$1));
if(cljs.core.truth_(temp__5735__auto__)){
var not_loaded = temp__5735__auto__;
return goog.log.info(figwheel.core.logger,["did not load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,not_loaded))].join(''));
} else {
return null;
}
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc,new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY);
}});})(to_reload,figwheel_meta__$1,namespaces__$1))
;
if(((typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.after_reloads !== 'undefined'))){
figwheel.repl.after_reloads(after_reload_fn_57624);
} else {
setTimeout(after_reload_fn_57624,(100));
}

return null;
});
goog.exportSymbol('figwheel.core.reload_namespaces', figwheel.core.reload_namespaces);

figwheel.core.compile_warnings = (function figwheel$core$compile_warnings(warnings){
if(cljs.core.empty_QMARK_.call(null,warnings)){
} else {
setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-warnings","figwheel.compile-warnings",-2015032448),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warnings","warnings",-735437651),warnings], null));
}),(0));
}

cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null),cljs.core.concat,warnings);

var seq__57560 = cljs.core.seq.call(null,warnings);
var chunk__57561 = null;
var count__57562 = (0);
var i__57563 = (0);
while(true){
if((i__57563 < count__57562)){
var warning = cljs.core._nth.call(null,chunk__57561,i__57563);
goog.log.warning(figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core.file_line_column.call(null,warning))].join(''));


var G__57625 = seq__57560;
var G__57626 = chunk__57561;
var G__57627 = count__57562;
var G__57628 = (i__57563 + (1));
seq__57560 = G__57625;
chunk__57561 = G__57626;
count__57562 = G__57627;
i__57563 = G__57628;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__57560);
if(temp__5735__auto__){
var seq__57560__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57560__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__57560__$1);
var G__57629 = cljs.core.chunk_rest.call(null,seq__57560__$1);
var G__57630 = c__4319__auto__;
var G__57631 = cljs.core.count.call(null,c__4319__auto__);
var G__57632 = (0);
seq__57560 = G__57629;
chunk__57561 = G__57630;
count__57562 = G__57631;
i__57563 = G__57632;
continue;
} else {
var warning = cljs.core.first.call(null,seq__57560__$1);
goog.log.warning(figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core.file_line_column.call(null,warning))].join(''));


var G__57633 = cljs.core.next.call(null,seq__57560__$1);
var G__57634 = null;
var G__57635 = (0);
var G__57636 = (0);
seq__57560 = G__57633;
chunk__57561 = G__57634;
count__57562 = G__57635;
i__57563 = G__57636;
continue;
}
} else {
return null;
}
}
break;
}
});
goog.exportSymbol('figwheel.core.compile_warnings', figwheel.core.compile_warnings);

figwheel.core.compile_warnings_remote = (function figwheel$core$compile_warnings_remote(warnings_json){
return figwheel.core.compile_warnings.call(null,cljs.core.js__GT_clj.call(null,warnings_json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.compile_warnings_remote', figwheel.core.compile_warnings_remote);

figwheel.core.handle_exception = (function figwheel$core$handle_exception(p__57564){
var map__57565 = p__57564;
var map__57565__$1 = ((((!((map__57565 == null)))?(((((map__57565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57565):map__57565);
var exception_data = map__57565__$1;
var file = cljs.core.get.call(null,map__57565__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var type = cljs.core.get.call(null,map__57565__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__57565__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{setTimeout(((function (map__57565,map__57565__$1,exception_data,file,type,message){
return (function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-exception","figwheel.compile-exception",1092880746),exception_data);
});})(map__57565,map__57565__$1,exception_data,file,type,message))
,(0));

cljs.core.swap_BANG_.call(null,figwheel.core.state,((function (map__57565,map__57565__$1,exception_data,file,type,message){
return (function (p1__57527_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p1__57527_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),exception_data);
});})(map__57565,map__57565__$1,exception_data,file,type,message))
);

return goog.log.warning(figwheel.core.logger,(function (){var G__57567 = "Compile Exception - ";
var G__57567__$1 = (cljs.core.truth_((function (){var or__3922__auto__ = type;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return message;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57567),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null," : ",cljs.core.filter.call(null,cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,message], null))))].join(''):G__57567);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57567__$1)," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core.file_line_column.call(null,exception_data))].join('');
} else {
return G__57567__$1;
}
})());
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715)], null),cljs.core.PersistentArrayMap.EMPTY);
}});
goog.exportSymbol('figwheel.core.handle_exception', figwheel.core.handle_exception);

figwheel.core.handle_exception_remote = (function figwheel$core$handle_exception_remote(exception_data){
return figwheel.core.handle_exception.call(null,cljs.core.js__GT_clj.call(null,exception_data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.handle_exception_remote', figwheel.core.handle_exception_remote);

//# sourceMappingURL=core.js.map