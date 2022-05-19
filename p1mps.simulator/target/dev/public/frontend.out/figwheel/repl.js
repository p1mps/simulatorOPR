// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.repl');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.object');
goog.require('goog.storage.mechanism.mechanismfactory');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('goog.net.XhrIo');
goog.require('goog.log');
goog.require('goog.array');
goog.require('goog.json');
goog.require('goog.html.legacyconversions');
goog.require('goog.userAgent.product');
goog.require('goog.net.WebSocket');
goog.require('goog.debug.Console');
goog.require('goog.Uri.QueryData');
goog.require('goog.Promise');
goog.require('goog.storage.mechanism.HTML5SessionStorage');
figwheel.repl.default_port = (9500);
if(typeof figwheel.repl.logger !== 'undefined'){
} else {
figwheel.repl.logger = goog.log.getLogger("Figwheel REPL");
}

figwheel.repl.console_logging = (function figwheel$repl$console_logging(){
if(cljs.core.truth_(goog.object.get(goog.debug.Console,"instance"))){
} else {
var c_57130 = (new goog.debug.Console());
var G__57047_57131 = c_57130.getFormatter();
goog.object.set(G__57047_57131,"showAbsoluteTime",false);

goog.object.set(G__57047_57131,"showRelativeTime",false);


goog.object.set(goog.debug.Console,"instance",c_57130);

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
goog.exportSymbol('figwheel.repl.console_logging', figwheel.repl.console_logging);

if(typeof figwheel.repl.log_console !== 'undefined'){
} else {
figwheel.repl.log_console = figwheel.repl.console_logging.call(null);
}

figwheel.repl.debug = (function figwheel$repl$debug(msg){
return goog.log.log(figwheel.repl.logger,goog.debug.Logger.Level.FINEST,msg);
});


figwheel.repl.unprovide_BANG_ = (function figwheel$repl$unprovide_BANG_(ns){
var path = goog.object.get(goog.dependencies_.nameToPath,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});

figwheel.repl.figwheel_require = (function figwheel$repl$figwheel_require(src,reload){
goog.require = figwheel.repl.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
goog.cljsReloadAll_ = true;
} else {
}

if(cljs.core.truth_((function (){var or__3922__auto__ = reload;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.cljsReloadAll_;
}
})())){
figwheel.repl.unprovide_BANG_.call(null,src);
} else {
}

var res = goog.require_figwheel_backup_(src);
if(cljs.core._EQ_.call(null,reload,"reload-all")){
goog.cljsReloadAll_ = false;
} else {
}

return res;
});

/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.repl.bootstrap_goog_base = (function figwheel$repl$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
if(cljs.core.truth_(goog.require_figwheel_backup_)){
} else {
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.require;
}
})();
}

goog.isProvided_ = (function (name){
return false;
});

if(((typeof cljs !== 'undefined') && (typeof cljs.user !== 'undefined'))){
} else {
goog.constructNamespace_("cljs.user");
}

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.repl.queued_file_reload;

return goog.require = figwheel.repl.figwheel_require;
}
});

figwheel.repl.patch_goog_base = (function figwheel$repl$patch_goog_base(){
if(typeof figwheel.repl.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.repl.bootstrapped_cljs = (function (){
figwheel.repl.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});

figwheel.repl.add_cache_buster = (function figwheel$repl$add_cache_buster(url){
return goog.Uri.parse(url).makeUnique();
});

figwheel.repl.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__57035_SHARP_,p2__57036_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__57035_SHARP_)].join('')),p2__57036_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__57037_SHARP_,p2__57038_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__57037_SHARP_)].join(''),p2__57038_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));

figwheel.repl.reload_file_in_html_env = (function figwheel$repl$reload_file_in_html_env(request_url,callback){
if(typeof request_url === 'string'){
} else {
throw (new Error("Assert failed: (string? request-url)"));
}

if(!((callback == null))){
} else {
throw (new Error("Assert failed: (not (nil? callback))"));
}

var G__57048 = figwheel.repl.gloader.call(null,figwheel.repl.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__57048.addCallback(((function (G__57048){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__57048))
);

G__57048.addErrback(((function (G__57048){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__57048))
);

return G__57048;
});

figwheel.repl.write_script_tag_import = figwheel.repl.reload_file_in_html_env;
goog.exportSymbol('figwheel.repl.write_script_tag_import', figwheel.repl.write_script_tag_import);

figwheel.repl.worker_import_script = (function figwheel$repl$worker_import_script(request_url,callback){
if(typeof request_url === 'string'){
} else {
throw (new Error("Assert failed: (string? request-url)"));
}

if(!((callback == null))){
} else {
throw (new Error("Assert failed: (not (nil? callback))"));
}

return callback.call(null,(function (){try{self.importScripts(figwheel.repl.add_cache_buster.call(null,request_url));

return true;
}catch (e57049){if((e57049 instanceof Error)){
var e = e57049;
goog.log.error(figwheel.repl.logger,["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

goog.log.error(figwheel.repl.logger,e);

return false;
} else {
throw e57049;

}
}})());
});
goog.exportSymbol('figwheel.repl.worker_import_script', figwheel.repl.worker_import_script);

figwheel.repl.create_node_script_import_fn = (function figwheel$repl$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){
if(typeof request_url === 'string'){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(!((callback == null))),"\n","(string? request-url)"].join('')));
}

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e57050){if((e57050 instanceof Error)){
var e = e57050;
goog.log.error(figwheel.repl.logger,["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

goog.log.error(figwheel.repl.logger,e);

return false;
} else {
throw e57050;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.repl.create_node_script_import_fn', figwheel.repl.create_node_script_import_fn);

figwheel.repl.host_env = ((!((goog.nodeGlobalRequire == null)))?new cljs.core.Keyword(null,"node","node",581201198):((!((goog.global.document == null)))?new cljs.core.Keyword(null,"html","html",-998796897):((((typeof goog.global.navigator !== 'undefined') && (cljs.core._EQ_.call(null,goog.global.navigator.product,"ReactNative"))))?new cljs.core.Keyword(null,"react-native","react-native",-1543085138):(((((goog.global.document == null)) && (typeof self !== 'undefined') && (typeof self.importScripts !== 'undefined')))?new cljs.core.Keyword(null,"worker","worker",938239996):null))));

figwheel.repl.reload_file_STAR_ = (function (){var pred__57051 = cljs.core._EQ_;
var expr__57052 = figwheel.repl.host_env;
if(cljs.core.truth_(pred__57051.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__57052))){
return figwheel.repl.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__57051.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__57052))){
return figwheel.repl.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__57051.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__57052))){
return figwheel.repl.worker_import_script;
} else {
return ((function (pred__57051,expr__57052){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__57051,expr__57052))
}
}
}
})();

