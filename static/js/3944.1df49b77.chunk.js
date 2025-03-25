"use strict";(self.webpackChunkfeedback_map=self.webpackChunkfeedback_map||[]).push([[3944],{14509:(t,e,i)=>{i.d(e,{l:()=>a});var s=i(61551),n=i(36201),r=i(86758);class a extends n.A{constructor(){super(...arguments),this._hasCrossfade=!1,this._bitmapTechnique=null}get requiresDedicatedFBO(){return super.requiresDedicatedFBO||this._hasCrossfade}beforeRender(t){super.beforeRender(t),this._manageFade()}onAttach(){super.onAttach(),this._bitmapTechnique=new r.C}onDetach(){super.onDetach(),this._bitmapTechnique?.shutdown(),this._bitmapTechnique=null}renderChildren(t){super.renderChildren(t),this.visible&&t.drawPhase===s.S5.MAP&&null!=this._bitmapTechnique&&this._bitmapTechnique.render(t,{bitmaps:this.children})}_manageFade(){this.children.reduce(((t,e)=>t+(e.inFadeTransition?1:0)),0)>=2?(this.children.forEach((t=>t.blendFunction="additive")),this._hasCrossfade=!0):(this.children.forEach((t=>t.blendFunction="standard")),this._hasCrossfade=!1)}}},14816:(t,e,i)=>{i.d(e,{_:()=>n});var s=i(30726);class n{constructor(){this._result=!1}dispose(){this._program=(0,s.WD)(this._program)}get result(){return null!=this._program&&(this._result=this._test(this._program),this.dispose()),this._result}}},16060:(t,e,i)=>{i.d(e,{LG:()=>d,mb:()=>_,yr:()=>p});var s=i(50346),n=i(63919),r=i(85827),a=i(59422),l=i(8794),o=i(96145),h=i(93345),u=i(80895),c=i(96673);function d(t){return t&&"render"in t}function p(t){const e=document.createElement("canvas");return e.width=t.width,e.height=t.height,t.render(e.getContext("2d")),e}class _ extends l.q{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];super(),this.blendFunction="standard",this._sourceWidth=0,this._sourceHeight=0,this._textureInvalidated=!1,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._texture=null,this._width=void 0,this.x=0,this.y=0,this.immutable=e,this.source=t,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null),null!=this._uploadStatus&&(this._uploadStatus.controller.abort(),this._uploadStatus=null)}get isSourceScaled(){return this.width!==this._sourceWidth||this.height!==this._sourceHeight}get height(){return void 0!==this._height?this._height:this._sourceHeight}set height(t){this._height=t}get source(){return this._source}set source(t){null==t&&null==this._source||(this._source=t,this.invalidateTexture(),this.requestRender())}get texture(){return this._texture}get width(){return void 0!==this._width?this._width:this._sourceWidth}set width(t){this._width=t}beforeRender(t){super.beforeRender(t),this.updateTexture(t)}async setSourceAsync(t,e){null!=this._uploadStatus&&this._uploadStatus.controller.abort();const i=new AbortController,n=(0,s.Tw)();return(0,s.NY)(e,(()=>i.abort())),(0,s.NY)(i,(t=>n.reject(t))),this._uploadStatus={controller:i,resolver:n},this.source=t,n.promise}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this._source instanceof HTMLImageElement?(this._sourceHeight=this._source.naturalHeight,this._sourceWidth=this._source.naturalWidth):this._source&&(this._sourceHeight=this._source.height,this._sourceWidth=this._source.width))}transitionStep(t,e){t>=64&&(this.fadeTransitionEnabled=!1),super.transitionStep(t,e)}setTransform(t){const e=(0,n.D_)(this.transforms.displayViewScreenMat3),[i,s]=t.toScreenNoRotation([0,0],[this.x,this.y]),r=this.resolution/this.pixelRatio/t.resolution,l=r*this.width,o=r*this.height,h=Math.PI*this.rotation/180;(0,n.Tl)(e,e,(0,a.fA)(i,s)),(0,n.Tl)(e,e,(0,a.fA)(l/2,o/2)),(0,n.e$)(e,e,-h),(0,n.Tl)(e,e,(0,a.fA)(-l/2,-o/2)),(0,n.Oe)(e,e,(0,a.fA)(l,o)),(0,n.lw)(this.transforms.displayViewScreenMat3,t.displayViewMat3,e)}setSamplingProfile(t){this._texture&&(t.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(t.samplingMode))}bind(t,e){this._texture&&t.bindTexture(this._texture,e)}async updateTexture(t){let{context:e,painter:i}=t;if(!this._textureInvalidated)return;if(this._textureInvalidated=!1,this._texture||(this._texture=this._createTexture(e)),!this.source)return void this._texture.setData(null);this._texture.resize(this._sourceWidth,this._sourceHeight);const n=function(t){return d(t)?t instanceof o.A?t.getRenderedRasterPixels()?.renderedRasterPixels:p(t):t}(this.source);try{if(null!=this._uploadStatus){const{controller:t,resolver:e}=this._uploadStatus,s={signal:t.signal},{width:r,height:a}=this,l=this._texture,o=i.textureUploadManager;await o.enqueueTextureUpdate({data:n,texture:l,width:r,height:a},s),e.resolve(),this._uploadStatus=null}else this._texture.setData(n);this.ready()}catch(r){(0,s.jH)(r)}}onDetach(){this.destroy()}_createTransforms(){return{displayViewScreenMat3:(0,r.vt)()}}_createTexture(t){const e=this.immutable,i=new c.R;return i.internalFormat=e?h.H0.RGBA8:h.Ab.RGBA,i.wrapMode=h.pF.CLAMP_TO_EDGE,i.isImmutable=e,i.width=this._sourceWidth,i.height=this._sourceHeight,new u.g(t,i)}}},27534:(t,e,i)=>{i.d(e,{Ph:()=>r,Z0:()=>l,hU:()=>n});var s=i(88685);function n(t){const e=t.map((t=>{let{name:e,count:i,type:s}=t;return`${e}.${i}.${s}`})).join(",");return(0,s.Wm)(e)}function r(t,e,i,s,n,a,l){if(t.primitiveName===e){let e=s?.readWithDefault(n,a,t[i]&&l);return"text"===t.type&&(e=e.toString()),void(t[i]=e)}if("type"in t&&null!=t.type){if(t.effects)for(const o of t.effects)r(o,e,i,s,n,a,l);switch(t.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(t.symbolLayers)for(const o of t.symbolLayers)r(o,e,i,s,n,a,l);break;case"CIMTextSymbol":t.symbol&&r(t.symbol,e,i,s,n,a,l);break;case"CIMHatchFill":t.lineSymbol&&r(t.lineSymbol,e,i,s,n,a,l);break;case"CIMPictureMarker":case"CIMCharacterMarker":case"CIMVectorMarker":if(t.markerPlacement&&r(t.markerPlacement,e,i,s,n,a,l),"CIMVectorMarker"===t.type&&t.markerGraphics)for(const o of t.markerGraphics)r(o,e,i,s,n,a,l),r(o.symbol,e,i,s,n,a,l)}}}const a=400;function l(t){const e=t.width;return null!=t.effects?a:Math.max(1.25*e,8)}},28163:(t,e,i)=>{i.d(e,{_R:()=>r});class s{constructor(t,e,i,s,n,r,a,l,o){this.createQuery=t,this.deleteQuery=e,this.resultAvailable=i,this.getResult=s,this.disjoint=n,this.beginTimeElapsed=r,this.endTimeElapsed=a,this.createTimestamp=l,this.timestampBits=o}}let n=!1;function r(t,e){if(e.disjointTimerQuery)return null;let i=t.getExtension("EXT_disjoint_timer_query_webgl2");return i?new s((()=>t.createQuery()),(e=>{t.deleteQuery(e),n=!1}),(e=>t.getQueryParameter(e,t.QUERY_RESULT_AVAILABLE)),(e=>t.getQueryParameter(e,t.QUERY_RESULT)),(()=>t.getParameter(i.GPU_DISJOINT_EXT)),(e=>{n||(n=!0,t.beginQuery(i.TIME_ELAPSED_EXT,e))}),(()=>{t.endQuery(i.TIME_ELAPSED_EXT),n=!1}),(t=>i.queryCounterEXT(t,i.TIMESTAMP_EXT)),(()=>t.getQuery(i.TIMESTAMP_EXT,i.QUERY_COUNTER_BITS_EXT))):(i=t.getExtension("EXT_disjoint_timer_query"),i?new s((()=>i.createQueryEXT()),(t=>{i.deleteQueryEXT(t),n=!1}),(t=>i.getQueryObjectEXT(t,i.QUERY_RESULT_AVAILABLE_EXT)),(t=>i.getQueryObjectEXT(t,i.QUERY_RESULT_EXT)),(()=>t.getParameter(i.GPU_DISJOINT_EXT)),(t=>{n||(n=!0,i.beginQueryEXT(i.TIME_ELAPSED_EXT,t))}),(()=>{i.endQueryEXT(i.TIME_ELAPSED_EXT),n=!1}),(t=>i.queryCounterEXT(t,i.TIMESTAMP_EXT)),(()=>i.getQueryEXT(i.TIMESTAMP_EXT,i.QUERY_COUNTER_BITS_EXT))):null)}},33721:(t,e,i)=>{i.d(e,{H:()=>c});var s=i(89241),n=i(76718),r=i(93345),a=i(12331),l=i(80895),o=i(96673),h=i(36911),u=i(14816);class c extends u._{constructor(t){super(),this._rctx=t;this._program=t.programCache.acquire("\n    precision highp float;\n\n    attribute vec2 a_pos;\n    varying vec2 v_uv;\n\n    void main() {\n      v_uv = a_pos;\n      gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n    }\n    ","\n    precision highp float;\n\n    varying vec2 v_uv;\n\n    uniform sampler2D u_texture;\n\n    void main() {\n      gl_FragColor = texture2D(u_texture, v_uv);\n    }\n    ",new Map([["a_pos",0]]))}dispose(){super.dispose()}_test(t){const e=this._rctx;if(!e.gl)return t.dispose(),!0;const i=new o.R(1);i.wrapMode=r.pF.CLAMP_TO_EDGE,i.samplingMode=r.Cj.NEAREST;const u=new a.H(e,i),c=n.g.createVertex(e,r._U.STATIC_DRAW,new Uint16Array([0,0,1,0,0,1,1,1])),p=new h.Z(e,new Map([["a_pos",0]]),s.VS,new Map([["geometry",c]])),_=new o.R;_.samplingMode=r.Cj.LINEAR,_.wrapMode=r.pF.CLAMP_TO_EDGE;const g=new l.g(e,_,d);e.useProgram(t),e.bindTexture(g,0),t.setUniform1i("u_texture",0);const m=e.getBoundFramebufferObject(),{x:f,y:x,width:y,height:w}=e.getViewport();e.bindFramebuffer(u),e.setViewport(0,0,1,1),e.setClearColor(0,0,0,0),e.setBlendingEnabled(!1),e.clear(r.NV.COLOR),e.bindVAO(p),e.drawArrays(r.WR.TRIANGLE_STRIP,0,4);const b=new Uint8Array(4);return u.readPixels(0,0,1,1,r.Ab.RGBA,r.ld.UNSIGNED_BYTE,b),p.dispose(),u.dispose(),g.dispose(),e.setViewport(f,x,y,w),e.bindFramebuffer(m),255!==b[0]}}const d=new Image;d.src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='5' height='5' version='1.1' viewBox='0 0 5 5' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='5' height='5' fill='%23f00' fill-opacity='.5'/%3E%3C/svg%3E%0A",d.width=5,d.height=5,d.decode()},57162:(t,e,i)=>{i.d(e,{Ey:()=>S,Ky:()=>h,Ms:()=>H,Os:()=>o,Uy:()=>p,Xt:()=>d,gh:()=>l,hG:()=>c,kn:()=>_,p3:()=>a});var s=i(83490),n=i(93345);function r(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.Tb.ADD,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[0,0,0,0];return{srcRgb:t,srcAlpha:t,dstRgb:e,dstAlpha:e,opRgb:i,opAlpha:i,color:{r:s[0],g:s[1],b:s[2],a:s[3]}}}function a(t,e,i,s){let r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:n.Tb.ADD,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:n.Tb.ADD,l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[0,0,0,0];return{srcRgb:t,srcAlpha:e,dstRgb:i,dstAlpha:s,opRgb:r,opAlpha:a,color:{r:l[0],g:l[1],b:l[2],a:l[3]}}}const l=r(n.dn.ZERO,n.dn.ONE_MINUS_SRC_ALPHA),o=(r(n.dn.ONE,n.dn.ZERO),r(n.dn.ONE,n.dn.ONE),r(n.dn.ONE,n.dn.ONE_MINUS_SRC_ALPHA)),h=a(n.dn.SRC_ALPHA,n.dn.ONE,n.dn.ONE_MINUS_SRC_ALPHA,n.dn.ONE_MINUS_SRC_ALPHA),u={face:n.Y7.BACK,mode:n.Ac.CCW},c={face:n.Y7.FRONT,mode:n.Ac.CCW},d=t=>t===s.s2.Back?u:t===s.s2.Front?c:null,p={zNear:0,zFar:1},_={r:!0,g:!0,b:!0,a:!0};function g(t){return I.intern(t)}function m(t){return M.intern(t)}function f(t){return V.intern(t)}function x(t){return D.intern(t)}function y(t){return k.intern(t)}function w(t){return U.intern(t)}function b(t){return N.intern(t)}function v(t){return F.intern(t)}function T(t){return G.intern(t)}function S(t){return z.intern(t)}class A{constructor(t,e){this._makeKey=t,this._makeRef=e,this._interns=new Map}intern(t){if(!t)return null;const e=this._makeKey(t),i=this._interns;return i.has(e)||i.set(e,this._makeRef(t)),i.get(e)??null}}function E(t){return"["+t.join(",")+"]"}const I=new A(C,(t=>({__tag:"Blending",...t})));function C(t){return t?E([t.srcRgb,t.srcAlpha,t.dstRgb,t.dstAlpha,t.opRgb,t.opAlpha,t.color.r,t.color.g,t.color.b,t.color.a]):null}const M=new A(R,(t=>({__tag:"Culling",...t})));function R(t){return t?E([t.face,t.mode]):null}const V=new A(O,(t=>({__tag:"PolygonOffset",...t})));function O(t){return t?E([t.factor,t.units]):null}const D=new A(P,(t=>({__tag:"DepthTest",...t})));function P(t){return t?E([t.func]):null}const k=new A(B,(t=>({__tag:"StencilTest",...t})));function B(t){return t?E([t.function.func,t.function.ref,t.function.mask,t.operation.fail,t.operation.zFail,t.operation.zPass]):null}const U=new A(L,(t=>({__tag:"DepthWrite",...t})));function L(t){return t?E([t.zNear,t.zFar]):null}const N=new A(W,(t=>({__tag:"ColorWrite",...t})));function W(t){return t?E([t.r,t.g,t.b,t.a]):null}const F=new A(j,(t=>({__tag:"StencilWrite",...t})));function j(t){return t?E([t.mask]):null}const G=new A(q,(t=>({__tag:"DrawBuffers",...t})));function q(t){return t?E(t.buffers):null}const z=new A((function(t){return t?E([C(t.blending),R(t.culling),O(t.polygonOffset),P(t.depthTest),B(t.stencilTest),L(t.depthWrite),W(t.colorWrite),j(t.stencilWrite),q(t.drawBuffers)]):null}),(t=>({blending:g(t.blending),culling:m(t.culling),polygonOffset:f(t.polygonOffset),depthTest:x(t.depthTest),stencilTest:y(t.stencilTest),depthWrite:w(t.depthWrite),colorWrite:b(t.colorWrite),stencilWrite:v(t.stencilWrite),drawBuffers:T(t.drawBuffers)})));class H{constructor(t){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._drawBuffersInvalid=!0,this._stateSetters=t}setPipeline(t){(this._pipelineInvalid||t!==this._pipeline)&&(this._setBlending(t.blending),this._setCulling(t.culling),this._setPolygonOffset(t.polygonOffset),this._setDepthTest(t.depthTest),this._setStencilTest(t.stencilTest),this._setDepthWrite(t.depthWrite),this._setColorWrite(t.colorWrite),this._setStencilWrite(t.stencilWrite),this._setDrawBuffers(t.drawBuffers),this._pipeline=t),this._pipelineInvalid=!1}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDrawBuffers(){this._drawBuffersInvalid=!0,this._pipelineInvalid=!0}_setBlending(t){this._blending=this._setSubState(t,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}_setCulling(t){this._culling=this._setSubState(t,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}_setPolygonOffset(t){this._polygonOffset=this._setSubState(t,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}_setDepthTest(t){this._depthTest=this._setSubState(t,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}_setStencilTest(t){this._stencilTest=this._setSubState(t,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}_setDepthWrite(t){this._depthWrite=this._setSubState(t,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}_setColorWrite(t){this._colorWrite=this._setSubState(t,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}_setStencilWrite(t){this._stencilWrite=this._setSubState(t,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}_setDrawBuffers(t){this._drawBuffers=this._setSubState(t,this._drawBuffers,this._drawBuffersInvalid,this._stateSetters.setDrawBuffers),this._drawBuffersInvalid=!1}_setSubState(t,e,i,s){return(i||t!==e)&&(s(t),this._pipelineInvalid=!0),t}}},71853:(t,e,i)=>{i.d(e,{EO:()=>m,OI:()=>_,Pp:()=>c,Qg:()=>d,VC:()=>p,b4:()=>l,hB:()=>f,hE:()=>h,kc:()=>o,xV:()=>u,z:()=>g});var s=i(72745),n=i(93345),r=i(80895),a=i(96673);function l(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"nearest";const s=!(arguments.length>3&&void 0!==arguments[3]&&arguments[3]&&"u8"===e.pixelType),l=s?n.ld.FLOAT:n.ld.UNSIGNED_BYTE,o=null==e.pixels||0===e.pixels.length?null:s?e.getAsRGBAFloat():e.getAsRGBA(),h=t.capabilities.textureFloatLinear,u=new a.R;return u.width=e.width,u.height=e.height,u.internalFormat=s?n.H0.RGBA32F:n.Ab.RGBA,u.samplingMode=!h||"bilinear"!==i&&"cubic"!==i?n.Cj.NEAREST:n.Cj.LINEAR,u.dataType=l,u.wrapMode=n.pF.CLAMP_TO_EDGE,new r.g(t,u,o)}function o(t,e){const{spacing:i,offsets:s,coefficients:l,size:[o,h]}=e,u=i[0]>1,c=new a.R;c.width=u?4*o:o,c.height=h,c.internalFormat=n.H0.RGBA32F,c.dataType=n.ld.FLOAT,c.samplingMode=n.Cj.NEAREST,c.wrapMode=n.pF.CLAMP_TO_EDGE;const d=new Float32Array(u?o*h*16:2*s.length);if(u&&null!=l)for(let n=0,r=0;n<l.length;n++)d[r++]=l[n],n%3==2&&(d[r++]=1);else for(let n=0;n<h;n++)for(let t=0;t<o;t++){const e=4*(n*o+t),i=2*(t*h+n);d[e]=s[i],d[e+1]=s[i+1],d[e+3]=-1===s[i]?0:1}return new r.g(t,c,d)}function h(t,e){const i=new a.R;return i.internalFormat=n.Ab.RGBA,i.width=e.length/4,i.height=1,i.samplingMode=n.Cj.NEAREST,i.wrapMode=n.pF.CLAMP_TO_EDGE,new r.g(t,i,e)}function u(t,e,i){return{u_flipY:!(arguments.length>4&&void 0!==arguments[4])||arguments[4],u_applyTransform:!!t,u_opacity:arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,u_transformSpacing:t?t.spacing:s.uY,u_transformGridSize:t?t.size:s.uY,u_targetImageSize:e,u_srcImageSize:i}}function c(t,e){return{u_colormapOffset:e||0,u_colormapMaxIndex:t?t.length/4-1:0}}function d(t,e){return{u_scale:t,u_offset:e}}function p(t){return{u_bandCount:t.bandCount,u_minOutput:t.minOutput,u_maxOutput:t.maxOutput,u_minCutOff:t.minCutOff,u_maxCutOff:t.maxCutOff,u_factor:t.factor,u_useGamma:t.useGamma,u_gamma:t.gamma,u_gammaCorrection:t.gammaCorrection}}function _(t){return{u_hillshadeType:t.hillshadeType,u_sinZcosAs:t.sinZcosAs,u_sinZsinAs:t.sinZsinAs,u_cosZs:t.cosZs,u_weights:t.weights,u_factor:t.factor,u_minValue:t.minValue,u_maxValue:t.maxValue}}function g(t,e){const i=t.gl,s=e.glName,n=new Map;if(null==s)return n;const r=i.getProgramParameter(s,i.ACTIVE_UNIFORMS);let a;for(let l=0;l<r;l++)a=i.getActiveUniform(s,l),a&&n.set(a.name,{location:i.getUniformLocation(s,a.name),info:a});return n}function m(t,e,i){Object.keys(i).forEach((s=>{const r=e.get(s)||e.get(s+"[0]");r&&function(t,e,i,s){if(null===s||null==i)return!1;const{info:r}=s;switch(r.type){case n.xV.FLOAT:r.size>1?t.setUniform1fv(e,i):t.setUniform1f(e,i);break;case n.xV.FLOAT_VEC2:t.setUniform2fv(e,i);break;case n.xV.FLOAT_VEC3:t.setUniform3fv(e,i);break;case n.xV.FLOAT_VEC4:t.setUniform4fv(e,i);break;case n.xV.FLOAT_MAT3:t.setUniformMatrix3fv(e,i);break;case n.xV.FLOAT_MAT4:t.setUniformMatrix4fv(e,i);break;case n.xV.INT:r.size>1?t.setUniform1iv(e,i):t.setUniform1i(e,i);break;case n.xV.BOOL:t.setUniform1i(e,i?1:0);break;case n.xV.INT_VEC2:case n.xV.BOOL_VEC2:t.setUniform2iv(e,i);break;case n.xV.INT_VEC3:case n.xV.BOOL_VEC3:t.setUniform3iv(e,i);break;case n.xV.INT_VEC4:case n.xV.BOOL_VEC4:t.setUniform4iv(e,i);break;default:return!1}}(t,s,i[s],r)}))}function f(t,e,i,s){i.length===s.length&&(s.some((t=>null==t))||i.some((t=>null==t))||i.forEach(((i,n)=>{e.setUniform1i(i,n),t.bindTexture(s[n],n)})))}},83380:(t,e,i)=>{i.r(e),i.d(e,{default:()=>N});var s=i(35143),n=i(55171),r=i(94643),a=i(30726),l=i(68134),o=i(90534),h=i(46053),u=(i(81806),i(76460),i(47249),i(85842)),c=i(76797),d=i(9624),p=i(13312),_=i(42553);let g=class extends _.A{constructor(){super(...arguments),this.id=0,this.rotation=0,this.href="",this.extent=new c.A}};(0,s._)([(0,h.MZ)({nonNullable:!0,json:{write:!0}})],g.prototype,"id",void 0),(0,s._)([(0,h.MZ)({nonNullable:!0,json:{write:!0}})],g.prototype,"rotation",void 0),(0,s._)([(0,h.MZ)({nonNullable:!0,json:{write:!0}})],g.prototype,"href",void 0),(0,s._)([(0,h.MZ)({type:c.A,nonNullable:!0,json:{write:!0}})],g.prototype,"extent",void 0),g=(0,s._)([(0,u.$)("esri.layers.support.KMLMapImage")],g);var m=i(69834),f=i(54994),x=i(64519),y=i(16060),w=i(14509),b=i(23246),v=i(31394),T=i(69679),S=i(91196),A=i(3825),E=i(19247),I=i(59844),C=i(463),M=i(61142),R=i(93345),V=i(12331),O=i(71853),D=i(17016),P=i(80895),k=i(96673);class B{constructor(t){if(this._ownsRctx=!1,t)this._ownsRctx=!1,this._rctx=t;else{if(B._instance)return B._instanceRefCount++,B._instance;B._instanceRefCount=1,B._instance=this,this._ownsRctx=!0;const t=document.createElement("canvas").getContext("webgl2");t.getExtension("OES_texture_float"),this._rctx=new D.e(t,{})}const e=(0,M.p)("raster/reproject","raster/reproject",new Map([["a_position",0]]),{applyProjection:!0,bilinear:!1,bicubic:!1});this._program=this._rctx.programCache.acquire(e.shaders.vertexShader,e.shaders.fragmentShader,e.attributes),this._rctx.useProgram(this._program),this._program.setUniform1f("u_opacity",1),this._program.setUniform1i("u_image",0),this._program.setUniform1i("u_flipY",0),this._program.setUniform1i("u_transformGrid",1),this._quad=new C.A(this._rctx,[0,0,1,0,0,1,1,1])}reprojectTexture(t,e){let i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const s=(0,d.project)(t.extent,e),n=new E.A({x:(t.extent.xmax-t.extent.xmin)/t.texture.descriptor.width,y:(t.extent.ymax-t.extent.ymin)/t.texture.descriptor.height,spatialReference:t.extent.spatialReference}),{x:r,y:a}=(0,I.Wo)(n,e,t.extent);let l=(r+a)/2;const o=Math.round((s.xmax-s.xmin)/l),h=Math.round((s.ymax-s.ymin)/l);l=(s.width/o+s.height/h)/2;const u=new E.A({x:l,y:l,spatialReference:s.spatialReference}),c=(0,I.l0)({projectedExtent:s,srcBufferExtent:t.extent,pixelSize:u,hasWrapAround:!0,spacing:[16,16]}),p=(0,O.kc)(this._rctx,c),_=new k.R(o,h);_.wrapMode=R.pF.CLAMP_TO_EDGE;const g=new V.H(this._rctx,_);this._rctx.bindFramebuffer(g),this._rctx.setViewport(0,0,o,h),this._rctx.useProgram(this._program),this._rctx.bindTexture(t.texture,0),this._rctx.bindTexture(p,1),this._quad.bind();const{width:m=0,height:f=0}=t.texture.descriptor;if(this._program.setUniform2f("u_srcImageSize",m,f),this._program.setUniform2fv("u_transformSpacing",c.spacing),this._program.setUniform2fv("u_transformGridSize",c.size),this._program.setUniform2f("u_targetImageSize",o,h),this._quad.draw(),this._quad.unbind(),this._rctx.useProgram(null),this._rctx.bindFramebuffer(null),p.dispose(),i){const{width:t,height:e}=g,i=new ImageData(t??0,e??0);g.readPixels(0,0,t??0,e??0,R.Ab.RGBA,R.ld.UNSIGNED_BYTE,i.data);const n=g.detachColorTexture(R.Nm.COLOR_ATTACHMENT0);return g.dispose(),{texture:n,extent:s,imageData:i}}const x=g.detachColorTexture(R.Nm.COLOR_ATTACHMENT0);return g.dispose(),{texture:x,extent:s}}reprojectBitmapData(t,e){const i=(0,y.LG)(t.bitmapData)?(0,y.yr)(t.bitmapData):t.bitmapData,s=new k.R;s.wrapMode=R.pF.CLAMP_TO_EDGE,s.width=t.bitmapData.width,s.height=t.bitmapData.height;const n=new P.g(this._rctx,s,i),r=this.reprojectTexture({texture:n,extent:t.extent},e,!0);r.texture.dispose();const a=document.createElement("canvas"),l=r.imageData;return a.width=l.width,a.height=l.height,a.getContext("2d").putImageData(l,0,0),{bitmapData:a,extent:r.extent}}async loadAndReprojectBitmapData(t,e,i){const s=(await(0,A.A)(t,{responseType:"image"})).data,n=document.createElement("canvas");n.width=s.width,n.height=s.height;const r=n.getContext("2d");r.drawImage(s,0,0);const a=r.getImageData(0,0,n.width,n.height);if(e.spatialReference.equals(i))return{bitmapData:a,extent:e};const l=this.reprojectBitmapData({bitmapData:a,extent:e},i);return{bitmapData:l.bitmapData,extent:l.extent}}destroy(){this._ownsRctx?(B._instanceRefCount--,0===B._instanceRefCount&&(this._quad.dispose(),this._program.dispose(),this._rctx.dispose(),B._instance=null)):(this._quad.dispose(),this._program.dispose())}}B._instanceRefCount=0;class U{constructor(){this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[]}}let L=class extends((0,b.e)(S.A)){constructor(){super(...arguments),this._bitmapIndex=new Map,this._mapImageContainer=new w.l,this._kmlVisualData=new U,this._fetchController=null,this.allVisiblePoints=new x.Y,this.allVisiblePolylines=new x.Y,this.allVisiblePolygons=new x.Y,this.allVisibleMapImages=new r.A}async hitTest(t,e){const i=this.layer;return[this._pointsView?.hitTest(t),this._polylinesView?.hitTest(t),this._polygonsView?.hitTest(t)].flat().filter(Boolean).map((e=>(e.layer=i,e.sourceLayer=i,{type:"graphic",graphic:e,layer:i,mapPoint:t})))}update(t){this._polygonsView&&this._polygonsView.processUpdate(t),this._polylinesView&&this._polylinesView.processUpdate(t),this._pointsView&&this._pointsView.processUpdate(t)}attach(){this._fetchController=new AbortController,this.container.addChild(this._mapImageContainer),this._polygonsView=new T.A({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new v.A(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new T.A({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new v.A(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new T.A({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new v.A(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.addAttachHandles([this.allVisibleMapImages.on("change",(t=>{t.added.forEach((t=>this._addMapImage(t))),t.removed.forEach((t=>this._removeMapImage(t)))})),(0,l.wB)((()=>this.layer.visibleSublayers),(t=>{for(const e of this._kmlVisualData.allSublayers.values())e.visibility=0;for(const e of t){const t=this._kmlVisualData.allSublayers.get(e.id);t&&(t.visibility=1)}this._refreshCollections()}))]),this._updatingHandles.addPromise(this._fetchService(this._fetchController.signal)),this._imageReprojector=new B}detach(){this._fetchController=(0,a.DC)(this._fetchController),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView=(0,a.pR)(this._polygonsView),this._polylinesView=(0,a.pR)(this._polylinesView),this._pointsView=(0,a.pR)(this._pointsView),this._imageReprojector=(0,a.pR)(this._imageReprojector)}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange()}moveEnd(){}isUpdating(){return this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(t){(this.view.spatialReference?.isWGS84||this.view.spatialReference?.isWebMercator)&&this._imageReprojector.loadAndReprojectBitmapData(t.href,t.extent,this.view.spatialReference).then((e=>{const i=new y.mb(e.bitmapData);i.x=e.extent.xmin,i.y=e.extent.ymax,i.resolution=e.extent.width/e.bitmapData.width,i.rotation=t.rotation,this._mapImageContainer.addChild(i),this._bitmapIndex.set(t,i)}))}async _getViewDependentUrl(t,e){const{viewFormat:i,viewBoundScale:s,httpQuery:r}=t;if(null!=i){if(null==e)throw new Error("Loading this network link requires a view state.");let a;if(await(0,d.load)(),null!=s&&1!==s){const t=new c.A(e.extent);t.expand(s),a=t}else a=e.extent;a=(0,d.project)(a,p.A.WGS84);const l=(0,d.project)(a,p.A.WebMercator),h=a.xmin,u=a.xmax,_=a.ymin,g=a.ymax,m=e.size[0]*e.pixelRatio,x=e.size[1]*e.pixelRatio,y=Math.max(l.width,l.height),w={"[bboxWest]":h.toString(),"[bboxEast]":u.toString(),"[bboxSouth]":_.toString(),"[bboxNorth]":g.toString(),"[lookatLon]":a.center.x.toString(),"[lookatLat]":a.center.y.toString(),"[lookatRange]":y.toString(),"[lookatTilt]":"0","[lookatHeading]":e.rotation.toString(),"[lookatTerrainLon]":a.center.x.toString(),"[lookatTerrainLat]":a.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":a.center.x.toString(),"[cameraLat]":a.center.y.toString(),"[cameraAlt]":y.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":m.toString(),"[vertPixels]":x.toString(),"[terrainEnabled]":"0","[clientVersion]":n.rE,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},b=t=>{for(const e in t){let i;for(i in w)t[e]=t[e].replace(i,w[i])}},v=(0,o.zf)(i);b(v);let T={};null!=r&&(T=(0,o.zf)(r),b(T));const S=(0,f.Dl)(t.href);return S.query={...S.query,...v,...T},`${S.path}?${(0,o.x0)(v)}`}return t.href}async _fetchService(t){const e=new U;await this._loadVisualData(this.layer.url,e,t),this._kmlVisualData=e,this._refreshCollections()}_refreshCollections(){this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter((t=>this._isSublayerVisible(t.sublayerId))).map((t=>{let{item:e}=t;return e}))),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter((t=>this._isSublayerVisible(t.sublayerId))).map((t=>{let{item:e}=t;return e}))),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter((t=>this._isSublayerVisible(t.sublayerId))).map((t=>{let{item:e}=t;return e}))),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter((t=>this._isSublayerVisible(t.sublayerId))).map((t=>{let{item:e}=t;return e})))}_isSublayerVisible(t){const e=this._kmlVisualData.allSublayers.get(t);return!!e?.visibility&&(-1===e.parentFolderId||this._isSublayerVisible(e.parentFolderId))}_loadVisualData(t,e,i){return this._fetchParsedKML(t,i).then((async t=>{for(const s of t.sublayers){e.allSublayers.set(s.id,s);const t=s.points?await(0,m.Sp)(s.points):[],n=s.polylines?await(0,m.Sp)(s.polylines):[],r=s.polygons?await(0,m.Sp)(s.polygons):[],a=s.mapImages?.map((t=>g.fromJSON(t)))??[];if(e.allPoints.push(...t.map((t=>({item:t,sublayerId:s.id})))),e.allPolylines.push(...n.map((t=>({item:t,sublayerId:s.id})))),e.allPolygons.push(...r.map((t=>({item:t,sublayerId:s.id})))),e.allMapImages.push(...a.map((t=>({item:t,sublayerId:s.id})))),s.networkLink){const t=await this._getViewDependentUrl(s.networkLink,this.view.state);await this._loadVisualData(t,e,i)}}}))}_fetchParsedKML(t,e){return(0,m.Ox)(t,this.layer.spatialReference,this.layer.refreshInterval,e).then((t=>(0,m._4)(t.data)))}_removeMapImage(t){const e=this._bitmapIndex.get(t);e&&(this._mapImageContainer.removeChild(e),this._bitmapIndex.delete(t))}};(0,s._)([(0,h.MZ)()],L.prototype,"_pointsView",void 0),(0,s._)([(0,h.MZ)()],L.prototype,"_polylinesView",void 0),(0,s._)([(0,h.MZ)()],L.prototype,"_polygonsView",void 0),(0,s._)([(0,h.MZ)()],L.prototype,"updating",void 0),L=(0,s._)([(0,u.$)("esri.views.2d.layers.KMLLayerView2D")],L);const N=L},83490:(t,e,i)=>{var s,n,r,a,l,o,h,u;i.d(e,{Am:()=>a,C7:()=>r,JS:()=>u,Mg:()=>o,dd:()=>l,it:()=>n,s2:()=>s,sf:()=>h}),function(t){t[t.None=0]="None",t[t.Front=1]="Front",t[t.Back=2]="Back",t[t.COUNT=3]="COUNT"}(s||(s={})),function(t){t[t.Less=0]="Less",t[t.Lequal=1]="Lequal",t[t.COUNT=2]="COUNT"}(n||(n={})),function(t){t[t.BACKGROUND=0]="BACKGROUND",t[t.UPDATE=1]="UPDATE"}(r||(r={})),function(t){t[t.NOT_LOADED=0]="NOT_LOADED",t[t.LOADING=1]="LOADING",t[t.LOADED=2]="LOADED"}(a||(a={})),function(t){t[t.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",t[t.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(l||(l={})),function(t){t[t.Highlight=0]="Highlight",t[t.MaskOccludee=1]="MaskOccludee"}(o||(o={})),function(t){t[t.Blend=0]="Blend",t[t.Opaque=1]="Opaque",t[t.Mask=2]="Mask",t[t.MaskBlend=3]="MaskBlend",t[t.COUNT=4]="COUNT"}(h||(h={})),function(t){t.DDS_ENCODING="image/vnd-ms.dds",t.KTX2_ENCODING="image/ktx2",t.BASIS_ENCODING="image/x.basis"}(u||(u={}))},86758:(t,e,i)=>{i.d(e,{C:()=>f});var s=i(5095),n=i(70479),r=i(32743),a=i(35143),l=i(6951),o=i(60984);function h(t){const e=function(t){const e=new o.nt(1/6),i=t.multiply(t),s=i.multiply(t),n=e.multiply(s.multiply(-1).add(new o.nt(3).multiply(i)).subtract(new o.nt(3).multiply(t)).add(1)),r=e.multiply(s.multiply(3).subtract(i.multiply(6)).add(4)),a=e.multiply(s.multiply(-3).add(i.multiply(3)).add(t.multiply(3)).add(1)),l=e.multiply(s);return new o.Zb(n,r,a,l)}(t),i=e.x.add(e.y),s=e.z.add(e.w),n=new o.nt(1).subtract(e.y.divide(i)).add(t),r=new o.nt(1).add(e.w.divide(s)).subtract(t);return new o.Zb(n,r,i,s)}class u extends l.ZA{}(0,a._)([(0,l.C5)(0,o.ZY)],u.prototype,"position",void 0);class c extends l.HS{}class d extends l.k2{}(0,a._)([(0,l.Pi)(o.z7)],d.prototype,"texture",void 0),(0,a._)([(0,l.Pi)(o.U)],d.prototype,"dvsMat3",void 0),(0,a._)([(0,l.Pi)(o.ZY)],d.prototype,"coordScale",void 0),(0,a._)([(0,l.Pi)(o.nt)],d.prototype,"opacity",void 0);class p extends l.A{constructor(){super(...arguments),this.type="BitmapShader"}vertex(t){const e=this.config.dvsMat3.multiply(new o.eB(t.position.multiply(this.config.coordScale),1));return{glPosition:new o.Zb(e,1),texcoord:t.position}}fragment(t){const e=new l.mm;let i;return i=this.bicubic?function(t,e,i){const s=new o.ZY(new o.nt(1).divide(i.x),0),n=new o.ZY(0,new o.nt(1).divide(i.y)),r=e.multiply(i).subtract(.5),a=h((0,o.jc)(r).x).xyz,l=h((0,o.jc)(r).y).xyz;let u=e.add(a.x.multiply(s)),c=e.subtract(a.y.multiply(s));const d=u.add(l.x.multiply(n)),p=c.add(l.x.multiply(n));u=u.subtract(l.y.multiply(n)),c=c.subtract(l.y.multiply(n));let _=(0,o.US)(t,c),g=(0,o.US)(t,u);const m=(0,o.US)(t,p),f=(0,o.US)(t,d);return _=(0,o.jh)(_,m,l.z),g=(0,o.jh)(g,f,l.z),_=(0,o.jh)(_,g,a.z),_}(this.config.texture,t.texcoord,this.config.coordScale):(0,o.US)(this.config.texture,t.texcoord),e.fragColor=new o.Zb(i.rgb.multiply(this.config.opacity),i.a.multiply(this.config.opacity)),e}}(0,a._)([(0,l.Pi)(d)],p.prototype,"config",void 0),(0,a._)([l.E8],p.prototype,"bicubic",void 0),(0,a._)([(0,a.a)(0,(0,l.hF)(u))],p.prototype,"vertex",null),(0,a._)([(0,a.a)(0,(0,l.hF)(c))],p.prototype,"fragment",null);var _=i(93345);const g={nearest:{samplingMode:_.Cj.NEAREST,mips:!1},bilinear:{samplingMode:_.Cj.LINEAR,mips:!1},bicubic:{samplingMode:_.Cj.LINEAR,mips:!1},trilinear:{samplingMode:_.Cj.LINEAR_MIPMAP_LINEAR,mips:!0}},m=(t,e,i)=>{if("dynamic"===i.samplingMode){const{state:i}=t,s=e.resolution/e.pixelRatio/i.resolution,n=Math.round(t.pixelRatio)!==t.pixelRatio,r=s>1.05||s<.95;return i.rotation||r||n||e.isSourceScaled||e.rotation?g.bilinear:g.nearest}return g[i.samplingMode]};class f extends n.j{constructor(){super(...arguments),this.name="BrushBitmap",this.type=r.N.Bitmap,this.shaders={bitmap:new p}}render(t,e){const{context:i,renderingOptions:n,painter:r}=t;for(const a of e.bitmaps){const e=a.texture;if(!a.source||!a.isReady||null==e)continue;const l=m(t,a,n);t.timeline.begin(this.name),r.setPipelineState({depth:!1,stencil:{test:{mask:255,ref:a.stencilRef,compare:_.MT.EQUAL,op:{fail:_.eA.KEEP,zFail:_.eA.KEEP,zPass:_.eA.KEEP}},write:!1},color:{write:[!0,!0,!0,!0],blendMode:"additive"===a.blendFunction?"additive":"composite"}}),a.setSamplingProfile(l);const{coordScale:o,computedOpacity:h,transforms:u}=a,c={texture:{texture:e,unit:s.YS},dvsMat3:u.displayViewScreenMat3,coordScale:o,opacity:h};r.submitDrawMesh(i,{shader:this.shaders.bitmap,uniforms:{config:c},defines:{bicubic:l===g.bicubic},optionalAttributes:null,useComputeBuffer:!1},r.quadMesh),t.timeline.end(this.name)}}}},86955:(t,e,i)=>{function s(t){let e="";for(let i=0;i<(arguments.length<=1?0:arguments.length-1);i++)e+=t[i]+(i+1<1||arguments.length<=i+1?void 0:arguments[i+1]);return e+=t[t.length-1],e}function n(t,e){return t?e:arguments.length>2&&void 0!==arguments[2]?arguments[2]:""}i.d(e,{H:()=>s,If:()=>n}),function(t){t.int=function(t){return Math.round(t).toString()},t.float=function(t){return t.toPrecision(8)}}(s)},96145:(t,e,i)=>{i.d(e,{A:()=>s});class s{constructor(t,e,i){this.pixelBlock=t,this.extent=e,this.originalPixelBlock=i}get width(){return null!=this.pixelBlock?this.pixelBlock.width:0}get height(){return null!=this.pixelBlock?this.pixelBlock.height:0}render(t){const e=this.pixelBlock;if(null==e)return;const i=this.filter({extent:this.extent,pixelBlock:this.originalPixelBlock??e});if(null==i.pixelBlock)return;i.pixelBlock.maskIsAlpha&&(i.pixelBlock.premultiplyAlpha=!0);const s=i.pixelBlock.getAsRGBA(),n=t.createImageData(i.pixelBlock.width,i.pixelBlock.height);n.data.set(s),t.putImageData(n,0,0)}getRenderedRasterPixels(){const t=this.filter({extent:this.extent,pixelBlock:this.pixelBlock});return null==t.pixelBlock?null:(t.pixelBlock.maskIsAlpha&&(t.pixelBlock.premultiplyAlpha=!0),{width:t.pixelBlock.width,height:t.pixelBlock.height,renderedRasterPixels:new Uint8Array(t.pixelBlock.getAsRGBA().buffer)})}}}}]);
//# sourceMappingURL=3944.1df49b77.chunk.js.map