function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequire7bc7;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},t.parcelRequire7bc7=o);var l=o("7Y9D8");const i=document.querySelector(".form"),u=(e,t)=>new Promise(((r,n)=>{Math.random()>.3?r(`✅ Fulfilled promise ${e} in ${t}ms`):n(`❌ Rejected promise ${e} in ${t}ms`)}));i.addEventListener("submit",(t=>{t.preventDefault();const r=t.currentTarget.elements.step.value,n=t.currentTarget.elements.delay.value,o=t.currentTarget.elements.amount.value;for(let t=0;t<o;t+=1)setTimeout((()=>{u(t+1,+n+t*+r).then((t=>e(l).Notify.success(t))).catch((t=>e(l).Notify.failure(t)))}),+n+t*+r);t.currentTarget.reset()}));
//# sourceMappingURL=03-promises.eb1e7778.js.map