figwheel.repl.reload_file = (function figwheel$repl$reload_file(p__57054,callback){
var map__57055 = p__57054;
var map__57055__$1 = ((((!((map__57055 == null)))?(((((map__57055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57055):map__57055);
var file_msg = map__57055__$1;
var request_url = cljs.core.get.call(null,map__57055__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
if(typeof request_url === 'string'){
} else {
throw (new Error("Assert failed: (string? request-url)"));
}

if(!((callback == null))){
} else {
throw (new Error("Assert failed: (not (nil? callback))"));
}

goog.log.fine(figwheel.repl.logger,["Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.repl.reload_file_STAR_;
}
})().call(null,request_url,((function (map__57055,map__57055__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
goog.log.fine(figwheel.repl.logger,["Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
goog.log.error(figwheel.repl.logger,["Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__57055,map__57055__$1,file_msg,request_url))
);
});

if(typeof figwheel.repl.reload_promise_chain !== 'undefined'){
} else {
figwheel.repl.reload_promise_chain = cljs.core.atom.call(null,(new goog.Promise((function (p1__57039_SHARP_){
return p1__57039_SHARP_.call(null,true);
}))));
}

figwheel.repl.queued_file_reload = (function figwheel$repl$queued_file_reload(var_args){
var G__57058 = arguments.length;
switch (G__57058) {
case 1:
return figwheel.repl.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.repl.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.repl.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.repl.queued_file_reload.call(null,url,null);
});

figwheel.repl.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
var temp__5735__auto__ = (cljs.core.truth_(opt_source_text)?(function (p1__57040_SHARP_){
return p1__57040_SHARP_.then((function (_){
return (new goog.Promise((function (r,___$1){
try{eval(opt_source_text);
}catch (e57059){if((e57059 instanceof Error)){
var e_57133 = e57059;
goog.log.error(figwheel.repl.logger,e_57133);
} else {
throw e57059;

}
}
return r.call(null,true);
})));
}));
}):(cljs.core.truth_(url)?(function (p1__57041_SHARP_){
return p1__57041_SHARP_.then((function (_){
return (new goog.Promise((function (r,___$1){
return figwheel.repl.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
return r.call(null,true);
}));
})));
}));
}):null));
if(cljs.core.truth_(temp__5735__auto__)){
var next_promise_fn = temp__5735__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.repl.reload_promise_chain,next_promise_fn);
} else {
return null;
}
});

figwheel.repl.queued_file_reload.cljs$lang$maxFixedArity = 2;


figwheel.repl.after_reloads = (function figwheel$repl$after_reloads(f){
return cljs.core.swap_BANG_.call(null,figwheel.repl.reload_promise_chain,(function (p1__57042_SHARP_){
return p1__57042_SHARP_.then(f);
}));
});
goog.exportSymbol('figwheel.repl.after_reloads', figwheel.repl.after_reloads);


/** @define {string} */
goog.define("figwheel.repl.print_output","console,repl");

figwheel.repl.print_receivers = (function figwheel$repl$print_receivers(outputs){
return cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.keyword,cljs.core.filter.call(null,cljs.core.complement.call(null,clojure.string.blank_QMARK_),cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,outputs,/,/)))));
});

if(typeof figwheel.repl.out_print !== 'undefined'){
} else {
figwheel.repl.out_print = (function (){var method_table__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.repl","out-print"),((function (method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__){
return (function (k,args){
return k;
});})(method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}

cljs.core._add_method.call(null,figwheel.repl.out_print,new cljs.core.Keyword(null,"console","console",1228072057),(function (_,args){
return console.log.apply(console,goog.array.clone(cljs.core.to_array.call(null,args)));
}));

if(typeof figwheel.repl.err_print !== 'undefined'){
} else {
figwheel.repl.err_print = (function (){var method_table__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.repl","err-print"),((function (method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__){
return (function (k,args){
return k;
});})(method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}

cljs.core._add_method.call(null,figwheel.repl.err_print,new cljs.core.Keyword(null,"console","console",1228072057),(function (_,args){
return console.error.apply(console,goog.array.clone(cljs.core.to_array.call(null,args)));
}));

figwheel.repl.setup_printing_BANG_ = (function figwheel$repl$setup_printing_BANG_(){
var printers = figwheel.repl.print_receivers.call(null,figwheel.repl.print_output);
cljs.core.set_print_fn_BANG_.call(null,((function (printers){
return (function() { 
var G__57134__delegate = function (args){
var seq__57060 = cljs.core.seq.call(null,printers);
var chunk__57061 = null;
var count__57062 = (0);
var i__57063 = (0);
while(true){
if((i__57063 < count__57062)){
var p = cljs.core._nth.call(null,chunk__57061,i__57063);
figwheel.repl.out_print.call(null,p,args);


var G__57135 = seq__57060;
var G__57136 = chunk__57061;
var G__57137 = count__57062;
var G__57138 = (i__57063 + (1));
seq__57060 = G__57135;
chunk__57061 = G__57136;
count__57062 = G__57137;
i__57063 = G__57138;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__57060);
if(temp__5735__auto__){
var seq__57060__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57060__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__57060__$1);
var G__57139 = cljs.core.chunk_rest.call(null,seq__57060__$1);
var G__57140 = c__4319__auto__;
var G__57141 = cljs.core.count.call(null,c__4319__auto__);
var G__57142 = (0);
seq__57060 = G__57139;
chunk__57061 = G__57140;
count__57062 = G__57141;
i__57063 = G__57142;
continue;
} else {
var p = cljs.core.first.call(null,seq__57060__$1);
figwheel.repl.out_print.call(null,p,args);


var G__57143 = cljs.core.next.call(null,seq__57060__$1);
var G__57144 = null;
var G__57145 = (0);
var G__57146 = (0);
seq__57060 = G__57143;
chunk__57061 = G__57144;
count__57062 = G__57145;
i__57063 = G__57146;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__57134 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57147__i = 0, G__57147__a = new Array(arguments.length -  0);
while (G__57147__i < G__57147__a.length) {G__57147__a[G__57147__i] = arguments[G__57147__i + 0]; ++G__57147__i;}
  args = new cljs.core.IndexedSeq(G__57147__a,0,null);
} 
return G__57134__delegate.call(this,args);};
G__57134.cljs$lang$maxFixedArity = 0;
G__57134.cljs$lang$applyTo = (function (arglist__57148){
var args = cljs.core.seq(arglist__57148);
return G__57134__delegate(args);
});
G__57134.cljs$core$IFn$_invoke$arity$variadic = G__57134__delegate;
return G__57134;
})()
;})(printers))
);

return cljs.core.set_print_err_fn_BANG_.call(null,((function (printers){
return (function() { 
var G__57149__delegate = function (args){
var seq__57064 = cljs.core.seq.call(null,printers);
var chunk__57065 = null;
var count__57066 = (0);
var i__57067 = (0);
while(true){
if((i__57067 < count__57066)){
var p = cljs.core._nth.call(null,chunk__57065,i__57067);
figwheel.repl.err_print.call(null,p,args);


var G__57150 = seq__57064;
var G__57151 = chunk__57065;
var G__57152 = count__57066;
var G__57153 = (i__57067 + (1));
seq__57064 = G__57150;
chunk__57065 = G__57151;
count__57066 = G__57152;
i__57067 = G__57153;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__57064);
if(temp__5735__auto__){
var seq__57064__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57064__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__57064__$1);
var G__57154 = cljs.core.chunk_rest.call(null,seq__57064__$1);
var G__57155 = c__4319__auto__;
var G__57156 = cljs.core.count.call(null,c__4319__auto__);
var G__57157 = (0);
seq__57064 = G__57154;
chunk__57065 = G__57155;
count__57066 = G__57156;
i__57067 = G__57157;
continue;
} else {
var p = cljs.core.first.call(null,seq__57064__$1);
figwheel.repl.err_print.call(null,p,args);


var G__57158 = cljs.core.next.call(null,seq__57064__$1);
var G__57159 = null;
var G__57160 = (0);
var G__57161 = (0);
seq__57064 = G__57158;
chunk__57065 = G__57159;
count__57066 = G__57160;
i__57067 = G__57161;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__57149 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57162__i = 0, G__57162__a = new Array(arguments.length -  0);
while (G__57162__i < G__57162__a.length) {G__57162__a[G__57162__i] = arguments[G__57162__i + 0]; ++G__57162__i;}
  args = new cljs.core.IndexedSeq(G__57162__a,0,null);
} 
return G__57149__delegate.call(this,args);};
G__57149.cljs$lang$maxFixedArity = 0;
G__57149.cljs$lang$applyTo = (function (arglist__57163){
var args = cljs.core.seq(arglist__57163);
return G__57149__delegate(args);
});
G__57149.cljs$core$IFn$_invoke$arity$variadic = G__57149__delegate;
return G__57149;
})()
;})(printers))
);
});


/** @define {string} */
goog.define("figwheel.repl.connect_url","ws://[[client-hostname]]:[[client-port]]/figwheel-connect");

figwheel.repl.state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);

figwheel.repl.storage = goog.storage.mechanism.mechanismfactory.createHTML5SessionStorage("figwheel.repl");

figwheel.repl.set_state = (function figwheel$repl$set_state(k,v){
cljs.core.swap_BANG_.call(null,figwheel.repl.state,cljs.core.assoc,k,v);

if(cljs.core.truth_(figwheel.repl.storage)){
return figwheel.repl.storage.set([cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),v);
} else {
return null;
}
});

figwheel.repl.get_state = (function figwheel$repl$get_state(k){
if(cljs.core.truth_(figwheel.repl.storage)){
return figwheel.repl.storage.get([cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.repl.state),k);
}
});

figwheel.repl.session_name = (function figwheel$repl$session_name(){
return figwheel.repl.get_state.call(null,new cljs.core.Keyword("figwheel.repl","session-name","figwheel.repl/session-name",2102143102));
});
goog.exportSymbol('figwheel.repl.session_name', figwheel.repl.session_name);

figwheel.repl.session_id = (function figwheel$repl$session_id(){
return figwheel.repl.get_state.call(null,new cljs.core.Keyword("figwheel.repl","session-id","figwheel.repl/session-id",594324955));
});
goog.exportSymbol('figwheel.repl.session_id', figwheel.repl.session_id);

figwheel.repl.response_for = (function figwheel$repl$response_for(p__57068,response_body){
var map__57069 = p__57068;
var map__57069__$1 = ((((!((map__57069 == null)))?(((((map__57069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57069):map__57069);
var uuid = cljs.core.get.call(null,map__57069__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var G__57071 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"session-id","session-id",-1147060351),figwheel.repl.session_id.call(null),new cljs.core.Keyword(null,"session-name","session-name",-167167576),figwheel.repl.session_name.call(null),new cljs.core.Keyword(null,"response","response",-1068424192),response_body], null);
if(cljs.core.truth_(uuid)){
return cljs.core.assoc.call(null,G__57071,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),uuid);
} else {
return G__57071;
}
});

figwheel.repl.http_post = (function (){var pred__57072 = cljs.core._EQ_;
var expr__57073 = figwheel.repl.host_env;
if(cljs.core.truth_(pred__57072.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__57073))){
var http = require("http");
return ((function (http,pred__57072,expr__57073){
return (function (url,post_data){
var data = cljs.core.volatile_BANG_.call(null,"");
var uri = goog.Uri.parse([cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join(''));
var G__57075 = http.request(({"host": uri.getDomain(), "port": uri.getPort(), "path": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri.getPath()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5735__auto__ = uri.getQuery();
if(cljs.core.truth_(temp__5735__auto__)){
var q = temp__5735__auto__;
return ["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(q)].join('');
} else {
return null;
}
})())].join(''), "method": "POST", "headers": ({"Content-Length": Buffer.byteLength(post_data)})}),((function (data,uri,http,pred__57072,expr__57073){
return (function (x){
return null;
});})(data,uri,http,pred__57072,expr__57073))
).on("error",((function (data,uri,http,pred__57072,expr__57073){
return (function (p1__57043_SHARP_){
return console.error(p1__57043_SHARP_);
});})(data,uri,http,pred__57072,expr__57073))
);
G__57075.write(post_data);

G__57075.end();

return G__57075;
});
;})(http,pred__57072,expr__57073))
} else {
return ((function (pred__57072,expr__57073){
return (function (url,response){
return goog.net.XhrIo.send(url,((function (pred__57072,expr__57073){
return (function (e){
return figwheel.repl.debug.call(null,"Response Posted");
});})(pred__57072,expr__57073))
,"POST",response);
});
;})(pred__57072,expr__57073))
}
})();

figwheel.repl.respond_to = (function figwheel$repl$respond_to(p__57076,response_body){
var map__57077 = p__57076;
var map__57077__$1 = ((((!((map__57077 == null)))?(((((map__57077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57077):map__57077);
var old_msg = map__57077__$1;
var websocket = cljs.core.get.call(null,map__57077__$1,new cljs.core.Keyword(null,"websocket","websocket",-1714963101));
var http_url = cljs.core.get.call(null,map__57077__$1,new cljs.core.Keyword(null,"http-url","http-url",-2043776269));
var response = figwheel.repl.response_for.call(null,old_msg,response_body);
if(cljs.core.truth_(websocket)){
return websocket.send(cljs.core.pr_str.call(null,response));
} else {
if(cljs.core.truth_(http_url)){
return figwheel.repl.http_post.call(null,http_url,cljs.core.pr_str.call(null,response));
} else {
return null;
}
}
});

figwheel.repl.respond_to_connection = (function figwheel$repl$respond_to_connection(response_body){
return figwheel.repl.respond_to.call(null,new cljs.core.Keyword(null,"connection","connection",-123599300).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.repl.state)),response_body);
});

if(typeof figwheel.repl.message !== 'undefined'){
} else {
figwheel.repl.message = (function (){var method_table__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.repl","message"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}

cljs.core._add_method.call(null,figwheel.repl.message,"naming",(function (msg){
var temp__5735__auto___57164 = new cljs.core.Keyword(null,"session-name","session-name",-167167576).cljs$core$IFn$_invoke$arity$1(msg);
if(cljs.core.truth_(temp__5735__auto___57164)){
var sn_57165 = temp__5735__auto___57164;
figwheel.repl.set_state.call(null,new cljs.core.Keyword("figwheel.repl","session-name","figwheel.repl/session-name",2102143102),sn_57165);
} else {
}

var temp__5735__auto___57166 = new cljs.core.Keyword(null,"session-id","session-id",-1147060351).cljs$core$IFn$_invoke$arity$1(msg);
if(cljs.core.truth_(temp__5735__auto___57166)){
var sid_57167 = temp__5735__auto___57166;
figwheel.repl.set_state.call(null,new cljs.core.Keyword("figwheel.repl","session-id","figwheel.repl/session-id",594324955),sid_57167);
} else {
}

goog.log.info(figwheel.repl.logger,["Session ID: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.repl.session_id.call(null))].join(''));

return goog.log.info(figwheel.repl.logger,["Session Name: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.repl.session_name.call(null))].join(''));
}));

cljs.core._add_method.call(null,figwheel.repl.message,"ping",(function (msg){
return figwheel.repl.respond_to.call(null,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pong","pong",-172484958),true], null));
}));

figwheel.repl.get_ua_product = (function figwheel$repl$get_ua_product(){
if(!((goog.nodeGlobalRequire == null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});

var print_to_console_QMARK__57168 = figwheel.repl.print_receivers.call(null,figwheel.repl.print_output).call(null,new cljs.core.Keyword(null,"console","console",1228072057));
figwheel.repl.eval_javascript_STAR__STAR_ = ((function (print_to_console_QMARK__57168){
return (function figwheel$repl$eval_javascript_STAR__STAR_(code){
var ua_product = figwheel.repl.get_ua_product.call(null);
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_57080 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_57081 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_57080,_STAR_print_fn_STAR_57081,sb,ua_product,print_to_console_QMARK__57168){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_57080,_STAR_print_fn_STAR_57081,sb,ua_product,print_to_console_QMARK__57168))
;

try{var result_value = eval(code);
var result_value__$1 = ((!(typeof result_value === 'string'))?(function (){try{return cljs.core.pr_str.call(null,result_value);
}catch (e57082){if((e57082 instanceof Error)){
var e = e57082;
return null;
} else {
throw e57082;

}
}})():result_value);
var output_str = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
if(cljs.core.truth_((function (){var and__3911__auto__ = print_to_console_QMARK__57168;
if(cljs.core.truth_(and__3911__auto__)){
return !((sb.getLength() === (0)));
} else {
return and__3911__auto__;
}
})())){
setTimeout(((function (result_value,result_value__$1,output_str,_STAR_print_newline_STAR_57080,_STAR_print_fn_STAR_57081,sb,ua_product,print_to_console_QMARK__57168){
return (function (){
return figwheel.repl.out_print.call(null,new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [output_str], null));
});})(result_value,result_value__$1,output_str,_STAR_print_newline_STAR_57080,_STAR_print_fn_STAR_57081,sb,ua_product,print_to_console_QMARK__57168))
,(0));
} else {
}

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),output_str,new cljs.core.Keyword(null,"ua-product","ua-product",938384227),ua_product,new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_57081;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_57080;
}}catch (e57079){if((e57079 instanceof Error)){
var e = e57079;
if(((typeof console !== 'undefined') && (typeof console.error !== 'undefined'))){
console.error("REPL eval error",e);
} else {
}

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),ua_product,new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),e.stack], null);
} else {
var e = e57079;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),ua_product,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null);

}
}});})(print_to_console_QMARK__57168))
;

cljs.core._add_method.call(null,figwheel.repl.message,"eval",(function (p__57083){
var map__57084 = p__57083;
var map__57084__$1 = ((((!((map__57084 == null)))?(((((map__57084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57084):map__57084);
var msg = map__57084__$1;
var code = cljs.core.get.call(null,map__57084__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var result = figwheel.repl.eval_javascript_STAR__STAR_.call(null,code);
return figwheel.repl.respond_to.call(null,msg,result);
}));

cljs.core._add_method.call(null,figwheel.repl.message,"messages",(function (p__57086){
var map__57087 = p__57086;
var map__57087__$1 = ((((!((map__57087 == null)))?(((((map__57087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57087):map__57087);
var messages = cljs.core.get.call(null,map__57087__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var http_url = cljs.core.get.call(null,map__57087__$1,new cljs.core.Keyword(null,"http-url","http-url",-2043776269));
var seq__57089 = cljs.core.seq.call(null,messages);
var chunk__57090 = null;
var count__57091 = (0);
var i__57092 = (0);
while(true){
if((i__57092 < count__57091)){
var msg = cljs.core._nth.call(null,chunk__57090,i__57092);
figwheel.repl.message.call(null,(function (){var G__57093 = cljs.core.js__GT_clj.call(null,msg,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
if(cljs.core.truth_(http_url)){
return cljs.core.assoc.call(null,G__57093,new cljs.core.Keyword(null,"http-url","http-url",-2043776269),http_url);
} else {
return G__57093;
}
})());


var G__57169 = seq__57089;
var G__57170 = chunk__57090;
var G__57171 = count__57091;
var G__57172 = (i__57092 + (1));
seq__57089 = G__57169;
chunk__57090 = G__57170;
count__57091 = G__57171;
i__57092 = G__57172;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__57089);
if(temp__5735__auto__){
var seq__57089__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57089__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__57089__$1);
var G__57173 = cljs.core.chunk_rest.call(null,seq__57089__$1);
var G__57174 = c__4319__auto__;
var G__57175 = cljs.core.count.call(null,c__4319__auto__);
var G__57176 = (0);
seq__57089 = G__57173;
chunk__57090 = G__57174;
count__57091 = G__57175;
i__57092 = G__57176;
continue;
} else {
var msg = cljs.core.first.call(null,seq__57089__$1);
figwheel.repl.message.call(null,(function (){var G__57094 = cljs.core.js__GT_clj.call(null,msg,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
if(cljs.core.truth_(http_url)){
return cljs.core.assoc.call(null,G__57094,new cljs.core.Keyword(null,"http-url","http-url",-2043776269),http_url);
} else {
return G__57094;
}
})());


var G__57177 = cljs.core.next.call(null,seq__57089__$1);
var G__57178 = null;
var G__57179 = (0);
var G__57180 = (0);
seq__57089 = G__57177;
chunk__57090 = G__57178;
count__57091 = G__57179;
i__57092 = G__57180;
continue;
}
} else {
return null;
}
}
break;
}
}));

figwheel.repl.fill_url_template = (function figwheel$repl$fill_url_template(connect_url_SINGLEQUOTE_){
if(cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"html","html",-998796897))){
return clojure.string.replace.call(null,clojure.string.replace.call(null,connect_url_SINGLEQUOTE_,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
} else {
return connect_url_SINGLEQUOTE_;
}
});

figwheel.repl.make_url = (function figwheel$repl$make_url(connect_url_SINGLEQUOTE_){
var uri = goog.Uri.parse(figwheel.repl.fill_url_template.call(null,(function (){var or__3922__auto__ = connect_url_SINGLEQUOTE_;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.repl.connect_url;
}
})()));
var G__57095_57181 = uri.getQueryData().add("fwsid",(function (){var or__3922__auto__ = figwheel.repl.session_id.call(null);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.random_uuid.call(null);
}
})());
if(cljs.core.truth_(figwheel.repl.session_name.call(null))){
G__57095_57181.add("fwsname",figwheel.repl.session_name.call(null));
} else {
}

return uri;
});

figwheel.repl.exponential_backoff = (function figwheel$repl$exponential_backoff(attempt){
return ((1000) * (function (){var x__4009__auto__ = Math.pow((2),attempt);
var y__4010__auto__ = (20);
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})());
});

figwheel.repl.hook_repl_printing_output_BANG_ = (function figwheel$repl$hook_repl_printing_output_BANG_(respond_msg){
cljs.core._add_method.call(null,figwheel.repl.out_print,new cljs.core.Keyword(null,"repl","repl",-35398667),(function (_,args){
return figwheel.repl.respond_to.call(null,respond_msg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"output","output",-1105869043),true,new cljs.core.Keyword(null,"stream","stream",1534941648),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__57044_SHARP_){
if(typeof p1__57044_SHARP_ === 'string'){
return p1__57044_SHARP_;
} else {
return goog.json.serialize(p1__57044_SHARP_);
}
}),args)], null));
}));

cljs.core._add_method.call(null,figwheel.repl.err_print,new cljs.core.Keyword(null,"repl","repl",-35398667),(function (_,args){
return figwheel.repl.respond_to.call(null,respond_msg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"output","output",-1105869043),true,new cljs.core.Keyword(null,"stream","stream",1534941648),new cljs.core.Keyword(null,"err","err",-2089457205),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__57045_SHARP_){
if(typeof p1__57045_SHARP_ === 'string'){
return p1__57045_SHARP_;
} else {
return goog.json.serialize(p1__57045_SHARP_);
}
}),args)], null));
}));

return figwheel.repl.setup_printing_BANG_.call(null);
});

figwheel.repl.connection_established_BANG_ = (function figwheel$repl$connection_established_BANG_(url){
if(cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"html","html",-998796897))){
var target = goog.global.document.body;
return target.dispatchEvent((function (){var G__57096 = (new Event("figwheel.repl.connected",target));
goog.object.add(G__57096,"data",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),url], null));

return G__57096;
})());
} else {
return null;
}
});

figwheel.repl.connection_closed_BANG_ = (function figwheel$repl$connection_closed_BANG_(url){
if(cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"html","html",-998796897))){
var target = goog.global.document.body;
return target.dispatchEvent((function (){var G__57097 = (new Event("figwheel.repl.disconnected",target));
goog.object.add(G__57097,"data",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),url], null));

return G__57097;
})());
} else {
return null;
}
});

