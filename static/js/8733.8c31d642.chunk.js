"use strict";(self.webpackChunkfeedback_map=self.webpackChunkfeedback_map||[]).push([[8733],{11270:(e,t,r)=>{r.d(t,{q:()=>f});var i=r(35143),a=r(50076),s=r(90534),l=r(46053),n=r(40565),o=(r(81806),r(47249),r(28379)),p=r(85842),y=r(17707),c=r(80979),u=r(6527),d=r(29584);const g={ArcGISAnnotationLayer:!0,ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BingMapsAerial:!0,BingMapsHybrid:!0,BingMapsRoad:!0,CatalogLayer:!0,CSV:!0,GeoJSON:!0,GeoRSS:!0,GroupLayer:!0,KML:!0,KnowledgeGraphLayer:!0,MediaLayer:!0,OGCFeatureLayer:!0,OrientedImageryLayer:!0,SubtypeGroupLayer:!0,VectorTileLayer:!0,WCS:!0,WFS:!0,WMS:!0,WebTiledLayer:!0},h={ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BingMapsAerial:!0,BingMapsHybrid:!0,BingMapsRoad:!0,OpenStreetMap:!0,VectorTileLayer:!0,WCS:!0,WMS:!0,WebTiledLayer:!0},m={ArcGISFeatureLayer:!0,SubtypeGroupTable:!0},S={"web-scene/operational-layers":{ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledElevationServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BuildingSceneLayer:!0,CatalogLayer:!0,CSV:!0,GeoJSON:!0,GroupLayer:!0,IntegratedMesh3DTilesLayer:!0,Object3DTilesLayer:!0,IntegratedMeshLayer:!0,KML:!0,LineOfSightLayer:!0,MediaLayer:!0,OGCFeatureLayer:!0,OrientedImageryLayer:!0,PointCloudLayer:!0,RasterDataLayer:!0,VectorTileLayer:!0,ViewshedLayer:!0,Voxel:!0,WCS:!0,WFS:!0,WMS:!0,WebTiledLayer:!0},"web-scene/basemap":{ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,WCS:!0,WMS:!0,WebTiledLayer:!0},"web-scene/ground":{ArcGISTiledElevationServiceLayer:!0,RasterDataElevationLayer:!0},"web-scene/tables":{ArcGISFeatureLayer:!0},"web-map/operational-layers":g,"web-map/basemap":h,"web-map/tables":m,"link-chart/operational-layers":{...g,LinkChartLayer:!0},"link-chart/basemap":h,"link-chart/tables":m,"portal-item/operational-layers":{ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,BuildingSceneLayer:!0,IntegratedMesh3DTilesLayer:!0,IntegratedMeshLayer:!0,MediaLayer:!0,OrientedImageryLayer:!0,PointCloudLayer:!0,SubtypeGroupLayer:!0,WCS:!0},"portal-item/tables":{ArcGISFeatureLayer:!0,SubtypeGroupTable:!0}};var L=r(95363),I=r(59187);const f=e=>{let t=class extends e{constructor(){super(...arguments),this.persistenceEnabled=!0,this.title=null}readId(e,t,r){return"Group Layer"===r?.portalItem?.type?void 0:e}writeListMode(e,t,r,i){(i&&"ground"===i.layerContainerType||e&&(0,d.R)(this,r,{},i))&&(t[r]=e)}writeOperationalLayerType(e,t,r){e&&(t[r]=e)}writeTitle(e,t){t.title=e??"Layer"}readVisibilityTimeExtent(e){return e?I.A.fromArray(e):null}writeVisibilityTimeExtent(e,t,r,i){e&&"tables"!==i.layerContainerType&&(e.isEmpty?i?.messages&&i.messages.push(new a.A("layer:invalid-visibilityTimeExtent","visibilityTimeExtent cannot be empty")):t[r]=e.toArray())}read(e,t){t&&(t.layer=this),(0,u.t)(this,e,(t=>super.read(e,t)),t)}write(e,t){if(!this.persistenceEnabled&&!t?.ignorePersistenceEnabled)return null;if(t?.origin){const e=`${t.origin}/${t.layerContainerType||"operational-layers"}`,r=S[e];let i=!!r?.[this.operationalLayerType];if("ArcGISTiledElevationServiceLayer"===this.operationalLayerType&&"web-scene/operational-layers"===e&&(i=!1),"ArcGISDimensionLayer"===this.operationalLayerType&&"web-map/operational-layers"===e&&(i=!1),!i)return t.messages?.push(new a.A("layer:unsupported",`Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${e}'`,{layer:this})),null}const r=super.write(e,{...t,layer:this}),i=!!t&&!!t.messages&&!!t.messages.filter((e=>e instanceof a.A&&"web-document-write:property-required"===e.name)).length;return(0,s.w8)(r?.url)?(t?.messages?.push(new a.A("layer:invalid-url",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using a Blob URL cannot be written to web scenes and web maps`,{layer:this})),null):!this.url&&i?null:r}beforeSave(){}};return(0,i._)([(0,l.MZ)({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],t.prototype,"id",void 0),(0,i._)([(0,o.w)("id",["id"])],t.prototype,"readId",null),(0,i._)([(0,l.MZ)(L.C1)],t.prototype,"listMode",void 0),(0,i._)([(0,y.K)("listMode")],t.prototype,"writeListMode",null),(0,i._)([(0,l.MZ)({type:String,readOnly:!0,json:{read:!1,write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1},"web-scene":{name:"layerType",read:!1,write:{enabled:!0,ignoreOrigin:!0,layerContainerTypes:c.K,isRequired:!0}}}}})],t.prototype,"operationalLayerType",void 0),(0,i._)([(0,y.K)("operationalLayerType")],t.prototype,"writeOperationalLayerType",null),(0,i._)([(0,l.MZ)(L.ke)],t.prototype,"opacity",void 0),(0,i._)([(0,l.MZ)({type:Boolean,readOnly:!1})],t.prototype,"persistenceEnabled",void 0),(0,i._)([(0,l.MZ)({type:String,json:{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}},"portal-item":{write:!1}}},value:"Layer"})],t.prototype,"title",void 0),(0,i._)([(0,y.K)("title"),(0,y.K)(["web-scene"],"title")],t.prototype,"writeTitle",null),(0,i._)([(0,l.MZ)({type:I.A,json:{origins:{"web-scene":{write:{layerContainerTypes:c.K}}}}})],t.prototype,"visibilityTimeExtent",void 0),(0,i._)([(0,o.w)("visibilityTimeExtent")],t.prototype,"readVisibilityTimeExtent",null),(0,i._)([(0,y.K)(["portal-item","web-map","web-scene"],"visibilityTimeExtent",{visibilityTimeExtent:{type:[[n.jz,n.Uv]]}})],t.prototype,"writeVisibilityTimeExtent",null),(0,i._)([(0,l.MZ)({type:Boolean,json:{name:"visibility",write:{layerContainerTypes:c.K}}})],t.prototype,"visible",void 0),t=(0,i._)([(0,p.$)("esri.layers.mixins.OperationalLayer")],t),t}},19502:(e,t,r)=>{r.d(t,{b:()=>o});var i=r(35143),a=r(76460),s=r(46053),l=(r(81806),r(47249),r(85842)),n=r(13096);const o=e=>{let t=class extends e{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const e=(0,n.qg)(this.url);if(e?.title)return e.title}return this._get("title")||""}set title(e){this._set("title",e)}set url(e){this._set("url",(0,n.Jf)(e,a.A.getLogger(this)))}};return(0,i._)([(0,s.MZ)()],t.prototype,"title",null),(0,i._)([(0,s.MZ)({type:String})],t.prototype,"url",null),t=(0,i._)([(0,l.$)("esri.layers.mixins.ArcGISService")],t),t}},72945:(e,t,r)=>{r.d(t,{It:()=>d,LG:()=>l,OM:()=>p,Sm:()=>y,Y:()=>n,bK:()=>o,mm:()=>u,sQ:()=>c});var i=r(9624),a=r(13312),s=r(45417);function l(e,t){if(!n(e,t)){const r=e.typeKeywords;r?r.push(t):e.typeKeywords=[t]}}function n(e,t){return!!e.typeKeywords?.includes(t)}function o(e){return n(e,u.HOSTED_SERVICE)}function p(e,t){const r=e.typeKeywords;if(r){const e=r.indexOf(t);e>-1&&r.splice(e,1)}}function y(e,t,r){r?l(e,t):p(e,t)}async function c(e){const t=e.clone().normalize();let r;if(t.length>1)for(const i of t)r?i.width>r.width&&(r=i):r=i;else r=t[0];return async function(e){const t=e.spatialReference;if(t.isWGS84)return e.clone();if(t.isWebMercator)return(0,s.ci)(e);const r=a.A.WGS84;return await(0,i.initializeProjection)(t,r),(0,i.project)(e,r)}(r)}const u={DEVELOPER_BASEMAP:"DeveloperBasemap",GROUP_LAYER_MAP:"Map",HOSTED_SERVICE:"Hosted Service",JSAPI:"ArcGIS API for JavaScript",LOCAL_SCENE:"ViewingMode-Local",METADATA:"Metadata",MULTI_LAYER:"Multilayer",ORIENTED_IMAGERY_LAYER:"OrientedImageryLayer",SINGLE_LAYER:"Singlelayer",SUBTYPE_GROUP_LAYER:"SubtypeGroupLayer",SUBTYPE_GROUP_TABLE:"SubtypeGroupTable",TABLE:"Table",TILED_IMAGERY:"Tiled Imagery"};function d(e){const{portal:t,isOrgItem:r,itemControl:i}=e,a=t.user?.privileges;let s=!a||a.includes("features:user:edit"),l=!!r&&!!a?.includes("features:user:fullEdit");const n="update"===i||"admin"===i;return n?l=s=!0:l&&(s=!0),{features:{edit:s,fullEdit:l},content:{updateItem:n}}}},94729:(e,t,r)=>{r.d(t,{A:()=>w});var i=r(35143),a=r(86560),s=r(55171),l=r(3825),n=r(98773),o=r(50076),p=r(76460),y=r(30726),c=r(50346),u=r(90534),d=r(46053),g=(r(81806),r(47249),r(28379)),h=r(85842),m=r(17707),S=r(31933),L=r(65308),I=r(70652),f=r(38665),v=r(72945);const w=e=>{let t=class extends e{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0,this.userHasFullEditingPrivileges=!1,this.userHasUpdateItemPrivileges=!1}destroy(){this.portalItem=(0,y.pR)(this.portalItem),this.resourceReferences.portalItem=null,this.resourceReferences.paths.length=0}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,r){if(t.itemId)return new I.default({id:t.itemId,portal:r?.portal})}writePortalItem(e,t){e?.id&&(t.itemId=e.id)}async loadFromPortal(e,t){if(this.portalItem?.id)try{const{load:i}=await r.e(3814).then(r.bind(r,73814));return(0,c.Te)(t),await i({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData,layerModuleTypeMap:e.layerModuleTypeMap,populateGroupLayer:e.populateGroupLayer},t)}catch(i){throw(0,c.zf)(i)||p.A.getLogger(this).warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${i}`),i}}async finishLoadEditablePortalLayer(e){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(e).catch((e=>((0,c.QP)(e),!0))))}async setUserPrivileges(e,t){if(!a.A.userPrivilegesApplied)return this.finishLoadEditablePortalLayer(t);if(this.url)try{const{features:{edit:r,fullEdit:i},content:{updateItem:a}}=await this._fetchUserPrivileges(e,t);this._set("userHasEditingPrivileges",r),this._set("userHasFullEditingPrivileges",i),this._set("userHasUpdateItemPrivileges",a)}catch(r){(0,c.QP)(r)}}async _fetchUserPrivileges(e,t){let r=this.portalItem;if(!e||!r||!r.loaded||r.sourceUrl)return this._fetchFallbackUserPrivileges(t);const i=!s.id?.findCredential(this.url),a=e===r.id;if(a&&r.portal.user)return this._getUserPrivileges(r,i);let l,n;if(a)l=r.portal.url;else try{l=await(0,S.wI)(this.url,t)}catch(d){(0,c.QP)(d)}if(!l||!(0,u.b8)(l,r.portal.url))return this._fetchFallbackUserPrivileges(t);try{const e=null!=t?t.signal:null;n=await(s.id?.getCredential(`${l}/sharing`,{prompt:!1,signal:e}))}catch(d){(0,c.QP)(d)}const o=!0,p=!1,y=!1;if(!n)return{features:{edit:o,fullEdit:p},content:{updateItem:y}};try{if(a?await r.reload():(r=new I.default({id:e,portal:{url:l}}),await r.load(t)),r.portal.user)return this._getUserPrivileges(r,i)}catch(d){(0,c.QP)(d)}return{features:{edit:o,fullEdit:p},content:{updateItem:y}}}_getUserPrivileges(e,t){const r=(0,v.It)(e);return t&&(r.features.edit=!0),r}async _fetchFallbackUserPrivileges(e){let t=!0;try{t=await this._fetchUserHasEditingPrivileges(e)}catch(r){(0,c.QP)(r)}return{features:{edit:t,fullEdit:!1},content:{updateItem:!1}}}async _fetchUserHasEditingPrivileges(e){const t=this.url?s.id?.findCredential(this.url):null;if(!t)return!0;const r=b.credential===t?b.user:await this._fetchEditingUser(e);return b.credential=t,b.user=r,null==r?.privileges||r.privileges.includes("features:user:edit")}async _fetchEditingUser(e){const t=this.portalItem?.portal?.user;if(t)return t;const r=s.id?.findServerInfo(this.url??"");if(!r?.owningSystemUrl)return null;const i=`${r.owningSystemUrl}/sharing/rest`,a=L.A.getDefault();if(a&&a.loaded&&(0,u.S8)(a.restUrl)===(0,u.S8)(i))return a.user;const o=`${i}/community/self`,p=null!=e?e.signal:null,y=await(0,n.Ke)((0,l.A)(o,{authMode:"no-prompt",query:{f:"json"},signal:p}));return y.ok?f.A.fromJSON(y.value.data):null}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){const r=t?.portal,i=this.portalItem?.id&&(this.portalItem.portal||L.A.getDefault());return r&&i&&!(0,u.ut)(i.restUrl,r.restUrl)?(t.messages&&t.messages.push(new o.A("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(e,{...t,layer:this})}};return(0,i._)([(0,d.MZ)({type:I.default})],t.prototype,"portalItem",null),(0,i._)([(0,g.w)("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),(0,i._)([(0,m.K)("web-document","portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),(0,i._)([(0,d.MZ)({clonable:!1})],t.prototype,"resourceReferences",void 0),(0,i._)([(0,d.MZ)({type:Boolean,readOnly:!0})],t.prototype,"userHasEditingPrivileges",void 0),(0,i._)([(0,d.MZ)({type:Boolean,readOnly:!0})],t.prototype,"userHasFullEditingPrivileges",void 0),(0,i._)([(0,d.MZ)({type:Boolean,readOnly:!0})],t.prototype,"userHasUpdateItemPrivileges",void 0),t=(0,i._)([(0,h.$)("esri.layers.mixins.PortalLayer")],t),t},b={credential:null,user:null}}}]);
//# sourceMappingURL=8733.8c31d642.chunk.js.map