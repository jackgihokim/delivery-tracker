(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{yIOV:function(n,t,o){"use strict";o.r(t),o.d(t,"FolderPageModule",(function(){return k}));var e=o("ofXK"),i=o("3Pt+"),r=o("TEn/"),c=o("tyNb"),a=o("fXoL"),b=o("tk/3"),s=o("LRne"),l=o("vkgz"),g=o("JIr8");let d=(()=>{class n{constructor(n){this.http=n,this.baseUrl="http://127.0.0.1:3000",this.apiUrl="/api/v1/delivery-tracker"}getTrackingInfo(n){const t=this.baseUrl+this.apiUrl,o=n,e={headers:(new b.c).set("Content-Type","application/json")};return this.http.post(t,o,e).pipe(Object(l.a)(n=>n),Object(g.a)(this.handleError("[Error in getTrackingInfo()]")))}handleError(n,t){return o=>(console.error(o),console.log(`${n} : ${o.message}`),Object(s.a)(t))}}return n.\u0275fac=function(t){return new(t||n)(a.Qb(b.a))},n.\u0275prov=a.Fb({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function m(n,t){if(1&n&&(a.Mb(0,"ion-select-option",15),a.ic(1),a.Lb()),2&n){const n=t.$implicit;a.ac("value",n.code),a.zb(1),a.jc(n.name)}}const u=function(n){return{"bold-item":n}};function p(n,t){if(1&n&&(a.Mb(0,"ion-row",20),a.Mb(1,"ion-col"),a.ic(2),a.Lb(),a.Mb(3,"ion-col"),a.ic(4),a.Lb(),a.Mb(5,"ion-col"),a.ic(6),a.Lb(),a.Lb()),2&n){const n=t.$implicit,o=t.index,e=a.Wb(2);a.Zb("ngClass",a.bc(4,u,o===e.trackingData.trackingDetails.length-1)),a.zb(2),a.jc(n.timeString),a.zb(2),a.jc(n.where),a.zb(2),a.jc(n.kind)}}function f(n,t){if(1&n&&(a.Mb(0,"ion-card",16),a.Mb(1,"ion-card-header"),a.Mb(2,"small",17),a.ic(3,"\uc6b4\uc1a1\uc7a5 \ubc88\ud638"),a.Lb(),a.Mb(4,"ion-card-title"),a.ic(5),a.Lb(),a.Mb(6,"ion-card-subtitle"),a.ic(7),a.Lb(),a.Lb(),a.Mb(8,"ion-grid"),a.Mb(9,"ion-row",18),a.Mb(10,"ion-col"),a.ic(11,"\uc2dc\uac04"),a.Lb(),a.Mb(12,"ion-col"),a.ic(13,"\ud604\uc7ac \uc704\uce58"),a.Lb(),a.Mb(14,"ion-col"),a.ic(15,"\ubc30\uc1a1 \uc0c1\ud0dc"),a.Lb(),a.Lb(),a.hc(16,p,7,6,"ion-row",19),a.Lb(),a.Lb()),2&n){const n=a.Wb();a.zb(5),a.jc(n.trackingForm.value.invoiceNumber),a.zb(2),a.jc(n.getCompanyName(n.trackingForm.value.companyCode)),a.zb(9),a.Zb("ngForOf",n.trackingData.trackingDetails)}}const h=[{path:"",component:(()=>{class n{constructor(n,t){this.activatedRoute=n,this.trackingDeliveryService=t,this.folderName={"delivery-tracker":"\ubc30\uc1a1 \uc870\ud68c"},this.trackingForm=new i.c({companyCode:new i.a(""),invoiceNumber:new i.a("")}),this.companies=[{name:"CJ\ub300\ud55c\ud1b5\uc6b4",code:"04"},{name:"\ud55c\uc9c4\ud0dd\ubc30",code:"05"},{name:"\uacbd\ub3d9\ud0dd\ubc30",code:"23"}]}ngOnInit(){const n=this.activatedRoute.snapshot.paramMap.get("id");this.folder=this.folderName[n]}trackDelivery(){console.log("tracking form value :",this.trackingForm.value),this.trackingDeliveryService.getTrackingInfo(this.trackingForm.value).subscribe(n=>{console.log("res :",n),n&&(200!==n.status&&(this.errorResponse={status:n.status,message:n.message}),this.trackingData=n.data,console.log("tracking details :",n.data.trackingDetails))},n=>console.log(n))}getCompanyName(n){const t=this.companies.length;for(let o=0;o<t;o++)if(this.companies[o].code===n)return this.companies[o].name}}return n.\u0275fac=function(t){return new(t||n)(a.Jb(c.a),a.Jb(d))},n.\u0275cmp=a.Db({type:n,selectors:[["app-folder"]],decls:26,vars:8,consts:[[3,"translucent"],["slot","start"],[3,"fullscreen"],["collapse","condense"],["size","large"],["id","container"],[1,"form-card"],[3,"formGroup","ngSubmit"],[1,"form-item"],["position","floating"],["formControlName","companyCode","placeholder","\ud0dd\ubc30\uc0ac \uc120\ud0dd","required",""],[3,"value",4,"ngFor","ngForOf"],["type","text","formControlName","invoiceNumber","required","",1,"form-control"],["type","submit","expand","block","fill","outline",1,"form-item","form-button",3,"disabled"],["class","tracking-info",4,"ngIf"],[3,"value"],[1,"tracking-info"],[1,"text-invoice-number"],[1,"grid-column"],["class","grid-row",3,"ngClass",4,"ngFor","ngForOf"],[1,"grid-row",3,"ngClass"]],template:function(n,t){1&n&&(a.Mb(0,"ion-header",0),a.Mb(1,"ion-toolbar"),a.Mb(2,"ion-buttons",1),a.Kb(3,"ion-menu-button"),a.Lb(),a.Mb(4,"ion-title"),a.ic(5),a.Lb(),a.Lb(),a.Lb(),a.Mb(6,"ion-content",2),a.Mb(7,"ion-header",3),a.Mb(8,"ion-toolbar"),a.Mb(9,"ion-title",4),a.ic(10),a.Lb(),a.Lb(),a.Lb(),a.Mb(11,"div",5),a.Mb(12,"ion-card",6),a.Mb(13,"form",7),a.Ub("ngSubmit",(function(){return t.trackDelivery()})),a.Mb(14,"ion-item",8),a.Mb(15,"ion-label",9),a.ic(16,"\ud0dd\ubc30\uc0ac"),a.Lb(),a.Mb(17,"ion-select",10),a.hc(18,m,2,2,"ion-select-option",11),a.Lb(),a.Lb(),a.Mb(19,"ion-item",8),a.Mb(20,"ion-label",9),a.ic(21,"\uc1a1\uc7a5\ubc88\ud638"),a.Lb(),a.Kb(22,"ion-input",12),a.Lb(),a.Mb(23,"ion-button",13),a.ic(24,"\uc870\ud68c\ud558\uae30"),a.Lb(),a.Lb(),a.Lb(),a.hc(25,f,17,3,"ion-card",14),a.Lb(),a.Lb()),2&n&&(a.Zb("translucent",!0),a.zb(5),a.jc(t.folder),a.zb(1),a.Zb("fullscreen",!0),a.zb(4),a.jc(t.folder),a.zb(3),a.Zb("formGroup",t.trackingForm),a.zb(5),a.Zb("ngForOf",t.companies),a.zb(5),a.Zb("disabled",!t.trackingForm.valid),a.zb(2),a.Zb("ngIf",t.trackingData))},directives:[r.k,r.A,r.c,r.r,r.z,r.i,r.d,i.l,i.i,i.d,r.m,r.n,r.w,r.F,i.h,i.b,i.k,e.i,r.l,r.G,r.b,e.j,r.x,r.e,r.g,r.f,r.j,r.v,r.h,e.h],styles:["ion-content[_ngcontent-%COMP%]{height:100%}ion-menu-button[_ngcontent-%COMP%]{color:var(--ion-color-primary)}ion-card-header[_ngcontent-%COMP%]{background-color:var(--ion-color-primary)}ion-card-header[_ngcontent-%COMP%]   ion-card-subtitle[_ngcontent-%COMP%]{color:#000}#container[_ngcontent-%COMP%]{height:88%;text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.form-card[_ngcontent-%COMP%], .tracking-info[_ngcontent-%COMP%]{width:50%;margin:30px auto}.grid-column[_ngcontent-%COMP%]{padding:10px 0;color:#000;background-color:#ccc}.grid-row[_ngcontent-%COMP%]{padding:10px 0;border-bottom:1px solid #9d9fa6}.text-invoice-number[_ngcontent-%COMP%]{color:#000}.bold-item[_ngcontent-%COMP%]{font-weight:700}"]}),n})()}];let M=(()=>{class n{}return n.\u0275mod=a.Hb({type:n}),n.\u0275inj=a.Gb({factory:function(t){return new(t||n)},imports:[[c.i.forChild(h)],c.i]}),n})(),k=(()=>{class n{}return n.\u0275mod=a.Hb({type:n}),n.\u0275inj=a.Gb({factory:function(t){return new(t||n)},imports:[[e.b,i.e,i.j,r.B,M]]}),n})()}}]);