"use strict";(self.webpackChunkfeedback_map=self.webpackChunkfeedback_map||[]).push([[842],{10947:(t,n,e)=>{e.d(n,{a:()=>i,b:()=>f,l:()=>a,n:()=>l,t:()=>u});var r=e(99746),o=(e(81806),e(76460));function i(t,n,e){u(t.typedBuffer,n.typedBuffer,e,t.typedBufferStride,n.typedBufferStride)}function u(t,n,e){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:4,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r;if(t.length/r!=n.length/o)return;const i=t.length/r,u=e[0],l=e[1],c=e[2],a=e[3],f=e[4],s=e[5],p=e[6],g=e[7],d=e[8];let h=0,m=0;for(let y=0;y<i;y++){const e=n[h],i=n[h+1],y=n[h+2],A=n[h+3];t[m]=u*e+a*i+p*y,t[m+1]=l*e+f*i+g*y,t[m+2]=c*e+s*i+d*y,t[m+3]=A,h+=o,m+=r}}function l(t,n){const e=Math.min(t.count,n.count),r=t.typedBuffer,o=t.typedBufferStride,i=n.typedBuffer,u=n.typedBufferStride;for(let l=0;l<e;l++){const t=l*o,n=l*u,e=i[n],c=i[n+1],a=i[n+2],f=e*e+c*c+a*a;if(f>0){const n=1/Math.sqrt(f);r[t]=n*e,r[t+1]=n*c,r[t+2]=n*a}}}function c(t,n,e){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:4;const o=Math.min(t.length/r,n.count),i=n.typedBuffer,u=n.typedBufferStride;let l=0,c=0;for(let a=0;a<o;a++)t[c]=e*i[l],t[c+1]=e*i[l+1],t[c+2]=e*i[l+2],t[c+3]=e*i[l+3],l+=u,c+=r}function a(t,n,e,r){f(t.typedBuffer,n,e,r,t.typedBufferStride)}function f(t,n,e,o){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:4;const u=Math.min(t.length/i,n.count),l=n.typedBuffer,c=n.typedBufferStride;let a=0,f=0;const s=1/r.Tf;for(let r=0;r<u;r++)t[f]=o*(e*l[a])**s,t[f+1]=o*(e*l[a+1])**s,t[f+2]=o*(e*l[a+2])**s,t[f+3]=o*e*l[a+3],a+=c,f+=i}Object.freeze(Object.defineProperty({__proto__:null,linearToSRGB:f,linearToSRGBView:a,normalize:l,scale:c,scaleView:function(t,n,e){c(t.typedBuffer,n,e,t.typedBufferStride)},transformMat3:u,transformMat3View:i,transformMat4:function(t,n,e){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:4,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r;if(t.length/r!=n.length/i)return void o.A.getLogger("esri.views.3d.support.buffer.math").error("source and destination buffers need to have the same number of elements");const u=t.length/r,l=e[0],c=e[1],a=e[2],f=e[3],s=e[4],p=e[5],g=e[6],d=e[7],h=e[8],m=e[9],y=e[10],A=e[11],M=e[12],T=e[13],v=e[14],R=e[15];let N=0,x=0;for(let o=0;o<u;o++){const e=n[N],o=n[N+1],u=n[N+2],E=n[N+3];t[x]=l*e+s*o+h*u+M*E,t[x+1]=c*e+p*o+m*u+T*E,t[x+2]=a*e+g*o+y*u+v*E,t[x+3]=f*e+d*o+A*u+R*E,N+=i,x+=r}},transformMat4View:function(t,n,e){if(t.count!==n.count)return;const r=t.count,o=e[0],i=e[1],u=e[2],l=e[3],c=e[4],a=e[5],f=e[6],s=e[7],p=e[8],g=e[9],d=e[10],h=e[11],m=e[12],y=e[13],A=e[14],M=e[15],T=t.typedBuffer,v=t.typedBufferStride,R=n.typedBuffer,N=n.typedBufferStride;for(let x=0;x<r;x++){const t=x*v,n=x*N,e=R[n],r=R[n+1],E=R[n+2],O=R[n+3];T[t]=o*e+c*r+p*E+m*O,T[t+1]=i*e+a*r+g*E+y*O,T[t+2]=u*e+f*r+d*E+A*O,T[t+3]=l*e+s*r+h*E+M*O}}},Symbol.toStringTag,{value:"Module"}))},19555:(t,n,e)=>{e.d(n,{$A:()=>v,Bw:()=>m,C:()=>o,Cc:()=>R,Io:()=>d,Ln:()=>g,Om:()=>T,Re:()=>l,S8:()=>M,T9:()=>s,Vj:()=>w,WQ:()=>u,ZF:()=>N,aI:()=>C,e$:()=>E,g7:()=>O,hG:()=>h,hZ:()=>i,hs:()=>p,jb:()=>b,jk:()=>f,l0:()=>x,m3:()=>y,t2:()=>S,xg:()=>P,ze:()=>A});var r=e(53494);function o(t,n){return t[0]=n[0],t[1]=n[1],t}function i(t,n,e){return t[0]=n,t[1]=e,t}function u(t,n,e){return t[0]=n[0]+e[0],t[1]=n[1]+e[1],t}function l(t,n,e){return t[0]=n[0]-e[0],t[1]=n[1]-e[1],t}function c(t,n,e){return t[0]=n[0]*e[0],t[1]=n[1]*e[1],t}function a(t,n,e){return t[0]=n[0]/e[0],t[1]=n[1]/e[1],t}function f(t,n,e){return t[0]=Math.min(n[0],e[0]),t[1]=Math.min(n[1],e[1]),t}function s(t,n,e){return t[0]=Math.max(n[0],e[0]),t[1]=Math.max(n[1],e[1]),t}function p(t,n,e){return t[0]=n[0]*e,t[1]=n[1]*e,t}function g(t,n,e,r){return t[0]=n[0]+e[0]*r,t[1]=n[1]+e[1]*r,t}function d(t,n){const e=n[0]-t[0],r=n[1]-t[1];return Math.sqrt(e*e+r*r)}function h(t,n){const e=n[0]-t[0],r=n[1]-t[1];return e*e+r*r}function m(t){const n=t[0],e=t[1];return Math.sqrt(n*n+e*e)}function y(t){const n=t[0],e=t[1];return n*n+e*e}function A(t,n){return t[0]=-n[0],t[1]=-n[1],t}function M(t,n){const e=n[0],r=n[1];let o=e*e+r*r;return o>0&&(o=1/Math.sqrt(o),t[0]=n[0]*o,t[1]=n[1]*o),t}function T(t,n){return t[0]*n[0]+t[1]*n[1]}function v(t,n,e){const r=n[0]*e[1]-n[1]*e[0];return t[0]=t[1]=0,t[2]=r,t}function R(t,n,e,r){const o=n[0],i=n[1];return t[0]=o+r*(e[0]-o),t[1]=i+r*(e[1]-i),t}function N(t,n,e){const r=n[0],o=n[1];return t[0]=e[0]*r+e[2]*o,t[1]=e[1]*r+e[3]*o,t}function x(t,n,e){const r=n[0],o=n[1];return t[0]=e[0]*r+e[2]*o+e[4],t[1]=e[1]*r+e[3]*o+e[5],t}function E(t,n,e,r){const o=n[0]-e[0],i=n[1]-e[1],u=Math.sin(r),l=Math.cos(r);return t[0]=o*l-i*u+e[0],t[1]=o*u+i*l+e[1],t}function O(t,n){const e=t[0],r=t[1],o=n[0],i=n[1];let u=e*e+r*r;u>0&&(u=1/Math.sqrt(u));let l=o*o+i*i;l>0&&(l=1/Math.sqrt(l));const c=(e*o+r*i)*u*l;return c>1?0:c<-1?Math.PI:Math.acos(c)}function S(t,n){return t[0]===n[0]&&t[1]===n[1]}function C(t,n){const e=t[0],o=t[1],i=n[0],u=n[1],l=(0,r.FD)();return Math.abs(e-i)<=l*Math.max(1,Math.abs(e),Math.abs(i))&&Math.abs(o-u)<=l*Math.max(1,Math.abs(o),Math.abs(u))}function w(t,n,e,r,o){let i=n[0]-e[0],u=n[1]-e[1];const l=(r[0]*i+r[1]*u)*(o-1);return i=r[0]*l,u=r[1]*l,t[0]=n[0]+i,t[1]=n[1]+u,t}const _=m,b=l,B=c,F=a,P=d,G=h,q=y;Object.freeze(Object.defineProperty({__proto__:null,add:u,angle:O,ceil:function(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t},copy:o,cross:v,dist:P,distance:d,div:F,divide:a,dot:T,equals:C,exactEquals:S,floor:function(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t},inverse:function(t,n){return t[0]=1/n[0],t[1]=1/n[1],t},len:_,length:m,lerp:R,max:s,min:f,mul:B,multiply:c,negate:A,normalize:M,projectAndScale:w,random:function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;const e=2*(0,r.Ov)()*Math.PI;return t[0]=Math.cos(e)*n,t[1]=Math.sin(e)*n,t},rotate:E,round:function(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t},scale:p,scaleAndAdd:g,set:i,sqrDist:G,sqrLen:q,squaredDistance:h,squaredLength:y,str:function(t){return"vec2("+t[0]+", "+t[1]+")"},sub:b,subtract:l,transformMat2:N,transformMat2d:x,transformMat3:function(t,n,e){const r=n[0],o=n[1];return t[0]=e[0]*r+e[3]*o+e[6],t[1]=e[1]*r+e[4]*o+e[7],t},transformMat4:function(t,n,e){const r=n[0],o=n[1];return t[0]=e[0]*r+e[4]*o+e[12],t[1]=e[1]*r+e[5]*o+e[13],t}},Symbol.toStringTag,{value:"Module"}))},22956:(t,n,e)=>{e.d(n,{projectMeshVertexPositions:()=>l});var r=e(45308),o=e(14894),i=e(80963),u=e(53848);function l(t,n){const e=(0,u.UR)(t,o.A.absolute);if(!e)return null;let l=e.position;return(0,i.aI)(t.spatialReference,n)||(l=new Float64Array(e.position.length),(0,r.projectBuffer)(e.position,t.spatialReference,0,l,n,0))?l:null}},26375:(t,n,e)=>{e.d(n,{$5:()=>N,CN:()=>M,GN:()=>S,JP:()=>A,KM:()=>E,Mv:()=>_,OD:()=>b,X4:()=>T,gZ:()=>O,gr:()=>R,qs:()=>x,si:()=>v,xA:()=>w});var r=e(15941),o=e(63919),i=e(44680),u=e(34761),l=e(13191),c=e(20664),a=e(9392),f=e(5809),s=e(45308),p=e(14556),g=e(80963),d=e(45417),h=e(88105),m=e(45136),y=e(10947);const A="Projection may be possible after calling projection.load().";function M(t,n,e,r){t.error(`Failed to project from (wkid:${n.wkid}) to (wkid:${e.wkid}).${r?" ":""}${r}`)}function T(t,n,e,r,o,i){return G(B.TO_PCPF,h.xs.fromTypedArray(t),b.NORMAL,h.Xm.fromTypedArray(n),e,h.Xm.fromTypedArray(r),o,h.xs.fromTypedArray(i))?i:null}function v(t,n,e,r,o,i){return G(B.FROM_PCPF,h.xs.fromTypedArray(t),b.NORMAL,h.Xm.fromTypedArray(n),e,h.Xm.fromTypedArray(r),o,h.xs.fromTypedArray(i))?i:null}function R(t,n,e,r){return(0,s.projectBuffer)(t,n,0,e,r,0)?e:null}function N(t,n,e,r){return(0,s.projectBuffer)(t,n,0,e,r,0)?e:null}function x(t,n,e){return(0,o.Ge)(L,e),(0,m.b)(n,t,L),(0,r.or)(L)&&(0,m.n)(n,n),n}function E(t,n,e){return(0,o.z0)(L,e),(0,y.t)(n,t,L),(0,r.or)(L)&&(0,m.n)(n,n,4),n}function O(t,n,e,o){const i=n===b.NORMAL;return C(t,n,e,((t,n)=>{const e=Math.cos((0,r.kU)(t));n[0]=i?e:1/e,n[1]=1}),o)}function S(t,n,e,r){const o=n===b.NORMAL;return C(t,n,e,((t,n)=>{const e=Math.cosh(-t/p.$O.radius);n[0]=1,n[1]=o?e:1/e}),r)}function C(t,n,e,r,o){const i=n===b.NORMAL?3:4,u=[0,0];for(let l=0,c=1;l<t.length;l+=i,c+=3){r(e[c],u);const n=t[l]*u[0],a=t[l+1]*u[1],f=t[l+2],s=1/Math.sqrt(n*n+a*a+f*f);o[l]=n*s,o[l+1]=a*s,o[l+2]=f*s,4===i&&(o[l+3]=t[l+3])}return o}function w(t,n,e,r,o,i){if(!G(B.TO_PCPF,h.xs.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT),b.TANGENT,h.Xm.fromTypedArray(n),e,h.Xm.fromTypedArray(r),o,h.xs.fromTypedArray(i,4*Float32Array.BYTES_PER_ELEMENT)))return null;for(let u=3;u<t.length;u+=4)i[u]=t[u];return i}function _(t,n,e,r,o,i){if(!G(B.FROM_PCPF,h.xs.fromTypedArray(t,16),b.TANGENT,h.Xm.fromTypedArray(n),e,h.Xm.fromTypedArray(r),o,h.xs.fromTypedArray(i,16)))return null;for(let u=3;u<t.length;u+=4)i[u]=t[u];return i}var b,B,F;function P(t,n,e,r,i){switch((0,f.l)(r,e,j,r),t===B.FROM_PCPF&&(0,u.B8)(j,j),n){case b.NORMAL:return(0,o.Ge)(i,j);case b.TANGENT:return(0,o.z0)(i,j)}}function G(t,n,e,r,o,i,u,l){if(!n)return;const a=r.count;if(function(t){return t.isWGS84||(0,g.x1)(t)||(0,g.q8)(t)||(0,g.KQ)(t)}(o))for(let f=0;f<a;f++)i.getVec(f,q),n.getVec(f,U),(0,c.q)(U,U,P(t,e,q,u,L)),l.setVec(f,U);else for(let f=0;f<a;f++){i.getVec(f,q),n.getVec(f,U);const o=(0,d.jg)(r.get(f,1));let a=Math.cos(o);e===b.TANGENT!=(t===B.TO_PCPF)&&(a=1/a),P(t,e,q,u,L),t===B.TO_PCPF?(L[0]*=a,L[1]*=a,L[2]*=a,L[3]*=a,L[4]*=a,L[5]*=a):(L[0]*=a,L[3]*=a,L[6]*=a,L[1]*=a,L[4]*=a,L[7]*=a),(0,c.q)(U,U,L),(0,c.n)(U,U),l.setVec(f,U)}return l}(F=b||(b={}))[F.NORMAL=0]="NORMAL",F[F.TANGENT=1]="TANGENT",function(t){t[t.TO_PCPF=0]="TO_PCPF",t[t.FROM_PCPF=1]="FROM_PCPF"}(B||(B={}));const q=(0,a.vt)(),U=(0,a.vt)(),j=(0,l.vt)(),L=(0,i.vt)()},53848:(t,n,e)=>{e.d(n,{UR:()=>v,p5:()=>T,xK:()=>S});var r=e(76460),o=e(15941),i=e(31633),u=e(63919),l=e(44680),c=e(34761),a=e(13191),f=e(20664),s=e(9392),p=e(98510),g=e(5809),d=e(64232),h=e(99773),m=e(80963),y=e(45136),A=e(26375);const M=()=>r.A.getLogger("esri.geometry.support.meshUtils.vertexSpaceConversion");function T(t,n,e){let{vertexSpace:r,spatialReference:o}=e;if("georeferenced"===r.type){const e=t;if(!(0,d.g)(n,e,o))return!1;const{origin:i}=r;return(0,f.d)(t,e,i),!0}const i=(0,p.lO)(o),u=t;if(!(0,d.g)(n,u,i))return!1;const{origin:l}=r,a=B;if(!(0,g.l)(o,l,a,i))return!1;const s=(0,c.B8)(B,a);return null!=s&&((0,f.t)(t,u,s),!0)}function v(t,n,e){const{vertexSpace:r,transform:o,vertexAttributes:i}=t,l=(0,h.Hq)(r)?o:null,s=E(t.spatialReference,e,F.SOURCE_AND_TARGET);if((0,h.yJ)(r,n)&&(!l||(0,c.t2)(l.localMatrix,a.zK))&&O(s)){const{position:t,normal:n,tangent:r}=i,o=e?.allowBufferReuse;return{position:o?t:t.slice(),normal:o?n:n?.slice(),tangent:o?r:r?.slice()}}switch(t.vertexSpace.type){case"local":return"local"===n.type?function(t,n,e,r){let{vertexAttributes:o,spatialReference:i,transform:u}=t,{origin:l}=n;const a=R(i,r);if(!(0,g.l)(i,l,C,a))return(0,A.CN)(M(),i,a),null;if(u&&(0,c.lw)(C,C,u.localMatrix),!(0,g.l)(i,e,w,a))return(0,A.CN)(M(),a,i),null;(0,c.B8)(w,w);const f=(0,c.lw)(C,w,C);return x(f,i,r,F.SOURCE_AND_TARGET),N(o,f)}(t,t.vertexSpace,n.origin,e):function(t,n,e,r){let{spatialReference:o,vertexAttributes:i,transform:u}=t,{origin:l}=n;const a=R(o,r);if(!(0,g.l)(o,l,C,a))return(0,A.CN)(M(),o,a),null;u&&(0,c.lw)(C,C,u.localMatrix),x(C,o,r,F.SOURCE);const s=new Float64Array(i.position.length),p=function(t,n,e,r,o){(0,y.t)(r,t,n);const i=new Float64Array(t.length);return(0,A.$5)(r,o,i,e)?i:((0,A.CN)(M(),o,e),null)}(i.position,C,o,s,a);if(!p)return null;const d=function(t,n,e,r,o,i){if(null==o)return null;const u=new Float32Array(o.length);return(0,A.qs)(o,u,i),(0,A.si)(u,t,n,e,r,u)?u:((0,A.CN)(M(),r,n),null)}(p,o,s,a,i.normal,C);if(i.normal&&!d)return null;const h=function(t,n,e,r,o,i){if(null==o)return null;const u=new Float32Array(o.length);return(0,A.KM)(o,u,i),(0,A.Mv)(u,t,n,e,r,u)?u:((0,A.CN)(M(),r,n),null)}(p,o,s,a,i.tangent,C);if(i.tangent&&!h)return null;if(e){const t=(0,f.v)(b,e);(0,y.a)(p,p,t)}return{position:p,normal:d,tangent:h}}(t,t.vertexSpace,n.origin,e);case"georeferenced":return"local"===n.type?function(t,n,e,r){let{vertexAttributes:o,spatialReference:i,transform:l}=t,{origin:a}=n;const f=R(i,r);if(!(0,g.l)(i,e,C,f))return(0,A.CN)(M(),i,f),null;const s=1/E(i,r,F.TARGET);(0,c.hs)(C,C,[s,s,s]);const p=(0,c.B8)(w,C),{position:d,normal:h,tangent:m}=function(t,n,e){if(!n)return t;if(!e){const{position:e,normal:r,tangent:o}=t;return{position:(0,y.a)(new Float64Array(e.length),e,n),tangent:o,normal:r}}const r=N(t,e.localMatrix);return(0,y.a)(r.position,r.position,n),r}(o,a,l),T=new Float64Array(d.length),v=function(t,n,e,r,o){const i=(0,A.gr)(t,n,r,o);if(!i)return(0,A.CN)(M(),n,o),null;const u=new Float64Array(i.length);return(0,y.t)(u,i,e),u}(d,i,p,T,f);if(!v)return null;const x=(0,u.Ge)(_,p),O=function(t,n,e,r,o,i,u){if(null==t)return null;const l=u??new Float32Array(t.length);return(0,A.X4)(t,n,e,r,o,l)?((0,y.b)(l,l,i),l):((0,A.CN)(M(),e,o),null)}(h,d,i,T,f,x,h!==o.normal?h:void 0);if(!O&&h)return null;const S=function(t,n,e,r,o,i,u){if(null==t)return null;const l=u??new Float32Array(t.length);return(0,A.xA)(t,n,e,r,o,l)?((0,y.b)(l,l,i,4),l):((0,A.CN)(M(),e,o),null)}(m,d,i,T,f,x,m!==o.tangent?m:void 0);return!S&&m?null:{position:v,normal:O,tangent:S}}(t,t.vertexSpace,n.origin,e):function(t,n,e,r){let{vertexAttributes:o,transform:i,spatialReference:u}=t,{origin:l}=n;const s=E(u,r,F.SOURCE_AND_TARGET),p=l||!O(s)?(0,c.C)(C,i?.localMatrix??a.zK):null;p&&x(p,u,r,F.SOURCE_AND_TARGET);const{position:g,normal:d,tangent:h}=p?N(o,p):o,m=r?.allowBufferReuse,A=m?g:new Float64Array(g.length);let M=g;if(l&&(M=(0,y.a)(A,M,l)),e){const t=(0,f.v)(b,e);M=(0,y.a)(A,M,t)}return{position:M!==o.position||m?M:M.slice(),normal:d!==o.normal||m?d:d?.slice(),tangent:h!==o.tangent||m?h:h?.slice()}}(t,t.vertexSpace,n.origin,e)}}function R(t,n){return n?.useEllipsoid&&(0,m.B3)(t)?p.Y0:(0,p.lO)(t)}function N(t,n){const e=new Float64Array(t.position.length);(0,y.t)(e,t.position,n);const r=t.normal?new Float32Array(t.normal.length):null,o=t.tangent?new Float32Array(t.tangent.length):null;return r&&t.normal&&(0,A.qs)(t.normal,r,n),o&&t.tangent&&(0,A.KM)(t.tangent,o,n),{position:e,normal:r,tangent:o}}function x(t,n,e,r){const o=E(n,e,r);O(o)||(0,c.hs)(t,t,[o,o,o])}function E(t,n,e){const r=!!(e&F.SOURCE),o=!!(e&F.TARGET),i=n?.sourceUnit,u=n?.targetUnit;if(!i&&!u)return 1;let l=S(i,t);r||!i||O(l)||(M().warn("source unit conversion not supported"),l=1);let c=1/S(u,t);return o||!u||O(c)||(M().warn("target unit conversion not supported"),c=1),l*c}function O(t){return(0,o.Io)(t,1)}function S(t,n){if(null==t)return 1;const e=(0,i.KX)(n);return 1/(0,i.oU)(e,"meters",t)}const C=(0,a.vt)(),w=(0,a.vt)(),_=(0,l.vt)(),b=(0,s.vt)(),B=(0,a.vt)();var F,P;(P=F||(F={}))[P.NONE=0]="NONE",P[P.SOURCE=1]="SOURCE",P[P.TARGET=2]="TARGET",P[P.SOURCE_AND_TARGET=3]="SOURCE_AND_TARGET"},99773:(t,n,e)=>{e.d(n,{CK:()=>a,E9:()=>l,Hq:()=>c,MW:()=>f,TE:()=>s,yJ:()=>p});var r=e(20664),o=e(19247),i=e(14894),u=e(5845);function l(t){return null==t.origin}function c(t){return null!=t.origin}function a(t){return c(t.vertexSpace)}function f(t,n){if(!c(t))return null;const[e,r,i]=t.origin;return new o.A({x:e,y:r,z:i,spatialReference:n})}function s(t,n){const{x:e,y:r,z:o,spatialReference:l}=t,c=[e,r,o??0];return"local"===(n?.vertexSpace??function(t){return t.isGeographic||t.isWebMercator?"local":"georeferenced"}(l))?new u.A({origin:c}):new i.A({origin:c})}function p(t,n){return t.type===n.type&&(t.origin===n.origin||null!=t.origin&&null!=n.origin&&(0,r.p)(t.origin,n.origin))}}}]);
//# sourceMappingURL=842.aedd0b1d.chunk.js.map