var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);var i=t("iQIUW");const r=document.querySelector('[name="delay"]'),l=document.querySelector('[name="delay"]'),d=document.querySelector('[name="amount"]'),a=document.querySelector("button");i.Notify.success(`Fulfilled promise ${(void 0).position} in ${(void 0).delay}ms`),i.Notify.failure(`Rejected promise ${(void 0).position} in ${(void 0).delay}ms`);function u(e,o){return new Promise(((n,t)=>{const i=Math.random()>.3;setTimeout((()=>{i?n({position:e,delay:o}):t({position:e,delay:o})}),o)}))}a.addEventListener("click",function(e){e.preventDefault();const o=r.value,n=(l.value,d.value);for(let e=1;n>=e;e++)u(e,o).then((({position:e,delay:o})=>{})).catch((({position:e,delay:o})=>{}))}());
//# sourceMappingURL=03-promises.38d6073b.js.map
