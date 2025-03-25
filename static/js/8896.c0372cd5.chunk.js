"use strict";(self.webpackChunkfeedback_map=self.webpackChunkfeedback_map||[]).push([[5515,8896],{8896:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var i=r(35143),s=r(50076),n=r(77717),o=r(52394),l=r(46053),a=(r(81806),r(76460),r(47249),r(85842)),u=r(25515),d=r(94729);let p=class extends((0,d.A)((0,n.P)(u.A))){constructor(e){super(e),this.resourceInfo=null,this.type="unknown"}initialize(){this.addResolvingPromise(new Promise(((e,t)=>{(0,o._)((()=>{const e=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let r="Unknown layer type";e&&(r+=" "+e),t(new s.A("layer:unknown-layer-type",r,{layerType:e}))}))})))}read(e,t){super.read({resourceInfo:e},t)}write(e,t){return null}};(0,i._)([(0,l.MZ)({readOnly:!0})],p.prototype,"resourceInfo",void 0),(0,i._)([(0,l.MZ)({type:["show","hide"]})],p.prototype,"listMode",void 0),(0,i._)([(0,l.MZ)({json:{read:!1},readOnly:!0,value:"unknown"})],p.prototype,"type",void 0),p=(0,i._)([(0,a.$)("esri.layers.UnknownLayer")],p);const c=p},18288:(e,t,r)=>{r.d(t,{S1:()=>l,lL:()=>u,mi:()=>a,pJ:()=>p,t:()=>d,vf:()=>o});var i=r(65256),s=r(36693),n=r(24241);const o={milliseconds:1,seconds:1e3,minutes:6e4,hours:36e5,days:864e5,weeks:6048e5,months:26784e5,years:31536e6,decades:31536e7,centuries:31536e8};function l(e,t,r){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:s.qU;const l=new n.oh((0,i.wj)(o)),a=n.c9.fromJSDate(e,{zone:l}),u="decades"===r||"centuries"===r?"year":c(r);return"decades"===r&&(t*=10),"centuries"===r&&(t*=100),a.plus({[u]:t}).toJSDate()}function a(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"milliseconds";const i=e.getTime(),s=d(t,r,"milliseconds");return new Date(i+s)}function u(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s.qU;const o=new n.oh((0,i.wj)(r)),l=n.c9.fromJSDate(e,{zone:o});if("decades"===t||"centuries"===t){const e=l.startOf("year"),{year:r}=e,i=r-r%("decades"===t?10:100);return e.set({year:i}).toJSDate()}const a=c(t);return l.startOf(a).toJSDate()}function d(e,t,r){return 0===e?0:e*o[t]/o[r]}function p(e,t){return e&&t?e.intersection(t):e||t}function c(e){switch(e){case"milliseconds":return"millisecond";case"seconds":return"second";case"minutes":return"minute";case"hours":return"hour";case"days":return"day";case"weeks":return"week";case"months":return"month";case"years":return"year"}}},25515:(e,t,r)=>{r.d(t,{A:()=>w});var i=r(35143),s=r(3825),n=r(50076),o=r(54099),l=r(5632),a=r(49304),u=r(76460),d=r(50346),p=r(90534),c=r(46053),h=(r(81806),r(47249),r(85842)),y=r(76797),f=r(13312),g=r(86560);var m=r(59187);let v=0,_=class extends(o.A.EventedMixin(l.A.IdentifiableMixin(a.A))){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new y.A(-180,-90,180,90,f.A.WGS84),this.id=Date.now().toString(16)+"-layer-"+v++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.persistenceEnabled=!1,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=f.A.WGS84,this.title=null,this.type=null,this.url=null,this.visibilityTimeExtent=null,this.visible=!0}static async fromArcGISServerUrl(e){const t="string"==typeof e?{url:e}:e;return(await Promise.all([r.e(652),r.e(2544)]).then(r.bind(r,62544))).fromUrl(t)}static fromPortalItem(e){return async function(e){const t="portalItem"in e?e:{portalItem:e},{fromItem:i}=await Promise.all([r.e(9624),r.e(652),r.e(2487)]).then(r.bind(r,2487));try{return await i(t)}catch(s){const e=t?.portalItem,r=e?.id||"unset",i=e?.portal?.url||g.A.portalUrl;throw u.A.getLogger("esri.layers.support.fromPortalItem").error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+i+"', id: '"+r+"')",s),s}}(e)}initialize(){this.when().catch((e=>{(0,d.zf)(e)||u.A.getLogger(this).error("#load()",`Failed to load layer (title: '${this.title??"no title"}', id: '${this.id??"no id"}')`,{error:e})}))}destroy(){const e=this.parent;if(e){const t=this;"layers"in e&&e.layers.includes(t)?e.layers.remove(t):"tables"in e&&e.tables.includes(t)?e.tables.remove(t):"baseLayers"in e&&e.baseLayers.includes(t)?e.baseLayers.remove(t):"referenceLayers"in e&&e.referenceLayers.includes(t)&&e.referenceLayers.remove(t),this._set("parent",null)}}get effectiveVisible(){let e=this.visible;const t=this.parent;return e&&t&&"effectiveVisible"in t&&(e&&=t.effectiveVisible),e}get hasAttributionData(){return null!=this.attributionDataUrl}get parsedUrl(){return(0,p.An)(this.url)}createLayerView(e,t){return Promise.reject(new n.A("layer:create-layer-view","Layer does not support creating a layer view"))}async fetchAttributionData(){const e=this.attributionDataUrl;if(this.hasAttributionData&&e)return(await(0,s.A)(e,{query:{f:"json"},responseType:"json"})).data;throw new n.A("layer:no-attribution-data","Layer does not have attribution data")}};(0,i._)([(0,c.MZ)({type:String})],_.prototype,"attributionDataUrl",void 0),(0,i._)([(0,c.MZ)({readOnly:!0})],_.prototype,"effectiveVisible",null),(0,i._)([(0,c.MZ)({type:y.A})],_.prototype,"fullExtent",void 0),(0,i._)([(0,c.MZ)({readOnly:!0})],_.prototype,"hasAttributionData",null),(0,i._)([(0,c.MZ)({type:String,clonable:!1})],_.prototype,"id",void 0),(0,i._)([(0,c.MZ)({type:Boolean,nonNullable:!0})],_.prototype,"legendEnabled",void 0),(0,i._)([(0,c.MZ)({type:["show","hide","hide-children"]})],_.prototype,"listMode",void 0),(0,i._)([(0,c.MZ)({type:Number,range:{min:0,max:1},nonNullable:!0})],_.prototype,"opacity",void 0),(0,i._)([(0,c.MZ)({clonable:!1})],_.prototype,"parent",void 0),(0,i._)([(0,c.MZ)({readOnly:!0})],_.prototype,"parsedUrl",null),(0,i._)([(0,c.MZ)({type:Boolean,readOnly:!0})],_.prototype,"persistenceEnabled",void 0),(0,i._)([(0,c.MZ)({type:Boolean})],_.prototype,"popupEnabled",void 0),(0,i._)([(0,c.MZ)({type:Boolean})],_.prototype,"attributionVisible",void 0),(0,i._)([(0,c.MZ)({type:f.A})],_.prototype,"spatialReference",void 0),(0,i._)([(0,c.MZ)({type:String})],_.prototype,"title",void 0),(0,i._)([(0,c.MZ)({readOnly:!0,json:{read:!1}})],_.prototype,"type",void 0),(0,i._)([(0,c.MZ)()],_.prototype,"url",void 0),(0,i._)([(0,c.MZ)({type:m.A})],_.prototype,"visibilityTimeExtent",void 0),(0,i._)([(0,c.MZ)({type:Boolean,nonNullable:!0})],_.prototype,"visible",void 0),_=(0,i._)([(0,h.$)("esri.layers.Layer")],_);const w=_},59187:(e,t,r)=>{r.d(t,{A:()=>h});var i,s=r(35143),n=r(42553),o=r(18288),l=r(46053),a=(r(81806),r(76460),r(47249),r(28379)),u=r(85842),d=r(17707),p=r(36693);let c=i=class extends n.A{static get allTime(){return y}static get empty(){return f}static fromArray(e){return new i({start:null!=e[0]?new Date(e[0]):e[0],end:null!=e[1]?new Date(e[1]):e[1]})}constructor(e){super(e),this.end=null,this.start=null}readEnd(e,t){return null!=t.end?new Date(t.end):null}writeEnd(e,t){t.end=e?.getTime()??null}get isAllTime(){return this.equals(i.allTime)}get isEmpty(){return this.equals(i.empty)}readStart(e,t){return null!=t.start?new Date(t.start):null}writeStart(e,t){t.start=e?.getTime()??null}clone(){return new i({end:this.end,start:this.start})}equals(e){if(!e)return!1;const t=this.start?.getTime()??this.start,r=this.end?.getTime()??this.end,i=e.start?.getTime()??e.start,s=e.end?.getTime()??e.end;return t===i&&r===s}expandTo(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p.qU;if(this.isEmpty||this.isAllTime)return this.clone();let r=this.start;r&&(r=(0,o.lL)(r,e,t));let s=this.end;if(s){const r=(0,o.lL)(s,e,t);s=s.getTime()===r.getTime()?r:(0,o.S1)(r,1,e,t)}return new i({start:r,end:s})}intersection(e){if(!e)return this.clone();if(this.isEmpty||e.isEmpty)return i.empty;if(this.isAllTime)return e.clone();if(e.isAllTime)return this.clone();const t=this.start?.getTime()??-1/0,r=this.end?.getTime()??1/0,s=e.start?.getTime()??-1/0,n=e.end?.getTime()??1/0;let o,l;return s>=t&&s<=r?o=s:t>=s&&t<=n&&(o=t),r>=s&&r<=n?l=r:n>=t&&n<=r&&(l=n),null==o||null==l||isNaN(o)||isNaN(l)?i.empty:new i({start:o===-1/0?null:new Date(o),end:l===1/0?null:new Date(l)})}offset(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:p.qU;if(this.isEmpty||this.isAllTime)return this.clone();const s=new i,{start:n,end:l}=this;return null!=n&&(s.start=(0,o.S1)(n,e,t,r)),null!=l&&(s.end=(0,o.S1)(l,e,t,r)),s}toArray(){return this.isEmpty?[void 0,void 0]:[this.start?.getTime()??null,this.end?.getTime()??null]}union(e){if(!e||e.isEmpty)return this.clone();if(this.isEmpty)return e.clone();if(this.isAllTime||e.isAllTime)return y.clone();const t=null!=this.start&&null!=e.start?new Date(Math.min(this.start.getTime(),e.start.getTime())):null,r=null!=this.end&&null!=e.end?new Date(Math.max(this.end.getTime(),e.end.getTime())):null;return new i({start:t,end:r})}};(0,s._)([(0,l.MZ)({type:Date,json:{write:{allowNull:!0}}})],c.prototype,"end",void 0),(0,s._)([(0,a.w)("end")],c.prototype,"readEnd",null),(0,s._)([(0,d.K)("end")],c.prototype,"writeEnd",null),(0,s._)([(0,l.MZ)({readOnly:!0,json:{read:!1}})],c.prototype,"isAllTime",null),(0,s._)([(0,l.MZ)({readOnly:!0,json:{read:!1}})],c.prototype,"isEmpty",null),(0,s._)([(0,l.MZ)({type:Date,json:{write:{allowNull:!0}}})],c.prototype,"start",void 0),(0,s._)([(0,a.w)("start")],c.prototype,"readStart",null),(0,s._)([(0,d.K)("start")],c.prototype,"writeStart",null),c=i=(0,s._)([(0,u.$)("esri.time.TimeExtent")],c);const h=c,y=new c,f=new c({start:void 0,end:void 0})},72945:(e,t,r)=>{r.d(t,{It:()=>h,LG:()=>o,OM:()=>u,Sm:()=>d,Y:()=>l,bK:()=>a,mm:()=>c,sQ:()=>p});var i=r(9624),s=r(13312),n=r(45417);function o(e,t){if(!l(e,t)){const r=e.typeKeywords;r?r.push(t):e.typeKeywords=[t]}}function l(e,t){return!!e.typeKeywords?.includes(t)}function a(e){return l(e,c.HOSTED_SERVICE)}function u(e,t){const r=e.typeKeywords;if(r){const e=r.indexOf(t);e>-1&&r.splice(e,1)}}function d(e,t,r){r?o(e,t):u(e,t)}async function p(e){const t=e.clone().normalize();let r;if(t.length>1)for(const i of t)r?i.width>r.width&&(r=i):r=i;else r=t[0];return async function(e){const t=e.spatialReference;if(t.isWGS84)return e.clone();if(t.isWebMercator)return(0,n.ci)(e);const r=s.A.WGS84;return await(0,i.initializeProjection)(t,r),(0,i.project)(e,r)}(r)}const c={DEVELOPER_BASEMAP:"DeveloperBasemap",GROUP_LAYER_MAP:"Map",HOSTED_SERVICE:"Hosted Service",JSAPI:"ArcGIS API for JavaScript",LOCAL_SCENE:"ViewingMode-Local",METADATA:"Metadata",MULTI_LAYER:"Multilayer",ORIENTED_IMAGERY_LAYER:"OrientedImageryLayer",SINGLE_LAYER:"Singlelayer",SUBTYPE_GROUP_LAYER:"SubtypeGroupLayer",SUBTYPE_GROUP_TABLE:"SubtypeGroupTable",TABLE:"Table",TILED_IMAGERY:"Tiled Imagery"};function h(e){const{portal:t,isOrgItem:r,itemControl:i}=e,s=t.user?.privileges;let n=!s||s.includes("features:user:edit"),o=!!r&&!!s?.includes("features:user:fullEdit");const l="update"===i||"admin"===i;return l?o=n=!0:o&&(n=!0),{features:{edit:n,fullEdit:o},content:{updateItem:l}}}},77717:(e,t,r)=>{r.d(t,{P:()=>_,L:()=>w});var i=r(35143),s=r(91967),n=r(60351),o=r(53084),l=r(49140);class a{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(l.AU),this._values=new Map,this.multipleOriginsSupported=!0}clone(e){const t=new a,r=this._originStores[l.Gr.DEFAULTS];r&&r.forEach(((e,r)=>{t.set(r,(0,o.o8)(e),l.Gr.DEFAULTS)}));for(let i=l.Gr.SERVICE;i<l.AU;i++){const r=this._originStores[i];r&&r.forEach(((r,s)=>{e&&e.has(s)||t.set(s,(0,o.o8)(r),i)}))}return t}get(e,t){const r=void 0===t?this._values:this._originStores[t];return r?r.get(e):void 0}keys(e){const t=null==e?this._values:this._originStores[e];return t?[...t.keys()]:[]}set(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l.Gr.USER,i=this._originStores[r];if(i||(i=new Map,this._originStores[r]=i),i.set(e,t),!this._values.has(e)||this._propertyOriginMap.get(e)<=r){const i=this._values.get(e);return this._values.set(e,t),this._propertyOriginMap.set(e,r),i!==t}return!1}delete(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.Gr.USER;const r=this._originStores[t];if(!r)return;const i=r.get(e);if(r.delete(e),this._values.has(e)&&this._propertyOriginMap.get(e)===t){this._values.delete(e);for(let r=t-1;r>=0;r--){const t=this._originStores[r];if(t&&t.has(e)){this._values.set(e,t.get(e)),this._propertyOriginMap.set(e,r);break}}}return i}has(e,t){const r=void 0===t?this._values:this._originStores[t];return!!r&&r.has(e)}revert(e,t){for(;t>0&&!this.has(e,t);)--t;const r=this._originStores[t],i=r?.get(e),s=this._values.get(e);return this._values.set(e,i),this._propertyOriginMap.set(e,t),s!==i}originOf(e){return this._propertyOriginMap.get(e)||l.Gr.DEFAULTS}forEach(e){this._values.forEach(e)}}var u=r(6527),d=r(39314),p=r(85842);const c=e=>{let t=class extends e{constructor(){super(...arguments);const e=(0,d.oY)(this),t=e.store,r=new a;e.store=r,(0,n.k)(e,t,r)}read(e,t){(0,u.L)(this,e,t)}getAtOrigin(e,t){const r=h(this),i=(0,l.aB)(t);if("string"==typeof e)return r.get(e,i);const s={};return e.forEach((e=>{s[e]=r.get(e,i)})),s}originOf(e){return(0,l.OL)(this.originIdOf(e))}originIdOf(e){return h(this).originOf(e)}revert(e,t){const r=h(this),i=(0,l.aB)(t),s=(0,d.oY)(this);let n;n="string"==typeof e?"*"===e?r.keys(i):[e]:e,n.forEach((e=>{s.invalidate(e),r.revert(e,i),s.commit(e)}))}};return t=(0,i._)([(0,p.$)("esri.core.ReadOnlyMultiOriginJSONSupport")],t),t};function h(e){return(0,d.oY)(e).store}let y=class extends(c(s.A)){};y=(0,i._)([(0,p.$)("esri.core.ReadOnlyMultiOriginJSONSupport")],y);var f=r(17879),g=r(29584);const m=e=>{let t=class extends e{constructor(){super(...arguments)}clear(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"user";return v(this).delete(e,(0,l.aB)(t))}write(e,t){return(0,g.M)(this,e=e||{},t),e}setAtOrigin(e,t,r){(0,d.oY)(this).setAtOrigin(e,t,(0,l.aB)(r))}removeOrigin(e){const t=v(this),r=(0,l.aB)(e),i=t.keys(r);for(const s of i)t.originOf(s)===r&&t.set(s,t.get(s,r),l.Gr.USER)}updateOrigin(e,t){const r=v(this),i=(0,l.aB)(t),s=(0,f.Jt)(this,e);for(let n=i+1;n<l.AU;++n)r.delete(e,n);r.set(e,s,i)}toJSON(e){return this.write({},e)}};return t=(0,i._)([(0,p.$)("esri.core.MultiOriginJSONSupport.WriteableMultiOriginJSONSupport")],t),t.prototype.toJSON.isDefaultToJSON=!0,t};function v(e){return(0,d.oY)(e).store}const _=e=>{let t=class extends(m(c(e))){constructor(){super(...arguments)}};return t=(0,i._)([(0,p.$)("esri.core.MultiOriginJSONSupport")],t),t};let w=class extends(_(s.A)){};w=(0,i._)([(0,p.$)("esri.core.MultiOriginJSONSupport")],w)},94729:(e,t,r)=>{r.d(t,{A:()=>S});var i=r(35143),s=r(86560),n=r(55171),o=r(3825),l=r(98773),a=r(50076),u=r(76460),d=r(30726),p=r(50346),c=r(90534),h=r(46053),y=(r(81806),r(47249),r(28379)),f=r(85842),g=r(17707),m=r(31933),v=r(65308),_=r(70652),w=r(38665),E=r(72945);const S=e=>{let t=class extends e{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0,this.userHasFullEditingPrivileges=!1,this.userHasUpdateItemPrivileges=!1}destroy(){this.portalItem=(0,d.pR)(this.portalItem),this.resourceReferences.portalItem=null,this.resourceReferences.paths.length=0}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,r){if(t.itemId)return new _.default({id:t.itemId,portal:r?.portal})}writePortalItem(e,t){e?.id&&(t.itemId=e.id)}async loadFromPortal(e,t){if(this.portalItem?.id)try{const{load:i}=await r.e(3814).then(r.bind(r,73814));return(0,p.Te)(t),await i({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData,layerModuleTypeMap:e.layerModuleTypeMap,populateGroupLayer:e.populateGroupLayer},t)}catch(i){throw(0,p.zf)(i)||u.A.getLogger(this).warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${i}`),i}}async finishLoadEditablePortalLayer(e){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(e).catch((e=>((0,p.QP)(e),!0))))}async setUserPrivileges(e,t){if(!s.A.userPrivilegesApplied)return this.finishLoadEditablePortalLayer(t);if(this.url)try{const{features:{edit:r,fullEdit:i},content:{updateItem:s}}=await this._fetchUserPrivileges(e,t);this._set("userHasEditingPrivileges",r),this._set("userHasFullEditingPrivileges",i),this._set("userHasUpdateItemPrivileges",s)}catch(r){(0,p.QP)(r)}}async _fetchUserPrivileges(e,t){let r=this.portalItem;if(!e||!r||!r.loaded||r.sourceUrl)return this._fetchFallbackUserPrivileges(t);const i=!n.id?.findCredential(this.url),s=e===r.id;if(s&&r.portal.user)return this._getUserPrivileges(r,i);let o,l;if(s)o=r.portal.url;else try{o=await(0,m.wI)(this.url,t)}catch(h){(0,p.QP)(h)}if(!o||!(0,c.b8)(o,r.portal.url))return this._fetchFallbackUserPrivileges(t);try{const e=null!=t?t.signal:null;l=await(n.id?.getCredential(`${o}/sharing`,{prompt:!1,signal:e}))}catch(h){(0,p.QP)(h)}const a=!0,u=!1,d=!1;if(!l)return{features:{edit:a,fullEdit:u},content:{updateItem:d}};try{if(s?await r.reload():(r=new _.default({id:e,portal:{url:o}}),await r.load(t)),r.portal.user)return this._getUserPrivileges(r,i)}catch(h){(0,p.QP)(h)}return{features:{edit:a,fullEdit:u},content:{updateItem:d}}}_getUserPrivileges(e,t){const r=(0,E.It)(e);return t&&(r.features.edit=!0),r}async _fetchFallbackUserPrivileges(e){let t=!0;try{t=await this._fetchUserHasEditingPrivileges(e)}catch(r){(0,p.QP)(r)}return{features:{edit:t,fullEdit:!1},content:{updateItem:!1}}}async _fetchUserHasEditingPrivileges(e){const t=this.url?n.id?.findCredential(this.url):null;if(!t)return!0;const r=A.credential===t?A.user:await this._fetchEditingUser(e);return A.credential=t,A.user=r,null==r?.privileges||r.privileges.includes("features:user:edit")}async _fetchEditingUser(e){const t=this.portalItem?.portal?.user;if(t)return t;const r=n.id?.findServerInfo(this.url??"");if(!r?.owningSystemUrl)return null;const i=`${r.owningSystemUrl}/sharing/rest`,s=v.A.getDefault();if(s&&s.loaded&&(0,c.S8)(s.restUrl)===(0,c.S8)(i))return s.user;const a=`${i}/community/self`,u=null!=e?e.signal:null,d=await(0,l.Ke)((0,o.A)(a,{authMode:"no-prompt",query:{f:"json"},signal:u}));return d.ok?w.A.fromJSON(d.value.data):null}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){const r=t?.portal,i=this.portalItem?.id&&(this.portalItem.portal||v.A.getDefault());return r&&i&&!(0,c.ut)(i.restUrl,r.restUrl)?(t.messages&&t.messages.push(new a.A("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(e,{...t,layer:this})}};return(0,i._)([(0,h.MZ)({type:_.default})],t.prototype,"portalItem",null),(0,i._)([(0,y.w)("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),(0,i._)([(0,g.K)("web-document","portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),(0,i._)([(0,h.MZ)({clonable:!1})],t.prototype,"resourceReferences",void 0),(0,i._)([(0,h.MZ)({type:Boolean,readOnly:!0})],t.prototype,"userHasEditingPrivileges",void 0),(0,i._)([(0,h.MZ)({type:Boolean,readOnly:!0})],t.prototype,"userHasFullEditingPrivileges",void 0),(0,i._)([(0,h.MZ)({type:Boolean,readOnly:!0})],t.prototype,"userHasUpdateItemPrivileges",void 0),t=(0,i._)([(0,f.$)("esri.layers.mixins.PortalLayer")],t),t},A={credential:null,user:null}}}]);
//# sourceMappingURL=8896.c0372cd5.chunk.js.map