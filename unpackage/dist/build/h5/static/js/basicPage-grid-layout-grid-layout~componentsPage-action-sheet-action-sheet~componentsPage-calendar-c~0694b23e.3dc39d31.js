(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["basicPage-grid-layout-grid-layout~componentsPage-action-sheet-action-sheet~componentsPage-calendar-c~0694b23e"],{"1cb1":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.dynamic-demo[data-v-eb93b4dc]{padding-top:%?78?%\r\n  /* 顶部模式切换start */\r\n  /* 顶部模式切换end */\r\n  /* 演示内容展示start */\r\n  /* 演示内容展示end */\r\n  /* 可选项start */\r\n  /* 可选项end */}.dynamic-demo .mode-switch[data-v-eb93b4dc]{width:100%;display:flex;align-items:center;justify-content:center;margin-top:%?75?%;padding:0 %?30?%}.dynamic-demo .mode-switch__container[data-v-eb93b4dc]{position:relative;display:flex;flex-direction:row;align-items:center;width:%?476?%;height:%?62?%;background-color:#fff;box-shadow:%?0?% %?10?% %?50?% %?0?% rgba(0,3,72,.1);border-radius:%?31?%}.dynamic-demo .mode-switch__item[data-v-eb93b4dc]{flex:1;height:%?62?%;width:100%;line-height:%?62?%;text-align:center;font-size:%?28?%;color:#aaa;z-index:2;transition:all .3s}.dynamic-demo .mode-switch__item--active[data-v-eb93b4dc]{color:#fff;font-weight:700}.dynamic-demo .mode-switch__slider[data-v-eb93b4dc]{position:absolute;height:%?62?%;border-radius:%?31?%;background-image:linear-gradient(-86deg,#00c3ff,#58fff5);box-shadow:%?1?% %?10?% %?24?% %?0?% rgba(0,195,255,.4666666666666667);z-index:1;transition:all .3s cubic-bezier(.68,-.55,.265,1.55)}.dynamic-demo .demo-container[data-v-eb93b4dc]{min-height:%?327?%;width:calc(100% - %?60?%);background-color:#fff;box-shadow:%?0?% %?10?% %?50?% %?0?% rgba(0,3,72,.1);margin:0 %?30?% %?5?% %?30?%;border-radius:%?20?%;position:relative;display:flex;justify-content:center;align-items:center}.dynamic-demo .demo-container--full[data-v-eb93b4dc]{display:inline-block;padding-bottom:%?20?%;min-height:%?0?%;padding:%?10?% %?20?% %?30?%}.dynamic-demo .demo-container .demo[data-v-eb93b4dc]{padding-top:%?70?%}.dynamic-demo .demo-container .demo__tips__icon[data-v-eb93b4dc]{position:absolute;top:%?20?%;right:%?16?%;width:%?39?%;height:%?39?%;line-height:%?39?%;font-size:%?39?%}.dynamic-demo .demo-container .demo__tips__icon .icon[data-v-eb93b4dc]{background:linear-gradient(-45deg,#ff8359,#ffdf40);-webkit-background-clip:text;color:transparent;text-shadow:%?0?% %?10?% %?10?% rgba(255,156,82,.2)}.dynamic-demo .demo-container .demo__tips__content[data-v-eb93b4dc]{position:absolute;top:%?65?%;right:%?16?%;font-size:%?20?%;margin-left:%?20?%;word-wrap:normal;display:flex;flex-direction:column;background-color:#e6e6e6;padding:%?20?%;border-radius:%?10?%;transition:-webkit-transform .3s cubic-bezier(.68,-.55,.265,1);transition:transform .3s cubic-bezier(.68,-.55,.265,1);transition:transform .3s cubic-bezier(.68,-.55,.265,1),-webkit-transform .3s cubic-bezier(.68,-.55,.265,1);-webkit-transform-origin:0 0;transform-origin:0 0;z-index:999999}.dynamic-demo .demo-container .demo__tips__content--hide[data-v-eb93b4dc]{-webkit-transform:scaleY(0);transform:scaleY(0)}.dynamic-demo .demo-container .demo__tips__content--show[data-v-eb93b4dc]{-webkit-transform:scaleY(100%);transform:scaleY(100%)}.dynamic-demo .demo-container .demo__tips__content--show[data-v-eb93b4dc]::after{content:"";width:0;height:0;border-width:4px;border-style:solid;border-color:transparent transparent hsla(0,0%,58.4%,.1) transparent;position:absolute;top:-8px;right:6px}.dynamic-demo .section-container[data-v-eb93b4dc]{width:100%;height:auto;margin-top:%?70?%}.dynamic-demo .section-container .section__content[data-v-eb93b4dc]{margin-top:%?70?%;display:none}.dynamic-demo .section-container .section__content--visible[data-v-eb93b4dc]{display:block}.dynamic-demo .section-container .section__content--visible[data-v-eb93b4dc]:last-child{padding-bottom:calc(%?70?% + env(safe-area-inset-bottom))}.dynamic-demo .section-container .section__content[data-v-eb93b4dc]:nth-child(1){margin-top:%?0?%}.dynamic-demo .section-container .section__content__title[data-v-eb93b4dc]{display:flex;justify-content:center;align-items:center;margin:0 %?30?%;text-align:center}.dynamic-demo .section-container .section__content__title__left-line[data-v-eb93b4dc], .dynamic-demo .section-container .section__content__title__right-line[data-v-eb93b4dc]{width:%?100?%;height:%?2?%;position:relative}.dynamic-demo .section-container .section__content__title__left-line[data-v-eb93b4dc]::after{content:"";background:inherit;width:%?12?%;height:%?12?%;position:absolute;top:%?-12?%;right:%?0?%;border-radius:50%;-webkit-transform:translateY(50%);transform:translateY(50%)}.dynamic-demo .section-container .section__content__title__right-line[data-v-eb93b4dc]::after{content:"";background:inherit;width:%?12?%;height:%?12?%;position:absolute;top:%?-12?%;left:%?0?%;border-radius:50%;-webkit-transform:translateY(50%);transform:translateY(50%)}.dynamic-demo .section-container .section__content__title--text[data-v-eb93b4dc]{-webkit-background-clip:text;color:transparent;min-width:%?124?%;height:%?30?%;font-size:%?32?%;line-height:1;margin:0 %?35?%}.dynamic-demo .section-container .section__content__btns[data-v-eb93b4dc]{width:calc(100% - %?60?%);margin:0 %?30?%;margin-top:%?29?%;padding:%?50?% %?30?% %?0?% %?0?%;background-color:#fff;box-shadow:%?0?% %?10?% %?50?% %?0?% rgba(0,3,72,.1);border-radius:%?20?%;display:flex;flex-direction:row;align-items:center;justify-content:flex-start;flex-wrap:wrap}.dynamic-demo .section-container .section__content__btns__item[data-v-eb93b4dc]{max-width:30%;padding:%?17?% %?36?%;border-radius:%?10?%;margin-bottom:%?40?%;margin-left:%?40?%;position:relative;z-index:1}.dynamic-demo .section-container .section__content__btns__item__bg[data-v-eb93b4dc]{position:absolute;top:0;left:0;width:100%;height:100%;border-radius:inherit;z-index:-1;opacity:0;-webkit-transform:scale(0);transform:scale(0);transition:all .3s cubic-bezier(.175,.885,.32,1.275)}.dynamic-demo .section-container .section__content__btns__item__bg--active[data-v-eb93b4dc]{opacity:1;-webkit-transform:scale(1);transform:scale(1)}.dynamic-demo .section-container .section__content__btns__item--text[data-v-eb93b4dc]{font-size:%?24?%;line-height:1.2em;transition:all .3s cubic-bezier(.175,.885,.32,1.275)}.dynamic-demo .section-container .section__content__btns__item--text--active[data-v-eb93b4dc]{color:#fff}',""]),t.exports=e},"3bef":function(t,e,i){"use strict";i.r(e);var n=i("b1ef"),o=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=o.a},"5a5f":function(t,e,i){"use strict";i.r(e);var n=i("ff2a"),o=i("3bef");for(var s in o)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(s);i("8a58");var c=i("f0c5"),a=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"eb93b4dc",null,!1,n["a"],void 0);e["default"]=a.exports},"8a58":function(t,e,i){"use strict";var n=i("d8ac"),o=i.n(n);o.a},b1ef:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("d81d"),i("ac1f"),i("cb29"),i("4de4"),i("d3b7");var n={name:"dynamic-demo-template",props:{sectionList:{type:Array,default:function(){return[]}},tips:{type:[String,Array],default:""},full:{type:Boolean,default:!1},customBar:{type:Boolean,default:!0},fullWindowsScroll:{type:Boolean,default:!1},noDemo:{type:Boolean,default:!1}},computed:{tipsData:function(){return"string"===typeof this.tips?[this.tips]:this.tips},haveTips:function(){return this.tips&&this.tips.length>0},multiMode:function(){return this.sectionList.length>1},sectionModeList:function(){return this.sectionList.map((function(t){return t.name}))}},data:function(){return{tuniaoColorList:this.$tn.color.getTuniaoColorList(),_sectionList:[],sectionModeListInfos:[],modeIndex:0,modeSwitchSliderStyle:{width:0,left:0},showContentTips:!1,sectionScrollViewStyle:{height:0},btnsList:[],sectionIndex:[],sectionScrollFlag:!0}},watch:{sectionList:{handler:function(t){this.initSectionBtns()},deep:!0},sectionScrollFlag:function(t){t||(this.sectionScrollViewStyle.height="auto")},fullWindowsScroll:{handler:function(t){t&&(this.sectionScrollViewStyle.height="auto")},immediate:!0}},created:function(){this.sectionModeListInfos=this.sectionModeList.map((function(t){return{name:t}})),this.initSectionBtns()},mounted:function(){var t=this;this.$nextTick((function(){t.initSectionScrollView(),t.multiMode&&t.getModeTabsInfo()}))},methods:{initSectionScrollView:function(){var t=this;this.fullWindowsScroll||uni.getSystemInfo({success:function(e){var i=t.customBar?0:t.vuex_custom_bar_height;t.multiMode?uni.createSelectorQuery().in(t).select(".mode-switch").boundingClientRect((function(n){if(n.bottom>=e.safeArea.height)t.sectionScrollFlag=!1;else{t.sectionScrollFlag=!0;var o=e.safeArea.height-n.bottom;t.sectionScrollViewStyle.height=o-i+e.statusBarHeight-uni.upx2px(75)+"px"}})).exec():t.noDemo?t.sectionScrollFlag=!1:uni.createSelectorQuery().in(t).select(".demo-container").boundingClientRect((function(n){if(n.bottom>=e.safeArea.height)t.sectionScrollFlag=!1;else{t.sectionScrollFlag=!0;var o=e.safeArea.height-n.bottom;t.sectionScrollViewStyle.height=o-i+e.statusBarHeight-uni.upx2px(75)+"px"}})).exec()}})},updateSectionScrollView:function(){var t=this;this.$nextTick((function(){t.initSectionScrollView()}))},getModeTabsInfo:function(){for(var t=this,e=uni.createSelectorQuery().in(this),i=0;i<this.sectionModeListInfos.length;i++)e.select(".mode-switch-item-"+i).boundingClientRect();e.exec((function(e){e.length?(e.map((function(e,i){t.sectionModeListInfos[i].width=e.width})),t.modeSwitchSliderStyle.width=t.sectionModeListInfos[0].width+"px",t.modeSliderPosition()):setTimeout((function(){t.getModeTabsInfo()}),10)}))},modeSliderPosition:function(){var t=this,e=0;this.sectionModeListInfos.map((function(i,n){n<t.modeIndex&&(e+=i.width)})),this.modeSwitchSliderStyle.left=e+"px"},switchMode:function(t){t!==this.modeIndex&&(this.modeIndex=t,this.modeSliderPosition(),this.updateSectionBtns(),this.$emit("modeClick",{index:t}))},demoTipsClick:function(){this.showContentTips=!this.showContentTips},initSectionBtns:function(){this.sectionIndex=[],this.sectionIndex=this.sectionList.map((function(t){return t.hasOwnProperty("section")&&t.section.length>0?Array(t.section.length).fill({value:0,change:!1}):[]})),this._sectionList=this.$tn.deepClone(this.sectionList),this._sectionList.map((function(t){var e=t.section.map((function(t){return t.hasOwnProperty("show")||(t.show=!0),t}));return t.section=e,t})),this.updateSectionBtns()},updateSectionBtns:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1,i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this._sectionList[this.modeIndex]["section"];this.btnsList=n.map((function(n,o){var s=t.sectionIndex[t.modeIndex][o]["change"]||!1,c=t.sectionIndex[t.modeIndex][o]["value"]||0,a=s?c:n.hasOwnProperty("current")?n.current:0,d=-1!==e&&e===o?i:!n.hasOwnProperty("show")||n.show;return a<0&&(a=0),a>=n.optional.length&&(a=n.optional.length),t.$set(t.sectionIndex[t.modeIndex],o,{value:a,change:s}),n.show=d,n}))},updateSectionBtnsState:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1,i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(this.$tn.array.isArray(e)){if(0===e.length)return;e=e.filter((function(e){return e>=0&&e<t.sectionList[t.modeIndex]["section"].length})),e.map((function(e){t.btnsList[e]["show"]=i,t._sectionList[t.modeIndex]["section"][e]["show"]=i}))}else{if(e<0||e>=this.sectionList[this.modeIndex]["section"].length)return;this.btnsList[e]["show"]=i,this._sectionList[this.modeIndex]["section"][e]["show"]=i}},updateSectionBtnsValue:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;e<0||e>=this.sectionList[t]["section"].length||(this.sectionIndex[t][e]={value:i,change:!0})},sectionBtnClick:function(t,e){this.$set(this.sectionIndex[this.modeIndex],t,{value:e,change:!0}),this.$emit("click",{methods:this.btnsList[t]["methods"],index:e,name:this.btnsList[t]["optional"][e]})}}};e.default=n},cb29:function(t,e,i){var n=i("23e7"),o=i("81d5"),s=i("44d2");n({target:"Array",proto:!0},{fill:o}),s("fill")},d8ac:function(t,e,i){var n=i("1cb1");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("7dfacb6b",n,!0,{sourceMap:!1,shadowMode:!1})},ff2a:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"dynamic-demo"},[t.noDemo?t._e():i("v-uni-view",{staticClass:"demo-container",class:{"demo-container--full":t.full}},[i("v-uni-view",{staticClass:"demo"},[t._t("default")],2),t.haveTips?i("v-uni-view",[i("v-uni-view",{staticClass:"demo__tips__icon",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.demoTipsClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"icon tn-icon-help"})],1),i("v-uni-view",{staticClass:"demo__tips__content",class:[t.showContentTips?"demo__tips__content--show":"demo__tips__content--hide"]},t._l(t.tipsData,(function(e,n){return i("v-uni-view",{key:n,staticClass:"demo__tips__content--item"},[t._v(t._s(e))])})),1)],1):t._e()],1),t.multiMode?i("v-uni-view",{staticClass:"mode-switch"},[i("v-uni-view",{staticClass:"mode-switch__container"},[t._l(t.sectionModeListInfos,(function(e,n){return i("v-uni-view",{key:n,staticClass:"mode-switch__item",class:["mode-switch-item-"+n,{"mode-switch__item--active":t.modeIndex===n}],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.switchMode(n)}}},[t._v(t._s(e.name))])})),i("v-uni-view",{staticClass:"mode-switch__slider",style:[t.modeSwitchSliderStyle]})],2)],1):t._e(),i("v-uni-view",{staticClass:"section-container"},[i("v-uni-scroll-view",{staticClass:"section__scroll-view",class:{"section__scroll-view--auto":"auto"===t.sectionScrollViewStyle.height},style:[t.sectionScrollViewStyle],attrs:{"scroll-y":"auto"!==t.sectionScrollViewStyle.height}},[t._l(t.btnsList,(function(e,n){return[i("v-uni-view",{key:n+"_0",staticClass:"section__content",class:{"section__content--visible":e.show}},[i("v-uni-view",{staticClass:"section__content__title"},[i("v-uni-view",{staticClass:"section__content__title__left-line",class:["tn-main-gradient-"+t.tuniaoColorList[n]]}),i("v-uni-view",{staticClass:"section__content__title--text tn-text-ellipsis",class:["tn-main-gradient-"+t.tuniaoColorList[n]]},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"section__content__title__right-line",class:["tn-main-gradient-"+t.tuniaoColorList[n]]})],1),i("v-uni-view",{staticClass:"section__content__btns"},t._l(e.optional,(function(e,o){return i("v-uni-view",{key:o,staticClass:"section__content__btns__item",class:["tn-main-gradient-"+t.tuniaoColorList[n]+"--light"],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sectionBtnClick(n,o)}}},[i("v-uni-view",{staticClass:"section__content__btns__item__bg",class:["tn-main-gradient-"+t.tuniaoColorList[n],{"section__content__btns__item__bg--active":t.sectionIndex[t.modeIndex][n]["value"]===o}]}),i("v-uni-view",{staticClass:"section__content__btns__item--text tn-text-ellipsis",class:[t.sectionIndex[t.modeIndex][n]["value"]===o?"section__content__btns__item--text--active":"tn-color-"+t.tuniaoColorList[n]]},[t._v(t._s(e))])],1)})),1)],1)]}))],2)],1)],1)},o=[]}}]);