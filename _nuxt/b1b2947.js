(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{486:function(t,e,n){"use strict";var o=n(5),r=n(495),l=n(58),c=n(40),d=n(85),h=n(158);o({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=l(this),n=c(e.length),o=h(e,0);return o.length=r(o,e,e,n,0,void 0===t?1:d(t)),o}})},495:function(t,e,n){"use strict";var o=n(128),r=n(40),l=n(49),c=function(t,e,source,n,d,h,v,m){for(var element,f=d,_=0,y=!!v&&l(v,m,3);_<n;){if(_ in source){if(element=y?y(source[_],_,e):source[_],h>0&&o(element))f=c(t,e,element,r(element.length),f,h-1)-1;else{if(f>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[f]=element}f++}_++}return f};t.exports=c},526:function(t,e,n){var content=n(552);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("40cfac12",content,!0,{sourceMap:!1})},549:function(t,e,n){var content=n(550);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("1a9ff9fe",content,!0,{sourceMap:!1})},550:function(t,e,n){var o=n(25)(!1);o.push([t.i,"/*!\n * vue-swipe-actions v2.0.0-beta.20\n * (c) 2016-present eCollect\n * Released under the MIT License.\n */.swipeout{position:relative;overflow:hidden;display:flex}.swipeout .swipeout-left,.swipeout .swipeout-right{position:absolute;height:100%;display:flex;z-index:1}.swipeout .swipeout-left{left:0;transform:translateX(-100%)}.swipeout .swipeout-right{right:0;transform:translateX(100%)}.swipeout .swipeout-action,.swipeout .swipeout-content{transition:transform .2s;will-change:transform}.swipeout.swipeout--no-transition .swipeout-action,.swipeout.swipeout--no-transition .swipeout-content{transition:none!important}.swipeout .swipeout-content{width:100%}.swipeout-non-selectable{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.swipeout-no-pointer-events{pointer-events:none!important}.swipeout-list{display:flex;flex-direction:column}.swipeout-list-item{flex:1}",""]),t.exports=o},551:function(t,e,n){"use strict";n(526)},552:function(t,e,n){var o=n(25)(!1);o.push([t.i,".swipe-card .v-btn p{margin-bottom:0;font-size:12px}.swipeout-action{height:100%!important}",""]),t.exports=o},557:function(t,e,n){"use strict";n.r(e);const o={};function r(t){return 0===t.button}function l(t){return t.touches&&t.touches[0]?t=t.touches[0]:t.changedTouches&&t.changedTouches[0]&&(t=t.changedTouches[0]),{top:t.clientY,left:t.clientX}}Object.defineProperty(o,"passive",{configurable:!0,get(){let t;try{const e=Object.defineProperty({},"passive",{get(){t={passive:!0}}});window.addEventListener("qtest",null,e),window.removeEventListener("qtest",null,e)}catch(t){}return o.passive=t,t},set(t){Object.defineProperty(this,"passive",{value:t})}});function c(t){void 0!==t.touchTargetObserver&&(t.touchTargetObserver.disconnect(),t.touchTargetObserver=void 0)}function d(t){const e=!0!==t.horizontal&&!0!==t.vertical,n={all:!0===e||!0===t.horizontal&&!0===t.vertical};return!0!==t.horizontal&&!0!==e||(n.horizontal=!0),!0!==t.vertical&&!0!==e||(n.vertical=!0),n}function h(t,e,n){const o=l(t);let r;const c=o.left-e.event.x,d=o.top-e.event.y,h=Math.abs(c),v=Math.abs(d);return r=e.direction.horizontal&&!e.direction.vertical?c<0?"left":"right":!e.direction.horizontal&&e.direction.vertical?d<0?"up":"down":h>=v?c<0?"left":"right":d<0?"up":"down",{evt:t,position:o,direction:r,isFirst:e.event.isFirst,isFinal:!0===n,isMouse:e.event.mouse,duration:(new Date).getTime()-e.event.time,distance:{x:h,y:v},offset:{x:c,y:d},delta:{x:o.left-e.event.lastX,y:o.top-e.event.lastY}}}function v(t){return 0===t?"":`translate3d(${t}px, 0, 0)`}function m(t){return t?t.clientWidth:0}var f={name:"SwipeOut",directives:{touchPan:{name:"touch-pan",bind(t,e){const n=!0===e.modifiers.mouse,v=!0!==e.modifiers.mouseMightPrevent&&!0!==e.modifiers.mousePrevent,m=void 0===o.passive||{passive:v,capture:!0},f=!0!==e.modifiers.mightPrevent&&!0!==e.modifiers.prevent?o.passive:null;function _(t,o){n&&o?(e.modifiers.mouseStop&&t.stopPropagation(),e.modifiers.mousePrevent&&t.preventDefault()):(e.modifiers.stop&&t.stopPropagation(),e.modifiers.prevent&&t.preventDefault())}const y={handler:e.value,direction:d(e.modifiers),mouseStart(t){r(t)&&(document.addEventListener("mousemove",y.move,m),document.addEventListener("mouseup",y.mouseEnd,m),y.start(t,!0))},mouseEnd(t){document.removeEventListener("mousemove",y.move,m),document.removeEventListener("mouseup",y.mouseEnd,m),y.end(t)},start(e,n){c(y),!0!==n&&function(t,e,n){const{target:o}=e;n.touchTargetObserver=new MutationObserver((()=>{!1===t.contains(o)&&n.end(e)})),n.touchTargetObserver.observe(t,{childList:!0,subtree:!0})}(t,e,y);const o=l(e);y.event={x:o.left,y:o.top,time:(new Date).getTime(),mouse:!0===n,detected:!1,abort:!1,isFirst:!0,isFinal:!1,lastX:o.left,lastY:o.top}},move(t){if(!y.event)return;if(!0===y.event.abort)return;if(!0===y.event.detected){_(t,y.event.mouse);const e=h(t,y,!1);return void(function(t,e){return!(!t.direction.horizontal||!t.direction.vertical)||(t.direction.horizontal&&!t.direction.vertical?Math.abs(e.delta.x)>0:!t.direction.horizontal&&t.direction.vertical?Math.abs(e.delta.y)>0:void 0)}(y,e)&&(y.handler(e),y.event.lastX=e.position.left,y.event.lastY=e.position.top,y.event.isFirst=!1))}const n=l(t),o=Math.abs(n.left-y.event.x),r=Math.abs(n.top-y.event.y);o!==r&&(y.event.detected=!0,!1!==y.direction.all||!1!==y.event.mouse&&!0===e.modifiers.mouseAllDir||(y.event.abort=y.direction.vertical?o>r:o<r),!0!==y.event.abort&&(document.documentElement.style.cursor="grabbing",document.body.classList.add("swipeout-no-pointer-events"),document.body.classList.add("swipeout-non-selectable")),y.move(t))},end(t){y.event&&(!0!==y.event.mouse&&c(y),document.documentElement.style.cursor="",document.body.classList.remove("swipeout-no-pointer-events"),document.body.classList.remove("swipeout-non-selectable"),!0!==y.event.abort&&!0===y.event.detected&&!0!==y.event.isFirst&&(_(t,y.event.mouse),y.handler(h(t,y,!0))))}};t.__qtouchpan&&(t.__qtouchpan_old=t.__qtouchpan),t.__qtouchpan=y,!0===n&&t.addEventListener("mousedown",y.mouseStart,m),t.addEventListener("touchstart",y.start,f),t.addEventListener("touchmove",y.move,f),t.addEventListener("touchcancel",y.end,f),t.addEventListener("touchend",y.end,f)},update(t,{oldValue:e,value:n,modifiers:o}){const r=t.__qtouchpan;e!==n&&(r.handler=n),o.horizontal===r.direction.horizontal&&o.vertical===r.direction.vertical||(r.direction=d(o))},unbind(t,e){const n=t.__qtouchpan_old||t.__qtouchpan;if(void 0!==n){c(n),document.documentElement.style.cursor="",document.body.classList.remove("swipeout-no-pointer-events"),document.body.classList.remove("swipeout-non-selectable");const r=!0===e.modifiers.mouse,l=!0!==e.modifiers.mouseMightPrevent&&!0!==e.modifiers.mousePrevent,d=void 0===o.passive||{passive:l,capture:!0},h=!0!==e.modifiers.mightPrevent&&!0!==e.modifiers.prevent?o.passive:null;!0===r&&(t.removeEventListener("mousedown",n.mouseStart,d),document.removeEventListener("mousemove",n.move,d),document.removeEventListener("mouseup",n.mouseEnd,d)),t.removeEventListener("touchstart",n.start,h),t.removeEventListener("touchmove",n.move,h),t.removeEventListener("touchcancel",n.end,h),t.removeEventListener("touchend",n.end,h),delete t[t.__qtouchpan_old?"__qtouchpan_old":"__qtouchpan"]}}}},props:{threshold:{type:Number,default:45},revealed:{type:[String,Boolean]},disabled:{type:Boolean,default:!1},passiveListeners:{type:Boolean,default:!1}},watch:{revealed(t){this.innerRevealed!==t&&this._reveal(t,!0)}},data(){return{innerRevealed:this.revealed||!1}},methods:{closeActions(){this.close()},close(){this._isActive||this._reveal(!1,!0)},revealLeft(){!this._isActive&&this.$refs.left&&this._reveal("left",!0)},revealRight(){!this._isActive&&this.$refs.right&&this._reveal("right",!0)},_distanceSwiped(){const t=this.$refs.content.getBoundingClientRect(),e=this.$el.getBoundingClientRect();return t.left-e.left-this.$el.clientLeft},_onPan(t){return this.disabled?null:t.isFirst?this._startListener(t):this._isActive?t.isFinal?this._stopListener(t):this._swipeListener(t):null},_startListener({distance:t}){this.$el.classList.add("swipeout--no-transition"),t.y<=5&&(this._leftActionsWidth=this.$refs.left?this.$refs.left.clientWidth:0,this._rightActionsWidth=this.$refs.right?this.$refs.right.clientWidth:0,this._startLeft=this._distanceSwiped(),this._isActive=!0,this.$emit("active",!0),clearTimeout(this._timer))},_swipeListener({offset:t}){const e=t.x+this._startLeft;return!this.$scopedSlots.left&&e>0||!this.$scopedSlots.right&&e<0?this._animateSlide(0):this._animateSlide(t.x+this._startLeft)},_stopListener({offset:t,distance:e}){this.$el.classList.remove("swipeout--no-transition"),this._isActive=!1,this.$emit("active",!1);const n=this._startLeft+t.x;return 0===this._startLeft&&Math.abs(n)<=this.threshold||e.x>=this.threshold&&(this._startLeft>0&&e.x<this._leftActionsWidth||this._startLeft<0&&e.x<this._rightActionsWidth)?this._reveal(!1):this._reveal(n>0?"left":"right")},_reveal(t,e){var a,b;if(!this._isActive||(a=this.innerRevealed,b=t,(a||b)&&a!==b))return t&&!this.$refs[t]&&(t=!1),this.innerRevealed=t,this.$emit("update:revealed",t),t?"left"===t&&this.$refs.left?(this._leftActionsWidth=e?m(this.$refs.left):this._leftActionsWidth,this._animateSlide(this._leftActionsWidth),this.$emit("revealed",{side:"left",close:this.closeActions}),void this.$emit("leftRevealed",{close:this.closeActions})):void("right"===t&&this.$refs.right&&(this._rightActionsWidth=e?m(this.$refs.right):this._rightActionsWidth,this._animateSlide(-this._rightActionsWidth),this.$emit("revealed",{side:"right",close:this.closeActions}),this.$emit("rightRevealed",{close:this.closeActions}))):(this._animateSlide(0),void this.$emit("closed"))},_shiftLeftActions(t){if(!this.$scopedSlots.left)return;t<0&&(t=0);const e=this.$refs.left,n=this._leftActionsWidth,progress=1-Math.min(t/n,1),o=Math.min(t,n),{children:r}=e,{length:l}=r;for(let i=0;i<l;i++){const t=r[i],e=n-t.offsetLeft-t.offsetWidth;t.style.transform=v(o+e*progress),l>1&&(t.style.zIndex=""+(l-i))}},_shiftRightActions(t){if(!this.$scopedSlots.right)return;t>0&&(t=0);const e=this.$refs.right,n=this._rightActionsWidth,progress=1+Math.max(t/n,-1),o=Math.max(t,-n),{children:r}=e;for(let i=0;i<r.length;i++){const t=r[i];t.style.transform=v(o-t.offsetLeft*progress)}},_animateSlide(t){cancelAnimationFrame(this._frame),this._frame=requestAnimationFrame((()=>{this.$refs.content.style.transform=v(t),this._shiftLeftActions(t),this._shiftRightActions(t)}))}},render(t){const content=[],{left:e,right:n,default:o}=this.$scopedSlots;return e&&content.push(t("div",{ref:"left",staticClass:"swipeout-left"},e({close:this.closeActions}))),n&&content.push(t("div",{ref:"right",staticClass:"swipeout-right"},n({close:this.closeActions}))),content.push(t("div",{ref:"content",staticClass:"swipeout-content",directives:this.disabled||!e&&!n?null:[{name:"touch-pan",value:this._onPan,modifiers:{horizontal:!0,mouse:!0,prevent:!this.passiveListeners,mousePrevent:!0}}]},o?o({revealLeft:this.revealLeft,revealRight:this.revealRight,disabled:this.disabled,close:this.closeActions,revealed:this.innerRevealed}):null)),t("div",{staticClass:"swipeout",class:{"swipeout--disabled":this.disabled}},content)},beforeDestroy(){clearTimeout(this._timer),cancelAnimationFrame(this._frame)}},_={name:"SwipeList",props:{items:{type:Array,required:!0},itemKey:{type:String},transitionKey:{type:String},threshold:{type:Number,default:45},revealed:{type:Object},disabled:{type:Boolean,default:!1},itemDisabled:{type:Function,default:()=>!1},passiveListeners:{type:Boolean,default:!1}},data(){return{innerRevealed:this.revealed||{},rev:this.items.map((()=>null))}},watch:{revealed(t){this.innerRevealed=t},items(){this._emitRevealed({})}},methods:{revealRight(t){this.$refs.items[t]&&this.$refs.items[t].revealRight()},revealLeft(t){this.$refs.items[t]&&this.$refs.items[t].revealLeft()},close(t){if(this.$refs.items){if(void 0===t)return this.$refs.items.forEach((i=>i.close()));if(this.$refs.items[t])return this.$refs.items[t].close()}},isRevealed(t){return this.innerRevealed[t]||!1},closeActions(t){this.close(t)},_onReveal(t,e,n){this.$emit("revealed",{index:e,item:t,side:n.side,close:n.close}),this._emitRevealed({...this.innerRevealed,[e]:n.side})},_onClose(t,e){this.$emit("closed",{index:e,item:t});const{[e]:n,...o}=this.innerRevealed;this._emitRevealed(o)},_getItemKey(t,e){return void 0!==(this.itemKey||this.transitionKey)?t[this.itemKey||this.transitionKey]:e},_emitRevealed(t){void 0===this.revealed?this.innerRevealed=t:this.$emit("update:revealed",t)},__renderItem(t,e,n){const{left:o,right:r,default:l}=this.$scopedSlots,c={};return o&&(c.left=({close:t})=>o({item:e,close:t,index:n})),r&&(c.right=({close:t})=>r({item:e,close:t,index:n})),c.default=({close:o,disabled:r,revealLeft:c,revealRight:d,revealed:h})=>t("div",{ref:"itemsContent",on:{click:()=>this.$emit("swipeout:click",e)}},l({item:e,index:n,close:o,disabled:r,revealed:h,revealLeft:c,revealRight:d})),t(f,{key:n,ref:"items",refInFor:!0,staticClass:"swipeout-list-item",props:{disabled:this.disabled||this.itemDisabled(e),threshold:this.threshold,revealed:this.innerRevealed[n],passiveListeners:this.passiveListeners},on:{revealed:t=>this._onReveal(e,n,t),leftRevealed:t=>this.$emit("leftRevealed",{index:n,item:e,close:t.close}),rightRevealed:t=>this.$emit("rightRevealed",{index:n,item:e,close:t.close}),closed:t=>this._onClose(e,n,t),active:t=>this.$emit("active",t)},scopedSlots:c})}},render(t){return t("div",{staticClass:"swipeout-list",class:{"swipeout--disabled":this.disabled}},this.items.map(((e,n)=>this.__renderItem(t,e,n))))}},y=(n(549),{components:{SwipeList:_},data:function(){return{enabled:!0,items:[{avatar:"https://cdn.vuetifyjs.com/images/lists/1.jpg",title:'Brunch this weekend? <span class="grey--text text--lighten-1 float-right f10">8:10 am</span>',subtitle:'<span class="text--primary">Ali Connors</span> &mdash; I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?'},{avatar:"https://cdn.vuetifyjs.com/images/lists/2.jpg",title:'Summer BBQ <span class="grey--text text--lighten-1 float-right f10">8:10 am</span>',subtitle:'<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I\'m out of town this weekend.'},{avatar:"https://cdn.vuetifyjs.com/images/lists/3.jpg",title:'Oui oui <span class="grey--text text--lighten-1 float-right f10">8:10 am</span>',subtitle:'<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?'},{avatar:"https://cdn.vuetifyjs.com/images/lists/4.jpg",title:'Birthday gift <span class="grey--text text--lighten-1 float-right f10">8:10 am</span>',subtitle:'<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?'},{avatar:"https://cdn.vuetifyjs.com/images/lists/5.jpg",title:'Recipe to try <span class="grey--text text--lighten-1 float-right f10">8:10 am</span>',subtitle:'<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.'},{avatar:"https://cdn.vuetifyjs.com/images/lists/5.jpg",title:'margaret <span class="grey--text text--lighten-1 float-right f10">8:10 am</span>',subtitle:'<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.'},{avatar:"https://cdn.vuetifyjs.com/images/lists/5.jpg",title:'Recipe<span class="grey--text text--lighten-1 float-right f10">8:10 am</span>',subtitle:'<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.'},{avatar:"https://cdn.vuetifyjs.com/images/lists/5.jpg",title:'Recipe<span class="grey--text text--lighten-1 float-right f10">8:10 am</span>',subtitle:'<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.'},{avatar:"https://cdn.vuetifyjs.com/images/lists/5.jpg",title:'Recipe<span class="grey--text text--lighten-1 float-right f10">8:10 am</span>',subtitle:'<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.'},{avatar:"https://cdn.vuetifyjs.com/images/lists/5.jpg",title:'Recipe<span class="grey--text text--lighten-1 float-right f10">8:10 am</span>',subtitle:'<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.'},{avatar:"https://cdn.vuetifyjs.com/images/lists/5.jpg",title:'mmd <span class="grey--text text--lighten-1 float-right f10">8:10 am</span>',subtitle:'<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.'},{avatar:"https://cdn.vuetifyjs.com/images/lists/5.jpg",title:'mmdi <span class="grey--text text--lighten-1 float-right f10">8:10 am</span>',subtitle:'<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.'}]}},methods:{close:function(){}}}),w=(n(551),n(56)),x=n(75),L=n.n(x),$=n(196),A=n(546),R=n(157),S=n(458),C=n(545),E=n(577),j=n(470),component=Object(w.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("swipe-list",{ref:"list",staticClass:"swipe-card",attrs:{disabled:!t.enabled,items:t.items,"item-key":"id"},on:{"swipeout:click":t.itemClick},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.item;return[n("div",{staticClass:"card-content"},[n("v-list-item",{attrs:{to:"/Pv"}},[n("v-list-item-avatar",[n("v-img",{attrs:{src:o.avatar}})],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{innerHTML:t._s(o.title)}}),t._v(" "),n("v-list-item-subtitle",{domProps:{innerHTML:t._s(o.subtitle)}})],1)],1),t._v(" "),n("v-divider")],1)]}},{key:"left",fn:function(){return[n("v-btn",{staticClass:"rounded-0 px-2 swipeout-action",attrs:{dark:"",color:"#518EF8"}},[n("span",[n("v-icon",[t._v(" $secret ")]),t._v(" "),n("p",[t._v("Secret")])],1)]),t._v(" "),n("v-btn",{staticClass:"rounded-0 px-2 swipeout-action",attrs:{dark:"",color:"#4F4495"},on:{click:t.close}},[n("span",[n("v-icon",[t._v(" $pin ")]),t._v(" "),n("p",[t._v("Pin")])],1)]),t._v(" "),n("v-btn",{staticClass:"rounded-0 px-2 swipeout-action",attrs:{dark:"",color:"#417F8C"}},[n("span",[n("v-icon",[t._v(" $mute ")]),t._v(" "),n("p",[t._v("Mute")])],1)])]},proxy:!0},{key:"right",fn:function(){return[n("v-btn",{staticClass:"rounded-0 px-2 swipeout-action",attrs:{dark:"",color:"#5E6171"}},[n("span",[n("v-icon",[t._v(" $block ")]),t._v(" "),n("p",[t._v("Block")])],1)]),t._v(" "),n("v-btn",{staticClass:"rounded-0 px-2 swipeout-action",attrs:{dark:"",color:"#364962"}},[n("span",[n("v-icon",[t._v(" $bell ")]),t._v(" "),n("p",[t._v("Police")])],1)]),t._v(" "),n("v-btn",{staticClass:"rounded-0 px-2 swipeout-action",attrs:{dark:"",color:"#F14141"}},[n("span",[n("v-icon",[t._v(" $delete ")]),t._v(" "),n("p",[t._v("Delete")])],1)])]},proxy:!0},{key:"empty",fn:function(){return[n("div",[t._v("list is empty ( filtered or just empty )")])]},proxy:!0}])})],1)}),[],!1,null,null,null);e.default=component.exports;L()(component,{VBtn:$.a,VDivider:A.a,VIcon:R.a,VImg:S.a,VListItem:C.a,VListItemAvatar:E.a,VListItemContent:j.a,VListItemSubtitle:j.b,VListItemTitle:j.c})}}]);