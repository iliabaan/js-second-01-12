!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){var n=r(1),o=r(2),s=o();s.use(o.json()),s.use("/",o.static("./src/public/")),s.get("/catalog",(function(e,t){n.readFile("./src/server/db/catalog.json","UTF-8",(function(e,r){e?t.sendStatus(404,JSON.stringify({result:0})):t.send(r)}))})),s.get("/cart",(function(e,t){n.readFile("./src/server/db/cart.json","UTF-8",(function(e,r){e?t.sendStatus(404,JSON.stringify({result:0})):t.send(r)}))})),s.post("/addtocart",(function(e,t){n.readFile("./src/server/db/cart.json","UTF-8",(function(r,o){if(r)t.sendStatus(404,JSON.stringify({result:0}));else{var s=JSON.parse(o),i=s.findIndex((function(t){return t.id_product===e.body.id_product}));if(-1===i){var u=e.body;u.qty=1,s.push(u),n.writeFile("./src/server/db/cart.json",JSON.stringify(s),(function(e){e?console.log(e):console.log("Cart update...")}))}else++s[i].qty,n.writeFile("./src/server/db/cart.json",JSON.stringify(s),(function(e){e?console.log(e):console.log("Cart update...")}));t.status(200),t.send(s)}}))})),s.delete("/delfromcart",(function(e,t){n.readFile("./src/server/db/cart.json","UTF-8",(function(r,o){if(r)t.sendStatus(404,JSON.stringify({result:0}));else{var s=JSON.parse(o),i=s.findIndex((function(t){return t.id_product===e.body.id_product}));-1!==i&&s[i].qty>1?(--s[i].qty,n.writeFile("./src/server/db/cart.json",JSON.stringify(s),(function(e){e?console.log(e):console.log("Cart update...")}))):-1!==i&&1===s[i].qty&&(s.splice(i,1),n.writeFile("./src/server/db/cart.json",JSON.stringify(s),(function(e){e?console.log(e):console.log("Cart update...")}))),t.status(200),t.send(s)}}))})),s.listen(3e3,(function(){return console.log("Listen port ".concat(3e3))}))},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("express")}]);