figwheel.repl.get_websocket_class = (function figwheel$repl$get_websocket_class(){
var or__3922__auto__ = goog.object.get(goog.global,"WebSocket");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.object.get(goog.global,"FIGWHEEL_WEBSOCKET_CLASS");
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = (function (){var and__3911__auto__ = cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"node","node",581201198));
if(and__3911__auto__){
try{return require("ws");
}catch (e57101){if((e57101 instanceof Error)){
var e = e57101;
return null;
} else {
throw e57101;

}
}} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
var and__3911__auto__ = cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"worker","worker",938239996));
if(and__3911__auto__){
return goog.object.get(self,"WebSocket");
} else {
return and__3911__auto__;
}
}
}
}
});

figwheel.repl.ensure_websocket = (function figwheel$repl$ensure_websocket(thunk){
if(cljs.core.truth_(goog.object.get(goog.global,"WebSocket"))){
return thunk.call(null);
} else {
var temp__5733__auto__ = figwheel.repl.get_websocket_class.call(null);
if(cljs.core.truth_(temp__5733__auto__)){
var websocket_class = temp__5733__auto__;
goog.object.set(goog.global,"WebSocket",websocket_class);

thunk.call(null);

return goog.object.set(goog.global,"WebSocket",null);
} else {
return goog.log.error(figwheel.repl.logger,((cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"node","node",581201198)))?"Can't connect!! Please make sure ws is installed\n do -> 'npm install ws'":"Can't connect!! This client doesn't support WebSockets"));
}
}
});

