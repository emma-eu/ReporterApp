"use strict";(self.webpackChunkfeedback_map=self.webpackChunkfeedback_map||[]).push([[8532],{73582:(e,t,i)=>{i.d(t,{hr:()=>r,ie:()=>h,uC:()=>l,wf:()=>a});var n=i(15941);class r{constructor(e,t){this.min=e,this.max=t,this.range=t-e}normalize(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return s(this.range,this.min,this.max,e,t,i)}clamp(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(0,n.qE)(e-t,this.min,this.max)+t}monotonic(e,t,i){return e<t?t:t+o(this.range,e-t,i)}minimalMonotonic(e,t,i){return s(this.range,e,e+this.range,t,i)}center(e,t,i){return t=this.monotonic(e,t,i),this.normalize((e+t)/2,i)}diff(e,t,i){return this.monotonic(e,t,i)-e}shortestSignedDiff(e,t){e=this.normalize(e);const i=(t=this.normalize(t))-e,n=t<e?this.minimalMonotonic(e,t)-e:t-this.minimalMonotonic(t,e);return Math.abs(i)<Math.abs(n)?i:n}contains(e,t,i){return t=this.minimalMonotonic(e,t),(i=this.minimalMonotonic(e,i))>e&&i<t}}function s(e,t,i,n){let r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,s=arguments.length>5&&void 0!==arguments[5]&&arguments[5];return(n-=r)<t?n+=o(e,t-n):n>i&&(n-=o(e,n-i)),s&&n===i&&(n=t),n+r}function o(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return Math.ceil((t-i)/e)*e+i}const l=new r(0,2*Math.PI),a=new r(-Math.PI,Math.PI),h=new r(0,360)},78532:(e,t,i)=>{i.r(t),i.d(t,{default:()=>F});var n=i(35143),r=i(94417),s=i(69098),o=i(73582),l=i(42553),a=i(30726),h=i(46053),u=i(21403),d=(i(81806),i(47249),i(85842)),p=i(40565),c=i(19247);let w=class extends(l.A.JSONSupportMixin(s.A)){constructor(e){super(e),this.observer=null,this.farDistance=1e3,this.heading=0,this.tilt=90,this.horizontalFieldOfView=45,this.verticalFieldOfView=45,this.feature=null}isValid(){return null!=this.observer&&this.farDistance>0}equals(e){return(0,a.CM)(this.observer,e.observer)&&this.farDistance===e.farDistance&&this.heading===e.heading&&this.tilt===e.tilt&&this.horizontalFieldOfView===e.horizontalFieldOfView&&this.verticalFieldOfView===e.verticalFieldOfView&&(0,r.xH)(this.feature,e.feature)}};(0,n._)([(0,h.MZ)({type:c.A,json:{write:{isRequired:!0}}})],w.prototype,"observer",void 0),(0,n._)([(0,h.MZ)({type:Number,nonNullable:!0,range:{min:0},json:{write:{isRequired:!0}}})],w.prototype,"farDistance",void 0),(0,n._)([(0,h.MZ)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),(0,u.w)((e=>o.ie.normalize((0,p.GB)(e),void 0,!0)))],w.prototype,"heading",void 0),(0,n._)([(0,h.MZ)({type:Number,nonNullable:!0,range:{min:0,max:180},json:{write:{isRequired:!0}}})],w.prototype,"tilt",void 0),(0,n._)([(0,h.MZ)({type:Number,nonNullable:!0,range:{min:0,max:360},json:{write:{isRequired:!0}}})],w.prototype,"horizontalFieldOfView",void 0),(0,n._)([(0,h.MZ)({type:Number,nonNullable:!0,range:{min:0,max:180},json:{write:{isRequired:!0}}})],w.prototype,"verticalFieldOfView",void 0),(0,n._)([(0,h.MZ)(r.N1)],w.prototype,"feature",void 0),(0,n._)([(0,h.MZ)({json:{read:!1}})],w.prototype,"isValid",null),w=(0,n._)([(0,d.$)("esri.analysis.Viewshed")],w);const m=w;var y=i(95085),v=i(94643),f=i(3975),g=i(15941),M=i(68134),_=(i(76460),i(76797)),x=i(9624);const b=v.A.ofType(m);let O=class extends y.A{constructor(e){super(e),this.type="viewshed",this._extent=null}initialize(){this.addHandles((0,M.wB)((()=>this._computeExtent()),(e=>{null==e.pending&&(this._extent=e.extent)}),M.pc))}get viewsheds(){return this._get("viewsheds")||new b}set viewsheds(e){this._set("viewsheds",(0,f.V)(e,this.viewsheds,b))}get spatialReference(){for(const e of this.viewsheds)if(null!=e.observer)return e.observer.spatialReference;return null}get extent(){return this._extent}get requiredPropertiesForEditing(){return this.viewsheds.items.map((e=>{let{observer:t}=e;return t}))}async waitComputeExtent(){const e=this._computeExtent();null!=e.pending&&await e.pending}_computeExtent(){const{spatialReference:e}=this;if(null==e)return{pending:null,extent:null};const t=this.viewsheds.filter((e=>null!=e.observer)),i=t.map((e=>e.observer)).toArray(),n=(0,x.projectOrLoadMany)(i,e);return null!=n.pending?{pending:n.pending,extent:null}:{pending:null,extent:n.geometries.map(((e,i)=>{const n=t.at(i);return null!=e&&null!=n?this._computeViewshedExtent(this.viewsheds.at(i),e):null})).filter((e=>null!=e)).reduce(((e,t)=>function(e,t){return null==e?t:null==t?e:e.union(t)}(e,t)),null)}}_computeViewshedExtent(e,t){const{farDistance:i,heading:n,tilt:r,horizontalFieldOfView:s,verticalFieldOfView:l}=e,{spatialReference:a}=t,h=s/2,u=l/2,d=i/a.metersPerUnit,p=[o.ie.normalize(n-h),n,o.ie.normalize(n+h)],c=_.A.fromPoint(t),w=e=>{const t=p.map((t=>o.ie.normalize(t-e)));if(t[0]>t[2]||360===s)return d;const i=t.map((e=>Math.abs(e>180?360-e:e))).reduce(((e,t)=>e>t?t:e));return i>90?0:d*Math.cos((0,g.kU)(i))};c.xmax+=w(90),c.xmin-=w(-90),c.ymax+=w(0),c.ymin-=w(180);const m=t.z;if(null!=m){let e=m,t=m;const n=r-90,s=(0,g.qE)(n+u,-90,90),o=(0,g.qE)(n-u,-90,90),l=a?.isGeographic?i:d;e+=l*Z(s),t+=l*Z(o);const p=V(u)*l,w=Z(n)*p*(1-V(h));r<90&&(e-=w),r>90&&(t-=w),c.zmax=Math.max(e,m),c.zmin=Math.min(t,m)}return c}clear(){this.viewsheds.removeAll()}};function V(e){return Math.cos((0,g.kU)(e))}function Z(e){return Math.sin((0,g.kU)(e))}(0,n._)([(0,h.MZ)({type:["viewshed"]})],O.prototype,"type",void 0),(0,n._)([(0,h.MZ)({cast:f.H,type:b,nonNullable:!0})],O.prototype,"viewsheds",null),(0,n._)([(0,h.MZ)({readOnly:!0})],O.prototype,"spatialReference",null),(0,n._)([(0,h.MZ)()],O.prototype,"_extent",void 0),(0,n._)([(0,h.MZ)({readOnly:!0})],O.prototype,"extent",null),(0,n._)([(0,h.MZ)({readOnly:!0})],O.prototype,"requiredPropertiesForEditing",null),O=(0,n._)([(0,d.$)("esri.analysis.ViewshedAnalysis")],O);const z=O;var N=i(77717),R=i(17707),E=i(25515),q=i(11270);let A=class extends((0,q.q)((0,N.P)(E.A))){constructor(e){super(e),this.type="viewshed",this.operationalLayerType="ViewshedLayer",this.source=new z,this.opacity=1}initialize(){this.addHandles((0,M.wB)((()=>this.source),((e,t)=>{null!=t&&t.parent===this&&(t.parent=null),null!=e&&(e.parent=this)}),M.pc))}async load(){return this.addResolvingPromise(this.source.waitComputeExtent()),this}get spatialReference(){return this.source.spatialReference}get fullExtent(){return this.source.extent}releaseAnalysis(e){this.source===e&&(this.source=new z)}get analysis(){return this.source}set analysis(e){this.source=e}get viewsheds(){return this.source.viewsheds}set viewsheds(e){this.source.viewsheds=e}writeViewsheds(e,t,i,n){t.viewsheds=e.filter((e=>e.isValid())).map((e=>e.toJSON(n))).toJSON()}};(0,n._)([(0,h.MZ)({json:{read:!1},readOnly:!0})],A.prototype,"type",void 0),(0,n._)([(0,h.MZ)({type:["ViewshedLayer"]})],A.prototype,"operationalLayerType",void 0),(0,n._)([(0,h.MZ)({type:z,nonNullable:!0})],A.prototype,"source",void 0),(0,n._)([(0,h.MZ)({readOnly:!0})],A.prototype,"spatialReference",null),(0,n._)([(0,h.MZ)({readOnly:!0})],A.prototype,"fullExtent",null),(0,n._)([(0,h.MZ)({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],A.prototype,"opacity",void 0),(0,n._)([(0,h.MZ)({type:["show","hide"]})],A.prototype,"listMode",void 0),(0,n._)([(0,h.MZ)({type:v.A.ofType(m),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],A.prototype,"viewsheds",null),(0,n._)([(0,R.K)("web-scene","viewsheds")],A.prototype,"writeViewsheds",null),A=(0,n._)([(0,d.$)("esri.layers.ViewshedLayer")],A);const F=A}}]);
//# sourceMappingURL=8532.0e1b1860.chunk.js.map