var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in a){var o=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){a[e]=t},e.parcelRequired7c6=o);var r=o("kEUo3");const l=document.querySelector(".feedback-form");const n=(0,r.throttle)((()=>{const e={email:l.elements.email.value,message:l.elements.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500);l.addEventListener("input",n);const s=JSON.parse(localStorage.getItem("feedback-form-state"));l.elements.email.value=s.email,l.elements.message.value=s.message,l.addEventListener("submit",(e=>{e.preventDefault(),localStorage.removeItem("feedback-form-state"),l.reset()}));
//# sourceMappingURL=03-feedback.00afb1b0.js.map
