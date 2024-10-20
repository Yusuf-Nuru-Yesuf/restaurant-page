(()=>{"use strict";var e={365:(e,t,n)=>{n.d(t,{A:()=>c});var a=n(601),o=n.n(a),r=n(314),i=n.n(r)()(o());i.push([e.id,'body {\n  color: #7a2121;\n  font-family: "Roboto Light", sans-serif;\n  margin: 0;\n  padding: 0;\n  border: none;\n  background: rgba(205, 189, 129, 0.4);\n}\n\nheader {\n  margin: 0;\n  padding: 1rem 0 0 0;\n}\n\nnav {\n  margin: 0 auto;\n  width: 300px;\n  display: flex;\n  justify-content: space-between;\n}\n\nnav button {\n  color: #7a2121;\n  border-radius: 15px 15px 0 0;\n  background: transparent;\n  height: 2.3rem;\n  width: 5.3rem;\n  border: none;\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n\nli {\n  border: none;\n}\n\n.active {\n  border: rgba(220, 185, 106, 0.5) solid 1px;\n  border-bottom: none;\n  background-color: rgba(220, 185, 106, 0.5);\n}\n',""]);const c=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);a&&i[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var r={},i=[],c=0;c<e.length;c++){var s=e[c],d=a.base?s[0]+a.base:s[0],l=r[d]||0,p="".concat(d," ").concat(l);r[d]=l+1;var m=n(p),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)t[m].references++,t[m].updater(u);else{var h=o(u,a);a.byIndex=c,t.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var r=a(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var c=n(r[i]);t[c].references--}for(var s=a(e,o),d=0;d<r.length;d++){var l=n(r[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}r=s}}},659:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,o&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={id:a,exports:{}};return e[a](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var a=n(72),o=n.n(a),r=n(825),i=n.n(r),c=n(659),s=n.n(c),d=n(56),l=n.n(d),p=n(540),m=n.n(p),u=n(113),h=n.n(u),f=n(365),C={};function v(){const e=document.createElement("div");e.className="home-heading-content";const t=document.createElement("h1");return t.className="home-title",t.textContent="Yuya's Breakfast Bar",e.appendChild(t),e}function y(){const e=document.createElement("div");e.className="description-content";const t=document.createElement("p");return t.className="home-description",t.textContent="Welcome to Yuya's Breakfast Bar, where fresh flavors and a cozy ambiance come together! Enjoy a delicious selection of breakfast favorites made from high-quality, locally sourced ingredients. Whether you're craving a classic meal or something new, our menu offers a variety of dishes to start your day right. Perfect for early risers, brunch lovers, and coffee enthusiasts, Yuya's Breakfast Bar is your go-to spot for a satisfying and delightful dining experience",e.appendChild(t),e}function g(){const e=document.createElement("div");e.className="working-hour-container";const t=document.createElement("h3");t.textContent="Working Hours";const n=document.createElement("ul");return n.className="hours-list",e.appendChild(t),e.appendChild(n),[{day:"Sunday",time:"8am - 8pm"},{day:"Monday",time:"6am - 6pm"},{day:"Tuesday",time:"6am - 6pm"},{day:"Wednesday",time:"6am - 6pm"},{day:"Thursday",time:"6am - 10pm"},{day:"Friday",time:"6am - 10pm"},{day:"Saturday",time:"8am - 10pm"}].forEach((e=>{const t=document.createElement("li");t.textContent=`${e.day}: ${e.time}`,n.append(t)})),e}function b(){const e=document.createElement("div");e.className="location-container";const t=document.createElement("h3");t.textContent="Location";const n=document.createElement("p");return n.textContent="123 Forest Drive, Forestville, Maine",e.appendChild(t),e.appendChild(n),e}function E(){const e=document.createElement("div");E.className="contact-us";const t=document.createElement("h1");t.textContent="Contact Us";const n=document.createElement("ul");return e.appendChild(t),e.appendChild(n),[{name:"John Law",phoneNumber:"555-666-7777",occupation:"Chef",email:"john@yuya.food"},{name:"Gary Tom",phoneNumber:"555-666-7776",occupation:"Manger",email:"gary@yuya.food"},{name:"Lotus Nat",phoneNumber:"555-666-7775",occupation:"Waiter",email:"lotus@yuya.food"}].forEach((e=>{const t=document.createElement("li");t.textContent=e.name;const a=document.createElement("p");a.textContent=e.occupation;const o=document.createElement("p");o.textContent=e.phoneNumber;const r=document.createElement("p");r.textContent=e.email,n.appendChild(t),t.appendChild(a),t.appendChild(o),t.appendChild(r)})),e}C.styleTagTransform=h(),C.setAttributes=l(),C.insert=s().bind(null,"head"),C.domAPI=i(),C.insertStyleElement=m(),o()(f.A,C),f.A&&f.A.locals&&f.A.locals;const x=document.querySelector("#content");function w(e){const t=e.target,n=t.dataset.page;x.innerHTML="",document.querySelectorAll(".btn").forEach((e=>{e.classList.remove("active")})),t.classList.add("active"),"home"===n.toLowerCase()?(x.appendChild(v()),x.appendChild(y()),x.appendChild(g()),x.appendChild(b())):"menu"===n.toLowerCase()?(x.appendChild(function(){const e=document.createElement("div");e.className="menu-header";const t=document.createElement("h1");return e.appendChild(t),e}()),x.appendChild(function(){const e=document.createElement("div");e.className="beverages-container";const t=document.createElement("h1");t.textContent="Beverages";const n=document.createElement("ul");return n.className="beverages-list",e.appendChild(t),e.appendChild(n),[{name:"Fresh Orange Juice",description:"Made from 100% freshly squeezed oranges, providing a vitamin-packed boost to your day.",price:3},{name:"Apple & Carrot Juice",description:"A healthy, naturally sweet combination of crisp apples and fresh carrots, packed with nutrients.",price:4},{name:"Chamomile & Honey Herbal Tea",description:"A soothing blend of chamomile flowers and natural honey, perfect for relaxation.",price:5}].forEach((e=>{const t=document.createElement("li"),a=document.createElement("h3");a.textContent=e.name;const o=document.createElement("p");o.textContent=e.description;const r=document.createElement("h4");r.textContent=`$${e.price}`,n.appendChild(t),t.appendChild(a),t.appendChild(o),t.appendChild(r)})),e}()),x.appendChild(function(){const e=document.createElement("div");e.className="sides-container";const t=document.createElement("h1");t.textContent="Sides";const n=document.createElement("ul");return n.className="beverages-list",e.appendChild(t),e.appendChild(n),[{name:"Cheesy Nachos",description:"Crispy tortilla chips topped with melted cheese, jalapeños, and a side of salsa and guacamole.",price:5},{name:"Mini Veggie Spring Rolls",description:"Crispy vegetable spring rolls served with a sweet chili dipping sauce.",price:7},{name:"Falafel Bites",description:"Crispy on the outside, tender on the inside, these falafel bites are served with a tangy tahini sauce.",price:6}].forEach((e=>{const t=document.createElement("li"),a=document.createElement("h3");a.textContent=e.name;const o=document.createElement("p");o.textContent=e.description;const r=document.createElement("h4");r.textContent=`$${e.price}`,n.appendChild(t),t.appendChild(a),t.appendChild(o),t.appendChild(r)})),e}()),x.appendChild(function(){const e=document.createElement("div");e.className="sides-container";const t=document.createElement("h1");t.textContent="Main Dishes";const n=document.createElement("ul");return n.className="beverages-list",e.appendChild(t),e.appendChild(n),[{name:"Grilled Chicken Shawarma Wrap",description:"Juicy, marinated chicken grilled to perfection and wrapped in warm flatbread with fresh veggies and a creamy garlic sauce",price:10},{name:"Beef Burger",description:"A tender, halal beef patty topped with lettuce, tomato, and cheese, served on a soft bun with a side of fries.",price:13},{name:"Chicken Caesar Salad",description:"Grilled chicken breast served over crisp romaine lettuce, tossed in a creamy Caesar dressing with croutons and parmesan.",price:11},{name:"Falafel Wrap",description:"Crispy falafel balls wrapped in a warm pita with hummus, fresh vegetables, and a drizzle of tahini sauce.",price:9},{name:"Spicy Grilled Salmon",description:"Fresh salmon fillet seasoned with a spicy blend of herbs, grilled to perfection, and served with a side of steamed vegetables.",price:16},{name:"Veggie Quesadilla",description:"A warm tortilla filled with melted cheese, grilled peppers, onions, and mushrooms, served with salsa and sour cream on the side.",price:10},{name:"Chicken Alfredo Pasta",description:"Tender grilled chicken tossed in a rich and creamy Alfredo sauce, served over fettuccine and topped with fresh parsley.",price:14}].forEach((e=>{const t=document.createElement("li"),a=document.createElement("h3");a.textContent=e.name;const o=document.createElement("p");o.textContent=e.description;const r=document.createElement("h4");r.textContent=`$${e.price}`,n.appendChild(t),t.appendChild(a),t.appendChild(o),t.appendChild(r)})),e}())):x.appendChild(E())}document.addEventListener("DOMContentLoaded",(()=>{!function(){const e=document.querySelector("nav"),t=function(){const e={};return[{text:"Home",class:"btn"},{text:"Menu",class:"btn"},{text:"Contact",class:"btn"}].forEach((t=>{const n=document.createElement("button");n.textContent=t.text,n.dataset.page=t.text,n.id=t.text.toLowerCase(),n.classList.add(t.class),e[t.text.toLowerCase()]=n})),e}();Object.keys(t).forEach((n=>{e.appendChild(t[n]),t[n].addEventListener("click",w)}))}(),document.querySelector("#home").classList.add("active"),x.innerHTML="",x.appendChild(v()),x.appendChild(y()),x.appendChild(g()),x.appendChild(b())}))})();