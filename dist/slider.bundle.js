!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=46)}({46:function(e,t,n){"use strict";const r=document.getElementsByClassName("slider"),o=document.getElementById("arrow-left"),l=document.getElementById("arrow-right");let u=1;const c=e=>{i(u+=e)},i=e=>{e>r.length&&(u=r.length),e<1&&(u=1),e+1>r.length?l.style.opacity=.2:l.style.opacity=1,o.style.opacity=e<2?.2:1,Array.from(r).forEach(e=>{e.classList.remove("show")}),r[u-1].classList.add("show")};i(u),o.addEventListener("click",()=>c(-1)),l.addEventListener("click",()=>c(1))}});
//# sourceMappingURL=slider.bundle.js.map