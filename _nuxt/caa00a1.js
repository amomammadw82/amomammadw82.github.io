(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{502:function(t,e,o){"use strict";o.r(e);var n={props:{academy:Boolean,services:Boolean},data:function(){return{value:1}}},r=o(56),c=o(75),l=o.n(c),v=o(650),d=o(195),m=o(157),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.academy?o("v-bottom-navigation",{attrs:{fixed:"",value:t.value,color:"success"}},[o("v-btn",[o("span",[t._v("Home")]),t._v(" "),o("v-icon",[t._v("mdi-school")])],1),t._v(" "),o("v-btn",[o("span",[t._v("Courses")]),t._v(" "),o("v-icon",[t._v("$courses")])],1),t._v(" "),o("v-btn",[o("span",[t._v("My Course")]),t._v(" "),o("v-icon",[t._v("$mycourse")])],1),t._v(" "),o("v-btn",[o("span",[t._v("Profile")]),t._v(" "),o("v-icon",[t._v("mdi-account")])],1)],1):t._e(),t._v(" "),t.services?o("div",[t._v("aaa")]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBottomNavigation:v.a,VBtn:d.a,VIcon:m.a})},535:function(t,e,o){t.exports=o.p+"img/course-list.973e3d0.jpg"},559:function(t,e,o){var content=o(598);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(26).default)("336f98f5",content,!0,{sourceMap:!1})},597:function(t,e,o){"use strict";o(559)},598:function(t,e,o){var n=o(25)(!1);n.push([t.i,".pt-p14{padding-top:14px}.ml-p14{margin-left:14px}.v-btn,.v-tab{text-transform:none!important}.bg-transparent{background-color:transparent!important}.position-relative{position:relative}.position-absolute{position:absolute}.cat-btn{background-color:#aaa!important}.radio-filter{width:154px}.check-filter>.v-input__control>.v-input__slot,.radio-filter{border:1px solid rgba(224,228,234,.45);box-sizing:border-box;box-shadow:0 11px 20px hsla(0,0%,87.1%,.12);height:57px}.check-filter>.v-input__control>.v-input__slot{width:100px;padding:5px;border-radius:12px}",""]),t.exports=n},663:function(t,e,o){"use strict";o.r(e);var n={components:{ServicesFooter:o(502).default},data:function(){return{sheet:!1,categorys:[{cat_name:"Design"},{cat_name:"Develop"},{cat_name:"Chemistry"},{cat_name:"Design"},{cat_name:"Design"},{cat_name:"Design"}],courses:[{thumbnail:o(535),time:"12 Nov - 10 Sep-38 Hours",title:" UX Fundamentals",teacher_avatar:"https://cdn.vuetifyjs.com/images/john.jpg",teacher_name:"Dr.Martin",price:"75"},{thumbnail:o(535),time:"12 Nov - 10 Sep-38 Hours",title:" UX Fundamentals",teacher_avatar:"https://cdn.vuetifyjs.com/images/john.jpg",teacher_name:"Dr.Martin",price:"75"},{thumbnail:o(535),time:"12 Nov - 10 Sep-38 Hours",title:" UX Fundamentals",teacher_avatar:"https://cdn.vuetifyjs.com/images/john.jpg",teacher_name:"Dr.Martin",price:"75"}]}}},r=(o(597),o(56)),c=o(75),l=o.n(c),v=o(480),d=o(549),m=o(578),_=o(195),h=o(481),f=o(475),C=o(561),x=o(483),w=o(484),y=o(157),k=o(457),V=o(652),j=o(653),S=o(468),F=o(193),B=o(579),D=o(683),H=o(651),M=o(649),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page"},[o("v-container",{staticClass:"px-6"},[o("v-row",{staticClass:"mt-15 ma-0",attrs:{align:"center"}},[o("nuxt-link",{attrs:{to:"/"}},[o("v-btn",{staticClass:"btn-icon-sm bg-transparent rounded-lg back-btn"},[o("v-icon",[t._v("mdi-arrow-left")])],1)],1),t._v(" "),o("p",{staticClass:"f26 font-weight-bold ml-3 mb-0"},[t._v("Courses")]),t._v(" "),o("v-avatar",{staticClass:"ml-auto",attrs:{height:"35",width:"35","min-width":"35"}},[o("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/john.jpg",alt:"John","aspect-ratio":"1"}})],1)],1),t._v(" "),o("v-text-field",{staticClass:"mt-4 mb-n2 rounded-10 searchlist-input",attrs:{filled:"",rounded:"",dense:"","prepend-inner-icon":"mdi-magnify",placeholder:"Search Course"}}),t._v(" "),o("v-slide-group",t._l(t.categorys,(function(e,n){return o("v-slide-item",{key:n,scopedSlots:t._u([{key:"default",fn:function(n){var r=n.active,c=n.toggle;return[o("v-btn",{staticClass:"mr-2 rounded-10 f14 bg-transparent back-btn",attrs:{width:"100",height:"50","input-value":r,"active-class":"success white--text"},on:{click:c}},[t._v("\n          "+t._s(e.cat_name)+"\n        ")])]}}],null,!0)})})),1),t._v(" "),o("v-row",{staticClass:"ml-0 mt-5 mb-5",attrs:{justify:"space-between"}},[o("p",{staticClass:"f21 font-weight-bold mb-0"},[t._v("Course List")]),t._v(" "),o("div",[o("v-btn",{attrs:{text:""},on:{click:function(e){t.sheet=!t.sheet}}},[o("v-icon",[t._v("mdi-filter-plus")]),t._v(" "),o("p",{staticClass:"f18 font-weight-bold mb-0"},[t._v("Filter")])],1)],1)]),t._v(" "),o("v-bottom-sheet",{attrs:{scrollable:""},model:{value:t.sheet,callback:function(e){t.sheet=e},expression:"sheet"}},[o("v-card",{staticClass:"position-relative rounded-t-xl"},[o("v-btn",{staticClass:"mx-auto position-absolute bottomsheet-btn",attrs:{"max-width":"42","min-width":"42","min-height":"7",height:"7",color:"white"},on:{click:function(e){t.sheet=!t.sheet}}}),t._v(" "),o("v-card-text",{staticClass:"pa-4 pt-12 rounded-t-xl"},[o("v-sheet",[o("v-row",{staticClass:"mb-7 ml-0",attrs:{align:"center"}},[o("v-btn",{staticClass:"btn-icon-sm bg-transparent rounded-lg back-btn",on:{click:function(e){t.sheet=!1}}},[o("v-icon",[t._v("mdi-close")])],1),t._v(" "),o("p",{staticClass:"f26 mb-0 ml-3 font-weight-bold"},[t._v("Filter")])],1),t._v(" "),o("p",{staticClass:"f21 mb-0 font-weight-bold"},[t._v("Price")]),t._v(" "),o("p",{staticClass:"f12 mb-0 text--secondary"},[t._v("\n              Price per Hourse or All video\n            ")]),t._v(" "),o("v-radio-group",{attrs:{row:""}},[o("v-radio",{staticClass:"radio-filter pa-4 rounded-12",attrs:{color:"success",label:"Price"}}),t._v(" "),o("v-radio",{staticClass:"ml-auto radio-filter rounded-12 pa-4",attrs:{color:"success",label:"Free Course"}})],1),t._v(" "),o("p",{staticClass:"f21 mb-0 font-weight-bold"},[t._v("How to class")]),t._v(" "),o("p",{staticClass:"f12 mb-0 text--secondary"},[t._v("\n              How To start Class video - Online - campus\n            ")]),t._v(" "),o("v-row",{staticClass:"mt-5",attrs:{justify:"space-around"}},[o("v-checkbox",{staticClass:"check-filter",attrs:{color:"success",label:"Video","on-icon":"mdi-checkbox-intermediate"}}),t._v(" "),o("v-checkbox",{staticClass:"check-filter",attrs:{color:"success",label:"Online","on-icon":"mdi-checkbox-intermediate"}}),t._v(" "),o("v-checkbox",{staticClass:"check-filter",attrs:{color:"success",label:"Campus","on-icon":"mdi-checkbox-intermediate"}})],1),t._v(" "),o("p",{staticClass:"f21 mb-0 font-weight-bold mt-7"},[t._v("Class Type")]),t._v(" "),o("p",{staticClass:"f12 mb-0 text--secondary"},[t._v("\n              Select Location in Apply Course\n            ")]),t._v(" "),o("v-radio-group",{attrs:{row:""}},[o("v-radio",{staticClass:"radio-filter pa-4 rounded-12",attrs:{color:"success",label:"Program"}}),t._v(" "),o("v-radio",{staticClass:"ml-auto radio-filter rounded-12 pa-4",attrs:{color:"success",label:"Course"}})],1),t._v(" "),o("v-btn",{staticClass:"\n                f20\n                mt-10\n                font-weight-bold\n                ex-primary-btn\n                btn-large\n                rounded-12\n              ",attrs:{color:"primary","x-large":"",block:""}},[t._v("\n              Filter\n            ")])],1)],1)],1)],1),t._v(" "),o("v-row",{staticClass:"mb-4 mx-0 rounded-lg ex-secondary-btn",attrs:{align:"center"}},[o("v-col",{staticClass:"d-flex px-0 align-center"},[o("v-avatar",{staticClass:"mx-2",attrs:{tile:""}},[o("v-icon",{attrs:{color:"#FBBB00",large:""}},[t._v("$location")])],1),t._v(" "),o("div",{staticClass:"ml-3"},[o("p",{staticClass:"f16 mb-0 font-weight-bold"},[t._v("Find Accadeym")]),t._v(" "),o("p",{staticClass:"f12 mb-0 text--secondary"},[t._v("\n            find Academy Nerby in Location Map\n          ")])]),t._v(" "),o("v-icon",{staticClass:"ml-auto",attrs:{large:""}},[t._v("mdi-chevron-right")])],1)],1),t._v(" "),o("div",{staticClass:"badge-rounded"},t._l(t.courses,(function(e,n){return o("v-card",{key:n,staticClass:"rounded-15 d-flex mx-auto mb-5",attrs:{width:"330","min-height":"139",outlined:""}},[o("div",{staticClass:"d-flex flex-no-wrap"},[o("v-avatar",{attrs:{width:"96",height:"139",tile:""}},[o("v-img",{staticClass:"course-img rounded-15",attrs:{src:e.thumbnail,width:"96","min-height":"139",alt:""}})],1),t._v(" "),o("div",[o("v-card-text",{staticClass:"py-1 pr-1 pl-2"},[o("div",{staticClass:"mt-1 f10 d-flex"},[t._v("\n                Word of the Day\n                "),o("v-badge",{staticClass:"ml-auto",attrs:{content:"online",color:"warning",bordered:"",inline:"",tile:""}})],1),t._v(" "),o("p",{staticClass:"f17 font-weight-bold mb-0 text--primary"},[t._v("\n                "+t._s(e.title)+"\n              ")]),t._v(" "),o("p",{staticClass:"mb-0 f13"},[t._v("\n                Learn all of the skills, tools, and "),o("br"),t._v("\n                processes you need to become a UI ...\n              ")])]),t._v(" "),o("v-card-actions",{staticClass:"align-center"},[o("v-avatar",{attrs:{width:"13","min-width":"13",height:"13"}},[o("v-img",{attrs:{src:e.teacher_avatar,width:"13",height:"13",alt:""}})],1),t._v(" "),o("p",{staticClass:"ma-0 ml-2 f10"},[t._v(t._s(e.teacher_name))]),t._v(" "),o("div",{staticClass:"ml-auto font-weight-bold"},[t._v(t._s(e.price)+" $")])],1)],1)],1)])})),1),t._v(" "),o("v-spacer",{staticClass:"mb-15"})],1),t._v(" "),o("services-footer",{attrs:{academy:""}})],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{ServicesFooter:o(502).default}),l()(component,{VAvatar:v.a,VBadge:d.a,VBottomSheet:m.a,VBtn:_.a,VCard:h.a,VCardActions:f.a,VCardText:f.c,VCheckbox:C.a,VCol:x.a,VContainer:w.a,VIcon:y.a,VImg:k.a,VRadio:V.a,VRadioGroup:j.a,VRow:S.a,VSheet:F.a,VSlideGroup:B.b,VSlideItem:D.a,VSpacer:H.a,VTextField:M.a})}}]);