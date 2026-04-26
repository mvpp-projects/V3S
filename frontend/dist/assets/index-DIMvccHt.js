(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Ev(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Pf={exports:{}},fa={},Lf={exports:{}},bt={};var p0;function wv(){if(p0)return bt;p0=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.iterator;function x(D){return D===null||typeof D!="object"?null:(D=g&&D[g]||D["@@iterator"],typeof D=="function"?D:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function S(D,Q,ve){this.props=D,this.context=Q,this.refs=E,this.updater=ve||y}S.prototype.isReactComponent={},S.prototype.setState=function(D,Q){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,Q,"setState")},S.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function v(){}v.prototype=S.prototype;function P(D,Q,ve){this.props=D,this.context=Q,this.refs=E,this.updater=ve||y}var R=P.prototype=new v;R.constructor=P,M(R,S.prototype),R.isPureReactComponent=!0;var I=Array.isArray,k=Object.prototype.hasOwnProperty,L={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function B(D,Q,ve){var Fe,Ne={},Je=null,se=null;if(Q!=null)for(Fe in Q.ref!==void 0&&(se=Q.ref),Q.key!==void 0&&(Je=""+Q.key),Q)k.call(Q,Fe)&&!N.hasOwnProperty(Fe)&&(Ne[Fe]=Q[Fe]);var fe=arguments.length-2;if(fe===1)Ne.children=ve;else if(1<fe){for(var ye=Array(fe),Xe=0;Xe<fe;Xe++)ye[Xe]=arguments[Xe+2];Ne.children=ye}if(D&&D.defaultProps)for(Fe in fe=D.defaultProps,fe)Ne[Fe]===void 0&&(Ne[Fe]=fe[Fe]);return{$$typeof:s,type:D,key:Je,ref:se,props:Ne,_owner:L.current}}function A(D,Q){return{$$typeof:s,type:D.type,key:Q,ref:D.ref,props:D.props,_owner:D._owner}}function w(D){return typeof D=="object"&&D!==null&&D.$$typeof===s}function F(D){var Q={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(ve){return Q[ve]})}var V=/\/+/g;function K(D,Q){return typeof D=="object"&&D!==null&&D.key!=null?F(""+D.key):Q.toString(36)}function ie(D,Q,ve,Fe,Ne){var Je=typeof D;(Je==="undefined"||Je==="boolean")&&(D=null);var se=!1;if(D===null)se=!0;else switch(Je){case"string":case"number":se=!0;break;case"object":switch(D.$$typeof){case s:case e:se=!0}}if(se)return se=D,Ne=Ne(se),D=Fe===""?"."+K(se,0):Fe,I(Ne)?(ve="",D!=null&&(ve=D.replace(V,"$&/")+"/"),ie(Ne,Q,ve,"",function(Xe){return Xe})):Ne!=null&&(w(Ne)&&(Ne=A(Ne,ve+(!Ne.key||se&&se.key===Ne.key?"":(""+Ne.key).replace(V,"$&/")+"/")+D)),Q.push(Ne)),1;if(se=0,Fe=Fe===""?".":Fe+":",I(D))for(var fe=0;fe<D.length;fe++){Je=D[fe];var ye=Fe+K(Je,fe);se+=ie(Je,Q,ve,ye,Ne)}else if(ye=x(D),typeof ye=="function")for(D=ye.call(D),fe=0;!(Je=D.next()).done;)Je=Je.value,ye=Fe+K(Je,fe++),se+=ie(Je,Q,ve,ye,Ne);else if(Je==="object")throw Q=String(D),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return se}function ne(D,Q,ve){if(D==null)return D;var Fe=[],Ne=0;return ie(D,Fe,"","",function(Je){return Q.call(ve,Je,Ne++)}),Fe}function ce(D){if(D._status===-1){var Q=D._result;Q=Q(),Q.then(function(ve){(D._status===0||D._status===-1)&&(D._status=1,D._result=ve)},function(ve){(D._status===0||D._status===-1)&&(D._status=2,D._result=ve)}),D._status===-1&&(D._status=0,D._result=Q)}if(D._status===1)return D._result.default;throw D._result}var ae={current:null},j={transition:null},re={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:j,ReactCurrentOwner:L};return bt.Children={map:ne,forEach:function(D,Q,ve){ne(D,function(){Q.apply(this,arguments)},ve)},count:function(D){var Q=0;return ne(D,function(){Q++}),Q},toArray:function(D){return ne(D,function(Q){return Q})||[]},only:function(D){if(!w(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},bt.Component=S,bt.Fragment=t,bt.Profiler=o,bt.PureComponent=P,bt.StrictMode=r,bt.Suspense=d,bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=re,bt.cloneElement=function(D,Q,ve){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var Fe=M({},D.props),Ne=D.key,Je=D.ref,se=D._owner;if(Q!=null){if(Q.ref!==void 0&&(Je=Q.ref,se=L.current),Q.key!==void 0&&(Ne=""+Q.key),D.type&&D.type.defaultProps)var fe=D.type.defaultProps;for(ye in Q)k.call(Q,ye)&&!N.hasOwnProperty(ye)&&(Fe[ye]=Q[ye]===void 0&&fe!==void 0?fe[ye]:Q[ye])}var ye=arguments.length-2;if(ye===1)Fe.children=ve;else if(1<ye){fe=Array(ye);for(var Xe=0;Xe<ye;Xe++)fe[Xe]=arguments[Xe+2];Fe.children=fe}return{$$typeof:s,type:D.type,key:Ne,ref:Je,props:Fe,_owner:se}},bt.createContext=function(D){return D={$$typeof:u,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:l,_context:D},D.Consumer=D},bt.createElement=B,bt.createFactory=function(D){var Q=B.bind(null,D);return Q.type=D,Q},bt.createRef=function(){return{current:null}},bt.forwardRef=function(D){return{$$typeof:f,render:D}},bt.isValidElement=w,bt.lazy=function(D){return{$$typeof:_,_payload:{_status:-1,_result:D},_init:ce}},bt.memo=function(D,Q){return{$$typeof:p,type:D,compare:Q===void 0?null:Q}},bt.startTransition=function(D){var Q=j.transition;j.transition={};try{D()}finally{j.transition=Q}},bt.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},bt.useCallback=function(D,Q){return ae.current.useCallback(D,Q)},bt.useContext=function(D){return ae.current.useContext(D)},bt.useDebugValue=function(){},bt.useDeferredValue=function(D){return ae.current.useDeferredValue(D)},bt.useEffect=function(D,Q){return ae.current.useEffect(D,Q)},bt.useId=function(){return ae.current.useId()},bt.useImperativeHandle=function(D,Q,ve){return ae.current.useImperativeHandle(D,Q,ve)},bt.useInsertionEffect=function(D,Q){return ae.current.useInsertionEffect(D,Q)},bt.useLayoutEffect=function(D,Q){return ae.current.useLayoutEffect(D,Q)},bt.useMemo=function(D,Q){return ae.current.useMemo(D,Q)},bt.useReducer=function(D,Q,ve){return ae.current.useReducer(D,Q,ve)},bt.useRef=function(D){return ae.current.useRef(D)},bt.useState=function(D){return ae.current.useState(D)},bt.useSyncExternalStore=function(D,Q,ve){return ae.current.useSyncExternalStore(D,Q,ve)},bt.useTransition=function(){return ae.current.useTransition()},bt.version="18.2.0",bt}var m0;function yd(){return m0||(m0=1,Lf.exports=wv()),Lf.exports}var x0;function bv(){if(x0)return fa;x0=1;var s=yd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,d,p){var _,g={},x=null,y=null;p!==void 0&&(x=""+p),d.key!==void 0&&(x=""+d.key),d.ref!==void 0&&(y=d.ref);for(_ in d)r.call(d,_)&&!l.hasOwnProperty(_)&&(g[_]=d[_]);if(f&&f.defaultProps)for(_ in d=f.defaultProps,d)g[_]===void 0&&(g[_]=d[_]);return{$$typeof:e,type:f,key:x,ref:y,props:g,_owner:o.current}}return fa.Fragment=t,fa.jsx=u,fa.jsxs=u,fa}var g0;function Tv(){return g0||(g0=1,Pf.exports=bv()),Pf.exports}var Y=Tv(),en=yd();const Tt=Ev(en);var Hl={},Df={exports:{}},Yn={},If={exports:{}},Nf={};var _0;function Av(){return _0||(_0=1,(function(s){function e(j,re){var D=j.length;j.push(re);e:for(;0<D;){var Q=D-1>>>1,ve=j[Q];if(0<o(ve,re))j[Q]=re,j[D]=ve,D=Q;else break e}}function t(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var re=j[0],D=j.pop();if(D!==re){j[0]=D;e:for(var Q=0,ve=j.length,Fe=ve>>>1;Q<Fe;){var Ne=2*(Q+1)-1,Je=j[Ne],se=Ne+1,fe=j[se];if(0>o(Je,D))se<ve&&0>o(fe,Je)?(j[Q]=fe,j[se]=D,Q=se):(j[Q]=Je,j[Ne]=D,Q=Ne);else if(se<ve&&0>o(fe,D))j[Q]=fe,j[se]=D,Q=se;else break e}}return re}function o(j,re){var D=j.sortIndex-re.sortIndex;return D!==0?D:j.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var d=[],p=[],_=1,g=null,x=3,y=!1,M=!1,E=!1,S=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(j){for(var re=t(p);re!==null;){if(re.callback===null)r(p);else if(re.startTime<=j)r(p),re.sortIndex=re.expirationTime,e(d,re);else break;re=t(p)}}function I(j){if(E=!1,R(j),!M)if(t(d)!==null)M=!0,ce(k);else{var re=t(p);re!==null&&ae(I,re.startTime-j)}}function k(j,re){M=!1,E&&(E=!1,v(B),B=-1),y=!0;var D=x;try{for(R(re),g=t(d);g!==null&&(!(g.expirationTime>re)||j&&!F());){var Q=g.callback;if(typeof Q=="function"){g.callback=null,x=g.priorityLevel;var ve=Q(g.expirationTime<=re);re=s.unstable_now(),typeof ve=="function"?g.callback=ve:g===t(d)&&r(d),R(re)}else r(d);g=t(d)}if(g!==null)var Fe=!0;else{var Ne=t(p);Ne!==null&&ae(I,Ne.startTime-re),Fe=!1}return Fe}finally{g=null,x=D,y=!1}}var L=!1,N=null,B=-1,A=5,w=-1;function F(){return!(s.unstable_now()-w<A)}function V(){if(N!==null){var j=s.unstable_now();w=j;var re=!0;try{re=N(!0,j)}finally{re?K():(L=!1,N=null)}}else L=!1}var K;if(typeof P=="function")K=function(){P(V)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,ne=ie.port2;ie.port1.onmessage=V,K=function(){ne.postMessage(null)}}else K=function(){S(V,0)};function ce(j){N=j,L||(L=!0,K())}function ae(j,re){B=S(function(){j(s.unstable_now())},re)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(j){j.callback=null},s.unstable_continueExecution=function(){M||y||(M=!0,ce(k))},s.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<j?Math.floor(1e3/j):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return t(d)},s.unstable_next=function(j){switch(x){case 1:case 2:case 3:var re=3;break;default:re=x}var D=x;x=re;try{return j()}finally{x=D}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(j,re){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var D=x;x=j;try{return re()}finally{x=D}},s.unstable_scheduleCallback=function(j,re,D){var Q=s.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?Q+D:Q):D=Q,j){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=D+ve,j={id:_++,callback:re,priorityLevel:j,startTime:D,expirationTime:ve,sortIndex:-1},D>Q?(j.sortIndex=D,e(p,j),t(d)===null&&j===t(p)&&(E?(v(B),B=-1):E=!0,ae(I,D-Q))):(j.sortIndex=ve,e(d,j),M||y||(M=!0,ce(k))),j},s.unstable_shouldYield=F,s.unstable_wrapCallback=function(j){var re=x;return function(){var D=x;x=re;try{return j.apply(this,arguments)}finally{x=D}}}})(Nf)),Nf}var v0;function Cv(){return v0||(v0=1,If.exports=Av()),If.exports}var y0;function Rv(){if(y0)return Yn;y0=1;var s=yd(),e=Cv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},g={};function x(n){return d.call(g,n)?!0:d.call(_,n)?!1:p.test(n)?g[n]=!0:(_[n]=!0,!1)}function y(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,a,c){if(i===null||typeof i>"u"||y(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function E(n,i,a,c,h,m,b){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=b}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new E(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];S[i]=new E(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new E(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new E(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new E(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new E(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new E(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new E(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new E(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function P(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(v,P);S[i]=new E(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(v,P);S[i]=new E(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(v,P);S[i]=new E(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new E(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new E(n,1,!1,n.toLowerCase(),null,!0,!0)});function R(n,i,a,c){var h=S.hasOwnProperty(i)?S[i]:null;(h!==null?h.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,a,h,c)&&(a=null),c||h===null?x(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(i=h.attributeName,c=h.attributeNamespace,a===null?n.removeAttribute(i):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var I=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=Symbol.for("react.element"),L=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),F=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),ie=Symbol.for("react.suspense_list"),ne=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),ae=Symbol.for("react.offscreen"),j=Symbol.iterator;function re(n){return n===null||typeof n!="object"?null:(n=j&&n[j]||n["@@iterator"],typeof n=="function"?n:null)}var D=Object.assign,Q;function ve(n){if(Q===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);Q=i&&i[1]||""}return`
`+Q+n}var Fe=!1;function Ne(n,i){if(!n||Fe)return"";Fe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(oe){var c=oe}Reflect.construct(n,[],i)}else{try{i.call()}catch(oe){c=oe}n.call(i.prototype)}else{try{throw Error()}catch(oe){c=oe}n()}}catch(oe){if(oe&&c&&typeof oe.stack=="string"){for(var h=oe.stack.split(`
`),m=c.stack.split(`
`),b=h.length-1,O=m.length-1;1<=b&&0<=O&&h[b]!==m[O];)O--;for(;1<=b&&0<=O;b--,O--)if(h[b]!==m[O]){if(b!==1||O!==1)do if(b--,O--,0>O||h[b]!==m[O]){var W=`
`+h[b].replace(" at new "," at ");return n.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",n.displayName)),W}while(1<=b&&0<=O);break}}}finally{Fe=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ve(n):""}function Je(n){switch(n.tag){case 5:return ve(n.type);case 16:return ve("Lazy");case 13:return ve("Suspense");case 19:return ve("SuspenseList");case 0:case 2:case 15:return n=Ne(n.type,!1),n;case 11:return n=Ne(n.type.render,!1),n;case 1:return n=Ne(n.type,!0),n;default:return""}}function se(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case L:return"Portal";case A:return"Profiler";case B:return"StrictMode";case K:return"Suspense";case ie:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case F:return(n.displayName||"Context")+".Consumer";case w:return(n._context.displayName||"Context")+".Provider";case V:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ne:return i=n.displayName||null,i!==null?i:se(n.type)||"Memo";case ce:i=n._payload,n=n._init;try{return se(n(i))}catch{}}return null}function fe(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return se(i);case 8:return i===B?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ye(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Xe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ke(n){var i=Xe(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(b){c=""+b,m.call(this,b)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(b){c=""+b},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function he(n){n._valueTracker||(n._valueTracker=Ke(n))}function We(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Xe(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Be(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Et(n,i){var a=i.checked;return D({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function z(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=ye(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function _t(n,i){i=i.checked,i!=null&&R(n,"checked",i,!1)}function gt(n,i){_t(n,i);var a=ye(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?ke(n,i.type,a):i.hasOwnProperty("defaultValue")&&ke(n,i.type,ye(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ct(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ke(n,i,a){(i!=="number"||Be(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Ut=Array.isArray;function qe(n,i,a,c){if(n=n.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=i.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&c&&(n[a].defaultSelected=!0)}else{for(a=""+ye(a),i=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function ft(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return D({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function U(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Ut(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:ye(a)}}function T(n,i){var a=ye(i.value),c=ye(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function ee(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function de(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function me(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?de(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ue,Ze=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,h){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ue=ue||document.createElement("div"),ue.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ue.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ce(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var et={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$e=["Webkit","ms","Moz","O"];Object.keys(et).forEach(function(n){$e.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),et[i]=et[n]})});function _e(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||et.hasOwnProperty(n)&&et[n]?(""+i).trim():i+"px"}function Ae(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,h=_e(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,h):n[a]=h}}var at=D({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function it(n,i){if(i){if(at[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ie(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lt=null;function G(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Pe=null,we=null,be=null;function Me(n){if(n=Ko(n)){if(typeof Pe!="function")throw Error(t(280));var i=n.stateNode;i&&(i=il(i),Pe(n.stateNode,n.type,i))}}function pe(n){we?be?be.push(n):be=[n]:we=n}function Ve(){if(we){var n=we,i=be;if(be=we=null,Me(n),i)for(n=0;n<i.length;n++)Me(i[n])}}function ht(n,i){return n(i)}function Ot(){}var Pt=!1;function Kn(n,i,a){if(Pt)return n(i,a);Pt=!0;try{return ht(n,i,a)}finally{Pt=!1,(we!==null||be!==null)&&(Ot(),Ve())}}function Sn(n,i){var a=n.stateNode;if(a===null)return null;var c=il(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Do=!1;if(f)try{var pr={};Object.defineProperty(pr,"passive",{get:function(){Do=!0}}),window.addEventListener("test",pr,pr),window.removeEventListener("test",pr,pr)}catch{Do=!1}function Ua(n,i,a,c,h,m,b,O,W){var oe=Array.prototype.slice.call(arguments,3);try{i.apply(a,oe)}catch(ge){this.onError(ge)}}var Zn=!1,mr=null,Kr=!1,ws=null,bs={onError:function(n){Zn=!0,mr=n}};function Fa(n,i,a,c,h,m,b,O,W){Zn=!1,mr=null,Ua.apply(bs,arguments)}function Ts(n,i,a,c,h,m,b,O,W){if(Fa.apply(this,arguments),Zn){if(Zn){var oe=mr;Zn=!1,mr=null}else throw Error(t(198));Kr||(Kr=!0,ws=oe)}}function Pi(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Io(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Oa(n){if(Pi(n)!==n)throw Error(t(188))}function Qc(n){var i=n.alternate;if(!i){if(i=Pi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var h=a.return;if(h===null)break;var m=h.alternate;if(m===null){if(c=h.return,c!==null){a=c;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===a)return Oa(h),n;if(m===c)return Oa(h),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=h,c=m;else{for(var b=!1,O=h.child;O;){if(O===a){b=!0,a=h,c=m;break}if(O===c){b=!0,c=h,a=m;break}O=O.sibling}if(!b){for(O=m.child;O;){if(O===a){b=!0,a=m,c=h;break}if(O===c){b=!0,c=m,a=h;break}O=O.sibling}if(!b)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function ka(n){return n=Qc(n),n!==null?Ba(n):null}function Ba(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Ba(n);if(i!==null)return i;n=n.sibling}return null}var za=e.unstable_scheduleCallback,Va=e.unstable_cancelCallback,C=e.unstable_shouldYield,q=e.unstable_requestPaint,J=e.unstable_now,le=e.unstable_getCurrentPriorityLevel,$=e.unstable_ImmediatePriority,Te=e.unstable_UserBlockingPriority,Le=e.unstable_NormalPriority,Ge=e.unstable_LowPriority,Oe=e.unstable_IdlePriority,rt=null,Qe=null;function nt(n){if(Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(rt,n,void 0,(n.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:qt,Nt=Math.log,Yt=Math.LN2;function qt(n){return n>>>=0,n===0?32:31-(Nt(n)/Yt|0)|0}var Lt=64,tt=4194304;function Ft(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function wt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,h=n.suspendedLanes,m=n.pingedLanes,b=a&268435455;if(b!==0){var O=b&~h;O!==0?c=Ft(O):(m&=b,m!==0&&(c=Ft(m)))}else b=a&~h,b!==0?c=Ft(b):m!==0&&(c=Ft(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&h)===0&&(h=c&-c,m=i&-i,h>=m||h===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-ct(i),h=1<<a,c|=n[a],i&=~h;return c}function Un(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xr(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,m=n.pendingLanes;0<m;){var b=31-ct(m),O=1<<b,W=h[b];W===-1?((O&a)===0||(O&c)!==0)&&(h[b]=Un(O,i)):W<=i&&(n.expiredLanes|=O),m&=~O}}function Mn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function gr(){var n=Lt;return Lt<<=1,(Lt&4194240)===0&&(Lt=64),n}function Vt(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function on(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-ct(i),n[i]=a}function Vn(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-ct(a),m=1<<h;i[h]=0,c[h]=-1,n[h]=-1,a&=~m}}function fn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-ct(a),h=1<<c;h&i|n[c]&i&&(n[c]|=i),a&=~h}}var mt=0;function As(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Li,Jc,Yd,qd,$d,eu=!1,Ha=[],_r=null,vr=null,yr=null,No=new Map,Uo=new Map,Sr=[],jg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kd(n,i){switch(n){case"focusin":case"focusout":_r=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":yr=null;break;case"pointerover":case"pointerout":No.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Uo.delete(i.pointerId)}}function Fo(n,i,a,c,h,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[h]},i!==null&&(i=Ko(i),i!==null&&Jc(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function Xg(n,i,a,c,h){switch(i){case"focusin":return _r=Fo(_r,n,i,a,c,h),!0;case"dragenter":return vr=Fo(vr,n,i,a,c,h),!0;case"mouseover":return yr=Fo(yr,n,i,a,c,h),!0;case"pointerover":var m=h.pointerId;return No.set(m,Fo(No.get(m)||null,n,i,a,c,h)),!0;case"gotpointercapture":return m=h.pointerId,Uo.set(m,Fo(Uo.get(m)||null,n,i,a,c,h)),!0}return!1}function Zd(n){var i=Zr(n.target);if(i!==null){var a=Pi(i);if(a!==null){if(i=a.tag,i===13){if(i=Io(a),i!==null){n.blockedOn=i,$d(n.priority,function(){Yd(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ga(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=nu(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);lt=c,a.target.dispatchEvent(c),lt=null}else return i=Ko(a),i!==null&&Jc(i),n.blockedOn=a,!1;i.shift()}return!0}function Qd(n,i,a){Ga(n)&&a.delete(i)}function Yg(){eu=!1,_r!==null&&Ga(_r)&&(_r=null),vr!==null&&Ga(vr)&&(vr=null),yr!==null&&Ga(yr)&&(yr=null),No.forEach(Qd),Uo.forEach(Qd)}function Oo(n,i){n.blockedOn===i&&(n.blockedOn=null,eu||(eu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Yg)))}function ko(n){function i(h){return Oo(h,n)}if(0<Ha.length){Oo(Ha[0],n);for(var a=1;a<Ha.length;a++){var c=Ha[a];c.blockedOn===n&&(c.blockedOn=null)}}for(_r!==null&&Oo(_r,n),vr!==null&&Oo(vr,n),yr!==null&&Oo(yr,n),No.forEach(i),Uo.forEach(i),a=0;a<Sr.length;a++)c=Sr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Sr.length&&(a=Sr[0],a.blockedOn===null);)Zd(a),a.blockedOn===null&&Sr.shift()}var Cs=I.ReactCurrentBatchConfig,Wa=!0;function qg(n,i,a,c){var h=mt,m=Cs.transition;Cs.transition=null;try{mt=1,tu(n,i,a,c)}finally{mt=h,Cs.transition=m}}function $g(n,i,a,c){var h=mt,m=Cs.transition;Cs.transition=null;try{mt=4,tu(n,i,a,c)}finally{mt=h,Cs.transition=m}}function tu(n,i,a,c){if(Wa){var h=nu(n,i,a,c);if(h===null)vu(n,i,c,ja,a),Kd(n,c);else if(Xg(h,n,i,a,c))c.stopPropagation();else if(Kd(n,c),i&4&&-1<jg.indexOf(n)){for(;h!==null;){var m=Ko(h);if(m!==null&&Li(m),m=nu(n,i,a,c),m===null&&vu(n,i,c,ja,a),m===h)break;h=m}h!==null&&c.stopPropagation()}else vu(n,i,c,null,a)}}var ja=null;function nu(n,i,a,c){if(ja=null,n=G(c),n=Zr(n),n!==null)if(i=Pi(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Io(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ja=n,null}function Jd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(le()){case $:return 1;case Te:return 4;case Le:case Ge:return 16;case Oe:return 536870912;default:return 16}default:return 16}}var Mr=null,iu=null,Xa=null;function ep(){if(Xa)return Xa;var n,i=iu,a=i.length,c,h="value"in Mr?Mr.value:Mr.textContent,m=h.length;for(n=0;n<a&&i[n]===h[n];n++);var b=a-n;for(c=1;c<=b&&i[a-c]===h[m-c];c++);return Xa=h.slice(n,1<c?1-c:void 0)}function Ya(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function qa(){return!0}function tp(){return!1}function Qn(n){function i(a,c,h,m,b){this._reactName=a,this._targetInst=h,this.type=c,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var O in n)n.hasOwnProperty(O)&&(a=n[O],this[O]=a?a(m):m[O]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?qa:tp,this.isPropagationStopped=tp,this}return D(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=qa)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=qa)},persist:function(){},isPersistent:qa}),i}var Rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ru=Qn(Rs),Bo=D({},Rs,{view:0,detail:0}),Kg=Qn(Bo),su,ou,zo,$a=D({},Bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==zo&&(zo&&n.type==="mousemove"?(su=n.screenX-zo.screenX,ou=n.screenY-zo.screenY):ou=su=0,zo=n),su)},movementY:function(n){return"movementY"in n?n.movementY:ou}}),np=Qn($a),Zg=D({},$a,{dataTransfer:0}),Qg=Qn(Zg),Jg=D({},Bo,{relatedTarget:0}),au=Qn(Jg),e_=D({},Rs,{animationName:0,elapsedTime:0,pseudoElement:0}),t_=Qn(e_),n_=D({},Rs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),i_=Qn(n_),r_=D({},Rs,{data:0}),ip=Qn(r_),s_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},o_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},a_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function l_(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=a_[n])?!!i[n]:!1}function lu(){return l_}var c_=D({},Bo,{key:function(n){if(n.key){var i=s_[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ya(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?o_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lu,charCode:function(n){return n.type==="keypress"?Ya(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ya(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),u_=Qn(c_),f_=D({},$a,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rp=Qn(f_),h_=D({},Bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lu}),d_=Qn(h_),p_=D({},Rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),m_=Qn(p_),x_=D({},$a,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),g_=Qn(x_),__=[9,13,27,32],cu=f&&"CompositionEvent"in window,Vo=null;f&&"documentMode"in document&&(Vo=document.documentMode);var v_=f&&"TextEvent"in window&&!Vo,sp=f&&(!cu||Vo&&8<Vo&&11>=Vo),op=" ",ap=!1;function lp(n,i){switch(n){case"keyup":return __.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ps=!1;function y_(n,i){switch(n){case"compositionend":return cp(i);case"keypress":return i.which!==32?null:(ap=!0,op);case"textInput":return n=i.data,n===op&&ap?null:n;default:return null}}function S_(n,i){if(Ps)return n==="compositionend"||!cu&&lp(n,i)?(n=ep(),Xa=iu=Mr=null,Ps=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return sp&&i.locale!=="ko"?null:i.data;default:return null}}var M_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function up(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!M_[n.type]:i==="textarea"}function fp(n,i,a,c){pe(c),i=el(i,"onChange"),0<i.length&&(a=new ru("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Ho=null,Go=null;function E_(n){Rp(n,0)}function Ka(n){var i=Us(n);if(We(i))return n}function w_(n,i){if(n==="change")return i}var hp=!1;if(f){var uu;if(f){var fu="oninput"in document;if(!fu){var dp=document.createElement("div");dp.setAttribute("oninput","return;"),fu=typeof dp.oninput=="function"}uu=fu}else uu=!1;hp=uu&&(!document.documentMode||9<document.documentMode)}function pp(){Ho&&(Ho.detachEvent("onpropertychange",mp),Go=Ho=null)}function mp(n){if(n.propertyName==="value"&&Ka(Go)){var i=[];fp(i,Go,n,G(n)),Kn(E_,i)}}function b_(n,i,a){n==="focusin"?(pp(),Ho=i,Go=a,Ho.attachEvent("onpropertychange",mp)):n==="focusout"&&pp()}function T_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ka(Go)}function A_(n,i){if(n==="click")return Ka(i)}function C_(n,i){if(n==="input"||n==="change")return Ka(i)}function R_(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var gi=typeof Object.is=="function"?Object.is:R_;function Wo(n,i){if(gi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var h=a[c];if(!d.call(i,h)||!gi(n[h],i[h]))return!1}return!0}function xp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function gp(n,i){var a=xp(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=xp(a)}}function _p(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?_p(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function vp(){for(var n=window,i=Be();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Be(n.document)}return i}function hu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function P_(n){var i=vp(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&_p(a.ownerDocument.documentElement,a)){if(c!==null&&hu(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,m=Math.min(c.start,h);c=c.end===void 0?m:Math.min(c.end,h),!n.extend&&m>c&&(h=c,c=m,m=h),h=gp(a,m);var b=gp(a,c);h&&b&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==b.node||n.focusOffset!==b.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(b.node,b.offset)):(i.setEnd(b.node,b.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var L_=f&&"documentMode"in document&&11>=document.documentMode,Ls=null,du=null,jo=null,pu=!1;function yp(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;pu||Ls==null||Ls!==Be(c)||(c=Ls,"selectionStart"in c&&hu(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),jo&&Wo(jo,c)||(jo=c,c=el(du,"onSelect"),0<c.length&&(i=new ru("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Ls)))}function Za(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ds={animationend:Za("Animation","AnimationEnd"),animationiteration:Za("Animation","AnimationIteration"),animationstart:Za("Animation","AnimationStart"),transitionend:Za("Transition","TransitionEnd")},mu={},Sp={};f&&(Sp=document.createElement("div").style,"AnimationEvent"in window||(delete Ds.animationend.animation,delete Ds.animationiteration.animation,delete Ds.animationstart.animation),"TransitionEvent"in window||delete Ds.transitionend.transition);function Qa(n){if(mu[n])return mu[n];if(!Ds[n])return n;var i=Ds[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Sp)return mu[n]=i[a];return n}var Mp=Qa("animationend"),Ep=Qa("animationiteration"),wp=Qa("animationstart"),bp=Qa("transitionend"),Tp=new Map,Ap="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(n,i){Tp.set(n,i),l(i,[n])}for(var xu=0;xu<Ap.length;xu++){var gu=Ap[xu],D_=gu.toLowerCase(),I_=gu[0].toUpperCase()+gu.slice(1);Er(D_,"on"+I_)}Er(Mp,"onAnimationEnd"),Er(Ep,"onAnimationIteration"),Er(wp,"onAnimationStart"),Er("dblclick","onDoubleClick"),Er("focusin","onFocus"),Er("focusout","onBlur"),Er(bp,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),N_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xo));function Cp(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Ts(c,i,void 0,n),n.currentTarget=null}function Rp(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],h=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var b=c.length-1;0<=b;b--){var O=c[b],W=O.instance,oe=O.currentTarget;if(O=O.listener,W!==m&&h.isPropagationStopped())break e;Cp(h,O,oe),m=W}else for(b=0;b<c.length;b++){if(O=c[b],W=O.instance,oe=O.currentTarget,O=O.listener,W!==m&&h.isPropagationStopped())break e;Cp(h,O,oe),m=W}}}if(Kr)throw n=ws,Kr=!1,ws=null,n}function jt(n,i){var a=i[bu];a===void 0&&(a=i[bu]=new Set);var c=n+"__bubble";a.has(c)||(Pp(i,n,2,!1),a.add(c))}function _u(n,i,a){var c=0;i&&(c|=4),Pp(a,n,c,i)}var Ja="_reactListening"+Math.random().toString(36).slice(2);function Yo(n){if(!n[Ja]){n[Ja]=!0,r.forEach(function(a){a!=="selectionchange"&&(N_.has(a)||_u(a,!1,n),_u(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ja]||(i[Ja]=!0,_u("selectionchange",!1,i))}}function Pp(n,i,a,c){switch(Jd(i)){case 1:var h=qg;break;case 4:h=$g;break;default:h=tu}a=h.bind(null,i,a,n),h=void 0,!Do||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(i,a,{capture:!0,passive:h}):n.addEventListener(i,a,!0):h!==void 0?n.addEventListener(i,a,{passive:h}):n.addEventListener(i,a,!1)}function vu(n,i,a,c,h){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var b=c.tag;if(b===3||b===4){var O=c.stateNode.containerInfo;if(O===h||O.nodeType===8&&O.parentNode===h)break;if(b===4)for(b=c.return;b!==null;){var W=b.tag;if((W===3||W===4)&&(W=b.stateNode.containerInfo,W===h||W.nodeType===8&&W.parentNode===h))return;b=b.return}for(;O!==null;){if(b=Zr(O),b===null)return;if(W=b.tag,W===5||W===6){c=m=b;continue e}O=O.parentNode}}c=c.return}Kn(function(){var oe=m,ge=G(a),Se=[];e:{var xe=Tp.get(n);if(xe!==void 0){var Ue=ru,He=n;switch(n){case"keypress":if(Ya(a)===0)break e;case"keydown":case"keyup":Ue=u_;break;case"focusin":He="focus",Ue=au;break;case"focusout":He="blur",Ue=au;break;case"beforeblur":case"afterblur":Ue=au;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ue=np;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ue=Qg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ue=d_;break;case Mp:case Ep:case wp:Ue=t_;break;case bp:Ue=m_;break;case"scroll":Ue=Kg;break;case"wheel":Ue=g_;break;case"copy":case"cut":case"paste":Ue=i_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ue=rp}var je=(i&4)!==0,sn=!je&&n==="scroll",Z=je?xe!==null?xe+"Capture":null:xe;je=[];for(var X=oe,te;X!==null;){te=X;var Ee=te.stateNode;if(te.tag===5&&Ee!==null&&(te=Ee,Z!==null&&(Ee=Sn(X,Z),Ee!=null&&je.push(qo(X,Ee,te)))),sn)break;X=X.return}0<je.length&&(xe=new Ue(xe,He,null,a,ge),Se.push({event:xe,listeners:je}))}}if((i&7)===0){e:{if(xe=n==="mouseover"||n==="pointerover",Ue=n==="mouseout"||n==="pointerout",xe&&a!==lt&&(He=a.relatedTarget||a.fromElement)&&(Zr(He)||He[Xi]))break e;if((Ue||xe)&&(xe=ge.window===ge?ge:(xe=ge.ownerDocument)?xe.defaultView||xe.parentWindow:window,Ue?(He=a.relatedTarget||a.toElement,Ue=oe,He=He?Zr(He):null,He!==null&&(sn=Pi(He),He!==sn||He.tag!==5&&He.tag!==6)&&(He=null)):(Ue=null,He=oe),Ue!==He)){if(je=np,Ee="onMouseLeave",Z="onMouseEnter",X="mouse",(n==="pointerout"||n==="pointerover")&&(je=rp,Ee="onPointerLeave",Z="onPointerEnter",X="pointer"),sn=Ue==null?xe:Us(Ue),te=He==null?xe:Us(He),xe=new je(Ee,X+"leave",Ue,a,ge),xe.target=sn,xe.relatedTarget=te,Ee=null,Zr(ge)===oe&&(je=new je(Z,X+"enter",He,a,ge),je.target=te,je.relatedTarget=sn,Ee=je),sn=Ee,Ue&&He)t:{for(je=Ue,Z=He,X=0,te=je;te;te=Is(te))X++;for(te=0,Ee=Z;Ee;Ee=Is(Ee))te++;for(;0<X-te;)je=Is(je),X--;for(;0<te-X;)Z=Is(Z),te--;for(;X--;){if(je===Z||Z!==null&&je===Z.alternate)break t;je=Is(je),Z=Is(Z)}je=null}else je=null;Ue!==null&&Lp(Se,xe,Ue,je,!1),He!==null&&sn!==null&&Lp(Se,sn,He,je,!0)}}e:{if(xe=oe?Us(oe):window,Ue=xe.nodeName&&xe.nodeName.toLowerCase(),Ue==="select"||Ue==="input"&&xe.type==="file")var Ye=w_;else if(up(xe))if(hp)Ye=C_;else{Ye=T_;var st=b_}else(Ue=xe.nodeName)&&Ue.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(Ye=A_);if(Ye&&(Ye=Ye(n,oe))){fp(Se,Ye,a,ge);break e}st&&st(n,xe,oe),n==="focusout"&&(st=xe._wrapperState)&&st.controlled&&xe.type==="number"&&ke(xe,"number",xe.value)}switch(st=oe?Us(oe):window,n){case"focusin":(up(st)||st.contentEditable==="true")&&(Ls=st,du=oe,jo=null);break;case"focusout":jo=du=Ls=null;break;case"mousedown":pu=!0;break;case"contextmenu":case"mouseup":case"dragend":pu=!1,yp(Se,a,ge);break;case"selectionchange":if(L_)break;case"keydown":case"keyup":yp(Se,a,ge)}var ot;if(cu)e:{switch(n){case"compositionstart":var dt="onCompositionStart";break e;case"compositionend":dt="onCompositionEnd";break e;case"compositionupdate":dt="onCompositionUpdate";break e}dt=void 0}else Ps?lp(n,a)&&(dt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(dt="onCompositionStart");dt&&(sp&&a.locale!=="ko"&&(Ps||dt!=="onCompositionStart"?dt==="onCompositionEnd"&&Ps&&(ot=ep()):(Mr=ge,iu="value"in Mr?Mr.value:Mr.textContent,Ps=!0)),st=el(oe,dt),0<st.length&&(dt=new ip(dt,n,null,a,ge),Se.push({event:dt,listeners:st}),ot?dt.data=ot:(ot=cp(a),ot!==null&&(dt.data=ot)))),(ot=v_?y_(n,a):S_(n,a))&&(oe=el(oe,"onBeforeInput"),0<oe.length&&(ge=new ip("onBeforeInput","beforeinput",null,a,ge),Se.push({event:ge,listeners:oe}),ge.data=ot))}Rp(Se,i)})}function qo(n,i,a){return{instance:n,listener:i,currentTarget:a}}function el(n,i){for(var a=i+"Capture",c=[];n!==null;){var h=n,m=h.stateNode;h.tag===5&&m!==null&&(h=m,m=Sn(n,a),m!=null&&c.unshift(qo(n,m,h)),m=Sn(n,i),m!=null&&c.push(qo(n,m,h))),n=n.return}return c}function Is(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Lp(n,i,a,c,h){for(var m=i._reactName,b=[];a!==null&&a!==c;){var O=a,W=O.alternate,oe=O.stateNode;if(W!==null&&W===c)break;O.tag===5&&oe!==null&&(O=oe,h?(W=Sn(a,m),W!=null&&b.unshift(qo(a,W,O))):h||(W=Sn(a,m),W!=null&&b.push(qo(a,W,O)))),a=a.return}b.length!==0&&n.push({event:i,listeners:b})}var U_=/\r\n?/g,F_=/\u0000|\uFFFD/g;function Dp(n){return(typeof n=="string"?n:""+n).replace(U_,`
`).replace(F_,"")}function tl(n,i,a){if(i=Dp(i),Dp(n)!==i&&a)throw Error(t(425))}function nl(){}var yu=null,Su=null;function Mu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Eu=typeof setTimeout=="function"?setTimeout:void 0,O_=typeof clearTimeout=="function"?clearTimeout:void 0,Ip=typeof Promise=="function"?Promise:void 0,k_=typeof queueMicrotask=="function"?queueMicrotask:typeof Ip<"u"?function(n){return Ip.resolve(null).then(n).catch(B_)}:Eu;function B_(n){setTimeout(function(){throw n})}function wu(n,i){var a=i,c=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(c===0){n.removeChild(h),ko(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=h}while(a);ko(i)}function wr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Np(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Ns=Math.random().toString(36).slice(2),Di="__reactFiber$"+Ns,$o="__reactProps$"+Ns,Xi="__reactContainer$"+Ns,bu="__reactEvents$"+Ns,z_="__reactListeners$"+Ns,V_="__reactHandles$"+Ns;function Zr(n){var i=n[Di];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Xi]||a[Di]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Np(n);n!==null;){if(a=n[Di])return a;n=Np(n)}return i}n=a,a=n.parentNode}return null}function Ko(n){return n=n[Di]||n[Xi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Us(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function il(n){return n[$o]||null}var Tu=[],Fs=-1;function br(n){return{current:n}}function Xt(n){0>Fs||(n.current=Tu[Fs],Tu[Fs]=null,Fs--)}function Gt(n,i){Fs++,Tu[Fs]=n.current,n.current=i}var Tr={},Tn=br(Tr),Hn=br(!1),Qr=Tr;function Os(n,i){var a=n.type.contextTypes;if(!a)return Tr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var h={},m;for(m in a)h[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function Gn(n){return n=n.childContextTypes,n!=null}function rl(){Xt(Hn),Xt(Tn)}function Up(n,i,a){if(Tn.current!==Tr)throw Error(t(168));Gt(Tn,i),Gt(Hn,a)}function Fp(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var h in c)if(!(h in i))throw Error(t(108,fe(n)||"Unknown",h));return D({},a,c)}function sl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Tr,Qr=Tn.current,Gt(Tn,n),Gt(Hn,Hn.current),!0}function Op(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Fp(n,i,Qr),c.__reactInternalMemoizedMergedChildContext=n,Xt(Hn),Xt(Tn),Gt(Tn,n)):Xt(Hn),Gt(Hn,a)}var Yi=null,ol=!1,Au=!1;function kp(n){Yi===null?Yi=[n]:Yi.push(n)}function H_(n){ol=!0,kp(n)}function Ar(){if(!Au&&Yi!==null){Au=!0;var n=0,i=mt;try{var a=Yi;for(mt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Yi=null,ol=!1}catch(h){throw Yi!==null&&(Yi=Yi.slice(n+1)),za($,Ar),h}finally{mt=i,Au=!1}}return null}var ks=[],Bs=0,al=null,ll=0,oi=[],ai=0,Jr=null,qi=1,$i="";function es(n,i){ks[Bs++]=ll,ks[Bs++]=al,al=n,ll=i}function Bp(n,i,a){oi[ai++]=qi,oi[ai++]=$i,oi[ai++]=Jr,Jr=n;var c=qi;n=$i;var h=32-ct(c)-1;c&=~(1<<h),a+=1;var m=32-ct(i)+h;if(30<m){var b=h-h%5;m=(c&(1<<b)-1).toString(32),c>>=b,h-=b,qi=1<<32-ct(i)+h|a<<h|c,$i=m+n}else qi=1<<m|a<<h|c,$i=n}function Cu(n){n.return!==null&&(es(n,1),Bp(n,1,0))}function Ru(n){for(;n===al;)al=ks[--Bs],ks[Bs]=null,ll=ks[--Bs],ks[Bs]=null;for(;n===Jr;)Jr=oi[--ai],oi[ai]=null,$i=oi[--ai],oi[ai]=null,qi=oi[--ai],oi[ai]=null}var Jn=null,ei=null,$t=!1,_i=null;function zp(n,i){var a=fi(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Vp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Jn=n,ei=wr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Jn=n,ei=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Jr!==null?{id:qi,overflow:$i}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=fi(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Jn=n,ei=null,!0):!1;default:return!1}}function Pu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Lu(n){if($t){var i=ei;if(i){var a=i;if(!Vp(n,i)){if(Pu(n))throw Error(t(418));i=wr(a.nextSibling);var c=Jn;i&&Vp(n,i)?zp(c,a):(n.flags=n.flags&-4097|2,$t=!1,Jn=n)}}else{if(Pu(n))throw Error(t(418));n.flags=n.flags&-4097|2,$t=!1,Jn=n}}}function Hp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Jn=n}function cl(n){if(n!==Jn)return!1;if(!$t)return Hp(n),$t=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Mu(n.type,n.memoizedProps)),i&&(i=ei)){if(Pu(n))throw Gp(),Error(t(418));for(;i;)zp(n,i),i=wr(i.nextSibling)}if(Hp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){ei=wr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}ei=null}}else ei=Jn?wr(n.stateNode.nextSibling):null;return!0}function Gp(){for(var n=ei;n;)n=wr(n.nextSibling)}function zs(){ei=Jn=null,$t=!1}function Du(n){_i===null?_i=[n]:_i.push(n)}var G_=I.ReactCurrentBatchConfig;function vi(n,i){if(n&&n.defaultProps){i=D({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}var ul=br(null),fl=null,Vs=null,Iu=null;function Nu(){Iu=Vs=fl=null}function Uu(n){var i=ul.current;Xt(ul),n._currentValue=i}function Fu(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Hs(n,i){fl=n,Iu=Vs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Wn=!0),n.firstContext=null)}function li(n){var i=n._currentValue;if(Iu!==n)if(n={context:n,memoizedValue:i,next:null},Vs===null){if(fl===null)throw Error(t(308));Vs=n,fl.dependencies={lanes:0,firstContext:n}}else Vs=Vs.next=n;return i}var ts=null;function Ou(n){ts===null?ts=[n]:ts.push(n)}function Wp(n,i,a,c){var h=i.interleaved;return h===null?(a.next=a,Ou(i)):(a.next=h.next,h.next=a),i.interleaved=a,Ki(n,c)}function Ki(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Cr=!1;function ku(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Zi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Rr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Rt&2)!==0){var h=c.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),c.pending=i,Ki(n,a)}return h=c.interleaved,h===null?(i.next=i,Ou(c)):(i.next=h.next,h.next=i),c.interleaved=i,Ki(n,a)}function hl(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,fn(n,a)}}function Xp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var h=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var b={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?h=m=b:m=m.next=b,a=a.next}while(a!==null);m===null?h=m=i:m=m.next=i}else h=m=i;a={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function dl(n,i,a,c){var h=n.updateQueue;Cr=!1;var m=h.firstBaseUpdate,b=h.lastBaseUpdate,O=h.shared.pending;if(O!==null){h.shared.pending=null;var W=O,oe=W.next;W.next=null,b===null?m=oe:b.next=oe,b=W;var ge=n.alternate;ge!==null&&(ge=ge.updateQueue,O=ge.lastBaseUpdate,O!==b&&(O===null?ge.firstBaseUpdate=oe:O.next=oe,ge.lastBaseUpdate=W))}if(m!==null){var Se=h.baseState;b=0,ge=oe=W=null,O=m;do{var xe=O.lane,Ue=O.eventTime;if((c&xe)===xe){ge!==null&&(ge=ge.next={eventTime:Ue,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var He=n,je=O;switch(xe=i,Ue=a,je.tag){case 1:if(He=je.payload,typeof He=="function"){Se=He.call(Ue,Se,xe);break e}Se=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=je.payload,xe=typeof He=="function"?He.call(Ue,Se,xe):He,xe==null)break e;Se=D({},Se,xe);break e;case 2:Cr=!0}}O.callback!==null&&O.lane!==0&&(n.flags|=64,xe=h.effects,xe===null?h.effects=[O]:xe.push(O))}else Ue={eventTime:Ue,lane:xe,tag:O.tag,payload:O.payload,callback:O.callback,next:null},ge===null?(oe=ge=Ue,W=Se):ge=ge.next=Ue,b|=xe;if(O=O.next,O===null){if(O=h.shared.pending,O===null)break;xe=O,O=xe.next,xe.next=null,h.lastBaseUpdate=xe,h.shared.pending=null}}while(!0);if(ge===null&&(W=Se),h.baseState=W,h.firstBaseUpdate=oe,h.lastBaseUpdate=ge,i=h.shared.interleaved,i!==null){h=i;do b|=h.lane,h=h.next;while(h!==i)}else m===null&&(h.shared.lanes=0);rs|=b,n.lanes=b,n.memoizedState=Se}}function Yp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],h=c.callback;if(h!==null){if(c.callback=null,c=a,typeof h!="function")throw Error(t(191,h));h.call(c)}}}var qp=new s.Component().refs;function Bu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:D({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var pl={isMounted:function(n){return(n=n._reactInternals)?Pi(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=On(),h=Ir(n),m=Zi(c,h);m.payload=i,a!=null&&(m.callback=a),i=Rr(n,m,h),i!==null&&(Mi(i,n,h,c),hl(i,n,h))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=On(),h=Ir(n),m=Zi(c,h);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=Rr(n,m,h),i!==null&&(Mi(i,n,h,c),hl(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=On(),c=Ir(n),h=Zi(a,c);h.tag=2,i!=null&&(h.callback=i),i=Rr(n,h,c),i!==null&&(Mi(i,n,c,a),hl(i,n,c))}};function $p(n,i,a,c,h,m,b){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,b):i.prototype&&i.prototype.isPureReactComponent?!Wo(a,c)||!Wo(h,m):!0}function Kp(n,i,a){var c=!1,h=Tr,m=i.contextType;return typeof m=="object"&&m!==null?m=li(m):(h=Gn(i)?Qr:Tn.current,c=i.contextTypes,m=(c=c!=null)?Os(n,h):Tr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=pl,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=m),i}function Zp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&pl.enqueueReplaceState(i,i.state,null)}function zu(n,i,a,c){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs=qp,ku(n);var m=i.contextType;typeof m=="object"&&m!==null?h.context=li(m):(m=Gn(i)?Qr:Tn.current,h.context=Os(n,m)),h.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Bu(n,i,m,a),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&pl.enqueueReplaceState(h,h.state,null),dl(n,a,h,c),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Zo(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var h=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(b){var O=h.refs;O===qp&&(O=h.refs={}),b===null?delete O[m]:O[m]=b},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function ml(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Qp(n){var i=n._init;return i(n._payload)}function Jp(n){function i(Z,X){if(n){var te=Z.deletions;te===null?(Z.deletions=[X],Z.flags|=16):te.push(X)}}function a(Z,X){if(!n)return null;for(;X!==null;)i(Z,X),X=X.sibling;return null}function c(Z,X){for(Z=new Map;X!==null;)X.key!==null?Z.set(X.key,X):Z.set(X.index,X),X=X.sibling;return Z}function h(Z,X){return Z=Ur(Z,X),Z.index=0,Z.sibling=null,Z}function m(Z,X,te){return Z.index=te,n?(te=Z.alternate,te!==null?(te=te.index,te<X?(Z.flags|=2,X):te):(Z.flags|=2,X)):(Z.flags|=1048576,X)}function b(Z){return n&&Z.alternate===null&&(Z.flags|=2),Z}function O(Z,X,te,Ee){return X===null||X.tag!==6?(X=wf(te,Z.mode,Ee),X.return=Z,X):(X=h(X,te),X.return=Z,X)}function W(Z,X,te,Ee){var Ye=te.type;return Ye===N?ge(Z,X,te.props.children,Ee,te.key):X!==null&&(X.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===ce&&Qp(Ye)===X.type)?(Ee=h(X,te.props),Ee.ref=Zo(Z,X,te),Ee.return=Z,Ee):(Ee=Nl(te.type,te.key,te.props,null,Z.mode,Ee),Ee.ref=Zo(Z,X,te),Ee.return=Z,Ee)}function oe(Z,X,te,Ee){return X===null||X.tag!==4||X.stateNode.containerInfo!==te.containerInfo||X.stateNode.implementation!==te.implementation?(X=bf(te,Z.mode,Ee),X.return=Z,X):(X=h(X,te.children||[]),X.return=Z,X)}function ge(Z,X,te,Ee,Ye){return X===null||X.tag!==7?(X=ls(te,Z.mode,Ee,Ye),X.return=Z,X):(X=h(X,te),X.return=Z,X)}function Se(Z,X,te){if(typeof X=="string"&&X!==""||typeof X=="number")return X=wf(""+X,Z.mode,te),X.return=Z,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case k:return te=Nl(X.type,X.key,X.props,null,Z.mode,te),te.ref=Zo(Z,null,X),te.return=Z,te;case L:return X=bf(X,Z.mode,te),X.return=Z,X;case ce:var Ee=X._init;return Se(Z,Ee(X._payload),te)}if(Ut(X)||re(X))return X=ls(X,Z.mode,te,null),X.return=Z,X;ml(Z,X)}return null}function xe(Z,X,te,Ee){var Ye=X!==null?X.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return Ye!==null?null:O(Z,X,""+te,Ee);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case k:return te.key===Ye?W(Z,X,te,Ee):null;case L:return te.key===Ye?oe(Z,X,te,Ee):null;case ce:return Ye=te._init,xe(Z,X,Ye(te._payload),Ee)}if(Ut(te)||re(te))return Ye!==null?null:ge(Z,X,te,Ee,null);ml(Z,te)}return null}function Ue(Z,X,te,Ee,Ye){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return Z=Z.get(te)||null,O(X,Z,""+Ee,Ye);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case k:return Z=Z.get(Ee.key===null?te:Ee.key)||null,W(X,Z,Ee,Ye);case L:return Z=Z.get(Ee.key===null?te:Ee.key)||null,oe(X,Z,Ee,Ye);case ce:var st=Ee._init;return Ue(Z,X,te,st(Ee._payload),Ye)}if(Ut(Ee)||re(Ee))return Z=Z.get(te)||null,ge(X,Z,Ee,Ye,null);ml(X,Ee)}return null}function He(Z,X,te,Ee){for(var Ye=null,st=null,ot=X,dt=X=0,vn=null;ot!==null&&dt<te.length;dt++){ot.index>dt?(vn=ot,ot=null):vn=ot.sibling;var Dt=xe(Z,ot,te[dt],Ee);if(Dt===null){ot===null&&(ot=vn);break}n&&ot&&Dt.alternate===null&&i(Z,ot),X=m(Dt,X,dt),st===null?Ye=Dt:st.sibling=Dt,st=Dt,ot=vn}if(dt===te.length)return a(Z,ot),$t&&es(Z,dt),Ye;if(ot===null){for(;dt<te.length;dt++)ot=Se(Z,te[dt],Ee),ot!==null&&(X=m(ot,X,dt),st===null?Ye=ot:st.sibling=ot,st=ot);return $t&&es(Z,dt),Ye}for(ot=c(Z,ot);dt<te.length;dt++)vn=Ue(ot,Z,dt,te[dt],Ee),vn!==null&&(n&&vn.alternate!==null&&ot.delete(vn.key===null?dt:vn.key),X=m(vn,X,dt),st===null?Ye=vn:st.sibling=vn,st=vn);return n&&ot.forEach(function(Fr){return i(Z,Fr)}),$t&&es(Z,dt),Ye}function je(Z,X,te,Ee){var Ye=re(te);if(typeof Ye!="function")throw Error(t(150));if(te=Ye.call(te),te==null)throw Error(t(151));for(var st=Ye=null,ot=X,dt=X=0,vn=null,Dt=te.next();ot!==null&&!Dt.done;dt++,Dt=te.next()){ot.index>dt?(vn=ot,ot=null):vn=ot.sibling;var Fr=xe(Z,ot,Dt.value,Ee);if(Fr===null){ot===null&&(ot=vn);break}n&&ot&&Fr.alternate===null&&i(Z,ot),X=m(Fr,X,dt),st===null?Ye=Fr:st.sibling=Fr,st=Fr,ot=vn}if(Dt.done)return a(Z,ot),$t&&es(Z,dt),Ye;if(ot===null){for(;!Dt.done;dt++,Dt=te.next())Dt=Se(Z,Dt.value,Ee),Dt!==null&&(X=m(Dt,X,dt),st===null?Ye=Dt:st.sibling=Dt,st=Dt);return $t&&es(Z,dt),Ye}for(ot=c(Z,ot);!Dt.done;dt++,Dt=te.next())Dt=Ue(ot,Z,dt,Dt.value,Ee),Dt!==null&&(n&&Dt.alternate!==null&&ot.delete(Dt.key===null?dt:Dt.key),X=m(Dt,X,dt),st===null?Ye=Dt:st.sibling=Dt,st=Dt);return n&&ot.forEach(function(Mv){return i(Z,Mv)}),$t&&es(Z,dt),Ye}function sn(Z,X,te,Ee){if(typeof te=="object"&&te!==null&&te.type===N&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case k:e:{for(var Ye=te.key,st=X;st!==null;){if(st.key===Ye){if(Ye=te.type,Ye===N){if(st.tag===7){a(Z,st.sibling),X=h(st,te.props.children),X.return=Z,Z=X;break e}}else if(st.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===ce&&Qp(Ye)===st.type){a(Z,st.sibling),X=h(st,te.props),X.ref=Zo(Z,st,te),X.return=Z,Z=X;break e}a(Z,st);break}else i(Z,st);st=st.sibling}te.type===N?(X=ls(te.props.children,Z.mode,Ee,te.key),X.return=Z,Z=X):(Ee=Nl(te.type,te.key,te.props,null,Z.mode,Ee),Ee.ref=Zo(Z,X,te),Ee.return=Z,Z=Ee)}return b(Z);case L:e:{for(st=te.key;X!==null;){if(X.key===st)if(X.tag===4&&X.stateNode.containerInfo===te.containerInfo&&X.stateNode.implementation===te.implementation){a(Z,X.sibling),X=h(X,te.children||[]),X.return=Z,Z=X;break e}else{a(Z,X);break}else i(Z,X);X=X.sibling}X=bf(te,Z.mode,Ee),X.return=Z,Z=X}return b(Z);case ce:return st=te._init,sn(Z,X,st(te._payload),Ee)}if(Ut(te))return He(Z,X,te,Ee);if(re(te))return je(Z,X,te,Ee);ml(Z,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,X!==null&&X.tag===6?(a(Z,X.sibling),X=h(X,te),X.return=Z,Z=X):(a(Z,X),X=wf(te,Z.mode,Ee),X.return=Z,Z=X),b(Z)):a(Z,X)}return sn}var Gs=Jp(!0),em=Jp(!1),Qo={},Ii=br(Qo),Jo=br(Qo),ea=br(Qo);function ns(n){if(n===Qo)throw Error(t(174));return n}function Vu(n,i){switch(Gt(ea,i),Gt(Jo,n),Gt(Ii,Qo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:me(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=me(i,n)}Xt(Ii),Gt(Ii,i)}function Ws(){Xt(Ii),Xt(Jo),Xt(ea)}function tm(n){ns(ea.current);var i=ns(Ii.current),a=me(i,n.type);i!==a&&(Gt(Jo,n),Gt(Ii,a))}function Hu(n){Jo.current===n&&(Xt(Ii),Xt(Jo))}var Qt=br(0);function xl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Gu=[];function Wu(){for(var n=0;n<Gu.length;n++)Gu[n]._workInProgressVersionPrimary=null;Gu.length=0}var gl=I.ReactCurrentDispatcher,ju=I.ReactCurrentBatchConfig,is=0,Jt=null,hn=null,gn=null,_l=!1,ta=!1,na=0,W_=0;function An(){throw Error(t(321))}function Xu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!gi(n[a],i[a]))return!1;return!0}function Yu(n,i,a,c,h,m){if(is=m,Jt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,gl.current=n===null||n.memoizedState===null?q_:$_,n=a(c,h),ta){m=0;do{if(ta=!1,na=0,25<=m)throw Error(t(301));m+=1,gn=hn=null,i.updateQueue=null,gl.current=K_,n=a(c,h)}while(ta)}if(gl.current=Sl,i=hn!==null&&hn.next!==null,is=0,gn=hn=Jt=null,_l=!1,i)throw Error(t(300));return n}function qu(){var n=na!==0;return na=0,n}function Ni(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?Jt.memoizedState=gn=n:gn=gn.next=n,gn}function ci(){if(hn===null){var n=Jt.alternate;n=n!==null?n.memoizedState:null}else n=hn.next;var i=gn===null?Jt.memoizedState:gn.next;if(i!==null)gn=i,hn=n;else{if(n===null)throw Error(t(310));hn=n,n={memoizedState:hn.memoizedState,baseState:hn.baseState,baseQueue:hn.baseQueue,queue:hn.queue,next:null},gn===null?Jt.memoizedState=gn=n:gn=gn.next=n}return gn}function ia(n,i){return typeof i=="function"?i(n):i}function $u(n){var i=ci(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=hn,h=c.baseQueue,m=a.pending;if(m!==null){if(h!==null){var b=h.next;h.next=m.next,m.next=b}c.baseQueue=h=m,a.pending=null}if(h!==null){m=h.next,c=c.baseState;var O=b=null,W=null,oe=m;do{var ge=oe.lane;if((is&ge)===ge)W!==null&&(W=W.next={lane:0,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),c=oe.hasEagerState?oe.eagerState:n(c,oe.action);else{var Se={lane:ge,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null};W===null?(O=W=Se,b=c):W=W.next=Se,Jt.lanes|=ge,rs|=ge}oe=oe.next}while(oe!==null&&oe!==m);W===null?b=c:W.next=O,gi(c,i.memoizedState)||(Wn=!0),i.memoizedState=c,i.baseState=b,i.baseQueue=W,a.lastRenderedState=c}if(n=a.interleaved,n!==null){h=n;do m=h.lane,Jt.lanes|=m,rs|=m,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Ku(n){var i=ci(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,h=a.pending,m=i.memoizedState;if(h!==null){a.pending=null;var b=h=h.next;do m=n(m,b.action),b=b.next;while(b!==h);gi(m,i.memoizedState)||(Wn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function nm(){}function im(n,i){var a=Jt,c=ci(),h=i(),m=!gi(c.memoizedState,h);if(m&&(c.memoizedState=h,Wn=!0),c=c.queue,Zu(om.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||gn!==null&&gn.memoizedState.tag&1){if(a.flags|=2048,ra(9,sm.bind(null,a,c,h,i),void 0,null),_n===null)throw Error(t(349));(is&30)!==0||rm(a,i,h)}return h}function rm(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Jt.updateQueue,i===null?(i={lastEffect:null,stores:null},Jt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function sm(n,i,a,c){i.value=a,i.getSnapshot=c,am(i)&&lm(n)}function om(n,i,a){return a(function(){am(i)&&lm(n)})}function am(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!gi(n,a)}catch{return!0}}function lm(n){var i=Ki(n,1);i!==null&&Mi(i,n,1,-1)}function cm(n){var i=Ni();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:n},i.queue=n,n=n.dispatch=Y_.bind(null,Jt,n),[i.memoizedState,n]}function ra(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Jt.updateQueue,i===null?(i={lastEffect:null,stores:null},Jt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function um(){return ci().memoizedState}function vl(n,i,a,c){var h=Ni();Jt.flags|=n,h.memoizedState=ra(1|i,a,void 0,c===void 0?null:c)}function yl(n,i,a,c){var h=ci();c=c===void 0?null:c;var m=void 0;if(hn!==null){var b=hn.memoizedState;if(m=b.destroy,c!==null&&Xu(c,b.deps)){h.memoizedState=ra(i,a,m,c);return}}Jt.flags|=n,h.memoizedState=ra(1|i,a,m,c)}function fm(n,i){return vl(8390656,8,n,i)}function Zu(n,i){return yl(2048,8,n,i)}function hm(n,i){return yl(4,2,n,i)}function dm(n,i){return yl(4,4,n,i)}function pm(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function mm(n,i,a){return a=a!=null?a.concat([n]):null,yl(4,4,pm.bind(null,i,n),a)}function Qu(){}function xm(n,i){var a=ci();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Xu(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function gm(n,i){var a=ci();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Xu(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function _m(n,i,a){return(is&21)===0?(n.baseState&&(n.baseState=!1,Wn=!0),n.memoizedState=a):(gi(a,i)||(a=gr(),Jt.lanes|=a,rs|=a,n.baseState=!0),i)}function j_(n,i){var a=mt;mt=a!==0&&4>a?a:4,n(!0);var c=ju.transition;ju.transition={};try{n(!1),i()}finally{mt=a,ju.transition=c}}function vm(){return ci().memoizedState}function X_(n,i,a){var c=Ir(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},ym(n))Sm(i,a);else if(a=Wp(n,i,a,c),a!==null){var h=On();Mi(a,n,c,h),Mm(a,i,c)}}function Y_(n,i,a){var c=Ir(n),h={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(ym(n))Sm(i,h);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var b=i.lastRenderedState,O=m(b,a);if(h.hasEagerState=!0,h.eagerState=O,gi(O,b)){var W=i.interleaved;W===null?(h.next=h,Ou(i)):(h.next=W.next,W.next=h),i.interleaved=h;return}}catch{}finally{}a=Wp(n,i,h,c),a!==null&&(h=On(),Mi(a,n,c,h),Mm(a,i,c))}}function ym(n){var i=n.alternate;return n===Jt||i!==null&&i===Jt}function Sm(n,i){ta=_l=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Mm(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,fn(n,a)}}var Sl={readContext:li,useCallback:An,useContext:An,useEffect:An,useImperativeHandle:An,useInsertionEffect:An,useLayoutEffect:An,useMemo:An,useReducer:An,useRef:An,useState:An,useDebugValue:An,useDeferredValue:An,useTransition:An,useMutableSource:An,useSyncExternalStore:An,useId:An,unstable_isNewReconciler:!1},q_={readContext:li,useCallback:function(n,i){return Ni().memoizedState=[n,i===void 0?null:i],n},useContext:li,useEffect:fm,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,vl(4194308,4,pm.bind(null,i,n),a)},useLayoutEffect:function(n,i){return vl(4194308,4,n,i)},useInsertionEffect:function(n,i){return vl(4,2,n,i)},useMemo:function(n,i){var a=Ni();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Ni();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=X_.bind(null,Jt,n),[c.memoizedState,n]},useRef:function(n){var i=Ni();return n={current:n},i.memoizedState=n},useState:cm,useDebugValue:Qu,useDeferredValue:function(n){return Ni().memoizedState=n},useTransition:function(){var n=cm(!1),i=n[0];return n=j_.bind(null,n[1]),Ni().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Jt,h=Ni();if($t){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),_n===null)throw Error(t(349));(is&30)!==0||rm(c,i,a)}h.memoizedState=a;var m={value:a,getSnapshot:i};return h.queue=m,fm(om.bind(null,c,m,n),[n]),c.flags|=2048,ra(9,sm.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=Ni(),i=_n.identifierPrefix;if($t){var a=$i,c=qi;a=(c&~(1<<32-ct(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=na++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=W_++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},$_={readContext:li,useCallback:xm,useContext:li,useEffect:Zu,useImperativeHandle:mm,useInsertionEffect:hm,useLayoutEffect:dm,useMemo:gm,useReducer:$u,useRef:um,useState:function(){return $u(ia)},useDebugValue:Qu,useDeferredValue:function(n){var i=ci();return _m(i,hn.memoizedState,n)},useTransition:function(){var n=$u(ia)[0],i=ci().memoizedState;return[n,i]},useMutableSource:nm,useSyncExternalStore:im,useId:vm,unstable_isNewReconciler:!1},K_={readContext:li,useCallback:xm,useContext:li,useEffect:Zu,useImperativeHandle:mm,useInsertionEffect:hm,useLayoutEffect:dm,useMemo:gm,useReducer:Ku,useRef:um,useState:function(){return Ku(ia)},useDebugValue:Qu,useDeferredValue:function(n){var i=ci();return hn===null?i.memoizedState=n:_m(i,hn.memoizedState,n)},useTransition:function(){var n=Ku(ia)[0],i=ci().memoizedState;return[n,i]},useMutableSource:nm,useSyncExternalStore:im,useId:vm,unstable_isNewReconciler:!1};function js(n,i){try{var a="",c=i;do a+=Je(c),c=c.return;while(c);var h=a}catch(m){h=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:h,digest:null}}function Ju(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function ef(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Z_=typeof WeakMap=="function"?WeakMap:Map;function Em(n,i,a){a=Zi(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Cl||(Cl=!0,xf=c),ef(n,i)},a}function wm(n,i,a){a=Zi(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var h=i.value;a.payload=function(){return c(h)},a.callback=function(){ef(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){ef(n,i),typeof c!="function"&&(Lr===null?Lr=new Set([this]):Lr.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})}),a}function bm(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Z_;var h=new Set;c.set(i,h)}else h=c.get(i),h===void 0&&(h=new Set,c.set(i,h));h.has(a)||(h.add(a),n=fv.bind(null,n,i,a),i.then(n,n))}function Tm(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Am(n,i,a,c,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Zi(-1,1),i.tag=2,Rr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var Q_=I.ReactCurrentOwner,Wn=!1;function Fn(n,i,a,c){i.child=n===null?em(i,null,a,c):Gs(i,n.child,a,c)}function Cm(n,i,a,c,h){a=a.render;var m=i.ref;return Hs(i,h),c=Yu(n,i,a,c,m,h),a=qu(),n!==null&&!Wn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Qi(n,i,h)):($t&&a&&Cu(i),i.flags|=1,Fn(n,i,c,h),i.child)}function Rm(n,i,a,c,h){if(n===null){var m=a.type;return typeof m=="function"&&!Ef(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,Pm(n,i,m,c,h)):(n=Nl(a.type,null,c,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&h)===0){var b=m.memoizedProps;if(a=a.compare,a=a!==null?a:Wo,a(b,c)&&n.ref===i.ref)return Qi(n,i,h)}return i.flags|=1,n=Ur(m,c),n.ref=i.ref,n.return=i,i.child=n}function Pm(n,i,a,c,h){if(n!==null){var m=n.memoizedProps;if(Wo(m,c)&&n.ref===i.ref)if(Wn=!1,i.pendingProps=c=m,(n.lanes&h)!==0)(n.flags&131072)!==0&&(Wn=!0);else return i.lanes=n.lanes,Qi(n,i,h)}return tf(n,i,a,c,h)}function Lm(n,i,a){var c=i.pendingProps,h=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Gt(Ys,ti),ti|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Gt(Ys,ti),ti|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,Gt(Ys,ti),ti|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,Gt(Ys,ti),ti|=c;return Fn(n,i,h,a),i.child}function Dm(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function tf(n,i,a,c,h){var m=Gn(a)?Qr:Tn.current;return m=Os(i,m),Hs(i,h),a=Yu(n,i,a,c,m,h),c=qu(),n!==null&&!Wn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Qi(n,i,h)):($t&&c&&Cu(i),i.flags|=1,Fn(n,i,a,h),i.child)}function Im(n,i,a,c,h){if(Gn(a)){var m=!0;sl(i)}else m=!1;if(Hs(i,h),i.stateNode===null)El(n,i),Kp(i,a,c),zu(i,a,c,h),c=!0;else if(n===null){var b=i.stateNode,O=i.memoizedProps;b.props=O;var W=b.context,oe=a.contextType;typeof oe=="object"&&oe!==null?oe=li(oe):(oe=Gn(a)?Qr:Tn.current,oe=Os(i,oe));var ge=a.getDerivedStateFromProps,Se=typeof ge=="function"||typeof b.getSnapshotBeforeUpdate=="function";Se||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(O!==c||W!==oe)&&Zp(i,b,c,oe),Cr=!1;var xe=i.memoizedState;b.state=xe,dl(i,c,b,h),W=i.memoizedState,O!==c||xe!==W||Hn.current||Cr?(typeof ge=="function"&&(Bu(i,a,ge,c),W=i.memoizedState),(O=Cr||$p(i,a,O,c,xe,W,oe))?(Se||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(i.flags|=4194308)):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=W),b.props=c,b.state=W,b.context=oe,c=O):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{b=i.stateNode,jp(n,i),O=i.memoizedProps,oe=i.type===i.elementType?O:vi(i.type,O),b.props=oe,Se=i.pendingProps,xe=b.context,W=a.contextType,typeof W=="object"&&W!==null?W=li(W):(W=Gn(a)?Qr:Tn.current,W=Os(i,W));var Ue=a.getDerivedStateFromProps;(ge=typeof Ue=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(O!==Se||xe!==W)&&Zp(i,b,c,W),Cr=!1,xe=i.memoizedState,b.state=xe,dl(i,c,b,h);var He=i.memoizedState;O!==Se||xe!==He||Hn.current||Cr?(typeof Ue=="function"&&(Bu(i,a,Ue,c),He=i.memoizedState),(oe=Cr||$p(i,a,oe,c,xe,He,W)||!1)?(ge||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(c,He,W),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(c,He,W)),typeof b.componentDidUpdate=="function"&&(i.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof b.componentDidUpdate!="function"||O===n.memoizedProps&&xe===n.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&xe===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=He),b.props=c,b.state=He,b.context=W,c=oe):(typeof b.componentDidUpdate!="function"||O===n.memoizedProps&&xe===n.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&xe===n.memoizedState||(i.flags|=1024),c=!1)}return nf(n,i,a,c,m,h)}function nf(n,i,a,c,h,m){Dm(n,i);var b=(i.flags&128)!==0;if(!c&&!b)return h&&Op(i,a,!1),Qi(n,i,m);c=i.stateNode,Q_.current=i;var O=b&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&b?(i.child=Gs(i,n.child,null,m),i.child=Gs(i,null,O,m)):Fn(n,i,O,m),i.memoizedState=c.state,h&&Op(i,a,!0),i.child}function Nm(n){var i=n.stateNode;i.pendingContext?Up(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Up(n,i.context,!1),Vu(n,i.containerInfo)}function Um(n,i,a,c,h){return zs(),Du(h),i.flags|=256,Fn(n,i,a,c),i.child}var rf={dehydrated:null,treeContext:null,retryLane:0};function sf(n){return{baseLanes:n,cachePool:null,transitions:null}}function Fm(n,i,a){var c=i.pendingProps,h=Qt.current,m=!1,b=(i.flags&128)!==0,O;if((O=b)||(O=n!==null&&n.memoizedState===null?!1:(h&2)!==0),O?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),Gt(Qt,h&1),n===null)return Lu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(b=c.children,n=c.fallback,m?(c=i.mode,m=i.child,b={mode:"hidden",children:b},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=b):m=Ul(b,c,0,null),n=ls(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=sf(a),i.memoizedState=rf,n):of(i,b));if(h=n.memoizedState,h!==null&&(O=h.dehydrated,O!==null))return J_(n,i,b,c,O,h,a);if(m){m=c.fallback,b=i.mode,h=n.child,O=h.sibling;var W={mode:"hidden",children:c.children};return(b&1)===0&&i.child!==h?(c=i.child,c.childLanes=0,c.pendingProps=W,i.deletions=null):(c=Ur(h,W),c.subtreeFlags=h.subtreeFlags&14680064),O!==null?m=Ur(O,m):(m=ls(m,b,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,b=n.child.memoizedState,b=b===null?sf(a):{baseLanes:b.baseLanes|a,cachePool:null,transitions:b.transitions},m.memoizedState=b,m.childLanes=n.childLanes&~a,i.memoizedState=rf,c}return m=n.child,n=m.sibling,c=Ur(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function of(n,i){return i=Ul({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Ml(n,i,a,c){return c!==null&&Du(c),Gs(i,n.child,null,a),n=of(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function J_(n,i,a,c,h,m,b){if(a)return i.flags&256?(i.flags&=-257,c=Ju(Error(t(422))),Ml(n,i,b,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,h=i.mode,c=Ul({mode:"visible",children:c.children},h,0,null),m=ls(m,h,b,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&Gs(i,n.child,null,b),i.child.memoizedState=sf(b),i.memoizedState=rf,m);if((i.mode&1)===0)return Ml(n,i,b,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var O=c.dgst;return c=O,m=Error(t(419)),c=Ju(m,c,void 0),Ml(n,i,b,c)}if(O=(b&n.childLanes)!==0,Wn||O){if(c=_n,c!==null){switch(b&-b){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|b))!==0?0:h,h!==0&&h!==m.retryLane&&(m.retryLane=h,Ki(n,h),Mi(c,n,h,-1))}return Mf(),c=Ju(Error(t(421))),Ml(n,i,b,c)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=hv.bind(null,n),h._reactRetry=i,null):(n=m.treeContext,ei=wr(h.nextSibling),Jn=i,$t=!0,_i=null,n!==null&&(oi[ai++]=qi,oi[ai++]=$i,oi[ai++]=Jr,qi=n.id,$i=n.overflow,Jr=i),i=of(i,c.children),i.flags|=4096,i)}function Om(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Fu(n.return,i,a)}function af(n,i,a,c,h){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:h}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=h)}function km(n,i,a){var c=i.pendingProps,h=c.revealOrder,m=c.tail;if(Fn(n,i,c.children,a),c=Qt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Om(n,a,i);else if(n.tag===19)Om(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Gt(Qt,c),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(a=i.child,h=null;a!==null;)n=a.alternate,n!==null&&xl(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),af(i,!1,h,a,m);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&xl(n)===null){i.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}af(i,!0,a,null,m);break;case"together":af(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function El(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Qi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),rs|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Ur(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Ur(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function ev(n,i,a){switch(i.tag){case 3:Nm(i),zs();break;case 5:tm(i);break;case 1:Gn(i.type)&&sl(i);break;case 4:Vu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,h=i.memoizedProps.value;Gt(ul,c._currentValue),c._currentValue=h;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Gt(Qt,Qt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Fm(n,i,a):(Gt(Qt,Qt.current&1),n=Qi(n,i,a),n!==null?n.sibling:null);Gt(Qt,Qt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return km(n,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Gt(Qt,Qt.current),c)break;return null;case 22:case 23:return i.lanes=0,Lm(n,i,a)}return Qi(n,i,a)}var Bm,lf,zm,Vm;Bm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},lf=function(){},zm=function(n,i,a,c){var h=n.memoizedProps;if(h!==c){n=i.stateNode,ns(Ii.current);var m=null;switch(a){case"input":h=Et(n,h),c=Et(n,c),m=[];break;case"select":h=D({},h,{value:void 0}),c=D({},c,{value:void 0}),m=[];break;case"textarea":h=ft(n,h),c=ft(n,c),m=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=nl)}it(a,c);var b;a=null;for(oe in h)if(!c.hasOwnProperty(oe)&&h.hasOwnProperty(oe)&&h[oe]!=null)if(oe==="style"){var O=h[oe];for(b in O)O.hasOwnProperty(b)&&(a||(a={}),a[b]="")}else oe!=="dangerouslySetInnerHTML"&&oe!=="children"&&oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&oe!=="autoFocus"&&(o.hasOwnProperty(oe)?m||(m=[]):(m=m||[]).push(oe,null));for(oe in c){var W=c[oe];if(O=h?.[oe],c.hasOwnProperty(oe)&&W!==O&&(W!=null||O!=null))if(oe==="style")if(O){for(b in O)!O.hasOwnProperty(b)||W&&W.hasOwnProperty(b)||(a||(a={}),a[b]="");for(b in W)W.hasOwnProperty(b)&&O[b]!==W[b]&&(a||(a={}),a[b]=W[b])}else a||(m||(m=[]),m.push(oe,a)),a=W;else oe==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,O=O?O.__html:void 0,W!=null&&O!==W&&(m=m||[]).push(oe,W)):oe==="children"?typeof W!="string"&&typeof W!="number"||(m=m||[]).push(oe,""+W):oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&(o.hasOwnProperty(oe)?(W!=null&&oe==="onScroll"&&jt("scroll",n),m||O===W||(m=[])):(m=m||[]).push(oe,W))}a&&(m=m||[]).push("style",a);var oe=m;(i.updateQueue=oe)&&(i.flags|=4)}},Vm=function(n,i,a,c){a!==c&&(i.flags|=4)};function sa(n,i){if(!$t)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Cn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function tv(n,i,a){var c=i.pendingProps;switch(Ru(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Cn(i),null;case 1:return Gn(i.type)&&rl(),Cn(i),null;case 3:return c=i.stateNode,Ws(),Xt(Hn),Xt(Tn),Wu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(cl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,_i!==null&&(vf(_i),_i=null))),lf(n,i),Cn(i),null;case 5:Hu(i);var h=ns(ea.current);if(a=i.type,n!==null&&i.stateNode!=null)zm(n,i,a,c,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Cn(i),null}if(n=ns(Ii.current),cl(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[Di]=i,c[$o]=m,n=(i.mode&1)!==0,a){case"dialog":jt("cancel",c),jt("close",c);break;case"iframe":case"object":case"embed":jt("load",c);break;case"video":case"audio":for(h=0;h<Xo.length;h++)jt(Xo[h],c);break;case"source":jt("error",c);break;case"img":case"image":case"link":jt("error",c),jt("load",c);break;case"details":jt("toggle",c);break;case"input":z(c,m),jt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},jt("invalid",c);break;case"textarea":U(c,m),jt("invalid",c)}it(a,m),h=null;for(var b in m)if(m.hasOwnProperty(b)){var O=m[b];b==="children"?typeof O=="string"?c.textContent!==O&&(m.suppressHydrationWarning!==!0&&tl(c.textContent,O,n),h=["children",O]):typeof O=="number"&&c.textContent!==""+O&&(m.suppressHydrationWarning!==!0&&tl(c.textContent,O,n),h=["children",""+O]):o.hasOwnProperty(b)&&O!=null&&b==="onScroll"&&jt("scroll",c)}switch(a){case"input":he(c),Ct(c,m,!0);break;case"textarea":he(c),ee(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=nl)}c=h,i.updateQueue=c,c!==null&&(i.flags|=4)}else{b=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=de(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=b.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=b.createElement(a,{is:c.is}):(n=b.createElement(a),a==="select"&&(b=n,c.multiple?b.multiple=!0:c.size&&(b.size=c.size))):n=b.createElementNS(n,a),n[Di]=i,n[$o]=c,Bm(n,i,!1,!1),i.stateNode=n;e:{switch(b=Ie(a,c),a){case"dialog":jt("cancel",n),jt("close",n),h=c;break;case"iframe":case"object":case"embed":jt("load",n),h=c;break;case"video":case"audio":for(h=0;h<Xo.length;h++)jt(Xo[h],n);h=c;break;case"source":jt("error",n),h=c;break;case"img":case"image":case"link":jt("error",n),jt("load",n),h=c;break;case"details":jt("toggle",n),h=c;break;case"input":z(n,c),h=Et(n,c),jt("invalid",n);break;case"option":h=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},h=D({},c,{value:void 0}),jt("invalid",n);break;case"textarea":U(n,c),h=ft(n,c),jt("invalid",n);break;default:h=c}it(a,h),O=h;for(m in O)if(O.hasOwnProperty(m)){var W=O[m];m==="style"?Ae(n,W):m==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,W!=null&&Ze(n,W)):m==="children"?typeof W=="string"?(a!=="textarea"||W!=="")&&Ce(n,W):typeof W=="number"&&Ce(n,""+W):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?W!=null&&m==="onScroll"&&jt("scroll",n):W!=null&&R(n,m,W,b))}switch(a){case"input":he(n),Ct(n,c,!1);break;case"textarea":he(n),ee(n);break;case"option":c.value!=null&&n.setAttribute("value",""+ye(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?qe(n,!!c.multiple,m,!1):c.defaultValue!=null&&qe(n,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=nl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Cn(i),null;case 6:if(n&&i.stateNode!=null)Vm(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=ns(ea.current),ns(Ii.current),cl(i)){if(c=i.stateNode,a=i.memoizedProps,c[Di]=i,(m=c.nodeValue!==a)&&(n=Jn,n!==null))switch(n.tag){case 3:tl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&tl(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Di]=i,i.stateNode=c}return Cn(i),null;case 13:if(Xt(Qt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if($t&&ei!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Gp(),zs(),i.flags|=98560,m=!1;else if(m=cl(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Di]=i}else zs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Cn(i),m=!1}else _i!==null&&(vf(_i),_i=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Qt.current&1)!==0?dn===0&&(dn=3):Mf())),i.updateQueue!==null&&(i.flags|=4),Cn(i),null);case 4:return Ws(),lf(n,i),n===null&&Yo(i.stateNode.containerInfo),Cn(i),null;case 10:return Uu(i.type._context),Cn(i),null;case 17:return Gn(i.type)&&rl(),Cn(i),null;case 19:if(Xt(Qt),m=i.memoizedState,m===null)return Cn(i),null;if(c=(i.flags&128)!==0,b=m.rendering,b===null)if(c)sa(m,!1);else{if(dn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(b=xl(n),b!==null){for(i.flags|=128,sa(m,!1),c=b.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,b=m.alternate,b===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=b.childLanes,m.lanes=b.lanes,m.child=b.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=b.memoizedProps,m.memoizedState=b.memoizedState,m.updateQueue=b.updateQueue,m.type=b.type,n=b.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Gt(Qt,Qt.current&1|2),i.child}n=n.sibling}m.tail!==null&&J()>qs&&(i.flags|=128,c=!0,sa(m,!1),i.lanes=4194304)}else{if(!c)if(n=xl(b),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),sa(m,!0),m.tail===null&&m.tailMode==="hidden"&&!b.alternate&&!$t)return Cn(i),null}else 2*J()-m.renderingStartTime>qs&&a!==1073741824&&(i.flags|=128,c=!0,sa(m,!1),i.lanes=4194304);m.isBackwards?(b.sibling=i.child,i.child=b):(a=m.last,a!==null?a.sibling=b:i.child=b,m.last=b)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=J(),i.sibling=null,a=Qt.current,Gt(Qt,c?a&1|2:a&1),i):(Cn(i),null);case 22:case 23:return Sf(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(ti&1073741824)!==0&&(Cn(i),i.subtreeFlags&6&&(i.flags|=8192)):Cn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function nv(n,i){switch(Ru(i),i.tag){case 1:return Gn(i.type)&&rl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ws(),Xt(Hn),Xt(Tn),Wu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Hu(i),null;case 13:if(Xt(Qt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));zs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Xt(Qt),null;case 4:return Ws(),null;case 10:return Uu(i.type._context),null;case 22:case 23:return Sf(),null;case 24:return null;default:return null}}var wl=!1,Rn=!1,iv=typeof WeakSet=="function"?WeakSet:Set,ze=null;function Xs(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){tn(n,i,c)}else a.current=null}function cf(n,i,a){try{a()}catch(c){tn(n,i,c)}}var Hm=!1;function rv(n,i){if(yu=Wa,n=vp(),hu(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var h=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var b=0,O=-1,W=-1,oe=0,ge=0,Se=n,xe=null;t:for(;;){for(var Ue;Se!==a||h!==0&&Se.nodeType!==3||(O=b+h),Se!==m||c!==0&&Se.nodeType!==3||(W=b+c),Se.nodeType===3&&(b+=Se.nodeValue.length),(Ue=Se.firstChild)!==null;)xe=Se,Se=Ue;for(;;){if(Se===n)break t;if(xe===a&&++oe===h&&(O=b),xe===m&&++ge===c&&(W=b),(Ue=Se.nextSibling)!==null)break;Se=xe,xe=Se.parentNode}Se=Ue}a=O===-1||W===-1?null:{start:O,end:W}}else a=null}a=a||{start:0,end:0}}else a=null;for(Su={focusedElem:n,selectionRange:a},Wa=!1,ze=i;ze!==null;)if(i=ze,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,ze=n;else for(;ze!==null;){i=ze;try{var He=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var je=He.memoizedProps,sn=He.memoizedState,Z=i.stateNode,X=Z.getSnapshotBeforeUpdate(i.elementType===i.type?je:vi(i.type,je),sn);Z.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var te=i.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ee){tn(i,i.return,Ee)}if(n=i.sibling,n!==null){n.return=i.return,ze=n;break}ze=i.return}return He=Hm,Hm=!1,He}function oa(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&n)===n){var m=h.destroy;h.destroy=void 0,m!==void 0&&cf(i,a,m)}h=h.next}while(h!==c)}}function bl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function uf(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Gm(n){var i=n.alternate;i!==null&&(n.alternate=null,Gm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Di],delete i[$o],delete i[bu],delete i[z_],delete i[V_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Wm(n){return n.tag===5||n.tag===3||n.tag===4}function jm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Wm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ff(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=nl));else if(c!==4&&(n=n.child,n!==null))for(ff(n,i,a),n=n.sibling;n!==null;)ff(n,i,a),n=n.sibling}function hf(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(hf(n,i,a),n=n.sibling;n!==null;)hf(n,i,a),n=n.sibling}var En=null,yi=!1;function Pr(n,i,a){for(a=a.child;a!==null;)Xm(n,i,a),a=a.sibling}function Xm(n,i,a){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(rt,a)}catch{}switch(a.tag){case 5:Rn||Xs(a,i);case 6:var c=En,h=yi;En=null,Pr(n,i,a),En=c,yi=h,En!==null&&(yi?(n=En,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):En.removeChild(a.stateNode));break;case 18:En!==null&&(yi?(n=En,a=a.stateNode,n.nodeType===8?wu(n.parentNode,a):n.nodeType===1&&wu(n,a),ko(n)):wu(En,a.stateNode));break;case 4:c=En,h=yi,En=a.stateNode.containerInfo,yi=!0,Pr(n,i,a),En=c,yi=h;break;case 0:case 11:case 14:case 15:if(!Rn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var m=h,b=m.destroy;m=m.tag,b!==void 0&&((m&2)!==0||(m&4)!==0)&&cf(a,i,b),h=h.next}while(h!==c)}Pr(n,i,a);break;case 1:if(!Rn&&(Xs(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(O){tn(a,i,O)}Pr(n,i,a);break;case 21:Pr(n,i,a);break;case 22:a.mode&1?(Rn=(c=Rn)||a.memoizedState!==null,Pr(n,i,a),Rn=c):Pr(n,i,a);break;default:Pr(n,i,a)}}function Ym(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new iv),i.forEach(function(c){var h=dv.bind(null,n,c);a.has(c)||(a.add(c),c.then(h,h))})}}function Si(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var h=a[c];try{var m=n,b=i,O=b;e:for(;O!==null;){switch(O.tag){case 5:En=O.stateNode,yi=!1;break e;case 3:En=O.stateNode.containerInfo,yi=!0;break e;case 4:En=O.stateNode.containerInfo,yi=!0;break e}O=O.return}if(En===null)throw Error(t(160));Xm(m,b,h),En=null,yi=!1;var W=h.alternate;W!==null&&(W.return=null),h.return=null}catch(oe){tn(h,i,oe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)qm(i,n),i=i.sibling}function qm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Si(i,n),Ui(n),c&4){try{oa(3,n,n.return),bl(3,n)}catch(je){tn(n,n.return,je)}try{oa(5,n,n.return)}catch(je){tn(n,n.return,je)}}break;case 1:Si(i,n),Ui(n),c&512&&a!==null&&Xs(a,a.return);break;case 5:if(Si(i,n),Ui(n),c&512&&a!==null&&Xs(a,a.return),n.flags&32){var h=n.stateNode;try{Ce(h,"")}catch(je){tn(n,n.return,je)}}if(c&4&&(h=n.stateNode,h!=null)){var m=n.memoizedProps,b=a!==null?a.memoizedProps:m,O=n.type,W=n.updateQueue;if(n.updateQueue=null,W!==null)try{O==="input"&&m.type==="radio"&&m.name!=null&&_t(h,m),Ie(O,b);var oe=Ie(O,m);for(b=0;b<W.length;b+=2){var ge=W[b],Se=W[b+1];ge==="style"?Ae(h,Se):ge==="dangerouslySetInnerHTML"?Ze(h,Se):ge==="children"?Ce(h,Se):R(h,ge,Se,oe)}switch(O){case"input":gt(h,m);break;case"textarea":T(h,m);break;case"select":var xe=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!m.multiple;var Ue=m.value;Ue!=null?qe(h,!!m.multiple,Ue,!1):xe!==!!m.multiple&&(m.defaultValue!=null?qe(h,!!m.multiple,m.defaultValue,!0):qe(h,!!m.multiple,m.multiple?[]:"",!1))}h[$o]=m}catch(je){tn(n,n.return,je)}}break;case 6:if(Si(i,n),Ui(n),c&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,m=n.memoizedProps;try{h.nodeValue=m}catch(je){tn(n,n.return,je)}}break;case 3:if(Si(i,n),Ui(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ko(i.containerInfo)}catch(je){tn(n,n.return,je)}break;case 4:Si(i,n),Ui(n);break;case 13:Si(i,n),Ui(n),h=n.child,h.flags&8192&&(m=h.memoizedState!==null,h.stateNode.isHidden=m,!m||h.alternate!==null&&h.alternate.memoizedState!==null||(mf=J())),c&4&&Ym(n);break;case 22:if(ge=a!==null&&a.memoizedState!==null,n.mode&1?(Rn=(oe=Rn)||ge,Si(i,n),Rn=oe):Si(i,n),Ui(n),c&8192){if(oe=n.memoizedState!==null,(n.stateNode.isHidden=oe)&&!ge&&(n.mode&1)!==0)for(ze=n,ge=n.child;ge!==null;){for(Se=ze=ge;ze!==null;){switch(xe=ze,Ue=xe.child,xe.tag){case 0:case 11:case 14:case 15:oa(4,xe,xe.return);break;case 1:Xs(xe,xe.return);var He=xe.stateNode;if(typeof He.componentWillUnmount=="function"){c=xe,a=xe.return;try{i=c,He.props=i.memoizedProps,He.state=i.memoizedState,He.componentWillUnmount()}catch(je){tn(c,a,je)}}break;case 5:Xs(xe,xe.return);break;case 22:if(xe.memoizedState!==null){Zm(Se);continue}}Ue!==null?(Ue.return=xe,ze=Ue):Zm(Se)}ge=ge.sibling}e:for(ge=null,Se=n;;){if(Se.tag===5){if(ge===null){ge=Se;try{h=Se.stateNode,oe?(m=h.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(O=Se.stateNode,W=Se.memoizedProps.style,b=W!=null&&W.hasOwnProperty("display")?W.display:null,O.style.display=_e("display",b))}catch(je){tn(n,n.return,je)}}}else if(Se.tag===6){if(ge===null)try{Se.stateNode.nodeValue=oe?"":Se.memoizedProps}catch(je){tn(n,n.return,je)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===n)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===n)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===n)break e;ge===Se&&(ge=null),Se=Se.return}ge===Se&&(ge=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:Si(i,n),Ui(n),c&4&&Ym(n);break;case 21:break;default:Si(i,n),Ui(n)}}function Ui(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Wm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(Ce(h,""),c.flags&=-33);var m=jm(n);hf(n,m,h);break;case 3:case 4:var b=c.stateNode.containerInfo,O=jm(n);ff(n,O,b);break;default:throw Error(t(161))}}catch(W){tn(n,n.return,W)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function sv(n,i,a){ze=n,$m(n)}function $m(n,i,a){for(var c=(n.mode&1)!==0;ze!==null;){var h=ze,m=h.child;if(h.tag===22&&c){var b=h.memoizedState!==null||wl;if(!b){var O=h.alternate,W=O!==null&&O.memoizedState!==null||Rn;O=wl;var oe=Rn;if(wl=b,(Rn=W)&&!oe)for(ze=h;ze!==null;)b=ze,W=b.child,b.tag===22&&b.memoizedState!==null?Qm(h):W!==null?(W.return=b,ze=W):Qm(h);for(;m!==null;)ze=m,$m(m),m=m.sibling;ze=h,wl=O,Rn=oe}Km(n)}else(h.subtreeFlags&8772)!==0&&m!==null?(m.return=h,ze=m):Km(n)}}function Km(n){for(;ze!==null;){var i=ze;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Rn||bl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Rn)if(a===null)c.componentDidMount();else{var h=i.elementType===i.type?a.memoizedProps:vi(i.type,a.memoizedProps);c.componentDidUpdate(h,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Yp(i,m,c);break;case 3:var b=i.updateQueue;if(b!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Yp(i,b,a)}break;case 5:var O=i.stateNode;if(a===null&&i.flags&4){a=O;var W=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":W.autoFocus&&a.focus();break;case"img":W.src&&(a.src=W.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var oe=i.alternate;if(oe!==null){var ge=oe.memoizedState;if(ge!==null){var Se=ge.dehydrated;Se!==null&&ko(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Rn||i.flags&512&&uf(i)}catch(xe){tn(i,i.return,xe)}}if(i===n){ze=null;break}if(a=i.sibling,a!==null){a.return=i.return,ze=a;break}ze=i.return}}function Zm(n){for(;ze!==null;){var i=ze;if(i===n){ze=null;break}var a=i.sibling;if(a!==null){a.return=i.return,ze=a;break}ze=i.return}}function Qm(n){for(;ze!==null;){var i=ze;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{bl(4,i)}catch(W){tn(i,a,W)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var h=i.return;try{c.componentDidMount()}catch(W){tn(i,h,W)}}var m=i.return;try{uf(i)}catch(W){tn(i,m,W)}break;case 5:var b=i.return;try{uf(i)}catch(W){tn(i,b,W)}}}catch(W){tn(i,i.return,W)}if(i===n){ze=null;break}var O=i.sibling;if(O!==null){O.return=i.return,ze=O;break}ze=i.return}}var ov=Math.ceil,Tl=I.ReactCurrentDispatcher,df=I.ReactCurrentOwner,ui=I.ReactCurrentBatchConfig,Rt=0,_n=null,an=null,wn=0,ti=0,Ys=br(0),dn=0,aa=null,rs=0,Al=0,pf=0,la=null,jn=null,mf=0,qs=1/0,Ji=null,Cl=!1,xf=null,Lr=null,Rl=!1,Dr=null,Pl=0,ca=0,gf=null,Ll=-1,Dl=0;function On(){return(Rt&6)!==0?J():Ll!==-1?Ll:Ll=J()}function Ir(n){return(n.mode&1)===0?1:(Rt&2)!==0&&wn!==0?wn&-wn:G_.transition!==null?(Dl===0&&(Dl=gr()),Dl):(n=mt,n!==0||(n=window.event,n=n===void 0?16:Jd(n.type)),n)}function Mi(n,i,a,c){if(50<ca)throw ca=0,gf=null,Error(t(185));on(n,a,c),((Rt&2)===0||n!==_n)&&(n===_n&&((Rt&2)===0&&(Al|=a),dn===4&&Nr(n,wn)),Xn(n,c),a===1&&Rt===0&&(i.mode&1)===0&&(qs=J()+500,ol&&Ar()))}function Xn(n,i){var a=n.callbackNode;xr(n,i);var c=wt(n,n===_n?wn:0);if(c===0)a!==null&&Va(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Va(a),i===1)n.tag===0?H_(e0.bind(null,n)):kp(e0.bind(null,n)),k_(function(){(Rt&6)===0&&Ar()}),a=null;else{switch(As(c)){case 1:a=$;break;case 4:a=Te;break;case 16:a=Le;break;case 536870912:a=Oe;break;default:a=Le}a=l0(a,Jm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Jm(n,i){if(Ll=-1,Dl=0,(Rt&6)!==0)throw Error(t(327));var a=n.callbackNode;if($s()&&n.callbackNode!==a)return null;var c=wt(n,n===_n?wn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=Il(n,c);else{i=c;var h=Rt;Rt|=2;var m=n0();(_n!==n||wn!==i)&&(Ji=null,qs=J()+500,os(n,i));do try{cv();break}catch(O){t0(n,O)}while(!0);Nu(),Tl.current=m,Rt=h,an!==null?i=0:(_n=null,wn=0,i=dn)}if(i!==0){if(i===2&&(h=Mn(n),h!==0&&(c=h,i=_f(n,h))),i===1)throw a=aa,os(n,0),Nr(n,c),Xn(n,J()),a;if(i===6)Nr(n,c);else{if(h=n.current.alternate,(c&30)===0&&!av(h)&&(i=Il(n,c),i===2&&(m=Mn(n),m!==0&&(c=m,i=_f(n,m))),i===1))throw a=aa,os(n,0),Nr(n,c),Xn(n,J()),a;switch(n.finishedWork=h,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:as(n,jn,Ji);break;case 3:if(Nr(n,c),(c&130023424)===c&&(i=mf+500-J(),10<i)){if(wt(n,0)!==0)break;if(h=n.suspendedLanes,(h&c)!==c){On(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=Eu(as.bind(null,n,jn,Ji),i);break}as(n,jn,Ji);break;case 4:if(Nr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,h=-1;0<c;){var b=31-ct(c);m=1<<b,b=i[b],b>h&&(h=b),c&=~m}if(c=h,c=J()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*ov(c/1960))-c,10<c){n.timeoutHandle=Eu(as.bind(null,n,jn,Ji),c);break}as(n,jn,Ji);break;case 5:as(n,jn,Ji);break;default:throw Error(t(329))}}}return Xn(n,J()),n.callbackNode===a?Jm.bind(null,n):null}function _f(n,i){var a=la;return n.current.memoizedState.isDehydrated&&(os(n,i).flags|=256),n=Il(n,i),n!==2&&(i=jn,jn=a,i!==null&&vf(i)),n}function vf(n){jn===null?jn=n:jn.push.apply(jn,n)}function av(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var h=a[c],m=h.getSnapshot;h=h.value;try{if(!gi(m(),h))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Nr(n,i){for(i&=~pf,i&=~Al,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-ct(i),c=1<<a;n[a]=-1,i&=~c}}function e0(n){if((Rt&6)!==0)throw Error(t(327));$s();var i=wt(n,0);if((i&1)===0)return Xn(n,J()),null;var a=Il(n,i);if(n.tag!==0&&a===2){var c=Mn(n);c!==0&&(i=c,a=_f(n,c))}if(a===1)throw a=aa,os(n,0),Nr(n,i),Xn(n,J()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,as(n,jn,Ji),Xn(n,J()),null}function yf(n,i){var a=Rt;Rt|=1;try{return n(i)}finally{Rt=a,Rt===0&&(qs=J()+500,ol&&Ar())}}function ss(n){Dr!==null&&Dr.tag===0&&(Rt&6)===0&&$s();var i=Rt;Rt|=1;var a=ui.transition,c=mt;try{if(ui.transition=null,mt=1,n)return n()}finally{mt=c,ui.transition=a,Rt=i,(Rt&6)===0&&Ar()}}function Sf(){ti=Ys.current,Xt(Ys)}function os(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,O_(a)),an!==null)for(a=an.return;a!==null;){var c=a;switch(Ru(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&rl();break;case 3:Ws(),Xt(Hn),Xt(Tn),Wu();break;case 5:Hu(c);break;case 4:Ws();break;case 13:Xt(Qt);break;case 19:Xt(Qt);break;case 10:Uu(c.type._context);break;case 22:case 23:Sf()}a=a.return}if(_n=n,an=n=Ur(n.current,null),wn=ti=i,dn=0,aa=null,pf=Al=rs=0,jn=la=null,ts!==null){for(i=0;i<ts.length;i++)if(a=ts[i],c=a.interleaved,c!==null){a.interleaved=null;var h=c.next,m=a.pending;if(m!==null){var b=m.next;m.next=h,c.next=b}a.pending=c}ts=null}return n}function t0(n,i){do{var a=an;try{if(Nu(),gl.current=Sl,_l){for(var c=Jt.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}_l=!1}if(is=0,gn=hn=Jt=null,ta=!1,na=0,df.current=null,a===null||a.return===null){dn=1,aa=i,an=null;break}e:{var m=n,b=a.return,O=a,W=i;if(i=wn,O.flags|=32768,W!==null&&typeof W=="object"&&typeof W.then=="function"){var oe=W,ge=O,Se=ge.tag;if((ge.mode&1)===0&&(Se===0||Se===11||Se===15)){var xe=ge.alternate;xe?(ge.updateQueue=xe.updateQueue,ge.memoizedState=xe.memoizedState,ge.lanes=xe.lanes):(ge.updateQueue=null,ge.memoizedState=null)}var Ue=Tm(b);if(Ue!==null){Ue.flags&=-257,Am(Ue,b,O,m,i),Ue.mode&1&&bm(m,oe,i),i=Ue,W=oe;var He=i.updateQueue;if(He===null){var je=new Set;je.add(W),i.updateQueue=je}else He.add(W);break e}else{if((i&1)===0){bm(m,oe,i),Mf();break e}W=Error(t(426))}}else if($t&&O.mode&1){var sn=Tm(b);if(sn!==null){(sn.flags&65536)===0&&(sn.flags|=256),Am(sn,b,O,m,i),Du(js(W,O));break e}}m=W=js(W,O),dn!==4&&(dn=2),la===null?la=[m]:la.push(m),m=b;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var Z=Em(m,W,i);Xp(m,Z);break e;case 1:O=W;var X=m.type,te=m.stateNode;if((m.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(Lr===null||!Lr.has(te)))){m.flags|=65536,i&=-i,m.lanes|=i;var Ee=wm(m,O,i);Xp(m,Ee);break e}}m=m.return}while(m!==null)}r0(a)}catch(Ye){i=Ye,an===a&&a!==null&&(an=a=a.return);continue}break}while(!0)}function n0(){var n=Tl.current;return Tl.current=Sl,n===null?Sl:n}function Mf(){(dn===0||dn===3||dn===2)&&(dn=4),_n===null||(rs&268435455)===0&&(Al&268435455)===0||Nr(_n,wn)}function Il(n,i){var a=Rt;Rt|=2;var c=n0();(_n!==n||wn!==i)&&(Ji=null,os(n,i));do try{lv();break}catch(h){t0(n,h)}while(!0);if(Nu(),Rt=a,Tl.current=c,an!==null)throw Error(t(261));return _n=null,wn=0,dn}function lv(){for(;an!==null;)i0(an)}function cv(){for(;an!==null&&!C();)i0(an)}function i0(n){var i=a0(n.alternate,n,ti);n.memoizedProps=n.pendingProps,i===null?r0(n):an=i,df.current=null}function r0(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=tv(a,i,ti),a!==null){an=a;return}}else{if(a=nv(a,i),a!==null){a.flags&=32767,an=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{dn=6,an=null;return}}if(i=i.sibling,i!==null){an=i;return}an=i=n}while(i!==null);dn===0&&(dn=5)}function as(n,i,a){var c=mt,h=ui.transition;try{ui.transition=null,mt=1,uv(n,i,a,c)}finally{ui.transition=h,mt=c}return null}function uv(n,i,a,c){do $s();while(Dr!==null);if((Rt&6)!==0)throw Error(t(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(Vn(n,m),n===_n&&(an=_n=null,wn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Rl||(Rl=!0,l0(Le,function(){return $s(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=ui.transition,ui.transition=null;var b=mt;mt=1;var O=Rt;Rt|=4,df.current=null,rv(n,a),qm(a,n),P_(Su),Wa=!!yu,Su=yu=null,n.current=a,sv(a),q(),Rt=O,mt=b,ui.transition=m}else n.current=a;if(Rl&&(Rl=!1,Dr=n,Pl=h),m=n.pendingLanes,m===0&&(Lr=null),nt(a.stateNode),Xn(n,J()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)h=i[a],c(h.value,{componentStack:h.stack,digest:h.digest});if(Cl)throw Cl=!1,n=xf,xf=null,n;return(Pl&1)!==0&&n.tag!==0&&$s(),m=n.pendingLanes,(m&1)!==0?n===gf?ca++:(ca=0,gf=n):ca=0,Ar(),null}function $s(){if(Dr!==null){var n=As(Pl),i=ui.transition,a=mt;try{if(ui.transition=null,mt=16>n?16:n,Dr===null)var c=!1;else{if(n=Dr,Dr=null,Pl=0,(Rt&6)!==0)throw Error(t(331));var h=Rt;for(Rt|=4,ze=n.current;ze!==null;){var m=ze,b=m.child;if((ze.flags&16)!==0){var O=m.deletions;if(O!==null){for(var W=0;W<O.length;W++){var oe=O[W];for(ze=oe;ze!==null;){var ge=ze;switch(ge.tag){case 0:case 11:case 15:oa(8,ge,m)}var Se=ge.child;if(Se!==null)Se.return=ge,ze=Se;else for(;ze!==null;){ge=ze;var xe=ge.sibling,Ue=ge.return;if(Gm(ge),ge===oe){ze=null;break}if(xe!==null){xe.return=Ue,ze=xe;break}ze=Ue}}}var He=m.alternate;if(He!==null){var je=He.child;if(je!==null){He.child=null;do{var sn=je.sibling;je.sibling=null,je=sn}while(je!==null)}}ze=m}}if((m.subtreeFlags&2064)!==0&&b!==null)b.return=m,ze=b;else e:for(;ze!==null;){if(m=ze,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:oa(9,m,m.return)}var Z=m.sibling;if(Z!==null){Z.return=m.return,ze=Z;break e}ze=m.return}}var X=n.current;for(ze=X;ze!==null;){b=ze;var te=b.child;if((b.subtreeFlags&2064)!==0&&te!==null)te.return=b,ze=te;else e:for(b=X;ze!==null;){if(O=ze,(O.flags&2048)!==0)try{switch(O.tag){case 0:case 11:case 15:bl(9,O)}}catch(Ye){tn(O,O.return,Ye)}if(O===b){ze=null;break e}var Ee=O.sibling;if(Ee!==null){Ee.return=O.return,ze=Ee;break e}ze=O.return}}if(Rt=h,Ar(),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(rt,n)}catch{}c=!0}return c}finally{mt=a,ui.transition=i}}return!1}function s0(n,i,a){i=js(a,i),i=Em(n,i,1),n=Rr(n,i,1),i=On(),n!==null&&(on(n,1,i),Xn(n,i))}function tn(n,i,a){if(n.tag===3)s0(n,n,a);else for(;i!==null;){if(i.tag===3){s0(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Lr===null||!Lr.has(c))){n=js(a,n),n=wm(i,n,1),i=Rr(i,n,1),n=On(),i!==null&&(on(i,1,n),Xn(i,n));break}}i=i.return}}function fv(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=On(),n.pingedLanes|=n.suspendedLanes&a,_n===n&&(wn&a)===a&&(dn===4||dn===3&&(wn&130023424)===wn&&500>J()-mf?os(n,0):pf|=a),Xn(n,i)}function o0(n,i){i===0&&((n.mode&1)===0?i=1:(i=tt,tt<<=1,(tt&130023424)===0&&(tt=4194304)));var a=On();n=Ki(n,i),n!==null&&(on(n,i,a),Xn(n,a))}function hv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),o0(n,a)}function dv(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),o0(n,a)}var a0;a0=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Hn.current)Wn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Wn=!1,ev(n,i,a);Wn=(n.flags&131072)!==0}else Wn=!1,$t&&(i.flags&1048576)!==0&&Bp(i,ll,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;El(n,i),n=i.pendingProps;var h=Os(i,Tn.current);Hs(i,a),h=Yu(null,i,c,n,h,a);var m=qu();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Gn(c)?(m=!0,sl(i)):m=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,ku(i),h.updater=pl,i.stateNode=h,h._reactInternals=i,zu(i,c,n,a),i=nf(null,i,c,!0,m,a)):(i.tag=0,$t&&m&&Cu(i),Fn(null,i,h,a),i=i.child),i;case 16:c=i.elementType;e:{switch(El(n,i),n=i.pendingProps,h=c._init,c=h(c._payload),i.type=c,h=i.tag=mv(c),n=vi(c,n),h){case 0:i=tf(null,i,c,n,a);break e;case 1:i=Im(null,i,c,n,a);break e;case 11:i=Cm(null,i,c,n,a);break e;case 14:i=Rm(null,i,c,vi(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:vi(c,h),tf(n,i,c,h,a);case 1:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:vi(c,h),Im(n,i,c,h,a);case 3:e:{if(Nm(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,h=m.element,jp(n,i),dl(i,c,null,a);var b=i.memoizedState;if(c=b.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){h=js(Error(t(423)),i),i=Um(n,i,c,a,h);break e}else if(c!==h){h=js(Error(t(424)),i),i=Um(n,i,c,a,h);break e}else for(ei=wr(i.stateNode.containerInfo.firstChild),Jn=i,$t=!0,_i=null,a=em(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(zs(),c===h){i=Qi(n,i,a);break e}Fn(n,i,c,a)}i=i.child}return i;case 5:return tm(i),n===null&&Lu(i),c=i.type,h=i.pendingProps,m=n!==null?n.memoizedProps:null,b=h.children,Mu(c,h)?b=null:m!==null&&Mu(c,m)&&(i.flags|=32),Dm(n,i),Fn(n,i,b,a),i.child;case 6:return n===null&&Lu(i),null;case 13:return Fm(n,i,a);case 4:return Vu(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Gs(i,null,c,a):Fn(n,i,c,a),i.child;case 11:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:vi(c,h),Cm(n,i,c,h,a);case 7:return Fn(n,i,i.pendingProps,a),i.child;case 8:return Fn(n,i,i.pendingProps.children,a),i.child;case 12:return Fn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,h=i.pendingProps,m=i.memoizedProps,b=h.value,Gt(ul,c._currentValue),c._currentValue=b,m!==null)if(gi(m.value,b)){if(m.children===h.children&&!Hn.current){i=Qi(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var O=m.dependencies;if(O!==null){b=m.child;for(var W=O.firstContext;W!==null;){if(W.context===c){if(m.tag===1){W=Zi(-1,a&-a),W.tag=2;var oe=m.updateQueue;if(oe!==null){oe=oe.shared;var ge=oe.pending;ge===null?W.next=W:(W.next=ge.next,ge.next=W),oe.pending=W}}m.lanes|=a,W=m.alternate,W!==null&&(W.lanes|=a),Fu(m.return,a,i),O.lanes|=a;break}W=W.next}}else if(m.tag===10)b=m.type===i.type?null:m.child;else if(m.tag===18){if(b=m.return,b===null)throw Error(t(341));b.lanes|=a,O=b.alternate,O!==null&&(O.lanes|=a),Fu(b,a,i),b=m.sibling}else b=m.child;if(b!==null)b.return=m;else for(b=m;b!==null;){if(b===i){b=null;break}if(m=b.sibling,m!==null){m.return=b.return,b=m;break}b=b.return}m=b}Fn(n,i,h.children,a),i=i.child}return i;case 9:return h=i.type,c=i.pendingProps.children,Hs(i,a),h=li(h),c=c(h),i.flags|=1,Fn(n,i,c,a),i.child;case 14:return c=i.type,h=vi(c,i.pendingProps),h=vi(c.type,h),Rm(n,i,c,h,a);case 15:return Pm(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:vi(c,h),El(n,i),i.tag=1,Gn(c)?(n=!0,sl(i)):n=!1,Hs(i,a),Kp(i,c,h),zu(i,c,h,a),nf(null,i,c,!0,n,a);case 19:return km(n,i,a);case 22:return Lm(n,i,a)}throw Error(t(156,i.tag))};function l0(n,i){return za(n,i)}function pv(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fi(n,i,a,c){return new pv(n,i,a,c)}function Ef(n){return n=n.prototype,!(!n||!n.isReactComponent)}function mv(n){if(typeof n=="function")return Ef(n)?1:0;if(n!=null){if(n=n.$$typeof,n===V)return 11;if(n===ne)return 14}return 2}function Ur(n,i){var a=n.alternate;return a===null?(a=fi(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Nl(n,i,a,c,h,m){var b=2;if(c=n,typeof n=="function")Ef(n)&&(b=1);else if(typeof n=="string")b=5;else e:switch(n){case N:return ls(a.children,h,m,i);case B:b=8,h|=8;break;case A:return n=fi(12,a,i,h|2),n.elementType=A,n.lanes=m,n;case K:return n=fi(13,a,i,h),n.elementType=K,n.lanes=m,n;case ie:return n=fi(19,a,i,h),n.elementType=ie,n.lanes=m,n;case ae:return Ul(a,h,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case w:b=10;break e;case F:b=9;break e;case V:b=11;break e;case ne:b=14;break e;case ce:b=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=fi(b,a,i,h),i.elementType=n,i.type=c,i.lanes=m,i}function ls(n,i,a,c){return n=fi(7,n,c,i),n.lanes=a,n}function Ul(n,i,a,c){return n=fi(22,n,c,i),n.elementType=ae,n.lanes=a,n.stateNode={isHidden:!1},n}function wf(n,i,a){return n=fi(6,n,null,i),n.lanes=a,n}function bf(n,i,a){return i=fi(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function xv(n,i,a,c,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vt(0),this.expirationTimes=Vt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vt(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function Tf(n,i,a,c,h,m,b,O,W){return n=new xv(n,i,a,O,W),i===1?(i=1,m===!0&&(i|=8)):i=0,m=fi(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},ku(m),n}function gv(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function c0(n){if(!n)return Tr;n=n._reactInternals;e:{if(Pi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Gn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Gn(a))return Fp(n,a,i)}return i}function u0(n,i,a,c,h,m,b,O,W){return n=Tf(a,c,!0,n,h,m,b,O,W),n.context=c0(null),a=n.current,c=On(),h=Ir(a),m=Zi(c,h),m.callback=i??null,Rr(a,m,h),n.current.lanes=h,on(n,h,c),Xn(n,c),n}function Fl(n,i,a,c){var h=i.current,m=On(),b=Ir(h);return a=c0(a),i.context===null?i.context=a:i.pendingContext=a,i=Zi(m,b),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Rr(h,i,b),n!==null&&(Mi(n,h,b,m),hl(n,h,b)),b}function Ol(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function f0(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Af(n,i){f0(n,i),(n=n.alternate)&&f0(n,i)}function _v(){return null}var h0=typeof reportError=="function"?reportError:function(n){console.error(n)};function Cf(n){this._internalRoot=n}kl.prototype.render=Cf.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Fl(n,i,null,null)},kl.prototype.unmount=Cf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;ss(function(){Fl(null,n,null,null)}),i[Xi]=null}};function kl(n){this._internalRoot=n}kl.prototype.unstable_scheduleHydration=function(n){if(n){var i=qd();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Sr.length&&i!==0&&i<Sr[a].priority;a++);Sr.splice(a,0,n),a===0&&Zd(n)}};function Rf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Bl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function d0(){}function vv(n,i,a,c,h){if(h){if(typeof c=="function"){var m=c;c=function(){var oe=Ol(b);m.call(oe)}}var b=u0(i,c,n,0,null,!1,!1,"",d0);return n._reactRootContainer=b,n[Xi]=b.current,Yo(n.nodeType===8?n.parentNode:n),ss(),b}for(;h=n.lastChild;)n.removeChild(h);if(typeof c=="function"){var O=c;c=function(){var oe=Ol(W);O.call(oe)}}var W=Tf(n,0,!1,null,null,!1,!1,"",d0);return n._reactRootContainer=W,n[Xi]=W.current,Yo(n.nodeType===8?n.parentNode:n),ss(function(){Fl(i,W,a,c)}),W}function zl(n,i,a,c,h){var m=a._reactRootContainer;if(m){var b=m;if(typeof h=="function"){var O=h;h=function(){var W=Ol(b);O.call(W)}}Fl(i,b,n,h)}else b=vv(a,i,n,h,c);return Ol(b)}Li=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Ft(i.pendingLanes);a!==0&&(fn(i,a|1),Xn(i,J()),(Rt&6)===0&&(qs=J()+500,Ar()))}break;case 13:ss(function(){var c=Ki(n,1);if(c!==null){var h=On();Mi(c,n,1,h)}}),Af(n,1)}},Jc=function(n){if(n.tag===13){var i=Ki(n,134217728);if(i!==null){var a=On();Mi(i,n,134217728,a)}Af(n,134217728)}},Yd=function(n){if(n.tag===13){var i=Ir(n),a=Ki(n,i);if(a!==null){var c=On();Mi(a,n,i,c)}Af(n,i)}},qd=function(){return mt},$d=function(n,i){var a=mt;try{return mt=n,i()}finally{mt=a}},Pe=function(n,i,a){switch(i){case"input":if(gt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var h=il(c);if(!h)throw Error(t(90));We(c),gt(c,h)}}}break;case"textarea":T(n,a);break;case"select":i=a.value,i!=null&&qe(n,!!a.multiple,i,!1)}},ht=yf,Ot=ss;var yv={usingClientEntryPoint:!1,Events:[Ko,Us,il,pe,Ve,yf]},ua={findFiberByHostInstance:Zr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Sv={bundleType:ua.bundleType,version:ua.version,rendererPackageName:ua.rendererPackageName,rendererConfig:ua.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:I.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ka(n),n===null?null:n.stateNode},findFiberByHostInstance:ua.findFiberByHostInstance||_v,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vl.isDisabled&&Vl.supportsFiber)try{rt=Vl.inject(Sv),Qe=Vl}catch{}}return Yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yv,Yn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rf(i))throw Error(t(200));return gv(n,i,null,a)},Yn.createRoot=function(n,i){if(!Rf(n))throw Error(t(299));var a=!1,c="",h=h0;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=Tf(n,1,!1,null,null,a,!1,c,h),n[Xi]=i.current,Yo(n.nodeType===8?n.parentNode:n),new Cf(i)},Yn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ka(i),n=n===null?null:n.stateNode,n},Yn.flushSync=function(n){return ss(n)},Yn.hydrate=function(n,i,a){if(!Bl(i))throw Error(t(200));return zl(null,n,i,!0,a)},Yn.hydrateRoot=function(n,i,a){if(!Rf(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,h=!1,m="",b=h0;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(b=a.onRecoverableError)),i=u0(i,null,n,1,a??null,h,!1,m,b),n[Xi]=i.current,Yo(n),c)for(n=0;n<c.length;n++)a=c[n],h=a._getVersion,h=h(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,h]:i.mutableSourceEagerHydrationData.push(a,h);return new kl(i)},Yn.render=function(n,i,a){if(!Bl(i))throw Error(t(200));return zl(null,n,i,!1,a)},Yn.unmountComponentAtNode=function(n){if(!Bl(n))throw Error(t(40));return n._reactRootContainer?(ss(function(){zl(null,null,n,!1,function(){n._reactRootContainer=null,n[Xi]=null})}),!0):!1},Yn.unstable_batchedUpdates=yf,Yn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Bl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return zl(n,i,a,!1,c)},Yn.version="18.2.0-next-9e3b772b8-20220608",Yn}var S0;function Pv(){if(S0)return Df.exports;S0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Df.exports=Rv(),Df.exports}var M0;function Lv(){if(M0)return Hl;M0=1;var s=Pv();return Hl.createRoot=s.createRoot,Hl.hydrateRoot=s.hydrateRoot,Hl}var Dv=Lv();const Xx=en.createContext(null);function Iv({children:s}){const e=["var(--presence-blue)","var(--presence-orange)","var(--accent-100)","var(--accent-300)"],t={presenceColors:e,getPresenceColor:r=>e[r%e.length]};return Y.jsx(Xx.Provider,{value:t,children:s})}function Nv(){const s=en.useContext(Xx);if(!s)throw new Error("useTheme must be used within ThemeProvider");return s}const ji="http://localhost:3001/api/v1",zc="v3s_access_token",Vc="v3s_refresh_token",Sd="v3s_user";let dr=localStorage.getItem(zc)??"",vo=localStorage.getItem(Vc)??"",Ia=(()=>{const s=localStorage.getItem(Sd);if(!s)return null;try{return JSON.parse(s)}catch{return null}})();function Uv(s){if(!s||typeof s!="object")return"Request failed";const e=s.error;return typeof e=="string"?e:"Request failed"}async function Yx(s){if(!s.ok){const e=await s.json().catch(()=>null),t=Uv(e);throw new Error(`${t} (${s.status})`)}if(s.status!==204)return s.json()}function Md(s,e,t){dr=s,vo=e,Ia=t,localStorage.setItem(zc,s),localStorage.setItem(Vc,e),localStorage.setItem(Sd,JSON.stringify(t))}function Fv(s,e){dr=s,vo=e,localStorage.setItem(zc,s),localStorage.setItem(Vc,e)}function Eh(){dr="",vo="",Ia=null,localStorage.removeItem(zc),localStorage.removeItem(Vc),localStorage.removeItem(Sd)}async function Hc(s,e,t){const r=await fetch(s,{method:"POST",headers:{"content-type":"application/json",...t?{authorization:`Bearer ${t}`}:{}},body:JSON.stringify(e)});return Yx(r)}function Ov(){return dr}function Ed(){return!!dr&&!!vo&&!!Ia}function wd(){return Ia}function E0(){return Ia?.id??null}async function kv(s,e){const t=await Hc(`${ji}/auth/login`,{email:s,password:e});return Md(t.accessToken,t.refreshToken,t.user),t.user}async function qx(s){const e=await Hc(`${ji}/auth/guest`,{displayName:s?.trim()||void 0});return Md(e.accessToken,e.refreshToken,e.user),e.user}async function Bv(s,e){const t=await Hc(`${ji}/invites/${s}/accept`,{displayName:e?.trim()||void 0},dr||void 0);return Md(t.accessToken,t.refreshToken,t.user),{sceneId:t.sceneId,role:t.role,user:t.user}}async function zv(){if(!vo)throw new Error("Missing refresh token");const s=await Hc(`${ji}/auth/refresh`,{refreshToken:vo});Fv(s.accessToken,s.refreshToken)}async function Gc(s,e={}){if(!dr)throw new Error("Not authenticated");const t=async()=>fetch(s,{...e,headers:{...e.headers||{},authorization:`Bearer ${dr}`}});let r=await t();return r.status!==401||(await zv(),r=await t(),r.status===401&&Eh()),r}async function $x(){if(!dr){Eh();return}try{await Gc(`${ji}/auth/logout`,{method:"POST"})}finally{Eh()}}async function Vv(){if(!Ed())throw new Error("AUTH_REQUIRED")}async function Wc(s){return Yx(s)}function Hv({navigate:s}){const[e,t]=Tt.useState("demo@v3s.local"),[r,o]=Tt.useState("demo1234"),[l,u]=Tt.useState(""),[f,d]=Tt.useState(!1),[p,_]=Tt.useState(null),g=Tt.useCallback(async x=>{d(!0),_(null);try{await x(),s("/scenes",!0)}catch(y){const M=y instanceof Error?y.message:"Login failed";_(M)}finally{d(!1)}},[s]);return Y.jsx("div",{className:"auth-page",children:Y.jsxs("div",{className:"auth-card",children:[Y.jsx("h1",{children:"Collaborative Workspace"}),Y.jsx("p",{children:"Sign in to manage scenes and collaborate live."}),Y.jsxs("form",{className:"auth-form",onSubmit:x=>{x.preventDefault(),g(async()=>{await kv(e.trim(),r)})},children:[Y.jsxs("label",{children:["Email",Y.jsx("input",{type:"email",value:e,onChange:x=>t(x.target.value),required:!0})]}),Y.jsxs("label",{children:["Password",Y.jsx("input",{type:"password",value:r,onChange:x=>o(x.target.value),required:!0})]}),Y.jsx("button",{disabled:f,type:"submit",children:f?"Signing in...":"Sign In"})]}),Y.jsx("div",{className:"auth-divider",children:"or"}),Y.jsxs("form",{className:"auth-form",onSubmit:x=>{x.preventDefault(),g(async()=>{await qx(l.trim()||void 0)})},children:[Y.jsxs("label",{children:["Guest Name",Y.jsx("input",{type:"text",value:l,placeholder:"Guest",onChange:x=>u(x.target.value)})]}),Y.jsx("button",{disabled:f,type:"submit",children:f?"Joining...":"Continue as Guest"})]}),p&&Y.jsx("p",{className:"auth-error",children:p})]})})}async function Gv(){const s=await Gc(`${ji}/scenes`);return(await Wc(s)).scenes}async function Wv(s){const e=await Gc(`${ji}/scenes`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:s})});return{...await Wc(e),role:"owner"}}async function jv(s){const e=await fetch(`${ji}/invites/${s}/resolve`);return Wc(e)}async function Xv(s,e,t,r){const o=await Gc(`${ji}/scenes/${s}/invites`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({role:e,expiresInMinutes:t,maxUses:r})});return Wc(o)}function Yv({navigate:s}){const[e,t]=Tt.useState([]),[r,o]=Tt.useState(!0),[l,u]=Tt.useState(!1),[f,d]=Tt.useState("New Scene"),[p,_]=Tt.useState(null),g=wd(),x=Tt.useCallback(async()=>{o(!0),_(null);try{const E=await Gv();t(E)}catch(E){const S=E instanceof Error?E.message:"Failed to load scenes";_(S)}finally{o(!1)}},[]);Tt.useEffect(()=>{x()},[x]);const y=Tt.useCallback(async()=>{u(!0),_(null);try{const E=await Wv(f.trim()||"Untitled Scene");s(`/editor/${E.id}`)}catch(E){const S=E instanceof Error?E.message:"Failed to create scene";_(S)}finally{u(!1)}},[f,s]),M=Tt.useCallback(async()=>{await $x(),s("/login",!0)},[s]);return Y.jsxs("div",{className:"scenes-page",children:[Y.jsxs("header",{className:"scenes-header",children:[Y.jsxs("div",{children:[Y.jsx("h1",{children:"Your Scenes"}),Y.jsx("p",{children:g?`Signed in as ${g.displayName}`:"Signed in"})]}),Y.jsxs("div",{className:"scenes-header__actions",children:[Y.jsx("button",{type:"button",className:"ghost",onClick:()=>void x(),disabled:r,children:"Refresh"}),Y.jsx("button",{type:"button",className:"ghost",onClick:()=>void M(),children:"Logout"})]})]}),Y.jsxs("section",{className:"create-scene",children:[Y.jsx("input",{value:f,onChange:E=>d(E.target.value),placeholder:"Scene name",maxLength:120}),Y.jsx("button",{type:"button",onClick:()=>void y(),disabled:l,children:l?"Creating...":"Create Scene"})]}),p&&Y.jsx("p",{className:"auth-error",children:p}),Y.jsxs("section",{className:"scene-grid",children:[r&&Y.jsx("p",{children:"Loading scenes..."}),!r&&e.length===0&&Y.jsx("p",{children:"No scenes yet. Create your first one."}),!r&&e.map(E=>Y.jsxs("article",{className:"scene-card",children:[Y.jsx("h2",{children:E.name}),Y.jsxs("p",{children:["Role: ",E.role]}),Y.jsxs("p",{children:["Created: ",new Date(E.createdAt).toLocaleString()]}),Y.jsx("button",{type:"button",onClick:()=>s(`/editor/${E.id}`),children:"Open Scene"})]},E.id))]})]})}function qv({token:s,navigate:e}){const[t,r]=Tt.useState(null),[o,l]=Tt.useState(""),[u,f]=Tt.useState(!0),[d,p]=Tt.useState(!1),[_,g]=Tt.useState(null),x=wd();Tt.useEffect(()=>{let M=!1;return(async()=>{f(!0),g(null);try{const S=await jv(s);M||r(S)}catch(S){if(!M){const v=S instanceof Error?S.message:"Invalid invite";g(v)}}finally{M||f(!1)}})(),()=>{M=!0}},[s]);const y=Tt.useCallback(async()=>{p(!0),g(null);try{Ed()||await qx(o.trim()||void 0);const M=await Bv(s,o.trim()||void 0);e(`/editor/${M.sceneId}`,!0)}catch(M){const E=M instanceof Error?M.message:"Failed to join with invite";g(E)}finally{p(!1)}},[o,e,s]);return Y.jsx("div",{className:"auth-page",children:Y.jsxs("div",{className:"auth-card",children:[Y.jsx("h1",{children:"Invite"}),u&&Y.jsx("p",{children:"Loading invite details..."}),!u&&t&&Y.jsxs(Y.Fragment,{children:[Y.jsxs("p",{children:["You were invited to ",Y.jsx("strong",{children:t.scene.name})," as ",Y.jsx("strong",{children:t.role}),"."]}),Y.jsxs("p",{children:["Uses: ",t.uses,"/",t.maxUses," | Expires: ",new Date(t.expiresAt).toLocaleString()]}),!x&&Y.jsxs("label",{children:["Display Name",Y.jsx("input",{type:"text",value:o,placeholder:"Guest",onChange:M=>l(M.target.value)})]}),Y.jsx("button",{type:"button",onClick:()=>void y(),disabled:d,children:d?"Joining...":"Join Scene"})]}),_&&Y.jsx("p",{className:"auth-error",children:_}),Y.jsx("button",{type:"button",className:"ghost",onClick:()=>e("/login"),children:"Back to Login"})]})})}function $v({children:s,className:e="",subtle:t=!1}){return Y.jsx("div",{className:`v3s-panel ${t?"v3s-panel--subtle":""} ${e}`,children:s})}function Kv({presences:s}){return Y.jsx("div",{className:"v3s-cursor-overlay","aria-hidden":!0,children:s.map(e=>Y.jsxs("div",{className:"v3s-cursor",style:{left:`${e.x}%`,top:`${e.y}%`,borderColor:e.color||"var(--presence-blue)"},children:[Y.jsx("div",{className:"v3s-cursor__dot",style:{background:e.color||"var(--presence-blue)"}}),e.initials&&Y.jsx("div",{className:"v3s-cursor__label",children:e.initials})]},e.userId))})}const w0=s=>{let e;const t=new Set,r=(p,_)=>{const g=typeof p=="function"?p(e):p;if(!Object.is(g,e)){const x=e;e=_??(typeof g!="object"||g===null)?g:Object.assign({},e,g),t.forEach(y=>y(e,x))}},o=()=>e,f={setState:r,getState:o,getInitialState:()=>d,subscribe:p=>(t.add(p),()=>t.delete(p))},d=e=s(r,o,f);return f},Zv=(s=>s?w0(s):w0),Qv=s=>s;function Jv(s,e=Qv){const t=Tt.useSyncExternalStore(s.subscribe,Tt.useCallback(()=>e(s.getState()),[s,e]),Tt.useCallback(()=>e(s.getInitialState()),[s,e]));return Tt.useDebugValue(t),t}const b0=s=>{const e=Zv(s),t=r=>Jv(e,r);return Object.assign(t,e),t},ey=(s=>s?b0(s):b0),xt=ey(s=>({currentSceneId:null,objects:{},selectedId:null,gizmoMode:"translate",axisConstraint:"none",presence:{},lighting:{ambientIntensity:.8,directionalIntensity:.6},setSnapshot:e=>s({objects:e}),setCurrentSceneId:e=>s({currentSceneId:e}),upsertObject:e=>s(t=>({objects:{...t.objects,[e.id]:e}})),removeObject:e=>s(t=>{const{[e]:r,...o}=t.objects;return{objects:o}}),selectObject:e=>s({selectedId:e}),updateTransform:(e,t)=>s(r=>{const o=r.objects[e];return o?{objects:{...r.objects,[e]:{...o,transform:t}}}:r}),setGizmoMode:e=>s({gizmoMode:e}),setAxisConstraint:e=>s({axisConstraint:e}),setPresence:e=>s(t=>({presence:{...t.presence,[e.userId]:e}})),removePresence:e=>s(t=>{const{[e]:r,...o}=t.presence;return{presence:o}}),setLighting:e=>s(t=>({lighting:{...t.lighting,...e}}))})),ty={Select:Y.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Y.jsx("path",{d:"M5 5h14v14H5z",stroke:"currentColor",strokeWidth:"1.5",opacity:"0.4"}),Y.jsx("path",{d:"M7 7l5 2 2 5-5-2-2-5z",fill:"currentColor"})]}),Move:Y.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Y.jsx("path",{d:"M12 2l3 3h-2v6h-2V5H9l3-3z",fill:"currentColor"}),Y.jsx("path",{d:"M12 22l-3-3h2v-6h2v6h2l-3 3z",fill:"currentColor"}),Y.jsx("circle",{cx:"12",cy:"12",r:"2",fill:"currentColor",opacity:"0.5"})]}),Rotate:Y.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Y.jsx("path",{d:"M12 4a8 8 0 018 8h-3l4 4 4-4h-3A10 10 0 1012 22",stroke:"currentColor",strokeWidth:"1.5"})}),Scale:Y.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Y.jsx("rect",{x:"6",y:"6",width:"12",height:"12",stroke:"currentColor",strokeWidth:"1.5"}),Y.jsx("path",{d:"M6 12h12",stroke:"currentColor",strokeWidth:"1.5",opacity:"0.6"}),Y.jsx("path",{d:"M12 6v12",stroke:"currentColor",strokeWidth:"1.5",opacity:"0.6"})]})};function ny(){const s=xt(d=>d.upsertObject),e=xt(d=>d.selectObject),t=xt(d=>d.gizmoMode),r=xt(d=>d.setGizmoMode),o=[{key:"Select",label:"Select",onClick:()=>e(null)},{key:"Move",label:"Move",onClick:()=>r("translate")},{key:"Rotate",label:"Rotate",onClick:()=>r("rotate")},{key:"Scale",label:"Scale",onClick:()=>r("scale")}],l=()=>{const d=`obj_${Math.random().toString(36).slice(2,8)}`;s({id:d,type:"cube",transform:{position:[0,.5,0],rotation:[0,0,0],scale:[1,1,1]},props:{color:"#8b9ca7"}}),e(d)},u=()=>{const d=`obj_${Math.random().toString(36).slice(2,8)}`;s({id:d,type:"sphere",transform:{position:[0,.5,0],rotation:[0,0,0],scale:[1,1,1]},props:{color:"#9aa8a0"}}),e(d)},f=()=>{const d=`obj_${Math.random().toString(36).slice(2,8)}`;s({id:d,type:"pointLight",transform:{position:[0,2,0],rotation:[0,0,0],scale:[1,1,1]},props:{color:"#ffffff",intensity:1.5,distance:0,decay:2}}),e(d)};return Y.jsxs("nav",{className:"v3s-toolshelf",children:[o.map(d=>{const p=d.key==="Move"&&t==="translate"||d.key==="Rotate"&&t==="rotate"||d.key==="Scale"&&t==="scale";return Y.jsx("button",{className:`v3s-toolbtn ${p?"v3s-toolbtn--active":""}`,title:d.label,"aria-label":d.label,onClick:d.onClick,children:Y.jsx("span",{className:"v3s-toolbtn__icon","aria-hidden":!0,children:ty[d.key]})},d.key)}),Y.jsx("div",{className:"v3s-toolshelf__divider"}),Y.jsx("button",{className:"v3s-toolbtn",title:"Add Cube","aria-label":"Add Cube",onClick:l,children:Y.jsx("span",{className:"v3s-toolbtn__icon","aria-hidden":!0,children:Y.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Y.jsx("rect",{x:"6",y:"6",width:"12",height:"12",stroke:"currentColor",strokeWidth:"1.5"})})})}),Y.jsx("button",{className:"v3s-toolbtn",title:"Add Sphere","aria-label":"Add Sphere",onClick:u,children:Y.jsx("span",{className:"v3s-toolbtn__icon","aria-hidden":!0,children:Y.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Y.jsx("circle",{cx:"12",cy:"12",r:"6",stroke:"currentColor",strokeWidth:"1.5"})})})}),Y.jsx("button",{className:"v3s-toolbtn",title:"Add Light","aria-label":"Add Light",onClick:f,children:Y.jsx("span",{className:"v3s-toolbtn__icon","aria-hidden":!0,children:Y.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Y.jsx("circle",{cx:"12",cy:"9",r:"3",stroke:"currentColor",strokeWidth:"1.5"}),Y.jsx("path",{d:"M9 14h6",stroke:"currentColor",strokeWidth:"1.5"}),Y.jsx("path",{d:"M10 16h4v2a2 2 0 01-2 2 2 2 0 01-2-2v-2z",stroke:"currentColor",strokeWidth:"1.5"})]})})}),Y.jsx("div",{className:"v3s-toolshelf__divider"}),Y.jsx("button",{className:"v3s-toolbtn",title:"Duplicate (Shift+D)","aria-label":"Duplicate",onClick:()=>{const d=xt.getState().selectedId;if(!d)return;const p=xt.getState().objects[d];if(!p)return;const _=`obj_${Math.random().toString(36).slice(2,8)}`;s({id:_,type:p.type,transform:{position:[p.transform.position[0]+.5,p.transform.position[1],p.transform.position[2]+.5],rotation:[...p.transform.rotation],scale:[...p.transform.scale]},props:p.props}),e(_)},children:Y.jsx("span",{className:"v3s-toolbtn__icon","aria-hidden":!0,children:Y.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Y.jsx("rect",{x:"5",y:"7",width:"10",height:"10",stroke:"currentColor",strokeWidth:"1.5"}),Y.jsx("rect",{x:"9",y:"11",width:"10",height:"10",stroke:"currentColor",strokeWidth:"1.5",opacity:"0.6"})]})})}),Y.jsx("button",{className:"v3s-toolbtn",title:"Delete (Del)","aria-label":"Delete",onClick:()=>{const d=xt.getState().selectedId;d&&(xt.getState().removeObject(d),e(null))},children:Y.jsx("span",{className:"v3s-toolbtn__icon","aria-hidden":!0,children:Y.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Y.jsx("path",{d:"M9 3h6l1 2h4v2H4V5h4l1-2z",fill:"currentColor"}),Y.jsx("path",{d:"M6 9h12l-1 10H7L6 9z",stroke:"currentColor",strokeWidth:"1.5"})]})})})]})}function iy(){const[s,e]=en.useState({transform:!0,material:!1,lighting:!1}),t=x=>e(y=>({...y,[x]:!y[x]})),r=xt(x=>x.selectedId),o=xt(x=>r?x.objects[r]:void 0),l=xt(x=>x.updateTransform),u=xt(x=>x.upsertObject),f=o?.type==="pointLight",d=en.useMemo(()=>o?.transform??{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},[o]),p=(x,y,M)=>{if(!o)return;const E={...d,[x]:[...d[x]]};E[x][y]=M,l(o.id,E)},_=en.useMemo(()=>{const x=o?.props??{};return{baseColor:x.baseColor??x.color??"#ffffff",roughness:typeof x.roughness=="number"?x.roughness:.5,metalness:typeof x.metalness=="number"?x.metalness:0}},[o]),g=(x,y)=>{if(!o)return;const M=o.props??{},E=x==="baseColor"?{...M,baseColor:y,color:y}:{...M,[x]:y};u({...o,props:E})};return Y.jsx("aside",{className:"v3s-properties",children:Y.jsx($v,{className:"v3s-properties__section",children:Y.jsxs("div",{className:"v3s-properties__stack",children:[Y.jsxs("button",{className:"v3s-dropdown__header",onClick:()=>t("transform"),"aria-expanded":s.transform,children:[Y.jsx("span",{className:`v3s-dropdown__chev ${s.transform?"open":""}`,children:"▸"}),"Transform"]}),s.transform&&Y.jsx("div",{className:"v3s-dropdown__content",children:o?Y.jsxs("div",{className:"v3s-formgrid",children:[Y.jsx("label",{children:"Position"}),Y.jsxs("div",{className:"v3s-formrow",children:[Y.jsx("input",{type:"number",step:"0.01",value:d.position[0],onChange:x=>p("position",0,parseFloat(x.target.value))}),Y.jsx("input",{type:"number",step:"0.01",value:d.position[1],onChange:x=>p("position",1,parseFloat(x.target.value))}),Y.jsx("input",{type:"number",step:"0.01",value:d.position[2],onChange:x=>p("position",2,parseFloat(x.target.value))})]}),Y.jsx("label",{children:"Rotation (rad)"}),Y.jsxs("div",{className:"v3s-formrow",children:[Y.jsx("input",{type:"number",step:"0.01",value:d.rotation[0],onChange:x=>p("rotation",0,parseFloat(x.target.value))}),Y.jsx("input",{type:"number",step:"0.01",value:d.rotation[1],onChange:x=>p("rotation",1,parseFloat(x.target.value))}),Y.jsx("input",{type:"number",step:"0.01",value:d.rotation[2],onChange:x=>p("rotation",2,parseFloat(x.target.value))})]}),Y.jsx("label",{children:"Scale"}),Y.jsxs("div",{className:"v3s-formrow",children:[Y.jsx("input",{type:"number",step:"0.01",value:d.scale[0],onChange:x=>p("scale",0,parseFloat(x.target.value))}),Y.jsx("input",{type:"number",step:"0.01",value:d.scale[1],onChange:x=>p("scale",1,parseFloat(x.target.value))}),Y.jsx("input",{type:"number",step:"0.01",value:d.scale[2],onChange:x=>p("scale",2,parseFloat(x.target.value))})]})]}):Y.jsx("div",{style:{color:"var(--text-600)"},children:"Select an object to edit transforms."})}),!f&&Y.jsxs(Y.Fragment,{children:[Y.jsxs("button",{className:"v3s-dropdown__header",onClick:()=>t("material"),"aria-expanded":s.material,children:[Y.jsx("span",{className:`v3s-dropdown__chev ${s.material?"open":""}`,children:"▸"}),"Material"]}),s.material&&Y.jsx("div",{className:"v3s-dropdown__content",children:o?Y.jsxs("div",{className:"v3s-formgrid",children:[Y.jsx("label",{children:"Base Color"}),Y.jsx("div",{className:"v3s-formrow",children:Y.jsx("input",{type:"color",value:_.baseColor,onChange:x=>g("baseColor",x.target.value)})}),Y.jsx("label",{children:"Roughness"}),Y.jsx("div",{className:"v3s-formrow",children:Y.jsx("input",{type:"number",step:"0.01",min:"0",max:"1",value:_.roughness,onChange:x=>{const y=parseFloat(x.target.value);Number.isNaN(y)||g("roughness",y)}})}),Y.jsx("label",{children:"Metalness"}),Y.jsx("div",{className:"v3s-formrow",children:Y.jsx("input",{type:"number",step:"0.01",min:"0",max:"1",value:_.metalness,onChange:x=>{const y=parseFloat(x.target.value);Number.isNaN(y)||g("metalness",y)}})})]}):Y.jsx("div",{style:{color:"var(--text-600)"},children:"Select an object to edit material."})})]}),f&&Y.jsxs(Y.Fragment,{children:[Y.jsxs("button",{className:"v3s-dropdown__header",onClick:()=>t("lighting"),"aria-expanded":s.lighting,children:[Y.jsx("span",{className:`v3s-dropdown__chev ${s.lighting?"open":""}`,children:"▸"}),"Light"]}),s.lighting&&o&&Y.jsx("div",{className:"v3s-dropdown__content",children:Y.jsxs("div",{className:"v3s-formgrid",children:[Y.jsx("label",{children:"Color"}),Y.jsx("div",{className:"v3s-formrow",children:Y.jsx("input",{type:"color",value:o.props?.color??"#ffffff",onChange:x=>u({...o,props:{...o.props??{},color:x.target.value}})})}),Y.jsx("label",{children:"Intensity"}),Y.jsx("div",{className:"v3s-formrow",children:Y.jsx("input",{type:"number",step:"0.1",min:"0",max:"10",value:typeof o.props?.intensity=="number"?o.props.intensity:1.5,onChange:x=>{const y=parseFloat(x.target.value);Number.isNaN(y)||u({...o,props:{...o.props??{},intensity:y}})}})}),Y.jsx("label",{children:"Distance"}),Y.jsx("div",{className:"v3s-formrow",children:Y.jsx("input",{type:"number",step:"0.5",min:"0",value:typeof o.props?.distance=="number"?o.props.distance:0,onChange:x=>{const y=parseFloat(x.target.value);Number.isNaN(y)||u({...o,props:{...o.props??{},distance:y}})}})}),Y.jsx("label",{children:"Decay"}),Y.jsx("div",{className:"v3s-formrow",children:Y.jsx("input",{type:"number",step:"0.1",min:"0",value:typeof o.props?.decay=="number"?o.props.decay:2,onChange:x=>{const y=parseFloat(x.target.value);Number.isNaN(y)||u({...o,props:{...o.props??{},decay:y}})}})})]})})]})]})})})}function ry({sceneId:s,userName:e,sharing:t,onBack:r,onShare:o,onLogout:l}){return Y.jsxs("header",{className:"v3s-workspace-topbar",children:[Y.jsxs("div",{className:"v3s-workspace-topbar__left",children:[Y.jsx("button",{className:"v3s-btn v3s-btn--ghost",onClick:r,type:"button",children:"Scenes"}),Y.jsx("strong",{children:"v3s"}),Y.jsx("span",{className:"v3s-topbar__divider"}),Y.jsx("span",{className:"scene-chip",children:s})]}),Y.jsxs("div",{className:"v3s-workspace-topbar__right",children:[Y.jsx("span",{className:"user-chip",children:e}),Y.jsx("button",{className:"v3s-btn v3s-btn--accent",onClick:o,type:"button",disabled:t,children:t?"Sharing...":"Share Invite"}),Y.jsx("button",{className:"v3s-btn v3s-btn--ghost",onClick:l,type:"button",children:"Logout"})]})]})}const Hi=Object.create(null);Hi.open="0";Hi.close="1";Hi.ping="2";Hi.pong="3";Hi.message="4";Hi.upgrade="5";Hi.noop="6";const Mc=Object.create(null);Object.keys(Hi).forEach(s=>{Mc[Hi[s]]=s});const wh={type:"error",data:"parser error"},Kx=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Zx=typeof ArrayBuffer=="function",Qx=s=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(s):s&&s.buffer instanceof ArrayBuffer,bd=({type:s,data:e},t,r)=>Kx&&e instanceof Blob?t?r(e):T0(e,r):Zx&&(e instanceof ArrayBuffer||Qx(e))?t?r(e):T0(new Blob([e]),r):r(Hi[s]+(e||"")),T0=(s,e)=>{const t=new FileReader;return t.onload=function(){const r=t.result.split(",")[1];e("b"+(r||""))},t.readAsDataURL(s)};function A0(s){return s instanceof Uint8Array?s:s instanceof ArrayBuffer?new Uint8Array(s):new Uint8Array(s.buffer,s.byteOffset,s.byteLength)}let Uf;function sy(s,e){if(Kx&&s.data instanceof Blob)return s.data.arrayBuffer().then(A0).then(e);if(Zx&&(s.data instanceof ArrayBuffer||Qx(s.data)))return e(A0(s.data));bd(s,!1,t=>{Uf||(Uf=new TextEncoder),e(Uf.encode(t))})}const C0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ma=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let s=0;s<C0.length;s++)Ma[C0.charCodeAt(s)]=s;const oy=s=>{let e=s.length*.75,t=s.length,r,o=0,l,u,f,d;s[s.length-1]==="="&&(e--,s[s.length-2]==="="&&e--);const p=new ArrayBuffer(e),_=new Uint8Array(p);for(r=0;r<t;r+=4)l=Ma[s.charCodeAt(r)],u=Ma[s.charCodeAt(r+1)],f=Ma[s.charCodeAt(r+2)],d=Ma[s.charCodeAt(r+3)],_[o++]=l<<2|u>>4,_[o++]=(u&15)<<4|f>>2,_[o++]=(f&3)<<6|d&63;return p},ay=typeof ArrayBuffer=="function",Td=(s,e)=>{if(typeof s!="string")return{type:"message",data:Jx(s,e)};const t=s.charAt(0);return t==="b"?{type:"message",data:ly(s.substring(1),e)}:Mc[t]?s.length>1?{type:Mc[t],data:s.substring(1)}:{type:Mc[t]}:wh},ly=(s,e)=>{if(ay){const t=oy(s);return Jx(t,e)}else return{base64:!0,data:s}},Jx=(s,e)=>{switch(e){case"blob":return s instanceof Blob?s:new Blob([s]);case"arraybuffer":default:return s instanceof ArrayBuffer?s:s.buffer}},eg="",cy=(s,e)=>{const t=s.length,r=new Array(t);let o=0;s.forEach((l,u)=>{bd(l,!1,f=>{r[u]=f,++o===t&&e(r.join(eg))})})},uy=(s,e)=>{const t=s.split(eg),r=[];for(let o=0;o<t.length;o++){const l=Td(t[o],e);if(r.push(l),l.type==="error")break}return r};function fy(){return new TransformStream({transform(s,e){sy(s,t=>{const r=t.length;let o;if(r<126)o=new Uint8Array(1),new DataView(o.buffer).setUint8(0,r);else if(r<65536){o=new Uint8Array(3);const l=new DataView(o.buffer);l.setUint8(0,126),l.setUint16(1,r)}else{o=new Uint8Array(9);const l=new DataView(o.buffer);l.setUint8(0,127),l.setBigUint64(1,BigInt(r))}s.data&&typeof s.data!="string"&&(o[0]|=128),e.enqueue(o),e.enqueue(t)})}})}let Ff;function Gl(s){return s.reduce((e,t)=>e+t.length,0)}function Wl(s,e){if(s[0].length===e)return s.shift();const t=new Uint8Array(e);let r=0;for(let o=0;o<e;o++)t[o]=s[0][r++],r===s[0].length&&(s.shift(),r=0);return s.length&&r<s[0].length&&(s[0]=s[0].slice(r)),t}function hy(s,e){Ff||(Ff=new TextDecoder);const t=[];let r=0,o=-1,l=!1;return new TransformStream({transform(u,f){for(t.push(u);;){if(r===0){if(Gl(t)<1)break;const d=Wl(t,1);l=(d[0]&128)===128,o=d[0]&127,o<126?r=3:o===126?r=1:r=2}else if(r===1){if(Gl(t)<2)break;const d=Wl(t,2);o=new DataView(d.buffer,d.byteOffset,d.length).getUint16(0),r=3}else if(r===2){if(Gl(t)<8)break;const d=Wl(t,8),p=new DataView(d.buffer,d.byteOffset,d.length),_=p.getUint32(0);if(_>Math.pow(2,21)-1){f.enqueue(wh);break}o=_*Math.pow(2,32)+p.getUint32(4),r=3}else{if(Gl(t)<o)break;const d=Wl(t,o);f.enqueue(Td(l?d:Ff.decode(d),e)),r=0}if(o===0||o>s){f.enqueue(wh);break}}}})}const tg=4;function cn(s){if(s)return dy(s)}function dy(s){for(var e in cn.prototype)s[e]=cn.prototype[e];return s}cn.prototype.on=cn.prototype.addEventListener=function(s,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+s]=this._callbacks["$"+s]||[]).push(e),this};cn.prototype.once=function(s,e){function t(){this.off(s,t),e.apply(this,arguments)}return t.fn=e,this.on(s,t),this};cn.prototype.off=cn.prototype.removeListener=cn.prototype.removeAllListeners=cn.prototype.removeEventListener=function(s,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+s];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+s],this;for(var r,o=0;o<t.length;o++)if(r=t[o],r===e||r.fn===e){t.splice(o,1);break}return t.length===0&&delete this._callbacks["$"+s],this};cn.prototype.emit=function(s){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+s],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(t){t=t.slice(0);for(var r=0,o=t.length;r<o;++r)t[r].apply(this,e)}return this};cn.prototype.emitReserved=cn.prototype.emit;cn.prototype.listeners=function(s){return this._callbacks=this._callbacks||{},this._callbacks["$"+s]||[]};cn.prototype.hasListeners=function(s){return!!this.listeners(s).length};const jc=typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0),pi=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),py="arraybuffer";function ng(s,...e){return e.reduce((t,r)=>(s.hasOwnProperty(r)&&(t[r]=s[r]),t),{})}const my=pi.setTimeout,xy=pi.clearTimeout;function Xc(s,e){e.useNativeTimers?(s.setTimeoutFn=my.bind(pi),s.clearTimeoutFn=xy.bind(pi)):(s.setTimeoutFn=pi.setTimeout.bind(pi),s.clearTimeoutFn=pi.clearTimeout.bind(pi))}const gy=1.33;function _y(s){return typeof s=="string"?vy(s):Math.ceil((s.byteLength||s.size)*gy)}function vy(s){let e=0,t=0;for(let r=0,o=s.length;r<o;r++)e=s.charCodeAt(r),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(r++,t+=4);return t}function ig(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function yy(s){let e="";for(let t in s)s.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(s[t]));return e}function Sy(s){let e={},t=s.split("&");for(let r=0,o=t.length;r<o;r++){let l=t[r].split("=");e[decodeURIComponent(l[0])]=decodeURIComponent(l[1])}return e}class My extends Error{constructor(e,t,r){super(e),this.description=t,this.context=r,this.type="TransportError"}}class Ad extends cn{constructor(e){super(),this.writable=!1,Xc(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,t,r){return super.emitReserved("error",new My(e,t,r)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=Td(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,t={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const t=yy(e);return t.length?"?"+t:""}}class Ey extends Ad{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let r=0;this._polling&&(r++,this.once("pollComplete",function(){--r||t()})),this.writable||(r++,this.once("drain",function(){--r||t()}))}else t()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const t=r=>{if(this.readyState==="opening"&&r.type==="open"&&this.onOpen(),r.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(r)};uy(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,cy(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",t=this.query||{};return this.opts.timestampRequests!==!1&&(t[this.opts.timestampParam]=ig()),!this.supportsBinary&&!t.sid&&(t.b64=1),this.createUri(e,t)}}let rg=!1;try{rg=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const wy=rg;function by(){}class Ty extends Ey{constructor(e){if(super(e),typeof location<"u"){const t=location.protocol==="https:";let r=location.port;r||(r=t?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||r!==e.port}}doWrite(e,t){const r=this.request({method:"POST",data:e});r.on("success",t),r.on("error",(o,l)=>{this.onError("xhr post error",o,l)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(t,r)=>{this.onError("xhr poll error",t,r)}),this.pollXhr=e}}class zi extends cn{constructor(e,t,r){super(),this.createRequest=e,Xc(this,r),this._opts=r,this._method=r.method||"GET",this._uri=t,this._data=r.data!==void 0?r.data:null,this._create()}_create(){var e;const t=ng(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this._opts.xd;const r=this._xhr=this.createRequest(t);try{r.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){r.setDisableHeaderCheck&&r.setDisableHeaderCheck(!0);for(let o in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(o)&&r.setRequestHeader(o,this._opts.extraHeaders[o])}}catch{}if(this._method==="POST")try{r.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{r.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(r),"withCredentials"in r&&(r.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(r.timeout=this._opts.requestTimeout),r.onreadystatechange=()=>{var o;r.readyState===3&&((o=this._opts.cookieJar)===null||o===void 0||o.parseCookies(r.getResponseHeader("set-cookie"))),r.readyState===4&&(r.status===200||r.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof r.status=="number"?r.status:0)},0))},r.send(this._data)}catch(o){this.setTimeoutFn(()=>{this._onError(o)},0);return}typeof document<"u"&&(this._index=zi.requestsCount++,zi.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=by,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete zi.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}zi.requestsCount=0;zi.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",R0);else if(typeof addEventListener=="function"){const s="onpagehide"in pi?"pagehide":"unload";addEventListener(s,R0,!1)}}function R0(){for(let s in zi.requests)zi.requests.hasOwnProperty(s)&&zi.requests[s].abort()}const Ay=(function(){const s=sg({xdomain:!1});return s&&s.responseType!==null})();class Cy extends Ty{constructor(e){super(e);const t=e&&e.forceBase64;this.supportsBinary=Ay&&!t}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new zi(sg,this.uri(),e)}}function sg(s){const e=s.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||wy))return new XMLHttpRequest}catch{}if(!e)try{return new pi[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const og=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class Ry extends Ad{get name(){return"websocket"}doOpen(){const e=this.uri(),t=this.opts.protocols,r=og?{}:ng(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(r.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,t,r)}catch(o){return this.emitReserved("error",o)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const r=e[t],o=t===e.length-1;bd(r,this.supportsBinary,l=>{try{this.doWrite(r,l)}catch{}o&&jc(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=ig()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}}const Of=pi.WebSocket||pi.MozWebSocket;class Py extends Ry{createSocket(e,t,r){return og?new Of(e,t,r):t?new Of(e,t):new Of(e)}doWrite(e,t){this.ws.send(t)}}class Ly extends Ad{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const t=hy(Number.MAX_SAFE_INTEGER,this.socket.binaryType),r=e.readable.pipeThrough(t).getReader(),o=fy();o.readable.pipeTo(e.writable),this._writer=o.writable.getWriter();const l=()=>{r.read().then(({done:f,value:d})=>{f||(this.onPacket(d),l())}).catch(f=>{})};l();const u={type:"open"};this.query.sid&&(u.data=`{"sid":"${this.query.sid}"}`),this._writer.write(u).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const r=e[t],o=t===e.length-1;this._writer.write(r).then(()=>{o&&jc(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const Dy={websocket:Py,webtransport:Ly,polling:Cy},Iy=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Ny=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function bh(s){if(s.length>8e3)throw"URI too long";const e=s,t=s.indexOf("["),r=s.indexOf("]");t!=-1&&r!=-1&&(s=s.substring(0,t)+s.substring(t,r).replace(/:/g,";")+s.substring(r,s.length));let o=Iy.exec(s||""),l={},u=14;for(;u--;)l[Ny[u]]=o[u]||"";return t!=-1&&r!=-1&&(l.source=e,l.host=l.host.substring(1,l.host.length-1).replace(/;/g,":"),l.authority=l.authority.replace("[","").replace("]","").replace(/;/g,":"),l.ipv6uri=!0),l.pathNames=Uy(l,l.path),l.queryKey=Fy(l,l.query),l}function Uy(s,e){const t=/\/{2,9}/g,r=e.replace(t,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&r.splice(0,1),e.slice(-1)=="/"&&r.splice(r.length-1,1),r}function Fy(s,e){const t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(r,o,l){o&&(t[o]=l)}),t}const Th=typeof addEventListener=="function"&&typeof removeEventListener=="function",Ec=[];Th&&addEventListener("offline",()=>{Ec.forEach(s=>s())},!1);class Yr extends cn{constructor(e,t){if(super(),this.binaryType=py,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(t=e,e=null),e){const r=bh(e);t.hostname=r.host,t.secure=r.protocol==="https"||r.protocol==="wss",t.port=r.port,r.query&&(t.query=r.query)}else t.host&&(t.hostname=bh(t.host).host);Xc(this,t),this.secure=t.secure!=null?t.secure:typeof location<"u"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=t.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},t.transports.forEach(r=>{const o=r.prototype.name;this.transports.push(o),this._transportsByName[o]=r}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Sy(this.opts.query)),Th&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},Ec.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=tg,t.transport=e,this.id&&(t.sid=this.id);const r=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](r)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&Yr.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const t=this.createTransport(e);t.open(),this.setTransport(t)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",t=>this._onClose("transport close",t))}onOpen(){this.readyState="open",Yr.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const t=new Error("server error");t.code=e.data,this._onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let r=0;r<this.writeBuffer.length;r++){const o=this.writeBuffer[r].data;if(o&&(t+=_y(o)),r>0&&t>this._maxPayload)return this.writeBuffer.slice(0,r);t+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,jc(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,t,r){return this._sendPacket("message",e,t,r),this}send(e,t,r){return this._sendPacket("message",e,t,r),this}_sendPacket(e,t,r,o){if(typeof t=="function"&&(o=t,t=void 0),typeof r=="function"&&(o=r,r=null),this.readyState==="closing"||this.readyState==="closed")return;r=r||{},r.compress=r.compress!==!1;const l={type:e,data:t,options:r};this.emitReserved("packetCreate",l),this.writeBuffer.push(l),o&&this.once("flush",o),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},r=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?r():e()}):this.upgrading?r():e()),this}_onError(e){if(Yr.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Th&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const r=Ec.indexOf(this._offlineEventListener);r!==-1&&Ec.splice(r,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this._prevBufferLen=0}}}Yr.protocol=tg;class Oy extends Yr{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let t=this.createTransport(e),r=!1;Yr.priorWebsocketSuccess=!1;const o=()=>{r||(t.send([{type:"ping",data:"probe"}]),t.once("packet",g=>{if(!r)if(g.type==="pong"&&g.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;Yr.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{r||this.readyState!=="closed"&&(_(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const x=new Error("probe error");x.transport=t.name,this.emitReserved("upgradeError",x)}}))};function l(){r||(r=!0,_(),t.close(),t=null)}const u=g=>{const x=new Error("probe error: "+g);x.transport=t.name,l(),this.emitReserved("upgradeError",x)};function f(){u("transport closed")}function d(){u("socket closed")}function p(g){t&&g.name!==t.name&&l()}const _=()=>{t.removeListener("open",o),t.removeListener("error",u),t.removeListener("close",f),this.off("close",d),this.off("upgrading",p)};t.once("open",o),t.once("error",u),t.once("close",f),this.once("close",d),this.once("upgrading",p),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{r||t.open()},200):t.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const t=[];for(let r=0;r<e.length;r++)~this.transports.indexOf(e[r])&&t.push(e[r]);return t}}let ky=class extends Oy{constructor(e,t={}){const r=typeof e=="object"?e:t;(!r.transports||r.transports&&typeof r.transports[0]=="string")&&(r.transports=(r.transports||["polling","websocket","webtransport"]).map(o=>Dy[o]).filter(o=>!!o)),super(e,r)}};function By(s,e="",t){let r=s;t=t||typeof location<"u"&&location,s==null&&(s=t.protocol+"//"+t.host),typeof s=="string"&&(s.charAt(0)==="/"&&(s.charAt(1)==="/"?s=t.protocol+s:s=t.host+s),/^(https?|wss?):\/\//.test(s)||(typeof t<"u"?s=t.protocol+"//"+s:s="https://"+s),r=bh(s)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";const l=r.host.indexOf(":")!==-1?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+l+":"+r.port+e,r.href=r.protocol+"://"+l+(t&&t.port===r.port?"":":"+r.port),r}const zy=typeof ArrayBuffer=="function",Vy=s=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(s):s.buffer instanceof ArrayBuffer,ag=Object.prototype.toString,Hy=typeof Blob=="function"||typeof Blob<"u"&&ag.call(Blob)==="[object BlobConstructor]",Gy=typeof File=="function"||typeof File<"u"&&ag.call(File)==="[object FileConstructor]";function Cd(s){return zy&&(s instanceof ArrayBuffer||Vy(s))||Hy&&s instanceof Blob||Gy&&s instanceof File}function wc(s,e){if(!s||typeof s!="object")return!1;if(Array.isArray(s)){for(let t=0,r=s.length;t<r;t++)if(wc(s[t]))return!0;return!1}if(Cd(s))return!0;if(s.toJSON&&typeof s.toJSON=="function"&&arguments.length===1)return wc(s.toJSON(),!0);for(const t in s)if(Object.prototype.hasOwnProperty.call(s,t)&&wc(s[t]))return!0;return!1}function Wy(s){const e=[],t=s.data,r=s;return r.data=Ah(t,e),r.attachments=e.length,{packet:r,buffers:e}}function Ah(s,e){if(!s)return s;if(Cd(s)){const t={_placeholder:!0,num:e.length};return e.push(s),t}else if(Array.isArray(s)){const t=new Array(s.length);for(let r=0;r<s.length;r++)t[r]=Ah(s[r],e);return t}else if(typeof s=="object"&&!(s instanceof Date)){const t={};for(const r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=Ah(s[r],e));return t}return s}function jy(s,e){return s.data=Ch(s.data,e),delete s.attachments,s}function Ch(s,e){if(!s)return s;if(s&&s._placeholder===!0){if(typeof s.num=="number"&&s.num>=0&&s.num<e.length)return e[s.num];throw new Error("illegal attachments")}else if(Array.isArray(s))for(let t=0;t<s.length;t++)s[t]=Ch(s[t],e);else if(typeof s=="object")for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&(s[t]=Ch(s[t],e));return s}const lg=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],Xy=5;var St;(function(s){s[s.CONNECT=0]="CONNECT",s[s.DISCONNECT=1]="DISCONNECT",s[s.EVENT=2]="EVENT",s[s.ACK=3]="ACK",s[s.CONNECT_ERROR=4]="CONNECT_ERROR",s[s.BINARY_EVENT=5]="BINARY_EVENT",s[s.BINARY_ACK=6]="BINARY_ACK"})(St||(St={}));class Yy{constructor(e){this.replacer=e}encode(e){return(e.type===St.EVENT||e.type===St.ACK)&&wc(e)?this.encodeAsBinary({type:e.type===St.EVENT?St.BINARY_EVENT:St.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===St.BINARY_EVENT||e.type===St.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=Wy(e),r=this.encodeAsString(t.packet),o=t.buffers;return o.unshift(r),o}}class Rd extends cn{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let t;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const r=t.type===St.BINARY_EVENT;r||t.type===St.BINARY_ACK?(t.type=r?St.EVENT:St.ACK,this.reconstructor=new qy(t),t.attachments===0&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t)}else if(Cd(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0;const r={type:Number(e.charAt(0))};if(St[r.type]===void 0)throw new Error("unknown packet type "+r.type);if(r.type===St.BINARY_EVENT||r.type===St.BINARY_ACK){const l=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);const u=e.substring(l,t);if(u!=Number(u)||e.charAt(t)!=="-")throw new Error("Illegal attachments");const f=Number(u);if(!cg(f)||f<0)throw new Error("Illegal attachments");if(f>this.opts.maxAttachments)throw new Error("too many attachments");r.attachments=f}if(e.charAt(t+1)==="/"){const l=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););r.nsp=e.substring(l,t)}else r.nsp="/";const o=e.charAt(t+1);if(o!==""&&Number(o)==o){const l=t+1;for(;++t;){const u=e.charAt(t);if(u==null||Number(u)!=u){--t;break}if(t===e.length)break}r.id=Number(e.substring(l,t+1))}if(e.charAt(++t)){const l=this.tryParse(e.substr(t));if(Rd.isPayloadValid(r.type,l))r.data=l;else throw new Error("invalid payload")}return r}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,t){switch(e){case St.CONNECT:return Nc(t);case St.DISCONNECT:return t===void 0;case St.CONNECT_ERROR:return typeof t=="string"||Nc(t);case St.EVENT:case St.BINARY_EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&lg.indexOf(t[0])===-1);case St.ACK:case St.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class qy{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const t=jy(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function $y(s){return typeof s=="string"}const cg=Number.isInteger||function(s){return typeof s=="number"&&isFinite(s)&&Math.floor(s)===s};function Ky(s){return s===void 0||cg(s)}function Nc(s){return Object.prototype.toString.call(s)==="[object Object]"}function Zy(s,e){switch(s){case St.CONNECT:return e===void 0||Nc(e);case St.DISCONNECT:return e===void 0;case St.EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&lg.indexOf(e[0])===-1);case St.ACK:return Array.isArray(e);case St.CONNECT_ERROR:return typeof e=="string"||Nc(e);default:return!1}}function Qy(s){return $y(s.nsp)&&Ky(s.id)&&Zy(s.type,s.data)}const Jy=Object.freeze(Object.defineProperty({__proto__:null,Decoder:Rd,Encoder:Yy,get PacketType(){return St},isPacketValid:Qy,protocol:Xy},Symbol.toStringTag,{value:"Module"}));function Ti(s,e,t){return s.on(e,t),function(){s.off(e,t)}}const eS=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class ug extends cn{constructor(e,t,r){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,r&&r.auth&&(this.auth=r.auth),this._opts=Object.assign({},r),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[Ti(e,"open",this.onopen.bind(this)),Ti(e,"packet",this.onpacket.bind(this)),Ti(e,"error",this.onerror.bind(this)),Ti(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){var r,o,l;if(eS.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(t.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;const u={type:St.EVENT,data:t};if(u.options={},u.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){const _=this.ids++,g=t.pop();this._registerAckCallback(_,g),u.id=_}const f=(o=(r=this.io.engine)===null||r===void 0?void 0:r.transport)===null||o===void 0?void 0:o.writable,d=this.connected&&!(!((l=this.io.engine)===null||l===void 0)&&l._hasPingExpired());return this.flags.volatile&&!f||(d?(this.notifyOutgoingListeners(u),this.packet(u)):this.sendBuffer.push(u)),this.flags={},this}_registerAckCallback(e,t){var r;const o=(r=this.flags.timeout)!==null&&r!==void 0?r:this._opts.ackTimeout;if(o===void 0){this.acks[e]=t;return}const l=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let f=0;f<this.sendBuffer.length;f++)this.sendBuffer[f].id===e&&this.sendBuffer.splice(f,1);t.call(this,new Error("operation has timed out"))},o),u=(...f)=>{this.io.clearTimeoutFn(l),t.apply(this,f)};u.withError=!0,this.acks[e]=u}emitWithAck(e,...t){return new Promise((r,o)=>{const l=(u,f)=>u?o(u):r(f);l.withError=!0,t.push(l),this.emit(e,...t)})}_addToQueue(e){let t;typeof e[e.length-1]=="function"&&(t=e.pop());const r={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((o,...l)=>(this._queue[0],o!==null?r.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(o)):(this._queue.shift(),t&&t(null,...l)),r.pending=!1,this._drainQueue())),this._queue.push(r),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:St.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(r=>String(r.id)===e)){const r=this.acks[e];delete this.acks[e],r.withError&&r.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case St.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case St.EVENT:case St.BINARY_EVENT:this.onevent(e);break;case St.ACK:case St.BINARY_ACK:this.onack(e);break;case St.DISCONNECT:this.ondisconnect();break;case St.CONNECT_ERROR:this.destroy();const r=new Error(e.data.message);r.data=e.data.data,this.emitReserved("connect_error",r);break}}onevent(e){const t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const r of t)r.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const t=this;let r=!1;return function(...o){r||(r=!0,t.packet({type:St.ACK,id:e,data:o}))}}onack(e){const t=this.acks[e.id];typeof t=="function"&&(delete this.acks[e.id],t.withError&&e.data.unshift(null),t.apply(this,e.data))}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:St.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let r=0;r<t.length;r++)if(e===t[r])return t.splice(r,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let r=0;r<t.length;r++)if(e===t[r])return t.splice(r,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const r of t)r.apply(this,e.data)}}}function To(s){s=s||{},this.ms=s.min||100,this.max=s.max||1e4,this.factor=s.factor||2,this.jitter=s.jitter>0&&s.jitter<=1?s.jitter:0,this.attempts=0}To.prototype.duration=function(){var s=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*s);s=(Math.floor(e*10)&1)==0?s-t:s+t}return Math.min(s,this.max)|0};To.prototype.reset=function(){this.attempts=0};To.prototype.setMin=function(s){this.ms=s};To.prototype.setMax=function(s){this.max=s};To.prototype.setJitter=function(s){this.jitter=s};class Rh extends cn{constructor(e,t){var r;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,Xc(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((r=t.randomizationFactor)!==null&&r!==void 0?r:.5),this.backoff=new To({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;const o=t.parser||Jy;this.encoder=new o.Encoder,this.decoder=new o.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new ky(this.uri,this.opts);const t=this.engine,r=this;this._readyState="opening",this.skipReconnect=!1;const o=Ti(t,"open",function(){r.onopen(),e&&e()}),l=f=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",f),e?e(f):this.maybeReconnectOnOpen()},u=Ti(t,"error",l);if(this._timeout!==!1){const f=this._timeout,d=this.setTimeoutFn(()=>{o(),l(new Error("timeout")),t.close()},f);this.opts.autoUnref&&d.unref(),this.subs.push(()=>{this.clearTimeoutFn(d)})}return this.subs.push(o),this.subs.push(u),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(Ti(e,"ping",this.onping.bind(this)),Ti(e,"data",this.ondata.bind(this)),Ti(e,"error",this.onerror.bind(this)),Ti(e,"close",this.onclose.bind(this)),Ti(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(t){this.onclose("parse error",t)}}ondecoded(e){jc(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let r=this.nsps[e];return r?this._autoConnect&&!r.active&&r.connect():(r=new ug(this,e,t),this.nsps[e]=r),r}_destroy(e){const t=Object.keys(this.nsps);for(const r of t)if(this.nsps[r].active)return;this._close()}_packet(e){const t=this.encoder.encode(e);for(let r=0;r<t.length;r++)this.engine.write(t[r],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,t){var r;this.cleanup(),(r=this.engine)===null||r===void 0||r.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const r=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(o=>{o?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",o)):e.onreconnect()}))},t);this.opts.autoUnref&&r.unref(),this.subs.push(()=>{this.clearTimeoutFn(r)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const ha={};function bc(s,e){typeof s=="object"&&(e=s,s=void 0),e=e||{};const t=By(s,e.path||"/socket.io"),r=t.source,o=t.id,l=t.path,u=ha[o]&&l in ha[o].nsps,f=e.forceNew||e["force new connection"]||e.multiplex===!1||u;let d;return f?d=new Rh(r,e):(ha[o]||(ha[o]=new Rh(r,e)),d=ha[o]),t.query&&!e.query&&(e.query=t.queryKey),d.socket(t.path,e)}Object.assign(bc,{Manager:Rh,Socket:ug,io:bc,connect:bc});let kf=null;function tS(){try{return new URL(ji).origin}catch{return"http://localhost:3001"}}function Pd(){if(!kf)try{kf=bc(tS(),{autoConnect:!1,timeout:6e3})}catch(s){console.warn("Socket init failed",s)}return kf}async function nS(){const s=Pd();return s?s.connected?s:new Promise(e=>{const t=()=>{l(),e(s)},r=f=>{l(),console.warn("Socket connect failed",f),e(null)},o=()=>{l(),console.warn("Socket connect timed out"),e(null)},l=()=>{clearTimeout(u),s.off("connect",t),s.off("connect_error",r)},u=setTimeout(o,7e3);s.on("connect",t),s.on("connect_error",r),s.connect()}):null}let Tc=!1,Ph=!1,lr="",Ac=null,Oi=null;function Bf(s){return`${s}_${Date.now()}_${Math.random().toString(36).slice(2,8)}`}function jl(s){Ph=!0;try{s()}finally{Ph=!1}}function zf(s,e){const t=Pd();!t||!t.connected||t.emit(s,e,r=>{r?.ok||console.warn(`Socket event ${s} failed`,r?.code||"UNKNOWN")})}function iS(s,e){if(!Ph){for(const[t,r]of Object.entries(e)){const o=s[t];if(!o){zf("object:add",{sceneId:lr,opId:Bf("add"),object:r});continue}JSON.stringify(o)!==JSON.stringify(r)&&zf("object:update",{sceneId:lr,opId:Bf("upd"),object:r})}for(const t of Object.keys(s))e[t]||zf("object:remove",{sceneId:lr,opId:Bf("del"),objectId:t,expectedVersion:s[t].version})}}async function rS(s){const e=s.trim();if(!e)throw new Error("Missing scene id");if(Tc&&lr===e)return;fg(),await Vv(),lr=e,Tc=!0,xt.getState().setCurrentSceneId(lr);const t=await nS();if(!t){Tc=!1;return}Oi=t;const r=Ov();t.emit("scene:join",{sceneId:e,token:r},u=>{u?.ok||console.warn("Failed to join scene",u?.code||"UNKNOWN")}),t.on("scene:snapshot",u=>{jl(()=>{xt.getState().setCurrentSceneId(u.sceneId),xt.getState().setSnapshot(u.objects||{})})}),t.on("object:added",u=>{u?.object&&jl(()=>{xt.getState().upsertObject(u.object)})}),t.on("object:updated",u=>{u?.object&&jl(()=>{xt.getState().upsertObject(u.object)})}),t.on("object:removed",u=>{u?.objectId&&jl(()=>{xt.getState().removeObject(u.objectId)})}),t.on("presence:cursor",u=>{!u?.userId||!u.cursor||u.userId!==E0()&&xt.getState().setPresence({userId:u.userId,cursor:u.cursor,color:u.color})}),t.on("presence:select",u=>{!u?.userId||!u.selection||u.userId!==E0()&&xt.getState().setPresence({userId:u.userId,selection:u.selection,color:u.color})}),t.on("presence:left",u=>{u?.userId&&xt.getState().removePresence(u.userId)}),t.on("error",u=>{u?.code==="UNAUTHORIZED"&&console.warn("Socket unauthorized, refresh auth and reconnect required.")});let o=xt.getState().objects,l=xt.getState().selectedId;Ac=xt.subscribe(u=>{if(u.objects!==o&&(iS(o,u.objects),o=u.objects),u.selectedId!==l){l=u.selectedId;const f=u.selectedId?[u.selectedId]:[];t.emit("presence:select",{sceneId:lr,selection:f})}})}function fg(){Ac&&(Ac(),Ac=null),Oi&&(Oi.off("scene:snapshot"),Oi.off("object:added"),Oi.off("object:updated"),Oi.off("object:removed"),Oi.off("presence:cursor"),Oi.off("presence:select"),Oi.off("presence:left"),Oi.off("error")),Tc=!1,lr=""}function sS(s,e){const t=Pd();!t||!t.connected||t.emit("presence:cursor",{sceneId:lr,x:s,y:e})}const Ld="181",po={ROTATE:0,DOLLY:1,PAN:2},fo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},oS=0,P0=1,aS=2,hg=1,lS=2,or=3,$r=0,$n=1,Ai=2,fr=0,mo=1,L0=2,D0=3,I0=4,cS=5,gs=100,uS=101,fS=102,hS=103,dS=104,pS=200,mS=201,xS=202,gS=203,Lh=204,Dh=205,_S=206,vS=207,yS=208,SS=209,MS=210,ES=211,wS=212,bS=213,TS=214,Ih=0,Nh=1,Uh=2,yo=3,Fh=4,Oh=5,kh=6,Bh=7,dg=0,AS=1,CS=2,qr=0,RS=1,PS=2,LS=3,DS=4,IS=5,NS=6,US=7,pg=300,So=301,Mo=302,zh=303,Vh=304,Yc=306,Hh=1e3,cr=1001,Gh=1002,si=1003,FS=1004,Xl=1005,xi=1006,Vf=1007,ys=1008,Gi=1009,mg=1010,xg=1011,Aa=1012,Dd=1013,Ss=1014,ur=1015,Ao=1016,Id=1017,Nd=1018,Ca=1020,gg=35902,_g=35899,vg=1021,yg=1022,Ci=1023,Ra=1026,Pa=1027,Sg=1028,Ud=1029,Fd=1030,Od=1031,kd=1033,Cc=33776,Rc=33777,Pc=33778,Lc=33779,Wh=35840,jh=35841,Xh=35842,Yh=35843,qh=36196,$h=37492,Kh=37496,Zh=37808,Qh=37809,Jh=37810,ed=37811,td=37812,nd=37813,id=37814,rd=37815,sd=37816,od=37817,ad=37818,ld=37819,cd=37820,ud=37821,fd=36492,hd=36494,dd=36495,pd=36283,md=36284,xd=36285,gd=36286,OS=3200,kS=3201,Mg=0,BS=1,jr="",di="srgb",Eo="srgb-linear",Uc="linear",kt="srgb",Ks=7680,N0=519,zS=512,VS=513,HS=514,Eg=515,GS=516,WS=517,jS=518,XS=519,U0=35044,F0="300 es",Bi=2e3,Fc=2001;function wg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Oc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function YS(){const s=Oc("canvas");return s.style.display="block",s}const O0={};function k0(...s){const e="THREE."+s.shift();console.log(e,...s)}function pt(...s){const e="THREE."+s.shift();console.warn(e,...s)}function rn(...s){const e="THREE."+s.shift();console.error(e,...s)}function La(...s){const e=s.join(" ");e in O0||(O0[e]=!0,pt(...s))}function qS(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}class Es{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let B0=1234567;const xo=Math.PI/180,Da=180/Math.PI;function Co(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[t&63|128]+Pn[t>>8&255]+"-"+Pn[t>>16&255]+Pn[t>>24&255]+Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]).toLowerCase()}function Mt(s,e,t){return Math.max(e,Math.min(t,s))}function Bd(s,e){return(s%e+e)%e}function $S(s,e,t,r,o){return r+(s-e)*(o-r)/(t-e)}function KS(s,e,t){return s!==e?(t-s)/(e-s):0}function Ta(s,e,t){return(1-t)*s+t*e}function ZS(s,e,t,r){return Ta(s,e,1-Math.exp(-t*r))}function QS(s,e=1){return e-Math.abs(Bd(s,e*2)-e)}function JS(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function eM(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function tM(s,e){return s+Math.floor(Math.random()*(e-s+1))}function nM(s,e){return s+Math.random()*(e-s)}function iM(s){return s*(.5-Math.random())}function rM(s){s!==void 0&&(B0=s);let e=B0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sM(s){return s*xo}function oM(s){return s*Da}function aM(s){return(s&s-1)===0&&s!==0}function lM(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function cM(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function uM(s,e,t,r,o){const l=Math.cos,u=Math.sin,f=l(t/2),d=u(t/2),p=l((e+r)/2),_=u((e+r)/2),g=l((e-r)/2),x=u((e-r)/2),y=l((r-e)/2),M=u((r-e)/2);switch(o){case"XYX":s.set(f*_,d*g,d*x,f*p);break;case"YZY":s.set(d*x,f*_,d*g,f*p);break;case"ZXZ":s.set(d*g,d*x,f*_,f*p);break;case"XZX":s.set(f*_,d*M,d*y,f*p);break;case"YXY":s.set(d*y,f*_,d*M,f*p);break;case"ZYZ":s.set(d*M,d*y,f*_,f*p);break;default:pt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function uo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function kn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const bg={DEG2RAD:xo,RAD2DEG:Da,generateUUID:Co,clamp:Mt,euclideanModulo:Bd,mapLinear:$S,inverseLerp:KS,lerp:Ta,damp:ZS,pingpong:QS,smoothstep:JS,smootherstep:eM,randInt:tM,randFloat:nM,randFloatSpread:iM,seededRandom:rM,degToRad:sM,radToDeg:oM,isPowerOfTwo:aM,ceilPowerOfTwo:lM,floorPowerOfTwo:cM,setQuaternionFromProperEuler:uM,normalize:kn,denormalize:uo};class ut{constructor(e=0,t=0){ut.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bn{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,f){let d=r[o+0],p=r[o+1],_=r[o+2],g=r[o+3],x=l[u+0],y=l[u+1],M=l[u+2],E=l[u+3];if(f<=0){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(f>=1){e[t+0]=x,e[t+1]=y,e[t+2]=M,e[t+3]=E;return}if(g!==E||d!==x||p!==y||_!==M){let S=d*x+p*y+_*M+g*E;S<0&&(x=-x,y=-y,M=-M,E=-E,S=-S);let v=1-f;if(S<.9995){const P=Math.acos(S),R=Math.sin(P);v=Math.sin(v*P)/R,f=Math.sin(f*P)/R,d=d*v+x*f,p=p*v+y*f,_=_*v+M*f,g=g*v+E*f}else{d=d*v+x*f,p=p*v+y*f,_=_*v+M*f,g=g*v+E*f;const P=1/Math.sqrt(d*d+p*p+_*_+g*g);d*=P,p*=P,_*=P,g*=P}}e[t]=d,e[t+1]=p,e[t+2]=_,e[t+3]=g}static multiplyQuaternionsFlat(e,t,r,o,l,u){const f=r[o],d=r[o+1],p=r[o+2],_=r[o+3],g=l[u],x=l[u+1],y=l[u+2],M=l[u+3];return e[t]=f*M+_*g+d*y-p*x,e[t+1]=d*M+_*x+p*g-f*y,e[t+2]=p*M+_*y+f*x-d*g,e[t+3]=_*M-f*g-d*x-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,d=Math.sin,p=f(r/2),_=f(o/2),g=f(l/2),x=d(r/2),y=d(o/2),M=d(l/2);switch(u){case"XYZ":this._x=x*_*g+p*y*M,this._y=p*y*g-x*_*M,this._z=p*_*M+x*y*g,this._w=p*_*g-x*y*M;break;case"YXZ":this._x=x*_*g+p*y*M,this._y=p*y*g-x*_*M,this._z=p*_*M-x*y*g,this._w=p*_*g+x*y*M;break;case"ZXY":this._x=x*_*g-p*y*M,this._y=p*y*g+x*_*M,this._z=p*_*M+x*y*g,this._w=p*_*g-x*y*M;break;case"ZYX":this._x=x*_*g-p*y*M,this._y=p*y*g+x*_*M,this._z=p*_*M-x*y*g,this._w=p*_*g+x*y*M;break;case"YZX":this._x=x*_*g+p*y*M,this._y=p*y*g+x*_*M,this._z=p*_*M-x*y*g,this._w=p*_*g-x*y*M;break;case"XZY":this._x=x*_*g-p*y*M,this._y=p*y*g-x*_*M,this._z=p*_*M+x*y*g,this._w=p*_*g+x*y*M;break;default:pt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],f=t[5],d=t[9],p=t[2],_=t[6],g=t[10],x=r+f+g;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(_-d)*y,this._y=(l-p)*y,this._z=(u-o)*y}else if(r>f&&r>g){const y=2*Math.sqrt(1+r-f-g);this._w=(_-d)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(l+p)/y}else if(f>g){const y=2*Math.sqrt(1+f-r-g);this._w=(l-p)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(d+_)/y}else{const y=2*Math.sqrt(1+g-r-f);this._w=(u-o)/y,this._x=(l+p)/y,this._y=(d+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,f=t._x,d=t._y,p=t._z,_=t._w;return this._x=r*_+u*f+o*p-l*d,this._y=o*_+u*d+l*f-r*p,this._z=l*_+u*p+r*d-o*f,this._w=u*_-r*f-o*d-l*p,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let r=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,u=-u,f=-f);let d=1-t;if(f<.9995){const p=Math.acos(f),_=Math.sin(p);d=Math.sin(d*p)/_,t=Math.sin(t*p)/_,this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+l*t,this._w=this._w*d+u*t,this._onChangeCallback()}else this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+l*t,this._w=this._w*d+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,r=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(z0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(z0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,d=e.w,p=2*(u*o-f*r),_=2*(f*t-l*o),g=2*(l*r-u*t);return this.x=t+d*p+u*g-f*_,this.y=r+d*_+f*p-l*g,this.z=o+d*g+l*_-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,f=t.y,d=t.z;return this.x=o*d-l*f,this.y=l*u-r*d,this.z=r*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Hf.copy(this).projectOnVector(e),this.sub(Hf)}reflect(e){return this.sub(Hf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hf=new H,z0=new bn;class vt{constructor(e,t,r,o,l,u,f,d,p){vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,d,p)}set(e,t,r,o,l,u,f,d,p){const _=this.elements;return _[0]=e,_[1]=o,_[2]=f,_[3]=t,_[4]=l,_[5]=d,_[6]=r,_[7]=u,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[3],d=r[6],p=r[1],_=r[4],g=r[7],x=r[2],y=r[5],M=r[8],E=o[0],S=o[3],v=o[6],P=o[1],R=o[4],I=o[7],k=o[2],L=o[5],N=o[8];return l[0]=u*E+f*P+d*k,l[3]=u*S+f*R+d*L,l[6]=u*v+f*I+d*N,l[1]=p*E+_*P+g*k,l[4]=p*S+_*R+g*L,l[7]=p*v+_*I+g*N,l[2]=x*E+y*P+M*k,l[5]=x*S+y*R+M*L,l[8]=x*v+y*I+M*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],d=e[6],p=e[7],_=e[8];return t*u*_-t*f*p-r*l*_+r*f*d+o*l*p-o*u*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],d=e[6],p=e[7],_=e[8],g=_*u-f*p,x=f*d-_*l,y=p*l-u*d,M=t*g+r*x+o*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=g*E,e[1]=(o*p-_*r)*E,e[2]=(f*r-o*u)*E,e[3]=x*E,e[4]=(_*t-o*d)*E,e[5]=(o*l-f*t)*E,e[6]=y*E,e[7]=(r*d-p*t)*E,e[8]=(u*t-r*l)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,f){const d=Math.cos(l),p=Math.sin(l);return this.set(r*d,r*p,-r*(d*u+p*f)+u+e,-o*p,o*d,-o*(-p*u+d*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Gf.makeScale(e,t)),this}rotate(e){return this.premultiply(Gf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gf=new vt,V0=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),H0=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fM(){const s={enabled:!0,workingColorSpace:Eo,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===kt&&(o.r=hr(o.r),o.g=hr(o.g),o.b=hr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===kt&&(o.r=go(o.r),o.g=go(o.g),o.b=go(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===jr?Uc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return La("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return La("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Eo]:{primaries:e,whitePoint:r,transfer:Uc,toXYZ:V0,fromXYZ:H0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:e,whitePoint:r,transfer:kt,toXYZ:V0,fromXYZ:H0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:di}}}),s}const It=fM();function hr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function go(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Zs;class hM{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Zs===void 0&&(Zs=Oc("canvas")),Zs.width=e.width,Zs.height=e.height;const o=Zs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Zs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Oc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=hr(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(hr(t[r]/255)*255):t[r]=hr(t[r]);return{data:t,width:e.width,height:e.height}}else return pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dM=0;class zd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=Co(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(Wf(o[u].image)):l.push(Wf(o[u]))}else l=Wf(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Wf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?hM.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(pt("Texture: Unable to serialize Texture."),{})}let pM=0;const jf=new H;class zn extends Es{constructor(e=zn.DEFAULT_IMAGE,t=zn.DEFAULT_MAPPING,r=cr,o=cr,l=xi,u=ys,f=Ci,d=Gi,p=zn.DEFAULT_ANISOTROPY,_=jr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pM++}),this.uuid=Co(),this.name="",this.source=new zd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=d,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(jf).x}get height(){return this.source.getSize(jf).y}get depth(){return this.source.getSize(jf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){pt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){pt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hh:e.x=e.x-Math.floor(e.x);break;case cr:e.x=e.x<0?0:1;break;case Gh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hh:e.y=e.y-Math.floor(e.y);break;case cr:e.y=e.y<0?0:1;break;case Gh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=pg;zn.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,t=0,r=0,o=1){zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const d=e.elements,p=d[0],_=d[4],g=d[8],x=d[1],y=d[5],M=d[9],E=d[2],S=d[6],v=d[10];if(Math.abs(_-x)<.01&&Math.abs(g-E)<.01&&Math.abs(M-S)<.01){if(Math.abs(_+x)<.1&&Math.abs(g+E)<.1&&Math.abs(M+S)<.1&&Math.abs(p+y+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(p+1)/2,I=(y+1)/2,k=(v+1)/2,L=(_+x)/4,N=(g+E)/4,B=(M+S)/4;return R>I&&R>k?R<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(R),o=L/r,l=N/r):I>k?I<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(I),r=L/o,l=B/o):k<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(k),r=N/l,o=B/l),this.set(r,o,l,t),this}let P=Math.sqrt((S-M)*(S-M)+(g-E)*(g-E)+(x-_)*(x-_));return Math.abs(P)<.001&&(P=1),this.x=(S-M)/P,this.y=(g-E)/P,this.z=(x-_)/P,this.w=Math.acos((p+y+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this.w=Mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this.w=Mt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mM extends Es{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t);const o={width:e,height:t,depth:r.depth},l=new zn(o);this.textures=[];const u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:xi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new zd(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ms extends mM{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Tg extends zn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=si,this.minFilter=si,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xM extends zn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=si,this.minFilter=si,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Na{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Ei):Ei.fromBufferAttribute(l,u),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Yl.copy(r.boundingBox)),Yl.applyMatrix4(e.matrixWorld),this.union(Yl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(da),ql.subVectors(this.max,da),Qs.subVectors(e.a,da),Js.subVectors(e.b,da),eo.subVectors(e.c,da),Or.subVectors(Js,Qs),kr.subVectors(eo,Js),cs.subVectors(Qs,eo);let t=[0,-Or.z,Or.y,0,-kr.z,kr.y,0,-cs.z,cs.y,Or.z,0,-Or.x,kr.z,0,-kr.x,cs.z,0,-cs.x,-Or.y,Or.x,0,-kr.y,kr.x,0,-cs.y,cs.x,0];return!Xf(t,Qs,Js,eo,ql)||(t=[1,0,0,0,1,0,0,0,1],!Xf(t,Qs,Js,eo,ql))?!1:($l.crossVectors(Or,kr),t=[$l.x,$l.y,$l.z],Xf(t,Qs,Js,eo,ql))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(er[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),er[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),er[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),er[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),er[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),er[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),er[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),er[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(er),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const er=[new H,new H,new H,new H,new H,new H,new H,new H],Ei=new H,Yl=new Na,Qs=new H,Js=new H,eo=new H,Or=new H,kr=new H,cs=new H,da=new H,ql=new H,$l=new H,us=new H;function Xf(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){us.fromArray(s,l);const f=o.x*Math.abs(us.x)+o.y*Math.abs(us.y)+o.z*Math.abs(us.z),d=e.dot(us),p=t.dot(us),_=r.dot(us);if(Math.max(-Math.max(d,p,_),Math.min(d,p,_))>f)return!1}return!0}const gM=new Na,pa=new H,Yf=new H;class qc{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):gM.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pa.subVectors(e,this.center);const t=pa.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(pa,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pa.copy(e.center).add(Yf)),this.expandByPoint(pa.copy(e.center).sub(Yf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const tr=new H,qf=new H,Kl=new H,Br=new H,$f=new H,Zl=new H,Kf=new H;class $c{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,tr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=tr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(tr.copy(this.origin).addScaledVector(this.direction,t),tr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){qf.copy(e).add(t).multiplyScalar(.5),Kl.copy(t).sub(e).normalize(),Br.copy(this.origin).sub(qf);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Kl),f=Br.dot(this.direction),d=-Br.dot(Kl),p=Br.lengthSq(),_=Math.abs(1-u*u);let g,x,y,M;if(_>0)if(g=u*d-f,x=u*f-d,M=l*_,g>=0)if(x>=-M)if(x<=M){const E=1/_;g*=E,x*=E,y=g*(g+u*x+2*f)+x*(u*g+x+2*d)+p}else x=l,g=Math.max(0,-(u*x+f)),y=-g*g+x*(x+2*d)+p;else x=-l,g=Math.max(0,-(u*x+f)),y=-g*g+x*(x+2*d)+p;else x<=-M?(g=Math.max(0,-(-u*l+f)),x=g>0?-l:Math.min(Math.max(-l,-d),l),y=-g*g+x*(x+2*d)+p):x<=M?(g=0,x=Math.min(Math.max(-l,-d),l),y=x*(x+2*d)+p):(g=Math.max(0,-(u*l+f)),x=g>0?l:Math.min(Math.max(-l,-d),l),y=-g*g+x*(x+2*d)+p);else x=u>0?-l:l,g=Math.max(0,-(u*x+f)),y=-g*g+x*(x+2*d)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(qf).addScaledVector(Kl,x),y}intersectSphere(e,t){tr.subVectors(e.center,this.origin);const r=tr.dot(this.direction),o=tr.dot(tr)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,d=r+u;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,f,d;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,o=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,o=(e.min.x-x.x)*p),_>=0?(l=(e.min.y-x.y)*_,u=(e.max.y-x.y)*_):(l=(e.max.y-x.y)*_,u=(e.min.y-x.y)*_),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),g>=0?(f=(e.min.z-x.z)*g,d=(e.max.z-x.z)*g):(f=(e.max.z-x.z)*g,d=(e.min.z-x.z)*g),r>d||f>o)||((f>r||r!==r)&&(r=f),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,tr)!==null}intersectTriangle(e,t,r,o,l){$f.subVectors(t,e),Zl.subVectors(r,e),Kf.crossVectors($f,Zl);let u=this.direction.dot(Kf),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Br.subVectors(this.origin,e);const d=f*this.direction.dot(Zl.crossVectors(Br,Zl));if(d<0)return null;const p=f*this.direction.dot($f.cross(Br));if(p<0||d+p>u)return null;const _=-f*Br.dot(Kf);return _<0?null:this.at(_/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wt{constructor(e,t,r,o,l,u,f,d,p,_,g,x,y,M,E,S){Wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,d,p,_,g,x,y,M,E,S)}set(e,t,r,o,l,u,f,d,p,_,g,x,y,M,E,S){const v=this.elements;return v[0]=e,v[4]=t,v[8]=r,v[12]=o,v[1]=l,v[5]=u,v[9]=f,v[13]=d,v[2]=p,v[6]=_,v[10]=g,v[14]=x,v[3]=y,v[7]=M,v[11]=E,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/to.setFromMatrixColumn(e,0).length(),l=1/to.setFromMatrixColumn(e,1).length(),u=1/to.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),d=Math.cos(o),p=Math.sin(o),_=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const x=u*_,y=u*g,M=f*_,E=f*g;t[0]=d*_,t[4]=-d*g,t[8]=p,t[1]=y+M*p,t[5]=x-E*p,t[9]=-f*d,t[2]=E-x*p,t[6]=M+y*p,t[10]=u*d}else if(e.order==="YXZ"){const x=d*_,y=d*g,M=p*_,E=p*g;t[0]=x+E*f,t[4]=M*f-y,t[8]=u*p,t[1]=u*g,t[5]=u*_,t[9]=-f,t[2]=y*f-M,t[6]=E+x*f,t[10]=u*d}else if(e.order==="ZXY"){const x=d*_,y=d*g,M=p*_,E=p*g;t[0]=x-E*f,t[4]=-u*g,t[8]=M+y*f,t[1]=y+M*f,t[5]=u*_,t[9]=E-x*f,t[2]=-u*p,t[6]=f,t[10]=u*d}else if(e.order==="ZYX"){const x=u*_,y=u*g,M=f*_,E=f*g;t[0]=d*_,t[4]=M*p-y,t[8]=x*p+E,t[1]=d*g,t[5]=E*p+x,t[9]=y*p-M,t[2]=-p,t[6]=f*d,t[10]=u*d}else if(e.order==="YZX"){const x=u*d,y=u*p,M=f*d,E=f*p;t[0]=d*_,t[4]=E-x*g,t[8]=M*g+y,t[1]=g,t[5]=u*_,t[9]=-f*_,t[2]=-p*_,t[6]=y*g+M,t[10]=x-E*g}else if(e.order==="XZY"){const x=u*d,y=u*p,M=f*d,E=f*p;t[0]=d*_,t[4]=-g,t[8]=p*_,t[1]=x*g+E,t[5]=u*_,t[9]=y*g-M,t[2]=M*g-y,t[6]=f*_,t[10]=E*g+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_M,e,vM)}lookAt(e,t,r){const o=this.elements;return ni.subVectors(e,t),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),zr.crossVectors(r,ni),zr.lengthSq()===0&&(Math.abs(r.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),zr.crossVectors(r,ni)),zr.normalize(),Ql.crossVectors(ni,zr),o[0]=zr.x,o[4]=Ql.x,o[8]=ni.x,o[1]=zr.y,o[5]=Ql.y,o[9]=ni.y,o[2]=zr.z,o[6]=Ql.z,o[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[4],d=r[8],p=r[12],_=r[1],g=r[5],x=r[9],y=r[13],M=r[2],E=r[6],S=r[10],v=r[14],P=r[3],R=r[7],I=r[11],k=r[15],L=o[0],N=o[4],B=o[8],A=o[12],w=o[1],F=o[5],V=o[9],K=o[13],ie=o[2],ne=o[6],ce=o[10],ae=o[14],j=o[3],re=o[7],D=o[11],Q=o[15];return l[0]=u*L+f*w+d*ie+p*j,l[4]=u*N+f*F+d*ne+p*re,l[8]=u*B+f*V+d*ce+p*D,l[12]=u*A+f*K+d*ae+p*Q,l[1]=_*L+g*w+x*ie+y*j,l[5]=_*N+g*F+x*ne+y*re,l[9]=_*B+g*V+x*ce+y*D,l[13]=_*A+g*K+x*ae+y*Q,l[2]=M*L+E*w+S*ie+v*j,l[6]=M*N+E*F+S*ne+v*re,l[10]=M*B+E*V+S*ce+v*D,l[14]=M*A+E*K+S*ae+v*Q,l[3]=P*L+R*w+I*ie+k*j,l[7]=P*N+R*F+I*ne+k*re,l[11]=P*B+R*V+I*ce+k*D,l[15]=P*A+R*K+I*ae+k*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],d=e[9],p=e[13],_=e[2],g=e[6],x=e[10],y=e[14],M=e[3],E=e[7],S=e[11],v=e[15];return M*(+l*d*g-o*p*g-l*f*x+r*p*x+o*f*y-r*d*y)+E*(+t*d*y-t*p*x+l*u*x-o*u*y+o*p*_-l*d*_)+S*(+t*p*g-t*f*y-l*u*g+r*u*y+l*f*_-r*p*_)+v*(-o*f*_-t*d*g+t*f*x+o*u*g-r*u*x+r*d*_)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],d=e[6],p=e[7],_=e[8],g=e[9],x=e[10],y=e[11],M=e[12],E=e[13],S=e[14],v=e[15],P=g*S*p-E*x*p+E*d*y-f*S*y-g*d*v+f*x*v,R=M*x*p-_*S*p-M*d*y+u*S*y+_*d*v-u*x*v,I=_*E*p-M*g*p+M*f*y-u*E*y-_*f*v+u*g*v,k=M*g*d-_*E*d-M*f*x+u*E*x+_*f*S-u*g*S,L=t*P+r*R+o*I+l*k;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/L;return e[0]=P*N,e[1]=(E*x*l-g*S*l-E*o*y+r*S*y+g*o*v-r*x*v)*N,e[2]=(f*S*l-E*d*l+E*o*p-r*S*p-f*o*v+r*d*v)*N,e[3]=(g*d*l-f*x*l-g*o*p+r*x*p+f*o*y-r*d*y)*N,e[4]=R*N,e[5]=(_*S*l-M*x*l+M*o*y-t*S*y-_*o*v+t*x*v)*N,e[6]=(M*d*l-u*S*l-M*o*p+t*S*p+u*o*v-t*d*v)*N,e[7]=(u*x*l-_*d*l+_*o*p-t*x*p-u*o*y+t*d*y)*N,e[8]=I*N,e[9]=(M*g*l-_*E*l-M*r*y+t*E*y+_*r*v-t*g*v)*N,e[10]=(u*E*l-M*f*l+M*r*p-t*E*p-u*r*v+t*f*v)*N,e[11]=(_*f*l-u*g*l-_*r*p+t*g*p+u*r*y-t*f*y)*N,e[12]=k*N,e[13]=(_*E*o-M*g*o+M*r*x-t*E*x-_*r*S+t*g*S)*N,e[14]=(M*f*o-u*E*o-M*r*d+t*E*d+u*r*S-t*f*S)*N,e[15]=(u*g*o-_*f*o+_*r*d-t*g*d-u*r*x+t*f*x)*N,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,f=e.y,d=e.z,p=l*u,_=l*f;return this.set(p*u+r,p*f-o*d,p*d+o*f,0,p*f+o*d,_*f+r,_*d-o*u,0,p*d-o*f,_*d+o*u,l*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,f=t._z,d=t._w,p=l+l,_=u+u,g=f+f,x=l*p,y=l*_,M=l*g,E=u*_,S=u*g,v=f*g,P=d*p,R=d*_,I=d*g,k=r.x,L=r.y,N=r.z;return o[0]=(1-(E+v))*k,o[1]=(y+I)*k,o[2]=(M-R)*k,o[3]=0,o[4]=(y-I)*L,o[5]=(1-(x+v))*L,o[6]=(S+P)*L,o[7]=0,o[8]=(M+R)*N,o[9]=(S-P)*N,o[10]=(1-(x+E))*N,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=to.set(o[0],o[1],o[2]).length();const u=to.set(o[4],o[5],o[6]).length(),f=to.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],wi.copy(this);const p=1/l,_=1/u,g=1/f;return wi.elements[0]*=p,wi.elements[1]*=p,wi.elements[2]*=p,wi.elements[4]*=_,wi.elements[5]*=_,wi.elements[6]*=_,wi.elements[8]*=g,wi.elements[9]*=g,wi.elements[10]*=g,t.setFromRotationMatrix(wi),r.x=l,r.y=u,r.z=f,this}makePerspective(e,t,r,o,l,u,f=Bi,d=!1){const p=this.elements,_=2*l/(t-e),g=2*l/(r-o),x=(t+e)/(t-e),y=(r+o)/(r-o);let M,E;if(d)M=l/(u-l),E=u*l/(u-l);else if(f===Bi)M=-(u+l)/(u-l),E=-2*u*l/(u-l);else if(f===Fc)M=-u/(u-l),E=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=_,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,o,l,u,f=Bi,d=!1){const p=this.elements,_=2/(t-e),g=2/(r-o),x=-(t+e)/(t-e),y=-(r+o)/(r-o);let M,E;if(d)M=1/(u-l),E=u/(u-l);else if(f===Bi)M=-2/(u-l),E=-(u+l)/(u-l);else if(f===Fc)M=-1/(u-l),E=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=_,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=g,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=M,p[14]=E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const to=new H,wi=new Wt,_M=new H(0,0,0),vM=new H(1,1,1),zr=new H,Ql=new H,ni=new H,G0=new Wt,W0=new bn;class Ri{constructor(e=0,t=0,r=0,o=Ri.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],d=o[1],p=o[5],_=o[9],g=o[2],x=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(Mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-Mt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-_,y),this._y=0);break;default:pt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return G0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(G0,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return W0.setFromEuler(this),this.setFromQuaternion(W0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ri.DEFAULT_ORDER="XYZ";class Vd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yM=0;const j0=new H,no=new bn,nr=new Wt,Jl=new H,ma=new H,SM=new H,MM=new bn,X0=new H(1,0,0),Y0=new H(0,1,0),q0=new H(0,0,1),$0={type:"added"},EM={type:"removed"},io={type:"childadded",child:null},Zf={type:"childremoved",child:null};class un extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=Co(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DEFAULT_UP.clone();const e=new H,t=new Ri,r=new bn,o=new H(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Wt},normalMatrix:{value:new vt}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return no.setFromAxisAngle(e,t),this.quaternion.multiply(no),this}rotateOnWorldAxis(e,t){return no.setFromAxisAngle(e,t),this.quaternion.premultiply(no),this}rotateX(e){return this.rotateOnAxis(X0,e)}rotateY(e){return this.rotateOnAxis(Y0,e)}rotateZ(e){return this.rotateOnAxis(q0,e)}translateOnAxis(e,t){return j0.copy(e).applyQuaternion(this.quaternion),this.position.add(j0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(X0,e)}translateY(e){return this.translateOnAxis(Y0,e)}translateZ(e){return this.translateOnAxis(q0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(nr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Jl.copy(e):Jl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nr.lookAt(ma,Jl,this.up):nr.lookAt(Jl,ma,this.up),this.quaternion.setFromRotationMatrix(nr),o&&(nr.extractRotation(o.matrixWorld),no.setFromRotationMatrix(nr),this.quaternion.premultiply(no.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(rn("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($0),io.child=e,this.dispatchEvent(io),io.child=null):rn("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(EM),Zf.child=e,this.dispatchEvent(Zf),Zf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),nr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),nr.multiply(e.parent.matrixWorld)),e.applyMatrix4(nr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($0),io.child=e,this.dispatchEvent(io),io.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ma,e,SM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ma,MM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let p=0,_=d.length;p<_;p++){const g=d[p];l(e.shapes,g)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,p=this.material.length;d<p;d++)f.push(l(e.materials,this.material[d]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];o.animations.push(l(e.animations,d))}}if(t){const f=u(e.geometries),d=u(e.materials),p=u(e.textures),_=u(e.images),g=u(e.shapes),x=u(e.skeletons),y=u(e.animations),M=u(e.nodes);f.length>0&&(r.geometries=f),d.length>0&&(r.materials=d),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),g.length>0&&(r.shapes=g),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),M.length>0&&(r.nodes=M)}return r.object=o,r;function u(f){const d=[];for(const p in f){const _=f[p];delete _.metadata,d.push(_)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}un.DEFAULT_UP=new H(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bi=new H,ir=new H,Qf=new H,rr=new H,ro=new H,so=new H,K0=new H,Jf=new H,eh=new H,th=new H,nh=new zt,ih=new zt,rh=new zt;class mi{constructor(e=new H,t=new H,r=new H){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),bi.subVectors(e,t),o.cross(bi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){bi.subVectors(o,t),ir.subVectors(r,t),Qf.subVectors(e,t);const u=bi.dot(bi),f=bi.dot(ir),d=bi.dot(Qf),p=ir.dot(ir),_=ir.dot(Qf),g=u*p-f*f;if(g===0)return l.set(0,0,0),null;const x=1/g,y=(p*d-f*_)*x,M=(u*_-f*d)*x;return l.set(1-y-M,M,y)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,rr)===null?!1:rr.x>=0&&rr.y>=0&&rr.x+rr.y<=1}static getInterpolation(e,t,r,o,l,u,f,d){return this.getBarycoord(e,t,r,o,rr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,rr.x),d.addScaledVector(u,rr.y),d.addScaledVector(f,rr.z),d)}static getInterpolatedAttribute(e,t,r,o,l,u){return nh.setScalar(0),ih.setScalar(0),rh.setScalar(0),nh.fromBufferAttribute(e,t),ih.fromBufferAttribute(e,r),rh.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(nh,l.x),u.addScaledVector(ih,l.y),u.addScaledVector(rh,l.z),u}static isFrontFacing(e,t,r,o){return bi.subVectors(r,t),ir.subVectors(e,t),bi.cross(ir).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bi.subVectors(this.c,this.b),ir.subVectors(this.a,this.b),bi.cross(ir).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return mi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,f;ro.subVectors(o,r),so.subVectors(l,r),Jf.subVectors(e,r);const d=ro.dot(Jf),p=so.dot(Jf);if(d<=0&&p<=0)return t.copy(r);eh.subVectors(e,o);const _=ro.dot(eh),g=so.dot(eh);if(_>=0&&g<=_)return t.copy(o);const x=d*g-_*p;if(x<=0&&d>=0&&_<=0)return u=d/(d-_),t.copy(r).addScaledVector(ro,u);th.subVectors(e,l);const y=ro.dot(th),M=so.dot(th);if(M>=0&&y<=M)return t.copy(l);const E=y*p-d*M;if(E<=0&&p>=0&&M<=0)return f=p/(p-M),t.copy(r).addScaledVector(so,f);const S=_*M-y*g;if(S<=0&&g-_>=0&&y-M>=0)return K0.subVectors(l,o),f=(g-_)/(g-_+(y-M)),t.copy(o).addScaledVector(K0,f);const v=1/(S+E+x);return u=E*v,f=x*v,t.copy(r).addScaledVector(ro,u).addScaledVector(so,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ag={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vr={h:0,s:0,l:0},ec={h:0,s:0,l:0};function sh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class At{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=It.workingColorSpace){return this.r=e,this.g=t,this.b=r,It.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=It.workingColorSpace){if(e=Bd(e,1),t=Mt(t,0,1),r=Mt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=sh(u,l,e+1/3),this.g=sh(u,l,e),this.b=sh(u,l,e-1/3)}return It.colorSpaceToWorking(this,o),this}setStyle(e,t=di){function r(l){l!==void 0&&parseFloat(l)<1&&pt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:pt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);pt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=di){const r=Ag[e.toLowerCase()];return r!==void 0?this.setHex(r,t):pt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hr(e.r),this.g=hr(e.g),this.b=hr(e.b),this}copyLinearToSRGB(e){return this.r=go(e.r),this.g=go(e.g),this.b=go(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=di){return It.workingToColorSpace(Ln.copy(this),e),Math.round(Mt(Ln.r*255,0,255))*65536+Math.round(Mt(Ln.g*255,0,255))*256+Math.round(Mt(Ln.b*255,0,255))}getHexString(e=di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.workingToColorSpace(Ln.copy(this),t);const r=Ln.r,o=Ln.g,l=Ln.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let d,p;const _=(f+u)/2;if(f===u)d=0,p=0;else{const g=u-f;switch(p=_<=.5?g/(u+f):g/(2-u-f),u){case r:d=(o-l)/g+(o<l?6:0);break;case o:d=(l-r)/g+2;break;case l:d=(r-o)/g+4;break}d/=6}return e.h=d,e.s=p,e.l=_,e}getRGB(e,t=It.workingColorSpace){return It.workingToColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=di){It.workingToColorSpace(Ln.copy(this),e);const t=Ln.r,r=Ln.g,o=Ln.b;return e!==di?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Vr),this.setHSL(Vr.h+e,Vr.s+t,Vr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Vr),e.getHSL(ec);const r=Ta(Vr.h,ec.h,t),o=Ta(Vr.s,ec.s,t),l=Ta(Vr.l,ec.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new At;At.NAMES=Ag;let wM=0;class Ro extends Es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wM++}),this.uuid=Co(),this.name="",this.type="Material",this.blending=mo,this.side=$r,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lh,this.blendDst=Dh,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=N0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ks,this.stencilZFail=Ks,this.stencilZPass=Ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){pt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){pt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==mo&&(r.blending=this.blending),this.side!==$r&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Lh&&(r.blendSrc=this.blendSrc),this.blendDst!==Dh&&(r.blendDst=this.blendDst),this.blendEquation!==gs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==yo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==N0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ks&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ks&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ks&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const d=l[f];delete d.metadata,u.push(d)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class wo extends Ro{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=dg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ln=new H,tc=new ut;let bM=0;class Vi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bM++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=U0,this.updateRanges=[],this.gpuType=ur,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)tc.fromBufferAttribute(this,t),tc.applyMatrix3(e),this.setXY(t,tc.x,tc.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=uo(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=kn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=uo(t,this.array)),t}setX(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=uo(t,this.array)),t}setY(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=uo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=uo(t,this.array)),t}setW(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),r=kn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),r=kn(r,this.array),o=kn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),r=kn(r,this.array),o=kn(o,this.array),l=kn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==U0&&(e.usage=this.usage),e}}class Cg extends Vi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Rg extends Vi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Zt extends Vi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let TM=0;const hi=new Wt,oh=new un,oo=new H,ii=new Na,xa=new Na,yn=new H;class Nn extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:TM++}),this.uuid=Co(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wg(e)?Rg:Cg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new vt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,t,r){return hi.makeTranslation(e,t,r),this.applyMatrix4(hi),this}scale(e,t,r){return hi.makeScale(e,t,r),this.applyMatrix4(hi),this}lookAt(e){return oh.lookAt(e),oh.updateMatrix(),this.applyMatrix4(oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oo).negate(),this.translate(oo.x,oo.y,oo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Zt(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Na);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];ii.setFromBufferAttribute(l),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const r=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];xa.setFromBufferAttribute(f),this.morphTargetsRelative?(yn.addVectors(ii.min,xa.min),ii.expandByPoint(yn),yn.addVectors(ii.max,xa.max),ii.expandByPoint(yn)):(ii.expandByPoint(xa.min),ii.expandByPoint(xa.max))}ii.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)yn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(yn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],d=this.morphTargetsRelative;for(let p=0,_=f.count;p<_;p++)yn.fromBufferAttribute(f,p),d&&(oo.fromBufferAttribute(e,p),yn.add(oo)),o=Math.max(o,r.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&rn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){rn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],d=[];for(let B=0;B<r.count;B++)f[B]=new H,d[B]=new H;const p=new H,_=new H,g=new H,x=new ut,y=new ut,M=new ut,E=new H,S=new H;function v(B,A,w){p.fromBufferAttribute(r,B),_.fromBufferAttribute(r,A),g.fromBufferAttribute(r,w),x.fromBufferAttribute(l,B),y.fromBufferAttribute(l,A),M.fromBufferAttribute(l,w),_.sub(p),g.sub(p),y.sub(x),M.sub(x);const F=1/(y.x*M.y-M.x*y.y);isFinite(F)&&(E.copy(_).multiplyScalar(M.y).addScaledVector(g,-y.y).multiplyScalar(F),S.copy(g).multiplyScalar(y.x).addScaledVector(_,-M.x).multiplyScalar(F),f[B].add(E),f[A].add(E),f[w].add(E),d[B].add(S),d[A].add(S),d[w].add(S))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let B=0,A=P.length;B<A;++B){const w=P[B],F=w.start,V=w.count;for(let K=F,ie=F+V;K<ie;K+=3)v(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const R=new H,I=new H,k=new H,L=new H;function N(B){k.fromBufferAttribute(o,B),L.copy(k);const A=f[B];R.copy(A),R.sub(k.multiplyScalar(k.dot(A))).normalize(),I.crossVectors(L,A);const F=I.dot(d[B])<0?-1:1;u.setXYZW(B,R.x,R.y,R.z,F)}for(let B=0,A=P.length;B<A;++B){const w=P[B],F=w.start,V=w.count;for(let K=F,ie=F+V;K<ie;K+=3)N(e.getX(K+0)),N(e.getX(K+1)),N(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Vi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const o=new H,l=new H,u=new H,f=new H,d=new H,p=new H,_=new H,g=new H;if(e)for(let x=0,y=e.count;x<y;x+=3){const M=e.getX(x+0),E=e.getX(x+1),S=e.getX(x+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,E),u.fromBufferAttribute(t,S),_.subVectors(u,l),g.subVectors(o,l),_.cross(g),f.fromBufferAttribute(r,M),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,S),f.add(_),d.add(_),p.add(_),r.setXYZ(M,f.x,f.y,f.z),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,y=t.count;x<y;x+=3)o.fromBufferAttribute(t,x+0),l.fromBufferAttribute(t,x+1),u.fromBufferAttribute(t,x+2),_.subVectors(u,l),g.subVectors(o,l),_.cross(g),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)yn.fromBufferAttribute(e,t),yn.normalize(),e.setXYZ(t,yn.x,yn.y,yn.z)}toNonIndexed(){function e(f,d){const p=f.array,_=f.itemSize,g=f.normalized,x=new p.constructor(d.length*_);let y=0,M=0;for(let E=0,S=d.length;E<S;E++){f.isInterleavedBufferAttribute?y=d[E]*f.data.stride+f.offset:y=d[E]*_;for(let v=0;v<_;v++)x[M++]=p[y++]}return new Vi(x,_,g)}if(this.index===null)return pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Nn,r=this.index.array,o=this.attributes;for(const f in o){const d=o[f],p=e(d,r);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const d=[],p=l[f];for(let _=0,g=p.length;_<g;_++){const x=p[_],y=e(x,r);d.push(y)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,d=u.length;f<d;f++){const p=u[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(e[p]=d[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const p=r[d];e.data.attributes[d]=p.toJSON(e.data)}const o={};let l=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],_=[];for(let g=0,x=p.length;g<x;g++){const y=p[g];_.push(y.toJSON(e.data))}_.length>0&&(o[d]=_,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const _=o[p];this.setAttribute(p,_.clone(t))}const l=e.morphAttributes;for(const p in l){const _=[],g=l[p];for(let x=0,y=g.length;x<y;x++)_.push(g[x].clone(t));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,_=u.length;p<_;p++){const g=u[p];this.addGroup(g.start,g.count,g.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Z0=new Wt,fs=new $c,nc=new qc,Q0=new H,ic=new H,rc=new H,sc=new H,ah=new H,oc=new H,J0=new H,ac=new H;class Re extends un{constructor(e=new Nn,t=new wo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){oc.set(0,0,0);for(let d=0,p=l.length;d<p;d++){const _=f[d],g=l[d];_!==0&&(ah.fromBufferAttribute(g,e),u?oc.addScaledVector(ah,_):oc.addScaledVector(ah.sub(t),_))}t.add(oc)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),nc.copy(r.boundingSphere),nc.applyMatrix4(l),fs.copy(e.ray).recast(e.near),!(nc.containsPoint(fs.origin)===!1&&(fs.intersectSphere(nc,Q0)===null||fs.origin.distanceToSquared(Q0)>(e.far-e.near)**2))&&(Z0.copy(l).invert(),fs.copy(e.ray).applyMatrix4(Z0),!(r.boundingBox!==null&&fs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,fs)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,f=l.index,d=l.attributes.position,p=l.attributes.uv,_=l.attributes.uv1,g=l.attributes.normal,x=l.groups,y=l.drawRange;if(f!==null)if(Array.isArray(u))for(let M=0,E=x.length;M<E;M++){const S=x[M],v=u[S.materialIndex],P=Math.max(S.start,y.start),R=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let I=P,k=R;I<k;I+=3){const L=f.getX(I),N=f.getX(I+1),B=f.getX(I+2);o=lc(this,v,e,r,p,_,g,L,N,B),o&&(o.faceIndex=Math.floor(I/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,y.start),E=Math.min(f.count,y.start+y.count);for(let S=M,v=E;S<v;S+=3){const P=f.getX(S),R=f.getX(S+1),I=f.getX(S+2);o=lc(this,u,e,r,p,_,g,P,R,I),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(u))for(let M=0,E=x.length;M<E;M++){const S=x[M],v=u[S.materialIndex],P=Math.max(S.start,y.start),R=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let I=P,k=R;I<k;I+=3){const L=I,N=I+1,B=I+2;o=lc(this,v,e,r,p,_,g,L,N,B),o&&(o.faceIndex=Math.floor(I/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,y.start),E=Math.min(d.count,y.start+y.count);for(let S=M,v=E;S<v;S+=3){const P=S,R=S+1,I=S+2;o=lc(this,u,e,r,p,_,g,P,R,I),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function AM(s,e,t,r,o,l,u,f){let d;if(e.side===$n?d=r.intersectTriangle(u,l,o,!0,f):d=r.intersectTriangle(o,l,u,e.side===$r,f),d===null)return null;ac.copy(f),ac.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(ac);return p<t.near||p>t.far?null:{distance:p,point:ac.clone(),object:s}}function lc(s,e,t,r,o,l,u,f,d,p){s.getVertexPosition(f,ic),s.getVertexPosition(d,rc),s.getVertexPosition(p,sc);const _=AM(s,e,t,r,ic,rc,sc,J0);if(_){const g=new H;mi.getBarycoord(J0,ic,rc,sc,g),o&&(_.uv=mi.getInterpolatedAttribute(o,f,d,p,g,new ut)),l&&(_.uv1=mi.getInterpolatedAttribute(l,f,d,p,g,new ut)),u&&(_.normal=mi.getInterpolatedAttribute(u,f,d,p,g,new H),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:f,b:d,c:p,normal:new H,materialIndex:0};mi.getNormal(ic,rc,sc,x.normal),_.face=x,_.barycoord=g}return _}class nn extends Nn{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const d=[],p=[],_=[],g=[];let x=0,y=0;M("z","y","x",-1,-1,r,t,e,u,l,0),M("z","y","x",1,-1,r,t,-e,u,l,1),M("x","z","y",1,1,e,r,t,o,u,2),M("x","z","y",1,-1,e,r,-t,o,u,3),M("x","y","z",1,-1,e,t,r,o,l,4),M("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(d),this.setAttribute("position",new Zt(p,3)),this.setAttribute("normal",new Zt(_,3)),this.setAttribute("uv",new Zt(g,2));function M(E,S,v,P,R,I,k,L,N,B,A){const w=I/N,F=k/B,V=I/2,K=k/2,ie=L/2,ne=N+1,ce=B+1;let ae=0,j=0;const re=new H;for(let D=0;D<ce;D++){const Q=D*F-K;for(let ve=0;ve<ne;ve++){const Fe=ve*w-V;re[E]=Fe*P,re[S]=Q*R,re[v]=ie,p.push(re.x,re.y,re.z),re[E]=0,re[S]=0,re[v]=L>0?1:-1,_.push(re.x,re.y,re.z),g.push(ve/N),g.push(1-D/B),ae+=1}}for(let D=0;D<B;D++)for(let Q=0;Q<N;Q++){const ve=x+Q+ne*D,Fe=x+Q+ne*(D+1),Ne=x+(Q+1)+ne*(D+1),Je=x+(Q+1)+ne*D;d.push(ve,Fe,Je),d.push(Fe,Ne,Je),j+=6}f.addGroup(y,j,A),y+=j,x+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bo(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Bn(s){const e={};for(let t=0;t<s.length;t++){const r=bo(s[t]);for(const o in r)e[o]=r[o]}return e}function CM(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Pg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:It.workingColorSpace}const RM={clone:bo,merge:Bn};var PM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,LM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends Ro{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=PM,this.fragmentShader=LM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bo(e.uniforms),this.uniformsGroups=CM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Lg extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hr=new H,ex=new ut,tx=new ut;class ri extends Lg{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Da*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Da*2*Math.atan(Math.tan(xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hr.x,Hr.y).multiplyScalar(-e/Hr.z),Hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Hr.x,Hr.y).multiplyScalar(-e/Hr.z)}getViewSize(e,t){return this.getViewBounds(e,ex,tx),t.subVectors(tx,ex)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xo*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/d,t-=u.offsetY*r/p,o*=u.width/d,r*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ao=-90,lo=1;class DM extends un{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ri(ao,lo,e,t);o.layers=this.layers,this.add(o);const l=new ri(ao,lo,e,t);l.layers=this.layers,this.add(l);const u=new ri(ao,lo,e,t);u.layers=this.layers,this.add(u);const f=new ri(ao,lo,e,t);f.layers=this.layers,this.add(f);const d=new ri(ao,lo,e,t);d.layers=this.layers,this.add(d);const p=new ri(ao,lo,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,f,d]=t;for(const p of t)this.remove(p);if(e===Bi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Fc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,d,p,_]=this.children,g=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,u),e.setRenderTarget(r,2,o),e.render(t,f),e.setRenderTarget(r,3,o),e.render(t,d),e.setRenderTarget(r,4,o),e.render(t,p),r.texture.generateMipmaps=E,e.setRenderTarget(r,5,o),e.render(t,_),e.setRenderTarget(g,x,y),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class Dg extends zn{constructor(e=[],t=So,r,o,l,u,f,d,p,_){super(e,t,r,o,l,u,f,d,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class IM extends Ms{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Dg(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new nn(5,5,5),l=new Wi({name:"CubemapFromEquirect",uniforms:bo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:$n,blending:fr});l.uniforms.tEquirect.value=t;const u=new Re(o,l),f=t.minFilter;return t.minFilter===ys&&(t.minFilter=xi),new DM(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}class cc extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const NM={type:"move"};class lh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const f=this._targetRay,d=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const E of e.hand.values()){const S=t.getJointPose(E,r),v=this._getHandJoint(p,E);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=_.position.distanceTo(g.position),y=.02,M=.005;p.inputState.pinching&&x>y+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=y-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(NM)))}return f!==null&&(f.visible=o!==null),d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new cc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class UM extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class FM extends zn{constructor(e=null,t=1,r=1,o,l,u,f,d,p=si,_=si,g,x){super(null,u,f,d,p,_,o,l,g,x),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ch=new H,OM=new H,kM=new vt;class Wr{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=ch.subVectors(r,t).cross(OM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(ch),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||kM.getNormalMatrix(e),o=this.coplanarPoint(ch).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hs=new qc,BM=new ut(.5,.5),uc=new H;class Hd{constructor(e=new Wr,t=new Wr,r=new Wr,o=new Wr,l=new Wr,u=new Wr){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Bi,r=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],d=l[2],p=l[3],_=l[4],g=l[5],x=l[6],y=l[7],M=l[8],E=l[9],S=l[10],v=l[11],P=l[12],R=l[13],I=l[14],k=l[15];if(o[0].setComponents(p-u,y-_,v-M,k-P).normalize(),o[1].setComponents(p+u,y+_,v+M,k+P).normalize(),o[2].setComponents(p+f,y+g,v+E,k+R).normalize(),o[3].setComponents(p-f,y-g,v-E,k-R).normalize(),r)o[4].setComponents(d,x,S,I).normalize(),o[5].setComponents(p-d,y-x,v-S,k-I).normalize();else if(o[4].setComponents(p-d,y-x,v-S,k-I).normalize(),t===Bi)o[5].setComponents(p+d,y+x,v+S,k+I).normalize();else if(t===Fc)o[5].setComponents(d,x,S,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(e){hs.center.set(0,0,0);const t=BM.distanceTo(e.center);return hs.radius=.7071067811865476+t,hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(uc.x=o.normal.x>0?e.max.x:e.min.x,uc.y=o.normal.y>0?e.max.y:e.min.y,uc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(uc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Gd extends Ro{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new At(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const kc=new H,Bc=new H,nx=new Wt,ga=new $c,fc=new qc,uh=new H,ix=new H;class ar extends un{constructor(e=new Nn,t=new Gd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)kc.fromBufferAttribute(t,o-1),Bc.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=kc.distanceTo(Bc);e.setAttribute("lineDistance",new Zt(r,1))}else pt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),fc.copy(r.boundingSphere),fc.applyMatrix4(o),fc.radius+=l,e.ray.intersectsSphere(fc)===!1)return;nx.copy(o).invert(),ga.copy(e.ray).applyMatrix4(nx);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,p=this.isLineSegments?2:1,_=r.index,x=r.attributes.position;if(_!==null){const y=Math.max(0,u.start),M=Math.min(_.count,u.start+u.count);for(let E=y,S=M-1;E<S;E+=p){const v=_.getX(E),P=_.getX(E+1),R=hc(this,e,ga,d,v,P,E);R&&t.push(R)}if(this.isLineLoop){const E=_.getX(M-1),S=_.getX(y),v=hc(this,e,ga,d,E,S,M-1);v&&t.push(v)}}else{const y=Math.max(0,u.start),M=Math.min(x.count,u.start+u.count);for(let E=y,S=M-1;E<S;E+=p){const v=hc(this,e,ga,d,E,E+1,E);v&&t.push(v)}if(this.isLineLoop){const E=hc(this,e,ga,d,M-1,y,M-1);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function hc(s,e,t,r,o,l,u){const f=s.geometry.attributes.position;if(kc.fromBufferAttribute(f,o),Bc.fromBufferAttribute(f,l),t.distanceSqToSegment(kc,Bc,uh,ix)>r)return;uh.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(uh);if(!(p<e.near||p>e.far))return{distance:p,point:ix.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}const rx=new H,sx=new H;class zM extends ar{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,l=t.count;o<l;o+=2)rx.fromBufferAttribute(t,o),sx.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+rx.distanceTo(sx);e.setAttribute("lineDistance",new Zt(r,1))}else pt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ig extends zn{constructor(e,t,r=Ss,o,l,u,f=si,d=si,p,_=Ra,g=1){if(_!==Ra&&_!==Pa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:t,depth:g};super(x,o,l,u,f,d,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ng extends zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Dn extends Nn{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,f=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:d};const p=this;o=Math.floor(o),l=Math.floor(l);const _=[],g=[],x=[],y=[];let M=0;const E=[],S=r/2;let v=0;P(),u===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(_),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(x,3)),this.setAttribute("uv",new Zt(y,2));function P(){const I=new H,k=new H;let L=0;const N=(t-e)/r;for(let B=0;B<=l;B++){const A=[],w=B/l,F=w*(t-e)+e;for(let V=0;V<=o;V++){const K=V/o,ie=K*d+f,ne=Math.sin(ie),ce=Math.cos(ie);k.x=F*ne,k.y=-w*r+S,k.z=F*ce,g.push(k.x,k.y,k.z),I.set(ne,N,ce).normalize(),x.push(I.x,I.y,I.z),y.push(K,1-w),A.push(M++)}E.push(A)}for(let B=0;B<o;B++)for(let A=0;A<l;A++){const w=E[A][B],F=E[A+1][B],V=E[A+1][B+1],K=E[A][B+1];(e>0||A!==0)&&(_.push(w,F,K),L+=3),(t>0||A!==l-1)&&(_.push(F,V,K),L+=3)}p.addGroup(v,L,0),v+=L}function R(I){const k=M,L=new ut,N=new H;let B=0;const A=I===!0?e:t,w=I===!0?1:-1;for(let V=1;V<=o;V++)g.push(0,S*w,0),x.push(0,w,0),y.push(.5,.5),M++;const F=M;for(let V=0;V<=o;V++){const ie=V/o*d+f,ne=Math.cos(ie),ce=Math.sin(ie);N.x=A*ce,N.y=S*w,N.z=A*ne,g.push(N.x,N.y,N.z),x.push(0,w,0),L.x=ne*.5+.5,L.y=ce*.5*w+.5,y.push(L.x,L.y),M++}for(let V=0;V<o;V++){const K=k+V,ie=F+V;I===!0?_.push(ie,ie+1,K):_.push(ie+1,ie,K),B+=3}p.addGroup(v,B,I===!0?1:2),v+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wd extends Nn{constructor(e=[],t=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:o};const l=[],u=[];f(o),p(r),_(),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(l.slice(),3)),this.setAttribute("uv",new Zt(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function f(P){const R=new H,I=new H,k=new H;for(let L=0;L<t.length;L+=3)y(t[L+0],R),y(t[L+1],I),y(t[L+2],k),d(R,I,k,P)}function d(P,R,I,k){const L=k+1,N=[];for(let B=0;B<=L;B++){N[B]=[];const A=P.clone().lerp(I,B/L),w=R.clone().lerp(I,B/L),F=L-B;for(let V=0;V<=F;V++)V===0&&B===L?N[B][V]=A:N[B][V]=A.clone().lerp(w,V/F)}for(let B=0;B<L;B++)for(let A=0;A<2*(L-B)-1;A++){const w=Math.floor(A/2);A%2===0?(x(N[B][w+1]),x(N[B+1][w]),x(N[B][w])):(x(N[B][w+1]),x(N[B+1][w+1]),x(N[B+1][w]))}}function p(P){const R=new H;for(let I=0;I<l.length;I+=3)R.x=l[I+0],R.y=l[I+1],R.z=l[I+2],R.normalize().multiplyScalar(P),l[I+0]=R.x,l[I+1]=R.y,l[I+2]=R.z}function _(){const P=new H;for(let R=0;R<l.length;R+=3){P.x=l[R+0],P.y=l[R+1],P.z=l[R+2];const I=S(P)/2/Math.PI+.5,k=v(P)/Math.PI+.5;u.push(I,1-k)}M(),g()}function g(){for(let P=0;P<u.length;P+=6){const R=u[P+0],I=u[P+2],k=u[P+4],L=Math.max(R,I,k),N=Math.min(R,I,k);L>.9&&N<.1&&(R<.2&&(u[P+0]+=1),I<.2&&(u[P+2]+=1),k<.2&&(u[P+4]+=1))}}function x(P){l.push(P.x,P.y,P.z)}function y(P,R){const I=P*3;R.x=e[I+0],R.y=e[I+1],R.z=e[I+2]}function M(){const P=new H,R=new H,I=new H,k=new H,L=new ut,N=new ut,B=new ut;for(let A=0,w=0;A<l.length;A+=9,w+=6){P.set(l[A+0],l[A+1],l[A+2]),R.set(l[A+3],l[A+4],l[A+5]),I.set(l[A+6],l[A+7],l[A+8]),L.set(u[w+0],u[w+1]),N.set(u[w+2],u[w+3]),B.set(u[w+4],u[w+5]),k.copy(P).add(R).add(I).divideScalar(3);const F=S(k);E(L,w+0,P,F),E(N,w+2,R,F),E(B,w+4,I,F)}}function E(P,R,I,k){k<0&&P.x===1&&(u[R]=P.x-1),I.x===0&&I.z===0&&(u[R]=k/2/Math.PI+.5)}function S(P){return Math.atan2(P.z,-P.x)}function v(P){return Math.atan2(-P.y,Math.sqrt(P.x*P.x+P.z*P.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wd(e.vertices,e.indices,e.radius,e.details)}}const dc=new H,pc=new H,fh=new H,mc=new mi;class VM extends Nn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const o=Math.pow(10,4),l=Math.cos(xo*t),u=e.getIndex(),f=e.getAttribute("position"),d=u?u.count:f.count,p=[0,0,0],_=["a","b","c"],g=new Array(3),x={},y=[];for(let M=0;M<d;M+=3){u?(p[0]=u.getX(M),p[1]=u.getX(M+1),p[2]=u.getX(M+2)):(p[0]=M,p[1]=M+1,p[2]=M+2);const{a:E,b:S,c:v}=mc;if(E.fromBufferAttribute(f,p[0]),S.fromBufferAttribute(f,p[1]),v.fromBufferAttribute(f,p[2]),mc.getNormal(fh),g[0]=`${Math.round(E.x*o)},${Math.round(E.y*o)},${Math.round(E.z*o)}`,g[1]=`${Math.round(S.x*o)},${Math.round(S.y*o)},${Math.round(S.z*o)}`,g[2]=`${Math.round(v.x*o)},${Math.round(v.y*o)},${Math.round(v.z*o)}`,!(g[0]===g[1]||g[1]===g[2]||g[2]===g[0]))for(let P=0;P<3;P++){const R=(P+1)%3,I=g[P],k=g[R],L=mc[_[P]],N=mc[_[R]],B=`${I}_${k}`,A=`${k}_${I}`;A in x&&x[A]?(fh.dot(x[A].normal)<=l&&(y.push(L.x,L.y,L.z),y.push(N.x,N.y,N.z)),x[A]=null):B in x||(x[B]={index0:p[P],index1:p[R],normal:fh.clone()})}}for(const M in x)if(x[M]){const{index0:E,index1:S}=x[M];dc.fromBufferAttribute(f,E),pc.fromBufferAttribute(f,S),y.push(dc.x,dc.y,dc.z),y.push(pc.x,pc.y,pc.z)}this.setAttribute("position",new Zt(y,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ho extends Wd{constructor(e=1,t=0){const r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],o=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,o,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ho(e.radius,e.detail)}}class Po extends Nn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(r),d=Math.floor(o),p=f+1,_=d+1,g=e/f,x=t/d,y=[],M=[],E=[],S=[];for(let v=0;v<_;v++){const P=v*x-u;for(let R=0;R<p;R++){const I=R*g-l;M.push(I,-P,0),E.push(0,0,1),S.push(R/f),S.push(1-v/d)}}for(let v=0;v<d;v++)for(let P=0;P<f;P++){const R=P+p*v,I=P+p*(v+1),k=P+1+p*(v+1),L=P+1+p*v;y.push(R,I,L),y.push(I,k,L)}this.setIndex(y),this.setAttribute("position",new Zt(M,3)),this.setAttribute("normal",new Zt(E,3)),this.setAttribute("uv",new Zt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Po(e.width,e.height,e.widthSegments,e.heightSegments)}}class _o extends Nn{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const d=Math.min(u+f,Math.PI);let p=0;const _=[],g=new H,x=new H,y=[],M=[],E=[],S=[];for(let v=0;v<=r;v++){const P=[],R=v/r;let I=0;v===0&&u===0?I=.5/t:v===r&&d===Math.PI&&(I=-.5/t);for(let k=0;k<=t;k++){const L=k/t;g.x=-e*Math.cos(o+L*l)*Math.sin(u+R*f),g.y=e*Math.cos(u+R*f),g.z=e*Math.sin(o+L*l)*Math.sin(u+R*f),M.push(g.x,g.y,g.z),x.copy(g).normalize(),E.push(x.x,x.y,x.z),S.push(L+I,1-R),P.push(p++)}_.push(P)}for(let v=0;v<r;v++)for(let P=0;P<t;P++){const R=_[v][P+1],I=_[v][P],k=_[v+1][P],L=_[v+1][P+1];(v!==0||u>0)&&y.push(R,I,L),(v!==r-1||d<Math.PI)&&y.push(I,k,L)}this.setIndex(y),this.setAttribute("position",new Zt(M,3)),this.setAttribute("normal",new Zt(E,3)),this.setAttribute("uv",new Zt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _s extends Nn{constructor(e=1,t=.4,r=12,o=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:o,arc:l},r=Math.floor(r),o=Math.floor(o);const u=[],f=[],d=[],p=[],_=new H,g=new H,x=new H;for(let y=0;y<=r;y++)for(let M=0;M<=o;M++){const E=M/o*l,S=y/r*Math.PI*2;g.x=(e+t*Math.cos(S))*Math.cos(E),g.y=(e+t*Math.cos(S))*Math.sin(E),g.z=t*Math.sin(S),f.push(g.x,g.y,g.z),_.x=e*Math.cos(E),_.y=e*Math.sin(E),x.subVectors(g,_).normalize(),d.push(x.x,x.y,x.z),p.push(M/o),p.push(y/r)}for(let y=1;y<=r;y++)for(let M=1;M<=o;M++){const E=(o+1)*y+M-1,S=(o+1)*(y-1)+M-1,v=(o+1)*(y-1)+M,P=(o+1)*y+M;u.push(E,S,P),u.push(S,v,P)}this.setIndex(u),this.setAttribute("position",new Zt(f,3)),this.setAttribute("normal",new Zt(d,3)),this.setAttribute("uv",new Zt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ox extends Ro{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mg,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class HM extends Ro{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=OS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class GM extends Ro{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class jd extends un{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new At(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const hh=new Wt,ax=new H,lx=new H;class Ug{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.mapType=Gi,this.map=null,this.mapPass=null,this.matrix=new Wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hd,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;ax.setFromMatrixPosition(e.matrixWorld),t.position.copy(ax),lx.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lx),t.updateMatrixWorld(),hh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hh,t.coordinateSystem,t.reversedDepth),t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(hh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const cx=new Wt,_a=new H,dh=new H;class WM extends Ug{constructor(){super(new ri(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ut(4,2),this._viewportCount=6,this._viewports=[new zt(2,1,1,1),new zt(0,1,1,1),new zt(3,1,1,1),new zt(1,1,1,1),new zt(3,0,1,1),new zt(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,o=this.matrix,l=e.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),_a.setFromMatrixPosition(e.matrixWorld),r.position.copy(_a),dh.copy(r.position),dh.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(dh),r.updateMatrixWorld(),o.makeTranslation(-_a.x,-_a.y,-_a.z),cx.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cx,r.coordinateSystem,r.reversedDepth)}}class jM extends jd{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new WM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Fg extends Lg{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=_*this.view.offsetY,d=f-_*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class XM extends Ug{constructor(){super(new Fg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class YM extends jd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.shadow=new XM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class qM extends jd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class $M extends ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const ux=new Wt;class Og{constructor(e,t,r=0,o=1/0){this.ray=new $c(e,t),this.near=r,this.far=o,this.camera=null,this.layers=new Vd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):rn("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ux.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ux),this}intersectObject(e,t=!0,r=[]){return _d(e,this,r,t),r.sort(fx),r}intersectObjects(e,t=!0,r=[]){for(let o=0,l=e.length;o<l;o++)_d(e[o],this,r,t);return r.sort(fx),r}}function fx(s,e){return s.distance-e.distance}function _d(s,e,t,r){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(o=!1),o===!0&&r===!0){const l=s.children;for(let u=0,f=l.length;u<f;u++)_d(l[u],e,t,!0)}}class hx{constructor(e=1,t=0,r=0){this.radius=e,this.phi=t,this.theta=r}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Mt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class kg extends Es{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){pt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function dx(s,e,t,r){const o=KM(r);switch(t){case vg:return s*e;case Sg:return s*e/o.components*o.byteLength;case Ud:return s*e/o.components*o.byteLength;case Fd:return s*e*2/o.components*o.byteLength;case Od:return s*e*2/o.components*o.byteLength;case yg:return s*e*3/o.components*o.byteLength;case Ci:return s*e*4/o.components*o.byteLength;case kd:return s*e*4/o.components*o.byteLength;case Cc:case Rc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Pc:case Lc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case jh:case Yh:return Math.max(s,16)*Math.max(e,8)/4;case Wh:case Xh:return Math.max(s,8)*Math.max(e,8)/2;case qh:case $h:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Kh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Zh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Qh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Jh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ed:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case td:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case nd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case id:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case rd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case sd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case od:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case ad:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ld:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case cd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ud:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case fd:case hd:case dd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case pd:case md:return Math.ceil(s/4)*Math.ceil(e/4)*8;case xd:case gd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function KM(s){switch(s){case Gi:case mg:return{byteLength:1,components:1};case Aa:case xg:case Ao:return{byteLength:2,components:1};case Id:case Nd:return{byteLength:2,components:4};case Ss:case Dd:case ur:return{byteLength:4,components:1};case gg:case _g:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ld}}));typeof window<"u"&&(window.__THREE__?pt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ld);function Bg(){let s=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function ZM(s){const e=new WeakMap;function t(f,d){const p=f.array,_=f.usage,g=p.byteLength,x=s.createBuffer();s.bindBuffer(d,x),s.bufferData(d,p,_),f.onUploadCallback();let y;if(p instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=s.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=s.SHORT;else if(p instanceof Uint32Array)y=s.UNSIGNED_INT;else if(p instanceof Int32Array)y=s.INT;else if(p instanceof Int8Array)y=s.BYTE;else if(p instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:g}}function r(f,d,p){const _=d.array,g=d.updateRanges;if(s.bindBuffer(p,f),g.length===0)s.bufferSubData(p,0,_);else{g.sort((y,M)=>y.start-M.start);let x=0;for(let y=1;y<g.length;y++){const M=g[x],E=g[y];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++x,g[x]=E)}g.length=x+1;for(let y=0,M=g.length;y<M;y++){const E=g[y];s.bufferSubData(p,E.start*_.BYTES_PER_ELEMENT,_,E.start,E.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(s.deleteBuffer(d.buffer),e.delete(f))}function u(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=e.get(f);(!_||_.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,d));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,d),p.version=f.version}}return{get:o,remove:l,update:u}}var QM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,JM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,e1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,t1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,i1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,r1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,s1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,o1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,a1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,l1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,c1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,u1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,f1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,h1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,d1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,p1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,m1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,x1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,g1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,v1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,y1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,S1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,M1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,E1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,w1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,b1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,T1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,A1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,C1="gl_FragColor = linearToOutputTexel( gl_FragColor );",R1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,P1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,L1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,D1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,I1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,N1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,U1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,F1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,O1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,k1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,B1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,z1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,V1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,H1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,G1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,W1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,j1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,X1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Y1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,q1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,K1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Z1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Q1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,J1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,aE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,pE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_E=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,SE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ME=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,EE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,TE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,AE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,CE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,PE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,LE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,DE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,IE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,NE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,UE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,FE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,OE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,BE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,VE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,HE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,WE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,XE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,YE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,KE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ZE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,QE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ew=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ow=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,aw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_w=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Mw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ew=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ww=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Tw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Aw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Rw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yt={alphahash_fragment:QM,alphahash_pars_fragment:JM,alphamap_fragment:e1,alphamap_pars_fragment:t1,alphatest_fragment:n1,alphatest_pars_fragment:i1,aomap_fragment:r1,aomap_pars_fragment:s1,batching_pars_vertex:o1,batching_vertex:a1,begin_vertex:l1,beginnormal_vertex:c1,bsdfs:u1,iridescence_fragment:f1,bumpmap_pars_fragment:h1,clipping_planes_fragment:d1,clipping_planes_pars_fragment:p1,clipping_planes_pars_vertex:m1,clipping_planes_vertex:x1,color_fragment:g1,color_pars_fragment:_1,color_pars_vertex:v1,color_vertex:y1,common:S1,cube_uv_reflection_fragment:M1,defaultnormal_vertex:E1,displacementmap_pars_vertex:w1,displacementmap_vertex:b1,emissivemap_fragment:T1,emissivemap_pars_fragment:A1,colorspace_fragment:C1,colorspace_pars_fragment:R1,envmap_fragment:P1,envmap_common_pars_fragment:L1,envmap_pars_fragment:D1,envmap_pars_vertex:I1,envmap_physical_pars_fragment:W1,envmap_vertex:N1,fog_vertex:U1,fog_pars_vertex:F1,fog_fragment:O1,fog_pars_fragment:k1,gradientmap_pars_fragment:B1,lightmap_pars_fragment:z1,lights_lambert_fragment:V1,lights_lambert_pars_fragment:H1,lights_pars_begin:G1,lights_toon_fragment:j1,lights_toon_pars_fragment:X1,lights_phong_fragment:Y1,lights_phong_pars_fragment:q1,lights_physical_fragment:$1,lights_physical_pars_fragment:K1,lights_fragment_begin:Z1,lights_fragment_maps:Q1,lights_fragment_end:J1,logdepthbuf_fragment:eE,logdepthbuf_pars_fragment:tE,logdepthbuf_pars_vertex:nE,logdepthbuf_vertex:iE,map_fragment:rE,map_pars_fragment:sE,map_particle_fragment:oE,map_particle_pars_fragment:aE,metalnessmap_fragment:lE,metalnessmap_pars_fragment:cE,morphinstance_vertex:uE,morphcolor_vertex:fE,morphnormal_vertex:hE,morphtarget_pars_vertex:dE,morphtarget_vertex:pE,normal_fragment_begin:mE,normal_fragment_maps:xE,normal_pars_fragment:gE,normal_pars_vertex:_E,normal_vertex:vE,normalmap_pars_fragment:yE,clearcoat_normal_fragment_begin:SE,clearcoat_normal_fragment_maps:ME,clearcoat_pars_fragment:EE,iridescence_pars_fragment:wE,opaque_fragment:bE,packing:TE,premultiplied_alpha_fragment:AE,project_vertex:CE,dithering_fragment:RE,dithering_pars_fragment:PE,roughnessmap_fragment:LE,roughnessmap_pars_fragment:DE,shadowmap_pars_fragment:IE,shadowmap_pars_vertex:NE,shadowmap_vertex:UE,shadowmask_pars_fragment:FE,skinbase_vertex:OE,skinning_pars_vertex:kE,skinning_vertex:BE,skinnormal_vertex:zE,specularmap_fragment:VE,specularmap_pars_fragment:HE,tonemapping_fragment:GE,tonemapping_pars_fragment:WE,transmission_fragment:jE,transmission_pars_fragment:XE,uv_pars_fragment:YE,uv_pars_vertex:qE,uv_vertex:$E,worldpos_vertex:KE,background_vert:ZE,background_frag:QE,backgroundCube_vert:JE,backgroundCube_frag:ew,cube_vert:tw,cube_frag:nw,depth_vert:iw,depth_frag:rw,distanceRGBA_vert:sw,distanceRGBA_frag:ow,equirect_vert:aw,equirect_frag:lw,linedashed_vert:cw,linedashed_frag:uw,meshbasic_vert:fw,meshbasic_frag:hw,meshlambert_vert:dw,meshlambert_frag:pw,meshmatcap_vert:mw,meshmatcap_frag:xw,meshnormal_vert:gw,meshnormal_frag:_w,meshphong_vert:vw,meshphong_frag:yw,meshphysical_vert:Sw,meshphysical_frag:Mw,meshtoon_vert:Ew,meshtoon_frag:ww,points_vert:bw,points_frag:Tw,shadow_vert:Aw,shadow_frag:Cw,sprite_vert:Rw,sprite_frag:Pw},De={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},ki={basic:{uniforms:Bn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:yt.meshbasic_vert,fragmentShader:yt.meshbasic_frag},lambert:{uniforms:Bn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new At(0)}}]),vertexShader:yt.meshlambert_vert,fragmentShader:yt.meshlambert_frag},phong:{uniforms:Bn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:yt.meshphong_vert,fragmentShader:yt.meshphong_frag},standard:{uniforms:Bn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag},toon:{uniforms:Bn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new At(0)}}]),vertexShader:yt.meshtoon_vert,fragmentShader:yt.meshtoon_frag},matcap:{uniforms:Bn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:yt.meshmatcap_vert,fragmentShader:yt.meshmatcap_frag},points:{uniforms:Bn([De.points,De.fog]),vertexShader:yt.points_vert,fragmentShader:yt.points_frag},dashed:{uniforms:Bn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yt.linedashed_vert,fragmentShader:yt.linedashed_frag},depth:{uniforms:Bn([De.common,De.displacementmap]),vertexShader:yt.depth_vert,fragmentShader:yt.depth_frag},normal:{uniforms:Bn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:yt.meshnormal_vert,fragmentShader:yt.meshnormal_frag},sprite:{uniforms:Bn([De.sprite,De.fog]),vertexShader:yt.sprite_vert,fragmentShader:yt.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yt.background_vert,fragmentShader:yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:yt.backgroundCube_vert,fragmentShader:yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yt.cube_vert,fragmentShader:yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yt.equirect_vert,fragmentShader:yt.equirect_frag},distanceRGBA:{uniforms:Bn([De.common,De.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yt.distanceRGBA_vert,fragmentShader:yt.distanceRGBA_frag},shadow:{uniforms:Bn([De.lights,De.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:yt.shadow_vert,fragmentShader:yt.shadow_frag}};ki.physical={uniforms:Bn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag};const xc={r:0,b:0,g:0},ds=new Ri,Lw=new Wt;function Dw(s,e,t,r,o,l,u){const f=new At(0);let d=l===!0?0:1,p,_,g=null,x=0,y=null;function M(R){let I=R.isScene===!0?R.background:null;return I&&I.isTexture&&(I=(R.backgroundBlurriness>0?t:e).get(I)),I}function E(R){let I=!1;const k=M(R);k===null?v(f,d):k&&k.isColor&&(v(k,1),I=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?r.buffers.color.setClear(0,0,0,1,u):L==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||I)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(R,I){const k=M(I);k&&(k.isCubeTexture||k.mapping===Yc)?(_===void 0&&(_=new Re(new nn(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:bo(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(L,N,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(_)),ds.copy(I.backgroundRotation),ds.x*=-1,ds.y*=-1,ds.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),_.material.uniforms.envMap.value=k,_.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(Lw.makeRotationFromEuler(ds)),_.material.toneMapped=It.getTransfer(k.colorSpace)!==kt,(g!==k||x!==k.version||y!==s.toneMapping)&&(_.material.needsUpdate=!0,g=k,x=k.version,y=s.toneMapping),_.layers.enableAll(),R.unshift(_,_.geometry,_.material,0,0,null)):k&&k.isTexture&&(p===void 0&&(p=new Re(new Po(2,2),new Wi({name:"BackgroundMaterial",uniforms:bo(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:$r,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=k,p.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,p.material.toneMapped=It.getTransfer(k.colorSpace)!==kt,k.matrixAutoUpdate===!0&&k.updateMatrix(),p.material.uniforms.uvTransform.value.copy(k.matrix),(g!==k||x!==k.version||y!==s.toneMapping)&&(p.material.needsUpdate=!0,g=k,x=k.version,y=s.toneMapping),p.layers.enableAll(),R.unshift(p,p.geometry,p.material,0,0,null))}function v(R,I){R.getRGB(xc,Pg(s)),r.buffers.color.setClear(xc.r,xc.g,xc.b,I,u)}function P(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(R,I=1){f.set(R),d=I,v(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(R){d=R,v(f,d)},render:E,addToRenderList:S,dispose:P}}function Iw(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=x(null);let l=o,u=!1;function f(w,F,V,K,ie){let ne=!1;const ce=g(K,V,F);l!==ce&&(l=ce,p(l.object)),ne=y(w,K,V,ie),ne&&M(w,K,V,ie),ie!==null&&e.update(ie,s.ELEMENT_ARRAY_BUFFER),(ne||u)&&(u=!1,I(w,F,V,K),ie!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function d(){return s.createVertexArray()}function p(w){return s.bindVertexArray(w)}function _(w){return s.deleteVertexArray(w)}function g(w,F,V){const K=V.wireframe===!0;let ie=r[w.id];ie===void 0&&(ie={},r[w.id]=ie);let ne=ie[F.id];ne===void 0&&(ne={},ie[F.id]=ne);let ce=ne[K];return ce===void 0&&(ce=x(d()),ne[K]=ce),ce}function x(w){const F=[],V=[],K=[];for(let ie=0;ie<t;ie++)F[ie]=0,V[ie]=0,K[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:V,attributeDivisors:K,object:w,attributes:{},index:null}}function y(w,F,V,K){const ie=l.attributes,ne=F.attributes;let ce=0;const ae=V.getAttributes();for(const j in ae)if(ae[j].location>=0){const D=ie[j];let Q=ne[j];if(Q===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(Q=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(Q=w.instanceColor)),D===void 0||D.attribute!==Q||Q&&D.data!==Q.data)return!0;ce++}return l.attributesNum!==ce||l.index!==K}function M(w,F,V,K){const ie={},ne=F.attributes;let ce=0;const ae=V.getAttributes();for(const j in ae)if(ae[j].location>=0){let D=ne[j];D===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(D=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(D=w.instanceColor));const Q={};Q.attribute=D,D&&D.data&&(Q.data=D.data),ie[j]=Q,ce++}l.attributes=ie,l.attributesNum=ce,l.index=K}function E(){const w=l.newAttributes;for(let F=0,V=w.length;F<V;F++)w[F]=0}function S(w){v(w,0)}function v(w,F){const V=l.newAttributes,K=l.enabledAttributes,ie=l.attributeDivisors;V[w]=1,K[w]===0&&(s.enableVertexAttribArray(w),K[w]=1),ie[w]!==F&&(s.vertexAttribDivisor(w,F),ie[w]=F)}function P(){const w=l.newAttributes,F=l.enabledAttributes;for(let V=0,K=F.length;V<K;V++)F[V]!==w[V]&&(s.disableVertexAttribArray(V),F[V]=0)}function R(w,F,V,K,ie,ne,ce){ce===!0?s.vertexAttribIPointer(w,F,V,ie,ne):s.vertexAttribPointer(w,F,V,K,ie,ne)}function I(w,F,V,K){E();const ie=K.attributes,ne=V.getAttributes(),ce=F.defaultAttributeValues;for(const ae in ne){const j=ne[ae];if(j.location>=0){let re=ie[ae];if(re===void 0&&(ae==="instanceMatrix"&&w.instanceMatrix&&(re=w.instanceMatrix),ae==="instanceColor"&&w.instanceColor&&(re=w.instanceColor)),re!==void 0){const D=re.normalized,Q=re.itemSize,ve=e.get(re);if(ve===void 0)continue;const Fe=ve.buffer,Ne=ve.type,Je=ve.bytesPerElement,se=Ne===s.INT||Ne===s.UNSIGNED_INT||re.gpuType===Dd;if(re.isInterleavedBufferAttribute){const fe=re.data,ye=fe.stride,Xe=re.offset;if(fe.isInstancedInterleavedBuffer){for(let Ke=0;Ke<j.locationSize;Ke++)v(j.location+Ke,fe.meshPerAttribute);w.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ke=0;Ke<j.locationSize;Ke++)S(j.location+Ke);s.bindBuffer(s.ARRAY_BUFFER,Fe);for(let Ke=0;Ke<j.locationSize;Ke++)R(j.location+Ke,Q/j.locationSize,Ne,D,ye*Je,(Xe+Q/j.locationSize*Ke)*Je,se)}else{if(re.isInstancedBufferAttribute){for(let fe=0;fe<j.locationSize;fe++)v(j.location+fe,re.meshPerAttribute);w.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let fe=0;fe<j.locationSize;fe++)S(j.location+fe);s.bindBuffer(s.ARRAY_BUFFER,Fe);for(let fe=0;fe<j.locationSize;fe++)R(j.location+fe,Q/j.locationSize,Ne,D,Q*Je,Q/j.locationSize*fe*Je,se)}}else if(ce!==void 0){const D=ce[ae];if(D!==void 0)switch(D.length){case 2:s.vertexAttrib2fv(j.location,D);break;case 3:s.vertexAttrib3fv(j.location,D);break;case 4:s.vertexAttrib4fv(j.location,D);break;default:s.vertexAttrib1fv(j.location,D)}}}}P()}function k(){B();for(const w in r){const F=r[w];for(const V in F){const K=F[V];for(const ie in K)_(K[ie].object),delete K[ie];delete F[V]}delete r[w]}}function L(w){if(r[w.id]===void 0)return;const F=r[w.id];for(const V in F){const K=F[V];for(const ie in K)_(K[ie].object),delete K[ie];delete F[V]}delete r[w.id]}function N(w){for(const F in r){const V=r[F];if(V[w.id]===void 0)continue;const K=V[w.id];for(const ie in K)_(K[ie].object),delete K[ie];delete V[w.id]}}function B(){A(),u=!0,l!==o&&(l=o,p(l.object))}function A(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:B,resetDefaultState:A,dispose:k,releaseStatesOfGeometry:L,releaseStatesOfProgram:N,initAttributes:E,enableAttribute:S,disableUnusedAttributes:P}}function Nw(s,e,t){let r;function o(p){r=p}function l(p,_){s.drawArrays(r,p,_),t.update(_,r,1)}function u(p,_,g){g!==0&&(s.drawArraysInstanced(r,p,_,g),t.update(_,r,g))}function f(p,_,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,g);let y=0;for(let M=0;M<g;M++)y+=_[M];t.update(y,r,1)}function d(p,_,g,x){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<p.length;M++)u(p[M],_[M],x[M]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,_,0,x,0,g);let M=0;for(let E=0;E<g;E++)M+=_[E]*x[E];t.update(M,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function Uw(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(N){return!(N!==Ci&&r.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(N){const B=N===Ao&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Gi&&r.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==ur&&!B)}function d(N){if(N==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const _=d(p);_!==p&&(pt("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=t.logarithmicDepthBuffer===!0,x=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),P=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),R=s.getParameter(s.MAX_VARYING_VECTORS),I=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),k=M>0,L=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:P,maxVaryings:R,maxFragmentUniforms:I,vertexTextures:k,maxSamples:L}}function Fw(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new Wr,f=new vt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const y=g.length!==0||x||r!==0||o;return o=x,r=g.length,y},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,x){t=_(g,x,0)},this.setState=function(g,x,y){const M=g.clippingPlanes,E=g.clipIntersection,S=g.clipShadows,v=s.get(g);if(!o||M===null||M.length===0||l&&!S)l?_(null):p();else{const P=l?0:r,R=P*4;let I=v.clippingState||null;d.value=I,I=_(M,x,R,y);for(let k=0;k!==R;++k)I[k]=t[k];v.clippingState=I,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=P}};function p(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(g,x,y,M){const E=g!==null?g.length:0;let S=null;if(E!==0){if(S=d.value,M!==!0||S===null){const v=y+E*4,P=x.matrixWorldInverse;f.getNormalMatrix(P),(S===null||S.length<v)&&(S=new Float32Array(v));for(let R=0,I=y;R!==E;++R,I+=4)u.copy(g[R]).applyMatrix4(P,f),u.normal.toArray(S,I),S[I+3]=u.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,S}}function Ow(s){let e=new WeakMap;function t(u,f){return f===zh?u.mapping=So:f===Vh&&(u.mapping=Mo),u}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===zh||f===Vh)if(e.has(u)){const d=e.get(u).texture;return t(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const p=new IM(d.height);return p.fromEquirectangularTexture(s,u),e.set(u,p),u.addEventListener("dispose",o),t(p.texture,u.mapping)}else return null}}return u}function o(u){const f=u.target;f.removeEventListener("dispose",o);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const Xr=4,px=[.125,.215,.35,.446,.526,.582],vs=20,kw=256,va=new Fg,mx=new At;let ph=null,mh=0,xh=0,gh=!1;const Bw=new H;class xx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:f=Bw}=l;ph=this._renderer.getRenderTarget(),mh=this._renderer.getActiveCubeFace(),xh=this._renderer.getActiveMipmapLevel(),gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,r,o,d,f),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_x(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ph,mh,xh),this._renderer.xr.enabled=gh,e.scissorTest=!1,co(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===So||e.mapping===Mo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ph=this._renderer.getRenderTarget(),mh=this._renderer.getActiveCubeFace(),xh=this._renderer.getActiveMipmapLevel(),gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:xi,minFilter:xi,generateMipmaps:!1,type:Ao,format:Ci,colorSpace:Eo,depthBuffer:!1},o=gx(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gx(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=zw(l)),this._blurMaterial=Hw(l,e,t),this._ggxMaterial=Vw(l,e,t)}return o}_compileMaterial(e){const t=new Re(new Nn,e);this._renderer.compile(t,va)}_sceneToCubeUV(e,t,r,o,l){const d=new ri(90,1,t,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,y=g.toneMapping;g.getClearColor(mx),g.toneMapping=qr,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(o),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Re(new nn,new wo({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,S=E.material;let v=!1;const P=e.background;P?P.isColor&&(S.color.copy(P),e.background=null,v=!0):(S.color.copy(mx),v=!0);for(let R=0;R<6;R++){const I=R%3;I===0?(d.up.set(0,p[R],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+_[R],l.y,l.z)):I===1?(d.up.set(0,0,p[R]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+_[R],l.z)):(d.up.set(0,p[R],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+_[R]));const k=this._cubeSize;co(o,I*k,R>2?k:0,k,k),g.setRenderTarget(o),v&&g.render(E,d),g.render(e,d)}g.toneMapping=y,g.autoClear=x,e.background=P}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===So||e.mapping===Mo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=vx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_x());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const d=this._cubeSize;co(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(u,va)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const d=u.uniforms,p=r/(this._lodMeshes.length-1),_=t/(this._lodMeshes.length-1),g=Math.sqrt(p*p-_*_),x=.05+p*.95,y=g*x,{_lodMax:M}=this,E=this._sizeLods[r],S=3*E*(r>M-Xr?r-M+Xr:0),v=4*(this._cubeSize-E);d.envMap.value=e.texture,d.roughness.value=y,d.mipInt.value=M-t,co(l,S,v,3*E,2*E),o.setRenderTarget(l),o.render(f,va),d.envMap.value=l.texture,d.roughness.value=0,d.mipInt.value=M-r,co(e,S,v,3*E,2*E),o.setRenderTarget(e),o.render(f,va)}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,f){const d=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&rn("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[o];g.material=p;const x=p.uniforms,y=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*vs-1),E=l/M,S=isFinite(l)?1+Math.floor(_*E):vs;S>vs&&pt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${vs}`);const v=[];let P=0;for(let N=0;N<vs;++N){const B=N/E,A=Math.exp(-B*B/2);v.push(A),N===0?P+=A:N<S&&(P+=2*A)}for(let N=0;N<v.length;N++)v[N]=v[N]/P;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=v,x.latitudinal.value=u==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:R}=this;x.dTheta.value=M,x.mipInt.value=R-r;const I=this._sizeLods[o],k=3*I*(o>R-Xr?o-R+Xr:0),L=4*(this._cubeSize-I);co(t,k,L,3*I,2*I),d.setRenderTarget(t),d.render(g,va)}}function zw(s){const e=[],t=[],r=[];let o=s;const l=s-Xr+1+px.length;for(let u=0;u<l;u++){const f=Math.pow(2,o);e.push(f);let d=1/f;u>s-Xr?d=px[u-s+Xr-1]:u===0&&(d=0),t.push(d);const p=1/(f-2),_=-p,g=1+p,x=[_,_,g,_,g,g,_,_,g,g,_,g],y=6,M=6,E=3,S=2,v=1,P=new Float32Array(E*M*y),R=new Float32Array(S*M*y),I=new Float32Array(v*M*y);for(let L=0;L<y;L++){const N=L%3*2/3-1,B=L>2?0:-1,A=[N,B,0,N+2/3,B,0,N+2/3,B+1,0,N,B,0,N+2/3,B+1,0,N,B+1,0];P.set(A,E*M*L),R.set(x,S*M*L);const w=[L,L,L,L,L,L];I.set(w,v*M*L)}const k=new Nn;k.setAttribute("position",new Vi(P,E)),k.setAttribute("uv",new Vi(R,S)),k.setAttribute("faceIndex",new Vi(I,v)),r.push(new Re(k,null)),o>Xr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function gx(s,e,t){const r=new Ms(s,e,t);return r.texture.mapping=Yc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function co(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function Vw(s,e,t){return new Wi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:kw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Kc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function Hw(s,e,t){const r=new Float32Array(vs),o=new H(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function _x(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function vx(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function Kc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Gw(s){let e=new WeakMap,t=null;function r(f){if(f&&f.isTexture){const d=f.mapping,p=d===zh||d===Vh,_=d===So||d===Mo;if(p||_){let g=e.get(f);const x=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return t===null&&(t=new xx(s)),g=p?t.fromEquirectangular(f,g):t.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{const y=f.image;return p&&y&&y.height>0||_&&y&&o(y)?(t===null&&(t=new xx(s)),g=p?t.fromEquirectangular(f):t.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",l),g.texture):null}}}return f}function o(f){let d=0;const p=6;for(let _=0;_<p;_++)f[_]!==void 0&&d++;return d===p}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function Ww(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&La("WebGLRenderer: "+r+" extension not supported."),o}}}function jw(s,e,t,r){const o={},l=new WeakMap;function u(g){const x=g.target;x.index!==null&&e.remove(x.index);for(const M in x.attributes)e.remove(x.attributes[M]);x.removeEventListener("dispose",u),delete o[x.id];const y=l.get(x);y&&(e.remove(y),l.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function f(g,x){return o[x.id]===!0||(x.addEventListener("dispose",u),o[x.id]=!0,t.memory.geometries++),x}function d(g){const x=g.attributes;for(const y in x)e.update(x[y],s.ARRAY_BUFFER)}function p(g){const x=[],y=g.index,M=g.attributes.position;let E=0;if(y!==null){const P=y.array;E=y.version;for(let R=0,I=P.length;R<I;R+=3){const k=P[R+0],L=P[R+1],N=P[R+2];x.push(k,L,L,N,N,k)}}else if(M!==void 0){const P=M.array;E=M.version;for(let R=0,I=P.length/3-1;R<I;R+=3){const k=R+0,L=R+1,N=R+2;x.push(k,L,L,N,N,k)}}else return;const S=new(wg(x)?Rg:Cg)(x,1);S.version=E;const v=l.get(g);v&&e.remove(v),l.set(g,S)}function _(g){const x=l.get(g);if(x){const y=g.index;y!==null&&x.version<y.version&&p(g)}else p(g);return l.get(g)}return{get:f,update:d,getWireframeAttribute:_}}function Xw(s,e,t){let r;function o(x){r=x}let l,u;function f(x){l=x.type,u=x.bytesPerElement}function d(x,y){s.drawElements(r,y,l,x*u),t.update(y,r,1)}function p(x,y,M){M!==0&&(s.drawElementsInstanced(r,y,l,x*u,M),t.update(y,r,M))}function _(x,y,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,l,x,0,M);let S=0;for(let v=0;v<M;v++)S+=y[v];t.update(S,r,1)}function g(x,y,M,E){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<x.length;v++)p(x[v]/u,y[v],E[v]);else{S.multiDrawElementsInstancedWEBGL(r,y,0,l,x,0,E,0,M);let v=0;for(let P=0;P<M;P++)v+=y[P]*E[P];t.update(v,r,1)}}this.setMode=o,this.setIndex=f,this.render=d,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function Yw(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:rn("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function qw(s,e,t){const r=new WeakMap,o=new zt;function l(u,f,d){const p=u.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=_!==void 0?_.length:0;let x=r.get(f);if(x===void 0||x.count!==g){let w=function(){B.dispose(),r.delete(f),f.removeEventListener("dispose",w)};var y=w;x!==void 0&&x.texture.dispose();const M=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,v=f.morphAttributes.position||[],P=f.morphAttributes.normal||[],R=f.morphAttributes.color||[];let I=0;M===!0&&(I=1),E===!0&&(I=2),S===!0&&(I=3);let k=f.attributes.position.count*I,L=1;k>e.maxTextureSize&&(L=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const N=new Float32Array(k*L*4*g),B=new Tg(N,k,L,g);B.type=ur,B.needsUpdate=!0;const A=I*4;for(let F=0;F<g;F++){const V=v[F],K=P[F],ie=R[F],ne=k*L*4*F;for(let ce=0;ce<V.count;ce++){const ae=ce*A;M===!0&&(o.fromBufferAttribute(V,ce),N[ne+ae+0]=o.x,N[ne+ae+1]=o.y,N[ne+ae+2]=o.z,N[ne+ae+3]=0),E===!0&&(o.fromBufferAttribute(K,ce),N[ne+ae+4]=o.x,N[ne+ae+5]=o.y,N[ne+ae+6]=o.z,N[ne+ae+7]=0),S===!0&&(o.fromBufferAttribute(ie,ce),N[ne+ae+8]=o.x,N[ne+ae+9]=o.y,N[ne+ae+10]=o.z,N[ne+ae+11]=ie.itemSize===4?o.w:1)}}x={count:g,texture:B,size:new ut(k,L)},r.set(f,x),f.addEventListener("dispose",w)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let M=0;for(let S=0;S<p.length;S++)M+=p[S];const E=f.morphTargetsRelative?1:1-M;d.getUniforms().setValue(s,"morphTargetBaseInfluence",E),d.getUniforms().setValue(s,"morphTargetInfluences",p)}d.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:l}}function $w(s,e,t,r){let o=new WeakMap;function l(d){const p=r.render.frame,_=d.geometry,g=e.get(d,_);if(o.get(g)!==p&&(e.update(g),o.set(g,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),o.get(d)!==p&&(t.update(d.instanceMatrix,s.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,s.ARRAY_BUFFER),o.set(d,p))),d.isSkinnedMesh){const x=d.skeleton;o.get(x)!==p&&(x.update(),o.set(x,p))}return g}function u(){o=new WeakMap}function f(d){const p=d.target;p.removeEventListener("dispose",f),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:u}}const zg=new zn,yx=new Ig(1,1),Vg=new Tg,Hg=new xM,Gg=new Dg,Sx=[],Mx=[],Ex=new Float32Array(16),wx=new Float32Array(9),bx=new Float32Array(4);function Lo(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=Sx[o];if(l===void 0&&(l=new Float32Array(o),Sx[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,s[u].toArray(l,f)}return l}function mn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function xn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Zc(s,e){let t=Mx[e];t===void 0&&(t=new Int32Array(e),Mx[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function Kw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Zw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;s.uniform2fv(this.addr,e),xn(t,e)}}function Qw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mn(t,e))return;s.uniform3fv(this.addr,e),xn(t,e)}}function Jw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;s.uniform4fv(this.addr,e),xn(t,e)}}function e3(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(mn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),xn(t,e)}else{if(mn(t,r))return;bx.set(r),s.uniformMatrix2fv(this.addr,!1,bx),xn(t,r)}}function t3(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(mn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),xn(t,e)}else{if(mn(t,r))return;wx.set(r),s.uniformMatrix3fv(this.addr,!1,wx),xn(t,r)}}function n3(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(mn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),xn(t,e)}else{if(mn(t,r))return;Ex.set(r),s.uniformMatrix4fv(this.addr,!1,Ex),xn(t,r)}}function i3(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function r3(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;s.uniform2iv(this.addr,e),xn(t,e)}}function s3(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;s.uniform3iv(this.addr,e),xn(t,e)}}function o3(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;s.uniform4iv(this.addr,e),xn(t,e)}}function a3(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function l3(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;s.uniform2uiv(this.addr,e),xn(t,e)}}function c3(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;s.uniform3uiv(this.addr,e),xn(t,e)}}function u3(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;s.uniform4uiv(this.addr,e),xn(t,e)}}function f3(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(yx.compareFunction=Eg,l=yx):l=zg,t.setTexture2D(e||l,o)}function h3(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Hg,o)}function d3(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||Gg,o)}function p3(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Vg,o)}function m3(s){switch(s){case 5126:return Kw;case 35664:return Zw;case 35665:return Qw;case 35666:return Jw;case 35674:return e3;case 35675:return t3;case 35676:return n3;case 5124:case 35670:return i3;case 35667:case 35671:return r3;case 35668:case 35672:return s3;case 35669:case 35673:return o3;case 5125:return a3;case 36294:return l3;case 36295:return c3;case 36296:return u3;case 35678:case 36198:case 36298:case 36306:case 35682:return f3;case 35679:case 36299:case 36307:return h3;case 35680:case 36300:case 36308:case 36293:return d3;case 36289:case 36303:case 36311:case 36292:return p3}}function x3(s,e){s.uniform1fv(this.addr,e)}function g3(s,e){const t=Lo(e,this.size,2);s.uniform2fv(this.addr,t)}function _3(s,e){const t=Lo(e,this.size,3);s.uniform3fv(this.addr,t)}function v3(s,e){const t=Lo(e,this.size,4);s.uniform4fv(this.addr,t)}function y3(s,e){const t=Lo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function S3(s,e){const t=Lo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function M3(s,e){const t=Lo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function E3(s,e){s.uniform1iv(this.addr,e)}function w3(s,e){s.uniform2iv(this.addr,e)}function b3(s,e){s.uniform3iv(this.addr,e)}function T3(s,e){s.uniform4iv(this.addr,e)}function A3(s,e){s.uniform1uiv(this.addr,e)}function C3(s,e){s.uniform2uiv(this.addr,e)}function R3(s,e){s.uniform3uiv(this.addr,e)}function P3(s,e){s.uniform4uiv(this.addr,e)}function L3(s,e,t){const r=this.cache,o=e.length,l=Zc(t,o);mn(r,l)||(s.uniform1iv(this.addr,l),xn(r,l));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||zg,l[u])}function D3(s,e,t){const r=this.cache,o=e.length,l=Zc(t,o);mn(r,l)||(s.uniform1iv(this.addr,l),xn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||Hg,l[u])}function I3(s,e,t){const r=this.cache,o=e.length,l=Zc(t,o);mn(r,l)||(s.uniform1iv(this.addr,l),xn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||Gg,l[u])}function N3(s,e,t){const r=this.cache,o=e.length,l=Zc(t,o);mn(r,l)||(s.uniform1iv(this.addr,l),xn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||Vg,l[u])}function U3(s){switch(s){case 5126:return x3;case 35664:return g3;case 35665:return _3;case 35666:return v3;case 35674:return y3;case 35675:return S3;case 35676:return M3;case 5124:case 35670:return E3;case 35667:case 35671:return w3;case 35668:case 35672:return b3;case 35669:case 35673:return T3;case 5125:return A3;case 36294:return C3;case 36295:return R3;case 36296:return P3;case 35678:case 36198:case 36298:case 36306:case 35682:return L3;case 35679:case 36299:case 36307:return D3;case 35680:case 36300:case 36308:case 36293:return I3;case 36289:case 36303:case 36311:case 36292:return N3}}class F3{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=m3(t.type)}}class O3{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=U3(t.type)}}class k3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const _h=/(\w+)(\])?(\[|\.)?/g;function Tx(s,e){s.seq.push(e),s.map[e.id]=e}function B3(s,e,t){const r=s.name,o=r.length;for(_h.lastIndex=0;;){const l=_h.exec(r),u=_h.lastIndex;let f=l[1];const d=l[2]==="]",p=l[3];if(d&&(f=f|0),p===void 0||p==="["&&u+2===o){Tx(t,p===void 0?new F3(f,s,e):new O3(f,s,e));break}else{let g=t.map[f];g===void 0&&(g=new k3(f),Tx(t,g)),t=g}}}class Dc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);B3(l,u,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],d=r[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function Ax(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const z3=37297;let V3=0;function H3(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const Cx=new vt;function G3(s){It._getMatrix(Cx,It.workingColorSpace,s);const e=`mat3( ${Cx.elements.map(t=>t.toFixed(4))} )`;switch(It.getTransfer(s)){case Uc:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return pt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Rx(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+H3(s.getShaderSource(e),f)}else return l}function W3(s,e){const t=G3(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function j3(s,e){let t;switch(e){case RS:t="Linear";break;case PS:t="Reinhard";break;case LS:t="Cineon";break;case DS:t="ACESFilmic";break;case NS:t="AgX";break;case US:t="Neutral";break;case IS:t="Custom";break;default:pt("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const gc=new H;function X3(){It.getLuminanceCoefficients(gc);const s=gc.x.toFixed(4),e=gc.y.toFixed(4),t=gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Y3(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ea).join(`
`)}function q3(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function $3(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return t}function Ea(s){return s!==""}function Px(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lx(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const K3=/^[ \t]*#include +<([\w\d./]+)>/gm;function vd(s){return s.replace(K3,Q3)}const Z3=new Map;function Q3(s,e){let t=yt[e];if(t===void 0){const r=Z3.get(e);if(r!==void 0)t=yt[r],pt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return vd(t)}const J3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dx(s){return s.replace(J3,eb)}function eb(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Ix(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tb(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===hg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===lS?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===or&&(e="SHADOWMAP_TYPE_VSM"),e}function nb(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case So:case Mo:e="ENVMAP_TYPE_CUBE";break;case Yc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ib(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Mo:e="ENVMAP_MODE_REFRACTION";break}return e}function rb(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case dg:e="ENVMAP_BLENDING_MULTIPLY";break;case AS:e="ENVMAP_BLENDING_MIX";break;case CS:e="ENVMAP_BLENDING_ADD";break}return e}function sb(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function ob(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const d=tb(t),p=nb(t),_=ib(t),g=rb(t),x=sb(t),y=Y3(t),M=q3(l),E=o.createProgram();let S,v,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ea).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ea).join(`
`),v.length>0&&(v+=`
`)):(S=[Ix(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ea).join(`
`),v=[Ix(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",t.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qr?"#define TONE_MAPPING":"",t.toneMapping!==qr?yt.tonemapping_pars_fragment:"",t.toneMapping!==qr?j3("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",yt.colorspace_pars_fragment,W3("linearToOutputTexel",t.outputColorSpace),X3(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ea).join(`
`)),u=vd(u),u=Px(u,t),u=Lx(u,t),f=vd(f),f=Px(f,t),f=Lx(f,t),u=Dx(u),f=Dx(f),t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",t.glslVersion===F0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===F0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const R=P+S+u,I=P+v+f,k=Ax(o,o.VERTEX_SHADER,R),L=Ax(o,o.FRAGMENT_SHADER,I);o.attachShader(E,k),o.attachShader(E,L),t.index0AttributeName!==void 0?o.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E);function N(F){if(s.debug.checkShaderErrors){const V=o.getProgramInfoLog(E)||"",K=o.getShaderInfoLog(k)||"",ie=o.getShaderInfoLog(L)||"",ne=V.trim(),ce=K.trim(),ae=ie.trim();let j=!0,re=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,E,k,L);else{const D=Rx(o,k,"vertex"),Q=Rx(o,L,"fragment");rn("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+ne+`
`+D+`
`+Q)}else ne!==""?pt("WebGLProgram: Program Info Log:",ne):(ce===""||ae==="")&&(re=!1);re&&(F.diagnostics={runnable:j,programLog:ne,vertexShader:{log:ce,prefix:S},fragmentShader:{log:ae,prefix:v}})}o.deleteShader(k),o.deleteShader(L),B=new Dc(o,E),A=$3(o,E)}let B;this.getUniforms=function(){return B===void 0&&N(this),B};let A;this.getAttributes=function(){return A===void 0&&N(this),A};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=o.getProgramParameter(E,z3)),w},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=V3++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=k,this.fragmentShader=L,this}let ab=0;class lb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new cb(e),t.set(e,r)),r}}class cb{constructor(e){this.id=ab++,this.code=e,this.usedTimes=0}}function ub(s,e,t,r,o,l,u){const f=new Vd,d=new lb,p=new Set,_=[],g=o.logarithmicDepthBuffer,x=o.vertexTextures;let y=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(A){return p.add(A),A===0?"uv":`uv${A}`}function S(A,w,F,V,K){const ie=V.fog,ne=K.geometry,ce=A.isMeshStandardMaterial?V.environment:null,ae=(A.isMeshStandardMaterial?t:e).get(A.envMap||ce),j=ae&&ae.mapping===Yc?ae.image.height:null,re=M[A.type];A.precision!==null&&(y=o.getMaxPrecision(A.precision),y!==A.precision&&pt("WebGLProgram.getParameters:",A.precision,"not supported, using",y,"instead."));const D=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Q=D!==void 0?D.length:0;let ve=0;ne.morphAttributes.position!==void 0&&(ve=1),ne.morphAttributes.normal!==void 0&&(ve=2),ne.morphAttributes.color!==void 0&&(ve=3);let Fe,Ne,Je,se;if(re){const Pt=ki[re];Fe=Pt.vertexShader,Ne=Pt.fragmentShader}else Fe=A.vertexShader,Ne=A.fragmentShader,d.update(A),Je=d.getVertexShaderID(A),se=d.getFragmentShaderID(A);const fe=s.getRenderTarget(),ye=s.state.buffers.depth.getReversed(),Xe=K.isInstancedMesh===!0,Ke=K.isBatchedMesh===!0,he=!!A.map,We=!!A.matcap,Be=!!ae,Et=!!A.aoMap,z=!!A.lightMap,_t=!!A.bumpMap,gt=!!A.normalMap,Ct=!!A.displacementMap,ke=!!A.emissiveMap,Ut=!!A.metalnessMap,qe=!!A.roughnessMap,ft=A.anisotropy>0,U=A.clearcoat>0,T=A.dispersion>0,ee=A.iridescence>0,de=A.sheen>0,me=A.transmission>0,ue=ft&&!!A.anisotropyMap,Ze=U&&!!A.clearcoatMap,Ce=U&&!!A.clearcoatNormalMap,et=U&&!!A.clearcoatRoughnessMap,$e=ee&&!!A.iridescenceMap,_e=ee&&!!A.iridescenceThicknessMap,Ae=de&&!!A.sheenColorMap,at=de&&!!A.sheenRoughnessMap,it=!!A.specularMap,Ie=!!A.specularColorMap,lt=!!A.specularIntensityMap,G=me&&!!A.transmissionMap,Pe=me&&!!A.thicknessMap,we=!!A.gradientMap,be=!!A.alphaMap,Me=A.alphaTest>0,pe=!!A.alphaHash,Ve=!!A.extensions;let ht=qr;A.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(ht=s.toneMapping);const Ot={shaderID:re,shaderType:A.type,shaderName:A.name,vertexShader:Fe,fragmentShader:Ne,defines:A.defines,customVertexShaderID:Je,customFragmentShaderID:se,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:y,batching:Ke,batchingColor:Ke&&K._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&K.instanceColor!==null,instancingMorph:Xe&&K.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:fe===null?s.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Eo,alphaToCoverage:!!A.alphaToCoverage,map:he,matcap:We,envMap:Be,envMapMode:Be&&ae.mapping,envMapCubeUVHeight:j,aoMap:Et,lightMap:z,bumpMap:_t,normalMap:gt,displacementMap:x&&Ct,emissiveMap:ke,normalMapObjectSpace:gt&&A.normalMapType===BS,normalMapTangentSpace:gt&&A.normalMapType===Mg,metalnessMap:Ut,roughnessMap:qe,anisotropy:ft,anisotropyMap:ue,clearcoat:U,clearcoatMap:Ze,clearcoatNormalMap:Ce,clearcoatRoughnessMap:et,dispersion:T,iridescence:ee,iridescenceMap:$e,iridescenceThicknessMap:_e,sheen:de,sheenColorMap:Ae,sheenRoughnessMap:at,specularMap:it,specularColorMap:Ie,specularIntensityMap:lt,transmission:me,transmissionMap:G,thicknessMap:Pe,gradientMap:we,opaque:A.transparent===!1&&A.blending===mo&&A.alphaToCoverage===!1,alphaMap:be,alphaTest:Me,alphaHash:pe,combine:A.combine,mapUv:he&&E(A.map.channel),aoMapUv:Et&&E(A.aoMap.channel),lightMapUv:z&&E(A.lightMap.channel),bumpMapUv:_t&&E(A.bumpMap.channel),normalMapUv:gt&&E(A.normalMap.channel),displacementMapUv:Ct&&E(A.displacementMap.channel),emissiveMapUv:ke&&E(A.emissiveMap.channel),metalnessMapUv:Ut&&E(A.metalnessMap.channel),roughnessMapUv:qe&&E(A.roughnessMap.channel),anisotropyMapUv:ue&&E(A.anisotropyMap.channel),clearcoatMapUv:Ze&&E(A.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&E(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&E(A.clearcoatRoughnessMap.channel),iridescenceMapUv:$e&&E(A.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&E(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&E(A.sheenColorMap.channel),sheenRoughnessMapUv:at&&E(A.sheenRoughnessMap.channel),specularMapUv:it&&E(A.specularMap.channel),specularColorMapUv:Ie&&E(A.specularColorMap.channel),specularIntensityMapUv:lt&&E(A.specularIntensityMap.channel),transmissionMapUv:G&&E(A.transmissionMap.channel),thicknessMapUv:Pe&&E(A.thicknessMap.channel),alphaMapUv:be&&E(A.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(gt||ft),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!ne.attributes.uv&&(he||be),fog:!!ie,useFog:A.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:ye,skinning:K.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ve,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:A.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:ht,decodeVideoTexture:he&&A.map.isVideoTexture===!0&&It.getTransfer(A.map.colorSpace)===kt,decodeVideoTextureEmissive:ke&&A.emissiveMap.isVideoTexture===!0&&It.getTransfer(A.emissiveMap.colorSpace)===kt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Ai,flipSided:A.side===$n,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ve&&A.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&A.extensions.multiDraw===!0||Ke)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ot.vertexUv1s=p.has(1),Ot.vertexUv2s=p.has(2),Ot.vertexUv3s=p.has(3),p.clear(),Ot}function v(A){const w=[];if(A.shaderID?w.push(A.shaderID):(w.push(A.customVertexShaderID),w.push(A.customFragmentShaderID)),A.defines!==void 0)for(const F in A.defines)w.push(F),w.push(A.defines[F]);return A.isRawShaderMaterial===!1&&(P(w,A),R(w,A),w.push(s.outputColorSpace)),w.push(A.customProgramCacheKey),w.join()}function P(A,w){A.push(w.precision),A.push(w.outputColorSpace),A.push(w.envMapMode),A.push(w.envMapCubeUVHeight),A.push(w.mapUv),A.push(w.alphaMapUv),A.push(w.lightMapUv),A.push(w.aoMapUv),A.push(w.bumpMapUv),A.push(w.normalMapUv),A.push(w.displacementMapUv),A.push(w.emissiveMapUv),A.push(w.metalnessMapUv),A.push(w.roughnessMapUv),A.push(w.anisotropyMapUv),A.push(w.clearcoatMapUv),A.push(w.clearcoatNormalMapUv),A.push(w.clearcoatRoughnessMapUv),A.push(w.iridescenceMapUv),A.push(w.iridescenceThicknessMapUv),A.push(w.sheenColorMapUv),A.push(w.sheenRoughnessMapUv),A.push(w.specularMapUv),A.push(w.specularColorMapUv),A.push(w.specularIntensityMapUv),A.push(w.transmissionMapUv),A.push(w.thicknessMapUv),A.push(w.combine),A.push(w.fogExp2),A.push(w.sizeAttenuation),A.push(w.morphTargetsCount),A.push(w.morphAttributeCount),A.push(w.numDirLights),A.push(w.numPointLights),A.push(w.numSpotLights),A.push(w.numSpotLightMaps),A.push(w.numHemiLights),A.push(w.numRectAreaLights),A.push(w.numDirLightShadows),A.push(w.numPointLightShadows),A.push(w.numSpotLightShadows),A.push(w.numSpotLightShadowsWithMaps),A.push(w.numLightProbes),A.push(w.shadowMapType),A.push(w.toneMapping),A.push(w.numClippingPlanes),A.push(w.numClipIntersection),A.push(w.depthPacking)}function R(A,w){f.disableAll(),w.supportsVertexTextures&&f.enable(0),w.instancing&&f.enable(1),w.instancingColor&&f.enable(2),w.instancingMorph&&f.enable(3),w.matcap&&f.enable(4),w.envMap&&f.enable(5),w.normalMapObjectSpace&&f.enable(6),w.normalMapTangentSpace&&f.enable(7),w.clearcoat&&f.enable(8),w.iridescence&&f.enable(9),w.alphaTest&&f.enable(10),w.vertexColors&&f.enable(11),w.vertexAlphas&&f.enable(12),w.vertexUv1s&&f.enable(13),w.vertexUv2s&&f.enable(14),w.vertexUv3s&&f.enable(15),w.vertexTangents&&f.enable(16),w.anisotropy&&f.enable(17),w.alphaHash&&f.enable(18),w.batching&&f.enable(19),w.dispersion&&f.enable(20),w.batchingColor&&f.enable(21),w.gradientMap&&f.enable(22),A.push(f.mask),f.disableAll(),w.fog&&f.enable(0),w.useFog&&f.enable(1),w.flatShading&&f.enable(2),w.logarithmicDepthBuffer&&f.enable(3),w.reversedDepthBuffer&&f.enable(4),w.skinning&&f.enable(5),w.morphTargets&&f.enable(6),w.morphNormals&&f.enable(7),w.morphColors&&f.enable(8),w.premultipliedAlpha&&f.enable(9),w.shadowMapEnabled&&f.enable(10),w.doubleSided&&f.enable(11),w.flipSided&&f.enable(12),w.useDepthPacking&&f.enable(13),w.dithering&&f.enable(14),w.transmission&&f.enable(15),w.sheen&&f.enable(16),w.opaque&&f.enable(17),w.pointsUvs&&f.enable(18),w.decodeVideoTexture&&f.enable(19),w.decodeVideoTextureEmissive&&f.enable(20),w.alphaToCoverage&&f.enable(21),A.push(f.mask)}function I(A){const w=M[A.type];let F;if(w){const V=ki[w];F=RM.clone(V.uniforms)}else F=A.uniforms;return F}function k(A,w){let F;for(let V=0,K=_.length;V<K;V++){const ie=_[V];if(ie.cacheKey===w){F=ie,++F.usedTimes;break}}return F===void 0&&(F=new ob(s,w,A,l),_.push(F)),F}function L(A){if(--A.usedTimes===0){const w=_.indexOf(A);_[w]=_[_.length-1],_.pop(),A.destroy()}}function N(A){d.remove(A)}function B(){d.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:I,acquireProgram:k,releaseProgram:L,releaseShaderCache:N,programs:_,dispose:B}}function fb(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function o(u,f,d){s.get(u)[f]=d}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function hb(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Nx(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ux(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(g,x,y,M,E,S){let v=s[e];return v===void 0?(v={id:g.id,object:g,geometry:x,material:y,groupOrder:M,renderOrder:g.renderOrder,z:E,group:S},s[e]=v):(v.id=g.id,v.object=g,v.geometry=x,v.material=y,v.groupOrder=M,v.renderOrder=g.renderOrder,v.z=E,v.group=S),e++,v}function f(g,x,y,M,E,S){const v=u(g,x,y,M,E,S);y.transmission>0?r.push(v):y.transparent===!0?o.push(v):t.push(v)}function d(g,x,y,M,E,S){const v=u(g,x,y,M,E,S);y.transmission>0?r.unshift(v):y.transparent===!0?o.unshift(v):t.unshift(v)}function p(g,x){t.length>1&&t.sort(g||hb),r.length>1&&r.sort(x||Nx),o.length>1&&o.sort(x||Nx)}function _(){for(let g=e,x=s.length;g<x;g++){const y=s[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:f,unshift:d,finish:_,sort:p}}function db(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new Ux,s.set(r,[u])):o>=l.length?(u=new Ux,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function pb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new At};break;case"SpotLight":t={position:new H,direction:new H,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new At,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new At,groundColor:new At};break;case"RectAreaLight":t={color:new At,position:new H,halfWidth:new H,halfHeight:new H};break}return s[e.id]=t,t}}}function mb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let xb=0;function gb(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function _b(s){const e=new pb,t=mb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new H);const o=new H,l=new Wt,u=new Wt;function f(p){let _=0,g=0,x=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let y=0,M=0,E=0,S=0,v=0,P=0,R=0,I=0,k=0,L=0,N=0;p.sort(gb);for(let A=0,w=p.length;A<w;A++){const F=p[A],V=F.color,K=F.intensity,ie=F.distance,ne=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)_+=V.r*K,g+=V.g*K,x+=V.b*K;else if(F.isLightProbe){for(let ce=0;ce<9;ce++)r.probe[ce].addScaledVector(F.sh.coefficients[ce],K);N++}else if(F.isDirectionalLight){const ce=e.get(F);if(ce.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const ae=F.shadow,j=t.get(F);j.shadowIntensity=ae.intensity,j.shadowBias=ae.bias,j.shadowNormalBias=ae.normalBias,j.shadowRadius=ae.radius,j.shadowMapSize=ae.mapSize,r.directionalShadow[y]=j,r.directionalShadowMap[y]=ne,r.directionalShadowMatrix[y]=F.shadow.matrix,P++}r.directional[y]=ce,y++}else if(F.isSpotLight){const ce=e.get(F);ce.position.setFromMatrixPosition(F.matrixWorld),ce.color.copy(V).multiplyScalar(K),ce.distance=ie,ce.coneCos=Math.cos(F.angle),ce.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),ce.decay=F.decay,r.spot[E]=ce;const ae=F.shadow;if(F.map&&(r.spotLightMap[k]=F.map,k++,ae.updateMatrices(F),F.castShadow&&L++),r.spotLightMatrix[E]=ae.matrix,F.castShadow){const j=t.get(F);j.shadowIntensity=ae.intensity,j.shadowBias=ae.bias,j.shadowNormalBias=ae.normalBias,j.shadowRadius=ae.radius,j.shadowMapSize=ae.mapSize,r.spotShadow[E]=j,r.spotShadowMap[E]=ne,I++}E++}else if(F.isRectAreaLight){const ce=e.get(F);ce.color.copy(V).multiplyScalar(K),ce.halfWidth.set(F.width*.5,0,0),ce.halfHeight.set(0,F.height*.5,0),r.rectArea[S]=ce,S++}else if(F.isPointLight){const ce=e.get(F);if(ce.color.copy(F.color).multiplyScalar(F.intensity),ce.distance=F.distance,ce.decay=F.decay,F.castShadow){const ae=F.shadow,j=t.get(F);j.shadowIntensity=ae.intensity,j.shadowBias=ae.bias,j.shadowNormalBias=ae.normalBias,j.shadowRadius=ae.radius,j.shadowMapSize=ae.mapSize,j.shadowCameraNear=ae.camera.near,j.shadowCameraFar=ae.camera.far,r.pointShadow[M]=j,r.pointShadowMap[M]=ne,r.pointShadowMatrix[M]=F.shadow.matrix,R++}r.point[M]=ce,M++}else if(F.isHemisphereLight){const ce=e.get(F);ce.skyColor.copy(F.color).multiplyScalar(K),ce.groundColor.copy(F.groundColor).multiplyScalar(K),r.hemi[v]=ce,v++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=De.LTC_FLOAT_1,r.rectAreaLTC2=De.LTC_FLOAT_2):(r.rectAreaLTC1=De.LTC_HALF_1,r.rectAreaLTC2=De.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=g,r.ambient[2]=x;const B=r.hash;(B.directionalLength!==y||B.pointLength!==M||B.spotLength!==E||B.rectAreaLength!==S||B.hemiLength!==v||B.numDirectionalShadows!==P||B.numPointShadows!==R||B.numSpotShadows!==I||B.numSpotMaps!==k||B.numLightProbes!==N)&&(r.directional.length=y,r.spot.length=E,r.rectArea.length=S,r.point.length=M,r.hemi.length=v,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=I,r.spotShadowMap.length=I,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=I+k-L,r.spotLightMap.length=k,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=N,B.directionalLength=y,B.pointLength=M,B.spotLength=E,B.rectAreaLength=S,B.hemiLength=v,B.numDirectionalShadows=P,B.numPointShadows=R,B.numSpotShadows=I,B.numSpotMaps=k,B.numLightProbes=N,r.version=xb++)}function d(p,_){let g=0,x=0,y=0,M=0,E=0;const S=_.matrixWorldInverse;for(let v=0,P=p.length;v<P;v++){const R=p[v];if(R.isDirectionalLight){const I=r.directional[g];I.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),I.direction.sub(o),I.direction.transformDirection(S),g++}else if(R.isSpotLight){const I=r.spot[y];I.position.setFromMatrixPosition(R.matrixWorld),I.position.applyMatrix4(S),I.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),I.direction.sub(o),I.direction.transformDirection(S),y++}else if(R.isRectAreaLight){const I=r.rectArea[M];I.position.setFromMatrixPosition(R.matrixWorld),I.position.applyMatrix4(S),u.identity(),l.copy(R.matrixWorld),l.premultiply(S),u.extractRotation(l),I.halfWidth.set(R.width*.5,0,0),I.halfHeight.set(0,R.height*.5,0),I.halfWidth.applyMatrix4(u),I.halfHeight.applyMatrix4(u),M++}else if(R.isPointLight){const I=r.point[x];I.position.setFromMatrixPosition(R.matrixWorld),I.position.applyMatrix4(S),x++}else if(R.isHemisphereLight){const I=r.hemi[E];I.direction.setFromMatrixPosition(R.matrixWorld),I.direction.transformDirection(S),E++}}}return{setup:f,setupView:d,state:r}}function Fx(s){const e=new _b(s),t=[],r=[];function o(_){p.camera=_,t.length=0,r.length=0}function l(_){t.push(_)}function u(_){r.push(_)}function f(){e.setup(t)}function d(_){e.setupView(t,_)}const p={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:f,setupLightsView:d,pushLight:l,pushShadow:u}}function vb(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new Fx(s),e.set(o,[f])):l>=u.length?(f=new Fx(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const yb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Mb(s,e,t){let r=new Hd;const o=new ut,l=new ut,u=new zt,f=new HM({depthPacking:kS}),d=new GM,p={},_=t.maxTextureSize,g={[$r]:$n,[$n]:$r,[Ai]:Ai},x=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:yb,fragmentShader:Sb}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const M=new Nn;M.setAttribute("position",new Vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Re(M,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hg;let v=this.type;this.render=function(L,N,B){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||L.length===0)return;const A=s.getRenderTarget(),w=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),V=s.state;V.setBlending(fr),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const K=v!==or&&this.type===or,ie=v===or&&this.type!==or;for(let ne=0,ce=L.length;ne<ce;ne++){const ae=L[ne],j=ae.shadow;if(j===void 0){pt("WebGLShadowMap:",ae,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;o.copy(j.mapSize);const re=j.getFrameExtents();if(o.multiply(re),l.copy(j.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(l.x=Math.floor(_/re.x),o.x=l.x*re.x,j.mapSize.x=l.x),o.y>_&&(l.y=Math.floor(_/re.y),o.y=l.y*re.y,j.mapSize.y=l.y)),j.map===null||K===!0||ie===!0){const Q=this.type!==or?{minFilter:si,magFilter:si}:{};j.map!==null&&j.map.dispose(),j.map=new Ms(o.x,o.y,Q),j.map.texture.name=ae.name+".shadowMap",j.camera.updateProjectionMatrix()}s.setRenderTarget(j.map),s.clear();const D=j.getViewportCount();for(let Q=0;Q<D;Q++){const ve=j.getViewport(Q);u.set(l.x*ve.x,l.y*ve.y,l.x*ve.z,l.y*ve.w),V.viewport(u),j.updateMatrices(ae,Q),r=j.getFrustum(),I(N,B,j.camera,ae,this.type)}j.isPointLightShadow!==!0&&this.type===or&&P(j,B),j.needsUpdate=!1}v=this.type,S.needsUpdate=!1,s.setRenderTarget(A,w,F)};function P(L,N){const B=e.update(E);x.defines.VSM_SAMPLES!==L.blurSamples&&(x.defines.VSM_SAMPLES=L.blurSamples,y.defines.VSM_SAMPLES=L.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Ms(o.x,o.y)),x.uniforms.shadow_pass.value=L.map.texture,x.uniforms.resolution.value=L.mapSize,x.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(N,null,B,x,E,null),y.uniforms.shadow_pass.value=L.mapPass.texture,y.uniforms.resolution.value=L.mapSize,y.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(N,null,B,y,E,null)}function R(L,N,B,A){let w=null;const F=B.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(F!==void 0)w=F;else if(w=B.isPointLight===!0?d:f,s.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const V=w.uuid,K=N.uuid;let ie=p[V];ie===void 0&&(ie={},p[V]=ie);let ne=ie[K];ne===void 0&&(ne=w.clone(),ie[K]=ne,N.addEventListener("dispose",k)),w=ne}if(w.visible=N.visible,w.wireframe=N.wireframe,A===or?w.side=N.shadowSide!==null?N.shadowSide:N.side:w.side=N.shadowSide!==null?N.shadowSide:g[N.side],w.alphaMap=N.alphaMap,w.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,w.map=N.map,w.clipShadows=N.clipShadows,w.clippingPlanes=N.clippingPlanes,w.clipIntersection=N.clipIntersection,w.displacementMap=N.displacementMap,w.displacementScale=N.displacementScale,w.displacementBias=N.displacementBias,w.wireframeLinewidth=N.wireframeLinewidth,w.linewidth=N.linewidth,B.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const V=s.properties.get(w);V.light=B}return w}function I(L,N,B,A,w){if(L.visible===!1)return;if(L.layers.test(N.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&w===or)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,L.matrixWorld);const K=e.update(L),ie=L.material;if(Array.isArray(ie)){const ne=K.groups;for(let ce=0,ae=ne.length;ce<ae;ce++){const j=ne[ce],re=ie[j.materialIndex];if(re&&re.visible){const D=R(L,re,A,w);L.onBeforeShadow(s,L,N,B,K,D,j),s.renderBufferDirect(B,null,K,D,L,j),L.onAfterShadow(s,L,N,B,K,D,j)}}}else if(ie.visible){const ne=R(L,ie,A,w);L.onBeforeShadow(s,L,N,B,K,ne,null),s.renderBufferDirect(B,null,K,ne,L,null),L.onAfterShadow(s,L,N,B,K,ne,null)}}const V=L.children;for(let K=0,ie=V.length;K<ie;K++)I(V[K],N,B,A,w)}function k(L){L.target.removeEventListener("dispose",k);for(const B in p){const A=p[B],w=L.target.uuid;w in A&&(A[w].dispose(),delete A[w])}}}const Eb={[Ih]:Nh,[Uh]:kh,[Fh]:Bh,[yo]:Oh,[Nh]:Ih,[kh]:Uh,[Bh]:Fh,[Oh]:yo};function wb(s,e){function t(){let G=!1;const Pe=new zt;let we=null;const be=new zt(0,0,0,0);return{setMask:function(Me){we!==Me&&!G&&(s.colorMask(Me,Me,Me,Me),we=Me)},setLocked:function(Me){G=Me},setClear:function(Me,pe,Ve,ht,Ot){Ot===!0&&(Me*=ht,pe*=ht,Ve*=ht),Pe.set(Me,pe,Ve,ht),be.equals(Pe)===!1&&(s.clearColor(Me,pe,Ve,ht),be.copy(Pe))},reset:function(){G=!1,we=null,be.set(-1,0,0,0)}}}function r(){let G=!1,Pe=!1,we=null,be=null,Me=null;return{setReversed:function(pe){if(Pe!==pe){const Ve=e.get("EXT_clip_control");pe?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),Pe=pe;const ht=Me;Me=null,this.setClear(ht)}},getReversed:function(){return Pe},setTest:function(pe){pe?fe(s.DEPTH_TEST):ye(s.DEPTH_TEST)},setMask:function(pe){we!==pe&&!G&&(s.depthMask(pe),we=pe)},setFunc:function(pe){if(Pe&&(pe=Eb[pe]),be!==pe){switch(pe){case Ih:s.depthFunc(s.NEVER);break;case Nh:s.depthFunc(s.ALWAYS);break;case Uh:s.depthFunc(s.LESS);break;case yo:s.depthFunc(s.LEQUAL);break;case Fh:s.depthFunc(s.EQUAL);break;case Oh:s.depthFunc(s.GEQUAL);break;case kh:s.depthFunc(s.GREATER);break;case Bh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}be=pe}},setLocked:function(pe){G=pe},setClear:function(pe){Me!==pe&&(Pe&&(pe=1-pe),s.clearDepth(pe),Me=pe)},reset:function(){G=!1,we=null,be=null,Me=null,Pe=!1}}}function o(){let G=!1,Pe=null,we=null,be=null,Me=null,pe=null,Ve=null,ht=null,Ot=null;return{setTest:function(Pt){G||(Pt?fe(s.STENCIL_TEST):ye(s.STENCIL_TEST))},setMask:function(Pt){Pe!==Pt&&!G&&(s.stencilMask(Pt),Pe=Pt)},setFunc:function(Pt,Kn,Sn){(we!==Pt||be!==Kn||Me!==Sn)&&(s.stencilFunc(Pt,Kn,Sn),we=Pt,be=Kn,Me=Sn)},setOp:function(Pt,Kn,Sn){(pe!==Pt||Ve!==Kn||ht!==Sn)&&(s.stencilOp(Pt,Kn,Sn),pe=Pt,Ve=Kn,ht=Sn)},setLocked:function(Pt){G=Pt},setClear:function(Pt){Ot!==Pt&&(s.clearStencil(Pt),Ot=Pt)},reset:function(){G=!1,Pe=null,we=null,be=null,Me=null,pe=null,Ve=null,ht=null,Ot=null}}}const l=new t,u=new r,f=new o,d=new WeakMap,p=new WeakMap;let _={},g={},x=new WeakMap,y=[],M=null,E=!1,S=null,v=null,P=null,R=null,I=null,k=null,L=null,N=new At(0,0,0),B=0,A=!1,w=null,F=null,V=null,K=null,ie=null;const ne=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,ae=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(j)[1]),ce=ae>=1):j.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),ce=ae>=2);let re=null,D={};const Q=s.getParameter(s.SCISSOR_BOX),ve=s.getParameter(s.VIEWPORT),Fe=new zt().fromArray(Q),Ne=new zt().fromArray(ve);function Je(G,Pe,we,be){const Me=new Uint8Array(4),pe=s.createTexture();s.bindTexture(G,pe),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ve=0;Ve<we;Ve++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(Pe,0,s.RGBA,1,1,be,0,s.RGBA,s.UNSIGNED_BYTE,Me):s.texImage2D(Pe+Ve,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Me);return pe}const se={};se[s.TEXTURE_2D]=Je(s.TEXTURE_2D,s.TEXTURE_2D,1),se[s.TEXTURE_CUBE_MAP]=Je(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[s.TEXTURE_2D_ARRAY]=Je(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),se[s.TEXTURE_3D]=Je(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),fe(s.DEPTH_TEST),u.setFunc(yo),_t(!1),gt(P0),fe(s.CULL_FACE),Et(fr);function fe(G){_[G]!==!0&&(s.enable(G),_[G]=!0)}function ye(G){_[G]!==!1&&(s.disable(G),_[G]=!1)}function Xe(G,Pe){return g[G]!==Pe?(s.bindFramebuffer(G,Pe),g[G]=Pe,G===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Pe),G===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Pe),!0):!1}function Ke(G,Pe){let we=y,be=!1;if(G){we=x.get(Pe),we===void 0&&(we=[],x.set(Pe,we));const Me=G.textures;if(we.length!==Me.length||we[0]!==s.COLOR_ATTACHMENT0){for(let pe=0,Ve=Me.length;pe<Ve;pe++)we[pe]=s.COLOR_ATTACHMENT0+pe;we.length=Me.length,be=!0}}else we[0]!==s.BACK&&(we[0]=s.BACK,be=!0);be&&s.drawBuffers(we)}function he(G){return M!==G?(s.useProgram(G),M=G,!0):!1}const We={[gs]:s.FUNC_ADD,[uS]:s.FUNC_SUBTRACT,[fS]:s.FUNC_REVERSE_SUBTRACT};We[hS]=s.MIN,We[dS]=s.MAX;const Be={[pS]:s.ZERO,[mS]:s.ONE,[xS]:s.SRC_COLOR,[Lh]:s.SRC_ALPHA,[MS]:s.SRC_ALPHA_SATURATE,[yS]:s.DST_COLOR,[_S]:s.DST_ALPHA,[gS]:s.ONE_MINUS_SRC_COLOR,[Dh]:s.ONE_MINUS_SRC_ALPHA,[SS]:s.ONE_MINUS_DST_COLOR,[vS]:s.ONE_MINUS_DST_ALPHA,[ES]:s.CONSTANT_COLOR,[wS]:s.ONE_MINUS_CONSTANT_COLOR,[bS]:s.CONSTANT_ALPHA,[TS]:s.ONE_MINUS_CONSTANT_ALPHA};function Et(G,Pe,we,be,Me,pe,Ve,ht,Ot,Pt){if(G===fr){E===!0&&(ye(s.BLEND),E=!1);return}if(E===!1&&(fe(s.BLEND),E=!0),G!==cS){if(G!==S||Pt!==A){if((v!==gs||I!==gs)&&(s.blendEquation(s.FUNC_ADD),v=gs,I=gs),Pt)switch(G){case mo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case L0:s.blendFunc(s.ONE,s.ONE);break;case D0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case I0:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:rn("WebGLState: Invalid blending: ",G);break}else switch(G){case mo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case L0:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case D0:rn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case I0:rn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rn("WebGLState: Invalid blending: ",G);break}P=null,R=null,k=null,L=null,N.set(0,0,0),B=0,S=G,A=Pt}return}Me=Me||Pe,pe=pe||we,Ve=Ve||be,(Pe!==v||Me!==I)&&(s.blendEquationSeparate(We[Pe],We[Me]),v=Pe,I=Me),(we!==P||be!==R||pe!==k||Ve!==L)&&(s.blendFuncSeparate(Be[we],Be[be],Be[pe],Be[Ve]),P=we,R=be,k=pe,L=Ve),(ht.equals(N)===!1||Ot!==B)&&(s.blendColor(ht.r,ht.g,ht.b,Ot),N.copy(ht),B=Ot),S=G,A=!1}function z(G,Pe){G.side===Ai?ye(s.CULL_FACE):fe(s.CULL_FACE);let we=G.side===$n;Pe&&(we=!we),_t(we),G.blending===mo&&G.transparent===!1?Et(fr):Et(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),l.setMask(G.colorWrite);const be=G.stencilWrite;f.setTest(be),be&&(f.setMask(G.stencilWriteMask),f.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),f.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ke(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?fe(s.SAMPLE_ALPHA_TO_COVERAGE):ye(s.SAMPLE_ALPHA_TO_COVERAGE)}function _t(G){w!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),w=G)}function gt(G){G!==oS?(fe(s.CULL_FACE),G!==F&&(G===P0?s.cullFace(s.BACK):G===aS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ye(s.CULL_FACE),F=G}function Ct(G){G!==V&&(ce&&s.lineWidth(G),V=G)}function ke(G,Pe,we){G?(fe(s.POLYGON_OFFSET_FILL),(K!==Pe||ie!==we)&&(s.polygonOffset(Pe,we),K=Pe,ie=we)):ye(s.POLYGON_OFFSET_FILL)}function Ut(G){G?fe(s.SCISSOR_TEST):ye(s.SCISSOR_TEST)}function qe(G){G===void 0&&(G=s.TEXTURE0+ne-1),re!==G&&(s.activeTexture(G),re=G)}function ft(G,Pe,we){we===void 0&&(re===null?we=s.TEXTURE0+ne-1:we=re);let be=D[we];be===void 0&&(be={type:void 0,texture:void 0},D[we]=be),(be.type!==G||be.texture!==Pe)&&(re!==we&&(s.activeTexture(we),re=we),s.bindTexture(G,Pe||se[G]),be.type=G,be.texture=Pe)}function U(){const G=D[re];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function T(){try{s.compressedTexImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function ee(){try{s.compressedTexImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function de(){try{s.texSubImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function me(){try{s.texSubImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function ue(){try{s.compressedTexSubImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function Ze(){try{s.compressedTexSubImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function Ce(){try{s.texStorage2D(...arguments)}catch(G){G("WebGLState:",G)}}function et(){try{s.texStorage3D(...arguments)}catch(G){G("WebGLState:",G)}}function $e(){try{s.texImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function _e(){try{s.texImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function Ae(G){Fe.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),Fe.copy(G))}function at(G){Ne.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),Ne.copy(G))}function it(G,Pe){let we=p.get(Pe);we===void 0&&(we=new WeakMap,p.set(Pe,we));let be=we.get(G);be===void 0&&(be=s.getUniformBlockIndex(Pe,G.name),we.set(G,be))}function Ie(G,Pe){const be=p.get(Pe).get(G);d.get(Pe)!==be&&(s.uniformBlockBinding(Pe,be,G.__bindingPointIndex),d.set(Pe,be))}function lt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},re=null,D={},g={},x=new WeakMap,y=[],M=null,E=!1,S=null,v=null,P=null,R=null,I=null,k=null,L=null,N=new At(0,0,0),B=0,A=!1,w=null,F=null,V=null,K=null,ie=null,Fe.set(0,0,s.canvas.width,s.canvas.height),Ne.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:fe,disable:ye,bindFramebuffer:Xe,drawBuffers:Ke,useProgram:he,setBlending:Et,setMaterial:z,setFlipSided:_t,setCullFace:gt,setLineWidth:Ct,setPolygonOffset:ke,setScissorTest:Ut,activeTexture:qe,bindTexture:ft,unbindTexture:U,compressedTexImage2D:T,compressedTexImage3D:ee,texImage2D:$e,texImage3D:_e,updateUBOMapping:it,uniformBlockBinding:Ie,texStorage2D:Ce,texStorage3D:et,texSubImage2D:de,texSubImage3D:me,compressedTexSubImage2D:ue,compressedTexSubImage3D:Ze,scissor:Ae,viewport:at,reset:lt}}function bb(s,e,t,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ut,_=new WeakMap;let g;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(U,T){return y?new OffscreenCanvas(U,T):Oc("canvas")}function E(U,T,ee){let de=1;const me=ft(U);if((me.width>ee||me.height>ee)&&(de=ee/Math.max(me.width,me.height)),de<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ue=Math.floor(de*me.width),Ze=Math.floor(de*me.height);g===void 0&&(g=M(ue,Ze));const Ce=T?M(ue,Ze):g;return Ce.width=ue,Ce.height=Ze,Ce.getContext("2d").drawImage(U,0,0,ue,Ze),pt("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+ue+"x"+Ze+")."),Ce}else return"data"in U&&pt("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),U;return U}function S(U){return U.generateMipmaps}function v(U){s.generateMipmap(U)}function P(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function R(U,T,ee,de,me=!1){if(U!==null){if(s[U]!==void 0)return s[U];pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ue=T;if(T===s.RED&&(ee===s.FLOAT&&(ue=s.R32F),ee===s.HALF_FLOAT&&(ue=s.R16F),ee===s.UNSIGNED_BYTE&&(ue=s.R8)),T===s.RED_INTEGER&&(ee===s.UNSIGNED_BYTE&&(ue=s.R8UI),ee===s.UNSIGNED_SHORT&&(ue=s.R16UI),ee===s.UNSIGNED_INT&&(ue=s.R32UI),ee===s.BYTE&&(ue=s.R8I),ee===s.SHORT&&(ue=s.R16I),ee===s.INT&&(ue=s.R32I)),T===s.RG&&(ee===s.FLOAT&&(ue=s.RG32F),ee===s.HALF_FLOAT&&(ue=s.RG16F),ee===s.UNSIGNED_BYTE&&(ue=s.RG8)),T===s.RG_INTEGER&&(ee===s.UNSIGNED_BYTE&&(ue=s.RG8UI),ee===s.UNSIGNED_SHORT&&(ue=s.RG16UI),ee===s.UNSIGNED_INT&&(ue=s.RG32UI),ee===s.BYTE&&(ue=s.RG8I),ee===s.SHORT&&(ue=s.RG16I),ee===s.INT&&(ue=s.RG32I)),T===s.RGB_INTEGER&&(ee===s.UNSIGNED_BYTE&&(ue=s.RGB8UI),ee===s.UNSIGNED_SHORT&&(ue=s.RGB16UI),ee===s.UNSIGNED_INT&&(ue=s.RGB32UI),ee===s.BYTE&&(ue=s.RGB8I),ee===s.SHORT&&(ue=s.RGB16I),ee===s.INT&&(ue=s.RGB32I)),T===s.RGBA_INTEGER&&(ee===s.UNSIGNED_BYTE&&(ue=s.RGBA8UI),ee===s.UNSIGNED_SHORT&&(ue=s.RGBA16UI),ee===s.UNSIGNED_INT&&(ue=s.RGBA32UI),ee===s.BYTE&&(ue=s.RGBA8I),ee===s.SHORT&&(ue=s.RGBA16I),ee===s.INT&&(ue=s.RGBA32I)),T===s.RGB&&(ee===s.UNSIGNED_INT_5_9_9_9_REV&&(ue=s.RGB9_E5),ee===s.UNSIGNED_INT_10F_11F_11F_REV&&(ue=s.R11F_G11F_B10F)),T===s.RGBA){const Ze=me?Uc:It.getTransfer(de);ee===s.FLOAT&&(ue=s.RGBA32F),ee===s.HALF_FLOAT&&(ue=s.RGBA16F),ee===s.UNSIGNED_BYTE&&(ue=Ze===kt?s.SRGB8_ALPHA8:s.RGBA8),ee===s.UNSIGNED_SHORT_4_4_4_4&&(ue=s.RGBA4),ee===s.UNSIGNED_SHORT_5_5_5_1&&(ue=s.RGB5_A1)}return(ue===s.R16F||ue===s.R32F||ue===s.RG16F||ue===s.RG32F||ue===s.RGBA16F||ue===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function I(U,T){let ee;return U?T===null||T===Ss||T===Ca?ee=s.DEPTH24_STENCIL8:T===ur?ee=s.DEPTH32F_STENCIL8:T===Aa&&(ee=s.DEPTH24_STENCIL8,pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ss||T===Ca?ee=s.DEPTH_COMPONENT24:T===ur?ee=s.DEPTH_COMPONENT32F:T===Aa&&(ee=s.DEPTH_COMPONENT16),ee}function k(U,T){return S(U)===!0||U.isFramebufferTexture&&U.minFilter!==si&&U.minFilter!==xi?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function L(U){const T=U.target;T.removeEventListener("dispose",L),B(T),T.isVideoTexture&&_.delete(T)}function N(U){const T=U.target;T.removeEventListener("dispose",N),w(T)}function B(U){const T=r.get(U);if(T.__webglInit===void 0)return;const ee=U.source,de=x.get(ee);if(de){const me=de[T.__cacheKey];me.usedTimes--,me.usedTimes===0&&A(U),Object.keys(de).length===0&&x.delete(ee)}r.remove(U)}function A(U){const T=r.get(U);s.deleteTexture(T.__webglTexture);const ee=U.source,de=x.get(ee);delete de[T.__cacheKey],u.memory.textures--}function w(U){const T=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(T.__webglFramebuffer[de]))for(let me=0;me<T.__webglFramebuffer[de].length;me++)s.deleteFramebuffer(T.__webglFramebuffer[de][me]);else s.deleteFramebuffer(T.__webglFramebuffer[de]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[de])}else{if(Array.isArray(T.__webglFramebuffer))for(let de=0;de<T.__webglFramebuffer.length;de++)s.deleteFramebuffer(T.__webglFramebuffer[de]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let de=0;de<T.__webglColorRenderbuffer.length;de++)T.__webglColorRenderbuffer[de]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[de]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const ee=U.textures;for(let de=0,me=ee.length;de<me;de++){const ue=r.get(ee[de]);ue.__webglTexture&&(s.deleteTexture(ue.__webglTexture),u.memory.textures--),r.remove(ee[de])}r.remove(U)}let F=0;function V(){F=0}function K(){const U=F;return U>=o.maxTextures&&pt("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),F+=1,U}function ie(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function ne(U,T){const ee=r.get(U);if(U.isVideoTexture&&Ut(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&ee.__version!==U.version){const de=U.image;if(de===null)pt("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)pt("WebGLRenderer: Texture marked for update but image is incomplete");else{se(ee,U,T);return}}else U.isExternalTexture&&(ee.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,ee.__webglTexture,s.TEXTURE0+T)}function ce(U,T){const ee=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&ee.__version!==U.version){se(ee,U,T);return}else U.isExternalTexture&&(ee.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,ee.__webglTexture,s.TEXTURE0+T)}function ae(U,T){const ee=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&ee.__version!==U.version){se(ee,U,T);return}t.bindTexture(s.TEXTURE_3D,ee.__webglTexture,s.TEXTURE0+T)}function j(U,T){const ee=r.get(U);if(U.version>0&&ee.__version!==U.version){fe(ee,U,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture,s.TEXTURE0+T)}const re={[Hh]:s.REPEAT,[cr]:s.CLAMP_TO_EDGE,[Gh]:s.MIRRORED_REPEAT},D={[si]:s.NEAREST,[FS]:s.NEAREST_MIPMAP_NEAREST,[Xl]:s.NEAREST_MIPMAP_LINEAR,[xi]:s.LINEAR,[Vf]:s.LINEAR_MIPMAP_NEAREST,[ys]:s.LINEAR_MIPMAP_LINEAR},Q={[zS]:s.NEVER,[XS]:s.ALWAYS,[VS]:s.LESS,[Eg]:s.LEQUAL,[HS]:s.EQUAL,[jS]:s.GEQUAL,[GS]:s.GREATER,[WS]:s.NOTEQUAL};function ve(U,T){if(T.type===ur&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===xi||T.magFilter===Vf||T.magFilter===Xl||T.magFilter===ys||T.minFilter===xi||T.minFilter===Vf||T.minFilter===Xl||T.minFilter===ys)&&pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,re[T.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,re[T.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,re[T.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,D[T.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,D[T.minFilter]),T.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,Q[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===si||T.minFilter!==Xl&&T.minFilter!==ys||T.type===ur&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Fe(U,T){let ee=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",L));const de=T.source;let me=x.get(de);me===void 0&&(me={},x.set(de,me));const ue=ie(T);if(ue!==U.__cacheKey){me[ue]===void 0&&(me[ue]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,ee=!0),me[ue].usedTimes++;const Ze=me[U.__cacheKey];Ze!==void 0&&(me[U.__cacheKey].usedTimes--,Ze.usedTimes===0&&A(T)),U.__cacheKey=ue,U.__webglTexture=me[ue].texture}return ee}function Ne(U,T,ee){return Math.floor(Math.floor(U/ee)/T)}function Je(U,T,ee,de){const ue=U.updateRanges;if(ue.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,ee,de,T.data);else{ue.sort((_e,Ae)=>_e.start-Ae.start);let Ze=0;for(let _e=1;_e<ue.length;_e++){const Ae=ue[Ze],at=ue[_e],it=Ae.start+Ae.count,Ie=Ne(at.start,T.width,4),lt=Ne(Ae.start,T.width,4);at.start<=it+1&&Ie===lt&&Ne(at.start+at.count-1,T.width,4)===Ie?Ae.count=Math.max(Ae.count,at.start+at.count-Ae.start):(++Ze,ue[Ze]=at)}ue.length=Ze+1;const Ce=s.getParameter(s.UNPACK_ROW_LENGTH),et=s.getParameter(s.UNPACK_SKIP_PIXELS),$e=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let _e=0,Ae=ue.length;_e<Ae;_e++){const at=ue[_e],it=Math.floor(at.start/4),Ie=Math.ceil(at.count/4),lt=it%T.width,G=Math.floor(it/T.width),Pe=Ie,we=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,lt),s.pixelStorei(s.UNPACK_SKIP_ROWS,G),t.texSubImage2D(s.TEXTURE_2D,0,lt,G,Pe,we,ee,de,T.data)}U.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ce),s.pixelStorei(s.UNPACK_SKIP_PIXELS,et),s.pixelStorei(s.UNPACK_SKIP_ROWS,$e)}}function se(U,T,ee){let de=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(de=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(de=s.TEXTURE_3D);const me=Fe(U,T),ue=T.source;t.bindTexture(de,U.__webglTexture,s.TEXTURE0+ee);const Ze=r.get(ue);if(ue.version!==Ze.__version||me===!0){t.activeTexture(s.TEXTURE0+ee);const Ce=It.getPrimaries(It.workingColorSpace),et=T.colorSpace===jr?null:It.getPrimaries(T.colorSpace),$e=T.colorSpace===jr||Ce===et?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let _e=E(T.image,!1,o.maxTextureSize);_e=qe(T,_e);const Ae=l.convert(T.format,T.colorSpace),at=l.convert(T.type);let it=R(T.internalFormat,Ae,at,T.colorSpace,T.isVideoTexture);ve(de,T);let Ie;const lt=T.mipmaps,G=T.isVideoTexture!==!0,Pe=Ze.__version===void 0||me===!0,we=ue.dataReady,be=k(T,_e);if(T.isDepthTexture)it=I(T.format===Pa,T.type),Pe&&(G?t.texStorage2D(s.TEXTURE_2D,1,it,_e.width,_e.height):t.texImage2D(s.TEXTURE_2D,0,it,_e.width,_e.height,0,Ae,at,null));else if(T.isDataTexture)if(lt.length>0){G&&Pe&&t.texStorage2D(s.TEXTURE_2D,be,it,lt[0].width,lt[0].height);for(let Me=0,pe=lt.length;Me<pe;Me++)Ie=lt[Me],G?we&&t.texSubImage2D(s.TEXTURE_2D,Me,0,0,Ie.width,Ie.height,Ae,at,Ie.data):t.texImage2D(s.TEXTURE_2D,Me,it,Ie.width,Ie.height,0,Ae,at,Ie.data);T.generateMipmaps=!1}else G?(Pe&&t.texStorage2D(s.TEXTURE_2D,be,it,_e.width,_e.height),we&&Je(T,_e,Ae,at)):t.texImage2D(s.TEXTURE_2D,0,it,_e.width,_e.height,0,Ae,at,_e.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){G&&Pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,it,lt[0].width,lt[0].height,_e.depth);for(let Me=0,pe=lt.length;Me<pe;Me++)if(Ie=lt[Me],T.format!==Ci)if(Ae!==null)if(G){if(we)if(T.layerUpdates.size>0){const Ve=dx(Ie.width,Ie.height,T.format,T.type);for(const ht of T.layerUpdates){const Ot=Ie.data.subarray(ht*Ve/Ie.data.BYTES_PER_ELEMENT,(ht+1)*Ve/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Me,0,0,ht,Ie.width,Ie.height,1,Ae,Ot)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Me,0,0,0,Ie.width,Ie.height,_e.depth,Ae,Ie.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Me,it,Ie.width,Ie.height,_e.depth,0,Ie.data,0,0);else pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?we&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Me,0,0,0,Ie.width,Ie.height,_e.depth,Ae,at,Ie.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Me,it,Ie.width,Ie.height,_e.depth,0,Ae,at,Ie.data)}else{G&&Pe&&t.texStorage2D(s.TEXTURE_2D,be,it,lt[0].width,lt[0].height);for(let Me=0,pe=lt.length;Me<pe;Me++)Ie=lt[Me],T.format!==Ci?Ae!==null?G?we&&t.compressedTexSubImage2D(s.TEXTURE_2D,Me,0,0,Ie.width,Ie.height,Ae,Ie.data):t.compressedTexImage2D(s.TEXTURE_2D,Me,it,Ie.width,Ie.height,0,Ie.data):pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?we&&t.texSubImage2D(s.TEXTURE_2D,Me,0,0,Ie.width,Ie.height,Ae,at,Ie.data):t.texImage2D(s.TEXTURE_2D,Me,it,Ie.width,Ie.height,0,Ae,at,Ie.data)}else if(T.isDataArrayTexture)if(G){if(Pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,it,_e.width,_e.height,_e.depth),we)if(T.layerUpdates.size>0){const Me=dx(_e.width,_e.height,T.format,T.type);for(const pe of T.layerUpdates){const Ve=_e.data.subarray(pe*Me/_e.data.BYTES_PER_ELEMENT,(pe+1)*Me/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,_e.width,_e.height,1,Ae,at,Ve)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ae,at,_e.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,it,_e.width,_e.height,_e.depth,0,Ae,at,_e.data);else if(T.isData3DTexture)G?(Pe&&t.texStorage3D(s.TEXTURE_3D,be,it,_e.width,_e.height,_e.depth),we&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ae,at,_e.data)):t.texImage3D(s.TEXTURE_3D,0,it,_e.width,_e.height,_e.depth,0,Ae,at,_e.data);else if(T.isFramebufferTexture){if(Pe)if(G)t.texStorage2D(s.TEXTURE_2D,be,it,_e.width,_e.height);else{let Me=_e.width,pe=_e.height;for(let Ve=0;Ve<be;Ve++)t.texImage2D(s.TEXTURE_2D,Ve,it,Me,pe,0,Ae,at,null),Me>>=1,pe>>=1}}else if(lt.length>0){if(G&&Pe){const Me=ft(lt[0]);t.texStorage2D(s.TEXTURE_2D,be,it,Me.width,Me.height)}for(let Me=0,pe=lt.length;Me<pe;Me++)Ie=lt[Me],G?we&&t.texSubImage2D(s.TEXTURE_2D,Me,0,0,Ae,at,Ie):t.texImage2D(s.TEXTURE_2D,Me,it,Ae,at,Ie);T.generateMipmaps=!1}else if(G){if(Pe){const Me=ft(_e);t.texStorage2D(s.TEXTURE_2D,be,it,Me.width,Me.height)}we&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ae,at,_e)}else t.texImage2D(s.TEXTURE_2D,0,it,Ae,at,_e);S(T)&&v(de),Ze.__version=ue.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function fe(U,T,ee){if(T.image.length!==6)return;const de=Fe(U,T),me=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+ee);const ue=r.get(me);if(me.version!==ue.__version||de===!0){t.activeTexture(s.TEXTURE0+ee);const Ze=It.getPrimaries(It.workingColorSpace),Ce=T.colorSpace===jr?null:It.getPrimaries(T.colorSpace),et=T.colorSpace===jr||Ze===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);const $e=T.isCompressedTexture||T.image[0].isCompressedTexture,_e=T.image[0]&&T.image[0].isDataTexture,Ae=[];for(let pe=0;pe<6;pe++)!$e&&!_e?Ae[pe]=E(T.image[pe],!0,o.maxCubemapSize):Ae[pe]=_e?T.image[pe].image:T.image[pe],Ae[pe]=qe(T,Ae[pe]);const at=Ae[0],it=l.convert(T.format,T.colorSpace),Ie=l.convert(T.type),lt=R(T.internalFormat,it,Ie,T.colorSpace),G=T.isVideoTexture!==!0,Pe=ue.__version===void 0||de===!0,we=me.dataReady;let be=k(T,at);ve(s.TEXTURE_CUBE_MAP,T);let Me;if($e){G&&Pe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,be,lt,at.width,at.height);for(let pe=0;pe<6;pe++){Me=Ae[pe].mipmaps;for(let Ve=0;Ve<Me.length;Ve++){const ht=Me[Ve];T.format!==Ci?it!==null?G?we&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ve,0,0,ht.width,ht.height,it,ht.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ve,lt,ht.width,ht.height,0,ht.data):pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?we&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ve,0,0,ht.width,ht.height,it,Ie,ht.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ve,lt,ht.width,ht.height,0,it,Ie,ht.data)}}}else{if(Me=T.mipmaps,G&&Pe){Me.length>0&&be++;const pe=ft(Ae[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,be,lt,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(_e){G?we&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ae[pe].width,Ae[pe].height,it,Ie,Ae[pe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,lt,Ae[pe].width,Ae[pe].height,0,it,Ie,Ae[pe].data);for(let Ve=0;Ve<Me.length;Ve++){const Ot=Me[Ve].image[pe].image;G?we&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ve+1,0,0,Ot.width,Ot.height,it,Ie,Ot.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ve+1,lt,Ot.width,Ot.height,0,it,Ie,Ot.data)}}else{G?we&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,it,Ie,Ae[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,lt,it,Ie,Ae[pe]);for(let Ve=0;Ve<Me.length;Ve++){const ht=Me[Ve];G?we&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ve+1,0,0,it,Ie,ht.image[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ve+1,lt,it,Ie,ht.image[pe])}}}S(T)&&v(s.TEXTURE_CUBE_MAP),ue.__version=me.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function ye(U,T,ee,de,me,ue){const Ze=l.convert(ee.format,ee.colorSpace),Ce=l.convert(ee.type),et=R(ee.internalFormat,Ze,Ce,ee.colorSpace),$e=r.get(T),_e=r.get(ee);if(_e.__renderTarget=T,!$e.__hasExternalTextures){const Ae=Math.max(1,T.width>>ue),at=Math.max(1,T.height>>ue);me===s.TEXTURE_3D||me===s.TEXTURE_2D_ARRAY?t.texImage3D(me,ue,et,Ae,at,T.depth,0,Ze,Ce,null):t.texImage2D(me,ue,et,Ae,at,0,Ze,Ce,null)}t.bindFramebuffer(s.FRAMEBUFFER,U),ke(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,me,_e.__webglTexture,0,Ct(T)):(me===s.TEXTURE_2D||me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,de,me,_e.__webglTexture,ue),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Xe(U,T,ee){if(s.bindRenderbuffer(s.RENDERBUFFER,U),T.depthBuffer){const de=T.depthTexture,me=de&&de.isDepthTexture?de.type:null,ue=I(T.stencilBuffer,me),Ze=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=Ct(T);ke(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,ue,T.width,T.height):ee?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,ue,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ue,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ze,s.RENDERBUFFER,U)}else{const de=T.textures;for(let me=0;me<de.length;me++){const ue=de[me],Ze=l.convert(ue.format,ue.colorSpace),Ce=l.convert(ue.type),et=R(ue.internalFormat,Ze,Ce,ue.colorSpace),$e=Ct(T);ee&&ke(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$e,et,T.width,T.height):ke(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$e,et,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,et,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ke(U,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const de=r.get(T.depthTexture);de.__renderTarget=T,(!de.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ne(T.depthTexture,0);const me=de.__webglTexture,ue=Ct(T);if(T.depthTexture.format===Ra)ke(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,me,0,ue):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,me,0);else if(T.depthTexture.format===Pa)ke(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,me,0,ue):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function he(U){const T=r.get(U),ee=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const de=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),de){const me=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,de.removeEventListener("dispose",me)};de.addEventListener("dispose",me),T.__depthDisposeCallback=me}T.__boundDepthTexture=de}if(U.depthTexture&&!T.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");const de=U.texture.mipmaps;de&&de.length>0?Ke(T.__webglFramebuffer[0],U):Ke(T.__webglFramebuffer,U)}else if(ee){T.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[de]),T.__webglDepthbuffer[de]===void 0)T.__webglDepthbuffer[de]=s.createRenderbuffer(),Xe(T.__webglDepthbuffer[de],U,!1);else{const me=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=T.__webglDepthbuffer[de];s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,ue)}}else{const de=U.texture.mipmaps;if(de&&de.length>0?t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),Xe(T.__webglDepthbuffer,U,!1);else{const me=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,ue)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function We(U,T,ee){const de=r.get(U);T!==void 0&&ye(de.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ee!==void 0&&he(U)}function Be(U){const T=U.texture,ee=r.get(U),de=r.get(T);U.addEventListener("dispose",N);const me=U.textures,ue=U.isWebGLCubeRenderTarget===!0,Ze=me.length>1;if(Ze||(de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture()),de.__version=T.version,u.memory.textures++),ue){ee.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0){ee.__webglFramebuffer[Ce]=[];for(let et=0;et<T.mipmaps.length;et++)ee.__webglFramebuffer[Ce][et]=s.createFramebuffer()}else ee.__webglFramebuffer[Ce]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Ce=0;Ce<T.mipmaps.length;Ce++)ee.__webglFramebuffer[Ce]=s.createFramebuffer()}else ee.__webglFramebuffer=s.createFramebuffer();if(Ze)for(let Ce=0,et=me.length;Ce<et;Ce++){const $e=r.get(me[Ce]);$e.__webglTexture===void 0&&($e.__webglTexture=s.createTexture(),u.memory.textures++)}if(U.samples>0&&ke(U)===!1){ee.__webglMultisampledFramebuffer=s.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Ce=0;Ce<me.length;Ce++){const et=me[Ce];ee.__webglColorRenderbuffer[Ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ee.__webglColorRenderbuffer[Ce]);const $e=l.convert(et.format,et.colorSpace),_e=l.convert(et.type),Ae=R(et.internalFormat,$e,_e,et.colorSpace,U.isXRRenderTarget===!0),at=Ct(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,at,Ae,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,ee.__webglColorRenderbuffer[Ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(ee.__webglDepthRenderbuffer=s.createRenderbuffer(),Xe(ee.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ue){t.bindTexture(s.TEXTURE_CUBE_MAP,de.__webglTexture),ve(s.TEXTURE_CUBE_MAP,T);for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0)for(let et=0;et<T.mipmaps.length;et++)ye(ee.__webglFramebuffer[Ce][et],U,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,et);else ye(ee.__webglFramebuffer[Ce],U,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);S(T)&&v(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ze){for(let Ce=0,et=me.length;Ce<et;Ce++){const $e=me[Ce],_e=r.get($e);let Ae=s.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ae=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ae,_e.__webglTexture),ve(Ae,$e),ye(ee.__webglFramebuffer,U,$e,s.COLOR_ATTACHMENT0+Ce,Ae,0),S($e)&&v(Ae)}t.unbindTexture()}else{let Ce=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ce=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ce,de.__webglTexture),ve(Ce,T),T.mipmaps&&T.mipmaps.length>0)for(let et=0;et<T.mipmaps.length;et++)ye(ee.__webglFramebuffer[et],U,T,s.COLOR_ATTACHMENT0,Ce,et);else ye(ee.__webglFramebuffer,U,T,s.COLOR_ATTACHMENT0,Ce,0);S(T)&&v(Ce),t.unbindTexture()}U.depthBuffer&&he(U)}function Et(U){const T=U.textures;for(let ee=0,de=T.length;ee<de;ee++){const me=T[ee];if(S(me)){const ue=P(U),Ze=r.get(me).__webglTexture;t.bindTexture(ue,Ze),v(ue),t.unbindTexture()}}}const z=[],_t=[];function gt(U){if(U.samples>0){if(ke(U)===!1){const T=U.textures,ee=U.width,de=U.height;let me=s.COLOR_BUFFER_BIT;const ue=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ze=r.get(U),Ce=T.length>1;if(Ce)for(let $e=0;$e<T.length;$e++)t.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer);const et=U.texture.mipmaps;et&&et.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer);for(let $e=0;$e<T.length;$e++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(me|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(me|=s.STENCIL_BUFFER_BIT)),Ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ze.__webglColorRenderbuffer[$e]);const _e=r.get(T[$e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,_e,0)}s.blitFramebuffer(0,0,ee,de,0,0,ee,de,me,s.NEAREST),d===!0&&(z.length=0,_t.length=0,z.push(s.COLOR_ATTACHMENT0+$e),U.depthBuffer&&U.resolveDepthBuffer===!1&&(z.push(ue),_t.push(ue),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,_t)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,z))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ce)for(let $e=0;$e<T.length;$e++){t.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.RENDERBUFFER,Ze.__webglColorRenderbuffer[$e]);const _e=r.get(T[$e]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.TEXTURE_2D,_e,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&d){const T=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Ct(U){return Math.min(o.maxSamples,U.samples)}function ke(U){const T=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ut(U){const T=u.render.frame;_.get(U)!==T&&(_.set(U,T),U.update())}function qe(U,T){const ee=U.colorSpace,de=U.format,me=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||ee!==Eo&&ee!==jr&&(It.getTransfer(ee)===kt?(de!==Ci||me!==Gi)&&pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rn("WebGLTextures: Unsupported texture color space:",ee)),T}function ft(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=K,this.resetTextureUnits=V,this.setTexture2D=ne,this.setTexture2DArray=ce,this.setTexture3D=ae,this.setTextureCube=j,this.rebindTextures=We,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=ke}function Tb(s,e){function t(r,o=jr){let l;const u=It.getTransfer(o);if(r===Gi)return s.UNSIGNED_BYTE;if(r===Id)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Nd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===gg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===_g)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===mg)return s.BYTE;if(r===xg)return s.SHORT;if(r===Aa)return s.UNSIGNED_SHORT;if(r===Dd)return s.INT;if(r===Ss)return s.UNSIGNED_INT;if(r===ur)return s.FLOAT;if(r===Ao)return s.HALF_FLOAT;if(r===vg)return s.ALPHA;if(r===yg)return s.RGB;if(r===Ci)return s.RGBA;if(r===Ra)return s.DEPTH_COMPONENT;if(r===Pa)return s.DEPTH_STENCIL;if(r===Sg)return s.RED;if(r===Ud)return s.RED_INTEGER;if(r===Fd)return s.RG;if(r===Od)return s.RG_INTEGER;if(r===kd)return s.RGBA_INTEGER;if(r===Cc||r===Rc||r===Pc||r===Lc)if(u===kt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Cc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Rc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Pc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Lc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Cc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Rc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Pc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Lc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Wh||r===jh||r===Xh||r===Yh)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Wh)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===jh)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Xh)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Yh)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===qh||r===$h||r===Kh)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===qh||r===$h)return u===kt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Kh)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Zh||r===Qh||r===Jh||r===ed||r===td||r===nd||r===id||r===rd||r===sd||r===od||r===ad||r===ld||r===cd||r===ud)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Zh)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Qh)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Jh)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ed)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===td)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===nd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===id)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===rd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===sd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===od)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ad)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ld)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===cd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ud)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===fd||r===hd||r===dd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===fd)return u===kt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===hd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===dd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===pd||r===md||r===xd||r===gd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===pd)return l.COMPRESSED_RED_RGTC1_EXT;if(r===md)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===xd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===gd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ca?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const Ab=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Rb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Ng(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Wi({vertexShader:Ab,fragmentShader:Cb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Re(new Po(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Pb extends Es{constructor(e,t){super();const r=this;let o=null,l=1,u=null,f="local-floor",d=1,p=null,_=null,g=null,x=null,y=null,M=null;const E=typeof XRWebGLBinding<"u",S=new Rb,v={},P=t.getContextAttributes();let R=null,I=null;const k=[],L=[],N=new ut;let B=null;const A=new ri;A.viewport=new zt;const w=new ri;w.viewport=new zt;const F=[A,w],V=new $M;let K=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let fe=k[se];return fe===void 0&&(fe=new lh,k[se]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(se){let fe=k[se];return fe===void 0&&(fe=new lh,k[se]=fe),fe.getGripSpace()},this.getHand=function(se){let fe=k[se];return fe===void 0&&(fe=new lh,k[se]=fe),fe.getHandSpace()};function ne(se){const fe=L.indexOf(se.inputSource);if(fe===-1)return;const ye=k[fe];ye!==void 0&&(ye.update(se.inputSource,se.frame,p||u),ye.dispatchEvent({type:se.type,data:se.inputSource}))}function ce(){o.removeEventListener("select",ne),o.removeEventListener("selectstart",ne),o.removeEventListener("selectend",ne),o.removeEventListener("squeeze",ne),o.removeEventListener("squeezestart",ne),o.removeEventListener("squeezeend",ne),o.removeEventListener("end",ce),o.removeEventListener("inputsourceschange",ae);for(let se=0;se<k.length;se++){const fe=L[se];fe!==null&&(L[se]=null,k[se].disconnect(fe))}K=null,ie=null,S.reset();for(const se in v)delete v[se];e.setRenderTarget(R),y=null,x=null,g=null,o=null,I=null,Je.stop(),r.isPresenting=!1,e.setPixelRatio(B),e.setSize(N.width,N.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){l=se,r.isPresenting===!0&&pt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){f=se,r.isPresenting===!0&&pt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(se){p=se},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return g===null&&E&&(g=new XRWebGLBinding(o,t)),g},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(se){if(o=se,o!==null){if(R=e.getRenderTarget(),o.addEventListener("select",ne),o.addEventListener("selectstart",ne),o.addEventListener("selectend",ne),o.addEventListener("squeeze",ne),o.addEventListener("squeezestart",ne),o.addEventListener("squeezeend",ne),o.addEventListener("end",ce),o.addEventListener("inputsourceschange",ae),P.xrCompatible!==!0&&await t.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(N),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Xe=null,Ke=null;P.depth&&(Ke=P.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=P.stencil?Pa:Ra,Xe=P.stencil?Ca:Ss);const he={colorFormat:t.RGBA8,depthFormat:Ke,scaleFactor:l};g=this.getBinding(),x=g.createProjectionLayer(he),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),I=new Ms(x.textureWidth,x.textureHeight,{format:Ci,type:Gi,depthTexture:new Ig(x.textureWidth,x.textureHeight,Xe,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const ye={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(o,t,ye),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),I=new Ms(y.framebufferWidth,y.framebufferHeight,{format:Ci,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(d),p=null,u=await o.requestReferenceSpace(f),Je.setContext(o),Je.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function ae(se){for(let fe=0;fe<se.removed.length;fe++){const ye=se.removed[fe],Xe=L.indexOf(ye);Xe>=0&&(L[Xe]=null,k[Xe].disconnect(ye))}for(let fe=0;fe<se.added.length;fe++){const ye=se.added[fe];let Xe=L.indexOf(ye);if(Xe===-1){for(let he=0;he<k.length;he++)if(he>=L.length){L.push(ye),Xe=he;break}else if(L[he]===null){L[he]=ye,Xe=he;break}if(Xe===-1)break}const Ke=k[Xe];Ke&&Ke.connect(ye)}}const j=new H,re=new H;function D(se,fe,ye){j.setFromMatrixPosition(fe.matrixWorld),re.setFromMatrixPosition(ye.matrixWorld);const Xe=j.distanceTo(re),Ke=fe.projectionMatrix.elements,he=ye.projectionMatrix.elements,We=Ke[14]/(Ke[10]-1),Be=Ke[14]/(Ke[10]+1),Et=(Ke[9]+1)/Ke[5],z=(Ke[9]-1)/Ke[5],_t=(Ke[8]-1)/Ke[0],gt=(he[8]+1)/he[0],Ct=We*_t,ke=We*gt,Ut=Xe/(-_t+gt),qe=Ut*-_t;if(fe.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(qe),se.translateZ(Ut),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),Ke[10]===-1)se.projectionMatrix.copy(fe.projectionMatrix),se.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const ft=We+Ut,U=Be+Ut,T=Ct-qe,ee=ke+(Xe-qe),de=Et*Be/U*ft,me=z*Be/U*ft;se.projectionMatrix.makePerspective(T,ee,de,me,ft,U),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function Q(se,fe){fe===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(fe.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(o===null)return;let fe=se.near,ye=se.far;S.texture!==null&&(S.depthNear>0&&(fe=S.depthNear),S.depthFar>0&&(ye=S.depthFar)),V.near=w.near=A.near=fe,V.far=w.far=A.far=ye,(K!==V.near||ie!==V.far)&&(o.updateRenderState({depthNear:V.near,depthFar:V.far}),K=V.near,ie=V.far),V.layers.mask=se.layers.mask|6,A.layers.mask=V.layers.mask&3,w.layers.mask=V.layers.mask&5;const Xe=se.parent,Ke=V.cameras;Q(V,Xe);for(let he=0;he<Ke.length;he++)Q(Ke[he],Xe);Ke.length===2?D(V,A,w):V.projectionMatrix.copy(A.projectionMatrix),ve(se,V,Xe)};function ve(se,fe,ye){ye===null?se.matrix.copy(fe.matrixWorld):(se.matrix.copy(ye.matrixWorld),se.matrix.invert(),se.matrix.multiply(fe.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(fe.projectionMatrix),se.projectionMatrixInverse.copy(fe.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Da*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(x===null&&y===null))return d},this.setFoveation=function(se){d=se,x!==null&&(x.fixedFoveation=se),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=se)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(V)},this.getCameraTexture=function(se){return v[se]};let Fe=null;function Ne(se,fe){if(_=fe.getViewerPose(p||u),M=fe,_!==null){const ye=_.views;y!==null&&(e.setRenderTargetFramebuffer(I,y.framebuffer),e.setRenderTarget(I));let Xe=!1;ye.length!==V.cameras.length&&(V.cameras.length=0,Xe=!0);for(let Be=0;Be<ye.length;Be++){const Et=ye[Be];let z=null;if(y!==null)z=y.getViewport(Et);else{const gt=g.getViewSubImage(x,Et);z=gt.viewport,Be===0&&(e.setRenderTargetTextures(I,gt.colorTexture,gt.depthStencilTexture),e.setRenderTarget(I))}let _t=F[Be];_t===void 0&&(_t=new ri,_t.layers.enable(Be),_t.viewport=new zt,F[Be]=_t),_t.matrix.fromArray(Et.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(Et.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(z.x,z.y,z.width,z.height),Be===0&&(V.matrix.copy(_t.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Xe===!0&&V.cameras.push(_t)}const Ke=o.enabledFeatures;if(Ke&&Ke.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&E){g=r.getBinding();const Be=g.getDepthInformation(ye[0]);Be&&Be.isValid&&Be.texture&&S.init(Be,o.renderState)}if(Ke&&Ke.includes("camera-access")&&E){e.state.unbindTexture(),g=r.getBinding();for(let Be=0;Be<ye.length;Be++){const Et=ye[Be].camera;if(Et){let z=v[Et];z||(z=new Ng,v[Et]=z);const _t=g.getCameraImage(Et);z.sourceTexture=_t}}}}for(let ye=0;ye<k.length;ye++){const Xe=L[ye],Ke=k[ye];Xe!==null&&Ke!==void 0&&Ke.update(Xe,fe,p||u)}Fe&&Fe(se,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),M=null}const Je=new Bg;Je.setAnimationLoop(Ne),this.setAnimationLoop=function(se){Fe=se},this.dispose=function(){}}}const ps=new Ri,Lb=new Wt;function Db(s,e){function t(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function r(S,v){v.color.getRGB(S.fogColor.value,Pg(s)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function o(S,v,P,R,I){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(S,v):v.isMeshToonMaterial?(l(S,v),g(S,v)):v.isMeshPhongMaterial?(l(S,v),_(S,v)):v.isMeshStandardMaterial?(l(S,v),x(S,v),v.isMeshPhysicalMaterial&&y(S,v,I)):v.isMeshMatcapMaterial?(l(S,v),M(S,v)):v.isMeshDepthMaterial?l(S,v):v.isMeshDistanceMaterial?(l(S,v),E(S,v)):v.isMeshNormalMaterial?l(S,v):v.isLineBasicMaterial?(u(S,v),v.isLineDashedMaterial&&f(S,v)):v.isPointsMaterial?d(S,v,P,R):v.isSpriteMaterial?p(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,t(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,t(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===$n&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,t(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===$n&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,t(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,t(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const P=e.get(v),R=P.envMap,I=P.envMapRotation;R&&(S.envMap.value=R,ps.copy(I),ps.x*=-1,ps.y*=-1,ps.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),S.envMapRotation.value.setFromMatrix4(Lb.makeRotationFromEuler(ps)),S.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,S.aoMapTransform))}function u(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,t(v.map,S.mapTransform))}function f(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function d(S,v,P,R){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*P,S.scale.value=R*.5,v.map&&(S.map.value=v.map,t(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function p(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,t(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function _(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function g(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function x(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function y(S,v,P){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===$n&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=P.texture,S.transmissionSamplerSize.value.set(P.width,P.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,v){v.matcap&&(S.matcap.value=v.matcap)}function E(S,v){const P=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(P.matrixWorld),S.nearDistance.value=P.shadow.camera.near,S.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function Ib(s,e,t,r){let o={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function d(P,R){const I=R.program;r.uniformBlockBinding(P,I)}function p(P,R){let I=o[P.id];I===void 0&&(M(P),I=_(P),o[P.id]=I,P.addEventListener("dispose",S));const k=R.program;r.updateUBOMapping(P,k);const L=e.render.frame;l[P.id]!==L&&(x(P),l[P.id]=L)}function _(P){const R=g();P.__bindingPointIndex=R;const I=s.createBuffer(),k=P.__size,L=P.usage;return s.bindBuffer(s.UNIFORM_BUFFER,I),s.bufferData(s.UNIFORM_BUFFER,k,L),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,R,I),I}function g(){for(let P=0;P<f;P++)if(u.indexOf(P)===-1)return u.push(P),P;return rn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(P){const R=o[P.id],I=P.uniforms,k=P.__cache;s.bindBuffer(s.UNIFORM_BUFFER,R);for(let L=0,N=I.length;L<N;L++){const B=Array.isArray(I[L])?I[L]:[I[L]];for(let A=0,w=B.length;A<w;A++){const F=B[A];if(y(F,L,A,k)===!0){const V=F.__offset,K=Array.isArray(F.value)?F.value:[F.value];let ie=0;for(let ne=0;ne<K.length;ne++){const ce=K[ne],ae=E(ce);typeof ce=="number"||typeof ce=="boolean"?(F.__data[0]=ce,s.bufferSubData(s.UNIFORM_BUFFER,V+ie,F.__data)):ce.isMatrix3?(F.__data[0]=ce.elements[0],F.__data[1]=ce.elements[1],F.__data[2]=ce.elements[2],F.__data[3]=0,F.__data[4]=ce.elements[3],F.__data[5]=ce.elements[4],F.__data[6]=ce.elements[5],F.__data[7]=0,F.__data[8]=ce.elements[6],F.__data[9]=ce.elements[7],F.__data[10]=ce.elements[8],F.__data[11]=0):(ce.toArray(F.__data,ie),ie+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,V,F.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(P,R,I,k){const L=P.value,N=R+"_"+I;if(k[N]===void 0)return typeof L=="number"||typeof L=="boolean"?k[N]=L:k[N]=L.clone(),!0;{const B=k[N];if(typeof L=="number"||typeof L=="boolean"){if(B!==L)return k[N]=L,!0}else if(B.equals(L)===!1)return B.copy(L),!0}return!1}function M(P){const R=P.uniforms;let I=0;const k=16;for(let N=0,B=R.length;N<B;N++){const A=Array.isArray(R[N])?R[N]:[R[N]];for(let w=0,F=A.length;w<F;w++){const V=A[w],K=Array.isArray(V.value)?V.value:[V.value];for(let ie=0,ne=K.length;ie<ne;ie++){const ce=K[ie],ae=E(ce),j=I%k,re=j%ae.boundary,D=j+re;I+=re,D!==0&&k-D<ae.storage&&(I+=k-D),V.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=I,I+=ae.storage}}}const L=I%k;return L>0&&(I+=k-L),P.__size=I,P.__cache={},this}function E(P){const R={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(R.boundary=4,R.storage=4):P.isVector2?(R.boundary=8,R.storage=8):P.isVector3||P.isColor?(R.boundary=16,R.storage=12):P.isVector4?(R.boundary=16,R.storage=16):P.isMatrix3?(R.boundary=48,R.storage=48):P.isMatrix4?(R.boundary=64,R.storage=64):P.isTexture?pt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):pt("WebGLRenderer: Unsupported uniform value type.",P),R}function S(P){const R=P.target;R.removeEventListener("dispose",S);const I=u.indexOf(R.__bindingPointIndex);u.splice(I,1),s.deleteBuffer(o[R.id]),delete o[R.id],delete l[R.id]}function v(){for(const P in o)s.deleteBuffer(o[P]);u=[],o={},l={}}return{bind:d,update:p,dispose:v}}const Nb=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let sr=null;function Ub(){return sr===null&&(sr=new FM(Nb,32,32,Fd,Ao),sr.minFilter=xi,sr.magFilter=xi,sr.wrapS=cr,sr.wrapT=cr,sr.generateMipmaps=!1,sr.needsUpdate=!0),sr}class Fb{constructor(e={}){const{canvas:t=YS(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=u;const M=new Set([kd,Od,Ud]),E=new Set([Gi,Ss,Aa,Ca,Id,Nd]),S=new Uint32Array(4),v=new Int32Array(4);let P=null,R=null;const I=[],k=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let N=!1;this._outputColorSpace=di;let B=0,A=0,w=null,F=-1,V=null;const K=new zt,ie=new zt;let ne=null;const ce=new At(0);let ae=0,j=t.width,re=t.height,D=1,Q=null,ve=null;const Fe=new zt(0,0,j,re),Ne=new zt(0,0,j,re);let Je=!1;const se=new Hd;let fe=!1,ye=!1;const Xe=new Wt,Ke=new H,he=new zt,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function Et(){return w===null?D:1}let z=r;function _t(C,q){return t.getContext(C,q)}try{const C={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ld}`),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",Ve,!1),z===null){const q="webgl2";if(z=_t(q,C),z===null)throw _t(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw C("WebGLRenderer: "+C.message),C}let gt,Ct,ke,Ut,qe,ft,U,T,ee,de,me,ue,Ze,Ce,et,$e,_e,Ae,at,it,Ie,lt,G,Pe;function we(){gt=new Ww(z),gt.init(),lt=new Tb(z,gt),Ct=new Uw(z,gt,e,lt),ke=new wb(z,gt),Ct.reversedDepthBuffer&&x&&ke.buffers.depth.setReversed(!0),Ut=new Yw(z),qe=new fb,ft=new bb(z,gt,ke,qe,Ct,lt,Ut),U=new Ow(L),T=new Gw(L),ee=new ZM(z),G=new Iw(z,ee),de=new jw(z,ee,Ut,G),me=new $w(z,de,ee,Ut),at=new qw(z,Ct,ft),$e=new Fw(qe),ue=new ub(L,U,T,gt,Ct,G,$e),Ze=new Db(L,qe),Ce=new db,et=new vb(gt),Ae=new Dw(L,U,T,ke,me,y,d),_e=new Mb(L,me,Ct),Pe=new Ib(z,Ut,Ct,ke),it=new Nw(z,gt,Ut),Ie=new Xw(z,gt,Ut),Ut.programs=ue.programs,L.capabilities=Ct,L.extensions=gt,L.properties=qe,L.renderLists=Ce,L.shadowMap=_e,L.state=ke,L.info=Ut}we();const be=new Pb(L,z);this.xr=be,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const C=gt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=gt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(C){C!==void 0&&(D=C,this.setSize(j,re,!1))},this.getSize=function(C){return C.set(j,re)},this.setSize=function(C,q,J=!0){if(be.isPresenting){pt("WebGLRenderer: Can't change size while VR device is presenting.");return}j=C,re=q,t.width=Math.floor(C*D),t.height=Math.floor(q*D),J===!0&&(t.style.width=C+"px",t.style.height=q+"px"),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(j*D,re*D).floor()},this.setDrawingBufferSize=function(C,q,J){j=C,re=q,D=J,t.width=Math.floor(C*J),t.height=Math.floor(q*J),this.setViewport(0,0,C,q)},this.getCurrentViewport=function(C){return C.copy(K)},this.getViewport=function(C){return C.copy(Fe)},this.setViewport=function(C,q,J,le){C.isVector4?Fe.set(C.x,C.y,C.z,C.w):Fe.set(C,q,J,le),ke.viewport(K.copy(Fe).multiplyScalar(D).round())},this.getScissor=function(C){return C.copy(Ne)},this.setScissor=function(C,q,J,le){C.isVector4?Ne.set(C.x,C.y,C.z,C.w):Ne.set(C,q,J,le),ke.scissor(ie.copy(Ne).multiplyScalar(D).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(C){ke.setScissorTest(Je=C)},this.setOpaqueSort=function(C){Q=C},this.setTransparentSort=function(C){ve=C},this.getClearColor=function(C){return C.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(C=!0,q=!0,J=!0){let le=0;if(C){let $=!1;if(w!==null){const Te=w.texture.format;$=M.has(Te)}if($){const Te=w.texture.type,Le=E.has(Te),Ge=Ae.getClearColor(),Oe=Ae.getClearAlpha(),rt=Ge.r,Qe=Ge.g,nt=Ge.b;Le?(S[0]=rt,S[1]=Qe,S[2]=nt,S[3]=Oe,z.clearBufferuiv(z.COLOR,0,S)):(v[0]=rt,v[1]=Qe,v[2]=nt,v[3]=Oe,z.clearBufferiv(z.COLOR,0,v))}else le|=z.COLOR_BUFFER_BIT}q&&(le|=z.DEPTH_BUFFER_BIT),J&&(le|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",Ve,!1),Ae.dispose(),Ce.dispose(),et.dispose(),qe.dispose(),U.dispose(),T.dispose(),me.dispose(),G.dispose(),Pe.dispose(),ue.dispose(),be.dispose(),be.removeEventListener("sessionstart",pr),be.removeEventListener("sessionend",Ua),Zn.stop()};function Me(C){C.preventDefault(),k0("WebGLRenderer: Context Lost."),N=!0}function pe(){k0("WebGLRenderer: Context Restored."),N=!1;const C=Ut.autoReset,q=_e.enabled,J=_e.autoUpdate,le=_e.needsUpdate,$=_e.type;we(),Ut.autoReset=C,_e.enabled=q,_e.autoUpdate=J,_e.needsUpdate=le,_e.type=$}function Ve(C){rn("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ht(C){const q=C.target;q.removeEventListener("dispose",ht),Ot(q)}function Ot(C){Pt(C),qe.remove(C)}function Pt(C){const q=qe.get(C).programs;q!==void 0&&(q.forEach(function(J){ue.releaseProgram(J)}),C.isShaderMaterial&&ue.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,J,le,$,Te){q===null&&(q=We);const Le=$.isMesh&&$.matrixWorld.determinant()<0,Ge=Oa(C,q,J,le,$);ke.setMaterial(le,Le);let Oe=J.index,rt=1;if(le.wireframe===!0){if(Oe=de.getWireframeAttribute(J),Oe===void 0)return;rt=2}const Qe=J.drawRange,nt=J.attributes.position;let ct=Qe.start*rt,Nt=(Qe.start+Qe.count)*rt;Te!==null&&(ct=Math.max(ct,Te.start*rt),Nt=Math.min(Nt,(Te.start+Te.count)*rt)),Oe!==null?(ct=Math.max(ct,0),Nt=Math.min(Nt,Oe.count)):nt!=null&&(ct=Math.max(ct,0),Nt=Math.min(Nt,nt.count));const Yt=Nt-ct;if(Yt<0||Yt===1/0)return;G.setup($,le,Ge,J,Oe);let qt,Lt=it;if(Oe!==null&&(qt=ee.get(Oe),Lt=Ie,Lt.setIndex(qt)),$.isMesh)le.wireframe===!0?(ke.setLineWidth(le.wireframeLinewidth*Et()),Lt.setMode(z.LINES)):Lt.setMode(z.TRIANGLES);else if($.isLine){let tt=le.linewidth;tt===void 0&&(tt=1),ke.setLineWidth(tt*Et()),$.isLineSegments?Lt.setMode(z.LINES):$.isLineLoop?Lt.setMode(z.LINE_LOOP):Lt.setMode(z.LINE_STRIP)}else $.isPoints?Lt.setMode(z.POINTS):$.isSprite&&Lt.setMode(z.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)La("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Lt.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))Lt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const tt=$._multiDrawStarts,Ft=$._multiDrawCounts,wt=$._multiDrawCount,Un=Oe?ee.get(Oe).bytesPerElement:1,xr=qe.get(le).currentProgram.getUniforms();for(let Mn=0;Mn<wt;Mn++)xr.setValue(z,"_gl_DrawID",Mn),Lt.render(tt[Mn]/Un,Ft[Mn])}else if($.isInstancedMesh)Lt.renderInstances(ct,Yt,$.count);else if(J.isInstancedBufferGeometry){const tt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ft=Math.min(J.instanceCount,tt);Lt.renderInstances(ct,Yt,Ft)}else Lt.render(ct,Yt)};function Kn(C,q,J){C.transparent===!0&&C.side===Ai&&C.forceSinglePass===!1?(C.side=$n,C.needsUpdate=!0,Ts(C,q,J),C.side=$r,C.needsUpdate=!0,Ts(C,q,J),C.side=Ai):Ts(C,q,J)}this.compile=function(C,q,J=null){J===null&&(J=C),R=et.get(J),R.init(q),k.push(R),J.traverseVisible(function($){$.isLight&&$.layers.test(q.layers)&&(R.pushLight($),$.castShadow&&R.pushShadow($))}),C!==J&&C.traverseVisible(function($){$.isLight&&$.layers.test(q.layers)&&(R.pushLight($),$.castShadow&&R.pushShadow($))}),R.setupLights();const le=new Set;return C.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Te=$.material;if(Te)if(Array.isArray(Te))for(let Le=0;Le<Te.length;Le++){const Ge=Te[Le];Kn(Ge,J,$),le.add(Ge)}else Kn(Te,J,$),le.add(Te)}),R=k.pop(),le},this.compileAsync=function(C,q,J=null){const le=this.compile(C,q,J);return new Promise($=>{function Te(){if(le.forEach(function(Le){qe.get(Le).currentProgram.isReady()&&le.delete(Le)}),le.size===0){$(C);return}setTimeout(Te,10)}gt.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Sn=null;function Do(C){Sn&&Sn(C)}function pr(){Zn.stop()}function Ua(){Zn.start()}const Zn=new Bg;Zn.setAnimationLoop(Do),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(C){Sn=C,be.setAnimationLoop(C),C===null?Zn.stop():Zn.start()},be.addEventListener("sessionstart",pr),be.addEventListener("sessionend",Ua),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){rn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(be.cameraAutoUpdate===!0&&be.updateCamera(q),q=be.getCamera()),C.isScene===!0&&C.onBeforeRender(L,C,q,w),R=et.get(C,k.length),R.init(q),k.push(R),Xe.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),se.setFromProjectionMatrix(Xe,Bi,q.reversedDepth),ye=this.localClippingEnabled,fe=$e.init(this.clippingPlanes,ye),P=Ce.get(C,I.length),P.init(),I.push(P),be.enabled===!0&&be.isPresenting===!0){const Te=L.xr.getDepthSensingMesh();Te!==null&&mr(Te,q,-1/0,L.sortObjects)}mr(C,q,0,L.sortObjects),P.finish(),L.sortObjects===!0&&P.sort(Q,ve),Be=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,Be&&Ae.addToRenderList(P,C),this.info.render.frame++,fe===!0&&$e.beginShadows();const J=R.state.shadowsArray;_e.render(J,C,q),fe===!0&&$e.endShadows(),this.info.autoReset===!0&&this.info.reset();const le=P.opaque,$=P.transmissive;if(R.setupLights(),q.isArrayCamera){const Te=q.cameras;if($.length>0)for(let Le=0,Ge=Te.length;Le<Ge;Le++){const Oe=Te[Le];ws(le,$,C,Oe)}Be&&Ae.render(C);for(let Le=0,Ge=Te.length;Le<Ge;Le++){const Oe=Te[Le];Kr(P,C,Oe,Oe.viewport)}}else $.length>0&&ws(le,$,C,q),Be&&Ae.render(C),Kr(P,C,q);w!==null&&A===0&&(ft.updateMultisampleRenderTarget(w),ft.updateRenderTargetMipmap(w)),C.isScene===!0&&C.onAfterRender(L,C,q),G.resetDefaultState(),F=-1,V=null,k.pop(),k.length>0?(R=k[k.length-1],fe===!0&&$e.setGlobalState(L.clippingPlanes,R.state.camera)):R=null,I.pop(),I.length>0?P=I[I.length-1]:P=null};function mr(C,q,J,le){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)J=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLight)R.pushLight(C),C.castShadow&&R.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||se.intersectsSprite(C)){le&&he.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Xe);const Le=me.update(C),Ge=C.material;Ge.visible&&P.push(C,Le,Ge,J,he.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||se.intersectsObject(C))){const Le=me.update(C),Ge=C.material;if(le&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),he.copy(C.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),he.copy(Le.boundingSphere.center)),he.applyMatrix4(C.matrixWorld).applyMatrix4(Xe)),Array.isArray(Ge)){const Oe=Le.groups;for(let rt=0,Qe=Oe.length;rt<Qe;rt++){const nt=Oe[rt],ct=Ge[nt.materialIndex];ct&&ct.visible&&P.push(C,Le,ct,J,he.z,nt)}}else Ge.visible&&P.push(C,Le,Ge,J,he.z,null)}}const Te=C.children;for(let Le=0,Ge=Te.length;Le<Ge;Le++)mr(Te[Le],q,J,le)}function Kr(C,q,J,le){const{opaque:$,transmissive:Te,transparent:Le}=C;R.setupLightsView(J),fe===!0&&$e.setGlobalState(L.clippingPlanes,J),le&&ke.viewport(K.copy(le)),$.length>0&&bs($,q,J),Te.length>0&&bs(Te,q,J),Le.length>0&&bs(Le,q,J),ke.buffers.depth.setTest(!0),ke.buffers.depth.setMask(!0),ke.buffers.color.setMask(!0),ke.setPolygonOffset(!1)}function ws(C,q,J,le){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;R.state.transmissionRenderTarget[le.id]===void 0&&(R.state.transmissionRenderTarget[le.id]=new Ms(1,1,{generateMipmaps:!0,type:gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float")?Ao:Gi,minFilter:ys,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:It.workingColorSpace}));const Te=R.state.transmissionRenderTarget[le.id],Le=le.viewport||K;Te.setSize(Le.z*L.transmissionResolutionScale,Le.w*L.transmissionResolutionScale);const Ge=L.getRenderTarget(),Oe=L.getActiveCubeFace(),rt=L.getActiveMipmapLevel();L.setRenderTarget(Te),L.getClearColor(ce),ae=L.getClearAlpha(),ae<1&&L.setClearColor(16777215,.5),L.clear(),Be&&Ae.render(J);const Qe=L.toneMapping;L.toneMapping=qr;const nt=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),R.setupLightsView(le),fe===!0&&$e.setGlobalState(L.clippingPlanes,le),bs(C,J,le),ft.updateMultisampleRenderTarget(Te),ft.updateRenderTargetMipmap(Te),gt.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let Nt=0,Yt=q.length;Nt<Yt;Nt++){const qt=q[Nt],{object:Lt,geometry:tt,material:Ft,group:wt}=qt;if(Ft.side===Ai&&Lt.layers.test(le.layers)){const Un=Ft.side;Ft.side=$n,Ft.needsUpdate=!0,Fa(Lt,J,le,tt,Ft,wt),Ft.side=Un,Ft.needsUpdate=!0,ct=!0}}ct===!0&&(ft.updateMultisampleRenderTarget(Te),ft.updateRenderTargetMipmap(Te))}L.setRenderTarget(Ge,Oe,rt),L.setClearColor(ce,ae),nt!==void 0&&(le.viewport=nt),L.toneMapping=Qe}function bs(C,q,J){const le=q.isScene===!0?q.overrideMaterial:null;for(let $=0,Te=C.length;$<Te;$++){const Le=C[$],{object:Ge,geometry:Oe,group:rt}=Le;let Qe=Le.material;Qe.allowOverride===!0&&le!==null&&(Qe=le),Ge.layers.test(J.layers)&&Fa(Ge,q,J,Oe,Qe,rt)}}function Fa(C,q,J,le,$,Te){C.onBeforeRender(L,q,J,le,$,Te),C.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(L,q,J,le,C,Te),$.transparent===!0&&$.side===Ai&&$.forceSinglePass===!1?($.side=$n,$.needsUpdate=!0,L.renderBufferDirect(J,q,le,$,C,Te),$.side=$r,$.needsUpdate=!0,L.renderBufferDirect(J,q,le,$,C,Te),$.side=Ai):L.renderBufferDirect(J,q,le,$,C,Te),C.onAfterRender(L,q,J,le,$,Te)}function Ts(C,q,J){q.isScene!==!0&&(q=We);const le=qe.get(C),$=R.state.lights,Te=R.state.shadowsArray,Le=$.state.version,Ge=ue.getParameters(C,$.state,Te,q,J),Oe=ue.getProgramCacheKey(Ge);let rt=le.programs;le.environment=C.isMeshStandardMaterial?q.environment:null,le.fog=q.fog,le.envMap=(C.isMeshStandardMaterial?T:U).get(C.envMap||le.environment),le.envMapRotation=le.environment!==null&&C.envMap===null?q.environmentRotation:C.envMapRotation,rt===void 0&&(C.addEventListener("dispose",ht),rt=new Map,le.programs=rt);let Qe=rt.get(Oe);if(Qe!==void 0){if(le.currentProgram===Qe&&le.lightsStateVersion===Le)return Io(C,Ge),Qe}else Ge.uniforms=ue.getUniforms(C),C.onBeforeCompile(Ge,L),Qe=ue.acquireProgram(Ge,Oe),rt.set(Oe,Qe),le.uniforms=Ge.uniforms;const nt=le.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(nt.clippingPlanes=$e.uniform),Io(C,Ge),le.needsLights=ka(C),le.lightsStateVersion=Le,le.needsLights&&(nt.ambientLightColor.value=$.state.ambient,nt.lightProbe.value=$.state.probe,nt.directionalLights.value=$.state.directional,nt.directionalLightShadows.value=$.state.directionalShadow,nt.spotLights.value=$.state.spot,nt.spotLightShadows.value=$.state.spotShadow,nt.rectAreaLights.value=$.state.rectArea,nt.ltc_1.value=$.state.rectAreaLTC1,nt.ltc_2.value=$.state.rectAreaLTC2,nt.pointLights.value=$.state.point,nt.pointLightShadows.value=$.state.pointShadow,nt.hemisphereLights.value=$.state.hemi,nt.directionalShadowMap.value=$.state.directionalShadowMap,nt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,nt.spotShadowMap.value=$.state.spotShadowMap,nt.spotLightMatrix.value=$.state.spotLightMatrix,nt.spotLightMap.value=$.state.spotLightMap,nt.pointShadowMap.value=$.state.pointShadowMap,nt.pointShadowMatrix.value=$.state.pointShadowMatrix),le.currentProgram=Qe,le.uniformsList=null,Qe}function Pi(C){if(C.uniformsList===null){const q=C.currentProgram.getUniforms();C.uniformsList=Dc.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function Io(C,q){const J=qe.get(C);J.outputColorSpace=q.outputColorSpace,J.batching=q.batching,J.batchingColor=q.batchingColor,J.instancing=q.instancing,J.instancingColor=q.instancingColor,J.instancingMorph=q.instancingMorph,J.skinning=q.skinning,J.morphTargets=q.morphTargets,J.morphNormals=q.morphNormals,J.morphColors=q.morphColors,J.morphTargetsCount=q.morphTargetsCount,J.numClippingPlanes=q.numClippingPlanes,J.numIntersection=q.numClipIntersection,J.vertexAlphas=q.vertexAlphas,J.vertexTangents=q.vertexTangents,J.toneMapping=q.toneMapping}function Oa(C,q,J,le,$){q.isScene!==!0&&(q=We),ft.resetTextureUnits();const Te=q.fog,Le=le.isMeshStandardMaterial?q.environment:null,Ge=w===null?L.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Eo,Oe=(le.isMeshStandardMaterial?T:U).get(le.envMap||Le),rt=le.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Qe=!!J.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),nt=!!J.morphAttributes.position,ct=!!J.morphAttributes.normal,Nt=!!J.morphAttributes.color;let Yt=qr;le.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Yt=L.toneMapping);const qt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Lt=qt!==void 0?qt.length:0,tt=qe.get(le),Ft=R.state.lights;if(fe===!0&&(ye===!0||C!==V)){const fn=C===V&&le.id===F;$e.setState(le,C,fn)}let wt=!1;le.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==Ft.state.version||tt.outputColorSpace!==Ge||$.isBatchedMesh&&tt.batching===!1||!$.isBatchedMesh&&tt.batching===!0||$.isBatchedMesh&&tt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&tt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&tt.instancing===!1||!$.isInstancedMesh&&tt.instancing===!0||$.isSkinnedMesh&&tt.skinning===!1||!$.isSkinnedMesh&&tt.skinning===!0||$.isInstancedMesh&&tt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&tt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&tt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&tt.instancingMorph===!1&&$.morphTexture!==null||tt.envMap!==Oe||le.fog===!0&&tt.fog!==Te||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==$e.numPlanes||tt.numIntersection!==$e.numIntersection)||tt.vertexAlphas!==rt||tt.vertexTangents!==Qe||tt.morphTargets!==nt||tt.morphNormals!==ct||tt.morphColors!==Nt||tt.toneMapping!==Yt||tt.morphTargetsCount!==Lt)&&(wt=!0):(wt=!0,tt.__version=le.version);let Un=tt.currentProgram;wt===!0&&(Un=Ts(le,q,$));let xr=!1,Mn=!1,gr=!1;const Vt=Un.getUniforms(),on=tt.uniforms;if(ke.useProgram(Un.program)&&(xr=!0,Mn=!0,gr=!0),le.id!==F&&(F=le.id,Mn=!0),xr||V!==C){ke.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Vt.setValue(z,"projectionMatrix",C.projectionMatrix),Vt.setValue(z,"viewMatrix",C.matrixWorldInverse);const mt=Vt.map.cameraPosition;mt!==void 0&&mt.setValue(z,Ke.setFromMatrixPosition(C.matrixWorld)),Ct.logarithmicDepthBuffer&&Vt.setValue(z,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Vt.setValue(z,"isOrthographic",C.isOrthographicCamera===!0),V!==C&&(V=C,Mn=!0,gr=!0)}if($.isSkinnedMesh){Vt.setOptional(z,$,"bindMatrix"),Vt.setOptional(z,$,"bindMatrixInverse");const fn=$.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),Vt.setValue(z,"boneTexture",fn.boneTexture,ft))}$.isBatchedMesh&&(Vt.setOptional(z,$,"batchingTexture"),Vt.setValue(z,"batchingTexture",$._matricesTexture,ft),Vt.setOptional(z,$,"batchingIdTexture"),Vt.setValue(z,"batchingIdTexture",$._indirectTexture,ft),Vt.setOptional(z,$,"batchingColorTexture"),$._colorsTexture!==null&&Vt.setValue(z,"batchingColorTexture",$._colorsTexture,ft));const Vn=J.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0)&&at.update($,J,Un),(Mn||tt.receiveShadow!==$.receiveShadow)&&(tt.receiveShadow=$.receiveShadow,Vt.setValue(z,"receiveShadow",$.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(on.envMap.value=Oe,on.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),le.isMeshStandardMaterial&&le.envMap===null&&q.environment!==null&&(on.envMapIntensity.value=q.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=Ub()),Mn&&(Vt.setValue(z,"toneMappingExposure",L.toneMappingExposure),tt.needsLights&&Qc(on,gr),Te&&le.fog===!0&&Ze.refreshFogUniforms(on,Te),Ze.refreshMaterialUniforms(on,le,D,re,R.state.transmissionRenderTarget[C.id]),Dc.upload(z,Pi(tt),on,ft)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Dc.upload(z,Pi(tt),on,ft),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Vt.setValue(z,"center",$.center),Vt.setValue(z,"modelViewMatrix",$.modelViewMatrix),Vt.setValue(z,"normalMatrix",$.normalMatrix),Vt.setValue(z,"modelMatrix",$.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const fn=le.uniformsGroups;for(let mt=0,As=fn.length;mt<As;mt++){const Li=fn[mt];Pe.update(Li,Un),Pe.bind(Li,Un)}}return Un}function Qc(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function ka(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(C,q,J){const le=qe.get(C);le.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),qe.get(C.texture).__webglTexture=q,qe.get(C.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:J,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,q){const J=qe.get(C);J.__webglFramebuffer=q,J.__useDefaultFramebuffer=q===void 0};const Ba=z.createFramebuffer();this.setRenderTarget=function(C,q=0,J=0){w=C,B=q,A=J;let le=!0,$=null,Te=!1,Le=!1;if(C){const Oe=qe.get(C);if(Oe.__useDefaultFramebuffer!==void 0)ke.bindFramebuffer(z.FRAMEBUFFER,null),le=!1;else if(Oe.__webglFramebuffer===void 0)ft.setupRenderTarget(C);else if(Oe.__hasExternalTextures)ft.rebindTextures(C,qe.get(C.texture).__webglTexture,qe.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const nt=C.depthTexture;if(Oe.__boundDepthTexture!==nt){if(nt!==null&&qe.has(nt)&&(C.width!==nt.image.width||C.height!==nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ft.setupDepthRenderbuffer(C)}}const rt=C.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(Le=!0);const Qe=qe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Qe[q])?$=Qe[q][J]:$=Qe[q],Te=!0):C.samples>0&&ft.useMultisampledRTT(C)===!1?$=qe.get(C).__webglMultisampledFramebuffer:Array.isArray(Qe)?$=Qe[J]:$=Qe,K.copy(C.viewport),ie.copy(C.scissor),ne=C.scissorTest}else K.copy(Fe).multiplyScalar(D).floor(),ie.copy(Ne).multiplyScalar(D).floor(),ne=Je;if(J!==0&&($=Ba),ke.bindFramebuffer(z.FRAMEBUFFER,$)&&le&&ke.drawBuffers(C,$),ke.viewport(K),ke.scissor(ie),ke.setScissorTest(ne),Te){const Oe=qe.get(C.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+q,Oe.__webglTexture,J)}else if(Le){const Oe=q;for(let rt=0;rt<C.textures.length;rt++){const Qe=qe.get(C.textures[rt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+rt,Qe.__webglTexture,J,Oe)}}else if(C!==null&&J!==0){const Oe=qe.get(C.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Oe.__webglTexture,J)}F=-1},this.readRenderTargetPixels=function(C,q,J,le,$,Te,Le,Ge=0){if(!(C&&C.isWebGLRenderTarget)){rn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=qe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe){ke.bindFramebuffer(z.FRAMEBUFFER,Oe);try{const rt=C.textures[Ge],Qe=rt.format,nt=rt.type;if(!Ct.textureFormatReadable(Qe)){rn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ct.textureTypeReadable(nt)){rn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-le&&J>=0&&J<=C.height-$&&(C.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ge),z.readPixels(q,J,le,$,lt.convert(Qe),lt.convert(nt),Te))}finally{const rt=w!==null?qe.get(w).__webglFramebuffer:null;ke.bindFramebuffer(z.FRAMEBUFFER,rt)}}},this.readRenderTargetPixelsAsync=async function(C,q,J,le,$,Te,Le,Ge=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=qe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe)if(q>=0&&q<=C.width-le&&J>=0&&J<=C.height-$){ke.bindFramebuffer(z.FRAMEBUFFER,Oe);const rt=C.textures[Ge],Qe=rt.format,nt=rt.type;if(!Ct.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ct.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ct),z.bufferData(z.PIXEL_PACK_BUFFER,Te.byteLength,z.STREAM_READ),C.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ge),z.readPixels(q,J,le,$,lt.convert(Qe),lt.convert(nt),0);const Nt=w!==null?qe.get(w).__webglFramebuffer:null;ke.bindFramebuffer(z.FRAMEBUFFER,Nt);const Yt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await qS(z,Yt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ct),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Te),z.deleteBuffer(ct),z.deleteSync(Yt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,q=null,J=0){const le=Math.pow(2,-J),$=Math.floor(C.image.width*le),Te=Math.floor(C.image.height*le),Le=q!==null?q.x:0,Ge=q!==null?q.y:0;ft.setTexture2D(C,0),z.copyTexSubImage2D(z.TEXTURE_2D,J,0,0,Le,Ge,$,Te),ke.unbindTexture()};const za=z.createFramebuffer(),Va=z.createFramebuffer();this.copyTextureToTexture=function(C,q,J=null,le=null,$=0,Te=null){Te===null&&($!==0?(La("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=$,$=0):Te=0);let Le,Ge,Oe,rt,Qe,nt,ct,Nt,Yt;const qt=C.isCompressedTexture?C.mipmaps[Te]:C.image;if(J!==null)Le=J.max.x-J.min.x,Ge=J.max.y-J.min.y,Oe=J.isBox3?J.max.z-J.min.z:1,rt=J.min.x,Qe=J.min.y,nt=J.isBox3?J.min.z:0;else{const Vn=Math.pow(2,-$);Le=Math.floor(qt.width*Vn),Ge=Math.floor(qt.height*Vn),C.isDataArrayTexture?Oe=qt.depth:C.isData3DTexture?Oe=Math.floor(qt.depth*Vn):Oe=1,rt=0,Qe=0,nt=0}le!==null?(ct=le.x,Nt=le.y,Yt=le.z):(ct=0,Nt=0,Yt=0);const Lt=lt.convert(q.format),tt=lt.convert(q.type);let Ft;q.isData3DTexture?(ft.setTexture3D(q,0),Ft=z.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ft.setTexture2DArray(q,0),Ft=z.TEXTURE_2D_ARRAY):(ft.setTexture2D(q,0),Ft=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,q.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,q.unpackAlignment);const wt=z.getParameter(z.UNPACK_ROW_LENGTH),Un=z.getParameter(z.UNPACK_IMAGE_HEIGHT),xr=z.getParameter(z.UNPACK_SKIP_PIXELS),Mn=z.getParameter(z.UNPACK_SKIP_ROWS),gr=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,qt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,qt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,rt),z.pixelStorei(z.UNPACK_SKIP_ROWS,Qe),z.pixelStorei(z.UNPACK_SKIP_IMAGES,nt);const Vt=C.isDataArrayTexture||C.isData3DTexture,on=q.isDataArrayTexture||q.isData3DTexture;if(C.isDepthTexture){const Vn=qe.get(C),fn=qe.get(q),mt=qe.get(Vn.__renderTarget),As=qe.get(fn.__renderTarget);ke.bindFramebuffer(z.READ_FRAMEBUFFER,mt.__webglFramebuffer),ke.bindFramebuffer(z.DRAW_FRAMEBUFFER,As.__webglFramebuffer);for(let Li=0;Li<Oe;Li++)Vt&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,qe.get(C).__webglTexture,$,nt+Li),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,qe.get(q).__webglTexture,Te,Yt+Li)),z.blitFramebuffer(rt,Qe,Le,Ge,ct,Nt,Le,Ge,z.DEPTH_BUFFER_BIT,z.NEAREST);ke.bindFramebuffer(z.READ_FRAMEBUFFER,null),ke.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if($!==0||C.isRenderTargetTexture||qe.has(C)){const Vn=qe.get(C),fn=qe.get(q);ke.bindFramebuffer(z.READ_FRAMEBUFFER,za),ke.bindFramebuffer(z.DRAW_FRAMEBUFFER,Va);for(let mt=0;mt<Oe;mt++)Vt?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Vn.__webglTexture,$,nt+mt):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Vn.__webglTexture,$),on?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,fn.__webglTexture,Te,Yt+mt):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,fn.__webglTexture,Te),$!==0?z.blitFramebuffer(rt,Qe,Le,Ge,ct,Nt,Le,Ge,z.COLOR_BUFFER_BIT,z.NEAREST):on?z.copyTexSubImage3D(Ft,Te,ct,Nt,Yt+mt,rt,Qe,Le,Ge):z.copyTexSubImage2D(Ft,Te,ct,Nt,rt,Qe,Le,Ge);ke.bindFramebuffer(z.READ_FRAMEBUFFER,null),ke.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else on?C.isDataTexture||C.isData3DTexture?z.texSubImage3D(Ft,Te,ct,Nt,Yt,Le,Ge,Oe,Lt,tt,qt.data):q.isCompressedArrayTexture?z.compressedTexSubImage3D(Ft,Te,ct,Nt,Yt,Le,Ge,Oe,Lt,qt.data):z.texSubImage3D(Ft,Te,ct,Nt,Yt,Le,Ge,Oe,Lt,tt,qt):C.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Te,ct,Nt,Le,Ge,Lt,tt,qt.data):C.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Te,ct,Nt,qt.width,qt.height,Lt,qt.data):z.texSubImage2D(z.TEXTURE_2D,Te,ct,Nt,Le,Ge,Lt,tt,qt);z.pixelStorei(z.UNPACK_ROW_LENGTH,wt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Un),z.pixelStorei(z.UNPACK_SKIP_PIXELS,xr),z.pixelStorei(z.UNPACK_SKIP_ROWS,Mn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,gr),Te===0&&q.generateMipmaps&&z.generateMipmap(Ft),ke.unbindTexture()},this.initRenderTarget=function(C){qe.get(C).__webglFramebuffer===void 0&&ft.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ft.setTextureCube(C,0):C.isData3DTexture?ft.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ft.setTexture2DArray(C,0):ft.setTexture2D(C,0),ke.unbindTexture()},this.resetState=function(){B=0,A=0,w=null,ke.reset(),G.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=It._getDrawingBufferColorSpace(e),t.unpackColorSpace=It._getUnpackColorSpace()}}const Ox={type:"change"},Xd={type:"start"},Wg={type:"end"},_c=new $c,kx=new Wr,Ob=Math.cos(70*bg.DEG2RAD),pn=new H,qn=2*Math.PI,Bt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},vh=1e-6;class kb extends kg{constructor(e,t=null){super(e,t),this.state=Bt.NONE,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:po.ROTATE,MIDDLE:po.DOLLY,RIGHT:po.PAN},this.touches={ONE:fo.ROTATE,TWO:fo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new H,this._lastQuaternion=new bn,this._lastTargetPosition=new H,this._quat=new bn().setFromUnitVectors(e.up,new H(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new hx,this._sphericalDelta=new hx,this._scale=1,this._panOffset=new H,this._rotateStart=new ut,this._rotateEnd=new ut,this._rotateDelta=new ut,this._panStart=new ut,this._panEnd=new ut,this._panDelta=new ut,this._dollyStart=new ut,this._dollyEnd=new ut,this._dollyDelta=new ut,this._dollyDirection=new H,this._mouse=new ut,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=zb.bind(this),this._onPointerDown=Bb.bind(this),this._onPointerUp=Vb.bind(this),this._onContextMenu=qb.bind(this),this._onMouseWheel=Wb.bind(this),this._onKeyDown=jb.bind(this),this._onTouchStart=Xb.bind(this),this._onTouchMove=Yb.bind(this),this._onMouseDown=Hb.bind(this),this._onMouseMove=Gb.bind(this),this._interceptControlDown=$b.bind(this),this._interceptControlUp=Kb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ox),this.update(),this.state=Bt.NONE}update(e=null){const t=this.object.position;pn.copy(t).sub(this.target),pn.applyQuaternion(this._quat),this._spherical.setFromVector3(pn),this.autoRotate&&this.state===Bt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(r)&&isFinite(o)&&(r<-Math.PI?r+=qn:r>Math.PI&&(r-=qn),o<-Math.PI?o+=qn:o>Math.PI&&(o-=qn),r<=o?this._spherical.theta=Math.max(r,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+o)/2?Math.max(r,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=u!=this._spherical.radius}if(pn.setFromSpherical(this._spherical),pn.applyQuaternion(this._quatInverse),t.copy(this.target).add(pn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const f=pn.length();u=this._clampDistance(f*this._scale);const d=f-u;this.object.position.addScaledVector(this._dollyDirection,d),this.object.updateMatrixWorld(),l=!!d}else if(this.object.isOrthographicCamera){const f=new H(this._mouse.x,this._mouse.y,0);f.unproject(this.object);const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=d!==this.object.zoom;const p=new H(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(f),this.object.updateMatrixWorld(),u=pn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(_c.origin.copy(this.object.position),_c.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(_c.direction))<Ob?this.object.lookAt(this.target):(kx.setFromNormalAndCoplanarPoint(this.object.up,this.target),_c.intersectPlane(kx,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>vh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>vh||this._lastTargetPosition.distanceToSquared(this.target)>vh?(this.dispatchEvent(Ox),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?qn/60*this.autoRotateSpeed*e:qn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){pn.setFromMatrixColumn(t,0),pn.multiplyScalar(-e),this._panOffset.add(pn)}_panUp(e,t){this.screenSpacePanning===!0?pn.setFromMatrixColumn(t,1):(pn.setFromMatrixColumn(t,0),pn.crossVectors(this.object.up,pn)),pn.multiplyScalar(e),this._panOffset.add(pn)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;pn.copy(o).sub(this.target);let l=pn.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*t*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),o=e-r.left,l=t-r.top,u=r.width,f=r.height;this._mouse.x=o/u*2-1,this._mouse.y=-(l/f)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(qn*this._rotateDelta.x/t.clientHeight),this._rotateUp(qn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(r,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(r,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),o=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(o,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(qn*this._rotateDelta.x/t.clientHeight),this._rotateUp(qn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(r,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,f=(e.pageY+t.y)*.5;this._updateZoomParameters(u,f)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ut,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function Bb(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function zb(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Vb(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Wg),this.state=Bt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Hb(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case po.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Bt.DOLLY;break;case po.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Bt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Bt.ROTATE}break;case po.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Bt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Bt.PAN}break;default:this.state=Bt.NONE}this.state!==Bt.NONE&&this.dispatchEvent(Xd)}function Gb(s){switch(this.state){case Bt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Bt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Bt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Wb(s){this.enabled===!1||this.enableZoom===!1||this.state!==Bt.NONE||(s.preventDefault(),this.dispatchEvent(Xd),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Wg))}function jb(s){this.enabled!==!1&&this._handleKeyDown(s)}function Xb(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case fo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Bt.TOUCH_ROTATE;break;case fo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Bt.TOUCH_PAN;break;default:this.state=Bt.NONE}break;case 2:switch(this.touches.TWO){case fo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Bt.TOUCH_DOLLY_PAN;break;case fo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Bt.TOUCH_DOLLY_ROTATE;break;default:this.state=Bt.NONE}break;default:this.state=Bt.NONE}this.state!==Bt.NONE&&this.dispatchEvent(Xd)}function Yb(s){switch(this._trackPointer(s),this.state){case Bt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Bt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Bt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Bt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Bt.NONE}}function qb(s){this.enabled!==!1&&s.preventDefault()}function $b(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Kb(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ms=new Og,In=new H,Gr=new H,Kt=new bn,Bx={X:new H(1,0,0),Y:new H(0,1,0),Z:new H(0,0,1)},yh={type:"change"},zx={type:"mouseDown",mode:null},Vx={type:"mouseUp",mode:null},Hx={type:"objectChange"};class Zb extends kg{constructor(e,t=null){super(void 0,t);const r=new iT(this);this._root=r;const o=new rT;this._gizmo=o,r.add(o);const l=new sT;this._plane=l,r.add(l);const u=this;function f(R,I){let k=I;Object.defineProperty(u,R,{get:function(){return k!==void 0?k:I},set:function(L){k!==L&&(k=L,l[R]=L,o[R]=L,u.dispatchEvent({type:R+"-changed",value:L}),u.dispatchEvent(yh))}}),u[R]=I,l[R]=I,o[R]=I}f("camera",e),f("object",void 0),f("enabled",!0),f("axis",null),f("mode","translate"),f("translationSnap",null),f("rotationSnap",null),f("scaleSnap",null),f("space","world"),f("size",1),f("dragging",!1),f("showX",!0),f("showY",!0),f("showZ",!0),f("minX",-1/0),f("maxX",1/0),f("minY",-1/0),f("maxY",1/0),f("minZ",-1/0),f("maxZ",1/0);const d=new H,p=new H,_=new bn,g=new bn,x=new H,y=new bn,M=new H,E=new H,S=new H,v=0,P=new H;f("worldPosition",d),f("worldPositionStart",p),f("worldQuaternion",_),f("worldQuaternionStart",g),f("cameraPosition",x),f("cameraQuaternion",y),f("pointStart",M),f("pointEnd",E),f("rotationAxis",S),f("rotationAngle",v),f("eye",P),this._offset=new H,this._startNorm=new H,this._endNorm=new H,this._cameraScale=new H,this._parentPosition=new H,this._parentQuaternion=new bn,this._parentQuaternionInv=new bn,this._parentScale=new H,this._worldScaleStart=new H,this._worldQuaternionInv=new bn,this._worldScale=new H,this._positionStart=new H,this._quaternionStart=new bn,this._scaleStart=new H,this._getPointer=Qb.bind(this),this._onPointerDown=eT.bind(this),this._onPointerHover=Jb.bind(this),this._onPointerMove=tT.bind(this),this._onPointerUp=nT.bind(this),t!==null&&this.connect(t)}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&ms.setFromCamera(e,this.camera);const t=Sh(this._gizmo.picker[this.mode],ms);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&ms.setFromCamera(e,this.camera);const t=Sh(this._plane,ms,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,zx.mode=this.mode,this.dispatchEvent(zx)}}pointerMove(e){const t=this.axis,r=this.mode,o=this.object;let l=this.space;if(r==="scale"?l="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(l="world"),o===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&ms.setFromCamera(e,this.camera);const u=Sh(this._plane,ms,!0);if(u){if(this.pointEnd.copy(u.point).sub(this.worldPositionStart),r==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),l==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),l==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),o.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(l==="local"&&(o.position.applyQuaternion(Kt.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(o.position.x=Math.round(o.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(o.position.y=Math.round(o.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(o.position.z=Math.round(o.position.z/this.translationSnap)*this.translationSnap),o.position.applyQuaternion(this._quaternionStart)),l==="world"&&(o.parent&&o.position.add(In.setFromMatrixPosition(o.parent.matrixWorld)),t.search("X")!==-1&&(o.position.x=Math.round(o.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(o.position.y=Math.round(o.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(o.position.z=Math.round(o.position.z/this.translationSnap)*this.translationSnap),o.parent&&o.position.sub(In.setFromMatrixPosition(o.parent.matrixWorld)))),o.position.x=Math.max(this.minX,Math.min(this.maxX,o.position.x)),o.position.y=Math.max(this.minY,Math.min(this.maxY,o.position.y)),o.position.z=Math.max(this.minZ,Math.min(this.maxZ,o.position.z));else if(r==="scale"){if(t.search("XYZ")!==-1){let f=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(f*=-1),Gr.set(f,f,f)}else In.copy(this.pointStart),Gr.copy(this.pointEnd),In.applyQuaternion(this._worldQuaternionInv),Gr.applyQuaternion(this._worldQuaternionInv),Gr.divide(In),t.search("X")===-1&&(Gr.x=1),t.search("Y")===-1&&(Gr.y=1),t.search("Z")===-1&&(Gr.z=1);o.scale.copy(this._scaleStart).multiply(Gr),this.scaleSnap&&(t.search("X")!==-1&&(o.scale.x=Math.round(o.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(o.scale.y=Math.round(o.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(o.scale.z=Math.round(o.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(r==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const f=20/this.worldPosition.distanceTo(In.setFromMatrixPosition(this.camera.matrixWorld));let d=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(In.copy(this.rotationAxis).cross(this.eye))*f):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(Bx[t]),In.copy(Bx[t]),l==="local"&&In.applyQuaternion(this.worldQuaternion),In.cross(this.eye),In.length()===0?d=!0:this.rotationAngle=this._offset.dot(In.normalize())*f),(t==="E"||d)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),l==="local"&&t!=="E"&&t!=="XYZE"?(o.quaternion.copy(this._quaternionStart),o.quaternion.multiply(Kt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),o.quaternion.copy(Kt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),o.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(yh),this.dispatchEvent(Hx)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(Vx.mode=this.mode,this.dispatchEvent(Vx)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(yh),this.dispatchEvent(Hx),this.pointStart.copy(this.pointEnd))}getRaycaster(){return ms}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}setColors(e,t,r,o){const l=this._gizmo.materialLib;l.xAxis.color.set(e),l.yAxis.color.set(t),l.zAxis.color.set(r),l.active.color.set(o),l.xAxisTransparent.color.set(e),l.yAxisTransparent.color.set(t),l.zAxisTransparent.color.set(r),l.activeTransparent.color.set(o),l.xAxis._color&&l.xAxis._color.set(e),l.yAxis._color&&l.yAxis._color.set(t),l.zAxis._color&&l.zAxis._color.set(r),l.active._color&&l.active._color.set(o),l.xAxisTransparent._color&&l.xAxisTransparent._color.set(e),l.yAxisTransparent._color&&l.yAxisTransparent._color.set(t),l.zAxisTransparent._color&&l.zAxisTransparent._color.set(r),l.activeTransparent._color&&l.activeTransparent._color.set(o)}}function Qb(s){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:s.button};{const e=this.domElement.getBoundingClientRect();return{x:(s.clientX-e.left)/e.width*2-1,y:-(s.clientY-e.top)/e.height*2+1,button:s.button}}}function Jb(s){if(this.enabled)switch(s.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(s));break}}function eT(s){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(s)),this.pointerDown(this._getPointer(s)))}function tT(s){this.enabled&&this.pointerMove(this._getPointer(s))}function nT(s){this.enabled&&(this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(s)))}function Sh(s,e,t){const r=e.intersectObject(s,!0);for(let o=0;o<r.length;o++)if(r[o].object.visible||t)return r[o];return!1}const vc=new Ri,Ht=new H(0,1,0),Gx=new H(0,0,0),Wx=new Wt,yc=new bn,Ic=new bn,Fi=new H,jx=new Wt,wa=new H(1,0,0),xs=new H(0,1,0),ba=new H(0,0,1),Sc=new H,ya=new H,Sa=new H;class iT extends un{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){const t=this.controls;t.object!==void 0&&(t.object.updateMatrixWorld(),t.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):t.object.parent.matrixWorld.decompose(t._parentPosition,t._parentQuaternion,t._parentScale),t.object.matrixWorld.decompose(t.worldPosition,t.worldQuaternion,t._worldScale),t._parentQuaternionInv.copy(t._parentQuaternion).invert(),t._worldQuaternionInv.copy(t.worldQuaternion).invert()),t.camera.updateMatrixWorld(),t.camera.matrixWorld.decompose(t.cameraPosition,t.cameraQuaternion,t._cameraScale),t.camera.isOrthographicCamera?t.camera.getWorldDirection(t.eye).negate():t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),super.updateMatrixWorld(e)}dispose(){this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}}class rT extends un{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new wo({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new Gd({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),r=e.clone();r.opacity=.15;const o=t.clone();o.opacity=.5;const l=e.clone();l.color.setHex(16711680);const u=e.clone();u.color.setHex(65280);const f=e.clone();f.color.setHex(255);const d=e.clone();d.color.setHex(16711680),d.opacity=.5;const p=e.clone();p.color.setHex(65280),p.opacity=.5;const _=e.clone();_.color.setHex(255),_.opacity=.5;const g=e.clone();g.opacity=.25;const x=e.clone();x.color.setHex(16776960),x.opacity=.25;const y=e.clone();y.color.setHex(16776960);const M=e.clone();M.color.setHex(7895160),this.materialLib={xAxis:l,yAxis:u,zAxis:f,active:y,xAxisTransparent:d,yAxisTransparent:p,zAxisTransparent:_,activeTransparent:x};const E=new Dn(0,.04,.1,12);E.translate(0,.05,0);const S=new nn(.08,.08,.08);S.translate(0,.04,0);const v=new Nn;v.setAttribute("position",new Zt([0,0,0,1,0,0],3));const P=new Dn(.0075,.0075,.5,3);P.translate(0,.25,0);function R(ne,ce){const ae=new _s(ne,.0075,3,64,ce*Math.PI*2);return ae.rotateY(Math.PI/2),ae.rotateX(Math.PI/2),ae}function I(){const ne=new Nn;return ne.setAttribute("position",new Zt([0,0,0,1,1,1],3)),ne}const k={X:[[new Re(E,l),[.5,0,0],[0,0,-Math.PI/2]],[new Re(E,l),[-.5,0,0],[0,0,Math.PI/2]],[new Re(P,l),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new Re(E,u),[0,.5,0]],[new Re(E,u),[0,-.5,0],[Math.PI,0,0]],[new Re(P,u)]],Z:[[new Re(E,f),[0,0,.5],[Math.PI/2,0,0]],[new Re(E,f),[0,0,-.5],[-Math.PI/2,0,0]],[new Re(P,f),null,[Math.PI/2,0,0]]],XYZ:[[new Re(new ho(.1,0),g),[0,0,0]]],XY:[[new Re(new nn(.15,.15,.01),_),[.15,.15,0]]],YZ:[[new Re(new nn(.15,.15,.01),d),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Re(new nn(.15,.15,.01),p),[.15,0,.15],[-Math.PI/2,0,0]]]},L={X:[[new Re(new Dn(.2,0,.6,4),r),[.3,0,0],[0,0,-Math.PI/2]],[new Re(new Dn(.2,0,.6,4),r),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new Re(new Dn(.2,0,.6,4),r),[0,.3,0]],[new Re(new Dn(.2,0,.6,4),r),[0,-.3,0],[0,0,Math.PI]]],Z:[[new Re(new Dn(.2,0,.6,4),r),[0,0,.3],[Math.PI/2,0,0]],[new Re(new Dn(.2,0,.6,4),r),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new Re(new ho(.2,0),r)]],XY:[[new Re(new nn(.2,.2,.01),r),[.15,.15,0]]],YZ:[[new Re(new nn(.2,.2,.01),r),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Re(new nn(.2,.2,.01),r),[.15,0,.15],[-Math.PI/2,0,0]]]},N={START:[[new Re(new ho(.01,2),o),null,null,null,"helper"]],END:[[new Re(new ho(.01,2),o),null,null,null,"helper"]],DELTA:[[new ar(I(),o),null,null,null,"helper"]],X:[[new ar(v,o),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new ar(v,o),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new ar(v,o),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},B={XYZE:[[new Re(R(.5,1),M),null,[0,Math.PI/2,0]]],X:[[new Re(R(.5,.5),l)]],Y:[[new Re(R(.5,.5),u),null,[0,0,-Math.PI/2]]],Z:[[new Re(R(.5,.5),f),null,[0,Math.PI/2,0]]],E:[[new Re(R(.75,1),x),null,[0,Math.PI/2,0]]]},A={AXIS:[[new ar(v,o),[-1e3,0,0],null,[1e6,1,1],"helper"]]},w={XYZE:[[new Re(new _o(.25,10,8),r)]],X:[[new Re(new _s(.5,.1,4,24),r),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new Re(new _s(.5,.1,4,24),r),[0,0,0],[Math.PI/2,0,0]]],Z:[[new Re(new _s(.5,.1,4,24),r),[0,0,0],[0,0,-Math.PI/2]]],E:[[new Re(new _s(.75,.1,2,24),r)]]},F={X:[[new Re(S,l),[.5,0,0],[0,0,-Math.PI/2]],[new Re(P,l),[0,0,0],[0,0,-Math.PI/2]],[new Re(S,l),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new Re(S,u),[0,.5,0]],[new Re(P,u)],[new Re(S,u),[0,-.5,0],[0,0,Math.PI]]],Z:[[new Re(S,f),[0,0,.5],[Math.PI/2,0,0]],[new Re(P,f),[0,0,0],[Math.PI/2,0,0]],[new Re(S,f),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new Re(new nn(.15,.15,.01),_),[.15,.15,0]]],YZ:[[new Re(new nn(.15,.15,.01),d),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Re(new nn(.15,.15,.01),p),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new Re(new nn(.1,.1,.1),g)]]},V={X:[[new Re(new Dn(.2,0,.6,4),r),[.3,0,0],[0,0,-Math.PI/2]],[new Re(new Dn(.2,0,.6,4),r),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new Re(new Dn(.2,0,.6,4),r),[0,.3,0]],[new Re(new Dn(.2,0,.6,4),r),[0,-.3,0],[0,0,Math.PI]]],Z:[[new Re(new Dn(.2,0,.6,4),r),[0,0,.3],[Math.PI/2,0,0]],[new Re(new Dn(.2,0,.6,4),r),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new Re(new nn(.2,.2,.01),r),[.15,.15,0]]],YZ:[[new Re(new nn(.2,.2,.01),r),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Re(new nn(.2,.2,.01),r),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new Re(new nn(.2,.2,.2),r),[0,0,0]]]},K={X:[[new ar(v,o),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new ar(v,o),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new ar(v,o),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function ie(ne){const ce=new un;for(const ae in ne)for(let j=ne[ae].length;j--;){const re=ne[ae][j][0].clone(),D=ne[ae][j][1],Q=ne[ae][j][2],ve=ne[ae][j][3],Fe=ne[ae][j][4];re.name=ae,re.tag=Fe,D&&re.position.set(D[0],D[1],D[2]),Q&&re.rotation.set(Q[0],Q[1],Q[2]),ve&&re.scale.set(ve[0],ve[1],ve[2]),re.updateMatrix();const Ne=re.geometry.clone();Ne.applyMatrix4(re.matrix),re.geometry=Ne,re.renderOrder=1/0,re.position.set(0,0,0),re.rotation.set(0,0,0),re.scale.set(1,1,1),ce.add(re)}return ce}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=ie(k)),this.add(this.gizmo.rotate=ie(B)),this.add(this.gizmo.scale=ie(F)),this.add(this.picker.translate=ie(L)),this.add(this.picker.rotate=ie(w)),this.add(this.picker.scale=ie(V)),this.add(this.helper.translate=ie(N)),this.add(this.helper.rotate=ie(A)),this.add(this.helper.scale=ie(K)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const r=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Ic;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let o=[];o=o.concat(this.picker[this.mode].children),o=o.concat(this.gizmo[this.mode].children),o=o.concat(this.helper[this.mode].children);for(let l=0;l<o.length;l++){const u=o[l];u.visible=!0,u.rotation.set(0,0,0),u.position.copy(this.worldPosition);let f;if(this.camera.isOrthographicCamera?f=(this.camera.top-this.camera.bottom)/this.camera.zoom:f=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),u.scale.set(1,1,1).multiplyScalar(f*this.size/4),u.tag==="helper"){u.visible=!1,u.name==="AXIS"?(u.visible=!!this.axis,this.axis==="X"&&(Kt.setFromEuler(vc.set(0,0,0)),u.quaternion.copy(r).multiply(Kt),Math.abs(Ht.copy(wa).applyQuaternion(r).dot(this.eye))>.9&&(u.visible=!1)),this.axis==="Y"&&(Kt.setFromEuler(vc.set(0,0,Math.PI/2)),u.quaternion.copy(r).multiply(Kt),Math.abs(Ht.copy(xs).applyQuaternion(r).dot(this.eye))>.9&&(u.visible=!1)),this.axis==="Z"&&(Kt.setFromEuler(vc.set(0,Math.PI/2,0)),u.quaternion.copy(r).multiply(Kt),Math.abs(Ht.copy(ba).applyQuaternion(r).dot(this.eye))>.9&&(u.visible=!1)),this.axis==="XYZE"&&(Kt.setFromEuler(vc.set(0,Math.PI/2,0)),Ht.copy(this.rotationAxis),u.quaternion.setFromRotationMatrix(Wx.lookAt(Gx,Ht,xs)),u.quaternion.multiply(Kt),u.visible=this.dragging),this.axis==="E"&&(u.visible=!1)):u.name==="START"?(u.position.copy(this.worldPositionStart),u.visible=this.dragging):u.name==="END"?(u.position.copy(this.worldPosition),u.visible=this.dragging):u.name==="DELTA"?(u.position.copy(this.worldPositionStart),u.quaternion.copy(this.worldQuaternionStart),In.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),In.applyQuaternion(this.worldQuaternionStart.clone().invert()),u.scale.copy(In),u.visible=this.dragging):(u.quaternion.copy(r),this.dragging?u.position.copy(this.worldPositionStart):u.position.copy(this.worldPosition),this.axis&&(u.visible=this.axis.search(u.name)!==-1));continue}u.quaternion.copy(r),this.mode==="translate"||this.mode==="scale"?(u.name==="X"&&Math.abs(Ht.copy(wa).applyQuaternion(r).dot(this.eye))>.99&&(u.scale.set(1e-10,1e-10,1e-10),u.visible=!1),u.name==="Y"&&Math.abs(Ht.copy(xs).applyQuaternion(r).dot(this.eye))>.99&&(u.scale.set(1e-10,1e-10,1e-10),u.visible=!1),u.name==="Z"&&Math.abs(Ht.copy(ba).applyQuaternion(r).dot(this.eye))>.99&&(u.scale.set(1e-10,1e-10,1e-10),u.visible=!1),u.name==="XY"&&Math.abs(Ht.copy(ba).applyQuaternion(r).dot(this.eye))<.2&&(u.scale.set(1e-10,1e-10,1e-10),u.visible=!1),u.name==="YZ"&&Math.abs(Ht.copy(wa).applyQuaternion(r).dot(this.eye))<.2&&(u.scale.set(1e-10,1e-10,1e-10),u.visible=!1),u.name==="XZ"&&Math.abs(Ht.copy(xs).applyQuaternion(r).dot(this.eye))<.2&&(u.scale.set(1e-10,1e-10,1e-10),u.visible=!1)):this.mode==="rotate"&&(yc.copy(r),Ht.copy(this.eye).applyQuaternion(Kt.copy(r).invert()),u.name.search("E")!==-1&&u.quaternion.setFromRotationMatrix(Wx.lookAt(this.eye,Gx,xs)),u.name==="X"&&(Kt.setFromAxisAngle(wa,Math.atan2(-Ht.y,Ht.z)),Kt.multiplyQuaternions(yc,Kt),u.quaternion.copy(Kt)),u.name==="Y"&&(Kt.setFromAxisAngle(xs,Math.atan2(Ht.x,Ht.z)),Kt.multiplyQuaternions(yc,Kt),u.quaternion.copy(Kt)),u.name==="Z"&&(Kt.setFromAxisAngle(ba,Math.atan2(Ht.y,Ht.x)),Kt.multiplyQuaternions(yc,Kt),u.quaternion.copy(Kt))),u.visible=u.visible&&(u.name.indexOf("X")===-1||this.showX),u.visible=u.visible&&(u.name.indexOf("Y")===-1||this.showY),u.visible=u.visible&&(u.name.indexOf("Z")===-1||this.showZ),u.visible=u.visible&&(u.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),u.material._color=u.material._color||u.material.color.clone(),u.material._opacity=u.material._opacity||u.material.opacity,u.material.color.copy(u.material._color),u.material.opacity=u.material._opacity,this.enabled&&this.axis&&(u.name===this.axis?(u.material.color.copy(this.materialLib.active.color),u.material.opacity=1):this.axis.split("").some(function(d){return u.name===d})&&(u.material.color.copy(this.materialLib.active.color),u.material.opacity=1))}super.updateMatrixWorld(e)}}class sT extends Re{constructor(){super(new Po(1e5,1e5,2,2),new wo({visible:!1,wireframe:!0,side:Ai,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),Sc.copy(wa).applyQuaternion(t==="local"?this.worldQuaternion:Ic),ya.copy(xs).applyQuaternion(t==="local"?this.worldQuaternion:Ic),Sa.copy(ba).applyQuaternion(t==="local"?this.worldQuaternion:Ic),Ht.copy(ya),this.mode){case"translate":case"scale":switch(this.axis){case"X":Ht.copy(this.eye).cross(Sc),Fi.copy(Sc).cross(Ht);break;case"Y":Ht.copy(this.eye).cross(ya),Fi.copy(ya).cross(Ht);break;case"Z":Ht.copy(this.eye).cross(Sa),Fi.copy(Sa).cross(Ht);break;case"XY":Fi.copy(Sa);break;case"YZ":Fi.copy(Sc);break;case"XZ":Ht.copy(Sa),Fi.copy(ya);break;case"XYZ":case"E":Fi.set(0,0,0);break}break;case"rotate":default:Fi.set(0,0,0)}Fi.length()===0?this.quaternion.copy(this.cameraQuaternion):(jx.lookAt(In.set(0,0,0),Fi,Ht),this.quaternion.setFromRotationMatrix(jx)),super.updateMatrixWorld(e)}}function oT(){const s=en.useRef(null),e=xt(N=>N.presence),t=xt(N=>N.objects),r=xt(N=>N.selectedId),o=xt(N=>N.gizmoMode),l=xt(N=>N.selectObject),u=xt(N=>N.updateTransform),f=xt(N=>N.lighting),{getPresenceColor:d}=Nv(),p=en.useRef(null),_=en.useRef(null),g=en.useRef(null),x=en.useRef(null),y=en.useRef(null),M=en.useRef({}),E=en.useRef(null),S=en.useRef(null),v=en.useRef(null),P=en.useRef(null),R=en.useRef(null),I=N=>{const B=N.props??{},A=N.type==="cube"?"#8b9ca7":"#9aa8a0",w=B.baseColor??B.color??A,F=typeof B.roughness=="number"?B.roughness:.5,V=typeof B.metalness=="number"?B.metalness:0;return new ox({color:new At(w),roughness:F,metalness:V})},k=N=>{const B=N.props??{},A=B.color??"#ffffff",w=typeof B.intensity=="number"?B.intensity:1.5,F=typeof B.distance=="number"?B.distance:0,V=typeof B.decay=="number"?B.decay:2,K=new At(A),ie=new jM(K,w,F,V),ne=new Re(new _o(.15,16,16),new wo({color:K}));return ne.userData.light=ie,ne.add(ie),ne};en.useEffect(()=>{const N=s.current;if(!N)return;const B=new Fb({antialias:!0});B.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),B.setClearColor(2040875),B.domElement.style.width="100%",B.domElement.style.height="100%",N.appendChild(B.domElement),p.current=B;const A=new UM;_.current=A;const w=new ri(60,1,.1,1e3);w.position.set(4,3,6),g.current=w;const F=new kb(w,B.domElement);F.enableDamping=!0,F.target.set(0,0,0),x.current=F;const V=new Zb(w,B.domElement),K=V.getHelper?V.getHelper():null;K&&A.add(K),V.setSize(1),V.showX=!0,V.showY=!0,V.showZ=!0,window.v3sTControls=V,V.addEventListener("dragging-changed",he=>{F.enabled=!he.value}),V.addEventListener("objectChange",()=>{const he=V.object;if(!he)return;const We=he.userData?.id;We&&u(We,{position:[he.position.x,he.position.y,he.position.z],rotation:[he.rotation.x,he.rotation.y,he.rotation.z],scale:[he.scale.x,he.scale.y,he.scale.z]})}),y.current=V;const ie=new qM(16777215,f.ambientIntensity);A.add(ie),P.current=ie;const ne=new YM(16777215,f.directionalIntensity);ne.position.set(5,10,7),A.add(ne),R.current=ne;const ce={uColor:{value:new At(2830906)},uMajorColor:{value:new At(5216965)},uCamPos:{value:new H},uScale:{value:1},uThickness:{value:.005},uMajorStep:{value:10},uMinorOpacity:{value:.38},uMajorOpacity:{value:.78}},ae=new Wi({transparent:!0,depthWrite:!1,side:Ai,uniforms:ce,vertexShader:`
        varying vec3 vWorldPos;
        void main(){
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorldPos = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,fragmentShader:`
        varying vec3 vWorldPos;
        uniform vec3 uCamPos;
        uniform vec3 uColor;
        uniform vec3 uMajorColor;
        uniform float uScale;
        uniform float uThickness;
        uniform float uMajorStep;
        uniform float uMinorOpacity;
        uniform float uMajorOpacity;
        float grid(vec2 p, float step, float thickness){
          float remx = abs(p.x - round(p.x / step) * step);
          float remy = abs(p.y - round(p.y / step) * step);
          float lx = remx < thickness ? 1.0 : 0.0;
          float ly = remy < thickness ? 1.0 : 0.0;
          return max(lx, ly);
        }
        void main(){
          vec2 p = vWorldPos.xz * uScale;
          float minor = grid(p, 1.0, uThickness);
          float major = grid(p, uMajorStep, uThickness * 1.5);
          vec3 col = (major > 0.5) ? uMajorColor : uColor;
          float alpha = (major > 0.5) ? uMajorOpacity : (minor > 0.5 ? uMinorOpacity : 0.0);
          float dist = distance(vWorldPos, uCamPos);
          alpha *= clamp(1.0 - dist/200.0, 0.15, 1.0);
          if(alpha < 0.01) discard;
          gl_FragColor = vec4(col, alpha);
        }
      `}),j=new Re(new Po(1e4,1e4),ae);j.rotation.x=-Math.PI/2,j.position.set(0,0,0),j.renderOrder=-1,A.add(j);const re=M.current,D=he=>{let We;if(he.type==="cube")We=new Re(new nn(1,1,1),I(he));else if(he.type==="sphere")We=new Re(new _o(.5,32,16),I(he));else if(he.type==="pointLight")We=k(he);else return;We.position.set(he.transform.position[0],he.transform.position[1],he.transform.position[2]),We.rotation.set(he.transform.rotation[0],he.transform.rotation[1],he.transform.rotation[2]),We.scale.set(he.transform.scale[0],he.transform.scale[1],he.transform.scale[2]),We.userData.id=he.id,We instanceof Re&&(We.castShadow=!1,We.receiveShadow=!0),re[he.id]=We,A.add(We)};Object.values(xt.getState().objects).forEach(D);const Q=new Og;S.current=Q;const ve=he=>{const We=y.current;if(We&&(We.dragging||We.axis)||!p.current||!g.current)return;const Be=p.current.domElement.getBoundingClientRect(),Et=(he.clientX-Be.left)/Be.width*2-1,z=-((he.clientY-Be.top)/Be.height*2-1);Q.setFromCamera(new ut(Et,z),g.current);const _t=Object.values(M.current),gt=Q.intersectObjects(_t,!0);if(gt.length>0){let Ct=gt[0].object;for(;Ct&&!Ct.userData?.id;)Ct=Ct.parent;const ke=Ct?.userData?.id;console.log("[v3s] click hit object, id =",ke),l(ke??null)}else console.log("[v3s] click hit nothing, clearing selection"),l(null)},Fe=he=>{if(!p.current)return;const We=p.current.domElement.getBoundingClientRect();if(We.width<=0||We.height<=0)return;const Be=(he.clientX-We.left)/We.width*100,Et=(he.clientY-We.top)/We.height*100;sS(Math.max(0,Math.min(100,Be)),Math.max(0,Math.min(100,Et)))};B.domElement.addEventListener("pointerdown",ve),B.domElement.addEventListener("pointermove",Fe);const Ne=()=>{const he=s.current;if(!he||!p.current||!g.current)return;const We=he.clientWidth,Be=he.clientHeight;p.current.setSize(We,Be,!1),g.current.aspect=We/Math.max(Be,1),g.current.updateProjectionMatrix()};Ne();const Je=new ResizeObserver(Ne);Je.observe(N),v.current=Je;const se=he=>{he.repeat||y.current&&(he.key==="g"||he.key==="G"?xt.getState().setGizmoMode("translate"):he.key==="r"||he.key==="R"?xt.getState().setGizmoMode("rotate"):he.key==="s"||he.key==="S"?xt.getState().setGizmoMode("scale"):he.key==="x"||he.key==="X"?(y.current.showX=!0,y.current.showY=!1,y.current.showZ=!1):he.key==="y"||he.key==="Y"?(y.current.showX=!1,y.current.showY=!0,y.current.showZ=!1):he.key==="z"||he.key==="Z"?(y.current.showX=!1,y.current.showY=!1,y.current.showZ=!0):he.key==="Escape"&&xt.getState().selectObject(null))};window.addEventListener("keydown",se);const fe=he=>{if(y.current){if(he.key==="Shift")y.current.setTranslationSnap(.1),y.current.setRotationSnap(bg.degToRad(5)),y.current.setScaleSnap(.1);else if((he.key==="D"||he.key==="d")&&he.shiftKey){const We=xt.getState().selectedId;if(!We)return;const Be=xt.getState().objects[We];if(!Be)return;const Et=`obj_${Math.random().toString(36).slice(2,8)}`;xt.getState().upsertObject({id:Et,type:Be.type,transform:{position:[Be.transform.position[0]+.5,Be.transform.position[1],Be.transform.position[2]+.5],rotation:[...Be.transform.rotation],scale:[...Be.transform.scale]},props:Be.props}),xt.getState().selectObject(Et)}}},ye=he=>{if(y.current&&(he.key==="Shift"&&(y.current.setTranslationSnap(null),y.current.setRotationSnap(null),y.current.setScaleSnap(null)),xt.getState().selectedId||(y.current.showX=!0,y.current.showY=!0,y.current.showZ=!0),he.key==="Delete")){const We=xt.getState().selectedId;if(!We)return;xt.getState().removeObject(We),xt.getState().selectObject(null)}};window.addEventListener("keydown",fe),window.addEventListener("keyup",ye);let Xe=0;const Ke=()=>{Xe=requestAnimationFrame(Ke),F.update(),ce.uCamPos.value.copy(w.position),B.render(A,w)};return Ke(),()=>{cancelAnimationFrame(Xe),window.removeEventListener("keydown",se),window.removeEventListener("keydown",fe),window.removeEventListener("keyup",ye),B.domElement.removeEventListener("pointerdown",ve),B.domElement.removeEventListener("pointermove",Fe),Je.disconnect(),v.current=null;try{F.dispose()}catch{}try{const he=V.getHelper?V.getHelper():null;he&&A.remove(he),V.detach(),V.dispose()}catch{}Object.values(M.current).forEach(he=>{if(he instanceof Re){const We=he.geometry,Be=he.material;We&&We.dispose(),Array.isArray(Be)?Be.forEach(Et=>Et.dispose()):Be&&Be.dispose()}A.remove(he)}),M.current={},j.geometry.dispose(),ae.dispose();try{B.dispose()}catch{}if(B.domElement.parentNode===N&&N.removeChild(B.domElement),p.current=null,_.current=null,g.current=null,x.current=null,y.current=null,S.current=null,E.current){try{A.remove(E.current)}catch{}const he=E.current.geometry,We=E.current.material;he&&he.dispose(),We&&We.dispose(),E.current=null}}},[]),en.useEffect(()=>{P.current&&(P.current.intensity=f.ambientIntensity),R.current&&(R.current.intensity=f.directionalIntensity)},[f]),en.useEffect(()=>{const N=_.current;if(!N)return;const B=M.current,A=t;Object.keys(B).forEach(w=>{if(!A[w]){const F=B[w];if(F&&(F.parent&&F.parent.remove(F),F instanceof Re)){const V=F.geometry,K=F.material;V&&V.dispose(),Array.isArray(K)?K.forEach(ie=>ie.dispose()):K&&K.dispose()}delete B[w]}}),Object.values(A).forEach(w=>{let F=B[w.id];if(!F){if(w.type==="cube")F=new Re(new nn(1,1,1),I(w));else if(w.type==="sphere")F=new Re(new _o(.5,32,16),I(w));else if(w.type==="pointLight")F=k(w);else return;F.userData.id=w.id,F instanceof Re&&(F.receiveShadow=!0),B[w.id]=F,N.add(F)}if(w.type==="cube"||w.type==="sphere"){if(F instanceof Re){const V=w.props??{},K=w.type==="cube"?"#8b9ca7":"#9aa8a0",ie=V.baseColor??V.color??K,ne=typeof V.roughness=="number"?V.roughness:.5,ce=typeof V.metalness=="number"?V.metalness:0,ae=F.material;!Array.isArray(ae)&&ae instanceof ox&&(ae.color.set(ie),ae.roughness=ne,ae.metalness=ce)}}else if(w.type==="pointLight"){const V=w.props??{},K=V.color??"#ffffff",ie=typeof V.intensity=="number"?V.intensity:1.5,ne=typeof V.distance=="number"?V.distance:0,ce=typeof V.decay=="number"?V.decay:2,ae=F.userData?.light;ae&&(ae.color.set(K),ae.intensity=ie,ae.distance=ne,ae.decay=ce),F instanceof Re&&F.material instanceof wo&&F.material.color.set(K)}F.position.set(w.transform.position[0],w.transform.position[1],w.transform.position[2]),F.rotation.set(w.transform.rotation[0],w.transform.rotation[1],w.transform.rotation[2]),F.scale.set(w.transform.scale[0],w.transform.scale[1],w.transform.scale[2])})},[t]),en.useEffect(()=>{const N=y.current,B=_.current;if(!N||!B)return;if(E.current){try{B.remove(E.current)}catch{}const w=E.current.geometry,F=E.current.material;w&&w.dispose(),F&&F.dispose(),E.current=null}const A=r;if(A){N.showX=!0,N.showY=!0,N.showZ=!0;const w=M.current[A];if(w&&(console.log("[v3s] attaching gizmo to",A,w),N.attach(w),w instanceof Re)){const F=new VM(w.geometry),V=new Gd({color:43775}),K=new zM(F,V);K.position.copy(w.position),K.rotation.copy(w.rotation),K.scale.copy(w.scale),B.add(K),E.current=K}}else console.log("[v3s] detaching gizmo (no selection)"),N.showX=!0,N.showY=!0,N.showZ=!0,N.detach()},[r]),en.useEffect(()=>{const N=y.current;N&&N.setMode(o)},[o]);const L=Object.values(e).map((N,B)=>({userId:N.userId,x:N.cursor?.x??50,y:N.cursor?.y??50,color:N.color??d(B),initials:N.userId.slice(0,2).toUpperCase()}));return Y.jsx("div",{ref:s,style:{position:"relative",height:"100%",width:"100%"},children:Y.jsx(Kv,{presences:L})})}function aT({sceneId:s,navigate:e}){const[t,r]=Tt.useState(!1),[o,l]=Tt.useState(null),[u,f]=Tt.useState(""),[d,p]=Tt.useState(!1),_=wd();Tt.useEffect(()=>{let y=!1;return(async()=>{r(!1),l(null);try{await rS(s),y||r(!0)}catch(E){if(!y){const S=E instanceof Error?E.message:"Failed to open scene";l(S)}}})(),()=>{y=!0,fg()}},[s]);const g=Tt.useCallback(async()=>{p(!0),l(null);try{const y=await Xv(s,"editor",1440,20),M=`${window.location.origin}/invite/${y.token}`;f(M),navigator.clipboard?.writeText&&await navigator.clipboard.writeText(M)}catch(y){const M=y instanceof Error?y.message:"Failed to create invite";l(M)}finally{p(!1)}},[s]),x=Tt.useCallback(async()=>{await $x(),e("/login",!0)},[e]);return Y.jsxs("div",{className:"app-shell",style:{flexDirection:"column"},children:[Y.jsx(ry,{sceneId:s,userName:_?.displayName||"User",onBack:()=>e("/scenes"),onShare:()=>void g(),onLogout:()=>void x(),sharing:d}),u&&Y.jsxs("div",{className:"share-banner",children:["Invite link copied: ",Y.jsx("a",{href:u,children:u})]}),o&&Y.jsx("div",{className:"share-banner error",children:o}),Y.jsxs("div",{style:{display:"flex",flex:1},children:[Y.jsx(ny,{}),Y.jsx("main",{style:{flex:1,position:"relative",background:"linear-gradient(180deg, #fff, #fbfaf9)"},children:t?Y.jsx(oT,{}):Y.jsx("div",{className:"editor-loading",children:"Connecting to scene..."})}),Y.jsx(iy,{})]})]})}function Mh(s){const t=(s.pathname.replace(/\/+$/,"")||"/").split("/").filter(Boolean);if(t[0]==="invite"&&t[1])return{name:"invite",token:t[1]};if(t[0]==="editor"&&t[1])return{name:"editor",sceneId:t[1]};if(t[0]==="scenes")return{name:"scenes"};if(t[0]==="login")return{name:"login"};const o=new URLSearchParams(s.search).get("invite")?.trim();return o?{name:"invite",token:o}:Ed()?{name:"scenes"}:{name:"login"}}function lT(){const[s,e]=Tt.useState(()=>Mh(window.location));Tt.useEffect(()=>{const r=()=>e(Mh(window.location));return window.addEventListener("popstate",r),()=>{window.removeEventListener("popstate",r)}},[]);const t=Tt.useCallback((r,o=!1)=>{o?window.history.replaceState({},"",r):window.history.pushState({},"",r),e(Mh(window.location))},[]);return{route:s,navigate:t}}function cT(){const{route:s,navigate:e}=lT();return Y.jsxs(Iv,{children:[s.name==="login"&&Y.jsx(Hv,{navigate:e}),s.name==="scenes"&&Y.jsx(Yv,{navigate:e}),s.name==="invite"&&Y.jsx(qv,{token:s.token,navigate:e}),s.name==="editor"&&Y.jsx(aT,{sceneId:s.sceneId,navigate:e})]})}const uT=document.getElementById("root");Dv.createRoot(uT).render(Y.jsx(Tt.StrictMode,{children:Y.jsx(cT,{})}));
