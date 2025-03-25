"use strict";(self.webpackChunkfeedback_map=self.webpackChunkfeedback_map||[]).push([[5811],{25811:(n,t,e)=>{e.r(t),e.d(t,{registerFunctions:()=>v});var r=e(26043),a=e(67253),i=e(9861),o=e(80324),c=e(43036),s=e(45018),u=e(5027),l=e(47705),f=e(76797),d=e(89189),w=e(66388),y=e(19247),h=e(65215),A=e(23701),m=e(19902),S=e(65308),D=e(55171),N=e(3825);async function p(n,t,e){const r=D.id?.findCredential(n.restUrl);if(!r)return null;if("loaded"===n.loadStatus&&""===t&&n.user?.sourceJSON&&!1===e)return n.user.sourceJSON;const a={responseType:"json",query:{f:"json"}};if(e&&(a.query.returnUserLicenseTypeExtensions=!0),""===t){const t=await(0,N.A)(n.restUrl+"/community/self",a);if(t.data){const n=t.data;if(n?.username)return n}return null}const i=await(0,N.A)(n.restUrl+"/community/users/"+t,a);if(i.data){const n=i.data;return n.error?null:n}return null}var g=e(85632);function O(n){if(null==n)return n;switch(typeof n){case"string":case"number":return n;default:throw new i.D$(null,i.TX.InvalidParameter,null)}}function v(n){"async"===n.mode&&(n.functions.disjoint=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>(a=(0,c.E)(a),(0,u.ZL)(a,t,e),null===a[0]||null===a[1]||(0,l.C)("disjoint",[a[0].toJSON(),a[1].toJSON()]))))},n.functions.intersects=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>(a=(0,c.E)(a),(0,u.ZL)(a,t,e),null!==a[0]&&null!==a[1]&&(0,l.C)("intersects",[a[0].toJSON(),a[1].toJSON()]))))},n.functions.touches=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>(a=(0,c.E)(a),(0,u.ZL)(a,t,e),null!==a[0]&&null!==a[1]&&(0,l.C)("touches",[a[0].toJSON(),a[1].toJSON()]))))},n.functions.crosses=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>(a=(0,c.E)(a),(0,u.ZL)(a,t,e),null!==a[0]&&null!==a[1]&&(0,l.C)("crosses",[a[0].toJSON(),a[1].toJSON()]))))},n.functions.within=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>(a=(0,c.E)(a),(0,u.ZL)(a,t,e),null!==a[0]&&null!==a[1]&&(0,l.C)("within",[a[0].toJSON(),a[1].toJSON()]))))},n.functions.contains=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>(a=(0,c.E)(a),(0,u.ZL)(a,t,e),null!==a[0]&&null!==a[1]&&(0,l.C)("contains",[a[0].toJSON(),a[1].toJSON()]))))},n.functions.overlaps=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>(a=(0,c.E)(a),(0,u.ZL)(a,t,e),null!==a[0]&&null!==a[1]&&(0,l.C)("overlaps",[a[0].toJSON(),a[1].toJSON()]))))},n.functions.equals=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>((0,c.D)(a,2,2,t,e),a[0]===a[1]||(a[0]instanceof d.A&&a[1]instanceof d.A?(0,l.C)("equals",[a[0].toJSON(),a[1].toJSON()]):((0,c.g)(a[0])&&(0,c.g)(a[1])||!!((0,c.k)(a[0])&&(0,c.k)(a[1])||(0,c.j)(a[0])&&(0,c.j)(a[1])))&&a[0].equals(a[1])))))},n.functions.relate=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>{if(a=(0,c.E)(a),(0,c.D)(a,3,3,t,e),a[0]instanceof d.A&&a[1]instanceof d.A)return(0,l.C)("relate",[a[0].toJSON(),a[1].toJSON(),(0,c.f)(a[2])]);if(a[0]instanceof d.A&&null===a[1])return!1;if(a[1]instanceof d.A&&null===a[0])return!1;if(null===a[0]&&null===a[1])return!1;throw new i.D$(t,i.TX.InvalidParameter,e)}))},n.functions.intersection=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,a)=>(a=(0,c.E)(a),(0,u.ZL)(a,t,e),null===a[0]||null===a[1]?null:(0,m.rS)(await(0,l.C)("intersection",[a[0].toJSON(),a[1].toJSON()])))))},n.functions.union=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,a)=>{if(0===(a=(0,c.E)(a)).length)throw new i.D$(t,i.TX.WrongNumberOfParameters,e);const s=[];if(1===a.length)if((0,g.cy)(a[0])){for(const o of(0,c.E)(a[0]))if(null!==o){if(!(o instanceof d.A))throw new i.D$(t,i.TX.InvalidParameter,e);s.push(o.toJSON())}}else{if(!(0,c.m)(a[0])){if(a[0]instanceof d.A)return(0,c.u)((0,o.Yq)(a[0]),t.spatialReference);if(null===a[0])return null;throw new i.D$(t,i.TX.InvalidParameter,e)}for(const n of(0,c.E)(a[0].toArray()))if(null!==n){if(!(n instanceof d.A))throw new i.D$(t,i.TX.InvalidParameter,e);s.push(n.toJSON())}}else for(const o of a)if(null!==o){if(!(o instanceof d.A))throw new i.D$(t,i.TX.InvalidParameter,e);s.push(o.toJSON())}return 0===s.length?null:(0,m.rS)(await(0,l.C)("union",[s]))}))},n.functions.difference=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,a)=>(a=(0,c.E)(a),(0,u.ZL)(a,t,e),null===a[0]?null:null===a[1]?(0,o.Yq)(a[0]):(0,m.rS)(await(0,l.C)("difference",[a[0].toJSON(),a[1].toJSON()])))))},n.functions.symmetricdifference=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,a)=>(a=(0,c.E)(a),(0,u.ZL)(a,t,e),null===a[0]&&null===a[1]?null:null===a[0]?(0,o.Yq)(a[1]):null===a[1]?(0,o.Yq)(a[0]):(0,m.rS)(await(0,l.C)("symmetricDifference",[a[0].toJSON(),a[1].toJSON()])))))},n.functions.clip=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,a)=>{if(a=(0,c.E)(a),(0,c.D)(a,2,2,t,e),!(a[1]instanceof f.A)&&null!==a[1])throw new i.D$(t,i.TX.InvalidParameter,e);if(null===a[0])return null;if(!(a[0]instanceof d.A))throw new i.D$(t,i.TX.InvalidParameter,e);return null===a[1]?null:(0,m.rS)(await(0,l.C)("clip",[a[0].toJSON(),a[1].toJSON()]))}))},n.functions.cut=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,a)=>{if(a=(0,c.E)(a),(0,c.D)(a,2,2,t,e),!(a[1]instanceof A.A)&&null!==a[1])throw new i.D$(t,i.TX.InvalidParameter,e);if(null===a[0])return[];if(!(a[0]instanceof d.A))throw new i.D$(t,i.TX.InvalidParameter,e);return null===a[1]?[(0,o.Yq)(a[0])]:(await(0,l.C)("cut",[a[0].toJSON(),a[1].toJSON()])).map((n=>(0,m.rS)(n)))}))},n.functions.area=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,a)=>{if((0,c.D)(a,1,2,t,e),a=(0,c.E)(a),(0,c.p)(a[0])){const n=await a[0].sumArea(O(a[1]),!1,t.abortSignal);if(t.abortSignal.aborted)throw new i.D$(t,i.TX.Cancelled,e);return n}let o=a[0];if(((0,g.cy)(o)||(0,c.m)(o))&&(o=(0,c.F)(a[0],t.spatialReference)),null===o)return 0;if(!(o instanceof d.A))throw new i.D$(t,i.TX.InvalidParameter,e);return(0,l.C)("area",[o.toJSON(),O(a[1])])}))},n.functions.areageodetic=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,a)=>{if((0,c.D)(a,1,2,t,e),a=(0,c.E)(a),(0,c.p)(a[0])){const n=await a[0].sumArea(O(a[1]),!0,t.abortSignal);if(t.abortSignal.aborted)throw new i.D$(t,i.TX.Cancelled,e);return n}let o=a[0];if(((0,g.cy)(a[0])||(0,c.m)(a[0]))&&(o=(0,c.F)(a[0],t.spatialReference)),null===o)return 0;if(!(o instanceof d.A))throw new i.D$(t,i.TX.InvalidParameter,e);return(0,l.C)("geodeticArea",[o.toJSON(),O(a[1])])}))},n.functions.length=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,a)=>{if((0,c.D)(a,1,2,t,e),a=(0,c.E)(a),(0,c.p)(a[0])){const n=await a[0].sumLength(O(a[1]),!1,t.abortSignal);if(t.abortSignal.aborted)throw new i.D$(t,i.TX.Cancelled,e);return n}let o=a[0];if(((0,g.cy)(a[0])||(0,c.m)(a[0]))&&(o=(0,c.G)(a[0],t.spatialReference)),null===o)return 0;if(!(o instanceof d.A))throw new i.D$(t,i.TX.InvalidParameter,e);return(0,l.C)("length",[o.toJSON(),O(a[1])])}))},n.functions.length3d=function(t,r){return n.standardFunctionAsync(t,r,(async(n,a,o)=>{if((0,c.D)(o,1,2,t,r),null===(o=(0,c.E)(o))[0])return 0;let s=o[0];if(((0,g.cy)(o[0])||(0,c.m)(o[0]))&&(s=(0,c.G)(o[0],t.spatialReference)),null===s)return 0;if(!(s instanceof d.A))throw new i.D$(t,i.TX.InvalidParameter,r);if(!0===s.hasZ){const{convertFromSpatialReferenceUnit:n,toLengthUnit:t}=await Promise.resolve().then(e.bind(e,41802)),r=(0,u.UI)(s);return n(s.spatialReference,t(o[1]),r)}return(0,l.C)("length",[s.toJSON(),O(o[1])])}))},n.functions.lengthgeodetic=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,a)=>{if((0,c.D)(a,1,2,t,e),a=(0,c.E)(a),(0,c.p)(a[0])){const n=await a[0].sumLength(O(a[1]),!0,t.abortSignal);if(t.abortSignal.aborted)throw new i.D$(t,i.TX.Cancelled,e);return n}let o=a[0];if(((0,g.cy)(a[0])||(0,c.m)(a[0]))&&(o=(0,c.G)(a[0],t.spatialReference)),null===o)return 0;if(!(o instanceof d.A))throw new i.D$(t,i.TX.InvalidParameter,e);return(0,l.C)("geodeticLength",[o.toJSON(),O(a[1])])}))},n.functions.distance=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,a)=>{a=(0,c.E)(a),(0,c.D)(a,2,3,t,e);let o=a[0];if(((0,g.cy)(a[0])||(0,c.m)(a[0]))&&(o=(0,c.H)(a[0],t.spatialReference)),!(o instanceof d.A))throw new i.D$(t,i.TX.InvalidParameter,e);let s=a[1];if(((0,g.cy)(a[1])||(0,c.m)(a[1]))&&(s=(0,c.H)(a[1],t.spatialReference)),!(s instanceof d.A))throw new i.D$(t,i.TX.InvalidParameter,e);return(0,l.C)("distance",[o.toJSON(),s.toJSON(),O(a[2])])}))},n.functions.distancegeodetic=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,a)=>{a=(0,c.E)(a),(0,c.D)(a,2,3,t,e);const o=a[0];if(!(o instanceof y.A))throw new i.D$(t,i.TX.InvalidParameter,e);const s=a[1];if(!(s instanceof y.A))throw new i.D$(t,i.TX.InvalidParameter,e);const u=new A.A({paths:[],spatialReference:o.spatialReference});return u.addPath([o,s]),(0,l.C)("geodeticLength",[u.toJSON(),O(a[2])])}))},n.functions.densify=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,a)=>{if(a=(0,c.E)(a),(0,c.D)(a,2,3,t,e),null===a[0])return null;if(!(a[0]instanceof d.A))throw new i.D$(t,i.TX.InvalidParameter,e);const o=(0,c.t)(a[1]);if(isNaN(o))throw new i.D$(t,i.TX.InvalidParameter,e);if(o<=0)throw new i.D$(t,i.TX.InvalidParameter,e);switch(a[0].type){case"polygon":case"polyline":case"extent":return(0,m.rS)(await(0,l.C)("densify",[a[0].toJSON(),o,O(a[2])]));default:return a[0]}}))},n.functions.densifygeodetic=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,a)=>{if(a=(0,c.E)(a),(0,c.D)(a,2,3,t,e),null===a[0])return null;if(!(a[0]instanceof d.A))throw new i.D$(t,i.TX.InvalidParameter,e);const o=(0,c.t)(a[1]);if(isNaN(o))throw new i.D$(t,i.TX.InvalidParameter,e);if(o<=0)throw new i.D$(t,i.TX.InvalidParameter,e);switch(a[0].type){case"polygon":case"polyline":case"extent":return(0,m.rS)(await(0,l.C)("geodeticDensify",[a[0].toJSON(),o,O(a[2])]));default:return a[0]}}))},n.functions.generalize=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,a)=>{if(a=(0,c.E)(a),(0,c.D)(a,2,4,t,e),null===a[0])return null;if(!(a[0]instanceof d.A))throw new i.D$(t,i.TX.InvalidParameter,e);const o=(0,c.t)(a[1]);if(isNaN(o))throw new i.D$(t,i.TX.InvalidParameter,e);const s=(0,c.e)((0,c.J)(a[2],!0));return(0,m.rS)(await(0,l.C)("generalize",[a[0].toJSON(),o,O(a[3]),{removeDegenerateParts:s}]))}))},n.functions.buffer=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,a)=>{if(a=(0,c.E)(a),(0,c.D)(a,2,3,t,e),null===a[0])return null;if(!(a[0]instanceof d.A))throw new i.D$(t,i.TX.InvalidParameter,e);const s=(0,c.t)(a[1]);if(isNaN(s))throw new i.D$(t,i.TX.InvalidParameter,e);return 0===s?(0,o.Yq)(a[0]):(0,m.rS)(await(0,l.C)("buffer",[a[0].toJSON(),s,O(a[2])]))}))},n.functions.buffergeodetic=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,a)=>{if(a=(0,c.E)(a),(0,c.D)(a,2,3,t,e),null===a[0])return null;if(!(a[0]instanceof d.A))throw new i.D$(t,i.TX.InvalidParameter,e);const s=(0,c.t)(a[1]);if(isNaN(s))throw new i.D$(t,i.TX.InvalidParameter,e);return 0===s?(0,o.Yq)(a[0]):(0,m.rS)(await(0,l.C)("geodesicBuffer",[a[0].toJSON(),s,O(a[2])]))}))},n.functions.offset=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,a)=>{if(a=(0,c.E)(a),(0,c.D)(a,2,6,t,e),null===a[0])return null;if(!(a[0]instanceof h.A||a[0]instanceof A.A))throw new i.D$(t,i.TX.InvalidParameter,e);const o=(0,c.t)(a[1]);if(isNaN(o))throw new i.D$(t,i.TX.InvalidParameter,e);const s=(0,c.f)(a[3]??"round").toLowerCase();let u;switch(s){case"round":case"bevel":case"miter":case"square":u=s;break;default:u="round"}const f=(0,c.t)((0,c.J)(a[4],10));if(isNaN(f))throw new i.D$(t,i.TX.InvalidParameter,e);const d=(0,c.t)((0,c.J)(a[5],0));if(isNaN(d))throw new i.D$(t,i.TX.InvalidParameter,e);return(0,m.rS)(await(0,l.C)("offset",[a[0].toJSON(),o,O(a[2]),{joins:u,miterLimit:f,flattenError:d}]))}))},n.functions.rotate=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,a)=>{if(a=(0,c.E)(a),(0,c.D)(a,2,3,t,e),null===a[0])return null;if(!(a[0]instanceof d.A))throw new i.D$(t,i.TX.InvalidParameter,e);const o=a[0]instanceof f.A?h.A.fromExtent(a[0]):a[0],s=(0,c.t)(a[1]);if(isNaN(s))throw new i.D$(t,i.TX.InvalidParameter,e);const u=(0,c.J)(a[2],null);if(null===u){const n="point"===o.type?o:o.extent?.center;return(0,m.rS)(await(0,l.C)("rotate",[o.toJSON(),s,n?.x,n?.y]))}if(u instanceof y.A)return(0,m.rS)(await(0,l.C)("rotate",[o.toJSON(),s,u.x,u.y]));throw new i.D$(t,i.TX.InvalidParameter,e)}))},n.functions.centroid=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,a)=>{if(a=(0,c.E)(a),(0,c.D)(a,1,2,t,e),null===a[0])return null;const o=(0,c.f)(a[1]??"geometric").toLowerCase();if("geometric"!==o&&"labelpoint"!==o)throw new i.D$(t,i.TX.InvalidParameter,e);let s=a[0];if(((0,g.cy)(a[0])||(0,c.m)(a[0]))&&(s="geometric"===o?(0,c.H)(a[0],t.spatialReference):(0,c.F)(a[0],t.spatialReference),null===s))return null;if(!(s instanceof d.A))throw new i.D$(t,i.TX.InvalidParameter,e);return(0,m.rS)("geometric"===o?await(0,l.C)("centroid",[s.toJSON()]):await(0,l.C)("labelPoint",[s.toJSON()]))}))},n.functions.measuretocoordinate=function(t,e){return n.standardFunctionAsync(t,e,u.Cd)},n.functions.pointtocoordinate=function(t,e){return n.standardFunctionAsync(t,e,u.kr)},n.functions.distancetocoordinate=function(t,e){return n.standardFunctionAsync(t,e,u.Bn)},n.functions.multiparttosinglepart=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,a)=>{if(a=(0,c.E)(a),(0,c.D)(a,1,1,t,e),null===a[0])return null;if(!(a[0]instanceof d.A))throw new i.D$(t,i.TX.InvalidParameter,e);if(a[0]instanceof y.A)return[(0,c.u)((0,o.Yq)(a[0]),t.spatialReference)];if(a[0]instanceof f.A)return[(0,c.u)((0,o.Yq)(a[0]),t.spatialReference)];const s=(0,m.rS)(await(0,l.C)("simplify",[a[0].toJSON()]));if(s instanceof h.A){const n=[],t=[];for(let e=0;e<s.rings.length;e++)if(s.isClockwise(s.rings[e])){const t=(0,m.rS)({rings:[s.rings[e]],hasZ:!0===s.hasZ,hasM:!0===s.hasM,spatialReference:s.spatialReference.toJSON()});n.push(t)}else t.push({ring:s.rings[e],pt:s.getPoint(e,0)});for(let e=0;e<t.length;e++)for(let r=0;r<n.length;r++)if(n[r].contains(t[e].pt)){n[r].addRing(t[e].ring);break}return n}if(s instanceof A.A){const n=[];for(let t=0;t<s.paths.length;t++){const e=(0,m.rS)({paths:[s.paths[t]],hasZ:!0===s.hasZ,hasM:!0===s.hasM,spatialReference:s.spatialReference.toJSON()});n.push(e)}return n}if(a[0]instanceof w.A){const n=[],e=(0,c.u)((0,o.Yq)(a[0]),t.spatialReference);for(let t=0;t<e.points.length;t++)n.push(e.getPoint(t));return n}return null}))},n.functions.issimple=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>{if(a=(0,c.E)(a),(0,c.D)(a,1,1,t,e),null===a[0])return!0;if(!(a[0]instanceof d.A))throw new i.D$(t,i.TX.InvalidParameter,e);return(0,l.C)("isSimple",[a[0].toJSON()])}))},n.functions.simplify=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,a)=>{if(a=(0,c.E)(a),(0,c.D)(a,1,1,t,e),null===a[0])return null;if(!(a[0]instanceof d.A))throw new i.D$(t,i.TX.InvalidParameter,e);return(0,m.rS)(await(0,l.C)("simplify",[a[0].toJSON()]))}))},n.functions.convexhull=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,a)=>{if(a=(0,c.E)(a),(0,c.D)(a,1,1,t,e),null===a[0])return null;if(!(a[0]instanceof d.A))throw new i.D$(t,i.TX.InvalidParameter,e);return(0,m.rS)(await(0,l.C)("convexHull",[a[0].toJSON()]))}))},n.functions.getuser=function(t,e){return n.standardFunctionAsync(t,e,(async(n,o,u)=>{(0,c.D)(u,0,2,t,e);let l=(0,c.J)(u[1],""),f=!0===l;if(l=!0===l||!1===l?"":(0,c.f)(l),0===u.length||u[0]instanceof r.A){let n;n=t.services?.portal?t.services.portal:S.A.getDefault(),u.length>0&&(n=(0,s.R)(u[0],n));const e=await p(n,l,f);if(e){const n=JSON.parse(JSON.stringify(e));for(const t of["lastLogin","created","modified"])void 0!==n[t]&&null!==n[t]&&(n[t]=new Date(n[t]));return a.A.convertObjectToArcadeDictionary(n,(0,c.K)(t))}return null}let d=null;if((0,c.p)(u[0])&&(d=u[0]),d){if(f=!1,l)return null;await d.load();const n=await d.getOwningSystemUrl();if(!n){if(!l){const n=await d.getIdentityUser();return n?a.A.convertObjectToArcadeDictionary({username:n},(0,c.K)(t)):null}return null}let e;e=t.services?.portal?t.services.portal:S.A.getDefault(),e=(0,s.R)(new r.A(n),e);const i=await p(e,l,f);if(i){const n=JSON.parse(JSON.stringify(i));for(const t of["lastLogin","created","modified"])void 0!==n[t]&&null!==n[t]&&(n[t]=new Date(n[t]));return a.A.convertObjectToArcadeDictionary(n,(0,c.K)(t))}return null}throw new i.D$(t,i.TX.InvalidParameter,e)}))},n.functions.nearestcoordinate=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,o)=>{if(o=(0,c.E)(o),(0,c.D)(o,2,2,t,e),!(o[0]instanceof d.A||null===o[0]))throw new i.D$(t,i.TX.InvalidParameter,e);if(!(o[1]instanceof y.A||null===o[1]))throw new i.D$(t,i.TX.InvalidParameter,e);if(null===o[0]||null===o[1])return null;const s=o[0]instanceof f.A?h.A.fromExtent(o[0]):o[0],u=await(0,l.C)("getNearestCoordinate",[s.toJSON(),o[1].toJSON(),{calculateLeftRightSide:!0}]);return null===u?null:a.A.convertObjectToArcadeDictionary({coordinate:(0,m.rS)(u.coordinate),distance:u.distance,sideOfLine:0===u.distance?"straddle":u.rightSide?"right":"left"},(0,c.K)(t),!1,!0)}))},n.functions.nearestvertex=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,o)=>{if(o=(0,c.E)(o),(0,c.D)(o,2,2,t,e),!(o[0]instanceof d.A||null===o[0]))throw new i.D$(t,i.TX.InvalidParameter,e);if(!(o[1]instanceof y.A||null===o[1]))throw new i.D$(t,i.TX.InvalidParameter,e);if(null===o[0]||null===o[1])return null;const s=o[0]instanceof f.A?h.A.fromExtent(o[0]):o[0],u=await(0,l.C)("getNearestVertex",[s.toJSON(),o[1].toJSON()]);return null===u?null:a.A.convertObjectToArcadeDictionary({coordinate:(0,m.rS)(u.coordinate),distance:u.distance,sideOfLine:0===u.distance?"straddle":u.rightSide?"right":"left"},(0,c.K)(t),!1,!0)}))})}},45018:(n,t,e)=>{e.d(t,{R:()=>a});var r=e(65308);function a(n,t){return null===n?t:new r.A({url:n.field("url")})}},47705:(n,t,e)=>{e.d(t,{C:()=>s});var r=e(16783);let a,i,o=!1;function c(){return a??=(0,r.ho)("arcadeGeometryOperatorsWorker").then((n=>{i=n,o=!0,a=void 0}))}async function s(n,t){return o?i.apply("invokeGeometryOp",[n,t]):(await c(),s(n,t))}}}]);
//# sourceMappingURL=5811.b0346a20.chunk.js.map