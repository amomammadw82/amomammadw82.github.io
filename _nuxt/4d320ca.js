(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{526:function(t,e,n){"use strict";n.r(e);var o={props:{title:{type:String,default:""},hideDate:{type:Boolean,default:!1},fontSize:{type:String,default:"16"},large:{type:Boolean,default:!1}},data:function(){return{length:5,onboarding:0}}},r=n(40),l=n(64),c=n.n(l),d=n(197),v=n(159),f=n(500),_=n(86),m=n(123),h=n(306),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-1"},[n("div",{staticClass:"f16 font-weight-bold d-flex mb-1"},[n("div",{class:"f"+t.fontSize},[t._v(t._s(t.title))]),t._v(" "),t.hideDate?t._e():n("div",{staticClass:"ml-auto d-flex"},[n("v-btn",{staticClass:"mx-1",attrs:{height:"25",width:"25",icon:"",disabled:t.onboarding<1},on:{click:function(e){t.onboarding--}}},[n("v-icon",[t._v("mdi-chevron-left")])],1),t._v(" "),n("v-window",{model:{value:t.onboarding,callback:function(e){t.onboarding=e},expression:"onboarding"}},t._l(t.length,(function(e){return n("v-window-item",{key:"card-"+e},[n("div",{staticClass:"d-flex align-center",staticStyle:{height:"25px"}},[t._v("\n            Jan 20 to 26 Jan\n          ")])])})),1),t._v(" "),n("v-btn",{staticClass:"mx-1",attrs:{height:"25",width:"25",icon:"",disabled:t.onboarding>=t.length-1},on:{click:function(e){t.onboarding++}}},[n("v-icon",[t._v("mdi-chevron-right")])],1)],1)]),t._v(" "),n("v-window",{model:{value:t.onboarding,callback:function(e){t.onboarding=e},expression:"onboarding"}},t._l(t.length,(function(e){return n("v-window-item",{key:"card-"+e},[n("div",{staticClass:"d-flex align-center"},[n("v-item-group",{staticClass:"w-100 d-flex my-3 justify-space-between",attrs:{group:"",mandatory:""},model:{value:t.onboarding,callback:function(e){t.onboarding=e},expression:"onboarding"}},t._l(5,(function(e){return n("v-item",{key:e,scopedSlots:t._u([{key:"default",fn:function(o){var r=o.active,l=o.toggle;return[n("v-btn",{staticClass:"secondary-shadow rounded-12",attrs:{value:e,height:t.large?84:70,width:t.large?60:50,"min-width":t.large?60:50,color:r?"success":""},on:{click:l}},[n("span",[n("p",{class:["mb-1 font-weight-bold",t.large?"f26":"f17"]},[t._v("\n                  "+t._s(e+14)+"\n                ")]),t._v(" "),n("spam",{class:[t.large?"f17":"f13"]},[t._v("Mon")])],1)])]}}],null,!0)})})),1)],1)])})),1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VIcon:v.a,VItem:f.b,VItemGroup:_.b,VWindow:m.a,VWindowItem:h.a})},714:function(t,e,n){"use strict";n.r(e);var o={components:{SliderDatePicker:n(526).default}},r=n(40),l=n(64),c=n.n(l),d=n(701),v=n(463),f=n(478),_=n(490),m=n(499),h=n(159),C=n(461),w=n(550),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("v-container",{staticClass:"px-6"},[n("main-header",{attrs:{back:"/advisor"}},[t._v("Calendar")]),t._v(" "),n("section",[n("slider-date-picker",{staticClass:"mt-4",attrs:{title:"Monday,September 15 2021","font-size":"20",large:"","hide-date":""}})],1),t._v(" "),n("section",[n("div",{staticClass:"d-flex cols-px-0"},[n("v-col",{staticClass:"f14",attrs:{cols:"3"}},[n("div",{staticClass:"text--primary pa-2 mb-15"},[t._v("09 AM")]),t._v(" "),n("div",{staticClass:"pa-2 mb-15"},[t._v("10 AM")]),t._v(" "),n("div",{staticClass:"pa-2 mb-15"},[t._v("11 AM")]),t._v(" "),n("div",{staticClass:"pa-2 mb-15"},[t._v("12 AM")]),t._v(" "),n("div",{staticClass:"pa-2 mb-15"},[t._v("13 AM")])]),t._v(" "),n("v-col",{staticClass:"pr-10"},[n("v-card",{staticClass:"py-1 pr-3 mb-13 rounded-15",attrs:{color:"#FB256521",elevation:"0"}},[n("div",{staticClass:"text-right"},[n("v-icon",[t._v(" mdi-dots-horizontal ")])],1),t._v(" "),n("v-alert",{staticClass:"bg-transparent py-0 mb-0",attrs:{border:"left","colored-border":"",color:"#FB2565"}},[n("div",{staticClass:"f12"},[t._v("12 Sep - 9AM to 10 AM")]),t._v(" "),n("div",{staticClass:"f19 font-weight-bold"},[t._v("\n                Call to Legal "),n("br"),t._v("\n                Dr bernard\n              ")])]),t._v(" "),n("div",{staticClass:"text-right mb-1"},[n("v-avatar",{attrs:{size:"23",color:"white"}},[n("v-img",{attrs:{src:"https://picsum.photos/200/300?random=2"}})],1)],1)],1),t._v(" "),n("v-card",{staticClass:"py-1 pr-3 rounded-15",attrs:{color:"#FBBB0021",elevation:"0"}},[n("div",{staticClass:"text-right"},[n("v-icon",[t._v(" mdi-dots-horizontal ")])],1),t._v(" "),n("v-alert",{staticClass:"bg-transparent py-0 mb-0",attrs:{border:"left","colored-border":"",color:"#FBBB00"}},[n("div",{staticClass:"f12"},[t._v("12 Sep - 9AM to 10 AM")]),t._v(" "),n("div",{staticClass:"f19 font-weight-bold"},[t._v("\n                Call to Legal "),n("br"),t._v("\n                Dr bernard\n              ")])]),t._v(" "),n("div",{staticClass:"text-right mb-1"},[n("v-avatar",{attrs:{size:"23",color:"white"}},[n("v-img",{attrs:{src:"https://picsum.photos/200/300?random=2"}})],1)],1)],1)],1)],1)]),t._v(" "),n("v-spacer",{staticClass:"mb-10"})],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VAlert:d.a,VAvatar:v.a,VCard:f.a,VCol:_.a,VContainer:m.a,VIcon:h.a,VImg:C.a,VSpacer:w.a})}}]);