"use strict";(self.webpackChunkfeedback_map=self.webpackChunkfeedback_map||[]).push([[9671],{4437:(t,n,r)=>{r.d(n,{Z:()=>a,z:()=>e});var o=r(34761);function e(t,n,r){const o=Math.sin(t),e=Math.cos(t),a=Math.sin(n),s=Math.cos(n),u=r;return u[0]=-o,u[4]=-a*e,u[8]=s*e,u[12]=0,u[1]=e,u[5]=-a*o,u[9]=s*o,u[13]=0,u[2]=0,u[6]=s,u[10]=a,u[14]=0,u[3]=0,u[7]=0,u[11]=0,u[15]=1,u}function a(t,n,r){return e(t,n,r),(0,o.mg)(r,r),r}},5809:(t,n,r)=>{r.d(n,{l:()=>c});var o=r(15941),e=r(34761),a=r(9392),s=r(4437),u=r(482),i=r(80963);function c(t,n,r,o){const a=(0,u.Tp)(t,o);if(null==a)return!1;const c=a.source.spatialReferenceId,p=a.dest.spatialReferenceId;if(c===p&&!l(p)&&(c!==u.rz.UNKNOWN||(0,i.aI)(t,o)))return(0,e.kN)(r,n),!0;if(l(p)){const t=u.w5[c][u.rz.LON_LAT],o=u.w5[u.rz.LON_LAT][p];return null!=t&&null!=o&&(t(n,0,f,0),o(f,0,M,0),(0,s.z)(h*f[0],h*f[1],r),r[12]=M[0],r[13]=M[1],r[14]=M[2],!0)}const d=l(c);if((p===u.rz.WEB_MERCATOR||p===u.rz.PLATE_CARREE||p===u.rz.WGS84||p===u.rz.CGCS2000)&&(c===u.rz.WGS84||d||c===u.rz.WEB_MERCATOR||c===u.rz.CGCS2000)){const t=u.w5[c][u.rz.LON_LAT],o=u.w5[u.rz.LON_LAT][p];return null!=t&&null!=o&&(t(n,0,f,0),o(f,0,M,0),d?(0,s.Z)(h*f[0],h*f[1],r):(0,e.D_)(r),r[12]=M[0],r[13]=M[1],r[14]=M[2],!0)}return!1}function l(t){return t===u.rz.SPHERICAL_ECEF||t===u.rz.SPHERICAL_MARS_PCPF||t===u.rz.SPHERICAL_MOON_PCPF||t===u.rz.WGS84_ECEF}const h=(0,o.kU)(1),f=(0,a.vt)(),M=(0,a.vt)()},19555:(t,n,r)=>{r.d(n,{$A:()=>v,Bw:()=>g,C:()=>e,Cc:()=>w,Io:()=>p,Ln:()=>M,Om:()=>A,Re:()=>u,S8:()=>y,T9:()=>h,Vj:()=>S,WQ:()=>s,ZF:()=>_,aI:()=>F,e$:()=>x,g7:()=>C,hG:()=>d,hZ:()=>a,hs:()=>f,jb:()=>j,jk:()=>l,l0:()=>L,m3:()=>m,t2:()=>z,xg:()=>P,ze:()=>b});var o=r(53494);function e(t,n){return t[0]=n[0],t[1]=n[1],t}function a(t,n,r){return t[0]=n,t[1]=r,t}function s(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t}function u(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t}function i(t,n,r){return t[0]=n[0]*r[0],t[1]=n[1]*r[1],t}function c(t,n,r){return t[0]=n[0]/r[0],t[1]=n[1]/r[1],t}function l(t,n,r){return t[0]=Math.min(n[0],r[0]),t[1]=Math.min(n[1],r[1]),t}function h(t,n,r){return t[0]=Math.max(n[0],r[0]),t[1]=Math.max(n[1],r[1]),t}function f(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t}function M(t,n,r,o){return t[0]=n[0]+r[0]*o,t[1]=n[1]+r[1]*o,t}function p(t,n){const r=n[0]-t[0],o=n[1]-t[1];return Math.sqrt(r*r+o*o)}function d(t,n){const r=n[0]-t[0],o=n[1]-t[1];return r*r+o*o}function g(t){const n=t[0],r=t[1];return Math.sqrt(n*n+r*r)}function m(t){const n=t[0],r=t[1];return n*n+r*r}function b(t,n){return t[0]=-n[0],t[1]=-n[1],t}function y(t,n){const r=n[0],o=n[1];let e=r*r+o*o;return e>0&&(e=1/Math.sqrt(e),t[0]=n[0]*e,t[1]=n[1]*e),t}function A(t,n){return t[0]*n[0]+t[1]*n[1]}function v(t,n,r){const o=n[0]*r[1]-n[1]*r[0];return t[0]=t[1]=0,t[2]=o,t}function w(t,n,r,o){const e=n[0],a=n[1];return t[0]=e+o*(r[0]-e),t[1]=a+o*(r[1]-a),t}function _(t,n,r){const o=n[0],e=n[1];return t[0]=r[0]*o+r[2]*e,t[1]=r[1]*o+r[3]*e,t}function L(t,n,r){const o=n[0],e=n[1];return t[0]=r[0]*o+r[2]*e+r[4],t[1]=r[1]*o+r[3]*e+r[5],t}function x(t,n,r,o){const e=n[0]-r[0],a=n[1]-r[1],s=Math.sin(o),u=Math.cos(o);return t[0]=e*u-a*s+r[0],t[1]=e*s+a*u+r[1],t}function C(t,n){const r=t[0],o=t[1],e=n[0],a=n[1];let s=r*r+o*o;s>0&&(s=1/Math.sqrt(s));let u=e*e+a*a;u>0&&(u=1/Math.sqrt(u));const i=(r*e+o*a)*s*u;return i>1?0:i<-1?Math.PI:Math.acos(i)}function z(t,n){return t[0]===n[0]&&t[1]===n[1]}function F(t,n){const r=t[0],e=t[1],a=n[0],s=n[1],u=(0,o.FD)();return Math.abs(r-a)<=u*Math.max(1,Math.abs(r),Math.abs(a))&&Math.abs(e-s)<=u*Math.max(1,Math.abs(e),Math.abs(s))}function S(t,n,r,o,e){let a=n[0]-r[0],s=n[1]-r[1];const u=(o[0]*a+o[1]*s)*(e-1);return a=o[0]*u,s=o[1]*u,t[0]=n[0]+a,t[1]=n[1]+s,t}const T=g,j=u,R=i,E=c,P=p,O=d,k=m;Object.freeze(Object.defineProperty({__proto__:null,add:s,angle:C,ceil:function(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t},copy:e,cross:v,dist:P,distance:p,div:E,divide:c,dot:A,equals:F,exactEquals:z,floor:function(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t},inverse:function(t,n){return t[0]=1/n[0],t[1]=1/n[1],t},len:T,length:g,lerp:w,max:h,min:l,mul:R,multiply:i,negate:b,normalize:y,projectAndScale:S,random:function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;const r=2*(0,o.Ov)()*Math.PI;return t[0]=Math.cos(r)*n,t[1]=Math.sin(r)*n,t},rotate:x,round:function(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t},scale:f,scaleAndAdd:M,set:a,sqrDist:O,sqrLen:k,squaredDistance:d,squaredLength:m,str:function(t){return"vec2("+t[0]+", "+t[1]+")"},sub:j,subtract:u,transformMat2:_,transformMat2d:L,transformMat3:function(t,n,r){const o=n[0],e=n[1];return t[0]=r[0]*o+r[3]*e+r[6],t[1]=r[1]*o+r[4]*e+r[7],t},transformMat4:function(t,n,r){const o=n[0],e=n[1];return t[0]=r[0]*o+r[4]*e+r[12],t[1]=r[1]*o+r[5]*e+r[13],t}},Symbol.toStringTag,{value:"Module"}))},37440:(t,n,r)=>{r.d(n,{convertMeshVertexSpace:()=>i});var o=r(50076),e=r(53084),a=r(50346),s=r(56623),u=r(53848);async function i(t,n,r){await Promise.resolve(),(0,a.Te)(r);const i=(0,u.UR)(t,n,{useEllipsoid:r?.useEllipsoid});if(!i)throw new o.A("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const c=t.cloneAndModifyVertexAttributes(new s.H({...i,uv:(0,e.o8)(t.vertexAttributes.uv),color:(0,e.o8)(t.vertexAttributes.color)}),n);return c.transform=null,c}},56623:(t,n,r)=>{r.d(n,{H:()=>f});var o,e=r(35143),a=r(42553),s=r(53084),u=r(76460),i=r(46053),c=r(21403),l=r(85842),h=r(36417);let f=o=class extends a.A{constructor(t){super(t),this.color=null,this.position=new Float64Array(0),this.uv=null,this.normal=null,this.tangent=null}castColor(t){return(0,h.b)(t,Uint8Array,[Uint8ClampedArray],{loggerTag:".color=",stride:4},u.A.getLogger(this))}castPosition(t){return t&&t instanceof Float32Array&&u.A.getLogger(this).warn(".position=","Setting position attribute from a Float32Array may cause precision problems. Consider storing data in a Float64Array or a regular number array"),(0,h.b)(t,Float64Array,[Float32Array],{loggerTag:".position=",stride:3},u.A.getLogger(this))}castUv(t){return(0,h.b)(t,Float32Array,[Float64Array],{loggerTag:".uv=",stride:2},u.A.getLogger(this))}castNormal(t){return(0,h.b)(t,Float32Array,[Float64Array],{loggerTag:".normal=",stride:3},u.A.getLogger(this))}castTangent(t){return(0,h.b)(t,Float32Array,[Float64Array],{loggerTag:".tangent=",stride:4},u.A.getLogger(this))}clone(){const t={position:(0,s.o8)(this.position),uv:(0,s.o8)(this.uv),normal:(0,s.o8)(this.normal),tangent:(0,s.o8)(this.tangent),color:(0,s.o8)(this.color)};return new o(t)}clonePositional(){const t={position:(0,s.o8)(this.position),normal:(0,s.o8)(this.normal),tangent:(0,s.o8)(this.tangent),uv:this.uv,color:this.color};return new o(t)}get usedMemory(){return this.position.byteLength+(this.uv?.byteLength??0)+(this.normal?.byteLength??0)+(this.tangent?.byteLength??0)+(this.color?.byteLength??0)}};(0,e._)([(0,i.MZ)({json:{write:h.B}})],f.prototype,"color",void 0),(0,e._)([(0,c.w)("color")],f.prototype,"castColor",null),(0,e._)([(0,i.MZ)({nonNullable:!0,json:{write:h.B}})],f.prototype,"position",void 0),(0,e._)([(0,c.w)("position")],f.prototype,"castPosition",null),(0,e._)([(0,i.MZ)({json:{write:h.B}})],f.prototype,"uv",void 0),(0,e._)([(0,c.w)("uv")],f.prototype,"castUv",null),(0,e._)([(0,i.MZ)({json:{write:h.B}})],f.prototype,"normal",void 0),(0,e._)([(0,c.w)("normal")],f.prototype,"castNormal",null),(0,e._)([(0,i.MZ)({json:{write:h.B}})],f.prototype,"tangent",void 0),(0,e._)([(0,c.w)("tangent")],f.prototype,"castTangent",null),f=o=(0,e._)([(0,l.$)("esri.geometry.support.MeshVertexAttributes")],f)},63919:(t,n,r)=>{r.d(n,{$0:()=>m,B8:()=>i,D_:()=>s,Ge:()=>A,I0:()=>b,KC:()=>c,Oe:()=>d,Tl:()=>f,a4:()=>l,dR:()=>y,e$:()=>M,hZ:()=>a,hs:()=>p,kN:()=>g,lw:()=>h,mg:()=>u,z0:()=>e});var o=r(53494);function e(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[4],t[4]=n[5],t[5]=n[6],t[6]=n[8],t[7]=n[9],t[8]=n[10],t}function a(t,n,r,o,e,a,s,u,i,c){return t[0]=n,t[1]=r,t[2]=o,t[3]=e,t[4]=a,t[5]=s,t[6]=u,t[7]=i,t[8]=c,t}function s(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function u(t,n){if(t===n){const r=n[1],o=n[2],e=n[5];t[1]=n[3],t[2]=n[6],t[3]=r,t[5]=n[7],t[6]=o,t[7]=e}else t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8];return t}function i(t,n){const r=n[0],o=n[1],e=n[2],a=n[3],s=n[4],u=n[5],i=n[6],c=n[7],l=n[8],h=l*s-u*c,f=-l*a+u*i,M=c*a-s*i;let p=r*h+o*f+e*M;return p?(p=1/p,t[0]=h*p,t[1]=(-l*o+e*c)*p,t[2]=(u*o-e*s)*p,t[3]=f*p,t[4]=(l*r-e*i)*p,t[5]=(-u*r+e*a)*p,t[6]=M*p,t[7]=(-c*r+o*i)*p,t[8]=(s*r-o*a)*p,t):null}function c(t,n){const r=n[0],o=n[1],e=n[2],a=n[3],s=n[4],u=n[5],i=n[6],c=n[7],l=n[8];return t[0]=s*l-u*c,t[1]=e*c-o*l,t[2]=o*u-e*s,t[3]=u*i-a*l,t[4]=r*l-e*i,t[5]=e*a-r*u,t[6]=a*c-s*i,t[7]=o*i-r*c,t[8]=r*s-o*a,t}function l(t){const n=t[0],r=t[1],o=t[2],e=t[3],a=t[4],s=t[5],u=t[6],i=t[7],c=t[8];return n*(c*a-s*i)+r*(-c*e+s*u)+o*(i*e-a*u)}function h(t,n,r){const o=n[0],e=n[1],a=n[2],s=n[3],u=n[4],i=n[5],c=n[6],l=n[7],h=n[8],f=r[0],M=r[1],p=r[2],d=r[3],g=r[4],m=r[5],b=r[6],y=r[7],A=r[8];return t[0]=f*o+M*s+p*c,t[1]=f*e+M*u+p*l,t[2]=f*a+M*i+p*h,t[3]=d*o+g*s+m*c,t[4]=d*e+g*u+m*l,t[5]=d*a+g*i+m*h,t[6]=b*o+y*s+A*c,t[7]=b*e+y*u+A*l,t[8]=b*a+y*i+A*h,t}function f(t,n,r){const o=n[0],e=n[1],a=n[2],s=n[3],u=n[4],i=n[5],c=n[6],l=n[7],h=n[8],f=r[0],M=r[1];return t[0]=o,t[1]=e,t[2]=a,t[3]=s,t[4]=u,t[5]=i,t[6]=f*o+M*s+c,t[7]=f*e+M*u+l,t[8]=f*a+M*i+h,t}function M(t,n,r){const o=n[0],e=n[1],a=n[2],s=n[3],u=n[4],i=n[5],c=n[6],l=n[7],h=n[8],f=Math.sin(r),M=Math.cos(r);return t[0]=M*o+f*s,t[1]=M*e+f*u,t[2]=M*a+f*i,t[3]=M*s-f*o,t[4]=M*u-f*e,t[5]=M*i-f*a,t[6]=c,t[7]=l,t[8]=h,t}function p(t,n,r){const o=r[0],e=r[1],a=r[2];return t[0]=o*n[0],t[1]=o*n[1],t[2]=o*n[2],t[3]=e*n[3],t[4]=e*n[4],t[5]=e*n[5],t[6]=a*n[6],t[7]=a*n[7],t[8]=a*n[8],t}function d(t,n,r){const o=r[0],e=r[1];return t[0]=o*n[0],t[1]=o*n[1],t[2]=o*n[2],t[3]=e*n[3],t[4]=e*n[4],t[5]=e*n[5],t}function g(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=n[0],t[7]=n[1],t[8]=1,t}function m(t,n){const r=Math.sin(n),o=Math.cos(n);return t[0]=o,t[1]=r,t[2]=0,t[3]=-r,t[4]=o,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function b(t,n){const r=n[0],o=n[1],e=n[2],a=n[3],s=r+r,u=o+o,i=e+e,c=r*s,l=o*s,h=o*u,f=e*s,M=e*u,p=e*i,d=a*s,g=a*u,m=a*i;return t[0]=1-h-p,t[3]=l-m,t[6]=f+g,t[1]=l+m,t[4]=1-c-p,t[7]=M-d,t[2]=f-g,t[5]=M+d,t[8]=1-c-h,t}function y(t,n){const r=n[0],o=n[1],e=n[2],a=n[4],s=n[5],u=n[6],i=n[8],c=n[9],l=n[10],h=l*s-u*c,f=-l*a+u*i,M=c*a-s*i,p=r*h+o*f+e*M;if(!p)return null;const d=1/p;return t[0]=h*d,t[1]=(-l*o+e*c)*d,t[2]=(u*o-e*s)*d,t[3]=f*d,t[4]=(l*r-e*i)*d,t[5]=(-u*r+e*a)*d,t[6]=M*d,t[7]=(-c*r+o*i)*d,t[8]=(s*r-o*a)*d,t}function A(t,n){const r=n[0],o=n[1],e=n[2],a=n[3],s=n[4],u=n[5],i=n[6],c=n[7],l=n[8],h=n[9],f=n[10],M=n[11],p=n[12],d=n[13],g=n[14],m=n[15],b=r*u-o*s,y=r*i-e*s,A=r*c-a*s,v=o*i-e*u,w=o*c-a*u,_=e*c-a*i,L=l*d-h*p,x=l*g-f*p,C=l*m-M*p,z=h*g-f*d,F=h*m-M*d,S=f*m-M*g;let T=b*S-y*F+A*z+v*C-w*x+_*L;return T?(T=1/T,t[0]=(u*S-i*F+c*z)*T,t[1]=(i*C-s*S-c*x)*T,t[2]=(s*F-u*C+c*L)*T,t[3]=(e*F-o*S-a*z)*T,t[4]=(r*S-e*C+a*x)*T,t[5]=(o*C-r*F-a*L)*T,t[6]=(d*_-g*w+m*v)*T,t[7]=(g*A-p*_-m*y)*T,t[8]=(p*w-d*A+m*b)*T,t):null}function v(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2],t[3]=n[3]-r[3],t[4]=n[4]-r[4],t[5]=n[5]-r[5],t[6]=n[6]-r[6],t[7]=n[7]-r[7],t[8]=n[8]-r[8],t}const w=h,_=v;Object.freeze(Object.defineProperty({__proto__:null,add:function(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t[3]=n[3]+r[3],t[4]=n[4]+r[4],t[5]=n[5]+r[5],t[6]=n[6]+r[6],t[7]=n[7]+r[7],t[8]=n[8]+r[8],t},adjoint:c,copy:function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t},determinant:l,equals:function(t,n){const r=t[0],e=t[1],a=t[2],s=t[3],u=t[4],i=t[5],c=t[6],l=t[7],h=t[8],f=n[0],M=n[1],p=n[2],d=n[3],g=n[4],m=n[5],b=n[6],y=n[7],A=n[8],v=(0,o.FD)();return Math.abs(r-f)<=v*Math.max(1,Math.abs(r),Math.abs(f))&&Math.abs(e-M)<=v*Math.max(1,Math.abs(e),Math.abs(M))&&Math.abs(a-p)<=v*Math.max(1,Math.abs(a),Math.abs(p))&&Math.abs(s-d)<=v*Math.max(1,Math.abs(s),Math.abs(d))&&Math.abs(u-g)<=v*Math.max(1,Math.abs(u),Math.abs(g))&&Math.abs(i-m)<=v*Math.max(1,Math.abs(i),Math.abs(m))&&Math.abs(c-b)<=v*Math.max(1,Math.abs(c),Math.abs(b))&&Math.abs(l-y)<=v*Math.max(1,Math.abs(l),Math.abs(y))&&Math.abs(h-A)<=v*Math.max(1,Math.abs(h),Math.abs(A))},exactEquals:function(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]&&t[8]===n[8]},frob:function(t){return Math.sqrt(t[0]**2+t[1]**2+t[2]**2+t[3]**2+t[4]**2+t[5]**2+t[6]**2+t[7]**2+t[8]**2)},fromMat2d:function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=0,t[3]=n[2],t[4]=n[3],t[5]=0,t[6]=n[4],t[7]=n[5],t[8]=1,t},fromMat4:e,fromQuat:b,fromRotation:m,fromScaling:function(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=0,t[4]=n[1],t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},fromTranslation:g,identity:s,invert:i,isOrthoNormal:function(t){const n=(0,o.FD)(),r=t[0],e=t[1],a=t[2],s=t[3],u=t[4],i=t[5],c=t[6],l=t[7],h=t[8];return Math.abs(1-(r*r+s*s+c*c))<=n&&Math.abs(1-(e*e+u*u+l*l))<=n&&Math.abs(1-(a*a+i*i+h*h))<=n},mul:w,multiply:h,multiplyScalar:function(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=n[3]*r,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=n[7]*r,t[8]=n[8]*r,t},multiplyScalarAndAdd:function(t,n,r,o){return t[0]=n[0]+r[0]*o,t[1]=n[1]+r[1]*o,t[2]=n[2]+r[2]*o,t[3]=n[3]+r[3]*o,t[4]=n[4]+r[4]*o,t[5]=n[5]+r[5]*o,t[6]=n[6]+r[6]*o,t[7]=n[7]+r[7]*o,t[8]=n[8]+r[8]*o,t},normalFromMat4:A,normalFromMat4Legacy:y,projection:function(t,n,r){return t[0]=2/n,t[1]=0,t[2]=0,t[3]=0,t[4]=-2/r,t[5]=0,t[6]=-1,t[7]=1,t[8]=1,t},rotate:M,scale:p,scaleByVec2:d,set:a,str:function(t){return"mat3("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+")"},sub:_,subtract:v,translate:f,transpose:u},Symbol.toStringTag,{value:"Module"}))},64232:(t,n,r)=>{r.d(n,{W:()=>u,g:()=>s});var o=r(9392),e=r(9624),a=r(45308);function s(t,n,r,o){if((0,e.canProjectWithoutEngine)(t.spatialReference,r)){i[0]=t.x,i[1]=t.y;const e=t.z;return i[2]=e??o??0,(0,a.projectBuffer)(i,t.spatialReference,0,n,r,0)}const s=(0,e.tryProjectWithZConversion)(t,r);return!!s&&(n[0]=s?.x,n[1]=s?.y,n[2]=s?.z??o??0,!0)}async function u(t,n,r,o,a){return await(0,e.initializeProjection)(t.spatialReference,r,null,a),s(t,n,r,o)}const i=(0,o.vt)()},98510:(t,n,r)=>{r.d(n,{Y0:()=>c,lO:()=>l});var o=r(34111),e=r(13312),a=r(80963);const s=new e.A(o.fv),u=new e.A(o.FY),i=new e.A(o.LJ),c=new e.A(o.Ro);function l(t){const n=h.get(t);if(n)return n;let r=s;if(t)if(t===u)r=u;else if(t===i)r=i;else{const n=t.wkid,o=t.latestWkid;if(null!=n||null!=o)(0,a.tl)(n)||(0,a.tl)(o)?r=u:((0,a.ZL)(n)||(0,a.ZL)(o))&&(r=i);else{const n=t.wkt2??t.wkt;if(n){const t=n.toUpperCase();t===f?r=u:t===M&&(r=i)}}}return h.set(t,r),r}const h=new Map,f=u.wkt.toUpperCase(),M=i.wkt.toUpperCase()}}]);
//# sourceMappingURL=9671.0836b380.chunk.js.map