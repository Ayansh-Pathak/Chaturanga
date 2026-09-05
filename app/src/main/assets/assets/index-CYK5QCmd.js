const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./PlayHub-pDcFQO3a.js","./ChessBoard-BWoV-z8C.js","./ChessPiece-4hQrdRj1.js","./GameReviewModal-E5tCVOOB.js","./apiBase-gSRPCcAp.js","./circle-check-BSM9Set1.js","./rotate-ccw-KxRw4Zyy.js","./zap-XhxFKDj2.js","./sparkles-DZjrBne9.js","./circle-question-mark-BbxIeC7y.js","./PuzzleTrainer-ZFHdlvzm.js","./search-Cq8ybXXo.js","./layers-Bz_z3Cge.js","./circle-check-big-CB5OemGf.js","./TournamentHub-DgcRKmyb.js","./TournamentMedal-1rD0foQx.js","./circle-alert-BhwMtKHw.js","./circle-plus-uTaM0cwb.js","./user-plus-BCWAirT1.js","./ClubsAndTeamsHub-0VOOteQ_.js","./camera-CZOI4-dg.js","./send-CqrL5I7C.js","./FeedbackPage-CKN5Sfa2.js","./ProfilePage-N3fPQ0Pa.js","./PlayerChat-BeLflTes.js","./GeminiChatbot-BZRZr1x8.js","./loader-circle-B83EnDyr.js","./LibraryPage-RBnMq0_y.js"])))=>i.map(i=>d[i]);
function mI(n,e){for(var t=0;t<e.length;t++){const s=e[t];if(typeof s!="string"&&!Array.isArray(s)){for(const a in s)if(a!=="default"&&!(a in n)){const l=Object.getOwnPropertyDescriptor(s,a);l&&Object.defineProperty(n,a,l.get?l:{enumerable:!0,get:()=>s[a]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function gI(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Zm={exports:{}},Ku={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var AE;function _I(){if(AE)return Ku;AE=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var f in a)f!=="key"&&(l[f]=a[f])}else l=a;return a=l.ref,{$$typeof:n,type:s,key:c,ref:a!==void 0?a:null,props:l}}return Ku.Fragment=e,Ku.jsx=t,Ku.jsxs=t,Ku}var CE;function yI(){return CE||(CE=1,Zm.exports=_I()),Zm.exports}var R=yI(),Jm={exports:{}},De={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var RE;function vI(){if(RE)return De;RE=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),S=Symbol.iterator;function P(T){return T===null||typeof T!="object"?null:(T=S&&T[S]||T["@@iterator"],typeof T=="function"?T:null)}var V={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,B={};function re(T,x,j){this.props=T,this.context=x,this.refs=B,this.updater=j||V}re.prototype.isReactComponent={},re.prototype.setState=function(T,x){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,x,"setState")},re.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function oe(){}oe.prototype=re.prototype;function le(T,x,j){this.props=T,this.context=x,this.refs=B,this.updater=j||V}var me=le.prototype=new oe;me.constructor=le,H(me,re.prototype),me.isPureReactComponent=!0;var Me=Array.isArray;function Ee(){}var M={H:null,A:null,T:null,S:null},C=Object.prototype.hasOwnProperty;function I(T,x,j){var z=j.ref;return{$$typeof:n,type:T,key:x,ref:z!==void 0?z:null,props:j}}function O(T,x){return I(T.type,x,T.props)}function U(T){return typeof T=="object"&&T!==null&&T.$$typeof===n}function q(T){var x={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(j){return x[j]})}var D=/\/+/g;function ct(T,x){return typeof T=="object"&&T!==null&&T.key!=null?q(""+T.key):x.toString(36)}function Ne(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(Ee,Ee):(T.status="pending",T.then(function(x){T.status==="pending"&&(T.status="fulfilled",T.value=x)},function(x){T.status==="pending"&&(T.status="rejected",T.reason=x)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function Z(T,x,j,z,X){var se=typeof T;(se==="undefined"||se==="boolean")&&(T=null);var ae=!1;if(T===null)ae=!0;else switch(se){case"bigint":case"string":case"number":ae=!0;break;case"object":switch(T.$$typeof){case n:case e:ae=!0;break;case E:return ae=T._init,Z(ae(T._payload),x,j,z,X)}}if(ae)return X=X(T),ae=z===""?"."+ct(T,0):z,Me(X)?(j="",ae!=null&&(j=ae.replace(D,"$&/")+"/"),Z(X,x,j,"",function(Xe){return Xe})):X!=null&&(U(X)&&(X=O(X,j+(X.key==null||T&&T.key===X.key?"":(""+X.key).replace(D,"$&/")+"/")+ae)),x.push(X)),1;ae=0;var _e=z===""?".":z+":";if(Me(T))for(var we=0;we<T.length;we++)z=T[we],se=_e+ct(z,we),ae+=Z(z,x,j,se,X);else if(we=P(T),typeof we=="function")for(T=we.call(T),we=0;!(z=T.next()).done;)z=z.value,se=_e+ct(z,we++),ae+=Z(z,x,j,se,X);else if(se==="object"){if(typeof T.then=="function")return Z(Ne(T),x,j,z,X);throw x=String(T),Error("Objects are not valid as a React child (found: "+(x==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":x)+"). If you meant to render a collection of children, use an array instead.")}return ae}function ue(T,x,j){if(T==null)return T;var z=[],X=0;return Z(T,z,"","",function(se){return x.call(j,se,X++)}),z}function ve(T){if(T._status===-1){var x=T._result;x=x(),x.then(function(j){(T._status===0||T._status===-1)&&(T._status=1,T._result=j)},function(j){(T._status===0||T._status===-1)&&(T._status=2,T._result=j)}),T._status===-1&&(T._status=0,T._result=x)}if(T._status===1)return T._result.default;throw T._result}var Ue=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var x=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(x))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)},N={map:ue,forEach:function(T,x,j){ue(T,function(){x.apply(this,arguments)},j)},count:function(T){var x=0;return ue(T,function(){x++}),x},toArray:function(T){return ue(T,function(x){return x})||[]},only:function(T){if(!U(T))throw Error("React.Children.only expected to receive a single React element child.");return T}};return De.Activity=b,De.Children=N,De.Component=re,De.Fragment=t,De.Profiler=a,De.PureComponent=le,De.StrictMode=s,De.Suspense=m,De.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=M,De.__COMPILER_RUNTIME={__proto__:null,c:function(T){return M.H.useMemoCache(T)}},De.cache=function(T){return function(){return T.apply(null,arguments)}},De.cacheSignal=function(){return null},De.cloneElement=function(T,x,j){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var z=H({},T.props),X=T.key;if(x!=null)for(se in x.key!==void 0&&(X=""+x.key),x)!C.call(x,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&x.ref===void 0||(z[se]=x[se]);var se=arguments.length-2;if(se===1)z.children=j;else if(1<se){for(var ae=Array(se),_e=0;_e<se;_e++)ae[_e]=arguments[_e+2];z.children=ae}return I(T.type,X,z)},De.createContext=function(T){return T={$$typeof:c,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:l,_context:T},T},De.createElement=function(T,x,j){var z,X={},se=null;if(x!=null)for(z in x.key!==void 0&&(se=""+x.key),x)C.call(x,z)&&z!=="key"&&z!=="__self"&&z!=="__source"&&(X[z]=x[z]);var ae=arguments.length-2;if(ae===1)X.children=j;else if(1<ae){for(var _e=Array(ae),we=0;we<ae;we++)_e[we]=arguments[we+2];X.children=_e}if(T&&T.defaultProps)for(z in ae=T.defaultProps,ae)X[z]===void 0&&(X[z]=ae[z]);return I(T,se,X)},De.createRef=function(){return{current:null}},De.forwardRef=function(T){return{$$typeof:f,render:T}},De.isValidElement=U,De.lazy=function(T){return{$$typeof:E,_payload:{_status:-1,_result:T},_init:ve}},De.memo=function(T,x){return{$$typeof:g,type:T,compare:x===void 0?null:x}},De.startTransition=function(T){var x=M.T,j={};M.T=j;try{var z=T(),X=M.S;X!==null&&X(j,z),typeof z=="object"&&z!==null&&typeof z.then=="function"&&z.then(Ee,Ue)}catch(se){Ue(se)}finally{x!==null&&j.types!==null&&(x.types=j.types),M.T=x}},De.unstable_useCacheRefresh=function(){return M.H.useCacheRefresh()},De.use=function(T){return M.H.use(T)},De.useActionState=function(T,x,j){return M.H.useActionState(T,x,j)},De.useCallback=function(T,x){return M.H.useCallback(T,x)},De.useContext=function(T){return M.H.useContext(T)},De.useDebugValue=function(){},De.useDeferredValue=function(T,x){return M.H.useDeferredValue(T,x)},De.useEffect=function(T,x){return M.H.useEffect(T,x)},De.useEffectEvent=function(T){return M.H.useEffectEvent(T)},De.useId=function(){return M.H.useId()},De.useImperativeHandle=function(T,x,j){return M.H.useImperativeHandle(T,x,j)},De.useInsertionEffect=function(T,x){return M.H.useInsertionEffect(T,x)},De.useLayoutEffect=function(T,x){return M.H.useLayoutEffect(T,x)},De.useMemo=function(T,x){return M.H.useMemo(T,x)},De.useOptimistic=function(T,x){return M.H.useOptimistic(T,x)},De.useReducer=function(T,x,j){return M.H.useReducer(T,x,j)},De.useRef=function(T){return M.H.useRef(T)},De.useState=function(T){return M.H.useState(T)},De.useSyncExternalStore=function(T,x,j){return M.H.useSyncExternalStore(T,x,j)},De.useTransition=function(){return M.H.useTransition()},De.version="19.2.8",De}var IE;function w_(){return IE||(IE=1,Jm.exports=vI()),Jm.exports}var pe=w_();const EI=gI(pe),aV=mI({__proto__:null,default:EI},[pe]);var eg={exports:{}},Qu={},tg={exports:{}},ng={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var NE;function TI(){return NE||(NE=1,(function(n){function e(Z,ue){var ve=Z.length;Z.push(ue);e:for(;0<ve;){var Ue=ve-1>>>1,N=Z[Ue];if(0<a(N,ue))Z[Ue]=ue,Z[ve]=N,ve=Ue;else break e}}function t(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var ue=Z[0],ve=Z.pop();if(ve!==ue){Z[0]=ve;e:for(var Ue=0,N=Z.length,T=N>>>1;Ue<T;){var x=2*(Ue+1)-1,j=Z[x],z=x+1,X=Z[z];if(0>a(j,ve))z<N&&0>a(X,j)?(Z[Ue]=X,Z[z]=ve,Ue=z):(Z[Ue]=j,Z[x]=ve,Ue=x);else if(z<N&&0>a(X,ve))Z[Ue]=X,Z[z]=ve,Ue=z;else break e}}return ue}function a(Z,ue){var ve=Z.sortIndex-ue.sortIndex;return ve!==0?ve:Z.id-ue.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();n.unstable_now=function(){return c.now()-f}}var m=[],g=[],E=1,b=null,S=3,P=!1,V=!1,H=!1,B=!1,re=typeof setTimeout=="function"?setTimeout:null,oe=typeof clearTimeout=="function"?clearTimeout:null,le=typeof setImmediate<"u"?setImmediate:null;function me(Z){for(var ue=t(g);ue!==null;){if(ue.callback===null)s(g);else if(ue.startTime<=Z)s(g),ue.sortIndex=ue.expirationTime,e(m,ue);else break;ue=t(g)}}function Me(Z){if(H=!1,me(Z),!V)if(t(m)!==null)V=!0,Ee||(Ee=!0,q());else{var ue=t(g);ue!==null&&Ne(Me,ue.startTime-Z)}}var Ee=!1,M=-1,C=5,I=-1;function O(){return B?!0:!(n.unstable_now()-I<C)}function U(){if(B=!1,Ee){var Z=n.unstable_now();I=Z;var ue=!0;try{e:{V=!1,H&&(H=!1,oe(M),M=-1),P=!0;var ve=S;try{t:{for(me(Z),b=t(m);b!==null&&!(b.expirationTime>Z&&O());){var Ue=b.callback;if(typeof Ue=="function"){b.callback=null,S=b.priorityLevel;var N=Ue(b.expirationTime<=Z);if(Z=n.unstable_now(),typeof N=="function"){b.callback=N,me(Z),ue=!0;break t}b===t(m)&&s(m),me(Z)}else s(m);b=t(m)}if(b!==null)ue=!0;else{var T=t(g);T!==null&&Ne(Me,T.startTime-Z),ue=!1}}break e}finally{b=null,S=ve,P=!1}ue=void 0}}finally{ue?q():Ee=!1}}}var q;if(typeof le=="function")q=function(){le(U)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,ct=D.port2;D.port1.onmessage=U,q=function(){ct.postMessage(null)}}else q=function(){re(U,0)};function Ne(Z,ue){M=re(function(){Z(n.unstable_now())},ue)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(Z){Z.callback=null},n.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<Z?Math.floor(1e3/Z):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_next=function(Z){switch(S){case 1:case 2:case 3:var ue=3;break;default:ue=S}var ve=S;S=ue;try{return Z()}finally{S=ve}},n.unstable_requestPaint=function(){B=!0},n.unstable_runWithPriority=function(Z,ue){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var ve=S;S=Z;try{return ue()}finally{S=ve}},n.unstable_scheduleCallback=function(Z,ue,ve){var Ue=n.unstable_now();switch(typeof ve=="object"&&ve!==null?(ve=ve.delay,ve=typeof ve=="number"&&0<ve?Ue+ve:Ue):ve=Ue,Z){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=ve+N,Z={id:E++,callback:ue,priorityLevel:Z,startTime:ve,expirationTime:N,sortIndex:-1},ve>Ue?(Z.sortIndex=ve,e(g,Z),t(m)===null&&Z===t(g)&&(H?(oe(M),M=-1):H=!0,Ne(Me,ve-Ue))):(Z.sortIndex=N,e(m,Z),V||P||(V=!0,Ee||(Ee=!0,q()))),Z},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(Z){var ue=S;return function(){var ve=S;S=ue;try{return Z.apply(this,arguments)}finally{S=ve}}}})(ng)),ng}var PE;function bI(){return PE||(PE=1,tg.exports=TI()),tg.exports}var ig={exports:{}},En={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xE;function wI(){if(xE)return En;xE=1;var n=w_();function e(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)g+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(m,g,E){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:b==null?null:""+b,children:m,containerInfo:g,implementation:E}}var c=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return En.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,En.createPortal=function(m,g){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(m,g,null,E)},En.flushSync=function(m){var g=c.T,E=s.p;try{if(c.T=null,s.p=2,m)return m()}finally{c.T=g,s.p=E,s.d.f()}},En.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(m,g))},En.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},En.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var E=g.as,b=f(E,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,P=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;E==="style"?s.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:b,integrity:S,fetchPriority:P}):E==="script"&&s.d.X(m,{crossOrigin:b,integrity:S,fetchPriority:P,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},En.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var E=f(g.as,g.crossOrigin);s.d.M(m,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(m)},En.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var E=g.as,b=f(E,g.crossOrigin);s.d.L(m,E,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},En.preloadModule=function(m,g){if(typeof m=="string")if(g){var E=f(g.as,g.crossOrigin);s.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(m)},En.requestFormReset=function(m){s.d.r(m)},En.unstable_batchedUpdates=function(m,g){return m(g)},En.useFormState=function(m,g,E){return c.H.useFormState(m,g,E)},En.useFormStatus=function(){return c.H.useHostTransitionStatus()},En.version="19.2.8",En}var DE;function SI(){if(DE)return ig.exports;DE=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),ig.exports=wI(),ig.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kE;function AI(){if(kE)return Qu;kE=1;var n=bI(),e=w_(),t=SI();function s(i){var r="https://react.dev/errors/"+i;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+i+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function l(i){var r=i,o=i;if(i.alternate)for(;r.return;)r=r.return;else{i=r;do r=i,(r.flags&4098)!==0&&(o=r.return),i=r.return;while(i)}return r.tag===3?o:null}function c(i){if(i.tag===13){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function f(i){if(i.tag===31){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function m(i){if(l(i)!==i)throw Error(s(188))}function g(i){var r=i.alternate;if(!r){if(r=l(i),r===null)throw Error(s(188));return r!==i?null:i}for(var o=i,u=r;;){var d=o.return;if(d===null)break;var p=d.alternate;if(p===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===o)return m(d),i;if(p===u)return m(d),r;p=p.sibling}throw Error(s(188))}if(o.return!==u.return)o=d,u=p;else{for(var y=!1,w=d.child;w;){if(w===o){y=!0,o=d,u=p;break}if(w===u){y=!0,u=d,o=p;break}w=w.sibling}if(!y){for(w=p.child;w;){if(w===o){y=!0,o=p,u=d;break}if(w===u){y=!0,u=p,o=d;break}w=w.sibling}if(!y)throw Error(s(189))}}if(o.alternate!==u)throw Error(s(190))}if(o.tag!==3)throw Error(s(188));return o.stateNode.current===o?i:r}function E(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i;for(i=i.child;i!==null;){if(r=E(i),r!==null)return r;i=i.sibling}return null}var b=Object.assign,S=Symbol.for("react.element"),P=Symbol.for("react.transitional.element"),V=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),re=Symbol.for("react.profiler"),oe=Symbol.for("react.consumer"),le=Symbol.for("react.context"),me=Symbol.for("react.forward_ref"),Me=Symbol.for("react.suspense"),Ee=Symbol.for("react.suspense_list"),M=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),U=Symbol.iterator;function q(i){return i===null||typeof i!="object"?null:(i=U&&i[U]||i["@@iterator"],typeof i=="function"?i:null)}var D=Symbol.for("react.client.reference");function ct(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===D?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case H:return"Fragment";case re:return"Profiler";case B:return"StrictMode";case Me:return"Suspense";case Ee:return"SuspenseList";case I:return"Activity"}if(typeof i=="object")switch(i.$$typeof){case V:return"Portal";case le:return i.displayName||"Context";case oe:return(i._context.displayName||"Context")+".Consumer";case me:var r=i.render;return i=i.displayName,i||(i=r.displayName||r.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case M:return r=i.displayName||null,r!==null?r:ct(i.type)||"Memo";case C:r=i._payload,i=i._init;try{return ct(i(r))}catch{}}return null}var Ne=Array.isArray,Z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ve={pending:!1,data:null,method:null,action:null},Ue=[],N=-1;function T(i){return{current:i}}function x(i){0>N||(i.current=Ue[N],Ue[N]=null,N--)}function j(i,r){N++,Ue[N]=i.current,i.current=r}var z=T(null),X=T(null),se=T(null),ae=T(null);function _e(i,r){switch(j(se,r),j(X,i),j(z,null),r.nodeType){case 9:case 11:i=(i=r.documentElement)&&(i=i.namespaceURI)?W1(i):0;break;default:if(i=r.tagName,r=r.namespaceURI)r=W1(r),i=Y1(r,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}x(z),j(z,i)}function we(){x(z),x(X),x(se)}function Xe(i){i.memoizedState!==null&&j(ae,i);var r=z.current,o=Y1(r,i.type);r!==o&&(j(X,i),j(z,o))}function Ke(i){X.current===i&&(x(z),x(X)),ae.current===i&&(x(ae),qu._currentValue=ve)}var rt,St;function Pe(i){if(rt===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);rt=r&&r[1]||"",St=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+rt+i+St}var Ct=!1;function Zt(i,r){if(!i||Ct)return"";Ct=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(r){var ne=function(){throw Error()};if(Object.defineProperty(ne.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ne,[])}catch(Y){var W=Y}Reflect.construct(i,[],ne)}else{try{ne.call()}catch(Y){W=Y}i.call(ne.prototype)}}else{try{throw Error()}catch(Y){W=Y}(ne=i())&&typeof ne.catch=="function"&&ne.catch(function(){})}}catch(Y){if(Y&&W&&typeof Y.stack=="string")return[Y.stack,W.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=u.DetermineComponentFrameRoot(),y=p[0],w=p[1];if(y&&w){var k=y.split(`
`),Q=w.split(`
`);for(d=u=0;u<k.length&&!k[u].includes("DetermineComponentFrameRoot");)u++;for(;d<Q.length&&!Q[d].includes("DetermineComponentFrameRoot");)d++;if(u===k.length||d===Q.length)for(u=k.length-1,d=Q.length-1;1<=u&&0<=d&&k[u]!==Q[d];)d--;for(;1<=u&&0<=d;u--,d--)if(k[u]!==Q[d]){if(u!==1||d!==1)do if(u--,d--,0>d||k[u]!==Q[d]){var J=`
`+k[u].replace(" at new "," at ");return i.displayName&&J.includes("<anonymous>")&&(J=J.replace("<anonymous>",i.displayName)),J}while(1<=u&&0<=d);break}}}finally{Ct=!1,Error.prepareStackTrace=o}return(o=i?i.displayName||i.name:"")?Pe(o):""}function Pn(i,r){switch(i.tag){case 26:case 27:case 5:return Pe(i.type);case 16:return Pe("Lazy");case 13:return i.child!==r&&r!==null?Pe("Suspense Fallback"):Pe("Suspense");case 19:return Pe("SuspenseList");case 0:case 15:return Zt(i.type,!1);case 11:return Zt(i.type.render,!1);case 1:return Zt(i.type,!0);case 31:return Pe("Activity");default:return""}}function zn(i){try{var r="",o=null;do r+=Pn(i,o),o=i,i=i.return;while(i);return r}catch(u){return`
Error generating stack: `+u.message+`
`+u.stack}}var jn=Object.prototype.hasOwnProperty,Jt=n.unstable_scheduleCallback,ar=n.unstable_cancelCallback,Kl=n.unstable_shouldYield,Ta=n.unstable_requestPaint,Ut=n.unstable_now,bo=n.unstable_getCurrentPriorityLevel,Rt=n.unstable_ImmediatePriority,Bt=n.unstable_UserBlockingPriority,Pi=n.unstable_NormalPriority,ba=n.unstable_LowPriority,or=n.unstable_IdlePriority,wa=n.log,_s=n.unstable_setDisableYieldValue,Qi=null,yn=null;function fi(i){if(typeof wa=="function"&&_s(i),yn&&typeof yn.setStrictMode=="function")try{yn.setStrictMode(Qi,i)}catch{}}var xn=Math.clz32?Math.clz32:Kc,Zf=Math.log,Ql=Math.LN2;function Kc(i){return i>>>=0,i===0?32:31-(Zf(i)/Ql|0)|0}var Sa=256,Wi=262144,lr=4194304;function xi(i){var r=i&42;if(r!==0)return r;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return i&261888;case 262144:case 524288:case 1048576:case 2097152:return i&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function pi(i,r,o){var u=i.pendingLanes;if(u===0)return 0;var d=0,p=i.suspendedLanes,y=i.pingedLanes;i=i.warmLanes;var w=u&134217727;return w!==0?(u=w&~p,u!==0?d=xi(u):(y&=w,y!==0?d=xi(y):o||(o=w&~i,o!==0&&(d=xi(o))))):(w=u&~p,w!==0?d=xi(w):y!==0?d=xi(y):o||(o=u&~i,o!==0&&(d=xi(o)))),d===0?0:r!==0&&r!==d&&(r&p)===0&&(p=d&-d,o=r&-r,p>=o||p===32&&(o&4194048)!==0)?r:d}function ur(i,r){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&r)===0}function wo(i,r){switch(i){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wl(){var i=lr;return lr<<=1,(lr&62914560)===0&&(lr=4194304),i}function ys(i){for(var r=[],o=0;31>o;o++)r.push(i);return r}function cr(i,r){i.pendingLanes|=r,r!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function ln(i,r,o,u,d,p){var y=i.pendingLanes;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=o,i.entangledLanes&=o,i.errorRecoveryDisabledLanes&=o,i.shellSuspendCounter=0;var w=i.entanglements,k=i.expirationTimes,Q=i.hiddenUpdates;for(o=y&~o;0<o;){var J=31-xn(o),ne=1<<J;w[J]=0,k[J]=-1;var W=Q[J];if(W!==null)for(Q[J]=null,J=0;J<W.length;J++){var Y=W[J];Y!==null&&(Y.lane&=-536870913)}o&=~ne}u!==0&&Yl(i,u,0),p!==0&&d===0&&i.tag!==0&&(i.suspendedLanes|=p&~(y&~r))}function Yl(i,r,o){i.pendingLanes|=r,i.suspendedLanes&=~r;var u=31-xn(r);i.entangledLanes|=r,i.entanglements[u]=i.entanglements[u]|1073741824|o&261930}function hr(i,r){var o=i.entangledLanes|=r;for(i=i.entanglements;o;){var u=31-xn(o),d=1<<u;d&r|i[u]&r&&(i[u]|=r),o&=~d}}function dr(i,r){var o=r&-r;return o=(o&42)!==0?1:$l(o),(o&(i.suspendedLanes|r))!==0?0:o}function $l(i){switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=128;break;case 268435456:i=134217728;break;default:i=0}return i}function Xl(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function vs(){var i=ue.p;return i!==0?i:(i=window.event,i===void 0?32:yE(i.type))}function Qc(i,r){var o=ue.p;try{return ue.p=i,r()}finally{ue.p=o}}var Yi=Math.random().toString(36).slice(2),It="__reactFiber$"+Yi,un="__reactProps$"+Yi,$i="__reactContainer$"+Yi,fr="__reactEvents$"+Yi,Xi="__reactListeners$"+Yi,Wc="__reactHandles$"+Yi,Zl="__reactResources$"+Yi,Es="__reactMarker$"+Yi;function Aa(i){delete i[It],delete i[un],delete i[fr],delete i[Xi],delete i[Wc]}function Ts(i){var r=i[It];if(r)return r;for(var o=i.parentNode;o;){if(r=o[$i]||o[It]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(i=nE(i);i!==null;){if(o=i[It])return o;i=nE(i)}return r}i=o,o=i.parentNode}return null}function bs(i){if(i=i[It]||i[$i]){var r=i.tag;if(r===5||r===6||r===13||r===31||r===26||r===27||r===3)return i}return null}function Ca(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i.stateNode;throw Error(s(33))}function Di(i){var r=i[Zl];return r||(r=i[Zl]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function kt(i){i[Es]=!0}var So=new Set,pr={};function Dn(i,r){Zi(i,r),Zi(i+"Capture",r)}function Zi(i,r){for(pr[i]=r,i=0;i<r.length;i++)So.add(r[i])}var Jf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Jl={},eu={};function Yc(i){return jn.call(eu,i)?!0:jn.call(Jl,i)?!1:Jf.test(i)?eu[i]=!0:(Jl[i]=!0,!1)}function mr(i,r,o){if(Yc(r))if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":i.removeAttribute(r);return;case"boolean":var u=r.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){i.removeAttribute(r);return}}i.setAttribute(r,""+o)}}function gr(i,r,o){if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(r);return}i.setAttribute(r,""+o)}}function mi(i,r,o,u){if(u===null)i.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(o);return}i.setAttributeNS(r,o,""+u)}}function kn(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function $c(i){var r=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function ep(i,r,o){var u=Object.getOwnPropertyDescriptor(i.constructor.prototype,r);if(!i.hasOwnProperty(r)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var d=u.get,p=u.set;return Object.defineProperty(i,r,{configurable:!0,get:function(){return d.call(this)},set:function(y){o=""+y,p.call(this,y)}}),Object.defineProperty(i,r,{enumerable:u.enumerable}),{getValue:function(){return o},setValue:function(y){o=""+y},stopTracking:function(){i._valueTracker=null,delete i[r]}}}}function Ao(i){if(!i._valueTracker){var r=$c(i)?"checked":"value";i._valueTracker=ep(i,r,""+i[r])}}function tu(i){if(!i)return!1;var r=i._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return i&&(u=$c(i)?i.checked?"true":"false":i.value),i=u,i!==o?(r.setValue(i),!0):!1}function Co(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var ws=/[\n"\\]/g;function Nt(i){return i.replace(ws,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function _r(i,r,o,u,d,p,y,w){i.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?i.type=y:i.removeAttribute("type"),r!=null?y==="number"?(r===0&&i.value===""||i.value!=r)&&(i.value=""+kn(r)):i.value!==""+kn(r)&&(i.value=""+kn(r)):y!=="submit"&&y!=="reset"||i.removeAttribute("value"),r!=null?Ro(i,y,kn(r)):o!=null?Ro(i,y,kn(o)):u!=null&&i.removeAttribute("value"),d==null&&p!=null&&(i.defaultChecked=!!p),d!=null&&(i.checked=d&&typeof d!="function"&&typeof d!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?i.name=""+kn(w):i.removeAttribute("name")}function Ra(i,r,o,u,d,p,y,w){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(i.type=p),r!=null||o!=null){if(!(p!=="submit"&&p!=="reset"||r!=null)){Ao(i);return}o=o!=null?""+kn(o):"",r=r!=null?""+kn(r):o,w||r===i.value||(i.value=r),i.defaultValue=r}u=u??d,u=typeof u!="function"&&typeof u!="symbol"&&!!u,i.checked=w?i.checked:!!u,i.defaultChecked=!!u,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(i.name=y),Ao(i)}function Ro(i,r,o){r==="number"&&Co(i.ownerDocument)===i||i.defaultValue===""+o||(i.defaultValue=""+o)}function Ze(i,r,o,u){if(i=i.options,r){r={};for(var d=0;d<o.length;d++)r["$"+o[d]]=!0;for(o=0;o<i.length;o++)d=r.hasOwnProperty("$"+i[o].value),i[o].selected!==d&&(i[o].selected=d),d&&u&&(i[o].defaultSelected=!0)}else{for(o=""+kn(o),r=null,d=0;d<i.length;d++){if(i[d].value===o){i[d].selected=!0,u&&(i[d].defaultSelected=!0);return}r!==null||i[d].disabled||(r=i[d])}r!==null&&(r.selected=!0)}}function Ia(i,r,o){if(r!=null&&(r=""+kn(r),r!==i.value&&(i.value=r),o==null)){i.defaultValue!==r&&(i.defaultValue=r);return}i.defaultValue=o!=null?""+kn(o):""}function yr(i,r,o,u){if(r==null){if(u!=null){if(o!=null)throw Error(s(92));if(Ne(u)){if(1<u.length)throw Error(s(93));u=u[0]}o=u}o==null&&(o=""),r=o}o=kn(r),i.defaultValue=o,u=i.textContent,u===o&&u!==""&&u!==null&&(i.value=u),Ao(i)}function gi(i,r){if(r){var o=i.firstChild;if(o&&o===i.lastChild&&o.nodeType===3){o.nodeValue=r;return}}i.textContent=r}var tp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function nu(i,r,o){var u=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?i.setProperty(r,""):r==="float"?i.cssFloat="":i[r]="":u?i.setProperty(r,o):typeof o!="number"||o===0||tp.has(r)?r==="float"?i.cssFloat=o:i[r]=(""+o).trim():i[r]=o+"px"}function Xc(i,r,o){if(r!=null&&typeof r!="object")throw Error(s(62));if(i=i.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||r!=null&&r.hasOwnProperty(u)||(u.indexOf("--")===0?i.setProperty(u,""):u==="float"?i.cssFloat="":i[u]="");for(var d in r)u=r[d],r.hasOwnProperty(d)&&o[d]!==u&&nu(i,d,u)}else for(var p in r)r.hasOwnProperty(p)&&nu(i,p,r[p])}function iu(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var np=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ip=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ji(i){return ip.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}function en(){}var Io=null;function No(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Ss=null,ni=null;function Zc(i){var r=bs(i);if(r&&(i=r.stateNode)){var o=i[un]||null;e:switch(i=r.stateNode,r.type){case"input":if(_r(i,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=i;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Nt(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==i&&u.form===i.form){var d=u[un]||null;if(!d)throw Error(s(90));_r(u,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(r=0;r<o.length;r++)u=o[r],u.form===i.form&&tu(u)}break e;case"textarea":Ia(i,o.value,o.defaultValue);break e;case"select":r=o.value,r!=null&&Ze(i,!!o.multiple,r,!1)}}}var su=!1;function Jc(i,r,o){if(su)return i(r,o);su=!0;try{var u=i(r);return u}finally{if(su=!1,(Ss!==null||ni!==null)&&(Yh(),Ss&&(r=Ss,i=ni,ni=Ss=null,Zc(r),i)))for(r=0;r<i.length;r++)Zc(i[r])}}function qn(i,r){var o=i.stateNode;if(o===null)return null;var u=o[un]||null;if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(i=i.type,u=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!u;break e;default:i=!1}if(i)return null;if(o&&typeof o!="function")throw Error(s(231,r,typeof o));return o}var ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ru=!1;if(ki)try{var es={};Object.defineProperty(es,"passive",{get:function(){ru=!0}}),window.addEventListener("test",es,es),window.removeEventListener("test",es,es)}catch{ru=!1}var ii=null,Po=null,ts=null;function vr(){if(ts)return ts;var i,r=Po,o=r.length,u,d="value"in ii?ii.value:ii.textContent,p=d.length;for(i=0;i<o&&r[i]===d[i];i++);var y=o-i;for(u=1;u<=y&&r[o-u]===d[p-u];u++);return ts=d.slice(i,1<u?1-u:void 0)}function Na(i){var r=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&r===13&&(i=13)):i=r,i===10&&(i=13),32<=i||i===13?i:0}function Er(){return!0}function yt(){return!1}function vn(i){function r(o,u,d,p,y){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=p,this.target=y,this.currentTarget=null;for(var w in i)i.hasOwnProperty(w)&&(o=i[w],this[w]=o?o(p):p[w]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Er:yt,this.isPropagationStopped=yt,this}return b(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Er)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Er)},persist:function(){},isPersistent:Er}),r}var As={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pa=vn(As),Tr=b({},As,{view:0,detail:0}),eh=vn(Tr),br,xo,Mn,xa=b({},Tr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sr,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Mn&&(Mn&&i.type==="mousemove"?(br=i.screenX-Mn.screenX,xo=i.screenY-Mn.screenY):xo=br=0,Mn=i),br)},movementY:function(i){return"movementY"in i?i.movementY:xo}}),th=vn(xa),Da=b({},xa,{dataTransfer:0}),nh=vn(Da),au=b({},Tr,{relatedTarget:0}),wr=vn(au),ih=b({},As,{animationName:0,elapsedTime:0,pseudoElement:0}),Do=vn(ih),sp=b({},As,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),sh=vn(sp),ka=b({},As,{data:0}),ou=vn(ka),rh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ah(i){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(i):(i=uu[i])?!!r[i]:!1}function Sr(){return ah}var oh=b({},Tr,{key:function(i){if(i.key){var r=rh[i.key]||i.key;if(r!=="Unidentified")return r}return i.type==="keypress"?(i=Na(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?lu[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sr,charCode:function(i){return i.type==="keypress"?Na(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Na(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),lh=vn(oh),Cs=b({},xa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cu=vn(Cs),uh=b({},Tr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sr}),ch=vn(uh),hh=b({},As,{propertyName:0,elapsedTime:0,pseudoElement:0}),ko=vn(hh),On=b({},xa,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),dh=vn(On),fh=b({},As,{newState:0,oldState:0}),Ar=vn(fh),h=[9,13,27,32],_=ki&&"CompositionEvent"in window,v=null;ki&&"documentMode"in document&&(v=document.documentMode);var A=ki&&"TextEvent"in window&&!v,G=ki&&(!_||v&&8<v&&11>=v),$=" ",ce=!1;function at(i,r){switch(i){case"keyup":return h.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zt(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Le=!1;function tn(i,r){switch(i){case"compositionend":return zt(r);case"keypress":return r.which!==32?null:(ce=!0,$);case"textInput":return i=r.data,i===$&&ce?null:i;default:return null}}function nn(i,r){if(Le)return i==="compositionend"||!_&&at(i,r)?(i=vr(),ts=Po=ii=null,Le=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return G&&r.locale!=="ko"?null:r.data;default:return null}}var Cr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fn(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r==="input"?!!Cr[i.type]:r==="textarea"}function Ma(i,r,o,u){Ss?ni?ni.push(u):ni=[u]:Ss=u,r=nd(r,"onChange"),0<r.length&&(o=new Pa("onChange","change",null,o,u),i.push({event:o,listeners:r}))}var Rs=null,hu=null;function qR(i){q1(i,0)}function ph(i){var r=Ca(i);if(tu(r))return i}function ov(i,r){if(i==="change")return r}var lv=!1;if(ki){var rp;if(ki){var ap="oninput"in document;if(!ap){var uv=document.createElement("div");uv.setAttribute("oninput","return;"),ap=typeof uv.oninput=="function"}rp=ap}else rp=!1;lv=rp&&(!document.documentMode||9<document.documentMode)}function cv(){Rs&&(Rs.detachEvent("onpropertychange",hv),hu=Rs=null)}function hv(i){if(i.propertyName==="value"&&ph(hu)){var r=[];Ma(r,hu,i,No(i)),Jc(qR,r)}}function FR(i,r,o){i==="focusin"?(cv(),Rs=r,hu=o,Rs.attachEvent("onpropertychange",hv)):i==="focusout"&&cv()}function HR(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return ph(hu)}function GR(i,r){if(i==="click")return ph(r)}function KR(i,r){if(i==="input"||i==="change")return ph(r)}function QR(i,r){return i===r&&(i!==0||1/i===1/r)||i!==i&&r!==r}var si=typeof Object.is=="function"?Object.is:QR;function du(i,r){if(si(i,r))return!0;if(typeof i!="object"||i===null||typeof r!="object"||r===null)return!1;var o=Object.keys(i),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!jn.call(r,d)||!si(i[d],r[d]))return!1}return!0}function dv(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function fv(i,r){var o=dv(i);i=0;for(var u;o;){if(o.nodeType===3){if(u=i+o.textContent.length,i<=r&&u>=r)return{node:o,offset:r-i};i=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=dv(o)}}function pv(i,r){return i&&r?i===r?!0:i&&i.nodeType===3?!1:r&&r.nodeType===3?pv(i,r.parentNode):"contains"in i?i.contains(r):i.compareDocumentPosition?!!(i.compareDocumentPosition(r)&16):!1:!1}function mv(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var r=Co(i.document);r instanceof i.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)i=r.contentWindow;else break;r=Co(i.document)}return r}function op(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r&&(r==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||r==="textarea"||i.contentEditable==="true")}var WR=ki&&"documentMode"in document&&11>=document.documentMode,Mo=null,lp=null,fu=null,up=!1;function gv(i,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;up||Mo==null||Mo!==Co(u)||(u=Mo,"selectionStart"in u&&op(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),fu&&du(fu,u)||(fu=u,u=nd(lp,"onSelect"),0<u.length&&(r=new Pa("onSelect","select",null,r,o),i.push({event:r,listeners:u}),r.target=Mo)))}function Oa(i,r){var o={};return o[i.toLowerCase()]=r.toLowerCase(),o["Webkit"+i]="webkit"+r,o["Moz"+i]="moz"+r,o}var Oo={animationend:Oa("Animation","AnimationEnd"),animationiteration:Oa("Animation","AnimationIteration"),animationstart:Oa("Animation","AnimationStart"),transitionrun:Oa("Transition","TransitionRun"),transitionstart:Oa("Transition","TransitionStart"),transitioncancel:Oa("Transition","TransitionCancel"),transitionend:Oa("Transition","TransitionEnd")},cp={},_v={};ki&&(_v=document.createElement("div").style,"AnimationEvent"in window||(delete Oo.animationend.animation,delete Oo.animationiteration.animation,delete Oo.animationstart.animation),"TransitionEvent"in window||delete Oo.transitionend.transition);function La(i){if(cp[i])return cp[i];if(!Oo[i])return i;var r=Oo[i],o;for(o in r)if(r.hasOwnProperty(o)&&o in _v)return cp[i]=r[o];return i}var yv=La("animationend"),vv=La("animationiteration"),Ev=La("animationstart"),YR=La("transitionrun"),$R=La("transitionstart"),XR=La("transitioncancel"),Tv=La("transitionend"),bv=new Map,hp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hp.push("scrollEnd");function Mi(i,r){bv.set(i,r),Dn(r,[i])}var mh=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)},_i=[],Lo=0,dp=0;function gh(){for(var i=Lo,r=dp=Lo=0;r<i;){var o=_i[r];_i[r++]=null;var u=_i[r];_i[r++]=null;var d=_i[r];_i[r++]=null;var p=_i[r];if(_i[r++]=null,u!==null&&d!==null){var y=u.pending;y===null?d.next=d:(d.next=y.next,y.next=d),u.pending=d}p!==0&&wv(o,d,p)}}function _h(i,r,o,u){_i[Lo++]=i,_i[Lo++]=r,_i[Lo++]=o,_i[Lo++]=u,dp|=u,i.lanes|=u,i=i.alternate,i!==null&&(i.lanes|=u)}function fp(i,r,o,u){return _h(i,r,o,u),yh(i)}function Va(i,r){return _h(i,null,null,r),yh(i)}function wv(i,r,o){i.lanes|=o;var u=i.alternate;u!==null&&(u.lanes|=o);for(var d=!1,p=i.return;p!==null;)p.childLanes|=o,u=p.alternate,u!==null&&(u.childLanes|=o),p.tag===22&&(i=p.stateNode,i===null||i._visibility&1||(d=!0)),i=p,p=p.return;return i.tag===3?(p=i.stateNode,d&&r!==null&&(d=31-xn(o),i=p.hiddenUpdates,u=i[d],u===null?i[d]=[r]:u.push(r),r.lane=o|536870912),p):null}function yh(i){if(50<Ou)throw Ou=0,bm=null,Error(s(185));for(var r=i.return;r!==null;)i=r,r=i.return;return i.tag===3?i.stateNode:null}var Vo={};function ZR(i,r,o,u){this.tag=i,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ri(i,r,o,u){return new ZR(i,r,o,u)}function pp(i){return i=i.prototype,!(!i||!i.isReactComponent)}function Is(i,r){var o=i.alternate;return o===null?(o=ri(i.tag,r,i.key,i.mode),o.elementType=i.elementType,o.type=i.type,o.stateNode=i.stateNode,o.alternate=i,i.alternate=o):(o.pendingProps=r,o.type=i.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=i.flags&65011712,o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,r=i.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=i.sibling,o.index=i.index,o.ref=i.ref,o.refCleanup=i.refCleanup,o}function Sv(i,r){i.flags&=65011714;var o=i.alternate;return o===null?(i.childLanes=0,i.lanes=r,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,r=o.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),i}function vh(i,r,o,u,d,p){var y=0;if(u=i,typeof i=="function")pp(i)&&(y=1);else if(typeof i=="string")y=iI(i,o,z.current)?26:i==="html"||i==="head"||i==="body"?27:5;else e:switch(i){case I:return i=ri(31,o,r,d),i.elementType=I,i.lanes=p,i;case H:return Ua(o.children,d,p,r);case B:y=8,d|=24;break;case re:return i=ri(12,o,r,d|2),i.elementType=re,i.lanes=p,i;case Me:return i=ri(13,o,r,d),i.elementType=Me,i.lanes=p,i;case Ee:return i=ri(19,o,r,d),i.elementType=Ee,i.lanes=p,i;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case le:y=10;break e;case oe:y=9;break e;case me:y=11;break e;case M:y=14;break e;case C:y=16,u=null;break e}y=29,o=Error(s(130,i===null?"null":typeof i,"")),u=null}return r=ri(y,o,r,d),r.elementType=i,r.type=u,r.lanes=p,r}function Ua(i,r,o,u){return i=ri(7,i,u,r),i.lanes=o,i}function mp(i,r,o){return i=ri(6,i,null,r),i.lanes=o,i}function Av(i){var r=ri(18,null,null,0);return r.stateNode=i,r}function gp(i,r,o){return r=ri(4,i.children!==null?i.children:[],i.key,r),r.lanes=o,r.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},r}var Cv=new WeakMap;function yi(i,r){if(typeof i=="object"&&i!==null){var o=Cv.get(i);return o!==void 0?o:(r={value:i,source:r,stack:zn(r)},Cv.set(i,r),r)}return{value:i,source:r,stack:zn(r)}}var Uo=[],Bo=0,Eh=null,pu=0,vi=[],Ei=0,Rr=null,ns=1,is="";function Ns(i,r){Uo[Bo++]=pu,Uo[Bo++]=Eh,Eh=i,pu=r}function Rv(i,r,o){vi[Ei++]=ns,vi[Ei++]=is,vi[Ei++]=Rr,Rr=i;var u=ns;i=is;var d=32-xn(u)-1;u&=~(1<<d),o+=1;var p=32-xn(r)+d;if(30<p){var y=d-d%5;p=(u&(1<<y)-1).toString(32),u>>=y,d-=y,ns=1<<32-xn(r)+d|o<<d|u,is=p+i}else ns=1<<p|o<<d|u,is=i}function _p(i){i.return!==null&&(Ns(i,1),Rv(i,1,0))}function yp(i){for(;i===Eh;)Eh=Uo[--Bo],Uo[Bo]=null,pu=Uo[--Bo],Uo[Bo]=null;for(;i===Rr;)Rr=vi[--Ei],vi[Ei]=null,is=vi[--Ei],vi[Ei]=null,ns=vi[--Ei],vi[Ei]=null}function Iv(i,r){vi[Ei++]=ns,vi[Ei++]=is,vi[Ei++]=Rr,ns=r.id,is=r.overflow,Rr=i}var cn=null,vt=null,Qe=!1,Ir=null,Ti=!1,vp=Error(s(519));function Nr(i){var r=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw mu(yi(r,i)),vp}function Nv(i){var r=i.stateNode,o=i.type,u=i.memoizedProps;switch(r[It]=i,r[un]=u,o){case"dialog":ze("cancel",r),ze("close",r);break;case"iframe":case"object":case"embed":ze("load",r);break;case"video":case"audio":for(o=0;o<Vu.length;o++)ze(Vu[o],r);break;case"source":ze("error",r);break;case"img":case"image":case"link":ze("error",r),ze("load",r);break;case"details":ze("toggle",r);break;case"input":ze("invalid",r),Ra(r,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0);break;case"select":ze("invalid",r);break;case"textarea":ze("invalid",r),yr(r,u.value,u.defaultValue,u.children)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||u.suppressHydrationWarning===!0||K1(r.textContent,o)?(u.popover!=null&&(ze("beforetoggle",r),ze("toggle",r)),u.onScroll!=null&&ze("scroll",r),u.onScrollEnd!=null&&ze("scrollend",r),u.onClick!=null&&(r.onclick=en),r=!0):r=!1,r||Nr(i,!0)}function Pv(i){for(cn=i.return;cn;)switch(cn.tag){case 5:case 31:case 13:Ti=!1;return;case 27:case 3:Ti=!0;return;default:cn=cn.return}}function zo(i){if(i!==cn)return!1;if(!Qe)return Pv(i),Qe=!0,!1;var r=i.tag,o;if((o=r!==3&&r!==27)&&((o=r===5)&&(o=i.type,o=!(o!=="form"&&o!=="button")||Vm(i.type,i.memoizedProps)),o=!o),o&&vt&&Nr(i),Pv(i),r===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));vt=tE(i)}else if(r===31){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));vt=tE(i)}else r===27?(r=vt,Fr(i.type)?(i=qm,qm=null,vt=i):vt=r):vt=cn?wi(i.stateNode.nextSibling):null;return!0}function Ba(){vt=cn=null,Qe=!1}function Ep(){var i=Ir;return i!==null&&(Qn===null?Qn=i:Qn.push.apply(Qn,i),Ir=null),i}function mu(i){Ir===null?Ir=[i]:Ir.push(i)}var Tp=T(null),za=null,Ps=null;function Pr(i,r,o){j(Tp,r._currentValue),r._currentValue=o}function xs(i){i._currentValue=Tp.current,x(Tp)}function bp(i,r,o){for(;i!==null;){var u=i.alternate;if((i.childLanes&r)!==r?(i.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),i===o)break;i=i.return}}function wp(i,r,o,u){var d=i.child;for(d!==null&&(d.return=i);d!==null;){var p=d.dependencies;if(p!==null){var y=d.child;p=p.firstContext;e:for(;p!==null;){var w=p;p=d;for(var k=0;k<r.length;k++)if(w.context===r[k]){p.lanes|=o,w=p.alternate,w!==null&&(w.lanes|=o),bp(p.return,o,i),u||(y=null);break e}p=w.next}}else if(d.tag===18){if(y=d.return,y===null)throw Error(s(341));y.lanes|=o,p=y.alternate,p!==null&&(p.lanes|=o),bp(y,o,i),y=null}else y=d.child;if(y!==null)y.return=d;else for(y=d;y!==null;){if(y===i){y=null;break}if(d=y.sibling,d!==null){d.return=y.return,y=d;break}y=y.return}d=y}}function jo(i,r,o,u){i=null;for(var d=r,p=!1;d!==null;){if(!p){if((d.flags&524288)!==0)p=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var y=d.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var w=d.type;si(d.pendingProps.value,y.value)||(i!==null?i.push(w):i=[w])}}else if(d===ae.current){if(y=d.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(i!==null?i.push(qu):i=[qu])}d=d.return}i!==null&&wp(r,i,o,u),r.flags|=262144}function Th(i){for(i=i.firstContext;i!==null;){if(!si(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function ja(i){za=i,Ps=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function hn(i){return xv(za,i)}function bh(i,r){return za===null&&ja(i),xv(i,r)}function xv(i,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},Ps===null){if(i===null)throw Error(s(308));Ps=r,i.dependencies={lanes:0,firstContext:r},i.flags|=524288}else Ps=Ps.next=r;return o}var JR=typeof AbortController<"u"?AbortController:function(){var i=[],r=this.signal={aborted:!1,addEventListener:function(o,u){i.push(u)}};this.abort=function(){r.aborted=!0,i.forEach(function(o){return o()})}},e2=n.unstable_scheduleCallback,t2=n.unstable_NormalPriority,jt={$$typeof:le,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Sp(){return{controller:new JR,data:new Map,refCount:0}}function gu(i){i.refCount--,i.refCount===0&&e2(t2,function(){i.controller.abort()})}var _u=null,Ap=0,qo=0,Fo=null;function n2(i,r){if(_u===null){var o=_u=[];Ap=0,qo=Im(),Fo={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Ap++,r.then(Dv,Dv),r}function Dv(){if(--Ap===0&&_u!==null){Fo!==null&&(Fo.status="fulfilled");var i=_u;_u=null,qo=0,Fo=null;for(var r=0;r<i.length;r++)(0,i[r])()}}function i2(i,r){var o=[],u={status:"pending",value:null,reason:null,then:function(d){o.push(d)}};return i.then(function(){u.status="fulfilled",u.value=r;for(var d=0;d<o.length;d++)(0,o[d])(r)},function(d){for(u.status="rejected",u.reason=d,d=0;d<o.length;d++)(0,o[d])(void 0)}),u}var kv=Z.S;Z.S=function(i,r){g1=Ut(),typeof r=="object"&&r!==null&&typeof r.then=="function"&&n2(i,r),kv!==null&&kv(i,r)};var qa=T(null);function Cp(){var i=qa.current;return i!==null?i:mt.pooledCache}function wh(i,r){r===null?j(qa,qa.current):j(qa,r.pool)}function Mv(){var i=Cp();return i===null?null:{parent:jt._currentValue,pool:i}}var Ho=Error(s(460)),Rp=Error(s(474)),Sh=Error(s(542)),Ah={then:function(){}};function Ov(i){return i=i.status,i==="fulfilled"||i==="rejected"}function Lv(i,r,o){switch(o=i[o],o===void 0?i.push(r):o!==r&&(r.then(en,en),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,Uv(i),i;default:if(typeof r.status=="string")r.then(en,en);else{if(i=mt,i!==null&&100<i.shellSuspendCounter)throw Error(s(482));i=r,i.status="pending",i.then(function(u){if(r.status==="pending"){var d=r;d.status="fulfilled",d.value=u}},function(u){if(r.status==="pending"){var d=r;d.status="rejected",d.reason=u}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,Uv(i),i}throw Ha=r,Ho}}function Fa(i){try{var r=i._init;return r(i._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(Ha=o,Ho):o}}var Ha=null;function Vv(){if(Ha===null)throw Error(s(459));var i=Ha;return Ha=null,i}function Uv(i){if(i===Ho||i===Sh)throw Error(s(483))}var Go=null,yu=0;function Ch(i){var r=yu;return yu+=1,Go===null&&(Go=[]),Lv(Go,i,r)}function vu(i,r){r=r.props.ref,i.ref=r!==void 0?r:null}function Rh(i,r){throw r.$$typeof===S?Error(s(525)):(i=Object.prototype.toString.call(r),Error(s(31,i==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":i)))}function Bv(i){function r(F,L){if(i){var K=F.deletions;K===null?(F.deletions=[L],F.flags|=16):K.push(L)}}function o(F,L){if(!i)return null;for(;L!==null;)r(F,L),L=L.sibling;return null}function u(F){for(var L=new Map;F!==null;)F.key!==null?L.set(F.key,F):L.set(F.index,F),F=F.sibling;return L}function d(F,L){return F=Is(F,L),F.index=0,F.sibling=null,F}function p(F,L,K){return F.index=K,i?(K=F.alternate,K!==null?(K=K.index,K<L?(F.flags|=67108866,L):K):(F.flags|=67108866,L)):(F.flags|=1048576,L)}function y(F){return i&&F.alternate===null&&(F.flags|=67108866),F}function w(F,L,K,te){return L===null||L.tag!==6?(L=mp(K,F.mode,te),L.return=F,L):(L=d(L,K),L.return=F,L)}function k(F,L,K,te){var Te=K.type;return Te===H?J(F,L,K.props.children,te,K.key):L!==null&&(L.elementType===Te||typeof Te=="object"&&Te!==null&&Te.$$typeof===C&&Fa(Te)===L.type)?(L=d(L,K.props),vu(L,K),L.return=F,L):(L=vh(K.type,K.key,K.props,null,F.mode,te),vu(L,K),L.return=F,L)}function Q(F,L,K,te){return L===null||L.tag!==4||L.stateNode.containerInfo!==K.containerInfo||L.stateNode.implementation!==K.implementation?(L=gp(K,F.mode,te),L.return=F,L):(L=d(L,K.children||[]),L.return=F,L)}function J(F,L,K,te,Te){return L===null||L.tag!==7?(L=Ua(K,F.mode,te,Te),L.return=F,L):(L=d(L,K),L.return=F,L)}function ne(F,L,K){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return L=mp(""+L,F.mode,K),L.return=F,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case P:return K=vh(L.type,L.key,L.props,null,F.mode,K),vu(K,L),K.return=F,K;case V:return L=gp(L,F.mode,K),L.return=F,L;case C:return L=Fa(L),ne(F,L,K)}if(Ne(L)||q(L))return L=Ua(L,F.mode,K,null),L.return=F,L;if(typeof L.then=="function")return ne(F,Ch(L),K);if(L.$$typeof===le)return ne(F,bh(F,L),K);Rh(F,L)}return null}function W(F,L,K,te){var Te=L!==null?L.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Te!==null?null:w(F,L,""+K,te);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case P:return K.key===Te?k(F,L,K,te):null;case V:return K.key===Te?Q(F,L,K,te):null;case C:return K=Fa(K),W(F,L,K,te)}if(Ne(K)||q(K))return Te!==null?null:J(F,L,K,te,null);if(typeof K.then=="function")return W(F,L,Ch(K),te);if(K.$$typeof===le)return W(F,L,bh(F,K),te);Rh(F,K)}return null}function Y(F,L,K,te,Te){if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return F=F.get(K)||null,w(L,F,""+te,Te);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case P:return F=F.get(te.key===null?K:te.key)||null,k(L,F,te,Te);case V:return F=F.get(te.key===null?K:te.key)||null,Q(L,F,te,Te);case C:return te=Fa(te),Y(F,L,K,te,Te)}if(Ne(te)||q(te))return F=F.get(K)||null,J(L,F,te,Te,null);if(typeof te.then=="function")return Y(F,L,K,Ch(te),Te);if(te.$$typeof===le)return Y(F,L,K,bh(L,te),Te);Rh(L,te)}return null}function ge(F,L,K,te){for(var Te=null,Je=null,ye=L,Oe=L=0,Fe=null;ye!==null&&Oe<K.length;Oe++){ye.index>Oe?(Fe=ye,ye=null):Fe=ye.sibling;var et=W(F,ye,K[Oe],te);if(et===null){ye===null&&(ye=Fe);break}i&&ye&&et.alternate===null&&r(F,ye),L=p(et,L,Oe),Je===null?Te=et:Je.sibling=et,Je=et,ye=Fe}if(Oe===K.length)return o(F,ye),Qe&&Ns(F,Oe),Te;if(ye===null){for(;Oe<K.length;Oe++)ye=ne(F,K[Oe],te),ye!==null&&(L=p(ye,L,Oe),Je===null?Te=ye:Je.sibling=ye,Je=ye);return Qe&&Ns(F,Oe),Te}for(ye=u(ye);Oe<K.length;Oe++)Fe=Y(ye,F,Oe,K[Oe],te),Fe!==null&&(i&&Fe.alternate!==null&&ye.delete(Fe.key===null?Oe:Fe.key),L=p(Fe,L,Oe),Je===null?Te=Fe:Je.sibling=Fe,Je=Fe);return i&&ye.forEach(function(Wr){return r(F,Wr)}),Qe&&Ns(F,Oe),Te}function Se(F,L,K,te){if(K==null)throw Error(s(151));for(var Te=null,Je=null,ye=L,Oe=L=0,Fe=null,et=K.next();ye!==null&&!et.done;Oe++,et=K.next()){ye.index>Oe?(Fe=ye,ye=null):Fe=ye.sibling;var Wr=W(F,ye,et.value,te);if(Wr===null){ye===null&&(ye=Fe);break}i&&ye&&Wr.alternate===null&&r(F,ye),L=p(Wr,L,Oe),Je===null?Te=Wr:Je.sibling=Wr,Je=Wr,ye=Fe}if(et.done)return o(F,ye),Qe&&Ns(F,Oe),Te;if(ye===null){for(;!et.done;Oe++,et=K.next())et=ne(F,et.value,te),et!==null&&(L=p(et,L,Oe),Je===null?Te=et:Je.sibling=et,Je=et);return Qe&&Ns(F,Oe),Te}for(ye=u(ye);!et.done;Oe++,et=K.next())et=Y(ye,F,Oe,et.value,te),et!==null&&(i&&et.alternate!==null&&ye.delete(et.key===null?Oe:et.key),L=p(et,L,Oe),Je===null?Te=et:Je.sibling=et,Je=et);return i&&ye.forEach(function(pI){return r(F,pI)}),Qe&&Ns(F,Oe),Te}function ft(F,L,K,te){if(typeof K=="object"&&K!==null&&K.type===H&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case P:e:{for(var Te=K.key;L!==null;){if(L.key===Te){if(Te=K.type,Te===H){if(L.tag===7){o(F,L.sibling),te=d(L,K.props.children),te.return=F,F=te;break e}}else if(L.elementType===Te||typeof Te=="object"&&Te!==null&&Te.$$typeof===C&&Fa(Te)===L.type){o(F,L.sibling),te=d(L,K.props),vu(te,K),te.return=F,F=te;break e}o(F,L);break}else r(F,L);L=L.sibling}K.type===H?(te=Ua(K.props.children,F.mode,te,K.key),te.return=F,F=te):(te=vh(K.type,K.key,K.props,null,F.mode,te),vu(te,K),te.return=F,F=te)}return y(F);case V:e:{for(Te=K.key;L!==null;){if(L.key===Te)if(L.tag===4&&L.stateNode.containerInfo===K.containerInfo&&L.stateNode.implementation===K.implementation){o(F,L.sibling),te=d(L,K.children||[]),te.return=F,F=te;break e}else{o(F,L);break}else r(F,L);L=L.sibling}te=gp(K,F.mode,te),te.return=F,F=te}return y(F);case C:return K=Fa(K),ft(F,L,K,te)}if(Ne(K))return ge(F,L,K,te);if(q(K)){if(Te=q(K),typeof Te!="function")throw Error(s(150));return K=Te.call(K),Se(F,L,K,te)}if(typeof K.then=="function")return ft(F,L,Ch(K),te);if(K.$$typeof===le)return ft(F,L,bh(F,K),te);Rh(F,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,L!==null&&L.tag===6?(o(F,L.sibling),te=d(L,K),te.return=F,F=te):(o(F,L),te=mp(K,F.mode,te),te.return=F,F=te),y(F)):o(F,L)}return function(F,L,K,te){try{yu=0;var Te=ft(F,L,K,te);return Go=null,Te}catch(ye){if(ye===Ho||ye===Sh)throw ye;var Je=ri(29,ye,null,F.mode);return Je.lanes=te,Je.return=F,Je}finally{}}}var Ga=Bv(!0),zv=Bv(!1),xr=!1;function Ip(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Np(i,r){i=i.updateQueue,r.updateQueue===i&&(r.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function Dr(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function kr(i,r,o){var u=i.updateQueue;if(u===null)return null;if(u=u.shared,(nt&2)!==0){var d=u.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),u.pending=r,r=yh(i),wv(i,null,o),r}return _h(i,u,r,o),yh(i)}function Eu(i,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194048)!==0)){var u=r.lanes;u&=i.pendingLanes,o|=u,r.lanes=o,hr(i,o)}}function Pp(i,r){var o=i.updateQueue,u=i.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var y={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};p===null?d=p=y:p=p.next=y,o=o.next}while(o!==null);p===null?d=p=r:p=p.next=r}else d=p=r;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:u.shared,callbacks:u.callbacks},i.updateQueue=o;return}i=o.lastBaseUpdate,i===null?o.firstBaseUpdate=r:i.next=r,o.lastBaseUpdate=r}var xp=!1;function Tu(){if(xp){var i=Fo;if(i!==null)throw i}}function bu(i,r,o,u){xp=!1;var d=i.updateQueue;xr=!1;var p=d.firstBaseUpdate,y=d.lastBaseUpdate,w=d.shared.pending;if(w!==null){d.shared.pending=null;var k=w,Q=k.next;k.next=null,y===null?p=Q:y.next=Q,y=k;var J=i.alternate;J!==null&&(J=J.updateQueue,w=J.lastBaseUpdate,w!==y&&(w===null?J.firstBaseUpdate=Q:w.next=Q,J.lastBaseUpdate=k))}if(p!==null){var ne=d.baseState;y=0,J=Q=k=null,w=p;do{var W=w.lane&-536870913,Y=W!==w.lane;if(Y?(qe&W)===W:(u&W)===W){W!==0&&W===qo&&(xp=!0),J!==null&&(J=J.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var ge=i,Se=w;W=r;var ft=o;switch(Se.tag){case 1:if(ge=Se.payload,typeof ge=="function"){ne=ge.call(ft,ne,W);break e}ne=ge;break e;case 3:ge.flags=ge.flags&-65537|128;case 0:if(ge=Se.payload,W=typeof ge=="function"?ge.call(ft,ne,W):ge,W==null)break e;ne=b({},ne,W);break e;case 2:xr=!0}}W=w.callback,W!==null&&(i.flags|=64,Y&&(i.flags|=8192),Y=d.callbacks,Y===null?d.callbacks=[W]:Y.push(W))}else Y={lane:W,tag:w.tag,payload:w.payload,callback:w.callback,next:null},J===null?(Q=J=Y,k=ne):J=J.next=Y,y|=W;if(w=w.next,w===null){if(w=d.shared.pending,w===null)break;Y=w,w=Y.next,Y.next=null,d.lastBaseUpdate=Y,d.shared.pending=null}}while(!0);J===null&&(k=ne),d.baseState=k,d.firstBaseUpdate=Q,d.lastBaseUpdate=J,p===null&&(d.shared.lanes=0),Ur|=y,i.lanes=y,i.memoizedState=ne}}function jv(i,r){if(typeof i!="function")throw Error(s(191,i));i.call(r)}function qv(i,r){var o=i.callbacks;if(o!==null)for(i.callbacks=null,i=0;i<o.length;i++)jv(o[i],r)}var Ko=T(null),Ih=T(0);function Fv(i,r){i=zs,j(Ih,i),j(Ko,r),zs=i|r.baseLanes}function Dp(){j(Ih,zs),j(Ko,Ko.current)}function kp(){zs=Ih.current,x(Ko),x(Ih)}var ai=T(null),bi=null;function Mr(i){var r=i.alternate;j(Mt,Mt.current&1),j(ai,i),bi===null&&(r===null||Ko.current!==null||r.memoizedState!==null)&&(bi=i)}function Mp(i){j(Mt,Mt.current),j(ai,i),bi===null&&(bi=i)}function Hv(i){i.tag===22?(j(Mt,Mt.current),j(ai,i),bi===null&&(bi=i)):Or()}function Or(){j(Mt,Mt.current),j(ai,ai.current)}function oi(i){x(ai),bi===i&&(bi=null),x(Mt)}var Mt=T(0);function Nh(i){for(var r=i;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||zm(o)||jm(o)))return r}else if(r.tag===19&&(r.memoizedProps.revealOrder==="forwards"||r.memoizedProps.revealOrder==="backwards"||r.memoizedProps.revealOrder==="unstable_legacy-backwards"||r.memoizedProps.revealOrder==="together")){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Ds=0,ke=null,ht=null,qt=null,Ph=!1,Qo=!1,Ka=!1,xh=0,wu=0,Wo=null,s2=0;function Pt(){throw Error(s(321))}function Op(i,r){if(r===null)return!1;for(var o=0;o<r.length&&o<i.length;o++)if(!si(i[o],r[o]))return!1;return!0}function Lp(i,r,o,u,d,p){return Ds=p,ke=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Z.H=i===null||i.memoizedState===null?R0:Xp,Ka=!1,p=o(u,d),Ka=!1,Qo&&(p=Kv(r,o,u,d)),Gv(i),p}function Gv(i){Z.H=Cu;var r=ht!==null&&ht.next!==null;if(Ds=0,qt=ht=ke=null,Ph=!1,wu=0,Wo=null,r)throw Error(s(300));i===null||Ft||(i=i.dependencies,i!==null&&Th(i)&&(Ft=!0))}function Kv(i,r,o,u){ke=i;var d=0;do{if(Qo&&(Wo=null),wu=0,Qo=!1,25<=d)throw Error(s(301));if(d+=1,qt=ht=null,i.updateQueue!=null){var p=i.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}Z.H=I0,p=r(o,u)}while(Qo);return p}function r2(){var i=Z.H,r=i.useState()[0];return r=typeof r.then=="function"?Su(r):r,i=i.useState()[0],(ht!==null?ht.memoizedState:null)!==i&&(ke.flags|=1024),r}function Vp(){var i=xh!==0;return xh=0,i}function Up(i,r,o){r.updateQueue=i.updateQueue,r.flags&=-2053,i.lanes&=~o}function Bp(i){if(Ph){for(i=i.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ph=!1}Ds=0,qt=ht=ke=null,Qo=!1,wu=xh=0,Wo=null}function Ln(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qt===null?ke.memoizedState=qt=i:qt=qt.next=i,qt}function Ot(){if(ht===null){var i=ke.alternate;i=i!==null?i.memoizedState:null}else i=ht.next;var r=qt===null?ke.memoizedState:qt.next;if(r!==null)qt=r,ht=i;else{if(i===null)throw ke.alternate===null?Error(s(467)):Error(s(310));ht=i,i={memoizedState:ht.memoizedState,baseState:ht.baseState,baseQueue:ht.baseQueue,queue:ht.queue,next:null},qt===null?ke.memoizedState=qt=i:qt=qt.next=i}return qt}function Dh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Su(i){var r=wu;return wu+=1,Wo===null&&(Wo=[]),i=Lv(Wo,i,r),r=ke,(qt===null?r.memoizedState:qt.next)===null&&(r=r.alternate,Z.H=r===null||r.memoizedState===null?R0:Xp),i}function kh(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return Su(i);if(i.$$typeof===le)return hn(i)}throw Error(s(438,String(i)))}function zp(i){var r=null,o=ke.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var u=ke.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(r={data:u.data.map(function(d){return d.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=Dh(),ke.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(i),u=0;u<i;u++)o[u]=O;return r.index++,o}function ks(i,r){return typeof r=="function"?r(i):r}function Mh(i){var r=Ot();return jp(r,ht,i)}function jp(i,r,o){var u=i.queue;if(u===null)throw Error(s(311));u.lastRenderedReducer=o;var d=i.baseQueue,p=u.pending;if(p!==null){if(d!==null){var y=d.next;d.next=p.next,p.next=y}r.baseQueue=d=p,u.pending=null}if(p=i.baseState,d===null)i.memoizedState=p;else{r=d.next;var w=y=null,k=null,Q=r,J=!1;do{var ne=Q.lane&-536870913;if(ne!==Q.lane?(qe&ne)===ne:(Ds&ne)===ne){var W=Q.revertLane;if(W===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),ne===qo&&(J=!0);else if((Ds&W)===W){Q=Q.next,W===qo&&(J=!0);continue}else ne={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},k===null?(w=k=ne,y=p):k=k.next=ne,ke.lanes|=W,Ur|=W;ne=Q.action,Ka&&o(p,ne),p=Q.hasEagerState?Q.eagerState:o(p,ne)}else W={lane:ne,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},k===null?(w=k=W,y=p):k=k.next=W,ke.lanes|=ne,Ur|=ne;Q=Q.next}while(Q!==null&&Q!==r);if(k===null?y=p:k.next=w,!si(p,i.memoizedState)&&(Ft=!0,J&&(o=Fo,o!==null)))throw o;i.memoizedState=p,i.baseState=y,i.baseQueue=k,u.lastRenderedState=p}return d===null&&(u.lanes=0),[i.memoizedState,u.dispatch]}function qp(i){var r=Ot(),o=r.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=i;var u=o.dispatch,d=o.pending,p=r.memoizedState;if(d!==null){o.pending=null;var y=d=d.next;do p=i(p,y.action),y=y.next;while(y!==d);si(p,r.memoizedState)||(Ft=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),o.lastRenderedState=p}return[p,u]}function Qv(i,r,o){var u=ke,d=Ot(),p=Qe;if(p){if(o===void 0)throw Error(s(407));o=o()}else o=r();var y=!si((ht||d).memoizedState,o);if(y&&(d.memoizedState=o,Ft=!0),d=d.queue,Gp($v.bind(null,u,d,i),[i]),d.getSnapshot!==r||y||qt!==null&&qt.memoizedState.tag&1){if(u.flags|=2048,Yo(9,{destroy:void 0},Yv.bind(null,u,d,o,r),null),mt===null)throw Error(s(349));p||(Ds&127)!==0||Wv(u,r,o)}return o}function Wv(i,r,o){i.flags|=16384,i={getSnapshot:r,value:o},r=ke.updateQueue,r===null?(r=Dh(),ke.updateQueue=r,r.stores=[i]):(o=r.stores,o===null?r.stores=[i]:o.push(i))}function Yv(i,r,o,u){r.value=o,r.getSnapshot=u,Xv(r)&&Zv(i)}function $v(i,r,o){return o(function(){Xv(r)&&Zv(i)})}function Xv(i){var r=i.getSnapshot;i=i.value;try{var o=r();return!si(i,o)}catch{return!0}}function Zv(i){var r=Va(i,2);r!==null&&Wn(r,i,2)}function Fp(i){var r=Ln();if(typeof i=="function"){var o=i;if(i=o(),Ka){fi(!0);try{o()}finally{fi(!1)}}}return r.memoizedState=r.baseState=i,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ks,lastRenderedState:i},r}function Jv(i,r,o,u){return i.baseState=o,jp(i,ht,typeof u=="function"?u:ks)}function a2(i,r,o,u,d){if(Vh(i))throw Error(s(485));if(i=r.action,i!==null){var p={payload:d,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){p.listeners.push(y)}};Z.T!==null?o(!0):p.isTransition=!1,u(p),o=r.pending,o===null?(p.next=r.pending=p,e0(r,p)):(p.next=o.next,r.pending=o.next=p)}}function e0(i,r){var o=r.action,u=r.payload,d=i.state;if(r.isTransition){var p=Z.T,y={};Z.T=y;try{var w=o(d,u),k=Z.S;k!==null&&k(y,w),t0(i,r,w)}catch(Q){Hp(i,r,Q)}finally{p!==null&&y.types!==null&&(p.types=y.types),Z.T=p}}else try{p=o(d,u),t0(i,r,p)}catch(Q){Hp(i,r,Q)}}function t0(i,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){n0(i,r,u)},function(u){return Hp(i,r,u)}):n0(i,r,o)}function n0(i,r,o){r.status="fulfilled",r.value=o,i0(r),i.state=o,r=i.pending,r!==null&&(o=r.next,o===r?i.pending=null:(o=o.next,r.next=o,e0(i,o)))}function Hp(i,r,o){var u=i.pending;if(i.pending=null,u!==null){u=u.next;do r.status="rejected",r.reason=o,i0(r),r=r.next;while(r!==u)}i.action=null}function i0(i){i=i.listeners;for(var r=0;r<i.length;r++)(0,i[r])()}function s0(i,r){return r}function r0(i,r){if(Qe){var o=mt.formState;if(o!==null){e:{var u=ke;if(Qe){if(vt){t:{for(var d=vt,p=Ti;d.nodeType!==8;){if(!p){d=null;break t}if(d=wi(d.nextSibling),d===null){d=null;break t}}p=d.data,d=p==="F!"||p==="F"?d:null}if(d){vt=wi(d.nextSibling),u=d.data==="F!";break e}}Nr(u)}u=!1}u&&(r=o[0])}}return o=Ln(),o.memoizedState=o.baseState=r,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:s0,lastRenderedState:r},o.queue=u,o=S0.bind(null,ke,u),u.dispatch=o,u=Fp(!1),p=$p.bind(null,ke,!1,u.queue),u=Ln(),d={state:r,dispatch:null,action:i,pending:null},u.queue=d,o=a2.bind(null,ke,d,p,o),d.dispatch=o,u.memoizedState=i,[r,o,!1]}function a0(i){var r=Ot();return o0(r,ht,i)}function o0(i,r,o){if(r=jp(i,r,s0)[0],i=Mh(ks)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var u=Su(r)}catch(y){throw y===Ho?Sh:y}else u=r;r=Ot();var d=r.queue,p=d.dispatch;return o!==r.memoizedState&&(ke.flags|=2048,Yo(9,{destroy:void 0},o2.bind(null,d,o),null)),[u,p,i]}function o2(i,r){i.action=r}function l0(i){var r=Ot(),o=ht;if(o!==null)return o0(r,o,i);Ot(),r=r.memoizedState,o=Ot();var u=o.queue.dispatch;return o.memoizedState=i,[r,u,!1]}function Yo(i,r,o,u){return i={tag:i,create:o,deps:u,inst:r,next:null},r=ke.updateQueue,r===null&&(r=Dh(),ke.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=i.next=i:(u=o.next,o.next=i,i.next=u,r.lastEffect=i),i}function u0(){return Ot().memoizedState}function Oh(i,r,o,u){var d=Ln();ke.flags|=i,d.memoizedState=Yo(1|r,{destroy:void 0},o,u===void 0?null:u)}function Lh(i,r,o,u){var d=Ot();u=u===void 0?null:u;var p=d.memoizedState.inst;ht!==null&&u!==null&&Op(u,ht.memoizedState.deps)?d.memoizedState=Yo(r,p,o,u):(ke.flags|=i,d.memoizedState=Yo(1|r,p,o,u))}function c0(i,r){Oh(8390656,8,i,r)}function Gp(i,r){Lh(2048,8,i,r)}function l2(i){ke.flags|=4;var r=ke.updateQueue;if(r===null)r=Dh(),ke.updateQueue=r,r.events=[i];else{var o=r.events;o===null?r.events=[i]:o.push(i)}}function h0(i){var r=Ot().memoizedState;return l2({ref:r,nextImpl:i}),function(){if((nt&2)!==0)throw Error(s(440));return r.impl.apply(void 0,arguments)}}function d0(i,r){return Lh(4,2,i,r)}function f0(i,r){return Lh(4,4,i,r)}function p0(i,r){if(typeof r=="function"){i=i();var o=r(i);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return i=i(),r.current=i,function(){r.current=null}}function m0(i,r,o){o=o!=null?o.concat([i]):null,Lh(4,4,p0.bind(null,r,i),o)}function Kp(){}function g0(i,r){var o=Ot();r=r===void 0?null:r;var u=o.memoizedState;return r!==null&&Op(r,u[1])?u[0]:(o.memoizedState=[i,r],i)}function _0(i,r){var o=Ot();r=r===void 0?null:r;var u=o.memoizedState;if(r!==null&&Op(r,u[1]))return u[0];if(u=i(),Ka){fi(!0);try{i()}finally{fi(!1)}}return o.memoizedState=[u,r],u}function Qp(i,r,o){return o===void 0||(Ds&1073741824)!==0&&(qe&261930)===0?i.memoizedState=r:(i.memoizedState=o,i=y1(),ke.lanes|=i,Ur|=i,o)}function y0(i,r,o,u){return si(o,r)?o:Ko.current!==null?(i=Qp(i,o,u),si(i,r)||(Ft=!0),i):(Ds&42)===0||(Ds&1073741824)!==0&&(qe&261930)===0?(Ft=!0,i.memoizedState=o):(i=y1(),ke.lanes|=i,Ur|=i,r)}function v0(i,r,o,u,d){var p=ue.p;ue.p=p!==0&&8>p?p:8;var y=Z.T,w={};Z.T=w,$p(i,!1,r,o);try{var k=d(),Q=Z.S;if(Q!==null&&Q(w,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var J=i2(k,u);Au(i,r,J,ci(i))}else Au(i,r,u,ci(i))}catch(ne){Au(i,r,{then:function(){},status:"rejected",reason:ne},ci())}finally{ue.p=p,y!==null&&w.types!==null&&(y.types=w.types),Z.T=y}}function u2(){}function Wp(i,r,o,u){if(i.tag!==5)throw Error(s(476));var d=E0(i).queue;v0(i,d,r,ve,o===null?u2:function(){return T0(i),o(u)})}function E0(i){var r=i.memoizedState;if(r!==null)return r;r={memoizedState:ve,baseState:ve,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ks,lastRenderedState:ve},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ks,lastRenderedState:o},next:null},i.memoizedState=r,i=i.alternate,i!==null&&(i.memoizedState=r),r}function T0(i){var r=E0(i);r.next===null&&(r=i.alternate.memoizedState),Au(i,r.next.queue,{},ci())}function Yp(){return hn(qu)}function b0(){return Ot().memoizedState}function w0(){return Ot().memoizedState}function c2(i){for(var r=i.return;r!==null;){switch(r.tag){case 24:case 3:var o=ci();i=Dr(o);var u=kr(r,i,o);u!==null&&(Wn(u,r,o),Eu(u,r,o)),r={cache:Sp()},i.payload=r;return}r=r.return}}function h2(i,r,o){var u=ci();o={lane:u,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Vh(i)?A0(r,o):(o=fp(i,r,o,u),o!==null&&(Wn(o,i,u),C0(o,r,u)))}function S0(i,r,o){var u=ci();Au(i,r,o,u)}function Au(i,r,o,u){var d={lane:u,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(Vh(i))A0(r,d);else{var p=i.alternate;if(i.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var y=r.lastRenderedState,w=p(y,o);if(d.hasEagerState=!0,d.eagerState=w,si(w,y))return _h(i,r,d,0),mt===null&&gh(),!1}catch{}finally{}if(o=fp(i,r,d,u),o!==null)return Wn(o,i,u),C0(o,r,u),!0}return!1}function $p(i,r,o,u){if(u={lane:2,revertLane:Im(),gesture:null,action:u,hasEagerState:!1,eagerState:null,next:null},Vh(i)){if(r)throw Error(s(479))}else r=fp(i,o,u,2),r!==null&&Wn(r,i,2)}function Vh(i){var r=i.alternate;return i===ke||r!==null&&r===ke}function A0(i,r){Qo=Ph=!0;var o=i.pending;o===null?r.next=r:(r.next=o.next,o.next=r),i.pending=r}function C0(i,r,o){if((o&4194048)!==0){var u=r.lanes;u&=i.pendingLanes,o|=u,r.lanes=o,hr(i,o)}}var Cu={readContext:hn,use:kh,useCallback:Pt,useContext:Pt,useEffect:Pt,useImperativeHandle:Pt,useLayoutEffect:Pt,useInsertionEffect:Pt,useMemo:Pt,useReducer:Pt,useRef:Pt,useState:Pt,useDebugValue:Pt,useDeferredValue:Pt,useTransition:Pt,useSyncExternalStore:Pt,useId:Pt,useHostTransitionStatus:Pt,useFormState:Pt,useActionState:Pt,useOptimistic:Pt,useMemoCache:Pt,useCacheRefresh:Pt};Cu.useEffectEvent=Pt;var R0={readContext:hn,use:kh,useCallback:function(i,r){return Ln().memoizedState=[i,r===void 0?null:r],i},useContext:hn,useEffect:c0,useImperativeHandle:function(i,r,o){o=o!=null?o.concat([i]):null,Oh(4194308,4,p0.bind(null,r,i),o)},useLayoutEffect:function(i,r){return Oh(4194308,4,i,r)},useInsertionEffect:function(i,r){Oh(4,2,i,r)},useMemo:function(i,r){var o=Ln();r=r===void 0?null:r;var u=i();if(Ka){fi(!0);try{i()}finally{fi(!1)}}return o.memoizedState=[u,r],u},useReducer:function(i,r,o){var u=Ln();if(o!==void 0){var d=o(r);if(Ka){fi(!0);try{o(r)}finally{fi(!1)}}}else d=r;return u.memoizedState=u.baseState=d,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:d},u.queue=i,i=i.dispatch=h2.bind(null,ke,i),[u.memoizedState,i]},useRef:function(i){var r=Ln();return i={current:i},r.memoizedState=i},useState:function(i){i=Fp(i);var r=i.queue,o=S0.bind(null,ke,r);return r.dispatch=o,[i.memoizedState,o]},useDebugValue:Kp,useDeferredValue:function(i,r){var o=Ln();return Qp(o,i,r)},useTransition:function(){var i=Fp(!1);return i=v0.bind(null,ke,i.queue,!0,!1),Ln().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,r,o){var u=ke,d=Ln();if(Qe){if(o===void 0)throw Error(s(407));o=o()}else{if(o=r(),mt===null)throw Error(s(349));(qe&127)!==0||Wv(u,r,o)}d.memoizedState=o;var p={value:o,getSnapshot:r};return d.queue=p,c0($v.bind(null,u,p,i),[i]),u.flags|=2048,Yo(9,{destroy:void 0},Yv.bind(null,u,p,o,r),null),o},useId:function(){var i=Ln(),r=mt.identifierPrefix;if(Qe){var o=is,u=ns;o=(u&~(1<<32-xn(u)-1)).toString(32)+o,r="_"+r+"R_"+o,o=xh++,0<o&&(r+="H"+o.toString(32)),r+="_"}else o=s2++,r="_"+r+"r_"+o.toString(32)+"_";return i.memoizedState=r},useHostTransitionStatus:Yp,useFormState:r0,useActionState:r0,useOptimistic:function(i){var r=Ln();r.memoizedState=r.baseState=i;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=$p.bind(null,ke,!0,o),o.dispatch=r,[i,r]},useMemoCache:zp,useCacheRefresh:function(){return Ln().memoizedState=c2.bind(null,ke)},useEffectEvent:function(i){var r=Ln(),o={impl:i};return r.memoizedState=o,function(){if((nt&2)!==0)throw Error(s(440));return o.impl.apply(void 0,arguments)}}},Xp={readContext:hn,use:kh,useCallback:g0,useContext:hn,useEffect:Gp,useImperativeHandle:m0,useInsertionEffect:d0,useLayoutEffect:f0,useMemo:_0,useReducer:Mh,useRef:u0,useState:function(){return Mh(ks)},useDebugValue:Kp,useDeferredValue:function(i,r){var o=Ot();return y0(o,ht.memoizedState,i,r)},useTransition:function(){var i=Mh(ks)[0],r=Ot().memoizedState;return[typeof i=="boolean"?i:Su(i),r]},useSyncExternalStore:Qv,useId:b0,useHostTransitionStatus:Yp,useFormState:a0,useActionState:a0,useOptimistic:function(i,r){var o=Ot();return Jv(o,ht,i,r)},useMemoCache:zp,useCacheRefresh:w0};Xp.useEffectEvent=h0;var I0={readContext:hn,use:kh,useCallback:g0,useContext:hn,useEffect:Gp,useImperativeHandle:m0,useInsertionEffect:d0,useLayoutEffect:f0,useMemo:_0,useReducer:qp,useRef:u0,useState:function(){return qp(ks)},useDebugValue:Kp,useDeferredValue:function(i,r){var o=Ot();return ht===null?Qp(o,i,r):y0(o,ht.memoizedState,i,r)},useTransition:function(){var i=qp(ks)[0],r=Ot().memoizedState;return[typeof i=="boolean"?i:Su(i),r]},useSyncExternalStore:Qv,useId:b0,useHostTransitionStatus:Yp,useFormState:l0,useActionState:l0,useOptimistic:function(i,r){var o=Ot();return ht!==null?Jv(o,ht,i,r):(o.baseState=i,[i,o.queue.dispatch])},useMemoCache:zp,useCacheRefresh:w0};I0.useEffectEvent=h0;function Zp(i,r,o,u){r=i.memoizedState,o=o(u,r),o=o==null?r:b({},r,o),i.memoizedState=o,i.lanes===0&&(i.updateQueue.baseState=o)}var Jp={enqueueSetState:function(i,r,o){i=i._reactInternals;var u=ci(),d=Dr(u);d.payload=r,o!=null&&(d.callback=o),r=kr(i,d,u),r!==null&&(Wn(r,i,u),Eu(r,i,u))},enqueueReplaceState:function(i,r,o){i=i._reactInternals;var u=ci(),d=Dr(u);d.tag=1,d.payload=r,o!=null&&(d.callback=o),r=kr(i,d,u),r!==null&&(Wn(r,i,u),Eu(r,i,u))},enqueueForceUpdate:function(i,r){i=i._reactInternals;var o=ci(),u=Dr(o);u.tag=2,r!=null&&(u.callback=r),r=kr(i,u,o),r!==null&&(Wn(r,i,o),Eu(r,i,o))}};function N0(i,r,o,u,d,p,y){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(u,p,y):r.prototype&&r.prototype.isPureReactComponent?!du(o,u)||!du(d,p):!0}function P0(i,r,o,u){i=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==i&&Jp.enqueueReplaceState(r,r.state,null)}function Qa(i,r){var o=r;if("ref"in r){o={};for(var u in r)u!=="ref"&&(o[u]=r[u])}if(i=i.defaultProps){o===r&&(o=b({},o));for(var d in i)o[d]===void 0&&(o[d]=i[d])}return o}function x0(i){mh(i)}function D0(i){console.error(i)}function k0(i){mh(i)}function Uh(i,r){try{var o=i.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(u){setTimeout(function(){throw u})}}function M0(i,r,o){try{var u=i.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function em(i,r,o){return o=Dr(o),o.tag=3,o.payload={element:null},o.callback=function(){Uh(i,r)},o}function O0(i){return i=Dr(i),i.tag=3,i}function L0(i,r,o,u){var d=o.type.getDerivedStateFromError;if(typeof d=="function"){var p=u.value;i.payload=function(){return d(p)},i.callback=function(){M0(r,o,u)}}var y=o.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(i.callback=function(){M0(r,o,u),typeof d!="function"&&(Br===null?Br=new Set([this]):Br.add(this));var w=u.stack;this.componentDidCatch(u.value,{componentStack:w!==null?w:""})})}function d2(i,r,o,u,d){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(r=o.alternate,r!==null&&jo(r,o,d,!0),o=ai.current,o!==null){switch(o.tag){case 31:case 13:return bi===null?$h():o.alternate===null&&xt===0&&(xt=3),o.flags&=-257,o.flags|=65536,o.lanes=d,u===Ah?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([u]):r.add(u),Am(i,u,d)),!1;case 22:return o.flags|=65536,u===Ah?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([u]):o.add(u)),Am(i,u,d)),!1}throw Error(s(435,o.tag))}return Am(i,u,d),$h(),!1}if(Qe)return r=ai.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=d,u!==vp&&(i=Error(s(422),{cause:u}),mu(yi(i,o)))):(u!==vp&&(r=Error(s(423),{cause:u}),mu(yi(r,o))),i=i.current.alternate,i.flags|=65536,d&=-d,i.lanes|=d,u=yi(u,o),d=em(i.stateNode,u,d),Pp(i,d),xt!==4&&(xt=2)),!1;var p=Error(s(520),{cause:u});if(p=yi(p,o),Mu===null?Mu=[p]:Mu.push(p),xt!==4&&(xt=2),r===null)return!0;u=yi(u,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,i=d&-d,o.lanes|=i,i=em(o.stateNode,u,i),Pp(o,i),!1;case 1:if(r=o.type,p=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Br===null||!Br.has(p))))return o.flags|=65536,d&=-d,o.lanes|=d,d=O0(d),L0(d,i,o,u),Pp(o,d),!1}o=o.return}while(o!==null);return!1}var tm=Error(s(461)),Ft=!1;function dn(i,r,o,u){r.child=i===null?zv(r,null,o,u):Ga(r,i.child,o,u)}function V0(i,r,o,u,d){o=o.render;var p=r.ref;if("ref"in u){var y={};for(var w in u)w!=="ref"&&(y[w]=u[w])}else y=u;return ja(r),u=Lp(i,r,o,y,p,d),w=Vp(),i!==null&&!Ft?(Up(i,r,d),Ms(i,r,d)):(Qe&&w&&_p(r),r.flags|=1,dn(i,r,u,d),r.child)}function U0(i,r,o,u,d){if(i===null){var p=o.type;return typeof p=="function"&&!pp(p)&&p.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=p,B0(i,r,p,u,d)):(i=vh(o.type,null,u,r,r.mode,d),i.ref=r.ref,i.return=r,r.child=i)}if(p=i.child,!um(i,d)){var y=p.memoizedProps;if(o=o.compare,o=o!==null?o:du,o(y,u)&&i.ref===r.ref)return Ms(i,r,d)}return r.flags|=1,i=Is(p,u),i.ref=r.ref,i.return=r,r.child=i}function B0(i,r,o,u,d){if(i!==null){var p=i.memoizedProps;if(du(p,u)&&i.ref===r.ref)if(Ft=!1,r.pendingProps=u=p,um(i,d))(i.flags&131072)!==0&&(Ft=!0);else return r.lanes=i.lanes,Ms(i,r,d)}return nm(i,r,o,u,d)}function z0(i,r,o,u){var d=u.children,p=i!==null?i.memoizedState:null;if(i===null&&r.stateNode===null&&(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),u.mode==="hidden"){if((r.flags&128)!==0){if(p=p!==null?p.baseLanes|o:o,i!==null){for(u=r.child=i.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;u=d&~p}else u=0,r.child=null;return j0(i,r,p,o,u)}if((o&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},i!==null&&wh(r,p!==null?p.cachePool:null),p!==null?Fv(r,p):Dp(),Hv(r);else return u=r.lanes=536870912,j0(i,r,p!==null?p.baseLanes|o:o,o,u)}else p!==null?(wh(r,p.cachePool),Fv(r,p),Or(),r.memoizedState=null):(i!==null&&wh(r,null),Dp(),Or());return dn(i,r,d,o),r.child}function Ru(i,r){return i!==null&&i.tag===22||r.stateNode!==null||(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.sibling}function j0(i,r,o,u,d){var p=Cp();return p=p===null?null:{parent:jt._currentValue,pool:p},r.memoizedState={baseLanes:o,cachePool:p},i!==null&&wh(r,null),Dp(),Hv(r),i!==null&&jo(i,r,u,!0),r.childLanes=d,null}function Bh(i,r){return r=jh({mode:r.mode,children:r.children},i.mode),r.ref=i.ref,i.child=r,r.return=i,r}function q0(i,r,o){return Ga(r,i.child,null,o),i=Bh(r,r.pendingProps),i.flags|=2,oi(r),r.memoizedState=null,i}function f2(i,r,o){var u=r.pendingProps,d=(r.flags&128)!==0;if(r.flags&=-129,i===null){if(Qe){if(u.mode==="hidden")return i=Bh(r,u),r.lanes=536870912,Ru(null,i);if(Mp(r),(i=vt)?(i=eE(i,Ti),i=i!==null&&i.data==="&"?i:null,i!==null&&(r.memoizedState={dehydrated:i,treeContext:Rr!==null?{id:ns,overflow:is}:null,retryLane:536870912,hydrationErrors:null},o=Av(i),o.return=r,r.child=o,cn=r,vt=null)):i=null,i===null)throw Nr(r);return r.lanes=536870912,null}return Bh(r,u)}var p=i.memoizedState;if(p!==null){var y=p.dehydrated;if(Mp(r),d)if(r.flags&256)r.flags&=-257,r=q0(i,r,o);else if(r.memoizedState!==null)r.child=i.child,r.flags|=128,r=null;else throw Error(s(558));else if(Ft||jo(i,r,o,!1),d=(o&i.childLanes)!==0,Ft||d){if(u=mt,u!==null&&(y=dr(u,o),y!==0&&y!==p.retryLane))throw p.retryLane=y,Va(i,y),Wn(u,i,y),tm;$h(),r=q0(i,r,o)}else i=p.treeContext,vt=wi(y.nextSibling),cn=r,Qe=!0,Ir=null,Ti=!1,i!==null&&Iv(r,i),r=Bh(r,u),r.flags|=4096;return r}return i=Is(i.child,{mode:u.mode,children:u.children}),i.ref=r.ref,r.child=i,i.return=r,i}function zh(i,r){var o=r.ref;if(o===null)i!==null&&i.ref!==null&&(r.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(s(284));(i===null||i.ref!==o)&&(r.flags|=4194816)}}function nm(i,r,o,u,d){return ja(r),o=Lp(i,r,o,u,void 0,d),u=Vp(),i!==null&&!Ft?(Up(i,r,d),Ms(i,r,d)):(Qe&&u&&_p(r),r.flags|=1,dn(i,r,o,d),r.child)}function F0(i,r,o,u,d,p){return ja(r),r.updateQueue=null,o=Kv(r,u,o,d),Gv(i),u=Vp(),i!==null&&!Ft?(Up(i,r,p),Ms(i,r,p)):(Qe&&u&&_p(r),r.flags|=1,dn(i,r,o,p),r.child)}function H0(i,r,o,u,d){if(ja(r),r.stateNode===null){var p=Vo,y=o.contextType;typeof y=="object"&&y!==null&&(p=hn(y)),p=new o(u,p),r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=Jp,r.stateNode=p,p._reactInternals=r,p=r.stateNode,p.props=u,p.state=r.memoizedState,p.refs={},Ip(r),y=o.contextType,p.context=typeof y=="object"&&y!==null?hn(y):Vo,p.state=r.memoizedState,y=o.getDerivedStateFromProps,typeof y=="function"&&(Zp(r,o,y,u),p.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(y=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),y!==p.state&&Jp.enqueueReplaceState(p,p.state,null),bu(r,u,p,d),Tu(),p.state=r.memoizedState),typeof p.componentDidMount=="function"&&(r.flags|=4194308),u=!0}else if(i===null){p=r.stateNode;var w=r.memoizedProps,k=Qa(o,w);p.props=k;var Q=p.context,J=o.contextType;y=Vo,typeof J=="object"&&J!==null&&(y=hn(J));var ne=o.getDerivedStateFromProps;J=typeof ne=="function"||typeof p.getSnapshotBeforeUpdate=="function",w=r.pendingProps!==w,J||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(w||Q!==y)&&P0(r,p,u,y),xr=!1;var W=r.memoizedState;p.state=W,bu(r,u,p,d),Tu(),Q=r.memoizedState,w||W!==Q||xr?(typeof ne=="function"&&(Zp(r,o,ne,u),Q=r.memoizedState),(k=xr||N0(r,o,k,u,W,Q,y))?(J||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(r.flags|=4194308)):(typeof p.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=Q),p.props=u,p.state=Q,p.context=y,u=k):(typeof p.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{p=r.stateNode,Np(i,r),y=r.memoizedProps,J=Qa(o,y),p.props=J,ne=r.pendingProps,W=p.context,Q=o.contextType,k=Vo,typeof Q=="object"&&Q!==null&&(k=hn(Q)),w=o.getDerivedStateFromProps,(Q=typeof w=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(y!==ne||W!==k)&&P0(r,p,u,k),xr=!1,W=r.memoizedState,p.state=W,bu(r,u,p,d),Tu();var Y=r.memoizedState;y!==ne||W!==Y||xr||i!==null&&i.dependencies!==null&&Th(i.dependencies)?(typeof w=="function"&&(Zp(r,o,w,u),Y=r.memoizedState),(J=xr||N0(r,o,J,u,W,Y,k)||i!==null&&i.dependencies!==null&&Th(i.dependencies))?(Q||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(u,Y,k),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(u,Y,k)),typeof p.componentDidUpdate=="function"&&(r.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof p.componentDidUpdate!="function"||y===i.memoizedProps&&W===i.memoizedState||(r.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||y===i.memoizedProps&&W===i.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=Y),p.props=u,p.state=Y,p.context=k,u=J):(typeof p.componentDidUpdate!="function"||y===i.memoizedProps&&W===i.memoizedState||(r.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||y===i.memoizedProps&&W===i.memoizedState||(r.flags|=1024),u=!1)}return p=u,zh(i,r),u=(r.flags&128)!==0,p||u?(p=r.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:p.render(),r.flags|=1,i!==null&&u?(r.child=Ga(r,i.child,null,d),r.child=Ga(r,null,o,d)):dn(i,r,o,d),r.memoizedState=p.state,i=r.child):i=Ms(i,r,d),i}function G0(i,r,o,u){return Ba(),r.flags|=256,dn(i,r,o,u),r.child}var im={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function sm(i){return{baseLanes:i,cachePool:Mv()}}function rm(i,r,o){return i=i!==null?i.childLanes&~o:0,r&&(i|=ui),i}function K0(i,r,o){var u=r.pendingProps,d=!1,p=(r.flags&128)!==0,y;if((y=p)||(y=i!==null&&i.memoizedState===null?!1:(Mt.current&2)!==0),y&&(d=!0,r.flags&=-129),y=(r.flags&32)!==0,r.flags&=-33,i===null){if(Qe){if(d?Mr(r):Or(),(i=vt)?(i=eE(i,Ti),i=i!==null&&i.data!=="&"?i:null,i!==null&&(r.memoizedState={dehydrated:i,treeContext:Rr!==null?{id:ns,overflow:is}:null,retryLane:536870912,hydrationErrors:null},o=Av(i),o.return=r,r.child=o,cn=r,vt=null)):i=null,i===null)throw Nr(r);return jm(i)?r.lanes=32:r.lanes=536870912,null}var w=u.children;return u=u.fallback,d?(Or(),d=r.mode,w=jh({mode:"hidden",children:w},d),u=Ua(u,d,o,null),w.return=r,u.return=r,w.sibling=u,r.child=w,u=r.child,u.memoizedState=sm(o),u.childLanes=rm(i,y,o),r.memoizedState=im,Ru(null,u)):(Mr(r),am(r,w))}var k=i.memoizedState;if(k!==null&&(w=k.dehydrated,w!==null)){if(p)r.flags&256?(Mr(r),r.flags&=-257,r=om(i,r,o)):r.memoizedState!==null?(Or(),r.child=i.child,r.flags|=128,r=null):(Or(),w=u.fallback,d=r.mode,u=jh({mode:"visible",children:u.children},d),w=Ua(w,d,o,null),w.flags|=2,u.return=r,w.return=r,u.sibling=w,r.child=u,Ga(r,i.child,null,o),u=r.child,u.memoizedState=sm(o),u.childLanes=rm(i,y,o),r.memoizedState=im,r=Ru(null,u));else if(Mr(r),jm(w)){if(y=w.nextSibling&&w.nextSibling.dataset,y)var Q=y.dgst;y=Q,u=Error(s(419)),u.stack="",u.digest=y,mu({value:u,source:null,stack:null}),r=om(i,r,o)}else if(Ft||jo(i,r,o,!1),y=(o&i.childLanes)!==0,Ft||y){if(y=mt,y!==null&&(u=dr(y,o),u!==0&&u!==k.retryLane))throw k.retryLane=u,Va(i,u),Wn(y,i,u),tm;zm(w)||$h(),r=om(i,r,o)}else zm(w)?(r.flags|=192,r.child=i.child,r=null):(i=k.treeContext,vt=wi(w.nextSibling),cn=r,Qe=!0,Ir=null,Ti=!1,i!==null&&Iv(r,i),r=am(r,u.children),r.flags|=4096);return r}return d?(Or(),w=u.fallback,d=r.mode,k=i.child,Q=k.sibling,u=Is(k,{mode:"hidden",children:u.children}),u.subtreeFlags=k.subtreeFlags&65011712,Q!==null?w=Is(Q,w):(w=Ua(w,d,o,null),w.flags|=2),w.return=r,u.return=r,u.sibling=w,r.child=u,Ru(null,u),u=r.child,w=i.child.memoizedState,w===null?w=sm(o):(d=w.cachePool,d!==null?(k=jt._currentValue,d=d.parent!==k?{parent:k,pool:k}:d):d=Mv(),w={baseLanes:w.baseLanes|o,cachePool:d}),u.memoizedState=w,u.childLanes=rm(i,y,o),r.memoizedState=im,Ru(i.child,u)):(Mr(r),o=i.child,i=o.sibling,o=Is(o,{mode:"visible",children:u.children}),o.return=r,o.sibling=null,i!==null&&(y=r.deletions,y===null?(r.deletions=[i],r.flags|=16):y.push(i)),r.child=o,r.memoizedState=null,o)}function am(i,r){return r=jh({mode:"visible",children:r},i.mode),r.return=i,i.child=r}function jh(i,r){return i=ri(22,i,null,r),i.lanes=0,i}function om(i,r,o){return Ga(r,i.child,null,o),i=am(r,r.pendingProps.children),i.flags|=2,r.memoizedState=null,i}function Q0(i,r,o){i.lanes|=r;var u=i.alternate;u!==null&&(u.lanes|=r),bp(i.return,r,o)}function lm(i,r,o,u,d,p){var y=i.memoizedState;y===null?i.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d,treeForkCount:p}:(y.isBackwards=r,y.rendering=null,y.renderingStartTime=0,y.last=u,y.tail=o,y.tailMode=d,y.treeForkCount=p)}function W0(i,r,o){var u=r.pendingProps,d=u.revealOrder,p=u.tail;u=u.children;var y=Mt.current,w=(y&2)!==0;if(w?(y=y&1|2,r.flags|=128):y&=1,j(Mt,y),dn(i,r,u,o),u=Qe?pu:0,!w&&i!==null&&(i.flags&128)!==0)e:for(i=r.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Q0(i,o,r);else if(i.tag===19)Q0(i,o,r);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break e;for(;i.sibling===null;){if(i.return===null||i.return===r)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}switch(d){case"forwards":for(o=r.child,d=null;o!==null;)i=o.alternate,i!==null&&Nh(i)===null&&(d=o),o=o.sibling;o=d,o===null?(d=r.child,r.child=null):(d=o.sibling,o.sibling=null),lm(r,!1,d,o,p,u);break;case"backwards":case"unstable_legacy-backwards":for(o=null,d=r.child,r.child=null;d!==null;){if(i=d.alternate,i!==null&&Nh(i)===null){r.child=d;break}i=d.sibling,d.sibling=o,o=d,d=i}lm(r,!0,o,null,p,u);break;case"together":lm(r,!1,null,null,void 0,u);break;default:r.memoizedState=null}return r.child}function Ms(i,r,o){if(i!==null&&(r.dependencies=i.dependencies),Ur|=r.lanes,(o&r.childLanes)===0)if(i!==null){if(jo(i,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(i!==null&&r.child!==i.child)throw Error(s(153));if(r.child!==null){for(i=r.child,o=Is(i,i.pendingProps),r.child=o,o.return=r;i.sibling!==null;)i=i.sibling,o=o.sibling=Is(i,i.pendingProps),o.return=r;o.sibling=null}return r.child}function um(i,r){return(i.lanes&r)!==0?!0:(i=i.dependencies,!!(i!==null&&Th(i)))}function p2(i,r,o){switch(r.tag){case 3:_e(r,r.stateNode.containerInfo),Pr(r,jt,i.memoizedState.cache),Ba();break;case 27:case 5:Xe(r);break;case 4:_e(r,r.stateNode.containerInfo);break;case 10:Pr(r,r.type,r.memoizedProps.value);break;case 31:if(r.memoizedState!==null)return r.flags|=128,Mp(r),null;break;case 13:var u=r.memoizedState;if(u!==null)return u.dehydrated!==null?(Mr(r),r.flags|=128,null):(o&r.child.childLanes)!==0?K0(i,r,o):(Mr(r),i=Ms(i,r,o),i!==null?i.sibling:null);Mr(r);break;case 19:var d=(i.flags&128)!==0;if(u=(o&r.childLanes)!==0,u||(jo(i,r,o,!1),u=(o&r.childLanes)!==0),d){if(u)return W0(i,r,o);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),j(Mt,Mt.current),u)break;return null;case 22:return r.lanes=0,z0(i,r,o,r.pendingProps);case 24:Pr(r,jt,i.memoizedState.cache)}return Ms(i,r,o)}function Y0(i,r,o){if(i!==null)if(i.memoizedProps!==r.pendingProps)Ft=!0;else{if(!um(i,o)&&(r.flags&128)===0)return Ft=!1,p2(i,r,o);Ft=(i.flags&131072)!==0}else Ft=!1,Qe&&(r.flags&1048576)!==0&&Rv(r,pu,r.index);switch(r.lanes=0,r.tag){case 16:e:{var u=r.pendingProps;if(i=Fa(r.elementType),r.type=i,typeof i=="function")pp(i)?(u=Qa(i,u),r.tag=1,r=H0(null,r,i,u,o)):(r.tag=0,r=nm(null,r,i,u,o));else{if(i!=null){var d=i.$$typeof;if(d===me){r.tag=11,r=V0(null,r,i,u,o);break e}else if(d===M){r.tag=14,r=U0(null,r,i,u,o);break e}}throw r=ct(i)||i,Error(s(306,r,""))}}return r;case 0:return nm(i,r,r.type,r.pendingProps,o);case 1:return u=r.type,d=Qa(u,r.pendingProps),H0(i,r,u,d,o);case 3:e:{if(_e(r,r.stateNode.containerInfo),i===null)throw Error(s(387));u=r.pendingProps;var p=r.memoizedState;d=p.element,Np(i,r),bu(r,u,null,o);var y=r.memoizedState;if(u=y.cache,Pr(r,jt,u),u!==p.cache&&wp(r,[jt],o,!0),Tu(),u=y.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:y.cache},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){r=G0(i,r,u,o);break e}else if(u!==d){d=yi(Error(s(424)),r),mu(d),r=G0(i,r,u,o);break e}else{switch(i=r.stateNode.containerInfo,i.nodeType){case 9:i=i.body;break;default:i=i.nodeName==="HTML"?i.ownerDocument.body:i}for(vt=wi(i.firstChild),cn=r,Qe=!0,Ir=null,Ti=!0,o=zv(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(Ba(),u===d){r=Ms(i,r,o);break e}dn(i,r,u,o)}r=r.child}return r;case 26:return zh(i,r),i===null?(o=aE(r.type,null,r.pendingProps,null))?r.memoizedState=o:Qe||(o=r.type,i=r.pendingProps,u=id(se.current).createElement(o),u[It]=r,u[un]=i,fn(u,o,i),kt(u),r.stateNode=u):r.memoizedState=aE(r.type,i.memoizedProps,r.pendingProps,i.memoizedState),null;case 27:return Xe(r),i===null&&Qe&&(u=r.stateNode=iE(r.type,r.pendingProps,se.current),cn=r,Ti=!0,d=vt,Fr(r.type)?(qm=d,vt=wi(u.firstChild)):vt=d),dn(i,r,r.pendingProps.children,o),zh(i,r),i===null&&(r.flags|=4194304),r.child;case 5:return i===null&&Qe&&((d=u=vt)&&(u=H2(u,r.type,r.pendingProps,Ti),u!==null?(r.stateNode=u,cn=r,vt=wi(u.firstChild),Ti=!1,d=!0):d=!1),d||Nr(r)),Xe(r),d=r.type,p=r.pendingProps,y=i!==null?i.memoizedProps:null,u=p.children,Vm(d,p)?u=null:y!==null&&Vm(d,y)&&(r.flags|=32),r.memoizedState!==null&&(d=Lp(i,r,r2,null,null,o),qu._currentValue=d),zh(i,r),dn(i,r,u,o),r.child;case 6:return i===null&&Qe&&((i=o=vt)&&(o=G2(o,r.pendingProps,Ti),o!==null?(r.stateNode=o,cn=r,vt=null,i=!0):i=!1),i||Nr(r)),null;case 13:return K0(i,r,o);case 4:return _e(r,r.stateNode.containerInfo),u=r.pendingProps,i===null?r.child=Ga(r,null,u,o):dn(i,r,u,o),r.child;case 11:return V0(i,r,r.type,r.pendingProps,o);case 7:return dn(i,r,r.pendingProps,o),r.child;case 8:return dn(i,r,r.pendingProps.children,o),r.child;case 12:return dn(i,r,r.pendingProps.children,o),r.child;case 10:return u=r.pendingProps,Pr(r,r.type,u.value),dn(i,r,u.children,o),r.child;case 9:return d=r.type._context,u=r.pendingProps.children,ja(r),d=hn(d),u=u(d),r.flags|=1,dn(i,r,u,o),r.child;case 14:return U0(i,r,r.type,r.pendingProps,o);case 15:return B0(i,r,r.type,r.pendingProps,o);case 19:return W0(i,r,o);case 31:return f2(i,r,o);case 22:return z0(i,r,o,r.pendingProps);case 24:return ja(r),u=hn(jt),i===null?(d=Cp(),d===null&&(d=mt,p=Sp(),d.pooledCache=p,p.refCount++,p!==null&&(d.pooledCacheLanes|=o),d=p),r.memoizedState={parent:u,cache:d},Ip(r),Pr(r,jt,d)):((i.lanes&o)!==0&&(Np(i,r),bu(r,null,null,o),Tu()),d=i.memoizedState,p=r.memoizedState,d.parent!==u?(d={parent:u,cache:u},r.memoizedState=d,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=d),Pr(r,jt,u)):(u=p.cache,Pr(r,jt,u),u!==d.cache&&wp(r,[jt],o,!0))),dn(i,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}function Os(i){i.flags|=4}function cm(i,r,o,u,d){if((r=(i.mode&32)!==0)&&(r=!1),r){if(i.flags|=16777216,(d&335544128)===d)if(i.stateNode.complete)i.flags|=8192;else if(b1())i.flags|=8192;else throw Ha=Ah,Rp}else i.flags&=-16777217}function $0(i,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!hE(r))if(b1())i.flags|=8192;else throw Ha=Ah,Rp}function qh(i,r){r!==null&&(i.flags|=4),i.flags&16384&&(r=i.tag!==22?Wl():536870912,i.lanes|=r,Jo|=r)}function Iu(i,r){if(!Qe)switch(i.tailMode){case"hidden":r=i.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?i.tail=null:o.sibling=null;break;case"collapsed":o=i.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||i.tail===null?i.tail=null:i.tail.sibling=null:u.sibling=null}}function Et(i){var r=i.alternate!==null&&i.alternate.child===i.child,o=0,u=0;if(r)for(var d=i.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&65011712,u|=d.flags&65011712,d.return=i,d=d.sibling;else for(d=i.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=i,d=d.sibling;return i.subtreeFlags|=u,i.childLanes=o,r}function m2(i,r,o){var u=r.pendingProps;switch(yp(r),r.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Et(r),null;case 1:return Et(r),null;case 3:return o=r.stateNode,u=null,i!==null&&(u=i.memoizedState.cache),r.memoizedState.cache!==u&&(r.flags|=2048),xs(jt),we(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(i===null||i.child===null)&&(zo(r)?Os(r):i===null||i.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Ep())),Et(r),null;case 26:var d=r.type,p=r.memoizedState;return i===null?(Os(r),p!==null?(Et(r),$0(r,p)):(Et(r),cm(r,d,null,u,o))):p?p!==i.memoizedState?(Os(r),Et(r),$0(r,p)):(Et(r),r.flags&=-16777217):(i=i.memoizedProps,i!==u&&Os(r),Et(r),cm(r,d,i,u,o)),null;case 27:if(Ke(r),o=se.current,d=r.type,i!==null&&r.stateNode!=null)i.memoizedProps!==u&&Os(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return Et(r),null}i=z.current,zo(r)?Nv(r):(i=iE(d,u,o),r.stateNode=i,Os(r))}return Et(r),null;case 5:if(Ke(r),d=r.type,i!==null&&r.stateNode!=null)i.memoizedProps!==u&&Os(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return Et(r),null}if(p=z.current,zo(r))Nv(r);else{var y=id(se.current);switch(p){case 1:p=y.createElementNS("http://www.w3.org/2000/svg",d);break;case 2:p=y.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;default:switch(d){case"svg":p=y.createElementNS("http://www.w3.org/2000/svg",d);break;case"math":p=y.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;case"script":p=y.createElement("div"),p.innerHTML="<script><\/script>",p=p.removeChild(p.firstChild);break;case"select":p=typeof u.is=="string"?y.createElement("select",{is:u.is}):y.createElement("select"),u.multiple?p.multiple=!0:u.size&&(p.size=u.size);break;default:p=typeof u.is=="string"?y.createElement(d,{is:u.is}):y.createElement(d)}}p[It]=r,p[un]=u;e:for(y=r.child;y!==null;){if(y.tag===5||y.tag===6)p.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===r)break e;for(;y.sibling===null;){if(y.return===null||y.return===r)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}r.stateNode=p;e:switch(fn(p,d,u),d){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}u&&Os(r)}}return Et(r),cm(r,r.type,i===null?null:i.memoizedProps,r.pendingProps,o),null;case 6:if(i&&r.stateNode!=null)i.memoizedProps!==u&&Os(r);else{if(typeof u!="string"&&r.stateNode===null)throw Error(s(166));if(i=se.current,zo(r)){if(i=r.stateNode,o=r.memoizedProps,u=null,d=cn,d!==null)switch(d.tag){case 27:case 5:u=d.memoizedProps}i[It]=r,i=!!(i.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||K1(i.nodeValue,o)),i||Nr(r,!0)}else i=id(i).createTextNode(u),i[It]=r,r.stateNode=i}return Et(r),null;case 31:if(o=r.memoizedState,i===null||i.memoizedState!==null){if(u=zo(r),o!==null){if(i===null){if(!u)throw Error(s(318));if(i=r.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(557));i[It]=r}else Ba(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Et(r),i=!1}else o=Ep(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=o),i=!0;if(!i)return r.flags&256?(oi(r),r):(oi(r),null);if((r.flags&128)!==0)throw Error(s(558))}return Et(r),null;case 13:if(u=r.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(d=zo(r),u!==null&&u.dehydrated!==null){if(i===null){if(!d)throw Error(s(318));if(d=r.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(s(317));d[It]=r}else Ba(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Et(r),d=!1}else d=Ep(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=d),d=!0;if(!d)return r.flags&256?(oi(r),r):(oi(r),null)}return oi(r),(r.flags&128)!==0?(r.lanes=o,r):(o=u!==null,i=i!==null&&i.memoizedState!==null,o&&(u=r.child,d=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(d=u.alternate.memoizedState.cachePool.pool),p=null,u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(p=u.memoizedState.cachePool.pool),p!==d&&(u.flags|=2048)),o!==i&&o&&(r.child.flags|=8192),qh(r,r.updateQueue),Et(r),null);case 4:return we(),i===null&&Dm(r.stateNode.containerInfo),Et(r),null;case 10:return xs(r.type),Et(r),null;case 19:if(x(Mt),u=r.memoizedState,u===null)return Et(r),null;if(d=(r.flags&128)!==0,p=u.rendering,p===null)if(d)Iu(u,!1);else{if(xt!==0||i!==null&&(i.flags&128)!==0)for(i=r.child;i!==null;){if(p=Nh(i),p!==null){for(r.flags|=128,Iu(u,!1),i=p.updateQueue,r.updateQueue=i,qh(r,i),r.subtreeFlags=0,i=o,o=r.child;o!==null;)Sv(o,i),o=o.sibling;return j(Mt,Mt.current&1|2),Qe&&Ns(r,u.treeForkCount),r.child}i=i.sibling}u.tail!==null&&Ut()>Qh&&(r.flags|=128,d=!0,Iu(u,!1),r.lanes=4194304)}else{if(!d)if(i=Nh(p),i!==null){if(r.flags|=128,d=!0,i=i.updateQueue,r.updateQueue=i,qh(r,i),Iu(u,!0),u.tail===null&&u.tailMode==="hidden"&&!p.alternate&&!Qe)return Et(r),null}else 2*Ut()-u.renderingStartTime>Qh&&o!==536870912&&(r.flags|=128,d=!0,Iu(u,!1),r.lanes=4194304);u.isBackwards?(p.sibling=r.child,r.child=p):(i=u.last,i!==null?i.sibling=p:r.child=p,u.last=p)}return u.tail!==null?(i=u.tail,u.rendering=i,u.tail=i.sibling,u.renderingStartTime=Ut(),i.sibling=null,o=Mt.current,j(Mt,d?o&1|2:o&1),Qe&&Ns(r,u.treeForkCount),i):(Et(r),null);case 22:case 23:return oi(r),kp(),u=r.memoizedState!==null,i!==null?i.memoizedState!==null!==u&&(r.flags|=8192):u&&(r.flags|=8192),u?(o&536870912)!==0&&(r.flags&128)===0&&(Et(r),r.subtreeFlags&6&&(r.flags|=8192)):Et(r),o=r.updateQueue,o!==null&&qh(r,o.retryQueue),o=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==o&&(r.flags|=2048),i!==null&&x(qa),null;case 24:return o=null,i!==null&&(o=i.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),xs(jt),Et(r),null;case 25:return null;case 30:return null}throw Error(s(156,r.tag))}function g2(i,r){switch(yp(r),r.tag){case 1:return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 3:return xs(jt),we(),i=r.flags,(i&65536)!==0&&(i&128)===0?(r.flags=i&-65537|128,r):null;case 26:case 27:case 5:return Ke(r),null;case 31:if(r.memoizedState!==null){if(oi(r),r.alternate===null)throw Error(s(340));Ba()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 13:if(oi(r),i=r.memoizedState,i!==null&&i.dehydrated!==null){if(r.alternate===null)throw Error(s(340));Ba()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 19:return x(Mt),null;case 4:return we(),null;case 10:return xs(r.type),null;case 22:case 23:return oi(r),kp(),i!==null&&x(qa),i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 24:return xs(jt),null;case 25:return null;default:return null}}function X0(i,r){switch(yp(r),r.tag){case 3:xs(jt),we();break;case 26:case 27:case 5:Ke(r);break;case 4:we();break;case 31:r.memoizedState!==null&&oi(r);break;case 13:oi(r);break;case 19:x(Mt);break;case 10:xs(r.type);break;case 22:case 23:oi(r),kp(),i!==null&&x(qa);break;case 24:xs(jt)}}function Nu(i,r){try{var o=r.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&i)===i){u=void 0;var p=o.create,y=o.inst;u=p(),y.destroy=u}o=o.next}while(o!==d)}}catch(w){ut(r,r.return,w)}}function Lr(i,r,o){try{var u=r.updateQueue,d=u!==null?u.lastEffect:null;if(d!==null){var p=d.next;u=p;do{if((u.tag&i)===i){var y=u.inst,w=y.destroy;if(w!==void 0){y.destroy=void 0,d=r;var k=o,Q=w;try{Q()}catch(J){ut(d,k,J)}}}u=u.next}while(u!==p)}}catch(J){ut(r,r.return,J)}}function Z0(i){var r=i.updateQueue;if(r!==null){var o=i.stateNode;try{qv(r,o)}catch(u){ut(i,i.return,u)}}}function J0(i,r,o){o.props=Qa(i.type,i.memoizedProps),o.state=i.memoizedState;try{o.componentWillUnmount()}catch(u){ut(i,r,u)}}function Pu(i,r){try{var o=i.ref;if(o!==null){switch(i.tag){case 26:case 27:case 5:var u=i.stateNode;break;case 30:u=i.stateNode;break;default:u=i.stateNode}typeof o=="function"?i.refCleanup=o(u):o.current=u}}catch(d){ut(i,r,d)}}function ss(i,r){var o=i.ref,u=i.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(d){ut(i,r,d)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(d){ut(i,r,d)}else o.current=null}function e1(i){var r=i.type,o=i.memoizedProps,u=i.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(d){ut(i,i.return,d)}}function hm(i,r,o){try{var u=i.stateNode;U2(u,i.type,o,r),u[un]=r}catch(d){ut(i,i.return,d)}}function t1(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27&&Fr(i.type)||i.tag===4}function dm(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||t1(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.tag===27&&Fr(i.type)||i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function fm(i,r,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,r?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(i,r):(r=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,r.appendChild(i),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=en));else if(u!==4&&(u===27&&Fr(i.type)&&(o=i.stateNode,r=null),i=i.child,i!==null))for(fm(i,r,o),i=i.sibling;i!==null;)fm(i,r,o),i=i.sibling}function Fh(i,r,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,r?o.insertBefore(i,r):o.appendChild(i);else if(u!==4&&(u===27&&Fr(i.type)&&(o=i.stateNode),i=i.child,i!==null))for(Fh(i,r,o),i=i.sibling;i!==null;)Fh(i,r,o),i=i.sibling}function n1(i){var r=i.stateNode,o=i.memoizedProps;try{for(var u=i.type,d=r.attributes;d.length;)r.removeAttributeNode(d[0]);fn(r,u,o),r[It]=i,r[un]=o}catch(p){ut(i,i.return,p)}}var Ls=!1,Ht=!1,pm=!1,i1=typeof WeakSet=="function"?WeakSet:Set,sn=null;function _2(i,r){if(i=i.containerInfo,Om=cd,i=mv(i),op(i)){if("selectionStart"in i)var o={start:i.selectionStart,end:i.selectionEnd};else e:{o=(o=i.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var y=0,w=-1,k=-1,Q=0,J=0,ne=i,W=null;t:for(;;){for(var Y;ne!==o||d!==0&&ne.nodeType!==3||(w=y+d),ne!==p||u!==0&&ne.nodeType!==3||(k=y+u),ne.nodeType===3&&(y+=ne.nodeValue.length),(Y=ne.firstChild)!==null;)W=ne,ne=Y;for(;;){if(ne===i)break t;if(W===o&&++Q===d&&(w=y),W===p&&++J===u&&(k=y),(Y=ne.nextSibling)!==null)break;ne=W,W=ne.parentNode}ne=Y}o=w===-1||k===-1?null:{start:w,end:k}}else o=null}o=o||{start:0,end:0}}else o=null;for(Lm={focusedElem:i,selectionRange:o},cd=!1,sn=r;sn!==null;)if(r=sn,i=r.child,(r.subtreeFlags&1028)!==0&&i!==null)i.return=r,sn=i;else for(;sn!==null;){switch(r=sn,p=r.alternate,i=r.flags,r.tag){case 0:if((i&4)!==0&&(i=r.updateQueue,i=i!==null?i.events:null,i!==null))for(o=0;o<i.length;o++)d=i[o],d.ref.impl=d.nextImpl;break;case 11:case 15:break;case 1:if((i&1024)!==0&&p!==null){i=void 0,o=r,d=p.memoizedProps,p=p.memoizedState,u=o.stateNode;try{var ge=Qa(o.type,d);i=u.getSnapshotBeforeUpdate(ge,p),u.__reactInternalSnapshotBeforeUpdate=i}catch(Se){ut(o,o.return,Se)}}break;case 3:if((i&1024)!==0){if(i=r.stateNode.containerInfo,o=i.nodeType,o===9)Bm(i);else if(o===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":Bm(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(s(163))}if(i=r.sibling,i!==null){i.return=r.return,sn=i;break}sn=r.return}}function s1(i,r,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:Us(i,o),u&4&&Nu(5,o);break;case 1:if(Us(i,o),u&4)if(i=o.stateNode,r===null)try{i.componentDidMount()}catch(y){ut(o,o.return,y)}else{var d=Qa(o.type,r.memoizedProps);r=r.memoizedState;try{i.componentDidUpdate(d,r,i.__reactInternalSnapshotBeforeUpdate)}catch(y){ut(o,o.return,y)}}u&64&&Z0(o),u&512&&Pu(o,o.return);break;case 3:if(Us(i,o),u&64&&(i=o.updateQueue,i!==null)){if(r=null,o.child!==null)switch(o.child.tag){case 27:case 5:r=o.child.stateNode;break;case 1:r=o.child.stateNode}try{qv(i,r)}catch(y){ut(o,o.return,y)}}break;case 27:r===null&&u&4&&n1(o);case 26:case 5:Us(i,o),r===null&&u&4&&e1(o),u&512&&Pu(o,o.return);break;case 12:Us(i,o);break;case 31:Us(i,o),u&4&&o1(i,o);break;case 13:Us(i,o),u&4&&l1(i,o),u&64&&(i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null&&(o=C2.bind(null,o),K2(i,o))));break;case 22:if(u=o.memoizedState!==null||Ls,!u){r=r!==null&&r.memoizedState!==null||Ht,d=Ls;var p=Ht;Ls=u,(Ht=r)&&!p?Bs(i,o,(o.subtreeFlags&8772)!==0):Us(i,o),Ls=d,Ht=p}break;case 30:break;default:Us(i,o)}}function r1(i){var r=i.alternate;r!==null&&(i.alternate=null,r1(r)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(r=i.stateNode,r!==null&&Aa(r)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var At=null,Hn=!1;function Vs(i,r,o){for(o=o.child;o!==null;)a1(i,r,o),o=o.sibling}function a1(i,r,o){if(yn&&typeof yn.onCommitFiberUnmount=="function")try{yn.onCommitFiberUnmount(Qi,o)}catch{}switch(o.tag){case 26:Ht||ss(o,r),Vs(i,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Ht||ss(o,r);var u=At,d=Hn;Fr(o.type)&&(At=o.stateNode,Hn=!1),Vs(i,r,o),Bu(o.stateNode),At=u,Hn=d;break;case 5:Ht||ss(o,r);case 6:if(u=At,d=Hn,At=null,Vs(i,r,o),At=u,Hn=d,At!==null)if(Hn)try{(At.nodeType===9?At.body:At.nodeName==="HTML"?At.ownerDocument.body:At).removeChild(o.stateNode)}catch(p){ut(o,r,p)}else try{At.removeChild(o.stateNode)}catch(p){ut(o,r,p)}break;case 18:At!==null&&(Hn?(i=At,Z1(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,o.stateNode),ol(i)):Z1(At,o.stateNode));break;case 4:u=At,d=Hn,At=o.stateNode.containerInfo,Hn=!0,Vs(i,r,o),At=u,Hn=d;break;case 0:case 11:case 14:case 15:Lr(2,o,r),Ht||Lr(4,o,r),Vs(i,r,o);break;case 1:Ht||(ss(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"&&J0(o,r,u)),Vs(i,r,o);break;case 21:Vs(i,r,o);break;case 22:Ht=(u=Ht)||o.memoizedState!==null,Vs(i,r,o),Ht=u;break;default:Vs(i,r,o)}}function o1(i,r){if(r.memoizedState===null&&(i=r.alternate,i!==null&&(i=i.memoizedState,i!==null))){i=i.dehydrated;try{ol(i)}catch(o){ut(r,r.return,o)}}}function l1(i,r){if(r.memoizedState===null&&(i=r.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{ol(i)}catch(o){ut(r,r.return,o)}}function y2(i){switch(i.tag){case 31:case 13:case 19:var r=i.stateNode;return r===null&&(r=i.stateNode=new i1),r;case 22:return i=i.stateNode,r=i._retryCache,r===null&&(r=i._retryCache=new i1),r;default:throw Error(s(435,i.tag))}}function Hh(i,r){var o=y2(i);r.forEach(function(u){if(!o.has(u)){o.add(u);var d=R2.bind(null,i,u);u.then(d,d)}})}function Gn(i,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u],p=i,y=r,w=y;e:for(;w!==null;){switch(w.tag){case 27:if(Fr(w.type)){At=w.stateNode,Hn=!1;break e}break;case 5:At=w.stateNode,Hn=!1;break e;case 3:case 4:At=w.stateNode.containerInfo,Hn=!0;break e}w=w.return}if(At===null)throw Error(s(160));a1(p,y,d),At=null,Hn=!1,p=d.alternate,p!==null&&(p.return=null),d.return=null}if(r.subtreeFlags&13886)for(r=r.child;r!==null;)u1(r,i),r=r.sibling}var Oi=null;function u1(i,r){var o=i.alternate,u=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:Gn(r,i),Kn(i),u&4&&(Lr(3,i,i.return),Nu(3,i),Lr(5,i,i.return));break;case 1:Gn(r,i),Kn(i),u&512&&(Ht||o===null||ss(o,o.return)),u&64&&Ls&&(i=i.updateQueue,i!==null&&(u=i.callbacks,u!==null&&(o=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var d=Oi;if(Gn(r,i),Kn(i),u&512&&(Ht||o===null||ss(o,o.return)),u&4){var p=o!==null?o.memoizedState:null;if(u=i.memoizedState,o===null)if(u===null)if(i.stateNode===null){e:{u=i.type,o=i.memoizedProps,d=d.ownerDocument||d;t:switch(u){case"title":p=d.getElementsByTagName("title")[0],(!p||p[Es]||p[It]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=d.createElement(u),d.head.insertBefore(p,d.querySelector("head > title"))),fn(p,u,o),p[It]=i,kt(p),u=p;break e;case"link":var y=uE("link","href",d).get(u+(o.href||""));if(y){for(var w=0;w<y.length;w++)if(p=y[w],p.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&p.getAttribute("rel")===(o.rel==null?null:o.rel)&&p.getAttribute("title")===(o.title==null?null:o.title)&&p.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){y.splice(w,1);break t}}p=d.createElement(u),fn(p,u,o),d.head.appendChild(p);break;case"meta":if(y=uE("meta","content",d).get(u+(o.content||""))){for(w=0;w<y.length;w++)if(p=y[w],p.getAttribute("content")===(o.content==null?null:""+o.content)&&p.getAttribute("name")===(o.name==null?null:o.name)&&p.getAttribute("property")===(o.property==null?null:o.property)&&p.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&p.getAttribute("charset")===(o.charSet==null?null:o.charSet)){y.splice(w,1);break t}}p=d.createElement(u),fn(p,u,o),d.head.appendChild(p);break;default:throw Error(s(468,u))}p[It]=i,kt(p),u=p}i.stateNode=u}else cE(d,i.type,i.stateNode);else i.stateNode=lE(d,u,i.memoizedProps);else p!==u?(p===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):p.count--,u===null?cE(d,i.type,i.stateNode):lE(d,u,i.memoizedProps)):u===null&&i.stateNode!==null&&hm(i,i.memoizedProps,o.memoizedProps)}break;case 27:Gn(r,i),Kn(i),u&512&&(Ht||o===null||ss(o,o.return)),o!==null&&u&4&&hm(i,i.memoizedProps,o.memoizedProps);break;case 5:if(Gn(r,i),Kn(i),u&512&&(Ht||o===null||ss(o,o.return)),i.flags&32){d=i.stateNode;try{gi(d,"")}catch(ge){ut(i,i.return,ge)}}u&4&&i.stateNode!=null&&(d=i.memoizedProps,hm(i,d,o!==null?o.memoizedProps:d)),u&1024&&(pm=!0);break;case 6:if(Gn(r,i),Kn(i),u&4){if(i.stateNode===null)throw Error(s(162));u=i.memoizedProps,o=i.stateNode;try{o.nodeValue=u}catch(ge){ut(i,i.return,ge)}}break;case 3:if(ad=null,d=Oi,Oi=sd(r.containerInfo),Gn(r,i),Oi=d,Kn(i),u&4&&o!==null&&o.memoizedState.isDehydrated)try{ol(r.containerInfo)}catch(ge){ut(i,i.return,ge)}pm&&(pm=!1,c1(i));break;case 4:u=Oi,Oi=sd(i.stateNode.containerInfo),Gn(r,i),Kn(i),Oi=u;break;case 12:Gn(r,i),Kn(i);break;case 31:Gn(r,i),Kn(i),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,Hh(i,u)));break;case 13:Gn(r,i),Kn(i),i.child.flags&8192&&i.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Kh=Ut()),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,Hh(i,u)));break;case 22:d=i.memoizedState!==null;var k=o!==null&&o.memoizedState!==null,Q=Ls,J=Ht;if(Ls=Q||d,Ht=J||k,Gn(r,i),Ht=J,Ls=Q,Kn(i),u&8192)e:for(r=i.stateNode,r._visibility=d?r._visibility&-2:r._visibility|1,d&&(o===null||k||Ls||Ht||Wa(i)),o=null,r=i;;){if(r.tag===5||r.tag===26){if(o===null){k=o=r;try{if(p=k.stateNode,d)y=p.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{w=k.stateNode;var ne=k.memoizedProps.style,W=ne!=null&&ne.hasOwnProperty("display")?ne.display:null;w.style.display=W==null||typeof W=="boolean"?"":(""+W).trim()}}catch(ge){ut(k,k.return,ge)}}}else if(r.tag===6){if(o===null){k=r;try{k.stateNode.nodeValue=d?"":k.memoizedProps}catch(ge){ut(k,k.return,ge)}}}else if(r.tag===18){if(o===null){k=r;try{var Y=k.stateNode;d?J1(Y,!0):J1(k.stateNode,!1)}catch(ge){ut(k,k.return,ge)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===i)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}u&4&&(u=i.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,Hh(i,o))));break;case 19:Gn(r,i),Kn(i),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,Hh(i,u)));break;case 30:break;case 21:break;default:Gn(r,i),Kn(i)}}function Kn(i){var r=i.flags;if(r&2){try{for(var o,u=i.return;u!==null;){if(t1(u)){o=u;break}u=u.return}if(o==null)throw Error(s(160));switch(o.tag){case 27:var d=o.stateNode,p=dm(i);Fh(i,p,d);break;case 5:var y=o.stateNode;o.flags&32&&(gi(y,""),o.flags&=-33);var w=dm(i);Fh(i,w,y);break;case 3:case 4:var k=o.stateNode.containerInfo,Q=dm(i);fm(i,Q,k);break;default:throw Error(s(161))}}catch(J){ut(i,i.return,J)}i.flags&=-3}r&4096&&(i.flags&=-4097)}function c1(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var r=i;c1(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),i=i.sibling}}function Us(i,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)s1(i,r.alternate,r),r=r.sibling}function Wa(i){for(i=i.child;i!==null;){var r=i;switch(r.tag){case 0:case 11:case 14:case 15:Lr(4,r,r.return),Wa(r);break;case 1:ss(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&J0(r,r.return,o),Wa(r);break;case 27:Bu(r.stateNode);case 26:case 5:ss(r,r.return),Wa(r);break;case 22:r.memoizedState===null&&Wa(r);break;case 30:Wa(r);break;default:Wa(r)}i=i.sibling}}function Bs(i,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var u=r.alternate,d=i,p=r,y=p.flags;switch(p.tag){case 0:case 11:case 15:Bs(d,p,o),Nu(4,p);break;case 1:if(Bs(d,p,o),u=p,d=u.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(Q){ut(u,u.return,Q)}if(u=p,d=u.updateQueue,d!==null){var w=u.stateNode;try{var k=d.shared.hiddenCallbacks;if(k!==null)for(d.shared.hiddenCallbacks=null,d=0;d<k.length;d++)jv(k[d],w)}catch(Q){ut(u,u.return,Q)}}o&&y&64&&Z0(p),Pu(p,p.return);break;case 27:n1(p);case 26:case 5:Bs(d,p,o),o&&u===null&&y&4&&e1(p),Pu(p,p.return);break;case 12:Bs(d,p,o);break;case 31:Bs(d,p,o),o&&y&4&&o1(d,p);break;case 13:Bs(d,p,o),o&&y&4&&l1(d,p);break;case 22:p.memoizedState===null&&Bs(d,p,o),Pu(p,p.return);break;case 30:break;default:Bs(d,p,o)}r=r.sibling}}function mm(i,r){var o=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),i=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(i=r.memoizedState.cachePool.pool),i!==o&&(i!=null&&i.refCount++,o!=null&&gu(o))}function gm(i,r){i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&gu(i))}function Li(i,r,o,u){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)h1(i,r,o,u),r=r.sibling}function h1(i,r,o,u){var d=r.flags;switch(r.tag){case 0:case 11:case 15:Li(i,r,o,u),d&2048&&Nu(9,r);break;case 1:Li(i,r,o,u);break;case 3:Li(i,r,o,u),d&2048&&(i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&gu(i)));break;case 12:if(d&2048){Li(i,r,o,u),i=r.stateNode;try{var p=r.memoizedProps,y=p.id,w=p.onPostCommit;typeof w=="function"&&w(y,r.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(k){ut(r,r.return,k)}}else Li(i,r,o,u);break;case 31:Li(i,r,o,u);break;case 13:Li(i,r,o,u);break;case 23:break;case 22:p=r.stateNode,y=r.alternate,r.memoizedState!==null?p._visibility&2?Li(i,r,o,u):xu(i,r):p._visibility&2?Li(i,r,o,u):(p._visibility|=2,$o(i,r,o,u,(r.subtreeFlags&10256)!==0||!1)),d&2048&&mm(y,r);break;case 24:Li(i,r,o,u),d&2048&&gm(r.alternate,r);break;default:Li(i,r,o,u)}}function $o(i,r,o,u,d){for(d=d&&((r.subtreeFlags&10256)!==0||!1),r=r.child;r!==null;){var p=i,y=r,w=o,k=u,Q=y.flags;switch(y.tag){case 0:case 11:case 15:$o(p,y,w,k,d),Nu(8,y);break;case 23:break;case 22:var J=y.stateNode;y.memoizedState!==null?J._visibility&2?$o(p,y,w,k,d):xu(p,y):(J._visibility|=2,$o(p,y,w,k,d)),d&&Q&2048&&mm(y.alternate,y);break;case 24:$o(p,y,w,k,d),d&&Q&2048&&gm(y.alternate,y);break;default:$o(p,y,w,k,d)}r=r.sibling}}function xu(i,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=i,u=r,d=u.flags;switch(u.tag){case 22:xu(o,u),d&2048&&mm(u.alternate,u);break;case 24:xu(o,u),d&2048&&gm(u.alternate,u);break;default:xu(o,u)}r=r.sibling}}var Du=8192;function Xo(i,r,o){if(i.subtreeFlags&Du)for(i=i.child;i!==null;)d1(i,r,o),i=i.sibling}function d1(i,r,o){switch(i.tag){case 26:Xo(i,r,o),i.flags&Du&&i.memoizedState!==null&&sI(o,Oi,i.memoizedState,i.memoizedProps);break;case 5:Xo(i,r,o);break;case 3:case 4:var u=Oi;Oi=sd(i.stateNode.containerInfo),Xo(i,r,o),Oi=u;break;case 22:i.memoizedState===null&&(u=i.alternate,u!==null&&u.memoizedState!==null?(u=Du,Du=16777216,Xo(i,r,o),Du=u):Xo(i,r,o));break;default:Xo(i,r,o)}}function f1(i){var r=i.alternate;if(r!==null&&(i=r.child,i!==null)){r.child=null;do r=i.sibling,i.sibling=null,i=r;while(i!==null)}}function ku(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];sn=u,m1(u,i)}f1(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)p1(i),i=i.sibling}function p1(i){switch(i.tag){case 0:case 11:case 15:ku(i),i.flags&2048&&Lr(9,i,i.return);break;case 3:ku(i);break;case 12:ku(i);break;case 22:var r=i.stateNode;i.memoizedState!==null&&r._visibility&2&&(i.return===null||i.return.tag!==13)?(r._visibility&=-3,Gh(i)):ku(i);break;default:ku(i)}}function Gh(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];sn=u,m1(u,i)}f1(i)}for(i=i.child;i!==null;){switch(r=i,r.tag){case 0:case 11:case 15:Lr(8,r,r.return),Gh(r);break;case 22:o=r.stateNode,o._visibility&2&&(o._visibility&=-3,Gh(r));break;default:Gh(r)}i=i.sibling}}function m1(i,r){for(;sn!==null;){var o=sn;switch(o.tag){case 0:case 11:case 15:Lr(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:gu(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,sn=u;else e:for(o=i;sn!==null;){u=sn;var d=u.sibling,p=u.return;if(r1(u),u===o){sn=null;break e}if(d!==null){d.return=p,sn=d;break e}sn=p}}}var v2={getCacheForType:function(i){var r=hn(jt),o=r.data.get(i);return o===void 0&&(o=i(),r.data.set(i,o)),o},cacheSignal:function(){return hn(jt).controller.signal}},E2=typeof WeakMap=="function"?WeakMap:Map,nt=0,mt=null,Be=null,qe=0,lt=0,li=null,Vr=!1,Zo=!1,_m=!1,zs=0,xt=0,Ur=0,Ya=0,ym=0,ui=0,Jo=0,Mu=null,Qn=null,vm=!1,Kh=0,g1=0,Qh=1/0,Wh=null,Br=null,Yt=0,zr=null,el=null,js=0,Em=0,Tm=null,_1=null,Ou=0,bm=null;function ci(){return(nt&2)!==0&&qe!==0?qe&-qe:Z.T!==null?Im():vs()}function y1(){if(ui===0)if((qe&536870912)===0||Qe){var i=Wi;Wi<<=1,(Wi&3932160)===0&&(Wi=262144),ui=i}else ui=536870912;return i=ai.current,i!==null&&(i.flags|=32),ui}function Wn(i,r,o){(i===mt&&(lt===2||lt===9)||i.cancelPendingCommit!==null)&&(tl(i,0),jr(i,qe,ui,!1)),cr(i,o),((nt&2)===0||i!==mt)&&(i===mt&&((nt&2)===0&&(Ya|=o),xt===4&&jr(i,qe,ui,!1)),rs(i))}function v1(i,r,o){if((nt&6)!==0)throw Error(s(327));var u=!o&&(r&127)===0&&(r&i.expiredLanes)===0||ur(i,r),d=u?w2(i,r):Sm(i,r,!0),p=u;do{if(d===0){Zo&&!u&&jr(i,r,0,!1);break}else{if(o=i.current.alternate,p&&!T2(o)){d=Sm(i,r,!1),p=!1;continue}if(d===2){if(p=r,i.errorRecoveryDisabledLanes&p)var y=0;else y=i.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){r=y;e:{var w=i;d=Mu;var k=w.current.memoizedState.isDehydrated;if(k&&(tl(w,y).flags|=256),y=Sm(w,y,!1),y!==2){if(_m&&!k){w.errorRecoveryDisabledLanes|=p,Ya|=p,d=4;break e}p=Qn,Qn=d,p!==null&&(Qn===null?Qn=p:Qn.push.apply(Qn,p))}d=y}if(p=!1,d!==2)continue}}if(d===1){tl(i,0),jr(i,r,0,!0);break}e:{switch(u=i,p=d,p){case 0:case 1:throw Error(s(345));case 4:if((r&4194048)!==r)break;case 6:jr(u,r,ui,!Vr);break e;case 2:Qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((r&62914560)===r&&(d=Kh+300-Ut(),10<d)){if(jr(u,r,ui,!Vr),pi(u,0,!0)!==0)break e;js=r,u.timeoutHandle=$1(E1.bind(null,u,o,Qn,Wh,vm,r,ui,Ya,Jo,Vr,p,"Throttled",-0,0),d);break e}E1(u,o,Qn,Wh,vm,r,ui,Ya,Jo,Vr,p,null,-0,0)}}break}while(!0);rs(i)}function E1(i,r,o,u,d,p,y,w,k,Q,J,ne,W,Y){if(i.timeoutHandle=-1,ne=r.subtreeFlags,ne&8192||(ne&16785408)===16785408){ne={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:en},d1(r,p,ne);var ge=(p&62914560)===p?Kh-Ut():(p&4194048)===p?g1-Ut():0;if(ge=rI(ne,ge),ge!==null){js=p,i.cancelPendingCommit=ge(I1.bind(null,i,r,p,o,u,d,y,w,k,J,ne,null,W,Y)),jr(i,p,y,!Q);return}}I1(i,r,p,o,u,d,y,w,k)}function T2(i){for(var r=i;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var d=o[u],p=d.getSnapshot;d=d.value;try{if(!si(p(),d))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function jr(i,r,o,u){r&=~ym,r&=~Ya,i.suspendedLanes|=r,i.pingedLanes&=~r,u&&(i.warmLanes|=r),u=i.expirationTimes;for(var d=r;0<d;){var p=31-xn(d),y=1<<p;u[p]=-1,d&=~y}o!==0&&Yl(i,o,r)}function Yh(){return(nt&6)===0?(Lu(0),!1):!0}function wm(){if(Be!==null){if(lt===0)var i=Be.return;else i=Be,Ps=za=null,Bp(i),Go=null,yu=0,i=Be;for(;i!==null;)X0(i.alternate,i),i=i.return;Be=null}}function tl(i,r){var o=i.timeoutHandle;o!==-1&&(i.timeoutHandle=-1,j2(o)),o=i.cancelPendingCommit,o!==null&&(i.cancelPendingCommit=null,o()),js=0,wm(),mt=i,Be=o=Is(i.current,null),qe=r,lt=0,li=null,Vr=!1,Zo=ur(i,r),_m=!1,Jo=ui=ym=Ya=Ur=xt=0,Qn=Mu=null,vm=!1,(r&8)!==0&&(r|=r&32);var u=i.entangledLanes;if(u!==0)for(i=i.entanglements,u&=r;0<u;){var d=31-xn(u),p=1<<d;r|=i[d],u&=~p}return zs=r,gh(),o}function T1(i,r){ke=null,Z.H=Cu,r===Ho||r===Sh?(r=Vv(),lt=3):r===Rp?(r=Vv(),lt=4):lt=r===tm?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,li=r,Be===null&&(xt=1,Uh(i,yi(r,i.current)))}function b1(){var i=ai.current;return i===null?!0:(qe&4194048)===qe?bi===null:(qe&62914560)===qe||(qe&536870912)!==0?i===bi:!1}function w1(){var i=Z.H;return Z.H=Cu,i===null?Cu:i}function S1(){var i=Z.A;return Z.A=v2,i}function $h(){xt=4,Vr||(qe&4194048)!==qe&&ai.current!==null||(Zo=!0),(Ur&134217727)===0&&(Ya&134217727)===0||mt===null||jr(mt,qe,ui,!1)}function Sm(i,r,o){var u=nt;nt|=2;var d=w1(),p=S1();(mt!==i||qe!==r)&&(Wh=null,tl(i,r)),r=!1;var y=xt;e:do try{if(lt!==0&&Be!==null){var w=Be,k=li;switch(lt){case 8:wm(),y=6;break e;case 3:case 2:case 9:case 6:ai.current===null&&(r=!0);var Q=lt;if(lt=0,li=null,nl(i,w,k,Q),o&&Zo){y=0;break e}break;default:Q=lt,lt=0,li=null,nl(i,w,k,Q)}}b2(),y=xt;break}catch(J){T1(i,J)}while(!0);return r&&i.shellSuspendCounter++,Ps=za=null,nt=u,Z.H=d,Z.A=p,Be===null&&(mt=null,qe=0,gh()),y}function b2(){for(;Be!==null;)A1(Be)}function w2(i,r){var o=nt;nt|=2;var u=w1(),d=S1();mt!==i||qe!==r?(Wh=null,Qh=Ut()+500,tl(i,r)):Zo=ur(i,r);e:do try{if(lt!==0&&Be!==null){r=Be;var p=li;t:switch(lt){case 1:lt=0,li=null,nl(i,r,p,1);break;case 2:case 9:if(Ov(p)){lt=0,li=null,C1(r);break}r=function(){lt!==2&&lt!==9||mt!==i||(lt=7),rs(i)},p.then(r,r);break e;case 3:lt=7;break e;case 4:lt=5;break e;case 7:Ov(p)?(lt=0,li=null,C1(r)):(lt=0,li=null,nl(i,r,p,7));break;case 5:var y=null;switch(Be.tag){case 26:y=Be.memoizedState;case 5:case 27:var w=Be;if(y?hE(y):w.stateNode.complete){lt=0,li=null;var k=w.sibling;if(k!==null)Be=k;else{var Q=w.return;Q!==null?(Be=Q,Xh(Q)):Be=null}break t}}lt=0,li=null,nl(i,r,p,5);break;case 6:lt=0,li=null,nl(i,r,p,6);break;case 8:wm(),xt=6;break e;default:throw Error(s(462))}}S2();break}catch(J){T1(i,J)}while(!0);return Ps=za=null,Z.H=u,Z.A=d,nt=o,Be!==null?0:(mt=null,qe=0,gh(),xt)}function S2(){for(;Be!==null&&!Kl();)A1(Be)}function A1(i){var r=Y0(i.alternate,i,zs);i.memoizedProps=i.pendingProps,r===null?Xh(i):Be=r}function C1(i){var r=i,o=r.alternate;switch(r.tag){case 15:case 0:r=F0(o,r,r.pendingProps,r.type,void 0,qe);break;case 11:r=F0(o,r,r.pendingProps,r.type.render,r.ref,qe);break;case 5:Bp(r);default:X0(o,r),r=Be=Sv(r,zs),r=Y0(o,r,zs)}i.memoizedProps=i.pendingProps,r===null?Xh(i):Be=r}function nl(i,r,o,u){Ps=za=null,Bp(r),Go=null,yu=0;var d=r.return;try{if(d2(i,d,r,o,qe)){xt=1,Uh(i,yi(o,i.current)),Be=null;return}}catch(p){if(d!==null)throw Be=d,p;xt=1,Uh(i,yi(o,i.current)),Be=null;return}r.flags&32768?(Qe||u===1?i=!0:Zo||(qe&536870912)!==0?i=!1:(Vr=i=!0,(u===2||u===9||u===3||u===6)&&(u=ai.current,u!==null&&u.tag===13&&(u.flags|=16384))),R1(r,i)):Xh(r)}function Xh(i){var r=i;do{if((r.flags&32768)!==0){R1(r,Vr);return}i=r.return;var o=m2(r.alternate,r,zs);if(o!==null){Be=o;return}if(r=r.sibling,r!==null){Be=r;return}Be=r=i}while(r!==null);xt===0&&(xt=5)}function R1(i,r){do{var o=g2(i.alternate,i);if(o!==null){o.flags&=32767,Be=o;return}if(o=i.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(i=i.sibling,i!==null)){Be=i;return}Be=i=o}while(i!==null);xt=6,Be=null}function I1(i,r,o,u,d,p,y,w,k){i.cancelPendingCommit=null;do Zh();while(Yt!==0);if((nt&6)!==0)throw Error(s(327));if(r!==null){if(r===i.current)throw Error(s(177));if(p=r.lanes|r.childLanes,p|=dp,ln(i,o,p,y,w,k),i===mt&&(Be=mt=null,qe=0),el=r,zr=i,js=o,Em=p,Tm=d,_1=u,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(i.callbackNode=null,i.callbackPriority=0,I2(Pi,function(){return k1(),null})):(i.callbackNode=null,i.callbackPriority=0),u=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||u){u=Z.T,Z.T=null,d=ue.p,ue.p=2,y=nt,nt|=4;try{_2(i,r,o)}finally{nt=y,ue.p=d,Z.T=u}}Yt=1,N1(),P1(),x1()}}function N1(){if(Yt===1){Yt=0;var i=zr,r=el,o=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||o){o=Z.T,Z.T=null;var u=ue.p;ue.p=2;var d=nt;nt|=4;try{u1(r,i);var p=Lm,y=mv(i.containerInfo),w=p.focusedElem,k=p.selectionRange;if(y!==w&&w&&w.ownerDocument&&pv(w.ownerDocument.documentElement,w)){if(k!==null&&op(w)){var Q=k.start,J=k.end;if(J===void 0&&(J=Q),"selectionStart"in w)w.selectionStart=Q,w.selectionEnd=Math.min(J,w.value.length);else{var ne=w.ownerDocument||document,W=ne&&ne.defaultView||window;if(W.getSelection){var Y=W.getSelection(),ge=w.textContent.length,Se=Math.min(k.start,ge),ft=k.end===void 0?Se:Math.min(k.end,ge);!Y.extend&&Se>ft&&(y=ft,ft=Se,Se=y);var F=fv(w,Se),L=fv(w,ft);if(F&&L&&(Y.rangeCount!==1||Y.anchorNode!==F.node||Y.anchorOffset!==F.offset||Y.focusNode!==L.node||Y.focusOffset!==L.offset)){var K=ne.createRange();K.setStart(F.node,F.offset),Y.removeAllRanges(),Se>ft?(Y.addRange(K),Y.extend(L.node,L.offset)):(K.setEnd(L.node,L.offset),Y.addRange(K))}}}}for(ne=[],Y=w;Y=Y.parentNode;)Y.nodeType===1&&ne.push({element:Y,left:Y.scrollLeft,top:Y.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<ne.length;w++){var te=ne[w];te.element.scrollLeft=te.left,te.element.scrollTop=te.top}}cd=!!Om,Lm=Om=null}finally{nt=d,ue.p=u,Z.T=o}}i.current=r,Yt=2}}function P1(){if(Yt===2){Yt=0;var i=zr,r=el,o=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||o){o=Z.T,Z.T=null;var u=ue.p;ue.p=2;var d=nt;nt|=4;try{s1(i,r.alternate,r)}finally{nt=d,ue.p=u,Z.T=o}}Yt=3}}function x1(){if(Yt===4||Yt===3){Yt=0,Ta();var i=zr,r=el,o=js,u=_1;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?Yt=5:(Yt=0,el=zr=null,D1(i,i.pendingLanes));var d=i.pendingLanes;if(d===0&&(Br=null),Xl(o),r=r.stateNode,yn&&typeof yn.onCommitFiberRoot=="function")try{yn.onCommitFiberRoot(Qi,r,void 0,(r.current.flags&128)===128)}catch{}if(u!==null){r=Z.T,d=ue.p,ue.p=2,Z.T=null;try{for(var p=i.onRecoverableError,y=0;y<u.length;y++){var w=u[y];p(w.value,{componentStack:w.stack})}}finally{Z.T=r,ue.p=d}}(js&3)!==0&&Zh(),rs(i),d=i.pendingLanes,(o&261930)!==0&&(d&42)!==0?i===bm?Ou++:(Ou=0,bm=i):Ou=0,Lu(0)}}function D1(i,r){(i.pooledCacheLanes&=r)===0&&(r=i.pooledCache,r!=null&&(i.pooledCache=null,gu(r)))}function Zh(){return N1(),P1(),x1(),k1()}function k1(){if(Yt!==5)return!1;var i=zr,r=Em;Em=0;var o=Xl(js),u=Z.T,d=ue.p;try{ue.p=32>o?32:o,Z.T=null,o=Tm,Tm=null;var p=zr,y=js;if(Yt=0,el=zr=null,js=0,(nt&6)!==0)throw Error(s(331));var w=nt;if(nt|=4,p1(p.current),h1(p,p.current,y,o),nt=w,Lu(0,!1),yn&&typeof yn.onPostCommitFiberRoot=="function")try{yn.onPostCommitFiberRoot(Qi,p)}catch{}return!0}finally{ue.p=d,Z.T=u,D1(i,r)}}function M1(i,r,o){r=yi(o,r),r=em(i.stateNode,r,2),i=kr(i,r,2),i!==null&&(cr(i,2),rs(i))}function ut(i,r,o){if(i.tag===3)M1(i,i,o);else for(;r!==null;){if(r.tag===3){M1(r,i,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Br===null||!Br.has(u))){i=yi(o,i),o=O0(2),u=kr(r,o,2),u!==null&&(L0(o,u,r,i),cr(u,2),rs(u));break}}r=r.return}}function Am(i,r,o){var u=i.pingCache;if(u===null){u=i.pingCache=new E2;var d=new Set;u.set(r,d)}else d=u.get(r),d===void 0&&(d=new Set,u.set(r,d));d.has(o)||(_m=!0,d.add(o),i=A2.bind(null,i,r,o),r.then(i,i))}function A2(i,r,o){var u=i.pingCache;u!==null&&u.delete(r),i.pingedLanes|=i.suspendedLanes&o,i.warmLanes&=~o,mt===i&&(qe&o)===o&&(xt===4||xt===3&&(qe&62914560)===qe&&300>Ut()-Kh?(nt&2)===0&&tl(i,0):ym|=o,Jo===qe&&(Jo=0)),rs(i)}function O1(i,r){r===0&&(r=Wl()),i=Va(i,r),i!==null&&(cr(i,r),rs(i))}function C2(i){var r=i.memoizedState,o=0;r!==null&&(o=r.retryLane),O1(i,o)}function R2(i,r){var o=0;switch(i.tag){case 31:case 13:var u=i.stateNode,d=i.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=i.stateNode;break;case 22:u=i.stateNode._retryCache;break;default:throw Error(s(314))}u!==null&&u.delete(r),O1(i,o)}function I2(i,r){return Jt(i,r)}var Jh=null,il=null,Cm=!1,ed=!1,Rm=!1,qr=0;function rs(i){i!==il&&i.next===null&&(il===null?Jh=il=i:il=il.next=i),ed=!0,Cm||(Cm=!0,P2())}function Lu(i,r){if(!Rm&&ed){Rm=!0;do for(var o=!1,u=Jh;u!==null;){if(i!==0){var d=u.pendingLanes;if(d===0)var p=0;else{var y=u.suspendedLanes,w=u.pingedLanes;p=(1<<31-xn(42|i)+1)-1,p&=d&~(y&~w),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(o=!0,B1(u,p))}else p=qe,p=pi(u,u===mt?p:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(p&3)===0||ur(u,p)||(o=!0,B1(u,p));u=u.next}while(o);Rm=!1}}function N2(){L1()}function L1(){ed=Cm=!1;var i=0;qr!==0&&z2()&&(i=qr);for(var r=Ut(),o=null,u=Jh;u!==null;){var d=u.next,p=V1(u,r);p===0?(u.next=null,o===null?Jh=d:o.next=d,d===null&&(il=o)):(o=u,(i!==0||(p&3)!==0)&&(ed=!0)),u=d}Yt!==0&&Yt!==5||Lu(i),qr!==0&&(qr=0)}function V1(i,r){for(var o=i.suspendedLanes,u=i.pingedLanes,d=i.expirationTimes,p=i.pendingLanes&-62914561;0<p;){var y=31-xn(p),w=1<<y,k=d[y];k===-1?((w&o)===0||(w&u)!==0)&&(d[y]=wo(w,r)):k<=r&&(i.expiredLanes|=w),p&=~w}if(r=mt,o=qe,o=pi(i,i===r?o:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),u=i.callbackNode,o===0||i===r&&(lt===2||lt===9)||i.cancelPendingCommit!==null)return u!==null&&u!==null&&ar(u),i.callbackNode=null,i.callbackPriority=0;if((o&3)===0||ur(i,o)){if(r=o&-o,r===i.callbackPriority)return r;switch(u!==null&&ar(u),Xl(o)){case 2:case 8:o=Bt;break;case 32:o=Pi;break;case 268435456:o=or;break;default:o=Pi}return u=U1.bind(null,i),o=Jt(o,u),i.callbackPriority=r,i.callbackNode=o,r}return u!==null&&u!==null&&ar(u),i.callbackPriority=2,i.callbackNode=null,2}function U1(i,r){if(Yt!==0&&Yt!==5)return i.callbackNode=null,i.callbackPriority=0,null;var o=i.callbackNode;if(Zh()&&i.callbackNode!==o)return null;var u=qe;return u=pi(i,i===mt?u:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),u===0?null:(v1(i,u,r),V1(i,Ut()),i.callbackNode!=null&&i.callbackNode===o?U1.bind(null,i):null)}function B1(i,r){if(Zh())return null;v1(i,r,!0)}function P2(){q2(function(){(nt&6)!==0?Jt(Rt,N2):L1()})}function Im(){if(qr===0){var i=qo;i===0&&(i=Sa,Sa<<=1,(Sa&261888)===0&&(Sa=256)),qr=i}return qr}function z1(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:Ji(""+i)}function j1(i,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,i.id&&o.setAttribute("form",i.id),r.parentNode.insertBefore(o,r),i=new FormData(i),o.parentNode.removeChild(o),i}function x2(i,r,o,u,d){if(r==="submit"&&o&&o.stateNode===d){var p=z1((d[un]||null).action),y=u.submitter;y&&(r=(r=y[un]||null)?z1(r.formAction):y.getAttribute("formAction"),r!==null&&(p=r,y=null));var w=new Pa("action","action",null,u,d);i.push({event:w,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(qr!==0){var k=y?j1(d,y):new FormData(d);Wp(o,{pending:!0,data:k,method:d.method,action:p},null,k)}}else typeof p=="function"&&(w.preventDefault(),k=y?j1(d,y):new FormData(d),Wp(o,{pending:!0,data:k,method:d.method,action:p},p,k))},currentTarget:d}]})}}for(var Nm=0;Nm<hp.length;Nm++){var Pm=hp[Nm],D2=Pm.toLowerCase(),k2=Pm[0].toUpperCase()+Pm.slice(1);Mi(D2,"on"+k2)}Mi(yv,"onAnimationEnd"),Mi(vv,"onAnimationIteration"),Mi(Ev,"onAnimationStart"),Mi("dblclick","onDoubleClick"),Mi("focusin","onFocus"),Mi("focusout","onBlur"),Mi(YR,"onTransitionRun"),Mi($R,"onTransitionStart"),Mi(XR,"onTransitionCancel"),Mi(Tv,"onTransitionEnd"),Zi("onMouseEnter",["mouseout","mouseover"]),Zi("onMouseLeave",["mouseout","mouseover"]),Zi("onPointerEnter",["pointerout","pointerover"]),Zi("onPointerLeave",["pointerout","pointerover"]),Dn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Dn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Dn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Dn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Dn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Dn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),M2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vu));function q1(i,r){r=(r&4)!==0;for(var o=0;o<i.length;o++){var u=i[o],d=u.event;u=u.listeners;e:{var p=void 0;if(r)for(var y=u.length-1;0<=y;y--){var w=u[y],k=w.instance,Q=w.currentTarget;if(w=w.listener,k!==p&&d.isPropagationStopped())break e;p=w,d.currentTarget=Q;try{p(d)}catch(J){mh(J)}d.currentTarget=null,p=k}else for(y=0;y<u.length;y++){if(w=u[y],k=w.instance,Q=w.currentTarget,w=w.listener,k!==p&&d.isPropagationStopped())break e;p=w,d.currentTarget=Q;try{p(d)}catch(J){mh(J)}d.currentTarget=null,p=k}}}}function ze(i,r){var o=r[fr];o===void 0&&(o=r[fr]=new Set);var u=i+"__bubble";o.has(u)||(F1(r,i,2,!1),o.add(u))}function xm(i,r,o){var u=0;r&&(u|=4),F1(o,i,u,r)}var td="_reactListening"+Math.random().toString(36).slice(2);function Dm(i){if(!i[td]){i[td]=!0,So.forEach(function(o){o!=="selectionchange"&&(M2.has(o)||xm(o,!1,i),xm(o,!0,i))});var r=i.nodeType===9?i:i.ownerDocument;r===null||r[td]||(r[td]=!0,xm("selectionchange",!1,r))}}function F1(i,r,o,u){switch(yE(r)){case 2:var d=lI;break;case 8:d=uI;break;default:d=Qm}o=d.bind(null,r,o,i),d=void 0,!ru||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),u?d!==void 0?i.addEventListener(r,o,{capture:!0,passive:d}):i.addEventListener(r,o,!0):d!==void 0?i.addEventListener(r,o,{passive:d}):i.addEventListener(r,o,!1)}function km(i,r,o,u,d){var p=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var y=u.tag;if(y===3||y===4){var w=u.stateNode.containerInfo;if(w===d)break;if(y===4)for(y=u.return;y!==null;){var k=y.tag;if((k===3||k===4)&&y.stateNode.containerInfo===d)return;y=y.return}for(;w!==null;){if(y=Ts(w),y===null)return;if(k=y.tag,k===5||k===6||k===26||k===27){u=p=y;continue e}w=w.parentNode}}u=u.return}Jc(function(){var Q=p,J=No(o),ne=[];e:{var W=bv.get(i);if(W!==void 0){var Y=Pa,ge=i;switch(i){case"keypress":if(Na(o)===0)break e;case"keydown":case"keyup":Y=lh;break;case"focusin":ge="focus",Y=wr;break;case"focusout":ge="blur",Y=wr;break;case"beforeblur":case"afterblur":Y=wr;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=th;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=nh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=ch;break;case yv:case vv:case Ev:Y=Do;break;case Tv:Y=ko;break;case"scroll":case"scrollend":Y=eh;break;case"wheel":Y=dh;break;case"copy":case"cut":case"paste":Y=sh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=cu;break;case"toggle":case"beforetoggle":Y=Ar}var Se=(r&4)!==0,ft=!Se&&(i==="scroll"||i==="scrollend"),F=Se?W!==null?W+"Capture":null:W;Se=[];for(var L=Q,K;L!==null;){var te=L;if(K=te.stateNode,te=te.tag,te!==5&&te!==26&&te!==27||K===null||F===null||(te=qn(L,F),te!=null&&Se.push(Uu(L,te,K))),ft)break;L=L.return}0<Se.length&&(W=new Y(W,ge,null,o,J),ne.push({event:W,listeners:Se}))}}if((r&7)===0){e:{if(W=i==="mouseover"||i==="pointerover",Y=i==="mouseout"||i==="pointerout",W&&o!==Io&&(ge=o.relatedTarget||o.fromElement)&&(Ts(ge)||ge[$i]))break e;if((Y||W)&&(W=J.window===J?J:(W=J.ownerDocument)?W.defaultView||W.parentWindow:window,Y?(ge=o.relatedTarget||o.toElement,Y=Q,ge=ge?Ts(ge):null,ge!==null&&(ft=l(ge),Se=ge.tag,ge!==ft||Se!==5&&Se!==27&&Se!==6)&&(ge=null)):(Y=null,ge=Q),Y!==ge)){if(Se=th,te="onMouseLeave",F="onMouseEnter",L="mouse",(i==="pointerout"||i==="pointerover")&&(Se=cu,te="onPointerLeave",F="onPointerEnter",L="pointer"),ft=Y==null?W:Ca(Y),K=ge==null?W:Ca(ge),W=new Se(te,L+"leave",Y,o,J),W.target=ft,W.relatedTarget=K,te=null,Ts(J)===Q&&(Se=new Se(F,L+"enter",ge,o,J),Se.target=K,Se.relatedTarget=ft,te=Se),ft=te,Y&&ge)t:{for(Se=O2,F=Y,L=ge,K=0,te=F;te;te=Se(te))K++;te=0;for(var Te=L;Te;Te=Se(Te))te++;for(;0<K-te;)F=Se(F),K--;for(;0<te-K;)L=Se(L),te--;for(;K--;){if(F===L||L!==null&&F===L.alternate){Se=F;break t}F=Se(F),L=Se(L)}Se=null}else Se=null;Y!==null&&H1(ne,W,Y,Se,!1),ge!==null&&ft!==null&&H1(ne,ft,ge,Se,!0)}}e:{if(W=Q?Ca(Q):window,Y=W.nodeName&&W.nodeName.toLowerCase(),Y==="select"||Y==="input"&&W.type==="file")var Je=ov;else if(Fn(W))if(lv)Je=KR;else{Je=HR;var ye=FR}else Y=W.nodeName,!Y||Y.toLowerCase()!=="input"||W.type!=="checkbox"&&W.type!=="radio"?Q&&iu(Q.elementType)&&(Je=ov):Je=GR;if(Je&&(Je=Je(i,Q))){Ma(ne,Je,o,J);break e}ye&&ye(i,W,Q),i==="focusout"&&Q&&W.type==="number"&&Q.memoizedProps.value!=null&&Ro(W,"number",W.value)}switch(ye=Q?Ca(Q):window,i){case"focusin":(Fn(ye)||ye.contentEditable==="true")&&(Mo=ye,lp=Q,fu=null);break;case"focusout":fu=lp=Mo=null;break;case"mousedown":up=!0;break;case"contextmenu":case"mouseup":case"dragend":up=!1,gv(ne,o,J);break;case"selectionchange":if(WR)break;case"keydown":case"keyup":gv(ne,o,J)}var Oe;if(_)e:{switch(i){case"compositionstart":var Fe="onCompositionStart";break e;case"compositionend":Fe="onCompositionEnd";break e;case"compositionupdate":Fe="onCompositionUpdate";break e}Fe=void 0}else Le?at(i,o)&&(Fe="onCompositionEnd"):i==="keydown"&&o.keyCode===229&&(Fe="onCompositionStart");Fe&&(G&&o.locale!=="ko"&&(Le||Fe!=="onCompositionStart"?Fe==="onCompositionEnd"&&Le&&(Oe=vr()):(ii=J,Po="value"in ii?ii.value:ii.textContent,Le=!0)),ye=nd(Q,Fe),0<ye.length&&(Fe=new ou(Fe,i,null,o,J),ne.push({event:Fe,listeners:ye}),Oe?Fe.data=Oe:(Oe=zt(o),Oe!==null&&(Fe.data=Oe)))),(Oe=A?tn(i,o):nn(i,o))&&(Fe=nd(Q,"onBeforeInput"),0<Fe.length&&(ye=new ou("onBeforeInput","beforeinput",null,o,J),ne.push({event:ye,listeners:Fe}),ye.data=Oe)),x2(ne,i,Q,o,J)}q1(ne,r)})}function Uu(i,r,o){return{instance:i,listener:r,currentTarget:o}}function nd(i,r){for(var o=r+"Capture",u=[];i!==null;){var d=i,p=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||p===null||(d=qn(i,o),d!=null&&u.unshift(Uu(i,d,p)),d=qn(i,r),d!=null&&u.push(Uu(i,d,p))),i.tag===3)return u;i=i.return}return[]}function O2(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function H1(i,r,o,u,d){for(var p=r._reactName,y=[];o!==null&&o!==u;){var w=o,k=w.alternate,Q=w.stateNode;if(w=w.tag,k!==null&&k===u)break;w!==5&&w!==26&&w!==27||Q===null||(k=Q,d?(Q=qn(o,p),Q!=null&&y.unshift(Uu(o,Q,k))):d||(Q=qn(o,p),Q!=null&&y.push(Uu(o,Q,k)))),o=o.return}y.length!==0&&i.push({event:r,listeners:y})}var L2=/\r\n?/g,V2=/\u0000|\uFFFD/g;function G1(i){return(typeof i=="string"?i:""+i).replace(L2,`
`).replace(V2,"")}function K1(i,r){return r=G1(r),G1(i)===r}function dt(i,r,o,u,d,p){switch(o){case"children":typeof u=="string"?r==="body"||r==="textarea"&&u===""||gi(i,u):(typeof u=="number"||typeof u=="bigint")&&r!=="body"&&gi(i,""+u);break;case"className":gr(i,"class",u);break;case"tabIndex":gr(i,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":gr(i,o,u);break;case"style":Xc(i,u,p);break;case"data":if(r!=="object"){gr(i,"data",u);break}case"src":case"href":if(u===""&&(r!=="a"||o!=="href")){i.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=Ji(""+u),i.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){i.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(o==="formAction"?(r!=="input"&&dt(i,r,"name",d.name,d,null),dt(i,r,"formEncType",d.formEncType,d,null),dt(i,r,"formMethod",d.formMethod,d,null),dt(i,r,"formTarget",d.formTarget,d,null)):(dt(i,r,"encType",d.encType,d,null),dt(i,r,"method",d.method,d,null),dt(i,r,"target",d.target,d,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=Ji(""+u),i.setAttribute(o,u);break;case"onClick":u!=null&&(i.onclick=en);break;case"onScroll":u!=null&&ze("scroll",i);break;case"onScrollEnd":u!=null&&ze("scrollend",i);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(d.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"multiple":i.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":i.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){i.removeAttribute("xlink:href");break}o=Ji(""+u),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""+u):i.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""):i.removeAttribute(o);break;case"capture":case"download":u===!0?i.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,u):i.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?i.setAttribute(o,u):i.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?i.removeAttribute(o):i.setAttribute(o,u);break;case"popover":ze("beforetoggle",i),ze("toggle",i),mr(i,"popover",u);break;case"xlinkActuate":mi(i,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":mi(i,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":mi(i,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":mi(i,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":mi(i,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":mi(i,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":mi(i,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":mi(i,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":mi(i,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":mr(i,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=np.get(o)||o,mr(i,o,u))}}function Mm(i,r,o,u,d,p){switch(o){case"style":Xc(i,u,p);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(d.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"children":typeof u=="string"?gi(i,u):(typeof u=="number"||typeof u=="bigint")&&gi(i,""+u);break;case"onScroll":u!=null&&ze("scroll",i);break;case"onScrollEnd":u!=null&&ze("scrollend",i);break;case"onClick":u!=null&&(i.onclick=en);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!pr.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(d=o.endsWith("Capture"),r=o.slice(2,d?o.length-7:void 0),p=i[un]||null,p=p!=null?p[o]:null,typeof p=="function"&&i.removeEventListener(r,p,d),typeof u=="function")){typeof p!="function"&&p!==null&&(o in i?i[o]=null:i.hasAttribute(o)&&i.removeAttribute(o)),i.addEventListener(r,u,d);break e}o in i?i[o]=u:u===!0?i.setAttribute(o,""):mr(i,o,u)}}}function fn(i,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ze("error",i),ze("load",i);var u=!1,d=!1,p;for(p in o)if(o.hasOwnProperty(p)){var y=o[p];if(y!=null)switch(p){case"src":u=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:dt(i,r,p,y,o,null)}}d&&dt(i,r,"srcSet",o.srcSet,o,null),u&&dt(i,r,"src",o.src,o,null);return;case"input":ze("invalid",i);var w=p=y=d=null,k=null,Q=null;for(u in o)if(o.hasOwnProperty(u)){var J=o[u];if(J!=null)switch(u){case"name":d=J;break;case"type":y=J;break;case"checked":k=J;break;case"defaultChecked":Q=J;break;case"value":p=J;break;case"defaultValue":w=J;break;case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(s(137,r));break;default:dt(i,r,u,J,o,null)}}Ra(i,p,w,k,Q,y,d,!1);return;case"select":ze("invalid",i),u=y=p=null;for(d in o)if(o.hasOwnProperty(d)&&(w=o[d],w!=null))switch(d){case"value":p=w;break;case"defaultValue":y=w;break;case"multiple":u=w;default:dt(i,r,d,w,o,null)}r=p,o=y,i.multiple=!!u,r!=null?Ze(i,!!u,r,!1):o!=null&&Ze(i,!!u,o,!0);return;case"textarea":ze("invalid",i),p=d=u=null;for(y in o)if(o.hasOwnProperty(y)&&(w=o[y],w!=null))switch(y){case"value":u=w;break;case"defaultValue":d=w;break;case"children":p=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:dt(i,r,y,w,o,null)}yr(i,u,d,p);return;case"option":for(k in o)if(o.hasOwnProperty(k)&&(u=o[k],u!=null))switch(k){case"selected":i.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:dt(i,r,k,u,o,null)}return;case"dialog":ze("beforetoggle",i),ze("toggle",i),ze("cancel",i),ze("close",i);break;case"iframe":case"object":ze("load",i);break;case"video":case"audio":for(u=0;u<Vu.length;u++)ze(Vu[u],i);break;case"image":ze("error",i),ze("load",i);break;case"details":ze("toggle",i);break;case"embed":case"source":case"link":ze("error",i),ze("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in o)if(o.hasOwnProperty(Q)&&(u=o[Q],u!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:dt(i,r,Q,u,o,null)}return;default:if(iu(r)){for(J in o)o.hasOwnProperty(J)&&(u=o[J],u!==void 0&&Mm(i,r,J,u,o,void 0));return}}for(w in o)o.hasOwnProperty(w)&&(u=o[w],u!=null&&dt(i,r,w,u,o,null))}function U2(i,r,o,u){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,p=null,y=null,w=null,k=null,Q=null,J=null;for(Y in o){var ne=o[Y];if(o.hasOwnProperty(Y)&&ne!=null)switch(Y){case"checked":break;case"value":break;case"defaultValue":k=ne;default:u.hasOwnProperty(Y)||dt(i,r,Y,null,u,ne)}}for(var W in u){var Y=u[W];if(ne=o[W],u.hasOwnProperty(W)&&(Y!=null||ne!=null))switch(W){case"type":p=Y;break;case"name":d=Y;break;case"checked":Q=Y;break;case"defaultChecked":J=Y;break;case"value":y=Y;break;case"defaultValue":w=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,r));break;default:Y!==ne&&dt(i,r,W,Y,u,ne)}}_r(i,y,w,k,Q,J,p,d);return;case"select":Y=y=w=W=null;for(p in o)if(k=o[p],o.hasOwnProperty(p)&&k!=null)switch(p){case"value":break;case"multiple":Y=k;default:u.hasOwnProperty(p)||dt(i,r,p,null,u,k)}for(d in u)if(p=u[d],k=o[d],u.hasOwnProperty(d)&&(p!=null||k!=null))switch(d){case"value":W=p;break;case"defaultValue":w=p;break;case"multiple":y=p;default:p!==k&&dt(i,r,d,p,u,k)}r=w,o=y,u=Y,W!=null?Ze(i,!!o,W,!1):!!u!=!!o&&(r!=null?Ze(i,!!o,r,!0):Ze(i,!!o,o?[]:"",!1));return;case"textarea":Y=W=null;for(w in o)if(d=o[w],o.hasOwnProperty(w)&&d!=null&&!u.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:dt(i,r,w,null,u,d)}for(y in u)if(d=u[y],p=o[y],u.hasOwnProperty(y)&&(d!=null||p!=null))switch(y){case"value":W=d;break;case"defaultValue":Y=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(s(91));break;default:d!==p&&dt(i,r,y,d,u,p)}Ia(i,W,Y);return;case"option":for(var ge in o)if(W=o[ge],o.hasOwnProperty(ge)&&W!=null&&!u.hasOwnProperty(ge))switch(ge){case"selected":i.selected=!1;break;default:dt(i,r,ge,null,u,W)}for(k in u)if(W=u[k],Y=o[k],u.hasOwnProperty(k)&&W!==Y&&(W!=null||Y!=null))switch(k){case"selected":i.selected=W&&typeof W!="function"&&typeof W!="symbol";break;default:dt(i,r,k,W,u,Y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Se in o)W=o[Se],o.hasOwnProperty(Se)&&W!=null&&!u.hasOwnProperty(Se)&&dt(i,r,Se,null,u,W);for(Q in u)if(W=u[Q],Y=o[Q],u.hasOwnProperty(Q)&&W!==Y&&(W!=null||Y!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(s(137,r));break;default:dt(i,r,Q,W,u,Y)}return;default:if(iu(r)){for(var ft in o)W=o[ft],o.hasOwnProperty(ft)&&W!==void 0&&!u.hasOwnProperty(ft)&&Mm(i,r,ft,void 0,u,W);for(J in u)W=u[J],Y=o[J],!u.hasOwnProperty(J)||W===Y||W===void 0&&Y===void 0||Mm(i,r,J,W,u,Y);return}}for(var F in o)W=o[F],o.hasOwnProperty(F)&&W!=null&&!u.hasOwnProperty(F)&&dt(i,r,F,null,u,W);for(ne in u)W=u[ne],Y=o[ne],!u.hasOwnProperty(ne)||W===Y||W==null&&Y==null||dt(i,r,ne,W,u,Y)}function Q1(i){switch(i){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function B2(){if(typeof performance.getEntriesByType=="function"){for(var i=0,r=0,o=performance.getEntriesByType("resource"),u=0;u<o.length;u++){var d=o[u],p=d.transferSize,y=d.initiatorType,w=d.duration;if(p&&w&&Q1(y)){for(y=0,w=d.responseEnd,u+=1;u<o.length;u++){var k=o[u],Q=k.startTime;if(Q>w)break;var J=k.transferSize,ne=k.initiatorType;J&&Q1(ne)&&(k=k.responseEnd,y+=J*(k<w?1:(w-Q)/(k-Q)))}if(--u,r+=8*(p+y)/(d.duration/1e3),i++,10<i)break}}if(0<i)return r/i/1e6}return navigator.connection&&(i=navigator.connection.downlink,typeof i=="number")?i:5}var Om=null,Lm=null;function id(i){return i.nodeType===9?i:i.ownerDocument}function W1(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Y1(i,r){if(i===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&r==="foreignObject"?0:i}function Vm(i,r){return i==="textarea"||i==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Um=null;function z2(){var i=window.event;return i&&i.type==="popstate"?i===Um?!1:(Um=i,!0):(Um=null,!1)}var $1=typeof setTimeout=="function"?setTimeout:void 0,j2=typeof clearTimeout=="function"?clearTimeout:void 0,X1=typeof Promise=="function"?Promise:void 0,q2=typeof queueMicrotask=="function"?queueMicrotask:typeof X1<"u"?function(i){return X1.resolve(null).then(i).catch(F2)}:$1;function F2(i){setTimeout(function(){throw i})}function Fr(i){return i==="head"}function Z1(i,r){var o=r,u=0;do{var d=o.nextSibling;if(i.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"||o==="/&"){if(u===0){i.removeChild(d),ol(r);return}u--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")u++;else if(o==="html")Bu(i.ownerDocument.documentElement);else if(o==="head"){o=i.ownerDocument.head,Bu(o);for(var p=o.firstChild;p;){var y=p.nextSibling,w=p.nodeName;p[Es]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&p.rel.toLowerCase()==="stylesheet"||o.removeChild(p),p=y}}else o==="body"&&Bu(i.ownerDocument.body);o=d}while(o);ol(r)}function J1(i,r){var o=i;i=0;do{var u=o.nextSibling;if(o.nodeType===1?r?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(r?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(i===0)break;i--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||i++;o=u}while(o)}function Bm(i){var r=i.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Bm(o),Aa(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}i.removeChild(o)}}function H2(i,r,o,u){for(;i.nodeType===1;){var d=o;if(i.nodeName.toLowerCase()!==r.toLowerCase()){if(!u&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(u){if(!i[Es])switch(r){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(p=i.getAttribute("rel"),p==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(p!==d.rel||i.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||i.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||i.getAttribute("title")!==(d.title==null?null:d.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(p=i.getAttribute("src"),(p!==(d.src==null?null:d.src)||i.getAttribute("type")!==(d.type==null?null:d.type)||i.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&p&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(r==="input"&&i.type==="hidden"){var p=d.name==null?null:""+d.name;if(d.type==="hidden"&&i.getAttribute("name")===p)return i}else return i;if(i=wi(i.nextSibling),i===null)break}return null}function G2(i,r,o){if(r==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!o||(i=wi(i.nextSibling),i===null))return null;return i}function eE(i,r){for(;i.nodeType!==8;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!r||(i=wi(i.nextSibling),i===null))return null;return i}function zm(i){return i.data==="$?"||i.data==="$~"}function jm(i){return i.data==="$!"||i.data==="$?"&&i.ownerDocument.readyState!=="loading"}function K2(i,r){var o=i.ownerDocument;if(i.data==="$~")i._reactRetry=r;else if(i.data!=="$?"||o.readyState!=="loading")r();else{var u=function(){r(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),i._reactRetry=u}}function wi(i){for(;i!=null;i=i.nextSibling){var r=i.nodeType;if(r===1||r===3)break;if(r===8){if(r=i.data,r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"||r==="F!"||r==="F")break;if(r==="/$"||r==="/&")return null}}return i}var qm=null;function tE(i){i=i.nextSibling;for(var r=0;i;){if(i.nodeType===8){var o=i.data;if(o==="/$"||o==="/&"){if(r===0)return wi(i.nextSibling);r--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||r++}i=i.nextSibling}return null}function nE(i){i=i.previousSibling;for(var r=0;i;){if(i.nodeType===8){var o=i.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(r===0)return i;r--}else o!=="/$"&&o!=="/&"||r++}i=i.previousSibling}return null}function iE(i,r,o){switch(r=id(o),i){case"html":if(i=r.documentElement,!i)throw Error(s(452));return i;case"head":if(i=r.head,!i)throw Error(s(453));return i;case"body":if(i=r.body,!i)throw Error(s(454));return i;default:throw Error(s(451))}}function Bu(i){for(var r=i.attributes;r.length;)i.removeAttributeNode(r[0]);Aa(i)}var Si=new Map,sE=new Set;function sd(i){return typeof i.getRootNode=="function"?i.getRootNode():i.nodeType===9?i:i.ownerDocument}var qs=ue.d;ue.d={f:Q2,r:W2,D:Y2,C:$2,L:X2,m:Z2,X:eI,S:J2,M:tI};function Q2(){var i=qs.f(),r=Yh();return i||r}function W2(i){var r=bs(i);r!==null&&r.tag===5&&r.type==="form"?T0(r):qs.r(i)}var sl=typeof document>"u"?null:document;function rE(i,r,o){var u=sl;if(u&&typeof r=="string"&&r){var d=Nt(r);d='link[rel="'+i+'"][href="'+d+'"]',typeof o=="string"&&(d+='[crossorigin="'+o+'"]'),sE.has(d)||(sE.add(d),i={rel:i,crossOrigin:o,href:r},u.querySelector(d)===null&&(r=u.createElement("link"),fn(r,"link",i),kt(r),u.head.appendChild(r)))}}function Y2(i){qs.D(i),rE("dns-prefetch",i,null)}function $2(i,r){qs.C(i,r),rE("preconnect",i,r)}function X2(i,r,o){qs.L(i,r,o);var u=sl;if(u&&i&&r){var d='link[rel="preload"][as="'+Nt(r)+'"]';r==="image"&&o&&o.imageSrcSet?(d+='[imagesrcset="'+Nt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(d+='[imagesizes="'+Nt(o.imageSizes)+'"]')):d+='[href="'+Nt(i)+'"]';var p=d;switch(r){case"style":p=rl(i);break;case"script":p=al(i)}Si.has(p)||(i=b({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:i,as:r},o),Si.set(p,i),u.querySelector(d)!==null||r==="style"&&u.querySelector(zu(p))||r==="script"&&u.querySelector(ju(p))||(r=u.createElement("link"),fn(r,"link",i),kt(r),u.head.appendChild(r)))}}function Z2(i,r){qs.m(i,r);var o=sl;if(o&&i){var u=r&&typeof r.as=="string"?r.as:"script",d='link[rel="modulepreload"][as="'+Nt(u)+'"][href="'+Nt(i)+'"]',p=d;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=al(i)}if(!Si.has(p)&&(i=b({rel:"modulepreload",href:i},r),Si.set(p,i),o.querySelector(d)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(ju(p)))return}u=o.createElement("link"),fn(u,"link",i),kt(u),o.head.appendChild(u)}}}function J2(i,r,o){qs.S(i,r,o);var u=sl;if(u&&i){var d=Di(u).hoistableStyles,p=rl(i);r=r||"default";var y=d.get(p);if(!y){var w={loading:0,preload:null};if(y=u.querySelector(zu(p)))w.loading=5;else{i=b({rel:"stylesheet",href:i,"data-precedence":r},o),(o=Si.get(p))&&Fm(i,o);var k=y=u.createElement("link");kt(k),fn(k,"link",i),k._p=new Promise(function(Q,J){k.onload=Q,k.onerror=J}),k.addEventListener("load",function(){w.loading|=1}),k.addEventListener("error",function(){w.loading|=2}),w.loading|=4,rd(y,r,u)}y={type:"stylesheet",instance:y,count:1,state:w},d.set(p,y)}}}function eI(i,r){qs.X(i,r);var o=sl;if(o&&i){var u=Di(o).hoistableScripts,d=al(i),p=u.get(d);p||(p=o.querySelector(ju(d)),p||(i=b({src:i,async:!0},r),(r=Si.get(d))&&Hm(i,r),p=o.createElement("script"),kt(p),fn(p,"link",i),o.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},u.set(d,p))}}function tI(i,r){qs.M(i,r);var o=sl;if(o&&i){var u=Di(o).hoistableScripts,d=al(i),p=u.get(d);p||(p=o.querySelector(ju(d)),p||(i=b({src:i,async:!0,type:"module"},r),(r=Si.get(d))&&Hm(i,r),p=o.createElement("script"),kt(p),fn(p,"link",i),o.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},u.set(d,p))}}function aE(i,r,o,u){var d=(d=se.current)?sd(d):null;if(!d)throw Error(s(446));switch(i){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=rl(o.href),o=Di(d).hoistableStyles,u=o.get(r),u||(u={type:"style",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){i=rl(o.href);var p=Di(d).hoistableStyles,y=p.get(i);if(y||(d=d.ownerDocument||d,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(i,y),(p=d.querySelector(zu(i)))&&!p._p&&(y.instance=p,y.state.loading=5),Si.has(i)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Si.set(i,o),p||nI(d,i,o,y.state))),r&&u===null)throw Error(s(528,""));return y}if(r&&u!==null)throw Error(s(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=al(o),o=Di(d).hoistableScripts,u=o.get(r),u||(u={type:"script",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,i))}}function rl(i){return'href="'+Nt(i)+'"'}function zu(i){return'link[rel="stylesheet"]['+i+"]"}function oE(i){return b({},i,{"data-precedence":i.precedence,precedence:null})}function nI(i,r,o,u){i.querySelector('link[rel="preload"][as="style"]['+r+"]")?u.loading=1:(r=i.createElement("link"),u.preload=r,r.addEventListener("load",function(){return u.loading|=1}),r.addEventListener("error",function(){return u.loading|=2}),fn(r,"link",o),kt(r),i.head.appendChild(r))}function al(i){return'[src="'+Nt(i)+'"]'}function ju(i){return"script[async]"+i}function lE(i,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var u=i.querySelector('style[data-href~="'+Nt(o.href)+'"]');if(u)return r.instance=u,kt(u),u;var d=b({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(i.ownerDocument||i).createElement("style"),kt(u),fn(u,"style",d),rd(u,o.precedence,i),r.instance=u;case"stylesheet":d=rl(o.href);var p=i.querySelector(zu(d));if(p)return r.state.loading|=4,r.instance=p,kt(p),p;u=oE(o),(d=Si.get(d))&&Fm(u,d),p=(i.ownerDocument||i).createElement("link"),kt(p);var y=p;return y._p=new Promise(function(w,k){y.onload=w,y.onerror=k}),fn(p,"link",u),r.state.loading|=4,rd(p,o.precedence,i),r.instance=p;case"script":return p=al(o.src),(d=i.querySelector(ju(p)))?(r.instance=d,kt(d),d):(u=o,(d=Si.get(p))&&(u=b({},o),Hm(u,d)),i=i.ownerDocument||i,d=i.createElement("script"),kt(d),fn(d,"link",u),i.head.appendChild(d),r.instance=d);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(u=r.instance,r.state.loading|=4,rd(u,o.precedence,i));return r.instance}function rd(i,r,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=u.length?u[u.length-1]:null,p=d,y=0;y<u.length;y++){var w=u[y];if(w.dataset.precedence===r)p=w;else if(p!==d)break}p?p.parentNode.insertBefore(i,p.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(i,r.firstChild))}function Fm(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.title==null&&(i.title=r.title)}function Hm(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.integrity==null&&(i.integrity=r.integrity)}var ad=null;function uE(i,r,o){if(ad===null){var u=new Map,d=ad=new Map;d.set(o,u)}else d=ad,u=d.get(o),u||(u=new Map,d.set(o,u));if(u.has(i))return u;for(u.set(i,null),o=o.getElementsByTagName(i),d=0;d<o.length;d++){var p=o[d];if(!(p[Es]||p[It]||i==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var y=p.getAttribute(r)||"";y=i+y;var w=u.get(y);w?w.push(p):u.set(y,[p])}}return u}function cE(i,r,o){i=i.ownerDocument||i,i.head.insertBefore(o,r==="title"?i.querySelector("head > title"):null)}function iI(i,r,o){if(o===1||r.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return i=r.disabled,typeof r.precedence=="string"&&i==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function hE(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}function sI(i,r,o,u){if(o.type==="stylesheet"&&(typeof u.media!="string"||matchMedia(u.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var d=rl(u.href),p=r.querySelector(zu(d));if(p){r=p._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(i.count++,i=od.bind(i),r.then(i,i)),o.state.loading|=4,o.instance=p,kt(p);return}p=r.ownerDocument||r,u=oE(u),(d=Si.get(d))&&Fm(u,d),p=p.createElement("link"),kt(p);var y=p;y._p=new Promise(function(w,k){y.onload=w,y.onerror=k}),fn(p,"link",u),o.instance=p}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(o,r),(r=o.state.preload)&&(o.state.loading&3)===0&&(i.count++,o=od.bind(i),r.addEventListener("load",o),r.addEventListener("error",o))}}var Gm=0;function rI(i,r){return i.stylesheets&&i.count===0&&ud(i,i.stylesheets),0<i.count||0<i.imgCount?function(o){var u=setTimeout(function(){if(i.stylesheets&&ud(i,i.stylesheets),i.unsuspend){var p=i.unsuspend;i.unsuspend=null,p()}},6e4+r);0<i.imgBytes&&Gm===0&&(Gm=62500*B2());var d=setTimeout(function(){if(i.waitingForImages=!1,i.count===0&&(i.stylesheets&&ud(i,i.stylesheets),i.unsuspend)){var p=i.unsuspend;i.unsuspend=null,p()}},(i.imgBytes>Gm?50:800)+r);return i.unsuspend=o,function(){i.unsuspend=null,clearTimeout(u),clearTimeout(d)}}:null}function od(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ud(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var ld=null;function ud(i,r){i.stylesheets=null,i.unsuspend!==null&&(i.count++,ld=new Map,r.forEach(aI,i),ld=null,od.call(i))}function aI(i,r){if(!(r.state.loading&4)){var o=ld.get(i);if(o)var u=o.get(null);else{o=new Map,ld.set(i,o);for(var d=i.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<d.length;p++){var y=d[p];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(o.set(y.dataset.precedence,y),u=y)}u&&o.set(null,u)}d=r.instance,y=d.getAttribute("data-precedence"),p=o.get(y)||u,p===u&&o.set(null,d),o.set(y,d),this.count++,u=od.bind(this),d.addEventListener("load",u),d.addEventListener("error",u),p?p.parentNode.insertBefore(d,p.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(d,i.firstChild)),r.state.loading|=4}}var qu={$$typeof:le,Provider:null,Consumer:null,_currentValue:ve,_currentValue2:ve,_threadCount:0};function oI(i,r,o,u,d,p,y,w,k){this.tag=1,this.containerInfo=i,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ys(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ys(0),this.hiddenUpdates=ys(null),this.identifierPrefix=u,this.onUncaughtError=d,this.onCaughtError=p,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function dE(i,r,o,u,d,p,y,w,k,Q,J,ne){return i=new oI(i,r,o,y,k,Q,J,ne,w),r=1,p===!0&&(r|=24),p=ri(3,null,null,r),i.current=p,p.stateNode=i,r=Sp(),r.refCount++,i.pooledCache=r,r.refCount++,p.memoizedState={element:u,isDehydrated:o,cache:r},Ip(p),i}function fE(i){return i?(i=Vo,i):Vo}function pE(i,r,o,u,d,p){d=fE(d),u.context===null?u.context=d:u.pendingContext=d,u=Dr(r),u.payload={element:o},p=p===void 0?null:p,p!==null&&(u.callback=p),o=kr(i,u,r),o!==null&&(Wn(o,i,r),Eu(o,i,r))}function mE(i,r){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var o=i.retryLane;i.retryLane=o!==0&&o<r?o:r}}function Km(i,r){mE(i,r),(i=i.alternate)&&mE(i,r)}function gE(i){if(i.tag===13||i.tag===31){var r=Va(i,67108864);r!==null&&Wn(r,i,67108864),Km(i,67108864)}}function _E(i){if(i.tag===13||i.tag===31){var r=ci();r=$l(r);var o=Va(i,r);o!==null&&Wn(o,i,r),Km(i,r)}}var cd=!0;function lI(i,r,o,u){var d=Z.T;Z.T=null;var p=ue.p;try{ue.p=2,Qm(i,r,o,u)}finally{ue.p=p,Z.T=d}}function uI(i,r,o,u){var d=Z.T;Z.T=null;var p=ue.p;try{ue.p=8,Qm(i,r,o,u)}finally{ue.p=p,Z.T=d}}function Qm(i,r,o,u){if(cd){var d=Wm(u);if(d===null)km(i,r,u,hd,o),vE(i,u);else if(hI(d,i,r,o,u))u.stopPropagation();else if(vE(i,u),r&4&&-1<cI.indexOf(i)){for(;d!==null;){var p=bs(d);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var y=xi(p.pendingLanes);if(y!==0){var w=p;for(w.pendingLanes|=2,w.entangledLanes|=2;y;){var k=1<<31-xn(y);w.entanglements[1]|=k,y&=~k}rs(p),(nt&6)===0&&(Qh=Ut()+500,Lu(0))}}break;case 31:case 13:w=Va(p,2),w!==null&&Wn(w,p,2),Yh(),Km(p,2)}if(p=Wm(u),p===null&&km(i,r,u,hd,o),p===d)break;d=p}d!==null&&u.stopPropagation()}else km(i,r,u,null,o)}}function Wm(i){return i=No(i),Ym(i)}var hd=null;function Ym(i){if(hd=null,i=Ts(i),i!==null){var r=l(i);if(r===null)i=null;else{var o=r.tag;if(o===13){if(i=c(r),i!==null)return i;i=null}else if(o===31){if(i=f(r),i!==null)return i;i=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;i=null}else r!==i&&(i=null)}}return hd=i,null}function yE(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(bo()){case Rt:return 2;case Bt:return 8;case Pi:case ba:return 32;case or:return 268435456;default:return 32}default:return 32}}var $m=!1,Hr=null,Gr=null,Kr=null,Fu=new Map,Hu=new Map,Qr=[],cI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function vE(i,r){switch(i){case"focusin":case"focusout":Hr=null;break;case"dragenter":case"dragleave":Gr=null;break;case"mouseover":case"mouseout":Kr=null;break;case"pointerover":case"pointerout":Fu.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hu.delete(r.pointerId)}}function Gu(i,r,o,u,d,p){return i===null||i.nativeEvent!==p?(i={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:p,targetContainers:[d]},r!==null&&(r=bs(r),r!==null&&gE(r)),i):(i.eventSystemFlags|=u,r=i.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),i)}function hI(i,r,o,u,d){switch(r){case"focusin":return Hr=Gu(Hr,i,r,o,u,d),!0;case"dragenter":return Gr=Gu(Gr,i,r,o,u,d),!0;case"mouseover":return Kr=Gu(Kr,i,r,o,u,d),!0;case"pointerover":var p=d.pointerId;return Fu.set(p,Gu(Fu.get(p)||null,i,r,o,u,d)),!0;case"gotpointercapture":return p=d.pointerId,Hu.set(p,Gu(Hu.get(p)||null,i,r,o,u,d)),!0}return!1}function EE(i){var r=Ts(i.target);if(r!==null){var o=l(r);if(o!==null){if(r=o.tag,r===13){if(r=c(o),r!==null){i.blockedOn=r,Qc(i.priority,function(){_E(o)});return}}else if(r===31){if(r=f(o),r!==null){i.blockedOn=r,Qc(i.priority,function(){_E(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){i.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}i.blockedOn=null}function dd(i){if(i.blockedOn!==null)return!1;for(var r=i.targetContainers;0<r.length;){var o=Wm(i.nativeEvent);if(o===null){o=i.nativeEvent;var u=new o.constructor(o.type,o);Io=u,o.target.dispatchEvent(u),Io=null}else return r=bs(o),r!==null&&gE(r),i.blockedOn=o,!1;r.shift()}return!0}function TE(i,r,o){dd(i)&&o.delete(r)}function dI(){$m=!1,Hr!==null&&dd(Hr)&&(Hr=null),Gr!==null&&dd(Gr)&&(Gr=null),Kr!==null&&dd(Kr)&&(Kr=null),Fu.forEach(TE),Hu.forEach(TE)}function fd(i,r){i.blockedOn===r&&(i.blockedOn=null,$m||($m=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,dI)))}var pd=null;function bE(i){pd!==i&&(pd=i,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){pd===i&&(pd=null);for(var r=0;r<i.length;r+=3){var o=i[r],u=i[r+1],d=i[r+2];if(typeof u!="function"){if(Ym(u||o)===null)continue;break}var p=bs(o);p!==null&&(i.splice(r,3),r-=3,Wp(p,{pending:!0,data:d,method:o.method,action:u},u,d))}}))}function ol(i){function r(k){return fd(k,i)}Hr!==null&&fd(Hr,i),Gr!==null&&fd(Gr,i),Kr!==null&&fd(Kr,i),Fu.forEach(r),Hu.forEach(r);for(var o=0;o<Qr.length;o++){var u=Qr[o];u.blockedOn===i&&(u.blockedOn=null)}for(;0<Qr.length&&(o=Qr[0],o.blockedOn===null);)EE(o),o.blockedOn===null&&Qr.shift();if(o=(i.ownerDocument||i).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var d=o[u],p=o[u+1],y=d[un]||null;if(typeof p=="function")y||bE(o);else if(y){var w=null;if(p&&p.hasAttribute("formAction")){if(d=p,y=p[un]||null)w=y.formAction;else if(Ym(d)!==null)continue}else w=y.action;typeof w=="function"?o[u+1]=w:(o.splice(u,3),u-=3),bE(o)}}}function wE(){function i(p){p.canIntercept&&p.info==="react-transition"&&p.intercept({handler:function(){return new Promise(function(y){return d=y})},focusReset:"manual",scroll:"manual"})}function r(){d!==null&&(d(),d=null),u||setTimeout(o,20)}function o(){if(!u&&!navigation.transition){var p=navigation.currentEntry;p&&p.url!=null&&navigation.navigate(p.url,{state:p.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var u=!1,d=null;return navigation.addEventListener("navigate",i),navigation.addEventListener("navigatesuccess",r),navigation.addEventListener("navigateerror",r),setTimeout(o,100),function(){u=!0,navigation.removeEventListener("navigate",i),navigation.removeEventListener("navigatesuccess",r),navigation.removeEventListener("navigateerror",r),d!==null&&(d(),d=null)}}}function Xm(i){this._internalRoot=i}md.prototype.render=Xm.prototype.render=function(i){var r=this._internalRoot;if(r===null)throw Error(s(409));var o=r.current,u=ci();pE(o,u,i,r,null,null)},md.prototype.unmount=Xm.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var r=i.containerInfo;pE(i.current,2,null,i,null,null),Yh(),r[$i]=null}};function md(i){this._internalRoot=i}md.prototype.unstable_scheduleHydration=function(i){if(i){var r=vs();i={blockedOn:null,target:i,priority:r};for(var o=0;o<Qr.length&&r!==0&&r<Qr[o].priority;o++);Qr.splice(o,0,i),o===0&&EE(i)}};var SE=e.version;if(SE!=="19.2.8")throw Error(s(527,SE,"19.2.8"));ue.findDOMNode=function(i){var r=i._reactInternals;if(r===void 0)throw typeof i.render=="function"?Error(s(188)):(i=Object.keys(i).join(","),Error(s(268,i)));return i=g(r),i=i!==null?E(i):null,i=i===null?null:i.stateNode,i};var fI={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:Z,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gd.isDisabled&&gd.supportsFiber)try{Qi=gd.inject(fI),yn=gd}catch{}}return Qu.createRoot=function(i,r){if(!a(i))throw Error(s(299));var o=!1,u="",d=x0,p=D0,y=k0;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(p=r.onCaughtError),r.onRecoverableError!==void 0&&(y=r.onRecoverableError)),r=dE(i,1,!1,null,null,o,u,null,d,p,y,wE),i[$i]=r.current,Dm(i),new Xm(r)},Qu.hydrateRoot=function(i,r,o){if(!a(i))throw Error(s(299));var u=!1,d="",p=x0,y=D0,w=k0,k=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onUncaughtError!==void 0&&(p=o.onUncaughtError),o.onCaughtError!==void 0&&(y=o.onCaughtError),o.onRecoverableError!==void 0&&(w=o.onRecoverableError),o.formState!==void 0&&(k=o.formState)),r=dE(i,1,!0,r,o??null,u,d,k,p,y,w,wE),r.context=fE(null),o=r.current,u=ci(),u=$l(u),d=Dr(u),d.callback=null,kr(o,d,u),o=u,r.current.lanes=o,cr(r,o),rs(r),i[$i]=r.current,Dm(i),new md(r)},Qu.version="19.2.8",Qu}var ME;function CI(){if(ME)return eg.exports;ME=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),eg.exports=AI(),eg.exports}var RI=CI();const II="modulepreload",NI=function(n,e){return new URL(n,e).href},OE={},tr=function(e,t,s){let a=Promise.resolve();if(t&&t.length>0){let c=function(E){return Promise.all(E.map(b=>Promise.resolve(b).then(S=>({status:"fulfilled",value:S}),S=>({status:"rejected",reason:S}))))};const f=document.getElementsByTagName("link"),m=document.querySelector("meta[property=csp-nonce]"),g=m?.nonce||m?.getAttribute("nonce");a=c(t.map(E=>{if(E=NI(E,s),E in OE)return;OE[E]=!0;const b=E.endsWith(".css"),S=b?'[rel="stylesheet"]':"";if(!!s)for(let H=f.length-1;H>=0;H--){const B=f[H];if(B.href===E&&(!b||B.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${E}"]${S}`))return;const V=document.createElement("link");if(V.rel=b?"stylesheet":II,b||(V.as="script"),V.crossOrigin="",V.href=E,g&&V.setAttribute("nonce",g),document.head.appendChild(V),b)return new Promise((H,B)=>{V.addEventListener("load",H),V.addEventListener("error",()=>B(new Error(`Unable to preload CSS for ${E}`)))})}))}function l(c){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=c,window.dispatchEvent(f),!f.defaultPrevented)throw c}return a.then(c=>{for(const f of c||[])f.status==="rejected"&&l(f.reason);return e().catch(l)})};var S_={};(function n(e,t,s,a){var l=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),c=typeof Path2D=="function"&&typeof DOMMatrix=="function",f=(function(){if(!e.OffscreenCanvas)return!1;try{var N=new OffscreenCanvas(1,1),T=N.getContext("2d");T.fillRect(0,0,1,1);var x=N.transferToImageBitmap();T.createPattern(x,"no-repeat")}catch{return!1}return!0})();function m(){}function g(N){var T=t.exports.Promise,x=T!==void 0?T:e.Promise;return typeof x=="function"?new x(N):(N(m,m),null)}var E=(function(N,T){return{transform:function(x){if(N)return x;if(T.has(x))return T.get(x);var j=new OffscreenCanvas(x.width,x.height),z=j.getContext("2d");return z.drawImage(x,0,0),T.set(x,j),j},clear:function(){T.clear()}}})(f,new Map),b=(function(){var N=Math.floor(16.666666666666668),T,x,j={},z=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(T=function(X){var se=Math.random();return j[se]=requestAnimationFrame(function ae(_e){z===_e||z+N-1<_e?(z=_e,delete j[se],X()):j[se]=requestAnimationFrame(ae)}),se},x=function(X){j[X]&&cancelAnimationFrame(j[X])}):(T=function(X){return setTimeout(X,N)},x=function(X){return clearTimeout(X)}),{frame:T,cancel:x}})(),S=(function(){var N,T,x={};function j(z){function X(se,ae){z.postMessage({options:se||{},callback:ae})}z.init=function(ae){var _e=ae.transferControlToOffscreen();z.postMessage({canvas:_e},[_e])},z.fire=function(ae,_e,we){if(T)return X(ae,null),T;var Xe=Math.random().toString(36).slice(2);return T=g(function(Ke){function rt(St){St.data.callback===Xe&&(delete x[Xe],z.removeEventListener("message",rt),T=null,E.clear(),we(),Ke())}z.addEventListener("message",rt),X(ae,Xe),x[Xe]=rt.bind(null,{data:{callback:Xe}})}),T},z.reset=function(){z.postMessage({reset:!0});for(var ae in x)x[ae](),delete x[ae]}}return function(){if(N)return N;if(!s&&l){var z=["var CONFETTI, SIZE = {}, module = {};","("+n.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{N=new Worker(URL.createObjectURL(new Blob([z])))}catch(X){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",X),null}j(N)}return N}})(),P={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function V(N,T){return T?T(N):N}function H(N){return N!=null}function B(N,T,x){return V(N&&H(N[T])?N[T]:P[T],x)}function re(N){return N<0?0:Math.floor(N)}function oe(N,T){return Math.floor(Math.random()*(T-N))+N}function le(N){return parseInt(N,16)}function me(N){return N.map(Me)}function Me(N){var T=String(N).replace(/[^0-9a-f]/gi,"");return T.length<6&&(T=T[0]+T[0]+T[1]+T[1]+T[2]+T[2]),{r:le(T.substring(0,2)),g:le(T.substring(2,4)),b:le(T.substring(4,6))}}function Ee(N){var T=B(N,"origin",Object);return T.x=B(T,"x",Number),T.y=B(T,"y",Number),T}function M(N){N.width=document.documentElement.clientWidth,N.height=document.documentElement.clientHeight}function C(N){var T=N.getBoundingClientRect();N.width=T.width,N.height=T.height}function I(N){var T=document.createElement("canvas");return T.style.position="fixed",T.style.top="0px",T.style.left="0px",T.style.pointerEvents="none",T.style.zIndex=N,T}function O(N,T,x,j,z,X,se,ae,_e){N.save(),N.translate(T,x),N.rotate(X),N.scale(j,z),N.arc(0,0,1,se,ae,_e),N.restore()}function U(N){var T=N.angle*(Math.PI/180),x=N.spread*(Math.PI/180);return{x:N.x,y:N.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:N.startVelocity*.5+Math.random()*N.startVelocity,angle2D:-T+(.5*x-Math.random()*x),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:N.color,shape:N.shape,tick:0,totalTicks:N.ticks,decay:N.decay,drift:N.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:N.gravity*3,ovalScalar:.6,scalar:N.scalar,flat:N.flat}}function q(N,T){T.x+=Math.cos(T.angle2D)*T.velocity+T.drift,T.y+=Math.sin(T.angle2D)*T.velocity+T.gravity,T.velocity*=T.decay,T.flat?(T.wobble=0,T.wobbleX=T.x+10*T.scalar,T.wobbleY=T.y+10*T.scalar,T.tiltSin=0,T.tiltCos=0,T.random=1):(T.wobble+=T.wobbleSpeed,T.wobbleX=T.x+10*T.scalar*Math.cos(T.wobble),T.wobbleY=T.y+10*T.scalar*Math.sin(T.wobble),T.tiltAngle+=.1,T.tiltSin=Math.sin(T.tiltAngle),T.tiltCos=Math.cos(T.tiltAngle),T.random=Math.random()+2);var x=T.tick++/T.totalTicks,j=T.x+T.random*T.tiltCos,z=T.y+T.random*T.tiltSin,X=T.wobbleX+T.random*T.tiltCos,se=T.wobbleY+T.random*T.tiltSin;if(N.fillStyle="rgba("+T.color.r+", "+T.color.g+", "+T.color.b+", "+(1-x)+")",N.beginPath(),c&&T.shape.type==="path"&&typeof T.shape.path=="string"&&Array.isArray(T.shape.matrix))N.fill(ue(T.shape.path,T.shape.matrix,T.x,T.y,Math.abs(X-j)*.1,Math.abs(se-z)*.1,Math.PI/10*T.wobble));else if(T.shape.type==="bitmap"){var ae=Math.PI/10*T.wobble,_e=Math.abs(X-j)*.1,we=Math.abs(se-z)*.1,Xe=T.shape.bitmap.width*T.scalar,Ke=T.shape.bitmap.height*T.scalar,rt=new DOMMatrix([Math.cos(ae)*_e,Math.sin(ae)*_e,-Math.sin(ae)*we,Math.cos(ae)*we,T.x,T.y]);rt.multiplySelf(new DOMMatrix(T.shape.matrix));var St=N.createPattern(E.transform(T.shape.bitmap),"no-repeat");St.setTransform(rt),N.globalAlpha=1-x,N.fillStyle=St,N.fillRect(T.x-Xe/2,T.y-Ke/2,Xe,Ke),N.globalAlpha=1}else if(T.shape==="circle")N.ellipse?N.ellipse(T.x,T.y,Math.abs(X-j)*T.ovalScalar,Math.abs(se-z)*T.ovalScalar,Math.PI/10*T.wobble,0,2*Math.PI):O(N,T.x,T.y,Math.abs(X-j)*T.ovalScalar,Math.abs(se-z)*T.ovalScalar,Math.PI/10*T.wobble,0,2*Math.PI);else if(T.shape==="star")for(var Pe=Math.PI/2*3,Ct=4*T.scalar,Zt=8*T.scalar,Pn=T.x,zn=T.y,jn=5,Jt=Math.PI/jn;jn--;)Pn=T.x+Math.cos(Pe)*Zt,zn=T.y+Math.sin(Pe)*Zt,N.lineTo(Pn,zn),Pe+=Jt,Pn=T.x+Math.cos(Pe)*Ct,zn=T.y+Math.sin(Pe)*Ct,N.lineTo(Pn,zn),Pe+=Jt;else N.moveTo(Math.floor(T.x),Math.floor(T.y)),N.lineTo(Math.floor(T.wobbleX),Math.floor(z)),N.lineTo(Math.floor(X),Math.floor(se)),N.lineTo(Math.floor(j),Math.floor(T.wobbleY));return N.closePath(),N.fill(),T.tick<T.totalTicks}function D(N,T,x,j,z){var X=T.slice(),se=N.getContext("2d"),ae,_e,we=g(function(Xe){function Ke(){ae=_e=null,se.clearRect(0,0,j.width,j.height),E.clear(),z(),Xe()}function rt(){s&&!(j.width===a.width&&j.height===a.height)&&(j.width=N.width=a.width,j.height=N.height=a.height),!j.width&&!j.height&&(x(N),j.width=N.width,j.height=N.height),se.clearRect(0,0,j.width,j.height),X=X.filter(function(St){return q(se,St)}),X.length?ae=b.frame(rt):Ke()}ae=b.frame(rt),_e=Ke});return{addFettis:function(Xe){return X=X.concat(Xe),we},canvas:N,promise:we,reset:function(){ae&&b.cancel(ae),_e&&_e()}}}function ct(N,T){var x=!N,j=!!B(T||{},"resize"),z=!1,X=B(T,"disableForReducedMotion",Boolean),se=l&&!!B(T||{},"useWorker"),ae=se?S():null,_e=x?M:C,we=N&&ae?!!N.__confetti_initialized:!1,Xe=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Ke;function rt(Pe,Ct,Zt){for(var Pn=B(Pe,"particleCount",re),zn=B(Pe,"angle",Number),jn=B(Pe,"spread",Number),Jt=B(Pe,"startVelocity",Number),ar=B(Pe,"decay",Number),Kl=B(Pe,"gravity",Number),Ta=B(Pe,"drift",Number),Ut=B(Pe,"colors",me),bo=B(Pe,"ticks",Number),Rt=B(Pe,"shapes"),Bt=B(Pe,"scalar"),Pi=!!B(Pe,"flat"),ba=Ee(Pe),or=Pn,wa=[],_s=N.width*ba.x,Qi=N.height*ba.y;or--;)wa.push(U({x:_s,y:Qi,angle:zn,spread:jn,startVelocity:Jt,color:Ut[or%Ut.length],shape:Rt[oe(0,Rt.length)],ticks:bo,decay:ar,gravity:Kl,drift:Ta,scalar:Bt,flat:Pi}));return Ke?Ke.addFettis(wa):(Ke=D(N,wa,_e,Ct,Zt),Ke.promise)}function St(Pe){var Ct=X||B(Pe,"disableForReducedMotion",Boolean),Zt=B(Pe,"zIndex",Number);if(Ct&&Xe)return g(function(Jt){Jt()});x&&Ke?N=Ke.canvas:x&&!N&&(N=I(Zt),document.body.appendChild(N)),j&&!we&&_e(N);var Pn={width:N.width,height:N.height};ae&&!we&&ae.init(N),we=!0,ae&&(N.__confetti_initialized=!0);function zn(){if(ae){var Jt={getBoundingClientRect:function(){if(!x)return N.getBoundingClientRect()}};_e(Jt),ae.postMessage({resize:{width:Jt.width,height:Jt.height}});return}Pn.width=Pn.height=null}function jn(){Ke=null,j&&(z=!1,e.removeEventListener("resize",zn)),x&&N&&(document.body.contains(N)&&document.body.removeChild(N),N=null,we=!1)}return j&&!z&&(z=!0,e.addEventListener("resize",zn,!1)),ae?ae.fire(Pe,Pn,jn):rt(Pe,Pn,jn)}return St.reset=function(){ae&&ae.reset(),Ke&&Ke.reset()},St}var Ne;function Z(){return Ne||(Ne=ct(null,{useWorker:!0,resize:!0})),Ne}function ue(N,T,x,j,z,X,se){var ae=new Path2D(N),_e=new Path2D;_e.addPath(ae,new DOMMatrix(T));var we=new Path2D;return we.addPath(_e,new DOMMatrix([Math.cos(se)*z,Math.sin(se)*z,-Math.sin(se)*X,Math.cos(se)*X,x,j])),we}function ve(N){if(!c)throw new Error("path confetti are not supported in this browser");var T,x;typeof N=="string"?T=N:(T=N.path,x=N.matrix);var j=new Path2D(T),z=document.createElement("canvas"),X=z.getContext("2d");if(!x){for(var se=1e3,ae=se,_e=se,we=0,Xe=0,Ke,rt,St=0;St<se;St+=2)for(var Pe=0;Pe<se;Pe+=2)X.isPointInPath(j,St,Pe,"nonzero")&&(ae=Math.min(ae,St),_e=Math.min(_e,Pe),we=Math.max(we,St),Xe=Math.max(Xe,Pe));Ke=we-ae,rt=Xe-_e;var Ct=10,Zt=Math.min(Ct/Ke,Ct/rt);x=[Zt,0,0,Zt,-Math.round(Ke/2+ae)*Zt,-Math.round(rt/2+_e)*Zt]}return{type:"path",path:T,matrix:x}}function Ue(N){var T,x=1,j="#000000",z='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof N=="string"?T=N:(T=N.text,x="scalar"in N?N.scalar:x,z="fontFamily"in N?N.fontFamily:z,j="color"in N?N.color:j);var X=10*x,se=""+X+"px "+z,ae=new OffscreenCanvas(X,X),_e=ae.getContext("2d");_e.font=se;var we=_e.measureText(T),Xe=Math.ceil(we.actualBoundingBoxRight+we.actualBoundingBoxLeft),Ke=Math.ceil(we.actualBoundingBoxAscent+we.actualBoundingBoxDescent),rt=2,St=we.actualBoundingBoxLeft+rt,Pe=we.actualBoundingBoxAscent+rt;Xe+=rt+rt,Ke+=rt+rt,ae=new OffscreenCanvas(Xe,Ke),_e=ae.getContext("2d"),_e.font=se,_e.fillStyle=j,_e.fillText(T,St,Pe);var Ct=1/x;return{type:"bitmap",bitmap:ae.transferToImageBitmap(),matrix:[Ct,0,0,Ct,-Xe*Ct/2,-Ke*Ct/2]}}t.exports=function(){return Z().apply(this,arguments)},t.exports.reset=function(){Z().reset()},t.exports.create=ct,t.exports.shapeFromPath=ve,t.exports.shapeFromText=Ue})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),S_,!1);const sg=S_.exports;S_.exports.create;const PI=()=>{};var LE={};/**
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
 */const yw={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const he=function(n,e){if(!n)throw Dl(e)},Dl=function(n){return new Error("Firebase Database ("+yw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const vw=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},xI=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const a=n[t++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const l=n[t++];e[s++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=n[t++],c=n[t++],f=n[t++],m=((a&7)<<18|(l&63)<<12|(c&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(m>>10)),e[s++]=String.fromCharCode(56320+(m&1023))}else{const l=n[t++],c=n[t++];e[s++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},A_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<n.length;a+=3){const l=n[a],c=a+1<n.length,f=c?n[a+1]:0,m=a+2<n.length,g=m?n[a+2]:0,E=l>>2,b=(l&3)<<4|f>>4;let S=(f&15)<<2|g>>6,P=g&63;m||(P=64,c||(S=64)),s.push(t[E],t[b],t[S],t[P])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(vw(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):xI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<n.length;){const l=t[n.charAt(a++)],f=a<n.length?t[n.charAt(a)]:0;++a;const g=a<n.length?t[n.charAt(a)]:64;++a;const b=a<n.length?t[n.charAt(a)]:64;if(++a,l==null||f==null||g==null||b==null)throw new DI;const S=l<<2|f>>4;if(s.push(S),g!==64){const P=f<<4&240|g>>2;if(s.push(P),b!==64){const V=g<<6&192|b;s.push(V)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class DI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ew=function(n){const e=vw(n);return A_.encodeByteArray(e,!0)},Ld=function(n){return Ew(n).replace(/\./g,"")},Vd=function(n){try{return A_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function kI(n){return Tw(void 0,n)}function Tw(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!MI(t)||(n[t]=Tw(n[t],e[t]));return n}function MI(n){return n!=="__proto__"}/**
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
 */function OI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const LI=()=>OI().__FIREBASE_DEFAULTS__,VI=()=>{if(typeof process>"u"||typeof LE>"u")return;const n=LE.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},UI=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Vd(n[1]);return e&&JSON.parse(e)},_f=()=>{try{return PI()||LI()||VI()||UI()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},bw=n=>{var e,t;return(t=(e=_f())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},ww=n=>{const e=bw(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Sw=()=>{var n;return(n=_f())===null||n===void 0?void 0:n.config},Aw=n=>{var e;return(e=_f())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class yf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function _a(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function C_(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Cw(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",a=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ld(JSON.stringify(t)),Ld(JSON.stringify(c)),""].join(".")}const sc={};function BI(){const n={prod:[],emulator:[]};for(const e of Object.keys(sc))sc[e]?n.emulator.push(e):n.prod.push(e);return n}function zI(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let VE=!1;function R_(n,e){if(typeof window>"u"||typeof document>"u"||!_a(window.location.host)||sc[n]===e||sc[n]||VE)return;sc[n]=e;function t(S){return`__firebase__banner__${S}`}const s="__firebase__banner",l=BI().prod.length>0;function c(){const S=document.getElementById(s);S&&S.remove()}function f(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function m(S,P){S.setAttribute("width","24"),S.setAttribute("id",P),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function g(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{VE=!0,c()},S}function E(S,P){S.setAttribute("id",P),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function b(){const S=zI(s),P=t("text"),V=document.getElementById(P)||document.createElement("span"),H=t("learnmore"),B=document.getElementById(H)||document.createElement("a"),re=t("preprendIcon"),oe=document.getElementById(re)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const le=S.element;f(le),E(B,H);const me=g();m(oe,re),le.append(oe,V,B,me),document.body.appendChild(le)}l?(V.innerText="Preview backend disconnected.",oe.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,V.innerText="Preview backend running in this workspace."),V.setAttribute("id",P)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",b):b()}/**
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
 */function In(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function I_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(In())}function jI(){var n;const e=(n=_f())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function qI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Rw(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Iw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function FI(){const n=In();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function HI(){return yw.NODE_ADMIN===!0}function GI(){return!jI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Nw(){try{return typeof indexedDB=="object"}catch{return!1}}function Pw(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var l;e(((l=a.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}function KI(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const QI="FirebaseError";class Ki extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=QI,Object.setPrototypeOf(this,Ki.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mo.prototype.create)}}class mo{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?WI(l,s):"Error",f=`${this.serviceName}: ${c} (${a}).`;return new Ki(a,f,s)}}function WI(n,e){return n.replace(YI,(t,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const YI=/\{\$([^}]+)}/g;/**
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
 */function mc(n){return JSON.parse(n)}function mn(n){return JSON.stringify(n)}/**
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
 */const xw=function(n){let e={},t={},s={},a="";try{const l=n.split(".");e=mc(Vd(l[0])||""),t=mc(Vd(l[1])||""),a=l[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:a}},$I=function(n){const e=xw(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},XI=function(n){const e=xw(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function nr(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function vl(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function kg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ud(n,e,t){const s={};for(const a in n)Object.prototype.hasOwnProperty.call(n,a)&&(s[a]=e.call(t,n[a],a,n));return s}function qi(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const a of t){if(!s.includes(a))return!1;const l=n[a],c=e[a];if(UE(l)&&UE(c)){if(!qi(l,c))return!1}else if(l!==c)return!1}for(const a of s)if(!t.includes(a))return!1;return!0}function UE(n){return n!==null&&typeof n=="object"}/**
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
 */function kl(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Zu(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[a,l]=s.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function Ju(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
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
 */class ZI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let b=0;b<16;b++)s[b]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let b=0;b<16;b++)s[b]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let b=16;b<80;b++){const S=s[b-3]^s[b-8]^s[b-14]^s[b-16];s[b]=(S<<1|S>>>31)&4294967295}let a=this.chain_[0],l=this.chain_[1],c=this.chain_[2],f=this.chain_[3],m=this.chain_[4],g,E;for(let b=0;b<80;b++){b<40?b<20?(g=f^l&(c^f),E=1518500249):(g=l^c^f,E=1859775393):b<60?(g=l&c|f&(l|c),E=2400959708):(g=l^c^f,E=3395469782);const S=(a<<5|a>>>27)+g+m+E+s[b]&4294967295;m=f,f=c,c=(l<<30|l>>>2)&4294967295,l=a,a=S}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+m&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let a=0;const l=this.buf_;let c=this.inbuf_;for(;a<t;){if(c===0)for(;a<=s;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<t;)if(l[c]=e.charCodeAt(a),++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}else for(;a<t;)if(l[c]=e[a],++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let a=0;a<5;a++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[a]>>l&255,++s;return e}}function JI(n,e){const t=new eN(n,e);return t.subscribe.bind(t)}class eN{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let a;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");tN(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:s},a.next===void 0&&(a.next=rg),a.error===void 0&&(a.error=rg),a.complete===void 0&&(a.complete=rg);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tN(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function rg(){}function N_(n,e){return`${n} failed: ${e} argument `}/**
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
 */const nN=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);if(a>=55296&&a<=56319){const l=a-55296;s++,he(s<n.length,"Surrogate pair missing trail surrogate.");const c=n.charCodeAt(s)-56320;a=65536+(l<<10)+c}a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):a<65536?(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},vf=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */const iN=1e3,sN=2,rN=14400*1e3,aN=.5;function BE(n,e=iN,t=sN){const s=e*Math.pow(t,n),a=Math.round(aN*s*(Math.random()-.5)*2);return Math.min(rN,s+a)}/**
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
 */function st(n){return n&&n._delegate?n._delegate:n}class Ri{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const $a="[DEFAULT]";/**
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
 */class oN{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new yf;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e?.identifier),a=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(a)return null;throw l}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(uN(e))try{this.getOrInitializeService({instanceIdentifier:$a})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});s.resolve(l)}catch{}}}}clearInstance(e=$a){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$a){return this.instances.has(e)}getOptions(e=$a){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,c]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);s===f&&c.resolve(a)}return a}onInit(e,t){var s;const a=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(a))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(a,l);const c=this.instances.get(a);return c&&e(c,a),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const a of s)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:lN(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=$a){return this.component?this.component.multipleInstances?e:$a:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lN(n){return n===$a?void 0:n}function uN(n){return n.instantiationMode==="EAGER"}/**
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
 */class cN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new oN(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var je;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(je||(je={}));const hN={debug:je.DEBUG,verbose:je.VERBOSE,info:je.INFO,warn:je.WARN,error:je.ERROR,silent:je.SILENT},dN=je.INFO,fN={[je.DEBUG]:"log",[je.VERBOSE]:"log",[je.INFO]:"info",[je.WARN]:"warn",[je.ERROR]:"error"},pN=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),a=fN[e];if(a)console[a](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ic{constructor(e){this.name=e,this._logLevel=dN,this._logHandler=pN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in je))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,je.DEBUG,...e),this._logHandler(this,je.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,je.VERBOSE,...e),this._logHandler(this,je.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,je.INFO,...e),this._logHandler(this,je.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,je.WARN,...e),this._logHandler(this,je.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,je.ERROR,...e),this._logHandler(this,je.ERROR,...e)}}const mN=(n,e)=>e.some(t=>n instanceof t);let zE,jE;function gN(){return zE||(zE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _N(){return jE||(jE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dw=new WeakMap,Mg=new WeakMap,kw=new WeakMap,ag=new WeakMap,P_=new WeakMap;function yN(n){const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(ia(n.result)),a()},c=()=>{s(n.error),a()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&Dw.set(t,n)}).catch(()=>{}),P_.set(e,n),e}function vN(n){if(Mg.has(n))return;const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),a()},c=()=>{s(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});Mg.set(n,e)}let Og={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Mg.get(n);if(e==="objectStoreNames")return n.objectStoreNames||kw.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ia(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function EN(n){Og=n(Og)}function TN(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(og(this),e,...t);return kw.set(s,e.sort?e.sort():[e]),ia(s)}:_N().includes(n)?function(...e){return n.apply(og(this),e),ia(Dw.get(this))}:function(...e){return ia(n.apply(og(this),e))}}function bN(n){return typeof n=="function"?TN(n):(n instanceof IDBTransaction&&vN(n),mN(n,gN())?new Proxy(n,Og):n)}function ia(n){if(n instanceof IDBRequest)return yN(n);if(ag.has(n))return ag.get(n);const e=bN(n);return e!==n&&(ag.set(n,e),P_.set(e,n)),e}const og=n=>P_.get(n);function Mw(n,e,{blocked:t,upgrade:s,blocking:a,terminated:l}={}){const c=indexedDB.open(n,e),f=ia(c);return s&&c.addEventListener("upgradeneeded",m=>{s(ia(c.result),m.oldVersion,m.newVersion,ia(c.transaction),m)}),t&&c.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),f.then(m=>{l&&m.addEventListener("close",()=>l()),a&&m.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const wN=["get","getKey","getAll","getAllKeys","count"],SN=["put","add","delete","clear"],lg=new Map;function qE(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(lg.get(e))return lg.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=SN.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||wN.includes(t)))return;const l=async function(c,...f){const m=this.transaction(c,a?"readwrite":"readonly");let g=m.store;return s&&(g=g.index(f.shift())),(await Promise.all([g[t](...f),a&&m.done]))[0]};return lg.set(e,l),l}EN(n=>({...n,get:(e,t,s)=>qE(e,t)||n.get(e,t,s),has:(e,t)=>!!qE(e,t)||n.has(e,t)}));/**
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
 */class AN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(CN(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function CN(n){const e=n.getComponent();return e?.type==="VERSION"}const Lg="@firebase/app",FE="0.13.2";/**
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
 */const Ys=new Ic("@firebase/app"),RN="@firebase/app-compat",IN="@firebase/analytics-compat",NN="@firebase/analytics",PN="@firebase/app-check-compat",xN="@firebase/app-check",DN="@firebase/auth",kN="@firebase/auth-compat",MN="@firebase/database",ON="@firebase/data-connect",LN="@firebase/database-compat",VN="@firebase/functions",UN="@firebase/functions-compat",BN="@firebase/installations",zN="@firebase/installations-compat",jN="@firebase/messaging",qN="@firebase/messaging-compat",FN="@firebase/performance",HN="@firebase/performance-compat",GN="@firebase/remote-config",KN="@firebase/remote-config-compat",QN="@firebase/storage",WN="@firebase/storage-compat",YN="@firebase/firestore",$N="@firebase/ai",XN="@firebase/firestore-compat",ZN="firebase",JN="11.10.0";/**
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
 */const Vg="[DEFAULT]",eP={[Lg]:"fire-core",[RN]:"fire-core-compat",[NN]:"fire-analytics",[IN]:"fire-analytics-compat",[xN]:"fire-app-check",[PN]:"fire-app-check-compat",[DN]:"fire-auth",[kN]:"fire-auth-compat",[MN]:"fire-rtdb",[ON]:"fire-data-connect",[LN]:"fire-rtdb-compat",[VN]:"fire-fn",[UN]:"fire-fn-compat",[BN]:"fire-iid",[zN]:"fire-iid-compat",[jN]:"fire-fcm",[qN]:"fire-fcm-compat",[FN]:"fire-perf",[HN]:"fire-perf-compat",[GN]:"fire-rc",[KN]:"fire-rc-compat",[QN]:"fire-gcs",[WN]:"fire-gcs-compat",[YN]:"fire-fst",[XN]:"fire-fst-compat",[$N]:"fire-vertex","fire-js":"fire-js",[ZN]:"fire-js-all"};/**
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
 */const gc=new Map,tP=new Map,Ug=new Map;function HE(n,e){try{n.container.addComponent(e)}catch(t){Ys.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Fi(n){const e=n.name;if(Ug.has(e))return Ys.debug(`There were multiple attempts to register component ${e}.`),!1;Ug.set(e,n);for(const t of gc.values())HE(t,n);for(const t of tP.values())HE(t,n);return!0}function ya(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Un(n){return n==null?!1:n.settings!==void 0}/**
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
 */const nP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},sa=new mo("app","Firebase",nP);/**
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
 */class iP{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ri("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw sa.create("app-deleted",{appName:this._name})}}/**
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
 */const go=JN;function Ow(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Vg,automaticDataCollectionEnabled:!0},e),a=s.name;if(typeof a!="string"||!a)throw sa.create("bad-app-name",{appName:String(a)});if(t||(t=Sw()),!t)throw sa.create("no-options");const l=gc.get(a);if(l){if(qi(t,l.options)&&qi(s,l.config))return l;throw sa.create("duplicate-app",{appName:a})}const c=new cN(a);for(const m of Ug.values())c.addComponent(m);const f=new iP(t,s,c);return gc.set(a,f),f}function Nc(n=Vg){const e=gc.get(n);if(!e&&n===Vg&&Sw())return Ow();if(!e)throw sa.create("no-app",{appName:n});return e}function sP(){return Array.from(gc.values())}function Jn(n,e,t){var s;let a=(s=eP[n])!==null&&s!==void 0?s:n;t&&(a+=`-${t}`);const l=a.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const f=[`Unable to register library "${a}" with version "${e}":`];l&&f.push(`library name "${a}" contains illegal characters (whitespace or "/")`),l&&c&&f.push("and"),c&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ys.warn(f.join(" "));return}Fi(new Ri(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
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
 */const rP="firebase-heartbeat-database",aP=1,_c="firebase-heartbeat-store";let ug=null;function Lw(){return ug||(ug=Mw(rP,aP,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(_c)}catch(t){console.warn(t)}}}}).catch(n=>{throw sa.create("idb-open",{originalErrorMessage:n.message})})),ug}async function oP(n){try{const t=(await Lw()).transaction(_c),s=await t.objectStore(_c).get(Vw(n));return await t.done,s}catch(e){if(e instanceof Ki)Ys.warn(e.message);else{const t=sa.create("idb-get",{originalErrorMessage:e?.message});Ys.warn(t.message)}}}async function GE(n,e){try{const s=(await Lw()).transaction(_c,"readwrite");await s.objectStore(_c).put(e,Vw(n)),await s.done}catch(t){if(t instanceof Ki)Ys.warn(t.message);else{const s=sa.create("idb-set",{originalErrorMessage:t?.message});Ys.warn(s.message)}}}function Vw(n){return`${n.name}!${n.options.appId}`}/**
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
 */const lP=1024,uP=30;class cP{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new dP(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=KE();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>uP){const c=fP(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Ys.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=KE(),{heartbeatsToSend:s,unsentEntries:a}=hP(this._heartbeatsCache.heartbeats),l=Ld(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Ys.warn(t),""}}}function KE(){return new Date().toISOString().substring(0,10)}function hP(n,e=lP){const t=[];let s=n.slice();for(const a of n){const l=t.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),QE(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),QE(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class dP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Nw()?Pw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await oP(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return GE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return GE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function QE(n){return Ld(JSON.stringify({version:2,heartbeats:n})).length}function fP(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function pP(n){Fi(new Ri("platform-logger",e=>new AN(e),"PRIVATE")),Fi(new Ri("heartbeat",e=>new cP(e),"PRIVATE")),Jn(Lg,FE,n),Jn(Lg,FE,"esm2017"),Jn("fire-js","")}pP("");var mP="firebase",gP="11.10.0";/**
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
 */Jn(mP,gP,"app");var WE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ra,Uw;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(M,C){function I(){}I.prototype=C.prototype,M.D=C.prototype,M.prototype=new I,M.prototype.constructor=M,M.C=function(O,U,q){for(var D=Array(arguments.length-2),ct=2;ct<arguments.length;ct++)D[ct-2]=arguments[ct];return C.prototype[U].apply(O,D)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(M,C,I){I||(I=0);var O=Array(16);if(typeof C=="string")for(var U=0;16>U;++U)O[U]=C.charCodeAt(I++)|C.charCodeAt(I++)<<8|C.charCodeAt(I++)<<16|C.charCodeAt(I++)<<24;else for(U=0;16>U;++U)O[U]=C[I++]|C[I++]<<8|C[I++]<<16|C[I++]<<24;C=M.g[0],I=M.g[1],U=M.g[2];var q=M.g[3],D=C+(q^I&(U^q))+O[0]+3614090360&4294967295;C=I+(D<<7&4294967295|D>>>25),D=q+(U^C&(I^U))+O[1]+3905402710&4294967295,q=C+(D<<12&4294967295|D>>>20),D=U+(I^q&(C^I))+O[2]+606105819&4294967295,U=q+(D<<17&4294967295|D>>>15),D=I+(C^U&(q^C))+O[3]+3250441966&4294967295,I=U+(D<<22&4294967295|D>>>10),D=C+(q^I&(U^q))+O[4]+4118548399&4294967295,C=I+(D<<7&4294967295|D>>>25),D=q+(U^C&(I^U))+O[5]+1200080426&4294967295,q=C+(D<<12&4294967295|D>>>20),D=U+(I^q&(C^I))+O[6]+2821735955&4294967295,U=q+(D<<17&4294967295|D>>>15),D=I+(C^U&(q^C))+O[7]+4249261313&4294967295,I=U+(D<<22&4294967295|D>>>10),D=C+(q^I&(U^q))+O[8]+1770035416&4294967295,C=I+(D<<7&4294967295|D>>>25),D=q+(U^C&(I^U))+O[9]+2336552879&4294967295,q=C+(D<<12&4294967295|D>>>20),D=U+(I^q&(C^I))+O[10]+4294925233&4294967295,U=q+(D<<17&4294967295|D>>>15),D=I+(C^U&(q^C))+O[11]+2304563134&4294967295,I=U+(D<<22&4294967295|D>>>10),D=C+(q^I&(U^q))+O[12]+1804603682&4294967295,C=I+(D<<7&4294967295|D>>>25),D=q+(U^C&(I^U))+O[13]+4254626195&4294967295,q=C+(D<<12&4294967295|D>>>20),D=U+(I^q&(C^I))+O[14]+2792965006&4294967295,U=q+(D<<17&4294967295|D>>>15),D=I+(C^U&(q^C))+O[15]+1236535329&4294967295,I=U+(D<<22&4294967295|D>>>10),D=C+(U^q&(I^U))+O[1]+4129170786&4294967295,C=I+(D<<5&4294967295|D>>>27),D=q+(I^U&(C^I))+O[6]+3225465664&4294967295,q=C+(D<<9&4294967295|D>>>23),D=U+(C^I&(q^C))+O[11]+643717713&4294967295,U=q+(D<<14&4294967295|D>>>18),D=I+(q^C&(U^q))+O[0]+3921069994&4294967295,I=U+(D<<20&4294967295|D>>>12),D=C+(U^q&(I^U))+O[5]+3593408605&4294967295,C=I+(D<<5&4294967295|D>>>27),D=q+(I^U&(C^I))+O[10]+38016083&4294967295,q=C+(D<<9&4294967295|D>>>23),D=U+(C^I&(q^C))+O[15]+3634488961&4294967295,U=q+(D<<14&4294967295|D>>>18),D=I+(q^C&(U^q))+O[4]+3889429448&4294967295,I=U+(D<<20&4294967295|D>>>12),D=C+(U^q&(I^U))+O[9]+568446438&4294967295,C=I+(D<<5&4294967295|D>>>27),D=q+(I^U&(C^I))+O[14]+3275163606&4294967295,q=C+(D<<9&4294967295|D>>>23),D=U+(C^I&(q^C))+O[3]+4107603335&4294967295,U=q+(D<<14&4294967295|D>>>18),D=I+(q^C&(U^q))+O[8]+1163531501&4294967295,I=U+(D<<20&4294967295|D>>>12),D=C+(U^q&(I^U))+O[13]+2850285829&4294967295,C=I+(D<<5&4294967295|D>>>27),D=q+(I^U&(C^I))+O[2]+4243563512&4294967295,q=C+(D<<9&4294967295|D>>>23),D=U+(C^I&(q^C))+O[7]+1735328473&4294967295,U=q+(D<<14&4294967295|D>>>18),D=I+(q^C&(U^q))+O[12]+2368359562&4294967295,I=U+(D<<20&4294967295|D>>>12),D=C+(I^U^q)+O[5]+4294588738&4294967295,C=I+(D<<4&4294967295|D>>>28),D=q+(C^I^U)+O[8]+2272392833&4294967295,q=C+(D<<11&4294967295|D>>>21),D=U+(q^C^I)+O[11]+1839030562&4294967295,U=q+(D<<16&4294967295|D>>>16),D=I+(U^q^C)+O[14]+4259657740&4294967295,I=U+(D<<23&4294967295|D>>>9),D=C+(I^U^q)+O[1]+2763975236&4294967295,C=I+(D<<4&4294967295|D>>>28),D=q+(C^I^U)+O[4]+1272893353&4294967295,q=C+(D<<11&4294967295|D>>>21),D=U+(q^C^I)+O[7]+4139469664&4294967295,U=q+(D<<16&4294967295|D>>>16),D=I+(U^q^C)+O[10]+3200236656&4294967295,I=U+(D<<23&4294967295|D>>>9),D=C+(I^U^q)+O[13]+681279174&4294967295,C=I+(D<<4&4294967295|D>>>28),D=q+(C^I^U)+O[0]+3936430074&4294967295,q=C+(D<<11&4294967295|D>>>21),D=U+(q^C^I)+O[3]+3572445317&4294967295,U=q+(D<<16&4294967295|D>>>16),D=I+(U^q^C)+O[6]+76029189&4294967295,I=U+(D<<23&4294967295|D>>>9),D=C+(I^U^q)+O[9]+3654602809&4294967295,C=I+(D<<4&4294967295|D>>>28),D=q+(C^I^U)+O[12]+3873151461&4294967295,q=C+(D<<11&4294967295|D>>>21),D=U+(q^C^I)+O[15]+530742520&4294967295,U=q+(D<<16&4294967295|D>>>16),D=I+(U^q^C)+O[2]+3299628645&4294967295,I=U+(D<<23&4294967295|D>>>9),D=C+(U^(I|~q))+O[0]+4096336452&4294967295,C=I+(D<<6&4294967295|D>>>26),D=q+(I^(C|~U))+O[7]+1126891415&4294967295,q=C+(D<<10&4294967295|D>>>22),D=U+(C^(q|~I))+O[14]+2878612391&4294967295,U=q+(D<<15&4294967295|D>>>17),D=I+(q^(U|~C))+O[5]+4237533241&4294967295,I=U+(D<<21&4294967295|D>>>11),D=C+(U^(I|~q))+O[12]+1700485571&4294967295,C=I+(D<<6&4294967295|D>>>26),D=q+(I^(C|~U))+O[3]+2399980690&4294967295,q=C+(D<<10&4294967295|D>>>22),D=U+(C^(q|~I))+O[10]+4293915773&4294967295,U=q+(D<<15&4294967295|D>>>17),D=I+(q^(U|~C))+O[1]+2240044497&4294967295,I=U+(D<<21&4294967295|D>>>11),D=C+(U^(I|~q))+O[8]+1873313359&4294967295,C=I+(D<<6&4294967295|D>>>26),D=q+(I^(C|~U))+O[15]+4264355552&4294967295,q=C+(D<<10&4294967295|D>>>22),D=U+(C^(q|~I))+O[6]+2734768916&4294967295,U=q+(D<<15&4294967295|D>>>17),D=I+(q^(U|~C))+O[13]+1309151649&4294967295,I=U+(D<<21&4294967295|D>>>11),D=C+(U^(I|~q))+O[4]+4149444226&4294967295,C=I+(D<<6&4294967295|D>>>26),D=q+(I^(C|~U))+O[11]+3174756917&4294967295,q=C+(D<<10&4294967295|D>>>22),D=U+(C^(q|~I))+O[2]+718787259&4294967295,U=q+(D<<15&4294967295|D>>>17),D=I+(q^(U|~C))+O[9]+3951481745&4294967295,M.g[0]=M.g[0]+C&4294967295,M.g[1]=M.g[1]+(U+(D<<21&4294967295|D>>>11))&4294967295,M.g[2]=M.g[2]+U&4294967295,M.g[3]=M.g[3]+q&4294967295}s.prototype.u=function(M,C){C===void 0&&(C=M.length);for(var I=C-this.blockSize,O=this.B,U=this.h,q=0;q<C;){if(U==0)for(;q<=I;)a(this,M,q),q+=this.blockSize;if(typeof M=="string"){for(;q<C;)if(O[U++]=M.charCodeAt(q++),U==this.blockSize){a(this,O),U=0;break}}else for(;q<C;)if(O[U++]=M[q++],U==this.blockSize){a(this,O),U=0;break}}this.h=U,this.o+=C},s.prototype.v=function(){var M=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);M[0]=128;for(var C=1;C<M.length-8;++C)M[C]=0;var I=8*this.o;for(C=M.length-8;C<M.length;++C)M[C]=I&255,I/=256;for(this.u(M),M=Array(16),C=I=0;4>C;++C)for(var O=0;32>O;O+=8)M[I++]=this.g[C]>>>O&255;return M};function l(M,C){var I=f;return Object.prototype.hasOwnProperty.call(I,M)?I[M]:I[M]=C(M)}function c(M,C){this.h=C;for(var I=[],O=!0,U=M.length-1;0<=U;U--){var q=M[U]|0;O&&q==C||(I[U]=q,O=!1)}this.g=I}var f={};function m(M){return-128<=M&&128>M?l(M,function(C){return new c([C|0],0>C?-1:0)}):new c([M|0],0>M?-1:0)}function g(M){if(isNaN(M)||!isFinite(M))return b;if(0>M)return B(g(-M));for(var C=[],I=1,O=0;M>=I;O++)C[O]=M/I|0,I*=4294967296;return new c(C,0)}function E(M,C){if(M.length==0)throw Error("number format error: empty string");if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(M.charAt(0)=="-")return B(E(M.substring(1),C));if(0<=M.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=g(Math.pow(C,8)),O=b,U=0;U<M.length;U+=8){var q=Math.min(8,M.length-U),D=parseInt(M.substring(U,U+q),C);8>q?(q=g(Math.pow(C,q)),O=O.j(q).add(g(D))):(O=O.j(I),O=O.add(g(D)))}return O}var b=m(0),S=m(1),P=m(16777216);n=c.prototype,n.m=function(){if(H(this))return-B(this).m();for(var M=0,C=1,I=0;I<this.g.length;I++){var O=this.i(I);M+=(0<=O?O:4294967296+O)*C,C*=4294967296}return M},n.toString=function(M){if(M=M||10,2>M||36<M)throw Error("radix out of range: "+M);if(V(this))return"0";if(H(this))return"-"+B(this).toString(M);for(var C=g(Math.pow(M,6)),I=this,O="";;){var U=me(I,C).g;I=re(I,U.j(C));var q=((0<I.g.length?I.g[0]:I.h)>>>0).toString(M);if(I=U,V(I))return q+O;for(;6>q.length;)q="0"+q;O=q+O}},n.i=function(M){return 0>M?0:M<this.g.length?this.g[M]:this.h};function V(M){if(M.h!=0)return!1;for(var C=0;C<M.g.length;C++)if(M.g[C]!=0)return!1;return!0}function H(M){return M.h==-1}n.l=function(M){return M=re(this,M),H(M)?-1:V(M)?0:1};function B(M){for(var C=M.g.length,I=[],O=0;O<C;O++)I[O]=~M.g[O];return new c(I,~M.h).add(S)}n.abs=function(){return H(this)?B(this):this},n.add=function(M){for(var C=Math.max(this.g.length,M.g.length),I=[],O=0,U=0;U<=C;U++){var q=O+(this.i(U)&65535)+(M.i(U)&65535),D=(q>>>16)+(this.i(U)>>>16)+(M.i(U)>>>16);O=D>>>16,q&=65535,D&=65535,I[U]=D<<16|q}return new c(I,I[I.length-1]&-2147483648?-1:0)};function re(M,C){return M.add(B(C))}n.j=function(M){if(V(this)||V(M))return b;if(H(this))return H(M)?B(this).j(B(M)):B(B(this).j(M));if(H(M))return B(this.j(B(M)));if(0>this.l(P)&&0>M.l(P))return g(this.m()*M.m());for(var C=this.g.length+M.g.length,I=[],O=0;O<2*C;O++)I[O]=0;for(O=0;O<this.g.length;O++)for(var U=0;U<M.g.length;U++){var q=this.i(O)>>>16,D=this.i(O)&65535,ct=M.i(U)>>>16,Ne=M.i(U)&65535;I[2*O+2*U]+=D*Ne,oe(I,2*O+2*U),I[2*O+2*U+1]+=q*Ne,oe(I,2*O+2*U+1),I[2*O+2*U+1]+=D*ct,oe(I,2*O+2*U+1),I[2*O+2*U+2]+=q*ct,oe(I,2*O+2*U+2)}for(O=0;O<C;O++)I[O]=I[2*O+1]<<16|I[2*O];for(O=C;O<2*C;O++)I[O]=0;return new c(I,0)};function oe(M,C){for(;(M[C]&65535)!=M[C];)M[C+1]+=M[C]>>>16,M[C]&=65535,C++}function le(M,C){this.g=M,this.h=C}function me(M,C){if(V(C))throw Error("division by zero");if(V(M))return new le(b,b);if(H(M))return C=me(B(M),C),new le(B(C.g),B(C.h));if(H(C))return C=me(M,B(C)),new le(B(C.g),C.h);if(30<M.g.length){if(H(M)||H(C))throw Error("slowDivide_ only works with positive integers.");for(var I=S,O=C;0>=O.l(M);)I=Me(I),O=Me(O);var U=Ee(I,1),q=Ee(O,1);for(O=Ee(O,2),I=Ee(I,2);!V(O);){var D=q.add(O);0>=D.l(M)&&(U=U.add(I),q=D),O=Ee(O,1),I=Ee(I,1)}return C=re(M,U.j(C)),new le(U,C)}for(U=b;0<=M.l(C);){for(I=Math.max(1,Math.floor(M.m()/C.m())),O=Math.ceil(Math.log(I)/Math.LN2),O=48>=O?1:Math.pow(2,O-48),q=g(I),D=q.j(C);H(D)||0<D.l(M);)I-=O,q=g(I),D=q.j(C);V(q)&&(q=S),U=U.add(q),M=re(M,D)}return new le(U,M)}n.A=function(M){return me(this,M).h},n.and=function(M){for(var C=Math.max(this.g.length,M.g.length),I=[],O=0;O<C;O++)I[O]=this.i(O)&M.i(O);return new c(I,this.h&M.h)},n.or=function(M){for(var C=Math.max(this.g.length,M.g.length),I=[],O=0;O<C;O++)I[O]=this.i(O)|M.i(O);return new c(I,this.h|M.h)},n.xor=function(M){for(var C=Math.max(this.g.length,M.g.length),I=[],O=0;O<C;O++)I[O]=this.i(O)^M.i(O);return new c(I,this.h^M.h)};function Me(M){for(var C=M.g.length+1,I=[],O=0;O<C;O++)I[O]=M.i(O)<<1|M.i(O-1)>>>31;return new c(I,M.h)}function Ee(M,C){var I=C>>5;C%=32;for(var O=M.g.length-I,U=[],q=0;q<O;q++)U[q]=0<C?M.i(q+I)>>>C|M.i(q+I+1)<<32-C:M.i(q+I);return new c(U,M.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Uw=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=E,ra=c}).apply(typeof WE<"u"?WE:typeof self<"u"?self:typeof window<"u"?window:{});var _d=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Bw,ec,zw,Ad,Bg,jw,qw,Fw;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,v){return h==Array.prototype||h==Object.prototype||(h[_]=v.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof _d=="object"&&_d];for(var _=0;_<h.length;++_){var v=h[_];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=t(this);function a(h,_){if(_)e:{var v=s;h=h.split(".");for(var A=0;A<h.length-1;A++){var G=h[A];if(!(G in v))break e;v=v[G]}h=h[h.length-1],A=v[h],_=_(A),_!=A&&_!=null&&e(v,h,{configurable:!0,writable:!0,value:_})}}function l(h,_){h instanceof String&&(h+="");var v=0,A=!1,G={next:function(){if(!A&&v<h.length){var $=v++;return{value:_($,h[$]),done:!1}}return A=!0,{done:!0,value:void 0}}};return G[Symbol.iterator]=function(){return G},G}a("Array.prototype.values",function(h){return h||function(){return l(this,function(_,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},f=this||self;function m(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function g(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function E(h,_,v){return h.call.apply(h.bind,arguments)}function b(h,_,v){if(!h)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var G=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(G,A),h.apply(_,G)}}return function(){return h.apply(_,arguments)}}function S(h,_,v){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:b,S.apply(null,arguments)}function P(h,_){var v=Array.prototype.slice.call(arguments,1);return function(){var A=v.slice();return A.push.apply(A,arguments),h.apply(this,A)}}function V(h,_){function v(){}v.prototype=_.prototype,h.aa=_.prototype,h.prototype=new v,h.prototype.constructor=h,h.Qb=function(A,G,$){for(var ce=Array(arguments.length-2),at=2;at<arguments.length;at++)ce[at-2]=arguments[at];return _.prototype[G].apply(A,ce)}}function H(h){const _=h.length;if(0<_){const v=Array(_);for(let A=0;A<_;A++)v[A]=h[A];return v}return[]}function B(h,_){for(let v=1;v<arguments.length;v++){const A=arguments[v];if(m(A)){const G=h.length||0,$=A.length||0;h.length=G+$;for(let ce=0;ce<$;ce++)h[G+ce]=A[ce]}else h.push(A)}}class re{constructor(_,v){this.i=_,this.j=v,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function oe(h){return/^[\s\xa0]*$/.test(h)}function le(){var h=f.navigator;return h&&(h=h.userAgent)?h:""}function me(h){return me[" "](h),h}me[" "]=function(){};var Me=le().indexOf("Gecko")!=-1&&!(le().toLowerCase().indexOf("webkit")!=-1&&le().indexOf("Edge")==-1)&&!(le().indexOf("Trident")!=-1||le().indexOf("MSIE")!=-1)&&le().indexOf("Edge")==-1;function Ee(h,_,v){for(const A in h)_.call(v,h[A],A,h)}function M(h,_){for(const v in h)_.call(void 0,h[v],v,h)}function C(h){const _={};for(const v in h)_[v]=h[v];return _}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function O(h,_){let v,A;for(let G=1;G<arguments.length;G++){A=arguments[G];for(v in A)h[v]=A[v];for(let $=0;$<I.length;$++)v=I[$],Object.prototype.hasOwnProperty.call(A,v)&&(h[v]=A[v])}}function U(h){var _=1;h=h.split(":");const v=[];for(;0<_&&h.length;)v.push(h.shift()),_--;return h.length&&v.push(h.join(":")),v}function q(h){f.setTimeout(()=>{throw h},0)}function D(){var h=Ue;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class ct{constructor(){this.h=this.g=null}add(_,v){const A=Ne.get();A.set(_,v),this.h?this.h.next=A:this.g=A,this.h=A}}var Ne=new re(()=>new Z,h=>h.reset());class Z{constructor(){this.next=this.g=this.h=null}set(_,v){this.h=_,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let ue,ve=!1,Ue=new ct,N=()=>{const h=f.Promise.resolve(void 0);ue=()=>{h.then(T)}};var T=()=>{for(var h;h=D();){try{h.h.call(h.g)}catch(v){q(v)}var _=Ne;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}ve=!1};function x(){this.s=this.s,this.C=this.C}x.prototype.s=!1,x.prototype.ma=function(){this.s||(this.s=!0,this.N())},x.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function j(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}j.prototype.h=function(){this.defaultPrevented=!0};var z=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const v=()=>{};f.addEventListener("test",v,_),f.removeEventListener("test",v,_)}catch{}return h})();function X(h,_){if(j.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var v=this.type=h.type,A=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(Me){e:{try{me(_.nodeName);var G=!0;break e}catch{}G=!1}G||(_=null)}}else v=="mouseover"?_=h.fromElement:v=="mouseout"&&(_=h.toElement);this.relatedTarget=_,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:se[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&X.aa.h.call(this)}}V(X,j);var se={2:"touch",3:"pen",4:"mouse"};X.prototype.h=function(){X.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var ae="closure_listenable_"+(1e6*Math.random()|0),_e=0;function we(h,_,v,A,G){this.listener=h,this.proxy=null,this.src=_,this.type=v,this.capture=!!A,this.ha=G,this.key=++_e,this.da=this.fa=!1}function Xe(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function Ke(h){this.src=h,this.g={},this.h=0}Ke.prototype.add=function(h,_,v,A,G){var $=h.toString();h=this.g[$],h||(h=this.g[$]=[],this.h++);var ce=St(h,_,A,G);return-1<ce?(_=h[ce],v||(_.fa=!1)):(_=new we(_,this.src,$,!!A,G),_.fa=v,h.push(_)),_};function rt(h,_){var v=_.type;if(v in h.g){var A=h.g[v],G=Array.prototype.indexOf.call(A,_,void 0),$;($=0<=G)&&Array.prototype.splice.call(A,G,1),$&&(Xe(_),h.g[v].length==0&&(delete h.g[v],h.h--))}}function St(h,_,v,A){for(var G=0;G<h.length;++G){var $=h[G];if(!$.da&&$.listener==_&&$.capture==!!v&&$.ha==A)return G}return-1}var Pe="closure_lm_"+(1e6*Math.random()|0),Ct={};function Zt(h,_,v,A,G){if(Array.isArray(_)){for(var $=0;$<_.length;$++)Zt(h,_[$],v,A,G);return null}return v=bo(v),h&&h[ae]?h.K(_,v,g(A)?!!A.capture:!1,G):Pn(h,_,v,!1,A,G)}function Pn(h,_,v,A,G,$){if(!_)throw Error("Invalid event type");var ce=g(G)?!!G.capture:!!G,at=Ta(h);if(at||(h[Pe]=at=new Ke(h)),v=at.add(_,v,A,ce,$),v.proxy)return v;if(A=zn(),v.proxy=A,A.src=h,A.listener=v,h.addEventListener)z||(G=ce),G===void 0&&(G=!1),h.addEventListener(_.toString(),A,G);else if(h.attachEvent)h.attachEvent(ar(_.toString()),A);else if(h.addListener&&h.removeListener)h.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return v}function zn(){function h(v){return _.call(h.src,h.listener,v)}const _=Kl;return h}function jn(h,_,v,A,G){if(Array.isArray(_))for(var $=0;$<_.length;$++)jn(h,_[$],v,A,G);else A=g(A)?!!A.capture:!!A,v=bo(v),h&&h[ae]?(h=h.i,_=String(_).toString(),_ in h.g&&($=h.g[_],v=St($,v,A,G),-1<v&&(Xe($[v]),Array.prototype.splice.call($,v,1),$.length==0&&(delete h.g[_],h.h--)))):h&&(h=Ta(h))&&(_=h.g[_.toString()],h=-1,_&&(h=St(_,v,A,G)),(v=-1<h?_[h]:null)&&Jt(v))}function Jt(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[ae])rt(_.i,h);else{var v=h.type,A=h.proxy;_.removeEventListener?_.removeEventListener(v,A,h.capture):_.detachEvent?_.detachEvent(ar(v),A):_.addListener&&_.removeListener&&_.removeListener(A),(v=Ta(_))?(rt(v,h),v.h==0&&(v.src=null,_[Pe]=null)):Xe(h)}}}function ar(h){return h in Ct?Ct[h]:Ct[h]="on"+h}function Kl(h,_){if(h.da)h=!0;else{_=new X(_,this);var v=h.listener,A=h.ha||h.src;h.fa&&Jt(h),h=v.call(A,_)}return h}function Ta(h){return h=h[Pe],h instanceof Ke?h:null}var Ut="__closure_events_fn_"+(1e9*Math.random()>>>0);function bo(h){return typeof h=="function"?h:(h[Ut]||(h[Ut]=function(_){return h.handleEvent(_)}),h[Ut])}function Rt(){x.call(this),this.i=new Ke(this),this.M=this,this.F=null}V(Rt,x),Rt.prototype[ae]=!0,Rt.prototype.removeEventListener=function(h,_,v,A){jn(this,h,_,v,A)};function Bt(h,_){var v,A=h.F;if(A)for(v=[];A;A=A.F)v.push(A);if(h=h.M,A=_.type||_,typeof _=="string")_=new j(_,h);else if(_ instanceof j)_.target=_.target||h;else{var G=_;_=new j(A,h),O(_,G)}if(G=!0,v)for(var $=v.length-1;0<=$;$--){var ce=_.g=v[$];G=Pi(ce,A,!0,_)&&G}if(ce=_.g=h,G=Pi(ce,A,!0,_)&&G,G=Pi(ce,A,!1,_)&&G,v)for($=0;$<v.length;$++)ce=_.g=v[$],G=Pi(ce,A,!1,_)&&G}Rt.prototype.N=function(){if(Rt.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var v=h.g[_],A=0;A<v.length;A++)Xe(v[A]);delete h.g[_],h.h--}}this.F=null},Rt.prototype.K=function(h,_,v,A){return this.i.add(String(h),_,!1,v,A)},Rt.prototype.L=function(h,_,v,A){return this.i.add(String(h),_,!0,v,A)};function Pi(h,_,v,A){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var G=!0,$=0;$<_.length;++$){var ce=_[$];if(ce&&!ce.da&&ce.capture==v){var at=ce.listener,zt=ce.ha||ce.src;ce.fa&&rt(h.i,ce),G=at.call(zt,A)!==!1&&G}}return G&&!A.defaultPrevented}function ba(h,_,v){if(typeof h=="function")v&&(h=S(h,v));else if(h&&typeof h.handleEvent=="function")h=S(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:f.setTimeout(h,_||0)}function or(h){h.g=ba(()=>{h.g=null,h.i&&(h.i=!1,or(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class wa extends x{constructor(_,v){super(),this.m=_,this.l=v,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:or(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _s(h){x.call(this),this.h=h,this.g={}}V(_s,x);var Qi=[];function yn(h){Ee(h.g,function(_,v){this.g.hasOwnProperty(v)&&Jt(_)},h),h.g={}}_s.prototype.N=function(){_s.aa.N.call(this),yn(this)},_s.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var fi=f.JSON.stringify,xn=f.JSON.parse,Zf=class{stringify(h){return f.JSON.stringify(h,void 0)}parse(h){return f.JSON.parse(h,void 0)}};function Ql(){}Ql.prototype.h=null;function Kc(h){return h.h||(h.h=h.i())}function Sa(){}var Wi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function lr(){j.call(this,"d")}V(lr,j);function xi(){j.call(this,"c")}V(xi,j);var pi={},ur=null;function wo(){return ur=ur||new Rt}pi.La="serverreachability";function Wl(h){j.call(this,pi.La,h)}V(Wl,j);function ys(h){const _=wo();Bt(_,new Wl(_))}pi.STAT_EVENT="statevent";function cr(h,_){j.call(this,pi.STAT_EVENT,h),this.stat=_}V(cr,j);function ln(h){const _=wo();Bt(_,new cr(_,h))}pi.Ma="timingevent";function Yl(h,_){j.call(this,pi.Ma,h),this.size=_}V(Yl,j);function hr(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){h()},_)}function dr(){this.g=!0}dr.prototype.xa=function(){this.g=!1};function $l(h,_,v,A,G,$){h.info(function(){if(h.g)if($)for(var ce="",at=$.split("&"),zt=0;zt<at.length;zt++){var Le=at[zt].split("=");if(1<Le.length){var tn=Le[0];Le=Le[1];var nn=tn.split("_");ce=2<=nn.length&&nn[1]=="type"?ce+(tn+"="+Le+"&"):ce+(tn+"=redacted&")}}else ce=null;else ce=$;return"XMLHTTP REQ ("+A+") [attempt "+G+"]: "+_+`
`+v+`
`+ce})}function Xl(h,_,v,A,G,$,ce){h.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+G+"]: "+_+`
`+v+`
`+$+" "+ce})}function vs(h,_,v,A){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+Yi(h,v)+(A?" "+A:"")})}function Qc(h,_){h.info(function(){return"TIMEOUT: "+_})}dr.prototype.info=function(){};function Yi(h,_){if(!h.g)return _;if(!_)return null;try{var v=JSON.parse(_);if(v){for(h=0;h<v.length;h++)if(Array.isArray(v[h])){var A=v[h];if(!(2>A.length)){var G=A[1];if(Array.isArray(G)&&!(1>G.length)){var $=G[0];if($!="noop"&&$!="stop"&&$!="close")for(var ce=1;ce<G.length;ce++)G[ce]=""}}}}return fi(v)}catch{return _}}var It={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},un={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},$i;function fr(){}V(fr,Ql),fr.prototype.g=function(){return new XMLHttpRequest},fr.prototype.i=function(){return{}},$i=new fr;function Xi(h,_,v,A){this.j=h,this.i=_,this.l=v,this.R=A||1,this.U=new _s(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Wc}function Wc(){this.i=null,this.g="",this.h=!1}var Zl={},Es={};function Aa(h,_,v){h.L=1,h.v=Ia(Nt(_)),h.m=v,h.P=!0,Ts(h,null)}function Ts(h,_){h.F=Date.now(),Di(h),h.A=Nt(h.v);var v=h.A,A=h.R;Array.isArray(A)||(A=[String(A)]),Ss(v.i,"t",A),h.C=0,v=h.j.J,h.h=new Wc,h.g=ch(h.j,v?_:null,!h.m),0<h.O&&(h.M=new wa(S(h.Y,h,h.g),h.O)),_=h.U,v=h.g,A=h.ca;var G="readystatechange";Array.isArray(G)||(G&&(Qi[0]=G.toString()),G=Qi);for(var $=0;$<G.length;$++){var ce=Zt(v,G[$],A||_.handleEvent,!1,_.h||_);if(!ce)break;_.g[ce.key]=ce}_=h.H?C(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),ys(),$l(h.i,h.u,h.A,h.l,h.R,h.m)}Xi.prototype.ca=function(h){h=h.target;const _=this.M;_&&Mn(h)==3?_.j():this.Y(h)},Xi.prototype.Y=function(h){try{if(h==this.g)e:{const nn=Mn(this.g);var _=this.g.Ba();const Cr=this.g.Z();if(!(3>nn)&&(nn!=3||this.g&&(this.h.h||this.g.oa()||xa(this.g)))){this.J||nn!=4||_==7||(_==8||0>=Cr?ys(3):ys(2)),So(this);var v=this.g.Z();this.X=v;t:if(bs(this)){var A=xa(this.g);h="";var G=A.length,$=Mn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Dn(this),pr(this);var ce="";break t}this.h.i=new f.TextDecoder}for(_=0;_<G;_++)this.h.h=!0,h+=this.h.i.decode(A[_],{stream:!($&&_==G-1)});A.length=0,this.h.g+=h,this.C=0,ce=this.h.g}else ce=this.g.oa();if(this.o=v==200,Xl(this.i,this.u,this.A,this.l,this.R,nn,v),this.o){if(this.T&&!this.K){t:{if(this.g){var at,zt=this.g;if((at=zt.g?zt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!oe(at)){var Le=at;break t}}Le=null}if(v=Le)vs(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Zi(this,v);else{this.o=!1,this.s=3,ln(12),Dn(this),pr(this);break e}}if(this.P){v=!0;let Fn;for(;!this.J&&this.C<ce.length;)if(Fn=Ca(this,ce),Fn==Es){nn==4&&(this.s=4,ln(14),v=!1),vs(this.i,this.l,null,"[Incomplete Response]");break}else if(Fn==Zl){this.s=4,ln(15),vs(this.i,this.l,ce,"[Invalid Chunk]"),v=!1;break}else vs(this.i,this.l,Fn,null),Zi(this,Fn);if(bs(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),nn!=4||ce.length!=0||this.h.h||(this.s=1,ln(16),v=!1),this.o=this.o&&v,!v)vs(this.i,this.l,ce,"[Invalid Chunked Response]"),Dn(this),pr(this);else if(0<ce.length&&!this.W){this.W=!0;var tn=this.j;tn.g==this&&tn.ba&&!tn.M&&(tn.j.info("Great, no buffering proxy detected. Bytes received: "+ce.length),uu(tn),tn.M=!0,ln(11))}}else vs(this.i,this.l,ce,null),Zi(this,ce);nn==4&&Dn(this),this.o&&!this.J&&(nn==4?oh(this.j,this):(this.o=!1,Di(this)))}else th(this.g),v==400&&0<ce.indexOf("Unknown SID")?(this.s=3,ln(12)):(this.s=0,ln(13)),Dn(this),pr(this)}}}catch{}finally{}};function bs(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function Ca(h,_){var v=h.C,A=_.indexOf(`
`,v);return A==-1?Es:(v=Number(_.substring(v,A)),isNaN(v)?Zl:(A+=1,A+v>_.length?Es:(_=_.slice(A,A+v),h.C=A+v,_)))}Xi.prototype.cancel=function(){this.J=!0,Dn(this)};function Di(h){h.S=Date.now()+h.I,kt(h,h.I)}function kt(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=hr(S(h.ba,h),_)}function So(h){h.B&&(f.clearTimeout(h.B),h.B=null)}Xi.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Qc(this.i,this.A),this.L!=2&&(ys(),ln(17)),Dn(this),this.s=2,pr(this)):kt(this,this.S-h)};function pr(h){h.j.G==0||h.J||oh(h.j,h)}function Dn(h){So(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,yn(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function Zi(h,_){try{var v=h.j;if(v.G!=0&&(v.g==h||mr(v.h,h))){if(!h.K&&mr(v.h,h)&&v.G==3){try{var A=v.Da.g.parse(_)}catch{A=null}if(Array.isArray(A)&&A.length==3){var G=A;if(G[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<h.F)Sr(v),wr(v);else break e;lu(v),ln(18)}}else v.za=G[1],0<v.za-v.T&&37500>G[2]&&v.F&&v.v==0&&!v.C&&(v.C=hr(S(v.Za,v),6e3));if(1>=Yc(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Cs(v,11)}else if((h.K||v.g==h)&&Sr(v),!oe(_))for(G=v.Da.g.parse(_),_=0;_<G.length;_++){let Le=G[_];if(v.T=Le[0],Le=Le[1],v.G==2)if(Le[0]=="c"){v.K=Le[1],v.ia=Le[2];const tn=Le[3];tn!=null&&(v.la=tn,v.j.info("VER="+v.la));const nn=Le[4];nn!=null&&(v.Aa=nn,v.j.info("SVER="+v.Aa));const Cr=Le[5];Cr!=null&&typeof Cr=="number"&&0<Cr&&(A=1.5*Cr,v.L=A,v.j.info("backChannelRequestTimeoutMs_="+A)),A=v;const Fn=h.g;if(Fn){const Ma=Fn.g?Fn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ma){var $=A.h;$.g||Ma.indexOf("spdy")==-1&&Ma.indexOf("quic")==-1&&Ma.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&(gr($,$.h),$.h=null))}if(A.D){const Rs=Fn.g?Fn.g.getResponseHeader("X-HTTP-Session-Id"):null;Rs&&(A.ya=Rs,Ze(A.I,A.D,Rs))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-h.F,v.j.info("Handshake RTT: "+v.R+"ms")),A=v;var ce=h;if(A.qa=uh(A,A.J?A.ia:null,A.W),ce.K){mi(A.h,ce);var at=ce,zt=A.L;zt&&(at.I=zt),at.B&&(So(at),Di(at)),A.g=ce}else rh(A);0<v.i.length&&Do(v)}else Le[0]!="stop"&&Le[0]!="close"||Cs(v,7);else v.G==3&&(Le[0]=="stop"||Le[0]=="close"?Le[0]=="stop"?Cs(v,7):au(v):Le[0]!="noop"&&v.l&&v.l.ta(Le),v.v=0)}}ys(4)}catch{}}var Jf=class{constructor(h,_){this.g=h,this.map=_}};function Jl(h){this.l=h||10,f.PerformanceNavigationTiming?(h=f.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function eu(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function Yc(h){return h.h?1:h.g?h.g.size:0}function mr(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function gr(h,_){h.g?h.g.add(_):h.h=_}function mi(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}Jl.prototype.cancel=function(){if(this.i=kn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function kn(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const v of h.g.values())_=_.concat(v.D);return _}return H(h.i)}function $c(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(m(h)){for(var _=[],v=h.length,A=0;A<v;A++)_.push(h[A]);return _}_=[],v=0;for(A in h)_[v++]=h[A];return _}function ep(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(m(h)||typeof h=="string"){var _=[];h=h.length;for(var v=0;v<h;v++)_.push(v);return _}_=[],v=0;for(const A in h)_[v++]=A;return _}}}function Ao(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(m(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var v=ep(h),A=$c(h),G=A.length,$=0;$<G;$++)_.call(void 0,A[$],v&&v[$],h)}var tu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Co(h,_){if(h){h=h.split("&");for(var v=0;v<h.length;v++){var A=h[v].indexOf("="),G=null;if(0<=A){var $=h[v].substring(0,A);G=h[v].substring(A+1)}else $=h[v];_($,G?decodeURIComponent(G.replace(/\+/g," ")):"")}}}function ws(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof ws){this.h=h.h,_r(this,h.j),this.o=h.o,this.g=h.g,Ra(this,h.s),this.l=h.l;var _=h.i,v=new Ji;v.i=_.i,_.g&&(v.g=new Map(_.g),v.h=_.h),Ro(this,v),this.m=h.m}else h&&(_=String(h).match(tu))?(this.h=!1,_r(this,_[1]||"",!0),this.o=yr(_[2]||""),this.g=yr(_[3]||"",!0),Ra(this,_[4]),this.l=yr(_[5]||"",!0),Ro(this,_[6]||"",!0),this.m=yr(_[7]||"")):(this.h=!1,this.i=new Ji(null,this.h))}ws.prototype.toString=function(){var h=[],_=this.j;_&&h.push(gi(_,nu,!0),":");var v=this.g;return(v||_=="file")&&(h.push("//"),(_=this.o)&&h.push(gi(_,nu,!0),"@"),h.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&h.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&h.push("/"),h.push(gi(v,v.charAt(0)=="/"?iu:Xc,!0))),(v=this.i.toString())&&h.push("?",v),(v=this.m)&&h.push("#",gi(v,ip)),h.join("")};function Nt(h){return new ws(h)}function _r(h,_,v){h.j=v?yr(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function Ra(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function Ro(h,_,v){_ instanceof Ji?(h.i=_,Zc(h.i,h.h)):(v||(_=gi(_,np)),h.i=new Ji(_,h.h))}function Ze(h,_,v){h.i.set(_,v)}function Ia(h){return Ze(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function yr(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function gi(h,_,v){return typeof h=="string"?(h=encodeURI(h).replace(_,tp),v&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function tp(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var nu=/[#\/\?@]/g,Xc=/[#\?:]/g,iu=/[#\?]/g,np=/[#\?@]/g,ip=/#/g;function Ji(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function en(h){h.g||(h.g=new Map,h.h=0,h.i&&Co(h.i,function(_,v){h.add(decodeURIComponent(_.replace(/\+/g," ")),v)}))}n=Ji.prototype,n.add=function(h,_){en(this),this.i=null,h=ni(this,h);var v=this.g.get(h);return v||this.g.set(h,v=[]),v.push(_),this.h+=1,this};function Io(h,_){en(h),_=ni(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function No(h,_){return en(h),_=ni(h,_),h.g.has(_)}n.forEach=function(h,_){en(this),this.g.forEach(function(v,A){v.forEach(function(G){h.call(_,G,A,this)},this)},this)},n.na=function(){en(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),v=[];for(let A=0;A<_.length;A++){const G=h[A];for(let $=0;$<G.length;$++)v.push(_[A])}return v},n.V=function(h){en(this);let _=[];if(typeof h=="string")No(this,h)&&(_=_.concat(this.g.get(ni(this,h))));else{h=Array.from(this.g.values());for(let v=0;v<h.length;v++)_=_.concat(h[v])}return _},n.set=function(h,_){return en(this),this.i=null,h=ni(this,h),No(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},n.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function Ss(h,_,v){Io(h,_),0<v.length&&(h.i=null,h.g.set(ni(h,_),H(v)),h.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var v=0;v<_.length;v++){var A=_[v];const $=encodeURIComponent(String(A)),ce=this.V(A);for(A=0;A<ce.length;A++){var G=$;ce[A]!==""&&(G+="="+encodeURIComponent(String(ce[A]))),h.push(G)}}return this.i=h.join("&")};function ni(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function Zc(h,_){_&&!h.j&&(en(h),h.i=null,h.g.forEach(function(v,A){var G=A.toLowerCase();A!=G&&(Io(this,A),Ss(this,G,v))},h)),h.j=_}function su(h,_){const v=new dr;if(f.Image){const A=new Image;A.onload=P(qn,v,"TestLoadImage: loaded",!0,_,A),A.onerror=P(qn,v,"TestLoadImage: error",!1,_,A),A.onabort=P(qn,v,"TestLoadImage: abort",!1,_,A),A.ontimeout=P(qn,v,"TestLoadImage: timeout",!1,_,A),f.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=h}else _(!1)}function Jc(h,_){const v=new dr,A=new AbortController,G=setTimeout(()=>{A.abort(),qn(v,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:A.signal}).then($=>{clearTimeout(G),$.ok?qn(v,"TestPingServer: ok",!0,_):qn(v,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(G),qn(v,"TestPingServer: error",!1,_)})}function qn(h,_,v,A,G){try{G&&(G.onload=null,G.onerror=null,G.onabort=null,G.ontimeout=null),A(v)}catch{}}function ki(){this.g=new Zf}function ru(h,_,v){const A=v||"";try{Ao(h,function(G,$){let ce=G;g(G)&&(ce=fi(G)),_.push(A+$+"="+encodeURIComponent(ce))})}catch(G){throw _.push(A+"type="+encodeURIComponent("_badmap")),G}}function es(h){this.l=h.Ub||null,this.j=h.eb||!1}V(es,Ql),es.prototype.g=function(){return new ii(this.l,this.j)},es.prototype.i=(function(h){return function(){return h}})({});function ii(h,_){Rt.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(ii,Rt),n=ii.prototype,n.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,vr(this)},n.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||f).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ts(this)),this.readyState=0},n.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,vr(this)),this.g&&(this.readyState=3,vr(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Po(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function Po(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}n.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?ts(this):vr(this),this.readyState==3&&Po(this)}},n.Ra=function(h){this.g&&(this.response=this.responseText=h,ts(this))},n.Qa=function(h){this.g&&(this.response=h,ts(this))},n.ga=function(){this.g&&ts(this)};function ts(h){h.readyState=4,h.l=null,h.j=null,h.v=null,vr(h)}n.setRequestHeader=function(h,_){this.u.append(h,_)},n.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var v=_.next();!v.done;)v=v.value,h.push(v[0]+": "+v[1]),v=_.next();return h.join(`\r
`)};function vr(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(ii.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function Na(h){let _="";return Ee(h,function(v,A){_+=A,_+=":",_+=v,_+=`\r
`}),_}function Er(h,_,v){e:{for(A in v){var A=!1;break e}A=!0}A||(v=Na(v),typeof h=="string"?v!=null&&encodeURIComponent(String(v)):Ze(h,_,v))}function yt(h){Rt.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(yt,Rt);var vn=/^https?$/i,As=["POST","PUT"];n=yt.prototype,n.Ha=function(h){this.J=h},n.ea=function(h,_,v,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():$i.g(),this.v=this.o?Kc(this.o):Kc($i),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch($){Pa(this,$);return}if(h=v||"",v=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var G in A)v.set(G,A[G]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const $ of A.keys())v.set($,A.get($));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(v.keys()).find($=>$.toLowerCase()=="content-type"),G=f.FormData&&h instanceof f.FormData,!(0<=Array.prototype.indexOf.call(As,_,void 0))||A||G||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[$,ce]of v)this.g.setRequestHeader($,ce);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{xo(this),this.u=!0,this.g.send(h),this.u=!1}catch($){Pa(this,$)}};function Pa(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,Tr(h),br(h)}function Tr(h){h.A||(h.A=!0,Bt(h,"complete"),Bt(h,"error"))}n.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,Bt(this,"complete"),Bt(this,"abort"),br(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),br(this,!0)),yt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?eh(this):this.bb())},n.bb=function(){eh(this)};function eh(h){if(h.h&&typeof c<"u"&&(!h.v[1]||Mn(h)!=4||h.Z()!=2)){if(h.u&&Mn(h)==4)ba(h.Ea,0,h);else if(Bt(h,"readystatechange"),Mn(h)==4){h.h=!1;try{const ce=h.Z();e:switch(ce){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var v;if(!(v=_)){var A;if(A=ce===0){var G=String(h.D).match(tu)[1]||null;!G&&f.self&&f.self.location&&(G=f.self.location.protocol.slice(0,-1)),A=!vn.test(G?G.toLowerCase():"")}v=A}if(v)Bt(h,"complete"),Bt(h,"success");else{h.m=6;try{var $=2<Mn(h)?h.g.statusText:""}catch{$=""}h.l=$+" ["+h.Z()+"]",Tr(h)}}finally{br(h)}}}}function br(h,_){if(h.g){xo(h);const v=h.g,A=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||Bt(h,"ready");try{v.onreadystatechange=A}catch{}}}function xo(h){h.I&&(f.clearTimeout(h.I),h.I=null)}n.isActive=function(){return!!this.g};function Mn(h){return h.g?h.g.readyState:0}n.Z=function(){try{return 2<Mn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),xn(_)}};function xa(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function th(h){const _={};h=(h.g&&2<=Mn(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<h.length;A++){if(oe(h[A]))continue;var v=U(h[A]);const G=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const $=_[G]||[];_[G]=$,$.push(v)}M(_,function(A){return A.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Da(h,_,v){return v&&v.internalChannelParams&&v.internalChannelParams[h]||_}function nh(h){this.Aa=0,this.i=[],this.j=new dr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Da("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Da("baseRetryDelayMs",5e3,h),this.cb=Da("retryDelaySeedMs",1e4,h),this.Wa=Da("forwardChannelMaxRetries",2,h),this.wa=Da("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new Jl(h&&h.concurrentRequestLimit),this.Da=new ki,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=nh.prototype,n.la=8,n.G=1,n.connect=function(h,_,v,A){ln(0),this.W=h,this.H=_||{},v&&A!==void 0&&(this.H.OSID=v,this.H.OAID=A),this.F=this.X,this.I=uh(this,null,this.W),Do(this)};function au(h){if(ih(h),h.G==3){var _=h.U++,v=Nt(h.I);if(Ze(v,"SID",h.K),Ze(v,"RID",_),Ze(v,"TYPE","terminate"),ka(h,v),_=new Xi(h,h.j,_),_.L=2,_.v=Ia(Nt(v)),v=!1,f.navigator&&f.navigator.sendBeacon)try{v=f.navigator.sendBeacon(_.v.toString(),"")}catch{}!v&&f.Image&&(new Image().src=_.v,v=!0),v||(_.g=ch(_.j,null),_.g.ea(_.v)),_.F=Date.now(),Di(_)}cu(h)}function wr(h){h.g&&(uu(h),h.g.cancel(),h.g=null)}function ih(h){wr(h),h.u&&(f.clearTimeout(h.u),h.u=null),Sr(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&f.clearTimeout(h.s),h.s=null)}function Do(h){if(!eu(h.h)&&!h.s){h.s=!0;var _=h.Ga;ue||N(),ve||(ue(),ve=!0),Ue.add(_,h),h.B=0}}function sp(h,_){return Yc(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=hr(S(h.Ga,h,_),lh(h,h.B)),h.B++,!0)}n.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const G=new Xi(this,this.j,h);let $=this.o;if(this.S&&($?($=C($),O($,this.S)):$=this.S),this.m!==null||this.O||(G.H=$,$=null),this.P)e:{for(var _=0,v=0;v<this.i.length;v++){t:{var A=this.i[v];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(_+=A,4096<_){_=v;break e}if(_===4096||v===this.i.length-1){_=v+1;break e}}_=1e3}else _=1e3;_=ou(this,G,_),v=Nt(this.I),Ze(v,"RID",h),Ze(v,"CVER",22),this.D&&Ze(v,"X-HTTP-Session-Id",this.D),ka(this,v),$&&(this.O?_="headers="+encodeURIComponent(String(Na($)))+"&"+_:this.m&&Er(v,this.m,$)),gr(this.h,G),this.Ua&&Ze(v,"TYPE","init"),this.P?(Ze(v,"$req",_),Ze(v,"SID","null"),G.T=!0,Aa(G,v,null)):Aa(G,v,_),this.G=2}}else this.G==3&&(h?sh(this,h):this.i.length==0||eu(this.h)||sh(this))};function sh(h,_){var v;_?v=_.l:v=h.U++;const A=Nt(h.I);Ze(A,"SID",h.K),Ze(A,"RID",v),Ze(A,"AID",h.T),ka(h,A),h.m&&h.o&&Er(A,h.m,h.o),v=new Xi(h,h.j,v,h.B+1),h.m===null&&(v.H=h.o),_&&(h.i=_.D.concat(h.i)),_=ou(h,v,1e3),v.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),gr(h.h,v),Aa(v,A,_)}function ka(h,_){h.H&&Ee(h.H,function(v,A){Ze(_,A,v)}),h.l&&Ao({},function(v,A){Ze(_,A,v)})}function ou(h,_,v){v=Math.min(h.i.length,v);var A=h.l?S(h.l.Na,h.l,h):null;e:{var G=h.i;let $=-1;for(;;){const ce=["count="+v];$==-1?0<v?($=G[0].g,ce.push("ofs="+$)):$=0:ce.push("ofs="+$);let at=!0;for(let zt=0;zt<v;zt++){let Le=G[zt].g;const tn=G[zt].map;if(Le-=$,0>Le)$=Math.max(0,G[zt].g-100),at=!1;else try{ru(tn,ce,"req"+Le+"_")}catch{A&&A(tn)}}if(at){A=ce.join("&");break e}}}return h=h.i.splice(0,v),_.D=h,A}function rh(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;ue||N(),ve||(ue(),ve=!0),Ue.add(_,h),h.v=0}}function lu(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=hr(S(h.Fa,h),lh(h,h.v)),h.v++,!0)}n.Fa=function(){if(this.u=null,ah(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=hr(S(this.ab,this),h)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ln(10),wr(this),ah(this))};function uu(h){h.A!=null&&(f.clearTimeout(h.A),h.A=null)}function ah(h){h.g=new Xi(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=Nt(h.qa);Ze(_,"RID","rpc"),Ze(_,"SID",h.K),Ze(_,"AID",h.T),Ze(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&Ze(_,"TO",h.ja),Ze(_,"TYPE","xmlhttp"),ka(h,_),h.m&&h.o&&Er(_,h.m,h.o),h.L&&(h.g.I=h.L);var v=h.g;h=h.ia,v.L=1,v.v=Ia(Nt(_)),v.m=null,v.P=!0,Ts(v,h)}n.Za=function(){this.C!=null&&(this.C=null,wr(this),lu(this),ln(19))};function Sr(h){h.C!=null&&(f.clearTimeout(h.C),h.C=null)}function oh(h,_){var v=null;if(h.g==_){Sr(h),uu(h),h.g=null;var A=2}else if(mr(h.h,_))v=_.D,mi(h.h,_),A=1;else return;if(h.G!=0){if(_.o)if(A==1){v=_.m?_.m.length:0,_=Date.now()-_.F;var G=h.B;A=wo(),Bt(A,new Yl(A,v)),Do(h)}else rh(h);else if(G=_.s,G==3||G==0&&0<_.X||!(A==1&&sp(h,_)||A==2&&lu(h)))switch(v&&0<v.length&&(_=h.h,_.i=_.i.concat(v)),G){case 1:Cs(h,5);break;case 4:Cs(h,10);break;case 3:Cs(h,6);break;default:Cs(h,2)}}}function lh(h,_){let v=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(v*=2),v*_}function Cs(h,_){if(h.j.info("Error code "+_),_==2){var v=S(h.fb,h),A=h.Xa;const G=!A;A=new ws(A||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||_r(A,"https"),Ia(A),G?su(A.toString(),v):Jc(A.toString(),v)}else ln(2);h.G=0,h.l&&h.l.sa(_),cu(h),ih(h)}n.fb=function(h){h?(this.j.info("Successfully pinged google.com"),ln(2)):(this.j.info("Failed to ping google.com"),ln(1))};function cu(h){if(h.G=0,h.ka=[],h.l){const _=kn(h.h);(_.length!=0||h.i.length!=0)&&(B(h.ka,_),B(h.ka,h.i),h.h.i.length=0,H(h.i),h.i.length=0),h.l.ra()}}function uh(h,_,v){var A=v instanceof ws?Nt(v):new ws(v);if(A.g!="")_&&(A.g=_+"."+A.g),Ra(A,A.s);else{var G=f.location;A=G.protocol,_=_?_+"."+G.hostname:G.hostname,G=+G.port;var $=new ws(null);A&&_r($,A),_&&($.g=_),G&&Ra($,G),v&&($.l=v),A=$}return v=h.D,_=h.ya,v&&_&&Ze(A,v,_),Ze(A,"VER",h.la),ka(h,A),A}function ch(h,_,v){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new yt(new es({eb:v})):new yt(h.pa),_.Ha(h.J),_}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function hh(){}n=hh.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ko(){}ko.prototype.g=function(h,_){return new On(h,_)};function On(h,_){Rt.call(this),this.g=new nh(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!oe(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!oe(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new Ar(this)}V(On,Rt),On.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},On.prototype.close=function(){au(this.g)},On.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var v={};v.__data__=h,h=v}else this.u&&(v={},v.__data__=fi(h),h=v);_.i.push(new Jf(_.Ya++,h)),_.G==3&&Do(_)},On.prototype.N=function(){this.g.l=null,delete this.j,au(this.g),delete this.g,On.aa.N.call(this)};function dh(h){lr.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const v in _){h=v;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}V(dh,lr);function fh(){xi.call(this),this.status=1}V(fh,xi);function Ar(h){this.g=h}V(Ar,hh),Ar.prototype.ua=function(){Bt(this.g,"a")},Ar.prototype.ta=function(h){Bt(this.g,new dh(h))},Ar.prototype.sa=function(h){Bt(this.g,new fh)},Ar.prototype.ra=function(){Bt(this.g,"b")},ko.prototype.createWebChannel=ko.prototype.g,On.prototype.send=On.prototype.o,On.prototype.open=On.prototype.m,On.prototype.close=On.prototype.close,Fw=function(){return new ko},qw=function(){return wo()},jw=pi,Bg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},It.NO_ERROR=0,It.TIMEOUT=8,It.HTTP_ERROR=6,Ad=It,un.COMPLETE="complete",zw=un,Sa.EventType=Wi,Wi.OPEN="a",Wi.CLOSE="b",Wi.ERROR="c",Wi.MESSAGE="d",Rt.prototype.listen=Rt.prototype.K,ec=Sa,yt.prototype.listenOnce=yt.prototype.L,yt.prototype.getLastError=yt.prototype.Ka,yt.prototype.getLastErrorCode=yt.prototype.Ba,yt.prototype.getStatus=yt.prototype.Z,yt.prototype.getResponseJson=yt.prototype.Oa,yt.prototype.getResponseText=yt.prototype.oa,yt.prototype.send=yt.prototype.ea,yt.prototype.setWithCredentials=yt.prototype.Ha,Bw=yt}).apply(typeof _d<"u"?_d:typeof self<"u"?self:typeof window<"u"?window:{});const YE="@firebase/firestore",$E="4.8.0";/**
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
 */let bn=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};bn.UNAUTHENTICATED=new bn(null),bn.GOOGLE_CREDENTIALS=new bn("google-credentials-uid"),bn.FIRST_PARTY=new bn("first-party-uid"),bn.MOCK_USER=new bn("mock-user");/**
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
 */let Ml="11.10.0";/**
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
 */const ro=new Ic("@firebase/firestore");function ul(){return ro.logLevel}function fe(n,...e){if(ro.logLevel<=je.DEBUG){const t=e.map(x_);ro.debug(`Firestore (${Ml}): ${n}`,...t)}}function $s(n,...e){if(ro.logLevel<=je.ERROR){const t=e.map(x_);ro.error(`Firestore (${Ml}): ${n}`,...t)}}function ua(n,...e){if(ro.logLevel<=je.WARN){const t=e.map(x_);ro.warn(`Firestore (${Ml}): ${n}`,...t)}}function x_(n){if(typeof n=="string")return n;try{/**
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
 */function Ce(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Hw(n,s,t)}function Hw(n,e,t){let s=`FIRESTORE (${Ml}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw $s(s),new Error(s)}function it(n,e,t,s){let a="Unexpected state";typeof t=="string"?a=t:s=t,n||Hw(e,a,s)}function Ie(n,e){return n}/**
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
 */const ee={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class de extends Ki{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Gw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _P{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(bn.UNAUTHENTICATED)))}shutdown(){}}class yP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class vP{constructor(e){this.t=e,this.currentUser=bn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){it(this.o===void 0,42304);let s=this.i;const a=m=>this.i!==s?(s=this.i,t(m)):Promise.resolve();let l=new ls;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new ls,e.enqueueRetryable((()=>a(this.currentUser)))};const c=()=>{const m=l;e.enqueueRetryable((async()=>{await m.promise,await a(this.currentUser)}))},f=m=>{fe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((m=>f(m))),setTimeout((()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?f(m):(fe("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new ls)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(fe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(it(typeof s.accessToken=="string",31837,{l:s}),new Gw(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return it(e===null||typeof e=="string",2055,{h:e}),new bn(e)}}class EP{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=bn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class TP{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new EP(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(bn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class XE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bP{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Un(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){it(this.o===void 0,3512);const s=l=>{l.error!=null&&fe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,fe("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>s(l)))};const a=l=>{fe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>a(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):fe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new XE(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(it(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new XE(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function wP(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */function Kw(){return new TextEncoder}/**
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
 */class D_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=wP(40);for(let l=0;l<a.length;++l)s.length<20&&a[l]<t&&(s+=e.charAt(a[l]%62))}return s}}function Ve(n,e){return n<e?-1:n>e?1:0}function zg(n,e){let t=0;for(;t<n.length&&t<e.length;){const s=n.codePointAt(t),a=e.codePointAt(t);if(s!==a){if(s<128&&a<128)return Ve(s,a);{const l=Kw(),c=SP(l.encode(ZE(n,t)),l.encode(ZE(e,t)));return c!==0?c:Ve(s,a)}}t+=s>65535?2:1}return Ve(n.length,e.length)}function ZE(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function SP(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Ve(n[t],e[t]);return Ve(n.length,e.length)}function El(n,e,t){return n.length===e.length&&n.every(((s,a)=>t(s,e[a])))}/**
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
 */const JE="__name__";class as{constructor(e,t,s){t===void 0?t=0:t>e.length&&Ce(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&Ce(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return as.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof as?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const l=as.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Ve(e.length,t.length)}static compareSegments(e,t){const s=as.isNumericId(e),a=as.isNumericId(t);return s&&!a?-1:!s&&a?1:s&&a?as.extractNumericId(e).compare(as.extractNumericId(t)):zg(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ra.fromString(e.substring(4,e.length-2))}}class _t extends as{construct(e,t,s){return new _t(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new de(ee.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((a=>a.length>0)))}return new _t(t)}static emptyPath(){return new _t([])}}const AP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gn extends as{construct(e,t,s){return new gn(e,t,s)}static isValidIdentifier(e){return AP.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gn.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===JE}static keyField(){return new gn([JE])}static fromServerFormat(e){const t=[];let s="",a=0;const l=()=>{if(s.length===0)throw new de(ee.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let c=!1;for(;a<e.length;){const f=e[a];if(f==="\\"){if(a+1===e.length)throw new de(ee.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[a+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new de(ee.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=m,a+=2}else f==="`"?(c=!c,a++):f!=="."||c?(s+=f,a++):(l(),a++)}if(l(),c)throw new de(ee.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new gn(t)}static emptyPath(){return new gn([])}}/**
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
 */class be{constructor(e){this.path=e}static fromPath(e){return new be(_t.fromString(e))}static fromName(e){return new be(_t.fromString(e).popFirst(5))}static empty(){return new be(_t.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&_t.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return _t.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new be(new _t(e.slice()))}}/**
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
 */function Qw(n,e,t){if(!t)throw new de(ee.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function CP(n,e,t,s){if(e===!0&&s===!0)throw new de(ee.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function eT(n){if(!be.isDocumentKey(n))throw new de(ee.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function tT(n){if(be.isDocumentKey(n))throw new de(ee.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ww(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ef(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ce(12329,{type:typeof n})}function Rn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new de(ee.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ef(n);throw new de(ee.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function RP(n,e){if(e<=0)throw new de(ee.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */function Qt(n,e){const t={typeString:n};return e&&(t.value=e),t}function Pc(n,e){if(!Ww(n))throw new de(ee.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const a=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const c=n[s];if(a&&typeof c!==a){t=`JSON field '${s}' must be a ${a}.`;break}if(l!==void 0&&c!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new de(ee.INVALID_ARGUMENT,t);return!0}/**
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
 */const nT=-62135596800,iT=1e6;class gt{static now(){return gt.fromMillis(Date.now())}static fromDate(e){return gt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*iT);return new gt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new de(ee.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new de(ee.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<nT)throw new de(ee.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new de(ee.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/iT}_compareTo(e){return this.seconds===e.seconds?Ve(this.nanoseconds,e.nanoseconds):Ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:gt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Pc(e,gt._jsonSchema))return new gt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-nT;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}gt._jsonSchemaVersion="firestore/timestamp/1.0",gt._jsonSchema={type:Qt("string",gt._jsonSchemaVersion),seconds:Qt("number"),nanoseconds:Qt("number")};/**
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
 */class xe{static fromTimestamp(e){return new xe(e)}static min(){return new xe(new gt(0,0))}static max(){return new xe(new gt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const yc=-1;function IP(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,a=xe.fromTimestamp(s===1e9?new gt(t+1,0):new gt(t,s));return new ca(a,be.empty(),e)}function NP(n){return new ca(n.readTime,n.key,yc)}class ca{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new ca(xe.min(),be.empty(),yc)}static max(){return new ca(xe.max(),be.empty(),yc)}}function PP(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=be.comparator(n.documentKey,e.documentKey),t!==0?t:Ve(n.largestBatchId,e.largestBatchId))}/**
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
 */const xP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class DP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Ol(n){if(n.code!==ee.FAILED_PRECONDITION||n.message!==xP)throw n;fe("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ie{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ce(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ie(((s,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,a)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof ie?t:ie.resolve(t)}catch(t){return ie.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):ie.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):ie.reject(t)}static resolve(e){return new ie(((t,s)=>{t(e)}))}static reject(e){return new ie(((t,s)=>{s(e)}))}static waitFor(e){return new ie(((t,s)=>{let a=0,l=0,c=!1;e.forEach((f=>{++a,f.next((()=>{++l,c&&l===a&&t()}),(m=>s(m)))})),c=!0,l===a&&t()}))}static or(e){let t=ie.resolve(!1);for(const s of e)t=t.next((a=>a?ie.resolve(a):s()));return t}static forEach(e,t){const s=[];return e.forEach(((a,l)=>{s.push(t.call(this,a,l))})),this.waitFor(s)}static mapArray(e,t){return new ie(((s,a)=>{const l=e.length,c=new Array(l);let f=0;for(let m=0;m<l;m++){const g=m;t(e[g]).next((E=>{c[g]=E,++f,f===l&&s(c)}),(E=>a(E)))}}))}static doWhile(e,t){return new ie(((s,a)=>{const l=()=>{e()===!0?t().next((()=>{l()}),a):s()};l()}))}}function kP(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ll(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Tf{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this._e(s),this.ae=s=>t.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Tf.ue=-1;/**
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
 */const k_=-1;function bf(n){return n==null}function Bd(n){return n===0&&1/n==-1/0}function MP(n){return typeof n=="number"&&Number.isInteger(n)&&!Bd(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Yw="";function OP(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=sT(e)),e=LP(n.get(t),e);return sT(e)}function LP(n,e){let t=e;const s=n.length;for(let a=0;a<s;a++){const l=n.charAt(a);switch(l){case"\0":t+="";break;case Yw:t+="";break;default:t+=l}}return t}function sT(n){return n+Yw+""}/**
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
 */function rT(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function va(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function VP(n,e){const t=[];for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&t.push(e(n[s],s,n));return t}function $w(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */let Wt=class jg{constructor(e,t){this.comparator=e,this.root=t||aa.EMPTY}insert(e,t){return new jg(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,aa.BLACK,null,null))}remove(e){return new jg(this.comparator,this.root.remove(e,this.comparator).copy(null,null,aa.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return t+s.left.size;a<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new yd(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new yd(this.root,e,this.comparator,!1)}getReverseIterator(){return new yd(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new yd(this.root,e,this.comparator,!0)}},yd=class{constructor(e,t,s,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},aa=class Fs{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??Fs.RED,this.left=a??Fs.EMPTY,this.right=l??Fs.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,a,l){return new Fs(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return Fs.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return Fs.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Fs.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Fs.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ce(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ce(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ce(27949);return e+(this.isRed()?0:1)}};aa.EMPTY=null,aa.RED=!0,aa.BLACK=!1;aa.EMPTY=new class{constructor(){this.size=0}get key(){throw Ce(57766)}get value(){throw Ce(16141)}get color(){throw Ce(16727)}get left(){throw Ce(29726)}get right(){throw Ce(36894)}copy(e,t,s,a,l){return this}insert(e,t,s){return new aa(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Xt{constructor(e){this.comparator=e,this.data=new Wt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new aT(this.data.getIterator())}getIteratorFrom(e){return new aT(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Xt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Xt(this.comparator);return t.data=e,t}}class aT{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class hi{constructor(e){this.fields=e,e.sort(gn.comparator)}static empty(){return new hi([])}unionWith(e){let t=new Xt(gn.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new hi(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return El(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class Xw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class _n{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Xw("Invalid base64 string: "+l):l}})(e);return new _n(t)}static fromUint8Array(e){const t=(function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l})(e);return new _n(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_n.EMPTY_BYTE_STRING=new _n("");const UP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ha(n){if(it(!!n,39018),typeof n=="string"){let e=0;const t=UP.exec(n);if(it(!!t,46558,{timestamp:n}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Lt(n.seconds),nanos:Lt(n.nanos)}}function Lt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function da(n){return typeof n=="string"?_n.fromBase64String(n):_n.fromUint8Array(n)}/**
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
 */const Zw="server_timestamp",Jw="__type__",eS="__previous_value__",tS="__local_write_time__";function M_(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Jw])===null||t===void 0?void 0:t.stringValue)===Zw}function wf(n){const e=n.mapValue.fields[eS];return M_(e)?wf(e):e}function vc(n){const e=ha(n.mapValue.fields[tS].timestampValue);return new gt(e.seconds,e.nanos)}/**
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
 */class BP{constructor(e,t,s,a,l,c,f,m,g,E){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=f,this.longPollingOptions=m,this.useFetchStreams=g,this.isUsingEmulator=E}}const zd="(default)";class Ec{constructor(e,t){this.projectId=e,this.database=t||zd}static empty(){return new Ec("","")}get isDefaultDatabase(){return this.database===zd}isEqual(e){return e instanceof Ec&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const nS="__type__",zP="__max__",vd={mapValue:{}},iS="__vector__",jd="value";function fa(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?M_(n)?4:qP(n)?9007199254740991:jP(n)?10:11:Ce(28295,{value:n})}function ms(n,e){if(n===e)return!0;const t=fa(n);if(t!==fa(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return vc(n).isEqual(vc(e));case 3:return(function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=ha(a.timestampValue),f=ha(l.timestampValue);return c.seconds===f.seconds&&c.nanos===f.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(a,l){return da(a.bytesValue).isEqual(da(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(a,l){return Lt(a.geoPointValue.latitude)===Lt(l.geoPointValue.latitude)&&Lt(a.geoPointValue.longitude)===Lt(l.geoPointValue.longitude)})(n,e);case 2:return(function(a,l){if("integerValue"in a&&"integerValue"in l)return Lt(a.integerValue)===Lt(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=Lt(a.doubleValue),f=Lt(l.doubleValue);return c===f?Bd(c)===Bd(f):isNaN(c)&&isNaN(f)}return!1})(n,e);case 9:return El(n.arrayValue.values||[],e.arrayValue.values||[],ms);case 10:case 11:return(function(a,l){const c=a.mapValue.fields||{},f=l.mapValue.fields||{};if(rT(c)!==rT(f))return!1;for(const m in c)if(c.hasOwnProperty(m)&&(f[m]===void 0||!ms(c[m],f[m])))return!1;return!0})(n,e);default:return Ce(52216,{left:n})}}function Tc(n,e){return(n.values||[]).find((t=>ms(t,e)))!==void 0}function Tl(n,e){if(n===e)return 0;const t=fa(n),s=fa(e);if(t!==s)return Ve(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ve(n.booleanValue,e.booleanValue);case 2:return(function(l,c){const f=Lt(l.integerValue||l.doubleValue),m=Lt(c.integerValue||c.doubleValue);return f<m?-1:f>m?1:f===m?0:isNaN(f)?isNaN(m)?0:-1:1})(n,e);case 3:return oT(n.timestampValue,e.timestampValue);case 4:return oT(vc(n),vc(e));case 5:return zg(n.stringValue,e.stringValue);case 6:return(function(l,c){const f=da(l),m=da(c);return f.compareTo(m)})(n.bytesValue,e.bytesValue);case 7:return(function(l,c){const f=l.split("/"),m=c.split("/");for(let g=0;g<f.length&&g<m.length;g++){const E=Ve(f[g],m[g]);if(E!==0)return E}return Ve(f.length,m.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,c){const f=Ve(Lt(l.latitude),Lt(c.latitude));return f!==0?f:Ve(Lt(l.longitude),Lt(c.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return lT(n.arrayValue,e.arrayValue);case 10:return(function(l,c){var f,m,g,E;const b=l.fields||{},S=c.fields||{},P=(f=b[jd])===null||f===void 0?void 0:f.arrayValue,V=(m=S[jd])===null||m===void 0?void 0:m.arrayValue,H=Ve(((g=P?.values)===null||g===void 0?void 0:g.length)||0,((E=V?.values)===null||E===void 0?void 0:E.length)||0);return H!==0?H:lT(P,V)})(n.mapValue,e.mapValue);case 11:return(function(l,c){if(l===vd.mapValue&&c===vd.mapValue)return 0;if(l===vd.mapValue)return 1;if(c===vd.mapValue)return-1;const f=l.fields||{},m=Object.keys(f),g=c.fields||{},E=Object.keys(g);m.sort(),E.sort();for(let b=0;b<m.length&&b<E.length;++b){const S=zg(m[b],E[b]);if(S!==0)return S;const P=Tl(f[m[b]],g[E[b]]);if(P!==0)return P}return Ve(m.length,E.length)})(n.mapValue,e.mapValue);default:throw Ce(23264,{le:t})}}function oT(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ve(n,e);const t=ha(n),s=ha(e),a=Ve(t.seconds,s.seconds);return a!==0?a:Ve(t.nanos,s.nanos)}function lT(n,e){const t=n.values||[],s=e.values||[];for(let a=0;a<t.length&&a<s.length;++a){const l=Tl(t[a],s[a]);if(l)return l}return Ve(t.length,s.length)}function bl(n){return qg(n)}function qg(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=ha(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return da(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return be.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",a=!0;for(const l of t.values||[])a?a=!1:s+=",",s+=qg(l);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const c of s)l?l=!1:a+=",",a+=`${c}:${qg(t.fields[c])}`;return a+"}"})(n.mapValue):Ce(61005,{value:n})}function Cd(n){switch(fa(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=wf(n);return e?16+Cd(e):16;case 5:return 2*n.stringValue.length;case 6:return da(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((a,l)=>a+Cd(l)),0)})(n.arrayValue);case 10:case 11:return(function(s){let a=0;return va(s.fields,((l,c)=>{a+=l.length+Cd(c)})),a})(n.mapValue);default:throw Ce(13486,{value:n})}}function uT(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Fg(n){return!!n&&"integerValue"in n}function O_(n){return!!n&&"arrayValue"in n}function cT(n){return!!n&&"nullValue"in n}function hT(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Rd(n){return!!n&&"mapValue"in n}function jP(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[nS])===null||t===void 0?void 0:t.stringValue)===iS}function rc(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return va(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=rc(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=rc(n.arrayValue.values[t]);return e}return Object.assign({},n)}function qP(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===zP}/**
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
 */class Xn{constructor(e){this.value=e}static empty(){return new Xn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Rd(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=rc(t)}setAll(e){let t=gn.emptyPath(),s={},a=[];e.forEach(((c,f)=>{if(!t.isImmediateParentOf(f)){const m=this.getFieldsMap(t);this.applyChanges(m,s,a),s={},a=[],t=f.popLast()}c?s[f.lastSegment()]=rc(c):a.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,s,a)}delete(e){const t=this.field(e.popLast());Rd(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ms(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=t.mapValue.fields[e.get(s)];Rd(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,s){va(t,((a,l)=>e[a]=l));for(const a of s)delete e[a]}clone(){return new Xn(rc(this.value))}}function sS(n){const e=[];return va(n.fields,((t,s)=>{const a=new gn([t]);if(Rd(s)){const l=sS(s.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)})),new hi(e)}/**
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
 */class Sn{constructor(e,t,s,a,l,c,f){this.key=e,this.documentType=t,this.version=s,this.readTime=a,this.createTime=l,this.data=c,this.documentState=f}static newInvalidDocument(e){return new Sn(e,0,xe.min(),xe.min(),xe.min(),Xn.empty(),0)}static newFoundDocument(e,t,s,a){return new Sn(e,1,t,xe.min(),s,a,0)}static newNoDocument(e,t){return new Sn(e,2,t,xe.min(),xe.min(),Xn.empty(),0)}static newUnknownDocument(e,t){return new Sn(e,3,t,xe.min(),xe.min(),Xn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(xe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Xn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Xn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=xe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Sn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Sn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class qd{constructor(e,t){this.position=e,this.inclusive=t}}function dT(n,e,t){let s=0;for(let a=0;a<n.position.length;a++){const l=e[a],c=n.position[a];if(l.field.isKeyField()?s=be.comparator(be.fromName(c.referenceValue),t.key):s=Tl(c,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function fT(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ms(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class bc{constructor(e,t="asc"){this.field=e,this.dir=t}}function FP(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class rS{}class Kt extends rS{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new GP(e,t,s):t==="array-contains"?new WP(e,s):t==="in"?new YP(e,s):t==="not-in"?new $P(e,s):t==="array-contains-any"?new XP(e,s):new Kt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new KP(e,s):new QP(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Tl(t,this.value)):t!==null&&fa(this.value)===fa(t)&&this.matchesComparison(Tl(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ce(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Hi extends rS{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Hi(e,t)}matches(e){return aS(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function aS(n){return n.op==="and"}function oS(n){return HP(n)&&aS(n)}function HP(n){for(const e of n.filters)if(e instanceof Hi)return!1;return!0}function Hg(n){if(n instanceof Kt)return n.field.canonicalString()+n.op.toString()+bl(n.value);if(oS(n))return n.filters.map((e=>Hg(e))).join(",");{const e=n.filters.map((t=>Hg(t))).join(",");return`${n.op}(${e})`}}function lS(n,e){return n instanceof Kt?(function(s,a){return a instanceof Kt&&s.op===a.op&&s.field.isEqual(a.field)&&ms(s.value,a.value)})(n,e):n instanceof Hi?(function(s,a){return a instanceof Hi&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce(((l,c,f)=>l&&lS(c,a.filters[f])),!0):!1})(n,e):void Ce(19439)}function uS(n){return n instanceof Kt?(function(t){return`${t.field.canonicalString()} ${t.op} ${bl(t.value)}`})(n):n instanceof Hi?(function(t){return t.op.toString()+" {"+t.getFilters().map(uS).join(" ,")+"}"})(n):"Filter"}class GP extends Kt{constructor(e,t,s){super(e,t,s),this.key=be.fromName(s.referenceValue)}matches(e){const t=be.comparator(e.key,this.key);return this.matchesComparison(t)}}class KP extends Kt{constructor(e,t){super(e,"in",t),this.keys=cS("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class QP extends Kt{constructor(e,t){super(e,"not-in",t),this.keys=cS("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function cS(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((s=>be.fromName(s.referenceValue)))}class WP extends Kt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return O_(t)&&Tc(t.arrayValue,this.value)}}class YP extends Kt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Tc(this.value.arrayValue,t)}}class $P extends Kt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Tc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Tc(this.value.arrayValue,t)}}class XP extends Kt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!O_(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Tc(this.value.arrayValue,s)))}}/**
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
 */class ZP{constructor(e,t=null,s=[],a=[],l=null,c=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=a,this.limit=l,this.startAt=c,this.endAt=f,this.Pe=null}}function pT(n,e=null,t=[],s=[],a=null,l=null,c=null){return new ZP(n,e,t,s,a,l,c)}function L_(n){const e=Ie(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Hg(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(l){return l.field.canonicalString()+l.dir})(s))).join(","),bf(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>bl(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>bl(s))).join(",")),e.Pe=t}return e.Pe}function V_(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!FP(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!lS(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!fT(n.startAt,e.startAt)&&fT(n.endAt,e.endAt)}function Gg(n){return be.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Vl{constructor(e,t=null,s=[],a=[],l=null,c="F",f=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=a,this.limit=l,this.limitType=c,this.startAt=f,this.endAt=m,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function JP(n,e,t,s,a,l,c,f){return new Vl(n,e,t,s,a,l,c,f)}function Sf(n){return new Vl(n)}function mT(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function hS(n){return n.collectionGroup!==null}function ac(n){const e=Ie(n);if(e.Te===null){e.Te=[];const t=new Set;for(const l of e.explicitOrderBy)e.Te.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let f=new Xt(gn.comparator);return c.filters.forEach((m=>{m.getFlattenedFilters().forEach((g=>{g.isInequality()&&(f=f.add(g.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Te.push(new bc(l,s))})),t.has(gn.keyField().canonicalString())||e.Te.push(new bc(gn.keyField(),s))}return e.Te}function us(n){const e=Ie(n);return e.Ie||(e.Ie=dS(e,ac(n))),e.Ie}function ex(n){const e=Ie(n);return e.de||(e.de=dS(e,n.explicitOrderBy)),e.de}function dS(n,e){if(n.limitType==="F")return pT(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((a=>{const l=a.dir==="desc"?"asc":"desc";return new bc(a.field,l)}));const t=n.endAt?new qd(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new qd(n.startAt.position,n.startAt.inclusive):null;return pT(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function Kg(n,e){const t=n.filters.concat([e]);return new Vl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Fd(n,e,t){return new Vl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Af(n,e){return V_(us(n),us(e))&&n.limitType===e.limitType}function fS(n){return`${L_(us(n))}|lt:${n.limitType}`}function cl(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((a=>uS(a))).join(", ")}]`),bf(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((a=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(a))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((a=>bl(a))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((a=>bl(a))).join(",")),`Target(${s})`})(us(n))}; limitType=${n.limitType})`}function Cf(n,e){return e.isFoundDocument()&&(function(s,a){const l=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):be.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)})(n,e)&&(function(s,a){for(const l of ac(s))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(s,a){for(const l of s.filters)if(!l.matches(a))return!1;return!0})(n,e)&&(function(s,a){return!(s.startAt&&!(function(c,f,m){const g=dT(c,f,m);return c.inclusive?g<=0:g<0})(s.startAt,ac(s),a)||s.endAt&&!(function(c,f,m){const g=dT(c,f,m);return c.inclusive?g>=0:g>0})(s.endAt,ac(s),a))})(n,e)}function tx(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function pS(n){return(e,t)=>{let s=!1;for(const a of ac(n)){const l=nx(a,e,t);if(l!==0)return l;s=s||a.field.isKeyField()}return 0}}function nx(n,e,t){const s=n.field.isKeyField()?be.comparator(e.key,t.key):(function(l,c,f){const m=c.data.field(l),g=f.data.field(l);return m!==null&&g!==null?Tl(m,g):Ce(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return Ce(19790,{direction:n.dir})}}/**
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
 */class _o{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[a,l]of s)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[t]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){va(this.inner,((t,s)=>{for(const[a,l]of s)e(a,l)}))}isEmpty(){return $w(this.inner)}size(){return this.innerSize}}/**
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
 */const ix=new Wt(be.comparator);function Xs(){return ix}const mS=new Wt(be.comparator);function tc(...n){let e=mS;for(const t of n)e=e.insert(t.key,t);return e}function gS(n){let e=mS;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function Za(){return oc()}function _S(){return oc()}function oc(){return new _o((n=>n.toString()),((n,e)=>n.isEqual(e)))}const sx=new Wt(be.comparator),rx=new Xt(be.comparator);function Ge(...n){let e=rx;for(const t of n)e=e.add(t);return e}const ax=new Xt(Ve);function ox(){return ax}/**
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
 */function U_(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bd(e)?"-0":e}}function yS(n){return{integerValue:""+n}}function lx(n,e){return MP(e)?yS(e):U_(n,e)}/**
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
 */class Rf{constructor(){this._=void 0}}function ux(n,e,t){return n instanceof wc?(function(a,l){const c={fields:{[Jw]:{stringValue:Zw},[tS]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&M_(l)&&(l=wf(l)),l&&(c.fields[eS]=l),{mapValue:c}})(t,e):n instanceof wl?ES(n,e):n instanceof Sl?TS(n,e):(function(a,l){const c=vS(a,l),f=gT(c)+gT(a.Ee);return Fg(c)&&Fg(a.Ee)?yS(f):U_(a.serializer,f)})(n,e)}function cx(n,e,t){return n instanceof wl?ES(n,e):n instanceof Sl?TS(n,e):t}function vS(n,e){return n instanceof Hd?(function(s){return Fg(s)||(function(l){return!!l&&"doubleValue"in l})(s)})(e)?e:{integerValue:0}:null}class wc extends Rf{}class wl extends Rf{constructor(e){super(),this.elements=e}}function ES(n,e){const t=bS(e);for(const s of n.elements)t.some((a=>ms(a,s)))||t.push(s);return{arrayValue:{values:t}}}class Sl extends Rf{constructor(e){super(),this.elements=e}}function TS(n,e){let t=bS(e);for(const s of n.elements)t=t.filter((a=>!ms(a,s)));return{arrayValue:{values:t}}}class Hd extends Rf{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function gT(n){return Lt(n.integerValue||n.doubleValue)}function bS(n){return O_(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class B_{constructor(e,t){this.field=e,this.transform=t}}function hx(n,e){return n.field.isEqual(e.field)&&(function(s,a){return s instanceof wl&&a instanceof wl||s instanceof Sl&&a instanceof Sl?El(s.elements,a.elements,ms):s instanceof Hd&&a instanceof Hd?ms(s.Ee,a.Ee):s instanceof wc&&a instanceof wc})(n.transform,e.transform)}class dx{constructor(e,t){this.version=e,this.transformResults=t}}class Bn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Bn}static exists(e){return new Bn(void 0,e)}static updateTime(e){return new Bn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Id(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class If{}function wS(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Nf(n.key,Bn.none()):new xc(n.key,n.data,Bn.none());{const t=n.data,s=Xn.empty();let a=new Xt(gn.comparator);for(let l of e.fields)if(!a.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?s.delete(l):s.set(l,c),a=a.add(l)}return new Ea(n.key,s,new hi(a.toArray()),Bn.none())}}function fx(n,e,t){n instanceof xc?(function(a,l,c){const f=a.value.clone(),m=yT(a.fieldTransforms,l,c.transformResults);f.setAll(m),l.convertToFoundDocument(c.version,f).setHasCommittedMutations()})(n,e,t):n instanceof Ea?(function(a,l,c){if(!Id(a.precondition,l))return void l.convertToUnknownDocument(c.version);const f=yT(a.fieldTransforms,l,c.transformResults),m=l.data;m.setAll(SS(a)),m.setAll(f),l.convertToFoundDocument(c.version,m).setHasCommittedMutations()})(n,e,t):(function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function lc(n,e,t,s){return n instanceof xc?(function(l,c,f,m){if(!Id(l.precondition,c))return f;const g=l.value.clone(),E=vT(l.fieldTransforms,m,c);return g.setAll(E),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null})(n,e,t,s):n instanceof Ea?(function(l,c,f,m){if(!Id(l.precondition,c))return f;const g=vT(l.fieldTransforms,m,c),E=c.data;return E.setAll(SS(l)),E.setAll(g),c.convertToFoundDocument(c.version,E).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((b=>b.field)))})(n,e,t,s):(function(l,c,f){return Id(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):f})(n,e,t)}function px(n,e){let t=null;for(const s of n.fieldTransforms){const a=e.data.field(s.field),l=vS(s.transform,a||null);l!=null&&(t===null&&(t=Xn.empty()),t.set(s.field,l))}return t||null}function _T(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&El(s,a,((l,c)=>hx(l,c)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class xc extends If{constructor(e,t,s,a=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Ea extends If{constructor(e,t,s,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function SS(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function yT(n,e,t){const s=new Map;it(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let a=0;a<t.length;a++){const l=n[a],c=l.transform,f=e.data.field(l.field);s.set(l.field,cx(c,f,t[a]))}return s}function vT(n,e,t){const s=new Map;for(const a of n){const l=a.transform,c=t.data.field(a.field);s.set(a.field,ux(l,c,e))}return s}class Nf extends If{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class mx extends If{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class gx{constructor(e,t,s,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&fx(l,e,s[a])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=lc(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=lc(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=_S();return this.mutations.forEach((a=>{const l=e.get(a.key),c=l.overlayedDocument;let f=this.applyToLocalView(c,l.mutatedFields);f=t.has(a.key)?null:f;const m=wS(c,f);m!==null&&s.set(a.key,m),c.isValidDocument()||c.convertToNoDocument(xe.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ge())}isEqual(e){return this.batchId===e.batchId&&El(this.mutations,e.mutations,((t,s)=>_T(t,s)))&&El(this.baseMutations,e.baseMutations,((t,s)=>_T(t,s)))}}class z_{constructor(e,t,s,a){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=a}static from(e,t,s){it(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let a=(function(){return sx})();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,s[c].version);return new z_(e,t,s,a)}}/**
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
 */class _x{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class yx{constructor(e,t,s){this.alias=e,this.aggregateType=t,this.fieldPath=s}}/**
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
 */class vx{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Gt,Ye;function Ex(n){switch(n){case ee.OK:return Ce(64938);case ee.CANCELLED:case ee.UNKNOWN:case ee.DEADLINE_EXCEEDED:case ee.RESOURCE_EXHAUSTED:case ee.INTERNAL:case ee.UNAVAILABLE:case ee.UNAUTHENTICATED:return!1;case ee.INVALID_ARGUMENT:case ee.NOT_FOUND:case ee.ALREADY_EXISTS:case ee.PERMISSION_DENIED:case ee.FAILED_PRECONDITION:case ee.ABORTED:case ee.OUT_OF_RANGE:case ee.UNIMPLEMENTED:case ee.DATA_LOSS:return!0;default:return Ce(15467,{code:n})}}function AS(n){if(n===void 0)return $s("GRPC error has no .code"),ee.UNKNOWN;switch(n){case Gt.OK:return ee.OK;case Gt.CANCELLED:return ee.CANCELLED;case Gt.UNKNOWN:return ee.UNKNOWN;case Gt.DEADLINE_EXCEEDED:return ee.DEADLINE_EXCEEDED;case Gt.RESOURCE_EXHAUSTED:return ee.RESOURCE_EXHAUSTED;case Gt.INTERNAL:return ee.INTERNAL;case Gt.UNAVAILABLE:return ee.UNAVAILABLE;case Gt.UNAUTHENTICATED:return ee.UNAUTHENTICATED;case Gt.INVALID_ARGUMENT:return ee.INVALID_ARGUMENT;case Gt.NOT_FOUND:return ee.NOT_FOUND;case Gt.ALREADY_EXISTS:return ee.ALREADY_EXISTS;case Gt.PERMISSION_DENIED:return ee.PERMISSION_DENIED;case Gt.FAILED_PRECONDITION:return ee.FAILED_PRECONDITION;case Gt.ABORTED:return ee.ABORTED;case Gt.OUT_OF_RANGE:return ee.OUT_OF_RANGE;case Gt.UNIMPLEMENTED:return ee.UNIMPLEMENTED;case Gt.DATA_LOSS:return ee.DATA_LOSS;default:return Ce(39323,{code:n})}}(Ye=Gt||(Gt={}))[Ye.OK=0]="OK",Ye[Ye.CANCELLED=1]="CANCELLED",Ye[Ye.UNKNOWN=2]="UNKNOWN",Ye[Ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ye[Ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ye[Ye.NOT_FOUND=5]="NOT_FOUND",Ye[Ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ye[Ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ye[Ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ye[Ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ye[Ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ye[Ye.ABORTED=10]="ABORTED",Ye[Ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ye[Ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ye[Ye.INTERNAL=13]="INTERNAL",Ye[Ye.UNAVAILABLE=14]="UNAVAILABLE",Ye[Ye.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const Tx=new ra([4294967295,4294967295],0);function ET(n){const e=Kw().encode(n),t=new Uw;return t.update(e),new Uint8Array(t.digest())}function TT(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new ra([t,s],0),new ra([a,l],0)]}class j_{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new nc(`Invalid padding: ${t}`);if(s<0)throw new nc(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new nc(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new nc(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=ra.fromNumber(this.fe)}pe(e,t,s){let a=e.add(t.multiply(ra.fromNumber(s)));return a.compare(Tx)===1&&(a=new ra([a.getBits(0),a.getBits(1)],0)),a.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=ET(e),[s,a]=TT(t);for(let l=0;l<this.hashCount;l++){const c=this.pe(s,a,l);if(!this.ye(c))return!1}return!0}static create(e,t,s){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new j_(l,a,t);return s.forEach((f=>c.insert(f))),c}insert(e){if(this.fe===0)return;const t=ET(e),[s,a]=TT(t);for(let l=0;l<this.hashCount;l++){const c=this.pe(s,a,l);this.we(c)}}we(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class nc extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Pf{constructor(e,t,s,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const a=new Map;return a.set(e,Dc.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Pf(xe.min(),a,new Wt(Ve),Xs(),Ge())}}class Dc{constructor(e,t,s,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Dc(s,t,Ge(),Ge(),Ge())}}/**
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
 */class Nd{constructor(e,t,s,a){this.Se=e,this.removedTargetIds=t,this.key=s,this.be=a}}class CS{constructor(e,t){this.targetId=e,this.De=t}}class RS{constructor(e,t,s=_n.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=a}}class bT{constructor(){this.ve=0,this.Ce=wT(),this.Fe=_n.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Ge(),t=Ge(),s=Ge();return this.Ce.forEach(((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:s=s.add(a);break;default:Ce(38017,{changeType:l})}})),new Dc(this.Fe,this.Me,e,t,s)}ke(){this.xe=!1,this.Ce=wT()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,it(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class bx{constructor(e){this.We=e,this.Ge=new Map,this.ze=Xs(),this.je=Ed(),this.Je=Ed(),this.He=new Wt(Ve)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const s=this.tt(t);switch(e.state){case 0:this.nt(t)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),s.Be(e.resumeToken));break;default:Ce(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((s,a)=>{this.nt(a)&&t(a)}))}it(e){const t=e.targetId,s=e.De.count,a=this.st(t);if(a){const l=a.target;if(Gg(l))if(s===0){const c=new be(l.path);this.Xe(t,c,Sn.newNoDocument(c,xe.min()))}else it(s===1,20013,{expectedCount:s});else{const c=this.ot(t);if(c!==s){const f=this._t(e),m=f?this.ut(f,e,c):1;if(m!==0){this.rt(t);const g=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,g)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:a=0},hashCount:l=0}=t;let c,f;try{c=da(s).toUint8Array()}catch(m){if(m instanceof Xw)return ua("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{f=new j_(c,a,l)}catch(m){return ua(m instanceof nc?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return f.fe===0?null:f}ut(e,t,s){return t.De.count===s-this.ht(e,t.targetId)?0:2}ht(e,t){const s=this.We.getRemoteKeysForTarget(t);let a=0;return s.forEach((l=>{const c=this.We.lt(),f=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.Xe(t,l,null),a++)})),a}Pt(e){const t=new Map;this.Ge.forEach(((l,c)=>{const f=this.st(c);if(f){if(l.current&&Gg(f.target)){const m=new be(f.target.path);this.Tt(m).has(c)||this.It(c,m)||this.Xe(c,m,Sn.newNoDocument(m,e))}l.Ne&&(t.set(c,l.Le()),l.ke())}}));let s=Ge();this.Je.forEach(((l,c)=>{let f=!0;c.forEachWhile((m=>{const g=this.st(m);return!g||g.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(s=s.add(l))})),this.ze.forEach(((l,c)=>c.setReadTime(e)));const a=new Pf(e,t,this.He,this.ze,s);return this.ze=Xs(),this.je=Ed(),this.Je=Ed(),this.He=new Wt(Ve),a}Ze(e,t){if(!this.nt(e))return;const s=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,s),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,s){if(!this.nt(e))return;const a=this.tt(e);this.It(e,t)?a.qe(t,1):a.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),s&&(this.ze=this.ze.insert(t,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new bT,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Xt(Ve),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Xt(Ve),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||fe("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new bT),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Ed(){return new Wt(be.comparator)}function wT(){return new Wt(be.comparator)}const wx={asc:"ASCENDING",desc:"DESCENDING"},Sx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ax={and:"AND",or:"OR"};class Cx{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Qg(n,e){return n.useProto3Json||bf(e)?e:{value:e}}function Gd(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function IS(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Rx(n,e){return Gd(n,e.toTimestamp())}function cs(n){return it(!!n,49232),xe.fromTimestamp((function(t){const s=ha(t);return new gt(s.seconds,s.nanos)})(n))}function q_(n,e){return Wg(n,e).canonicalString()}function Wg(n,e){const t=(function(a){return new _t(["projects",a.projectId,"databases",a.database])})(n).child("documents");return e===void 0?t:t.child(e)}function NS(n){const e=_t.fromString(n);return it(OS(e),10190,{key:e.toString()}),e}function Yg(n,e){return q_(n.databaseId,e.path)}function cg(n,e){const t=NS(e);if(t.get(1)!==n.databaseId.projectId)throw new de(ee.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new de(ee.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new be(xS(t))}function PS(n,e){return q_(n.databaseId,e)}function Ix(n){const e=NS(n);return e.length===4?_t.emptyPath():xS(e)}function $g(n){return new _t(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function xS(n){return it(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function ST(n,e,t){return{name:Yg(n,e),fields:t.value.mapValue.fields}}function Nx(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Ce(39313,{state:g})})(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=(function(g,E){return g.useProto3Json?(it(E===void 0||typeof E=="string",58123),_n.fromBase64String(E||"")):(it(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),_n.fromUint8Array(E||new Uint8Array))})(n,e.targetChange.resumeToken),c=e.targetChange.cause,f=c&&(function(g){const E=g.code===void 0?ee.UNKNOWN:AS(g.code);return new de(E,g.message||"")})(c);t=new RS(s,a,l,f||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const a=cg(n,s.document.name),l=cs(s.document.updateTime),c=s.document.createTime?cs(s.document.createTime):xe.min(),f=new Xn({mapValue:{fields:s.document.fields}}),m=Sn.newFoundDocument(a,l,c,f),g=s.targetIds||[],E=s.removedTargetIds||[];t=new Nd(g,E,m.key,m)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const a=cg(n,s.document),l=s.readTime?cs(s.readTime):xe.min(),c=Sn.newNoDocument(a,l),f=s.removedTargetIds||[];t=new Nd([],f,c.key,c)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const a=cg(n,s.document),l=s.removedTargetIds||[];t=new Nd([],l,a,null)}else{if(!("filter"in e))return Ce(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:a=0,unchangedNames:l}=s,c=new vx(a,l),f=s.targetId;t=new CS(f,c)}}return t}function Px(n,e){let t;if(e instanceof xc)t={update:ST(n,e.key,e.value)};else if(e instanceof Nf)t={delete:Yg(n,e.key)};else if(e instanceof Ea)t={update:ST(n,e.key,e.data),updateMask:Bx(e.fieldMask)};else{if(!(e instanceof mx))return Ce(16599,{Rt:e.type});t={verify:Yg(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(l,c){const f=c.transform;if(f instanceof wc)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof wl)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof Sl)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof Hd)return{fieldPath:c.field.canonicalString(),increment:f.Ee};throw Ce(20930,{transform:c.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(a,l){return l.updateTime!==void 0?{updateTime:Rx(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Ce(27497)})(n,e.precondition)),t}function xx(n,e){return n&&n.length>0?(it(e!==void 0,14353),n.map((t=>(function(a,l){let c=a.updateTime?cs(a.updateTime):cs(l);return c.isEqual(xe.min())&&(c=cs(l)),new dx(c,a.transformResults||[])})(t,e)))):[]}function Dx(n,e){return{documents:[PS(n,e.path)]}}function DS(n,e){const t={structuredQuery:{}},s=e.path;let a;e.collectionGroup!==null?(a=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=PS(n,a);const l=(function(g){if(g.length!==0)return MS(Hi.create(g,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const c=(function(g){if(g.length!==0)return g.map((E=>(function(S){return{field:Xr(S.field),direction:Lx(S.dir)}})(E)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const f=Qg(n,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(e.endAt)),{Vt:t,parent:a}}function kx(n,e,t,s){const{Vt:a,parent:l}=DS(n,e),c={},f=[];let m=0;return t.forEach((g=>{const E="aggregate_"+m++;c[E]=g.alias,g.aggregateType==="count"?f.push({alias:E,count:{}}):g.aggregateType==="avg"?f.push({alias:E,avg:{field:Xr(g.fieldPath)}}):g.aggregateType==="sum"&&f.push({alias:E,sum:{field:Xr(g.fieldPath)}})})),{request:{structuredAggregationQuery:{aggregations:f,structuredQuery:a.structuredQuery},parent:a.parent},ft:c,parent:l}}function Mx(n){let e=Ix(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let a=null;if(s>0){it(s===1,65062);const E=t.from[0];E.allDescendants?a=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=(function(b){const S=kS(b);return S instanceof Hi&&oS(S)?S.getFilters():[S]})(t.where));let c=[];t.orderBy&&(c=(function(b){return b.map((S=>(function(V){return new bc(hl(V.field),(function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(V.direction))})(S)))})(t.orderBy));let f=null;t.limit&&(f=(function(b){let S;return S=typeof b=="object"?b.value:b,bf(S)?null:S})(t.limit));let m=null;t.startAt&&(m=(function(b){const S=!!b.before,P=b.values||[];return new qd(P,S)})(t.startAt));let g=null;return t.endAt&&(g=(function(b){const S=!b.before,P=b.values||[];return new qd(P,S)})(t.endAt)),JP(e,a,c,l,f,"F",m,g)}function Ox(n,e){const t=(function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ce(28987,{purpose:a})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function kS(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=hl(t.unaryFilter.field);return Kt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=hl(t.unaryFilter.field);return Kt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=hl(t.unaryFilter.field);return Kt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=hl(t.unaryFilter.field);return Kt.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ce(61313);default:return Ce(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Kt.create(hl(t.fieldFilter.field),(function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ce(58110);default:return Ce(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Hi.create(t.compositeFilter.filters.map((s=>kS(s))),(function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return Ce(1026)}})(t.compositeFilter.op))})(n):Ce(30097,{filter:n})}function Lx(n){return wx[n]}function Vx(n){return Sx[n]}function Ux(n){return Ax[n]}function Xr(n){return{fieldPath:n.canonicalString()}}function hl(n){return gn.fromServerFormat(n.fieldPath)}function MS(n){return n instanceof Kt?(function(t){if(t.op==="=="){if(hT(t.value))return{unaryFilter:{field:Xr(t.field),op:"IS_NAN"}};if(cT(t.value))return{unaryFilter:{field:Xr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(hT(t.value))return{unaryFilter:{field:Xr(t.field),op:"IS_NOT_NAN"}};if(cT(t.value))return{unaryFilter:{field:Xr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xr(t.field),op:Vx(t.op),value:t.value}}})(n):n instanceof Hi?(function(t){const s=t.getFilters().map((a=>MS(a)));return s.length===1?s[0]:{compositeFilter:{op:Ux(t.op),filters:s}}})(n):Ce(54877,{filter:n})}function Bx(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function OS(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class ta{constructor(e,t,s,a,l=xe.min(),c=xe.min(),f=_n.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=f,this.expectedCount=m}withSequenceNumber(e){return new ta(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ta(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ta(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ta(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class zx{constructor(e){this.gt=e}}function jx(n){const e=Mx({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Fd(e,e.limit,"L"):e}/**
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
 */class qx{constructor(){this.Dn=new Fx}addToCollectionParentIndex(e,t){return this.Dn.add(t),ie.resolve()}getCollectionParents(e,t){return ie.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return ie.resolve()}deleteFieldIndex(e,t){return ie.resolve()}deleteAllFieldIndexes(e){return ie.resolve()}createTargetIndexes(e,t){return ie.resolve()}getDocumentsMatchingTarget(e,t){return ie.resolve(null)}getIndexType(e,t){return ie.resolve(0)}getFieldIndexes(e,t){return ie.resolve([])}getNextCollectionGroupToUpdate(e){return ie.resolve(null)}getMinOffset(e,t){return ie.resolve(ca.min())}getMinOffsetFromCollectionGroup(e,t){return ie.resolve(ca.min())}updateCollectionGroup(e,t,s){return ie.resolve()}updateIndexEntries(e,t){return ie.resolve()}}class Fx{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t]||new Xt(_t.comparator),l=!a.has(s);return this.index[t]=a.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t];return a&&a.has(s)}getEntries(e){return(this.index[e]||new Xt(_t.comparator)).toArray()}}/**
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
 */const AT={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},LS=41943040;class $n{static withCacheSize(e){return new $n(e,$n.DEFAULT_COLLECTION_PERCENTILE,$n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */$n.DEFAULT_COLLECTION_PERCENTILE=10,$n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,$n.DEFAULT=new $n(LS,$n.DEFAULT_COLLECTION_PERCENTILE,$n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),$n.DISABLED=new $n(-1,0,0);/**
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
 */class Al{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Al(0)}static ur(){return new Al(-1)}}/**
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
 */const CT="LruGarbageCollector",Hx=1048576;function RT([n,e],[t,s]){const a=Ve(n,t);return a===0?Ve(e,s):a}class Gx{constructor(e){this.Tr=e,this.buffer=new Xt(RT),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();RT(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Kx{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){fe(CT,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ll(t)?fe(CT,"Ignoring IndexedDB error during garbage collection: ",t):await Ol(t)}await this.Rr(3e5)}))}}class Qx{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return ie.resolve(Tf.ue);const s=new Gx(t);return this.Vr.forEachTarget(e,(a=>s.Er(a.sequenceNumber))).next((()=>this.Vr.gr(e,(a=>s.Er(a))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(fe("LruGarbageCollector","Garbage collection skipped; disabled"),ie.resolve(AT)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(fe("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),AT):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let s,a,l,c,f,m,g;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((b=>(b>this.params.maximumSequenceNumbersToCollect?(fe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),a=this.params.maximumSequenceNumbersToCollect):a=b,c=Date.now(),this.nthSequenceNumber(e,a)))).next((b=>(s=b,f=Date.now(),this.removeTargets(e,s,t)))).next((b=>(l=b,m=Date.now(),this.removeOrphanedDocuments(e,s)))).next((b=>(g=Date.now(),ul()<=je.DEBUG&&fe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-E}ms
	Determined least recently used ${a} in `+(f-c)+`ms
	Removed ${l} targets in `+(m-f)+`ms
	Removed ${b} documents in `+(g-m)+`ms
Total Duration: ${g-E}ms`),ie.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:b}))))}}function Wx(n,e){return new Qx(n,e)}/**
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
 */class Yx{constructor(){this.changes=new _o((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Sn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?ie.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class $x{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Xx{constructor(e,t,s,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((a=>(s=a,this.remoteDocumentCache.getEntry(e,t)))).next((a=>(s!==null&&lc(s.mutation,a,hi.empty(),gt.now()),a)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Ge()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Ge()){const a=Za();return this.populateOverlays(e,a,t).next((()=>this.computeViews(e,t,a,s).next((l=>{let c=tc();return l.forEach(((f,m)=>{c=c.insert(f,m.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const s=Za();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Ge())))}populateOverlays(e,t,s){const a=[];return s.forEach((l=>{t.has(l)||a.push(l)})),this.documentOverlayCache.getOverlays(e,a).next((l=>{l.forEach(((c,f)=>{t.set(c,f)}))}))}computeViews(e,t,s,a){let l=Xs();const c=oc(),f=(function(){return oc()})();return t.forEach(((m,g)=>{const E=s.get(g.key);a.has(g.key)&&(E===void 0||E.mutation instanceof Ea)?l=l.insert(g.key,g):E!==void 0?(c.set(g.key,E.mutation.getFieldMask()),lc(E.mutation,g,E.mutation.getFieldMask(),gt.now())):c.set(g.key,hi.empty())})),this.recalculateAndSaveOverlays(e,l).next((m=>(m.forEach(((g,E)=>c.set(g,E))),t.forEach(((g,E)=>{var b;return f.set(g,new $x(E,(b=c.get(g))!==null&&b!==void 0?b:null))})),f)))}recalculateAndSaveOverlays(e,t){const s=oc();let a=new Wt(((c,f)=>c-f)),l=Ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const f of c)f.keys().forEach((m=>{const g=t.get(m);if(g===null)return;let E=s.get(m)||hi.empty();E=f.applyToLocalView(g,E),s.set(m,E);const b=(a.get(f.batchId)||Ge()).add(m);a=a.insert(f.batchId,b)}))})).next((()=>{const c=[],f=a.getReverseIterator();for(;f.hasNext();){const m=f.getNext(),g=m.key,E=m.value,b=_S();E.forEach((S=>{if(!l.has(S)){const P=wS(t.get(S),s.get(S));P!==null&&b.set(S,P),l=l.add(S)}})),c.push(this.documentOverlayCache.saveOverlays(e,g,b))}return ie.waitFor(c)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,a){return(function(c){return be.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):hS(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,a):this.getDocumentsMatchingCollectionQuery(e,t,s,a)}getNextDocuments(e,t,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,a).next((l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,a-l.size):ie.resolve(Za());let f=yc,m=l;return c.next((g=>ie.forEach(g,((E,b)=>(f<b.largestBatchId&&(f=b.largestBatchId),l.get(E)?ie.resolve():this.remoteDocumentCache.getEntry(e,E).next((S=>{m=m.insert(E,S)}))))).next((()=>this.populateOverlays(e,g,l))).next((()=>this.computeViews(e,m,g,Ge()))).next((E=>({batchId:f,changes:gS(E)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new be(t)).next((s=>{let a=tc();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,a){const l=t.collectionGroup;let c=tc();return this.indexManager.getCollectionParents(e,l).next((f=>ie.forEach(f,(m=>{const g=(function(b,S){return new Vl(S,null,b.explicitOrderBy.slice(),b.filters.slice(),b.limit,b.limitType,b.startAt,b.endAt)})(t,m.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,s,a).next((E=>{E.forEach(((b,S)=>{c=c.insert(b,S)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,s,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,a)))).next((c=>{l.forEach(((m,g)=>{const E=g.getKey();c.get(E)===null&&(c=c.insert(E,Sn.newInvalidDocument(E)))}));let f=tc();return c.forEach(((m,g)=>{const E=l.get(m);E!==void 0&&lc(E.mutation,g,hi.empty(),gt.now()),Cf(t,g)&&(f=f.insert(m,g))})),f}))}}/**
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
 */class Zx{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return ie.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(a){return{id:a.id,version:a.version,createTime:cs(a.createTime)}})(t)),ie.resolve()}getNamedQuery(e,t){return ie.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(a){return{name:a.name,query:jx(a.bundledQuery),readTime:cs(a.readTime)}})(t)),ie.resolve()}}/**
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
 */class Jx{constructor(){this.overlays=new Wt(be.comparator),this.kr=new Map}getOverlay(e,t){return ie.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Za();return ie.forEach(t,(a=>this.getOverlay(e,a).next((l=>{l!==null&&s.set(a,l)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((a,l)=>{this.wt(e,t,l)})),ie.resolve()}removeOverlaysForBatchId(e,t,s){const a=this.kr.get(s);return a!==void 0&&(a.forEach((l=>this.overlays=this.overlays.remove(l))),this.kr.delete(s)),ie.resolve()}getOverlaysForCollection(e,t,s){const a=Za(),l=t.length+1,c=new be(t.child("")),f=this.overlays.getIteratorFrom(c);for(;f.hasNext();){const m=f.getNext().value,g=m.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&m.largestBatchId>s&&a.set(m.getKey(),m)}return ie.resolve(a)}getOverlaysForCollectionGroup(e,t,s,a){let l=new Wt(((g,E)=>g-E));const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>s){let E=l.get(g.largestBatchId);E===null&&(E=Za(),l=l.insert(g.largestBatchId,E)),E.set(g.getKey(),g)}}const f=Za(),m=l.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach(((g,E)=>f.set(g,E))),!(f.size()>=a)););return ie.resolve(f)}wt(e,t,s){const a=this.overlays.get(s.key);if(a!==null){const c=this.kr.get(a.largestBatchId).delete(s.key);this.kr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(s.key,new _x(t,s));let l=this.kr.get(t);l===void 0&&(l=Ge(),this.kr.set(t,l)),this.kr.set(t,l.add(s.key))}}/**
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
 */class eD{constructor(){this.sessionToken=_n.EMPTY_BYTE_STRING}getSessionToken(e){return ie.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,ie.resolve()}}/**
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
 */class F_{constructor(){this.qr=new Xt(an.Qr),this.$r=new Xt(an.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const s=new an(e,t);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new an(e,t))}Gr(e,t){e.forEach((s=>this.removeReference(s,t)))}zr(e){const t=new be(new _t([])),s=new an(t,e),a=new an(t,e+1),l=[];return this.$r.forEachInRange([s,a],(c=>{this.Wr(c),l.push(c.key)})),l}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new be(new _t([])),s=new an(t,e),a=new an(t,e+1);let l=Ge();return this.$r.forEachInRange([s,a],(c=>{l=l.add(c.key)})),l}containsKey(e){const t=new an(e,0),s=this.qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class an{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return be.comparator(e.key,t.key)||Ve(e.Hr,t.Hr)}static Ur(e,t){return Ve(e.Hr,t.Hr)||be.comparator(e.key,t.key)}}/**
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
 */class tD{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Xt(an.Qr)}checkEmpty(e){return ie.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,a){const l=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new gx(l,t,s,a);this.mutationQueue.push(c);for(const f of a)this.Yr=this.Yr.add(new an(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return ie.resolve(c)}lookupMutationBatch(e,t){return ie.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,a=this.Xr(s),l=a<0?0:a;return ie.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return ie.resolve(this.mutationQueue.length===0?k_:this.er-1)}getAllMutationBatches(e){return ie.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new an(t,0),a=new an(t,Number.POSITIVE_INFINITY),l=[];return this.Yr.forEachInRange([s,a],(c=>{const f=this.Zr(c.Hr);l.push(f)})),ie.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Xt(Ve);return t.forEach((a=>{const l=new an(a,0),c=new an(a,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([l,c],(f=>{s=s.add(f.Hr)}))})),ie.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,a=s.length+1;let l=s;be.isDocumentKey(l)||(l=l.child(""));const c=new an(new be(l),0);let f=new Xt(Ve);return this.Yr.forEachWhile((m=>{const g=m.key.path;return!!s.isPrefixOf(g)&&(g.length===a&&(f=f.add(m.Hr)),!0)}),c),ie.resolve(this.ei(f))}ei(e){const t=[];return e.forEach((s=>{const a=this.Zr(s);a!==null&&t.push(a)})),t}removeMutationBatch(e,t){it(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return ie.forEach(t.mutations,(a=>{const l=new an(a.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)})).next((()=>{this.Yr=s}))}rr(e){}containsKey(e,t){const s=new an(t,0),a=this.Yr.firstAfterOrEqual(s);return ie.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,ie.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class nD{constructor(e){this.ni=e,this.docs=(function(){return new Wt(be.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,a=this.docs.get(s),l=a?a.size:0,c=this.ni(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return ie.resolve(s?s.document.mutableCopy():Sn.newInvalidDocument(t))}getEntries(e,t){let s=Xs();return t.forEach((a=>{const l=this.docs.get(a);s=s.insert(a,l?l.document.mutableCopy():Sn.newInvalidDocument(a))})),ie.resolve(s)}getDocumentsMatchingQuery(e,t,s,a){let l=Xs();const c=t.path,f=new be(c.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(f);for(;m.hasNext();){const{key:g,value:{document:E}}=m.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||PP(NP(E),s)<=0||(a.has(E.key)||Cf(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return ie.resolve(l)}getAllFromCollectionGroup(e,t,s,a){Ce(9500)}ri(e,t){return ie.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new iD(this)}getSize(e){return ie.resolve(this.size)}}class iD extends Yx{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((s,a)=>{a.isValidDocument()?t.push(this.Or.addEntry(e,a)):this.Or.removeEntry(s)})),ie.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class sD{constructor(e){this.persistence=e,this.ii=new _o((t=>L_(t)),V_),this.lastRemoteSnapshotVersion=xe.min(),this.highestTargetId=0,this.si=0,this.oi=new F_,this.targetCount=0,this._i=Al.ar()}forEachTarget(e,t){return this.ii.forEach(((s,a)=>t(a))),ie.resolve()}getLastRemoteSnapshotVersion(e){return ie.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ie.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),ie.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.si&&(this.si=t),ie.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Al(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,ie.resolve()}updateTargetData(e,t){return this.hr(t),ie.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,ie.resolve()}removeTargets(e,t,s){let a=0;const l=[];return this.ii.forEach(((c,f)=>{f.sequenceNumber<=t&&s.get(f.targetId)===null&&(this.ii.delete(c),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),a++)})),ie.waitFor(l).next((()=>a))}getTargetCount(e){return ie.resolve(this.targetCount)}getTargetData(e,t){const s=this.ii.get(t)||null;return ie.resolve(s)}addMatchingKeys(e,t,s){return this.oi.Kr(t,s),ie.resolve()}removeMatchingKeys(e,t,s){this.oi.Gr(t,s);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach((c=>{l.push(a.markPotentiallyOrphaned(e,c))})),ie.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),ie.resolve()}getMatchingKeysForTargetId(e,t){const s=this.oi.Jr(t);return ie.resolve(s)}containsKey(e,t){return ie.resolve(this.oi.containsKey(t))}}/**
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
 */class VS{constructor(e,t){this.ai={},this.overlays={},this.ui=new Tf(0),this.ci=!1,this.ci=!0,this.li=new eD,this.referenceDelegate=e(this),this.hi=new sD(this),this.indexManager=new qx,this.remoteDocumentCache=(function(a){return new nD(a)})((s=>this.referenceDelegate.Pi(s))),this.serializer=new zx(t),this.Ti=new Zx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Jx,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ai[e.toKey()];return s||(s=new tD(t,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,s){fe("MemoryPersistence","Starting transaction:",e);const a=new rD(this.ui.next());return this.referenceDelegate.Ii(),s(a).next((l=>this.referenceDelegate.di(a).next((()=>l)))).toPromise().then((l=>(a.raiseOnCommittedEvent(),l)))}Ei(e,t){return ie.or(Object.values(this.ai).map((s=>()=>s.containsKey(e,t))))}}class rD extends DP{constructor(e){super(),this.currentSequenceNumber=e}}class H_{constructor(e){this.persistence=e,this.Ai=new F_,this.Ri=null}static Vi(e){return new H_(e)}get mi(){if(this.Ri)return this.Ri;throw Ce(60996)}addReference(e,t,s){return this.Ai.addReference(s,t),this.mi.delete(s.toString()),ie.resolve()}removeReference(e,t,s){return this.Ai.removeReference(s,t),this.mi.add(s.toString()),ie.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),ie.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((a=>this.mi.add(a.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((a=>{a.forEach((l=>this.mi.add(l.toString())))})).next((()=>s.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ie.forEach(this.mi,(s=>{const a=be.fromPath(s);return this.fi(e,a).next((l=>{l||t.removeEntry(a,xe.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((s=>{s?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return ie.or([()=>ie.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Kd{constructor(e,t){this.persistence=e,this.gi=new _o((s=>OP(s.path)),((s,a)=>s.isEqual(a))),this.garbageCollector=Wx(this,t)}static Vi(e,t){return new Kd(e,t)}Ii(){}di(e){return ie.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((a=>s+a))))}yr(e){let t=0;return this.gr(e,(s=>{t++})).next((()=>t))}gr(e,t){return ie.forEach(this.gi,((s,a)=>this.Sr(e,s,a).next((l=>l?ie.resolve():t(a)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.ri(e,(c=>this.Sr(e,c,t).next((f=>{f||(s++,l.removeEntry(c,xe.min()))})))).next((()=>l.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),ie.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),ie.resolve()}removeReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),ie.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),ie.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Cd(e.data.value)),t}Sr(e,t,s){return ie.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.gi.get(t);return ie.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class G_{constructor(e,t,s,a){this.targetId=e,this.fromCache=t,this.Is=s,this.ds=a}static Es(e,t){let s=Ge(),a=Ge();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new G_(e,t.fromCache,s,a)}}/**
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
 */class aD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class oD{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return GI()?8:kP(In())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,s,a){const l={result:null};return this.ps(e,t).next((c=>{l.result=c})).next((()=>{if(!l.result)return this.ys(e,t,a,s).next((c=>{l.result=c}))})).next((()=>{if(l.result)return;const c=new aD;return this.ws(e,t,c).next((f=>{if(l.result=f,this.Rs)return this.Ss(e,t,c,f.size)}))})).next((()=>l.result))}Ss(e,t,s,a){return s.documentReadCount<this.Vs?(ul()<=je.DEBUG&&fe("QueryEngine","SDK will not create cache indexes for query:",cl(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),ie.resolve()):(ul()<=je.DEBUG&&fe("QueryEngine","Query:",cl(t),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.fs*a?(ul()<=je.DEBUG&&fe("QueryEngine","The SDK decides to create cache indexes for query:",cl(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,us(t))):ie.resolve())}ps(e,t){if(mT(t))return ie.resolve(null);let s=us(t);return this.indexManager.getIndexType(e,s).next((a=>a===0?null:(t.limit!==null&&a===1&&(t=Fd(t,null,"F"),s=us(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((l=>{const c=Ge(...l);return this.gs.getDocuments(e,c).next((f=>this.indexManager.getMinOffset(e,s).next((m=>{const g=this.bs(t,f);return this.Ds(t,g,c,m.readTime)?this.ps(e,Fd(t,null,"F")):this.vs(e,g,t,m)}))))})))))}ys(e,t,s,a){return mT(t)||a.isEqual(xe.min())?ie.resolve(null):this.gs.getDocuments(e,s).next((l=>{const c=this.bs(t,l);return this.Ds(t,c,s,a)?ie.resolve(null):(ul()<=je.DEBUG&&fe("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),cl(t)),this.vs(e,c,t,IP(a,yc)).next((f=>f)))}))}bs(e,t){let s=new Xt(pS(e));return t.forEach(((a,l)=>{Cf(e,l)&&(s=s.add(l))})),s}Ds(e,t,s,a){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}ws(e,t,s){return ul()<=je.DEBUG&&fe("QueryEngine","Using full collection scan to execute query:",cl(t)),this.gs.getDocumentsMatchingQuery(e,t,ca.min(),s)}vs(e,t,s,a){return this.gs.getDocumentsMatchingQuery(e,s,a).next((l=>(t.forEach((c=>{l=l.insert(c.key,c)})),l)))}}/**
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
 */const K_="LocalStore",lD=3e8;class uD{constructor(e,t,s,a){this.persistence=e,this.Cs=t,this.serializer=a,this.Fs=new Wt(Ve),this.Ms=new _o((l=>L_(l)),V_),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Xx(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function cD(n,e,t,s){return new uD(n,e,t,s)}async function US(n,e){const t=Ie(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let a;return t.mutationQueue.getAllMutationBatches(s).next((l=>(a=l,t.Ns(e),t.mutationQueue.getAllMutationBatches(s)))).next((l=>{const c=[],f=[];let m=Ge();for(const g of a){c.push(g.batchId);for(const E of g.mutations)m=m.add(E.key)}for(const g of l){f.push(g.batchId);for(const E of g.mutations)m=m.add(E.key)}return t.localDocuments.getDocuments(s,m).next((g=>({Bs:g,removedBatchIds:c,addedBatchIds:f})))}))}))}function hD(n,e){const t=Ie(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const a=e.batch.keys(),l=t.Os.newChangeBuffer({trackRemovals:!0});return(function(f,m,g,E){const b=g.batch,S=b.keys();let P=ie.resolve();return S.forEach((V=>{P=P.next((()=>E.getEntry(m,V))).next((H=>{const B=g.docVersions.get(V);it(B!==null,48541),H.version.compareTo(B)<0&&(b.applyToRemoteDocument(H,g),H.isValidDocument()&&(H.setReadTime(g.commitVersion),E.addEntry(H)))}))})),P.next((()=>f.mutationQueue.removeMutationBatch(m,b)))})(t,s,e,l).next((()=>l.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(f){let m=Ge();for(let g=0;g<f.mutationResults.length;++g)f.mutationResults[g].transformResults.length>0&&(m=m.add(f.batch.mutations[g].key));return m})(e)))).next((()=>t.localDocuments.getDocuments(s,a)))}))}function BS(n){const e=Ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function dD(n,e){const t=Ie(n),s=e.snapshotVersion;let a=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const c=t.Os.newChangeBuffer({trackRemovals:!0});a=t.Fs;const f=[];e.targetChanges.forEach(((E,b)=>{const S=a.get(b);if(!S)return;f.push(t.hi.removeMatchingKeys(l,E.removedDocuments,b).next((()=>t.hi.addMatchingKeys(l,E.addedDocuments,b))));let P=S.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(b)!==null?P=P.withResumeToken(_n.EMPTY_BYTE_STRING,xe.min()).withLastLimboFreeSnapshotVersion(xe.min()):E.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(E.resumeToken,s)),a=a.insert(b,P),(function(H,B,re){return H.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-H.snapshotVersion.toMicroseconds()>=lD?!0:re.addedDocuments.size+re.modifiedDocuments.size+re.removedDocuments.size>0})(S,P,E)&&f.push(t.hi.updateTargetData(l,P))}));let m=Xs(),g=Ge();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))})),f.push(fD(l,c,e.documentUpdates).next((E=>{m=E.Ls,g=E.ks}))),!s.isEqual(xe.min())){const E=t.hi.getLastRemoteSnapshotVersion(l).next((b=>t.hi.setTargetsMetadata(l,l.currentSequenceNumber,s)));f.push(E)}return ie.waitFor(f).next((()=>c.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,m,g))).next((()=>m))})).then((l=>(t.Fs=a,l)))}function fD(n,e,t){let s=Ge(),a=Ge();return t.forEach((l=>s=s.add(l))),e.getEntries(n,s).next((l=>{let c=Xs();return t.forEach(((f,m)=>{const g=l.get(f);m.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(f)),m.isNoDocument()&&m.version.isEqual(xe.min())?(e.removeEntry(f,m.readTime),c=c.insert(f,m)):!g.isValidDocument()||m.version.compareTo(g.version)>0||m.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(m),c=c.insert(f,m)):fe(K_,"Ignoring outdated watch update for ",f,". Current version:",g.version," Watch version:",m.version)})),{Ls:c,ks:a}}))}function pD(n,e){const t=Ie(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=k_),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function mD(n,e){const t=Ie(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let a;return t.hi.getTargetData(s,e).next((l=>l?(a=l,ie.resolve(a)):t.hi.allocateTargetId(s).next((c=>(a=new ta(e,c,"TargetPurposeListen",s.currentSequenceNumber),t.hi.addTargetData(s,a).next((()=>a)))))))})).then((s=>{const a=t.Fs.get(s.targetId);return(a===null||s.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(s.targetId,s),t.Ms.set(e,s.targetId)),s}))}async function Xg(n,e,t){const s=Ie(n),a=s.Fs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,(c=>s.persistence.referenceDelegate.removeTarget(c,a)))}catch(c){if(!Ll(c))throw c;fe(K_,`Failed to update sequence numbers for target ${e}: ${c}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(a.target)}function IT(n,e,t){const s=Ie(n);let a=xe.min(),l=Ge();return s.persistence.runTransaction("Execute query","readwrite",(c=>(function(m,g,E){const b=Ie(m),S=b.Ms.get(E);return S!==void 0?ie.resolve(b.Fs.get(S)):b.hi.getTargetData(g,E)})(s,c,us(e)).next((f=>{if(f)return a=f.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(c,f.targetId).next((m=>{l=m}))})).next((()=>s.Cs.getDocumentsMatchingQuery(c,e,t?a:xe.min(),t?l:Ge()))).next((f=>(gD(s,tx(e),f),{documents:f,qs:l})))))}function gD(n,e,t){let s=n.xs.get(e)||xe.min();t.forEach(((a,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)})),n.xs.set(e,s)}class NT{constructor(){this.activeTargetIds=ox()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class _D{constructor(){this.Fo=new NT,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,s){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new NT,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class yD{xo(e){}shutdown(){}}/**
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
 */const PT="ConnectivityMonitor";class xT{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){fe(PT,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){fe(PT,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Td=null;function Zg(){return Td===null?Td=(function(){return 268435456+Math.round(2147483648*Math.random())})():Td++,"0x"+Td.toString(16)}/**
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
 */const hg="RestConnection",vD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ED{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${s}/databases/${a}`,this.Ko=this.databaseId.database===zd?`project_id=${s}`:`project_id=${s}&database_id=${a}`}Wo(e,t,s,a,l){const c=Zg(),f=this.Go(e,t.toUriEncodedString());fe(hg,`Sending RPC '${e}' ${c}:`,f,s);const m={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(m,a,l);const{host:g}=new URL(f),E=_a(g);return this.jo(e,f,m,s,E).then((b=>(fe(hg,`Received RPC '${e}' ${c}: `,b),b)),(b=>{throw ua(hg,`RPC '${e}' ${c} failed with error: `,b,"url: ",f,"request:",s),b}))}Jo(e,t,s,a,l,c){return this.Wo(e,t,s,a,l)}zo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ml})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((a,l)=>e[l]=a)),s&&s.headers.forEach(((a,l)=>e[l]=a))}Go(e,t){const s=vD[e];return`${this.$o}/v1/${t}:${s}`}terminate(){}}/**
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
 */class TD{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const Tn="WebChannelConnection";class bD extends ED{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,s,a,l){const c=Zg();return new Promise(((f,m)=>{const g=new Bw;g.setWithCredentials(!0),g.listenOnce(zw.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case Ad.NO_ERROR:const b=g.getResponseJson();fe(Tn,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(b)),f(b);break;case Ad.TIMEOUT:fe(Tn,`RPC '${e}' ${c} timed out`),m(new de(ee.DEADLINE_EXCEEDED,"Request time out"));break;case Ad.HTTP_ERROR:const S=g.getStatus();if(fe(Tn,`RPC '${e}' ${c} failed with status:`,S,"response text:",g.getResponseText()),S>0){let P=g.getResponseJson();Array.isArray(P)&&(P=P[0]);const V=P?.error;if(V&&V.status&&V.message){const H=(function(re){const oe=re.toLowerCase().replace(/_/g,"-");return Object.values(ee).indexOf(oe)>=0?oe:ee.UNKNOWN})(V.status);m(new de(H,V.message))}else m(new de(ee.UNKNOWN,"Server responded with status "+g.getStatus()))}else m(new de(ee.UNAVAILABLE,"Connection failed."));break;default:Ce(9055,{c_:e,streamId:c,l_:g.getLastErrorCode(),h_:g.getLastError()})}}finally{fe(Tn,`RPC '${e}' ${c} completed.`)}}));const E=JSON.stringify(a);fe(Tn,`RPC '${e}' ${c} sending request:`,a),g.send(t,"POST",E,s,15)}))}P_(e,t,s){const a=Zg(),l=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=Fw(),f=qw(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(m.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(m.useFetchStreams=!0),this.zo(m.initMessageHeaders,t,s),m.encodeInitMessageHeaders=!0;const E=l.join("");fe(Tn,`Creating RPC '${e}' stream ${a}: ${E}`,m);const b=c.createWebChannel(E,m);this.T_(b);let S=!1,P=!1;const V=new TD({Ho:B=>{P?fe(Tn,`Not sending because RPC '${e}' stream ${a} is closed:`,B):(S||(fe(Tn,`Opening RPC '${e}' stream ${a} transport.`),b.open(),S=!0),fe(Tn,`RPC '${e}' stream ${a} sending:`,B),b.send(B))},Yo:()=>b.close()}),H=(B,re,oe)=>{B.listen(re,(le=>{try{oe(le)}catch(me){setTimeout((()=>{throw me}),0)}}))};return H(b,ec.EventType.OPEN,(()=>{P||(fe(Tn,`RPC '${e}' stream ${a} transport opened.`),V.s_())})),H(b,ec.EventType.CLOSE,(()=>{P||(P=!0,fe(Tn,`RPC '${e}' stream ${a} transport closed`),V.__(),this.I_(b))})),H(b,ec.EventType.ERROR,(B=>{P||(P=!0,ua(Tn,`RPC '${e}' stream ${a} transport errored. Name:`,B.name,"Message:",B.message),V.__(new de(ee.UNAVAILABLE,"The operation could not be completed")))})),H(b,ec.EventType.MESSAGE,(B=>{var re;if(!P){const oe=B.data[0];it(!!oe,16349);const le=oe,me=le?.error||((re=le[0])===null||re===void 0?void 0:re.error);if(me){fe(Tn,`RPC '${e}' stream ${a} received error:`,me);const Me=me.status;let Ee=(function(I){const O=Gt[I];if(O!==void 0)return AS(O)})(Me),M=me.message;Ee===void 0&&(Ee=ee.INTERNAL,M="Unknown error status: "+Me+" with message "+me.message),P=!0,V.__(new de(Ee,M)),b.close()}else fe(Tn,`RPC '${e}' stream ${a} received:`,oe),V.a_(oe)}})),H(f,jw.STAT_EVENT,(B=>{B.stat===Bg.PROXY?fe(Tn,`RPC '${e}' stream ${a} detected buffering proxy`):B.stat===Bg.NOPROXY&&fe(Tn,`RPC '${e}' stream ${a} detected no buffering proxy`)})),setTimeout((()=>{V.o_()}),0),V}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function dg(){return typeof document<"u"?document:null}/**
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
 */function xf(n){return new Cx(n,!0)}/**
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
 */class zS{constructor(e,t,s=1e3,a=1.5,l=6e4){this.Fi=e,this.timerId=t,this.d_=s,this.E_=a,this.A_=l,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),a=Math.max(0,t-s);a>0&&fe("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,a,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const DT="PersistentStream";class jS{constructor(e,t,s,a,l,c,f,m){this.Fi=e,this.w_=s,this.S_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=f,this.listener=m,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new zS(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===ee.RESOURCE_EXHAUSTED?($s(t.toString()),$s("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===ee.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,a])=>{this.b_===t&&this.W_(s,a)}),(s=>{e((()=>{const a=new de(ee.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(a)}))}))}W_(e,t){const s=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.e_((()=>{s((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((a=>{s((()=>this.G_(a)))})),this.stream.onMessage((a=>{s((()=>++this.C_==1?this.j_(a):this.onNext(a)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return fe(DT,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(fe(DT,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class wD extends jS{constructor(e,t,s,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=Nx(this.serializer,e),s=(function(l){if(!("targetChange"in l))return xe.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?xe.min():c.readTime?cs(c.readTime):xe.min()})(e);return this.listener.J_(t,s)}H_(e){const t={};t.database=$g(this.serializer),t.addTarget=(function(l,c){let f;const m=c.target;if(f=Gg(m)?{documents:Dx(l,m)}:{query:DS(l,m).Vt},f.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){f.resumeToken=IS(l,c.resumeToken);const g=Qg(l,c.expectedCount);g!==null&&(f.expectedCount=g)}else if(c.snapshotVersion.compareTo(xe.min())>0){f.readTime=Gd(l,c.snapshotVersion.toTimestamp());const g=Qg(l,c.expectedCount);g!==null&&(f.expectedCount=g)}return f})(this.serializer,e);const s=Ox(this.serializer,e);s&&(t.labels=s),this.k_(t)}Y_(e){const t={};t.database=$g(this.serializer),t.removeTarget=e,this.k_(t)}}class SD extends jS{constructor(e,t,s,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return it(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,it(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){it(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=xx(e.writeResults,e.commitTime),s=cs(e.commitTime);return this.listener.ta(s,t)}na(){const e={};e.database=$g(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>Px(this.serializer,s)))};this.k_(t)}}/**
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
 */class AD{}class CD extends AD{constructor(e,t,s,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=a,this.ra=!1}ia(){if(this.ra)throw new de(ee.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,a){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,c])=>this.connection.Wo(e,Wg(t,s),a,l,c))).catch((l=>{throw l.name==="FirebaseError"?(l.code===ee.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new de(ee.UNKNOWN,l.toString())}))}Jo(e,t,s,a,l){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,f])=>this.connection.Jo(e,Wg(t,s),a,c,f,l))).catch((c=>{throw c.name==="FirebaseError"?(c.code===ee.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new de(ee.UNKNOWN,c.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class RD{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?($s(t),this._a=!1):fe("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const ao="RemoteStore";class ID{constructor(e,t,s,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=l,this.Ea.xo((c=>{s.enqueueAndForget((async()=>{yo(this)&&(fe(ao,"Restarting streams for network reachability change."),await(async function(m){const g=Ie(m);g.Ia.add(4),await kc(g),g.Aa.set("Unknown"),g.Ia.delete(4),await Df(g)})(this))}))})),this.Aa=new RD(s,a)}}async function Df(n){if(yo(n))for(const e of n.da)await e(!0)}async function kc(n){for(const e of n.da)await e(!1)}function qS(n,e){const t=Ie(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),$_(t)?Y_(t):Ul(t).x_()&&W_(t,e))}function Q_(n,e){const t=Ie(n),s=Ul(t);t.Ta.delete(e),s.x_()&&FS(t,e),t.Ta.size===0&&(s.x_()?s.B_():yo(t)&&t.Aa.set("Unknown"))}function W_(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(xe.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ul(n).H_(e)}function FS(n,e){n.Ra.$e(e),Ul(n).Y_(e)}function Y_(n){n.Ra=new bx({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),Ul(n).start(),n.Aa.aa()}function $_(n){return yo(n)&&!Ul(n).M_()&&n.Ta.size>0}function yo(n){return Ie(n).Ia.size===0}function HS(n){n.Ra=void 0}async function ND(n){n.Aa.set("Online")}async function PD(n){n.Ta.forEach(((e,t)=>{W_(n,e)}))}async function xD(n,e){HS(n),$_(n)?(n.Aa.la(e),Y_(n)):n.Aa.set("Unknown")}async function DD(n,e,t){if(n.Aa.set("Online"),e instanceof RS&&e.state===2&&e.cause)try{await(async function(a,l){const c=l.cause;for(const f of l.targetIds)a.Ta.has(f)&&(await a.remoteSyncer.rejectListen(f,c),a.Ta.delete(f),a.Ra.removeTarget(f))})(n,e)}catch(s){fe(ao,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Qd(n,s)}else if(e instanceof Nd?n.Ra.Ye(e):e instanceof CS?n.Ra.it(e):n.Ra.et(e),!t.isEqual(xe.min()))try{const s=await BS(n.localStore);t.compareTo(s)>=0&&await(function(l,c){const f=l.Ra.Pt(c);return f.targetChanges.forEach(((m,g)=>{if(m.resumeToken.approximateByteSize()>0){const E=l.Ta.get(g);E&&l.Ta.set(g,E.withResumeToken(m.resumeToken,c))}})),f.targetMismatches.forEach(((m,g)=>{const E=l.Ta.get(m);if(!E)return;l.Ta.set(m,E.withResumeToken(_n.EMPTY_BYTE_STRING,E.snapshotVersion)),FS(l,m);const b=new ta(E.target,m,g,E.sequenceNumber);W_(l,b)})),l.remoteSyncer.applyRemoteEvent(f)})(n,t)}catch(s){fe(ao,"Failed to raise snapshot:",s),await Qd(n,s)}}async function Qd(n,e,t){if(!Ll(e))throw e;n.Ia.add(1),await kc(n),n.Aa.set("Offline"),t||(t=()=>BS(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{fe(ao,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Df(n)}))}function GS(n,e){return e().catch((t=>Qd(n,t,e)))}async function kf(n){const e=Ie(n),t=pa(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:k_;for(;kD(e);)try{const a=await pD(e.localStore,s);if(a===null){e.Pa.length===0&&t.B_();break}s=a.batchId,MD(e,a)}catch(a){await Qd(e,a)}KS(e)&&QS(e)}function kD(n){return yo(n)&&n.Pa.length<10}function MD(n,e){n.Pa.push(e);const t=pa(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function KS(n){return yo(n)&&!pa(n).M_()&&n.Pa.length>0}function QS(n){pa(n).start()}async function OD(n){pa(n).na()}async function LD(n){const e=pa(n);for(const t of n.Pa)e.X_(t.mutations)}async function VD(n,e,t){const s=n.Pa.shift(),a=z_.from(s,e,t);await GS(n,(()=>n.remoteSyncer.applySuccessfulWrite(a))),await kf(n)}async function UD(n,e){e&&pa(n).Z_&&await(async function(s,a){if((function(c){return Ex(c)&&c!==ee.ABORTED})(a.code)){const l=s.Pa.shift();pa(s).N_(),await GS(s,(()=>s.remoteSyncer.rejectFailedWrite(l.batchId,a))),await kf(s)}})(n,e),KS(n)&&QS(n)}async function kT(n,e){const t=Ie(n);t.asyncQueue.verifyOperationInProgress(),fe(ao,"RemoteStore received new credentials");const s=yo(t);t.Ia.add(3),await kc(t),s&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Df(t)}async function BD(n,e){const t=Ie(n);e?(t.Ia.delete(2),await Df(t)):e||(t.Ia.add(2),await kc(t),t.Aa.set("Unknown"))}function Ul(n){return n.Va||(n.Va=(function(t,s,a){const l=Ie(t);return l.ia(),new wD(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(n.datastore,n.asyncQueue,{Zo:ND.bind(null,n),e_:PD.bind(null,n),n_:xD.bind(null,n),J_:DD.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),$_(n)?Y_(n):n.Aa.set("Unknown")):(await n.Va.stop(),HS(n))}))),n.Va}function pa(n){return n.ma||(n.ma=(function(t,s,a){const l=Ie(t);return l.ia(),new SD(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:OD.bind(null,n),n_:UD.bind(null,n),ea:LD.bind(null,n),ta:VD.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await kf(n)):(await n.ma.stop(),n.Pa.length>0&&(fe(ao,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
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
 */class X_{constructor(e,t,s,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=a,this.removalCallback=l,this.deferred=new ls,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,a,l){const c=Date.now()+s,f=new X_(e,t,c,a,l);return f.start(s),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new de(ee.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Z_(n,e){if($s("AsyncQueue",`${e}: ${n}`),Ll(n))return new de(ee.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class fl{static emptySet(e){return new fl(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||be.comparator(t.key,s.key):(t,s)=>be.comparator(t.key,s.key),this.keyedMap=tc(),this.sortedSet=new Wt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof fl)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new fl;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class MT{constructor(){this.fa=new Wt(be.comparator)}track(e){const t=e.doc.key,s=this.fa.get(t);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(t,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(t):e.type===1&&s.type===2?this.fa=this.fa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):Ce(63341,{At:e,ga:s}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Cl{constructor(e,t,s,a,l,c,f,m,g){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=f,this.excludesMetadataChanges=m,this.hasCachedResults=g}static fromInitialDocuments(e,t,s,a,l){const c=[];return t.forEach((f=>{c.push({type:0,doc:f})})),new Cl(e,t,fl.emptySet(t),c,s,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Af(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==s[a].type||!t[a].doc.isEqual(s[a].doc))return!1;return!0}}/**
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
 */class zD{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class jD{constructor(){this.queries=OT(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,s){const a=Ie(t),l=a.queries;a.queries=OT(),l.forEach(((c,f)=>{for(const m of f.wa)m.onError(s)}))})(this,new de(ee.ABORTED,"Firestore shutting down"))}}function OT(){return new _o((n=>fS(n)),Af)}async function J_(n,e){const t=Ie(n);let s=3;const a=e.query;let l=t.queries.get(a);l?!l.Sa()&&e.ba()&&(s=2):(l=new zD,s=e.ba()?0:1);try{switch(s){case 0:l.ya=await t.onListen(a,!0);break;case 1:l.ya=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(c){const f=Z_(c,`Initialization of query '${cl(e.query)}' failed`);return void e.onError(f)}t.queries.set(a,l),l.wa.push(e),e.va(t.onlineState),l.ya&&e.Ca(l.ya)&&ty(t)}async function ey(n,e){const t=Ie(n),s=e.query;let a=3;const l=t.queries.get(s);if(l){const c=l.wa.indexOf(e);c>=0&&(l.wa.splice(c,1),l.wa.length===0?a=e.ba()?0:1:!l.Sa()&&e.ba()&&(a=2))}switch(a){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function qD(n,e){const t=Ie(n);let s=!1;for(const a of e){const l=a.query,c=t.queries.get(l);if(c){for(const f of c.wa)f.Ca(a)&&(s=!0);c.ya=a}}s&&ty(t)}function FD(n,e,t){const s=Ie(n),a=s.queries.get(e);if(a)for(const l of a.wa)l.onError(t);s.queries.delete(e)}function ty(n){n.Da.forEach((e=>{e.next()}))}var Jg,LT;(LT=Jg||(Jg={})).Fa="default",LT.Cache="cache";class ny{constructor(e,t,s){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const a of e.docChanges)a.type!==3&&s.push(a);e=new Cl(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const s=t!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Cl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Jg.Cache}}/**
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
 */class WS{constructor(e){this.key=e}}class YS{constructor(e){this.key=e}}class HD{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Ge(),this.mutatedKeys=Ge(),this.Xa=pS(e),this.eu=new fl(this.Xa)}get tu(){return this.Ha}nu(e,t){const s=t?t.ru:new MT,a=t?t.eu:this.eu;let l=t?t.mutatedKeys:this.mutatedKeys,c=a,f=!1;const m=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal(((E,b)=>{const S=a.get(E),P=Cf(this.query,b)?b:null,V=!!S&&this.mutatedKeys.has(S.key),H=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let B=!1;S&&P?S.data.isEqual(P.data)?V!==H&&(s.track({type:3,doc:P}),B=!0):this.iu(S,P)||(s.track({type:2,doc:P}),B=!0,(m&&this.Xa(P,m)>0||g&&this.Xa(P,g)<0)&&(f=!0)):!S&&P?(s.track({type:0,doc:P}),B=!0):S&&!P&&(s.track({type:1,doc:S}),B=!0,(m||g)&&(f=!0)),B&&(P?(c=c.add(P),l=H?l.add(E):l.delete(E)):(c=c.delete(E),l=l.delete(E)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const E=this.query.limitType==="F"?c.last():c.first();c=c.delete(E.key),l=l.delete(E.key),s.track({type:1,doc:E})}return{eu:c,ru:s,Ds:f,mutatedKeys:l}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,a){const l=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const c=e.ru.pa();c.sort(((E,b)=>(function(P,V){const H=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ce(20277,{At:B})}};return H(P)-H(V)})(E.type,b.type)||this.Xa(E.doc,b.doc))),this.su(s),a=a!=null&&a;const f=t&&!a?this.ou():[],m=this.Za.size===0&&this.current&&!a?1:0,g=m!==this.Ya;return this.Ya=m,c.length!==0||g?{snapshot:new Cl(this.query,e.eu,l,c,e.mutatedKeys,m===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:f}:{_u:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new MT,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Ge(),this.eu.forEach((s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))}));const t=[];return e.forEach((s=>{this.Za.has(s)||t.push(new YS(s))})),this.Za.forEach((s=>{e.has(s)||t.push(new WS(s))})),t}uu(e){this.Ha=e.qs,this.Za=Ge();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Cl.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const iy="SyncEngine";class GD{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class KD{constructor(e){this.key=e,this.lu=!1}}class QD{constructor(e,t,s,a,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.hu={},this.Pu=new _o((f=>fS(f)),Af),this.Tu=new Map,this.Iu=new Set,this.du=new Wt(be.comparator),this.Eu=new Map,this.Au=new F_,this.Ru={},this.Vu=new Map,this.mu=Al.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function WD(n,e,t=!0){const s=tA(n);let a;const l=s.Pu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.cu()):a=await $S(s,e,t,!0),a}async function YD(n,e){const t=tA(n);await $S(t,e,!0,!1)}async function $S(n,e,t,s){const a=await mD(n.localStore,us(e)),l=a.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let f;return s&&(f=await $D(n,e,l,c==="current",a.resumeToken)),n.isPrimaryClient&&t&&qS(n.remoteStore,a),f}async function $D(n,e,t,s,a){n.gu=(b,S,P)=>(async function(H,B,re,oe){let le=B.view.nu(re);le.Ds&&(le=await IT(H.localStore,B.query,!1).then((({documents:M})=>B.view.nu(M,le))));const me=oe&&oe.targetChanges.get(B.targetId),Me=oe&&oe.targetMismatches.get(B.targetId)!=null,Ee=B.view.applyChanges(le,H.isPrimaryClient,me,Me);return UT(H,B.targetId,Ee._u),Ee.snapshot})(n,b,S,P);const l=await IT(n.localStore,e,!0),c=new HD(e,l.qs),f=c.nu(l.documents),m=Dc.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",a),g=c.applyChanges(f,n.isPrimaryClient,m);UT(n,t,g._u);const E=new GD(e,t,c);return n.Pu.set(e,E),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),g.snapshot}async function XD(n,e,t){const s=Ie(n),a=s.Pu.get(e),l=s.Tu.get(a.targetId);if(l.length>1)return s.Tu.set(a.targetId,l.filter((c=>!Af(c,e)))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(a.targetId),s.sharedClientState.isActiveQueryTarget(a.targetId)||await Xg(s.localStore,a.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(a.targetId),t&&Q_(s.remoteStore,a.targetId),e_(s,a.targetId)})).catch(Ol)):(e_(s,a.targetId),await Xg(s.localStore,a.targetId,!0))}async function ZD(n,e){const t=Ie(n),s=t.Pu.get(e),a=t.Tu.get(s.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Q_(t.remoteStore,s.targetId))}async function JD(n,e,t){const s=ak(n);try{const a=await(function(c,f){const m=Ie(c),g=gt.now(),E=f.reduce(((P,V)=>P.add(V.key)),Ge());let b,S;return m.persistence.runTransaction("Locally write mutations","readwrite",(P=>{let V=Xs(),H=Ge();return m.Os.getEntries(P,E).next((B=>{V=B,V.forEach(((re,oe)=>{oe.isValidDocument()||(H=H.add(re))}))})).next((()=>m.localDocuments.getOverlayedDocuments(P,V))).next((B=>{b=B;const re=[];for(const oe of f){const le=px(oe,b.get(oe.key).overlayedDocument);le!=null&&re.push(new Ea(oe.key,le,sS(le.value.mapValue),Bn.exists(!0)))}return m.mutationQueue.addMutationBatch(P,g,re,f)})).next((B=>{S=B;const re=B.applyToLocalDocumentSet(b,H);return m.documentOverlayCache.saveOverlays(P,B.batchId,re)}))})).then((()=>({batchId:S.batchId,changes:gS(b)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),(function(c,f,m){let g=c.Ru[c.currentUser.toKey()];g||(g=new Wt(Ve)),g=g.insert(f,m),c.Ru[c.currentUser.toKey()]=g})(s,a.batchId,t),await Mc(s,a.changes),await kf(s.remoteStore)}catch(a){const l=Z_(a,"Failed to persist write");t.reject(l)}}async function XS(n,e){const t=Ie(n);try{const s=await dD(t.localStore,e);e.targetChanges.forEach(((a,l)=>{const c=t.Eu.get(l);c&&(it(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?c.lu=!0:a.modifiedDocuments.size>0?it(c.lu,14607):a.removedDocuments.size>0&&(it(c.lu,42227),c.lu=!1))})),await Mc(t,s,e)}catch(s){await Ol(s)}}function VT(n,e,t){const s=Ie(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const a=[];s.Pu.forEach(((l,c)=>{const f=c.view.va(e);f.snapshot&&a.push(f.snapshot)})),(function(c,f){const m=Ie(c);m.onlineState=f;let g=!1;m.queries.forEach(((E,b)=>{for(const S of b.wa)S.va(f)&&(g=!0)})),g&&ty(m)})(s.eventManager,e),a.length&&s.hu.J_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function ek(n,e,t){const s=Ie(n);s.sharedClientState.updateQueryState(e,"rejected",t);const a=s.Eu.get(e),l=a&&a.key;if(l){let c=new Wt(be.comparator);c=c.insert(l,Sn.newNoDocument(l,xe.min()));const f=Ge().add(l),m=new Pf(xe.min(),new Map,new Wt(Ve),c,f);await XS(s,m),s.du=s.du.remove(l),s.Eu.delete(e),sy(s)}else await Xg(s.localStore,e,!1).then((()=>e_(s,e,t))).catch(Ol)}async function tk(n,e){const t=Ie(n),s=e.batch.batchId;try{const a=await hD(t.localStore,e);JS(t,s,null),ZS(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Mc(t,a)}catch(a){await Ol(a)}}async function nk(n,e,t){const s=Ie(n);try{const a=await(function(c,f){const m=Ie(c);return m.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let E;return m.mutationQueue.lookupMutationBatch(g,f).next((b=>(it(b!==null,37113),E=b.keys(),m.mutationQueue.removeMutationBatch(g,b)))).next((()=>m.mutationQueue.performConsistencyCheck(g))).next((()=>m.documentOverlayCache.removeOverlaysForBatchId(g,E,f))).next((()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,E))).next((()=>m.localDocuments.getDocuments(g,E)))}))})(s.localStore,e);JS(s,e,t),ZS(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Mc(s,a)}catch(a){await Ol(a)}}function ZS(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function JS(n,e,t){const s=Ie(n);let a=s.Ru[s.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),s.Ru[s.currentUser.toKey()]=a}}function e_(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Tu.get(e))n.Pu.delete(s),t&&n.hu.pu(s,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((s=>{n.Au.containsKey(s)||eA(n,s)}))}function eA(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Q_(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),sy(n))}function UT(n,e,t){for(const s of t)s instanceof WS?(n.Au.addReference(s.key,e),ik(n,s)):s instanceof YS?(fe(iy,"Document no longer in limbo: "+s.key),n.Au.removeReference(s.key,e),n.Au.containsKey(s.key)||eA(n,s.key)):Ce(19791,{yu:s})}function ik(n,e){const t=e.key,s=t.path.canonicalString();n.du.get(t)||n.Iu.has(s)||(fe(iy,"New document in limbo: "+t),n.Iu.add(s),sy(n))}function sy(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new be(_t.fromString(e)),s=n.mu.next();n.Eu.set(s,new KD(t)),n.du=n.du.insert(t,s),qS(n.remoteStore,new ta(us(Sf(t.path)),s,"TargetPurposeLimboResolution",Tf.ue))}}async function Mc(n,e,t){const s=Ie(n),a=[],l=[],c=[];s.Pu.isEmpty()||(s.Pu.forEach(((f,m)=>{c.push(s.gu(m,e,t).then((g=>{var E;if((g||t)&&s.isPrimaryClient){const b=g?!g.fromCache:(E=t?.targetChanges.get(m.targetId))===null||E===void 0?void 0:E.current;s.sharedClientState.updateQueryState(m.targetId,b?"current":"not-current")}if(g){a.push(g);const b=G_.Es(m.targetId,g);l.push(b)}})))})),await Promise.all(c),s.hu.J_(a),await(async function(m,g){const E=Ie(m);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(b=>ie.forEach(g,(S=>ie.forEach(S.Is,(P=>E.persistence.referenceDelegate.addReference(b,S.targetId,P))).next((()=>ie.forEach(S.ds,(P=>E.persistence.referenceDelegate.removeReference(b,S.targetId,P)))))))))}catch(b){if(!Ll(b))throw b;fe(K_,"Failed to update sequence numbers: "+b)}for(const b of g){const S=b.targetId;if(!b.fromCache){const P=E.Fs.get(S),V=P.snapshotVersion,H=P.withLastLimboFreeSnapshotVersion(V);E.Fs=E.Fs.insert(S,H)}}})(s.localStore,l))}async function sk(n,e){const t=Ie(n);if(!t.currentUser.isEqual(e)){fe(iy,"User change. New user:",e.toKey());const s=await US(t.localStore,e);t.currentUser=e,(function(l,c){l.Vu.forEach((f=>{f.forEach((m=>{m.reject(new de(ee.CANCELLED,c))}))})),l.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Mc(t,s.Bs)}}function rk(n,e){const t=Ie(n),s=t.Eu.get(e);if(s&&s.lu)return Ge().add(s.key);{let a=Ge();const l=t.Tu.get(e);if(!l)return a;for(const c of l){const f=t.Pu.get(c);a=a.unionWith(f.view.tu)}return a}}function tA(n){const e=Ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=XS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ek.bind(null,e),e.hu.J_=qD.bind(null,e.eventManager),e.hu.pu=FD.bind(null,e.eventManager),e}function ak(n){const e=Ie(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=tk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=nk.bind(null,e),e}class Wd{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=xf(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return cD(this.persistence,new oD,e.initialUser,this.serializer)}Du(e){return new VS(H_.Vi,this.serializer)}bu(e){return new _D}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Wd.provider={build:()=>new Wd};class ok extends Wd{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){it(this.persistence.referenceDelegate instanceof Kd,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new Kx(s,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?$n.withCacheSize(this.cacheSizeBytes):$n.DEFAULT;return new VS((s=>Kd.Vi(s,t)),this.serializer)}}class t_{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>VT(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=sk.bind(null,this.syncEngine),await BD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new jD})()}createDatastore(e){const t=xf(e.databaseInfo.databaseId),s=(function(l){return new bD(l)})(e.databaseInfo);return(function(l,c,f,m){return new CD(l,c,f,m)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,a,l,c,f){return new ID(s,a,l,c,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>VT(this.syncEngine,t,0)),(function(){return xT.C()?new xT:new yD})())}createSyncEngine(e,t){return(function(a,l,c,f,m,g,E){const b=new QD(a,l,c,f,m,g);return E&&(b.fu=!0),b})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(a){const l=Ie(a);fe(ao,"RemoteStore shutting down."),l.Ia.add(5),await kc(l),l.Ea.shutdown(),l.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}t_.provider={build:()=>new t_};/**
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
 */class ry{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):$s("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const ma="FirestoreClient";class lk{constructor(e,t,s,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=a,this.user=bn.UNAUTHENTICATED,this.clientId=D_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,(async c=>{fe(ma,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(s,(c=>(fe(ma,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ls;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Z_(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function fg(n,e){n.asyncQueue.verifyOperationInProgress(),fe(ma,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async a=>{s.isEqual(a)||(await US(e.localStore,a),s=a)})),e.persistence.setDatabaseDeletedListener((()=>{ua("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{fe("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((a=>{ua("Terminating Firestore due to IndexedDb database deletion failed",a)}))})),n._offlineComponents=e}async function BT(n,e){n.asyncQueue.verifyOperationInProgress();const t=await uk(n);fe(ma,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>kT(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,a)=>kT(e.remoteStore,a))),n._onlineComponents=e}async function uk(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){fe(ma,"Using user provided OfflineComponentProvider");try{await fg(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(a){return a.name==="FirebaseError"?a.code===ee.FAILED_PRECONDITION||a.code===ee.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11})(t))throw t;ua("Error using user provided cache. Falling back to memory cache: "+t),await fg(n,new Wd)}}else fe(ma,"Using default OfflineComponentProvider"),await fg(n,new ok(void 0));return n._offlineComponents}async function ay(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(fe(ma,"Using user provided OnlineComponentProvider"),await BT(n,n._uninitializedComponentsProvider._online)):(fe(ma,"Using default OnlineComponentProvider"),await BT(n,new t_))),n._onlineComponents}function ck(n){return ay(n).then((e=>e.syncEngine))}function hk(n){return ay(n).then((e=>e.datastore))}async function Yd(n){const e=await ay(n),t=e.eventManager;return t.onListen=WD.bind(null,e.syncEngine),t.onUnlisten=XD.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=YD.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=ZD.bind(null,e.syncEngine),t}function dk(n,e,t={}){const s=new ls;return n.asyncQueue.enqueueAndForget((async()=>(function(l,c,f,m,g){const E=new ry({next:S=>{E.Ou(),c.enqueueAndForget((()=>ey(l,b)));const P=S.docs.has(f);!P&&S.fromCache?g.reject(new de(ee.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&S.fromCache&&m&&m.source==="server"?g.reject(new de(ee.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(S)},error:S=>g.reject(S)}),b=new ny(Sf(f.path),E,{includeMetadataChanges:!0,ka:!0});return J_(l,b)})(await Yd(n),n.asyncQueue,e,t,s))),s.promise}function fk(n,e,t={}){const s=new ls;return n.asyncQueue.enqueueAndForget((async()=>(function(l,c,f,m,g){const E=new ry({next:S=>{E.Ou(),c.enqueueAndForget((()=>ey(l,b))),S.fromCache&&m.source==="server"?g.reject(new de(ee.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(S)},error:S=>g.reject(S)}),b=new ny(f,E,{includeMetadataChanges:!0,ka:!0});return J_(l,b)})(await Yd(n),n.asyncQueue,e,t,s))),s.promise}function pk(n,e,t){const s=new ls;return n.asyncQueue.enqueueAndForget((async()=>{try{const a=await hk(n);s.resolve((async function(c,f,m){var g;const E=Ie(c),{request:b,ft:S,parent:P}=kx(E.serializer,ex(f),m);E.connection.Qo||delete b.parent;const V=(await E.Jo("RunAggregationQuery",E.serializer.databaseId,P,b,1)).filter((B=>!!B.result));it(V.length===1,64727);const H=(g=V[0].result)===null||g===void 0?void 0:g.aggregateFields;return Object.keys(H).reduce(((B,re)=>(B[S[re]]=H[re],B)),{})})(a,e,t))}catch(a){s.reject(a)}})),s.promise}/**
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
 */function nA(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const zT=new Map;/**
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
 */const iA="firestore.googleapis.com",jT=!0;class qT{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new de(ee.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=iA,this.ssl=jT}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:jT;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=LS;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Hx)throw new de(ee.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}CP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nA((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),(function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new de(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new de(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new de(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,a){return s.timeoutSeconds===a.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Mf{constructor(e,t,s,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qT({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new de(ee.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new de(ee.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qT(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new _P;switch(s.type){case"firstParty":return new TP(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new de(ee.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=zT.get(t);s&&(fe("ComponentProvider","Removing Datastore"),zT.delete(t),s.terminate())})(this),Promise.resolve()}}function mk(n,e,t,s={}){var a;n=Rn(n,Mf);const l=_a(e),c=n._getSettings(),f=Object.assign(Object.assign({},c),{emulatorOptions:n._getEmulatorOptions()}),m=`${e}:${t}`;l&&(C_(`https://${m}`),R_("Firestore",!0)),c.host!==iA&&c.host!==m&&ua("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g=Object.assign(Object.assign({},c),{host:m,ssl:l,emulatorOptions:s});if(!qi(g,f)&&(n._setSettings(g),s.mockUserToken)){let E,b;if(typeof s.mockUserToken=="string")E=s.mockUserToken,b=bn.MOCK_USER;else{E=Cw(s.mockUserToken,(a=n._app)===null||a===void 0?void 0:a.options.projectId);const S=s.mockUserToken.sub||s.mockUserToken.user_id;if(!S)throw new de(ee.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");b=new bn(S)}n._authCredentials=new yP(new Gw(E,b))}}/**
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
 */class ir{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ir(this.firestore,e,this._query)}}class Dt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new oa(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Dt(this.firestore,e,this._key)}toJSON(){return{type:Dt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Pc(t,Dt._jsonSchema))return new Dt(e,s||null,new be(_t.fromString(t.referencePath)))}}Dt._jsonSchemaVersion="firestore/documentReference/1.0",Dt._jsonSchema={type:Qt("string",Dt._jsonSchemaVersion),referencePath:Qt("string")};class oa extends ir{constructor(e,t,s){super(e,t,Sf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Dt(this.firestore,null,new be(e))}withConverter(e){return new oa(this.firestore,e,this._path)}}function wn(n,e,...t){if(n=st(n),Qw("collection","path",e),n instanceof Mf){const s=_t.fromString(e,...t);return tT(s),new oa(n,null,s)}{if(!(n instanceof Dt||n instanceof oa))throw new de(ee.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(_t.fromString(e,...t));return tT(s),new oa(n.firestore,null,s)}}function tt(n,e,...t){if(n=st(n),arguments.length===1&&(e=D_.newId()),Qw("doc","path",e),n instanceof Mf){const s=_t.fromString(e,...t);return eT(s),new Dt(n,null,new be(s))}{if(!(n instanceof Dt||n instanceof oa))throw new de(ee.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(_t.fromString(e,...t));return eT(s),new Dt(n.firestore,n instanceof oa?n.converter:null,new be(s))}}/**
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
 */const FT="AsyncQueue";class HT{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new zS(this,"async_queue_retry"),this.oc=()=>{const s=dg();s&&fe(FT,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const t=dg();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=dg();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new ls;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Ll(e))throw e;fe(FT,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((s=>{throw this.tc=s,this.nc=!1,$s("INTERNAL UNHANDLED ERROR: ",GT(s)),s})).then((s=>(this.nc=!1,s))))));return this._c=t,t}enqueueAfterDelay(e,t,s){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const a=X_.createAndSchedule(this,e,t,s,(l=>this.lc(l)));return this.ec.push(a),a}ac(){this.tc&&Ce(47125,{hc:GT(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function GT(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function KT(n){return(function(t,s){if(typeof t!="object"||t===null)return!1;const a=t;for(const l of s)if(l in a&&typeof a[l]=="function")return!0;return!1})(n,["next","error","complete"])}class Gi extends Mf{constructor(e,t,s,a){super(e,t,s,a),this.type="firestore",this._queue=new HT,this._persistenceKey=a?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new HT(e),this._firestoreClient=void 0,await e}}}function gk(n,e){const t=typeof n=="object"?n:Nc(),s=typeof n=="string"?n:zd,a=ya(t,"firestore").getImmediate({identifier:s});if(!a._initialized){const l=ww("firestore");l&&mk(a,...l)}return a}function Bl(n){if(n._terminated)throw new de(ee.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||_k(n),n._firestoreClient}function _k(n){var e,t,s;const a=n._freezeSettings(),l=(function(f,m,g,E){return new BP(f,m,g,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,nA(E.experimentalLongPollingOptions),E.useFetchStreams,E.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,a);n._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=a.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),n._firestoreClient=new lk(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&(function(f){const m=f?._online.build();return{_offline:f?._offline.build(m),_online:m}})(n._componentsProvider))}/**
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
 */class yk{constructor(e="count",t){this._internalFieldPath=t,this.type="AggregateField",this.aggregateType=e}}class vk{constructor(e,t,s){this._userDataWriter=t,this._data=s,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
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
 */class Ai{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ai(_n.fromBase64String(e))}catch(t){throw new de(ee.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ai(_n.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ai._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Pc(e,Ai._jsonSchema))return Ai.fromBase64String(e.bytes)}}Ai._jsonSchemaVersion="firestore/bytes/1.0",Ai._jsonSchema={type:Qt("string",Ai._jsonSchemaVersion),bytes:Qt("string")};/**
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
 */class Oc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new de(ee.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class zl{constructor(e){this._methodName=e}}/**
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
 */class hs{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new de(ee.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new de(ee.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ve(this._lat,e._lat)||Ve(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:hs._jsonSchemaVersion}}static fromJSON(e){if(Pc(e,hs._jsonSchema))return new hs(e.latitude,e.longitude)}}hs._jsonSchemaVersion="firestore/geoPoint/1.0",hs._jsonSchema={type:Qt("string",hs._jsonSchemaVersion),latitude:Qt("number"),longitude:Qt("number")};/**
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
 */class ds{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,a){if(s.length!==a.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==a[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:ds._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Pc(e,ds._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new ds(e.vectorValues);throw new de(ee.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ds._jsonSchemaVersion="firestore/vectorValue/1.0",ds._jsonSchema={type:Qt("string",ds._jsonSchemaVersion),vectorValues:Qt("object")};/**
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
 */const Ek=/^__.*__$/;class Tk{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Ea(e,this.data,this.fieldMask,t,this.fieldTransforms):new xc(e,this.data,t,this.fieldTransforms)}}class sA{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Ea(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function rA(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ce(40011,{Ec:n})}}class Of{constructor(e,t,s,a,l,c){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=a,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Of(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.Rc({path:s,mc:!1});return a.fc(e),a}gc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.Rc({path:s,mc:!1});return a.Ac(),a}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return $d(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(rA(this.Ec)&&Ek.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class bk{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||xf(e)}Dc(e,t,s,a=!1){return new Of({Ec:e,methodName:t,bc:s,path:gn.emptyPath(),mc:!1,Sc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Lc(n){const e=n._freezeSettings(),t=xf(n._databaseId);return new bk(n._databaseId,!!e.ignoreUndefinedProperties,t)}function oy(n,e,t,s,a,l={}){const c=n.Dc(l.merge||l.mergeFields?2:0,e,t,a);hy("Data must be an object, but it was:",c,s);const f=uA(s,c);let m,g;if(l.merge)m=new hi(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const E=[];for(const b of l.mergeFields){const S=n_(e,b,t);if(!c.contains(S))throw new de(ee.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);hA(E,S)||E.push(S)}m=new hi(E),g=c.fieldTransforms.filter((b=>m.covers(b.field)))}else m=null,g=c.fieldTransforms;return new Tk(new Xn(f),m,g)}class Lf extends zl{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Lf}}function aA(n,e,t){return new Of({Ec:3,bc:e.settings.bc,methodName:n._methodName,mc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class ly extends zl{_toFieldTransform(e){return new B_(e.path,new wc)}isEqual(e){return e instanceof ly}}class uy extends zl{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=aA(this,e,!0),s=this.vc.map((l=>vo(l,t))),a=new wl(s);return new B_(e.path,a)}isEqual(e){return e instanceof uy&&qi(this.vc,e.vc)}}class cy extends zl{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=aA(this,e,!0),s=this.vc.map((l=>vo(l,t))),a=new Sl(s);return new B_(e.path,a)}isEqual(e){return e instanceof cy&&qi(this.vc,e.vc)}}function oA(n,e,t,s){const a=n.Dc(1,e,t);hy("Data must be an object, but it was:",a,s);const l=[],c=Xn.empty();va(s,((m,g)=>{const E=dy(e,m,t);g=st(g);const b=a.gc(E);if(g instanceof Lf)l.push(E);else{const S=vo(g,b);S!=null&&(l.push(E),c.set(E,S))}}));const f=new hi(l);return new sA(c,f,a.fieldTransforms)}function lA(n,e,t,s,a,l){const c=n.Dc(1,e,t),f=[n_(e,s,t)],m=[a];if(l.length%2!=0)throw new de(ee.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let S=0;S<l.length;S+=2)f.push(n_(e,l[S])),m.push(l[S+1]);const g=[],E=Xn.empty();for(let S=f.length-1;S>=0;--S)if(!hA(g,f[S])){const P=f[S];let V=m[S];V=st(V);const H=c.gc(P);if(V instanceof Lf)g.push(P);else{const B=vo(V,H);B!=null&&(g.push(P),E.set(P,B))}}const b=new hi(g);return new sA(E,b,c.fieldTransforms)}function wk(n,e,t,s=!1){return vo(t,n.Dc(s?4:3,e))}function vo(n,e){if(cA(n=st(n)))return hy("Unsupported field value:",e,n),uA(n,e);if(n instanceof zl)return(function(s,a){if(!rA(a.Ec))throw a.wc(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.wc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(a);l&&a.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(s,a){const l=[];let c=0;for(const f of s){let m=vo(f,a.yc(c));m==null&&(m={nullValue:"NULL_VALUE"}),l.push(m),c++}return{arrayValue:{values:l}}})(n,e)}return(function(s,a){if((s=st(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return lx(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=gt.fromDate(s);return{timestampValue:Gd(a.serializer,l)}}if(s instanceof gt){const l=new gt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Gd(a.serializer,l)}}if(s instanceof hs)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Ai)return{bytesValue:IS(a.serializer,s._byteString)};if(s instanceof Dt){const l=a.databaseId,c=s.firestore._databaseId;if(!c.isEqual(l))throw a.wc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:q_(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof ds)return(function(c,f){return{mapValue:{fields:{[nS]:{stringValue:iS},[jd]:{arrayValue:{values:c.toArray().map((g=>{if(typeof g!="number")throw f.wc("VectorValues must only contain numeric values.");return U_(f.serializer,g)}))}}}}}})(s,a);throw a.wc(`Unsupported field value: ${Ef(s)}`)})(n,e)}function uA(n,e){const t={};return $w(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):va(n,((s,a)=>{const l=vo(a,e.Vc(s));l!=null&&(t[s]=l)})),{mapValue:{fields:t}}}function cA(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof gt||n instanceof hs||n instanceof Ai||n instanceof Dt||n instanceof zl||n instanceof ds)}function hy(n,e,t){if(!cA(t)||!Ww(t)){const s=Ef(t);throw s==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+s)}}function n_(n,e,t){if((e=st(e))instanceof Oc)return e._internalPath;if(typeof e=="string")return dy(n,e);throw $d("Field path arguments must be of type string or ",n,!1,void 0,t)}const Sk=new RegExp("[~\\*/\\[\\]]");function dy(n,e,t){if(e.search(Sk)>=0)throw $d(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Oc(...e.split("."))._internalPath}catch{throw $d(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function $d(n,e,t,s,a){const l=s&&!s.isEmpty(),c=a!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let m="";return(l||c)&&(m+=" (found",l&&(m+=` in field ${s}`),c&&(m+=` in document ${a}`),m+=")"),new de(ee.INVALID_ARGUMENT,f+n+m)}function hA(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class dA{constructor(e,t,s,a,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ak(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Vf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Ak extends dA{data(){return super.data()}}function Vf(n,e){return typeof e=="string"?dy(n,e):e instanceof Oc?e._internalPath:e._delegate._internalPath}/**
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
 */function fA(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new de(ee.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fy{}class py extends fy{}function Rl(n,e,...t){let s=[];e instanceof fy&&s.push(e),s=s.concat(t),(function(l){const c=l.filter((m=>m instanceof my)).length,f=l.filter((m=>m instanceof Uf)).length;if(c>1||c>0&&f>0)throw new de(ee.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const a of s)n=a._apply(n);return n}class Uf extends py{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Uf(e,t,s)}_apply(e){const t=this._parse(e);return pA(e._query,t),new ir(e.firestore,e.converter,Kg(e._query,t))}_parse(e){const t=Lc(e.firestore);return(function(l,c,f,m,g,E,b){let S;if(g.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new de(ee.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){YT(b,E);const V=[];for(const H of b)V.push(WT(m,l,H));S={arrayValue:{values:V}}}else S=WT(m,l,b)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||YT(b,E),S=wk(f,c,b,E==="in"||E==="not-in");return Kt.create(g,E,S)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function QT(n,e,t){const s=e,a=Vf("where",n);return Uf._create(a,s,t)}class my extends fy{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new my(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:Hi.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(a,l){let c=a;const f=l.getFlattenedFilters();for(const m of f)pA(c,m),c=Kg(c,m)})(e._query,t),new ir(e.firestore,e.converter,Kg(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class gy extends py{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new gy(e,t)}_apply(e){const t=(function(a,l,c){if(a.startAt!==null)throw new de(ee.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new de(ee.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new bc(l,c)})(e._query,this._field,this._direction);return new ir(e.firestore,e.converter,(function(a,l){const c=a.explicitOrderBy.concat([l]);return new Vl(a.path,a.collectionGroup,c,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)})(e._query,t))}}function i_(n,e="asc"){const t=e,s=Vf("orderBy",n);return gy._create(s,t)}class _y extends py{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new _y(e,t,s)}_apply(e){return new ir(e.firestore,e.converter,Fd(e._query,this._limit,this._limitType))}}function cV(n){return RP("limit",n),_y._create("limit",n,"F")}function WT(n,e,t){if(typeof(t=st(t))=="string"){if(t==="")throw new de(ee.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!hS(e)&&t.indexOf("/")!==-1)throw new de(ee.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(_t.fromString(t));if(!be.isDocumentKey(s))throw new de(ee.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return uT(n,new be(s))}if(t instanceof Dt)return uT(n,t._key);throw new de(ee.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ef(t)}.`)}function YT(n,e){if(!Array.isArray(n)||n.length===0)throw new de(ee.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function pA(n,e){const t=(function(a,l){for(const c of a)for(const f of c.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null})(n.filters,(function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new de(ee.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new de(ee.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Ck{convertValue(e,t="none"){switch(fa(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Lt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(da(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ce(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return va(e,((a,l)=>{s[a]=this.convertValue(l,t)})),s}convertVectorValue(e){var t,s,a;const l=(a=(s=(t=e.fields)===null||t===void 0?void 0:t[jd].arrayValue)===null||s===void 0?void 0:s.values)===null||a===void 0?void 0:a.map((c=>Lt(c.doubleValue)));return new ds(l)}convertGeoPoint(e){return new hs(Lt(e.latitude),Lt(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=wf(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(vc(e));default:return null}}convertTimestamp(e){const t=ha(e);return new gt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=_t.fromString(e);it(OS(s),9688,{name:e});const a=new Ec(s.get(1),s.get(3)),l=new be(s.popFirst(5));return a.isEqual(t)||$s(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function yy(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}function Rk(){return new yk("count")}class ic{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class io extends dA{constructor(e,t,s,a,l,c){super(e,t,s,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Pd(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Vf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new de(ee.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=io._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}io._jsonSchemaVersion="firestore/documentSnapshot/1.0",io._jsonSchema={type:Qt("string",io._jsonSchemaVersion),bundleSource:Qt("string","DocumentSnapshot"),bundleName:Qt("string"),bundle:Qt("string")};class Pd extends io{data(e={}){return super.data(e)}}class so{constructor(e,t,s,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new ic(a.hasPendingWrites,a.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Pd(this._firestore,this._userDataWriter,s.key,s,new ic(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new de(ee.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(a,l){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map((f=>{const m=new Pd(a._firestore,a._userDataWriter,f.doc.key,f.doc,new ic(a._snapshot.mutatedKeys.has(f.doc.key),a._snapshot.fromCache),a.query.converter);return f.doc,{type:"added",doc:m,oldIndex:-1,newIndex:c++}}))}{let c=a._snapshot.oldDocs;return a._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const m=new Pd(a._firestore,a._userDataWriter,f.doc.key,f.doc,new ic(a._snapshot.mutatedKeys.has(f.doc.key),a._snapshot.fromCache),a.query.converter);let g=-1,E=-1;return f.type!==0&&(g=c.indexOf(f.doc.key),c=c.delete(f.doc.key)),f.type!==1&&(c=c.add(f.doc),E=c.indexOf(f.doc.key)),{type:Ik(f.type),doc:m,oldIndex:g,newIndex:E}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new de(ee.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=so._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=D_.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],a=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),a.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Ik(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ce(61501,{type:n})}}/**
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
 */function Il(n){n=Rn(n,Dt);const e=Rn(n.firestore,Gi);return dk(Bl(e),n._key).then((t=>gA(e,n,t)))}so._jsonSchemaVersion="firestore/querySnapshot/1.0",so._jsonSchema={type:Qt("string",so._jsonSchemaVersion),bundleSource:Qt("string","QuerySnapshot"),bundleName:Qt("string"),bundle:Qt("string")};class Bf extends Ck{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ai(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Dt(this.firestore,null,t)}}function pg(n){n=Rn(n,ir);const e=Rn(n.firestore,Gi),t=Bl(e),s=new Bf(e);return fA(n._query),fk(t,n._query).then((a=>new so(e,s,n,a)))}function Xd(n,e,t){n=Rn(n,Dt);const s=Rn(n.firestore,Gi),a=yy(n.converter,e,t);return Vc(s,[oy(Lc(s),"setDoc",n._key,a,n.converter!==null,t).toMutation(n._key,Bn.none())])}function Vt(n,e,t,...s){n=Rn(n,Dt);const a=Rn(n.firestore,Gi),l=Lc(a);let c;return c=typeof(e=st(e))=="string"||e instanceof Oc?lA(l,"updateDoc",n._key,e,t,s):oA(l,"updateDoc",n._key,e),Vc(a,[c.toMutation(n._key,Bn.exists(!0))])}function mA(n){return Vc(Rn(n.firestore,Gi),[new Nf(n._key,Bn.none())])}function na(n,e){const t=Rn(n.firestore,Gi),s=tt(n),a=yy(n.converter,e);return Vc(t,[oy(Lc(n.firestore),"addDoc",s._key,a,n.converter!==null,{}).toMutation(s._key,Bn.exists(!1))]).then((()=>s))}function Zd(n,...e){var t,s,a;n=st(n);let l={includeMetadataChanges:!1,source:"default"},c=0;typeof e[c]!="object"||KT(e[c])||(l=e[c++]);const f={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(KT(e[c])){const b=e[c];e[c]=(t=b.next)===null||t===void 0?void 0:t.bind(b),e[c+1]=(s=b.error)===null||s===void 0?void 0:s.bind(b),e[c+2]=(a=b.complete)===null||a===void 0?void 0:a.bind(b)}let m,g,E;if(n instanceof Dt)g=Rn(n.firestore,Gi),E=Sf(n._key.path),m={next:b=>{e[c]&&e[c](gA(g,n,b))},error:e[c+1],complete:e[c+2]};else{const b=Rn(n,ir);g=Rn(b.firestore,Gi),E=b._query;const S=new Bf(g);m={next:P=>{e[c]&&e[c](new so(g,S,b,P))},error:e[c+1],complete:e[c+2]},fA(n._query)}return(function(S,P,V,H){const B=new ry(H),re=new ny(P,B,V);return S.asyncQueue.enqueueAndForget((async()=>J_(await Yd(S),re))),()=>{B.Ou(),S.asyncQueue.enqueueAndForget((async()=>ey(await Yd(S),re)))}})(Bl(g),E,f,m)}function Vc(n,e){return(function(s,a){const l=new ls;return s.asyncQueue.enqueueAndForget((async()=>JD(await ck(s),a,l))),l.promise})(Bl(n),e)}function gA(n,e,t){const s=t.docs.get(e._key),a=new Bf(n);return new io(n,a,e._key,s,new ic(t.hasPendingWrites,t.fromCache),e.converter)}function Nk(n){return Pk(n,{count:Rk()})}function Pk(n,e){const t=Rn(n.firestore,Gi),s=Bl(t),a=VP(e,((l,c)=>new yx(c,l.aggregateType,l._internalFieldPath)));return pk(s,n._query,a).then((l=>(function(f,m,g){const E=new Bf(f);return new vk(m,E,g)})(t,n,l)))}/**
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
 */class xk{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Lc(e)}set(e,t,s){this._verifyNotCommitted();const a=mg(e,this._firestore),l=yy(a.converter,t,s),c=oy(this._dataReader,"WriteBatch.set",a._key,l,a.converter!==null,s);return this._mutations.push(c.toMutation(a._key,Bn.none())),this}update(e,t,s,...a){this._verifyNotCommitted();const l=mg(e,this._firestore);let c;return c=typeof(t=st(t))=="string"||t instanceof Oc?lA(this._dataReader,"WriteBatch.update",l._key,t,s,a):oA(this._dataReader,"WriteBatch.update",l._key,t),this._mutations.push(c.toMutation(l._key,Bn.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=mg(e,this._firestore);return this._mutations=this._mutations.concat(new Nf(t._key,Bn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new de(ee.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function mg(n,e){if((n=st(n)).firestore!==e)throw new de(ee.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function gg(){return new ly("serverTimestamp")}function Sc(...n){return new uy("arrayUnion",n)}function vy(...n){return new cy("arrayRemove",n)}/**
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
 */function Dk(n){return Bl(n=Rn(n,Gi)),new xk(n,(e=>Vc(n,e)))}(function(e,t=!0){(function(a){Ml=a})(go),Fi(new Ri("firestore",((s,{instanceIdentifier:a,options:l})=>{const c=s.getProvider("app").getImmediate(),f=new Gi(new vP(s.getProvider("auth-internal")),new bP(c,s.getProvider("app-check-internal")),(function(g,E){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new de(ee.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ec(g.options.projectId,E)})(c,a),c);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),Jn(YE,$E,e),Jn(YE,$E,"esm2017")})();function Ey(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(n);a<s.length;a++)e.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(n,s[a])&&(t[s[a]]=n[s[a]]);return t}function _A(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kk=_A,yA=new mo("auth","Firebase",_A());/**
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
 */const Jd=new Ic("@firebase/auth");function Mk(n,...e){Jd.logLevel<=je.WARN&&Jd.warn(`Auth (${go}): ${n}`,...e)}function xd(n,...e){Jd.logLevel<=je.ERROR&&Jd.error(`Auth (${go}): ${n}`,...e)}/**
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
 */function Ii(n,...e){throw by(n,...e)}function zi(n,...e){return by(n,...e)}function Ty(n,e,t){const s=Object.assign(Object.assign({},kk()),{[e]:t});return new mo("auth","Firebase",s).create(e,{appName:n.name})}function fs(n){return Ty(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ok(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Ii(n,"argument-error"),Ty(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function by(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return yA.create(n,...e)}function Ae(n,e,...t){if(!n)throw by(e,...t)}function Gs(n){const e="INTERNAL ASSERTION FAILED: "+n;throw xd(e),new Error(e)}function Zs(n,e){n||Gs(e)}/**
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
 */function s_(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Lk(){return $T()==="http:"||$T()==="https:"}function $T(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Vk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Lk()||Rw()||"connection"in navigator)?navigator.onLine:!0}function Uk(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Uc{constructor(e,t){this.shortDelay=e,this.longDelay=t,Zs(t>e,"Short delay should be less than long delay!"),this.isMobile=I_()||Iw()}get(){return Vk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function wy(n,e){Zs(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class vA{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Gs("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Gs("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Gs("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Bk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const zk=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],jk=new Uc(3e4,6e4);function sr(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function gs(n,e,t,s,a={}){return EA(n,a,async()=>{let l={},c={};s&&(e==="GET"?c=s:l={body:JSON.stringify(s)});const f=kl(Object.assign({key:n.config.apiKey},c)).slice(1),m=await n._getAdditionalHeaders();m["Content-Type"]="application/json",n.languageCode&&(m["X-Firebase-Locale"]=n.languageCode);const g=Object.assign({method:e,headers:m},l);return qI()||(g.referrerPolicy="no-referrer"),n.emulatorConfig&&_a(n.emulatorConfig.host)&&(g.credentials="include"),vA.fetch()(await TA(n,n.config.apiHost,t,f),g)})}async function EA(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},Bk),e);try{const a=new Fk(n),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw bd(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const f=l.ok?c.errorMessage:c.error.message,[m,g]=f.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw bd(n,"credential-already-in-use",c);if(m==="EMAIL_EXISTS")throw bd(n,"email-already-in-use",c);if(m==="USER_DISABLED")throw bd(n,"user-disabled",c);const E=s[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Ty(n,E,g);Ii(n,E)}}catch(a){if(a instanceof Ki)throw a;Ii(n,"network-request-failed",{message:String(a)})}}async function Bc(n,e,t,s,a={}){const l=await gs(n,e,t,s,a);return"mfaPendingCredential"in l&&Ii(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function TA(n,e,t,s){const a=`${e}${t}?${s}`,l=n,c=l.config.emulator?wy(n.config,a):`${n.config.apiScheme}://${a}`;return zk.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}function qk(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Fk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(zi(this.auth,"network-request-failed")),jk.get())})}}function bd(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const a=zi(n,e,s);return a.customData._tokenResponse=t,a}function XT(n){return n!==void 0&&n.enterprise!==void 0}class Hk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return qk(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Gk(n,e){return gs(n,"GET","/v2/recaptchaConfig",sr(n,e))}/**
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
 */async function Kk(n,e){return gs(n,"POST","/v1/accounts:delete",e)}async function ef(n,e){return gs(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function uc(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Qk(n,e=!1){const t=st(n),s=await t.getIdToken(e),a=Sy(s);Ae(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l?.sign_in_provider;return{claims:a,token:s,authTime:uc(_g(a.auth_time)),issuedAtTime:uc(_g(a.iat)),expirationTime:uc(_g(a.exp)),signInProvider:c||null,signInSecondFactor:l?.sign_in_second_factor||null}}function _g(n){return Number(n)*1e3}function Sy(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return xd("JWT malformed, contained fewer than 3 sections"),null;try{const a=Vd(t);return a?JSON.parse(a):(xd("Failed to decode base64 JWT payload"),null)}catch(a){return xd("Caught error parsing JWT payload as JSON",a?.toString()),null}}function ZT(n){const e=Sy(n);return Ae(e,"internal-error"),Ae(typeof e.exp<"u","internal-error"),Ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Nl(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Ki&&Wk(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function Wk({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Yk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class r_{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=uc(this.lastLoginAt),this.creationTime=uc(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function tf(n){var e;const t=n.auth,s=await n.getIdToken(),a=await Nl(n,ef(t,{idToken:s}));Ae(a?.users.length,t,"internal-error");const l=a.users[0];n._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?bA(l.providerUserInfo):[],f=Xk(n.providerData,c),m=n.isAnonymous,g=!(n.email&&l.passwordHash)&&!f?.length,E=m?g:!1,b={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new r_(l.createdAt,l.lastLoginAt),isAnonymous:E};Object.assign(n,b)}async function $k(n){const e=st(n);await tf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Xk(n,e){return[...n.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function bA(n){return n.map(e=>{var{providerId:t}=e,s=Ey(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Zk(n,e){const t=await EA(n,{},async()=>{const s=kl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=n.config,c=await TA(n,a,"/v1/token",`key=${l}`),f=await n._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:f,body:s};return n.emulatorConfig&&_a(n.emulatorConfig.host)&&(m.credentials="include"),vA.fetch()(c,m)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Jk(n,e){return gs(n,"POST","/v2/accounts:revokeToken",sr(n,e))}/**
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
 */class pl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ae(e.idToken,"internal-error"),Ae(typeof e.idToken<"u","internal-error"),Ae(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ZT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ae(e.length!==0,"internal-error");const t=ZT(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:a,expiresIn:l}=await Zk(e,t);this.updateTokensAndExpiration(s,a,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:a,expirationTime:l}=t,c=new pl;return s&&(Ae(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),a&&(Ae(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(Ae(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pl,this.toJSON())}_performRefresh(){return Gs("not implemented")}}/**
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
 */function Yr(n,e){Ae(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ui{constructor(e){var{uid:t,auth:s,stsTokenManager:a}=e,l=Ey(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Yk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new r_(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Nl(this,this.stsTokenManager.getToken(this.auth,e));return Ae(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Qk(this,e)}reload(){return $k(this)}_assign(e){this!==e&&(Ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ui(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await tf(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Un(this.auth.app))return Promise.reject(fs(this.auth));const e=await this.getIdToken();return await Nl(this,Kk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,a,l,c,f,m,g,E;const b=(s=t.displayName)!==null&&s!==void 0?s:void 0,S=(a=t.email)!==null&&a!==void 0?a:void 0,P=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,V=(c=t.photoURL)!==null&&c!==void 0?c:void 0,H=(f=t.tenantId)!==null&&f!==void 0?f:void 0,B=(m=t._redirectEventId)!==null&&m!==void 0?m:void 0,re=(g=t.createdAt)!==null&&g!==void 0?g:void 0,oe=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:le,emailVerified:me,isAnonymous:Me,providerData:Ee,stsTokenManager:M}=t;Ae(le&&M,e,"internal-error");const C=pl.fromJSON(this.name,M);Ae(typeof le=="string",e,"internal-error"),Yr(b,e.name),Yr(S,e.name),Ae(typeof me=="boolean",e,"internal-error"),Ae(typeof Me=="boolean",e,"internal-error"),Yr(P,e.name),Yr(V,e.name),Yr(H,e.name),Yr(B,e.name),Yr(re,e.name),Yr(oe,e.name);const I=new Ui({uid:le,auth:e,email:S,emailVerified:me,displayName:b,isAnonymous:Me,photoURL:V,phoneNumber:P,tenantId:H,stsTokenManager:C,createdAt:re,lastLoginAt:oe});return Ee&&Array.isArray(Ee)&&(I.providerData=Ee.map(O=>Object.assign({},O))),B&&(I._redirectEventId=B),I}static async _fromIdTokenResponse(e,t,s=!1){const a=new pl;a.updateFromServerResponse(t);const l=new Ui({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await tf(l),l}static async _fromGetAccountInfoResponse(e,t,s){const a=t.users[0];Ae(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?bA(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!l?.length,f=new pl;f.updateFromIdToken(s);const m=new Ui({uid:a.localId,auth:e,stsTokenManager:f,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new r_(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!l?.length};return Object.assign(m,g),m}}/**
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
 */const JT=new Map;function Ks(n){Zs(n instanceof Function,"Expected a class definition");let e=JT.get(n);return e?(Zs(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,JT.set(n,e),e)}/**
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
 */class wA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}wA.type="NONE";const eb=wA;/**
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
 */function Dd(n,e,t){return`firebase:${n}:${e}:${t}`}class ml{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:a,name:l}=this.auth;this.fullUserKey=Dd(this.userKey,a.apiKey,l),this.fullPersistenceKey=Dd("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ef(this.auth,{idToken:e}).catch(()=>{});return t?Ui._fromGetAccountInfoResponse(this.auth,t,e):null}return Ui._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new ml(Ks(eb),e,s);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||Ks(eb);const c=Dd(s,e.config.apiKey,e.name);let f=null;for(const g of t)try{const E=await g._get(c);if(E){let b;if(typeof E=="string"){const S=await ef(e,{idToken:E}).catch(()=>{});if(!S)break;b=await Ui._fromGetAccountInfoResponse(e,S,E)}else b=Ui._fromJSON(e,E);g!==l&&(f=b),l=g;break}}catch{}const m=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!m.length?new ml(l,e,s):(l=m[0],f&&await l._set(c,f.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new ml(l,e,s))}}/**
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
 */function tb(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(RA(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(SA(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(NA(e))return"Blackberry";if(PA(e))return"Webos";if(AA(e))return"Safari";if((e.includes("chrome/")||CA(e))&&!e.includes("edge/"))return"Chrome";if(IA(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if(s?.length===2)return s[1]}return"Other"}function SA(n=In()){return/firefox\//i.test(n)}function AA(n=In()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function CA(n=In()){return/crios\//i.test(n)}function RA(n=In()){return/iemobile/i.test(n)}function IA(n=In()){return/android/i.test(n)}function NA(n=In()){return/blackberry/i.test(n)}function PA(n=In()){return/webos/i.test(n)}function Ay(n=In()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function eM(n=In()){var e;return Ay(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tM(){return FI()&&document.documentMode===10}function xA(n=In()){return Ay(n)||IA(n)||PA(n)||NA(n)||/windows phone/i.test(n)||RA(n)}/**
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
 */function DA(n,e=[]){let t;switch(n){case"Browser":t=tb(In());break;case"Worker":t=`${tb(In())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${go}/${s}`}/**
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
 */class nM{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((c,f)=>{try{const m=e(l);c(m)}catch(m){f(m)}});s.onAbort=t,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function iM(n,e={}){return gs(n,"GET","/v2/passwordPolicy",sr(n,e))}/**
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
 */const sM=6;class rM{constructor(e){var t,s,a,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:sM,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,a,l,c,f;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,m),this.validatePasswordCharacterOptions(e,m),m.isValid&&(m.isValid=(t=m.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),m.isValid&&(m.isValid=(s=m.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),m.isValid&&(m.isValid=(a=m.containsLowercaseLetter)!==null&&a!==void 0?a:!0),m.isValid&&(m.isValid=(l=m.containsUppercaseLetter)!==null&&l!==void 0?l:!0),m.isValid&&(m.isValid=(c=m.containsNumericCharacter)!==null&&c!==void 0?c:!0),m.isValid&&(m.isValid=(f=m.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),m}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class aM{constructor(e,t,s,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nb(this),this.idTokenSubscription=new nb(this),this.beforeStateQueue=new nM(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ks(t)),this._initializationPromise=this.queue(async()=>{var s,a,l;if(!this._deleted&&(this.persistenceManager=await ml.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ef(this,{idToken:e}),s=await Ui._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Un(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let a=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=a?._redirectEventId,m=await this.tryRedirectSignIn(e);(!c||c===f)&&m?.user&&(a=m.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(c){a=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return Ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await tf(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Uk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Un(this.app))return Promise.reject(fs(this));const t=e?st(e):null;return t&&Ae(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Un(this.app)?Promise.reject(fs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Un(this.app)?Promise.reject(fs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ks(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await iM(this),t=new rM(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new mo("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await Jk(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ks(e)||this._popupRedirectResolver;Ae(t,this,"argument-error"),this.redirectPersistenceManager=await ml.create(this,[Ks(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ae(f,this,"internal-error"),f.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,s,a);return()=>{c=!0,m()}}else{const m=e.addObserver(t);return()=>{c=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=DA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(Un(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&Mk(`Error while retrieving App Check token: ${t.error}`),t?.token}}function rr(n){return st(n)}class nb{constructor(e){this.auth=e,this.observer=null,this.addObserver=JI(t=>this.observer=t)}get next(){return Ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let zf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function oM(n){zf=n}function kA(n){return zf.loadJS(n)}function lM(){return zf.recaptchaEnterpriseScript}function uM(){return zf.gapiScript}function cM(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class hM{constructor(){this.enterprise=new dM}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class dM{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const fM="recaptcha-enterprise",MA="NO_RECAPTCHA";class pM{constructor(e){this.type=fM,this.auth=rr(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,f)=>{Gk(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const g=new Hk(m);return l.tenantId==null?l._agentRecaptchaConfig=g:l._tenantRecaptchaConfigs[l.tenantId]=g,c(g.siteKey)}}).catch(m=>{f(m)})})}function a(l,c,f){const m=window.grecaptcha;XT(m)?m.enterprise.ready(()=>{m.enterprise.execute(l,{action:e}).then(g=>{c(g)}).catch(()=>{c(MA)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new hM().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{s(this.auth).then(f=>{if(!t&&XT(window.grecaptcha))a(f,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let m=lM();m.length!==0&&(m+=f),kA(m).then(()=>{a(f,l,c)}).catch(g=>{c(g)})}}).catch(f=>{c(f)})})}}async function ib(n,e,t,s=!1,a=!1){const l=new pM(n);let c;if(a)c=MA;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const f=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const m=f.phoneEnrollmentInfo.phoneNumber,g=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:g,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const m=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return s?Object.assign(f,{captchaResp:c}):Object.assign(f,{captchaResponse:c}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function nf(n,e,t,s,a){var l;if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await ib(n,e,t,t==="getOobCode");return s(n,c)}else return s(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await ib(n,e,t,t==="getOobCode");return s(n,f)}else return Promise.reject(c)})}/**
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
 */function mM(n,e){const t=ya(n,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(qi(l,e??{}))return a;Ii(a,"already-initialized")}return t.initialize({options:e})}function gM(n,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(Ks);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e?.popupRedirectResolver)}function _M(n,e,t){const s=rr(n);Ae(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,l=OA(e),{host:c,port:f}=yM(e),m=f===null?"":`:${f}`,g={url:`${l}//${c}${m}/`},E=Object.freeze({host:c,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){Ae(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Ae(qi(g,s.config.emulator)&&qi(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,_a(c)?(C_(`${l}//${c}${m}`),R_("Auth",!0)):vM()}function OA(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function yM(n){const e=OA(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const l=a[1];return{host:l,port:sb(s.substr(l.length+1))}}else{const[l,c]=s.split(":");return{host:l,port:sb(c)}}}function sb(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function vM(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Cy{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Gs("not implemented")}_getIdTokenResponse(e){return Gs("not implemented")}_linkToIdToken(e,t){return Gs("not implemented")}_getReauthenticationResolver(e){return Gs("not implemented")}}async function EM(n,e){return gs(n,"POST","/v1/accounts:update",e)}async function TM(n,e){return gs(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function bM(n,e){return Bc(n,"POST","/v1/accounts:signInWithPassword",sr(n,e))}async function LA(n,e){return gs(n,"POST","/v1/accounts:sendOobCode",sr(n,e))}async function wM(n,e){return LA(n,e)}async function SM(n,e){return LA(n,e)}/**
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
 */async function AM(n,e){return Bc(n,"POST","/v1/accounts:signInWithEmailLink",sr(n,e))}async function CM(n,e){return Bc(n,"POST","/v1/accounts:signInWithEmailLink",sr(n,e))}/**
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
 */class Ac extends Cy{constructor(e,t,s,a=null){super("password",s),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new Ac(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Ac(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return nf(e,t,"signInWithPassword",bM);case"emailLink":return AM(e,{email:this._email,oobCode:this._password});default:Ii(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return nf(e,s,"signUpPassword",TM);case"emailLink":return CM(e,{idToken:t,email:this._email,oobCode:this._password});default:Ii(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function gl(n,e){return Bc(n,"POST","/v1/accounts:signInWithIdp",sr(n,e))}/**
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
 */const RM="http://localhost";class oo extends Cy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new oo(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ii("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a}=t,l=Ey(t,["providerId","signInMethod"]);if(!s||!a)return null;const c=new oo(s,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return gl(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,gl(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,gl(e,t)}buildRequest(){const e={requestUri:RM,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=kl(t)}return e}}/**
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
 */function IM(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function NM(n){const e=Zu(Ju(n)).link,t=e?Zu(Ju(e)).deep_link_id:null,s=Zu(Ju(n)).deep_link_id;return(s?Zu(Ju(s)).link:null)||s||t||e||n}class Ry{constructor(e){var t,s,a,l,c,f;const m=Zu(Ju(e)),g=(t=m.apiKey)!==null&&t!==void 0?t:null,E=(s=m.oobCode)!==null&&s!==void 0?s:null,b=IM((a=m.mode)!==null&&a!==void 0?a:null);Ae(g&&E&&b,"argument-error"),this.apiKey=g,this.operation=b,this.code=E,this.continueUrl=(l=m.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=m.lang)!==null&&c!==void 0?c:null,this.tenantId=(f=m.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const t=NM(e);try{return new Ry(t)}catch{return null}}}/**
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
 */class jl{constructor(){this.providerId=jl.PROVIDER_ID}static credential(e,t){return Ac._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Ry.parseLink(t);return Ae(s,"argument-error"),Ac._fromEmailAndCode(e,s.code,s.tenantId)}}jl.PROVIDER_ID="password";jl.EMAIL_PASSWORD_SIGN_IN_METHOD="password";jl.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Iy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class zc extends Iy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Zr extends zc{constructor(){super("facebook.com")}static credential(e){return oo._fromParams({providerId:Zr.PROVIDER_ID,signInMethod:Zr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zr.credentialFromTaggedObject(e)}static credentialFromError(e){return Zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zr.credential(e.oauthAccessToken)}catch{return null}}}Zr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zr.PROVIDER_ID="facebook.com";/**
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
 */class Hs extends zc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return oo._fromParams({providerId:Hs.PROVIDER_ID,signInMethod:Hs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Hs.credentialFromTaggedObject(e)}static credentialFromError(e){return Hs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Hs.credential(t,s)}catch{return null}}}Hs.GOOGLE_SIGN_IN_METHOD="google.com";Hs.PROVIDER_ID="google.com";/**
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
 */class Jr extends zc{constructor(){super("github.com")}static credential(e){return oo._fromParams({providerId:Jr.PROVIDER_ID,signInMethod:Jr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jr.credentialFromTaggedObject(e)}static credentialFromError(e){return Jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jr.credential(e.oauthAccessToken)}catch{return null}}}Jr.GITHUB_SIGN_IN_METHOD="github.com";Jr.PROVIDER_ID="github.com";/**
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
 */class ea extends zc{constructor(){super("twitter.com")}static credential(e,t){return oo._fromParams({providerId:ea.PROVIDER_ID,signInMethod:ea.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ea.credentialFromTaggedObject(e)}static credentialFromError(e){return ea.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ea.credential(t,s)}catch{return null}}}ea.TWITTER_SIGN_IN_METHOD="twitter.com";ea.PROVIDER_ID="twitter.com";/**
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
 */async function PM(n,e){return Bc(n,"POST","/v1/accounts:signUp",sr(n,e))}/**
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
 */class lo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,a=!1){const l=await Ui._fromIdTokenResponse(e,s,a),c=rb(s);return new lo({user:l,providerId:c,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const a=rb(s);return new lo({user:e,providerId:a,_tokenResponse:s,operationType:t})}}function rb(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class sf extends Ki{constructor(e,t,s,a){var l;super(t.code,t.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,sf.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,a){return new sf(e,t,s,a)}}function VA(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?sf._fromErrorAndOperation(n,l,e,s):l})}async function xM(n,e,t=!1){const s=await Nl(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return lo._forOperation(n,"link",s)}/**
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
 */async function DM(n,e,t=!1){const{auth:s}=n;if(Un(s.app))return Promise.reject(fs(s));const a="reauthenticate";try{const l=await Nl(n,VA(s,a,e,n),t);Ae(l.idToken,s,"internal-error");const c=Sy(l.idToken);Ae(c,s,"internal-error");const{sub:f}=c;return Ae(n.uid===f,s,"user-mismatch"),lo._forOperation(n,a,l)}catch(l){throw l?.code==="auth/user-not-found"&&Ii(s,"user-mismatch"),l}}/**
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
 */async function UA(n,e,t=!1){if(Un(n.app))return Promise.reject(fs(n));const s="signIn",a=await VA(n,s,e),l=await lo._fromIdTokenResponse(n,s,a);return t||await n._updateCurrentUser(l.user),l}async function kM(n,e){return UA(rr(n),e)}/**
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
 */async function BA(n){const e=rr(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function MM(n,e,t){const s=rr(n);await nf(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",SM)}async function OM(n,e,t){if(Un(n.app))return Promise.reject(fs(n));const s=rr(n),c=await nf(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",PM).catch(m=>{throw m.code==="auth/password-does-not-meet-requirements"&&BA(n),m}),f=await lo._fromIdTokenResponse(s,"signIn",c);return await s._updateCurrentUser(f.user),f}function LM(n,e,t){return Un(n.app)?Promise.reject(fs(n)):kM(st(n),jl.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&BA(n),s})}async function ab(n,e){const t=st(n),a={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()},{email:l}=await wM(t.auth,a);l!==n.email&&await n.reload()}function ob(n,e){const t=st(n);return Un(t.auth.app)?Promise.reject(fs(t.auth)):VM(t,e)}async function VM(n,e,t){const{auth:s}=n,l={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(l.email=e);const c=await Nl(n,EM(s,l));await n._updateTokensIfNecessary(c,!0)}function UM(n,e,t,s){return st(n).onIdTokenChanged(e,t,s)}function BM(n,e,t){return st(n).beforeAuthStateChanged(e,t)}function zM(n,e,t,s){return st(n).onAuthStateChanged(e,t,s)}function jM(n){return st(n).signOut()}const rf="__sak";/**
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
 */class zA{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(rf,"1"),this.storage.removeItem(rf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const qM=1e3,FM=10;class jA extends zA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=xA(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),a=this.localCache[t];s!==a&&e(t,a,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,f,m)=>{this.notifyListeners(c,m)});return}const s=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(s);!t&&this.localCache[s]===c||this.notifyListeners(s,c)},l=this.storage.getItem(s);tM()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,FM):a()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},qM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}jA.type="LOCAL";const HM=jA;/**
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
 */class qA extends zA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}qA.type="SESSION";const FA=qA;/**
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
 */function GM(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class jf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const s=new jf(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!c?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const f=Array.from(c).map(async g=>g(t.origin,l)),m=await GM(f);t.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jf.receivers=[];/**
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
 */function Ny(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class KM{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((f,m)=>{const g=Ny("",20);a.port1.start();const E=setTimeout(()=>{m(new Error("unsupported_event"))},s);c={messageChannel:a,onMessage(b){const S=b;if(S.data.eventId===g)switch(S.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(S.data.response);break;default:clearTimeout(E),clearTimeout(l),m(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function ps(){return window}function QM(n){ps().location.href=n}/**
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
 */function HA(){return typeof ps().WorkerGlobalScope<"u"&&typeof ps().importScripts=="function"}async function WM(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function YM(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function $M(){return HA()?self:null}/**
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
 */const GA="firebaseLocalStorageDb",XM=1,af="firebaseLocalStorage",KA="fbase_key";class jc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function qf(n,e){return n.transaction([af],e?"readwrite":"readonly").objectStore(af)}function ZM(){const n=indexedDB.deleteDatabase(GA);return new jc(n).toPromise()}function a_(){const n=indexedDB.open(GA,XM);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(af,{keyPath:KA})}catch(a){t(a)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(af)?e(s):(s.close(),await ZM(),e(await a_()))})})}async function lb(n,e,t){const s=qf(n,!0).put({[KA]:e,value:t});return new jc(s).toPromise()}async function JM(n,e){const t=qf(n,!1).get(e),s=await new jc(t).toPromise();return s===void 0?null:s.value}function ub(n,e){const t=qf(n,!0).delete(e);return new jc(t).toPromise()}const eO=800,tO=3;class QA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await a_(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>tO)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return HA()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jf._getInstance($M()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await WM(),!this.activeServiceWorker)return;this.sender=new KM(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||YM()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await a_();return await lb(e,rf,"1"),await ub(e,rf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>lb(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>JM(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ub(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=qf(a,!1).getAll();return new jc(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),eO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}QA.type="LOCAL";const nO=QA;new Uc(3e4,6e4);/**
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
 */function WA(n,e){return e?Ks(e):(Ae(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Py extends Cy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gl(e,this._buildIdpRequest())}_linkToIdToken(e,t){return gl(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return gl(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function iO(n){return UA(n.auth,new Py(n),n.bypassAuthState)}function sO(n){const{auth:e,user:t}=n;return Ae(t,e,"internal-error"),DM(t,new Py(n),n.bypassAuthState)}async function rO(n){const{auth:e,user:t}=n;return Ae(t,e,"internal-error"),xM(t,new Py(n),n.bypassAuthState)}/**
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
 */class YA{constructor(e,t,s,a,l=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:a,tenantId:l,error:c,type:f}=e;if(c){this.reject(c);return}const m={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(m))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return iO;case"linkViaPopup":case"linkViaRedirect":return rO;case"reauthViaPopup":case"reauthViaRedirect":return sO;default:Ii(this.auth,"internal-error")}}resolve(e){Zs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Zs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const aO=new Uc(2e3,1e4);async function oO(n,e,t){if(Un(n.app))return Promise.reject(zi(n,"operation-not-supported-in-this-environment"));const s=rr(n);Ok(n,e,Iy);const a=WA(s,t);return new Ja(s,"signInViaPopup",e,a).executeNotNull()}class Ja extends YA{constructor(e,t,s,a,l){super(e,t,a,l),this.provider=s,this.authWindow=null,this.pollId=null,Ja.currentPopupAction&&Ja.currentPopupAction.cancel(),Ja.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ae(e,this.auth,"internal-error"),e}async onExecution(){Zs(this.filter.length===1,"Popup operations only handle one event");const e=Ny();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(zi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(zi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ja.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(zi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,aO.get())};e()}}Ja.currentPopupAction=null;/**
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
 */const lO="pendingRedirect",kd=new Map;class uO extends YA{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=kd.get(this.auth._key());if(!e){try{const s=await cO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}kd.set(this.auth._key(),e)}return this.bypassAuthState||kd.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cO(n,e){const t=fO(e),s=dO(n);if(!await s._isAvailable())return!1;const a=await s._get(t)==="true";return await s._remove(t),a}function hO(n,e){kd.set(n._key(),e)}function dO(n){return Ks(n._redirectPersistence)}function fO(n){return Dd(lO,n.config.apiKey,n.name)}async function pO(n,e,t=!1){if(Un(n.app))return Promise.reject(fs(n));const s=rr(n),a=WA(s,e),c=await new uO(s,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
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
 */const mO=600*1e3;class gO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_O(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!$A(e)){const a=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(zi(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=mO&&this.cachedEventUids.clear(),this.cachedEventUids.has(cb(e))}saveEventToCache(e){this.cachedEventUids.add(cb(e)),this.lastProcessedEventTime=Date.now()}}function cb(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function $A({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function _O(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $A(n);default:return!1}}/**
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
 */async function yO(n,e={}){return gs(n,"GET","/v1/projects",e)}/**
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
 */const vO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,EO=/^https?/;async function TO(n){if(n.config.emulator)return;const{authorizedDomains:e}=await yO(n);for(const t of e)try{if(bO(t))return}catch{}Ii(n,"unauthorized-domain")}function bO(n){const e=s_(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===s}if(!EO.test(t))return!1;if(vO.test(n))return s===n;const a=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
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
 */const wO=new Uc(3e4,6e4);function hb(){const n=ps().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function SO(n){return new Promise((e,t)=>{var s,a,l;function c(){hb(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hb(),t(zi(n,"network-request-failed"))},timeout:wO.get()})}if(!((a=(s=ps().gapi)===null||s===void 0?void 0:s.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((l=ps().gapi)===null||l===void 0)&&l.load)c();else{const f=cM("iframefcb");return ps()[f]=()=>{gapi.load?c():t(zi(n,"network-request-failed"))},kA(`${uM()}?onload=${f}`).catch(m=>t(m))}}).catch(e=>{throw Md=null,e})}let Md=null;function AO(n){return Md=Md||SO(n),Md}/**
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
 */const CO=new Uc(5e3,15e3),RO="__/auth/iframe",IO="emulator/auth/iframe",NO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},PO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xO(n){const e=n.config;Ae(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?wy(e,IO):`https://${n.config.authDomain}/${RO}`,s={apiKey:e.apiKey,appName:n.name,v:go},a=PO.get(n.config.apiHost);a&&(s.eid=a);const l=n._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${kl(s).slice(1)}`}async function DO(n){const e=await AO(n),t=ps().gapi;return Ae(t,n,"internal-error"),e.open({where:document.body,url:xO(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:NO,dontclear:!0},s=>new Promise(async(a,l)=>{await s.restyle({setHideOnLeave:!1});const c=zi(n,"network-request-failed"),f=ps().setTimeout(()=>{l(c)},CO.get());function m(){ps().clearTimeout(f),a(s)}s.ping(m).then(m,()=>{l(c)})}))}/**
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
 */const kO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},MO=500,OO=600,LO="_blank",VO="http://localhost";class db{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function UO(n,e,t,s=MO,a=OO){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const m=Object.assign(Object.assign({},kO),{width:s.toString(),height:a.toString(),top:l,left:c}),g=In().toLowerCase();t&&(f=CA(g)?LO:t),SA(g)&&(e=e||VO,m.scrollbars="yes");const E=Object.entries(m).reduce((S,[P,V])=>`${S}${P}=${V},`,"");if(eM(g)&&f!=="_self")return BO(e||"",f),new db(null);const b=window.open(e||"",f,E);Ae(b,n,"popup-blocked");try{b.focus()}catch{}return new db(b)}function BO(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const zO="__/auth/handler",jO="emulator/auth/handler",qO=encodeURIComponent("fac");async function fb(n,e,t,s,a,l){Ae(n.config.authDomain,n,"auth-domain-config-required"),Ae(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:go,eventId:a};if(e instanceof Iy){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",kg(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,b]of Object.entries({}))c[E]=b}if(e instanceof zc){const E=e.getScopes().filter(b=>b!=="");E.length>0&&(c.scopes=E.join(","))}n.tenantId&&(c.tid=n.tenantId);const f=c;for(const E of Object.keys(f))f[E]===void 0&&delete f[E];const m=await n._getAppCheckToken(),g=m?`#${qO}=${encodeURIComponent(m)}`:"";return`${FO(n)}?${kl(f).slice(1)}${g}`}function FO({config:n}){return n.emulator?wy(n,jO):`https://${n.authDomain}/${zO}`}/**
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
 */const yg="webStorageSupport";class HO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=FA,this._completeRedirectFn=pO,this._overrideRedirectResult=hO}async _openPopup(e,t,s,a){var l;Zs((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await fb(e,t,s,s_(),a);return UO(e,c,Ny())}async _openRedirect(e,t,s,a){await this._originValidation(e);const l=await fb(e,t,s,s_(),a);return QM(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(Zs(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await DO(e),s=new gO(e);return t.register("authEvent",a=>(Ae(a?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(yg,{type:yg},a=>{var l;const c=(l=a?.[0])===null||l===void 0?void 0:l[yg];c!==void 0&&t(!!c),Ii(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=TO(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return xA()||AA()||Ay()}}const GO=HO;var pb="@firebase/auth",mb="1.10.8";/**
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
 */class KO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function QO(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function WO(n){Fi(new Ri("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:f}=s.options;Ae(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const m={apiKey:c,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:DA(n)},g=new aM(s,a,l,m);return gM(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Fi(new Ri("auth-internal",e=>{const t=rr(e.getProvider("auth").getImmediate());return(s=>new KO(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jn(pb,mb,QO(n)),Jn(pb,mb,"esm2017")}/**
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
 */const YO=300,$O=Aw("authIdTokenMaxAge")||YO;let gb=null;const XO=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>$O)return;const a=t?.token;gb!==a&&(gb=a,await fetch(n,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function ZO(n=Nc()){const e=ya(n,"auth");if(e.isInitialized())return e.getImmediate();const t=mM(n,{popupRedirectResolver:GO,persistence:[nO,HM,FA]}),s=Aw("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const c=XO(l.toString());BM(t,c,()=>c(t.currentUser)),UM(t,f=>c(f))}}const a=bw("auth");return a&&_M(t,`http://${a}`),t}function JO(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}oM({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=a=>{const l=zi("internal-error");l.customData=a,t(l)},s.type="text/javascript",s.charset="UTF-8",JO().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});WO("Browser");const XA="@firebase/installations",xy="0.6.18";/**
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
 */const ZA=1e4,JA=`w:${xy}`,eC="FIS_v2",e4="https://firebaseinstallations.googleapis.com/v1",t4=3600*1e3,n4="installations",i4="Installations";/**
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
 */const s4={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},uo=new mo(n4,i4,s4);function tC(n){return n instanceof Ki&&n.code.includes("request-failed")}/**
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
 */function nC({projectId:n}){return`${e4}/projects/${n}/installations`}function iC(n){return{token:n.token,requestStatus:2,expiresIn:a4(n.expiresIn),creationTime:Date.now()}}async function sC(n,e){const s=(await e.json()).error;return uo.create("request-failed",{requestName:n,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function rC({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function r4(n,{refreshToken:e}){const t=rC(n);return t.append("Authorization",o4(e)),t}async function aC(n){const e=await n();return e.status>=500&&e.status<600?n():e}function a4(n){return Number(n.replace("s","000"))}function o4(n){return`${eC} ${n}`}/**
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
 */async function l4({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=nC(n),a=rC(n),l=e.getImmediate({optional:!0});if(l){const g=await l.getHeartbeatsHeader();g&&a.append("x-firebase-client",g)}const c={fid:t,authVersion:eC,appId:n.appId,sdkVersion:JA},f={method:"POST",headers:a,body:JSON.stringify(c)},m=await aC(()=>fetch(s,f));if(m.ok){const g=await m.json();return{fid:g.fid||t,registrationStatus:2,refreshToken:g.refreshToken,authToken:iC(g.authToken)}}else throw await sC("Create Installation",m)}/**
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
 */function oC(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function u4(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const c4=/^[cdef][\w-]{21}$/,o_="";function h4(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=d4(n);return c4.test(t)?t:o_}catch{return o_}}function d4(n){return u4(n).substr(0,22)}/**
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
 */function Ff(n){return`${n.appName}!${n.appId}`}/**
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
 */const lC=new Map;function uC(n,e){const t=Ff(n);cC(t,e),f4(t,e)}function cC(n,e){const t=lC.get(n);if(t)for(const s of t)s(e)}function f4(n,e){const t=p4();t&&t.postMessage({key:n,fid:e}),m4()}let eo=null;function p4(){return!eo&&"BroadcastChannel"in self&&(eo=new BroadcastChannel("[Firebase] FID Change"),eo.onmessage=n=>{cC(n.data.key,n.data.fid)}),eo}function m4(){lC.size===0&&eo&&(eo.close(),eo=null)}/**
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
 */const g4="firebase-installations-database",_4=1,co="firebase-installations-store";let vg=null;function Dy(){return vg||(vg=Mw(g4,_4,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(co)}}})),vg}async function of(n,e){const t=Ff(n),a=(await Dy()).transaction(co,"readwrite"),l=a.objectStore(co),c=await l.get(t);return await l.put(e,t),await a.done,(!c||c.fid!==e.fid)&&uC(n,e.fid),e}async function hC(n){const e=Ff(n),s=(await Dy()).transaction(co,"readwrite");await s.objectStore(co).delete(e),await s.done}async function Hf(n,e){const t=Ff(n),a=(await Dy()).transaction(co,"readwrite"),l=a.objectStore(co),c=await l.get(t),f=e(c);return f===void 0?await l.delete(t):await l.put(f,t),await a.done,f&&(!c||c.fid!==f.fid)&&uC(n,f.fid),f}/**
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
 */async function ky(n){let e;const t=await Hf(n.appConfig,s=>{const a=y4(s),l=v4(n,a);return e=l.registrationPromise,l.installationEntry});return t.fid===o_?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function y4(n){const e=n||{fid:h4(),registrationStatus:0};return dC(e)}function v4(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const a=Promise.reject(uo.create("app-offline"));return{installationEntry:e,registrationPromise:a}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=E4(n,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:T4(n)}:{installationEntry:e}}async function E4(n,e){try{const t=await l4(n,e);return of(n.appConfig,t)}catch(t){throw tC(t)&&t.customData.serverCode===409?await hC(n.appConfig):await of(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function T4(n){let e=await _b(n.appConfig);for(;e.registrationStatus===1;)await oC(100),e=await _b(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await ky(n);return s||t}return e}function _b(n){return Hf(n,e=>{if(!e)throw uo.create("installation-not-found");return dC(e)})}function dC(n){return b4(n)?{fid:n.fid,registrationStatus:0}:n}function b4(n){return n.registrationStatus===1&&n.registrationTime+ZA<Date.now()}/**
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
 */async function w4({appConfig:n,heartbeatServiceProvider:e},t){const s=S4(n,t),a=r4(n,t),l=e.getImmediate({optional:!0});if(l){const g=await l.getHeartbeatsHeader();g&&a.append("x-firebase-client",g)}const c={installation:{sdkVersion:JA,appId:n.appId}},f={method:"POST",headers:a,body:JSON.stringify(c)},m=await aC(()=>fetch(s,f));if(m.ok){const g=await m.json();return iC(g)}else throw await sC("Generate Auth Token",m)}function S4(n,{fid:e}){return`${nC(n)}/${e}/authTokens:generate`}/**
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
 */async function My(n,e=!1){let t;const s=await Hf(n.appConfig,l=>{if(!fC(l))throw uo.create("not-registered");const c=l.authToken;if(!e&&R4(c))return l;if(c.requestStatus===1)return t=A4(n,e),l;{if(!navigator.onLine)throw uo.create("app-offline");const f=N4(l);return t=C4(n,f),f}});return t?await t:s.authToken}async function A4(n,e){let t=await yb(n.appConfig);for(;t.authToken.requestStatus===1;)await oC(100),t=await yb(n.appConfig);const s=t.authToken;return s.requestStatus===0?My(n,e):s}function yb(n){return Hf(n,e=>{if(!fC(e))throw uo.create("not-registered");const t=e.authToken;return P4(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function C4(n,e){try{const t=await w4(n,e),s=Object.assign(Object.assign({},e),{authToken:t});return await of(n.appConfig,s),t}catch(t){if(tC(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await hC(n.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await of(n.appConfig,s)}throw t}}function fC(n){return n!==void 0&&n.registrationStatus===2}function R4(n){return n.requestStatus===2&&!I4(n)}function I4(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+t4}function N4(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function P4(n){return n.requestStatus===1&&n.requestTime+ZA<Date.now()}/**
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
 */async function x4(n){const e=n,{installationEntry:t,registrationPromise:s}=await ky(e);return s?s.catch(console.error):My(e).catch(console.error),t.fid}/**
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
 */async function D4(n,e=!1){const t=n;return await k4(t),(await My(t,e)).token}async function k4(n){const{registrationPromise:e}=await ky(n);e&&await e}/**
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
 */function M4(n){if(!n||!n.options)throw Eg("App Configuration");if(!n.name)throw Eg("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Eg(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Eg(n){return uo.create("missing-app-config-values",{valueName:n})}/**
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
 */const pC="installations",O4="installations-internal",L4=n=>{const e=n.getProvider("app").getImmediate(),t=M4(e),s=ya(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},V4=n=>{const e=n.getProvider("app").getImmediate(),t=ya(e,pC).getImmediate();return{getId:()=>x4(t),getToken:a=>D4(t,a)}};function U4(){Fi(new Ri(pC,L4,"PUBLIC")),Fi(new Ri(O4,V4,"PRIVATE"))}U4();Jn(XA,xy);Jn(XA,xy,"esm2017");/**
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
 */const lf="analytics",B4="firebase_id",z4="origin",j4=60*1e3,q4="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Oy="https://www.googletagmanager.com/gtag/js";/**
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
 */const ei=new Ic("@firebase/analytics");/**
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
 */const F4={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},di=new mo("analytics","Analytics",F4);/**
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
 */function H4(n){if(!n.startsWith(Oy)){const e=di.create("invalid-gtag-resource",{gtagURL:n});return ei.warn(e.message),""}return n}function mC(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function G4(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function K4(n,e){const t=G4("firebase-js-sdk-policy",{createScriptURL:H4}),s=document.createElement("script"),a=`${Oy}?l=${n}&id=${e}`;s.src=t?t?.createScriptURL(a):a,s.async=!0,document.head.appendChild(s)}function Q4(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function W4(n,e,t,s,a,l){const c=s[a];try{if(c)await e[c];else{const m=(await mC(t)).find(g=>g.measurementId===a);m&&await e[m.appId]}}catch(f){ei.error(f)}n("config",a,l)}async function Y4(n,e,t,s,a){try{let l=[];if(a&&a.send_to){let c=a.send_to;Array.isArray(c)||(c=[c]);const f=await mC(t);for(const m of c){const g=f.find(b=>b.measurementId===m),E=g&&e[g.appId];if(E)l.push(E);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),n("event",s,a||{})}catch(l){ei.error(l)}}function $4(n,e,t,s){async function a(l,...c){try{if(l==="event"){const[f,m]=c;await Y4(n,e,t,f,m)}else if(l==="config"){const[f,m]=c;await W4(n,e,t,s,f,m)}else if(l==="consent"){const[f,m]=c;n("consent",f,m)}else if(l==="get"){const[f,m,g]=c;n("get",f,m,g)}else if(l==="set"){const[f]=c;n("set",f)}else n(l,...c)}catch(f){ei.error(f)}}return a}function X4(n,e,t,s,a){let l=function(...c){window[s].push(arguments)};return window[a]&&typeof window[a]=="function"&&(l=window[a]),window[a]=$4(l,n,e,t),{gtagCore:l,wrappedGtag:window[a]}}function Z4(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Oy)&&t.src.includes(n))return t;return null}/**
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
 */const J4=30,e3=1e3;class t3{constructor(e={},t=e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const gC=new t3;function n3(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function i3(n){var e;const{appId:t,apiKey:s}=n,a={method:"GET",headers:n3(s)},l=q4.replace("{app-id}",t),c=await fetch(l,a);if(c.status!==200&&c.status!==304){let f="";try{const m=await c.json();!((e=m.error)===null||e===void 0)&&e.message&&(f=m.error.message)}catch{}throw di.create("config-fetch-failed",{httpStatus:c.status,responseMessage:f})}return c.json()}async function s3(n,e=gC,t){const{appId:s,apiKey:a,measurementId:l}=n.options;if(!s)throw di.create("no-app-id");if(!a){if(l)return{measurementId:l,appId:s};throw di.create("no-api-key")}const c=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new o3;return setTimeout(async()=>{f.abort()},j4),_C({appId:s,apiKey:a,measurementId:l},c,f,e)}async function _C(n,{throttleEndTimeMillis:e,backoffCount:t},s,a=gC){var l;const{appId:c,measurementId:f}=n;try{await r3(s,e)}catch(m){if(f)return ei.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${m?.message}]`),{appId:c,measurementId:f};throw m}try{const m=await i3(n);return a.deleteThrottleMetadata(c),m}catch(m){const g=m;if(!a3(g)){if(a.deleteThrottleMetadata(c),f)return ei.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${g?.message}]`),{appId:c,measurementId:f};throw m}const E=Number((l=g?.customData)===null||l===void 0?void 0:l.httpStatus)===503?BE(t,a.intervalMillis,J4):BE(t,a.intervalMillis),b={throttleEndTimeMillis:Date.now()+E,backoffCount:t+1};return a.setThrottleMetadata(c,b),ei.debug(`Calling attemptFetch again in ${E} millis`),_C(n,b,s,a)}}function r3(n,e){return new Promise((t,s)=>{const a=Math.max(e-Date.now(),0),l=setTimeout(t,a);n.addEventListener(()=>{clearTimeout(l),s(di.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function a3(n){if(!(n instanceof Ki)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class o3{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function l3(n,e,t,s,a){if(a&&a.global){n("event",t,s);return}else{const l=await e,c=Object.assign(Object.assign({},s),{send_to:l});n("event",t,c)}}/**
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
 */async function u3(){if(Nw())try{await Pw()}catch(n){return ei.warn(di.create("indexeddb-unavailable",{errorInfo:n?.toString()}).message),!1}else return ei.warn(di.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function c3(n,e,t,s,a,l,c){var f;const m=s3(n);m.then(P=>{t[P.measurementId]=P.appId,n.options.measurementId&&P.measurementId!==n.options.measurementId&&ei.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${P.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(P=>ei.error(P)),e.push(m);const g=u3().then(P=>{if(P)return s.getId()}),[E,b]=await Promise.all([m,g]);Z4(l)||K4(l,E.measurementId),a("js",new Date);const S=(f=c?.config)!==null&&f!==void 0?f:{};return S[z4]="firebase",S.update=!0,b!=null&&(S[B4]=b),a("config",E.measurementId,S),E.measurementId}/**
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
 */class h3{constructor(e){this.app=e}_delete(){return delete cc[this.app.options.appId],Promise.resolve()}}let cc={},vb=[];const Eb={};let Tg="dataLayer",d3="gtag",Tb,yC,bb=!1;function f3(){const n=[];if(Rw()&&n.push("This is a browser extension environment."),KI()||n.push("Cookies are not available."),n.length>0){const e=n.map((s,a)=>`(${a+1}) ${s}`).join(" "),t=di.create("invalid-analytics-context",{errorInfo:e});ei.warn(t.message)}}function p3(n,e,t){f3();const s=n.options.appId;if(!s)throw di.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)ei.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw di.create("no-api-key");if(cc[s]!=null)throw di.create("already-exists",{id:s});if(!bb){Q4(Tg);const{wrappedGtag:l,gtagCore:c}=X4(cc,vb,Eb,Tg,d3);yC=l,Tb=c,bb=!0}return cc[s]=c3(n,vb,Eb,e,Tb,Tg,t),new h3(n)}function m3(n=Nc()){n=st(n);const e=ya(n,lf);return e.isInitialized()?e.getImmediate():g3(n)}function g3(n,e={}){const t=ya(n,lf);if(t.isInitialized()){const a=t.getImmediate();if(qi(e,t.getOptions()))return a;throw di.create("already-initialized")}return t.initialize({options:e})}function _3(n,e,t,s){n=st(n),l3(yC,cc[n.app.options.appId],e,t,s).catch(a=>ei.error(a))}const wb="@firebase/analytics",Sb="0.10.17";function y3(){Fi(new Ri(lf,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("installations-internal").getImmediate();return p3(s,a,t)},"PUBLIC")),Fi(new Ri("analytics-internal",n,"PRIVATE")),Jn(wb,Sb),Jn(wb,Sb,"esm2017");function n(e){try{const t=e.getProvider(lf).getImmediate();return{logEvent:(s,a,l)=>_3(t,s,a,l)}}catch(t){throw di.create("interop-component-reg-failed",{reason:t})}}}y3();var Ab={};const Cb="@firebase/database",Rb="1.0.20";/**
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
 */let vC="";function v3(n){vC=n}/**
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
 */class E3{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),mn(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:mc(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class T3{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return nr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const EC=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new E3(e)}}catch{}return new T3},to=EC("localStorage"),b3=EC("sessionStorage");/**
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
 */const _l=new Ic("@firebase/database"),w3=(function(){let n=1;return function(){return n++}})(),TC=function(n){const e=nN(n),t=new ZI;t.update(e);const s=t.digest();return A_.encodeByteArray(s)},qc=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=qc.apply(null,s):typeof s=="object"?e+=mn(s):e+=s,e+=" "}return e};let hc=null,Ib=!0;const S3=function(n,e){he(!0,"Can't turn on custom loggers persistently."),_l.logLevel=je.VERBOSE,hc=_l.log.bind(_l)},An=function(...n){if(Ib===!0&&(Ib=!1,hc===null&&b3.get("logging_enabled")===!0&&S3()),hc){const e=qc.apply(null,n);hc(e)}},Fc=function(n){return function(...e){An(n,...e)}},l_=function(...n){const e="FIREBASE INTERNAL ERROR: "+qc(...n);_l.error(e)},Js=function(...n){const e=`FIREBASE FATAL ERROR: ${qc(...n)}`;throw _l.error(e),new Error(e)},ti=function(...n){const e="FIREBASE WARNING: "+qc(...n);_l.warn(e)},A3=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ti("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},bC=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},C3=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Pl="[MIN_NAME]",ho="[MAX_NAME]",ql=function(n,e){if(n===e)return 0;if(n===Pl||e===ho)return-1;if(e===Pl||n===ho)return 1;{const t=Nb(n),s=Nb(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},R3=function(n,e){return n===e?0:n<e?-1:1},Wu=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+mn(e))},Ly=function(n){if(typeof n!="object"||n===null)return mn(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=mn(e[s]),t+=":",t+=Ly(n[e[s]]);return t+="}",t},wC=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let a=0;a<t;a+=e)a+e>t?s.push(n.substring(a,t)):s.push(n.substring(a,a+e));return s};function Ni(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const SC=function(n){he(!bC(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let a,l,c,f,m;n===0?(l=0,c=0,a=1/n===-1/0?1:0):(a=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(n)/Math.LN2),s),l=f+s,c=Math.round(n*Math.pow(2,t-f)-Math.pow(2,t))):(l=0,c=Math.round(n/Math.pow(2,1-s-t))));const g=[];for(m=t;m;m-=1)g.push(c%2?1:0),c=Math.floor(c/2);for(m=e;m;m-=1)g.push(l%2?1:0),l=Math.floor(l/2);g.push(a?1:0),g.reverse();const E=g.join("");let b="";for(m=0;m<64;m+=8){let S=parseInt(E.substr(m,8),2).toString(16);S.length===1&&(S="0"+S),b=b+S}return b.toLowerCase()},I3=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},N3=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},P3=new RegExp("^-?(0*)\\d{1,10}$"),x3=-2147483648,D3=2147483647,Nb=function(n){if(P3.test(n)){const e=Number(n);if(e>=x3&&e<=D3)return e}return null},Fl=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ti("Exception was thrown by user callback.",t),e},Math.floor(0))}},k3=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},dc=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class M3{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Un(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ti(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class O3{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(An("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ti(e)}}class Od{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Od.OWNER="owner";/**
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
 */const Vy="5",AC="v",CC="s",RC="r",IC="f",NC=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,PC="ls",xC="p",u_="ac",DC="websocket",kC="long_polling";/**
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
 */class MC{constructor(e,t,s,a,l=!1,c="",f=!1,m=!1,g=null){this.secure=t,this.namespace=s,this.webSocketOnly=a,this.nodeAdmin=l,this.persistenceKey=c,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=m,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=to.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&to.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function L3(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function OC(n,e,t){he(typeof e=="string","typeof type must == string"),he(typeof t=="object","typeof params must == object");let s;if(e===DC)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===kC)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);L3(n)&&(t.ns=n.namespace);const a=[];return Ni(t,(l,c)=>{a.push(l+"="+c)}),s+a.join("&")}/**
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
 */class V3{constructor(){this.counters_={}}incrementCounter(e,t=1){nr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return kI(this.counters_)}}/**
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
 */const bg={},wg={};function Uy(n){const e=n.toString();return bg[e]||(bg[e]=new V3),bg[e]}function U3(n,e){const t=n.toString();return wg[t]||(wg[t]=e()),wg[t]}/**
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
 */class B3{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<s.length;++a)s[a]&&Fl(()=>{this.onMessage_(s[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Pb="start",z3="close",j3="pLPCommand",q3="pRTLPCB",LC="id",VC="pw",UC="ser",F3="cb",H3="seg",G3="ts",K3="d",Q3="dframe",BC=1870,zC=30,W3=BC-zC,Y3=25e3,$3=3e4;class dl{constructor(e,t,s,a,l,c,f){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.transportSessionId=c,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Fc(e),this.stats_=Uy(t),this.urlFn=m=>(this.appCheckToken&&(m[u_]=this.appCheckToken),OC(t,kC,m))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new B3(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor($3)),C3(()=>{if(this.isClosed_)return;this.scriptTagHolder=new By((...l)=>{const[c,f,m,g,E]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===Pb)this.id=f,this.password=m;else if(c===z3)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...l)=>{const[c,f]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(c,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[Pb]="t",s[UC]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[F3]=this.scriptTagHolder.uniqueCallbackIdentifier),s[AC]=Vy,this.transportSessionId&&(s[CC]=this.transportSessionId),this.lastSessionId&&(s[PC]=this.lastSessionId),this.applicationId&&(s[xC]=this.applicationId),this.appCheckToken&&(s[u_]=this.appCheckToken),typeof location<"u"&&location.hostname&&NC.test(location.hostname)&&(s[RC]=IC);const a=this.urlFn(s);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){dl.forceAllow_=!0}static forceDisallow(){dl.forceDisallow_=!0}static isAvailable(){return dl.forceAllow_?!0:!dl.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!I3()&&!N3()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=mn(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Ew(t),a=wC(s,W3);for(let l=0;l<a.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[Q3]="t",s[LC]=e,s[VC]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=mn(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class By{constructor(e,t,s,a){this.onDisconnect=s,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=w3(),window[j3+this.uniqueCallbackIdentifier]=e,window[q3+this.uniqueCallbackIdentifier]=t,this.myIFrame=By.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(f){An("frame writing exception"),f.stack&&An(f.stack),An(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||An("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[LC]=this.myID,e[VC]=this.myPW,e[UC]=this.currentSerial;let t=this.urlFn(e),s="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+zC+s.length<=BC;){const c=this.pendingSegs.shift();s=s+"&"+H3+a+"="+c.seg+"&"+G3+a+"="+c.ts+"&"+K3+a+"="+c.d,a++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},a=setTimeout(s,Math.floor(Y3)),l=()=>{clearTimeout(a),s()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const a=s.readyState;(!a||a==="loaded"||a==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{An("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const X3=16384,Z3=45e3;let uf=null;typeof MozWebSocket<"u"?uf=MozWebSocket:typeof WebSocket<"u"&&(uf=WebSocket);class Vi{constructor(e,t,s,a,l,c,f){this.connId=e,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Fc(this.connId),this.stats_=Uy(t),this.connURL=Vi.connectionURL_(t,c,f,a,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,a,l){const c={};return c[AC]=Vy,typeof location<"u"&&location.hostname&&NC.test(location.hostname)&&(c[RC]=IC),t&&(c[CC]=t),s&&(c[PC]=s),a&&(c[u_]=a),l&&(c[xC]=l),OC(e,DC,c)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,to.set("previous_websocket_failure",!0);try{let s;HI(),this.mySock=new uf(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){Vi.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&uf!==null&&!Vi.forceDisallow_}static previouslyFailed(){return to.isInMemoryStorage||to.get("previous_websocket_failure")===!0}markConnectionHealthy(){to.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=mc(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(he(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=mn(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=wC(t,X3);s.length>1&&this.sendString_(String(s.length));for(let a=0;a<s.length;a++)this.sendString_(s[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Z3))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Vi.responsesRequiredToBeHealthy=2;Vi.healthyTimeout=3e4;/**
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
 */class Cc{static get ALL_TRANSPORTS(){return[dl,Vi]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Vi&&Vi.isAvailable();let s=t&&!Vi.previouslyFailed();if(e.webSocketOnly&&(t||ti("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Vi];else{const a=this.transports_=[];for(const l of Cc.ALL_TRANSPORTS)l&&l.isAvailable()&&a.push(l);Cc.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Cc.globalTransportInitialized_=!1;/**
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
 */const J3=6e4,e5=5e3,t5=10*1024,n5=100*1024,Sg="t",xb="d",i5="s",Db="r",s5="e",kb="o",Mb="a",Ob="n",Lb="p",r5="h";class a5{constructor(e,t,s,a,l,c,f,m,g,E){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=a,this.authToken_=l,this.onMessage_=c,this.onReady_=f,this.onDisconnect_=m,this.onKill_=g,this.lastSessionId=E,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Fc("c:"+this.id+":"),this.transportManager_=new Cc(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=dc(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>n5?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>t5?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Sg in e){const t=e[Sg];t===Mb?this.upgradeIfSecondaryHealthy_():t===Db?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===kb&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Wu("t",e),s=Wu("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Lb,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Mb,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ob,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Wu("t",e),s=Wu("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Wu(Sg,e);if(xb in e){const s=e[xb];if(t===r5){const a=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(t===Ob){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===i5?this.onConnectionShutdown_(s):t===Db?this.onReset_(s):t===s5?l_("Server Error: "+s):t===kb?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):l_("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Vy!==s&&ti("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),dc(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(J3))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):dc(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(e5))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Lb,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(to.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class jC{put(e,t,s,a){}merge(e,t,s,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class qC{constructor(e){this.allowedEvents_=e,this.listeners_={},he(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let a=0;a<s.length;a++)s[a].callback.apply(s[a].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const a=this.getInitialEvent(e);a&&t.apply(s,a)}off(e,t,s){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let l=0;l<a.length;l++)if(a[l].callback===t&&(!s||s===a[l].context)){a.splice(l,1);return}}validateEventType_(e){he(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class cf extends qC{static getInstance(){return new cf}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!I_()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return he(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Vb=32,Ub=768;class wt{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[s]=this.pieces_[a],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function pt(){return new wt("")}function He(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function ga(n){return n.pieces_.length-n.pieceNum_}function bt(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new wt(n.pieces_,e)}function FC(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function o5(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function HC(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function GC(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new wt(e,0)}function $t(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof wt)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let a=0;a<s.length;a++)s[a].length>0&&t.push(s[a])}return new wt(t,0)}function We(n){return n.pieceNum_>=n.pieces_.length}function Ci(n,e){const t=He(n),s=He(e);if(t===null)return e;if(t===s)return Ci(bt(n),bt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function KC(n,e){if(ga(n)!==ga(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function Bi(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(ga(n)>ga(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class l5{constructor(e,t){this.errorPrefix_=t,this.parts_=HC(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=vf(this.parts_[s]);QC(this)}}function u5(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=vf(e),QC(n)}function c5(n){const e=n.parts_.pop();n.byteLength_-=vf(e),n.parts_.length>0&&(n.byteLength_-=1)}function QC(n){if(n.byteLength_>Ub)throw new Error(n.errorPrefix_+"has a key path longer than "+Ub+" bytes ("+n.byteLength_+").");if(n.parts_.length>Vb)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Vb+") or object contains a cycle "+Xa(n))}function Xa(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class zy extends qC{static getInstance(){return new zy}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return he(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Yu=1e3,h5=300*1e3,Bb=30*1e3,d5=1.3,f5=3e4,p5="server_kill",zb=3;class Ws extends jC{constructor(e,t,s,a,l,c,f,m){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=a,this.onServerInfoUpdate_=l,this.authTokenProvider_=c,this.appCheckTokenProvider_=f,this.authOverride_=m,this.id=Ws.nextPersistentConnectionId_++,this.log_=Fc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Yu,this.maxReconnectDelay_=h5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,m)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");zy.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&cf.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const a=++this.requestNumber_,l={r:a,a:e,b:t};this.log_(mn(l)),he(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[a]=s)}get(e){this.initConnection_();const t=new yf,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const f=c.d;c.s==="ok"?t.resolve(f):t.reject(f)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,s,a){this.initConnection_();const l=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+l),this.listens.has(c)||this.listens.set(c,new Map),he(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),he(!this.listens.get(c).has(l),"listen() called twice for same path/queryId.");const f={onComplete:a,hashFn:t,query:e,tag:s};this.listens.get(c).set(l,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),a=t._queryIdentifier;this.log_("Listen on "+s+" for "+a);const l={p:s},c="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(c,l,f=>{const m=f.d,g=f.s;Ws.warnOnListenWarnings_(m,t),(this.listens.get(s)&&this.listens.get(s).get(a))===e&&(this.log_("listen response",f),g!=="ok"&&this.removeListen_(s,a),e.onComplete&&e.onComplete(g,m))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&nr(e,"w")){const s=vl(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const a='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();ti(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||XI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Bb)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=$I(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,a=>{const l=a.s,c=a.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+a),he(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,a)&&this.connected_&&this.sendUnlisten_(s,a,e._queryObject,t)}sendUnlisten_(e,t,s,a){this.log_("Unlisten on "+e+" for "+t);const l={p:e},c="n";a&&(l.q=s,l.t=a),this.sendRequest(c,l)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,a){const l={p:t,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,c=>{a&&setTimeout(()=>{a(c.s,c.d)},Math.floor(0))})}put(e,t,s,a){this.putInternal("p",e,t,s,a)}merge(e,t,s,a){this.putInternal("m",e,t,s,a)}putInternal(e,t,s,a,l){this.initConnection_();const c={p:t,d:s};l!==void 0&&(c.h=l),this.outstandingPuts_.push({action:e,request:c,onComplete:a}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+mn(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):l_("Unrecognized action received from server: "+mn(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){he(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Yu,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Yu,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>f5&&(this.reconnectDelay_=Yu),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*d5)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+Ws.nextConnectionId_++,l=this.lastSessionId;let c=!1,f=null;const m=function(){f?f.close():(c=!0,s())},g=function(b){he(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(b)};this.realtime_={close:m,sendRequest:g};const E=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[b,S]=await Promise.all([this.authTokenProvider_.getToken(E),this.appCheckTokenProvider_.getToken(E)]);c?An("getToken() completed but was canceled"):(An("getToken() completed. Creating connection."),this.authToken_=b&&b.accessToken,this.appCheckToken_=S&&S.token,f=new a5(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,P=>{ti(P+" ("+this.repoInfo_.toString()+")"),this.interrupt(p5)},l))}catch(b){this.log_("Failed to get token: "+b),c||(this.repoInfo_.nodeAdmin&&ti(b),m())}}}interrupt(e){An("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){An("Resuming connection for reason: "+e),delete this.interruptReasons_[e],kg(this.interruptReasons_)&&(this.reconnectDelay_=Yu,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(l=>Ly(l)).join("$"):s="default";const a=this.removeListen_(e,s);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,t){const s=new wt(e).toString();let a;if(this.listens.has(s)){const l=this.listens.get(s);a=l.get(t),l.delete(t),l.size===0&&this.listens.delete(s)}else a=void 0;return a}onAuthRevoked_(e,t){An("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=zb&&(this.reconnectDelay_=Bb,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){An("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=zb&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+vC.replace(/\./g,"-")]=1,I_()?e["framework.cordova"]=1:Iw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=cf.getInstance().currentlyOnline();return kg(this.interruptReasons_)&&e}}Ws.nextPersistentConnectionId_=0;Ws.nextConnectionId_=0;/**
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
 */class $e{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new $e(e,t)}}/**
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
 */class Gf{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new $e(Pl,e),a=new $e(Pl,t);return this.compare(s,a)!==0}minPost(){return $e.MIN}}/**
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
 */let wd;class WC extends Gf{static get __EMPTY_NODE(){return wd}static set __EMPTY_NODE(e){wd=e}compare(e,t){return ql(e.name,t.name)}isDefinedOn(e){throw Dl("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return $e.MIN}maxPost(){return new $e(ho,wd)}makePost(e,t){return he(typeof e=="string","KeyIndex indexValue must always be a string."),new $e(e,wd)}toString(){return".key"}}const yl=new WC;/**
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
 */class Sd{constructor(e,t,s,a,l=null){this.isReverse_=a,this.resultGenerator_=l,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=t?s(e.key,t):1,a&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class on{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??on.RED,this.left=a??Zn.EMPTY_NODE,this.right=l??Zn.EMPTY_NODE}copy(e,t,s,a,l){return new on(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return l<0?a=a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a=a.copy(null,t,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return Zn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,a;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Zn.EMPTY_NODE;a=s.right.min_(),s=s.copy(a.key,a.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,on.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,on.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}on.RED=!0;on.BLACK=!1;class m5{copy(e,t,s,a,l){return this}insert(e,t,s){return new on(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Zn{constructor(e,t=Zn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Zn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,on.BLACK,null,null))}remove(e){return new Zn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,on.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,a=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return a?a.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(a=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Sd(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Sd(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Sd(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Sd(this.root_,null,this.comparator_,!0,e)}}Zn.EMPTY_NODE=new m5;/**
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
 */function g5(n,e){return ql(n.name,e.name)}function jy(n,e){return ql(n,e)}/**
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
 */let c_;function _5(n){c_=n}const YC=function(n){return typeof n=="number"?"number:"+SC(n):"string:"+n},$C=function(n){if(n.isLeafNode()){const e=n.val();he(typeof e=="string"||typeof e=="number"||typeof e=="object"&&nr(e,".sv"),"Priority must be a string or number.")}else he(n===c_||n.isEmpty(),"priority of unexpected type.");he(n===c_||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let jb;class rn{static set __childrenNodeConstructor(e){jb=e}static get __childrenNodeConstructor(){return jb}constructor(e,t=rn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,he(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),$C(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new rn(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:rn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return We(e)?this:He(e)===".priority"?this.priorityNode_:rn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:rn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=He(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(he(s!==".priority"||ga(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,rn.__childrenNodeConstructor.EMPTY_NODE.updateChild(bt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+YC(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=SC(this.value_):e+=this.value_,this.lazyHash_=TC(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===rn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof rn.__childrenNodeConstructor?-1:(he(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,a=rn.VALUE_TYPE_ORDER.indexOf(t),l=rn.VALUE_TYPE_ORDER.indexOf(s);return he(a>=0,"Unknown leaf type: "+t),he(l>=0,"Unknown leaf type: "+s),a===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}rn.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let XC,ZC;function y5(n){XC=n}function v5(n){ZC=n}class E5 extends Gf{compare(e,t){const s=e.node.getPriority(),a=t.node.getPriority(),l=s.compareTo(a);return l===0?ql(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return $e.MIN}maxPost(){return new $e(ho,new rn("[PRIORITY-POST]",ZC))}makePost(e,t){const s=XC(e);return new $e(t,new rn("[PRIORITY-POST]",s))}toString(){return".priority"}}const Cn=new E5;/**
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
 */const T5=Math.log(2);class b5{constructor(e){const t=l=>parseInt(Math.log(l)/T5,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const a=s(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const hf=function(n,e,t,s){n.sort(e);const a=function(m,g){const E=g-m;let b,S;if(E===0)return null;if(E===1)return b=n[m],S=t?t(b):b,new on(S,b.node,on.BLACK,null,null);{const P=parseInt(E/2,10)+m,V=a(m,P),H=a(P+1,g);return b=n[P],S=t?t(b):b,new on(S,b.node,on.BLACK,V,H)}},l=function(m){let g=null,E=null,b=n.length;const S=function(V,H){const B=b-V,re=b;b-=V;const oe=a(B+1,re),le=n[B],me=t?t(le):le;P(new on(me,le.node,H,null,oe))},P=function(V){g?(g.left=V,g=V):(E=V,g=V)};for(let V=0;V<m.count;++V){const H=m.nextBitIsOne(),B=Math.pow(2,m.count-(V+1));H?S(B,on.BLACK):(S(B,on.BLACK),S(B,on.RED))}return E},c=new b5(n.length),f=l(c);return new Zn(s||e,f)};/**
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
 */let Ag;const ll={};class Qs{static get Default(){return he(ll&&Cn,"ChildrenNode.ts has not been loaded"),Ag=Ag||new Qs({".priority":ll},{".priority":Cn}),Ag}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=vl(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Zn?t:null}hasIndex(e){return nr(this.indexSet_,e.toString())}addIndex(e,t){he(e!==yl,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let a=!1;const l=t.getIterator($e.Wrap);let c=l.getNext();for(;c;)a=a||e.isDefinedOn(c.node),s.push(c),c=l.getNext();let f;a?f=hf(s,e.getCompare()):f=ll;const m=e.toString(),g=Object.assign({},this.indexSet_);g[m]=e;const E=Object.assign({},this.indexes_);return E[m]=f,new Qs(E,g)}addToIndexes(e,t){const s=Ud(this.indexes_,(a,l)=>{const c=vl(this.indexSet_,l);if(he(c,"Missing index implementation for "+l),a===ll)if(c.isDefinedOn(e.node)){const f=[],m=t.getIterator($e.Wrap);let g=m.getNext();for(;g;)g.name!==e.name&&f.push(g),g=m.getNext();return f.push(e),hf(f,c.getCompare())}else return ll;else{const f=t.get(e.name);let m=a;return f&&(m=m.remove(new $e(e.name,f))),m.insert(e,e.node)}});return new Qs(s,this.indexSet_)}removeFromIndexes(e,t){const s=Ud(this.indexes_,a=>{if(a===ll)return a;{const l=t.get(e.name);return l?a.remove(new $e(e.name,l)):a}});return new Qs(s,this.indexSet_)}}/**
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
 */let $u;class ot{static get EMPTY_NODE(){return $u||($u=new ot(new Zn(jy),null,Qs.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&$C(this.priorityNode_),this.children_.isEmpty()&&he(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||$u}updatePriority(e){return this.children_.isEmpty()?this:new ot(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?$u:t}}getChild(e){const t=He(e);return t===null?this:this.getImmediateChild(t).getChild(bt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(he(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new $e(e,t);let a,l;t.isEmpty()?(a=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(a=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(s,this.children_));const c=a.isEmpty()?$u:this.priorityNode_;return new ot(a,c,l)}}updateChild(e,t){const s=He(e);if(s===null)return t;{he(He(e)!==".priority"||ga(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(s).updateChild(bt(e),t);return this.updateImmediateChild(s,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,a=0,l=!0;if(this.forEachChild(Cn,(c,f)=>{t[c]=f.val(e),s++,l&&ot.INTEGER_REGEXP_.test(c)?a=Math.max(a,Number(c)):l=!1}),!e&&l&&a<2*s){const c=[];for(const f in t)c[f]=t[f];return c}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+YC(this.getPriority().val())+":"),this.forEachChild(Cn,(t,s)=>{const a=s.hash();a!==""&&(e+=":"+t+":"+a)}),this.lazyHash_=e===""?"":TC(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const a=this.resolveIndex_(s);if(a){const l=a.getPredecessorKey(new $e(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new $e(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new $e(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(a=>t(a.name,a.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,$e.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)<0;)a.getNext(),l=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,$e.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)>0;)a.getNext(),l=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Hc?-1:0}withIndex(e){if(e===yl||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new ot(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===yl||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(Cn),a=t.getIterator(Cn);let l=s.getNext(),c=a.getNext();for(;l&&c;){if(l.name!==c.name||!l.node.equals(c.node))return!1;l=s.getNext(),c=a.getNext()}return l===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===yl?null:this.indexMap_.get(e.toString())}}ot.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class w5 extends ot{constructor(){super(new Zn(jy),ot.EMPTY_NODE,Qs.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ot.EMPTY_NODE}isEmpty(){return!1}}const Hc=new w5;Object.defineProperties($e,{MIN:{value:new $e(Pl,ot.EMPTY_NODE)},MAX:{value:new $e(ho,Hc)}});WC.__EMPTY_NODE=ot.EMPTY_NODE;rn.__childrenNodeConstructor=ot;_5(Hc);v5(Hc);/**
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
 */const S5=!0;function pn(n,e=null){if(n===null)return ot.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),he(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new rn(t,pn(e))}if(!(n instanceof Array)&&S5){const t=[];let s=!1;if(Ni(n,(c,f)=>{if(c.substring(0,1)!=="."){const m=pn(f);m.isEmpty()||(s=s||!m.getPriority().isEmpty(),t.push(new $e(c,m)))}}),t.length===0)return ot.EMPTY_NODE;const l=hf(t,g5,c=>c.name,jy);if(s){const c=hf(t,Cn.getCompare());return new ot(l,pn(e),new Qs({".priority":c},{".priority":Cn}))}else return new ot(l,pn(e),Qs.Default)}else{let t=ot.EMPTY_NODE;return Ni(n,(s,a)=>{if(nr(n,s)&&s.substring(0,1)!=="."){const l=pn(a);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(s,l))}}),t.updatePriority(pn(e))}}y5(pn);/**
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
 */class A5 extends Gf{constructor(e){super(),this.indexPath_=e,he(!We(e)&&He(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),a=this.extractChild(t.node),l=s.compareTo(a);return l===0?ql(e.name,t.name):l}makePost(e,t){const s=pn(e),a=ot.EMPTY_NODE.updateChild(this.indexPath_,s);return new $e(t,a)}maxPost(){const e=ot.EMPTY_NODE.updateChild(this.indexPath_,Hc);return new $e(ho,e)}toString(){return HC(this.indexPath_,0).join("/")}}/**
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
 */class C5 extends Gf{compare(e,t){const s=e.node.compareTo(t.node);return s===0?ql(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return $e.MIN}maxPost(){return $e.MAX}makePost(e,t){const s=pn(e);return new $e(t,s)}toString(){return".value"}}const R5=new C5;/**
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
 */function I5(n){return{type:"value",snapshotNode:n}}function N5(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function P5(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function qb(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function x5(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class qy{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Cn}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return he(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return he(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Pl}hasEnd(){return this.endSet_}getIndexEndValue(){return he(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return he(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ho}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return he(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Cn}copy(){const e=new qy;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Fb(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Cn?t="$priority":n.index_===R5?t="$value":n.index_===yl?t="$key":(he(n.index_ instanceof A5,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=mn(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=mn(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+mn(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=mn(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+mn(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Hb(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Cn&&(e.i=n.index_.toString()),e}/**
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
 */class df extends jC{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(he(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,a){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.log_=Fc("p:rest:"),this.listens_={}}listen(e,t,s,a){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const c=df.getListenId_(e,s),f={};this.listens_[c]=f;const m=Fb(e._queryParams);this.restRequest_(l+".json",m,(g,E)=>{let b=E;if(g===404&&(b=null,g=null),g===null&&this.onDataUpdate_(l,b,!1,s),vl(this.listens_,c)===f){let S;g?g===401?S="permission_denied":S="rest_error:"+g:S="ok",a(S,null)}})}unlisten(e,t){const s=df.getListenId_(e,t);delete this.listens_[s]}get(e){const t=Fb(e._queryParams),s=e._path.toString(),a=new yf;return this.restRequest_(s+".json",t,(l,c)=>{let f=c;l===404&&(f=null,l=null),l===null?(this.onDataUpdate_(s,f,!1,null),a.resolve(f)):a.reject(new Error(f))}),a.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,l])=>{a&&a.accessToken&&(t.auth=a.accessToken),l&&l.token&&(t.ac=l.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+kl(t);this.log_("Sending REST request for "+c);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+c+" received. status:",f.status,"response:",f.responseText);let m=null;if(f.status>=200&&f.status<300){try{m=mc(f.responseText)}catch{ti("Failed to parse JSON response for "+c+": "+f.responseText)}s(null,m)}else f.status!==401&&f.status!==404&&ti("Got unsuccessful REST response for "+c+" Status: "+f.status),s(f.status);s=null}},f.open("GET",c,!0),f.send()})}}/**
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
 */class D5{constructor(){this.rootNode_=ot.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function ff(){return{value:null,children:new Map}}function JC(n,e,t){if(We(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=He(e);n.children.has(s)||n.children.set(s,ff());const a=n.children.get(s);e=bt(e),JC(a,e,t)}}function h_(n,e,t){n.value!==null?t(e,n.value):k5(n,(s,a)=>{const l=new wt(e.toString()+"/"+s);h_(a,l,t)})}function k5(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class M5{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Ni(this.last_,(s,a)=>{t[s]=t[s]-a}),this.last_=e,t}}/**
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
 */const Gb=10*1e3,O5=30*1e3,L5=300*1e3;class V5{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new M5(e);const s=Gb+(O5-Gb)*Math.random();dc(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;Ni(e,(a,l)=>{l>0&&nr(this.statsToReport_,a)&&(t[a]=l,s=!0)}),s&&this.server_.reportStats(t),dc(this.reportStats_.bind(this),Math.floor(Math.random()*2*L5))}}/**
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
 */var os;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(os||(os={}));function eR(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function tR(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function nR(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class pf{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=os.ACK_USER_WRITE,this.source=eR()}operationForChild(e){if(We(this.path)){if(this.affectedTree.value!=null)return he(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new wt(e));return new pf(pt(),t,this.revert)}}else return he(He(this.path)===e,"operationForChild called for unrelated child."),new pf(bt(this.path),this.affectedTree,this.revert)}}/**
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
 */class fo{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=os.OVERWRITE}operationForChild(e){return We(this.path)?new fo(this.source,pt(),this.snap.getImmediateChild(e)):new fo(this.source,bt(this.path),this.snap)}}/**
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
 */class Rc{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=os.MERGE}operationForChild(e){if(We(this.path)){const t=this.children.subtree(new wt(e));return t.isEmpty()?null:t.value?new fo(this.source,pt(),t.value):new Rc(this.source,pt(),t)}else return he(He(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Rc(this.source,bt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Fy{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(We(e))return this.isFullyInitialized()&&!this.filtered_;const t=He(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function U5(n,e,t,s){const a=[],l=[];return e.forEach(c=>{c.type==="child_changed"&&n.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&l.push(x5(c.childName,c.snapshotNode))}),Xu(n,a,"child_removed",e,s,t),Xu(n,a,"child_added",e,s,t),Xu(n,a,"child_moved",l,s,t),Xu(n,a,"child_changed",e,s,t),Xu(n,a,"value",e,s,t),a}function Xu(n,e,t,s,a,l){const c=s.filter(f=>f.type===t);c.sort((f,m)=>z5(n,f,m)),c.forEach(f=>{const m=B5(n,f,l);a.forEach(g=>{g.respondsTo(f.type)&&e.push(g.createEvent(m,n.query_))})})}function B5(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function z5(n,e,t){if(e.childName==null||t.childName==null)throw Dl("Should only compare child_ events.");const s=new $e(e.childName,e.snapshotNode),a=new $e(t.childName,t.snapshotNode);return n.index_.compare(s,a)}/**
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
 */function iR(n,e){return{eventCache:n,serverCache:e}}function fc(n,e,t,s){return iR(new Fy(e,t,s),n.serverCache)}function sR(n,e,t,s){return iR(n.eventCache,new Fy(e,t,s))}function d_(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function po(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Cg;const j5=()=>(Cg||(Cg=new Zn(R3)),Cg);class Tt{static fromObject(e){let t=new Tt(null);return Ni(e,(s,a)=>{t=t.set(new wt(s),a)}),t}constructor(e,t=j5()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:pt(),value:this.value};if(We(e))return null;{const s=He(e),a=this.children.get(s);if(a!==null){const l=a.findRootMostMatchingPathAndValue(bt(e),t);return l!=null?{path:$t(new wt(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(We(e))return this;{const t=He(e),s=this.children.get(t);return s!==null?s.subtree(bt(e)):new Tt(null)}}set(e,t){if(We(e))return new Tt(t,this.children);{const s=He(e),l=(this.children.get(s)||new Tt(null)).set(bt(e),t),c=this.children.insert(s,l);return new Tt(this.value,c)}}remove(e){if(We(e))return this.children.isEmpty()?new Tt(null):new Tt(null,this.children);{const t=He(e),s=this.children.get(t);if(s){const a=s.remove(bt(e));let l;return a.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,a),this.value===null&&l.isEmpty()?new Tt(null):new Tt(this.value,l)}else return this}}get(e){if(We(e))return this.value;{const t=He(e),s=this.children.get(t);return s?s.get(bt(e)):null}}setTree(e,t){if(We(e))return t;{const s=He(e),l=(this.children.get(s)||new Tt(null)).setTree(bt(e),t);let c;return l.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,l),new Tt(this.value,c)}}fold(e){return this.fold_(pt(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((a,l)=>{s[a]=l.fold_($t(e,a),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,pt(),t)}findOnPath_(e,t,s){const a=this.value?s(t,this.value):!1;if(a)return a;if(We(e))return null;{const l=He(e),c=this.children.get(l);return c?c.findOnPath_(bt(e),$t(t,l),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,pt(),t)}foreachOnPath_(e,t,s){if(We(e))return this;{this.value&&s(t,this.value);const a=He(e),l=this.children.get(a);return l?l.foreachOnPath_(bt(e),$t(t,a),s):new Tt(null)}}foreach(e){this.foreach_(pt(),e)}foreach_(e,t){this.children.inorderTraversal((s,a)=>{a.foreach_($t(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class ji{constructor(e){this.writeTree_=e}static empty(){return new ji(new Tt(null))}}function pc(n,e,t){if(We(e))return new ji(new Tt(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const a=s.path;let l=s.value;const c=Ci(a,e);return l=l.updateChild(c,t),new ji(n.writeTree_.set(a,l))}else{const a=new Tt(t),l=n.writeTree_.setTree(e,a);return new ji(l)}}}function Kb(n,e,t){let s=n;return Ni(t,(a,l)=>{s=pc(s,$t(e,a),l)}),s}function Qb(n,e){if(We(e))return ji.empty();{const t=n.writeTree_.setTree(e,new Tt(null));return new ji(t)}}function f_(n,e){return Eo(n,e)!=null}function Eo(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Ci(t.path,e)):null}function Wb(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Cn,(s,a)=>{e.push(new $e(s,a))}):n.writeTree_.children.inorderTraversal((s,a)=>{a.value!=null&&e.push(new $e(s,a.value))}),e}function la(n,e){if(We(e))return n;{const t=Eo(n,e);return t!=null?new ji(new Tt(t)):new ji(n.writeTree_.subtree(e))}}function p_(n){return n.writeTree_.isEmpty()}function xl(n,e){return rR(pt(),n.writeTree_,e)}function rR(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((a,l)=>{a===".priority"?(he(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):t=rR($t(n,a),l,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild($t(n,".priority"),s)),t}}/**
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
 */function aR(n,e){return hR(e,n)}function q5(n,e,t,s,a){he(s>n.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:a}),a&&(n.visibleWrites=pc(n.visibleWrites,e,t)),n.lastWriteId=s}function F5(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function H5(n,e){const t=n.allWrites.findIndex(f=>f.writeId===e);he(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let a=s.visible,l=!1,c=n.allWrites.length-1;for(;a&&c>=0;){const f=n.allWrites[c];f.visible&&(c>=t&&G5(f,s.path)?a=!1:Bi(s.path,f.path)&&(l=!0)),c--}if(a){if(l)return K5(n),!0;if(s.snap)n.visibleWrites=Qb(n.visibleWrites,s.path);else{const f=s.children;Ni(f,m=>{n.visibleWrites=Qb(n.visibleWrites,$t(s.path,m))})}return!0}else return!1}function G5(n,e){if(n.snap)return Bi(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Bi($t(n.path,t),e))return!0;return!1}function K5(n){n.visibleWrites=oR(n.allWrites,Q5,pt()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Q5(n){return n.visible}function oR(n,e,t){let s=ji.empty();for(let a=0;a<n.length;++a){const l=n[a];if(e(l)){const c=l.path;let f;if(l.snap)Bi(t,c)?(f=Ci(t,c),s=pc(s,f,l.snap)):Bi(c,t)&&(f=Ci(c,t),s=pc(s,pt(),l.snap.getChild(f)));else if(l.children){if(Bi(t,c))f=Ci(t,c),s=Kb(s,f,l.children);else if(Bi(c,t))if(f=Ci(c,t),We(f))s=Kb(s,pt(),l.children);else{const m=vl(l.children,He(f));if(m){const g=m.getChild(bt(f));s=pc(s,pt(),g)}}}else throw Dl("WriteRecord should have .snap or .children")}}return s}function lR(n,e,t,s,a){if(!s&&!a){const l=Eo(n.visibleWrites,e);if(l!=null)return l;{const c=la(n.visibleWrites,e);if(p_(c))return t;if(t==null&&!f_(c,pt()))return null;{const f=t||ot.EMPTY_NODE;return xl(c,f)}}}else{const l=la(n.visibleWrites,e);if(!a&&p_(l))return t;if(!a&&t==null&&!f_(l,pt()))return null;{const c=function(g){return(g.visible||a)&&(!s||!~s.indexOf(g.writeId))&&(Bi(g.path,e)||Bi(e,g.path))},f=oR(n.allWrites,c,e),m=t||ot.EMPTY_NODE;return xl(f,m)}}}function W5(n,e,t){let s=ot.EMPTY_NODE;const a=Eo(n.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(Cn,(l,c)=>{s=s.updateImmediateChild(l,c)}),s;if(t){const l=la(n.visibleWrites,e);return t.forEachChild(Cn,(c,f)=>{const m=xl(la(l,new wt(c)),f);s=s.updateImmediateChild(c,m)}),Wb(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const l=la(n.visibleWrites,e);return Wb(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function Y5(n,e,t,s,a){he(s||a,"Either existingEventSnap or existingServerSnap must exist");const l=$t(e,t);if(f_(n.visibleWrites,l))return null;{const c=la(n.visibleWrites,l);return p_(c)?a.getChild(t):xl(c,a.getChild(t))}}function $5(n,e,t,s){const a=$t(e,t),l=Eo(n.visibleWrites,a);if(l!=null)return l;if(s.isCompleteForChild(t)){const c=la(n.visibleWrites,a);return xl(c,s.getNode().getImmediateChild(t))}else return null}function X5(n,e){return Eo(n.visibleWrites,e)}function Z5(n,e,t,s,a,l,c){let f;const m=la(n.visibleWrites,e),g=Eo(m,pt());if(g!=null)f=g;else if(t!=null)f=xl(m,t);else return[];if(f=f.withIndex(c),!f.isEmpty()&&!f.isLeafNode()){const E=[],b=c.getCompare(),S=l?f.getReverseIteratorFrom(s,c):f.getIteratorFrom(s,c);let P=S.getNext();for(;P&&E.length<a;)b(P,s)!==0&&E.push(P),P=S.getNext();return E}else return[]}function J5(){return{visibleWrites:ji.empty(),allWrites:[],lastWriteId:-1}}function m_(n,e,t,s){return lR(n.writeTree,n.treePath,e,t,s)}function uR(n,e){return W5(n.writeTree,n.treePath,e)}function Yb(n,e,t,s){return Y5(n.writeTree,n.treePath,e,t,s)}function mf(n,e){return X5(n.writeTree,$t(n.treePath,e))}function e6(n,e,t,s,a,l){return Z5(n.writeTree,n.treePath,e,t,s,a,l)}function Hy(n,e,t){return $5(n.writeTree,n.treePath,e,t)}function cR(n,e){return hR($t(n.treePath,e),n.writeTree)}function hR(n,e){return{treePath:n,writeTree:e}}/**
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
 */class t6{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;he(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),he(s!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(s);if(a){const l=a.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(s,qb(s,e.snapshotNode,a.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(s,P5(s,a.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(s,N5(s,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(s,qb(s,e.snapshotNode,a.oldSnap));else throw Dl("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class n6{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const dR=new n6;class Gy{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Fy(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Hy(this.writes_,e,s)}}getChildAfterChild(e,t,s){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:po(this.viewCache_),l=e6(this.writes_,a,t,1,s,e);return l.length===0?null:l[0]}}function i6(n,e){he(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),he(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function s6(n,e,t,s,a){const l=new t6;let c,f;if(t.type===os.OVERWRITE){const g=t;g.source.fromUser?c=g_(n,e,g.path,g.snap,s,a,l):(he(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered()&&!We(g.path),c=gf(n,e,g.path,g.snap,s,a,f,l))}else if(t.type===os.MERGE){const g=t;g.source.fromUser?c=a6(n,e,g.path,g.children,s,a,l):(he(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered(),c=__(n,e,g.path,g.children,s,a,f,l))}else if(t.type===os.ACK_USER_WRITE){const g=t;g.revert?c=u6(n,e,g.path,s,a,l):c=o6(n,e,g.path,g.affectedTree,s,a,l)}else if(t.type===os.LISTEN_COMPLETE)c=l6(n,e,t.path,s,l);else throw Dl("Unknown operation type: "+t.type);const m=l.getChanges();return r6(e,c,m),{viewCache:c,changes:m}}function r6(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const a=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=d_(n);(t.length>0||!n.eventCache.isFullyInitialized()||a&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&t.push(I5(d_(e)))}}function fR(n,e,t,s,a,l){const c=e.eventCache;if(mf(s,t)!=null)return e;{let f,m;if(We(t))if(he(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=po(e),E=g instanceof ot?g:ot.EMPTY_NODE,b=uR(s,E);f=n.filter.updateFullNode(e.eventCache.getNode(),b,l)}else{const g=m_(s,po(e));f=n.filter.updateFullNode(e.eventCache.getNode(),g,l)}else{const g=He(t);if(g===".priority"){he(ga(t)===1,"Can't have a priority with additional path components");const E=c.getNode();m=e.serverCache.getNode();const b=Yb(s,t,E,m);b!=null?f=n.filter.updatePriority(E,b):f=c.getNode()}else{const E=bt(t);let b;if(c.isCompleteForChild(g)){m=e.serverCache.getNode();const S=Yb(s,t,c.getNode(),m);S!=null?b=c.getNode().getImmediateChild(g).updateChild(E,S):b=c.getNode().getImmediateChild(g)}else b=Hy(s,g,e.serverCache);b!=null?f=n.filter.updateChild(c.getNode(),g,b,E,a,l):f=c.getNode()}}return fc(e,f,c.isFullyInitialized()||We(t),n.filter.filtersNodes())}}function gf(n,e,t,s,a,l,c,f){const m=e.serverCache;let g;const E=c?n.filter:n.filter.getIndexedFilter();if(We(t))g=E.updateFullNode(m.getNode(),s,null);else if(E.filtersNodes()&&!m.isFiltered()){const P=m.getNode().updateChild(t,s);g=E.updateFullNode(m.getNode(),P,null)}else{const P=He(t);if(!m.isCompleteForPath(t)&&ga(t)>1)return e;const V=bt(t),B=m.getNode().getImmediateChild(P).updateChild(V,s);P===".priority"?g=E.updatePriority(m.getNode(),B):g=E.updateChild(m.getNode(),P,B,V,dR,null)}const b=sR(e,g,m.isFullyInitialized()||We(t),E.filtersNodes()),S=new Gy(a,b,l);return fR(n,b,t,a,S,f)}function g_(n,e,t,s,a,l,c){const f=e.eventCache;let m,g;const E=new Gy(a,e,l);if(We(t))g=n.filter.updateFullNode(e.eventCache.getNode(),s,c),m=fc(e,g,!0,n.filter.filtersNodes());else{const b=He(t);if(b===".priority")g=n.filter.updatePriority(e.eventCache.getNode(),s),m=fc(e,g,f.isFullyInitialized(),f.isFiltered());else{const S=bt(t),P=f.getNode().getImmediateChild(b);let V;if(We(S))V=s;else{const H=E.getCompleteChild(b);H!=null?FC(S)===".priority"&&H.getChild(GC(S)).isEmpty()?V=H:V=H.updateChild(S,s):V=ot.EMPTY_NODE}if(P.equals(V))m=e;else{const H=n.filter.updateChild(f.getNode(),b,V,S,E,c);m=fc(e,H,f.isFullyInitialized(),n.filter.filtersNodes())}}}return m}function $b(n,e){return n.eventCache.isCompleteForChild(e)}function a6(n,e,t,s,a,l,c){let f=e;return s.foreach((m,g)=>{const E=$t(t,m);$b(e,He(E))&&(f=g_(n,f,E,g,a,l,c))}),s.foreach((m,g)=>{const E=$t(t,m);$b(e,He(E))||(f=g_(n,f,E,g,a,l,c))}),f}function Xb(n,e,t){return t.foreach((s,a)=>{e=e.updateChild(s,a)}),e}function __(n,e,t,s,a,l,c,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let m=e,g;We(t)?g=s:g=new Tt(null).setTree(t,s);const E=e.serverCache.getNode();return g.children.inorderTraversal((b,S)=>{if(E.hasChild(b)){const P=e.serverCache.getNode().getImmediateChild(b),V=Xb(n,P,S);m=gf(n,m,new wt(b),V,a,l,c,f)}}),g.children.inorderTraversal((b,S)=>{const P=!e.serverCache.isCompleteForChild(b)&&S.value===null;if(!E.hasChild(b)&&!P){const V=e.serverCache.getNode().getImmediateChild(b),H=Xb(n,V,S);m=gf(n,m,new wt(b),H,a,l,c,f)}}),m}function o6(n,e,t,s,a,l,c){if(mf(a,t)!=null)return e;const f=e.serverCache.isFiltered(),m=e.serverCache;if(s.value!=null){if(We(t)&&m.isFullyInitialized()||m.isCompleteForPath(t))return gf(n,e,t,m.getNode().getChild(t),a,l,f,c);if(We(t)){let g=new Tt(null);return m.getNode().forEachChild(yl,(E,b)=>{g=g.set(new wt(E),b)}),__(n,e,t,g,a,l,f,c)}else return e}else{let g=new Tt(null);return s.foreach((E,b)=>{const S=$t(t,E);m.isCompleteForPath(S)&&(g=g.set(E,m.getNode().getChild(S)))}),__(n,e,t,g,a,l,f,c)}}function l6(n,e,t,s,a){const l=e.serverCache,c=sR(e,l.getNode(),l.isFullyInitialized()||We(t),l.isFiltered());return fR(n,c,t,s,dR,a)}function u6(n,e,t,s,a,l){let c;if(mf(s,t)!=null)return e;{const f=new Gy(s,e,a),m=e.eventCache.getNode();let g;if(We(t)||He(t)===".priority"){let E;if(e.serverCache.isFullyInitialized())E=m_(s,po(e));else{const b=e.serverCache.getNode();he(b instanceof ot,"serverChildren would be complete if leaf node"),E=uR(s,b)}E=E,g=n.filter.updateFullNode(m,E,l)}else{const E=He(t);let b=Hy(s,E,e.serverCache);b==null&&e.serverCache.isCompleteForChild(E)&&(b=m.getImmediateChild(E)),b!=null?g=n.filter.updateChild(m,E,b,bt(t),f,l):e.eventCache.getNode().hasChild(E)?g=n.filter.updateChild(m,E,ot.EMPTY_NODE,bt(t),f,l):g=m,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=m_(s,po(e)),c.isLeafNode()&&(g=n.filter.updateFullNode(g,c,l)))}return c=e.serverCache.isFullyInitialized()||mf(s,pt())!=null,fc(e,g,c,n.filter.filtersNodes())}}function c6(n,e){const t=po(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!We(e)&&!t.getImmediateChild(He(e)).isEmpty())?t.getChild(e):null}function Zb(n,e,t,s){e.type===os.MERGE&&e.source.queryId!==null&&(he(po(n.viewCache_),"We should always have a full cache before handling merges"),he(d_(n.viewCache_),"Missing event cache, even though we have a server cache"));const a=n.viewCache_,l=s6(n.processor_,a,e,t,s);return i6(n.processor_,l.viewCache),he(l.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=l.viewCache,h6(n,l.changes,l.viewCache.eventCache.getNode())}function h6(n,e,t,s){const a=n.eventRegistrations_;return U5(n.eventGenerator_,e,t,a)}/**
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
 */let Jb;function d6(n){he(!Jb,"__referenceConstructor has already been defined"),Jb=n}function Ky(n,e,t,s){const a=e.source.queryId;if(a!==null){const l=n.views.get(a);return he(l!=null,"SyncTree gave us an op for an invalid query."),Zb(l,e,t,s)}else{let l=[];for(const c of n.views.values())l=l.concat(Zb(c,e,t,s));return l}}function Qy(n,e){let t=null;for(const s of n.views.values())t=t||c6(s,e);return t}/**
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
 */let ew;function f6(n){he(!ew,"__referenceConstructor has already been defined"),ew=n}class tw{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Tt(null),this.pendingWriteTree_=J5(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function pR(n,e,t,s,a){return q5(n.pendingWriteTree_,e,t,s,a),a?Qf(n,new fo(eR(),e,t)):[]}function no(n,e,t=!1){const s=F5(n.pendingWriteTree_,e);if(H5(n.pendingWriteTree_,e)){let l=new Tt(null);return s.snap!=null?l=l.set(pt(),!0):Ni(s.children,c=>{l=l.set(new wt(c),!0)}),Qf(n,new pf(s.path,l,t))}else return[]}function Kf(n,e,t){return Qf(n,new fo(tR(),e,t))}function p6(n,e,t){const s=Tt.fromObject(t);return Qf(n,new Rc(tR(),e,s))}function m6(n,e,t,s){const a=_R(n,s);if(a!=null){const l=yR(a),c=l.path,f=l.queryId,m=Ci(c,e),g=new fo(nR(f),m,t);return vR(n,c,g)}else return[]}function g6(n,e,t,s){const a=_R(n,s);if(a){const l=yR(a),c=l.path,f=l.queryId,m=Ci(c,e),g=Tt.fromObject(t),E=new Rc(nR(f),m,g);return vR(n,c,E)}else return[]}function Wy(n,e,t){const a=n.pendingWriteTree_,l=n.syncPointTree_.findOnPath(e,(c,f)=>{const m=Ci(c,e),g=Qy(f,m);if(g)return g});return lR(a,e,l,t,!0)}function Qf(n,e){return mR(e,n.syncPointTree_,null,aR(n.pendingWriteTree_,pt()))}function mR(n,e,t,s){if(We(n.path))return gR(n,e,t,s);{const a=e.get(pt());t==null&&a!=null&&(t=Qy(a,pt()));let l=[];const c=He(n.path),f=n.operationForChild(c),m=e.children.get(c);if(m&&f){const g=t?t.getImmediateChild(c):null,E=cR(s,c);l=l.concat(mR(f,m,g,E))}return a&&(l=l.concat(Ky(a,n,s,t))),l}}function gR(n,e,t,s){const a=e.get(pt());t==null&&a!=null&&(t=Qy(a,pt()));let l=[];return e.children.inorderTraversal((c,f)=>{const m=t?t.getImmediateChild(c):null,g=cR(s,c),E=n.operationForChild(c);E&&(l=l.concat(gR(E,f,m,g)))}),a&&(l=l.concat(Ky(a,n,s,t))),l}function _R(n,e){return n.tagToQueryMap.get(e)}function yR(n){const e=n.indexOf("$");return he(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new wt(n.substr(0,e))}}function vR(n,e,t){const s=n.syncPointTree_.get(e);he(s,"Missing sync point for query tag that we're tracking");const a=aR(n.pendingWriteTree_,e);return Ky(s,t,a,null)}/**
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
 */class Yy{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Yy(t)}node(){return this.node_}}class $y{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=$t(this.path_,e);return new $y(this.syncTree_,t)}node(){return Wy(this.syncTree_,this.path_)}}const _6=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},nw=function(n,e,t){if(!n||typeof n!="object")return n;if(he(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return y6(n[".sv"],e,t);if(typeof n[".sv"]=="object")return v6(n[".sv"],e);he(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},y6=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:he(!1,"Unexpected server value: "+n)}},v6=function(n,e,t){n.hasOwnProperty("increment")||he(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&he(!1,"Unexpected increment value: "+s);const a=e.node();if(he(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return s;const c=a.getValue();return typeof c!="number"?s:c+s},E6=function(n,e,t,s){return Xy(e,new $y(t,n),s)},ER=function(n,e,t){return Xy(n,new Yy(e),t)};function Xy(n,e,t){const s=n.getPriority().val(),a=nw(s,e.getImmediateChild(".priority"),t);let l;if(n.isLeafNode()){const c=n,f=nw(c.getValue(),e,t);return f!==c.getValue()||a!==c.getPriority().val()?new rn(f,pn(a)):n}else{const c=n;return l=c,a!==c.getPriority().val()&&(l=l.updatePriority(new rn(a))),c.forEachChild(Cn,(f,m)=>{const g=Xy(m,e.getImmediateChild(f),t);g!==m&&(l=l.updateImmediateChild(f,g))}),l}}/**
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
 */class Zy{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Jy(n,e){let t=e instanceof wt?e:new wt(e),s=n,a=He(t);for(;a!==null;){const l=vl(s.node.children,a)||{children:{},childCount:0};s=new Zy(a,s,l),t=bt(t),a=He(t)}return s}function Hl(n){return n.node.value}function TR(n,e){n.node.value=e,y_(n)}function bR(n){return n.node.childCount>0}function T6(n){return Hl(n)===void 0&&!bR(n)}function Wf(n,e){Ni(n.node.children,(t,s)=>{e(new Zy(t,n,s))})}function wR(n,e,t,s){t&&e(n),Wf(n,a=>{wR(a,e,!0)})}function b6(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Gc(n){return new wt(n.parent===null?n.name:Gc(n.parent)+"/"+n.name)}function y_(n){n.parent!==null&&w6(n.parent,n.name,n)}function w6(n,e,t){const s=T6(t),a=nr(n.node.children,e);s&&a?(delete n.node.children[e],n.node.childCount--,y_(n)):!s&&!a&&(n.node.children[e]=t.node,n.node.childCount++,y_(n))}/**
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
 */const S6=/[\[\].#$\/\u0000-\u001F\u007F]/,A6=/[\[\].#$\u0000-\u001F\u007F]/,Rg=10*1024*1024,SR=function(n){return typeof n=="string"&&n.length!==0&&!S6.test(n)},AR=function(n){return typeof n=="string"&&n.length!==0&&!A6.test(n)},C6=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),AR(n)},CR=function(n,e,t,s){s&&e===void 0||ev(N_(n,"value"),e,t)},ev=function(n,e,t){const s=t instanceof wt?new l5(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Xa(s));if(typeof e=="function")throw new Error(n+"contains a function "+Xa(s)+" with contents = "+e.toString());if(bC(e))throw new Error(n+"contains "+e.toString()+" "+Xa(s));if(typeof e=="string"&&e.length>Rg/3&&vf(e)>Rg)throw new Error(n+"contains a string greater than "+Rg+" utf8 bytes "+Xa(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,l=!1;if(Ni(e,(c,f)=>{if(c===".value")a=!0;else if(c!==".priority"&&c!==".sv"&&(l=!0,!SR(c)))throw new Error(n+" contains an invalid key ("+c+") "+Xa(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);u5(s,c),ev(n,f,s),c5(s)}),a&&l)throw new Error(n+' contains ".value" child '+Xa(s)+" in addition to actual children.")}},RR=function(n,e,t,s){if(!AR(t))throw new Error(N_(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},R6=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),RR(n,e,t)},tv=function(n,e){if(He(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},I6=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!SR(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!C6(t))throw new Error(N_(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class N6{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function IR(n,e){let t=null;for(let s=0;s<e.length;s++){const a=e[s],l=a.getPath();t!==null&&!KC(l,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(a)}t&&n.eventLists_.push(t)}function er(n,e,t){IR(n,t),P6(n,s=>Bi(s,e)||Bi(e,s))}function P6(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const a=n.eventLists_[s];if(a){const l=a.path;e(l)?(x6(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function x6(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();hc&&An("event: "+t.toString()),Fl(s)}}}/**
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
 */const D6="repo_interrupt",k6=25;class M6{constructor(e,t,s,a){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new N6,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ff(),this.transactionQueueTree_=new Zy,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function O6(n,e,t){if(n.stats_=Uy(n.repoInfo_),n.forceRestClient_||k3())n.server_=new df(n.repoInfo_,(s,a,l,c)=>{iw(n,s,a,l,c)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>sw(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{mn(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Ws(n.repoInfo_,e,(s,a,l,c)=>{iw(n,s,a,l,c)},s=>{sw(n,s)},s=>{L6(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=U3(n.repoInfo_,()=>new V5(n.stats_,n.server_)),n.infoData_=new D5,n.infoSyncTree_=new tw({startListening:(s,a,l,c)=>{let f=[];const m=n.infoData_.getNode(s._path);return m.isEmpty()||(f=Kf(n.infoSyncTree_,s._path,m),setTimeout(()=>{c("ok")},0)),f},stopListening:()=>{}}),iv(n,"connected",!1),n.serverSyncTree_=new tw({startListening:(s,a,l,c)=>(n.server_.listen(s,l,a,(f,m)=>{const g=c(f,m);er(n.eventQueue_,s._path,g)}),[]),stopListening:(s,a)=>{n.server_.unlisten(s,a)}})}function NR(n){const t=n.infoData_.getNode(new wt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function nv(n){return _6({timestamp:NR(n)})}function iw(n,e,t,s,a){n.dataUpdateCount++;const l=new wt(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let c=[];if(a)if(s){const m=Ud(t,g=>pn(g));c=g6(n.serverSyncTree_,l,m,a)}else{const m=pn(t);c=m6(n.serverSyncTree_,l,m,a)}else if(s){const m=Ud(t,g=>pn(g));c=p6(n.serverSyncTree_,l,m)}else{const m=pn(t);c=Kf(n.serverSyncTree_,l,m)}let f=l;c.length>0&&(f=Yf(n,l)),er(n.eventQueue_,f,c)}function sw(n,e){iv(n,"connected",e),e===!1&&U6(n)}function L6(n,e){Ni(e,(t,s)=>{iv(n,t,s)})}function iv(n,e,t){const s=new wt("/.info/"+e),a=pn(t);n.infoData_.updateSnapshot(s,a);const l=Kf(n.infoSyncTree_,s,a);er(n.eventQueue_,s,l)}function PR(n){return n.nextWriteId_++}function V6(n,e,t,s,a){sv(n,"set",{path:e.toString(),value:t,priority:s});const l=nv(n),c=pn(t,s),f=Wy(n.serverSyncTree_,e),m=ER(c,f,l),g=PR(n),E=pR(n.serverSyncTree_,e,m,g,!0);IR(n.eventQueue_,E),n.server_.put(e.toString(),c.val(!0),(S,P)=>{const V=S==="ok";V||ti("set at "+e+" failed: "+S);const H=no(n.serverSyncTree_,g,!V);er(n.eventQueue_,e,H),z6(n,a,S,P)});const b=OR(n,e);Yf(n,b),er(n.eventQueue_,b,[])}function U6(n){sv(n,"onDisconnectEvents");const e=nv(n),t=ff();h_(n.onDisconnect_,pt(),(a,l)=>{const c=E6(a,l,n.serverSyncTree_,e);JC(t,a,c)});let s=[];h_(t,pt(),(a,l)=>{s=s.concat(Kf(n.serverSyncTree_,a,l));const c=OR(n,a);Yf(n,c)}),n.onDisconnect_=ff(),er(n.eventQueue_,pt(),s)}function B6(n){n.persistentConnection_&&n.persistentConnection_.interrupt(D6)}function sv(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),An(t,...e)}function z6(n,e,t,s){e&&Fl(()=>{if(t==="ok")e(null);else{const a=(t||"error").toUpperCase();let l=a;s&&(l+=": "+s);const c=new Error(l);c.code=a,e(c)}})}function xR(n,e,t){return Wy(n.serverSyncTree_,e,t)||ot.EMPTY_NODE}function rv(n,e=n.transactionQueueTree_){if(e||$f(n,e),Hl(e)){const t=kR(n,e);he(t.length>0,"Sending zero length transaction queue"),t.every(a=>a.status===0)&&j6(n,Gc(e),t)}else bR(e)&&Wf(e,t=>{rv(n,t)})}function j6(n,e,t){const s=t.map(g=>g.currentWriteId),a=xR(n,e,s);let l=a;const c=a.hash();for(let g=0;g<t.length;g++){const E=t[g];he(E.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),E.status=1,E.retryCount++;const b=Ci(e,E.path);l=l.updateChild(b,E.currentOutputSnapshotRaw)}const f=l.val(!0),m=e;n.server_.put(m.toString(),f,g=>{sv(n,"transaction put response",{path:m.toString(),status:g});let E=[];if(g==="ok"){const b=[];for(let S=0;S<t.length;S++)t[S].status=2,E=E.concat(no(n.serverSyncTree_,t[S].currentWriteId)),t[S].onComplete&&b.push(()=>t[S].onComplete(null,!0,t[S].currentOutputSnapshotResolved)),t[S].unwatcher();$f(n,Jy(n.transactionQueueTree_,e)),rv(n,n.transactionQueueTree_),er(n.eventQueue_,e,E);for(let S=0;S<b.length;S++)Fl(b[S])}else{if(g==="datastale")for(let b=0;b<t.length;b++)t[b].status===3?t[b].status=4:t[b].status=0;else{ti("transaction at "+m.toString()+" failed: "+g);for(let b=0;b<t.length;b++)t[b].status=4,t[b].abortReason=g}Yf(n,e)}},c)}function Yf(n,e){const t=DR(n,e),s=Gc(t),a=kR(n,t);return q6(n,a,s),s}function q6(n,e,t){if(e.length===0)return;const s=[];let a=[];const c=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const m=e[f],g=Ci(t,m.path);let E=!1,b;if(he(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),m.status===4)E=!0,b=m.abortReason,a=a.concat(no(n.serverSyncTree_,m.currentWriteId,!0));else if(m.status===0)if(m.retryCount>=k6)E=!0,b="maxretry",a=a.concat(no(n.serverSyncTree_,m.currentWriteId,!0));else{const S=xR(n,m.path,c);m.currentInputSnapshot=S;const P=e[f].update(S.val());if(P!==void 0){ev("transaction failed: Data returned ",P,m.path);let V=pn(P);typeof P=="object"&&P!=null&&nr(P,".priority")||(V=V.updatePriority(S.getPriority()));const B=m.currentWriteId,re=nv(n),oe=ER(V,S,re);m.currentOutputSnapshotRaw=V,m.currentOutputSnapshotResolved=oe,m.currentWriteId=PR(n),c.splice(c.indexOf(B),1),a=a.concat(pR(n.serverSyncTree_,m.path,oe,m.currentWriteId,m.applyLocally)),a=a.concat(no(n.serverSyncTree_,B,!0))}else E=!0,b="nodata",a=a.concat(no(n.serverSyncTree_,m.currentWriteId,!0))}er(n.eventQueue_,t,a),a=[],E&&(e[f].status=2,(function(S){setTimeout(S,Math.floor(0))})(e[f].unwatcher),e[f].onComplete&&(b==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(b),!1,null))))}$f(n,n.transactionQueueTree_);for(let f=0;f<s.length;f++)Fl(s[f]);rv(n,n.transactionQueueTree_)}function DR(n,e){let t,s=n.transactionQueueTree_;for(t=He(e);t!==null&&Hl(s)===void 0;)s=Jy(s,t),e=bt(e),t=He(e);return s}function kR(n,e){const t=[];return MR(n,e,t),t.sort((s,a)=>s.order-a.order),t}function MR(n,e,t){const s=Hl(e);if(s)for(let a=0;a<s.length;a++)t.push(s[a]);Wf(e,a=>{MR(n,a,t)})}function $f(n,e){const t=Hl(e);if(t){let s=0;for(let a=0;a<t.length;a++)t[a].status!==2&&(t[s]=t[a],s++);t.length=s,TR(e,t.length>0?t:void 0)}Wf(e,s=>{$f(n,s)})}function OR(n,e){const t=Gc(DR(n,e)),s=Jy(n.transactionQueueTree_,e);return b6(s,a=>{Ig(n,a)}),Ig(n,s),wR(s,a=>{Ig(n,a)}),t}function Ig(n,e){const t=Hl(e);if(t){const s=[];let a=[],l=-1;for(let c=0;c<t.length;c++)t[c].status===3||(t[c].status===1?(he(l===c-1,"All SENT items should be at beginning of queue."),l=c,t[c].status=3,t[c].abortReason="set"):(he(t[c].status===0,"Unexpected transaction status in abort"),t[c].unwatcher(),a=a.concat(no(n.serverSyncTree_,t[c].currentWriteId,!0)),t[c].onComplete&&s.push(t[c].onComplete.bind(null,new Error("set"),!1,null))));l===-1?TR(e,void 0):t.length=l+1,er(n.eventQueue_,Gc(e),a);for(let c=0;c<s.length;c++)Fl(s[c])}}/**
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
 */function F6(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let a=t[s];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function H6(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ti(`Invalid query segment '${t}' in query '${n}'`)}return e}const rw=function(n,e){const t=G6(n),s=t.namespace;t.domain==="firebase.com"&&Js(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Js("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||A3();const a=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new MC(t.host,t.secure,s,a,e,"",s!==t.subdomain),path:new wt(t.pathString)}},G6=function(n){let e="",t="",s="",a="",l="",c=!0,f="https",m=443;if(typeof n=="string"){let g=n.indexOf("//");g>=0&&(f=n.substring(0,g-1),n=n.substring(g+2));let E=n.indexOf("/");E===-1&&(E=n.length);let b=n.indexOf("?");b===-1&&(b=n.length),e=n.substring(0,Math.min(E,b)),E<b&&(a=F6(n.substring(E,b)));const S=H6(n.substring(Math.min(n.length,b)));g=e.indexOf(":"),g>=0?(c=f==="https"||f==="wss",m=parseInt(e.substring(g+1),10)):g=e.length;const P=e.slice(0,g);if(P.toLowerCase()==="localhost")t="localhost";else if(P.split(".").length<=2)t=P;else{const V=e.indexOf(".");s=e.substring(0,V).toLowerCase(),t=e.substring(V+1),l=s}"ns"in S&&(l=S.ns)}return{host:e,port:m,domain:t,subdomain:s,secure:c,scheme:f,pathString:a,namespace:l}};/**
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
 */const aw="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",K6=(function(){let n=0;const e=[];return function(t){const s=t===n;n=t;let a;const l=new Array(8);for(a=7;a>=0;a--)l[a]=aw.charAt(t%64),t=Math.floor(t/64);he(t===0,"Cannot push at time == 0");let c=l.join("");if(s){for(a=11;a>=0&&e[a]===63;a--)e[a]=0;e[a]++}else for(a=0;a<12;a++)e[a]=Math.floor(Math.random()*64);for(a=0;a<12;a++)c+=aw.charAt(e[a]);return he(c.length===20,"nextPushId: Length should be 20."),c}})();/**
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
 */class av{constructor(e,t,s,a){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=a}get key(){return We(this._path)?null:FC(this._path)}get ref(){return new To(this._repo,this._path)}get _queryIdentifier(){const e=Hb(this._queryParams),t=Ly(e);return t==="{}"?"default":t}get _queryObject(){return Hb(this._queryParams)}isEqual(e){if(e=st(e),!(e instanceof av))return!1;const t=this._repo===e._repo,s=KC(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return t&&s&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+o5(this._path)}}class To extends av{constructor(e,t){super(e,t,new qy,!1)}get parent(){const e=GC(this._path);return e===null?null:new To(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}function Ng(n,e){return n=st(n),n._checkNotDeleted("ref"),e!==void 0?v_(n._root,e):n._root}function v_(n,e){return n=st(n),He(n._path)===null?R6("child","path",e):RR("child","path",e),new To(n._repo,$t(n._path,e))}function ow(n,e){n=st(n),tv("push",n._path),CR("push",e,n._path,!0);const t=NR(n._repo),s=K6(t),a=v_(n,s),l=v_(n,s);let c;return c=Promise.resolve(l),a.then=c.then.bind(c),a.catch=c.then.bind(c,void 0),a}function Q6(n){return tv("remove",n._path),E_(n,null)}function E_(n,e){n=st(n),tv("set",n._path),CR("set",e,n._path,!1);const t=new yf;return V6(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}d6(To);f6(To);/**
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
 */const W6="FIREBASE_DATABASE_EMULATOR_HOST",T_={};let Y6=!1;function $6(n,e,t,s){const a=e.lastIndexOf(":"),l=e.substring(0,a),c=_a(l);n.repoInfo_=new MC(e,c,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function X6(n,e,t,s,a){let l=s||n.options.databaseURL;l===void 0&&(n.options.projectId||Js("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),An("Using default host for project ",n.options.projectId),l=`${n.options.projectId}-default-rtdb.firebaseio.com`);let c=rw(l,a),f=c.repoInfo,m;typeof process<"u"&&Ab&&(m=Ab[W6]),m?(l=`http://${m}?ns=${f.namespace}`,c=rw(l,a),f=c.repoInfo):c.repoInfo.secure;const g=new O3(n.name,n.options,e);I6("Invalid Firebase Database URL",c),We(c.path)||Js("Database URL must point to the root of a Firebase Database (not including a child path).");const E=J6(f,n,g,new M3(n,t));return new eL(E,n)}function Z6(n,e){const t=T_[e];(!t||t[n.key]!==n)&&Js(`Database ${e}(${n.repoInfo_}) has already been deleted.`),B6(n),delete t[n.key]}function J6(n,e,t,s){let a=T_[e.name];a||(a={},T_[e.name]=a);let l=a[n.toURLString()];return l&&Js("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new M6(n,Y6,t,s),a[n.toURLString()]=l,l}class eL{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(O6(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new To(this._repo,pt())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Z6(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Js("Cannot call "+e+" on a deleted database.")}}function tL(n=Nc(),e){const t=ya(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=ww("database");s&&nL(t,...s)}return t}function nL(n,e,t,s={}){n=st(n),n._checkNotDeleted("useEmulator");const a=`${e}:${t}`,l=n._repoInternal;if(n._instanceStarted){if(a===n._repoInternal.repoInfo_.host&&qi(s,l.repoInfo_.emulatorOptions))return;Js("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let c;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&Js('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),c=new Od(Od.OWNER);else if(s.mockUserToken){const f=typeof s.mockUserToken=="string"?s.mockUserToken:Cw(s.mockUserToken,n.app.options.projectId);c=new Od(f)}_a(e)&&(C_(e),R_("Database",!0)),$6(l,a,s,c)}/**
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
 */function iL(n){v3(go),Fi(new Ri("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return X6(s,a,l,t)},"PUBLIC").setMultipleInstances(!0)),Jn(Cb,Rb,n),Jn(Cb,Rb,"esm2017")}/**
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
 */const sL={".sv":"timestamp"};function rL(){return sL}Ws.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Ws.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};iL();const aL={apiKey:"AIzaSyAuRCFW0cV8h-QRwDnr98cGidckrtj6Be8",authDomain:"chaturanga-by-ayansh-pathak.firebaseapp.com",projectId:"chaturanga-by-ayansh-pathak",storageBucket:"chaturanga-by-ayansh-pathak.firebasestorage.app",messagingSenderId:"1057979643450",appId:"1:1057979643450:web:d25d19d69186e241e0e703",measurementId:"G-VXE6Z8S5PS",databaseURL:"https://chaturanga-by-ayansh-pathak-default-rtdb.firebaseio.com"},Xf=sP().length===0?Ow(aL):Nc(),Re=gk(Xf),Vn=ZO(Xf),Pg=tL(Xf);typeof window<"u"&&m3(Xf);const Yn={log:(n,...e)=>{},warn:(n,...e)=>{},error:(n,...e)=>{console.error(`[Arena Error] ${n}`,...e)}},$r={set:(n,e,t)=>{const s={value:e,expiry:t?Date.now()+t:null};localStorage.setItem(n,JSON.stringify(s))},get:n=>{const e=localStorage.getItem(n);if(!e)return null;try{const t=JSON.parse(e);return t.expiry&&Date.now()>t.expiry?(localStorage.removeItem(n),null):t.value}catch(t){return console.error("Storage parse error:",t),null}},remove:n=>{localStorage.removeItem(n)},clear:()=>{Object.keys(localStorage).forEach(n=>{n.startsWith("chaturanga_")&&localStorage.removeItem(n)})}},lw=["https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=128&q=70","https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=128&q=70","https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=128&q=70","https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=128&q=70","https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=128&q=70","https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=128&q=70"],LR=pe.createContext(void 0),oL=({children:n})=>{const[e,t]=pe.useState(()=>$r.get("chaturanga_active_user")),[s,a]=pe.useState(e===null),[l,c]=pe.useState(()=>$r.get("chaturanga_game_history")||[]),[f,m]=pe.useState([]),[g,E]=pe.useState([]),[b,S]=pe.useState([]),[P,V]=pe.useState([]);pe.useEffect(()=>{const N=setTimeout(()=>{s&&(Yn.warn("Auth state sync timed out, forcing loading finish."),a(!1))},6e3),T=zM(Vn,async x=>{try{if(x){const j=$r.get("chaturanga_active_user");j&&j.id===x.uid&&a(!1);const z=await Il(tt(Re,"users",x.uid));if(z.exists()){const X=z.data();t(X),$r.set("chaturanga_active_user",X,1440*60*1e3)}else Yn.warn("Profile missing in Firestore for UID:",x.uid),t(null),$r.remove("chaturanga_active_user")}else e?.isGuest||(t(null),$r.remove("chaturanga_active_user"))}catch(j){Yn.error("Auth sync failed:",j)}finally{a(!1),clearTimeout(N)}},x=>{Yn.error("Auth state listener error:",x),a(!1),clearTimeout(N)});return()=>{T(),clearTimeout(N)}},[]),pe.useEffect(()=>{l.length>0&&$r.set("chaturanga_game_history",l,3600*1e3)},[l]),pe.useEffect(()=>{e&&$r.set("chaturanga_active_user",e,10080*60*1e3)},[e]);const H=async(N,T)=>{if(!N||!T)return{success:!1,message:"Please provide valid credentials."};let x=N.trim();if(!x.includes("@"))try{const j=wn(Re,"users"),z=Rl(j,QT("username","==",x)),X=await pg(z);X.empty?x=`${x}@chaturanga.app`:x=X.docs[0].data().email}catch(j){Yn.warn("Failed to find user email by username, falling back to default mapping:",j),x=`${x}@chaturanga.app`}try{return await LM(Vn,x,T),{success:!0,message:"Welcome back to Chaturanga!"}}catch(j){return Yn.error("Login error:",j),{success:!1,message:j.message||"Login failed."}}},B=async(N,T,x,j)=>{if(!N||!T||!x)return{success:!1,message:"All fields are required."};if(x.length<4)return{success:!1,message:"Password must be at least 4 characters."};try{const z=await OM(Vn,T,x),X={id:z.user.uid,username:N,email:T,avatar:j||"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",title:"Novice of Chaturanga",bio:"Practicing tactical maneuvers and king defenses.",joinedDate:new Date().toLocaleDateString("en-US",{month:"long",year:"numeric"}),stats:{rapid:1200,blitz:1200,bullet:1200,puzzle:1200,gamesPlayed:0,wins:0,losses:0,draws:0,currentStreak:0,bestStreak:0,puzzlesSolved:0,puzzleStreak:0,bestPuzzleStreak:0},ratingHistory:[{date:"Today",rapid:1200,blitz:1200,bullet:1200,puzzle:1200}],tournamentMedals:[],ratingMedals:[],clubsJoined:[],teamsJoined:[],storagePreference:"firestore"};await Xd(tt(Re,"users",z.user.uid),X);try{await ab(z.user)}catch(se){Yn.warn("Email verification send failed:",se)}return{success:!0,message:"Account created! Verification email sent."}}catch(z){return Yn.error("Signup error:",z),{success:!1,message:z.message||"Signup failed."}}},re=async()=>{await jM(Vn),t(null),localStorage.removeItem("chaturanga_active_user")},oe=async(N,T)=>{if(!e||!Vn.currentUser)return{success:!1,message:"Not authenticated."};if(!N||!N.includes("@"))return{success:!1,message:"Please enter a valid new email address."};try{await ob(Vn.currentUser,N);const x=e.email,j={...e,email:N,previousEmail:x};return await Vt(tt(Re,"users",Vn.currentUser.uid),{email:N,previousEmail:x}),t(j),{success:!0,message:`Email successfully updated from ${x} to ${N}! (Reversible at any time)`}}catch(x){return{success:!1,message:x.message}}},le=async N=>{if(!e||!e.previousEmail||!Vn.currentUser)return{success:!1,message:"No previous email address found to revert to."};try{const T=e.previousEmail;await ob(Vn.currentUser,T);const x=e.email,j={...e,email:T,previousEmail:x};return await Vt(tt(Re,"users",Vn.currentUser.uid),{email:T,previousEmail:x}),t(j),{success:!0,message:`Email successfully reverted back to ${T}!`}}catch(T){return{success:!1,message:T.message}}},me=(N,T,x,j)=>{if(j<=x)return N.ratingMedals;const z=[...N.ratingMedals];let X=!1;for(let se=1e3;se<=j;se+=100)if(x<se&&j>=se){const ae=`rm_gold_${T}_${se}`;z.some(_e=>_e.id===ae)||(z.push({id:ae,ratingAchieved:se,category:T,tier:"gold",message:`Congratulations for achieving ${se} rating!`,awardedAt:new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}),X=!0)}for(let se=1075;se<=j;se+=75)if(x<se&&j>=se&&se%100!==0){const ae=`rm_silver_${T}_${se}`;z.some(_e=>_e.id===ae)||(z.push({id:ae,ratingAchieved:se,category:T,tier:"silver",message:`Congratulations for achieving ${se} rating!`,awardedAt:new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}),X=!0)}for(let se=1050;se<=j;se+=50)if(x<se&&j>=se&&se%100!==0&&se%75!==0){const ae=`rm_bronze_${T}_${se}`;z.some(_e=>_e.id===ae)||(z.push({id:ae,ratingAchieved:se,category:T,tier:"bronze",message:`Congratulations for achieving ${se} rating!`,awardedAt:new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}),X=!0)}if(X)try{sg({particleCount:80,spread:70,origin:{y:.6}})}catch{}return z},Me=async(N,T)=>{if(!e)return;const x=e.stats[N],j=Math.max(400,x+T),z=me(e,N,x,j),X={...e,stats:{...e.stats,[N]:j},ratingMedals:z};t(X),await Vt(tt(Re,"users",e.id),{stats:X.stats,ratingMedals:X.ratingMedals})},Ee=async N=>{if(!e)return;const T={...N,id:`tm_${Date.now()}`,awardedTo:e.username,awardedAt:new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})},x={...e,tournamentMedals:[T,...e.tournamentMedals]};t(x),await Vt(tt(Re,"users",e.id),{tournamentMedals:x.tournamentMedals});try{sg({particleCount:120,spread:90,origin:{y:.5}})}catch{}},M=async N=>{if(!e)return;const T={...N,players:[N.white.id,N.black.id]};if(e.storagePreference==="rtdb"){const _e=Ng(Pg,"games"),we=ow(_e);await E_(we,T)}else await na(wn(Re,"games"),T);const x=N.result==="1-0"&&N.white.id===e.id||N.result==="0-1"&&N.black.id===e.id,j=N.result==="1-0"&&N.black.id===e.id||N.result==="0-1"&&N.white.id===e.id,z=N.result==="1/2-1/2",X=x?e.stats.currentStreak+1:j?0:e.stats.currentStreak,se=Math.max(e.stats.bestStreak,X),ae={...e.stats,gamesPlayed:e.stats.gamesPlayed+1,wins:e.stats.wins+(x?1:0),losses:e.stats.losses+(j?1:0),draws:e.stats.draws+(z?1:0),currentStreak:X,bestStreak:se};await I({stats:ae})},C=async N=>{if(!e)return;const T=new Date().toLocaleDateString();if(e.stats.lastPuzzleDate===T)return;const x=e.stats.puzzleStreak+1,j=Math.max(e.stats.bestPuzzleStreak,x),z={...e,stats:{...e.stats,puzzlesSolved:e.stats.puzzlesSolved+1,puzzleStreak:x,bestPuzzleStreak:j,lastPuzzleDate:T,lastPuzzleId:N}};t(z),await Vt(tt(Re,"users",e.id),{stats:z.stats});try{sg({particleCount:150,spread:90,origin:{y:.5}})}catch{}},I=async N=>{if(!e)return{success:!1,message:"Not authenticated."};const T={...e,...N};return t(T),await Vt(tt(Re,"users",e.id),N),{success:!0,message:"Profile updated successfully!"}},O=async()=>{e&&await I({isAnnouncer:!0})},U=async(N,T)=>{if(!e)return{success:!1,message:"Not logged in"};if(!T.trim()||!N.trim())return{success:!1,message:"Recipient and text are required"};const x=wn(Re,"users"),j=Rl(x,QT("username","==",N)),z=await pg(j);if(z.empty)return{success:!1,message:`User "${N}" not found.`};const X=z.docs[0].id,se={senderId:e.id,senderName:e.username,senderAvatar:e.avatar,senderFlag:e.countryFlag||"🇮🇳",recipientId:X,recipientName:N,participants:[e.id,X].sort(),content:T.trim(),timestamp:gg(),read:!1};return await na(wn(Re,"messages"),se),{success:!0,message:"Message sent!"}},q=async(N,T=!1)=>{e&&await na(wn(Re,"global_chat"),{sender:T?"ANNOUNCEMENT":e.username,text:N,timestamp:gg()})},D=async N=>{if(e)if(e.storagePreference==="rtdb"){const T=Ng(Pg,`users/${e.id}/gemini_history`),x=ow(T);await E_(x,{...N,timestamp:rL()})}else await na(wn(Re,"users",e.id,"gemini_history"),{...N,timestamp:gg()})},ct=async()=>{if(e)if(e.storagePreference==="rtdb"){const N=Ng(Pg,`users/${e.id}/gemini_history`);await Q6(N)}else(await pg(wn(Re,"users",e.id,"gemini_history"))).forEach(async T=>{await mA(tt(Re,"users",e.id,"gemini_history",T.id))})},Ne=async N=>{e&&await I({storagePreference:N})},Z=async()=>{const N=new Hs;try{const x=(await oO(Vn,N)).user,j=tt(Re,"users",x.uid),z=await Il(j);if(z.exists())t(z.data());else{const X={id:x.uid,username:x.displayName||"Grandmaster",email:x.email||"",avatar:x.photoURL||lw[0],title:"Novice of Chaturanga",bio:"Practicing tactical maneuvers and king defenses.",joinedDate:new Date().toLocaleDateString("en-US",{month:"long",year:"numeric"}),stats:{rapid:1200,blitz:1200,bullet:1200,puzzle:1200,gamesPlayed:0,wins:0,losses:0,draws:0,currentStreak:0,bestStreak:0,puzzlesSolved:0,puzzleStreak:0,bestPuzzleStreak:0},ratingHistory:[{date:"Today",rapid:1200,blitz:1200,bullet:1200,puzzle:1200}],tournamentMedals:[],ratingMedals:[],clubsJoined:[],teamsJoined:[],storagePreference:"firestore"};await Xd(j,X),t(X)}return{success:!0,message:"Signed in with Google!"}}catch(T){return Yn.error("Google Sign-In error:",T),{success:!1,message:T.message||"Google Sign-In failed."}}},ue=async()=>{a(!0);try{const N=wn(Re,"users"),j=`Guest${(await Nk(N)).data().count+1}`,z={id:`guest_${Date.now()}`,username:j,email:"guest@chaturanga.app",avatar:lw[0],title:"Guest of Chaturanga",bio:"Exploring the arena as a guest warrior.",joinedDate:new Date().toLocaleDateString("en-US",{month:"long",year:"numeric"}),stats:{rapid:1200,blitz:1200,bullet:1200,puzzle:1200,gamesPlayed:0,wins:0,losses:0,draws:0,currentStreak:0,bestStreak:0,puzzlesSolved:0,puzzleStreak:0,bestPuzzleStreak:0},ratingHistory:[{date:"Today",rapid:1200,blitz:1200,bullet:1200,puzzle:1200}],tournamentMedals:[],ratingMedals:[],clubsJoined:[],teamsJoined:[],storagePreference:"firestore",isGuest:!0};t(z),localStorage.setItem("chaturanga_active_user",JSON.stringify(z))}catch(N){Yn.error("Guest login failed:",N)}finally{a(!1)}},ve=async N=>{try{return await MM(Vn,N),{success:!0,message:"Password reset link sent to your email!"}}catch(T){return Yn.error("Password reset error:",T),{success:!1,message:T.message||"Failed to send password reset email."}}},Ue=async()=>{if(!Vn.currentUser)return{success:!1,message:"No user is currently signed in."};try{return await ab(Vn.currentUser),{success:!0,message:"Verification email resent successfully!"}}catch(N){return Yn.error("Verification resend error:",N),{success:!1,message:N.message||"Failed to resend verification email."}}};return R.jsx(LR.Provider,{value:{user:e,loading:s,setLoading:a,isAuthenticated:!!e,login:H,signup:B,logout:re,updateEmail:oe,revertEmail:le,updateProfile:I,grantAnnouncerStatus:O,updateRating:Me,awardTournamentMedal:Ee,addGameRecord:M,completeDailyPuzzle:C,gameHistory:l,allUsers:f,directMessages:g,chatHistory:P,setChatHistory:V,sendDirectMessage:U,geminiHistory:b,saveGeminiMessage:D,clearGeminiHistory:ct,updateStoragePreference:Ne,sendGlobalMessage:q,loginWithGoogle:Z,loginAsGuest:ue,sendPasswordReset:ve,sendVerification:Ue},children:n})},Gl=()=>{const n=pe.useContext(LR);if(!n)throw new Error("useAuth must be used within an AuthProvider");return n},VR=pe.createContext(void 0),lL=({children:n})=>{const{user:e,awardTournamentMedal:t}=Gl(),[s,a]=pe.useState([]),[l,c]=pe.useState(null);pe.useEffect(()=>{const H=Rl(wn(Re,"tournaments"),i_("createdAt","desc"));return Zd(H,re=>{const oe=re.docs.map(le=>({id:le.id,...le.data()}));a(oe)})},[]);const f=async({name:H,format:B,timeControl:re,totalRounds:oe,isClubOnly:le,clubId:me,clubName:Me})=>{const Ee=new Date,M=Ee.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),C=Ee.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!1}),I=e?{id:e.id,username:e.username,avatar:e.avatar,rating:e.stats.rapid,score:0,wins:0,draws:0,losses:0,streak:0}:{id:"guest",username:"Guest Player",avatar:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",rating:1200,score:0,wins:0,draws:0,losses:0,streak:0},O={name:H,format:B,timeControl:re,totalRounds:B==="knockout"?3:oe,currentRound:0,status:"upcoming",createdAt:M,scheduledTime:`${M} • ${C}`,hostId:e?e.id:"guest",hostName:e?e.username:"Guest Player",isClubOnly:!!le,clubId:me,clubName:Me,participants:[I],matches:[]};return{id:(await na(wn(Re,"tournaments"),O)).id,...O}},m=async(H,B)=>{if(!e)return{success:!1,message:"Please sign in to join tournaments."};const re=s.find(le=>le.id===H);if(!re)return{success:!1,message:"Tournament not found."};if(re.status==="completed")return{success:!1,message:"This tournament has already ended."};if(re.participants.some(le=>le.id===e.id))return{success:!0,message:"You are already registered in this tournament!"};if(re.isClubOnly&&re.clubId&&!(B?.includes(re.clubId)||re.hostId===e.id))return{success:!1,message:`Restricted: Only members of "${re.clubName||"the hosting club"}" can join this tournament.`};const oe={id:e.id,username:e.username,avatar:e.avatar,rating:e.stats.rapid,score:0,wins:0,draws:0,losses:0,streak:0};return await Vt(tt(Re,"tournaments",H),{participants:Sc(oe)}),{success:!0,message:`Successfully registered for "${re.name}"!`}},g=async H=>{if(!e)return{success:!1,message:"Please sign in to manage tournament registrations."};const B=s.find(re=>re.id===H);if(!B)return{success:!1,message:"Tournament not found."};if(B.status==="completed")return{success:!1,message:"This tournament has already ended."};if(B.status==="upcoming"){const re=B.participants.find(oe=>oe.id===e.id);re&&await Vt(tt(Re,"tournaments",H),{participants:vy(re)})}else{const re=B.participants.map(oe=>oe.id===e.id?{...oe,withdrawn:!0}:oe);await Vt(tt(Re,"tournaments",H),{participants:re})}return{success:!0,message:`Successfully withdrawn from "${B.name}".`}},E=async H=>{if(!e)return{success:!1,message:"Please sign in to manage tournament registrations."};const B=s.find(oe=>oe.id===H);if(!B)return{success:!1,message:"Tournament not found"};const re=B.participants.map(oe=>oe.id===e.id?{...oe,withdrawn:!1}:oe);return await Vt(tt(Re,"tournaments",H),{participants:re}),{success:!0,message:"Successfully rejoined tournament."}},b=g,S=async H=>{await Vt(tt(Re,"tournaments",H),{status:"ongoing",currentRound:1})},P=async H=>{const B=s.find(me=>me.id===H);if(!B)return;const re=B.currentRound+1,oe=re>B.totalRounds,le=B.participants.map(me=>{if(me.isBot){const Me=Math.random(),Ee=Me>.4?1:Me>.2?.5:0;return{...me,score:me.score+Ee,wins:me.wins+(Ee===1?1:0),draws:me.draws+(Ee===.5?1:0),losses:me.losses+(Ee===0?1:0),streak:Ee===1?me.streak+1:0}}return me});if(le.sort((me,Me)=>Me.score-me.score||Me.rating-me.rating),oe){const me=le.length>2,[Me,Ee,M,C]=le;if(e&&me){const I=le.findIndex(O=>O.id===e.id);if(I>=0&&I<4){const O=["gold","silver","bronze","brass"],U=I+1;t({tournamentId:B.id,tournamentName:B.name,format:B.format,tier:O[I],placement:U,dateTimeStr:B.scheduledTime})}}await Vt(tt(Re,"tournaments",H),{status:"completed",currentRound:B.totalRounds,participants:le,winners:me?{gold:Me||le[0],silver:Ee||le[1],bronze:M||le[2],brass:C||le[3]}:void 0})}else await Vt(tt(Re,"tournaments",H),{currentRound:re,participants:le})},V=async H=>{await P(H)};return R.jsx(VR.Provider,{value:{tournaments:s,activeTournament:l,setActiveTournament:c,createTournament:f,joinTournament:m,leaveTournament:b,withdrawTournament:g,rejoinTournament:E,startTournament:S,simulateNextRound:P,completeTournament:V},children:n})},hV=()=>{const n=pe.useContext(VR);if(!n)throw new Error("useTournaments must be used within a TournamentProvider");return n},UR=pe.createContext(void 0),uL=({children:n})=>{const{user:e}=Gl(),[t,s]=pe.useState([]);pe.useEffect(()=>{const P=Rl(wn(Re,"clubs"));return Zd(P,H=>{const B=H.docs.map(re=>({id:re.id,...re.data()}));s(B)})},[]);const a=async(P,V,H,B,re,oe=!1,le="",me)=>{const Me=B?"https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&w=800&q=80":"https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=800&q=80",Ee=B?"🛡️":"👑",M={name:P,tag:V.toUpperCase(),description:H,banner:re||Me,icon:me?.trim()?me.trim():Ee,isTeam:B,ownerId:e?e.id:"guest",ownerName:e?e.username:"Guest Player",createdAt:new Date().toLocaleDateString("en-US",{month:"long",year:"numeric"}),isPrivate:oe,password:le.trim()||void 0,members:[{userId:e?e.id:"guest",username:e?e.username:"Guest Player",avatar:e?e.avatar:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",rating:e?e.stats.rapid:1200,role:"owner",joinedAt:new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}],messages:[{id:`msg_${Date.now()}`,authorId:e?e.id:"guest",authorName:e?e.username:"Guest Player",authorAvatar:e?e.avatar:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",content:`Welcome to ${P}! Let the royal games begin.`,createdAt:"Just now"}],totalWins:0,totalTournaments:0};return{id:(await na(wn(Re,"clubs"),M)).id,...M}},l=async(P,V)=>{if(!e)return{success:!1,message:"Please sign in to join clubs or teams."};const H=t.find(re=>re.id===P);if(!H)return{success:!1,message:"Club not found."};if(H.members.some(re=>re.userId===e.id))return{success:!0,message:"Already a member."};if(H.isPrivate&&H.password&&(!V||V.trim()!==H.password.trim()))return{success:!1,message:"Incorrect club password. Please check and retry."};const B={userId:e.id,username:e.username,avatar:e.avatar,rating:e.stats.rapid,role:"member",joinedAt:new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})};return await Vt(tt(Re,"clubs",P),{members:Sc(B)}),{success:!0,message:`Successfully joined ${H.name}!`}},c=async P=>{if(!e)return;const V=t.find(B=>B.id===P);if(!V)return;const H=V.members.find(B=>B.userId===e.id);H&&await Vt(tt(Re,"clubs",P),{members:vy(H)})},f=async(P,V)=>{if(!e||!V.trim())return;const H={id:`msg_${Date.now()}`,authorId:e.id,authorName:e.username,authorAvatar:e.avatar,content:V.trim(),createdAt:"Just now"};await Vt(tt(Re,"clubs",P),{messages:Sc(H)})},m=P=>t.find(V=>V.id===P),g=async P=>{await mA(tt(Re,"clubs",P))},E=async(P,V)=>{await Vt(tt(Re,"clubs",P),{banner:V})},b=async(P,V)=>{await Vt(tt(Re,"clubs",P),{icon:V})},S=async(P,V,H)=>{const B=t.find(oe=>oe.id===P);if(!B)return;const re=B.members.map(oe=>oe.userId===V?{...oe,avatar:H}:oe);await Vt(tt(Re,"clubs",P),{members:re})};return R.jsx(UR.Provider,{value:{clubs:t,createClub:a,joinClub:l,leaveClub:c,deleteClub:g,updateClubIcon:b,updateClubBanner:E,updateMemberAvatar:S,postMessage:f,getClubById:m},children:n})},dV=()=>{const n=pe.useContext(UR);if(!n)throw new Error("useClubs must be used within a ClubProvider");return n},BR=pe.createContext(void 0),cL=({children:n})=>{const{user:e}=Gl(),[t,s]=pe.useState([]),[a,l]=pe.useState([]),[c,f]=pe.useState(!1);pe.useEffect(()=>{const P=Rl(wn(Re,"feedback"),i_("votes","desc"));return Zd(P,H=>{const B=H.docs.map(re=>({id:re.id,...re.data()}));s(B)})},[]),pe.useEffect(()=>{const P=Rl(wn(Re,"announcements"),i_("createdAt","desc"));return Zd(P,H=>{const B=H.docs.map(re=>({id:re.id,...re.data()}));l(B)})},[]),pe.useEffect(()=>{if(!e){f(!1);return}(async()=>{const V=await Il(tt(Re,"config","admin"));V.exists()&&V.data().uid===e.id?f(!0):f(!1)})()},[e]);const m=async P=>{if(!e||P!=="GhasdoodhooghasdoodhooILoveghasdoodhoo")return!1;const V=tt(Re,"config","admin");return(await Il(V)).exists()?!1:(await Xd(V,{uid:e.id,claimedAt:gt.now()}),f(!0),!0)},g=async(P,V,H)=>{if(!e)return;const B={authorId:e.id,authorName:e.username,authorAvatar:e.avatar,category:H,title:P,content:V,votes:1,upvotedBy:[e.id],createdAt:new Date().toLocaleDateString(),status:"Under Review",comments:[]};await na(wn(Re,"feedback"),B)},E=async P=>{if(!e)return;const V=tt(Re,"feedback",P),H=t.find(re=>re.id===P);if(!H)return;const B=H.upvotedBy.includes(e.id);await Vt(V,{votes:B?H.votes-1:H.votes+1,upvotedBy:B?vy(e.id):Sc(e.id)})},b=async(P,V)=>{if(!e||!V.trim())return;if(V==="/password=GhasdoodhooghasdoodhooILoveghasdoodhoo"){await m("GhasdoodhooghasdoodhooILoveghasdoodhoo");return}const H={id:`c_${Date.now()}`,authorId:e.id,authorName:e.username,authorAvatar:e.avatar,text:V.trim(),createdAt:"Just now"},B=tt(Re,"feedback",P);await Vt(B,{comments:Sc(H)})},S=async(P,V)=>{!c||!e||await na(wn(Re,"announcements"),{subject:P,text:V,authorName:e.username,authorAvatar:e.avatar,createdAt:gt.now()})};return R.jsx(BR.Provider,{value:{feedbackPosts:t,announcements:a,isAdmin:c,createFeedback:g,toggleUpvote:E,addComment:b,postAnnouncement:S,claimAdmin:m},children:n})},fV=()=>{const n=pe.useContext(BR);if(!n)throw new Error("useFeedback must be used within a FeedbackProvider");return n},uw=[{id:1,title:"King's Pin",description:"White to move. Exploit the pinned queen using the Elephant Bishop.",fen:"r1b1kb1r/pppp1ppp/8/4q3/4B3/8/PPP2PPP/RNBQK2R w KQkq - 0 8",solution:["O-O","Qxe4","Re1"],rating:1100,themes:["Pin","Elephant Bishop","Tactics"],toMove:"w"},{id:2,title:"Smothered Mate",description:"White to move. Deliver the classical royal smothered checkmate.",fen:"6k1/5ppp/8/8/8/5N2/5PPP/4Q1K1 w - - 0 1",solution:["Qe8#"],rating:950,themes:["Mate in 1","Back Rank"],toMove:"w"},{id:3,title:"Royal Knight Fork",description:"White to move. Deliver a royal knight fork winning the queen.",fen:"r1bqk2r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5",solution:["Qe2","d5","d3"],rating:1250,themes:["Fork","Discovered Attack"],toMove:"w"},{id:4,title:"Elephant Bishop Battery",description:"White to move. Shatter the kingside defense with a powerful bishop sacrifice.",fen:"r1bq1rk1/ppp2ppp/2np4/2b1p1N1/2B1P1n1/2NP4/PPP2PPP/R1BQK2R w KQ - 0 8",solution:["Qxg4","Bxg4","Bxf7#"],rating:1420,themes:["Mate in 2","Elephant Bishop","Sacrifice"],toMove:"w"},{id:5,title:"Royal Decoy Trap",description:"Black to move. Queen sacrifice leading to checkmate.",fen:"r1b2rk1/pp3ppp/2n5/3qp3/8/3B4/PPP2PPP/R1BQK2R b KQ - 0 11",solution:["Qxg2","Rf1","Bh3"],rating:1350,themes:["Decoy","Kingside Attack"],toMove:"b"},{id:6,title:"The Shining Skewer",description:"White to move. Win the heavy rook with a precision bishop skewer.",fen:"4r1k1/5ppp/8/8/8/8/4BPPP/4R1K1 w - - 0 1",solution:["Kf1","Kf8","Bb5"],rating:1200,themes:["Skewer","Endgame"],toMove:"w"},{id:7,title:"Opera House Classic Mate",description:"White to move. Morphine-style checkmate with rook and elephant bishop.",fen:"4kb1r/p2rqppp/5n2/1B2p1B1/4P3/1Q6/PPP2PPP/2KR4 w k - 0 14",solution:["Bxd7+","Nxd7","Qb8+","Nxb8","Rd8#"],rating:1650,themes:["Mate in 3","Elephant Bishop","Deflection","Sacrifice"],toMove:"w"},{id:8,title:"Back Rank Execution",description:"White to move. Clear the file and strike on the 8th rank.",fen:"3r2k1/p4ppp/1p6/8/8/4Q3/PP3PPP/3R2K1 w - - 0 1",solution:["Qe8+","Rxe8","Rxe8#"],rating:1050,themes:["Mate in 2","Back Rank","Sacrifice"],toMove:"w"},{id:9,title:"Royal Knight Outpost",description:"Black to move. Deflect the defender and win decisive material.",fen:"r4rk1/1pp2ppp/p1np1q2/4p3/B3P1b1/2PP1N2/PP3PPP/R2Q1RK1 b - - 0 11",solution:["Bxf3","Qxf3","Qxf3","gxf3","Ne7"],rating:1300,themes:["Discovered Attack","Simplification"],toMove:"b"},{id:10,title:"Double Elephant Crossfire",description:"White to move. Coordinate both bishops for an unstoppable mate net.",fen:"r1b2rk1/1p3ppp/pb1p4/4p3/1PP1P1nq/B1N2B2/P4PPP/R2Q1RK1 w - - 0 15",solution:["Bxg4","Bxg4","Qxd6"],rating:1520,themes:["Elephant Bishop","Tactics"],toMove:"w"},{id:11,title:"The Anastasia Strike",description:"White to move. Knight and rook deliver the aesthetic boundary mate.",fen:"5rk1/1p3ppp/8/3N4/8/8/5PPP/1R4K1 w - - 0 1",solution:["Ne7+","Kh8","Rxb7"],rating:1180,themes:["Tactics","Endgame"],toMove:"w"},{id:12,title:"Boden's Double Bishop Mate",description:"Black to move. Intersecting diagonals deliver immediate doom.",fen:"2kr3r/ppp2ppp/4b3/8/1b1n4/2N5/PPPB1PPP/R3K2R b KQ - 0 13",solution:["Nxc2+","Kd1","Nxa1"],rating:1400,themes:["Fork","Elephant Bishop"],toMove:"b"}],cw=["Mate in 1","Mate in 2","Mate in 3","Fork","Pin","Skewer","Elephant Bishop Strike","Royal Crown Siege","Smothered Mate","Back Rank Mate","Discovered Attack","Double Check","Deflection","Decoy","Clearance Sacrifice","Endgame Mastery","Grandmaster King Hunt","Chariot Rook Battery","Zwischenzug","Perpetual Defense"],hw=[{fenPattern:"6k1/5ppp/8/8/8/8/5PPP/R5K1 w - - 0 1",solutionGen:()=>["Ra8#"],theme:["Mate in 1","Back Rank"],ratingBase:850,toMove:"w",titleBase:"Corridor Mate",descBase:"White to move. Strike on the undefended baseline."},{fenPattern:"r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5",solutionGen:()=>["Bxf7+","Kxf7","Nxe5+"],theme:["Fork","Sacrifice","Elephant Bishop Strike"],ratingBase:1320,toMove:"w",titleBase:"Elephant Head Breach",descBase:"White to move. Break open the f7 square with the bishop."},{fenPattern:"r1b1k2r/pppp1ppp/8/4n3/3bP3/2N5/PPP2PPP/R1B1KB1R w KQkq - 0 9",solutionGen:()=>["Nb5","Bb6","Bf4"],theme:["Fork","Tactics"],ratingBase:1240,toMove:"w",titleBase:"Knight Outpost Thrust",descBase:"White to move. Create dual threats against c7 and d4."},{fenPattern:"r2qk2r/ppp2ppp/3b4/3np3/8/2NP1N2/PPP2PPP/R1BQ1RK1 w kq - 0 9",solutionGen:()=>["Nxd5","c6","Nc3"],theme:["Tactics","Material Gain"],ratingBase:1050,toMove:"w",titleBase:"Tactical Capture",descBase:"White to move. Capitalize on the loose knight in the center."},{fenPattern:"r1b2rk1/2q1bppp/p1np1n2/1p2p3/4P3/1NN1BP2/PPPQB1PP/2KR3R w - - 0 12",solutionGen:()=>["Nd5","Nxd5","exd5"],theme:["Discovered Attack","Center Control"],ratingBase:1460,toMove:"w",titleBase:"Central Outpost Spring",descBase:"White to move. Gain space and disrupt black's pawn structure."},{fenPattern:"r4rk1/1pp2ppp/p1np4/4p3/4P1B1/2PP4/PP3PPP/R4RK1 w - - 0 14",solutionGen:()=>["Bd7","Rad8","Bxc6"],theme:["Pin","Elephant Bishop Strike"],ratingBase:1180,toMove:"w",titleBase:"Elephant Infiltration",descBase:"White to move. Pin and compromise black's queenside structure."},{fenPattern:"2r3k1/5ppp/p3p3/1p6/3P4/P1r5/5PPP/R2R2K1 w - - 0 22",solutionGen:()=>["d5","exd5","Rxd5"],theme:["Endgame Mastery","Pawn Break"],ratingBase:1540,toMove:"w",titleBase:"Chariot Rook Push",descBase:"White to move. Break the central pawn blockade."},{fenPattern:"r1bqk2r/pp1nbppp/2p1pn2/3p4/2PP4/2N1PN2/PPQ2PPP/R1B1KB1R w KQkq - 2 7",solutionGen:()=>["e4","dxe4","Nxe4"],theme:["Opening Tactics","Clearance Sacrifice"],ratingBase:1380,toMove:"w",titleBase:"Vedic Gambit Break",descBase:"White to move. Unleash active piece mobility with e4."},{fenPattern:"r2q1rk1/pp1b1ppp/2n1pn2/2pp4/2PP4/2NBPN2/PP3PPP/R2QK2R w KQ - 4 9",solutionGen:()=>["cxd5","exd5","dxc5"],theme:["Tactics","Pawn Structure"],ratingBase:1290,toMove:"w",titleBase:"Tension Release",descBase:"White to move. Liquidate into a structural advantage."},{fenPattern:"6k1/5p1p/6p1/8/8/1r6/5PPP/3R2K1 w - - 0 1",solutionGen:()=>["h4","Kg7","g3"],theme:["Endgame Mastery","King Safety"],ratingBase:1120,toMove:"w",titleBase:"Luft & Fortification",descBase:"White to move. Create escape square for the crown king."},{fenPattern:"r1b1k2r/pp2bppp/2n1pn2/2pp4/3P4/2PBPN2/PP1N1PPP/R1BQ1RK1 b kq - 3 7",solutionGen:()=>["c4","Bc2","b5"],theme:["Queenside Expansion","Elephant Bishop Trap"],ratingBase:1410,toMove:"b",titleBase:"Elephant Cramp",descBase:"Black to move. Trap white's bishop diagonal with c4."},{fenPattern:"r2qk2r/ppp1bppp/2n1bn2/3pp3/4P3/2PP1N2/PP1NBPPP/R1BQK2R w KQkq - 1 7",solutionGen:()=>["O-O","O-O","Re1"],theme:["King Crown Safety","Castling"],ratingBase:980,toMove:"w",titleBase:"Crown King Sanctuary",descBase:"White to move. Castle into king safety and prepare central rook play."},{fenPattern:"r1bq1rk1/ppp1bppp/2n2n2/3pp3/4P3/2NP1N2/PPP1BPPP/R1BQK2R w KQ - 0 6",solutionGen:()=>["exd5","Nxd5","Nxd5","Qxd5"],theme:["Simplification","Tactics"],ratingBase:1160,toMove:"w",titleBase:"Central Exchange",descBase:"White to move. Simplify and open the e-file."},{fenPattern:"r1bqr1k1/pp1nbppp/2p1pn2/3p4/2PP4/2N1PN2/PP2BPPP/R1BQR1K1 w - - 6 9",solutionGen:()=>["b3","b6","Bb2"],theme:["Fianchetto","Elephant Bishop"],ratingBase:1490,toMove:"w",titleBase:"Dual Elephant Diagonals",descBase:"White to move. Develop the queenside bishop along the long diagonal."},{fenPattern:"r1bqk2r/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 2 4",solutionGen:()=>["c3","Nf6","d4"],theme:["Italian Game","Center Strike"],ratingBase:1210,toMove:"w",titleBase:"Classical Giuoco Attack",descBase:"White to move. Prepare d4 with c3."},{fenPattern:"r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",solutionGen:()=>["Ng5","d5","exd5"],theme:["Fried Liver Attack","Fork"],ratingBase:1600,toMove:"w",titleBase:"Royal F7 Infiltration",descBase:"White to move. Double attack on f7 with knight and bishop."},{fenPattern:"rnbqk2r/ppp1bppp/4pn2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 2 5",solutionGen:()=>["Bg5","O-O","e3"],theme:["Queen's Gambit","Pin"],ratingBase:1340,toMove:"w",titleBase:"Elephant Pin on Knight",descBase:"White to move. Pin the f6 knight against the black queen."},{fenPattern:"r1bq1rk1/pp1nbppp/2p1pn2/3p2B1/2PP4/2N1PN2/PP2BPPP/R2Q1RK1 b - - 2 8",solutionGen:()=>["h6","Bh4","Ne4"],theme:["Zwischenzug","Tactics"],ratingBase:1510,toMove:"b",titleBase:"Probing the Bishop",descBase:"Black to move. Question the pin with h6 and seize e4 outpost."},{fenPattern:"8/5pk1/6p1/7p/8/6PP/5PK1/8 w - - 0 1",solutionGen:()=>["Kf3","Kf6","Kf4"],theme:["Endgame Mastery","Opposition"],ratingBase:1720,toMove:"w",titleBase:"King Opposition Rule",descBase:"White to move. Seize the vital king opposition in the pawn endgame."},{fenPattern:"8/8/8/4k3/8/8/4K3/8 w - - 0 1",solutionGen:()=>["Ke3","Kd5","Kd3"],theme:["Endgame Mastery","Direct Opposition"],ratingBase:1850,toMove:"w",titleBase:"Triangulation & Space",descBase:"White to move. Hold the key squares with the royal king."},{fenPattern:"r2q1rk1/pp2bppp/2n1pn2/3p4/3P4/2N1PN2/PP1BBPPP/R2Q1RK1 w - - 0 9",solutionGen:()=>["Ne5","Nxe5","dxe5"],theme:["Positional Play","Outpost"],ratingBase:1350,toMove:"w",titleBase:"Knight Outpost Seizure",descBase:"White to move. Establish a powerful knight in the center."},{fenPattern:"r1bq1rk1/1p2bppp/p1np1n2/2p1p3/4P3/2PP1N2/PPB2PPP/RNBQR1K1 w - - 0 9",solutionGen:()=>["Nbd2","Re8","Nf1"],theme:["Ruy Lopez Setup","Maneuvering"],ratingBase:1450,toMove:"w",titleBase:"Spanish Knight Maneuver",descBase:"White to move. Redirect the knight towards the kingside."},{fenPattern:"rnbqkb1r/pp3ppp/4pn2/2pp4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 0 5",solutionGen:()=>["cxd5","exd5","Bg5"],theme:["Queen's Gambit","Exchange Variation"],ratingBase:1280,toMove:"w",titleBase:"Queenside Tension",descBase:"White to move. Resolve the central tension in your favor."},{fenPattern:"2kr3r/ppqbbppp/2n1pn2/2pp4/3P4/2PBPN2/PP1NBPPP/R1BQ1RK1 w - - 0 9",solutionGen:()=>["dxc5","Bxc5","b4"],theme:["Counter Attack","Queenside Storm"],ratingBase:1580,toMove:"w",titleBase:"Minority Attack Spark",descBase:"White to move. Launch a pawn storm against the castled king."},{fenPattern:"r1b2rk1/ppq1bppp/2n1pn2/3p4/3P4/2N1PN2/PP1BBPPP/R2Q1RK1 b - - 0 9",solutionGen:()=>["a6","a3","b5"],theme:["Expansion","Queen's Indian Defense"],ratingBase:1420,toMove:"b",titleBase:"Queenside Expansion",descBase:"Black to move. Prepare b5 and develop the light-squared bishop."},{fenPattern:"rnbqk2r/pp2bppp/4pn2/2pp4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 0 6",solutionGen:()=>["e3","O-O","Bd3"],theme:["Solid Development","Colle System"],ratingBase:1150,toMove:"w",titleBase:"Fortified Center",descBase:"White to move. Build a rock-solid pyramid in the center."},{fenPattern:"r1bqkb1r/pp1n1ppp/4pn2/2pp4/2PP4/2N1PN2/PP3PPP/R1BQKB1R w KQkq - 0 6",solutionGen:()=>["Bd3","Be7","O-O"],theme:["Classical Setup","Kingside Castling"],ratingBase:1100,toMove:"w",titleBase:"Standard Development",descBase:"White to move. Develop the bishop and prepare for safety."},{fenPattern:"r1b2rk1/pp1nbppp/1q2pn2/2pp4/2PP4/2N1PN2/PPQ1BPPP/R1B2RK1 w - - 0 9",solutionGen:()=>["Na4","Qc7","cxd5"],theme:["Pressuring the Queen","Tactics"],ratingBase:1520,toMove:"w",titleBase:"Queen Dislocation",descBase:"White to move. Force the black queen into an awkward square."},{fenPattern:"r2q1rk1/1p1nbppp/p1np4/2p1p3/P3P1b1/2PP1N2/1P1NBPPP/R1BQR1K1 w - - 0 11",solutionGen:()=>["h3","Bh5","Nc4"],theme:["Probing","Weak Square"],ratingBase:1480,toMove:"w",titleBase:"Kingside Provocation",descBase:"White to move. Challenge the bishop and eye the d6 weakness."},{fenPattern:"r2qkb1r/pp1n1ppp/2p1pn2/3p4/2PP4/2N1PN2/PP3PPP/R1BQKB1R b KQkq - 0 7",solutionGen:()=>["Bd6","Bd3","O-O"],theme:["Symmetry","Opening"],ratingBase:1080,toMove:"b",titleBase:"The Orthodox Wall",descBase:"Black to move. Develop the dark-squared bishop to its best diagonal."},{fenPattern:"r1bqk2r/pp2bppp/2n1pn2/2pp4/2PP4/2N1PN2/PP1B1PPP/R1BQKB1R w KQkq - 0 7",solutionGen:()=>["dxc5","Bxc5","a3"],theme:["Simplification","Positional Play"],ratingBase:1310,toMove:"w",titleBase:"Exchange and Expand",descBase:"White to move. Liquidate the center and prepare queenside play."},{fenPattern:"2rr2k1/1p2bppp/p1np1n2/2p1p3/4P3/PP1P1N1P/1BP1BPP1/R2QR1K1 w - - 0 14",solutionGen:()=>["c4","b5","cxb5"],theme:["Pawn Break","Center Control"],ratingBase:1620,toMove:"w",titleBase:"Central Constriction",descBase:"White to move. Restrict black's center with a well-timed c4."},{fenPattern:"r1b2rk1/1pq1bppp/p1np1n2/4p3/3NP3/P1N1B2P/1PP1BPP1/R2Q1RK1 w - - 0 11",solutionGen:()=>["Nf5","Bxf5","exf5"],theme:["Knight Outpost","Structure"],ratingBase:1540,toMove:"w",titleBase:"F5 Outpost Spark",descBase:"White to move. Seize the vital f5 square with your knight."},{fenPattern:"r2q1rk1/1pp1bppp/p1np1n2/4p3/B3P1b1/2PP1N2/PP3PPP/RNBQR1K1 b - - 0 9",solutionGen:()=>["b5","Bb3","Na5"],theme:["Spanish Defense","Counterplay"],ratingBase:1380,toMove:"b",titleBase:"Chasing the Bishop",descBase:"Black to move. Kick the light-squared bishop and claim space."},{fenPattern:"r1bqk2r/1pp1bppp/p1np1n2/4p3/B3P3/2P2N2/PP1P1PPP/RNBQR1K1 w KQkq - 0 8",solutionGen:()=>["d4","exd4","cxd4"],theme:["Italian Attack","Central Strike"],ratingBase:1250,toMove:"w",titleBase:"The d4 Explosion",descBase:"White to move. Unleash the center with a powerful d4 push."},{fenPattern:"rnbqk2r/ppp2ppp/5n2/3pp3/1bPP4/2N1P3/PP3PPP/R1BQKBNR w KQkq - 0 5",solutionGen:()=>["cxd5","Nxd5","Bd2"],theme:["Nimzo-Indian Style","Pins"],ratingBase:1410,toMove:"w",titleBase:"Pinned Knight Defense",descBase:"White to move. Defend the c3 pin and resolve the center."},{fenPattern:"r2qk2r/1ppbbppp/p1np1n2/4p3/P3P3/2PP1N2/1P2BPPP/RNBQ1RK1 b kq - 0 8",solutionGen:()=>["O-O","a5","Be6"],theme:["Quiet Development","Safety"],ratingBase:1120,toMove:"b",titleBase:"Safe Haven",descBase:"Black to move. Secure king safety and prepare development."},{fenPattern:"r1bq1rk1/pp1nbppp/2p1pn2/3p4/2PP4/2N1PN2/PPQ1BPPP/R1B2RK1 w - - 0 8",solutionGen:()=>["b3","b6","Bb2"],theme:["Solid Setup","Queenside Development"],ratingBase:1340,toMove:"w",titleBase:"The b3 Build-up",descBase:"White to move. Develop the queenside bishop along the long diagonal."},{fenPattern:"r1bqr1k1/pp1nbppp/2p1pn2/3p2B1/2PP4/2N1PN2/PP2BPPP/R2Q1RK1 b - - 0 8",solutionGen:()=>["h6","Bh4","Ne4"],theme:["Testing the Pin","Tactics"],ratingBase:1470,toMove:"b",titleBase:"Questioning the Bishop",descBase:"Black to move. Ask the g5 bishop its intentions."},{fenPattern:"r1bqk2r/pp2bppp/2np1n2/2p1p3/4P3/P1PP1N2/1PB2PPP/RNBQ1RK1 b kq - 0 8",solutionGen:()=>["O-O","h3","Be6"],theme:["Prophylaxis","Safety"],ratingBase:1200,toMove:"b",titleBase:"Standard Castle",descBase:"Black to move. Complete kingside development."},{fenPattern:"rnbq1rk1/ppp1bppp/4pn2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQ - 0 6",solutionGen:()=>["Bg5","c6","e3"],theme:["Classical Opening","Development"],ratingBase:1180,toMove:"w",titleBase:"Opening Thrust",descBase:"White to move. Activate the dark-squared bishop."},{fenPattern:"rnbqkb1r/ppp1bppp/4pn2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq - 0 5",solutionGen:()=>["O-O","Bg5","c6"],theme:["Opening","King Safety"],ratingBase:1050,toMove:"b",titleBase:"Castling Choice",descBase:"Black to move. Prioritize king safety over central action."},{fenPattern:"r2q1rk1/pp1nbppp/2n1p3/2ppP3/3P1B2/2P2N2/PP1N1PPP/R2Q1RK1 w - - 0 10",solutionGen:()=>["Nb3","c4","Nc1"],theme:["French Structure","Maneuvering"],ratingBase:1560,toMove:"w",titleBase:"The French Lock",descBase:"White to move. Reposition the knight to combat black's queenside push."},{fenPattern:"r1b2rk1/pp1nbppp/2p1pn2/q2p2B1/2PP4/2N1PN2/PPQ1BPPP/R4RK1 w - - 0 9",solutionGen:()=>["a3","dxc4","Bxc4"],theme:["Opening Trap","Probing"],ratingBase:1430,toMove:"w",titleBase:"Probing the Queen",descBase:"White to move. Create threats against the active black queen."},{fenPattern:"r2qk2r/1pp1bppp/p1np1n2/4p3/P3P1b1/2PP1N2/1P1NBPPP/R1BQ1RK1 b kq - 0 8",solutionGen:()=>["O-O","Nc4","Be6"],theme:["Symmetry","Quiet Play"],ratingBase:1100,toMove:"b",titleBase:"Symmetric Haven",descBase:"Black to move. Maintain the balance and castle."},{fenPattern:"rnbqk2r/pp2bppp/4pn2/2pp4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 0 6",solutionGen:()=>["cxd5","Nxd5","e4"],theme:["Central Exchange","Space"],ratingBase:1390,toMove:"w",titleBase:"The E4 Strike",descBase:"White to move. Clear the center and seize space with e4."},{fenPattern:"rnbq1rk1/pp3ppp/4pn2/2pp4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQ - 0 7",solutionGen:()=>["dxc5","Bxc5","e3"],theme:["Opening","Liquidation"],ratingBase:1150,toMove:"w",titleBase:"Center Liquidation",descBase:"White to move. Resolve the tension on d5."},{fenPattern:"r1bqk2r/pp1n1ppp/2p1pn2/3p4/2PP4/2N1PN2/PP1B1PPP/R2QKB1R b KQkq - 0 7",solutionGen:()=>["O-O","Be2","b6"],theme:["Classical Development","Solid"],ratingBase:1070,toMove:"b",titleBase:"Solid Walls",descBase:"Black to move. Build a solid structure and prepare development."}],hL=()=>{const n=[...uw],e=5120;for(let t=uw.length+1;t<=e;t++){const s=hw[(t-1)%hw.length],a=t*7%cw.length,l=t*13%800-200,c=Math.max(800,Math.min(2650,s.ratingBase+l));let f=s.fenPattern;t%3===0&&(f=f.replace("w - - 0 1","w KQkq - 0 1")),n.push({id:t,title:`${s.titleBase} #${t}`,description:s.descBase,fen:f,solution:s.solutionGen(t),rating:c,themes:[...s.theme,cw[a]],toMove:s.toMove})}return n},dw=hL(),zR=pe.createContext(void 0),dL=({children:n})=>{const e=async l=>{const c=tt(Re,"puzzles",l.toString()),f=await Il(c);return f.exists()?f.data():null},t=async()=>{const l=new Date().toISOString().split("T")[0],c=tt(Re,"daily_puzzles",l),f=new Date,m=(f.getUTCDate()+(f.getUTCMonth()+1)*31)%5e3+1;try{const g=await Il(c);if(g.exists()){const E=g.data();return e(E.puzzleId)}else{try{await Xd(c,{puzzleId:m,date:l})}catch{Yn.warn("Could not sync daily puzzle to Firestore, using deterministic fallback.")}return e(m)}}catch(g){return Yn.error("Error fetching daily puzzle from Firestore:",g),e(m)}},s=async(l=800,c=2650)=>{const f=Math.floor(Math.random()*5120)+1;return e(f)},a=async()=>{for(let l=0;l<dw.length;l+=500){const c=Dk(Re);dw.slice(l,l+500).forEach(m=>{const g=tt(Re,"puzzles",m.id.toString());c.set(g,m)}),await c.commit()}};return R.jsx(zR.Provider,{value:{getPuzzle:e,getDailyPuzzle:t,getRandomPuzzle:s,syncPuzzlesToFirestore:a},children:n})},pV=()=>{const n=pe.useContext(zR);if(!n)throw new Error("usePuzzles must be used within a PuzzleProvider");return n};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fL=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),pL=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),fw=n=>{const e=pL(n);return e.charAt(0).toUpperCase()+e.slice(1)},jR=(...n)=>n.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim(),mL=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var gL={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _L=pe.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:a="",children:l,iconNode:c,...f},m)=>pe.createElement("svg",{ref:m,...gL,width:e,height:e,stroke:n,strokeWidth:s?Number(t)*24/Number(e):t,className:jR("lucide",a),...!l&&!mL(f)&&{"aria-hidden":"true"},...f},[...c.map(([g,E])=>pe.createElement(g,E)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=(n,e)=>{const t=pe.forwardRef(({className:s,...a},l)=>pe.createElement(_L,{ref:l,iconNode:e,className:jR(`lucide-${fL(fw(n))}`,`lucide-${n}`,s),...a}));return t.displayName=fw(n),t};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yL=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],vL=Nn("book-open",yL);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EL=[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]],b_=Nn("crown",EL);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TL=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],bL=Nn("flame",TL);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wL=[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]],SL=Nn("key-round",wL);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AL=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],pw=Nn("lock",AL);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CL=[["path",{d:"m10 17 5-5-5-5",key:"1bsop3"}],["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}]],RL=Nn("log-in",CL);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IL=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],xg=Nn("mail",IL);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NL=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],mw=Nn("message-square",NL);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PL=[["path",{d:"M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",key:"w46dr5"}]],xL=Nn("puzzle",PL);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DL=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],kL=Nn("refresh-cw",DL);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ML=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],OL=Nn("shield-check",ML);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LL=[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}],["polyline",{points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5",key:"hbey2j"}],["line",{x1:"5",x2:"9",y1:"14",y2:"18",key:"1hf58s"}],["line",{x1:"7",x2:"4",y1:"17",y2:"20",key:"pidxm4"}],["line",{x1:"3",x2:"5",y1:"19",y2:"21",key:"1pehsh"}]],VL=Nn("swords",LL);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UL=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],BL=Nn("trophy",UL);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zL=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Dg=Nn("user",zL);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jL=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],qL=Nn("users",jL);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FL=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],HL=Nn("x",FL),GL=({activeTab:n,setActiveTab:e,onOpenAuth:t})=>{const{user:s}=Gl(),[a,l]=pe.useState(!1),c=[{id:"play",label:"Play Arena",icon:R.jsx(VL,{size:17})},{id:"puzzles",label:"5000+ Puzzles",icon:R.jsx(xL,{size:17}),badge:"5K+"},{id:"tournaments",label:"Tournaments",icon:R.jsx(BL,{size:17})},{id:"clubs",label:"Clubs & Teams",icon:R.jsx(qL,{size:17})},{id:"chat",label:"Player Chat",icon:R.jsx(mw,{size:17})},{id:"feedback",label:"Feedback",icon:R.jsx(mw,{size:17})},{id:"profile",label:"Profile & Medals",icon:R.jsx(b_,{size:17})},{id:"library",label:"Library",icon:R.jsx(vL,{size:17})}];return R.jsxs("header",{className:"sticky top-0 z-40 w-full bg-[#080d1a]/95 border-b border-[#1e293b] backdrop-blur-md shadow-[0_4px_25px_rgba(37,99,235,0.12)]",children:[R.jsx("div",{className:"h-[2px] w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-red-600 shadow-[0_0_10px_rgba(59,130,246,0.5)]"}),R.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between",children:[R.jsxs("div",{onClick:()=>e("play"),className:"flex items-center gap-3 cursor-pointer group select-none",children:[R.jsx("div",{className:"relative w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-red-600 p-[2px] shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-transform group-hover:scale-105",children:R.jsxs("div",{className:"w-full h-full rounded-[10px] bg-[#0b1021] flex items-center justify-center relative overflow-hidden",children:[R.jsx("div",{className:"absolute inset-0 bg-radial from-blue-500/20 to-red-500/10 opacity-70 pointer-events-none"}),R.jsx("img",{src:"/chaturanga logo.png",alt:"Crown",className:"w-7 h-7 object-contain drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]",onError:f=>{f.target.style.display="none";const m=f.target.nextElementSibling;m&&(m.style.display="block")}}),R.jsx("div",{className:"hidden",children:R.jsx(b_,{size:22,className:"text-amber-400",fill:"#fbbf24"})})]})}),R.jsxs("div",{className:"flex flex-col md:hidden",children:[R.jsxs("div",{className:"flex items-center gap-1.5",children:[R.jsx("span",{className:"text-xl sm:text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-red-400 font-cinzel leading-none",children:"CHATURANGA"}),R.jsx("span",{className:"w-2 h-2 rounded-full bg-blue-500 animate-ping"})]}),R.jsx("span",{className:"text-[11px] sm:text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-red-300 font-sanskrit tracking-widest mt-0.5 leading-none",children:"चतुरङ्गम् • The Grand Chess Arena"})]}),R.jsxs("div",{className:"hidden md:block",children:[R.jsx("img",{src:"/chaturanga logo.png",alt:"Chaturanga Grand Chess Arena",className:"h-10 sm:h-12 w-auto object-contain",onError:f=>{f.target.style.display="none",f.target.parentElement?.classList.add("flex-col");const m=f.target.nextElementSibling;m&&(m.style.display="flex")}}),R.jsxs("div",{className:"hidden flex-col",children:[R.jsxs("div",{className:"flex items-center gap-1.5",children:[R.jsx("span",{className:"text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-red-400 font-cinzel leading-none",children:"CHATURANGA"}),R.jsx("span",{className:"w-2 h-2 rounded-full bg-blue-500 animate-ping"})]}),R.jsx("span",{className:"text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-red-300 font-sanskrit tracking-widest mt-0.5 leading-none",children:"चतुरङ्गम् • The Grand Chess Arena"})]})]})]}),R.jsx("nav",{className:"hidden md:flex items-center gap-1.5",children:c.map(f=>{const m=n===f.id;return R.jsxs("button",{id:`nav-${f.id}`,onClick:()=>e(f.id),className:`relative flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${m?"text-white bg-gradient-to-r from-blue-900/60 to-red-950/60 border border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.3)]":"text-slate-300 hover:text-white hover:bg-[#111827]/80 hover:border-slate-700/50 border border-transparent"}`,children:[R.jsx("span",{className:m?"text-blue-400":"text-slate-400",children:f.icon}),R.jsx("span",{children:f.label}),f.badge&&R.jsx("span",{className:"px-1.5 py-0.2 text-[10px] font-black uppercase bg-gradient-to-r from-blue-500 to-red-500 text-white rounded-full shadow-sm",children:f.badge})]},f.id)})}),R.jsxs("div",{className:"flex items-center gap-3",children:[s?R.jsxs("div",{onClick:()=>e("profile"),className:"flex items-center gap-2.5 p-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-gradient-to-r from-[#0c1427] to-[#1a0f1e] border border-blue-500/30 hover:border-red-500/50 transition-all cursor-pointer group shadow-[0_0_12px_rgba(59,130,246,0.15)]",children:[R.jsxs("div",{className:"relative",children:[R.jsx("img",{src:s.avatar,alt:s.username,className:"w-8 h-8 rounded-lg object-cover ring-2 ring-blue-500/70 group-hover:ring-red-500/80 transition-all"}),R.jsx("span",{className:"absolute -top-1 -right-1 w-3.5 h-3.5 bg-gradient-to-br from-blue-500 to-red-500 rounded-full border-2 border-[#0b1021] flex items-center justify-center text-[7px] font-black text-white",children:"★"})]}),R.jsxs("div",{className:"hidden sm:flex flex-col text-left",children:[R.jsxs("span",{className:"text-xs font-bold text-slate-100 group-hover:text-blue-300 transition-colors leading-tight flex items-center gap-1.5",children:[R.jsx("span",{children:s.countryFlag||"🇮🇳"}),R.jsx("span",{children:s.username})]}),R.jsxs("div",{className:"flex items-center gap-2 text-[10px] font-semibold",children:[R.jsxs("span",{className:"text-blue-400 flex items-center gap-0.5",children:["⚡ ",s.stats.rapid," Elo"]}),R.jsxs("span",{className:"flex items-center gap-0.5 text-red-400 font-bold",children:[R.jsx(bL,{size:10})," ",s.stats.currentStreak]})]})]})]}):R.jsxs("button",{onClick:t,className:"flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-red-600 hover:from-blue-500 hover:to-red-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 transition-all active:scale-95 border border-blue-400/30",children:[R.jsx(RL,{size:15}),R.jsx("span",{children:"Login / Signup"})]}),R.jsx("button",{onClick:()=>l(!a),className:"md:hidden p-2 rounded-lg bg-[#111827] text-slate-300 hover:text-blue-400 border border-slate-700/50",children:R.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:R.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16m-7 6h7"})})})]})]}),a&&R.jsx("div",{className:"md:hidden bg-[#0a0f1d] border-b border-[#1e293b] px-4 py-3 space-y-1.5",children:c.map(f=>R.jsxs("button",{onClick:()=>{e(f.id),l(!1)},className:`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold ${n===f.id?"bg-gradient-to-r from-blue-900/60 to-red-950/60 text-blue-200 border border-blue-500/40":"text-slate-300 hover:bg-[#111827]"}`,children:[R.jsxs("div",{className:"flex items-center gap-2.5",children:[f.icon,R.jsx("span",{children:f.label})]}),f.badge&&R.jsx("span",{className:"px-1.5 py-0.5 text-[9px] font-bold bg-gradient-to-r from-blue-500 to-red-500 text-white rounded",children:f.badge})]},f.id))})]})},gw=["https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80","https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80","https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80","https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80","https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80","https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"],KL=({isOpen:n,onClose:e,initialMode:t="login"})=>{const{user:s,login:a,signup:l,updateEmail:c,revertEmail:f,loginWithGoogle:m,loginAsGuest:g,sendPasswordReset:E,sendVerification:b}=Gl(),[S,P]=pe.useState(t),[V,H]=pe.useState(""),[B,re]=pe.useState(""),[oe,le]=pe.useState(""),[me,Me]=pe.useState(gw[0]),[Ee,M]=pe.useState(""),[C,I]=pe.useState(""),[O,U]=pe.useState(""),[q,D]=pe.useState(""),[ct,Ne]=pe.useState(null);if(!n)return null;const Z=async z=>{z.preventDefault();const X=await a(B||V,oe);X.success?(Ne({text:X.message,type:"success"}),setTimeout(e,900)):Ne({text:X.message,type:"error"})},ue=async z=>{z.preventDefault();const X=await l(V,B,oe,me);X.success?(Ne({text:X.message,type:"success"}),setTimeout(e,900)):Ne({text:X.message,type:"error"})},ve=async z=>{z.preventDefault();const X=await c(C,O);X.success?(Ne({text:X.message,type:"success"}),I(""),U("")):Ne({text:X.message,type:"error"})},Ue=async z=>{z.preventDefault();const X=await f(q);X.success?(Ne({text:X.message,type:"success"}),D("")):Ne({text:X.message,type:"error"})},N=async()=>{const z=await m();z.success?(Ne({text:z.message,type:"success"}),setTimeout(e,900)):Ne({text:z.message,type:"error"})},T=async()=>{await g(),Ne({text:"Welcome to the Arena, Guest!",type:"success"}),setTimeout(e,900)},x=async z=>{if(z.preventDefault(),!Ee.trim()){Ne({text:"Please enter your email.",type:"error"});return}const X=await E(Ee);X.success?(Ne({text:X.message,type:"success"}),M(""),setTimeout(()=>P("login"),2e3)):Ne({text:X.message,type:"error"})},j=async()=>{const z=await b();z.success?Ne({text:z.message,type:"success"}):Ne({text:z.message,type:"error"})};return R.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md",children:R.jsxs("div",{className:"relative w-full max-w-md bg-gradient-to-b from-[#0e172a] to-[#160d24] border border-blue-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(59,130,246,0.3)] overflow-hidden",children:[R.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl pointer-events-none"}),R.jsx("div",{className:"absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"}),R.jsx("button",{onClick:e,className:"absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800/80 transition-colors",children:R.jsx(HL,{size:18})}),R.jsxs("div",{className:"flex border-b border-slate-800 pb-3 mb-6 gap-2",children:[R.jsx("button",{onClick:()=>{P("login"),Ne(null)},className:`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${S==="login"||S==="forgot_password"?"bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-md":"text-slate-400 hover:text-slate-200"}`,children:"Login"}),R.jsx("button",{onClick:()=>{P("signup"),Ne(null)},className:`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${S==="signup"?"bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-md":"text-slate-400 hover:text-slate-200"}`,children:"Signup"}),R.jsx("button",{onClick:()=>{P("change_email"),Ne(null)},className:`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${S==="change_email"?"bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-md":"text-slate-400 hover:text-slate-200"}`,children:"Email Settings"})]}),ct&&R.jsx("div",{className:`mb-4 p-3 rounded-xl text-xs font-semibold ${ct.type==="success"?"bg-emerald-950/70 border border-emerald-500/50 text-emerald-300":"bg-red-950/70 border border-red-500/50 text-red-300"}`,children:ct.text}),S==="login"&&R.jsxs("form",{onSubmit:Z,className:"space-y-4",children:[R.jsxs("div",{children:[R.jsx("label",{className:"block text-xs font-bold text-slate-300 mb-1.5",children:"Username or Email"}),R.jsxs("div",{className:"relative",children:[R.jsx(xg,{className:"absolute left-3.5 top-3 text-slate-400",size:16}),R.jsx("input",{type:"text",value:B,onChange:z=>re(z.target.value),placeholder:"arjuna@chaturanga.org or ArjunaWarrior",required:!0,className:"w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0a0f1d] border border-slate-700/80 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors"})]})]}),R.jsxs("div",{children:[R.jsx("label",{className:"block text-xs font-bold text-slate-300 mb-1.5",children:"Password"}),R.jsxs("div",{className:"relative",children:[R.jsx(pw,{className:"absolute left-3.5 top-3 text-slate-400",size:16}),R.jsx("input",{type:"password",value:oe,onChange:z=>le(z.target.value),placeholder:"••••••••",required:!0,className:"w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0a0f1d] border border-slate-700/80 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors"})]})]}),R.jsx("button",{type:"submit",className:"w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-500 hover:to-red-500 text-white font-bold text-sm shadow-lg shadow-blue-600/20 transition-all active:scale-95 border border-blue-400/30",children:"Sign In to Chaturanga"}),R.jsx("div",{className:"flex justify-between items-center text-xs text-blue-400 mt-2 px-1",children:R.jsx("button",{type:"button",onClick:()=>{P("forgot_password"),Ne(null)},className:"hover:underline hover:text-blue-300",children:"Forgot Password?"})}),R.jsxs("div",{className:"relative my-6",children:[R.jsx("div",{className:"absolute inset-0 flex items-center",children:R.jsx("div",{className:"w-full border-t border-slate-800"})}),R.jsx("div",{className:"relative flex justify-center text-xs uppercase",children:R.jsx("span",{className:"bg-[#111827] px-2 text-slate-500 font-bold",children:"Or continue with"})})]}),R.jsxs("button",{type:"button",onClick:N,className:"w-full py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-95 border border-slate-300 shadow-md",children:[R.jsxs("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",children:[R.jsx("path",{fill:"currentColor",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-3.3 3.28-7.81 3.28-12.09z"}),R.jsx("path",{fill:"currentColor",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),R.jsx("path",{fill:"currentColor",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"}),R.jsx("path",{fill:"currentColor",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z"})]}),"Sign in with Google"]}),R.jsxs("button",{type:"button",onClick:T,className:"w-full py-2.5 rounded-xl bg-[#161c2e] hover:bg-[#1e263d] text-blue-300 font-bold text-xs border border-blue-500/30 transition-all flex items-center justify-center gap-2 mt-3",children:[R.jsx(Dg,{size:14}),"Continue as Guest"]})]}),S==="signup"&&R.jsxs("form",{onSubmit:ue,className:"space-y-4",children:[R.jsxs("div",{children:[R.jsx("label",{className:"block text-xs font-bold text-slate-300 mb-1.5",children:"Warrior Name / Handle"}),R.jsxs("div",{className:"relative",children:[R.jsx(Dg,{className:"absolute left-3.5 top-3 text-slate-400",size:16}),R.jsx("input",{type:"text",value:V,onChange:z=>H(z.target.value),placeholder:"e.g. RoyalGrandmaster",required:!0,className:"w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0a0f1d] border border-slate-700/80 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-400"})]})]}),R.jsxs("div",{children:[R.jsx("label",{className:"block text-xs font-bold text-slate-300 mb-1.5",children:"Email Address"}),R.jsxs("div",{className:"relative",children:[R.jsx(xg,{className:"absolute left-3.5 top-3 text-slate-400",size:16}),R.jsx("input",{type:"email",value:B,onChange:z=>re(z.target.value),placeholder:"warrior@chaturanga.org",required:!0,className:"w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0a0f1d] border border-slate-700/80 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-400"})]})]}),R.jsxs("div",{children:[R.jsx("label",{className:"block text-xs font-bold text-slate-300 mb-1.5",children:"Choose Password"}),R.jsxs("div",{className:"relative",children:[R.jsx(pw,{className:"absolute left-3.5 top-3 text-slate-400",size:16}),R.jsx("input",{type:"password",value:oe,onChange:z=>le(z.target.value),placeholder:"Minimum 4 characters",required:!0,className:"w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0a0f1d] border border-slate-700/80 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-400"})]})]}),R.jsxs("div",{children:[R.jsx("label",{className:"block text-xs font-bold text-slate-300 mb-2",children:"Select Avatar"}),R.jsx("div",{className:"flex items-center gap-2 overflow-x-auto pb-2",children:gw.map((z,X)=>R.jsx("img",{src:z,alt:`Avatar ${X}`,onClick:()=>Me(z),className:`w-10 h-10 rounded-xl object-cover cursor-pointer border-2 transition-all ${me===z?"border-blue-400 scale-110 shadow-md ring-2 ring-blue-400/40":"border-transparent opacity-70 hover:opacity-100"}`},X))})]}),R.jsx("button",{type:"submit",className:"w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-500 hover:to-red-500 text-white font-bold text-sm shadow-lg shadow-blue-600/20 transition-all active:scale-95 border border-blue-400/30",children:"Create Account & Enter Arena"}),R.jsxs("button",{type:"button",onClick:T,className:"w-full py-2.5 rounded-xl bg-[#161c2e] hover:bg-[#1e263d] text-blue-300 font-bold text-xs border border-blue-500/30 transition-all flex items-center justify-center gap-2 mt-3",children:[R.jsx(Dg,{size:14}),"Continue as Guest"]})]}),S==="change_email"&&R.jsxs("div",{className:"space-y-6",children:[R.jsxs("div",{className:"p-3 rounded-2xl bg-gradient-to-r from-blue-950/40 to-red-950/40 border border-blue-500/30",children:[R.jsxs("div",{className:"flex items-center gap-2 text-xs font-bold text-blue-300 mb-1",children:[R.jsx(OL,{size:16,className:"text-red-400"}),R.jsx("span",{children:"Secure Reversible Email Verification"})]}),R.jsxs("p",{className:"text-[11px] text-slate-300 leading-relaxed",children:["Current Registered Email: ",R.jsx("strong",{className:"text-white font-mono",children:s?.email||"arjuna@chaturanga.org"})]}),s&&!Vn.currentUser?.emailVerified&&R.jsxs("div",{className:"mt-2 flex items-center justify-between bg-amber-500/10 border border-amber-500/30 rounded-lg p-2",children:[R.jsx("span",{className:"text-[10px] text-amber-300 font-bold",children:"Your email is unverified."}),R.jsx("button",{type:"button",onClick:j,className:"text-[9px] font-black uppercase text-amber-400 hover:underline hover:text-amber-300",children:"Resend Verification"})]})]}),R.jsxs("form",{onSubmit:ve,className:"space-y-3.5",children:[R.jsxs("h4",{className:"text-xs font-extrabold uppercase tracking-wider text-slate-300 flex items-center gap-1.5",children:[R.jsx(SL,{size:14,className:"text-blue-400"}),"Change to New Email"]}),R.jsxs("div",{children:[R.jsx("label",{className:"block text-[11px] font-bold text-slate-400 mb-1",children:"New Email Address"}),R.jsx("input",{type:"email",value:C,onChange:z=>I(z.target.value),placeholder:"new.email@chaturanga.org",required:!0,className:"w-full px-3.5 py-2 rounded-xl bg-[#0a0f1d] border border-slate-700 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-400"})]}),R.jsxs("div",{children:[R.jsxs("label",{className:"block text-[11px] font-bold text-slate-400 mb-1",children:["Old Email Password ",R.jsx("span",{className:"text-red-400 font-normal",children:"(Required to verify ownership)"})]}),R.jsx("input",{type:"password",value:O,onChange:z=>U(z.target.value),placeholder:"Enter password of current email",required:!0,className:"w-full px-3.5 py-2 rounded-xl bg-[#0a0f1d] border border-slate-700 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-400"})]}),R.jsx("button",{type:"submit",className:"w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-500 hover:to-red-500 text-white font-bold text-xs shadow-md transition-all active:scale-95",children:"Apply New Email with Old Password"})]}),s?.previousEmail&&R.jsxs("form",{onSubmit:Ue,className:"pt-4 border-t border-slate-800 space-y-3",children:[R.jsxs("div",{className:"flex items-center justify-between",children:[R.jsxs("h4",{className:"text-xs font-extrabold uppercase tracking-wider text-blue-300 flex items-center gap-1.5",children:[R.jsx(kL,{size:14,className:"text-red-400"}),"Revert to Previous Email"]}),R.jsx("span",{className:"text-[10px] text-slate-400 font-mono",children:s.previousEmail})]}),R.jsxs("div",{children:[R.jsx("label",{className:"block text-[11px] font-bold text-slate-400 mb-1",children:"Current Password to Revert"}),R.jsx("input",{type:"password",value:q,onChange:z=>D(z.target.value),placeholder:"Enter password to restore previous email",required:!0,className:"w-full px-3.5 py-2 rounded-xl bg-[#0a0f1d] border border-slate-700 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-400"})]}),R.jsxs("button",{type:"submit",className:"w-full py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-blue-300 font-bold text-xs border border-blue-500/30 transition-all",children:["Restore Previous Email (",s.previousEmail,")"]})]})]}),S==="forgot_password"&&R.jsxs("form",{onSubmit:x,className:"space-y-4",children:[R.jsxs("div",{children:[R.jsx("label",{className:"block text-xs font-bold text-slate-300 mb-1.5",children:"Registered Email Address"}),R.jsxs("div",{className:"relative",children:[R.jsx(xg,{className:"absolute left-3.5 top-3 text-slate-400",size:16}),R.jsx("input",{type:"email",value:Ee,onChange:z=>M(z.target.value),placeholder:"warrior@chaturanga.org",required:!0,className:"w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0a0f1d] border border-slate-700/80 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors"})]})]}),R.jsx("button",{type:"submit",className:"w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-500 hover:to-red-500 text-white font-bold text-sm shadow-lg shadow-blue-600/20 transition-all active:scale-95 border border-blue-400/30",children:"Send Password Reset Link"}),R.jsx("div",{className:"text-center text-xs mt-4",children:R.jsx("button",{type:"button",onClick:()=>{P("login"),Ne(null)},className:"text-blue-400 hover:underline",children:"Back to Login"})})]})]})})},QL=()=>R.jsxs("svg",{style:{display:"none"},xmlns:"http://www.w3.org/2000/svg",children:[R.jsxs("symbol",{id:"piece-p",viewBox:"0 0 100 100",children:[R.jsx("path",{d:"M26 84 C30 76 70 76 74 84 L78 88 C78 90 22 90 22 88 Z",strokeWidth:"3.5",strokeLinejoin:"round"}),R.jsx("path",{d:"M35 76 C35 55 42 45 42 38 C42 34 58 34 58 38 C58 45 65 55 65 76 Z",strokeWidth:"3.5"}),R.jsx("ellipse",{cx:"50",cy:"40",rx:"14",ry:"4",strokeWidth:"2.5"}),R.jsx("circle",{cx:"50",cy:"24",r:"14",strokeWidth:"3.5"})]}),R.jsxs("symbol",{id:"piece-r",viewBox:"0 0 100 100",children:[R.jsx("path",{d:"M24 85 C28 78 72 78 76 85 L80 89 C80 92 20 92 20 89 Z",strokeWidth:"3.5",strokeLinejoin:"round"}),R.jsx("path",{d:"M30 78 L34 38 L66 38 L70 78 Z",strokeWidth:"3.5"}),R.jsx("path",{d:"M24 38 L24 20 L34 20 L34 27 L44 27 L44 20 L56 20 L56 27 L66 27 L66 20 L76 20 L76 38 Z",strokeWidth:"3.5",strokeLinejoin:"round"}),R.jsx("rect",{x:"30",y:"38",width:"40",height:"6",strokeWidth:"2.5"})]}),R.jsxs("symbol",{id:"piece-n",viewBox:"0 0 100 100",children:[R.jsx("path",{d:"M24 85 C28 78 72 78 76 85 L80 89 C80 92 20 92 20 89 Z",strokeWidth:"3.5",strokeLinejoin:"round"}),R.jsx("path",{d:"M30 84 C30 68 25 50 32 30 C34 22 40 14 46 12 C47 12 47 16 48 18 C50 16 52 14 55 14 C56 16 55 20 54 22 C62 20 72 23 76 30 C78 34 76 40 70 44 C67 46 64 45 61 44 C68 49 71 56 70 65 C68 74 65 79 68 84 Z",strokeWidth:"3.5",strokeLinejoin:"round"}),R.jsx("path",{d:"M46 12 L49 6 L52 14 Z",strokeWidth:"2.5",strokeLinejoin:"round"}),R.jsx("path",{d:"M52 14 L56 7 L58 16 Z",strokeWidth:"2.5",strokeLinejoin:"round"})]}),R.jsxs("symbol",{id:"piece-b",viewBox:"0 0 100 100",children:[R.jsx("path",{d:"M24 85 C28 78 72 78 76 85 L80 89 C80 92 20 92 20 89 Z",strokeWidth:"3.5",strokeLinejoin:"round"}),R.jsx("path",{d:"M32 82 C30 68 26 56 30 42 C33 32 40 22 50 20 C60 22 67 32 70 42 C74 56 70 68 68 82 Z",strokeWidth:"3.5"}),R.jsx("path",{d:"M32 40 C22 36 16 46 18 58 C20 68 28 72 32 68",strokeWidth:"3",strokeLinejoin:"round"}),R.jsx("path",{d:"M68 40 C78 36 84 46 82 58 C80 68 72 72 68 68",strokeWidth:"3",strokeLinejoin:"round"}),R.jsx("path",{d:"M45 46 C45 60 42 70 46 76 C48 80 54 82 58 78 C61 74 59 68 53 68 C50 68 49 71 50 73",fill:"none",strokeWidth:"4.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),R.jsxs("symbol",{id:"piece-q",viewBox:"0 0 100 100",children:[R.jsx("path",{d:"M22 85 C26 78 74 78 78 85 L82 89 C82 92 18 92 18 89 Z",strokeWidth:"3.5",strokeLinejoin:"round"}),R.jsx("path",{d:"M30 78 L34 50 L66 50 L70 78 Z",strokeWidth:"3.5"}),R.jsx("path",{d:"M20 34 L28 54 L50 42 L72 54 L80 34 L66 48 L50 26 L34 48 Z",strokeWidth:"3.5",strokeLinejoin:"round"}),R.jsx("circle",{cx:"20",cy:"32",r:"4.5",strokeWidth:"2"}),R.jsx("circle",{cx:"50",cy:"24",r:"5.5",strokeWidth:"2.5"}),R.jsx("circle",{cx:"80",cy:"32",r:"4.5",strokeWidth:"2"}),R.jsx("rect",{x:"28",y:"58",width:"44",height:"6",rx:"3",strokeWidth:"2"})]}),R.jsxs("symbol",{id:"piece-k",viewBox:"0 0 100 100",children:[R.jsx("path",{d:"M20 85 C25 78 75 78 80 85 L84 89 C84 92 16 92 16 89 Z",strokeWidth:"3.5",strokeLinejoin:"round"}),R.jsx("path",{d:"M28 78 L32 48 L68 48 L72 78 Z",strokeWidth:"3.5"}),R.jsx("path",{d:"M22 46 L20 26 L36 38 L50 16 L64 38 L80 26 L78 46 Z",strokeWidth:"3.5",strokeLinejoin:"round"}),R.jsx("circle",{cx:"20",cy:"24",r:"4.5",strokeWidth:"2"}),R.jsx("circle",{cx:"36",cy:"36",r:"3.5",strokeWidth:"2"}),R.jsx("circle",{cx:"50",cy:"14",r:"6",strokeWidth:"2.5"}),R.jsx("circle",{cx:"64",cy:"36",r:"3.5",strokeWidth:"2"}),R.jsx("circle",{cx:"80",cy:"24",r:"4.5",strokeWidth:"2"}),R.jsx("rect",{x:"26",y:"52",width:"48",height:"8",rx:"4",strokeWidth:"2.5"})]})]}),WL=pe.lazy(()=>tr(()=>import("./PlayHub-pDcFQO3a.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url).then(n=>({default:n.PlayHub}))),YL=pe.lazy(()=>tr(()=>import("./PuzzleTrainer-ZFHdlvzm.js"),__vite__mapDeps([10,1,2,8,11,12,13,6,9]),import.meta.url).then(n=>({default:n.PuzzleTrainer}))),$L=pe.lazy(()=>tr(()=>import("./TournamentHub-DgcRKmyb.js"),__vite__mapDeps([14,1,2,15,7,13,16,17,18,8]),import.meta.url).then(n=>({default:n.TournamentHub}))),XL=pe.lazy(()=>tr(()=>import("./ClubsAndTeamsHub-0VOOteQ_.js"),__vite__mapDeps([19,17,5,11,20,18,21,16,8]),import.meta.url).then(n=>({default:n.ClubsAndTeamsHub}))),ZL=pe.lazy(()=>tr(()=>import("./FeedbackPage-CKN5Sfa2.js"),__vite__mapDeps([22,17,21]),import.meta.url).then(n=>({default:n.FeedbackPage}))),JL=pe.lazy(()=>tr(()=>import("./ProfilePage-N3fPQ0Pa.js"),__vite__mapDeps([23,15,1,2,7,3,4,5,6,20,12,8,16]),import.meta.url).then(n=>({default:n.ProfilePage}))),eV=pe.lazy(()=>tr(()=>import("./PlayerChat-BeLflTes.js"),__vite__mapDeps([24,11,21]),import.meta.url).then(n=>({default:n.PlayerChat}))),tV=pe.lazy(()=>tr(()=>import("./GeminiChatbot-BZRZr1x8.js"),__vite__mapDeps([25,2,4,8,6,26,21]),import.meta.url).then(n=>({default:n.GeminiChatbot}))),nV=pe.lazy(()=>tr(()=>import("./LibraryPage-RBnMq0_y.js"),__vite__mapDeps([27,26]),import.meta.url).then(n=>({default:n.LibraryPage}))),_w=["play","puzzles","tournaments","clubs","chat","feedback","profile","library"];function iV(){const n=window.location.hash.replace("#","").toLowerCase();if(_w.includes(n))return n;const e=new URLSearchParams(window.location.search).get("tab");return e&&_w.includes(e)?e:"play"}function sV(){const{loading:n,setLoading:e,loginAsGuest:t}=Gl(),[s,a]=pe.useState(iV),[l,c]=pe.useState(!1),[f,m]=pe.useState(!1),[g,E]=pe.useState(!1);return pe.useEffect(()=>{const b=setTimeout(()=>{n&&m(!0)},6e3);return()=>clearTimeout(b)},[n]),pe.useEffect(()=>{window.location.hash=s},[s]),pe.useEffect(()=>{if(!n){const b=document.getElementById("initial-splash");b?(b.classList.add("splash-fade-out"),setTimeout(()=>{b.remove(),E(!0)},400)):E(!0)}},[n]),n?R.jsx("div",{className:"min-h-screen bg-[#070a14] flex flex-col items-center justify-center p-6 text-center",children:f&&R.jsxs("div",{className:"animate-in fade-in zoom-in duration-700",children:[R.jsx("p",{className:"text-[10px] text-slate-500 mb-3 italic",children:"Taking longer than usual?"}),R.jsx("button",{onClick:()=>t(),className:"px-6 py-2 rounded-xl bg-white/5 border border-white/10 text-white/40 text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 hover:text-white transition-all cursor-pointer",children:"Skip to Arena (Guest Mode)"})]})}):R.jsxs("div",{className:"min-h-screen bg-[#0a0d14] text-slate-100 flex flex-col selection:bg-amber-500 selection:text-black",children:[R.jsx(QL,{}),R.jsx(GL,{activeTab:s,setActiveTab:a,onOpenAuth:()=>c(!0)}),R.jsxs("main",{className:"flex-1 pb-16 relative",children:[R.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-red-600 to-amber-500 opacity-20"}),R.jsxs(pe.Suspense,{fallback:R.jsxs("div",{className:"flex-1 h-[70vh] flex flex-col items-center justify-center py-20 animate-in fade-in duration-500",children:[R.jsxs("div",{className:"relative",children:[R.jsx("div",{className:"w-16 h-16 border-4 border-slate-800 rounded-full"}),R.jsx("div",{className:"absolute top-0 left-0 w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"})]}),R.jsx("span",{className:"mt-6 text-xs font-black uppercase tracking-[0.2em] text-slate-500 animate-pulse",children:"Initializing Arena..."})]}),children:[s==="play"&&R.jsx(WL,{}),s==="puzzles"&&R.jsx(dL,{children:R.jsx(YL,{})}),s==="tournaments"&&R.jsx(lL,{children:R.jsx($L,{})}),s==="clubs"&&R.jsx(uL,{children:R.jsx(XL,{})}),s==="feedback"&&R.jsx(cL,{children:R.jsx(ZL,{})}),s==="chat"&&R.jsx(eV,{}),s==="profile"&&R.jsx(JL,{}),s==="library"&&R.jsx(nV,{})]})]}),g&&R.jsx("footer",{className:"border-t border-[#1b2234] bg-[#080b10] py-6 text-center text-xs text-slate-500",children:R.jsxs("div",{className:"max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3",children:[R.jsxs("div",{className:"flex items-center gap-2",children:[R.jsx(b_,{size:16,className:"text-amber-400"}),R.jsx("span",{className:"font-cinzel font-bold text-slate-300",children:"CHATURANGA"}),R.jsx("span",{className:"font-sanskrit text-amber-500/80 font-bold",children:"चतुरङ्गम्"}),R.jsx("span",{children:"— The Ancient Origin of Chess under FIDE Laws"})]}),R.jsx("div",{className:"text-[11px] text-slate-400",children:"Featuring Elephant Head Bishops & Crown Kings • Elo Rating System • Official Medals"})]})}),l&&R.jsx(KL,{isOpen:l,onClose:()=>c(!1)}),g&&R.jsx(pe.Suspense,{fallback:null,children:R.jsx(tV,{gameMode:s.charAt(0).toUpperCase()+s.slice(1)})})]})}function rV(){return R.jsx(oL,{children:R.jsx(sV,{})})}RI.createRoot(document.getElementById("root")).render(R.jsx(pe.StrictMode,{children:R.jsx(rV,{})}));export{vL as B,b_ as C,bL as F,SL as K,pw as L,mw as M,aV as R,VL as S,BL as T,qL as U,HL as X,sg as a,pV as b,Nn as c,hV as d,dV as e,fV as f,OL as g,SI as h,w_ as i,R as j,gI as k,Yn as l,xg as m,kL as n,EI as o,wn as p,Rl as q,pe as r,Re as s,i_ as t,Gl as u,cV as v,pg as w};
