(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{484:function(t,e,o){var content=o(485);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(25).default)("5ea6d85e",content,!0,{sourceMap:!1})},485:function(t,e,o){var n=o(24)(!1);n.push([t.i,".theme--light.v-bottom-navigation{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-bottom-navigation .v-btn:not(.v-btn--active){color:rgba(0,0,0,.6)!important}.theme--dark.v-bottom-navigation{background-color:#2e2e2e;color:#fff}.theme--dark.v-bottom-navigation .v-btn:not(.v-btn--active){color:hsla(0,0%,100%,.7)!important}.v-item-group.v-bottom-navigation{bottom:0;display:flex;left:0;justify-content:center;width:100%;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-item-group.v-bottom-navigation .v-btn{background-color:transparent;border-radius:0;box-shadow:none;flex:0 1 auto;font-size:.75rem;height:inherit;max-width:168px;min-width:80px;position:relative;text-transform:none}.v-item-group.v-bottom-navigation .v-btn:after{content:none}.v-item-group.v-bottom-navigation .v-btn .v-btn__content{flex-direction:column-reverse;height:inherit}.v-item-group.v-bottom-navigation .v-btn .v-btn__content>:not(.v-icon){line-height:1.2}.v-item-group.v-bottom-navigation .v-btn.v-btn--active{color:inherit}.v-item-group.v-bottom-navigation .v-btn.v-btn--active:not(:hover):before{opacity:0}.v-item-group.v-bottom-navigation--absolute,.v-item-group.v-bottom-navigation--fixed{z-index:4}.v-item-group.v-bottom-navigation--absolute{position:absolute}.v-item-group.v-bottom-navigation--active{transform:translate(0)}.v-item-group.v-bottom-navigation--fixed{position:fixed}.v-item-group.v-bottom-navigation--grow .v-btn{width:100%}.v-item-group.v-bottom-navigation--horizontal .v-btn>.v-btn__content{flex-direction:row-reverse}.v-item-group.v-bottom-navigation--horizontal .v-btn>.v-btn__content>.v-icon{margin-bottom:0;margin-right:16px}.v-item-group.v-bottom-navigation--shift .v-btn .v-btn__content>:not(.v-icon){opacity:0;position:absolute;top:calc(100% - 12px);transform:scale(.9);transition:.3s cubic-bezier(.25,.8,.5,1)}.v-item-group.v-bottom-navigation--shift .v-btn--active .v-btn__content>.v-icon{transform:translateY(-8px)}.v-item-group.v-bottom-navigation--shift .v-btn--active .v-btn__content>:not(.v-icon){opacity:1;top:calc(100% - 22px);transform:scale(1)}",""]),t.exports=n},490:function(t,e,o){"use strict";o(7),o(14),o(17),o(18);var n=o(1),r=(o(48),o(11),o(22),o(49),o(211),o(12),o(29),o(212),o(213),o(214),o(215),o(216),o(217),o(218),o(219),o(220),o(221),o(222),o(223),o(224),o(30),o(34),o(8),o(71),o(317),o(0)),l=o(84),c=o(3);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=["sm","md","lg","xl"],f=h.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),m=h.reduce((function(t,e){return t["offset"+Object(c.x)(e)]={type:[String,Number],default:null},t}),{}),y=h.reduce((function(t,e){return t["order"+Object(c.x)(e)]={type:[String,Number],default:null},t}),{}),S={col:Object.keys(f),offset:Object.keys(m),order:Object.keys(y)};function O(t,e,o){var n=t;if(null!=o&&!1!==o){if(e){var r=e.replace(t,"");n+="-".concat(r)}return"col"!==t||""!==o&&!0!==o?(n+="-".concat(o)).toLowerCase():n.toLowerCase()}}var x=new Map;e.a=r.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},f),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},y),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var o=e.props,data=e.data,r=e.children,c=(e.parent,"");for(var v in o)c+=String(o[v]);var d=x.get(c);return d||function(){var t,e;for(e in d=[],S)S[e].forEach((function(t){var n=o[t],r=O(e,t,n);r&&d.push(r)}));var r=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!r||!o.cols},Object(n.a)(t,"col-".concat(o.cols),o.cols),Object(n.a)(t,"offset-".concat(o.offset),o.offset),Object(n.a)(t,"order-".concat(o.order),o.order),Object(n.a)(t,"align-self-".concat(o.alignSelf),o.alignSelf),t)),x.set(c,d)}(),t(o.tag,Object(l.a)(data,{class:d}),r)}})},511:function(t,e,o){"use strict";var n=o(1),r=(o(48),o(225),o(11),o(7),o(14),o(17),o(8),o(18),o(484),o(126)),l=o(26);var c=o(227),v=o(65),d=o(92),h=o(128),f=o(13);var m={inserted:function(t,e){var o=(e.modifiers||{}).self,n=void 0!==o&&o,r=e.value,l="object"===Object(f.a)(r)&&r.options||{passive:!0},c="function"==typeof r||"handleEvent"in r?r:r.handler,v=n?t:e.arg?document.querySelector(e.arg):window;v&&(v.addEventListener("scroll",c,l),t._onScroll={handler:c,options:l,target:n?void 0:v})},unbind:function(t){if(t._onScroll){var e=t._onScroll,o=e.handler,n=e.options,r=e.target;(void 0===r?t:r).removeEventListener("scroll",o,n),delete t._onScroll}}},y=o(16),S=o(0).a.extend({name:"scrollable",directives:{Scroll:m},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:function(){return{currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}},computed:{canScroll:function(){return"undefined"!=typeof window},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp:function(){this.savedScroll=this.savedScroll||this.currentScroll},isActive:function(){this.savedScroll=0}},mounted:function(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(y.c)("Unable to locate element with identifier ".concat(this.scrollTarget),this))},methods:{onScroll:function(){var t=this;this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((function(){Math.abs(t.currentScroll-t.savedScroll)>t.computedScrollThreshold&&t.thresholdMet()})))},thresholdMet:function(){}}}),O=o(57),x=o(210);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function j(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(l.a)(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(l.a)(Object(r.b)(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var i=0,t=e.length;i<t;i++)this.$watch(e[i],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}("bottom",["height","inputValue"]),v.a,d.a,Object(x.b)("inputValue"),h.a,S,O.a).extend({name:"v-bottom-navigation",props:{activeClass:{type:String,default:"v-btn--active"},backgroundColor:String,grow:Boolean,height:{type:[Number,String],default:56},hideOnScroll:Boolean,horizontal:Boolean,inputValue:{type:Boolean,default:!0},mandatory:Boolean,shift:Boolean,tag:{type:String,default:"div"}},data:function(){return{isActive:this.inputValue}},computed:{canScroll:function(){return S.options.computed.canScroll.call(this)&&(this.hideOnScroll||!this.inputValue)},classes:function(){return{"v-bottom-navigation--absolute":this.absolute,"v-bottom-navigation--grow":this.grow,"v-bottom-navigation--fixed":!this.absolute&&(this.app||this.fixed),"v-bottom-navigation--horizontal":this.horizontal,"v-bottom-navigation--shift":this.shift}},styles:function(){return j(j({},this.measurableStyles),{},{transform:this.isActive?"none":"translateY(100%)"})}},created:function(){this.$attrs.hasOwnProperty("active")&&Object(y.a)("active.sync","value or v-model",this)},methods:{thresholdMet:function(){this.isActive=!this.isScrollingUp,this.$emit("update:input-value",this.isActive)},updateApplication:function(){return this.$el?this.$el.clientHeight:0},updateValue:function(t){this.$emit("change",t)}},render:function(t){var data=this.setBackgroundColor(this.backgroundColor,{staticClass:"v-bottom-navigation",class:this.classes,style:this.styles,props:{activeClass:this.activeClass,mandatory:Boolean(this.mandatory||void 0!==this.value),tag:this.tag,value:this.internalValue},on:{change:this.updateValue}});return this.canScroll&&(data.directives=data.directives||[],data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),t(c.a,this.setTextColor(this.color,data),this.$slots.default)}})},589:function(t,e,o){var content=o(674);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(25).default)("336681f9",content,!0,{sourceMap:!1})},673:function(t,e,o){"use strict";o(589)},674:function(t,e,o){var n=o(24)(!1);n.push([t.i,".halfinput{width:48%;margin-right:5px!important;display:inline-flex}",""]),t.exports=n},732:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{}}},r=(o(673),o(40)),l=o(64),c=o.n(l),v=o(463),d=o(511),h=o(197),f=o(490),m=o(499),y=o(159),S=o(461),O=o(473),x=o(603),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticClass:"page px-6"},[o("v-row",{staticClass:"mt-15 mb-10 ma-0",attrs:{align:"center"}},[o("nuxt-link",{attrs:{to:"/"}},[o("v-btn",{staticClass:"btn-icon-sm bg-transparent rounded-lg back-btn"},[o("v-icon",[t._v("mdi-arrow-left")])],1)],1),t._v(" "),o("p",{staticClass:"f26 font-weight-bold ml-3 mb-0"},[t._v("Online Course")]),t._v(" "),o("v-avatar",{staticClass:"ml-auto",attrs:{height:"33",width:"33","min-width":"33"}},[o("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/john.jpg",alt:"John","aspect-ratio":"1"}})],1)],1),t._v(" "),o("v-row",{staticClass:"rows-m-0 cols-py-0 label-primary"},[o("v-col",{attrs:{cols:"12"}},[o("v-text-field",{staticClass:"rounded-12",attrs:{label:"Online Course Name",placeholder:"Enter Group name ex Friendly",outlined:"",color:"#E5E8EE"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("v-text-field",{staticClass:"rounded-12",attrs:{label:"Start Date",placeholder:"Start Course Date",outlined:"",color:"#E5E8EE"}})],1),t._v(" "),o("v-col",{staticClass:"pr-1",attrs:{cols:"6"}},[o("v-text-field",{staticClass:"rounded-12",attrs:{label:"Start Time",placeholder:"Start Course time",outlined:"",color:"#E5E8EE"}})],1),t._v(" "),o("v-col",{staticClass:"pl-1",attrs:{cols:"6"}},[o("v-text-field",{staticClass:"rounded-12",attrs:{label:"End Time",placeholder:"Start Course time",outlined:"",color:"#E5E8EE"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("v-text-field",{staticClass:"rounded-12",attrs:{label:"Course Price",placeholder:"Ex : $10",outlined:"",color:"#E5E8EE"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("v-text-field",{staticClass:"rounded-12",attrs:{label:"Course Link",placeholder:"http://bluepink.com/asrwqer2",outlined:"",color:"#E5E8EE"}})],1)],1),t._v(" "),o("v-bottom-navigation",{staticClass:"rounded-t-15",attrs:{height:"85",fixed:""}},[o("v-col",{staticClass:"px-6"},[o("v-btn",{staticClass:"mb-7 f20 font-weight-bold primary-shadow btn-large rounded-12",attrs:{color:"primary","x-large":"",block:""}},[o("span",{staticClass:"reverse--text"},[t._v(" Create Course ")])])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VAvatar:v.a,VBottomNavigation:d.a,VBtn:h.a,VCol:f.a,VContainer:m.a,VIcon:y.a,VImg:S.a,VRow:O.a,VTextField:x.a})}}]);