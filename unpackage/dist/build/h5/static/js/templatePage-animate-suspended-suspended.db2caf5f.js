(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["templatePage-animate-suspended-suspended"],{"2e86":function(t,e,n){"use strict";n.r(e);var r=n("331e"),a=n("5019");for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("6c6f");var o=n("f0c5"),s=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"e58dbdec",null,!1,r["a"],void 0);e["default"]=s.exports},"331e":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"nav-index-button",style:{bottom:t.bottom+"rpx",right:t.right+"rpx"},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.navIndex.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"nav-index-button__content"},[n("v-uni-view",{staticClass:"nav-index-button__content--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-cool-bg-color-7"},[n("v-uni-view",{staticClass:"tn-icon-home-vertical-fill"})],1)],1),n("v-uni-view",{staticClass:"nav-index-button__meteor"},[n("v-uni-view",{staticClass:"nav-index-button__meteor__wrapper"},t._l(6,(function(t,e){return n("v-uni-view",{key:e,staticClass:"nav-index-button__meteor__item",style:{transform:"rotateX("+(30*e-60)+"deg) rotateZ("+(30*e-60)+"deg)"}},[n("v-uni-view",{staticClass:"nav-index-button__meteor__item--pic"})],1)})),1)],1)],1)},a=[]},3839:function(t,e,n){var r=n("9558");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("4f06").default;a("73689b69",r,!0,{sourceMap:!1,shadowMode:!1})},5019:function(t,e,n){"use strict";n.r(e);var r=n("68a1"),a=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},"62dd":function(t,e,n){var r=n("7ec2").default,a=n("c973").default;t.exports={data:function(){return{}},onLoad:function(){this.updateCustomBarInfo()},methods:{goBack:function(){var t=getCurrentPages();if(t&&t.length>0){var e=t[0];1!=t.length||e.route&&"pages/index/index"==e.route?uni.navigateBack({delta:1}):uni.reLaunch({url:"/pages/index/index"})}else uni.reLaunch({url:"/pages/index/index"})},updateCustomBarInfo:function(){var t=this;return a(r().mark((function e(){var n,a,i;return r().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.vuex_custom_bar_height,a=t.vuex_status_bar_height,n){e.next=15;break}return e.prev=3,e.next=6,t.$tn.updateCustomBar();case 6:i=e.sent,n=i.customBarHeight,a=i.statusBarHeight,e.next=15;break;case 11:return e.prev=11,e.t0=e["catch"](3),setTimeout((function(){t.updateCustomBarInfo()}),10),e.abrupt("return");case 15:t.$tn.vuex("vuex_status_bar_height",a),t.$tn.vuex("vuex_custom_bar_height",n);case 17:case"end":return e.stop()}}),e,null,[[3,11]])})))()}}}},"65a2":function(t,e,n){"use strict";n.r(e);var r=n("ef6d"),a=n("f237");for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("8fa1");var o=n("f0c5"),s=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"481f0c76",null,!1,r["a"],void 0);e["default"]=s.exports},"68a1":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var r={name:"nav-index-button",props:{bottom:{type:[Number,String],default:300},right:{type:[Number,String],default:75},indexPath:{type:String,default:"/pages/index/index"}},methods:{navIndex:function(){var t=getCurrentPages();if(t&&t.length>0){var e=this.indexPath||"/pages/index/index",n=t[0];1!=t.length||n.route&&n.route==e.substring(1,e.length)?uni.navigateBack({delta:1}):uni.reLaunch({url:e})}else uni.reLaunch({url:indexPath})}}};e.default=r},"6c6f":function(t,e,n){"use strict";var r=n("3839"),a=n.n(r);a.a},"7ec2":function(t,e,n){n("7a82"),n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("b636"),n("944a"),n("0c47"),n("23dc"),n("3410"),n("d9e2"),n("d401"),n("14d9"),n("159b"),n("131a"),n("26e9"),n("fb6a");var r=n("7037")["default"];function a(){"use strict";
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t.exports=a=function(){return e},t.exports.__esModule=!0,t.exports["default"]=t.exports;var e={},n=Object.prototype,i=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},s="function"==typeof Symbol?Symbol:{},u=s.iterator||"@@iterator",c=s.asyncIterator||"@@asyncIterator",d=s.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(P){f=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var a=e&&e.prototype instanceof p?e:p,i=Object.create(a.prototype),s=new j(r||[]);return o(i,"_invoke",{value:C(t,n,s)}),i}function v(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(P){return{type:"throw",arg:P}}}e.wrap=l;var h={};function p(){}function m(){}function b(){}var g={};f(g,u,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(O([])));x&&x!==n&&i.call(x,u)&&(g=x);var y=b.prototype=p.prototype=Object.create(g);function k(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){var n;o(this,"_invoke",{value:function(a,o){function s(){return new e((function(n,s){(function n(a,o,s,u){var c=v(t[a],t,o);if("throw"!==c.type){var d=c.arg,f=d.value;return f&&"object"==r(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,s,u)}),(function(t){n("throw",t,s,u)})):e.resolve(f).then((function(t){d.value=t,s(d)}),(function(t){return n("throw",t,s,u)}))}u(c.arg)})(a,o,n,s)}))}return n=n?n.then(s,s):s()}})}function C(t,e,n){var r="suspendedStart";return function(a,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw i;return Y()}for(n.method=a,n.arg=i;;){var o=n.delegate;if(o){var s=L(o,n);if(s){if(s===h)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=v(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function L(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator["return"]&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var a=v(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,h;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function X(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(X,this),this.reset(!0)}function O(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:Y}}function Y(){return{value:void 0,done:!0}}return m.prototype=b,o(y,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:m,configurable:!0}),m.displayName=f(b,d,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,f(t,d,"GeneratorFunction")),t.prototype=Object.create(y),t},e.awrap=function(t){return{__await:t}},k(_.prototype),f(_.prototype,c,(function(){return this})),e.AsyncIterator=_,e.async=function(t,n,r,a,i){void 0===i&&(i=Promise);var o=new _(l(t,n,r,a),i);return e.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},k(y),f(y,d,"Generator"),f(y,u,(function(){return this})),f(y,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return o.type="throw",o.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r],o=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=i.call(a,"catchLoc"),u=i.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;E(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:O(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},e}t.exports=a,t.exports.__esModule=!0,t.exports["default"]=t.exports},"85da":function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-custom-nav-bar__back[data-v-481f0c76]{width:100%;height:100%;position:relative;display:flex;justify-content:space-evenly;align-items:center;box-sizing:border-box;background-color:rgba(0,0,0,.15);border-radius:%?1000?%;border:%?1?% solid hsla(0,0%,100%,.5);color:#fff;font-size:18px}.tn-custom-nav-bar__back .icon[data-v-481f0c76]{display:block;flex:1;margin:auto;text-align:center}.tn-custom-nav-bar__back[data-v-481f0c76]:before{content:" ";width:%?1?%;height:110%;position:absolute;top:22.5%;left:0;right:0;margin:auto;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;pointer-events:none;box-sizing:border-box;opacity:.7;background-color:#fff}.template-suspended[data-v-481f0c76]{background-image:linear-gradient(0deg,#4c3fae 20%,#6e26ba 80%);width:100vw;height:100vh}\r\n/* 悬浮 */.tnxuanfu[data-v-481f0c76]{-webkit-animation:suspension-data-v-481f0c76 3s ease-in-out infinite;animation:suspension-data-v-481f0c76 3s ease-in-out infinite}@-webkit-keyframes suspension-data-v-481f0c76{0%, 100%{-webkit-transform:translateY(0);transform:translateY(0)}50%{-webkit-transform:translateY(-.8rem);transform:translateY(-.8rem)}}@keyframes suspension-data-v-481f0c76{0%, 100%{-webkit-transform:translateY(0);transform:translateY(0)}50%{-webkit-transform:translateY(-.8rem);transform:translateY(-.8rem)}}\r\n/* 悬浮按钮 */.button-shop[data-v-481f0c76]{width:%?90?%;height:%?90?%;display:flex;flex-direction:row;position:fixed;\r\n  /* bottom:200rpx;\r\n    right: 20rpx; */left:%?5?%;top:%?5?%;z-index:1001;border-radius:100px;opacity:.9}\r\n/* 按钮 */.wechat[data-v-481f0c76]{bottom:%?300?%;right:%?75?%;position:fixed;z-index:9999}.pa[data-v-481f0c76],\r\n.pa0[data-v-481f0c76]{position:absolute}.pa0[data-v-481f0c76]{left:0;top:0}.bg0[data-v-481f0c76]{width:%?100?%;height:%?100?%;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.bg1[data-v-481f0c76]{width:100%;height:100%}.hx-box[data-v-481f0c76]{top:50%;left:50%;width:%?100?%;height:%?100?%;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform:translate(-50%,-50%) rotateY(75deg) rotate(10deg);transform:translate(-50%,-50%) rotateY(75deg) rotate(10deg)}.hx-box .pr[data-v-481f0c76]{width:%?100?%;height:%?100?%;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-animation:hxz-data-v-481f0c76 20s linear infinite;animation:hxz-data-v-481f0c76 20s linear infinite}@-webkit-keyframes hxz-data-v-481f0c76{0%{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}100%{-webkit-transform:rotateX(-1turn);transform:rotateX(-1turn)}}@keyframes hxz-data-v-481f0c76{0%{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}100%{-webkit-transform:rotateX(-1turn);transform:rotateX(-1turn)}}.hx-box .pr .pa0[data-v-481f0c76]{width:%?100?%;height:%?100?%;\r\n  /* border: 4px solid #5ec0ff; */border-radius:1000px}.hx-box .pr .pa0 .span[data-v-481f0c76]{display:block;width:100%;height:100%;background:url(https://tnuiimage.tnkjapp.com/cool_bg_image/arc4.png) no-repeat 50%;background-size:100% 100%;-webkit-animation:hx-data-v-481f0c76 4s linear infinite;animation:hx-data-v-481f0c76 4s linear infinite}@-webkit-keyframes hx-data-v-481f0c76{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes hx-data-v-481f0c76{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.hx-k1[data-v-481f0c76]{-webkit-transform:rotateX(-60deg) rotate(-60deg);transform:rotateX(-60deg) rotate(-60deg)}.hx-k2[data-v-481f0c76]{-webkit-transform:rotateX(-30deg) rotate(-30deg);transform:rotateX(-30deg) rotate(-30deg)}.hx-k3[data-v-481f0c76]{-webkit-transform:rotateX(0deg) rotate(0deg);transform:rotateX(0deg) rotate(0deg)}.hx-k4[data-v-481f0c76]{-webkit-transform:rotateX(30deg) rotate(30deg);transform:rotateX(30deg) rotate(30deg)}.hx-k5[data-v-481f0c76]{-webkit-transform:rotateX(60deg) rotate(60deg);transform:rotateX(60deg) rotate(60deg)}.hx-k6[data-v-481f0c76]{-webkit-transform:rotateX(90deg) rotate(90deg);transform:rotateX(90deg) rotate(90deg)}',""]),t.exports=e},"8fa1":function(t,e,n){"use strict";var r=n("a246"),a=n.n(r);a.a},9558:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.nav-index-button[data-v-e58dbdec]{position:fixed;-webkit-animation:suspension-data-v-e58dbdec 3s ease-in-out infinite;animation:suspension-data-v-e58dbdec 3s ease-in-out infinite;z-index:999999}.nav-index-button__content[data-v-e58dbdec]{position:absolute;width:%?100?%;height:%?100?%;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.nav-index-button__content--icon[data-v-e58dbdec]{width:%?100?%;height:%?100?%;font-size:%?60?%;border-radius:50%;margin-bottom:%?18?%;position:relative;z-index:1;-webkit-transform:scale(.85);transform:scale(.85)}.nav-index-button__content--icon[data-v-e58dbdec]::after{content:" ";position:absolute;z-index:-1;width:100%;height:100%;left:0;bottom:0;border-radius:inherit;opacity:1;-webkit-transform:scale(1);transform:scale(1);background-size:100% 100%;background-image:url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg6.png)}.nav-index-button__meteor[data-v-e58dbdec]{position:absolute;top:50%;left:50%;width:%?100?%;height:%?100?%;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform:translate(-50%,-50%) rotateY(75deg) rotate(10deg);transform:translate(-50%,-50%) rotateY(75deg) rotate(10deg)}.nav-index-button__meteor__wrapper[data-v-e58dbdec]{width:%?100?%;height:%?100?%;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-animation:spin-data-v-e58dbdec 20s linear infinite;animation:spin-data-v-e58dbdec 20s linear infinite}.nav-index-button__meteor__item[data-v-e58dbdec]{position:absolute;width:%?100?%;height:%?100?%;border-radius:%?1000?%;left:0;top:0}.nav-index-button__meteor__item--pic[data-v-e58dbdec]{display:block;width:100%;height:100%;background:url(https://tnuiimage.tnkjapp.com/cool_bg_image/arc3.png) no-repeat 50%;background-size:100% 100%;-webkit-animation:arc-data-v-e58dbdec 4s linear infinite;animation:arc-data-v-e58dbdec 4s linear infinite}@-webkit-keyframes suspension-data-v-e58dbdec{0%, 100%{-webkit-transform:translateY(0);transform:translateY(0)}50%{-webkit-transform:translateY(-.8rem);transform:translateY(-.8rem)}}@keyframes suspension-data-v-e58dbdec{0%, 100%{-webkit-transform:translateY(0);transform:translateY(0)}50%{-webkit-transform:translateY(-.8rem);transform:translateY(-.8rem)}}@-webkit-keyframes spin-data-v-e58dbdec{0%{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}100%{-webkit-transform:rotateX(-1turn);transform:rotateX(-1turn)}}@keyframes spin-data-v-e58dbdec{0%{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}100%{-webkit-transform:rotateX(-1turn);transform:rotateX(-1turn)}}@-webkit-keyframes arc-data-v-e58dbdec{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes arc-data-v-e58dbdec{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""]),t.exports=e},a246:function(t,e,n){var r=n("85da");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("4f06").default;a("0d550645",r,!0,{sourceMap:!1,shadowMode:!1})},c973:function(t,e,n){function r(t,e,n,r,a,i,o){try{var s=t[i](o),u=s.value}catch(c){return void n(c)}s.done?e(u):Promise.resolve(u).then(r,a)}n("d3b7"),t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(a,i){var o=t.apply(e,n);function s(t){r(o,a,i,s,u,"next",t)}function u(t){r(o,a,i,s,u,"throw",t)}s(void 0)}))}},t.exports.__esModule=!0,t.exports["default"]=t.exports},df93:function(t,e,n){"use strict";n("7a82");var r=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("62dd")),i=r(n("2e86")),o={name:"TemplateSuspended",mixins:[a.default],components:{NavIndexButton:i.default},data:function(){return{}},methods:{navTuniaoUI:function(t){wx.vibrateShort(),uni.navigateTo({url:"/pages/index/index"})}}};e.default=o},ef6d:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var r={tnNavBar:n("75e2").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"template-suspended"},[n("tn-nav-bar",{attrs:{fixed:!0,alpha:!0,customBack:!0}},[n("v-uni-view",{staticClass:"tn-custom-nav-bar__back",attrs:{slot:"back"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}},slot:"back"},[n("v-uni-text",{staticClass:"icon tn-icon-left"}),n("v-uni-text",{staticClass:"icon tn-icon-home-capsule-fill"})],1)],1),n("v-uni-view",{staticClass:"wechat tnxuanfu",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTuniaoUI.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"bg0 pa"},[n("v-uni-view",{staticClass:"bg1"},[n("v-uni-image",{staticClass:"button-shop shadow",attrs:{src:"https://tnuiimage.tnkjapp.com/my/my7.png"}})],1)],1),n("v-uni-view",{staticClass:"hx-box pa"},[n("v-uni-view",{staticClass:"pr"},[n("v-uni-view",{staticClass:"hx-k1 pa0"},[n("v-uni-view",{staticClass:"span"})],1),n("v-uni-view",{staticClass:"hx-k2 pa0"},[n("v-uni-view",{staticClass:"span"})],1),n("v-uni-view",{staticClass:"hx-k3 pa0"},[n("v-uni-view",{staticClass:"span"})],1),n("v-uni-view",{staticClass:"hx-k4 pa0"},[n("v-uni-view",{staticClass:"span"})],1),n("v-uni-view",{staticClass:"hx-k5 pa0"},[n("v-uni-view",{staticClass:"span"})],1),n("v-uni-view",{staticClass:"hx-k6 pa0"},[n("v-uni-view",{staticClass:"span"})],1)],1)],1)],1)],1)},i=[]},f237:function(t,e,n){"use strict";n.r(e);var r=n("df93"),a=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a}}]);