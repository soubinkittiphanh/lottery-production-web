(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4686d589"],{"1d8a":function(t,e,a){"use strict";a("8903")},8903:function(t,e,a){},d084:function(t,e,a){"use strict";a.r(e);var o=a("7a23"),c=Object(o["withScopeId"])("data-v-4e0a0697");Object(o["pushScopeId"])("data-v-4e0a0697");var r={class:"container"};Object(o["popScopeId"])();var n=c((function(t,e,a,c,n,l){var i=Object(o["resolveComponent"])("member-pagination");return Object(o["openBlock"])(),Object(o["createBlock"])("div",r,[Object(o["createVNode"])(i,{datas:n.users,onUpdateUser:l.edituser},null,8,["datas","onUpdateUser"])])})),l=(a("b0c0"),{class:""}),i={class:"center"},d={key:0,class:"fa fa-spinner fa-spin fa-3x fa-fw"},s={key:1,style:{color:"red"}},u={class:"alert alert-success"},m={key:1,class:"table table-striped table-sm",id:"branchreport"},b=Object(o["createVNode"])("thead",null,[Object(o["createVNode"])("tr",null,[Object(o["createVNode"])("th",{scope:"col"},"ສາຂາ"),Object(o["createVNode"])("th",{scope:"col"},"ຍອດຂາຍ"),Object(o["createVNode"])("th",{scope:"col"},"%ຂາຍ"),Object(o["createVNode"])("th",{scope:"col"},"ລວມຖືກລາງວັນ"),Object(o["createVNode"])("th",{scope:"col"},"ຍອດສົ່ງຄືນ")])],-1),p={style:{color:"red"}},g=Object(o["createVNode"])("th",{scope:"col"},"ລວມ:",-1),O={scope:"col"},j={scope:"col"},h={scope:"col"},N={scope:"col"},_=Object(o["createVNode"])("th",{scope:"col"},null,-1),f=Object(o["createVNode"])("th",{scope:"col"},null,-1),V={class:"table table-striped"},w=Object(o["createVNode"])("tr",null,[Object(o["createVNode"])("th",{scope:"col"},"ຊື່"),Object(o["createVNode"])("th",{scope:"col"},"ສາຂາ"),Object(o["createVNode"])("th",{scope:"col"},"ກຸ່ມ"),Object(o["createVNode"])("th",{scope:"col"},"ID"),Object(o["createVNode"])("th",{scope:"col"},"ຍອດຂາຍ"),Object(o["createVNode"])("th",{scope:"col"},"%ຂາຍ"),Object(o["createVNode"])("th",{scope:"col"},"ຍອດຖືກ"),Object(o["createVNode"])("th",{scope:"col"},"%ລາງວັນ"),Object(o["createVNode"])("th",{scope:"col"},"ສົ່ງAdmin"),Object(o["createVNode"])("th",{scope:"col"},"Status"),Object(o["createVNode"])("th",{scope:"col"},"ແກ້ໄຂ")],-1),D={style:{color:"red"}},S=Object(o["createVNode"])("th",{scope:"col"},"ຫົວຫນ້າສາຂາ%",-1),v=Object(o["createVNode"])("th",{scope:"col"},null,-1),y=Object(o["createVNode"])("th",{scope:"col"},null,-1),k=Object(o["createVNode"])("th",{scope:"col"},null,-1),B={scope:"col"},x={scope:"col"},E=Object(o["createVNode"])("th",{scope:"col"},null,-1),R=Object(o["createVNode"])("th",{scope:"col"},null,-1),P={scope:"col"},C=Object(o["createVNode"])("th",{scope:"col"},null,-1),I=Object(o["createVNode"])("th",{scope:"col"},null,-1),F=Object(o["createVNode"])("td",null,"ລວມຍອດທັງໝົດ:",-1),U=Object(o["createVNode"])("td",null,null,-1),$=Object(o["createVNode"])("td",null,null,-1),T=Object(o["createVNode"])("td",null,null,-1),J=Object(o["createVNode"])("td",null,null,-1),L=Object(o["createVNode"])("td",null,null,-1);function M(t,e,a,c,r,n){var M=Object(o["resolveComponent"])("VueTailwindPagination");return Object(o["openBlock"])(),Object(o["createBlock"])("div",l,[Object(o["createVNode"])("div",i,[r.isloading?(Object(o["openBlock"])(),Object(o["createBlock"])("i",d)):!r.isloading&&r.error?(Object(o["openBlock"])(),Object(o["createBlock"])("p",s,Object(o["toDisplayString"])(r.error),1)):Object(o["createCommentVNode"])("",!0)]),Object(o["createVNode"])("div",u,[Object(o["createTextVNode"])(" ສະມາຊິກທັງຫມົດ: "+Object(o["toDisplayString"])(r.total)+" ",1),1==n.mem_master?(Object(o["openBlock"])(),Object(o["createBlock"])("button",{key:0,class:"btn btn-warning",onClick:e[1]||(e[1]=function(){return n.toggleDetail&&n.toggleDetail.apply(n,arguments)})},"ປີດ-ເປີດ ລາຍງານສາຂາ")):Object(o["createCommentVNode"])("",!0),r.showBrcRe?(Object(o["openBlock"])(),Object(o["createBlock"])("table",m,[b,Object(o["createVNode"])("tbody",null,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(r.brcreport,(function(t){return Object(o["openBlock"])(),Object(o["createBlock"])("tr",{key:t.brc_code},[Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(t.brc_code),1),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(String(n.formatNum(t.total))),1),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(String(n.formatNum(t.total_com1))),1),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(String(n.formatNum(t.win_amount))),1),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(String(n.formatNum(t.total-(t.total_com1+t.win_amount)))),1)])})),128)),Object(o["createVNode"])("tr",p,[g,Object(o["createVNode"])("th",O," ["+Object(o["toDisplayString"])(String(n.formatNum(r.branchExtract[0]["total"])))+"] ",1),Object(o["createVNode"])("th",j," ["+Object(o["toDisplayString"])(String(n.formatNum(r.branchExtract[0]["total_com1"])))+"] ",1),Object(o["createVNode"])("th",h," ["+Object(o["toDisplayString"])(String(n.formatNum(r.branchExtract[0]["win_amount"])))+"] ",1),Object(o["createVNode"])("th",N," ["+Object(o["toDisplayString"])(String(n.formatNum(r.branchExtract[0]["total"]-(r.branchExtract[0]["total_com1"]+r.branchExtract[0]["win_amount"]))))+"] ",1),_,f])])])):Object(o["createCommentVNode"])("",!0)]),Object(o["createVNode"])("table",V,[Object(o["createVNode"])("thead",null,[w,Object(o["createVNode"])("tr",D,[S,v,y,k,Object(o["createVNode"])("th",B," ["+Object(o["toDisplayString"])(String(n.formatNum(r.branchExtract[0]["total"])))+"] ",1),Object(o["createVNode"])("th",x," ["+Object(o["toDisplayString"])(String(n.formatNum(r.branchExtract[0]["total_com1"])))+"] ",1),E,R,Object(o["createVNode"])("th",P," ["+Object(o["toDisplayString"])(String(n.formatNum(r.branchExtract[0]["total"]-(r.branchExtract[0]["total_com1"]+r.branchExtract[0]["win_amount"]))))+"] ",1),C,I])]),Object(o["createVNode"])("tbody",null,[Object(o["createVNode"])("tr",null,[F,U,$,T,Object(o["createVNode"])("td",null,"["+Object(o["toDisplayString"])(String(n.formatNum(r.totalsale)))+"]",1),Object(o["createVNode"])("td",null,"["+Object(o["toDisplayString"])(String(n.formatNum(r.totalcom3)))+"]",1),Object(o["createVNode"])("td",null,"["+Object(o["toDisplayString"])(String(n.formatNum(r.totalwin)))+"]",1),Object(o["createVNode"])("td",null,"["+Object(o["toDisplayString"])(String(n.formatNum(r.totalcom5)))+"]",1),Object(o["createVNode"])("td",null,"["+Object(o["toDisplayString"])(String(n.formatNum(r.totalreturn)))+"]",1),J,L]),(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(r.data,(function(t){return Object(o["openBlock"])(),Object(o["createBlock"])("tr",{key:t.id},[Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(t.name),1),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(t.branch),1),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(t.group),1),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(t.logid),1),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(String(n.formatNum(t.total))),1),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(String(n.formatNum(t.total*t.comsale/100))),1),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(String(n.formatNum(t.winamount))),1),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(String(n.formatNum(t.winamount*t.comwin/100))),1),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(String(n.formatNum(t.total-t.total*t.comsale/100-t.winamount-t.winamount*t.comwin/100))),1),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(1===t.active?"ໃຊ້ງານຢູ່":"Block"),1),Object(o["createVNode"])("td",null,[Object(o["createVNode"])("button",{class:"btn btn-warning",onClick:function(e){return n.viewUser(t.id)}}," ແກ້ໄຂ ",8,["onClick"])])])})),128))])]),Object(o["createVNode"])(M,{current:r.currentPage,total:r.total,"per-page":r.perPage,onPageChanged:e[2]||(e[2]=function(t){return n.onPageClick(t)})},null,8,["current","total","per-page"])])}var A=a("1da1"),G=(a("96cf"),a("159b"),a("7db0"),a("84a7"),a("a242")),H=a("db49"),q=a.n(H),z=a("bc3a"),K=a.n(z),Q={components:{VueTailwindPagination:G["a"]},props:["datas"],data:function(){return{showBrcRe:!1,totalsale:0,totalcom3:0,totalwin:0,totalcom5:0,totalreturn:0,currentPage:1,perPage:2,total:0,data:this.datas,originData:[],isloading:!1,error:null,brcreport:[],branchExtract:[{brc_code:"",com_sale:0,com_win:0,total_com1:0,total_com2:0,totalreturn:0,win_amount:0,total:0}]}},methods:{toggleDetail:function(){0!=this.mem_master&&(this.showBrcRe=!this.showBrcRe)},formatNum:function(t){return(new Intl.NumberFormat).format(t)},viewUser:function(t){this.$emit("update-user",t)},onPageClick:function(t){this.currentPage=t,this.getData(this.currentPage)},getData:function(t){for(var e=[],a=this.perPage,o=0;o<a;o++){var c=1!=t?t*a-a+o:o;c===this.total-1&&(o=a+1),e.push({id:this.originData[c].id,name:this.originData[c].name,branch:this.originData[c].branch,group:this.originData[c].group,lname:this.originData[c].lname,logid:this.originData[c].logid,logpass:this.originData[c].logpass,vill:this.originData[c].vill,dist:this.originData[c].dist,pro:this.originData[c].pro,active:this.originData[c].active,admin:this.originData[c].admin,total:this.originData[c].total,comsale:this.originData[c].comsale,comwin:this.originData[c].comwin,winamount:this.originData[c].winamount})}this.data=e},fetchBrcReport:function(){var t=this;return Object(A["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.isloading=!0,t.error=null,K.a.get(q.a.url+"brcreport",{data:null}).then((function(e){console.log(e);var a=[];for(var o in console.log("====> BEFORE FETCH BRC ORIGIN"),e.data)a.push({brc_code:e.data[o].brc_code,com_sale:e.data[o].com_sale,com_win:e.data[o].total,total_com1:e.data[o].total_com1,total_com2:e.data[o].total_com2,totalreturn:e.data[o].totalreturn,win_amount:e.data[o].win_amount,total:e.data[o].total});t.brcreport=a,t.branchExtract=t.origin_brc_report,console.log("============>"+t.branchExtract[0]["brc_code"]),console.log(t.brcreport)})).catch((function(t){alert("ERROR: "+t)}));case 3:case"end":return e.stop()}}),e)})))()},fetchuser:function(){var t=this;return Object(A["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.isloading=!0,t.error=null,K.a.get(q.a.url+"fetchuser",{params:{p_mem_id:t.mem_id,p_master:t.mem_master}}).then((function(e){var a=[];for(var o in e.data)a.push({id:e.data[o].id,name:e.data[o].mem_name,branch:e.data[o].brc_code,group:e.data[o].group_code,lname:e.data[o].mem_lname,logid:e.data[o].mem_id,logpass:e.data[o].mem_pass,vill:e.data[o].mem_village,dist:e.data[o].mem_dist,pro:e.data[o].mem_pro,active:e.data[o].active,admin:e.data[o].admin,total:e.data[o].total,comsale:e.data[o].com_sale,comwin:e.data[o].com_win,winamount:e.data[o].win_amount}),t.totalsale+=e.data[o].total,t.totalcom3+=e.data[o].total*e.data[o].com_sale/100,t.totalwin+=e.data[o].win_amount,t.totalcom5+=e.data[o].win_amount*e.data[o].com_win/100,t.totalreturn+=e.data[o].total-e.data[o].total*e.data[o].com_sale/100-e.data[o].win_amount-e.data[o].win_amount*e.data[o].com_win/100;t.users=a,t.data=a,t.originData=t.data,t.total=t.originData.length,t.perPage=20,t.getData(t.currentPage),t.isloading=!1})).catch((function(e){t.isloading=!1,t.error=e,alert("ເກີດຂໍ້ຜິດພາດການເຊື່ອມຕໍ່ເຊີເວີ: "+e)}));case 3:case"end":return e.stop()}}),e)})))()}},created:function(){var t=this;return Object(A["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchBrcReport();case 2:return e.next=4,t.fetchuser();case 4:console.log("created: ");case 5:case"end":return e.stop()}}),e)})))()},mounted:function(){console.log("mounted: "),this.currentPage=1},computed:{mem_id:function(){return this.$store.getters.user_id},mem_master:function(){return this.$store.getters.isMaster},origin_brc_report:function(){var t=[{brc_code:"",com_sale:0,com_win:0,total_com1:0,total_com2:0,totalreturn:0,win_amount:0,total:0}];if(1==this.mem_master)return this.brcreport.forEach((function(e){console.log("pppp"+e["brc_code"]),console.log(t[0]["totalreturn"]),t=[{brc_code:e["brc_code"],com_sale:t[0]["com_sale"]+e.com_sale,com_win:t[0]["com_win"]+e.com_win,total_com1:t[0]["total_com1"]+e.total_com1,total_com2:t[0]["total_com2"]+e.total_com2,totalreturn:t[0]["totalreturn"]+e.totalreturn,win_amount:t[0]["win_amount"]+e.win_amount,total:t[0]["total"]+e.total}]})),t;var e=this.$store.getters.co_code;console.log("cocode"+e);var a=this.brcreport.find((function(t){return t["brc_code"]==e}));return t=[a],t}}},W=a("6b0d"),X=a.n(W);const Y=X()(Q,[["render",M]]);var Z=Y,tt={components:{MemberPagination:Z},data:function(){return{isloading:!0,error:null,users:[]}},methods:{formatNum:function(t){return(new Intl.NumberFormat).format(t)},edituser:function(t){this.$router.push("/member/"+t)}}};a("1d8a");const et=X()(tt,[["render",n],["__scopeId","data-v-4e0a0697"]]);e["default"]=et}}]);
//# sourceMappingURL=chunk-4686d589.53209588.js.map