!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).EventTargetShim={})}(this,(function(e){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?f(e):t}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=c(e);if(t){var o=c(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function y(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}function v(e,t,r){return(v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=y(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(r):o.value}})(e,t,r||e)}function d(e,t,r,n){return(d="undefined"!=typeof Reflect&&Reflect.set?Reflect.set:function(e,t,r,n){var o,i=y(e,t);if(i){if((o=Object.getOwnPropertyDescriptor(i,t)).set)return o.set.call(n,r),!0;if(!o.writable)return!1}if(o=Object.getOwnPropertyDescriptor(n,t)){if(!o.writable)return!1;o.value=r,Object.defineProperty(n,t,o)}else a(n,t,r);return!0})(e,t,r,n)}function g(e,t,r,n,o){if(!d(e,t,r,n||e)&&o)throw new Error("failed to set property");return r}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return r}(e,t)||E(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e){return function(e){if(Array.isArray(e))return w(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||E(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){if(e){if("string"==typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(e,t):void 0}}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function O(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=E(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){u=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw a}}}}function R(e,t){if(!e){for(var r=arguments.length,n=new Array(r>2?r-2:0),o=2;o<r;o++)n[o-2]=arguments[o];throw new TypeError(S(t,n))}}function S(e,t){var r=0;return e.replace(/%o/g,(function(){return T(t[r++])}))}function T(e){return"object"!==t(e)||null===e?String(e):Object.toString.call(e)}var A;var _,I="undefined"!=typeof window?window:"undefined"!=typeof self?self:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:void 0;var P=function(){function e(t,n){r(this,e),this.code=t,this.message=n}return o(e,[{key:"warn",value:function(){var e;try{for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];if(_)return void _(u(u({},this),{},{args:n}));var a=(null!==(e=(new Error).stack)&&void 0!==e?e:"").replace(/^(?:(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+?\n){2}/g,"\n");(t=console).warn.apply(t,[this.message].concat(n,[a]))}catch(e){}}}]),e}(),j=new P("W01","Unable to initialize event under dispatching."),D=new P("W02","Assigning any falsy value to 'cancelBubble' property has no effect."),N=new P("W03","Assigning any truthy value to 'returnValue' property has no effect."),F=new P("W04","Unable to preventDefault on non-cancelable events."),k=new P("W05","Unable to preventDefault inside passive event listener invocation."),M=new P("W06","An event listener wasn't added because it has been added already: %o, %o"),x=new P("W07","The %o option value was abandoned because the event listener wasn't added as duplicated."),C=new P("W08","The 'callback' argument must be a function or an object that has 'handleEvent' method: %o"),B=new P("W09","Event attribute handler must be a function: %o"),L=function(){function e(t,n){r(this,e);var o=null!=n?n:{};G.set(this,{type:String(t),bubbles:Boolean(o.bubbles),cancelable:Boolean(o.cancelable),composed:Boolean(o.composed),target:null,currentTarget:null,stopPropagationFlag:!1,stopImmediatePropagationFlag:!1,canceledFlag:!1,inPassiveListenerFlag:!1,dispatchFlag:!1,timeStamp:Date.now()}),Object.defineProperty(this,"isTrusted",{value:!1,enumerable:!0})}return o(e,null,[{key:"NONE",get:function(){return U}},{key:"CAPTURING_PHASE",get:function(){return V}},{key:"AT_TARGET",get:function(){return W}},{key:"BUBBLING_PHASE",get:function(){return H}}]),o(e,[{key:"composedPath",value:function(){var e=Y(this).currentTarget;return e?[e]:[]}},{key:"stopPropagation",value:function(){Y(this).stopPropagationFlag=!0}},{key:"stopImmediatePropagation",value:function(){var e=Y(this);e.stopPropagationFlag=e.stopImmediatePropagationFlag=!0}},{key:"preventDefault",value:function(){X(Y(this))}},{key:"initEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=Y(this);n.dispatchFlag?j.warn():G.set(this,u(u({},n),{},{type:String(e),bubbles:Boolean(t),cancelable:Boolean(r),target:null,currentTarget:null,stopPropagationFlag:!1,stopImmediatePropagationFlag:!1,canceledFlag:!1}))}},{key:"type",get:function(){return Y(this).type}},{key:"target",get:function(){return Y(this).target}},{key:"srcElement",get:function(){return Y(this).target}},{key:"currentTarget",get:function(){return Y(this).currentTarget}},{key:"NONE",get:function(){return U}},{key:"CAPTURING_PHASE",get:function(){return V}},{key:"AT_TARGET",get:function(){return W}},{key:"BUBBLING_PHASE",get:function(){return H}},{key:"eventPhase",get:function(){return Y(this).dispatchFlag?2:0}},{key:"cancelBubble",get:function(){return Y(this).stopPropagationFlag},set:function(e){e?Y(this).stopPropagationFlag=!0:D.warn()}},{key:"bubbles",get:function(){return Y(this).bubbles}},{key:"cancelable",get:function(){return Y(this).cancelable}},{key:"returnValue",get:function(){return!Y(this).canceledFlag},set:function(e){e?N.warn():X(Y(this))}},{key:"defaultPrevented",get:function(){return Y(this).canceledFlag}},{key:"composed",get:function(){return Y(this).composed}},{key:"isTrusted",get:function(){return!1}},{key:"timeStamp",get:function(){return Y(this).timeStamp}}]),e}(),U=0,V=1,W=2,H=3,G=new WeakMap;function Y(e){var t=G.get(e);return R(null!=t,"'this' is expected an Event object, but got %o",e),t}function X(e){e.inPassiveListenerFlag?k.warn():e.cancelable?e.canceledFlag=!0:F.warn()}Object.defineProperty(L,"NONE",{enumerable:!0}),Object.defineProperty(L,"CAPTURING_PHASE",{enumerable:!0}),Object.defineProperty(L,"AT_TARGET",{enumerable:!0}),Object.defineProperty(L,"BUBBLING_PHASE",{enumerable:!0});for(var Q=Object.getOwnPropertyNames(L.prototype),Z=0;Z<Q.length;++Z)"constructor"!==Q[Z]&&Object.defineProperty(L.prototype,Q[Z],{enumerable:!0});function z(e){var t={exports:{}};return e(t,t.exports),t.exports}void 0!==I&&void 0!==I.Event&&Object.setPrototypeOf(L.prototype,I.Event.prototype);var K=z((function(e,r){function n(e,t){return"".concat(t&&t.context?t.context:"Value"," ").concat(e,".")}function o(e){return i(Math.trunc(e))}function a(e){return e<0?-1:1}function i(e){return 0===e?0:e}function u(e,t){var r,u,l=!t.unsigned;64===e?(u=Math.pow(2,53)-1,r=l?1-Math.pow(2,53):0):l?(r=-Math.pow(2,e-1),u=Math.pow(2,e-1)-1):(r=0,u=Math.pow(2,e)-1);var c=Math.pow(2,e),s=Math.pow(2,e-1);return function(e,t){void 0===t&&(t={});var f=+e;if(f=i(f),t.enforceRange){if(!Number.isFinite(f))throw new TypeError(n("is not a finite number",t));if((f=o(f))<r||f>u)throw new TypeError(n("is outside the accepted range of ".concat(r," to ").concat(u,", inclusive"),t));return f}return!Number.isNaN(f)&&t.clamp?f=function(e){return i(e>0&&e%1==.5&&0==(1&e)||e<0&&e%1==-.5&&1==(1&e)?Math.floor(e):Math.round(e))}(f=Math.min(Math.max(f,r),u)):Number.isFinite(f)&&0!==f?(f=o(f))>=r&&f<=u?f:(f=function(e,t){var r=e%t;return a(t)!==a(r)?r+t:r}(f,c),l&&f>=s?f-c:f):0}}function l(e,t){if("function"!=typeof e)throw new TypeError(n("is not a function",t));return e}r.any=function(e){return e},r.void=function(){},r.boolean=function(e){return!!e},r.byte=u(8,{unsigned:!1}),r.octet=u(8,{unsigned:!0}),r.short=u(16,{unsigned:!1}),r["unsigned short"]=u(16,{unsigned:!0}),r.long=u(32,{unsigned:!1}),r["unsigned long"]=u(32,{unsigned:!0}),r["long long"]=u(64,{unsigned:!1}),r["unsigned long long"]=u(64,{unsigned:!0}),r.double=function(e,t){var r=+e;if(!Number.isFinite(r))throw new TypeError(n("is not a finite floating-point value",t));return r},r["unrestricted double"]=function(e){return+e},r.float=function(e,t){var r=+e;if(!Number.isFinite(r))throw new TypeError(n("is not a finite floating-point value",t));if(Object.is(r,-0))return r;var o=Math.fround(r);if(!Number.isFinite(o))throw new TypeError(n("is outside the range of a single-precision floating-point value",t));return o},r["unrestricted float"]=function(e){var t=+e;return isNaN(t)||Object.is(t,-0)?t:Math.fround(t)},r.DOMString=function(e,r){if(void 0===r&&(r={}),r.treatNullAsEmptyString&&null===e)return"";if("symbol"===t(e))throw new TypeError(n("is a symbol, which cannot be converted to a string",r));return String(e)},r.ByteString=function(e,t){for(var o,a=r.DOMString(e,t),i=0;void 0!==(o=a.codePointAt(i));++i)if(o>255)throw new TypeError(n("is not a valid ByteString",t));return a},r.USVString=function(e,t){for(var n=r.DOMString(e,t),o=n.length,a=[],i=0;i<o;++i){var u=n.charCodeAt(i);if(u<55296||u>57343)a.push(String.fromCodePoint(u));else if(56320<=u&&u<=57343)a.push(String.fromCodePoint(65533));else if(i===o-1)a.push(String.fromCodePoint(65533));else{var l=n.charCodeAt(i+1);if(56320<=l&&l<=57343){var c=1023&u,s=1023&l;a.push(String.fromCodePoint(65536+1024*c+s)),++i}else a.push(String.fromCodePoint(65533))}}return a.join("")},r.object=function(e,r){if("Object"!==function(e){if(null===e)return"Null";switch(t(e)){case"undefined":return"Undefined";case"boolean":return"Boolean";case"number":return"Number";case"string":return"String";case"symbol":return"Symbol";case"object":case"function":default:return"Object"}}(e))throw new TypeError(n("is not an object",r));return e};var c=Object.getOwnPropertyDescriptor(ArrayBuffer.prototype,"byteLength").get;function s(e){try{return c.call(e),!0}catch(e){return!1}}r.ArrayBuffer=function(e,t){if(!s(e))throw new TypeError(n("is not a view on an ArrayBuffer object",t));return e};var f=Object.getOwnPropertyDescriptor(DataView.prototype,"byteLength").get;r.DataView=function(e,t){try{return f.call(e),e}catch(e){throw new TypeError(n("is not a view on an DataView object",t))}},[Int8Array,Int16Array,Int32Array,Uint8Array,Uint16Array,Uint32Array,Uint8ClampedArray,Float32Array,Float64Array].forEach((function(e){var t=e.name,o=/^[AEIOU]/.test(t)?"an":"a";r[t]=function(e,r){if(!ArrayBuffer.isView(e)||e.constructor.name!==t)throw new TypeError(n("is not ".concat(o," ").concat(t," object"),r));return e}})),r.ArrayBufferView=function(e,t){if(!ArrayBuffer.isView(e))throw new TypeError(n("is not a view on an ArrayBuffer object",t));return e},r.BufferSource=function(e,t){if(!ArrayBuffer.isView(e)&&!s(e))throw new TypeError(n("is not an ArrayBuffer object or a view on one",t));return e},r.DOMTimeStamp=r["unsigned long long"],r.Function=l,r.VoidFunction=l})),q=z((function(e,r){var n=Symbol("wrapper"),o=Symbol("impl"),a=Symbol("SameObject caches"),i=Symbol.for("[webidl2js]  constructor registry");function u(e){return e?e[n]:null}function l(e){return e?e[o]:null}var c=Symbol("internal"),s=Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));var f=Object.getOwnPropertyDescriptor(ArrayBuffer.prototype,"byteLength").get;var p=Symbol("supports property index"),b=Symbol("supported property indices"),y=Symbol("supports property name"),v=Symbol("supported property names"),d=Symbol("indexed property get"),g=Symbol("indexed property set new"),m=Symbol("indexed property set existing"),h=Symbol("named property get"),E=Symbol("named property set new"),w=Symbol("named property set existing"),O=Symbol("named property delete");e.exports={isObject:function(e){return"object"===t(e)&&null!==e||"function"==typeof e},hasOwn:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},wrapperSymbol:n,implSymbol:o,getSameObject:function(e,t,r){return e[a]||(e[a]=Object.create(null)),t in e[a]||(e[a][t]=r()),e[a][t]},ctorRegistrySymbol:i,wrapperForImpl:u,implForWrapper:l,tryWrapperForImpl:function(e){var t=u(e);return t||e},tryImplForWrapper:function(e){var t=l(e);return t||e},iterInternalSymbol:c,IteratorPrototype:s,isArrayBuffer:function(e){try{return f.call(e),!0}catch(e){return!1}},isArrayIndexPropName:function(e){if("string"!=typeof e)return!1;var t=e>>>0;return t!==Math.pow(2,32)-1&&e==="".concat(t)},supportsPropertyIndex:p,supportedPropertyIndices:b,supportsPropertyName:y,supportedPropertyNames:v,indexedGet:d,indexedSetNew:g,indexedSetExisting:m,namedGet:h,namedSetNew:E,namedSetExisting:w,namedDelete:O}})),$={IndexSizeError:1,DOMStringSizeError:2,HierarchyRequestError:3,WrongDocumentError:4,InvalidCharacterError:5,NoDataAllowedError:6,NoModificationAllowedError:7,NotFoundError:8,NotSupportedError:9,InUseAttributeError:10,InvalidStateError:11,SyntaxError:12,InvalidModificationError:13,NamespaceError:14,InvalidAccessError:15,ValidationError:16,TypeMismatchError:17,SecurityError:18,NetworkError:19,AbortError:20,URLMismatchError:21,QuotaExceededError:22,TimeoutError:23,InvalidNodeTypeError:24,DataCloneError:25},J={implementation:function(){function e(t,n){var o=m(n,2),a=o[0],i=o[1];r(this,e),this.name=i,this.message=a}return o(e,[{key:"code",get:function(){return $[this.name]||0}}]),e}(),init:function(e){if(Error.captureStackTrace){var t=q.wrapperForImpl(e);Error.captureStackTrace(t,t.constructor)}}},ee=z((function(e){var t=q.implSymbol,n=q.ctorRegistrySymbol,i={_mixedIntoPredicates:[],is:function(r){if(r){if(q.hasOwn(r,t)&&r[t]instanceof J.implementation)return!0;var n,o=O(e.exports._mixedIntoPredicates);try{for(o.s();!(n=o.n()).done;){if((0,n.value)(r))return!0}}catch(e){o.e(e)}finally{o.f()}}return!1},isImpl:function(t){if(t){if(t instanceof J.implementation)return!0;var r,n=q.wrapperForImpl(t),o=O(e.exports._mixedIntoPredicates);try{for(o.s();!(r=o.n()).done;){if((0,r.value)(n))return!0}}catch(e){o.e(e)}finally{o.f()}}return!1},convert:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.context,o=void 0===n?"The provided value":n;if(e.exports.is(t))return q.implForWrapper(t);throw new TypeError("".concat(o," is not of type 'DOMException'."))},create:function(e,t,r){if(void 0===e[n])throw new Error("Internal error: invalid global object");var o=e[n].DOMException;if(void 0===o)throw new Error("Internal error: constructor DOMException is not installed on the passed global object");var a=Object.create(o.prototype);return a=i.setup(a,e,t,r)},createImpl:function(e,t,r){var n=i.create(e,t,r);return q.implForWrapper(n)},_internalSetup:function(e){},setup:function(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return o.wrapper=e,i._internalSetup(e),Object.defineProperty(e,t,{value:new J.implementation(r,n,o),configurable:!0}),e[t][q.wrapperSymbol]=e,J.init&&J.init(e[t],o),e},install:function(u){var l,c=function(){function n(){r(this,n);var e=[],t=arguments[0];t=void 0!==t?K.DOMString(t,{context:"Failed to construct 'DOMException': parameter 1"}):"",e.push(t);var o=arguments[1];return o=void 0!==o?K.DOMString(o,{context:"Failed to construct 'DOMException': parameter 2"}):"Error",e.push(o),i.setup(Object.create((this instanceof n?this.constructor:void 0).prototype),u,e)}return o(n,[{key:"name",get:function(){if(!this||!e.exports.is(this))throw new TypeError("Illegal invocation");return this[t].name}},{key:"message",get:function(){if(!this||!e.exports.is(this))throw new TypeError("Illegal invocation");return this[t].message}},{key:"code",get:function(){if(!this||!e.exports.is(this))throw new TypeError("Illegal invocation");return this[t].code}}]),n}();Object.defineProperties(c.prototype,(a(l={name:{enumerable:!0},message:{enumerable:!0},code:{enumerable:!0}},Symbol.toStringTag,{value:"DOMException",configurable:!0}),a(l,"INDEX_SIZE_ERR",{value:1,enumerable:!0}),a(l,"DOMSTRING_SIZE_ERR",{value:2,enumerable:!0}),a(l,"HIERARCHY_REQUEST_ERR",{value:3,enumerable:!0}),a(l,"WRONG_DOCUMENT_ERR",{value:4,enumerable:!0}),a(l,"INVALID_CHARACTER_ERR",{value:5,enumerable:!0}),a(l,"NO_DATA_ALLOWED_ERR",{value:6,enumerable:!0}),a(l,"NO_MODIFICATION_ALLOWED_ERR",{value:7,enumerable:!0}),a(l,"NOT_FOUND_ERR",{value:8,enumerable:!0}),a(l,"NOT_SUPPORTED_ERR",{value:9,enumerable:!0}),a(l,"INUSE_ATTRIBUTE_ERR",{value:10,enumerable:!0}),a(l,"INVALID_STATE_ERR",{value:11,enumerable:!0}),a(l,"SYNTAX_ERR",{value:12,enumerable:!0}),a(l,"INVALID_MODIFICATION_ERR",{value:13,enumerable:!0}),a(l,"NAMESPACE_ERR",{value:14,enumerable:!0}),a(l,"INVALID_ACCESS_ERR",{value:15,enumerable:!0}),a(l,"VALIDATION_ERR",{value:16,enumerable:!0}),a(l,"TYPE_MISMATCH_ERR",{value:17,enumerable:!0}),a(l,"SECURITY_ERR",{value:18,enumerable:!0}),a(l,"NETWORK_ERR",{value:19,enumerable:!0}),a(l,"ABORT_ERR",{value:20,enumerable:!0}),a(l,"URL_MISMATCH_ERR",{value:21,enumerable:!0}),a(l,"QUOTA_EXCEEDED_ERR",{value:22,enumerable:!0}),a(l,"TIMEOUT_ERR",{value:23,enumerable:!0}),a(l,"INVALID_NODE_TYPE_ERR",{value:24,enumerable:!0}),a(l,"DATA_CLONE_ERR",{value:25,enumerable:!0}),l)),Object.defineProperties(c,{INDEX_SIZE_ERR:{value:1,enumerable:!0},DOMSTRING_SIZE_ERR:{value:2,enumerable:!0},HIERARCHY_REQUEST_ERR:{value:3,enumerable:!0},WRONG_DOCUMENT_ERR:{value:4,enumerable:!0},INVALID_CHARACTER_ERR:{value:5,enumerable:!0},NO_DATA_ALLOWED_ERR:{value:6,enumerable:!0},NO_MODIFICATION_ALLOWED_ERR:{value:7,enumerable:!0},NOT_FOUND_ERR:{value:8,enumerable:!0},NOT_SUPPORTED_ERR:{value:9,enumerable:!0},INUSE_ATTRIBUTE_ERR:{value:10,enumerable:!0},INVALID_STATE_ERR:{value:11,enumerable:!0},SYNTAX_ERR:{value:12,enumerable:!0},INVALID_MODIFICATION_ERR:{value:13,enumerable:!0},NAMESPACE_ERR:{value:14,enumerable:!0},INVALID_ACCESS_ERR:{value:15,enumerable:!0},VALIDATION_ERR:{value:16,enumerable:!0},TYPE_MISMATCH_ERR:{value:17,enumerable:!0},SECURITY_ERR:{value:18,enumerable:!0},NETWORK_ERR:{value:19,enumerable:!0},ABORT_ERR:{value:20,enumerable:!0},URL_MISMATCH_ERR:{value:21,enumerable:!0},QUOTA_EXCEEDED_ERR:{value:22,enumerable:!0},TIMEOUT_ERR:{value:23,enumerable:!0},INVALID_NODE_TYPE_ERR:{value:24,enumerable:!0},DATA_CLONE_ERR:{value:25,enumerable:!0}}),void 0===u[n]&&(u[n]=Object.create(null)),u[n].DOMException=c,Object.defineProperty(u,"DOMException",{configurable:!0,writable:!0,value:c})}};e.exports=i}));var te=u(u({},ee),{},{install:function(e){if("function"!=typeof e.Error)throw new Error("Internal error: Error constructor is not present on the given global object.");ee.install(e),Object.setPrototypeOf(e.DOMException.prototype,e.Error.prototype)}}),re={Error:Error};te.install(re);var ne=re.DOMException,oe=function(e){l(n,e);var t=b(n);function n(e){var o,a,i;r(this,n),i=t.call(this,e.type,{bubbles:e.bubbles,cancelable:e.cancelable,composed:e.composed}),e.cancelBubble&&v((o=f(i),c(n.prototype)),"stopPropagation",o).call(o),e.defaultPrevented&&v((a=f(i),c(n.prototype)),"preventDefault",a).call(a),ae.set(f(i),{original:e});for(var u=Object.keys(e),l=0;l<u.length;++l){var s=u[l];s in f(i)||Object.defineProperty(f(i),s,ce(e,s))}return i}return o(n,null,[{key:"wrap",value:function(e){return new(le(e))(e)}}]),o(n,[{key:"stopPropagation",value:function(){v(c(n.prototype),"stopPropagation",this).call(this);var e=ie(this).original;"stopPropagation"in e&&e.stopPropagation()}},{key:"stopImmediatePropagation",value:function(){v(c(n.prototype),"stopImmediatePropagation",this).call(this);var e=ie(this).original;"stopImmediatePropagation"in e&&e.stopImmediatePropagation()}},{key:"preventDefault",value:function(){v(c(n.prototype),"preventDefault",this).call(this);var e=ie(this).original;"preventDefault"in e&&e.preventDefault()}},{key:"cancelBubble",get:function(){return v(c(n.prototype),"cancelBubble",this)},set:function(e){g(c(n.prototype),"cancelBubble",e,this,!0);var t=ie(this).original;"cancelBubble"in t&&(t.cancelBubble=e)}},{key:"returnValue",get:function(){return v(c(n.prototype),"returnValue",this)},set:function(e){g(c(n.prototype),"returnValue",e,this,!0);var t=ie(this).original;"returnValue"in t&&(t.returnValue=e)}},{key:"timeStamp",get:function(){var e=ie(this).original;return"timeStamp"in e?e.timeStamp:v(c(n.prototype),"timeStamp",this)}}]),n}(L),ae=new WeakMap;function ie(e){var t=ae.get(e);return R(null!=t,"'this' is expected an Event object, but got",e),t}var ue=new WeakMap;function le(e){var t=Object.getPrototypeOf(e);if(null==t)return oe;var n=ue.get(t);return null==n&&(n=function(e,t){for(var n=function(e){l(n,e);var t=b(n);function n(){return r(this,n),t.apply(this,arguments)}return n}(e),o=Object.keys(t),a=0;a<o.length;++a)Object.defineProperty(n.prototype,o[a],ce(t,o[a]));return n}(le(t),t),ue.set(t,n)),n}function ce(e,t){var r=Object.getOwnPropertyDescriptor(e,t);return{get:function(){var e=ie(this).original,r=e[t];return"function"==typeof r?r.bind(e):r},set:function(e){ie(this).original[t]=e},configurable:r.configurable,enumerable:r.enumerable}}function se(e){e.flags|=8}function fe(e){return 1==(1&e.flags)}function pe(e){return 2==(2&e.flags)}function be(e){return 4==(4&e.flags)}function ye(e){return 8==(8&e.flags)}function ve(e,t,r){var n=e.callback;try{"function"==typeof n?n.call(t,r):"function"==typeof n.handleEvent&&n.handleEvent(r)}catch(e){!function(e){try{var t=e instanceof Error?e:new Error(T(e));if(A)return void A(t);if("function"==typeof dispatchEvent&&"function"==typeof ErrorEvent)dispatchEvent(new ErrorEvent("error",{error:t,message:t.message}));else if("undefined"!=typeof process&&"function"==typeof process.emit)return void process.emit("uncaughtException",t);console.error(t)}catch(e){}}(e)}}function de(e,t,r){for(var n=e.listeners,o=0;o<n.length;++o)if(n[o].callback===t&&fe(n[o])===r)return o;return-1}function ge(e,t,r,n,o,a){var i;a&&(i=me.bind(null,e,t,r),a.addEventListener("abort",i));var u=function(e,t,r,n,o,a){return{callback:e,flags:(t?1:0)|(r?2:0)|(n?4:0),signal:o,signalListener:a}}(t,r,n,o,a,i);return e.cow?(e.cow=!1,e.listeners=[].concat(h(e.listeners),[u])):e.listeners.push(u),u}function me(e,t,r){var n=de(e,t,r);return-1!==n&&he(e,n)}function he(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=e.listeners[t];return se(n),n.signal&&n.signal.removeEventListener("abort",n.signalListener),e.cow&&!r?(e.cow=!1,e.listeners=e.listeners.filter((function(e,r){return r!==t})),!1):(e.listeners.splice(t,1),!0)}function Ee(e,t){var r;return null!==(r=e[t])&&void 0!==r?r:e[t]={attrCallback:void 0,attrListener:void 0,cow:!1,listeners:[]}}ue.set(Object.prototype,oe),void 0!==I&&void 0!==I.Event&&ue.set(I.Event.prototype,oe);var we=function(){function e(){r(this,e),Oe.set(this,Object.create(null))}return o(e,[{key:"addEventListener",value:function(e,r,n){var o=Re(this),a=function(e,r,n){var o;if(Se(r),"object"===t(n)&&null!==n)return{type:String(e),callback:null!=r?r:void 0,capture:Boolean(n.capture),passive:Boolean(n.passive),once:Boolean(n.once),signal:null!==(o=n.signal)&&void 0!==o?o:void 0};return{type:String(e),callback:null!=r?r:void 0,capture:Boolean(n),passive:!1,once:!1,signal:void 0}}(e,r,n),i=a.callback,u=a.capture,l=a.once,c=a.passive,s=a.signal,f=a.type;if(null!=i&&!(null==s?void 0:s.aborted)){var p=Ee(o,f),b=de(p,i,u);-1===b?ge(p,i,u,c,l,s):function(e,t,r,n){M.warn(fe(e)?"capture":"bubble",e.callback),pe(e)!==t&&x.warn("passive");be(e)!==r&&x.warn("once");e.signal!==n&&x.warn("signal")}(p.listeners[b],c,l,s)}}},{key:"removeEventListener",value:function(e,r,n){var o=Re(this),a=function(e,r,n){if(Se(r),"object"===t(n)&&null!==n)return{type:String(e),callback:null!=r?r:void 0,capture:Boolean(n.capture)};return{type:String(e),callback:null!=r?r:void 0,capture:Boolean(n)}}(e,r,n),i=a.callback,u=a.capture,l=o[a.type];null!=i&&l&&me(l,i,u)}},{key:"dispatchEvent",value:function(e){var t=Re(this)[String(e.type)];if(null==t)return!0;var r=e instanceof L?e:oe.wrap(e),n=Y(r);if(n.dispatchFlag)throw new ne("This event has been in dispatching.","InvalidStateError");if(function(e,t){if(!e){for(var r=arguments.length,n=new Array(r>2?r-2:0),o=2;o<r;o++)n[o-2]=arguments[o];throw new Error(S(t,n))}}(!1===r.isTrusted,"'isTrusted' property must be false"),n.dispatchFlag=!0,n.target=n.currentTarget=this,!n.stopPropagationFlag){var o=t.cow,a=t.listeners;t.cow=!0;for(var i=0;i<a.length;++i){var u=a[i];if(!ye(u)&&(be(u)&&he(t,i,!o)&&(i-=1),n.inPassiveListenerFlag=pe(u),ve(u,this,r),n.inPassiveListenerFlag=!1,n.stopImmediatePropagationFlag))break}o||(t.cow=!1)}return n.target=null,n.currentTarget=null,n.stopImmediatePropagationFlag=!1,n.stopPropagationFlag=!1,n.dispatchFlag=!1,!n.canceledFlag}}]),e}(),Oe=new WeakMap;function Re(e){var t=Oe.get(e);return R(null!=t,"'this' is expected an EventTarget object, but got %o",e),t}function Se(e){if("function"!=typeof e&&("object"!==t(e)||null===e||"function"!=typeof e.handleEvent)){if(null!=e&&"object"!==t(e))throw new TypeError(S(C.message,[e]));C.warn(e)}}for(var Te=Object.getOwnPropertyNames(we.prototype),Ae=0;Ae<Te.length;++Ae)"constructor"!==Te[Ae]&&Object.defineProperty(we.prototype,Te[Ae],{enumerable:!0});function _e(e,t){var r,n;return null!==(n=null===(r=Re(e)[t])||void 0===r?void 0:r.attrCallback)&&void 0!==n?n:null}function Ie(e,r,n){null!=n&&"function"!=typeof n&&B.warn(n),"function"==typeof n||"object"===t(n)&&null!==n?function(e,t,r){var n=Ee(Re(e),String(t));n.attrCallback=r,null==n.attrListener&&(n.attrListener=ge(n,function(e){return function(t){var r=e.attrCallback;"function"==typeof r&&r.call(this,t)}}(n),!1,!1,!1,void 0))}(e,r,n):function(e,t){var r=Re(e)[String(t)];r&&r.attrListener&&(me(r,r.attrListener.callback,!1),r.attrCallback=r.attrListener=void 0)}(e,r)}function Pe(e,t,r){Object.defineProperty(e,"on".concat(t),{get:function(){return _e(this,t)},set:function(e){Ie(this,t,e)},configurable:!0,enumerable:!0})}void 0!==I&&void 0!==I.EventTarget&&Object.setPrototypeOf(we.prototype,I.EventTarget.prototype),e.Event=L,e.EventTarget=we,e.default=we,e.defineCustomEventTarget=function(){for(var e=function(e){l(n,e);var t=b(n);function n(){return r(this,n),t.apply(this,arguments)}return n}(we),t=0;t<arguments.length;++t)Pe(e.prototype,t<0||arguments.length<=t?void 0:arguments[t]);return e},e.defineEventAttribute=Pe,e.getEventAttributeValue=_e,e.setErrorHandler=function(e){R("function"==typeof e||void 0===e,"The error handler must be a function or undefined, but got %o.",e),A=e},e.setEventAttributeValue=Ie,e.setWarningHandler=function(e){R("function"==typeof e||void 0===e,"The warning handler must be a function or undefined, but got %o.",e),_=e},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=umd.js.map
