"use strict";(self.webpackChunkfeedback_map=self.webpackChunkfeedback_map||[]).push([[2966],{2395:(e,t,r)=>{r.d(t,{L0:()=>g,Ot:()=>y,W4:()=>l,uV:()=>p});var n=r(35143),o=r(42553),i=r(46053),s=(r(81806),r(76460),r(47249),r(6409)),a=r(85842);let l=class extends o.A{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};(0,n._)([(0,i.MZ)({type:Number})],l.prototype,"nodesPerPage",void 0),(0,n._)([(0,i.MZ)({type:Number})],l.prototype,"rootIndex",void 0),(0,n._)([(0,i.MZ)({type:String})],l.prototype,"lodSelectionMetricType",void 0),l=(0,n._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SNodePageDefinition")],l);let u=class extends o.A{constructor(){super(...arguments),this.factor=1}};(0,n._)([(0,i.MZ)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],u.prototype,"id",void 0),(0,n._)([(0,i.MZ)({type:Number})],u.prototype,"factor",void 0),u=(0,n._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SMaterialTexture")],u);let c=class extends o.A{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};(0,n._)([(0,i.MZ)({type:[Number]})],c.prototype,"baseColorFactor",void 0),(0,n._)([(0,i.MZ)({type:u})],c.prototype,"baseColorTexture",void 0),(0,n._)([(0,i.MZ)({type:u})],c.prototype,"metallicRoughnessTexture",void 0),(0,n._)([(0,i.MZ)({type:Number})],c.prototype,"metallicFactor",void 0),(0,n._)([(0,i.MZ)({type:Number})],c.prototype,"roughnessFactor",void 0),c=(0,n._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SMaterialPBRMetallicRoughness")],c);let p=class extends o.A{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};(0,n._)([(0,s.e)({opaque:"opaque",mask:"mask",blend:"blend"})],p.prototype,"alphaMode",void 0),(0,n._)([(0,i.MZ)({type:Number})],p.prototype,"alphaCutoff",void 0),(0,n._)([(0,i.MZ)({type:Boolean})],p.prototype,"doubleSided",void 0),(0,n._)([(0,s.e)({none:"none",back:"back",front:"front"})],p.prototype,"cullFace",void 0),(0,n._)([(0,i.MZ)({type:u})],p.prototype,"normalTexture",void 0),(0,n._)([(0,i.MZ)({type:u})],p.prototype,"occlusionTexture",void 0),(0,n._)([(0,i.MZ)({type:u})],p.prototype,"emissiveTexture",void 0),(0,n._)([(0,i.MZ)({type:[Number]})],p.prototype,"emissiveFactor",void 0),(0,n._)([(0,i.MZ)({type:c})],p.prototype,"pbrMetallicRoughness",void 0),p=(0,n._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SMaterialDefinition")],p);let d=class extends o.A{};(0,n._)([(0,i.MZ)({type:String,json:{read:{source:["name","index"],reader:(e,t)=>null!=e?e:`${t.index}`}}})],d.prototype,"name",void 0),(0,n._)([(0,s.e)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],d.prototype,"format",void 0),d=(0,n._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3STextureFormat")],d);let y=class extends o.A{constructor(){super(...arguments),this.atlas=!1}};(0,n._)([(0,i.MZ)({type:[d]})],y.prototype,"formats",void 0),(0,n._)([(0,i.MZ)({type:Boolean})],y.prototype,"atlas",void 0),y=(0,n._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3STextureSetDefinition")],y);let f=class extends o.A{};(0,n._)([(0,s.e)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],f.prototype,"type",void 0),(0,n._)([(0,i.MZ)({type:Number})],f.prototype,"component",void 0),f=(0,n._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SGeometryAttribute")],f);let m=class extends o.A{};(0,n._)([(0,s.e)({draco:"draco"})],m.prototype,"encoding",void 0),(0,n._)([(0,i.MZ)({type:[String]})],m.prototype,"attributes",void 0),m=(0,n._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SGeometryCompressedAttributes")],m);let h=class extends o.A{constructor(){super(...arguments),this.offset=0}};(0,n._)([(0,i.MZ)({type:Number})],h.prototype,"offset",void 0),(0,n._)([(0,i.MZ)({type:f})],h.prototype,"position",void 0),(0,n._)([(0,i.MZ)({type:f})],h.prototype,"normal",void 0),(0,n._)([(0,i.MZ)({type:f})],h.prototype,"uv0",void 0),(0,n._)([(0,i.MZ)({type:f})],h.prototype,"color",void 0),(0,n._)([(0,i.MZ)({type:f})],h.prototype,"uvRegion",void 0),(0,n._)([(0,i.MZ)({type:f})],h.prototype,"featureId",void 0),(0,n._)([(0,i.MZ)({type:f})],h.prototype,"faceRange",void 0),(0,n._)([(0,i.MZ)({type:m})],h.prototype,"compressedAttributes",void 0),h=(0,n._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SGeometryBuffer")],h);let g=class extends o.A{};(0,n._)([(0,s.e)({triangle:"triangle"})],g.prototype,"topology",void 0),(0,n._)([(0,i.MZ)()],g.prototype,"geometryBuffers",void 0),g=(0,n._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SGeometryDefinition")],g)},3196:(e,t,r)=>{r.r(t),r.d(t,{default:()=>q});var n,o=r(35143),i=r(50076),s=r(76460),a=r(77717),l=r(50346),u=r(68134),c=r(46053),p=(r(81806),r(47249),r(28379)),d=r(85842),y=r(37546),f=r(25515),m=r(12406),h=r(19502),g=r(31362),v=r(11270),S=r(94729),_=r(5682),w=r(90260),x=r(95363),M=r(2395),b=r(3825),I=r(94643),T=r(42553),Z=r(90534),A=r(53084),j=r(62754),N=r(17707),P=r(65215),R=r(9624);let D=n=class extends T.A{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,r,n){if(n.layer?.spatialReference&&!n.layer.spatialReference.equals(this.geometry.spatialReference)){if(!(0,R.canProjectWithoutEngine)(e.spatialReference,n.layer.spatialReference))return void(n?.messages&&n.messages.push(new j.A("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:n.layer.spatialReference,context:n})));const o=new P.A;(0,R.projectPolygon)(e,o,n.layer.spatialReference),t[r]=o.toJSON(n)}else t[r]=e.toJSON(n);delete t[r].spatialReference}clone(){return new n({geometry:(0,A.o8)(this.geometry),type:this.type})}};(0,o._)([(0,c.MZ)({type:P.A}),(0,y.P)()],D.prototype,"geometry",void 0),(0,o._)([(0,N.K)(["web-scene","portal-item"],"geometry")],D.prototype,"writeGeometry",null),(0,o._)([(0,c.MZ)({type:["clip","mask","replace"],nonNullable:!0}),(0,y.P)()],D.prototype,"type",void 0),D=n=(0,o._)([(0,d.$)("esri.layers.support.SceneModification")],D);const E=D;var O;let U=O=class extends(T.A.JSONSupportMixin(I.A.ofType(E))){constructor(e){super(e),this.url=null}clone(){return new O({url:this.url,items:this.items.map((e=>e.clone()))})}toJSON(e){return this.toArray().map((t=>t.toJSON(e))).filter((e=>!!e.geometry))}static fromJSON(e,t){const r=new O;for(const n of e)r.add(E.fromJSON(n,t));return r}static async fromUrl(e,t,r){const n={url:(0,Z.An)(e),origin:"service"},o=await(0,b.A)(e,{responseType:"json",signal:r?.signal}),i=t.toJSON(),s=[];for(const a of o.data)s.push(E.fromJSON({...a,geometry:{...a.geometry,spatialReference:i}},n));return new O({url:e,items:s})}};(0,o._)([(0,c.MZ)({type:String})],U.prototype,"url",void 0),U=O=(0,o._)([(0,d.$)("esri.layers.support.SceneModifications")],U);const L=U;var $=r(12482),k=r(79453);let F=class extends((0,w.w6)((0,h.b)((0,v.q)((0,S.A)((0,_.j)((0,a.P)((0,g.d)((0,m.p)(f.A))))))))){constructor(){super(...arguments),this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.path=null,this.definitionExpression=null}initialize(){this.addHandles((0,u.on)((()=>this.modifications),"after-changes",(()=>this.modifications=this.modifications),u.OH))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readModifications(e,t,r){this._modificationsSource={url:(0,k.f)(e,r),context:r}}set elevationInfo(e){null!=e&&"absolute-height"!==e.mode||this._set("elevationInfo",e),this._validateElevationInfo(e)}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=e?.signal;try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(r){(0,l.QP)(r)}if(await this._fetchService(t),null!=this._modificationsSource){const t=await L.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(null!=this._modificationsSource)return this.load().then((()=>{}),(()=>{}))}async saveAs(e,t){return this._debouncedSaveOperations(w.Xh.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(w.Xh.SAVE,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new i.A("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new i.A("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new i.A("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}_validateElevationInfo(e){const t="Integrated mesh layers";(0,$.XF)(s.A.getLogger(this),(0,$.B)(t,"absolute-height",e)),(0,$.XF)(s.A.getLogger(this),(0,$.tW)(t,e))}};(0,o._)([(0,c.MZ)({type:String,readOnly:!0})],F.prototype,"geometryType",void 0),(0,o._)([(0,c.MZ)({type:["show","hide"]})],F.prototype,"listMode",void 0),(0,o._)([(0,c.MZ)({type:["IntegratedMeshLayer"]})],F.prototype,"operationalLayerType",void 0),(0,o._)([(0,c.MZ)({json:{read:!1},readOnly:!0})],F.prototype,"type",void 0),(0,o._)([(0,c.MZ)({type:M.W4,readOnly:!0})],F.prototype,"nodePages",void 0),(0,o._)([(0,c.MZ)({type:[M.uV],readOnly:!0})],F.prototype,"materialDefinitions",void 0),(0,o._)([(0,c.MZ)({type:[M.Ot],readOnly:!0})],F.prototype,"textureSetDefinitions",void 0),(0,o._)([(0,c.MZ)({type:[M.L0],readOnly:!0})],F.prototype,"geometryDefinitions",void 0),(0,o._)([(0,c.MZ)({readOnly:!0})],F.prototype,"serviceUpdateTimeStamp",void 0),(0,o._)([(0,c.MZ)({type:L}),(0,y.P)({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],F.prototype,"modifications",void 0),(0,o._)([(0,p.w)(["web-scene","portal-item"],"modifications")],F.prototype,"readModifications",null),(0,o._)([(0,c.MZ)(x.Yj)],F.prototype,"elevationInfo",null),(0,o._)([(0,c.MZ)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],F.prototype,"path",void 0),F=(0,o._)([(0,d.$)("esri.layers.IntegratedMeshLayer")],F);const q=F},5682:(e,t,r)=>{r.d(t,{j:()=>s});var n=r(35143),o=r(46053),i=(r(81806),r(76460),r(47249),r(85842));const s=e=>{let t=class extends e{constructor(){super(...arguments),this.minScale=0,this.maxScale=0}get effectiveScaleRange(){const e={minScale:this.minScale,maxScale:this.maxScale},t=this.parent;t&&"effectiveScaleRange"in t&&function(e,t){e.minScale=e.minScale>0?t.minScale>0?Math.min(e.minScale,t.minScale):e.minScale:t.minScale,e.maxScale=e.maxScale>0?t.maxScale>0?Math.max(e.maxScale,t.maxScale):e.maxScale:t.maxScale}(e,t.effectiveScaleRange);const r=this._get("effectiveScaleRange");return r&&r.minScale===e.minScale&&r.maxScale===e.maxScale?r:e}};return(0,n._)([(0,o.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"minScale",void 0),(0,n._)([(0,o.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"maxScale",void 0),(0,n._)([(0,o.MZ)({readOnly:!0})],t.prototype,"effectiveScaleRange",null),t=(0,n._)([(0,i.$)("esri.layers.mixins.ScaleRangeLayer")],t),t}},12482:(e,t,r)=>{r.d(t,{$7:()=>I,B:()=>b,Fo:()=>w,M7:()=>A,NN:()=>d,Q5:()=>x,Tq:()=>N,Up:()=>M,XF:()=>Z,Ze:()=>g,bK:()=>a,bh:()=>p,id:()=>v,ky:()=>c,qt:()=>j,tW:()=>T,v9:()=>y,w7:()=>l,wF:()=>s,wS:()=>S,wz:()=>m,x:()=>f,xS:()=>_,ze:()=>u});var n=r(31633),o=r(59097);function i(e){return e?j:N}function s(e,t){return t?.mode?t.mode:i(e).mode}function a(e,t){return null!=t?t:i(e)}function l(e,t){return s(null==e||(e.hasZ??!1),t)}function u(e,t){return a(null==e||(e.hasZ??!1),t)}function c(e){const t=h(e);return l(e.geometry,t)}function p(e){const t=h(e),r=l(e.geometry,t),n=null!=t&&"on-the-ground"!==r?A(t):0,o=t?.featureExpressionInfo;return{mode:r,offset:n,featureExpressionInfo:o}}function d(e){return m(p(e))}function y(e){return m(e)||f(e)}function f(e){return"0"===e?.featureExpressionInfo?.expression}function m(e){if(!e)return!1;if("on-the-ground"===e.mode)return!1;const t=e?.featureExpressionInfo?e.featureExpressionInfo.expression:null;return!(!t||"0"===t)}function h(e){return e.layer&&"elevationInfo"in e.layer?e.layer.elevationInfo:null}function g(e,t){if(!e?.offset)return 0;const{offset:r,unit:o}=e;if("decimal-degrees"===o)return 0;const i="unknown"!==o&&o?o:"meters",s=(0,n.mq)(t);return s?(0,n.oU)(r,i,s):0}function v(e,t,r){if(!r?.mode)return;const n=e.hasZ?e.z:0,o=g(r,e.spatialReference);switch(r.mode){case"absolute-height":return n-o;case"on-the-ground":return 0;case"relative-to-ground":return n-((t.elevationProvider.getElevation(e.x,e.y,n,e.spatialReference,"ground")??0)+o);case"relative-to-scene":return n-((t.elevationProvider.getElevation(e.x,e.y,n,e.spatialReference,"scene")??0)+o)}}function S(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return w(e,t.x,t.y,t.hasZ?t.z:0,t.spatialReference,r,n)}function _(e,t,r,n){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return w(e,t[0],t[1],t.length>2?t[2]:0,r,n,o)}function w(e,t,r,n,o,i){let s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;if(null==i)return;const a=null!=s?s.mode:"absolute-height";if("on-the-ground"===a)return 0;const{absoluteZ:l}=x(t,r,n,o,e,i);return function(e,t,r,n,o,i,s,a){const l=g(s,o);switch(a){case"absolute-height":return e-l;case"relative-to-ground":return e-((i.elevationProvider.getElevation(t,r,n,o,"ground")??0)+l);case"relative-to-scene":return e-((i.elevationProvider.getElevation(t,r,n,o,"scene")??0)+l)}}(l,t,r,n,o,e,s,a)}function x(e,t,r,n,o,i){const s=g(i,n);switch(i.mode){case"absolute-height":return{absoluteZ:r+s,elevation:0};case"on-the-ground":{const r=o.elevationProvider.getElevation(e,t,0,n,"ground")??0;return{absoluteZ:r,elevation:r}}case"relative-to-ground":{const i=o.elevationProvider.getElevation(e,t,r,n,"ground")??0;return{absoluteZ:r+i+s,elevation:i}}case"relative-to-scene":{const i=o.elevationProvider.getElevation(e,t,r,n,"scene")??0;return{absoluteZ:r+i+s,elevation:i}}}}function M(e,t){if(null==t)return!1;const{mode:r}=t;return null!=r&&("scene"===e&&"relative-to-scene"===r||"ground"===e&&"absolute-height"!==r)}function b(e,t,r){return r&&r.mode!==t?`${e} only support ${t} elevation mode`:null}function I(e,t,r){return r?.mode===t?`${e} do not support ${t} elevation mode`:null}function T(e,t){return null!=t?.featureExpressionInfo&&"0"!==t.featureExpressionInfo.expression?`${e} do not support featureExpressionInfo`:null}function Z(e,t){t&&e.warn(".elevationInfo=",t)}function A(e){return(e?.offset??0)*(0,o.Ao)(e?.unit)}const j={mode:"absolute-height",offset:0},N={mode:"on-the-ground",offset:null}},18288:(e,t,r)=>{r.d(t,{S1:()=>a,lL:()=>u,mi:()=>l,pJ:()=>p,t:()=>c,vf:()=>s});var n=r(65256),o=r(36693),i=r(24241);const s={milliseconds:1,seconds:1e3,minutes:6e4,hours:36e5,days:864e5,weeks:6048e5,months:26784e5,years:31536e6,decades:31536e7,centuries:31536e8};function a(e,t,r){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:o.qU;const a=new i.oh((0,n.wj)(s)),l=i.c9.fromJSDate(e,{zone:a}),u="decades"===r||"centuries"===r?"year":d(r);return"decades"===r&&(t*=10),"centuries"===r&&(t*=100),l.plus({[u]:t}).toJSDate()}function l(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"milliseconds";const n=e.getTime(),o=c(t,r,"milliseconds");return new Date(n+o)}function u(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o.qU;const s=new i.oh((0,n.wj)(r)),a=i.c9.fromJSDate(e,{zone:s});if("decades"===t||"centuries"===t){const e=a.startOf("year"),{year:r}=e,n=r-r%("decades"===t?10:100);return e.set({year:n}).toJSDate()}const l=d(t);return a.startOf(l).toJSDate()}function c(e,t,r){return 0===e?0:e*s[t]/s[r]}function p(e,t){return e&&t?e.intersection(t):e||t}function d(e){switch(e){case"milliseconds":return"millisecond";case"seconds":return"second";case"minutes":return"minute";case"hours":return"hour";case"days":return"day";case"weeks":return"week";case"months":return"month";case"years":return"year"}}},31362:(e,t,r)=>{r.d(t,{d:()=>s});var n=r(35143),o=r(46053),i=(r(81806),r(76460),r(47249),r(85842));const s=e=>{let t=class extends e{constructor(){super(...arguments),this.customParameters=null}};return(0,n._)([(0,o.MZ)({type:Object,json:{write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0)})}}})],t.prototype,"customParameters",void 0),t=(0,n._)([(0,i.$)("esri.layers.mixins.CustomParametersMixin")],t),t}},37546:(e,t,r)=>{r.d(t,{P:()=>y});var n=r(50076),o=r(53514),i=r(24387),s=r(90534),a=r(49723),l=r(19258),u=r(49140),c=r(46053),p=r(95474),d=r(79453);function y(e){const t=e?.origins??[void 0];return(r,n)=>{const o=function(e,t,r){if("resource"===e?.type)return function(e,t,r){const n=(0,l.z4)(t,r);return{type:String,read:(e,t,r)=>{const o=(0,d.r)(e,t,r);return n.type===String?o:"function"==typeof n.type?new n.type({url:o}):void 0},write:{isRequired:n.json?.write?.isRequired,writer(t,o,a,l){if(!l?.resources)return"string"==typeof t?void(o[a]=(0,d.t)(t,l)):void(o[a]=t.write({},l));const c=function(e){return null==e?null:"string"==typeof e?e:e.url}(t),y=(0,d.t)(c,{...l,verifyItemRelativeUrls:l?.verifyItemRelativeUrls?{writtenUrls:l.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},d.M.NO),g=n.type!==String&&(!(0,i.H)(this)||l?.origin&&this.originIdOf(r)>(0,u.aB)(l.origin)),v={object:this,propertyName:r,value:t,targetUrl:y,dest:o,targetPropertyName:a,context:l,params:e};l?.portalItem&&y&&!(0,s.oP)(y)?g&&e?.contentAddressed?f(v):g?function(e){const{context:t,targetUrl:r,params:n,value:o,dest:i,targetPropertyName:a}=e;if(!t.portalItem)return;const l=t.portalItem.resourceFromPath(r),u=h(o,r,t),c=(0,p.n)(u),d=(0,s.Zo)(l.path),y=n?.compress??!1;c===d?(t.resources&&m({...e,resource:l,content:u,compress:y,updates:t.resources.toUpdate}),i[a]=r):f(e)}(v):function(e){let{context:t,targetUrl:r,dest:n,targetPropertyName:o}=e;t.portalItem&&t.resources&&(t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(r),compress:!1}),n[o]=r)}(v):l?.portalItem&&(null==y||null!=(0,d.i)(y)||(0,s.w8)(y)||g)?f(v):o[a]=y}}}}(e,t,r);switch(e?.type??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:e,write:t}=d.b;return{read:e,write:t}}}}(e,r,n);for(const e of t){const t=(0,c.rM)(r,e,n);for(const e in o)t[e]=o[e]}}}function f(e){const{targetUrl:t,params:r,value:i,context:l,dest:u,targetPropertyName:c}=e;if(!l.portalItem)return;const y=(0,d.p)(t),f=h(i,t,l);if(r?.contentAddressed&&"json"!==f.type)return void l.messages?.push(new n.A("persistable:contentAddressingUnsupported",`Property "${c}" is trying to serializing a resource with content of type ${f.type} with content addressing. Content addressing is only supported for json resources.`,{content:f}));const g=r?.contentAddressed&&"json"===f.type?(0,o.d)(f.jsonString):y?.filename??(0,a.lk)(),v=(0,s.fj)(r?.prefix??y?.prefix,g),S=`${v}.${(0,p.n)(f)}`;if(r?.contentAddressed&&l.resources&&"json"===f.type){const e=l.resources.toKeep.find((e=>{let{resource:t}=e;return t.path===S}))??l.resources.toAdd.find((e=>{let{resource:t}=e;return t.path===S}));if(e)return void(u[c]=e.resource.itemRelativeUrl)}const _=l.portalItem.resourceFromPath(S);(0,s.w8)(t)&&l.resources&&l.resources.pendingOperations.push((0,s.tk)(t).then((e=>{_.path=`${v}.${(0,p.n)({type:"blob",blob:e})}`,u[c]=_.itemRelativeUrl})).catch((()=>{})));const w=r?.compress??!1;l.resources&&m({...e,resource:_,content:f,compress:w,updates:l.resources.toAdd}),u[c]=_.itemRelativeUrl}function m(e){let{object:t,propertyName:r,updates:n,resource:o,content:i,compress:s}=e;n.push({resource:o,content:i,compress:s,finish:e=>{!function(e,t,r){"string"==typeof e[t]?e[t]=r.url:e[t].url=r.url}(t,r,e)}})}function h(e,t,r){return"string"==typeof e?{type:"url",url:t}:{type:"json",jsonString:JSON.stringify(e.toJSON(r))}}},53514:(e,t,r)=>{r.d(t,{T:()=>n,d:()=>m});const n={Base64:0,Hex:1,String:2,Raw:3},o=8,i=(1<<o)-1;function s(e,t){const r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}function a(e){const t=[];for(let r=0,n=e.length*o;r<n;r+=o)t[r>>5]|=(e.charCodeAt(r/o)&i)<<r%32;return t}function l(e){const t=[];for(let r=0,n=32*e.length;r<n;r+=o)t.push(String.fromCharCode(e[r>>5]>>>r%32&i));return t.join("")}function u(e,t,r,n,o,i){return s(function(e,t){return e<<t|e>>>32-t}(s(s(t,e),s(n,i)),o),r)}function c(e,t,r,n,o,i,s){return u(t&r|~t&n,e,t,o,i,s)}function p(e,t,r,n,o,i,s){return u(t&n|r&~n,e,t,o,i,s)}function d(e,t,r,n,o,i,s){return u(t^r^n,e,t,o,i,s)}function y(e,t,r,n,o,i,s){return u(r^(t|~n),e,t,o,i,s)}function f(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;let r=1732584193,n=-271733879,o=-1732584194,i=271733878;for(let a=0;a<e.length;a+=16){const t=r,l=n,u=o,f=i;r=c(r,n,o,i,e[a],7,-680876936),i=c(i,r,n,o,e[a+1],12,-389564586),o=c(o,i,r,n,e[a+2],17,606105819),n=c(n,o,i,r,e[a+3],22,-1044525330),r=c(r,n,o,i,e[a+4],7,-176418897),i=c(i,r,n,o,e[a+5],12,1200080426),o=c(o,i,r,n,e[a+6],17,-1473231341),n=c(n,o,i,r,e[a+7],22,-45705983),r=c(r,n,o,i,e[a+8],7,1770035416),i=c(i,r,n,o,e[a+9],12,-1958414417),o=c(o,i,r,n,e[a+10],17,-42063),n=c(n,o,i,r,e[a+11],22,-1990404162),r=c(r,n,o,i,e[a+12],7,1804603682),i=c(i,r,n,o,e[a+13],12,-40341101),o=c(o,i,r,n,e[a+14],17,-1502002290),n=c(n,o,i,r,e[a+15],22,1236535329),r=p(r,n,o,i,e[a+1],5,-165796510),i=p(i,r,n,o,e[a+6],9,-1069501632),o=p(o,i,r,n,e[a+11],14,643717713),n=p(n,o,i,r,e[a],20,-373897302),r=p(r,n,o,i,e[a+5],5,-701558691),i=p(i,r,n,o,e[a+10],9,38016083),o=p(o,i,r,n,e[a+15],14,-660478335),n=p(n,o,i,r,e[a+4],20,-405537848),r=p(r,n,o,i,e[a+9],5,568446438),i=p(i,r,n,o,e[a+14],9,-1019803690),o=p(o,i,r,n,e[a+3],14,-187363961),n=p(n,o,i,r,e[a+8],20,1163531501),r=p(r,n,o,i,e[a+13],5,-1444681467),i=p(i,r,n,o,e[a+2],9,-51403784),o=p(o,i,r,n,e[a+7],14,1735328473),n=p(n,o,i,r,e[a+12],20,-1926607734),r=d(r,n,o,i,e[a+5],4,-378558),i=d(i,r,n,o,e[a+8],11,-2022574463),o=d(o,i,r,n,e[a+11],16,1839030562),n=d(n,o,i,r,e[a+14],23,-35309556),r=d(r,n,o,i,e[a+1],4,-1530992060),i=d(i,r,n,o,e[a+4],11,1272893353),o=d(o,i,r,n,e[a+7],16,-155497632),n=d(n,o,i,r,e[a+10],23,-1094730640),r=d(r,n,o,i,e[a+13],4,681279174),i=d(i,r,n,o,e[a],11,-358537222),o=d(o,i,r,n,e[a+3],16,-722521979),n=d(n,o,i,r,e[a+6],23,76029189),r=d(r,n,o,i,e[a+9],4,-640364487),i=d(i,r,n,o,e[a+12],11,-421815835),o=d(o,i,r,n,e[a+15],16,530742520),n=d(n,o,i,r,e[a+2],23,-995338651),r=y(r,n,o,i,e[a],6,-198630844),i=y(i,r,n,o,e[a+7],10,1126891415),o=y(o,i,r,n,e[a+14],15,-1416354905),n=y(n,o,i,r,e[a+5],21,-57434055),r=y(r,n,o,i,e[a+12],6,1700485571),i=y(i,r,n,o,e[a+3],10,-1894986606),o=y(o,i,r,n,e[a+10],15,-1051523),n=y(n,o,i,r,e[a+1],21,-2054922799),r=y(r,n,o,i,e[a+8],6,1873313359),i=y(i,r,n,o,e[a+15],10,-30611744),o=y(o,i,r,n,e[a+6],15,-1560198380),n=y(n,o,i,r,e[a+13],21,1309151649),r=y(r,n,o,i,e[a+4],6,-145523070),i=y(i,r,n,o,e[a+11],10,-1120210379),o=y(o,i,r,n,e[a+2],15,718787259),n=y(n,o,i,r,e[a+9],21,-343485551),r=s(r,t),n=s(n,l),o=s(o,u),i=s(i,f)}return[r,n,o,i]}function m(e){const t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.Hex)||n.Base64,r=f(a(e),e.length*o);switch(t){case n.Raw:return r;case n.Hex:return function(e){const t="0123456789abcdef",r=[];for(let n=0,o=4*e.length;n<o;n++)r.push(t.charAt(e[n>>2]>>n%4*8+4&15)+t.charAt(e[n>>2]>>n%4*8&15));return r.join("")}(r);case n.String:return l(r);case n.Base64:return function(e){const t=[];for(let r=0,n=4*e.length;r<n;r+=3){const n=(e[r>>2]>>r%4*8&255)<<16|(e[r+1>>2]>>(r+1)%4*8&255)<<8|e[r+2>>2]>>(r+2)%4*8&255;for(let o=0;o<4;o++)8*r+6*o>32*e.length?t.push("="):t.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(n>>6*(3-o)&63))}return t.join("")}(r)}}},59187:(e,t,r)=>{r.d(t,{A:()=>y});var n,o=r(35143),i=r(42553),s=r(18288),a=r(46053),l=(r(81806),r(76460),r(47249),r(28379)),u=r(85842),c=r(17707),p=r(36693);let d=n=class extends i.A{static get allTime(){return f}static get empty(){return m}static fromArray(e){return new n({start:null!=e[0]?new Date(e[0]):e[0],end:null!=e[1]?new Date(e[1]):e[1]})}constructor(e){super(e),this.end=null,this.start=null}readEnd(e,t){return null!=t.end?new Date(t.end):null}writeEnd(e,t){t.end=e?.getTime()??null}get isAllTime(){return this.equals(n.allTime)}get isEmpty(){return this.equals(n.empty)}readStart(e,t){return null!=t.start?new Date(t.start):null}writeStart(e,t){t.start=e?.getTime()??null}clone(){return new n({end:this.end,start:this.start})}equals(e){if(!e)return!1;const t=this.start?.getTime()??this.start,r=this.end?.getTime()??this.end,n=e.start?.getTime()??e.start,o=e.end?.getTime()??e.end;return t===n&&r===o}expandTo(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p.qU;if(this.isEmpty||this.isAllTime)return this.clone();let r=this.start;r&&(r=(0,s.lL)(r,e,t));let o=this.end;if(o){const r=(0,s.lL)(o,e,t);o=o.getTime()===r.getTime()?r:(0,s.S1)(r,1,e,t)}return new n({start:r,end:o})}intersection(e){if(!e)return this.clone();if(this.isEmpty||e.isEmpty)return n.empty;if(this.isAllTime)return e.clone();if(e.isAllTime)return this.clone();const t=this.start?.getTime()??-1/0,r=this.end?.getTime()??1/0,o=e.start?.getTime()??-1/0,i=e.end?.getTime()??1/0;let s,a;return o>=t&&o<=r?s=o:t>=o&&t<=i&&(s=t),r>=o&&r<=i?a=r:i>=t&&i<=r&&(a=i),null==s||null==a||isNaN(s)||isNaN(a)?n.empty:new n({start:s===-1/0?null:new Date(s),end:a===1/0?null:new Date(a)})}offset(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:p.qU;if(this.isEmpty||this.isAllTime)return this.clone();const o=new n,{start:i,end:a}=this;return null!=i&&(o.start=(0,s.S1)(i,e,t,r)),null!=a&&(o.end=(0,s.S1)(a,e,t,r)),o}toArray(){return this.isEmpty?[void 0,void 0]:[this.start?.getTime()??null,this.end?.getTime()??null]}union(e){if(!e||e.isEmpty)return this.clone();if(this.isEmpty)return e.clone();if(this.isAllTime||e.isAllTime)return f.clone();const t=null!=this.start&&null!=e.start?new Date(Math.min(this.start.getTime(),e.start.getTime())):null,r=null!=this.end&&null!=e.end?new Date(Math.max(this.end.getTime(),e.end.getTime())):null;return new n({start:t,end:r})}};(0,o._)([(0,a.MZ)({type:Date,json:{write:{allowNull:!0}}})],d.prototype,"end",void 0),(0,o._)([(0,l.w)("end")],d.prototype,"readEnd",null),(0,o._)([(0,c.K)("end")],d.prototype,"writeEnd",null),(0,o._)([(0,a.MZ)({readOnly:!0,json:{read:!1}})],d.prototype,"isAllTime",null),(0,o._)([(0,a.MZ)({readOnly:!0,json:{read:!1}})],d.prototype,"isEmpty",null),(0,o._)([(0,a.MZ)({type:Date,json:{write:{allowNull:!0}}})],d.prototype,"start",void 0),(0,o._)([(0,l.w)("start")],d.prototype,"readStart",null),(0,o._)([(0,c.K)("start")],d.prototype,"writeStart",null),d=n=(0,o._)([(0,u.$)("esri.time.TimeExtent")],d);const y=d,f=new d,m=new d({start:void 0,end:void 0})},95474:(e,t,r)=>{r.d(t,{n:()=>o});var n=r(90534);function o(e){return i[function(e){return"json"===e.type?"application/json":"blob"===e.type?e.blob.type:function(e){const t=(0,n.Zo)(e);return l[t]||s}(e.url)}(e)]||a}const i={},s="text/plain",a=i[s],l={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const u in l)i[l[u]]=u}}]);
//# sourceMappingURL=2966.beb17644.chunk.js.map