// Compiled by ClojureScript 1.10.238 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.call(null,(function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.call(null,headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((typeof goog.global.XMLHttpRequest !== 'undefined')?goog.global.XMLHttpRequest:((typeof require !== 'undefined')?(function (){var req = require;
return req.call(null,"xmlhttprequest").XMLHttpRequest;
})():null));
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__53528,handler){
var map__53529 = p__53528;
var map__53529__$1 = ((((!((map__53529 == null)))?(((((map__53529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53529):map__53529);
var uri = cljs.core.get.call(null,map__53529__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__53529__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__53529__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__53529__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__53529__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__53529__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__53529__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__53529,map__53529__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__53527_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__53527_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__53529,map__53529__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5735__auto___53541 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___53541)){
var response_type_53542 = temp__5735__auto___53541;
this$__$1.responseType = cljs.core.name.call(null,response_type_53542);
} else {
}

var seq__53531_53543 = cljs.core.seq.call(null,headers);
var chunk__53532_53544 = null;
var count__53533_53545 = (0);
var i__53534_53546 = (0);
while(true){
if((i__53534_53546 < count__53533_53545)){
var vec__53535_53547 = cljs.core._nth.call(null,chunk__53532_53544,i__53534_53546);
var k_53548 = cljs.core.nth.call(null,vec__53535_53547,(0),null);
var v_53549 = cljs.core.nth.call(null,vec__53535_53547,(1),null);
this$__$1.setRequestHeader(k_53548,v_53549);


var G__53550 = seq__53531_53543;
var G__53551 = chunk__53532_53544;
var G__53552 = count__53533_53545;
var G__53553 = (i__53534_53546 + (1));
seq__53531_53543 = G__53550;
chunk__53532_53544 = G__53551;
count__53533_53545 = G__53552;
i__53534_53546 = G__53553;
continue;
} else {
var temp__5735__auto___53554 = cljs.core.seq.call(null,seq__53531_53543);
if(temp__5735__auto___53554){
var seq__53531_53555__$1 = temp__5735__auto___53554;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53531_53555__$1)){
var c__4319__auto___53556 = cljs.core.chunk_first.call(null,seq__53531_53555__$1);
var G__53557 = cljs.core.chunk_rest.call(null,seq__53531_53555__$1);
var G__53558 = c__4319__auto___53556;
var G__53559 = cljs.core.count.call(null,c__4319__auto___53556);
var G__53560 = (0);
seq__53531_53543 = G__53557;
chunk__53532_53544 = G__53558;
count__53533_53545 = G__53559;
i__53534_53546 = G__53560;
continue;
} else {
var vec__53538_53561 = cljs.core.first.call(null,seq__53531_53555__$1);
var k_53562 = cljs.core.nth.call(null,vec__53538_53561,(0),null);
var v_53563 = cljs.core.nth.call(null,vec__53538_53561,(1),null);
this$__$1.setRequestHeader(k_53562,v_53563);


var G__53564 = cljs.core.next.call(null,seq__53531_53555__$1);
var G__53565 = null;
var G__53566 = (0);
var G__53567 = (0);
seq__53531_53543 = G__53564;
chunk__53532_53544 = G__53565;
count__53533_53545 = G__53566;
i__53534_53546 = G__53567;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__3922__auto__ = body;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers.call(null,this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map
