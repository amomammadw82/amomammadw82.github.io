(window.webpackJsonp=window.webpackJsonp||[]).push([[42,29],{432:function(t,e,n){"use strict";var o=n(3),r=n(0);var l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return r.a.extend({name:"proxyable",model:{prop:t,event:e},props:Object(o.a)({},t,{required:!1}),data:function(){return{internalLazyValue:this[t]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:Object(o.a)({},t,(function(t){this.internalLazyValue=t}))})}();e.a=l},436:function(t,e,n){"use strict";var o=n(6),r=n(115).findIndex,l=n(133),c="findIndex",h=!0;c in[]&&Array(1).findIndex((function(){h=!1})),o({target:"Array",proto:!0,forced:h},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),l(c)},437:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));n(18),n(14),n(26),n(27);var o=n(3),r=(n(71),n(21),n(8),n(41),n(44),n(299),n(16),n(36),n(96),n(436),n(438),n(432)),l=n(83),c=n(43),h=n(24);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d=Object(c.a)(r.a,l.a).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-item-group":!0},this.themeClasses)},selectedIndex:function(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem:function(){if(!this.multiple)return this.selectedItems[0]},selectedItems:function(){var t=this;return this.items.filter((function(e,n){return t.toggleMethod(t.getValue(e,n))}))},selectedValues:function(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var t=this;if(!this.multiple)return function(e){return t.internalValue===e};var e=this.internalValue;return Array.isArray(e)?function(t){return e.includes(t)}:function(){return!1}}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(h.c)("Model must be bound to an array if the multiple property is true.",this)},methods:{genData:function(){return{class:this.classes}},getValue:function(t,i){return null==t.value||""===t.value?i:t.value},onClick:function(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register:function(t){var e=this,n=this.items.push(t)-1;t.$on("change",(function(){return e.onClick(t)})),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,n)},unregister:function(t){if(!this._isDestroyed){var e=this.items.indexOf(t),n=this.getValue(t,e);if(this.items.splice(e,1),!(this.selectedValues.indexOf(n)<0)){if(!this.mandatory)return this.updateInternalValue(n);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((function(t){return t!==n})):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(t,e){var n=this.getValue(t,e);t.isActive=this.toggleMethod(n)},updateItemsState:function(){var t=this;this.$nextTick((function(){if(t.mandatory&&!t.selectedItems.length)return t.updateMandatory();t.items.forEach(t.updateItem)}))},updateInternalValue:function(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory:function(t){if(this.items.length){var e=this.items.slice();t&&e.reverse();var n=e.find((function(t){return!t.disabled}));if(n){var o=this.items.indexOf(n);this.updateInternalValue(this.getValue(n,o))}}},updateMultiple:function(t){var e=(Array.isArray(this.internalValue)?this.internalValue:[]).slice(),n=e.findIndex((function(e){return e===t}));this.mandatory&&n>-1&&e.length-1<1||null!=this.max&&n<0&&e.length+1>this.max||(n>-1?e.splice(n,1):e.push(t),this.internalValue=e)},updateSingle:function(t){var e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render:function(t){return t(this.tag,this.genData(),this.$slots.default)}});e.b=d.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}})},438:function(t,e,n){var content=n(439);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("73707fd0",content,!0,{sourceMap:!1})},439:function(t,e,n){var o=n(38)(!1);o.push([t.i,".v-item-group{flex:0 1 auto;position:relative;max-width:100%;transition:.3s cubic-bezier(.25,.8,.5,1)}",""]),t.exports=o},442:function(t,e,n){"use strict";var o=n(437);e.a=o.a.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return o.a.options.computed.classes.call(this)}},methods:{genData:o.a.options.methods.genData}})},453:function(t,e,n){var content=n(454);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("5ea6d85e",content,!0,{sourceMap:!1})},454:function(t,e,n){var o=n(38)(!1);o.push([t.i,".theme--light.v-bottom-navigation{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-bottom-navigation .v-btn:not(.v-btn--active){color:rgba(0,0,0,.6)!important}.theme--dark.v-bottom-navigation{background-color:#2e2e2e;color:#fff}.theme--dark.v-bottom-navigation .v-btn:not(.v-btn--active){color:hsla(0,0%,100%,.7)!important}.v-item-group.v-bottom-navigation{bottom:0;display:flex;left:0;justify-content:center;width:100%;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-item-group.v-bottom-navigation .v-btn{background-color:transparent;border-radius:0;box-shadow:none;flex:0 1 auto;font-size:.75rem;height:inherit;max-width:168px;min-width:80px;position:relative;text-transform:none}.v-item-group.v-bottom-navigation .v-btn:after{content:none}.v-item-group.v-bottom-navigation .v-btn .v-btn__content{flex-direction:column-reverse;height:inherit}.v-item-group.v-bottom-navigation .v-btn .v-btn__content>:not(.v-icon){line-height:1.2}.v-item-group.v-bottom-navigation .v-btn.v-btn--active{color:inherit}.v-item-group.v-bottom-navigation .v-btn.v-btn--active:not(:hover):before{opacity:0}.v-item-group.v-bottom-navigation--absolute,.v-item-group.v-bottom-navigation--fixed{z-index:4}.v-item-group.v-bottom-navigation--absolute{position:absolute}.v-item-group.v-bottom-navigation--active{transform:translate(0)}.v-item-group.v-bottom-navigation--fixed{position:fixed}.v-item-group.v-bottom-navigation--grow .v-btn{width:100%}.v-item-group.v-bottom-navigation--horizontal .v-btn>.v-btn__content{flex-direction:row-reverse}.v-item-group.v-bottom-navigation--horizontal .v-btn>.v-btn__content>.v-icon{margin-bottom:0;margin-right:16px}.v-item-group.v-bottom-navigation--shift .v-btn .v-btn__content>:not(.v-icon){opacity:0;position:absolute;top:calc(100% - 12px);transform:scale(.9);transition:.3s cubic-bezier(.25,.8,.5,1)}.v-item-group.v-bottom-navigation--shift .v-btn--active .v-btn__content>.v-icon{transform:translateY(-8px)}.v-item-group.v-bottom-navigation--shift .v-btn--active .v-btn__content>:not(.v-icon){opacity:1;top:calc(100% - 22px);transform:scale(1)}",""]),t.exports=o},472:function(t,e,n){"use strict";n.r(e);var o={props:{},data:function(){return{}}},r=n(81),l=n(101),c=n.n(l),h=n(484),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-bottom-navigation",{attrs:{color:"success",height:"88",fixed:""}},[t._t("default")],2)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBottomNavigation:h.a})},484:function(t,e,n){"use strict";var o=n(3),r=(n(71),n(298),n(18),n(14),n(21),n(8),n(26),n(16),n(27),n(453),n(209)),l=n(43);var c=n(442),h=n(84),v=n(102),d=n(432),f=n(13);var m={inserted:function(t,e,n){var o=(e.modifiers||{}).self,r=void 0!==o&&o,l=e.value,c="object"===Object(f.a)(l)&&l.options||{passive:!0},h="function"==typeof l||"handleEvent"in l?l:l.handler,v=r?t:e.arg?document.querySelector(e.arg):window;v&&(v.addEventListener("scroll",h,c),t._onScroll=Object(t._onScroll),t._onScroll[n.context._uid]={handler:h,options:c,target:r?void 0:v})},unbind:function(t,e,n){var o;if(null!=(o=t._onScroll)&&o[n.context._uid]){var r=t._onScroll[n.context._uid],l=r.handler,c=r.options,h=r.target;(void 0===h?t:h).removeEventListener("scroll",l,c),delete t._onScroll[n.context._uid]}}},y=n(24),x=n(0).a.extend({name:"scrollable",directives:{Scroll:m},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:function(){return{currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}},computed:{canScroll:function(){return"undefined"!=typeof window},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp:function(){this.savedScroll=this.savedScroll||this.currentScroll},isActive:function(){this.savedScroll=0}},mounted:function(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(y.c)("Unable to locate element with identifier ".concat(this.scrollTarget),this))},methods:{onScroll:function(){var t=this;this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((function(){Math.abs(t.currentScroll-t.savedScroll)>t.computedScrollThreshold&&t.thresholdMet()})))},thresholdMet:function(){}}}),S=n(83),O=n(208);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function V(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(l.a)(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(l.a)(Object(r.b)(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var i=0,t=e.length;i<t;i++)this.$watch(e[i],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}("bottom",["height","inputValue"]),h.a,v.a,Object(O.b)("inputValue"),d.a,x,S.a).extend({name:"v-bottom-navigation",props:{activeClass:{type:String,default:"v-btn--active"},backgroundColor:String,grow:Boolean,height:{type:[Number,String],default:56},hideOnScroll:Boolean,horizontal:Boolean,inputValue:{type:Boolean,default:!0},mandatory:Boolean,shift:Boolean,tag:{type:String,default:"div"}},data:function(){return{isActive:this.inputValue}},computed:{canScroll:function(){return x.options.computed.canScroll.call(this)&&(this.hideOnScroll||!this.inputValue)},classes:function(){return{"v-bottom-navigation--absolute":this.absolute,"v-bottom-navigation--grow":this.grow,"v-bottom-navigation--fixed":!this.absolute&&(this.app||this.fixed),"v-bottom-navigation--horizontal":this.horizontal,"v-bottom-navigation--shift":this.shift}},styles:function(){return V(V({},this.measurableStyles),{},{transform:this.isActive?"none":"translateY(100%)"})}},created:function(){this.$attrs.hasOwnProperty("active")&&Object(y.a)("active.sync","value or v-model",this)},methods:{thresholdMet:function(){this.isActive=!this.isScrollingUp,this.$emit("update:input-value",this.isActive)},updateApplication:function(){return this.$el?this.$el.clientHeight:0},updateValue:function(t){this.$emit("change",t)}},render:function(t){var data=this.setBackgroundColor(this.backgroundColor,{staticClass:"v-bottom-navigation",class:this.classes,style:this.styles,props:{activeClass:this.activeClass,mandatory:Boolean(this.mandatory||void 0!==this.value),tag:this.tag,value:this.internalValue},on:{change:this.updateValue}});return this.canScroll&&(data.directives=data.directives||[],data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),t(c.a,this.setTextColor(this.color,data),this.$slots.default)}})},740:function(t,e,n){"use strict";n.r(e);var o={},r=n(81),l=n(101),c=n.n(l),h=n(418),v=n(417),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nuxt-child"),t._v(" "),n("services-footer",[n("v-btn",{attrs:{to:"/advisor/",exact:""}},[n("span",[t._v("Home")]),t._v(" "),n("v-icon",{staticClass:"mb-2"},[t._v("mdi-account")])],1),t._v(" "),n("v-btn",{attrs:{to:"/academy"}},[n("span",[t._v("Advisor")]),t._v(" "),n("v-icon",{staticClass:"mb-2"},[t._v("mdi-account-circle")])],1),t._v(" "),n("v-btn",{attrs:{to:"/advisor/my-advisor"}},[n("span",[t._v("My trainer")]),t._v(" "),n("v-icon",{staticClass:"mb-2"},[t._v("mdi-account-group")])],1),t._v(" "),n("v-btn",{attrs:{to:"/business/advisor/calendar"}},[n("span",[t._v("Calendar")]),t._v(" "),n("v-icon",{staticClass:"mb-2"},[t._v("mdi-calendar-month")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{ServicesFooter:n(472).default}),c()(component,{VBtn:h.a,VIcon:v.a})}}]);