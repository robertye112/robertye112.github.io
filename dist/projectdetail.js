!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}({8:function(e,t,n){var r=n(9);console.info("starting..");document.querySelector("#templateContainer").innerHTML=r.template1,document.querySelector(".testP").innerHTML="SYLVANIA",projects.images.forEach(e=>{})},9:function(e,t,n){"use strict";n.r(t),n.d(t,"template1",function(){return r});var r='\n    <style>\n      p {\n        color: white;\n        background-color: #666;\n        padding: 5px;\n      }\n    </style>\n    <p>\n      <slot name="my-text">My default text</slot>\n      My default text\n    </p>\n    <a>hello</a>\n  '}});