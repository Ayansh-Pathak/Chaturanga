const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/PlayHub-DaF_IJxU.js","assets/ChessBoard-B9mSRdfS.js","assets/ChessPiece-Cn4hB_lt.js","assets/GameReviewModal-B1uFzZx2.js","assets/apiBase-gSRPCcAp.js","assets/circle-check-Du_mlaJI.js","assets/rotate-ccw-BjnX7-q4.js","assets/zap-6lZ6ZznF.js","assets/sparkles-BwjxYWnX.js","assets/circle-question-mark-vlcezwty.js","assets/PuzzleTrainer-D3cKpTTH.js","assets/search-BP9sSSfy.js","assets/layers-Ckmwgmr_.js","assets/circle-check-big-BhNiQuqv.js","assets/TournamentHub-DSrWWL-B.js","assets/TournamentMedal-C6rghthq.js","assets/circle-alert-DNbGIV6f.js","assets/circle-plus-noB70EWF.js","assets/user-plus-Dwek6vj1.js","assets/ClubsAndTeamsHub-Cee_WplS.js","assets/camera-ShLZnQ0g.js","assets/send-CG2yrimb.js","assets/FeedbackPage-DEqYBWyW.js","assets/ProfilePage-CSa6f_43.js","assets/PlayerChat-BwxI1c06.js","assets/GeminiChatbot-Cq76AfSx.js","assets/loader-circle-CJUJjsYr.js","assets/LibraryPage-DQCTyp3L.js"])))=>i.map(i=>d[i]);
function V2(n,e){for(var t=0;t<e.length;t++){const s=e[t];if(typeof s!="string"&&!Array.isArray(s)){for(const a in s)if(a!=="default"&&!(a in n)){const l=Object.getOwnPropertyDescriptor(s,a);l&&Object.defineProperty(n,a,l.get?l:{enumerable:!0,get:()=>s[a]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function U2(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var vg={exports:{}},$u={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X1;function B2(){if(X1)return $u;X1=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var f in a)f!=="key"&&(l[f]=a[f])}else l=a;return a=l.ref,{$$typeof:n,type:s,key:c,ref:a!==void 0?a:null,props:l}}return $u.Fragment=e,$u.jsx=t,$u.jsxs=t,$u}var Z1;function z2(){return Z1||(Z1=1,vg.exports=B2()),vg.exports}var I=z2(),Eg={exports:{}},Me={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J1;function j2(){if(J1)return Me;J1=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),w=Symbol.iterator;function R(b){return b===null||typeof b!="object"?null:(b=w&&b[w]||b["@@iterator"],typeof b=="function"?b:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,B={};function se(b,M,H){this.props=b,this.context=M,this.refs=B,this.updater=H||L}se.prototype.isReactComponent={},se.prototype.setState=function(b,M){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,M,"setState")},se.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function oe(){}oe.prototype=se.prototype;function le(b,M,H){this.props=b,this.context=M,this.refs=B,this.updater=H||L}var _e=le.prototype=new oe;_e.constructor=le,F(_e,se.prototype),_e.isPureReactComponent=!0;var Le=Array.isArray;function Ee(){}var D={H:null,A:null,T:null,S:null},C=Object.prototype.hasOwnProperty;function N(b,M,H){var z=H.ref;return{$$typeof:n,type:b,key:M,ref:z!==void 0?z:null,props:H}}function O(b,M){return N(b.type,M,b.props)}function U(b){return typeof b=="object"&&b!==null&&b.$$typeof===n}function j(b){var M={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(H){return M[H]})}var x=/\/+/g;function ht(b,M){return typeof b=="object"&&b!==null&&b.key!=null?j(""+b.key):M.toString(36)}function xe(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(Ee,Ee):(b.status="pending",b.then(function(M){b.status==="pending"&&(b.status="fulfilled",b.value=M)},function(M){b.status==="pending"&&(b.status="rejected",b.reason=M)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function Z(b,M,H,z,ee){var de=typeof b;(de==="undefined"||de==="boolean")&&(b=null);var he=!1;if(b===null)he=!0;else switch(de){case"bigint":case"string":case"number":he=!0;break;case"object":switch(b.$$typeof){case n:case e:he=!0;break;case v:return he=b._init,Z(he(b._payload),M,H,z,ee)}}if(he)return ee=ee(b),he=z===""?"."+ht(b,0):z,Le(ee)?(H="",he!=null&&(H=he.replace(x,"$&/")+"/"),Z(ee,M,H,"",function(Ze){return Ze})):ee!=null&&(U(ee)&&(ee=O(ee,H+(ee.key==null||b&&b.key===ee.key?"":(""+ee.key).replace(x,"$&/")+"/")+he)),M.push(ee)),1;he=0;var we=z===""?".":z+":";if(Le(b))for(var Ae=0;Ae<b.length;Ae++)z=b[Ae],de=we+ht(z,Ae),he+=Z(z,M,H,de,ee);else if(Ae=R(b),typeof Ae=="function")for(b=Ae.call(b),Ae=0;!(z=b.next()).done;)z=z.value,de=we+ht(z,Ae++),he+=Z(z,M,H,de,ee);else if(de==="object"){if(typeof b.then=="function")return Z(xe(b),M,H,z,ee);throw M=String(b),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.")}return he}function ue(b,M,H){if(b==null)return b;var z=[],ee=0;return Z(b,z,"","",function(de){return M.call(H,de,ee++)}),z}function X(b){if(b._status===-1){var M=b._result;M=M(),M.then(function(H){(b._status===0||b._status===-1)&&(b._status=1,b._result=H)},function(H){(b._status===0||b._status===-1)&&(b._status=2,b._result=H)}),b._status===-1&&(b._status=0,b._result=M)}if(b._status===1)return b._result.default;throw b._result}var ae=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var M=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(M))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)},P={map:ue,forEach:function(b,M,H){ue(b,function(){M.apply(this,arguments)},H)},count:function(b){var M=0;return ue(b,function(){M++}),M},toArray:function(b){return ue(b,function(M){return M})||[]},only:function(b){if(!U(b))throw Error("React.Children.only expected to receive a single React element child.");return b}};return Me.Activity=T,Me.Children=P,Me.Component=se,Me.Fragment=t,Me.Profiler=a,Me.PureComponent=le,Me.StrictMode=s,Me.Suspense=m,Me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=D,Me.__COMPILER_RUNTIME={__proto__:null,c:function(b){return D.H.useMemoCache(b)}},Me.cache=function(b){return function(){return b.apply(null,arguments)}},Me.cacheSignal=function(){return null},Me.cloneElement=function(b,M,H){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var z=F({},b.props),ee=b.key;if(M!=null)for(de in M.key!==void 0&&(ee=""+M.key),M)!C.call(M,de)||de==="key"||de==="__self"||de==="__source"||de==="ref"&&M.ref===void 0||(z[de]=M[de]);var de=arguments.length-2;if(de===1)z.children=H;else if(1<de){for(var he=Array(de),we=0;we<de;we++)he[we]=arguments[we+2];z.children=he}return N(b.type,ee,z)},Me.createContext=function(b){return b={$$typeof:c,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:l,_context:b},b},Me.createElement=function(b,M,H){var z,ee={},de=null;if(M!=null)for(z in M.key!==void 0&&(de=""+M.key),M)C.call(M,z)&&z!=="key"&&z!=="__self"&&z!=="__source"&&(ee[z]=M[z]);var he=arguments.length-2;if(he===1)ee.children=H;else if(1<he){for(var we=Array(he),Ae=0;Ae<he;Ae++)we[Ae]=arguments[Ae+2];ee.children=we}if(b&&b.defaultProps)for(z in he=b.defaultProps,he)ee[z]===void 0&&(ee[z]=he[z]);return N(b,de,ee)},Me.createRef=function(){return{current:null}},Me.forwardRef=function(b){return{$$typeof:f,render:b}},Me.isValidElement=U,Me.lazy=function(b){return{$$typeof:v,_payload:{_status:-1,_result:b},_init:X}},Me.memo=function(b,M){return{$$typeof:g,type:b,compare:M===void 0?null:M}},Me.startTransition=function(b){var M=D.T,H={};D.T=H;try{var z=b(),ee=D.S;ee!==null&&ee(H,z),typeof z=="object"&&z!==null&&typeof z.then=="function"&&z.then(Ee,ae)}catch(de){ae(de)}finally{M!==null&&H.types!==null&&(M.types=H.types),D.T=M}},Me.unstable_useCacheRefresh=function(){return D.H.useCacheRefresh()},Me.use=function(b){return D.H.use(b)},Me.useActionState=function(b,M,H){return D.H.useActionState(b,M,H)},Me.useCallback=function(b,M){return D.H.useCallback(b,M)},Me.useContext=function(b){return D.H.useContext(b)},Me.useDebugValue=function(){},Me.useDeferredValue=function(b,M){return D.H.useDeferredValue(b,M)},Me.useEffect=function(b,M){return D.H.useEffect(b,M)},Me.useEffectEvent=function(b){return D.H.useEffectEvent(b)},Me.useId=function(){return D.H.useId()},Me.useImperativeHandle=function(b,M,H){return D.H.useImperativeHandle(b,M,H)},Me.useInsertionEffect=function(b,M){return D.H.useInsertionEffect(b,M)},Me.useLayoutEffect=function(b,M){return D.H.useLayoutEffect(b,M)},Me.useMemo=function(b,M){return D.H.useMemo(b,M)},Me.useOptimistic=function(b,M){return D.H.useOptimistic(b,M)},Me.useReducer=function(b,M,H){return D.H.useReducer(b,M,H)},Me.useRef=function(b){return D.H.useRef(b)},Me.useState=function(b){return D.H.useState(b)},Me.useSyncExternalStore=function(b,M,H){return D.H.useSyncExternalStore(b,M,H)},Me.useTransition=function(){return D.H.useTransition()},Me.version="19.2.8",Me}var eT;function z_(){return eT||(eT=1,Eg.exports=j2()),Eg.exports}var ge=z_();const q2=U2(ge),eU=V2({__proto__:null,default:q2},[ge]);var Tg={exports:{}},Xu={},bg={exports:{}},wg={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tT;function F2(){return tT||(tT=1,(function(n){function e(Z,ue){var X=Z.length;Z.push(ue);e:for(;0<X;){var ae=X-1>>>1,P=Z[ae];if(0<a(P,ue))Z[ae]=ue,Z[X]=P,X=ae;else break e}}function t(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var ue=Z[0],X=Z.pop();if(X!==ue){Z[0]=X;e:for(var ae=0,P=Z.length,b=P>>>1;ae<b;){var M=2*(ae+1)-1,H=Z[M],z=M+1,ee=Z[z];if(0>a(H,X))z<P&&0>a(ee,H)?(Z[ae]=ee,Z[z]=X,ae=z):(Z[ae]=H,Z[M]=X,ae=M);else if(z<P&&0>a(ee,X))Z[ae]=ee,Z[z]=X,ae=z;else break e}}return ue}function a(Z,ue){var X=Z.sortIndex-ue.sortIndex;return X!==0?X:Z.id-ue.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();n.unstable_now=function(){return c.now()-f}}var m=[],g=[],v=1,T=null,w=3,R=!1,L=!1,F=!1,B=!1,se=typeof setTimeout=="function"?setTimeout:null,oe=typeof clearTimeout=="function"?clearTimeout:null,le=typeof setImmediate<"u"?setImmediate:null;function _e(Z){for(var ue=t(g);ue!==null;){if(ue.callback===null)s(g);else if(ue.startTime<=Z)s(g),ue.sortIndex=ue.expirationTime,e(m,ue);else break;ue=t(g)}}function Le(Z){if(F=!1,_e(Z),!L)if(t(m)!==null)L=!0,Ee||(Ee=!0,j());else{var ue=t(g);ue!==null&&xe(Le,ue.startTime-Z)}}var Ee=!1,D=-1,C=5,N=-1;function O(){return B?!0:!(n.unstable_now()-N<C)}function U(){if(B=!1,Ee){var Z=n.unstable_now();N=Z;var ue=!0;try{e:{L=!1,F&&(F=!1,oe(D),D=-1),R=!0;var X=w;try{t:{for(_e(Z),T=t(m);T!==null&&!(T.expirationTime>Z&&O());){var ae=T.callback;if(typeof ae=="function"){T.callback=null,w=T.priorityLevel;var P=ae(T.expirationTime<=Z);if(Z=n.unstable_now(),typeof P=="function"){T.callback=P,_e(Z),ue=!0;break t}T===t(m)&&s(m),_e(Z)}else s(m);T=t(m)}if(T!==null)ue=!0;else{var b=t(g);b!==null&&xe(Le,b.startTime-Z),ue=!1}}break e}finally{T=null,w=X,R=!1}ue=void 0}}finally{ue?j():Ee=!1}}}var j;if(typeof le=="function")j=function(){le(U)};else if(typeof MessageChannel<"u"){var x=new MessageChannel,ht=x.port2;x.port1.onmessage=U,j=function(){ht.postMessage(null)}}else j=function(){se(U,0)};function xe(Z,ue){D=se(function(){Z(n.unstable_now())},ue)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(Z){Z.callback=null},n.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<Z?Math.floor(1e3/Z):5},n.unstable_getCurrentPriorityLevel=function(){return w},n.unstable_next=function(Z){switch(w){case 1:case 2:case 3:var ue=3;break;default:ue=w}var X=w;w=ue;try{return Z()}finally{w=X}},n.unstable_requestPaint=function(){B=!0},n.unstable_runWithPriority=function(Z,ue){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var X=w;w=Z;try{return ue()}finally{w=X}},n.unstable_scheduleCallback=function(Z,ue,X){var ae=n.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ae+X:ae):X=ae,Z){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=X+P,Z={id:v++,callback:ue,priorityLevel:Z,startTime:X,expirationTime:P,sortIndex:-1},X>ae?(Z.sortIndex=X,e(g,Z),t(m)===null&&Z===t(g)&&(F?(oe(D),D=-1):F=!0,xe(Le,X-ae))):(Z.sortIndex=P,e(m,Z),L||R||(L=!0,Ee||(Ee=!0,j()))),Z},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(Z){var ue=w;return function(){var X=w;w=ue;try{return Z.apply(this,arguments)}finally{w=X}}}})(wg)),wg}var nT;function H2(){return nT||(nT=1,bg.exports=F2()),bg.exports}var Sg={exports:{}},bn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iT;function G2(){if(iT)return bn;iT=1;var n=z_();function e(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(m,g,v){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:T==null?null:""+T,children:m,containerInfo:g,implementation:v}}var c=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,bn.createPortal=function(m,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(m,g,null,v)},bn.flushSync=function(m){var g=c.T,v=s.p;try{if(c.T=null,s.p=2,m)return m()}finally{c.T=g,s.p=v,s.d.f()}},bn.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(m,g))},bn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},bn.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var v=g.as,T=f(v,g.crossOrigin),w=typeof g.integrity=="string"?g.integrity:void 0,R=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?s.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:T,integrity:w,fetchPriority:R}):v==="script"&&s.d.X(m,{crossOrigin:T,integrity:w,fetchPriority:R,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},bn.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=f(g.as,g.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(m)},bn.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,T=f(v,g.crossOrigin);s.d.L(m,v,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},bn.preloadModule=function(m,g){if(typeof m=="string")if(g){var v=f(g.as,g.crossOrigin);s.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(m)},bn.requestFormReset=function(m){s.d.r(m)},bn.unstable_batchedUpdates=function(m,g){return m(g)},bn.useFormState=function(m,g,v){return c.H.useFormState(m,g,v)},bn.useFormStatus=function(){return c.H.useHostTransitionStatus()},bn.version="19.2.8",bn}var sT;function K2(){if(sT)return Sg.exports;sT=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Sg.exports=G2(),Sg.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rT;function Q2(){if(rT)return Xu;rT=1;var n=H2(),e=z_(),t=K2();function s(i){var r="https://react.dev/errors/"+i;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+i+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function l(i){var r=i,o=i;if(i.alternate)for(;r.return;)r=r.return;else{i=r;do r=i,(r.flags&4098)!==0&&(o=r.return),i=r.return;while(i)}return r.tag===3?o:null}function c(i){if(i.tag===13){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function f(i){if(i.tag===31){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function m(i){if(l(i)!==i)throw Error(s(188))}function g(i){var r=i.alternate;if(!r){if(r=l(i),r===null)throw Error(s(188));return r!==i?null:i}for(var o=i,u=r;;){var d=o.return;if(d===null)break;var p=d.alternate;if(p===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===o)return m(d),i;if(p===u)return m(d),r;p=p.sibling}throw Error(s(188))}if(o.return!==u.return)o=d,u=p;else{for(var y=!1,S=d.child;S;){if(S===o){y=!0,o=d,u=p;break}if(S===u){y=!0,u=d,o=p;break}S=S.sibling}if(!y){for(S=p.child;S;){if(S===o){y=!0,o=p,u=d;break}if(S===u){y=!0,u=p,o=d;break}S=S.sibling}if(!y)throw Error(s(189))}}if(o.alternate!==u)throw Error(s(190))}if(o.tag!==3)throw Error(s(188));return o.stateNode.current===o?i:r}function v(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i;for(i=i.child;i!==null;){if(r=v(i),r!==null)return r;i=i.sibling}return null}var T=Object.assign,w=Symbol.for("react.element"),R=Symbol.for("react.transitional.element"),L=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),se=Symbol.for("react.profiler"),oe=Symbol.for("react.consumer"),le=Symbol.for("react.context"),_e=Symbol.for("react.forward_ref"),Le=Symbol.for("react.suspense"),Ee=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),U=Symbol.iterator;function j(i){return i===null||typeof i!="object"?null:(i=U&&i[U]||i["@@iterator"],typeof i=="function"?i:null)}var x=Symbol.for("react.client.reference");function ht(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===x?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case F:return"Fragment";case se:return"Profiler";case B:return"StrictMode";case Le:return"Suspense";case Ee:return"SuspenseList";case N:return"Activity"}if(typeof i=="object")switch(i.$$typeof){case L:return"Portal";case le:return i.displayName||"Context";case oe:return(i._context.displayName||"Context")+".Consumer";case _e:var r=i.render;return i=i.displayName,i||(i=r.displayName||r.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case D:return r=i.displayName||null,r!==null?r:ht(i.type)||"Memo";case C:r=i._payload,i=i._init;try{return ht(i(r))}catch{}}return null}var xe=Array.isArray,Z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},ae=[],P=-1;function b(i){return{current:i}}function M(i){0>P||(i.current=ae[P],ae[P]=null,P--)}function H(i,r){P++,ae[P]=i.current,i.current=r}var z=b(null),ee=b(null),de=b(null),he=b(null);function we(i,r){switch(H(de,r),H(ee,i),H(z,null),r.nodeType){case 9:case 11:i=(i=r.documentElement)&&(i=i.namespaceURI)?E1(i):0;break;default:if(i=r.tagName,r=r.namespaceURI)r=E1(r),i=T1(r,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}M(z),H(z,i)}function Ae(){M(z),M(ee),M(de)}function Ze(i){i.memoizedState!==null&&H(he,i);var r=z.current,o=T1(r,i.type);r!==o&&(H(ee,i),H(z,o))}function Ye(i){ee.current===i&&(M(z),M(ee)),he.current===i&&(M(he),Ku._currentValue=X)}var ot,St;function De(i){if(ot===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);ot=r&&r[1]||"",St=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ot+i+St}var Ct=!1;function Jt(i,r){if(!i||Ct)return"";Ct=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(r){var ie=function(){throw Error()};if(Object.defineProperty(ie.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ie,[])}catch(Y){var W=Y}Reflect.construct(i,[],ie)}else{try{ie.call()}catch(Y){W=Y}i.call(ie.prototype)}}else{try{throw Error()}catch(Y){W=Y}(ie=i())&&typeof ie.catch=="function"&&ie.catch(function(){})}}catch(Y){if(Y&&W&&typeof Y.stack=="string")return[Y.stack,W.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=u.DetermineComponentFrameRoot(),y=p[0],S=p[1];if(y&&S){var k=y.split(`
`),Q=S.split(`
`);for(d=u=0;u<k.length&&!k[u].includes("DetermineComponentFrameRoot");)u++;for(;d<Q.length&&!Q[d].includes("DetermineComponentFrameRoot");)d++;if(u===k.length||d===Q.length)for(u=k.length-1,d=Q.length-1;1<=u&&0<=d&&k[u]!==Q[d];)d--;for(;1<=u&&0<=d;u--,d--)if(k[u]!==Q[d]){if(u!==1||d!==1)do if(u--,d--,0>d||k[u]!==Q[d]){var J=`
`+k[u].replace(" at new "," at ");return i.displayName&&J.includes("<anonymous>")&&(J=J.replace("<anonymous>",i.displayName)),J}while(1<=u&&0<=d);break}}}finally{Ct=!1,Error.prepareStackTrace=o}return(o=i?i.displayName||i.name:"")?De(o):""}function Pn(i,r){switch(i.tag){case 26:case 27:case 5:return De(i.type);case 16:return De("Lazy");case 13:return i.child!==r&&r!==null?De("Suspense Fallback"):De("Suspense");case 19:return De("SuspenseList");case 0:case 15:return Jt(i.type,!1);case 11:return Jt(i.type.render,!1);case 1:return Jt(i.type,!0);case 31:return De("Activity");default:return""}}function zn(i){try{var r="",o=null;do r+=Pn(i,o),o=i,i=i.return;while(i);return r}catch(u){return`
Error generating stack: `+u.message+`
`+u.stack}}var jn=Object.prototype.hasOwnProperty,en=n.unstable_scheduleCallback,ar=n.unstable_cancelCallback,$l=n.unstable_shouldYield,wa=n.unstable_requestPaint,Bt=n.unstable_now,Ao=n.unstable_getCurrentPriorityLevel,Rt=n.unstable_ImmediatePriority,zt=n.unstable_UserBlockingPriority,Pi=n.unstable_NormalPriority,Sa=n.unstable_LowPriority,or=n.unstable_IdlePriority,Aa=n.log,_s=n.unstable_setDisableYieldValue,Wi=null,En=null;function mi(i){if(typeof Aa=="function"&&_s(i),En&&typeof En.setStrictMode=="function")try{En.setStrictMode(Wi,i)}catch{}}var xn=Math.clz32?Math.clz32:sh,vp=Math.log,Xl=Math.LN2;function sh(i){return i>>>=0,i===0?32:31-(vp(i)/Xl|0)|0}var Ca=256,Yi=262144,lr=4194304;function xi(i){var r=i&42;if(r!==0)return r;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return i&261888;case 262144:case 524288:case 1048576:case 2097152:return i&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function gi(i,r,o){var u=i.pendingLanes;if(u===0)return 0;var d=0,p=i.suspendedLanes,y=i.pingedLanes;i=i.warmLanes;var S=u&134217727;return S!==0?(u=S&~p,u!==0?d=xi(u):(y&=S,y!==0?d=xi(y):o||(o=S&~i,o!==0&&(d=xi(o))))):(S=u&~p,S!==0?d=xi(S):y!==0?d=xi(y):o||(o=u&~i,o!==0&&(d=xi(o)))),d===0?0:r!==0&&r!==d&&(r&p)===0&&(p=d&-d,o=r&-r,p>=o||p===32&&(o&4194048)!==0)?r:d}function ur(i,r){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&r)===0}function Co(i,r){switch(i){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zl(){var i=lr;return lr<<=1,(lr&62914560)===0&&(lr=4194304),i}function ys(i){for(var r=[],o=0;31>o;o++)r.push(i);return r}function cr(i,r){i.pendingLanes|=r,r!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function cn(i,r,o,u,d,p){var y=i.pendingLanes;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=o,i.entangledLanes&=o,i.errorRecoveryDisabledLanes&=o,i.shellSuspendCounter=0;var S=i.entanglements,k=i.expirationTimes,Q=i.hiddenUpdates;for(o=y&~o;0<o;){var J=31-xn(o),ie=1<<J;S[J]=0,k[J]=-1;var W=Q[J];if(W!==null)for(Q[J]=null,J=0;J<W.length;J++){var Y=W[J];Y!==null&&(Y.lane&=-536870913)}o&=~ie}u!==0&&Jl(i,u,0),p!==0&&d===0&&i.tag!==0&&(i.suspendedLanes|=p&~(y&~r))}function Jl(i,r,o){i.pendingLanes|=r,i.suspendedLanes&=~r;var u=31-xn(r);i.entangledLanes|=r,i.entanglements[u]=i.entanglements[u]|1073741824|o&261930}function hr(i,r){var o=i.entangledLanes|=r;for(i=i.entanglements;o;){var u=31-xn(o),d=1<<u;d&r|i[u]&r&&(i[u]|=r),o&=~d}}function dr(i,r){var o=r&-r;return o=(o&42)!==0?1:eu(o),(o&(i.suspendedLanes|r))!==0?0:o}function eu(i){switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=128;break;case 268435456:i=134217728;break;default:i=0}return i}function tu(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function vs(){var i=ue.p;return i!==0?i:(i=window.event,i===void 0?32:H1(i.type))}function rh(i,r){var o=ue.p;try{return ue.p=i,r()}finally{ue.p=o}}var $i=Math.random().toString(36).slice(2),It="__reactFiber$"+$i,hn="__reactProps$"+$i,Xi="__reactContainer$"+$i,fr="__reactEvents$"+$i,Zi="__reactListeners$"+$i,ah="__reactHandles$"+$i,nu="__reactResources$"+$i,Es="__reactMarker$"+$i;function Ra(i){delete i[It],delete i[hn],delete i[fr],delete i[Zi],delete i[ah]}function Ts(i){var r=i[It];if(r)return r;for(var o=i.parentNode;o;){if(r=o[Xi]||o[It]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(i=I1(i);i!==null;){if(o=i[It])return o;i=I1(i)}return r}i=o,o=i.parentNode}return null}function bs(i){if(i=i[It]||i[Xi]){var r=i.tag;if(r===5||r===6||r===13||r===31||r===26||r===27||r===3)return i}return null}function Ia(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i.stateNode;throw Error(s(33))}function Di(i){var r=i[nu];return r||(r=i[nu]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function Mt(i){i[Es]=!0}var Ro=new Set,pr={};function Dn(i,r){Ji(i,r),Ji(i+"Capture",r)}function Ji(i,r){for(pr[i]=r,i=0;i<r.length;i++)Ro.add(r[i])}var Ep=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),iu={},su={};function oh(i){return jn.call(su,i)?!0:jn.call(iu,i)?!1:Ep.test(i)?su[i]=!0:(iu[i]=!0,!1)}function mr(i,r,o){if(oh(r))if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":i.removeAttribute(r);return;case"boolean":var u=r.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){i.removeAttribute(r);return}}i.setAttribute(r,""+o)}}function gr(i,r,o){if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(r);return}i.setAttribute(r,""+o)}}function _i(i,r,o,u){if(u===null)i.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(o);return}i.setAttributeNS(r,o,""+u)}}function kn(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function lh(i){var r=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Tp(i,r,o){var u=Object.getOwnPropertyDescriptor(i.constructor.prototype,r);if(!i.hasOwnProperty(r)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var d=u.get,p=u.set;return Object.defineProperty(i,r,{configurable:!0,get:function(){return d.call(this)},set:function(y){o=""+y,p.call(this,y)}}),Object.defineProperty(i,r,{enumerable:u.enumerable}),{getValue:function(){return o},setValue:function(y){o=""+y},stopTracking:function(){i._valueTracker=null,delete i[r]}}}}function Io(i){if(!i._valueTracker){var r=lh(i)?"checked":"value";i._valueTracker=Tp(i,r,""+i[r])}}function ru(i){if(!i)return!1;var r=i._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return i&&(u=lh(i)?i.checked?"true":"false":i.value),i=u,i!==o?(r.setValue(i),!0):!1}function No(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var ws=/[\n"\\]/g;function Nt(i){return i.replace(ws,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function _r(i,r,o,u,d,p,y,S){i.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?i.type=y:i.removeAttribute("type"),r!=null?y==="number"?(r===0&&i.value===""||i.value!=r)&&(i.value=""+kn(r)):i.value!==""+kn(r)&&(i.value=""+kn(r)):y!=="submit"&&y!=="reset"||i.removeAttribute("value"),r!=null?Po(i,y,kn(r)):o!=null?Po(i,y,kn(o)):u!=null&&i.removeAttribute("value"),d==null&&p!=null&&(i.defaultChecked=!!p),d!=null&&(i.checked=d&&typeof d!="function"&&typeof d!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?i.name=""+kn(S):i.removeAttribute("name")}function Na(i,r,o,u,d,p,y,S){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(i.type=p),r!=null||o!=null){if(!(p!=="submit"&&p!=="reset"||r!=null)){Io(i);return}o=o!=null?""+kn(o):"",r=r!=null?""+kn(r):o,S||r===i.value||(i.value=r),i.defaultValue=r}u=u??d,u=typeof u!="function"&&typeof u!="symbol"&&!!u,i.checked=S?i.checked:!!u,i.defaultChecked=!!u,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(i.name=y),Io(i)}function Po(i,r,o){r==="number"&&No(i.ownerDocument)===i||i.defaultValue===""+o||(i.defaultValue=""+o)}function Je(i,r,o,u){if(i=i.options,r){r={};for(var d=0;d<o.length;d++)r["$"+o[d]]=!0;for(o=0;o<i.length;o++)d=r.hasOwnProperty("$"+i[o].value),i[o].selected!==d&&(i[o].selected=d),d&&u&&(i[o].defaultSelected=!0)}else{for(o=""+kn(o),r=null,d=0;d<i.length;d++){if(i[d].value===o){i[d].selected=!0,u&&(i[d].defaultSelected=!0);return}r!==null||i[d].disabled||(r=i[d])}r!==null&&(r.selected=!0)}}function Pa(i,r,o){if(r!=null&&(r=""+kn(r),r!==i.value&&(i.value=r),o==null)){i.defaultValue!==r&&(i.defaultValue=r);return}i.defaultValue=o!=null?""+kn(o):""}function yr(i,r,o,u){if(r==null){if(u!=null){if(o!=null)throw Error(s(92));if(xe(u)){if(1<u.length)throw Error(s(93));u=u[0]}o=u}o==null&&(o=""),r=o}o=kn(r),i.defaultValue=o,u=i.textContent,u===o&&u!==""&&u!==null&&(i.value=u),Io(i)}function yi(i,r){if(r){var o=i.firstChild;if(o&&o===i.lastChild&&o.nodeType===3){o.nodeValue=r;return}}i.textContent=r}var bp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function au(i,r,o){var u=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?i.setProperty(r,""):r==="float"?i.cssFloat="":i[r]="":u?i.setProperty(r,o):typeof o!="number"||o===0||bp.has(r)?r==="float"?i.cssFloat=o:i[r]=(""+o).trim():i[r]=o+"px"}function uh(i,r,o){if(r!=null&&typeof r!="object")throw Error(s(62));if(i=i.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||r!=null&&r.hasOwnProperty(u)||(u.indexOf("--")===0?i.setProperty(u,""):u==="float"?i.cssFloat="":i[u]="");for(var d in r)u=r[d],r.hasOwnProperty(d)&&o[d]!==u&&au(i,d,u)}else for(var p in r)r.hasOwnProperty(p)&&au(i,p,r[p])}function ou(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Sp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function es(i){return Sp.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}function tn(){}var xo=null;function Do(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Ss=null,si=null;function ch(i){var r=bs(i);if(r&&(i=r.stateNode)){var o=i[hn]||null;e:switch(i=r.stateNode,r.type){case"input":if(_r(i,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=i;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Nt(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==i&&u.form===i.form){var d=u[hn]||null;if(!d)throw Error(s(90));_r(u,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(r=0;r<o.length;r++)u=o[r],u.form===i.form&&ru(u)}break e;case"textarea":Pa(i,o.value,o.defaultValue);break e;case"select":r=o.value,r!=null&&Je(i,!!o.multiple,r,!1)}}}var lu=!1;function hh(i,r,o){if(lu)return i(r,o);lu=!0;try{var u=i(r);return u}finally{if(lu=!1,(Ss!==null||si!==null)&&(od(),Ss&&(r=Ss,i=si,si=Ss=null,ch(r),i)))for(r=0;r<i.length;r++)ch(i[r])}}function qn(i,r){var o=i.stateNode;if(o===null)return null;var u=o[hn]||null;if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(i=i.type,u=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!u;break e;default:i=!1}if(i)return null;if(o&&typeof o!="function")throw Error(s(231,r,typeof o));return o}var ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uu=!1;if(ki)try{var ts={};Object.defineProperty(ts,"passive",{get:function(){uu=!0}}),window.addEventListener("test",ts,ts),window.removeEventListener("test",ts,ts)}catch{uu=!1}var ri=null,ko=null,ns=null;function vr(){if(ns)return ns;var i,r=ko,o=r.length,u,d="value"in ri?ri.value:ri.textContent,p=d.length;for(i=0;i<o&&r[i]===d[i];i++);var y=o-i;for(u=1;u<=y&&r[o-u]===d[p-u];u++);return ns=d.slice(i,1<u?1-u:void 0)}function xa(i){var r=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&r===13&&(i=13)):i=r,i===10&&(i=13),32<=i||i===13?i:0}function Er(){return!0}function Et(){return!1}function Tn(i){function r(o,u,d,p,y){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=p,this.target=y,this.currentTarget=null;for(var S in i)i.hasOwnProperty(S)&&(o=i[S],this[S]=o?o(p):p[S]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Er:Et,this.isPropagationStopped=Et,this}return T(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Er)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Er)},persist:function(){},isPersistent:Er}),r}var As={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Da=Tn(As),Tr=T({},As,{view:0,detail:0}),dh=Tn(Tr),br,Mo,Mn,ka=T({},Tr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sr,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Mn&&(Mn&&i.type==="mousemove"?(br=i.screenX-Mn.screenX,Mo=i.screenY-Mn.screenY):Mo=br=0,Mn=i),br)},movementY:function(i){return"movementY"in i?i.movementY:Mo}}),fh=Tn(ka),Ma=T({},ka,{dataTransfer:0}),ph=Tn(Ma),cu=T({},Tr,{relatedTarget:0}),wr=Tn(cu),mh=T({},As,{animationName:0,elapsedTime:0,pseudoElement:0}),Oo=Tn(mh),Ap=T({},As,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),gh=Tn(Ap),Oa=T({},As,{data:0}),hu=Tn(Oa),_h={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},du={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yh(i){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(i):(i=fu[i])?!!r[i]:!1}function Sr(){return yh}var vh=T({},Tr,{key:function(i){if(i.key){var r=_h[i.key]||i.key;if(r!=="Unidentified")return r}return i.type==="keypress"?(i=xa(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?du[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sr,charCode:function(i){return i.type==="keypress"?xa(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?xa(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),Eh=Tn(vh),Cs=T({},ka,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pu=Tn(Cs),Th=T({},Tr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sr}),bh=Tn(Th),wh=T({},As,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lo=Tn(wh),On=T({},ka,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Sh=Tn(On),Ah=T({},As,{newState:0,oldState:0}),Ar=Tn(Ah),h=[9,13,27,32],_=ki&&"CompositionEvent"in window,E=null;ki&&"documentMode"in document&&(E=document.documentMode);var A=ki&&"TextEvent"in window&&!E,G=ki&&(!_||E&&8<E&&11>=E),$=" ",fe=!1;function lt(i,r){switch(i){case"keyup":return h.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jt(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ue=!1;function nn(i,r){switch(i){case"compositionend":return jt(r);case"keypress":return r.which!==32?null:(fe=!0,$);case"textInput":return i=r.data,i===$&&fe?null:i;default:return null}}function sn(i,r){if(Ue)return i==="compositionend"||!_&&lt(i,r)?(i=vr(),ns=ko=ri=null,Ue=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return G&&r.locale!=="ko"?null:r.data;default:return null}}var Cr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fn(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r==="input"?!!Cr[i.type]:r==="textarea"}function La(i,r,o,u){Ss?si?si.push(u):si=[u]:Ss=u,r=pd(r,"onChange"),0<r.length&&(o=new Da("onChange","change",null,o,u),i.push({event:o,listeners:r}))}var Rs=null,mu=null;function cI(i){p1(i,0)}function Ch(i){var r=Ia(i);if(ru(r))return i}function kv(i,r){if(i==="change")return r}var Mv=!1;if(ki){var Cp;if(ki){var Rp="oninput"in document;if(!Rp){var Ov=document.createElement("div");Ov.setAttribute("oninput","return;"),Rp=typeof Ov.oninput=="function"}Cp=Rp}else Cp=!1;Mv=Cp&&(!document.documentMode||9<document.documentMode)}function Lv(){Rs&&(Rs.detachEvent("onpropertychange",Vv),mu=Rs=null)}function Vv(i){if(i.propertyName==="value"&&Ch(mu)){var r=[];La(r,mu,i,Do(i)),hh(cI,r)}}function hI(i,r,o){i==="focusin"?(Lv(),Rs=r,mu=o,Rs.attachEvent("onpropertychange",Vv)):i==="focusout"&&Lv()}function dI(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Ch(mu)}function fI(i,r){if(i==="click")return Ch(r)}function pI(i,r){if(i==="input"||i==="change")return Ch(r)}function mI(i,r){return i===r&&(i!==0||1/i===1/r)||i!==i&&r!==r}var ai=typeof Object.is=="function"?Object.is:mI;function gu(i,r){if(ai(i,r))return!0;if(typeof i!="object"||i===null||typeof r!="object"||r===null)return!1;var o=Object.keys(i),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!jn.call(r,d)||!ai(i[d],r[d]))return!1}return!0}function Uv(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Bv(i,r){var o=Uv(i);i=0;for(var u;o;){if(o.nodeType===3){if(u=i+o.textContent.length,i<=r&&u>=r)return{node:o,offset:r-i};i=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Uv(o)}}function zv(i,r){return i&&r?i===r?!0:i&&i.nodeType===3?!1:r&&r.nodeType===3?zv(i,r.parentNode):"contains"in i?i.contains(r):i.compareDocumentPosition?!!(i.compareDocumentPosition(r)&16):!1:!1}function jv(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var r=No(i.document);r instanceof i.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)i=r.contentWindow;else break;r=No(i.document)}return r}function Ip(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r&&(r==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||r==="textarea"||i.contentEditable==="true")}var gI=ki&&"documentMode"in document&&11>=document.documentMode,Vo=null,Np=null,_u=null,Pp=!1;function qv(i,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Pp||Vo==null||Vo!==No(u)||(u=Vo,"selectionStart"in u&&Ip(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),_u&&gu(_u,u)||(_u=u,u=pd(Np,"onSelect"),0<u.length&&(r=new Da("onSelect","select",null,r,o),i.push({event:r,listeners:u}),r.target=Vo)))}function Va(i,r){var o={};return o[i.toLowerCase()]=r.toLowerCase(),o["Webkit"+i]="webkit"+r,o["Moz"+i]="moz"+r,o}var Uo={animationend:Va("Animation","AnimationEnd"),animationiteration:Va("Animation","AnimationIteration"),animationstart:Va("Animation","AnimationStart"),transitionrun:Va("Transition","TransitionRun"),transitionstart:Va("Transition","TransitionStart"),transitioncancel:Va("Transition","TransitionCancel"),transitionend:Va("Transition","TransitionEnd")},xp={},Fv={};ki&&(Fv=document.createElement("div").style,"AnimationEvent"in window||(delete Uo.animationend.animation,delete Uo.animationiteration.animation,delete Uo.animationstart.animation),"TransitionEvent"in window||delete Uo.transitionend.transition);function Ua(i){if(xp[i])return xp[i];if(!Uo[i])return i;var r=Uo[i],o;for(o in r)if(r.hasOwnProperty(o)&&o in Fv)return xp[i]=r[o];return i}var Hv=Ua("animationend"),Gv=Ua("animationiteration"),Kv=Ua("animationstart"),_I=Ua("transitionrun"),yI=Ua("transitionstart"),vI=Ua("transitioncancel"),Qv=Ua("transitionend"),Wv=new Map,Dp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Dp.push("scrollEnd");function Mi(i,r){Wv.set(i,r),Dn(r,[i])}var Rh=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)},vi=[],Bo=0,kp=0;function Ih(){for(var i=Bo,r=kp=Bo=0;r<i;){var o=vi[r];vi[r++]=null;var u=vi[r];vi[r++]=null;var d=vi[r];vi[r++]=null;var p=vi[r];if(vi[r++]=null,u!==null&&d!==null){var y=u.pending;y===null?d.next=d:(d.next=y.next,y.next=d),u.pending=d}p!==0&&Yv(o,d,p)}}function Nh(i,r,o,u){vi[Bo++]=i,vi[Bo++]=r,vi[Bo++]=o,vi[Bo++]=u,kp|=u,i.lanes|=u,i=i.alternate,i!==null&&(i.lanes|=u)}function Mp(i,r,o,u){return Nh(i,r,o,u),Ph(i)}function Ba(i,r){return Nh(i,null,null,r),Ph(i)}function Yv(i,r,o){i.lanes|=o;var u=i.alternate;u!==null&&(u.lanes|=o);for(var d=!1,p=i.return;p!==null;)p.childLanes|=o,u=p.alternate,u!==null&&(u.childLanes|=o),p.tag===22&&(i=p.stateNode,i===null||i._visibility&1||(d=!0)),i=p,p=p.return;return i.tag===3?(p=i.stateNode,d&&r!==null&&(d=31-xn(o),i=p.hiddenUpdates,u=i[d],u===null?i[d]=[r]:u.push(r),r.lane=o|536870912),p):null}function Ph(i){if(50<Bu)throw Bu=0,Fm=null,Error(s(185));for(var r=i.return;r!==null;)i=r,r=i.return;return i.tag===3?i.stateNode:null}var zo={};function EI(i,r,o,u){this.tag=i,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function oi(i,r,o,u){return new EI(i,r,o,u)}function Op(i){return i=i.prototype,!(!i||!i.isReactComponent)}function Is(i,r){var o=i.alternate;return o===null?(o=oi(i.tag,r,i.key,i.mode),o.elementType=i.elementType,o.type=i.type,o.stateNode=i.stateNode,o.alternate=i,i.alternate=o):(o.pendingProps=r,o.type=i.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=i.flags&65011712,o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,r=i.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=i.sibling,o.index=i.index,o.ref=i.ref,o.refCleanup=i.refCleanup,o}function $v(i,r){i.flags&=65011714;var o=i.alternate;return o===null?(i.childLanes=0,i.lanes=r,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,r=o.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),i}function xh(i,r,o,u,d,p){var y=0;if(u=i,typeof i=="function")Op(i)&&(y=1);else if(typeof i=="string")y=A2(i,o,z.current)?26:i==="html"||i==="head"||i==="body"?27:5;else e:switch(i){case N:return i=oi(31,o,r,d),i.elementType=N,i.lanes=p,i;case F:return za(o.children,d,p,r);case B:y=8,d|=24;break;case se:return i=oi(12,o,r,d|2),i.elementType=se,i.lanes=p,i;case Le:return i=oi(13,o,r,d),i.elementType=Le,i.lanes=p,i;case Ee:return i=oi(19,o,r,d),i.elementType=Ee,i.lanes=p,i;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case le:y=10;break e;case oe:y=9;break e;case _e:y=11;break e;case D:y=14;break e;case C:y=16,u=null;break e}y=29,o=Error(s(130,i===null?"null":typeof i,"")),u=null}return r=oi(y,o,r,d),r.elementType=i,r.type=u,r.lanes=p,r}function za(i,r,o,u){return i=oi(7,i,u,r),i.lanes=o,i}function Lp(i,r,o){return i=oi(6,i,null,r),i.lanes=o,i}function Xv(i){var r=oi(18,null,null,0);return r.stateNode=i,r}function Vp(i,r,o){return r=oi(4,i.children!==null?i.children:[],i.key,r),r.lanes=o,r.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},r}var Zv=new WeakMap;function Ei(i,r){if(typeof i=="object"&&i!==null){var o=Zv.get(i);return o!==void 0?o:(r={value:i,source:r,stack:zn(r)},Zv.set(i,r),r)}return{value:i,source:r,stack:zn(r)}}var jo=[],qo=0,Dh=null,yu=0,Ti=[],bi=0,Rr=null,is=1,ss="";function Ns(i,r){jo[qo++]=yu,jo[qo++]=Dh,Dh=i,yu=r}function Jv(i,r,o){Ti[bi++]=is,Ti[bi++]=ss,Ti[bi++]=Rr,Rr=i;var u=is;i=ss;var d=32-xn(u)-1;u&=~(1<<d),o+=1;var p=32-xn(r)+d;if(30<p){var y=d-d%5;p=(u&(1<<y)-1).toString(32),u>>=y,d-=y,is=1<<32-xn(r)+d|o<<d|u,ss=p+i}else is=1<<p|o<<d|u,ss=i}function Up(i){i.return!==null&&(Ns(i,1),Jv(i,1,0))}function Bp(i){for(;i===Dh;)Dh=jo[--qo],jo[qo]=null,yu=jo[--qo],jo[qo]=null;for(;i===Rr;)Rr=Ti[--bi],Ti[bi]=null,ss=Ti[--bi],Ti[bi]=null,is=Ti[--bi],Ti[bi]=null}function e0(i,r){Ti[bi++]=is,Ti[bi++]=ss,Ti[bi++]=Rr,is=r.id,ss=r.overflow,Rr=i}var dn=null,Tt=null,$e=!1,Ir=null,wi=!1,zp=Error(s(519));function Nr(i){var r=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw vu(Ei(r,i)),zp}function t0(i){var r=i.stateNode,o=i.type,u=i.memoizedProps;switch(r[It]=i,r[hn]=u,o){case"dialog":Fe("cancel",r),Fe("close",r);break;case"iframe":case"object":case"embed":Fe("load",r);break;case"video":case"audio":for(o=0;o<ju.length;o++)Fe(ju[o],r);break;case"source":Fe("error",r);break;case"img":case"image":case"link":Fe("error",r),Fe("load",r);break;case"details":Fe("toggle",r);break;case"input":Fe("invalid",r),Na(r,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0);break;case"select":Fe("invalid",r);break;case"textarea":Fe("invalid",r),yr(r,u.value,u.defaultValue,u.children)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||u.suppressHydrationWarning===!0||y1(r.textContent,o)?(u.popover!=null&&(Fe("beforetoggle",r),Fe("toggle",r)),u.onScroll!=null&&Fe("scroll",r),u.onScrollEnd!=null&&Fe("scrollend",r),u.onClick!=null&&(r.onclick=tn),r=!0):r=!1,r||Nr(i,!0)}function n0(i){for(dn=i.return;dn;)switch(dn.tag){case 5:case 31:case 13:wi=!1;return;case 27:case 3:wi=!0;return;default:dn=dn.return}}function Fo(i){if(i!==dn)return!1;if(!$e)return n0(i),$e=!0,!1;var r=i.tag,o;if((o=r!==3&&r!==27)&&((o=r===5)&&(o=i.type,o=!(o!=="form"&&o!=="button")||sg(i.type,i.memoizedProps)),o=!o),o&&Tt&&Nr(i),n0(i),r===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));Tt=R1(i)}else if(r===31){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));Tt=R1(i)}else r===27?(r=Tt,Fr(i.type)?(i=ug,ug=null,Tt=i):Tt=r):Tt=dn?Ai(i.stateNode.nextSibling):null;return!0}function ja(){Tt=dn=null,$e=!1}function jp(){var i=Ir;return i!==null&&(Qn===null?Qn=i:Qn.push.apply(Qn,i),Ir=null),i}function vu(i){Ir===null?Ir=[i]:Ir.push(i)}var qp=b(null),qa=null,Ps=null;function Pr(i,r,o){H(qp,r._currentValue),r._currentValue=o}function xs(i){i._currentValue=qp.current,M(qp)}function Fp(i,r,o){for(;i!==null;){var u=i.alternate;if((i.childLanes&r)!==r?(i.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),i===o)break;i=i.return}}function Hp(i,r,o,u){var d=i.child;for(d!==null&&(d.return=i);d!==null;){var p=d.dependencies;if(p!==null){var y=d.child;p=p.firstContext;e:for(;p!==null;){var S=p;p=d;for(var k=0;k<r.length;k++)if(S.context===r[k]){p.lanes|=o,S=p.alternate,S!==null&&(S.lanes|=o),Fp(p.return,o,i),u||(y=null);break e}p=S.next}}else if(d.tag===18){if(y=d.return,y===null)throw Error(s(341));y.lanes|=o,p=y.alternate,p!==null&&(p.lanes|=o),Fp(y,o,i),y=null}else y=d.child;if(y!==null)y.return=d;else for(y=d;y!==null;){if(y===i){y=null;break}if(d=y.sibling,d!==null){d.return=y.return,y=d;break}y=y.return}d=y}}function Ho(i,r,o,u){i=null;for(var d=r,p=!1;d!==null;){if(!p){if((d.flags&524288)!==0)p=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var y=d.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var S=d.type;ai(d.pendingProps.value,y.value)||(i!==null?i.push(S):i=[S])}}else if(d===he.current){if(y=d.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(i!==null?i.push(Ku):i=[Ku])}d=d.return}i!==null&&Hp(r,i,o,u),r.flags|=262144}function kh(i){for(i=i.firstContext;i!==null;){if(!ai(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function Fa(i){qa=i,Ps=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function fn(i){return i0(qa,i)}function Mh(i,r){return qa===null&&Fa(i),i0(i,r)}function i0(i,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},Ps===null){if(i===null)throw Error(s(308));Ps=r,i.dependencies={lanes:0,firstContext:r},i.flags|=524288}else Ps=Ps.next=r;return o}var TI=typeof AbortController<"u"?AbortController:function(){var i=[],r=this.signal={aborted:!1,addEventListener:function(o,u){i.push(u)}};this.abort=function(){r.aborted=!0,i.forEach(function(o){return o()})}},bI=n.unstable_scheduleCallback,wI=n.unstable_NormalPriority,qt={$$typeof:le,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Gp(){return{controller:new TI,data:new Map,refCount:0}}function Eu(i){i.refCount--,i.refCount===0&&bI(wI,function(){i.controller.abort()})}var Tu=null,Kp=0,Go=0,Ko=null;function SI(i,r){if(Tu===null){var o=Tu=[];Kp=0,Go=Ym(),Ko={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Kp++,r.then(s0,s0),r}function s0(){if(--Kp===0&&Tu!==null){Ko!==null&&(Ko.status="fulfilled");var i=Tu;Tu=null,Go=0,Ko=null;for(var r=0;r<i.length;r++)(0,i[r])()}}function AI(i,r){var o=[],u={status:"pending",value:null,reason:null,then:function(d){o.push(d)}};return i.then(function(){u.status="fulfilled",u.value=r;for(var d=0;d<o.length;d++)(0,o[d])(r)},function(d){for(u.status="rejected",u.reason=d,d=0;d<o.length;d++)(0,o[d])(void 0)}),u}var r0=Z.S;Z.S=function(i,r){qE=Bt(),typeof r=="object"&&r!==null&&typeof r.then=="function"&&SI(i,r),r0!==null&&r0(i,r)};var Ha=b(null);function Qp(){var i=Ha.current;return i!==null?i:mt.pooledCache}function Oh(i,r){r===null?H(Ha,Ha.current):H(Ha,r.pool)}function a0(){var i=Qp();return i===null?null:{parent:qt._currentValue,pool:i}}var Qo=Error(s(460)),Wp=Error(s(474)),Lh=Error(s(542)),Vh={then:function(){}};function o0(i){return i=i.status,i==="fulfilled"||i==="rejected"}function l0(i,r,o){switch(o=i[o],o===void 0?i.push(r):o!==r&&(r.then(tn,tn),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,c0(i),i;default:if(typeof r.status=="string")r.then(tn,tn);else{if(i=mt,i!==null&&100<i.shellSuspendCounter)throw Error(s(482));i=r,i.status="pending",i.then(function(u){if(r.status==="pending"){var d=r;d.status="fulfilled",d.value=u}},function(u){if(r.status==="pending"){var d=r;d.status="rejected",d.reason=u}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,c0(i),i}throw Ka=r,Qo}}function Ga(i){try{var r=i._init;return r(i._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(Ka=o,Qo):o}}var Ka=null;function u0(){if(Ka===null)throw Error(s(459));var i=Ka;return Ka=null,i}function c0(i){if(i===Qo||i===Lh)throw Error(s(483))}var Wo=null,bu=0;function Uh(i){var r=bu;return bu+=1,Wo===null&&(Wo=[]),l0(Wo,i,r)}function wu(i,r){r=r.props.ref,i.ref=r!==void 0?r:null}function Bh(i,r){throw r.$$typeof===w?Error(s(525)):(i=Object.prototype.toString.call(r),Error(s(31,i==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":i)))}function h0(i){function r(q,V){if(i){var K=q.deletions;K===null?(q.deletions=[V],q.flags|=16):K.push(V)}}function o(q,V){if(!i)return null;for(;V!==null;)r(q,V),V=V.sibling;return null}function u(q){for(var V=new Map;q!==null;)q.key!==null?V.set(q.key,q):V.set(q.index,q),q=q.sibling;return V}function d(q,V){return q=Is(q,V),q.index=0,q.sibling=null,q}function p(q,V,K){return q.index=K,i?(K=q.alternate,K!==null?(K=K.index,K<V?(q.flags|=67108866,V):K):(q.flags|=67108866,V)):(q.flags|=1048576,V)}function y(q){return i&&q.alternate===null&&(q.flags|=67108866),q}function S(q,V,K,ne){return V===null||V.tag!==6?(V=Lp(K,q.mode,ne),V.return=q,V):(V=d(V,K),V.return=q,V)}function k(q,V,K,ne){var Te=K.type;return Te===F?J(q,V,K.props.children,ne,K.key):V!==null&&(V.elementType===Te||typeof Te=="object"&&Te!==null&&Te.$$typeof===C&&Ga(Te)===V.type)?(V=d(V,K.props),wu(V,K),V.return=q,V):(V=xh(K.type,K.key,K.props,null,q.mode,ne),wu(V,K),V.return=q,V)}function Q(q,V,K,ne){return V===null||V.tag!==4||V.stateNode.containerInfo!==K.containerInfo||V.stateNode.implementation!==K.implementation?(V=Vp(K,q.mode,ne),V.return=q,V):(V=d(V,K.children||[]),V.return=q,V)}function J(q,V,K,ne,Te){return V===null||V.tag!==7?(V=za(K,q.mode,ne,Te),V.return=q,V):(V=d(V,K),V.return=q,V)}function ie(q,V,K){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Lp(""+V,q.mode,K),V.return=q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case R:return K=xh(V.type,V.key,V.props,null,q.mode,K),wu(K,V),K.return=q,K;case L:return V=Vp(V,q.mode,K),V.return=q,V;case C:return V=Ga(V),ie(q,V,K)}if(xe(V)||j(V))return V=za(V,q.mode,K,null),V.return=q,V;if(typeof V.then=="function")return ie(q,Uh(V),K);if(V.$$typeof===le)return ie(q,Mh(q,V),K);Bh(q,V)}return null}function W(q,V,K,ne){var Te=V!==null?V.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Te!==null?null:S(q,V,""+K,ne);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case R:return K.key===Te?k(q,V,K,ne):null;case L:return K.key===Te?Q(q,V,K,ne):null;case C:return K=Ga(K),W(q,V,K,ne)}if(xe(K)||j(K))return Te!==null?null:J(q,V,K,ne,null);if(typeof K.then=="function")return W(q,V,Uh(K),ne);if(K.$$typeof===le)return W(q,V,Mh(q,K),ne);Bh(q,K)}return null}function Y(q,V,K,ne,Te){if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return q=q.get(K)||null,S(V,q,""+ne,Te);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case R:return q=q.get(ne.key===null?K:ne.key)||null,k(V,q,ne,Te);case L:return q=q.get(ne.key===null?K:ne.key)||null,Q(V,q,ne,Te);case C:return ne=Ga(ne),Y(q,V,K,ne,Te)}if(xe(ne)||j(ne))return q=q.get(K)||null,J(V,q,ne,Te,null);if(typeof ne.then=="function")return Y(q,V,K,Uh(ne),Te);if(ne.$$typeof===le)return Y(q,V,K,Mh(V,ne),Te);Bh(V,ne)}return null}function ye(q,V,K,ne){for(var Te=null,et=null,ve=V,Ve=V=0,Qe=null;ve!==null&&Ve<K.length;Ve++){ve.index>Ve?(Qe=ve,ve=null):Qe=ve.sibling;var tt=W(q,ve,K[Ve],ne);if(tt===null){ve===null&&(ve=Qe);break}i&&ve&&tt.alternate===null&&r(q,ve),V=p(tt,V,Ve),et===null?Te=tt:et.sibling=tt,et=tt,ve=Qe}if(Ve===K.length)return o(q,ve),$e&&Ns(q,Ve),Te;if(ve===null){for(;Ve<K.length;Ve++)ve=ie(q,K[Ve],ne),ve!==null&&(V=p(ve,V,Ve),et===null?Te=ve:et.sibling=ve,et=ve);return $e&&Ns(q,Ve),Te}for(ve=u(ve);Ve<K.length;Ve++)Qe=Y(ve,q,Ve,K[Ve],ne),Qe!==null&&(i&&Qe.alternate!==null&&ve.delete(Qe.key===null?Ve:Qe.key),V=p(Qe,V,Ve),et===null?Te=Qe:et.sibling=Qe,et=Qe);return i&&ve.forEach(function(Wr){return r(q,Wr)}),$e&&Ns(q,Ve),Te}function Se(q,V,K,ne){if(K==null)throw Error(s(151));for(var Te=null,et=null,ve=V,Ve=V=0,Qe=null,tt=K.next();ve!==null&&!tt.done;Ve++,tt=K.next()){ve.index>Ve?(Qe=ve,ve=null):Qe=ve.sibling;var Wr=W(q,ve,tt.value,ne);if(Wr===null){ve===null&&(ve=Qe);break}i&&ve&&Wr.alternate===null&&r(q,ve),V=p(Wr,V,Ve),et===null?Te=Wr:et.sibling=Wr,et=Wr,ve=Qe}if(tt.done)return o(q,ve),$e&&Ns(q,Ve),Te;if(ve===null){for(;!tt.done;Ve++,tt=K.next())tt=ie(q,tt.value,ne),tt!==null&&(V=p(tt,V,Ve),et===null?Te=tt:et.sibling=tt,et=tt);return $e&&Ns(q,Ve),Te}for(ve=u(ve);!tt.done;Ve++,tt=K.next())tt=Y(ve,q,Ve,tt.value,ne),tt!==null&&(i&&tt.alternate!==null&&ve.delete(tt.key===null?Ve:tt.key),V=p(tt,V,Ve),et===null?Te=tt:et.sibling=tt,et=tt);return i&&ve.forEach(function(L2){return r(q,L2)}),$e&&Ns(q,Ve),Te}function pt(q,V,K,ne){if(typeof K=="object"&&K!==null&&K.type===F&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case R:e:{for(var Te=K.key;V!==null;){if(V.key===Te){if(Te=K.type,Te===F){if(V.tag===7){o(q,V.sibling),ne=d(V,K.props.children),ne.return=q,q=ne;break e}}else if(V.elementType===Te||typeof Te=="object"&&Te!==null&&Te.$$typeof===C&&Ga(Te)===V.type){o(q,V.sibling),ne=d(V,K.props),wu(ne,K),ne.return=q,q=ne;break e}o(q,V);break}else r(q,V);V=V.sibling}K.type===F?(ne=za(K.props.children,q.mode,ne,K.key),ne.return=q,q=ne):(ne=xh(K.type,K.key,K.props,null,q.mode,ne),wu(ne,K),ne.return=q,q=ne)}return y(q);case L:e:{for(Te=K.key;V!==null;){if(V.key===Te)if(V.tag===4&&V.stateNode.containerInfo===K.containerInfo&&V.stateNode.implementation===K.implementation){o(q,V.sibling),ne=d(V,K.children||[]),ne.return=q,q=ne;break e}else{o(q,V);break}else r(q,V);V=V.sibling}ne=Vp(K,q.mode,ne),ne.return=q,q=ne}return y(q);case C:return K=Ga(K),pt(q,V,K,ne)}if(xe(K))return ye(q,V,K,ne);if(j(K)){if(Te=j(K),typeof Te!="function")throw Error(s(150));return K=Te.call(K),Se(q,V,K,ne)}if(typeof K.then=="function")return pt(q,V,Uh(K),ne);if(K.$$typeof===le)return pt(q,V,Mh(q,K),ne);Bh(q,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,V!==null&&V.tag===6?(o(q,V.sibling),ne=d(V,K),ne.return=q,q=ne):(o(q,V),ne=Lp(K,q.mode,ne),ne.return=q,q=ne),y(q)):o(q,V)}return function(q,V,K,ne){try{bu=0;var Te=pt(q,V,K,ne);return Wo=null,Te}catch(ve){if(ve===Qo||ve===Lh)throw ve;var et=oi(29,ve,null,q.mode);return et.lanes=ne,et.return=q,et}finally{}}}var Qa=h0(!0),d0=h0(!1),xr=!1;function Yp(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $p(i,r){i=i.updateQueue,r.updateQueue===i&&(r.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function Dr(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function kr(i,r,o){var u=i.updateQueue;if(u===null)return null;if(u=u.shared,(it&2)!==0){var d=u.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),u.pending=r,r=Ph(i),Yv(i,null,o),r}return Nh(i,u,r,o),Ph(i)}function Su(i,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194048)!==0)){var u=r.lanes;u&=i.pendingLanes,o|=u,r.lanes=o,hr(i,o)}}function Xp(i,r){var o=i.updateQueue,u=i.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var y={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};p===null?d=p=y:p=p.next=y,o=o.next}while(o!==null);p===null?d=p=r:p=p.next=r}else d=p=r;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:u.shared,callbacks:u.callbacks},i.updateQueue=o;return}i=o.lastBaseUpdate,i===null?o.firstBaseUpdate=r:i.next=r,o.lastBaseUpdate=r}var Zp=!1;function Au(){if(Zp){var i=Ko;if(i!==null)throw i}}function Cu(i,r,o,u){Zp=!1;var d=i.updateQueue;xr=!1;var p=d.firstBaseUpdate,y=d.lastBaseUpdate,S=d.shared.pending;if(S!==null){d.shared.pending=null;var k=S,Q=k.next;k.next=null,y===null?p=Q:y.next=Q,y=k;var J=i.alternate;J!==null&&(J=J.updateQueue,S=J.lastBaseUpdate,S!==y&&(S===null?J.firstBaseUpdate=Q:S.next=Q,J.lastBaseUpdate=k))}if(p!==null){var ie=d.baseState;y=0,J=Q=k=null,S=p;do{var W=S.lane&-536870913,Y=W!==S.lane;if(Y?(Ke&W)===W:(u&W)===W){W!==0&&W===Go&&(Zp=!0),J!==null&&(J=J.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var ye=i,Se=S;W=r;var pt=o;switch(Se.tag){case 1:if(ye=Se.payload,typeof ye=="function"){ie=ye.call(pt,ie,W);break e}ie=ye;break e;case 3:ye.flags=ye.flags&-65537|128;case 0:if(ye=Se.payload,W=typeof ye=="function"?ye.call(pt,ie,W):ye,W==null)break e;ie=T({},ie,W);break e;case 2:xr=!0}}W=S.callback,W!==null&&(i.flags|=64,Y&&(i.flags|=8192),Y=d.callbacks,Y===null?d.callbacks=[W]:Y.push(W))}else Y={lane:W,tag:S.tag,payload:S.payload,callback:S.callback,next:null},J===null?(Q=J=Y,k=ie):J=J.next=Y,y|=W;if(S=S.next,S===null){if(S=d.shared.pending,S===null)break;Y=S,S=Y.next,Y.next=null,d.lastBaseUpdate=Y,d.shared.pending=null}}while(!0);J===null&&(k=ie),d.baseState=k,d.firstBaseUpdate=Q,d.lastBaseUpdate=J,p===null&&(d.shared.lanes=0),Ur|=y,i.lanes=y,i.memoizedState=ie}}function f0(i,r){if(typeof i!="function")throw Error(s(191,i));i.call(r)}function p0(i,r){var o=i.callbacks;if(o!==null)for(i.callbacks=null,i=0;i<o.length;i++)f0(o[i],r)}var Yo=b(null),zh=b(0);function m0(i,r){i=zs,H(zh,i),H(Yo,r),zs=i|r.baseLanes}function Jp(){H(zh,zs),H(Yo,Yo.current)}function em(){zs=zh.current,M(Yo),M(zh)}var li=b(null),Si=null;function Mr(i){var r=i.alternate;H(Ot,Ot.current&1),H(li,i),Si===null&&(r===null||Yo.current!==null||r.memoizedState!==null)&&(Si=i)}function tm(i){H(Ot,Ot.current),H(li,i),Si===null&&(Si=i)}function g0(i){i.tag===22?(H(Ot,Ot.current),H(li,i),Si===null&&(Si=i)):Or()}function Or(){H(Ot,Ot.current),H(li,li.current)}function ui(i){M(li),Si===i&&(Si=null),M(Ot)}var Ot=b(0);function jh(i){for(var r=i;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||og(o)||lg(o)))return r}else if(r.tag===19&&(r.memoizedProps.revealOrder==="forwards"||r.memoizedProps.revealOrder==="backwards"||r.memoizedProps.revealOrder==="unstable_legacy-backwards"||r.memoizedProps.revealOrder==="together")){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Ds=0,Oe=null,dt=null,Ft=null,qh=!1,$o=!1,Wa=!1,Fh=0,Ru=0,Xo=null,CI=0;function Pt(){throw Error(s(321))}function nm(i,r){if(r===null)return!1;for(var o=0;o<r.length&&o<i.length;o++)if(!ai(i[o],r[o]))return!1;return!0}function im(i,r,o,u,d,p){return Ds=p,Oe=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Z.H=i===null||i.memoizedState===null?J0:ym,Wa=!1,p=o(u,d),Wa=!1,$o&&(p=y0(r,o,u,d)),_0(i),p}function _0(i){Z.H=Pu;var r=dt!==null&&dt.next!==null;if(Ds=0,Ft=dt=Oe=null,qh=!1,Ru=0,Xo=null,r)throw Error(s(300));i===null||Ht||(i=i.dependencies,i!==null&&kh(i)&&(Ht=!0))}function y0(i,r,o,u){Oe=i;var d=0;do{if($o&&(Xo=null),Ru=0,$o=!1,25<=d)throw Error(s(301));if(d+=1,Ft=dt=null,i.updateQueue!=null){var p=i.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}Z.H=eE,p=r(o,u)}while($o);return p}function RI(){var i=Z.H,r=i.useState()[0];return r=typeof r.then=="function"?Iu(r):r,i=i.useState()[0],(dt!==null?dt.memoizedState:null)!==i&&(Oe.flags|=1024),r}function sm(){var i=Fh!==0;return Fh=0,i}function rm(i,r,o){r.updateQueue=i.updateQueue,r.flags&=-2053,i.lanes&=~o}function am(i){if(qh){for(i=i.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}qh=!1}Ds=0,Ft=dt=Oe=null,$o=!1,Ru=Fh=0,Xo=null}function Ln(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?Oe.memoizedState=Ft=i:Ft=Ft.next=i,Ft}function Lt(){if(dt===null){var i=Oe.alternate;i=i!==null?i.memoizedState:null}else i=dt.next;var r=Ft===null?Oe.memoizedState:Ft.next;if(r!==null)Ft=r,dt=i;else{if(i===null)throw Oe.alternate===null?Error(s(467)):Error(s(310));dt=i,i={memoizedState:dt.memoizedState,baseState:dt.baseState,baseQueue:dt.baseQueue,queue:dt.queue,next:null},Ft===null?Oe.memoizedState=Ft=i:Ft=Ft.next=i}return Ft}function Hh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Iu(i){var r=Ru;return Ru+=1,Xo===null&&(Xo=[]),i=l0(Xo,i,r),r=Oe,(Ft===null?r.memoizedState:Ft.next)===null&&(r=r.alternate,Z.H=r===null||r.memoizedState===null?J0:ym),i}function Gh(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return Iu(i);if(i.$$typeof===le)return fn(i)}throw Error(s(438,String(i)))}function om(i){var r=null,o=Oe.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var u=Oe.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(r={data:u.data.map(function(d){return d.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=Hh(),Oe.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(i),u=0;u<i;u++)o[u]=O;return r.index++,o}function ks(i,r){return typeof r=="function"?r(i):r}function Kh(i){var r=Lt();return lm(r,dt,i)}function lm(i,r,o){var u=i.queue;if(u===null)throw Error(s(311));u.lastRenderedReducer=o;var d=i.baseQueue,p=u.pending;if(p!==null){if(d!==null){var y=d.next;d.next=p.next,p.next=y}r.baseQueue=d=p,u.pending=null}if(p=i.baseState,d===null)i.memoizedState=p;else{r=d.next;var S=y=null,k=null,Q=r,J=!1;do{var ie=Q.lane&-536870913;if(ie!==Q.lane?(Ke&ie)===ie:(Ds&ie)===ie){var W=Q.revertLane;if(W===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),ie===Go&&(J=!0);else if((Ds&W)===W){Q=Q.next,W===Go&&(J=!0);continue}else ie={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},k===null?(S=k=ie,y=p):k=k.next=ie,Oe.lanes|=W,Ur|=W;ie=Q.action,Wa&&o(p,ie),p=Q.hasEagerState?Q.eagerState:o(p,ie)}else W={lane:ie,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},k===null?(S=k=W,y=p):k=k.next=W,Oe.lanes|=ie,Ur|=ie;Q=Q.next}while(Q!==null&&Q!==r);if(k===null?y=p:k.next=S,!ai(p,i.memoizedState)&&(Ht=!0,J&&(o=Ko,o!==null)))throw o;i.memoizedState=p,i.baseState=y,i.baseQueue=k,u.lastRenderedState=p}return d===null&&(u.lanes=0),[i.memoizedState,u.dispatch]}function um(i){var r=Lt(),o=r.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=i;var u=o.dispatch,d=o.pending,p=r.memoizedState;if(d!==null){o.pending=null;var y=d=d.next;do p=i(p,y.action),y=y.next;while(y!==d);ai(p,r.memoizedState)||(Ht=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),o.lastRenderedState=p}return[p,u]}function v0(i,r,o){var u=Oe,d=Lt(),p=$e;if(p){if(o===void 0)throw Error(s(407));o=o()}else o=r();var y=!ai((dt||d).memoizedState,o);if(y&&(d.memoizedState=o,Ht=!0),d=d.queue,dm(b0.bind(null,u,d,i),[i]),d.getSnapshot!==r||y||Ft!==null&&Ft.memoizedState.tag&1){if(u.flags|=2048,Zo(9,{destroy:void 0},T0.bind(null,u,d,o,r),null),mt===null)throw Error(s(349));p||(Ds&127)!==0||E0(u,r,o)}return o}function E0(i,r,o){i.flags|=16384,i={getSnapshot:r,value:o},r=Oe.updateQueue,r===null?(r=Hh(),Oe.updateQueue=r,r.stores=[i]):(o=r.stores,o===null?r.stores=[i]:o.push(i))}function T0(i,r,o,u){r.value=o,r.getSnapshot=u,w0(r)&&S0(i)}function b0(i,r,o){return o(function(){w0(r)&&S0(i)})}function w0(i){var r=i.getSnapshot;i=i.value;try{var o=r();return!ai(i,o)}catch{return!0}}function S0(i){var r=Ba(i,2);r!==null&&Wn(r,i,2)}function cm(i){var r=Ln();if(typeof i=="function"){var o=i;if(i=o(),Wa){mi(!0);try{o()}finally{mi(!1)}}}return r.memoizedState=r.baseState=i,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ks,lastRenderedState:i},r}function A0(i,r,o,u){return i.baseState=o,lm(i,dt,typeof u=="function"?u:ks)}function II(i,r,o,u,d){if(Yh(i))throw Error(s(485));if(i=r.action,i!==null){var p={payload:d,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){p.listeners.push(y)}};Z.T!==null?o(!0):p.isTransition=!1,u(p),o=r.pending,o===null?(p.next=r.pending=p,C0(r,p)):(p.next=o.next,r.pending=o.next=p)}}function C0(i,r){var o=r.action,u=r.payload,d=i.state;if(r.isTransition){var p=Z.T,y={};Z.T=y;try{var S=o(d,u),k=Z.S;k!==null&&k(y,S),R0(i,r,S)}catch(Q){hm(i,r,Q)}finally{p!==null&&y.types!==null&&(p.types=y.types),Z.T=p}}else try{p=o(d,u),R0(i,r,p)}catch(Q){hm(i,r,Q)}}function R0(i,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){I0(i,r,u)},function(u){return hm(i,r,u)}):I0(i,r,o)}function I0(i,r,o){r.status="fulfilled",r.value=o,N0(r),i.state=o,r=i.pending,r!==null&&(o=r.next,o===r?i.pending=null:(o=o.next,r.next=o,C0(i,o)))}function hm(i,r,o){var u=i.pending;if(i.pending=null,u!==null){u=u.next;do r.status="rejected",r.reason=o,N0(r),r=r.next;while(r!==u)}i.action=null}function N0(i){i=i.listeners;for(var r=0;r<i.length;r++)(0,i[r])()}function P0(i,r){return r}function x0(i,r){if($e){var o=mt.formState;if(o!==null){e:{var u=Oe;if($e){if(Tt){t:{for(var d=Tt,p=wi;d.nodeType!==8;){if(!p){d=null;break t}if(d=Ai(d.nextSibling),d===null){d=null;break t}}p=d.data,d=p==="F!"||p==="F"?d:null}if(d){Tt=Ai(d.nextSibling),u=d.data==="F!";break e}}Nr(u)}u=!1}u&&(r=o[0])}}return o=Ln(),o.memoizedState=o.baseState=r,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:P0,lastRenderedState:r},o.queue=u,o=$0.bind(null,Oe,u),u.dispatch=o,u=cm(!1),p=_m.bind(null,Oe,!1,u.queue),u=Ln(),d={state:r,dispatch:null,action:i,pending:null},u.queue=d,o=II.bind(null,Oe,d,p,o),d.dispatch=o,u.memoizedState=i,[r,o,!1]}function D0(i){var r=Lt();return k0(r,dt,i)}function k0(i,r,o){if(r=lm(i,r,P0)[0],i=Kh(ks)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var u=Iu(r)}catch(y){throw y===Qo?Lh:y}else u=r;r=Lt();var d=r.queue,p=d.dispatch;return o!==r.memoizedState&&(Oe.flags|=2048,Zo(9,{destroy:void 0},NI.bind(null,d,o),null)),[u,p,i]}function NI(i,r){i.action=r}function M0(i){var r=Lt(),o=dt;if(o!==null)return k0(r,o,i);Lt(),r=r.memoizedState,o=Lt();var u=o.queue.dispatch;return o.memoizedState=i,[r,u,!1]}function Zo(i,r,o,u){return i={tag:i,create:o,deps:u,inst:r,next:null},r=Oe.updateQueue,r===null&&(r=Hh(),Oe.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=i.next=i:(u=o.next,o.next=i,i.next=u,r.lastEffect=i),i}function O0(){return Lt().memoizedState}function Qh(i,r,o,u){var d=Ln();Oe.flags|=i,d.memoizedState=Zo(1|r,{destroy:void 0},o,u===void 0?null:u)}function Wh(i,r,o,u){var d=Lt();u=u===void 0?null:u;var p=d.memoizedState.inst;dt!==null&&u!==null&&nm(u,dt.memoizedState.deps)?d.memoizedState=Zo(r,p,o,u):(Oe.flags|=i,d.memoizedState=Zo(1|r,p,o,u))}function L0(i,r){Qh(8390656,8,i,r)}function dm(i,r){Wh(2048,8,i,r)}function PI(i){Oe.flags|=4;var r=Oe.updateQueue;if(r===null)r=Hh(),Oe.updateQueue=r,r.events=[i];else{var o=r.events;o===null?r.events=[i]:o.push(i)}}function V0(i){var r=Lt().memoizedState;return PI({ref:r,nextImpl:i}),function(){if((it&2)!==0)throw Error(s(440));return r.impl.apply(void 0,arguments)}}function U0(i,r){return Wh(4,2,i,r)}function B0(i,r){return Wh(4,4,i,r)}function z0(i,r){if(typeof r=="function"){i=i();var o=r(i);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return i=i(),r.current=i,function(){r.current=null}}function j0(i,r,o){o=o!=null?o.concat([i]):null,Wh(4,4,z0.bind(null,r,i),o)}function fm(){}function q0(i,r){var o=Lt();r=r===void 0?null:r;var u=o.memoizedState;return r!==null&&nm(r,u[1])?u[0]:(o.memoizedState=[i,r],i)}function F0(i,r){var o=Lt();r=r===void 0?null:r;var u=o.memoizedState;if(r!==null&&nm(r,u[1]))return u[0];if(u=i(),Wa){mi(!0);try{i()}finally{mi(!1)}}return o.memoizedState=[u,r],u}function pm(i,r,o){return o===void 0||(Ds&1073741824)!==0&&(Ke&261930)===0?i.memoizedState=r:(i.memoizedState=o,i=HE(),Oe.lanes|=i,Ur|=i,o)}function H0(i,r,o,u){return ai(o,r)?o:Yo.current!==null?(i=pm(i,o,u),ai(i,r)||(Ht=!0),i):(Ds&42)===0||(Ds&1073741824)!==0&&(Ke&261930)===0?(Ht=!0,i.memoizedState=o):(i=HE(),Oe.lanes|=i,Ur|=i,r)}function G0(i,r,o,u,d){var p=ue.p;ue.p=p!==0&&8>p?p:8;var y=Z.T,S={};Z.T=S,_m(i,!1,r,o);try{var k=d(),Q=Z.S;if(Q!==null&&Q(S,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var J=AI(k,u);Nu(i,r,J,di(i))}else Nu(i,r,u,di(i))}catch(ie){Nu(i,r,{then:function(){},status:"rejected",reason:ie},di())}finally{ue.p=p,y!==null&&S.types!==null&&(y.types=S.types),Z.T=y}}function xI(){}function mm(i,r,o,u){if(i.tag!==5)throw Error(s(476));var d=K0(i).queue;G0(i,d,r,X,o===null?xI:function(){return Q0(i),o(u)})}function K0(i){var r=i.memoizedState;if(r!==null)return r;r={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ks,lastRenderedState:X},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ks,lastRenderedState:o},next:null},i.memoizedState=r,i=i.alternate,i!==null&&(i.memoizedState=r),r}function Q0(i){var r=K0(i);r.next===null&&(r=i.alternate.memoizedState),Nu(i,r.next.queue,{},di())}function gm(){return fn(Ku)}function W0(){return Lt().memoizedState}function Y0(){return Lt().memoizedState}function DI(i){for(var r=i.return;r!==null;){switch(r.tag){case 24:case 3:var o=di();i=Dr(o);var u=kr(r,i,o);u!==null&&(Wn(u,r,o),Su(u,r,o)),r={cache:Gp()},i.payload=r;return}r=r.return}}function kI(i,r,o){var u=di();o={lane:u,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Yh(i)?X0(r,o):(o=Mp(i,r,o,u),o!==null&&(Wn(o,i,u),Z0(o,r,u)))}function $0(i,r,o){var u=di();Nu(i,r,o,u)}function Nu(i,r,o,u){var d={lane:u,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(Yh(i))X0(r,d);else{var p=i.alternate;if(i.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var y=r.lastRenderedState,S=p(y,o);if(d.hasEagerState=!0,d.eagerState=S,ai(S,y))return Nh(i,r,d,0),mt===null&&Ih(),!1}catch{}finally{}if(o=Mp(i,r,d,u),o!==null)return Wn(o,i,u),Z0(o,r,u),!0}return!1}function _m(i,r,o,u){if(u={lane:2,revertLane:Ym(),gesture:null,action:u,hasEagerState:!1,eagerState:null,next:null},Yh(i)){if(r)throw Error(s(479))}else r=Mp(i,o,u,2),r!==null&&Wn(r,i,2)}function Yh(i){var r=i.alternate;return i===Oe||r!==null&&r===Oe}function X0(i,r){$o=qh=!0;var o=i.pending;o===null?r.next=r:(r.next=o.next,o.next=r),i.pending=r}function Z0(i,r,o){if((o&4194048)!==0){var u=r.lanes;u&=i.pendingLanes,o|=u,r.lanes=o,hr(i,o)}}var Pu={readContext:fn,use:Gh,useCallback:Pt,useContext:Pt,useEffect:Pt,useImperativeHandle:Pt,useLayoutEffect:Pt,useInsertionEffect:Pt,useMemo:Pt,useReducer:Pt,useRef:Pt,useState:Pt,useDebugValue:Pt,useDeferredValue:Pt,useTransition:Pt,useSyncExternalStore:Pt,useId:Pt,useHostTransitionStatus:Pt,useFormState:Pt,useActionState:Pt,useOptimistic:Pt,useMemoCache:Pt,useCacheRefresh:Pt};Pu.useEffectEvent=Pt;var J0={readContext:fn,use:Gh,useCallback:function(i,r){return Ln().memoizedState=[i,r===void 0?null:r],i},useContext:fn,useEffect:L0,useImperativeHandle:function(i,r,o){o=o!=null?o.concat([i]):null,Qh(4194308,4,z0.bind(null,r,i),o)},useLayoutEffect:function(i,r){return Qh(4194308,4,i,r)},useInsertionEffect:function(i,r){Qh(4,2,i,r)},useMemo:function(i,r){var o=Ln();r=r===void 0?null:r;var u=i();if(Wa){mi(!0);try{i()}finally{mi(!1)}}return o.memoizedState=[u,r],u},useReducer:function(i,r,o){var u=Ln();if(o!==void 0){var d=o(r);if(Wa){mi(!0);try{o(r)}finally{mi(!1)}}}else d=r;return u.memoizedState=u.baseState=d,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:d},u.queue=i,i=i.dispatch=kI.bind(null,Oe,i),[u.memoizedState,i]},useRef:function(i){var r=Ln();return i={current:i},r.memoizedState=i},useState:function(i){i=cm(i);var r=i.queue,o=$0.bind(null,Oe,r);return r.dispatch=o,[i.memoizedState,o]},useDebugValue:fm,useDeferredValue:function(i,r){var o=Ln();return pm(o,i,r)},useTransition:function(){var i=cm(!1);return i=G0.bind(null,Oe,i.queue,!0,!1),Ln().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,r,o){var u=Oe,d=Ln();if($e){if(o===void 0)throw Error(s(407));o=o()}else{if(o=r(),mt===null)throw Error(s(349));(Ke&127)!==0||E0(u,r,o)}d.memoizedState=o;var p={value:o,getSnapshot:r};return d.queue=p,L0(b0.bind(null,u,p,i),[i]),u.flags|=2048,Zo(9,{destroy:void 0},T0.bind(null,u,p,o,r),null),o},useId:function(){var i=Ln(),r=mt.identifierPrefix;if($e){var o=ss,u=is;o=(u&~(1<<32-xn(u)-1)).toString(32)+o,r="_"+r+"R_"+o,o=Fh++,0<o&&(r+="H"+o.toString(32)),r+="_"}else o=CI++,r="_"+r+"r_"+o.toString(32)+"_";return i.memoizedState=r},useHostTransitionStatus:gm,useFormState:x0,useActionState:x0,useOptimistic:function(i){var r=Ln();r.memoizedState=r.baseState=i;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=_m.bind(null,Oe,!0,o),o.dispatch=r,[i,r]},useMemoCache:om,useCacheRefresh:function(){return Ln().memoizedState=DI.bind(null,Oe)},useEffectEvent:function(i){var r=Ln(),o={impl:i};return r.memoizedState=o,function(){if((it&2)!==0)throw Error(s(440));return o.impl.apply(void 0,arguments)}}},ym={readContext:fn,use:Gh,useCallback:q0,useContext:fn,useEffect:dm,useImperativeHandle:j0,useInsertionEffect:U0,useLayoutEffect:B0,useMemo:F0,useReducer:Kh,useRef:O0,useState:function(){return Kh(ks)},useDebugValue:fm,useDeferredValue:function(i,r){var o=Lt();return H0(o,dt.memoizedState,i,r)},useTransition:function(){var i=Kh(ks)[0],r=Lt().memoizedState;return[typeof i=="boolean"?i:Iu(i),r]},useSyncExternalStore:v0,useId:W0,useHostTransitionStatus:gm,useFormState:D0,useActionState:D0,useOptimistic:function(i,r){var o=Lt();return A0(o,dt,i,r)},useMemoCache:om,useCacheRefresh:Y0};ym.useEffectEvent=V0;var eE={readContext:fn,use:Gh,useCallback:q0,useContext:fn,useEffect:dm,useImperativeHandle:j0,useInsertionEffect:U0,useLayoutEffect:B0,useMemo:F0,useReducer:um,useRef:O0,useState:function(){return um(ks)},useDebugValue:fm,useDeferredValue:function(i,r){var o=Lt();return dt===null?pm(o,i,r):H0(o,dt.memoizedState,i,r)},useTransition:function(){var i=um(ks)[0],r=Lt().memoizedState;return[typeof i=="boolean"?i:Iu(i),r]},useSyncExternalStore:v0,useId:W0,useHostTransitionStatus:gm,useFormState:M0,useActionState:M0,useOptimistic:function(i,r){var o=Lt();return dt!==null?A0(o,dt,i,r):(o.baseState=i,[i,o.queue.dispatch])},useMemoCache:om,useCacheRefresh:Y0};eE.useEffectEvent=V0;function vm(i,r,o,u){r=i.memoizedState,o=o(u,r),o=o==null?r:T({},r,o),i.memoizedState=o,i.lanes===0&&(i.updateQueue.baseState=o)}var Em={enqueueSetState:function(i,r,o){i=i._reactInternals;var u=di(),d=Dr(u);d.payload=r,o!=null&&(d.callback=o),r=kr(i,d,u),r!==null&&(Wn(r,i,u),Su(r,i,u))},enqueueReplaceState:function(i,r,o){i=i._reactInternals;var u=di(),d=Dr(u);d.tag=1,d.payload=r,o!=null&&(d.callback=o),r=kr(i,d,u),r!==null&&(Wn(r,i,u),Su(r,i,u))},enqueueForceUpdate:function(i,r){i=i._reactInternals;var o=di(),u=Dr(o);u.tag=2,r!=null&&(u.callback=r),r=kr(i,u,o),r!==null&&(Wn(r,i,o),Su(r,i,o))}};function tE(i,r,o,u,d,p,y){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(u,p,y):r.prototype&&r.prototype.isPureReactComponent?!gu(o,u)||!gu(d,p):!0}function nE(i,r,o,u){i=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==i&&Em.enqueueReplaceState(r,r.state,null)}function Ya(i,r){var o=r;if("ref"in r){o={};for(var u in r)u!=="ref"&&(o[u]=r[u])}if(i=i.defaultProps){o===r&&(o=T({},o));for(var d in i)o[d]===void 0&&(o[d]=i[d])}return o}function iE(i){Rh(i)}function sE(i){console.error(i)}function rE(i){Rh(i)}function $h(i,r){try{var o=i.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(u){setTimeout(function(){throw u})}}function aE(i,r,o){try{var u=i.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function Tm(i,r,o){return o=Dr(o),o.tag=3,o.payload={element:null},o.callback=function(){$h(i,r)},o}function oE(i){return i=Dr(i),i.tag=3,i}function lE(i,r,o,u){var d=o.type.getDerivedStateFromError;if(typeof d=="function"){var p=u.value;i.payload=function(){return d(p)},i.callback=function(){aE(r,o,u)}}var y=o.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(i.callback=function(){aE(r,o,u),typeof d!="function"&&(Br===null?Br=new Set([this]):Br.add(this));var S=u.stack;this.componentDidCatch(u.value,{componentStack:S!==null?S:""})})}function MI(i,r,o,u,d){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(r=o.alternate,r!==null&&Ho(r,o,d,!0),o=li.current,o!==null){switch(o.tag){case 31:case 13:return Si===null?ld():o.alternate===null&&xt===0&&(xt=3),o.flags&=-257,o.flags|=65536,o.lanes=d,u===Vh?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([u]):r.add(u),Km(i,u,d)),!1;case 22:return o.flags|=65536,u===Vh?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([u]):o.add(u)),Km(i,u,d)),!1}throw Error(s(435,o.tag))}return Km(i,u,d),ld(),!1}if($e)return r=li.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=d,u!==zp&&(i=Error(s(422),{cause:u}),vu(Ei(i,o)))):(u!==zp&&(r=Error(s(423),{cause:u}),vu(Ei(r,o))),i=i.current.alternate,i.flags|=65536,d&=-d,i.lanes|=d,u=Ei(u,o),d=Tm(i.stateNode,u,d),Xp(i,d),xt!==4&&(xt=2)),!1;var p=Error(s(520),{cause:u});if(p=Ei(p,o),Uu===null?Uu=[p]:Uu.push(p),xt!==4&&(xt=2),r===null)return!0;u=Ei(u,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,i=d&-d,o.lanes|=i,i=Tm(o.stateNode,u,i),Xp(o,i),!1;case 1:if(r=o.type,p=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Br===null||!Br.has(p))))return o.flags|=65536,d&=-d,o.lanes|=d,d=oE(d),lE(d,i,o,u),Xp(o,d),!1}o=o.return}while(o!==null);return!1}var bm=Error(s(461)),Ht=!1;function pn(i,r,o,u){r.child=i===null?d0(r,null,o,u):Qa(r,i.child,o,u)}function uE(i,r,o,u,d){o=o.render;var p=r.ref;if("ref"in u){var y={};for(var S in u)S!=="ref"&&(y[S]=u[S])}else y=u;return Fa(r),u=im(i,r,o,y,p,d),S=sm(),i!==null&&!Ht?(rm(i,r,d),Ms(i,r,d)):($e&&S&&Up(r),r.flags|=1,pn(i,r,u,d),r.child)}function cE(i,r,o,u,d){if(i===null){var p=o.type;return typeof p=="function"&&!Op(p)&&p.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=p,hE(i,r,p,u,d)):(i=xh(o.type,null,u,r,r.mode,d),i.ref=r.ref,i.return=r,r.child=i)}if(p=i.child,!Pm(i,d)){var y=p.memoizedProps;if(o=o.compare,o=o!==null?o:gu,o(y,u)&&i.ref===r.ref)return Ms(i,r,d)}return r.flags|=1,i=Is(p,u),i.ref=r.ref,i.return=r,r.child=i}function hE(i,r,o,u,d){if(i!==null){var p=i.memoizedProps;if(gu(p,u)&&i.ref===r.ref)if(Ht=!1,r.pendingProps=u=p,Pm(i,d))(i.flags&131072)!==0&&(Ht=!0);else return r.lanes=i.lanes,Ms(i,r,d)}return wm(i,r,o,u,d)}function dE(i,r,o,u){var d=u.children,p=i!==null?i.memoizedState:null;if(i===null&&r.stateNode===null&&(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),u.mode==="hidden"){if((r.flags&128)!==0){if(p=p!==null?p.baseLanes|o:o,i!==null){for(u=r.child=i.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;u=d&~p}else u=0,r.child=null;return fE(i,r,p,o,u)}if((o&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},i!==null&&Oh(r,p!==null?p.cachePool:null),p!==null?m0(r,p):Jp(),g0(r);else return u=r.lanes=536870912,fE(i,r,p!==null?p.baseLanes|o:o,o,u)}else p!==null?(Oh(r,p.cachePool),m0(r,p),Or(),r.memoizedState=null):(i!==null&&Oh(r,null),Jp(),Or());return pn(i,r,d,o),r.child}function xu(i,r){return i!==null&&i.tag===22||r.stateNode!==null||(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.sibling}function fE(i,r,o,u,d){var p=Qp();return p=p===null?null:{parent:qt._currentValue,pool:p},r.memoizedState={baseLanes:o,cachePool:p},i!==null&&Oh(r,null),Jp(),g0(r),i!==null&&Ho(i,r,u,!0),r.childLanes=d,null}function Xh(i,r){return r=Jh({mode:r.mode,children:r.children},i.mode),r.ref=i.ref,i.child=r,r.return=i,r}function pE(i,r,o){return Qa(r,i.child,null,o),i=Xh(r,r.pendingProps),i.flags|=2,ui(r),r.memoizedState=null,i}function OI(i,r,o){var u=r.pendingProps,d=(r.flags&128)!==0;if(r.flags&=-129,i===null){if($e){if(u.mode==="hidden")return i=Xh(r,u),r.lanes=536870912,xu(null,i);if(tm(r),(i=Tt)?(i=C1(i,wi),i=i!==null&&i.data==="&"?i:null,i!==null&&(r.memoizedState={dehydrated:i,treeContext:Rr!==null?{id:is,overflow:ss}:null,retryLane:536870912,hydrationErrors:null},o=Xv(i),o.return=r,r.child=o,dn=r,Tt=null)):i=null,i===null)throw Nr(r);return r.lanes=536870912,null}return Xh(r,u)}var p=i.memoizedState;if(p!==null){var y=p.dehydrated;if(tm(r),d)if(r.flags&256)r.flags&=-257,r=pE(i,r,o);else if(r.memoizedState!==null)r.child=i.child,r.flags|=128,r=null;else throw Error(s(558));else if(Ht||Ho(i,r,o,!1),d=(o&i.childLanes)!==0,Ht||d){if(u=mt,u!==null&&(y=dr(u,o),y!==0&&y!==p.retryLane))throw p.retryLane=y,Ba(i,y),Wn(u,i,y),bm;ld(),r=pE(i,r,o)}else i=p.treeContext,Tt=Ai(y.nextSibling),dn=r,$e=!0,Ir=null,wi=!1,i!==null&&e0(r,i),r=Xh(r,u),r.flags|=4096;return r}return i=Is(i.child,{mode:u.mode,children:u.children}),i.ref=r.ref,r.child=i,i.return=r,i}function Zh(i,r){var o=r.ref;if(o===null)i!==null&&i.ref!==null&&(r.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(s(284));(i===null||i.ref!==o)&&(r.flags|=4194816)}}function wm(i,r,o,u,d){return Fa(r),o=im(i,r,o,u,void 0,d),u=sm(),i!==null&&!Ht?(rm(i,r,d),Ms(i,r,d)):($e&&u&&Up(r),r.flags|=1,pn(i,r,o,d),r.child)}function mE(i,r,o,u,d,p){return Fa(r),r.updateQueue=null,o=y0(r,u,o,d),_0(i),u=sm(),i!==null&&!Ht?(rm(i,r,p),Ms(i,r,p)):($e&&u&&Up(r),r.flags|=1,pn(i,r,o,p),r.child)}function gE(i,r,o,u,d){if(Fa(r),r.stateNode===null){var p=zo,y=o.contextType;typeof y=="object"&&y!==null&&(p=fn(y)),p=new o(u,p),r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=Em,r.stateNode=p,p._reactInternals=r,p=r.stateNode,p.props=u,p.state=r.memoizedState,p.refs={},Yp(r),y=o.contextType,p.context=typeof y=="object"&&y!==null?fn(y):zo,p.state=r.memoizedState,y=o.getDerivedStateFromProps,typeof y=="function"&&(vm(r,o,y,u),p.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(y=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),y!==p.state&&Em.enqueueReplaceState(p,p.state,null),Cu(r,u,p,d),Au(),p.state=r.memoizedState),typeof p.componentDidMount=="function"&&(r.flags|=4194308),u=!0}else if(i===null){p=r.stateNode;var S=r.memoizedProps,k=Ya(o,S);p.props=k;var Q=p.context,J=o.contextType;y=zo,typeof J=="object"&&J!==null&&(y=fn(J));var ie=o.getDerivedStateFromProps;J=typeof ie=="function"||typeof p.getSnapshotBeforeUpdate=="function",S=r.pendingProps!==S,J||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(S||Q!==y)&&nE(r,p,u,y),xr=!1;var W=r.memoizedState;p.state=W,Cu(r,u,p,d),Au(),Q=r.memoizedState,S||W!==Q||xr?(typeof ie=="function"&&(vm(r,o,ie,u),Q=r.memoizedState),(k=xr||tE(r,o,k,u,W,Q,y))?(J||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(r.flags|=4194308)):(typeof p.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=Q),p.props=u,p.state=Q,p.context=y,u=k):(typeof p.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{p=r.stateNode,$p(i,r),y=r.memoizedProps,J=Ya(o,y),p.props=J,ie=r.pendingProps,W=p.context,Q=o.contextType,k=zo,typeof Q=="object"&&Q!==null&&(k=fn(Q)),S=o.getDerivedStateFromProps,(Q=typeof S=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(y!==ie||W!==k)&&nE(r,p,u,k),xr=!1,W=r.memoizedState,p.state=W,Cu(r,u,p,d),Au();var Y=r.memoizedState;y!==ie||W!==Y||xr||i!==null&&i.dependencies!==null&&kh(i.dependencies)?(typeof S=="function"&&(vm(r,o,S,u),Y=r.memoizedState),(J=xr||tE(r,o,J,u,W,Y,k)||i!==null&&i.dependencies!==null&&kh(i.dependencies))?(Q||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(u,Y,k),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(u,Y,k)),typeof p.componentDidUpdate=="function"&&(r.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof p.componentDidUpdate!="function"||y===i.memoizedProps&&W===i.memoizedState||(r.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||y===i.memoizedProps&&W===i.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=Y),p.props=u,p.state=Y,p.context=k,u=J):(typeof p.componentDidUpdate!="function"||y===i.memoizedProps&&W===i.memoizedState||(r.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||y===i.memoizedProps&&W===i.memoizedState||(r.flags|=1024),u=!1)}return p=u,Zh(i,r),u=(r.flags&128)!==0,p||u?(p=r.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:p.render(),r.flags|=1,i!==null&&u?(r.child=Qa(r,i.child,null,d),r.child=Qa(r,null,o,d)):pn(i,r,o,d),r.memoizedState=p.state,i=r.child):i=Ms(i,r,d),i}function _E(i,r,o,u){return ja(),r.flags|=256,pn(i,r,o,u),r.child}var Sm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Am(i){return{baseLanes:i,cachePool:a0()}}function Cm(i,r,o){return i=i!==null?i.childLanes&~o:0,r&&(i|=hi),i}function yE(i,r,o){var u=r.pendingProps,d=!1,p=(r.flags&128)!==0,y;if((y=p)||(y=i!==null&&i.memoizedState===null?!1:(Ot.current&2)!==0),y&&(d=!0,r.flags&=-129),y=(r.flags&32)!==0,r.flags&=-33,i===null){if($e){if(d?Mr(r):Or(),(i=Tt)?(i=C1(i,wi),i=i!==null&&i.data!=="&"?i:null,i!==null&&(r.memoizedState={dehydrated:i,treeContext:Rr!==null?{id:is,overflow:ss}:null,retryLane:536870912,hydrationErrors:null},o=Xv(i),o.return=r,r.child=o,dn=r,Tt=null)):i=null,i===null)throw Nr(r);return lg(i)?r.lanes=32:r.lanes=536870912,null}var S=u.children;return u=u.fallback,d?(Or(),d=r.mode,S=Jh({mode:"hidden",children:S},d),u=za(u,d,o,null),S.return=r,u.return=r,S.sibling=u,r.child=S,u=r.child,u.memoizedState=Am(o),u.childLanes=Cm(i,y,o),r.memoizedState=Sm,xu(null,u)):(Mr(r),Rm(r,S))}var k=i.memoizedState;if(k!==null&&(S=k.dehydrated,S!==null)){if(p)r.flags&256?(Mr(r),r.flags&=-257,r=Im(i,r,o)):r.memoizedState!==null?(Or(),r.child=i.child,r.flags|=128,r=null):(Or(),S=u.fallback,d=r.mode,u=Jh({mode:"visible",children:u.children},d),S=za(S,d,o,null),S.flags|=2,u.return=r,S.return=r,u.sibling=S,r.child=u,Qa(r,i.child,null,o),u=r.child,u.memoizedState=Am(o),u.childLanes=Cm(i,y,o),r.memoizedState=Sm,r=xu(null,u));else if(Mr(r),lg(S)){if(y=S.nextSibling&&S.nextSibling.dataset,y)var Q=y.dgst;y=Q,u=Error(s(419)),u.stack="",u.digest=y,vu({value:u,source:null,stack:null}),r=Im(i,r,o)}else if(Ht||Ho(i,r,o,!1),y=(o&i.childLanes)!==0,Ht||y){if(y=mt,y!==null&&(u=dr(y,o),u!==0&&u!==k.retryLane))throw k.retryLane=u,Ba(i,u),Wn(y,i,u),bm;og(S)||ld(),r=Im(i,r,o)}else og(S)?(r.flags|=192,r.child=i.child,r=null):(i=k.treeContext,Tt=Ai(S.nextSibling),dn=r,$e=!0,Ir=null,wi=!1,i!==null&&e0(r,i),r=Rm(r,u.children),r.flags|=4096);return r}return d?(Or(),S=u.fallback,d=r.mode,k=i.child,Q=k.sibling,u=Is(k,{mode:"hidden",children:u.children}),u.subtreeFlags=k.subtreeFlags&65011712,Q!==null?S=Is(Q,S):(S=za(S,d,o,null),S.flags|=2),S.return=r,u.return=r,u.sibling=S,r.child=u,xu(null,u),u=r.child,S=i.child.memoizedState,S===null?S=Am(o):(d=S.cachePool,d!==null?(k=qt._currentValue,d=d.parent!==k?{parent:k,pool:k}:d):d=a0(),S={baseLanes:S.baseLanes|o,cachePool:d}),u.memoizedState=S,u.childLanes=Cm(i,y,o),r.memoizedState=Sm,xu(i.child,u)):(Mr(r),o=i.child,i=o.sibling,o=Is(o,{mode:"visible",children:u.children}),o.return=r,o.sibling=null,i!==null&&(y=r.deletions,y===null?(r.deletions=[i],r.flags|=16):y.push(i)),r.child=o,r.memoizedState=null,o)}function Rm(i,r){return r=Jh({mode:"visible",children:r},i.mode),r.return=i,i.child=r}function Jh(i,r){return i=oi(22,i,null,r),i.lanes=0,i}function Im(i,r,o){return Qa(r,i.child,null,o),i=Rm(r,r.pendingProps.children),i.flags|=2,r.memoizedState=null,i}function vE(i,r,o){i.lanes|=r;var u=i.alternate;u!==null&&(u.lanes|=r),Fp(i.return,r,o)}function Nm(i,r,o,u,d,p){var y=i.memoizedState;y===null?i.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d,treeForkCount:p}:(y.isBackwards=r,y.rendering=null,y.renderingStartTime=0,y.last=u,y.tail=o,y.tailMode=d,y.treeForkCount=p)}function EE(i,r,o){var u=r.pendingProps,d=u.revealOrder,p=u.tail;u=u.children;var y=Ot.current,S=(y&2)!==0;if(S?(y=y&1|2,r.flags|=128):y&=1,H(Ot,y),pn(i,r,u,o),u=$e?yu:0,!S&&i!==null&&(i.flags&128)!==0)e:for(i=r.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&vE(i,o,r);else if(i.tag===19)vE(i,o,r);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break e;for(;i.sibling===null;){if(i.return===null||i.return===r)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}switch(d){case"forwards":for(o=r.child,d=null;o!==null;)i=o.alternate,i!==null&&jh(i)===null&&(d=o),o=o.sibling;o=d,o===null?(d=r.child,r.child=null):(d=o.sibling,o.sibling=null),Nm(r,!1,d,o,p,u);break;case"backwards":case"unstable_legacy-backwards":for(o=null,d=r.child,r.child=null;d!==null;){if(i=d.alternate,i!==null&&jh(i)===null){r.child=d;break}i=d.sibling,d.sibling=o,o=d,d=i}Nm(r,!0,o,null,p,u);break;case"together":Nm(r,!1,null,null,void 0,u);break;default:r.memoizedState=null}return r.child}function Ms(i,r,o){if(i!==null&&(r.dependencies=i.dependencies),Ur|=r.lanes,(o&r.childLanes)===0)if(i!==null){if(Ho(i,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(i!==null&&r.child!==i.child)throw Error(s(153));if(r.child!==null){for(i=r.child,o=Is(i,i.pendingProps),r.child=o,o.return=r;i.sibling!==null;)i=i.sibling,o=o.sibling=Is(i,i.pendingProps),o.return=r;o.sibling=null}return r.child}function Pm(i,r){return(i.lanes&r)!==0?!0:(i=i.dependencies,!!(i!==null&&kh(i)))}function LI(i,r,o){switch(r.tag){case 3:we(r,r.stateNode.containerInfo),Pr(r,qt,i.memoizedState.cache),ja();break;case 27:case 5:Ze(r);break;case 4:we(r,r.stateNode.containerInfo);break;case 10:Pr(r,r.type,r.memoizedProps.value);break;case 31:if(r.memoizedState!==null)return r.flags|=128,tm(r),null;break;case 13:var u=r.memoizedState;if(u!==null)return u.dehydrated!==null?(Mr(r),r.flags|=128,null):(o&r.child.childLanes)!==0?yE(i,r,o):(Mr(r),i=Ms(i,r,o),i!==null?i.sibling:null);Mr(r);break;case 19:var d=(i.flags&128)!==0;if(u=(o&r.childLanes)!==0,u||(Ho(i,r,o,!1),u=(o&r.childLanes)!==0),d){if(u)return EE(i,r,o);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),H(Ot,Ot.current),u)break;return null;case 22:return r.lanes=0,dE(i,r,o,r.pendingProps);case 24:Pr(r,qt,i.memoizedState.cache)}return Ms(i,r,o)}function TE(i,r,o){if(i!==null)if(i.memoizedProps!==r.pendingProps)Ht=!0;else{if(!Pm(i,o)&&(r.flags&128)===0)return Ht=!1,LI(i,r,o);Ht=(i.flags&131072)!==0}else Ht=!1,$e&&(r.flags&1048576)!==0&&Jv(r,yu,r.index);switch(r.lanes=0,r.tag){case 16:e:{var u=r.pendingProps;if(i=Ga(r.elementType),r.type=i,typeof i=="function")Op(i)?(u=Ya(i,u),r.tag=1,r=gE(null,r,i,u,o)):(r.tag=0,r=wm(null,r,i,u,o));else{if(i!=null){var d=i.$$typeof;if(d===_e){r.tag=11,r=uE(null,r,i,u,o);break e}else if(d===D){r.tag=14,r=cE(null,r,i,u,o);break e}}throw r=ht(i)||i,Error(s(306,r,""))}}return r;case 0:return wm(i,r,r.type,r.pendingProps,o);case 1:return u=r.type,d=Ya(u,r.pendingProps),gE(i,r,u,d,o);case 3:e:{if(we(r,r.stateNode.containerInfo),i===null)throw Error(s(387));u=r.pendingProps;var p=r.memoizedState;d=p.element,$p(i,r),Cu(r,u,null,o);var y=r.memoizedState;if(u=y.cache,Pr(r,qt,u),u!==p.cache&&Hp(r,[qt],o,!0),Au(),u=y.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:y.cache},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){r=_E(i,r,u,o);break e}else if(u!==d){d=Ei(Error(s(424)),r),vu(d),r=_E(i,r,u,o);break e}else{switch(i=r.stateNode.containerInfo,i.nodeType){case 9:i=i.body;break;default:i=i.nodeName==="HTML"?i.ownerDocument.body:i}for(Tt=Ai(i.firstChild),dn=r,$e=!0,Ir=null,wi=!0,o=d0(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(ja(),u===d){r=Ms(i,r,o);break e}pn(i,r,u,o)}r=r.child}return r;case 26:return Zh(i,r),i===null?(o=D1(r.type,null,r.pendingProps,null))?r.memoizedState=o:$e||(o=r.type,i=r.pendingProps,u=md(de.current).createElement(o),u[It]=r,u[hn]=i,mn(u,o,i),Mt(u),r.stateNode=u):r.memoizedState=D1(r.type,i.memoizedProps,r.pendingProps,i.memoizedState),null;case 27:return Ze(r),i===null&&$e&&(u=r.stateNode=N1(r.type,r.pendingProps,de.current),dn=r,wi=!0,d=Tt,Fr(r.type)?(ug=d,Tt=Ai(u.firstChild)):Tt=d),pn(i,r,r.pendingProps.children,o),Zh(i,r),i===null&&(r.flags|=4194304),r.child;case 5:return i===null&&$e&&((d=u=Tt)&&(u=d2(u,r.type,r.pendingProps,wi),u!==null?(r.stateNode=u,dn=r,Tt=Ai(u.firstChild),wi=!1,d=!0):d=!1),d||Nr(r)),Ze(r),d=r.type,p=r.pendingProps,y=i!==null?i.memoizedProps:null,u=p.children,sg(d,p)?u=null:y!==null&&sg(d,y)&&(r.flags|=32),r.memoizedState!==null&&(d=im(i,r,RI,null,null,o),Ku._currentValue=d),Zh(i,r),pn(i,r,u,o),r.child;case 6:return i===null&&$e&&((i=o=Tt)&&(o=f2(o,r.pendingProps,wi),o!==null?(r.stateNode=o,dn=r,Tt=null,i=!0):i=!1),i||Nr(r)),null;case 13:return yE(i,r,o);case 4:return we(r,r.stateNode.containerInfo),u=r.pendingProps,i===null?r.child=Qa(r,null,u,o):pn(i,r,u,o),r.child;case 11:return uE(i,r,r.type,r.pendingProps,o);case 7:return pn(i,r,r.pendingProps,o),r.child;case 8:return pn(i,r,r.pendingProps.children,o),r.child;case 12:return pn(i,r,r.pendingProps.children,o),r.child;case 10:return u=r.pendingProps,Pr(r,r.type,u.value),pn(i,r,u.children,o),r.child;case 9:return d=r.type._context,u=r.pendingProps.children,Fa(r),d=fn(d),u=u(d),r.flags|=1,pn(i,r,u,o),r.child;case 14:return cE(i,r,r.type,r.pendingProps,o);case 15:return hE(i,r,r.type,r.pendingProps,o);case 19:return EE(i,r,o);case 31:return OI(i,r,o);case 22:return dE(i,r,o,r.pendingProps);case 24:return Fa(r),u=fn(qt),i===null?(d=Qp(),d===null&&(d=mt,p=Gp(),d.pooledCache=p,p.refCount++,p!==null&&(d.pooledCacheLanes|=o),d=p),r.memoizedState={parent:u,cache:d},Yp(r),Pr(r,qt,d)):((i.lanes&o)!==0&&($p(i,r),Cu(r,null,null,o),Au()),d=i.memoizedState,p=r.memoizedState,d.parent!==u?(d={parent:u,cache:u},r.memoizedState=d,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=d),Pr(r,qt,u)):(u=p.cache,Pr(r,qt,u),u!==d.cache&&Hp(r,[qt],o,!0))),pn(i,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}function Os(i){i.flags|=4}function xm(i,r,o,u,d){if((r=(i.mode&32)!==0)&&(r=!1),r){if(i.flags|=16777216,(d&335544128)===d)if(i.stateNode.complete)i.flags|=8192;else if(WE())i.flags|=8192;else throw Ka=Vh,Wp}else i.flags&=-16777217}function bE(i,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!V1(r))if(WE())i.flags|=8192;else throw Ka=Vh,Wp}function ed(i,r){r!==null&&(i.flags|=4),i.flags&16384&&(r=i.tag!==22?Zl():536870912,i.lanes|=r,nl|=r)}function Du(i,r){if(!$e)switch(i.tailMode){case"hidden":r=i.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?i.tail=null:o.sibling=null;break;case"collapsed":o=i.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||i.tail===null?i.tail=null:i.tail.sibling=null:u.sibling=null}}function bt(i){var r=i.alternate!==null&&i.alternate.child===i.child,o=0,u=0;if(r)for(var d=i.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&65011712,u|=d.flags&65011712,d.return=i,d=d.sibling;else for(d=i.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=i,d=d.sibling;return i.subtreeFlags|=u,i.childLanes=o,r}function VI(i,r,o){var u=r.pendingProps;switch(Bp(r),r.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bt(r),null;case 1:return bt(r),null;case 3:return o=r.stateNode,u=null,i!==null&&(u=i.memoizedState.cache),r.memoizedState.cache!==u&&(r.flags|=2048),xs(qt),Ae(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(i===null||i.child===null)&&(Fo(r)?Os(r):i===null||i.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,jp())),bt(r),null;case 26:var d=r.type,p=r.memoizedState;return i===null?(Os(r),p!==null?(bt(r),bE(r,p)):(bt(r),xm(r,d,null,u,o))):p?p!==i.memoizedState?(Os(r),bt(r),bE(r,p)):(bt(r),r.flags&=-16777217):(i=i.memoizedProps,i!==u&&Os(r),bt(r),xm(r,d,i,u,o)),null;case 27:if(Ye(r),o=de.current,d=r.type,i!==null&&r.stateNode!=null)i.memoizedProps!==u&&Os(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return bt(r),null}i=z.current,Fo(r)?t0(r):(i=N1(d,u,o),r.stateNode=i,Os(r))}return bt(r),null;case 5:if(Ye(r),d=r.type,i!==null&&r.stateNode!=null)i.memoizedProps!==u&&Os(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return bt(r),null}if(p=z.current,Fo(r))t0(r);else{var y=md(de.current);switch(p){case 1:p=y.createElementNS("http://www.w3.org/2000/svg",d);break;case 2:p=y.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;default:switch(d){case"svg":p=y.createElementNS("http://www.w3.org/2000/svg",d);break;case"math":p=y.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;case"script":p=y.createElement("div"),p.innerHTML="<script><\/script>",p=p.removeChild(p.firstChild);break;case"select":p=typeof u.is=="string"?y.createElement("select",{is:u.is}):y.createElement("select"),u.multiple?p.multiple=!0:u.size&&(p.size=u.size);break;default:p=typeof u.is=="string"?y.createElement(d,{is:u.is}):y.createElement(d)}}p[It]=r,p[hn]=u;e:for(y=r.child;y!==null;){if(y.tag===5||y.tag===6)p.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===r)break e;for(;y.sibling===null;){if(y.return===null||y.return===r)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}r.stateNode=p;e:switch(mn(p,d,u),d){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}u&&Os(r)}}return bt(r),xm(r,r.type,i===null?null:i.memoizedProps,r.pendingProps,o),null;case 6:if(i&&r.stateNode!=null)i.memoizedProps!==u&&Os(r);else{if(typeof u!="string"&&r.stateNode===null)throw Error(s(166));if(i=de.current,Fo(r)){if(i=r.stateNode,o=r.memoizedProps,u=null,d=dn,d!==null)switch(d.tag){case 27:case 5:u=d.memoizedProps}i[It]=r,i=!!(i.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||y1(i.nodeValue,o)),i||Nr(r,!0)}else i=md(i).createTextNode(u),i[It]=r,r.stateNode=i}return bt(r),null;case 31:if(o=r.memoizedState,i===null||i.memoizedState!==null){if(u=Fo(r),o!==null){if(i===null){if(!u)throw Error(s(318));if(i=r.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(557));i[It]=r}else ja(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;bt(r),i=!1}else o=jp(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=o),i=!0;if(!i)return r.flags&256?(ui(r),r):(ui(r),null);if((r.flags&128)!==0)throw Error(s(558))}return bt(r),null;case 13:if(u=r.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(d=Fo(r),u!==null&&u.dehydrated!==null){if(i===null){if(!d)throw Error(s(318));if(d=r.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(s(317));d[It]=r}else ja(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;bt(r),d=!1}else d=jp(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=d),d=!0;if(!d)return r.flags&256?(ui(r),r):(ui(r),null)}return ui(r),(r.flags&128)!==0?(r.lanes=o,r):(o=u!==null,i=i!==null&&i.memoizedState!==null,o&&(u=r.child,d=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(d=u.alternate.memoizedState.cachePool.pool),p=null,u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(p=u.memoizedState.cachePool.pool),p!==d&&(u.flags|=2048)),o!==i&&o&&(r.child.flags|=8192),ed(r,r.updateQueue),bt(r),null);case 4:return Ae(),i===null&&Jm(r.stateNode.containerInfo),bt(r),null;case 10:return xs(r.type),bt(r),null;case 19:if(M(Ot),u=r.memoizedState,u===null)return bt(r),null;if(d=(r.flags&128)!==0,p=u.rendering,p===null)if(d)Du(u,!1);else{if(xt!==0||i!==null&&(i.flags&128)!==0)for(i=r.child;i!==null;){if(p=jh(i),p!==null){for(r.flags|=128,Du(u,!1),i=p.updateQueue,r.updateQueue=i,ed(r,i),r.subtreeFlags=0,i=o,o=r.child;o!==null;)$v(o,i),o=o.sibling;return H(Ot,Ot.current&1|2),$e&&Ns(r,u.treeForkCount),r.child}i=i.sibling}u.tail!==null&&Bt()>rd&&(r.flags|=128,d=!0,Du(u,!1),r.lanes=4194304)}else{if(!d)if(i=jh(p),i!==null){if(r.flags|=128,d=!0,i=i.updateQueue,r.updateQueue=i,ed(r,i),Du(u,!0),u.tail===null&&u.tailMode==="hidden"&&!p.alternate&&!$e)return bt(r),null}else 2*Bt()-u.renderingStartTime>rd&&o!==536870912&&(r.flags|=128,d=!0,Du(u,!1),r.lanes=4194304);u.isBackwards?(p.sibling=r.child,r.child=p):(i=u.last,i!==null?i.sibling=p:r.child=p,u.last=p)}return u.tail!==null?(i=u.tail,u.rendering=i,u.tail=i.sibling,u.renderingStartTime=Bt(),i.sibling=null,o=Ot.current,H(Ot,d?o&1|2:o&1),$e&&Ns(r,u.treeForkCount),i):(bt(r),null);case 22:case 23:return ui(r),em(),u=r.memoizedState!==null,i!==null?i.memoizedState!==null!==u&&(r.flags|=8192):u&&(r.flags|=8192),u?(o&536870912)!==0&&(r.flags&128)===0&&(bt(r),r.subtreeFlags&6&&(r.flags|=8192)):bt(r),o=r.updateQueue,o!==null&&ed(r,o.retryQueue),o=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==o&&(r.flags|=2048),i!==null&&M(Ha),null;case 24:return o=null,i!==null&&(o=i.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),xs(qt),bt(r),null;case 25:return null;case 30:return null}throw Error(s(156,r.tag))}function UI(i,r){switch(Bp(r),r.tag){case 1:return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 3:return xs(qt),Ae(),i=r.flags,(i&65536)!==0&&(i&128)===0?(r.flags=i&-65537|128,r):null;case 26:case 27:case 5:return Ye(r),null;case 31:if(r.memoizedState!==null){if(ui(r),r.alternate===null)throw Error(s(340));ja()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 13:if(ui(r),i=r.memoizedState,i!==null&&i.dehydrated!==null){if(r.alternate===null)throw Error(s(340));ja()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 19:return M(Ot),null;case 4:return Ae(),null;case 10:return xs(r.type),null;case 22:case 23:return ui(r),em(),i!==null&&M(Ha),i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 24:return xs(qt),null;case 25:return null;default:return null}}function wE(i,r){switch(Bp(r),r.tag){case 3:xs(qt),Ae();break;case 26:case 27:case 5:Ye(r);break;case 4:Ae();break;case 31:r.memoizedState!==null&&ui(r);break;case 13:ui(r);break;case 19:M(Ot);break;case 10:xs(r.type);break;case 22:case 23:ui(r),em(),i!==null&&M(Ha);break;case 24:xs(qt)}}function ku(i,r){try{var o=r.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&i)===i){u=void 0;var p=o.create,y=o.inst;u=p(),y.destroy=u}o=o.next}while(o!==d)}}catch(S){ct(r,r.return,S)}}function Lr(i,r,o){try{var u=r.updateQueue,d=u!==null?u.lastEffect:null;if(d!==null){var p=d.next;u=p;do{if((u.tag&i)===i){var y=u.inst,S=y.destroy;if(S!==void 0){y.destroy=void 0,d=r;var k=o,Q=S;try{Q()}catch(J){ct(d,k,J)}}}u=u.next}while(u!==p)}}catch(J){ct(r,r.return,J)}}function SE(i){var r=i.updateQueue;if(r!==null){var o=i.stateNode;try{p0(r,o)}catch(u){ct(i,i.return,u)}}}function AE(i,r,o){o.props=Ya(i.type,i.memoizedProps),o.state=i.memoizedState;try{o.componentWillUnmount()}catch(u){ct(i,r,u)}}function Mu(i,r){try{var o=i.ref;if(o!==null){switch(i.tag){case 26:case 27:case 5:var u=i.stateNode;break;case 30:u=i.stateNode;break;default:u=i.stateNode}typeof o=="function"?i.refCleanup=o(u):o.current=u}}catch(d){ct(i,r,d)}}function rs(i,r){var o=i.ref,u=i.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(d){ct(i,r,d)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(d){ct(i,r,d)}else o.current=null}function CE(i){var r=i.type,o=i.memoizedProps,u=i.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(d){ct(i,i.return,d)}}function Dm(i,r,o){try{var u=i.stateNode;a2(u,i.type,o,r),u[hn]=r}catch(d){ct(i,i.return,d)}}function RE(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27&&Fr(i.type)||i.tag===4}function km(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||RE(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.tag===27&&Fr(i.type)||i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Mm(i,r,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,r?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(i,r):(r=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,r.appendChild(i),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=tn));else if(u!==4&&(u===27&&Fr(i.type)&&(o=i.stateNode,r=null),i=i.child,i!==null))for(Mm(i,r,o),i=i.sibling;i!==null;)Mm(i,r,o),i=i.sibling}function td(i,r,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,r?o.insertBefore(i,r):o.appendChild(i);else if(u!==4&&(u===27&&Fr(i.type)&&(o=i.stateNode),i=i.child,i!==null))for(td(i,r,o),i=i.sibling;i!==null;)td(i,r,o),i=i.sibling}function IE(i){var r=i.stateNode,o=i.memoizedProps;try{for(var u=i.type,d=r.attributes;d.length;)r.removeAttributeNode(d[0]);mn(r,u,o),r[It]=i,r[hn]=o}catch(p){ct(i,i.return,p)}}var Ls=!1,Gt=!1,Om=!1,NE=typeof WeakSet=="function"?WeakSet:Set,rn=null;function BI(i,r){if(i=i.containerInfo,ng=bd,i=jv(i),Ip(i)){if("selectionStart"in i)var o={start:i.selectionStart,end:i.selectionEnd};else e:{o=(o=i.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var y=0,S=-1,k=-1,Q=0,J=0,ie=i,W=null;t:for(;;){for(var Y;ie!==o||d!==0&&ie.nodeType!==3||(S=y+d),ie!==p||u!==0&&ie.nodeType!==3||(k=y+u),ie.nodeType===3&&(y+=ie.nodeValue.length),(Y=ie.firstChild)!==null;)W=ie,ie=Y;for(;;){if(ie===i)break t;if(W===o&&++Q===d&&(S=y),W===p&&++J===u&&(k=y),(Y=ie.nextSibling)!==null)break;ie=W,W=ie.parentNode}ie=Y}o=S===-1||k===-1?null:{start:S,end:k}}else o=null}o=o||{start:0,end:0}}else o=null;for(ig={focusedElem:i,selectionRange:o},bd=!1,rn=r;rn!==null;)if(r=rn,i=r.child,(r.subtreeFlags&1028)!==0&&i!==null)i.return=r,rn=i;else for(;rn!==null;){switch(r=rn,p=r.alternate,i=r.flags,r.tag){case 0:if((i&4)!==0&&(i=r.updateQueue,i=i!==null?i.events:null,i!==null))for(o=0;o<i.length;o++)d=i[o],d.ref.impl=d.nextImpl;break;case 11:case 15:break;case 1:if((i&1024)!==0&&p!==null){i=void 0,o=r,d=p.memoizedProps,p=p.memoizedState,u=o.stateNode;try{var ye=Ya(o.type,d);i=u.getSnapshotBeforeUpdate(ye,p),u.__reactInternalSnapshotBeforeUpdate=i}catch(Se){ct(o,o.return,Se)}}break;case 3:if((i&1024)!==0){if(i=r.stateNode.containerInfo,o=i.nodeType,o===9)ag(i);else if(o===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":ag(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(s(163))}if(i=r.sibling,i!==null){i.return=r.return,rn=i;break}rn=r.return}}function PE(i,r,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:Us(i,o),u&4&&ku(5,o);break;case 1:if(Us(i,o),u&4)if(i=o.stateNode,r===null)try{i.componentDidMount()}catch(y){ct(o,o.return,y)}else{var d=Ya(o.type,r.memoizedProps);r=r.memoizedState;try{i.componentDidUpdate(d,r,i.__reactInternalSnapshotBeforeUpdate)}catch(y){ct(o,o.return,y)}}u&64&&SE(o),u&512&&Mu(o,o.return);break;case 3:if(Us(i,o),u&64&&(i=o.updateQueue,i!==null)){if(r=null,o.child!==null)switch(o.child.tag){case 27:case 5:r=o.child.stateNode;break;case 1:r=o.child.stateNode}try{p0(i,r)}catch(y){ct(o,o.return,y)}}break;case 27:r===null&&u&4&&IE(o);case 26:case 5:Us(i,o),r===null&&u&4&&CE(o),u&512&&Mu(o,o.return);break;case 12:Us(i,o);break;case 31:Us(i,o),u&4&&kE(i,o);break;case 13:Us(i,o),u&4&&ME(i,o),u&64&&(i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null&&(o=WI.bind(null,o),p2(i,o))));break;case 22:if(u=o.memoizedState!==null||Ls,!u){r=r!==null&&r.memoizedState!==null||Gt,d=Ls;var p=Gt;Ls=u,(Gt=r)&&!p?Bs(i,o,(o.subtreeFlags&8772)!==0):Us(i,o),Ls=d,Gt=p}break;case 30:break;default:Us(i,o)}}function xE(i){var r=i.alternate;r!==null&&(i.alternate=null,xE(r)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(r=i.stateNode,r!==null&&Ra(r)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var At=null,Hn=!1;function Vs(i,r,o){for(o=o.child;o!==null;)DE(i,r,o),o=o.sibling}function DE(i,r,o){if(En&&typeof En.onCommitFiberUnmount=="function")try{En.onCommitFiberUnmount(Wi,o)}catch{}switch(o.tag){case 26:Gt||rs(o,r),Vs(i,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Gt||rs(o,r);var u=At,d=Hn;Fr(o.type)&&(At=o.stateNode,Hn=!1),Vs(i,r,o),Fu(o.stateNode),At=u,Hn=d;break;case 5:Gt||rs(o,r);case 6:if(u=At,d=Hn,At=null,Vs(i,r,o),At=u,Hn=d,At!==null)if(Hn)try{(At.nodeType===9?At.body:At.nodeName==="HTML"?At.ownerDocument.body:At).removeChild(o.stateNode)}catch(p){ct(o,r,p)}else try{At.removeChild(o.stateNode)}catch(p){ct(o,r,p)}break;case 18:At!==null&&(Hn?(i=At,S1(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,o.stateNode),cl(i)):S1(At,o.stateNode));break;case 4:u=At,d=Hn,At=o.stateNode.containerInfo,Hn=!0,Vs(i,r,o),At=u,Hn=d;break;case 0:case 11:case 14:case 15:Lr(2,o,r),Gt||Lr(4,o,r),Vs(i,r,o);break;case 1:Gt||(rs(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"&&AE(o,r,u)),Vs(i,r,o);break;case 21:Vs(i,r,o);break;case 22:Gt=(u=Gt)||o.memoizedState!==null,Vs(i,r,o),Gt=u;break;default:Vs(i,r,o)}}function kE(i,r){if(r.memoizedState===null&&(i=r.alternate,i!==null&&(i=i.memoizedState,i!==null))){i=i.dehydrated;try{cl(i)}catch(o){ct(r,r.return,o)}}}function ME(i,r){if(r.memoizedState===null&&(i=r.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{cl(i)}catch(o){ct(r,r.return,o)}}function zI(i){switch(i.tag){case 31:case 13:case 19:var r=i.stateNode;return r===null&&(r=i.stateNode=new NE),r;case 22:return i=i.stateNode,r=i._retryCache,r===null&&(r=i._retryCache=new NE),r;default:throw Error(s(435,i.tag))}}function nd(i,r){var o=zI(i);r.forEach(function(u){if(!o.has(u)){o.add(u);var d=YI.bind(null,i,u);u.then(d,d)}})}function Gn(i,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u],p=i,y=r,S=y;e:for(;S!==null;){switch(S.tag){case 27:if(Fr(S.type)){At=S.stateNode,Hn=!1;break e}break;case 5:At=S.stateNode,Hn=!1;break e;case 3:case 4:At=S.stateNode.containerInfo,Hn=!0;break e}S=S.return}if(At===null)throw Error(s(160));DE(p,y,d),At=null,Hn=!1,p=d.alternate,p!==null&&(p.return=null),d.return=null}if(r.subtreeFlags&13886)for(r=r.child;r!==null;)OE(r,i),r=r.sibling}var Oi=null;function OE(i,r){var o=i.alternate,u=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:Gn(r,i),Kn(i),u&4&&(Lr(3,i,i.return),ku(3,i),Lr(5,i,i.return));break;case 1:Gn(r,i),Kn(i),u&512&&(Gt||o===null||rs(o,o.return)),u&64&&Ls&&(i=i.updateQueue,i!==null&&(u=i.callbacks,u!==null&&(o=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var d=Oi;if(Gn(r,i),Kn(i),u&512&&(Gt||o===null||rs(o,o.return)),u&4){var p=o!==null?o.memoizedState:null;if(u=i.memoizedState,o===null)if(u===null)if(i.stateNode===null){e:{u=i.type,o=i.memoizedProps,d=d.ownerDocument||d;t:switch(u){case"title":p=d.getElementsByTagName("title")[0],(!p||p[Es]||p[It]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=d.createElement(u),d.head.insertBefore(p,d.querySelector("head > title"))),mn(p,u,o),p[It]=i,Mt(p),u=p;break e;case"link":var y=O1("link","href",d).get(u+(o.href||""));if(y){for(var S=0;S<y.length;S++)if(p=y[S],p.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&p.getAttribute("rel")===(o.rel==null?null:o.rel)&&p.getAttribute("title")===(o.title==null?null:o.title)&&p.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){y.splice(S,1);break t}}p=d.createElement(u),mn(p,u,o),d.head.appendChild(p);break;case"meta":if(y=O1("meta","content",d).get(u+(o.content||""))){for(S=0;S<y.length;S++)if(p=y[S],p.getAttribute("content")===(o.content==null?null:""+o.content)&&p.getAttribute("name")===(o.name==null?null:o.name)&&p.getAttribute("property")===(o.property==null?null:o.property)&&p.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&p.getAttribute("charset")===(o.charSet==null?null:o.charSet)){y.splice(S,1);break t}}p=d.createElement(u),mn(p,u,o),d.head.appendChild(p);break;default:throw Error(s(468,u))}p[It]=i,Mt(p),u=p}i.stateNode=u}else L1(d,i.type,i.stateNode);else i.stateNode=M1(d,u,i.memoizedProps);else p!==u?(p===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):p.count--,u===null?L1(d,i.type,i.stateNode):M1(d,u,i.memoizedProps)):u===null&&i.stateNode!==null&&Dm(i,i.memoizedProps,o.memoizedProps)}break;case 27:Gn(r,i),Kn(i),u&512&&(Gt||o===null||rs(o,o.return)),o!==null&&u&4&&Dm(i,i.memoizedProps,o.memoizedProps);break;case 5:if(Gn(r,i),Kn(i),u&512&&(Gt||o===null||rs(o,o.return)),i.flags&32){d=i.stateNode;try{yi(d,"")}catch(ye){ct(i,i.return,ye)}}u&4&&i.stateNode!=null&&(d=i.memoizedProps,Dm(i,d,o!==null?o.memoizedProps:d)),u&1024&&(Om=!0);break;case 6:if(Gn(r,i),Kn(i),u&4){if(i.stateNode===null)throw Error(s(162));u=i.memoizedProps,o=i.stateNode;try{o.nodeValue=u}catch(ye){ct(i,i.return,ye)}}break;case 3:if(yd=null,d=Oi,Oi=gd(r.containerInfo),Gn(r,i),Oi=d,Kn(i),u&4&&o!==null&&o.memoizedState.isDehydrated)try{cl(r.containerInfo)}catch(ye){ct(i,i.return,ye)}Om&&(Om=!1,LE(i));break;case 4:u=Oi,Oi=gd(i.stateNode.containerInfo),Gn(r,i),Kn(i),Oi=u;break;case 12:Gn(r,i),Kn(i);break;case 31:Gn(r,i),Kn(i),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,nd(i,u)));break;case 13:Gn(r,i),Kn(i),i.child.flags&8192&&i.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(sd=Bt()),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,nd(i,u)));break;case 22:d=i.memoizedState!==null;var k=o!==null&&o.memoizedState!==null,Q=Ls,J=Gt;if(Ls=Q||d,Gt=J||k,Gn(r,i),Gt=J,Ls=Q,Kn(i),u&8192)e:for(r=i.stateNode,r._visibility=d?r._visibility&-2:r._visibility|1,d&&(o===null||k||Ls||Gt||$a(i)),o=null,r=i;;){if(r.tag===5||r.tag===26){if(o===null){k=o=r;try{if(p=k.stateNode,d)y=p.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{S=k.stateNode;var ie=k.memoizedProps.style,W=ie!=null&&ie.hasOwnProperty("display")?ie.display:null;S.style.display=W==null||typeof W=="boolean"?"":(""+W).trim()}}catch(ye){ct(k,k.return,ye)}}}else if(r.tag===6){if(o===null){k=r;try{k.stateNode.nodeValue=d?"":k.memoizedProps}catch(ye){ct(k,k.return,ye)}}}else if(r.tag===18){if(o===null){k=r;try{var Y=k.stateNode;d?A1(Y,!0):A1(k.stateNode,!1)}catch(ye){ct(k,k.return,ye)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===i)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}u&4&&(u=i.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,nd(i,o))));break;case 19:Gn(r,i),Kn(i),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,nd(i,u)));break;case 30:break;case 21:break;default:Gn(r,i),Kn(i)}}function Kn(i){var r=i.flags;if(r&2){try{for(var o,u=i.return;u!==null;){if(RE(u)){o=u;break}u=u.return}if(o==null)throw Error(s(160));switch(o.tag){case 27:var d=o.stateNode,p=km(i);td(i,p,d);break;case 5:var y=o.stateNode;o.flags&32&&(yi(y,""),o.flags&=-33);var S=km(i);td(i,S,y);break;case 3:case 4:var k=o.stateNode.containerInfo,Q=km(i);Mm(i,Q,k);break;default:throw Error(s(161))}}catch(J){ct(i,i.return,J)}i.flags&=-3}r&4096&&(i.flags&=-4097)}function LE(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var r=i;LE(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),i=i.sibling}}function Us(i,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)PE(i,r.alternate,r),r=r.sibling}function $a(i){for(i=i.child;i!==null;){var r=i;switch(r.tag){case 0:case 11:case 14:case 15:Lr(4,r,r.return),$a(r);break;case 1:rs(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&AE(r,r.return,o),$a(r);break;case 27:Fu(r.stateNode);case 26:case 5:rs(r,r.return),$a(r);break;case 22:r.memoizedState===null&&$a(r);break;case 30:$a(r);break;default:$a(r)}i=i.sibling}}function Bs(i,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var u=r.alternate,d=i,p=r,y=p.flags;switch(p.tag){case 0:case 11:case 15:Bs(d,p,o),ku(4,p);break;case 1:if(Bs(d,p,o),u=p,d=u.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(Q){ct(u,u.return,Q)}if(u=p,d=u.updateQueue,d!==null){var S=u.stateNode;try{var k=d.shared.hiddenCallbacks;if(k!==null)for(d.shared.hiddenCallbacks=null,d=0;d<k.length;d++)f0(k[d],S)}catch(Q){ct(u,u.return,Q)}}o&&y&64&&SE(p),Mu(p,p.return);break;case 27:IE(p);case 26:case 5:Bs(d,p,o),o&&u===null&&y&4&&CE(p),Mu(p,p.return);break;case 12:Bs(d,p,o);break;case 31:Bs(d,p,o),o&&y&4&&kE(d,p);break;case 13:Bs(d,p,o),o&&y&4&&ME(d,p);break;case 22:p.memoizedState===null&&Bs(d,p,o),Mu(p,p.return);break;case 30:break;default:Bs(d,p,o)}r=r.sibling}}function Lm(i,r){var o=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),i=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(i=r.memoizedState.cachePool.pool),i!==o&&(i!=null&&i.refCount++,o!=null&&Eu(o))}function Vm(i,r){i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&Eu(i))}function Li(i,r,o,u){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)VE(i,r,o,u),r=r.sibling}function VE(i,r,o,u){var d=r.flags;switch(r.tag){case 0:case 11:case 15:Li(i,r,o,u),d&2048&&ku(9,r);break;case 1:Li(i,r,o,u);break;case 3:Li(i,r,o,u),d&2048&&(i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&Eu(i)));break;case 12:if(d&2048){Li(i,r,o,u),i=r.stateNode;try{var p=r.memoizedProps,y=p.id,S=p.onPostCommit;typeof S=="function"&&S(y,r.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(k){ct(r,r.return,k)}}else Li(i,r,o,u);break;case 31:Li(i,r,o,u);break;case 13:Li(i,r,o,u);break;case 23:break;case 22:p=r.stateNode,y=r.alternate,r.memoizedState!==null?p._visibility&2?Li(i,r,o,u):Ou(i,r):p._visibility&2?Li(i,r,o,u):(p._visibility|=2,Jo(i,r,o,u,(r.subtreeFlags&10256)!==0||!1)),d&2048&&Lm(y,r);break;case 24:Li(i,r,o,u),d&2048&&Vm(r.alternate,r);break;default:Li(i,r,o,u)}}function Jo(i,r,o,u,d){for(d=d&&((r.subtreeFlags&10256)!==0||!1),r=r.child;r!==null;){var p=i,y=r,S=o,k=u,Q=y.flags;switch(y.tag){case 0:case 11:case 15:Jo(p,y,S,k,d),ku(8,y);break;case 23:break;case 22:var J=y.stateNode;y.memoizedState!==null?J._visibility&2?Jo(p,y,S,k,d):Ou(p,y):(J._visibility|=2,Jo(p,y,S,k,d)),d&&Q&2048&&Lm(y.alternate,y);break;case 24:Jo(p,y,S,k,d),d&&Q&2048&&Vm(y.alternate,y);break;default:Jo(p,y,S,k,d)}r=r.sibling}}function Ou(i,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=i,u=r,d=u.flags;switch(u.tag){case 22:Ou(o,u),d&2048&&Lm(u.alternate,u);break;case 24:Ou(o,u),d&2048&&Vm(u.alternate,u);break;default:Ou(o,u)}r=r.sibling}}var Lu=8192;function el(i,r,o){if(i.subtreeFlags&Lu)for(i=i.child;i!==null;)UE(i,r,o),i=i.sibling}function UE(i,r,o){switch(i.tag){case 26:el(i,r,o),i.flags&Lu&&i.memoizedState!==null&&C2(o,Oi,i.memoizedState,i.memoizedProps);break;case 5:el(i,r,o);break;case 3:case 4:var u=Oi;Oi=gd(i.stateNode.containerInfo),el(i,r,o),Oi=u;break;case 22:i.memoizedState===null&&(u=i.alternate,u!==null&&u.memoizedState!==null?(u=Lu,Lu=16777216,el(i,r,o),Lu=u):el(i,r,o));break;default:el(i,r,o)}}function BE(i){var r=i.alternate;if(r!==null&&(i=r.child,i!==null)){r.child=null;do r=i.sibling,i.sibling=null,i=r;while(i!==null)}}function Vu(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];rn=u,jE(u,i)}BE(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)zE(i),i=i.sibling}function zE(i){switch(i.tag){case 0:case 11:case 15:Vu(i),i.flags&2048&&Lr(9,i,i.return);break;case 3:Vu(i);break;case 12:Vu(i);break;case 22:var r=i.stateNode;i.memoizedState!==null&&r._visibility&2&&(i.return===null||i.return.tag!==13)?(r._visibility&=-3,id(i)):Vu(i);break;default:Vu(i)}}function id(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];rn=u,jE(u,i)}BE(i)}for(i=i.child;i!==null;){switch(r=i,r.tag){case 0:case 11:case 15:Lr(8,r,r.return),id(r);break;case 22:o=r.stateNode,o._visibility&2&&(o._visibility&=-3,id(r));break;default:id(r)}i=i.sibling}}function jE(i,r){for(;rn!==null;){var o=rn;switch(o.tag){case 0:case 11:case 15:Lr(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Eu(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,rn=u;else e:for(o=i;rn!==null;){u=rn;var d=u.sibling,p=u.return;if(xE(u),u===o){rn=null;break e}if(d!==null){d.return=p,rn=d;break e}rn=p}}}var jI={getCacheForType:function(i){var r=fn(qt),o=r.data.get(i);return o===void 0&&(o=i(),r.data.set(i,o)),o},cacheSignal:function(){return fn(qt).controller.signal}},qI=typeof WeakMap=="function"?WeakMap:Map,it=0,mt=null,qe=null,Ke=0,ut=0,ci=null,Vr=!1,tl=!1,Um=!1,zs=0,xt=0,Ur=0,Xa=0,Bm=0,hi=0,nl=0,Uu=null,Qn=null,zm=!1,sd=0,qE=0,rd=1/0,ad=null,Br=null,$t=0,zr=null,il=null,js=0,jm=0,qm=null,FE=null,Bu=0,Fm=null;function di(){return(it&2)!==0&&Ke!==0?Ke&-Ke:Z.T!==null?Ym():vs()}function HE(){if(hi===0)if((Ke&536870912)===0||$e){var i=Yi;Yi<<=1,(Yi&3932160)===0&&(Yi=262144),hi=i}else hi=536870912;return i=li.current,i!==null&&(i.flags|=32),hi}function Wn(i,r,o){(i===mt&&(ut===2||ut===9)||i.cancelPendingCommit!==null)&&(sl(i,0),jr(i,Ke,hi,!1)),cr(i,o),((it&2)===0||i!==mt)&&(i===mt&&((it&2)===0&&(Xa|=o),xt===4&&jr(i,Ke,hi,!1)),as(i))}function GE(i,r,o){if((it&6)!==0)throw Error(s(327));var u=!o&&(r&127)===0&&(r&i.expiredLanes)===0||ur(i,r),d=u?GI(i,r):Gm(i,r,!0),p=u;do{if(d===0){tl&&!u&&jr(i,r,0,!1);break}else{if(o=i.current.alternate,p&&!FI(o)){d=Gm(i,r,!1),p=!1;continue}if(d===2){if(p=r,i.errorRecoveryDisabledLanes&p)var y=0;else y=i.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){r=y;e:{var S=i;d=Uu;var k=S.current.memoizedState.isDehydrated;if(k&&(sl(S,y).flags|=256),y=Gm(S,y,!1),y!==2){if(Um&&!k){S.errorRecoveryDisabledLanes|=p,Xa|=p,d=4;break e}p=Qn,Qn=d,p!==null&&(Qn===null?Qn=p:Qn.push.apply(Qn,p))}d=y}if(p=!1,d!==2)continue}}if(d===1){sl(i,0),jr(i,r,0,!0);break}e:{switch(u=i,p=d,p){case 0:case 1:throw Error(s(345));case 4:if((r&4194048)!==r)break;case 6:jr(u,r,hi,!Vr);break e;case 2:Qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((r&62914560)===r&&(d=sd+300-Bt(),10<d)){if(jr(u,r,hi,!Vr),gi(u,0,!0)!==0)break e;js=r,u.timeoutHandle=b1(KE.bind(null,u,o,Qn,ad,zm,r,hi,Xa,nl,Vr,p,"Throttled",-0,0),d);break e}KE(u,o,Qn,ad,zm,r,hi,Xa,nl,Vr,p,null,-0,0)}}break}while(!0);as(i)}function KE(i,r,o,u,d,p,y,S,k,Q,J,ie,W,Y){if(i.timeoutHandle=-1,ie=r.subtreeFlags,ie&8192||(ie&16785408)===16785408){ie={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:tn},UE(r,p,ie);var ye=(p&62914560)===p?sd-Bt():(p&4194048)===p?qE-Bt():0;if(ye=R2(ie,ye),ye!==null){js=p,i.cancelPendingCommit=ye(e1.bind(null,i,r,p,o,u,d,y,S,k,J,ie,null,W,Y)),jr(i,p,y,!Q);return}}e1(i,r,p,o,u,d,y,S,k)}function FI(i){for(var r=i;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var d=o[u],p=d.getSnapshot;d=d.value;try{if(!ai(p(),d))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function jr(i,r,o,u){r&=~Bm,r&=~Xa,i.suspendedLanes|=r,i.pingedLanes&=~r,u&&(i.warmLanes|=r),u=i.expirationTimes;for(var d=r;0<d;){var p=31-xn(d),y=1<<p;u[p]=-1,d&=~y}o!==0&&Jl(i,o,r)}function od(){return(it&6)===0?(zu(0),!1):!0}function Hm(){if(qe!==null){if(ut===0)var i=qe.return;else i=qe,Ps=qa=null,am(i),Wo=null,bu=0,i=qe;for(;i!==null;)wE(i.alternate,i),i=i.return;qe=null}}function sl(i,r){var o=i.timeoutHandle;o!==-1&&(i.timeoutHandle=-1,u2(o)),o=i.cancelPendingCommit,o!==null&&(i.cancelPendingCommit=null,o()),js=0,Hm(),mt=i,qe=o=Is(i.current,null),Ke=r,ut=0,ci=null,Vr=!1,tl=ur(i,r),Um=!1,nl=hi=Bm=Xa=Ur=xt=0,Qn=Uu=null,zm=!1,(r&8)!==0&&(r|=r&32);var u=i.entangledLanes;if(u!==0)for(i=i.entanglements,u&=r;0<u;){var d=31-xn(u),p=1<<d;r|=i[d],u&=~p}return zs=r,Ih(),o}function QE(i,r){Oe=null,Z.H=Pu,r===Qo||r===Lh?(r=u0(),ut=3):r===Wp?(r=u0(),ut=4):ut=r===bm?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,ci=r,qe===null&&(xt=1,$h(i,Ei(r,i.current)))}function WE(){var i=li.current;return i===null?!0:(Ke&4194048)===Ke?Si===null:(Ke&62914560)===Ke||(Ke&536870912)!==0?i===Si:!1}function YE(){var i=Z.H;return Z.H=Pu,i===null?Pu:i}function $E(){var i=Z.A;return Z.A=jI,i}function ld(){xt=4,Vr||(Ke&4194048)!==Ke&&li.current!==null||(tl=!0),(Ur&134217727)===0&&(Xa&134217727)===0||mt===null||jr(mt,Ke,hi,!1)}function Gm(i,r,o){var u=it;it|=2;var d=YE(),p=$E();(mt!==i||Ke!==r)&&(ad=null,sl(i,r)),r=!1;var y=xt;e:do try{if(ut!==0&&qe!==null){var S=qe,k=ci;switch(ut){case 8:Hm(),y=6;break e;case 3:case 2:case 9:case 6:li.current===null&&(r=!0);var Q=ut;if(ut=0,ci=null,rl(i,S,k,Q),o&&tl){y=0;break e}break;default:Q=ut,ut=0,ci=null,rl(i,S,k,Q)}}HI(),y=xt;break}catch(J){QE(i,J)}while(!0);return r&&i.shellSuspendCounter++,Ps=qa=null,it=u,Z.H=d,Z.A=p,qe===null&&(mt=null,Ke=0,Ih()),y}function HI(){for(;qe!==null;)XE(qe)}function GI(i,r){var o=it;it|=2;var u=YE(),d=$E();mt!==i||Ke!==r?(ad=null,rd=Bt()+500,sl(i,r)):tl=ur(i,r);e:do try{if(ut!==0&&qe!==null){r=qe;var p=ci;t:switch(ut){case 1:ut=0,ci=null,rl(i,r,p,1);break;case 2:case 9:if(o0(p)){ut=0,ci=null,ZE(r);break}r=function(){ut!==2&&ut!==9||mt!==i||(ut=7),as(i)},p.then(r,r);break e;case 3:ut=7;break e;case 4:ut=5;break e;case 7:o0(p)?(ut=0,ci=null,ZE(r)):(ut=0,ci=null,rl(i,r,p,7));break;case 5:var y=null;switch(qe.tag){case 26:y=qe.memoizedState;case 5:case 27:var S=qe;if(y?V1(y):S.stateNode.complete){ut=0,ci=null;var k=S.sibling;if(k!==null)qe=k;else{var Q=S.return;Q!==null?(qe=Q,ud(Q)):qe=null}break t}}ut=0,ci=null,rl(i,r,p,5);break;case 6:ut=0,ci=null,rl(i,r,p,6);break;case 8:Hm(),xt=6;break e;default:throw Error(s(462))}}KI();break}catch(J){QE(i,J)}while(!0);return Ps=qa=null,Z.H=u,Z.A=d,it=o,qe!==null?0:(mt=null,Ke=0,Ih(),xt)}function KI(){for(;qe!==null&&!$l();)XE(qe)}function XE(i){var r=TE(i.alternate,i,zs);i.memoizedProps=i.pendingProps,r===null?ud(i):qe=r}function ZE(i){var r=i,o=r.alternate;switch(r.tag){case 15:case 0:r=mE(o,r,r.pendingProps,r.type,void 0,Ke);break;case 11:r=mE(o,r,r.pendingProps,r.type.render,r.ref,Ke);break;case 5:am(r);default:wE(o,r),r=qe=$v(r,zs),r=TE(o,r,zs)}i.memoizedProps=i.pendingProps,r===null?ud(i):qe=r}function rl(i,r,o,u){Ps=qa=null,am(r),Wo=null,bu=0;var d=r.return;try{if(MI(i,d,r,o,Ke)){xt=1,$h(i,Ei(o,i.current)),qe=null;return}}catch(p){if(d!==null)throw qe=d,p;xt=1,$h(i,Ei(o,i.current)),qe=null;return}r.flags&32768?($e||u===1?i=!0:tl||(Ke&536870912)!==0?i=!1:(Vr=i=!0,(u===2||u===9||u===3||u===6)&&(u=li.current,u!==null&&u.tag===13&&(u.flags|=16384))),JE(r,i)):ud(r)}function ud(i){var r=i;do{if((r.flags&32768)!==0){JE(r,Vr);return}i=r.return;var o=VI(r.alternate,r,zs);if(o!==null){qe=o;return}if(r=r.sibling,r!==null){qe=r;return}qe=r=i}while(r!==null);xt===0&&(xt=5)}function JE(i,r){do{var o=UI(i.alternate,i);if(o!==null){o.flags&=32767,qe=o;return}if(o=i.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(i=i.sibling,i!==null)){qe=i;return}qe=i=o}while(i!==null);xt=6,qe=null}function e1(i,r,o,u,d,p,y,S,k){i.cancelPendingCommit=null;do cd();while($t!==0);if((it&6)!==0)throw Error(s(327));if(r!==null){if(r===i.current)throw Error(s(177));if(p=r.lanes|r.childLanes,p|=kp,cn(i,o,p,y,S,k),i===mt&&(qe=mt=null,Ke=0),il=r,zr=i,js=o,jm=p,qm=d,FE=u,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(i.callbackNode=null,i.callbackPriority=0,$I(Pi,function(){return r1(),null})):(i.callbackNode=null,i.callbackPriority=0),u=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||u){u=Z.T,Z.T=null,d=ue.p,ue.p=2,y=it,it|=4;try{BI(i,r,o)}finally{it=y,ue.p=d,Z.T=u}}$t=1,t1(),n1(),i1()}}function t1(){if($t===1){$t=0;var i=zr,r=il,o=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||o){o=Z.T,Z.T=null;var u=ue.p;ue.p=2;var d=it;it|=4;try{OE(r,i);var p=ig,y=jv(i.containerInfo),S=p.focusedElem,k=p.selectionRange;if(y!==S&&S&&S.ownerDocument&&zv(S.ownerDocument.documentElement,S)){if(k!==null&&Ip(S)){var Q=k.start,J=k.end;if(J===void 0&&(J=Q),"selectionStart"in S)S.selectionStart=Q,S.selectionEnd=Math.min(J,S.value.length);else{var ie=S.ownerDocument||document,W=ie&&ie.defaultView||window;if(W.getSelection){var Y=W.getSelection(),ye=S.textContent.length,Se=Math.min(k.start,ye),pt=k.end===void 0?Se:Math.min(k.end,ye);!Y.extend&&Se>pt&&(y=pt,pt=Se,Se=y);var q=Bv(S,Se),V=Bv(S,pt);if(q&&V&&(Y.rangeCount!==1||Y.anchorNode!==q.node||Y.anchorOffset!==q.offset||Y.focusNode!==V.node||Y.focusOffset!==V.offset)){var K=ie.createRange();K.setStart(q.node,q.offset),Y.removeAllRanges(),Se>pt?(Y.addRange(K),Y.extend(V.node,V.offset)):(K.setEnd(V.node,V.offset),Y.addRange(K))}}}}for(ie=[],Y=S;Y=Y.parentNode;)Y.nodeType===1&&ie.push({element:Y,left:Y.scrollLeft,top:Y.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<ie.length;S++){var ne=ie[S];ne.element.scrollLeft=ne.left,ne.element.scrollTop=ne.top}}bd=!!ng,ig=ng=null}finally{it=d,ue.p=u,Z.T=o}}i.current=r,$t=2}}function n1(){if($t===2){$t=0;var i=zr,r=il,o=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||o){o=Z.T,Z.T=null;var u=ue.p;ue.p=2;var d=it;it|=4;try{PE(i,r.alternate,r)}finally{it=d,ue.p=u,Z.T=o}}$t=3}}function i1(){if($t===4||$t===3){$t=0,wa();var i=zr,r=il,o=js,u=FE;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?$t=5:($t=0,il=zr=null,s1(i,i.pendingLanes));var d=i.pendingLanes;if(d===0&&(Br=null),tu(o),r=r.stateNode,En&&typeof En.onCommitFiberRoot=="function")try{En.onCommitFiberRoot(Wi,r,void 0,(r.current.flags&128)===128)}catch{}if(u!==null){r=Z.T,d=ue.p,ue.p=2,Z.T=null;try{for(var p=i.onRecoverableError,y=0;y<u.length;y++){var S=u[y];p(S.value,{componentStack:S.stack})}}finally{Z.T=r,ue.p=d}}(js&3)!==0&&cd(),as(i),d=i.pendingLanes,(o&261930)!==0&&(d&42)!==0?i===Fm?Bu++:(Bu=0,Fm=i):Bu=0,zu(0)}}function s1(i,r){(i.pooledCacheLanes&=r)===0&&(r=i.pooledCache,r!=null&&(i.pooledCache=null,Eu(r)))}function cd(){return t1(),n1(),i1(),r1()}function r1(){if($t!==5)return!1;var i=zr,r=jm;jm=0;var o=tu(js),u=Z.T,d=ue.p;try{ue.p=32>o?32:o,Z.T=null,o=qm,qm=null;var p=zr,y=js;if($t=0,il=zr=null,js=0,(it&6)!==0)throw Error(s(331));var S=it;if(it|=4,zE(p.current),VE(p,p.current,y,o),it=S,zu(0,!1),En&&typeof En.onPostCommitFiberRoot=="function")try{En.onPostCommitFiberRoot(Wi,p)}catch{}return!0}finally{ue.p=d,Z.T=u,s1(i,r)}}function a1(i,r,o){r=Ei(o,r),r=Tm(i.stateNode,r,2),i=kr(i,r,2),i!==null&&(cr(i,2),as(i))}function ct(i,r,o){if(i.tag===3)a1(i,i,o);else for(;r!==null;){if(r.tag===3){a1(r,i,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Br===null||!Br.has(u))){i=Ei(o,i),o=oE(2),u=kr(r,o,2),u!==null&&(lE(o,u,r,i),cr(u,2),as(u));break}}r=r.return}}function Km(i,r,o){var u=i.pingCache;if(u===null){u=i.pingCache=new qI;var d=new Set;u.set(r,d)}else d=u.get(r),d===void 0&&(d=new Set,u.set(r,d));d.has(o)||(Um=!0,d.add(o),i=QI.bind(null,i,r,o),r.then(i,i))}function QI(i,r,o){var u=i.pingCache;u!==null&&u.delete(r),i.pingedLanes|=i.suspendedLanes&o,i.warmLanes&=~o,mt===i&&(Ke&o)===o&&(xt===4||xt===3&&(Ke&62914560)===Ke&&300>Bt()-sd?(it&2)===0&&sl(i,0):Bm|=o,nl===Ke&&(nl=0)),as(i)}function o1(i,r){r===0&&(r=Zl()),i=Ba(i,r),i!==null&&(cr(i,r),as(i))}function WI(i){var r=i.memoizedState,o=0;r!==null&&(o=r.retryLane),o1(i,o)}function YI(i,r){var o=0;switch(i.tag){case 31:case 13:var u=i.stateNode,d=i.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=i.stateNode;break;case 22:u=i.stateNode._retryCache;break;default:throw Error(s(314))}u!==null&&u.delete(r),o1(i,o)}function $I(i,r){return en(i,r)}var hd=null,al=null,Qm=!1,dd=!1,Wm=!1,qr=0;function as(i){i!==al&&i.next===null&&(al===null?hd=al=i:al=al.next=i),dd=!0,Qm||(Qm=!0,ZI())}function zu(i,r){if(!Wm&&dd){Wm=!0;do for(var o=!1,u=hd;u!==null;){if(i!==0){var d=u.pendingLanes;if(d===0)var p=0;else{var y=u.suspendedLanes,S=u.pingedLanes;p=(1<<31-xn(42|i)+1)-1,p&=d&~(y&~S),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(o=!0,h1(u,p))}else p=Ke,p=gi(u,u===mt?p:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(p&3)===0||ur(u,p)||(o=!0,h1(u,p));u=u.next}while(o);Wm=!1}}function XI(){l1()}function l1(){dd=Qm=!1;var i=0;qr!==0&&l2()&&(i=qr);for(var r=Bt(),o=null,u=hd;u!==null;){var d=u.next,p=u1(u,r);p===0?(u.next=null,o===null?hd=d:o.next=d,d===null&&(al=o)):(o=u,(i!==0||(p&3)!==0)&&(dd=!0)),u=d}$t!==0&&$t!==5||zu(i),qr!==0&&(qr=0)}function u1(i,r){for(var o=i.suspendedLanes,u=i.pingedLanes,d=i.expirationTimes,p=i.pendingLanes&-62914561;0<p;){var y=31-xn(p),S=1<<y,k=d[y];k===-1?((S&o)===0||(S&u)!==0)&&(d[y]=Co(S,r)):k<=r&&(i.expiredLanes|=S),p&=~S}if(r=mt,o=Ke,o=gi(i,i===r?o:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),u=i.callbackNode,o===0||i===r&&(ut===2||ut===9)||i.cancelPendingCommit!==null)return u!==null&&u!==null&&ar(u),i.callbackNode=null,i.callbackPriority=0;if((o&3)===0||ur(i,o)){if(r=o&-o,r===i.callbackPriority)return r;switch(u!==null&&ar(u),tu(o)){case 2:case 8:o=zt;break;case 32:o=Pi;break;case 268435456:o=or;break;default:o=Pi}return u=c1.bind(null,i),o=en(o,u),i.callbackPriority=r,i.callbackNode=o,r}return u!==null&&u!==null&&ar(u),i.callbackPriority=2,i.callbackNode=null,2}function c1(i,r){if($t!==0&&$t!==5)return i.callbackNode=null,i.callbackPriority=0,null;var o=i.callbackNode;if(cd()&&i.callbackNode!==o)return null;var u=Ke;return u=gi(i,i===mt?u:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),u===0?null:(GE(i,u,r),u1(i,Bt()),i.callbackNode!=null&&i.callbackNode===o?c1.bind(null,i):null)}function h1(i,r){if(cd())return null;GE(i,r,!0)}function ZI(){c2(function(){(it&6)!==0?en(Rt,XI):l1()})}function Ym(){if(qr===0){var i=Go;i===0&&(i=Ca,Ca<<=1,(Ca&261888)===0&&(Ca=256)),qr=i}return qr}function d1(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:es(""+i)}function f1(i,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,i.id&&o.setAttribute("form",i.id),r.parentNode.insertBefore(o,r),i=new FormData(i),o.parentNode.removeChild(o),i}function JI(i,r,o,u,d){if(r==="submit"&&o&&o.stateNode===d){var p=d1((d[hn]||null).action),y=u.submitter;y&&(r=(r=y[hn]||null)?d1(r.formAction):y.getAttribute("formAction"),r!==null&&(p=r,y=null));var S=new Da("action","action",null,u,d);i.push({event:S,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(qr!==0){var k=y?f1(d,y):new FormData(d);mm(o,{pending:!0,data:k,method:d.method,action:p},null,k)}}else typeof p=="function"&&(S.preventDefault(),k=y?f1(d,y):new FormData(d),mm(o,{pending:!0,data:k,method:d.method,action:p},p,k))},currentTarget:d}]})}}for(var $m=0;$m<Dp.length;$m++){var Xm=Dp[$m],e2=Xm.toLowerCase(),t2=Xm[0].toUpperCase()+Xm.slice(1);Mi(e2,"on"+t2)}Mi(Hv,"onAnimationEnd"),Mi(Gv,"onAnimationIteration"),Mi(Kv,"onAnimationStart"),Mi("dblclick","onDoubleClick"),Mi("focusin","onFocus"),Mi("focusout","onBlur"),Mi(_I,"onTransitionRun"),Mi(yI,"onTransitionStart"),Mi(vI,"onTransitionCancel"),Mi(Qv,"onTransitionEnd"),Ji("onMouseEnter",["mouseout","mouseover"]),Ji("onMouseLeave",["mouseout","mouseover"]),Ji("onPointerEnter",["pointerout","pointerover"]),Ji("onPointerLeave",["pointerout","pointerover"]),Dn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Dn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Dn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Dn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Dn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Dn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ju="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),n2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ju));function p1(i,r){r=(r&4)!==0;for(var o=0;o<i.length;o++){var u=i[o],d=u.event;u=u.listeners;e:{var p=void 0;if(r)for(var y=u.length-1;0<=y;y--){var S=u[y],k=S.instance,Q=S.currentTarget;if(S=S.listener,k!==p&&d.isPropagationStopped())break e;p=S,d.currentTarget=Q;try{p(d)}catch(J){Rh(J)}d.currentTarget=null,p=k}else for(y=0;y<u.length;y++){if(S=u[y],k=S.instance,Q=S.currentTarget,S=S.listener,k!==p&&d.isPropagationStopped())break e;p=S,d.currentTarget=Q;try{p(d)}catch(J){Rh(J)}d.currentTarget=null,p=k}}}}function Fe(i,r){var o=r[fr];o===void 0&&(o=r[fr]=new Set);var u=i+"__bubble";o.has(u)||(m1(r,i,2,!1),o.add(u))}function Zm(i,r,o){var u=0;r&&(u|=4),m1(o,i,u,r)}var fd="_reactListening"+Math.random().toString(36).slice(2);function Jm(i){if(!i[fd]){i[fd]=!0,Ro.forEach(function(o){o!=="selectionchange"&&(n2.has(o)||Zm(o,!1,i),Zm(o,!0,i))});var r=i.nodeType===9?i:i.ownerDocument;r===null||r[fd]||(r[fd]=!0,Zm("selectionchange",!1,r))}}function m1(i,r,o,u){switch(H1(r)){case 2:var d=P2;break;case 8:d=x2;break;default:d=pg}o=d.bind(null,r,o,i),d=void 0,!uu||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),u?d!==void 0?i.addEventListener(r,o,{capture:!0,passive:d}):i.addEventListener(r,o,!0):d!==void 0?i.addEventListener(r,o,{passive:d}):i.addEventListener(r,o,!1)}function eg(i,r,o,u,d){var p=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var y=u.tag;if(y===3||y===4){var S=u.stateNode.containerInfo;if(S===d)break;if(y===4)for(y=u.return;y!==null;){var k=y.tag;if((k===3||k===4)&&y.stateNode.containerInfo===d)return;y=y.return}for(;S!==null;){if(y=Ts(S),y===null)return;if(k=y.tag,k===5||k===6||k===26||k===27){u=p=y;continue e}S=S.parentNode}}u=u.return}hh(function(){var Q=p,J=Do(o),ie=[];e:{var W=Wv.get(i);if(W!==void 0){var Y=Da,ye=i;switch(i){case"keypress":if(xa(o)===0)break e;case"keydown":case"keyup":Y=Eh;break;case"focusin":ye="focus",Y=wr;break;case"focusout":ye="blur",Y=wr;break;case"beforeblur":case"afterblur":Y=wr;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=fh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=ph;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=bh;break;case Hv:case Gv:case Kv:Y=Oo;break;case Qv:Y=Lo;break;case"scroll":case"scrollend":Y=dh;break;case"wheel":Y=Sh;break;case"copy":case"cut":case"paste":Y=gh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=pu;break;case"toggle":case"beforetoggle":Y=Ar}var Se=(r&4)!==0,pt=!Se&&(i==="scroll"||i==="scrollend"),q=Se?W!==null?W+"Capture":null:W;Se=[];for(var V=Q,K;V!==null;){var ne=V;if(K=ne.stateNode,ne=ne.tag,ne!==5&&ne!==26&&ne!==27||K===null||q===null||(ne=qn(V,q),ne!=null&&Se.push(qu(V,ne,K))),pt)break;V=V.return}0<Se.length&&(W=new Y(W,ye,null,o,J),ie.push({event:W,listeners:Se}))}}if((r&7)===0){e:{if(W=i==="mouseover"||i==="pointerover",Y=i==="mouseout"||i==="pointerout",W&&o!==xo&&(ye=o.relatedTarget||o.fromElement)&&(Ts(ye)||ye[Xi]))break e;if((Y||W)&&(W=J.window===J?J:(W=J.ownerDocument)?W.defaultView||W.parentWindow:window,Y?(ye=o.relatedTarget||o.toElement,Y=Q,ye=ye?Ts(ye):null,ye!==null&&(pt=l(ye),Se=ye.tag,ye!==pt||Se!==5&&Se!==27&&Se!==6)&&(ye=null)):(Y=null,ye=Q),Y!==ye)){if(Se=fh,ne="onMouseLeave",q="onMouseEnter",V="mouse",(i==="pointerout"||i==="pointerover")&&(Se=pu,ne="onPointerLeave",q="onPointerEnter",V="pointer"),pt=Y==null?W:Ia(Y),K=ye==null?W:Ia(ye),W=new Se(ne,V+"leave",Y,o,J),W.target=pt,W.relatedTarget=K,ne=null,Ts(J)===Q&&(Se=new Se(q,V+"enter",ye,o,J),Se.target=K,Se.relatedTarget=pt,ne=Se),pt=ne,Y&&ye)t:{for(Se=i2,q=Y,V=ye,K=0,ne=q;ne;ne=Se(ne))K++;ne=0;for(var Te=V;Te;Te=Se(Te))ne++;for(;0<K-ne;)q=Se(q),K--;for(;0<ne-K;)V=Se(V),ne--;for(;K--;){if(q===V||V!==null&&q===V.alternate){Se=q;break t}q=Se(q),V=Se(V)}Se=null}else Se=null;Y!==null&&g1(ie,W,Y,Se,!1),ye!==null&&pt!==null&&g1(ie,pt,ye,Se,!0)}}e:{if(W=Q?Ia(Q):window,Y=W.nodeName&&W.nodeName.toLowerCase(),Y==="select"||Y==="input"&&W.type==="file")var et=kv;else if(Fn(W))if(Mv)et=pI;else{et=dI;var ve=hI}else Y=W.nodeName,!Y||Y.toLowerCase()!=="input"||W.type!=="checkbox"&&W.type!=="radio"?Q&&ou(Q.elementType)&&(et=kv):et=fI;if(et&&(et=et(i,Q))){La(ie,et,o,J);break e}ve&&ve(i,W,Q),i==="focusout"&&Q&&W.type==="number"&&Q.memoizedProps.value!=null&&Po(W,"number",W.value)}switch(ve=Q?Ia(Q):window,i){case"focusin":(Fn(ve)||ve.contentEditable==="true")&&(Vo=ve,Np=Q,_u=null);break;case"focusout":_u=Np=Vo=null;break;case"mousedown":Pp=!0;break;case"contextmenu":case"mouseup":case"dragend":Pp=!1,qv(ie,o,J);break;case"selectionchange":if(gI)break;case"keydown":case"keyup":qv(ie,o,J)}var Ve;if(_)e:{switch(i){case"compositionstart":var Qe="onCompositionStart";break e;case"compositionend":Qe="onCompositionEnd";break e;case"compositionupdate":Qe="onCompositionUpdate";break e}Qe=void 0}else Ue?lt(i,o)&&(Qe="onCompositionEnd"):i==="keydown"&&o.keyCode===229&&(Qe="onCompositionStart");Qe&&(G&&o.locale!=="ko"&&(Ue||Qe!=="onCompositionStart"?Qe==="onCompositionEnd"&&Ue&&(Ve=vr()):(ri=J,ko="value"in ri?ri.value:ri.textContent,Ue=!0)),ve=pd(Q,Qe),0<ve.length&&(Qe=new hu(Qe,i,null,o,J),ie.push({event:Qe,listeners:ve}),Ve?Qe.data=Ve:(Ve=jt(o),Ve!==null&&(Qe.data=Ve)))),(Ve=A?nn(i,o):sn(i,o))&&(Qe=pd(Q,"onBeforeInput"),0<Qe.length&&(ve=new hu("onBeforeInput","beforeinput",null,o,J),ie.push({event:ve,listeners:Qe}),ve.data=Ve)),JI(ie,i,Q,o,J)}p1(ie,r)})}function qu(i,r,o){return{instance:i,listener:r,currentTarget:o}}function pd(i,r){for(var o=r+"Capture",u=[];i!==null;){var d=i,p=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||p===null||(d=qn(i,o),d!=null&&u.unshift(qu(i,d,p)),d=qn(i,r),d!=null&&u.push(qu(i,d,p))),i.tag===3)return u;i=i.return}return[]}function i2(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function g1(i,r,o,u,d){for(var p=r._reactName,y=[];o!==null&&o!==u;){var S=o,k=S.alternate,Q=S.stateNode;if(S=S.tag,k!==null&&k===u)break;S!==5&&S!==26&&S!==27||Q===null||(k=Q,d?(Q=qn(o,p),Q!=null&&y.unshift(qu(o,Q,k))):d||(Q=qn(o,p),Q!=null&&y.push(qu(o,Q,k)))),o=o.return}y.length!==0&&i.push({event:r,listeners:y})}var s2=/\r\n?/g,r2=/\u0000|\uFFFD/g;function _1(i){return(typeof i=="string"?i:""+i).replace(s2,`
`).replace(r2,"")}function y1(i,r){return r=_1(r),_1(i)===r}function ft(i,r,o,u,d,p){switch(o){case"children":typeof u=="string"?r==="body"||r==="textarea"&&u===""||yi(i,u):(typeof u=="number"||typeof u=="bigint")&&r!=="body"&&yi(i,""+u);break;case"className":gr(i,"class",u);break;case"tabIndex":gr(i,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":gr(i,o,u);break;case"style":uh(i,u,p);break;case"data":if(r!=="object"){gr(i,"data",u);break}case"src":case"href":if(u===""&&(r!=="a"||o!=="href")){i.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=es(""+u),i.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){i.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(o==="formAction"?(r!=="input"&&ft(i,r,"name",d.name,d,null),ft(i,r,"formEncType",d.formEncType,d,null),ft(i,r,"formMethod",d.formMethod,d,null),ft(i,r,"formTarget",d.formTarget,d,null)):(ft(i,r,"encType",d.encType,d,null),ft(i,r,"method",d.method,d,null),ft(i,r,"target",d.target,d,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=es(""+u),i.setAttribute(o,u);break;case"onClick":u!=null&&(i.onclick=tn);break;case"onScroll":u!=null&&Fe("scroll",i);break;case"onScrollEnd":u!=null&&Fe("scrollend",i);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(d.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"multiple":i.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":i.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){i.removeAttribute("xlink:href");break}o=es(""+u),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""+u):i.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""):i.removeAttribute(o);break;case"capture":case"download":u===!0?i.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,u):i.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?i.setAttribute(o,u):i.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?i.removeAttribute(o):i.setAttribute(o,u);break;case"popover":Fe("beforetoggle",i),Fe("toggle",i),mr(i,"popover",u);break;case"xlinkActuate":_i(i,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":_i(i,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":_i(i,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":_i(i,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":_i(i,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":_i(i,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":_i(i,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":_i(i,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":_i(i,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":mr(i,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=wp.get(o)||o,mr(i,o,u))}}function tg(i,r,o,u,d,p){switch(o){case"style":uh(i,u,p);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(d.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"children":typeof u=="string"?yi(i,u):(typeof u=="number"||typeof u=="bigint")&&yi(i,""+u);break;case"onScroll":u!=null&&Fe("scroll",i);break;case"onScrollEnd":u!=null&&Fe("scrollend",i);break;case"onClick":u!=null&&(i.onclick=tn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!pr.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(d=o.endsWith("Capture"),r=o.slice(2,d?o.length-7:void 0),p=i[hn]||null,p=p!=null?p[o]:null,typeof p=="function"&&i.removeEventListener(r,p,d),typeof u=="function")){typeof p!="function"&&p!==null&&(o in i?i[o]=null:i.hasAttribute(o)&&i.removeAttribute(o)),i.addEventListener(r,u,d);break e}o in i?i[o]=u:u===!0?i.setAttribute(o,""):mr(i,o,u)}}}function mn(i,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Fe("error",i),Fe("load",i);var u=!1,d=!1,p;for(p in o)if(o.hasOwnProperty(p)){var y=o[p];if(y!=null)switch(p){case"src":u=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:ft(i,r,p,y,o,null)}}d&&ft(i,r,"srcSet",o.srcSet,o,null),u&&ft(i,r,"src",o.src,o,null);return;case"input":Fe("invalid",i);var S=p=y=d=null,k=null,Q=null;for(u in o)if(o.hasOwnProperty(u)){var J=o[u];if(J!=null)switch(u){case"name":d=J;break;case"type":y=J;break;case"checked":k=J;break;case"defaultChecked":Q=J;break;case"value":p=J;break;case"defaultValue":S=J;break;case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(s(137,r));break;default:ft(i,r,u,J,o,null)}}Na(i,p,S,k,Q,y,d,!1);return;case"select":Fe("invalid",i),u=y=p=null;for(d in o)if(o.hasOwnProperty(d)&&(S=o[d],S!=null))switch(d){case"value":p=S;break;case"defaultValue":y=S;break;case"multiple":u=S;default:ft(i,r,d,S,o,null)}r=p,o=y,i.multiple=!!u,r!=null?Je(i,!!u,r,!1):o!=null&&Je(i,!!u,o,!0);return;case"textarea":Fe("invalid",i),p=d=u=null;for(y in o)if(o.hasOwnProperty(y)&&(S=o[y],S!=null))switch(y){case"value":u=S;break;case"defaultValue":d=S;break;case"children":p=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(s(91));break;default:ft(i,r,y,S,o,null)}yr(i,u,d,p);return;case"option":for(k in o)if(o.hasOwnProperty(k)&&(u=o[k],u!=null))switch(k){case"selected":i.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:ft(i,r,k,u,o,null)}return;case"dialog":Fe("beforetoggle",i),Fe("toggle",i),Fe("cancel",i),Fe("close",i);break;case"iframe":case"object":Fe("load",i);break;case"video":case"audio":for(u=0;u<ju.length;u++)Fe(ju[u],i);break;case"image":Fe("error",i),Fe("load",i);break;case"details":Fe("toggle",i);break;case"embed":case"source":case"link":Fe("error",i),Fe("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in o)if(o.hasOwnProperty(Q)&&(u=o[Q],u!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:ft(i,r,Q,u,o,null)}return;default:if(ou(r)){for(J in o)o.hasOwnProperty(J)&&(u=o[J],u!==void 0&&tg(i,r,J,u,o,void 0));return}}for(S in o)o.hasOwnProperty(S)&&(u=o[S],u!=null&&ft(i,r,S,u,o,null))}function a2(i,r,o,u){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,p=null,y=null,S=null,k=null,Q=null,J=null;for(Y in o){var ie=o[Y];if(o.hasOwnProperty(Y)&&ie!=null)switch(Y){case"checked":break;case"value":break;case"defaultValue":k=ie;default:u.hasOwnProperty(Y)||ft(i,r,Y,null,u,ie)}}for(var W in u){var Y=u[W];if(ie=o[W],u.hasOwnProperty(W)&&(Y!=null||ie!=null))switch(W){case"type":p=Y;break;case"name":d=Y;break;case"checked":Q=Y;break;case"defaultChecked":J=Y;break;case"value":y=Y;break;case"defaultValue":S=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,r));break;default:Y!==ie&&ft(i,r,W,Y,u,ie)}}_r(i,y,S,k,Q,J,p,d);return;case"select":Y=y=S=W=null;for(p in o)if(k=o[p],o.hasOwnProperty(p)&&k!=null)switch(p){case"value":break;case"multiple":Y=k;default:u.hasOwnProperty(p)||ft(i,r,p,null,u,k)}for(d in u)if(p=u[d],k=o[d],u.hasOwnProperty(d)&&(p!=null||k!=null))switch(d){case"value":W=p;break;case"defaultValue":S=p;break;case"multiple":y=p;default:p!==k&&ft(i,r,d,p,u,k)}r=S,o=y,u=Y,W!=null?Je(i,!!o,W,!1):!!u!=!!o&&(r!=null?Je(i,!!o,r,!0):Je(i,!!o,o?[]:"",!1));return;case"textarea":Y=W=null;for(S in o)if(d=o[S],o.hasOwnProperty(S)&&d!=null&&!u.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:ft(i,r,S,null,u,d)}for(y in u)if(d=u[y],p=o[y],u.hasOwnProperty(y)&&(d!=null||p!=null))switch(y){case"value":W=d;break;case"defaultValue":Y=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(s(91));break;default:d!==p&&ft(i,r,y,d,u,p)}Pa(i,W,Y);return;case"option":for(var ye in o)if(W=o[ye],o.hasOwnProperty(ye)&&W!=null&&!u.hasOwnProperty(ye))switch(ye){case"selected":i.selected=!1;break;default:ft(i,r,ye,null,u,W)}for(k in u)if(W=u[k],Y=o[k],u.hasOwnProperty(k)&&W!==Y&&(W!=null||Y!=null))switch(k){case"selected":i.selected=W&&typeof W!="function"&&typeof W!="symbol";break;default:ft(i,r,k,W,u,Y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Se in o)W=o[Se],o.hasOwnProperty(Se)&&W!=null&&!u.hasOwnProperty(Se)&&ft(i,r,Se,null,u,W);for(Q in u)if(W=u[Q],Y=o[Q],u.hasOwnProperty(Q)&&W!==Y&&(W!=null||Y!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(s(137,r));break;default:ft(i,r,Q,W,u,Y)}return;default:if(ou(r)){for(var pt in o)W=o[pt],o.hasOwnProperty(pt)&&W!==void 0&&!u.hasOwnProperty(pt)&&tg(i,r,pt,void 0,u,W);for(J in u)W=u[J],Y=o[J],!u.hasOwnProperty(J)||W===Y||W===void 0&&Y===void 0||tg(i,r,J,W,u,Y);return}}for(var q in o)W=o[q],o.hasOwnProperty(q)&&W!=null&&!u.hasOwnProperty(q)&&ft(i,r,q,null,u,W);for(ie in u)W=u[ie],Y=o[ie],!u.hasOwnProperty(ie)||W===Y||W==null&&Y==null||ft(i,r,ie,W,u,Y)}function v1(i){switch(i){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function o2(){if(typeof performance.getEntriesByType=="function"){for(var i=0,r=0,o=performance.getEntriesByType("resource"),u=0;u<o.length;u++){var d=o[u],p=d.transferSize,y=d.initiatorType,S=d.duration;if(p&&S&&v1(y)){for(y=0,S=d.responseEnd,u+=1;u<o.length;u++){var k=o[u],Q=k.startTime;if(Q>S)break;var J=k.transferSize,ie=k.initiatorType;J&&v1(ie)&&(k=k.responseEnd,y+=J*(k<S?1:(S-Q)/(k-Q)))}if(--u,r+=8*(p+y)/(d.duration/1e3),i++,10<i)break}}if(0<i)return r/i/1e6}return navigator.connection&&(i=navigator.connection.downlink,typeof i=="number")?i:5}var ng=null,ig=null;function md(i){return i.nodeType===9?i:i.ownerDocument}function E1(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function T1(i,r){if(i===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&r==="foreignObject"?0:i}function sg(i,r){return i==="textarea"||i==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var rg=null;function l2(){var i=window.event;return i&&i.type==="popstate"?i===rg?!1:(rg=i,!0):(rg=null,!1)}var b1=typeof setTimeout=="function"?setTimeout:void 0,u2=typeof clearTimeout=="function"?clearTimeout:void 0,w1=typeof Promise=="function"?Promise:void 0,c2=typeof queueMicrotask=="function"?queueMicrotask:typeof w1<"u"?function(i){return w1.resolve(null).then(i).catch(h2)}:b1;function h2(i){setTimeout(function(){throw i})}function Fr(i){return i==="head"}function S1(i,r){var o=r,u=0;do{var d=o.nextSibling;if(i.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"||o==="/&"){if(u===0){i.removeChild(d),cl(r);return}u--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")u++;else if(o==="html")Fu(i.ownerDocument.documentElement);else if(o==="head"){o=i.ownerDocument.head,Fu(o);for(var p=o.firstChild;p;){var y=p.nextSibling,S=p.nodeName;p[Es]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&p.rel.toLowerCase()==="stylesheet"||o.removeChild(p),p=y}}else o==="body"&&Fu(i.ownerDocument.body);o=d}while(o);cl(r)}function A1(i,r){var o=i;i=0;do{var u=o.nextSibling;if(o.nodeType===1?r?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(r?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(i===0)break;i--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||i++;o=u}while(o)}function ag(i){var r=i.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":ag(o),Ra(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}i.removeChild(o)}}function d2(i,r,o,u){for(;i.nodeType===1;){var d=o;if(i.nodeName.toLowerCase()!==r.toLowerCase()){if(!u&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(u){if(!i[Es])switch(r){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(p=i.getAttribute("rel"),p==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(p!==d.rel||i.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||i.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||i.getAttribute("title")!==(d.title==null?null:d.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(p=i.getAttribute("src"),(p!==(d.src==null?null:d.src)||i.getAttribute("type")!==(d.type==null?null:d.type)||i.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&p&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(r==="input"&&i.type==="hidden"){var p=d.name==null?null:""+d.name;if(d.type==="hidden"&&i.getAttribute("name")===p)return i}else return i;if(i=Ai(i.nextSibling),i===null)break}return null}function f2(i,r,o){if(r==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!o||(i=Ai(i.nextSibling),i===null))return null;return i}function C1(i,r){for(;i.nodeType!==8;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!r||(i=Ai(i.nextSibling),i===null))return null;return i}function og(i){return i.data==="$?"||i.data==="$~"}function lg(i){return i.data==="$!"||i.data==="$?"&&i.ownerDocument.readyState!=="loading"}function p2(i,r){var o=i.ownerDocument;if(i.data==="$~")i._reactRetry=r;else if(i.data!=="$?"||o.readyState!=="loading")r();else{var u=function(){r(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),i._reactRetry=u}}function Ai(i){for(;i!=null;i=i.nextSibling){var r=i.nodeType;if(r===1||r===3)break;if(r===8){if(r=i.data,r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"||r==="F!"||r==="F")break;if(r==="/$"||r==="/&")return null}}return i}var ug=null;function R1(i){i=i.nextSibling;for(var r=0;i;){if(i.nodeType===8){var o=i.data;if(o==="/$"||o==="/&"){if(r===0)return Ai(i.nextSibling);r--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||r++}i=i.nextSibling}return null}function I1(i){i=i.previousSibling;for(var r=0;i;){if(i.nodeType===8){var o=i.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(r===0)return i;r--}else o!=="/$"&&o!=="/&"||r++}i=i.previousSibling}return null}function N1(i,r,o){switch(r=md(o),i){case"html":if(i=r.documentElement,!i)throw Error(s(452));return i;case"head":if(i=r.head,!i)throw Error(s(453));return i;case"body":if(i=r.body,!i)throw Error(s(454));return i;default:throw Error(s(451))}}function Fu(i){for(var r=i.attributes;r.length;)i.removeAttributeNode(r[0]);Ra(i)}var Ci=new Map,P1=new Set;function gd(i){return typeof i.getRootNode=="function"?i.getRootNode():i.nodeType===9?i:i.ownerDocument}var qs=ue.d;ue.d={f:m2,r:g2,D:_2,C:y2,L:v2,m:E2,X:b2,S:T2,M:w2};function m2(){var i=qs.f(),r=od();return i||r}function g2(i){var r=bs(i);r!==null&&r.tag===5&&r.type==="form"?Q0(r):qs.r(i)}var ol=typeof document>"u"?null:document;function x1(i,r,o){var u=ol;if(u&&typeof r=="string"&&r){var d=Nt(r);d='link[rel="'+i+'"][href="'+d+'"]',typeof o=="string"&&(d+='[crossorigin="'+o+'"]'),P1.has(d)||(P1.add(d),i={rel:i,crossOrigin:o,href:r},u.querySelector(d)===null&&(r=u.createElement("link"),mn(r,"link",i),Mt(r),u.head.appendChild(r)))}}function _2(i){qs.D(i),x1("dns-prefetch",i,null)}function y2(i,r){qs.C(i,r),x1("preconnect",i,r)}function v2(i,r,o){qs.L(i,r,o);var u=ol;if(u&&i&&r){var d='link[rel="preload"][as="'+Nt(r)+'"]';r==="image"&&o&&o.imageSrcSet?(d+='[imagesrcset="'+Nt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(d+='[imagesizes="'+Nt(o.imageSizes)+'"]')):d+='[href="'+Nt(i)+'"]';var p=d;switch(r){case"style":p=ll(i);break;case"script":p=ul(i)}Ci.has(p)||(i=T({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:i,as:r},o),Ci.set(p,i),u.querySelector(d)!==null||r==="style"&&u.querySelector(Hu(p))||r==="script"&&u.querySelector(Gu(p))||(r=u.createElement("link"),mn(r,"link",i),Mt(r),u.head.appendChild(r)))}}function E2(i,r){qs.m(i,r);var o=ol;if(o&&i){var u=r&&typeof r.as=="string"?r.as:"script",d='link[rel="modulepreload"][as="'+Nt(u)+'"][href="'+Nt(i)+'"]',p=d;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=ul(i)}if(!Ci.has(p)&&(i=T({rel:"modulepreload",href:i},r),Ci.set(p,i),o.querySelector(d)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Gu(p)))return}u=o.createElement("link"),mn(u,"link",i),Mt(u),o.head.appendChild(u)}}}function T2(i,r,o){qs.S(i,r,o);var u=ol;if(u&&i){var d=Di(u).hoistableStyles,p=ll(i);r=r||"default";var y=d.get(p);if(!y){var S={loading:0,preload:null};if(y=u.querySelector(Hu(p)))S.loading=5;else{i=T({rel:"stylesheet",href:i,"data-precedence":r},o),(o=Ci.get(p))&&cg(i,o);var k=y=u.createElement("link");Mt(k),mn(k,"link",i),k._p=new Promise(function(Q,J){k.onload=Q,k.onerror=J}),k.addEventListener("load",function(){S.loading|=1}),k.addEventListener("error",function(){S.loading|=2}),S.loading|=4,_d(y,r,u)}y={type:"stylesheet",instance:y,count:1,state:S},d.set(p,y)}}}function b2(i,r){qs.X(i,r);var o=ol;if(o&&i){var u=Di(o).hoistableScripts,d=ul(i),p=u.get(d);p||(p=o.querySelector(Gu(d)),p||(i=T({src:i,async:!0},r),(r=Ci.get(d))&&hg(i,r),p=o.createElement("script"),Mt(p),mn(p,"link",i),o.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},u.set(d,p))}}function w2(i,r){qs.M(i,r);var o=ol;if(o&&i){var u=Di(o).hoistableScripts,d=ul(i),p=u.get(d);p||(p=o.querySelector(Gu(d)),p||(i=T({src:i,async:!0,type:"module"},r),(r=Ci.get(d))&&hg(i,r),p=o.createElement("script"),Mt(p),mn(p,"link",i),o.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},u.set(d,p))}}function D1(i,r,o,u){var d=(d=de.current)?gd(d):null;if(!d)throw Error(s(446));switch(i){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=ll(o.href),o=Di(d).hoistableStyles,u=o.get(r),u||(u={type:"style",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){i=ll(o.href);var p=Di(d).hoistableStyles,y=p.get(i);if(y||(d=d.ownerDocument||d,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(i,y),(p=d.querySelector(Hu(i)))&&!p._p&&(y.instance=p,y.state.loading=5),Ci.has(i)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Ci.set(i,o),p||S2(d,i,o,y.state))),r&&u===null)throw Error(s(528,""));return y}if(r&&u!==null)throw Error(s(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=ul(o),o=Di(d).hoistableScripts,u=o.get(r),u||(u={type:"script",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,i))}}function ll(i){return'href="'+Nt(i)+'"'}function Hu(i){return'link[rel="stylesheet"]['+i+"]"}function k1(i){return T({},i,{"data-precedence":i.precedence,precedence:null})}function S2(i,r,o,u){i.querySelector('link[rel="preload"][as="style"]['+r+"]")?u.loading=1:(r=i.createElement("link"),u.preload=r,r.addEventListener("load",function(){return u.loading|=1}),r.addEventListener("error",function(){return u.loading|=2}),mn(r,"link",o),Mt(r),i.head.appendChild(r))}function ul(i){return'[src="'+Nt(i)+'"]'}function Gu(i){return"script[async]"+i}function M1(i,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var u=i.querySelector('style[data-href~="'+Nt(o.href)+'"]');if(u)return r.instance=u,Mt(u),u;var d=T({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(i.ownerDocument||i).createElement("style"),Mt(u),mn(u,"style",d),_d(u,o.precedence,i),r.instance=u;case"stylesheet":d=ll(o.href);var p=i.querySelector(Hu(d));if(p)return r.state.loading|=4,r.instance=p,Mt(p),p;u=k1(o),(d=Ci.get(d))&&cg(u,d),p=(i.ownerDocument||i).createElement("link"),Mt(p);var y=p;return y._p=new Promise(function(S,k){y.onload=S,y.onerror=k}),mn(p,"link",u),r.state.loading|=4,_d(p,o.precedence,i),r.instance=p;case"script":return p=ul(o.src),(d=i.querySelector(Gu(p)))?(r.instance=d,Mt(d),d):(u=o,(d=Ci.get(p))&&(u=T({},o),hg(u,d)),i=i.ownerDocument||i,d=i.createElement("script"),Mt(d),mn(d,"link",u),i.head.appendChild(d),r.instance=d);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(u=r.instance,r.state.loading|=4,_d(u,o.precedence,i));return r.instance}function _d(i,r,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=u.length?u[u.length-1]:null,p=d,y=0;y<u.length;y++){var S=u[y];if(S.dataset.precedence===r)p=S;else if(p!==d)break}p?p.parentNode.insertBefore(i,p.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(i,r.firstChild))}function cg(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.title==null&&(i.title=r.title)}function hg(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.integrity==null&&(i.integrity=r.integrity)}var yd=null;function O1(i,r,o){if(yd===null){var u=new Map,d=yd=new Map;d.set(o,u)}else d=yd,u=d.get(o),u||(u=new Map,d.set(o,u));if(u.has(i))return u;for(u.set(i,null),o=o.getElementsByTagName(i),d=0;d<o.length;d++){var p=o[d];if(!(p[Es]||p[It]||i==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var y=p.getAttribute(r)||"";y=i+y;var S=u.get(y);S?S.push(p):u.set(y,[p])}}return u}function L1(i,r,o){i=i.ownerDocument||i,i.head.insertBefore(o,r==="title"?i.querySelector("head > title"):null)}function A2(i,r,o){if(o===1||r.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return i=r.disabled,typeof r.precedence=="string"&&i==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function V1(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}function C2(i,r,o,u){if(o.type==="stylesheet"&&(typeof u.media!="string"||matchMedia(u.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var d=ll(u.href),p=r.querySelector(Hu(d));if(p){r=p._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(i.count++,i=vd.bind(i),r.then(i,i)),o.state.loading|=4,o.instance=p,Mt(p);return}p=r.ownerDocument||r,u=k1(u),(d=Ci.get(d))&&cg(u,d),p=p.createElement("link"),Mt(p);var y=p;y._p=new Promise(function(S,k){y.onload=S,y.onerror=k}),mn(p,"link",u),o.instance=p}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(o,r),(r=o.state.preload)&&(o.state.loading&3)===0&&(i.count++,o=vd.bind(i),r.addEventListener("load",o),r.addEventListener("error",o))}}var dg=0;function R2(i,r){return i.stylesheets&&i.count===0&&Td(i,i.stylesheets),0<i.count||0<i.imgCount?function(o){var u=setTimeout(function(){if(i.stylesheets&&Td(i,i.stylesheets),i.unsuspend){var p=i.unsuspend;i.unsuspend=null,p()}},6e4+r);0<i.imgBytes&&dg===0&&(dg=62500*o2());var d=setTimeout(function(){if(i.waitingForImages=!1,i.count===0&&(i.stylesheets&&Td(i,i.stylesheets),i.unsuspend)){var p=i.unsuspend;i.unsuspend=null,p()}},(i.imgBytes>dg?50:800)+r);return i.unsuspend=o,function(){i.unsuspend=null,clearTimeout(u),clearTimeout(d)}}:null}function vd(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Td(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var Ed=null;function Td(i,r){i.stylesheets=null,i.unsuspend!==null&&(i.count++,Ed=new Map,r.forEach(I2,i),Ed=null,vd.call(i))}function I2(i,r){if(!(r.state.loading&4)){var o=Ed.get(i);if(o)var u=o.get(null);else{o=new Map,Ed.set(i,o);for(var d=i.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<d.length;p++){var y=d[p];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(o.set(y.dataset.precedence,y),u=y)}u&&o.set(null,u)}d=r.instance,y=d.getAttribute("data-precedence"),p=o.get(y)||u,p===u&&o.set(null,d),o.set(y,d),this.count++,u=vd.bind(this),d.addEventListener("load",u),d.addEventListener("error",u),p?p.parentNode.insertBefore(d,p.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(d,i.firstChild)),r.state.loading|=4}}var Ku={$$typeof:le,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function N2(i,r,o,u,d,p,y,S,k){this.tag=1,this.containerInfo=i,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ys(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ys(0),this.hiddenUpdates=ys(null),this.identifierPrefix=u,this.onUncaughtError=d,this.onCaughtError=p,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function U1(i,r,o,u,d,p,y,S,k,Q,J,ie){return i=new N2(i,r,o,y,k,Q,J,ie,S),r=1,p===!0&&(r|=24),p=oi(3,null,null,r),i.current=p,p.stateNode=i,r=Gp(),r.refCount++,i.pooledCache=r,r.refCount++,p.memoizedState={element:u,isDehydrated:o,cache:r},Yp(p),i}function B1(i){return i?(i=zo,i):zo}function z1(i,r,o,u,d,p){d=B1(d),u.context===null?u.context=d:u.pendingContext=d,u=Dr(r),u.payload={element:o},p=p===void 0?null:p,p!==null&&(u.callback=p),o=kr(i,u,r),o!==null&&(Wn(o,i,r),Su(o,i,r))}function j1(i,r){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var o=i.retryLane;i.retryLane=o!==0&&o<r?o:r}}function fg(i,r){j1(i,r),(i=i.alternate)&&j1(i,r)}function q1(i){if(i.tag===13||i.tag===31){var r=Ba(i,67108864);r!==null&&Wn(r,i,67108864),fg(i,67108864)}}function F1(i){if(i.tag===13||i.tag===31){var r=di();r=eu(r);var o=Ba(i,r);o!==null&&Wn(o,i,r),fg(i,r)}}var bd=!0;function P2(i,r,o,u){var d=Z.T;Z.T=null;var p=ue.p;try{ue.p=2,pg(i,r,o,u)}finally{ue.p=p,Z.T=d}}function x2(i,r,o,u){var d=Z.T;Z.T=null;var p=ue.p;try{ue.p=8,pg(i,r,o,u)}finally{ue.p=p,Z.T=d}}function pg(i,r,o,u){if(bd){var d=mg(u);if(d===null)eg(i,r,u,wd,o),G1(i,u);else if(k2(d,i,r,o,u))u.stopPropagation();else if(G1(i,u),r&4&&-1<D2.indexOf(i)){for(;d!==null;){var p=bs(d);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var y=xi(p.pendingLanes);if(y!==0){var S=p;for(S.pendingLanes|=2,S.entangledLanes|=2;y;){var k=1<<31-xn(y);S.entanglements[1]|=k,y&=~k}as(p),(it&6)===0&&(rd=Bt()+500,zu(0))}}break;case 31:case 13:S=Ba(p,2),S!==null&&Wn(S,p,2),od(),fg(p,2)}if(p=mg(u),p===null&&eg(i,r,u,wd,o),p===d)break;d=p}d!==null&&u.stopPropagation()}else eg(i,r,u,null,o)}}function mg(i){return i=Do(i),gg(i)}var wd=null;function gg(i){if(wd=null,i=Ts(i),i!==null){var r=l(i);if(r===null)i=null;else{var o=r.tag;if(o===13){if(i=c(r),i!==null)return i;i=null}else if(o===31){if(i=f(r),i!==null)return i;i=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;i=null}else r!==i&&(i=null)}}return wd=i,null}function H1(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ao()){case Rt:return 2;case zt:return 8;case Pi:case Sa:return 32;case or:return 268435456;default:return 32}default:return 32}}var _g=!1,Hr=null,Gr=null,Kr=null,Qu=new Map,Wu=new Map,Qr=[],D2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function G1(i,r){switch(i){case"focusin":case"focusout":Hr=null;break;case"dragenter":case"dragleave":Gr=null;break;case"mouseover":case"mouseout":Kr=null;break;case"pointerover":case"pointerout":Qu.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wu.delete(r.pointerId)}}function Yu(i,r,o,u,d,p){return i===null||i.nativeEvent!==p?(i={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:p,targetContainers:[d]},r!==null&&(r=bs(r),r!==null&&q1(r)),i):(i.eventSystemFlags|=u,r=i.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),i)}function k2(i,r,o,u,d){switch(r){case"focusin":return Hr=Yu(Hr,i,r,o,u,d),!0;case"dragenter":return Gr=Yu(Gr,i,r,o,u,d),!0;case"mouseover":return Kr=Yu(Kr,i,r,o,u,d),!0;case"pointerover":var p=d.pointerId;return Qu.set(p,Yu(Qu.get(p)||null,i,r,o,u,d)),!0;case"gotpointercapture":return p=d.pointerId,Wu.set(p,Yu(Wu.get(p)||null,i,r,o,u,d)),!0}return!1}function K1(i){var r=Ts(i.target);if(r!==null){var o=l(r);if(o!==null){if(r=o.tag,r===13){if(r=c(o),r!==null){i.blockedOn=r,rh(i.priority,function(){F1(o)});return}}else if(r===31){if(r=f(o),r!==null){i.blockedOn=r,rh(i.priority,function(){F1(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){i.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Sd(i){if(i.blockedOn!==null)return!1;for(var r=i.targetContainers;0<r.length;){var o=mg(i.nativeEvent);if(o===null){o=i.nativeEvent;var u=new o.constructor(o.type,o);xo=u,o.target.dispatchEvent(u),xo=null}else return r=bs(o),r!==null&&q1(r),i.blockedOn=o,!1;r.shift()}return!0}function Q1(i,r,o){Sd(i)&&o.delete(r)}function M2(){_g=!1,Hr!==null&&Sd(Hr)&&(Hr=null),Gr!==null&&Sd(Gr)&&(Gr=null),Kr!==null&&Sd(Kr)&&(Kr=null),Qu.forEach(Q1),Wu.forEach(Q1)}function Ad(i,r){i.blockedOn===r&&(i.blockedOn=null,_g||(_g=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,M2)))}var Cd=null;function W1(i){Cd!==i&&(Cd=i,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Cd===i&&(Cd=null);for(var r=0;r<i.length;r+=3){var o=i[r],u=i[r+1],d=i[r+2];if(typeof u!="function"){if(gg(u||o)===null)continue;break}var p=bs(o);p!==null&&(i.splice(r,3),r-=3,mm(p,{pending:!0,data:d,method:o.method,action:u},u,d))}}))}function cl(i){function r(k){return Ad(k,i)}Hr!==null&&Ad(Hr,i),Gr!==null&&Ad(Gr,i),Kr!==null&&Ad(Kr,i),Qu.forEach(r),Wu.forEach(r);for(var o=0;o<Qr.length;o++){var u=Qr[o];u.blockedOn===i&&(u.blockedOn=null)}for(;0<Qr.length&&(o=Qr[0],o.blockedOn===null);)K1(o),o.blockedOn===null&&Qr.shift();if(o=(i.ownerDocument||i).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var d=o[u],p=o[u+1],y=d[hn]||null;if(typeof p=="function")y||W1(o);else if(y){var S=null;if(p&&p.hasAttribute("formAction")){if(d=p,y=p[hn]||null)S=y.formAction;else if(gg(d)!==null)continue}else S=y.action;typeof S=="function"?o[u+1]=S:(o.splice(u,3),u-=3),W1(o)}}}function Y1(){function i(p){p.canIntercept&&p.info==="react-transition"&&p.intercept({handler:function(){return new Promise(function(y){return d=y})},focusReset:"manual",scroll:"manual"})}function r(){d!==null&&(d(),d=null),u||setTimeout(o,20)}function o(){if(!u&&!navigation.transition){var p=navigation.currentEntry;p&&p.url!=null&&navigation.navigate(p.url,{state:p.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var u=!1,d=null;return navigation.addEventListener("navigate",i),navigation.addEventListener("navigatesuccess",r),navigation.addEventListener("navigateerror",r),setTimeout(o,100),function(){u=!0,navigation.removeEventListener("navigate",i),navigation.removeEventListener("navigatesuccess",r),navigation.removeEventListener("navigateerror",r),d!==null&&(d(),d=null)}}}function yg(i){this._internalRoot=i}Rd.prototype.render=yg.prototype.render=function(i){var r=this._internalRoot;if(r===null)throw Error(s(409));var o=r.current,u=di();z1(o,u,i,r,null,null)},Rd.prototype.unmount=yg.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var r=i.containerInfo;z1(i.current,2,null,i,null,null),od(),r[Xi]=null}};function Rd(i){this._internalRoot=i}Rd.prototype.unstable_scheduleHydration=function(i){if(i){var r=vs();i={blockedOn:null,target:i,priority:r};for(var o=0;o<Qr.length&&r!==0&&r<Qr[o].priority;o++);Qr.splice(o,0,i),o===0&&K1(i)}};var $1=e.version;if($1!=="19.2.8")throw Error(s(527,$1,"19.2.8"));ue.findDOMNode=function(i){var r=i._reactInternals;if(r===void 0)throw typeof i.render=="function"?Error(s(188)):(i=Object.keys(i).join(","),Error(s(268,i)));return i=g(r),i=i!==null?v(i):null,i=i===null?null:i.stateNode,i};var O2={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:Z,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Id=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Id.isDisabled&&Id.supportsFiber)try{Wi=Id.inject(O2),En=Id}catch{}}return Xu.createRoot=function(i,r){if(!a(i))throw Error(s(299));var o=!1,u="",d=iE,p=sE,y=rE;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(p=r.onCaughtError),r.onRecoverableError!==void 0&&(y=r.onRecoverableError)),r=U1(i,1,!1,null,null,o,u,null,d,p,y,Y1),i[Xi]=r.current,Jm(i),new yg(r)},Xu.hydrateRoot=function(i,r,o){if(!a(i))throw Error(s(299));var u=!1,d="",p=iE,y=sE,S=rE,k=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onUncaughtError!==void 0&&(p=o.onUncaughtError),o.onCaughtError!==void 0&&(y=o.onCaughtError),o.onRecoverableError!==void 0&&(S=o.onRecoverableError),o.formState!==void 0&&(k=o.formState)),r=U1(i,1,!0,r,o??null,u,d,k,p,y,S,Y1),r.context=B1(null),o=r.current,u=di(),u=eu(u),d=Dr(u),d.callback=null,kr(o,d,u),o=u,r.current.lanes=o,cr(r,o),as(r),i[Xi]=r.current,Jm(i),new Rd(r)},Xu.version="19.2.8",Xu}var aT;function W2(){if(aT)return Tg.exports;aT=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Tg.exports=Q2(),Tg.exports}var Y2=W2();const $2="modulepreload",X2=function(n){return"/Chaturanga/"+n},oT={},tr=function(e,t,s){let a=Promise.resolve();if(t&&t.length>0){let c=function(g){return Promise.all(g.map(v=>Promise.resolve(v).then(T=>({status:"fulfilled",value:T}),T=>({status:"rejected",reason:T}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),m=f?.nonce||f?.getAttribute("nonce");a=c(t.map(g=>{if(g=X2(g),g in oT)return;oT[g]=!0;const v=g.endsWith(".css"),T=v?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${g}"]${T}`))return;const w=document.createElement("link");if(w.rel=v?"stylesheet":$2,v||(w.as="script"),w.crossOrigin="",w.href=g,m&&w.setAttribute("nonce",m),document.head.appendChild(w),v)return new Promise((R,L)=>{w.addEventListener("load",R),w.addEventListener("error",()=>L(new Error(`Unable to preload CSS for ${g}`)))})}))}function l(c){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=c,window.dispatchEvent(f),!f.defaultPrevented)throw c}return a.then(c=>{for(const f of c||[])f.status==="rejected"&&l(f.reason);return e().catch(l)})};var j_={};(function n(e,t,s,a){var l=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),c=typeof Path2D=="function"&&typeof DOMMatrix=="function",f=(function(){if(!e.OffscreenCanvas)return!1;try{var P=new OffscreenCanvas(1,1),b=P.getContext("2d");b.fillRect(0,0,1,1);var M=P.transferToImageBitmap();b.createPattern(M,"no-repeat")}catch{return!1}return!0})();function m(){}function g(P){var b=t.exports.Promise,M=b!==void 0?b:e.Promise;return typeof M=="function"?new M(P):(P(m,m),null)}var v=(function(P,b){return{transform:function(M){if(P)return M;if(b.has(M))return b.get(M);var H=new OffscreenCanvas(M.width,M.height),z=H.getContext("2d");return z.drawImage(M,0,0),b.set(M,H),H},clear:function(){b.clear()}}})(f,new Map),T=(function(){var P=Math.floor(16.666666666666668),b,M,H={},z=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(b=function(ee){var de=Math.random();return H[de]=requestAnimationFrame(function he(we){z===we||z+P-1<we?(z=we,delete H[de],ee()):H[de]=requestAnimationFrame(he)}),de},M=function(ee){H[ee]&&cancelAnimationFrame(H[ee])}):(b=function(ee){return setTimeout(ee,P)},M=function(ee){return clearTimeout(ee)}),{frame:b,cancel:M}})(),w=(function(){var P,b,M={};function H(z){function ee(de,he){z.postMessage({options:de||{},callback:he})}z.init=function(he){var we=he.transferControlToOffscreen();z.postMessage({canvas:we},[we])},z.fire=function(he,we,Ae){if(b)return ee(he,null),b;var Ze=Math.random().toString(36).slice(2);return b=g(function(Ye){function ot(St){St.data.callback===Ze&&(delete M[Ze],z.removeEventListener("message",ot),b=null,v.clear(),Ae(),Ye())}z.addEventListener("message",ot),ee(he,Ze),M[Ze]=ot.bind(null,{data:{callback:Ze}})}),b},z.reset=function(){z.postMessage({reset:!0});for(var he in M)M[he](),delete M[he]}}return function(){if(P)return P;if(!s&&l){var z=["var CONFETTI, SIZE = {}, module = {};","("+n.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{P=new Worker(URL.createObjectURL(new Blob([z])))}catch(ee){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",ee),null}H(P)}return P}})(),R={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function L(P,b){return b?b(P):P}function F(P){return P!=null}function B(P,b,M){return L(P&&F(P[b])?P[b]:R[b],M)}function se(P){return P<0?0:Math.floor(P)}function oe(P,b){return Math.floor(Math.random()*(b-P))+P}function le(P){return parseInt(P,16)}function _e(P){return P.map(Le)}function Le(P){var b=String(P).replace(/[^0-9a-f]/gi,"");return b.length<6&&(b=b[0]+b[0]+b[1]+b[1]+b[2]+b[2]),{r:le(b.substring(0,2)),g:le(b.substring(2,4)),b:le(b.substring(4,6))}}function Ee(P){var b=B(P,"origin",Object);return b.x=B(b,"x",Number),b.y=B(b,"y",Number),b}function D(P){P.width=document.documentElement.clientWidth,P.height=document.documentElement.clientHeight}function C(P){var b=P.getBoundingClientRect();P.width=b.width,P.height=b.height}function N(P){var b=document.createElement("canvas");return b.style.position="fixed",b.style.top="0px",b.style.left="0px",b.style.pointerEvents="none",b.style.zIndex=P,b}function O(P,b,M,H,z,ee,de,he,we){P.save(),P.translate(b,M),P.rotate(ee),P.scale(H,z),P.arc(0,0,1,de,he,we),P.restore()}function U(P){var b=P.angle*(Math.PI/180),M=P.spread*(Math.PI/180);return{x:P.x,y:P.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:P.startVelocity*.5+Math.random()*P.startVelocity,angle2D:-b+(.5*M-Math.random()*M),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:P.color,shape:P.shape,tick:0,totalTicks:P.ticks,decay:P.decay,drift:P.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:P.gravity*3,ovalScalar:.6,scalar:P.scalar,flat:P.flat}}function j(P,b){b.x+=Math.cos(b.angle2D)*b.velocity+b.drift,b.y+=Math.sin(b.angle2D)*b.velocity+b.gravity,b.velocity*=b.decay,b.flat?(b.wobble=0,b.wobbleX=b.x+10*b.scalar,b.wobbleY=b.y+10*b.scalar,b.tiltSin=0,b.tiltCos=0,b.random=1):(b.wobble+=b.wobbleSpeed,b.wobbleX=b.x+10*b.scalar*Math.cos(b.wobble),b.wobbleY=b.y+10*b.scalar*Math.sin(b.wobble),b.tiltAngle+=.1,b.tiltSin=Math.sin(b.tiltAngle),b.tiltCos=Math.cos(b.tiltAngle),b.random=Math.random()+2);var M=b.tick++/b.totalTicks,H=b.x+b.random*b.tiltCos,z=b.y+b.random*b.tiltSin,ee=b.wobbleX+b.random*b.tiltCos,de=b.wobbleY+b.random*b.tiltSin;if(P.fillStyle="rgba("+b.color.r+", "+b.color.g+", "+b.color.b+", "+(1-M)+")",P.beginPath(),c&&b.shape.type==="path"&&typeof b.shape.path=="string"&&Array.isArray(b.shape.matrix))P.fill(ue(b.shape.path,b.shape.matrix,b.x,b.y,Math.abs(ee-H)*.1,Math.abs(de-z)*.1,Math.PI/10*b.wobble));else if(b.shape.type==="bitmap"){var he=Math.PI/10*b.wobble,we=Math.abs(ee-H)*.1,Ae=Math.abs(de-z)*.1,Ze=b.shape.bitmap.width*b.scalar,Ye=b.shape.bitmap.height*b.scalar,ot=new DOMMatrix([Math.cos(he)*we,Math.sin(he)*we,-Math.sin(he)*Ae,Math.cos(he)*Ae,b.x,b.y]);ot.multiplySelf(new DOMMatrix(b.shape.matrix));var St=P.createPattern(v.transform(b.shape.bitmap),"no-repeat");St.setTransform(ot),P.globalAlpha=1-M,P.fillStyle=St,P.fillRect(b.x-Ze/2,b.y-Ye/2,Ze,Ye),P.globalAlpha=1}else if(b.shape==="circle")P.ellipse?P.ellipse(b.x,b.y,Math.abs(ee-H)*b.ovalScalar,Math.abs(de-z)*b.ovalScalar,Math.PI/10*b.wobble,0,2*Math.PI):O(P,b.x,b.y,Math.abs(ee-H)*b.ovalScalar,Math.abs(de-z)*b.ovalScalar,Math.PI/10*b.wobble,0,2*Math.PI);else if(b.shape==="star")for(var De=Math.PI/2*3,Ct=4*b.scalar,Jt=8*b.scalar,Pn=b.x,zn=b.y,jn=5,en=Math.PI/jn;jn--;)Pn=b.x+Math.cos(De)*Jt,zn=b.y+Math.sin(De)*Jt,P.lineTo(Pn,zn),De+=en,Pn=b.x+Math.cos(De)*Ct,zn=b.y+Math.sin(De)*Ct,P.lineTo(Pn,zn),De+=en;else P.moveTo(Math.floor(b.x),Math.floor(b.y)),P.lineTo(Math.floor(b.wobbleX),Math.floor(z)),P.lineTo(Math.floor(ee),Math.floor(de)),P.lineTo(Math.floor(H),Math.floor(b.wobbleY));return P.closePath(),P.fill(),b.tick<b.totalTicks}function x(P,b,M,H,z){var ee=b.slice(),de=P.getContext("2d"),he,we,Ae=g(function(Ze){function Ye(){he=we=null,de.clearRect(0,0,H.width,H.height),v.clear(),z(),Ze()}function ot(){s&&!(H.width===a.width&&H.height===a.height)&&(H.width=P.width=a.width,H.height=P.height=a.height),!H.width&&!H.height&&(M(P),H.width=P.width,H.height=P.height),de.clearRect(0,0,H.width,H.height),ee=ee.filter(function(St){return j(de,St)}),ee.length?he=T.frame(ot):Ye()}he=T.frame(ot),we=Ye});return{addFettis:function(Ze){return ee=ee.concat(Ze),Ae},canvas:P,promise:Ae,reset:function(){he&&T.cancel(he),we&&we()}}}function ht(P,b){var M=!P,H=!!B(b||{},"resize"),z=!1,ee=B(b,"disableForReducedMotion",Boolean),de=l&&!!B(b||{},"useWorker"),he=de?w():null,we=M?D:C,Ae=P&&he?!!P.__confetti_initialized:!1,Ze=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Ye;function ot(De,Ct,Jt){for(var Pn=B(De,"particleCount",se),zn=B(De,"angle",Number),jn=B(De,"spread",Number),en=B(De,"startVelocity",Number),ar=B(De,"decay",Number),$l=B(De,"gravity",Number),wa=B(De,"drift",Number),Bt=B(De,"colors",_e),Ao=B(De,"ticks",Number),Rt=B(De,"shapes"),zt=B(De,"scalar"),Pi=!!B(De,"flat"),Sa=Ee(De),or=Pn,Aa=[],_s=P.width*Sa.x,Wi=P.height*Sa.y;or--;)Aa.push(U({x:_s,y:Wi,angle:zn,spread:jn,startVelocity:en,color:Bt[or%Bt.length],shape:Rt[oe(0,Rt.length)],ticks:Ao,decay:ar,gravity:$l,drift:wa,scalar:zt,flat:Pi}));return Ye?Ye.addFettis(Aa):(Ye=x(P,Aa,we,Ct,Jt),Ye.promise)}function St(De){var Ct=ee||B(De,"disableForReducedMotion",Boolean),Jt=B(De,"zIndex",Number);if(Ct&&Ze)return g(function(en){en()});M&&Ye?P=Ye.canvas:M&&!P&&(P=N(Jt),document.body.appendChild(P)),H&&!Ae&&we(P);var Pn={width:P.width,height:P.height};he&&!Ae&&he.init(P),Ae=!0,he&&(P.__confetti_initialized=!0);function zn(){if(he){var en={getBoundingClientRect:function(){if(!M)return P.getBoundingClientRect()}};we(en),he.postMessage({resize:{width:en.width,height:en.height}});return}Pn.width=Pn.height=null}function jn(){Ye=null,H&&(z=!1,e.removeEventListener("resize",zn)),M&&P&&(document.body.contains(P)&&document.body.removeChild(P),P=null,Ae=!1)}return H&&!z&&(z=!0,e.addEventListener("resize",zn,!1)),he?he.fire(De,Pn,jn):ot(De,Pn,jn)}return St.reset=function(){he&&he.reset(),Ye&&Ye.reset()},St}var xe;function Z(){return xe||(xe=ht(null,{useWorker:!0,resize:!0})),xe}function ue(P,b,M,H,z,ee,de){var he=new Path2D(P),we=new Path2D;we.addPath(he,new DOMMatrix(b));var Ae=new Path2D;return Ae.addPath(we,new DOMMatrix([Math.cos(de)*z,Math.sin(de)*z,-Math.sin(de)*ee,Math.cos(de)*ee,M,H])),Ae}function X(P){if(!c)throw new Error("path confetti are not supported in this browser");var b,M;typeof P=="string"?b=P:(b=P.path,M=P.matrix);var H=new Path2D(b),z=document.createElement("canvas"),ee=z.getContext("2d");if(!M){for(var de=1e3,he=de,we=de,Ae=0,Ze=0,Ye,ot,St=0;St<de;St+=2)for(var De=0;De<de;De+=2)ee.isPointInPath(H,St,De,"nonzero")&&(he=Math.min(he,St),we=Math.min(we,De),Ae=Math.max(Ae,St),Ze=Math.max(Ze,De));Ye=Ae-he,ot=Ze-we;var Ct=10,Jt=Math.min(Ct/Ye,Ct/ot);M=[Jt,0,0,Jt,-Math.round(Ye/2+he)*Jt,-Math.round(ot/2+we)*Jt]}return{type:"path",path:b,matrix:M}}function ae(P){var b,M=1,H="#000000",z='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof P=="string"?b=P:(b=P.text,M="scalar"in P?P.scalar:M,z="fontFamily"in P?P.fontFamily:z,H="color"in P?P.color:H);var ee=10*M,de=""+ee+"px "+z,he=new OffscreenCanvas(ee,ee),we=he.getContext("2d");we.font=de;var Ae=we.measureText(b),Ze=Math.ceil(Ae.actualBoundingBoxRight+Ae.actualBoundingBoxLeft),Ye=Math.ceil(Ae.actualBoundingBoxAscent+Ae.actualBoundingBoxDescent),ot=2,St=Ae.actualBoundingBoxLeft+ot,De=Ae.actualBoundingBoxAscent+ot;Ze+=ot+ot,Ye+=ot+ot,he=new OffscreenCanvas(Ze,Ye),we=he.getContext("2d"),we.font=de,we.fillStyle=H,we.fillText(b,St,De);var Ct=1/M;return{type:"bitmap",bitmap:he.transferToImageBitmap(),matrix:[Ct,0,0,Ct,-Ze*Ct/2,-Ye*Ct/2]}}t.exports=function(){return Z().apply(this,arguments)},t.exports.reset=function(){Z().reset()},t.exports.create=ht,t.exports.shapeFromPath=X,t.exports.shapeFromText=ae})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),j_,!1);const Ag=j_.exports;j_.exports.create;const Z2=()=>{};var lT={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce=function(n,e){if(!n)throw Ll(e)},Ll=function(n){return new Error("Firebase Database ("+qw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},J2=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const a=n[t++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const l=n[t++];e[s++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=n[t++],c=n[t++],f=n[t++],m=((a&7)<<18|(l&63)<<12|(c&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(m>>10)),e[s++]=String.fromCharCode(56320+(m&1023))}else{const l=n[t++],c=n[t++];e[s++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},q_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<n.length;a+=3){const l=n[a],c=a+1<n.length,f=c?n[a+1]:0,m=a+2<n.length,g=m?n[a+2]:0,v=l>>2,T=(l&3)<<4|f>>4;let w=(f&15)<<2|g>>6,R=g&63;m||(R=64,c||(w=64)),s.push(t[v],t[T],t[w],t[R])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Fw(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):J2(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<n.length;){const l=t[n.charAt(a++)],f=a<n.length?t[n.charAt(a)]:0;++a;const g=a<n.length?t[n.charAt(a)]:64;++a;const T=a<n.length?t[n.charAt(a)]:64;if(++a,l==null||f==null||g==null||T==null)throw new eN;const w=l<<2|f>>4;if(s.push(w),g!==64){const R=f<<4&240|g>>2;if(s.push(R),T!==64){const L=g<<6&192|T;s.push(L)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class eN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hw=function(n){const e=Fw(n);return q_.encodeByteArray(e,!0)},$d=function(n){return Hw(n).replace(/\./g,"")},Xd=function(n){try{return q_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tN(n){return Gw(void 0,n)}function Gw(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!nN(t)||(n[t]=Gw(n[t],e[t]));return n}function nN(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sN=()=>iN().__FIREBASE_DEFAULTS__,rN=()=>{if(typeof process>"u"||typeof lT>"u")return;const n=lT.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},aN=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Xd(n[1]);return e&&JSON.parse(e)},Lf=()=>{try{return Z2()||sN()||rN()||aN()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Kw=n=>{var e,t;return(t=(e=Lf())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Qw=n=>{const e=Kw(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Ww=()=>{var n;return(n=Lf())===null||n===void 0?void 0:n.config},Yw=n=>{var e;return(e=Lf())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function F_(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $w(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",a=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[$d(JSON.stringify(t)),$d(JSON.stringify(c)),""].join(".")}const lc={};function oN(){const n={prod:[],emulator:[]};for(const e of Object.keys(lc))lc[e]?n.emulator.push(e):n.prod.push(e);return n}function lN(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let uT=!1;function H_(n,e){if(typeof window>"u"||typeof document>"u"||!ya(window.location.host)||lc[n]===e||lc[n]||uT)return;lc[n]=e;function t(w){return`__firebase__banner__${w}`}const s="__firebase__banner",l=oN().prod.length>0;function c(){const w=document.getElementById(s);w&&w.remove()}function f(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function m(w,R){w.setAttribute("width","24"),w.setAttribute("id",R),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function g(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{uT=!0,c()},w}function v(w,R){w.setAttribute("id",R),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function T(){const w=lN(s),R=t("text"),L=document.getElementById(R)||document.createElement("span"),F=t("learnmore"),B=document.getElementById(F)||document.createElement("a"),se=t("preprendIcon"),oe=document.getElementById(se)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const le=w.element;f(le),v(B,F);const _e=g();m(oe,se),le.append(oe,L,B,_e),document.body.appendChild(le)}l?(L.innerText="Preview backend disconnected.",oe.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(oe.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,L.innerText="Preview backend running in this workspace."),L.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function G_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(In())}function uN(){var n;const e=(n=Lf())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function cN(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Xw(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Zw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hN(){const n=In();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function dN(){return qw.NODE_ADMIN===!0}function fN(){return!uN()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Jw(){try{return typeof indexedDB=="object"}catch{return!1}}function eS(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var l;e(((l=a.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}function pN(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mN="FirebaseError";class Qi extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=mN,Object.setPrototypeOf(this,Qi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vo.prototype.create)}}class vo{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?gN(l,s):"Error",f=`${this.serviceName}: ${c} (${a}).`;return new Qi(a,f,s)}}function gN(n,e){return n.replace(_N,(t,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const _N=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ec(n){return JSON.parse(n)}function un(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS=function(n){let e={},t={},s={},a="";try{const l=n.split(".");e=Ec(Xd(l[0])||""),t=Ec(Xd(l[1])||""),a=l[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:a}},yN=function(n){const e=tS(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},vN=function(n){const e=tS(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function wl(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Zg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Zd(n,e,t){const s={};for(const a in n)Object.prototype.hasOwnProperty.call(n,a)&&(s[a]=e.call(t,n[a],a,n));return s}function Fi(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const a of t){if(!s.includes(a))return!1;const l=n[a],c=e[a];if(cT(l)&&cT(c)){if(!Fi(l,c))return!1}else if(l!==c)return!1}for(const a of s)if(!t.includes(a))return!1;return!0}function cT(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function nc(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[a,l]=s.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function ic(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let T=0;T<16;T++)s[T]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let T=0;T<16;T++)s[T]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let T=16;T<80;T++){const w=s[T-3]^s[T-8]^s[T-14]^s[T-16];s[T]=(w<<1|w>>>31)&4294967295}let a=this.chain_[0],l=this.chain_[1],c=this.chain_[2],f=this.chain_[3],m=this.chain_[4],g,v;for(let T=0;T<80;T++){T<40?T<20?(g=f^l&(c^f),v=1518500249):(g=l^c^f,v=1859775393):T<60?(g=l&c|f&(l|c),v=2400959708):(g=l^c^f,v=3395469782);const w=(a<<5|a>>>27)+g+m+v+s[T]&4294967295;m=f,f=c,c=(l<<30|l>>>2)&4294967295,l=a,a=w}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+m&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let a=0;const l=this.buf_;let c=this.inbuf_;for(;a<t;){if(c===0)for(;a<=s;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<t;)if(l[c]=e.charCodeAt(a),++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}else for(;a<t;)if(l[c]=e[a],++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let a=0;a<5;a++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[a]>>l&255,++s;return e}}function TN(n,e){const t=new bN(n,e);return t.subscribe.bind(t)}class bN{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let a;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");wN(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:s},a.next===void 0&&(a.next=Cg),a.error===void 0&&(a.error=Cg),a.complete===void 0&&(a.complete=Cg);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wN(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Cg(){}function K_(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SN=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);if(a>=55296&&a<=56319){const l=a-55296;s++,ce(s<n.length,"Surrogate pair missing trail surrogate.");const c=n.charCodeAt(s)-56320;a=65536+(l<<10)+c}a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):a<65536?(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},Uf=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AN=1e3,CN=2,RN=14400*1e3,IN=.5;function hT(n,e=AN,t=CN){const s=e*Math.pow(t,n),a=Math.round(IN*s*(Math.random()-.5)*2);return Math.min(RN,s+a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(n){return n&&n._delegate?n._delegate:n}class Ii{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Vf;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e?.identifier),a=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(a)return null;throw l}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xN(e))try{this.getOrInitializeService({instanceIdentifier:Za})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});s.resolve(l)}catch{}}}}clearInstance(e=Za){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Za){return this.instances.has(e)}getOptions(e=Za){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,c]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);s===f&&c.resolve(a)}return a}onInit(e,t){var s;const a=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(a))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(a,l);const c=this.instances.get(a);return c&&e(c,a),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const a of s)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:PN(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Za){return this.component?this.component.multipleInstances?e:Za:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function PN(n){return n===Za?void 0:n}function xN(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new NN(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var He;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(He||(He={}));const kN={debug:He.DEBUG,verbose:He.VERBOSE,info:He.INFO,warn:He.WARN,error:He.ERROR,silent:He.SILENT},MN=He.INFO,ON={[He.DEBUG]:"log",[He.VERBOSE]:"log",[He.INFO]:"info",[He.WARN]:"warn",[He.ERROR]:"error"},LN=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),a=ON[e];if(a)console[a](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bc{constructor(e){this.name=e,this._logLevel=MN,this._logHandler=LN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in He))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,He.DEBUG,...e),this._logHandler(this,He.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,He.VERBOSE,...e),this._logHandler(this,He.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,He.INFO,...e),this._logHandler(this,He.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,He.WARN,...e),this._logHandler(this,He.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,He.ERROR,...e),this._logHandler(this,He.ERROR,...e)}}const VN=(n,e)=>e.some(t=>n instanceof t);let dT,fT;function UN(){return dT||(dT=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function BN(){return fT||(fT=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nS=new WeakMap,Jg=new WeakMap,iS=new WeakMap,Rg=new WeakMap,Q_=new WeakMap;function zN(n){const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(ia(n.result)),a()},c=()=>{s(n.error),a()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&nS.set(t,n)}).catch(()=>{}),Q_.set(e,n),e}function jN(n){if(Jg.has(n))return;const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),a()},c=()=>{s(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});Jg.set(n,e)}let e_={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Jg.get(n);if(e==="objectStoreNames")return n.objectStoreNames||iS.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ia(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function qN(n){e_=n(e_)}function FN(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Ig(this),e,...t);return iS.set(s,e.sort?e.sort():[e]),ia(s)}:BN().includes(n)?function(...e){return n.apply(Ig(this),e),ia(nS.get(this))}:function(...e){return ia(n.apply(Ig(this),e))}}function HN(n){return typeof n=="function"?FN(n):(n instanceof IDBTransaction&&jN(n),VN(n,UN())?new Proxy(n,e_):n)}function ia(n){if(n instanceof IDBRequest)return zN(n);if(Rg.has(n))return Rg.get(n);const e=HN(n);return e!==n&&(Rg.set(n,e),Q_.set(e,n)),e}const Ig=n=>Q_.get(n);function sS(n,e,{blocked:t,upgrade:s,blocking:a,terminated:l}={}){const c=indexedDB.open(n,e),f=ia(c);return s&&c.addEventListener("upgradeneeded",m=>{s(ia(c.result),m.oldVersion,m.newVersion,ia(c.transaction),m)}),t&&c.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),f.then(m=>{l&&m.addEventListener("close",()=>l()),a&&m.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const GN=["get","getKey","getAll","getAllKeys","count"],KN=["put","add","delete","clear"],Ng=new Map;function pT(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ng.get(e))return Ng.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=KN.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||GN.includes(t)))return;const l=async function(c,...f){const m=this.transaction(c,a?"readwrite":"readonly");let g=m.store;return s&&(g=g.index(f.shift())),(await Promise.all([g[t](...f),a&&m.done]))[0]};return Ng.set(e,l),l}qN(n=>({...n,get:(e,t,s)=>pT(e,t)||n.get(e,t,s),has:(e,t)=>!!pT(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(WN(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function WN(n){const e=n.getComponent();return e?.type==="VERSION"}const t_="@firebase/app",mT="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys=new Bc("@firebase/app"),YN="@firebase/app-compat",$N="@firebase/analytics-compat",XN="@firebase/analytics",ZN="@firebase/app-check-compat",JN="@firebase/app-check",eP="@firebase/auth",tP="@firebase/auth-compat",nP="@firebase/database",iP="@firebase/data-connect",sP="@firebase/database-compat",rP="@firebase/functions",aP="@firebase/functions-compat",oP="@firebase/installations",lP="@firebase/installations-compat",uP="@firebase/messaging",cP="@firebase/messaging-compat",hP="@firebase/performance",dP="@firebase/performance-compat",fP="@firebase/remote-config",pP="@firebase/remote-config-compat",mP="@firebase/storage",gP="@firebase/storage-compat",_P="@firebase/firestore",yP="@firebase/ai",vP="@firebase/firestore-compat",EP="firebase",TP="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_="[DEFAULT]",bP={[t_]:"fire-core",[YN]:"fire-core-compat",[XN]:"fire-analytics",[$N]:"fire-analytics-compat",[JN]:"fire-app-check",[ZN]:"fire-app-check-compat",[eP]:"fire-auth",[tP]:"fire-auth-compat",[nP]:"fire-rtdb",[iP]:"fire-data-connect",[sP]:"fire-rtdb-compat",[rP]:"fire-fn",[aP]:"fire-fn-compat",[oP]:"fire-iid",[lP]:"fire-iid-compat",[uP]:"fire-fcm",[cP]:"fire-fcm-compat",[hP]:"fire-perf",[dP]:"fire-perf-compat",[fP]:"fire-rc",[pP]:"fire-rc-compat",[mP]:"fire-gcs",[gP]:"fire-gcs-compat",[_P]:"fire-fst",[vP]:"fire-fst-compat",[yP]:"fire-vertex","fire-js":"fire-js",[EP]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc=new Map,wP=new Map,i_=new Map;function gT(n,e){try{n.container.addComponent(e)}catch(t){Ys.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Hi(n){const e=n.name;if(i_.has(e))return Ys.debug(`There were multiple attempts to register component ${e}.`),!1;i_.set(e,n);for(const t of Tc.values())gT(t,n);for(const t of wP.values())gT(t,n);return!0}function va(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Un(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},sa=new vo("app","Firebase",SP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AP{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ii("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw sa.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=TP;function rS(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:n_,automaticDataCollectionEnabled:!0},e),a=s.name;if(typeof a!="string"||!a)throw sa.create("bad-app-name",{appName:String(a)});if(t||(t=Ww()),!t)throw sa.create("no-options");const l=Tc.get(a);if(l){if(Fi(t,l.options)&&Fi(s,l.config))return l;throw sa.create("duplicate-app",{appName:a})}const c=new DN(a);for(const m of i_.values())c.addComponent(m);const f=new AP(t,s,c);return Tc.set(a,f),f}function zc(n=n_){const e=Tc.get(n);if(!e&&n===n_&&Ww())return rS();if(!e)throw sa.create("no-app",{appName:n});return e}function CP(){return Array.from(Tc.values())}function ei(n,e,t){var s;let a=(s=bP[n])!==null&&s!==void 0?s:n;t&&(a+=`-${t}`);const l=a.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const f=[`Unable to register library "${a}" with version "${e}":`];l&&f.push(`library name "${a}" contains illegal characters (whitespace or "/")`),l&&c&&f.push("and"),c&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ys.warn(f.join(" "));return}Hi(new Ii(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RP="firebase-heartbeat-database",IP=1,bc="firebase-heartbeat-store";let Pg=null;function aS(){return Pg||(Pg=sS(RP,IP,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(bc)}catch(t){console.warn(t)}}}}).catch(n=>{throw sa.create("idb-open",{originalErrorMessage:n.message})})),Pg}async function NP(n){try{const t=(await aS()).transaction(bc),s=await t.objectStore(bc).get(oS(n));return await t.done,s}catch(e){if(e instanceof Qi)Ys.warn(e.message);else{const t=sa.create("idb-get",{originalErrorMessage:e?.message});Ys.warn(t.message)}}}async function _T(n,e){try{const s=(await aS()).transaction(bc,"readwrite");await s.objectStore(bc).put(e,oS(n)),await s.done}catch(t){if(t instanceof Qi)Ys.warn(t.message);else{const s=sa.create("idb-set",{originalErrorMessage:t?.message});Ys.warn(s.message)}}}function oS(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PP=1024,xP=30;class DP{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new MP(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=yT();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>xP){const c=OP(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Ys.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=yT(),{heartbeatsToSend:s,unsentEntries:a}=kP(this._heartbeatsCache.heartbeats),l=$d(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Ys.warn(t),""}}}function yT(){return new Date().toISOString().substring(0,10)}function kP(n,e=PP){const t=[];let s=n.slice();for(const a of n){const l=t.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),vT(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),vT(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class MP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jw()?eS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await NP(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return _T(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return _T(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function vT(n){return $d(JSON.stringify({version:2,heartbeats:n})).length}function OP(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LP(n){Hi(new Ii("platform-logger",e=>new QN(e),"PRIVATE")),Hi(new Ii("heartbeat",e=>new DP(e),"PRIVATE")),ei(t_,mT,n),ei(t_,mT,"esm2017"),ei("fire-js","")}LP("");var VP="firebase",UP="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ei(VP,UP,"app");var ET=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ra,lS;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,C){function N(){}N.prototype=C.prototype,D.D=C.prototype,D.prototype=new N,D.prototype.constructor=D,D.C=function(O,U,j){for(var x=Array(arguments.length-2),ht=2;ht<arguments.length;ht++)x[ht-2]=arguments[ht];return C.prototype[U].apply(O,x)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(D,C,N){N||(N=0);var O=Array(16);if(typeof C=="string")for(var U=0;16>U;++U)O[U]=C.charCodeAt(N++)|C.charCodeAt(N++)<<8|C.charCodeAt(N++)<<16|C.charCodeAt(N++)<<24;else for(U=0;16>U;++U)O[U]=C[N++]|C[N++]<<8|C[N++]<<16|C[N++]<<24;C=D.g[0],N=D.g[1],U=D.g[2];var j=D.g[3],x=C+(j^N&(U^j))+O[0]+3614090360&4294967295;C=N+(x<<7&4294967295|x>>>25),x=j+(U^C&(N^U))+O[1]+3905402710&4294967295,j=C+(x<<12&4294967295|x>>>20),x=U+(N^j&(C^N))+O[2]+606105819&4294967295,U=j+(x<<17&4294967295|x>>>15),x=N+(C^U&(j^C))+O[3]+3250441966&4294967295,N=U+(x<<22&4294967295|x>>>10),x=C+(j^N&(U^j))+O[4]+4118548399&4294967295,C=N+(x<<7&4294967295|x>>>25),x=j+(U^C&(N^U))+O[5]+1200080426&4294967295,j=C+(x<<12&4294967295|x>>>20),x=U+(N^j&(C^N))+O[6]+2821735955&4294967295,U=j+(x<<17&4294967295|x>>>15),x=N+(C^U&(j^C))+O[7]+4249261313&4294967295,N=U+(x<<22&4294967295|x>>>10),x=C+(j^N&(U^j))+O[8]+1770035416&4294967295,C=N+(x<<7&4294967295|x>>>25),x=j+(U^C&(N^U))+O[9]+2336552879&4294967295,j=C+(x<<12&4294967295|x>>>20),x=U+(N^j&(C^N))+O[10]+4294925233&4294967295,U=j+(x<<17&4294967295|x>>>15),x=N+(C^U&(j^C))+O[11]+2304563134&4294967295,N=U+(x<<22&4294967295|x>>>10),x=C+(j^N&(U^j))+O[12]+1804603682&4294967295,C=N+(x<<7&4294967295|x>>>25),x=j+(U^C&(N^U))+O[13]+4254626195&4294967295,j=C+(x<<12&4294967295|x>>>20),x=U+(N^j&(C^N))+O[14]+2792965006&4294967295,U=j+(x<<17&4294967295|x>>>15),x=N+(C^U&(j^C))+O[15]+1236535329&4294967295,N=U+(x<<22&4294967295|x>>>10),x=C+(U^j&(N^U))+O[1]+4129170786&4294967295,C=N+(x<<5&4294967295|x>>>27),x=j+(N^U&(C^N))+O[6]+3225465664&4294967295,j=C+(x<<9&4294967295|x>>>23),x=U+(C^N&(j^C))+O[11]+643717713&4294967295,U=j+(x<<14&4294967295|x>>>18),x=N+(j^C&(U^j))+O[0]+3921069994&4294967295,N=U+(x<<20&4294967295|x>>>12),x=C+(U^j&(N^U))+O[5]+3593408605&4294967295,C=N+(x<<5&4294967295|x>>>27),x=j+(N^U&(C^N))+O[10]+38016083&4294967295,j=C+(x<<9&4294967295|x>>>23),x=U+(C^N&(j^C))+O[15]+3634488961&4294967295,U=j+(x<<14&4294967295|x>>>18),x=N+(j^C&(U^j))+O[4]+3889429448&4294967295,N=U+(x<<20&4294967295|x>>>12),x=C+(U^j&(N^U))+O[9]+568446438&4294967295,C=N+(x<<5&4294967295|x>>>27),x=j+(N^U&(C^N))+O[14]+3275163606&4294967295,j=C+(x<<9&4294967295|x>>>23),x=U+(C^N&(j^C))+O[3]+4107603335&4294967295,U=j+(x<<14&4294967295|x>>>18),x=N+(j^C&(U^j))+O[8]+1163531501&4294967295,N=U+(x<<20&4294967295|x>>>12),x=C+(U^j&(N^U))+O[13]+2850285829&4294967295,C=N+(x<<5&4294967295|x>>>27),x=j+(N^U&(C^N))+O[2]+4243563512&4294967295,j=C+(x<<9&4294967295|x>>>23),x=U+(C^N&(j^C))+O[7]+1735328473&4294967295,U=j+(x<<14&4294967295|x>>>18),x=N+(j^C&(U^j))+O[12]+2368359562&4294967295,N=U+(x<<20&4294967295|x>>>12),x=C+(N^U^j)+O[5]+4294588738&4294967295,C=N+(x<<4&4294967295|x>>>28),x=j+(C^N^U)+O[8]+2272392833&4294967295,j=C+(x<<11&4294967295|x>>>21),x=U+(j^C^N)+O[11]+1839030562&4294967295,U=j+(x<<16&4294967295|x>>>16),x=N+(U^j^C)+O[14]+4259657740&4294967295,N=U+(x<<23&4294967295|x>>>9),x=C+(N^U^j)+O[1]+2763975236&4294967295,C=N+(x<<4&4294967295|x>>>28),x=j+(C^N^U)+O[4]+1272893353&4294967295,j=C+(x<<11&4294967295|x>>>21),x=U+(j^C^N)+O[7]+4139469664&4294967295,U=j+(x<<16&4294967295|x>>>16),x=N+(U^j^C)+O[10]+3200236656&4294967295,N=U+(x<<23&4294967295|x>>>9),x=C+(N^U^j)+O[13]+681279174&4294967295,C=N+(x<<4&4294967295|x>>>28),x=j+(C^N^U)+O[0]+3936430074&4294967295,j=C+(x<<11&4294967295|x>>>21),x=U+(j^C^N)+O[3]+3572445317&4294967295,U=j+(x<<16&4294967295|x>>>16),x=N+(U^j^C)+O[6]+76029189&4294967295,N=U+(x<<23&4294967295|x>>>9),x=C+(N^U^j)+O[9]+3654602809&4294967295,C=N+(x<<4&4294967295|x>>>28),x=j+(C^N^U)+O[12]+3873151461&4294967295,j=C+(x<<11&4294967295|x>>>21),x=U+(j^C^N)+O[15]+530742520&4294967295,U=j+(x<<16&4294967295|x>>>16),x=N+(U^j^C)+O[2]+3299628645&4294967295,N=U+(x<<23&4294967295|x>>>9),x=C+(U^(N|~j))+O[0]+4096336452&4294967295,C=N+(x<<6&4294967295|x>>>26),x=j+(N^(C|~U))+O[7]+1126891415&4294967295,j=C+(x<<10&4294967295|x>>>22),x=U+(C^(j|~N))+O[14]+2878612391&4294967295,U=j+(x<<15&4294967295|x>>>17),x=N+(j^(U|~C))+O[5]+4237533241&4294967295,N=U+(x<<21&4294967295|x>>>11),x=C+(U^(N|~j))+O[12]+1700485571&4294967295,C=N+(x<<6&4294967295|x>>>26),x=j+(N^(C|~U))+O[3]+2399980690&4294967295,j=C+(x<<10&4294967295|x>>>22),x=U+(C^(j|~N))+O[10]+4293915773&4294967295,U=j+(x<<15&4294967295|x>>>17),x=N+(j^(U|~C))+O[1]+2240044497&4294967295,N=U+(x<<21&4294967295|x>>>11),x=C+(U^(N|~j))+O[8]+1873313359&4294967295,C=N+(x<<6&4294967295|x>>>26),x=j+(N^(C|~U))+O[15]+4264355552&4294967295,j=C+(x<<10&4294967295|x>>>22),x=U+(C^(j|~N))+O[6]+2734768916&4294967295,U=j+(x<<15&4294967295|x>>>17),x=N+(j^(U|~C))+O[13]+1309151649&4294967295,N=U+(x<<21&4294967295|x>>>11),x=C+(U^(N|~j))+O[4]+4149444226&4294967295,C=N+(x<<6&4294967295|x>>>26),x=j+(N^(C|~U))+O[11]+3174756917&4294967295,j=C+(x<<10&4294967295|x>>>22),x=U+(C^(j|~N))+O[2]+718787259&4294967295,U=j+(x<<15&4294967295|x>>>17),x=N+(j^(U|~C))+O[9]+3951481745&4294967295,D.g[0]=D.g[0]+C&4294967295,D.g[1]=D.g[1]+(U+(x<<21&4294967295|x>>>11))&4294967295,D.g[2]=D.g[2]+U&4294967295,D.g[3]=D.g[3]+j&4294967295}s.prototype.u=function(D,C){C===void 0&&(C=D.length);for(var N=C-this.blockSize,O=this.B,U=this.h,j=0;j<C;){if(U==0)for(;j<=N;)a(this,D,j),j+=this.blockSize;if(typeof D=="string"){for(;j<C;)if(O[U++]=D.charCodeAt(j++),U==this.blockSize){a(this,O),U=0;break}}else for(;j<C;)if(O[U++]=D[j++],U==this.blockSize){a(this,O),U=0;break}}this.h=U,this.o+=C},s.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var C=1;C<D.length-8;++C)D[C]=0;var N=8*this.o;for(C=D.length-8;C<D.length;++C)D[C]=N&255,N/=256;for(this.u(D),D=Array(16),C=N=0;4>C;++C)for(var O=0;32>O;O+=8)D[N++]=this.g[C]>>>O&255;return D};function l(D,C){var N=f;return Object.prototype.hasOwnProperty.call(N,D)?N[D]:N[D]=C(D)}function c(D,C){this.h=C;for(var N=[],O=!0,U=D.length-1;0<=U;U--){var j=D[U]|0;O&&j==C||(N[U]=j,O=!1)}this.g=N}var f={};function m(D){return-128<=D&&128>D?l(D,function(C){return new c([C|0],0>C?-1:0)}):new c([D|0],0>D?-1:0)}function g(D){if(isNaN(D)||!isFinite(D))return T;if(0>D)return B(g(-D));for(var C=[],N=1,O=0;D>=N;O++)C[O]=D/N|0,N*=4294967296;return new c(C,0)}function v(D,C){if(D.length==0)throw Error("number format error: empty string");if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(D.charAt(0)=="-")return B(v(D.substring(1),C));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var N=g(Math.pow(C,8)),O=T,U=0;U<D.length;U+=8){var j=Math.min(8,D.length-U),x=parseInt(D.substring(U,U+j),C);8>j?(j=g(Math.pow(C,j)),O=O.j(j).add(g(x))):(O=O.j(N),O=O.add(g(x)))}return O}var T=m(0),w=m(1),R=m(16777216);n=c.prototype,n.m=function(){if(F(this))return-B(this).m();for(var D=0,C=1,N=0;N<this.g.length;N++){var O=this.i(N);D+=(0<=O?O:4294967296+O)*C,C*=4294967296}return D},n.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(L(this))return"0";if(F(this))return"-"+B(this).toString(D);for(var C=g(Math.pow(D,6)),N=this,O="";;){var U=_e(N,C).g;N=se(N,U.j(C));var j=((0<N.g.length?N.g[0]:N.h)>>>0).toString(D);if(N=U,L(N))return j+O;for(;6>j.length;)j="0"+j;O=j+O}},n.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function L(D){if(D.h!=0)return!1;for(var C=0;C<D.g.length;C++)if(D.g[C]!=0)return!1;return!0}function F(D){return D.h==-1}n.l=function(D){return D=se(this,D),F(D)?-1:L(D)?0:1};function B(D){for(var C=D.g.length,N=[],O=0;O<C;O++)N[O]=~D.g[O];return new c(N,~D.h).add(w)}n.abs=function(){return F(this)?B(this):this},n.add=function(D){for(var C=Math.max(this.g.length,D.g.length),N=[],O=0,U=0;U<=C;U++){var j=O+(this.i(U)&65535)+(D.i(U)&65535),x=(j>>>16)+(this.i(U)>>>16)+(D.i(U)>>>16);O=x>>>16,j&=65535,x&=65535,N[U]=x<<16|j}return new c(N,N[N.length-1]&-2147483648?-1:0)};function se(D,C){return D.add(B(C))}n.j=function(D){if(L(this)||L(D))return T;if(F(this))return F(D)?B(this).j(B(D)):B(B(this).j(D));if(F(D))return B(this.j(B(D)));if(0>this.l(R)&&0>D.l(R))return g(this.m()*D.m());for(var C=this.g.length+D.g.length,N=[],O=0;O<2*C;O++)N[O]=0;for(O=0;O<this.g.length;O++)for(var U=0;U<D.g.length;U++){var j=this.i(O)>>>16,x=this.i(O)&65535,ht=D.i(U)>>>16,xe=D.i(U)&65535;N[2*O+2*U]+=x*xe,oe(N,2*O+2*U),N[2*O+2*U+1]+=j*xe,oe(N,2*O+2*U+1),N[2*O+2*U+1]+=x*ht,oe(N,2*O+2*U+1),N[2*O+2*U+2]+=j*ht,oe(N,2*O+2*U+2)}for(O=0;O<C;O++)N[O]=N[2*O+1]<<16|N[2*O];for(O=C;O<2*C;O++)N[O]=0;return new c(N,0)};function oe(D,C){for(;(D[C]&65535)!=D[C];)D[C+1]+=D[C]>>>16,D[C]&=65535,C++}function le(D,C){this.g=D,this.h=C}function _e(D,C){if(L(C))throw Error("division by zero");if(L(D))return new le(T,T);if(F(D))return C=_e(B(D),C),new le(B(C.g),B(C.h));if(F(C))return C=_e(D,B(C)),new le(B(C.g),C.h);if(30<D.g.length){if(F(D)||F(C))throw Error("slowDivide_ only works with positive integers.");for(var N=w,O=C;0>=O.l(D);)N=Le(N),O=Le(O);var U=Ee(N,1),j=Ee(O,1);for(O=Ee(O,2),N=Ee(N,2);!L(O);){var x=j.add(O);0>=x.l(D)&&(U=U.add(N),j=x),O=Ee(O,1),N=Ee(N,1)}return C=se(D,U.j(C)),new le(U,C)}for(U=T;0<=D.l(C);){for(N=Math.max(1,Math.floor(D.m()/C.m())),O=Math.ceil(Math.log(N)/Math.LN2),O=48>=O?1:Math.pow(2,O-48),j=g(N),x=j.j(C);F(x)||0<x.l(D);)N-=O,j=g(N),x=j.j(C);L(j)&&(j=w),U=U.add(j),D=se(D,x)}return new le(U,D)}n.A=function(D){return _e(this,D).h},n.and=function(D){for(var C=Math.max(this.g.length,D.g.length),N=[],O=0;O<C;O++)N[O]=this.i(O)&D.i(O);return new c(N,this.h&D.h)},n.or=function(D){for(var C=Math.max(this.g.length,D.g.length),N=[],O=0;O<C;O++)N[O]=this.i(O)|D.i(O);return new c(N,this.h|D.h)},n.xor=function(D){for(var C=Math.max(this.g.length,D.g.length),N=[],O=0;O<C;O++)N[O]=this.i(O)^D.i(O);return new c(N,this.h^D.h)};function Le(D){for(var C=D.g.length+1,N=[],O=0;O<C;O++)N[O]=D.i(O)<<1|D.i(O-1)>>>31;return new c(N,D.h)}function Ee(D,C){var N=C>>5;C%=32;for(var O=D.g.length-N,U=[],j=0;j<O;j++)U[j]=0<C?D.i(j+N)>>>C|D.i(j+N+1)<<32-C:D.i(j+N);return new c(U,D.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,lS=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=v,ra=c}).apply(typeof ET<"u"?ET:typeof self<"u"?self:typeof window<"u"?window:{});var Nd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var uS,sc,cS,Bd,s_,hS,dS,fS;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,E){return h==Array.prototype||h==Object.prototype||(h[_]=E.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof Nd=="object"&&Nd];for(var _=0;_<h.length;++_){var E=h[_];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var s=t(this);function a(h,_){if(_)e:{var E=s;h=h.split(".");for(var A=0;A<h.length-1;A++){var G=h[A];if(!(G in E))break e;E=E[G]}h=h[h.length-1],A=E[h],_=_(A),_!=A&&_!=null&&e(E,h,{configurable:!0,writable:!0,value:_})}}function l(h,_){h instanceof String&&(h+="");var E=0,A=!1,G={next:function(){if(!A&&E<h.length){var $=E++;return{value:_($,h[$]),done:!1}}return A=!0,{done:!0,value:void 0}}};return G[Symbol.iterator]=function(){return G},G}a("Array.prototype.values",function(h){return h||function(){return l(this,function(_,E){return E})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},f=this||self;function m(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function g(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function v(h,_,E){return h.call.apply(h.bind,arguments)}function T(h,_,E){if(!h)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var G=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(G,A),h.apply(_,G)}}return function(){return h.apply(_,arguments)}}function w(h,_,E){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:T,w.apply(null,arguments)}function R(h,_){var E=Array.prototype.slice.call(arguments,1);return function(){var A=E.slice();return A.push.apply(A,arguments),h.apply(this,A)}}function L(h,_){function E(){}E.prototype=_.prototype,h.aa=_.prototype,h.prototype=new E,h.prototype.constructor=h,h.Qb=function(A,G,$){for(var fe=Array(arguments.length-2),lt=2;lt<arguments.length;lt++)fe[lt-2]=arguments[lt];return _.prototype[G].apply(A,fe)}}function F(h){const _=h.length;if(0<_){const E=Array(_);for(let A=0;A<_;A++)E[A]=h[A];return E}return[]}function B(h,_){for(let E=1;E<arguments.length;E++){const A=arguments[E];if(m(A)){const G=h.length||0,$=A.length||0;h.length=G+$;for(let fe=0;fe<$;fe++)h[G+fe]=A[fe]}else h.push(A)}}class se{constructor(_,E){this.i=_,this.j=E,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function oe(h){return/^[\s\xa0]*$/.test(h)}function le(){var h=f.navigator;return h&&(h=h.userAgent)?h:""}function _e(h){return _e[" "](h),h}_e[" "]=function(){};var Le=le().indexOf("Gecko")!=-1&&!(le().toLowerCase().indexOf("webkit")!=-1&&le().indexOf("Edge")==-1)&&!(le().indexOf("Trident")!=-1||le().indexOf("MSIE")!=-1)&&le().indexOf("Edge")==-1;function Ee(h,_,E){for(const A in h)_.call(E,h[A],A,h)}function D(h,_){for(const E in h)_.call(void 0,h[E],E,h)}function C(h){const _={};for(const E in h)_[E]=h[E];return _}const N="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function O(h,_){let E,A;for(let G=1;G<arguments.length;G++){A=arguments[G];for(E in A)h[E]=A[E];for(let $=0;$<N.length;$++)E=N[$],Object.prototype.hasOwnProperty.call(A,E)&&(h[E]=A[E])}}function U(h){var _=1;h=h.split(":");const E=[];for(;0<_&&h.length;)E.push(h.shift()),_--;return h.length&&E.push(h.join(":")),E}function j(h){f.setTimeout(()=>{throw h},0)}function x(){var h=ae;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class ht{constructor(){this.h=this.g=null}add(_,E){const A=xe.get();A.set(_,E),this.h?this.h.next=A:this.g=A,this.h=A}}var xe=new se(()=>new Z,h=>h.reset());class Z{constructor(){this.next=this.g=this.h=null}set(_,E){this.h=_,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let ue,X=!1,ae=new ht,P=()=>{const h=f.Promise.resolve(void 0);ue=()=>{h.then(b)}};var b=()=>{for(var h;h=x();){try{h.h.call(h.g)}catch(E){j(E)}var _=xe;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}X=!1};function M(){this.s=this.s,this.C=this.C}M.prototype.s=!1,M.prototype.ma=function(){this.s||(this.s=!0,this.N())},M.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function H(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}H.prototype.h=function(){this.defaultPrevented=!0};var z=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const E=()=>{};f.addEventListener("test",E,_),f.removeEventListener("test",E,_)}catch{}return h})();function ee(h,_){if(H.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var E=this.type=h.type,A=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(Le){e:{try{_e(_.nodeName);var G=!0;break e}catch{}G=!1}G||(_=null)}}else E=="mouseover"?_=h.fromElement:E=="mouseout"&&(_=h.toElement);this.relatedTarget=_,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:de[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&ee.aa.h.call(this)}}L(ee,H);var de={2:"touch",3:"pen",4:"mouse"};ee.prototype.h=function(){ee.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var he="closure_listenable_"+(1e6*Math.random()|0),we=0;function Ae(h,_,E,A,G){this.listener=h,this.proxy=null,this.src=_,this.type=E,this.capture=!!A,this.ha=G,this.key=++we,this.da=this.fa=!1}function Ze(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function Ye(h){this.src=h,this.g={},this.h=0}Ye.prototype.add=function(h,_,E,A,G){var $=h.toString();h=this.g[$],h||(h=this.g[$]=[],this.h++);var fe=St(h,_,A,G);return-1<fe?(_=h[fe],E||(_.fa=!1)):(_=new Ae(_,this.src,$,!!A,G),_.fa=E,h.push(_)),_};function ot(h,_){var E=_.type;if(E in h.g){var A=h.g[E],G=Array.prototype.indexOf.call(A,_,void 0),$;($=0<=G)&&Array.prototype.splice.call(A,G,1),$&&(Ze(_),h.g[E].length==0&&(delete h.g[E],h.h--))}}function St(h,_,E,A){for(var G=0;G<h.length;++G){var $=h[G];if(!$.da&&$.listener==_&&$.capture==!!E&&$.ha==A)return G}return-1}var De="closure_lm_"+(1e6*Math.random()|0),Ct={};function Jt(h,_,E,A,G){if(Array.isArray(_)){for(var $=0;$<_.length;$++)Jt(h,_[$],E,A,G);return null}return E=Ao(E),h&&h[he]?h.K(_,E,g(A)?!!A.capture:!1,G):Pn(h,_,E,!1,A,G)}function Pn(h,_,E,A,G,$){if(!_)throw Error("Invalid event type");var fe=g(G)?!!G.capture:!!G,lt=wa(h);if(lt||(h[De]=lt=new Ye(h)),E=lt.add(_,E,A,fe,$),E.proxy)return E;if(A=zn(),E.proxy=A,A.src=h,A.listener=E,h.addEventListener)z||(G=fe),G===void 0&&(G=!1),h.addEventListener(_.toString(),A,G);else if(h.attachEvent)h.attachEvent(ar(_.toString()),A);else if(h.addListener&&h.removeListener)h.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return E}function zn(){function h(E){return _.call(h.src,h.listener,E)}const _=$l;return h}function jn(h,_,E,A,G){if(Array.isArray(_))for(var $=0;$<_.length;$++)jn(h,_[$],E,A,G);else A=g(A)?!!A.capture:!!A,E=Ao(E),h&&h[he]?(h=h.i,_=String(_).toString(),_ in h.g&&($=h.g[_],E=St($,E,A,G),-1<E&&(Ze($[E]),Array.prototype.splice.call($,E,1),$.length==0&&(delete h.g[_],h.h--)))):h&&(h=wa(h))&&(_=h.g[_.toString()],h=-1,_&&(h=St(_,E,A,G)),(E=-1<h?_[h]:null)&&en(E))}function en(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[he])ot(_.i,h);else{var E=h.type,A=h.proxy;_.removeEventListener?_.removeEventListener(E,A,h.capture):_.detachEvent?_.detachEvent(ar(E),A):_.addListener&&_.removeListener&&_.removeListener(A),(E=wa(_))?(ot(E,h),E.h==0&&(E.src=null,_[De]=null)):Ze(h)}}}function ar(h){return h in Ct?Ct[h]:Ct[h]="on"+h}function $l(h,_){if(h.da)h=!0;else{_=new ee(_,this);var E=h.listener,A=h.ha||h.src;h.fa&&en(h),h=E.call(A,_)}return h}function wa(h){return h=h[De],h instanceof Ye?h:null}var Bt="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ao(h){return typeof h=="function"?h:(h[Bt]||(h[Bt]=function(_){return h.handleEvent(_)}),h[Bt])}function Rt(){M.call(this),this.i=new Ye(this),this.M=this,this.F=null}L(Rt,M),Rt.prototype[he]=!0,Rt.prototype.removeEventListener=function(h,_,E,A){jn(this,h,_,E,A)};function zt(h,_){var E,A=h.F;if(A)for(E=[];A;A=A.F)E.push(A);if(h=h.M,A=_.type||_,typeof _=="string")_=new H(_,h);else if(_ instanceof H)_.target=_.target||h;else{var G=_;_=new H(A,h),O(_,G)}if(G=!0,E)for(var $=E.length-1;0<=$;$--){var fe=_.g=E[$];G=Pi(fe,A,!0,_)&&G}if(fe=_.g=h,G=Pi(fe,A,!0,_)&&G,G=Pi(fe,A,!1,_)&&G,E)for($=0;$<E.length;$++)fe=_.g=E[$],G=Pi(fe,A,!1,_)&&G}Rt.prototype.N=function(){if(Rt.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var E=h.g[_],A=0;A<E.length;A++)Ze(E[A]);delete h.g[_],h.h--}}this.F=null},Rt.prototype.K=function(h,_,E,A){return this.i.add(String(h),_,!1,E,A)},Rt.prototype.L=function(h,_,E,A){return this.i.add(String(h),_,!0,E,A)};function Pi(h,_,E,A){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var G=!0,$=0;$<_.length;++$){var fe=_[$];if(fe&&!fe.da&&fe.capture==E){var lt=fe.listener,jt=fe.ha||fe.src;fe.fa&&ot(h.i,fe),G=lt.call(jt,A)!==!1&&G}}return G&&!A.defaultPrevented}function Sa(h,_,E){if(typeof h=="function")E&&(h=w(h,E));else if(h&&typeof h.handleEvent=="function")h=w(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:f.setTimeout(h,_||0)}function or(h){h.g=Sa(()=>{h.g=null,h.i&&(h.i=!1,or(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class Aa extends M{constructor(_,E){super(),this.m=_,this.l=E,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:or(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _s(h){M.call(this),this.h=h,this.g={}}L(_s,M);var Wi=[];function En(h){Ee(h.g,function(_,E){this.g.hasOwnProperty(E)&&en(_)},h),h.g={}}_s.prototype.N=function(){_s.aa.N.call(this),En(this)},_s.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var mi=f.JSON.stringify,xn=f.JSON.parse,vp=class{stringify(h){return f.JSON.stringify(h,void 0)}parse(h){return f.JSON.parse(h,void 0)}};function Xl(){}Xl.prototype.h=null;function sh(h){return h.h||(h.h=h.i())}function Ca(){}var Yi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function lr(){H.call(this,"d")}L(lr,H);function xi(){H.call(this,"c")}L(xi,H);var gi={},ur=null;function Co(){return ur=ur||new Rt}gi.La="serverreachability";function Zl(h){H.call(this,gi.La,h)}L(Zl,H);function ys(h){const _=Co();zt(_,new Zl(_))}gi.STAT_EVENT="statevent";function cr(h,_){H.call(this,gi.STAT_EVENT,h),this.stat=_}L(cr,H);function cn(h){const _=Co();zt(_,new cr(_,h))}gi.Ma="timingevent";function Jl(h,_){H.call(this,gi.Ma,h),this.size=_}L(Jl,H);function hr(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){h()},_)}function dr(){this.g=!0}dr.prototype.xa=function(){this.g=!1};function eu(h,_,E,A,G,$){h.info(function(){if(h.g)if($)for(var fe="",lt=$.split("&"),jt=0;jt<lt.length;jt++){var Ue=lt[jt].split("=");if(1<Ue.length){var nn=Ue[0];Ue=Ue[1];var sn=nn.split("_");fe=2<=sn.length&&sn[1]=="type"?fe+(nn+"="+Ue+"&"):fe+(nn+"=redacted&")}}else fe=null;else fe=$;return"XMLHTTP REQ ("+A+") [attempt "+G+"]: "+_+`
`+E+`
`+fe})}function tu(h,_,E,A,G,$,fe){h.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+G+"]: "+_+`
`+E+`
`+$+" "+fe})}function vs(h,_,E,A){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+$i(h,E)+(A?" "+A:"")})}function rh(h,_){h.info(function(){return"TIMEOUT: "+_})}dr.prototype.info=function(){};function $i(h,_){if(!h.g)return _;if(!_)return null;try{var E=JSON.parse(_);if(E){for(h=0;h<E.length;h++)if(Array.isArray(E[h])){var A=E[h];if(!(2>A.length)){var G=A[1];if(Array.isArray(G)&&!(1>G.length)){var $=G[0];if($!="noop"&&$!="stop"&&$!="close")for(var fe=1;fe<G.length;fe++)G[fe]=""}}}}return mi(E)}catch{return _}}var It={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},hn={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Xi;function fr(){}L(fr,Xl),fr.prototype.g=function(){return new XMLHttpRequest},fr.prototype.i=function(){return{}},Xi=new fr;function Zi(h,_,E,A){this.j=h,this.i=_,this.l=E,this.R=A||1,this.U=new _s(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ah}function ah(){this.i=null,this.g="",this.h=!1}var nu={},Es={};function Ra(h,_,E){h.L=1,h.v=Pa(Nt(_)),h.m=E,h.P=!0,Ts(h,null)}function Ts(h,_){h.F=Date.now(),Di(h),h.A=Nt(h.v);var E=h.A,A=h.R;Array.isArray(A)||(A=[String(A)]),Ss(E.i,"t",A),h.C=0,E=h.j.J,h.h=new ah,h.g=bh(h.j,E?_:null,!h.m),0<h.O&&(h.M=new Aa(w(h.Y,h,h.g),h.O)),_=h.U,E=h.g,A=h.ca;var G="readystatechange";Array.isArray(G)||(G&&(Wi[0]=G.toString()),G=Wi);for(var $=0;$<G.length;$++){var fe=Jt(E,G[$],A||_.handleEvent,!1,_.h||_);if(!fe)break;_.g[fe.key]=fe}_=h.H?C(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),ys(),eu(h.i,h.u,h.A,h.l,h.R,h.m)}Zi.prototype.ca=function(h){h=h.target;const _=this.M;_&&Mn(h)==3?_.j():this.Y(h)},Zi.prototype.Y=function(h){try{if(h==this.g)e:{const sn=Mn(this.g);var _=this.g.Ba();const Cr=this.g.Z();if(!(3>sn)&&(sn!=3||this.g&&(this.h.h||this.g.oa()||ka(this.g)))){this.J||sn!=4||_==7||(_==8||0>=Cr?ys(3):ys(2)),Ro(this);var E=this.g.Z();this.X=E;t:if(bs(this)){var A=ka(this.g);h="";var G=A.length,$=Mn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Dn(this),pr(this);var fe="";break t}this.h.i=new f.TextDecoder}for(_=0;_<G;_++)this.h.h=!0,h+=this.h.i.decode(A[_],{stream:!($&&_==G-1)});A.length=0,this.h.g+=h,this.C=0,fe=this.h.g}else fe=this.g.oa();if(this.o=E==200,tu(this.i,this.u,this.A,this.l,this.R,sn,E),this.o){if(this.T&&!this.K){t:{if(this.g){var lt,jt=this.g;if((lt=jt.g?jt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!oe(lt)){var Ue=lt;break t}}Ue=null}if(E=Ue)vs(this.i,this.l,E,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ji(this,E);else{this.o=!1,this.s=3,cn(12),Dn(this),pr(this);break e}}if(this.P){E=!0;let Fn;for(;!this.J&&this.C<fe.length;)if(Fn=Ia(this,fe),Fn==Es){sn==4&&(this.s=4,cn(14),E=!1),vs(this.i,this.l,null,"[Incomplete Response]");break}else if(Fn==nu){this.s=4,cn(15),vs(this.i,this.l,fe,"[Invalid Chunk]"),E=!1;break}else vs(this.i,this.l,Fn,null),Ji(this,Fn);if(bs(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),sn!=4||fe.length!=0||this.h.h||(this.s=1,cn(16),E=!1),this.o=this.o&&E,!E)vs(this.i,this.l,fe,"[Invalid Chunked Response]"),Dn(this),pr(this);else if(0<fe.length&&!this.W){this.W=!0;var nn=this.j;nn.g==this&&nn.ba&&!nn.M&&(nn.j.info("Great, no buffering proxy detected. Bytes received: "+fe.length),fu(nn),nn.M=!0,cn(11))}}else vs(this.i,this.l,fe,null),Ji(this,fe);sn==4&&Dn(this),this.o&&!this.J&&(sn==4?vh(this.j,this):(this.o=!1,Di(this)))}else fh(this.g),E==400&&0<fe.indexOf("Unknown SID")?(this.s=3,cn(12)):(this.s=0,cn(13)),Dn(this),pr(this)}}}catch{}finally{}};function bs(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function Ia(h,_){var E=h.C,A=_.indexOf(`
`,E);return A==-1?Es:(E=Number(_.substring(E,A)),isNaN(E)?nu:(A+=1,A+E>_.length?Es:(_=_.slice(A,A+E),h.C=A+E,_)))}Zi.prototype.cancel=function(){this.J=!0,Dn(this)};function Di(h){h.S=Date.now()+h.I,Mt(h,h.I)}function Mt(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=hr(w(h.ba,h),_)}function Ro(h){h.B&&(f.clearTimeout(h.B),h.B=null)}Zi.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(rh(this.i,this.A),this.L!=2&&(ys(),cn(17)),Dn(this),this.s=2,pr(this)):Mt(this,this.S-h)};function pr(h){h.j.G==0||h.J||vh(h.j,h)}function Dn(h){Ro(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,En(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function Ji(h,_){try{var E=h.j;if(E.G!=0&&(E.g==h||mr(E.h,h))){if(!h.K&&mr(E.h,h)&&E.G==3){try{var A=E.Da.g.parse(_)}catch{A=null}if(Array.isArray(A)&&A.length==3){var G=A;if(G[0]==0){e:if(!E.u){if(E.g)if(E.g.F+3e3<h.F)Sr(E),wr(E);else break e;du(E),cn(18)}}else E.za=G[1],0<E.za-E.T&&37500>G[2]&&E.F&&E.v==0&&!E.C&&(E.C=hr(w(E.Za,E),6e3));if(1>=oh(E.h)&&E.ca){try{E.ca()}catch{}E.ca=void 0}}else Cs(E,11)}else if((h.K||E.g==h)&&Sr(E),!oe(_))for(G=E.Da.g.parse(_),_=0;_<G.length;_++){let Ue=G[_];if(E.T=Ue[0],Ue=Ue[1],E.G==2)if(Ue[0]=="c"){E.K=Ue[1],E.ia=Ue[2];const nn=Ue[3];nn!=null&&(E.la=nn,E.j.info("VER="+E.la));const sn=Ue[4];sn!=null&&(E.Aa=sn,E.j.info("SVER="+E.Aa));const Cr=Ue[5];Cr!=null&&typeof Cr=="number"&&0<Cr&&(A=1.5*Cr,E.L=A,E.j.info("backChannelRequestTimeoutMs_="+A)),A=E;const Fn=h.g;if(Fn){const La=Fn.g?Fn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(La){var $=A.h;$.g||La.indexOf("spdy")==-1&&La.indexOf("quic")==-1&&La.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&(gr($,$.h),$.h=null))}if(A.D){const Rs=Fn.g?Fn.g.getResponseHeader("X-HTTP-Session-Id"):null;Rs&&(A.ya=Rs,Je(A.I,A.D,Rs))}}E.G=3,E.l&&E.l.ua(),E.ba&&(E.R=Date.now()-h.F,E.j.info("Handshake RTT: "+E.R+"ms")),A=E;var fe=h;if(A.qa=Th(A,A.J?A.ia:null,A.W),fe.K){_i(A.h,fe);var lt=fe,jt=A.L;jt&&(lt.I=jt),lt.B&&(Ro(lt),Di(lt)),A.g=fe}else _h(A);0<E.i.length&&Oo(E)}else Ue[0]!="stop"&&Ue[0]!="close"||Cs(E,7);else E.G==3&&(Ue[0]=="stop"||Ue[0]=="close"?Ue[0]=="stop"?Cs(E,7):cu(E):Ue[0]!="noop"&&E.l&&E.l.ta(Ue),E.v=0)}}ys(4)}catch{}}var Ep=class{constructor(h,_){this.g=h,this.map=_}};function iu(h){this.l=h||10,f.PerformanceNavigationTiming?(h=f.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function su(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function oh(h){return h.h?1:h.g?h.g.size:0}function mr(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function gr(h,_){h.g?h.g.add(_):h.h=_}function _i(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}iu.prototype.cancel=function(){if(this.i=kn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function kn(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const E of h.g.values())_=_.concat(E.D);return _}return F(h.i)}function lh(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(m(h)){for(var _=[],E=h.length,A=0;A<E;A++)_.push(h[A]);return _}_=[],E=0;for(A in h)_[E++]=h[A];return _}function Tp(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(m(h)||typeof h=="string"){var _=[];h=h.length;for(var E=0;E<h;E++)_.push(E);return _}_=[],E=0;for(const A in h)_[E++]=A;return _}}}function Io(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(m(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var E=Tp(h),A=lh(h),G=A.length,$=0;$<G;$++)_.call(void 0,A[$],E&&E[$],h)}var ru=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function No(h,_){if(h){h=h.split("&");for(var E=0;E<h.length;E++){var A=h[E].indexOf("="),G=null;if(0<=A){var $=h[E].substring(0,A);G=h[E].substring(A+1)}else $=h[E];_($,G?decodeURIComponent(G.replace(/\+/g," ")):"")}}}function ws(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof ws){this.h=h.h,_r(this,h.j),this.o=h.o,this.g=h.g,Na(this,h.s),this.l=h.l;var _=h.i,E=new es;E.i=_.i,_.g&&(E.g=new Map(_.g),E.h=_.h),Po(this,E),this.m=h.m}else h&&(_=String(h).match(ru))?(this.h=!1,_r(this,_[1]||"",!0),this.o=yr(_[2]||""),this.g=yr(_[3]||"",!0),Na(this,_[4]),this.l=yr(_[5]||"",!0),Po(this,_[6]||"",!0),this.m=yr(_[7]||"")):(this.h=!1,this.i=new es(null,this.h))}ws.prototype.toString=function(){var h=[],_=this.j;_&&h.push(yi(_,au,!0),":");var E=this.g;return(E||_=="file")&&(h.push("//"),(_=this.o)&&h.push(yi(_,au,!0),"@"),h.push(encodeURIComponent(String(E)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.s,E!=null&&h.push(":",String(E))),(E=this.l)&&(this.g&&E.charAt(0)!="/"&&h.push("/"),h.push(yi(E,E.charAt(0)=="/"?ou:uh,!0))),(E=this.i.toString())&&h.push("?",E),(E=this.m)&&h.push("#",yi(E,Sp)),h.join("")};function Nt(h){return new ws(h)}function _r(h,_,E){h.j=E?yr(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function Na(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function Po(h,_,E){_ instanceof es?(h.i=_,ch(h.i,h.h)):(E||(_=yi(_,wp)),h.i=new es(_,h.h))}function Je(h,_,E){h.i.set(_,E)}function Pa(h){return Je(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function yr(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function yi(h,_,E){return typeof h=="string"?(h=encodeURI(h).replace(_,bp),E&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function bp(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var au=/[#\/\?@]/g,uh=/[#\?:]/g,ou=/[#\?]/g,wp=/[#\?@]/g,Sp=/#/g;function es(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function tn(h){h.g||(h.g=new Map,h.h=0,h.i&&No(h.i,function(_,E){h.add(decodeURIComponent(_.replace(/\+/g," ")),E)}))}n=es.prototype,n.add=function(h,_){tn(this),this.i=null,h=si(this,h);var E=this.g.get(h);return E||this.g.set(h,E=[]),E.push(_),this.h+=1,this};function xo(h,_){tn(h),_=si(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function Do(h,_){return tn(h),_=si(h,_),h.g.has(_)}n.forEach=function(h,_){tn(this),this.g.forEach(function(E,A){E.forEach(function(G){h.call(_,G,A,this)},this)},this)},n.na=function(){tn(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),E=[];for(let A=0;A<_.length;A++){const G=h[A];for(let $=0;$<G.length;$++)E.push(_[A])}return E},n.V=function(h){tn(this);let _=[];if(typeof h=="string")Do(this,h)&&(_=_.concat(this.g.get(si(this,h))));else{h=Array.from(this.g.values());for(let E=0;E<h.length;E++)_=_.concat(h[E])}return _},n.set=function(h,_){return tn(this),this.i=null,h=si(this,h),Do(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},n.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function Ss(h,_,E){xo(h,_),0<E.length&&(h.i=null,h.g.set(si(h,_),F(E)),h.h+=E.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var E=0;E<_.length;E++){var A=_[E];const $=encodeURIComponent(String(A)),fe=this.V(A);for(A=0;A<fe.length;A++){var G=$;fe[A]!==""&&(G+="="+encodeURIComponent(String(fe[A]))),h.push(G)}}return this.i=h.join("&")};function si(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function ch(h,_){_&&!h.j&&(tn(h),h.i=null,h.g.forEach(function(E,A){var G=A.toLowerCase();A!=G&&(xo(this,A),Ss(this,G,E))},h)),h.j=_}function lu(h,_){const E=new dr;if(f.Image){const A=new Image;A.onload=R(qn,E,"TestLoadImage: loaded",!0,_,A),A.onerror=R(qn,E,"TestLoadImage: error",!1,_,A),A.onabort=R(qn,E,"TestLoadImage: abort",!1,_,A),A.ontimeout=R(qn,E,"TestLoadImage: timeout",!1,_,A),f.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=h}else _(!1)}function hh(h,_){const E=new dr,A=new AbortController,G=setTimeout(()=>{A.abort(),qn(E,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:A.signal}).then($=>{clearTimeout(G),$.ok?qn(E,"TestPingServer: ok",!0,_):qn(E,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(G),qn(E,"TestPingServer: error",!1,_)})}function qn(h,_,E,A,G){try{G&&(G.onload=null,G.onerror=null,G.onabort=null,G.ontimeout=null),A(E)}catch{}}function ki(){this.g=new vp}function uu(h,_,E){const A=E||"";try{Io(h,function(G,$){let fe=G;g(G)&&(fe=mi(G)),_.push(A+$+"="+encodeURIComponent(fe))})}catch(G){throw _.push(A+"type="+encodeURIComponent("_badmap")),G}}function ts(h){this.l=h.Ub||null,this.j=h.eb||!1}L(ts,Xl),ts.prototype.g=function(){return new ri(this.l,this.j)},ts.prototype.i=(function(h){return function(){return h}})({});function ri(h,_){Rt.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}L(ri,Rt),n=ri.prototype,n.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,vr(this)},n.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||f).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ns(this)),this.readyState=0},n.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,vr(this)),this.g&&(this.readyState=3,vr(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ko(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function ko(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}n.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?ns(this):vr(this),this.readyState==3&&ko(this)}},n.Ra=function(h){this.g&&(this.response=this.responseText=h,ns(this))},n.Qa=function(h){this.g&&(this.response=h,ns(this))},n.ga=function(){this.g&&ns(this)};function ns(h){h.readyState=4,h.l=null,h.j=null,h.v=null,vr(h)}n.setRequestHeader=function(h,_){this.u.append(h,_)},n.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var E=_.next();!E.done;)E=E.value,h.push(E[0]+": "+E[1]),E=_.next();return h.join(`\r
`)};function vr(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(ri.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function xa(h){let _="";return Ee(h,function(E,A){_+=A,_+=":",_+=E,_+=`\r
`}),_}function Er(h,_,E){e:{for(A in E){var A=!1;break e}A=!0}A||(E=xa(E),typeof h=="string"?E!=null&&encodeURIComponent(String(E)):Je(h,_,E))}function Et(h){Rt.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}L(Et,Rt);var Tn=/^https?$/i,As=["POST","PUT"];n=Et.prototype,n.Ha=function(h){this.J=h},n.ea=function(h,_,E,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Xi.g(),this.v=this.o?sh(this.o):sh(Xi),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch($){Da(this,$);return}if(h=E||"",E=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var G in A)E.set(G,A[G]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const $ of A.keys())E.set($,A.get($));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(E.keys()).find($=>$.toLowerCase()=="content-type"),G=f.FormData&&h instanceof f.FormData,!(0<=Array.prototype.indexOf.call(As,_,void 0))||A||G||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[$,fe]of E)this.g.setRequestHeader($,fe);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Mo(this),this.u=!0,this.g.send(h),this.u=!1}catch($){Da(this,$)}};function Da(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,Tr(h),br(h)}function Tr(h){h.A||(h.A=!0,zt(h,"complete"),zt(h,"error"))}n.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,zt(this,"complete"),zt(this,"abort"),br(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),br(this,!0)),Et.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?dh(this):this.bb())},n.bb=function(){dh(this)};function dh(h){if(h.h&&typeof c<"u"&&(!h.v[1]||Mn(h)!=4||h.Z()!=2)){if(h.u&&Mn(h)==4)Sa(h.Ea,0,h);else if(zt(h,"readystatechange"),Mn(h)==4){h.h=!1;try{const fe=h.Z();e:switch(fe){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var E;if(!(E=_)){var A;if(A=fe===0){var G=String(h.D).match(ru)[1]||null;!G&&f.self&&f.self.location&&(G=f.self.location.protocol.slice(0,-1)),A=!Tn.test(G?G.toLowerCase():"")}E=A}if(E)zt(h,"complete"),zt(h,"success");else{h.m=6;try{var $=2<Mn(h)?h.g.statusText:""}catch{$=""}h.l=$+" ["+h.Z()+"]",Tr(h)}}finally{br(h)}}}}function br(h,_){if(h.g){Mo(h);const E=h.g,A=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||zt(h,"ready");try{E.onreadystatechange=A}catch{}}}function Mo(h){h.I&&(f.clearTimeout(h.I),h.I=null)}n.isActive=function(){return!!this.g};function Mn(h){return h.g?h.g.readyState:0}n.Z=function(){try{return 2<Mn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),xn(_)}};function ka(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function fh(h){const _={};h=(h.g&&2<=Mn(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<h.length;A++){if(oe(h[A]))continue;var E=U(h[A]);const G=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const $=_[G]||[];_[G]=$,$.push(E)}D(_,function(A){return A.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ma(h,_,E){return E&&E.internalChannelParams&&E.internalChannelParams[h]||_}function ph(h){this.Aa=0,this.i=[],this.j=new dr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ma("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ma("baseRetryDelayMs",5e3,h),this.cb=Ma("retryDelaySeedMs",1e4,h),this.Wa=Ma("forwardChannelMaxRetries",2,h),this.wa=Ma("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new iu(h&&h.concurrentRequestLimit),this.Da=new ki,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ph.prototype,n.la=8,n.G=1,n.connect=function(h,_,E,A){cn(0),this.W=h,this.H=_||{},E&&A!==void 0&&(this.H.OSID=E,this.H.OAID=A),this.F=this.X,this.I=Th(this,null,this.W),Oo(this)};function cu(h){if(mh(h),h.G==3){var _=h.U++,E=Nt(h.I);if(Je(E,"SID",h.K),Je(E,"RID",_),Je(E,"TYPE","terminate"),Oa(h,E),_=new Zi(h,h.j,_),_.L=2,_.v=Pa(Nt(E)),E=!1,f.navigator&&f.navigator.sendBeacon)try{E=f.navigator.sendBeacon(_.v.toString(),"")}catch{}!E&&f.Image&&(new Image().src=_.v,E=!0),E||(_.g=bh(_.j,null),_.g.ea(_.v)),_.F=Date.now(),Di(_)}pu(h)}function wr(h){h.g&&(fu(h),h.g.cancel(),h.g=null)}function mh(h){wr(h),h.u&&(f.clearTimeout(h.u),h.u=null),Sr(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&f.clearTimeout(h.s),h.s=null)}function Oo(h){if(!su(h.h)&&!h.s){h.s=!0;var _=h.Ga;ue||P(),X||(ue(),X=!0),ae.add(_,h),h.B=0}}function Ap(h,_){return oh(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=hr(w(h.Ga,h,_),Eh(h,h.B)),h.B++,!0)}n.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const G=new Zi(this,this.j,h);let $=this.o;if(this.S&&($?($=C($),O($,this.S)):$=this.S),this.m!==null||this.O||(G.H=$,$=null),this.P)e:{for(var _=0,E=0;E<this.i.length;E++){t:{var A=this.i[E];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(_+=A,4096<_){_=E;break e}if(_===4096||E===this.i.length-1){_=E+1;break e}}_=1e3}else _=1e3;_=hu(this,G,_),E=Nt(this.I),Je(E,"RID",h),Je(E,"CVER",22),this.D&&Je(E,"X-HTTP-Session-Id",this.D),Oa(this,E),$&&(this.O?_="headers="+encodeURIComponent(String(xa($)))+"&"+_:this.m&&Er(E,this.m,$)),gr(this.h,G),this.Ua&&Je(E,"TYPE","init"),this.P?(Je(E,"$req",_),Je(E,"SID","null"),G.T=!0,Ra(G,E,null)):Ra(G,E,_),this.G=2}}else this.G==3&&(h?gh(this,h):this.i.length==0||su(this.h)||gh(this))};function gh(h,_){var E;_?E=_.l:E=h.U++;const A=Nt(h.I);Je(A,"SID",h.K),Je(A,"RID",E),Je(A,"AID",h.T),Oa(h,A),h.m&&h.o&&Er(A,h.m,h.o),E=new Zi(h,h.j,E,h.B+1),h.m===null&&(E.H=h.o),_&&(h.i=_.D.concat(h.i)),_=hu(h,E,1e3),E.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),gr(h.h,E),Ra(E,A,_)}function Oa(h,_){h.H&&Ee(h.H,function(E,A){Je(_,A,E)}),h.l&&Io({},function(E,A){Je(_,A,E)})}function hu(h,_,E){E=Math.min(h.i.length,E);var A=h.l?w(h.l.Na,h.l,h):null;e:{var G=h.i;let $=-1;for(;;){const fe=["count="+E];$==-1?0<E?($=G[0].g,fe.push("ofs="+$)):$=0:fe.push("ofs="+$);let lt=!0;for(let jt=0;jt<E;jt++){let Ue=G[jt].g;const nn=G[jt].map;if(Ue-=$,0>Ue)$=Math.max(0,G[jt].g-100),lt=!1;else try{uu(nn,fe,"req"+Ue+"_")}catch{A&&A(nn)}}if(lt){A=fe.join("&");break e}}}return h=h.i.splice(0,E),_.D=h,A}function _h(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;ue||P(),X||(ue(),X=!0),ae.add(_,h),h.v=0}}function du(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=hr(w(h.Fa,h),Eh(h,h.v)),h.v++,!0)}n.Fa=function(){if(this.u=null,yh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=hr(w(this.ab,this),h)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,cn(10),wr(this),yh(this))};function fu(h){h.A!=null&&(f.clearTimeout(h.A),h.A=null)}function yh(h){h.g=new Zi(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=Nt(h.qa);Je(_,"RID","rpc"),Je(_,"SID",h.K),Je(_,"AID",h.T),Je(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&Je(_,"TO",h.ja),Je(_,"TYPE","xmlhttp"),Oa(h,_),h.m&&h.o&&Er(_,h.m,h.o),h.L&&(h.g.I=h.L);var E=h.g;h=h.ia,E.L=1,E.v=Pa(Nt(_)),E.m=null,E.P=!0,Ts(E,h)}n.Za=function(){this.C!=null&&(this.C=null,wr(this),du(this),cn(19))};function Sr(h){h.C!=null&&(f.clearTimeout(h.C),h.C=null)}function vh(h,_){var E=null;if(h.g==_){Sr(h),fu(h),h.g=null;var A=2}else if(mr(h.h,_))E=_.D,_i(h.h,_),A=1;else return;if(h.G!=0){if(_.o)if(A==1){E=_.m?_.m.length:0,_=Date.now()-_.F;var G=h.B;A=Co(),zt(A,new Jl(A,E)),Oo(h)}else _h(h);else if(G=_.s,G==3||G==0&&0<_.X||!(A==1&&Ap(h,_)||A==2&&du(h)))switch(E&&0<E.length&&(_=h.h,_.i=_.i.concat(E)),G){case 1:Cs(h,5);break;case 4:Cs(h,10);break;case 3:Cs(h,6);break;default:Cs(h,2)}}}function Eh(h,_){let E=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(E*=2),E*_}function Cs(h,_){if(h.j.info("Error code "+_),_==2){var E=w(h.fb,h),A=h.Xa;const G=!A;A=new ws(A||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||_r(A,"https"),Pa(A),G?lu(A.toString(),E):hh(A.toString(),E)}else cn(2);h.G=0,h.l&&h.l.sa(_),pu(h),mh(h)}n.fb=function(h){h?(this.j.info("Successfully pinged google.com"),cn(2)):(this.j.info("Failed to ping google.com"),cn(1))};function pu(h){if(h.G=0,h.ka=[],h.l){const _=kn(h.h);(_.length!=0||h.i.length!=0)&&(B(h.ka,_),B(h.ka,h.i),h.h.i.length=0,F(h.i),h.i.length=0),h.l.ra()}}function Th(h,_,E){var A=E instanceof ws?Nt(E):new ws(E);if(A.g!="")_&&(A.g=_+"."+A.g),Na(A,A.s);else{var G=f.location;A=G.protocol,_=_?_+"."+G.hostname:G.hostname,G=+G.port;var $=new ws(null);A&&_r($,A),_&&($.g=_),G&&Na($,G),E&&($.l=E),A=$}return E=h.D,_=h.ya,E&&_&&Je(A,E,_),Je(A,"VER",h.la),Oa(h,A),A}function bh(h,_,E){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new Et(new ts({eb:E})):new Et(h.pa),_.Ha(h.J),_}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function wh(){}n=wh.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Lo(){}Lo.prototype.g=function(h,_){return new On(h,_)};function On(h,_){Rt.call(this),this.g=new ph(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!oe(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!oe(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new Ar(this)}L(On,Rt),On.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},On.prototype.close=function(){cu(this.g)},On.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var E={};E.__data__=h,h=E}else this.u&&(E={},E.__data__=mi(h),h=E);_.i.push(new Ep(_.Ya++,h)),_.G==3&&Oo(_)},On.prototype.N=function(){this.g.l=null,delete this.j,cu(this.g),delete this.g,On.aa.N.call(this)};function Sh(h){lr.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const E in _){h=E;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}L(Sh,lr);function Ah(){xi.call(this),this.status=1}L(Ah,xi);function Ar(h){this.g=h}L(Ar,wh),Ar.prototype.ua=function(){zt(this.g,"a")},Ar.prototype.ta=function(h){zt(this.g,new Sh(h))},Ar.prototype.sa=function(h){zt(this.g,new Ah)},Ar.prototype.ra=function(){zt(this.g,"b")},Lo.prototype.createWebChannel=Lo.prototype.g,On.prototype.send=On.prototype.o,On.prototype.open=On.prototype.m,On.prototype.close=On.prototype.close,fS=function(){return new Lo},dS=function(){return Co()},hS=gi,s_={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},It.NO_ERROR=0,It.TIMEOUT=8,It.HTTP_ERROR=6,Bd=It,hn.COMPLETE="complete",cS=hn,Ca.EventType=Yi,Yi.OPEN="a",Yi.CLOSE="b",Yi.ERROR="c",Yi.MESSAGE="d",Rt.prototype.listen=Rt.prototype.K,sc=Ca,Et.prototype.listenOnce=Et.prototype.L,Et.prototype.getLastError=Et.prototype.Ka,Et.prototype.getLastErrorCode=Et.prototype.Ba,Et.prototype.getStatus=Et.prototype.Z,Et.prototype.getResponseJson=Et.prototype.Oa,Et.prototype.getResponseText=Et.prototype.oa,Et.prototype.send=Et.prototype.ea,Et.prototype.setWithCredentials=Et.prototype.Ha,uS=Et}).apply(typeof Nd<"u"?Nd:typeof self<"u"?self:typeof window<"u"?window:{});const TT="@firebase/firestore",bT="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sn=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Sn.UNAUTHENTICATED=new Sn(null),Sn.GOOGLE_CREDENTIALS=new Sn("google-credentials-uid"),Sn.FIRST_PARTY=new Sn("first-party-uid"),Sn.MOCK_USER=new Sn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ul="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo=new Bc("@firebase/firestore");function dl(){return lo.logLevel}function me(n,...e){if(lo.logLevel<=He.DEBUG){const t=e.map(W_);lo.debug(`Firestore (${Ul}): ${n}`,...t)}}function $s(n,...e){if(lo.logLevel<=He.ERROR){const t=e.map(W_);lo.error(`Firestore (${Ul}): ${n}`,...t)}}function ua(n,...e){if(lo.logLevel<=He.WARN){const t=e.map(W_);lo.warn(`Firestore (${Ul}): ${n}`,...t)}}function W_(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,pS(n,s,t)}function pS(n,e,t){let s=`FIRESTORE (${Ul}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw $s(s),new Error(s)}function rt(n,e,t,s){let a="Unexpected state";typeof t=="string"?a=t:s=t,n||pS(e,a,s)}function Pe(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class pe extends Qi{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class BP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Sn.UNAUTHENTICATED)))}shutdown(){}}class zP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class jP{constructor(e){this.t=e,this.currentUser=Sn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){rt(this.o===void 0,42304);let s=this.i;const a=m=>this.i!==s?(s=this.i,t(m)):Promise.resolve();let l=new ls;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new ls,e.enqueueRetryable((()=>a(this.currentUser)))};const c=()=>{const m=l;e.enqueueRetryable((async()=>{await m.promise,await a(this.currentUser)}))},f=m=>{me("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((m=>f(m))),setTimeout((()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?f(m):(me("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new ls)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(me("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(rt(typeof s.accessToken=="string",31837,{l:s}),new mS(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return rt(e===null||typeof e=="string",2055,{h:e}),new Sn(e)}}class qP{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Sn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class FP{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new qP(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Sn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class wT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class HP{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Un(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){rt(this.o===void 0,3512);const s=l=>{l.error!=null&&me("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,me("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>s(l)))};const a=l=>{me("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>a(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):me("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new wT(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(rt(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new wT(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GP(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gS(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=GP(40);for(let l=0;l<a.length;++l)s.length<20&&a[l]<t&&(s+=e.charAt(a[l]%62))}return s}}function Be(n,e){return n<e?-1:n>e?1:0}function r_(n,e){let t=0;for(;t<n.length&&t<e.length;){const s=n.codePointAt(t),a=e.codePointAt(t);if(s!==a){if(s<128&&a<128)return Be(s,a);{const l=gS(),c=KP(l.encode(ST(n,t)),l.encode(ST(e,t)));return c!==0?c:Be(s,a)}}t+=s>65535?2:1}return Be(n.length,e.length)}function ST(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function KP(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Be(n[t],e[t]);return Be(n.length,e.length)}function Sl(n,e,t){return n.length===e.length&&n.every(((s,a)=>t(s,e[a])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AT="__name__";class os{constructor(e,t,s){t===void 0?t=0:t>e.length&&Ie(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&Ie(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return os.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof os?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const l=os.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Be(e.length,t.length)}static compareSegments(e,t){const s=os.isNumericId(e),a=os.isNumericId(t);return s&&!a?-1:!s&&a?1:s&&a?os.extractNumericId(e).compare(os.extractNumericId(t)):r_(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ra.fromString(e.substring(4,e.length-2))}}class vt extends os{construct(e,t,s){return new vt(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new pe(te.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((a=>a.length>0)))}return new vt(t)}static emptyPath(){return new vt([])}}const QP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yn extends os{construct(e,t,s){return new yn(e,t,s)}static isValidIdentifier(e){return QP.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yn.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===AT}static keyField(){return new yn([AT])}static fromServerFormat(e){const t=[];let s="",a=0;const l=()=>{if(s.length===0)throw new pe(te.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let c=!1;for(;a<e.length;){const f=e[a];if(f==="\\"){if(a+1===e.length)throw new pe(te.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[a+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new pe(te.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=m,a+=2}else f==="`"?(c=!c,a++):f!=="."||c?(s+=f,a++):(l(),a++)}if(l(),c)throw new pe(te.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new yn(t)}static emptyPath(){return new yn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.path=e}static fromPath(e){return new be(vt.fromString(e))}static fromName(e){return new be(vt.fromString(e).popFirst(5))}static empty(){return new be(vt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&vt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return vt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new be(new vt(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _S(n,e,t){if(!t)throw new pe(te.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function WP(n,e,t,s){if(e===!0&&s===!0)throw new pe(te.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function CT(n){if(!be.isDocumentKey(n))throw new pe(te.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function RT(n){if(be.isDocumentKey(n))throw new pe(te.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function yS(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Bf(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ie(12329,{type:typeof n})}function Rn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new pe(te.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Bf(n);throw new pe(te.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function YP(n,e){if(e<=0)throw new pe(te.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(n,e){const t={typeString:n};return e&&(t.value=e),t}function jc(n,e){if(!yS(n))throw new pe(te.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const a=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const c=n[s];if(a&&typeof c!==a){t=`JSON field '${s}' must be a ${a}.`;break}if(l!==void 0&&c!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new pe(te.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT=-62135596800,NT=1e6;class gt{static now(){return gt.fromMillis(Date.now())}static fromDate(e){return gt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*NT);return new gt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new pe(te.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new pe(te.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<IT)throw new pe(te.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new pe(te.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/NT}_compareTo(e){return this.seconds===e.seconds?Be(this.nanoseconds,e.nanoseconds):Be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:gt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(jc(e,gt._jsonSchema))return new gt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-IT;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}gt._jsonSchemaVersion="firestore/timestamp/1.0",gt._jsonSchema={type:Wt("string",gt._jsonSchemaVersion),seconds:Wt("number"),nanoseconds:Wt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{static fromTimestamp(e){return new ke(e)}static min(){return new ke(new gt(0,0))}static max(){return new ke(new gt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc=-1;function $P(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,a=ke.fromTimestamp(s===1e9?new gt(t+1,0):new gt(t,s));return new ca(a,be.empty(),e)}function XP(n){return new ca(n.readTime,n.key,wc)}class ca{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new ca(ke.min(),be.empty(),wc)}static max(){return new ca(ke.max(),be.empty(),wc)}}function ZP(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=be.comparator(n.documentKey,e.documentKey),t!==0?t:Be(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ex{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bl(n){if(n.code!==te.FAILED_PRECONDITION||n.message!==JP)throw n;me("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ie(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new re(((s,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,a)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof re?t:re.resolve(t)}catch(t){return re.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):re.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):re.reject(t)}static resolve(e){return new re(((t,s)=>{t(e)}))}static reject(e){return new re(((t,s)=>{s(e)}))}static waitFor(e){return new re(((t,s)=>{let a=0,l=0,c=!1;e.forEach((f=>{++a,f.next((()=>{++l,c&&l===a&&t()}),(m=>s(m)))})),c=!0,l===a&&t()}))}static or(e){let t=re.resolve(!1);for(const s of e)t=t.next((a=>a?re.resolve(a):s()));return t}static forEach(e,t){const s=[];return e.forEach(((a,l)=>{s.push(t.call(this,a,l))})),this.waitFor(s)}static mapArray(e,t){return new re(((s,a)=>{const l=e.length,c=new Array(l);let f=0;for(let m=0;m<l;m++){const g=m;t(e[g]).next((v=>{c[g]=v,++f,f===l&&s(c)}),(v=>a(v)))}}))}static doWhile(e,t){return new re(((s,a)=>{const l=()=>{e()===!0?t().next((()=>{l()}),a):s()};l()}))}}function tx(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function zl(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this._e(s),this.ae=s=>t.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}zf.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_=-1;function jf(n){return n==null}function Jd(n){return n===0&&1/n==-1/0}function nx(n){return typeof n=="number"&&Number.isInteger(n)&&!Jd(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS="";function ix(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=PT(e)),e=sx(n.get(t),e);return PT(e)}function sx(n,e){let t=e;const s=n.length;for(let a=0;a<s;a++){const l=n.charAt(a);switch(l){case"\0":t+="";break;case vS:t+="";break;default:t+=l}}return t}function PT(n){return n+vS+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xT(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ea(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function rx(n,e){const t=[];for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&t.push(e(n[s],s,n));return t}function ES(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yt=class a_{constructor(e,t){this.comparator=e,this.root=t||aa.EMPTY}insert(e,t){return new a_(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,aa.BLACK,null,null))}remove(e){return new a_(this.comparator,this.root.remove(e,this.comparator).copy(null,null,aa.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return t+s.left.size;a<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pd(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pd(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pd(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pd(this.root,e,this.comparator,!0)}},Pd=class{constructor(e,t,s,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},aa=class Fs{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??Fs.RED,this.left=a??Fs.EMPTY,this.right=l??Fs.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,a,l){return new Fs(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return Fs.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return Fs.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Fs.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Fs.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ie(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ie(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ie(27949);return e+(this.isRed()?0:1)}};aa.EMPTY=null,aa.RED=!0,aa.BLACK=!1;aa.EMPTY=new class{constructor(){this.size=0}get key(){throw Ie(57766)}get value(){throw Ie(16141)}get color(){throw Ie(16727)}get left(){throw Ie(29726)}get right(){throw Ie(36894)}copy(e,t,s,a,l){return this}insert(e,t,s){return new aa(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.comparator=e,this.data=new Yt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new DT(this.data.getIterator())}getIteratorFrom(e){return new DT(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Zt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Zt(this.comparator);return t.data=e,t}}class DT{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e){this.fields=e,e.sort(yn.comparator)}static empty(){return new fi([])}unionWith(e){let t=new Zt(yn.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new fi(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Sl(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new TS("Invalid base64 string: "+l):l}})(e);return new vn(t)}static fromUint8Array(e){const t=(function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l})(e);return new vn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}vn.EMPTY_BYTE_STRING=new vn("");const ax=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ha(n){if(rt(!!n,39018),typeof n=="string"){let e=0;const t=ax.exec(n);if(rt(!!t,46558,{timestamp:n}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Vt(n.seconds),nanos:Vt(n.nanos)}}function Vt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function da(n){return typeof n=="string"?vn.fromBase64String(n):vn.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bS="server_timestamp",wS="__type__",SS="__previous_value__",AS="__local_write_time__";function X_(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[wS])===null||t===void 0?void 0:t.stringValue)===bS}function qf(n){const e=n.mapValue.fields[SS];return X_(e)?qf(e):e}function Sc(n){const e=ha(n.mapValue.fields[AS].timestampValue);return new gt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(e,t,s,a,l,c,f,m,g,v){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=f,this.longPollingOptions=m,this.useFetchStreams=g,this.isUsingEmulator=v}}const ef="(default)";class Ac{constructor(e,t){this.projectId=e,this.database=t||ef}static empty(){return new Ac("","")}get isDefaultDatabase(){return this.database===ef}isEqual(e){return e instanceof Ac&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS="__type__",lx="__max__",xd={mapValue:{}},RS="__vector__",tf="value";function fa(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?X_(n)?4:cx(n)?9007199254740991:ux(n)?10:11:Ie(28295,{value:n})}function ms(n,e){if(n===e)return!0;const t=fa(n);if(t!==fa(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Sc(n).isEqual(Sc(e));case 3:return(function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=ha(a.timestampValue),f=ha(l.timestampValue);return c.seconds===f.seconds&&c.nanos===f.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(a,l){return da(a.bytesValue).isEqual(da(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(a,l){return Vt(a.geoPointValue.latitude)===Vt(l.geoPointValue.latitude)&&Vt(a.geoPointValue.longitude)===Vt(l.geoPointValue.longitude)})(n,e);case 2:return(function(a,l){if("integerValue"in a&&"integerValue"in l)return Vt(a.integerValue)===Vt(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=Vt(a.doubleValue),f=Vt(l.doubleValue);return c===f?Jd(c)===Jd(f):isNaN(c)&&isNaN(f)}return!1})(n,e);case 9:return Sl(n.arrayValue.values||[],e.arrayValue.values||[],ms);case 10:case 11:return(function(a,l){const c=a.mapValue.fields||{},f=l.mapValue.fields||{};if(xT(c)!==xT(f))return!1;for(const m in c)if(c.hasOwnProperty(m)&&(f[m]===void 0||!ms(c[m],f[m])))return!1;return!0})(n,e);default:return Ie(52216,{left:n})}}function Cc(n,e){return(n.values||[]).find((t=>ms(t,e)))!==void 0}function Al(n,e){if(n===e)return 0;const t=fa(n),s=fa(e);if(t!==s)return Be(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Be(n.booleanValue,e.booleanValue);case 2:return(function(l,c){const f=Vt(l.integerValue||l.doubleValue),m=Vt(c.integerValue||c.doubleValue);return f<m?-1:f>m?1:f===m?0:isNaN(f)?isNaN(m)?0:-1:1})(n,e);case 3:return kT(n.timestampValue,e.timestampValue);case 4:return kT(Sc(n),Sc(e));case 5:return r_(n.stringValue,e.stringValue);case 6:return(function(l,c){const f=da(l),m=da(c);return f.compareTo(m)})(n.bytesValue,e.bytesValue);case 7:return(function(l,c){const f=l.split("/"),m=c.split("/");for(let g=0;g<f.length&&g<m.length;g++){const v=Be(f[g],m[g]);if(v!==0)return v}return Be(f.length,m.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,c){const f=Be(Vt(l.latitude),Vt(c.latitude));return f!==0?f:Be(Vt(l.longitude),Vt(c.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return MT(n.arrayValue,e.arrayValue);case 10:return(function(l,c){var f,m,g,v;const T=l.fields||{},w=c.fields||{},R=(f=T[tf])===null||f===void 0?void 0:f.arrayValue,L=(m=w[tf])===null||m===void 0?void 0:m.arrayValue,F=Be(((g=R?.values)===null||g===void 0?void 0:g.length)||0,((v=L?.values)===null||v===void 0?void 0:v.length)||0);return F!==0?F:MT(R,L)})(n.mapValue,e.mapValue);case 11:return(function(l,c){if(l===xd.mapValue&&c===xd.mapValue)return 0;if(l===xd.mapValue)return 1;if(c===xd.mapValue)return-1;const f=l.fields||{},m=Object.keys(f),g=c.fields||{},v=Object.keys(g);m.sort(),v.sort();for(let T=0;T<m.length&&T<v.length;++T){const w=r_(m[T],v[T]);if(w!==0)return w;const R=Al(f[m[T]],g[v[T]]);if(R!==0)return R}return Be(m.length,v.length)})(n.mapValue,e.mapValue);default:throw Ie(23264,{le:t})}}function kT(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Be(n,e);const t=ha(n),s=ha(e),a=Be(t.seconds,s.seconds);return a!==0?a:Be(t.nanos,s.nanos)}function MT(n,e){const t=n.values||[],s=e.values||[];for(let a=0;a<t.length&&a<s.length;++a){const l=Al(t[a],s[a]);if(l)return l}return Be(t.length,s.length)}function Cl(n){return o_(n)}function o_(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=ha(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return da(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return be.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",a=!0;for(const l of t.values||[])a?a=!1:s+=",",s+=o_(l);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const c of s)l?l=!1:a+=",",a+=`${c}:${o_(t.fields[c])}`;return a+"}"})(n.mapValue):Ie(61005,{value:n})}function zd(n){switch(fa(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=qf(n);return e?16+zd(e):16;case 5:return 2*n.stringValue.length;case 6:return da(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((a,l)=>a+zd(l)),0)})(n.arrayValue);case 10:case 11:return(function(s){let a=0;return Ea(s.fields,((l,c)=>{a+=l.length+zd(c)})),a})(n.mapValue);default:throw Ie(13486,{value:n})}}function OT(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function l_(n){return!!n&&"integerValue"in n}function Z_(n){return!!n&&"arrayValue"in n}function LT(n){return!!n&&"nullValue"in n}function VT(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function jd(n){return!!n&&"mapValue"in n}function ux(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[CS])===null||t===void 0?void 0:t.stringValue)===RS}function uc(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ea(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=uc(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=uc(n.arrayValue.values[t]);return e}return Object.assign({},n)}function cx(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===lx}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e){this.value=e}static empty(){return new Xn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!jd(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=uc(t)}setAll(e){let t=yn.emptyPath(),s={},a=[];e.forEach(((c,f)=>{if(!t.isImmediateParentOf(f)){const m=this.getFieldsMap(t);this.applyChanges(m,s,a),s={},a=[],t=f.popLast()}c?s[f.lastSegment()]=uc(c):a.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,s,a)}delete(e){const t=this.field(e.popLast());jd(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ms(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=t.mapValue.fields[e.get(s)];jd(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,s){Ea(t,((a,l)=>e[a]=l));for(const a of s)delete e[a]}clone(){return new Xn(uc(this.value))}}function IS(n){const e=[];return Ea(n.fields,((t,s)=>{const a=new yn([t]);if(jd(s)){const l=IS(s.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)})),new fi(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e,t,s,a,l,c,f){this.key=e,this.documentType=t,this.version=s,this.readTime=a,this.createTime=l,this.data=c,this.documentState=f}static newInvalidDocument(e){return new An(e,0,ke.min(),ke.min(),ke.min(),Xn.empty(),0)}static newFoundDocument(e,t,s,a){return new An(e,1,t,ke.min(),s,a,0)}static newNoDocument(e,t){return new An(e,2,t,ke.min(),ke.min(),Xn.empty(),0)}static newUnknownDocument(e,t){return new An(e,3,t,ke.min(),ke.min(),Xn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ke.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Xn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Xn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ke.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof An&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new An(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e,t){this.position=e,this.inclusive=t}}function UT(n,e,t){let s=0;for(let a=0;a<n.position.length;a++){const l=e[a],c=n.position[a];if(l.field.isKeyField()?s=be.comparator(be.fromName(c.referenceValue),t.key):s=Al(c,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function BT(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ms(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,t="asc"){this.field=e,this.dir=t}}function hx(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{}class Qt extends NS{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new fx(e,t,s):t==="array-contains"?new gx(e,s):t==="in"?new _x(e,s):t==="not-in"?new yx(e,s):t==="array-contains-any"?new vx(e,s):new Qt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new px(e,s):new mx(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Al(t,this.value)):t!==null&&fa(this.value)===fa(t)&&this.matchesComparison(Al(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ie(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Gi extends NS{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Gi(e,t)}matches(e){return PS(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function PS(n){return n.op==="and"}function xS(n){return dx(n)&&PS(n)}function dx(n){for(const e of n.filters)if(e instanceof Gi)return!1;return!0}function u_(n){if(n instanceof Qt)return n.field.canonicalString()+n.op.toString()+Cl(n.value);if(xS(n))return n.filters.map((e=>u_(e))).join(",");{const e=n.filters.map((t=>u_(t))).join(",");return`${n.op}(${e})`}}function DS(n,e){return n instanceof Qt?(function(s,a){return a instanceof Qt&&s.op===a.op&&s.field.isEqual(a.field)&&ms(s.value,a.value)})(n,e):n instanceof Gi?(function(s,a){return a instanceof Gi&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce(((l,c,f)=>l&&DS(c,a.filters[f])),!0):!1})(n,e):void Ie(19439)}function kS(n){return n instanceof Qt?(function(t){return`${t.field.canonicalString()} ${t.op} ${Cl(t.value)}`})(n):n instanceof Gi?(function(t){return t.op.toString()+" {"+t.getFilters().map(kS).join(" ,")+"}"})(n):"Filter"}class fx extends Qt{constructor(e,t,s){super(e,t,s),this.key=be.fromName(s.referenceValue)}matches(e){const t=be.comparator(e.key,this.key);return this.matchesComparison(t)}}class px extends Qt{constructor(e,t){super(e,"in",t),this.keys=MS("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class mx extends Qt{constructor(e,t){super(e,"not-in",t),this.keys=MS("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function MS(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((s=>be.fromName(s.referenceValue)))}class gx extends Qt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Z_(t)&&Cc(t.arrayValue,this.value)}}class _x extends Qt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Cc(this.value.arrayValue,t)}}class yx extends Qt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Cc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Cc(this.value.arrayValue,t)}}class vx extends Qt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Z_(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Cc(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(e,t=null,s=[],a=[],l=null,c=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=a,this.limit=l,this.startAt=c,this.endAt=f,this.Pe=null}}function zT(n,e=null,t=[],s=[],a=null,l=null,c=null){return new Ex(n,e,t,s,a,l,c)}function J_(n){const e=Pe(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>u_(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(l){return l.field.canonicalString()+l.dir})(s))).join(","),jf(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>Cl(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>Cl(s))).join(",")),e.Pe=t}return e.Pe}function ey(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!hx(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!DS(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!BT(n.startAt,e.startAt)&&BT(n.endAt,e.endAt)}function c_(n){return be.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,t=null,s=[],a=[],l=null,c="F",f=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=a,this.limit=l,this.limitType=c,this.startAt=f,this.endAt=m,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Tx(n,e,t,s,a,l,c,f){return new jl(n,e,t,s,a,l,c,f)}function Ff(n){return new jl(n)}function jT(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function OS(n){return n.collectionGroup!==null}function cc(n){const e=Pe(n);if(e.Te===null){e.Te=[];const t=new Set;for(const l of e.explicitOrderBy)e.Te.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let f=new Zt(yn.comparator);return c.filters.forEach((m=>{m.getFlattenedFilters().forEach((g=>{g.isInequality()&&(f=f.add(g.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Te.push(new Rc(l,s))})),t.has(yn.keyField().canonicalString())||e.Te.push(new Rc(yn.keyField(),s))}return e.Te}function us(n){const e=Pe(n);return e.Ie||(e.Ie=LS(e,cc(n))),e.Ie}function bx(n){const e=Pe(n);return e.de||(e.de=LS(e,n.explicitOrderBy)),e.de}function LS(n,e){if(n.limitType==="F")return zT(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((a=>{const l=a.dir==="desc"?"asc":"desc";return new Rc(a.field,l)}));const t=n.endAt?new nf(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new nf(n.startAt.position,n.startAt.inclusive):null;return zT(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function h_(n,e){const t=n.filters.concat([e]);return new jl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function sf(n,e,t){return new jl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Hf(n,e){return ey(us(n),us(e))&&n.limitType===e.limitType}function VS(n){return`${J_(us(n))}|lt:${n.limitType}`}function fl(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((a=>kS(a))).join(", ")}]`),jf(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((a=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(a))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((a=>Cl(a))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((a=>Cl(a))).join(",")),`Target(${s})`})(us(n))}; limitType=${n.limitType})`}function Gf(n,e){return e.isFoundDocument()&&(function(s,a){const l=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):be.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)})(n,e)&&(function(s,a){for(const l of cc(s))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(s,a){for(const l of s.filters)if(!l.matches(a))return!1;return!0})(n,e)&&(function(s,a){return!(s.startAt&&!(function(c,f,m){const g=UT(c,f,m);return c.inclusive?g<=0:g<0})(s.startAt,cc(s),a)||s.endAt&&!(function(c,f,m){const g=UT(c,f,m);return c.inclusive?g>=0:g>0})(s.endAt,cc(s),a))})(n,e)}function wx(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function US(n){return(e,t)=>{let s=!1;for(const a of cc(n)){const l=Sx(a,e,t);if(l!==0)return l;s=s||a.field.isKeyField()}return 0}}function Sx(n,e,t){const s=n.field.isKeyField()?be.comparator(e.key,t.key):(function(l,c,f){const m=c.data.field(l),g=f.data.field(l);return m!==null&&g!==null?Al(m,g):Ie(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return Ie(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[a,l]of s)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[t]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){Ea(this.inner,((t,s)=>{for(const[a,l]of s)e(a,l)}))}isEmpty(){return ES(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ax=new Yt(be.comparator);function Xs(){return Ax}const BS=new Yt(be.comparator);function rc(...n){let e=BS;for(const t of n)e=e.insert(t.key,t);return e}function zS(n){let e=BS;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function eo(){return hc()}function jS(){return hc()}function hc(){return new To((n=>n.toString()),((n,e)=>n.isEqual(e)))}const Cx=new Yt(be.comparator),Rx=new Zt(be.comparator);function We(...n){let e=Rx;for(const t of n)e=e.add(t);return e}const Ix=new Zt(Be);function Nx(){return Ix}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ty(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Jd(e)?"-0":e}}function qS(n){return{integerValue:""+n}}function Px(n,e){return nx(e)?qS(e):ty(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(){this._=void 0}}function xx(n,e,t){return n instanceof Ic?(function(a,l){const c={fields:{[wS]:{stringValue:bS},[AS]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&X_(l)&&(l=qf(l)),l&&(c.fields[SS]=l),{mapValue:c}})(t,e):n instanceof Rl?HS(n,e):n instanceof Il?GS(n,e):(function(a,l){const c=FS(a,l),f=qT(c)+qT(a.Ee);return l_(c)&&l_(a.Ee)?qS(f):ty(a.serializer,f)})(n,e)}function Dx(n,e,t){return n instanceof Rl?HS(n,e):n instanceof Il?GS(n,e):t}function FS(n,e){return n instanceof rf?(function(s){return l_(s)||(function(l){return!!l&&"doubleValue"in l})(s)})(e)?e:{integerValue:0}:null}class Ic extends Kf{}class Rl extends Kf{constructor(e){super(),this.elements=e}}function HS(n,e){const t=KS(e);for(const s of n.elements)t.some((a=>ms(a,s)))||t.push(s);return{arrayValue:{values:t}}}class Il extends Kf{constructor(e){super(),this.elements=e}}function GS(n,e){let t=KS(e);for(const s of n.elements)t=t.filter((a=>!ms(a,s)));return{arrayValue:{values:t}}}class rf extends Kf{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function qT(n){return Vt(n.integerValue||n.doubleValue)}function KS(n){return Z_(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e,t){this.field=e,this.transform=t}}function kx(n,e){return n.field.isEqual(e.field)&&(function(s,a){return s instanceof Rl&&a instanceof Rl||s instanceof Il&&a instanceof Il?Sl(s.elements,a.elements,ms):s instanceof rf&&a instanceof rf?ms(s.Ee,a.Ee):s instanceof Ic&&a instanceof Ic})(n.transform,e.transform)}class Mx{constructor(e,t){this.version=e,this.transformResults=t}}class Bn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Bn}static exists(e){return new Bn(void 0,e)}static updateTime(e){return new Bn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function qd(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Qf{}function QS(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Wf(n.key,Bn.none()):new qc(n.key,n.data,Bn.none());{const t=n.data,s=Xn.empty();let a=new Zt(yn.comparator);for(let l of e.fields)if(!a.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?s.delete(l):s.set(l,c),a=a.add(l)}return new Ta(n.key,s,new fi(a.toArray()),Bn.none())}}function Ox(n,e,t){n instanceof qc?(function(a,l,c){const f=a.value.clone(),m=HT(a.fieldTransforms,l,c.transformResults);f.setAll(m),l.convertToFoundDocument(c.version,f).setHasCommittedMutations()})(n,e,t):n instanceof Ta?(function(a,l,c){if(!qd(a.precondition,l))return void l.convertToUnknownDocument(c.version);const f=HT(a.fieldTransforms,l,c.transformResults),m=l.data;m.setAll(WS(a)),m.setAll(f),l.convertToFoundDocument(c.version,m).setHasCommittedMutations()})(n,e,t):(function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function dc(n,e,t,s){return n instanceof qc?(function(l,c,f,m){if(!qd(l.precondition,c))return f;const g=l.value.clone(),v=GT(l.fieldTransforms,m,c);return g.setAll(v),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null})(n,e,t,s):n instanceof Ta?(function(l,c,f,m){if(!qd(l.precondition,c))return f;const g=GT(l.fieldTransforms,m,c),v=c.data;return v.setAll(WS(l)),v.setAll(g),c.convertToFoundDocument(c.version,v).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((T=>T.field)))})(n,e,t,s):(function(l,c,f){return qd(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):f})(n,e,t)}function Lx(n,e){let t=null;for(const s of n.fieldTransforms){const a=e.data.field(s.field),l=FS(s.transform,a||null);l!=null&&(t===null&&(t=Xn.empty()),t.set(s.field,l))}return t||null}function FT(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&Sl(s,a,((l,c)=>kx(l,c)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class qc extends Qf{constructor(e,t,s,a=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Ta extends Qf{constructor(e,t,s,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function WS(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function HT(n,e,t){const s=new Map;rt(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let a=0;a<t.length;a++){const l=n[a],c=l.transform,f=e.data.field(l.field);s.set(l.field,Dx(c,f,t[a]))}return s}function GT(n,e,t){const s=new Map;for(const a of n){const l=a.transform,c=t.data.field(a.field);s.set(a.field,xx(l,c,e))}return s}class Wf extends Qf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Vx extends Qf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ux{constructor(e,t,s,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&Ox(l,e,s[a])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=dc(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=dc(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=jS();return this.mutations.forEach((a=>{const l=e.get(a.key),c=l.overlayedDocument;let f=this.applyToLocalView(c,l.mutatedFields);f=t.has(a.key)?null:f;const m=QS(c,f);m!==null&&s.set(a.key,m),c.isValidDocument()||c.convertToNoDocument(ke.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),We())}isEqual(e){return this.batchId===e.batchId&&Sl(this.mutations,e.mutations,((t,s)=>FT(t,s)))&&Sl(this.baseMutations,e.baseMutations,((t,s)=>FT(t,s)))}}class iy{constructor(e,t,s,a){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=a}static from(e,t,s){rt(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let a=(function(){return Cx})();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,s[c].version);return new iy(e,t,s,a)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx{constructor(e,t,s){this.alias=e,this.aggregateType=t,this.fieldPath=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kt,Xe;function qx(n){switch(n){case te.OK:return Ie(64938);case te.CANCELLED:case te.UNKNOWN:case te.DEADLINE_EXCEEDED:case te.RESOURCE_EXHAUSTED:case te.INTERNAL:case te.UNAVAILABLE:case te.UNAUTHENTICATED:return!1;case te.INVALID_ARGUMENT:case te.NOT_FOUND:case te.ALREADY_EXISTS:case te.PERMISSION_DENIED:case te.FAILED_PRECONDITION:case te.ABORTED:case te.OUT_OF_RANGE:case te.UNIMPLEMENTED:case te.DATA_LOSS:return!0;default:return Ie(15467,{code:n})}}function YS(n){if(n===void 0)return $s("GRPC error has no .code"),te.UNKNOWN;switch(n){case Kt.OK:return te.OK;case Kt.CANCELLED:return te.CANCELLED;case Kt.UNKNOWN:return te.UNKNOWN;case Kt.DEADLINE_EXCEEDED:return te.DEADLINE_EXCEEDED;case Kt.RESOURCE_EXHAUSTED:return te.RESOURCE_EXHAUSTED;case Kt.INTERNAL:return te.INTERNAL;case Kt.UNAVAILABLE:return te.UNAVAILABLE;case Kt.UNAUTHENTICATED:return te.UNAUTHENTICATED;case Kt.INVALID_ARGUMENT:return te.INVALID_ARGUMENT;case Kt.NOT_FOUND:return te.NOT_FOUND;case Kt.ALREADY_EXISTS:return te.ALREADY_EXISTS;case Kt.PERMISSION_DENIED:return te.PERMISSION_DENIED;case Kt.FAILED_PRECONDITION:return te.FAILED_PRECONDITION;case Kt.ABORTED:return te.ABORTED;case Kt.OUT_OF_RANGE:return te.OUT_OF_RANGE;case Kt.UNIMPLEMENTED:return te.UNIMPLEMENTED;case Kt.DATA_LOSS:return te.DATA_LOSS;default:return Ie(39323,{code:n})}}(Xe=Kt||(Kt={}))[Xe.OK=0]="OK",Xe[Xe.CANCELLED=1]="CANCELLED",Xe[Xe.UNKNOWN=2]="UNKNOWN",Xe[Xe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Xe[Xe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Xe[Xe.NOT_FOUND=5]="NOT_FOUND",Xe[Xe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Xe[Xe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Xe[Xe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Xe[Xe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Xe[Xe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Xe[Xe.ABORTED=10]="ABORTED",Xe[Xe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Xe[Xe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Xe[Xe.INTERNAL=13]="INTERNAL",Xe[Xe.UNAVAILABLE=14]="UNAVAILABLE",Xe[Xe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fx=new ra([4294967295,4294967295],0);function KT(n){const e=gS().encode(n),t=new lS;return t.update(e),new Uint8Array(t.digest())}function QT(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new ra([t,s],0),new ra([a,l],0)]}class sy{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new ac(`Invalid padding: ${t}`);if(s<0)throw new ac(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new ac(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new ac(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=ra.fromNumber(this.fe)}pe(e,t,s){let a=e.add(t.multiply(ra.fromNumber(s)));return a.compare(Fx)===1&&(a=new ra([a.getBits(0),a.getBits(1)],0)),a.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=KT(e),[s,a]=QT(t);for(let l=0;l<this.hashCount;l++){const c=this.pe(s,a,l);if(!this.ye(c))return!1}return!0}static create(e,t,s){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new sy(l,a,t);return s.forEach((f=>c.insert(f))),c}insert(e){if(this.fe===0)return;const t=KT(e),[s,a]=QT(t);for(let l=0;l<this.hashCount;l++){const c=this.pe(s,a,l);this.we(c)}}we(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class ac extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e,t,s,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const a=new Map;return a.set(e,Fc.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Yf(ke.min(),a,new Yt(Be),Xs(),We())}}class Fc{constructor(e,t,s,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Fc(s,t,We(),We(),We())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e,t,s,a){this.Se=e,this.removedTargetIds=t,this.key=s,this.be=a}}class $S{constructor(e,t){this.targetId=e,this.De=t}}class XS{constructor(e,t,s=vn.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=a}}class WT{constructor(){this.ve=0,this.Ce=YT(),this.Fe=vn.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=We(),t=We(),s=We();return this.Ce.forEach(((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:s=s.add(a);break;default:Ie(38017,{changeType:l})}})),new Fc(this.Fe,this.Me,e,t,s)}ke(){this.xe=!1,this.Ce=YT()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,rt(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class Hx{constructor(e){this.We=e,this.Ge=new Map,this.ze=Xs(),this.je=Dd(),this.Je=Dd(),this.He=new Yt(Be)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const s=this.tt(t);switch(e.state){case 0:this.nt(t)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),s.Be(e.resumeToken));break;default:Ie(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((s,a)=>{this.nt(a)&&t(a)}))}it(e){const t=e.targetId,s=e.De.count,a=this.st(t);if(a){const l=a.target;if(c_(l))if(s===0){const c=new be(l.path);this.Xe(t,c,An.newNoDocument(c,ke.min()))}else rt(s===1,20013,{expectedCount:s});else{const c=this.ot(t);if(c!==s){const f=this._t(e),m=f?this.ut(f,e,c):1;if(m!==0){this.rt(t);const g=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,g)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:a=0},hashCount:l=0}=t;let c,f;try{c=da(s).toUint8Array()}catch(m){if(m instanceof TS)return ua("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{f=new sy(c,a,l)}catch(m){return ua(m instanceof ac?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return f.fe===0?null:f}ut(e,t,s){return t.De.count===s-this.ht(e,t.targetId)?0:2}ht(e,t){const s=this.We.getRemoteKeysForTarget(t);let a=0;return s.forEach((l=>{const c=this.We.lt(),f=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.Xe(t,l,null),a++)})),a}Pt(e){const t=new Map;this.Ge.forEach(((l,c)=>{const f=this.st(c);if(f){if(l.current&&c_(f.target)){const m=new be(f.target.path);this.Tt(m).has(c)||this.It(c,m)||this.Xe(c,m,An.newNoDocument(m,e))}l.Ne&&(t.set(c,l.Le()),l.ke())}}));let s=We();this.Je.forEach(((l,c)=>{let f=!0;c.forEachWhile((m=>{const g=this.st(m);return!g||g.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(s=s.add(l))})),this.ze.forEach(((l,c)=>c.setReadTime(e)));const a=new Yf(e,t,this.He,this.ze,s);return this.ze=Xs(),this.je=Dd(),this.Je=Dd(),this.He=new Yt(Be),a}Ze(e,t){if(!this.nt(e))return;const s=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,s),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,s){if(!this.nt(e))return;const a=this.tt(e);this.It(e,t)?a.qe(t,1):a.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),s&&(this.ze=this.ze.insert(t,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new WT,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Zt(Be),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Zt(Be),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||me("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new WT),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Dd(){return new Yt(be.comparator)}function YT(){return new Yt(be.comparator)}const Gx={asc:"ASCENDING",desc:"DESCENDING"},Kx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Qx={and:"AND",or:"OR"};class Wx{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function d_(n,e){return n.useProto3Json||jf(e)?e:{value:e}}function af(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ZS(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Yx(n,e){return af(n,e.toTimestamp())}function cs(n){return rt(!!n,49232),ke.fromTimestamp((function(t){const s=ha(t);return new gt(s.seconds,s.nanos)})(n))}function ry(n,e){return f_(n,e).canonicalString()}function f_(n,e){const t=(function(a){return new vt(["projects",a.projectId,"databases",a.database])})(n).child("documents");return e===void 0?t:t.child(e)}function JS(n){const e=vt.fromString(n);return rt(rA(e),10190,{key:e.toString()}),e}function p_(n,e){return ry(n.databaseId,e.path)}function xg(n,e){const t=JS(e);if(t.get(1)!==n.databaseId.projectId)throw new pe(te.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new pe(te.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new be(tA(t))}function eA(n,e){return ry(n.databaseId,e)}function $x(n){const e=JS(n);return e.length===4?vt.emptyPath():tA(e)}function m_(n){return new vt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function tA(n){return rt(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function $T(n,e,t){return{name:p_(n,e),fields:t.value.mapValue.fields}}function Xx(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Ie(39313,{state:g})})(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=(function(g,v){return g.useProto3Json?(rt(v===void 0||typeof v=="string",58123),vn.fromBase64String(v||"")):(rt(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),vn.fromUint8Array(v||new Uint8Array))})(n,e.targetChange.resumeToken),c=e.targetChange.cause,f=c&&(function(g){const v=g.code===void 0?te.UNKNOWN:YS(g.code);return new pe(v,g.message||"")})(c);t=new XS(s,a,l,f||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const a=xg(n,s.document.name),l=cs(s.document.updateTime),c=s.document.createTime?cs(s.document.createTime):ke.min(),f=new Xn({mapValue:{fields:s.document.fields}}),m=An.newFoundDocument(a,l,c,f),g=s.targetIds||[],v=s.removedTargetIds||[];t=new Fd(g,v,m.key,m)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const a=xg(n,s.document),l=s.readTime?cs(s.readTime):ke.min(),c=An.newNoDocument(a,l),f=s.removedTargetIds||[];t=new Fd([],f,c.key,c)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const a=xg(n,s.document),l=s.removedTargetIds||[];t=new Fd([],l,a,null)}else{if(!("filter"in e))return Ie(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:a=0,unchangedNames:l}=s,c=new jx(a,l),f=s.targetId;t=new $S(f,c)}}return t}function Zx(n,e){let t;if(e instanceof qc)t={update:$T(n,e.key,e.value)};else if(e instanceof Wf)t={delete:p_(n,e.key)};else if(e instanceof Ta)t={update:$T(n,e.key,e.data),updateMask:oD(e.fieldMask)};else{if(!(e instanceof Vx))return Ie(16599,{Rt:e.type});t={verify:p_(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(l,c){const f=c.transform;if(f instanceof Ic)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof Rl)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof Il)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof rf)return{fieldPath:c.field.canonicalString(),increment:f.Ee};throw Ie(20930,{transform:c.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(a,l){return l.updateTime!==void 0?{updateTime:Yx(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Ie(27497)})(n,e.precondition)),t}function Jx(n,e){return n&&n.length>0?(rt(e!==void 0,14353),n.map((t=>(function(a,l){let c=a.updateTime?cs(a.updateTime):cs(l);return c.isEqual(ke.min())&&(c=cs(l)),new Mx(c,a.transformResults||[])})(t,e)))):[]}function eD(n,e){return{documents:[eA(n,e.path)]}}function nA(n,e){const t={structuredQuery:{}},s=e.path;let a;e.collectionGroup!==null?(a=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=eA(n,a);const l=(function(g){if(g.length!==0)return sA(Gi.create(g,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const c=(function(g){if(g.length!==0)return g.map((v=>(function(w){return{field:Xr(w.field),direction:sD(w.dir)}})(v)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const f=d_(n,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(e.endAt)),{Vt:t,parent:a}}function tD(n,e,t,s){const{Vt:a,parent:l}=nA(n,e),c={},f=[];let m=0;return t.forEach((g=>{const v="aggregate_"+m++;c[v]=g.alias,g.aggregateType==="count"?f.push({alias:v,count:{}}):g.aggregateType==="avg"?f.push({alias:v,avg:{field:Xr(g.fieldPath)}}):g.aggregateType==="sum"&&f.push({alias:v,sum:{field:Xr(g.fieldPath)}})})),{request:{structuredAggregationQuery:{aggregations:f,structuredQuery:a.structuredQuery},parent:a.parent},ft:c,parent:l}}function nD(n){let e=$x(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let a=null;if(s>0){rt(s===1,65062);const v=t.from[0];v.allDescendants?a=v.collectionId:e=e.child(v.collectionId)}let l=[];t.where&&(l=(function(T){const w=iA(T);return w instanceof Gi&&xS(w)?w.getFilters():[w]})(t.where));let c=[];t.orderBy&&(c=(function(T){return T.map((w=>(function(L){return new Rc(pl(L.field),(function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(L.direction))})(w)))})(t.orderBy));let f=null;t.limit&&(f=(function(T){let w;return w=typeof T=="object"?T.value:T,jf(w)?null:w})(t.limit));let m=null;t.startAt&&(m=(function(T){const w=!!T.before,R=T.values||[];return new nf(R,w)})(t.startAt));let g=null;return t.endAt&&(g=(function(T){const w=!T.before,R=T.values||[];return new nf(R,w)})(t.endAt)),Tx(e,a,c,l,f,"F",m,g)}function iD(n,e){const t=(function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ie(28987,{purpose:a})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function iA(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=pl(t.unaryFilter.field);return Qt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=pl(t.unaryFilter.field);return Qt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=pl(t.unaryFilter.field);return Qt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=pl(t.unaryFilter.field);return Qt.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ie(61313);default:return Ie(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Qt.create(pl(t.fieldFilter.field),(function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ie(58110);default:return Ie(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Gi.create(t.compositeFilter.filters.map((s=>iA(s))),(function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return Ie(1026)}})(t.compositeFilter.op))})(n):Ie(30097,{filter:n})}function sD(n){return Gx[n]}function rD(n){return Kx[n]}function aD(n){return Qx[n]}function Xr(n){return{fieldPath:n.canonicalString()}}function pl(n){return yn.fromServerFormat(n.fieldPath)}function sA(n){return n instanceof Qt?(function(t){if(t.op==="=="){if(VT(t.value))return{unaryFilter:{field:Xr(t.field),op:"IS_NAN"}};if(LT(t.value))return{unaryFilter:{field:Xr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(VT(t.value))return{unaryFilter:{field:Xr(t.field),op:"IS_NOT_NAN"}};if(LT(t.value))return{unaryFilter:{field:Xr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xr(t.field),op:rD(t.op),value:t.value}}})(n):n instanceof Gi?(function(t){const s=t.getFilters().map((a=>sA(a)));return s.length===1?s[0]:{compositeFilter:{op:aD(t.op),filters:s}}})(n):Ie(54877,{filter:n})}function oD(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function rA(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,t,s,a,l=ke.min(),c=ke.min(),f=vn.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=f,this.expectedCount=m}withSequenceNumber(e){return new ta(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ta(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ta(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ta(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lD{constructor(e){this.gt=e}}function uD(n){const e=nD({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?sf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{constructor(){this.Dn=new hD}addToCollectionParentIndex(e,t){return this.Dn.add(t),re.resolve()}getCollectionParents(e,t){return re.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return re.resolve()}deleteFieldIndex(e,t){return re.resolve()}deleteAllFieldIndexes(e){return re.resolve()}createTargetIndexes(e,t){return re.resolve()}getDocumentsMatchingTarget(e,t){return re.resolve(null)}getIndexType(e,t){return re.resolve(0)}getFieldIndexes(e,t){return re.resolve([])}getNextCollectionGroupToUpdate(e){return re.resolve(null)}getMinOffset(e,t){return re.resolve(ca.min())}getMinOffsetFromCollectionGroup(e,t){return re.resolve(ca.min())}updateCollectionGroup(e,t,s){return re.resolve()}updateIndexEntries(e,t){return re.resolve()}}class hD{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t]||new Zt(vt.comparator),l=!a.has(s);return this.index[t]=a.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t];return a&&a.has(s)}getEntries(e){return(this.index[e]||new Zt(vt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},aA=41943040;class $n{static withCacheSize(e){return new $n(e,$n.DEFAULT_COLLECTION_PERCENTILE,$n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$n.DEFAULT_COLLECTION_PERCENTILE=10,$n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,$n.DEFAULT=new $n(aA,$n.DEFAULT_COLLECTION_PERCENTILE,$n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),$n.DISABLED=new $n(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Nl(0)}static ur(){return new Nl(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT="LruGarbageCollector",dD=1048576;function JT([n,e],[t,s]){const a=Be(n,t);return a===0?Be(e,s):a}class fD{constructor(e){this.Tr=e,this.buffer=new Zt(JT),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();JT(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class pD{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){me(ZT,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){zl(t)?me(ZT,"Ignoring IndexedDB error during garbage collection: ",t):await Bl(t)}await this.Rr(3e5)}))}}class mD{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return re.resolve(zf.ue);const s=new fD(t);return this.Vr.forEachTarget(e,(a=>s.Er(a.sequenceNumber))).next((()=>this.Vr.gr(e,(a=>s.Er(a))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(me("LruGarbageCollector","Garbage collection skipped; disabled"),re.resolve(XT)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(me("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),XT):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let s,a,l,c,f,m,g;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(me("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),a=this.params.maximumSequenceNumbersToCollect):a=T,c=Date.now(),this.nthSequenceNumber(e,a)))).next((T=>(s=T,f=Date.now(),this.removeTargets(e,s,t)))).next((T=>(l=T,m=Date.now(),this.removeOrphanedDocuments(e,s)))).next((T=>(g=Date.now(),dl()<=He.DEBUG&&me("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-v}ms
	Determined least recently used ${a} in `+(f-c)+`ms
	Removed ${l} targets in `+(m-f)+`ms
	Removed ${T} documents in `+(g-m)+`ms
Total Duration: ${g-v}ms`),re.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:T}))))}}function gD(n,e){return new mD(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _D{constructor(){this.changes=new To((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,An.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?re.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yD{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vD{constructor(e,t,s,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((a=>(s=a,this.remoteDocumentCache.getEntry(e,t)))).next((a=>(s!==null&&dc(s.mutation,a,fi.empty(),gt.now()),a)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,We()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=We()){const a=eo();return this.populateOverlays(e,a,t).next((()=>this.computeViews(e,t,a,s).next((l=>{let c=rc();return l.forEach(((f,m)=>{c=c.insert(f,m.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const s=eo();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,We())))}populateOverlays(e,t,s){const a=[];return s.forEach((l=>{t.has(l)||a.push(l)})),this.documentOverlayCache.getOverlays(e,a).next((l=>{l.forEach(((c,f)=>{t.set(c,f)}))}))}computeViews(e,t,s,a){let l=Xs();const c=hc(),f=(function(){return hc()})();return t.forEach(((m,g)=>{const v=s.get(g.key);a.has(g.key)&&(v===void 0||v.mutation instanceof Ta)?l=l.insert(g.key,g):v!==void 0?(c.set(g.key,v.mutation.getFieldMask()),dc(v.mutation,g,v.mutation.getFieldMask(),gt.now())):c.set(g.key,fi.empty())})),this.recalculateAndSaveOverlays(e,l).next((m=>(m.forEach(((g,v)=>c.set(g,v))),t.forEach(((g,v)=>{var T;return f.set(g,new yD(v,(T=c.get(g))!==null&&T!==void 0?T:null))})),f)))}recalculateAndSaveOverlays(e,t){const s=hc();let a=new Yt(((c,f)=>c-f)),l=We();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const f of c)f.keys().forEach((m=>{const g=t.get(m);if(g===null)return;let v=s.get(m)||fi.empty();v=f.applyToLocalView(g,v),s.set(m,v);const T=(a.get(f.batchId)||We()).add(m);a=a.insert(f.batchId,T)}))})).next((()=>{const c=[],f=a.getReverseIterator();for(;f.hasNext();){const m=f.getNext(),g=m.key,v=m.value,T=jS();v.forEach((w=>{if(!l.has(w)){const R=QS(t.get(w),s.get(w));R!==null&&T.set(w,R),l=l.add(w)}})),c.push(this.documentOverlayCache.saveOverlays(e,g,T))}return re.waitFor(c)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,a){return(function(c){return be.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):OS(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,a):this.getDocumentsMatchingCollectionQuery(e,t,s,a)}getNextDocuments(e,t,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,a).next((l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,a-l.size):re.resolve(eo());let f=wc,m=l;return c.next((g=>re.forEach(g,((v,T)=>(f<T.largestBatchId&&(f=T.largestBatchId),l.get(v)?re.resolve():this.remoteDocumentCache.getEntry(e,v).next((w=>{m=m.insert(v,w)}))))).next((()=>this.populateOverlays(e,g,l))).next((()=>this.computeViews(e,m,g,We()))).next((v=>({batchId:f,changes:zS(v)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new be(t)).next((s=>{let a=rc();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,a){const l=t.collectionGroup;let c=rc();return this.indexManager.getCollectionParents(e,l).next((f=>re.forEach(f,(m=>{const g=(function(T,w){return new jl(w,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,m.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,s,a).next((v=>{v.forEach(((T,w)=>{c=c.insert(T,w)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,s,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,a)))).next((c=>{l.forEach(((m,g)=>{const v=g.getKey();c.get(v)===null&&(c=c.insert(v,An.newInvalidDocument(v)))}));let f=rc();return c.forEach(((m,g)=>{const v=l.get(m);v!==void 0&&dc(v.mutation,g,fi.empty(),gt.now()),Gf(t,g)&&(f=f.insert(m,g))})),f}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ED{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return re.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(a){return{id:a.id,version:a.version,createTime:cs(a.createTime)}})(t)),re.resolve()}getNamedQuery(e,t){return re.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(a){return{name:a.name,query:uD(a.bundledQuery),readTime:cs(a.readTime)}})(t)),re.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TD{constructor(){this.overlays=new Yt(be.comparator),this.kr=new Map}getOverlay(e,t){return re.resolve(this.overlays.get(t))}getOverlays(e,t){const s=eo();return re.forEach(t,(a=>this.getOverlay(e,a).next((l=>{l!==null&&s.set(a,l)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((a,l)=>{this.wt(e,t,l)})),re.resolve()}removeOverlaysForBatchId(e,t,s){const a=this.kr.get(s);return a!==void 0&&(a.forEach((l=>this.overlays=this.overlays.remove(l))),this.kr.delete(s)),re.resolve()}getOverlaysForCollection(e,t,s){const a=eo(),l=t.length+1,c=new be(t.child("")),f=this.overlays.getIteratorFrom(c);for(;f.hasNext();){const m=f.getNext().value,g=m.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&m.largestBatchId>s&&a.set(m.getKey(),m)}return re.resolve(a)}getOverlaysForCollectionGroup(e,t,s,a){let l=new Yt(((g,v)=>g-v));const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>s){let v=l.get(g.largestBatchId);v===null&&(v=eo(),l=l.insert(g.largestBatchId,v)),v.set(g.getKey(),g)}}const f=eo(),m=l.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach(((g,v)=>f.set(g,v))),!(f.size()>=a)););return re.resolve(f)}wt(e,t,s){const a=this.overlays.get(s.key);if(a!==null){const c=this.kr.get(a.largestBatchId).delete(s.key);this.kr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(s.key,new Bx(t,s));let l=this.kr.get(t);l===void 0&&(l=We(),this.kr.set(t,l)),this.kr.set(t,l.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bD{constructor(){this.sessionToken=vn.EMPTY_BYTE_STRING}getSessionToken(e){return re.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,re.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(){this.qr=new Zt(on.Qr),this.$r=new Zt(on.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const s=new on(e,t);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new on(e,t))}Gr(e,t){e.forEach((s=>this.removeReference(s,t)))}zr(e){const t=new be(new vt([])),s=new on(t,e),a=new on(t,e+1),l=[];return this.$r.forEachInRange([s,a],(c=>{this.Wr(c),l.push(c.key)})),l}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new be(new vt([])),s=new on(t,e),a=new on(t,e+1);let l=We();return this.$r.forEachInRange([s,a],(c=>{l=l.add(c.key)})),l}containsKey(e){const t=new on(e,0),s=this.qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class on{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return be.comparator(e.key,t.key)||Be(e.Hr,t.Hr)}static Ur(e,t){return Be(e.Hr,t.Hr)||be.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wD{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Zt(on.Qr)}checkEmpty(e){return re.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,a){const l=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new Ux(l,t,s,a);this.mutationQueue.push(c);for(const f of a)this.Yr=this.Yr.add(new on(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return re.resolve(c)}lookupMutationBatch(e,t){return re.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,a=this.Xr(s),l=a<0?0:a;return re.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return re.resolve(this.mutationQueue.length===0?$_:this.er-1)}getAllMutationBatches(e){return re.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new on(t,0),a=new on(t,Number.POSITIVE_INFINITY),l=[];return this.Yr.forEachInRange([s,a],(c=>{const f=this.Zr(c.Hr);l.push(f)})),re.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Zt(Be);return t.forEach((a=>{const l=new on(a,0),c=new on(a,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([l,c],(f=>{s=s.add(f.Hr)}))})),re.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,a=s.length+1;let l=s;be.isDocumentKey(l)||(l=l.child(""));const c=new on(new be(l),0);let f=new Zt(Be);return this.Yr.forEachWhile((m=>{const g=m.key.path;return!!s.isPrefixOf(g)&&(g.length===a&&(f=f.add(m.Hr)),!0)}),c),re.resolve(this.ei(f))}ei(e){const t=[];return e.forEach((s=>{const a=this.Zr(s);a!==null&&t.push(a)})),t}removeMutationBatch(e,t){rt(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return re.forEach(t.mutations,(a=>{const l=new on(a.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)})).next((()=>{this.Yr=s}))}rr(e){}containsKey(e,t){const s=new on(t,0),a=this.Yr.firstAfterOrEqual(s);return re.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,re.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SD{constructor(e){this.ni=e,this.docs=(function(){return new Yt(be.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,a=this.docs.get(s),l=a?a.size:0,c=this.ni(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return re.resolve(s?s.document.mutableCopy():An.newInvalidDocument(t))}getEntries(e,t){let s=Xs();return t.forEach((a=>{const l=this.docs.get(a);s=s.insert(a,l?l.document.mutableCopy():An.newInvalidDocument(a))})),re.resolve(s)}getDocumentsMatchingQuery(e,t,s,a){let l=Xs();const c=t.path,f=new be(c.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(f);for(;m.hasNext();){const{key:g,value:{document:v}}=m.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||ZP(XP(v),s)<=0||(a.has(v.key)||Gf(t,v))&&(l=l.insert(v.key,v.mutableCopy()))}return re.resolve(l)}getAllFromCollectionGroup(e,t,s,a){Ie(9500)}ri(e,t){return re.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new AD(this)}getSize(e){return re.resolve(this.size)}}class AD extends _D{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((s,a)=>{a.isValidDocument()?t.push(this.Or.addEntry(e,a)):this.Or.removeEntry(s)})),re.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{constructor(e){this.persistence=e,this.ii=new To((t=>J_(t)),ey),this.lastRemoteSnapshotVersion=ke.min(),this.highestTargetId=0,this.si=0,this.oi=new ay,this.targetCount=0,this._i=Nl.ar()}forEachTarget(e,t){return this.ii.forEach(((s,a)=>t(a))),re.resolve()}getLastRemoteSnapshotVersion(e){return re.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return re.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),re.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.si&&(this.si=t),re.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Nl(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,re.resolve()}updateTargetData(e,t){return this.hr(t),re.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,re.resolve()}removeTargets(e,t,s){let a=0;const l=[];return this.ii.forEach(((c,f)=>{f.sequenceNumber<=t&&s.get(f.targetId)===null&&(this.ii.delete(c),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),a++)})),re.waitFor(l).next((()=>a))}getTargetCount(e){return re.resolve(this.targetCount)}getTargetData(e,t){const s=this.ii.get(t)||null;return re.resolve(s)}addMatchingKeys(e,t,s){return this.oi.Kr(t,s),re.resolve()}removeMatchingKeys(e,t,s){this.oi.Gr(t,s);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach((c=>{l.push(a.markPotentiallyOrphaned(e,c))})),re.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),re.resolve()}getMatchingKeysForTargetId(e,t){const s=this.oi.Jr(t);return re.resolve(s)}containsKey(e,t){return re.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e,t){this.ai={},this.overlays={},this.ui=new zf(0),this.ci=!1,this.ci=!0,this.li=new bD,this.referenceDelegate=e(this),this.hi=new CD(this),this.indexManager=new cD,this.remoteDocumentCache=(function(a){return new SD(a)})((s=>this.referenceDelegate.Pi(s))),this.serializer=new lD(t),this.Ti=new ED(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new TD,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ai[e.toKey()];return s||(s=new wD(t,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,s){me("MemoryPersistence","Starting transaction:",e);const a=new RD(this.ui.next());return this.referenceDelegate.Ii(),s(a).next((l=>this.referenceDelegate.di(a).next((()=>l)))).toPromise().then((l=>(a.raiseOnCommittedEvent(),l)))}Ei(e,t){return re.or(Object.values(this.ai).map((s=>()=>s.containsKey(e,t))))}}class RD extends ex{constructor(e){super(),this.currentSequenceNumber=e}}class oy{constructor(e){this.persistence=e,this.Ai=new ay,this.Ri=null}static Vi(e){return new oy(e)}get mi(){if(this.Ri)return this.Ri;throw Ie(60996)}addReference(e,t,s){return this.Ai.addReference(s,t),this.mi.delete(s.toString()),re.resolve()}removeReference(e,t,s){return this.Ai.removeReference(s,t),this.mi.add(s.toString()),re.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),re.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((a=>this.mi.add(a.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((a=>{a.forEach((l=>this.mi.add(l.toString())))})).next((()=>s.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return re.forEach(this.mi,(s=>{const a=be.fromPath(s);return this.fi(e,a).next((l=>{l||t.removeEntry(a,ke.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((s=>{s?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return re.or([()=>re.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class of{constructor(e,t){this.persistence=e,this.gi=new To((s=>ix(s.path)),((s,a)=>s.isEqual(a))),this.garbageCollector=gD(this,t)}static Vi(e,t){return new of(e,t)}Ii(){}di(e){return re.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((a=>s+a))))}yr(e){let t=0;return this.gr(e,(s=>{t++})).next((()=>t))}gr(e,t){return re.forEach(this.gi,((s,a)=>this.Sr(e,s,a).next((l=>l?re.resolve():t(a)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.ri(e,(c=>this.Sr(e,c,t).next((f=>{f||(s++,l.removeEntry(c,ke.min()))})))).next((()=>l.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),re.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),re.resolve()}removeReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),re.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),re.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=zd(e.data.value)),t}Sr(e,t,s){return re.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.gi.get(t);return re.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e,t,s,a){this.targetId=e,this.fromCache=t,this.Is=s,this.ds=a}static Es(e,t){let s=We(),a=We();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new ly(e,t.fromCache,s,a)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ND{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return fN()?8:tx(In())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,s,a){const l={result:null};return this.ps(e,t).next((c=>{l.result=c})).next((()=>{if(!l.result)return this.ys(e,t,a,s).next((c=>{l.result=c}))})).next((()=>{if(l.result)return;const c=new ID;return this.ws(e,t,c).next((f=>{if(l.result=f,this.Rs)return this.Ss(e,t,c,f.size)}))})).next((()=>l.result))}Ss(e,t,s,a){return s.documentReadCount<this.Vs?(dl()<=He.DEBUG&&me("QueryEngine","SDK will not create cache indexes for query:",fl(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),re.resolve()):(dl()<=He.DEBUG&&me("QueryEngine","Query:",fl(t),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.fs*a?(dl()<=He.DEBUG&&me("QueryEngine","The SDK decides to create cache indexes for query:",fl(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,us(t))):re.resolve())}ps(e,t){if(jT(t))return re.resolve(null);let s=us(t);return this.indexManager.getIndexType(e,s).next((a=>a===0?null:(t.limit!==null&&a===1&&(t=sf(t,null,"F"),s=us(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((l=>{const c=We(...l);return this.gs.getDocuments(e,c).next((f=>this.indexManager.getMinOffset(e,s).next((m=>{const g=this.bs(t,f);return this.Ds(t,g,c,m.readTime)?this.ps(e,sf(t,null,"F")):this.vs(e,g,t,m)}))))})))))}ys(e,t,s,a){return jT(t)||a.isEqual(ke.min())?re.resolve(null):this.gs.getDocuments(e,s).next((l=>{const c=this.bs(t,l);return this.Ds(t,c,s,a)?re.resolve(null):(dl()<=He.DEBUG&&me("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),fl(t)),this.vs(e,c,t,$P(a,wc)).next((f=>f)))}))}bs(e,t){let s=new Zt(US(e));return t.forEach(((a,l)=>{Gf(e,l)&&(s=s.add(l))})),s}Ds(e,t,s,a){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}ws(e,t,s){return dl()<=He.DEBUG&&me("QueryEngine","Using full collection scan to execute query:",fl(t)),this.gs.getDocumentsMatchingQuery(e,t,ca.min(),s)}vs(e,t,s,a){return this.gs.getDocumentsMatchingQuery(e,s,a).next((l=>(t.forEach((c=>{l=l.insert(c.key,c)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy="LocalStore",PD=3e8;class xD{constructor(e,t,s,a){this.persistence=e,this.Cs=t,this.serializer=a,this.Fs=new Yt(Be),this.Ms=new To((l=>J_(l)),ey),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new vD(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function DD(n,e,t,s){return new xD(n,e,t,s)}async function lA(n,e){const t=Pe(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let a;return t.mutationQueue.getAllMutationBatches(s).next((l=>(a=l,t.Ns(e),t.mutationQueue.getAllMutationBatches(s)))).next((l=>{const c=[],f=[];let m=We();for(const g of a){c.push(g.batchId);for(const v of g.mutations)m=m.add(v.key)}for(const g of l){f.push(g.batchId);for(const v of g.mutations)m=m.add(v.key)}return t.localDocuments.getDocuments(s,m).next((g=>({Bs:g,removedBatchIds:c,addedBatchIds:f})))}))}))}function kD(n,e){const t=Pe(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const a=e.batch.keys(),l=t.Os.newChangeBuffer({trackRemovals:!0});return(function(f,m,g,v){const T=g.batch,w=T.keys();let R=re.resolve();return w.forEach((L=>{R=R.next((()=>v.getEntry(m,L))).next((F=>{const B=g.docVersions.get(L);rt(B!==null,48541),F.version.compareTo(B)<0&&(T.applyToRemoteDocument(F,g),F.isValidDocument()&&(F.setReadTime(g.commitVersion),v.addEntry(F)))}))})),R.next((()=>f.mutationQueue.removeMutationBatch(m,T)))})(t,s,e,l).next((()=>l.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(f){let m=We();for(let g=0;g<f.mutationResults.length;++g)f.mutationResults[g].transformResults.length>0&&(m=m.add(f.batch.mutations[g].key));return m})(e)))).next((()=>t.localDocuments.getDocuments(s,a)))}))}function uA(n){const e=Pe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function MD(n,e){const t=Pe(n),s=e.snapshotVersion;let a=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const c=t.Os.newChangeBuffer({trackRemovals:!0});a=t.Fs;const f=[];e.targetChanges.forEach(((v,T)=>{const w=a.get(T);if(!w)return;f.push(t.hi.removeMatchingKeys(l,v.removedDocuments,T).next((()=>t.hi.addMatchingKeys(l,v.addedDocuments,T))));let R=w.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?R=R.withResumeToken(vn.EMPTY_BYTE_STRING,ke.min()).withLastLimboFreeSnapshotVersion(ke.min()):v.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(v.resumeToken,s)),a=a.insert(T,R),(function(F,B,se){return F.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-F.snapshotVersion.toMicroseconds()>=PD?!0:se.addedDocuments.size+se.modifiedDocuments.size+se.removedDocuments.size>0})(w,R,v)&&f.push(t.hi.updateTargetData(l,R))}));let m=Xs(),g=We();if(e.documentUpdates.forEach((v=>{e.resolvedLimboDocuments.has(v)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,v))})),f.push(OD(l,c,e.documentUpdates).next((v=>{m=v.Ls,g=v.ks}))),!s.isEqual(ke.min())){const v=t.hi.getLastRemoteSnapshotVersion(l).next((T=>t.hi.setTargetsMetadata(l,l.currentSequenceNumber,s)));f.push(v)}return re.waitFor(f).next((()=>c.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,m,g))).next((()=>m))})).then((l=>(t.Fs=a,l)))}function OD(n,e,t){let s=We(),a=We();return t.forEach((l=>s=s.add(l))),e.getEntries(n,s).next((l=>{let c=Xs();return t.forEach(((f,m)=>{const g=l.get(f);m.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(f)),m.isNoDocument()&&m.version.isEqual(ke.min())?(e.removeEntry(f,m.readTime),c=c.insert(f,m)):!g.isValidDocument()||m.version.compareTo(g.version)>0||m.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(m),c=c.insert(f,m)):me(uy,"Ignoring outdated watch update for ",f,". Current version:",g.version," Watch version:",m.version)})),{Ls:c,ks:a}}))}function LD(n,e){const t=Pe(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=$_),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function VD(n,e){const t=Pe(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let a;return t.hi.getTargetData(s,e).next((l=>l?(a=l,re.resolve(a)):t.hi.allocateTargetId(s).next((c=>(a=new ta(e,c,"TargetPurposeListen",s.currentSequenceNumber),t.hi.addTargetData(s,a).next((()=>a)))))))})).then((s=>{const a=t.Fs.get(s.targetId);return(a===null||s.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(s.targetId,s),t.Ms.set(e,s.targetId)),s}))}async function g_(n,e,t){const s=Pe(n),a=s.Fs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,(c=>s.persistence.referenceDelegate.removeTarget(c,a)))}catch(c){if(!zl(c))throw c;me(uy,`Failed to update sequence numbers for target ${e}: ${c}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(a.target)}function eb(n,e,t){const s=Pe(n);let a=ke.min(),l=We();return s.persistence.runTransaction("Execute query","readwrite",(c=>(function(m,g,v){const T=Pe(m),w=T.Ms.get(v);return w!==void 0?re.resolve(T.Fs.get(w)):T.hi.getTargetData(g,v)})(s,c,us(e)).next((f=>{if(f)return a=f.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(c,f.targetId).next((m=>{l=m}))})).next((()=>s.Cs.getDocumentsMatchingQuery(c,e,t?a:ke.min(),t?l:We()))).next((f=>(UD(s,wx(e),f),{documents:f,qs:l})))))}function UD(n,e,t){let s=n.xs.get(e)||ke.min();t.forEach(((a,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)})),n.xs.set(e,s)}class tb{constructor(){this.activeTargetIds=Nx()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class BD{constructor(){this.Fo=new tb,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,s){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new tb,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zD{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb="ConnectivityMonitor";class ib{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){me(nb,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){me(nb,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kd=null;function __(){return kd===null?kd=(function(){return 268435456+Math.round(2147483648*Math.random())})():kd++,"0x"+kd.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg="RestConnection",jD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class qD{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${s}/databases/${a}`,this.Ko=this.databaseId.database===ef?`project_id=${s}`:`project_id=${s}&database_id=${a}`}Wo(e,t,s,a,l){const c=__(),f=this.Go(e,t.toUriEncodedString());me(Dg,`Sending RPC '${e}' ${c}:`,f,s);const m={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(m,a,l);const{host:g}=new URL(f),v=ya(g);return this.jo(e,f,m,s,v).then((T=>(me(Dg,`Received RPC '${e}' ${c}: `,T),T)),(T=>{throw ua(Dg,`RPC '${e}' ${c} failed with error: `,T,"url: ",f,"request:",s),T}))}Jo(e,t,s,a,l,c){return this.Wo(e,t,s,a,l)}zo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ul})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((a,l)=>e[l]=a)),s&&s.headers.forEach(((a,l)=>e[l]=a))}Go(e,t){const s=jD[e];return`${this.$o}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FD{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn="WebChannelConnection";class HD extends qD{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,s,a,l){const c=__();return new Promise(((f,m)=>{const g=new uS;g.setWithCredentials(!0),g.listenOnce(cS.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case Bd.NO_ERROR:const T=g.getResponseJson();me(wn,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(T)),f(T);break;case Bd.TIMEOUT:me(wn,`RPC '${e}' ${c} timed out`),m(new pe(te.DEADLINE_EXCEEDED,"Request time out"));break;case Bd.HTTP_ERROR:const w=g.getStatus();if(me(wn,`RPC '${e}' ${c} failed with status:`,w,"response text:",g.getResponseText()),w>0){let R=g.getResponseJson();Array.isArray(R)&&(R=R[0]);const L=R?.error;if(L&&L.status&&L.message){const F=(function(se){const oe=se.toLowerCase().replace(/_/g,"-");return Object.values(te).indexOf(oe)>=0?oe:te.UNKNOWN})(L.status);m(new pe(F,L.message))}else m(new pe(te.UNKNOWN,"Server responded with status "+g.getStatus()))}else m(new pe(te.UNAVAILABLE,"Connection failed."));break;default:Ie(9055,{c_:e,streamId:c,l_:g.getLastErrorCode(),h_:g.getLastError()})}}finally{me(wn,`RPC '${e}' ${c} completed.`)}}));const v=JSON.stringify(a);me(wn,`RPC '${e}' ${c} sending request:`,a),g.send(t,"POST",v,s,15)}))}P_(e,t,s){const a=__(),l=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=fS(),f=dS(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(m.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(m.useFetchStreams=!0),this.zo(m.initMessageHeaders,t,s),m.encodeInitMessageHeaders=!0;const v=l.join("");me(wn,`Creating RPC '${e}' stream ${a}: ${v}`,m);const T=c.createWebChannel(v,m);this.T_(T);let w=!1,R=!1;const L=new FD({Ho:B=>{R?me(wn,`Not sending because RPC '${e}' stream ${a} is closed:`,B):(w||(me(wn,`Opening RPC '${e}' stream ${a} transport.`),T.open(),w=!0),me(wn,`RPC '${e}' stream ${a} sending:`,B),T.send(B))},Yo:()=>T.close()}),F=(B,se,oe)=>{B.listen(se,(le=>{try{oe(le)}catch(_e){setTimeout((()=>{throw _e}),0)}}))};return F(T,sc.EventType.OPEN,(()=>{R||(me(wn,`RPC '${e}' stream ${a} transport opened.`),L.s_())})),F(T,sc.EventType.CLOSE,(()=>{R||(R=!0,me(wn,`RPC '${e}' stream ${a} transport closed`),L.__(),this.I_(T))})),F(T,sc.EventType.ERROR,(B=>{R||(R=!0,ua(wn,`RPC '${e}' stream ${a} transport errored. Name:`,B.name,"Message:",B.message),L.__(new pe(te.UNAVAILABLE,"The operation could not be completed")))})),F(T,sc.EventType.MESSAGE,(B=>{var se;if(!R){const oe=B.data[0];rt(!!oe,16349);const le=oe,_e=le?.error||((se=le[0])===null||se===void 0?void 0:se.error);if(_e){me(wn,`RPC '${e}' stream ${a} received error:`,_e);const Le=_e.status;let Ee=(function(N){const O=Kt[N];if(O!==void 0)return YS(O)})(Le),D=_e.message;Ee===void 0&&(Ee=te.INTERNAL,D="Unknown error status: "+Le+" with message "+_e.message),R=!0,L.__(new pe(Ee,D)),T.close()}else me(wn,`RPC '${e}' stream ${a} received:`,oe),L.a_(oe)}})),F(f,hS.STAT_EVENT,(B=>{B.stat===s_.PROXY?me(wn,`RPC '${e}' stream ${a} detected buffering proxy`):B.stat===s_.NOPROXY&&me(wn,`RPC '${e}' stream ${a} detected no buffering proxy`)})),setTimeout((()=>{L.o_()}),0),L}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function kg(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(n){return new Wx(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e,t,s=1e3,a=1.5,l=6e4){this.Fi=e,this.timerId=t,this.d_=s,this.E_=a,this.A_=l,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),a=Math.max(0,t-s);a>0&&me("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,a,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sb="PersistentStream";class hA{constructor(e,t,s,a,l,c,f,m){this.Fi=e,this.w_=s,this.S_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=f,this.listener=m,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new cA(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===te.RESOURCE_EXHAUSTED?($s(t.toString()),$s("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===te.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,a])=>{this.b_===t&&this.W_(s,a)}),(s=>{e((()=>{const a=new pe(te.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(a)}))}))}W_(e,t){const s=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.e_((()=>{s((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((a=>{s((()=>this.G_(a)))})),this.stream.onMessage((a=>{s((()=>++this.C_==1?this.j_(a):this.onNext(a)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return me(sb,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(me(sb,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class GD extends hA{constructor(e,t,s,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=Xx(this.serializer,e),s=(function(l){if(!("targetChange"in l))return ke.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?ke.min():c.readTime?cs(c.readTime):ke.min()})(e);return this.listener.J_(t,s)}H_(e){const t={};t.database=m_(this.serializer),t.addTarget=(function(l,c){let f;const m=c.target;if(f=c_(m)?{documents:eD(l,m)}:{query:nA(l,m).Vt},f.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){f.resumeToken=ZS(l,c.resumeToken);const g=d_(l,c.expectedCount);g!==null&&(f.expectedCount=g)}else if(c.snapshotVersion.compareTo(ke.min())>0){f.readTime=af(l,c.snapshotVersion.toTimestamp());const g=d_(l,c.expectedCount);g!==null&&(f.expectedCount=g)}return f})(this.serializer,e);const s=iD(this.serializer,e);s&&(t.labels=s),this.k_(t)}Y_(e){const t={};t.database=m_(this.serializer),t.removeTarget=e,this.k_(t)}}class KD extends hA{constructor(e,t,s,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return rt(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,rt(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){rt(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=Jx(e.writeResults,e.commitTime),s=cs(e.commitTime);return this.listener.ta(s,t)}na(){const e={};e.database=m_(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>Zx(this.serializer,s)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QD{}class WD extends QD{constructor(e,t,s,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=a,this.ra=!1}ia(){if(this.ra)throw new pe(te.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,a){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,c])=>this.connection.Wo(e,f_(t,s),a,l,c))).catch((l=>{throw l.name==="FirebaseError"?(l.code===te.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new pe(te.UNKNOWN,l.toString())}))}Jo(e,t,s,a,l){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,f])=>this.connection.Jo(e,f_(t,s),a,c,f,l))).catch((c=>{throw c.name==="FirebaseError"?(c.code===te.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new pe(te.UNKNOWN,c.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class YD{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?($s(t),this._a=!1):me("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo="RemoteStore";class $D{constructor(e,t,s,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=l,this.Ea.xo((c=>{s.enqueueAndForget((async()=>{bo(this)&&(me(uo,"Restarting streams for network reachability change."),await(async function(m){const g=Pe(m);g.Ia.add(4),await Hc(g),g.Aa.set("Unknown"),g.Ia.delete(4),await Xf(g)})(this))}))})),this.Aa=new YD(s,a)}}async function Xf(n){if(bo(n))for(const e of n.da)await e(!0)}async function Hc(n){for(const e of n.da)await e(!1)}function dA(n,e){const t=Pe(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),fy(t)?dy(t):ql(t).x_()&&hy(t,e))}function cy(n,e){const t=Pe(n),s=ql(t);t.Ta.delete(e),s.x_()&&fA(t,e),t.Ta.size===0&&(s.x_()?s.B_():bo(t)&&t.Aa.set("Unknown"))}function hy(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ke.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ql(n).H_(e)}function fA(n,e){n.Ra.$e(e),ql(n).Y_(e)}function dy(n){n.Ra=new Hx({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),ql(n).start(),n.Aa.aa()}function fy(n){return bo(n)&&!ql(n).M_()&&n.Ta.size>0}function bo(n){return Pe(n).Ia.size===0}function pA(n){n.Ra=void 0}async function XD(n){n.Aa.set("Online")}async function ZD(n){n.Ta.forEach(((e,t)=>{hy(n,e)}))}async function JD(n,e){pA(n),fy(n)?(n.Aa.la(e),dy(n)):n.Aa.set("Unknown")}async function ek(n,e,t){if(n.Aa.set("Online"),e instanceof XS&&e.state===2&&e.cause)try{await(async function(a,l){const c=l.cause;for(const f of l.targetIds)a.Ta.has(f)&&(await a.remoteSyncer.rejectListen(f,c),a.Ta.delete(f),a.Ra.removeTarget(f))})(n,e)}catch(s){me(uo,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await lf(n,s)}else if(e instanceof Fd?n.Ra.Ye(e):e instanceof $S?n.Ra.it(e):n.Ra.et(e),!t.isEqual(ke.min()))try{const s=await uA(n.localStore);t.compareTo(s)>=0&&await(function(l,c){const f=l.Ra.Pt(c);return f.targetChanges.forEach(((m,g)=>{if(m.resumeToken.approximateByteSize()>0){const v=l.Ta.get(g);v&&l.Ta.set(g,v.withResumeToken(m.resumeToken,c))}})),f.targetMismatches.forEach(((m,g)=>{const v=l.Ta.get(m);if(!v)return;l.Ta.set(m,v.withResumeToken(vn.EMPTY_BYTE_STRING,v.snapshotVersion)),fA(l,m);const T=new ta(v.target,m,g,v.sequenceNumber);hy(l,T)})),l.remoteSyncer.applyRemoteEvent(f)})(n,t)}catch(s){me(uo,"Failed to raise snapshot:",s),await lf(n,s)}}async function lf(n,e,t){if(!zl(e))throw e;n.Ia.add(1),await Hc(n),n.Aa.set("Offline"),t||(t=()=>uA(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{me(uo,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Xf(n)}))}function mA(n,e){return e().catch((t=>lf(n,t,e)))}async function Zf(n){const e=Pe(n),t=pa(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:$_;for(;tk(e);)try{const a=await LD(e.localStore,s);if(a===null){e.Pa.length===0&&t.B_();break}s=a.batchId,nk(e,a)}catch(a){await lf(e,a)}gA(e)&&_A(e)}function tk(n){return bo(n)&&n.Pa.length<10}function nk(n,e){n.Pa.push(e);const t=pa(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function gA(n){return bo(n)&&!pa(n).M_()&&n.Pa.length>0}function _A(n){pa(n).start()}async function ik(n){pa(n).na()}async function sk(n){const e=pa(n);for(const t of n.Pa)e.X_(t.mutations)}async function rk(n,e,t){const s=n.Pa.shift(),a=iy.from(s,e,t);await mA(n,(()=>n.remoteSyncer.applySuccessfulWrite(a))),await Zf(n)}async function ak(n,e){e&&pa(n).Z_&&await(async function(s,a){if((function(c){return qx(c)&&c!==te.ABORTED})(a.code)){const l=s.Pa.shift();pa(s).N_(),await mA(s,(()=>s.remoteSyncer.rejectFailedWrite(l.batchId,a))),await Zf(s)}})(n,e),gA(n)&&_A(n)}async function rb(n,e){const t=Pe(n);t.asyncQueue.verifyOperationInProgress(),me(uo,"RemoteStore received new credentials");const s=bo(t);t.Ia.add(3),await Hc(t),s&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Xf(t)}async function ok(n,e){const t=Pe(n);e?(t.Ia.delete(2),await Xf(t)):e||(t.Ia.add(2),await Hc(t),t.Aa.set("Unknown"))}function ql(n){return n.Va||(n.Va=(function(t,s,a){const l=Pe(t);return l.ia(),new GD(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(n.datastore,n.asyncQueue,{Zo:XD.bind(null,n),e_:ZD.bind(null,n),n_:JD.bind(null,n),J_:ek.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),fy(n)?dy(n):n.Aa.set("Unknown")):(await n.Va.stop(),pA(n))}))),n.Va}function pa(n){return n.ma||(n.ma=(function(t,s,a){const l=Pe(t);return l.ia(),new KD(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:ik.bind(null,n),n_:ak.bind(null,n),ea:sk.bind(null,n),ta:rk.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await Zf(n)):(await n.ma.stop(),n.Pa.length>0&&(me(uo,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e,t,s,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=a,this.removalCallback=l,this.deferred=new ls,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,a,l){const c=Date.now()+s,f=new py(e,t,c,a,l);return f.start(s),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new pe(te.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function my(n,e){if($s("AsyncQueue",`${e}: ${n}`),zl(n))return new pe(te.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{static emptySet(e){return new gl(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||be.comparator(t.key,s.key):(t,s)=>be.comparator(t.key,s.key),this.keyedMap=rc(),this.sortedSet=new Yt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof gl)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new gl;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(){this.fa=new Yt(be.comparator)}track(e){const t=e.doc.key,s=this.fa.get(t);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(t,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(t):e.type===1&&s.type===2?this.fa=this.fa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):Ie(63341,{At:e,ga:s}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Pl{constructor(e,t,s,a,l,c,f,m,g){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=f,this.excludesMetadataChanges=m,this.hasCachedResults=g}static fromInitialDocuments(e,t,s,a,l){const c=[];return t.forEach((f=>{c.push({type:0,doc:f})})),new Pl(e,t,gl.emptySet(t),c,s,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Hf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==s[a].type||!t[a].doc.isEqual(s[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lk{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class uk{constructor(){this.queries=ob(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,s){const a=Pe(t),l=a.queries;a.queries=ob(),l.forEach(((c,f)=>{for(const m of f.wa)m.onError(s)}))})(this,new pe(te.ABORTED,"Firestore shutting down"))}}function ob(){return new To((n=>VS(n)),Hf)}async function gy(n,e){const t=Pe(n);let s=3;const a=e.query;let l=t.queries.get(a);l?!l.Sa()&&e.ba()&&(s=2):(l=new lk,s=e.ba()?0:1);try{switch(s){case 0:l.ya=await t.onListen(a,!0);break;case 1:l.ya=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(c){const f=my(c,`Initialization of query '${fl(e.query)}' failed`);return void e.onError(f)}t.queries.set(a,l),l.wa.push(e),e.va(t.onlineState),l.ya&&e.Ca(l.ya)&&yy(t)}async function _y(n,e){const t=Pe(n),s=e.query;let a=3;const l=t.queries.get(s);if(l){const c=l.wa.indexOf(e);c>=0&&(l.wa.splice(c,1),l.wa.length===0?a=e.ba()?0:1:!l.Sa()&&e.ba()&&(a=2))}switch(a){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function ck(n,e){const t=Pe(n);let s=!1;for(const a of e){const l=a.query,c=t.queries.get(l);if(c){for(const f of c.wa)f.Ca(a)&&(s=!0);c.ya=a}}s&&yy(t)}function hk(n,e,t){const s=Pe(n),a=s.queries.get(e);if(a)for(const l of a.wa)l.onError(t);s.queries.delete(e)}function yy(n){n.Da.forEach((e=>{e.next()}))}var y_,lb;(lb=y_||(y_={})).Fa="default",lb.Cache="cache";class vy{constructor(e,t,s){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const a of e.docChanges)a.type!==3&&s.push(a);e=new Pl(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const s=t!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Pl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==y_.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(e){this.key=e}}class vA{constructor(e){this.key=e}}class dk{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=We(),this.mutatedKeys=We(),this.Xa=US(e),this.eu=new gl(this.Xa)}get tu(){return this.Ha}nu(e,t){const s=t?t.ru:new ab,a=t?t.eu:this.eu;let l=t?t.mutatedKeys:this.mutatedKeys,c=a,f=!1;const m=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal(((v,T)=>{const w=a.get(v),R=Gf(this.query,T)?T:null,L=!!w&&this.mutatedKeys.has(w.key),F=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let B=!1;w&&R?w.data.isEqual(R.data)?L!==F&&(s.track({type:3,doc:R}),B=!0):this.iu(w,R)||(s.track({type:2,doc:R}),B=!0,(m&&this.Xa(R,m)>0||g&&this.Xa(R,g)<0)&&(f=!0)):!w&&R?(s.track({type:0,doc:R}),B=!0):w&&!R&&(s.track({type:1,doc:w}),B=!0,(m||g)&&(f=!0)),B&&(R?(c=c.add(R),l=F?l.add(v):l.delete(v)):(c=c.delete(v),l=l.delete(v)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const v=this.query.limitType==="F"?c.last():c.first();c=c.delete(v.key),l=l.delete(v.key),s.track({type:1,doc:v})}return{eu:c,ru:s,Ds:f,mutatedKeys:l}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,a){const l=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const c=e.ru.pa();c.sort(((v,T)=>(function(R,L){const F=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ie(20277,{At:B})}};return F(R)-F(L)})(v.type,T.type)||this.Xa(v.doc,T.doc))),this.su(s),a=a!=null&&a;const f=t&&!a?this.ou():[],m=this.Za.size===0&&this.current&&!a?1:0,g=m!==this.Ya;return this.Ya=m,c.length!==0||g?{snapshot:new Pl(this.query,e.eu,l,c,e.mutatedKeys,m===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:f}:{_u:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new ab,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=We(),this.eu.forEach((s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))}));const t=[];return e.forEach((s=>{this.Za.has(s)||t.push(new vA(s))})),this.Za.forEach((s=>{e.has(s)||t.push(new yA(s))})),t}uu(e){this.Ha=e.qs,this.Za=We();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Pl.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Ey="SyncEngine";class fk{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class pk{constructor(e){this.key=e,this.lu=!1}}class mk{constructor(e,t,s,a,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.hu={},this.Pu=new To((f=>VS(f)),Hf),this.Tu=new Map,this.Iu=new Set,this.du=new Yt(be.comparator),this.Eu=new Map,this.Au=new ay,this.Ru={},this.Vu=new Map,this.mu=Nl.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function gk(n,e,t=!0){const s=AA(n);let a;const l=s.Pu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.cu()):a=await EA(s,e,t,!0),a}async function _k(n,e){const t=AA(n);await EA(t,e,!0,!1)}async function EA(n,e,t,s){const a=await VD(n.localStore,us(e)),l=a.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let f;return s&&(f=await yk(n,e,l,c==="current",a.resumeToken)),n.isPrimaryClient&&t&&dA(n.remoteStore,a),f}async function yk(n,e,t,s,a){n.gu=(T,w,R)=>(async function(F,B,se,oe){let le=B.view.nu(se);le.Ds&&(le=await eb(F.localStore,B.query,!1).then((({documents:D})=>B.view.nu(D,le))));const _e=oe&&oe.targetChanges.get(B.targetId),Le=oe&&oe.targetMismatches.get(B.targetId)!=null,Ee=B.view.applyChanges(le,F.isPrimaryClient,_e,Le);return cb(F,B.targetId,Ee._u),Ee.snapshot})(n,T,w,R);const l=await eb(n.localStore,e,!0),c=new dk(e,l.qs),f=c.nu(l.documents),m=Fc.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",a),g=c.applyChanges(f,n.isPrimaryClient,m);cb(n,t,g._u);const v=new fk(e,t,c);return n.Pu.set(e,v),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),g.snapshot}async function vk(n,e,t){const s=Pe(n),a=s.Pu.get(e),l=s.Tu.get(a.targetId);if(l.length>1)return s.Tu.set(a.targetId,l.filter((c=>!Hf(c,e)))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(a.targetId),s.sharedClientState.isActiveQueryTarget(a.targetId)||await g_(s.localStore,a.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(a.targetId),t&&cy(s.remoteStore,a.targetId),v_(s,a.targetId)})).catch(Bl)):(v_(s,a.targetId),await g_(s.localStore,a.targetId,!0))}async function Ek(n,e){const t=Pe(n),s=t.Pu.get(e),a=t.Tu.get(s.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),cy(t.remoteStore,s.targetId))}async function Tk(n,e,t){const s=Ik(n);try{const a=await(function(c,f){const m=Pe(c),g=gt.now(),v=f.reduce(((R,L)=>R.add(L.key)),We());let T,w;return m.persistence.runTransaction("Locally write mutations","readwrite",(R=>{let L=Xs(),F=We();return m.Os.getEntries(R,v).next((B=>{L=B,L.forEach(((se,oe)=>{oe.isValidDocument()||(F=F.add(se))}))})).next((()=>m.localDocuments.getOverlayedDocuments(R,L))).next((B=>{T=B;const se=[];for(const oe of f){const le=Lx(oe,T.get(oe.key).overlayedDocument);le!=null&&se.push(new Ta(oe.key,le,IS(le.value.mapValue),Bn.exists(!0)))}return m.mutationQueue.addMutationBatch(R,g,se,f)})).next((B=>{w=B;const se=B.applyToLocalDocumentSet(T,F);return m.documentOverlayCache.saveOverlays(R,B.batchId,se)}))})).then((()=>({batchId:w.batchId,changes:zS(T)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),(function(c,f,m){let g=c.Ru[c.currentUser.toKey()];g||(g=new Yt(Be)),g=g.insert(f,m),c.Ru[c.currentUser.toKey()]=g})(s,a.batchId,t),await Gc(s,a.changes),await Zf(s.remoteStore)}catch(a){const l=my(a,"Failed to persist write");t.reject(l)}}async function TA(n,e){const t=Pe(n);try{const s=await MD(t.localStore,e);e.targetChanges.forEach(((a,l)=>{const c=t.Eu.get(l);c&&(rt(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?c.lu=!0:a.modifiedDocuments.size>0?rt(c.lu,14607):a.removedDocuments.size>0&&(rt(c.lu,42227),c.lu=!1))})),await Gc(t,s,e)}catch(s){await Bl(s)}}function ub(n,e,t){const s=Pe(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const a=[];s.Pu.forEach(((l,c)=>{const f=c.view.va(e);f.snapshot&&a.push(f.snapshot)})),(function(c,f){const m=Pe(c);m.onlineState=f;let g=!1;m.queries.forEach(((v,T)=>{for(const w of T.wa)w.va(f)&&(g=!0)})),g&&yy(m)})(s.eventManager,e),a.length&&s.hu.J_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function bk(n,e,t){const s=Pe(n);s.sharedClientState.updateQueryState(e,"rejected",t);const a=s.Eu.get(e),l=a&&a.key;if(l){let c=new Yt(be.comparator);c=c.insert(l,An.newNoDocument(l,ke.min()));const f=We().add(l),m=new Yf(ke.min(),new Map,new Yt(Be),c,f);await TA(s,m),s.du=s.du.remove(l),s.Eu.delete(e),Ty(s)}else await g_(s.localStore,e,!1).then((()=>v_(s,e,t))).catch(Bl)}async function wk(n,e){const t=Pe(n),s=e.batch.batchId;try{const a=await kD(t.localStore,e);wA(t,s,null),bA(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Gc(t,a)}catch(a){await Bl(a)}}async function Sk(n,e,t){const s=Pe(n);try{const a=await(function(c,f){const m=Pe(c);return m.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let v;return m.mutationQueue.lookupMutationBatch(g,f).next((T=>(rt(T!==null,37113),v=T.keys(),m.mutationQueue.removeMutationBatch(g,T)))).next((()=>m.mutationQueue.performConsistencyCheck(g))).next((()=>m.documentOverlayCache.removeOverlaysForBatchId(g,v,f))).next((()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,v))).next((()=>m.localDocuments.getDocuments(g,v)))}))})(s.localStore,e);wA(s,e,t),bA(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Gc(s,a)}catch(a){await Bl(a)}}function bA(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function wA(n,e,t){const s=Pe(n);let a=s.Ru[s.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),s.Ru[s.currentUser.toKey()]=a}}function v_(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Tu.get(e))n.Pu.delete(s),t&&n.hu.pu(s,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((s=>{n.Au.containsKey(s)||SA(n,s)}))}function SA(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(cy(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),Ty(n))}function cb(n,e,t){for(const s of t)s instanceof yA?(n.Au.addReference(s.key,e),Ak(n,s)):s instanceof vA?(me(Ey,"Document no longer in limbo: "+s.key),n.Au.removeReference(s.key,e),n.Au.containsKey(s.key)||SA(n,s.key)):Ie(19791,{yu:s})}function Ak(n,e){const t=e.key,s=t.path.canonicalString();n.du.get(t)||n.Iu.has(s)||(me(Ey,"New document in limbo: "+t),n.Iu.add(s),Ty(n))}function Ty(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new be(vt.fromString(e)),s=n.mu.next();n.Eu.set(s,new pk(t)),n.du=n.du.insert(t,s),dA(n.remoteStore,new ta(us(Ff(t.path)),s,"TargetPurposeLimboResolution",zf.ue))}}async function Gc(n,e,t){const s=Pe(n),a=[],l=[],c=[];s.Pu.isEmpty()||(s.Pu.forEach(((f,m)=>{c.push(s.gu(m,e,t).then((g=>{var v;if((g||t)&&s.isPrimaryClient){const T=g?!g.fromCache:(v=t?.targetChanges.get(m.targetId))===null||v===void 0?void 0:v.current;s.sharedClientState.updateQueryState(m.targetId,T?"current":"not-current")}if(g){a.push(g);const T=ly.Es(m.targetId,g);l.push(T)}})))})),await Promise.all(c),s.hu.J_(a),await(async function(m,g){const v=Pe(m);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>re.forEach(g,(w=>re.forEach(w.Is,(R=>v.persistence.referenceDelegate.addReference(T,w.targetId,R))).next((()=>re.forEach(w.ds,(R=>v.persistence.referenceDelegate.removeReference(T,w.targetId,R)))))))))}catch(T){if(!zl(T))throw T;me(uy,"Failed to update sequence numbers: "+T)}for(const T of g){const w=T.targetId;if(!T.fromCache){const R=v.Fs.get(w),L=R.snapshotVersion,F=R.withLastLimboFreeSnapshotVersion(L);v.Fs=v.Fs.insert(w,F)}}})(s.localStore,l))}async function Ck(n,e){const t=Pe(n);if(!t.currentUser.isEqual(e)){me(Ey,"User change. New user:",e.toKey());const s=await lA(t.localStore,e);t.currentUser=e,(function(l,c){l.Vu.forEach((f=>{f.forEach((m=>{m.reject(new pe(te.CANCELLED,c))}))})),l.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Gc(t,s.Bs)}}function Rk(n,e){const t=Pe(n),s=t.Eu.get(e);if(s&&s.lu)return We().add(s.key);{let a=We();const l=t.Tu.get(e);if(!l)return a;for(const c of l){const f=t.Pu.get(c);a=a.unionWith(f.view.tu)}return a}}function AA(n){const e=Pe(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=TA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Rk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=bk.bind(null,e),e.hu.J_=ck.bind(null,e.eventManager),e.hu.pu=hk.bind(null,e.eventManager),e}function Ik(n){const e=Pe(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=wk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Sk.bind(null,e),e}class uf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=$f(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return DD(this.persistence,new ND,e.initialUser,this.serializer)}Du(e){return new oA(oy.Vi,this.serializer)}bu(e){return new BD}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}uf.provider={build:()=>new uf};class Nk extends uf{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){rt(this.persistence.referenceDelegate instanceof of,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new pD(s,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?$n.withCacheSize(this.cacheSizeBytes):$n.DEFAULT;return new oA((s=>of.Vi(s,t)),this.serializer)}}class E_{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ub(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ck.bind(null,this.syncEngine),await ok(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new uk})()}createDatastore(e){const t=$f(e.databaseInfo.databaseId),s=(function(l){return new HD(l)})(e.databaseInfo);return(function(l,c,f,m){return new WD(l,c,f,m)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,a,l,c,f){return new $D(s,a,l,c,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>ub(this.syncEngine,t,0)),(function(){return ib.C()?new ib:new zD})())}createSyncEngine(e,t){return(function(a,l,c,f,m,g,v){const T=new mk(a,l,c,f,m,g);return v&&(T.fu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(a){const l=Pe(a);me(uo,"RemoteStore shutting down."),l.Ia.add(5),await Hc(l),l.Ea.shutdown(),l.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}E_.provider={build:()=>new E_};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):$s("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma="FirestoreClient";class Pk{constructor(e,t,s,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=a,this.user=Sn.UNAUTHENTICATED,this.clientId=Y_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,(async c=>{me(ma,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(s,(c=>(me(ma,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ls;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=my(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Mg(n,e){n.asyncQueue.verifyOperationInProgress(),me(ma,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async a=>{s.isEqual(a)||(await lA(e.localStore,a),s=a)})),e.persistence.setDatabaseDeletedListener((()=>{ua("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{me("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((a=>{ua("Terminating Firestore due to IndexedDb database deletion failed",a)}))})),n._offlineComponents=e}async function hb(n,e){n.asyncQueue.verifyOperationInProgress();const t=await xk(n);me(ma,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>rb(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,a)=>rb(e.remoteStore,a))),n._onlineComponents=e}async function xk(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){me(ma,"Using user provided OfflineComponentProvider");try{await Mg(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(a){return a.name==="FirebaseError"?a.code===te.FAILED_PRECONDITION||a.code===te.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11})(t))throw t;ua("Error using user provided cache. Falling back to memory cache: "+t),await Mg(n,new uf)}}else me(ma,"Using default OfflineComponentProvider"),await Mg(n,new Nk(void 0));return n._offlineComponents}async function wy(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(me(ma,"Using user provided OnlineComponentProvider"),await hb(n,n._uninitializedComponentsProvider._online)):(me(ma,"Using default OnlineComponentProvider"),await hb(n,new E_))),n._onlineComponents}function Dk(n){return wy(n).then((e=>e.syncEngine))}function kk(n){return wy(n).then((e=>e.datastore))}async function cf(n){const e=await wy(n),t=e.eventManager;return t.onListen=gk.bind(null,e.syncEngine),t.onUnlisten=vk.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=_k.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Ek.bind(null,e.syncEngine),t}function Mk(n,e,t={}){const s=new ls;return n.asyncQueue.enqueueAndForget((async()=>(function(l,c,f,m,g){const v=new by({next:w=>{v.Ou(),c.enqueueAndForget((()=>_y(l,T)));const R=w.docs.has(f);!R&&w.fromCache?g.reject(new pe(te.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&w.fromCache&&m&&m.source==="server"?g.reject(new pe(te.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(w)},error:w=>g.reject(w)}),T=new vy(Ff(f.path),v,{includeMetadataChanges:!0,ka:!0});return gy(l,T)})(await cf(n),n.asyncQueue,e,t,s))),s.promise}function Ok(n,e,t={}){const s=new ls;return n.asyncQueue.enqueueAndForget((async()=>(function(l,c,f,m,g){const v=new by({next:w=>{v.Ou(),c.enqueueAndForget((()=>_y(l,T))),w.fromCache&&m.source==="server"?g.reject(new pe(te.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(w)},error:w=>g.reject(w)}),T=new vy(f,v,{includeMetadataChanges:!0,ka:!0});return gy(l,T)})(await cf(n),n.asyncQueue,e,t,s))),s.promise}function Lk(n,e,t){const s=new ls;return n.asyncQueue.enqueueAndForget((async()=>{try{const a=await kk(n);s.resolve((async function(c,f,m){var g;const v=Pe(c),{request:T,ft:w,parent:R}=tD(v.serializer,bx(f),m);v.connection.Qo||delete T.parent;const L=(await v.Jo("RunAggregationQuery",v.serializer.databaseId,R,T,1)).filter((B=>!!B.result));rt(L.length===1,64727);const F=(g=L[0].result)===null||g===void 0?void 0:g.aggregateFields;return Object.keys(F).reduce(((B,se)=>(B[w[se]]=F[se],B)),{})})(a,e,t))}catch(a){s.reject(a)}})),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CA(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const db=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA="firestore.googleapis.com",fb=!0;class pb{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new pe(te.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=RA,this.ssl=fb}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:fb;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=aA;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<dD)throw new pe(te.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}WP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=CA((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),(function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new pe(te.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new pe(te.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new pe(te.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,a){return s.timeoutSeconds===a.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Jf{constructor(e,t,s,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pb({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new pe(te.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new pe(te.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pb(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new BP;switch(s.type){case"firstParty":return new FP(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new pe(te.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=db.get(t);s&&(me("ComponentProvider","Removing Datastore"),db.delete(t),s.terminate())})(this),Promise.resolve()}}function Vk(n,e,t,s={}){var a;n=Rn(n,Jf);const l=ya(e),c=n._getSettings(),f=Object.assign(Object.assign({},c),{emulatorOptions:n._getEmulatorOptions()}),m=`${e}:${t}`;l&&(F_(`https://${m}`),H_("Firestore",!0)),c.host!==RA&&c.host!==m&&ua("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g=Object.assign(Object.assign({},c),{host:m,ssl:l,emulatorOptions:s});if(!Fi(g,f)&&(n._setSettings(g),s.mockUserToken)){let v,T;if(typeof s.mockUserToken=="string")v=s.mockUserToken,T=Sn.MOCK_USER;else{v=$w(s.mockUserToken,(a=n._app)===null||a===void 0?void 0:a.options.projectId);const w=s.mockUserToken.sub||s.mockUserToken.user_id;if(!w)throw new pe(te.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new Sn(w)}n._authCredentials=new zP(new mS(v,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ir(this.firestore,e,this._query)}}class Dt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new oa(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Dt(this.firestore,e,this._key)}toJSON(){return{type:Dt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(jc(t,Dt._jsonSchema))return new Dt(e,s||null,new be(vt.fromString(t.referencePath)))}}Dt._jsonSchemaVersion="firestore/documentReference/1.0",Dt._jsonSchema={type:Wt("string",Dt._jsonSchemaVersion),referencePath:Wt("string")};class oa extends ir{constructor(e,t,s){super(e,t,Ff(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Dt(this.firestore,null,new be(e))}withConverter(e){return new oa(this.firestore,e,this._path)}}function gn(n,e,...t){if(n=at(n),_S("collection","path",e),n instanceof Jf){const s=vt.fromString(e,...t);return RT(s),new oa(n,null,s)}{if(!(n instanceof Dt||n instanceof oa))throw new pe(te.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(vt.fromString(e,...t));return RT(s),new oa(n.firestore,null,s)}}function nt(n,e,...t){if(n=at(n),arguments.length===1&&(e=Y_.newId()),_S("doc","path",e),n instanceof Jf){const s=vt.fromString(e,...t);return CT(s),new Dt(n,null,new be(s))}{if(!(n instanceof Dt||n instanceof oa))throw new pe(te.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(vt.fromString(e,...t));return CT(s),new Dt(n.firestore,n instanceof oa?n.converter:null,new be(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mb="AsyncQueue";class gb{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new cA(this,"async_queue_retry"),this.oc=()=>{const s=kg();s&&me(mb,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const t=kg();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=kg();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new ls;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!zl(e))throw e;me(mb,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((s=>{throw this.tc=s,this.nc=!1,$s("INTERNAL UNHANDLED ERROR: ",_b(s)),s})).then((s=>(this.nc=!1,s))))));return this._c=t,t}enqueueAfterDelay(e,t,s){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const a=py.createAndSchedule(this,e,t,s,(l=>this.lc(l)));return this.ec.push(a),a}ac(){this.tc&&Ie(47125,{hc:_b(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function _b(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yb(n){return(function(t,s){if(typeof t!="object"||t===null)return!1;const a=t;for(const l of s)if(l in a&&typeof a[l]=="function")return!0;return!1})(n,["next","error","complete"])}class Ki extends Jf{constructor(e,t,s,a){super(e,t,s,a),this.type="firestore",this._queue=new gb,this._persistenceKey=a?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new gb(e),this._firestoreClient=void 0,await e}}}function Uk(n,e){const t=typeof n=="object"?n:zc(),s=typeof n=="string"?n:ef,a=va(t,"firestore").getImmediate({identifier:s});if(!a._initialized){const l=Qw("firestore");l&&Vk(a,...l)}return a}function Fl(n){if(n._terminated)throw new pe(te.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Bk(n),n._firestoreClient}function Bk(n){var e,t,s;const a=n._freezeSettings(),l=(function(f,m,g,v){return new ox(f,m,g,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,CA(v.experimentalLongPollingOptions),v.useFetchStreams,v.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,a);n._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=a.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),n._firestoreClient=new Pk(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&(function(f){const m=f?._online.build();return{_offline:f?._offline.build(m),_online:m}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(e="count",t){this._internalFieldPath=t,this.type="AggregateField",this.aggregateType=e}}class jk{constructor(e,t,s){this._userDataWriter=t,this._data=s,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ri(vn.fromBase64String(e))}catch(t){throw new pe(te.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ri(vn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ri._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(jc(e,Ri._jsonSchema))return Ri.fromBase64String(e.bytes)}}Ri._jsonSchemaVersion="firestore/bytes/1.0",Ri._jsonSchema={type:Wt("string",Ri._jsonSchemaVersion),bytes:Wt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new pe(te.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new pe(te.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new pe(te.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Be(this._lat,e._lat)||Be(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:hs._jsonSchemaVersion}}static fromJSON(e){if(jc(e,hs._jsonSchema))return new hs(e.latitude,e.longitude)}}hs._jsonSchemaVersion="firestore/geoPoint/1.0",hs._jsonSchema={type:Wt("string",hs._jsonSchemaVersion),latitude:Wt("number"),longitude:Wt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,a){if(s.length!==a.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==a[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:ds._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(jc(e,ds._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new ds(e.vectorValues);throw new pe(te.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ds._jsonSchemaVersion="firestore/vectorValue/1.0",ds._jsonSchema={type:Wt("string",ds._jsonSchemaVersion),vectorValues:Wt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk=/^__.*__$/;class Fk{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Ta(e,this.data,this.fieldMask,t,this.fieldTransforms):new qc(e,this.data,t,this.fieldTransforms)}}class IA{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Ta(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function NA(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ie(40011,{Ec:n})}}class ep{constructor(e,t,s,a,l,c){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=a,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new ep(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.Rc({path:s,mc:!1});return a.fc(e),a}gc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.Rc({path:s,mc:!1});return a.Ac(),a}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return hf(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(NA(this.Ec)&&qk.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class Hk{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||$f(e)}Dc(e,t,s,a=!1){return new ep({Ec:e,methodName:t,bc:s,path:yn.emptyPath(),mc:!1,Sc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Qc(n){const e=n._freezeSettings(),t=$f(n._databaseId);return new Hk(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Sy(n,e,t,s,a,l={}){const c=n.Dc(l.merge||l.mergeFields?2:0,e,t,a);Iy("Data must be an object, but it was:",c,s);const f=kA(s,c);let m,g;if(l.merge)m=new fi(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const v=[];for(const T of l.mergeFields){const w=T_(e,T,t);if(!c.contains(w))throw new pe(te.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);OA(v,w)||v.push(w)}m=new fi(v),g=c.fieldTransforms.filter((T=>m.covers(T.field)))}else m=null,g=c.fieldTransforms;return new Fk(new Xn(f),m,g)}class tp extends Hl{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof tp}}function PA(n,e,t){return new ep({Ec:3,bc:e.settings.bc,methodName:n._methodName,mc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Ay extends Hl{_toFieldTransform(e){return new ny(e.path,new Ic)}isEqual(e){return e instanceof Ay}}class Cy extends Hl{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=PA(this,e,!0),s=this.vc.map((l=>wo(l,t))),a=new Rl(s);return new ny(e.path,a)}isEqual(e){return e instanceof Cy&&Fi(this.vc,e.vc)}}class Ry extends Hl{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=PA(this,e,!0),s=this.vc.map((l=>wo(l,t))),a=new Il(s);return new ny(e.path,a)}isEqual(e){return e instanceof Ry&&Fi(this.vc,e.vc)}}function xA(n,e,t,s){const a=n.Dc(1,e,t);Iy("Data must be an object, but it was:",a,s);const l=[],c=Xn.empty();Ea(s,((m,g)=>{const v=Ny(e,m,t);g=at(g);const T=a.gc(v);if(g instanceof tp)l.push(v);else{const w=wo(g,T);w!=null&&(l.push(v),c.set(v,w))}}));const f=new fi(l);return new IA(c,f,a.fieldTransforms)}function DA(n,e,t,s,a,l){const c=n.Dc(1,e,t),f=[T_(e,s,t)],m=[a];if(l.length%2!=0)throw new pe(te.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<l.length;w+=2)f.push(T_(e,l[w])),m.push(l[w+1]);const g=[],v=Xn.empty();for(let w=f.length-1;w>=0;--w)if(!OA(g,f[w])){const R=f[w];let L=m[w];L=at(L);const F=c.gc(R);if(L instanceof tp)g.push(R);else{const B=wo(L,F);B!=null&&(g.push(R),v.set(R,B))}}const T=new fi(g);return new IA(v,T,c.fieldTransforms)}function Gk(n,e,t,s=!1){return wo(t,n.Dc(s?4:3,e))}function wo(n,e){if(MA(n=at(n)))return Iy("Unsupported field value:",e,n),kA(n,e);if(n instanceof Hl)return(function(s,a){if(!NA(a.Ec))throw a.wc(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.wc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(a);l&&a.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(s,a){const l=[];let c=0;for(const f of s){let m=wo(f,a.yc(c));m==null&&(m={nullValue:"NULL_VALUE"}),l.push(m),c++}return{arrayValue:{values:l}}})(n,e)}return(function(s,a){if((s=at(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Px(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=gt.fromDate(s);return{timestampValue:af(a.serializer,l)}}if(s instanceof gt){const l=new gt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:af(a.serializer,l)}}if(s instanceof hs)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Ri)return{bytesValue:ZS(a.serializer,s._byteString)};if(s instanceof Dt){const l=a.databaseId,c=s.firestore._databaseId;if(!c.isEqual(l))throw a.wc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:ry(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof ds)return(function(c,f){return{mapValue:{fields:{[CS]:{stringValue:RS},[tf]:{arrayValue:{values:c.toArray().map((g=>{if(typeof g!="number")throw f.wc("VectorValues must only contain numeric values.");return ty(f.serializer,g)}))}}}}}})(s,a);throw a.wc(`Unsupported field value: ${Bf(s)}`)})(n,e)}function kA(n,e){const t={};return ES(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ea(n,((s,a)=>{const l=wo(a,e.Vc(s));l!=null&&(t[s]=l)})),{mapValue:{fields:t}}}function MA(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof gt||n instanceof hs||n instanceof Ri||n instanceof Dt||n instanceof Hl||n instanceof ds)}function Iy(n,e,t){if(!MA(t)||!yS(t)){const s=Bf(t);throw s==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+s)}}function T_(n,e,t){if((e=at(e))instanceof Kc)return e._internalPath;if(typeof e=="string")return Ny(n,e);throw hf("Field path arguments must be of type string or ",n,!1,void 0,t)}const Kk=new RegExp("[~\\*/\\[\\]]");function Ny(n,e,t){if(e.search(Kk)>=0)throw hf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Kc(...e.split("."))._internalPath}catch{throw hf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function hf(n,e,t,s,a){const l=s&&!s.isEmpty(),c=a!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let m="";return(l||c)&&(m+=" (found",l&&(m+=` in field ${s}`),c&&(m+=` in document ${a}`),m+=")"),new pe(te.INVALID_ARGUMENT,f+n+m)}function OA(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e,t,s,a,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Qk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(np("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Qk extends LA{data(){return super.data()}}function np(n,e){return typeof e=="string"?Ny(n,e):e instanceof Kc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VA(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new pe(te.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Py{}class xy extends Py{}function ro(n,e,...t){let s=[];e instanceof Py&&s.push(e),s=s.concat(t),(function(l){const c=l.filter((m=>m instanceof Dy)).length,f=l.filter((m=>m instanceof ip)).length;if(c>1||c>0&&f>0)throw new pe(te.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const a of s)n=a._apply(n);return n}class ip extends xy{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new ip(e,t,s)}_apply(e){const t=this._parse(e);return UA(e._query,t),new ir(e.firestore,e.converter,h_(e._query,t))}_parse(e){const t=Qc(e.firestore);return(function(l,c,f,m,g,v,T){let w;if(g.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new pe(te.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){Tb(T,v);const L=[];for(const F of T)L.push(Eb(m,l,F));w={arrayValue:{values:L}}}else w=Eb(m,l,T)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||Tb(T,v),w=Gk(f,c,T,v==="in"||v==="not-in");return Qt.create(g,v,w)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function vb(n,e,t){const s=e,a=np("where",n);return ip._create(a,s,t)}class Dy extends Py{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Dy(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:Gi.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(a,l){let c=a;const f=l.getFlattenedFilters();for(const m of f)UA(c,m),c=h_(c,m)})(e._query,t),new ir(e.firestore,e.converter,h_(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ky extends xy{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new ky(e,t)}_apply(e){const t=(function(a,l,c){if(a.startAt!==null)throw new pe(te.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new pe(te.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Rc(l,c)})(e._query,this._field,this._direction);return new ir(e.firestore,e.converter,(function(a,l){const c=a.explicitOrderBy.concat([l]);return new jl(a.path,a.collectionGroup,c,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)})(e._query,t))}}function df(n,e="asc"){const t=e,s=np("orderBy",n);return ky._create(s,t)}class My extends xy{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new My(e,t,s)}_apply(e){return new ir(e.firestore,e.converter,sf(e._query,this._limit,this._limitType))}}function sU(n){return YP("limit",n),My._create("limit",n,"F")}function Eb(n,e,t){if(typeof(t=at(t))=="string"){if(t==="")throw new pe(te.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!OS(e)&&t.indexOf("/")!==-1)throw new pe(te.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(vt.fromString(t));if(!be.isDocumentKey(s))throw new pe(te.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return OT(n,new be(s))}if(t instanceof Dt)return OT(n,t._key);throw new pe(te.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Bf(t)}.`)}function Tb(n,e){if(!Array.isArray(n)||n.length===0)throw new pe(te.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function UA(n,e){const t=(function(a,l){for(const c of a)for(const f of c.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null})(n.filters,(function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new pe(te.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new pe(te.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Wk{convertValue(e,t="none"){switch(fa(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Vt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(da(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ie(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Ea(e,((a,l)=>{s[a]=this.convertValue(l,t)})),s}convertVectorValue(e){var t,s,a;const l=(a=(s=(t=e.fields)===null||t===void 0?void 0:t[tf].arrayValue)===null||s===void 0?void 0:s.values)===null||a===void 0?void 0:a.map((c=>Vt(c.doubleValue)));return new ds(l)}convertGeoPoint(e){return new hs(Vt(e.latitude),Vt(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=qf(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Sc(e));default:return null}}convertTimestamp(e){const t=ha(e);return new gt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=vt.fromString(e);rt(rA(s),9688,{name:e});const a=new Ac(s.get(1),s.get(3)),l=new be(s.popFirst(5));return a.isEqual(t)||$s(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}function Yk(){return new zk("count")}class oc{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ao extends LA{constructor(e,t,s,a,l,c){super(e,t,s,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Hd(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(np("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new pe(te.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ao._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ao._jsonSchemaVersion="firestore/documentSnapshot/1.0",ao._jsonSchema={type:Wt("string",ao._jsonSchemaVersion),bundleSource:Wt("string","DocumentSnapshot"),bundleName:Wt("string"),bundle:Wt("string")};class Hd extends ao{data(e={}){return super.data(e)}}class oo{constructor(e,t,s,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new oc(a.hasPendingWrites,a.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Hd(this._firestore,this._userDataWriter,s.key,s,new oc(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new pe(te.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(a,l){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map((f=>{const m=new Hd(a._firestore,a._userDataWriter,f.doc.key,f.doc,new oc(a._snapshot.mutatedKeys.has(f.doc.key),a._snapshot.fromCache),a.query.converter);return f.doc,{type:"added",doc:m,oldIndex:-1,newIndex:c++}}))}{let c=a._snapshot.oldDocs;return a._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const m=new Hd(a._firestore,a._userDataWriter,f.doc.key,f.doc,new oc(a._snapshot.mutatedKeys.has(f.doc.key),a._snapshot.fromCache),a.query.converter);let g=-1,v=-1;return f.type!==0&&(g=c.indexOf(f.doc.key),c=c.delete(f.doc.key)),f.type!==1&&(c=c.add(f.doc),v=c.indexOf(f.doc.key)),{type:$k(f.type),doc:m,oldIndex:g,newIndex:v}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new pe(te.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=oo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Y_.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],a=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),a.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function $k(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ie(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(n){n=Rn(n,Dt);const e=Rn(n.firestore,Ki);return Mk(Fl(e),n._key).then((t=>zA(e,n,t)))}oo._jsonSchemaVersion="firestore/querySnapshot/1.0",oo._jsonSchema={type:Wt("string",oo._jsonSchemaVersion),bundleSource:Wt("string","QuerySnapshot"),bundleName:Wt("string"),bundle:Wt("string")};class sp extends Wk{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ri(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Dt(this.firestore,null,t)}}function Og(n){n=Rn(n,ir);const e=Rn(n.firestore,Ki),t=Fl(e),s=new sp(e);return VA(n._query),Ok(t,n._query).then((a=>new oo(e,s,n,a)))}function ff(n,e,t){n=Rn(n,Dt);const s=Rn(n.firestore,Ki),a=Oy(n.converter,e,t);return Wc(s,[Sy(Qc(s),"setDoc",n._key,a,n.converter!==null,t).toMutation(n._key,Bn.none())])}function Ut(n,e,t,...s){n=Rn(n,Dt);const a=Rn(n.firestore,Ki),l=Qc(a);let c;return c=typeof(e=at(e))=="string"||e instanceof Kc?DA(l,"updateDoc",n._key,e,t,s):xA(l,"updateDoc",n._key,e),Wc(a,[c.toMutation(n._key,Bn.exists(!0))])}function BA(n){return Wc(Rn(n.firestore,Ki),[new Wf(n._key,Bn.none())])}function na(n,e){const t=Rn(n.firestore,Ki),s=nt(n),a=Oy(n.converter,e);return Wc(t,[Sy(Qc(n.firestore),"addDoc",s._key,a,n.converter!==null,{}).toMutation(s._key,Bn.exists(!1))]).then((()=>s))}function Nc(n,...e){var t,s,a;n=at(n);let l={includeMetadataChanges:!1,source:"default"},c=0;typeof e[c]!="object"||yb(e[c])||(l=e[c++]);const f={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(yb(e[c])){const T=e[c];e[c]=(t=T.next)===null||t===void 0?void 0:t.bind(T),e[c+1]=(s=T.error)===null||s===void 0?void 0:s.bind(T),e[c+2]=(a=T.complete)===null||a===void 0?void 0:a.bind(T)}let m,g,v;if(n instanceof Dt)g=Rn(n.firestore,Ki),v=Ff(n._key.path),m={next:T=>{e[c]&&e[c](zA(g,n,T))},error:e[c+1],complete:e[c+2]};else{const T=Rn(n,ir);g=Rn(T.firestore,Ki),v=T._query;const w=new sp(g);m={next:R=>{e[c]&&e[c](new oo(g,w,T,R))},error:e[c+1],complete:e[c+2]},VA(n._query)}return(function(w,R,L,F){const B=new by(F),se=new vy(R,B,L);return w.asyncQueue.enqueueAndForget((async()=>gy(await cf(w),se))),()=>{B.Ou(),w.asyncQueue.enqueueAndForget((async()=>_y(await cf(w),se)))}})(Fl(g),v,f,m)}function Wc(n,e){return(function(s,a){const l=new ls;return s.asyncQueue.enqueueAndForget((async()=>Tk(await Dk(s),a,l))),l.promise})(Fl(n),e)}function zA(n,e,t){const s=t.docs.get(e._key),a=new sp(n);return new ao(n,a,e._key,s,new oc(t.hasPendingWrites,t.fromCache),e.converter)}function Xk(n){return Zk(n,{count:Yk()})}function Zk(n,e){const t=Rn(n.firestore,Ki),s=Fl(t),a=rx(e,((l,c)=>new zx(c,l.aggregateType,l._internalFieldPath)));return Lk(s,n._query,a).then((l=>(function(f,m,g){const v=new sp(f);return new jk(m,v,g)})(t,n,l)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Qc(e)}set(e,t,s){this._verifyNotCommitted();const a=Lg(e,this._firestore),l=Oy(a.converter,t,s),c=Sy(this._dataReader,"WriteBatch.set",a._key,l,a.converter!==null,s);return this._mutations.push(c.toMutation(a._key,Bn.none())),this}update(e,t,s,...a){this._verifyNotCommitted();const l=Lg(e,this._firestore);let c;return c=typeof(t=at(t))=="string"||t instanceof Kc?DA(this._dataReader,"WriteBatch.update",l._key,t,s,a):xA(this._dataReader,"WriteBatch.update",l._key,t),this._mutations.push(c.toMutation(l._key,Bn.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Lg(e,this._firestore);return this._mutations=this._mutations.concat(new Wf(t._key,Bn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new pe(te.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Lg(n,e){if((n=at(n)).firestore!==e)throw new pe(te.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function Vg(){return new Ay("serverTimestamp")}function Pc(...n){return new Cy("arrayUnion",n)}function Ly(...n){return new Ry("arrayRemove",n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eM(n){return Fl(n=Rn(n,Ki)),new Jk(n,(e=>Wc(n,e)))}(function(e,t=!0){(function(a){Ul=a})(Eo),Hi(new Ii("firestore",((s,{instanceIdentifier:a,options:l})=>{const c=s.getProvider("app").getImmediate(),f=new Ki(new jP(s.getProvider("auth-internal")),new HP(c,s.getProvider("app-check-internal")),(function(g,v){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new pe(te.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ac(g.options.projectId,v)})(c,a),c);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),ei(TT,bT,e),ei(TT,bT,"esm2017")})();function Vy(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(n);a<s.length;a++)e.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(n,s[a])&&(t[s[a]]=n[s[a]]);return t}function jA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tM=jA,qA=new vo("auth","Firebase",jA());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf=new Bc("@firebase/auth");function nM(n,...e){pf.logLevel<=He.WARN&&pf.warn(`Auth (${Eo}): ${n}`,...e)}function Gd(n,...e){pf.logLevel<=He.ERROR&&pf.error(`Auth (${Eo}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(n,...e){throw By(n,...e)}function ji(n,...e){return By(n,...e)}function Uy(n,e,t){const s=Object.assign(Object.assign({},tM()),{[e]:t});return new vo("auth","Firebase",s).create(e,{appName:n.name})}function fs(n){return Uy(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function iM(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Ni(n,"argument-error"),Uy(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function By(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return qA.create(n,...e)}function Re(n,e,...t){if(!n)throw By(e,...t)}function Gs(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Gd(e),new Error(e)}function Zs(n,e){n||Gs(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function sM(){return bb()==="http:"||bb()==="https:"}function bb(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rM(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sM()||Xw()||"connection"in navigator)?navigator.onLine:!0}function aM(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e,t){this.shortDelay=e,this.longDelay=t,Zs(t>e,"Short delay should be less than long delay!"),this.isMobile=G_()||Zw()}get(){return rM()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zy(n,e){Zs(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Gs("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Gs("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Gs("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oM={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lM=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],uM=new Yc(3e4,6e4);function sr(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function gs(n,e,t,s,a={}){return HA(n,a,async()=>{let l={},c={};s&&(e==="GET"?c=s:l={body:JSON.stringify(s)});const f=Vl(Object.assign({key:n.config.apiKey},c)).slice(1),m=await n._getAdditionalHeaders();m["Content-Type"]="application/json",n.languageCode&&(m["X-Firebase-Locale"]=n.languageCode);const g=Object.assign({method:e,headers:m},l);return cN()||(g.referrerPolicy="no-referrer"),n.emulatorConfig&&ya(n.emulatorConfig.host)&&(g.credentials="include"),FA.fetch()(await GA(n,n.config.apiHost,t,f),g)})}async function HA(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},oM),e);try{const a=new hM(n),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Md(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const f=l.ok?c.errorMessage:c.error.message,[m,g]=f.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw Md(n,"credential-already-in-use",c);if(m==="EMAIL_EXISTS")throw Md(n,"email-already-in-use",c);if(m==="USER_DISABLED")throw Md(n,"user-disabled",c);const v=s[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Uy(n,v,g);Ni(n,v)}}catch(a){if(a instanceof Qi)throw a;Ni(n,"network-request-failed",{message:String(a)})}}async function $c(n,e,t,s,a={}){const l=await gs(n,e,t,s,a);return"mfaPendingCredential"in l&&Ni(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function GA(n,e,t,s){const a=`${e}${t}?${s}`,l=n,c=l.config.emulator?zy(n.config,a):`${n.config.apiScheme}://${a}`;return lM.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}function cM(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class hM{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(ji(this.auth,"network-request-failed")),uM.get())})}}function Md(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const a=ji(n,e,s);return a.customData._tokenResponse=t,a}function wb(n){return n!==void 0&&n.enterprise!==void 0}class dM{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return cM(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function fM(n,e){return gs(n,"GET","/v2/recaptchaConfig",sr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pM(n,e){return gs(n,"POST","/v1/accounts:delete",e)}async function mf(n,e){return gs(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mM(n,e=!1){const t=at(n),s=await t.getIdToken(e),a=jy(s);Re(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l?.sign_in_provider;return{claims:a,token:s,authTime:fc(Ug(a.auth_time)),issuedAtTime:fc(Ug(a.iat)),expirationTime:fc(Ug(a.exp)),signInProvider:c||null,signInSecondFactor:l?.sign_in_second_factor||null}}function Ug(n){return Number(n)*1e3}function jy(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Gd("JWT malformed, contained fewer than 3 sections"),null;try{const a=Xd(t);return a?JSON.parse(a):(Gd("Failed to decode base64 JWT payload"),null)}catch(a){return Gd("Caught error parsing JWT payload as JSON",a?.toString()),null}}function Sb(n){const e=jy(n);return Re(e,"internal-error"),Re(typeof e.exp<"u","internal-error"),Re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dl(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Qi&&gM(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function gM({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _M{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=fc(this.lastLoginAt),this.creationTime=fc(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gf(n){var e;const t=n.auth,s=await n.getIdToken(),a=await Dl(n,mf(t,{idToken:s}));Re(a?.users.length,t,"internal-error");const l=a.users[0];n._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?KA(l.providerUserInfo):[],f=vM(n.providerData,c),m=n.isAnonymous,g=!(n.email&&l.passwordHash)&&!f?.length,v=m?g:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new w_(l.createdAt,l.lastLoginAt),isAnonymous:v};Object.assign(n,T)}async function yM(n){const e=at(n);await gf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vM(n,e){return[...n.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function KA(n){return n.map(e=>{var{providerId:t}=e,s=Vy(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EM(n,e){const t=await HA(n,{},async()=>{const s=Vl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=n.config,c=await GA(n,a,"/v1/token",`key=${l}`),f=await n._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:f,body:s};return n.emulatorConfig&&ya(n.emulatorConfig.host)&&(m.credentials="include"),FA.fetch()(c,m)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function TM(n,e){return gs(n,"POST","/v2/accounts:revokeToken",sr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Re(e.idToken,"internal-error"),Re(typeof e.idToken<"u","internal-error"),Re(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sb(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Re(e.length!==0,"internal-error");const t=Sb(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:a,expiresIn:l}=await EM(e,t);this.updateTokensAndExpiration(s,a,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:a,expirationTime:l}=t,c=new _l;return s&&(Re(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),a&&(Re(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(Re(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _l,this.toJSON())}_performRefresh(){return Gs("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(n,e){Re(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ui{constructor(e){var{uid:t,auth:s,stsTokenManager:a}=e,l=Vy(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _M(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new w_(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Dl(this,this.stsTokenManager.getToken(this.auth,e));return Re(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return mM(this,e)}reload(){return yM(this)}_assign(e){this!==e&&(Re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ui(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await gf(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Un(this.auth.app))return Promise.reject(fs(this.auth));const e=await this.getIdToken();return await Dl(this,pM(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,a,l,c,f,m,g,v;const T=(s=t.displayName)!==null&&s!==void 0?s:void 0,w=(a=t.email)!==null&&a!==void 0?a:void 0,R=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,L=(c=t.photoURL)!==null&&c!==void 0?c:void 0,F=(f=t.tenantId)!==null&&f!==void 0?f:void 0,B=(m=t._redirectEventId)!==null&&m!==void 0?m:void 0,se=(g=t.createdAt)!==null&&g!==void 0?g:void 0,oe=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:le,emailVerified:_e,isAnonymous:Le,providerData:Ee,stsTokenManager:D}=t;Re(le&&D,e,"internal-error");const C=_l.fromJSON(this.name,D);Re(typeof le=="string",e,"internal-error"),Yr(T,e.name),Yr(w,e.name),Re(typeof _e=="boolean",e,"internal-error"),Re(typeof Le=="boolean",e,"internal-error"),Yr(R,e.name),Yr(L,e.name),Yr(F,e.name),Yr(B,e.name),Yr(se,e.name),Yr(oe,e.name);const N=new Ui({uid:le,auth:e,email:w,emailVerified:_e,displayName:T,isAnonymous:Le,photoURL:L,phoneNumber:R,tenantId:F,stsTokenManager:C,createdAt:se,lastLoginAt:oe});return Ee&&Array.isArray(Ee)&&(N.providerData=Ee.map(O=>Object.assign({},O))),B&&(N._redirectEventId=B),N}static async _fromIdTokenResponse(e,t,s=!1){const a=new _l;a.updateFromServerResponse(t);const l=new Ui({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await gf(l),l}static async _fromGetAccountInfoResponse(e,t,s){const a=t.users[0];Re(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?KA(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!l?.length,f=new _l;f.updateFromIdToken(s);const m=new Ui({uid:a.localId,auth:e,stsTokenManager:f,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new w_(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!l?.length};return Object.assign(m,g),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab=new Map;function Ks(n){Zs(n instanceof Function,"Expected a class definition");let e=Ab.get(n);return e?(Zs(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ab.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}QA.type="NONE";const Cb=QA;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(n,e,t){return`firebase:${n}:${e}:${t}`}class yl{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:a,name:l}=this.auth;this.fullUserKey=Kd(this.userKey,a.apiKey,l),this.fullPersistenceKey=Kd("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await mf(this.auth,{idToken:e}).catch(()=>{});return t?Ui._fromGetAccountInfoResponse(this.auth,t,e):null}return Ui._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new yl(Ks(Cb),e,s);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||Ks(Cb);const c=Kd(s,e.config.apiKey,e.name);let f=null;for(const g of t)try{const v=await g._get(c);if(v){let T;if(typeof v=="string"){const w=await mf(e,{idToken:v}).catch(()=>{});if(!w)break;T=await Ui._fromGetAccountInfoResponse(e,w,v)}else T=Ui._fromJSON(e,v);g!==l&&(f=T),l=g;break}}catch{}const m=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!m.length?new yl(l,e,s):(l=m[0],f&&await l._set(c,f.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new yl(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rb(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(XA(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(WA(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(JA(e))return"Blackberry";if(eC(e))return"Webos";if(YA(e))return"Safari";if((e.includes("chrome/")||$A(e))&&!e.includes("edge/"))return"Chrome";if(ZA(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if(s?.length===2)return s[1]}return"Other"}function WA(n=In()){return/firefox\//i.test(n)}function YA(n=In()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $A(n=In()){return/crios\//i.test(n)}function XA(n=In()){return/iemobile/i.test(n)}function ZA(n=In()){return/android/i.test(n)}function JA(n=In()){return/blackberry/i.test(n)}function eC(n=In()){return/webos/i.test(n)}function qy(n=In()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function bM(n=In()){var e;return qy(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function wM(){return hN()&&document.documentMode===10}function tC(n=In()){return qy(n)||ZA(n)||eC(n)||JA(n)||/windows phone/i.test(n)||XA(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nC(n,e=[]){let t;switch(n){case"Browser":t=Rb(In());break;case"Worker":t=`${Rb(In())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Eo}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SM{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((c,f)=>{try{const m=e(l);c(m)}catch(m){f(m)}});s.onAbort=t,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AM(n,e={}){return gs(n,"GET","/v2/passwordPolicy",sr(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CM=6;class RM{constructor(e){var t,s,a,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:CM,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,a,l,c,f;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,m),this.validatePasswordCharacterOptions(e,m),m.isValid&&(m.isValid=(t=m.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),m.isValid&&(m.isValid=(s=m.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),m.isValid&&(m.isValid=(a=m.containsLowercaseLetter)!==null&&a!==void 0?a:!0),m.isValid&&(m.isValid=(l=m.containsUppercaseLetter)!==null&&l!==void 0?l:!0),m.isValid&&(m.isValid=(c=m.containsNumericCharacter)!==null&&c!==void 0?c:!0),m.isValid&&(m.isValid=(f=m.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),m}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IM{constructor(e,t,s,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ib(this),this.idTokenSubscription=new Ib(this),this.beforeStateQueue=new SM(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ks(t)),this._initializationPromise=this.queue(async()=>{var s,a,l;if(!this._deleted&&(this.persistenceManager=await yl.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await mf(this,{idToken:e}),s=await Ui._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Un(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let a=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=a?._redirectEventId,m=await this.tryRedirectSignIn(e);(!c||c===f)&&m?.user&&(a=m.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(c){a=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return Re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await gf(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=aM()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Un(this.app))return Promise.reject(fs(this));const t=e?at(e):null;return t&&Re(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Un(this.app)?Promise.reject(fs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Un(this.app)?Promise.reject(fs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ks(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await AM(this),t=new RM(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new vo("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await TM(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ks(e)||this._popupRedirectResolver;Re(t,this,"argument-error"),this.redirectPersistenceManager=await yl.create(this,[Ks(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(Re(f,this,"internal-error"),f.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,s,a);return()=>{c=!0,m()}}else{const m=e.addObserver(t);return()=>{c=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=nC(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(Un(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&nM(`Error while retrieving App Check token: ${t.error}`),t?.token}}function rr(n){return at(n)}class Ib{constructor(e){this.auth=e,this.observer=null,this.addObserver=TN(t=>this.observer=t)}get next(){return Re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function NM(n){rp=n}function iC(n){return rp.loadJS(n)}function PM(){return rp.recaptchaEnterpriseScript}function xM(){return rp.gapiScript}function DM(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class kM{constructor(){this.enterprise=new MM}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class MM{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const OM="recaptcha-enterprise",sC="NO_RECAPTCHA";class LM{constructor(e){this.type=OM,this.auth=rr(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,f)=>{fM(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const g=new dM(m);return l.tenantId==null?l._agentRecaptchaConfig=g:l._tenantRecaptchaConfigs[l.tenantId]=g,c(g.siteKey)}}).catch(m=>{f(m)})})}function a(l,c,f){const m=window.grecaptcha;wb(m)?m.enterprise.ready(()=>{m.enterprise.execute(l,{action:e}).then(g=>{c(g)}).catch(()=>{c(sC)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new kM().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{s(this.auth).then(f=>{if(!t&&wb(window.grecaptcha))a(f,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let m=PM();m.length!==0&&(m+=f),iC(m).then(()=>{a(f,l,c)}).catch(g=>{c(g)})}}).catch(f=>{c(f)})})}}async function Nb(n,e,t,s=!1,a=!1){const l=new LM(n);let c;if(a)c=sC;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const f=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const m=f.phoneEnrollmentInfo.phoneNumber,g=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:g,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const m=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return s?Object.assign(f,{captchaResp:c}):Object.assign(f,{captchaResponse:c}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function _f(n,e,t,s,a){var l;if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await Nb(n,e,t,t==="getOobCode");return s(n,c)}else return s(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await Nb(n,e,t,t==="getOobCode");return s(n,f)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VM(n,e){const t=va(n,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(Fi(l,e??{}))return a;Ni(a,"already-initialized")}return t.initialize({options:e})}function UM(n,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(Ks);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e?.popupRedirectResolver)}function BM(n,e,t){const s=rr(n);Re(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,l=rC(e),{host:c,port:f}=zM(e),m=f===null?"":`:${f}`,g={url:`${l}//${c}${m}/`},v=Object.freeze({host:c,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){Re(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Re(Fi(g,s.config.emulator)&&Fi(v,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=v,s.settings.appVerificationDisabledForTesting=!0,ya(c)?(F_(`${l}//${c}${m}`),H_("Auth",!0)):jM()}function rC(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function zM(n){const e=rC(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const l=a[1];return{host:l,port:Pb(s.substr(l.length+1))}}else{const[l,c]=s.split(":");return{host:l,port:Pb(c)}}}function Pb(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function jM(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Gs("not implemented")}_getIdTokenResponse(e){return Gs("not implemented")}_linkToIdToken(e,t){return Gs("not implemented")}_getReauthenticationResolver(e){return Gs("not implemented")}}async function qM(n,e){return gs(n,"POST","/v1/accounts:update",e)}async function FM(n,e){return gs(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HM(n,e){return $c(n,"POST","/v1/accounts:signInWithPassword",sr(n,e))}async function aC(n,e){return gs(n,"POST","/v1/accounts:sendOobCode",sr(n,e))}async function GM(n,e){return aC(n,e)}async function KM(n,e){return aC(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QM(n,e){return $c(n,"POST","/v1/accounts:signInWithEmailLink",sr(n,e))}async function WM(n,e){return $c(n,"POST","/v1/accounts:signInWithEmailLink",sr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc extends Fy{constructor(e,t,s,a=null){super("password",s),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new xc(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new xc(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _f(e,t,"signInWithPassword",HM);case"emailLink":return QM(e,{email:this._email,oobCode:this._password});default:Ni(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _f(e,s,"signUpPassword",FM);case"emailLink":return WM(e,{idToken:t,email:this._email,oobCode:this._password});default:Ni(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vl(n,e){return $c(n,"POST","/v1/accounts:signInWithIdp",sr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YM="http://localhost";class co extends Fy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new co(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ni("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a}=t,l=Vy(t,["providerId","signInMethod"]);if(!s||!a)return null;const c=new co(s,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return vl(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,vl(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,vl(e,t)}buildRequest(){const e={requestUri:YM,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Vl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $M(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function XM(n){const e=nc(ic(n)).link,t=e?nc(ic(e)).deep_link_id:null,s=nc(ic(n)).deep_link_id;return(s?nc(ic(s)).link:null)||s||t||e||n}class Hy{constructor(e){var t,s,a,l,c,f;const m=nc(ic(e)),g=(t=m.apiKey)!==null&&t!==void 0?t:null,v=(s=m.oobCode)!==null&&s!==void 0?s:null,T=$M((a=m.mode)!==null&&a!==void 0?a:null);Re(g&&v&&T,"argument-error"),this.apiKey=g,this.operation=T,this.code=v,this.continueUrl=(l=m.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=m.lang)!==null&&c!==void 0?c:null,this.tenantId=(f=m.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const t=XM(e);try{return new Hy(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(){this.providerId=Gl.PROVIDER_ID}static credential(e,t){return xc._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Hy.parseLink(t);return Re(s,"argument-error"),xc._fromEmailAndCode(e,s.code,s.tenantId)}}Gl.PROVIDER_ID="password";Gl.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Gl.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc extends Gy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends Xc{constructor(){super("facebook.com")}static credential(e){return co._fromParams({providerId:Zr.PROVIDER_ID,signInMethod:Zr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zr.credentialFromTaggedObject(e)}static credentialFromError(e){return Zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zr.credential(e.oauthAccessToken)}catch{return null}}}Zr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs extends Xc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return co._fromParams({providerId:Hs.PROVIDER_ID,signInMethod:Hs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Hs.credentialFromTaggedObject(e)}static credentialFromError(e){return Hs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Hs.credential(t,s)}catch{return null}}}Hs.GOOGLE_SIGN_IN_METHOD="google.com";Hs.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr extends Xc{constructor(){super("github.com")}static credential(e){return co._fromParams({providerId:Jr.PROVIDER_ID,signInMethod:Jr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jr.credentialFromTaggedObject(e)}static credentialFromError(e){return Jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jr.credential(e.oauthAccessToken)}catch{return null}}}Jr.GITHUB_SIGN_IN_METHOD="github.com";Jr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea extends Xc{constructor(){super("twitter.com")}static credential(e,t){return co._fromParams({providerId:ea.PROVIDER_ID,signInMethod:ea.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ea.credentialFromTaggedObject(e)}static credentialFromError(e){return ea.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ea.credential(t,s)}catch{return null}}}ea.TWITTER_SIGN_IN_METHOD="twitter.com";ea.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZM(n,e){return $c(n,"POST","/v1/accounts:signUp",sr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,a=!1){const l=await Ui._fromIdTokenResponse(e,s,a),c=xb(s);return new ho({user:l,providerId:c,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const a=xb(s);return new ho({user:e,providerId:a,_tokenResponse:s,operationType:t})}}function xb(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf extends Qi{constructor(e,t,s,a){var l;super(t.code,t.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,yf.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,a){return new yf(e,t,s,a)}}function oC(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?yf._fromErrorAndOperation(n,l,e,s):l})}async function JM(n,e,t=!1){const s=await Dl(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ho._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eO(n,e,t=!1){const{auth:s}=n;if(Un(s.app))return Promise.reject(fs(s));const a="reauthenticate";try{const l=await Dl(n,oC(s,a,e,n),t);Re(l.idToken,s,"internal-error");const c=jy(l.idToken);Re(c,s,"internal-error");const{sub:f}=c;return Re(n.uid===f,s,"user-mismatch"),ho._forOperation(n,a,l)}catch(l){throw l?.code==="auth/user-not-found"&&Ni(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lC(n,e,t=!1){if(Un(n.app))return Promise.reject(fs(n));const s="signIn",a=await oC(n,s,e),l=await ho._fromIdTokenResponse(n,s,a);return t||await n._updateCurrentUser(l.user),l}async function tO(n,e){return lC(rr(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uC(n){const e=rr(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function nO(n,e,t){const s=rr(n);await _f(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",KM)}async function iO(n,e,t){if(Un(n.app))return Promise.reject(fs(n));const s=rr(n),c=await _f(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ZM).catch(m=>{throw m.code==="auth/password-does-not-meet-requirements"&&uC(n),m}),f=await ho._fromIdTokenResponse(s,"signIn",c);return await s._updateCurrentUser(f.user),f}function sO(n,e,t){return Un(n.app)?Promise.reject(fs(n)):tO(at(n),Gl.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&uC(n),s})}async function Db(n,e){const t=at(n),a={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()},{email:l}=await GM(t.auth,a);l!==n.email&&await n.reload()}function kb(n,e){const t=at(n);return Un(t.auth.app)?Promise.reject(fs(t.auth)):rO(t,e)}async function rO(n,e,t){const{auth:s}=n,l={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(l.email=e);const c=await Dl(n,qM(s,l));await n._updateTokensIfNecessary(c,!0)}function aO(n,e,t,s){return at(n).onIdTokenChanged(e,t,s)}function oO(n,e,t){return at(n).beforeAuthStateChanged(e,t)}function lO(n,e,t,s){return at(n).onAuthStateChanged(e,t,s)}function uO(n){return at(n).signOut()}const vf="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(vf,"1"),this.storage.removeItem(vf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cO=1e3,hO=10;class hC extends cC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=tC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),a=this.localCache[t];s!==a&&e(t,a,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,f,m)=>{this.notifyListeners(c,m)});return}const s=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(s);!t&&this.localCache[s]===c||this.notifyListeners(s,c)},l=this.storage.getItem(s);wM()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,hO):a()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},cO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}hC.type="LOCAL";const dO=hC;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC extends cC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}dC.type="SESSION";const fC=dC;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fO(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const s=new ap(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!c?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const f=Array.from(c).map(async g=>g(t.origin,l)),m=await fO(f);t.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ap.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ky(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((f,m)=>{const g=Ky("",20);a.port1.start();const v=setTimeout(()=>{m(new Error("unsupported_event"))},s);c={messageChannel:a,onMessage(T){const w=T;if(w.data.eventId===g)switch(w.data.status){case"ack":clearTimeout(v),l=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(w.data.response);break;default:clearTimeout(v),clearTimeout(l),m(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(){return window}function mO(n){ps().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pC(){return typeof ps().WorkerGlobalScope<"u"&&typeof ps().importScripts=="function"}async function gO(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _O(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function yO(){return pC()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC="firebaseLocalStorageDb",vO=1,Ef="firebaseLocalStorage",gC="fbase_key";class Zc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function op(n,e){return n.transaction([Ef],e?"readwrite":"readonly").objectStore(Ef)}function EO(){const n=indexedDB.deleteDatabase(mC);return new Zc(n).toPromise()}function S_(){const n=indexedDB.open(mC,vO);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Ef,{keyPath:gC})}catch(a){t(a)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Ef)?e(s):(s.close(),await EO(),e(await S_()))})})}async function Mb(n,e,t){const s=op(n,!0).put({[gC]:e,value:t});return new Zc(s).toPromise()}async function TO(n,e){const t=op(n,!1).get(e),s=await new Zc(t).toPromise();return s===void 0?null:s.value}function Ob(n,e){const t=op(n,!0).delete(e);return new Zc(t).toPromise()}const bO=800,wO=3;class _C{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await S_(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>wO)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ap._getInstance(yO()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await gO(),!this.activeServiceWorker)return;this.sender=new pO(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_O()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await S_();return await Mb(e,vf,"1"),await Ob(e,vf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Mb(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>TO(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ob(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=op(a,!1).getAll();return new Zc(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_C.type="LOCAL";const SO=_C;new Yc(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yC(n,e){return e?Ks(e):(Re(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy extends Fy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vl(e,this._buildIdpRequest())}_linkToIdToken(e,t){return vl(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return vl(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function AO(n){return lC(n.auth,new Qy(n),n.bypassAuthState)}function CO(n){const{auth:e,user:t}=n;return Re(t,e,"internal-error"),eO(t,new Qy(n),n.bypassAuthState)}async function RO(n){const{auth:e,user:t}=n;return Re(t,e,"internal-error"),JM(t,new Qy(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(e,t,s,a,l=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:a,tenantId:l,error:c,type:f}=e;if(c){this.reject(c);return}const m={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(m))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return AO;case"linkViaPopup":case"linkViaRedirect":return RO;case"reauthViaPopup":case"reauthViaRedirect":return CO;default:Ni(this.auth,"internal-error")}}resolve(e){Zs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Zs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IO=new Yc(2e3,1e4);async function NO(n,e,t){if(Un(n.app))return Promise.reject(ji(n,"operation-not-supported-in-this-environment"));const s=rr(n);iM(n,e,Gy);const a=yC(s,t);return new to(s,"signInViaPopup",e,a).executeNotNull()}class to extends vC{constructor(e,t,s,a,l){super(e,t,a,l),this.provider=s,this.authWindow=null,this.pollId=null,to.currentPopupAction&&to.currentPopupAction.cancel(),to.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Re(e,this.auth,"internal-error"),e}async onExecution(){Zs(this.filter.length===1,"Popup operations only handle one event");const e=Ky();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ji(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ji(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,to.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ji(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,IO.get())};e()}}to.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PO="pendingRedirect",Qd=new Map;class xO extends vC{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Qd.get(this.auth._key());if(!e){try{const s=await DO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Qd.set(this.auth._key(),e)}return this.bypassAuthState||Qd.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function DO(n,e){const t=OO(e),s=MO(n);if(!await s._isAvailable())return!1;const a=await s._get(t)==="true";return await s._remove(t),a}function kO(n,e){Qd.set(n._key(),e)}function MO(n){return Ks(n._redirectPersistence)}function OO(n){return Kd(PO,n.config.apiKey,n.name)}async function LO(n,e,t=!1){if(Un(n.app))return Promise.reject(fs(n));const s=rr(n),a=yC(s,e),c=await new xO(s,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VO=600*1e3;class UO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!BO(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!EC(e)){const a=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(ji(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=VO&&this.cachedEventUids.clear(),this.cachedEventUids.has(Lb(e))}saveEventToCache(e){this.cachedEventUids.add(Lb(e)),this.lastProcessedEventTime=Date.now()}}function Lb(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function EC({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function BO(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return EC(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zO(n,e={}){return gs(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qO=/^https?/;async function FO(n){if(n.config.emulator)return;const{authorizedDomains:e}=await zO(n);for(const t of e)try{if(HO(t))return}catch{}Ni(n,"unauthorized-domain")}function HO(n){const e=b_(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===s}if(!qO.test(t))return!1;if(jO.test(n))return s===n;const a=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GO=new Yc(3e4,6e4);function Vb(){const n=ps().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function KO(n){return new Promise((e,t)=>{var s,a,l;function c(){Vb(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vb(),t(ji(n,"network-request-failed"))},timeout:GO.get()})}if(!((a=(s=ps().gapi)===null||s===void 0?void 0:s.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((l=ps().gapi)===null||l===void 0)&&l.load)c();else{const f=DM("iframefcb");return ps()[f]=()=>{gapi.load?c():t(ji(n,"network-request-failed"))},iC(`${xM()}?onload=${f}`).catch(m=>t(m))}}).catch(e=>{throw Wd=null,e})}let Wd=null;function QO(n){return Wd=Wd||KO(n),Wd}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WO=new Yc(5e3,15e3),YO="__/auth/iframe",$O="emulator/auth/iframe",XO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ZO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function JO(n){const e=n.config;Re(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?zy(e,$O):`https://${n.config.authDomain}/${YO}`,s={apiKey:e.apiKey,appName:n.name,v:Eo},a=ZO.get(n.config.apiHost);a&&(s.eid=a);const l=n._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${Vl(s).slice(1)}`}async function e4(n){const e=await QO(n),t=ps().gapi;return Re(t,n,"internal-error"),e.open({where:document.body,url:JO(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:XO,dontclear:!0},s=>new Promise(async(a,l)=>{await s.restyle({setHideOnLeave:!1});const c=ji(n,"network-request-failed"),f=ps().setTimeout(()=>{l(c)},WO.get());function m(){ps().clearTimeout(f),a(s)}s.ping(m).then(m,()=>{l(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t4={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},n4=500,i4=600,s4="_blank",r4="http://localhost";class Ub{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function a4(n,e,t,s=n4,a=i4){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const m=Object.assign(Object.assign({},t4),{width:s.toString(),height:a.toString(),top:l,left:c}),g=In().toLowerCase();t&&(f=$A(g)?s4:t),WA(g)&&(e=e||r4,m.scrollbars="yes");const v=Object.entries(m).reduce((w,[R,L])=>`${w}${R}=${L},`,"");if(bM(g)&&f!=="_self")return o4(e||"",f),new Ub(null);const T=window.open(e||"",f,v);Re(T,n,"popup-blocked");try{T.focus()}catch{}return new Ub(T)}function o4(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l4="__/auth/handler",u4="emulator/auth/handler",c4=encodeURIComponent("fac");async function Bb(n,e,t,s,a,l){Re(n.config.authDomain,n,"auth-domain-config-required"),Re(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Eo,eventId:a};if(e instanceof Gy){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",Zg(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,T]of Object.entries({}))c[v]=T}if(e instanceof Xc){const v=e.getScopes().filter(T=>T!=="");v.length>0&&(c.scopes=v.join(","))}n.tenantId&&(c.tid=n.tenantId);const f=c;for(const v of Object.keys(f))f[v]===void 0&&delete f[v];const m=await n._getAppCheckToken(),g=m?`#${c4}=${encodeURIComponent(m)}`:"";return`${h4(n)}?${Vl(f).slice(1)}${g}`}function h4({config:n}){return n.emulator?zy(n,u4):`https://${n.authDomain}/${l4}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg="webStorageSupport";class d4{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fC,this._completeRedirectFn=LO,this._overrideRedirectResult=kO}async _openPopup(e,t,s,a){var l;Zs((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await Bb(e,t,s,b_(),a);return a4(e,c,Ky())}async _openRedirect(e,t,s,a){await this._originValidation(e);const l=await Bb(e,t,s,b_(),a);return mO(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(Zs(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await e4(e),s=new UO(e);return t.register("authEvent",a=>(Re(a?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Bg,{type:Bg},a=>{var l;const c=(l=a?.[0])===null||l===void 0?void 0:l[Bg];c!==void 0&&t(!!c),Ni(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=FO(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return tC()||YA()||qy()}}const f4=d4;var zb="@firebase/auth",jb="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p4{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m4(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function g4(n){Hi(new Ii("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:f}=s.options;Re(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const m={apiKey:c,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nC(n)},g=new IM(s,a,l,m);return UM(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Hi(new Ii("auth-internal",e=>{const t=rr(e.getProvider("auth").getImmediate());return(s=>new p4(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ei(zb,jb,m4(n)),ei(zb,jb,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _4=300,y4=Yw("authIdTokenMaxAge")||_4;let qb=null;const v4=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>y4)return;const a=t?.token;qb!==a&&(qb=a,await fetch(n,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function E4(n=zc()){const e=va(n,"auth");if(e.isInitialized())return e.getImmediate();const t=VM(n,{popupRedirectResolver:f4,persistence:[SO,dO,fC]}),s=Yw("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const c=v4(l.toString());oO(t,c,()=>c(t.currentUser)),aO(t,f=>c(f))}}const a=Kw("auth");return a&&BM(t,`http://${a}`),t}function T4(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}NM({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=a=>{const l=ji("internal-error");l.customData=a,t(l)},s.type="text/javascript",s.charset="UTF-8",T4().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});g4("Browser");const TC="@firebase/installations",Wy="0.6.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC=1e4,wC=`w:${Wy}`,SC="FIS_v2",b4="https://firebaseinstallations.googleapis.com/v1",w4=3600*1e3,S4="installations",A4="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C4={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},fo=new vo(S4,A4,C4);function AC(n){return n instanceof Qi&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CC({projectId:n}){return`${b4}/projects/${n}/installations`}function RC(n){return{token:n.token,requestStatus:2,expiresIn:I4(n.expiresIn),creationTime:Date.now()}}async function IC(n,e){const s=(await e.json()).error;return fo.create("request-failed",{requestName:n,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function NC({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function R4(n,{refreshToken:e}){const t=NC(n);return t.append("Authorization",N4(e)),t}async function PC(n){const e=await n();return e.status>=500&&e.status<600?n():e}function I4(n){return Number(n.replace("s","000"))}function N4(n){return`${SC} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P4({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=CC(n),a=NC(n),l=e.getImmediate({optional:!0});if(l){const g=await l.getHeartbeatsHeader();g&&a.append("x-firebase-client",g)}const c={fid:t,authVersion:SC,appId:n.appId,sdkVersion:wC},f={method:"POST",headers:a,body:JSON.stringify(c)},m=await PC(()=>fetch(s,f));if(m.ok){const g=await m.json();return{fid:g.fid||t,registrationStatus:2,refreshToken:g.refreshToken,authToken:RC(g.authToken)}}else throw await IC("Create Installation",m)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xC(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x4(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D4=/^[cdef][\w-]{21}$/,A_="";function k4(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=M4(n);return D4.test(t)?t:A_}catch{return A_}}function M4(n){return x4(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC=new Map;function kC(n,e){const t=lp(n);MC(t,e),O4(t,e)}function MC(n,e){const t=DC.get(n);if(t)for(const s of t)s(e)}function O4(n,e){const t=L4();t&&t.postMessage({key:n,fid:e}),V4()}let no=null;function L4(){return!no&&"BroadcastChannel"in self&&(no=new BroadcastChannel("[Firebase] FID Change"),no.onmessage=n=>{MC(n.data.key,n.data.fid)}),no}function V4(){DC.size===0&&no&&(no.close(),no=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U4="firebase-installations-database",B4=1,po="firebase-installations-store";let zg=null;function Yy(){return zg||(zg=sS(U4,B4,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(po)}}})),zg}async function Tf(n,e){const t=lp(n),a=(await Yy()).transaction(po,"readwrite"),l=a.objectStore(po),c=await l.get(t);return await l.put(e,t),await a.done,(!c||c.fid!==e.fid)&&kC(n,e.fid),e}async function OC(n){const e=lp(n),s=(await Yy()).transaction(po,"readwrite");await s.objectStore(po).delete(e),await s.done}async function up(n,e){const t=lp(n),a=(await Yy()).transaction(po,"readwrite"),l=a.objectStore(po),c=await l.get(t),f=e(c);return f===void 0?await l.delete(t):await l.put(f,t),await a.done,f&&(!c||c.fid!==f.fid)&&kC(n,f.fid),f}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $y(n){let e;const t=await up(n.appConfig,s=>{const a=z4(s),l=j4(n,a);return e=l.registrationPromise,l.installationEntry});return t.fid===A_?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function z4(n){const e=n||{fid:k4(),registrationStatus:0};return LC(e)}function j4(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const a=Promise.reject(fo.create("app-offline"));return{installationEntry:e,registrationPromise:a}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=q4(n,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:F4(n)}:{installationEntry:e}}async function q4(n,e){try{const t=await P4(n,e);return Tf(n.appConfig,t)}catch(t){throw AC(t)&&t.customData.serverCode===409?await OC(n.appConfig):await Tf(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function F4(n){let e=await Fb(n.appConfig);for(;e.registrationStatus===1;)await xC(100),e=await Fb(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await $y(n);return s||t}return e}function Fb(n){return up(n,e=>{if(!e)throw fo.create("installation-not-found");return LC(e)})}function LC(n){return H4(n)?{fid:n.fid,registrationStatus:0}:n}function H4(n){return n.registrationStatus===1&&n.registrationTime+bC<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G4({appConfig:n,heartbeatServiceProvider:e},t){const s=K4(n,t),a=R4(n,t),l=e.getImmediate({optional:!0});if(l){const g=await l.getHeartbeatsHeader();g&&a.append("x-firebase-client",g)}const c={installation:{sdkVersion:wC,appId:n.appId}},f={method:"POST",headers:a,body:JSON.stringify(c)},m=await PC(()=>fetch(s,f));if(m.ok){const g=await m.json();return RC(g)}else throw await IC("Generate Auth Token",m)}function K4(n,{fid:e}){return`${CC(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xy(n,e=!1){let t;const s=await up(n.appConfig,l=>{if(!VC(l))throw fo.create("not-registered");const c=l.authToken;if(!e&&Y4(c))return l;if(c.requestStatus===1)return t=Q4(n,e),l;{if(!navigator.onLine)throw fo.create("app-offline");const f=X4(l);return t=W4(n,f),f}});return t?await t:s.authToken}async function Q4(n,e){let t=await Hb(n.appConfig);for(;t.authToken.requestStatus===1;)await xC(100),t=await Hb(n.appConfig);const s=t.authToken;return s.requestStatus===0?Xy(n,e):s}function Hb(n){return up(n,e=>{if(!VC(e))throw fo.create("not-registered");const t=e.authToken;return Z4(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function W4(n,e){try{const t=await G4(n,e),s=Object.assign(Object.assign({},e),{authToken:t});return await Tf(n.appConfig,s),t}catch(t){if(AC(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await OC(n.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Tf(n.appConfig,s)}throw t}}function VC(n){return n!==void 0&&n.registrationStatus===2}function Y4(n){return n.requestStatus===2&&!$4(n)}function $4(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+w4}function X4(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function Z4(n){return n.requestStatus===1&&n.requestTime+bC<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J4(n){const e=n,{installationEntry:t,registrationPromise:s}=await $y(e);return s?s.catch(console.error):Xy(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e3(n,e=!1){const t=n;return await t3(t),(await Xy(t,e)).token}async function t3(n){const{registrationPromise:e}=await $y(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n3(n){if(!n||!n.options)throw jg("App Configuration");if(!n.name)throw jg("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw jg(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function jg(n){return fo.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC="installations",i3="installations-internal",s3=n=>{const e=n.getProvider("app").getImmediate(),t=n3(e),s=va(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},r3=n=>{const e=n.getProvider("app").getImmediate(),t=va(e,UC).getImmediate();return{getId:()=>J4(t),getToken:a=>e3(t,a)}};function a3(){Hi(new Ii(UC,s3,"PUBLIC")),Hi(new Ii(i3,r3,"PRIVATE"))}a3();ei(TC,Wy);ei(TC,Wy,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf="analytics",o3="firebase_id",l3="origin",u3=60*1e3,c3="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Zy="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=new Bc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h3={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},pi=new vo("analytics","Analytics",h3);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d3(n){if(!n.startsWith(Zy)){const e=pi.create("invalid-gtag-resource",{gtagURL:n});return ti.warn(e.message),""}return n}function BC(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function f3(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function p3(n,e){const t=f3("firebase-js-sdk-policy",{createScriptURL:d3}),s=document.createElement("script"),a=`${Zy}?l=${n}&id=${e}`;s.src=t?t?.createScriptURL(a):a,s.async=!0,document.head.appendChild(s)}function m3(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function g3(n,e,t,s,a,l){const c=s[a];try{if(c)await e[c];else{const m=(await BC(t)).find(g=>g.measurementId===a);m&&await e[m.appId]}}catch(f){ti.error(f)}n("config",a,l)}async function _3(n,e,t,s,a){try{let l=[];if(a&&a.send_to){let c=a.send_to;Array.isArray(c)||(c=[c]);const f=await BC(t);for(const m of c){const g=f.find(T=>T.measurementId===m),v=g&&e[g.appId];if(v)l.push(v);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),n("event",s,a||{})}catch(l){ti.error(l)}}function y3(n,e,t,s){async function a(l,...c){try{if(l==="event"){const[f,m]=c;await _3(n,e,t,f,m)}else if(l==="config"){const[f,m]=c;await g3(n,e,t,s,f,m)}else if(l==="consent"){const[f,m]=c;n("consent",f,m)}else if(l==="get"){const[f,m,g]=c;n("get",f,m,g)}else if(l==="set"){const[f]=c;n("set",f)}else n(l,...c)}catch(f){ti.error(f)}}return a}function v3(n,e,t,s,a){let l=function(...c){window[s].push(arguments)};return window[a]&&typeof window[a]=="function"&&(l=window[a]),window[a]=y3(l,n,e,t),{gtagCore:l,wrappedGtag:window[a]}}function E3(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Zy)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T3=30,b3=1e3;class w3{constructor(e={},t=b3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const zC=new w3;function S3(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function A3(n){var e;const{appId:t,apiKey:s}=n,a={method:"GET",headers:S3(s)},l=c3.replace("{app-id}",t),c=await fetch(l,a);if(c.status!==200&&c.status!==304){let f="";try{const m=await c.json();!((e=m.error)===null||e===void 0)&&e.message&&(f=m.error.message)}catch{}throw pi.create("config-fetch-failed",{httpStatus:c.status,responseMessage:f})}return c.json()}async function C3(n,e=zC,t){const{appId:s,apiKey:a,measurementId:l}=n.options;if(!s)throw pi.create("no-app-id");if(!a){if(l)return{measurementId:l,appId:s};throw pi.create("no-api-key")}const c=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new N3;return setTimeout(async()=>{f.abort()},u3),jC({appId:s,apiKey:a,measurementId:l},c,f,e)}async function jC(n,{throttleEndTimeMillis:e,backoffCount:t},s,a=zC){var l;const{appId:c,measurementId:f}=n;try{await R3(s,e)}catch(m){if(f)return ti.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${m?.message}]`),{appId:c,measurementId:f};throw m}try{const m=await A3(n);return a.deleteThrottleMetadata(c),m}catch(m){const g=m;if(!I3(g)){if(a.deleteThrottleMetadata(c),f)return ti.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${g?.message}]`),{appId:c,measurementId:f};throw m}const v=Number((l=g?.customData)===null||l===void 0?void 0:l.httpStatus)===503?hT(t,a.intervalMillis,T3):hT(t,a.intervalMillis),T={throttleEndTimeMillis:Date.now()+v,backoffCount:t+1};return a.setThrottleMetadata(c,T),ti.debug(`Calling attemptFetch again in ${v} millis`),jC(n,T,s,a)}}function R3(n,e){return new Promise((t,s)=>{const a=Math.max(e-Date.now(),0),l=setTimeout(t,a);n.addEventListener(()=>{clearTimeout(l),s(pi.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function I3(n){if(!(n instanceof Qi)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class N3{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function P3(n,e,t,s,a){if(a&&a.global){n("event",t,s);return}else{const l=await e,c=Object.assign(Object.assign({},s),{send_to:l});n("event",t,c)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x3(){if(Jw())try{await eS()}catch(n){return ti.warn(pi.create("indexeddb-unavailable",{errorInfo:n?.toString()}).message),!1}else return ti.warn(pi.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function D3(n,e,t,s,a,l,c){var f;const m=C3(n);m.then(R=>{t[R.measurementId]=R.appId,n.options.measurementId&&R.measurementId!==n.options.measurementId&&ti.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${R.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(R=>ti.error(R)),e.push(m);const g=x3().then(R=>{if(R)return s.getId()}),[v,T]=await Promise.all([m,g]);E3(l)||p3(l,v.measurementId),a("js",new Date);const w=(f=c?.config)!==null&&f!==void 0?f:{};return w[l3]="firebase",w.update=!0,T!=null&&(w[o3]=T),a("config",v.measurementId,w),v.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k3{constructor(e){this.app=e}_delete(){return delete pc[this.app.options.appId],Promise.resolve()}}let pc={},Gb=[];const Kb={};let qg="dataLayer",M3="gtag",Qb,qC,Wb=!1;function O3(){const n=[];if(Xw()&&n.push("This is a browser extension environment."),pN()||n.push("Cookies are not available."),n.length>0){const e=n.map((s,a)=>`(${a+1}) ${s}`).join(" "),t=pi.create("invalid-analytics-context",{errorInfo:e});ti.warn(t.message)}}function L3(n,e,t){O3();const s=n.options.appId;if(!s)throw pi.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)ti.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw pi.create("no-api-key");if(pc[s]!=null)throw pi.create("already-exists",{id:s});if(!Wb){m3(qg);const{wrappedGtag:l,gtagCore:c}=v3(pc,Gb,Kb,qg,M3);qC=l,Qb=c,Wb=!0}return pc[s]=D3(n,Gb,Kb,e,Qb,qg,t),new k3(n)}function V3(n=zc()){n=at(n);const e=va(n,bf);return e.isInitialized()?e.getImmediate():U3(n)}function U3(n,e={}){const t=va(n,bf);if(t.isInitialized()){const a=t.getImmediate();if(Fi(e,t.getOptions()))return a;throw pi.create("already-initialized")}return t.initialize({options:e})}function B3(n,e,t,s){n=at(n),P3(qC,pc[n.app.options.appId],e,t,s).catch(a=>ti.error(a))}const Yb="@firebase/analytics",$b="0.10.17";function z3(){Hi(new Ii(bf,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("installations-internal").getImmediate();return L3(s,a,t)},"PUBLIC")),Hi(new Ii("analytics-internal",n,"PRIVATE")),ei(Yb,$b),ei(Yb,$b,"esm2017");function n(e){try{const t=e.getProvider(bf).getImmediate();return{logEvent:(s,a,l)=>B3(t,s,a,l)}}catch(t){throw pi.create("interop-component-reg-failed",{reason:t})}}}z3();var Xb={};const Zb="@firebase/database",Jb="1.0.20";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FC="";function j3(n){FC=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q3{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),un(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Ec(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F3{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return nr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HC=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new q3(e)}}catch{}return new F3},io=HC("localStorage"),H3=HC("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El=new Bc("@firebase/database"),G3=(function(){let n=1;return function(){return n++}})(),GC=function(n){const e=SN(n),t=new EN;t.update(e);const s=t.digest();return q_.encodeByteArray(s)},Jc=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Jc.apply(null,s):typeof s=="object"?e+=un(s):e+=s,e+=" "}return e};let mc=null,ew=!0;const K3=function(n,e){ce(!0,"Can't turn on custom loggers persistently."),El.logLevel=He.VERBOSE,mc=El.log.bind(El)},Cn=function(...n){if(ew===!0&&(ew=!1,mc===null&&H3.get("logging_enabled")===!0&&K3()),mc){const e=Jc.apply(null,n);mc(e)}},eh=function(n){return function(...e){Cn(n,...e)}},C_=function(...n){const e="FIREBASE INTERNAL ERROR: "+Jc(...n);El.error(e)},Js=function(...n){const e=`FIREBASE FATAL ERROR: ${Jc(...n)}`;throw El.error(e),new Error(e)},ni=function(...n){const e="FIREBASE WARNING: "+Jc(...n);El.warn(e)},Q3=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ni("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},KC=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},W3=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},kl="[MIN_NAME]",mo="[MAX_NAME]",Kl=function(n,e){if(n===e)return 0;if(n===kl||e===mo)return-1;if(e===kl||n===mo)return 1;{const t=tw(n),s=tw(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},Y3=function(n,e){return n===e?0:n<e?-1:1},Zu=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+un(e))},Jy=function(n){if(typeof n!="object"||n===null)return un(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=un(e[s]),t+=":",t+=Jy(n[e[s]]);return t+="}",t},QC=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let a=0;a<t;a+=e)a+e>t?s.push(n.substring(a,t)):s.push(n.substring(a,a+e));return s};function ii(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const WC=function(n){ce(!KC(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let a,l,c,f,m;n===0?(l=0,c=0,a=1/n===-1/0?1:0):(a=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(n)/Math.LN2),s),l=f+s,c=Math.round(n*Math.pow(2,t-f)-Math.pow(2,t))):(l=0,c=Math.round(n/Math.pow(2,1-s-t))));const g=[];for(m=t;m;m-=1)g.push(c%2?1:0),c=Math.floor(c/2);for(m=e;m;m-=1)g.push(l%2?1:0),l=Math.floor(l/2);g.push(a?1:0),g.reverse();const v=g.join("");let T="";for(m=0;m<64;m+=8){let w=parseInt(v.substr(m,8),2).toString(16);w.length===1&&(w="0"+w),T=T+w}return T.toLowerCase()},$3=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},X3=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Z3(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const J3=new RegExp("^-?(0*)\\d{1,10}$"),e5=-2147483648,t5=2147483647,tw=function(n){if(J3.test(n)){const e=Number(n);if(e>=e5&&e<=t5)return e}return null},Ql=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ni("Exception was thrown by user callback.",t),e},Math.floor(0))}},n5=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},gc=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i5{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Un(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ni(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s5{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Cn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ni(e)}}class Yd{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Yd.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev="5",YC="v",$C="s",XC="r",ZC="f",JC=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,eR="ls",tR="p",R_="ac",nR="websocket",iR="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e,t,s,a,l=!1,c="",f=!1,m=!1,g=null){this.secure=t,this.namespace=s,this.webSocketOnly=a,this.nodeAdmin=l,this.persistenceKey=c,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=m,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=io.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&io.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function r5(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function rR(n,e,t){ce(typeof e=="string","typeof type must == string"),ce(typeof t=="object","typeof params must == object");let s;if(e===nR)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===iR)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);r5(n)&&(t.ns=n.namespace);const a=[];return ii(t,(l,c)=>{a.push(l+"="+c)}),s+a.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a5{constructor(){this.counters_={}}incrementCounter(e,t=1){nr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return tN(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg={},Hg={};function tv(n){const e=n.toString();return Fg[e]||(Fg[e]=new a5),Fg[e]}function o5(n,e){const t=n.toString();return Hg[t]||(Hg[t]=e()),Hg[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l5{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<s.length;++a)s[a]&&Ql(()=>{this.onMessage_(s[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nw="start",u5="close",c5="pLPCommand",h5="pRTLPCB",aR="id",oR="pw",lR="ser",d5="cb",f5="seg",p5="ts",m5="d",g5="dframe",uR=1870,cR=30,_5=uR-cR,y5=25e3,v5=3e4;class ml{constructor(e,t,s,a,l,c,f){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.transportSessionId=c,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=eh(e),this.stats_=tv(t),this.urlFn=m=>(this.appCheckToken&&(m[R_]=this.appCheckToken),rR(t,iR,m))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new l5(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(v5)),W3(()=>{if(this.isClosed_)return;this.scriptTagHolder=new nv((...l)=>{const[c,f,m,g,v]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===nw)this.id=f,this.password=m;else if(c===u5)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...l)=>{const[c,f]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(c,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[nw]="t",s[lR]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[d5]=this.scriptTagHolder.uniqueCallbackIdentifier),s[YC]=ev,this.transportSessionId&&(s[$C]=this.transportSessionId),this.lastSessionId&&(s[eR]=this.lastSessionId),this.applicationId&&(s[tR]=this.applicationId),this.appCheckToken&&(s[R_]=this.appCheckToken),typeof location<"u"&&location.hostname&&JC.test(location.hostname)&&(s[XC]=ZC);const a=this.urlFn(s);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ml.forceAllow_=!0}static forceDisallow(){ml.forceDisallow_=!0}static isAvailable(){return ml.forceAllow_?!0:!ml.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!$3()&&!X3()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=un(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Hw(t),a=QC(s,_5);for(let l=0;l<a.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[g5]="t",s[aR]=e,s[oR]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=un(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class nv{constructor(e,t,s,a){this.onDisconnect=s,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=G3(),window[c5+this.uniqueCallbackIdentifier]=e,window[h5+this.uniqueCallbackIdentifier]=t,this.myIFrame=nv.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(f){Cn("frame writing exception"),f.stack&&Cn(f.stack),Cn(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Cn("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[aR]=this.myID,e[oR]=this.myPW,e[lR]=this.currentSerial;let t=this.urlFn(e),s="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+cR+s.length<=uR;){const c=this.pendingSegs.shift();s=s+"&"+f5+a+"="+c.seg+"&"+p5+a+"="+c.ts+"&"+m5+a+"="+c.d,a++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},a=setTimeout(s,Math.floor(y5)),l=()=>{clearTimeout(a),s()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const a=s.readyState;(!a||a==="loaded"||a==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{Cn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E5=16384,T5=45e3;let wf=null;typeof MozWebSocket<"u"?wf=MozWebSocket:typeof WebSocket<"u"&&(wf=WebSocket);class Vi{constructor(e,t,s,a,l,c,f){this.connId=e,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=eh(this.connId),this.stats_=tv(t),this.connURL=Vi.connectionURL_(t,c,f,a,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,a,l){const c={};return c[YC]=ev,typeof location<"u"&&location.hostname&&JC.test(location.hostname)&&(c[XC]=ZC),t&&(c[$C]=t),s&&(c[eR]=s),a&&(c[R_]=a),l&&(c[tR]=l),rR(e,nR,c)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,io.set("previous_websocket_failure",!0);try{let s;dN(),this.mySock=new wf(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){Vi.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&wf!==null&&!Vi.forceDisallow_}static previouslyFailed(){return io.isInMemoryStorage||io.get("previous_websocket_failure")===!0}markConnectionHealthy(){io.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Ec(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ce(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=un(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=QC(t,E5);s.length>1&&this.sendString_(String(s.length));for(let a=0;a<s.length;a++)this.sendString_(s[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(T5))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Vi.responsesRequiredToBeHealthy=2;Vi.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{static get ALL_TRANSPORTS(){return[ml,Vi]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Vi&&Vi.isAvailable();let s=t&&!Vi.previouslyFailed();if(e.webSocketOnly&&(t||ni("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Vi];else{const a=this.transports_=[];for(const l of Dc.ALL_TRANSPORTS)l&&l.isAvailable()&&a.push(l);Dc.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Dc.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b5=6e4,w5=5e3,S5=10*1024,A5=100*1024,Gg="t",iw="d",C5="s",sw="r",R5="e",rw="o",aw="a",ow="n",lw="p",I5="h";class N5{constructor(e,t,s,a,l,c,f,m,g,v){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=a,this.authToken_=l,this.onMessage_=c,this.onReady_=f,this.onDisconnect_=m,this.onKill_=g,this.lastSessionId=v,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=eh("c:"+this.id+":"),this.transportManager_=new Dc(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=gc(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>A5?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>S5?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Gg in e){const t=e[Gg];t===aw?this.upgradeIfSecondaryHealthy_():t===sw?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===rw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Zu("t",e),s=Zu("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:lw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:aw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ow,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Zu("t",e),s=Zu("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Zu(Gg,e);if(iw in e){const s=e[iw];if(t===I5){const a=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(t===ow){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===C5?this.onConnectionShutdown_(s):t===sw?this.onReset_(s):t===R5?C_("Server Error: "+s):t===rw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):C_("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),ev!==s&&ni("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),gc(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(b5))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):gc(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(w5))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:lw,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(io.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{put(e,t,s,a){}merge(e,t,s,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(e){this.allowedEvents_=e,this.listeners_={},ce(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let a=0;a<s.length;a++)s[a].callback.apply(s[a].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const a=this.getInitialEvent(e);a&&t.apply(s,a)}off(e,t,s){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let l=0;l<a.length;l++)if(a[l].callback===t&&(!s||s===a[l].context)){a.splice(l,1);return}}validateEventType_(e){ce(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf extends dR{static getInstance(){return new Sf}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!G_()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return ce(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw=32,cw=768;class _t{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[s]=this.pieces_[a],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function st(){return new _t("")}function ze(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function ga(n){return n.pieces_.length-n.pieceNum_}function yt(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new _t(n.pieces_,e)}function fR(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function P5(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function pR(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function mR(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new _t(e,0)}function Xt(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof _t)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let a=0;a<s.length;a++)s[a].length>0&&t.push(s[a])}return new _t(t,0)}function Ge(n){return n.pieceNum_>=n.pieces_.length}function Zn(n,e){const t=ze(n),s=ze(e);if(t===null)return e;if(t===s)return Zn(yt(n),yt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function iv(n,e){if(ga(n)!==ga(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function Bi(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(ga(n)>ga(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class x5{constructor(e,t){this.errorPrefix_=t,this.parts_=pR(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Uf(this.parts_[s]);gR(this)}}function D5(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Uf(e),gR(n)}function k5(n){const e=n.parts_.pop();n.byteLength_-=Uf(e),n.parts_.length>0&&(n.byteLength_-=1)}function gR(n){if(n.byteLength_>cw)throw new Error(n.errorPrefix_+"has a key path longer than "+cw+" bytes ("+n.byteLength_+").");if(n.parts_.length>uw)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+uw+") or object contains a cycle "+Ja(n))}function Ja(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv extends dR{static getInstance(){return new sv}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return ce(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju=1e3,M5=300*1e3,hw=30*1e3,O5=1.3,L5=3e4,V5="server_kill",dw=3;class Ws extends hR{constructor(e,t,s,a,l,c,f,m){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=a,this.onServerInfoUpdate_=l,this.authTokenProvider_=c,this.appCheckTokenProvider_=f,this.authOverride_=m,this.id=Ws.nextPersistentConnectionId_++,this.log_=eh("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ju,this.maxReconnectDelay_=M5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,m)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");sv.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Sf.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const a=++this.requestNumber_,l={r:a,a:e,b:t};this.log_(un(l)),ce(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[a]=s)}get(e){this.initConnection_();const t=new Vf,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const f=c.d;c.s==="ok"?t.resolve(f):t.reject(f)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,s,a){this.initConnection_();const l=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+l),this.listens.has(c)||this.listens.set(c,new Map),ce(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ce(!this.listens.get(c).has(l),"listen() called twice for same path/queryId.");const f={onComplete:a,hashFn:t,query:e,tag:s};this.listens.get(c).set(l,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),a=t._queryIdentifier;this.log_("Listen on "+s+" for "+a);const l={p:s},c="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(c,l,f=>{const m=f.d,g=f.s;Ws.warnOnListenWarnings_(m,t),(this.listens.get(s)&&this.listens.get(s).get(a))===e&&(this.log_("listen response",f),g!=="ok"&&this.removeListen_(s,a),e.onComplete&&e.onComplete(g,m))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&nr(e,"w")){const s=wl(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const a='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();ni(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||vN(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=hw)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=yN(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,a=>{const l=a.s,c=a.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+a),ce(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,a)&&this.connected_&&this.sendUnlisten_(s,a,e._queryObject,t)}sendUnlisten_(e,t,s,a){this.log_("Unlisten on "+e+" for "+t);const l={p:e},c="n";a&&(l.q=s,l.t=a),this.sendRequest(c,l)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,a){const l={p:t,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,c=>{a&&setTimeout(()=>{a(c.s,c.d)},Math.floor(0))})}put(e,t,s,a){this.putInternal("p",e,t,s,a)}merge(e,t,s,a){this.putInternal("m",e,t,s,a)}putInternal(e,t,s,a,l){this.initConnection_();const c={p:t,d:s};l!==void 0&&(c.h=l),this.outstandingPuts_.push({action:e,request:c,onComplete:a}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+un(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):C_("Unrecognized action received from server: "+un(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ce(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ju,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ju,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>L5&&(this.reconnectDelay_=Ju),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*O5)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+Ws.nextConnectionId_++,l=this.lastSessionId;let c=!1,f=null;const m=function(){f?f.close():(c=!0,s())},g=function(T){ce(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(T)};this.realtime_={close:m,sendRequest:g};const v=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[T,w]=await Promise.all([this.authTokenProvider_.getToken(v),this.appCheckTokenProvider_.getToken(v)]);c?Cn("getToken() completed but was canceled"):(Cn("getToken() completed. Creating connection."),this.authToken_=T&&T.accessToken,this.appCheckToken_=w&&w.token,f=new N5(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,R=>{ni(R+" ("+this.repoInfo_.toString()+")"),this.interrupt(V5)},l))}catch(T){this.log_("Failed to get token: "+T),c||(this.repoInfo_.nodeAdmin&&ni(T),m())}}}interrupt(e){Cn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Cn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Zg(this.interruptReasons_)&&(this.reconnectDelay_=Ju,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(l=>Jy(l)).join("$"):s="default";const a=this.removeListen_(e,s);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,t){const s=new _t(e).toString();let a;if(this.listens.has(s)){const l=this.listens.get(s);a=l.get(t),l.delete(t),l.size===0&&this.listens.delete(s)}else a=void 0;return a}onAuthRevoked_(e,t){Cn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=dw&&(this.reconnectDelay_=hw,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Cn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=dw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+FC.replace(/\./g,"-")]=1,G_()?e["framework.cordova"]=1:Zw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Sf.getInstance().currentlyOnline();return Zg(this.interruptReasons_)&&e}}Ws.nextPersistentConnectionId_=0;Ws.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new je(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new je(kl,e),a=new je(kl,t);return this.compare(s,a)!==0}minPost(){return je.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Od;class _R extends cp{static get __EMPTY_NODE(){return Od}static set __EMPTY_NODE(e){Od=e}compare(e,t){return Kl(e.name,t.name)}isDefinedOn(e){throw Ll("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return je.MIN}maxPost(){return new je(mo,Od)}makePost(e,t){return ce(typeof e=="string","KeyIndex indexValue must always be a string."),new je(e,Od)}toString(){return".key"}}const Tl=new _R;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e,t,s,a,l=null){this.isReverse_=a,this.resultGenerator_=l,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=t?s(e.key,t):1,a&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ln{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??ln.RED,this.left=a??Jn.EMPTY_NODE,this.right=l??Jn.EMPTY_NODE}copy(e,t,s,a,l){return new ln(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return l<0?a=a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a=a.copy(null,t,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return Jn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,a;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Jn.EMPTY_NODE;a=s.right.min_(),s=s.copy(a.key,a.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ln.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ln.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ln.RED=!0;ln.BLACK=!1;class U5{copy(e,t,s,a,l){return this}insert(e,t,s){return new ln(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Jn{constructor(e,t=Jn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Jn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ln.BLACK,null,null))}remove(e){return new Jn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ln.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,a=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return a?a.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(a=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ld(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ld(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ld(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ld(this.root_,null,this.comparator_,!0,e)}}Jn.EMPTY_NODE=new U5;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B5(n,e){return Kl(n.name,e.name)}function rv(n,e){return Kl(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let I_;function z5(n){I_=n}const yR=function(n){return typeof n=="number"?"number:"+WC(n):"string:"+n},vR=function(n){if(n.isLeafNode()){const e=n.val();ce(typeof e=="string"||typeof e=="number"||typeof e=="object"&&nr(e,".sv"),"Priority must be a string or number.")}else ce(n===I_||n.isEmpty(),"priority of unexpected type.");ce(n===I_||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fw;class an{static set __childrenNodeConstructor(e){fw=e}static get __childrenNodeConstructor(){return fw}constructor(e,t=an.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ce(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),vR(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new an(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:an.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ge(e)?this:ze(e)===".priority"?this.priorityNode_:an.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:an.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=ze(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(ce(s!==".priority"||ga(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,an.__childrenNodeConstructor.EMPTY_NODE.updateChild(yt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+yR(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=WC(this.value_):e+=this.value_,this.lazyHash_=GC(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===an.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof an.__childrenNodeConstructor?-1:(ce(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,a=an.VALUE_TYPE_ORDER.indexOf(t),l=an.VALUE_TYPE_ORDER.indexOf(s);return ce(a>=0,"Unknown leaf type: "+t),ce(l>=0,"Unknown leaf type: "+s),a===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}an.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ER,TR;function j5(n){ER=n}function q5(n){TR=n}class F5 extends cp{compare(e,t){const s=e.node.getPriority(),a=t.node.getPriority(),l=s.compareTo(a);return l===0?Kl(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return je.MIN}maxPost(){return new je(mo,new an("[PRIORITY-POST]",TR))}makePost(e,t){const s=ER(e);return new je(t,new an("[PRIORITY-POST]",s))}toString(){return".priority"}}const kt=new F5;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H5=Math.log(2);class G5{constructor(e){const t=l=>parseInt(Math.log(l)/H5,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const a=s(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Af=function(n,e,t,s){n.sort(e);const a=function(m,g){const v=g-m;let T,w;if(v===0)return null;if(v===1)return T=n[m],w=t?t(T):T,new ln(w,T.node,ln.BLACK,null,null);{const R=parseInt(v/2,10)+m,L=a(m,R),F=a(R+1,g);return T=n[R],w=t?t(T):T,new ln(w,T.node,ln.BLACK,L,F)}},l=function(m){let g=null,v=null,T=n.length;const w=function(L,F){const B=T-L,se=T;T-=L;const oe=a(B+1,se),le=n[B],_e=t?t(le):le;R(new ln(_e,le.node,F,null,oe))},R=function(L){g?(g.left=L,g=L):(v=L,g=L)};for(let L=0;L<m.count;++L){const F=m.nextBitIsOne(),B=Math.pow(2,m.count-(L+1));F?w(B,ln.BLACK):(w(B,ln.BLACK),w(B,ln.RED))}return v},c=new G5(n.length),f=l(c);return new Jn(s||e,f)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kg;const hl={};class Qs{static get Default(){return ce(hl&&kt,"ChildrenNode.ts has not been loaded"),Kg=Kg||new Qs({".priority":hl},{".priority":kt}),Kg}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=wl(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Jn?t:null}hasIndex(e){return nr(this.indexSet_,e.toString())}addIndex(e,t){ce(e!==Tl,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let a=!1;const l=t.getIterator(je.Wrap);let c=l.getNext();for(;c;)a=a||e.isDefinedOn(c.node),s.push(c),c=l.getNext();let f;a?f=Af(s,e.getCompare()):f=hl;const m=e.toString(),g=Object.assign({},this.indexSet_);g[m]=e;const v=Object.assign({},this.indexes_);return v[m]=f,new Qs(v,g)}addToIndexes(e,t){const s=Zd(this.indexes_,(a,l)=>{const c=wl(this.indexSet_,l);if(ce(c,"Missing index implementation for "+l),a===hl)if(c.isDefinedOn(e.node)){const f=[],m=t.getIterator(je.Wrap);let g=m.getNext();for(;g;)g.name!==e.name&&f.push(g),g=m.getNext();return f.push(e),Af(f,c.getCompare())}else return hl;else{const f=t.get(e.name);let m=a;return f&&(m=m.remove(new je(e.name,f))),m.insert(e,e.node)}});return new Qs(s,this.indexSet_)}removeFromIndexes(e,t){const s=Zd(this.indexes_,a=>{if(a===hl)return a;{const l=t.get(e.name);return l?a.remove(new je(e.name,l)):a}});return new Qs(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ec;class Ne{static get EMPTY_NODE(){return ec||(ec=new Ne(new Jn(rv),null,Qs.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&vR(this.priorityNode_),this.children_.isEmpty()&&ce(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ec}updatePriority(e){return this.children_.isEmpty()?this:new Ne(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?ec:t}}getChild(e){const t=ze(e);return t===null?this:this.getImmediateChild(t).getChild(yt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(ce(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new je(e,t);let a,l;t.isEmpty()?(a=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(a=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(s,this.children_));const c=a.isEmpty()?ec:this.priorityNode_;return new Ne(a,c,l)}}updateChild(e,t){const s=ze(e);if(s===null)return t;{ce(ze(e)!==".priority"||ga(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(s).updateChild(yt(e),t);return this.updateImmediateChild(s,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,a=0,l=!0;if(this.forEachChild(kt,(c,f)=>{t[c]=f.val(e),s++,l&&Ne.INTEGER_REGEXP_.test(c)?a=Math.max(a,Number(c)):l=!1}),!e&&l&&a<2*s){const c=[];for(const f in t)c[f]=t[f];return c}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+yR(this.getPriority().val())+":"),this.forEachChild(kt,(t,s)=>{const a=s.hash();a!==""&&(e+=":"+t+":"+a)}),this.lazyHash_=e===""?"":GC(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const a=this.resolveIndex_(s);if(a){const l=a.getPredecessorKey(new je(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new je(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new je(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(a=>t(a.name,a.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,je.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)<0;)a.getNext(),l=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,je.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)>0;)a.getNext(),l=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===th?-1:0}withIndex(e){if(e===Tl||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Ne(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Tl||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(kt),a=t.getIterator(kt);let l=s.getNext(),c=a.getNext();for(;l&&c;){if(l.name!==c.name||!l.node.equals(c.node))return!1;l=s.getNext(),c=a.getNext()}return l===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===Tl?null:this.indexMap_.get(e.toString())}}Ne.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class K5 extends Ne{constructor(){super(new Jn(rv),Ne.EMPTY_NODE,Qs.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ne.EMPTY_NODE}isEmpty(){return!1}}const th=new K5;Object.defineProperties(je,{MIN:{value:new je(kl,Ne.EMPTY_NODE)},MAX:{value:new je(mo,th)}});_R.__EMPTY_NODE=Ne.EMPTY_NODE;an.__childrenNodeConstructor=Ne;z5(th);q5(th);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q5=!0;function _n(n,e=null){if(n===null)return Ne.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),ce(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new an(t,_n(e))}if(!(n instanceof Array)&&Q5){const t=[];let s=!1;if(ii(n,(c,f)=>{if(c.substring(0,1)!=="."){const m=_n(f);m.isEmpty()||(s=s||!m.getPriority().isEmpty(),t.push(new je(c,m)))}}),t.length===0)return Ne.EMPTY_NODE;const l=Af(t,B5,c=>c.name,rv);if(s){const c=Af(t,kt.getCompare());return new Ne(l,_n(e),new Qs({".priority":c},{".priority":kt}))}else return new Ne(l,_n(e),Qs.Default)}else{let t=Ne.EMPTY_NODE;return ii(n,(s,a)=>{if(nr(n,s)&&s.substring(0,1)!=="."){const l=_n(a);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(s,l))}}),t.updatePriority(_n(e))}}j5(_n);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W5 extends cp{constructor(e){super(),this.indexPath_=e,ce(!Ge(e)&&ze(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),a=this.extractChild(t.node),l=s.compareTo(a);return l===0?Kl(e.name,t.name):l}makePost(e,t){const s=_n(e),a=Ne.EMPTY_NODE.updateChild(this.indexPath_,s);return new je(t,a)}maxPost(){const e=Ne.EMPTY_NODE.updateChild(this.indexPath_,th);return new je(mo,e)}toString(){return pR(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y5 extends cp{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Kl(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return je.MIN}maxPost(){return je.MAX}makePost(e,t){const s=_n(e);return new je(t,s)}toString(){return".value"}}const $5=new Y5;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bR(n){return{type:"value",snapshotNode:n}}function Ml(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function kc(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Mc(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function X5(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e){this.index_=e}updateChild(e,t,s,a,l,c){ce(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(t);return f.getChild(a).equals(s.getChild(a))&&f.isEmpty()===s.isEmpty()||(c!=null&&(s.isEmpty()?e.hasChild(t)?c.trackChildChange(kc(t,f)):ce(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?c.trackChildChange(Ml(t,s)):c.trackChildChange(Mc(t,s,f))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(kt,(a,l)=>{t.hasChild(a)||s.trackChildChange(kc(a,l))}),t.isLeafNode()||t.forEachChild(kt,(a,l)=>{if(e.hasChild(a)){const c=e.getImmediateChild(a);c.equals(l)||s.trackChildChange(Mc(a,l,c))}else s.trackChildChange(Ml(a,l))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Ne.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e){this.indexedFilter_=new av(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Oc.getStartPost_(e),this.endPost_=Oc.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,a,l,c){return this.matches(new je(t,s))||(s=Ne.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,a,l,c)}updateFullNode(e,t,s){t.isLeafNode()&&(t=Ne.EMPTY_NODE);let a=t.withIndex(this.index_);a=a.updatePriority(Ne.EMPTY_NODE);const l=this;return t.forEachChild(kt,(c,f)=>{l.matches(new je(c,f))||(a=a.updateImmediateChild(c,Ne.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,a,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z5{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Oc(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,a,l,c){return this.rangedFilter_.matches(new je(t,s))||(s=Ne.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,a,l,c):this.fullLimitUpdateChild_(e,t,s,l,c)}updateFullNode(e,t,s){let a;if(t.isLeafNode()||t.isEmpty())a=Ne.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){a=Ne.EMPTY_NODE.withIndex(this.index_);let l;this.reverse_?l=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):l=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let c=0;for(;l.hasNext()&&c<this.limit_;){const f=l.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))a=a.updateImmediateChild(f.name,f.node),c++;else break;else continue}}else{a=t.withIndex(this.index_),a=a.updatePriority(Ne.EMPTY_NODE);let l;this.reverse_?l=a.getReverseIterator(this.index_):l=a.getIterator(this.index_);let c=0;for(;l.hasNext();){const f=l.getNext();c<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?c++:a=a.updateImmediateChild(f.name,Ne.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,a,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,a,l){let c;if(this.reverse_){const T=this.index_.getCompare();c=(w,R)=>T(R,w)}else c=this.index_.getCompare();const f=e;ce(f.numChildren()===this.limit_,"");const m=new je(t,s),g=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),v=this.rangedFilter_.matches(m);if(f.hasChild(t)){const T=f.getImmediateChild(t);let w=a.getChildAfterChild(this.index_,g,this.reverse_);for(;w!=null&&(w.name===t||f.hasChild(w.name));)w=a.getChildAfterChild(this.index_,w,this.reverse_);const R=w==null?1:c(w,m);if(v&&!s.isEmpty()&&R>=0)return l?.trackChildChange(Mc(t,s,T)),f.updateImmediateChild(t,s);{l?.trackChildChange(kc(t,T));const F=f.updateImmediateChild(t,Ne.EMPTY_NODE);return w!=null&&this.rangedFilter_.matches(w)?(l?.trackChildChange(Ml(w.name,w.node)),F.updateImmediateChild(w.name,w.node)):F}}else return s.isEmpty()?e:v&&c(g,m)>=0?(l!=null&&(l.trackChildChange(kc(g.name,g.node)),l.trackChildChange(Ml(t,s))),f.updateImmediateChild(t,s).updateImmediateChild(g.name,Ne.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=kt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ce(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ce(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:kl}hasEnd(){return this.endSet_}getIndexEndValue(){return ce(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ce(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:mo}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ce(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===kt}copy(){const e=new ov;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function J5(n){return n.loadsAllData()?new av(n.getIndex()):n.hasLimit()?new Z5(n):new Oc(n)}function pw(n){const e={};if(n.isDefault())return e;let t;if(n.index_===kt?t="$priority":n.index_===$5?t="$value":n.index_===Tl?t="$key":(ce(n.index_ instanceof W5,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=un(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=un(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+un(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=un(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+un(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function mw(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==kt&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf extends hR{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(ce(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,a){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.log_=eh("p:rest:"),this.listens_={}}listen(e,t,s,a){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const c=Cf.getListenId_(e,s),f={};this.listens_[c]=f;const m=pw(e._queryParams);this.restRequest_(l+".json",m,(g,v)=>{let T=v;if(g===404&&(T=null,g=null),g===null&&this.onDataUpdate_(l,T,!1,s),wl(this.listens_,c)===f){let w;g?g===401?w="permission_denied":w="rest_error:"+g:w="ok",a(w,null)}})}unlisten(e,t){const s=Cf.getListenId_(e,t);delete this.listens_[s]}get(e){const t=pw(e._queryParams),s=e._path.toString(),a=new Vf;return this.restRequest_(s+".json",t,(l,c)=>{let f=c;l===404&&(f=null,l=null),l===null?(this.onDataUpdate_(s,f,!1,null),a.resolve(f)):a.reject(new Error(f))}),a.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,l])=>{a&&a.accessToken&&(t.auth=a.accessToken),l&&l.token&&(t.ac=l.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Vl(t);this.log_("Sending REST request for "+c);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+c+" received. status:",f.status,"response:",f.responseText);let m=null;if(f.status>=200&&f.status<300){try{m=Ec(f.responseText)}catch{ni("Failed to parse JSON response for "+c+": "+f.responseText)}s(null,m)}else f.status!==401&&f.status!==404&&ni("Got unsuccessful REST response for "+c+" Status: "+f.status),s(f.status);s=null}},f.open("GET",c,!0),f.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e6{constructor(){this.rootNode_=Ne.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(){return{value:null,children:new Map}}function wR(n,e,t){if(Ge(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=ze(e);n.children.has(s)||n.children.set(s,Rf());const a=n.children.get(s);e=yt(e),wR(a,e,t)}}function N_(n,e,t){n.value!==null?t(e,n.value):t6(n,(s,a)=>{const l=new _t(e.toString()+"/"+s);N_(a,l,t)})}function t6(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n6{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&ii(this.last_,(s,a)=>{t[s]=t[s]-a}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw=10*1e3,i6=30*1e3,s6=300*1e3;class r6{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new n6(e);const s=gw+(i6-gw)*Math.random();gc(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;ii(e,(a,l)=>{l>0&&nr(this.statsToReport_,a)&&(t[a]=l,s=!0)}),s&&this.server_.reportStats(t),gc(this.reportStats_.bind(this),Math.floor(Math.random()*2*s6))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zi;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(zi||(zi={}));function SR(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function lv(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function uv(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=zi.ACK_USER_WRITE,this.source=SR()}operationForChild(e){if(Ge(this.path)){if(this.affectedTree.value!=null)return ce(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new _t(e));return new If(st(),t,this.revert)}}else return ce(ze(this.path)===e,"operationForChild called for unrelated child."),new If(yt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,t){this.source=e,this.path=t,this.type=zi.LISTEN_COMPLETE}operationForChild(e){return Ge(this.path)?new Lc(this.source,st()):new Lc(this.source,yt(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=zi.OVERWRITE}operationForChild(e){return Ge(this.path)?new go(this.source,st(),this.snap.getImmediateChild(e)):new go(this.source,yt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=zi.MERGE}operationForChild(e){if(Ge(this.path)){const t=this.children.subtree(new _t(e));return t.isEmpty()?null:t.value?new go(this.source,st(),t.value):new Vc(this.source,st(),t)}else return ce(ze(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Vc(this.source,yt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ge(e))return this.isFullyInitialized()&&!this.filtered_;const t=ze(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a6{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function o6(n,e,t,s){const a=[],l=[];return e.forEach(c=>{c.type==="child_changed"&&n.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&l.push(X5(c.childName,c.snapshotNode))}),tc(n,a,"child_removed",e,s,t),tc(n,a,"child_added",e,s,t),tc(n,a,"child_moved",l,s,t),tc(n,a,"child_changed",e,s,t),tc(n,a,"value",e,s,t),a}function tc(n,e,t,s,a,l){const c=s.filter(f=>f.type===t);c.sort((f,m)=>u6(n,f,m)),c.forEach(f=>{const m=l6(n,f,l);a.forEach(g=>{g.respondsTo(f.type)&&e.push(g.createEvent(m,n.query_))})})}function l6(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function u6(n,e,t){if(e.childName==null||t.childName==null)throw Ll("Should only compare child_ events.");const s=new je(e.childName,e.snapshotNode),a=new je(t.childName,t.snapshotNode);return n.index_.compare(s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(n,e){return{eventCache:n,serverCache:e}}function _c(n,e,t,s){return hp(new _o(e,t,s),n.serverCache)}function AR(n,e,t,s){return hp(n.eventCache,new _o(e,t,s))}function P_(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function yo(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qg;const c6=()=>(Qg||(Qg=new Jn(Y3)),Qg);class wt{static fromObject(e){let t=new wt(null);return ii(e,(s,a)=>{t=t.set(new _t(s),a)}),t}constructor(e,t=c6()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:st(),value:this.value};if(Ge(e))return null;{const s=ze(e),a=this.children.get(s);if(a!==null){const l=a.findRootMostMatchingPathAndValue(yt(e),t);return l!=null?{path:Xt(new _t(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ge(e))return this;{const t=ze(e),s=this.children.get(t);return s!==null?s.subtree(yt(e)):new wt(null)}}set(e,t){if(Ge(e))return new wt(t,this.children);{const s=ze(e),l=(this.children.get(s)||new wt(null)).set(yt(e),t),c=this.children.insert(s,l);return new wt(this.value,c)}}remove(e){if(Ge(e))return this.children.isEmpty()?new wt(null):new wt(null,this.children);{const t=ze(e),s=this.children.get(t);if(s){const a=s.remove(yt(e));let l;return a.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,a),this.value===null&&l.isEmpty()?new wt(null):new wt(this.value,l)}else return this}}get(e){if(Ge(e))return this.value;{const t=ze(e),s=this.children.get(t);return s?s.get(yt(e)):null}}setTree(e,t){if(Ge(e))return t;{const s=ze(e),l=(this.children.get(s)||new wt(null)).setTree(yt(e),t);let c;return l.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,l),new wt(this.value,c)}}fold(e){return this.fold_(st(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((a,l)=>{s[a]=l.fold_(Xt(e,a),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,st(),t)}findOnPath_(e,t,s){const a=this.value?s(t,this.value):!1;if(a)return a;if(Ge(e))return null;{const l=ze(e),c=this.children.get(l);return c?c.findOnPath_(yt(e),Xt(t,l),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,st(),t)}foreachOnPath_(e,t,s){if(Ge(e))return this;{this.value&&s(t,this.value);const a=ze(e),l=this.children.get(a);return l?l.foreachOnPath_(yt(e),Xt(t,a),s):new wt(null)}}foreach(e){this.foreach_(st(),e)}foreach_(e,t){this.children.inorderTraversal((s,a)=>{a.foreach_(Xt(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e){this.writeTree_=e}static empty(){return new qi(new wt(null))}}function yc(n,e,t){if(Ge(e))return new qi(new wt(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const a=s.path;let l=s.value;const c=Zn(a,e);return l=l.updateChild(c,t),new qi(n.writeTree_.set(a,l))}else{const a=new wt(t),l=n.writeTree_.setTree(e,a);return new qi(l)}}}function _w(n,e,t){let s=n;return ii(t,(a,l)=>{s=yc(s,Xt(e,a),l)}),s}function yw(n,e){if(Ge(e))return qi.empty();{const t=n.writeTree_.setTree(e,new wt(null));return new qi(t)}}function x_(n,e){return So(n,e)!=null}function So(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Zn(t.path,e)):null}function vw(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(kt,(s,a)=>{e.push(new je(s,a))}):n.writeTree_.children.inorderTraversal((s,a)=>{a.value!=null&&e.push(new je(s,a.value))}),e}function la(n,e){if(Ge(e))return n;{const t=So(n,e);return t!=null?new qi(new wt(t)):new qi(n.writeTree_.subtree(e))}}function D_(n){return n.writeTree_.isEmpty()}function Ol(n,e){return CR(st(),n.writeTree_,e)}function CR(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((a,l)=>{a===".priority"?(ce(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):t=CR(Xt(n,a),l,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(Xt(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cv(n,e){return PR(e,n)}function h6(n,e,t,s,a){ce(s>n.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:a}),a&&(n.visibleWrites=yc(n.visibleWrites,e,t)),n.lastWriteId=s}function d6(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function f6(n,e){const t=n.allWrites.findIndex(f=>f.writeId===e);ce(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let a=s.visible,l=!1,c=n.allWrites.length-1;for(;a&&c>=0;){const f=n.allWrites[c];f.visible&&(c>=t&&p6(f,s.path)?a=!1:Bi(s.path,f.path)&&(l=!0)),c--}if(a){if(l)return m6(n),!0;if(s.snap)n.visibleWrites=yw(n.visibleWrites,s.path);else{const f=s.children;ii(f,m=>{n.visibleWrites=yw(n.visibleWrites,Xt(s.path,m))})}return!0}else return!1}function p6(n,e){if(n.snap)return Bi(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Bi(Xt(n.path,t),e))return!0;return!1}function m6(n){n.visibleWrites=RR(n.allWrites,g6,st()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function g6(n){return n.visible}function RR(n,e,t){let s=qi.empty();for(let a=0;a<n.length;++a){const l=n[a];if(e(l)){const c=l.path;let f;if(l.snap)Bi(t,c)?(f=Zn(t,c),s=yc(s,f,l.snap)):Bi(c,t)&&(f=Zn(c,t),s=yc(s,st(),l.snap.getChild(f)));else if(l.children){if(Bi(t,c))f=Zn(t,c),s=_w(s,f,l.children);else if(Bi(c,t))if(f=Zn(c,t),Ge(f))s=_w(s,st(),l.children);else{const m=wl(l.children,ze(f));if(m){const g=m.getChild(yt(f));s=yc(s,st(),g)}}}else throw Ll("WriteRecord should have .snap or .children")}}return s}function IR(n,e,t,s,a){if(!s&&!a){const l=So(n.visibleWrites,e);if(l!=null)return l;{const c=la(n.visibleWrites,e);if(D_(c))return t;if(t==null&&!x_(c,st()))return null;{const f=t||Ne.EMPTY_NODE;return Ol(c,f)}}}else{const l=la(n.visibleWrites,e);if(!a&&D_(l))return t;if(!a&&t==null&&!x_(l,st()))return null;{const c=function(g){return(g.visible||a)&&(!s||!~s.indexOf(g.writeId))&&(Bi(g.path,e)||Bi(e,g.path))},f=RR(n.allWrites,c,e),m=t||Ne.EMPTY_NODE;return Ol(f,m)}}}function _6(n,e,t){let s=Ne.EMPTY_NODE;const a=So(n.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(kt,(l,c)=>{s=s.updateImmediateChild(l,c)}),s;if(t){const l=la(n.visibleWrites,e);return t.forEachChild(kt,(c,f)=>{const m=Ol(la(l,new _t(c)),f);s=s.updateImmediateChild(c,m)}),vw(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const l=la(n.visibleWrites,e);return vw(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function y6(n,e,t,s,a){ce(s||a,"Either existingEventSnap or existingServerSnap must exist");const l=Xt(e,t);if(x_(n.visibleWrites,l))return null;{const c=la(n.visibleWrites,l);return D_(c)?a.getChild(t):Ol(c,a.getChild(t))}}function v6(n,e,t,s){const a=Xt(e,t),l=So(n.visibleWrites,a);if(l!=null)return l;if(s.isCompleteForChild(t)){const c=la(n.visibleWrites,a);return Ol(c,s.getNode().getImmediateChild(t))}else return null}function E6(n,e){return So(n.visibleWrites,e)}function T6(n,e,t,s,a,l,c){let f;const m=la(n.visibleWrites,e),g=So(m,st());if(g!=null)f=g;else if(t!=null)f=Ol(m,t);else return[];if(f=f.withIndex(c),!f.isEmpty()&&!f.isLeafNode()){const v=[],T=c.getCompare(),w=l?f.getReverseIteratorFrom(s,c):f.getIteratorFrom(s,c);let R=w.getNext();for(;R&&v.length<a;)T(R,s)!==0&&v.push(R),R=w.getNext();return v}else return[]}function b6(){return{visibleWrites:qi.empty(),allWrites:[],lastWriteId:-1}}function Nf(n,e,t,s){return IR(n.writeTree,n.treePath,e,t,s)}function hv(n,e){return _6(n.writeTree,n.treePath,e)}function Ew(n,e,t,s){return y6(n.writeTree,n.treePath,e,t,s)}function Pf(n,e){return E6(n.writeTree,Xt(n.treePath,e))}function w6(n,e,t,s,a,l){return T6(n.writeTree,n.treePath,e,t,s,a,l)}function dv(n,e,t){return v6(n.writeTree,n.treePath,e,t)}function NR(n,e){return PR(Xt(n.treePath,e),n.writeTree)}function PR(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S6{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;ce(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),ce(s!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(s);if(a){const l=a.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(s,Mc(s,e.snapshotNode,a.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(s,kc(s,a.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(s,Ml(s,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(s,Mc(s,e.snapshotNode,a.oldSnap));else throw Ll("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A6{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const xR=new A6;class fv{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new _o(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return dv(this.writes_,e,s)}}getChildAfterChild(e,t,s){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:yo(this.viewCache_),l=w6(this.writes_,a,t,1,s,e);return l.length===0?null:l[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C6(n){return{filter:n}}function R6(n,e){ce(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),ce(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function I6(n,e,t,s,a){const l=new S6;let c,f;if(t.type===zi.OVERWRITE){const g=t;g.source.fromUser?c=k_(n,e,g.path,g.snap,s,a,l):(ce(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered()&&!Ge(g.path),c=xf(n,e,g.path,g.snap,s,a,f,l))}else if(t.type===zi.MERGE){const g=t;g.source.fromUser?c=P6(n,e,g.path,g.children,s,a,l):(ce(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered(),c=M_(n,e,g.path,g.children,s,a,f,l))}else if(t.type===zi.ACK_USER_WRITE){const g=t;g.revert?c=k6(n,e,g.path,s,a,l):c=x6(n,e,g.path,g.affectedTree,s,a,l)}else if(t.type===zi.LISTEN_COMPLETE)c=D6(n,e,t.path,s,l);else throw Ll("Unknown operation type: "+t.type);const m=l.getChanges();return N6(e,c,m),{viewCache:c,changes:m}}function N6(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const a=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=P_(n);(t.length>0||!n.eventCache.isFullyInitialized()||a&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&t.push(bR(P_(e)))}}function DR(n,e,t,s,a,l){const c=e.eventCache;if(Pf(s,t)!=null)return e;{let f,m;if(Ge(t))if(ce(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=yo(e),v=g instanceof Ne?g:Ne.EMPTY_NODE,T=hv(s,v);f=n.filter.updateFullNode(e.eventCache.getNode(),T,l)}else{const g=Nf(s,yo(e));f=n.filter.updateFullNode(e.eventCache.getNode(),g,l)}else{const g=ze(t);if(g===".priority"){ce(ga(t)===1,"Can't have a priority with additional path components");const v=c.getNode();m=e.serverCache.getNode();const T=Ew(s,t,v,m);T!=null?f=n.filter.updatePriority(v,T):f=c.getNode()}else{const v=yt(t);let T;if(c.isCompleteForChild(g)){m=e.serverCache.getNode();const w=Ew(s,t,c.getNode(),m);w!=null?T=c.getNode().getImmediateChild(g).updateChild(v,w):T=c.getNode().getImmediateChild(g)}else T=dv(s,g,e.serverCache);T!=null?f=n.filter.updateChild(c.getNode(),g,T,v,a,l):f=c.getNode()}}return _c(e,f,c.isFullyInitialized()||Ge(t),n.filter.filtersNodes())}}function xf(n,e,t,s,a,l,c,f){const m=e.serverCache;let g;const v=c?n.filter:n.filter.getIndexedFilter();if(Ge(t))g=v.updateFullNode(m.getNode(),s,null);else if(v.filtersNodes()&&!m.isFiltered()){const R=m.getNode().updateChild(t,s);g=v.updateFullNode(m.getNode(),R,null)}else{const R=ze(t);if(!m.isCompleteForPath(t)&&ga(t)>1)return e;const L=yt(t),B=m.getNode().getImmediateChild(R).updateChild(L,s);R===".priority"?g=v.updatePriority(m.getNode(),B):g=v.updateChild(m.getNode(),R,B,L,xR,null)}const T=AR(e,g,m.isFullyInitialized()||Ge(t),v.filtersNodes()),w=new fv(a,T,l);return DR(n,T,t,a,w,f)}function k_(n,e,t,s,a,l,c){const f=e.eventCache;let m,g;const v=new fv(a,e,l);if(Ge(t))g=n.filter.updateFullNode(e.eventCache.getNode(),s,c),m=_c(e,g,!0,n.filter.filtersNodes());else{const T=ze(t);if(T===".priority")g=n.filter.updatePriority(e.eventCache.getNode(),s),m=_c(e,g,f.isFullyInitialized(),f.isFiltered());else{const w=yt(t),R=f.getNode().getImmediateChild(T);let L;if(Ge(w))L=s;else{const F=v.getCompleteChild(T);F!=null?fR(w)===".priority"&&F.getChild(mR(w)).isEmpty()?L=F:L=F.updateChild(w,s):L=Ne.EMPTY_NODE}if(R.equals(L))m=e;else{const F=n.filter.updateChild(f.getNode(),T,L,w,v,c);m=_c(e,F,f.isFullyInitialized(),n.filter.filtersNodes())}}}return m}function Tw(n,e){return n.eventCache.isCompleteForChild(e)}function P6(n,e,t,s,a,l,c){let f=e;return s.foreach((m,g)=>{const v=Xt(t,m);Tw(e,ze(v))&&(f=k_(n,f,v,g,a,l,c))}),s.foreach((m,g)=>{const v=Xt(t,m);Tw(e,ze(v))||(f=k_(n,f,v,g,a,l,c))}),f}function bw(n,e,t){return t.foreach((s,a)=>{e=e.updateChild(s,a)}),e}function M_(n,e,t,s,a,l,c,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let m=e,g;Ge(t)?g=s:g=new wt(null).setTree(t,s);const v=e.serverCache.getNode();return g.children.inorderTraversal((T,w)=>{if(v.hasChild(T)){const R=e.serverCache.getNode().getImmediateChild(T),L=bw(n,R,w);m=xf(n,m,new _t(T),L,a,l,c,f)}}),g.children.inorderTraversal((T,w)=>{const R=!e.serverCache.isCompleteForChild(T)&&w.value===null;if(!v.hasChild(T)&&!R){const L=e.serverCache.getNode().getImmediateChild(T),F=bw(n,L,w);m=xf(n,m,new _t(T),F,a,l,c,f)}}),m}function x6(n,e,t,s,a,l,c){if(Pf(a,t)!=null)return e;const f=e.serverCache.isFiltered(),m=e.serverCache;if(s.value!=null){if(Ge(t)&&m.isFullyInitialized()||m.isCompleteForPath(t))return xf(n,e,t,m.getNode().getChild(t),a,l,f,c);if(Ge(t)){let g=new wt(null);return m.getNode().forEachChild(Tl,(v,T)=>{g=g.set(new _t(v),T)}),M_(n,e,t,g,a,l,f,c)}else return e}else{let g=new wt(null);return s.foreach((v,T)=>{const w=Xt(t,v);m.isCompleteForPath(w)&&(g=g.set(v,m.getNode().getChild(w)))}),M_(n,e,t,g,a,l,f,c)}}function D6(n,e,t,s,a){const l=e.serverCache,c=AR(e,l.getNode(),l.isFullyInitialized()||Ge(t),l.isFiltered());return DR(n,c,t,s,xR,a)}function k6(n,e,t,s,a,l){let c;if(Pf(s,t)!=null)return e;{const f=new fv(s,e,a),m=e.eventCache.getNode();let g;if(Ge(t)||ze(t)===".priority"){let v;if(e.serverCache.isFullyInitialized())v=Nf(s,yo(e));else{const T=e.serverCache.getNode();ce(T instanceof Ne,"serverChildren would be complete if leaf node"),v=hv(s,T)}v=v,g=n.filter.updateFullNode(m,v,l)}else{const v=ze(t);let T=dv(s,v,e.serverCache);T==null&&e.serverCache.isCompleteForChild(v)&&(T=m.getImmediateChild(v)),T!=null?g=n.filter.updateChild(m,v,T,yt(t),f,l):e.eventCache.getNode().hasChild(v)?g=n.filter.updateChild(m,v,Ne.EMPTY_NODE,yt(t),f,l):g=m,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=Nf(s,yo(e)),c.isLeafNode()&&(g=n.filter.updateFullNode(g,c,l)))}return c=e.serverCache.isFullyInitialized()||Pf(s,st())!=null,_c(e,g,c,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M6{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,a=new av(s.getIndex()),l=J5(s);this.processor_=C6(l);const c=t.serverCache,f=t.eventCache,m=a.updateFullNode(Ne.EMPTY_NODE,c.getNode(),null),g=l.updateFullNode(Ne.EMPTY_NODE,f.getNode(),null),v=new _o(m,c.isFullyInitialized(),a.filtersNodes()),T=new _o(g,f.isFullyInitialized(),l.filtersNodes());this.viewCache_=hp(T,v),this.eventGenerator_=new a6(this.query_)}get query(){return this.query_}}function O6(n){return n.viewCache_.serverCache.getNode()}function L6(n,e){const t=yo(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Ge(e)&&!t.getImmediateChild(ze(e)).isEmpty())?t.getChild(e):null}function ww(n){return n.eventRegistrations_.length===0}function V6(n,e){n.eventRegistrations_.push(e)}function Sw(n,e,t){const s=[];if(t){ce(e==null,"A cancel should cancel all event registrations.");const a=n.query._path;n.eventRegistrations_.forEach(l=>{const c=l.createCancelEvent(t,a);c&&s.push(c)})}if(e){let a=[];for(let l=0;l<n.eventRegistrations_.length;++l){const c=n.eventRegistrations_[l];if(!c.matches(e))a.push(c);else if(e.hasAnyCallback()){a=a.concat(n.eventRegistrations_.slice(l+1));break}}n.eventRegistrations_=a}else n.eventRegistrations_=[];return s}function Aw(n,e,t,s){e.type===zi.MERGE&&e.source.queryId!==null&&(ce(yo(n.viewCache_),"We should always have a full cache before handling merges"),ce(P_(n.viewCache_),"Missing event cache, even though we have a server cache"));const a=n.viewCache_,l=I6(n.processor_,a,e,t,s);return R6(n.processor_,l.viewCache),ce(l.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=l.viewCache,kR(n,l.changes,l.viewCache.eventCache.getNode(),null)}function U6(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(kt,(l,c)=>{s.push(Ml(l,c))}),t.isFullyInitialized()&&s.push(bR(t.getNode())),kR(n,s,t.getNode(),e)}function kR(n,e,t,s){const a=s?[s]:n.eventRegistrations_;return o6(n.eventGenerator_,e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Df;class B6{constructor(){this.views=new Map}}function z6(n){ce(!Df,"__referenceConstructor has already been defined"),Df=n}function j6(){return ce(Df,"Reference.ts has not been loaded"),Df}function q6(n){return n.views.size===0}function pv(n,e,t,s){const a=e.source.queryId;if(a!==null){const l=n.views.get(a);return ce(l!=null,"SyncTree gave us an op for an invalid query."),Aw(l,e,t,s)}else{let l=[];for(const c of n.views.values())l=l.concat(Aw(c,e,t,s));return l}}function F6(n,e,t,s,a){const l=e._queryIdentifier,c=n.views.get(l);if(!c){let f=Nf(t,a?s:null),m=!1;f?m=!0:s instanceof Ne?(f=hv(t,s),m=!1):(f=Ne.EMPTY_NODE,m=!1);const g=hp(new _o(f,m,!1),new _o(s,a,!1));return new M6(e,g)}return c}function H6(n,e,t,s,a,l){const c=F6(n,e,s,a,l);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,c),V6(c,t),U6(c,t)}function G6(n,e,t,s){const a=e._queryIdentifier,l=[];let c=[];const f=_a(n);if(a==="default")for(const[m,g]of n.views.entries())c=c.concat(Sw(g,t,s)),ww(g)&&(n.views.delete(m),g.query._queryParams.loadsAllData()||l.push(g.query));else{const m=n.views.get(a);m&&(c=c.concat(Sw(m,t,s)),ww(m)&&(n.views.delete(a),m.query._queryParams.loadsAllData()||l.push(m.query)))}return f&&!_a(n)&&l.push(new(j6())(e._repo,e._path)),{removed:l,events:c}}function MR(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function bl(n,e){let t=null;for(const s of n.views.values())t=t||L6(s,e);return t}function OR(n,e){if(e._queryParams.loadsAllData())return dp(n);{const s=e._queryIdentifier;return n.views.get(s)}}function LR(n,e){return OR(n,e)!=null}function _a(n){return dp(n)!=null}function dp(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kf;function K6(n){ce(!kf,"__referenceConstructor has already been defined"),kf=n}function Q6(){return ce(kf,"Reference.ts has not been loaded"),kf}let W6=1;class Cw{constructor(e){this.listenProvider_=e,this.syncPointTree_=new wt(null),this.pendingWriteTree_=b6(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function VR(n,e,t,s,a){return h6(n.pendingWriteTree_,e,t,s,a),a?nh(n,new go(SR(),e,t)):[]}function so(n,e,t=!1){const s=d6(n.pendingWriteTree_,e);if(f6(n.pendingWriteTree_,e)){let l=new wt(null);return s.snap!=null?l=l.set(st(),!0):ii(s.children,c=>{l=l.set(new _t(c),!0)}),nh(n,new If(s.path,l,t))}else return[]}function fp(n,e,t){return nh(n,new go(lv(),e,t))}function Y6(n,e,t){const s=wt.fromObject(t);return nh(n,new Vc(lv(),e,s))}function $6(n,e){return nh(n,new Lc(lv(),e))}function X6(n,e,t){const s=gv(n,t);if(s){const a=_v(s),l=a.path,c=a.queryId,f=Zn(l,e),m=new Lc(uv(c),f);return yv(n,l,m)}else return[]}function O_(n,e,t,s,a=!1){const l=e._path,c=n.syncPointTree_.get(l);let f=[];if(c&&(e._queryIdentifier==="default"||LR(c,e))){const m=G6(c,e,t,s);q6(c)&&(n.syncPointTree_=n.syncPointTree_.remove(l));const g=m.removed;if(f=m.events,!a){const v=g.findIndex(w=>w._queryParams.loadsAllData())!==-1,T=n.syncPointTree_.findOnPath(l,(w,R)=>_a(R));if(v&&!T){const w=n.syncPointTree_.subtree(l);if(!w.isEmpty()){const R=eL(w);for(let L=0;L<R.length;++L){const F=R[L],B=F.query,se=zR(n,F);n.listenProvider_.startListening(vc(B),Mf(n,B),se.hashFn,se.onComplete)}}}!T&&g.length>0&&!s&&(v?n.listenProvider_.stopListening(vc(e),null):g.forEach(w=>{const R=n.queryToTagMap.get(pp(w));n.listenProvider_.stopListening(vc(w),R)}))}tL(n,g)}return f}function Z6(n,e,t,s){const a=gv(n,s);if(a!=null){const l=_v(a),c=l.path,f=l.queryId,m=Zn(c,e),g=new go(uv(f),m,t);return yv(n,c,g)}else return[]}function J6(n,e,t,s){const a=gv(n,s);if(a){const l=_v(a),c=l.path,f=l.queryId,m=Zn(c,e),g=wt.fromObject(t),v=new Vc(uv(f),m,g);return yv(n,c,v)}else return[]}function Rw(n,e,t,s=!1){const a=e._path;let l=null,c=!1;n.syncPointTree_.foreachOnPath(a,(w,R)=>{const L=Zn(w,a);l=l||bl(R,L),c=c||_a(R)});let f=n.syncPointTree_.get(a);f?(c=c||_a(f),l=l||bl(f,st())):(f=new B6,n.syncPointTree_=n.syncPointTree_.set(a,f));let m;l!=null?m=!0:(m=!1,l=Ne.EMPTY_NODE,n.syncPointTree_.subtree(a).foreachChild((R,L)=>{const F=bl(L,st());F&&(l=l.updateImmediateChild(R,F))}));const g=LR(f,e);if(!g&&!e._queryParams.loadsAllData()){const w=pp(e);ce(!n.queryToTagMap.has(w),"View does not exist, but we have a tag");const R=nL();n.queryToTagMap.set(w,R),n.tagToQueryMap.set(R,w)}const v=cv(n.pendingWriteTree_,a);let T=H6(f,e,t,v,l,m);if(!g&&!c&&!s){const w=OR(f,e);T=T.concat(iL(n,e,w))}return T}function mv(n,e,t){const a=n.pendingWriteTree_,l=n.syncPointTree_.findOnPath(e,(c,f)=>{const m=Zn(c,e),g=bl(f,m);if(g)return g});return IR(a,e,l,t,!0)}function nh(n,e){return UR(e,n.syncPointTree_,null,cv(n.pendingWriteTree_,st()))}function UR(n,e,t,s){if(Ge(n.path))return BR(n,e,t,s);{const a=e.get(st());t==null&&a!=null&&(t=bl(a,st()));let l=[];const c=ze(n.path),f=n.operationForChild(c),m=e.children.get(c);if(m&&f){const g=t?t.getImmediateChild(c):null,v=NR(s,c);l=l.concat(UR(f,m,g,v))}return a&&(l=l.concat(pv(a,n,s,t))),l}}function BR(n,e,t,s){const a=e.get(st());t==null&&a!=null&&(t=bl(a,st()));let l=[];return e.children.inorderTraversal((c,f)=>{const m=t?t.getImmediateChild(c):null,g=NR(s,c),v=n.operationForChild(c);v&&(l=l.concat(BR(v,f,m,g)))}),a&&(l=l.concat(pv(a,n,s,t))),l}function zR(n,e){const t=e.query,s=Mf(n,t);return{hashFn:()=>(O6(e)||Ne.EMPTY_NODE).hash(),onComplete:a=>{if(a==="ok")return s?X6(n,t._path,s):$6(n,t._path);{const l=Z3(a,t);return O_(n,t,null,l)}}}}function Mf(n,e){const t=pp(e);return n.queryToTagMap.get(t)}function pp(n){return n._path.toString()+"$"+n._queryIdentifier}function gv(n,e){return n.tagToQueryMap.get(e)}function _v(n){const e=n.indexOf("$");return ce(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new _t(n.substr(0,e))}}function yv(n,e,t){const s=n.syncPointTree_.get(e);ce(s,"Missing sync point for query tag that we're tracking");const a=cv(n.pendingWriteTree_,e);return pv(s,t,a,null)}function eL(n){return n.fold((e,t,s)=>{if(t&&_a(t))return[dp(t)];{let a=[];return t&&(a=MR(t)),ii(s,(l,c)=>{a=a.concat(c)}),a}})}function vc(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Q6())(n._repo,n._path):n}function tL(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const a=pp(s),l=n.queryToTagMap.get(a);n.queryToTagMap.delete(a),n.tagToQueryMap.delete(l)}}}function nL(){return W6++}function iL(n,e,t){const s=e._path,a=Mf(n,e),l=zR(n,t),c=n.listenProvider_.startListening(vc(e),a,l.hashFn,l.onComplete),f=n.syncPointTree_.subtree(s);if(a)ce(!_a(f.value),"If we're adding a query, it shouldn't be shadowed");else{const m=f.fold((g,v,T)=>{if(!Ge(g)&&v&&_a(v))return[dp(v).query];{let w=[];return v&&(w=w.concat(MR(v).map(R=>R.query))),ii(T,(R,L)=>{w=w.concat(L)}),w}});for(let g=0;g<m.length;++g){const v=m[g];n.listenProvider_.stopListening(vc(v),Mf(n,v))}}return c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new vv(t)}node(){return this.node_}}class Ev{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Xt(this.path_,e);return new Ev(this.syncTree_,t)}node(){return mv(this.syncTree_,this.path_)}}const sL=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Iw=function(n,e,t){if(!n||typeof n!="object")return n;if(ce(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return rL(n[".sv"],e,t);if(typeof n[".sv"]=="object")return aL(n[".sv"],e);ce(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},rL=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:ce(!1,"Unexpected server value: "+n)}},aL=function(n,e,t){n.hasOwnProperty("increment")||ce(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&ce(!1,"Unexpected increment value: "+s);const a=e.node();if(ce(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return s;const c=a.getValue();return typeof c!="number"?s:c+s},oL=function(n,e,t,s){return Tv(e,new Ev(t,n),s)},jR=function(n,e,t){return Tv(n,new vv(e),t)};function Tv(n,e,t){const s=n.getPriority().val(),a=Iw(s,e.getImmediateChild(".priority"),t);let l;if(n.isLeafNode()){const c=n,f=Iw(c.getValue(),e,t);return f!==c.getValue()||a!==c.getPriority().val()?new an(f,_n(a)):n}else{const c=n;return l=c,a!==c.getPriority().val()&&(l=l.updatePriority(new an(a))),c.forEachChild(kt,(f,m)=>{const g=Tv(m,e.getImmediateChild(f),t);g!==m&&(l=l.updateImmediateChild(f,g))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function wv(n,e){let t=e instanceof _t?e:new _t(e),s=n,a=ze(t);for(;a!==null;){const l=wl(s.node.children,a)||{children:{},childCount:0};s=new bv(a,s,l),t=yt(t),a=ze(t)}return s}function Wl(n){return n.node.value}function qR(n,e){n.node.value=e,L_(n)}function FR(n){return n.node.childCount>0}function lL(n){return Wl(n)===void 0&&!FR(n)}function mp(n,e){ii(n.node.children,(t,s)=>{e(new bv(t,n,s))})}function HR(n,e,t,s){t&&e(n),mp(n,a=>{HR(a,e,!0)})}function uL(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ih(n){return new _t(n.parent===null?n.name:ih(n.parent)+"/"+n.name)}function L_(n){n.parent!==null&&cL(n.parent,n.name,n)}function cL(n,e,t){const s=lL(t),a=nr(n.node.children,e);s&&a?(delete n.node.children[e],n.node.childCount--,L_(n)):!s&&!a&&(n.node.children[e]=t.node,n.node.childCount++,L_(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hL=/[\[\].#$\/\u0000-\u001F\u007F]/,dL=/[\[\].#$\u0000-\u001F\u007F]/,Wg=10*1024*1024,GR=function(n){return typeof n=="string"&&n.length!==0&&!hL.test(n)},KR=function(n){return typeof n=="string"&&n.length!==0&&!dL.test(n)},fL=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),KR(n)},QR=function(n,e,t,s){s&&e===void 0||Sv(K_(n,"value"),e,t)},Sv=function(n,e,t){const s=t instanceof _t?new x5(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Ja(s));if(typeof e=="function")throw new Error(n+"contains a function "+Ja(s)+" with contents = "+e.toString());if(KC(e))throw new Error(n+"contains "+e.toString()+" "+Ja(s));if(typeof e=="string"&&e.length>Wg/3&&Uf(e)>Wg)throw new Error(n+"contains a string greater than "+Wg+" utf8 bytes "+Ja(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,l=!1;if(ii(e,(c,f)=>{if(c===".value")a=!0;else if(c!==".priority"&&c!==".sv"&&(l=!0,!GR(c)))throw new Error(n+" contains an invalid key ("+c+") "+Ja(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);D5(s,c),Sv(n,f,s),k5(s)}),a&&l)throw new Error(n+' contains ".value" child '+Ja(s)+" in addition to actual children.")}},WR=function(n,e,t,s){if(!KR(t))throw new Error(K_(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},pL=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),WR(n,e,t)},Av=function(n,e){if(ze(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},mL=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!GR(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!fL(t))throw new Error(K_(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gL{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Cv(n,e){let t=null;for(let s=0;s<e.length;s++){const a=e[s],l=a.getPath();t!==null&&!iv(l,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(a)}t&&n.eventLists_.push(t)}function YR(n,e,t){Cv(n,t),$R(n,s=>iv(s,e))}function er(n,e,t){Cv(n,t),$R(n,s=>Bi(s,e)||Bi(e,s))}function $R(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const a=n.eventLists_[s];if(a){const l=a.path;e(l)?(_L(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function _L(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();mc&&Cn("event: "+t.toString()),Ql(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yL="repo_interrupt",vL=25;class EL{constructor(e,t,s,a){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new gL,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Rf(),this.transactionQueueTree_=new bv,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function TL(n,e,t){if(n.stats_=tv(n.repoInfo_),n.forceRestClient_||n5())n.server_=new Cf(n.repoInfo_,(s,a,l,c)=>{Nw(n,s,a,l,c)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Pw(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{un(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Ws(n.repoInfo_,e,(s,a,l,c)=>{Nw(n,s,a,l,c)},s=>{Pw(n,s)},s=>{bL(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=o5(n.repoInfo_,()=>new r6(n.stats_,n.server_)),n.infoData_=new e6,n.infoSyncTree_=new Cw({startListening:(s,a,l,c)=>{let f=[];const m=n.infoData_.getNode(s._path);return m.isEmpty()||(f=fp(n.infoSyncTree_,s._path,m),setTimeout(()=>{c("ok")},0)),f},stopListening:()=>{}}),Iv(n,"connected",!1),n.serverSyncTree_=new Cw({startListening:(s,a,l,c)=>(n.server_.listen(s,l,a,(f,m)=>{const g=c(f,m);er(n.eventQueue_,s._path,g)}),[]),stopListening:(s,a)=>{n.server_.unlisten(s,a)}})}function XR(n){const t=n.infoData_.getNode(new _t(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Rv(n){return sL({timestamp:XR(n)})}function Nw(n,e,t,s,a){n.dataUpdateCount++;const l=new _t(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let c=[];if(a)if(s){const m=Zd(t,g=>_n(g));c=J6(n.serverSyncTree_,l,m,a)}else{const m=_n(t);c=Z6(n.serverSyncTree_,l,m,a)}else if(s){const m=Zd(t,g=>_n(g));c=Y6(n.serverSyncTree_,l,m)}else{const m=_n(t);c=fp(n.serverSyncTree_,l,m)}let f=l;c.length>0&&(f=gp(n,l)),er(n.eventQueue_,f,c)}function Pw(n,e){Iv(n,"connected",e),e===!1&&SL(n)}function bL(n,e){ii(e,(t,s)=>{Iv(n,t,s)})}function Iv(n,e,t){const s=new _t("/.info/"+e),a=_n(t);n.infoData_.updateSnapshot(s,a);const l=fp(n.infoSyncTree_,s,a);er(n.eventQueue_,s,l)}function ZR(n){return n.nextWriteId_++}function wL(n,e,t,s,a){Nv(n,"set",{path:e.toString(),value:t,priority:s});const l=Rv(n),c=_n(t,s),f=mv(n.serverSyncTree_,e),m=jR(c,f,l),g=ZR(n),v=VR(n.serverSyncTree_,e,m,g,!0);Cv(n.eventQueue_,v),n.server_.put(e.toString(),c.val(!0),(w,R)=>{const L=w==="ok";L||ni("set at "+e+" failed: "+w);const F=so(n.serverSyncTree_,g,!L);er(n.eventQueue_,e,F),IL(n,a,w,R)});const T=iI(n,e);gp(n,T),er(n.eventQueue_,T,[])}function SL(n){Nv(n,"onDisconnectEvents");const e=Rv(n),t=Rf();N_(n.onDisconnect_,st(),(a,l)=>{const c=oL(a,l,n.serverSyncTree_,e);wR(t,a,c)});let s=[];N_(t,st(),(a,l)=>{s=s.concat(fp(n.serverSyncTree_,a,l));const c=iI(n,a);gp(n,c)}),n.onDisconnect_=Rf(),er(n.eventQueue_,st(),s)}function AL(n,e,t){let s;ze(e._path)===".info"?s=Rw(n.infoSyncTree_,e,t):s=Rw(n.serverSyncTree_,e,t),YR(n.eventQueue_,e._path,s)}function CL(n,e,t){let s;ze(e._path)===".info"?s=O_(n.infoSyncTree_,e,t):s=O_(n.serverSyncTree_,e,t),YR(n.eventQueue_,e._path,s)}function RL(n){n.persistentConnection_&&n.persistentConnection_.interrupt(yL)}function Nv(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Cn(t,...e)}function IL(n,e,t,s){e&&Ql(()=>{if(t==="ok")e(null);else{const a=(t||"error").toUpperCase();let l=a;s&&(l+=": "+s);const c=new Error(l);c.code=a,e(c)}})}function JR(n,e,t){return mv(n.serverSyncTree_,e,t)||Ne.EMPTY_NODE}function Pv(n,e=n.transactionQueueTree_){if(e||_p(n,e),Wl(e)){const t=tI(n,e);ce(t.length>0,"Sending zero length transaction queue"),t.every(a=>a.status===0)&&NL(n,ih(e),t)}else FR(e)&&mp(e,t=>{Pv(n,t)})}function NL(n,e,t){const s=t.map(g=>g.currentWriteId),a=JR(n,e,s);let l=a;const c=a.hash();for(let g=0;g<t.length;g++){const v=t[g];ce(v.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),v.status=1,v.retryCount++;const T=Zn(e,v.path);l=l.updateChild(T,v.currentOutputSnapshotRaw)}const f=l.val(!0),m=e;n.server_.put(m.toString(),f,g=>{Nv(n,"transaction put response",{path:m.toString(),status:g});let v=[];if(g==="ok"){const T=[];for(let w=0;w<t.length;w++)t[w].status=2,v=v.concat(so(n.serverSyncTree_,t[w].currentWriteId)),t[w].onComplete&&T.push(()=>t[w].onComplete(null,!0,t[w].currentOutputSnapshotResolved)),t[w].unwatcher();_p(n,wv(n.transactionQueueTree_,e)),Pv(n,n.transactionQueueTree_),er(n.eventQueue_,e,v);for(let w=0;w<T.length;w++)Ql(T[w])}else{if(g==="datastale")for(let T=0;T<t.length;T++)t[T].status===3?t[T].status=4:t[T].status=0;else{ni("transaction at "+m.toString()+" failed: "+g);for(let T=0;T<t.length;T++)t[T].status=4,t[T].abortReason=g}gp(n,e)}},c)}function gp(n,e){const t=eI(n,e),s=ih(t),a=tI(n,t);return PL(n,a,s),s}function PL(n,e,t){if(e.length===0)return;const s=[];let a=[];const c=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const m=e[f],g=Zn(t,m.path);let v=!1,T;if(ce(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),m.status===4)v=!0,T=m.abortReason,a=a.concat(so(n.serverSyncTree_,m.currentWriteId,!0));else if(m.status===0)if(m.retryCount>=vL)v=!0,T="maxretry",a=a.concat(so(n.serverSyncTree_,m.currentWriteId,!0));else{const w=JR(n,m.path,c);m.currentInputSnapshot=w;const R=e[f].update(w.val());if(R!==void 0){Sv("transaction failed: Data returned ",R,m.path);let L=_n(R);typeof R=="object"&&R!=null&&nr(R,".priority")||(L=L.updatePriority(w.getPriority()));const B=m.currentWriteId,se=Rv(n),oe=jR(L,w,se);m.currentOutputSnapshotRaw=L,m.currentOutputSnapshotResolved=oe,m.currentWriteId=ZR(n),c.splice(c.indexOf(B),1),a=a.concat(VR(n.serverSyncTree_,m.path,oe,m.currentWriteId,m.applyLocally)),a=a.concat(so(n.serverSyncTree_,B,!0))}else v=!0,T="nodata",a=a.concat(so(n.serverSyncTree_,m.currentWriteId,!0))}er(n.eventQueue_,t,a),a=[],v&&(e[f].status=2,(function(w){setTimeout(w,Math.floor(0))})(e[f].unwatcher),e[f].onComplete&&(T==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(T),!1,null))))}_p(n,n.transactionQueueTree_);for(let f=0;f<s.length;f++)Ql(s[f]);Pv(n,n.transactionQueueTree_)}function eI(n,e){let t,s=n.transactionQueueTree_;for(t=ze(e);t!==null&&Wl(s)===void 0;)s=wv(s,t),e=yt(e),t=ze(e);return s}function tI(n,e){const t=[];return nI(n,e,t),t.sort((s,a)=>s.order-a.order),t}function nI(n,e,t){const s=Wl(e);if(s)for(let a=0;a<s.length;a++)t.push(s[a]);mp(e,a=>{nI(n,a,t)})}function _p(n,e){const t=Wl(e);if(t){let s=0;for(let a=0;a<t.length;a++)t[a].status!==2&&(t[s]=t[a],s++);t.length=s,qR(e,t.length>0?t:void 0)}mp(e,s=>{_p(n,s)})}function iI(n,e){const t=ih(eI(n,e)),s=wv(n.transactionQueueTree_,e);return uL(s,a=>{Yg(n,a)}),Yg(n,s),HR(s,a=>{Yg(n,a)}),t}function Yg(n,e){const t=Wl(e);if(t){const s=[];let a=[],l=-1;for(let c=0;c<t.length;c++)t[c].status===3||(t[c].status===1?(ce(l===c-1,"All SENT items should be at beginning of queue."),l=c,t[c].status=3,t[c].abortReason="set"):(ce(t[c].status===0,"Unexpected transaction status in abort"),t[c].unwatcher(),a=a.concat(so(n.serverSyncTree_,t[c].currentWriteId,!0)),t[c].onComplete&&s.push(t[c].onComplete.bind(null,new Error("set"),!1,null))));l===-1?qR(e,void 0):t.length=l+1,er(n.eventQueue_,ih(e),a);for(let c=0;c<s.length;c++)Ql(s[c])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xL(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let a=t[s];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function DL(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ni(`Invalid query segment '${t}' in query '${n}'`)}return e}const xw=function(n,e){const t=kL(n),s=t.namespace;t.domain==="firebase.com"&&Js(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Js("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Q3();const a=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new sR(t.host,t.secure,s,a,e,"",s!==t.subdomain),path:new _t(t.pathString)}},kL=function(n){let e="",t="",s="",a="",l="",c=!0,f="https",m=443;if(typeof n=="string"){let g=n.indexOf("//");g>=0&&(f=n.substring(0,g-1),n=n.substring(g+2));let v=n.indexOf("/");v===-1&&(v=n.length);let T=n.indexOf("?");T===-1&&(T=n.length),e=n.substring(0,Math.min(v,T)),v<T&&(a=xL(n.substring(v,T)));const w=DL(n.substring(Math.min(n.length,T)));g=e.indexOf(":"),g>=0?(c=f==="https"||f==="wss",m=parseInt(e.substring(g+1),10)):g=e.length;const R=e.slice(0,g);if(R.toLowerCase()==="localhost")t="localhost";else if(R.split(".").length<=2)t=R;else{const L=e.indexOf(".");s=e.substring(0,L).toLowerCase(),t=e.substring(L+1),l=s}"ns"in w&&(l=w.ns)}return{host:e,port:m,domain:t,subdomain:s,secure:c,scheme:f,pathString:a,namespace:l}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",ML=(function(){let n=0;const e=[];return function(t){const s=t===n;n=t;let a;const l=new Array(8);for(a=7;a>=0;a--)l[a]=Dw.charAt(t%64),t=Math.floor(t/64);ce(t===0,"Cannot push at time == 0");let c=l.join("");if(s){for(a=11;a>=0&&e[a]===63;a--)e[a]=0;e[a]++}else for(a=0;a<12;a++)e[a]=Math.floor(Math.random()*64);for(a=0;a<12;a++)c+=Dw.charAt(e[a]);return ce(c.length===20,"nextPushId: Length should be 20."),c}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OL{constructor(e,t,s,a){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=a}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+un(this.snapshot.exportVal())}}class LL{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VL{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return ce(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{constructor(e,t,s,a){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=a}get key(){return Ge(this._path)?null:fR(this._path)}get ref(){return new ba(this._repo,this._path)}get _queryIdentifier(){const e=mw(this._queryParams),t=Jy(e);return t==="{}"?"default":t}get _queryObject(){return mw(this._queryParams)}isEqual(e){if(e=at(e),!(e instanceof xv))return!1;const t=this._repo===e._repo,s=iv(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return t&&s&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+P5(this._path)}}class ba extends xv{constructor(e,t){super(e,t,new ov,!1)}get parent(){const e=mR(this._path);return e===null?null:new ba(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Of{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new _t(e),s=Uc(this.ref,e);return new Of(this._node.getChild(t),s,kt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,a)=>e(new Of(a,Uc(this.ref,s),kt)))}hasChild(e){const t=new _t(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Vd(n,e){return n=at(n),n._checkNotDeleted("ref"),e!==void 0?Uc(n._root,e):n._root}function Uc(n,e){return n=at(n),ze(n._path)===null?pL("child","path",e):WR("child","path",e),new ba(n._repo,Xt(n._path,e))}function kw(n,e){n=at(n),Av("push",n._path),QR("push",e,n._path,!0);const t=XR(n._repo),s=ML(t),a=Uc(n,s),l=Uc(n,s);let c;return c=Promise.resolve(l),a.then=c.then.bind(c),a.catch=c.then.bind(c,void 0),a}function UL(n){return Av("remove",n._path),V_(n,null)}function V_(n,e){n=at(n),Av("set",n._path),QR("set",e,n._path,!1);const t=new Vf;return wL(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class Dv{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new OL("value",this,new Of(e.snapshotNode,new ba(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new LL(this,e,t):null}matches(e){return e instanceof Dv?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function BL(n,e,t,s,a){const l=new VL(t,void 0),c=new Dv(l);return AL(n._repo,n,c),()=>CL(n._repo,n,c)}function zL(n,e,t,s){return BL(n,"value",e)}z6(ba);K6(ba);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jL="FIREBASE_DATABASE_EMULATOR_HOST",U_={};let qL=!1;function FL(n,e,t,s){const a=e.lastIndexOf(":"),l=e.substring(0,a),c=ya(l);n.repoInfo_=new sR(e,c,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function HL(n,e,t,s,a){let l=s||n.options.databaseURL;l===void 0&&(n.options.projectId||Js("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Cn("Using default host for project ",n.options.projectId),l=`${n.options.projectId}-default-rtdb.firebaseio.com`);let c=xw(l,a),f=c.repoInfo,m;typeof process<"u"&&Xb&&(m=Xb[jL]),m?(l=`http://${m}?ns=${f.namespace}`,c=xw(l,a),f=c.repoInfo):c.repoInfo.secure;const g=new s5(n.name,n.options,e);mL("Invalid Firebase Database URL",c),Ge(c.path)||Js("Database URL must point to the root of a Firebase Database (not including a child path).");const v=KL(f,n,g,new i5(n,t));return new QL(v,n)}function GL(n,e){const t=U_[e];(!t||t[n.key]!==n)&&Js(`Database ${e}(${n.repoInfo_}) has already been deleted.`),RL(n),delete t[n.key]}function KL(n,e,t,s){let a=U_[e.name];a||(a={},U_[e.name]=a);let l=a[n.toURLString()];return l&&Js("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new EL(n,qL,t,s),a[n.toURLString()]=l,l}class QL{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(TL(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ba(this._repo,st())),this._rootInternal}_delete(){return this._rootInternal!==null&&(GL(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Js("Cannot call "+e+" on a deleted database.")}}function WL(n=zc(),e){const t=va(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Qw("database");s&&YL(t,...s)}return t}function YL(n,e,t,s={}){n=at(n),n._checkNotDeleted("useEmulator");const a=`${e}:${t}`,l=n._repoInternal;if(n._instanceStarted){if(a===n._repoInternal.repoInfo_.host&&Fi(s,l.repoInfo_.emulatorOptions))return;Js("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let c;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&Js('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),c=new Yd(Yd.OWNER);else if(s.mockUserToken){const f=typeof s.mockUserToken=="string"?s.mockUserToken:$w(s.mockUserToken,n.app.options.projectId);c=new Yd(f)}ya(e)&&(F_(e),H_("Database",!0)),FL(l,a,s,c)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $L(n){j3(Eo),Hi(new Ii("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return HL(s,a,l,t)},"PUBLIC").setMultipleInstances(!0)),ei(Zb,Jb,n),ei(Zb,Jb,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XL={".sv":"timestamp"};function ZL(){return XL}Ws.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Ws.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};$L();const JL={apiKey:"AIzaSyAuRCFW0cV8h-QRwDnr98cGidckrtj6Be8",authDomain:"chaturanga-by-ayansh-pathak.firebaseapp.com",projectId:"chaturanga-by-ayansh-pathak",storageBucket:"chaturanga-by-ayansh-pathak.firebasestorage.app",messagingSenderId:"1057979643450",appId:"1:1057979643450:web:d25d19d69186e241e0e703",measurementId:"G-VXE6Z8S5PS",databaseURL:"https://chaturanga-by-ayansh-pathak-default-rtdb.firebaseio.com"},yp=CP().length===0?rS(JL):zc(),Ce=Uk(yp),Vn=E4(yp),Ud=WL(yp);typeof window<"u"&&V3(yp);const Yn={log:(n,...e)=>{},warn:(n,...e)=>{},error:(n,...e)=>{console.error(`[Arena Error] ${n}`,...e)}},$r={set:(n,e,t)=>{const s={value:e,expiry:t?Date.now()+t:null};localStorage.setItem(n,JSON.stringify(s))},get:n=>{const e=localStorage.getItem(n);if(!e)return null;try{const t=JSON.parse(e);return t.expiry&&Date.now()>t.expiry?(localStorage.removeItem(n),null):t.value}catch(t){return console.error("Storage parse error:",t),null}},remove:n=>{localStorage.removeItem(n)},clear:()=>{Object.keys(localStorage).forEach(n=>{n.startsWith("chaturanga_")&&localStorage.removeItem(n)})}},sI=ge.createContext(void 0),eV=({children:n})=>{const[e,t]=ge.useState(()=>$r.get("chaturanga_active_user")),[s,a]=ge.useState(e===null),[l,c]=ge.useState(()=>$r.get("chaturanga_game_history")||[]),[f,m]=ge.useState([]),[g,v]=ge.useState([]),[T,w]=ge.useState([]);ge.useEffect(()=>{const X=setTimeout(()=>{s&&(Yn.warn("Auth state sync timed out, forcing loading finish."),a(!1))},6e3),ae=lO(Vn,async P=>{try{if(P){const b=$r.get("chaturanga_active_user");b&&b.id===P.uid&&a(!1);const M=await xl(nt(Ce,"users",P.uid));if(M.exists()){const H=M.data();t(H),$r.set("chaturanga_active_user",H,1440*60*1e3)}else Yn.warn("Profile missing in Firestore for UID:",P.uid),t(null),$r.remove("chaturanga_active_user")}else e?.isGuest||(t(null),$r.remove("chaturanga_active_user"))}catch(b){Yn.error("Auth sync failed:",b)}finally{a(!1),clearTimeout(X)}},P=>{Yn.error("Auth state listener error:",P),a(!1),clearTimeout(X)});return()=>{ae(),clearTimeout(X)}},[]),ge.useEffect(()=>{l.length>0&&$r.set("chaturanga_game_history",l,3600*1e3)},[l]),ge.useEffect(()=>{e&&$r.set("chaturanga_active_user",e,10080*60*1e3)},[e]),ge.useEffect(()=>{if(!e||e.isGuest){w([]);return}let X;if(e.storagePreference==="rtdb"){const ae=Vd(Ud,`users/${e.id}/gemini_history`);X=zL(ae,P=>{const b=P.val();if(b){const M=Object.keys(b).map(H=>({id:H,...b[H]}));M.sort((H,z)=>(H.timestamp||0)-(z.timestamp||0)),w(M)}else w([])})}else{const ae=ro(gn(Ce,"users",e.id,"gemini_history"),df("timestamp","asc"));X=Nc(ae,P=>{const b=P.docs.map(M=>({id:M.id,...M.data()}));w(b)})}return()=>X?.()},[e]);const R=async(X,ae)=>{if(!X||!ae)return{success:!1,message:"Please provide valid credentials."};let P=X.trim();if(!P.includes("@"))try{const b=gn(Ce,"users"),M=ro(b,vb("username","==",P)),H=await Og(M);H.empty?P=`${P}@chaturanga.app`:P=H.docs[0].data().email}catch(b){Yn.warn("Failed to find user email by username, falling back to default mapping:",b),P=`${P}@chaturanga.app`}try{return await sO(Vn,P,ae),{success:!0,message:"Welcome back to Chaturanga!"}}catch(b){return Yn.error("Login error:",b),{success:!1,message:b instanceof Error?b.message:"Login failed."}}},L=async(X,ae,P,b)=>{if(!X||!ae||!P)return{success:!1,message:"All fields are required."};if(P.length<4)return{success:!1,message:"Password must be at least 4 characters."};try{const M=await iO(Vn,ae,P),H={id:M.user.uid,username:X,email:ae,avatar:b||"/Chaturanga Logo.png",title:"Novice of Chaturanga",bio:"Practicing tactical maneuvers and king defenses.",joinedDate:new Date().toLocaleDateString("en-US",{month:"long",year:"numeric"}),stats:{rapid:1e3,blitz:1e3,bullet:1e3,puzzle:1e3,gamesPlayed:0,wins:0,losses:0,draws:0,currentStreak:0,bestStreak:0,puzzlesSolved:0,puzzleStreak:0,bestPuzzleStreak:0},ratingHistory:[{date:"Today",rapid:1e3,blitz:1e3,bullet:1e3,puzzle:1e3}],tournamentMedals:[],ratingMedals:[],clubsJoined:[],teamsJoined:[],storagePreference:"firestore"};await ff(nt(Ce,"users",M.user.uid),H);try{await Db(M.user)}catch(z){Yn.warn("Email verification send failed:",z)}return{success:!0,message:"Account created! Verification email sent."}}catch(M){return Yn.error("Signup error:",M),{success:!1,message:M instanceof Error?M.message:"Signup failed."}}},F=async()=>{await uO(Vn),t(null),localStorage.removeItem("chaturanga_active_user")},B=async(X,ae)=>{if(!e||!Vn.currentUser)return{success:!1,message:"Not authenticated."};if(!X||!X.includes("@"))return{success:!1,message:"Please enter a valid new email address."};try{await kb(Vn.currentUser,X);const P=e.email,b={...e,email:X,previousEmail:P};return await Ut(nt(Ce,"users",Vn.currentUser.uid),{email:X,previousEmail:P}),t(b),{success:!0,message:`Email successfully updated from ${P} to ${X}! (Reversible at any time)`}}catch(P){return{success:!1,message:P instanceof Error?P.message:"Unknown error"}}},se=async X=>{if(!e||!e.previousEmail||!Vn.currentUser)return{success:!1,message:"No previous email address found to revert to."};try{const ae=e.previousEmail;await kb(Vn.currentUser,ae);const P=e.email,b={...e,email:ae,previousEmail:P};return await Ut(nt(Ce,"users",Vn.currentUser.uid),{email:ae,previousEmail:P}),t(b),{success:!0,message:`Email successfully reverted back to ${ae}!`}}catch(ae){return{success:!1,message:ae instanceof Error?ae.message:"Unknown error"}}},oe=(X,ae,P,b)=>{if(b<=P)return X.ratingMedals;const M=[...X.ratingMedals];let H=!1;for(let z=1e3;z<=b;z+=100)if(P<z&&b>=z){const ee=`rm_gold_${ae}_${z}`;M.some(de=>de.id===ee)||(M.push({id:ee,ratingAchieved:z,category:ae,tier:"gold",message:`Congratulations for achieving ${z} rating!`,awardedAt:new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}),H=!0)}for(let z=1075;z<=b;z+=75)if(P<z&&b>=z&&z%100!==0){const ee=`rm_silver_${ae}_${z}`;M.some(de=>de.id===ee)||(M.push({id:ee,ratingAchieved:z,category:ae,tier:"silver",message:`Congratulations for achieving ${z} rating!`,awardedAt:new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}),H=!0)}for(let z=1050;z<=b;z+=50)if(P<z&&b>=z&&z%100!==0&&z%75!==0){const ee=`rm_bronze_${ae}_${z}`;M.some(de=>de.id===ee)||(M.push({id:ee,ratingAchieved:z,category:ae,tier:"bronze",message:`Congratulations for achieving ${z} rating!`,awardedAt:new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}),H=!0)}if(H)try{Ag({particleCount:80,spread:70,origin:{y:.6}})}catch{}return M},le=async(X,ae)=>{if(!e)return;const P=e.stats[X],b=Math.max(400,P+ae),M=oe(e,X,P,b),H={...e,stats:{...e.stats,[X]:b},ratingMedals:M};t(H),await Ut(nt(Ce,"users",e.id),{stats:H.stats,ratingMedals:H.ratingMedals})},_e=async X=>{if(!e)return;const ae={...X,id:`tm_${Date.now()}`,awardedTo:e.username,awardedAt:new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})},P={...e,tournamentMedals:[ae,...e.tournamentMedals]};t(P),await Ut(nt(Ce,"users",e.id),{tournamentMedals:P.tournamentMedals});try{Ag({particleCount:120,spread:90,origin:{y:.5}})}catch{}},Le=async X=>{if(!e)return;const ae={...X,players:[X.white.id,X.black.id]};if(e.storagePreference==="rtdb"){const de=Vd(Ud,"games"),he=kw(de);await V_(he,ae)}else await na(gn(Ce,"games"),ae);const P=X.result==="1-0"&&X.white.id===e.id||X.result==="0-1"&&X.black.id===e.id,b=X.result==="1-0"&&X.black.id===e.id||X.result==="0-1"&&X.white.id===e.id,M=X.result==="1/2-1/2",H=P?e.stats.currentStreak+1:b?0:e.stats.currentStreak,z=Math.max(e.stats.bestStreak,H),ee={...e.stats,gamesPlayed:e.stats.gamesPlayed+1,wins:e.stats.wins+(P?1:0),losses:e.stats.losses+(b?1:0),draws:e.stats.draws+(M?1:0),currentStreak:H,bestStreak:z};await D({stats:ee})},Ee=async X=>{if(!e)return;const ae=new Date().toLocaleDateString();if(e.stats.lastPuzzleDate===ae)return;const P=e.stats.puzzleStreak+1,b=Math.max(e.stats.bestPuzzleStreak,P),M={...e,stats:{...e.stats,puzzlesSolved:e.stats.puzzlesSolved+1,puzzleStreak:P,bestPuzzleStreak:b,lastPuzzleDate:ae,lastPuzzleId:X}};t(M),await Ut(nt(Ce,"users",e.id),{stats:M.stats});try{Ag({particleCount:150,spread:90,origin:{y:.5}})}catch{}},D=async X=>{if(!e)return{success:!1,message:"Not authenticated."};const ae={...e,...X};return t(ae),await Ut(nt(Ce,"users",e.id),X),{success:!0,message:"Profile updated successfully!"}},C=async()=>{e&&await D({isAnnouncer:!0})},N=async(X,ae)=>{if(!e)return{success:!1,message:"Not logged in"};if(!ae.trim()||!X.trim())return{success:!1,message:"Recipient and text are required"};const P=gn(Ce,"users"),b=ro(P,vb("username","==",X)),M=await Og(b);if(M.empty)return{success:!1,message:`User "${X}" not found.`};const H=M.docs[0].id,z={senderId:e.id,senderName:e.username,senderAvatar:e.avatar,senderFlag:e.countryFlag||"🇮🇳",recipientId:H,recipientName:X,participants:[e.id,H].sort(),content:ae.trim(),timestamp:Vg(),read:!1};return await na(gn(Ce,"messages"),z),{success:!0,message:"Message sent!"}},O=async(X,ae=!1)=>{e&&await na(gn(Ce,"global_chat"),{sender:ae?"ANNOUNCEMENT":e.username,text:X,timestamp:Vg()})},U=async X=>{if(e)if(e.storagePreference==="rtdb"){const ae=Vd(Ud,`users/${e.id}/gemini_history`),P=kw(ae);await V_(P,{...X,timestamp:ZL()})}else await na(gn(Ce,"users",e.id,"gemini_history"),{...X,timestamp:Vg()})},j=async()=>{if(e)if(e.storagePreference==="rtdb"){const X=Vd(Ud,`users/${e.id}/gemini_history`);await UL(X)}else(await Og(gn(Ce,"users",e.id,"gemini_history"))).forEach(async ae=>{await BA(nt(Ce,"users",e.id,"gemini_history",ae.id))})},x=async X=>{e&&await D({storagePreference:X})},ht=async()=>{const X=new Hs;try{const P=(await NO(Vn,X)).user,b=nt(Ce,"users",P.uid),M=await xl(b);if(M.exists())t(M.data());else{const H={id:P.uid,username:P.displayName||"Grandmaster",email:P.email||"",avatar:P.photoURL||"/Chaturanga Logo.png",title:"Novice of Chaturanga",bio:"Practicing tactical maneuvers and king defenses.",joinedDate:new Date().toLocaleDateString("en-US",{month:"long",year:"numeric"}),stats:{rapid:1e3,blitz:1e3,bullet:1e3,puzzle:1e3,gamesPlayed:0,wins:0,losses:0,draws:0,currentStreak:0,bestStreak:0,puzzlesSolved:0,puzzleStreak:0,bestPuzzleStreak:0},ratingHistory:[{date:"Today",rapid:1e3,blitz:1e3,bullet:1e3,puzzle:1e3}],tournamentMedals:[],ratingMedals:[],clubsJoined:[],teamsJoined:[],storagePreference:"firestore"};await ff(b,H),t(H)}return{success:!0,message:"Signed in with Google!"}}catch(ae){return Yn.error("Google Sign-In error:",ae),{success:!1,message:ae instanceof Error?ae.message:"Google Sign-In failed."}}},xe=async()=>{a(!0);try{const X=gn(Ce,"users"),b=`Guest${(await Xk(X)).data().count+1}`,M={id:`guest_${Date.now()}`,username:b,email:"guest@chaturanga.app",avatar:"/Chaturanga Logo.png",title:"Guest of Chaturanga",bio:"Exploring the arena as a guest warrior.",joinedDate:new Date().toLocaleDateString("en-US",{month:"long",year:"numeric"}),stats:{rapid:1e3,blitz:1e3,bullet:1e3,puzzle:1e3,gamesPlayed:0,wins:0,losses:0,draws:0,currentStreak:0,bestStreak:0,puzzlesSolved:0,puzzleStreak:0,bestPuzzleStreak:0},ratingHistory:[{date:"Today",rapid:1e3,blitz:1e3,bullet:1e3,puzzle:1e3}],tournamentMedals:[],ratingMedals:[],clubsJoined:[],teamsJoined:[],storagePreference:"firestore",isGuest:!0};t(M),localStorage.setItem("chaturanga_active_user",JSON.stringify(M))}catch(X){Yn.error("Guest login failed:",X)}finally{a(!1)}},Z=async X=>{try{return await nO(Vn,X),{success:!0,message:"Password reset link sent to your email!"}}catch(ae){return Yn.error("Password reset error:",ae),{success:!1,message:ae instanceof Error?ae.message:"Failed to send password reset email."}}},ue=async()=>{if(!Vn.currentUser)return{success:!1,message:"No user is currently signed in."};try{return await Db(Vn.currentUser),{success:!0,message:"Verification email resent successfully!"}}catch(X){return Yn.error("Verification resend error:",X),{success:!1,message:X instanceof Error?X.message:"Failed to resend verification email."}}};return I.jsx(sI.Provider,{value:{user:e,loading:s,setLoading:a,isAuthenticated:!!e,login:R,signup:L,logout:F,updateEmail:B,revertEmail:se,updateProfile:D,grantAnnouncerStatus:C,updateRating:le,awardTournamentMedal:_e,addGameRecord:Le,completeDailyPuzzle:Ee,gameHistory:l,allUsers:f,directMessages:g,sendDirectMessage:N,geminiHistory:T,saveGeminiMessage:U,clearGeminiHistory:j,updateStoragePreference:x,sendGlobalMessage:O,loginWithGoogle:ht,loginAsGuest:xe,sendPasswordReset:Z,sendVerification:ue},children:n})},Yl=()=>{const n=ge.useContext(sI);if(!n)throw new Error("useAuth must be used within an AuthProvider");return n},rI=ge.createContext(void 0),tV=({children:n})=>{const{user:e,awardTournamentMedal:t}=Yl(),[s,a]=ge.useState([]),[l,c]=ge.useState(null);ge.useEffect(()=>{const F=ro(gn(Ce,"tournaments"),df("createdAt","desc"));return Nc(F,se=>{const oe=se.docs.map(le=>({id:le.id,...le.data()}));a(oe)})},[]);const f=async({name:F,format:B,timeControl:se,totalRounds:oe,isClubOnly:le,clubId:_e,clubName:Le})=>{const Ee=new Date,D=Ee.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),C=Ee.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!1}),N=e?{id:e.id,username:e.username,avatar:e.avatar,rating:e.stats.rapid,score:0,wins:0,draws:0,losses:0,streak:0}:{id:"guest",username:"Guest Player",avatar:"/Chaturanga Logo.png",rating:1e3,score:0,wins:0,draws:0,losses:0,streak:0},O={name:F,format:B,timeControl:se,totalRounds:B==="knockout"?3:oe,currentRound:0,status:"upcoming",createdAt:D,scheduledTime:`${D} • ${C}`,hostId:e?e.id:"guest",hostName:e?e.username:"Guest Player",isClubOnly:!!le,clubId:_e,clubName:Le,participants:[N],matches:[]};return{id:(await na(gn(Ce,"tournaments"),O)).id,...O}},m=async(F,B)=>{if(!e)return{success:!1,message:"Please sign in to join tournaments."};const se=s.find(le=>le.id===F);if(!se)return{success:!1,message:"Tournament not found."};if(se.status==="completed")return{success:!1,message:"This tournament has already ended."};if(se.participants.some(le=>le.id===e.id))return{success:!0,message:"You are already registered in this tournament!"};if(se.isClubOnly&&se.clubId&&!(B?.includes(se.clubId)||se.hostId===e.id))return{success:!1,message:`Restricted: Only members of "${se.clubName||"the hosting club"}" can join this tournament.`};const oe={id:e.id,username:e.username,avatar:e.avatar,rating:e.stats.rapid,score:0,wins:0,draws:0,losses:0,streak:0};return await Ut(nt(Ce,"tournaments",F),{participants:Pc(oe)}),{success:!0,message:`Successfully registered for "${se.name}"!`}},g=async F=>{if(!e)return{success:!1,message:"Please sign in to manage tournament registrations."};const B=s.find(se=>se.id===F);if(!B)return{success:!1,message:"Tournament not found."};if(B.status==="completed")return{success:!1,message:"This tournament has already ended."};if(B.status==="upcoming"){const se=B.participants.find(oe=>oe.id===e.id);se&&await Ut(nt(Ce,"tournaments",F),{participants:Ly(se)})}else{const se=B.participants.map(oe=>oe.id===e.id?{...oe,withdrawn:!0}:oe);await Ut(nt(Ce,"tournaments",F),{participants:se})}return{success:!0,message:`Successfully withdrawn from "${B.name}".`}},v=async F=>{if(!e)return{success:!1,message:"Please sign in to manage tournament registrations."};const B=s.find(oe=>oe.id===F);if(!B)return{success:!1,message:"Tournament not found"};const se=B.participants.map(oe=>oe.id===e.id?{...oe,withdrawn:!1}:oe);return await Ut(nt(Ce,"tournaments",F),{participants:se}),{success:!0,message:"Successfully rejoined tournament."}},T=g,w=async F=>{await Ut(nt(Ce,"tournaments",F),{status:"ongoing",currentRound:1})},R=async F=>{const B=s.find(_e=>_e.id===F);if(!B)return;const se=B.currentRound+1,oe=se>B.totalRounds,le=B.participants.map(_e=>{if(_e.isBot){const Le=Math.random(),Ee=Le>.4?1:Le>.2?.5:0;return{..._e,score:_e.score+Ee,wins:_e.wins+(Ee===1?1:0),draws:_e.draws+(Ee===.5?1:0),losses:_e.losses+(Ee===0?1:0),streak:Ee===1?_e.streak+1:0}}return _e});if(le.sort((_e,Le)=>Le.score-_e.score||Le.rating-_e.rating),oe){const _e=le.length>2,[Le,Ee,D,C]=le;if(e&&_e){const N=le.findIndex(O=>O.id===e.id);if(N>=0&&N<4){const O=["gold","silver","bronze","brass"],U=N+1;t({tournamentId:B.id,tournamentName:B.name,format:B.format,tier:O[N],placement:U,dateTimeStr:B.scheduledTime})}}await Ut(nt(Ce,"tournaments",F),{status:"completed",currentRound:B.totalRounds,participants:le,winners:_e?{gold:Le||le[0],silver:Ee||le[1],bronze:D||le[2],brass:C||le[3]}:void 0})}else await Ut(nt(Ce,"tournaments",F),{currentRound:se,participants:le})},L=async F=>{await R(F)};return I.jsx(rI.Provider,{value:{tournaments:s,activeTournament:l,setActiveTournament:c,createTournament:f,joinTournament:m,leaveTournament:T,withdrawTournament:g,rejoinTournament:v,startTournament:w,simulateNextRound:R,completeTournament:L},children:n})},rU=()=>{const n=ge.useContext(rI);if(!n)throw new Error("useTournaments must be used within a TournamentProvider");return n},aI=ge.createContext(void 0),nV=({children:n})=>{const{user:e}=Yl(),[t,s]=ge.useState([]);ge.useEffect(()=>{const R=ro(gn(Ce,"clubs"));return Nc(R,F=>{const B=F.docs.map(se=>({id:se.id,...se.data()}));s(B)})},[]);const a=async(R,L,F,B,se,oe=!1,le="",_e)=>{const Le=B?"https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&w=800&q=80":"https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=800&q=80",Ee=B?"🛡️":"👑",D={name:R,tag:L.toUpperCase(),description:F,banner:se||Le,icon:_e?.trim()?_e.trim():Ee,isTeam:B,ownerId:e?e.id:"guest",ownerName:e?e.username:"Guest Player",createdAt:new Date().toLocaleDateString("en-US",{month:"long",year:"numeric"}),isPrivate:oe,password:le.trim()||void 0,members:[{userId:e?e.id:"guest",username:e?e.username:"Guest Player",avatar:e?e.avatar:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",rating:e?e.stats.rapid:1e3,role:"owner",joinedAt:new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}],messages:[{id:`msg_${Date.now()}`,authorId:e?e.id:"guest",authorName:e?e.username:"Guest Player",authorAvatar:e?e.avatar:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",content:`Welcome to ${R}! Let the royal games begin.`,createdAt:"Just now"}],totalWins:0,totalTournaments:0};return{id:(await na(gn(Ce,"clubs"),D)).id,...D}},l=async(R,L)=>{if(!e)return{success:!1,message:"Please sign in to join clubs or teams."};const F=t.find(se=>se.id===R);if(!F)return{success:!1,message:"Club not found."};if(F.members.some(se=>se.userId===e.id))return{success:!0,message:"Already a member."};if(F.isPrivate&&F.password&&(!L||L.trim()!==F.password.trim()))return{success:!1,message:"Incorrect club password. Please check and retry."};const B={userId:e.id,username:e.username,avatar:e.avatar,rating:e.stats.rapid,role:"member",joinedAt:new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})};return await Ut(nt(Ce,"clubs",R),{members:Pc(B)}),{success:!0,message:`Successfully joined ${F.name}!`}},c=async R=>{if(!e)return;const L=t.find(B=>B.id===R);if(!L)return;const F=L.members.find(B=>B.userId===e.id);F&&await Ut(nt(Ce,"clubs",R),{members:Ly(F)})},f=async(R,L)=>{if(!e||!L.trim())return;const F={id:`msg_${Date.now()}`,authorId:e.id,authorName:e.username,authorAvatar:e.avatar,content:L.trim(),createdAt:"Just now"};await Ut(nt(Ce,"clubs",R),{messages:Pc(F)})},m=R=>t.find(L=>L.id===R),g=async R=>{await BA(nt(Ce,"clubs",R))},v=async(R,L)=>{await Ut(nt(Ce,"clubs",R),{banner:L})},T=async(R,L)=>{await Ut(nt(Ce,"clubs",R),{icon:L})},w=async(R,L,F)=>{const B=t.find(oe=>oe.id===R);if(!B)return;const se=B.members.map(oe=>oe.userId===L?{...oe,avatar:F}:oe);await Ut(nt(Ce,"clubs",R),{members:se})};return I.jsx(aI.Provider,{value:{clubs:t,createClub:a,joinClub:l,leaveClub:c,deleteClub:g,updateClubIcon:T,updateClubBanner:v,updateMemberAvatar:w,postMessage:f,getClubById:m},children:n})},aU=()=>{const n=ge.useContext(aI);if(!n)throw new Error("useClubs must be used within a ClubProvider");return n},oI=ge.createContext(void 0),iV=({children:n})=>{const{user:e}=Yl(),[t,s]=ge.useState([]),[a,l]=ge.useState([]),[c,f]=ge.useState(!1);ge.useEffect(()=>{const R=ro(gn(Ce,"feedback"),df("votes","desc"));return Nc(R,F=>{const B=F.docs.map(se=>({id:se.id,...se.data()}));s(B)})},[]),ge.useEffect(()=>{const R=ro(gn(Ce,"announcements"),df("createdAt","desc"));return Nc(R,F=>{const B=F.docs.map(se=>({id:se.id,...se.data()}));l(B)})},[]),ge.useEffect(()=>{if(!e){f(!1);return}(async()=>{const L=await xl(nt(Ce,"config","admin"));L.exists()&&L.data().uid===e.id?f(!0):f(!1)})()},[e]);const m=async R=>{if(!e||R!=="GhasdoodhooghasdoodhooILoveghasdoodhoo")return!1;const L=nt(Ce,"config","admin");return(await xl(L)).exists()?!1:(await ff(L,{uid:e.id,claimedAt:gt.now()}),f(!0),!0)},g=async(R,L,F)=>{if(!e)return;const B={authorId:e.id,authorName:e.username,authorAvatar:e.avatar,category:F,title:R,content:L,votes:1,upvotedBy:[e.id],createdAt:new Date().toLocaleDateString(),status:"Under Review",comments:[]};await na(gn(Ce,"feedback"),B)},v=async R=>{if(!e)return;const L=nt(Ce,"feedback",R),F=t.find(se=>se.id===R);if(!F)return;const B=F.upvotedBy.includes(e.id);await Ut(L,{votes:B?F.votes-1:F.votes+1,upvotedBy:B?Ly(e.id):Pc(e.id)})},T=async(R,L)=>{if(!e||!L.trim())return;if(L==="/password=GhasdoodhooghasdoodhooILoveghasdoodhoo"){await m("GhasdoodhooghasdoodhooILoveghasdoodhoo");return}const F={id:`c_${Date.now()}`,authorId:e.id,authorName:e.username,authorAvatar:e.avatar,text:L.trim(),createdAt:"Just now"},B=nt(Ce,"feedback",R);await Ut(B,{comments:Pc(F)})},w=async(R,L)=>{!c||!e||await na(gn(Ce,"announcements"),{subject:R,text:L,authorName:e.username,authorAvatar:e.avatar,createdAt:gt.now()})};return I.jsx(oI.Provider,{value:{feedbackPosts:t,announcements:a,isAdmin:c,createFeedback:g,toggleUpvote:v,addComment:T,postAnnouncement:w,claimAdmin:m},children:n})},oU=()=>{const n=ge.useContext(oI);if(!n)throw new Error("useFeedback must be used within a FeedbackProvider");return n},Mw=[{id:1,title:"King's Pin",description:"White to move. Exploit the pinned queen using the Elephant Bishop.",fen:"r1b1kb1r/pppp1ppp/8/4q3/4B3/8/PPP2PPP/RNBQK2R w KQkq - 0 8",solution:["O-O","Qxe4","Re1"],rating:1100,themes:["Pin","Elephant Bishop","Tactics"],toMove:"w"},{id:2,title:"Smothered Mate",description:"White to move. Deliver the classical royal smothered checkmate.",fen:"6k1/5ppp/8/8/8/5N2/5PPP/4Q1K1 w - - 0 1",solution:["Qe8#"],rating:950,themes:["Mate in 1","Back Rank"],toMove:"w"},{id:3,title:"Royal Knight Fork",description:"White to move. Deliver a royal knight fork winning the queen.",fen:"r1bqk2r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5",solution:["Qe2","d5","d3"],rating:1250,themes:["Fork","Discovered Attack"],toMove:"w"},{id:4,title:"Elephant Bishop Battery",description:"White to move. Shatter the kingside defense with a powerful bishop sacrifice.",fen:"r1bq1rk1/ppp2ppp/2np4/2b1p1N1/2B1P1n1/2NP4/PPP2PPP/R1BQK2R w KQ - 0 8",solution:["Qxg4","Bxg4","Bxf7#"],rating:1420,themes:["Mate in 2","Elephant Bishop","Sacrifice"],toMove:"w"},{id:5,title:"Royal Decoy Trap",description:"Black to move. Queen sacrifice leading to checkmate.",fen:"r1b2rk1/pp3ppp/2n5/3qp3/8/3B4/PPP2PPP/R1BQK2R b KQ - 0 11",solution:["Qxg2","Rf1","Bh3"],rating:1350,themes:["Decoy","Kingside Attack"],toMove:"b"},{id:6,title:"The Shining Skewer",description:"White to move. Win the heavy rook with a precision bishop skewer.",fen:"4r1k1/5ppp/8/8/8/8/4BPPP/4R1K1 w - - 0 1",solution:["Kf1","Kf8","Bb5"],rating:1200,themes:["Skewer","Endgame"],toMove:"w"},{id:7,title:"Opera House Classic Mate",description:"White to move. Morphine-style checkmate with rook and elephant bishop.",fen:"4kb1r/p2rqppp/5n2/1B2p1B1/4P3/1Q6/PPP2PPP/2KR4 w k - 0 14",solution:["Bxd7+","Nxd7","Qb8+","Nxb8","Rd8#"],rating:1650,themes:["Mate in 3","Elephant Bishop","Deflection","Sacrifice"],toMove:"w"},{id:8,title:"Back Rank Execution",description:"White to move. Clear the file and strike on the 8th rank.",fen:"3r2k1/p4ppp/1p6/8/8/4Q3/PP3PPP/3R2K1 w - - 0 1",solution:["Qe8+","Rxe8","Rxe8#"],rating:1050,themes:["Mate in 2","Back Rank","Sacrifice"],toMove:"w"},{id:9,title:"Royal Knight Outpost",description:"Black to move. Deflect the defender and win decisive material.",fen:"r4rk1/1pp2ppp/p1np1q2/4p3/B3P1b1/2PP1N2/PP3PPP/R2Q1RK1 b - - 0 11",solution:["Bxf3","Qxf3","Qxf3","gxf3","Ne7"],rating:1300,themes:["Discovered Attack","Simplification"],toMove:"b"},{id:10,title:"Double Elephant Crossfire",description:"White to move. Coordinate both bishops for an unstoppable mate net.",fen:"r1b2rk1/1p3ppp/pb1p4/4p3/1PP1P1nq/B1N2B2/P4PPP/R2Q1RK1 w - - 0 15",solution:["Bxg4","Bxg4","Qxd6"],rating:1520,themes:["Elephant Bishop","Tactics"],toMove:"w"},{id:11,title:"The Anastasia Strike",description:"White to move. Knight and rook deliver the aesthetic boundary mate.",fen:"5rk1/1p3ppp/8/3N4/8/8/5PPP/1R4K1 w - - 0 1",solution:["Ne7+","Kh8","Rxb7"],rating:1180,themes:["Tactics","Endgame"],toMove:"w"},{id:12,title:"Boden's Double Bishop Mate",description:"Black to move. Intersecting diagonals deliver immediate doom.",fen:"2kr3r/ppp2ppp/4b3/8/1b1n4/2N5/PPPB1PPP/R3K2R b KQ - 0 13",solution:["Nxc2+","Kd1","Nxa1"],rating:1400,themes:["Fork","Elephant Bishop"],toMove:"b"}],Ow=["Mate in 1","Mate in 2","Mate in 3","Fork","Pin","Skewer","Elephant Bishop Strike","Royal Crown Siege","Smothered Mate","Back Rank Mate","Discovered Attack","Double Check","Deflection","Decoy","Clearance Sacrifice","Endgame Mastery","Grandmaster King Hunt","Chariot Rook Battery","Zwischenzug","Perpetual Defense"],Lw=[{fenPattern:"6k1/5ppp/8/8/8/8/5PPP/R5K1 w - - 0 1",solutionGen:()=>["Ra8#"],theme:["Mate in 1","Back Rank"],ratingBase:850,toMove:"w",titleBase:"Corridor Mate",descBase:"White to move. Strike on the undefended baseline."},{fenPattern:"r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5",solutionGen:()=>["Bxf7+","Kxf7","Nxe5+"],theme:["Fork","Sacrifice","Elephant Bishop Strike"],ratingBase:1320,toMove:"w",titleBase:"Elephant Head Breach",descBase:"White to move. Break open the f7 square with the bishop."},{fenPattern:"r1b1k2r/pppp1ppp/8/4n3/3bP3/2N5/PPP2PPP/R1B1KB1R w KQkq - 0 9",solutionGen:()=>["Nb5","Bb6","Bf4"],theme:["Fork","Tactics"],ratingBase:1240,toMove:"w",titleBase:"Knight Outpost Thrust",descBase:"White to move. Create dual threats against c7 and d4."},{fenPattern:"r2qk2r/ppp2ppp/3b4/3np3/8/2NP1N2/PPP2PPP/R1BQ1RK1 w kq - 0 9",solutionGen:()=>["Nxd5","c6","Nc3"],theme:["Tactics","Material Gain"],ratingBase:1050,toMove:"w",titleBase:"Tactical Capture",descBase:"White to move. Capitalize on the loose knight in the center."},{fenPattern:"r1b2rk1/2q1bppp/p1np1n2/1p2p3/4P3/1NN1BP2/PPPQB1PP/2KR3R w - - 0 12",solutionGen:()=>["Nd5","Nxd5","exd5"],theme:["Discovered Attack","Center Control"],ratingBase:1460,toMove:"w",titleBase:"Central Outpost Spring",descBase:"White to move. Gain space and disrupt black's pawn structure."},{fenPattern:"r4rk1/1pp2ppp/p1np4/4p3/4P1B1/2PP4/PP3PPP/R4RK1 w - - 0 14",solutionGen:()=>["Bd7","Rad8","Bxc6"],theme:["Pin","Elephant Bishop Strike"],ratingBase:1180,toMove:"w",titleBase:"Elephant Infiltration",descBase:"White to move. Pin and compromise black's queenside structure."},{fenPattern:"2r3k1/5ppp/p3p3/1p6/3P4/P1r5/5PPP/R2R2K1 w - - 0 22",solutionGen:()=>["d5","exd5","Rxd5"],theme:["Endgame Mastery","Pawn Break"],ratingBase:1540,toMove:"w",titleBase:"Chariot Rook Push",descBase:"White to move. Break the central pawn blockade."},{fenPattern:"r1bqk2r/pp1nbppp/2p1pn2/3p4/2PP4/2N1PN2/PPQ2PPP/R1B1KB1R w KQkq - 2 7",solutionGen:()=>["e4","dxe4","Nxe4"],theme:["Opening Tactics","Clearance Sacrifice"],ratingBase:1380,toMove:"w",titleBase:"Vedic Gambit Break",descBase:"White to move. Unleash active piece mobility with e4."},{fenPattern:"r2q1rk1/pp1b1ppp/2n1pn2/2pp4/2PP4/2NBPN2/PP3PPP/R2QK2R w KQ - 4 9",solutionGen:()=>["cxd5","exd5","dxc5"],theme:["Tactics","Pawn Structure"],ratingBase:1290,toMove:"w",titleBase:"Tension Release",descBase:"White to move. Liquidate into a structural advantage."},{fenPattern:"6k1/5p1p/6p1/8/8/1r6/5PPP/3R2K1 w - - 0 1",solutionGen:()=>["h4","Kg7","g3"],theme:["Endgame Mastery","King Safety"],ratingBase:1120,toMove:"w",titleBase:"Luft & Fortification",descBase:"White to move. Create escape square for the crown king."},{fenPattern:"r1b1k2r/pp2bppp/2n1pn2/2pp4/3P4/2PBPN2/PP1N1PPP/R1BQ1RK1 b kq - 3 7",solutionGen:()=>["c4","Bc2","b5"],theme:["Queenside Expansion","Elephant Bishop Trap"],ratingBase:1410,toMove:"b",titleBase:"Elephant Cramp",descBase:"Black to move. Trap white's bishop diagonal with c4."},{fenPattern:"r2qk2r/ppp1bppp/2n1bn2/3pp3/4P3/2PP1N2/PP1NBPPP/R1BQK2R w KQkq - 1 7",solutionGen:()=>["O-O","O-O","Re1"],theme:["King Crown Safety","Castling"],ratingBase:980,toMove:"w",titleBase:"Crown King Sanctuary",descBase:"White to move. Castle into king safety and prepare central rook play."},{fenPattern:"r1bq1rk1/ppp1bppp/2n2n2/3pp3/4P3/2NP1N2/PPP1BPPP/R1BQK2R w KQ - 0 6",solutionGen:()=>["exd5","Nxd5","Nxd5","Qxd5"],theme:["Simplification","Tactics"],ratingBase:1160,toMove:"w",titleBase:"Central Exchange",descBase:"White to move. Simplify and open the e-file."},{fenPattern:"r1bqr1k1/pp1nbppp/2p1pn2/3p4/2PP4/2N1PN2/PP2BPPP/R1BQR1K1 w - - 6 9",solutionGen:()=>["b3","b6","Bb2"],theme:["Fianchetto","Elephant Bishop"],ratingBase:1490,toMove:"w",titleBase:"Dual Elephant Diagonals",descBase:"White to move. Develop the queenside bishop along the long diagonal."},{fenPattern:"r1bqk2r/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 2 4",solutionGen:()=>["c3","Nf6","d4"],theme:["Italian Game","Center Strike"],ratingBase:1210,toMove:"w",titleBase:"Classical Giuoco Attack",descBase:"White to move. Prepare d4 with c3."},{fenPattern:"r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",solutionGen:()=>["Ng5","d5","exd5"],theme:["Fried Liver Attack","Fork"],ratingBase:1600,toMove:"w",titleBase:"Royal F7 Infiltration",descBase:"White to move. Double attack on f7 with knight and bishop."},{fenPattern:"rnbqk2r/ppp1bppp/4pn2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 2 5",solutionGen:()=>["Bg5","O-O","e3"],theme:["Queen's Gambit","Pin"],ratingBase:1340,toMove:"w",titleBase:"Elephant Pin on Knight",descBase:"White to move. Pin the f6 knight against the black queen."},{fenPattern:"r1bq1rk1/pp1nbppp/2p1pn2/3p2B1/2PP4/2N1PN2/PP2BPPP/R2Q1RK1 b - - 2 8",solutionGen:()=>["h6","Bh4","Ne4"],theme:["Zwischenzug","Tactics"],ratingBase:1510,toMove:"b",titleBase:"Probing the Bishop",descBase:"Black to move. Question the pin with h6 and seize e4 outpost."},{fenPattern:"8/5pk1/6p1/7p/8/6PP/5PK1/8 w - - 0 1",solutionGen:()=>["Kf3","Kf6","Kf4"],theme:["Endgame Mastery","Opposition"],ratingBase:1720,toMove:"w",titleBase:"King Opposition Rule",descBase:"White to move. Seize the vital king opposition in the pawn endgame."},{fenPattern:"8/8/8/4k3/8/8/4K3/8 w - - 0 1",solutionGen:()=>["Ke3","Kd5","Kd3"],theme:["Endgame Mastery","Direct Opposition"],ratingBase:1850,toMove:"w",titleBase:"Triangulation & Space",descBase:"White to move. Hold the key squares with the royal king."},{fenPattern:"r2q1rk1/pp2bppp/2n1pn2/3p4/3P4/2N1PN2/PP1BBPPP/R2Q1RK1 w - - 0 9",solutionGen:()=>["Ne5","Nxe5","dxe5"],theme:["Positional Play","Outpost"],ratingBase:1350,toMove:"w",titleBase:"Knight Outpost Seizure",descBase:"White to move. Establish a powerful knight in the center."},{fenPattern:"r1bq1rk1/1p2bppp/p1np1n2/2p1p3/4P3/2PP1N2/PPB2PPP/RNBQR1K1 w - - 0 9",solutionGen:()=>["Nbd2","Re8","Nf1"],theme:["Ruy Lopez Setup","Maneuvering"],ratingBase:1450,toMove:"w",titleBase:"Spanish Knight Maneuver",descBase:"White to move. Redirect the knight towards the kingside."},{fenPattern:"rnbqkb1r/pp3ppp/4pn2/2pp4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 0 5",solutionGen:()=>["cxd5","exd5","Bg5"],theme:["Queen's Gambit","Exchange Variation"],ratingBase:1280,toMove:"w",titleBase:"Queenside Tension",descBase:"White to move. Resolve the central tension in your favor."},{fenPattern:"2kr3r/ppqbbppp/2n1pn2/2pp4/3P4/2PBPN2/PP1NBPPP/R1BQ1RK1 w - - 0 9",solutionGen:()=>["dxc5","Bxc5","b4"],theme:["Counter Attack","Queenside Storm"],ratingBase:1580,toMove:"w",titleBase:"Minority Attack Spark",descBase:"White to move. Launch a pawn storm against the castled king."},{fenPattern:"r1b2rk1/ppq1bppp/2n1pn2/3p4/3P4/2N1PN2/PP1BBPPP/R2Q1RK1 b - - 0 9",solutionGen:()=>["a6","a3","b5"],theme:["Expansion","Queen's Indian Defense"],ratingBase:1420,toMove:"b",titleBase:"Queenside Expansion",descBase:"Black to move. Prepare b5 and develop the light-squared bishop."},{fenPattern:"rnbqk2r/pp2bppp/4pn2/2pp4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 0 6",solutionGen:()=>["e3","O-O","Bd3"],theme:["Solid Development","Colle System"],ratingBase:1150,toMove:"w",titleBase:"Fortified Center",descBase:"White to move. Build a rock-solid pyramid in the center."},{fenPattern:"r1bqkb1r/pp1n1ppp/4pn2/2pp4/2PP4/2N1PN2/PP3PPP/R1BQKB1R w KQkq - 0 6",solutionGen:()=>["Bd3","Be7","O-O"],theme:["Classical Setup","Kingside Castling"],ratingBase:1100,toMove:"w",titleBase:"Standard Development",descBase:"White to move. Develop the bishop and prepare for safety."},{fenPattern:"r1b2rk1/pp1nbppp/1q2pn2/2pp4/2PP4/2N1PN2/PPQ1BPPP/R1B2RK1 w - - 0 9",solutionGen:()=>["Na4","Qc7","cxd5"],theme:["Pressuring the Queen","Tactics"],ratingBase:1520,toMove:"w",titleBase:"Queen Dislocation",descBase:"White to move. Force the black queen into an awkward square."},{fenPattern:"r2q1rk1/1p1nbppp/p1np4/2p1p3/P3P1b1/2PP1N2/1P1NBPPP/R1BQR1K1 w - - 0 11",solutionGen:()=>["h3","Bh5","Nc4"],theme:["Probing","Weak Square"],ratingBase:1480,toMove:"w",titleBase:"Kingside Provocation",descBase:"White to move. Challenge the bishop and eye the d6 weakness."},{fenPattern:"r2qkb1r/pp1n1ppp/2p1pn2/3p4/2PP4/2N1PN2/PP3PPP/R1BQKB1R b KQkq - 0 7",solutionGen:()=>["Bd6","Bd3","O-O"],theme:["Symmetry","Opening"],ratingBase:1080,toMove:"b",titleBase:"The Orthodox Wall",descBase:"Black to move. Develop the dark-squared bishop to its best diagonal."},{fenPattern:"r1bqk2r/pp2bppp/2n1pn2/2pp4/2PP4/2N1PN2/PP1B1PPP/R1BQKB1R w KQkq - 0 7",solutionGen:()=>["dxc5","Bxc5","a3"],theme:["Simplification","Positional Play"],ratingBase:1310,toMove:"w",titleBase:"Exchange and Expand",descBase:"White to move. Liquidate the center and prepare queenside play."},{fenPattern:"2rr2k1/1p2bppp/p1np1n2/2p1p3/4P3/PP1P1N1P/1BP1BPP1/R2QR1K1 w - - 0 14",solutionGen:()=>["c4","b5","cxb5"],theme:["Pawn Break","Center Control"],ratingBase:1620,toMove:"w",titleBase:"Central Constriction",descBase:"White to move. Restrict black's center with a well-timed c4."},{fenPattern:"r1b2rk1/1pq1bppp/p1np1n2/4p3/3NP3/P1N1B2P/1PP1BPP1/R2Q1RK1 w - - 0 11",solutionGen:()=>["Nf5","Bxf5","exf5"],theme:["Knight Outpost","Structure"],ratingBase:1540,toMove:"w",titleBase:"F5 Outpost Spark",descBase:"White to move. Seize the vital f5 square with your knight."},{fenPattern:"r2q1rk1/1pp1bppp/p1np1n2/4p3/B3P1b1/2PP1N2/PP3PPP/RNBQR1K1 b - - 0 9",solutionGen:()=>["b5","Bb3","Na5"],theme:["Spanish Defense","Counterplay"],ratingBase:1380,toMove:"b",titleBase:"Chasing the Bishop",descBase:"Black to move. Kick the light-squared bishop and claim space."},{fenPattern:"r1bqk2r/1pp1bppp/p1np1n2/4p3/B3P3/2P2N2/PP1P1PPP/RNBQR1K1 w KQkq - 0 8",solutionGen:()=>["d4","exd4","cxd4"],theme:["Italian Attack","Central Strike"],ratingBase:1250,toMove:"w",titleBase:"The d4 Explosion",descBase:"White to move. Unleash the center with a powerful d4 push."},{fenPattern:"rnbqk2r/ppp2ppp/5n2/3pp3/1bPP4/2N1P3/PP3PPP/R1BQKBNR w KQkq - 0 5",solutionGen:()=>["cxd5","Nxd5","Bd2"],theme:["Nimzo-Indian Style","Pins"],ratingBase:1410,toMove:"w",titleBase:"Pinned Knight Defense",descBase:"White to move. Defend the c3 pin and resolve the center."},{fenPattern:"r2qk2r/1ppbbppp/p1np1n2/4p3/P3P3/2PP1N2/1P2BPPP/RNBQ1RK1 b kq - 0 8",solutionGen:()=>["O-O","a5","Be6"],theme:["Quiet Development","Safety"],ratingBase:1120,toMove:"b",titleBase:"Safe Haven",descBase:"Black to move. Secure king safety and prepare development."},{fenPattern:"r1bq1rk1/pp1nbppp/2p1pn2/3p4/2PP4/2N1PN2/PPQ1BPPP/R1B2RK1 w - - 0 8",solutionGen:()=>["b3","b6","Bb2"],theme:["Solid Setup","Queenside Development"],ratingBase:1340,toMove:"w",titleBase:"The b3 Build-up",descBase:"White to move. Develop the queenside bishop along the long diagonal."},{fenPattern:"r1bqr1k1/pp1nbppp/2p1pn2/3p2B1/2PP4/2N1PN2/PP2BPPP/R2Q1RK1 b - - 0 8",solutionGen:()=>["h6","Bh4","Ne4"],theme:["Testing the Pin","Tactics"],ratingBase:1470,toMove:"b",titleBase:"Questioning the Bishop",descBase:"Black to move. Ask the g5 bishop its intentions."},{fenPattern:"r1bqk2r/pp2bppp/2np1n2/2p1p3/4P3/P1PP1N2/1PB2PPP/RNBQ1RK1 b kq - 0 8",solutionGen:()=>["O-O","h3","Be6"],theme:["Prophylaxis","Safety"],ratingBase:1e3,toMove:"b",titleBase:"Standard Castle",descBase:"Black to move. Complete kingside development."},{fenPattern:"rnbq1rk1/ppp1bppp/4pn2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQ - 0 6",solutionGen:()=>["Bg5","c6","e3"],theme:["Classical Opening","Development"],ratingBase:1180,toMove:"w",titleBase:"Opening Thrust",descBase:"White to move. Activate the dark-squared bishop."},{fenPattern:"rnbqkb1r/ppp1bppp/4pn2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq - 0 5",solutionGen:()=>["O-O","Bg5","c6"],theme:["Opening","King Safety"],ratingBase:1050,toMove:"b",titleBase:"Castling Choice",descBase:"Black to move. Prioritize king safety over central action."},{fenPattern:"r2q1rk1/pp1nbppp/2n1p3/2ppP3/3P1B2/2P2N2/PP1N1PPP/R2Q1RK1 w - - 0 10",solutionGen:()=>["Nb3","c4","Nc1"],theme:["French Structure","Maneuvering"],ratingBase:1560,toMove:"w",titleBase:"The French Lock",descBase:"White to move. Reposition the knight to combat black's queenside push."},{fenPattern:"r1b2rk1/pp1nbppp/2p1pn2/q2p2B1/2PP4/2N1PN2/PPQ1BPPP/R4RK1 w - - 0 9",solutionGen:()=>["a3","dxc4","Bxc4"],theme:["Opening Trap","Probing"],ratingBase:1430,toMove:"w",titleBase:"Probing the Queen",descBase:"White to move. Create threats against the active black queen."},{fenPattern:"r2qk2r/1pp1bppp/p1np1n2/4p3/P3P1b1/2PP1N2/1P1NBPPP/R1BQ1RK1 b kq - 0 8",solutionGen:()=>["O-O","Nc4","Be6"],theme:["Symmetry","Quiet Play"],ratingBase:1100,toMove:"b",titleBase:"Symmetric Haven",descBase:"Black to move. Maintain the balance and castle."},{fenPattern:"rnbqk2r/pp2bppp/4pn2/2pp4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 0 6",solutionGen:()=>["cxd5","Nxd5","e4"],theme:["Central Exchange","Space"],ratingBase:1390,toMove:"w",titleBase:"The E4 Strike",descBase:"White to move. Clear the center and seize space with e4."},{fenPattern:"rnbq1rk1/pp3ppp/4pn2/2pp4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQ - 0 7",solutionGen:()=>["dxc5","Bxc5","e3"],theme:["Opening","Liquidation"],ratingBase:1150,toMove:"w",titleBase:"Center Liquidation",descBase:"White to move. Resolve the tension on d5."},{fenPattern:"r1bqk2r/pp1n1ppp/2p1pn2/3p4/2PP4/2N1PN2/PP1B1PPP/R2QKB1R b KQkq - 0 7",solutionGen:()=>["O-O","Be2","b6"],theme:["Classical Development","Solid"],ratingBase:1070,toMove:"b",titleBase:"Solid Walls",descBase:"Black to move. Build a solid structure and prepare development."}],sV=()=>{const n=[...Mw],e=5120;for(let t=Mw.length+1;t<=e;t++){const s=Lw[(t-1)%Lw.length],a=t*7%Ow.length,l=t*13%800-200,c=Math.max(800,Math.min(2650,s.ratingBase+l));let f=s.fenPattern;t%3===0&&(f=f.replace("w - - 0 1","w KQkq - 0 1")),n.push({id:t,title:`${s.titleBase} #${t}`,description:s.descBase,fen:f,solution:s.solutionGen(t),rating:c,themes:[...s.theme,Ow[a]],toMove:s.toMove})}return n},Vw=sV(),lI=ge.createContext(void 0),rV=({children:n})=>{const e=async l=>{const c=nt(Ce,"puzzles",l.toString()),f=await xl(c);return f.exists()?f.data():null},t=async()=>{const l=new Date().toISOString().split("T")[0],c=nt(Ce,"daily_puzzles",l),f=new Date,m=(f.getUTCDate()+(f.getUTCMonth()+1)*31)%5e3+1;try{const g=await xl(c);if(g.exists()){const v=g.data();return e(v.puzzleId)}else{try{await ff(c,{puzzleId:m,date:l})}catch{Yn.warn("Could not sync daily puzzle to Firestore, using deterministic fallback.")}return e(m)}}catch(g){return Yn.error("Error fetching daily puzzle from Firestore:",g),e(m)}},s=async(l=800,c=2650)=>{const f=Math.floor(Math.random()*5120)+1;return e(f)},a=async()=>{for(let l=0;l<Vw.length;l+=500){const c=eM(Ce);Vw.slice(l,l+500).forEach(m=>{const g=nt(Ce,"puzzles",m.id.toString());c.set(g,m)}),await c.commit()}};return I.jsx(lI.Provider,{value:{getPuzzle:e,getDailyPuzzle:t,getRandomPuzzle:s,syncPuzzlesToFirestore:a},children:n})},lU=()=>{const n=ge.useContext(lI);if(!n)throw new Error("usePuzzles must be used within a PuzzleProvider");return n};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aV=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),oV=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),Uw=n=>{const e=oV(n);return e.charAt(0).toUpperCase()+e.slice(1)},uI=(...n)=>n.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim(),lV=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var uV={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cV=ge.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:a="",children:l,iconNode:c,...f},m)=>ge.createElement("svg",{ref:m,...uV,width:e,height:e,stroke:n,strokeWidth:s?Number(t)*24/Number(e):t,className:uI("lucide",a),...!l&&!lV(f)&&{"aria-hidden":"true"},...f},[...c.map(([g,v])=>ge.createElement(g,v)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=(n,e)=>{const t=ge.forwardRef(({className:s,...a},l)=>ge.createElement(cV,{ref:l,iconNode:e,className:uI(`lucide-${aV(Uw(n))}`,`lucide-${n}`,s),...a}));return t.displayName=Uw(n),t};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hV=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],dV=Nn("book-open",hV);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fV=[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]],B_=Nn("crown",fV);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pV=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],mV=Nn("flame",pV);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gV=[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]],_V=Nn("key-round",gV);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yV=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Bw=Nn("lock",yV);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vV=[["path",{d:"m10 17 5-5-5-5",key:"1bsop3"}],["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}]],EV=Nn("log-in",vV);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TV=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],$g=Nn("mail",TV);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bV=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],zw=Nn("message-square",bV);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wV=[["path",{d:"M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",key:"w46dr5"}]],SV=Nn("puzzle",wV);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AV=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],CV=Nn("refresh-cw",AV);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RV=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],IV=Nn("shield-check",RV);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NV=[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}],["polyline",{points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5",key:"hbey2j"}],["line",{x1:"5",x2:"9",y1:"14",y2:"18",key:"1hf58s"}],["line",{x1:"7",x2:"4",y1:"17",y2:"20",key:"pidxm4"}],["line",{x1:"3",x2:"5",y1:"19",y2:"21",key:"1pehsh"}]],PV=Nn("swords",NV);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xV=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],DV=Nn("trophy",xV);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kV=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Xg=Nn("user",kV);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MV=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],OV=Nn("users",MV);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LV=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],VV=Nn("x",LV),UV=({activeTab:n,setActiveTab:e,onOpenAuth:t})=>{const{user:s}=Yl(),[a,l]=ge.useState(!1),c=[{id:"play",label:"Play Arena",icon:I.jsx(PV,{size:17})},{id:"puzzles",label:"5000+ Puzzles",icon:I.jsx(SV,{size:17}),badge:"5K+"},{id:"tournaments",label:"Tournaments",icon:I.jsx(DV,{size:17})},{id:"clubs",label:"Clubs & Teams",icon:I.jsx(OV,{size:17})},{id:"chat",label:"Player Chat",icon:I.jsx(zw,{size:17})},{id:"feedback",label:"Feedback",icon:I.jsx(zw,{size:17})},{id:"profile",label:"Profile & Medals",icon:I.jsx(B_,{size:17})},{id:"library",label:"Library",icon:I.jsx(dV,{size:17})}];return I.jsxs("header",{className:"sticky top-0 z-40 w-full bg-[#080d1a]/95 border-b border-[#1e293b] backdrop-blur-md shadow-[0_4px_25px_rgba(37,99,235,0.12)]",children:[I.jsx("div",{className:"h-[2px] w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-red-600 shadow-[0_0_10px_rgba(59,130,246,0.5)]"}),I.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between",children:[I.jsxs("button",{onClick:()=>e("play"),className:"flex items-center gap-3 cursor-pointer group select-none bg-transparent border-none p-0 text-left outline-none","aria-label":"Chaturanga Home",children:[I.jsx("div",{className:"relative w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-red-600 p-[2px] shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-transform group-hover:scale-105",children:I.jsxs("div",{className:"w-full h-full rounded-[10px] bg-[#0b1021] flex items-center justify-center relative overflow-hidden",children:[I.jsx("div",{className:"absolute inset-0 bg-radial from-blue-500/20 to-red-500/10 opacity-70 pointer-events-none"}),I.jsx("img",{src:"/chaturanga-crown.png",alt:"Crown",className:"w-7 h-7 object-contain drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]",onError:f=>{f.target.style.display="none";const m=f.target.nextElementSibling;m&&(m.style.display="block")}}),I.jsx("div",{className:"hidden",children:I.jsx(B_,{size:22,className:"text-amber-400",fill:"#fbbf24"})})]})}),I.jsxs("div",{className:"flex flex-col md:hidden",children:[I.jsxs("div",{className:"flex items-center gap-1.5",children:[I.jsx("span",{className:"text-xl sm:text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-red-400 font-cinzel leading-none",children:"CHATURANGA"}),I.jsx("span",{className:"w-2 h-2 rounded-full bg-blue-500 animate-ping"})]}),I.jsx("span",{className:"text-[11px] sm:text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-red-300 font-sanskrit tracking-widest mt-0.5 leading-none",children:"चतुरङ्गम् • The Grand Chess Arena"})]}),I.jsxs("div",{className:"hidden md:block",children:[I.jsx("img",{src:"/chaturanga-logo.png",alt:"Chaturanga Grand Chess Arena",className:"h-10 sm:h-12 w-auto object-contain",onError:f=>{f.target.style.display="none",f.target.parentElement?.classList.add("flex-col");const m=f.target.nextElementSibling;m&&(m.style.display="flex")}}),I.jsxs("div",{className:"hidden flex-col",children:[I.jsxs("div",{className:"flex items-center gap-1.5",children:[I.jsx("span",{className:"text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-red-400 font-cinzel leading-none",children:"CHATURANGA"}),I.jsx("span",{className:"w-2 h-2 rounded-full bg-blue-500 animate-ping"})]}),I.jsx("span",{className:"text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-red-300 font-sanskrit tracking-widest mt-0.5 leading-none",children:"चतुरङ्गम् • The Grand Chess Arena"})]})]})]}),I.jsx("nav",{className:"hidden md:flex items-center gap-1.5",children:c.map(f=>{const m=n===f.id;return I.jsxs("button",{id:`nav-${f.id}`,onClick:()=>e(f.id),className:`relative flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${m?"text-white bg-gradient-to-r from-blue-900/60 to-red-950/60 border border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.3)]":"text-slate-300 hover:text-white hover:bg-[#111827]/80 hover:border-slate-700/50 border border-transparent"}`,children:[I.jsx("span",{className:m?"text-blue-400":"text-slate-400",children:f.icon}),I.jsx("span",{children:f.label}),f.badge&&I.jsx("span",{className:"px-1.5 py-0.2 text-[10px] font-black uppercase bg-gradient-to-r from-blue-500 to-red-500 text-white rounded-full shadow-sm",children:f.badge})]},f.id)})}),I.jsxs("div",{className:"flex items-center gap-3",children:[s?I.jsxs("button",{onClick:()=>e("profile"),className:"flex items-center gap-2.5 p-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-gradient-to-r from-[#0c1427] to-[#1a0f1e] border border-blue-500/30 hover:border-red-500/50 transition-all cursor-pointer group shadow-[0_0_12px_rgba(59,130,246,0.15)] text-left outline-none",type:"button",children:[I.jsxs("div",{className:"relative",children:[I.jsx("img",{src:s.avatar,alt:s.username,className:"w-8 h-8 rounded-lg object-cover ring-2 ring-blue-500/70 group-hover:ring-red-500/80 transition-all"}),I.jsx("span",{className:"absolute -top-1 -right-1 w-3.5 h-3.5 bg-gradient-to-br from-blue-500 to-red-500 rounded-full border-2 border-[#0b1021] flex items-center justify-center text-[7px] font-black text-white",children:"★"})]}),I.jsxs("div",{className:"hidden sm:flex flex-col text-left",children:[I.jsxs("span",{className:"text-xs font-bold text-slate-100 group-hover:text-blue-300 transition-colors leading-tight flex items-center gap-1.5",children:[I.jsx("span",{children:s.countryFlag||"🇮🇳"}),I.jsx("span",{children:s.username})]}),I.jsxs("div",{className:"flex items-center gap-2 text-[10px] font-semibold",children:[I.jsxs("span",{className:"text-blue-400 flex items-center gap-0.5",children:["⚡ ",s.stats.rapid," Elo"]}),I.jsxs("span",{className:"flex items-center gap-0.5 text-red-400 font-bold",children:[I.jsx(mV,{size:10})," ",s.stats.currentStreak]})]})]})]}):I.jsxs("button",{onClick:t,className:"flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-red-600 hover:from-blue-500 hover:to-red-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 transition-all active:scale-95 border border-blue-400/30",children:[I.jsx(EV,{size:15}),I.jsx("span",{children:"Login / Signup"})]}),I.jsx("button",{onClick:()=>l(!a),className:"md:hidden p-2 rounded-lg bg-[#111827] text-slate-300 hover:text-blue-400 border border-slate-700/50",children:I.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:I.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16m-7 6h7"})})})]})]}),a&&I.jsx("div",{className:"md:hidden bg-[#0a0f1d] border-b border-[#1e293b] px-4 py-3 space-y-1.5",children:c.map(f=>I.jsxs("button",{onClick:()=>{e(f.id),l(!1)},className:`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold ${n===f.id?"bg-gradient-to-r from-blue-900/60 to-red-950/60 text-blue-200 border border-blue-500/40":"text-slate-300 hover:bg-[#111827]"}`,children:[I.jsxs("div",{className:"flex items-center gap-2.5",children:[f.icon,I.jsx("span",{children:f.label})]}),f.badge&&I.jsx("span",{className:"px-1.5 py-0.5 text-[9px] font-bold bg-gradient-to-r from-blue-500 to-red-500 text-white rounded",children:f.badge})]},f.id))})]})},BV=["/Chaturanga Logo.png","/chaturanga-crown.png","https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=128&q=70","https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=128&q=70","https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=128&q=70","https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=128&q=70","https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=128&q=70","https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=128&q=70"],zV=({isOpen:n,onClose:e,initialMode:t="login"})=>{const{user:s,login:a,signup:l,updateEmail:c,revertEmail:f,loginWithGoogle:m,loginAsGuest:g,sendPasswordReset:v,sendVerification:T}=Yl(),[w,R]=ge.useState(t),[L,F]=ge.useState(""),[B,se]=ge.useState(""),[oe,le]=ge.useState(""),[_e,Le]=ge.useState("/Chaturanga Logo.png"),[Ee,D]=ge.useState(""),[C,N]=ge.useState(""),[O,U]=ge.useState(""),[j,x]=ge.useState(""),[ht,xe]=ge.useState(null);if(!n)return null;const Z=async z=>{z.preventDefault();const ee=await a(B||L,oe);ee.success?(xe({text:ee.message,type:"success"}),setTimeout(e,900)):xe({text:ee.message,type:"error"})},ue=async z=>{z.preventDefault();const ee=await l(L,B,oe,_e);ee.success?(xe({text:ee.message,type:"success"}),setTimeout(e,900)):xe({text:ee.message,type:"error"})},X=async z=>{z.preventDefault();const ee=await c(C,O);ee.success?(xe({text:ee.message,type:"success"}),N(""),U("")):xe({text:ee.message,type:"error"})},ae=async z=>{z.preventDefault();const ee=await f(j);ee.success?(xe({text:ee.message,type:"success"}),x("")):xe({text:ee.message,type:"error"})},P=async()=>{const z=await m();z.success?(xe({text:z.message,type:"success"}),setTimeout(e,900)):xe({text:z.message,type:"error"})},b=async()=>{await g(),xe({text:"Welcome to the Arena, Guest!",type:"success"}),setTimeout(e,900)},M=async z=>{if(z.preventDefault(),!Ee.trim()){xe({text:"Please enter your email.",type:"error"});return}const ee=await v(Ee);ee.success?(xe({text:ee.message,type:"success"}),D(""),setTimeout(()=>R("login"),2e3)):xe({text:ee.message,type:"error"})},H=async()=>{const z=await T();z.success?xe({text:z.message,type:"success"}):xe({text:z.message,type:"error"})};return I.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md",children:I.jsxs("div",{className:"relative w-full max-w-md bg-gradient-to-b from-[#0e172a] to-[#160d24] border border-blue-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(59,130,246,0.3)] overflow-hidden",children:[I.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl pointer-events-none"}),I.jsx("div",{className:"absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"}),I.jsx("button",{onClick:e,className:"absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800/80 transition-colors",children:I.jsx(VV,{size:18})}),I.jsxs("div",{className:"flex border-b border-slate-800 pb-3 mb-6 gap-2",children:[I.jsx("button",{onClick:()=>{R("login"),xe(null)},className:`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${w==="login"||w==="forgot_password"?"bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-md":"text-slate-400 hover:text-slate-200"}`,children:"Login"}),I.jsx("button",{onClick:()=>{R("signup"),xe(null)},className:`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${w==="signup"?"bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-md":"text-slate-400 hover:text-slate-200"}`,children:"Signup"}),I.jsx("button",{onClick:()=>{R("change_email"),xe(null)},className:`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${w==="change_email"?"bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-md":"text-slate-400 hover:text-slate-200"}`,children:"Email Settings"})]}),ht&&I.jsx("div",{className:`mb-4 p-3 rounded-xl text-xs font-semibold ${ht.type==="success"?"bg-emerald-950/70 border border-emerald-500/50 text-emerald-300":"bg-red-950/70 border border-red-500/50 text-red-300"}`,children:ht.text}),w==="login"&&I.jsxs("form",{onSubmit:Z,className:"space-y-4",children:[I.jsxs("div",{children:[I.jsx("label",{className:"block text-xs font-bold text-slate-300 mb-1.5",children:"Username or Email"}),I.jsxs("div",{className:"relative",children:[I.jsx($g,{className:"absolute left-3.5 top-3 text-slate-400",size:16}),I.jsx("input",{type:"text",value:B,onChange:z=>se(z.target.value),placeholder:"arjuna@chaturanga.org or ArjunaWarrior",required:!0,className:"w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0a0f1d] border border-slate-700/80 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors"})]})]}),I.jsxs("div",{children:[I.jsx("label",{className:"block text-xs font-bold text-slate-300 mb-1.5",children:"Password"}),I.jsxs("div",{className:"relative",children:[I.jsx(Bw,{className:"absolute left-3.5 top-3 text-slate-400",size:16}),I.jsx("input",{type:"password",value:oe,onChange:z=>le(z.target.value),placeholder:"••••••••",required:!0,className:"w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0a0f1d] border border-slate-700/80 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors"})]})]}),I.jsx("button",{type:"submit",className:"w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-500 hover:to-red-500 text-white font-bold text-sm shadow-lg shadow-blue-600/20 transition-all active:scale-95 border border-blue-400/30",children:"Sign In to Chaturanga"}),I.jsx("div",{className:"flex justify-between items-center text-xs text-blue-400 mt-2 px-1",children:I.jsx("button",{type:"button",onClick:()=>{R("forgot_password"),xe(null)},className:"hover:underline hover:text-blue-300",children:"Forgot Password?"})}),I.jsxs("div",{className:"relative my-6",children:[I.jsx("div",{className:"absolute inset-0 flex items-center",children:I.jsx("div",{className:"w-full border-t border-slate-800"})}),I.jsx("div",{className:"relative flex justify-center text-xs uppercase",children:I.jsx("span",{className:"bg-[#111827] px-2 text-slate-500 font-bold",children:"Or continue with"})})]}),I.jsxs("button",{type:"button",onClick:P,className:"w-full py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-95 border border-slate-300 shadow-md",children:[I.jsxs("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",children:[I.jsx("path",{fill:"currentColor",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-3.3 3.28-7.81 3.28-12.09z"}),I.jsx("path",{fill:"currentColor",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),I.jsx("path",{fill:"currentColor",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"}),I.jsx("path",{fill:"currentColor",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z"})]}),"Sign in with Google"]}),I.jsxs("button",{type:"button",onClick:b,className:"w-full py-2.5 rounded-xl bg-[#161c2e] hover:bg-[#1e263d] text-blue-300 font-bold text-xs border border-blue-500/30 transition-all flex items-center justify-center gap-2 mt-3",children:[I.jsx(Xg,{size:14}),"Continue as Guest"]})]}),w==="signup"&&I.jsxs("form",{onSubmit:ue,className:"space-y-4",children:[I.jsxs("div",{children:[I.jsx("label",{className:"block text-xs font-bold text-slate-300 mb-1.5",children:"Warrior Name / Handle"}),I.jsxs("div",{className:"relative",children:[I.jsx(Xg,{className:"absolute left-3.5 top-3 text-slate-400",size:16}),I.jsx("input",{type:"text",value:L,onChange:z=>F(z.target.value),placeholder:"e.g. RoyalGrandmaster",required:!0,className:"w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0a0f1d] border border-slate-700/80 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-400"})]})]}),I.jsxs("div",{children:[I.jsx("label",{className:"block text-xs font-bold text-slate-300 mb-1.5",children:"Email Address"}),I.jsxs("div",{className:"relative",children:[I.jsx($g,{className:"absolute left-3.5 top-3 text-slate-400",size:16}),I.jsx("input",{type:"email",value:B,onChange:z=>se(z.target.value),placeholder:"warrior@chaturanga.org",required:!0,className:"w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0a0f1d] border border-slate-700/80 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-400"})]})]}),I.jsxs("div",{children:[I.jsx("label",{className:"block text-xs font-bold text-slate-300 mb-1.5",children:"Choose Password"}),I.jsxs("div",{className:"relative",children:[I.jsx(Bw,{className:"absolute left-3.5 top-3 text-slate-400",size:16}),I.jsx("input",{type:"password",value:oe,onChange:z=>le(z.target.value),placeholder:"Minimum 4 characters",required:!0,className:"w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0a0f1d] border border-slate-700/80 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-400"})]})]}),I.jsxs("div",{children:[I.jsx("label",{className:"block text-xs font-bold text-slate-300 mb-2",children:"Select Avatar"}),I.jsx("div",{className:"flex items-center gap-2 overflow-x-auto pb-2",children:BV.map((z,ee)=>I.jsx("img",{src:z,alt:ee===0?"Chaturanga Logo":`Avatar ${ee}`,onClick:()=>Le(z),className:`w-10 h-10 rounded-xl object-cover cursor-pointer border-2 transition-all ${_e===z?"border-blue-400 scale-110 shadow-md ring-2 ring-blue-400/40":"border-transparent opacity-70 hover:opacity-100"}`},ee))})]}),I.jsx("button",{type:"submit",className:"w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-500 hover:to-red-500 text-white font-bold text-sm shadow-lg shadow-blue-600/20 transition-all active:scale-95 border border-blue-400/30",children:"Create Account & Enter Arena"}),I.jsxs("button",{type:"button",onClick:b,className:"w-full py-2.5 rounded-xl bg-[#161c2e] hover:bg-[#1e263d] text-blue-300 font-bold text-xs border border-blue-500/30 transition-all flex items-center justify-center gap-2 mt-3",children:[I.jsx(Xg,{size:14}),"Continue as Guest"]})]}),w==="change_email"&&I.jsxs("div",{className:"space-y-6",children:[I.jsxs("div",{className:"p-3 rounded-2xl bg-gradient-to-r from-blue-950/40 to-red-950/40 border border-blue-500/30",children:[I.jsxs("div",{className:"flex items-center gap-2 text-xs font-bold text-blue-300 mb-1",children:[I.jsx(IV,{size:16,className:"text-red-400"}),I.jsx("span",{children:"Secure Reversible Email Verification"})]}),I.jsxs("p",{className:"text-[11px] text-slate-300 leading-relaxed",children:["Current Registered Email: ",I.jsx("strong",{className:"text-white font-mono",children:s?.email||"arjuna@chaturanga.org"})]}),s&&!Vn.currentUser?.emailVerified&&I.jsxs("div",{className:"mt-2 flex items-center justify-between bg-amber-500/10 border border-amber-500/30 rounded-lg p-2",children:[I.jsx("span",{className:"text-[10px] text-amber-300 font-bold",children:"Your email is unverified."}),I.jsx("button",{type:"button",onClick:H,className:"text-[9px] font-black uppercase text-amber-400 hover:underline hover:text-amber-300",children:"Resend Verification"})]})]}),I.jsxs("form",{onSubmit:X,className:"space-y-3.5",children:[I.jsxs("h4",{className:"text-xs font-extrabold uppercase tracking-wider text-slate-300 flex items-center gap-1.5",children:[I.jsx(_V,{size:14,className:"text-blue-400"}),"Change to New Email"]}),I.jsxs("div",{children:[I.jsx("label",{className:"block text-[11px] font-bold text-slate-400 mb-1",children:"New Email Address"}),I.jsx("input",{type:"email",value:C,onChange:z=>N(z.target.value),placeholder:"new.email@chaturanga.org",required:!0,className:"w-full px-3.5 py-2 rounded-xl bg-[#0a0f1d] border border-slate-700 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-400"})]}),I.jsxs("div",{children:[I.jsxs("label",{className:"block text-[11px] font-bold text-slate-400 mb-1",children:["Old Email Password ",I.jsx("span",{className:"text-red-400 font-normal",children:"(Required to verify ownership)"})]}),I.jsx("input",{type:"password",value:O,onChange:z=>U(z.target.value),placeholder:"Enter password of current email",required:!0,className:"w-full px-3.5 py-2 rounded-xl bg-[#0a0f1d] border border-slate-700 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-400"})]}),I.jsx("button",{type:"submit",className:"w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-500 hover:to-red-500 text-white font-bold text-xs shadow-md transition-all active:scale-95",children:"Apply New Email with Old Password"})]}),s?.previousEmail&&I.jsxs("form",{onSubmit:ae,className:"pt-4 border-t border-slate-800 space-y-3",children:[I.jsxs("div",{className:"flex items-center justify-between",children:[I.jsxs("h4",{className:"text-xs font-extrabold uppercase tracking-wider text-blue-300 flex items-center gap-1.5",children:[I.jsx(CV,{size:14,className:"text-red-400"}),"Revert to Previous Email"]}),I.jsx("span",{className:"text-[10px] text-slate-400 font-mono",children:s.previousEmail})]}),I.jsxs("div",{children:[I.jsx("label",{className:"block text-[11px] font-bold text-slate-400 mb-1",children:"Current Password to Revert"}),I.jsx("input",{type:"password",value:j,onChange:z=>x(z.target.value),placeholder:"Enter password to restore previous email",required:!0,className:"w-full px-3.5 py-2 rounded-xl bg-[#0a0f1d] border border-slate-700 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-400"})]}),I.jsxs("button",{type:"submit",className:"w-full py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-blue-300 font-bold text-xs border border-blue-500/30 transition-all",children:["Restore Previous Email (",s.previousEmail,")"]})]})]}),w==="forgot_password"&&I.jsxs("form",{onSubmit:M,className:"space-y-4",children:[I.jsxs("div",{children:[I.jsx("label",{className:"block text-xs font-bold text-slate-300 mb-1.5",children:"Registered Email Address"}),I.jsxs("div",{className:"relative",children:[I.jsx($g,{className:"absolute left-3.5 top-3 text-slate-400",size:16}),I.jsx("input",{type:"email",value:Ee,onChange:z=>D(z.target.value),placeholder:"warrior@chaturanga.org",required:!0,className:"w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0a0f1d] border border-slate-700/80 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors"})]})]}),I.jsx("button",{type:"submit",className:"w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-500 hover:to-red-500 text-white font-bold text-sm shadow-lg shadow-blue-600/20 transition-all active:scale-95 border border-blue-400/30",children:"Send Password Reset Link"}),I.jsx("div",{className:"text-center text-xs mt-4",children:I.jsx("button",{type:"button",onClick:()=>{R("login"),xe(null)},className:"text-blue-400 hover:underline",children:"Back to Login"})})]})]})})},jV=()=>I.jsxs("svg",{style:{display:"none"},xmlns:"http://www.w3.org/2000/svg",children:[I.jsxs("symbol",{id:"piece-p",viewBox:"0 0 100 100",children:[I.jsx("path",{d:"M26 84 C30 76 70 76 74 84 L78 88 C78 90 22 90 22 88 Z",strokeWidth:"3.5",strokeLinejoin:"round"}),I.jsx("path",{d:"M35 76 C35 55 42 45 42 38 C42 34 58 34 58 38 C58 45 65 55 65 76 Z",strokeWidth:"3.5"}),I.jsx("ellipse",{cx:"50",cy:"40",rx:"14",ry:"4",strokeWidth:"2.5"}),I.jsx("circle",{cx:"50",cy:"24",r:"14",strokeWidth:"3.5"})]}),I.jsxs("symbol",{id:"piece-r",viewBox:"0 0 100 100",children:[I.jsx("path",{d:"M24 85 C28 78 72 78 76 85 L80 89 C80 92 20 92 20 89 Z",strokeWidth:"3.5",strokeLinejoin:"round"}),I.jsx("path",{d:"M30 78 L34 38 L66 38 L70 78 Z",strokeWidth:"3.5"}),I.jsx("path",{d:"M24 38 L24 20 L34 20 L34 27 L44 27 L44 20 L56 20 L56 27 L66 27 L66 20 L76 20 L76 38 Z",strokeWidth:"3.5",strokeLinejoin:"round"}),I.jsx("rect",{x:"30",y:"38",width:"40",height:"6",strokeWidth:"2.5"})]}),I.jsxs("symbol",{id:"piece-n",viewBox:"0 0 100 100",children:[I.jsx("path",{d:"M24 85 C28 78 72 78 76 85 L80 89 C80 92 20 92 20 89 Z",strokeWidth:"3.5",strokeLinejoin:"round"}),I.jsx("path",{d:"M30 84 C30 68 25 50 32 30 C34 22 40 14 46 12 C47 12 47 16 48 18 C50 16 52 14 55 14 C56 16 55 20 54 22 C62 20 72 23 76 30 C78 34 76 40 70 44 C67 46 64 45 61 44 C68 49 71 56 70 65 C68 74 65 79 68 84 Z",strokeWidth:"3.5",strokeLinejoin:"round"}),I.jsx("path",{d:"M46 12 L49 6 L52 14 Z",strokeWidth:"2.5",strokeLinejoin:"round"}),I.jsx("path",{d:"M52 14 L56 7 L58 16 Z",strokeWidth:"2.5",strokeLinejoin:"round"}),I.jsx("circle",{cx:"62",cy:"27",r:"3.5",fill:"currentColor",stroke:"none"})]}),I.jsxs("symbol",{id:"piece-b",viewBox:"0 0 100 100",children:[I.jsx("path",{d:"M24 85 C28 78 72 78 76 85 L80 89 C80 92 20 92 20 89 Z",strokeWidth:"3.5",strokeLinejoin:"round"}),I.jsx("path",{d:"M32 82 C30 68 26 56 30 42 C33 32 40 22 50 20 C60 22 67 32 70 42 C74 56 70 68 68 82 Z",strokeWidth:"3.5"}),I.jsx("path",{d:"M32 40 C22 36 16 46 18 58 C20 68 28 72 32 68",strokeWidth:"3",strokeLinejoin:"round"}),I.jsx("path",{d:"M68 40 C78 36 84 46 82 58 C80 68 72 72 68 68",strokeWidth:"3",strokeLinejoin:"round"}),I.jsx("path",{d:"M45 46 C45 60 42 70 46 76 C48 80 54 82 58 78 C61 74 59 68 53 68 C50 68 49 71 50 73",fill:"none",strokeWidth:"4.5",strokeLinecap:"round",strokeLinejoin:"round"}),I.jsx("circle",{cx:"41",cy:"35",r:"3.2",fill:"currentColor",stroke:"none"}),I.jsx("circle",{cx:"59",cy:"35",r:"3.2",fill:"currentColor",stroke:"none"})]}),I.jsxs("symbol",{id:"piece-q",viewBox:"0 0 100 100",children:[I.jsx("path",{d:"M22 85 C26 78 74 78 78 85 L82 89 C82 92 18 92 18 89 Z",strokeWidth:"3.5",strokeLinejoin:"round"}),I.jsx("path",{d:"M30 78 L34 50 L66 50 L70 78 Z",strokeWidth:"3.5"}),I.jsx("path",{d:"M20 34 L28 54 L50 42 L72 54 L80 34 L66 48 L50 26 L34 48 Z",strokeWidth:"3.5",strokeLinejoin:"round"}),I.jsx("circle",{cx:"20",cy:"32",r:"4.5",strokeWidth:"2"}),I.jsx("circle",{cx:"50",cy:"24",r:"5.5",strokeWidth:"2.5"}),I.jsx("circle",{cx:"80",cy:"32",r:"4.5",strokeWidth:"2"}),I.jsx("rect",{x:"28",y:"58",width:"44",height:"6",rx:"3",strokeWidth:"2"})]}),I.jsxs("symbol",{id:"piece-k",viewBox:"0 0 100 100",children:[I.jsx("path",{d:"M20 85 C25 78 75 78 80 85 L84 89 C84 92 16 92 16 89 Z",strokeWidth:"3.5",strokeLinejoin:"round"}),I.jsx("path",{d:"M28 78 L32 48 L68 48 L72 78 Z",strokeWidth:"3.5"}),I.jsx("path",{d:"M22 46 L20 26 L36 38 L50 16 L64 38 L80 26 L78 46 Z",strokeWidth:"3.5",strokeLinejoin:"round"}),I.jsx("circle",{cx:"20",cy:"24",r:"4.5",strokeWidth:"2"}),I.jsx("circle",{cx:"36",cy:"36",r:"3.5",strokeWidth:"2"}),I.jsx("circle",{cx:"50",cy:"14",r:"6",strokeWidth:"2.5"}),I.jsx("circle",{cx:"64",cy:"36",r:"3.5",strokeWidth:"2"}),I.jsx("circle",{cx:"80",cy:"24",r:"4.5",strokeWidth:"2"}),I.jsx("rect",{x:"26",y:"52",width:"48",height:"8",rx:"4",strokeWidth:"2.5"})]})]}),qV=ge.lazy(()=>tr(()=>import("./PlayHub-DaF_IJxU.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(n=>({default:n.PlayHub}))),FV=ge.lazy(()=>tr(()=>import("./PuzzleTrainer-D3cKpTTH.js"),__vite__mapDeps([10,1,2,8,11,12,13,6,9])).then(n=>({default:n.PuzzleTrainer}))),HV=ge.lazy(()=>tr(()=>import("./TournamentHub-DSrWWL-B.js"),__vite__mapDeps([14,1,2,15,7,13,16,17,18,8])).then(n=>({default:n.TournamentHub}))),GV=ge.lazy(()=>tr(()=>import("./ClubsAndTeamsHub-Cee_WplS.js"),__vite__mapDeps([19,17,5,11,20,18,21,16,8])).then(n=>({default:n.ClubsAndTeamsHub}))),KV=ge.lazy(()=>tr(()=>import("./FeedbackPage-DEqYBWyW.js"),__vite__mapDeps([22,17,21])).then(n=>({default:n.FeedbackPage}))),QV=ge.lazy(()=>tr(()=>import("./ProfilePage-CSa6f_43.js"),__vite__mapDeps([23,15,1,2,7,3,4,5,6,20,12,8,16])).then(n=>({default:n.ProfilePage}))),WV=ge.lazy(()=>tr(()=>import("./PlayerChat-BwxI1c06.js"),__vite__mapDeps([24,11,21])).then(n=>({default:n.PlayerChat}))),YV=ge.lazy(()=>tr(()=>import("./GeminiChatbot-Cq76AfSx.js"),__vite__mapDeps([25,2,4,8,6,26,21])).then(n=>({default:n.GeminiChatbot}))),$V=ge.lazy(()=>tr(()=>import("./LibraryPage-DQCTyp3L.js"),__vite__mapDeps([27,26])).then(n=>({default:n.LibraryPage}))),jw=["play","puzzles","tournaments","clubs","chat","feedback","profile","library"];function XV(){const n=window.location.hash.replace("#","").toLowerCase();if(jw.includes(n))return n;const e=new URLSearchParams(window.location.search).get("tab");return e&&jw.includes(e)?e:"play"}function ZV(){const{loading:n,setLoading:e,loginAsGuest:t}=Yl(),[s,a]=ge.useState(XV),[l,c]=ge.useState(!1),[f,m]=ge.useState(!1),[g,v]=ge.useState(!1);return ge.useEffect(()=>{const T=setTimeout(()=>{n&&m(!0)},6e3);return()=>clearTimeout(T)},[n]),ge.useEffect(()=>{window.location.hash=s},[s]),ge.useEffect(()=>{if(!n){const T=document.getElementById("initial-splash");T?(T.classList.add("splash-fade-out"),setTimeout(()=>{T.remove(),v(!0)},400)):v(!0)}},[n]),n?I.jsx("div",{className:"min-h-screen bg-[#070a14] flex flex-col items-center justify-center p-6 text-center",children:f&&I.jsxs("div",{className:"animate-in fade-in zoom-in duration-700",children:[I.jsx("p",{className:"text-[10px] text-slate-500 mb-3 italic",children:"Taking longer than usual?"}),I.jsx("button",{onClick:()=>t(),className:"px-6 py-2 rounded-xl bg-white/5 border border-white/10 text-white/40 text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 hover:text-white transition-all cursor-pointer",children:"Skip to Arena (Guest Mode)"})]})}):I.jsxs("div",{className:"min-h-screen bg-[#0a0d14] text-slate-100 flex flex-col selection:bg-amber-500 selection:text-black",children:[I.jsx(jV,{}),I.jsx(UV,{activeTab:s,setActiveTab:a,onOpenAuth:()=>c(!0)}),I.jsxs("main",{className:"flex-1 pb-16 relative",children:[I.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-red-600 to-amber-500 opacity-20"}),I.jsxs(ge.Suspense,{fallback:I.jsxs("div",{className:"flex-1 h-[70vh] flex flex-col items-center justify-center py-20 animate-in fade-in duration-500",children:[I.jsxs("div",{className:"relative",children:[I.jsx("div",{className:"w-16 h-16 border-4 border-slate-800 rounded-full"}),I.jsx("div",{className:"absolute top-0 left-0 w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"})]}),I.jsx("span",{className:"mt-6 text-xs font-black uppercase tracking-[0.2em] text-slate-500 animate-pulse",children:"Initializing Arena..."})]}),children:[s==="play"&&I.jsx(qV,{}),s==="puzzles"&&I.jsx(FV,{}),s==="tournaments"&&I.jsx(HV,{}),s==="clubs"&&I.jsx(GV,{}),s==="feedback"&&I.jsx(KV,{}),s==="chat"&&I.jsx(WV,{}),s==="profile"&&I.jsx(QV,{}),s==="library"&&I.jsx($V,{})]})]}),g&&I.jsx("footer",{className:"border-t border-[#1b2234] bg-[#080b10] py-6 text-center text-xs text-slate-500",children:I.jsxs("div",{className:"max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3",children:[I.jsxs("div",{className:"flex items-center gap-2",children:[I.jsx(B_,{size:16,className:"text-amber-400"}),I.jsx("span",{className:"font-cinzel font-bold text-slate-300",children:"CHATURANGA"}),I.jsx("span",{className:"font-sanskrit text-amber-500/80 font-bold",children:"चतुरङ्गम्"}),I.jsx("span",{children:"— The Ancient Origin of Chess under FIDE Laws"})]}),I.jsx("div",{className:"text-[11px] text-slate-400",children:"v1.0.00• Featuring Elephant Head Bishops & Crown Kings • Elo Rating System • Official Medals"})]})}),l&&I.jsx(zV,{isOpen:l,onClose:()=>c(!1)}),g&&I.jsx(ge.Suspense,{fallback:null,children:I.jsx(YV,{gameMode:s.charAt(0).toUpperCase()+s.slice(1)})})]})}function JV(){return I.jsx(eV,{children:I.jsx(tV,{children:I.jsx(nV,{children:I.jsx(iV,{children:I.jsx(rV,{children:I.jsx(ZV,{})})})})})})}Y2.createRoot(document.getElementById("root")).render(I.jsx(ge.StrictMode,{children:I.jsx(JV,{})}));export{dV as B,B_ as C,mV as F,_V as K,Bw as L,zw as M,q2 as R,PV as S,DV as T,OV as U,VV as X,Ag as a,lU as b,Nn as c,rU as d,aU as e,oU as f,IV as g,K2 as h,z_ as i,I as j,U2 as k,Yn as l,eU as m,$g as n,CV as o,gn as p,ro as q,ge as r,Ce as s,df as t,Yl as u,sU as v,Og as w};
