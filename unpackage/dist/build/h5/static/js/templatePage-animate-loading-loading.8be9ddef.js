(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["templatePage-animate-loading-loading"],{"2e3d":function(t,e,n){"use strict";var a=n("3b42"),r=n.n(a);r.a},"3b42":function(t,e,n){var a=n("6132");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("6d2481ed",a,!0,{sourceMap:!1,shadowMode:!1})},"3e11":function(t,e,n){"use strict";n.r(e);var a=n("5606"),r=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},5606:function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("62dd")),i={name:"TemplateLoading",mixins:[r.default],data:function(){return{}},methods:{}};e.default=i},6132:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-custom-nav-bar__back[data-v-68c67f24]{width:100%;height:100%;position:relative;display:flex;justify-content:space-evenly;align-items:center;box-sizing:border-box;background-color:rgba(0,0,0,.15);border-radius:%?1000?%;border:%?1?% solid hsla(0,0%,100%,.5);color:#fff;font-size:18px}.tn-custom-nav-bar__back .icon[data-v-68c67f24]{display:block;flex:1;margin:auto;text-align:center}.tn-custom-nav-bar__back[data-v-68c67f24]:before{content:" ";width:%?1?%;height:110%;position:absolute;top:22.5%;left:0;right:0;margin:auto;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;pointer-events:none;box-sizing:border-box;opacity:.7;background-color:#fff}\r\n/* 移动背景部分 */.bg-contaniner[data-v-68c67f24]{position:fixed;top:%?0?%;left:%?-300?%;--text-color:#fa3838;--bg-color:#fff;--bg-size:200px;height:100%;display:grid;place-items:center;place-content:center;\r\n  /* grid-template-areas: "body"; */overflow:hidden;font-family:Dela Gothic One,sans-serif;background-color:var(--bg-color);z-index:-1}.bg-contaniner[data-v-68c67f24]::before{--size:150vmax;grid-area:body;content:"";inline-size:var(--size);block-size:var(--size);background-image:url(https://tnuiimage.tnkjapp.com/animate/animate1.jpg);background-size:var(--bg-size);background-repeat:repeat;-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:.25;-webkit-animation:bg-data-v-68c67f24 6s linear infinite;animation:bg-data-v-68c67f24 6s linear infinite}@media (prefers-reduced-motion:reduce){.bg-contaniner[data-v-68c67f24]::before{-webkit-animation-duration:0s;animation-duration:0s}}@-webkit-keyframes bg-data-v-68c67f24{to{background-position:0 calc(var(--bg-size) * -1)}}@keyframes bg-data-v-68c67f24{to{background-position:0 calc(var(--bg-size) * -1)}}\r\n/* 加载部分 */.components-anloading[data-v-68c67f24]{margin:0;width:100%;height:100vh;color:#fff\r\n  /* background: linear-gradient(45deg, #0fd850, #f9f047); */}.hex-border[data-v-68c67f24]{position:absolute;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);left:50%;top:50%;width:170px;height:170px;border:2px solid rgba(235,237,241,.8);border-radius:100%}.hex-border[data-v-68c67f24]::before{content:"";position:absolute;width:174px;height:174px;border:2px solid #f4b4c4;border-radius:100%;box-sizing:border-box;clip-path:inset(0 135px 135px 0);-webkit-clip-path:inset(0 135px 135px 0);top:-4px;left:-4px;-webkit-animation:rotateSmall-data-v-68c67f24 2s linear infinite;animation:rotateSmall-data-v-68c67f24 2s linear infinite;z-index:2}.hex-border[data-v-68c67f24]::after{content:"";position:absolute;width:174px;height:174px;border:2px solid #f4b4c4;border-radius:100%;box-sizing:border-box;top:-4px;left:-4px;clip-path:inset(0 30px 30px 0);-webkit-clip-path:inset(0 30px 30px 0);-webkit-animation:rotateLarge-data-v-68c67f24 1.6s linear infinite;animation:rotateLarge-data-v-68c67f24 1.6s linear infinite}.hexagons[data-v-68c67f24]{position:relative;border-radius:100%;padding:5%;top:30px;left:35px}.hexagon[data-v-68c67f24]{position:absolute;width:40px;height:23px;background-color:#f4b4c4;-webkit-transform:scale(1.02);transform:scale(1.02);-webkit-transform-origin:center;transform-origin:center}.hexagon[data-v-68c67f24]::before{content:"";position:absolute;top:-11.5px;left:0;width:0;height:0;border-left:20px solid transparent;border-right:20px solid transparent;border-bottom:11.5px solid #f4b4c4}.hexagon[data-v-68c67f24]::after{content:"";position:absolute;top:23px;left:0;width:0;height:0;border-left:20px solid transparent;border-right:20px solid transparent;border-top:11.5px solid #f4b4c4}.hexagon[data-v-68c67f24]:nth-child(1){-webkit-animation:animateHex-data-v-68c67f24 3s infinite;animation:animateHex-data-v-68c67f24 3s infinite}.hexagon[data-v-68c67f24]:nth-child(2){left:53px;-webkit-animation:animateHex-data-v-68c67f24 3s .2s infinite;animation:animateHex-data-v-68c67f24 3s .2s infinite}.hexagon[data-v-68c67f24]:nth-child(3){left:-13px;top:46px;-webkit-animation:animateHex-data-v-68c67f24 3s 1s infinite;animation:animateHex-data-v-68c67f24 3s 1s infinite}.hexagon[data-v-68c67f24]:nth-child(4){left:31px;top:46px;-webkit-animation:animateHex-data-v-68c67f24 3s 1.2s infinite;animation:animateHex-data-v-68c67f24 3s 1.2s infinite}.hexagon[data-v-68c67f24]:nth-child(5){left:75px;top:46px;-webkit-animation:animateHex-data-v-68c67f24 3s .4s infinite;animation:animateHex-data-v-68c67f24 3s .4s infinite}.hexagon[data-v-68c67f24]:nth-child(6){top:84px;-webkit-animation:animateHex-data-v-68c67f24 3s .8s infinite;animation:animateHex-data-v-68c67f24 3s .8s infinite}.hexagon[data-v-68c67f24]:nth-child(7){left:53px;top:84px;-webkit-animation:animateHex-data-v-68c67f24 3s .6s infinite;animation:animateHex-data-v-68c67f24 3s .6s infinite}@-webkit-keyframes rotateSmall-data-v-68c67f24{100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotateSmall-data-v-68c67f24{100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes rotateLarge-data-v-68c67f24{0%{clip-path:inset(0 30px 30px 0);-webkit-clip-path:inset(0 30px 30px 0)}50%{clip-path:inset(0 150px 150px 0);-webkit-clip-path:inset(0 150px 150px 0)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn);clip-path:inset(0 30px 30px 0);-webkit-clip-path:inset(0 30px 30px 0)}}@keyframes rotateLarge-data-v-68c67f24{0%{clip-path:inset(0 30px 30px 0);-webkit-clip-path:inset(0 30px 30px 0)}50%{clip-path:inset(0 150px 150px 0);-webkit-clip-path:inset(0 150px 150px 0)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn);clip-path:inset(0 30px 30px 0);-webkit-clip-path:inset(0 30px 30px 0)}}@-webkit-keyframes animateHex-data-v-68c67f24{0%{-webkit-transform:scale(1.02);transform:scale(1.02)}20%,\r\n  50%{-webkit-transform:scale(.6);transform:scale(.6);opacity:0}65%{-webkit-transform:scale(1.02);transform:scale(1.02);opacity:1}}@keyframes animateHex-data-v-68c67f24{0%{-webkit-transform:scale(1.02);transform:scale(1.02)}20%,\r\n  50%{-webkit-transform:scale(.6);transform:scale(.6);opacity:0}65%{-webkit-transform:scale(1.02);transform:scale(1.02);opacity:1}}',""]),t.exports=e},"62dd":function(t,e,n){var a=n("7ec2").default,r=n("c973").default;t.exports={data:function(){return{}},onLoad:function(){this.updateCustomBarInfo()},methods:{goBack:function(){var t=getCurrentPages();if(t&&t.length>0){var e=t[0];1!=t.length||e.route&&"pages/index/index"==e.route?uni.navigateBack({delta:1}):uni.reLaunch({url:"/pages/index/index"})}else uni.reLaunch({url:"/pages/index/index"})},updateCustomBarInfo:function(){var t=this;return r(a().mark((function e(){var n,r,i;return a().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.vuex_custom_bar_height,r=t.vuex_status_bar_height,n){e.next=15;break}return e.prev=3,e.next=6,t.$tn.updateCustomBar();case 6:i=e.sent,n=i.customBarHeight,r=i.statusBarHeight,e.next=15;break;case 11:return e.prev=11,e.t0=e["catch"](3),setTimeout((function(){t.updateCustomBarInfo()}),10),e.abrupt("return");case 15:t.$tn.vuex("vuex_status_bar_height",r),t.$tn.vuex("vuex_custom_bar_height",n);case 17:case"end":return e.stop()}}),e,null,[[3,11]])})))()}}}},"7ec2":function(t,e,n){n("7a82"),n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("b636"),n("944a"),n("0c47"),n("23dc"),n("3410"),n("d9e2"),n("d401"),n("14d9"),n("159b"),n("131a"),n("26e9"),n("fb6a");var a=n("7037")["default"];function r(){"use strict";
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t.exports=r=function(){return e},t.exports.__esModule=!0,t.exports["default"]=t.exports;var e={},n=Object.prototype,i=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},c="function"==typeof Symbol?Symbol:{},s=c.iterator||"@@iterator",f=c.asyncIterator||"@@asyncIterator",u=c.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(P){l=function(t,e,n){return t[e]=n}}function d(t,e,n,a){var r=e&&e.prototype instanceof v?e:v,i=Object.create(r.prototype),c=new j(a||[]);return o(i,"_invoke",{value:L(t,n,c)}),i}function p(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(P){return{type:"throw",arg:P}}}e.wrap=d;var h={};function v(){}function x(){}function b(){}var m={};l(m,s,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(H([])));w&&w!==n&&i.call(w,s)&&(m=w);var y=b.prototype=v.prototype=Object.create(m);function k(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){var n;o(this,"_invoke",{value:function(r,o){function c(){return new e((function(n,c){(function n(r,o,c,s){var f=p(t[r],t,o);if("throw"!==f.type){var u=f.arg,l=u.value;return l&&"object"==a(l)&&i.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,c,s)}),(function(t){n("throw",t,c,s)})):e.resolve(l).then((function(t){u.value=t,c(u)}),(function(t){return n("throw",t,c,s)}))}s(f.arg)})(r,o,n,c)}))}return n=n?n.then(c,c):c()}})}function L(t,e,n){var a="suspendedStart";return function(r,i){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw i;return z()}for(n.method=r,n.arg=i;;){var o=n.delegate;if(o){var c=E(o,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var s=p(t,e,n);if("normal"===s.type){if(a=n.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(a="completed",n.method="throw",n.arg=s.arg)}}}function E(t,e){var n=e.method,a=t.iterator[n];if(void 0===a)return e.delegate=null,"throw"===n&&t.iterator["return"]&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var r=p(a,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,h;var i=r.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function H(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:z}}function z(){return{value:void 0,done:!0}}return x.prototype=b,o(y,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:x,configurable:!0}),x.displayName=l(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,l(t,u,"GeneratorFunction")),t.prototype=Object.create(y),t},e.awrap=function(t){return{__await:t}},k(_.prototype),l(_.prototype,f,(function(){return this})),e.AsyncIterator=_,e.async=function(t,n,a,r,i){void 0===i&&(i=Promise);var o=new _(d(t,n,a,r),i);return e.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},k(y),l(y,u,"Generator"),l(y,s,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var a in e)n.push(a);return n.reverse(),function t(){for(;n.length;){var a=n.pop();if(a in e)return t.value=a,t.done=!1,t}return t.done=!0,t}},e.values=H,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,a){return o.type="throw",o.arg=t,e.next=n,a&&(e.method="next",e.arg=void 0),!!a}for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a],o=r.completion;if("root"===r.tryLoc)return n("end");if(r.tryLoc<=this.prev){var c=i.call(r,"catchLoc"),s=i.call(r,"finallyLoc");if(c&&s){if(this.prev<r.catchLoc)return n(r.catchLoc,!0);if(this.prev<r.finallyLoc)return n(r.finallyLoc)}else if(c){if(this.prev<r.catchLoc)return n(r.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return n(r.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&i.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var r=a;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var o=r?r.completion:{};return o.type=t,o.arg=e,r?(this.method="next",this.next=r.finallyLoc,h):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var a=n.completion;if("throw"===a.type){var r=a.arg;O(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:H(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},e}t.exports=r,t.exports.__esModule=!0,t.exports["default"]=t.exports},c973:function(t,e,n){function a(t,e,n,a,r,i,o){try{var c=t[i](o),s=c.value}catch(f){return void n(f)}c.done?e(s):Promise.resolve(s).then(a,r)}n("d3b7"),t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function c(t){a(o,r,i,c,s,"next",t)}function s(t){a(o,r,i,c,s,"throw",t)}c(void 0)}))}},t.exports.__esModule=!0,t.exports["default"]=t.exports},d4d7:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={tnNavBar:n("75e2").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"template-loading"},[n("tn-nav-bar",{attrs:{fixed:!0,alpha:!0,customBack:!0}},[n("v-uni-view",{staticClass:"tn-custom-nav-bar__back",attrs:{slot:"back"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}},slot:"back"},[n("v-uni-text",{staticClass:"icon tn-icon-left"}),n("v-uni-text",{staticClass:"icon tn-icon-home-capsule-fill"})],1)],1),n("v-uni-view",{staticClass:"bg-contaniner"}),n("v-uni-view",{staticClass:"container-content hex-border"},[n("v-uni-view",{staticClass:"hexagons"},[n("v-uni-view",{staticClass:"hexagon"}),n("v-uni-view",{staticClass:"hexagon"}),n("v-uni-view",{staticClass:"hexagon"}),n("v-uni-view",{staticClass:"hexagon"}),n("v-uni-view",{staticClass:"hexagon"}),n("v-uni-view",{staticClass:"hexagon"}),n("v-uni-view",{staticClass:"hexagon"})],1)],1)],1)},i=[]},f9ae:function(t,e,n){"use strict";n.r(e);var a=n("d4d7"),r=n("3e11");for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("2e3d");var o=n("f0c5"),c=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"68c67f24",null,!1,a["a"],void 0);e["default"]=c.exports}}]);