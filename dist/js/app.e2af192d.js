(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],l=0,b=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&b.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(b.length)b.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},c=[];function a(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"c9d5bb44"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=a(e);var s=new Error;c=function(t){i.onerror=i.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",s.name="ChunkLoadError",s.type=r,s.request=c,n[1](s)}o[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/wdev-site/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var p=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0e98":function(e,t,n){},"4e90":function(e,t,n){"use strict";n("0e98")},5109:function(e,t,n){"use strict";n("ebc3")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function o(e,t,n,o,c,a){var u=Object(r["w"])("Navbar"),i=Object(r["w"])("router-view"),s=Object(r["w"])("Footer");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["g"])(u,{logo:c.logo_src,alt:c.app_name},null,8,["logo","alt"]),Object(r["g"])(i),Object(r["g"])(s)],64)}var c={id:"nav"},a=["src","alt"],u=Object(r["f"])("Home"),i=Object(r["f"])(" | "),s=Object(r["f"])("Pedidos");function l(e,t,n,o,l,p){var b=Object(r["w"])("router-link");return Object(r["p"])(),Object(r["d"])("div",c,[Object(r["g"])(b,{to:"/",id:"logo-url"},{default:Object(r["F"])((function(){return[Object(r["e"])("img",{src:n.logo,alt:n.alt,id:"logo"},null,8,a)]})),_:1}),Object(r["g"])(b,{to:"/"},{default:Object(r["F"])((function(){return[u]})),_:1}),i,Object(r["g"])(b,{to:"/pedidos"},{default:Object(r["F"])((function(){return[s]})),_:1})])}var p={name:"Navbar",props:["logo","alt"]},b=(n("6408"),n("6b0d")),d=n.n(b);const f=d()(p,[["render",l],["__scopeId","data-v-2d67ad34"]]);var j=f,O=function(e){return Object(r["s"])("data-v-5091961d"),e=e(),Object(r["q"])(),e},m={id:"footer"},v=O((function(){return Object(r["e"])("p",null,"Make Your Burguer © 2021",-1)})),g=[v];function h(e,t,n,o,c,a){return Object(r["p"])(),Object(r["d"])("footer",m,g)}var y={name:"Footer"};n("f58e");const w=d()(y,[["render",h],["__scopeId","data-v-5091961d"]]);var _=w,k={components:{Navbar:j,Footer:_},data:function(){return{logo_src:"/img/logo.png",app_name:"make Your Burguer"}}};n("4e90");const x=d()(k,[["render",o]]);var P=x,S=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),B={class:"main-container"},F=Object(r["e"])("h1",null,"Monte o seu burger:",-1);function M(e,t,n,o,c,a){var u=Object(r["w"])("Banner"),i=Object(r["w"])("Formulario");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["g"])(u),Object(r["e"])("div",B,[F,Object(r["g"])(i)])],64)}var I=function(e){return Object(r["s"])("data-v-9c12cad8"),e=e(),Object(r["q"])(),e},N={id:"main-banner"},T=I((function(){return Object(r["e"])("h1",null,"Make Your Burger",-1)})),C=[T];function E(e,t,n,o,c,a){return Object(r["p"])(),Object(r["d"])("div",N,C)}var G={name:"Banner"};n("98f9");const q=d()(G,[["render",E],["__scopeId","data-v-9c12cad8"]]);var R=q,U=function(e){return Object(r["s"])("data-v-614938f7"),e=e(),Object(r["q"])(),e},V={class:"input-container"},A=U((function(){return Object(r["e"])("label",{for:"nome"},"Nome do cliente:",-1)})),D={class:"input-container"},J=U((function(){return Object(r["e"])("label",{for:"pao"},"Escolha o pão",-1)})),Y=U((function(){return Object(r["e"])("option",{value:""},"Selecione o seu pão",-1)})),H=["value"],L={class:"input-container"},z=U((function(){return Object(r["e"])("label",{for:"carne"},"Escolha a carne",-1)})),K=U((function(){return Object(r["e"])("option",{value:""},"Selecione o tipo de carne",-1)})),Q=["value"],W={id:"opcionais-container",class:"input-container"},X=U((function(){return Object(r["e"])("label",{for:"opcionais",id:"opcionais-title"},"Selecione os opcionais",-1)})),Z=["value"],$=U((function(){return Object(r["e"])("div",{class:"input-container"},[Object(r["e"])("input",{type:"submit",id:"btn-submit",class:"submit-btn",value:"Criar meu burger!"})],-1)}));function ee(e,t,n,o,c,a){var u=Object(r["w"])("Mensagem");return Object(r["p"])(),Object(r["d"])("div",null,[Object(r["G"])(Object(r["g"])(u,{msg:c.msg},null,8,["msg"]),[[r["D"],c.msg]]),Object(r["e"])("form",{id:"burger-form",onSubmit:t[4]||(t[4]=function(){return a.createBurger&&a.createBurger.apply(a,arguments)})},[Object(r["e"])("div",V,[A,Object(r["G"])(Object(r["e"])("input",{name:"nome",id:"nome","onUpdate:modelValue":t[0]||(t[0]=function(e){return c.nome=e}),placeholder:"Digite o seu nome"},null,512),[[r["C"],c.nome]])]),Object(r["e"])("div",D,[J,Object(r["G"])(Object(r["e"])("select",{id:"pao",name:"pao","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.pao=e})},[Y,(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(c.paes,(function(e){return Object(r["p"])(),Object(r["d"])("option",{key:e.id,value:e.tipo},Object(r["y"])(e.tipo),9,H)})),128))],512),[[r["B"],c.pao]])]),Object(r["e"])("div",L,[z,Object(r["G"])(Object(r["e"])("select",{id:"carne",name:"carne","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.carne=e})},[K,(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(c.carnes,(function(e){return Object(r["p"])(),Object(r["d"])("option",{key:e.id,value:e.tipo},Object(r["y"])(e.tipo),9,Q)})),128))],512),[[r["B"],c.carne]])]),Object(r["e"])("div",W,[X,(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(c.opcionaisdata,(function(e){return Object(r["p"])(),Object(r["d"])("div",{class:"checkbox-container",key:e.tipo},[Object(r["G"])(Object(r["e"])("input",{type:"checkbox",name:"opcionais","onUpdate:modelValue":t[3]||(t[3]=function(e){return c.opcionais=e}),value:e.tipo},null,8,Z),[[r["A"],c.opcionais]]),Object(r["e"])("span",null,Object(r["y"])(e.tipo),1)])})),128))]),$],32)])}var te=n("1da1"),ne=(n("96cf"),n("a630"),{class:"mensagem-container"});function re(e,t,n,o,c,a){return Object(r["p"])(),Object(r["d"])("div",ne,[Object(r["e"])("p",null,Object(r["y"])(n.msg),1)])}var oe={name:"mensagem",props:{msg:String}};n("5109");const ce=d()(oe,[["render",re],["__scopeId","data-v-16fd3736"]]);var ae=ce,ue={name:"Formulario",components:{Mensagem:ae},data:function(){return{paes:null,carnes:null,opcionaisdata:null,nome:null,pao:null,carne:null,opcionais:[],msg:null}},methods:{getIngredientes:function(){var e=this;return Object(te["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:3000/ingredientes");case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,e.paes=r.paes,e.carnes=r.carnes,e.opcionaisdata=r.opcionais;case 9:case"end":return t.stop()}}),t)})))()},createBurger:function(e){var t=this;return Object(te["a"])(regeneratorRuntime.mark((function n(){var r,o,c,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.preventDefault(),r={nome:t.nome,carne:t.carne,pao:t.pao,opcionais:Array.from(t.opcionais),status:"Solicitado"},o=JSON.stringify(r),n.next=5,fetch("http://localhost:3000/burgers",{method:"POST",headers:{"Content-type":"application/json"},body:o});case 5:return c=n.sent,n.next=8,c.json();case 8:a=n.sent,t.msg="Pedido Nº ".concat(a.id," realizado com sucesso"),setTimeout((function(){t.msg=null}),3e3),t.nome=null,t.pao=null,t.carne=null,t.opcionais=null;case 15:case"end":return n.stop()}}),n)})))()}},mounted:function(){this.getIngredientes()}};n("abaf");const ie=d()(ue,[["render",ee],["__scopeId","data-v-614938f7"]]);var se=ie,le={name:"home",components:{Banner:R,Formulario:se}};const pe=d()(le,[["render",M]]);var be=pe,de=[{path:"/",name:"Home",component:be},{path:"/pedidos",name:"Pedidos",component:function(){return n.e("about").then(n.bind(null,"8000"))}}],fe=Object(S["a"])({history:Object(S["b"])("/wdev-site/"),routes:de}),je=fe;Object(r["c"])(P).use(je).mount("#app")},6408:function(e,t,n){"use strict";n("fdf3")},"78fb":function(e,t,n){},"98f9":function(e,t,n){"use strict";n("78fb")},"9fef":function(e,t,n){},abaf:function(e,t,n){"use strict";n("e0ab")},e0ab:function(e,t,n){},ebc3:function(e,t,n){},f58e:function(e,t,n){"use strict";n("9fef")},fdf3:function(e,t,n){}});
//# sourceMappingURL=app.e2af192d.js.map