/*! For license information please see 5368.e5554519.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkfeedback_map=self.webpackChunkfeedback_map||[]).push([[5368],{5368:(e,t,o)=>{o.r(t),o.d(t,{DropdownGroup:()=>c});var r=o(30697),s=o(37022),i=o(5417),n=o(13922),d=o(92128);const a=o(94161).AH`:host{display:block}.container{text-align:start}.dropdown-title{margin-block-end:-1px;display:block;cursor:default;overflow-wrap:break-word;border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);font-weight:var(--calcite-font-weight-bold);color:var(--calcite-color-text-2)}.dropdown-separator{display:block;block-size:1px;background-color:var(--calcite-color-border-3)}:host([scale=s]){font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .dropdown-title{padding:.5rem}:host([scale=m]){font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .dropdown-title{padding:.75rem}:host([scale=l]){font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .dropdown-title{padding:1rem}:host([hidden]){display:none}[hidden]{display:none}`;class c extends i.WF{constructor(){super(),this.mutationObserver=(0,n.c)("mutation",(()=>this.updateItems())),this.scale="m",this.selectionMode="single",this.calciteInternalDropdownItemChange=(0,i.lh)({cancelable:!1}),this.listen("calciteInternalDropdownItemSelect",this.updateActiveItemOnChange)}static#e=(()=>this.properties={groupTitle:3,scale:3,selectionMode:3})();static#t=(()=>this.shadowRootOptions={mode:"open",delegatesFocus:!0})();static#o=(()=>this.styles=a)();connectedCallback(){super.connectedCallback(),this.updateItems(),this.mutationObserver?.observe(this.el,{childList:!0})}load(){this.groupPosition=this.getGroupPosition()}willUpdate(e){e.has("selectionMode")&&(this.hasUpdated||"single"!==this.selectionMode)&&this.updateItems()}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect()}updateActiveItemOnChange(e){this.requestedDropdownGroup=e.detail.requestedDropdownGroup,this.requestedDropdownItem=e.detail.requestedDropdownItem,this.calciteInternalDropdownItemChange.emit({requestedDropdownGroup:this.requestedDropdownGroup,requestedDropdownItem:this.requestedDropdownItem})}updateItems(){Array.from(this.el.querySelectorAll("calcite-dropdown-item")).forEach((e=>e.selectionMode=this.selectionMode))}getGroupPosition(){return Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-dropdown-group"),this.el)}render(){const e=this.groupTitle?s.qy`<span aria-hidden=true class="dropdown-title">${this.groupTitle}</span>`:null,t=this.groupPosition>0?s.qy`<div class="dropdown-separator" role=separator></div>`:null;return this.el.ariaLabel=this.groupTitle,this.el.role="group",s.qy`<div class=${(0,i.CP)({[d.C.container]:!0})}>${t}${e}<slot></slot></div>`}}(0,r.c)("calcite-dropdown-group",c)},13922:(e,t,o)=>{o.d(t,{c:()=>s});var r=o(30697);function s(e,t,o){if(!(0,r.i)())return;const s=function(e){class t extends window.MutationObserver{constructor(e){super(e),this.observedEntry=[],this.callback=e}observe(e,t){return this.observedEntry.push({target:e,options:t}),super.observe(e,t)}unobserve(e){const t=this.observedEntry.filter((t=>t.target!==e));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),t.forEach((e=>this.observe(e.target,e.options)))}}return"intersection"===e?window.IntersectionObserver:"mutation"===e?t:window.ResizeObserver}(e);return new s(t,o)}},92128:(e,t,o)=>{o.d(t,{C:()=>r});const r={container:"container",containerNone:"container--none-selection",icon:"dropdown-item-icon",iconEnd:"dropdown-item-icon--end",iconStart:"dropdown-item-icon--start",itemContent:"dropdown-item-content",link:"dropdown-link"}}}]);
//# sourceMappingURL=5368.e5554519.chunk.js.map