"use strict";(self.webpackChunkfeedback_map=self.webpackChunkfeedback_map||[]).push([[5178],{85178:(t,r,s)=>{s.d(r,{default:()=>h});var n=s(26871),e=s(16364),i=s(15941);const o={uniform:0,conformal:1,rigid:2,"rigid-motion":3,general:4},a=t=>t.map((t=>new n.P(t.x,t.y)));class h{constructor(){this.transform=new e.T}calculateErrors(t,r){const s=t.length,n=r.length;if(s!==n)throw new Error(`The input length (${s}) is not the same as output length (${n})`);const e=[];return{rms:this.transform.calculateErrors(s,a(t),a(r),e),errorsOut:e}}flipX(t,r){return this.transform.flipX(t,r),this}flipY(t,r){return this.transform.flipY(t,r),this}initializeFromControlPoints(t,r,s,n){const e=r.length,i=s.length;if(e!==i)throw new Error(`The input length (${e}) is not the same as output length (${i})`);this.transform.initializeFromControlPoints(o[t],e,a(r),a(s),n?.transform)}isIdentity(){return this.transform.isIdentity()}rotate(t,r,s){const e=(0,i.kU)(t);return null!=r&&null!=s?this.transform.rotateAngleAbout(e,new n.P(r,s)):this.transform.rotateAngle(e),this}scale(t,r){return this.transform.scale(t,r),this}setIdentity(){this.transform.setIdentity()}setSwapCoordinates(){return this.transform.setSwapCoordinates(),this}shear(t,r){return this.transform.shear(t,r),this}shift(t,r){return this.transform.shiftCoords(t,r),this}}}}]);
//# sourceMappingURL=5178.216d1ac5.chunk.js.map