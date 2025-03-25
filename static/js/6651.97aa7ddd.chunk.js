"use strict";(self.webpackChunkfeedback_map=self.webpackChunkfeedback_map||[]).push([[1509,6651,8067,8707],{47663:(e,t,n)=>{n.d(t,{C:()=>s});var r=n(58067);function s(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const s=(0,r.toPoint)(e.m_coordinate,(0,r.getSpatialReference)(t)),o=e.m_distance,i=e.isEmpty(),a=e.m_bRightSide;return{coordinate:s,distance:o,isEmpty:i,...n&&{isRightSide:a},vertexIndex:e.m_vertexIndex}}},50554:(e,t,n)=>{n.r(t),n.d(t,{getNearestCoordinate:()=>r.g,getNearestVertex:()=>r.a,getNearestVertices:()=>r.b,supportsCurves:()=>r.s});n(78429),n(31633),n(58067),n(47663);var r=n(57074)},57074:(e,t,n)=>{n.d(t,{a:()=>c,b:()=>m,g:()=>u,p:()=>g,s:()=>l});var r=n(78429),s=n(31633),o=n(58067),i=n(47663);const a=new r.O;function u(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const{calculateLeftRightSide:r=!1,testPolygonInterior:u=!0,unit:c}=n,m=a.getNearestCoordinate((0,o.fromGeometry)(e),(0,o.fromPoint)(t).getXY(),u,r);if(c&&m.m_distance){const t=(0,o.getSpatialReference)(e);m.m_distance=(0,s.PQ)(m.m_distance,t,c)}return(0,i.C)(m,e,r)}function c(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const{unit:r}=n,u=a.getNearestVertex((0,o.fromGeometry)(e),(0,o.fromPoint)(t).getXY());if(r&&u.m_distance){const t=(0,o.getSpatialReference)(e);u.m_distance=(0,s.PQ)(u.m_distance,t,r)}return(0,i.C)(u,e)}function m(e,t,n,r){let u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};const{unit:c}=u,m=(0,o.getSpatialReference)(e);return c&&n&&(n=(0,s.UW)(n,c,m)),a.getNearestVertices((0,o.fromGeometry)(e),(0,o.fromPoint)(t).getXY(),n,r).map((t=>(c&&t.m_distance&&(t.m_distance=(0,s.PQ)(t.m_distance,m,c)),(0,i.C)(t,e))))}const l=a.supportsCurves(),g=Object.freeze(Object.defineProperty({__proto__:null,getNearestCoordinate:u,getNearestVertex:c,getNearestVertices:m,supportsCurves:l},Symbol.toStringTag,{value:"Module"}))},58067:(e,t,n)=>{n.r(t),n.d(t,{fromExtent:()=>P,fromGeometry:()=>p,fromMultipoint:()=>G,fromPoint:()=>C,fromPolygon:()=>V,fromPolyline:()=>S,fromSpatialReference:()=>N,getSpatialReference:()=>y,toExtent:()=>v,toGeometry:()=>b,toMultipoint:()=>_,toPoint:()=>R,toPolygon:()=>M,toPolyline:()=>w});var r=n(26871),s=(n(21557),n(97799)),o=n(91523),i=n(79186),a=n(82103),u=n(76797),c=n(66388),m=n(19247),l=n(65215),g=n(23701),f=(n(59739),n(48045));const h="_gxVersion",d=2,x=1;function y(e){return Array.isArray(e)?e[0].spatialReference:e.spatialReference}function p(e){switch(e.type){case"point":return C(e);case"multipoint":return G(e);case"polyline":return S(e);case"polygon":return V(e);case"extent":return P(e);default:throw new Error(`Unsupported geometry type: ${e.type}`)}}function P(e){if(!e.getCacheValue(h)){const t=new o.E;t.setCoords(e.xmin,e.ymin,e.xmax,e.ymax),e.hasM&&t.setInterval(d,0,e.mmin,e.mmax),e.hasZ&&t.setInterval(x,0,e.zmin,e.zmax),e.setCacheValue(h,t)}return e.getCacheValue(h)}function G(e){if(!e.getCacheValue(h)){const t=new i.M,n=new o.P,r=e.points,s=e.hasM,a=e.hasZ,u=a?3:2;for(let e=0,o=r.length;e<o;e++){const o=r[e];n.setXYCoords(o[0],o[1]),a&&n.setZ(o[2]??0),s&&n.setM(o[u]??NaN),t.add(n)}e.setCacheValue(h,t)}return e.getCacheValue(h)}function C(e){if(!e.getCacheValue(h)){const t=new o.P;t.setXYCoords(e.x,e.y),e.hasM&&t.setM(e.m),e.hasZ&&t.setZ(e.z),e.setCacheValue(h,t)}return e.getCacheValue(h)}function V(e){if(!e.getCacheValue(h)){const{curveRings:t,hasM:n,hasZ:r,rings:s}=e,o=(0,f.fromGeometryToGXGeometry)({curveRings:t,hasM:n,hasZ:r,rings:s});e.setCacheValue(h,o)}return e.getCacheValue(h)}function S(e){if(!e.getCacheValue(h)){const{curvePaths:t,hasM:n,hasZ:r,paths:s}=e,o=(0,f.fromGeometryToGXGeometry)({curvePaths:t,hasM:n,hasZ:r,paths:s});e.setCacheValue(h,o)}return e.getCacheValue(h)}function N(e){if(e.wkid)return(0,a.c)(e.wkid);const t=e.wkt2||e.wkt;return t?(0,a.b)(t):null}function b(e,t){if(e)switch(e.getGeometryType()){case s.G.enumPoint:return R(e,t);case s.G.enumEnvelope:return v(e,t);case s.G.enumMultiPoint:return _(e,t);case s.G.enumPolyline:return w(e,t);case s.G.enumPolygon:return M(e,t)}return null}function v(e,t){if(e.isEmpty())return null;const n=new u.A({xmin:e.getXMin(),ymin:e.getYMin(),xmax:e.getXMax(),ymax:e.getYMax(),spatialReference:t}),r=e.getDescription();if(r.hasM()){const t=e.queryInterval(d,0);n.mmin=t.vmin,n.mmax=t.vmax}if(r.hasZ()){const t=e.queryInterval(x,0);n.zmin=t.vmin,n.zmax=t.vmax}return n.setCacheValue(h,e),n}function _(e,t){if(e.isEmpty())return null;const n=e.getDescription(),r=n.hasM(),s=n.hasZ(),i=[],a=new o.P;for(let o=0,c=e.getPointCount();o<c;o++){e.getPointByVal(o,a);const t=[a.getX(),a.getY()];s&&t.push(a.getZ()),r&&t.push(a.getM()),i.push(t)}const u=new c.A({hasM:r,hasZ:s,points:i,spatialReference:t});return u.setCacheValue(h,e),u}function R(e,t){if(e instanceof r.P)return new m.A({x:e.x,y:e.y,spatialReference:t});if(e.isEmpty())return null;const n=new m.A({x:e.getX(),y:e.getY(),spatialReference:t}),s=e.getDescription();return s.hasM()&&(n.m=e.getM()),s.hasZ()&&(n.z=e.getZ()),n.setCacheValue(h,e),n}function M(e,t){if(e.isEmpty())return null;const n=l.A.fromJSON({spatialReference:t,...(0,f.toGeometry)(e,null)});return n.setCacheValue(h,e),n}function w(e,t){if(e.isEmpty())return null;const n=g.A.fromJSON({spatialReference:t,...(0,f.toGeometry)(e,null)});return n.setCacheValue(h,e),n}},68707:(e,t,n)=>{n.d(t,{G:()=>r,S:()=>s});class r{*[Symbol.iterator](){let e=this.next();for(;e;)yield e,e=this.next()}}class s extends r{constructor(e){super(),this.m_iGeom=-1,this.m_aGeoms=e?e.slice():[]}next(){if(this.m_iGeom<this.m_aGeoms.length-1){const e=this.m_aGeoms[++this.m_iGeom];return this.m_aGeoms[this.m_iGeom]=null,e}return null}tock(){return!1}getGeometryID(){return this.m_iGeom}getRank(){return 1}}},78429:(e,t,n)=>{n.d(t,{O:()=>g});var r=n(97799),s=n(21557),o=n(26871),i=n(82103);function a(){return u(new o.P,-1,Number.NaN)}function u(e,t,n){return{m_coordinate:e.clone(),m_vertexIndex:t,m_geometryIndex:0,m_distance:n,m_bRightSide:!1,isEmpty:c}}function c(){return Number.isNaN(this.m_distance)}function m(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:-1;if(e.isEmpty())return 3;const u=e.getGeometryType();if((0,r.f)(u))return function(e,t,n,s){if(n>=0||s>=0)return(0,r.t)("");if(e.isDegenerate(0))return e.getStartXY().equals(t)?2:3;if(!e.isCurve()){const n=o.P.orientationRobust(t,e.getStartXY(),e.getEndXY());return n<0?1:n>0?0:2}const i=e.getClosestCoordinate(t,!1),a=e.getTangent(i),u=e.getCoord2D(i),c=o.P.orientationRobust(t,u,u.add(a));return c<0?1:c>0?0:2}(e,t,n,a);if(u===r.G.enumPolygon)return function(e,t,n,o){(n>=0||o>=0)&&(0,r.t)("");const a=new s.J;e.queryEnvelope(a);const u=(0,i.i)(e,t,0);return 0===u?0:1===u?1:2}(e,t,n,a);if(u===r.G.enumPolyline)return function(e,t,n,s){(n<0&&s>=0||n>=0&&s<0)&&(0,r.t)("");const i=e.querySegmentIterator();if(n<0){let e=Number.MAX_VALUE,r=0;for(;i.nextPath();)for(;i.hasNextSegment();){const a=i.nextSegment(),u=a.getClosestCoordinate(t,!1),c=a.getCoord2D(u),m=o.P.sqrDistance(c,t);m<e?(r=1,n=i.getStartPointIndex(),s=i.getPathIndex(),e=m):m===e&&r++}if(0===r)return 3;if(1===r)return i.resetToVertex(n,s),m(i.nextSegment(),t)}const a=function(e,t,n,r){const s={i1:-1,i2:-1,bRight1:!1,bRight2:!1};if(s.i1=function(e,t,n){for(e.resetToVertex(t,n);e.hasNextSegment();)if(!e.nextSegment().isDegenerate(0))return e.getStartPointIndex();for(e.resetToVertex(t,n);e.hasPreviousSegment();)if(!e.previousSegment().isDegenerate(0))return e.getStartPointIndex();return-1}(t,n,r),-1!==s.i1){t.resetToVertex(s.i1,-1);const n=t.nextSegment(),r=n.getClosestCoordinate(e,!1),i=n.getCoord2D(r),a=o.P.sqrDistance(i,e);{const t=i.clone();t.subThis(n.getStartXY());const r=e.clone();r.subThis(n.getStartXY()),s.bRight1=t.crossProduct(r)<0}if(s.i2=function(e,t){for(e.resetToVertex(t,-1),e.nextSegment();e.hasNextSegment();)if(!e.nextSegment().isDegenerate(0))return e.getStartPointIndex();return-1}(t,s.i1),-1!==s.i2){t.resetToVertex(s.i2,-1);const n=t.nextSegment(),r=n.getClosestCoordinate(e,!1),i=n.getCoord2D(r);if(o.P.sqrDistance(i,e)>a)s.i2=-1;else{const t=i.clone();t.subThis(n.getStartXY());const r=e.clone();r.subThis(n.getStartXY()),s.bRight2=t.crossProduct(r)<0}}if(-1===s.i2&&(s.i2=function(e,t){for(e.resetToVertex(t,-1);e.hasPreviousSegment();)if(!e.previousSegment().isDegenerate(0))return e.getStartPointIndex();return-1}(t,s.i1),-1!==s.i2)){t.resetToVertex(s.i2,-1);const n=t.nextSegment(),r=n.getClosestCoordinate(e,!1),i=n.getCoord2D(r);if(o.P.sqrDistance(i,e)>a)s.i2=-1;else{const t=i.clone();t.subThis(n.getStartXY());const r=e.clone();r.subThis(n.getStartXY()),s.bRight2=t.crossProduct(r)<0;const o=s.i1;s.i1=s.i2,s.i2=o;const a=s.bRight1;s.bRight1=s.bRight2,s.bRight2=a}}}return s}(t,i,n,s);if(-1!==a.i1&&-1===a.i2)return a.bRight1?1:0;if(-1!==a.i1&&-1!==a.i2){if(a.bRight1===a.bRight2)return a.bRight1?1:0;{i.resetToVertex(a.i1,-1);const e=i.nextSegment().getTangent(1);i.resetToVertex(a.i2,-1);const t=i.nextSegment().getTangent(0);return e.crossProduct(t)>=0?1:0}}return i.resetToVertex(n,s),m(i.nextSegment(),t)}(e,t,n,a);if(u===r.G.enumEnvelope){const n=new s.J;return e.queryEnvelope(n),n.contains(t)?n.containsExclusive(t)?1:2:0}return 3}var l=n(91523);class g{getOperatorType(){return 10500}accelerateGeometry(e,t,n){return!1}canAccelerateGeometry(e){return!1}supportsCurves(){return!0}getNearestCoordinate(e,t,n,s){if(t.isNAN()&&(0,r.t)("NAN xy coordinates are not allowed"),e.isEmpty())return a();switch(e.getGeometryType()){case r.G.enumPoint:return this.pointGetNearestVertex(e,t);case r.G.enumMultiPoint:return this.multiVertexGetNearestVertex(e,t);case r.G.enumPolyline:case r.G.enumPolygon:return this.multiPathGetNearestCoordinate(e,t,n,s);default:(0,r.b)("")}}getNearestVertex(e,t){if(t.isNAN()&&(0,r.t)("NAN xy coordinates are not allowed"),e.isEmpty())return a();switch(e.getGeometryType()){case r.G.enumPoint:return this.pointGetNearestVertex(e,t);case r.G.enumMultiPoint:case r.G.enumPolyline:case r.G.enumPolygon:return this.multiVertexGetNearestVertex(e,t);default:(0,r.b)("")}}getNearestVertices(e,t,n,s){if(0===s&&(0,r.t)(""),t.isNAN()&&(0,r.t)("NAN xy coordinates are not allowed"),e.isEmpty())return[];switch(e.getGeometryType()){case r.G.enumPoint:return this.pointGetNearestVertices(e,t,n,s);case r.G.enumMultiPoint:case r.G.enumPolyline:case r.G.enumPolygon:return this.multiVertexGetNearestVertices(e,t,n,s);default:(0,r.b)("")}}multiPathGetNearestCoordinate(e,t,n,a){if(e.getGeometryType()===r.G.enumPolygon&&n){const n=new s.J;e.queryEnvelope(n);const r=(0,l.c)(null,n,!1);let o;if(o=(0,i.i)(e,t,a?0:r),0!==o){const e=u(t,-1,0);return a&&(e.m_bRightSide=!0),e}}const c=e.querySegmentIterator(),g=new o.P;let f=-1,h=-1,d=Number.MAX_VALUE,x=0;for(;c.nextPath();)for(;c.hasNextSegment();){const e=c.nextSegment(),n=e.getClosestCoordinate(t,!1),r=e.getCoord2D(n),s=o.P.sqrDistance(r,t);s<d?(x=1,g.assign(r),f=c.getStartPointIndex(),h=c.getPathIndex(),d=s):s===d&&x++}-1===f&&(0,r.t)("");const y=u(g,f,Math.sqrt(d));if(a)if(e.getGeometryType()!==r.G.enumPolygon){let n=!1;if(x>1){const r=m(e,t,f,h);n=0!==r&&3!==r}else{c.resetToVertex(f,h);n=0!==m(c.nextSegment(),t)}y.m_bRightSide=n}else n||0!==(0,i.i)(e,t,0)&&(y.m_bRightSide=!0);return y}pointGetNearestVertex(e,t){const n=e.getXY();return u(n,0,o.P.distance(n,t))}multiVertexGetNearestVertex(e,t){const n=e.getAttributeStreamRef(0),r=e.getPointCount();let s=-1;const i=new o.P;let a=Number.MAX_VALUE;const c=new o.P;for(let u=0;u<r;u++){n.queryPoint2D(2*u,c);const e=o.P.sqrDistance(c,t);e<a&&(i.assign(c),s=u,a=e)}return u(i,s,Math.sqrt(a))}pointGetNearestVertices(e,t,n,r){const s=[];if(0!==r){const r=n*n,i=e.getXY(),a=o.P.sqrDistance(i,t);a<=r&&s.push(u(i,0,Math.sqrt(a)))}return s}multiVertexGetNearestVertices(e,t,n,r){const s=[];if(0!==r){const i=e.getAttributeStreamRef(0),a=e.getPointCount();s.length=r+1;const c=n*n;for(let e=0;e<a;e++){const n=i.read(2*e),r=i.read(2*e+1),a=t.x-n,m=t.y-r,l=a*a+m*m;l<=c&&s.push(u(o.P.construct(n,r),e,Math.sqrt(l)))}s.sort(((e,t)=>e.m_distance-t.m_distance))}return s.slice(0,r)}}}}]);
//# sourceMappingURL=6651.97aa7ddd.chunk.js.map