figwheel.repl.ws_connect = (function figwheel$repl$ws_connect(var_args){
var args__4502__auto__ = [];
var len__4499__auto___57182 = arguments.length;
var i__4500__auto___57183 = (0);
while(true){
if((i__4500__auto___57183 < len__4499__auto___57182)){
args__4502__auto__.push((arguments[i__4500__auto___57183]));

var G__57184 = (i__4500__auto___57183 + (1));
i__4500__auto___57183 = G__57184;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.repl.ws_connect.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.repl.ws_connect.cljs$core$IFn$_invoke$arity$variadic = (function (p__57103){
var vec__57104 = p__57103;
var websocket_url_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__57104,(0),null);
return figwheel.repl.ensure_websocket.call(null,((function (vec__57104,websocket_url_SINGLEQUOTE_){
return (function (){
var websocket = (new goog.net.WebSocket());
var url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.repl.make_url.call(null,websocket_url_SINGLEQUOTE_))].join('');
var G__57107 = websocket;
G__57107.addEventListener(goog.net.WebSocket.EventType.MESSAGE,((function (G__57107,websocket,url,vec__57104,websocket_url_SINGLEQUOTE_){
return (function (e){
var temp__5735__auto__ = goog.object.get(e,"message");
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
try{figwheel.repl.debug.call(null,msg);

return figwheel.repl.message.call(null,cljs.core.assoc.call(null,cljs.core.js__GT_clj.call(null,JSON.parse(msg),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true),new cljs.core.Keyword(null,"websocket","websocket",-1714963101),websocket));
}catch (e57108){if((e57108 instanceof Error)){
var e__$1 = e57108;
return goog.log.error(figwheel.repl.logger,e__$1);
} else {
throw e57108;

}
}} else {
return null;
}
});})(G__57107,websocket,url,vec__57104,websocket_url_SINGLEQUOTE_))
);

G__57107.addEventListener(goog.net.WebSocket.EventType.OPENED,((function (G__57107,websocket,url,vec__57104,websocket_url_SINGLEQUOTE_){
return (function (e){
figwheel.repl.connection_established_BANG_.call(null,url);

cljs.core.swap_BANG_.call(null,figwheel.repl.state,cljs.core.assoc,new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),websocket], null));

return figwheel.repl.hook_repl_printing_output_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),websocket], null));
});})(G__57107,websocket,url,vec__57104,websocket_url_SINGLEQUOTE_))
);

G__57107.addEventListener(goog.net.WebSocket.EventType.CLOSED,((function (G__57107,websocket,url,vec__57104,websocket_url_SINGLEQUOTE_){
return (function (e){
return figwheel.repl.connection_closed_BANG_.call(null,url);
});})(G__57107,websocket,url,vec__57104,websocket_url_SINGLEQUOTE_))
);

G__57107.open(url);

return G__57107;
});})(vec__57104,websocket_url_SINGLEQUOTE_))
);
});

