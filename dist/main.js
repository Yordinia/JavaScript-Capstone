(()=>{"use strict";var n,e,t,r,o={426:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"* {\r\n  box-sizing: content-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  font-family: Inter, sans-serif;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nheader {\r\n  padding: 5% 10%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n\r\n#header {\r\n  font-family: \"Cabin Sketch\", cursive;\r\n}\r\n\r\nheader nav {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\nheader a {\r\n  text-decoration: none;\r\n  color: #000;\r\n}\r\n\r\nnav ul li a {\r\n  text-decoration: none;\r\n  color: #000;\r\n}\r\n\r\nnav ul li a,\r\n.btn {\r\n  text-decoration: none;\r\n  color: #000;\r\n  transition: font-weight 0.3s ease, font-size 0.3s ease;\r\n}\r\n\r\n.modal-container a {\r\n  font-size: 25px;\r\n}\r\n\r\nheader a:hover {\r\n  font-weight: bold;\r\n  color: grey;\r\n}\r\n\r\nnav ul li a:hover {\r\n  font-weight: bold;\r\n  color: grey;\r\n  color: #000;\r\n}\r\n\r\nnav ul {\r\n  list-style-type: none;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n\r\n.main {\r\n  padding: 0% 10%;\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  row-gap: 1em;\r\n}\r\n\r\n.comments {\r\n  width: 80%;\r\n  padding: 10% 5%;\r\n  color: #fff;\r\n}\r\n\r\nnav ul li {\r\n  margin-right: 35px;\r\n}\r\n\r\nnav ul li a:hover,\r\n.btn:hover {\r\n  font-weight: bold;\r\n  font-size: 120%;\r\n  color: grey;\r\n}\r\n\r\n.homepage {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 20px;\r\n  background-color: rgb(206, 203, 203);\r\n  margin: auto;\r\n  padding: 3rem;\r\n}\r\n\r\n.buttons {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n.title-like-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-top: 1rem;\r\n}\r\n\r\nfooter {\r\n  padding: 5% 10%;\r\n  margin: auto;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.modal {\r\n  display: none;\r\n  position: fixed;\r\n  margin: 2% 5%;\r\n  height: 95vh;\r\n  width: 90%;\r\n  overflow-y: auto;\r\n  background-color: #fff;\r\n  border: 2px solid #000;\r\n  border-radius: 5px;\r\n  z-index: 9999;\r\n}\r\n\r\n.view {\r\n  display: block;\r\n}\r\n\r\n.modal-container {\r\n  width: 100%;\r\n  padding: 5% 2%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.modal-container img {\r\n  width: 50%;\r\n}\r\n\r\n.comment-box {\r\n  width: 75%;\r\n  height: 10vh;\r\n  overflow-y: auto;\r\n  border: 4px solid #000;\r\n  padding: 2% 5%;\r\n}\r\n\r\n.add-comment {\r\n  width: 75%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.add-comment input {\r\n  width: 50%;\r\n  padding: 2% 2%;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.add-comment textarea {\r\n  width: 50%;\r\n  padding: 2% 2%;\r\n  margin-bottom: 10px;\r\n  resize: none;\r\n}\r\n\r\n.add-comment button {\r\n  width: 25%;\r\n  padding: 2% 2%;\r\n  margin-bottom: 10px;\r\n  background-color: #fff;\r\n}\r\n\r\n.custom-background {\r\n  background-image: url('https://www.themealdb.com/images/media/meals/sstssx1487349585.jpg');\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .homepage {\r\n    grid-template-columns: repeat(1, 1fr);\r\n    padding: 1rem;\r\n    min-width: 12rem;\r\n  }\r\n}\r\n",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},654:(n,e,t)=>{var r=t(379),o=t.n(r),a=t(795),i=t.n(a),c=t(569),s=t.n(c),d=t(565),l=t.n(d),u=t(216),m=t.n(u),p=t(589),f=t.n(p),h=t(426),v={};v.styleTagTransform=f(),v.setAttributes=l(),v.insert=s().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=m(),o()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var m=t(u),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)e[m].references++,e[m].updater(p);else{var f=o(p,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},138:(n,e,t)=>{t.a(n,(async(n,e)=>{try{t(654);var r=t(635),o=t(974),a=t(468),i=t(969),c=t(443),s=t(753),d=t(733),l=t(98),u=t(29);async function m(){return{allMeals:await(0,s.Z)(),allLikes:await(0,i.Z)()}}document.addEventListener("click",(async n=>{const e=document.querySelectorAll(".like-buttons");let t,r,o=!1;if(e.forEach((e=>{e.contains(n.target)&&(o=!0,r=e.id,t=e)})),o){"Created"===await(0,c.Z)(r)&&console.log("Updated like to API sucessfully");const{allMeals:n,allLikes:e}=await m(),{likes:o}=e.find((n=>n.item_id===r));(0,d.Z)(t,o);const a=(0,l.Z)(r,o),i=(0,u.Z)(n);console.log("fetch updated (hopefully successfully), TESTs are - ",a===i)}})),(0,a.Z)(await m()),document.addEventListener("click",(n=>{const e=document.querySelectorAll(".comments"),t=document.querySelector(".fa-xmark"),a=document.querySelector("#comment-submit");if(n.target===t&&(document.querySelector(".modal").classList.remove("view"),document.querySelector(".modal").innerHTML=""),n.target===a){const n=document.querySelector("#name").value,e=document.querySelector("#comment").value,t=document.querySelector(".add-comment").id;(0,o.Z)(t,n,e).then((()=>{(0,r.K)(t)}))}e.forEach(((e,t)=>{n.target===e&&(document.querySelector(".modal").classList.add("view"),(0,r.o)(t))}))}));const p=document.querySelector(".add-comment");null!==p&&p.addEventListener("submit",(n=>{n.preventDefault()})),e()}catch(f){e(f)}}),1)},98:(n,e,t)=>{t.d(e,{Z:()=>r});const r=(n,e)=>{let t=document.getElementById(n).textContent;return t=parseInt(t,10),t===e}},29:(n,e,t)=>{t.d(e,{Z:()=>r});const r=n=>document.querySelectorAll(".card").length===n.length},753:(n,e,t)=>{t.d(e,{Z:()=>r});const r=async function(){const n=await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken"),{meals:e}=await n.json();return e}},969:(n,e,t)=>{t.d(e,{Z:()=>r});const r=async()=>{const n=await fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/9vUKLfgfPbeVlsgu5dzp/likes/").catch((n=>console.log("Fetch Error",n)));let e;const t="application/json"===n.headers.get("Content-type");return t?(e=await n.json(),console.log("content-type==json? ",t,"get response-",n,"data- ",e)):e=JSON.parse(await n.text()),e}},635:(n,e,t)=>{t.d(e,{K:()=>r,o:()=>o});const r=n=>{(async n=>{let e=await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/vKZCdN5l6d0ODFZiWaxR/comments?item_id=${n}`);return e=await e.json(),e})(n).then((n=>{const e=document.querySelector(".comment-box");e.innerHTML="",n[0]&&n.forEach((n=>{const t=document.createElement("p");t.innerHTML=`${n.creation_date} ${n.username}: ${n.comment}`,e.appendChild(t)}))}))},o=async n=>{const e=await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken"),{meals:t}=await e.json();t.forEach(((e,t)=>{if(n===t){const n=document.querySelector(".modal");n.innerHTML="",async function(n){const e=await(async n=>{const e=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${n}`,t=await fetch(e);return(await t.json()).meals[0].strInstructions})(n);return e}(e.idMeal).then((t=>{n.innerHTML=`<div class="modal-container">\n      <a href="#"><i class="fa-solid fa-xmark"></i></a>\n      <img src="${e.strMealThumb}"/>\n      <h2>${e.strMeal}</h2>\n      <p>${t}</p>\n      <h2> Comments </h2>\n      <div class = 'comment-box'>\n      \n      </div>\n      <h2>Add a Comment</h2>\n      <form  id="${e.idMeal}" class="add-comment">\n        <input id="name" type="text" placeholder="Your Name" required>\n        <textarea id="comment" type="text" maxlength="500" placeholder="Your Insights" required></textarea>\n        <button id="comment-submit" type="submit">Comment</button>\n      </form>\n      </div>`,r(e.idMeal)}))}}))}},974:(n,e,t)=>{t.d(e,{Z:()=>r});const r=async(n,e,t)=>{await fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/vKZCdN5l6d0ODFZiWaxR/comments",{method:"POST",body:JSON.stringify({item_id:n,username:e,comment:t}),headers:{"Content-type":"application/json"}})}},468:(n,e,t)=>{t.d(e,{Z:()=>r});const r=({allMeals:n,allLikes:e})=>{let t;const r=document.getElementById("homepage"),o=document.querySelector("#count");n.forEach(((n,a)=>{t=e.find((e=>e.item_id===n.idMeal))||{item_id:n.idMeal,likes:0};const i=((n,{likes:e})=>`\n    <div class="card border-primary mb-3" style="max-width: 20rem;">\n      <div class="card-header" id="header">\n      <img class= 'card-img-top' src = ${n.strMealThumb} alt= ${n.strMeal} ></img>  \n      <div class= 'title-like-container'>  \n          <h3>${n.strMeal} </h3>\n          <div class='heart hover-zoom'> \n            <button class='btn btn-success like-buttons hover-zoom' id='${n.idMeal}'>\n            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">\n            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>\n            </svg>\n            <br/>\n            ${e}\n            </button>\n          </div>  \n      </div>\n      </div>\n  \n      <div class="card-body">\n        <div class= 'buttons'>\n          <button type="button" class="btn btn-dark comments hover-zoom">Comments</button>\n          <button type="button" class="btn btn-dark hover-zoom">Reservations</button>\n        </div>\n      </div>\n    </div>`)(n,t);r.insertAdjacentHTML("beforeend",i),o.textContent=a+1})),console.log("Posting, fething"),console.log("Done screening meals")}},443:(n,e,t)=>{t.d(e,{Z:()=>r});const r=async n=>(await fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/9vUKLfgfPbeVlsgu5dzp/likes/",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({item_id:n})})).text()},733:(n,e,t)=>{t.d(e,{Z:()=>r});const r=(n,e)=>{n.lastChild.textContent=e}}},a={};function i(n){var e=a[n];if(void 0!==e)return e.exports;var t=a[n]={id:n,exports:{}};return o[n](t,t.exports,i),t.exports}n="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",e="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",t="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",r=n=>{n&&!n.d&&(n.d=1,n.forEach((n=>n.r--)),n.forEach((n=>n.r--?n.r++:n())))},i.a=(o,a,i)=>{var c;i&&((c=[]).d=1);var s,d,l,u=new Set,m=o.exports,p=new Promise(((n,e)=>{l=e,d=n}));p[e]=m,p[n]=n=>(c&&n(c),u.forEach(n),p.catch((n=>{}))),o.exports=p,a((o=>{var a;s=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[n])return o;if(o.then){var a=[];a.d=0,o.then((n=>{i[e]=n,r(a)}),(n=>{i[t]=n,r(a)}));var i={};return i[n]=n=>n(a),i}}var c={};return c[n]=n=>{},c[e]=o,c})))(o);var i=()=>s.map((n=>{if(n[t])throw n[t];return n[e]})),d=new Promise((e=>{(a=()=>e(i)).r=0;var t=n=>n!==c&&!u.has(n)&&(u.add(n),n&&!n.d&&(a.r++,n.push(a)));s.map((e=>e[n](t)))}));return a.r?d:i()}),(n=>(n?l(p[t]=n):d(m),r(c)))),c&&(c.d=0)},i.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return i.d(e,{a:e}),e},i.d=(n,e)=>{for(var t in e)i.o(e,t)&&!i.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},i.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),i.nc=void 0,i(138)})();
