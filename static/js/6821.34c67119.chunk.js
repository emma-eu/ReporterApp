"use strict";(self.webpackChunkfeedback_map=self.webpackChunkfeedback_map||[]).push([[4787,6821],{54787:(t,e,n)=>{n.d(e,{c:()=>r,g:()=>o});var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function o(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}},56821:(t,e,n)=>{n.r(e),n.d(e,{l:()=>f});var r=n(54787);var o,i={exports:{}};var a=function(){return o||(o=1,t=i,e="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,n=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var n,r,o=t;o.ready=new Promise(((t,e)=>{n=t,r=e}));var i=Object.assign({},o),a="object"==typeof window,f="function"==typeof importScripts;"object"==typeof process&&"object"==typeof process.versions&&process.versions.node;var u,c="";(a||f)&&(f?c=self.location.href:"undefined"!=typeof document&&document.currentScript&&(c=document.currentScript.src),e&&(c=e),c=0!==c.indexOf("blob:")?c.substr(0,c.replace(/[?#].*/,"").lastIndexOf("/")+1):"",f&&(u=t=>{var e=new XMLHttpRequest;return e.open("GET",t,!1),e.responseType="arraybuffer",e.send(null),new Uint8Array(e.response)}));var s,l,p=o.print||console.log.bind(console),d=o.printErr||console.error.bind(console);Object.assign(o,i),i=null,o.arguments&&o.arguments,o.thisProgram&&o.thisProgram,o.quit&&o.quit,o.wasmBinary&&(s=o.wasmBinary),"object"!=typeof WebAssembly&&P("no native wasm support detected");var h,y,m=!1;function b(){var t=l.buffer;o.HEAP8=new Int8Array(t),o.HEAP16=new Int16Array(t),o.HEAPU8=h=new Uint8Array(t),o.HEAPU16=new Uint16Array(t),o.HEAP32=new Int32Array(t),o.HEAPU32=y=new Uint32Array(t),o.HEAPF32=new Float32Array(t),o.HEAPF64=new Float64Array(t)}var v=[],g=[],w=[];function A(t){v.unshift(t)}function E(t){w.unshift(t)}var R=0,_=null;function P(t){o.onAbort?.(t),d(t="Aborted("+t+")"),m=!0,t+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(t);throw r(e),e}var S,H=t=>t.startsWith("data:application/octet-stream;base64,");function T(t){if(t==S&&s)return new Uint8Array(s);if(u)return u(t);throw"both async and sync fetching of the wasm failed"}function I(t,e,n){return function(t){return s||!a&&!f||"function"!=typeof fetch?Promise.resolve().then((()=>T(t))):fetch(t,{credentials:"same-origin"}).then((e=>{if(!e.ok)throw"failed to load wasm binary file at '"+t+"'";return e.arrayBuffer()})).catch((()=>T(t)))}(t).then((t=>WebAssembly.instantiate(t,e))).then((t=>t)).then(n,(t=>{d(`failed to asynchronously prepare wasm: ${t}`),P(t)}))}H(S="libtess.wasm")||(S=function(t){return o.locateFile?o.locateFile(t,c):c+t}(S));var j=t=>{for(;t.length>0;)t.shift()(o)};o.noExitRuntime;var O,x=t=>{var e=(t-l.buffer.byteLength+65535)/65536;try{return l.grow(e),b(),1}catch(n){}},C=[null,[],[]],k="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0,M=(t,e)=>{var n=C[t];0===e||10===e?((1===t?p:d)(((t,e,n)=>{for(var r=e+n,o=e;t[o]&&!(o>=r);)++o;if(o-e>16&&t.buffer&&k)return k.decode(t.subarray(e,o));for(var i="";e<o;){var a=t[e++];if(128&a){var f=63&t[e++];if(192!=(224&a)){var u=63&t[e++];if((a=224==(240&a)?(15&a)<<12|f<<6|u:(7&a)<<18|f<<12|u<<6|63&t[e++])<65536)i+=String.fromCharCode(a);else{var c=a-65536;i+=String.fromCharCode(55296|c>>10,56320|1023&c)}}else i+=String.fromCharCode((31&a)<<6|f)}else i+=String.fromCharCode(a)}return i})(n,0)),n.length=0):n.push(e)},W=[],F=t=>{var e=W[t];return e||(t>=W.length&&(W.length=t+1),W[t]=e=O.get(t)),e},U={e:()=>{throw 1/0},g:(t,e,n)=>h.copyWithin(t,e,e+n),f:t=>{var e=h.length,n=2147483648;if((t>>>=0)>n)return!1;for(var r=(t,e)=>t+(e-t%e)%e,o=1;o<=4;o*=2){var i=e*(1+.2/o);i=Math.min(i,t+100663296);var a=Math.min(n,r(Math.max(t,i),65536));if(x(a))return!0}return!1},c:(t,e,n,r)=>{for(var o=0,i=0;i<n;i++){var a=y[e>>2],f=y[e+4>>2];e+=8;for(var u=0;u<f;u++)M(t,h[a+u]);o+=f}return y[r>>2]=o,0},b:function(t,e){var n=L();try{return F(t)(e)}catch(r){if(z(n),r!==r+0)throw r;q(1,0)}},h:function(t,e,n,r){var o=L();try{return F(t)(e,n,r)}catch(i){if(z(o),i!==i+0)throw i;q(1,0)}},d:function(t,e){var n=L();try{F(t)(e)}catch(r){if(z(n),r!==r+0)throw r;q(1,0)}},a:function(t,e,n){var r=L();try{F(t)(e,n)}catch(o){if(z(r),o!==o+0)throw o;q(1,0)}}},B=function(){var t={a:U};function e(t,e){return B=t.exports,l=B.i,b(),O=B.m,function(t){g.unshift(t)}(B.j),function(){if(R--,o.monitorRunDependencies?.(R),0==R&&_){var t=_;_=null,t()}}(),B}if(R++,o.monitorRunDependencies?.(R),o.instantiateWasm)try{return o.instantiateWasm(t,e)}catch(i){d(`Module.instantiateWasm callback failed with error: ${i}`),r(i)}return function(t,e,n,r){return t||"function"!=typeof WebAssembly.instantiateStreaming||H(e)||"function"!=typeof fetch?I(e,n,r):fetch(e,{credentials:"same-origin"}).then((t=>WebAssembly.instantiateStreaming(t,n).then(r,(function(t){return d(`wasm streaming compile failed: ${t}`),d("falling back to ArrayBuffer instantiation"),I(e,n,r)}))))}(s,S,t,(function(t){e(t.instance)})).catch(r),{}}();o._malloc=t=>(o._malloc=B.k)(t),o._free=t=>(o._free=B.l)(t),o._triangulate=(t,e,n,r,i,a)=>(o._triangulate=B.n)(t,e,n,r,i,a);var D,q=(t,e)=>(q=B.o)(t,e),L=()=>(L=B.p)(),z=t=>(z=B.q)(t);function N(){function t(){D||(D=!0,o.calledRun=!0,m||(j(g),n(o),o.onRuntimeInitialized&&o.onRuntimeInitialized(),function(){if(o.postRun)for("function"==typeof o.postRun&&(o.postRun=[o.postRun]);o.postRun.length;)E(o.postRun.shift());j(w)}()))}R>0||(function(){if(o.preRun)for("function"==typeof o.preRun&&(o.preRun=[o.preRun]);o.preRun.length;)A(o.preRun.shift());j(v)}(),R>0||(o.setStatus?(o.setStatus("Running..."),setTimeout((function(){setTimeout((function(){o.setStatus("")}),1),t()}),1)):t()))}if(_=function t(){D||N(),D||(_=t)},o.preInit)for("function"==typeof o.preInit&&(o.preInit=[o.preInit]);o.preInit.length>0;)o.preInit.pop()();N();let $=null,Y=null,G=null,X=null;let J=0;return o.triangulate=(t,e,n)=>{$||($=o._triangulate);let r=o.HEAPF32;const i=o.HEAP32.BYTES_PER_ELEMENT,a=r.BYTES_PER_ELEMENT;n>J&&(J=n,G&&(o._free(G),G=0),Y&&(o._free(Y),Y=0)),G||(G=o._malloc(n*a)),X||(X=o._malloc(4e3*i));const f=2*n;Y||(Y=o._malloc(f*a)),r=o.HEAPF32,r.set(t,G/a),o.HEAP32.set(e,X/i);const u=f/2,c=$(G,X,Math.min(e.length,4e3),2,Y,u),s=2*c;r=o.HEAPF32;const l=r.slice(Y/a,Y/a+s),p={};return p.buffer=l,p.vertexCount=c,p},t.ready},t.exports=n),i.exports;var t,e,n}();const f=function(t,e){for(var n=0;n<e.length;n++){const r=e[n];if("string"!=typeof r&&!Array.isArray(r))for(const e in r)if("default"!==e&&!(e in t)){const n=Object.getOwnPropertyDescriptor(r,e);n&&Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:()=>r[e]})}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}({__proto__:null,default:(0,r.g)(a)},[a])}}]);
//# sourceMappingURL=6821.34c67119.chunk.js.map