figwheel.repl.ws_connect.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.repl.ws_connect.cljs$lang$applyTo = (function (seq57102){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57102));
});


figwheel.repl.http_get = (function (){var pred__57109 = cljs.core._EQ_;
var expr__57110 = figwheel.repl.host_env;
if(cljs.core.truth_(pred__57109.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__57110))){
var http = require("http");
return ((function (http,pred__57109,expr__57110){
return (function (url){
return (new goog.Promise(((function (http,pred__57109,expr__57110){
return (function (succ,err){
var data = cljs.core.volatile_BANG_.call(null,"");
return http.get([cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join(''),((function (data,http,pred__57109,expr__57110){
return (function (response){
response.on("data",((function (data,http,pred__57109,expr__57110){
return (function (chunk){
return cljs.core._vreset_BANG_.call(null,data,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._deref.call(null,data)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chunk)].join(''));
});})(data,http,pred__57109,expr__57110))
);

return response.on("end",((function (data,http,pred__57109,expr__57110){
return (function (){
return succ.call(null,(function (){try{return JSON.parse(cljs.core.deref.call(null,data));
}catch (e57112){if((e57112 instanceof Error)){
var e = e57112;
console.error(e);

return err.call(null,e);
} else {
throw e57112;

}
}})());
});})(data,http,pred__57109,expr__57110))
);
});})(data,http,pred__57109,expr__57110))
).on("error",err);
});})(http,pred__57109,expr__57110))
));
});
;})(http,pred__57109,expr__57110))
} else {
return ((function (pred__57109,expr__57110){
return (function (url){
return (new goog.Promise(((function (pred__57109,expr__57110){
return (function (succ,err){
return goog.net.XhrIo.send(url,((function (pred__57109,expr__57110){
return (function (e){
var xhr = goog.object.get(e,"target");
if(cljs.core.truth_(xhr.isSuccess())){
return succ.call(null,xhr.getResponseJson());
} else {
return err.call(null,xhr);
}
});})(pred__57109,expr__57110))
);
});})(pred__57109,expr__57110))
));
});
;})(pred__57109,expr__57110))
}
})();



