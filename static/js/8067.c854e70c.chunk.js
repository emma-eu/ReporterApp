"use strict";(self.webpackChunkfeedback_map=self.webpackChunkfeedback_map||[]).push([[8067],{58067:(e,t,n)=>{n.r(t),n.d(t,{fromExtent:()=>M,fromGeometry:()=>x,fromMultipoint:()=>V,fromPoint:()=>w,fromPolygon:()=>P,fromPolyline:()=>G,fromSpatialReference:()=>Z,getSpatialReference:()=>C,toExtent:()=>d,toGeometry:()=>v,toMultipoint:()=>R,toPoint:()=>k,toPolygon:()=>E,toPolyline:()=>A});var a=n(26871),r=(n(21557),n(97799)),s=n(91523),o=n(79186),u=n(82103),i=n(76797),c=n(66388),l=n(19247),m=n(65215),f=n(23701),h=(n(59739),n(48045));const p="_gxVersion",g=2,y=1;function C(e){return Array.isArray(e)?e[0].spatialReference:e.spatialReference}function x(e){switch(e.type){case"point":return w(e);case"multipoint":return V(e);case"polyline":return G(e);case"polygon":return P(e);case"extent":return M(e);default:throw new Error(`Unsupported geometry type: ${e.type}`)}}function M(e){if(!e.getCacheValue(p)){const t=new s.E;t.setCoords(e.xmin,e.ymin,e.xmax,e.ymax),e.hasM&&t.setInterval(g,0,e.mmin,e.mmax),e.hasZ&&t.setInterval(y,0,e.zmin,e.zmax),e.setCacheValue(p,t)}return e.getCacheValue(p)}function V(e){if(!e.getCacheValue(p)){const t=new o.M,n=new s.P,a=e.points,r=e.hasM,u=e.hasZ,i=u?3:2;for(let e=0,s=a.length;e<s;e++){const s=a[e];n.setXYCoords(s[0],s[1]),u&&n.setZ(s[2]??0),r&&n.setM(s[i]??NaN),t.add(n)}e.setCacheValue(p,t)}return e.getCacheValue(p)}function w(e){if(!e.getCacheValue(p)){const t=new s.P;t.setXYCoords(e.x,e.y),e.hasM&&t.setM(e.m),e.hasZ&&t.setZ(e.z),e.setCacheValue(p,t)}return e.getCacheValue(p)}function P(e){if(!e.getCacheValue(p)){const{curveRings:t,hasM:n,hasZ:a,rings:r}=e,s=(0,h.fromGeometryToGXGeometry)({curveRings:t,hasM:n,hasZ:a,rings:r});e.setCacheValue(p,s)}return e.getCacheValue(p)}function G(e){if(!e.getCacheValue(p)){const{curvePaths:t,hasM:n,hasZ:a,paths:r}=e,s=(0,h.fromGeometryToGXGeometry)({curvePaths:t,hasM:n,hasZ:a,paths:r});e.setCacheValue(p,s)}return e.getCacheValue(p)}function Z(e){if(e.wkid)return(0,u.c)(e.wkid);const t=e.wkt2||e.wkt;return t?(0,u.b)(t):null}function v(e,t){if(e)switch(e.getGeometryType()){case r.G.enumPoint:return k(e,t);case r.G.enumEnvelope:return d(e,t);case r.G.enumMultiPoint:return R(e,t);case r.G.enumPolyline:return A(e,t);case r.G.enumPolygon:return E(e,t)}return null}function d(e,t){if(e.isEmpty())return null;const n=new i.A({xmin:e.getXMin(),ymin:e.getYMin(),xmax:e.getXMax(),ymax:e.getYMax(),spatialReference:t}),a=e.getDescription();if(a.hasM()){const t=e.queryInterval(g,0);n.mmin=t.vmin,n.mmax=t.vmax}if(a.hasZ()){const t=e.queryInterval(y,0);n.zmin=t.vmin,n.zmax=t.vmax}return n.setCacheValue(p,e),n}function R(e,t){if(e.isEmpty())return null;const n=e.getDescription(),a=n.hasM(),r=n.hasZ(),o=[],u=new s.P;for(let s=0,c=e.getPointCount();s<c;s++){e.getPointByVal(s,u);const t=[u.getX(),u.getY()];r&&t.push(u.getZ()),a&&t.push(u.getM()),o.push(t)}const i=new c.A({hasM:a,hasZ:r,points:o,spatialReference:t});return i.setCacheValue(p,e),i}function k(e,t){if(e instanceof a.P)return new l.A({x:e.x,y:e.y,spatialReference:t});if(e.isEmpty())return null;const n=new l.A({x:e.getX(),y:e.getY(),spatialReference:t}),r=e.getDescription();return r.hasM()&&(n.m=e.getM()),r.hasZ()&&(n.z=e.getZ()),n.setCacheValue(p,e),n}function E(e,t){if(e.isEmpty())return null;const n=m.A.fromJSON({spatialReference:t,...(0,h.toGeometry)(e,null)});return n.setCacheValue(p,e),n}function A(e,t){if(e.isEmpty())return null;const n=f.A.fromJSON({spatialReference:t,...(0,h.toGeometry)(e,null)});return n.setCacheValue(p,e),n}}}]);
//# sourceMappingURL=8067.c854e70c.chunk.js.map