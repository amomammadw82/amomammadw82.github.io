(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{556:function(e,t,r){"use strict";r(7),r(11),r(12),r(13);var n=r(1),o=(r(28),r(9),r(27),r(61),r(181),r(19),r(29),r(182),r(183),r(184),r(185),r(186),r(187),r(188),r(189),r(190),r(191),r(192),r(193),r(194),r(32),r(31),r(8),r(77),r(352),r(2)),c=r(54),l=r(0);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var O=["sm","md","lg","xl"],v=O.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{}),j=O.reduce((function(e,t){return e["offset"+Object(l.x)(t)]={type:[String,Number],default:null},e}),{}),y=O.reduce((function(e,t){return e["order"+Object(l.x)(t)]={type:[String,Number],default:null},e}),{}),m={col:Object.keys(v),offset:Object.keys(j),order:Object.keys(y)};function w(e,t,r){var n=e;if(null!=r&&!1!==r){if(t){var o=t.replace(e,"");n+="-".concat(o)}return"col"!==e||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var h=new Map;t.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},j),{},{order:{type:[String,Number],default:null}},y),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var r=t.props,data=t.data,o=t.children,l=(t.parent,"");for(var f in r)l+=String(r[f]);var d=h.get(l);return d||function(){var e,t;for(t in d=[],m)m[t].forEach((function(e){var n=r[e],o=w(t,e,n);o&&d.push(o)}));var o=d.some((function(e){return e.startsWith("col-")}));d.push((e={col:!o||!r.cols},Object(n.a)(e,"col-".concat(r.cols),r.cols),Object(n.a)(e,"offset-".concat(r.offset),r.offset),Object(n.a)(e,"order-".concat(r.order),r.order),Object(n.a)(e,"align-self-".concat(r.alignSelf),r.alignSelf),e)),h.set(l,d)}(),e(r.tag,Object(c.a)(data,{class:d}),o)}})},758:function(e,t,r){"use strict";r.r(t);var n=r(47),o=r(53),c=r.n(o),l=r(556),f=r(541),component=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",[r("v-col",{staticClass:"text-center"},[r("img",{staticClass:"mb-5",attrs:{src:"/v.png",alt:"Vuetify.js"}}),e._v(" "),r("blockquote",{staticClass:"blockquote"},[e._v("\n      “First, solve the problem. Then, write the code.”\n      "),r("footer",[r("small",[r("em",[e._v("—John Johnson")])])])])])],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VCol:l.a,VRow:f.a})}}]);