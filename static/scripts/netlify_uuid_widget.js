!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.uuidWidget=t():e.uuidWidget=t()}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}([function(e,t,r){"use strict";e.exports=r(10)},function(e,t,r){e.exports=r(8)()},function(e,t){var r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(r){var n=new Uint8Array(16);e.exports=function(){return r(n),n}}else{var o=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),o[t]=e>>>((3&t)<<3)&255;return o}}},function(e,t){for(var r=[],n=0;n<256;++n)r[n]=(n+256).toString(16).substr(1);e.exports=function(e,t){var n=t||0,o=r;return[o[e[n++]],o[e[n++]],o[e[n++]],o[e[n++]],"-",o[e[n++]],o[e[n++]],"-",o[e[n++]],o[e[n++]],"-",o[e[n++]],o[e[n++]],"-",o[e[n++]],o[e[n++]],o[e[n++]],o[e[n++]],o[e[n++]],o[e[n++]]].join("")}},function(e,t,r){var n=r(6),o=r(7),u=o;u.v1=n,u.v4=o,e.exports=u},function(e,t,r){"use strict";r.r(t),r.d(t,"UuidControl",(function(){return v})),r.d(t,"UuidPreview",(function(){return m}));var n=r(4),o=r(1),u=r.n(o),c=r(0),i=r.n(c);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=d(e);if(t){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return y(this,r)}}function y(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(c,e);var t,r,o,u=p(c);function c(){return a(this,c),u.apply(this,arguments)}return t=c,(r=[{key:"render",value:function(){var e=this.props,t=e.forID,r=e.value,o=e.onChange,u=e.classNameWrapper;return void 0!==r&&""!==r||o(Object(n.v4)()),i.a.createElement(i.a.Fragment,null,i.a.createElement("input",{type:"hidden",id:t,className:u,value:r}),i.a.createElement("div",null,r))}}])&&l(t.prototype,r),o&&l(t,o),c}(i.a.Component);function m(e){var t=e.value;return i.a.createElement("div",null,t)}v.propTypes={onChange:u.a.func.isRequired,forID:u.a.string,value:u.a.node,classNameWrapper:u.a.string.isRequired},m.propTypes={value:u.a.node}},function(e,t,r){var n,o,u=r(2),c=r(3),i=0,f=0;e.exports=function(e,t,r){var a=t&&r||0,l=t||[],s=(e=e||{}).node||n,p=void 0!==e.clockseq?e.clockseq:o;if(null==s||null==p){var y=u();null==s&&(s=n=[1|y[0],y[1],y[2],y[3],y[4],y[5]]),null==p&&(p=o=16383&(y[6]<<8|y[7]))}var d=void 0!==e.msecs?e.msecs:(new Date).getTime(),v=void 0!==e.nsecs?e.nsecs:f+1,m=d-i+(v-f)/1e4;if(m<0&&void 0===e.clockseq&&(p=p+1&16383),(m<0||d>i)&&void 0===e.nsecs&&(v=0),v>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");i=d,f=v,o=p;var b=(1e4*(268435455&(d+=122192928e5))+v)%4294967296;l[a++]=b>>>24&255,l[a++]=b>>>16&255,l[a++]=b>>>8&255,l[a++]=255&b;var h=d/4294967296*1e4&268435455;l[a++]=h>>>8&255,l[a++]=255&h,l[a++]=h>>>24&15|16,l[a++]=h>>>16&255,l[a++]=p>>>8|128,l[a++]=255&p;for(var g=0;g<6;++g)l[a+g]=s[g];return t||c(l)}},function(e,t,r){var n=r(2),o=r(3);e.exports=function(e,t,r){var u=t&&r||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var c=(e=e||{}).random||(e.rng||n)();if(c[6]=15&c[6]|64,c[8]=63&c[8]|128,t)for(var i=0;i<16;++i)t[u+i]=c[i];return t||o(c)}},function(e,t,r){"use strict";var n=r(9);function o(){}function u(){}u.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,u,c){if(c!==n){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:u,resetWarningCache:o};return r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){"use strict";
/** @license React v16.13.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(11),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,f=o?Symbol.for("react.strict_mode"):60108,a=o?Symbol.for("react.profiler"):60114,l=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113,d=o?Symbol.for("react.memo"):60115,v=o?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function O(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||h}function _(){}function w(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||h}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(b(85));this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=O.prototype;var S=w.prototype=new _;S.constructor=w,n(S,O.prototype),S.isPureReactComponent=!0;var j={current:null},x=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,r){var n,o={},c=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)x.call(t,n)&&!P.hasOwnProperty(n)&&(o[n]=t[n]);var f=arguments.length-2;if(1===f)o.children=r;else if(1<f){for(var a=Array(f),l=0;l<f;l++)a[l]=arguments[l+2];o.children=a}if(e&&e.defaultProps)for(n in f=e.defaultProps)void 0===o[n]&&(o[n]=f[n]);return{$$typeof:u,type:e,key:c,ref:i,props:o,_owner:j.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var R=/\/+/g,E=[];function $(e,t,r,n){if(E.length){var o=E.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>E.length&&E.push(e)}function I(e,t,r){return null==e?0:function e(t,r,n,o){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var f=!1;if(null===t)f=!0;else switch(i){case"string":case"number":f=!0;break;case"object":switch(t.$$typeof){case u:case c:f=!0}}if(f)return n(o,t,""===r?"."+q(t,0):r),1;if(f=0,r=""===r?".":r+":",Array.isArray(t))for(var a=0;a<t.length;a++){var l=r+q(i=t[a],a);f+=e(i,l,n,o)}else if(null===t||"object"!=typeof t?l=null:l="function"==typeof(l=m&&t[m]||t["@@iterator"])?l:null,"function"==typeof l)for(t=l.call(t),a=0;!(i=t.next()).done;)f+=e(i=i.value,l=r+q(i,a++),n,o);else if("object"===i)throw n=""+t,Error(b(31,"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,""));return f}(e,"",t,r)}function q(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function U(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?D(e,n,r,(function(e){return e})):null!=e&&(C(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+r)),n.push(e))}function D(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace(R,"$&/")+"/"),I(e,U,t=$(t,u,n,o)),T(t)}var M={current:null};function N(){var e=M.current;if(null===e)throw Error(b(321));return e}var V={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:j,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return D(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;I(e,A,t=$(null,null,t,r)),T(t)},count:function(e){return I(e,(function(){return null}),null)},toArray:function(e){var t=[];return D(e,t,null,(function(e){return e})),t},only:function(e){if(!C(e))throw Error(b(143));return e}},t.Component=O,t.Fragment=i,t.Profiler=a,t.PureComponent=w,t.StrictMode=f,t.Suspense=y,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V,t.cloneElement=function(e,t,r){if(null==e)throw Error(b(267,e));var o=n({},e.props),c=e.key,i=e.ref,f=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,f=j.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)x.call(t,l)&&!P.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==a?a[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){a=Array(l);for(var s=0;s<l;s++)a[s]=arguments[s+2];o.children=a}return{$$typeof:u,type:e.type,key:c,ref:i,props:o,_owner:f}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:v,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return N().useCallback(e,t)},t.useContext=function(e,t){return N().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return N().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return N().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return N().useLayoutEffect(e,t)},t.useMemo=function(e,t){return N().useMemo(e,t)},t.useReducer=function(e,t,r){return N().useReducer(e,t,r)},t.useRef=function(e){return N().useRef(e)},t.useState=function(e){return N().useState(e)},t.version="16.13.1"},function(e,t,r){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,i,f=c(e),a=1;a<arguments.length;a++){for(var l in r=Object(arguments[a]))o.call(r,l)&&(f[l]=r[l]);if(n){i=n(r);for(var s=0;s<i.length;s++)u.call(r,i[s])&&(f[i[s]]=r[i[s]])}}return f}}])}));
//# sourceMappingURL=index.js.map