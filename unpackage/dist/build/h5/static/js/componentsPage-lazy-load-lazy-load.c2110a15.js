(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["componentsPage-lazy-load-lazy-load"],{"10e0":function(t,a,n){"use strict";n.r(a);var s=n("319d"),o=n("6272");for(var e in o)["default"].indexOf(e)<0&&function(t){n.d(a,t,(function(){return o[t]}))}(e);n("9d4a");var p=n("f0c5"),i=Object(p["a"])(o["default"],s["b"],s["c"],!1,null,"0b36acd3",null,!1,s["a"],void 0);a["default"]=i.exports},"2fde":function(t,a,n){var s=n("c384");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var o=n("4f06").default;o("ced121da",s,!0,{sourceMap:!1,shadowMode:!1})},"319d":function(t,a,n){"use strict";n.d(a,"b",(function(){return o})),n.d(a,"c",(function(){return e})),n.d(a,"a",(function(){return s}));var s={tnNavBar:n("75e2").default,tnLazyLoad:n("fcba").default,tnLoadMore:n("c8b6").default},o=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",{staticClass:"components-lazy-load"},[n("tn-nav-bar",{attrs:{fixed:!0}},[t._v("懒加载")]),n("v-uni-view",{style:{paddingTop:t.vuex_custom_bar_height+"px"}},[n("v-uni-view",{staticClass:"content"},[t._l(t.list,(function(t,a){return[n("v-uni-view",{key:a+"_0",staticClass:"item"},[n("tn-lazy-load",{attrs:{index:a,image:t.src,threshold:-450,height:400,imgMode:"aspectFill"}})],1)]}))],2),n("tn-load-more",{attrs:{status:t.status},on:{loadmore:function(a){arguments[0]=a=t.$handleEvent(a),t.getData.apply(void 0,arguments)}}})],1)],1)},e=[]},"4d00":function(t,a,n){"use strict";n("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,n("14d9");var s={name:"ComponentsLazyLoad",data:function(){return{status:"loadmore",list:[],data:[{src:"https://tnuiimage.tnkjapp.com/shop/bag1.jpg"},{src:"https://tnuiimage.tnkjapp.com/shop/bag2.jpg"},{src:"https://tnuiimage.tnkjapp.com/shop/banner1.jpg"},{src:"https://tnuiimage.tnkjapp.com/shop/banner2.jpg"},{src:"https://tnuiimage.tnkjapp.com/shop/banner3.jpg"},{src:"https://tnuiimage.tnkjapp.com/shop/card.jpg"},{src:"https://tnuiimage.tnkjapp.com/shop/computer1.jpg"},{src:"error.jpg"},{src:"https://tnuiimage.tnkjapp.com/shop/computer2.jpg"},{src:"https://tnuiimage.tnkjapp.com/shop/content.jpg"},{src:"https://tnuiimage.tnkjapp.com/shop/cup1.jpg"},{src:"https://tnuiimage.tnkjapp.com/shop/cup2.jpg"},{src:"https://tnuiimage.tnkjapp.com/shop/office.jpg"},{src:"https://tnuiimage.tnkjapp.com/shop/phonecase1.jpg"},{src:"https://tnuiimage.tnkjapp.com/shop/phonecase2.jpg"},{src:"https://tnuiimage.tnkjapp.com/shop/pillow.jpg"},{src:"error.jpg"},{src:"https://tnuiimage.tnkjapp.com/shop/pillow2.jpg"},{src:"https://tnuiimage.tnkjapp.com/shop/prototype1.jpg"},{src:"https://tnuiimage.tnkjapp.com/shop/prototype2.jpg"},{src:"https://tnuiimage.tnkjapp.com/shop/sticker.jpg"},{src:"https://tnuiimage.tnkjapp.com/shop/watch1.jpg"},{src:"https://tnuiimage.tnkjapp.com/shop/watch2.jpg"},{src:"error.jpg"}]}},onLoad:function(){this.getData()},onReachBottom:function(){uni.$emit("tOnLazyLoadReachBottom"),this.getData()},methods:{getData:function(){var t=this,a=0;this.status="loading",setTimeout((function(){for(var n=0;n<10;n++)a=t.$tn.number.randomInt(0,t.data.length-1),t.list.push({src:t.data[a].src});t.status="loadmore"}),1500)}}};a.default=s},6272:function(t,a,n){"use strict";n.r(a);var s=n("4d00"),o=n.n(s);for(var e in s)["default"].indexOf(e)<0&&function(t){n.d(a,t,(function(){return s[t]}))}(e);a["default"]=o.a},"9d4a":function(t,a,n){"use strict";var s=n("2fde"),o=n.n(s);o.a},c384:function(t,a,n){var s=n("24fb");a=s(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.content[data-v-0b36acd3]{display:flex;justify-content:space-between;flex-wrap:wrap;padding:%?30?%}.content .item[data-v-0b36acd3]{flex:0 0 %?335?%;height:%?400?%;margin-bottom:%?20?%;border-radius:%?10?%;overflow:hidden}',""]),t.exports=a}}]);