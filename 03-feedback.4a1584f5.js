!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var r=a[e];delete a[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},e.parcelRequired7c6=r);var n=r("1WSnx"),o=document.querySelector(".feedback-form");var l=(0,n.throttle)((function(){var e={email:o.elements.email.value||"",message:o.elements.message.value||""};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500);o.addEventListener("input",l);var s=JSON.parse(localStorage.getItem("feedback-form-state"));s&&(o.elements.email.value=s.email,o.elements.message.value=s.message),o.addEventListener("submit",(function(e){e.preventDefault(),console.log(s),localStorage.removeItem("feedback-form-state"),o.reset()}))}();
//# sourceMappingURL=03-feedback.4a1584f5.js.map
