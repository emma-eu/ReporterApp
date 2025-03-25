"use strict";(self.webpackChunkfeedback_map=self.webpackChunkfeedback_map||[]).push([[5515,5896],{11270:(e,t,r)=>{r.d(t,{q:()=>L});var i=r(35143),a=r(50076),n=r(90534),s=r(46053),l=r(40565),o=(r(81806),r(47249),r(28379)),y=r(85842),p=r(17707),d=r(80979),c=r(6527),u=r(29584);const m={ArcGISAnnotationLayer:!0,ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BingMapsAerial:!0,BingMapsHybrid:!0,BingMapsRoad:!0,CatalogLayer:!0,CSV:!0,GeoJSON:!0,GeoRSS:!0,GroupLayer:!0,KML:!0,KnowledgeGraphLayer:!0,MediaLayer:!0,OGCFeatureLayer:!0,OrientedImageryLayer:!0,SubtypeGroupLayer:!0,VectorTileLayer:!0,WCS:!0,WFS:!0,WMS:!0,WebTiledLayer:!0},h={ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BingMapsAerial:!0,BingMapsHybrid:!0,BingMapsRoad:!0,OpenStreetMap:!0,VectorTileLayer:!0,WCS:!0,WMS:!0,WebTiledLayer:!0},S={ArcGISFeatureLayer:!0,SubtypeGroupTable:!0},g={"web-scene/operational-layers":{ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledElevationServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BuildingSceneLayer:!0,CatalogLayer:!0,CSV:!0,GeoJSON:!0,GroupLayer:!0,IntegratedMesh3DTilesLayer:!0,Object3DTilesLayer:!0,IntegratedMeshLayer:!0,KML:!0,LineOfSightLayer:!0,MediaLayer:!0,OGCFeatureLayer:!0,OrientedImageryLayer:!0,PointCloudLayer:!0,RasterDataLayer:!0,VectorTileLayer:!0,ViewshedLayer:!0,Voxel:!0,WCS:!0,WFS:!0,WMS:!0,WebTiledLayer:!0},"web-scene/basemap":{ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,WCS:!0,WMS:!0,WebTiledLayer:!0},"web-scene/ground":{ArcGISTiledElevationServiceLayer:!0,RasterDataElevationLayer:!0},"web-scene/tables":{ArcGISFeatureLayer:!0},"web-map/operational-layers":m,"web-map/basemap":h,"web-map/tables":S,"link-chart/operational-layers":{...m,LinkChartLayer:!0},"link-chart/basemap":h,"link-chart/tables":S,"portal-item/operational-layers":{ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,BuildingSceneLayer:!0,IntegratedMesh3DTilesLayer:!0,IntegratedMeshLayer:!0,MediaLayer:!0,OrientedImageryLayer:!0,PointCloudLayer:!0,SubtypeGroupLayer:!0,WCS:!0},"portal-item/tables":{ArcGISFeatureLayer:!0,SubtypeGroupTable:!0}};var b=r(95363),v=r(59187);const L=e=>{let t=class extends e{constructor(){super(...arguments),this.persistenceEnabled=!0,this.title=null}readId(e,t,r){return"Group Layer"===r?.portalItem?.type?void 0:e}writeListMode(e,t,r,i){(i&&"ground"===i.layerContainerType||e&&(0,u.R)(this,r,{},i))&&(t[r]=e)}writeOperationalLayerType(e,t,r){e&&(t[r]=e)}writeTitle(e,t){t.title=e??"Layer"}readVisibilityTimeExtent(e){return e?v.A.fromArray(e):null}writeVisibilityTimeExtent(e,t,r,i){e&&"tables"!==i.layerContainerType&&(e.isEmpty?i?.messages&&i.messages.push(new a.A("layer:invalid-visibilityTimeExtent","visibilityTimeExtent cannot be empty")):t[r]=e.toArray())}read(e,t){t&&(t.layer=this),(0,c.t)(this,e,(t=>super.read(e,t)),t)}write(e,t){if(!this.persistenceEnabled&&!t?.ignorePersistenceEnabled)return null;if(t?.origin){const e=`${t.origin}/${t.layerContainerType||"operational-layers"}`,r=g[e];let i=!!r?.[this.operationalLayerType];if("ArcGISTiledElevationServiceLayer"===this.operationalLayerType&&"web-scene/operational-layers"===e&&(i=!1),"ArcGISDimensionLayer"===this.operationalLayerType&&"web-map/operational-layers"===e&&(i=!1),!i)return t.messages?.push(new a.A("layer:unsupported",`Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${e}'`,{layer:this})),null}const r=super.write(e,{...t,layer:this}),i=!!t&&!!t.messages&&!!t.messages.filter((e=>e instanceof a.A&&"web-document-write:property-required"===e.name)).length;return(0,n.w8)(r?.url)?(t?.messages?.push(new a.A("layer:invalid-url",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using a Blob URL cannot be written to web scenes and web maps`,{layer:this})),null):!this.url&&i?null:r}beforeSave(){}};return(0,i._)([(0,s.MZ)({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],t.prototype,"id",void 0),(0,i._)([(0,o.w)("id",["id"])],t.prototype,"readId",null),(0,i._)([(0,s.MZ)(b.C1)],t.prototype,"listMode",void 0),(0,i._)([(0,p.K)("listMode")],t.prototype,"writeListMode",null),(0,i._)([(0,s.MZ)({type:String,readOnly:!0,json:{read:!1,write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1},"web-scene":{name:"layerType",read:!1,write:{enabled:!0,ignoreOrigin:!0,layerContainerTypes:d.K,isRequired:!0}}}}})],t.prototype,"operationalLayerType",void 0),(0,i._)([(0,p.K)("operationalLayerType")],t.prototype,"writeOperationalLayerType",null),(0,i._)([(0,s.MZ)(b.ke)],t.prototype,"opacity",void 0),(0,i._)([(0,s.MZ)({type:Boolean,readOnly:!1})],t.prototype,"persistenceEnabled",void 0),(0,i._)([(0,s.MZ)({type:String,json:{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}},"portal-item":{write:!1}}},value:"Layer"})],t.prototype,"title",void 0),(0,i._)([(0,p.K)("title"),(0,p.K)(["web-scene"],"title")],t.prototype,"writeTitle",null),(0,i._)([(0,s.MZ)({type:v.A,json:{origins:{"web-scene":{write:{layerContainerTypes:d.K}}}}})],t.prototype,"visibilityTimeExtent",void 0),(0,i._)([(0,o.w)("visibilityTimeExtent")],t.prototype,"readVisibilityTimeExtent",null),(0,i._)([(0,p.K)(["portal-item","web-map","web-scene"],"visibilityTimeExtent",{visibilityTimeExtent:{type:[[l.jz,l.Uv]]}})],t.prototype,"writeVisibilityTimeExtent",null),(0,i._)([(0,s.MZ)({type:Boolean,json:{name:"visibility",write:{layerContainerTypes:d.K}}})],t.prototype,"visible",void 0),t=(0,i._)([(0,y.$)("esri.layers.mixins.OperationalLayer")],t),t}},18288:(e,t,r)=>{r.d(t,{S1:()=>l,lL:()=>y,mi:()=>o,pJ:()=>d,t:()=>p,vf:()=>s});var i=r(65256),a=r(36693),n=r(24241);const s={milliseconds:1,seconds:1e3,minutes:6e4,hours:36e5,days:864e5,weeks:6048e5,months:26784e5,years:31536e6,decades:31536e7,centuries:31536e8};function l(e,t,r){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:a.qU;const l=new n.oh((0,i.wj)(s)),o=n.c9.fromJSDate(e,{zone:l}),y="decades"===r||"centuries"===r?"year":c(r);return"decades"===r&&(t*=10),"centuries"===r&&(t*=100),o.plus({[y]:t}).toJSDate()}function o(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"milliseconds";const i=e.getTime(),a=p(t,r,"milliseconds");return new Date(i+a)}function y(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a.qU;const s=new n.oh((0,i.wj)(r)),l=n.c9.fromJSDate(e,{zone:s});if("decades"===t||"centuries"===t){const e=l.startOf("year"),{year:r}=e,i=r-r%("decades"===t?10:100);return e.set({year:i}).toJSDate()}const o=c(t);return l.startOf(o).toJSDate()}function p(e,t,r){return 0===e?0:e*s[t]/s[r]}function d(e,t){return e&&t?e.intersection(t):e||t}function c(e){switch(e){case"milliseconds":return"millisecond";case"seconds":return"second";case"minutes":return"minute";case"hours":return"hour";case"days":return"day";case"weeks":return"week";case"months":return"month";case"years":return"year"}}},25515:(e,t,r)=>{r.d(t,{A:()=>L});var i=r(35143),a=r(3825),n=r(50076),s=r(54099),l=r(5632),o=r(49304),y=r(76460),p=r(50346),d=r(90534),c=r(46053),u=(r(81806),r(47249),r(85842)),m=r(76797),h=r(13312),S=r(86560);var g=r(59187);let b=0,v=class extends(s.A.EventedMixin(l.A.IdentifiableMixin(o.A))){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new m.A(-180,-90,180,90,h.A.WGS84),this.id=Date.now().toString(16)+"-layer-"+b++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.persistenceEnabled=!1,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=h.A.WGS84,this.title=null,this.type=null,this.url=null,this.visibilityTimeExtent=null,this.visible=!0}static async fromArcGISServerUrl(e){const t="string"==typeof e?{url:e}:e;return(await Promise.all([r.e(652),r.e(2544)]).then(r.bind(r,62544))).fromUrl(t)}static fromPortalItem(e){return async function(e){const t="portalItem"in e?e:{portalItem:e},{fromItem:i}=await Promise.all([r.e(9624),r.e(652),r.e(2487)]).then(r.bind(r,2487));try{return await i(t)}catch(a){const e=t?.portalItem,r=e?.id||"unset",i=e?.portal?.url||S.A.portalUrl;throw y.A.getLogger("esri.layers.support.fromPortalItem").error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+i+"', id: '"+r+"')",a),a}}(e)}initialize(){this.when().catch((e=>{(0,p.zf)(e)||y.A.getLogger(this).error("#load()",`Failed to load layer (title: '${this.title??"no title"}', id: '${this.id??"no id"}')`,{error:e})}))}destroy(){const e=this.parent;if(e){const t=this;"layers"in e&&e.layers.includes(t)?e.layers.remove(t):"tables"in e&&e.tables.includes(t)?e.tables.remove(t):"baseLayers"in e&&e.baseLayers.includes(t)?e.baseLayers.remove(t):"referenceLayers"in e&&e.referenceLayers.includes(t)&&e.referenceLayers.remove(t),this._set("parent",null)}}get effectiveVisible(){let e=this.visible;const t=this.parent;return e&&t&&"effectiveVisible"in t&&(e&&=t.effectiveVisible),e}get hasAttributionData(){return null!=this.attributionDataUrl}get parsedUrl(){return(0,d.An)(this.url)}createLayerView(e,t){return Promise.reject(new n.A("layer:create-layer-view","Layer does not support creating a layer view"))}async fetchAttributionData(){const e=this.attributionDataUrl;if(this.hasAttributionData&&e)return(await(0,a.A)(e,{query:{f:"json"},responseType:"json"})).data;throw new n.A("layer:no-attribution-data","Layer does not have attribution data")}};(0,i._)([(0,c.MZ)({type:String})],v.prototype,"attributionDataUrl",void 0),(0,i._)([(0,c.MZ)({readOnly:!0})],v.prototype,"effectiveVisible",null),(0,i._)([(0,c.MZ)({type:m.A})],v.prototype,"fullExtent",void 0),(0,i._)([(0,c.MZ)({readOnly:!0})],v.prototype,"hasAttributionData",null),(0,i._)([(0,c.MZ)({type:String,clonable:!1})],v.prototype,"id",void 0),(0,i._)([(0,c.MZ)({type:Boolean,nonNullable:!0})],v.prototype,"legendEnabled",void 0),(0,i._)([(0,c.MZ)({type:["show","hide","hide-children"]})],v.prototype,"listMode",void 0),(0,i._)([(0,c.MZ)({type:Number,range:{min:0,max:1},nonNullable:!0})],v.prototype,"opacity",void 0),(0,i._)([(0,c.MZ)({clonable:!1})],v.prototype,"parent",void 0),(0,i._)([(0,c.MZ)({readOnly:!0})],v.prototype,"parsedUrl",null),(0,i._)([(0,c.MZ)({type:Boolean,readOnly:!0})],v.prototype,"persistenceEnabled",void 0),(0,i._)([(0,c.MZ)({type:Boolean})],v.prototype,"popupEnabled",void 0),(0,i._)([(0,c.MZ)({type:Boolean})],v.prototype,"attributionVisible",void 0),(0,i._)([(0,c.MZ)({type:h.A})],v.prototype,"spatialReference",void 0),(0,i._)([(0,c.MZ)({type:String})],v.prototype,"title",void 0),(0,i._)([(0,c.MZ)({readOnly:!0,json:{read:!1}})],v.prototype,"type",void 0),(0,i._)([(0,c.MZ)()],v.prototype,"url",void 0),(0,i._)([(0,c.MZ)({type:g.A})],v.prototype,"visibilityTimeExtent",void 0),(0,i._)([(0,c.MZ)({type:Boolean,nonNullable:!0})],v.prototype,"visible",void 0),v=(0,i._)([(0,u.$)("esri.layers.Layer")],v);const L=v},59187:(e,t,r)=>{r.d(t,{A:()=>u});var i,a=r(35143),n=r(42553),s=r(18288),l=r(46053),o=(r(81806),r(76460),r(47249),r(28379)),y=r(85842),p=r(17707),d=r(36693);let c=i=class extends n.A{static get allTime(){return m}static get empty(){return h}static fromArray(e){return new i({start:null!=e[0]?new Date(e[0]):e[0],end:null!=e[1]?new Date(e[1]):e[1]})}constructor(e){super(e),this.end=null,this.start=null}readEnd(e,t){return null!=t.end?new Date(t.end):null}writeEnd(e,t){t.end=e?.getTime()??null}get isAllTime(){return this.equals(i.allTime)}get isEmpty(){return this.equals(i.empty)}readStart(e,t){return null!=t.start?new Date(t.start):null}writeStart(e,t){t.start=e?.getTime()??null}clone(){return new i({end:this.end,start:this.start})}equals(e){if(!e)return!1;const t=this.start?.getTime()??this.start,r=this.end?.getTime()??this.end,i=e.start?.getTime()??e.start,a=e.end?.getTime()??e.end;return t===i&&r===a}expandTo(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d.qU;if(this.isEmpty||this.isAllTime)return this.clone();let r=this.start;r&&(r=(0,s.lL)(r,e,t));let a=this.end;if(a){const r=(0,s.lL)(a,e,t);a=a.getTime()===r.getTime()?r:(0,s.S1)(r,1,e,t)}return new i({start:r,end:a})}intersection(e){if(!e)return this.clone();if(this.isEmpty||e.isEmpty)return i.empty;if(this.isAllTime)return e.clone();if(e.isAllTime)return this.clone();const t=this.start?.getTime()??-1/0,r=this.end?.getTime()??1/0,a=e.start?.getTime()??-1/0,n=e.end?.getTime()??1/0;let s,l;return a>=t&&a<=r?s=a:t>=a&&t<=n&&(s=t),r>=a&&r<=n?l=r:n>=t&&n<=r&&(l=n),null==s||null==l||isNaN(s)||isNaN(l)?i.empty:new i({start:s===-1/0?null:new Date(s),end:l===1/0?null:new Date(l)})}offset(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:d.qU;if(this.isEmpty||this.isAllTime)return this.clone();const a=new i,{start:n,end:l}=this;return null!=n&&(a.start=(0,s.S1)(n,e,t,r)),null!=l&&(a.end=(0,s.S1)(l,e,t,r)),a}toArray(){return this.isEmpty?[void 0,void 0]:[this.start?.getTime()??null,this.end?.getTime()??null]}union(e){if(!e||e.isEmpty)return this.clone();if(this.isEmpty)return e.clone();if(this.isAllTime||e.isAllTime)return m.clone();const t=null!=this.start&&null!=e.start?new Date(Math.min(this.start.getTime(),e.start.getTime())):null,r=null!=this.end&&null!=e.end?new Date(Math.max(this.end.getTime(),e.end.getTime())):null;return new i({start:t,end:r})}};(0,a._)([(0,l.MZ)({type:Date,json:{write:{allowNull:!0}}})],c.prototype,"end",void 0),(0,a._)([(0,o.w)("end")],c.prototype,"readEnd",null),(0,a._)([(0,p.K)("end")],c.prototype,"writeEnd",null),(0,a._)([(0,l.MZ)({readOnly:!0,json:{read:!1}})],c.prototype,"isAllTime",null),(0,a._)([(0,l.MZ)({readOnly:!0,json:{read:!1}})],c.prototype,"isEmpty",null),(0,a._)([(0,l.MZ)({type:Date,json:{write:{allowNull:!0}}})],c.prototype,"start",void 0),(0,a._)([(0,o.w)("start")],c.prototype,"readStart",null),(0,a._)([(0,p.K)("start")],c.prototype,"writeStart",null),c=i=(0,a._)([(0,y.$)("esri.time.TimeExtent")],c);const u=c,m=new c,h=new c({start:void 0,end:void 0})},95085:(e,t,r)=>{r.d(t,{A:()=>u});var i=r(35143),a=r(91967),n=r(18690),s=r(69098),l=r(5632),o=r(42553),y=r(46053),p=(r(81806),r(76460),r(85842));let d=0,c=class extends(o.A.JSONSupportMixin(s.A.ClonableMixin(l.A.IdentifiableMixin(a.A)))){constructor(e){super(e),this.id=`${Date.now().toString(16)}-analysis-${d++}`,this.title=null}get parent(){return this._get("parent")}set parent(e){const t=this.parent;if(null!=t)switch(t.type){case"line-of-sight":case"dimension":case"viewshed":t.releaseAnalysis(this);break;case"2d":case"3d":t.analyses.includes(this)&&t.analyses.remove(this)}this._set("parent",e)}get isEditable(){return this.requiredPropertiesForEditing.every(n.Ru)}};(0,i._)([(0,y.MZ)({type:String,constructOnly:!0,clonable:!1})],c.prototype,"id",void 0),(0,i._)([(0,y.MZ)({type:String})],c.prototype,"title",void 0),(0,i._)([(0,y.MZ)({clonable:!1,value:null})],c.prototype,"parent",null),(0,i._)([(0,y.MZ)({readOnly:!0})],c.prototype,"isEditable",null),c=(0,i._)([(0,p.$)("esri.analysis.Analysis")],c);const u=c}}]);
//# sourceMappingURL=5896.9bc364fb.chunk.js.map