figwheel.repl.poll = (function figwheel$repl$poll(msg_fn,connect_url_SINGLEQUOTE_){
return figwheel.repl.http_get.call(null,figwheel.repl.make_url.call(null,connect_url_SINGLEQUOTE_)).then((function (msg){
msg_fn.call(null,msg);

return setTimeout((function (){
return figwheel.repl.poll.call(null,msg_fn,connect_url_SINGLEQUOTE_);
}),(500));
}),(function (e){
figwheel.repl.connection_closed_BANG_.call(null,connect_url_SINGLEQUOTE_);

return figwheel.repl.http_connect.call(null,connect_url_SINGLEQUOTE_);
}));
});

figwheel.repl.long_poll = (function figwheel$repl$long_poll(msg_fn,connect_url_SINGLEQUOTE_){
return figwheel.repl.http_get.call(null,figwheel.repl.make_url.call(null,connect_url_SINGLEQUOTE_)).then((function (msg){
msg_fn.call(null,msg);

return figwheel.repl.long_poll.call(null,msg_fn,connect_url_SINGLEQUOTE_);
}),(function (e){
figwheel.repl.connection_closed_BANG_.call(null,connect_url_SINGLEQUOTE_);

return figwheel.repl.http_connect.call(null,connect_url_SINGLEQUOTE_);
}));
});

