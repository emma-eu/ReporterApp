"use strict";(self.webpackChunkfeedback_map=self.webpackChunkfeedback_map||[]).push([[3990],{4037:(e,t,o)=>{o.d(t,{Q:()=>n,m:()=>r});const r={linear:0,rectangular:1,circular:2},n={isAbsolute:0,isDiscrete:1}},23758:(e,t,o)=>{o.d(t,{KQ:()=>r,Q4:()=>s,Ss:()=>i});const r=8388607,n=8388608,s=e=>e&r;function i(e,t){return((t?n:0)|e)>>>0}},33817:(e,t,o)=>{o.d(t,{F:()=>f});var r=o(35143),n=o(91967),s=o(81806),i=o(67993),a=o(68134),l=o(46053),c=(o(76460),o(47249),o(85842)),u=o(19451);let f=class extends n.A{constructor(e){super(e),this.debugName="",this._updatingHandles=new u.U,this._idToUpdatingState=new i.A}get updating(){const e=this._updatingHandles.updating||Array.from(this._idToUpdatingState.values()).some((e=>e));if((0,s.A)("esri-2d-log-updating")){const t=Array.from(this._idToUpdatingState.entries()).map((e=>{let[t,o]=e;return`-> ${t}: ${o}`})).join("\n");console.log(`${this.debugName}: Updating: ${e}\n-> Handles: ${this._updatingHandles.updating}\n${t}`)}return e}addUpdateTracking(e,t){const o=(0,a.wB)((()=>t.updating),(t=>this._idToUpdatingState.set(e,t)),{sync:!0});this.addHandles(o)}addPromise(e){return this._updatingHandles.addPromise(e)}};(0,r._)([(0,l.MZ)({constructOnly:!0})],f.prototype,"debugName",void 0),(0,r._)([(0,l.MZ)({readOnly:!0})],f.prototype,"updating",null),f=(0,r._)([(0,c.$)("esri.views.2d.layers.support.UpdateTracking2D")],f)},34429:(e,t,o)=>{o.d(t,{QueueProcessor:()=>u});var r=o(30726),n=o(50346),s=o(59649),i=o(67993),a=o(52394),l=o(75540);class c{constructor(e,t){this.item=e,this.controller=t,this.promise=null}}class u{constructor(e){this._schedule=null,this._deferreds=new i.A,this._controllers=new i.A,this._processingItems=new i.A,this._pausedSignal=(0,l.v)(!1),this.concurrency=1,e.concurrency&&(this.concurrency=e.concurrency),this._queue=new s.A(e.peeker),this.process=e.process}destroy(){this.clear(),this._schedule=(0,r.xt)(this._schedule)}get updating(){return this.running}get length(){return this._processingItems.size+this._queue.length}get running(){return!this._pausedSignal.value&&this._queue.length>0&&this._processingItems.size<this.concurrency}abort(e){const t=this._controllers.get(e);t&&t.abort()}clear(){this._queue.clear();const e=[];this._controllers.forEach((t=>e.push(t))),this._controllers.clear(),e.forEach((e=>e.abort())),this._processingItems.clear(),this._cancelNext()}forEach(e){this._deferreds.forEach(((t,o)=>e(o)))}get(e){const t=this._deferreds.get(e);return t?t.promise:void 0}isOngoing(e){return this._processingItems.has(e)}has(e){return this._deferreds.has(e)}pause(){this._pausedSignal.value||(this._pausedSignal.value=!0,this._cancelNext())}push(e,t){const o=this.get(e);if(o)return o;const r=new AbortController;let s=null;t&&(s=(0,n.u7)(t,(()=>r.abort())));const i=()=>{a.remove(),null!=s&&s.remove(),this._removeItem(e),this._queue.remove(e),this._scheduleNext()},a=(0,n.NY)(r.signal,(()=>{const t=this._processingItems.get(e);t&&t.controller.abort(),i(),l.reject((0,n.NK)())})),l=(0,n.Tw)();return this._deferreds.set(e,l),this._controllers.set(e,r),l.promise.then(i,i),this._queue.push(e),this._scheduleNext(),l.promise}last(){return this._queue.last()}lastPromise(){const e=this.last();return e?this.get(e):null}peek(){return this._queue.peek()}popLast(){const e=this._queue.popLast();return e&&(this._deferreds.get(e)?.reject((0,n.NK)()),this._removeItem(e)),e}reset(){const e=Array.from(this._processingItems.values());this._processingItems.clear();for(const t of e)this._queue.push(t.item),t.controller.abort();this._scheduleNext()}resume(){this._pausedSignal.value&&(this._pausedSignal.value=!1,this._scheduleNext())}takeAll(){const e=[];for(;this._queue.length;)e.push(this._queue.pop());return this.clear(),e}_removeItem(e){this._deferreds.delete(e),this._controllers.delete(e),this._processingItems.delete(e)}_scheduleNext(){this._pausedSignal.value||this._schedule||(this._schedule=(0,a._)((()=>{this._schedule=null,this._next()})))}_next(){for(;this._queue.length>0&&this._processingItems.size<this.concurrency;)this._process(this._queue.pop())}_cancelNext(){this._schedule&&(this._schedule.remove(),this._schedule=null)}_processResult(e,t){this._canProcessFulfillment(e)&&(this._scheduleNext(),this._deferreds.get(e.item).resolve(t))}_processError(e,t){this._canProcessFulfillment(e)&&(this._scheduleNext(),this._deferreds.get(e.item).reject(t))}_canProcessFulfillment(e){return!!this._deferreds.get(e.item)&&this._processingItems.get(e.item)===e}_process(e){if(null==e)return;let t;const o=new AbortController,r=new c(e,o);this._processingItems.set(e,r);try{t=this.process(e,o.signal)}catch(s){this._processError(r,s)}(0,n.$X)(t)?(r.promise=t,t.then((e=>this._processResult(r,e)),(e=>this._processError(r,e)))):this._processResult(r,t)}}},43282:(e,t,o)=>{o.d(t,{c:()=>r});const r={bitset:{isSDF:0,isMapAligned:1,scaleSymbolsProportionally:2,overrideOutlineColor:3,colorLocked:4,isStroke:5}}},44460:(e,t,o)=>{o.d(t,{Cb:()=>s,HW:()=>u,JR:()=>n,JZ:()=>l,WR:()=>a,b6:()=>f,fT:()=>r,nC:()=>c,yM:()=>i});const r=[252,146,31,255],n=[153,153,153,255],s={type:"esriSMS",style:"esriSMSCircle",size:6,color:r,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},i={type:"esriSLS",style:"esriSLSSolid",width:.75,color:r},a={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},l={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},c={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},u={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},f={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}},62484:(e,t,o)=>{var r;o.d(t,{DW:()=>h,GA:()=>f,mv:()=>r}),function(e){e.Local="Local",e.Global="Global"}(r||(r={}));class n{generateSource(e){const t=[];for(let r=1;r<this.length;r++)t.push(`vec4 atom${r} = texture(${e.animationTexture}, (pointer + 0.5) / size);`),t.push("pointer.x += 1.0;");for(let r=0;r<this.ins;r++)t.push("top--;"),t.push(`vec4 in${this.ins-r-1} = stack[top];`);for(let r=0;r<this.outs;r++)t.push(`vec4 out${r};`);const{microcode:o}=this;for(const r of o)t.push(r);for(let r=0;r<this.outs;r++)t.push(`stack[top] = out${r};`),t.push("top++;"),t.push(`if (top >= ${m}) { top = ${m-1}; }`);return t}}let s=128;function i(e){return[`float duration = clamp(${e.duration}, 0.05, 3600.0);`,`float startTimeOffset = ${e.startTimeOffset};`,`float repeatDelay = ${e.repeatDelay};`,`float timeOriginSelector = ${e.timeOriginSelector};`,`float repeatType = ${e.repeatType};`,`float easing = ${e.easing};`,`float playAnimation = ${e.playAnimation} * (1.0 - step(0.0, -${e.duration}));`,`float reverseAnimation = ${e.reverseAnimation};`,"float time = globalTime - (timeOriginSelector == 1.0 ? localTimeOrigin : 0.0);","time *= playAnimation;","time *= 1.0 - reverseAnimation * 2.0;","float period = duration + repeatDelay;","time += reverseAnimation == 1.0 ? (period - startTimeOffset - 0.001) : startTimeOffset + 0.001;","float omega = time / period;","float oi = floor(omega);","omega = repeatType == 1.0 || repeatType == 3.0 ? omega - oi : omega;","float of = omega * period;","of = (clamp(of, reverseAnimation * repeatDelay, period - (1.0 - reverseAnimation) * repeatDelay) - reverseAnimation * repeatDelay) / duration;","of = easing == 2.0 ? pow(of, 3.0) : of;","of = easing == 3.0 ? 1.0 - pow(1.0 - of, 3.0) : of;","of = easing == 4.0 ? of < 0.5 ? 4.0 * pow(of, 3.0) : 1.0 - pow(-2.0 * of + 2.0, 3.0) / 2.0 : of;","bool oscillate = repeatType == 3.0 && mod(oi, 2.0) == 1.0;",`${e.out} = oscillate ? 1.0 - of : of;`]}const a={Linear:1,EaseIn:2,EaseOut:3,EaseInOut:4},l={Loop:1,None:2,Oscillate:3},c={Local:1,Global:2};function u(e){const t=a[e.easing],o=l[e.repeatType],r=c[e.timeOriginSelector];return[[e.duration,e.startTimeOffset,e.repeatDelay,r],[o,t,e.playAnimation,e.reverseAnimation]]}const f={scalar:new class extends n{constructor(){super(...arguments),this.opcode=++s,this.length=1,this.ins=0,this.outs=1,this.microcode=["out0 = vec4(atom0.y, atom0.y, atom0.y, atom0.y);"]}encode(e){return[[this.opcode,e,0,0]]}},vector3:new class extends n{constructor(){super(...arguments),this.opcode=++s,this.length=1,this.ins=0,this.outs=1,this.microcode=["out0 = vec4(atom0.yzw, 0.0);"]}encode(e){return[[this.opcode,e[0]||0,e[1]||0,e[2]||0]]}},vector4:new class extends n{constructor(){super(...arguments),this.opcode=++s,this.length=2,this.ins=0,this.outs=1,this.microcode=["out0 = atom1;"]}encode(e){return[[this.opcode,0,0,0],e]}},animatedTransform:new class extends n{constructor(){super(...arguments),this.opcode=++s,this.length=10,this.ins=1,this.outs=1,this.microcode=["vec2 fromTranslation = atom1.xy;","vec2 toTranslation = atom1.zw;","float fromRotation = atom2.x;","float toRotation = atom2.y;","float fromScale = atom2.z;","float toScale = atom2.w;","bool relativeTranslation = atom9.x == 1.0;","bool absoluteScale = atom9.y == 1.0;","vec2 translationMultiplier = relativeTranslation ? pixelDimensions : vec2(1.0, 1.0);","float scaleDivisor = absoluteScale ? pixelDimensions.y : 1.0;","float fTranslation;","{",...i({duration:"atom3.x",startTimeOffset:"atom3.y",repeatDelay:"atom3.z",timeOriginSelector:"atom3.w",repeatType:"atom4.x",easing:"atom4.y",playAnimation:"atom4.z",reverseAnimation:"atom4.w",out:"fTranslation"}),"}","float fRotation;","{",...i({duration:"atom5.x",startTimeOffset:"atom5.y",repeatDelay:"atom5.z",timeOriginSelector:"atom5.w",repeatType:"atom6.x",easing:"atom6.y",playAnimation:"atom6.z",reverseAnimation:"atom6.w",out:"fRotation"}),"}","float fScale;","{",...i({duration:"atom7.x",startTimeOffset:"atom7.y",repeatDelay:"atom7.z",timeOriginSelector:"atom7.w",repeatType:"atom8.x",easing:"atom8.y",playAnimation:"atom8.z",reverseAnimation:"atom8.w",out:"fScale"}),"}","vec2 aTranslation = mix(fromTranslation, toTranslation, fTranslation);","float aRotation = mix(fromRotation, toRotation, fRotation);","float aScale = mix(fromScale, toScale, fScale);","vec2 pTranslation = in0.xy;","float pRotation = in0.z;","float pScale = in0.w;","aTranslation *= translationMultiplier;","aScale /= scaleDivisor;","float rotation = pRotation + aRotation;","float scale = pScale * aScale;","float sin1 = sin(pRotation);","float cos1 = cos(pRotation);","float s1 = pScale;","float x1 = pTranslation.x;","float y1 = pTranslation.y;","float x2 = aTranslation.x;","float y2 = aTranslation.y;","\n    vec2 translation = vec2(\n      cos1 * s1 * x2 - sin1 * s1 * y2 + x1,\n      sin1 * s1 * x2 + cos1 * s1 * y2 + y1\n    );\n    ","out0 = vec4(translation, rotation, scale);"]}encode(e){return[[this.opcode,0,0,0],[e.translation.from[0],e.translation.from[1],e.translation.to[0],e.translation.to[1]],[e.rotation.from,e.rotation.to,e.scale.from,e.scale.to],...u(e.translation.timing),...u(e.rotation.timing),...u(e.scale.timing),[e.relativeTranslation?1:0,e.absoluteScale?1:0,0,0]]}},animatedColor:new class extends n{constructor(){super(...arguments),this.opcode=++s,this.length=7,this.ins=1,this.outs=1,this.microcode=["float fromOpacity = atom0.y;","float toOpacity = atom0.z;","vec4 fromColor = atom1;","vec4 toColor = atom2;","float fColor;","{",...i({duration:"atom3.x",startTimeOffset:"atom3.y",repeatDelay:"atom3.z",timeOriginSelector:"atom3.w",repeatType:"atom4.x",easing:"atom4.y",playAnimation:"atom4.z",reverseAnimation:"atom4.w",out:"fColor"}),"}","float fOpacity;","{",...i({duration:"atom5.x",startTimeOffset:"atom5.y",repeatDelay:"atom5.z",timeOriginSelector:"atom5.w",repeatType:"atom6.x",easing:"atom6.y",playAnimation:"atom6.z",reverseAnimation:"atom6.w",out:"fOpacity"}),"}","vec4 aColor = mix(fromColor, toColor, fColor);","aColor.a *= mix(fromOpacity, toOpacity, fOpacity);","vec4 pColor = in0;","out0 = aColor * pColor;"]}encode(e){return[[this.opcode,e.opacity.from,e.opacity.to,0],[e.color.from[0],e.color.from[1],e.color.from[2],e.color.from[3]],[e.color.to[0],e.color.to[1],e.color.to[2],e.color.to[3]],...u(e.color.timing),...u(e.opacity.timing)]}},ret:new class extends n{constructor(){super(...arguments),this.opcode=++s,this.length=1,this.ins=0,this.outs=0,this.microcode=["break;"]}encode(){return[[this.opcode,0,0,0]]}}},p=40,m=4;function h(e){const t=[];t.push(`float globalTime = ${e.globalTime};`),t.push(`float localTimeOrigin = ${e.localTimeOrigin};`),t.push(`vec2 pointer = ${e.animationPointer};`),t.push(`vec2 size = ${e.animationTextureSize};`),t.push("int top = 0;"),t.push(`vec4 stack[${m}];`),t.push(`for (int counter = 0; counter < ${p}; counter++) {`),t.push(`vec4 atom0 = texture(${e.animationTexture}, (pointer + 0.5) / size);`),t.push("pointer.x += 1.0;"),t.push(`vec2 pixelDimensions = ${e.pixelDimensions};`),t.push("if (false) {");for(const o in f){const r=f[o];t.push(`} else if (int(atom0.x) == ${r.opcode}) {`);for(const o of r.generateSource(e))t.push(o)}return t.push("} // End if-else."),t.push("} // End for."),t.push(`${e.out} = top > 0 ? stack[top - 1] : vec4(0.0);`),t.join("\n")}},65460:(e,t,o)=>{o.d(t,{BI:()=>y,D3:()=>h,XJ:()=>d,lc:()=>m,mX:()=>_,rU:()=>g,tH:()=>x});var r=o(88685);const n="__begin__",s="__end__",i=new RegExp(n,"ig"),a=new RegExp(s,"ig"),l=new RegExp("^"+n,"i"),c=new RegExp(s+"$","i"),u='"',f=u+" + ",p=" + "+u;function m(e){return e.replaceAll(new RegExp("\\[","g"),"{").replaceAll(new RegExp("\\]","g"),"}")}function h(e){return e.replaceAll(new RegExp("\\{","g"),"[").replaceAll(new RegExp("\\}","g"),"]")}function d(e){const t={expression:"",type:"none"};return e.labelExpressionInfo?e.labelExpressionInfo.value?(t.expression=e.labelExpressionInfo.value,t.type="conventional"):e.labelExpressionInfo.expression&&(t.expression=e.labelExpressionInfo.expression,t.type="arcade"):null!=e.labelExpression&&(t.expression=m(e.labelExpression),t.type="conventional"),t}function y(e){const t=d(e);switch(t.type){case"conventional":return _(t.expression);case"arcade":return t.expression}return null}function g(e){const t=d(e);switch(t.type){case"conventional":return function(e){const t=e?.match(S);return t?.[1].trim()||null}(t.expression);case"arcade":return x(t.expression)}return null}function _(e){let t;return e?(t=(0,r.HC)(e,(e=>n+'$feature["'+e+'"]'+s)),t=l.test(t)?t.replace(l,""):u+t,t=c.test(t)?t.replace(c,""):t+u,t=t.replaceAll(i,f).replaceAll(a,p)):t='""',t}const S=/^\s*\{([^}]+)\}\s*$/i;const M=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])(.+)(\2)\]));?\s*$/i,b=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])(.+)(\2)\]));?\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(\1|\3)(\5)\s*\));?\s*$/i,C=/^\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(.+)(\1)\s*\));?\s*$/i;function x(e){if(!e)return null;let t=M.exec(e)||b.exec(e);return t?t[1]||t[3]:(t=C.exec(e),t?t[2]:null)}},84202:(e,t,o)=>{o.d(t,{A7:()=>c,Cx:()=>u,Hk:()=>f,JJ:()=>d,SF:()=>p,UK:()=>l,jM:()=>m,x3:()=>h});o(81806);var r=o(86875),n=o(7246),s=o(76940),i=o(86659),a=o(44460);const l=s.A.fromJSON(a.Cb),c=n.A.fromJSON(a.yM),u=r.A.fromJSON(a.WR),f=i.A.fromJSON(a.JZ);function p(e){if(null==e)return null;switch(e.type){case"mesh":return null;case"point":case"multipoint":return l;case"polyline":return c;case"polygon":case"extent":return u}return null}const m=s.A.fromJSON(a.nC),h=n.A.fromJSON(a.HW),d=r.A.fromJSON(a.b6)},89657:(e,t,o)=>{o.d(t,{Q:()=>r});const r={isAlongLine:0,isAbsoluteSize:1,isDiscrete:2}},90113:(e,t,o)=>{var r;o.d(t,{$w:()=>u,Fb:()=>a,Fz:()=>y,H_:()=>r,J5:()=>l,M:()=>p,Ni:()=>f,V5:()=>i,Xx:()=>d,YV:()=>b,au:()=>c,b5:()=>_,bg:()=>S,cZ:()=>x,cn:()=>h,eo:()=>C,kx:()=>g,os:()=>n,qM:()=>m,rp:()=>s,ti:()=>M,v9:()=>v}),function(e){e[e.Geographic=0]="Geographic",e[e.Arithmatic=1]="Arithmatic"}(r||(r={}));const n=3.14159265359/180,s=3.14159265359/128,i=1,a=1.1,l=1,c=24,u=8,f=1e-5,p=.05,m=1e-30,h=4,d=0,y=2,g=2,_=3,S=0,M=3,b=16777216,C=1.1,x=16,v=128},92045:(e,t,o)=>{o.d(t,{Aw:()=>i,DN:()=>r,EA:()=>s,Gm:()=>n,t0:()=>l,xq:()=>a});const r="__esri_stream_id__",n="__esri_timestamp__",s="__esri_track_part__",i="__esri_time_received__",a="__esri_track_line__";var l;!function(e){e[e.TrackLine=0]="TrackLine",e[e.LatestObservation=1]="LatestObservation",e[e.PreviousObservation=2]="PreviousObservation"}(l||(l={}))},97763:(e,t,o)=>{o.d(t,{$w:()=>g,Bu:()=>O,DW:()=>w,FH:()=>q,FM:()=>c,G9:()=>s,GV:()=>S,Go:()=>u,K3:()=>F,Kn:()=>v,MM:()=>m,MO:()=>J,Nl:()=>P,Ny:()=>M,O2:()=>$,UE:()=>L,YC:()=>H,YF:()=>z,ZO:()=>E,_1:()=>A,_H:()=>C,_W:()=>_,_d:()=>I,bs:()=>G,dI:()=>K,e6:()=>f,gQ:()=>l,iA:()=>R,jn:()=>d,lW:()=>p,mA:()=>h,n5:()=>N,pM:()=>k,pV:()=>x,pk:()=>V,rB:()=>U,s4:()=>n,xo:()=>T,yH:()=>b,yX:()=>X,zb:()=>D,zr:()=>y});var r=o(13442);function n(e,t,o,r){return function(e){return"function"==typeof e}(e)?e(t,o,r):e}function s(e){return[e.r,e.g,e.b,e.a]}const i=" /-,\n";function a(e){let t=e.length;for(;t--;)if(!i.includes(e.charAt(t)))return!1;return!0}function l(e,t){const o=[];let r=0,n=-1;do{if(n=e.indexOf("[",r),n>=r){if(n>r){const t=e.slice(r,n);o.push([t,null,a(t)])}if(r=n+1,n=e.indexOf("]",r),n>=r){if(n>r){const s=t[e.slice(r,n)];s&&o.push([null,s,!1])}r=n+1}}}while(-1!==n);if(r<e.length){const t=e.slice(r);o.push([t,null,a(t)])}return o}function c(e,t,o,r){let n="",s=null;for(const i of t){const[t,r,a]=i;if(t)a?s=t:(s&&(n+=s,s=null),n+=t);else{let t=r;null!=o&&(t=J(r,o));const i=e.attributes[t];i&&(s&&(n+=s,s=null),n+=i)}}return function(e,t){switch("string"!=typeof e&&(e=String(e)),t){case"LowerCase":return e.toLowerCase();case"Allcaps":return e.toUpperCase();default:return e}}(n,r)}function u(e,t,o,r,n,s){let i=!(arguments.length>6&&void 0!==arguments[6])||arguments[6];const a=t/n,l=o/s,c=Math.ceil(a/2),u=Math.ceil(l/2);for(let f=0;f<s;f++)for(let o=0;o<n;o++){const p=4*(o+(i?s-f-1:f)*n);let m=0,h=0,d=0,y=0,g=0,_=0,S=0;const M=(f+.5)*l;for(let r=Math.floor(f*l);r<(f+1)*l;r++){const n=Math.abs(M-(r+.5))/u,s=(o+.5)*a,i=n*n;for(let l=Math.floor(o*a);l<(o+1)*a;l++){let o=Math.abs(s-(l+.5))/c;const n=Math.sqrt(i+o*o);n>=-1&&n<=1&&(m=2*n*n*n-3*n*n+1,m>0&&(o=4*(l+r*t),S+=m*e[o+3],d+=m,e[o+3]<255&&(m=m*e[o+3]/250),y+=m*e[o],g+=m*e[o+1],_+=m*e[o+2],h+=m))}}r[p]=y/h,r[p+1]=g/h,r[p+2]=_/h,r[p+3]=S/d}}function f(e){return e?[e[0],e[1],e[2],e[3]/255]:[0,0,0,0]}function p(e){return e.data?.symbol??null}function m(e){return"CIMVectorMarker"===e.type||"CIMPictureMarker"===e.type||"CIMBarChartMarker"===e.type||"CIMCharacterMarker"===e.type||"CIMPieChartMarker"===e.type||"CIMStackedBarChartMarker"===e.type}function h(e){return"CIMGradientStroke"===e.type||"CIMPictureStroke"===e.type||"CIMSolidStroke"===e.type}function d(e){return null!=e&&("CIMGradientFill"===e.type||"CIMHatchFill"===e.type||"CIMPictureFill"===e.type||"CIMSolidFill"===e.type||"CIMWaterFill"===e.type)}function y(e){return null!=e&&("CIMMarkerPlacementAlongLineRandomSize"===e.type||"CIMMarkerPlacementAlongLineSameSize"===e.type||"CIMMarkerPlacementAlongLineVariableSize"===e.type||"CIMMarkerPlacementAtExtremities"===e.type||"CIMMarkerPlacementAtMeasuredUnits"===e.type||"CIMMarkerPlacementAtRatioPositions"===e.type||"CIMMarkerPlacementOnLine"===e.type||"CIMMarkerPlacementOnVertices"===e.type)}const g=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return null==e||isNaN(e)?t:e},_=(e,t)=>null!=e?e:t,S=(e,t)=>e??t,M=e=>e.tintColor?f(e.tintColor):[255,255,255,1],b=e=>{if(!e)return!1;for(const t of e)switch(t.type){case"CIMGeometricEffectBuffer":case"CIMGeometricEffectOffset":case"CIMGeometricEffectDonut":return!0}return!1};function C(){return Promise.all([o.e(2612),o.e(7983)]).then(o.bind(o,1669))}function x(e){if(!e)return"normal";switch(e.toLowerCase()){case"italic":return"italic";case"oblique":return"oblique";default:return"normal"}}function v(e){if(!e)return"normal";switch(e.toLowerCase()){case"bold":return"bold";case"bolder":return"bolder";case"lighter":return"lighter";default:return"normal"}}function I(e){let t="normal",o="normal";if(e){const r=e.toLowerCase();r.includes("italic")?t="italic":r.includes("oblique")&&(t="oblique"),r.includes("bold")?o="bold":r.includes("light")&&(o="lighter")}return{style:t,weight:o}}function w(e){return e.underline?"underline":e.strikethrough?"line-through":"none"}function k(e){if(!e)return null;switch(e.type){case"CIMPolygonSymbol":if(e.symbolLayers)for(const t of e.symbolLayers){const e=k(t);if(null!=e)return e}break;case"CIMTextSymbol":return k(e.symbol);case"CIMSolidFill":return e.color}return null}function A(e){if(e)switch(e.type){case"CIMPolygonSymbol":case"CIMLineSymbol":{const t=e.symbolLayers;if(t)for(const e of t){const t=A(e);if(null!=t)return t}break}case"CIMTextSymbol":return A(e.symbol);case"CIMSolidStroke":return e.color}}function T(e){if(e)switch(e.type){case"CIMPolygonSymbol":case"CIMLineSymbol":if(e.symbolLayers)for(const t of e.symbolLayers){const e=T(t);if(void 0!==e)return e}break;case"CIMTextSymbol":return T(e.symbol);case"CIMSolidStroke":case"CIMGradientStroke":case"CIMPictureStroke":return e.width}}function O(e){switch(e){case"Left":default:return"left";case"Right":return"right";case"Center":case"Justify":return"center"}}function P(e){switch(e){case"Top":default:return"top";case"Center":return"middle";case"Baseline":return"baseline";case"Bottom":return"bottom"}}function $(e){return(e?Object.keys(e):[]).map((t=>({name:t,alias:t,type:"string"==typeof e[t]?"esriFieldTypeString":"esriFieldTypeDouble"})))}const L=e=>e.includes("data:image/svg+xml");function N(e){if(!e)return null;switch(e.type){case"CIMPointSymbol":case"CIMTextSymbol":return"esriGeometryPoint";case"CIMLineSymbol":return"esriGeometryPolyline";case"CIMPolygonSymbol":return"esriGeometryPolygon";default:return null}}function z(e){return e?e.charAt(0).toLowerCase()+e.slice(1):e}function D(e,t,o,r,n,s){let i=!(arguments.length>6&&void 0!==arguments[6])||arguments[6];const{infos:a}=s;let l=1,c=0,u=0,f=0,p=1;for(const{absoluteAnchorPoint:d,offsetX:y,offsetY:g,rotation:_,size:S,frameHeight:M,rotateClockWise:b,scaleSymbolsProportionally:C}of a)p=d?1:l,u=W(y,g,c,p,u),f=j(y,g,c,p,f),M&&(C||i)&&(l*=S/M),c=B(_,b,c);const m=W(r,n,c,p,u),h=j(r,n,c,p,f);return{size:e*l,rotation:B(t,o,c),offsetX:m,offsetY:h}}function E(e){if(null==e)return!1;if(Array.isArray(e))return e.every((e=>E(e)));switch(typeof e){case"string":return!!e;case"number":return!isNaN(e)}}function R(e,t){if("color"===t||"outlinecolor"===t||"backgroundcolor"===t||"borderlinecolor"===t||"tintcolor"===t)return[...r.K[t]];const o=r.D[e];if(!o)throw new Error(`InternalError: default value for type ${e}.`);return o[t]}function F(e){return"string"==typeof e?function(e){return e.split(" ").map((e=>Number(e)))}(e):e}function q(e){return e?.dashTemplate&&(e.dashTemplate=F(e.dashTemplate)),e}function G(e){if(null==e)return"Normal";switch(e.type){case"CIMTextSymbol":return e.textCase??"Normal";case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":{const t=e.symbolLayers;if(!t)return"Normal";for(const e of t)if("CIMVectorMarker"===e.type)return G(e)}break;case"CIMVectorMarker":{const t=e.markerGraphics;if(!t)return"Normal";for(const e of t)if(e.symbol)return G(e.symbol)}}return"Normal"}function H(e){if(e)switch(e.type){case"CIMTextSymbol":return e.height;case"CIMPointSymbol":{let t=0;if(e.symbolLayers)for(const o of e.symbolLayers)if(o)switch(o.type){case"CIMCharacterMarker":case"CIMPictureMarker":case"CIMVectorMarker":case"CIMObjectMarker3D":case"CIMglTFMarker3D":{const e=o.size??r.D.CIMVectorMarker.size;e>t&&(t=e);break}}return t}case"CIMLineSymbol":case"CIMPolygonSymbol":{let t=0;if(e.symbolLayers)for(const o of e.symbolLayers)if(o)switch(o.type){case"CIMSolidStroke":case"CIMPictureStroke":case"CIMGradientStroke":{const e=o.width;null!=e&&e>t&&(t=e);break}case"CIMCharacterMarker":case"CIMPictureMarker":case"CIMVectorMarker":case"CIMObjectMarker3D":case"CIMglTFMarker3D":if(o.markerPlacement&&y(o.markerPlacement)){const e=o.size??r.D.CIMVectorMarker.size;e>t&&(t=e)}break;case"CIMPictureFill":{const e=o.height;null!=e&&e>t&&(t=e)}}return t}}}function J(e,t){if(null!==t){const o=t.get(e);return o?o.name:e}return e}function V(e){return e.map((e=>({...e,propertyName:z(e.propertyName)})))}function U(e){const t={};for(const o in e){const r=e[o];t[z(o)]=r}return t}function j(e,t,o,r,n){const s=o*Math.PI/180;if(s){const o=Math.cos(s);return(Math.sin(s)*e+o*t)*r+n}return t*r+n}function W(e,t,o,r,n){const s=o*Math.PI/180;return s?(Math.cos(s)*e-Math.sin(s)*t)*r+n:e*r+n}function B(e,t,o){return t?o-e:o+e}function K(e,t,o){const r="Color"===o||"TintColor"===o||"ToColor"===o,n="Rotation"===o||"Angle"===o||"ToRotation"===o;let s=t[z(o)];if(null!=s&&(r?s=[s[0]/255,s[1]/255,s[2]/255,s[3]/255]:n&&(s*=Math.PI/180)),null==s&&(s=R(t.type,o.toLowerCase()),null!=s&&(r?s=[s[0]/255,s[1]/255,s[2]/255,s[3]]:n&&(s*=Math.PI/180))),null!=t.primitiveName){const i=e[t.primitiveName];if(null!=i){const e=i[o];null==e||("string"==typeof e||"number"==typeof e||Array.isArray(e)?(s=e,null!=s&&(r?s=[s[0]/255,s[1]/255,s[2]/255,s[3]/255]:n&&(s*=Math.PI/180))):(s={valueExpressionInfo:e,defaultValue:s},null!=s&&(r?s={type:"Process",op:"ArcadeColor",value:s}:n&&(s={type:"Process",op:"Divide",left:s,right:180/Math.PI}))))}}if(null==s)throw new Error(`Failed to derive a value or an expression for "${o}".`);return s}function X(e,t){return Math.max(Math.min((e??t)/100,1),0)}}}]);
//# sourceMappingURL=3990.a9045f0a.chunk.js.map