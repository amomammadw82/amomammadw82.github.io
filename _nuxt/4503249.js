(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{442:function(t,e,o){"use strict";var n=o(437);e.a=n.a.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return n.a.options.computed.classes.call(this)}},methods:{genData:n.a.options.methods.genData}})},453:function(t,e,o){var content=o(454);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(39).default)("5ea6d85e",content,!0,{sourceMap:!1})},454:function(t,e,o){var n=o(38)(!1);n.push([t.i,".theme--light.v-bottom-navigation{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-bottom-navigation .v-btn:not(.v-btn--active){color:rgba(0,0,0,.6)!important}.theme--dark.v-bottom-navigation{background-color:#2e2e2e;color:#fff}.theme--dark.v-bottom-navigation .v-btn:not(.v-btn--active){color:hsla(0,0%,100%,.7)!important}.v-item-group.v-bottom-navigation{bottom:0;display:flex;left:0;justify-content:center;width:100%;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-item-group.v-bottom-navigation .v-btn{background-color:transparent;border-radius:0;box-shadow:none;flex:0 1 auto;font-size:.75rem;height:inherit;max-width:168px;min-width:80px;position:relative;text-transform:none}.v-item-group.v-bottom-navigation .v-btn:after{content:none}.v-item-group.v-bottom-navigation .v-btn .v-btn__content{flex-direction:column-reverse;height:inherit}.v-item-group.v-bottom-navigation .v-btn .v-btn__content>:not(.v-icon){line-height:1.2}.v-item-group.v-bottom-navigation .v-btn.v-btn--active{color:inherit}.v-item-group.v-bottom-navigation .v-btn.v-btn--active:not(:hover):before{opacity:0}.v-item-group.v-bottom-navigation--absolute,.v-item-group.v-bottom-navigation--fixed{z-index:4}.v-item-group.v-bottom-navigation--absolute{position:absolute}.v-item-group.v-bottom-navigation--active{transform:translate(0)}.v-item-group.v-bottom-navigation--fixed{position:fixed}.v-item-group.v-bottom-navigation--grow .v-btn{width:100%}.v-item-group.v-bottom-navigation--horizontal .v-btn>.v-btn__content{flex-direction:row-reverse}.v-item-group.v-bottom-navigation--horizontal .v-btn>.v-btn__content>.v-icon{margin-bottom:0;margin-right:16px}.v-item-group.v-bottom-navigation--shift .v-btn .v-btn__content>:not(.v-icon){opacity:0;position:absolute;top:calc(100% - 12px);transform:scale(.9);transition:.3s cubic-bezier(.25,.8,.5,1)}.v-item-group.v-bottom-navigation--shift .v-btn--active .v-btn__content>.v-icon{transform:translateY(-8px)}.v-item-group.v-bottom-navigation--shift .v-btn--active .v-btn__content>:not(.v-icon){opacity:1;top:calc(100% - 22px);transform:scale(1)}",""]),t.exports=n},458:function(t,e,o){"use strict";o(14),o(21),o(26),o(27);var n=o(3),r=(o(8),o(71),o(18),o(15),o(61),o(212),o(33),o(213),o(214),o(215),o(216),o(217),o(218),o(219),o(220),o(221),o(222),o(223),o(224),o(225),o(30),o(41),o(16),o(82),o(297),o(0)),c=o(132),l=o(7);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=["sm","md","lg","xl"],m=h.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),f=h.reduce((function(t,e){return t["offset"+Object(l.y)(e)]={type:[String,Number],default:null},t}),{}),y=h.reduce((function(t,e){return t["order"+Object(l.y)(e)]={type:[String,Number],default:null},t}),{}),j={col:Object.keys(m),offset:Object.keys(f),order:Object.keys(y)};function S(t,e,o){var n=t;if(null!=o&&!1!==o){if(e){var r=e.replace(t,"");n+="-".concat(r)}return"col"!==t||""!==o&&!0!==o?(n+="-".concat(o)).toLowerCase():n.toLowerCase()}}var O=new Map;e.a=r.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},m),{},{offset:{type:[String,Number],default:null}},f),{},{order:{type:[String,Number],default:null}},y),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var o=e.props,data=e.data,r=e.children,l=(e.parent,"");for(var v in o)l+=String(o[v]);var d=O.get(l);return d||function(){var t,e;for(e in d=[],j)j[e].forEach((function(t){var n=o[t],r=S(e,t,n);r&&d.push(r)}));var r=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!r||!o.cols},Object(n.a)(t,"col-".concat(o.cols),o.cols),Object(n.a)(t,"offset-".concat(o.offset),o.offset),Object(n.a)(t,"order-".concat(o.order),o.order),Object(n.a)(t,"align-self-".concat(o.alignSelf),o.alignSelf),t)),O.set(l,d)}(),t(o.tag,Object(c.a)(data,{class:d}),r)}})},474:function(t,e,o){"use strict";o.d(e,"a",(function(){return v}));var n=o(3),r=o(211),c=o(43),l=o(24),v=o(0).a.extend({props:{activeClass:String,value:{required:!1}},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots.default?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(element.data=this._b(element.data||{},element.tag,{class:Object(n.a)({},this.activeClass,this.isActive)}),element):(Object(l.c)("v-item should only contain a single element",this),element)):(Object(l.c)("v-item is missing a default scopedSlot",this),null);var element}});e.b=Object(c.a)(v,Object(r.a)("itemGroup","v-item","v-item-group")).extend({name:"v-item"})},484:function(t,e,o){"use strict";var n=o(3),r=(o(71),o(298),o(18),o(14),o(21),o(8),o(26),o(16),o(27),o(453),o(209)),c=o(43);var l=o(442),v=o(84),d=o(102),h=o(432),m=o(13);var f={inserted:function(t,e,o){var n=(e.modifiers||{}).self,r=void 0!==n&&n,c=e.value,l="object"===Object(m.a)(c)&&c.options||{passive:!0},v="function"==typeof c||"handleEvent"in c?c:c.handler,d=r?t:e.arg?document.querySelector(e.arg):window;d&&(d.addEventListener("scroll",v,l),t._onScroll=Object(t._onScroll),t._onScroll[o.context._uid]={handler:v,options:l,target:r?void 0:d})},unbind:function(t,e,o){var n;if(null!=(n=t._onScroll)&&n[o.context._uid]){var r=t._onScroll[o.context._uid],c=r.handler,l=r.options,v=r.target;(void 0===v?t:v).removeEventListener("scroll",c,l),delete t._onScroll[o.context._uid]}}},y=o(24),j=o(0).a.extend({name:"scrollable",directives:{Scroll:f},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:function(){return{currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}},computed:{canScroll:function(){return"undefined"!=typeof window},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp:function(){this.savedScroll=this.savedScroll||this.currentScroll},isActive:function(){this.savedScroll=0}},mounted:function(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(y.c)("Unable to locate element with identifier ".concat(this.scrollTarget),this))},methods:{onScroll:function(){var t=this;this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((function(){Math.abs(t.currentScroll-t.savedScroll)>t.computedScrollThreshold&&t.thresholdMet()})))},thresholdMet:function(){}}}),S=o(83),O=o(208);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(c.a)(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(c.a)(Object(r.b)(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var i=0,t=e.length;i<t;i++)this.$watch(e[i],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}("bottom",["height","inputValue"]),v.a,d.a,Object(O.b)("inputValue"),h.a,j,S.a).extend({name:"v-bottom-navigation",props:{activeClass:{type:String,default:"v-btn--active"},backgroundColor:String,grow:Boolean,height:{type:[Number,String],default:56},hideOnScroll:Boolean,horizontal:Boolean,inputValue:{type:Boolean,default:!0},mandatory:Boolean,shift:Boolean,tag:{type:String,default:"div"}},data:function(){return{isActive:this.inputValue}},computed:{canScroll:function(){return j.options.computed.canScroll.call(this)&&(this.hideOnScroll||!this.inputValue)},classes:function(){return{"v-bottom-navigation--absolute":this.absolute,"v-bottom-navigation--grow":this.grow,"v-bottom-navigation--fixed":!this.absolute&&(this.app||this.fixed),"v-bottom-navigation--horizontal":this.horizontal,"v-bottom-navigation--shift":this.shift}},styles:function(){return x(x({},this.measurableStyles),{},{transform:this.isActive?"none":"translateY(100%)"})}},created:function(){this.$attrs.hasOwnProperty("active")&&Object(y.a)("active.sync","value or v-model",this)},methods:{thresholdMet:function(){this.isActive=!this.isScrollingUp,this.$emit("update:input-value",this.isActive)},updateApplication:function(){return this.$el?this.$el.clientHeight:0},updateValue:function(t){this.$emit("change",t)}},render:function(t){var data=this.setBackgroundColor(this.backgroundColor,{staticClass:"v-bottom-navigation",class:this.classes,style:this.styles,props:{activeClass:this.activeClass,mandatory:Boolean(this.mandatory||void 0!==this.value),tag:this.tag,value:this.internalValue},on:{change:this.updateValue}});return this.canScroll&&(data.directives=data.directives||[],data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),t(l.a,this.setTextColor(this.color,data),this.$slots.default)}})},534:function(t,e,o){"use strict";var n=o(474),r=o(211),c=o(43);e.a=Object(c.a)(n.a,Object(r.a)("slideGroup")).extend({name:"v-slide-item"})},746:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{teachers:[{tname:"mmd",avatar:"https://cdn.vuetifyjs.com/images/lists/1.jpg"},{tname:"mmdw",avatar:"https://cdn.vuetifyjs.com/images/lists/2.jpg"},{tname:"mmdw",avatar:"https://cdn.vuetifyjs.com/images/lists/3.jpg"},{tname:"mmdw",avatar:"https://cdn.vuetifyjs.com/images/lists/4.jpg"},{tname:"mmdw",avatar:"https://cdn.vuetifyjs.com/images/lists/5.jpg"},{tname:"mmdw",avatar:"https://cdn.vuetifyjs.com/images/lists/5.jpg"},{tname:"mmdw",avatar:"https://cdn.vuetifyjs.com/images/lists/5.jpg"}]}}},r=o(81),c=o(101),l=o.n(c),v=o(419),d=o(484),h=o(418),m=o(458),f=o(448),y=o(417),j=o(430),S=o(429),O=o(613),w=o(534),x=o(612),_=o(704),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page"},[o("v-container",{staticClass:"px-6 label-primary"},[o("v-row",{staticClass:"mt-15 mb-10 ma-0",attrs:{align:"center"}},[o("nuxt-link",{attrs:{to:"/"}},[o("v-btn",{staticClass:"btn-icon-sm bg-transparent rounded-lg back-btn"},[o("v-icon",[t._v("mdi-arrow-left")])],1)],1),t._v(" "),o("p",{staticClass:"f26 font-weight-bold ml-3 mb-0"},[t._v("Campus")]),t._v(" "),o("v-avatar",{staticClass:"ml-auto",attrs:{height:"33",width:"33","min-width":"33"}},[o("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/john.jpg",alt:"John","aspect-ratio":"1"}})],1)],1),t._v(" "),o("v-avatar",{staticClass:"mx-auto d-block",attrs:{height:"88",width:"88","min-width":"88"}},[o("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/john.jpg",alt:"John","aspect-ratio":"1"}})],1),t._v(" "),o("v-text-field",{staticClass:"rounded-12 mt-8",attrs:{outlined:"",label:"Accademy Name",placeholder:"Enter Accademy Name",color:"#E5E8EE"}}),t._v(" "),o("v-textarea",{staticClass:"rounded-12 description-input",attrs:{outlined:"",label:"Description",placeholder:"Enter Description",rows:"3",color:"#E5E8EE"}}),t._v(" "),o("p",{staticClass:"f21 font-weight-bold mb-0"},[t._v("Add Teacher")]),t._v(" "),o("p",{staticClass:"f12 mb-0 text--secondary"},[t._v("Add one and many Teacher in Campus")]),t._v(" "),o("v-slide-group",{staticClass:"mt-5 mb-16"},t._l(t.teachers,(function(e,n){return o("v-slide-item",{key:n},[o("div",[o("v-avatar",{staticClass:"mr-3",attrs:{size:"47"}},[o("v-img",{attrs:{src:e.avatar}})],1),t._v(" "),o("p",{staticClass:"f12 text-center mr-3"},[t._v(t._s(e.tname))])],1)])})),1),t._v(" "),o("v-bottom-navigation",{staticClass:"rounded-t-15",attrs:{height:"85",fixed:""}},[o("v-col",{staticClass:"px-6"},[o("v-btn",{staticClass:"\n            mb-7\n            f20\n            font-weight-bold\n            primary-shadow\n            btn-large\n            rounded-12\n          ",attrs:{color:"primary","x-large":"",block:""}},[o("span",{staticClass:"reverse--text"},[t._v(" Create Campus ")])])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VAvatar:v.a,VBottomNavigation:d.a,VBtn:h.a,VCol:m.a,VContainer:f.a,VIcon:y.a,VImg:j.a,VRow:S.a,VSlideGroup:O.b,VSlideItem:w.a,VTextField:x.a,VTextarea:_.a})}}]);