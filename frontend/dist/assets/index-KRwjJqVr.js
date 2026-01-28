(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function Xg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Ku={exports:{}},Zo={},$u={exports:{}},St={};var lm;function jg(){if(lm)return St;lm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function g(I){return I===null||typeof I!="object"?null:(I=_&&I[_]||I["@@iterator"],typeof I=="function"?I:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function y(I,K,_e){this.props=I,this.context=K,this.refs=T,this.updater=_e||S}y.prototype.isReactComponent={},y.prototype.setState=function(I,K){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,K,"setState")},y.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function x(){}x.prototype=y.prototype;function A(I,K,_e){this.props=I,this.context=K,this.refs=T,this.updater=_e||S}var C=A.prototype=new x;C.constructor=A,E(C,y.prototype),C.isPureReactComponent=!0;var L=Array.isArray,U=Object.prototype.hasOwnProperty,D={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function G(I,K,_e){var Fe,le={},Ee=null,$=null;if(K!=null)for(Fe in K.ref!==void 0&&($=K.ref),K.key!==void 0&&(Ee=""+K.key),K)U.call(K,Fe)&&!O.hasOwnProperty(Fe)&&(le[Fe]=K[Fe]);var ae=arguments.length-2;if(ae===1)le.children=_e;else if(1<ae){for(var ve=Array(ae),Xe=0;Xe<ae;Xe++)ve[Xe]=arguments[Xe+2];le.children=ve}if(I&&I.defaultProps)for(Fe in ae=I.defaultProps,ae)le[Fe]===void 0&&(le[Fe]=ae[Fe]);return{$$typeof:s,type:I,key:Ee,ref:$,props:le,_owner:D.current}}function P(I,K){return{$$typeof:s,type:I.type,key:K,ref:I.ref,props:I.props,_owner:I._owner}}function b(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function z(I){var K={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(_e){return K[_e]})}var j=/\/+/g;function te(I,K){return typeof I=="object"&&I!==null&&I.key!=null?z(""+I.key):K.toString(36)}function oe(I,K,_e,Fe,le){var Ee=typeof I;(Ee==="undefined"||Ee==="boolean")&&(I=null);var $=!1;if(I===null)$=!0;else switch(Ee){case"string":case"number":$=!0;break;case"object":switch(I.$$typeof){case s:case e:$=!0}}if($)return $=I,le=le($),I=Fe===""?"."+te($,0):Fe,L(le)?(_e="",I!=null&&(_e=I.replace(j,"$&/")+"/"),oe(le,K,_e,"",function(Xe){return Xe})):le!=null&&(b(le)&&(le=P(le,_e+(!le.key||$&&$.key===le.key?"":(""+le.key).replace(j,"$&/")+"/")+I)),K.push(le)),1;if($=0,Fe=Fe===""?".":Fe+":",L(I))for(var ae=0;ae<I.length;ae++){Ee=I[ae];var ve=Fe+te(Ee,ae);$+=oe(Ee,K,_e,ve,le)}else if(ve=g(I),typeof ve=="function")for(I=ve.call(I),ae=0;!(Ee=I.next()).done;)Ee=Ee.value,ve=Fe+te(Ee,ae++),$+=oe(Ee,K,_e,ve,le);else if(Ee==="object")throw K=String(I),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return $}function re(I,K,_e){if(I==null)return I;var Fe=[],le=0;return oe(I,Fe,"","",function(Ee){return K.call(_e,Ee,le++)}),Fe}function ue(I){if(I._status===-1){var K=I._result;K=K(),K.then(function(_e){(I._status===0||I._status===-1)&&(I._status=1,I._result=_e)},function(_e){(I._status===0||I._status===-1)&&(I._status=2,I._result=_e)}),I._status===-1&&(I._status=0,I._result=K)}if(I._status===1)return I._result.default;throw I._result}var fe={current:null},H={transition:null},ne={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:H,ReactCurrentOwner:D};return St.Children={map:re,forEach:function(I,K,_e){re(I,function(){K.apply(this,arguments)},_e)},count:function(I){var K=0;return re(I,function(){K++}),K},toArray:function(I){return re(I,function(K){return K})||[]},only:function(I){if(!b(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},St.Component=y,St.Fragment=t,St.Profiler=a,St.PureComponent=A,St.StrictMode=r,St.Suspense=h,St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ne,St.cloneElement=function(I,K,_e){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var Fe=E({},I.props),le=I.key,Ee=I.ref,$=I._owner;if(K!=null){if(K.ref!==void 0&&(Ee=K.ref,$=D.current),K.key!==void 0&&(le=""+K.key),I.type&&I.type.defaultProps)var ae=I.type.defaultProps;for(ve in K)U.call(K,ve)&&!O.hasOwnProperty(ve)&&(Fe[ve]=K[ve]===void 0&&ae!==void 0?ae[ve]:K[ve])}var ve=arguments.length-2;if(ve===1)Fe.children=_e;else if(1<ve){ae=Array(ve);for(var Xe=0;Xe<ve;Xe++)ae[Xe]=arguments[Xe+2];Fe.children=ae}return{$$typeof:s,type:I.type,key:le,ref:Ee,props:Fe,_owner:$}},St.createContext=function(I){return I={$$typeof:u,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:l,_context:I},I.Consumer=I},St.createElement=G,St.createFactory=function(I){var K=G.bind(null,I);return K.type=I,K},St.createRef=function(){return{current:null}},St.forwardRef=function(I){return{$$typeof:f,render:I}},St.isValidElement=b,St.lazy=function(I){return{$$typeof:v,_payload:{_status:-1,_result:I},_init:ue}},St.memo=function(I,K){return{$$typeof:p,type:I,compare:K===void 0?null:K}},St.startTransition=function(I){var K=H.transition;H.transition={};try{I()}finally{H.transition=K}},St.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},St.useCallback=function(I,K){return fe.current.useCallback(I,K)},St.useContext=function(I){return fe.current.useContext(I)},St.useDebugValue=function(){},St.useDeferredValue=function(I){return fe.current.useDeferredValue(I)},St.useEffect=function(I,K){return fe.current.useEffect(I,K)},St.useId=function(){return fe.current.useId()},St.useImperativeHandle=function(I,K,_e){return fe.current.useImperativeHandle(I,K,_e)},St.useInsertionEffect=function(I,K){return fe.current.useInsertionEffect(I,K)},St.useLayoutEffect=function(I,K){return fe.current.useLayoutEffect(I,K)},St.useMemo=function(I,K){return fe.current.useMemo(I,K)},St.useReducer=function(I,K,_e){return fe.current.useReducer(I,K,_e)},St.useRef=function(I){return fe.current.useRef(I)},St.useState=function(I){return fe.current.useState(I)},St.useSyncExternalStore=function(I,K,_e){return fe.current.useSyncExternalStore(I,K,_e)},St.useTransition=function(){return fe.current.useTransition()},St.version="18.2.0",St}var cm;function Td(){return cm||(cm=1,$u.exports=jg()),$u.exports}var um;function Yg(){if(um)return Zo;um=1;var s=Td(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,p){var v,_={},g=null,S=null;p!==void 0&&(g=""+p),h.key!==void 0&&(g=""+h.key),h.ref!==void 0&&(S=h.ref);for(v in h)r.call(h,v)&&!l.hasOwnProperty(v)&&(_[v]=h[v]);if(f&&f.defaultProps)for(v in h=f.defaultProps,h)_[v]===void 0&&(_[v]=h[v]);return{$$typeof:e,type:f,key:g,ref:S,props:_,_owner:a.current}}return Zo.Fragment=t,Zo.jsx=u,Zo.jsxs=u,Zo}var fm;function qg(){return fm||(fm=1,Ku.exports=Yg()),Ku.exports}var Ce=qg(),fn=Td();const ra=Xg(fn);var wl={},Qu={exports:{}},Wn={},Ju={exports:{}},ef={};var dm;function Zg(){return dm||(dm=1,(function(s){function e(H,ne){var I=H.length;H.push(ne);e:for(;0<I;){var K=I-1>>>1,_e=H[K];if(0<a(_e,ne))H[K]=ne,H[I]=_e,I=K;else break e}}function t(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var ne=H[0],I=H.pop();if(I!==ne){H[0]=I;e:for(var K=0,_e=H.length,Fe=_e>>>1;K<Fe;){var le=2*(K+1)-1,Ee=H[le],$=le+1,ae=H[$];if(0>a(Ee,I))$<_e&&0>a(ae,Ee)?(H[K]=ae,H[$]=I,K=$):(H[K]=Ee,H[le]=I,K=le);else if($<_e&&0>a(ae,I))H[K]=ae,H[$]=I,K=$;else break e}}return ne}function a(H,ne){var I=H.sortIndex-ne.sortIndex;return I!==0?I:H.id-ne.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var h=[],p=[],v=1,_=null,g=3,S=!1,E=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(H){for(var ne=t(p);ne!==null;){if(ne.callback===null)r(p);else if(ne.startTime<=H)r(p),ne.sortIndex=ne.expirationTime,e(h,ne);else break;ne=t(p)}}function L(H){if(T=!1,C(H),!E)if(t(h)!==null)E=!0,ue(U);else{var ne=t(p);ne!==null&&fe(L,ne.startTime-H)}}function U(H,ne){E=!1,T&&(T=!1,x(G),G=-1),S=!0;var I=g;try{for(C(ne),_=t(h);_!==null&&(!(_.expirationTime>ne)||H&&!z());){var K=_.callback;if(typeof K=="function"){_.callback=null,g=_.priorityLevel;var _e=K(_.expirationTime<=ne);ne=s.unstable_now(),typeof _e=="function"?_.callback=_e:_===t(h)&&r(h),C(ne)}else r(h);_=t(h)}if(_!==null)var Fe=!0;else{var le=t(p);le!==null&&fe(L,le.startTime-ne),Fe=!1}return Fe}finally{_=null,g=I,S=!1}}var D=!1,O=null,G=-1,P=5,b=-1;function z(){return!(s.unstable_now()-b<P)}function j(){if(O!==null){var H=s.unstable_now();b=H;var ne=!0;try{ne=O(!0,H)}finally{ne?te():(D=!1,O=null)}}else D=!1}var te;if(typeof A=="function")te=function(){A(j)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,re=oe.port2;oe.port1.onmessage=j,te=function(){re.postMessage(null)}}else te=function(){y(j,0)};function ue(H){O=H,D||(D=!0,te())}function fe(H,ne){G=y(function(){H(s.unstable_now())},ne)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_continueExecution=function(){E||S||(E=!0,ue(U))},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(H){switch(g){case 1:case 2:case 3:var ne=3;break;default:ne=g}var I=g;g=ne;try{return H()}finally{g=I}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(H,ne){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var I=g;g=H;try{return ne()}finally{g=I}},s.unstable_scheduleCallback=function(H,ne,I){var K=s.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?K+I:K):I=K,H){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=I+_e,H={id:v++,callback:ne,priorityLevel:H,startTime:I,expirationTime:_e,sortIndex:-1},I>K?(H.sortIndex=I,e(p,H),t(h)===null&&H===t(p)&&(T?(x(G),G=-1):T=!0,fe(L,I-K))):(H.sortIndex=_e,e(h,H),E||S||(E=!0,ue(U))),H},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(H){var ne=g;return function(){var I=g;g=ne;try{return H.apply(this,arguments)}finally{g=I}}}})(ef)),ef}var hm;function Kg(){return hm||(hm=1,Ju.exports=Zg()),Ju.exports}var pm;function $g(){if(pm)return Wn;pm=1;var s=Td(),e=Kg();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},_={};function g(n){return h.call(_,n)?!0:h.call(v,n)?!1:p.test(n)?_[n]=!0:(v[n]=!0,!1)}function S(n,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,o,c){if(i===null||typeof i>"u"||S(n,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(n,i,o,c,d,m,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new T(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new T(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new T(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new T(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new T(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new T(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new T(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new T(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new T(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function A(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(x,A);y[i]=new T(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(x,A);y[i]=new T(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(x,A);y[i]=new T(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new T(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new T(n,1,!1,n.toLowerCase(),null,!0,!0)});function C(n,i,o,c){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,d,c)&&(o=null),c||d===null?g(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,c=d.attributeNamespace,o===null?n.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,c?n.setAttributeNS(c,i,o):n.setAttribute(i,o))))}var L=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),D=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),z=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),re=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),fe=Symbol.for("react.offscreen"),H=Symbol.iterator;function ne(n){return n===null||typeof n!="object"?null:(n=H&&n[H]||n["@@iterator"],typeof n=="function"?n:null)}var I=Object.assign,K;function _e(n){if(K===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);K=i&&i[1]||""}return`
`+K+n}var Fe=!1;function le(n,i){if(!n||Fe)return"";Fe=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ie){var c=ie}Reflect.construct(n,[],i)}else{try{i.call()}catch(ie){c=ie}n.call(i.prototype)}else{try{throw Error()}catch(ie){c=ie}n()}}catch(ie){if(ie&&c&&typeof ie.stack=="string"){for(var d=ie.stack.split(`
`),m=c.stack.split(`
`),M=d.length-1,F=m.length-1;1<=M&&0<=F&&d[M]!==m[F];)F--;for(;1<=M&&0<=F;M--,F--)if(d[M]!==m[F]){if(M!==1||F!==1)do if(M--,F--,0>F||d[M]!==m[F]){var V=`
`+d[M].replace(" at new "," at ");return n.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",n.displayName)),V}while(1<=M&&0<=F);break}}}finally{Fe=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?_e(n):""}function Ee(n){switch(n.tag){case 5:return _e(n.type);case 16:return _e("Lazy");case 13:return _e("Suspense");case 19:return _e("SuspenseList");case 0:case 2:case 15:return n=le(n.type,!1),n;case 11:return n=le(n.type.render,!1),n;case 1:return n=le(n.type,!0),n;default:return""}}function $(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case D:return"Portal";case P:return"Profiler";case G:return"StrictMode";case te:return"Suspense";case oe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case b:return(n._context.displayName||"Context")+".Provider";case j:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case re:return i=n.displayName||null,i!==null?i:$(n.type)||"Memo";case ue:i=n._payload,n=n._init;try{return $(n(i))}catch{}}return null}function ae(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $(i);case 8:return i===G?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ve(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Xe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function We(n){var i=Xe(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,m=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(M){c=""+M,m.call(this,M)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(M){c=""+M},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function dt(n){n._valueTracker||(n._valueTracker=We(n))}function tn(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return n&&(c=Xe(n)?n.checked?"true":"false":n.value),n=c,n!==o?(i.setValue(n),!0):!1}function pt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function It(n,i){var o=i.checked;return I({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function k(n,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=ve(i.value!=null?i.value:o),n._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function _t(n,i){i=i.checked,i!=null&&C(n,"checked",i,!1)}function xt(n,i){_t(n,i);var o=ve(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?ze(n,i.type,o):i.hasOwnProperty("defaultValue")&&ze(n,i.type,ve(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Pt(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function ze(n,i,o){(i!=="number"||pt(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var Dt=Array.isArray;function Ye(n,i,o,c){if(n=n.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=i.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&c&&(n[o].defaultSelected=!0)}else{for(o=""+ve(o),i=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function at(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return I({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function N(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(Dt(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:ve(o)}}function w(n,i){var o=ve(i.value),c=ve(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),c!=null&&(n.defaultValue=""+c)}function J(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function de(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pe(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?de(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ce,Ze=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,o,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ce=ce||document.createElement("div"),ce.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ce.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Re(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var $e={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qe=["Webkit","ms","Moz","O"];Object.keys($e).forEach(function(n){qe.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),$e[i]=$e[n]})});function ge(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||$e.hasOwnProperty(n)&&$e[n]?(""+i).trim():i+"px"}function Ae(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,d=ge(o,i[o],c);o==="float"&&(o="cssFloat"),c?n.setProperty(o,d):n[o]=d}}var rt=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function et(n,i){if(i){if(rt[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ue(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var st=null;function B(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Pe=null,we=null,Te=null;function Se(n){if(n=Uo(n)){if(typeof Pe!="function")throw Error(t(280));var i=n.stateNode;i&&(i=za(i),Pe(n.stateNode,n.type,i))}}function he(n){we?Te?Te.push(n):Te=[n]:we=n}function Be(){if(we){var n=we,i=Te;if(Te=we=null,Se(n),i)for(n=0;n<i.length;n++)Se(i[n])}}function lt(n,i){return n(i)}function Ut(){}var wt=!1;function Yn(n,i,o){if(wt)return n(i,o);wt=!0;try{return lt(n,i,o)}finally{wt=!1,(we!==null||Te!==null)&&(Ut(),Be())}}function _n(n,i){var o=n.stateNode;if(o===null)return null;var c=za(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var xo=!1;if(f)try{var ir={};Object.defineProperty(ir,"passive",{get:function(){xo=!0}}),window.addEventListener("test",ir,ir),window.removeEventListener("test",ir,ir)}catch{xo=!1}function ga(n,i,o,c,d,m,M,F,V){var ie=Array.prototype.slice.call(arguments,3);try{i.apply(o,ie)}catch(xe){this.onError(xe)}}var qn=!1,rr=null,kr=!1,ds=null,hs={onError:function(n){qn=!0,rr=n}};function _a(n,i,o,c,d,m,M,F,V){qn=!1,rr=null,ga.apply(hs,arguments)}function ps(n,i,o,c,d,m,M,F,V){if(_a.apply(this,arguments),qn){if(qn){var ie=rr;qn=!1,rr=null}else throw Error(t(198));kr||(kr=!0,ds=ie)}}function Ti(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function go(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function va(n){if(Ti(n)!==n)throw Error(t(188))}function vc(n){var i=n.alternate;if(!i){if(i=Ti(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,c=i;;){var d=o.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){o=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===o)return va(d),n;if(m===c)return va(d),i;m=m.sibling}throw Error(t(188))}if(o.return!==c.return)o=d,c=m;else{for(var M=!1,F=d.child;F;){if(F===o){M=!0,o=d,c=m;break}if(F===c){M=!0,c=d,o=m;break}F=F.sibling}if(!M){for(F=m.child;F;){if(F===o){M=!0,o=m,c=d;break}if(F===c){M=!0,c=m,o=d;break}F=F.sibling}if(!M)throw Error(t(189))}}if(o.alternate!==c)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function ya(n){return n=vc(n),n!==null?Sa(n):null}function Sa(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Sa(n);if(i!==null)return i;n=n.sibling}return null}var Ma=e.unstable_scheduleCallback,Ea=e.unstable_cancelCallback,R=e.unstable_shouldYield,Y=e.unstable_requestPaint,Q=e.unstable_now,se=e.unstable_getCurrentPriorityLevel,q=e.unstable_ImmediatePriority,be=e.unstable_UserBlockingPriority,De=e.unstable_NormalPriority,He=e.unstable_LowPriority,Oe=e.unstable_IdlePriority,tt=null,Ke=null;function Je(n){if(Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(tt,n,void 0,(n.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:Wt,Ct=Math.log,Gt=Math.LN2;function Wt(n){return n>>>=0,n===0?32:31-(Ct(n)/Gt|0)|0}var Tt=64,Qe=4194304;function Lt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function yt(n,i){var o=n.pendingLanes;if(o===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,M=o&268435455;if(M!==0){var F=M&~d;F!==0?c=Lt(F):(m&=M,m!==0&&(c=Lt(m)))}else M=o&~d,M!==0?c=Lt(M):m!==0&&(c=Lt(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)o=31-ot(i),d=1<<o,c|=n[o],i&=~d;return c}function Ln(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sr(n,i){for(var o=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var M=31-ot(m),F=1<<M,V=d[M];V===-1?((F&o)===0||(F&c)!==0)&&(d[M]=Ln(F,i)):V<=i&&(n.expiredLanes|=F),m&=~F}}function vn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function or(){var n=Tt;return Tt<<=1,(Tt&4194240)===0&&(Tt=64),n}function Ot(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function nn(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-ot(i),n[i]=o}function kn(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-ot(o),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,o&=~m}}function an(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var c=31-ot(o),d=1<<c;d&i|n[c]&i&&(n[c]|=i),o&=~d}}var ht=0;function ms(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var bi,yc,Vd,Hd,Gd,Sc=!1,wa=[],ar=null,lr=null,cr=null,_o=new Map,vo=new Map,ur=[],hx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wd(n,i){switch(n){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":_o.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":vo.delete(i.pointerId)}}function yo(n,i,o,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Uo(i),i!==null&&yc(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function px(n,i,o,c,d){switch(i){case"focusin":return ar=yo(ar,n,i,o,c,d),!0;case"dragenter":return lr=yo(lr,n,i,o,c,d),!0;case"mouseover":return cr=yo(cr,n,i,o,c,d),!0;case"pointerover":var m=d.pointerId;return _o.set(m,yo(_o.get(m)||null,n,i,o,c,d)),!0;case"gotpointercapture":return m=d.pointerId,vo.set(m,yo(vo.get(m)||null,n,i,o,c,d)),!0}return!1}function Xd(n){var i=zr(n.target);if(i!==null){var o=Ti(i);if(o!==null){if(i=o.tag,i===13){if(i=go(o),i!==null){n.blockedOn=i,Gd(n.priority,function(){Vd(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ta(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=Ec(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);st=c,o.target.dispatchEvent(c),st=null}else return i=Uo(o),i!==null&&yc(i),n.blockedOn=o,!1;i.shift()}return!0}function jd(n,i,o){Ta(n)&&o.delete(i)}function mx(){Sc=!1,ar!==null&&Ta(ar)&&(ar=null),lr!==null&&Ta(lr)&&(lr=null),cr!==null&&Ta(cr)&&(cr=null),_o.forEach(jd),vo.forEach(jd)}function So(n,i){n.blockedOn===i&&(n.blockedOn=null,Sc||(Sc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,mx)))}function Mo(n){function i(d){return So(d,n)}if(0<wa.length){So(wa[0],n);for(var o=1;o<wa.length;o++){var c=wa[o];c.blockedOn===n&&(c.blockedOn=null)}}for(ar!==null&&So(ar,n),lr!==null&&So(lr,n),cr!==null&&So(cr,n),_o.forEach(i),vo.forEach(i),o=0;o<ur.length;o++)c=ur[o],c.blockedOn===n&&(c.blockedOn=null);for(;0<ur.length&&(o=ur[0],o.blockedOn===null);)Xd(o),o.blockedOn===null&&ur.shift()}var xs=L.ReactCurrentBatchConfig,ba=!0;function xx(n,i,o,c){var d=ht,m=xs.transition;xs.transition=null;try{ht=1,Mc(n,i,o,c)}finally{ht=d,xs.transition=m}}function gx(n,i,o,c){var d=ht,m=xs.transition;xs.transition=null;try{ht=4,Mc(n,i,o,c)}finally{ht=d,xs.transition=m}}function Mc(n,i,o,c){if(ba){var d=Ec(n,i,o,c);if(d===null)Bc(n,i,c,Aa,o),Wd(n,c);else if(px(d,n,i,o,c))c.stopPropagation();else if(Wd(n,c),i&4&&-1<hx.indexOf(n)){for(;d!==null;){var m=Uo(d);if(m!==null&&bi(m),m=Ec(n,i,o,c),m===null&&Bc(n,i,c,Aa,o),m===d)break;d=m}d!==null&&c.stopPropagation()}else Bc(n,i,c,null,o)}}var Aa=null;function Ec(n,i,o,c){if(Aa=null,n=B(c),n=zr(n),n!==null)if(i=Ti(n),i===null)n=null;else if(o=i.tag,o===13){if(n=go(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Aa=n,null}function Yd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(se()){case q:return 1;case be:return 4;case De:case He:return 16;case Oe:return 536870912;default:return 16}default:return 16}}var fr=null,wc=null,Ca=null;function qd(){if(Ca)return Ca;var n,i=wc,o=i.length,c,d="value"in fr?fr.value:fr.textContent,m=d.length;for(n=0;n<o&&i[n]===d[n];n++);var M=o-n;for(c=1;c<=M&&i[o-c]===d[m-c];c++);return Ca=d.slice(n,1<c?1-c:void 0)}function Ra(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Pa(){return!0}function Zd(){return!1}function Zn(n){function i(o,c,d,m,M){this._reactName=o,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=M,this.currentTarget=null;for(var F in n)n.hasOwnProperty(F)&&(o=n[F],this[F]=o?o(m):m[F]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Pa:Zd,this.isPropagationStopped=Zd,this}return I(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Pa)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Pa)},persist:function(){},isPersistent:Pa}),i}var gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tc=Zn(gs),Eo=I({},gs,{view:0,detail:0}),_x=Zn(Eo),bc,Ac,wo,Da=I({},Eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==wo&&(wo&&n.type==="mousemove"?(bc=n.screenX-wo.screenX,Ac=n.screenY-wo.screenY):Ac=bc=0,wo=n),bc)},movementY:function(n){return"movementY"in n?n.movementY:Ac}}),Kd=Zn(Da),vx=I({},Da,{dataTransfer:0}),yx=Zn(vx),Sx=I({},Eo,{relatedTarget:0}),Cc=Zn(Sx),Mx=I({},gs,{animationName:0,elapsedTime:0,pseudoElement:0}),Ex=Zn(Mx),wx=I({},gs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Tx=Zn(wx),bx=I({},gs,{data:0}),$d=Zn(bx),Ax={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Px(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Rx[n])?!!i[n]:!1}function Rc(){return Px}var Dx=I({},Eo,{key:function(n){if(n.key){var i=Ax[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ra(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Cx[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rc,charCode:function(n){return n.type==="keypress"?Ra(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ra(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Lx=Zn(Dx),Ix=I({},Da,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qd=Zn(Ix),Ux=I({},Eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rc}),Nx=Zn(Ux),Fx=I({},gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ox=Zn(Fx),kx=I({},Da,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),zx=Zn(kx),Bx=[9,13,27,32],Pc=f&&"CompositionEvent"in window,To=null;f&&"documentMode"in document&&(To=document.documentMode);var Vx=f&&"TextEvent"in window&&!To,Jd=f&&(!Pc||To&&8<To&&11>=To),eh=" ",th=!1;function nh(n,i){switch(n){case"keyup":return Bx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ih(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var _s=!1;function Hx(n,i){switch(n){case"compositionend":return ih(i);case"keypress":return i.which!==32?null:(th=!0,eh);case"textInput":return n=i.data,n===eh&&th?null:n;default:return null}}function Gx(n,i){if(_s)return n==="compositionend"||!Pc&&nh(n,i)?(n=qd(),Ca=wc=fr=null,_s=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Jd&&i.locale!=="ko"?null:i.data;default:return null}}var Wx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Wx[n.type]:i==="textarea"}function sh(n,i,o,c){he(c),i=Fa(i,"onChange"),0<i.length&&(o=new Tc("onChange","change",null,o,c),n.push({event:o,listeners:i}))}var bo=null,Ao=null;function Xx(n){Eh(n,0)}function La(n){var i=Es(n);if(tn(i))return n}function jx(n,i){if(n==="change")return i}var oh=!1;if(f){var Dc;if(f){var Lc="oninput"in document;if(!Lc){var ah=document.createElement("div");ah.setAttribute("oninput","return;"),Lc=typeof ah.oninput=="function"}Dc=Lc}else Dc=!1;oh=Dc&&(!document.documentMode||9<document.documentMode)}function lh(){bo&&(bo.detachEvent("onpropertychange",ch),Ao=bo=null)}function ch(n){if(n.propertyName==="value"&&La(Ao)){var i=[];sh(i,Ao,n,B(n)),Yn(Xx,i)}}function Yx(n,i,o){n==="focusin"?(lh(),bo=i,Ao=o,bo.attachEvent("onpropertychange",ch)):n==="focusout"&&lh()}function qx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return La(Ao)}function Zx(n,i){if(n==="click")return La(i)}function Kx(n,i){if(n==="input"||n==="change")return La(i)}function $x(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var hi=typeof Object.is=="function"?Object.is:$x;function Co(n,i){if(hi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var d=o[c];if(!h.call(i,d)||!hi(n[d],i[d]))return!1}return!0}function uh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function fh(n,i){var o=uh(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=i&&c>=i)return{node:o,offset:i-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=uh(o)}}function dh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?dh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function hh(){for(var n=window,i=pt();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=pt(n.document)}return i}function Ic(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Qx(n){var i=hh(),o=n.focusedElem,c=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&dh(o.ownerDocument.documentElement,o)){if(c!==null&&Ic(o)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=fh(o,m);var M=fh(o,c);d&&M&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==M.node||n.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Jx=f&&"documentMode"in document&&11>=document.documentMode,vs=null,Uc=null,Ro=null,Nc=!1;function ph(n,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Nc||vs==null||vs!==pt(c)||(c=vs,"selectionStart"in c&&Ic(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ro&&Co(Ro,c)||(Ro=c,c=Fa(Uc,"onSelect"),0<c.length&&(i=new Tc("onSelect","select",null,i,o),n.push({event:i,listeners:c}),i.target=vs)))}function Ia(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var ys={animationend:Ia("Animation","AnimationEnd"),animationiteration:Ia("Animation","AnimationIteration"),animationstart:Ia("Animation","AnimationStart"),transitionend:Ia("Transition","TransitionEnd")},Fc={},mh={};f&&(mh=document.createElement("div").style,"AnimationEvent"in window||(delete ys.animationend.animation,delete ys.animationiteration.animation,delete ys.animationstart.animation),"TransitionEvent"in window||delete ys.transitionend.transition);function Ua(n){if(Fc[n])return Fc[n];if(!ys[n])return n;var i=ys[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in mh)return Fc[n]=i[o];return n}var xh=Ua("animationend"),gh=Ua("animationiteration"),_h=Ua("animationstart"),vh=Ua("transitionend"),yh=new Map,Sh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dr(n,i){yh.set(n,i),l(i,[n])}for(var Oc=0;Oc<Sh.length;Oc++){var kc=Sh[Oc],eg=kc.toLowerCase(),tg=kc[0].toUpperCase()+kc.slice(1);dr(eg,"on"+tg)}dr(xh,"onAnimationEnd"),dr(gh,"onAnimationIteration"),dr(_h,"onAnimationStart"),dr("dblclick","onDoubleClick"),dr("focusin","onFocus"),dr("focusout","onBlur"),dr(vh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ng=new Set("cancel close invalid load scroll toggle".split(" ").concat(Po));function Mh(n,i,o){var c=n.type||"unknown-event";n.currentTarget=o,ps(c,i,void 0,n),n.currentTarget=null}function Eh(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var M=c.length-1;0<=M;M--){var F=c[M],V=F.instance,ie=F.currentTarget;if(F=F.listener,V!==m&&d.isPropagationStopped())break e;Mh(d,F,ie),m=V}else for(M=0;M<c.length;M++){if(F=c[M],V=F.instance,ie=F.currentTarget,F=F.listener,V!==m&&d.isPropagationStopped())break e;Mh(d,F,ie),m=V}}}if(kr)throw n=ds,kr=!1,ds=null,n}function Bt(n,i){var o=i[jc];o===void 0&&(o=i[jc]=new Set);var c=n+"__bubble";o.has(c)||(wh(i,n,2,!1),o.add(c))}function zc(n,i,o){var c=0;i&&(c|=4),wh(o,n,c,i)}var Na="_reactListening"+Math.random().toString(36).slice(2);function Do(n){if(!n[Na]){n[Na]=!0,r.forEach(function(o){o!=="selectionchange"&&(ng.has(o)||zc(o,!1,n),zc(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Na]||(i[Na]=!0,zc("selectionchange",!1,i))}}function wh(n,i,o,c){switch(Yd(i)){case 1:var d=xx;break;case 4:d=gx;break;default:d=Mc}o=d.bind(null,i,o,n),d=void 0,!xo||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,o,{capture:!0,passive:d}):n.addEventListener(i,o,!0):d!==void 0?n.addEventListener(i,o,{passive:d}):n.addEventListener(i,o,!1)}function Bc(n,i,o,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var M=c.tag;if(M===3||M===4){var F=c.stateNode.containerInfo;if(F===d||F.nodeType===8&&F.parentNode===d)break;if(M===4)for(M=c.return;M!==null;){var V=M.tag;if((V===3||V===4)&&(V=M.stateNode.containerInfo,V===d||V.nodeType===8&&V.parentNode===d))return;M=M.return}for(;F!==null;){if(M=zr(F),M===null)return;if(V=M.tag,V===5||V===6){c=m=M;continue e}F=F.parentNode}}c=c.return}Yn(function(){var ie=m,xe=B(o),ye=[];e:{var me=yh.get(n);if(me!==void 0){var Ne=Tc,Ve=n;switch(n){case"keypress":if(Ra(o)===0)break e;case"keydown":case"keyup":Ne=Lx;break;case"focusin":Ve="focus",Ne=Cc;break;case"focusout":Ve="blur",Ne=Cc;break;case"beforeblur":case"afterblur":Ne=Cc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ne=Kd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ne=yx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ne=Nx;break;case xh:case gh:case _h:Ne=Ex;break;case vh:Ne=Ox;break;case"scroll":Ne=_x;break;case"wheel":Ne=zx;break;case"copy":case"cut":case"paste":Ne=Tx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ne=Qd}var Ge=(i&4)!==0,en=!Ge&&n==="scroll",Z=Ge?me!==null?me+"Capture":null:me;Ge=[];for(var X=ie,ee;X!==null;){ee=X;var Me=ee.stateNode;if(ee.tag===5&&Me!==null&&(ee=Me,Z!==null&&(Me=_n(X,Z),Me!=null&&Ge.push(Lo(X,Me,ee)))),en)break;X=X.return}0<Ge.length&&(me=new Ne(me,Ve,null,o,xe),ye.push({event:me,listeners:Ge}))}}if((i&7)===0){e:{if(me=n==="mouseover"||n==="pointerover",Ne=n==="mouseout"||n==="pointerout",me&&o!==st&&(Ve=o.relatedTarget||o.fromElement)&&(zr(Ve)||Ve[Oi]))break e;if((Ne||me)&&(me=xe.window===xe?xe:(me=xe.ownerDocument)?me.defaultView||me.parentWindow:window,Ne?(Ve=o.relatedTarget||o.toElement,Ne=ie,Ve=Ve?zr(Ve):null,Ve!==null&&(en=Ti(Ve),Ve!==en||Ve.tag!==5&&Ve.tag!==6)&&(Ve=null)):(Ne=null,Ve=ie),Ne!==Ve)){if(Ge=Kd,Me="onMouseLeave",Z="onMouseEnter",X="mouse",(n==="pointerout"||n==="pointerover")&&(Ge=Qd,Me="onPointerLeave",Z="onPointerEnter",X="pointer"),en=Ne==null?me:Es(Ne),ee=Ve==null?me:Es(Ve),me=new Ge(Me,X+"leave",Ne,o,xe),me.target=en,me.relatedTarget=ee,Me=null,zr(xe)===ie&&(Ge=new Ge(Z,X+"enter",Ve,o,xe),Ge.target=ee,Ge.relatedTarget=en,Me=Ge),en=Me,Ne&&Ve)t:{for(Ge=Ne,Z=Ve,X=0,ee=Ge;ee;ee=Ss(ee))X++;for(ee=0,Me=Z;Me;Me=Ss(Me))ee++;for(;0<X-ee;)Ge=Ss(Ge),X--;for(;0<ee-X;)Z=Ss(Z),ee--;for(;X--;){if(Ge===Z||Z!==null&&Ge===Z.alternate)break t;Ge=Ss(Ge),Z=Ss(Z)}Ge=null}else Ge=null;Ne!==null&&Th(ye,me,Ne,Ge,!1),Ve!==null&&en!==null&&Th(ye,en,Ve,Ge,!0)}}e:{if(me=ie?Es(ie):window,Ne=me.nodeName&&me.nodeName.toLowerCase(),Ne==="select"||Ne==="input"&&me.type==="file")var je=jx;else if(rh(me))if(oh)je=Kx;else{je=qx;var nt=Yx}else(Ne=me.nodeName)&&Ne.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(je=Zx);if(je&&(je=je(n,ie))){sh(ye,je,o,xe);break e}nt&&nt(n,me,ie),n==="focusout"&&(nt=me._wrapperState)&&nt.controlled&&me.type==="number"&&ze(me,"number",me.value)}switch(nt=ie?Es(ie):window,n){case"focusin":(rh(nt)||nt.contentEditable==="true")&&(vs=nt,Uc=ie,Ro=null);break;case"focusout":Ro=Uc=vs=null;break;case"mousedown":Nc=!0;break;case"contextmenu":case"mouseup":case"dragend":Nc=!1,ph(ye,o,xe);break;case"selectionchange":if(Jx)break;case"keydown":case"keyup":ph(ye,o,xe)}var it;if(Pc)e:{switch(n){case"compositionstart":var ct="onCompositionStart";break e;case"compositionend":ct="onCompositionEnd";break e;case"compositionupdate":ct="onCompositionUpdate";break e}ct=void 0}else _s?nh(n,o)&&(ct="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(ct="onCompositionStart");ct&&(Jd&&o.locale!=="ko"&&(_s||ct!=="onCompositionStart"?ct==="onCompositionEnd"&&_s&&(it=qd()):(fr=xe,wc="value"in fr?fr.value:fr.textContent,_s=!0)),nt=Fa(ie,ct),0<nt.length&&(ct=new $d(ct,n,null,o,xe),ye.push({event:ct,listeners:nt}),it?ct.data=it:(it=ih(o),it!==null&&(ct.data=it)))),(it=Vx?Hx(n,o):Gx(n,o))&&(ie=Fa(ie,"onBeforeInput"),0<ie.length&&(xe=new $d("onBeforeInput","beforeinput",null,o,xe),ye.push({event:xe,listeners:ie}),xe.data=it))}Eh(ye,i)})}function Lo(n,i,o){return{instance:n,listener:i,currentTarget:o}}function Fa(n,i){for(var o=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=_n(n,o),m!=null&&c.unshift(Lo(n,m,d)),m=_n(n,i),m!=null&&c.push(Lo(n,m,d))),n=n.return}return c}function Ss(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Th(n,i,o,c,d){for(var m=i._reactName,M=[];o!==null&&o!==c;){var F=o,V=F.alternate,ie=F.stateNode;if(V!==null&&V===c)break;F.tag===5&&ie!==null&&(F=ie,d?(V=_n(o,m),V!=null&&M.unshift(Lo(o,V,F))):d||(V=_n(o,m),V!=null&&M.push(Lo(o,V,F)))),o=o.return}M.length!==0&&n.push({event:i,listeners:M})}var ig=/\r\n?/g,rg=/\u0000|\uFFFD/g;function bh(n){return(typeof n=="string"?n:""+n).replace(ig,`
`).replace(rg,"")}function Oa(n,i,o){if(i=bh(i),bh(n)!==i&&o)throw Error(t(425))}function ka(){}var Vc=null,Hc=null;function Gc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Wc=typeof setTimeout=="function"?setTimeout:void 0,sg=typeof clearTimeout=="function"?clearTimeout:void 0,Ah=typeof Promise=="function"?Promise:void 0,og=typeof queueMicrotask=="function"?queueMicrotask:typeof Ah<"u"?function(n){return Ah.resolve(null).then(n).catch(ag)}:Wc;function ag(n){setTimeout(function(){throw n})}function Xc(n,i){var o=i,c=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(c===0){n.removeChild(d),Mo(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=d}while(o);Mo(i)}function hr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Ch(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var Ms=Math.random().toString(36).slice(2),Ai="__reactFiber$"+Ms,Io="__reactProps$"+Ms,Oi="__reactContainer$"+Ms,jc="__reactEvents$"+Ms,lg="__reactListeners$"+Ms,cg="__reactHandles$"+Ms;function zr(n){var i=n[Ai];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Oi]||o[Ai]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=Ch(n);n!==null;){if(o=n[Ai])return o;n=Ch(n)}return i}n=o,o=n.parentNode}return null}function Uo(n){return n=n[Ai]||n[Oi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Es(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function za(n){return n[Io]||null}var Yc=[],ws=-1;function pr(n){return{current:n}}function Vt(n){0>ws||(n.current=Yc[ws],Yc[ws]=null,ws--)}function zt(n,i){ws++,Yc[ws]=n.current,n.current=i}var mr={},En=pr(mr),zn=pr(!1),Br=mr;function Ts(n,i){var o=n.type.contextTypes;if(!o)return mr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in o)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Bn(n){return n=n.childContextTypes,n!=null}function Ba(){Vt(zn),Vt(En)}function Rh(n,i,o){if(En.current!==mr)throw Error(t(168));zt(En,i),zt(zn,o)}function Ph(n,i,o){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,ae(n)||"Unknown",d));return I({},o,c)}function Va(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||mr,Br=En.current,zt(En,n),zt(zn,zn.current),!0}function Dh(n,i,o){var c=n.stateNode;if(!c)throw Error(t(169));o?(n=Ph(n,i,Br),c.__reactInternalMemoizedMergedChildContext=n,Vt(zn),Vt(En),zt(En,n)):Vt(zn),zt(zn,o)}var ki=null,Ha=!1,qc=!1;function Lh(n){ki===null?ki=[n]:ki.push(n)}function ug(n){Ha=!0,Lh(n)}function xr(){if(!qc&&ki!==null){qc=!0;var n=0,i=ht;try{var o=ki;for(ht=1;n<o.length;n++){var c=o[n];do c=c(!0);while(c!==null)}ki=null,Ha=!1}catch(d){throw ki!==null&&(ki=ki.slice(n+1)),Ma(q,xr),d}finally{ht=i,qc=!1}}return null}var bs=[],As=0,Ga=null,Wa=0,ni=[],ii=0,Vr=null,zi=1,Bi="";function Hr(n,i){bs[As++]=Wa,bs[As++]=Ga,Ga=n,Wa=i}function Ih(n,i,o){ni[ii++]=zi,ni[ii++]=Bi,ni[ii++]=Vr,Vr=n;var c=zi;n=Bi;var d=32-ot(c)-1;c&=~(1<<d),o+=1;var m=32-ot(i)+d;if(30<m){var M=d-d%5;m=(c&(1<<M)-1).toString(32),c>>=M,d-=M,zi=1<<32-ot(i)+d|o<<d|c,Bi=m+n}else zi=1<<m|o<<d|c,Bi=n}function Zc(n){n.return!==null&&(Hr(n,1),Ih(n,1,0))}function Kc(n){for(;n===Ga;)Ga=bs[--As],bs[As]=null,Wa=bs[--As],bs[As]=null;for(;n===Vr;)Vr=ni[--ii],ni[ii]=null,Bi=ni[--ii],ni[ii]=null,zi=ni[--ii],ni[ii]=null}var Kn=null,$n=null,Xt=!1,pi=null;function Uh(n,i){var o=ai(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function Nh(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Kn=n,$n=hr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Kn=n,$n=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Vr!==null?{id:zi,overflow:Bi}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=ai(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,Kn=n,$n=null,!0):!1;default:return!1}}function $c(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Qc(n){if(Xt){var i=$n;if(i){var o=i;if(!Nh(n,i)){if($c(n))throw Error(t(418));i=hr(o.nextSibling);var c=Kn;i&&Nh(n,i)?Uh(c,o):(n.flags=n.flags&-4097|2,Xt=!1,Kn=n)}}else{if($c(n))throw Error(t(418));n.flags=n.flags&-4097|2,Xt=!1,Kn=n}}}function Fh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Kn=n}function Xa(n){if(n!==Kn)return!1;if(!Xt)return Fh(n),Xt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Gc(n.type,n.memoizedProps)),i&&(i=$n)){if($c(n))throw Oh(),Error(t(418));for(;i;)Uh(n,i),i=hr(i.nextSibling)}if(Fh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){$n=hr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}$n=null}}else $n=Kn?hr(n.stateNode.nextSibling):null;return!0}function Oh(){for(var n=$n;n;)n=hr(n.nextSibling)}function Cs(){$n=Kn=null,Xt=!1}function Jc(n){pi===null?pi=[n]:pi.push(n)}var fg=L.ReactCurrentBatchConfig;function mi(n,i){if(n&&n.defaultProps){i=I({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}var ja=pr(null),Ya=null,Rs=null,eu=null;function tu(){eu=Rs=Ya=null}function nu(n){var i=ja.current;Vt(ja),n._currentValue=i}function iu(n,i,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===o)break;n=n.return}}function Ps(n,i){Ya=n,eu=Rs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Vn=!0),n.firstContext=null)}function ri(n){var i=n._currentValue;if(eu!==n)if(n={context:n,memoizedValue:i,next:null},Rs===null){if(Ya===null)throw Error(t(308));Rs=n,Ya.dependencies={lanes:0,firstContext:n}}else Rs=Rs.next=n;return i}var Gr=null;function ru(n){Gr===null?Gr=[n]:Gr.push(n)}function kh(n,i,o,c){var d=i.interleaved;return d===null?(o.next=o,ru(i)):(o.next=d.next,d.next=o),i.interleaved=o,Vi(n,c)}function Vi(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var gr=!1;function su(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Hi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function _r(n,i,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Et&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Vi(n,o)}return d=c.interleaved,d===null?(i.next=i,ru(c)):(i.next=d.next,d.next=i),c.interleaved=i,Vi(n,o)}function qa(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,an(n,o)}}function Bh(n,i){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var d=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?d=m=M:m=m.next=M,o=o.next}while(o!==null);m===null?d=m=i:m=m.next=i}else d=m=i;o={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function Za(n,i,o,c){var d=n.updateQueue;gr=!1;var m=d.firstBaseUpdate,M=d.lastBaseUpdate,F=d.shared.pending;if(F!==null){d.shared.pending=null;var V=F,ie=V.next;V.next=null,M===null?m=ie:M.next=ie,M=V;var xe=n.alternate;xe!==null&&(xe=xe.updateQueue,F=xe.lastBaseUpdate,F!==M&&(F===null?xe.firstBaseUpdate=ie:F.next=ie,xe.lastBaseUpdate=V))}if(m!==null){var ye=d.baseState;M=0,xe=ie=V=null,F=m;do{var me=F.lane,Ne=F.eventTime;if((c&me)===me){xe!==null&&(xe=xe.next={eventTime:Ne,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var Ve=n,Ge=F;switch(me=i,Ne=o,Ge.tag){case 1:if(Ve=Ge.payload,typeof Ve=="function"){ye=Ve.call(Ne,ye,me);break e}ye=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=Ge.payload,me=typeof Ve=="function"?Ve.call(Ne,ye,me):Ve,me==null)break e;ye=I({},ye,me);break e;case 2:gr=!0}}F.callback!==null&&F.lane!==0&&(n.flags|=64,me=d.effects,me===null?d.effects=[F]:me.push(F))}else Ne={eventTime:Ne,lane:me,tag:F.tag,payload:F.payload,callback:F.callback,next:null},xe===null?(ie=xe=Ne,V=ye):xe=xe.next=Ne,M|=me;if(F=F.next,F===null){if(F=d.shared.pending,F===null)break;me=F,F=me.next,me.next=null,d.lastBaseUpdate=me,d.shared.pending=null}}while(!0);if(xe===null&&(V=ye),d.baseState=V,d.firstBaseUpdate=ie,d.lastBaseUpdate=xe,i=d.shared.interleaved,i!==null){d=i;do M|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);jr|=M,n.lanes=M,n.memoizedState=ye}}function Vh(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=o,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Hh=new s.Component().refs;function ou(n,i,o,c){i=n.memoizedState,o=o(c,i),o=o==null?i:I({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Ka={isMounted:function(n){return(n=n._reactInternals)?Ti(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var c=Un(),d=Mr(n),m=Hi(c,d);m.payload=i,o!=null&&(m.callback=o),i=_r(n,m,d),i!==null&&(_i(i,n,d,c),qa(i,n,d))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var c=Un(),d=Mr(n),m=Hi(c,d);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=_r(n,m,d),i!==null&&(_i(i,n,d,c),qa(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Un(),c=Mr(n),d=Hi(o,c);d.tag=2,i!=null&&(d.callback=i),i=_r(n,d,c),i!==null&&(_i(i,n,c,o),qa(i,n,c))}};function Gh(n,i,o,c,d,m,M){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,M):i.prototype&&i.prototype.isPureReactComponent?!Co(o,c)||!Co(d,m):!0}function Wh(n,i,o){var c=!1,d=mr,m=i.contextType;return typeof m=="object"&&m!==null?m=ri(m):(d=Bn(i)?Br:En.current,c=i.contextTypes,m=(c=c!=null)?Ts(n,d):mr),i=new i(o,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ka,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function Xh(n,i,o,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==n&&Ka.enqueueReplaceState(i,i.state,null)}function au(n,i,o,c){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs=Hh,su(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=ri(m):(m=Bn(i)?Br:En.current,d.context=Ts(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(ou(n,i,m,o),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Ka.enqueueReplaceState(d,d.state,null),Za(n,o,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function No(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var c=o.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(M){var F=d.refs;F===Hh&&(F=d.refs={}),M===null?delete F[m]:F[m]=M},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function $a(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function jh(n){var i=n._init;return i(n._payload)}function Yh(n){function i(Z,X){if(n){var ee=Z.deletions;ee===null?(Z.deletions=[X],Z.flags|=16):ee.push(X)}}function o(Z,X){if(!n)return null;for(;X!==null;)i(Z,X),X=X.sibling;return null}function c(Z,X){for(Z=new Map;X!==null;)X.key!==null?Z.set(X.key,X):Z.set(X.index,X),X=X.sibling;return Z}function d(Z,X){return Z=wr(Z,X),Z.index=0,Z.sibling=null,Z}function m(Z,X,ee){return Z.index=ee,n?(ee=Z.alternate,ee!==null?(ee=ee.index,ee<X?(Z.flags|=2,X):ee):(Z.flags|=2,X)):(Z.flags|=1048576,X)}function M(Z){return n&&Z.alternate===null&&(Z.flags|=2),Z}function F(Z,X,ee,Me){return X===null||X.tag!==6?(X=Wu(ee,Z.mode,Me),X.return=Z,X):(X=d(X,ee),X.return=Z,X)}function V(Z,X,ee,Me){var je=ee.type;return je===O?xe(Z,X,ee.props.children,Me,ee.key):X!==null&&(X.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===ue&&jh(je)===X.type)?(Me=d(X,ee.props),Me.ref=No(Z,X,ee),Me.return=Z,Me):(Me=xl(ee.type,ee.key,ee.props,null,Z.mode,Me),Me.ref=No(Z,X,ee),Me.return=Z,Me)}function ie(Z,X,ee,Me){return X===null||X.tag!==4||X.stateNode.containerInfo!==ee.containerInfo||X.stateNode.implementation!==ee.implementation?(X=Xu(ee,Z.mode,Me),X.return=Z,X):(X=d(X,ee.children||[]),X.return=Z,X)}function xe(Z,X,ee,Me,je){return X===null||X.tag!==7?(X=Kr(ee,Z.mode,Me,je),X.return=Z,X):(X=d(X,ee),X.return=Z,X)}function ye(Z,X,ee){if(typeof X=="string"&&X!==""||typeof X=="number")return X=Wu(""+X,Z.mode,ee),X.return=Z,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case U:return ee=xl(X.type,X.key,X.props,null,Z.mode,ee),ee.ref=No(Z,null,X),ee.return=Z,ee;case D:return X=Xu(X,Z.mode,ee),X.return=Z,X;case ue:var Me=X._init;return ye(Z,Me(X._payload),ee)}if(Dt(X)||ne(X))return X=Kr(X,Z.mode,ee,null),X.return=Z,X;$a(Z,X)}return null}function me(Z,X,ee,Me){var je=X!==null?X.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return je!==null?null:F(Z,X,""+ee,Me);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case U:return ee.key===je?V(Z,X,ee,Me):null;case D:return ee.key===je?ie(Z,X,ee,Me):null;case ue:return je=ee._init,me(Z,X,je(ee._payload),Me)}if(Dt(ee)||ne(ee))return je!==null?null:xe(Z,X,ee,Me,null);$a(Z,ee)}return null}function Ne(Z,X,ee,Me,je){if(typeof Me=="string"&&Me!==""||typeof Me=="number")return Z=Z.get(ee)||null,F(X,Z,""+Me,je);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case U:return Z=Z.get(Me.key===null?ee:Me.key)||null,V(X,Z,Me,je);case D:return Z=Z.get(Me.key===null?ee:Me.key)||null,ie(X,Z,Me,je);case ue:var nt=Me._init;return Ne(Z,X,ee,nt(Me._payload),je)}if(Dt(Me)||ne(Me))return Z=Z.get(ee)||null,xe(X,Z,Me,je,null);$a(X,Me)}return null}function Ve(Z,X,ee,Me){for(var je=null,nt=null,it=X,ct=X=0,xn=null;it!==null&&ct<ee.length;ct++){it.index>ct?(xn=it,it=null):xn=it.sibling;var bt=me(Z,it,ee[ct],Me);if(bt===null){it===null&&(it=xn);break}n&&it&&bt.alternate===null&&i(Z,it),X=m(bt,X,ct),nt===null?je=bt:nt.sibling=bt,nt=bt,it=xn}if(ct===ee.length)return o(Z,it),Xt&&Hr(Z,ct),je;if(it===null){for(;ct<ee.length;ct++)it=ye(Z,ee[ct],Me),it!==null&&(X=m(it,X,ct),nt===null?je=it:nt.sibling=it,nt=it);return Xt&&Hr(Z,ct),je}for(it=c(Z,it);ct<ee.length;ct++)xn=Ne(it,Z,ct,ee[ct],Me),xn!==null&&(n&&xn.alternate!==null&&it.delete(xn.key===null?ct:xn.key),X=m(xn,X,ct),nt===null?je=xn:nt.sibling=xn,nt=xn);return n&&it.forEach(function(Tr){return i(Z,Tr)}),Xt&&Hr(Z,ct),je}function Ge(Z,X,ee,Me){var je=ne(ee);if(typeof je!="function")throw Error(t(150));if(ee=je.call(ee),ee==null)throw Error(t(151));for(var nt=je=null,it=X,ct=X=0,xn=null,bt=ee.next();it!==null&&!bt.done;ct++,bt=ee.next()){it.index>ct?(xn=it,it=null):xn=it.sibling;var Tr=me(Z,it,bt.value,Me);if(Tr===null){it===null&&(it=xn);break}n&&it&&Tr.alternate===null&&i(Z,it),X=m(Tr,X,ct),nt===null?je=Tr:nt.sibling=Tr,nt=Tr,it=xn}if(bt.done)return o(Z,it),Xt&&Hr(Z,ct),je;if(it===null){for(;!bt.done;ct++,bt=ee.next())bt=ye(Z,bt.value,Me),bt!==null&&(X=m(bt,X,ct),nt===null?je=bt:nt.sibling=bt,nt=bt);return Xt&&Hr(Z,ct),je}for(it=c(Z,it);!bt.done;ct++,bt=ee.next())bt=Ne(it,Z,ct,bt.value,Me),bt!==null&&(n&&bt.alternate!==null&&it.delete(bt.key===null?ct:bt.key),X=m(bt,X,ct),nt===null?je=bt:nt.sibling=bt,nt=bt);return n&&it.forEach(function(Wg){return i(Z,Wg)}),Xt&&Hr(Z,ct),je}function en(Z,X,ee,Me){if(typeof ee=="object"&&ee!==null&&ee.type===O&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case U:e:{for(var je=ee.key,nt=X;nt!==null;){if(nt.key===je){if(je=ee.type,je===O){if(nt.tag===7){o(Z,nt.sibling),X=d(nt,ee.props.children),X.return=Z,Z=X;break e}}else if(nt.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===ue&&jh(je)===nt.type){o(Z,nt.sibling),X=d(nt,ee.props),X.ref=No(Z,nt,ee),X.return=Z,Z=X;break e}o(Z,nt);break}else i(Z,nt);nt=nt.sibling}ee.type===O?(X=Kr(ee.props.children,Z.mode,Me,ee.key),X.return=Z,Z=X):(Me=xl(ee.type,ee.key,ee.props,null,Z.mode,Me),Me.ref=No(Z,X,ee),Me.return=Z,Z=Me)}return M(Z);case D:e:{for(nt=ee.key;X!==null;){if(X.key===nt)if(X.tag===4&&X.stateNode.containerInfo===ee.containerInfo&&X.stateNode.implementation===ee.implementation){o(Z,X.sibling),X=d(X,ee.children||[]),X.return=Z,Z=X;break e}else{o(Z,X);break}else i(Z,X);X=X.sibling}X=Xu(ee,Z.mode,Me),X.return=Z,Z=X}return M(Z);case ue:return nt=ee._init,en(Z,X,nt(ee._payload),Me)}if(Dt(ee))return Ve(Z,X,ee,Me);if(ne(ee))return Ge(Z,X,ee,Me);$a(Z,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,X!==null&&X.tag===6?(o(Z,X.sibling),X=d(X,ee),X.return=Z,Z=X):(o(Z,X),X=Wu(ee,Z.mode,Me),X.return=Z,Z=X),M(Z)):o(Z,X)}return en}var Ds=Yh(!0),qh=Yh(!1),Fo={},Ci=pr(Fo),Oo=pr(Fo),ko=pr(Fo);function Wr(n){if(n===Fo)throw Error(t(174));return n}function lu(n,i){switch(zt(ko,i),zt(Oo,n),zt(Ci,Fo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:pe(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=pe(i,n)}Vt(Ci),zt(Ci,i)}function Ls(){Vt(Ci),Vt(Oo),Vt(ko)}function Zh(n){Wr(ko.current);var i=Wr(Ci.current),o=pe(i,n.type);i!==o&&(zt(Oo,n),zt(Ci,o))}function cu(n){Oo.current===n&&(Vt(Ci),Vt(Oo))}var qt=pr(0);function Qa(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var uu=[];function fu(){for(var n=0;n<uu.length;n++)uu[n]._workInProgressVersionPrimary=null;uu.length=0}var Ja=L.ReactCurrentDispatcher,du=L.ReactCurrentBatchConfig,Xr=0,Zt=null,ln=null,pn=null,el=!1,zo=!1,Bo=0,dg=0;function wn(){throw Error(t(321))}function hu(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!hi(n[o],i[o]))return!1;return!0}function pu(n,i,o,c,d,m){if(Xr=m,Zt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ja.current=n===null||n.memoizedState===null?xg:gg,n=o(c,d),zo){m=0;do{if(zo=!1,Bo=0,25<=m)throw Error(t(301));m+=1,pn=ln=null,i.updateQueue=null,Ja.current=_g,n=o(c,d)}while(zo)}if(Ja.current=il,i=ln!==null&&ln.next!==null,Xr=0,pn=ln=Zt=null,el=!1,i)throw Error(t(300));return n}function mu(){var n=Bo!==0;return Bo=0,n}function Ri(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?Zt.memoizedState=pn=n:pn=pn.next=n,pn}function si(){if(ln===null){var n=Zt.alternate;n=n!==null?n.memoizedState:null}else n=ln.next;var i=pn===null?Zt.memoizedState:pn.next;if(i!==null)pn=i,ln=n;else{if(n===null)throw Error(t(310));ln=n,n={memoizedState:ln.memoizedState,baseState:ln.baseState,baseQueue:ln.baseQueue,queue:ln.queue,next:null},pn===null?Zt.memoizedState=pn=n:pn=pn.next=n}return pn}function Vo(n,i){return typeof i=="function"?i(n):i}function xu(n){var i=si(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=ln,d=c.baseQueue,m=o.pending;if(m!==null){if(d!==null){var M=d.next;d.next=m.next,m.next=M}c.baseQueue=d=m,o.pending=null}if(d!==null){m=d.next,c=c.baseState;var F=M=null,V=null,ie=m;do{var xe=ie.lane;if((Xr&xe)===xe)V!==null&&(V=V.next={lane:0,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),c=ie.hasEagerState?ie.eagerState:n(c,ie.action);else{var ye={lane:xe,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null};V===null?(F=V=ye,M=c):V=V.next=ye,Zt.lanes|=xe,jr|=xe}ie=ie.next}while(ie!==null&&ie!==m);V===null?M=c:V.next=F,hi(c,i.memoizedState)||(Vn=!0),i.memoizedState=c,i.baseState=M,i.baseQueue=V,o.lastRenderedState=c}if(n=o.interleaved,n!==null){d=n;do m=d.lane,Zt.lanes|=m,jr|=m,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function gu(n){var i=si(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=o.dispatch,d=o.pending,m=i.memoizedState;if(d!==null){o.pending=null;var M=d=d.next;do m=n(m,M.action),M=M.next;while(M!==d);hi(m,i.memoizedState)||(Vn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,c]}function Kh(){}function $h(n,i){var o=Zt,c=si(),d=i(),m=!hi(c.memoizedState,d);if(m&&(c.memoizedState=d,Vn=!0),c=c.queue,_u(ep.bind(null,o,c,n),[n]),c.getSnapshot!==i||m||pn!==null&&pn.memoizedState.tag&1){if(o.flags|=2048,Ho(9,Jh.bind(null,o,c,d,i),void 0,null),mn===null)throw Error(t(349));(Xr&30)!==0||Qh(o,i,d)}return d}function Qh(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=Zt.updateQueue,i===null?(i={lastEffect:null,stores:null},Zt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function Jh(n,i,o,c){i.value=o,i.getSnapshot=c,tp(i)&&np(n)}function ep(n,i,o){return o(function(){tp(i)&&np(n)})}function tp(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!hi(n,o)}catch{return!0}}function np(n){var i=Vi(n,1);i!==null&&_i(i,n,1,-1)}function ip(n){var i=Ri();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vo,lastRenderedState:n},i.queue=n,n=n.dispatch=mg.bind(null,Zt,n),[i.memoizedState,n]}function Ho(n,i,o,c){return n={tag:n,create:i,destroy:o,deps:c,next:null},i=Zt.updateQueue,i===null?(i={lastEffect:null,stores:null},Zt.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,i.lastEffect=n)),n}function rp(){return si().memoizedState}function tl(n,i,o,c){var d=Ri();Zt.flags|=n,d.memoizedState=Ho(1|i,o,void 0,c===void 0?null:c)}function nl(n,i,o,c){var d=si();c=c===void 0?null:c;var m=void 0;if(ln!==null){var M=ln.memoizedState;if(m=M.destroy,c!==null&&hu(c,M.deps)){d.memoizedState=Ho(i,o,m,c);return}}Zt.flags|=n,d.memoizedState=Ho(1|i,o,m,c)}function sp(n,i){return tl(8390656,8,n,i)}function _u(n,i){return nl(2048,8,n,i)}function op(n,i){return nl(4,2,n,i)}function ap(n,i){return nl(4,4,n,i)}function lp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function cp(n,i,o){return o=o!=null?o.concat([n]):null,nl(4,4,lp.bind(null,i,n),o)}function vu(){}function up(n,i){var o=si();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&hu(i,c[1])?c[0]:(o.memoizedState=[n,i],n)}function fp(n,i){var o=si();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&hu(i,c[1])?c[0]:(n=n(),o.memoizedState=[n,i],n)}function dp(n,i,o){return(Xr&21)===0?(n.baseState&&(n.baseState=!1,Vn=!0),n.memoizedState=o):(hi(o,i)||(o=or(),Zt.lanes|=o,jr|=o,n.baseState=!0),i)}function hg(n,i){var o=ht;ht=o!==0&&4>o?o:4,n(!0);var c=du.transition;du.transition={};try{n(!1),i()}finally{ht=o,du.transition=c}}function hp(){return si().memoizedState}function pg(n,i,o){var c=Mr(n);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},pp(n))mp(i,o);else if(o=kh(n,i,o,c),o!==null){var d=Un();_i(o,n,c,d),xp(o,i,c)}}function mg(n,i,o){var c=Mr(n),d={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(pp(n))mp(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var M=i.lastRenderedState,F=m(M,o);if(d.hasEagerState=!0,d.eagerState=F,hi(F,M)){var V=i.interleaved;V===null?(d.next=d,ru(i)):(d.next=V.next,V.next=d),i.interleaved=d;return}}catch{}finally{}o=kh(n,i,d,c),o!==null&&(d=Un(),_i(o,n,c,d),xp(o,i,c))}}function pp(n){var i=n.alternate;return n===Zt||i!==null&&i===Zt}function mp(n,i){zo=el=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function xp(n,i,o){if((o&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,an(n,o)}}var il={readContext:ri,useCallback:wn,useContext:wn,useEffect:wn,useImperativeHandle:wn,useInsertionEffect:wn,useLayoutEffect:wn,useMemo:wn,useReducer:wn,useRef:wn,useState:wn,useDebugValue:wn,useDeferredValue:wn,useTransition:wn,useMutableSource:wn,useSyncExternalStore:wn,useId:wn,unstable_isNewReconciler:!1},xg={readContext:ri,useCallback:function(n,i){return Ri().memoizedState=[n,i===void 0?null:i],n},useContext:ri,useEffect:sp,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,tl(4194308,4,lp.bind(null,i,n),o)},useLayoutEffect:function(n,i){return tl(4194308,4,n,i)},useInsertionEffect:function(n,i){return tl(4,2,n,i)},useMemo:function(n,i){var o=Ri();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var c=Ri();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=pg.bind(null,Zt,n),[c.memoizedState,n]},useRef:function(n){var i=Ri();return n={current:n},i.memoizedState=n},useState:ip,useDebugValue:vu,useDeferredValue:function(n){return Ri().memoizedState=n},useTransition:function(){var n=ip(!1),i=n[0];return n=hg.bind(null,n[1]),Ri().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var c=Zt,d=Ri();if(Xt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),mn===null)throw Error(t(349));(Xr&30)!==0||Qh(c,i,o)}d.memoizedState=o;var m={value:o,getSnapshot:i};return d.queue=m,sp(ep.bind(null,c,m,n),[n]),c.flags|=2048,Ho(9,Jh.bind(null,c,m,o,i),void 0,null),o},useId:function(){var n=Ri(),i=mn.identifierPrefix;if(Xt){var o=Bi,c=zi;o=(c&~(1<<32-ot(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=Bo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=dg++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},gg={readContext:ri,useCallback:up,useContext:ri,useEffect:_u,useImperativeHandle:cp,useInsertionEffect:op,useLayoutEffect:ap,useMemo:fp,useReducer:xu,useRef:rp,useState:function(){return xu(Vo)},useDebugValue:vu,useDeferredValue:function(n){var i=si();return dp(i,ln.memoizedState,n)},useTransition:function(){var n=xu(Vo)[0],i=si().memoizedState;return[n,i]},useMutableSource:Kh,useSyncExternalStore:$h,useId:hp,unstable_isNewReconciler:!1},_g={readContext:ri,useCallback:up,useContext:ri,useEffect:_u,useImperativeHandle:cp,useInsertionEffect:op,useLayoutEffect:ap,useMemo:fp,useReducer:gu,useRef:rp,useState:function(){return gu(Vo)},useDebugValue:vu,useDeferredValue:function(n){var i=si();return ln===null?i.memoizedState=n:dp(i,ln.memoizedState,n)},useTransition:function(){var n=gu(Vo)[0],i=si().memoizedState;return[n,i]},useMutableSource:Kh,useSyncExternalStore:$h,useId:hp,unstable_isNewReconciler:!1};function Is(n,i){try{var o="",c=i;do o+=Ee(c),c=c.return;while(c);var d=o}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function yu(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function Su(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var vg=typeof WeakMap=="function"?WeakMap:Map;function gp(n,i,o){o=Hi(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){ul||(ul=!0,Fu=c),Su(n,i)},o}function _p(n,i,o){o=Hi(-1,o),o.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;o.payload=function(){return c(d)},o.callback=function(){Su(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){Su(n,i),typeof c!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function vp(n,i,o){var c=n.pingCache;if(c===null){c=n.pingCache=new vg;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(o)||(d.add(o),n=Ig.bind(null,n,i,o),i.then(n,n))}function yp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Sp(n,i,o,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Hi(-1,1),i.tag=2,_r(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var yg=L.ReactCurrentOwner,Vn=!1;function In(n,i,o,c){i.child=n===null?qh(i,null,o,c):Ds(i,n.child,o,c)}function Mp(n,i,o,c,d){o=o.render;var m=i.ref;return Ps(i,d),c=pu(n,i,o,c,m,d),o=mu(),n!==null&&!Vn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Gi(n,i,d)):(Xt&&o&&Zc(i),i.flags|=1,In(n,i,c,d),i.child)}function Ep(n,i,o,c,d){if(n===null){var m=o.type;return typeof m=="function"&&!Gu(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,wp(n,i,m,c,d)):(n=xl(o.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var M=m.memoizedProps;if(o=o.compare,o=o!==null?o:Co,o(M,c)&&n.ref===i.ref)return Gi(n,i,d)}return i.flags|=1,n=wr(m,c),n.ref=i.ref,n.return=i,i.child=n}function wp(n,i,o,c,d){if(n!==null){var m=n.memoizedProps;if(Co(m,c)&&n.ref===i.ref)if(Vn=!1,i.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Vn=!0);else return i.lanes=n.lanes,Gi(n,i,d)}return Mu(n,i,o,c,d)}function Tp(n,i,o){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},zt(Ns,Qn),Qn|=o;else{if((o&1073741824)===0)return n=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,zt(Ns,Qn),Qn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:o,zt(Ns,Qn),Qn|=c}else m!==null?(c=m.baseLanes|o,i.memoizedState=null):c=o,zt(Ns,Qn),Qn|=c;return In(n,i,d,o),i.child}function bp(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Mu(n,i,o,c,d){var m=Bn(o)?Br:En.current;return m=Ts(i,m),Ps(i,d),o=pu(n,i,o,c,m,d),c=mu(),n!==null&&!Vn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Gi(n,i,d)):(Xt&&c&&Zc(i),i.flags|=1,In(n,i,o,d),i.child)}function Ap(n,i,o,c,d){if(Bn(o)){var m=!0;Va(i)}else m=!1;if(Ps(i,d),i.stateNode===null)sl(n,i),Wh(i,o,c),au(i,o,c,d),c=!0;else if(n===null){var M=i.stateNode,F=i.memoizedProps;M.props=F;var V=M.context,ie=o.contextType;typeof ie=="object"&&ie!==null?ie=ri(ie):(ie=Bn(o)?Br:En.current,ie=Ts(i,ie));var xe=o.getDerivedStateFromProps,ye=typeof xe=="function"||typeof M.getSnapshotBeforeUpdate=="function";ye||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(F!==c||V!==ie)&&Xh(i,M,c,ie),gr=!1;var me=i.memoizedState;M.state=me,Za(i,c,M,d),V=i.memoizedState,F!==c||me!==V||zn.current||gr?(typeof xe=="function"&&(ou(i,o,xe,c),V=i.memoizedState),(F=gr||Gh(i,o,F,c,me,V,ie))?(ye||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=V),M.props=c,M.state=V,M.context=ie,c=F):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{M=i.stateNode,zh(n,i),F=i.memoizedProps,ie=i.type===i.elementType?F:mi(i.type,F),M.props=ie,ye=i.pendingProps,me=M.context,V=o.contextType,typeof V=="object"&&V!==null?V=ri(V):(V=Bn(o)?Br:En.current,V=Ts(i,V));var Ne=o.getDerivedStateFromProps;(xe=typeof Ne=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(F!==ye||me!==V)&&Xh(i,M,c,V),gr=!1,me=i.memoizedState,M.state=me,Za(i,c,M,d);var Ve=i.memoizedState;F!==ye||me!==Ve||zn.current||gr?(typeof Ne=="function"&&(ou(i,o,Ne,c),Ve=i.memoizedState),(ie=gr||Gh(i,o,ie,c,me,Ve,V)||!1)?(xe||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(c,Ve,V),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(c,Ve,V)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||F===n.memoizedProps&&me===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&me===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Ve),M.props=c,M.state=Ve,M.context=V,c=ie):(typeof M.componentDidUpdate!="function"||F===n.memoizedProps&&me===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&me===n.memoizedState||(i.flags|=1024),c=!1)}return Eu(n,i,o,c,m,d)}function Eu(n,i,o,c,d,m){bp(n,i);var M=(i.flags&128)!==0;if(!c&&!M)return d&&Dh(i,o,!1),Gi(n,i,m);c=i.stateNode,yg.current=i;var F=M&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&M?(i.child=Ds(i,n.child,null,m),i.child=Ds(i,null,F,m)):In(n,i,F,m),i.memoizedState=c.state,d&&Dh(i,o,!0),i.child}function Cp(n){var i=n.stateNode;i.pendingContext?Rh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Rh(n,i.context,!1),lu(n,i.containerInfo)}function Rp(n,i,o,c,d){return Cs(),Jc(d),i.flags|=256,In(n,i,o,c),i.child}var wu={dehydrated:null,treeContext:null,retryLane:0};function Tu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Pp(n,i,o){var c=i.pendingProps,d=qt.current,m=!1,M=(i.flags&128)!==0,F;if((F=M)||(F=n!==null&&n.memoizedState===null?!1:(d&2)!==0),F?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),zt(qt,d&1),n===null)return Qc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=c.children,n=c.fallback,m?(c=i.mode,m=i.child,M={mode:"hidden",children:M},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=M):m=gl(M,c,0,null),n=Kr(n,c,o,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=Tu(o),i.memoizedState=wu,n):bu(i,M));if(d=n.memoizedState,d!==null&&(F=d.dehydrated,F!==null))return Sg(n,i,M,c,F,d,o);if(m){m=c.fallback,M=i.mode,d=n.child,F=d.sibling;var V={mode:"hidden",children:c.children};return(M&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=V,i.deletions=null):(c=wr(d,V),c.subtreeFlags=d.subtreeFlags&14680064),F!==null?m=wr(F,m):(m=Kr(m,M,o,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,M=n.child.memoizedState,M=M===null?Tu(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},m.memoizedState=M,m.childLanes=n.childLanes&~o,i.memoizedState=wu,c}return m=n.child,n=m.sibling,c=wr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=c,i.memoizedState=null,c}function bu(n,i){return i=gl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function rl(n,i,o,c){return c!==null&&Jc(c),Ds(i,n.child,null,o),n=bu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Sg(n,i,o,c,d,m,M){if(o)return i.flags&256?(i.flags&=-257,c=yu(Error(t(422))),rl(n,i,M,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=gl({mode:"visible",children:c.children},d,0,null),m=Kr(m,d,M,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&Ds(i,n.child,null,M),i.child.memoizedState=Tu(M),i.memoizedState=wu,m);if((i.mode&1)===0)return rl(n,i,M,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var F=c.dgst;return c=F,m=Error(t(419)),c=yu(m,c,void 0),rl(n,i,M,c)}if(F=(M&n.childLanes)!==0,Vn||F){if(c=mn,c!==null){switch(M&-M){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|M))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Vi(n,d),_i(c,n,d,-1))}return Hu(),c=yu(Error(t(421))),rl(n,i,M,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Ug.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,$n=hr(d.nextSibling),Kn=i,Xt=!0,pi=null,n!==null&&(ni[ii++]=zi,ni[ii++]=Bi,ni[ii++]=Vr,zi=n.id,Bi=n.overflow,Vr=i),i=bu(i,c.children),i.flags|=4096,i)}function Dp(n,i,o){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),iu(n.return,i,o)}function Au(n,i,o,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=o,m.tailMode=d)}function Lp(n,i,o){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(In(n,i,c.children,o),c=qt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Dp(n,o,i);else if(n.tag===19)Dp(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(zt(qt,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)n=o.alternate,n!==null&&Qa(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),Au(i,!1,d,o,m);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Qa(n)===null){i.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}Au(i,!0,o,null,m);break;case"together":Au(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function sl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Gi(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),jr|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=wr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=wr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function Mg(n,i,o){switch(i.tag){case 3:Cp(i),Cs();break;case 5:Zh(i);break;case 1:Bn(i.type)&&Va(i);break;case 4:lu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;zt(ja,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(zt(qt,qt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Pp(n,i,o):(zt(qt,qt.current&1),n=Gi(n,i,o),n!==null?n.sibling:null);zt(qt,qt.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Lp(n,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),zt(qt,qt.current),c)break;return null;case 22:case 23:return i.lanes=0,Tp(n,i,o)}return Gi(n,i,o)}var Ip,Cu,Up,Np;Ip=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Cu=function(){},Up=function(n,i,o,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,Wr(Ci.current);var m=null;switch(o){case"input":d=It(n,d),c=It(n,c),m=[];break;case"select":d=I({},d,{value:void 0}),c=I({},c,{value:void 0}),m=[];break;case"textarea":d=at(n,d),c=at(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=ka)}et(o,c);var M;o=null;for(ie in d)if(!c.hasOwnProperty(ie)&&d.hasOwnProperty(ie)&&d[ie]!=null)if(ie==="style"){var F=d[ie];for(M in F)F.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else ie!=="dangerouslySetInnerHTML"&&ie!=="children"&&ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&ie!=="autoFocus"&&(a.hasOwnProperty(ie)?m||(m=[]):(m=m||[]).push(ie,null));for(ie in c){var V=c[ie];if(F=d?.[ie],c.hasOwnProperty(ie)&&V!==F&&(V!=null||F!=null))if(ie==="style")if(F){for(M in F)!F.hasOwnProperty(M)||V&&V.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in V)V.hasOwnProperty(M)&&F[M]!==V[M]&&(o||(o={}),o[M]=V[M])}else o||(m||(m=[]),m.push(ie,o)),o=V;else ie==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,F=F?F.__html:void 0,V!=null&&F!==V&&(m=m||[]).push(ie,V)):ie==="children"?typeof V!="string"&&typeof V!="number"||(m=m||[]).push(ie,""+V):ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&(a.hasOwnProperty(ie)?(V!=null&&ie==="onScroll"&&Bt("scroll",n),m||F===V||(m=[])):(m=m||[]).push(ie,V))}o&&(m=m||[]).push("style",o);var ie=m;(i.updateQueue=ie)&&(i.flags|=4)}},Np=function(n,i,o,c){o!==c&&(i.flags|=4)};function Go(n,i){if(!Xt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Tn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(i)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=o,i}function Eg(n,i,o){var c=i.pendingProps;switch(Kc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tn(i),null;case 1:return Bn(i.type)&&Ba(),Tn(i),null;case 3:return c=i.stateNode,Ls(),Vt(zn),Vt(En),fu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Xa(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,pi!==null&&(zu(pi),pi=null))),Cu(n,i),Tn(i),null;case 5:cu(i);var d=Wr(ko.current);if(o=i.type,n!==null&&i.stateNode!=null)Up(n,i,o,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Tn(i),null}if(n=Wr(Ci.current),Xa(i)){c=i.stateNode,o=i.type;var m=i.memoizedProps;switch(c[Ai]=i,c[Io]=m,n=(i.mode&1)!==0,o){case"dialog":Bt("cancel",c),Bt("close",c);break;case"iframe":case"object":case"embed":Bt("load",c);break;case"video":case"audio":for(d=0;d<Po.length;d++)Bt(Po[d],c);break;case"source":Bt("error",c);break;case"img":case"image":case"link":Bt("error",c),Bt("load",c);break;case"details":Bt("toggle",c);break;case"input":k(c,m),Bt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Bt("invalid",c);break;case"textarea":N(c,m),Bt("invalid",c)}et(o,m),d=null;for(var M in m)if(m.hasOwnProperty(M)){var F=m[M];M==="children"?typeof F=="string"?c.textContent!==F&&(m.suppressHydrationWarning!==!0&&Oa(c.textContent,F,n),d=["children",F]):typeof F=="number"&&c.textContent!==""+F&&(m.suppressHydrationWarning!==!0&&Oa(c.textContent,F,n),d=["children",""+F]):a.hasOwnProperty(M)&&F!=null&&M==="onScroll"&&Bt("scroll",c)}switch(o){case"input":dt(c),Pt(c,m,!0);break;case"textarea":dt(c),J(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=ka)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{M=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=de(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=M.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=M.createElement(o,{is:c.is}):(n=M.createElement(o),o==="select"&&(M=n,c.multiple?M.multiple=!0:c.size&&(M.size=c.size))):n=M.createElementNS(n,o),n[Ai]=i,n[Io]=c,Ip(n,i,!1,!1),i.stateNode=n;e:{switch(M=Ue(o,c),o){case"dialog":Bt("cancel",n),Bt("close",n),d=c;break;case"iframe":case"object":case"embed":Bt("load",n),d=c;break;case"video":case"audio":for(d=0;d<Po.length;d++)Bt(Po[d],n);d=c;break;case"source":Bt("error",n),d=c;break;case"img":case"image":case"link":Bt("error",n),Bt("load",n),d=c;break;case"details":Bt("toggle",n),d=c;break;case"input":k(n,c),d=It(n,c),Bt("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=I({},c,{value:void 0}),Bt("invalid",n);break;case"textarea":N(n,c),d=at(n,c),Bt("invalid",n);break;default:d=c}et(o,d),F=d;for(m in F)if(F.hasOwnProperty(m)){var V=F[m];m==="style"?Ae(n,V):m==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&Ze(n,V)):m==="children"?typeof V=="string"?(o!=="textarea"||V!=="")&&Re(n,V):typeof V=="number"&&Re(n,""+V):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?V!=null&&m==="onScroll"&&Bt("scroll",n):V!=null&&C(n,m,V,M))}switch(o){case"input":dt(n),Pt(n,c,!1);break;case"textarea":dt(n),J(n);break;case"option":c.value!=null&&n.setAttribute("value",""+ve(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?Ye(n,!!c.multiple,m,!1):c.defaultValue!=null&&Ye(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=ka)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Tn(i),null;case 6:if(n&&i.stateNode!=null)Np(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(o=Wr(ko.current),Wr(Ci.current),Xa(i)){if(c=i.stateNode,o=i.memoizedProps,c[Ai]=i,(m=c.nodeValue!==o)&&(n=Kn,n!==null))switch(n.tag){case 3:Oa(c.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Oa(c.nodeValue,o,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[Ai]=i,i.stateNode=c}return Tn(i),null;case 13:if(Vt(qt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Xt&&$n!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Oh(),Cs(),i.flags|=98560,m=!1;else if(m=Xa(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Ai]=i}else Cs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Tn(i),m=!1}else pi!==null&&(zu(pi),pi=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(qt.current&1)!==0?cn===0&&(cn=3):Hu())),i.updateQueue!==null&&(i.flags|=4),Tn(i),null);case 4:return Ls(),Cu(n,i),n===null&&Do(i.stateNode.containerInfo),Tn(i),null;case 10:return nu(i.type._context),Tn(i),null;case 17:return Bn(i.type)&&Ba(),Tn(i),null;case 19:if(Vt(qt),m=i.memoizedState,m===null)return Tn(i),null;if(c=(i.flags&128)!==0,M=m.rendering,M===null)if(c)Go(m,!1);else{if(cn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(M=Qa(n),M!==null){for(i.flags|=128,Go(m,!1),c=M.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)m=o,n=c,m.flags&=14680066,M=m.alternate,M===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=M.childLanes,m.lanes=M.lanes,m.child=M.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=M.memoizedProps,m.memoizedState=M.memoizedState,m.updateQueue=M.updateQueue,m.type=M.type,n=M.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return zt(qt,qt.current&1|2),i.child}n=n.sibling}m.tail!==null&&Q()>Fs&&(i.flags|=128,c=!0,Go(m,!1),i.lanes=4194304)}else{if(!c)if(n=Qa(M),n!==null){if(i.flags|=128,c=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Go(m,!0),m.tail===null&&m.tailMode==="hidden"&&!M.alternate&&!Xt)return Tn(i),null}else 2*Q()-m.renderingStartTime>Fs&&o!==1073741824&&(i.flags|=128,c=!0,Go(m,!1),i.lanes=4194304);m.isBackwards?(M.sibling=i.child,i.child=M):(o=m.last,o!==null?o.sibling=M:i.child=M,m.last=M)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Q(),i.sibling=null,o=qt.current,zt(qt,c?o&1|2:o&1),i):(Tn(i),null);case 22:case 23:return Vu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Qn&1073741824)!==0&&(Tn(i),i.subtreeFlags&6&&(i.flags|=8192)):Tn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function wg(n,i){switch(Kc(i),i.tag){case 1:return Bn(i.type)&&Ba(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ls(),Vt(zn),Vt(En),fu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return cu(i),null;case 13:if(Vt(qt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Cs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Vt(qt),null;case 4:return Ls(),null;case 10:return nu(i.type._context),null;case 22:case 23:return Vu(),null;case 24:return null;default:return null}}var ol=!1,bn=!1,Tg=typeof WeakSet=="function"?WeakSet:Set,ke=null;function Us(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){Kt(n,i,c)}else o.current=null}function Ru(n,i,o){try{o()}catch(c){Kt(n,i,c)}}var Fp=!1;function bg(n,i){if(Vc=ba,n=hh(),Ic(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var M=0,F=-1,V=-1,ie=0,xe=0,ye=n,me=null;t:for(;;){for(var Ne;ye!==o||d!==0&&ye.nodeType!==3||(F=M+d),ye!==m||c!==0&&ye.nodeType!==3||(V=M+c),ye.nodeType===3&&(M+=ye.nodeValue.length),(Ne=ye.firstChild)!==null;)me=ye,ye=Ne;for(;;){if(ye===n)break t;if(me===o&&++ie===d&&(F=M),me===m&&++xe===c&&(V=M),(Ne=ye.nextSibling)!==null)break;ye=me,me=ye.parentNode}ye=Ne}o=F===-1||V===-1?null:{start:F,end:V}}else o=null}o=o||{start:0,end:0}}else o=null;for(Hc={focusedElem:n,selectionRange:o},ba=!1,ke=i;ke!==null;)if(i=ke,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,ke=n;else for(;ke!==null;){i=ke;try{var Ve=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ve!==null){var Ge=Ve.memoizedProps,en=Ve.memoizedState,Z=i.stateNode,X=Z.getSnapshotBeforeUpdate(i.elementType===i.type?Ge:mi(i.type,Ge),en);Z.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var ee=i.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Me){Kt(i,i.return,Me)}if(n=i.sibling,n!==null){n.return=i.return,ke=n;break}ke=i.return}return Ve=Fp,Fp=!1,Ve}function Wo(n,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&Ru(i,o,m)}d=d.next}while(d!==c)}}function al(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function Pu(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function Op(n){var i=n.alternate;i!==null&&(n.alternate=null,Op(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ai],delete i[Io],delete i[jc],delete i[lg],delete i[cg])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function kp(n){return n.tag===5||n.tag===3||n.tag===4}function zp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||kp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Du(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=ka));else if(c!==4&&(n=n.child,n!==null))for(Du(n,i,o),n=n.sibling;n!==null;)Du(n,i,o),n=n.sibling}function Lu(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Lu(n,i,o),n=n.sibling;n!==null;)Lu(n,i,o),n=n.sibling}var yn=null,xi=!1;function vr(n,i,o){for(o=o.child;o!==null;)Bp(n,i,o),o=o.sibling}function Bp(n,i,o){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(tt,o)}catch{}switch(o.tag){case 5:bn||Us(o,i);case 6:var c=yn,d=xi;yn=null,vr(n,i,o),yn=c,xi=d,yn!==null&&(xi?(n=yn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):yn.removeChild(o.stateNode));break;case 18:yn!==null&&(xi?(n=yn,o=o.stateNode,n.nodeType===8?Xc(n.parentNode,o):n.nodeType===1&&Xc(n,o),Mo(n)):Xc(yn,o.stateNode));break;case 4:c=yn,d=xi,yn=o.stateNode.containerInfo,xi=!0,vr(n,i,o),yn=c,xi=d;break;case 0:case 11:case 14:case 15:if(!bn&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,M=m.destroy;m=m.tag,M!==void 0&&((m&2)!==0||(m&4)!==0)&&Ru(o,i,M),d=d.next}while(d!==c)}vr(n,i,o);break;case 1:if(!bn&&(Us(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(F){Kt(o,i,F)}vr(n,i,o);break;case 21:vr(n,i,o);break;case 22:o.mode&1?(bn=(c=bn)||o.memoizedState!==null,vr(n,i,o),bn=c):vr(n,i,o);break;default:vr(n,i,o)}}function Vp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new Tg),i.forEach(function(c){var d=Ng.bind(null,n,c);o.has(c)||(o.add(c),c.then(d,d))})}}function gi(n,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var d=o[c];try{var m=n,M=i,F=M;e:for(;F!==null;){switch(F.tag){case 5:yn=F.stateNode,xi=!1;break e;case 3:yn=F.stateNode.containerInfo,xi=!0;break e;case 4:yn=F.stateNode.containerInfo,xi=!0;break e}F=F.return}if(yn===null)throw Error(t(160));Bp(m,M,d),yn=null,xi=!1;var V=d.alternate;V!==null&&(V.return=null),d.return=null}catch(ie){Kt(d,i,ie)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Hp(i,n),i=i.sibling}function Hp(n,i){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(gi(i,n),Pi(n),c&4){try{Wo(3,n,n.return),al(3,n)}catch(Ge){Kt(n,n.return,Ge)}try{Wo(5,n,n.return)}catch(Ge){Kt(n,n.return,Ge)}}break;case 1:gi(i,n),Pi(n),c&512&&o!==null&&Us(o,o.return);break;case 5:if(gi(i,n),Pi(n),c&512&&o!==null&&Us(o,o.return),n.flags&32){var d=n.stateNode;try{Re(d,"")}catch(Ge){Kt(n,n.return,Ge)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,M=o!==null?o.memoizedProps:m,F=n.type,V=n.updateQueue;if(n.updateQueue=null,V!==null)try{F==="input"&&m.type==="radio"&&m.name!=null&&_t(d,m),Ue(F,M);var ie=Ue(F,m);for(M=0;M<V.length;M+=2){var xe=V[M],ye=V[M+1];xe==="style"?Ae(d,ye):xe==="dangerouslySetInnerHTML"?Ze(d,ye):xe==="children"?Re(d,ye):C(d,xe,ye,ie)}switch(F){case"input":xt(d,m);break;case"textarea":w(d,m);break;case"select":var me=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var Ne=m.value;Ne!=null?Ye(d,!!m.multiple,Ne,!1):me!==!!m.multiple&&(m.defaultValue!=null?Ye(d,!!m.multiple,m.defaultValue,!0):Ye(d,!!m.multiple,m.multiple?[]:"",!1))}d[Io]=m}catch(Ge){Kt(n,n.return,Ge)}}break;case 6:if(gi(i,n),Pi(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(Ge){Kt(n,n.return,Ge)}}break;case 3:if(gi(i,n),Pi(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{Mo(i.containerInfo)}catch(Ge){Kt(n,n.return,Ge)}break;case 4:gi(i,n),Pi(n);break;case 13:gi(i,n),Pi(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Nu=Q())),c&4&&Vp(n);break;case 22:if(xe=o!==null&&o.memoizedState!==null,n.mode&1?(bn=(ie=bn)||xe,gi(i,n),bn=ie):gi(i,n),Pi(n),c&8192){if(ie=n.memoizedState!==null,(n.stateNode.isHidden=ie)&&!xe&&(n.mode&1)!==0)for(ke=n,xe=n.child;xe!==null;){for(ye=ke=xe;ke!==null;){switch(me=ke,Ne=me.child,me.tag){case 0:case 11:case 14:case 15:Wo(4,me,me.return);break;case 1:Us(me,me.return);var Ve=me.stateNode;if(typeof Ve.componentWillUnmount=="function"){c=me,o=me.return;try{i=c,Ve.props=i.memoizedProps,Ve.state=i.memoizedState,Ve.componentWillUnmount()}catch(Ge){Kt(c,o,Ge)}}break;case 5:Us(me,me.return);break;case 22:if(me.memoizedState!==null){Xp(ye);continue}}Ne!==null?(Ne.return=me,ke=Ne):Xp(ye)}xe=xe.sibling}e:for(xe=null,ye=n;;){if(ye.tag===5){if(xe===null){xe=ye;try{d=ye.stateNode,ie?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(F=ye.stateNode,V=ye.memoizedProps.style,M=V!=null&&V.hasOwnProperty("display")?V.display:null,F.style.display=ge("display",M))}catch(Ge){Kt(n,n.return,Ge)}}}else if(ye.tag===6){if(xe===null)try{ye.stateNode.nodeValue=ie?"":ye.memoizedProps}catch(Ge){Kt(n,n.return,Ge)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;xe===ye&&(xe=null),ye=ye.return}xe===ye&&(xe=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:gi(i,n),Pi(n),c&4&&Vp(n);break;case 21:break;default:gi(i,n),Pi(n)}}function Pi(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(kp(o)){var c=o;break e}o=o.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Re(d,""),c.flags&=-33);var m=zp(n);Lu(n,m,d);break;case 3:case 4:var M=c.stateNode.containerInfo,F=zp(n);Du(n,F,M);break;default:throw Error(t(161))}}catch(V){Kt(n,n.return,V)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Ag(n,i,o){ke=n,Gp(n)}function Gp(n,i,o){for(var c=(n.mode&1)!==0;ke!==null;){var d=ke,m=d.child;if(d.tag===22&&c){var M=d.memoizedState!==null||ol;if(!M){var F=d.alternate,V=F!==null&&F.memoizedState!==null||bn;F=ol;var ie=bn;if(ol=M,(bn=V)&&!ie)for(ke=d;ke!==null;)M=ke,V=M.child,M.tag===22&&M.memoizedState!==null?jp(d):V!==null?(V.return=M,ke=V):jp(d);for(;m!==null;)ke=m,Gp(m),m=m.sibling;ke=d,ol=F,bn=ie}Wp(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,ke=m):Wp(n)}}function Wp(n){for(;ke!==null;){var i=ke;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:bn||al(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!bn)if(o===null)c.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:mi(i.type,o.memoizedProps);c.componentDidUpdate(d,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Vh(i,m,c);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Vh(i,M,o)}break;case 5:var F=i.stateNode;if(o===null&&i.flags&4){o=F;var V=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&o.focus();break;case"img":V.src&&(o.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ie=i.alternate;if(ie!==null){var xe=ie.memoizedState;if(xe!==null){var ye=xe.dehydrated;ye!==null&&Mo(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}bn||i.flags&512&&Pu(i)}catch(me){Kt(i,i.return,me)}}if(i===n){ke=null;break}if(o=i.sibling,o!==null){o.return=i.return,ke=o;break}ke=i.return}}function Xp(n){for(;ke!==null;){var i=ke;if(i===n){ke=null;break}var o=i.sibling;if(o!==null){o.return=i.return,ke=o;break}ke=i.return}}function jp(n){for(;ke!==null;){var i=ke;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{al(4,i)}catch(V){Kt(i,o,V)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(V){Kt(i,d,V)}}var m=i.return;try{Pu(i)}catch(V){Kt(i,m,V)}break;case 5:var M=i.return;try{Pu(i)}catch(V){Kt(i,M,V)}}}catch(V){Kt(i,i.return,V)}if(i===n){ke=null;break}var F=i.sibling;if(F!==null){F.return=i.return,ke=F;break}ke=i.return}}var Cg=Math.ceil,ll=L.ReactCurrentDispatcher,Iu=L.ReactCurrentOwner,oi=L.ReactCurrentBatchConfig,Et=0,mn=null,rn=null,Sn=0,Qn=0,Ns=pr(0),cn=0,Xo=null,jr=0,cl=0,Uu=0,jo=null,Hn=null,Nu=0,Fs=1/0,Wi=null,ul=!1,Fu=null,yr=null,fl=!1,Sr=null,dl=0,Yo=0,Ou=null,hl=-1,pl=0;function Un(){return(Et&6)!==0?Q():hl!==-1?hl:hl=Q()}function Mr(n){return(n.mode&1)===0?1:(Et&2)!==0&&Sn!==0?Sn&-Sn:fg.transition!==null?(pl===0&&(pl=or()),pl):(n=ht,n!==0||(n=window.event,n=n===void 0?16:Yd(n.type)),n)}function _i(n,i,o,c){if(50<Yo)throw Yo=0,Ou=null,Error(t(185));nn(n,o,c),((Et&2)===0||n!==mn)&&(n===mn&&((Et&2)===0&&(cl|=o),cn===4&&Er(n,Sn)),Gn(n,c),o===1&&Et===0&&(i.mode&1)===0&&(Fs=Q()+500,Ha&&xr()))}function Gn(n,i){var o=n.callbackNode;sr(n,i);var c=yt(n,n===mn?Sn:0);if(c===0)o!==null&&Ea(o),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(o!=null&&Ea(o),i===1)n.tag===0?ug(qp.bind(null,n)):Lh(qp.bind(null,n)),og(function(){(Et&6)===0&&xr()}),o=null;else{switch(ms(c)){case 1:o=q;break;case 4:o=be;break;case 16:o=De;break;case 536870912:o=Oe;break;default:o=De}o=nm(o,Yp.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function Yp(n,i){if(hl=-1,pl=0,(Et&6)!==0)throw Error(t(327));var o=n.callbackNode;if(Os()&&n.callbackNode!==o)return null;var c=yt(n,n===mn?Sn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=ml(n,c);else{i=c;var d=Et;Et|=2;var m=Kp();(mn!==n||Sn!==i)&&(Wi=null,Fs=Q()+500,qr(n,i));do try{Dg();break}catch(F){Zp(n,F)}while(!0);tu(),ll.current=m,Et=d,rn!==null?i=0:(mn=null,Sn=0,i=cn)}if(i!==0){if(i===2&&(d=vn(n),d!==0&&(c=d,i=ku(n,d))),i===1)throw o=Xo,qr(n,0),Er(n,c),Gn(n,Q()),o;if(i===6)Er(n,c);else{if(d=n.current.alternate,(c&30)===0&&!Rg(d)&&(i=ml(n,c),i===2&&(m=vn(n),m!==0&&(c=m,i=ku(n,m))),i===1))throw o=Xo,qr(n,0),Er(n,c),Gn(n,Q()),o;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Zr(n,Hn,Wi);break;case 3:if(Er(n,c),(c&130023424)===c&&(i=Nu+500-Q(),10<i)){if(yt(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Un(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Wc(Zr.bind(null,n,Hn,Wi),i);break}Zr(n,Hn,Wi);break;case 4:if(Er(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var M=31-ot(c);m=1<<M,M=i[M],M>d&&(d=M),c&=~m}if(c=d,c=Q()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Cg(c/1960))-c,10<c){n.timeoutHandle=Wc(Zr.bind(null,n,Hn,Wi),c);break}Zr(n,Hn,Wi);break;case 5:Zr(n,Hn,Wi);break;default:throw Error(t(329))}}}return Gn(n,Q()),n.callbackNode===o?Yp.bind(null,n):null}function ku(n,i){var o=jo;return n.current.memoizedState.isDehydrated&&(qr(n,i).flags|=256),n=ml(n,i),n!==2&&(i=Hn,Hn=o,i!==null&&zu(i)),n}function zu(n){Hn===null?Hn=n:Hn.push.apply(Hn,n)}function Rg(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var d=o[c],m=d.getSnapshot;d=d.value;try{if(!hi(m(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Er(n,i){for(i&=~Uu,i&=~cl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-ot(i),c=1<<o;n[o]=-1,i&=~c}}function qp(n){if((Et&6)!==0)throw Error(t(327));Os();var i=yt(n,0);if((i&1)===0)return Gn(n,Q()),null;var o=ml(n,i);if(n.tag!==0&&o===2){var c=vn(n);c!==0&&(i=c,o=ku(n,c))}if(o===1)throw o=Xo,qr(n,0),Er(n,i),Gn(n,Q()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Zr(n,Hn,Wi),Gn(n,Q()),null}function Bu(n,i){var o=Et;Et|=1;try{return n(i)}finally{Et=o,Et===0&&(Fs=Q()+500,Ha&&xr())}}function Yr(n){Sr!==null&&Sr.tag===0&&(Et&6)===0&&Os();var i=Et;Et|=1;var o=oi.transition,c=ht;try{if(oi.transition=null,ht=1,n)return n()}finally{ht=c,oi.transition=o,Et=i,(Et&6)===0&&xr()}}function Vu(){Qn=Ns.current,Vt(Ns)}function qr(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,sg(o)),rn!==null)for(o=rn.return;o!==null;){var c=o;switch(Kc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Ba();break;case 3:Ls(),Vt(zn),Vt(En),fu();break;case 5:cu(c);break;case 4:Ls();break;case 13:Vt(qt);break;case 19:Vt(qt);break;case 10:nu(c.type._context);break;case 22:case 23:Vu()}o=o.return}if(mn=n,rn=n=wr(n.current,null),Sn=Qn=i,cn=0,Xo=null,Uu=cl=jr=0,Hn=jo=null,Gr!==null){for(i=0;i<Gr.length;i++)if(o=Gr[i],c=o.interleaved,c!==null){o.interleaved=null;var d=c.next,m=o.pending;if(m!==null){var M=m.next;m.next=d,c.next=M}o.pending=c}Gr=null}return n}function Zp(n,i){do{var o=rn;try{if(tu(),Ja.current=il,el){for(var c=Zt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}el=!1}if(Xr=0,pn=ln=Zt=null,zo=!1,Bo=0,Iu.current=null,o===null||o.return===null){cn=1,Xo=i,rn=null;break}e:{var m=n,M=o.return,F=o,V=i;if(i=Sn,F.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var ie=V,xe=F,ye=xe.tag;if((xe.mode&1)===0&&(ye===0||ye===11||ye===15)){var me=xe.alternate;me?(xe.updateQueue=me.updateQueue,xe.memoizedState=me.memoizedState,xe.lanes=me.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Ne=yp(M);if(Ne!==null){Ne.flags&=-257,Sp(Ne,M,F,m,i),Ne.mode&1&&vp(m,ie,i),i=Ne,V=ie;var Ve=i.updateQueue;if(Ve===null){var Ge=new Set;Ge.add(V),i.updateQueue=Ge}else Ve.add(V);break e}else{if((i&1)===0){vp(m,ie,i),Hu();break e}V=Error(t(426))}}else if(Xt&&F.mode&1){var en=yp(M);if(en!==null){(en.flags&65536)===0&&(en.flags|=256),Sp(en,M,F,m,i),Jc(Is(V,F));break e}}m=V=Is(V,F),cn!==4&&(cn=2),jo===null?jo=[m]:jo.push(m),m=M;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var Z=gp(m,V,i);Bh(m,Z);break e;case 1:F=V;var X=m.type,ee=m.stateNode;if((m.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(yr===null||!yr.has(ee)))){m.flags|=65536,i&=-i,m.lanes|=i;var Me=_p(m,F,i);Bh(m,Me);break e}}m=m.return}while(m!==null)}Qp(o)}catch(je){i=je,rn===o&&o!==null&&(rn=o=o.return);continue}break}while(!0)}function Kp(){var n=ll.current;return ll.current=il,n===null?il:n}function Hu(){(cn===0||cn===3||cn===2)&&(cn=4),mn===null||(jr&268435455)===0&&(cl&268435455)===0||Er(mn,Sn)}function ml(n,i){var o=Et;Et|=2;var c=Kp();(mn!==n||Sn!==i)&&(Wi=null,qr(n,i));do try{Pg();break}catch(d){Zp(n,d)}while(!0);if(tu(),Et=o,ll.current=c,rn!==null)throw Error(t(261));return mn=null,Sn=0,cn}function Pg(){for(;rn!==null;)$p(rn)}function Dg(){for(;rn!==null&&!R();)$p(rn)}function $p(n){var i=tm(n.alternate,n,Qn);n.memoizedProps=n.pendingProps,i===null?Qp(n):rn=i,Iu.current=null}function Qp(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=Eg(o,i,Qn),o!==null){rn=o;return}}else{if(o=wg(o,i),o!==null){o.flags&=32767,rn=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{cn=6,rn=null;return}}if(i=i.sibling,i!==null){rn=i;return}rn=i=n}while(i!==null);cn===0&&(cn=5)}function Zr(n,i,o){var c=ht,d=oi.transition;try{oi.transition=null,ht=1,Lg(n,i,o,c)}finally{oi.transition=d,ht=c}return null}function Lg(n,i,o,c){do Os();while(Sr!==null);if((Et&6)!==0)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=o.lanes|o.childLanes;if(kn(n,m),n===mn&&(rn=mn=null,Sn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||fl||(fl=!0,nm(De,function(){return Os(),null})),m=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||m){m=oi.transition,oi.transition=null;var M=ht;ht=1;var F=Et;Et|=4,Iu.current=null,bg(n,o),Hp(o,n),Qx(Hc),ba=!!Vc,Hc=Vc=null,n.current=o,Ag(o),Y(),Et=F,ht=M,oi.transition=m}else n.current=o;if(fl&&(fl=!1,Sr=n,dl=d),m=n.pendingLanes,m===0&&(yr=null),Je(o.stateNode),Gn(n,Q()),i!==null)for(c=n.onRecoverableError,o=0;o<i.length;o++)d=i[o],c(d.value,{componentStack:d.stack,digest:d.digest});if(ul)throw ul=!1,n=Fu,Fu=null,n;return(dl&1)!==0&&n.tag!==0&&Os(),m=n.pendingLanes,(m&1)!==0?n===Ou?Yo++:(Yo=0,Ou=n):Yo=0,xr(),null}function Os(){if(Sr!==null){var n=ms(dl),i=oi.transition,o=ht;try{if(oi.transition=null,ht=16>n?16:n,Sr===null)var c=!1;else{if(n=Sr,Sr=null,dl=0,(Et&6)!==0)throw Error(t(331));var d=Et;for(Et|=4,ke=n.current;ke!==null;){var m=ke,M=m.child;if((ke.flags&16)!==0){var F=m.deletions;if(F!==null){for(var V=0;V<F.length;V++){var ie=F[V];for(ke=ie;ke!==null;){var xe=ke;switch(xe.tag){case 0:case 11:case 15:Wo(8,xe,m)}var ye=xe.child;if(ye!==null)ye.return=xe,ke=ye;else for(;ke!==null;){xe=ke;var me=xe.sibling,Ne=xe.return;if(Op(xe),xe===ie){ke=null;break}if(me!==null){me.return=Ne,ke=me;break}ke=Ne}}}var Ve=m.alternate;if(Ve!==null){var Ge=Ve.child;if(Ge!==null){Ve.child=null;do{var en=Ge.sibling;Ge.sibling=null,Ge=en}while(Ge!==null)}}ke=m}}if((m.subtreeFlags&2064)!==0&&M!==null)M.return=m,ke=M;else e:for(;ke!==null;){if(m=ke,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Wo(9,m,m.return)}var Z=m.sibling;if(Z!==null){Z.return=m.return,ke=Z;break e}ke=m.return}}var X=n.current;for(ke=X;ke!==null;){M=ke;var ee=M.child;if((M.subtreeFlags&2064)!==0&&ee!==null)ee.return=M,ke=ee;else e:for(M=X;ke!==null;){if(F=ke,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:al(9,F)}}catch(je){Kt(F,F.return,je)}if(F===M){ke=null;break e}var Me=F.sibling;if(Me!==null){Me.return=F.return,ke=Me;break e}ke=F.return}}if(Et=d,xr(),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(tt,n)}catch{}c=!0}return c}finally{ht=o,oi.transition=i}}return!1}function Jp(n,i,o){i=Is(o,i),i=gp(n,i,1),n=_r(n,i,1),i=Un(),n!==null&&(nn(n,1,i),Gn(n,i))}function Kt(n,i,o){if(n.tag===3)Jp(n,n,o);else for(;i!==null;){if(i.tag===3){Jp(i,n,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(yr===null||!yr.has(c))){n=Is(o,n),n=_p(i,n,1),i=_r(i,n,1),n=Un(),i!==null&&(nn(i,1,n),Gn(i,n));break}}i=i.return}}function Ig(n,i,o){var c=n.pingCache;c!==null&&c.delete(i),i=Un(),n.pingedLanes|=n.suspendedLanes&o,mn===n&&(Sn&o)===o&&(cn===4||cn===3&&(Sn&130023424)===Sn&&500>Q()-Nu?qr(n,0):Uu|=o),Gn(n,i)}function em(n,i){i===0&&((n.mode&1)===0?i=1:(i=Qe,Qe<<=1,(Qe&130023424)===0&&(Qe=4194304)));var o=Un();n=Vi(n,i),n!==null&&(nn(n,i,o),Gn(n,o))}function Ug(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),em(n,o)}function Ng(n,i){var o=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),em(n,o)}var tm;tm=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||zn.current)Vn=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return Vn=!1,Mg(n,i,o);Vn=(n.flags&131072)!==0}else Vn=!1,Xt&&(i.flags&1048576)!==0&&Ih(i,Wa,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;sl(n,i),n=i.pendingProps;var d=Ts(i,En.current);Ps(i,o),d=pu(null,i,c,n,d,o);var m=mu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Bn(c)?(m=!0,Va(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,su(i),d.updater=Ka,i.stateNode=d,d._reactInternals=i,au(i,c,n,o),i=Eu(null,i,c,!0,m,o)):(i.tag=0,Xt&&m&&Zc(i),In(null,i,d,o),i=i.child),i;case 16:c=i.elementType;e:{switch(sl(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=Og(c),n=mi(c,n),d){case 0:i=Mu(null,i,c,n,o);break e;case 1:i=Ap(null,i,c,n,o);break e;case 11:i=Mp(null,i,c,n,o);break e;case 14:i=Ep(null,i,c,mi(c.type,n),o);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:mi(c,d),Mu(n,i,c,d,o);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:mi(c,d),Ap(n,i,c,d,o);case 3:e:{if(Cp(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,zh(n,i),Za(i,c,null,o);var M=i.memoizedState;if(c=M.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Is(Error(t(423)),i),i=Rp(n,i,c,o,d);break e}else if(c!==d){d=Is(Error(t(424)),i),i=Rp(n,i,c,o,d);break e}else for($n=hr(i.stateNode.containerInfo.firstChild),Kn=i,Xt=!0,pi=null,o=qh(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Cs(),c===d){i=Gi(n,i,o);break e}In(n,i,c,o)}i=i.child}return i;case 5:return Zh(i),n===null&&Qc(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,M=d.children,Gc(c,d)?M=null:m!==null&&Gc(c,m)&&(i.flags|=32),bp(n,i),In(n,i,M,o),i.child;case 6:return n===null&&Qc(i),null;case 13:return Pp(n,i,o);case 4:return lu(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Ds(i,null,c,o):In(n,i,c,o),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:mi(c,d),Mp(n,i,c,d,o);case 7:return In(n,i,i.pendingProps,o),i.child;case 8:return In(n,i,i.pendingProps.children,o),i.child;case 12:return In(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,M=d.value,zt(ja,c._currentValue),c._currentValue=M,m!==null)if(hi(m.value,M)){if(m.children===d.children&&!zn.current){i=Gi(n,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var F=m.dependencies;if(F!==null){M=m.child;for(var V=F.firstContext;V!==null;){if(V.context===c){if(m.tag===1){V=Hi(-1,o&-o),V.tag=2;var ie=m.updateQueue;if(ie!==null){ie=ie.shared;var xe=ie.pending;xe===null?V.next=V:(V.next=xe.next,xe.next=V),ie.pending=V}}m.lanes|=o,V=m.alternate,V!==null&&(V.lanes|=o),iu(m.return,o,i),F.lanes|=o;break}V=V.next}}else if(m.tag===10)M=m.type===i.type?null:m.child;else if(m.tag===18){if(M=m.return,M===null)throw Error(t(341));M.lanes|=o,F=M.alternate,F!==null&&(F.lanes|=o),iu(M,o,i),M=m.sibling}else M=m.child;if(M!==null)M.return=m;else for(M=m;M!==null;){if(M===i){M=null;break}if(m=M.sibling,m!==null){m.return=M.return,M=m;break}M=M.return}m=M}In(n,i,d.children,o),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Ps(i,o),d=ri(d),c=c(d),i.flags|=1,In(n,i,c,o),i.child;case 14:return c=i.type,d=mi(c,i.pendingProps),d=mi(c.type,d),Ep(n,i,c,d,o);case 15:return wp(n,i,i.type,i.pendingProps,o);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:mi(c,d),sl(n,i),i.tag=1,Bn(c)?(n=!0,Va(i)):n=!1,Ps(i,o),Wh(i,c,d),au(i,c,d,o),Eu(null,i,c,!0,n,o);case 19:return Lp(n,i,o);case 22:return Tp(n,i,o)}throw Error(t(156,i.tag))};function nm(n,i){return Ma(n,i)}function Fg(n,i,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(n,i,o,c){return new Fg(n,i,o,c)}function Gu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Og(n){if(typeof n=="function")return Gu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===j)return 11;if(n===re)return 14}return 2}function wr(n,i){var o=n.alternate;return o===null?(o=ai(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function xl(n,i,o,c,d,m){var M=2;if(c=n,typeof n=="function")Gu(n)&&(M=1);else if(typeof n=="string")M=5;else e:switch(n){case O:return Kr(o.children,d,m,i);case G:M=8,d|=8;break;case P:return n=ai(12,o,i,d|2),n.elementType=P,n.lanes=m,n;case te:return n=ai(13,o,i,d),n.elementType=te,n.lanes=m,n;case oe:return n=ai(19,o,i,d),n.elementType=oe,n.lanes=m,n;case fe:return gl(o,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case b:M=10;break e;case z:M=9;break e;case j:M=11;break e;case re:M=14;break e;case ue:M=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ai(M,o,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function Kr(n,i,o,c){return n=ai(7,n,c,i),n.lanes=o,n}function gl(n,i,o,c){return n=ai(22,n,c,i),n.elementType=fe,n.lanes=o,n.stateNode={isHidden:!1},n}function Wu(n,i,o){return n=ai(6,n,null,i),n.lanes=o,n}function Xu(n,i,o){return i=ai(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function kg(n,i,o,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ot(0),this.expirationTimes=Ot(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ot(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function ju(n,i,o,c,d,m,M,F,V){return n=new kg(n,i,o,F,V),i===1?(i=1,m===!0&&(i|=8)):i=0,m=ai(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},su(m),n}function zg(n,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:c==null?null:""+c,children:n,containerInfo:i,implementation:o}}function im(n){if(!n)return mr;n=n._reactInternals;e:{if(Ti(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Bn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Bn(o))return Ph(n,o,i)}return i}function rm(n,i,o,c,d,m,M,F,V){return n=ju(o,c,!0,n,d,m,M,F,V),n.context=im(null),o=n.current,c=Un(),d=Mr(o),m=Hi(c,d),m.callback=i??null,_r(o,m,d),n.current.lanes=d,nn(n,d,c),Gn(n,c),n}function _l(n,i,o,c){var d=i.current,m=Un(),M=Mr(d);return o=im(o),i.context===null?i.context=o:i.pendingContext=o,i=Hi(m,M),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=_r(d,i,M),n!==null&&(_i(n,d,M,m),qa(n,d,M)),M}function vl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function sm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function Yu(n,i){sm(n,i),(n=n.alternate)&&sm(n,i)}function Bg(){return null}var om=typeof reportError=="function"?reportError:function(n){console.error(n)};function qu(n){this._internalRoot=n}yl.prototype.render=qu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));_l(n,i,null,null)},yl.prototype.unmount=qu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Yr(function(){_l(null,n,null,null)}),i[Oi]=null}};function yl(n){this._internalRoot=n}yl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Hd();n={blockedOn:null,target:n,priority:i};for(var o=0;o<ur.length&&i!==0&&i<ur[o].priority;o++);ur.splice(o,0,n),o===0&&Xd(n)}};function Zu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Sl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function am(){}function Vg(n,i,o,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var ie=vl(M);m.call(ie)}}var M=rm(i,c,n,0,null,!1,!1,"",am);return n._reactRootContainer=M,n[Oi]=M.current,Do(n.nodeType===8?n.parentNode:n),Yr(),M}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var F=c;c=function(){var ie=vl(V);F.call(ie)}}var V=ju(n,0,!1,null,null,!1,!1,"",am);return n._reactRootContainer=V,n[Oi]=V.current,Do(n.nodeType===8?n.parentNode:n),Yr(function(){_l(i,V,o,c)}),V}function Ml(n,i,o,c,d){var m=o._reactRootContainer;if(m){var M=m;if(typeof d=="function"){var F=d;d=function(){var V=vl(M);F.call(V)}}_l(i,M,n,d)}else M=Vg(o,i,n,d,c);return vl(M)}bi=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=Lt(i.pendingLanes);o!==0&&(an(i,o|1),Gn(i,Q()),(Et&6)===0&&(Fs=Q()+500,xr()))}break;case 13:Yr(function(){var c=Vi(n,1);if(c!==null){var d=Un();_i(c,n,1,d)}}),Yu(n,1)}},yc=function(n){if(n.tag===13){var i=Vi(n,134217728);if(i!==null){var o=Un();_i(i,n,134217728,o)}Yu(n,134217728)}},Vd=function(n){if(n.tag===13){var i=Mr(n),o=Vi(n,i);if(o!==null){var c=Un();_i(o,n,i,c)}Yu(n,i)}},Hd=function(){return ht},Gd=function(n,i){var o=ht;try{return ht=n,i()}finally{ht=o}},Pe=function(n,i,o){switch(i){case"input":if(xt(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==n&&c.form===n.form){var d=za(c);if(!d)throw Error(t(90));tn(c),xt(c,d)}}}break;case"textarea":w(n,o);break;case"select":i=o.value,i!=null&&Ye(n,!!o.multiple,i,!1)}},lt=Bu,Ut=Yr;var Hg={usingClientEntryPoint:!1,Events:[Uo,Es,za,he,Be,Bu]},qo={findFiberByHostInstance:zr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Gg={bundleType:qo.bundleType,version:qo.version,rendererPackageName:qo.rendererPackageName,rendererConfig:qo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ya(n),n===null?null:n.stateNode},findFiberByHostInstance:qo.findFiberByHostInstance||Bg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var El=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!El.isDisabled&&El.supportsFiber)try{tt=El.inject(Gg),Ke=El}catch{}}return Wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hg,Wn.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zu(i))throw Error(t(200));return zg(n,i,null,o)},Wn.createRoot=function(n,i){if(!Zu(n))throw Error(t(299));var o=!1,c="",d=om;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=ju(n,1,!1,null,null,o,!1,c,d),n[Oi]=i.current,Do(n.nodeType===8?n.parentNode:n),new qu(i)},Wn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ya(i),n=n===null?null:n.stateNode,n},Wn.flushSync=function(n){return Yr(n)},Wn.hydrate=function(n,i,o){if(!Sl(i))throw Error(t(200));return Ml(null,n,i,!0,o)},Wn.hydrateRoot=function(n,i,o){if(!Zu(n))throw Error(t(405));var c=o!=null&&o.hydratedSources||null,d=!1,m="",M=om;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=rm(i,null,n,1,o??null,d,!1,m,M),n[Oi]=i.current,Do(n),c)for(n=0;n<c.length;n++)o=c[n],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new yl(i)},Wn.render=function(n,i,o){if(!Sl(i))throw Error(t(200));return Ml(null,n,i,!1,o)},Wn.unmountComponentAtNode=function(n){if(!Sl(n))throw Error(t(40));return n._reactRootContainer?(Yr(function(){Ml(null,null,n,!1,function(){n._reactRootContainer=null,n[Oi]=null})}),!0):!1},Wn.unstable_batchedUpdates=Bu,Wn.unstable_renderSubtreeIntoContainer=function(n,i,o,c){if(!Sl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Ml(n,i,o,!1,c)},Wn.version="18.2.0-next-9e3b772b8-20220608",Wn}var mm;function Qg(){if(mm)return Qu.exports;mm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Qu.exports=$g(),Qu.exports}var xm;function Jg(){if(xm)return wl;xm=1;var s=Qg();return wl.createRoot=s.createRoot,wl.hydrateRoot=s.hydrateRoot,wl}var e_=Jg();const gm=s=>{let e;const t=new Set,r=(p,v)=>{const _=typeof p=="function"?p(e):p;if(!Object.is(_,e)){const g=e;e=v??(typeof _!="object"||_===null)?_:Object.assign({},e,_),t.forEach(S=>S(e,g))}},a=()=>e,f={setState:r,getState:a,getInitialState:()=>h,subscribe:p=>(t.add(p),()=>t.delete(p))},h=e=s(r,a,f);return f},t_=(s=>s?gm(s):gm),n_=s=>s;function i_(s,e=n_){const t=ra.useSyncExternalStore(s.subscribe,ra.useCallback(()=>e(s.getState()),[s,e]),ra.useCallback(()=>e(s.getInitialState()),[s,e]));return ra.useDebugValue(t),t}const _m=s=>{const e=t_(s),t=r=>i_(e,r);return Object.assign(t,e),t},r_=(s=>s?_m(s):_m),Rt=r_(s=>({currentSceneId:null,objects:{},selectedId:null,gizmoMode:"translate",axisConstraint:"none",presence:{},setSnapshot:e=>s({objects:e}),upsertObject:e=>s(t=>({objects:{...t.objects,[e.id]:e}})),removeObject:e=>s(t=>{const{[e]:r,...a}=t.objects;return{objects:a}}),selectObject:e=>s({selectedId:e}),updateTransform:(e,t)=>s(r=>({objects:{...r.objects,[e]:{...r.objects[e],transform:t}}})),setGizmoMode:e=>s({gizmoMode:e}),setAxisConstraint:e=>s({axisConstraint:e}),setPresence:e=>s(t=>({presence:{...t.presence,[e.userId]:e}}))}));function s_({children:s,className:e="",subtle:t=!1}){return Ce.jsx("div",{className:`v3s-panel ${t?"v3s-panel--subtle":""} ${e}`,children:s})}function o_({presences:s}){return Ce.jsx("div",{className:"v3s-cursor-overlay","aria-hidden":!0,children:s.map(e=>Ce.jsxs("div",{className:"v3s-cursor",style:{left:`${e.x}%`,top:`${e.y}%`,borderColor:e.color||"var(--presence-blue)"},children:[Ce.jsx("div",{className:"v3s-cursor__dot",style:{background:e.color||"var(--presence-blue)"}}),e.initials&&Ce.jsx("div",{className:"v3s-cursor__label",children:e.initials})]},e.userId))})}const a_={Select:Ce.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Ce.jsx("path",{d:"M5 5h14v14H5z",stroke:"currentColor",strokeWidth:"1.5",opacity:"0.4"}),Ce.jsx("path",{d:"M7 7l5 2 2 5-5-2-2-5z",fill:"currentColor"})]}),Move:Ce.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Ce.jsx("path",{d:"M12 2l3 3h-2v6h-2V5H9l3-3z",fill:"currentColor"}),Ce.jsx("path",{d:"M12 22l-3-3h2v-6h2v6h2l-3 3z",fill:"currentColor"}),Ce.jsx("circle",{cx:"12",cy:"12",r:"2",fill:"currentColor",opacity:"0.5"})]}),Rotate:Ce.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Ce.jsx("path",{d:"M12 4a8 8 0 018 8h-3l4 4 4-4h-3A10 10 0 1012 22",stroke:"currentColor",strokeWidth:"1.5"})}),Scale:Ce.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Ce.jsx("rect",{x:"6",y:"6",width:"12",height:"12",stroke:"currentColor",strokeWidth:"1.5"}),Ce.jsx("path",{d:"M6 12h12",stroke:"currentColor",strokeWidth:"1.5",opacity:"0.6"}),Ce.jsx("path",{d:"M12 6v12",stroke:"currentColor",strokeWidth:"1.5",opacity:"0.6"})]})};function l_(){const s=Rt(f=>f.upsertObject),e=Rt(f=>f.selectObject),t=Rt(f=>f.gizmoMode),r=Rt(f=>f.setGizmoMode),a=[{key:"Select",label:"Select",onClick:()=>e(null)},{key:"Move",label:"Move",onClick:()=>r("translate")},{key:"Rotate",label:"Rotate",onClick:()=>r("rotate")},{key:"Scale",label:"Scale",onClick:()=>r("scale")}],l=()=>{const f=`obj_${Math.random().toString(36).slice(2,8)}`;s({id:f,type:"cube",transform:{position:[0,.5,0],rotation:[0,0,0],scale:[1,1,1]},props:{color:"#8b9ca7"}}),e(f)},u=()=>{const f=`obj_${Math.random().toString(36).slice(2,8)}`;s({id:f,type:"sphere",transform:{position:[0,.5,0],rotation:[0,0,0],scale:[1,1,1]},props:{color:"#9aa8a0"}}),e(f)};return Ce.jsxs("nav",{className:"v3s-toolshelf",children:[a.map(f=>{const h=f.key==="Move"&&t==="translate"||f.key==="Rotate"&&t==="rotate"||f.key==="Scale"&&t==="scale";return Ce.jsx("button",{className:`v3s-toolbtn ${h?"v3s-toolbtn--active":""}`,title:f.label,"aria-label":f.label,onClick:f.onClick,children:Ce.jsx("span",{className:"v3s-toolbtn__icon","aria-hidden":!0,children:a_[f.key]})},f.key)}),Ce.jsx("button",{className:"v3s-toolbtn",title:"Add Cube","aria-label":"Add Cube",onClick:l,children:Ce.jsx("span",{className:"v3s-toolbtn__icon","aria-hidden":!0,children:Ce.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Ce.jsx("rect",{x:"6",y:"6",width:"12",height:"12",stroke:"currentColor",strokeWidth:"1.5"})})})}),Ce.jsx("button",{className:"v3s-toolbtn",title:"Add Sphere","aria-label":"Add Sphere",onClick:u,children:Ce.jsx("span",{className:"v3s-toolbtn__icon","aria-hidden":!0,children:Ce.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Ce.jsx("circle",{cx:"12",cy:"12",r:"6",stroke:"currentColor",strokeWidth:"1.5"})})})}),Ce.jsx("button",{className:"v3s-toolbtn",title:"Duplicate (Shift+D)","aria-label":"Duplicate",onClick:()=>{const f=Rt.getState().selectedId;if(!f)return;const h=Rt.getState().objects[f];if(!h)return;const p=`obj_${Math.random().toString(36).slice(2,8)}`;s({id:p,type:h.type,transform:{position:[h.transform.position[0]+.5,h.transform.position[1],h.transform.position[2]+.5],rotation:[...h.transform.rotation],scale:[...h.transform.scale]},props:h.props}),e(p)},children:Ce.jsx("span",{className:"v3s-toolbtn__icon","aria-hidden":!0,children:Ce.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Ce.jsx("rect",{x:"5",y:"7",width:"10",height:"10",stroke:"currentColor",strokeWidth:"1.5"}),Ce.jsx("rect",{x:"9",y:"11",width:"10",height:"10",stroke:"currentColor",strokeWidth:"1.5",opacity:"0.6"})]})})}),Ce.jsx("button",{className:"v3s-toolbtn",title:"Delete (Del)","aria-label":"Delete",onClick:()=>{const f=Rt.getState().selectedId;f&&(Rt.getState().removeObject(f),e(null))},children:Ce.jsx("span",{className:"v3s-toolbtn__icon","aria-hidden":!0,children:Ce.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Ce.jsx("path",{d:"M9 3h6l1 2h4v2H4V5h4l1-2z",fill:"currentColor"}),Ce.jsx("path",{d:"M6 9h12l-1 10H7L6 9z",stroke:"currentColor",strokeWidth:"1.5"})]})})})]})}function c_(){const[s,e]=fn.useState({transform:!0,material:!1,metadata:!1}),t=h=>e(p=>({...p,[h]:!p[h]})),r=Rt(h=>h.selectedId),a=Rt(h=>r?h.objects[r]:void 0),l=Rt(h=>h.updateTransform),u=fn.useMemo(()=>a?.transform??{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},[a]),f=(h,p,v)=>{if(!a)return;const _={...u,[h]:[...u[h]]};_[h][p]=v,l(a.id,_)};return Ce.jsx("aside",{className:"v3s-properties",children:Ce.jsx(s_,{className:"v3s-properties__section",children:Ce.jsxs("div",{className:"v3s-properties__stack",children:[Ce.jsxs("button",{className:"v3s-dropdown__header",onClick:()=>t("transform"),"aria-expanded":s.transform,children:[Ce.jsx("span",{className:`v3s-dropdown__chev ${s.transform?"open":""}`,children:"▸"}),"Transform"]}),s.transform&&Ce.jsx("div",{className:"v3s-dropdown__content",children:a?Ce.jsxs("div",{className:"v3s-formgrid",children:[Ce.jsx("label",{children:"Position"}),Ce.jsxs("div",{className:"v3s-formrow",children:[Ce.jsx("input",{type:"number",step:"0.01",value:u.position[0],onChange:h=>f("position",0,parseFloat(h.target.value))}),Ce.jsx("input",{type:"number",step:"0.01",value:u.position[1],onChange:h=>f("position",1,parseFloat(h.target.value))}),Ce.jsx("input",{type:"number",step:"0.01",value:u.position[2],onChange:h=>f("position",2,parseFloat(h.target.value))})]}),Ce.jsx("label",{children:"Rotation (rad)"}),Ce.jsxs("div",{className:"v3s-formrow",children:[Ce.jsx("input",{type:"number",step:"0.01",value:u.rotation[0],onChange:h=>f("rotation",0,parseFloat(h.target.value))}),Ce.jsx("input",{type:"number",step:"0.01",value:u.rotation[1],onChange:h=>f("rotation",1,parseFloat(h.target.value))}),Ce.jsx("input",{type:"number",step:"0.01",value:u.rotation[2],onChange:h=>f("rotation",2,parseFloat(h.target.value))})]}),Ce.jsx("label",{children:"Scale"}),Ce.jsxs("div",{className:"v3s-formrow",children:[Ce.jsx("input",{type:"number",step:"0.01",value:u.scale[0],onChange:h=>f("scale",0,parseFloat(h.target.value))}),Ce.jsx("input",{type:"number",step:"0.01",value:u.scale[1],onChange:h=>f("scale",1,parseFloat(h.target.value))}),Ce.jsx("input",{type:"number",step:"0.01",value:u.scale[2],onChange:h=>f("scale",2,parseFloat(h.target.value))})]})]}):Ce.jsx("div",{style:{color:"var(--text-600)"},children:"Select an object to edit transforms."})}),Ce.jsxs("button",{className:"v3s-dropdown__header",onClick:()=>t("material"),"aria-expanded":s.material,children:[Ce.jsx("span",{className:`v3s-dropdown__chev ${s.material?"open":""}`,children:"▸"}),"Material"]}),s.material&&Ce.jsx("div",{className:"v3s-dropdown__content",children:Ce.jsx("div",{style:{color:"var(--text-600)"},children:"Base Color · Roughness · Metalness"})}),Ce.jsxs("button",{className:"v3s-dropdown__header",onClick:()=>t("metadata"),"aria-expanded":s.metadata,children:[Ce.jsx("span",{className:`v3s-dropdown__chev ${s.metadata?"open":""}`,children:"▸"}),"Metadata"]}),s.metadata&&Ce.jsx("div",{className:"v3s-dropdown__content",children:Ce.jsx("div",{style:{color:"var(--text-600)"},children:"Name · Tags · Notes"})})]})})})}const I0=fn.createContext(null);function u_({children:s}){const e=["var(--presence-blue)","var(--presence-orange)","var(--accent-100)","var(--accent-300)"],t={presenceColors:e,getPresenceColor:r=>e[r%e.length]};return Ce.jsx(I0.Provider,{value:t,children:s})}function f_(){const s=fn.useContext(I0);if(!s)throw new Error("useTheme must be used within ThemeProvider");return s}const bd="181",to={ROTATE:0,DOLLY:1,PAN:2},Js={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},d_=0,vm=1,h_=2,U0=1,p_=2,$i=3,Or=0,jn=1,Mi=2,tr=0,no=1,ym=2,Sm=3,Mm=4,m_=5,ss=100,x_=101,g_=102,__=103,v_=104,y_=200,S_=201,M_=202,E_=203,Ff=204,Of=205,w_=206,T_=207,b_=208,A_=209,C_=210,R_=211,P_=212,D_=213,L_=214,kf=0,zf=1,Bf=2,so=3,Vf=4,Hf=5,Gf=6,Wf=7,N0=0,I_=1,U_=2,Fr=0,N_=1,F_=2,O_=3,k_=4,z_=5,B_=6,V_=7,F0=300,oo=301,ao=302,Xf=303,jf=304,hc=306,Yf=1e3,Ji=1001,qf=1002,ti=1003,H_=1004,Tl=1005,di=1006,tf=1007,ls=1008,Ni=1009,O0=1010,k0=1011,ca=1012,Ad=1013,cs=1014,er=1015,uo=1016,Cd=1017,Rd=1018,ua=1020,z0=35902,B0=35899,V0=1021,H0=1022,Ei=1023,fa=1026,da=1027,G0=1028,Pd=1029,Dd=1030,Ld=1031,Id=1033,nc=33776,ic=33777,rc=33778,sc=33779,Zf=35840,Kf=35841,$f=35842,Qf=35843,Jf=36196,ed=37492,td=37496,nd=37808,id=37809,rd=37810,sd=37811,od=37812,ad=37813,ld=37814,cd=37815,ud=37816,fd=37817,dd=37818,hd=37819,pd=37820,md=37821,xd=36492,gd=36494,_d=36495,vd=36283,yd=36284,Sd=36285,Md=36286,G_=3200,W_=3201,W0=0,X_=1,Ur="",ci="srgb",lo="srgb-linear",lc="linear",Nt="srgb",ks=7680,Em=519,j_=512,Y_=513,q_=514,X0=515,Z_=516,K_=517,$_=518,Q_=519,wm=35044,Tm="300 es",Ii=2e3,cc=2001;function j0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function uc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function J_(){const s=uc("canvas");return s.style.display="block",s}const bm={};function Am(...s){const e="THREE."+s.shift();console.log(e,...s)}function ft(...s){const e="THREE."+s.shift();console.warn(e,...s)}function Qt(...s){const e="THREE."+s.shift();console.error(e,...s)}function ha(...s){const e=s.join(" ");e in bm||(bm[e]=!0,ft(...s))}function ev(s,e,t){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}class fs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,u=a.length;l<u;l++)a[l].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cm=1234567;const io=Math.PI/180,pa=180/Math.PI;function fo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(An[s&255]+An[s>>8&255]+An[s>>16&255]+An[s>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[t&63|128]+An[t>>8&255]+"-"+An[t>>16&255]+An[t>>24&255]+An[r&255]+An[r>>8&255]+An[r>>16&255]+An[r>>24&255]).toLowerCase()}function vt(s,e,t){return Math.max(e,Math.min(t,s))}function Ud(s,e){return(s%e+e)%e}function tv(s,e,t,r,a){return r+(s-e)*(a-r)/(t-e)}function nv(s,e,t){return s!==e?(t-s)/(e-s):0}function la(s,e,t){return(1-t)*s+t*e}function iv(s,e,t,r){return la(s,e,1-Math.exp(-t*r))}function rv(s,e=1){return e-Math.abs(Ud(s,e*2)-e)}function sv(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function ov(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function av(s,e){return s+Math.floor(Math.random()*(e-s+1))}function lv(s,e){return s+Math.random()*(e-s)}function cv(s){return s*(.5-Math.random())}function uv(s){s!==void 0&&(Cm=s);let e=Cm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function fv(s){return s*io}function dv(s){return s*pa}function hv(s){return(s&s-1)===0&&s!==0}function pv(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function mv(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function xv(s,e,t,r,a){const l=Math.cos,u=Math.sin,f=l(t/2),h=u(t/2),p=l((e+r)/2),v=u((e+r)/2),_=l((e-r)/2),g=u((e-r)/2),S=l((r-e)/2),E=u((r-e)/2);switch(a){case"XYX":s.set(f*v,h*_,h*g,f*p);break;case"YZY":s.set(h*g,f*v,h*_,f*p);break;case"ZXZ":s.set(h*_,h*g,f*v,f*p);break;case"XZX":s.set(f*v,h*E,h*S,f*p);break;case"YXY":s.set(h*S,f*v,h*E,f*p);break;case"ZYZ":s.set(h*E,h*S,f*v,f*p);break;default:ft("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Qs(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Nn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Y0={DEG2RAD:io,RAD2DEG:pa,generateUUID:fo,clamp:vt,euclideanModulo:Ud,mapLinear:tv,inverseLerp:nv,lerp:la,damp:iv,pingpong:rv,smoothstep:sv,smootherstep:ov,randInt:av,randFloat:lv,randFloatSpread:cv,seededRandom:uv,degToRad:fv,radToDeg:dv,isPowerOfTwo:hv,ceilPowerOfTwo:pv,floorPowerOfTwo:mv,setQuaternionFromProperEuler:xv,normalize:Nn,denormalize:Qs};class ut{constructor(e=0,t=0){ut.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(vt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*a+e.x,this.y=l*a+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Mn{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,u,f){let h=r[a+0],p=r[a+1],v=r[a+2],_=r[a+3],g=l[u+0],S=l[u+1],E=l[u+2],T=l[u+3];if(f<=0){e[t+0]=h,e[t+1]=p,e[t+2]=v,e[t+3]=_;return}if(f>=1){e[t+0]=g,e[t+1]=S,e[t+2]=E,e[t+3]=T;return}if(_!==T||h!==g||p!==S||v!==E){let y=h*g+p*S+v*E+_*T;y<0&&(g=-g,S=-S,E=-E,T=-T,y=-y);let x=1-f;if(y<.9995){const A=Math.acos(y),C=Math.sin(A);x=Math.sin(x*A)/C,f=Math.sin(f*A)/C,h=h*x+g*f,p=p*x+S*f,v=v*x+E*f,_=_*x+T*f}else{h=h*x+g*f,p=p*x+S*f,v=v*x+E*f,_=_*x+T*f;const A=1/Math.sqrt(h*h+p*p+v*v+_*_);h*=A,p*=A,v*=A,_*=A}}e[t]=h,e[t+1]=p,e[t+2]=v,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,a,l,u){const f=r[a],h=r[a+1],p=r[a+2],v=r[a+3],_=l[u],g=l[u+1],S=l[u+2],E=l[u+3];return e[t]=f*E+v*_+h*S-p*g,e[t+1]=h*E+v*g+p*_-f*S,e[t+2]=p*E+v*S+f*g-h*_,e[t+3]=v*E-f*_-h*g-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,u=e._order,f=Math.cos,h=Math.sin,p=f(r/2),v=f(a/2),_=f(l/2),g=h(r/2),S=h(a/2),E=h(l/2);switch(u){case"XYZ":this._x=g*v*_+p*S*E,this._y=p*S*_-g*v*E,this._z=p*v*E+g*S*_,this._w=p*v*_-g*S*E;break;case"YXZ":this._x=g*v*_+p*S*E,this._y=p*S*_-g*v*E,this._z=p*v*E-g*S*_,this._w=p*v*_+g*S*E;break;case"ZXY":this._x=g*v*_-p*S*E,this._y=p*S*_+g*v*E,this._z=p*v*E+g*S*_,this._w=p*v*_-g*S*E;break;case"ZYX":this._x=g*v*_-p*S*E,this._y=p*S*_+g*v*E,this._z=p*v*E-g*S*_,this._w=p*v*_+g*S*E;break;case"YZX":this._x=g*v*_+p*S*E,this._y=p*S*_+g*v*E,this._z=p*v*E-g*S*_,this._w=p*v*_-g*S*E;break;case"XZY":this._x=g*v*_-p*S*E,this._y=p*S*_-g*v*E,this._z=p*v*E+g*S*_,this._w=p*v*_+g*S*E;break;default:ft("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],u=t[1],f=t[5],h=t[9],p=t[2],v=t[6],_=t[10],g=r+f+_;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(v-h)*S,this._y=(l-p)*S,this._z=(u-a)*S}else if(r>f&&r>_){const S=2*Math.sqrt(1+r-f-_);this._w=(v-h)/S,this._x=.25*S,this._y=(a+u)/S,this._z=(l+p)/S}else if(f>_){const S=2*Math.sqrt(1+f-r-_);this._w=(l-p)/S,this._x=(a+u)/S,this._y=.25*S,this._z=(h+v)/S}else{const S=2*Math.sqrt(1+_-r-f);this._w=(u-a)/S,this._x=(l+p)/S,this._y=(h+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,u=e._w,f=t._x,h=t._y,p=t._z,v=t._w;return this._x=r*v+u*f+a*p-l*h,this._y=a*v+u*h+l*f-r*p,this._z=l*v+u*p+r*h-a*f,this._w=u*v-r*f-a*h-l*p,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let r=e._x,a=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,a=-a,l=-l,u=-u,f=-f);let h=1-t;if(f<.9995){const p=Math.acos(f),v=Math.sin(p);h=Math.sin(h*p)/v,t=Math.sin(t*p)/v,this._x=this._x*h+r*t,this._y=this._y*h+a*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this._onChangeCallback()}else this._x=this._x*h+r*t,this._y=this._y*h+a*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,r=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,u=e.y,f=e.z,h=e.w,p=2*(u*a-f*r),v=2*(f*t-l*a),_=2*(l*r-u*t);return this.x=t+h*p+u*_-f*v,this.y=r+h*v+f*p-l*_,this.z=a+h*_+l*v-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,u=t.x,f=t.y,h=t.z;return this.x=a*h-l*f,this.y=l*u-r*h,this.z=r*f-a*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return nf.copy(this).projectOnVector(e),this.sub(nf)}reflect(e){return this.sub(nf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(vt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nf=new W,Rm=new Mn;class mt{constructor(e,t,r,a,l,u,f,h,p){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,u,f,h,p)}set(e,t,r,a,l,u,f,h,p){const v=this.elements;return v[0]=e,v[1]=a,v[2]=f,v[3]=t,v[4]=l,v[5]=h,v[6]=r,v[7]=u,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,u=r[0],f=r[3],h=r[6],p=r[1],v=r[4],_=r[7],g=r[2],S=r[5],E=r[8],T=a[0],y=a[3],x=a[6],A=a[1],C=a[4],L=a[7],U=a[2],D=a[5],O=a[8];return l[0]=u*T+f*A+h*U,l[3]=u*y+f*C+h*D,l[6]=u*x+f*L+h*O,l[1]=p*T+v*A+_*U,l[4]=p*y+v*C+_*D,l[7]=p*x+v*L+_*O,l[2]=g*T+S*A+E*U,l[5]=g*y+S*C+E*D,l[8]=g*x+S*L+E*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8];return t*u*v-t*f*p-r*l*v+r*f*h+a*l*p-a*u*h}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8],_=v*u-f*p,g=f*h-v*l,S=p*l-u*h,E=t*_+r*g+a*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=_*T,e[1]=(a*p-v*r)*T,e[2]=(f*r-a*u)*T,e[3]=g*T,e[4]=(v*t-a*h)*T,e[5]=(a*l-f*t)*T,e[6]=S*T,e[7]=(r*h-p*t)*T,e[8]=(u*t-r*l)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,u,f){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*u+p*f)+u+e,-a*p,a*h,-a*(-p*u+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(rf.makeScale(e,t)),this}rotate(e){return this.premultiply(rf.makeRotation(-e)),this}translate(e,t){return this.premultiply(rf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const rf=new mt,Pm=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dm=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gv(){const s={enabled:!0,workingColorSpace:lo,spaces:{},convert:function(a,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Nt&&(a.r=nr(a.r),a.g=nr(a.g),a.b=nr(a.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Nt&&(a.r=ro(a.r),a.g=ro(a.g),a.b=ro(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Ur?lc:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,u){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return ha("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return ha("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[lo]:{primaries:e,whitePoint:r,transfer:lc,toXYZ:Pm,fromXYZ:Dm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:e,whitePoint:r,transfer:Nt,toXYZ:Pm,fromXYZ:Dm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),s}const At=gv();function nr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ro(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let zs;class _v{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{zs===void 0&&(zs=uc("canvas")),zs.width=e.width,zs.height=e.height;const a=zs.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=zs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=uc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let u=0;u<l.length;u++)l[u]=nr(l[u]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(nr(t[r]/255)*255):t[r]=nr(t[r]);return{data:t,width:e.width,height:e.height}}else return ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vv=0;class Nd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vv++}),this.uuid=fo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let u=0,f=a.length;u<f;u++)a[u].isDataTexture?l.push(sf(a[u].image)):l.push(sf(a[u]))}else l=sf(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function sf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?_v.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ft("Texture: Unable to serialize Texture."),{})}let yv=0;const of=new W;class On extends fs{constructor(e=On.DEFAULT_IMAGE,t=On.DEFAULT_MAPPING,r=Ji,a=Ji,l=di,u=ls,f=Ei,h=Ni,p=On.DEFAULT_ANISOTROPY,v=Ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yv++}),this.uuid=fo(),this.name="",this.source=new Nd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(of).x}get height(){return this.source.getSize(of).y}get depth(){return this.source.getSize(of).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){ft(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){ft(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==F0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yf:e.x=e.x-Math.floor(e.x);break;case Ji:e.x=e.x<0?0:1;break;case qf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yf:e.y=e.y-Math.floor(e.y);break;case Ji:e.y=e.y<0?0:1;break;case qf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=F0;On.DEFAULT_ANISOTROPY=1;class Jt{constructor(e=0,t=0,r=0,a=1){Jt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*a+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*a+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*a+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*a+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const h=e.elements,p=h[0],v=h[4],_=h[8],g=h[1],S=h[5],E=h[9],T=h[2],y=h[6],x=h[10];if(Math.abs(v-g)<.01&&Math.abs(_-T)<.01&&Math.abs(E-y)<.01){if(Math.abs(v+g)<.1&&Math.abs(_+T)<.1&&Math.abs(E+y)<.1&&Math.abs(p+S+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(p+1)/2,L=(S+1)/2,U=(x+1)/2,D=(v+g)/4,O=(_+T)/4,G=(E+y)/4;return C>L&&C>U?C<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(C),a=D/r,l=O/r):L>U?L<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(L),r=D/a,l=G/a):U<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(U),r=O/l,a=G/l),this.set(r,a,l,t),this}let A=Math.sqrt((y-E)*(y-E)+(_-T)*(_-T)+(g-v)*(g-v));return Math.abs(A)<.001&&(A=1),this.x=(y-E)/A,this.y=(_-T)/A,this.z=(g-v)/A,this.w=Math.acos((p+S+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this.w=vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this.w=vt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sv extends fs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new Jt(0,0,e,t),this.scissorTest=!1,this.viewport=new Jt(0,0,e,t);const a={width:e,height:t,depth:r.depth},l=new On(a);this.textures=[];const u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:di,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Nd(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class us extends Sv{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class q0 extends On{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=ti,this.minFilter=ti,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Mv extends On{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=ti,this.minFilter=ti,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xa{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,vi):vi.fromBufferAttribute(l,u),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),bl.copy(r.boundingBox)),bl.applyMatrix4(e.matrixWorld),this.union(bl)}const a=e.children;for(let l=0,u=a.length;l<u;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ko),Al.subVectors(this.max,Ko),Bs.subVectors(e.a,Ko),Vs.subVectors(e.b,Ko),Hs.subVectors(e.c,Ko),br.subVectors(Vs,Bs),Ar.subVectors(Hs,Vs),$r.subVectors(Bs,Hs);let t=[0,-br.z,br.y,0,-Ar.z,Ar.y,0,-$r.z,$r.y,br.z,0,-br.x,Ar.z,0,-Ar.x,$r.z,0,-$r.x,-br.y,br.x,0,-Ar.y,Ar.x,0,-$r.y,$r.x,0];return!af(t,Bs,Vs,Hs,Al)||(t=[1,0,0,0,1,0,0,0,1],!af(t,Bs,Vs,Hs,Al))?!1:(Cl.crossVectors(br,Ar),t=[Cl.x,Cl.y,Cl.z],af(t,Bs,Vs,Hs,Al))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Xi=[new W,new W,new W,new W,new W,new W,new W,new W],vi=new W,bl=new xa,Bs=new W,Vs=new W,Hs=new W,br=new W,Ar=new W,$r=new W,Ko=new W,Al=new W,Cl=new W,Qr=new W;function af(s,e,t,r,a){for(let l=0,u=s.length-3;l<=u;l+=3){Qr.fromArray(s,l);const f=a.x*Math.abs(Qr.x)+a.y*Math.abs(Qr.y)+a.z*Math.abs(Qr.z),h=e.dot(Qr),p=t.dot(Qr),v=r.dot(Qr);if(Math.max(-Math.max(h,p,v),Math.min(h,p,v))>f)return!1}return!0}const Ev=new xa,$o=new W,lf=new W;class pc{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Ev.setFromPoints(e).getCenter(r);let a=0;for(let l=0,u=e.length;l<u;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$o.subVectors(e,this.center);const t=$o.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector($o,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($o.copy(e.center).add(lf)),this.expandByPoint($o.copy(e.center).sub(lf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ji=new W,cf=new W,Rl=new W,Cr=new W,uf=new W,Pl=new W,ff=new W;class mc{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ji.copy(this.origin).addScaledVector(this.direction,t),ji.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){cf.copy(e).add(t).multiplyScalar(.5),Rl.copy(t).sub(e).normalize(),Cr.copy(this.origin).sub(cf);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Rl),f=Cr.dot(this.direction),h=-Cr.dot(Rl),p=Cr.lengthSq(),v=Math.abs(1-u*u);let _,g,S,E;if(v>0)if(_=u*h-f,g=u*f-h,E=l*v,_>=0)if(g>=-E)if(g<=E){const T=1/v;_*=T,g*=T,S=_*(_+u*g+2*f)+g*(u*_+g+2*h)+p}else g=l,_=Math.max(0,-(u*g+f)),S=-_*_+g*(g+2*h)+p;else g=-l,_=Math.max(0,-(u*g+f)),S=-_*_+g*(g+2*h)+p;else g<=-E?(_=Math.max(0,-(-u*l+f)),g=_>0?-l:Math.min(Math.max(-l,-h),l),S=-_*_+g*(g+2*h)+p):g<=E?(_=0,g=Math.min(Math.max(-l,-h),l),S=g*(g+2*h)+p):(_=Math.max(0,-(u*l+f)),g=_>0?l:Math.min(Math.max(-l,-h),l),S=-_*_+g*(g+2*h)+p);else g=u>0?-l:l,_=Math.max(0,-(u*g+f)),S=-_*_+g*(g+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(cf).addScaledVector(Rl,g),S}intersectSphere(e,t){ji.subVectors(e.center,this.origin);const r=ji.dot(this.direction),a=ji.dot(ji)-r*r,l=e.radius*e.radius;if(a>l)return null;const u=Math.sqrt(l-a),f=r-u,h=r+u;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,u,f,h;const p=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,g=this.origin;return p>=0?(r=(e.min.x-g.x)*p,a=(e.max.x-g.x)*p):(r=(e.max.x-g.x)*p,a=(e.min.x-g.x)*p),v>=0?(l=(e.min.y-g.y)*v,u=(e.max.y-g.y)*v):(l=(e.max.y-g.y)*v,u=(e.min.y-g.y)*v),r>u||l>a||((l>r||isNaN(r))&&(r=l),(u<a||isNaN(a))&&(a=u),_>=0?(f=(e.min.z-g.z)*_,h=(e.max.z-g.z)*_):(f=(e.max.z-g.z)*_,h=(e.min.z-g.z)*_),r>h||f>a)||((f>r||r!==r)&&(r=f),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,ji)!==null}intersectTriangle(e,t,r,a,l){uf.subVectors(t,e),Pl.subVectors(r,e),ff.crossVectors(uf,Pl);let u=this.direction.dot(ff),f;if(u>0){if(a)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Cr.subVectors(this.origin,e);const h=f*this.direction.dot(Pl.crossVectors(Cr,Pl));if(h<0)return null;const p=f*this.direction.dot(uf.cross(Cr));if(p<0||h+p>u)return null;const v=-f*Cr.dot(ff);return v<0?null:this.at(v/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(e,t,r,a,l,u,f,h,p,v,_,g,S,E,T,y){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,u,f,h,p,v,_,g,S,E,T,y)}set(e,t,r,a,l,u,f,h,p,v,_,g,S,E,T,y){const x=this.elements;return x[0]=e,x[4]=t,x[8]=r,x[12]=a,x[1]=l,x[5]=u,x[9]=f,x[13]=h,x[2]=p,x[6]=v,x[10]=_,x[14]=g,x[3]=S,x[7]=E,x[11]=T,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,a=1/Gs.setFromMatrixColumn(e,0).length(),l=1/Gs.setFromMatrixColumn(e,1).length(),u=1/Gs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),h=Math.cos(a),p=Math.sin(a),v=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const g=u*v,S=u*_,E=f*v,T=f*_;t[0]=h*v,t[4]=-h*_,t[8]=p,t[1]=S+E*p,t[5]=g-T*p,t[9]=-f*h,t[2]=T-g*p,t[6]=E+S*p,t[10]=u*h}else if(e.order==="YXZ"){const g=h*v,S=h*_,E=p*v,T=p*_;t[0]=g+T*f,t[4]=E*f-S,t[8]=u*p,t[1]=u*_,t[5]=u*v,t[9]=-f,t[2]=S*f-E,t[6]=T+g*f,t[10]=u*h}else if(e.order==="ZXY"){const g=h*v,S=h*_,E=p*v,T=p*_;t[0]=g-T*f,t[4]=-u*_,t[8]=E+S*f,t[1]=S+E*f,t[5]=u*v,t[9]=T-g*f,t[2]=-u*p,t[6]=f,t[10]=u*h}else if(e.order==="ZYX"){const g=u*v,S=u*_,E=f*v,T=f*_;t[0]=h*v,t[4]=E*p-S,t[8]=g*p+T,t[1]=h*_,t[5]=T*p+g,t[9]=S*p-E,t[2]=-p,t[6]=f*h,t[10]=u*h}else if(e.order==="YZX"){const g=u*h,S=u*p,E=f*h,T=f*p;t[0]=h*v,t[4]=T-g*_,t[8]=E*_+S,t[1]=_,t[5]=u*v,t[9]=-f*v,t[2]=-p*v,t[6]=S*_+E,t[10]=g-T*_}else if(e.order==="XZY"){const g=u*h,S=u*p,E=f*h,T=f*p;t[0]=h*v,t[4]=-_,t[8]=p*v,t[1]=g*_+T,t[5]=u*v,t[9]=S*_-E,t[2]=E*_-S,t[6]=f*v,t[10]=T*_+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wv,e,Tv)}lookAt(e,t,r){const a=this.elements;return Jn.subVectors(e,t),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Rr.crossVectors(r,Jn),Rr.lengthSq()===0&&(Math.abs(r.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Rr.crossVectors(r,Jn)),Rr.normalize(),Dl.crossVectors(Jn,Rr),a[0]=Rr.x,a[4]=Dl.x,a[8]=Jn.x,a[1]=Rr.y,a[5]=Dl.y,a[9]=Jn.y,a[2]=Rr.z,a[6]=Dl.z,a[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,u=r[0],f=r[4],h=r[8],p=r[12],v=r[1],_=r[5],g=r[9],S=r[13],E=r[2],T=r[6],y=r[10],x=r[14],A=r[3],C=r[7],L=r[11],U=r[15],D=a[0],O=a[4],G=a[8],P=a[12],b=a[1],z=a[5],j=a[9],te=a[13],oe=a[2],re=a[6],ue=a[10],fe=a[14],H=a[3],ne=a[7],I=a[11],K=a[15];return l[0]=u*D+f*b+h*oe+p*H,l[4]=u*O+f*z+h*re+p*ne,l[8]=u*G+f*j+h*ue+p*I,l[12]=u*P+f*te+h*fe+p*K,l[1]=v*D+_*b+g*oe+S*H,l[5]=v*O+_*z+g*re+S*ne,l[9]=v*G+_*j+g*ue+S*I,l[13]=v*P+_*te+g*fe+S*K,l[2]=E*D+T*b+y*oe+x*H,l[6]=E*O+T*z+y*re+x*ne,l[10]=E*G+T*j+y*ue+x*I,l[14]=E*P+T*te+y*fe+x*K,l[3]=A*D+C*b+L*oe+U*H,l[7]=A*O+C*z+L*re+U*ne,l[11]=A*G+C*j+L*ue+U*I,l[15]=A*P+C*te+L*fe+U*K,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],u=e[1],f=e[5],h=e[9],p=e[13],v=e[2],_=e[6],g=e[10],S=e[14],E=e[3],T=e[7],y=e[11],x=e[15];return E*(+l*h*_-a*p*_-l*f*g+r*p*g+a*f*S-r*h*S)+T*(+t*h*S-t*p*g+l*u*g-a*u*S+a*p*v-l*h*v)+y*(+t*p*_-t*f*S-l*u*_+r*u*S+l*f*v-r*p*v)+x*(-a*f*v-t*h*_+t*f*g+a*u*_-r*u*g+r*h*v)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8],_=e[9],g=e[10],S=e[11],E=e[12],T=e[13],y=e[14],x=e[15],A=_*y*p-T*g*p+T*h*S-f*y*S-_*h*x+f*g*x,C=E*g*p-v*y*p-E*h*S+u*y*S+v*h*x-u*g*x,L=v*T*p-E*_*p+E*f*S-u*T*S-v*f*x+u*_*x,U=E*_*h-v*T*h-E*f*g+u*T*g+v*f*y-u*_*y,D=t*A+r*C+a*L+l*U;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/D;return e[0]=A*O,e[1]=(T*g*l-_*y*l-T*a*S+r*y*S+_*a*x-r*g*x)*O,e[2]=(f*y*l-T*h*l+T*a*p-r*y*p-f*a*x+r*h*x)*O,e[3]=(_*h*l-f*g*l-_*a*p+r*g*p+f*a*S-r*h*S)*O,e[4]=C*O,e[5]=(v*y*l-E*g*l+E*a*S-t*y*S-v*a*x+t*g*x)*O,e[6]=(E*h*l-u*y*l-E*a*p+t*y*p+u*a*x-t*h*x)*O,e[7]=(u*g*l-v*h*l+v*a*p-t*g*p-u*a*S+t*h*S)*O,e[8]=L*O,e[9]=(E*_*l-v*T*l-E*r*S+t*T*S+v*r*x-t*_*x)*O,e[10]=(u*T*l-E*f*l+E*r*p-t*T*p-u*r*x+t*f*x)*O,e[11]=(v*f*l-u*_*l-v*r*p+t*_*p+u*r*S-t*f*S)*O,e[12]=U*O,e[13]=(v*T*a-E*_*a+E*r*g-t*T*g-v*r*y+t*_*y)*O,e[14]=(E*f*a-u*T*a-E*r*h+t*T*h+u*r*y-t*f*y)*O,e[15]=(u*_*a-v*f*a+v*r*h-t*_*h-u*r*g+t*f*g)*O,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,u=e.x,f=e.y,h=e.z,p=l*u,v=l*f;return this.set(p*u+r,p*f-a*h,p*h+a*f,0,p*f+a*h,v*f+r,v*h-a*u,0,p*h-a*f,v*h+a*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,u){return this.set(1,r,l,0,e,1,u,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,u=t._y,f=t._z,h=t._w,p=l+l,v=u+u,_=f+f,g=l*p,S=l*v,E=l*_,T=u*v,y=u*_,x=f*_,A=h*p,C=h*v,L=h*_,U=r.x,D=r.y,O=r.z;return a[0]=(1-(T+x))*U,a[1]=(S+L)*U,a[2]=(E-C)*U,a[3]=0,a[4]=(S-L)*D,a[5]=(1-(g+x))*D,a[6]=(y+A)*D,a[7]=0,a[8]=(E+C)*O,a[9]=(y-A)*O,a[10]=(1-(g+T))*O,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;let l=Gs.set(a[0],a[1],a[2]).length();const u=Gs.set(a[4],a[5],a[6]).length(),f=Gs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],yi.copy(this);const p=1/l,v=1/u,_=1/f;return yi.elements[0]*=p,yi.elements[1]*=p,yi.elements[2]*=p,yi.elements[4]*=v,yi.elements[5]*=v,yi.elements[6]*=v,yi.elements[8]*=_,yi.elements[9]*=_,yi.elements[10]*=_,t.setFromRotationMatrix(yi),r.x=l,r.y=u,r.z=f,this}makePerspective(e,t,r,a,l,u,f=Ii,h=!1){const p=this.elements,v=2*l/(t-e),_=2*l/(r-a),g=(t+e)/(t-e),S=(r+a)/(r-a);let E,T;if(h)E=l/(u-l),T=u*l/(u-l);else if(f===Ii)E=-(u+l)/(u-l),T=-2*u*l/(u-l);else if(f===cc)E=-u/(u-l),T=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=_,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,a,l,u,f=Ii,h=!1){const p=this.elements,v=2/(t-e),_=2/(r-a),g=-(t+e)/(t-e),S=-(r+a)/(r-a);let E,T;if(h)E=1/(u-l),T=u/(u-l);else if(f===Ii)E=-2/(u-l),T=-(u+l)/(u-l);else if(f===cc)E=-1/(u-l),T=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=_,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Gs=new W,yi=new Ht,wv=new W(0,0,0),Tv=new W(1,1,1),Rr=new W,Dl=new W,Jn=new W,Lm=new Ht,Im=new Mn;class wi{constructor(e=0,t=0,r=0,a=wi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],u=a[4],f=a[8],h=a[1],p=a[5],v=a[9],_=a[2],g=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(vt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-vt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-v,S),this._y=0);break;default:ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Lm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Im.setFromEuler(this),this.setFromQuaternion(Im,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wi.DEFAULT_ORDER="XYZ";class Fd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bv=0;const Um=new W,Ws=new Mn,Yi=new Ht,Ll=new W,Qo=new W,Av=new W,Cv=new Mn,Nm=new W(1,0,0),Fm=new W(0,1,0),Om=new W(0,0,1),km={type:"added"},Rv={type:"removed"},Xs={type:"childadded",child:null},df={type:"childremoved",child:null};class on extends fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bv++}),this.uuid=fo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=on.DEFAULT_UP.clone();const e=new W,t=new wi,r=new Mn,a=new W(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ht},normalMatrix:{value:new mt}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=on.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.premultiply(Ws),this}rotateX(e){return this.rotateOnAxis(Nm,e)}rotateY(e){return this.rotateOnAxis(Fm,e)}rotateZ(e){return this.rotateOnAxis(Om,e)}translateOnAxis(e,t){return Um.copy(e).applyQuaternion(this.quaternion),this.position.add(Um.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nm,e)}translateY(e){return this.translateOnAxis(Fm,e)}translateZ(e){return this.translateOnAxis(Om,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Ll.copy(e):Ll.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(Qo,Ll,this.up):Yi.lookAt(Ll,Qo,this.up),this.quaternion.setFromRotationMatrix(Yi),a&&(Yi.extractRotation(a.matrixWorld),Ws.setFromRotationMatrix(Yi),this.quaternion.premultiply(Ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Qt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(km),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null):Qt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rv),df.child=e,this.dispatchEvent(df),df.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(km),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,e,Av),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,Cv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(f=>({...f})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,v=h.length;p<v;p++){const _=h[p];l(e.shapes,_)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];a.animations.push(l(e.animations,h))}}if(t){const f=u(e.geometries),h=u(e.materials),p=u(e.textures),v=u(e.images),_=u(e.shapes),g=u(e.skeletons),S=u(e.animations),E=u(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),g.length>0&&(r.skeletons=g),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=a,r;function u(f){const h=[];for(const p in f){const v=f[p];delete v.metadata,h.push(v)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}on.DEFAULT_UP=new W(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new W,qi=new W,hf=new W,Zi=new W,js=new W,Ys=new W,zm=new W,pf=new W,mf=new W,xf=new W,gf=new Jt,_f=new Jt,vf=new Jt;class fi{constructor(e=new W,t=new W,r=new W){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),Si.subVectors(e,t),a.cross(Si);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){Si.subVectors(a,t),qi.subVectors(r,t),hf.subVectors(e,t);const u=Si.dot(Si),f=Si.dot(qi),h=Si.dot(hf),p=qi.dot(qi),v=qi.dot(hf),_=u*p-f*f;if(_===0)return l.set(0,0,0),null;const g=1/_,S=(p*h-f*v)*g,E=(u*v-f*h)*g;return l.set(1-S-E,E,S)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(e,t,r,a,l,u,f,h){return this.getBarycoord(e,t,r,a,Zi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Zi.x),h.addScaledVector(u,Zi.y),h.addScaledVector(f,Zi.z),h)}static getInterpolatedAttribute(e,t,r,a,l,u){return gf.setScalar(0),_f.setScalar(0),vf.setScalar(0),gf.fromBufferAttribute(e,t),_f.fromBufferAttribute(e,r),vf.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(gf,l.x),u.addScaledVector(_f,l.y),u.addScaledVector(vf,l.z),u}static isFrontFacing(e,t,r,a){return Si.subVectors(r,t),qi.subVectors(e,t),Si.cross(qi).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),Si.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return fi.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let u,f;js.subVectors(a,r),Ys.subVectors(l,r),pf.subVectors(e,r);const h=js.dot(pf),p=Ys.dot(pf);if(h<=0&&p<=0)return t.copy(r);mf.subVectors(e,a);const v=js.dot(mf),_=Ys.dot(mf);if(v>=0&&_<=v)return t.copy(a);const g=h*_-v*p;if(g<=0&&h>=0&&v<=0)return u=h/(h-v),t.copy(r).addScaledVector(js,u);xf.subVectors(e,l);const S=js.dot(xf),E=Ys.dot(xf);if(E>=0&&S<=E)return t.copy(l);const T=S*p-h*E;if(T<=0&&p>=0&&E<=0)return f=p/(p-E),t.copy(r).addScaledVector(Ys,f);const y=v*E-S*_;if(y<=0&&_-v>=0&&S-E>=0)return zm.subVectors(l,a),f=(_-v)/(_-v+(S-E)),t.copy(a).addScaledVector(zm,f);const x=1/(y+T+g);return u=T*x,f=g*x,t.copy(r).addScaledVector(js,u).addScaledVector(Ys,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Z0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pr={h:0,s:0,l:0},Il={h:0,s:0,l:0};function yf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Mt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,t),this}setRGB(e,t,r,a=At.workingColorSpace){return this.r=e,this.g=t,this.b=r,At.colorSpaceToWorking(this,a),this}setHSL(e,t,r,a=At.workingColorSpace){if(e=Ud(e,1),t=vt(t,0,1),r=vt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=yf(u,l,e+1/3),this.g=yf(u,l,e),this.b=yf(u,l,e-1/3)}return At.colorSpaceToWorking(this,a),this}setStyle(e,t=ci){function r(l){l!==void 0&&parseFloat(l)<1&&ft("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=a[1],f=a[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:ft("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);ft("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ci){const r=Z0[e.toLowerCase()];return r!==void 0?this.setHex(r,t):ft("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}copyLinearToSRGB(e){return this.r=ro(e.r),this.g=ro(e.g),this.b=ro(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ci){return At.workingToColorSpace(Cn.copy(this),e),Math.round(vt(Cn.r*255,0,255))*65536+Math.round(vt(Cn.g*255,0,255))*256+Math.round(vt(Cn.b*255,0,255))}getHexString(e=ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.workingToColorSpace(Cn.copy(this),t);const r=Cn.r,a=Cn.g,l=Cn.b,u=Math.max(r,a,l),f=Math.min(r,a,l);let h,p;const v=(f+u)/2;if(f===u)h=0,p=0;else{const _=u-f;switch(p=v<=.5?_/(u+f):_/(2-u-f),u){case r:h=(a-l)/_+(a<l?6:0);break;case a:h=(l-r)/_+2;break;case l:h=(r-a)/_+4;break}h/=6}return e.h=h,e.s=p,e.l=v,e}getRGB(e,t=At.workingColorSpace){return At.workingToColorSpace(Cn.copy(this),t),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=ci){At.workingToColorSpace(Cn.copy(this),e);const t=Cn.r,r=Cn.g,a=Cn.b;return e!==ci?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(Pr),this.setHSL(Pr.h+e,Pr.s+t,Pr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Pr),e.getHSL(Il);const r=la(Pr.h,Il.h,t),a=la(Pr.s,Il.s,t),l=la(Pr.l,Il.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new Mt;Mt.NAMES=Z0;let Pv=0;class ho extends fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pv++}),this.uuid=fo(),this.name="",this.type="Material",this.blending=no,this.side=Or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ff,this.blendDst=Of,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=so,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Em,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){ft(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){ft(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==no&&(r.blending=this.blending),this.side!==Or&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ff&&(r.blendSrc=this.blendSrc),this.blendDst!==Of&&(r.blendDst=this.blendDst),this.blendEquation!==ss&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==so&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Em&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ks&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ks&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ks&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}if(t){const l=a(e.textures),u=a(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class xc extends ho{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=N0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sn=new W,Ul=new ut;let Dv=0;class Ui{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Dv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=wm,this.updateRanges=[],this.gpuType=er,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Ul.fromBufferAttribute(this,t),Ul.applyMatrix3(e),this.setXY(t,Ul.x,Ul.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Qs(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Nn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),r=Nn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),r=Nn(r,this.array),a=Nn(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),r=Nn(r,this.array),a=Nn(a,this.array),l=Nn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wm&&(e.usage=this.usage),e}}class K0 extends Ui{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class $0 extends Ui{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Yt extends Ui{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Lv=0;const li=new Ht,Sf=new on,qs=new W,ei=new xa,Jo=new xa,gn=new W;class Dn extends fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lv++}),this.uuid=fo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(j0(e)?$0:K0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new mt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,t,r){return li.makeTranslation(e,t,r),this.applyMatrix4(li),this}scale(e,t,r){return li.makeScale(e,t,r),this.applyMatrix4(li),this}lookAt(e){return Sf.lookAt(e),Sf.updateMatrix(),this.applyMatrix4(Sf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Yt(r,3))}else{const r=Math.min(e.length,t.count);for(let a=0;a<r;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];ei.setFromBufferAttribute(l),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const r=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];Jo.setFromBufferAttribute(f),this.morphTargetsRelative?(gn.addVectors(ei.min,Jo.min),ei.expandByPoint(gn),gn.addVectors(ei.max,Jo.max),ei.expandByPoint(gn)):(ei.expandByPoint(Jo.min),ei.expandByPoint(Jo.max))}ei.getCenter(r);let a=0;for(let l=0,u=e.count;l<u;l++)gn.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(gn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,v=f.count;p<v;p++)gn.fromBufferAttribute(f,p),h&&(qs.fromBufferAttribute(e,p),gn.add(qs)),a=Math.max(a,r.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ui(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],h=[];for(let G=0;G<r.count;G++)f[G]=new W,h[G]=new W;const p=new W,v=new W,_=new W,g=new ut,S=new ut,E=new ut,T=new W,y=new W;function x(G,P,b){p.fromBufferAttribute(r,G),v.fromBufferAttribute(r,P),_.fromBufferAttribute(r,b),g.fromBufferAttribute(l,G),S.fromBufferAttribute(l,P),E.fromBufferAttribute(l,b),v.sub(p),_.sub(p),S.sub(g),E.sub(g);const z=1/(S.x*E.y-E.x*S.y);isFinite(z)&&(T.copy(v).multiplyScalar(E.y).addScaledVector(_,-S.y).multiplyScalar(z),y.copy(_).multiplyScalar(S.x).addScaledVector(v,-E.x).multiplyScalar(z),f[G].add(T),f[P].add(T),f[b].add(T),h[G].add(y),h[P].add(y),h[b].add(y))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let G=0,P=A.length;G<P;++G){const b=A[G],z=b.start,j=b.count;for(let te=z,oe=z+j;te<oe;te+=3)x(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const C=new W,L=new W,U=new W,D=new W;function O(G){U.fromBufferAttribute(a,G),D.copy(U);const P=f[G];C.copy(P),C.sub(U.multiplyScalar(U.dot(P))).normalize(),L.crossVectors(D,P);const z=L.dot(h[G])<0?-1:1;u.setXYZW(G,C.x,C.y,C.z,z)}for(let G=0,P=A.length;G<P;++G){const b=A[G],z=b.start,j=b.count;for(let te=z,oe=z+j;te<oe;te+=3)O(e.getX(te+0)),O(e.getX(te+1)),O(e.getX(te+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ui(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,S=r.count;g<S;g++)r.setXYZ(g,0,0,0);const a=new W,l=new W,u=new W,f=new W,h=new W,p=new W,v=new W,_=new W;if(e)for(let g=0,S=e.count;g<S;g+=3){const E=e.getX(g+0),T=e.getX(g+1),y=e.getX(g+2);a.fromBufferAttribute(t,E),l.fromBufferAttribute(t,T),u.fromBufferAttribute(t,y),v.subVectors(u,l),_.subVectors(a,l),v.cross(_),f.fromBufferAttribute(r,E),h.fromBufferAttribute(r,T),p.fromBufferAttribute(r,y),f.add(v),h.add(v),p.add(v),r.setXYZ(E,f.x,f.y,f.z),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let g=0,S=t.count;g<S;g+=3)a.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),v.subVectors(u,l),_.subVectors(a,l),v.cross(_),r.setXYZ(g+0,v.x,v.y,v.z),r.setXYZ(g+1,v.x,v.y,v.z),r.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(f,h){const p=f.array,v=f.itemSize,_=f.normalized,g=new p.constructor(h.length*v);let S=0,E=0;for(let T=0,y=h.length;T<y;T++){f.isInterleavedBufferAttribute?S=h[T]*f.data.stride+f.offset:S=h[T]*v;for(let x=0;x<v;x++)g[E++]=p[S++]}return new Ui(g,v,_)}if(this.index===null)return ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dn,r=this.index.array,a=this.attributes;for(const f in a){const h=a[f],p=e(h,r);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let v=0,_=p.length;v<_;v++){const g=p[v],S=e(g,r);h.push(S)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const p=u[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],v=[];for(let _=0,g=p.length;_<g;_++){const S=p[_];v.push(S.toJSON(e.data))}v.length>0&&(a[h]=v,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const p in a){const v=a[p];this.setAttribute(p,v.clone(t))}const l=e.morphAttributes;for(const p in l){const v=[],_=l[p];for(let g=0,S=_.length;g<S;g++)v.push(_[g].clone(t));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,v=u.length;p<v;p++){const _=u[p];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bm=new Ht,Jr=new mc,Nl=new pc,Vm=new W,Fl=new W,Ol=new W,kl=new W,Mf=new W,zl=new W,Hm=new W,Bl=new W;class Ie extends on{constructor(e=new Dn,t=new xc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){zl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const v=f[h],_=l[h];v!==0&&(Mf.fromBufferAttribute(_,e),u?zl.addScaledVector(Mf,v):zl.addScaledVector(Mf.sub(t),v))}t.add(zl)}return t}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Nl.copy(r.boundingSphere),Nl.applyMatrix4(l),Jr.copy(e.ray).recast(e.near),!(Nl.containsPoint(Jr.origin)===!1&&(Jr.intersectSphere(Nl,Vm)===null||Jr.origin.distanceToSquared(Vm)>(e.far-e.near)**2))&&(Bm.copy(l).invert(),Jr.copy(e.ray).applyMatrix4(Bm),!(r.boundingBox!==null&&Jr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Jr)))}_computeIntersections(e,t,r){let a;const l=this.geometry,u=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,v=l.attributes.uv1,_=l.attributes.normal,g=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(u))for(let E=0,T=g.length;E<T;E++){const y=g[E],x=u[y.materialIndex],A=Math.max(y.start,S.start),C=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let L=A,U=C;L<U;L+=3){const D=f.getX(L),O=f.getX(L+1),G=f.getX(L+2);a=Vl(this,x,e,r,p,v,_,D,O,G),a&&(a.faceIndex=Math.floor(L/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),T=Math.min(f.count,S.start+S.count);for(let y=E,x=T;y<x;y+=3){const A=f.getX(y),C=f.getX(y+1),L=f.getX(y+2);a=Vl(this,u,e,r,p,v,_,A,C,L),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(u))for(let E=0,T=g.length;E<T;E++){const y=g[E],x=u[y.materialIndex],A=Math.max(y.start,S.start),C=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let L=A,U=C;L<U;L+=3){const D=L,O=L+1,G=L+2;a=Vl(this,x,e,r,p,v,_,D,O,G),a&&(a.faceIndex=Math.floor(L/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),T=Math.min(h.count,S.start+S.count);for(let y=E,x=T;y<x;y+=3){const A=y,C=y+1,L=y+2;a=Vl(this,u,e,r,p,v,_,A,C,L),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function Iv(s,e,t,r,a,l,u,f){let h;if(e.side===jn?h=r.intersectTriangle(u,l,a,!0,f):h=r.intersectTriangle(a,l,u,e.side===Or,f),h===null)return null;Bl.copy(f),Bl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Bl);return p<t.near||p>t.far?null:{distance:p,point:Bl.clone(),object:s}}function Vl(s,e,t,r,a,l,u,f,h,p){s.getVertexPosition(f,Fl),s.getVertexPosition(h,Ol),s.getVertexPosition(p,kl);const v=Iv(s,e,t,r,Fl,Ol,kl,Hm);if(v){const _=new W;fi.getBarycoord(Hm,Fl,Ol,kl,_),a&&(v.uv=fi.getInterpolatedAttribute(a,f,h,p,_,new ut)),l&&(v.uv1=fi.getInterpolatedAttribute(l,f,h,p,_,new ut)),u&&(v.normal=fi.getInterpolatedAttribute(u,f,h,p,_,new W),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const g={a:f,b:h,c:p,normal:new W,materialIndex:0};fi.getNormal(Fl,Ol,kl,g.normal),v.face=g,v.barycoord=_}return v}class $t extends Dn{constructor(e=1,t=1,r=1,a=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:u};const f=this;a=Math.floor(a),l=Math.floor(l),u=Math.floor(u);const h=[],p=[],v=[],_=[];let g=0,S=0;E("z","y","x",-1,-1,r,t,e,u,l,0),E("z","y","x",1,-1,r,t,-e,u,l,1),E("x","z","y",1,1,e,r,t,a,u,2),E("x","z","y",1,-1,e,r,-t,a,u,3),E("x","y","z",1,-1,e,t,r,a,l,4),E("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(h),this.setAttribute("position",new Yt(p,3)),this.setAttribute("normal",new Yt(v,3)),this.setAttribute("uv",new Yt(_,2));function E(T,y,x,A,C,L,U,D,O,G,P){const b=L/O,z=U/G,j=L/2,te=U/2,oe=D/2,re=O+1,ue=G+1;let fe=0,H=0;const ne=new W;for(let I=0;I<ue;I++){const K=I*z-te;for(let _e=0;_e<re;_e++){const Fe=_e*b-j;ne[T]=Fe*A,ne[y]=K*C,ne[x]=oe,p.push(ne.x,ne.y,ne.z),ne[T]=0,ne[y]=0,ne[x]=D>0?1:-1,v.push(ne.x,ne.y,ne.z),_.push(_e/O),_.push(1-I/G),fe+=1}}for(let I=0;I<G;I++)for(let K=0;K<O;K++){const _e=g+K+re*I,Fe=g+K+re*(I+1),le=g+(K+1)+re*(I+1),Ee=g+(K+1)+re*I;h.push(_e,Fe,Ee),h.push(Fe,le,Ee),H+=6}f.addGroup(S,H,P),S+=H,g+=fe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function co(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone():Array.isArray(a)?e[t][r]=a.slice():e[t][r]=a}}return e}function Fn(s){const e={};for(let t=0;t<s.length;t++){const r=co(s[t]);for(const a in r)e[a]=r[a]}return e}function Uv(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Q0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const Nv={clone:co,merge:Fn};var Fv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ov=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fi extends ho{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fv,this.fragmentShader=Ov,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=co(e.uniforms),this.uniformsGroups=Uv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?t.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[a]={type:"m4",value:u.toArray()}:t.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class J0 extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Dr=new W,Gm=new ut,Wm=new ut;class ui extends J0{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=pa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(io*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pa*2*Math.atan(Math.tan(io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z),Dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z)}getViewSize(e,t){return this.getViewBounds(e,Gm,Wm),t.subVectors(Wm,Gm)}setViewOffset(e,t,r,a,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(io*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;l+=u.offsetX*a/h,t-=u.offsetY*r/p,a*=u.width/h,r*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Zs=-90,Ks=1;class kv extends on{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ui(Zs,Ks,e,t);a.layers=this.layers,this.add(a);const l=new ui(Zs,Ks,e,t);l.layers=this.layers,this.add(l);const u=new ui(Zs,Ks,e,t);u.layers=this.layers,this.add(u);const f=new ui(Zs,Ks,e,t);f.layers=this.layers,this.add(f);const h=new ui(Zs,Ks,e,t);h.layers=this.layers,this.add(h);const p=new ui(Zs,Ks,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,u,f,h]=t;for(const p of t)this.remove(p);if(e===Ii)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===cc)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,h,p,v]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(t,l),e.setRenderTarget(r,1,a),e.render(t,u),e.setRenderTarget(r,2,a),e.render(t,f),e.setRenderTarget(r,3,a),e.render(t,h),e.setRenderTarget(r,4,a),e.render(t,p),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,a),e.render(t,v),e.setRenderTarget(_,g,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class ex extends On{constructor(e=[],t=oo,r,a,l,u,f,h,p,v){super(e,t,r,a,l,u,f,h,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zv extends us{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new ex(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new $t(5,5,5),l=new Fi({name:"CubemapFromEquirect",uniforms:co(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:jn,blending:tr});l.uniforms.tEquirect.value=t;const u=new Ie(a,l),f=t.minFilter;return t.minFilter===ls&&(t.minFilter=di),new kv(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,a=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,a);e.setRenderTarget(l)}}class Hl extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bv={type:"move"};class Ef{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,u=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const T of e.hand.values()){const y=t.getJointPose(T,r),x=this._getHandJoint(p,T);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const v=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],g=v.position.distanceTo(_.position),S=.02,E=.005;p.inputState.pinching&&g>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Bv)))}return f!==null&&(f.visible=a!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Hl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class Vv extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Hv extends On{constructor(e=null,t=1,r=1,a,l,u,f,h,p=ti,v=ti,_,g){super(null,u,f,h,p,v,a,l,_,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wf=new W,Gv=new W,Wv=new mt;class Ir{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=wf.subVectors(r,t).cross(Gv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(wf),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Wv.getNormalMatrix(e),a=this.coplanarPoint(wf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const es=new pc,Xv=new ut(.5,.5),Gl=new W;class Od{constructor(e=new Ir,t=new Ir,r=new Ir,a=new Ir,l=new Ir,u=new Ir){this.planes=[e,t,r,a,l,u]}set(e,t,r,a,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(a),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Ii,r=!1){const a=this.planes,l=e.elements,u=l[0],f=l[1],h=l[2],p=l[3],v=l[4],_=l[5],g=l[6],S=l[7],E=l[8],T=l[9],y=l[10],x=l[11],A=l[12],C=l[13],L=l[14],U=l[15];if(a[0].setComponents(p-u,S-v,x-E,U-A).normalize(),a[1].setComponents(p+u,S+v,x+E,U+A).normalize(),a[2].setComponents(p+f,S+_,x+T,U+C).normalize(),a[3].setComponents(p-f,S-_,x-T,U-C).normalize(),r)a[4].setComponents(h,g,y,L).normalize(),a[5].setComponents(p-h,S-g,x-y,U-L).normalize();else if(a[4].setComponents(p-h,S-g,x-y,U-L).normalize(),t===Ii)a[5].setComponents(p+h,S+g,x+y,U+L).normalize();else if(t===cc)a[5].setComponents(h,g,y,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(e){es.center.set(0,0,0);const t=Xv.distanceTo(e.center);return es.radius=.7071067811865476+t,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(Gl.x=a.normal.x>0?e.max.x:e.min.x,Gl.y=a.normal.y>0?e.max.y:e.min.y,Gl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Gl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class kd extends ho{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fc=new W,dc=new W,Xm=new Ht,ea=new mc,Wl=new pc,Tf=new W,jm=new W;class Qi extends on{constructor(e=new Dn,t=new kd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let a=1,l=t.count;a<l;a++)fc.fromBufferAttribute(t,a-1),dc.fromBufferAttribute(t,a),r[a]=r[a-1],r[a]+=fc.distanceTo(dc);e.setAttribute("lineDistance",new Yt(r,1))}else ft("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Wl.copy(r.boundingSphere),Wl.applyMatrix4(a),Wl.radius+=l,e.ray.intersectsSphere(Wl)===!1)return;Xm.copy(a).invert(),ea.copy(e.ray).applyMatrix4(Xm);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,p=this.isLineSegments?2:1,v=r.index,g=r.attributes.position;if(v!==null){const S=Math.max(0,u.start),E=Math.min(v.count,u.start+u.count);for(let T=S,y=E-1;T<y;T+=p){const x=v.getX(T),A=v.getX(T+1),C=Xl(this,e,ea,h,x,A,T);C&&t.push(C)}if(this.isLineLoop){const T=v.getX(E-1),y=v.getX(S),x=Xl(this,e,ea,h,T,y,E-1);x&&t.push(x)}}else{const S=Math.max(0,u.start),E=Math.min(g.count,u.start+u.count);for(let T=S,y=E-1;T<y;T+=p){const x=Xl(this,e,ea,h,T,T+1,T);x&&t.push(x)}if(this.isLineLoop){const T=Xl(this,e,ea,h,E-1,S,E-1);T&&t.push(T)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Xl(s,e,t,r,a,l,u){const f=s.geometry.attributes.position;if(fc.fromBufferAttribute(f,a),dc.fromBufferAttribute(f,l),t.distanceSqToSegment(fc,dc,Tf,jm)>r)return;Tf.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(Tf);if(!(p<e.near||p>e.far))return{distance:p,point:jm.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}const Ym=new W,qm=new W;class jv extends Qi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let a=0,l=t.count;a<l;a+=2)Ym.fromBufferAttribute(t,a),qm.fromBufferAttribute(t,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+Ym.distanceTo(qm);e.setAttribute("lineDistance",new Yt(r,1))}else ft("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class tx extends On{constructor(e,t,r=cs,a,l,u,f=ti,h=ti,p,v=fa,_=1){if(v!==fa&&v!==da)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:_};super(g,a,l,u,f,h,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Nd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class nx extends On{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Rn extends Dn{constructor(e=1,t=1,r=1,a=32,l=1,u=!1,f=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:a,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:h};const p=this;a=Math.floor(a),l=Math.floor(l);const v=[],_=[],g=[],S=[];let E=0;const T=[],y=r/2;let x=0;A(),u===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(v),this.setAttribute("position",new Yt(_,3)),this.setAttribute("normal",new Yt(g,3)),this.setAttribute("uv",new Yt(S,2));function A(){const L=new W,U=new W;let D=0;const O=(t-e)/r;for(let G=0;G<=l;G++){const P=[],b=G/l,z=b*(t-e)+e;for(let j=0;j<=a;j++){const te=j/a,oe=te*h+f,re=Math.sin(oe),ue=Math.cos(oe);U.x=z*re,U.y=-b*r+y,U.z=z*ue,_.push(U.x,U.y,U.z),L.set(re,O,ue).normalize(),g.push(L.x,L.y,L.z),S.push(te,1-b),P.push(E++)}T.push(P)}for(let G=0;G<a;G++)for(let P=0;P<l;P++){const b=T[P][G],z=T[P+1][G],j=T[P+1][G+1],te=T[P][G+1];(e>0||P!==0)&&(v.push(b,z,te),D+=3),(t>0||P!==l-1)&&(v.push(z,j,te),D+=3)}p.addGroup(x,D,0),x+=D}function C(L){const U=E,D=new ut,O=new W;let G=0;const P=L===!0?e:t,b=L===!0?1:-1;for(let j=1;j<=a;j++)_.push(0,y*b,0),g.push(0,b,0),S.push(.5,.5),E++;const z=E;for(let j=0;j<=a;j++){const oe=j/a*h+f,re=Math.cos(oe),ue=Math.sin(oe);O.x=P*ue,O.y=y*b,O.z=P*re,_.push(O.x,O.y,O.z),g.push(0,b,0),D.x=re*.5+.5,D.y=ue*.5*b+.5,S.push(D.x,D.y),E++}for(let j=0;j<a;j++){const te=U+j,oe=z+j;L===!0?v.push(oe,oe+1,te):v.push(oe+1,oe,te),G+=3}p.addGroup(x,G,L===!0?1:2),x+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class zd extends Dn{constructor(e=[],t=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:a};const l=[],u=[];f(a),p(r),v(),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(l.slice(),3)),this.setAttribute("uv",new Yt(u,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function f(A){const C=new W,L=new W,U=new W;for(let D=0;D<t.length;D+=3)S(t[D+0],C),S(t[D+1],L),S(t[D+2],U),h(C,L,U,A)}function h(A,C,L,U){const D=U+1,O=[];for(let G=0;G<=D;G++){O[G]=[];const P=A.clone().lerp(L,G/D),b=C.clone().lerp(L,G/D),z=D-G;for(let j=0;j<=z;j++)j===0&&G===D?O[G][j]=P:O[G][j]=P.clone().lerp(b,j/z)}for(let G=0;G<D;G++)for(let P=0;P<2*(D-G)-1;P++){const b=Math.floor(P/2);P%2===0?(g(O[G][b+1]),g(O[G+1][b]),g(O[G][b])):(g(O[G][b+1]),g(O[G+1][b+1]),g(O[G+1][b]))}}function p(A){const C=new W;for(let L=0;L<l.length;L+=3)C.x=l[L+0],C.y=l[L+1],C.z=l[L+2],C.normalize().multiplyScalar(A),l[L+0]=C.x,l[L+1]=C.y,l[L+2]=C.z}function v(){const A=new W;for(let C=0;C<l.length;C+=3){A.x=l[C+0],A.y=l[C+1],A.z=l[C+2];const L=y(A)/2/Math.PI+.5,U=x(A)/Math.PI+.5;u.push(L,1-U)}E(),_()}function _(){for(let A=0;A<u.length;A+=6){const C=u[A+0],L=u[A+2],U=u[A+4],D=Math.max(C,L,U),O=Math.min(C,L,U);D>.9&&O<.1&&(C<.2&&(u[A+0]+=1),L<.2&&(u[A+2]+=1),U<.2&&(u[A+4]+=1))}}function g(A){l.push(A.x,A.y,A.z)}function S(A,C){const L=A*3;C.x=e[L+0],C.y=e[L+1],C.z=e[L+2]}function E(){const A=new W,C=new W,L=new W,U=new W,D=new ut,O=new ut,G=new ut;for(let P=0,b=0;P<l.length;P+=9,b+=6){A.set(l[P+0],l[P+1],l[P+2]),C.set(l[P+3],l[P+4],l[P+5]),L.set(l[P+6],l[P+7],l[P+8]),D.set(u[b+0],u[b+1]),O.set(u[b+2],u[b+3]),G.set(u[b+4],u[b+5]),U.copy(A).add(C).add(L).divideScalar(3);const z=y(U);T(D,b+0,A,z),T(O,b+2,C,z),T(G,b+4,L,z)}}function T(A,C,L,U){U<0&&A.x===1&&(u[C]=A.x-1),L.x===0&&L.z===0&&(u[C]=U/2/Math.PI+.5)}function y(A){return Math.atan2(A.z,-A.x)}function x(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zd(e.vertices,e.indices,e.radius,e.details)}}const jl=new W,Yl=new W,bf=new W,ql=new fi;class Yv extends Dn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const a=Math.pow(10,4),l=Math.cos(io*t),u=e.getIndex(),f=e.getAttribute("position"),h=u?u.count:f.count,p=[0,0,0],v=["a","b","c"],_=new Array(3),g={},S=[];for(let E=0;E<h;E+=3){u?(p[0]=u.getX(E),p[1]=u.getX(E+1),p[2]=u.getX(E+2)):(p[0]=E,p[1]=E+1,p[2]=E+2);const{a:T,b:y,c:x}=ql;if(T.fromBufferAttribute(f,p[0]),y.fromBufferAttribute(f,p[1]),x.fromBufferAttribute(f,p[2]),ql.getNormal(bf),_[0]=`${Math.round(T.x*a)},${Math.round(T.y*a)},${Math.round(T.z*a)}`,_[1]=`${Math.round(y.x*a)},${Math.round(y.y*a)},${Math.round(y.z*a)}`,_[2]=`${Math.round(x.x*a)},${Math.round(x.y*a)},${Math.round(x.z*a)}`,!(_[0]===_[1]||_[1]===_[2]||_[2]===_[0]))for(let A=0;A<3;A++){const C=(A+1)%3,L=_[A],U=_[C],D=ql[v[A]],O=ql[v[C]],G=`${L}_${U}`,P=`${U}_${L}`;P in g&&g[P]?(bf.dot(g[P].normal)<=l&&(S.push(D.x,D.y,D.z),S.push(O.x,O.y,O.z)),g[P]=null):G in g||(g[G]={index0:p[A],index1:p[C],normal:bf.clone()})}}for(const E in g)if(g[E]){const{index0:T,index1:y}=g[E];jl.fromBufferAttribute(f,T),Yl.fromBufferAttribute(f,y),S.push(jl.x,jl.y,jl.z),S.push(Yl.x,Yl.y,Yl.z)}this.setAttribute("position",new Yt(S,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class eo extends zd{constructor(e=1,t=0){const r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,a,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new eo(e.radius,e.detail)}}class po extends Dn{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,u=t/2,f=Math.floor(r),h=Math.floor(a),p=f+1,v=h+1,_=e/f,g=t/h,S=[],E=[],T=[],y=[];for(let x=0;x<v;x++){const A=x*g-u;for(let C=0;C<p;C++){const L=C*_-l;E.push(L,-A,0),T.push(0,0,1),y.push(C/f),y.push(1-x/h)}}for(let x=0;x<h;x++)for(let A=0;A<f;A++){const C=A+p*x,L=A+p*(x+1),U=A+1+p*(x+1),D=A+1+p*x;S.push(C,L,D),S.push(L,U,D)}this.setIndex(S),this.setAttribute("position",new Yt(E,3)),this.setAttribute("normal",new Yt(T,3)),this.setAttribute("uv",new Yt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new po(e.width,e.height,e.widthSegments,e.heightSegments)}}class ma extends Dn{constructor(e=1,t=32,r=16,a=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:a,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(u+f,Math.PI);let p=0;const v=[],_=new W,g=new W,S=[],E=[],T=[],y=[];for(let x=0;x<=r;x++){const A=[],C=x/r;let L=0;x===0&&u===0?L=.5/t:x===r&&h===Math.PI&&(L=-.5/t);for(let U=0;U<=t;U++){const D=U/t;_.x=-e*Math.cos(a+D*l)*Math.sin(u+C*f),_.y=e*Math.cos(u+C*f),_.z=e*Math.sin(a+D*l)*Math.sin(u+C*f),E.push(_.x,_.y,_.z),g.copy(_).normalize(),T.push(g.x,g.y,g.z),y.push(D+L,1-C),A.push(p++)}v.push(A)}for(let x=0;x<r;x++)for(let A=0;A<t;A++){const C=v[x][A+1],L=v[x][A],U=v[x+1][A],D=v[x+1][A+1];(x!==0||u>0)&&S.push(C,L,D),(x!==r-1||h<Math.PI)&&S.push(L,U,D)}this.setIndex(S),this.setAttribute("position",new Yt(E,3)),this.setAttribute("normal",new Yt(T,3)),this.setAttribute("uv",new Yt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ma(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class os extends Dn{constructor(e=1,t=.4,r=12,a=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:a,arc:l},r=Math.floor(r),a=Math.floor(a);const u=[],f=[],h=[],p=[],v=new W,_=new W,g=new W;for(let S=0;S<=r;S++)for(let E=0;E<=a;E++){const T=E/a*l,y=S/r*Math.PI*2;_.x=(e+t*Math.cos(y))*Math.cos(T),_.y=(e+t*Math.cos(y))*Math.sin(T),_.z=t*Math.sin(y),f.push(_.x,_.y,_.z),v.x=e*Math.cos(T),v.y=e*Math.sin(T),g.subVectors(_,v).normalize(),h.push(g.x,g.y,g.z),p.push(E/a),p.push(S/r)}for(let S=1;S<=r;S++)for(let E=1;E<=a;E++){const T=(a+1)*S+E-1,y=(a+1)*(S-1)+E-1,x=(a+1)*(S-1)+E,A=(a+1)*S+E;u.push(T,y,A),u.push(y,x,A)}this.setIndex(u),this.setAttribute("position",new Yt(f,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new os(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Zl extends ho{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=W0,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qv extends ho{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=G_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Zv extends ho{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ix extends on{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Af=new Ht,Zm=new W,Km=new W;class Kv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.mapType=Ni,this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Od,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Zm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zm),Km.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Km),t.updateMatrixWorld(),Af.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Af,t.coordinateSystem,t.reversedDepth),t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Af)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class rx extends J0{constructor(e=-1,t=1,r=1,a=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=v*this.view.offsetY,h=f-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class $v extends Kv{constructor(){super(new rx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qv extends ix{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new $v}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Jv extends ix{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ey extends ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const $m=new Ht;class sx{constructor(e,t,r=0,a=1/0){this.ray=new mc(e,t),this.near=r,this.far=a,this.camera=null,this.layers=new Fd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Qt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return $m.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($m),this}intersectObject(e,t=!0,r=[]){return Ed(e,this,r,t),r.sort(Qm),r}intersectObjects(e,t=!0,r=[]){for(let a=0,l=e.length;a<l;a++)Ed(e[a],this,r,t);return r.sort(Qm),r}}function Qm(s,e){return s.distance-e.distance}function Ed(s,e,t,r){let a=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(a=!1),a===!0&&r===!0){const l=s.children;for(let u=0,f=l.length;u<f;u++)Ed(l[u],e,t,!0)}}class Jm{constructor(e=1,t=0,r=0){this.radius=e,this.phi=t,this.theta=r}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=vt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(vt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ox extends fs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){ft("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function e0(s,e,t,r){const a=ty(r);switch(t){case V0:return s*e;case G0:return s*e/a.components*a.byteLength;case Pd:return s*e/a.components*a.byteLength;case Dd:return s*e*2/a.components*a.byteLength;case Ld:return s*e*2/a.components*a.byteLength;case H0:return s*e*3/a.components*a.byteLength;case Ei:return s*e*4/a.components*a.byteLength;case Id:return s*e*4/a.components*a.byteLength;case nc:case ic:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case rc:case sc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Kf:case Qf:return Math.max(s,16)*Math.max(e,8)/4;case Zf:case $f:return Math.max(s,8)*Math.max(e,8)/2;case Jf:case ed:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case td:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case nd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case id:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case rd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case sd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case od:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ad:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ld:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case cd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ud:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case fd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case dd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case hd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case pd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case md:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case xd:case gd:case _d:return Math.ceil(s/4)*Math.ceil(e/4)*16;case vd:case yd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Sd:case Md:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ty(s){switch(s){case Ni:case O0:return{byteLength:1,components:1};case ca:case k0:case uo:return{byteLength:2,components:1};case Cd:case Rd:return{byteLength:2,components:4};case cs:case Ad:case er:return{byteLength:4,components:1};case z0:case B0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bd}}));typeof window<"u"&&(window.__THREE__?ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bd);function ax(){let s=null,e=!1,t=null,r=null;function a(l,u){t(l,u),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function ny(s){const e=new WeakMap;function t(f,h){const p=f.array,v=f.usage,_=p.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,p,v),f.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=s.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:_}}function r(f,h,p){const v=h.array,_=h.updateRanges;if(s.bindBuffer(p,f),_.length===0)s.bufferSubData(p,0,v);else{_.sort((S,E)=>S.start-E.start);let g=0;for(let S=1;S<_.length;S++){const E=_[g],T=_[S];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++g,_[g]=T)}_.length=g+1;for(let S=0,E=_.length;S<E;S++){const T=_[S];s.bufferSubData(p,T.start*v.BYTES_PER_ELEMENT,v,T.start,T.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,h),p.version=f.version}}return{get:a,remove:l,update:u}}var iy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ry=`#ifdef USE_ALPHAHASH
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
#endif`,sy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,oy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ay=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ly=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cy=`#ifdef USE_AOMAP
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
#endif`,uy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fy=`#ifdef USE_BATCHING
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
#endif`,dy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,py=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,my=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xy=`#ifdef USE_IRIDESCENCE
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
#endif`,gy=`#ifdef USE_BUMPMAP
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
#endif`,_y=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,My=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ey=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ty=`#if defined( USE_COLOR_ALPHA )
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
#endif`,by=`#define PI 3.141592653589793
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
} // validated`,Ay=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cy=`vec3 transformedNormal = objectNormal;
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
#endif`,Ry=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Py=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ly=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Iy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ny=`#ifdef USE_ENVMAP
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
#endif`,Fy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Oy=`#ifdef USE_ENVMAP
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
#endif`,ky=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zy=`#ifdef USE_ENVMAP
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
#endif`,By=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wy=`#ifdef USE_GRADIENTMAP
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
}`,Xy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qy=`uniform bool receiveShadow;
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
#endif`,Zy=`#ifdef USE_ENVMAP
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
#endif`,Ky=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$y=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eS=`PhysicalMaterial material;
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
#endif`,tS=`uniform sampler2D dfgLUT;
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
}`,nS=`
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
#endif`,iS=`#if defined( RE_IndirectDiffuse )
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
#endif`,rS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dS=`#if defined( USE_POINTS_UV )
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
#endif`,hS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_S=`#ifdef USE_MORPHTARGETS
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
#endif`,vS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,SS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,MS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ES=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,TS=`#ifdef USE_NORMALMAP
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
#endif`,bS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,AS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,CS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,RS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,PS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,DS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,LS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,IS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,US=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,NS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,FS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,OS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,BS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,VS=`float getShadowMask() {
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
}`,HS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GS=`#ifdef USE_SKINNING
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
#endif`,WS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,XS=`#ifdef USE_SKINNING
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
#endif`,jS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,YS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ZS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,KS=`#ifdef USE_TRANSMISSION
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
#endif`,$S=`#ifdef USE_TRANSMISSION
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
#endif`,QS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iM=`uniform sampler2D t2D;
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
}`,rM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,oM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lM=`#include <common>
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
}`,cM=`#if DEPTH_PACKING == 3200
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
}`,uM=`#define DISTANCE
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
}`,fM=`#define DISTANCE
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
}`,dM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pM=`uniform float scale;
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
}`,mM=`uniform vec3 diffuse;
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
}`,xM=`#include <common>
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
}`,gM=`uniform vec3 diffuse;
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
}`,_M=`#define LAMBERT
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
}`,vM=`#define LAMBERT
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
}`,yM=`#define MATCAP
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
}`,SM=`#define MATCAP
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
}`,MM=`#define NORMAL
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
}`,EM=`#define NORMAL
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
}`,wM=`#define PHONG
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
}`,TM=`#define PHONG
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
}`,bM=`#define STANDARD
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
}`,AM=`#define STANDARD
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
}`,CM=`#define TOON
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
}`,RM=`#define TOON
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
}`,PM=`uniform float size;
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
}`,DM=`uniform vec3 diffuse;
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
}`,LM=`#include <common>
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
}`,IM=`uniform vec3 color;
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
}`,UM=`uniform float rotation;
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
}`,NM=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:iy,alphahash_pars_fragment:ry,alphamap_fragment:sy,alphamap_pars_fragment:oy,alphatest_fragment:ay,alphatest_pars_fragment:ly,aomap_fragment:cy,aomap_pars_fragment:uy,batching_pars_vertex:fy,batching_vertex:dy,begin_vertex:hy,beginnormal_vertex:py,bsdfs:my,iridescence_fragment:xy,bumpmap_pars_fragment:gy,clipping_planes_fragment:_y,clipping_planes_pars_fragment:vy,clipping_planes_pars_vertex:yy,clipping_planes_vertex:Sy,color_fragment:My,color_pars_fragment:Ey,color_pars_vertex:wy,color_vertex:Ty,common:by,cube_uv_reflection_fragment:Ay,defaultnormal_vertex:Cy,displacementmap_pars_vertex:Ry,displacementmap_vertex:Py,emissivemap_fragment:Dy,emissivemap_pars_fragment:Ly,colorspace_fragment:Iy,colorspace_pars_fragment:Uy,envmap_fragment:Ny,envmap_common_pars_fragment:Fy,envmap_pars_fragment:Oy,envmap_pars_vertex:ky,envmap_physical_pars_fragment:Zy,envmap_vertex:zy,fog_vertex:By,fog_pars_vertex:Vy,fog_fragment:Hy,fog_pars_fragment:Gy,gradientmap_pars_fragment:Wy,lightmap_pars_fragment:Xy,lights_lambert_fragment:jy,lights_lambert_pars_fragment:Yy,lights_pars_begin:qy,lights_toon_fragment:Ky,lights_toon_pars_fragment:$y,lights_phong_fragment:Qy,lights_phong_pars_fragment:Jy,lights_physical_fragment:eS,lights_physical_pars_fragment:tS,lights_fragment_begin:nS,lights_fragment_maps:iS,lights_fragment_end:rS,logdepthbuf_fragment:sS,logdepthbuf_pars_fragment:oS,logdepthbuf_pars_vertex:aS,logdepthbuf_vertex:lS,map_fragment:cS,map_pars_fragment:uS,map_particle_fragment:fS,map_particle_pars_fragment:dS,metalnessmap_fragment:hS,metalnessmap_pars_fragment:pS,morphinstance_vertex:mS,morphcolor_vertex:xS,morphnormal_vertex:gS,morphtarget_pars_vertex:_S,morphtarget_vertex:vS,normal_fragment_begin:yS,normal_fragment_maps:SS,normal_pars_fragment:MS,normal_pars_vertex:ES,normal_vertex:wS,normalmap_pars_fragment:TS,clearcoat_normal_fragment_begin:bS,clearcoat_normal_fragment_maps:AS,clearcoat_pars_fragment:CS,iridescence_pars_fragment:RS,opaque_fragment:PS,packing:DS,premultiplied_alpha_fragment:LS,project_vertex:IS,dithering_fragment:US,dithering_pars_fragment:NS,roughnessmap_fragment:FS,roughnessmap_pars_fragment:OS,shadowmap_pars_fragment:kS,shadowmap_pars_vertex:zS,shadowmap_vertex:BS,shadowmask_pars_fragment:VS,skinbase_vertex:HS,skinning_pars_vertex:GS,skinning_vertex:WS,skinnormal_vertex:XS,specularmap_fragment:jS,specularmap_pars_fragment:YS,tonemapping_fragment:qS,tonemapping_pars_fragment:ZS,transmission_fragment:KS,transmission_pars_fragment:$S,uv_pars_fragment:QS,uv_pars_vertex:JS,uv_vertex:eM,worldpos_vertex:tM,background_vert:nM,background_frag:iM,backgroundCube_vert:rM,backgroundCube_frag:sM,cube_vert:oM,cube_frag:aM,depth_vert:lM,depth_frag:cM,distanceRGBA_vert:uM,distanceRGBA_frag:fM,equirect_vert:dM,equirect_frag:hM,linedashed_vert:pM,linedashed_frag:mM,meshbasic_vert:xM,meshbasic_frag:gM,meshlambert_vert:_M,meshlambert_frag:vM,meshmatcap_vert:yM,meshmatcap_frag:SM,meshnormal_vert:MM,meshnormal_frag:EM,meshphong_vert:wM,meshphong_frag:TM,meshphysical_vert:bM,meshphysical_frag:AM,meshtoon_vert:CM,meshtoon_frag:RM,points_vert:PM,points_frag:DM,shadow_vert:LM,shadow_frag:IM,sprite_vert:UM,sprite_frag:NM},Le={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},Li={basic:{uniforms:Fn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Fn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Mt(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Fn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Fn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Fn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Mt(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Fn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Fn([Le.points,Le.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Fn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Fn([Le.common,Le.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Fn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Fn([Le.sprite,Le.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distanceRGBA:{uniforms:Fn([Le.common,Le.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distanceRGBA_vert,fragmentShader:gt.distanceRGBA_frag},shadow:{uniforms:Fn([Le.lights,Le.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Li.physical={uniforms:Fn([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const Kl={r:0,b:0,g:0},ts=new wi,FM=new Ht;function OM(s,e,t,r,a,l,u){const f=new Mt(0);let h=l===!0?0:1,p,v,_=null,g=0,S=null;function E(C){let L=C.isScene===!0?C.background:null;return L&&L.isTexture&&(L=(C.backgroundBlurriness>0?t:e).get(L)),L}function T(C){let L=!1;const U=E(C);U===null?x(f,h):U&&U.isColor&&(x(U,1),L=!0);const D=s.xr.getEnvironmentBlendMode();D==="additive"?r.buffers.color.setClear(0,0,0,1,u):D==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||L)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(C,L){const U=E(L);U&&(U.isCubeTexture||U.mapping===hc)?(v===void 0&&(v=new Ie(new $t(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:co(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(D,O,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(v)),ts.copy(L.backgroundRotation),ts.x*=-1,ts.y*=-1,ts.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),v.material.uniforms.envMap.value=U,v.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(FM.makeRotationFromEuler(ts)),v.material.toneMapped=At.getTransfer(U.colorSpace)!==Nt,(_!==U||g!==U.version||S!==s.toneMapping)&&(v.material.needsUpdate=!0,_=U,g=U.version,S=s.toneMapping),v.layers.enableAll(),C.unshift(v,v.geometry,v.material,0,0,null)):U&&U.isTexture&&(p===void 0&&(p=new Ie(new po(2,2),new Fi({name:"BackgroundMaterial",uniforms:co(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:Or,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=U,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=At.getTransfer(U.colorSpace)!==Nt,U.matrixAutoUpdate===!0&&U.updateMatrix(),p.material.uniforms.uvTransform.value.copy(U.matrix),(_!==U||g!==U.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,_=U,g=U.version,S=s.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null))}function x(C,L){C.getRGB(Kl,Q0(s)),r.buffers.color.setClear(Kl.r,Kl.g,Kl.b,L,u)}function A(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(C,L=1){f.set(C),h=L,x(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(C){h=C,x(f,h)},render:T,addToRenderList:y,dispose:A}}function kM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=g(null);let l=a,u=!1;function f(b,z,j,te,oe){let re=!1;const ue=_(te,j,z);l!==ue&&(l=ue,p(l.object)),re=S(b,te,j,oe),re&&E(b,te,j,oe),oe!==null&&e.update(oe,s.ELEMENT_ARRAY_BUFFER),(re||u)&&(u=!1,L(b,z,j,te),oe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(oe).buffer))}function h(){return s.createVertexArray()}function p(b){return s.bindVertexArray(b)}function v(b){return s.deleteVertexArray(b)}function _(b,z,j){const te=j.wireframe===!0;let oe=r[b.id];oe===void 0&&(oe={},r[b.id]=oe);let re=oe[z.id];re===void 0&&(re={},oe[z.id]=re);let ue=re[te];return ue===void 0&&(ue=g(h()),re[te]=ue),ue}function g(b){const z=[],j=[],te=[];for(let oe=0;oe<t;oe++)z[oe]=0,j[oe]=0,te[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:j,attributeDivisors:te,object:b,attributes:{},index:null}}function S(b,z,j,te){const oe=l.attributes,re=z.attributes;let ue=0;const fe=j.getAttributes();for(const H in fe)if(fe[H].location>=0){const I=oe[H];let K=re[H];if(K===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(K=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(K=b.instanceColor)),I===void 0||I.attribute!==K||K&&I.data!==K.data)return!0;ue++}return l.attributesNum!==ue||l.index!==te}function E(b,z,j,te){const oe={},re=z.attributes;let ue=0;const fe=j.getAttributes();for(const H in fe)if(fe[H].location>=0){let I=re[H];I===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(I=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(I=b.instanceColor));const K={};K.attribute=I,I&&I.data&&(K.data=I.data),oe[H]=K,ue++}l.attributes=oe,l.attributesNum=ue,l.index=te}function T(){const b=l.newAttributes;for(let z=0,j=b.length;z<j;z++)b[z]=0}function y(b){x(b,0)}function x(b,z){const j=l.newAttributes,te=l.enabledAttributes,oe=l.attributeDivisors;j[b]=1,te[b]===0&&(s.enableVertexAttribArray(b),te[b]=1),oe[b]!==z&&(s.vertexAttribDivisor(b,z),oe[b]=z)}function A(){const b=l.newAttributes,z=l.enabledAttributes;for(let j=0,te=z.length;j<te;j++)z[j]!==b[j]&&(s.disableVertexAttribArray(j),z[j]=0)}function C(b,z,j,te,oe,re,ue){ue===!0?s.vertexAttribIPointer(b,z,j,oe,re):s.vertexAttribPointer(b,z,j,te,oe,re)}function L(b,z,j,te){T();const oe=te.attributes,re=j.getAttributes(),ue=z.defaultAttributeValues;for(const fe in re){const H=re[fe];if(H.location>=0){let ne=oe[fe];if(ne===void 0&&(fe==="instanceMatrix"&&b.instanceMatrix&&(ne=b.instanceMatrix),fe==="instanceColor"&&b.instanceColor&&(ne=b.instanceColor)),ne!==void 0){const I=ne.normalized,K=ne.itemSize,_e=e.get(ne);if(_e===void 0)continue;const Fe=_e.buffer,le=_e.type,Ee=_e.bytesPerElement,$=le===s.INT||le===s.UNSIGNED_INT||ne.gpuType===Ad;if(ne.isInterleavedBufferAttribute){const ae=ne.data,ve=ae.stride,Xe=ne.offset;if(ae.isInstancedInterleavedBuffer){for(let We=0;We<H.locationSize;We++)x(H.location+We,ae.meshPerAttribute);b.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let We=0;We<H.locationSize;We++)y(H.location+We);s.bindBuffer(s.ARRAY_BUFFER,Fe);for(let We=0;We<H.locationSize;We++)C(H.location+We,K/H.locationSize,le,I,ve*Ee,(Xe+K/H.locationSize*We)*Ee,$)}else{if(ne.isInstancedBufferAttribute){for(let ae=0;ae<H.locationSize;ae++)x(H.location+ae,ne.meshPerAttribute);b.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ae=0;ae<H.locationSize;ae++)y(H.location+ae);s.bindBuffer(s.ARRAY_BUFFER,Fe);for(let ae=0;ae<H.locationSize;ae++)C(H.location+ae,K/H.locationSize,le,I,K*Ee,K/H.locationSize*ae*Ee,$)}}else if(ue!==void 0){const I=ue[fe];if(I!==void 0)switch(I.length){case 2:s.vertexAttrib2fv(H.location,I);break;case 3:s.vertexAttrib3fv(H.location,I);break;case 4:s.vertexAttrib4fv(H.location,I);break;default:s.vertexAttrib1fv(H.location,I)}}}}A()}function U(){G();for(const b in r){const z=r[b];for(const j in z){const te=z[j];for(const oe in te)v(te[oe].object),delete te[oe];delete z[j]}delete r[b]}}function D(b){if(r[b.id]===void 0)return;const z=r[b.id];for(const j in z){const te=z[j];for(const oe in te)v(te[oe].object),delete te[oe];delete z[j]}delete r[b.id]}function O(b){for(const z in r){const j=r[z];if(j[b.id]===void 0)continue;const te=j[b.id];for(const oe in te)v(te[oe].object),delete te[oe];delete j[b.id]}}function G(){P(),u=!0,l!==a&&(l=a,p(l.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:G,resetDefaultState:P,dispose:U,releaseStatesOfGeometry:D,releaseStatesOfProgram:O,initAttributes:T,enableAttribute:y,disableUnusedAttributes:A}}function zM(s,e,t){let r;function a(p){r=p}function l(p,v){s.drawArrays(r,p,v),t.update(v,r,1)}function u(p,v,_){_!==0&&(s.drawArraysInstanced(r,p,v,_),t.update(v,r,_))}function f(p,v,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,_);let S=0;for(let E=0;E<_;E++)S+=v[E];t.update(S,r,1)}function h(p,v,_,g){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)u(p[E],v[E],g[E]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,v,0,g,0,_);let E=0;for(let T=0;T<_;T++)E+=v[T]*g[T];t.update(E,r,1)}}this.setMode=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function BM(s,e,t,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(O){return!(O!==Ei&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const G=O===uo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Ni&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==er&&!G)}function h(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const v=h(p);v!==p&&(ft("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const _=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),A=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),C=s.getParameter(s.MAX_VARYING_VECTORS),L=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),U=E>0,D=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:A,maxVaryings:C,maxFragmentUniforms:L,vertexTextures:U,maxSamples:D}}function VM(s){const e=this;let t=null,r=0,a=!1,l=!1;const u=new Ir,f=new mt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const S=_.length!==0||g||r!==0||a;return a=g,r=_.length,S},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,g){t=v(_,g,0)},this.setState=function(_,g,S){const E=_.clippingPlanes,T=_.clipIntersection,y=_.clipShadows,x=s.get(_);if(!a||E===null||E.length===0||l&&!y)l?v(null):p();else{const A=l?0:r,C=A*4;let L=x.clippingState||null;h.value=L,L=v(E,g,C,S);for(let U=0;U!==C;++U)L[U]=t[U];x.clippingState=L,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=A}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(_,g,S,E){const T=_!==null?_.length:0;let y=null;if(T!==0){if(y=h.value,E!==!0||y===null){const x=S+T*4,A=g.matrixWorldInverse;f.getNormalMatrix(A),(y===null||y.length<x)&&(y=new Float32Array(x));for(let C=0,L=S;C!==T;++C,L+=4)u.copy(_[C]).applyMatrix4(A,f),u.normal.toArray(y,L),y[L+3]=u.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}function HM(s){let e=new WeakMap;function t(u,f){return f===Xf?u.mapping=oo:f===jf&&(u.mapping=ao),u}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===Xf||f===jf)if(e.has(u)){const h=e.get(u).texture;return t(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const p=new zv(h.height);return p.fromEquirectangularTexture(s,u),e.set(u,p),u.addEventListener("dispose",a),t(p.texture,u.mapping)}else return null}}return u}function a(u){const f=u.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const Nr=4,t0=[.125,.215,.35,.446,.526,.582],as=20,GM=256,ta=new rx,n0=new Mt;let Cf=null,Rf=0,Pf=0,Df=!1;const WM=new W;class i0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,a=100,l={}){const{size:u=256,position:f=WM}=l;Cf=this._renderer.getRenderTarget(),Rf=this._renderer.getActiveCubeFace(),Pf=this._renderer.getActiveMipmapLevel(),Df=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,a,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=o0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=s0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Cf,Rf,Pf),this._renderer.xr.enabled=Df,e.scissorTest=!1,$s(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===oo||e.mapping===ao?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cf=this._renderer.getRenderTarget(),Rf=this._renderer.getActiveCubeFace(),Pf=this._renderer.getActiveMipmapLevel(),Df=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:di,minFilter:di,generateMipmaps:!1,type:uo,format:Ei,colorSpace:lo,depthBuffer:!1},a=r0(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=r0(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=XM(l)),this._blurMaterial=YM(l,e,t),this._ggxMaterial=jM(l,e,t)}return a}_compileMaterial(e){const t=new Ie(new Dn,e);this._renderer.compile(t,ta)}_sceneToCubeUV(e,t,r,a,l){const h=new ui(90,1,t,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,S=_.toneMapping;_.getClearColor(n0),_.toneMapping=Fr,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(a),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ie(new $t,new xc({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,y=T.material;let x=!1;const A=e.background;A?A.isColor&&(y.color.copy(A),e.background=null,x=!0):(y.color.copy(n0),x=!0);for(let C=0;C<6;C++){const L=C%3;L===0?(h.up.set(0,p[C],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+v[C],l.y,l.z)):L===1?(h.up.set(0,0,p[C]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+v[C],l.z)):(h.up.set(0,p[C],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+v[C]));const U=this._cubeSize;$s(a,L*U,C>2?U:0,U,U),_.setRenderTarget(a),x&&_.render(T,h),_.render(e,h)}_.toneMapping=S,_.autoClear=g,e.background=A}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===oo||e.mapping===ao;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=o0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=s0());const l=a?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;$s(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(u,ta)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let l=1;l<a;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const a=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const h=u.uniforms,p=r/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),_=Math.sqrt(p*p-v*v),g=.05+p*.95,S=_*g,{_lodMax:E}=this,T=this._sizeLods[r],y=3*T*(r>E-Nr?r-E+Nr:0),x=4*(this._cubeSize-T);h.envMap.value=e.texture,h.roughness.value=S,h.mipInt.value=E-t,$s(l,y,x,3*T,2*T),a.setRenderTarget(l),a.render(f,ta),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=E-r,$s(e,y,x,3*T,2*T),a.setRenderTarget(e),a.render(f,ta)}_blur(e,t,r,a,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,a,"latitudinal",l),this._halfBlur(u,e,r,r,a,"longitudinal",l)}_halfBlur(e,t,r,a,l,u,f){const h=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Qt("blur direction must be either latitudinal or longitudinal!");const v=3,_=this._lodMeshes[a];_.material=p;const g=p.uniforms,S=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*as-1),T=l/E,y=isFinite(l)?1+Math.floor(v*T):as;y>as&&ft(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${as}`);const x=[];let A=0;for(let O=0;O<as;++O){const G=O/T,P=Math.exp(-G*G/2);x.push(P),O===0?A+=P:O<y&&(A+=2*P)}for(let O=0;O<x.length;O++)x[O]=x[O]/A;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=x,g.latitudinal.value=u==="latitudinal",f&&(g.poleAxis.value=f);const{_lodMax:C}=this;g.dTheta.value=E,g.mipInt.value=C-r;const L=this._sizeLods[a],U=3*L*(a>C-Nr?a-C+Nr:0),D=4*(this._cubeSize-L);$s(t,U,D,3*L,2*L),h.setRenderTarget(t),h.render(_,ta)}}function XM(s){const e=[],t=[],r=[];let a=s;const l=s-Nr+1+t0.length;for(let u=0;u<l;u++){const f=Math.pow(2,a);e.push(f);let h=1/f;u>s-Nr?h=t0[u-s+Nr-1]:u===0&&(h=0),t.push(h);const p=1/(f-2),v=-p,_=1+p,g=[v,v,_,v,_,_,v,v,_,_,v,_],S=6,E=6,T=3,y=2,x=1,A=new Float32Array(T*E*S),C=new Float32Array(y*E*S),L=new Float32Array(x*E*S);for(let D=0;D<S;D++){const O=D%3*2/3-1,G=D>2?0:-1,P=[O,G,0,O+2/3,G,0,O+2/3,G+1,0,O,G,0,O+2/3,G+1,0,O,G+1,0];A.set(P,T*E*D),C.set(g,y*E*D);const b=[D,D,D,D,D,D];L.set(b,x*E*D)}const U=new Dn;U.setAttribute("position",new Ui(A,T)),U.setAttribute("uv",new Ui(C,y)),U.setAttribute("faceIndex",new Ui(L,x)),r.push(new Ie(U,null)),a>Nr&&a--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function r0(s,e,t){const r=new us(s,e,t);return r.texture.mapping=hc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function $s(s,e,t,r,a){s.viewport.set(e,t,r,a),s.scissor.set(e,t,r,a)}function jM(s,e,t){return new Fi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:GM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gc(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function YM(s,e,t){const r=new Float32Array(as),a=new W(0,1,0);return new Fi({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:gc(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function s0(){return new Fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gc(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function o0(){return new Fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function gc(){return`

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
	`}function qM(s){let e=new WeakMap,t=null;function r(f){if(f&&f.isTexture){const h=f.mapping,p=h===Xf||h===jf,v=h===oo||h===ao;if(p||v){let _=e.get(f);const g=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return t===null&&(t=new i0(s)),_=p?t.fromEquirectangular(f,_):t.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),_.texture;if(_!==void 0)return _.texture;{const S=f.image;return p&&S&&S.height>0||v&&S&&a(S)?(t===null&&(t=new i0(s)),_=p?t.fromEquirectangular(f):t.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),f.addEventListener("dispose",l),_.texture):null}}}return f}function a(f){let h=0;const p=6;for(let v=0;v<p;v++)f[v]!==void 0&&h++;return h===p}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function ZM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const a=s.getExtension(r);return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&ha("WebGLRenderer: "+r+" extension not supported."),a}}}function KM(s,e,t,r){const a={},l=new WeakMap;function u(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);g.removeEventListener("dispose",u),delete a[g.id];const S=l.get(g);S&&(e.remove(S),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function f(_,g){return a[g.id]===!0||(g.addEventListener("dispose",u),a[g.id]=!0,t.memory.geometries++),g}function h(_){const g=_.attributes;for(const S in g)e.update(g[S],s.ARRAY_BUFFER)}function p(_){const g=[],S=_.index,E=_.attributes.position;let T=0;if(S!==null){const A=S.array;T=S.version;for(let C=0,L=A.length;C<L;C+=3){const U=A[C+0],D=A[C+1],O=A[C+2];g.push(U,D,D,O,O,U)}}else if(E!==void 0){const A=E.array;T=E.version;for(let C=0,L=A.length/3-1;C<L;C+=3){const U=C+0,D=C+1,O=C+2;g.push(U,D,D,O,O,U)}}else return;const y=new(j0(g)?$0:K0)(g,1);y.version=T;const x=l.get(_);x&&e.remove(x),l.set(_,y)}function v(_){const g=l.get(_);if(g){const S=_.index;S!==null&&g.version<S.version&&p(_)}else p(_);return l.get(_)}return{get:f,update:h,getWireframeAttribute:v}}function $M(s,e,t){let r;function a(g){r=g}let l,u;function f(g){l=g.type,u=g.bytesPerElement}function h(g,S){s.drawElements(r,S,l,g*u),t.update(S,r,1)}function p(g,S,E){E!==0&&(s.drawElementsInstanced(r,S,l,g*u,E),t.update(S,r,E))}function v(g,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,g,0,E);let y=0;for(let x=0;x<E;x++)y+=S[x];t.update(y,r,1)}function _(g,S,E,T){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<g.length;x++)p(g[x]/u,S[x],T[x]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,l,g,0,T,0,E);let x=0;for(let A=0;A<E;A++)x+=S[A]*T[A];t.update(x,r,1)}}this.setMode=a,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function QM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:Qt("WebGLInfo: Unknown draw mode:",u);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function JM(s,e,t){const r=new WeakMap,a=new Jt;function l(u,f,h){const p=u.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=v!==void 0?v.length:0;let g=r.get(f);if(g===void 0||g.count!==_){let b=function(){G.dispose(),r.delete(f),f.removeEventListener("dispose",b)};var S=b;g!==void 0&&g.texture.dispose();const E=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],A=f.morphAttributes.normal||[],C=f.morphAttributes.color||[];let L=0;E===!0&&(L=1),T===!0&&(L=2),y===!0&&(L=3);let U=f.attributes.position.count*L,D=1;U>e.maxTextureSize&&(D=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const O=new Float32Array(U*D*4*_),G=new q0(O,U,D,_);G.type=er,G.needsUpdate=!0;const P=L*4;for(let z=0;z<_;z++){const j=x[z],te=A[z],oe=C[z],re=U*D*4*z;for(let ue=0;ue<j.count;ue++){const fe=ue*P;E===!0&&(a.fromBufferAttribute(j,ue),O[re+fe+0]=a.x,O[re+fe+1]=a.y,O[re+fe+2]=a.z,O[re+fe+3]=0),T===!0&&(a.fromBufferAttribute(te,ue),O[re+fe+4]=a.x,O[re+fe+5]=a.y,O[re+fe+6]=a.z,O[re+fe+7]=0),y===!0&&(a.fromBufferAttribute(oe,ue),O[re+fe+8]=a.x,O[re+fe+9]=a.y,O[re+fe+10]=a.z,O[re+fe+11]=oe.itemSize===4?a.w:1)}}g={count:_,texture:G,size:new ut(U,D)},r.set(f,g),f.addEventListener("dispose",b)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const T=f.morphTargetsRelative?1:1-E;h.getUniforms().setValue(s,"morphTargetBaseInfluence",T),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function e1(s,e,t,r){let a=new WeakMap;function l(h){const p=r.render.frame,v=h.geometry,_=e.get(h,v);if(a.get(_)!==p&&(e.update(_),a.set(_,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),a.get(h)!==p&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const g=h.skeleton;a.get(g)!==p&&(g.update(),a.set(g,p))}return _}function u(){a=new WeakMap}function f(h){const p=h.target;p.removeEventListener("dispose",f),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:u}}const lx=new On,a0=new tx(1,1),cx=new q0,ux=new Mv,fx=new ex,l0=[],c0=[],u0=new Float32Array(16),f0=new Float32Array(9),d0=new Float32Array(4);function mo(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let l=l0[a];if(l===void 0&&(l=new Float32Array(a),l0[a]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,s[u].toArray(l,f)}return l}function dn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function hn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function _c(s,e){let t=c0[e];t===void 0&&(t=new Int32Array(e),c0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function t1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function n1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;s.uniform2fv(this.addr,e),hn(t,e)}}function i1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;s.uniform3fv(this.addr,e),hn(t,e)}}function r1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;s.uniform4fv(this.addr,e),hn(t,e)}}function s1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(dn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(dn(t,r))return;d0.set(r),s.uniformMatrix2fv(this.addr,!1,d0),hn(t,r)}}function o1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(dn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(dn(t,r))return;f0.set(r),s.uniformMatrix3fv(this.addr,!1,f0),hn(t,r)}}function a1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(dn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(dn(t,r))return;u0.set(r),s.uniformMatrix4fv(this.addr,!1,u0),hn(t,r)}}function l1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function c1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;s.uniform2iv(this.addr,e),hn(t,e)}}function u1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;s.uniform3iv(this.addr,e),hn(t,e)}}function f1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;s.uniform4iv(this.addr,e),hn(t,e)}}function d1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function h1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;s.uniform2uiv(this.addr,e),hn(t,e)}}function p1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;s.uniform3uiv(this.addr,e),hn(t,e)}}function m1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;s.uniform4uiv(this.addr,e),hn(t,e)}}function x1(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(a0.compareFunction=X0,l=a0):l=lx,t.setTexture2D(e||l,a)}function g1(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||ux,a)}function _1(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||fx,a)}function v1(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||cx,a)}function y1(s){switch(s){case 5126:return t1;case 35664:return n1;case 35665:return i1;case 35666:return r1;case 35674:return s1;case 35675:return o1;case 35676:return a1;case 5124:case 35670:return l1;case 35667:case 35671:return c1;case 35668:case 35672:return u1;case 35669:case 35673:return f1;case 5125:return d1;case 36294:return h1;case 36295:return p1;case 36296:return m1;case 35678:case 36198:case 36298:case 36306:case 35682:return x1;case 35679:case 36299:case 36307:return g1;case 35680:case 36300:case 36308:case 36293:return _1;case 36289:case 36303:case 36311:case 36292:return v1}}function S1(s,e){s.uniform1fv(this.addr,e)}function M1(s,e){const t=mo(e,this.size,2);s.uniform2fv(this.addr,t)}function E1(s,e){const t=mo(e,this.size,3);s.uniform3fv(this.addr,t)}function w1(s,e){const t=mo(e,this.size,4);s.uniform4fv(this.addr,t)}function T1(s,e){const t=mo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function b1(s,e){const t=mo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function A1(s,e){const t=mo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function C1(s,e){s.uniform1iv(this.addr,e)}function R1(s,e){s.uniform2iv(this.addr,e)}function P1(s,e){s.uniform3iv(this.addr,e)}function D1(s,e){s.uniform4iv(this.addr,e)}function L1(s,e){s.uniform1uiv(this.addr,e)}function I1(s,e){s.uniform2uiv(this.addr,e)}function U1(s,e){s.uniform3uiv(this.addr,e)}function N1(s,e){s.uniform4uiv(this.addr,e)}function F1(s,e,t){const r=this.cache,a=e.length,l=_c(t,a);dn(r,l)||(s.uniform1iv(this.addr,l),hn(r,l));for(let u=0;u!==a;++u)t.setTexture2D(e[u]||lx,l[u])}function O1(s,e,t){const r=this.cache,a=e.length,l=_c(t,a);dn(r,l)||(s.uniform1iv(this.addr,l),hn(r,l));for(let u=0;u!==a;++u)t.setTexture3D(e[u]||ux,l[u])}function k1(s,e,t){const r=this.cache,a=e.length,l=_c(t,a);dn(r,l)||(s.uniform1iv(this.addr,l),hn(r,l));for(let u=0;u!==a;++u)t.setTextureCube(e[u]||fx,l[u])}function z1(s,e,t){const r=this.cache,a=e.length,l=_c(t,a);dn(r,l)||(s.uniform1iv(this.addr,l),hn(r,l));for(let u=0;u!==a;++u)t.setTexture2DArray(e[u]||cx,l[u])}function B1(s){switch(s){case 5126:return S1;case 35664:return M1;case 35665:return E1;case 35666:return w1;case 35674:return T1;case 35675:return b1;case 35676:return A1;case 5124:case 35670:return C1;case 35667:case 35671:return R1;case 35668:case 35672:return P1;case 35669:case 35673:return D1;case 5125:return L1;case 36294:return I1;case 36295:return U1;case 36296:return N1;case 35678:case 36198:case 36298:case 36306:case 35682:return F1;case 35679:case 36299:case 36307:return O1;case 35680:case 36300:case 36308:case 36293:return k1;case 36289:case 36303:case 36311:case 36292:return z1}}class V1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=y1(t.type)}}class H1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=B1(t.type)}}class G1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,u=a.length;l!==u;++l){const f=a[l];f.setValue(e,t[f.id],r)}}}const Lf=/(\w+)(\])?(\[|\.)?/g;function h0(s,e){s.seq.push(e),s.map[e.id]=e}function W1(s,e,t){const r=s.name,a=r.length;for(Lf.lastIndex=0;;){const l=Lf.exec(r),u=Lf.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&u+2===a){h0(t,p===void 0?new V1(f,s,e):new H1(f,s,e));break}else{let _=t.map[f];_===void 0&&(_=new G1(f),h0(t,_)),t=_}}}class oc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(t,a),u=e.getUniformLocation(t,l.name);W1(l,u,this)}}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,u=t.length;l!==u;++l){const f=t[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const u=e[a];u.id in t&&r.push(u)}return r}}function p0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const X1=37297;let j1=0;function Y1(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=a;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const m0=new mt;function q1(s){At._getMatrix(m0,At.workingColorSpace,s);const e=`mat3( ${m0.elements.map(t=>t.toFixed(4))} )`;switch(At.getTransfer(s)){case lc:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return ft("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function x0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+Y1(s.getShaderSource(e),f)}else return l}function Z1(s,e){const t=q1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function K1(s,e){let t;switch(e){case N_:t="Linear";break;case F_:t="Reinhard";break;case O_:t="Cineon";break;case k_:t="ACESFilmic";break;case B_:t="AgX";break;case V_:t="Neutral";break;case z_:t="Custom";break;default:ft("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $l=new W;function $1(){At.getLuminanceCoefficients($l);const s=$l.x.toFixed(4),e=$l.y.toFixed(4),t=$l.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Q1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sa).join(`
`)}function J1(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function eE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return t}function sa(s){return s!==""}function g0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tE=/^[ \t]*#include +<([\w\d./]+)>/gm;function wd(s){return s.replace(tE,iE)}const nE=new Map;function iE(s,e){let t=gt[e];if(t===void 0){const r=nE.get(e);if(r!==void 0)t=gt[r],ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return wd(t)}const rE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function v0(s){return s.replace(rE,sE)}function sE(s,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function y0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function oE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===U0?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===p_?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===$i&&(e="SHADOWMAP_TYPE_VSM"),e}function aE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case oo:case ao:e="ENVMAP_TYPE_CUBE";break;case hc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ao:e="ENVMAP_MODE_REFRACTION";break}return e}function cE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case N0:e="ENVMAP_BLENDING_MULTIPLY";break;case I_:e="ENVMAP_BLENDING_MIX";break;case U_:e="ENVMAP_BLENDING_ADD";break}return e}function uE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function fE(s,e,t,r){const a=s.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const h=oE(t),p=aE(t),v=lE(t),_=cE(t),g=uE(t),S=Q1(t),E=J1(l),T=a.createProgram();let y,x,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(sa).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(sa).join(`
`),x.length>0&&(x+=`
`)):(y=[y0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sa).join(`
`),x=[y0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",t.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fr?"#define TONE_MAPPING":"",t.toneMapping!==Fr?gt.tonemapping_pars_fragment:"",t.toneMapping!==Fr?K1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,Z1("linearToOutputTexel",t.outputColorSpace),$1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sa).join(`
`)),u=wd(u),u=g0(u,t),u=_0(u,t),f=wd(f),f=g0(f,t),f=_0(f,t),u=v0(u),f=v0(f),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===Tm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const C=A+y+u,L=A+x+f,U=p0(a,a.VERTEX_SHADER,C),D=p0(a,a.FRAGMENT_SHADER,L);a.attachShader(T,U),a.attachShader(T,D),t.index0AttributeName!==void 0?a.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(T,0,"position"),a.linkProgram(T);function O(z){if(s.debug.checkShaderErrors){const j=a.getProgramInfoLog(T)||"",te=a.getShaderInfoLog(U)||"",oe=a.getShaderInfoLog(D)||"",re=j.trim(),ue=te.trim(),fe=oe.trim();let H=!0,ne=!0;if(a.getProgramParameter(T,a.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,T,U,D);else{const I=x0(a,U,"vertex"),K=x0(a,D,"fragment");Qt("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(T,a.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+re+`
`+I+`
`+K)}else re!==""?ft("WebGLProgram: Program Info Log:",re):(ue===""||fe==="")&&(ne=!1);ne&&(z.diagnostics={runnable:H,programLog:re,vertexShader:{log:ue,prefix:y},fragmentShader:{log:fe,prefix:x}})}a.deleteShader(U),a.deleteShader(D),G=new oc(a,T),P=eE(a,T)}let G;this.getUniforms=function(){return G===void 0&&O(this),G};let P;this.getAttributes=function(){return P===void 0&&O(this),P};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=a.getProgramParameter(T,X1)),b},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=j1++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=U,this.fragmentShader=D,this}let dE=0;class hE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new pE(e),t.set(e,r)),r}}class pE{constructor(e){this.id=dE++,this.code=e,this.usedTimes=0}}function mE(s,e,t,r,a,l,u){const f=new Fd,h=new hE,p=new Set,v=[],_=a.logarithmicDepthBuffer,g=a.vertexTextures;let S=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(P){return p.add(P),P===0?"uv":`uv${P}`}function y(P,b,z,j,te){const oe=j.fog,re=te.geometry,ue=P.isMeshStandardMaterial?j.environment:null,fe=(P.isMeshStandardMaterial?t:e).get(P.envMap||ue),H=fe&&fe.mapping===hc?fe.image.height:null,ne=E[P.type];P.precision!==null&&(S=a.getMaxPrecision(P.precision),S!==P.precision&&ft("WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const I=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,K=I!==void 0?I.length:0;let _e=0;re.morphAttributes.position!==void 0&&(_e=1),re.morphAttributes.normal!==void 0&&(_e=2),re.morphAttributes.color!==void 0&&(_e=3);let Fe,le,Ee,$;if(ne){const wt=Li[ne];Fe=wt.vertexShader,le=wt.fragmentShader}else Fe=P.vertexShader,le=P.fragmentShader,h.update(P),Ee=h.getVertexShaderID(P),$=h.getFragmentShaderID(P);const ae=s.getRenderTarget(),ve=s.state.buffers.depth.getReversed(),Xe=te.isInstancedMesh===!0,We=te.isBatchedMesh===!0,dt=!!P.map,tn=!!P.matcap,pt=!!fe,It=!!P.aoMap,k=!!P.lightMap,_t=!!P.bumpMap,xt=!!P.normalMap,Pt=!!P.displacementMap,ze=!!P.emissiveMap,Dt=!!P.metalnessMap,Ye=!!P.roughnessMap,at=P.anisotropy>0,N=P.clearcoat>0,w=P.dispersion>0,J=P.iridescence>0,de=P.sheen>0,pe=P.transmission>0,ce=at&&!!P.anisotropyMap,Ze=N&&!!P.clearcoatMap,Re=N&&!!P.clearcoatNormalMap,$e=N&&!!P.clearcoatRoughnessMap,qe=J&&!!P.iridescenceMap,ge=J&&!!P.iridescenceThicknessMap,Ae=de&&!!P.sheenColorMap,rt=de&&!!P.sheenRoughnessMap,et=!!P.specularMap,Ue=!!P.specularColorMap,st=!!P.specularIntensityMap,B=pe&&!!P.transmissionMap,Pe=pe&&!!P.thicknessMap,we=!!P.gradientMap,Te=!!P.alphaMap,Se=P.alphaTest>0,he=!!P.alphaHash,Be=!!P.extensions;let lt=Fr;P.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(lt=s.toneMapping);const Ut={shaderID:ne,shaderType:P.type,shaderName:P.name,vertexShader:Fe,fragmentShader:le,defines:P.defines,customVertexShaderID:Ee,customFragmentShaderID:$,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:We,batchingColor:We&&te._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&te.instanceColor!==null,instancingMorph:Xe&&te.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:ae===null?s.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:lo,alphaToCoverage:!!P.alphaToCoverage,map:dt,matcap:tn,envMap:pt,envMapMode:pt&&fe.mapping,envMapCubeUVHeight:H,aoMap:It,lightMap:k,bumpMap:_t,normalMap:xt,displacementMap:g&&Pt,emissiveMap:ze,normalMapObjectSpace:xt&&P.normalMapType===X_,normalMapTangentSpace:xt&&P.normalMapType===W0,metalnessMap:Dt,roughnessMap:Ye,anisotropy:at,anisotropyMap:ce,clearcoat:N,clearcoatMap:Ze,clearcoatNormalMap:Re,clearcoatRoughnessMap:$e,dispersion:w,iridescence:J,iridescenceMap:qe,iridescenceThicknessMap:ge,sheen:de,sheenColorMap:Ae,sheenRoughnessMap:rt,specularMap:et,specularColorMap:Ue,specularIntensityMap:st,transmission:pe,transmissionMap:B,thicknessMap:Pe,gradientMap:we,opaque:P.transparent===!1&&P.blending===no&&P.alphaToCoverage===!1,alphaMap:Te,alphaTest:Se,alphaHash:he,combine:P.combine,mapUv:dt&&T(P.map.channel),aoMapUv:It&&T(P.aoMap.channel),lightMapUv:k&&T(P.lightMap.channel),bumpMapUv:_t&&T(P.bumpMap.channel),normalMapUv:xt&&T(P.normalMap.channel),displacementMapUv:Pt&&T(P.displacementMap.channel),emissiveMapUv:ze&&T(P.emissiveMap.channel),metalnessMapUv:Dt&&T(P.metalnessMap.channel),roughnessMapUv:Ye&&T(P.roughnessMap.channel),anisotropyMapUv:ce&&T(P.anisotropyMap.channel),clearcoatMapUv:Ze&&T(P.clearcoatMap.channel),clearcoatNormalMapUv:Re&&T(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$e&&T(P.clearcoatRoughnessMap.channel),iridescenceMapUv:qe&&T(P.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&T(P.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&T(P.sheenColorMap.channel),sheenRoughnessMapUv:rt&&T(P.sheenRoughnessMap.channel),specularMapUv:et&&T(P.specularMap.channel),specularColorMapUv:Ue&&T(P.specularColorMap.channel),specularIntensityMapUv:st&&T(P.specularIntensityMap.channel),transmissionMapUv:B&&T(P.transmissionMap.channel),thicknessMapUv:Pe&&T(P.thicknessMap.channel),alphaMapUv:Te&&T(P.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(xt||at),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!re.attributes.uv&&(dt||Te),fog:!!oe,useFog:P.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:P.flatShading===!0&&P.wireframe===!1,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:ve,skinning:te.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:_e,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:lt,decodeVideoTexture:dt&&P.map.isVideoTexture===!0&&At.getTransfer(P.map.colorSpace)===Nt,decodeVideoTextureEmissive:ze&&P.emissiveMap.isVideoTexture===!0&&At.getTransfer(P.emissiveMap.colorSpace)===Nt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Mi,flipSided:P.side===jn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:Be&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&P.extensions.multiDraw===!0||We)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Ut.vertexUv1s=p.has(1),Ut.vertexUv2s=p.has(2),Ut.vertexUv3s=p.has(3),p.clear(),Ut}function x(P){const b=[];if(P.shaderID?b.push(P.shaderID):(b.push(P.customVertexShaderID),b.push(P.customFragmentShaderID)),P.defines!==void 0)for(const z in P.defines)b.push(z),b.push(P.defines[z]);return P.isRawShaderMaterial===!1&&(A(b,P),C(b,P),b.push(s.outputColorSpace)),b.push(P.customProgramCacheKey),b.join()}function A(P,b){P.push(b.precision),P.push(b.outputColorSpace),P.push(b.envMapMode),P.push(b.envMapCubeUVHeight),P.push(b.mapUv),P.push(b.alphaMapUv),P.push(b.lightMapUv),P.push(b.aoMapUv),P.push(b.bumpMapUv),P.push(b.normalMapUv),P.push(b.displacementMapUv),P.push(b.emissiveMapUv),P.push(b.metalnessMapUv),P.push(b.roughnessMapUv),P.push(b.anisotropyMapUv),P.push(b.clearcoatMapUv),P.push(b.clearcoatNormalMapUv),P.push(b.clearcoatRoughnessMapUv),P.push(b.iridescenceMapUv),P.push(b.iridescenceThicknessMapUv),P.push(b.sheenColorMapUv),P.push(b.sheenRoughnessMapUv),P.push(b.specularMapUv),P.push(b.specularColorMapUv),P.push(b.specularIntensityMapUv),P.push(b.transmissionMapUv),P.push(b.thicknessMapUv),P.push(b.combine),P.push(b.fogExp2),P.push(b.sizeAttenuation),P.push(b.morphTargetsCount),P.push(b.morphAttributeCount),P.push(b.numDirLights),P.push(b.numPointLights),P.push(b.numSpotLights),P.push(b.numSpotLightMaps),P.push(b.numHemiLights),P.push(b.numRectAreaLights),P.push(b.numDirLightShadows),P.push(b.numPointLightShadows),P.push(b.numSpotLightShadows),P.push(b.numSpotLightShadowsWithMaps),P.push(b.numLightProbes),P.push(b.shadowMapType),P.push(b.toneMapping),P.push(b.numClippingPlanes),P.push(b.numClipIntersection),P.push(b.depthPacking)}function C(P,b){f.disableAll(),b.supportsVertexTextures&&f.enable(0),b.instancing&&f.enable(1),b.instancingColor&&f.enable(2),b.instancingMorph&&f.enable(3),b.matcap&&f.enable(4),b.envMap&&f.enable(5),b.normalMapObjectSpace&&f.enable(6),b.normalMapTangentSpace&&f.enable(7),b.clearcoat&&f.enable(8),b.iridescence&&f.enable(9),b.alphaTest&&f.enable(10),b.vertexColors&&f.enable(11),b.vertexAlphas&&f.enable(12),b.vertexUv1s&&f.enable(13),b.vertexUv2s&&f.enable(14),b.vertexUv3s&&f.enable(15),b.vertexTangents&&f.enable(16),b.anisotropy&&f.enable(17),b.alphaHash&&f.enable(18),b.batching&&f.enable(19),b.dispersion&&f.enable(20),b.batchingColor&&f.enable(21),b.gradientMap&&f.enable(22),P.push(f.mask),f.disableAll(),b.fog&&f.enable(0),b.useFog&&f.enable(1),b.flatShading&&f.enable(2),b.logarithmicDepthBuffer&&f.enable(3),b.reversedDepthBuffer&&f.enable(4),b.skinning&&f.enable(5),b.morphTargets&&f.enable(6),b.morphNormals&&f.enable(7),b.morphColors&&f.enable(8),b.premultipliedAlpha&&f.enable(9),b.shadowMapEnabled&&f.enable(10),b.doubleSided&&f.enable(11),b.flipSided&&f.enable(12),b.useDepthPacking&&f.enable(13),b.dithering&&f.enable(14),b.transmission&&f.enable(15),b.sheen&&f.enable(16),b.opaque&&f.enable(17),b.pointsUvs&&f.enable(18),b.decodeVideoTexture&&f.enable(19),b.decodeVideoTextureEmissive&&f.enable(20),b.alphaToCoverage&&f.enable(21),P.push(f.mask)}function L(P){const b=E[P.type];let z;if(b){const j=Li[b];z=Nv.clone(j.uniforms)}else z=P.uniforms;return z}function U(P,b){let z;for(let j=0,te=v.length;j<te;j++){const oe=v[j];if(oe.cacheKey===b){z=oe,++z.usedTimes;break}}return z===void 0&&(z=new fE(s,b,P,l),v.push(z)),z}function D(P){if(--P.usedTimes===0){const b=v.indexOf(P);v[b]=v[v.length-1],v.pop(),P.destroy()}}function O(P){h.remove(P)}function G(){h.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:L,acquireProgram:U,releaseProgram:D,releaseShaderCache:O,programs:v,dispose:G}}function xE(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function a(u,f,h){s.get(u)[f]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:l}}function gE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function S0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function M0(){const s=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function u(_,g,S,E,T,y){let x=s[e];return x===void 0?(x={id:_.id,object:_,geometry:g,material:S,groupOrder:E,renderOrder:_.renderOrder,z:T,group:y},s[e]=x):(x.id=_.id,x.object=_,x.geometry=g,x.material=S,x.groupOrder=E,x.renderOrder=_.renderOrder,x.z=T,x.group=y),e++,x}function f(_,g,S,E,T,y){const x=u(_,g,S,E,T,y);S.transmission>0?r.push(x):S.transparent===!0?a.push(x):t.push(x)}function h(_,g,S,E,T,y){const x=u(_,g,S,E,T,y);S.transmission>0?r.unshift(x):S.transparent===!0?a.unshift(x):t.unshift(x)}function p(_,g){t.length>1&&t.sort(_||gE),r.length>1&&r.sort(g||S0),a.length>1&&a.sort(g||S0)}function v(){for(let _=e,g=s.length;_<g;_++){const S=s[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:f,unshift:h,finish:v,sort:p}}function _E(){let s=new WeakMap;function e(r,a){const l=s.get(r);let u;return l===void 0?(u=new M0,s.set(r,[u])):a>=l.length?(u=new M0,l.push(u)):u=l[a],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function vE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new Mt};break;case"SpotLight":t={position:new W,direction:new W,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":t={color:new Mt,position:new W,halfWidth:new W,halfHeight:new W};break}return s[e.id]=t,t}}}function yE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let SE=0;function ME(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function EE(s){const e=new vE,t=yE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new W);const a=new W,l=new Ht,u=new Ht;function f(p){let v=0,_=0,g=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let S=0,E=0,T=0,y=0,x=0,A=0,C=0,L=0,U=0,D=0,O=0;p.sort(ME);for(let P=0,b=p.length;P<b;P++){const z=p[P],j=z.color,te=z.intensity,oe=z.distance,re=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)v+=j.r*te,_+=j.g*te,g+=j.b*te;else if(z.isLightProbe){for(let ue=0;ue<9;ue++)r.probe[ue].addScaledVector(z.sh.coefficients[ue],te);O++}else if(z.isDirectionalLight){const ue=e.get(z);if(ue.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const fe=z.shadow,H=t.get(z);H.shadowIntensity=fe.intensity,H.shadowBias=fe.bias,H.shadowNormalBias=fe.normalBias,H.shadowRadius=fe.radius,H.shadowMapSize=fe.mapSize,r.directionalShadow[S]=H,r.directionalShadowMap[S]=re,r.directionalShadowMatrix[S]=z.shadow.matrix,A++}r.directional[S]=ue,S++}else if(z.isSpotLight){const ue=e.get(z);ue.position.setFromMatrixPosition(z.matrixWorld),ue.color.copy(j).multiplyScalar(te),ue.distance=oe,ue.coneCos=Math.cos(z.angle),ue.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ue.decay=z.decay,r.spot[T]=ue;const fe=z.shadow;if(z.map&&(r.spotLightMap[U]=z.map,U++,fe.updateMatrices(z),z.castShadow&&D++),r.spotLightMatrix[T]=fe.matrix,z.castShadow){const H=t.get(z);H.shadowIntensity=fe.intensity,H.shadowBias=fe.bias,H.shadowNormalBias=fe.normalBias,H.shadowRadius=fe.radius,H.shadowMapSize=fe.mapSize,r.spotShadow[T]=H,r.spotShadowMap[T]=re,L++}T++}else if(z.isRectAreaLight){const ue=e.get(z);ue.color.copy(j).multiplyScalar(te),ue.halfWidth.set(z.width*.5,0,0),ue.halfHeight.set(0,z.height*.5,0),r.rectArea[y]=ue,y++}else if(z.isPointLight){const ue=e.get(z);if(ue.color.copy(z.color).multiplyScalar(z.intensity),ue.distance=z.distance,ue.decay=z.decay,z.castShadow){const fe=z.shadow,H=t.get(z);H.shadowIntensity=fe.intensity,H.shadowBias=fe.bias,H.shadowNormalBias=fe.normalBias,H.shadowRadius=fe.radius,H.shadowMapSize=fe.mapSize,H.shadowCameraNear=fe.camera.near,H.shadowCameraFar=fe.camera.far,r.pointShadow[E]=H,r.pointShadowMap[E]=re,r.pointShadowMatrix[E]=z.shadow.matrix,C++}r.point[E]=ue,E++}else if(z.isHemisphereLight){const ue=e.get(z);ue.skyColor.copy(z.color).multiplyScalar(te),ue.groundColor.copy(z.groundColor).multiplyScalar(te),r.hemi[x]=ue,x++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Le.LTC_FLOAT_1,r.rectAreaLTC2=Le.LTC_FLOAT_2):(r.rectAreaLTC1=Le.LTC_HALF_1,r.rectAreaLTC2=Le.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=g;const G=r.hash;(G.directionalLength!==S||G.pointLength!==E||G.spotLength!==T||G.rectAreaLength!==y||G.hemiLength!==x||G.numDirectionalShadows!==A||G.numPointShadows!==C||G.numSpotShadows!==L||G.numSpotMaps!==U||G.numLightProbes!==O)&&(r.directional.length=S,r.spot.length=T,r.rectArea.length=y,r.point.length=E,r.hemi.length=x,r.directionalShadow.length=A,r.directionalShadowMap.length=A,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=A,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=L+U-D,r.spotLightMap.length=U,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=O,G.directionalLength=S,G.pointLength=E,G.spotLength=T,G.rectAreaLength=y,G.hemiLength=x,G.numDirectionalShadows=A,G.numPointShadows=C,G.numSpotShadows=L,G.numSpotMaps=U,G.numLightProbes=O,r.version=SE++)}function h(p,v){let _=0,g=0,S=0,E=0,T=0;const y=v.matrixWorldInverse;for(let x=0,A=p.length;x<A;x++){const C=p[x];if(C.isDirectionalLight){const L=r.directional[_];L.direction.setFromMatrixPosition(C.matrixWorld),a.setFromMatrixPosition(C.target.matrixWorld),L.direction.sub(a),L.direction.transformDirection(y),_++}else if(C.isSpotLight){const L=r.spot[S];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(y),L.direction.setFromMatrixPosition(C.matrixWorld),a.setFromMatrixPosition(C.target.matrixWorld),L.direction.sub(a),L.direction.transformDirection(y),S++}else if(C.isRectAreaLight){const L=r.rectArea[E];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(y),u.identity(),l.copy(C.matrixWorld),l.premultiply(y),u.extractRotation(l),L.halfWidth.set(C.width*.5,0,0),L.halfHeight.set(0,C.height*.5,0),L.halfWidth.applyMatrix4(u),L.halfHeight.applyMatrix4(u),E++}else if(C.isPointLight){const L=r.point[g];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(y),g++}else if(C.isHemisphereLight){const L=r.hemi[T];L.direction.setFromMatrixPosition(C.matrixWorld),L.direction.transformDirection(y),T++}}}return{setup:f,setupView:h,state:r}}function E0(s){const e=new EE(s),t=[],r=[];function a(v){p.camera=v,t.length=0,r.length=0}function l(v){t.push(v)}function u(v){r.push(v)}function f(){e.setup(t)}function h(v){e.setupView(t,v)}const p={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:p,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:u}}function wE(s){let e=new WeakMap;function t(a,l=0){const u=e.get(a);let f;return u===void 0?(f=new E0(s),e.set(a,[f])):l>=u.length?(f=new E0(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const TE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bE=`uniform sampler2D shadow_pass;
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
}`;function AE(s,e,t){let r=new Od;const a=new ut,l=new ut,u=new Jt,f=new qv({depthPacking:W_}),h=new Zv,p={},v=t.maxTextureSize,_={[Or]:jn,[jn]:Or,[Mi]:Mi},g=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:TE,fragmentShader:bE}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const E=new Dn;E.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Ie(E,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=U0;let x=this.type;this.render=function(D,O,G){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||D.length===0)return;const P=s.getRenderTarget(),b=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),j=s.state;j.setBlending(tr),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const te=x!==$i&&this.type===$i,oe=x===$i&&this.type!==$i;for(let re=0,ue=D.length;re<ue;re++){const fe=D[re],H=fe.shadow;if(H===void 0){ft("WebGLShadowMap:",fe,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;a.copy(H.mapSize);const ne=H.getFrameExtents();if(a.multiply(ne),l.copy(H.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(l.x=Math.floor(v/ne.x),a.x=l.x*ne.x,H.mapSize.x=l.x),a.y>v&&(l.y=Math.floor(v/ne.y),a.y=l.y*ne.y,H.mapSize.y=l.y)),H.map===null||te===!0||oe===!0){const K=this.type!==$i?{minFilter:ti,magFilter:ti}:{};H.map!==null&&H.map.dispose(),H.map=new us(a.x,a.y,K),H.map.texture.name=fe.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const I=H.getViewportCount();for(let K=0;K<I;K++){const _e=H.getViewport(K);u.set(l.x*_e.x,l.y*_e.y,l.x*_e.z,l.y*_e.w),j.viewport(u),H.updateMatrices(fe,K),r=H.getFrustum(),L(O,G,H.camera,fe,this.type)}H.isPointLightShadow!==!0&&this.type===$i&&A(H,G),H.needsUpdate=!1}x=this.type,y.needsUpdate=!1,s.setRenderTarget(P,b,z)};function A(D,O){const G=e.update(T);g.defines.VSM_SAMPLES!==D.blurSamples&&(g.defines.VSM_SAMPLES=D.blurSamples,S.defines.VSM_SAMPLES=D.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new us(a.x,a.y)),g.uniforms.shadow_pass.value=D.map.texture,g.uniforms.resolution.value=D.mapSize,g.uniforms.radius.value=D.radius,s.setRenderTarget(D.mapPass),s.clear(),s.renderBufferDirect(O,null,G,g,T,null),S.uniforms.shadow_pass.value=D.mapPass.texture,S.uniforms.resolution.value=D.mapSize,S.uniforms.radius.value=D.radius,s.setRenderTarget(D.map),s.clear(),s.renderBufferDirect(O,null,G,S,T,null)}function C(D,O,G,P){let b=null;const z=G.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(z!==void 0)b=z;else if(b=G.isPointLight===!0?h:f,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const j=b.uuid,te=O.uuid;let oe=p[j];oe===void 0&&(oe={},p[j]=oe);let re=oe[te];re===void 0&&(re=b.clone(),oe[te]=re,O.addEventListener("dispose",U)),b=re}if(b.visible=O.visible,b.wireframe=O.wireframe,P===$i?b.side=O.shadowSide!==null?O.shadowSide:O.side:b.side=O.shadowSide!==null?O.shadowSide:_[O.side],b.alphaMap=O.alphaMap,b.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,b.map=O.map,b.clipShadows=O.clipShadows,b.clippingPlanes=O.clippingPlanes,b.clipIntersection=O.clipIntersection,b.displacementMap=O.displacementMap,b.displacementScale=O.displacementScale,b.displacementBias=O.displacementBias,b.wireframeLinewidth=O.wireframeLinewidth,b.linewidth=O.linewidth,G.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const j=s.properties.get(b);j.light=G}return b}function L(D,O,G,P,b){if(D.visible===!1)return;if(D.layers.test(O.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&b===$i)&&(!D.frustumCulled||r.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,D.matrixWorld);const te=e.update(D),oe=D.material;if(Array.isArray(oe)){const re=te.groups;for(let ue=0,fe=re.length;ue<fe;ue++){const H=re[ue],ne=oe[H.materialIndex];if(ne&&ne.visible){const I=C(D,ne,P,b);D.onBeforeShadow(s,D,O,G,te,I,H),s.renderBufferDirect(G,null,te,I,D,H),D.onAfterShadow(s,D,O,G,te,I,H)}}}else if(oe.visible){const re=C(D,oe,P,b);D.onBeforeShadow(s,D,O,G,te,re,null),s.renderBufferDirect(G,null,te,re,D,null),D.onAfterShadow(s,D,O,G,te,re,null)}}const j=D.children;for(let te=0,oe=j.length;te<oe;te++)L(j[te],O,G,P,b)}function U(D){D.target.removeEventListener("dispose",U);for(const G in p){const P=p[G],b=D.target.uuid;b in P&&(P[b].dispose(),delete P[b])}}}const CE={[kf]:zf,[Bf]:Gf,[Vf]:Wf,[so]:Hf,[zf]:kf,[Gf]:Bf,[Wf]:Vf,[Hf]:so};function RE(s,e){function t(){let B=!1;const Pe=new Jt;let we=null;const Te=new Jt(0,0,0,0);return{setMask:function(Se){we!==Se&&!B&&(s.colorMask(Se,Se,Se,Se),we=Se)},setLocked:function(Se){B=Se},setClear:function(Se,he,Be,lt,Ut){Ut===!0&&(Se*=lt,he*=lt,Be*=lt),Pe.set(Se,he,Be,lt),Te.equals(Pe)===!1&&(s.clearColor(Se,he,Be,lt),Te.copy(Pe))},reset:function(){B=!1,we=null,Te.set(-1,0,0,0)}}}function r(){let B=!1,Pe=!1,we=null,Te=null,Se=null;return{setReversed:function(he){if(Pe!==he){const Be=e.get("EXT_clip_control");he?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),Pe=he;const lt=Se;Se=null,this.setClear(lt)}},getReversed:function(){return Pe},setTest:function(he){he?ae(s.DEPTH_TEST):ve(s.DEPTH_TEST)},setMask:function(he){we!==he&&!B&&(s.depthMask(he),we=he)},setFunc:function(he){if(Pe&&(he=CE[he]),Te!==he){switch(he){case kf:s.depthFunc(s.NEVER);break;case zf:s.depthFunc(s.ALWAYS);break;case Bf:s.depthFunc(s.LESS);break;case so:s.depthFunc(s.LEQUAL);break;case Vf:s.depthFunc(s.EQUAL);break;case Hf:s.depthFunc(s.GEQUAL);break;case Gf:s.depthFunc(s.GREATER);break;case Wf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Te=he}},setLocked:function(he){B=he},setClear:function(he){Se!==he&&(Pe&&(he=1-he),s.clearDepth(he),Se=he)},reset:function(){B=!1,we=null,Te=null,Se=null,Pe=!1}}}function a(){let B=!1,Pe=null,we=null,Te=null,Se=null,he=null,Be=null,lt=null,Ut=null;return{setTest:function(wt){B||(wt?ae(s.STENCIL_TEST):ve(s.STENCIL_TEST))},setMask:function(wt){Pe!==wt&&!B&&(s.stencilMask(wt),Pe=wt)},setFunc:function(wt,Yn,_n){(we!==wt||Te!==Yn||Se!==_n)&&(s.stencilFunc(wt,Yn,_n),we=wt,Te=Yn,Se=_n)},setOp:function(wt,Yn,_n){(he!==wt||Be!==Yn||lt!==_n)&&(s.stencilOp(wt,Yn,_n),he=wt,Be=Yn,lt=_n)},setLocked:function(wt){B=wt},setClear:function(wt){Ut!==wt&&(s.clearStencil(wt),Ut=wt)},reset:function(){B=!1,Pe=null,we=null,Te=null,Se=null,he=null,Be=null,lt=null,Ut=null}}}const l=new t,u=new r,f=new a,h=new WeakMap,p=new WeakMap;let v={},_={},g=new WeakMap,S=[],E=null,T=!1,y=null,x=null,A=null,C=null,L=null,U=null,D=null,O=new Mt(0,0,0),G=0,P=!1,b=null,z=null,j=null,te=null,oe=null;const re=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ue=!1,fe=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec(H)[1]),ue=fe>=1):H.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),ue=fe>=2);let ne=null,I={};const K=s.getParameter(s.SCISSOR_BOX),_e=s.getParameter(s.VIEWPORT),Fe=new Jt().fromArray(K),le=new Jt().fromArray(_e);function Ee(B,Pe,we,Te){const Se=new Uint8Array(4),he=s.createTexture();s.bindTexture(B,he),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Be=0;Be<we;Be++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(Pe,0,s.RGBA,1,1,Te,0,s.RGBA,s.UNSIGNED_BYTE,Se):s.texImage2D(Pe+Be,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Se);return he}const $={};$[s.TEXTURE_2D]=Ee(s.TEXTURE_2D,s.TEXTURE_2D,1),$[s.TEXTURE_CUBE_MAP]=Ee(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[s.TEXTURE_2D_ARRAY]=Ee(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),$[s.TEXTURE_3D]=Ee(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ae(s.DEPTH_TEST),u.setFunc(so),_t(!1),xt(vm),ae(s.CULL_FACE),It(tr);function ae(B){v[B]!==!0&&(s.enable(B),v[B]=!0)}function ve(B){v[B]!==!1&&(s.disable(B),v[B]=!1)}function Xe(B,Pe){return _[B]!==Pe?(s.bindFramebuffer(B,Pe),_[B]=Pe,B===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Pe),B===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Pe),!0):!1}function We(B,Pe){let we=S,Te=!1;if(B){we=g.get(Pe),we===void 0&&(we=[],g.set(Pe,we));const Se=B.textures;if(we.length!==Se.length||we[0]!==s.COLOR_ATTACHMENT0){for(let he=0,Be=Se.length;he<Be;he++)we[he]=s.COLOR_ATTACHMENT0+he;we.length=Se.length,Te=!0}}else we[0]!==s.BACK&&(we[0]=s.BACK,Te=!0);Te&&s.drawBuffers(we)}function dt(B){return E!==B?(s.useProgram(B),E=B,!0):!1}const tn={[ss]:s.FUNC_ADD,[x_]:s.FUNC_SUBTRACT,[g_]:s.FUNC_REVERSE_SUBTRACT};tn[__]=s.MIN,tn[v_]=s.MAX;const pt={[y_]:s.ZERO,[S_]:s.ONE,[M_]:s.SRC_COLOR,[Ff]:s.SRC_ALPHA,[C_]:s.SRC_ALPHA_SATURATE,[b_]:s.DST_COLOR,[w_]:s.DST_ALPHA,[E_]:s.ONE_MINUS_SRC_COLOR,[Of]:s.ONE_MINUS_SRC_ALPHA,[A_]:s.ONE_MINUS_DST_COLOR,[T_]:s.ONE_MINUS_DST_ALPHA,[R_]:s.CONSTANT_COLOR,[P_]:s.ONE_MINUS_CONSTANT_COLOR,[D_]:s.CONSTANT_ALPHA,[L_]:s.ONE_MINUS_CONSTANT_ALPHA};function It(B,Pe,we,Te,Se,he,Be,lt,Ut,wt){if(B===tr){T===!0&&(ve(s.BLEND),T=!1);return}if(T===!1&&(ae(s.BLEND),T=!0),B!==m_){if(B!==y||wt!==P){if((x!==ss||L!==ss)&&(s.blendEquation(s.FUNC_ADD),x=ss,L=ss),wt)switch(B){case no:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ym:s.blendFunc(s.ONE,s.ONE);break;case Sm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Mm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Qt("WebGLState: Invalid blending: ",B);break}else switch(B){case no:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ym:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Sm:Qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mm:Qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qt("WebGLState: Invalid blending: ",B);break}A=null,C=null,U=null,D=null,O.set(0,0,0),G=0,y=B,P=wt}return}Se=Se||Pe,he=he||we,Be=Be||Te,(Pe!==x||Se!==L)&&(s.blendEquationSeparate(tn[Pe],tn[Se]),x=Pe,L=Se),(we!==A||Te!==C||he!==U||Be!==D)&&(s.blendFuncSeparate(pt[we],pt[Te],pt[he],pt[Be]),A=we,C=Te,U=he,D=Be),(lt.equals(O)===!1||Ut!==G)&&(s.blendColor(lt.r,lt.g,lt.b,Ut),O.copy(lt),G=Ut),y=B,P=!1}function k(B,Pe){B.side===Mi?ve(s.CULL_FACE):ae(s.CULL_FACE);let we=B.side===jn;Pe&&(we=!we),_t(we),B.blending===no&&B.transparent===!1?It(tr):It(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),u.setFunc(B.depthFunc),u.setTest(B.depthTest),u.setMask(B.depthWrite),l.setMask(B.colorWrite);const Te=B.stencilWrite;f.setTest(Te),Te&&(f.setMask(B.stencilWriteMask),f.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),f.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ze(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ae(s.SAMPLE_ALPHA_TO_COVERAGE):ve(s.SAMPLE_ALPHA_TO_COVERAGE)}function _t(B){b!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),b=B)}function xt(B){B!==d_?(ae(s.CULL_FACE),B!==z&&(B===vm?s.cullFace(s.BACK):B===h_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ve(s.CULL_FACE),z=B}function Pt(B){B!==j&&(ue&&s.lineWidth(B),j=B)}function ze(B,Pe,we){B?(ae(s.POLYGON_OFFSET_FILL),(te!==Pe||oe!==we)&&(s.polygonOffset(Pe,we),te=Pe,oe=we)):ve(s.POLYGON_OFFSET_FILL)}function Dt(B){B?ae(s.SCISSOR_TEST):ve(s.SCISSOR_TEST)}function Ye(B){B===void 0&&(B=s.TEXTURE0+re-1),ne!==B&&(s.activeTexture(B),ne=B)}function at(B,Pe,we){we===void 0&&(ne===null?we=s.TEXTURE0+re-1:we=ne);let Te=I[we];Te===void 0&&(Te={type:void 0,texture:void 0},I[we]=Te),(Te.type!==B||Te.texture!==Pe)&&(ne!==we&&(s.activeTexture(we),ne=we),s.bindTexture(B,Pe||$[B]),Te.type=B,Te.texture=Pe)}function N(){const B=I[ne];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function w(){try{s.compressedTexImage2D(...arguments)}catch(B){B("WebGLState:",B)}}function J(){try{s.compressedTexImage3D(...arguments)}catch(B){B("WebGLState:",B)}}function de(){try{s.texSubImage2D(...arguments)}catch(B){B("WebGLState:",B)}}function pe(){try{s.texSubImage3D(...arguments)}catch(B){B("WebGLState:",B)}}function ce(){try{s.compressedTexSubImage2D(...arguments)}catch(B){B("WebGLState:",B)}}function Ze(){try{s.compressedTexSubImage3D(...arguments)}catch(B){B("WebGLState:",B)}}function Re(){try{s.texStorage2D(...arguments)}catch(B){B("WebGLState:",B)}}function $e(){try{s.texStorage3D(...arguments)}catch(B){B("WebGLState:",B)}}function qe(){try{s.texImage2D(...arguments)}catch(B){B("WebGLState:",B)}}function ge(){try{s.texImage3D(...arguments)}catch(B){B("WebGLState:",B)}}function Ae(B){Fe.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),Fe.copy(B))}function rt(B){le.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),le.copy(B))}function et(B,Pe){let we=p.get(Pe);we===void 0&&(we=new WeakMap,p.set(Pe,we));let Te=we.get(B);Te===void 0&&(Te=s.getUniformBlockIndex(Pe,B.name),we.set(B,Te))}function Ue(B,Pe){const Te=p.get(Pe).get(B);h.get(Pe)!==Te&&(s.uniformBlockBinding(Pe,Te,B.__bindingPointIndex),h.set(Pe,Te))}function st(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},ne=null,I={},_={},g=new WeakMap,S=[],E=null,T=!1,y=null,x=null,A=null,C=null,L=null,U=null,D=null,O=new Mt(0,0,0),G=0,P=!1,b=null,z=null,j=null,te=null,oe=null,Fe.set(0,0,s.canvas.width,s.canvas.height),le.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:ae,disable:ve,bindFramebuffer:Xe,drawBuffers:We,useProgram:dt,setBlending:It,setMaterial:k,setFlipSided:_t,setCullFace:xt,setLineWidth:Pt,setPolygonOffset:ze,setScissorTest:Dt,activeTexture:Ye,bindTexture:at,unbindTexture:N,compressedTexImage2D:w,compressedTexImage3D:J,texImage2D:qe,texImage3D:ge,updateUBOMapping:et,uniformBlockBinding:Ue,texStorage2D:Re,texStorage3D:$e,texSubImage2D:de,texSubImage3D:pe,compressedTexSubImage2D:ce,compressedTexSubImage3D:Ze,scissor:Ae,viewport:rt,reset:st}}function PE(s,e,t,r,a,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ut,v=new WeakMap;let _;const g=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,w){return S?new OffscreenCanvas(N,w):uc("canvas")}function T(N,w,J){let de=1;const pe=at(N);if((pe.width>J||pe.height>J)&&(de=J/Math.max(pe.width,pe.height)),de<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ce=Math.floor(de*pe.width),Ze=Math.floor(de*pe.height);_===void 0&&(_=E(ce,Ze));const Re=w?E(ce,Ze):_;return Re.width=ce,Re.height=Ze,Re.getContext("2d").drawImage(N,0,0,ce,Ze),ft("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+ce+"x"+Ze+")."),Re}else return"data"in N&&ft("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),N;return N}function y(N){return N.generateMipmaps}function x(N){s.generateMipmap(N)}function A(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function C(N,w,J,de,pe=!1){if(N!==null){if(s[N]!==void 0)return s[N];ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ce=w;if(w===s.RED&&(J===s.FLOAT&&(ce=s.R32F),J===s.HALF_FLOAT&&(ce=s.R16F),J===s.UNSIGNED_BYTE&&(ce=s.R8)),w===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(ce=s.R8UI),J===s.UNSIGNED_SHORT&&(ce=s.R16UI),J===s.UNSIGNED_INT&&(ce=s.R32UI),J===s.BYTE&&(ce=s.R8I),J===s.SHORT&&(ce=s.R16I),J===s.INT&&(ce=s.R32I)),w===s.RG&&(J===s.FLOAT&&(ce=s.RG32F),J===s.HALF_FLOAT&&(ce=s.RG16F),J===s.UNSIGNED_BYTE&&(ce=s.RG8)),w===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(ce=s.RG8UI),J===s.UNSIGNED_SHORT&&(ce=s.RG16UI),J===s.UNSIGNED_INT&&(ce=s.RG32UI),J===s.BYTE&&(ce=s.RG8I),J===s.SHORT&&(ce=s.RG16I),J===s.INT&&(ce=s.RG32I)),w===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(ce=s.RGB8UI),J===s.UNSIGNED_SHORT&&(ce=s.RGB16UI),J===s.UNSIGNED_INT&&(ce=s.RGB32UI),J===s.BYTE&&(ce=s.RGB8I),J===s.SHORT&&(ce=s.RGB16I),J===s.INT&&(ce=s.RGB32I)),w===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(ce=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(ce=s.RGBA16UI),J===s.UNSIGNED_INT&&(ce=s.RGBA32UI),J===s.BYTE&&(ce=s.RGBA8I),J===s.SHORT&&(ce=s.RGBA16I),J===s.INT&&(ce=s.RGBA32I)),w===s.RGB&&(J===s.UNSIGNED_INT_5_9_9_9_REV&&(ce=s.RGB9_E5),J===s.UNSIGNED_INT_10F_11F_11F_REV&&(ce=s.R11F_G11F_B10F)),w===s.RGBA){const Ze=pe?lc:At.getTransfer(de);J===s.FLOAT&&(ce=s.RGBA32F),J===s.HALF_FLOAT&&(ce=s.RGBA16F),J===s.UNSIGNED_BYTE&&(ce=Ze===Nt?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT_4_4_4_4&&(ce=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(ce=s.RGB5_A1)}return(ce===s.R16F||ce===s.R32F||ce===s.RG16F||ce===s.RG32F||ce===s.RGBA16F||ce===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function L(N,w){let J;return N?w===null||w===cs||w===ua?J=s.DEPTH24_STENCIL8:w===er?J=s.DEPTH32F_STENCIL8:w===ca&&(J=s.DEPTH24_STENCIL8,ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===cs||w===ua?J=s.DEPTH_COMPONENT24:w===er?J=s.DEPTH_COMPONENT32F:w===ca&&(J=s.DEPTH_COMPONENT16),J}function U(N,w){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==ti&&N.minFilter!==di?Math.log2(Math.max(w.width,w.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?w.mipmaps.length:1}function D(N){const w=N.target;w.removeEventListener("dispose",D),G(w),w.isVideoTexture&&v.delete(w)}function O(N){const w=N.target;w.removeEventListener("dispose",O),b(w)}function G(N){const w=r.get(N);if(w.__webglInit===void 0)return;const J=N.source,de=g.get(J);if(de){const pe=de[w.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&P(N),Object.keys(de).length===0&&g.delete(J)}r.remove(N)}function P(N){const w=r.get(N);s.deleteTexture(w.__webglTexture);const J=N.source,de=g.get(J);delete de[w.__cacheKey],u.memory.textures--}function b(N){const w=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(w.__webglFramebuffer[de]))for(let pe=0;pe<w.__webglFramebuffer[de].length;pe++)s.deleteFramebuffer(w.__webglFramebuffer[de][pe]);else s.deleteFramebuffer(w.__webglFramebuffer[de]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[de])}else{if(Array.isArray(w.__webglFramebuffer))for(let de=0;de<w.__webglFramebuffer.length;de++)s.deleteFramebuffer(w.__webglFramebuffer[de]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let de=0;de<w.__webglColorRenderbuffer.length;de++)w.__webglColorRenderbuffer[de]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[de]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const J=N.textures;for(let de=0,pe=J.length;de<pe;de++){const ce=r.get(J[de]);ce.__webglTexture&&(s.deleteTexture(ce.__webglTexture),u.memory.textures--),r.remove(J[de])}r.remove(N)}let z=0;function j(){z=0}function te(){const N=z;return N>=a.maxTextures&&ft("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+a.maxTextures),z+=1,N}function oe(N){const w=[];return w.push(N.wrapS),w.push(N.wrapT),w.push(N.wrapR||0),w.push(N.magFilter),w.push(N.minFilter),w.push(N.anisotropy),w.push(N.internalFormat),w.push(N.format),w.push(N.type),w.push(N.generateMipmaps),w.push(N.premultiplyAlpha),w.push(N.flipY),w.push(N.unpackAlignment),w.push(N.colorSpace),w.join()}function re(N,w){const J=r.get(N);if(N.isVideoTexture&&Dt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&J.__version!==N.version){const de=N.image;if(de===null)ft("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)ft("WebGLRenderer: Texture marked for update but image is incomplete");else{$(J,N,w);return}}else N.isExternalTexture&&(J.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+w)}function ue(N,w){const J=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&J.__version!==N.version){$(J,N,w);return}else N.isExternalTexture&&(J.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+w)}function fe(N,w){const J=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&J.__version!==N.version){$(J,N,w);return}t.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+w)}function H(N,w){const J=r.get(N);if(N.version>0&&J.__version!==N.version){ae(J,N,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+w)}const ne={[Yf]:s.REPEAT,[Ji]:s.CLAMP_TO_EDGE,[qf]:s.MIRRORED_REPEAT},I={[ti]:s.NEAREST,[H_]:s.NEAREST_MIPMAP_NEAREST,[Tl]:s.NEAREST_MIPMAP_LINEAR,[di]:s.LINEAR,[tf]:s.LINEAR_MIPMAP_NEAREST,[ls]:s.LINEAR_MIPMAP_LINEAR},K={[j_]:s.NEVER,[Q_]:s.ALWAYS,[Y_]:s.LESS,[X0]:s.LEQUAL,[q_]:s.EQUAL,[$_]:s.GEQUAL,[Z_]:s.GREATER,[K_]:s.NOTEQUAL};function _e(N,w){if(w.type===er&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===di||w.magFilter===tf||w.magFilter===Tl||w.magFilter===ls||w.minFilter===di||w.minFilter===tf||w.minFilter===Tl||w.minFilter===ls)&&ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,ne[w.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,ne[w.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,ne[w.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,I[w.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,I[w.minFilter]),w.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,K[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===ti||w.minFilter!==Tl&&w.minFilter!==ls||w.type===er&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function Fe(N,w){let J=!1;N.__webglInit===void 0&&(N.__webglInit=!0,w.addEventListener("dispose",D));const de=w.source;let pe=g.get(de);pe===void 0&&(pe={},g.set(de,pe));const ce=oe(w);if(ce!==N.__cacheKey){pe[ce]===void 0&&(pe[ce]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,J=!0),pe[ce].usedTimes++;const Ze=pe[N.__cacheKey];Ze!==void 0&&(pe[N.__cacheKey].usedTimes--,Ze.usedTimes===0&&P(w)),N.__cacheKey=ce,N.__webglTexture=pe[ce].texture}return J}function le(N,w,J){return Math.floor(Math.floor(N/J)/w)}function Ee(N,w,J,de){const ce=N.updateRanges;if(ce.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,J,de,w.data);else{ce.sort((ge,Ae)=>ge.start-Ae.start);let Ze=0;for(let ge=1;ge<ce.length;ge++){const Ae=ce[Ze],rt=ce[ge],et=Ae.start+Ae.count,Ue=le(rt.start,w.width,4),st=le(Ae.start,w.width,4);rt.start<=et+1&&Ue===st&&le(rt.start+rt.count-1,w.width,4)===Ue?Ae.count=Math.max(Ae.count,rt.start+rt.count-Ae.start):(++Ze,ce[Ze]=rt)}ce.length=Ze+1;const Re=s.getParameter(s.UNPACK_ROW_LENGTH),$e=s.getParameter(s.UNPACK_SKIP_PIXELS),qe=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let ge=0,Ae=ce.length;ge<Ae;ge++){const rt=ce[ge],et=Math.floor(rt.start/4),Ue=Math.ceil(rt.count/4),st=et%w.width,B=Math.floor(et/w.width),Pe=Ue,we=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,st),s.pixelStorei(s.UNPACK_SKIP_ROWS,B),t.texSubImage2D(s.TEXTURE_2D,0,st,B,Pe,we,J,de,w.data)}N.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Re),s.pixelStorei(s.UNPACK_SKIP_PIXELS,$e),s.pixelStorei(s.UNPACK_SKIP_ROWS,qe)}}function $(N,w,J){let de=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(de=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(de=s.TEXTURE_3D);const pe=Fe(N,w),ce=w.source;t.bindTexture(de,N.__webglTexture,s.TEXTURE0+J);const Ze=r.get(ce);if(ce.version!==Ze.__version||pe===!0){t.activeTexture(s.TEXTURE0+J);const Re=At.getPrimaries(At.workingColorSpace),$e=w.colorSpace===Ur?null:At.getPrimaries(w.colorSpace),qe=w.colorSpace===Ur||Re===$e?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let ge=T(w.image,!1,a.maxTextureSize);ge=Ye(w,ge);const Ae=l.convert(w.format,w.colorSpace),rt=l.convert(w.type);let et=C(w.internalFormat,Ae,rt,w.colorSpace,w.isVideoTexture);_e(de,w);let Ue;const st=w.mipmaps,B=w.isVideoTexture!==!0,Pe=Ze.__version===void 0||pe===!0,we=ce.dataReady,Te=U(w,ge);if(w.isDepthTexture)et=L(w.format===da,w.type),Pe&&(B?t.texStorage2D(s.TEXTURE_2D,1,et,ge.width,ge.height):t.texImage2D(s.TEXTURE_2D,0,et,ge.width,ge.height,0,Ae,rt,null));else if(w.isDataTexture)if(st.length>0){B&&Pe&&t.texStorage2D(s.TEXTURE_2D,Te,et,st[0].width,st[0].height);for(let Se=0,he=st.length;Se<he;Se++)Ue=st[Se],B?we&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,Ue.width,Ue.height,Ae,rt,Ue.data):t.texImage2D(s.TEXTURE_2D,Se,et,Ue.width,Ue.height,0,Ae,rt,Ue.data);w.generateMipmaps=!1}else B?(Pe&&t.texStorage2D(s.TEXTURE_2D,Te,et,ge.width,ge.height),we&&Ee(w,ge,Ae,rt)):t.texImage2D(s.TEXTURE_2D,0,et,ge.width,ge.height,0,Ae,rt,ge.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){B&&Pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Te,et,st[0].width,st[0].height,ge.depth);for(let Se=0,he=st.length;Se<he;Se++)if(Ue=st[Se],w.format!==Ei)if(Ae!==null)if(B){if(we)if(w.layerUpdates.size>0){const Be=e0(Ue.width,Ue.height,w.format,w.type);for(const lt of w.layerUpdates){const Ut=Ue.data.subarray(lt*Be/Ue.data.BYTES_PER_ELEMENT,(lt+1)*Be/Ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,lt,Ue.width,Ue.height,1,Ae,Ut)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,0,Ue.width,Ue.height,ge.depth,Ae,Ue.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Se,et,Ue.width,Ue.height,ge.depth,0,Ue.data,0,0);else ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?we&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,0,Ue.width,Ue.height,ge.depth,Ae,rt,Ue.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Se,et,Ue.width,Ue.height,ge.depth,0,Ae,rt,Ue.data)}else{B&&Pe&&t.texStorage2D(s.TEXTURE_2D,Te,et,st[0].width,st[0].height);for(let Se=0,he=st.length;Se<he;Se++)Ue=st[Se],w.format!==Ei?Ae!==null?B?we&&t.compressedTexSubImage2D(s.TEXTURE_2D,Se,0,0,Ue.width,Ue.height,Ae,Ue.data):t.compressedTexImage2D(s.TEXTURE_2D,Se,et,Ue.width,Ue.height,0,Ue.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?we&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,Ue.width,Ue.height,Ae,rt,Ue.data):t.texImage2D(s.TEXTURE_2D,Se,et,Ue.width,Ue.height,0,Ae,rt,Ue.data)}else if(w.isDataArrayTexture)if(B){if(Pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Te,et,ge.width,ge.height,ge.depth),we)if(w.layerUpdates.size>0){const Se=e0(ge.width,ge.height,w.format,w.type);for(const he of w.layerUpdates){const Be=ge.data.subarray(he*Se/ge.data.BYTES_PER_ELEMENT,(he+1)*Se/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,he,ge.width,ge.height,1,Ae,rt,Be)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Ae,rt,ge.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,et,ge.width,ge.height,ge.depth,0,Ae,rt,ge.data);else if(w.isData3DTexture)B?(Pe&&t.texStorage3D(s.TEXTURE_3D,Te,et,ge.width,ge.height,ge.depth),we&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Ae,rt,ge.data)):t.texImage3D(s.TEXTURE_3D,0,et,ge.width,ge.height,ge.depth,0,Ae,rt,ge.data);else if(w.isFramebufferTexture){if(Pe)if(B)t.texStorage2D(s.TEXTURE_2D,Te,et,ge.width,ge.height);else{let Se=ge.width,he=ge.height;for(let Be=0;Be<Te;Be++)t.texImage2D(s.TEXTURE_2D,Be,et,Se,he,0,Ae,rt,null),Se>>=1,he>>=1}}else if(st.length>0){if(B&&Pe){const Se=at(st[0]);t.texStorage2D(s.TEXTURE_2D,Te,et,Se.width,Se.height)}for(let Se=0,he=st.length;Se<he;Se++)Ue=st[Se],B?we&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,Ae,rt,Ue):t.texImage2D(s.TEXTURE_2D,Se,et,Ae,rt,Ue);w.generateMipmaps=!1}else if(B){if(Pe){const Se=at(ge);t.texStorage2D(s.TEXTURE_2D,Te,et,Se.width,Se.height)}we&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ae,rt,ge)}else t.texImage2D(s.TEXTURE_2D,0,et,Ae,rt,ge);y(w)&&x(de),Ze.__version=ce.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function ae(N,w,J){if(w.image.length!==6)return;const de=Fe(N,w),pe=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+J);const ce=r.get(pe);if(pe.version!==ce.__version||de===!0){t.activeTexture(s.TEXTURE0+J);const Ze=At.getPrimaries(At.workingColorSpace),Re=w.colorSpace===Ur?null:At.getPrimaries(w.colorSpace),$e=w.colorSpace===Ur||Ze===Re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);const qe=w.isCompressedTexture||w.image[0].isCompressedTexture,ge=w.image[0]&&w.image[0].isDataTexture,Ae=[];for(let he=0;he<6;he++)!qe&&!ge?Ae[he]=T(w.image[he],!0,a.maxCubemapSize):Ae[he]=ge?w.image[he].image:w.image[he],Ae[he]=Ye(w,Ae[he]);const rt=Ae[0],et=l.convert(w.format,w.colorSpace),Ue=l.convert(w.type),st=C(w.internalFormat,et,Ue,w.colorSpace),B=w.isVideoTexture!==!0,Pe=ce.__version===void 0||de===!0,we=pe.dataReady;let Te=U(w,rt);_e(s.TEXTURE_CUBE_MAP,w);let Se;if(qe){B&&Pe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Te,st,rt.width,rt.height);for(let he=0;he<6;he++){Se=Ae[he].mipmaps;for(let Be=0;Be<Se.length;Be++){const lt=Se[Be];w.format!==Ei?et!==null?B?we&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be,0,0,lt.width,lt.height,et,lt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be,st,lt.width,lt.height,0,lt.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?we&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be,0,0,lt.width,lt.height,et,Ue,lt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be,st,lt.width,lt.height,0,et,Ue,lt.data)}}}else{if(Se=w.mipmaps,B&&Pe){Se.length>0&&Te++;const he=at(Ae[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Te,st,he.width,he.height)}for(let he=0;he<6;he++)if(ge){B?we&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ae[he].width,Ae[he].height,et,Ue,Ae[he].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,st,Ae[he].width,Ae[he].height,0,et,Ue,Ae[he].data);for(let Be=0;Be<Se.length;Be++){const Ut=Se[Be].image[he].image;B?we&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be+1,0,0,Ut.width,Ut.height,et,Ue,Ut.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be+1,st,Ut.width,Ut.height,0,et,Ue,Ut.data)}}else{B?we&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,et,Ue,Ae[he]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,st,et,Ue,Ae[he]);for(let Be=0;Be<Se.length;Be++){const lt=Se[Be];B?we&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be+1,0,0,et,Ue,lt.image[he]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Be+1,st,et,Ue,lt.image[he])}}}y(w)&&x(s.TEXTURE_CUBE_MAP),ce.__version=pe.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function ve(N,w,J,de,pe,ce){const Ze=l.convert(J.format,J.colorSpace),Re=l.convert(J.type),$e=C(J.internalFormat,Ze,Re,J.colorSpace),qe=r.get(w),ge=r.get(J);if(ge.__renderTarget=w,!qe.__hasExternalTextures){const Ae=Math.max(1,w.width>>ce),rt=Math.max(1,w.height>>ce);pe===s.TEXTURE_3D||pe===s.TEXTURE_2D_ARRAY?t.texImage3D(pe,ce,$e,Ae,rt,w.depth,0,Ze,Re,null):t.texImage2D(pe,ce,$e,Ae,rt,0,Ze,Re,null)}t.bindFramebuffer(s.FRAMEBUFFER,N),ze(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,pe,ge.__webglTexture,0,Pt(w)):(pe===s.TEXTURE_2D||pe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,de,pe,ge.__webglTexture,ce),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Xe(N,w,J){if(s.bindRenderbuffer(s.RENDERBUFFER,N),w.depthBuffer){const de=w.depthTexture,pe=de&&de.isDepthTexture?de.type:null,ce=L(w.stencilBuffer,pe),Ze=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=Pt(w);ze(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Re,ce,w.width,w.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,Re,ce,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,ce,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ze,s.RENDERBUFFER,N)}else{const de=w.textures;for(let pe=0;pe<de.length;pe++){const ce=de[pe],Ze=l.convert(ce.format,ce.colorSpace),Re=l.convert(ce.type),$e=C(ce.internalFormat,Ze,Re,ce.colorSpace),qe=Pt(w);J&&ze(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,qe,$e,w.width,w.height):ze(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qe,$e,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,$e,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function We(N,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,N),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const de=r.get(w.depthTexture);de.__renderTarget=w,(!de.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),re(w.depthTexture,0);const pe=de.__webglTexture,ce=Pt(w);if(w.depthTexture.format===fa)ze(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pe,0,ce):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pe,0);else if(w.depthTexture.format===da)ze(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pe,0,ce):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function dt(N){const w=r.get(N),J=N.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==N.depthTexture){const de=N.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),de){const pe=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,de.removeEventListener("dispose",pe)};de.addEventListener("dispose",pe),w.__depthDisposeCallback=pe}w.__boundDepthTexture=de}if(N.depthTexture&&!w.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");const de=N.texture.mipmaps;de&&de.length>0?We(w.__webglFramebuffer[0],N):We(w.__webglFramebuffer,N)}else if(J){w.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[de]),w.__webglDepthbuffer[de]===void 0)w.__webglDepthbuffer[de]=s.createRenderbuffer(),Xe(w.__webglDepthbuffer[de],N,!1);else{const pe=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=w.__webglDepthbuffer[de];s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,ce)}}else{const de=N.texture.mipmaps;if(de&&de.length>0?t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),Xe(w.__webglDepthbuffer,N,!1);else{const pe=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,ce)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function tn(N,w,J){const de=r.get(N);w!==void 0&&ve(de.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&dt(N)}function pt(N){const w=N.texture,J=r.get(N),de=r.get(w);N.addEventListener("dispose",O);const pe=N.textures,ce=N.isWebGLCubeRenderTarget===!0,Ze=pe.length>1;if(Ze||(de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture()),de.__version=w.version,u.memory.textures++),ce){J.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer[Re]=[];for(let $e=0;$e<w.mipmaps.length;$e++)J.__webglFramebuffer[Re][$e]=s.createFramebuffer()}else J.__webglFramebuffer[Re]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer=[];for(let Re=0;Re<w.mipmaps.length;Re++)J.__webglFramebuffer[Re]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(Ze)for(let Re=0,$e=pe.length;Re<$e;Re++){const qe=r.get(pe[Re]);qe.__webglTexture===void 0&&(qe.__webglTexture=s.createTexture(),u.memory.textures++)}if(N.samples>0&&ze(N)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Re=0;Re<pe.length;Re++){const $e=pe[Re];J.__webglColorRenderbuffer[Re]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[Re]);const qe=l.convert($e.format,$e.colorSpace),ge=l.convert($e.type),Ae=C($e.internalFormat,qe,ge,$e.colorSpace,N.isXRRenderTarget===!0),rt=Pt(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,Ae,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,J.__webglColorRenderbuffer[Re])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),Xe(J.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ce){t.bindTexture(s.TEXTURE_CUBE_MAP,de.__webglTexture),_e(s.TEXTURE_CUBE_MAP,w);for(let Re=0;Re<6;Re++)if(w.mipmaps&&w.mipmaps.length>0)for(let $e=0;$e<w.mipmaps.length;$e++)ve(J.__webglFramebuffer[Re][$e],N,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,$e);else ve(J.__webglFramebuffer[Re],N,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);y(w)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ze){for(let Re=0,$e=pe.length;Re<$e;Re++){const qe=pe[Re],ge=r.get(qe);let Ae=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ae=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ae,ge.__webglTexture),_e(Ae,qe),ve(J.__webglFramebuffer,N,qe,s.COLOR_ATTACHMENT0+Re,Ae,0),y(qe)&&x(Ae)}t.unbindTexture()}else{let Re=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Re=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Re,de.__webglTexture),_e(Re,w),w.mipmaps&&w.mipmaps.length>0)for(let $e=0;$e<w.mipmaps.length;$e++)ve(J.__webglFramebuffer[$e],N,w,s.COLOR_ATTACHMENT0,Re,$e);else ve(J.__webglFramebuffer,N,w,s.COLOR_ATTACHMENT0,Re,0);y(w)&&x(Re),t.unbindTexture()}N.depthBuffer&&dt(N)}function It(N){const w=N.textures;for(let J=0,de=w.length;J<de;J++){const pe=w[J];if(y(pe)){const ce=A(N),Ze=r.get(pe).__webglTexture;t.bindTexture(ce,Ze),x(ce),t.unbindTexture()}}}const k=[],_t=[];function xt(N){if(N.samples>0){if(ze(N)===!1){const w=N.textures,J=N.width,de=N.height;let pe=s.COLOR_BUFFER_BIT;const ce=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ze=r.get(N),Re=w.length>1;if(Re)for(let qe=0;qe<w.length;qe++)t.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+qe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+qe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer);const $e=N.texture.mipmaps;$e&&$e.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer);for(let qe=0;qe<w.length;qe++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(pe|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(pe|=s.STENCIL_BUFFER_BIT)),Re){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ze.__webglColorRenderbuffer[qe]);const ge=r.get(w[qe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ge,0)}s.blitFramebuffer(0,0,J,de,0,0,J,de,pe,s.NEAREST),h===!0&&(k.length=0,_t.length=0,k.push(s.COLOR_ATTACHMENT0+qe),N.depthBuffer&&N.resolveDepthBuffer===!1&&(k.push(ce),_t.push(ce),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,_t)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,k))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Re)for(let qe=0;qe<w.length;qe++){t.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+qe,s.RENDERBUFFER,Ze.__webglColorRenderbuffer[qe]);const ge=r.get(w[qe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+qe,s.TEXTURE_2D,ge,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&h){const w=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function Pt(N){return Math.min(a.maxSamples,N.samples)}function ze(N){const w=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Dt(N){const w=u.render.frame;v.get(N)!==w&&(v.set(N,w),N.update())}function Ye(N,w){const J=N.colorSpace,de=N.format,pe=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||J!==lo&&J!==Ur&&(At.getTransfer(J)===Nt?(de!==Ei||pe!==Ni)&&ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qt("WebGLTextures: Unsupported texture color space:",J)),w}function at(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=te,this.resetTextureUnits=j,this.setTexture2D=re,this.setTexture2DArray=ue,this.setTexture3D=fe,this.setTextureCube=H,this.rebindTextures=tn,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=ze}function DE(s,e){function t(r,a=Ur){let l;const u=At.getTransfer(a);if(r===Ni)return s.UNSIGNED_BYTE;if(r===Cd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Rd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===z0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===B0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===O0)return s.BYTE;if(r===k0)return s.SHORT;if(r===ca)return s.UNSIGNED_SHORT;if(r===Ad)return s.INT;if(r===cs)return s.UNSIGNED_INT;if(r===er)return s.FLOAT;if(r===uo)return s.HALF_FLOAT;if(r===V0)return s.ALPHA;if(r===H0)return s.RGB;if(r===Ei)return s.RGBA;if(r===fa)return s.DEPTH_COMPONENT;if(r===da)return s.DEPTH_STENCIL;if(r===G0)return s.RED;if(r===Pd)return s.RED_INTEGER;if(r===Dd)return s.RG;if(r===Ld)return s.RG_INTEGER;if(r===Id)return s.RGBA_INTEGER;if(r===nc||r===ic||r===rc||r===sc)if(u===Nt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===nc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ic)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===rc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===sc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===nc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ic)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===rc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===sc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Zf||r===Kf||r===$f||r===Qf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Zf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Kf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===$f)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Qf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Jf||r===ed||r===td)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Jf||r===ed)return u===Nt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===td)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===nd||r===id||r===rd||r===sd||r===od||r===ad||r===ld||r===cd||r===ud||r===fd||r===dd||r===hd||r===pd||r===md)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===nd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===id)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===rd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===sd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===od)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ad)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ld)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===cd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ud)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===fd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===dd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===hd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===pd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===md)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===xd||r===gd||r===_d)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===xd)return u===Nt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===gd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===_d)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===vd||r===yd||r===Sd||r===Md)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===vd)return l.COMPRESSED_RED_RGTC1_EXT;if(r===yd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Sd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Md)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ua?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const LE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,IE=`
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

}`;class UE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new nx(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Fi({vertexShader:LE,fragmentShader:IE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ie(new po(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class NE extends fs{constructor(e,t){super();const r=this;let a=null,l=1,u=null,f="local-floor",h=1,p=null,v=null,_=null,g=null,S=null,E=null;const T=typeof XRWebGLBinding<"u",y=new UE,x={},A=t.getContextAttributes();let C=null,L=null;const U=[],D=[],O=new ut;let G=null;const P=new ui;P.viewport=new Jt;const b=new ui;b.viewport=new Jt;const z=[P,b],j=new ey;let te=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ae=U[$];return ae===void 0&&(ae=new Ef,U[$]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function($){let ae=U[$];return ae===void 0&&(ae=new Ef,U[$]=ae),ae.getGripSpace()},this.getHand=function($){let ae=U[$];return ae===void 0&&(ae=new Ef,U[$]=ae),ae.getHandSpace()};function re($){const ae=D.indexOf($.inputSource);if(ae===-1)return;const ve=U[ae];ve!==void 0&&(ve.update($.inputSource,$.frame,p||u),ve.dispatchEvent({type:$.type,data:$.inputSource}))}function ue(){a.removeEventListener("select",re),a.removeEventListener("selectstart",re),a.removeEventListener("selectend",re),a.removeEventListener("squeeze",re),a.removeEventListener("squeezestart",re),a.removeEventListener("squeezeend",re),a.removeEventListener("end",ue),a.removeEventListener("inputsourceschange",fe);for(let $=0;$<U.length;$++){const ae=D[$];ae!==null&&(D[$]=null,U[$].disconnect(ae))}te=null,oe=null,y.reset();for(const $ in x)delete x[$];e.setRenderTarget(C),S=null,g=null,_=null,a=null,L=null,Ee.stop(),r.isPresenting=!1,e.setPixelRatio(G),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){l=$,r.isPresenting===!0&&ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){f=$,r.isPresenting===!0&&ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function($){p=$},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return _===null&&T&&(_=new XRWebGLBinding(a,t)),_},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function($){if(a=$,a!==null){if(C=e.getRenderTarget(),a.addEventListener("select",re),a.addEventListener("selectstart",re),a.addEventListener("selectend",re),a.addEventListener("squeeze",re),a.addEventListener("squeezestart",re),a.addEventListener("squeezeend",re),a.addEventListener("end",ue),a.addEventListener("inputsourceschange",fe),A.xrCompatible!==!0&&await t.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(O),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Xe=null,We=null;A.depth&&(We=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=A.stencil?da:fa,Xe=A.stencil?ua:cs);const dt={colorFormat:t.RGBA8,depthFormat:We,scaleFactor:l};_=this.getBinding(),g=_.createProjectionLayer(dt),a.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),L=new us(g.textureWidth,g.textureHeight,{format:Ei,type:Ni,depthTexture:new tx(g.textureWidth,g.textureHeight,Xe,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const ve={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,ve),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new us(S.framebufferWidth,S.framebufferHeight,{format:Ei,type:Ni,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await a.requestReferenceSpace(f),Ee.setContext(a),Ee.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function fe($){for(let ae=0;ae<$.removed.length;ae++){const ve=$.removed[ae],Xe=D.indexOf(ve);Xe>=0&&(D[Xe]=null,U[Xe].disconnect(ve))}for(let ae=0;ae<$.added.length;ae++){const ve=$.added[ae];let Xe=D.indexOf(ve);if(Xe===-1){for(let dt=0;dt<U.length;dt++)if(dt>=D.length){D.push(ve),Xe=dt;break}else if(D[dt]===null){D[dt]=ve,Xe=dt;break}if(Xe===-1)break}const We=U[Xe];We&&We.connect(ve)}}const H=new W,ne=new W;function I($,ae,ve){H.setFromMatrixPosition(ae.matrixWorld),ne.setFromMatrixPosition(ve.matrixWorld);const Xe=H.distanceTo(ne),We=ae.projectionMatrix.elements,dt=ve.projectionMatrix.elements,tn=We[14]/(We[10]-1),pt=We[14]/(We[10]+1),It=(We[9]+1)/We[5],k=(We[9]-1)/We[5],_t=(We[8]-1)/We[0],xt=(dt[8]+1)/dt[0],Pt=tn*_t,ze=tn*xt,Dt=Xe/(-_t+xt),Ye=Dt*-_t;if(ae.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ye),$.translateZ(Dt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),We[10]===-1)$.projectionMatrix.copy(ae.projectionMatrix),$.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const at=tn+Dt,N=pt+Dt,w=Pt-Ye,J=ze+(Xe-Ye),de=It*pt/N*at,pe=k*pt/N*at;$.projectionMatrix.makePerspective(w,J,de,pe,at,N),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function K($,ae){ae===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ae.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(a===null)return;let ae=$.near,ve=$.far;y.texture!==null&&(y.depthNear>0&&(ae=y.depthNear),y.depthFar>0&&(ve=y.depthFar)),j.near=b.near=P.near=ae,j.far=b.far=P.far=ve,(te!==j.near||oe!==j.far)&&(a.updateRenderState({depthNear:j.near,depthFar:j.far}),te=j.near,oe=j.far),j.layers.mask=$.layers.mask|6,P.layers.mask=j.layers.mask&3,b.layers.mask=j.layers.mask&5;const Xe=$.parent,We=j.cameras;K(j,Xe);for(let dt=0;dt<We.length;dt++)K(We[dt],Xe);We.length===2?I(j,P,b):j.projectionMatrix.copy(P.projectionMatrix),_e($,j,Xe)};function _e($,ae,ve){ve===null?$.matrix.copy(ae.matrixWorld):($.matrix.copy(ve.matrixWorld),$.matrix.invert(),$.matrix.multiply(ae.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ae.projectionMatrix),$.projectionMatrixInverse.copy(ae.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=pa*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(g===null&&S===null))return h},this.setFoveation=function($){h=$,g!==null&&(g.fixedFoveation=$),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=$)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(j)},this.getCameraTexture=function($){return x[$]};let Fe=null;function le($,ae){if(v=ae.getViewerPose(p||u),E=ae,v!==null){const ve=v.views;S!==null&&(e.setRenderTargetFramebuffer(L,S.framebuffer),e.setRenderTarget(L));let Xe=!1;ve.length!==j.cameras.length&&(j.cameras.length=0,Xe=!0);for(let pt=0;pt<ve.length;pt++){const It=ve[pt];let k=null;if(S!==null)k=S.getViewport(It);else{const xt=_.getViewSubImage(g,It);k=xt.viewport,pt===0&&(e.setRenderTargetTextures(L,xt.colorTexture,xt.depthStencilTexture),e.setRenderTarget(L))}let _t=z[pt];_t===void 0&&(_t=new ui,_t.layers.enable(pt),_t.viewport=new Jt,z[pt]=_t),_t.matrix.fromArray(It.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(It.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(k.x,k.y,k.width,k.height),pt===0&&(j.matrix.copy(_t.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Xe===!0&&j.cameras.push(_t)}const We=a.enabledFeatures;if(We&&We.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&T){_=r.getBinding();const pt=_.getDepthInformation(ve[0]);pt&&pt.isValid&&pt.texture&&y.init(pt,a.renderState)}if(We&&We.includes("camera-access")&&T){e.state.unbindTexture(),_=r.getBinding();for(let pt=0;pt<ve.length;pt++){const It=ve[pt].camera;if(It){let k=x[It];k||(k=new nx,x[It]=k);const _t=_.getCameraImage(It);k.sourceTexture=_t}}}}for(let ve=0;ve<U.length;ve++){const Xe=D[ve],We=U[ve];Xe!==null&&We!==void 0&&We.update(Xe,ae,p||u)}Fe&&Fe($,ae),ae.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ae}),E=null}const Ee=new ax;Ee.setAnimationLoop(le),this.setAnimationLoop=function($){Fe=$},this.dispose=function(){}}}const ns=new wi,FE=new Ht;function OE(s,e){function t(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function r(y,x){x.color.getRGB(y.fogColor.value,Q0(s)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function a(y,x,A,C,L){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(y,x):x.isMeshToonMaterial?(l(y,x),_(y,x)):x.isMeshPhongMaterial?(l(y,x),v(y,x)):x.isMeshStandardMaterial?(l(y,x),g(y,x),x.isMeshPhysicalMaterial&&S(y,x,L)):x.isMeshMatcapMaterial?(l(y,x),E(y,x)):x.isMeshDepthMaterial?l(y,x):x.isMeshDistanceMaterial?(l(y,x),T(y,x)):x.isMeshNormalMaterial?l(y,x):x.isLineBasicMaterial?(u(y,x),x.isLineDashedMaterial&&f(y,x)):x.isPointsMaterial?h(y,x,A,C):x.isSpriteMaterial?p(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,t(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===jn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,t(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===jn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,t(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,t(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const A=e.get(x),C=A.envMap,L=A.envMapRotation;C&&(y.envMap.value=C,ns.copy(L),ns.x*=-1,ns.y*=-1,ns.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),y.envMapRotation.value.setFromMatrix4(FE.makeRotationFromEuler(ns)),y.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,y.aoMapTransform))}function u(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform))}function f(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function h(y,x,A,C){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*A,y.scale.value=C*.5,x.map&&(y.map.value=x.map,t(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function v(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function _(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function g(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,A){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===jn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=A.texture,y.transmissionSamplerSize.value.set(A.width,A.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,x){x.matcap&&(y.matcap.value=x.matcap)}function T(y,x){const A=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(A.matrixWorld),y.nearDistance.value=A.shadow.camera.near,y.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function kE(s,e,t,r){let a={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(A,C){const L=C.program;r.uniformBlockBinding(A,L)}function p(A,C){let L=a[A.id];L===void 0&&(E(A),L=v(A),a[A.id]=L,A.addEventListener("dispose",y));const U=C.program;r.updateUBOMapping(A,U);const D=e.render.frame;l[A.id]!==D&&(g(A),l[A.id]=D)}function v(A){const C=_();A.__bindingPointIndex=C;const L=s.createBuffer(),U=A.__size,D=A.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,U,D),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,C,L),L}function _(){for(let A=0;A<f;A++)if(u.indexOf(A)===-1)return u.push(A),A;return Qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(A){const C=a[A.id],L=A.uniforms,U=A.__cache;s.bindBuffer(s.UNIFORM_BUFFER,C);for(let D=0,O=L.length;D<O;D++){const G=Array.isArray(L[D])?L[D]:[L[D]];for(let P=0,b=G.length;P<b;P++){const z=G[P];if(S(z,D,P,U)===!0){const j=z.__offset,te=Array.isArray(z.value)?z.value:[z.value];let oe=0;for(let re=0;re<te.length;re++){const ue=te[re],fe=T(ue);typeof ue=="number"||typeof ue=="boolean"?(z.__data[0]=ue,s.bufferSubData(s.UNIFORM_BUFFER,j+oe,z.__data)):ue.isMatrix3?(z.__data[0]=ue.elements[0],z.__data[1]=ue.elements[1],z.__data[2]=ue.elements[2],z.__data[3]=0,z.__data[4]=ue.elements[3],z.__data[5]=ue.elements[4],z.__data[6]=ue.elements[5],z.__data[7]=0,z.__data[8]=ue.elements[6],z.__data[9]=ue.elements[7],z.__data[10]=ue.elements[8],z.__data[11]=0):(ue.toArray(z.__data,oe),oe+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,j,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(A,C,L,U){const D=A.value,O=C+"_"+L;if(U[O]===void 0)return typeof D=="number"||typeof D=="boolean"?U[O]=D:U[O]=D.clone(),!0;{const G=U[O];if(typeof D=="number"||typeof D=="boolean"){if(G!==D)return U[O]=D,!0}else if(G.equals(D)===!1)return G.copy(D),!0}return!1}function E(A){const C=A.uniforms;let L=0;const U=16;for(let O=0,G=C.length;O<G;O++){const P=Array.isArray(C[O])?C[O]:[C[O]];for(let b=0,z=P.length;b<z;b++){const j=P[b],te=Array.isArray(j.value)?j.value:[j.value];for(let oe=0,re=te.length;oe<re;oe++){const ue=te[oe],fe=T(ue),H=L%U,ne=H%fe.boundary,I=H+ne;L+=ne,I!==0&&U-I<fe.storage&&(L+=U-I),j.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=L,L+=fe.storage}}}const D=L%U;return D>0&&(L+=U-D),A.__size=L,A.__cache={},this}function T(A){const C={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(C.boundary=4,C.storage=4):A.isVector2?(C.boundary=8,C.storage=8):A.isVector3||A.isColor?(C.boundary=16,C.storage=12):A.isVector4?(C.boundary=16,C.storage=16):A.isMatrix3?(C.boundary=48,C.storage=48):A.isMatrix4?(C.boundary=64,C.storage=64):A.isTexture?ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ft("WebGLRenderer: Unsupported uniform value type.",A),C}function y(A){const C=A.target;C.removeEventListener("dispose",y);const L=u.indexOf(C.__bindingPointIndex);u.splice(L,1),s.deleteBuffer(a[C.id]),delete a[C.id],delete l[C.id]}function x(){for(const A in a)s.deleteBuffer(a[A]);u=[],a={},l={}}return{bind:h,update:p,dispose:x}}const zE=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Ki=null;function BE(){return Ki===null&&(Ki=new Hv(zE,32,32,Dd,uo),Ki.minFilter=di,Ki.magFilter=di,Ki.wrapS=Ji,Ki.wrapT=Ji,Ki.generateMipmaps=!1,Ki.needsUpdate=!0),Ki}class VE{constructor(e={}){const{canvas:t=J_(),context:r=null,depth:a=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=u;const E=new Set([Id,Ld,Pd]),T=new Set([Ni,cs,ca,ua,Cd,Rd]),y=new Uint32Array(4),x=new Int32Array(4);let A=null,C=null;const L=[],U=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let O=!1;this._outputColorSpace=ci;let G=0,P=0,b=null,z=-1,j=null;const te=new Jt,oe=new Jt;let re=null;const ue=new Mt(0);let fe=0,H=t.width,ne=t.height,I=1,K=null,_e=null;const Fe=new Jt(0,0,H,ne),le=new Jt(0,0,H,ne);let Ee=!1;const $=new Od;let ae=!1,ve=!1;const Xe=new Ht,We=new W,dt=new Jt,tn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function It(){return b===null?I:1}let k=r;function _t(R,Y){return t.getContext(R,Y)}try{const R={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bd}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",Be,!1),k===null){const Y="webgl2";if(k=_t(Y,R),k===null)throw _t(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw R("WebGLRenderer: "+R.message),R}let xt,Pt,ze,Dt,Ye,at,N,w,J,de,pe,ce,Ze,Re,$e,qe,ge,Ae,rt,et,Ue,st,B,Pe;function we(){xt=new ZM(k),xt.init(),st=new DE(k,xt),Pt=new BM(k,xt,e,st),ze=new RE(k,xt),Pt.reversedDepthBuffer&&g&&ze.buffers.depth.setReversed(!0),Dt=new QM(k),Ye=new xE,at=new PE(k,xt,ze,Ye,Pt,st,Dt),N=new HM(D),w=new qM(D),J=new ny(k),B=new kM(k,J),de=new KM(k,J,Dt,B),pe=new e1(k,de,J,Dt),rt=new JM(k,Pt,at),qe=new VM(Ye),ce=new mE(D,N,w,xt,Pt,B,qe),Ze=new OE(D,Ye),Re=new _E,$e=new wE(xt),Ae=new OM(D,N,w,ze,pe,S,h),ge=new AE(D,pe,Pt),Pe=new kE(k,Dt,Pt,ze),et=new zM(k,xt,Dt),Ue=new $M(k,xt,Dt),Dt.programs=ce.programs,D.capabilities=Pt,D.extensions=xt,D.properties=Ye,D.renderLists=Re,D.shadowMap=ge,D.state=ze,D.info=Dt}we();const Te=new NE(D,k);this.xr=Te,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const R=xt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=xt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(R){R!==void 0&&(I=R,this.setSize(H,ne,!1))},this.getSize=function(R){return R.set(H,ne)},this.setSize=function(R,Y,Q=!0){if(Te.isPresenting){ft("WebGLRenderer: Can't change size while VR device is presenting.");return}H=R,ne=Y,t.width=Math.floor(R*I),t.height=Math.floor(Y*I),Q===!0&&(t.style.width=R+"px",t.style.height=Y+"px"),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(H*I,ne*I).floor()},this.setDrawingBufferSize=function(R,Y,Q){H=R,ne=Y,I=Q,t.width=Math.floor(R*Q),t.height=Math.floor(Y*Q),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(te)},this.getViewport=function(R){return R.copy(Fe)},this.setViewport=function(R,Y,Q,se){R.isVector4?Fe.set(R.x,R.y,R.z,R.w):Fe.set(R,Y,Q,se),ze.viewport(te.copy(Fe).multiplyScalar(I).round())},this.getScissor=function(R){return R.copy(le)},this.setScissor=function(R,Y,Q,se){R.isVector4?le.set(R.x,R.y,R.z,R.w):le.set(R,Y,Q,se),ze.scissor(oe.copy(le).multiplyScalar(I).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(R){ze.setScissorTest(Ee=R)},this.setOpaqueSort=function(R){K=R},this.setTransparentSort=function(R){_e=R},this.getClearColor=function(R){return R.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,Q=!0){let se=0;if(R){let q=!1;if(b!==null){const be=b.texture.format;q=E.has(be)}if(q){const be=b.texture.type,De=T.has(be),He=Ae.getClearColor(),Oe=Ae.getClearAlpha(),tt=He.r,Ke=He.g,Je=He.b;De?(y[0]=tt,y[1]=Ke,y[2]=Je,y[3]=Oe,k.clearBufferuiv(k.COLOR,0,y)):(x[0]=tt,x[1]=Ke,x[2]=Je,x[3]=Oe,k.clearBufferiv(k.COLOR,0,x))}else se|=k.COLOR_BUFFER_BIT}Y&&(se|=k.DEPTH_BUFFER_BIT),Q&&(se|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",Be,!1),Ae.dispose(),Re.dispose(),$e.dispose(),Ye.dispose(),N.dispose(),w.dispose(),pe.dispose(),B.dispose(),Pe.dispose(),ce.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",ir),Te.removeEventListener("sessionend",ga),qn.stop()};function Se(R){R.preventDefault(),Am("WebGLRenderer: Context Lost."),O=!0}function he(){Am("WebGLRenderer: Context Restored."),O=!1;const R=Dt.autoReset,Y=ge.enabled,Q=ge.autoUpdate,se=ge.needsUpdate,q=ge.type;we(),Dt.autoReset=R,ge.enabled=Y,ge.autoUpdate=Q,ge.needsUpdate=se,ge.type=q}function Be(R){Qt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function lt(R){const Y=R.target;Y.removeEventListener("dispose",lt),Ut(Y)}function Ut(R){wt(R),Ye.remove(R)}function wt(R){const Y=Ye.get(R).programs;Y!==void 0&&(Y.forEach(function(Q){ce.releaseProgram(Q)}),R.isShaderMaterial&&ce.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,Q,se,q,be){Y===null&&(Y=tn);const De=q.isMesh&&q.matrixWorld.determinant()<0,He=va(R,Y,Q,se,q);ze.setMaterial(se,De);let Oe=Q.index,tt=1;if(se.wireframe===!0){if(Oe=de.getWireframeAttribute(Q),Oe===void 0)return;tt=2}const Ke=Q.drawRange,Je=Q.attributes.position;let ot=Ke.start*tt,Ct=(Ke.start+Ke.count)*tt;be!==null&&(ot=Math.max(ot,be.start*tt),Ct=Math.min(Ct,(be.start+be.count)*tt)),Oe!==null?(ot=Math.max(ot,0),Ct=Math.min(Ct,Oe.count)):Je!=null&&(ot=Math.max(ot,0),Ct=Math.min(Ct,Je.count));const Gt=Ct-ot;if(Gt<0||Gt===1/0)return;B.setup(q,se,He,Q,Oe);let Wt,Tt=et;if(Oe!==null&&(Wt=J.get(Oe),Tt=Ue,Tt.setIndex(Wt)),q.isMesh)se.wireframe===!0?(ze.setLineWidth(se.wireframeLinewidth*It()),Tt.setMode(k.LINES)):Tt.setMode(k.TRIANGLES);else if(q.isLine){let Qe=se.linewidth;Qe===void 0&&(Qe=1),ze.setLineWidth(Qe*It()),q.isLineSegments?Tt.setMode(k.LINES):q.isLineLoop?Tt.setMode(k.LINE_LOOP):Tt.setMode(k.LINE_STRIP)}else q.isPoints?Tt.setMode(k.POINTS):q.isSprite&&Tt.setMode(k.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)ha("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Tt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(xt.get("WEBGL_multi_draw"))Tt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Qe=q._multiDrawStarts,Lt=q._multiDrawCounts,yt=q._multiDrawCount,Ln=Oe?J.get(Oe).bytesPerElement:1,sr=Ye.get(se).currentProgram.getUniforms();for(let vn=0;vn<yt;vn++)sr.setValue(k,"_gl_DrawID",vn),Tt.render(Qe[vn]/Ln,Lt[vn])}else if(q.isInstancedMesh)Tt.renderInstances(ot,Gt,q.count);else if(Q.isInstancedBufferGeometry){const Qe=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Lt=Math.min(Q.instanceCount,Qe);Tt.renderInstances(ot,Gt,Lt)}else Tt.render(ot,Gt)};function Yn(R,Y,Q){R.transparent===!0&&R.side===Mi&&R.forceSinglePass===!1?(R.side=jn,R.needsUpdate=!0,ps(R,Y,Q),R.side=Or,R.needsUpdate=!0,ps(R,Y,Q),R.side=Mi):ps(R,Y,Q)}this.compile=function(R,Y,Q=null){Q===null&&(Q=R),C=$e.get(Q),C.init(Y),U.push(C),Q.traverseVisible(function(q){q.isLight&&q.layers.test(Y.layers)&&(C.pushLight(q),q.castShadow&&C.pushShadow(q))}),R!==Q&&R.traverseVisible(function(q){q.isLight&&q.layers.test(Y.layers)&&(C.pushLight(q),q.castShadow&&C.pushShadow(q))}),C.setupLights();const se=new Set;return R.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const be=q.material;if(be)if(Array.isArray(be))for(let De=0;De<be.length;De++){const He=be[De];Yn(He,Q,q),se.add(He)}else Yn(be,Q,q),se.add(be)}),C=U.pop(),se},this.compileAsync=function(R,Y,Q=null){const se=this.compile(R,Y,Q);return new Promise(q=>{function be(){if(se.forEach(function(De){Ye.get(De).currentProgram.isReady()&&se.delete(De)}),se.size===0){q(R);return}setTimeout(be,10)}xt.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let _n=null;function xo(R){_n&&_n(R)}function ir(){qn.stop()}function ga(){qn.start()}const qn=new ax;qn.setAnimationLoop(xo),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(R){_n=R,Te.setAnimationLoop(R),R===null?qn.stop():qn.start()},Te.addEventListener("sessionstart",ir),Te.addEventListener("sessionend",ga),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){Qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(Y),Y=Te.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,Y,b),C=$e.get(R,U.length),C.init(Y),U.push(C),Xe.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),$.setFromProjectionMatrix(Xe,Ii,Y.reversedDepth),ve=this.localClippingEnabled,ae=qe.init(this.clippingPlanes,ve),A=Re.get(R,L.length),A.init(),L.push(A),Te.enabled===!0&&Te.isPresenting===!0){const be=D.xr.getDepthSensingMesh();be!==null&&rr(be,Y,-1/0,D.sortObjects)}rr(R,Y,0,D.sortObjects),A.finish(),D.sortObjects===!0&&A.sort(K,_e),pt=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,pt&&Ae.addToRenderList(A,R),this.info.render.frame++,ae===!0&&qe.beginShadows();const Q=C.state.shadowsArray;ge.render(Q,R,Y),ae===!0&&qe.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=A.opaque,q=A.transmissive;if(C.setupLights(),Y.isArrayCamera){const be=Y.cameras;if(q.length>0)for(let De=0,He=be.length;De<He;De++){const Oe=be[De];ds(se,q,R,Oe)}pt&&Ae.render(R);for(let De=0,He=be.length;De<He;De++){const Oe=be[De];kr(A,R,Oe,Oe.viewport)}}else q.length>0&&ds(se,q,R,Y),pt&&Ae.render(R),kr(A,R,Y);b!==null&&P===0&&(at.updateMultisampleRenderTarget(b),at.updateRenderTargetMipmap(b)),R.isScene===!0&&R.onAfterRender(D,R,Y),B.resetDefaultState(),z=-1,j=null,U.pop(),U.length>0?(C=U[U.length-1],ae===!0&&qe.setGlobalState(D.clippingPlanes,C.state.camera)):C=null,L.pop(),L.length>0?A=L[L.length-1]:A=null};function rr(R,Y,Q,se){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)Q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)C.pushLight(R),R.castShadow&&C.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||$.intersectsSprite(R)){se&&dt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Xe);const De=pe.update(R),He=R.material;He.visible&&A.push(R,De,He,Q,dt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||$.intersectsObject(R))){const De=pe.update(R),He=R.material;if(se&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),dt.copy(R.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),dt.copy(De.boundingSphere.center)),dt.applyMatrix4(R.matrixWorld).applyMatrix4(Xe)),Array.isArray(He)){const Oe=De.groups;for(let tt=0,Ke=Oe.length;tt<Ke;tt++){const Je=Oe[tt],ot=He[Je.materialIndex];ot&&ot.visible&&A.push(R,De,ot,Q,dt.z,Je)}}else He.visible&&A.push(R,De,He,Q,dt.z,null)}}const be=R.children;for(let De=0,He=be.length;De<He;De++)rr(be[De],Y,Q,se)}function kr(R,Y,Q,se){const{opaque:q,transmissive:be,transparent:De}=R;C.setupLightsView(Q),ae===!0&&qe.setGlobalState(D.clippingPlanes,Q),se&&ze.viewport(te.copy(se)),q.length>0&&hs(q,Y,Q),be.length>0&&hs(be,Y,Q),De.length>0&&hs(De,Y,Q),ze.buffers.depth.setTest(!0),ze.buffers.depth.setMask(!0),ze.buffers.color.setMask(!0),ze.setPolygonOffset(!1)}function ds(R,Y,Q,se){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;C.state.transmissionRenderTarget[se.id]===void 0&&(C.state.transmissionRenderTarget[se.id]=new us(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float")?uo:Ni,minFilter:ls,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));const be=C.state.transmissionRenderTarget[se.id],De=se.viewport||te;be.setSize(De.z*D.transmissionResolutionScale,De.w*D.transmissionResolutionScale);const He=D.getRenderTarget(),Oe=D.getActiveCubeFace(),tt=D.getActiveMipmapLevel();D.setRenderTarget(be),D.getClearColor(ue),fe=D.getClearAlpha(),fe<1&&D.setClearColor(16777215,.5),D.clear(),pt&&Ae.render(Q);const Ke=D.toneMapping;D.toneMapping=Fr;const Je=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),C.setupLightsView(se),ae===!0&&qe.setGlobalState(D.clippingPlanes,se),hs(R,Q,se),at.updateMultisampleRenderTarget(be),at.updateRenderTargetMipmap(be),xt.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let Ct=0,Gt=Y.length;Ct<Gt;Ct++){const Wt=Y[Ct],{object:Tt,geometry:Qe,material:Lt,group:yt}=Wt;if(Lt.side===Mi&&Tt.layers.test(se.layers)){const Ln=Lt.side;Lt.side=jn,Lt.needsUpdate=!0,_a(Tt,Q,se,Qe,Lt,yt),Lt.side=Ln,Lt.needsUpdate=!0,ot=!0}}ot===!0&&(at.updateMultisampleRenderTarget(be),at.updateRenderTargetMipmap(be))}D.setRenderTarget(He,Oe,tt),D.setClearColor(ue,fe),Je!==void 0&&(se.viewport=Je),D.toneMapping=Ke}function hs(R,Y,Q){const se=Y.isScene===!0?Y.overrideMaterial:null;for(let q=0,be=R.length;q<be;q++){const De=R[q],{object:He,geometry:Oe,group:tt}=De;let Ke=De.material;Ke.allowOverride===!0&&se!==null&&(Ke=se),He.layers.test(Q.layers)&&_a(He,Y,Q,Oe,Ke,tt)}}function _a(R,Y,Q,se,q,be){R.onBeforeRender(D,Y,Q,se,q,be),R.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),q.onBeforeRender(D,Y,Q,se,R,be),q.transparent===!0&&q.side===Mi&&q.forceSinglePass===!1?(q.side=jn,q.needsUpdate=!0,D.renderBufferDirect(Q,Y,se,q,R,be),q.side=Or,q.needsUpdate=!0,D.renderBufferDirect(Q,Y,se,q,R,be),q.side=Mi):D.renderBufferDirect(Q,Y,se,q,R,be),R.onAfterRender(D,Y,Q,se,q,be)}function ps(R,Y,Q){Y.isScene!==!0&&(Y=tn);const se=Ye.get(R),q=C.state.lights,be=C.state.shadowsArray,De=q.state.version,He=ce.getParameters(R,q.state,be,Y,Q),Oe=ce.getProgramCacheKey(He);let tt=se.programs;se.environment=R.isMeshStandardMaterial?Y.environment:null,se.fog=Y.fog,se.envMap=(R.isMeshStandardMaterial?w:N).get(R.envMap||se.environment),se.envMapRotation=se.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,tt===void 0&&(R.addEventListener("dispose",lt),tt=new Map,se.programs=tt);let Ke=tt.get(Oe);if(Ke!==void 0){if(se.currentProgram===Ke&&se.lightsStateVersion===De)return go(R,He),Ke}else He.uniforms=ce.getUniforms(R),R.onBeforeCompile(He,D),Ke=ce.acquireProgram(He,Oe),tt.set(Oe,Ke),se.uniforms=He.uniforms;const Je=se.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Je.clippingPlanes=qe.uniform),go(R,He),se.needsLights=ya(R),se.lightsStateVersion=De,se.needsLights&&(Je.ambientLightColor.value=q.state.ambient,Je.lightProbe.value=q.state.probe,Je.directionalLights.value=q.state.directional,Je.directionalLightShadows.value=q.state.directionalShadow,Je.spotLights.value=q.state.spot,Je.spotLightShadows.value=q.state.spotShadow,Je.rectAreaLights.value=q.state.rectArea,Je.ltc_1.value=q.state.rectAreaLTC1,Je.ltc_2.value=q.state.rectAreaLTC2,Je.pointLights.value=q.state.point,Je.pointLightShadows.value=q.state.pointShadow,Je.hemisphereLights.value=q.state.hemi,Je.directionalShadowMap.value=q.state.directionalShadowMap,Je.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Je.spotShadowMap.value=q.state.spotShadowMap,Je.spotLightMatrix.value=q.state.spotLightMatrix,Je.spotLightMap.value=q.state.spotLightMap,Je.pointShadowMap.value=q.state.pointShadowMap,Je.pointShadowMatrix.value=q.state.pointShadowMatrix),se.currentProgram=Ke,se.uniformsList=null,Ke}function Ti(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=oc.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function go(R,Y){const Q=Ye.get(R);Q.outputColorSpace=Y.outputColorSpace,Q.batching=Y.batching,Q.batchingColor=Y.batchingColor,Q.instancing=Y.instancing,Q.instancingColor=Y.instancingColor,Q.instancingMorph=Y.instancingMorph,Q.skinning=Y.skinning,Q.morphTargets=Y.morphTargets,Q.morphNormals=Y.morphNormals,Q.morphColors=Y.morphColors,Q.morphTargetsCount=Y.morphTargetsCount,Q.numClippingPlanes=Y.numClippingPlanes,Q.numIntersection=Y.numClipIntersection,Q.vertexAlphas=Y.vertexAlphas,Q.vertexTangents=Y.vertexTangents,Q.toneMapping=Y.toneMapping}function va(R,Y,Q,se,q){Y.isScene!==!0&&(Y=tn),at.resetTextureUnits();const be=Y.fog,De=se.isMeshStandardMaterial?Y.environment:null,He=b===null?D.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:lo,Oe=(se.isMeshStandardMaterial?w:N).get(se.envMap||De),tt=se.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Ke=!!Q.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Je=!!Q.morphAttributes.position,ot=!!Q.morphAttributes.normal,Ct=!!Q.morphAttributes.color;let Gt=Fr;se.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Gt=D.toneMapping);const Wt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Tt=Wt!==void 0?Wt.length:0,Qe=Ye.get(se),Lt=C.state.lights;if(ae===!0&&(ve===!0||R!==j)){const an=R===j&&se.id===z;qe.setState(se,R,an)}let yt=!1;se.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Lt.state.version||Qe.outputColorSpace!==He||q.isBatchedMesh&&Qe.batching===!1||!q.isBatchedMesh&&Qe.batching===!0||q.isBatchedMesh&&Qe.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Qe.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Qe.instancing===!1||!q.isInstancedMesh&&Qe.instancing===!0||q.isSkinnedMesh&&Qe.skinning===!1||!q.isSkinnedMesh&&Qe.skinning===!0||q.isInstancedMesh&&Qe.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Qe.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Qe.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Qe.instancingMorph===!1&&q.morphTexture!==null||Qe.envMap!==Oe||se.fog===!0&&Qe.fog!==be||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==qe.numPlanes||Qe.numIntersection!==qe.numIntersection)||Qe.vertexAlphas!==tt||Qe.vertexTangents!==Ke||Qe.morphTargets!==Je||Qe.morphNormals!==ot||Qe.morphColors!==Ct||Qe.toneMapping!==Gt||Qe.morphTargetsCount!==Tt)&&(yt=!0):(yt=!0,Qe.__version=se.version);let Ln=Qe.currentProgram;yt===!0&&(Ln=ps(se,Y,q));let sr=!1,vn=!1,or=!1;const Ot=Ln.getUniforms(),nn=Qe.uniforms;if(ze.useProgram(Ln.program)&&(sr=!0,vn=!0,or=!0),se.id!==z&&(z=se.id,vn=!0),sr||j!==R){ze.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ot.setValue(k,"projectionMatrix",R.projectionMatrix),Ot.setValue(k,"viewMatrix",R.matrixWorldInverse);const ht=Ot.map.cameraPosition;ht!==void 0&&ht.setValue(k,We.setFromMatrixPosition(R.matrixWorld)),Pt.logarithmicDepthBuffer&&Ot.setValue(k,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Ot.setValue(k,"isOrthographic",R.isOrthographicCamera===!0),j!==R&&(j=R,vn=!0,or=!0)}if(q.isSkinnedMesh){Ot.setOptional(k,q,"bindMatrix"),Ot.setOptional(k,q,"bindMatrixInverse");const an=q.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),Ot.setValue(k,"boneTexture",an.boneTexture,at))}q.isBatchedMesh&&(Ot.setOptional(k,q,"batchingTexture"),Ot.setValue(k,"batchingTexture",q._matricesTexture,at),Ot.setOptional(k,q,"batchingIdTexture"),Ot.setValue(k,"batchingIdTexture",q._indirectTexture,at),Ot.setOptional(k,q,"batchingColorTexture"),q._colorsTexture!==null&&Ot.setValue(k,"batchingColorTexture",q._colorsTexture,at));const kn=Q.morphAttributes;if((kn.position!==void 0||kn.normal!==void 0||kn.color!==void 0)&&rt.update(q,Q,Ln),(vn||Qe.receiveShadow!==q.receiveShadow)&&(Qe.receiveShadow=q.receiveShadow,Ot.setValue(k,"receiveShadow",q.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(nn.envMap.value=Oe,nn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&Y.environment!==null&&(nn.envMapIntensity.value=Y.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=BE()),vn&&(Ot.setValue(k,"toneMappingExposure",D.toneMappingExposure),Qe.needsLights&&vc(nn,or),be&&se.fog===!0&&Ze.refreshFogUniforms(nn,be),Ze.refreshMaterialUniforms(nn,se,I,ne,C.state.transmissionRenderTarget[R.id]),oc.upload(k,Ti(Qe),nn,at)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(oc.upload(k,Ti(Qe),nn,at),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Ot.setValue(k,"center",q.center),Ot.setValue(k,"modelViewMatrix",q.modelViewMatrix),Ot.setValue(k,"normalMatrix",q.normalMatrix),Ot.setValue(k,"modelMatrix",q.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const an=se.uniformsGroups;for(let ht=0,ms=an.length;ht<ms;ht++){const bi=an[ht];Pe.update(bi,Ln),Pe.bind(bi,Ln)}}return Ln}function vc(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function ya(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(R,Y,Q){const se=Ye.get(R);se.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),Ye.get(R.texture).__webglTexture=Y,Ye.get(R.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:Q,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const Q=Ye.get(R);Q.__webglFramebuffer=Y,Q.__useDefaultFramebuffer=Y===void 0};const Sa=k.createFramebuffer();this.setRenderTarget=function(R,Y=0,Q=0){b=R,G=Y,P=Q;let se=!0,q=null,be=!1,De=!1;if(R){const Oe=Ye.get(R);if(Oe.__useDefaultFramebuffer!==void 0)ze.bindFramebuffer(k.FRAMEBUFFER,null),se=!1;else if(Oe.__webglFramebuffer===void 0)at.setupRenderTarget(R);else if(Oe.__hasExternalTextures)at.rebindTextures(R,Ye.get(R.texture).__webglTexture,Ye.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Je=R.depthTexture;if(Oe.__boundDepthTexture!==Je){if(Je!==null&&Ye.has(Je)&&(R.width!==Je.image.width||R.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");at.setupDepthRenderbuffer(R)}}const tt=R.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(De=!0);const Ke=Ye.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ke[Y])?q=Ke[Y][Q]:q=Ke[Y],be=!0):R.samples>0&&at.useMultisampledRTT(R)===!1?q=Ye.get(R).__webglMultisampledFramebuffer:Array.isArray(Ke)?q=Ke[Q]:q=Ke,te.copy(R.viewport),oe.copy(R.scissor),re=R.scissorTest}else te.copy(Fe).multiplyScalar(I).floor(),oe.copy(le).multiplyScalar(I).floor(),re=Ee;if(Q!==0&&(q=Sa),ze.bindFramebuffer(k.FRAMEBUFFER,q)&&se&&ze.drawBuffers(R,q),ze.viewport(te),ze.scissor(oe),ze.setScissorTest(re),be){const Oe=Ye.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Oe.__webglTexture,Q)}else if(De){const Oe=Y;for(let tt=0;tt<R.textures.length;tt++){const Ke=Ye.get(R.textures[tt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+tt,Ke.__webglTexture,Q,Oe)}}else if(R!==null&&Q!==0){const Oe=Ye.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Oe.__webglTexture,Q)}z=-1},this.readRenderTargetPixels=function(R,Y,Q,se,q,be,De,He=0){if(!(R&&R.isWebGLRenderTarget)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=Ye.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&De!==void 0&&(Oe=Oe[De]),Oe){ze.bindFramebuffer(k.FRAMEBUFFER,Oe);try{const tt=R.textures[He],Ke=tt.format,Je=tt.type;if(!Pt.textureFormatReadable(Ke)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pt.textureTypeReadable(Je)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-se&&Q>=0&&Q<=R.height-q&&(R.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+He),k.readPixels(Y,Q,se,q,st.convert(Ke),st.convert(Je),be))}finally{const tt=b!==null?Ye.get(b).__webglFramebuffer:null;ze.bindFramebuffer(k.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(R,Y,Q,se,q,be,De,He=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=Ye.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&De!==void 0&&(Oe=Oe[De]),Oe)if(Y>=0&&Y<=R.width-se&&Q>=0&&Q<=R.height-q){ze.bindFramebuffer(k.FRAMEBUFFER,Oe);const tt=R.textures[He],Ke=tt.format,Je=tt.type;if(!Pt.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pt.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ot),k.bufferData(k.PIXEL_PACK_BUFFER,be.byteLength,k.STREAM_READ),R.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+He),k.readPixels(Y,Q,se,q,st.convert(Ke),st.convert(Je),0);const Ct=b!==null?Ye.get(b).__webglFramebuffer:null;ze.bindFramebuffer(k.FRAMEBUFFER,Ct);const Gt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await ev(k,Gt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ot),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,be),k.deleteBuffer(ot),k.deleteSync(Gt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,Q=0){const se=Math.pow(2,-Q),q=Math.floor(R.image.width*se),be=Math.floor(R.image.height*se),De=Y!==null?Y.x:0,He=Y!==null?Y.y:0;at.setTexture2D(R,0),k.copyTexSubImage2D(k.TEXTURE_2D,Q,0,0,De,He,q,be),ze.unbindTexture()};const Ma=k.createFramebuffer(),Ea=k.createFramebuffer();this.copyTextureToTexture=function(R,Y,Q=null,se=null,q=0,be=null){be===null&&(q!==0?(ha("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),be=q,q=0):be=0);let De,He,Oe,tt,Ke,Je,ot,Ct,Gt;const Wt=R.isCompressedTexture?R.mipmaps[be]:R.image;if(Q!==null)De=Q.max.x-Q.min.x,He=Q.max.y-Q.min.y,Oe=Q.isBox3?Q.max.z-Q.min.z:1,tt=Q.min.x,Ke=Q.min.y,Je=Q.isBox3?Q.min.z:0;else{const kn=Math.pow(2,-q);De=Math.floor(Wt.width*kn),He=Math.floor(Wt.height*kn),R.isDataArrayTexture?Oe=Wt.depth:R.isData3DTexture?Oe=Math.floor(Wt.depth*kn):Oe=1,tt=0,Ke=0,Je=0}se!==null?(ot=se.x,Ct=se.y,Gt=se.z):(ot=0,Ct=0,Gt=0);const Tt=st.convert(Y.format),Qe=st.convert(Y.type);let Lt;Y.isData3DTexture?(at.setTexture3D(Y,0),Lt=k.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(at.setTexture2DArray(Y,0),Lt=k.TEXTURE_2D_ARRAY):(at.setTexture2D(Y,0),Lt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Y.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Y.unpackAlignment);const yt=k.getParameter(k.UNPACK_ROW_LENGTH),Ln=k.getParameter(k.UNPACK_IMAGE_HEIGHT),sr=k.getParameter(k.UNPACK_SKIP_PIXELS),vn=k.getParameter(k.UNPACK_SKIP_ROWS),or=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Wt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Wt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,tt),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ke),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Je);const Ot=R.isDataArrayTexture||R.isData3DTexture,nn=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const kn=Ye.get(R),an=Ye.get(Y),ht=Ye.get(kn.__renderTarget),ms=Ye.get(an.__renderTarget);ze.bindFramebuffer(k.READ_FRAMEBUFFER,ht.__webglFramebuffer),ze.bindFramebuffer(k.DRAW_FRAMEBUFFER,ms.__webglFramebuffer);for(let bi=0;bi<Oe;bi++)Ot&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ye.get(R).__webglTexture,q,Je+bi),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ye.get(Y).__webglTexture,be,Gt+bi)),k.blitFramebuffer(tt,Ke,De,He,ot,Ct,De,He,k.DEPTH_BUFFER_BIT,k.NEAREST);ze.bindFramebuffer(k.READ_FRAMEBUFFER,null),ze.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(q!==0||R.isRenderTargetTexture||Ye.has(R)){const kn=Ye.get(R),an=Ye.get(Y);ze.bindFramebuffer(k.READ_FRAMEBUFFER,Ma),ze.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ea);for(let ht=0;ht<Oe;ht++)Ot?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,kn.__webglTexture,q,Je+ht):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,kn.__webglTexture,q),nn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,an.__webglTexture,be,Gt+ht):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,an.__webglTexture,be),q!==0?k.blitFramebuffer(tt,Ke,De,He,ot,Ct,De,He,k.COLOR_BUFFER_BIT,k.NEAREST):nn?k.copyTexSubImage3D(Lt,be,ot,Ct,Gt+ht,tt,Ke,De,He):k.copyTexSubImage2D(Lt,be,ot,Ct,tt,Ke,De,He);ze.bindFramebuffer(k.READ_FRAMEBUFFER,null),ze.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else nn?R.isDataTexture||R.isData3DTexture?k.texSubImage3D(Lt,be,ot,Ct,Gt,De,He,Oe,Tt,Qe,Wt.data):Y.isCompressedArrayTexture?k.compressedTexSubImage3D(Lt,be,ot,Ct,Gt,De,He,Oe,Tt,Wt.data):k.texSubImage3D(Lt,be,ot,Ct,Gt,De,He,Oe,Tt,Qe,Wt):R.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,be,ot,Ct,De,He,Tt,Qe,Wt.data):R.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,be,ot,Ct,Wt.width,Wt.height,Tt,Wt.data):k.texSubImage2D(k.TEXTURE_2D,be,ot,Ct,De,He,Tt,Qe,Wt);k.pixelStorei(k.UNPACK_ROW_LENGTH,yt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ln),k.pixelStorei(k.UNPACK_SKIP_PIXELS,sr),k.pixelStorei(k.UNPACK_SKIP_ROWS,vn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,or),be===0&&Y.generateMipmaps&&k.generateMipmap(Lt),ze.unbindTexture()},this.initRenderTarget=function(R){Ye.get(R).__webglFramebuffer===void 0&&at.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?at.setTextureCube(R,0):R.isData3DTexture?at.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?at.setTexture2DArray(R,0):at.setTexture2D(R,0),ze.unbindTexture()},this.resetState=function(){G=0,P=0,b=null,ze.reset(),B.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}}const w0={type:"change"},Bd={type:"start"},dx={type:"end"},Ql=new mc,T0=new Ir,HE=Math.cos(70*Y0.DEG2RAD),un=new W,Xn=2*Math.PI,Ft={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},If=1e-6;class GE extends ox{constructor(e,t=null){super(e,t),this.state=Ft.NONE,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:to.ROTATE,MIDDLE:to.DOLLY,RIGHT:to.PAN},this.touches={ONE:Js.ROTATE,TWO:Js.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new W,this._lastQuaternion=new Mn,this._lastTargetPosition=new W,this._quat=new Mn().setFromUnitVectors(e.up,new W(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Jm,this._sphericalDelta=new Jm,this._scale=1,this._panOffset=new W,this._rotateStart=new ut,this._rotateEnd=new ut,this._rotateDelta=new ut,this._panStart=new ut,this._panEnd=new ut,this._panDelta=new ut,this._dollyStart=new ut,this._dollyEnd=new ut,this._dollyDelta=new ut,this._dollyDirection=new W,this._mouse=new ut,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=XE.bind(this),this._onPointerDown=WE.bind(this),this._onPointerUp=jE.bind(this),this._onContextMenu=JE.bind(this),this._onMouseWheel=ZE.bind(this),this._onKeyDown=KE.bind(this),this._onTouchStart=$E.bind(this),this._onTouchMove=QE.bind(this),this._onMouseDown=YE.bind(this),this._onMouseMove=qE.bind(this),this._interceptControlDown=e3.bind(this),this._interceptControlUp=t3.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(w0),this.update(),this.state=Ft.NONE}update(e=null){const t=this.object.position;un.copy(t).sub(this.target),un.applyQuaternion(this._quat),this._spherical.setFromVector3(un),this.autoRotate&&this.state===Ft.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(r)&&isFinite(a)&&(r<-Math.PI?r+=Xn:r>Math.PI&&(r-=Xn),a<-Math.PI?a+=Xn:a>Math.PI&&(a-=Xn),r<=a?this._spherical.theta=Math.max(r,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+a)/2?Math.max(r,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=u!=this._spherical.radius}if(un.setFromSpherical(this._spherical),un.applyQuaternion(this._quatInverse),t.copy(this.target).add(un),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const f=un.length();u=this._clampDistance(f*this._scale);const h=f-u;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),l=!!h}else if(this.object.isOrthographicCamera){const f=new W(this._mouse.x,this._mouse.y,0);f.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=h!==this.object.zoom;const p=new W(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(f),this.object.updateMatrixWorld(),u=un.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Ql.origin.copy(this.object.position),Ql.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ql.direction))<HE?this.object.lookAt(this.target):(T0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ql.intersectPlane(T0,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>If||8*(1-this._lastQuaternion.dot(this.object.quaternion))>If||this._lastTargetPosition.distanceToSquared(this.target)>If?(this.dispatchEvent(w0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Xn/60*this.autoRotateSpeed*e:Xn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){un.setFromMatrixColumn(t,0),un.multiplyScalar(-e),this._panOffset.add(un)}_panUp(e,t){this.screenSpacePanning===!0?un.setFromMatrixColumn(t,1):(un.setFromMatrixColumn(t,0),un.crossVectors(this.object.up,un)),un.multiplyScalar(e),this._panOffset.add(un)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;un.copy(a).sub(this.target);let l=un.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*t*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),a=e-r.left,l=t-r.top,u=r.width,f=r.height;this._mouse.x=a/u*2-1,this._mouse.y=-(l/f)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Xn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(r,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(r,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,a=e.pageY-t.y,l=Math.sqrt(r*r+a*a);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),a=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(a,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Xn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(r,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,a=e.pageY-t.y,l=Math.sqrt(r*r+a*a);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,f=(e.pageY+t.y)*.5;this._updateZoomParameters(u,f)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ut,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function WE(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function XE(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function jE(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(dx),this.state=Ft.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function YE(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case to.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Ft.DOLLY;break;case to.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ft.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ft.ROTATE}break;case to.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ft.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ft.PAN}break;default:this.state=Ft.NONE}this.state!==Ft.NONE&&this.dispatchEvent(Bd)}function qE(s){switch(this.state){case Ft.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Ft.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Ft.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function ZE(s){this.enabled===!1||this.enableZoom===!1||this.state!==Ft.NONE||(s.preventDefault(),this.dispatchEvent(Bd),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(dx))}function KE(s){this.enabled!==!1&&this._handleKeyDown(s)}function $E(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Js.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Ft.TOUCH_ROTATE;break;case Js.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Ft.TOUCH_PAN;break;default:this.state=Ft.NONE}break;case 2:switch(this.touches.TWO){case Js.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Ft.TOUCH_DOLLY_PAN;break;case Js.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Ft.TOUCH_DOLLY_ROTATE;break;default:this.state=Ft.NONE}break;default:this.state=Ft.NONE}this.state!==Ft.NONE&&this.dispatchEvent(Bd)}function QE(s){switch(this._trackPointer(s),this.state){case Ft.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Ft.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Ft.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Ft.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Ft.NONE}}function JE(s){this.enabled!==!1&&s.preventDefault()}function e3(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function t3(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const is=new sx,Pn=new W,Lr=new W,jt=new Mn,b0={X:new W(1,0,0),Y:new W(0,1,0),Z:new W(0,0,1)},Uf={type:"change"},A0={type:"mouseDown",mode:null},C0={type:"mouseUp",mode:null},R0={type:"objectChange"};class n3 extends ox{constructor(e,t=null){super(void 0,t);const r=new l3(this);this._root=r;const a=new c3;this._gizmo=a,r.add(a);const l=new u3;this._plane=l,r.add(l);const u=this;function f(C,L){let U=L;Object.defineProperty(u,C,{get:function(){return U!==void 0?U:L},set:function(D){U!==D&&(U=D,l[C]=D,a[C]=D,u.dispatchEvent({type:C+"-changed",value:D}),u.dispatchEvent(Uf))}}),u[C]=L,l[C]=L,a[C]=L}f("camera",e),f("object",void 0),f("enabled",!0),f("axis",null),f("mode","translate"),f("translationSnap",null),f("rotationSnap",null),f("scaleSnap",null),f("space","world"),f("size",1),f("dragging",!1),f("showX",!0),f("showY",!0),f("showZ",!0),f("minX",-1/0),f("maxX",1/0),f("minY",-1/0),f("maxY",1/0),f("minZ",-1/0),f("maxZ",1/0);const h=new W,p=new W,v=new Mn,_=new Mn,g=new W,S=new Mn,E=new W,T=new W,y=new W,x=0,A=new W;f("worldPosition",h),f("worldPositionStart",p),f("worldQuaternion",v),f("worldQuaternionStart",_),f("cameraPosition",g),f("cameraQuaternion",S),f("pointStart",E),f("pointEnd",T),f("rotationAxis",y),f("rotationAngle",x),f("eye",A),this._offset=new W,this._startNorm=new W,this._endNorm=new W,this._cameraScale=new W,this._parentPosition=new W,this._parentQuaternion=new Mn,this._parentQuaternionInv=new Mn,this._parentScale=new W,this._worldScaleStart=new W,this._worldQuaternionInv=new Mn,this._worldScale=new W,this._positionStart=new W,this._quaternionStart=new Mn,this._scaleStart=new W,this._getPointer=i3.bind(this),this._onPointerDown=s3.bind(this),this._onPointerHover=r3.bind(this),this._onPointerMove=o3.bind(this),this._onPointerUp=a3.bind(this),t!==null&&this.connect(t)}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&is.setFromCamera(e,this.camera);const t=Nf(this._gizmo.picker[this.mode],is);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&is.setFromCamera(e,this.camera);const t=Nf(this._plane,is,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,A0.mode=this.mode,this.dispatchEvent(A0)}}pointerMove(e){const t=this.axis,r=this.mode,a=this.object;let l=this.space;if(r==="scale"?l="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(l="world"),a===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&is.setFromCamera(e,this.camera);const u=Nf(this._plane,is,!0);if(u){if(this.pointEnd.copy(u.point).sub(this.worldPositionStart),r==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),l==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),l==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),a.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(l==="local"&&(a.position.applyQuaternion(jt.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(a.position.x=Math.round(a.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(a.position.y=Math.round(a.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(a.position.z=Math.round(a.position.z/this.translationSnap)*this.translationSnap),a.position.applyQuaternion(this._quaternionStart)),l==="world"&&(a.parent&&a.position.add(Pn.setFromMatrixPosition(a.parent.matrixWorld)),t.search("X")!==-1&&(a.position.x=Math.round(a.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(a.position.y=Math.round(a.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(a.position.z=Math.round(a.position.z/this.translationSnap)*this.translationSnap),a.parent&&a.position.sub(Pn.setFromMatrixPosition(a.parent.matrixWorld)))),a.position.x=Math.max(this.minX,Math.min(this.maxX,a.position.x)),a.position.y=Math.max(this.minY,Math.min(this.maxY,a.position.y)),a.position.z=Math.max(this.minZ,Math.min(this.maxZ,a.position.z));else if(r==="scale"){if(t.search("XYZ")!==-1){let f=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(f*=-1),Lr.set(f,f,f)}else Pn.copy(this.pointStart),Lr.copy(this.pointEnd),Pn.applyQuaternion(this._worldQuaternionInv),Lr.applyQuaternion(this._worldQuaternionInv),Lr.divide(Pn),t.search("X")===-1&&(Lr.x=1),t.search("Y")===-1&&(Lr.y=1),t.search("Z")===-1&&(Lr.z=1);a.scale.copy(this._scaleStart).multiply(Lr),this.scaleSnap&&(t.search("X")!==-1&&(a.scale.x=Math.round(a.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(a.scale.y=Math.round(a.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(a.scale.z=Math.round(a.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(r==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const f=20/this.worldPosition.distanceTo(Pn.setFromMatrixPosition(this.camera.matrixWorld));let h=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Pn.copy(this.rotationAxis).cross(this.eye))*f):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(b0[t]),Pn.copy(b0[t]),l==="local"&&Pn.applyQuaternion(this.worldQuaternion),Pn.cross(this.eye),Pn.length()===0?h=!0:this.rotationAngle=this._offset.dot(Pn.normalize())*f),(t==="E"||h)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),l==="local"&&t!=="E"&&t!=="XYZE"?(a.quaternion.copy(this._quaternionStart),a.quaternion.multiply(jt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),a.quaternion.copy(jt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),a.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Uf),this.dispatchEvent(R0)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(C0.mode=this.mode,this.dispatchEvent(C0)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Uf),this.dispatchEvent(R0),this.pointStart.copy(this.pointEnd))}getRaycaster(){return is}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}setColors(e,t,r,a){const l=this._gizmo.materialLib;l.xAxis.color.set(e),l.yAxis.color.set(t),l.zAxis.color.set(r),l.active.color.set(a),l.xAxisTransparent.color.set(e),l.yAxisTransparent.color.set(t),l.zAxisTransparent.color.set(r),l.activeTransparent.color.set(a),l.xAxis._color&&l.xAxis._color.set(e),l.yAxis._color&&l.yAxis._color.set(t),l.zAxis._color&&l.zAxis._color.set(r),l.active._color&&l.active._color.set(a),l.xAxisTransparent._color&&l.xAxisTransparent._color.set(e),l.yAxisTransparent._color&&l.yAxisTransparent._color.set(t),l.zAxisTransparent._color&&l.zAxisTransparent._color.set(r),l.activeTransparent._color&&l.activeTransparent._color.set(a)}}function i3(s){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:s.button};{const e=this.domElement.getBoundingClientRect();return{x:(s.clientX-e.left)/e.width*2-1,y:-(s.clientY-e.top)/e.height*2+1,button:s.button}}}function r3(s){if(this.enabled)switch(s.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(s));break}}function s3(s){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(s)),this.pointerDown(this._getPointer(s)))}function o3(s){this.enabled&&this.pointerMove(this._getPointer(s))}function a3(s){this.enabled&&(this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(s)))}function Nf(s,e,t){const r=e.intersectObject(s,!0);for(let a=0;a<r.length;a++)if(r[a].object.visible||t)return r[a];return!1}const Jl=new wi,kt=new W(0,1,0),P0=new W(0,0,0),D0=new Ht,ec=new Mn,ac=new Mn,Di=new W,L0=new Ht,oa=new W(1,0,0),rs=new W(0,1,0),aa=new W(0,0,1),tc=new W,na=new W,ia=new W;class l3 extends on{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){const t=this.controls;t.object!==void 0&&(t.object.updateMatrixWorld(),t.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):t.object.parent.matrixWorld.decompose(t._parentPosition,t._parentQuaternion,t._parentScale),t.object.matrixWorld.decompose(t.worldPosition,t.worldQuaternion,t._worldScale),t._parentQuaternionInv.copy(t._parentQuaternion).invert(),t._worldQuaternionInv.copy(t.worldQuaternion).invert()),t.camera.updateMatrixWorld(),t.camera.matrixWorld.decompose(t.cameraPosition,t.cameraQuaternion,t._cameraScale),t.camera.isOrthographicCamera?t.camera.getWorldDirection(t.eye).negate():t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),super.updateMatrixWorld(e)}dispose(){this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}}class c3 extends on{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new xc({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new kd({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),r=e.clone();r.opacity=.15;const a=t.clone();a.opacity=.5;const l=e.clone();l.color.setHex(16711680);const u=e.clone();u.color.setHex(65280);const f=e.clone();f.color.setHex(255);const h=e.clone();h.color.setHex(16711680),h.opacity=.5;const p=e.clone();p.color.setHex(65280),p.opacity=.5;const v=e.clone();v.color.setHex(255),v.opacity=.5;const _=e.clone();_.opacity=.25;const g=e.clone();g.color.setHex(16776960),g.opacity=.25;const S=e.clone();S.color.setHex(16776960);const E=e.clone();E.color.setHex(7895160),this.materialLib={xAxis:l,yAxis:u,zAxis:f,active:S,xAxisTransparent:h,yAxisTransparent:p,zAxisTransparent:v,activeTransparent:g};const T=new Rn(0,.04,.1,12);T.translate(0,.05,0);const y=new $t(.08,.08,.08);y.translate(0,.04,0);const x=new Dn;x.setAttribute("position",new Yt([0,0,0,1,0,0],3));const A=new Rn(.0075,.0075,.5,3);A.translate(0,.25,0);function C(re,ue){const fe=new os(re,.0075,3,64,ue*Math.PI*2);return fe.rotateY(Math.PI/2),fe.rotateX(Math.PI/2),fe}function L(){const re=new Dn;return re.setAttribute("position",new Yt([0,0,0,1,1,1],3)),re}const U={X:[[new Ie(T,l),[.5,0,0],[0,0,-Math.PI/2]],[new Ie(T,l),[-.5,0,0],[0,0,Math.PI/2]],[new Ie(A,l),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new Ie(T,u),[0,.5,0]],[new Ie(T,u),[0,-.5,0],[Math.PI,0,0]],[new Ie(A,u)]],Z:[[new Ie(T,f),[0,0,.5],[Math.PI/2,0,0]],[new Ie(T,f),[0,0,-.5],[-Math.PI/2,0,0]],[new Ie(A,f),null,[Math.PI/2,0,0]]],XYZ:[[new Ie(new eo(.1,0),_),[0,0,0]]],XY:[[new Ie(new $t(.15,.15,.01),v),[.15,.15,0]]],YZ:[[new Ie(new $t(.15,.15,.01),h),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Ie(new $t(.15,.15,.01),p),[.15,0,.15],[-Math.PI/2,0,0]]]},D={X:[[new Ie(new Rn(.2,0,.6,4),r),[.3,0,0],[0,0,-Math.PI/2]],[new Ie(new Rn(.2,0,.6,4),r),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new Ie(new Rn(.2,0,.6,4),r),[0,.3,0]],[new Ie(new Rn(.2,0,.6,4),r),[0,-.3,0],[0,0,Math.PI]]],Z:[[new Ie(new Rn(.2,0,.6,4),r),[0,0,.3],[Math.PI/2,0,0]],[new Ie(new Rn(.2,0,.6,4),r),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new Ie(new eo(.2,0),r)]],XY:[[new Ie(new $t(.2,.2,.01),r),[.15,.15,0]]],YZ:[[new Ie(new $t(.2,.2,.01),r),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Ie(new $t(.2,.2,.01),r),[.15,0,.15],[-Math.PI/2,0,0]]]},O={START:[[new Ie(new eo(.01,2),a),null,null,null,"helper"]],END:[[new Ie(new eo(.01,2),a),null,null,null,"helper"]],DELTA:[[new Qi(L(),a),null,null,null,"helper"]],X:[[new Qi(x,a),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Qi(x,a),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Qi(x,a),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},G={XYZE:[[new Ie(C(.5,1),E),null,[0,Math.PI/2,0]]],X:[[new Ie(C(.5,.5),l)]],Y:[[new Ie(C(.5,.5),u),null,[0,0,-Math.PI/2]]],Z:[[new Ie(C(.5,.5),f),null,[0,Math.PI/2,0]]],E:[[new Ie(C(.75,1),g),null,[0,Math.PI/2,0]]]},P={AXIS:[[new Qi(x,a),[-1e3,0,0],null,[1e6,1,1],"helper"]]},b={XYZE:[[new Ie(new ma(.25,10,8),r)]],X:[[new Ie(new os(.5,.1,4,24),r),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new Ie(new os(.5,.1,4,24),r),[0,0,0],[Math.PI/2,0,0]]],Z:[[new Ie(new os(.5,.1,4,24),r),[0,0,0],[0,0,-Math.PI/2]]],E:[[new Ie(new os(.75,.1,2,24),r)]]},z={X:[[new Ie(y,l),[.5,0,0],[0,0,-Math.PI/2]],[new Ie(A,l),[0,0,0],[0,0,-Math.PI/2]],[new Ie(y,l),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new Ie(y,u),[0,.5,0]],[new Ie(A,u)],[new Ie(y,u),[0,-.5,0],[0,0,Math.PI]]],Z:[[new Ie(y,f),[0,0,.5],[Math.PI/2,0,0]],[new Ie(A,f),[0,0,0],[Math.PI/2,0,0]],[new Ie(y,f),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new Ie(new $t(.15,.15,.01),v),[.15,.15,0]]],YZ:[[new Ie(new $t(.15,.15,.01),h),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Ie(new $t(.15,.15,.01),p),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new Ie(new $t(.1,.1,.1),_)]]},j={X:[[new Ie(new Rn(.2,0,.6,4),r),[.3,0,0],[0,0,-Math.PI/2]],[new Ie(new Rn(.2,0,.6,4),r),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new Ie(new Rn(.2,0,.6,4),r),[0,.3,0]],[new Ie(new Rn(.2,0,.6,4),r),[0,-.3,0],[0,0,Math.PI]]],Z:[[new Ie(new Rn(.2,0,.6,4),r),[0,0,.3],[Math.PI/2,0,0]],[new Ie(new Rn(.2,0,.6,4),r),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new Ie(new $t(.2,.2,.01),r),[.15,.15,0]]],YZ:[[new Ie(new $t(.2,.2,.01),r),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Ie(new $t(.2,.2,.01),r),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new Ie(new $t(.2,.2,.2),r),[0,0,0]]]},te={X:[[new Qi(x,a),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Qi(x,a),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Qi(x,a),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function oe(re){const ue=new on;for(const fe in re)for(let H=re[fe].length;H--;){const ne=re[fe][H][0].clone(),I=re[fe][H][1],K=re[fe][H][2],_e=re[fe][H][3],Fe=re[fe][H][4];ne.name=fe,ne.tag=Fe,I&&ne.position.set(I[0],I[1],I[2]),K&&ne.rotation.set(K[0],K[1],K[2]),_e&&ne.scale.set(_e[0],_e[1],_e[2]),ne.updateMatrix();const le=ne.geometry.clone();le.applyMatrix4(ne.matrix),ne.geometry=le,ne.renderOrder=1/0,ne.position.set(0,0,0),ne.rotation.set(0,0,0),ne.scale.set(1,1,1),ue.add(ne)}return ue}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=oe(U)),this.add(this.gizmo.rotate=oe(G)),this.add(this.gizmo.scale=oe(z)),this.add(this.picker.translate=oe(D)),this.add(this.picker.rotate=oe(b)),this.add(this.picker.scale=oe(j)),this.add(this.helper.translate=oe(O)),this.add(this.helper.rotate=oe(P)),this.add(this.helper.scale=oe(te)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const r=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:ac;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let a=[];a=a.concat(this.picker[this.mode].children),a=a.concat(this.gizmo[this.mode].children),a=a.concat(this.helper[this.mode].children);for(let l=0;l<a.length;l++){const u=a[l];u.visible=!0,u.rotation.set(0,0,0),u.position.copy(this.worldPosition);let f;if(this.camera.isOrthographicCamera?f=(this.camera.top-this.camera.bottom)/this.camera.zoom:f=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),u.scale.set(1,1,1).multiplyScalar(f*this.size/4),u.tag==="helper"){u.visible=!1,u.name==="AXIS"?(u.visible=!!this.axis,this.axis==="X"&&(jt.setFromEuler(Jl.set(0,0,0)),u.quaternion.copy(r).multiply(jt),Math.abs(kt.copy(oa).applyQuaternion(r).dot(this.eye))>.9&&(u.visible=!1)),this.axis==="Y"&&(jt.setFromEuler(Jl.set(0,0,Math.PI/2)),u.quaternion.copy(r).multiply(jt),Math.abs(kt.copy(rs).applyQuaternion(r).dot(this.eye))>.9&&(u.visible=!1)),this.axis==="Z"&&(jt.setFromEuler(Jl.set(0,Math.PI/2,0)),u.quaternion.copy(r).multiply(jt),Math.abs(kt.copy(aa).applyQuaternion(r).dot(this.eye))>.9&&(u.visible=!1)),this.axis==="XYZE"&&(jt.setFromEuler(Jl.set(0,Math.PI/2,0)),kt.copy(this.rotationAxis),u.quaternion.setFromRotationMatrix(D0.lookAt(P0,kt,rs)),u.quaternion.multiply(jt),u.visible=this.dragging),this.axis==="E"&&(u.visible=!1)):u.name==="START"?(u.position.copy(this.worldPositionStart),u.visible=this.dragging):u.name==="END"?(u.position.copy(this.worldPosition),u.visible=this.dragging):u.name==="DELTA"?(u.position.copy(this.worldPositionStart),u.quaternion.copy(this.worldQuaternionStart),Pn.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Pn.applyQuaternion(this.worldQuaternionStart.clone().invert()),u.scale.copy(Pn),u.visible=this.dragging):(u.quaternion.copy(r),this.dragging?u.position.copy(this.worldPositionStart):u.position.copy(this.worldPosition),this.axis&&(u.visible=this.axis.search(u.name)!==-1));continue}u.quaternion.copy(r),this.mode==="translate"||this.mode==="scale"?(u.name==="X"&&Math.abs(kt.copy(oa).applyQuaternion(r).dot(this.eye))>.99&&(u.scale.set(1e-10,1e-10,1e-10),u.visible=!1),u.name==="Y"&&Math.abs(kt.copy(rs).applyQuaternion(r).dot(this.eye))>.99&&(u.scale.set(1e-10,1e-10,1e-10),u.visible=!1),u.name==="Z"&&Math.abs(kt.copy(aa).applyQuaternion(r).dot(this.eye))>.99&&(u.scale.set(1e-10,1e-10,1e-10),u.visible=!1),u.name==="XY"&&Math.abs(kt.copy(aa).applyQuaternion(r).dot(this.eye))<.2&&(u.scale.set(1e-10,1e-10,1e-10),u.visible=!1),u.name==="YZ"&&Math.abs(kt.copy(oa).applyQuaternion(r).dot(this.eye))<.2&&(u.scale.set(1e-10,1e-10,1e-10),u.visible=!1),u.name==="XZ"&&Math.abs(kt.copy(rs).applyQuaternion(r).dot(this.eye))<.2&&(u.scale.set(1e-10,1e-10,1e-10),u.visible=!1)):this.mode==="rotate"&&(ec.copy(r),kt.copy(this.eye).applyQuaternion(jt.copy(r).invert()),u.name.search("E")!==-1&&u.quaternion.setFromRotationMatrix(D0.lookAt(this.eye,P0,rs)),u.name==="X"&&(jt.setFromAxisAngle(oa,Math.atan2(-kt.y,kt.z)),jt.multiplyQuaternions(ec,jt),u.quaternion.copy(jt)),u.name==="Y"&&(jt.setFromAxisAngle(rs,Math.atan2(kt.x,kt.z)),jt.multiplyQuaternions(ec,jt),u.quaternion.copy(jt)),u.name==="Z"&&(jt.setFromAxisAngle(aa,Math.atan2(kt.y,kt.x)),jt.multiplyQuaternions(ec,jt),u.quaternion.copy(jt))),u.visible=u.visible&&(u.name.indexOf("X")===-1||this.showX),u.visible=u.visible&&(u.name.indexOf("Y")===-1||this.showY),u.visible=u.visible&&(u.name.indexOf("Z")===-1||this.showZ),u.visible=u.visible&&(u.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),u.material._color=u.material._color||u.material.color.clone(),u.material._opacity=u.material._opacity||u.material.opacity,u.material.color.copy(u.material._color),u.material.opacity=u.material._opacity,this.enabled&&this.axis&&(u.name===this.axis?(u.material.color.copy(this.materialLib.active.color),u.material.opacity=1):this.axis.split("").some(function(h){return u.name===h})&&(u.material.color.copy(this.materialLib.active.color),u.material.opacity=1))}super.updateMatrixWorld(e)}}class u3 extends Ie{constructor(){super(new po(1e5,1e5,2,2),new xc({visible:!1,wireframe:!0,side:Mi,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),tc.copy(oa).applyQuaternion(t==="local"?this.worldQuaternion:ac),na.copy(rs).applyQuaternion(t==="local"?this.worldQuaternion:ac),ia.copy(aa).applyQuaternion(t==="local"?this.worldQuaternion:ac),kt.copy(na),this.mode){case"translate":case"scale":switch(this.axis){case"X":kt.copy(this.eye).cross(tc),Di.copy(tc).cross(kt);break;case"Y":kt.copy(this.eye).cross(na),Di.copy(na).cross(kt);break;case"Z":kt.copy(this.eye).cross(ia),Di.copy(ia).cross(kt);break;case"XY":Di.copy(ia);break;case"YZ":Di.copy(tc);break;case"XZ":kt.copy(ia),Di.copy(na);break;case"XYZ":case"E":Di.set(0,0,0);break}break;case"rotate":default:Di.set(0,0,0)}Di.length()===0?this.quaternion.copy(this.cameraQuaternion):(L0.lookAt(Pn.set(0,0,0),Di,kt),this.quaternion.setFromRotationMatrix(L0)),super.updateMatrixWorld(e)}}function f3(){const s=fn.useRef(null),e=Rt(A=>A.presence),t=Rt(A=>A.objects),r=Rt(A=>A.selectedId),a=Rt(A=>A.gizmoMode),l=Rt(A=>A.selectObject),u=Rt(A=>A.updateTransform),{getPresenceColor:f}=f_(),h=fn.useRef(null),p=fn.useRef(null),v=fn.useRef(null),_=fn.useRef(null),g=fn.useRef(null),S=fn.useRef({}),E=fn.useRef(null),T=fn.useRef(null),y=fn.useRef(null);fn.useEffect(()=>{const A=s.current;if(!A)return;const C=new VE({antialias:!0});C.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),C.setClearColor(15986406),C.domElement.style.width="100%",C.domElement.style.height="100%",A.appendChild(C.domElement),h.current=C;const L=new Vv;p.current=L;const U=new ui(60,1,.1,1e3);U.position.set(4,3,6),v.current=U;const D=new GE(U,C.domElement);D.enableDamping=!0,D.target.set(0,0,0),_.current=D;const O=new n3(U,C.domElement);O.setSize(2),O.showX=!0,O.showY=!0,O.showZ=!0,window.v3sTControls=O,O.addEventListener("dragging-changed",le=>{D.enabled=!le.value}),O.addEventListener("objectChange",()=>{const le=O.object;if(!le)return;const Ee=le.userData?.id;Ee&&u(Ee,{position:[le.position.x,le.position.y,le.position.z],rotation:[le.rotation.x,le.rotation.y,le.rotation.z],scale:[le.scale.x,le.scale.y,le.scale.z]})}),g.current=O;const G=new Jv(16777215,.8);L.add(G);const P=new Qv(16777215,.6);P.position.set(5,10,7),L.add(P);const b={uColor:{value:new Mt(15130840)},uMajorColor:{value:new Mt(8368050)},uCamPos:{value:new W},uScale:{value:1},uThickness:{value:.005},uMajorStep:{value:10},uMinorOpacity:{value:.38},uMajorOpacity:{value:.78}},z=new Fi({transparent:!0,depthWrite:!1,side:Mi,uniforms:b,vertexShader:`
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
      `}),j=new Ie(new po(1e4,1e4),z);j.rotation.x=-Math.PI/2,j.position.set(0,0,0),j.renderOrder=-1,L.add(j);const te=S.current,oe=le=>{let Ee;le.type==="cube"?Ee=new Ie(new $t(1,1,1),new Zl({color:9149607})):Ee=new Ie(new ma(.5,32,16),new Zl({color:10135712})),Ee.position.set(le.transform.position[0],le.transform.position[1],le.transform.position[2]),Ee.rotation.set(le.transform.rotation[0],le.transform.rotation[1],le.transform.rotation[2]),Ee.scale.set(le.transform.scale[0],le.transform.scale[1],le.transform.scale[2]),Ee.userData.id=le.id,Ee.castShadow=!1,Ee.receiveShadow=!0,te[le.id]=Ee,L.add(Ee)};Object.values(Rt.getState().objects).forEach(oe);const re=new sx;T.current=re;const ue=le=>{if(!h.current||!v.current)return;const Ee=h.current.domElement.getBoundingClientRect(),$=(le.clientX-Ee.left)/Ee.width*2-1,ae=-((le.clientY-Ee.top)/Ee.height*2-1);re.setFromCamera(new ut($,ae),v.current);const ve=Object.values(S.current),Xe=re.intersectObjects(ve,!0);if(Xe.length>0){let We=Xe[0].object;for(;We&&!We.userData?.id;)We=We.parent;const dt=We?.userData?.id;console.log("[v3s] click hit object, id =",dt),l(dt??null)}else console.log("[v3s] click hit nothing, clearing selection"),l(null)};C.domElement.addEventListener("pointerdown",ue);const fe=()=>{const le=s.current;if(!le||!h.current||!v.current)return;const Ee=le.clientWidth,$=le.clientHeight;h.current.setSize(Ee,$,!1),v.current.aspect=Ee/Math.max($,1),v.current.updateProjectionMatrix()};fe();const H=new ResizeObserver(fe);H.observe(A),y.current=H;const ne=le=>{le.repeat||g.current&&(le.key==="g"||le.key==="G"?Rt.getState().setGizmoMode("translate"):le.key==="r"||le.key==="R"?Rt.getState().setGizmoMode("rotate"):le.key==="s"||le.key==="S"?Rt.getState().setGizmoMode("scale"):le.key==="x"||le.key==="X"?(g.current.showX=!0,g.current.showY=!1,g.current.showZ=!1):le.key==="y"||le.key==="Y"?(g.current.showX=!1,g.current.showY=!0,g.current.showZ=!1):le.key==="z"||le.key==="Z"?(g.current.showX=!1,g.current.showY=!1,g.current.showZ=!0):le.key==="Escape"&&Rt.getState().selectObject(null))};window.addEventListener("keydown",ne);const I=le=>{if(g.current){if(le.key==="Shift")g.current.setTranslationSnap(.1),g.current.setRotationSnap(Y0.degToRad(5)),g.current.setScaleSnap(.1);else if((le.key==="D"||le.key==="d")&&le.shiftKey){const Ee=Rt.getState().selectedId;if(!Ee)return;const $=Rt.getState().objects[Ee];if(!$)return;const ae=`obj_${Math.random().toString(36).slice(2,8)}`;Rt.getState().upsertObject({id:ae,type:$.type,transform:{position:[$.transform.position[0]+.5,$.transform.position[1],$.transform.position[2]+.5],rotation:[...$.transform.rotation],scale:[...$.transform.scale]},props:$.props}),Rt.getState().selectObject(ae)}}},K=le=>{if(g.current&&(le.key==="Shift"&&(g.current.setTranslationSnap(null),g.current.setRotationSnap(null),g.current.setScaleSnap(null)),Rt.getState().selectedId||(g.current.showX=!0,g.current.showY=!0,g.current.showZ=!0),le.key==="Delete")){const Ee=Rt.getState().selectedId;if(!Ee)return;Rt.getState().removeObject(Ee),Rt.getState().selectObject(null)}};window.addEventListener("keydown",I),window.addEventListener("keyup",K);let _e=0;const Fe=()=>{_e=requestAnimationFrame(Fe),D.update(),b.uCamPos.value.copy(U.position),C.render(L,U)};return Fe(),()=>{cancelAnimationFrame(_e),window.removeEventListener("keydown",ne),window.removeEventListener("keydown",I),window.removeEventListener("keyup",K),C.domElement.removeEventListener("pointerdown",ue),H.disconnect(),y.current=null;try{D.dispose()}catch{}try{O.dispose()}catch{}Object.values(S.current).forEach(le=>{if(le instanceof Ie){const Ee=le.geometry,$=le.material;Ee&&Ee.dispose(),Array.isArray($)?$.forEach(ae=>ae.dispose()):$&&$.dispose()}L.remove(le)}),S.current={},j.geometry.dispose(),z.dispose();try{C.dispose()}catch{}if(C.domElement.parentNode===A&&A.removeChild(C.domElement),h.current=null,p.current=null,v.current=null,_.current=null,g.current=null,T.current=null,E.current){try{L.remove(E.current)}catch{}const le=E.current.geometry,Ee=E.current.material;le&&le.dispose(),Ee&&Ee.dispose(),E.current=null}}},[]),fn.useEffect(()=>{const A=p.current;if(!A)return;const C=S.current,L=t;Object.keys(C).forEach(U=>{if(!L[U]){const D=C[U];if(D&&(D.parent&&D.parent.remove(D),D instanceof Ie)){const O=D.geometry,G=D.material;O&&O.dispose(),Array.isArray(G)?G.forEach(P=>P.dispose()):G&&G.dispose()}delete C[U]}}),Object.values(L).forEach(U=>{let D=C[U.id];D||(U.type==="cube"?D=new Ie(new $t(1,1,1),new Zl({color:9149607})):D=new Ie(new ma(.5,32,16),new Zl({color:10135712})),D.userData.id=U.id,D.receiveShadow=!0,C[U.id]=D,A.add(D)),D.position.set(U.transform.position[0],U.transform.position[1],U.transform.position[2]),D.rotation.set(U.transform.rotation[0],U.transform.rotation[1],U.transform.rotation[2]),D.scale.set(U.transform.scale[0],U.transform.scale[1],U.transform.scale[2])})},[t]),fn.useEffect(()=>{const A=g.current,C=p.current;if(!A||!C)return;if(E.current){try{C.remove(E.current)}catch{}const U=E.current.geometry,D=E.current.material;U&&U.dispose(),D&&D.dispose(),E.current=null}const L=r;if(L){const U=S.current[L];if(U&&(console.log("[v3s] attaching gizmo to",L,U),A.attach(U),U instanceof Ie)){const D=new Yv(U.geometry),O=new kd({color:43775}),G=new jv(D,O);G.position.copy(U.position),G.rotation.copy(U.rotation),G.scale.copy(U.scale),C.add(G),E.current=G}}else console.log("[v3s] detaching gizmo (no selection)"),A.detach()},[r]),fn.useEffect(()=>{const A=g.current;A&&A.setMode(a)},[a]);const x=Object.values(e).map((A,C)=>({userId:A.userId,x:A.cursor?.x??50,y:A.cursor?.y??50,color:A.color??f(C),initials:A.userId.slice(0,2).toUpperCase()}));return Ce.jsx("div",{ref:s,style:{position:"relative",height:"100%",width:"100%"},children:Ce.jsx(o_,{presences:x})})}function d3(){return Ce.jsx(u_,{children:Ce.jsx("div",{className:"app-shell",style:{flexDirection:"column"},children:Ce.jsxs("div",{style:{display:"flex",flex:1},children:[Ce.jsx(l_,{}),Ce.jsx("main",{style:{flex:1,position:"relative",background:"linear-gradient(180deg, #fff, #fbfaf9)"},children:Ce.jsx(f3,{})}),Ce.jsx(c_,{})]})})})}const h3=document.getElementById("root");e_.createRoot(h3).render(Ce.jsx(ra.StrictMode,{children:Ce.jsx(d3,{})}));
