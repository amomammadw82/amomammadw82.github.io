(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{465:function(t,e,n){var content=n(466);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("5276b867",content,!0,{sourceMap:!1})},466:function(t,e,n){var o=n(38)(!1);o.push([t.i,'.theme--light.v-badge .v-badge__badge:after{border-color:#fff}.theme--dark.v-badge .v-badge__badge:after{border-color:#1e1e1e}.v-badge{position:relative}.v-badge,.v-badge__badge{display:inline-block;line-height:1}.v-badge__badge{border-radius:10px;color:#fff;font-size:12px;height:20px;letter-spacing:0;min-width:20px;padding:4px 6px;pointer-events:auto;position:absolute;text-align:center;text-indent:0;top:auto;transition:.3s cubic-bezier(.25,.8,.5,1);white-space:nowrap}.v-application--is-ltr .v-badge__badge{right:auto}.v-application--is-rtl .v-badge__badge{left:auto}.v-badge__badge .v-icon{color:inherit;font-size:12px;height:12px;margin:0 -2px;width:12px}.v-badge__badge .v-img{height:12px;width:12px}.v-badge__wrapper{flex:0 1;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.v-badge--avatar .v-badge__badge{padding:0}.v-badge--avatar .v-badge__badge .v-avatar{height:20px!important;min-width:0!important;max-width:20px!important}.v-badge--bordered .v-badge__badge:after{border-radius:inherit;border-width:2px;border-style:solid;bottom:0;content:"";left:0;position:absolute;right:0;top:0;transform:scale(1.15)}.v-badge--dot .v-badge__badge{border-radius:4.5px;height:9px;min-width:0;padding:0;width:9px}.v-badge--dot .v-badge__badge:after{border-width:1.5px}.v-badge--icon .v-badge__badge{padding:4px 6px}.v-badge--inline{align-items:center;display:inline-flex;justify-content:center}.v-badge--inline .v-badge__badge,.v-badge--inline .v-badge__wrapper{position:relative}.v-badge--inline .v-badge__wrapper{margin:0 4px}.v-badge--tile .v-badge__badge{border-radius:0}',""]),t.exports=o},498:function(t,e,n){"use strict";var o={inserted:function(t,e,n){var o=e.value,r=e.options||{passive:!0};window.addEventListener("resize",o,r),t._onResize=Object(t._onResize),t._onResize[n.context._uid]={callback:o,options:r},e.modifiers&&e.modifiers.quiet||o()},unbind:function(t,e,n){var o;if(null!=(o=t._onResize)&&o[n.context._uid]){var r=t._onResize[n.context._uid],d=r.callback,l=r.options;window.removeEventListener("resize",d,l),delete t._onResize[n.context._uid]}}};e.a=o},507:function(t,e,n){"use strict";n(18),n(14),n(20),n(8),n(26),n(16),n(27);var o=n(57),r=n(3),d=(n(71),n(465),n(417)),l=n(84),c=n(81),v=n(208),h=n(462),f=n(209),m=n(43),_=n(7),w=["aria-atomic","aria-label","aria-live","role","title"];function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}e.a=Object(m.a)(l.a,Object(f.b)(["left","bottom"]),c.a,v.a,h.a).extend({name:"v-badge",props:{avatar:Boolean,bordered:Boolean,color:{type:String,default:"primary"},content:{required:!1},dot:Boolean,label:{type:String,default:"$vuetify.badge"},icon:String,inline:Boolean,offsetX:[Number,String],offsetY:[Number,String],overlap:Boolean,tile:Boolean,transition:{type:String,default:"scale-rotate-transition"},value:{default:!0}},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-badge--avatar":this.avatar,"v-badge--bordered":this.bordered,"v-badge--bottom":this.bottom,"v-badge--dot":this.dot,"v-badge--icon":null!=this.icon,"v-badge--inline":this.inline,"v-badge--left":this.left,"v-badge--overlap":this.overlap,"v-badge--tile":this.tile},this.themeClasses)},computedBottom:function(){return this.bottom?"auto":this.computedYOffset},computedLeft:function(){return this.isRtl?this.left?this.computedXOffset:"auto":this.left?"auto":this.computedXOffset},computedRight:function(){return this.isRtl?this.left?"auto":this.computedXOffset:this.left?this.computedXOffset:"auto"},computedTop:function(){return this.bottom?this.computedYOffset:"auto"},computedXOffset:function(){return this.calcPosition(this.offsetX)},computedYOffset:function(){return this.calcPosition(this.offsetY)},isRtl:function(){return this.$vuetify.rtl},offset:function(){return this.overlap?this.dot?8:12:this.dot?2:4},styles:function(){return this.inline?{}:{bottom:this.computedBottom,left:this.computedLeft,right:this.computedRight,top:this.computedTop}}},methods:{calcPosition:function(t){return"calc(100% - ".concat(Object(_.g)(t||this.offset),")")},genBadge:function(){var t=this.$vuetify.lang,label=this.$attrs["aria-label"]||t.t(this.label),data=this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",style:this.styles,attrs:{"aria-atomic":this.$attrs["aria-atomic"]||"true","aria-label":label,"aria-live":this.$attrs["aria-live"]||"polite",title:this.$attrs.title,role:this.$attrs.role||"status"},directives:[{name:"show",value:this.isActive}]}),e=this.$createElement("span",data,[this.genBadgeContent()]);return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e},genBadgeContent:function(){if(!this.dot){var slot=Object(_.p)(this,"badge");return slot||(this.content?String(this.content):this.icon?this.$createElement(d.a,this.icon):void 0)}},genBadgeWrapper:function(){return this.$createElement("span",{staticClass:"v-badge__wrapper"},[this.genBadge()])}},render:function(t){var e=[this.genBadgeWrapper()],n=[Object(_.p)(this)],r=this.$attrs,d=(r["aria-atomic"],r["aria-label"],r["aria-live"],r.role,r.title,Object(o.a)(r,w));return this.inline&&this.left?n.unshift(e):n.push(e),t("span",{staticClass:"v-badge",attrs:d,class:this.classes},n)}})},510:function(t,e,n){"use strict";n.r(e);var o={props:{title:{type:String,default:""},hideDate:{type:Boolean,default:!1},fontSize:{type:String,default:"16"},large:{type:Boolean,default:!1},center:{type:Boolean,default:!1}},data:function(){return{length:5,onboarding:0}}},r=n(82),d=n(101),l=n.n(d),c=n(418),v=n(417),h=n(536),f=n(437),m=n(493),_=n(494),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-1"},[n("div",{staticClass:"f16 font-weight-bold d-flex mb-1"},[n("div",{class:"f"+t.fontSize},[t._v(t._s(t.title))]),t._v(" "),t.hideDate?t._e():n("div",{staticClass:"ml-auto d-flex",class:{"mx-auto":t.center}},[n("v-btn",{staticClass:"mx-1",attrs:{height:"25",width:"25",icon:"",disabled:t.onboarding<1},on:{click:function(e){t.onboarding--}}},[n("v-icon",[t._v("mdi-chevron-left")])],1),t._v(" "),n("v-window",{model:{value:t.onboarding,callback:function(e){t.onboarding=e},expression:"onboarding"}},t._l(t.length,(function(e){return n("v-window-item",{key:"card-"+e},[n("div",{staticClass:"d-flex align-center",staticStyle:{height:"25px"}},[t._v("\n            Jan 20 to 26 Jan\n          ")])])})),1),t._v(" "),n("v-btn",{staticClass:"mx-1",attrs:{height:"25",width:"25",icon:"",disabled:t.onboarding>=t.length-1},on:{click:function(e){t.onboarding++}}},[n("v-icon",[t._v("mdi-chevron-right")])],1)],1)]),t._v(" "),n("v-window",{model:{value:t.onboarding,callback:function(e){t.onboarding=e},expression:"onboarding"}},t._l(t.length,(function(e){return n("v-window-item",{key:"card-"+e},[n("div",{staticClass:"d-flex align-center"},[n("v-item-group",{staticClass:"w-100 d-flex my-3 justify-space-between",attrs:{group:"",mandatory:""},model:{value:t.onboarding,callback:function(e){t.onboarding=e},expression:"onboarding"}},t._l(5,(function(e){return n("v-item",{key:e,scopedSlots:t._u([{key:"default",fn:function(o){var r=o.active,d=o.toggle;return[n("v-btn",{staticClass:"secondary-shadow rounded-12",attrs:{value:e,height:t.large?84:70,width:t.large?60:50,"min-width":t.large?60:50,color:r?"success":""},on:{click:d}},[n("span",[n("p",{class:["mb-1 font-weight-bold",t.large?"f26":"f17"]},[t._v("\n                  "+t._s(e+14)+"\n                ")]),t._v(" "),n("span",{class:[t.large?"f17":"f13"]},[t._v("Mon")])])])]}}],null,!0)})})),1)],1)])})),1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:c.a,VIcon:v.a,VItem:h.b,VItemGroup:f.b,VWindow:m.a,VWindowItem:_.a})},736:function(t,e,n){"use strict";n.r(e);var o={components:{SliderDatePicker:n(510).default},data:function(){return{advisors:[{avatar:"https://cdn.vuetifyjs.com/images/john.jpg",name:"Benita Rasto",period:"Hourly",time:"Now",date:"12 October - Time : 9:30 to 10:30 "},{avatar:"https://cdn.vuetifyjs.com/images/john.jpg",name:"Benita Rasto",period:"Daily",time:"Now",date:"12 October - Time : 9:30 to 10:30 "}]}}},r=n(82),d=n(101),l=n.n(d),c=n(719),v=n(419),h=n(507),f=n(418),m=n(438),_=n(435),w=n(470),x=n(720),y=n(457),C=n(446),O=n(417),j=n(430),B=n(429),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"px-6 page"},[n("div",{staticClass:"pb-p100"},[n("main-header",{attrs:{back:"/business/city",icon:"mdi-account",color:"orange"}},[t._v("\n      Advisor\n    ")]),t._v(" "),n("v-row",{staticClass:"mt-10 cols-py-0",staticStyle:{"min-height":"110px"}},[n("v-col",[n("v-badge",{staticClass:"w-100 h-100",attrs:{overlap:"",color:"success",content:"3"}},[n("v-card",{staticClass:"\n              rounded-15\n              h-100\n              d-flex\n              justify-center\n              align-center\n              secondary-shadow\n            "},[t._v("\n            New Customer\n          ")])],1)],1),t._v(" "),n("v-col",[n("v-badge",{staticClass:"w-100 h-100",attrs:{overlap:"",color:"red",content:"3"}},[n("v-card",{staticClass:"\n              rounded-15\n              h-100\n              d-flex\n              justify-center\n              align-center\n              secondary-shadow\n            "},[t._v("\n            New Customer\n          ")])],1)],1)],1),t._v(" "),n("slider-date-picker",{staticClass:"mt-10 mb-5",attrs:{title:"Calendar","font-size":"19"}}),t._v(" "),t._l(t.advisors,(function(e,o){return n("v-card",{key:o,staticClass:"rounded-15 secondary-shadow secondary-border pa-2 pb-0 mb-5",attrs:{outlined:""}},[n("div",{staticClass:"d-flex w-100 mb-2"},[n("v-avatar",{attrs:{size:"55"}},[n("v-img",{staticClass:"course-img",attrs:{src:e.avatar,alt:""}})],1),t._v(" "),n("div",{staticClass:"pa-0 col"},[n("v-card-text",{staticClass:"pa-0 pl-3 badge-rounded"},[n("div",{staticClass:"mt-1 d-flex"},[n("h3",{staticClass:"mt-0 mb-1 f17"},[t._v(t._s(e.name))]),t._v(" "),n("v-alert",{staticClass:"ml-auto mb-0 pa-0 text-center font-weight-bold f12",attrs:{color:"red",width:"63","max-height":"20",text:""}},[t._v("\n                "+t._s(e.time)+"\n              ")])],1),t._v(" "),n("p",{staticClass:"f14 mb-1 text--primary"},[n("v-alert",{staticClass:"mb-0 pa-0 text-center font-weight-bold f12",attrs:{color:"#FBBB00",width:"63","max-height":"20",text:""}},[t._v("\n                "+t._s(e.period)+"\n              ")])],1),t._v(" "),n("div",{staticClass:"f13"},[t._v("12 October - Time : 9:30 to 10:30")])])],1)],1),t._v(" "),n("div",[n("div",{staticClass:"d-flex justify-space-between mb-2"},[n("div",{staticClass:"shaped-chips f11-a mt-auto"},[n("v-chip-group",{attrs:{color:t.$vuetify.theme.dark?"":"#F5F5F5"}},[n("v-chip",{staticClass:"rounded-6"},[t._v("Call")]),t._v(" "),n("v-chip",{staticClass:"rounded-6"},[t._v("Chat")])],1)],1),t._v(" "),n("v-btn",{staticClass:"f13",attrs:{color:"success",elevation:"0",width:"60",height:"30"}},[n("v-icon",{staticClass:"mr-1",attrs:{small:""}},[t._v("$chat")]),t._v("\n            Chat\n          ")],1)],1)])])}))],2)])}),[],!1,null,null,null);e.default=component.exports;l()(component,{VAlert:c.a,VAvatar:v.a,VBadge:h.a,VBtn:f.a,VCard:m.a,VCardText:_.c,VChip:w.a,VChipGroup:x.a,VCol:y.a,VContainer:C.a,VIcon:O.a,VImg:j.a,VRow:B.a})}}]);