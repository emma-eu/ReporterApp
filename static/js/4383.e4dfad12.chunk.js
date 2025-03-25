"use strict";(self.webpackChunkfeedback_map=self.webpackChunkfeedback_map||[]).push([[1933,4383],{5618:(e,t,r)=>{r.d(t,{A:()=>u});var s,i=r(35143),o=r(94643),n=r(42553),a=r(46053),l=(r(81806),r(76460),r(47249),r(85842));let p=s=class extends n.A{constructor(e){super(e),this.floorField=null,this.viewAllMode=!1,this.viewAllLevelIds=new o.A}clone(){return new s({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}};(0,i._)([(0,a.MZ)({type:String,json:{write:{isRequired:!0}}})],p.prototype,"floorField",void 0),(0,i._)([(0,a.MZ)({json:{read:!1,write:!1}})],p.prototype,"viewAllMode",void 0),(0,i._)([(0,a.MZ)({json:{read:!1,write:!1}})],p.prototype,"viewAllLevelIds",void 0),p=s=(0,i._)([(0,l.$)("esri.layers.support.LayerFloorInfo")],p);const u=p},12406:(e,t,r)=>{r.d(t,{p:()=>n});var s=r(35143),i=r(46053),o=(r(81806),r(76460),r(47249),r(85842));const n=e=>{let t=class extends e{get apiKey(){return this._isOverridden("apiKey")?this._get("apiKey"):"portalItem"in this?this.portalItem?.apiKey:null}set apiKey(e){null!=e?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return(0,s._)([(0,i.MZ)({type:String})],t.prototype,"apiKey",null),t=(0,s._)([(0,o.$)("esri.layers.mixins.APIKeyMixin")],t),t}},19463:(e,t,r)=>{r.d(t,{CW:()=>y,Fm:()=>l,Hz:()=>h,JQ:()=>c,JZ:()=>M,ND:()=>m,R_:()=>n,U9:()=>d,fu:()=>i,nr:()=>f,oF:()=>o,rq:()=>p,z$:()=>u});const s=[["binary","application/octet-stream","bin",""]];function i(e,t){return null!=v(t.name,e?.supportedFormats??[])}function o(e,t){if(!e)return!1;const r=p(t,e.supportedFormats??[]);return null!=r&&e.editFormats.includes(r)}function n(e,t){return w(function(e,t){const r=e.toLowerCase();return g(t).find((e=>b(e)===r))}(e,t))}function a(e,t){return w(v(e,t))}function l(e,t){return b(function(e,t){return g(t).find((t=>w(t)===e))}(e,t))}function p(e,t){return a(e.name,t)??n(e.type,t)}function u(e,t,r){return n(e,r)??a(t,r)}function d(e){let{supportedFormats:t}=e;return u("model/gltf-binary","glb",t)}function c(e){const t=d(e);return null!=t&&e.editFormats.includes(t)}function y(e){let{supportedFormats:t}=e;return u("model/gltf+json","gltf",t)}function h(e){if(!e)return null;const t=d(e),r=y(e);let s=null;for(const i of e.queryFormats){if(i===t)return i;i===r&&(s=i)}return s}function f(e){let{supportedFormats:t}=e;return u("application/esri3do-SR_world","wld",t)}function m(e){let{supportedFormats:t}=e;return u("application/esri3do-SR_prj","prj",t)}function g(e){return[...s,...e]}function v(e,t){const r=e.toLowerCase();return g(t).find((e=>_(e).some((e=>r.endsWith(e)))))}function w(e){return e?.[0]}function b(e){return e?.[1].toLowerCase()}function _(e){return e?.[2].split(",").map((e=>e.toLowerCase()))??[]}function M(e){return e.tables?.find((e=>"assetMaps"===e.role))}},19898:(e,t,r)=>{r.d(t,{R:()=>i});var s=r(50076);let i=class e{constructor(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";this.major=e,this.minor=t,this._context=r}lessThan(e,t){return this.major<e||e===this.major&&this.minor<t}greaterEqual(e,t){return!this.lessThan(e,t)}validate(e){if(this.major!==e.major){const t=this._context&&this._context+":",r=this._context&&this._context+" ";throw new s.A(t+"unsupported-version",`Required major ${r}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:e})}}clone(){return new e(this.major,this.minor,this._context)}static parse(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const[i,o]=t.split("."),n=/^\s*\d+\s*$/;if(!i?.match||!n.test(i))throw new s.A((r&&r+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:t});if(!o?.match||!n.test(o))throw new s.A((r&&r+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:t});const a=parseInt(i,10),l=parseInt(o,10);return new e(a,l,r)}}},20665:(e,t,r)=>{r.d(t,{A:()=>c});var s=r(35143),i=r(91967),o=r(98773),n=r(94643),a=r(46053),l=(r(81806),r(76460),r(47249),r(85842)),p=r(53430),u=r(98976);let d=class extends i.A{constructor(e){super(e),this._featureUtils=null,this.effectivePopupTemplate=null}get _arcadeTask(){return this.expressionsUsedInTitle.length>0?this._get("_arcadeTask")||(0,o.UT)((()=>(0,u.lw)())):null}get featureUtilsPromise(){return this._get("featureUtilsPromise")??Promise.all([r.e(6300),r.e(9912),r.e(3836)]).then(r.bind(r,9912)).then((e=>this._featureUtils=e))}get calculatedExpressions(){const e=new n.A;if(!this.expressionsUsedInTitle.length)return e;if(!this._arcadeTask?.value){for(const t of this.expressionsUsedInTitle??[])e.push({name:t.name,invalid:!0});return e}for(const t of this.expressionsUsedInTitle)try{const r=this._arcadeTask.value.arcade.parseScript(t.expression,["$layer","$map","$datastore"]);if(r.isAsync){e.push({name:t.name,invalid:!0});break}e.push({name:t.name,syntax:r,invalid:!1,func:this._arcadeTask.value.arcade.compileScript(r,{vars:{$feature:"any"}})})}catch{e.push({name:t.name,invalid:!0});break}return e}get expressionsUsedInTitle(){let e=this.effectivePopupTemplate?.title??"";return"string"!=typeof e?[]:(e=e.toLowerCase(),this.effectivePopupTemplate?.expressionInfos?.filter((t=>e.includes(`{expression/${t.name.toLowerCase()}}`)))??[])}get fieldInfoMap(){return this._featureUtils?this._createFieldInfoMap(this._featureUtils.getAllFieldInfos(this.effectivePopupTemplate)):null}get hasBadExpressions(){return this.calculatedExpressions.some((e=>!0===e.invalid))}get requiredFields(){const e=new Set;if(this._arcadeTask?.value&&!this.hasBadExpressions)for(const r of this.calculatedExpressions?.toArray()??[])try{const t=this._arcadeTask.value.arcade.extractFieldLiterals(r.syntax);for(const r of t){const t=r.split("."),s=this.fieldsIndex.get(t.at(-1)??"");s&&e.add(s.name)}}catch{}const t=this._extractFieldNames(this.workingTitle);for(const r of t){const t=this.fieldsIndex.get(r);t&&e.add(t.name)}return e}get titleFromDisplayField(){let e="";return this.displayField&&(e=this.fieldsIndex.get(this.displayField)?.name??""),e||(e=this.fieldsIndex.get(this.objectIdField)?.name??""),e?`{${e}}`:""}get workingTitle(){const e=this.effectivePopupTemplate?this.effectivePopupTemplate.title:"";return""===e||null==e||this.hasBadExpressions||"string"!=typeof e?this.titleFromDisplayField:e}async getTitle(e,t,r){try{const{attributes:s}=t,i=r?.timeZone??"system",[{substituteFieldsInLinksAndAttributes:o}]=await Promise.all([this.featureUtilsPromise,this._arcadeTask?.promise]);if(r.fetchMissingFields&&(t=await this._checkAndReQueryGraphic(e,t)),this.workingTitle&&this.fieldInfoMap){const r=this._createFormattedAttributes(e,t,i).global;return o({attributes:s,expressionAttributes:null,fieldInfoMap:this.fieldInfoMap,globalAttributes:r,layer:e,text:this.workingTitle})}return""}catch{}return""}async _checkAndReQueryGraphic(e,t){const r=t.getObjectId();if(null==r)return t;if(!(0,p.Kl)(this.requiredFields,t)){const t=e.createQuery();t.where="1=1",t.outFields=[...this.requiredFields],t.objectIds=[r];const s=await e.queryFeatures(t);if(1===s?.features.length)return s.features[0]}return t}_createFieldInfoMap(e){const t=new Map;if(!e)return t;for(const r of e){if(!r.fieldName)continue;const e=this.fieldsIndex.get(r.fieldName),s=e?.name??r.fieldName;r.fieldName=s,t.set(s.toLowerCase(),r)}return t}_createFormattedAttributes(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"system";const s=this.effectivePopupTemplate?.fieldInfos??[],i={};if(!this._featureUtils)return{};if(!this.hasBadExpressions&&this.calculatedExpressions.length>0&&this._arcadeTask?.value){const r=this._arcadeTask.value.Feature.createFromGraphicLikeObject(t.geometry,t.attributes,e,null);for(const e of this.calculatedExpressions)try{i[`expression/${e.name}`]=e.func({vars:{$feature:r}})}catch{}}const o={...t.attributes,...i};return{global:this._featureUtils.formatAttributes({fieldInfos:s,attributes:o,graphic:t,timeZone:r,layer:e,fieldInfoMap:this.fieldInfoMap}),content:[]}}_extractFieldNames(e){return(0,p.nw)(e).filter((e=>!(0===e.indexOf("relationships/")||0===e.indexOf("expression/"))))}};(0,s._)([(0,a.MZ)({readOnly:!0})],d.prototype,"_arcadeTask",null),(0,s._)([(0,a.MZ)()],d.prototype,"_featureUtils",void 0),(0,s._)([(0,a.MZ)({readOnly:!0})],d.prototype,"featureUtilsPromise",null),(0,s._)([(0,a.MZ)({readOnly:!0})],d.prototype,"calculatedExpressions",null),(0,s._)([(0,a.MZ)()],d.prototype,"displayField",void 0),(0,s._)([(0,a.MZ)()],d.prototype,"effectivePopupTemplate",void 0),(0,s._)([(0,a.MZ)()],d.prototype,"expressionsUsedInTitle",null),(0,s._)([(0,a.MZ)()],d.prototype,"fieldsIndex",void 0),(0,s._)([(0,a.MZ)()],d.prototype,"fieldInfoMap",null),(0,s._)([(0,a.MZ)()],d.prototype,"fields",void 0),(0,s._)([(0,a.MZ)()],d.prototype,"objectIdField",void 0),(0,s._)([(0,a.MZ)()],d.prototype,"requiredFields",null),d=(0,s._)([(0,l.$)("esri.layers.support.TitleCreator")],d);const c=d},23965:(e,t,r)=>{r.d(t,{A:()=>c});var s=r(35143),i=r(69098),o=r(45802),n=r(42553),a=r(46053),l=(r(81806),r(76460),r(47249),r(85842));const p=new o.J({esriRelCardinalityOneToOne:"one-to-one",esriRelCardinalityOneToMany:"one-to-many",esriRelCardinalityManyToMany:"many-to-many"}),u=new o.J({esriRelRoleOrigin:"origin",esriRelRoleDestination:"destination"});let d=class extends(i.A.ClonableMixin(n.A)){constructor(e){super(e),this.cardinality=null,this.catalogId=null,this.composite=null,this.id=null,this.keyField=null,this.keyFieldInRelationshipTable=null,this.name=null,this.relatedTableId=null,this.relationshipTableId=null,this.role=null}};(0,s._)([(0,a.MZ)({json:{read:p.read,write:p.write}})],d.prototype,"cardinality",void 0),(0,s._)([(0,a.MZ)({json:{name:"catalogID"}})],d.prototype,"catalogId",void 0),(0,s._)([(0,a.MZ)({json:{read:!0,write:!0}})],d.prototype,"composite",void 0),(0,s._)([(0,a.MZ)({json:{read:!0,write:!0}})],d.prototype,"id",void 0),(0,s._)([(0,a.MZ)({json:{read:!0,write:!0}})],d.prototype,"keyField",void 0),(0,s._)([(0,a.MZ)({json:{read:!0,write:!0}})],d.prototype,"keyFieldInRelationshipTable",void 0),(0,s._)([(0,a.MZ)({json:{read:!0,write:!0}})],d.prototype,"name",void 0),(0,s._)([(0,a.MZ)({json:{read:!0,write:!0}})],d.prototype,"relatedTableId",void 0),(0,s._)([(0,a.MZ)({json:{read:!0,write:!0}})],d.prototype,"relationshipTableId",void 0),(0,s._)([(0,a.MZ)({json:{read:u.read,write:u.write}})],d.prototype,"role",void 0),d=(0,s._)([(0,l.$)("esri.layers.support.Relationship")],d);const c=d},25515:(e,t,r)=>{r.d(t,{A:()=>b});var s=r(35143),i=r(3825),o=r(50076),n=r(54099),a=r(5632),l=r(49304),p=r(76460),u=r(50346),d=r(90534),c=r(46053),y=(r(81806),r(47249),r(85842)),h=r(76797),f=r(13312),m=r(86560);var g=r(59187);let v=0,w=class extends(n.A.EventedMixin(a.A.IdentifiableMixin(l.A))){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new h.A(-180,-90,180,90,f.A.WGS84),this.id=Date.now().toString(16)+"-layer-"+v++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.persistenceEnabled=!1,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=f.A.WGS84,this.title=null,this.type=null,this.url=null,this.visibilityTimeExtent=null,this.visible=!0}static async fromArcGISServerUrl(e){const t="string"==typeof e?{url:e}:e;return(await Promise.all([r.e(652),r.e(2544)]).then(r.bind(r,62544))).fromUrl(t)}static fromPortalItem(e){return async function(e){const t="portalItem"in e?e:{portalItem:e},{fromItem:s}=await Promise.all([r.e(9624),r.e(652),r.e(2487)]).then(r.bind(r,2487));try{return await s(t)}catch(i){const e=t?.portalItem,r=e?.id||"unset",s=e?.portal?.url||m.A.portalUrl;throw p.A.getLogger("esri.layers.support.fromPortalItem").error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+s+"', id: '"+r+"')",i),i}}(e)}initialize(){this.when().catch((e=>{(0,u.zf)(e)||p.A.getLogger(this).error("#load()",`Failed to load layer (title: '${this.title??"no title"}', id: '${this.id??"no id"}')`,{error:e})}))}destroy(){const e=this.parent;if(e){const t=this;"layers"in e&&e.layers.includes(t)?e.layers.remove(t):"tables"in e&&e.tables.includes(t)?e.tables.remove(t):"baseLayers"in e&&e.baseLayers.includes(t)?e.baseLayers.remove(t):"referenceLayers"in e&&e.referenceLayers.includes(t)&&e.referenceLayers.remove(t),this._set("parent",null)}}get effectiveVisible(){let e=this.visible;const t=this.parent;return e&&t&&"effectiveVisible"in t&&(e&&=t.effectiveVisible),e}get hasAttributionData(){return null!=this.attributionDataUrl}get parsedUrl(){return(0,d.An)(this.url)}createLayerView(e,t){return Promise.reject(new o.A("layer:create-layer-view","Layer does not support creating a layer view"))}async fetchAttributionData(){const e=this.attributionDataUrl;if(this.hasAttributionData&&e)return(await(0,i.A)(e,{query:{f:"json"},responseType:"json"})).data;throw new o.A("layer:no-attribution-data","Layer does not have attribution data")}};(0,s._)([(0,c.MZ)({type:String})],w.prototype,"attributionDataUrl",void 0),(0,s._)([(0,c.MZ)({readOnly:!0})],w.prototype,"effectiveVisible",null),(0,s._)([(0,c.MZ)({type:h.A})],w.prototype,"fullExtent",void 0),(0,s._)([(0,c.MZ)({readOnly:!0})],w.prototype,"hasAttributionData",null),(0,s._)([(0,c.MZ)({type:String,clonable:!1})],w.prototype,"id",void 0),(0,s._)([(0,c.MZ)({type:Boolean,nonNullable:!0})],w.prototype,"legendEnabled",void 0),(0,s._)([(0,c.MZ)({type:["show","hide","hide-children"]})],w.prototype,"listMode",void 0),(0,s._)([(0,c.MZ)({type:Number,range:{min:0,max:1},nonNullable:!0})],w.prototype,"opacity",void 0),(0,s._)([(0,c.MZ)({clonable:!1})],w.prototype,"parent",void 0),(0,s._)([(0,c.MZ)({readOnly:!0})],w.prototype,"parsedUrl",null),(0,s._)([(0,c.MZ)({type:Boolean,readOnly:!0})],w.prototype,"persistenceEnabled",void 0),(0,s._)([(0,c.MZ)({type:Boolean})],w.prototype,"popupEnabled",void 0),(0,s._)([(0,c.MZ)({type:Boolean})],w.prototype,"attributionVisible",void 0),(0,s._)([(0,c.MZ)({type:f.A})],w.prototype,"spatialReference",void 0),(0,s._)([(0,c.MZ)({type:String})],w.prototype,"title",void 0),(0,s._)([(0,c.MZ)({readOnly:!0,json:{read:!1}})],w.prototype,"type",void 0),(0,s._)([(0,c.MZ)()],w.prototype,"url",void 0),(0,s._)([(0,c.MZ)({type:g.A})],w.prototype,"visibilityTimeExtent",void 0),(0,s._)([(0,c.MZ)({type:Boolean,nonNullable:!0})],w.prototype,"visible",void 0),w=(0,s._)([(0,y.$)("esri.layers.Layer")],w);const b=w},31933:(e,t,r)=>{r.d(t,{BR:()=>f,CF:()=>h,Eq:()=>u,F2:()=>n,Ov:()=>d,Sv:()=>a,TU:()=>p,W_:()=>c,XX:()=>l,tk:()=>m,wI:()=>y,yZ:()=>o});var s=r(55171),i=r(3825);function o(e){return null!=e&&"object"==typeof e&&"type"in e&&"feature"===e.type}function n(e){return null!=e&&"object"==typeof e&&"type"in e&&"subtype-group"===e.type&&"sublayers"in e}function a(e){return"subtype-sublayer"===e?.type}const l={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};function p(e){const t=e?.type;return"building-scene"===t||"integrated-mesh"===t||"point-cloud"===t||"scene"===t}function u(e){return"integrated-mesh"===e||"integrated-mesh-3dtiles"===e}function d(e){return"feature"===e?.type&&!e.url&&"memory"===e.source?.type}function c(e){const t=e?.type;return("feature"===t||"subtype-group"===t||"oriented-imagery"===t)&&"feature-layer"===e?.source?.type}async function y(e,t){const r=s.id?.findServerInfo(e);if(null!=r?.currentVersion)return r.owningSystemUrl||null;const o=e.toLowerCase().indexOf("/rest/services");if(-1===o)return null;const n=`${e.slice(0,o)}/rest/info`,a=null!=t?t.signal:null,{data:l}=await(0,i.A)(n,{query:{f:"json"},responseType:"json",signal:a});return l?.owningSystemUrl||null}function h(e){if(!("capabilities"in e))return!1;switch(e.type){case"catalog":case"catalog-footprint":case"csv":case"feature":case"geojson":case"imagery":case"knowledge-graph-sublayer":case"ogc-feature":case"oriented-imagery":case"scene":case"sublayer":case"subtype-group":case"subtype-sublayer":case"wfs":return!0;default:return!1}}function f(e){return h(e)?"effectiveCapabilities"in e?e.effectiveCapabilities:e.capabilities:null}function m(e){return!!function(e){if(!("editingEnabled"in e))return!1;switch(e.type){case"csv":case"feature":case"geojson":case"oriented-imagery":case"scene":case"subtype-group":case"subtype-sublayer":return!0;default:return!1}}(e)&&("effectiveEditingEnabled"in e?e.effectiveEditingEnabled:e.editingEnabled)}},37534:(e,t,r)=>{r.d(t,{Rr:()=>l,fY:()=>u,ne:()=>p});var s=r(35143),i=r(48611),o=r(46053),n=(r(81806),r(76460),r(47249),r(85842)),a=r(51162);function l(e,t,r){if(!e)return null;const s=e.find((e=>!!e.field));if(!s)return null;const i=new a.A;return i.read(s,r),[i]}const p={type:[a.A],json:{origins:{"web-scene":{write:!1,read:!1}},name:"layerDefinition.orderBy",read:{reader:l},write:{writer:function(e,t,r,s){const o=e.find((e=>!!e.field));o&&(0,i.sM)(r,[o.toJSON()],t)}}}},u=e=>{let t=class extends e{constructor(){super(...arguments),this.orderBy=null}};return(0,s._)([(0,o.MZ)(p)],t.prototype,"orderBy",void 0),t=(0,s._)([(0,n.$)("esri.layers.mixins.OrderedLayer")],t),t}},44141:(e,t,r)=>{r.d(t,{S:()=>h,d:()=>S});var s=r(81806),i=r(13096),o=r(19463);function n(e,t,r){return!!l(e,t,r)}function a(e,t,r){return l(e,t,r)}function l(e,t,r){return e&&e.hasOwnProperty(t)?e[t]:r}const p={name:"supportsName",size:"supportsSize",contentType:"supportsContentType",keywords:"supportsKeywords",exifInfo:"supportsExifInfo"};function u(e){const t=e?.supportedSpatialAggregationStatistics?.map((e=>e.toLowerCase()));return{envelope:!!t?.includes("envelopeaggregate"),centroid:!!t?.includes("centroidaggregate"),convexHull:!!t?.includes("convexhullaggregate")}}function d(e,t){const r=e?.supportedOperationsWithCacheHint?.map((e=>e.toLowerCase()));return!!r?.includes(t.toLowerCase())}function c(e){const t=e?.supportedStatisticTypes?.map((e=>e.toLowerCase()));return{count:!!t?.includes("count"),sum:!!t?.includes("sum"),min:!!t?.includes("min"),max:!!t?.includes("max"),avg:!!t?.includes("avg"),var:!!t?.includes("var"),stddev:!!t?.includes("stddev"),percentileContinuous:!!t?.includes("percentile_continuous"),percentileDiscrete:!!t?.includes("percentile_discrete"),envelope:!!t?.includes("envelopeaggregate"),centroid:!!t?.includes("centroidaggregate"),convexHull:!!t?.includes("convexhullaggregate")}}function y(e){const t=e?.supportedNormalizationTypes?.map((e=>e.toLowerCase()));return{field:!!t?.includes("field"),log:!!t?.includes("log"),naturalLog:!!t?.includes("naturallog"),percentOfTotal:!!t?.includes("percentoftotal"),squareRoot:!!t?.includes("squareroot")}}function h(e,t){return{analytics:f(e),attachment:m(e),data:g(e),metadata:v(e),operations:w(e.capabilities,e,t),query:b(e,t),queryAttributeBins:x(e),queryRelated:_(e),queryTopFeatures:M(e),editing:A(e)}}function f(e){return{supportsCacheHint:d(e.advancedQueryCapabilities,"queryAnalytics")}}function m(e){const t=e.attachmentProperties,r={supportsName:!1,supportsSize:!1,supportsContentType:!1,supportsKeywords:!1,supportsExifInfo:!1,supportsCacheHint:d(e.advancedQueryCapabilities,"queryAttachments"),supportsOrderByFields:n(e.advancedQueryCapabilities,"supportsQueryAttachmentOrderByFields",!1),supportsResize:n(e,"supportsAttachmentsResizing",!1)};return t&&Array.isArray(t)&&t.forEach((e=>{const t=p[e.name];t&&(r[t]=!!e.isEnabled)})),r}function g(e){return{isVersioned:n(e,"isDataVersioned",!1),isBranchVersioned:n(e,"isDataBranchVersioned",!1),supportsAttachment:n(e,"hasAttachments",!1),supportsM:n(e,"hasM",!1),supportsZ:n(e,"hasZ",!1)}}function v(e){return{supportsAdvancedFieldProperties:n(e,"supportsFieldDescriptionProperty",!1)}}function w(e,t,r){const s=e?e.toLowerCase().split(",").map((e=>e.trim())):[],o=r?(0,i.qg)(r):null,a=s.includes(null!=o&&"MapServer"===o.serverType?"data":"query"),l=s.includes("editing")&&!t.datesInUnknownTimezone;let p=l&&s.includes("create"),u=l&&s.includes("delete"),d=l&&s.includes("update");const c=s.includes("changetracking"),y=t.advancedQueryCapabilities;return l&&!(p||u||d)&&(p=u=d=!0),{supportsCalculate:n(t,"supportsCalculate",!1),supportsTruncate:n(t,"supportsTruncate",!1),supportsValidateSql:n(t,"supportsValidateSql",!1),supportsAdd:p,supportsDelete:u,supportsEditing:l,supportsChangeTracking:c,supportsQuery:a,supportsQueryAnalytics:n(y,"supportsQueryAnalytic",!1),supportsQueryAttachments:n(y,"supportsQueryAttachments",!1),supportsQueryBins:n(y,"supportsQueryBins",!1),supportsQueryTopFeatures:n(y,"supportsTopFeaturesQuery",!1),supportsResizeAttachments:n(t,"supportsAttachmentsResizing",!1),supportsSync:s.includes("sync"),supportsUpdate:d,supportsExceedsLimitStatistics:n(t,"supportsExceedsLimitStatistics",!1),supportsAsyncConvert3D:n(t,"supportsAsyncConvert3D",!1)}}function b(e,t){const r=e.advancedQueryCapabilities,l=e.ownershipBasedAccessControlForFeatures,p=e.archivingInfo,c=e.currentVersion,y=t?.includes("MapServer"),h=!y||c>=(0,s.A)("mapserver-pbf-version-support"),f=(0,i.Wo)(t),m=new Set((e.supportedQueryFormats??"").split(",").map((e=>e.toLowerCase().trim())));return{maxRecordCount:a(e,"maxRecordCount",void 0),maxRecordCountFactor:a(e,"maxRecordCountFactor",void 0),standardMaxRecordCount:a(e,"standardMaxRecordCount",void 0),supportedSpatialAggregationStatistics:u(r),supportsCacheHint:n(r,"supportsQueryWithCacheHint",!1)||d(r,"query"),supportsCentroid:n(r,"supportsReturningGeometryCentroid",!1),supportsCompactGeometry:f,supportsCurrentUser:n(r,"supportsCurrentUserQueries",!1),supportsDefaultSpatialReference:n(r,"supportsDefaultSR",!1),supportsDisjointSpatialRelationship:n(r,"supportsDisjointSpatialRel",!1),supportsDistance:n(r,"supportsQueryWithDistance",!1),supportsDistinct:n(r,"supportsDistinct",e.supportsAdvancedQueries),supportsExtent:n(r,"supportsReturningQueryExtent",!1),supportsFormatPBF:h&&m.has("pbf"),supportsFullTextSearch:n(r,"supportsFullTextSearch",!1),supportsGeometryProperties:n(r,"supportsReturningGeometryProperties",!1),supportsHavingClause:n(r,"supportsHavingClause",!1),supportsHistoricMoment:n(p,"supportsQueryWithHistoricMoment",!1),supportsMaxRecordCountFactor:n(r,"supportsMaxRecordCountFactor",!1),supportsOrderBy:n(r,"supportsOrderBy",e.supportsAdvancedQueries),supportsPagination:n(r,"supportsPagination",!1),supportsPercentileStatistics:n(r,"supportsPercentileStatistics",!1),supportsQuantization:n(e,"supportsCoordinatesQuantization",!1),supportsQuantizationEditMode:n(e,"supportsQuantizationEditMode",!1),supportsQueryByAnonymous:n(l,"allowAnonymousToQuery",!0),supportsQueryByOthers:n(l,"allowOthersToQuery",!0),supportsQueryGeometry:n(e,"supportsReturningQueryGeometry",!1),supportsResultType:n(r,"supportsQueryWithResultType",!1),supportsReturnMesh:!!(0,o.Hz)(e.infoFor3D),supportsSpatialAggregationStatistics:n(r,"supportsSpatialAggregationStatistics",!1),supportsSqlExpression:n(r,"supportsSqlExpression",!1),supportsStandardizedQueriesOnly:n(e,"useStandardizedQueries",!1),supportsStatistics:n(r,"supportsStatistics",e.supportsStatistics),supportsTopFeaturesQuery:n(r,"supportsTopFeaturesQuery",!1),supportsTrueCurve:n(r,"supportsTrueCurve",!1),tileMaxRecordCount:a(e,"tileMaxRecordCount",void 0)}}function _(e){const t=e.advancedQueryCapabilities,r=n(t,"supportsAdvancedQueryRelated",!1);return{supportsPagination:n(t,"supportsQueryRelatedPagination",!1),supportsCount:r,supportsOrderBy:r,supportsCacheHint:d(t,"queryRelated")}}function M(e){return{supportsCacheHint:d(e.advancedQueryCapabilities,"queryTopFilter")}}function x(e){const t=e?e.queryBinsCapabilities:void 0;return{supportsDate:n(t,"supportsDateBin",!1),supportsFixedInterval:n(t,"supportsFixedIntervalBin",!1),supportsAutoInterval:n(t,"supportsAutoIntervalBin",!1),supportsFixedBoundaries:n(t,"supportsFixedBoundariesBin",!1),supportsStackBy:n(t,"supportsStackBy",!1),supportsSplitBy:n(t,"supportsSplitBy",!1),supportsSnapToData:n(t,"supportsSnapToData",!1),supportsReturnFullIntervalBin:n(t,"supportsReturnFullIntervalBin",!1),supportsFirstDayOfWeek:n(t,"supportsFirstDayOfWeek",!1),supportsNormalization:n(t,"supportsNormalization",!1),supportedStatistics:c(t),supportedNormalizationTypes:y(t)}}function A(e){const t=e.ownershipBasedAccessControlForFeatures,r=e?e.advancedEditingCapabilities:void 0;return{supportsGeometryUpdate:n(e,"allowGeometryUpdates",!0),supportsGlobalId:n(e,"supportsApplyEditsWithGlobalIds",!1),supportsReturnServiceEditsInSourceSpatialReference:n(e,"supportsReturnServiceEditsInSourceSR",!1),supportsRollbackOnFailure:n(e,"supportsRollbackOnFailureParameter",!1),supportsUpdateWithoutM:n(e,"allowUpdateWithoutMValues",!1),supportsUploadWithItemId:n(e,"supportsAttachmentsByUploadId",!1),supportsDeleteByAnonymous:n(t,"allowAnonymousToDelete",!0),supportsDeleteByOthers:n(t,"allowOthersToDelete",!0),supportsUpdateByAnonymous:n(t,"allowAnonymousToUpdate",!0),supportsUpdateByOthers:n(t,"allowOthersToUpdate",!0),supportsAsyncApplyEdits:n(r,"supportsAsyncApplyEdits",!1),zDefault:a(e,"zDefault",void 0)}}function S(e){return{operations:{supportsAppend:n(e,"supportsAppend",!1),supportsCoverageQuery:e?.playbackInfo?.klv["0601"]??!1,supportsExportClip:n(e,"supportsExportClip",!1),supportsExportFrameset:n(e,"supportsExportFrameset",!1),supportsMensuration:n(e,"supportsMensuration",!1),supportsUpdate:n(e,"supportsUpdate",!1)}}}},51162:(e,t,r)=>{r.d(t,{A:()=>d});var s,i=r(35143),o=r(45802),n=r(42553),a=r(46053),l=(r(81806),r(76460),r(47249),r(85842));const p=new o.J({asc:"ascending",desc:"descending"});let u=s=class extends n.A{constructor(e){super(e),this.field=null,this.valueExpression=null,this.order="ascending"}clone(){return new s({field:this.field,valueExpression:this.valueExpression,order:this.order})}};(0,i._)([(0,a.MZ)({type:String,json:{write:!0}})],u.prototype,"field",void 0),(0,i._)([(0,a.MZ)({type:String,json:{write:!0,origins:{"web-scene":{read:!1,write:!1}}}})],u.prototype,"valueExpression",void 0),(0,i._)([(0,a.MZ)({type:p.apiValues,json:{type:p.jsonValues,read:p.read,write:p.write}})],u.prototype,"order",void 0),u=s=(0,i._)([(0,l.$)("esri.layers.support.OrderByInfo")],u);const d=u},61701:(e,t,r)=>{var s;r.d(t,{X:()=>s}),function(e){e[e.SAVE=0]="SAVE",e[e.SAVE_AS=1]="SAVE_AS"}(s||(s={}))},77725:(e,t,r)=>{r.d(t,{A:()=>w});var s,i=r(35143),o=r(39356),n=r(45802),a=r(42553),l=r(53084),p=r(46053),u=(r(81806),r(76460),r(28379)),d=r(85842),c=r(17707),y=r(13312),h=r(19902),f=r(31608),m=r(44135);const g=new n.J({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let v=s=class extends a.A{constructor(e){super(e),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(e,t){return this.readFeaturesWithClass(e,t,o.default)}writeGeometryType(e,t,r,s){if(e)return void g.write(e,t,r,s);const{features:i}=this;if(i)for(const o of i)if(null!=o?.geometry)return void g.write(o.geometry.type,t,r,s)}readQueryGeometry(e,t){if(!e)return null;const r=!!e.spatialReference,s=(0,h.rS)(e);return s&&!r&&t.spatialReference&&(s.spatialReference=y.A.fromJSON(t.spatialReference)),s}writeSpatialReference(e,t){if(e)return void(t.spatialReference=e.toJSON());const{features:r}=this;if(r)for(const s of r)if(s&&null!=s.geometry&&s.geometry.spatialReference)return void(t.spatialReference=s.geometry.spatialReference.toJSON())}clone(){return new s(this.cloneProperties())}cloneProperties(){return(0,l.o8)({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})}toJSON(e){const t=this.write();if(t.features&&Array.isArray(e)&&e.length>0)for(let r=0;r<t.features.length;r++){const s=t.features[r];if(s.geometry){const t=e?.[r];s.geometry=t?.toJSON()||s.geometry}}return t}quantize(e){const{scale:[t,r],translate:[s,i]}=e,o=this.features,n=this._getQuantizationFunction(this.geometryType,(e=>Math.round((e-s)/t)),(e=>Math.round((i-e)/r)));for(let a=0,l=o.length;a<l;a++)n?.(o[a].geometry)||(o.splice(a,1),a--,l--);return this.transform=e,this}unquantize(){const{geometryType:e,features:t,transform:r}=this;if(!r)return this;const{translate:[s,i],scale:[o,n]}=r;let a=null,l=null;if(this.hasZ&&null!=r?.scale?.[2]){const{translate:[,,e],scale:[,,t]}=r;a=r=>r*t+e}if(this.hasM&&null!=r?.scale?.[3]){const{translate:[,,,e],scale:[,,,t]}=r;l=r=>null==r?r:r*t+e}const p=this._getHydrationFunction(e,(e=>e*o+s),(e=>i-e*n),a,l);for(const{geometry:u}of t)null!=u&&p&&p(u);return this.transform=null,this}readFeaturesWithClass(e,t,r){const s=y.A.fromJSON(t.spatialReference),i=[];for(let o=0;o<e.length;o++){const t=e[o],n=r.fromJSON(t),a=t.geometry?.spatialReference;null==n.geometry||a||(n.geometry.spatialReference=s);const l=t.aggregateGeometries,p=n.aggregateGeometries;if(l&&null!=p)for(const e in p){const t=p[e],r=l[e],i=r?.spatialReference;null==t||i||(t.spatialReference=s)}i.push(n)}return i}_quantizePoints(e,t,r){let s,i;const o=[];for(let n=0,a=e.length;n<a;n++){const a=e[n];if(n>0){const e=t(a[0]),n=r(a[1]);e===s&&n===i||(o.push([e-s,n-i]),s=e,i=n)}else s=t(a[0]),i=r(a[1]),o.push([s,i])}return o.length>0?o:null}_getQuantizationFunction(e,t,r){return"point"===e?e=>(e.x=t(e.x),e.y=r(e.y),e):"polyline"===e||"polygon"===e?e=>{const s=(0,h.Bi)(e)?e.rings:e.paths,i=[];for(let o=0,n=s.length;o<n;o++){const e=s[o],n=this._quantizePoints(e,t,r);n&&i.push(n)}return i.length>0?((0,h.Bi)(e)?e.rings=i:e.paths=i,e):null}:"multipoint"===e?e=>{const s=this._quantizePoints(e.points,t,r);return s&&s.length>0?(e.points=s,e):null}:"extent"===e?e=>e:null}_getHydrationFunction(e,t,r,s,i){return"point"===e?e=>{e.x=t(e.x),e.y=r(e.y),s&&(e.z=s(e.z))}:"polyline"===e||"polygon"===e?e=>{const o=(0,h.Bi)(e)?e.rings:e.paths;let n,a;for(let s=0,i=o.length;s<i;s++){const e=o[s];for(let s=0,i=e.length;s<i;s++){const i=e[s];s>0?(n+=i[0],a+=i[1]):(n=i[0],a=i[1]),i[0]=t(n),i[1]=r(a)}}if(s&&i)for(let t=0,r=o.length;t<r;t++){const e=o[t];for(let t=0,r=e.length;t<r;t++){const r=e[t];r[2]=s(r[2]),r[3]=i(r[3])}}else if(s)for(let t=0,r=o.length;t<r;t++){const e=o[t];for(let t=0,r=e.length;t<r;t++){const r=e[t];r[2]=s(r[2])}}else if(i)for(let t=0,r=o.length;t<r;t++){const e=o[t];for(let t=0,r=e.length;t<r;t++){const r=e[t];r[2]=i(r[2])}}}:"extent"===e?e=>{e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax),s&&null!=e.zmax&&null!=e.zmin&&(e.zmax=s(e.zmax),e.zmin=s(e.zmin)),i&&null!=e.mmax&&null!=e.mmin&&(e.mmax=i(e.mmax),e.mmin=i(e.mmin))}:"multipoint"===e?e=>{const o=e.points;let n,a;for(let s=0,i=o.length;s<i;s++){const e=o[s];s>0?(n+=e[0],a+=e[1]):(n=e[0],a=e[1]),e[0]=t(n),e[1]=r(a)}if(s&&i)for(let t=0,r=o.length;t<r;t++){const e=o[t];e[2]=s(e[2]),e[3]=i(e[3])}else if(s)for(let t=0,r=o.length;t<r;t++){const e=o[t];e[2]=s(e[2])}else if(i)for(let t=0,r=o.length;t<r;t++){const e=o[t];e[2]=i(e[2])}}:null}};(0,i._)([(0,p.MZ)({type:String,json:{write:!0}})],v.prototype,"displayFieldName",void 0),(0,i._)([(0,p.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],v.prototype,"exceededTransferLimit",void 0),(0,i._)([(0,p.MZ)({type:[o.default],json:{write:!0}})],v.prototype,"features",void 0),(0,i._)([(0,u.w)("features")],v.prototype,"readFeatures",null),(0,i._)([(0,p.MZ)({type:[m.A],json:{write:!0}})],v.prototype,"fields",void 0),(0,i._)([(0,p.MZ)({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:g.read}}})],v.prototype,"geometryType",void 0),(0,i._)([(0,c.K)("geometryType")],v.prototype,"writeGeometryType",null),(0,i._)([(0,p.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],v.prototype,"hasM",void 0),(0,i._)([(0,p.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],v.prototype,"hasZ",void 0),(0,i._)([(0,p.MZ)({types:f.yR,json:{write:!0}})],v.prototype,"queryGeometry",void 0),(0,i._)([(0,u.w)("queryGeometry")],v.prototype,"readQueryGeometry",null),(0,i._)([(0,p.MZ)({type:y.A,json:{write:!0}})],v.prototype,"spatialReference",void 0),(0,i._)([(0,c.K)("spatialReference")],v.prototype,"writeSpatialReference",null),(0,i._)([(0,p.MZ)({json:{write:!0}})],v.prototype,"transform",void 0),v=s=(0,i._)([(0,d.$)("esri.rest.support.FeatureSet")],v),v.prototype.toJSON.isDefaultToJSON=!0;const w=v},91485:(e,t,r)=>{r.d(t,{A:()=>y});var s=r(35143),i=r(69098),o=r(42553),n=r(46053),a=(r(81806),r(76460),r(47249),r(28379)),l=r(85842),p=r(17707),u=r(76866),d=r(15427);let c=class extends(i.A.ClonableMixin(o.A)){constructor(e){super(e),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(e){const t={};for(const r of Object.keys(e))t[r]=(0,u.rS)(e[r]);return t}writeDomains(e,t){const r={};for(const s of Object.keys(e))e[s]&&(r[s]=e[s]?.toJSON());t.domains=r}};(0,s._)([(0,n.MZ)({json:{write:!0}})],c.prototype,"id",void 0),(0,s._)([(0,n.MZ)({json:{write:!0}})],c.prototype,"name",void 0),(0,s._)([(0,n.MZ)({json:{write:!0}})],c.prototype,"domains",void 0),(0,s._)([(0,a.w)("domains")],c.prototype,"readDomains",null),(0,s._)([(0,p.K)("domains")],c.prototype,"writeDomains",null),(0,s._)([(0,n.MZ)({type:[d.A],json:{write:!0}})],c.prototype,"templates",void 0),c=(0,s._)([(0,l.$)("esri.layers.support.FeatureType")],c);const y=c},91605:(e,t,r)=>{r.d(t,{A:()=>w});var s,i=r(35143),o=r(18690),n=r(45802),a=r(42553),l=r(31633),p=r(62754),u=r(46053),d=(r(81806),r(76460),r(28379)),c=r(85842),y=r(17707);const h=(0,n.O)()({orthometric:"gravity-related-height",gravity_related_height:"gravity-related-height",ellipsoidal:"ellipsoidal"}),f=h.jsonValues.slice();(0,o.Xy)(f,"orthometric");const m=(0,n.O)()({meter:"meters",foot:"feet","us-foot":"us-feet","clarke-foot":"clarke-feet","clarke-yard":"clarke-yards","clarke-link":"clarke-links","sears-yard":"sears-yards","sears-foot":"sears-feet","sears-chain":"sears-chains","benoit-1895-b-chain":"benoit-1895-b-chains","indian-yard":"indian-yards","indian-1937-yard":"indian-1937-yards","gold-coast-foot":"gold-coast-feet","sears-1922-truncated-chain":"sears-1922-truncated-chains","50-kilometers":"50-kilometers","150-kilometers":"150-kilometers"});let g=s=class extends a.A{constructor(e){super(e),this.heightModel="gravity-related-height",this.heightUnit="meters",this.vertCRS=null}writeHeightModel(e,t,r){return h.write(e,t,r)}readHeightModel(e,t,r){return h.read(e)||(r?.messages&&r.messages.push(function(e,t){return new p.A("height-model:unsupported",`Height model of value '${e}' is not supported`,t)}(e,{context:r})),null)}readHeightUnit(e,t,r){return m.read(e)||(r?.messages&&r.messages.push(v(e,{context:r})),null)}readHeightUnitService(e,t,r){return(0,l.LA)(e)||m.read(e)||(r?.messages&&r.messages.push(v(e,{context:r})),null)}readVertCRS(e,t){return t.vertCRS||t.ellipsoid||t.geoid}clone(){return new s({heightModel:this.heightModel,heightUnit:this.heightUnit,vertCRS:this.vertCRS})}equals(e){return!!e&&(this===e||this.heightModel===e.heightModel&&this.heightUnit===e.heightUnit&&this.vertCRS===e.vertCRS)}static deriveUnitFromSR(e,t){const r=(0,l.k1)(t);return new s({heightModel:e.heightModel,heightUnit:r??void 0,vertCRS:e.vertCRS})}write(e,t){return t={origin:"web-scene",...t},super.write(e,t)}static fromJSON(e){if(!e)return null;const t=new s;return t.read(e,{origin:"web-scene"}),t}};function v(e,t){return new p.A("height-unit:unsupported",`Height unit of value '${e}' is not supported`,t)}(0,i._)([(0,u.MZ)({type:h.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:f,default:"ellipsoidal",write:{isRequired:!0}}}}})],g.prototype,"heightModel",void 0),(0,i._)([(0,y.K)("web-scene","heightModel")],g.prototype,"writeHeightModel",null),(0,i._)([(0,d.w)(["web-scene","service"],"heightModel")],g.prototype,"readHeightModel",null),(0,i._)([(0,u.MZ)({type:m.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:m.jsonValues,write:{writer:m.write,isRequired:!0}}}}})],g.prototype,"heightUnit",void 0),(0,i._)([(0,d.w)("web-scene","heightUnit")],g.prototype,"readHeightUnit",null),(0,i._)([(0,d.w)("service","heightUnit")],g.prototype,"readHeightUnitService",null),(0,i._)([(0,u.MZ)({type:String,constructOnly:!0,json:{origins:{"web-scene":{write:!0}}}})],g.prototype,"vertCRS",void 0),(0,i._)([(0,d.w)("service","vertCRS",["vertCRS","ellipsoid","geoid"])],g.prototype,"readVertCRS",null),g=s=(0,i._)([(0,c.$)("esri.geometry.HeightModelInfo")],g);const w=g}}]);
//# sourceMappingURL=4383.e4dfad12.chunk.js.map