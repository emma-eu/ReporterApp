"use strict";(self.webpackChunkfeedback_map=self.webpackChunkfeedback_map||[]).push([[4797],{1484:(t,e,n)=>{n.d(e,{A:()=>s});var r=n(97255);class s{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];this.lengths=t??[],this.coords=e??[]}static fromJSON(t){return new s(t.lengths,t.coords)}static fromRect(t){const[e,n,r,i]=t,o=r-e,h=i-n;return new s([5],[e,n,o,0,0,h,-o,0,0,-h])}get isPoint(){return 0===this.lengths.length&&this.coords.length>=2}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce(((t,e)=>t+e))}get usedMemory(){return 64+(0,r.Qf)(this.lengths,this.coords)}area(){let t=0,e=0;if(!this.lengths.length)return 0;for(let n=0;n<this.lengths.length;n++){const r=this.lengths[n];if(r<3)continue;let s=this.coords[2*e],i=this.coords[2*e+1];for(let n=1;n<r;n+=1){const r=this.coords[2*(n+e)],o=this.coords[2*(n+e)+1];t+=-.5*(r-s)*(o+i),s=r,i=o}e+=r}return t}forEachVertex(t){let e=0;this.lengths.length||t(this.coords[0],this.coords[1]);for(let n=0;n<this.lengths.length;n++){const r=this.lengths[n];for(let n=0;n<r;n++)t(this.coords[2*(n+e)],this.coords[2*(n+e)+1]);e+=r}}deltaDecode(){const t=this.clone(),{coords:e,lengths:n}=t;let r=0;for(const s of n){for(let t=1;t<s;t++)e[2*(r+t)]+=e[2*(r+t)-2],e[2*(r+t)+1]+=e[2*(r+t)-1];r+=s}return t}clone(t){if(0===this.lengths.length)return new s([],[this.coords[0],this.coords[1]]);const e=2*(0===this.lengths.length?1:this.lengths.reduce(((t,e)=>t+e))),n=this.coords.slice(0,e);return t?(t.set(n),new s(this.lengths,t)):new s(Array.from(this.lengths),Array.from(n))}}},19358:(t,e,n)=>{n.d(e,{A:()=>s});var r=n(59422);class s{constructor(t,e,n,s){this.transformedX=0,this.transformedY=0,this.center=(0,r.fA)(t,e),this.centerT=(0,r.vt)(),this.halfWidth=n/2,this.halfHeight=s/2,this.width=n,this.height=s}get x(){return this.center[0]}get y(){return this.center[1]}get blX(){return this.center[0]+this.halfWidth}get blY(){return this.center[1]+this.halfHeight}get trX(){return this.center[0]-this.halfWidth}get trY(){return this.center[1]-this.halfHeight}get xmin(){return this.x-this.halfWidth}get xmax(){return this.x+this.halfWidth}get ymin(){return this.y-this.halfHeight}get ymax(){return this.y+this.halfHeight}set x(t){this.center[0]=t}set y(t){this.center[1]=t}clone(){return new s(this.x,this.y,this.width,this.height)}serialize(t){return t.writeF32(this.center[0]),t.writeF32(this.center[1]),t.push(this.width),t.push(this.height),t}findCollisionDelta(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;const n=Math.abs(t.centerT[0]-this.centerT[0]),r=Math.abs(t.centerT[1]-this.centerT[1]),s=(t.halfWidth+this.halfWidth+e)/n,i=(t.halfHeight+this.halfHeight+e)/r,o=Math.min(s,i);return Math.log2(o)}extend(t){const e=Math.min(this.xmin,t.xmin),n=Math.min(this.ymin,t.ymin),r=Math.max(this.xmax,t.xmax)-e,s=Math.max(this.ymax,t.ymax)-n,i=e+r/2,o=n+s/2;this.width=r,this.height=s,this.halfWidth=r/2,this.halfHeight=s/2,this.x=i,this.y=o}static deserialize(t){const e=t.readF32(),n=t.readF32(),r=t.readInt32(),i=t.readInt32();return new s(e,n,r,i)}}},19385:(t,e,n)=>{n.d(e,{f:()=>i});var r=n(19358),s=n(61673);class i{constructor(t,e,n,r,s,i,o,h){let u=arguments.length>8&&void 0!==arguments[8]?arguments[8]:[];this.entityTexel=t,this.anchorX=e,this.anchorY=n,this.directionX=r,this.directionY=s,this.maxScale=i,this.minScale=o,this.referenceBounds=h,this.bounds=u}serialize(t){t.push(this.entityTexel),t.writeF32(this.anchorX),t.writeF32(this.anchorY),t.writeF32(this.directionX),t.writeF32(this.directionY),t.writeF32(this.maxScale),t.writeF32(this.minScale),null===this.referenceBounds?(t.writeF32(0),t.writeF32(0),t.writeF32(0)):(t.writeF32(this.referenceBounds.size),t.writeF32(this.referenceBounds.offsetX),t.writeF32(this.referenceBounds.offsetY)),(0,s.j)(t,this.bounds)}static deserialize(t){const e=t.readInt32(),n=t.readF32(),o=t.readF32(),h=t.readF32(),u=t.readF32(),a=t.readF32(),c=t.readF32(),l=t.readF32(),f=t.readF32(),x=t.readF32(),d=(0,s._)(t,r.A)??[];return new i(e,n,o,h,u,a,c,{size:l,offsetX:f,offsetY:x},d)}}},20176:(t,e,n)=>{n.d(e,{N3:()=>h,Om:()=>o});var r=n(97255),s=n(90321),i=n(1484);class o{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;this.geometry=t,this.attributes=e,this.centroid=n,this.objectId=r,this.displayId=s}static fromJSON(t){const e=t.geometry?i.A.fromJSON(t.geometry):null,n=t.centroid?i.A.fromJSON(t.centroid):null,r=t.objectId;return new o(e,t.attributes,n,r)}weakClone(){const t=new o(this.geometry,this.attributes,this.centroid,this.objectId);return t.displayId=this.displayId,t}clone(){const t=this.geometry?.clone(),e=new o(t,{...this.attributes},this.centroid?.clone(),this.objectId);return e.displayId=this.displayId,e}ensureCentroid(t){return this.centroid??=(0,s.Q)(new i.A,this.geometry,t.hasZ,t.hasM),this.centroid}get usedMemory(){return 128+(0,r.lM)(this.attributes)+(this.geometry?.usedMemory??0)}}function h(t){return!!t.geometry?.coords?.length}},21812:(t,e,n)=>{n.d(e,{_:()=>r});class r{constructor(t,e,n,r,s){let i=arguments.length>5&&void 0!==arguments[5]&&arguments[5],o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0;this.name=t,this.count=e,this.type=n,this.offset=r,this.stride=s,this.normalized=i,this.divisor=o}}},35048:(t,e,n)=>{n.d(e,{A:()=>i});var r=n(42710),s=n(61673);class i{constructor(t,e){this.id=t,this.sortKey=e,this.records=[]}serialize(t){return t.push(this.id),t.writeF32(this.sortKey),(0,s.j)(t,this.records),t}static deserialize(t){const e=t.readInt32(),n=t.readF32(),o=new i(e,n);return o.records=(0,s._)(t,r.A)??[],o}}i.byteSizeHint=2*Uint32Array.BYTES_PER_ELEMENT+r.A.byteSizeHint},38983:(t,e,n)=>{function r(t,e,n){n=n||2;var r,i,h,u,a,c,f,x=e&&e.length,d=x?e[0]*n:t.length,y=s(t,0,d,n,!0),p=[];if(!y||y.next===y.prev)return p;if(x&&(y=l(t,e,y,n)),t.length>80*n){r=h=t[0],i=u=t[1];for(var g=n;g<d;g+=n)(a=t[g])<r&&(r=a),(c=t[g+1])<i&&(i=c),a>h&&(h=a),c>u&&(u=c);f=0!==(f=Math.max(h-r,u-i))?1/f:0}return o(y,p,n,r,i,f),p}function s(t,e,n,r,s){var i,o;if(s===P(t,e,n,r)>0)for(i=e;i<n;i+=r)o=F(i,t[i],t[i+1],o);else for(i=n-r;i>=e;i-=r)o=F(i,t[i],t[i+1],o);if(o&&T(o,o.next)){var h=o.next;A(o),o=h}return o}function i(t,e){if(!t)return t;e||(e=t);var n,r=t;do{if(n=!1,r.steiner||!T(r,r.next)&&0!==I(r.prev,r,r.next))r=r.next;else{var s=r.prev;if(A(r),(r=e=s)===r.next)break;n=!0}}while(n||r!==e);return e}function o(t,e,n,r,s,l,f){if(t){!f&&l&&p(t,r,s,l);for(var x,d,y=t;t.prev!==t.next;)if(x=t.prev,d=t.next,l?u(t,r,s,l):h(t))e.push(x.i/n),e.push(t.i/n),e.push(d.i/n),A(t),t=d.next,y=d.next;else if((t=d)===y){f?1===f?o(t=a(i(t),e,n),e,n,r,s,l,2):2===f&&c(t,e,n,r,s,l):o(i(t),e,n,r,s,l,1);break}}}function h(t){var e=t.prev,n=t,r=t.next;if(I(e,n,r)>=0)return!1;for(var s=t.next.next;s!==t.prev;){if(E(e.x,e.y,n.x,n.y,r.x,r.y,s.x,s.y)&&I(s.prev,s,s.next)>=0)return!1;s=s.next}return!0}function u(t,e,n,r){var s=t.prev,i=t,o=t.next;if(I(s,i,o)>=0)return!1;for(var h=s.x<i.x?s.x<o.x?s.x:o.x:i.x<o.x?i.x:o.x,u=s.y<i.y?s.y<o.y?s.y:o.y:i.y<o.y?i.y:o.y,a=s.x>i.x?s.x>o.x?s.x:o.x:i.x>o.x?i.x:o.x,c=s.y>i.y?s.y>o.y?s.y:o.y:i.y>o.y?i.y:o.y,l=g(h,u,e,n,r),f=g(a,c,e,n,r),x=t.prevZ,d=t.nextZ;x&&x.z>=l&&d&&d.z<=f;){if(x!==t.prev&&x!==t.next&&E(s.x,s.y,i.x,i.y,o.x,o.y,x.x,x.y)&&I(x.prev,x,x.next)>=0)return!1;if(x=x.prevZ,d!==t.prev&&d!==t.next&&E(s.x,s.y,i.x,i.y,o.x,o.y,d.x,d.y)&&I(d.prev,d,d.next)>=0)return!1;d=d.nextZ}for(;x&&x.z>=l;){if(x!==t.prev&&x!==t.next&&E(s.x,s.y,i.x,i.y,o.x,o.y,x.x,x.y)&&I(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;d&&d.z<=f;){if(d!==t.prev&&d!==t.next&&E(s.x,s.y,i.x,i.y,o.x,o.y,d.x,d.y)&&I(d.prev,d,d.next)>=0)return!1;d=d.nextZ}return!0}function a(t,e,n){var r=t;do{var s=r.prev,o=r.next.next;!T(s,o)&&N(s,r,r.next,o)&&_(s,o)&&_(o,s)&&(e.push(s.i/n),e.push(r.i/n),e.push(o.i/n),A(r),A(r.next),r=t=o),r=r.next}while(r!==t);return i(r)}function c(t,e,n,r,s,h){var u=t;do{for(var a=u.next.next;a!==u.prev;){if(u.i!==a.i&&m(u,a)){var c=b(u,a);return u=i(u,u.next),c=i(c,c.next),o(u,e,n,r,s,h),void o(c,e,n,r,s,h)}a=a.next}u=u.next}while(u!==t)}function l(t,e,n,r){var o,h,u,a=[];for(o=0,h=e.length;o<h;o++)(u=s(t,e[o]*r,o<h-1?e[o+1]*r:t.length,r,!1))===u.next&&(u.steiner=!0),a.push(v(u));for(a.sort(f),o=0;o<a.length;o++)n=i(n=d(a[o],n),n.next);return n}function f(t,e){return t.x-e.x}function x(t){if(t.next.prev===t)return t;let e=t;for(;;){const n=e.next;if(n.prev===e||n===e||n===t)break;e=n}return e}function d(t,e){var n=function(t,e){var n,r=e,s=t.x,i=t.y,o=-1/0;do{if(i<=r.y&&i>=r.next.y&&r.next.y!==r.y){var h=r.x+(i-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(h<=s&&h>o){if(o=h,h===s){if(i===r.y)return r;if(i===r.next.y)return r.next}n=r.x<r.next.x?r:r.next}}r=r.next}while(r!==e);if(!n)return null;if(s===o)return n;var u,a=n,c=n.x,l=n.y,f=1/0;r=n;do{s>=r.x&&r.x>=c&&s!==r.x&&E(i<l?s:o,i,c,l,i<l?o:s,i,r.x,r.y)&&(u=Math.abs(i-r.y)/(s-r.x),_(r,t)&&(u<f||u===f&&(r.x>n.x||r.x===n.x&&y(n,r)))&&(n=r,f=u)),r=r.next}while(r!==a);return n}(t,e);if(!n)return e;var r=b(n,t),s=i(n,n.next);let o=x(r);return i(o,o.next),s=x(s),x(e===n?s:e)}function y(t,e){return I(t.prev,t,e.prev)<0&&I(e.next,t,t.next)<0}function p(t,e,n,r){var s=t;do{null===s.z&&(s.z=g(s.x,s.y,e,n,r)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next}while(s!==t);s.prevZ.nextZ=null,s.prevZ=null,function(t){var e,n,r,s,i,o,h,u,a=1;do{for(n=t,t=null,i=null,o=0;n;){for(o++,r=n,h=0,e=0;e<a&&(h++,r=r.nextZ);e++);for(u=a;h>0||u>0&&r;)0!==h&&(0===u||!r||n.z<=r.z)?(s=n,n=n.nextZ,h--):(s=r,r=r.nextZ,u--),i?i.nextZ=s:t=s,s.prevZ=i,i=s;n=r}i.nextZ=null,a*=2}while(o>1)}(s)}function g(t,e,n,r,s){return(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-n)*s)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-r)*s)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function v(t){var e=t,n=t;do{(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next}while(e!==t);return n}function E(t,e,n,r,s,i,o,h){return(s-o)*(e-h)-(t-o)*(i-h)>=0&&(t-o)*(r-h)-(n-o)*(e-h)>=0&&(n-o)*(i-h)-(s-o)*(r-h)>=0}function m(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!function(t,e){var n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&N(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}(t,e)&&(_(t,e)&&_(e,t)&&function(t,e){var n=t,r=!1,s=(t.x+e.x)/2,i=(t.y+e.y)/2;do{n.y>i!=n.next.y>i&&n.next.y!==n.y&&s<(n.next.x-n.x)*(i-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next}while(n!==t);return r}(t,e)&&(I(t.prev,t,e.prev)||I(t,e.prev,e))||T(t,e)&&I(t.prev,t,t.next)>0&&I(e.prev,e,e.next)>0)}function I(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function T(t,e){return t.x===e.x&&t.y===e.y}function N(t,e,n,r){var s=M(I(t,e,n)),i=M(I(t,e,r)),o=M(I(n,r,t)),h=M(I(n,r,e));return s!==i&&o!==h||!(0!==s||!w(t,n,e))||!(0!==i||!w(t,r,e))||!(0!==o||!w(n,t,r))||!(0!==h||!w(n,e,r))}function w(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function M(t){return t>0?1:t<0?-1:0}function _(t,e){return I(t.prev,t,t.next)<0?I(t,e,t.next)>=0&&I(t,t.prev,e)>=0:I(t,e,t.prev)<0||I(t,t.next,e)<0}function b(t,e){var n=new S(t.i,t.x,t.y),r=new S(e.i,e.x,e.y),s=t.next,i=e.prev;return t.next=e,e.prev=t,n.next=s,s.prev=n,r.next=n,n.prev=r,i.next=r,r.prev=i,r}function F(t,e,n,r){var s=new S(t,e,n);return r?(s.next=r.next,s.prev=r,r.next.prev=s,r.next=s):(s.prev=s,s.next=s),s}function A(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function S(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function P(t,e,n,r){for(var s=0,i=e,o=n-r;i<n;i+=r)s+=(t[o]-t[i])*(t[i+1]+t[o+1]),o=i;return s}n.d(e,{e:()=>r}),r.deviation=function(t,e,n,r){var s=e&&e.length,i=s?e[0]*n:t.length,o=Math.abs(P(t,0,i,n));if(s)for(var h=0,u=e.length;h<u;h++){var a=e[h]*n,c=h<u-1?e[h+1]*n:t.length;o-=Math.abs(P(t,a,c,n))}var l=0;for(h=0;h<r.length;h+=3){var f=r[h]*n,x=r[h+1]*n,d=r[h+2]*n;l+=Math.abs((t[f]-t[d])*(t[x+1]-t[f+1])-(t[f]-t[x])*(t[d+1]-t[f+1]))}return 0===o&&0===l?0:Math.abs((l-o)/o)},r.flatten=function(t){for(var e=t[0][0].length,n={vertices:[],holes:[],dimensions:e},r=0,s=0;s<t.length;s++){for(var i=0;i<t[s].length;i++)for(var o=0;o<e;o++)n.vertices.push(t[s][i][o]);s>0&&(r+=t[s-1].length,n.holes.push(r))}return n}},42710:(t,e,n)=>{n.d(e,{A:()=>r});class r{constructor(t,e,n,r,s,i,o){this.instanceId=t,this.textureKey=e,this.indexStart=n,this.indexCount=r,this.vertexStart=s,this.vertexCount=i,this.overlaps=o}updateBaseOffsets(t){this.vertexStart+=t.vertexFrom,this.indexStart+=t.indexFrom}clone(){return new r(this.instanceId,this.textureKey,this.indexStart,this.indexCount,this.vertexStart,this.vertexCount,this.overlaps)}static write(t,e,n,r,s,i,o,h){t.push(e),t.push(n),t.push(r),t.push(s),t.push(i),t.push(o),t.push(h)}serialize(t){return t.push(this.instanceId),t.push(this.textureKey),t.push(this.indexStart),t.push(this.indexCount),t.push(this.vertexStart),t.push(this.vertexCount),t.push(this.overlaps),t}static deserialize(t){const e=t.readInt32(),n=t.readInt32(),s=t.readInt32(),i=t.readInt32(),o=t.readInt32(),h=t.readInt32(),u=t.readInt32();return new r(e,n,s,i,o,h,u)}}r.byteSizeHint=7*Uint32Array.BYTES_PER_ELEMENT},61673:(t,e,n)=>{function r(t,e){if(null!==e){t.push(e.length);for(const n of e)n.serialize(t);return t}t.push(0)}function s(t,e,n){const r=t.readInt32(),s=new Array(r);for(let i=0;i<s.length;i++)s[i]=e.deserialize(t,n);return s}n.d(e,{_:()=>s,j:()=>r})},70029:(t,e,n)=>{n.d(e,{F:()=>i,q:()=>o});var r=n(99588),s=n(93345);function i(t,e,n,i){const o=n.packPrecisionFactor??1;switch(n.type){case s.pe.BYTE:if(1===n.count)t.setInt8(i+n.offset,e*o);else for(let r=0;r<n.count;r++){const s=r*Int8Array.BYTES_PER_ELEMENT;t.setInt8(i+n.offset+s,e[r]*o)}break;case s.pe.UNSIGNED_BYTE:if(1===n.count)t.setUint8(i+n.offset,e*o);else for(let r=0;r<n.count;r++){const s=r*Uint8Array.BYTES_PER_ELEMENT;t.setUint8(i+n.offset+s,e[r]*o)}break;case s.pe.SHORT:if(1===n.count)t.setInt16(i+n.offset,e*o,!0);else for(let r=0;r<n.count;r++){const s=r*Int16Array.BYTES_PER_ELEMENT;t.setInt16(i+n.offset+s,e[r]*o,!0)}break;case s.pe.UNSIGNED_SHORT:if(1===n.count)t.setUint16(i+n.offset,e*o,!0);else for(let r=0;r<n.count;r++){const s=r*Uint16Array.BYTES_PER_ELEMENT;t.setUint16(i+n.offset+s,e[r]*o,!0)}break;case s.pe.INT:if(1===n.count)t.setInt32(i+n.offset,e*o,!0);else for(let r=0;r<n.count;r++){const s=r*Int32Array.BYTES_PER_ELEMENT;t.setInt32(i+n.offset+s,e[r]*o,!0)}break;case s.pe.UNSIGNED_INT:if(1===n.count)t.setUint32(i+n.offset,e*o,!0);else for(let r=0;r<n.count;r++){const s=r*Uint32Array.BYTES_PER_ELEMENT;t.setUint32(i+n.offset+s,e[r]*o,!0)}break;case s.pe.FLOAT:if(1===n.count)t.setFloat32(i+n.offset,e*o,!0);else for(let r=0;r<n.count;r++){const s=r*Float32Array.BYTES_PER_ELEMENT;t.setFloat32(i+n.offset+s,e[r]*o,!0)}break;case s.pe.HALF_FLOAT:if(1===n.count)t.setUint16(i+n.offset,(0,r.fw)(e*o),!0);else for(let s=0;s<n.count;s++){const h=s*Uint16Array.BYTES_PER_ELEMENT;t.setUint16(i+n.offset+h,(0,r.fw)(e[s]*o),!0)}}}function o(t,e,n){switch(e.type){case s.pe.BYTE:{if(1===e.count)return t.getInt8(n+e.offset);const r=[];for(let s=0;s<e.count;s++){const i=s*Int8Array.BYTES_PER_ELEMENT;r.push(t.getInt8(n+e.offset+i))}return r}case s.pe.UNSIGNED_BYTE:{if(1===e.count)return t.getUint8(n+e.offset);const r=[];for(let s=0;s<e.count;s++){const i=s*Uint8Array.BYTES_PER_ELEMENT;r.push(t.getUint8(n+e.offset+i))}return r}case s.pe.SHORT:{if(1===e.count)return t.getInt16(n+e.offset,!0);const r=[];for(let s=0;s<e.count;s++){const i=s*Int16Array.BYTES_PER_ELEMENT;r.push(t.getInt16(n+e.offset+i,!0))}return r}case s.pe.UNSIGNED_SHORT:{if(1===e.count)return t.getUint16(n+e.offset,!0);const r=[];for(let s=0;s<e.count;s++){const i=s*Uint16Array.BYTES_PER_ELEMENT;r.push(t.getUint16(n+e.offset+i,!0))}return r}case s.pe.INT:{if(1===e.count)return t.getInt32(n+e.offset,!0);const r=[];for(let s=0;s<e.count;s++){const i=s*Int32Array.BYTES_PER_ELEMENT;r.push(t.getInt32(n+e.offset+i,!0))}return r}case s.pe.UNSIGNED_INT:{if(1===e.count)return t.getUint32(n+e.offset,!0);const r=[];for(let s=0;s<e.count;s++){const i=s*Uint32Array.BYTES_PER_ELEMENT;r.push(t.getUint32(n+e.offset+i,!0))}return r}case s.pe.FLOAT:{if(1===e.count)return t.getFloat32(n+e.offset,!0);const r=[];for(let s=0;s<e.count;s++){const i=s*Float32Array.BYTES_PER_ELEMENT;r.push(t.getFloat32(n+e.offset+i,!0))}return r}case s.pe.HALF_FLOAT:{if(1===e.count)return(0,r.Kl)(t.getUint16(n+e.offset,!0));const s=[];for(let i=0;i<e.count;i++){const o=i*Uint16Array.BYTES_PER_ELEMENT;s.push((0,r.Kl)(t.getUint16(n+e.offset+o,!0)))}return s}}}},75146:(t,e,n)=>{n.d(e,{A:()=>r});class r{constructor(){this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1,this.uniqueIdField=null,this.queryGeometryType=null,this.queryGeometry=null}weakClone(){const t=new r;return t.objectIdFieldName=this.objectIdFieldName,t.globalIdFieldName=this.globalIdFieldName,t.geohashFieldName=this.geohashFieldName,t.geometryProperties=this.geometryProperties,t.geometryType=this.geometryType,t.spatialReference=this.spatialReference,t.hasZ=this.hasZ,t.hasM=this.hasM,t.features=this.features,t.fields=this.fields,t.transform=this.transform,t.exceededTransferLimit=this.exceededTransferLimit,t.uniqueIdField=this.uniqueIdField,t.queryGeometry=this.queryGeometry,t.queryGeometryType=this.queryGeometryType,t}}},86340:(t,e,n)=>{n.d(e,{$Y:()=>g,AV:()=>a,ES:()=>d,Qz:()=>c,UE:()=>y,bX:()=>p});var r=n(50076),s=n(76460),i=n(93345),o=n(32880),h=n(21812);const u=()=>s.A.getLogger("esri.views.2d.engine.webgl.Utils");function a(t){switch(t){case i.ld.UNSIGNED_BYTE:return 1;case i.ld.UNSIGNED_SHORT_4_4_4_4:return 2;case i.ld.FLOAT:return 4;default:return void u().error(new r.A("webgl-utils",`Unable to handle type ${t}`))}}function c(t){switch(t){case i.ld.UNSIGNED_BYTE:return Uint8Array;case i.ld.UNSIGNED_SHORT_4_4_4_4:return Uint16Array;case i.ld.FLOAT:return Float32Array;default:return void u().error(new r.A("webgl-utils",`Unable to handle type ${t}`))}}const l=t=>{const e=new Map;for(const n in t)for(const r of t[n])e.set(r.name,r.location);return e},f=t=>{const e={};return t.forEach(((t,n)=>e[n]=t?.length?t[0].stride:0)),e},x=new Map,d=(t,e)=>{if(!x.has(t)){const n=function(t){const e=new Map;for(const n in t){const r=t[n];let s=0;e.set(n,r.map((t=>{const e=new h._(t.name,t.count,t.type,s,0,t.normalized||!1);return s+=t.count*(0,o._)(t.type),e}))),e.get(n).forEach((t=>t.stride=s))}return e}(e),r={strides:f(n),bufferLayouts:n,attributes:l(e)};x.set(t,r)}return x.get(t)},y=t=>t.includes("data:image/svg+xml");function p(t){const e=[];for(let n=0;n<t.length;n++)e.push(t.charCodeAt(n));return e}function g(t){if(null==t)return"";const{type:e}=t;switch(e){case"CIMMarkerPlacementAlongLineRandomSize":return`${e}-${t.seed}-${t.randomization}`;case"CIMMarkerPlacementAlongLineVariableSize":return`${e}-${t.maxRandomOffset}-${t.numberOfSizes}-${t.seed}-${t.variationMethod}`;case"CIMMarkerPlacementAtExtremities":return`${e}-${t.extremityPlacement}-${t.offsetAlongLine}`;case"CIMMarkerPlacementAtRatioPositions":return`${e}-${t.beginPosition}-${t.endPosition}-${t.flipFirst}-${JSON.stringify(t.positionArray)}`;case"CIMMarkerPlacementAtMeasuredUnits":return`${e}-${t.interval}-${t.skipMarkerRate}-${t.placeAtExtremities}`;case"CIMMarkerPlacementInsidePolygon":return`${e}-${t.stepX}-${t.stepY}-${t.randomness}-${t.gridType}-${t.seed}-${t.shiftOddRows}`;case"CIMMarkerPlacementOnLine":return`${e}-${t.relativeTo}-${t.startPointOffset}`;case"CIMMarkerPlacementOnVertices":return`${e}-${t.placeOnControlPoints}-${t.placeOnEndPoints}-${t.placeOnRegularVertices}`;case"CIMMarkerPlacementPolygonCenter":return`${e}-${t.method}`;default:return`${e}`}}},90321:(t,e,n)=>{function r(t,e){return t?e?4:3:e?3:2}function s(t,e,n,s){if(!e?.lengths.length)return null;t.lengths.length&&(t.lengths.length=0),t.coords.length&&(t.coords.length=0);const h=t.coords,u=[],a=n?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:c,coords:l}=e,f=r(n,s);let x=0;for(const r of c){const t=i(a,l,x,r,n,s);t&&u.push(t),x+=r*f}if(u.sort(((t,e)=>{let r=t[2]-e[2];return 0===r&&n&&(r=t[4]-e[4]),r})),u.length){let t=6*u[0][2];h[0]=u[0][0]/t,h[1]=u[0][1]/t,n&&(t=6*u[0][4],h[2]=0!==t?u[0][3]/t:0),(h[0]<a[0]||h[0]>a[1]||h[1]<a[2]||h[1]>a[3]||n&&(h[2]<a[4]||h[2]>a[5]))&&(h.length=0)}if(!h.length){const t=e.lengths[0]?o(l,0,c[0],n,s):null;if(!t)return null;h[0]=t[0],h[1]=t[1],n&&t.length>2&&(h[2]=t[2])}return t}function i(t,e,n,s,i,o){const h=r(i,o);let u=n,a=n+h,c=0,l=0,f=0,x=0,d=0;for(let r=0,p=s-1;r<p;r++,u+=h,a+=h){const n=e[u],r=e[u+1],s=e[u+2],o=e[a],h=e[a+1],y=e[a+2];let p=n*h-o*r;x+=p,c+=(n+o)*p,l+=(r+h)*p,i&&(p=n*y-o*s,f+=(s+y)*p,d+=p),n<t[0]&&(t[0]=n),n>t[1]&&(t[1]=n),r<t[2]&&(t[2]=r),r>t[3]&&(t[3]=r),i&&(s<t[4]&&(t[4]=s),s>t[5]&&(t[5]=s))}if(x>0&&(x*=-1),d>0&&(d*=-1),!x)return null;const y=[c,l,.5*x];return i&&(y[3]=f,y[4]=.5*d),y}function o(t,e,n,s,i){const o=r(s,i);let l=e,f=e+o,x=0,d=0,y=0,p=0;for(let r=0,g=n-1;r<g;r++,l+=o,f+=o){const e=t[l],n=t[l+1],r=t[l+2],i=t[f],o=t[f+1],g=t[f+2],v=s?u(e,n,r,i,o,g):h(e,n,i,o);if(v)if(x+=v,s){const t=c(e,n,r,i,o,g);d+=v*t[0],y+=v*t[1],p+=v*t[2]}else{const t=a(e,n,i,o);d+=v*t[0],y+=v*t[1]}}return x>0?s?[d/x,y/x,p/x]:[d/x,y/x]:n>0?s?[t[e],t[e+1],t[e+2]]:[t[e],t[e+1]]:null}function h(t,e,n,r){const s=n-t,i=r-e;return Math.sqrt(s*s+i*i)}function u(t,e,n,r,s,i){const o=r-t,h=s-e,u=i-n;return Math.sqrt(o*o+h*h+u*u)}function a(t,e,n,r){return[t+.5*(n-t),e+.5*(r-e)]}function c(t,e,n,r,s,i){return[t+.5*(r-t),e+.5*(s-e),n+.5*(i-n)]}n.d(e,{Q:()=>s})},97255:(t,e,n)=>{n.d(e,{Qf:()=>u,Qh:()=>o,RS:()=>s,ez:()=>l,i5:()=>f,lM:()=>i,qK:()=>c});var r=n(78393);const s=16;function i(t){if(!t)return 0;let e=c;for(const n in t)t.hasOwnProperty(n)&&(e+=h(t[n],!1));return e}function o(t){if(!t)return 0;if("number"==typeof t[0])return u(t);if(Array.isArray(t))return function(t){const e=t.length;if(0===e||"number"==typeof t[0])return a(t,8);let n=l;for(let r=0;r<e;r++)n+=h(t[r]);return n}(t);let e=c;for(const n in t)t.hasOwnProperty(n)&&(e+=h(t[n]));return e}function h(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];switch(typeof t){case"object":return e?o(t):c;case"string":return function(t){return 32+t.length}(t);case"number":return s;case"boolean":return 4;default:return 8}}function u(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.reduce(((t,e)=>t+(e?(0,r.iu)(e)?e.byteLength+f:Array.isArray(e)?a(e,s):0:0)),0)}function a(t,e){return l+t.length*e}const c=32,l=16,f=145},99588:(t,e,n)=>{n.d(e,{Kl:()=>u,M9:()=>o,fw:()=>h});const r=new Float32Array(1),s=new Uint32Array(r.buffer);function i(t){return r[0]=t,s[0]}function o(t,e){return 65535&t|e<<16}function h(t){const e=i(t),n=e>>>31;let r=e>>>23&255,s=8388607&e;return r-=127,r>15?n<<15|31744:r<-25?0:(r<-14&&(s+=8388608,s/=2**(-14-r),r=-15),r+=15,s/=8192,s=function(t,e){const n=Math.floor(t),r=t-n;return n<e&&(r>.5||.5===r&&n%2==1)?n+1:n}(s,1023),n<<15|r<<10|s)}function u(t){let e=t>>>15,n=t>>10&31,r=1023&t;return e=e?-1:1,n-=15,r/=1024,n>-15?r+=1:n=-14,e*2**n*r}}}]);
//# sourceMappingURL=4797.939ee2e2.chunk.js.map