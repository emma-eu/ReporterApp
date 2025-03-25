"use strict";(self.webpackChunkfeedback_map=self.webpackChunkfeedback_map||[]).push([[6048,8707],{23123:(e,t,n)=>{n.d(t,{fz:()=>h,g7:()=>y,qT:()=>G,zo:()=>f});var r=n(68707),o=n(97799),u=n(91523),i=n(79186),s=n(21557);class m extends r.G{constructor(e,t,n){super(),t||(0,o.t)(""),this.m_progressTracker=n,this.m_index=-1,this.m_bMerge=e,this.m_bDone=!1,this.m_inputGeometryCursor=t}getGeometryID(){return this.m_index}tock(){return!0}getRank(){return 1}next(){if(this.m_bMerge){if(!this.m_bDone){const e=c(this.m_inputGeometryCursor);return this.m_bDone=!0,e}return null}if(!this.m_bDone){const e=this.m_inputGeometryCursor.next();if(null!==e)return(0,o.l)(e),(0,o.d)(e),this.m_index=this.m_inputGeometryCursor.getGeometryID(),a(e);this.m_bDone=!0}return null}}function c(e,t){const n=new i.C;let r;for(;r=e.next();)(0,o.l)(r),(0,o.d)(r),n.addGeometry(r);return n.getBoundingGeometry()}function a(e,t){if(e||(0,o.t)(""),(0,o.l)(e),(0,o.d)(e),e.isEmpty())return e.createInstance();const n=e.getGeometryType();if((0,o.f)(n)){const t=e;if(t.getStartXY().equals(t.getEndXY())){const e=new u.P;return t.queryStart(e),e}{const n=new u.P,r=new i.P({vd:e.getDescription()});return t.queryStart(n),r.startPathPoint(n),t.queryEnd(n),r.lineToPoint(n),r}}if(n===o.G.enumEnvelope){const t=e,n=new s.J;if(t.queryEnvelope(n),n.xmin===n.xmax&&n.ymin===n.ymax){const e=new u.P;return t.queryCornerByVal(0,e),e}if(n.xmin===n.xmax||n.ymin===n.ymax){const n=new u.P,r=new i.P({vd:e.getDescription()});return t.queryCornerByVal(0,n),r.startPathPoint(n),t.queryCornerByVal(1,n),r.lineToPoint(n),r}{const n=new i.a({vd:e.getDescription()});return n.addEnvelope(t,!1),n}}if(n===o.G.enumGeometryCollection)return c((0,i.g)(e,-1));if(l(e)){if(n===o.G.enumMultiPoint){const t=e,n=new u.P;return t.getPointByVal(0,n),n}return e}return(0,i.f)(e)}function l(e,t){if((0,o.l)(e),(0,o.d)(e),e.isEmpty())return!0;const n=e.getGeometryType();if(n===o.G.enumPoint)return!0;if(n===o.G.enumEnvelope){const t=e;return t.getXMin()!==t.getXMax()&&t.getYMin()!==t.getYMax()}if((0,o.f)(n)){const t=e;return!t.getStartXY().equals(t.getEndXY())}if(n===o.G.enumMultiPoint)return 1===e.getPointCount();if(n===o.G.enumPolyline){const t=e;return 1===t.getPathCount()&&2===t.getPointCount()&&!t.getXY(0).equals(t.getXY(1))}if(n===o.G.enumGeometryCollection){const t=e;return 1===t.getGeometryCount()&&l(t.getGeometry(0))}const r=e;return!(1!==r.getPathCount()||r.getPointCount()<3)&&(0,i.i)(r,0)}const g=new class{getOperatorType(){return 10102}supportsCurves(){return!1}accelerateGeometry(e,t,n){return!1}canAccelerateGeometry(e){return!1}executeMany(e,t,n){return new m(t,e,n)}execute(e,t){return a(e)}isConvex(e,t){if((0,o.l)(e),(0,o.d)(e),e.isEmpty())return!0;const n=e.getGeometryType();if(n===o.G.enumPoint)return!0;if(n===o.G.enumEnvelope){const t=e;return t.getXMin()!==t.getXMax()&&t.getYMin()!==t.getYMax()}if((0,o.f)(n)){const t=e;return!t.getStartXY().equals(t.getEndXY())}if(n===o.G.enumMultiPoint)return 1===e.getPointCount();if(n===o.G.enumPolyline){const t=e;return 1===t.getPathCount()&&2===t.getPointCount()&&!t.getXY(0).equals(t.getXY(1))}if(n===o.G.enumGeometryCollection){const n=e;return 1===n.getGeometryCount()&&this.isConvex(n.getGeometry(0),t)}const r=e;return!(1!==r.getPathCount()||r.getPointCount()<3)&&(0,i.i)(r,0)}constructOrientedMinimumBoundingBox(e,t,n,r,o){(0,i.e)(e,t,n,r,o)}};function y(e){return g.execute(e,null)}function f(e,t){const n=g.executeMany(new r.S(e),t,null);return Array.from(n)}function G(e){return g.isConvex(e,null)}function h(){return g.supportsCurves()}},56048:(e,t,n)=>{n.r(t),n.d(t,{execute:()=>u,executeMany:()=>i,isConvex:()=>s});var r=n(23123),o=n(48045);function u(e){const t=(0,o.fromGeometry)(e);return(0,o.toGeometry)((0,r.g7)(t.getGeometry()),t.getSpatialReference())}function i(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{merge:n=!1}=t,[u,i]=(0,o.fromGeometries)(e);return(0,r.zo)(u,n).map((e=>(0,o.toGeometry)(e,i)))}function s(e){return(0,r.qT)((0,o.fromGeometryToGXGeometry)(e))}},68707:(e,t,n)=>{n.d(t,{G:()=>r,S:()=>o});class r{*[Symbol.iterator](){let e=this.next();for(;e;)yield e,e=this.next()}}class o extends r{constructor(e){super(),this.m_iGeom=-1,this.m_aGeoms=e?e.slice():[]}next(){if(this.m_iGeom<this.m_aGeoms.length-1){const e=this.m_aGeoms[++this.m_iGeom];return this.m_aGeoms[this.m_iGeom]=null,e}return null}tock(){return!1}getGeometryID(){return this.m_iGeom}getRank(){return 1}}}}]);
//# sourceMappingURL=6048.b495db74.chunk.js.map