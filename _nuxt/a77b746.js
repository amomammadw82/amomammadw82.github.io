(window.webpackJsonp=window.webpackJsonp||[]).push([[52,18,23],{490:function(t,e,n){"use strict";n(7),n(14),n(17),n(18);var o=n(1),r=(n(48),n(11),n(22),n(49),n(211),n(12),n(29),n(212),n(213),n(214),n(215),n(216),n(217),n(218),n(219),n(220),n(221),n(222),n(223),n(224),n(30),n(34),n(8),n(71),n(317),n(0)),c=n(84),l=n(3);function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=["sm","md","lg","xl"],h=d.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),f=d.reduce((function(t,e){return t["offset"+Object(l.x)(e)]={type:[String,Number],default:null},t}),{}),m=d.reduce((function(t,e){return t["order"+Object(l.x)(e)]={type:[String,Number],default:null},t}),{}),y={col:Object.keys(h),offset:Object.keys(f),order:Object.keys(m)};function O(t,e,n){var o=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");o+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(o+="-".concat(n)).toLowerCase():o.toLowerCase()}}var x=new Map;e.a=r.a.extend({name:"v-col",functional:!0,props:v(v(v(v({cols:{type:[Boolean,String,Number],default:!1}},h),{},{offset:{type:[String,Number],default:null}},f),{},{order:{type:[String,Number],default:null}},m),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,r=e.children,l=(e.parent,"");for(var C in n)l+=String(n[C]);var v=x.get(l);return v||function(){var t,e;for(e in v=[],y)y[e].forEach((function(t){var o=n[t],r=O(e,t,o);r&&v.push(r)}));var r=v.some((function(t){return t.startsWith("col-")}));v.push((t={col:!r||!n.cols},Object(o.a)(t,"col-".concat(n.cols),n.cols),Object(o.a)(t,"offset-".concat(n.offset),n.offset),Object(o.a)(t,"order-".concat(n.order),n.order),Object(o.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),x.set(l,v)}(),t(n.tag,Object(c.a)(data,{class:v}),r)}})},503:function(t,e,n){var content=n(518);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("7c0beb80",content,!0,{sourceMap:!1})},505:function(t,e,n){"use strict";var o=n(0),r=n(3);e.a=o.a.extend({name:"comparable",props:{valueComparator:{type:Function,default:r.i}}})},513:function(t,e,n){"use strict";n(48),n(61);var o=n(0);e.a=o.a.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var n=this;this.clearDelay();var o=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){n.isActive={open:!0,close:!1}[t]},o)}}})},517:function(t,e,n){"use strict";n(503)},518:function(t,e,n){var o=n(24)(!1);o.push([t.i,".copy-right-text{font-size:12px;line-height:15px;opacity:.4;margin-bottom:3px!important}",""]),t.exports=o},524:function(t,e,n){"use strict";n.r(e);var o={},r=(n(517),n(40)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"copy-right-text text-center"},[t._v("\n  Powered by "),n("span",[t._v("\n   Noandish software Developers co\n    ")])])}],!1,null,null,null);e.default=component.exports},527:function(t,e,n){"use strict";var o=n(13),r=(n(34),n(11),n(20),n(513)),c=n(210),l=n(26),C=n(3),v=n(16),d=Object(l.a)(r.a,c.a);e.a=d.extend({name:"activatable",props:{activator:{default:null,validator:function(t){return["string","object"].includes(Object(o.a)(t))}},disabled:Boolean,internalActivator:Boolean,openOnHover:Boolean,openOnFocus:Boolean},data:function(){return{activatorElement:null,activatorNode:[],events:["click","mouseenter","mouseleave","focus"],listeners:{}}},watch:{activator:"resetActivator",openOnFocus:"resetActivator",openOnHover:"resetActivator"},mounted:function(){var t=Object(C.p)(this,"activator",!0);t&&["v-slot","normal"].includes(t)&&Object(v.b)('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'',this),this.addActivatorEvents()},beforeDestroy:function(){this.removeActivatorEvents()},methods:{addActivatorEvents:function(){if(this.activator&&!this.disabled&&this.getActivator()){this.listeners=this.genActivatorListeners();for(var t=0,e=Object.keys(this.listeners);t<e.length;t++){var n=e[t];this.getActivator().addEventListener(n,this.listeners[n])}}},genActivator:function(){var t=Object(C.o)(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=t,t},genActivatorAttributes:function(){return{role:"button","aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners:function(){var t=this;if(this.disabled)return{};var e={};return this.openOnHover?(e.mouseenter=function(e){t.getActivator(e),t.runDelay("open")},e.mouseleave=function(e){t.getActivator(e),t.runDelay("close")}):e.click=function(e){var n=t.getActivator(e);n&&n.focus(),e.stopPropagation(),t.isActive=!t.isActive},this.openOnFocus&&(e.focus=function(e){t.getActivator(e),e.stopPropagation(),t.isActive=!t.isActive}),e},getActivator:function(t){var e;if(this.activatorElement)return this.activatorElement;var n=null;if(this.activator){var o=this.internalActivator?this.$el:document;n="string"==typeof this.activator?o.querySelector(this.activator):this.activator.$el?this.activator.$el:this.activator}else if(1===this.activatorNode.length||this.activatorNode.length&&!t){var r=this.activatorNode[0].componentInstance;n=r&&r.$options.mixins&&r.$options.mixins.some((function(t){return t.options&&["activatable","menuable"].includes(t.options.name)}))?r.getActivator():this.activatorNode[0].elm}else t&&(n=t.currentTarget||t.target);return this.activatorElement=(null==(e=n)?void 0:e.nodeType)===Node.ELEMENT_NODE?n:null,this.activatorElement},getContentSlot:function(){return Object(C.o)(this,"default",this.getValueProxy(),!0)},getValueProxy:function(){var t=this;return{get value(){return t.isActive},set value(e){t.isActive=e}}},removeActivatorEvents:function(){if(this.activator&&this.activatorElement){for(var t=0,e=Object.keys(this.listeners);t<e.length;t++){var n=e[t];this.activatorElement.removeEventListener(n,this.listeners[n])}this.listeners={}}},resetActivator:function(){this.removeActivatorEvents(),this.activatorElement=null,this.getActivator(),this.addActivatorEvents()}}})},528:function(t,e,n){"use strict";var o=n(93),r=n(26);function c(t){for(var e=[],n=0;n<t.length;n++){var r=t[n];r.isActive&&r.isDependent?e.push(r):e.push.apply(e,Object(o.a)(c(r.$children)))}return e}e.a=Object(r.a)().extend({name:"dependent",data:function(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive:function(t){if(!t)for(var e=this.getOpenDependents(),n=0;n<e.length;n++)e[n].isActive=!1}},methods:{getOpenDependents:function(){return this.closeDependents?c(this.$children):[]},getOpenDependentElements:function(){for(var t=[],e=this.getOpenDependents(),n=0;n<e.length;n++)t.push.apply(t,Object(o.a)(e[n].getClickableDependentElements()));return t},getClickableDependentElements:function(){var t=[this.$el];return this.$refs.content&&t.push(this.$refs.content),this.overlay&&t.push(this.overlay.$el),t.push.apply(t,Object(o.a)(this.getOpenDependentElements())),t}}})},529:function(t,e,n){"use strict";var o=n(13),r=(n(61),n(540));function c(){return!0}function l(t,e,n){if(!t||!1===C(t,n))return!1;var c=Object(r.a)(e);if(c instanceof ShadowRoot&&c.host===t.target)return!1;var l=("object"===Object(o.a)(n.value)&&n.value.include||function(){return[]})();return l.push(e),!l.some((function(e){return e.contains(t.target)}))}function C(t,e){return("object"===Object(o.a)(e.value)&&e.value.closeConditional||c)(t)}function v(t,e){var n=Object(r.a)(t);e(document.body),n instanceof ShadowRoot&&e(n)}var d={inserted:function(t,e){var n=function(n){return function(t,e,n){var o="function"==typeof n.value?n.value:n.value.handler;e._clickOutside.lastMousedownWasOutside&&l(t,e,n)&&setTimeout((function(){C(t,n)&&o&&o(t)}),0)}(n,t,e)},o=function(n){t._clickOutside.lastMousedownWasOutside=l(n,t,e)};v(t,(function(t){t.addEventListener("click",n,!0),t.addEventListener("mousedown",o,!0)})),t._clickOutside={lastMousedownWasOutside:!0,onClick:n,onMousedown:o}},unbind:function(t){t._clickOutside&&(v(t,(function(e){e&&t._clickOutside&&(e.removeEventListener("click",t._clickOutside.onClick,!0),e.removeEventListener("mousedown",t._clickOutside.onMousedown,!0))})),delete t._clickOutside)}};e.a=d},538:function(t,e,n){"use strict";n.r(e);var o={props:{height:{type:String,required:!1,default:"100"}}},r=n(40),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{height:t.height,viewBox:"0 0 194 166",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M193.774 113.647C192.991 106.473 189.581 100.082 185.83 96.8744C188.255 96.3313 190.566 93.6789 191.235 93.0853C186.219 92.6909 181.318 91.381 176.774 89.2204C179.631 88.8906 182.424 88.1372 185.059 86.9849C183.076 84.623 182.306 82.6653 180.209 81.1623C184.074 81.5286 188.368 84.6861 190.25 86.7449C188.596 81.857 184.731 77.79 179.994 77.0701C180.98 75.024 185.173 75.125 186.827 75.6807C184.074 71.1591 180.866 67.85 177.456 66.5238C178.565 65.4601 179.449 64.1839 180.054 62.7712C180.66 61.3586 180.974 59.8384 180.98 58.3015C177.456 61.8885 171.936 64.1619 168.349 64.1745C171.115 62.0021 173.982 59.5645 174.968 58.794C171.793 59.2412 168.681 60.0593 165.697 61.2317C168.577 58.1373 169.486 56.1796 169.675 55.4723C173.006 54.7639 176.449 54.7639 179.78 55.4723C178.882 54.4574 177.745 53.6844 176.471 53.2241C177.669 50.9344 178.17 48.3435 177.91 45.7722C175.814 48.5382 173.932 50.8243 171.507 51.62C172.293 50.1211 172.725 48.4619 172.77 46.77C170.606 47.2997 168.367 47.4493 166.152 47.2121C167.137 44.5597 171.204 42.9051 176.193 42.1599C178.832 39.5076 178.39 34.9859 179.717 31.7905C176.528 31.9724 173.445 33.0013 170.787 34.7712C179.944 24.2881 184.579 10.2684 181.813 4.20589C180.159 9.82637 168.463 18.3266 159.306 22.4062C163.386 22.0778 168.791 19.8801 170.117 19.4254C161.958 27.0036 147.383 32.3083 139.337 37.512C142.647 32.5609 149.757 27.7109 152.65 26.271C147.825 27.2688 139.224 32.6998 136.357 36.4889C138.668 26.8268 149.821 21.863 155.668 19.7664C161.516 17.6698 168.64 13.1229 171.368 8.92962C161.554 15.7752 154.683 17.6572 146.36 20.9663C138.037 24.2754 132.744 31.8031 131.646 36.4637C131.078 39.3672 129.611 42.0185 127.452 44.0418C128.109 39.1666 128.336 35.2891 129.663 32.3715C127.137 34.2028 123.815 39.6086 123.145 40.7706C123.474 34.5312 127.137 29.7949 132.757 26.7004C128.336 26.5868 122.261 31.6768 121.162 35.4154C120.064 39.1539 117.98 43.9029 115.984 45.7848C116.641 41.9957 117.247 37.6257 117.626 35.4154C115.028 38.9254 113.215 42.9527 112.309 47.2247C111.45 36.2995 115.428 32.0683 118.46 30.338C121.022 28.7465 123.183 26.5855 124.775 24.0228C123.099 24.8778 121.523 25.9156 120.076 27.1173C118.723 26.2219 117.525 25.1128 116.527 23.8334C116.6 26.053 116.417 28.2736 115.984 30.4516C115.464 29.8698 114.884 29.3448 114.254 28.8855C111.336 33.2935 108.57 35.2006 108.254 38.2572C107.257 33.6218 109.959 28.2161 112.915 25.6269C111.908 25.8691 110.936 26.2383 110.023 26.7257C108.911 24.5154 107.496 21.9767 107.496 21.9767C107.248 24.055 107.433 26.1622 108.04 28.1656C106.664 30.165 105.821 32.4818 105.589 34.8975C104.611 33.1793 103.297 31.6758 101.724 30.4769C101.621 28.0413 102.401 25.6504 103.922 23.745C102.25 24.6144 100.878 25.965 99.9814 27.6225C99.0973 26.3594 97.8848 24.8564 97.8848 24.8564C98.137 27.7887 97.5639 30.733 96.2302 33.3566C95.8837 32.0779 95.3609 30.8536 94.6767 29.7191C94.127 31.1042 93.3454 32.3855 92.3654 33.5082C92.4751 34.8639 92.4369 36.2276 92.2517 37.5751C90.0222 34.2555 86.978 31.5636 83.4105 29.757C83.7594 27.7822 84.5926 25.9249 85.8355 24.3512C84.3217 24.8012 82.9931 25.7269 82.0464 26.9909C80.1771 24.5659 77.5627 23.6818 77.2216 24.0228C80.1392 26.9909 81.8822 31.8536 81.1876 35.4911C80.3217 33.2457 79.1669 31.1228 77.7521 29.176C77.3839 31.6121 77.552 34.0993 78.2447 36.4637C75.4787 36.1732 74.0388 29.6686 74.4556 25.0964C73.8324 25.5413 73.3132 26.1161 72.9338 26.7812C72.5543 27.4463 72.3238 28.1858 72.2579 28.9486C70.2436 27.9237 68.0134 27.3953 65.7533 27.4077C71.7022 29.618 75.3145 35.9206 75.6302 42.9178C72.2579 36.4637 69.6056 34.4681 67.1806 33.4829C68.8221 36.4022 69.9057 39.6017 70.376 42.9178C62.7978 37.6762 62.4316 32.3715 62.3179 27.193C54.3734 22.444 40.5306 21.5599 25.2227 10.7736C37.6004 23.9092 54.6639 24.2375 60.7517 33.5082C56.1004 30.7569 50.9992 28.8498 45.6838 27.8751C51.8347 30.8558 58.9456 35.9837 60.7517 39.5328C46.2395 30.338 36.691 32.2199 25.248 21.181C27.9192 22.2104 30.7374 22.8074 33.5966 22.9492C23.9903 17.3001 15.8781 9.4305 9.94005 0C11.4809 12.3524 16.2552 27.1425 19.4254 30.679C16.8993 31.2221 14.8406 31.4494 13.7165 31.6642C15.1705 36.0148 17.7039 39.9258 21.08 43.0314C25.1596 43.6377 27.7361 44.6481 28.6581 46.8205C24.6796 47.2626 22.4819 47.2626 22.4819 47.2626C23.1734 49.0522 23.4831 50.9667 23.3913 52.8831C20.7803 51.2378 18.4481 49.1871 16.4825 46.8079C16.5808 49.0681 17.2173 51.2721 18.3392 53.2367C17.516 53.0571 16.6618 53.0781 15.8485 53.298C15.0351 53.5178 14.2866 53.93 13.666 54.4997C20.1453 54.6639 25.109 54.9165 29.3023 60.4233C25.9404 59.1745 22.4687 58.2442 18.9328 57.6447C21.5182 59.2059 23.5601 61.5256 24.7806 64.2882C20.0822 62.9873 16.0026 58.5919 12.024 58.3141C14.007 60.8401 14.8911 62.6715 17.0762 64.8818C9.80111 65.2102 8.5886 71.7022 8.23495 73.3694C11.3167 72.8263 14.2975 73.8115 15.0679 75.0366C8.44967 76.2996 3.92802 81.8317 2.43765 85.4945C5.86046 83.1958 8.7528 81.4654 10.8242 81.1749C8.95488 82.64 6.63091 86.8333 6.0878 87.9448C10.3821 86.6186 14.5501 87.8058 15.3458 90.774C10.2937 88.9047 2.42502 92.037 0 94.563C2.03729 94.1029 4.15156 94.1029 6.18885 94.563C2.76603 96.6218 0.44206 101.03 0 105.173C4.19326 99.6025 7.84342 97.8722 10.3821 97.7459C6.67116 100.625 3.96562 104.604 2.65236 109.113C7.06034 104.945 9.27064 104.187 11.1526 103.846C5.63311 109.808 1.55353 119.508 1.04831 122.489C3.70068 119.407 5.1279 117.639 6.10043 116.754C5.67627 120.275 5.78698 123.839 6.42882 127.326C8.23495 113.104 13.8933 105.678 23.7323 103.404C19.7538 106.638 15.7247 109.884 13.7165 115.049C17.0037 112.306 21.003 110.554 25.248 109.997C17.0004 114.418 10.9252 124.573 9.05592 131.961C12.4787 126.77 14.8532 124.459 16.4825 123.347C16.0878 126.51 16.1943 129.716 16.7983 132.845C19.9811 119.382 26.7131 112.41 33.2177 114.456C29.5802 115.719 25.3869 120.152 24.1744 125.002C28.3676 120.152 31.2347 117.727 35.7564 118.055C27.2562 124.901 20.7516 138.138 19.097 144.983C23.8334 138.807 25.4122 137.696 26.6752 136.597C26.1495 141.011 26.5802 145.487 27.9382 149.72C29.9085 133.73 32.3083 127.061 40.4801 123.827C38.0677 127.212 35.2006 137.367 34.165 142.331C39.8991 130.635 44.2692 126.619 50.5843 123.827C47.2752 134.273 35.9079 144.314 34.165 153.483C38.9013 148.065 45.0649 142.558 47.3384 141.775C46.189 147.522 49.1698 156.452 52.1505 160.645C49.9402 146.966 50.1297 136.268 57.5942 130.749C56.1753 136.559 55.7145 142.561 56.2301 148.52C58.2004 141.514 61.7181 135.04 66.5238 129.574C67.0416 139.527 58.7309 148.684 59.2487 160.594C60.8654 156.3 63.9598 153.206 64.945 151.109C66.7132 156.401 69.9087 159.281 72.4474 162.691C70.0224 151.324 65.627 137.102 75.7186 132.795C73.5589 136.875 73.4452 143.821 74.3293 148.242C75.8702 140.664 78.9646 133.338 82.1601 131.683C82.7158 143.164 75.8449 150.338 77.6384 162.691C78.9015 156.957 81.617 152.208 82.9305 150.894C84.1936 156.843 87.5659 160.998 92.4285 165.23C87.7932 155.416 85.0272 145.589 88.5636 137.531C92.4285 140.853 94.2599 153.433 94.8788 156.843C96.2794 149.457 96.6745 141.916 96.0534 134.424C101.788 141.838 101.674 153.37 97.5438 166C102.899 161.036 105.324 149.783 105.766 147.8C109.959 152.208 113.711 159.609 116.792 163.133C114.153 153.029 111.387 141.283 114.367 133.452C117.348 138.971 118.156 145.918 118.51 148.355C119.678 142.398 120.103 136.318 119.773 130.256C125.053 135.763 124.358 151.336 123.259 161.832C126.568 157.866 127.339 149.922 127.566 146.941C130.547 150.919 135.953 154.001 138.592 158.523C135.612 148.823 124.257 132.934 123.587 124.977C129.991 129.069 135.068 137.607 136.218 140.133C135.701 135.249 134.515 130.46 132.694 125.899C139.969 131.09 143.72 144.44 143.834 156.906C146.587 153.382 146.928 143.998 146.587 141.346C152.22 143.556 156.628 148.191 158.283 149.517C154.203 138.378 140.853 133.957 137.759 124.358C145.337 128.223 153.875 133.199 156.628 136.054C152.839 128.993 147.37 122.628 146.044 120.354C156.628 122.59 162.59 133.187 164.8 144.112C166.104 140.51 166.667 136.682 166.455 132.858C169.467 134.084 172.261 135.79 174.728 137.91C170.938 126.101 159.571 128.084 156.527 118.712C162.842 120.581 168.88 124.825 170.534 126.732C166.669 119.483 160.607 114.683 158.839 111.677C171.305 114.62 176.521 126.316 179.148 135.144C179.805 132.618 179.919 127.313 179.148 125.33C181.914 126.848 184.945 127.822 188.078 128.198C180.904 121.794 176.167 114.165 167.869 109.985C170.761 109.865 173.643 110.399 176.3 111.547C178.957 112.695 181.32 114.428 183.215 116.616C180.891 111.98 173.389 106.031 170.585 103.985C181.952 105.526 187.004 114.241 190.667 123.07C190.124 116.565 189.126 110.06 187.8 107.572C189.581 108.027 192.549 111.222 193.774 113.647ZM178.87 84.2946C172.366 83.6378 168.501 87.7174 157.689 83.0316C161.883 81.4781 168.716 82.1727 170.597 82.2611C166.516 80.2333 162.171 78.7837 157.689 77.9542C165.735 76.3502 175.296 77.2469 178.87 84.2946ZM175.89 70.9823C169.574 75.8071 161.213 74.0135 157.02 73.3694C160.412 72.2676 163.939 71.6386 167.503 71.5001C163.979 70.0603 160.771 68.2668 159.015 67.711C165.305 65.5134 172.808 68.2668 175.89 70.9823ZM167.503 49.5108C166.96 55.8259 160.114 58.352 157.02 61.2191C159.344 58.2383 161.44 55.4849 162.261 53.2114C160.556 53.8177 157.689 55.1186 157.02 55.4596C158.674 51.3043 163.234 48.1593 167.503 49.536V49.5108ZM141.093 56.129C144.971 48.9677 161.15 37.6509 164.068 35.3901C160.885 44.7491 146.208 51.9105 141.093 56.1543V56.129ZM123.499 73.3694C125.621 78.0679 129.587 80.8339 134.323 79.3056C139.792 77.5374 140.499 70.035 136.268 66.5364C141.32 68.5194 142.002 75.8955 140.676 78.3963C143.594 75.946 143.771 69.5551 140.942 65.4249C147.396 68.873 147.876 83.8526 136.268 86.5554C125.659 89.0815 119.786 80.0256 120.051 75.5671C121.642 78.611 124.421 81.7812 127.629 82.6653C124.333 80.1898 122.88 76.7922 123.499 73.3694ZM139.034 60.1329C145.109 57.7078 148.633 60.1329 148.633 64.3514C147.535 63.0504 143.783 60.8023 139.034 60.1329ZM150.844 78.3963C152.574 84.383 147.977 91.3297 140.828 90.2561C146.65 88.0584 149.404 82.9811 150.844 78.3963ZM123.941 43.0314C123.499 48.513 119.255 55.1439 117.045 57.4426C117.133 55.8512 117.31 53.1104 117.399 51.8726C113.61 57.0889 110.326 61.8632 104.579 65.4755C108.557 55.1818 119.382 45.0144 123.941 42.9809V43.0314ZM109.783 104.503C111.968 106.802 113.243 110.161 111.475 114.847C109.335 113.871 107.579 112.215 106.48 110.135C105.381 108.056 105.001 105.671 105.4 103.354C106.751 104.68 107.673 106.095 109.783 109.896C110.135 108.116 110.135 106.284 109.783 104.503ZM103.909 85.4945C106.376 86.2843 108.754 87.3255 111.008 88.6015C110.66 87.4186 110.136 86.2947 109.454 85.2671C111.753 85.785 114.658 86.0629 115.984 92.2391C110.692 92.5801 105.387 89.713 103.909 85.4945ZM108.557 40.7706C110.237 47.6667 109.353 52.3526 107.496 55.0934C107.37 53.5167 107.074 51.9584 106.612 50.4454C104.844 54.6513 103.606 58.0236 102.015 60.1329C101.219 52.0873 101.573 46.7826 108.557 40.7706ZM100.158 32.3715C102.452 34.8663 103.986 37.9643 104.579 41.3011C103.632 43.2288 102.507 45.064 101.219 46.7826C100.998 43.9009 100.342 41.0693 99.2742 38.3835C98.4384 41.1079 97.9795 43.9338 97.9101 46.7826C97.0269 45.3073 95.6341 44.2065 93.9947 43.6882C94.7651 37.4994 97.9101 33.4324 100.158 32.3715ZM96.7102 70.376L93.9694 68.7846C94.563 66.4859 97.8848 64.1114 100.903 63.5809C101.522 67.2816 96.7102 70.376 96.7102 70.376ZM93.9694 46.7826C98.9205 49.7002 98.4784 58.1499 96.4955 62.52C95.0576 59.0714 94.3771 55.3543 94.4999 51.62C92.7317 54.7145 92.479 60.3602 93.3505 64.2503C87.0733 60.9286 88.3995 52.7062 93.9694 46.7826ZM93.9694 80.1898C90.5519 79.653 87.3721 78.1093 84.8365 75.756C82.3009 73.4026 80.5247 70.3465 79.7351 66.9785C84.1557 65.7786 90.8118 66.8395 93.54 72.4095C90.7712 70.9102 87.7311 69.9784 84.5977 69.6687C88.5614 72.3264 91.7859 75.9464 93.9694 80.1898ZM84.5093 32.8135C88.7531 34.5818 90.8245 38.8255 90.5213 43.423C88.4879 40.0633 86.6312 39.2676 85.9239 38.2951C86.1892 41.2127 86.808 45.1912 86.9849 47.2247C83.0947 42.7788 81.4907 37.7267 84.5093 32.8135ZM86.7449 56.5079C84.9786 53.0586 82.3725 50.1094 79.1667 47.932C81.1876 50.5843 82.9558 58.1878 86.7449 63.5809C78.1942 62.6968 77.1838 51.2032 73.6473 44.1303C75.3452 43.973 77.0572 44.1795 78.6691 44.7359C80.281 45.2923 81.7558 46.186 82.9952 47.3572C84.2346 48.5285 85.21 49.9504 85.8566 51.5283C86.5032 53.1062 86.806 54.8038 86.7449 56.5079ZM76.1228 57.771C70.8181 52.6431 65.1597 48.2225 62.2295 46.8079C67.927 53.2682 72.9622 60.2837 77.2595 67.7489C65.6776 62.1916 52.2389 41.4147 44.2818 37.5246C53.704 39.5707 66.3343 40.1517 76.1228 57.7457V57.771ZM57.6447 90.774C47.2121 93.54 41.0737 86.025 41.3769 80.1898C45.0902 87.6164 51.4558 89.8267 57.6447 90.774ZM40.4927 70.376C40.2275 61.6359 46.9468 56.8616 53.123 58.7183C47.9194 60.1328 42.3368 64.6419 40.4927 70.376ZM59.3245 96.0408C58.2636 97.2154 57.1142 99.0215 55.346 101.497C56.7606 100.701 61.0928 99.2868 65.7786 97.0765C65.3365 101.143 56.9374 106.183 50.0412 105.741C49.4224 100.259 54.3734 96.0155 59.3245 96.0408ZM54.9671 86.5554C43.3598 83.8526 43.8271 68.873 50.2812 65.4249C47.452 69.4919 47.6289 75.946 50.5465 78.3963C49.2203 75.8702 49.8392 68.5194 54.9671 66.5364C50.7233 70.035 51.4306 77.5374 56.9121 79.3056C61.6485 80.8339 66.107 78.0426 68.2794 73.3694C68.8983 76.7922 67.0164 80.1898 63.5936 82.6653C67.0689 81.5846 69.9865 79.1926 71.7275 75.9965C71.9674 80.455 65.6018 89.031 54.9671 86.5554ZM74.2662 90.774C74.1777 91.7465 73.6473 92.5422 72.5863 94.6641C73.7357 93.6916 77.449 92.719 81.2381 91.7465C79.9751 94.9419 75.4029 98.4027 70.1866 98.1374C69.0372 95.0683 71.7022 90.8876 74.2662 90.774ZM39.1666 44.0418C40.758 46.1764 42.7914 49.7886 45.709 53.2367C40.8464 53.5019 38.3708 47.2247 39.1666 44.0418ZM25.8163 34.0513C30.2369 33.8745 35.2764 36.451 36.5142 39.1034C33.0661 38.6108 29.9717 37.9035 29.9717 37.9035C30.4146 39.9799 30.9755 42.0293 31.6515 44.0418C27.0541 42.362 25.8163 35.7311 25.8163 34.0513ZM26.7004 48.6393C29.6233 48.5965 32.493 49.4222 34.9461 51.0119C37.3992 52.6016 39.3252 54.8836 40.4801 57.5689C38.2698 56.6848 35.0996 52.7946 31.1716 52.0873C31.9168 53.2367 35.6301 57.0384 36.5142 60.4865C34.0387 57.6573 27.1804 54.0324 26.7004 48.6393ZM35.2764 67.7237C32.3426 68.2394 29.5447 69.3482 27.0541 70.9823C29.2644 70.5276 34.6323 70.7297 36.7794 73.3694C34.5691 72.9021 22.1283 73.9125 18.3392 70.9823C19.6022 69.113 29.5296 63.1389 35.2764 67.7237ZM13.7165 84.2567C16.8867 78.5099 27.2309 75.946 35.7185 77.5374C30.5022 78.6868 24.667 80.3666 23.3408 81.3265C28.7339 81.9454 34.7081 81.6801 36.7794 82.4759C30.0601 87.0859 18.7434 84.6861 13.7165 84.2567ZM14.5501 100.436C17.0762 95.2198 28.9739 85.0777 38.8129 86.9849C35.2106 88.4175 31.911 90.5172 29.0876 93.1737C32.182 92.1128 35.8953 91.6707 41.3642 91.3171C32.6241 98.4279 22.1283 97.1649 14.5501 100.436ZM29.9338 109.896C29.0497 103.177 36.0342 97.6954 40.9853 98.2258C39.3055 99.3752 37.9793 101.055 35.6806 104.541C37.1836 103.657 41.9957 101.005 47.4394 97.7333C46.9468 101.585 40.4927 109.012 29.8833 109.896H29.9338ZM39.5328 120.24C38.5603 114.228 42.2231 108.04 46.7321 107.421C46.5553 109.101 45.2417 110.225 43.8271 114.999C47.0984 111.993 52.3021 109.543 59.9939 107.421C57.291 110.692 48.2351 118.207 39.4823 120.24H39.5328ZM59.5771 125.671C56.8363 115.567 64.6292 105.918 70.6918 103.354C69.7192 105.387 65.0081 111.311 63.9472 117.058C64.7429 115.795 69.8077 112.372 73.7862 107.421C74.0893 112.245 66.3343 122.577 59.5266 125.671H59.5771ZM76.2996 128.993C72.94 123.941 74.9356 117.942 77.7647 112.814C78.472 113.698 78.2952 116.439 79.0278 121.301C79.634 119.268 82.5516 115.997 84.0799 113.61C84.6988 118.422 81.5538 125.28 76.2491 128.993H76.2996ZM81.2381 110.982C76.4765 106.562 77.9795 100.196 81.6801 98.6931C81.3392 101.056 81.4291 103.461 81.9454 105.791C82.0338 104.528 83.0063 102.76 84.4714 100.461C85.1282 102.558 84.9514 108.456 81.2381 110.982ZM78.9646 88.0584C78.9646 84.2693 84.1683 80.6318 86.8712 82.9305C85.4133 83.5844 84.2138 84.7039 83.461 86.1134C85.259 85.2813 87.3008 85.1419 89.1952 85.7218C87.8058 87.0859 83.36 89.7383 78.9646 88.0584ZM92.037 134.374C86.8207 131.848 86.1134 123.954 89.2962 120.24C89.5128 123.136 90.376 125.945 91.8223 128.463C92.7386 126.886 93.5081 125.229 94.121 123.512C94.8574 125.331 95.0513 127.325 94.6792 129.253C94.3072 131.18 93.3851 132.959 92.0244 134.374H92.037ZM96.546 115.908C95.4851 115.908 92.5675 108.57 91.0645 100.967C89.5615 93.3632 92.3275 89.8393 94.7777 89.2078C95.3461 89.0689 97.4301 89.031 97.4807 91.9486C97.5312 94.8662 97.5943 115.908 96.5334 115.908H96.546ZM97.9101 76.0344C100.626 69.3151 109.997 67.2816 112.915 63.5809C113.269 71.7022 109.025 79.1288 102.04 78.3331C104.693 75.6807 105.4 74.7082 105.93 72.4095C103.383 73.879 100.696 75.0932 97.9101 76.0344ZM108.583 143.48C105.739 141.97 103.463 139.577 102.096 136.661C100.729 133.746 100.346 130.465 101.004 127.313C103.236 130.45 105.085 133.842 106.511 137.418C106.592 132.23 105.95 127.057 104.604 122.047C113.066 130.042 108.646 138.618 108.557 143.48H108.583ZM116.552 127.781C113.42 127.288 109.669 123.145 109.202 119.268C110.806 120.165 111.488 120.417 114.254 122.009C114.453 120.364 114.453 118.702 114.254 117.058C117.121 118.156 116.679 122.514 116.527 127.781H116.552ZM117.424 105.21C114.064 103.796 110.528 101.055 108.81 94.6009C111.069 96.1072 113.131 97.8892 114.948 99.9057C114.642 98.1746 114.062 96.5034 113.231 94.9546C116.957 95.5735 118.194 99.7288 117.399 105.21H117.424ZM116.628 69.2267C121.981 65.7473 126.193 60.7709 128.741 54.9165C125.334 58.7185 120.92 61.4774 116.009 62.8736C124.143 55.7122 127.377 41.6547 151.45 36.4763C138.441 45.7217 130.926 65.6902 116.603 69.2267H116.628ZM118.485 109.101C121.314 108.747 125.911 112.637 126.972 114.355C126.364 111.042 125.002 107.914 122.994 105.21C129.183 106.095 131.128 112.991 131.039 120.24C125.798 116.616 120.758 115.555 118.46 109.101H118.485ZM122.274 94.6009C126.063 97.6196 129.852 97.8722 136.066 100.436C134.11 97.3329 131.21 94.9382 127.793 93.6031C134.311 93.9568 137.898 95.2198 142.356 103.834C133.515 105.728 125.798 100.411 122.261 94.563L122.274 94.6009ZM151.917 116.856C147.585 116.59 136.685 112.372 135.005 107.421C137.834 109.454 142.798 109.101 148.646 113.205C148.204 112.283 145.779 108.835 144.364 105.766C145.636 105.895 146.864 106.301 147.962 106.955C149.06 107.609 150.001 108.496 150.72 109.553C151.439 110.61 151.917 111.811 152.122 113.073C152.326 114.334 152.252 115.626 151.905 116.856H151.917ZM164.649 108.355C154.153 109.176 147.433 102.95 145.008 96.6597C147.762 98.0995 152.397 101.51 159.243 104.238C158.472 102.76 156.489 101.194 154.279 98.6805C164.851 100.676 164.964 104.377 164.636 108.355H164.649ZM152.587 91.3297C156.085 91.9486 159.356 92.138 166.48 93.1232C164.117 91.5358 161.667 90.0811 159.142 88.7657C163.891 88.9299 171.178 89.4857 175.144 98.6679C165.305 99.1352 158.018 96.8744 152.574 91.3297H152.587ZM178.883 101.737C179.288 99.3489 179.097 96.8975 178.327 94.6009C180.651 95.7377 182.116 97.4301 183.96 100.916C182.306 101.406 180.595 101.682 178.87 101.737H178.883Z",fill:t.$vuetify.theme.dark?"#f5f5f5":"#101720"}})])}),[],!1,null,null,null);e.default=component.exports},541:function(t,e,n){"use strict";var o=n(1),r=n(13),c=(n(8),n(231)),l=n(3),C=n(26),v=n(16);e.a=Object(C.a)(c.a).extend({name:"detachable",props:{attach:{default:!1,validator:function(t){var e=Object(r.a)(t);return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}},contentClass:{type:String,default:""}},data:function(){return{activatorNode:null,hasDetached:!1}},watch:{attach:function(){this.hasDetached=!1,this.initDetach()},hasContent:function(){this.$nextTick(this.initDetach)}},beforeMount:function(){var t=this;this.$nextTick((function(){t.activatorNode&&(Array.isArray(t.activatorNode)?t.activatorNode:[t.activatorNode]).forEach((function(e){if(e.elm&&t.$el.parentNode){var n=t.$el===t.$el.parentNode.firstChild?t.$el:t.$el.nextSibling;t.$el.parentNode.insertBefore(e.elm,n)}}))}))},mounted:function(){this.hasContent&&this.initDetach()},deactivated:function(){this.isActive=!1},beforeDestroy:function(){try{if(this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content),this.activatorNode)(Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode]).forEach((function(t){t.elm&&t.elm.parentNode&&t.elm.parentNode.removeChild(t.elm)}))}catch(t){console.log(t)}},methods:{getScopeIdAttrs:function(){var t=Object(l.m)(this.$vnode,"context.$options._scopeId");return t&&Object(o.a)({},t,"")},initDetach:function(){var t;this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach||((t=!1===this.attach?document.querySelector("[data-app]"):"string"==typeof this.attach?document.querySelector(this.attach):this.attach)?(t.appendChild(this.$refs.content),this.hasDetached=!0):Object(v.c)("Unable to locate target ".concat(this.attach||"[data-app]"),this))}}})},542:function(t,e,n){"use strict";n(61);var o=n(0);e.a=o.a.extend({name:"returnable",props:{returnValue:null},data:function(){return{isActive:!1,originalValue:null}},watch:{isActive:function(t){t?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save:function(t){var e=this;this.originalValue=t,setTimeout((function(){e.isActive=!1}))}}})},543:function(t,e,n){"use strict";var o=n(93),r=(n(21),n(34),n(37),n(0)),c=n(3);e.a=r.a.extend().extend({name:"stackable",data:function(){return{stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex:function(){if("undefined"==typeof window)return 0;var content=this.stackElement||this.$refs.content,t=this.isActive?this.getMaxZIndex(this.stackExclude||[content])+2:Object(c.q)(content);return null==t?t:parseInt(t)}},methods:{getMaxZIndex:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],base=this.$el,e=[this.stackMinZIndex,Object(c.q)(base)],n=[].concat(Object(o.a)(document.getElementsByClassName("v-menu__content--active")),Object(o.a)(document.getElementsByClassName("v-dialog__content--active"))),r=0;r<n.length;r++)t.includes(n[r])||e.push(Object(c.q)(n[r]));return Math.max.apply(Math,e)}}})},576:function(t,e,n){"use strict";n(66);var o=n(57);e.a=o.a.extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark:function(){return this.root?this.rootIsDark:o.a.options.computed.isDark.call(this)}},render:function(){return this.$slots.default&&this.$slots.default.find((function(t){return!t.isComment&&" "!==t.text}))}})},580:function(t,e,n){var content=n(643);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("72975e03",content,!0,{sourceMap:!1})},642:function(t,e,n){"use strict";n(580)},643:function(t,e,n){var o=n(24)(!1);o.push([t.i,".confirm-number{line-height:23px}.ex-app-title{display:inline-block!important}.ex-phone-input{max-height:86px}",""]),t.exports=o},718:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{mobileLogin:!0}}},r=(n(642),n(40)),c=n(64),l=n.n(c),C=n(197),v=n(490),d=n(499),h=n(159),f=n(473),m=n(706),y=n(603),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("v-container",{staticClass:"d-flex flex-column px-6 page"},[n("v-row",{staticClass:"mt-5 mx-0"},[n("v-col",{staticClass:"px-0",attrs:{cols:"7"}},[n("owllogo",{staticClass:"login-logo",attrs:{height:"89.88"}}),t._v(" "),n("h1",{staticClass:"enp-b f21 ma-0 ex-app-title"},[t._v("\n          OWLEGERAM "),n("span",{staticClass:"f14"},[t._v("App")])]),t._v(" "),n("p",{staticClass:"enp-l f12 ma-0"},[t._v("Messanger & Service")])],1),t._v(" "),n("v-col",{staticClass:"px-0",attrs:{cols:"5"}},[n("v-select",{staticClass:"rounded-pill float-right mt-4 ml-8 country-select",attrs:{outlined:"",dense:"",label:"ENG"}})],1)],1),t._v(" "),t.mobileLogin?n("p",{staticClass:"f19 confirm-number mt-16 mb-10",attrs:{dir:"ltr"}},[t._v("\n      Please confirm your country code and enter your phone number\n    ")]):n("p",{staticClass:"f19 confirm-number mt-16 mb-10",attrs:{dir:"ltr"}},[t._v("\n      Please Enter your Email or Login with Google Account\n    ")]),t._v(" "),n("v-text-field",{staticClass:"rounded-12 label-primary ex-phone-input",attrs:{label:t.mobileLogin?"Phone Number":"Email Account",placeholder:t.mobileLogin?"":"Enter Email account ex, Gmail , yahoo",color:"#52595B",outlined:""}}),t._v(" "),n("p",{staticClass:"text-center mb-7 f14"},[t._v("\n      "+t._s(t.mobileLogin?"Carrier SMS charge may apply":"‎‎‎")+"\n    ")]),t._v(" "),n("nuxt-link",{attrs:{to:"/PhoneVerify"}},[n("v-btn",{staticClass:"mb-7 f20 btn-large primary-shadow rounded-12 font-weight-bold",attrs:{color:"primary reverse--text","x-large":"",block:""}},[t._v("\n        Next\n      ")])],1),t._v(" "),n("p",{staticClass:"f14 my-2 text-center"},[t._v("Or")]),t._v(" "),n("v-row",{staticClass:"mb-auto",attrs:{align:"center",justify:"space-around"}},[n("v-col",{attrs:{cols:"6"}},[n("v-btn",{staticClass:"\n            f12\n            px-1\n            rounded-12\n            secondary-shadow secondary-border\n            btn-large\n          ",attrs:{block:"","x-large":""}},[n("v-icon",{staticClass:"mr-2"},[t._v("mdi-google")]),t._v("\n          Login with Google\n        ")],1)],1),t._v(" "),n("v-col",{attrs:{cols:"6"}},[t.mobileLogin?n("v-btn",{staticClass:"\n            f12\n            px-1\n            rounded-12\n            secondary-shadow secondary-border\n            btn-large\n          ",attrs:{block:"","x-large":""},on:{click:function(e){t.mobileLogin=!1}}},[n("v-icon",{staticClass:"mr-2"},[t._v("mdi-email")]),t._v("\n          Login with Email\n        ")],1):n("v-btn",{staticClass:"\n            f12\n            px-1\n            rounded-12\n            secondary-shadow secondary-border\n            btn-large\n          ",attrs:{block:"","x-large":""},on:{click:function(e){t.mobileLogin=!0}}},[n("v-icon",{staticClass:"mr-2"},[t._v("mdi-phone")]),t._v("\n          Login with Phone\n        ")],1)],1)],1),t._v(" "),n("CopyRight")],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{Owllogo:n(538).default,CopyRight:n(524).default}),l()(component,{VBtn:C.a,VCol:v.a,VContainer:d.a,VIcon:h.a,VRow:f.a,VSelect:m.a,VTextField:y.a})}}]);