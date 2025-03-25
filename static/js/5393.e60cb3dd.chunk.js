"use strict";(self.webpackChunkfeedback_map=self.webpackChunkfeedback_map||[]).push([[5393],{58272:(e,t,r)=>{r.d(t,{X:()=>n,b:()=>i});const n=50,i=5},68002:(e,t,r)=>{r.d(t,{X_:()=>o,i1:()=>a,oW:()=>l,zx:()=>c});var n=r(15941),i=r(31633);const s=96;function o(e,t){const r=t||e.extent,n=e.width,o=(0,i.GA)(r?.spatialReference);return r&&n?r.width/n*o*i.dy*s:0}function a(e,t){return e/((0,i.GA)(t)*i.dy*s)}function c(e,t,r){return function(e,t){return 0===t||(0,n.Sp)(e,t)||e<t}(e,t)&&function(e,t){return 0===t||(0,n.Sp)(e,t)||e>t}(e,r)}function l(e,t){return(0,n.Sp)(e,t)?0:(e||Number.POSITIVE_INFINITY)>(t||Number.POSITIVE_INFINITY)?1:-1}},86524:(e,t,r)=>{r.d(t,{Ge:()=>d,WT:()=>f});var n=r(31633),i=r(19247),s=r(23701),o=r(13312),a=r(7137),c=r(1438),l=r(80963),u=r(45417),p=r(58272);function d(e,t,r){const n=1===e?10:e;return n**(r?Math.round(function(e,t){return Math.log(e)/Math.log(t)}(p.X/t,n)):0)}function f(e,t,r){const p="number"==typeof e?null:e,d=r??p?.spatialReference;if(null==d||!(0,l.fn)(d)||function(e){const{isGeographic:t,isWebMercator:r}=e;return!t&&!r}(d))return(0,n.GA)(d);let f=p?.x??e,h=p?.y??t;const g=1/Math.sqrt(2);let M=f+g,S=h+g;const{isWebMercator:v,isGeographic:y}=d;let w=y&&!(0,a.TT)(d)?o.A.WGS84:d;if(v){let e=new i.A({x:f,y:h,spatialReference:d});(0,u.ci)(e,!0,e),f=e.x,h=e.y,e=new i.A({x:M,y:S,spatialReference:d}),(0,u.ci)(e,!0,e),M=e.x,S=e.y,w=o.A.WGS84}const P=new s.A({paths:[[[f,h],[M,S]]],spatialReference:w}),R=(0,c.XX)(P,10);let x;try{[x]=(0,a.l1)([R],"meters")}catch{return(0,n.GA)(d)}return x}},95393:(e,t,r)=>{r.d(t,{GridSnappingEngine:()=>w});var n=r(35143),i=r(91967),s=r(76460),o=r(15941),a=r(31633),c=r(46053),l=(r(81806),r(47249),r(85842)),u=r(20664),p=r(9624),d=r(1438),f=r(68002),h=r(58272),g=r(86524),M=r(23862),S=r(70330),v=r(90836),y=r(45633);let w=class extends i.A{constructor(e){super(e),this.options=null}destroy(){this._set("options",null)}get grid(){return this.view.grid}get effectiveViewRotation(){return this.grid?.rotateWithMap?0:(0,o.kU)(this.view.rotation??0)}get gridRotation(){return(0,o.kU)(this.grid?.rotation??0)}get gridCenter(){const{spatialReference:e,grid:t}=this;if(!t||!e||!(0,p.isLoadedOrLoadFor)(t.center.spatialReference,e))return null;try{const r=(0,p.project)(t.center,e),n=e.isWrappable&&null!=this.view?.center?(0,d.O7)(r.x,this.view.center.x,e):r.x;return(0,M.vt)(n,r.y,r.z)}catch(r){return s.A.getLogger(this).errorOnce("Grid Snapping - Failed to project grid center.",r),null}}get offsetScaleFactor(){const{pixelsPerStride:e,grid:t}=this;if(!t||!e)return 1;const{majorLineInterval:r,dynamicScaling:n}=t;return r<1?null:(0,g.Ge)(r,e,n)}get spatialReference(){return this.view.spatialReference}get gridMetersPerStride(){const{grid:e}=this;return e?(0,a.oU)(e.spacing,e.units,"meters"):null}get viewMetersPerPixel(){const{viewMetersPerSRUnit:e}=this;return null==e?null:e*(0,f.i1)(this.view.scale,this.view.spatialReference)}get viewMetersPerSRUnit(){const{spatialReference:e}=this.view;return this.gridCenter?(0,g.WT)(this.gridCenter[0],this.gridCenter[1],e):null}get pixelsPerStride(){const{gridMetersPerStride:e,viewMetersPerPixel:t}=this;return t&&e?e/t:null}get updating(){return null!=this.grid&&null!=this.spatialReference&&null==this.viewMetersPerSRUnit}async fetchCandidates(e,t,r){const{options:n,view:i}=this;if(!n?.effectiveGridEnabled||!i.grid||r.feature?.attributes&&S.io in r.feature.attributes)return[];const s=r.coordinateHelper.arrayToPoint(e),o=n.distance*("touch"===r.pointer?n.touchSensitivityMultiplier:1);return this.fetchCandidatesSync(s,o)}fetchCandidatesSync(e,t){const r=[],{grid:n,effectiveViewRotation:i,gridRotation:s,gridCenter:o,viewMetersPerPixel:a,viewMetersPerSRUnit:c,offsetScaleFactor:l,spatialReference:u,gridMetersPerStride:d,pixelsPerStride:f}=this;if(!(n&&a&&c&&o&&u&&l&&d&&f))return r;if(!n.dynamicScaling&&f<h.b)return r;if(!(0,p.isLoadedOrLoadFor)(e.spatialReference,u))return r;const g=(0,p.project)(e,u),S=(0,M.vt)(g.x,g.y,g.z),w=P(S,-s,o,-i),b=d/c*l,G=R(w,b,o),{shouldSnapX:Z,shouldSnapY:A}=x(G,w,t,a,c);if(!Z&&!A)return[];const C=(0,M.vt)((Z?G:w)[0],(A?G:w)[1]),I=P(C,s,o,i),m=P(G,s,o,i);if(A){const e=_(G,w,b,"y"),t=P(e,s,o,i);r.push(new y.o({lineStart:m,lineEnd:t,targetPoint:I,isDraped:!1}))}if(Z){const e=_(G,w,b,"x"),t=P(e,s,o,i);r.push(new y.o({lineStart:m,lineEnd:t,targetPoint:I,isDraped:!1}))}return Z&&A&&r.push(new v.N(I,r[0],r[1],!1)),r}};(0,n._)([(0,c.MZ)({constructOnly:!0})],w.prototype,"view",void 0),(0,n._)([(0,c.MZ)()],w.prototype,"options",void 0),(0,n._)([(0,c.MZ)()],w.prototype,"grid",null),(0,n._)([(0,c.MZ)()],w.prototype,"effectiveViewRotation",null),(0,n._)([(0,c.MZ)()],w.prototype,"gridRotation",null),(0,n._)([(0,c.MZ)()],w.prototype,"gridCenter",null),(0,n._)([(0,c.MZ)()],w.prototype,"offsetScaleFactor",null),(0,n._)([(0,c.MZ)()],w.prototype,"spatialReference",null),(0,n._)([(0,c.MZ)()],w.prototype,"gridMetersPerStride",null),(0,n._)([(0,c.MZ)()],w.prototype,"viewMetersPerPixel",null),(0,n._)([(0,c.MZ)()],w.prototype,"viewMetersPerSRUnit",null),(0,n._)([(0,c.MZ)()],w.prototype,"pixelsPerStride",null),(0,n._)([(0,c.MZ)()],w.prototype,"updating",null),w=(0,n._)([(0,l.$)("esri.views.interactive.snapping.GridSnappingEngine")],w);const P=(e,t,r,n)=>{const i=(0,M.Hh)(e[0],e[1],e[2]);return(0,u.L)(i,(0,u.L)(i,i,r,t),r,n)},R=(e,t,r)=>{const n=(e[0]-r[0])/t,i=(e[1]-r[1])/t,s=Math.trunc(n),o=Math.trunc(i),a=Math.round(n%1),c=Math.round(i%1),l=r[0]+(s+a)*t,u=r[1]+(o+c)*t;return(0,M.vt)(l,u)},x=(e,t,r,n,i)=>{if(n<=0)return{shouldSnapX:!1,shouldSnapY:!1};const s=(e[0]-t[0])/n,o=(e[1]-t[1])/n;return{shouldSnapX:Math.abs(s*i)<r,shouldSnapY:Math.abs(o*i)<r}},_=(e,t,r,n)=>{if("y"===n){const n=t[0]>e[0]?1:-1;return(0,M.vt)(e[0]+r*n,e[1])}const i=t[1]>e[1]?1:-1;return(0,M.vt)(e[0],e[1]+r*i)}}}]);
//# sourceMappingURL=5393.e60cb3dd.chunk.js.map