(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-104473fe"],{"4df4":function(t,e,r){"use strict";var a=r("0366"),o=r("7b0b"),n=r("9bdd"),c=r("e95a"),i=r("50c4"),l=r("8418"),d=r("35a1");t.exports=function(t){var e,r,s,u,f,b,p=o(t),h="function"==typeof this?this:Array,g=arguments.length,m=g>1?arguments[1]:void 0,y=void 0!==m,j=d(p),O=0;if(y&&(m=a(m,g>2?arguments[2]:void 0,2)),void 0==j||h==Array&&c(j))for(e=i(p.length),r=new h(e);e>O;O++)b=y?m(p[O],O):p[O],l(r,O,b);else for(u=j.call(p),f=u.next,r=new h;!(s=f.call(u)).done;O++)b=y?n(u,m,[s.value,O],!0):s.value,l(r,O,b);return r.length=O,r}},"690f":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("fb6a"),r("d3b7"),r("b0c0"),r("a630"),r("3ca3");function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,a=new Array(e);r<e;r++)a[r]=t[r];return a}function o(t,e){if(t){if("string"===typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}},"6ea2":function(t,e,r){"use strict";r.r(e);var a=r("7a23"),o=Object(a["withScopeId"])("data-v-6c5ffd58");Object(a["pushScopeId"])("data-v-6c5ffd58");var n={class:"container"},c={class:"form-group row"},i=Object(a["createVNode"])("label",{for:"roll_id",class:"col-md-12 col-form-label"},"ລາຍງາຍຜູ້ໂຊກດີ: ",-1),l={class:"col-md-12"},d=Object(a["createVNode"])("label",{for:"roll_id",class:"col-md-12 col-form-label"},null,-1),s={class:"col-md-12"},u=Object(a["createVNode"])("button",{class:"btn btn-success"},"ດຶງຂໍ້ມູນ",-1),f={class:"table sm"},b=Object(a["createVNode"])("thead",null,[Object(a["createVNode"])("tr",null,[Object(a["createVNode"])("th",{scope:"col"},"ເລກງວດ"),Object(a["createVNode"])("th",{scope:"col"},"ເລກບິນ"),Object(a["createVNode"])("th",{scope:"col"},"ຜູ້ຂາຍ"),Object(a["createVNode"])("th",{scope:"col"},"ວັນທີ"),Object(a["createVNode"])("th",{scope:"col",class:"text-right"},"ເລກສ່ຽງ"),Object(a["createVNode"])("th",{scope:"col",class:"text-right"},"ຈຳນວນເງິນ"),Object(a["createVNode"])("th",{scope:"col",class:"text-right"},"ຈຳນວນເງິນລາງວັນ")])],-1),p={class:"text-right"},h={class:"text-right"},g={class:"text-right"},m={key:0,class:"error"},y=Object(a["createVNode"])("td",null,null,-1),j=Object(a["createVNode"])("td",null,null,-1),O=Object(a["createVNode"])("td",null,null,-1),v=Object(a["createVNode"])("td",null,null,-1),N=Object(a["createVNode"])("td",{class:"text-right"},"ລວມຍອດລາງວັນ",-1),_={class:"text-right"},V={key:0,class:"fa fa-spinner fa-spin fa-3x fa-fw"},S={key:1,style:{color:"red"}};Object(a["popScopeId"])();var w=o((function(t,e,r,o,w,D){return Object(a["openBlock"])(),Object(a["createBlock"])("div",n,[Object(a["createVNode"])("form",{onSubmit:e[2]||(e[2]=Object(a["withModifiers"])((function(){return D.getData&&D.getData.apply(D,arguments)}),["prevent"]))},[Object(a["createVNode"])("div",c,[i,Object(a["createVNode"])("div",l,[Object(a["withDirectives"])(Object(a["createVNode"])("input",{type:"date",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=function(t){return w.r_date=t})},null,512),[[a["vModelText"],w.r_date]])]),d,Object(a["createVNode"])("div",s,[u,Object(a["createTextVNode"])(" | "+Object(a["toDisplayString"])(D.formatdate(w.r_date)),1)])])],32),Object(a["createVNode"])("table",f,[b,Object(a["createVNode"])("tbody",null,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(w.report_data,(function(t,e){return Object(a["openBlock"])(),Object(a["createBlock"])("tr",{key:e},[Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(t.ism_id),1),Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(t.sale_bill_id),1),Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(t.mem_id),1),Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(D.formatdate(t.date)),1),Object(a["createVNode"])("td",p,Object(a["toDisplayString"])(t.sale_num),1),Object(a["createVNode"])("td",h,Object(a["toDisplayString"])(D.formatNum(t.sale_price)),1),Object(a["createVNode"])("td",g,Object(a["toDisplayString"])(D.formatNum(D.getPaid(t.sale_num)*t.sale_price/1e3)),1)])})),128)),Object(a["createVNode"])("tr",null,[Object(a["createVNode"])("td",null,[!w.isloading&&w.report_data.length<1?(Object(a["openBlock"])(),Object(a["createBlock"])("span",m,"ບໍ່ມີຂໍ້ມູນ")):Object(a["createCommentVNode"])("",!0)]),y,j,O,v,N,Object(a["createVNode"])("td",_,Object(a["toDisplayString"])(D.getSumSale),1)])])]),w.isloading?(Object(a["openBlock"])(),Object(a["createBlock"])("i",V)):!w.isloading&&w.error?(Object(a["openBlock"])(),Object(a["createBlock"])("p",S,Object(a["toDisplayString"])(w.error),1)):Object(a["createCommentVNode"])("",!0)])})),D=r("b85c"),k=r("bc3a"),A=r.n(k),x=r("db49"),B=r.n(x),R={created:function(){this.setCurDate(),this.getPayRate()},data:function(){return{report_data:[],r_date:"",isloading:!1,error:null,payR:[]}},computed:{getSumSale:function(){var t,e=0,r=Object(D["a"])(this.report_data);try{for(r.s();!(t=r.n()).done;){var a=t.value;e+=this.getPaid(a.sale_num)*a.sale_price/1e3}}catch(o){r.e(o)}finally{r.f()}return this.formatNum(e)},isAdmin:function(){return this.$store.getters.isAdmin},mem_id:function(){return this.$store.getters.user_id},mem_master:function(){return this.$store.getters.isMaster}},methods:{getPaid:function(t){var e=0;return 2===t.length?e=this.payR[0].pay_two:3===t.length?e=this.payR[0].pay_three:4===t.length?e=this.payR[0].pay_four:5===t.length?e=this.payR[0].pay_five:6===t.length&&(e=this.payR[0].pay_six),e},getPayRate:function(){var t=this;this.error=null,this.isloading=!0,A.a.get(B.a.url+"getpayrate").then((function(e){t.payR=e.data,t.isloading=!1})).catch((function(e){t.error=e,t.isloading=!1}))},getData:function(){var t=this;this.error=null,this.isloading=!0,A.a.get(B.a.url+"winreport",{params:{p_date:this.r_date,p_admin:this.isAdmin,p_mem_id:this.mem_id,p_master:this.mem_master}}).then((function(e){console.log("DATA==============="+e.data),t.report_data=e.data,t.isloading=!1})).catch((function(e){t.error=e,t.isloading=!1}))},formatNum:function(t){return(new Intl.NumberFormat).format(t)},formatdate:function(t){var e=new Date(t),r=""+(e.getMonth()+1),a=""+e.getDate();return r.length<2&&(r="0"+r),a.length<2&&(a="0"+a),e=a+"-"+r+"-"+e.getFullYear(),e},setCurDate:function(){var t=new Date,e=""+(t.getMonth()+1),r=""+t.getDate();e.length<2&&(e="0"+e),r.length<2&&(r="0"+r),this.r_date=t.getFullYear()+"-"+e+"-"+r}}},I=(r("d7c1"),r("6b0d")),M=r.n(I);const $=M()(R,[["render",w],["__scopeId","data-v-6c5ffd58"]]);e["default"]=$},"9bdd":function(t,e,r){var a=r("825a"),o=r("2a62");t.exports=function(t,e,r,n){try{return n?e(a(r)[0],r[1]):e(r)}catch(c){throw o(t),c}}},a630:function(t,e,r){var a=r("23e7"),o=r("4df4"),n=r("1c7e"),c=!n((function(t){Array.from(t)}));a({target:"Array",stat:!0,forced:c},{from:o})},b85c:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0");var a=r("690f");function o(t,e){var r;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=Object(a["a"])(t))||e&&t&&"number"===typeof t.length){r&&(t=r);var o=0,n=function(){};return{s:n,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i=!0,l=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return i=t.done,t},e:function(t){l=!0,c=t},f:function(){try{i||null==r["return"]||r["return"]()}finally{if(l)throw c}}}}},d28b:function(t,e,r){var a=r("746f");a("iterator")},d7c1:function(t,e,r){"use strict";r("dc09")},dc09:function(t,e,r){},e01a:function(t,e,r){"use strict";var a=r("23e7"),o=r("83ab"),n=r("da84"),c=r("5135"),i=r("861d"),l=r("9bf2").f,d=r("e893"),s=n.Symbol;if(o&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var u={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new s(t):void 0===t?s():s(t);return""===t&&(u[e]=!0),e};d(f,s);var b=f.prototype=s.prototype;b.constructor=f;var p=b.toString,h="Symbol(test)"==String(s("test")),g=/^Symbol\((.*)\)[^)]+$/;l(b,"description",{configurable:!0,get:function(){var t=i(this)?this.valueOf():this,e=p.call(t);if(c(u,t))return"";var r=h?e.slice(7,-1):e.replace(g,"$1");return""===r?void 0:r}}),a({global:!0,forced:!0},{Symbol:f})}},fb6a:function(t,e,r){"use strict";var a=r("23e7"),o=r("861d"),n=r("e8b5"),c=r("23cb"),i=r("50c4"),l=r("fc6a"),d=r("8418"),s=r("b622"),u=r("1dde"),f=u("slice"),b=s("species"),p=[].slice,h=Math.max;a({target:"Array",proto:!0,forced:!f},{slice:function(t,e){var r,a,s,u=l(this),f=i(u.length),g=c(t,f),m=c(void 0===e?f:e,f);if(n(u)&&(r=u.constructor,"function"!=typeof r||r!==Array&&!n(r.prototype)?o(r)&&(r=r[b],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return p.call(u,g,m);for(a=new(void 0===r?Array:r)(h(m-g,0)),s=0;g<m;g++,s++)g in u&&d(a,s,u[g]);return a.length=s,a}})}}]);
//# sourceMappingURL=chunk-104473fe.48be8f30.js.map