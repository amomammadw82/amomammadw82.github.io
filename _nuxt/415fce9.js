(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{487:function(t,e,o){t.exports=o.p+"img/course-list.973e3d0.jpg"},500:function(t,e,o){"use strict";o.d(e,"a",(function(){return d}));var n=o(1),r=o(127),c=o(26),l=o(16),d=o(0).a.extend({props:{activeClass:String,value:{required:!1}},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots.default?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(element.data=this._b(element.data||{},element.tag,{class:Object(n.a)({},this.activeClass,this.isActive)}),element):(Object(l.c)("v-item should only contain a single element",this),element)):(Object(l.c)("v-item is missing a default scopedSlot",this),null);var element}});e.b=Object(c.a)(d,Object(r.a)("itemGroup","v-item","v-item-group")).extend({name:"v-item"})},539:function(t,e,o){"use strict";var n=o(500),r=o(127),c=o(26);e.a=Object(c.a)(n.a,Object(r.a)("slideGroup")).extend({name:"v-slide-item"})},575:function(t,e,o){var content=o(620);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(25).default)("0a394faa",content,!0,{sourceMap:!1})},619:function(t,e,o){"use strict";o(575)},620:function(t,e,o){var n=o(24)(!1);n.push([t.i,".cat-btn{background-color:#aaa!important}.radio-filter{width:154px}.check-filter>.v-input__control>.v-input__slot,.radio-filter{border:1px solid rgba(224,228,234,.45);box-sizing:border-box;box-shadow:0 11px 20px hsla(0,0%,87.1%,.12);height:57px}.check-filter>.v-input__control>.v-input__slot{width:100px;padding:5px;border-radius:12px}",""]),t.exports=n},709:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{sheet:!1,categorys:[{cat_name:"Design"},{cat_name:"Develop"},{cat_name:"Chemistry"},{cat_name:"Design"},{cat_name:"Design"},{cat_name:"Design"}],courses:[{thumbnail:o(487),time:"12 Nov - 10 Sep-38 Hours",title:" UX Fundamentals",teacher_avatar:"https://cdn.vuetifyjs.com/images/john.jpg",teacher_name:"Dr.Martin",price:"75"},{thumbnail:o(487),time:"12 Nov - 10 Sep-38 Hours",title:" UX Fundamentals",teacher_avatar:"https://cdn.vuetifyjs.com/images/john.jpg",teacher_name:"Dr.Martin",price:"75"},{thumbnail:o(487),time:"12 Nov - 10 Sep-38 Hours",title:" UX Fundamentals",teacher_avatar:"https://cdn.vuetifyjs.com/images/john.jpg",teacher_name:"Dr.Martin",price:"75"}]}}},r=(o(619),o(40)),c=o(64),l=o.n(c),d=o(463),v=o(510),m=o(740),h=o(197),_=o(478),f=o(475),C=o(577),x=o(490),w=o(499),y=o(159),k=o(461),j=o(697),V=o(698),A=o(473),S=o(195),F=o(512),O=o(539),D=o(603),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page"},[o("v-container",{staticClass:"px-6 pb-p88"},[o("section",[o("v-row",{staticClass:"mt-15 ma-0",attrs:{align:"center"}},[o("nuxt-link",{attrs:{to:"/"}},[o("v-btn",{staticClass:"btn-icon-sm bg-transparent rounded-lg back-btn"},[o("v-icon",[t._v("mdi-arrow-left")])],1)],1),t._v(" "),o("p",{staticClass:"f26 font-weight-bold ml-3 mb-0"},[t._v("Courses")]),t._v(" "),o("v-avatar",{staticClass:"ml-auto",attrs:{height:"35",width:"35","min-width":"35"}},[o("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/john.jpg",alt:"John","aspect-ratio":"1"}})],1)],1)],1),t._v(" "),o("section",[o("v-text-field",{staticClass:"mt-4 mb-n2 rounded-10 searchlist-input",attrs:{filled:"",rounded:"",dense:"","prepend-inner-icon":"mdi-magnify",placeholder:"Search Course"}})],1),t._v(" "),o("section",[o("v-slide-group",t._l(t.categorys,(function(e,n){return o("v-slide-item",{key:n,scopedSlots:t._u([{key:"default",fn:function(n){var r=n.active,c=n.toggle;return[o("v-btn",{staticClass:"mr-2 rounded-10 f14 bg-transparent back-btn",attrs:{width:"100",height:"50","input-value":r,"active-class":"success white--text"},on:{click:c}},[t._v("\n            "+t._s(e.cat_name)+"\n          ")])]}}],null,!0)})})),1)],1),t._v(" "),o("section",[o("v-row",{staticClass:"ml-0 mt-5 mb-5",attrs:{justify:"space-between"}},[o("p",{staticClass:"f21 font-weight-bold mb-0"},[t._v("Course List")]),t._v(" "),o("div",[o("v-btn",{attrs:{text:""},on:{click:function(e){t.sheet=!t.sheet}}},[o("v-icon",[t._v("mdi-filter-plus")]),t._v(" "),o("p",{staticClass:"f18 font-weight-bold mb-0"},[t._v("Filter")])],1)],1)])],1),t._v(" "),o("section",[o("v-row",{staticClass:"mb-4 mx-0 rounded-lg secondary-shadow secondary-border",attrs:{align:"center"}},[o("v-col",{staticClass:"d-flex px-0 align-center"},[o("v-avatar",{staticClass:"mx-2",attrs:{tile:""}},[o("v-icon",{attrs:{color:"#FBBB00",large:""}},[t._v("$location")])],1),t._v(" "),o("div",{staticClass:"ml-3"},[o("p",{staticClass:"f16 mb-0 font-weight-bold"},[t._v("Find Accadeym")]),t._v(" "),o("p",{staticClass:"f12 mb-0 text--secondary"},[t._v("\n              find Academy Nerby in Location Map\n            ")])]),t._v(" "),o("v-icon",{staticClass:"ml-auto",attrs:{large:""}},[t._v("mdi-chevron-right")])],1)],1)],1),t._v(" "),o("section",[o("div",{staticClass:"badge-rounded"},t._l(t.courses,(function(e,n){return o("v-card",{key:n,staticClass:"rounded-15 pa-2 pb-0 secondary-shadow secondary-border mb-5",attrs:{"min-height":"139",outlined:""}},[o("div",{staticClass:"d-flex flex-no-wrap mr-n2"},[o("v-avatar",{staticClass:"ma-n2",attrs:{width:"96",height:"139",tile:""}},[o("v-img",{staticClass:"course-img rounded-15",attrs:{src:e.thumbnail,width:"96","min-height":"139",alt:""}})],1),t._v(" "),o("div",{staticClass:"col pa-0 pr-2"},[o("v-card-text",{staticClass:"pa-0 pl-4"},[o("div",{staticClass:"mt-1 f10 d-flex"},[t._v("\n                  Word of the Day\n                  "),o("v-badge",{staticClass:"ml-auto",attrs:{content:"online",color:"warning",bordered:"",inline:"",tile:""}})],1),t._v(" "),o("p",{staticClass:"f17 font-weight-bold mb-0 text--primary"},[t._v("\n                  "+t._s(e.title)+"\n                ")]),t._v(" "),o("p",{staticClass:"mb-0 f13"},[t._v("\n                  Learn all of the skills, tools, and "),o("br"),t._v("\n                  processes you need to become a ...\n                ")])]),t._v(" "),o("v-card-actions",{staticClass:"align-center pl-4 pr-0"},[o("v-avatar",{attrs:{width:"13","min-width":"13",height:"13"}},[o("v-img",{attrs:{src:e.teacher_avatar,width:"13",height:"13",alt:""}})],1),t._v(" "),o("p",{staticClass:"ma-0 ml-2 f10"},[t._v(t._s(e.teacher_name))]),t._v(" "),o("div",{staticClass:"ml-auto font-weight-bold mr-1"},[t._v("\n                  "+t._s(e.price)+" $\n                ")])],1)],1)],1)])})),1)]),t._v(" "),o("v-bottom-sheet",{attrs:{scrollable:""},model:{value:t.sheet,callback:function(e){t.sheet=e},expression:"sheet"}},[o("v-card",{staticClass:"position-relative rounded-t-xl"},[o("v-btn",{staticClass:"mx-auto position-absolute bottomsheet-btn",attrs:{"max-width":"42","min-width":"42","min-height":"7",height:"7",color:"white"},on:{click:function(e){t.sheet=!t.sheet}}}),t._v(" "),o("v-card-text",{staticClass:"pa-4 pt-12 rounded-t-xl"},[o("v-sheet",[o("v-row",{staticClass:"mb-7 ml-0",attrs:{align:"center"}},[o("v-btn",{staticClass:"btn-icon-sm bg-transparent rounded-lg back-btn",on:{click:function(e){t.sheet=!1}}},[o("v-icon",[t._v("mdi-close")])],1),t._v(" "),o("p",{staticClass:"f26 mb-0 ml-3 font-weight-bold"},[t._v("Filter")])],1),t._v(" "),o("p",{staticClass:"f21 mb-0 font-weight-bold"},[t._v("Price")]),t._v(" "),o("p",{staticClass:"f12 mb-0 text--secondary"},[t._v("\n              Price per Hourse or All video\n            ")]),t._v(" "),o("v-radio-group",{attrs:{row:""}},[o("v-radio",{staticClass:"radio-filter pa-4 rounded-12",attrs:{color:"success",label:"Price"}}),t._v(" "),o("v-radio",{staticClass:"ml-auto radio-filter rounded-12 pa-4",attrs:{color:"success",label:"Free Course"}})],1),t._v(" "),o("p",{staticClass:"f21 mb-0 font-weight-bold"},[t._v("How to class")]),t._v(" "),o("p",{staticClass:"f12 mb-0 text--secondary"},[t._v("\n              How To start Class video - Online - campus\n            ")]),t._v(" "),o("v-row",{staticClass:"mt-5",attrs:{justify:"space-around"}},[o("v-checkbox",{staticClass:"check-filter",attrs:{color:"success",label:"Video","on-icon":"mdi-checkbox-intermediate"}}),t._v(" "),o("v-checkbox",{staticClass:"check-filter",attrs:{color:"success",label:"Online","on-icon":"mdi-checkbox-intermediate"}}),t._v(" "),o("v-checkbox",{staticClass:"check-filter",attrs:{color:"success",label:"Campus","on-icon":"mdi-checkbox-intermediate"}})],1),t._v(" "),o("p",{staticClass:"f21 mb-0 font-weight-bold mt-7"},[t._v("Class Type")]),t._v(" "),o("p",{staticClass:"f12 mb-0 text--secondary"},[t._v("\n              Select Location in Apply Course\n            ")]),t._v(" "),o("v-radio-group",{attrs:{row:""}},[o("v-radio",{staticClass:"radio-filter pa-4 rounded-12",attrs:{color:"success",label:"Program"}}),t._v(" "),o("v-radio",{staticClass:"ml-auto radio-filter rounded-12 pa-4",attrs:{color:"success",label:"Course"}})],1),t._v(" "),o("v-btn",{staticClass:"\n                f20\n                mt-10\n                font-weight-bold\n                primary-shadow\n                btn-large\n                rounded-12\n              ",attrs:{color:"primary","x-large":"",block:""}},[t._v("\n              Filter\n            ")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VAvatar:d.a,VBadge:v.a,VBottomSheet:m.a,VBtn:h.a,VCard:_.a,VCardActions:f.a,VCardText:f.c,VCheckbox:C.a,VCol:x.a,VContainer:w.a,VIcon:y.a,VImg:k.a,VRadio:j.a,VRadioGroup:V.a,VRow:A.a,VSheet:S.a,VSlideGroup:F.b,VSlideItem:O.a,VTextField:D.a})}}]);