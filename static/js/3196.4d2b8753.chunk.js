"use strict";(self.webpackChunkfeedback_map=self.webpackChunkfeedback_map||[]).push([[3196],{2395:(e,t,o)=>{o.d(t,{L0:()=>g,Ot:()=>y,W4:()=>l,uV:()=>u});var r=o(35143),n=o(42553),i=o(46053),s=(o(81806),o(76460),o(47249),o(6409)),a=o(85842);let l=class extends n.A{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};(0,r._)([(0,i.MZ)({type:Number})],l.prototype,"nodesPerPage",void 0),(0,r._)([(0,i.MZ)({type:Number})],l.prototype,"rootIndex",void 0),(0,r._)([(0,i.MZ)({type:String})],l.prototype,"lodSelectionMetricType",void 0),l=(0,r._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SNodePageDefinition")],l);let p=class extends n.A{constructor(){super(...arguments),this.factor=1}};(0,r._)([(0,i.MZ)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],p.prototype,"id",void 0),(0,r._)([(0,i.MZ)({type:Number})],p.prototype,"factor",void 0),p=(0,r._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SMaterialTexture")],p);let c=class extends n.A{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};(0,r._)([(0,i.MZ)({type:[Number]})],c.prototype,"baseColorFactor",void 0),(0,r._)([(0,i.MZ)({type:p})],c.prototype,"baseColorTexture",void 0),(0,r._)([(0,i.MZ)({type:p})],c.prototype,"metallicRoughnessTexture",void 0),(0,r._)([(0,i.MZ)({type:Number})],c.prototype,"metallicFactor",void 0),(0,r._)([(0,i.MZ)({type:Number})],c.prototype,"roughnessFactor",void 0),c=(0,r._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SMaterialPBRMetallicRoughness")],c);let u=class extends n.A{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};(0,r._)([(0,s.e)({opaque:"opaque",mask:"mask",blend:"blend"})],u.prototype,"alphaMode",void 0),(0,r._)([(0,i.MZ)({type:Number})],u.prototype,"alphaCutoff",void 0),(0,r._)([(0,i.MZ)({type:Boolean})],u.prototype,"doubleSided",void 0),(0,r._)([(0,s.e)({none:"none",back:"back",front:"front"})],u.prototype,"cullFace",void 0),(0,r._)([(0,i.MZ)({type:p})],u.prototype,"normalTexture",void 0),(0,r._)([(0,i.MZ)({type:p})],u.prototype,"occlusionTexture",void 0),(0,r._)([(0,i.MZ)({type:p})],u.prototype,"emissiveTexture",void 0),(0,r._)([(0,i.MZ)({type:[Number]})],u.prototype,"emissiveFactor",void 0),(0,r._)([(0,i.MZ)({type:c})],u.prototype,"pbrMetallicRoughness",void 0),u=(0,r._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SMaterialDefinition")],u);let d=class extends n.A{};(0,r._)([(0,i.MZ)({type:String,json:{read:{source:["name","index"],reader:(e,t)=>null!=e?e:`${t.index}`}}})],d.prototype,"name",void 0),(0,r._)([(0,s.e)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],d.prototype,"format",void 0),d=(0,r._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3STextureFormat")],d);let y=class extends n.A{constructor(){super(...arguments),this.atlas=!1}};(0,r._)([(0,i.MZ)({type:[d]})],y.prototype,"formats",void 0),(0,r._)([(0,i.MZ)({type:Boolean})],y.prototype,"atlas",void 0),y=(0,r._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3STextureSetDefinition")],y);let f=class extends n.A{};(0,r._)([(0,s.e)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],f.prototype,"type",void 0),(0,r._)([(0,i.MZ)({type:Number})],f.prototype,"component",void 0),f=(0,r._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SGeometryAttribute")],f);let m=class extends n.A{};(0,r._)([(0,s.e)({draco:"draco"})],m.prototype,"encoding",void 0),(0,r._)([(0,i.MZ)({type:[String]})],m.prototype,"attributes",void 0),m=(0,r._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SGeometryCompressedAttributes")],m);let h=class extends n.A{constructor(){super(...arguments),this.offset=0}};(0,r._)([(0,i.MZ)({type:Number})],h.prototype,"offset",void 0),(0,r._)([(0,i.MZ)({type:f})],h.prototype,"position",void 0),(0,r._)([(0,i.MZ)({type:f})],h.prototype,"normal",void 0),(0,r._)([(0,i.MZ)({type:f})],h.prototype,"uv0",void 0),(0,r._)([(0,i.MZ)({type:f})],h.prototype,"color",void 0),(0,r._)([(0,i.MZ)({type:f})],h.prototype,"uvRegion",void 0),(0,r._)([(0,i.MZ)({type:f})],h.prototype,"featureId",void 0),(0,r._)([(0,i.MZ)({type:f})],h.prototype,"faceRange",void 0),(0,r._)([(0,i.MZ)({type:m})],h.prototype,"compressedAttributes",void 0),h=(0,r._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SGeometryBuffer")],h);let g=class extends n.A{};(0,r._)([(0,s.e)({triangle:"triangle"})],g.prototype,"topology",void 0),(0,r._)([(0,i.MZ)()],g.prototype,"geometryBuffers",void 0),g=(0,r._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SGeometryDefinition")],g)},3196:(e,t,o)=>{o.r(t),o.d(t,{default:()=>C});var r,n=o(35143),i=o(50076),s=o(76460),a=o(77717),l=o(50346),p=o(68134),c=o(46053),u=(o(81806),o(47249),o(28379)),d=o(85842),y=o(37546),f=o(25515),m=o(12406),h=o(19502),g=o(31362),v=o(11270),S=o(94729),x=o(5682),_=o(90260),b=o(95363),M=o(2395),I=o(3825),w=o(94643),Z=o(42553),A=o(90534),j=o(53084),N=o(62754),P=o(17707),R=o(65215),T=o(9624);let O=r=class extends Z.A{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,o,r){if(r.layer?.spatialReference&&!r.layer.spatialReference.equals(this.geometry.spatialReference)){if(!(0,T.canProjectWithoutEngine)(e.spatialReference,r.layer.spatialReference))return void(r?.messages&&r.messages.push(new N.A("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:r.layer.spatialReference,context:r})));const n=new R.A;(0,T.projectPolygon)(e,n,r.layer.spatialReference),t[o]=n.toJSON(r)}else t[o]=e.toJSON(r);delete t[o].spatialReference}clone(){return new r({geometry:(0,j.o8)(this.geometry),type:this.type})}};(0,n._)([(0,c.MZ)({type:R.A}),(0,y.P)()],O.prototype,"geometry",void 0),(0,n._)([(0,P.K)(["web-scene","portal-item"],"geometry")],O.prototype,"writeGeometry",null),(0,n._)([(0,c.MZ)({type:["clip","mask","replace"],nonNullable:!0}),(0,y.P)()],O.prototype,"type",void 0),O=r=(0,n._)([(0,d.$)("esri.layers.support.SceneModification")],O);const U=O;var L;let $=L=class extends(Z.A.JSONSupportMixin(w.A.ofType(U))){constructor(e){super(e),this.url=null}clone(){return new L({url:this.url,items:this.items.map((e=>e.clone()))})}toJSON(e){return this.toArray().map((t=>t.toJSON(e))).filter((e=>!!e.geometry))}static fromJSON(e,t){const o=new L;for(const r of e)o.add(U.fromJSON(r,t));return o}static async fromUrl(e,t,o){const r={url:(0,A.An)(e),origin:"service"},n=await(0,I.A)(e,{responseType:"json",signal:o?.signal}),i=t.toJSON(),s=[];for(const a of n.data)s.push(U.fromJSON({...a,geometry:{...a.geometry,spatialReference:i}},r));return new L({url:e,items:s})}};(0,n._)([(0,c.MZ)({type:String})],$.prototype,"url",void 0),$=L=(0,n._)([(0,d.$)("esri.layers.support.SceneModifications")],$);const E=$;var F=o(12482),D=o(79453);let k=class extends((0,_.w6)((0,h.b)((0,v.q)((0,S.A)((0,x.j)((0,a.P)((0,g.d)((0,m.p)(f.A))))))))){constructor(){super(...arguments),this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.path=null,this.definitionExpression=null}initialize(){this.addHandles((0,p.on)((()=>this.modifications),"after-changes",(()=>this.modifications=this.modifications),p.OH))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readModifications(e,t,o){this._modificationsSource={url:(0,D.f)(e,o),context:o}}set elevationInfo(e){null!=e&&"absolute-height"!==e.mode||this._set("elevationInfo",e),this._validateElevationInfo(e)}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=e?.signal;try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(o){(0,l.QP)(o)}if(await this._fetchService(t),null!=this._modificationsSource){const t=await E.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(null!=this._modificationsSource)return this.load().then((()=>{}),(()=>{}))}async saveAs(e,t){return this._debouncedSaveOperations(_.Xh.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(_.Xh.SAVE,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new i.A("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new i.A("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new i.A("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}_validateElevationInfo(e){const t="Integrated mesh layers";(0,F.XF)(s.A.getLogger(this),(0,F.B)(t,"absolute-height",e)),(0,F.XF)(s.A.getLogger(this),(0,F.tW)(t,e))}};(0,n._)([(0,c.MZ)({type:String,readOnly:!0})],k.prototype,"geometryType",void 0),(0,n._)([(0,c.MZ)({type:["show","hide"]})],k.prototype,"listMode",void 0),(0,n._)([(0,c.MZ)({type:["IntegratedMeshLayer"]})],k.prototype,"operationalLayerType",void 0),(0,n._)([(0,c.MZ)({json:{read:!1},readOnly:!0})],k.prototype,"type",void 0),(0,n._)([(0,c.MZ)({type:M.W4,readOnly:!0})],k.prototype,"nodePages",void 0),(0,n._)([(0,c.MZ)({type:[M.uV],readOnly:!0})],k.prototype,"materialDefinitions",void 0),(0,n._)([(0,c.MZ)({type:[M.Ot],readOnly:!0})],k.prototype,"textureSetDefinitions",void 0),(0,n._)([(0,c.MZ)({type:[M.L0],readOnly:!0})],k.prototype,"geometryDefinitions",void 0),(0,n._)([(0,c.MZ)({readOnly:!0})],k.prototype,"serviceUpdateTimeStamp",void 0),(0,n._)([(0,c.MZ)({type:E}),(0,y.P)({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],k.prototype,"modifications",void 0),(0,n._)([(0,u.w)(["web-scene","portal-item"],"modifications")],k.prototype,"readModifications",null),(0,n._)([(0,c.MZ)(b.Yj)],k.prototype,"elevationInfo",null),(0,n._)([(0,c.MZ)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],k.prototype,"path",void 0),k=(0,n._)([(0,d.$)("esri.layers.IntegratedMeshLayer")],k);const C=k},5682:(e,t,o)=>{o.d(t,{j:()=>s});var r=o(35143),n=o(46053),i=(o(81806),o(76460),o(47249),o(85842));const s=e=>{let t=class extends e{constructor(){super(...arguments),this.minScale=0,this.maxScale=0}get effectiveScaleRange(){const e={minScale:this.minScale,maxScale:this.maxScale},t=this.parent;t&&"effectiveScaleRange"in t&&function(e,t){e.minScale=e.minScale>0?t.minScale>0?Math.min(e.minScale,t.minScale):e.minScale:t.minScale,e.maxScale=e.maxScale>0?t.maxScale>0?Math.max(e.maxScale,t.maxScale):e.maxScale:t.maxScale}(e,t.effectiveScaleRange);const o=this._get("effectiveScaleRange");return o&&o.minScale===e.minScale&&o.maxScale===e.maxScale?o:e}};return(0,r._)([(0,n.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"minScale",void 0),(0,r._)([(0,n.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"maxScale",void 0),(0,r._)([(0,n.MZ)({readOnly:!0})],t.prototype,"effectiveScaleRange",null),t=(0,r._)([(0,i.$)("esri.layers.mixins.ScaleRangeLayer")],t),t}},12482:(e,t,o)=>{o.d(t,{$7:()=>w,B:()=>I,Fo:()=>_,M7:()=>j,NN:()=>d,Q5:()=>b,Tq:()=>P,Up:()=>M,XF:()=>A,Ze:()=>g,bK:()=>a,bh:()=>u,id:()=>v,ky:()=>c,qt:()=>N,tW:()=>Z,v9:()=>y,w7:()=>l,wF:()=>s,wS:()=>S,wz:()=>m,x:()=>f,xS:()=>x,ze:()=>p});var r=o(31633),n=o(59097);function i(e){return e?N:P}function s(e,t){return t?.mode?t.mode:i(e).mode}function a(e,t){return null!=t?t:i(e)}function l(e,t){return s(null==e||(e.hasZ??!1),t)}function p(e,t){return a(null==e||(e.hasZ??!1),t)}function c(e){const t=h(e);return l(e.geometry,t)}function u(e){const t=h(e),o=l(e.geometry,t),r=null!=t&&"on-the-ground"!==o?j(t):0,n=t?.featureExpressionInfo;return{mode:o,offset:r,featureExpressionInfo:n}}function d(e){return m(u(e))}function y(e){return m(e)||f(e)}function f(e){return"0"===e?.featureExpressionInfo?.expression}function m(e){if(!e)return!1;if("on-the-ground"===e.mode)return!1;const t=e?.featureExpressionInfo?e.featureExpressionInfo.expression:null;return!(!t||"0"===t)}function h(e){return e.layer&&"elevationInfo"in e.layer?e.layer.elevationInfo:null}function g(e,t){if(!e?.offset)return 0;const{offset:o,unit:n}=e;if("decimal-degrees"===n)return 0;const i="unknown"!==n&&n?n:"meters",s=(0,r.mq)(t);return s?(0,r.oU)(o,i,s):0}function v(e,t,o){if(!o?.mode)return;const r=e.hasZ?e.z:0,n=g(o,e.spatialReference);switch(o.mode){case"absolute-height":return r-n;case"on-the-ground":return 0;case"relative-to-ground":return r-((t.elevationProvider.getElevation(e.x,e.y,r,e.spatialReference,"ground")??0)+n);case"relative-to-scene":return r-((t.elevationProvider.getElevation(e.x,e.y,r,e.spatialReference,"scene")??0)+n)}}function S(e,t,o){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return _(e,t.x,t.y,t.hasZ?t.z:0,t.spatialReference,o,r)}function x(e,t,o,r){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return _(e,t[0],t[1],t.length>2?t[2]:0,o,r,n)}function _(e,t,o,r,n,i){let s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;if(null==i)return;const a=null!=s?s.mode:"absolute-height";if("on-the-ground"===a)return 0;const{absoluteZ:l}=b(t,o,r,n,e,i);return function(e,t,o,r,n,i,s,a){const l=g(s,n);switch(a){case"absolute-height":return e-l;case"relative-to-ground":return e-((i.elevationProvider.getElevation(t,o,r,n,"ground")??0)+l);case"relative-to-scene":return e-((i.elevationProvider.getElevation(t,o,r,n,"scene")??0)+l)}}(l,t,o,r,n,e,s,a)}function b(e,t,o,r,n,i){const s=g(i,r);switch(i.mode){case"absolute-height":return{absoluteZ:o+s,elevation:0};case"on-the-ground":{const o=n.elevationProvider.getElevation(e,t,0,r,"ground")??0;return{absoluteZ:o,elevation:o}}case"relative-to-ground":{const i=n.elevationProvider.getElevation(e,t,o,r,"ground")??0;return{absoluteZ:o+i+s,elevation:i}}case"relative-to-scene":{const i=n.elevationProvider.getElevation(e,t,o,r,"scene")??0;return{absoluteZ:o+i+s,elevation:i}}}}function M(e,t){if(null==t)return!1;const{mode:o}=t;return null!=o&&("scene"===e&&"relative-to-scene"===o||"ground"===e&&"absolute-height"!==o)}function I(e,t,o){return o&&o.mode!==t?`${e} only support ${t} elevation mode`:null}function w(e,t,o){return o?.mode===t?`${e} do not support ${t} elevation mode`:null}function Z(e,t){return null!=t?.featureExpressionInfo&&"0"!==t.featureExpressionInfo.expression?`${e} do not support featureExpressionInfo`:null}function A(e,t){t&&e.warn(".elevationInfo=",t)}function j(e){return(e?.offset??0)*(0,n.Ao)(e?.unit)}const N={mode:"absolute-height",offset:0},P={mode:"on-the-ground",offset:null}},31362:(e,t,o)=>{o.d(t,{d:()=>s});var r=o(35143),n=o(46053),i=(o(81806),o(76460),o(47249),o(85842));const s=e=>{let t=class extends e{constructor(){super(...arguments),this.customParameters=null}};return(0,r._)([(0,n.MZ)({type:Object,json:{write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0)})}}})],t.prototype,"customParameters",void 0),t=(0,r._)([(0,i.$)("esri.layers.mixins.CustomParametersMixin")],t),t}},37546:(e,t,o)=>{o.d(t,{P:()=>y});var r=o(50076),n=o(53514),i=o(24387),s=o(90534),a=o(49723),l=o(19258),p=o(49140),c=o(46053),u=o(95474),d=o(79453);function y(e){const t=e?.origins??[void 0];return(o,r)=>{const n=function(e,t,o){if("resource"===e?.type)return function(e,t,o){const r=(0,l.z4)(t,o);return{type:String,read:(e,t,o)=>{const n=(0,d.r)(e,t,o);return r.type===String?n:"function"==typeof r.type?new r.type({url:n}):void 0},write:{isRequired:r.json?.write?.isRequired,writer(t,n,a,l){if(!l?.resources)return"string"==typeof t?void(n[a]=(0,d.t)(t,l)):void(n[a]=t.write({},l));const c=function(e){return null==e?null:"string"==typeof e?e:e.url}(t),y=(0,d.t)(c,{...l,verifyItemRelativeUrls:l?.verifyItemRelativeUrls?{writtenUrls:l.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},d.M.NO),g=r.type!==String&&(!(0,i.H)(this)||l?.origin&&this.originIdOf(o)>(0,p.aB)(l.origin)),v={object:this,propertyName:o,value:t,targetUrl:y,dest:n,targetPropertyName:a,context:l,params:e};l?.portalItem&&y&&!(0,s.oP)(y)?g&&e?.contentAddressed?f(v):g?function(e){const{context:t,targetUrl:o,params:r,value:n,dest:i,targetPropertyName:a}=e;if(!t.portalItem)return;const l=t.portalItem.resourceFromPath(o),p=h(n,o,t),c=(0,u.n)(p),d=(0,s.Zo)(l.path),y=r?.compress??!1;c===d?(t.resources&&m({...e,resource:l,content:p,compress:y,updates:t.resources.toUpdate}),i[a]=o):f(e)}(v):function(e){let{context:t,targetUrl:o,dest:r,targetPropertyName:n}=e;t.portalItem&&t.resources&&(t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(o),compress:!1}),r[n]=o)}(v):l?.portalItem&&(null==y||null!=(0,d.i)(y)||(0,s.w8)(y)||g)?f(v):n[a]=y}}}}(e,t,o);switch(e?.type??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:e,write:t}=d.b;return{read:e,write:t}}}}(e,o,r);for(const e of t){const t=(0,c.rM)(o,e,r);for(const e in n)t[e]=n[e]}}}function f(e){const{targetUrl:t,params:o,value:i,context:l,dest:p,targetPropertyName:c}=e;if(!l.portalItem)return;const y=(0,d.p)(t),f=h(i,t,l);if(o?.contentAddressed&&"json"!==f.type)return void l.messages?.push(new r.A("persistable:contentAddressingUnsupported",`Property "${c}" is trying to serializing a resource with content of type ${f.type} with content addressing. Content addressing is only supported for json resources.`,{content:f}));const g=o?.contentAddressed&&"json"===f.type?(0,n.d)(f.jsonString):y?.filename??(0,a.lk)(),v=(0,s.fj)(o?.prefix??y?.prefix,g),S=`${v}.${(0,u.n)(f)}`;if(o?.contentAddressed&&l.resources&&"json"===f.type){const e=l.resources.toKeep.find((e=>{let{resource:t}=e;return t.path===S}))??l.resources.toAdd.find((e=>{let{resource:t}=e;return t.path===S}));if(e)return void(p[c]=e.resource.itemRelativeUrl)}const x=l.portalItem.resourceFromPath(S);(0,s.w8)(t)&&l.resources&&l.resources.pendingOperations.push((0,s.tk)(t).then((e=>{x.path=`${v}.${(0,u.n)({type:"blob",blob:e})}`,p[c]=x.itemRelativeUrl})).catch((()=>{})));const _=o?.compress??!1;l.resources&&m({...e,resource:x,content:f,compress:_,updates:l.resources.toAdd}),p[c]=x.itemRelativeUrl}function m(e){let{object:t,propertyName:o,updates:r,resource:n,content:i,compress:s}=e;r.push({resource:n,content:i,compress:s,finish:e=>{!function(e,t,o){"string"==typeof e[t]?e[t]=o.url:e[t].url=o.url}(t,o,e)}})}function h(e,t,o){return"string"==typeof e?{type:"url",url:t}:{type:"json",jsonString:JSON.stringify(e.toJSON(o))}}},53514:(e,t,o)=>{o.d(t,{T:()=>r,d:()=>m});const r={Base64:0,Hex:1,String:2,Raw:3},n=8,i=(1<<n)-1;function s(e,t){const o=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(o>>16)<<16|65535&o}function a(e){const t=[];for(let o=0,r=e.length*n;o<r;o+=n)t[o>>5]|=(e.charCodeAt(o/n)&i)<<o%32;return t}function l(e){const t=[];for(let o=0,r=32*e.length;o<r;o+=n)t.push(String.fromCharCode(e[o>>5]>>>o%32&i));return t.join("")}function p(e,t,o,r,n,i){return s(function(e,t){return e<<t|e>>>32-t}(s(s(t,e),s(r,i)),n),o)}function c(e,t,o,r,n,i,s){return p(t&o|~t&r,e,t,n,i,s)}function u(e,t,o,r,n,i,s){return p(t&r|o&~r,e,t,n,i,s)}function d(e,t,o,r,n,i,s){return p(t^o^r,e,t,n,i,s)}function y(e,t,o,r,n,i,s){return p(o^(t|~r),e,t,n,i,s)}function f(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;let o=1732584193,r=-271733879,n=-1732584194,i=271733878;for(let a=0;a<e.length;a+=16){const t=o,l=r,p=n,f=i;o=c(o,r,n,i,e[a],7,-680876936),i=c(i,o,r,n,e[a+1],12,-389564586),n=c(n,i,o,r,e[a+2],17,606105819),r=c(r,n,i,o,e[a+3],22,-1044525330),o=c(o,r,n,i,e[a+4],7,-176418897),i=c(i,o,r,n,e[a+5],12,1200080426),n=c(n,i,o,r,e[a+6],17,-1473231341),r=c(r,n,i,o,e[a+7],22,-45705983),o=c(o,r,n,i,e[a+8],7,1770035416),i=c(i,o,r,n,e[a+9],12,-1958414417),n=c(n,i,o,r,e[a+10],17,-42063),r=c(r,n,i,o,e[a+11],22,-1990404162),o=c(o,r,n,i,e[a+12],7,1804603682),i=c(i,o,r,n,e[a+13],12,-40341101),n=c(n,i,o,r,e[a+14],17,-1502002290),r=c(r,n,i,o,e[a+15],22,1236535329),o=u(o,r,n,i,e[a+1],5,-165796510),i=u(i,o,r,n,e[a+6],9,-1069501632),n=u(n,i,o,r,e[a+11],14,643717713),r=u(r,n,i,o,e[a],20,-373897302),o=u(o,r,n,i,e[a+5],5,-701558691),i=u(i,o,r,n,e[a+10],9,38016083),n=u(n,i,o,r,e[a+15],14,-660478335),r=u(r,n,i,o,e[a+4],20,-405537848),o=u(o,r,n,i,e[a+9],5,568446438),i=u(i,o,r,n,e[a+14],9,-1019803690),n=u(n,i,o,r,e[a+3],14,-187363961),r=u(r,n,i,o,e[a+8],20,1163531501),o=u(o,r,n,i,e[a+13],5,-1444681467),i=u(i,o,r,n,e[a+2],9,-51403784),n=u(n,i,o,r,e[a+7],14,1735328473),r=u(r,n,i,o,e[a+12],20,-1926607734),o=d(o,r,n,i,e[a+5],4,-378558),i=d(i,o,r,n,e[a+8],11,-2022574463),n=d(n,i,o,r,e[a+11],16,1839030562),r=d(r,n,i,o,e[a+14],23,-35309556),o=d(o,r,n,i,e[a+1],4,-1530992060),i=d(i,o,r,n,e[a+4],11,1272893353),n=d(n,i,o,r,e[a+7],16,-155497632),r=d(r,n,i,o,e[a+10],23,-1094730640),o=d(o,r,n,i,e[a+13],4,681279174),i=d(i,o,r,n,e[a],11,-358537222),n=d(n,i,o,r,e[a+3],16,-722521979),r=d(r,n,i,o,e[a+6],23,76029189),o=d(o,r,n,i,e[a+9],4,-640364487),i=d(i,o,r,n,e[a+12],11,-421815835),n=d(n,i,o,r,e[a+15],16,530742520),r=d(r,n,i,o,e[a+2],23,-995338651),o=y(o,r,n,i,e[a],6,-198630844),i=y(i,o,r,n,e[a+7],10,1126891415),n=y(n,i,o,r,e[a+14],15,-1416354905),r=y(r,n,i,o,e[a+5],21,-57434055),o=y(o,r,n,i,e[a+12],6,1700485571),i=y(i,o,r,n,e[a+3],10,-1894986606),n=y(n,i,o,r,e[a+10],15,-1051523),r=y(r,n,i,o,e[a+1],21,-2054922799),o=y(o,r,n,i,e[a+8],6,1873313359),i=y(i,o,r,n,e[a+15],10,-30611744),n=y(n,i,o,r,e[a+6],15,-1560198380),r=y(r,n,i,o,e[a+13],21,1309151649),o=y(o,r,n,i,e[a+4],6,-145523070),i=y(i,o,r,n,e[a+11],10,-1120210379),n=y(n,i,o,r,e[a+2],15,718787259),r=y(r,n,i,o,e[a+9],21,-343485551),o=s(o,t),r=s(r,l),n=s(n,p),i=s(i,f)}return[o,r,n,i]}function m(e){const t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.Hex)||r.Base64,o=f(a(e),e.length*n);switch(t){case r.Raw:return o;case r.Hex:return function(e){const t="0123456789abcdef",o=[];for(let r=0,n=4*e.length;r<n;r++)o.push(t.charAt(e[r>>2]>>r%4*8+4&15)+t.charAt(e[r>>2]>>r%4*8&15));return o.join("")}(o);case r.String:return l(o);case r.Base64:return function(e){const t=[];for(let o=0,r=4*e.length;o<r;o+=3){const r=(e[o>>2]>>o%4*8&255)<<16|(e[o+1>>2]>>(o+1)%4*8&255)<<8|e[o+2>>2]>>(o+2)%4*8&255;for(let n=0;n<4;n++)8*o+6*n>32*e.length?t.push("="):t.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(r>>6*(3-n)&63))}return t.join("")}(o)}}},95474:(e,t,o)=>{o.d(t,{n:()=>n});var r=o(90534);function n(e){return i[function(e){return"json"===e.type?"application/json":"blob"===e.type?e.blob.type:function(e){const t=(0,r.Zo)(e);return l[t]||s}(e.url)}(e)]||a}const i={},s="text/plain",a=i[s],l={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const p in l)i[l[p]]=p}}]);
//# sourceMappingURL=3196.4d2b8753.chunk.js.map