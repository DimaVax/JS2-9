function e(e){return e&&e.__esModule?e.default:e}var t=globalThis,n={},o={},l=t.parcelRequire94c2;null==l&&((l=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var l={id:e,exports:{}};return n[e]=l,t.call(l.exports,l,l.exports),l.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequire94c2=l),l.register;var r=l("f1q41"),i=l("5sKyw");const c=document.querySelector(".sigma-input"),a=document.querySelector(".link-button"),s=document.querySelector(".link-list"),d=[];console.log(d);const u=JSON.parse(localStorage.getItem("links"));null!==u&&0!==u.length&&u.forEach(t=>{let n=document.createElement("li");s.prepend(n);let o=document.createElement("p");o.setAttribute("contenteditable",""),o.textContent=t.text,o.setAttribute("id",t.id);let l=document.createElement("button");l.textContent="Remove",n.prepend(l),n.prepend(o),l.addEventListener("click",()=>{n.remove(),d.forEach(t=>{t.text===o.textContent&&(e(r).remove(d,e=>e===t),localStorage.setItem("links",JSON.stringify(d)))})}),o.addEventListener("blur",e=>{d.forEach((t,n)=>{let l=t.id;console.log(e.target),l===o.id&&(d[n].text=o.textContent,localStorage.setItem("links",JSON.stringify(d))),console.log(d)})});let i={text:t.text};d.push(i)}),a.addEventListener("click",()=>{if(c.value){let t=document.createElement("li");s.prepend(t);let n=document.createElement("p");n.textContent=c.value,n.setAttribute("contenteditable",""),n.setAttribute("id",(0,i.default)());let o=document.createElement("button");o.textContent="Remove",t.prepend(o),t.prepend(n),o.addEventListener("click",()=>{t.remove(),d.forEach(t=>{t.text===n.textContent&&(e(r).remove(d,e=>e===t),localStorage.setItem("links",JSON.stringify(d))),console.log(d)})}),n.addEventListener("blur",e=>{d.forEach((t,o)=>{let l=t.id;console.log(e.target),l===n.id&&(d[o].text=n.textContent,localStorage.setItem("links",JSON.stringify(d))),console.log(d)})});let l={text:c.value,id:n.id};d.push(l),localStorage.setItem("links",JSON.stringify(d))}});
//# sourceMappingURL=task3.8dc077c6.js.map
