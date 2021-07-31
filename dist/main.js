(()=>{var e={694:function(e,t,a){String.prototype.repeat||(String.prototype.repeat=function(e){"use strict";if(null==this)throw new TypeError("can't convert "+this+" to object");var t=""+this;if((e=+e)!=e&&(e=0),e<0)throw new RangeError("repeat count must be non-negative");if(e==1/0)throw new RangeError("repeat count must be less than infinity");if(e=Math.floor(e),0==t.length||0==e)return"";if(t.length*e>=1<<28)throw new RangeError("repeat count must not overflow maximum string size");for(var a="";1==(1&e)&&(a+=t),0!=(e>>>=1);)t+=t;return a}),function(e){function t(e){var t=e.charCodeAt(0),a=1114112,r=0,o=0|e.length,i="";switch(t>>>4){case 12:case 13:r=128>(a=(31&t)<<6|63&e.charCodeAt(1))?0:2;break;case 14:r=2048>(a=(15&t)<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2))?0:3;break;case 15:30==t>>>3&&(r=65536>(a=(7&t)<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|e.charCodeAt(3))?0:4)}for(r&&(o<r?r=0:65536>a?i=n(a):1114112>a?i=n(55296+((a=a-65664|0)>>>10)|0,56320+(1023&a)|0):r=0);r<o;r=r+1|0)i+="�";return i}function a(){}function r(e){var t=0|e.charCodeAt(0);if(55296<=t&&56319>=t)if(56320<=(e=0|e.charCodeAt(1))&&57343>=e){if(65535<(t=(t<<10)+e-56613888|0))return n(240|t>>>18,128|t>>>12&63,128|t>>>6&63,128|63&t)}else t=65533;return 2047>=t?n(192|t>>>6,128|63&t):n(224|t>>>12,128|t>>>6&63,128|63&t)}function o(){}var n=String.fromCharCode,i={}.toString,s=e.SharedArrayBuffer,d=s?i.call(s):"",f=e.Uint8Array,l=f||Array,c=i.call((f?ArrayBuffer:l).prototype);s=o.prototype;var u=e.TextEncoder;a.prototype.decode=function(e){var a=e&&e.buffer||e,r=i.call(a);if(r!==c&&r!==d&&void 0!==e)throw TypeError("Failed to execute 'decode' on 'TextDecoder': The provided value is not of type '(ArrayBuffer or ArrayBufferView)'");e=f?new l(a):a,a="",r=0;for(var o=0|e.length;r<o;r=r+32768|0)a+=n.apply(0,e[f?"subarray":"slice"](r,r+32768|0));return a.replace(/[\xc0-\xff][\x80-\xbf]+|[\x80-\xff]/g,t)},e.TextDecoder||(e.TextDecoder=a),s.encode=function(e){for(var t=0|(e=void 0===e?"":(""+e).replace(/[\x80-\uD7ff\uDC00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]?/g,r)).length,a=new l(t),o=0;o<t;o=o+1|0)a[o]=e.charCodeAt(o);return a},u||(e.TextEncoder=o)}(""+void 0==typeof a.g?""+void 0==typeof self?this:self:a.g)},874:()=>{importScripts("parser.js"),MSG_DATA=0,MSG_LOAD=1,MSG_ERROR=2,MSG_STL_LOADED=3,MSG_LOAD_IN_PROGRESS=4;var e=null,t=null,a=null,r=-1,o=!1,n="jszip.min.js";function i(e){return!isNaN(parseFloat(e))&&isFinite(e)}function s(e){postMessage({msg_type:MSG_ERROR,data:e})}function d(t){if(t)try{parse_3d_file(e,t,f,n)}catch(e){s("Error parsing the file")}else s("no data")}function f(e){"string"!=typeof e?postMessage({msg_type:MSG_STL_LOADED,vertices:e.vertices,faces:e.faces,colors:e.colors}):s(e)}function l(e){var t=new FileReader;t.onerror=function(e){var t="";switch(e.target.error.code){case e.target.error.NOT_FOUND_ERR:t="File not found";break;case e.target.error.NOT_READABLE_ERR:t="Can't read file - too large?";break;case e.target.error.ABORT_ERR:t="Read operation aborted";break;case e.target.error.SECURITY_ERR:t="File is locked";break;case e.target.error.ENCODING_ERR:t="File too large";break;default:t="Error reading file"}s(t)},t.onprogress=function(e){postMessage({msg_type:MSG_LOAD_IN_PROGRESS,id:r,loaded:e.loaded,total:e.total})},t.onload=function(e){d(e.target.result)},t.readAsArrayBuffer(e)}self.addEventListener("message",(function(f){switch(f.data.msg_type){case MSG_DATA:if(!f.data.data){s("no data");break}if(!f.data.data.filename&&!f.data.data.local_file){s("no file");break}f.data.jszip_path&&(n=f.data.jszip_path),f.data.data.local_file?(e=f.data.data.local_file.name?f.data.data.local_file.name:f.data.data.filename,t=f.data.data.local_file?f.data.data.local_file:null):f.data.data.filename&&(e=f.data.data.filename),f.data.data.x&&i(f.data.data.x)&&f.data.data.x,f.data.data.y&&i(f.data.data.y)&&f.data.data.y,f.data.data.y&&i(f.data.data.z)&&f.data.data.z,a=null,f.data.load_from_blob_or_ab&&(a=f.data.load_from_blob_or_ab),r=f.data.data.id?f.data.data.id:-1,o=!!f.data.get_progress&&f.data.get_progress;break;case MSG_LOAD:a?a instanceof ArrayBuffer?d(a):l(a):t?l(t):e&&function(e){!function(e){var t=new XMLHttpRequest;o&&(t.onprogress=function(e){postMessage({msg_type:MSG_LOAD_IN_PROGRESS,id:r,loaded:e.loaded,total:e.total})}),t.onreadystatechange=function(e){4==t.readyState&&200==t.status&&d(t.response)},t.open("GET",e,!0),t.responseType="arraybuffer",t.send(null)}(e)}(e);break;default:console.log("invalid msg: "+f.data.msg_type)}}))},477:()=>{ArrayBuffer.prototype.slice||(ArrayBuffer.prototype.slice=function(e,t){if(void 0===e&&(e=0),void 0===t&&(t=this.byteLength),e=Math.floor(e),t=Math.floor(t),e<0&&(e+=this.byteLength),t<0&&(t+=this.byteLength),e=Math.min(Math.max(0,e),this.byteLength),(t=Math.min(Math.max(0,t),this.byteLength))-e<=0)return new ArrayBuffer(0);var a=new ArrayBuffer(t-e),r=new Uint8Array(a),o=new Uint8Array(this,e,t-e);return r.set(o),a})}},t={};function a(r){var o=t[r];if(void 0!==o)return o.exports;var n=t[r]={exports:{}};return e[r].call(n.exports,n,n.exports,a),n.exports}a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{"use strict";a(694),a(874),a(477),Number.isInteger=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},init=function(){if(!window.MSStream){var e=document.currentScript.attributes.src.value,t=e.lastIndexOf("/");t>0&&e.substring(0,t+1)}}()})()})();