figwheel.repl.http_connect_STAR_ = (function figwheel$repl$http_connect_STAR_(attempt,connect_url_SINGLEQUOTE_){
var url = figwheel.repl.make_url.call(null,connect_url_SINGLEQUOTE_);
var surl = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
var msg_fn = ((function (url,surl){
return (function (msg){
try{figwheel.repl.debug.call(null,cljs.core.pr_str.call(null,msg));

return figwheel.repl.message.call(null,cljs.core.assoc.call(null,cljs.core.js__GT_clj.call(null,msg,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true),new cljs.core.Keyword(null,"http-url","http-url",-2043776269),surl));
}catch (e57113){if((e57113 instanceof Error)){
var e = e57113;
return goog.log.error(figwheel.repl.logger,e);
} else {
throw e57113;

}
}});})(url,surl))
;
var G__57114_57185 = url.getQueryData();
G__57114_57185.add("fwinit","true");


return figwheel.repl.http_get.call(null,url).then(((function (url,surl,msg_fn){
return (function (msg){
var typ = goog.object.get(msg,"connection-type");
goog.log.info(figwheel.repl.logger,["Connected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(typ)].join(''));

msg_fn.call(null,msg);

figwheel.repl.connection_established_BANG_.call(null,url);

cljs.core.swap_BANG_.call(null,figwheel.repl.state,cljs.core.assoc,new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-url","http-url",-2043776269),surl], null));

figwheel.repl.hook_repl_printing_output_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-url","http-url",-2043776269),surl], null));

if(cljs.core._EQ_.call(null,typ,"http-long-polling")){
return figwheel.repl.long_poll.call(null,msg_fn,connect_url_SINGLEQUOTE_);
} else {
return figwheel.repl.poll.call(null,msg_fn,connect_url_SINGLEQUOTE_);
}
});})(url,surl,msg_fn))
,((function (url,surl,msg_fn){
return (function (e){
if((e instanceof Error)){
goog.log.error(figwheel.repl.logger,e);
} else {
}

if(cljs.core.truth_((function (){var and__3911__auto__ = (e instanceof goog.net.XhrIo);
if(and__3911__auto__){
return e.getResponseBody();
} else {
return and__3911__auto__;
}
})())){
figwheel.repl.debug.call(null,e.getResponseBody());
} else {
}

var wait_time = figwheel.repl.exponential_backoff.call(null,attempt);
goog.log.info(figwheel.repl.logger,["HTTP Connection Error: next connection attempt in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((wait_time / (1000)))," seconds"].join(''));

return setTimeout(((function (wait_time,url,surl,msg_fn){
return (function (){
return figwheel.repl.http_connect_STAR_.call(null,(attempt + (1)),connect_url_SINGLEQUOTE_);
});})(wait_time,url,surl,msg_fn))
,wait_time);
});})(url,surl,msg_fn))
);
});

figwheel.repl.http_connect = (function figwheel$repl$http_connect(var_args){
var args__4502__auto__ = [];
var len__4499__auto___57186 = arguments.length;
var i__4500__auto___57187 = (0);
while(true){
if((i__4500__auto___57187 < len__4499__auto___57186)){
args__4502__auto__.push((arguments[i__4500__auto___57187]));

var G__57188 = (i__4500__auto___57187 + (1));
i__4500__auto___57187 = G__57188;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.repl.http_connect.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.repl.http_connect.cljs$core$IFn$_invoke$arity$variadic = (function (p__57116){
var vec__57117 = p__57116;
var connect_url_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__57117,(0),null);
return figwheel.repl.http_connect_STAR_.call(null,(0),connect_url_SINGLEQUOTE_);
});

figwheel.repl.http_connect.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.repl.http_connect.cljs$lang$applyTo = (function (seq57115){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57115));
});


figwheel.repl.switch_to_http_QMARK_ = (function figwheel$repl$switch_to_http_QMARK_(url){
if(cljs.core.truth_((function (){var or__3922__auto__ = goog.string.startsWith(url,"http");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.repl.get_websocket_class.call(null);
}
})())){
return url;
} else {
goog.log.warning(figwheel.repl.logger,["No WebSocket implementation found! Falling back to http-long-polling",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"node","node",581201198)))?":\n For a more efficient connection ensure that \"ws\" is installed :: do -> 'npm install ws'":null))].join(''));

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.Uri.parse(url).setScheme("http"))].join('');
}
});


