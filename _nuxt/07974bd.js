(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{435:function(t,l,o){"use strict";o.d(l,"a",(function(){return w}));o(32),o(9),o(16),o(44),o(28),o(12),o(35),o(53),o(29),o(18),o(23),o(14),o(24);var r=o(2),e=o(3),n=(o(20),o(46),o(80),o(15),o(25),o(6));function f(object,t){var l=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),l.push.apply(l,o)}return l}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(l){Object(r.a)(t,l,source[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(source,l))}))}return t}function m(t,l){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!o){if(Array.isArray(t)||(o=function(t,l){if(!t)return;if("string"==typeof t)return x(t,l);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return x(t,l)}(t))||l&&t&&"number"==typeof t.length){o&&(t=o);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var e,n=!0,f=!1;return{s:function(){o=o.call(t)},n:function(){var t=o.next();return n=t.done,t},e:function(t){f=!0,e=t},f:function(){try{n||null==o.return||o.return()}finally{if(f)throw e}}}}function x(t,l){(null==l||l>t.length)&&(l=t.length);for(var i=0,o=new Array(l);i<l;i++)o[i]=t[i];return o}var d=/;(?![^(]*\))/g,v=/:(.*)/;function h(style){var t,l={},o=m(style.split(d));try{for(o.s();!(t=o.n()).done;){var r=t.value.split(v),f=Object(e.a)(r,2),c=f[0],x=f[1];(c=c.trim())&&("string"==typeof x&&(x=x.trim()),l[Object(n.c)(c)]=x)}}catch(t){o.e(t)}finally{o.f()}return l}function w(){for(var t,l={},i=arguments.length;i--;)for(var o=0,r=Object.keys(arguments[i]);o<r.length;o++)switch(t=r[o]){case"class":case"directives":arguments[i][t]&&(l[t]=O(l[t],arguments[i][t]));break;case"style":arguments[i][t]&&(l[t]=y(l[t],arguments[i][t]));break;case"staticClass":if(!arguments[i][t])break;void 0===l[t]&&(l[t]=""),l[t]&&(l[t]+=" "),l[t]+=arguments[i][t].trim();break;case"on":case"nativeOn":arguments[i][t]&&(l[t]=j(l[t],arguments[i][t]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[i][t])break;l[t]||(l[t]={}),l[t]=c(c({},arguments[i][t]),l[t]);break;default:l[t]||(l[t]=arguments[i][t])}return l}function y(t,source){return t?source?(t=Object(n.x)("string"==typeof t?h(t):t)).concat("string"==typeof source?h(source):source):t:source}function O(t,source){return source?t&&t?Object(n.x)(t).concat(source):source:t}function j(){if(!(arguments.length<=0?void 0:arguments[0]))return arguments.length<=1?void 0:arguments[1];if(!(arguments.length<=1?void 0:arguments[1]))return arguments.length<=0?void 0:arguments[0];for(var t={},i=2;i--;){var l=i<0||arguments.length<=i?void 0:arguments[i];for(var o in l)l[o]&&(t[o]?t[o]=[].concat(l[o],t[o]):t[o]=l[o])}return t}},440:function(t,l,o){var content=o(472);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(42).default)("b9f570ac",content,!0,{sourceMap:!1})},463:function(t,l,o){"use strict";o(12),o(18),o(23),o(24);var r=o(2),e=(o(79),o(15),o(20),o(52),o(280),o(9),o(28),o(281),o(282),o(283),o(284),o(285),o(286),o(287),o(288),o(289),o(290),o(291),o(292),o(293),o(29),o(33),o(14),o(70),o(440),o(0)),n=o(435),f=o(6);function c(object,t){var l=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),l.push.apply(l,o)}return l}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(l){Object(r.a)(t,l,source[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(source,l))}))}return t}var x=["sm","md","lg","xl"],d=x.reduce((function(t,l){return t[l]={type:[Boolean,String,Number],default:!1},t}),{}),v=x.reduce((function(t,l){return t["offset"+Object(f.w)(l)]={type:[String,Number],default:null},t}),{}),h=x.reduce((function(t,l){return t["order"+Object(f.w)(l)]={type:[String,Number],default:null},t}),{}),w={col:Object.keys(d),offset:Object.keys(v),order:Object.keys(h)};function y(t,l,o){var r=t;if(null!=o&&!1!==o){if(l){var e=l.replace(t,"");r+="-".concat(e)}return"col"!==t||""!==o&&!0!==o?(r+="-".concat(o)).toLowerCase():r.toLowerCase()}}var O=new Map;l.a=e.a.extend({name:"v-col",functional:!0,props:m(m(m(m({cols:{type:[Boolean,String,Number],default:!1}},d),{},{offset:{type:[String,Number],default:null}},v),{},{order:{type:[String,Number],default:null}},h),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,l){var o=l.props,data=l.data,e=l.children,f=(l.parent,"");for(var c in o)f+=String(o[c]);var m=O.get(f);return m||function(){var t,l;for(l in m=[],w)w[l].forEach((function(t){var r=o[t],e=y(l,t,r);e&&m.push(e)}));var e=m.some((function(t){return t.startsWith("col-")}));m.push((t={col:!e||!o.cols},Object(r.a)(t,"col-".concat(o.cols),o.cols),Object(r.a)(t,"offset-".concat(o.offset),o.offset),Object(r.a)(t,"order-".concat(o.order),o.order),Object(r.a)(t,"align-self-".concat(o.alignSelf),o.alignSelf),t)),O.set(f,m)}(),t(o.tag,Object(n.a)(data,{class:m}),e)}})},472:function(t,l,o){var r=o(41)(!1);r.push([t.i,".pt-p14{padding-top:14px}.ml-p14{margin-left:14px}.v-btn,.v-tab{text-transform:none!important}.bg-transparent{background-color:transparent!important}.position-relative{position:relative}.position-absolute{position:absolute}.container{width:100%;padding:12px;margin-right:auto;margin-left:auto}@media(min-width:960px){.container{max-width:900px}}@media(min-width:1264px){.container{max-width:1185px}}@media(min-width:1904px){.container{max-width:1785px}}.container--fluid{max-width:100%}.row{display:flex;flex-wrap:wrap;flex:1 1 auto;margin:-12px}.row+.row{margin-top:12px}.row+.row--dense{margin-top:4px}.row--dense{margin:-4px}.row--dense>.col,.row--dense>[class*=col-]{padding:4px}.row.no-gutters{margin:0}.row.no-gutters>.col,.row.no-gutters>[class*=col-]{padding:0}.col,.col-1,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-10,.col-11,.col-12,.col-auto,.col-lg,.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-auto,.col-md,.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12,.col-md-auto,.col-sm,.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-auto{width:100%;padding:12px}.col{flex-basis:0;flex-grow:1;max-width:100%}.col-auto{flex:0 0 auto;width:auto;max-width:100%}.col-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-3{flex:0 0 25%;max-width:25%}.col-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-6{flex:0 0 50%;max-width:50%}.col-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-9{flex:0 0 75%;max-width:75%}.col-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-12{flex:0 0 100%;max-width:100%}.v-application--is-ltr .offset-1{margin-left:8.3333333333%}.v-application--is-rtl .offset-1{margin-right:8.3333333333%}.v-application--is-ltr .offset-2{margin-left:16.6666666667%}.v-application--is-rtl .offset-2{margin-right:16.6666666667%}.v-application--is-ltr .offset-3{margin-left:25%}.v-application--is-rtl .offset-3{margin-right:25%}.v-application--is-ltr .offset-4{margin-left:33.3333333333%}.v-application--is-rtl .offset-4{margin-right:33.3333333333%}.v-application--is-ltr .offset-5{margin-left:41.6666666667%}.v-application--is-rtl .offset-5{margin-right:41.6666666667%}.v-application--is-ltr .offset-6{margin-left:50%}.v-application--is-rtl .offset-6{margin-right:50%}.v-application--is-ltr .offset-7{margin-left:58.3333333333%}.v-application--is-rtl .offset-7{margin-right:58.3333333333%}.v-application--is-ltr .offset-8{margin-left:66.6666666667%}.v-application--is-rtl .offset-8{margin-right:66.6666666667%}.v-application--is-ltr .offset-9{margin-left:75%}.v-application--is-rtl .offset-9{margin-right:75%}.v-application--is-ltr .offset-10{margin-left:83.3333333333%}.v-application--is-rtl .offset-10{margin-right:83.3333333333%}.v-application--is-ltr .offset-11{margin-left:91.6666666667%}.v-application--is-rtl .offset-11{margin-right:91.6666666667%}@media(min-width:600px){.col-sm{flex-basis:0;flex-grow:1;max-width:100%}.col-sm-auto{flex:0 0 auto;width:auto;max-width:100%}.col-sm-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-sm-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-sm-3{flex:0 0 25%;max-width:25%}.col-sm-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-sm-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-sm-6{flex:0 0 50%;max-width:50%}.col-sm-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-sm-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-sm-9{flex:0 0 75%;max-width:75%}.col-sm-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-sm-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-sm-12{flex:0 0 100%;max-width:100%}.v-application--is-ltr .offset-sm-0{margin-left:0}.v-application--is-rtl .offset-sm-0{margin-right:0}.v-application--is-ltr .offset-sm-1{margin-left:8.3333333333%}.v-application--is-rtl .offset-sm-1{margin-right:8.3333333333%}.v-application--is-ltr .offset-sm-2{margin-left:16.6666666667%}.v-application--is-rtl .offset-sm-2{margin-right:16.6666666667%}.v-application--is-ltr .offset-sm-3{margin-left:25%}.v-application--is-rtl .offset-sm-3{margin-right:25%}.v-application--is-ltr .offset-sm-4{margin-left:33.3333333333%}.v-application--is-rtl .offset-sm-4{margin-right:33.3333333333%}.v-application--is-ltr .offset-sm-5{margin-left:41.6666666667%}.v-application--is-rtl .offset-sm-5{margin-right:41.6666666667%}.v-application--is-ltr .offset-sm-6{margin-left:50%}.v-application--is-rtl .offset-sm-6{margin-right:50%}.v-application--is-ltr .offset-sm-7{margin-left:58.3333333333%}.v-application--is-rtl .offset-sm-7{margin-right:58.3333333333%}.v-application--is-ltr .offset-sm-8{margin-left:66.6666666667%}.v-application--is-rtl .offset-sm-8{margin-right:66.6666666667%}.v-application--is-ltr .offset-sm-9{margin-left:75%}.v-application--is-rtl .offset-sm-9{margin-right:75%}.v-application--is-ltr .offset-sm-10{margin-left:83.3333333333%}.v-application--is-rtl .offset-sm-10{margin-right:83.3333333333%}.v-application--is-ltr .offset-sm-11{margin-left:91.6666666667%}.v-application--is-rtl .offset-sm-11{margin-right:91.6666666667%}}@media(min-width:960px){.col-md{flex-basis:0;flex-grow:1;max-width:100%}.col-md-auto{flex:0 0 auto;width:auto;max-width:100%}.col-md-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-md-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-md-3{flex:0 0 25%;max-width:25%}.col-md-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-md-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-md-6{flex:0 0 50%;max-width:50%}.col-md-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-md-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-md-9{flex:0 0 75%;max-width:75%}.col-md-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-md-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-md-12{flex:0 0 100%;max-width:100%}.v-application--is-ltr .offset-md-0{margin-left:0}.v-application--is-rtl .offset-md-0{margin-right:0}.v-application--is-ltr .offset-md-1{margin-left:8.3333333333%}.v-application--is-rtl .offset-md-1{margin-right:8.3333333333%}.v-application--is-ltr .offset-md-2{margin-left:16.6666666667%}.v-application--is-rtl .offset-md-2{margin-right:16.6666666667%}.v-application--is-ltr .offset-md-3{margin-left:25%}.v-application--is-rtl .offset-md-3{margin-right:25%}.v-application--is-ltr .offset-md-4{margin-left:33.3333333333%}.v-application--is-rtl .offset-md-4{margin-right:33.3333333333%}.v-application--is-ltr .offset-md-5{margin-left:41.6666666667%}.v-application--is-rtl .offset-md-5{margin-right:41.6666666667%}.v-application--is-ltr .offset-md-6{margin-left:50%}.v-application--is-rtl .offset-md-6{margin-right:50%}.v-application--is-ltr .offset-md-7{margin-left:58.3333333333%}.v-application--is-rtl .offset-md-7{margin-right:58.3333333333%}.v-application--is-ltr .offset-md-8{margin-left:66.6666666667%}.v-application--is-rtl .offset-md-8{margin-right:66.6666666667%}.v-application--is-ltr .offset-md-9{margin-left:75%}.v-application--is-rtl .offset-md-9{margin-right:75%}.v-application--is-ltr .offset-md-10{margin-left:83.3333333333%}.v-application--is-rtl .offset-md-10{margin-right:83.3333333333%}.v-application--is-ltr .offset-md-11{margin-left:91.6666666667%}.v-application--is-rtl .offset-md-11{margin-right:91.6666666667%}}@media(min-width:1264px){.col-lg{flex-basis:0;flex-grow:1;max-width:100%}.col-lg-auto{flex:0 0 auto;width:auto;max-width:100%}.col-lg-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-lg-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-lg-3{flex:0 0 25%;max-width:25%}.col-lg-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-lg-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-lg-6{flex:0 0 50%;max-width:50%}.col-lg-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-lg-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-lg-9{flex:0 0 75%;max-width:75%}.col-lg-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-lg-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-lg-12{flex:0 0 100%;max-width:100%}.v-application--is-ltr .offset-lg-0{margin-left:0}.v-application--is-rtl .offset-lg-0{margin-right:0}.v-application--is-ltr .offset-lg-1{margin-left:8.3333333333%}.v-application--is-rtl .offset-lg-1{margin-right:8.3333333333%}.v-application--is-ltr .offset-lg-2{margin-left:16.6666666667%}.v-application--is-rtl .offset-lg-2{margin-right:16.6666666667%}.v-application--is-ltr .offset-lg-3{margin-left:25%}.v-application--is-rtl .offset-lg-3{margin-right:25%}.v-application--is-ltr .offset-lg-4{margin-left:33.3333333333%}.v-application--is-rtl .offset-lg-4{margin-right:33.3333333333%}.v-application--is-ltr .offset-lg-5{margin-left:41.6666666667%}.v-application--is-rtl .offset-lg-5{margin-right:41.6666666667%}.v-application--is-ltr .offset-lg-6{margin-left:50%}.v-application--is-rtl .offset-lg-6{margin-right:50%}.v-application--is-ltr .offset-lg-7{margin-left:58.3333333333%}.v-application--is-rtl .offset-lg-7{margin-right:58.3333333333%}.v-application--is-ltr .offset-lg-8{margin-left:66.6666666667%}.v-application--is-rtl .offset-lg-8{margin-right:66.6666666667%}.v-application--is-ltr .offset-lg-9{margin-left:75%}.v-application--is-rtl .offset-lg-9{margin-right:75%}.v-application--is-ltr .offset-lg-10{margin-left:83.3333333333%}.v-application--is-rtl .offset-lg-10{margin-right:83.3333333333%}.v-application--is-ltr .offset-lg-11{margin-left:91.6666666667%}.v-application--is-rtl .offset-lg-11{margin-right:91.6666666667%}}@media(min-width:1904px){.col-xl{flex-basis:0;flex-grow:1;max-width:100%}.col-xl-auto{flex:0 0 auto;width:auto;max-width:100%}.col-xl-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-xl-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-xl-3{flex:0 0 25%;max-width:25%}.col-xl-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-xl-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-xl-6{flex:0 0 50%;max-width:50%}.col-xl-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-xl-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-xl-9{flex:0 0 75%;max-width:75%}.col-xl-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-xl-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-xl-12{flex:0 0 100%;max-width:100%}.v-application--is-ltr .offset-xl-0{margin-left:0}.v-application--is-rtl .offset-xl-0{margin-right:0}.v-application--is-ltr .offset-xl-1{margin-left:8.3333333333%}.v-application--is-rtl .offset-xl-1{margin-right:8.3333333333%}.v-application--is-ltr .offset-xl-2{margin-left:16.6666666667%}.v-application--is-rtl .offset-xl-2{margin-right:16.6666666667%}.v-application--is-ltr .offset-xl-3{margin-left:25%}.v-application--is-rtl .offset-xl-3{margin-right:25%}.v-application--is-ltr .offset-xl-4{margin-left:33.3333333333%}.v-application--is-rtl .offset-xl-4{margin-right:33.3333333333%}.v-application--is-ltr .offset-xl-5{margin-left:41.6666666667%}.v-application--is-rtl .offset-xl-5{margin-right:41.6666666667%}.v-application--is-ltr .offset-xl-6{margin-left:50%}.v-application--is-rtl .offset-xl-6{margin-right:50%}.v-application--is-ltr .offset-xl-7{margin-left:58.3333333333%}.v-application--is-rtl .offset-xl-7{margin-right:58.3333333333%}.v-application--is-ltr .offset-xl-8{margin-left:66.6666666667%}.v-application--is-rtl .offset-xl-8{margin-right:66.6666666667%}.v-application--is-ltr .offset-xl-9{margin-left:75%}.v-application--is-rtl .offset-xl-9{margin-right:75%}.v-application--is-ltr .offset-xl-10{margin-left:83.3333333333%}.v-application--is-rtl .offset-xl-10{margin-right:83.3333333333%}.v-application--is-ltr .offset-xl-11{margin-left:91.6666666667%}.v-application--is-rtl .offset-xl-11{margin-right:91.6666666667%}}",""]),t.exports=r},487:function(t,l,o){var content=o(510);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(42).default)("3ebf2172",content,!0,{sourceMap:!1})},509:function(t,l,o){"use strict";o(487)},510:function(t,l,o){var r=o(41)(!1);r.push([t.i,".pt-p14{padding-top:14px}.ml-p14{margin-left:14px}.v-btn,.v-tab{text-transform:none!important}.bg-transparent{background-color:transparent!important}.position-relative{position:relative}.position-absolute{position:absolute}.footernav{width:100%!important;height:100px;background-color:hsla(0,0%,100%,.95)!important}.centerbtn .centerspan{width:50px!important;height:50px!important;max-width:50px!important;max-height:50px!important;border-radius:35%;align-items:center;justify-content:center;display:flex;background-color:#000;color:#fff!important}.footernav div.col:not(.centerbtn){padding:0!important;flex:0 0 19%;max-width:19%;overflow:hidden}.footernav .centerbtn{padding:0!important;flex:0 0 24%;max-width:24%;overflow:hidden}.footernav .v-btn{height:100%!important;padding:0!important;position:relative}.footernav p{margin-top:10px!important;margin-bottom:0!important;font-size:11px!important}.footer-fixed{position:fixed;z-index:11;bottom:0;width:100%!important}.swipeout .swipeout-right{right:-2px}.add-chat-btn{width:60px!important;height:60px!important}",""]),t.exports=r},528:function(t,l,o){"use strict";o.r(l);var r={},e=(o(509),o(59)),n=o(87),f=o.n(n),c=o(425),m=o(463),x=o(424),component=Object(e.a)(r,(function(){var t=this,l=t.$createElement,o=t._self._c||l;return o("div",{staticClass:"footer-fixed"},[o("div",{staticClass:"footernav d-flex"},[o("v-col",[o("v-btn",{attrs:{block:"",text:""}},[o("span",[o("v-icon",[t._v(" $chat ")]),t._v(" "),o("p",[t._v("Chat")])],1)])],1),t._v(" "),o("v-col",[o("v-btn",{attrs:{block:"",text:""}},[o("span",[o("v-icon",[t._v(" $slider ")]),t._v(" "),o("p",[t._v("Owlesgram")])],1)])],1),t._v(" "),o("v-col",{staticClass:"centerbtn"},[o("v-btn",{attrs:{block:"",text:""}},[o("span",{staticClass:"centerspan"},[o("v-icon",[t._v(" $centerbtn ")])],1)])],1),t._v(" "),o("v-col",[o("v-btn",{attrs:{block:"",text:""}},[o("span",[o("v-icon",[t._v(" $location ")]),t._v(" "),o("p",[t._v("Friendship")])],1)])],1),t._v(" "),o("v-col",[o("v-btn",{attrs:{block:"",text:""}},[o("span",[o("v-icon",[t._v(" $projects ")]),t._v(" "),o("p",[t._v("Project")])],1)])],1)],1)])}),[],!1,null,null,null);l.default=component.exports;f()(component,{VBtn:c.a,VCol:m.a,VIcon:x.a})}}]);