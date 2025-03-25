/*! For license information please see 1748.f68816b1.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkfeedback_map=self.webpackChunkfeedback_map||[]).push([[1748],{31748:(e,t,i)=>{i.r(t),i.d(t,{Tooltip:()=>y});var o=i(30697),n=i(80526),r=i(37022),s=i(5417),l=i(3890),a=i(90596),c=i(60914),d=i(74886),u=i(50965),h=i(94161);const f="position-container",p="container",v="aria-describedby";function m(e){const{referenceElement:t}=e;return("string"==typeof t?(0,u.q)(e,{id:t}):t)||null}const g=h.AH`:host{display:contents;--calcite-floating-ui-z-index: var(--calcite-tooltip-z-index, var(--calcite-z-index-tooltip))}.position-container{inline-size:max-content;display:none;inset-block-start:0;left:0;z-index:var(--calcite-floating-ui-z-index)}.position-container .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:inset,left,opacity;opacity:0;box-shadow:0 0 16px #00000029;z-index:var(--calcite-z-index);border-radius:.25rem}.position-container[data-placement^=bottom] .calcite-floating-ui-anim{inset-block-start:-5px}.position-container[data-placement^=top] .calcite-floating-ui-anim{inset-block-start:5px}.position-container[data-placement^=left] .calcite-floating-ui-anim{left:5px}.position-container[data-placement^=right] .calcite-floating-ui-anim{left:-5px}.position-container[data-placement] .calcite-floating-ui-anim--active{opacity:1;inset-block-start:0;left:0}.calcite-floating-ui-arrow{pointer-events:none;position:absolute;z-index:calc(var(--calcite-z-index) * -1);fill:var(--calcite-color-foreground-1)}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-color-border-3)}.container{position:relative;overflow:hidden;padding:.75rem 1rem;font-size:var(--calcite-font-size--2);line-height:1.375;font-weight:var(--calcite-font-weight-medium);border-radius:var(--calcite-tooltip-corner-radius, var(--calcite-corner-radius-round));color:var(--calcite-tooltip-text-color, var(--calcite-color-text-1));max-inline-size:20rem;max-block-size:20rem;text-align:start}.position-container .calcite-floating-ui-anim{border-width:1px;border-style:solid;background-color:var(--calcite-tooltip-background-color, var(--calcite-color-foreground-1));border-color:var(--calcite-tooltip-border-color, var(--calcite-color-border-3));border-radius:var(--calcite-tooltip-corner-radius, var(--calcite-corner-radius-round))}.calcite-floating-ui-arrow{fill:var(--calcite-tooltip-background-color, var(--calcite-color-foreground-1))}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-tooltip-border-color, var(--calcite-color-border-3))}:host([hidden]){display:none}[hidden]{display:none}`,w=new class{constructor(){this.registeredElements=new WeakMap,this.registeredShadowRootCounts=new WeakMap,this.hoverOpenTimeout=null,this.hoverCloseTimeout=null,this.activeTooltip=null,this.registeredElementCount=0,this.clickedTooltip=null,this.queryTooltip=e=>{const{registeredElements:t}=this,i=e.find((e=>t.has(e)));return t.get(i)},this.keyDownHandler=e=>{if("Escape"===e.key&&!e.defaultPrevented){const{activeTooltip:t}=this;if(t?.open){this.clearHoverTimeout(),this.closeActiveTooltip();const i=m(t),o=e.composedPath();(i instanceof Element&&o.includes(i)||o.includes(t))&&e.preventDefault()}}},this.pointerMoveHandler=e=>{if(e.defaultPrevented)return void this.closeHoveredTooltip();const t=e.composedPath(),{activeTooltip:i}=this,o=this.queryTooltip(t);this.pathHasOpenTooltip(o,t)?this.clearHoverTimeout():o!==this.clickedTooltip&&(o?this.openHoveredTooltip(o):i?.open&&this.closeHoveredTooltip(),this.clickedTooltip=null)},this.clickHandler=e=>{if(e.defaultPrevented)return;this.clickedTooltip=null;const t=e.composedPath(),i=this.queryTooltip(t);if(this.pathHasOpenTooltip(i,t))this.clearHoverTimeout();else if(this.closeActiveTooltip(),i){if(this.clearHoverTimeout(),i.closeOnClick)return this.clickedTooltip=i,void this.toggleTooltip(i,!1);this.toggleTooltip(i,!0)}},this.blurHandler=()=>{this.closeActiveTooltip()},this.focusInHandler=e=>{if(e.defaultPrevented)return;const t=e.composedPath(),i=this.queryTooltip(t);this.pathHasOpenTooltip(i,t)?this.clearHoverTimeout():i!==this.clickedTooltip&&(this.clickedTooltip=null,this.closeTooltipIfNotActive(i),i&&this.toggleFocusedTooltip(i,!0))},this.openHoveredTooltip=e=>{this.hoverOpenTimeout=window.setTimeout((()=>{null!==this.hoverOpenTimeout&&(this.clearHoverCloseTimeout(),this.closeTooltipIfNotActive(e),this.toggleTooltip(e,!0))}),this.activeTooltip?.open?0:300)},this.closeHoveredTooltip=()=>{this.hoverCloseTimeout=window.setTimeout((()=>{null!==this.hoverCloseTimeout&&this.closeActiveTooltip()}),500)}}registerElement(e,t){this.registeredElementCount++,this.registeredElements.set(e,t);const i=this.getReferenceElShadowRootNode(e);i&&this.registerShadowRoot(i),1===this.registeredElementCount&&this.addListeners()}unregisterElement(e){const t=this.getReferenceElShadowRootNode(e);t&&this.unregisterShadowRoot(t),this.registeredElements.delete(e)&&this.registeredElementCount--,0===this.registeredElementCount&&this.removeListeners()}pathHasOpenTooltip(e,t){const{activeTooltip:i}=this;return i?.open&&t.includes(i)||e?.open&&t.includes(e)}addShadowListeners(e){e.addEventListener("focusin",this.focusInHandler)}removeShadowListeners(e){e.removeEventListener("focusin",this.focusInHandler)}addListeners(){window.addEventListener("keydown",this.keyDownHandler),window.addEventListener("pointermove",this.pointerMoveHandler),window.addEventListener("click",this.clickHandler),window.addEventListener("focusin",this.focusInHandler),window.addEventListener("blur",this.blurHandler)}removeListeners(){window.removeEventListener("keydown",this.keyDownHandler),window.removeEventListener("pointermove",this.pointerMoveHandler),window.removeEventListener("click",this.clickHandler),window.removeEventListener("focusin",this.focusInHandler),window.removeEventListener("blur",this.blurHandler)}clearHoverOpenTimeout(){window.clearTimeout(this.hoverOpenTimeout),this.hoverOpenTimeout=null}clearHoverCloseTimeout(){window.clearTimeout(this.hoverCloseTimeout),this.hoverCloseTimeout=null}clearHoverTimeout(){this.clearHoverOpenTimeout(),this.clearHoverCloseTimeout()}closeTooltipIfNotActive(e){this.activeTooltip!==e&&this.closeActiveTooltip()}closeActiveTooltip(){const{activeTooltip:e}=this;e?.open&&this.toggleTooltip(e,!1)}toggleFocusedTooltip(e,t){t&&this.clearHoverTimeout(),this.toggleTooltip(e,t)}toggleTooltip(e,t){e.open=t,this.activeTooltip=t?e:null}registerShadowRoot(e){const{registeredShadowRootCounts:t}=this,i=t.get(e),o=Math.min(("number"==typeof i?i:0)+1,1);1===o&&this.addShadowListeners(e),t.set(e,o)}unregisterShadowRoot(e){const{registeredShadowRootCounts:t}=this,i=t.get(e),o=Math.max(("number"==typeof i?i:1)-1,0);0===o&&this.removeShadowListeners(e),t.set(e,o)}getReferenceElShadowRootNode(e){return e instanceof Element?(0,u.c)(e):null}};class y extends s.WF{constructor(){super(...arguments),this.guid=`calcite-tooltip-${(0,a.g)()}`,this.transitionProp="opacity",this.floatingLayout="vertical",this.closeOnClick=!1,this.offsetDistance=l.d,this.offsetSkidding=0,this.open=!1,this.overlayPositioning="absolute",this.placement="auto",this.calciteTooltipBeforeClose=(0,s.lh)({cancelable:!1}),this.calciteTooltipBeforeOpen=(0,s.lh)({cancelable:!1}),this.calciteTooltipClose=(0,s.lh)({cancelable:!1}),this.calciteTooltipOpen=(0,s.lh)({cancelable:!1})}static#e=(()=>this.properties={floatingLayout:16,referenceEl:16,closeOnClick:7,label:1,offsetDistance:11,offsetSkidding:11,open:7,overlayPositioning:3,placement:3,referenceElement:1})();static#t=(()=>this.styles=g)();async reposition(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const{referenceEl:t,placement:i,overlayPositioning:o,offsetDistance:n,offsetSkidding:r,arrowEl:s,floatingEl:a}=this;return(0,l.r)(this,{floatingEl:a,referenceEl:t,overlayPositioning:o,placement:i,offsetDistance:n,offsetSkidding:r,arrowEl:s,type:"tooltip"},e)}connectedCallback(){super.connectedCallback(),this.setUpReferenceElement(!0)}willUpdate(e){(e.has("offsetDistance")&&(this.hasUpdated||this.offsetDistance!==l.d)||e.has("offsetSkidding")&&(this.hasUpdated||0!==this.offsetSkidding)||e.has("overlayPositioning")&&(this.hasUpdated||"absolute"!==this.overlayPositioning)||e.has("placement")&&(this.hasUpdated||"auto"!==this.placement))&&this.reposition(!0),e.has("open")&&(this.hasUpdated||!1!==this.open)&&this.openHandler(),e.has("referenceElement")&&this.setUpReferenceElement()}loaded(){this.referenceElement&&!this.referenceEl&&this.setUpReferenceElement()}disconnectedCallback(){super.disconnectedCallback(),this.removeReferences(),(0,l.a)(this)}openHandler(){(0,c.o)(this),this.reposition(!0)}onBeforeOpen(){this.calciteTooltipBeforeOpen.emit()}onOpen(){this.calciteTooltipOpen.emit()}onBeforeClose(){this.calciteTooltipBeforeClose.emit()}onClose(){this.calciteTooltipClose.emit(),(0,l.h)(this)}setFloatingEl(e){this.floatingEl=e,e&&requestAnimationFrame((()=>this.setUpReferenceElement()))}setTransitionEl(e){this.transitionEl=e}setUpReferenceElement(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.removeReferences(),this.referenceEl=m(this.el),(0,l.c)(this);const{el:t,referenceElement:i,referenceEl:o}=this;e&&i&&!o&&console.warn(`${t.tagName}: reference-element id "${i}" was not found.`,{el:t}),this.addReferences()}getId(){return this.el.id||this.guid}addReferences(){const{referenceEl:e}=this;if(!e)return;const t=this.getId();"setAttribute"in e&&e.setAttribute(v,t),w.registerElement(e,this.el)}removeReferences(){const{referenceEl:e}=this;e&&("removeAttribute"in e&&e.removeAttribute(v),w.unregisterElement(e))}render(){const{referenceEl:e,label:t,open:i,floatingLayout:o}=this,a=e&&i,c=!a;return this.el.inert=c,this.el.ariaLabel=t,this.el.ariaLive="polite",(0,s.Bq)(this.el,"id",this.getId()),this.el.role="tooltip",r.qy`<div class=${(0,s.CP)(f)} ${(0,n.K)(this.setFloatingEl)}><div class=${(0,s.CP)({[l.F.animation]:!0,[l.F.animationActive]:a})} ${(0,n.K)(this.setTransitionEl)}>${(0,d.F)({floatingLayout:o,ref:e=>this.arrowEl=e})}<div class=${(0,s.CP)(p)}><slot></slot></div></div></div>`}}(0,o.c)("calcite-tooltip",y)},49469:(e,t,i)=>{i.d(t,{D:()=>s});var o=i(28531),n=i(30533),r=i(70885);const s=(0,n.u$)(class extends n.WL{constructor(){super(...arguments),this.key=o.s6}render(e,t){return this.key=e,t}update(e,t){let[i,o]=t;return i!==this.key&&((0,r.mY)(e),this.key=i),o}})},50965:(e,t,i)=>{i.d(t,{D:()=>O,a:()=>I,b:()=>x,c:()=>A,d:()=>z,g:()=>b,h:()=>H,i:()=>D,k:()=>S,l:()=>F,m:()=>K,p:()=>E,q:()=>$,r:()=>L,s:()=>P,t:()=>_,u:()=>M,v:()=>R,w:()=>q,x:()=>N,y:()=>k,z:()=>U});i(30697);var o=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"].join(","),n=typeof Element>"u",r=n?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,s=!n&&Element.prototype.getRootNode?function(e){var t;return null==e||null===(t=e.getRootNode)||void 0===t?void 0:t.call(e)}:function(e){return e?.ownerDocument},l=function e(t,i){var o;void 0===i&&(i=!0);var n=null==t||null===(o=t.getAttribute)||void 0===o?void 0:o.call(t,"inert");return""===n||"true"===n||i&&t&&e(t.parentNode)},a=function e(t,i,n){for(var s=[],a=Array.from(t);a.length;){var c=a.shift();if(!l(c,!1))if("SLOT"===c.tagName){var d=c.assignedElements(),u=e(d.length?d:c.children,!0,n);n.flatten?s.push.apply(s,u):s.push({scopeParent:c,candidates:u})}else{r.call(c,o)&&n.filter(c)&&(i||!t.includes(c))&&s.push(c);var h=c.shadowRoot||"function"==typeof n.getShadowRoot&&n.getShadowRoot(c),f=!l(h,!1)&&(!n.shadowRootFilter||n.shadowRootFilter(c));if(h&&f){var p=e(!0===h?c.children:h.children,!0,n);n.flatten?s.push.apply(s,p):s.push({scopeParent:c,candidates:p})}else a.unshift.apply(a,c.children)}}return s},c=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},d=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||function(e){var t,i=null==e||null===(t=e.getAttribute)||void 0===t?void 0:t.call(e,"contenteditable");return""===i||"true"===i}(e))&&!c(e)?0:e.tabIndex},u=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},h=function(e){return"INPUT"===e.tagName},f=function(e){return function(e){return h(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,i=e.form||s(e),o=function(e){return i.querySelectorAll('input[type="radio"][name="'+e+'"]')};if(typeof window<"u"&&typeof window.CSS<"u"&&"function"==typeof window.CSS.escape)t=o(window.CSS.escape(e.name));else try{t=o(e.name)}catch(r){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",r.message),!1}var n=function(e,t){for(var i=0;i<e.length;i++)if(e[i].checked&&e[i].form===t)return e[i]}(t,e.form);return!n||n===e}(e)},p=function(e){var t=e.getBoundingClientRect(),i=t.width,o=t.height;return 0===i&&0===o},v=function(e,t){var i=t.displayCheck,o=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var n=r.call(e,"details>summary:first-of-type")?e.parentElement:e;if(r.call(n,"details:not([open]) *"))return!0;if(i&&"full"!==i&&"legacy-full"!==i){if("non-zero-area"===i)return p(e)}else{if("function"==typeof o){for(var l=e;e;){var a=e.parentElement,c=s(e);if(a&&!a.shadowRoot&&!0===o(a))return p(e);e=e.assignedSlot?e.assignedSlot:a||c===e.ownerDocument?a:c.host}e=l}if(function(e){var t,i,o,n,r=e&&s(e),l=null===(t=r)||void 0===t?void 0:t.host,a=!1;if(r&&r!==e)for(a=!!(null!==(i=l)&&void 0!==i&&null!==(o=i.ownerDocument)&&void 0!==o&&o.contains(l)||null!=e&&null!==(n=e.ownerDocument)&&void 0!==n&&n.contains(e));!a&&l;){var c,d,u;a=!(null===(d=l=null===(c=r=s(l))||void 0===c?void 0:c.host)||void 0===d||null===(u=d.ownerDocument)||void 0===u||!u.contains(l))}return a}(e))return!e.getClientRects().length;if("legacy-full"!==i)return!0}return!1},m=function(e,t){return!(t.disabled||l(t)||function(e){return h(e)&&"hidden"===e.type}(t)||v(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var i=0;i<t.children.length;i++){var o=t.children.item(i);if("LEGEND"===o.tagName)return!!r.call(t,"fieldset[disabled] *")||!o.contains(e)}return!0}t=t.parentElement}return!1}(t))},g=function(e,t){return!(f(t)||d(t)<0||!m(e,t))},w=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},y=function e(t){var i=[],o=[];return t.forEach((function(t,n){var r=!!t.scopeParent,s=r?t.scopeParent:t,l=function(e,t){var i=d(e);return i<0&&t&&!c(e)?0:i}(s,r),a=r?e(t.candidates):s;0===l?r?i.push.apply(i,a):i.push(s):o.push({documentOrder:n,tabIndex:l,item:t,isScope:r,content:a})})),o.sort(u).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(i)},T=function(e,t){var i;return i=(t=t||{}).getShadowRoot?a([e],t.includeContainer,{filter:g.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:w}):function(e,t,i){if(l(e))return[];var n=Array.prototype.slice.apply(e.querySelectorAll(o));return t&&r.call(e,o)&&n.unshift(e),n.filter(i)}(e,t.includeContainer,g.bind(null,t)),y(i)};const E={getShadowRoot:!0};function b(e){const t=S(e,"[dir]");return t?t.getAttribute("dir"):"ltr"}function k(e){return e.getRootNode()}function A(e){const t=k(e);return"host"in t?t:null}function C(e){return e.host||null}function $(e,t){let{selector:i,id:o}=t;if(!e)return null;e.assignedSlot&&(e=e.assignedSlot);const n=k(e);return(o?"getElementById"in n?n.getElementById(o):null:i?n.querySelector(i):null)||$(C(n),{selector:i,id:o})}function S(e,t){return e?e.closest(t)||S(C(k(e)),t):null}async function x(e){if(e)return function(e){return"function"==typeof e?.setFocus}(e)?e.setFocus():e.focus()}function N(e){if(e)return T(e,E)[0]??e}function H(e){N(e)?.focus()}function R(e,t,i){return"string"==typeof t&&""!==t?t:""===t||!0===t?e[i]:void 0}function _(e){return(!!e).toString()}function L(e){return I(e)||function(e){return!!function(e){return function(e){return e.currentTarget.assignedNodes({flatten:!0})}(e).filter((e=>e.nodeType===Node.TEXT_NODE)).map((e=>e.textContent)).join("").trim()}(e)}(e)}function O(e){for(const t of e.childNodes)if(t.nodeType===Node.TEXT_NODE&&""!==t.textContent?.trim()||t.nodeType===Node.ELEMENT_NODE)return!0;return!1}function I(e){return!!P(e).length}function P(e,t){return function(e,t){const i=e.assignedElements({flatten:!0});return t?function(e,t){return e.filter((e=>e.matches(t)))}(i,t):i}(e.target,t)}function D(e){return!(!e.isPrimary||0!==e.button)}function M(e){return 0===e.detail}const z=function(e,t,i){let o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];const n=e.indexOf(t),r=0===n,s=n===e.length-1;let l;return o&&(i="previous"===i&&r?"last":"next"===i&&s?"first":i),l="previous"===i?e[n-1]||e[o?e.length-1:n]:"next"===i?e[n+1]||e[o?0:n]:"last"===i?e[e.length-1]:e[0],x(l),l};function F(e,t){if(e.parentNode!==t.parentNode)return!1;const i=Array.from(e.parentNode.children);return i.indexOf(e)<i.indexOf(t)}async function U(e,t,i,o){return B(e,t,"animation",i,o)}async function q(e,t,i,o){return B(e,t,"transition",i,o)}function Y(e,t,i){const o="transition"===t?"transitionProperty":"animationName";return e.getAnimations().find((e=>e[o]===i))}async function B(e,t,i,o,n){let r=Y(e,i,t);if(r||(await W(),r=Y(e,i,t)),!r)return async function(e,t){await W(),e?.(),await W(),t?.()}(o,n);o?.();try{await r.finished}catch{}finally{n?.()}}function W(){return new Promise((e=>requestAnimationFrame((()=>e()))))}function K(e){return e.endsWith("px")}},74886:(e,t,i)=>{i.d(t,{F:()=>d});var o=i(80526),n=i(49469),r=i(28531),s=i(5417);const l="calcite-floating-ui-arrow",a="calcite-floating-ui-arrow__stroke",c={width:12,height:6,strokeWidth:1},d=e=>{let{floatingLayout:t,key:i,ref:d}=e;const{width:u,height:h,strokeWidth:f}=c,p=u/2,v="vertical"===t,m=`M0,0 H${u} L${u-p},${h} Q${p},${h} ${p},${h} Z`;return(0,n.D)(i,r.qy`<svg aria-hidden=true class=${(0,s.CP)(l)} height=${u} viewBox=${`0 0 ${u} ${u+(v?0:f)}`} width=${u+(v?f:0)} ${(0,o.K)(d)}>${r.JW`${r.JW`<path class=${(0,s.CP)(a)} d=${m??r.s6} fill=none stroke-width=${f+1} />`||""}<path d=${m??r.s6} stroke=none />`}</svg>`)}},80526:(e,t,i)=>{i.d(t,{_:()=>f,K:()=>m});var o=i(28531),n=i(70885),r=i(30533);const s=(e,t)=>{const i=e._$AN;if(void 0===i)return!1;for(const o of i)o._$AO?.(t,!1),s(o,t);return!0},l=e=>{let t,i;do{if(void 0===(t=e._$AM))break;i=t._$AN,i.delete(e),e=t}while(0===i?.size)},a=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),u(t)}};function c(e){void 0!==this._$AN?(l(this),this._$AM=e,a(this)):this._$AM=e}function d(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;const o=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(t)if(Array.isArray(o))for(let r=i;r<o.length;r++)s(o[r],!1),l(o[r]);else null!=o&&(s(o,!1),l(o));else s(this,e)}const u=e=>{e.type==r.OA.CHILD&&(e._$AP??=d,e._$AQ??=c)};class h extends r.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),a(this),this.isConnected=e._$AU}_$AO(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(s(this,e),l(this))}setValue(e){if((0,n.Rt)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}const f=()=>new p;class p{}const v=new WeakMap,m=(0,r.u$)(class extends h{render(e){return o.s6}update(e,t){let[i]=t;const n=i!==this.Y;return n&&void 0!==this.Y&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.Y=i,this.ht=e.options?.host,this.rt(this.ct=e.element)),o.s6}rt(e){if(this.isConnected||(e=void 0),"function"==typeof this.Y){const t=this.ht??globalThis;let i=v.get(t);void 0===i&&(i=new WeakMap,v.set(t,i)),void 0!==i.get(this.Y)&&this.Y.call(this.ht,void 0),i.set(this.Y,e),void 0!==e&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){return"function"==typeof this.Y?v.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})}}]);
//# sourceMappingURL=1748.f68816b1.chunk.js.map