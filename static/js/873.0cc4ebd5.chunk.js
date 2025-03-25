"use strict";(self.webpackChunkfeedback_map=self.webpackChunkfeedback_map||[]).push([[873],{425:(e,t,i)=>{i.d(t,{W:()=>U});var r=i(76460),n=i(15941),s=i(76931),o=i(19555),a=i(20664),l=i(9392),c=i(55855),d=i(4763),p=i(44230),h=i(13927),u=i(48549),f=i(34981),m=i(61785),v=i(59696),g=i(45463),_=i(77730),S=i(86994),T=i(66470),y=i(93684),b=i(50125),O=i(14623),E=(i(81806),i(16506)),A=i(59246),R=i(72001),x=i(60322),C=i(96643),L=i(93345),D=i(57162);class I extends A.w{constructor(e,t){super(e,t,new E.$(O.R,(()=>i.e(1721).then(i.bind(i,61721)))),P),this.primitiveType=t.wireframe?L.WR.LINES:L.WR.TRIANGLE_STRIP}_makePipelineState(e,t){const{oitPass:i,output:r,hasOccludees:n,hasPolygonOffset:s}=e,o=i===R.Y.NONE,a=i===R.Y.FrontFace;return(0,D.Ey)({blending:(0,f.RN)(r)?(0,x.Yf)(i):null,depthTest:{func:(0,x.K_)(i)},depthWrite:(0,x.z5)(e),drawBuffers:r===f.V.Depth?{buffers:[L.Hr.NONE]}:(0,x.m6)(i,r),colorWrite:D.kn,stencilWrite:n?C.v0:null,stencilTest:n?t?C.a9:C.qh:null,polygonOffset:o||a?s?z:null:x.SE})}initializePipeline(e){if(e.occluder){const t=e.hasPolygonOffset?z:null;this._occluderPipelineTransparent=(0,D.Ey)({blending:D.Ky,polygonOffset:t,depthTest:C.sf,depthWrite:null,colorWrite:D.kn,stencilWrite:null,stencilTest:C.mK,drawBuffers:e.output===f.V.Depth?{buffers:[L.Hr.NONE]}:null}),this._occluderPipelineOpaque=(0,D.Ey)({blending:D.Ky,polygonOffset:t,depthTest:C.sf,depthWrite:null,colorWrite:D.kn,stencilWrite:C.r8,stencilTest:C.I$,drawBuffers:e.output===f.V.Depth?{buffers:[L.Hr.NONE]}:null}),this._occluderPipelineMaskWrite=(0,D.Ey)({blending:null,polygonOffset:t,depthTest:C.m,depthWrite:null,colorWrite:null,stencilWrite:C.v0,stencilTest:C.a9,drawBuffers:e.output===f.V.Depth?{buffers:[L.Hr.NONE]}:null})}return this._occludeePipeline=this._makePipelineState(e,!0),this._makePipelineState(e,!1)}getPipeline(e,t){if(e)return this._occludeePipeline;switch(t){case _.N.TRANSPARENT_OCCLUDER_MATERIAL:return this._occluderPipelineTransparent??super.getPipeline();case _.N.OCCLUDER_MATERIAL:return this._occluderPipelineOpaque??super.getPipeline();default:return this._occluderPipelineMaskWrite??super.getPipeline()}}}const z={factor:0,units:-4},P=new Map([[T.r.POSITION,0],[T.r.PREVPOSITION,1],[T.r.NEXTPOSITION,2],[T.r.SUBDIVISIONFACTOR,3],[T.r.UV0,4],[T.r.COLOR,5],[T.r.COLORFEATUREATTRIBUTE,5],[T.r.SIZE,6],[T.r.SIZEFEATUREATTRIBUTE,6],[T.r.OPACITYFEATUREATTRIBUTE,7],[T.r.OBJECTANDLAYERIDCOLOR,8]]);var N,w=i(46259),W=i(75569);!function(e){e[e.LEFT_JOIN_START=-2]="LEFT_JOIN_START",e[e.LEFT_JOIN_END=-1]="LEFT_JOIN_END",e[e.LEFT_CAP_START=-4]="LEFT_CAP_START",e[e.LEFT_CAP_END=-5]="LEFT_CAP_END",e[e.RIGHT_JOIN_START=2]="RIGHT_JOIN_START",e[e.RIGHT_JOIN_END=1]="RIGHT_JOIN_END",e[e.RIGHT_CAP_START=4]="RIGHT_CAP_START",e[e.RIGHT_CAP_END=5]="RIGHT_CAP_END"}(N||(N={}));class U extends g.im{constructor(e){super(e,M),this._configuration=new w.Q,this.vertexAttributeLocations=P,this.produces=new Map([[_.N.OPAQUE_MATERIAL,e=>(0,f.CL)(e)||(0,f.RN)(e)&&this.parameters.renderOccluded===g.m$.OccludeAndTransparentStencil],[_.N.OPAQUE_MATERIAL_WITHOUT_NORMALS,e=>(0,f.eh)(e)],[_.N.OCCLUDER_MATERIAL,e=>(0,f.T2)(e)&&this.parameters.renderOccluded===g.m$.OccludeAndTransparentStencil],[_.N.TRANSPARENT_OCCLUDER_MATERIAL,e=>(0,f.T2)(e)&&this.parameters.renderOccluded===g.m$.OccludeAndTransparentStencil],[_.N.TRANSPARENT_MATERIAL,e=>(0,f.RN)(e)&&this.parameters.writeDepth&&this.parameters.renderOccluded!==g.m$.OccludeAndTransparentStencil],[_.N.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,e=>(0,f.RN)(e)&&!this.parameters.writeDepth&&this.parameters.renderOccluded!==g.m$.OccludeAndTransparentStencil],[_.N.DRAPED_MATERIAL,e=>(0,f.i3)(e)]])}getConfiguration(e,t){this._configuration.output=e,this._configuration.oitPass=t.oitPass,this._configuration.draped=t.slot===_.N.DRAPED_MATERIAL;const i=null!=this.parameters.stipplePattern&&e!==f.V.Highlight;return this._configuration.stippleEnabled=i,this._configuration.stippleOffColorEnabled=i&&null!=this.parameters.stippleOffColor,this._configuration.stipplePreferContinuous=i&&this.parameters.stipplePreferContinuous,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.roundJoins="round"===this.parameters.join,this._configuration.capType=this.parameters.cap,this._configuration.applyMarkerOffset=null!=this.parameters.markerParameters&&function(e){return e.anchor===b.kJ.Tip&&e.hideOnShortSegments&&"begin-end"===e.placement&&e.worldSpace}(this.parameters.markerParameters),this._configuration.hasPolygonOffset=this.parameters.hasPolygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.vvOpacity=!!this.parameters.vvOpacity,this._configuration.innerColorEnabled=this.parameters.innerWidth>0&&null!=this.parameters.innerColor,this._configuration.falloffEnabled=this.parameters.falloff>0,this._configuration.hasOccludees=t.hasOccludees,this._configuration.occluder=this.parameters.renderOccluded===g.m$.OccludeAndTransparentStencil,this._configuration.terrainDepthTest=t.terrainDepthTest&&(0,f.RN)(e),this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration.wireframe=this.parameters.wireframe,this._configuration}get visible(){return this.parameters.color[3]>=W.Q||null!=this.parameters.stipplePattern&&(this.parameters.stippleOffColor?.[3]??0)>W.Q}intersectDraped(e,t,i,r,s,o){let{attributes:a,screenToWorldRatio:l}=e;if(!i.options.selectionMode)return;const c=a.get(T.r.SIZE);let d=this.parameters.width;if(this.parameters.vvSize){const e=a.get(T.r.SIZEFEATUREATTRIBUTE).data[0];d*=(0,n.qE)(this.parameters.vvSize.offset[0]+e*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else c&&(d*=c.data[0]);const p=r[0],h=r[1],u=(d/2+4)*l;let f=Number.MAX_VALUE,m=0;const v=a.get(T.r.POSITION).data,g=V(this.parameters,a)?v.length-2:v.length-5;for(let _=0;_<g;_+=3){const e=v[_],t=v[_+1],i=(_+3)%v.length,r=p-e,s=h-t,o=v[i]-e,a=v[i+1]-t,l=(0,n.qE)((o*r+a*s)/(o*o+a*a),0,1),c=o*l-r,d=a*l-s,u=c*c+d*d;u<f&&(f=u,m=_/3)}f<u*u&&s(o.dist,o.normal,m,!1)}intersect(e,t,i,s,l,c){if(!i.options.selectionMode||!e.visible)return;if(!(0,S.zH)(t))return void r.A.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial").error("intersection assumes a translation-only matrix");const u=e.attributes,f=u.get(T.r.POSITION).data;let m=this.parameters.width;if(this.parameters.vvSize){const e=u.get(T.r.SIZEFEATUREATTRIBUTE).data[0];m*=(0,n.qE)(this.parameters.vvSize.offset[0]+e*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else u.has(T.r.SIZE)&&(m*=u.get(T.r.SIZE).data[0]);const v=i.camera,g=$;(0,o.C)(g,i.point);const _=m*v.pixelRatio/2+4*v.pixelRatio;(0,a.i)(re[0],g[0]-_,g[1]+_,0),(0,a.i)(re[1],g[0]+_,g[1]+_,0),(0,a.i)(re[2],g[0]+_,g[1]-_,0),(0,a.i)(re[3],g[0]-_,g[1]-_,0);for(let r=0;r<4;r++)if(!v.unprojectFromRenderScreen(re[r],ne[r]))return;(0,h.Cr)(v.eye,ne[0],ne[1],se),(0,h.Cr)(v.eye,ne[1],ne[2],oe),(0,h.Cr)(v.eye,ne[2],ne[3],ae),(0,h.Cr)(v.eye,ne[3],ne[0],le);let y=Number.MAX_VALUE,b=0;const O=V(this.parameters,u)?f.length-2:f.length-5;for(let r=0;r<O;r+=3){B[0]=f[r]+t[12],B[1]=f[r+1]+t[13],B[2]=f[r+2]+t[14];const e=(r+3)%f.length;if(k[0]=f[e]+t[12],k[1]=f[e+1]+t[13],k[2]=f[e+2]+t[14],(0,h.mN)(se,B)<0&&(0,h.mN)(se,k)<0||(0,h.mN)(oe,B)<0&&(0,h.mN)(oe,k)<0||(0,h.mN)(ae,B)<0&&(0,h.mN)(ae,k)<0||(0,h.mN)(le,B)<0&&(0,h.mN)(le,k)<0)continue;if(v.projectToRenderScreen(B,Z),v.projectToRenderScreen(k,q),Z[2]<0&&q[2]>0){(0,a.d)(G,B,k);const e=v.frustum,t=-(0,h.mN)(e[d.FB.NEAR],B)/(0,a.f)(G,(0,h.Qj)(e[d.FB.NEAR]));(0,a.h)(G,G,t),(0,a.g)(B,B,G),v.projectToRenderScreen(B,Z)}else if(Z[2]>0&&q[2]<0){(0,a.d)(G,k,B);const e=v.frustum,t=-(0,h.mN)(e[d.FB.NEAR],k)/(0,a.f)(G,(0,h.Qj)(e[d.FB.NEAR]));(0,a.h)(G,G,t),(0,a.g)(k,k,G),v.projectToRenderScreen(k,q)}else if(Z[2]<0&&q[2]<0)continue;Z[2]=0,q[2]=0;const i=(0,p.kb)((0,p.Cr)(Z,q,X),g);i<y&&(y=i,(0,a.c)(Y,B),(0,a.c)(Q,k),b=r/3)}const E=i.rayBegin,A=i.rayEnd;if(y<_*_){let e=Number.MAX_VALUE;if((0,p.ld)((0,p.Cr)(Y,Q,X),(0,p.Cr)(E,A,K),J)){(0,a.d)(J,J,E);const t=(0,a.l)(J);(0,a.h)(J,J,1/t),e=t/(0,a.j)(E,A)}c(e,J,b,!1)}}get _layout(){const e=(0,u.BP)().vec3f(T.r.POSITION).vec3f(T.r.PREVPOSITION).vec3f(T.r.NEXTPOSITION).f32(T.r.SUBDIVISIONFACTOR).vec2f(T.r.UV0);return this.parameters.vvSize?e.f32(T.r.SIZEFEATUREATTRIBUTE):e.f32(T.r.SIZE),this.parameters.vvColor?e.f32(T.r.COLORFEATUREATTRIBUTE):e.vec4f(T.r.COLOR),this.parameters.vvOpacity&&e.f32(T.r.OPACITYFEATUREATTRIBUTE),(0,m.E)()&&e.vec4u8(T.r.OBJECTANDLAYERIDCOLOR),e}createBufferWriter(){return new j(this._layout,this.parameters)}createGLMaterial(e){return new F(e)}validateParameters(e){"miter"!==e.join&&(e.miterLimit=0),null!=e.markerParameters&&(e.markerScale=e.markerParameters.width/e.width)}}class F extends v.A{constructor(){super(...arguments),this._stipplePattern=null}dispose(){super.dispose(),this._stippleTextures.release(this._stipplePattern),this._stipplePattern=null}beginSlot(e){const t=this._material.parameters.stipplePattern;return this._stipplePattern!==t&&(this._material.setParameters({stippleTexture:this._stippleTextures.swap(t,this._stipplePattern)}),this._stipplePattern=t),this.getTechnique(I,e)}}class M extends y.S{constructor(){super(...arguments),this.width=0,this.color=c.Un,this.join="miter",this.cap=w.x.BUTT,this.miterLimit=5,this.writeDepth=!0,this.hasPolygonOffset=!1,this.stippleTexture=null,this.stipplePreferContinuous=!0,this.markerParameters=null,this.markerScale=1,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.isClosed=!1,this.falloff=0,this.innerWidth=0,this.wireframe=!1}get transparent(){return this.color[3]<1||null!=this.stipplePattern&&(this.stippleOffColor?.[3]??0)<1}}class j{constructor(e,t){this.vertexBufferLayout=e,this._parameters=t,this.numJoinSubdivisions=0;const i=t.stipplePattern?1:0;switch(this._parameters.join){case"miter":case"bevel":this.numJoinSubdivisions=i;break;case"round":this.numJoinSubdivisions=O.r+i}}_isClosed(e){return V(this._parameters,e)}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){const t=e.get(T.r.POSITION).indices.length/2+1,i=this._isClosed(e);let r=i?2:4;return r+=((i?t:t-1)-(i?0:1))*(2*this.numJoinSubdivisions+4),r+=2,this._parameters.wireframe&&(r=2+4*(r-2)),r}write(e,t,i,r,n,s){const o=ee,l=te,c=ie,d=i.get(T.r.POSITION),p=d.indices,h=d.data.length/3,u=i.get(T.r.DISTANCETOSTART)?.data;p&&p.length!==2*(h-1)&&console.warn("RibbonLineMaterial does not support indices");const f=i.get(T.r.SIZEFEATUREATTRIBUTE)?.data[0]??i.get(T.r.SIZE)?.data[0]??1;let v=[1,1,1,1],g=0;const _=this.vertexBufferLayout.fields.has(T.r.COLORFEATUREATTRIBUTE);_?g=i.get(T.r.COLORFEATUREATTRIBUTE).data[0]:i.has(T.r.COLOR)&&(v=i.get(T.r.COLOR).data);const S=this.vertexBufferLayout.fields.has(T.r.OPACITYFEATUREATTRIBUTE),y=S?i.get(T.r.OPACITYFEATUREATTRIBUTE).data[0]:0,b=new Float32Array(n.buffer),O=(0,m.E)()?new Uint8Array(n.buffer):null,E=this.vertexBufferLayout.stride/4;let A=s*E;const R=A;let x=0;const C=u?(e,t,i)=>x=u[i]:(e,t,i)=>x+=(0,a.j)(e,t),L=(e,t,i,n,s,o,a)=>{if(b[A++]=t[0],b[A++]=t[1],b[A++]=t[2],b[A++]=e[0],b[A++]=e[1],b[A++]=e[2],b[A++]=i[0],b[A++]=i[1],b[A++]=i[2],b[A++]=n,b[A++]=a,b[A++]=s,b[A++]=f,_)b[A++]=g;else{const e=Math.min(4*o,v.length-4);b[A++]=v[e],b[A++]=v[e+1],b[A++]=v[e+2],b[A++]=v[e+3]}S&&(b[A++]=y),(0,m.E)()&&(r&&(O[4*A]=r[0],O[4*A+1]=r[1],O[4*A+2]=r[2],O[4*A+3]=r[3]),A++)};A+=E,(0,a.i)(l,d.data[0],d.data[1],d.data[2]),e&&(0,a.t)(l,l,e);const D=this._isClosed(i);if(D){const t=d.data.length-3;(0,a.i)(o,d.data[t],d.data[t+1],d.data[t+2]),e&&(0,a.t)(o,o,e)}else(0,a.i)(c,d.data[3],d.data[4],d.data[5]),e&&(0,a.t)(c,c,e),L(l,l,c,1,N.LEFT_CAP_START,0,0),L(l,l,c,1,N.RIGHT_CAP_START,0,0),(0,a.c)(o,l),(0,a.c)(l,c);const I=D?0:1,z=D?h:h-1;for(let m=I;m<z;m++){const t=(m+1)%h*3;(0,a.i)(c,d.data[t],d.data[t+1],d.data[t+2]),e&&(0,a.t)(c,c,e),C(o,l,m),L(o,l,c,0,N.LEFT_JOIN_END,m,x),L(o,l,c,0,N.RIGHT_JOIN_END,m,x);const i=this.numJoinSubdivisions;for(let e=0;e<i;++e){const t=(e+1)/(i+1);L(o,l,c,t,N.LEFT_JOIN_END,m,x),L(o,l,c,t,N.RIGHT_JOIN_END,m,x)}L(o,l,c,1,N.LEFT_JOIN_START,m,x),L(o,l,c,1,N.RIGHT_JOIN_START,m,x),(0,a.c)(o,l),(0,a.c)(l,c)}D?((0,a.i)(c,d.data[3],d.data[4],d.data[5]),e&&(0,a.t)(c,c,e),x=C(o,l,z),L(o,l,c,0,N.LEFT_JOIN_END,I,x),L(o,l,c,0,N.RIGHT_JOIN_END,I,x)):(x=C(o,l,z),L(o,l,l,0,N.LEFT_CAP_END,z,x),L(o,l,l,0,N.RIGHT_CAP_END,z,x)),H(b,R+E,b,R,E),A=H(b,A-E,b,A,E),this._parameters.wireframe&&this._addWireframeVertices(n,R,A,E)}_addWireframeVertices(e,t,i,r){const n=new Float32Array(e.buffer,i*Float32Array.BYTES_PER_ELEMENT),s=new Float32Array(e.buffer,t*Float32Array.BYTES_PER_ELEMENT,i-t);let o=0;const a=e=>o=H(s,e,n,o,r);for(let l=0;l<s.length-1;l+=2*r)a(l),a(l+2*r),a(l+1*r),a(l+2*r),a(l+1*r),a(l+3*r)}}function H(e,t,i,r,n){for(let s=0;s<n;s++)i[r++]=e[t++];return r}function V(e,t){return!!e.isClosed&&t.get(T.r.POSITION).indices.length>2}const B=(0,l.vt)(),k=(0,l.vt)(),G=(0,l.vt)(),J=(0,l.vt)(),$=(0,l.vt)(),Z=(0,s.r_)(),q=(0,s.r_)(),Y=(0,l.vt)(),Q=(0,l.vt)(),X=(0,p.vt)(),K=(0,p.vt)(),ee=(0,l.vt)(),te=(0,l.vt)(),ie=(0,l.vt)(),re=[(0,s.r_)(),(0,s.r_)(),(0,s.r_)(),(0,s.r_)()],ne=[(0,l.vt)(),(0,l.vt)(),(0,l.vt)(),(0,l.vt)()],se=(0,h.vt)(),oe=(0,h.vt)(),ae=(0,h.vt)(),le=(0,h.vt)()},3838:(e,t,i)=>{i.d(t,{s:()=>d});var r=i(66763),n=i(5517),s=i(21390),o=i(60205),a=i(86955),l=i(66470);const c=8;function d(e,t){const i=e.vertex;i.uniforms.add(new s.m("intrinsicWidth",(e=>e.width))),t.vvSize?(e.attributes.add(l.r.SIZEFEATUREATTRIBUTE,"float"),i.uniforms.add(new n.t("vvSizeMinSize",(e=>e.vvSize.minSize)),new n.t("vvSizeMaxSize",(e=>e.vvSize.maxSize)),new n.t("vvSizeOffset",(e=>e.vvSize.offset)),new n.t("vvSizeFactor",(e=>e.vvSize.factor))),i.code.add(a.H`float getSize() {
return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
}`)):(e.attributes.add(l.r.SIZE,"float"),i.code.add(a.H`float getSize(){
return intrinsicWidth * size;
}`)),t.vvOpacity?(e.attributes.add(l.r.OPACITYFEATUREATTRIBUTE,"float"),i.constants.add("vvOpacityNumber","int",8),i.uniforms.add(new o.x("vvOpacityValues",(e=>e.vvOpacity.values),c),new o.x("vvOpacityOpacities",(e=>e.vvOpacity.opacityValues),c)),i.code.add(a.H`float interpolateOpacity( float value ){
if (value <= vvOpacityValues[0]) {
return vvOpacityOpacities[0];
}
for (int i = 1; i < vvOpacityNumber; ++i) {
if (vvOpacityValues[i] >= value) {
float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
}
}
return vvOpacityOpacities[vvOpacityNumber - 1];
}
vec4 applyOpacity( vec4 color ){
return vec4(color.xyz, interpolateOpacity(opacityFeatureAttribute));
}`)):i.code.add(a.H`vec4 applyOpacity( vec4 color ){
return color;
}`),t.vvColor?(e.include(r.A,t),e.attributes.add(l.r.COLORFEATUREATTRIBUTE,"float"),i.code.add(a.H`vec4 getColor(){
return applyOpacity(interpolateVVColor(colorFeatureAttribute));
}`)):(e.attributes.add(l.r.COLOR,"vec4"),i.code.add(a.H`vec4 getColor(){
return applyOpacity(color);
}`))}},8918:(e,t,i)=>{i.d(t,{x:()=>h});var r=i(54099),n=i(88321),s=i(30726),o=i(30015),a=i(73146),l=i(87634);const c=["layerObjectAdded","layerObjectRemoved","layerObjectsAdded","layerObjectsRemoved","transformationChanged","shaderTransformationChanged","visibilityChanged","occlusionChanged","highlightChanged","geometryAdded","geometryRemoved","attributesChanged"];var d=i(94536),p=i(44513);class h extends a.J{constructor(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";super(),this.stage=e,this.apiLayerUid=i,this.type=l.X.Layer,this.events=new r.A,this.visible=!0,this.sliceable=!1,this._objectsAdded=new o.A,this._handles=new n.A,this._objects=new o.A,this._pickable=!0,this.visible=t?.visible??!0,this._pickable=t?.pickable??!0,this.updatePolicy=t?.updatePolicy??p.q.ASYNC,this._disableOctree=t?.disableOctree??!1,e.add(this);for(const r of c)this._handles.add(this.events.on(r,(t=>e.handleEvent(r,t))))}destroy(){this._handles.size&&(this._handles.destroy(),this.stage.remove(this),this.invalidateSpatialQueryAccelerator())}get objects(){return this._objects}set pickable(e){this._pickable=e}get pickable(){return this._pickable&&this.visible}add(e){this._objects.push(e),e.parentLayer=this,this.events.emit("layerObjectAdded",{layer:this,object:e}),null!=this._octree&&this._objectsAdded.push(e)}remove(e){this._objects.removeUnordered(e)&&(e.parentLayer=null,this.events.emit("layerObjectRemoved",{layer:this,object:e}),null!=this._octree&&(this._objectsAdded.removeUnordered(e)||this._octree.remove([e])))}addMany(e){this._objects.pushArray(e);for(const t of e)t.parentLayer=this;this.events.emit("layerObjectsAdded",{layer:this,objects:e}),null!=this._octree&&this._objectsAdded.pushArray(e)}removeMany(e){const t=new Array;if(this._objects.removeUnorderedMany(e,e.length,t),0!==t.length){for(const e of t)e.parentLayer=null;if(this.events.emit("layerObjectsRemoved",{layer:this,objects:t}),null!=this._octree){for(let e=0;e<t.length;)this._objectsAdded.removeUnordered(t[e])?(t[e]=t[t.length-1],t.length-=1):++e;this._octree.remove(t)}}}sync(){this.updatePolicy!==p.q.SYNC&&this.stage.syncLayer(this.id)}notifyObjectBBChanged(e,t){null==this._octree||this._objectsAdded.includes(e)||this._octree.update(e,t)}getSpatialQueryAccelerator(){return null==this._octree&&this._objects.length>50&&!this._disableOctree?(this._octree=new d.A((e=>e.boundingVolumeWorldSpace.bounds)),this._octree.add(this._objects.data,this._objects.length)):null!=this._octree&&this._objectsAdded.length>0&&(this._octree.add(this._objectsAdded.data,this._objectsAdded.length),this._objectsAdded.clear()),this._octree}invalidateSpatialQueryAccelerator(){this._octree=(0,s.pR)(this._octree),this._objectsAdded.clear()}}},14623:(e,t,i)=>{i.d(t,{R:()=>C,b:()=>x,r:()=>R});var r=i(34981),n=i(26917),s=i(90080),o=i(3838),a=i(56906),l=i(17698),c=i(36324),d=i(94192),p=i(80883),h=i(3799),u=i(28450),f=i(51596),m=i(58350),v=i(23148),g=i(21390),_=i(86955),S=i(23687),T=i(66470),y=i(50125),b=i(91911),O=i(46259),E=i(2687),A=i(75569);const R=1;function x(e){const t=new E.N5,{attributes:i,varyings:x,vertex:C,fragment:L}=t,{applyMarkerOffset:D,draped:I,output:z,capType:P,stippleEnabled:N,falloffEnabled:w,roundJoins:W,wireframe:U,innerColorEnabled:F}=e;t.include(c.p),t.include(o.s,e),t.include(a.q,e),t.include(s.g,e),t.include(d.Z,e);const M=D&&!I;M&&(C.uniforms.add(new g.m("markerScale",(e=>e.markerScale))),t.include(l.r,{space:y.lM.World})),(0,h.NB)(C,e),C.uniforms.add(new S.F("inverseProjectionMatrix",(e=>e.camera.inverseProjectionMatrix)),new u.E("nearFar",(e=>e.camera.nearFar)),new g.m("miterLimit",(e=>"miter"!==e.join?0:e.miterLimit)),new f.I("viewport",(e=>e.camera.fullViewport))),C.constants.add("LARGE_HALF_FLOAT","float",65500),i.add(T.r.POSITION,"vec3"),i.add(T.r.PREVPOSITION,"vec3"),i.add(T.r.NEXTPOSITION,"vec3"),i.add(T.r.SUBDIVISIONFACTOR,"float"),i.add(T.r.UV0,"vec2"),x.add("vColor","vec4"),x.add("vpos","vec3"),x.add("vLineDistance","float"),x.add("vLineWidth","float");const j=N;j&&x.add("vLineSizeInv","float");const H=P===O.x.ROUND,V=N&&H,B=w||V;B&&x.add("vLineDistanceNorm","float"),H&&(x.add("vSegmentSDF","float"),x.add("vReverseSegmentSDF","float")),C.code.add(_.H`vec2 perpendicular(vec2 v) {
return vec2(v.y, -v.x);
}
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`),C.code.add(_.H`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),C.code.add(_.H`void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
float vnp = nearFar[0] * 0.99;
if(pos.z > -nearFar[0]) {
if (!isStartVertex) {
if(prev.z < -nearFar[0]) {
pos = mix(prev, pos, interp(vnp, prev, pos));
next = pos;
} else {
pos = vec4(0.0, 0.0, 0.0, 1.0);
}
} else {
if(next.z < -nearFar[0]) {
pos = mix(pos, next, interp(vnp, pos, next));
prev = pos;
} else {
pos = vec4(0.0, 0.0, 0.0, 1.0);
}
}
} else {
if (prev.z > -nearFar[0]) {
prev = mix(pos, prev, interp(vnp, pos, prev));
}
if (next.z > -nearFar[0]) {
next = mix(next, pos, interp(vnp, next, pos));
}
}
forwardViewPosDepth(pos.xyz);
pos = projectAndScale(pos);
next = projectAndScale(next);
prev = projectAndScale(prev);
}`),(0,h.Nz)(C),C.constants.add("aaWidth","float",N?0:1).main.add(_.H`
    // unpack values from uv0.y
    bool isStartVertex = abs(abs(uv0.y)-3.0) == 1.0;

    float coverage = 1.0;

    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      bool isJoin = abs(uv0.y) < 3.0;
      float lineSize = getSize();

      if (lineSize < 1.0) {
        coverage = lineSize; // convert sub-pixel coverage to alpha
        lineSize = 1.0;
      }
      lineSize += aaWidth;

      float lineWidth = lineSize * pixelRatio;
      vLineWidth = lineWidth;
      ${j?_.H`vLineSizeInv = 1.0 / lineSize;`:""}

      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(prevPosition, 1.0);
      vec4 next = view * vec4(nextPosition, 1.0);
  `),M&&C.main.add(_.H`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos, other);
if(!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos) * 0.5;
}`),C.main.add(_.H`clipAndTransform(pos, prev, next, isStartVertex);
vec2 left = (pos.xy - prev.xy);
vec2 right = (next.xy - pos.xy);
float leftLen = length(left);
float rightLen = length(right);`),(N||H)&&C.main.add(_.H`
      float isEndVertex = float(!isStartVertex);
      vec2 segmentOrigin = mix(pos.xy, prev.xy, isEndVertex);
      vec2 segment = mix(right, left, isEndVertex);
      ${H?_.H`vec2 segmentEnd = mix(next.xy, pos.xy, isEndVertex);`:""}
    `),C.main.add(_.H`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = (left.x * right.y - left.y * right.x) * uv0.y > 0.0;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = perpendicular(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),W?C.main.add(_.H`
        vec2 startDir = leftLen < 0.001 ? right : left;
        startDir = perpendicular(startDir);

        vec2 endDir = rightLen < 0.001 ? left : right;
        endDir = perpendicular(endDir);

        float factor = ${N?_.H`min(1.0, subdivisionFactor * ${_.H.float((R+2)/(R+1))})`:_.H`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(uv0.y) * factor * rotationAngle);
      `):C.main.add(_.H`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = perpendicular(joinDisplacementDir);`);const k=P!==O.x.BUTT;return C.main.add(_.H`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = perpendicular(joinDisplacementDir);

      ${k?_.H`capDisplacementDir = isStartVertex ? -right : left;`:""}
    }
  `),C.main.add(_.H`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;
    float lineDistNorm = sign(uv0.y) * pos.w;

    vLineDistance =  lineWidth * lineDistNorm;
    ${B?_.H`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xy += dpos;
  `),H&&C.main.add(_.H`vec2 segmentDir = normalize(segment);
vSegmentSDF = (isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir) * pos.w) ;
vReverseSegmentSDF = (isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir) * pos.w);`),N&&(I?C.uniforms.add(new v.U("worldToScreenRatio",(e=>1/e.screenToPCSRatio))):C.main.add(_.H`vec3 segmentCenter = mix((nextPosition + position) * 0.5, (position + prevPosition) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),C.main.add(_.H`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(nextPosition - position, position - prevPosition, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),I?C.main.add(_.H`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = uv0.x * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):C.main.add(_.H`float startPseudoScreen = mix(uv0.x, uv0.x - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),C.uniforms.add(new g.m("stipplePatternPixelSize",(e=>(0,a.h)(e)))),C.main.add(_.H`float patternLength = lineSize * stipplePatternPixelSize;
vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);
vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);
if (segmentLengthScreenDouble >= 0.001) {
vec2 stippleDisplacement = pos.xy - segmentOrigin;
float stippleDisplacementFactor = dot(segment, stippleDisplacement) / (segmentLengthScreenDouble * segmentLengthScreenDouble);
vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
}
vStippleDistanceLimits *= pos.w;
vStippleDistance *= pos.w;
vStippleDistanceLimits = isJoin ?
vStippleDistanceLimits :
isStartVertex ?
vec2(-1e34, vStippleDistanceLimits.y) :
vec2(vStippleDistanceLimits.x, 1e34);`)),C.main.add(_.H`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;

      vColor = getColor();
      vColor.a *= coverage;

      ${U&&!I?"pos.z -= 0.001 * pos.w;":""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }`),t.fragment.include(n.HQ,e),t.include(b.z,e),L.include(p.a),L.main.add(_.H`discardBySlice(vpos);
discardByTerrainDepth();`),U?L.main.add(_.H`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(H&&L.main.add(_.H`
        float sdf = min(vSegmentSDF, vReverseSegmentSDF);
        vec2 fragmentPosition = vec2(
          min(sdf, 0.0),
          vLineDistance
        ) * gl_FragCoord.w;

        float fragmentRadius = length(fragmentPosition);
        float fragmentCapSDF = (fragmentRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
        float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

        if (capCoverage < ${_.H.float(A.Q)}) {
          discard;
        }
      `),V?L.main.add(_.H`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        vLineDistanceNorm * gl_FragCoord.w
      );
      float stippleRadius = length(stipplePosition * vLineWidth);
      float stippleCapSDF = (stippleRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${_.H.float(A.Q)}, stippleCoverage);
      `):L.main.add(_.H`float stippleAlpha = getStippleAlpha();`),z!==r.V.ObjectAndLayerIdColor&&L.main.add(_.H`discardByStippleAlpha(stippleAlpha, ${_.H.float(A.Q)});`),L.uniforms.add(new m.E("intrinsicColor",(e=>e.color))),L.main.add(_.H`vec4 color = intrinsicColor * vColor;`),F&&(L.uniforms.add(new m.E("innerColor",(e=>e.innerColor??e.color)),new g.m("innerWidth",((e,t)=>e.innerWidth*t.camera.pixelRatio))),L.main.add(_.H`float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`)),L.main.add(_.H`vec4 finalColor = blendStipple(color, stippleAlpha);`),w&&(L.uniforms.add(new g.m("falloff",(e=>e.falloff))),L.main.add(_.H`finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);`)),N||L.main.add(_.H`float featherStartDistance = max(vLineWidth - 2.0, 0.0);
float value = abs(vLineDistance) * gl_FragCoord.w;
float feather = (value - featherStartDistance) / (vLineWidth - featherStartDistance);
finalColor.a *= 1.0 - clamp(feather, 0.0, 1.0);`)),L.main.add(_.H`outputColorHighlightOID(finalColor, vpos);`),t}const C=Object.freeze(Object.defineProperty({__proto__:null,build:x,ribbonlineNumRoundJoinSubdivisions:R},Symbol.toStringTag,{value:"Module"}))},17698:(e,t,i)=>{i.d(t,{r:()=>l});var r=i(99443),n=i(3799),s=i(23148),o=i(86955),a=i(50125);function l(e,t){const i=e.vertex;(0,n.Nz)(i),null==i.uniforms.get("markerScale")&&i.constants.add("markerScale","float",1),i.constants.add("markerSizePerLineWidth","float",r.PV).code.add(o.H`float getLineWidth() {
return max(getSize(), 1.0) * pixelRatio;
}
float getScreenMarkerSize() {
return markerSizePerLineWidth * markerScale * getLineWidth();
}`),t.space===a.lM.World&&(i.constants.add("maxSegmentLengthFraction","float",.45),i.uniforms.add(new s.U("perRenderPixelRatio",(e=>e.camera.perRenderPixelRatio))),i.code.add(o.H`bool areWorldMarkersHidden(vec4 pos, vec4 other) {
vec3 midPoint = mix(pos.xyz, other.xyz, 0.5);
float distanceToCamera = length(midPoint);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
float worldMarkerSize = getScreenMarkerSize() * screenToWorldRatio;
float segmentLen = length(pos.xyz - other.xyz);
return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
}
float getWorldMarkerSize(vec4 pos) {
float distanceToCamera = length(pos.xyz);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
return getScreenMarkerSize() * screenToWorldRatio;
}`))}},37046:(e,t,i)=>{i.d(t,{B:()=>v});i(81806);var r=i(34761),n=i(13191),s=i(20664),o=i(9392),a=i(78315),l=i(94966),c=i(83490),d=i(73146),p=i(87634),h=i(35416),u=i(86994),f=i(66470),m=i(68967);class v extends d.J{get geometries(){return this._geometries}get transformation(){return this._transformation??n.zK}set transformation(e){this._transformation=(0,r.C)(this._transformation??(0,n.vt)(),e),this._invalidateBoundingVolume(),this._emit("transformationChanged",this)}get shaderTransformation(){return this._shaderTransformation}set shaderTransformation(e){this._shaderTransformation=e?(0,r.C)(this._shaderTransformation??(0,n.vt)(),e):null,this._invalidateBoundingVolume(),this._emit("shaderTransformationChanged",this)}get effectiveTransformation(){return this.shaderTransformation??this.transformation}constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(),this.type=p.X.Object,this._shaderTransformation=null,this._parentLayer=null,this._visible=!0,this.castShadow=e.castShadow??!0,this.usesVerticalDistanceToGround=e.usesVerticalDistanceToGround??!1,this.graphicUid=e.graphicUid,this.layerUid=e.layerUid,e.isElevationSource&&(this.lastValidElevationBB=new g),this._geometries=e.geometries?Array.from(e.geometries):new Array}dispose(){this._geometries.length=0}get parentLayer(){return this._parentLayer}set parentLayer(e){(0,u.vA)(null==this._parentLayer||null==e,"Object3D can only be added to a single Layer"),this._parentLayer=e}addGeometry(e){e.visible=this._visible,this._geometries.push(e),this._emit("geometryAdded",{object:this,geometry:e}),this._invalidateBoundingVolume()}removeGeometry(e){const t=this._geometries.splice(e,1)[0];t&&(this._emit("geometryRemoved",{object:this,geometry:t}),this._invalidateBoundingVolume())}removeAllGeometries(){for(;this._geometries.length>0;)this.removeGeometry(0)}geometryVertexAttributeUpdated(e,t){let i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this._emit("attributesChanged",{object:this,geometry:e,attribute:t,sync:i}),(0,f.b)(t)&&this._invalidateBoundingVolume()}get visible(){return this._visible}set visible(e){if(this._visible!==e){this._visible=e;for(const e of this._geometries)e.visible=this._visible;this._emit("visibilityChanged",this)}}maskOccludee(){const e=new h.p;for(const t of this._geometries)t.occludees=(0,m.Ci)(t.occludees,e);return this._emit("occlusionChanged",this),e}removeOcclude(e){for(const t of this._geometries)t.occludees=(0,m.PC)(t.occludees,e);this._emit("occlusionChanged",this)}highlight(e){const t=new h.h(e);for(const i of this._geometries)i.addHighlight(t);return this._emit("highlightChanged",this),t}removeHighlight(e){for(const t of this._geometries)t.removeHighlight(e);this._emit("highlightChanged",this)}removeStateID(e){e.channel===c.Mg.Highlight?this.removeHighlight(e):this.removeOcclude(e)}getCombinedStaticTransformation(e,t){return(0,r.lw)(t,this.transformation,e.transformation)}getCombinedShaderTransformation(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,n.vt)();return(0,r.lw)(t,this.effectiveTransformation,e.transformation)}get boundingVolumeWorldSpace(){return this._bvWorldSpace||(this._bvWorldSpace=this._bvWorldSpace||new _,this._validateBoundingVolume(this._bvWorldSpace,E.WorldSpace)),this._bvWorldSpace}get boundingVolumeObjectSpace(){return this._bvObjectSpace||(this._bvObjectSpace=this._bvObjectSpace||new _,this._validateBoundingVolume(this._bvObjectSpace,E.ObjectSpace)),this._bvObjectSpace}_validateBoundingVolume(e,t){const i=t===E.ObjectSpace;for(const r of this._geometries){const t=r.boundingInfo;t&&S(t,e,i?r.transformation:this.getCombinedShaderTransformation(r))}(0,s.m)((0,a.a)(e.bounds),e.min,e.max,.5);for(const r of this._geometries){const t=r.boundingInfo;if(null==t)continue;const n=i?r.transformation:this.getCombinedShaderTransformation(r),o=(0,l.hG)(n);(0,s.t)(O,t.center,n);const c=(0,s.j)(O,(0,a.a)(e.bounds)),d=t.radius*o;e.bounds[3]=Math.max(e.bounds[3],c+d)}}_invalidateBoundingVolume(){const e=this._bvWorldSpace?.bounds;this._bvObjectSpace=this._bvWorldSpace=void 0,this._parentLayer&&e&&this._parentLayer.notifyObjectBBChanged(this,e)}_emit(e,t){this._parentLayer&&this._parentLayer.events.emit(e,t)}get test(){}}class g{constructor(){this.min=(0,o.fA)(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this.max=(0,o.fA)(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE)}isEmpty(){return this.max[0]<this.min[0]&&this.max[1]<this.min[1]&&this.max[2]<this.min[2]}}class _ extends g{constructor(){super(...arguments),this.bounds=(0,a.c)()}}function S(e,t,i){const n=e.bbMin,o=e.bbMax;if((0,r.tZ)(i)){const e=(0,s.i)(T,i[12],i[13],i[14]);(0,s.g)(y,n,e),(0,s.g)(b,o,e);for(let i=0;i<3;++i)t.min[i]=Math.min(t.min[i],y[i]),t.max[i]=Math.max(t.max[i],b[i])}else if((0,s.t)(y,n,i),(0,s.p)(n,o))for(let r=0;r<3;++r)t.min[r]=Math.min(t.min[r],y[r]),t.max[r]=Math.max(t.max[r],y[r]);else{(0,s.t)(b,o,i);for(let e=0;e<3;++e)t.min[e]=Math.min(t.min[e],y[e],b[e]),t.max[e]=Math.max(t.max[e],y[e],b[e]);for(let e=0;e<3;++e){(0,s.c)(y,n),(0,s.c)(b,o),y[e]=o[e],b[e]=n[e],(0,s.t)(y,y,i),(0,s.t)(b,b,i);for(let e=0;e<3;++e)t.min[e]=Math.min(t.min[e],y[e],b[e]),t.max[e]=Math.max(t.max[e],y[e],b[e])}}}const T=(0,o.vt)(),y=(0,o.vt)(),b=(0,o.vt)(),O=(0,o.vt)();var E;!function(e){e[e.WorldSpace=0]="WorldSpace",e[e.ObjectSpace=1]="ObjectSpace"}(E||(E={}))},41595:(e,t,i)=>{i.d(t,{KF:()=>f,MF:()=>u,VG:()=>d,g7:()=>h,gf:()=>p,o8:()=>l,q6:()=>c});var r=i(76460),n=i(50346),s=i(32535),o=i(98976);const a=()=>r.A.getLogger("esri.views.3d.layers.graphics.featureExpressionInfoUtils");function l(e){return{cachedResult:e.cachedResult,arcade:e.arcade?{func:e.arcade.func,context:e.arcade.modules.arcadeUtils.createExecContext(null,{sr:e.arcade.context.spatialReference}),modules:e.arcade.modules}:null}}async function c(e,t,i,r){const s=e?.expression;if("string"!=typeof s)return null;const a=v(s);if(null!=a)return{cachedResult:a};const l=await(0,o.lw)();(0,n.Te)(i);const c=l.arcadeUtils,d=c.createSyntaxTree(s);return c.dependsOnView(d)?(null!=r&&r.error("Expressions containing '$view' are not supported on ElevationInfo"),{cachedResult:0}):{arcade:{func:c.createFunction(d),context:c.createExecContext(null,{sr:t}),modules:l}}}function d(e,t,i){return e.arcadeUtils.createFeature(t.attributes,t.geometry,i)}function p(e,t){if(null!=e&&!m(e)){if(!t||!e.arcade)return void a().errorOncePerTick("Arcade support required but not provided");const i=t;i._geometry&&(i._geometry=(0,s.wZ)(i._geometry)),e.arcade.modules.arcadeUtils.updateExecContext(e.arcade.context,t)}}function h(e){if(null!=e){if(m(e))return e.cachedResult;const t=e.arcade;let i=t?.modules.arcadeUtils.executeFunction(t.func,t.context);return"number"!=typeof i&&(e.cachedResult=0,i=0),i}return 0}function u(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=e?.featureExpressionInfo;const r=i?.expression;return t||"0"===r||(i=null),i??null}const f={cachedResult:0};function m(e){return null!=e.cachedResult}function v(e){return"0"===e?0:null}},44513:(e,t,i)=>{var r;i.d(t,{q:()=>r}),function(e){e[e.ASYNC=0]="ASYNC",e[e.SYNC=1]="SYNC"}(r||(r={}))},46259:(e,t,i)=>{i.d(t,{Q:()=>c,x:()=>r});var r,n=i(35143),s=i(97808),o=i(42717),a=i(6485),l=i(94570);!function(e){e[e.BUTT=0]="BUTT",e[e.SQUARE=1]="SQUARE",e[e.ROUND=2]="ROUND",e[e.COUNT=3]="COUNT"}(r||(r={}));class c extends l.E{constructor(){super(...arguments),this.capType=r.BUTT,this.hasPolygonOffset=!1,this.writeDepth=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stipplePreferContinuous=!0,this.roundJoins=!1,this.applyMarkerOffset=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.hasOccludees=!1,this.occluder=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.wireframe=!1,this.discardInvisibleFragments=!1,this.objectAndLayerIdColorInstanced=!1,this.textureCoordinateType=s.I.None,this.emissionSource=o.ZX.None,this.occlusionPass=!1,this.hasVvInstancing=!0,this.hasSliceTranslatedView=!0}}(0,n._)([(0,a.W)({count:r.COUNT})],c.prototype,"capType",void 0),(0,n._)([(0,a.W)()],c.prototype,"hasPolygonOffset",void 0),(0,n._)([(0,a.W)()],c.prototype,"writeDepth",void 0),(0,n._)([(0,a.W)()],c.prototype,"draped",void 0),(0,n._)([(0,a.W)()],c.prototype,"stippleEnabled",void 0),(0,n._)([(0,a.W)()],c.prototype,"stippleOffColorEnabled",void 0),(0,n._)([(0,a.W)()],c.prototype,"stipplePreferContinuous",void 0),(0,n._)([(0,a.W)()],c.prototype,"roundJoins",void 0),(0,n._)([(0,a.W)()],c.prototype,"applyMarkerOffset",void 0),(0,n._)([(0,a.W)()],c.prototype,"vvSize",void 0),(0,n._)([(0,a.W)()],c.prototype,"vvColor",void 0),(0,n._)([(0,a.W)()],c.prototype,"vvOpacity",void 0),(0,n._)([(0,a.W)()],c.prototype,"falloffEnabled",void 0),(0,n._)([(0,a.W)()],c.prototype,"innerColorEnabled",void 0),(0,n._)([(0,a.W)()],c.prototype,"hasOccludees",void 0),(0,n._)([(0,a.W)()],c.prototype,"occluder",void 0),(0,n._)([(0,a.W)()],c.prototype,"terrainDepthTest",void 0),(0,n._)([(0,a.W)()],c.prototype,"cullAboveTerrain",void 0),(0,n._)([(0,a.W)()],c.prototype,"wireframe",void 0),(0,n._)([(0,a.W)()],c.prototype,"discardInvisibleFragments",void 0),(0,n._)([(0,a.W)()],c.prototype,"objectAndLayerIdColorInstanced",void 0)},49296:(e,t,i)=>{i.d(t,{F:()=>s});var r=i(59097),n=i(41595);class s{constructor(){this._meterUnitOffset=0,this._renderUnitOffset=0,this._unit="meters",this._metersPerElevationInfoUnit=1,this._featureExpressionInfoContext=null,this.centerPointInElevationSR=null,this.mode=null}get featureExpressionInfoContext(){return this._featureExpressionInfoContext}get meterUnitOffset(){return this._meterUnitOffset}get unit(){return this._unit}set unit(e){this._unit=e,this._metersPerElevationInfoUnit=(0,r.Ao)(e)}get requiresSampledElevationInfo(){return"absolute-height"!==this.mode}reset(){this.mode=null,this._meterUnitOffset=0,this._renderUnitOffset=0,this._featureExpressionInfoContext=null,this.unit="meters"}set offsetMeters(e){this._meterUnitOffset=e,this._renderUnitOffset=0}set offsetElevationInfoUnits(e){this._meterUnitOffset=e*this._metersPerElevationInfoUnit,this._renderUnitOffset=0}addOffsetRenderUnits(e){this._renderUnitOffset+=e}geometryZWithOffset(e,t){const i=this.calculateOffsetRenderUnits(t);return null!=this.featureExpressionInfoContext?i:e+i}calculateOffsetRenderUnits(e){let t=this._meterUnitOffset;const i=this.featureExpressionInfoContext;return null!=i&&(t+=(0,n.g7)(i)*this._metersPerElevationInfoUnit),t/e.unitInMeters+this._renderUnitOffset}setFromElevationInfo(e){this.mode=e.mode,this.unit=(0,r.Tg)(e.unit)?e.unit:"meters",this.offsetElevationInfoUnits=e.offset??0}updateFeatureExpressionInfoContext(e,t,i){if(null==e)return void(this._featureExpressionInfoContext=null);const r=e?.arcade;r&&null!=t&&null!=i?(this._featureExpressionInfoContext=(0,n.o8)(e),(0,n.gf)(this._featureExpressionInfoContext,(0,n.VG)(r.modules,t,i))):this._featureExpressionInfoContext=e}static fromElevationInfo(e){const t=new s;return null!=e&&t.setFromElevationInfo(e),t}}},50125:(e,t,i)=>{i.d(t,{Dt:()=>d,kJ:()=>n,lM:()=>r});var r,n,s=i(35143),o=i(97808),a=i(42717),l=i(6485),c=i(94570);!function(e){e[e.Draped=0]="Draped",e[e.Screen=1]="Screen",e[e.World=2]="World",e[e.COUNT=3]="COUNT"}(r||(r={})),function(e){e[e.Center=0]="Center",e[e.Tip=1]="Tip",e[e.COUNT=2]="COUNT"}(n||(n={}));class d extends c.E{constructor(){super(...arguments),this.space=r.Screen,this.anchor=n.Center,this.occluder=!1,this.writeDepth=!1,this.hideOnShortSegments=!1,this.hasCap=!1,this.hasTip=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.hasOccludees=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.textureCoordinateType=o.I.None,this.emissionSource=a.ZX.None,this.discardInvisibleFragments=!0,this.occlusionPass=!1,this.hasVvInstancing=!0,this.hasSliceTranslatedView=!0,this.objectAndLayerIdColorInstanced=!1}get draped(){return this.space===r.Draped}}(0,s._)([(0,l.W)({count:r.COUNT})],d.prototype,"space",void 0),(0,s._)([(0,l.W)({count:n.COUNT})],d.prototype,"anchor",void 0),(0,s._)([(0,l.W)()],d.prototype,"occluder",void 0),(0,s._)([(0,l.W)()],d.prototype,"writeDepth",void 0),(0,s._)([(0,l.W)()],d.prototype,"hideOnShortSegments",void 0),(0,s._)([(0,l.W)()],d.prototype,"hasCap",void 0),(0,s._)([(0,l.W)()],d.prototype,"hasTip",void 0),(0,s._)([(0,l.W)()],d.prototype,"vvSize",void 0),(0,s._)([(0,l.W)()],d.prototype,"vvColor",void 0),(0,s._)([(0,l.W)()],d.prototype,"vvOpacity",void 0),(0,s._)([(0,l.W)()],d.prototype,"hasOccludees",void 0),(0,s._)([(0,l.W)()],d.prototype,"terrainDepthTest",void 0),(0,s._)([(0,l.W)()],d.prototype,"cullAboveTerrain",void 0)},56906:(e,t,i)=>{i.d(t,{q:()=>v,h:()=>g});var r=i(81449),n=i(3799),s=i(58350),o=i(23148),a=i(21390),l=i(86955),c=i(70367);i(14522),i(93345),i(80895),i(96673);function d(e){return e.pattern.map((t=>Math.round(t*e.pixelRatio)))}function p(e){if(null==e)return 1;const t=d(e);return Math.floor(t.reduce(((e,t)=>e+t)))}function h(e){return d(e).reduce(((e,t)=>Math.max(e,t)))}var u=i(43047),f=i(55855);const m=(0,f.vt)();function v(e,t){if(!t.stippleEnabled)return void e.fragment.code.add(l.H`float getStippleAlpha() { return 1.0; }
void discardByStippleAlpha(float stippleAlpha, float threshold) {}
vec4 blendStipple(vec4 color, float stippleAlpha) { return color; }`);const i=!(t.draped&&t.stipplePreferContinuous),{vertex:d,fragment:p}=e;p.include(r.W),t.draped||((0,n.yu)(d,t),d.uniforms.add(new o.U("worldToScreenPerDistanceRatio",(e=>{let{camera:t}=e;return 1/t.perScreenPixelRatio}))).code.add(l.H`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),e.varyings.add("vStippleDistance","float"),e.varyings.add("vStippleDistanceLimits","vec2"),e.varyings.add("vStipplePatternStretch","float"),d.code.add(l.H`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${l.H.float(_)};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),d.code.add(l.H`vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {`),d.code.add(l.H`
    if (segmentLengthPseudoScreen >= ${i?"patternLength":"1e4"}) {
  `),(0,n.Nz)(d),d.code.add(l.H`float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
float segmentLengthScreenRounded = flooredRepetitions * patternLength;
float stretch = repetitions / flooredRepetitions;
vStipplePatternStretch = max(0.75, stretch);
return vec2(0.0, segmentLengthScreenRounded);
}
return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
}`),p.uniforms.add(new c.N("stipplePatternTexture",(e=>e.stippleTexture)),new a.m("stipplePatternSDFNormalizer",(e=>function(e){return e?(Math.floor(.5*(h(e)-1))+.5)/e.pixelRatio:1}(e.stipplePattern))),new a.m("stipplePatternPixelSizeInv",(e=>1/g(e)))),t.stippleOffColorEnabled&&p.uniforms.add(new s.E("stippleOffColor",(e=>function(e){return null==e?f.uY:4===e.length?e:(0,u.s)(m,e[0],e[1],e[2],1)}(e.stippleOffColor)))),p.code.add(l.H`float getStippleSDF(out bool isClamped) {
float stippleDistanceClamped = clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y);
vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;
float u = stippleDistanceClamped * gl_FragCoord.w * stipplePatternPixelSizeInv * vLineSizeInv;
u = fract(u);
float encodedSDF = rgbaTofloat(texture(stipplePatternTexture, vec2(u, 0.5)));
float sdf = (encodedSDF * 2.0 - 1.0) * stipplePatternSDFNormalizer;
return (sdf - 0.5) * vStipplePatternStretch + 0.5;
}
float getStippleSDF() {
bool ignored;
return getStippleSDF(ignored);
}
float getStippleAlpha() {
bool isClamped;
float stippleSDF = getStippleSDF(isClamped);
float antiAliasedResult = clamp(stippleSDF * vLineWidth + 0.5, 0.0, 1.0);
return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
}`),p.code.add(l.H`
    void discardByStippleAlpha(float stippleAlpha, float threshold) {
     ${(0,l.If)(!t.stippleOffColorEnabled,"if (stippleAlpha < threshold) { discard; }")}
    }

    vec4 blendStipple(vec4 color, float stippleAlpha) {
      return ${t.stippleOffColorEnabled?"mix(color, stippleOffColor, stippleAlpha)":"vec4(color.rgb, color.a * stippleAlpha)"};
    }
  `)}function g(e){const t=e.stipplePattern;return t?p(e.stipplePattern)/t.pixelRatio:1}const _=.4},57662:(e,t,i)=>{var r,n,s;i.d(t,{O7:()=>n,Om:()=>r,sv:()=>s}),function(e){e[e.RasterImage=0]="RasterImage",e[e.Features=1]="Features"}(r||(r={})),function(e){e[e.MapLayer=0]="MapLayer",e[e.ViewLayer=1]="ViewLayer",e[e.Outline=2]="Outline",e[e.SnappingHint=3]="SnappingHint"}(n||(n={})),function(e){e[e.WithRasterImage=0]="WithRasterImage",e[e.WithoutRasterImage=1]="WithoutRasterImage"}(s||(s={}))},67425:(e,t,i)=>{i.d(t,{I2:()=>m,Kf:()=>g,Uk:()=>T,ai:()=>S,au:()=>h,fe:()=>_,nG:()=>f,nu:()=>v,sE:()=>u,uw:()=>r});var r,n=i(34761),s=i(13191),o=i(9392),a=i(5809),l=i(45308),c=i(81284),d=i(80935),p=i(66470);function h(e,t,i,r,n,s,o,a,c,d,p){const h=y[p.mode];let u,f,m=0;if((0,l.projectBuffer)(e,t,i,r,c.spatialReference,n,a))return h?.requiresAlignment(p)?(m=h.applyElevationAlignmentBuffer(r,n,s,o,a,c,d,p),u=s,f=o):(u=r,f=n),(0,l.projectBuffer)(u,c.spatialReference,f,s,d.spatialReference,o,a)?m:void 0}function u(e,t,i,r,n){const s=((0,c.v)(e)?e.z:(0,d.cN)(e)?e.array[e.offset+2]:e[2])||0;switch(i.mode){case"on-the-ground":{const i=(0,d.R1)(t,e,"ground")??0;return n.verticalDistanceToGround=0,n.sampledElevation=i,void(n.z=i)}case"relative-to-ground":{const o=(0,d.R1)(t,e,"ground")??0,a=i.geometryZWithOffset(s,r);return n.verticalDistanceToGround=a,n.sampledElevation=o,void(n.z=a+o)}case"relative-to-scene":{const o=(0,d.R1)(t,e,"scene")??0,a=i.geometryZWithOffset(s,r);return n.verticalDistanceToGround=a,n.sampledElevation=o,void(n.z=a+o)}case"absolute-height":{const o=i.geometryZWithOffset(s,r),a=(0,d.R1)(t,e,"ground")??0;return n.verticalDistanceToGround=o-a,n.sampledElevation=a,void(n.z=o)}default:return void(n.z=0)}}function f(e,t,i,r){return u(e,t,i,r,O),O.z}function m(e,t,i){return"on-the-ground"===t&&"on-the-ground"===i?e.staysOnTheGround:t===i||"on-the-ground"!==t&&"on-the-ground"!==i?null==t||null==i?e.definedChanged:r.UPDATE:e.onTheGroundChanged}function v(e){return"relative-to-ground"===e||"relative-to-scene"===e}function g(e){return"absolute-height"!==e}function _(e,t,i,r,s){u(t,i,s,r,O),S(e,O.verticalDistanceToGround);const o=O.sampledElevation,l=(0,n.C)(b,e.transformation);return E[0]=t.x,E[1]=t.y,E[2]=O.z,(0,a.l)(t.spatialReference,E,l,r.spatialReference)?e.transformation=l:console.warn("Could not locate symbol object properly, it might be misplaced"),o}function S(e,t){for(let i=0;i<e.geometries.length;++i){const r=e.geometries[i].getMutableAttribute(p.r.CENTEROFFSETANDDISTANCE);r&&r.data[3]!==t&&(r.data[3]=t,e.geometryVertexAttributeUpdated(e.geometries[i],p.r.CENTEROFFSETANDDISTANCE))}}class T{constructor(){this.verticalDistanceToGround=0,this.sampledElevation=0,this.z=0}}!function(e){e[e.NONE=0]="NONE",e[e.UPDATE=1]="UPDATE",e[e.RECREATE=2]="RECREATE"}(r||(r={}));const y={"absolute-height":{applyElevationAlignmentBuffer:function(e,t,i,r,n,s,o,a){const l=a.calculateOffsetRenderUnits(o),c=a.featureExpressionInfoContext;t*=3,r*=3;for(let d=0;d<n;++d){const n=e[t],s=e[t+1],o=e[t+2];i[r]=n,i[r+1]=s,i[r+2]=null==c?o+l:l,t+=3,r+=3}return 0},requiresAlignment:function(e){const t=e.meterUnitOffset,i=e.featureExpressionInfoContext;return 0!==t||null!=i}},"on-the-ground":{applyElevationAlignmentBuffer:function(e,t,i,r,n,s){let o=0;const a=s.spatialReference;t*=3,r*=3;for(let l=0;l<n;++l){const n=e[t],l=e[t+1],c=e[t+2],d=s.getElevation(n,l,c,a,"ground")??0;o+=d,i[r]=n,i[r+1]=l,i[r+2]=d,t+=3,r+=3}return o/n},requiresAlignment:()=>!0},"relative-to-ground":{applyElevationAlignmentBuffer:function(e,t,i,r,n,s,o,a){let l=0;const c=a.calculateOffsetRenderUnits(o),d=a.featureExpressionInfoContext,p=s.spatialReference;t*=3,r*=3;for(let h=0;h<n;++h){const n=e[t],o=e[t+1],a=e[t+2],h=s.getElevation(n,o,a,p,"ground")??0;l+=h,i[r]=n,i[r+1]=o,i[r+2]=null==d?a+h+c:h+c,t+=3,r+=3}return l/n},requiresAlignment:()=>!0},"relative-to-scene":{applyElevationAlignmentBuffer:function(e,t,i,r,n,s,o,a){let l=0;const c=a.calculateOffsetRenderUnits(o),d=a.featureExpressionInfoContext,p=s.spatialReference;t*=3,r*=3;for(let h=0;h<n;++h){const n=e[t],o=e[t+1],a=e[t+2],h=s.getElevation(n,o,a,p,"scene")??0;l+=h,i[r]=n,i[r+1]=o,i[r+2]=null==d?a+h+c:h+c,t+=3,r+=3}return l/n},requiresAlignment:()=>!0}},b=(0,s.vt)(),O=new T,E=(0,o.vt)()},67737:(e,t,i)=>{i.d(t,{G:()=>r,Q:()=>n});const r={stableRendering:!1},n={rootOrigin:null}},75507:(e,t,i)=>{i.d(t,{f:()=>s});var r=i(9392);class n{constructor(e,t){this.vec3=e,this.id=t}}function s(e,t,i,s){return new n((0,r.fA)(e,t,i),s)}},79369:(e,t,i)=>{i.d(t,{F:()=>a,Ti:()=>n});var r=i(30015);const n=-3,s=n-1;var o;!function(e){e[e.ALL=0]="ALL",e[e.SOME=1]="SOME"}(o||(o={}));class a{get size(){return this._size}constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10485760;this._maxSize=e,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=new r.A,this._users=new r.A}destroy(){this.clearAll(),this._removeFuncs.clear(),this._users.clear()}register(e){this._users.push(e)}deregister(e){this._users.removeUnordered(e)}registerRemoveFunc(e,t){this._removeFuncs.push([e,t])}deregisterRemoveFunc(e){this._removeFuncs.filterInPlace((t=>t[0]!==e))}get maxSize(){return this._maxSize}set maxSize(e){this._maxSize=Math.max(e,-1),this._checkSize()}getSize(e,t){const i=this._db.get(e.id+t);return i?.size??0}put(e,t,i,r,a){t=e.id+t;const c=this._db.get(t);if(c&&(this._size-=c.size,e.size-=c.size,this._db.delete(t),c.entry!==i&&this._notifyRemove(t,c.entry,c.size,o.ALL)),r>this._maxSize)return void this._notifyRemove(t,i,r,o.ALL);if(void 0===i)return void console.warn("Refusing to cache undefined entry ");if(!r||r<0)return console.warn(`Refusing to cache entry with size ${r} for key ${t}`),void this._notifyRemove(t,i,0,o.ALL);const d=1+Math.max(a,s)-n;this._db.set(t,new l(i,r,d)),this._size+=r,e.size+=r,this._checkSize()}updateSize(e,t,i,r){t=e.id+t;const n=this._db.get(t);if(n&&n.entry===i){for(this._size-=n.size,e.size-=n.size;r>this._maxSize;){const e=this._notifyRemove(t,i,r,o.SOME);if(!(null!=e&&e>0))return void this._db.delete(t);r=e}n.size=r,this._size+=r,e.size+=r,this._checkSize()}}pop(e,t){t=e.id+t;const i=this._db.get(t);if(i)return this._size-=i.size,e.size-=i.size,this._db.delete(t),++this._hit,i.entry;++this._miss}get(e,t){t=e.id+t;const i=this._db.get(t);if(void 0!==i)return this._db.delete(t),i.lives=i.lifetime,this._db.set(t,i),++this._hit,i.entry;++this._miss}peek(e,t){const i=this._db.get(e.id+t);return i?++this._hit:++this._miss,i?.entry}get performanceInfo(){const e={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},t={},i=new Array;this._db.forEach(((e,r)=>{const n=e.lifetime;i[n]=(i[n]||0)+e.size,this._users.forAll((i=>{const{id:n,name:s}=i;if(r.startsWith(n)){const i=t[s]||0;t[s]=i+e.size}}))}));const r={};this._users.forAll((e=>{const i=e.name;if("hitRate"in e&&"number"==typeof e.hitRate&&!isNaN(e.hitRate)&&e.hitRate>0){const n=t[i]||0;t[i]=n,r[i]=Math.round(100*e.hitRate)+"%"}else r[i]="0%"}));const s=Object.keys(t);s.sort(((e,i)=>t[i]-t[e])),s.forEach((i=>e[i]=Math.round(t[i]/2**20)+"MB / "+r[i]));for(let o=i.length-1;o>=0;--o){const t=i[o];t&&(e["Priority "+(o+n-1)]=Math.round(t/this._size*100)+"%")}return e}resetStats(){this._hit=this._miss=0,this._users.forAll((e=>e.resetHitRate()))}clear(e){const t=e.id;this._db.forEach(((e,i)=>{i.startsWith(t)&&(this._size-=e.size,this._db.delete(i),this._notifyRemove(i,e.entry,e.size,o.ALL))})),e.size=0}clearAll(){this._db.forEach(((e,t)=>this._notifyRemove(t,e.entry,e.size,o.ALL))),this._users.forAll((e=>e.size=0)),this._size=0,this._db.clear()}_getHitRate(){return this._hit/(this._hit+this._miss)}_notifyRemove(e,t,i,r){let n;return this._removeFuncs.some((s=>{if(e.startsWith(s[0])){const e=s[1](t,r,i);return"number"==typeof e&&(n=e),!0}return!1})),n}_checkSize(){this._users.forAll((e=>this._checkSizeLimits(e))),this._checkSizeLimits()}_checkSizeLimits(e){const t=e??this;if(t.maxSize<0||t.size<=t.maxSize)return;const i=e?.id;let r=!0;for(;r;){r=!1;for(const[n,s]of this._db)if(0===s.lifetime&&(!i||n.startsWith(i))){if(this._purgeItem(n,s,e),t.size<=.9*t.maxSize)return;r||=this._db.has(n)}}for(const[n,s]of this._db)if((!i||n.startsWith(i))&&(this._purgeItem(n,s,e),t.size<=.9*t.maxSize))return}_purgeItem(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this._users.find((t=>e.startsWith(t.id)));if(this._db.delete(e),t.lives<=1){this._size-=t.size,i&&(i.size-=t.size);const r=this._notifyRemove(e,t.entry,t.size,o.SOME);null!=r&&r>0&&(this._size+=r,i&&(i.size+=r),t.lives=t.lifetime,t.size=r,this._db.set(e,t))}else--t.lives,this._db.set(e,t)}}class l{constructor(e,t,i){this.entry=e,this.size=t,this.lifetime=i,this.lives=i}}},80935:(e,t,i)=>{i.d(t,{R1:()=>o,aY:()=>n,cN:()=>s});var r=i(81284);class n{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.array=e,this.spatialReference=t,this.offset=i}}function s(e){return"array"in e}function o(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ground";if((0,r.v)(t))return e.getElevation(t.x,t.y,t.z||0,t.spatialReference,i);if(s(t)){let r=t.offset;return e.getElevation(t.array[r++],t.array[r++],t.array[r]||0,t.spatialReference??e.spatialReference,i)}return e.getElevation(t[0],t[1],t[2]||0,e.spatialReference,i)}},97583:(e,t,i)=>{i.d(t,{g:()=>g});i(81806);var r=i(90632),n=i(20664),s=i(9392),o=i(55855),a=i(45308),l=i(50468),c=i(87634),d=i(17345),p=i(75507),h=i(37046),u=i(67737),f=i(66470),m=i(8918),v=i(425);class g{constructor(e){this._originSR=e,this._rootOriginId="root/"+(0,r.c)(),this._origins=new Map,this._objects=new Map,this._gridSize=5e5}getOrigin(e){const t=this._origins.get(this._rootOriginId);if(null==t){const t=u.Q.rootOrigin;if(null!=t)return this._origins.set(this._rootOriginId,(0,p.f)(t[0],t[1],t[2],this._rootOriginId)),this.getOrigin(e);const i=(0,p.f)(e[0]+Math.random()-.5,e[1]+Math.random()-.5,e[2]+Math.random()-.5,this._rootOriginId);return this._origins.set(this._rootOriginId,i),i}const i=this._gridSize,r=Math.round(e[0]/i),s=Math.round(e[1]/i),o=Math.round(e[2]/i),a=`${r}/${s}/${o}`;let l=this._origins.get(a);const c=.5*i;if((0,n.d)(_,e,t.vec3),_[0]=Math.abs(_[0]),_[1]=Math.abs(_[1]),_[2]=Math.abs(_[2]),_[0]<c&&_[1]<c&&_[2]<c){if(l){const t=Math.max(..._);if((0,n.d)(_,e,l.vec3),_[0]=Math.abs(_[0]),_[1]=Math.abs(_[1]),_[2]=Math.abs(_[2]),Math.max(..._)<t)return l}return t}return l||(l=(0,p.f)(r*i,s*i,o*i,a),this._origins.set(a,l)),l}_drawOriginBox(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,o.fA)(1,1,0,1);const i=window.view,r=i._stage,n=t.toString();if(!this._objects.has(n)){this._material=new v.W({width:2,color:t}),r.add(this._material);const e=new m.x(r,{pickable:!1}),i=new h.B({castShadow:!1});r.add(i),e.add(i),this._objects.set(n,i)}const s=this._objects.get(n),p=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],u=p.length,g=new Array(3*u),_=new Array,S=.5*this._gridSize;for(let o=0;o<u;o++)g[3*o]=e[0]+(1&p[o]?S:-S),g[3*o+1]=e[1]+(2&p[o]?S:-S),g[3*o+2]=e[2]+(4&p[o]?S:-S),o>0&&_.push(o-1,o);(0,a.projectBuffer)(g,this._originSR,0,g,i.renderSpatialReference,0,u);const T=new d.V(this._material,[[f.r.POSITION,new l.n(g,_,3,!0)]],null,c.X.Line);r.add(T),s.addGeometry(T)}get test(){}}const _=(0,s.vt)()},99443:(e,t,i)=>{i.d(t,{Cz:()=>n,DZ:()=>a,PV:()=>o,vO:()=>r});i(72900),i(93345),i(80895),i(96673);const r=64,n=r/2,s=n/5,o=r/s,a=.25}}]);
//# sourceMappingURL=873.0cc4ebd5.chunk.js.map