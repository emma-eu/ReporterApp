"use strict";(self.webpackChunkfeedback_map=self.webpackChunkfeedback_map||[]).push([[2811,5859,6680],{4414:(e,t,r)=>{r.d(t,{O3:()=>u,PU:()=>p,YW:()=>c,ex:()=>l,hv:()=>y,zp:()=>a});var i=r(15941),n=r(76931),o=r(43047),s=r(55855);const l=2.4;function a(e){return(0,n.PN)(e*l)}function p(e){return(0,n.Lz)(e)/l}function d(e,t,r,n){let{color:s,ratio:l}=t,{color:a,ratio:p}=r;if(p===l){const e=1e-6;1===p?l-=e:p+=e}const d=(0,i.qE)((n-l)/(p-l),0,1);(0,o.l)(e,s.toArray(),a.toArray(),d)}function u(e){const t=new Uint8ClampedArray(2048);if(e=e.filter((e=>{let{ratio:t}=e;return t>=0&&t<=1})).sort(((e,t)=>e.ratio-t.ratio)).map((e=>{let{color:t,ratio:r}=e;return{color:t,ratio:Math.max(r,.001)}})),e.length<1)return t;let r=e[0],i=e[0],n=1;const o=(0,s.vt)();for(let s=0;s<512;s++){const l=(s+.5)/512;for(;l>i.ratio&&n<e.length;)r=i,i=e[n++];d(o,r,i,l),t.set(o,4*s)}return t}function y(e,t,r){const i=Math.sqrt(e**2+t**2)/r;return i>1?0:3/(Math.PI*r**2)*(1-i**2)**2}function c(e){return"function"==typeof e?e:e?t=>+t[e]:()=>1}},8203:(e,t,r)=>{r.d(t,{A:()=>m});var i,n=r(35143),o=r(45802),s=r(42553),l=r(53084),a=r(46053),p=(r(81806),r(76460),r(85842)),d=r(31608),u=r(97015),y=r(59187);const c=new o.J({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),h=new o.J({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let f=i=class extends s.A{constructor(e){super(e),this.where=null,this.geometry=null,this.spatialRelationship="intersects",this.distance=void 0,this.objectIds=null,this.units=null,this.timeExtent=null}createQuery(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{where:t,geometry:r,spatialRelationship:i,timeExtent:n,objectIds:o,units:s,distance:a}=this;return new u.A({geometry:(0,l.o8)(r),objectIds:(0,l.o8)(o),spatialRelationship:i,timeExtent:(0,l.o8)(n),where:t,units:s,distance:a,...e})}clone(){const{where:e,geometry:t,spatialRelationship:r,timeExtent:n,objectIds:o,units:s,distance:a}=this;return new i({geometry:(0,l.o8)(t),objectIds:(0,l.o8)(o),spatialRelationship:r,timeExtent:(0,l.o8)(n),where:e,units:s,distance:a})}};(0,n._)([(0,a.MZ)({type:String,json:{write:!0}})],f.prototype,"where",void 0),(0,n._)([(0,a.MZ)({types:d.yR,json:{write:!0}})],f.prototype,"geometry",void 0),(0,n._)([(0,a.MZ)({type:c.apiValues,json:{name:"spatialRel",read:{reader:c.read},write:{allowNull:!1,writer:c.write,overridePolicy(){return{enabled:null!=this.geometry}}}}})],f.prototype,"spatialRelationship",void 0),(0,n._)([(0,a.MZ)({type:Number,json:{write:{overridePolicy(e){return{enabled:null!=e&&null!=this.geometry}}}}})],f.prototype,"distance",void 0),(0,n._)([(0,a.MZ)({type:[Number],json:{write:!0}})],f.prototype,"objectIds",void 0),(0,n._)([(0,a.MZ)({type:h.apiValues,json:{read:h.read,write:{writer:h.write,overridePolicy(e){return{enabled:null!=e&&null!=this.geometry}}}}})],f.prototype,"units",void 0),(0,n._)([(0,a.MZ)({type:y.A,json:{write:!0}})],f.prototype,"timeExtent",void 0),f=i=(0,n._)([(0,p.$)("esri.layers.support.FeatureFilter")],f);const m=f},10252:(e,t,r)=>{r.d(t,{A:()=>m});var i,n=r(35143),o=r(50076),s=r(42553),l=r(48611),a=r(46053),p=(r(81806),r(76460),r(47249),r(85842)),d=r(44081),u=r(8203);const y={read:{reader:d.LF},write:{writer:d.M9,overridePolicy(){return{allowNull:null!=this.excludedEffect,isRequired:null==this.excludedEffect}}}},c={read:{reader:d.LF},write:{writer:d.M9,overridePolicy(){return{allowNull:null!=this.includedEffect,isRequired:null==this.includedEffect}}}},h={name:"showExcludedLabels",default:!0};let f=i=class extends s.A{constructor(e){super(e),this.filter=null,this.includedEffect=null,this.excludedEffect=null,this.excludedLabelsVisible=!1}write(e,t){const r=super.write(e,t);if(t?.origin){if(r.filter){const e=Object.keys(r.filter);if(e.length>1||"where"!==e[0])return t.messages?.push(new o.A("web-document-write:unsupported-feature-effect","Invalid feature effect 'filter'. A filter can only contain a 'where' property",{layer:t.layer,effect:this})),null}if("showExcludedLabels"in r)return t.messages?.push(new o.A("web-document-write:unsupported-feature-effect","Invalid value for property 'excludedLabelsVisible' which should always be 'true'",{layer:t.layer,effect:this})),null}return r}clone(){return new i({filter:null!=this.filter?this.filter.clone():null,includedEffect:this.includedEffect,excludedEffect:this.excludedEffect,excludedLabelsVisible:this.excludedLabelsVisible})}};(0,n._)([(0,a.MZ)({type:u.A,json:{write:{allowNull:!0,writer(e,t,r,i){const n=e?.write({},i);n&&0!==Object.keys(n).length?(0,l.sM)(r,n,t):(0,l.sM)(r,null,t)}}}})],f.prototype,"filter",void 0),(0,n._)([(0,a.MZ)({json:{read:d.LF,write:{writer:d.M9,allowNull:!0},origins:{"web-map":y,"portal-item":y}}})],f.prototype,"includedEffect",void 0),(0,n._)([(0,a.MZ)({json:{read:d.LF,write:{writer:d.M9,allowNull:!0},origins:{"web-map":c,"portal-item":c}}})],f.prototype,"excludedEffect",void 0),(0,n._)([(0,a.MZ)({type:Boolean,json:{write:!0,name:"showExcludedLabels",origins:{"web-map":h,"portal-item":h}}})],f.prototype,"excludedLabelsVisible",void 0),f=i=(0,n._)([(0,p.$)("esri.layers.support.FeatureEffect")],f);const m=f},10290:(e,t,r)=>{r.d(t,{u:()=>s});var i=r(31633),n=r(80963);function o(e,t,r){if(null==e.hasM||e.hasZ)for(const i of t)for(const e of i)e.length>2&&(e[2]*=r)}function s(e,t,r){if(!e&&!t||!r)return;const n=(0,i.G9)(r);l(e,r,n),l(t,r,n)}function l(e,t,r){if(e)for(const i of e)a(i.geometry,t,r)}function a(e,t,r){if(!e?.spatialReference||(0,n.aI)(e.spatialReference,t))return;const s=(0,i.G9)(e.spatialReference)/r;if(1!==s)if("x"in e)null!=e.z&&(e.z*=s);else if("rings"in e)o(e,e.rings,s);else if("paths"in e)o(e,e.paths,s);else if("points"in e&&(null==e.hasM||e.hasZ))for(const i of e.points)i.length>2&&(i[2]*=s)}},37534:(e,t,r)=>{r.d(t,{Rr:()=>a,fY:()=>d,ne:()=>p});var i=r(35143),n=r(48611),o=r(46053),s=(r(81806),r(76460),r(47249),r(85842)),l=r(51162);function a(e,t,r){if(!e)return null;const i=e.find((e=>!!e.field));if(!i)return null;const n=new l.A;return n.read(i,r),[n]}const p={type:[l.A],json:{origins:{"web-scene":{write:!1,read:!1}},name:"layerDefinition.orderBy",read:{reader:a},write:{writer:function(e,t,r,i){const o=e.find((e=>!!e.field));o&&(0,n.sM)(r,[o.toJSON()],t)}}}},d=e=>{let t=class extends e{constructor(){super(...arguments),this.orderBy=null}};return(0,i._)([(0,o.MZ)(p)],t.prototype,"orderBy",void 0),t=(0,i._)([(0,s.$)("esri.layers.mixins.OrderedLayer")],t),t}},51162:(e,t,r)=>{r.d(t,{A:()=>u});var i,n=r(35143),o=r(45802),s=r(42553),l=r(46053),a=(r(81806),r(76460),r(47249),r(85842));const p=new o.J({asc:"ascending",desc:"descending"});let d=i=class extends s.A{constructor(e){super(e),this.field=null,this.valueExpression=null,this.order="ascending"}clone(){return new i({field:this.field,valueExpression:this.valueExpression,order:this.order})}};(0,n._)([(0,l.MZ)({type:String,json:{write:!0}})],d.prototype,"field",void 0),(0,n._)([(0,l.MZ)({type:String,json:{write:!0,origins:{"web-scene":{read:!1,write:!1}}}})],d.prototype,"valueExpression",void 0),(0,n._)([(0,l.MZ)({type:p.apiValues,json:{type:p.jsonValues,read:p.read,write:p.write}})],d.prototype,"order",void 0),d=i=(0,n._)([(0,a.$)("esri.layers.support.OrderByInfo")],d);const u=d},57831:(e,t,r)=>{r.d(t,{q:()=>n});var i=r(86729);function n(e,t,r){if(!r?.features||!r.hasZ)return;const n=(0,i.N)(r.geometryType,t,e.outSpatialReference);if(null!=n)for(const i of r.features)n(i.geometry)}},67993:(e,t,r)=>{r.d(t,{A:()=>o});var i=r(99486),n=r(99702);class o{constructor(e){this._observable=new n.I,this._map=new Map(e)}get size(){return(0,i.gc)(this._observable),this._map.size}clear(){this._map.size>0&&(this._map.clear(),this._observable.notify())}delete(e){const t=this._map.delete(e);return t&&this._observable.notify(),t}entries(){return(0,i.gc)(this._observable),this._map.entries()}forEach(e,t){(0,i.gc)(this._observable),this._map.forEach(((r,i)=>e.call(t,r,i,this)),t)}get(e){return(0,i.gc)(this._observable),this._map.get(e)}has(e){return(0,i.gc)(this._observable),this._map.has(e)}keys(){return(0,i.gc)(this._observable),this._map.keys()}set(e,t){return this._map.set(e,t),this._observable.notify(),this}values(){return(0,i.gc)(this._observable),this._map.values()}[Symbol.iterator](){return(0,i.gc)(this._observable),this._map[Symbol.iterator]()}[Symbol.dispose](){this._observable.destroy()}get[Symbol.toStringTag](){return this._map[Symbol.toStringTag]}}},74440:(e,t,r)=>{r.d(t,{F:()=>a,Y:()=>l});var i=r(35143),n=r(46053),o=(r(81806),r(76460),r(47249),r(85842));const s={write:{allowNull:!0}},l={type:r(10252).A,json:{origins:{"web-map":s,"portal-item":s}}},a=e=>{let t=class extends e{constructor(){super(...arguments),this.featureEffect=null}};return(0,i._)([(0,n.MZ)(l)],t.prototype,"featureEffect",void 0),t=(0,i._)([(0,o.$)("esri.layers.mixins.FeatureEffectLayer")],t),t}},75540:(e,t,r)=>{r.d(t,{v:()=>l});var i=r(53084),n=r(99486),o=r(99702);class s{constructor(e,t){this._observable=new o.I,this._value=e,this._equalityFunction=t}get value(){return(0,n.gc)(this._observable),this._value}set value(e){this._equalityFunction(e,this._value)||(this._value=e,this._observable.notify())}mutate(e){e(this._value),this._observable.notify()}}function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.gh;return new s(e,t)}},77725:(e,t,r)=>{r.d(t,{A:()=>w});var i,n=r(35143),o=r(39356),s=r(45802),l=r(42553),a=r(53084),p=r(46053),d=(r(81806),r(76460),r(28379)),u=r(85842),y=r(17707),c=r(13312),h=r(19902),f=r(31608),m=r(44135);const g=new s.J({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let _=i=class extends l.A{constructor(e){super(e),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(e,t){return this.readFeaturesWithClass(e,t,o.A)}writeGeometryType(e,t,r,i){if(e)return void g.write(e,t,r,i);const{features:n}=this;if(n)for(const o of n)if(null!=o?.geometry)return void g.write(o.geometry.type,t,r,i)}readQueryGeometry(e,t){if(!e)return null;const r=!!e.spatialReference,i=(0,h.rS)(e);return i&&!r&&t.spatialReference&&(i.spatialReference=c.A.fromJSON(t.spatialReference)),i}writeSpatialReference(e,t){if(e)return void(t.spatialReference=e.toJSON());const{features:r}=this;if(r)for(const i of r)if(i&&null!=i.geometry&&i.geometry.spatialReference)return void(t.spatialReference=i.geometry.spatialReference.toJSON())}clone(){return new i(this.cloneProperties())}cloneProperties(){return(0,a.o8)({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})}toJSON(e){const t=this.write();if(t.features&&Array.isArray(e)&&e.length>0)for(let r=0;r<t.features.length;r++){const i=t.features[r];if(i.geometry){const t=e?.[r];i.geometry=t?.toJSON()||i.geometry}}return t}quantize(e){const{scale:[t,r],translate:[i,n]}=e,o=this.features,s=this._getQuantizationFunction(this.geometryType,(e=>Math.round((e-i)/t)),(e=>Math.round((n-e)/r)));for(let l=0,a=o.length;l<a;l++)s?.(o[l].geometry)||(o.splice(l,1),l--,a--);return this.transform=e,this}unquantize(){const{geometryType:e,features:t,transform:r}=this;if(!r)return this;const{translate:[i,n],scale:[o,s]}=r;let l=null,a=null;if(this.hasZ&&null!=r?.scale?.[2]){const{translate:[,,e],scale:[,,t]}=r;l=r=>r*t+e}if(this.hasM&&null!=r?.scale?.[3]){const{translate:[,,,e],scale:[,,,t]}=r;a=r=>null==r?r:r*t+e}const p=this._getHydrationFunction(e,(e=>e*o+i),(e=>n-e*s),l,a);for(const{geometry:d}of t)null!=d&&p&&p(d);return this.transform=null,this}readFeaturesWithClass(e,t,r){const i=c.A.fromJSON(t.spatialReference),n=[];for(let o=0;o<e.length;o++){const t=e[o],s=r.fromJSON(t),l=t.geometry?.spatialReference;null==s.geometry||l||(s.geometry.spatialReference=i);const a=t.aggregateGeometries,p=s.aggregateGeometries;if(a&&null!=p)for(const e in p){const t=p[e],r=a[e],n=r?.spatialReference;null==t||n||(t.spatialReference=i)}n.push(s)}return n}_quantizePoints(e,t,r){let i,n;const o=[];for(let s=0,l=e.length;s<l;s++){const l=e[s];if(s>0){const e=t(l[0]),s=r(l[1]);e===i&&s===n||(o.push([e-i,s-n]),i=e,n=s)}else i=t(l[0]),n=r(l[1]),o.push([i,n])}return o.length>0?o:null}_getQuantizationFunction(e,t,r){return"point"===e?e=>(e.x=t(e.x),e.y=r(e.y),e):"polyline"===e||"polygon"===e?e=>{const i=(0,h.Bi)(e)?e.rings:e.paths,n=[];for(let o=0,s=i.length;o<s;o++){const e=i[o],s=this._quantizePoints(e,t,r);s&&n.push(s)}return n.length>0?((0,h.Bi)(e)?e.rings=n:e.paths=n,e):null}:"multipoint"===e?e=>{const i=this._quantizePoints(e.points,t,r);return i&&i.length>0?(e.points=i,e):null}:"extent"===e?e=>e:null}_getHydrationFunction(e,t,r,i,n){return"point"===e?e=>{e.x=t(e.x),e.y=r(e.y),i&&(e.z=i(e.z))}:"polyline"===e||"polygon"===e?e=>{const o=(0,h.Bi)(e)?e.rings:e.paths;let s,l;for(let i=0,n=o.length;i<n;i++){const e=o[i];for(let i=0,n=e.length;i<n;i++){const n=e[i];i>0?(s+=n[0],l+=n[1]):(s=n[0],l=n[1]),n[0]=t(s),n[1]=r(l)}}if(i&&n)for(let t=0,r=o.length;t<r;t++){const e=o[t];for(let t=0,r=e.length;t<r;t++){const r=e[t];r[2]=i(r[2]),r[3]=n(r[3])}}else if(i)for(let t=0,r=o.length;t<r;t++){const e=o[t];for(let t=0,r=e.length;t<r;t++){const r=e[t];r[2]=i(r[2])}}else if(n)for(let t=0,r=o.length;t<r;t++){const e=o[t];for(let t=0,r=e.length;t<r;t++){const r=e[t];r[2]=n(r[2])}}}:"extent"===e?e=>{e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax),i&&null!=e.zmax&&null!=e.zmin&&(e.zmax=i(e.zmax),e.zmin=i(e.zmin)),n&&null!=e.mmax&&null!=e.mmin&&(e.mmax=n(e.mmax),e.mmin=n(e.mmin))}:"multipoint"===e?e=>{const o=e.points;let s,l;for(let i=0,n=o.length;i<n;i++){const e=o[i];i>0?(s+=e[0],l+=e[1]):(s=e[0],l=e[1]),e[0]=t(s),e[1]=r(l)}if(i&&n)for(let t=0,r=o.length;t<r;t++){const e=o[t];e[2]=i(e[2]),e[3]=n(e[3])}else if(i)for(let t=0,r=o.length;t<r;t++){const e=o[t];e[2]=i(e[2])}else if(n)for(let t=0,r=o.length;t<r;t++){const e=o[t];e[2]=n(e[2])}}:null}};(0,n._)([(0,p.MZ)({type:String,json:{write:!0}})],_.prototype,"displayFieldName",void 0),(0,n._)([(0,p.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],_.prototype,"exceededTransferLimit",void 0),(0,n._)([(0,p.MZ)({type:[o.A],json:{write:!0}})],_.prototype,"features",void 0),(0,n._)([(0,d.w)("features")],_.prototype,"readFeatures",null),(0,n._)([(0,p.MZ)({type:[m.A],json:{write:!0}})],_.prototype,"fields",void 0),(0,n._)([(0,p.MZ)({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:g.read}}})],_.prototype,"geometryType",void 0),(0,n._)([(0,y.K)("geometryType")],_.prototype,"writeGeometryType",null),(0,n._)([(0,p.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],_.prototype,"hasM",void 0),(0,n._)([(0,p.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],_.prototype,"hasZ",void 0),(0,n._)([(0,p.MZ)({types:f.yR,json:{write:!0}})],_.prototype,"queryGeometry",void 0),(0,n._)([(0,d.w)("queryGeometry")],_.prototype,"readQueryGeometry",null),(0,n._)([(0,p.MZ)({type:c.A,json:{write:!0}})],_.prototype,"spatialReference",void 0),(0,n._)([(0,y.K)("spatialReference")],_.prototype,"writeSpatialReference",null),(0,n._)([(0,p.MZ)({json:{write:!0}})],_.prototype,"transform",void 0),_=i=(0,n._)([(0,u.$)("esri.rest.support.FeatureSet")],_),_.prototype.toJSON.isDefaultToJSON=!0;const w=_},84397:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ye});var i=r(35143),n=r(3825),o=r(94643),s=r(50076),l=r(87663),a=r(77717),p=r(50346),d=r(90534),u=r(46053),y=(r(81806),r(76460),r(47249),r(85842)),c=r(25515),h=r(54901),f=r(53521),m=r(67993),g=r(68134),_=r(75540),w=r(40565),v=r(65624),b=r(5682),M=r(95363),Z=r(51162),F=r(72003);let x=class extends((0,b.j)((0,v.dM)((0,a.P)(c.A)))){constructor(e){super(e),this._layerCache=new f.q(20,(e=>e.destroy())),this._oidToReference=new m.A,this._layerToReference=new Map,this.legendEnabled=!0,this.layers=new o.A,this.maximumVisibleSublayers=10,this.opacity=1,this.parent=null,this.persistenceEnabled=!0,this.title="Layers in view",this.type="catalog-dynamic-group",this.visible=!0}initialize(){this.addHandles([this.layers.on("after-add",(e=>{let{item:t}=e;t.parent=this})),this.layers.on("after-remove",(e=>{let{item:t}=e;t.parent=null})),(0,g.wB)((()=>this._orderBy),(()=>{this._updateLayerSortValues(),this._sortAllLayers()}))])}load(e){return this.addResolvingPromise(this.parent.load()),Promise.resolve(this)}destroy(){this._layerCache.destroy(),this._oidToReference.clear(),this._layerToReference.clear()}get _orderBy(){return this.parent?this.parent.orderBy?.find((e=>!e.valueExpression&&e.field))??new Z.A({field:this.parent.objectIdField}):null}get _referenceComparator(){const e=this._orderBy;if(!this.parent||!e)return()=>0;const t=this.parent.fieldsIndex.get(e.field),r=(0,F.FM)(t?.toJSON().type,"descending"===e.order),i=(0,F.FM)("esriFieldTypeOID","descending"===e.order);return(e,t)=>r(t.sortValue,e.sortValue)||i(t.objectId,e.objectId)}get fullExtent(){return this.parent?.fullExtent??null}get updating(){return(0,l.Bs)(this._oidToReference,(e=>{let{pending:t}=e;return null!=t}))}acquireLayer(e){if(this.destroyed)return(0,h.hA)();const t=this._getLayerReference(e);return t.count++,(0,h.hA)((()=>{t.count--,t.count||this._destroyLayerReference(t)}))}_getLayerReference(e){const t=e.getObjectId();return(0,l.tE)(this._oidToReference,t,(()=>{const t=e.getObjectId(),r=`${t}`,i=e.getAttribute(this.parent.itemSourceField),n=new j(e,t,i),o=this._layerCache.pop(r);return o?(this._addLayer(n,o),n):(n.pending=this.parent.createLayerFromFootprint(e).then((e=>{n.count?this._addLayer(n,e):(this.destroyed||this._layerCache.get(r)||this._layerCache.put(r,e),n.layer=null)})).catch((()=>{})).finally((()=>{n.pending=null})),n)}))}_destroyLayerReference(e){e.layer&&(this._layerToReference.delete(e.layer),this.layers.remove(e.layer),this.destroyed?e.layer.destroy():this._layerCache.put(`${e.objectId}`,e.layer),e.layer=null),this._oidToReference.delete(e.objectId)}_addLayer(e,t){e.layer=t,t.persistenceEnabled=!1,this._layerToReference.set(t,e),this._updateLayerSortValue(e),this.layers.add(t),this._sortAllLayers()}_updateLayerSortValues(){for(const e of this._layerToReference.values())this._updateLayerSortValue(e)}_updateLayerSortValue(e){this._orderBy&&(e.sortValue=e.footprint.getAttribute(this._orderBy.field))}_sortAllLayers(){this.layers.sort(((e,t)=>this._referenceComparator(this._layerToReference.get(e),this._layerToReference.get(t))))}};(0,i._)([(0,u.MZ)()],x.prototype,"_orderBy",null),(0,i._)([(0,u.MZ)({readOnly:!0})],x.prototype,"_referenceComparator",null),(0,i._)([(0,u.MZ)(M.fV)],x.prototype,"legendEnabled",void 0),(0,i._)([(0,u.MZ)({type:["show","hide","hide-children"],json:{write:!0}})],x.prototype,"listMode",void 0),(0,i._)([(0,u.MZ)({readOnly:!0})],x.prototype,"fullExtent",null),(0,i._)([(0,u.MZ)({type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}},write:{ignoreOrigin:!0,isRequired:!0}}})],x.prototype,"id",void 0),(0,i._)([(0,u.MZ)({readOnly:!0})],x.prototype,"layers",void 0),(0,i._)([(0,u.MZ)({type:w.jz,range:{min:0,max:50},json:{write:!0,default:10}})],x.prototype,"maximumVisibleSublayers",void 0),(0,i._)([(0,u.MZ)(M.ke)],x.prototype,"opacity",void 0),(0,i._)([(0,u.MZ)({clonable:!1})],x.prototype,"parent",void 0),(0,i._)([(0,u.MZ)({type:String,nonNullable:!0,json:{write:{ignoreOrigin:!0,isRequired:!0}}})],x.prototype,"title",void 0),(0,i._)([(0,u.MZ)({json:{read:!1}})],x.prototype,"type",void 0),(0,i._)([(0,u.MZ)({readOnly:!0})],x.prototype,"updating",null),(0,i._)([(0,u.MZ)({type:Boolean,json:{name:"visibility",write:!0}})],x.prototype,"visible",void 0),x=(0,i._)([(0,y.$)("esri.layers.catalog.CatalogDynamicGroupLayer")],x);const I=x;class j{constructor(e,t,r){this.footprint=e,this.objectId=t,this.itemSource=r,this.count=0,this.layer=null,this.sortValue=void 0,this._pending=(0,_.v)(null)}get pending(){return this._pending.value}set pending(e){this._pending.value=e}}var O=r(16868),S=r(53084),E=r(49140),R=r(75547),T=r(74440),A=r(53430),L=r(95114),P=r(27937),q=r(5766),N=r(49176),V=r(30973),C=r(86875);let G=class extends((0,b.j)((0,T.F)((0,v.dM)((0,a.P)(c.A))))){constructor(e){super(e),this.attributeTableTemplate=null,this.charts=null,this.editingEnabled=!0,this.elevationInfo=null,this.formTemplate=null,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.maxScale=0,this.minScale=0,this.opacity=1,this.parent=null,this.persistenceEnabled=!0,this.popupEnabled=!0,this.popupTemplate=null,this.title="Footprints",this.type="catalog-footprint",this.visible=!0}load(e){return this.addResolvingPromise(this._doLoad(e)),Promise.resolve(this)}async _doLoad(e){await this.parent.load(e),(0,A.yp)(this.renderer,this.fieldsIndex),this.addHandles([this.parent.on("apply-edits",(e=>this.emit("apply-edits",e))),this.parent.on("edits",(e=>this.emit("edits",e))),this.parent.on("refresh",(e=>this.emit("refresh",e)))])}get apiKey(){return this.parent?.apiKey}get capabilities(){return this.parent?.capabilities}get customParameters(){return this.parent?.customParameters}get dateFieldsTimeZone(){return this.parent?.dateFieldsTimeZone??null}get datesInUnknownTimezone(){return this.parent?.datesInUnknownTimezone??!1}get definitionExpression(){return this.parent?.definitionExpression}get editingInfo(){return this.parent?.editingInfo}get effectiveCapabilities(){return this.parent?.effectiveCapabilities}get createQueryVersion(){return this.parent?.createQueryVersion}get defaultPopupTemplate(){return this.createPopupTemplate()}get displayField(){return this.parent?.displayField}get displayFilterEnabled(){return this.parent?.displayFilterEnabled??!0}get displayFilterInfo(){return this.parent?.displayFilterInfo??null}get effectiveEditingEnabled(){return!1}get fields(){return this.parent?.fields}get fieldsIndex(){return this.parent?.fieldsIndex}get fullExtent(){return this.parent?.fullExtent}get geometryFieldsInfo(){return this.parent?.geometryFieldsInfo}get geometryType(){return this.parent?.geometryType}get globalIdField(){return this.parent?.globalIdField}get hasM(){return this.parent?.hasM??!1}get hasZ(){return this.parent?.hasZ??!1}get objectIdField(){return this.parent?.objectIdField}get orderBy(){return this.parent?.orderBy??null}get outFields(){return this.parent?.outFields}get parsedUrl(){return this.parent?.parsedUrl??null}get preferredTimeZone(){return this.parent?.preferredTimeZone??null}set renderer(e){(0,A.yp)(e,this.fieldsIndex),this._set("renderer",e)}get renderer(){return this._isOverridden("renderer")?this._get("renderer"):function(){const e=new C.A({style:"solid",color:[0,0,0,0],outline:{style:"solid",color:[96,96,96,.75],width:.75}});return new q.A({symbol:e})}()}get returnM(){return this.parent?.returnM}get returnZ(){return this.parent?.returnZ}get source(){return this.parent?.source}get timeExtent(){return this.parent?.timeExtent}get timeInfo(){return this.parent?.timeInfo}get timeOffset(){return this.parent?.timeOffset}get typeIdField(){return this.parent?.typeIdField}get types(){return this.parent?.types}get useViewTime(){return this.parent?.useViewTime??!0}get version(){return this.parent?.version}async applyEdits(e,t){return await this.load(),this.parent.applyEdits(e,t)}createPopupTemplate(e){const t={fields:this.fields,objectIdField:this.objectIdField,title:this.title};return(0,V.tn)(t,e)}createQuery(){return this.parent?.createQuery()}getField(e){return this.parent?.getField(e)}getFieldDomain(e,t){return this.parent?.getFieldDomain(e,t)}async queryExtent(e,t){return await this.load(),this.parent.queryExtent(e,t)}async queryFeatures(e,t){return await this.load(),this.parent.queryFeatures(e,t)}async queryFeatureCount(e,t){return await this.load(),this.parent.queryFeatureCount(e,t)}async queryObjectIds(e,t){return await this.load(),this.parent.queryObjectIds(e,t)}};(0,i._)([(0,u.MZ)(M.zQ)],G.prototype,"attributeTableTemplate",void 0),(0,i._)([(0,u.MZ)({readOnly:!0})],G.prototype,"apiKey",null),(0,i._)([(0,u.MZ)({readOnly:!0})],G.prototype,"capabilities",null),(0,i._)([(0,u.MZ)({readOnly:!0})],G.prototype,"customParameters",null),(0,i._)([(0,u.MZ)()],G.prototype,"dateFieldsTimeZone",null),(0,i._)([(0,u.MZ)({readOnly:!0})],G.prototype,"datesInUnknownTimezone",null),(0,i._)([(0,u.MZ)({readOnly:!0})],G.prototype,"definitionExpression",null),(0,i._)([(0,u.MZ)({readOnly:!0})],G.prototype,"editingInfo",null),(0,i._)([(0,u.MZ)({readOnly:!0})],G.prototype,"effectiveCapabilities",null),(0,i._)([(0,u.MZ)({json:{origins:{"web-scene":{write:!1}},write:!0}})],G.prototype,"charts",void 0),(0,i._)([(0,u.MZ)({readOnly:!0})],G.prototype,"createQueryVersion",null),(0,i._)([(0,u.MZ)({readOnly:!0})],G.prototype,"defaultPopupTemplate",null),(0,i._)([(0,u.MZ)({readOnly:!0})],G.prototype,"displayField",null),(0,i._)([(0,u.MZ)({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:!0,origins:{"web-scene":{read:!1,write:!1}}}})],G.prototype,"editingEnabled",void 0),(0,i._)([(0,u.MZ)({readOnly:!0})],G.prototype,"effectiveEditingEnabled",null),(0,i._)([(0,u.MZ)((()=>{const e=(0,S.o8)(M.Yj);return e.json.origins["web-map"]={read:!1,write:!1},e})())],G.prototype,"elevationInfo",void 0),(0,i._)([(0,u.MZ)({readOnly:!0})],G.prototype,"fields",null),(0,i._)([(0,u.MZ)({readOnly:!0})],G.prototype,"fieldsIndex",null),(0,i._)([(0,u.MZ)({type:R.A,json:{name:"formInfo",write:!0,origins:{"web-scene":{read:!1,write:!1}}}})],G.prototype,"formTemplate",void 0),(0,i._)([(0,u.MZ)({readOnly:!0})],G.prototype,"fullExtent",null),(0,i._)([(0,u.MZ)({readOnly:!0})],G.prototype,"geometryFieldsInfo",null),(0,i._)([(0,u.MZ)({readOnly:!0})],G.prototype,"geometryType",null),(0,i._)([(0,u.MZ)({readOnly:!0})],G.prototype,"globalIdField",null),(0,i._)([(0,u.MZ)({readOnly:!0})],G.prototype,"hasM",null),(0,i._)([(0,u.MZ)({readOnly:!0})],G.prototype,"hasZ",null),(0,i._)([(0,u.MZ)({type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}},write:{ignoreOrigin:!0,isRequired:!0}}})],G.prototype,"id",void 0),(0,i._)([(0,u.MZ)({type:[L.A],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:P.w,write:!0}})],G.prototype,"labelingInfo",void 0),(0,i._)([(0,u.MZ)(M.kF)],G.prototype,"labelsVisible",void 0),(0,i._)([(0,u.MZ)(M.fV)],G.prototype,"legendEnabled",void 0),(0,i._)([(0,u.MZ)({type:["show","hide"],json:{write:!0}})],G.prototype,"listMode",void 0),(0,i._)([(0,u.MZ)((()=>{const e=(0,S.o8)(M.hG);return e.json.origins.service.read=!1,e})())],G.prototype,"maxScale",void 0),(0,i._)([(0,u.MZ)((()=>{const e=(0,S.o8)(M.hn);return e.json.origins.service.read=!1,e})())],G.prototype,"minScale",void 0),(0,i._)([(0,u.MZ)({readOnly:!0})],G.prototype,"objectIdField",null),(0,i._)([(0,u.MZ)(M.ke)],G.prototype,"opacity",void 0),(0,i._)([(0,u.MZ)({readOnly:!0})],G.prototype,"orderBy",null),(0,i._)([(0,u.MZ)({readOnly:!0})],G.prototype,"outFields",null),(0,i._)([(0,u.MZ)({clonable:!1})],G.prototype,"parent",void 0),(0,i._)([(0,u.MZ)({readOnly:!0})],G.prototype,"parsedUrl",null),(0,i._)([(0,u.MZ)(M.M6)],G.prototype,"popupEnabled",void 0),(0,i._)([(0,u.MZ)({type:O.A,json:{name:"popupInfo",write:!0}})],G.prototype,"popupTemplate",void 0),(0,i._)([(0,u.MZ)({readOnly:!0})],G.prototype,"preferredTimeZone",null),(0,i._)([(0,u.MZ)({types:N.Hg,json:{origins:{"web-scene":{types:N.XJ}},name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy(e,t){return{ignoreOrigin:this.originIdOf(t)<E.Gr.PORTAL_ITEM}}}}})],G.prototype,"renderer",null),(0,i._)([(0,u.MZ)({readOnly:!0})],G.prototype,"returnM",null),(0,i._)([(0,u.MZ)({readOnly:!0})],G.prototype,"returnZ",null),(0,i._)([(0,u.MZ)({readOnly:!0})],G.prototype,"source",null),(0,i._)([(0,u.MZ)({readOnly:!0})],G.prototype,"timeExtent",null),(0,i._)([(0,u.MZ)({readOnly:!0})],G.prototype,"timeInfo",null),(0,i._)([(0,u.MZ)({readOnly:!0})],G.prototype,"timeOffset",null),(0,i._)([(0,u.MZ)({type:String,nonNullable:!0,json:{write:{ignoreOrigin:!0,isRequired:!0}}})],G.prototype,"title",void 0),(0,i._)([(0,u.MZ)({json:{read:!1}})],G.prototype,"type",void 0),(0,i._)([(0,u.MZ)({readOnly:!0})],G.prototype,"typeIdField",null),(0,i._)([(0,u.MZ)({readOnly:!0})],G.prototype,"types",null),(0,i._)([(0,u.MZ)({readOnly:!0})],G.prototype,"useViewTime",null),(0,i._)([(0,u.MZ)({type:Boolean,json:{name:"visibility",write:!0}})],G.prototype,"visible",void 0),G=(0,i._)([(0,y.$)("esri.layers.catalog.CatalogFootprintLayer")],G);const B=G;var z=r(89078),k=r(12406),J=r(19502),D=r(31362),U=r(30218),Q=r(61979),$=r(67187),K=r(11270),H=r(37534),W=r(94729),Y=r(21617),X=r(78817),ee=r(91447),te=r(91485),re=r(76350),ie=r(38278),ne=r(65308),oe=r(70652),se=r(47437),le=r(97015);const ae=(0,re.p)();function pe(e,t,r,i){const n=e.write({},i);(function(e){if(null==e)return!0;const t=Object.keys(e);return!t.length||1===t.length&&"id"===t[0]})(n)||(t[r]=n)}let de=class extends((0,U.FJ)((0,$.j)((0,Q.w6)((0,v.dM)((0,H.fY)((0,X.e)((0,b.j)((0,Y.J)((0,J.b)((0,K.q)((0,W.A)((0,a.P)((0,D.d)((0,k.p)(c.A))))))))))))))){constructor(e){super(e),this.legendEnabled=!0,this._portals=new Map,this._layerToFootprint=new WeakMap,this.drawOrderField="cd_draworder",this.dynamicGroupLayer=new I({parent:this}),this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.floorInfo=null,this.footprintLayer=new B({parent:this}),this.itemNameField="cd_itemname",this.itemSourceField="cd_itemsource",this.itemTypeField="cd_itemtype",this.layers=new o.A([this.dynamicGroupLayer,this.footprintLayer]),this.maxScaleField="cd_maxscale",this.minScaleField="cd_minscale",this.orderBy=null,this.outFields=null,this.supportedSourceTypes=new Set(["Catalog Layer"]),this.source=new z.default({layer:this,supportedSourceTypes:this.supportedSourceTypes}),this.type="catalog",this.typeIdField=null,this.types=null}load(e){const t=null!=e?e.signal:null,r=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(p.QP).then((async()=>{const{url:e,source:r,portalItem:i}=this;if(!e)throw new s.A("catalog-layer:missing-url","Catalog layer must be created with a url");if(null==this.layerId){const r=await this._fetchFirstValidLayerId(t);if(null==r)throw new s.A("catalog-layer:missing-layerId","There is no Catalog Layer in the service",{service:e});this.layerId=r}await r.load({signal:t});const{sourceJSON:n}=r;n&&(this.sourceJSON=n,this.read(n,{origin:"service",portalItem:i,portal:i?.portal,url:this.parsedUrl}))})).then((()=>{const e=[this.itemNameField,this.itemSourceField,this.itemTypeField,this.minScaleField,this.maxScaleField],t=e.filter((e=>!this.fieldsIndex.has(e)));if(t.length)throw new s.A("catalog-layer:missing-fields","There are missing fields to operate properly",{requiredFields:e,missingFields:t})})).then((()=>(0,ee.VA)(this,"load",e)));return this.addResolvingPromise(r),Promise.resolve(this)}destroy(){this.footprintLayer.destroy(),this.dynamicGroupLayer.destroy();for(const e of this._portals.values())e.destroy();this._portals.clear()}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&null!=this.capabilities&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return!1}get parsedUrl(){const e=(0,d.An)(this.url);return null!=e&&null!=this.layerId&&(e.path=(0,d.fj)(e.path,this.layerId.toString())),e}async applyEdits(e,t){return(0,ee.ct)(this,e,t)}on(e,t){return super.on(e,t)}async createLayerFromFootprint(e){const t=await this._createLayer(e);return this._configureLayer(t,e),this._layerToFootprint.set(t,e),t}createFootprintFromLayer(e){return this._layerToFootprint.get(e)?.clone()}createQuery(){const e=new le.A,t=this.capabilities?.query;e.returnGeometry=!0,t&&(e.compactGeometryEnabled=t.supportsCompactGeometry,e.defaultSpatialReferenceEnabled=t.supportsDefaultSpatialReference),e.outFields=["*"];const{timeOffset:r,timeExtent:i}=this;return e.timeExtent=null!=r&&null!=i?i.offset(-r.value,r.unit):i||null,e.where=this.definitionExpression||"1=1",e}getFeatureType(e){return(0,ee.xd)(this.types,this.typeIdField,e)}getFieldDomain(e,t){const r=t?.feature,i=this.getFeatureType(r);if(i){const t=i.domains&&i.domains[e];if(t&&"inherited"!==t.type)return t}return this.getField(e)?.domain}async hasDataChanged(){return(0,ee.jp)(this)}async queryFeatures(e,t){const r=await this.load(),i=await r.source.queryFeatures(le.A.from(e)??r.createQuery(),t);if(i?.features)for(const n of i.features)n.layer=n.sourceLayer=r.footprintLayer;return i}async queryObjectIds(e,t){return(await this.load()).source.queryObjectIds(le.A.from(e)??this.createQuery(),t)}async queryFeatureCount(e,t){return(await this.load()).source.queryFeatureCount(le.A.from(e)??this.createQuery(),t)}async queryExtent(e,t){return(await this.load()).source.queryExtent(le.A.from(e)??this.createQuery(),t)}serviceSupportsSpatialReference(e){return this.loaded&&(0,ie.D)(this,e)}read(e,t){if(super.read(e,t),e){const{footprintLayer:r,dynamicGroupLayer:i}=e;r&&this.footprintLayer.read(r,t),i&&this.dynamicGroupLayer.read(i,t)}}async _fetchFirstValidLayerId(e){const{data:t}=await(0,n.A)(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e});if(Array.isArray(t?.layers))return t.layers.find((e=>{let{type:t}=e;return this.supportedSourceTypes.has(t)}))?.id}async _createLayer(e){const t=e.getAttribute(this.itemSourceField);if(!t)throw new s.A("catalog-layer:item-source-missing",`The footprint is missing the "${this.itemSourceField}" attribute`);const i=JSON.parse(t);if(function(e){return"object"==typeof e&&null!=e&&"itemId"in e&&"portalUrl"in e}(i)){const{itemId:e,portalUrl:t}=i,r=(0,se.qG)(t),n=this.portalItem?.portal,o=ne.A.getDefault();let s,a=!0;n&&(0,d.ut)(t,n.url)?s=n:(0,d.ut)(t,o.url)?s=o:(s=(0,l.tE)(this._portals,r,(()=>new ne.A({url:r}))),a=!1);const p=await c.A.fromPortalItem(new oe.default({id:e,portal:s}));return a||await ue(p),p}if(function(e){return"object"==typeof e&&null!=e&&"url"in e}(i))return c.A.fromArcGISServerUrl({url:i.url});const{default:n}=await r.e(2043).then(r.bind(r,72043));return new n}_configureLayer(e,t){const r=t.getAttribute(this.itemNameField);r&&(e.title=r);const i=t.getAttribute(this.maxScaleField);null!=i&&"maxScale"in e&&(e.maxScale=i);const n=t.getAttribute(this.minScaleField);null!=n&&"minScale"in e&&(e.minScale=n)}};async function ue(e){if("portalItem"in e&&e.portalItem){try{await e.load()}catch{}e.portalItem=null,"group"===e.type&&await Promise.allSettled([...e.layers.map((e=>ue(e))),...e.tables.map((e=>ue(e)))])}}(0,i._)([(0,u.MZ)(M.fV)],de.prototype,"legendEnabled",void 0),(0,i._)([(0,u.MZ)({readOnly:!0})],de.prototype,"createQueryVersion",null),(0,i._)([(0,u.MZ)({readOnly:!0})],de.prototype,"drawOrderField",void 0),(0,i._)([(0,u.MZ)({type:I,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,writer:pe}}})],de.prototype,"dynamicGroupLayer",void 0),(0,i._)([(0,u.MZ)({readOnly:!0})],de.prototype,"editingEnabled",null),(0,i._)([(0,u.MZ)({readOnly:!0})],de.prototype,"effectiveEditingEnabled",null),(0,i._)([(0,u.MZ)({json:{origins:{"web-scene":{name:"layerDefinition.elevationInfo",read:!1,write:!1}}}})],de.prototype,"elevationInfo",void 0),(0,i._)([(0,u.MZ)({...ae.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],de.prototype,"fields",void 0),(0,i._)([(0,u.MZ)(ae.fieldsIndex)],de.prototype,"fieldsIndex",void 0),(0,i._)([(0,u.MZ)({json:{origins:{"web-scene":{name:"layerDefinition.floorInfo",read:!1,write:!1}}}})],de.prototype,"floorInfo",void 0),(0,i._)([(0,u.MZ)({type:B,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,writer:pe}}})],de.prototype,"footprintLayer",void 0),(0,i._)([(0,u.MZ)(M.id)],de.prototype,"id",void 0),(0,i._)([(0,u.MZ)({readOnly:!0})],de.prototype,"itemNameField",void 0),(0,i._)([(0,u.MZ)({readOnly:!0})],de.prototype,"itemSourceField",void 0),(0,i._)([(0,u.MZ)({readOnly:!0})],de.prototype,"itemTypeField",void 0),(0,i._)([(0,u.MZ)({readOnly:!0})],de.prototype,"layers",void 0),(0,i._)([(0,u.MZ)({type:["show","hide","hide-children"]})],de.prototype,"listMode",void 0),(0,i._)([(0,u.MZ)({readOnly:!0})],de.prototype,"maxScaleField",void 0),(0,i._)([(0,u.MZ)({readOnly:!0})],de.prototype,"minScaleField",void 0),(0,i._)([(0,u.MZ)({value:"CatalogLayer",type:["CatalogLayer"]})],de.prototype,"operationalLayerType",void 0),(0,i._)([(0,u.MZ)({json:{origins:{"web-scene":{name:"layerDefinition.orderBy",write:!0,read:!0}}}})],de.prototype,"orderBy",void 0),(0,i._)([(0,u.MZ)(ae.outFields)],de.prototype,"outFields",void 0),(0,i._)([(0,u.MZ)({readOnly:!0})],de.prototype,"parsedUrl",null),(0,i._)([(0,u.MZ)({readOnly:!0})],de.prototype,"source",void 0),(0,i._)([(0,u.MZ)({json:{read:!1}})],de.prototype,"type",void 0),(0,i._)([(0,u.MZ)({type:String})],de.prototype,"typeIdField",void 0),(0,i._)([(0,u.MZ)({type:[te.A]})],de.prototype,"types",void 0),de=(0,i._)([(0,y.$)("esri.layers.CatalogLayer")],de);const ye=de},91485:(e,t,r)=>{r.d(t,{A:()=>c});var i=r(35143),n=r(69098),o=r(42553),s=r(46053),l=(r(81806),r(76460),r(47249),r(28379)),a=r(85842),p=r(17707),d=r(76866),u=r(15427);let y=class extends(n.A.ClonableMixin(o.A)){constructor(e){super(e),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(e){const t={};for(const r of Object.keys(e))t[r]=(0,d.rS)(e[r]);return t}writeDomains(e,t){const r={};for(const i of Object.keys(e))e[i]&&(r[i]=e[i]?.toJSON());t.domains=r}};(0,i._)([(0,s.MZ)({json:{write:!0}})],y.prototype,"id",void 0),(0,i._)([(0,s.MZ)({json:{write:!0}})],y.prototype,"name",void 0),(0,i._)([(0,s.MZ)({json:{write:!0}})],y.prototype,"domains",void 0),(0,i._)([(0,l.w)("domains")],y.prototype,"readDomains",null),(0,i._)([(0,p.K)("domains")],y.prototype,"writeDomains",null),(0,i._)([(0,s.MZ)({type:[u.A],json:{write:!0}})],y.prototype,"templates",void 0),y=(0,i._)([(0,a.$)("esri.layers.support.FeatureType")],y);const c=y}}]);
//# sourceMappingURL=5859.d31af7c4.chunk.js.map