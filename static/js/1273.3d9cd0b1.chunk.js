"use strict";(self.webpackChunkfeedback_map=self.webpackChunkfeedback_map||[]).push([[1273],{8794:(t,e,i)=>{i.d(e,{q:()=>h});var s=i(18690),r=i(54099),n=i(81447);class h extends r.A{constructor(){super(...arguments),this._transitionables=null,this._clips=null,this._fadeTransition=null,this._isReady=!1,this._opacity=1,this.parent=null,this._stage=null,this._visible=!0}get computedOpacity(){return this._fadeTransition?.computedOpacity??this.opacity}get clips(){return this._clips}set clips(t){this._clips=t,this.requestRender()}get fadeTransitionEnabled(){return null!==this._fadeTransition}set fadeTransitionEnabled(t){!this._fadeTransition&&t?(this._fadeTransition=new n.A({opacity:this.opacity,visible:this.visible}),this.addTransitionable(this._fadeTransition)):this._fadeTransition&&!t&&(this.removeTransitionable(this._fadeTransition),this._fadeTransition=null)}get inFadeTransition(){return this._fadeTransition?.transitioning??!1}get isReady(){return this._isReady}get opacity(){return this._opacity}set opacity(t){this._opacity!==t&&(this._opacity=Math.min(1,Math.max(t,0)),this._fadeTransition&&(this._fadeTransition.opacity=this._opacity),this.requestRender())}get stage(){return this._stage}set stage(t){if(this._stage===t)return;const e=this._stage;this._stage=t,t?this._stage?.untrashDisplayObject(this)||(this.onAttach(),this.emit("attach")):e?.trashDisplayObject(this)}get transforms(){return null==this._transforms&&(this._transforms=this._createTransforms()),this._transforms}get transitioning(){return this.isTransitioning()}get visible(){return this._visible}set visible(t){this._visible!==t&&(this._visible=t,this._fadeTransition&&(this._fadeTransition.visible=this._visible),this.requestRender())}get hasLabels(){return!1}get hasHighlight(){return!1}get hasBlending(){return!1}addTransitionable(t){this._transitionables??=[],this._transitionables.push(t),this.requestRender()}removeTransitionable(t){t.endTransition(),this._transitionables&&(0,s.TF)(this._transitionables,t),this.requestRender()}fadeIn(){this.fadeTransitionEnabled=!0;const t=this._fadeTransition.fadeIn();return this.opacity=1,this.requestRender(),t}fadeOut(){this.fadeTransitionEnabled=!0;const t=this._fadeTransition.fadeOut();return this.opacity=0,this.requestRender(),t}endTransitions(){if(this._transitionables){for(const t of this._transitionables)t.endTransition();this.requestRender()}}beforeRender(t){this.transitionStep(t.deltaTime,t.state.scale),this.setTransform(t.state)}afterRender(t){this.transitioning&&this.requestRender()}remove(){this.parent?.removeChild(this)}setTransform(t){}processRender(t){this.stage&&(this._fadeTransition?.computedVisible??this.visible)&&this.doRender(t)}requestRender(){this.stage&&this.stage.requestRender()}processDetach(){this.endTransitions(),this.onDetach(),this.emit("detach")}isTransitioning(){return this._transitionables?.some((t=>t.transitioning))??!1}transitionStep(t,e){if(this._transitionables)for(const i of this._transitionables)i.transitionStep(t,e)}onAttach(){}onDetach(){}doRender(t){}ready(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender())}}},17400:(t,e,i)=>{i.d(e,{$B:()=>p});var s=i(35143),r=i(91967),n=i(81806),h=i(53084),a=i(76460),o=i(46053),l=i(85842),c=i(7847),d=i(58503);const u=-1;let p=class extends r.A{constructor(t){super(t),this._from=null,this._to=null,this._final=null,this._current=[],this._time=0,this.duration=(0,n.A)("mapview-transitions-duration"),this.effects=[]}set effect(t){if(this._get("effect")!==(t=t||"")){this._set("effect",t);try{this._transitionTo(f(t))}catch(e){this._transitionTo([]),a.A.getLogger(this).warn("Invalid Effect",{effect:t,error:e})}}}get final(){return this._final}get hasEffects(){return this.transitioning||!!this.effects.length}set scale(t){this._updateForScale(t)}get transitioning(){return null!==this._to}canTransitionTo(t){try{return this.scale>0&&g(this._current,f(t),this.scale)}catch{return!1}}transitionStep(t,e){this._applyTimeTransition(t),this._updateForScale(e)}endTransition(){this._applyTimeTransition(this.duration)}_transitionTo(t){this.scale>0&&g(this._current,t,this.scale)?(this._final=t,this._to=(0,h.o8)(t),function(t,e,i){const s=t.length>e.length?t:e,r=t.length>e.length?e:t,n=r[r.length-1],h=n?.scale??i,a=n?.effects??[];for(let o=r.length;o<s.length;o++)r.push({scale:h,effects:[...a]});for(let o=0;o<s.length;o++)r[o].scale=r[o].scale===u?i:r[o].scale,s[o].scale=s[o].scale===u?i:s[o].scale,(0,d.O9)(r[o].effects,s[o].effects)}(this._current,this._to,this.scale),this._from=(0,h.o8)(this._current),this._time=0):(this._from=this._to=this._final=null,this._current=t),this._set("effects",this._current[0]?(0,h.o8)(this._current[0].effects):[])}_applyTimeTransition(t){if(!(this._to&&this._from&&this._current&&this._final))return;this._time+=t;const e=Math.min(1,this._time/this.duration);for(let i=0;i<this._current.length;i++){const t=this._current[i],s=this._from[i],r=this._to[i];t.scale=_(s.scale,r.scale,e);for(let i=0;i<t.effects.length;i++){const n=t.effects[i],h=s.effects[i],a=r.effects[i];n.interpolate(h,a,e)}}1===e&&(this._current=this._final,this._set("effects",this._current[0]?(0,h.o8)(this._current[0].effects):[]),this._from=this._to=this._final=null)}_updateForScale(t){if(this._set("scale",t),0===this._current.length)return;const e=this._current,i=this._current.length-1;let s,r,n=1;if(1===e.length||t>=e[0].scale)r=s=e[0].effects;else if(t<=e[i].scale)r=s=e[i].effects;else for(let h=0;h<i;h++){const i=e[h],a=e[h+1];if(i.scale>=t&&a.scale<=t){n=(t-i.scale)/(a.scale-i.scale),s=i.effects,r=a.effects;break}}for(let h=0;h<this.effects.length;h++)this.effects[h].interpolate(s[h],r[h],n)}};function f(t){const e=(0,c.q)(t)||[];return function(t){const e=t[0];return!!e&&"type"in e}(e)?[{scale:u,effects:e}]:e}function g(t,e,i){return!t[0]?.effects||!e[0]?.effects||!((t[0]?.scale===u||e[0]?.scale===u)&&(t.length>1||e.length>1)&&i<=0)&&(0,d.mj)(t[0].effects,e[0].effects)}function _(t,e,i){return t+(e-t)*i}(0,s._)([(0,o.MZ)()],p.prototype,"_to",void 0),(0,s._)([(0,o.MZ)()],p.prototype,"duration",void 0),(0,s._)([(0,o.MZ)({value:""})],p.prototype,"effect",null),(0,s._)([(0,o.MZ)({readOnly:!0})],p.prototype,"effects",void 0),(0,s._)([(0,o.MZ)({readOnly:!0})],p.prototype,"final",null),(0,s._)([(0,o.MZ)({readOnly:!0})],p.prototype,"hasEffects",null),(0,s._)([(0,o.MZ)({value:0})],p.prototype,"scale",null),(0,s._)([(0,o.MZ)({readOnly:!0})],p.prototype,"transitioning",null),p=(0,s._)([(0,l.$)("esri.layers.effects.EffectView")],p)},21904:(t,e,i)=>{i.d(e,{m:()=>o});var s=i(99486),r=i(99702),n=i(85827),h=i(17400),a=i(8794);class o extends a.q{constructor(){super(...arguments),this._childrenSet=new Set,this._needsSort=!1,this._children=[],this._childrenObservable=new r.I,this._effectView=null,this._highlightGradient=null}get blendMode(){return this._blendMode}set blendMode(t){this._blendMode=t,this.requestRender()}get children(){return(0,s.gc)(this._childrenObservable),this._children}get clips(){return this._clips}set clips(t){this._clips=t,this.children.forEach((e=>e.clips=t))}get computedEffects(){return this._effectView?.effects??null}get effect(){return this._effectView?.effect??""}set effect(t){(this._effectView||t)&&(this._effectView||(this._effectView=new h.$B,this.addTransitionable(this._effectView)),this._effectView.effect=t,this.requestRender())}get highlightGradient(){return this._highlightGradient}set highlightGradient(t){this._highlightGradient=t,this.requestRender()}get hasBlending(){return!!this.blendMode}get hasHighlight(){return this.children.some((t=>t.hasHighlight))}get hasLabels(){return this.children.some((t=>t.hasLabels))}get requiresDedicatedFBO(){return this.children.some((t=>"blendMode"in t&&t.blendMode&&"normal"!==t.blendMode))}get isReady(){return this.children.every((t=>t.isReady))}get sortFunction(){return this._sortFunction}set sortFunction(t){this._sortFunction=t,t&&(this._needsSort=!0)}doRender(t){const e=this.createRenderParams(t),{painter:i}=e;i.beforeRenderLayer(e,this._clips?.length?255:0,this.computedOpacity),this.renderChildren(e),i.afterRenderLayer(e,this.computedOpacity)}addChild(t){return this.addChildAt(t,this.children.length)}addChildAt(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.children.length;if(!t)return t;if(this.contains(t))return t;this._needsSort=!0;const i=t.parent;return i&&i!==this&&i.removeChild(t),e>=this.children.length?this.children.push(t):this.children.splice(e,0,t),this._childrenSet.add(t),t.parent=this,t.stage=this.stage,this!==this.stage&&(t.clips=this.clips),this.requestRender(),this._childrenObservable.notify(),t}contains(t){return(0,s.gc)(this._childrenObservable),this._childrenSet.has(t)}removeAllChildren(){this._childrenSet.clear(),this._needsSort=!0;for(const t of this.children)this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null;this.children.length=0,this._childrenObservable.notify()}removeChild(t){return this.contains(t)?this.removeChildAt(this.children.indexOf(t)):t}removeChildAt(t){if(t<0||t>=this.children.length)return null;this._needsSort=!0;const e=this.children.splice(t,1)[0];return this._childrenSet.delete(e),this!==this.stage&&(e.clips=null),e.stage=null,e.parent=null,this._childrenObservable.notify(),e}beforeRender(t){super.beforeRender(t),this.sortFunction&&this._needsSort&&(this.children.sort(this.sortFunction),this._needsSort=!1,this._childrenObservable.notify());for(const e of this.children)e.beforeRender(t)}afterRender(t){super.afterRender(t);for(const e of this.children)e.afterRender(t)}_createTransforms(){return{displayViewScreenMat3:(0,n.vt)()}}onAttach(){super.onAttach();const t=this.stage;for(const e of this.children)e.stage=t}onDetach(){super.onDetach();for(const t of this.children)t.stage=null}renderChildren(t){for(const e of this.children)e.processRender(t)}createRenderParams(t){return{...t,requireFBO:this.requiresDedicatedFBO,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:t.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition,highlightGradient:this._highlightGradient||t.highlightGradient}}isTransitioning(){return super.isTransitioning()||this.children.some((t=>t.transitioning))}}},23246:(t,e,i)=>{i.d(e,{e:()=>Z});var s=i(35143),r=i(94643),n=i(3975),h=i(50076),a=i(68134),o=i(46053),l=(i(81806),i(76460),i(47249),i(85842));var c=i(21904),d=i(91967),u=i(87663),p=i(67993);let f=class extends d.A{constructor(){super(...arguments),this._idToCounters=new p.A}get size(){return this._idToCounters.size}get objectIds(){return this._idToCounters.keys()}get highlightNamesByObjectId(){return function*(t){for(const[e,i]of t)yield[e,i.keys()]}(this._idToCounters)}add(t,e){let i=!1;for(const s of t){const t=(0,u.tE)(this._idToCounters,s,(()=>(i=!0,new Map))),r=t.get(e)??0;r||(i=!0),t.set(e,r+1)}return i}delete(t,e){let i=!1;for(const s of t){const t=this._idToCounters.get(s);if(!t)continue;let r=t.get(e);null!=r&&(r--,r>0?t.set(e,r):(t.delete(e),i=!0),0===t.size&&(this._idToCounters.delete(s),i=!0))}return i}};f=(0,s._)([(0,l.$)("esri.views.2d.layers.support.HighlightCounter")],f);var g,_=i(13692),y=i(37363),v=i(97001);let m=g=class extends v.A{constructor(t){super(t),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new g({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,s._)([(0,o.MZ)({type:[Number,String],json:{write:!0}})],m.prototype,"left",void 0),(0,s._)([(0,o.MZ)({type:[Number,String],json:{write:!0}})],m.prototype,"right",void 0),(0,s._)([(0,o.MZ)({type:[Number,String],json:{write:!0}})],m.prototype,"top",void 0),(0,s._)([(0,o.MZ)({type:[Number,String],json:{write:!0}})],m.prototype,"bottom",void 0),m=g=(0,s._)([(0,l.$)("esri.views.layers.support.ClipRect")],m);const b=m;var R=i(47266);let w=class extends v.A{constructor(t){super(t),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,s._)([(0,o.MZ)({type:[[[Number]]],json:{write:!0}})],w.prototype,"path",void 0),w=(0,s._)([(0,l.$)("esri.views.layers.support.Path")],w);const T=w;var M=i(30363),O=i(90992);const S=r.A.ofType({key:"type",base:null,typeMap:{rect:b,path:T,geometry:R.A}}),A=new(r.A.ofType(M.A)),Z=t=>{let e=class extends t{constructor(){super(...arguments),this._highlightCounter=new f,this.attached=!1,this.clips=new S,this.highlights=null,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this._visibleAtCurrentScale=!0}initialize(){const t=this.view?.spatialReferenceLocked??!0,e=this.view?.spatialReference;e&&t&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new h.A("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new c.m),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,a.wB)((()=>this.suspended),(t=>{this.container&&(this.container.visible=!t)}),a.pc),(0,a.wB)((()=>this.updateSuspended),(t=>{this.view&&!t&&this.updateRequested&&this.view.requestUpdate()}),a.pc),(0,a.wB)((()=>this.layer?.opacity??1),(t=>{this.container&&(this.container.opacity=t)}),a.pc),(0,a.wB)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(t=>{this.container&&(this.container.blendMode=t)}),a.pc),(0,a.wB)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(t=>{this.container&&(this.container.effect=t)}),a.pc),(0,a.wB)((()=>this._mergedHighlights.items.map((t=>({name:t.name,options:{fillColor:t.color,haloColor:t.haloColor,fillOpacity:t.fillOpacity,haloOpacity:t.haloOpacity,haloWidth:t.haloWidth,haloBlur:t.haloBlur}})))),(()=>{this.container.highlightGradient=(0,_.u4)(this.container.highlightGradient,this._mergedHighlights.items)}),a.pc),(0,a.wB)((()=>this._mergedHighlights.items.map((t=>t.name))),(()=>{this._processHighlight()})),(0,a.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}),a.pc),(0,a.wB)((()=>({scale:this.view?.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null})),(t=>{let{scale:e,scaleRange:i}=t;const s=(0,O.E5)(i,e);s!==this._visibleAtCurrentScale&&(this._visibleAtCurrentScale=s)}),a.pc)],"constructor"),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then((t=>{t===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get highlightOptions(){return(0,y.a)(this)}set highlightOptions(t){(0,y.o)(this,t)}get hasHighlight(){return this._highlightCounter.size>0}get _mergedHighlights(){if(!this.view)return A;if(!this.highlights)return this.view.highlights;const t=this.view.highlights.clone();for(const e of this.highlights){const i=t.find((t=>t.name===e.name));i&&i.assignFrom(e)}return t}get highlightIds(){return Array.from(this._highlightCounter.objectIds)}get scheduler(){return this.view.scheduler}get spatialReferenceSupported(){const t=this.view?.spatialReference;return null==t||this.supportsSpatialReference(t)}get updating(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this._updatingHandles?.updating||this.container.transitioning)}get visibleAtCurrentScale(){return this._visibleAtCurrentScale}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.updateSuspended||this.view.requestUpdate())}processUpdate(t){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",t),this.updateRequested&&!this.updateSuspended&&(this.updateRequested=!1,this.update(t))):this.updateRequested=!1}hitTest(t,e){return Promise.resolve(null)}supportsSpatialReference(t){return!0}canResume(){if(!this.spatialReferenceSupported)return!1;switch(this.layer?.type){case"link-chart":case"knowledge-graph-sublayer":case"graphics":break;default:if(function(t){return null!=t&&"object"==typeof t&&"2d"===t.type&&"linkchart"===t.view2dType}(this.view)&&!this.view.inGeographicLayout)return!1}return!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const t=super.getSuspendInfo(),e=!this.spatialReferenceSupported;return e&&(t.spatialReferenceNotSupported=e),t}addAttachHandles(t){this.addHandles(t,"attach")}_addHighlights(t,e){this._highlightCounter.add(t,e)&&this._processHighlight()}_removeHighlights(t,e){this._highlightCounter.delete(t,e)&&this._processHighlight()}_processHighlight(){}_getHighlights(){const t=[];for(const[e,i]of this._highlightCounter.highlightNamesByObjectId){const s=this._getHighlightBits(i);t.push({objectId:e,highlightFlags:s})}return t}_getHighlightBits(t){const e=new Set(t);let i=1,s=0;if(!this.view)return 0;const r=this._mergedHighlights;for(const{name:n}of r)e.delete(n)&&(s=i),i<<=1;return s}};return(0,s._)([(0,o.MZ)()],e.prototype,"attached",void 0),(0,s._)([(0,o.MZ)({type:S,set(t){const e=(0,n.V)(t,this._get("clips"),S);this._set("clips",e)}})],e.prototype,"clips",void 0),(0,s._)([(0,o.MZ)()],e.prototype,"container",void 0),(0,s._)([(0,o.MZ)({type:M.A})],e.prototype,"highlightOptions",null),(0,s._)([(0,o.MZ)({type:r.A.ofType(M.A)})],e.prototype,"highlights",void 0),(0,s._)([(0,o.MZ)()],e.prototype,"_mergedHighlights",null),(0,s._)([(0,o.MZ)()],e.prototype,"moving",void 0),(0,s._)([(0,o.MZ)({readOnly:!0})],e.prototype,"spatialReferenceSupported",null),(0,s._)([(0,o.MZ)({readOnly:!0})],e.prototype,"updateParameters",void 0),(0,s._)([(0,o.MZ)()],e.prototype,"updateRequested",void 0),(0,s._)([(0,o.MZ)()],e.prototype,"updating",null),(0,s._)([(0,o.MZ)()],e.prototype,"view",void 0),(0,s._)([(0,o.MZ)()],e.prototype,"_visibleAtCurrentScale",void 0),(0,s._)([(0,o.MZ)({readOnly:!0})],e.prototype,"visibleAtCurrentScale",null),e=(0,s._)([(0,l.$)("esri.views.2d.layers.LayerView2D")],e),e}},47266:(t,e,i)=>{i.d(e,{A:()=>f});var s,r=i(35143),n=i(46053),h=(i(81806),i(76460),i(47249),i(85842)),a=i(76797),o=i(89189),l=i(65215),c=i(19902),d=i(97001);const u={base:o.A,key:"type",typeMap:{extent:a.A,polygon:l.A}};let p=s=class extends d.A{constructor(t){super(t),this.type="geometry",this.geometry=null}clone(){return new s({geometry:this.geometry?.clone()??null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,r._)([(0,n.MZ)({types:u,json:{read:c.rS,write:!0}})],p.prototype,"geometry",void 0),p=s=(0,r._)([(0,h.$)("esri.views.layers.support.Geometry")],p);const f=p},81447:(t,e,i)=>{i.d(e,{A:()=>l});var s=i(35143),r=i(91967),n=i(81806),h=i(50346),a=i(46053),o=(i(76460),i(47249),i(85842));let l=class extends r.A{constructor(t){super(t),this.computedOpacity=1,this.computedVisible=!0,this.opacity=1,this.visible=!0,this._fadeOutResolver=null,this._fadeInResolver=null}get transitioning(){return(this._fadeOutResolver||!this.visible?0:this.opacity)!==this.computedOpacity}endTransition(){this._fadeInResolver?.(),this._fadeOutResolver?.(),this._fadeInResolver=this._fadeOutResolver=null,this.computedOpacity=this.visible?this.opacity:0}fadeIn(){return this._fadeInResolver||(this.opacity=1,this.computedOpacity=0,this._fadeOutResolver?.(),this._fadeOutResolver=null,this._fadeInResolver=(0,h.Tw)()),this._fadeInResolver.promise}fadeOut(){return this._fadeOutResolver||(this.opacity=0,this._fadeInResolver?.(),this._fadeInResolver=null,this._fadeOutResolver=(0,h.Tw)()),this._fadeOutResolver.promise}transitionStep(t,e){const i=(0,n.A)("mapview-transitions-duration"),s=i?1/i:0;if(0===s)this.computedOpacity=this.opacity,this.computedVisible=this.visible;else{const e=this._fadeOutResolver||!this.visible?0:this.opacity,i=this.computedOpacity;if(i===e)this.computedVisible=this.visible;else{const r=t*s;this.computedOpacity=i>e?Math.max(e,i-r):Math.min(e,i+r),this.computedVisible=this.computedOpacity>0}}this.transitioning||(this._fadeInResolver?.(),this._fadeOutResolver?.(),this._fadeOutResolver=this._fadeInResolver=null)}};(0,s._)([(0,a.MZ)()],l.prototype,"computedOpacity",void 0),(0,s._)([(0,a.MZ)()],l.prototype,"computedVisible",void 0),(0,s._)([(0,a.MZ)()],l.prototype,"opacity",void 0),(0,s._)([(0,a.MZ)()],l.prototype,"visible",void 0),(0,s._)([(0,a.MZ)()],l.prototype,"transitioning",null),(0,s._)([(0,a.MZ)()],l.prototype,"_fadeOutResolver",void 0),(0,s._)([(0,a.MZ)()],l.prototype,"_fadeInResolver",void 0),l=(0,s._)([(0,o.$)("esri.views.2d.engine.transitions.FadeTransition")],l)},90992:(t,e,i)=>{i.d(e,{E5:()=>n,JU:()=>r,Of:()=>s,g7:()=>h});i(50076);function s(t){return t&&"function"==typeof t.highlight}function r(t,e,i){return null==t||t>=i&&(0===e||t<=e)}function n(t,e){if(e&&t){const{minScale:i,maxScale:s}=t;if(function(t,e){return null!=t&&t>0||null!=e&&e>0}(i,s))return r(e,i,s)}return!0}function h(t){return!t?.minScale||!t.maxScale||t.minScale>=t.maxScale}},91196:(t,e,i)=>{i.d(e,{A:()=>g});var s=i(35143),r=i(91967),n=i(54099),h=i(5632),a=i(76460),o=i(30726),l=i(91291),c=i(46053),d=(i(81806),i(47249),i(85842)),u=i(19451),p=i(90992);let f=class extends(h.A.IdentifiableMixin(l.A.EsriPromiseMixin(n.A.EventedMixin(r.A)))){get spatialReferenceSupported(){return!0}constructor(t){super(t),this._updatingHandles=new u.U,this.layer=null,this.parent=null}initialize(){this.when().catch((t=>{if("layerview:create-error"!==t.name){const e=this.layer&&this.layer.id||"no id",i=this.layer?.title||"no title";a.A.getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${e}')`,t)}}))}destroy(){this._updatingHandles=(0,o.pR)(this._updatingHandles)}get fullOpacity(){return(this.layer?.opacity??1)*(this.parent?.fullOpacity??1)}get suspended(){return this.destroyed||!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this._updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get updateSuspended(){return this.suspended}get visible(){return!0===this.layer?.visible}set visible(t){this._overrideIfSome("visible",t)}get visibleAtCurrentScale(){return!0}get visibleAtCurrentTimeExtent(){const t=this.view.timeExtent,e=this.layer?.visibilityTimeExtent;return!t||!e||!t.intersection(e).isEmpty}canResume(){const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return this.visible&&this.layer?.loaded&&this.parent&&!this.parent.suspended&&this.view?.ready&&(0,p.g7)(t)&&this.visibleAtCurrentScale&&this.visibleAtCurrentTimeExtent||!1}getSuspendInfo(){const t=this.parent?.suspended?this.parent.suspendInfo:{};this.view?.ready||(t.viewNotReady=!0),this.layer&&this.layer.loaded||(t.layerNotLoaded=!0);const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return(0,p.g7)(e)&&this.visibleAtCurrentScale||(t.outsideScaleRange=!0),this.visibleAtCurrentTimeExtent||(t.outsideVisibilityTimeExtent=!0),this.visible||(t.layerInvisible=!0),t}isUpdating(){return!1}};(0,s._)([(0,c.MZ)({readOnly:!0})],f.prototype,"spatialReferenceSupported",null),(0,s._)([(0,c.MZ)()],f.prototype,"view",void 0),(0,s._)([(0,c.MZ)()],f.prototype,"fullOpacity",null),(0,s._)([(0,c.MZ)()],f.prototype,"layer",void 0),(0,s._)([(0,c.MZ)()],f.prototype,"parent",void 0),(0,s._)([(0,c.MZ)({readOnly:!0})],f.prototype,"suspended",null),(0,s._)([(0,c.MZ)({readOnly:!0})],f.prototype,"suspendInfo",null),(0,s._)([(0,c.MZ)({readOnly:!0})],f.prototype,"legendEnabled",null),(0,s._)([(0,c.MZ)({type:Boolean,readOnly:!0})],f.prototype,"updating",null),(0,s._)([(0,c.MZ)({readOnly:!0})],f.prototype,"updatingProgress",null),(0,s._)([(0,c.MZ)()],f.prototype,"updateSuspended",null),(0,s._)([(0,c.MZ)()],f.prototype,"visible",null),(0,s._)([(0,c.MZ)({readOnly:!0})],f.prototype,"visibleAtCurrentScale",null),(0,s._)([(0,c.MZ)({readOnly:!0})],f.prototype,"visibleAtCurrentTimeExtent",null),f=(0,s._)([(0,d.$)("esri.views.layers.LayerView")],f);const g=f},97001:(t,e,i)=>{i.d(e,{A:()=>o});var s=i(35143),r=i(42553),n=i(46053),h=(i(81806),i(76460),i(47249),i(85842));let a=class extends r.A{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,s._)([(0,n.MZ)({readOnly:!0})],a.prototype,"version",null),a=(0,s._)([(0,h.$)("esri.views.layers.support.ClipArea")],a);const o=a}}]);
//# sourceMappingURL=1273.3d9cd0b1.chunk.js.map