/** @define {string} */
goog.define("figwheel.repl.client_log_level","info");

figwheel.repl.log_levels = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,clojure.string.lower_case,(function (p1__57046_SHARP_){
return goog.object.get(goog.debug.Logger.Level,p1__57046_SHARP_);
})),cljs.core.map.call(null,cljs.core.str,cljs.core.list(new cljs.core.Symbol(null,"SEVERE","SEVERE",2038088045,null),new cljs.core.Symbol(null,"WARNING","WARNING",1233939303,null),new cljs.core.Symbol(null,"INFO","INFO",578874437,null),new cljs.core.Symbol(null,"CONFIG","CONFIG",1613043737,null),new cljs.core.Symbol(null,"FINE","FINE",1120074650,null),new cljs.core.Symbol(null,"FINER","FINER",1219697631,null),new cljs.core.Symbol(null,"FINEST","FINEST",-1116440228,null)))));

figwheel.repl.set_log_level = (function figwheel$repl$set_log_level(logger_SINGLEQUOTE_,level){
var temp__5733__auto__ = cljs.core.get.call(null,figwheel.repl.log_levels,level);
if(cljs.core.truth_(temp__5733__auto__)){
var lvl = temp__5733__auto__;
logger_SINGLEQUOTE_.setLevel(lvl);

return figwheel.repl.debug.call(null,["setting log level to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(level)].join(''));
} else {
return goog.log.warn(["Log level ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,level))," doesn't exist must be one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list("severe","warning","info","config","fine","finer","finest")))].join(''));
}
});

figwheel.repl.init_log_level_BANG_ = (function figwheel$repl$init_log_level_BANG_(){
var seq__57120 = cljs.core.seq.call(null,(function (){var G__57124 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [figwheel.repl.logger], null);
if(typeof figwheel.core !== 'undefined'){
return cljs.core.conj.call(null,G__57124,figwheel.core.logger);
} else {
return G__57124;
}
})());
var chunk__57121 = null;
var count__57122 = (0);
var i__57123 = (0);
while(true){
if((i__57123 < count__57122)){
var logger_SINGLEQUOTE_ = cljs.core._nth.call(null,chunk__57121,i__57123);
figwheel.repl.set_log_level.call(null,logger_SINGLEQUOTE_,figwheel.repl.client_log_level);


var G__57189 = seq__57120;
var G__57190 = chunk__57121;
var G__57191 = count__57122;
var G__57192 = (i__57123 + (1));
seq__57120 = G__57189;
chunk__57121 = G__57190;
count__57122 = G__57191;
i__57123 = G__57192;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__57120);
if(temp__5735__auto__){
var seq__57120__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57120__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__57120__$1);
var G__57193 = cljs.core.chunk_rest.call(null,seq__57120__$1);
var G__57194 = c__4319__auto__;
var G__57195 = cljs.core.count.call(null,c__4319__auto__);
var G__57196 = (0);
seq__57120 = G__57193;
chunk__57121 = G__57194;
count__57122 = G__57195;
i__57123 = G__57196;
continue;
} else {
var logger_SINGLEQUOTE_ = cljs.core.first.call(null,seq__57120__$1);
figwheel.repl.set_log_level.call(null,logger_SINGLEQUOTE_,figwheel.repl.client_log_level);


var G__57197 = cljs.core.next.call(null,seq__57120__$1);
var G__57198 = null;
var G__57199 = (0);
var G__57200 = (0);
seq__57120 = G__57197;
chunk__57121 = G__57198;
count__57122 = G__57199;
i__57123 = G__57200;
continue;
}
} else {
return null;
}
}
break;
}
});

figwheel.repl.connect_STAR_ = (function figwheel$repl$connect_STAR_(connect_url_SINGLEQUOTE_){
figwheel.repl.init_log_level_BANG_.call(null);

figwheel.repl.patch_goog_base.call(null);

var url = figwheel.repl.switch_to_http_QMARK_.call(null,clojure.string.trim.call(null,(function (){var or__3922__auto__ = connect_url_SINGLEQUOTE_;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.repl.connect_url;
}
})()));
if(cljs.core.truth_(goog.string.startsWith(url,"ws"))){
return figwheel.repl.ws_connect.call(null,url);
} else {
if(cljs.core.truth_(goog.string.startsWith(url,"http"))){
return figwheel.repl.http_connect.call(null,url);
} else {
return null;
}
}
});

figwheel.repl.connect = (function figwheel$repl$connect(var_args){
var args__4502__auto__ = [];
var len__4499__auto___57201 = arguments.length;
var i__4500__auto___57202 = (0);
while(true){
if((i__4500__auto___57202 < len__4499__auto___57201)){
args__4502__auto__.push((arguments[i__4500__auto___57202]));

var G__57203 = (i__4500__auto___57202 + (1));
i__4500__auto___57202 = G__57203;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.repl.connect.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.repl.connect.cljs$core$IFn$_invoke$arity$variadic = (function (p__57126){
var vec__57127 = p__57126;
var connect_url_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__57127,(0),null);
if(typeof figwheel.repl.connected !== 'undefined'){
return null;
} else {
return (
figwheel.repl.connected = (function (){
figwheel.repl.connect_STAR_.call(null,connect_url_SINGLEQUOTE_);

return true;
})()
)
;
}
});

figwheel.repl.connect.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.repl.connect.cljs$lang$applyTo = (function (seq57125){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57125));
});


//# sourceMappingURL=repl.js.map