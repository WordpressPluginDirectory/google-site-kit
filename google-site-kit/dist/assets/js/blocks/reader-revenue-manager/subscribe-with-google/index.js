!function(e){var t={};function __webpack_require__(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}__webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,r){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(__webpack_require__.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)__webpack_require__.d(r,n,function(t){return e[t]}.bind(null,n));return r},__webpack_require__.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=49)}([function(e,t,r){"use strict";e.exports=r(17)},function(e,t){e.exports=googlesitekit.data},function(e,t,r){e.exports=r(28)()},function(e,t){e.exports=googlesitekit.i18n},function(e,t){e.exports=wp.element},function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o}));var n="core/editor",o="core/edit-site"},function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n="modules/reader-revenue-manager"},function(e,t,r){e.exports=r(23)},function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n="core/modules"},function(e,t){e.exports=wp.components},function(e,t){e.exports=wp.blockEditor},function(e,t){e.exports=wp.data},function(e,t){function r(e,t,r,n,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}e.exports=function(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var a=e.apply(t,n);function _next(e){r(a,o,i,_next,c,"next",e)}function c(e){r(a,o,i,_next,c,"throw",e)}_next(void 0)}))}}},,function(e,t,r){"use strict";var n=r(0);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var i=n.createElement("g",{fill:"none",fillRule:"evenodd"},n.createElement("path",{d:"M2.253 12.252l7.399 5.658A13.055 13.055 0 009 22c0 1.43.229 2.805.652 4.09l-7.4 5.658A22.02 22.02 0 010 22c0-3.506.81-6.814 2.253-9.748z",fill:"#FBBC05"}),n.createElement("path",{d:"M9.652 17.91l-7.4-5.658A21.935 21.935 0 0122 0c5.6 0 10.6 2.1 14.5 5.5l-6.4 6.4C27.9 10.1 25.1 9 22 9c-5.77 0-10.64 3.725-12.348 8.91z",fill:"#EA4335"}),n.createElement("path",{d:"M2.25 31.742l7.396-5.67A12.975 12.975 0 0022 35c6.1 0 10.7-3.1 11.8-8.5H22V18h20.5c.3 1.3.5 2.7.5 4 0 14-10 22-21 22A21.935 21.935 0 012.25 31.742z",fill:"#34A853"}),n.createElement("path",{d:"M36.34 38.52l-7.025-5.437c2.297-1.45 3.895-3.685 4.485-6.583H22V18h20.5c.3 1.3.5 2.7.5 4 0 7.17-2.623 12.767-6.66 16.52z",fill:"#4285F4"}));t.a=function SvgLogoG(e){return n.createElement("svg",o({viewBox:"0 0 43 44"},e),i)}},function(e,t,r){var n=r(24),o=r(25),i=r(22),a=r(26);e.exports=function(e,t){return n(e)||o(e,t)||i(e,t)||a()}},function(e,t){e.exports=wp.blocks},function(e,t,r){"use strict";var n=r(18),o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,s=o?Symbol.for("react.profiler"):60114,l=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.memo"):60115,h=o?Symbol.for("react.lazy"):60116,v="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function _(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||g}function w(){}function k(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||g}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=_.prototype;var O=k.prototype=new w;O.constructor=k,n(O,_.prototype),O.isPureReactComponent=!0;var x={current:null},E=Object.prototype.hasOwnProperty,A={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var n,o={},a=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(a=""+t.key),t)E.call(t,n)&&!A.hasOwnProperty(n)&&(o[n]=t[n]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var s=Array(u),l=0;l<u;l++)s[l]=arguments[l+2];o.children=s}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===o[n]&&(o[n]=u[n]);return{$$typeof:i,type:e,key:a,ref:c,props:o,_owner:x.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var j=/\/+/g,R=[];function T(e,t,r,n){if(R.length){var o=R.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function C(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function M(e,t,r){return null==e?0:function e(t,r,n,o){var c=typeof t;"undefined"!==c&&"boolean"!==c||(t=null);var u=!1;if(null===t)u=!0;else switch(c){case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case i:case a:u=!0}}if(u)return n(o,t,""===r?"."+L(t,0):r),1;if(u=0,r=""===r?".":r+":",Array.isArray(t))for(var s=0;s<t.length;s++){var l=r+L(c=t[s],s);u+=e(c,l,n,o)}else if(null===t||"object"!=typeof t?l=null:l="function"==typeof(l=v&&t[v]||t["@@iterator"])?l:null,"function"==typeof l)for(t=l.call(t),s=0;!(c=t.next()).done;)u+=e(c=c.value,l=r+L(c,s++),n,o);else if("object"===c)throw n=""+t,Error(m(31,"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,""));return u}(e,"",t,r)}function L(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function N(e,t){e.func.call(e.context,t,e.count++)}function q(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?I(e,n,r,(function(e){return e})):null!=e&&(P(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(j,"$&/")+"/")+r)),n.push(e))}function I(e,t,r,n,o){var i="";null!=r&&(i=(""+r).replace(j,"$&/")+"/"),M(e,q,t=T(t,i,n,o)),C(t)}var G={current:null};function F(){var e=G.current;if(null===e)throw Error(m(321));return e}var $={ReactCurrentDispatcher:G,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return I(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;M(e,N,t=T(null,null,t,r)),C(t)},count:function(e){return M(e,(function(){return null}),null)},toArray:function(e){var t=[];return I(e,t,null,(function(e){return e})),t},only:function(e){if(!P(e))throw Error(m(143));return e}},t.Component=_,t.Fragment=c,t.Profiler=s,t.PureComponent=k,t.StrictMode=u,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,r){if(null==e)throw Error(m(267,e));var o=n({},e.props),a=e.key,c=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,u=x.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)E.call(t,l)&&!A.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==s?s[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){s=Array(l);for(var f=0;f<l;f++)s[f]=arguments[f+2];o.children=s}return{$$typeof:i,type:e.type,key:a,ref:c,props:o,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:h,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return F().useCallback(e,t)},t.useContext=function(e,t){return F().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return F().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return F().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return F().useLayoutEffect(e,t)},t.useMemo=function(e,t){return F().useMemo(e,t)},t.useReducer=function(e,t,r){return F().useReducer(e,t,r)},t.useRef=function(e){return F().useRef(e)},t.useState=function(e){return F().useState(e)},t.version="16.14.0"},function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,c,u=a(e),s=1;s<arguments.length;s++){for(var l in r=Object(arguments[s]))o.call(r,l)&&(u[l]=r[l]);if(n){c=n(r);for(var f=0;f<c.length;f++)i.call(r,c[f])&&(u[c[f]]=r[c[f]])}}return u}},function(e,t,r){!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var o=arguments[n];if(o){var i=typeof o;if("string"===i||"number"===i)e.push(o);else if(Array.isArray(o)&&o.length){var a=r.apply(null,o);a&&e.push(a)}else if("object"===i)for(var c in o)t.call(o,c)&&o[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):"function"==typeof define&&"object"==typeof define.amd&&define.amd?define("classnames",[],(function(){return r})):window.classNames=r}()},function(e,t,r){"use strict";r.d(t,"b",(function(){return EditorButton})),r.d(t,"a",(function(){return ButtonEdit}));var n=r(19),o=r.n(n),i=r(2),a=r.n(i),c=r(14);function EditorButton(e){var t=e.children,r=e.disabled;return React.createElement("button",{disabled:r,className:o()("googlesitekit-blocks-reader-revenue-manager-button",{"googlesitekit-blocks-reader-revenue-manager-button--disabled":r})},React.createElement(c.a,{height:"18",width:"18"}),t)}EditorButton.propTypes={children:a.a.node.isRequired,disabled:a.a.bool.isRequired};var u=r(7),s=r.n(u),l=r(12),f=r.n(l),p=r(15),d=r.n(p),y=r(10),h=r(9),v=r(4),m=r(11),g=r(1),b=r(5),_=r(8),w=r(6);function k(e,t,r){return void 0===e?null:e?t:r}function ButtonEdit(e){var t=e.buttonLabel,r=e.requiredPaymentOption,n=e.invalidPaymentOptionWithModuleAccessNotice,o=e.invalidPaymentOptionWithoutModuleAccessNotice,i=e.noSnippetWithModuleAccessNotice,a=e.noSnippetWithoutModuleAccessNotice,c=Object(v.useState)(void 0),u=d()(c,2),l=u[0],p=u[1],O=Object(y.useBlockProps)();Object(v.useEffect)((function(){function e(){return(e=f()(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!1!==(t=Object(g.select)(_.a).hasModuleOwnership("reader-revenue-manager"))){e.next=5;break}return e.next=4,Object(g.resolveSelect)(_.a).hasModuleAccess("reader-revenue-manager");case 4:t=e.sent;case 5:p(!!t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var x=Object(g.select)(w.a).getSettings(),E=x.publicationID,A=x.paymentOption,S=x.snippetMode,P=x.postTypes,j="googlesitekit_rrm_".concat(E,":productID"),R=function(e){var t=e.paymentOption,r=e.requiredPaymentOption,n=e.hasModuleAccess,o=e.postProductID,i=e.snippetMode,a=e.postTypes,c=e.postType,u=e.invalidPaymentOptionWithModuleAccessNotice,s=e.invalidPaymentOptionWithoutModuleAccessNotice,l=e.noSnippetWithModuleAccessNotice,f=e.noSnippetWithoutModuleAccessNotice;return t!==r?{disabled:!0,notice:k(n,u,s)}:"none"===o||!o&&"per_post"===i||!o&&"post_types"===i&&!a.includes(c)?{disabled:!0,notice:k(n,l,f)}:{disabled:!1,notice:null}}({paymentOption:A,requiredPaymentOption:r,hasModuleAccess:l,postProductID:Object(m.useSelect)((function(e){var t;return(null===(t=e(b.a).getEditedPostAttribute("meta"))||void 0===t?void 0:t[j])||""})),snippetMode:S,postTypes:P,postType:Object(m.useSelect)((function(e){return e(b.a).getCurrentPostType()})),invalidPaymentOptionWithModuleAccessNotice:n,invalidPaymentOptionWithoutModuleAccessNotice:o,noSnippetWithModuleAccessNotice:i,noSnippetWithoutModuleAccessNotice:a}),T=R.notice,C=R.disabled;return React.createElement(v.Fragment,null,T&&React.createElement(y.InspectorControls,null,React.createElement("div",{className:"block-editor-block-card"},React.createElement(h.Notice,{status:"warning",isDismissible:!1},T))),React.createElement("div",O,React.createElement("div",{className:"googlesitekit-blocks-reader-revenue-manager"},React.createElement(EditorButton,{disabled:C},t))))}ButtonEdit.propTypes={buttonLabel:a.a.string.isRequired,requiredPaymentOption:a.a.string.isRequired,invalidPaymentOptionWithModuleAccessNotice:a.a.node.isRequired,invalidPaymentOptionWithoutModuleAccessNotice:a.a.node.isRequired,noSnippetWithModuleAccessNotice:a.a.node.isRequired,noSnippetWithoutModuleAccessNotice:a.a.node.isRequired}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},function(e,t,r){var n=r(21);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},function(e,t,r){var n=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(e,t,r,n){var o=t&&t.prototype instanceof Generator?t:Generator,i=Object.create(o.prototype),a=new Context(n||[]);return i._invoke=function(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return b()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=h(a,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,a),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var s={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var l={};l[o]=function(){return this};var f=Object.getPrototypeOf,p=f&&f(f(g([])));p&&p!==t&&r.call(p,o)&&(l=p);var d=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(l);function y(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function AsyncIterator(e,t){var n;this._invoke=function(o,i){function a(){return new t((function(n,a){!function n(o,i,a,c){var s=u(e[o],e,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,a,c)}),(function(e){n("throw",e,a,c)})):t.resolve(f).then((function(e){l.value=e,a(l)}),(function(e){return n("throw",e,a,c)}))}c(s.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function h(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,h(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function v(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function m(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function Context(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(v,this),this.reset(!0)}function g(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:b}}function b(){return{value:void 0,done:!0}}return GeneratorFunction.prototype=d.constructor=GeneratorFunctionPrototype,GeneratorFunctionPrototype.constructor=GeneratorFunction,GeneratorFunctionPrototype[a]=GeneratorFunction.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===GeneratorFunction||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,GeneratorFunctionPrototype):(e.__proto__=GeneratorFunctionPrototype,a in e||(e[a]="GeneratorFunction")),e.prototype=Object.create(d),e},e.awrap=function(e){return{__await:e}},y(AsyncIterator.prototype),AsyncIterator.prototype[i]=function(){return this},e.AsyncIterator=AsyncIterator,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new AsyncIterator(c(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},y(d),d[a]="Generator",d[o]=function(){return this},d.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=g,Context.prototype={constructor:Context,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(m),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),m(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;m(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:g(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}(e.exports);try{regeneratorRuntime=n}catch(e){Function("r","regeneratorRuntime = r")(n)}},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}}},function(e,t){e.exports=function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n="core/user";[].concat(["kmAnalyticsAdSenseTopEarningContent","kmAnalyticsEngagedTrafficSource","kmAnalyticsLeastEngagingPages","kmAnalyticsNewVisitors","kmAnalyticsPopularAuthors","kmAnalyticsPopularContent","kmAnalyticsPopularProducts","kmAnalyticsReturningVisitors","kmAnalyticsTopCategories","kmAnalyticsTopCities","kmAnalyticsTopCitiesDrivingLeads","kmAnalyticsTopCitiesDrivingAddToCart","kmAnalyticsTopCitiesDrivingPurchases","kmAnalyticsTopDeviceDrivingPurchases","kmAnalyticsTopConvertingTrafficSource","kmAnalyticsTopCountries","kmAnalyticsTopRecentTrendingPages","kmAnalyticsTopTrafficSource","kmAnalyticsTopTrafficSourceDrivingAddToCart","kmAnalyticsPagesPerVisit","kmAnalyticsVisitLength","kmAnalyticsTopReturningVisitorPages","kmAnalyticsVisitsPerVisitor","kmAnalyticsMostEngagingPages","kmAnalyticsTopCategories"],["kmSearchConsolePopularKeywords"])},function(e,t,r){"use strict";var n=r(29);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,a){if(a!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},,function(e){e.exports=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"google-site-kit/rrm-subscribe-with-google","version":"1.150.0","title":"Subscribe with Google","category":"widgets","icon":"google","description":"Allow users to subscribe using Reader Revenue Manager to access content behind a paywall.","textdomain":"google-site-kit","supports":{"inserter":true}}')},,,,,,,,,,,,,,,,,,function(e,t,r){"use strict";r.r(t);var n=r(7),o=r.n(n),i=r(12),a=r.n(i),c=r(16),u=r(1),s=r(8),l=r(27),f=r(6),p=r(5),d=r(9),y=r(4),h=r(3),v=r(20);function Edit(){var e=Object(u.select)(f.a).getPublicationID(),t=Object(u.select)(f.a).getServiceURL({path:"reader-revenue-manager",query:{publication:e}});return React.createElement(v.a,{select:u.select,buttonLabel:
/* translators: Button label for Subscribe with Google. See: https://github.com/subscriptions-project/swg-js/blob/05af2d45cfcaf831a6b4d35c28f2c7b5c2e39308/src/i18n/swg-strings.ts#L24-L57 (please refer to the latest version of the file) */
Object(h.__)("Subscribe with Google","google-site-kit"),requiredPaymentOption:"subscriptions",invalidPaymentOptionWithModuleAccessNotice:Object(y.createInterpolateElement)(Object(h.__)("You need to set up a paywall in Reader Revenue Manager to use this block. <a>Go to Reader Revenue Manager</a>","google-site-kit"),{a:React.createElement(d.ExternalLink,{href:t})}),invalidPaymentOptionWithoutModuleAccessNotice:Object(h.__)("You need to set up a paywall in Reader Revenue Manager to use this block. Contact your administrator.","google-site-kit"),noSnippetWithModuleAccessNotice:Object(y.createInterpolateElement)(Object(h.__)("This post does not include the Reader Revenue Manager snippet. Configure the snippet for this post in the post settings sidebar.","google-site-kit"),{a:React.createElement(d.ExternalLink,{href:t})}),noSnippetWithoutModuleAccessNotice:Object(h.__)("This post does not include the Reader Revenue Manager snippet. Contact your administrator","google-site-kit")})}var m=r(31);function g(){return(g=a()(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([Object(u.resolveSelect)(s.a).getModule("reader-revenue-manager"),Object(u.resolveSelect)(l.a).getUser(),Object(u.resolveSelect)(f.a).getSettings()]);case 2:t=!!Object(u.select)(p.b),Object(c.registerBlockType)(m.name,{edit:function(){return t?null:React.createElement(Edit,null)},supports:{inserter:!t}});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){g.apply(this,arguments)}()}]);