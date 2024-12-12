import{a as zt,b as Vt}from"./chunk-VTTL5WBB.js";import{Aa as wt,Ba as yt,Ca as vt,Da as Dt,Ea as Et,Fa as qt,Ga as P,Ha as Tt,Ia as kt,Ja as It,Ka as Rt,L as Z,R as Q,ba as G,ca as J,ea as at,fa as ot,ga as rt,ha as lt,ia as st,ja as ct,ka as dt,la as mt,ma as pt,oa as ut,pa as gt,qa as _t,ra as ht,sa as Ct,ta as ft,ua as Mt,va as xt,wa as bt,xa as Pt,ya as Ot,za as St}from"./chunk-RHFUL4ZL.js";import{$ as I,Ac as Y,Bb as p,Cb as w,Cc as tt,Db as y,E as q,Eb as v,Fc as et,Ga as l,Gb as B,Gc as nt,Ha as f,Hb as N,Ic as it,Kc as O,M as T,Oa as V,W as k,Xa as d,Ya as F,Za as u,bc as A,cb as H,ea as R,fc as U,gb as o,hb as r,ib as M,ic as W,j as D,ja as z,jb as g,kb as _,kc as b,mb as S,p as E,pa as h,pb as x,qa as C,rb as m,tc as K,vb as L,wb as $,xb as j,xc as X,zb as s}from"./chunk-BGR6RSDP.js";var Ft=(()=>{class e{constructor(t){this.http=t,this.baseURL=O.baseURL}getAllEnquiries(t=1,n=10){let a={page:t,pageSize:n};return this.http.post(`${this.baseURL}/api/enquiries/getAllEnquiries/`,a)}updateEnquiryStatus(t,n){return this.http.put(`${this.baseURL}/api/enquiries/updateStatus/`,{id:t,status:n})}static{this.\u0275fac=function(n){return new(n||e)(R(b))}}static{this.\u0275prov=I({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var Bt=()=>[2,5,10,25,100];function Nt(e,i){e&1&&(o(0,"div",2),M(1,"mat-spinner",3),r())}function At(e,i){e&1&&(o(0,"th",25),s(1," No. "),r())}function Ut(e,i){if(e&1&&(o(0,"td",26),s(1),r()),e&2){let t=i.index,n=m(2);l(),p(" ",(n.currentPage-1)*n.pageSize+t+1," ")}}function Wt(e,i){e&1&&(o(0,"th",27),s(1," Name "),r())}function Zt(e,i){if(e&1&&(o(0,"td",26),s(1),r()),e&2){let t=i.$implicit;l(),p(" ",t.name," ")}}function Qt(e,i){e&1&&(o(0,"th",27),s(1," Company "),r())}function Gt(e,i){if(e&1&&(o(0,"td",26),s(1),r()),e&2){let t=i.$implicit;l(),p(" ",t.company_name," ")}}function Jt(e,i){e&1&&(o(0,"th",27),s(1," Email "),r())}function Kt(e,i){if(e&1&&(o(0,"td",26),s(1),r()),e&2){let t=i.$implicit;l(),p(" ",t.email," ")}}function Xt(e,i){e&1&&(o(0,"th",27),s(1," Mobile "),r())}function Yt(e,i){if(e&1&&(o(0,"td",26),s(1),r()),e&2){let t=i.$implicit;l(),p(" ",t.mobilenumber," ")}}function te(e,i){e&1&&(o(0,"th",27),s(1," Address "),r())}function ee(e,i){if(e&1&&(o(0,"td",26),s(1),r()),e&2){let t=i.$implicit;l(),p(" ",t.address," ")}}function ne(e,i){e&1&&(o(0,"th",27),s(1," Status "),r())}function ie(e,i){if(e&1&&(o(0,"mat-option",31)(1,"mat-chip",32),s(2),r()()),e&2){let t=i.$implicit,n=m(3);u("value",t.value),l(),u("color",n.getStatusColor(t.value)),l(),p(" ",t.label," ")}}function ae(e,i){if(e&1){let t=S();o(0,"td",26)(1,"mat-form-field",28)(2,"mat-select",29),v("valueChange",function(a){let c=h(t).$implicit;return y(c.status,a)||(c.status=a),C(a)}),x("selectionChange",function(a){let c=h(t).$implicit,Ht=m(2);return C(Ht.onStatusChange(c.id,a.value))}),d(3,ie,3,3,"mat-option",30),r()()()}if(e&2){let t=i.$implicit,n=m(2);l(2),w("value",t.status),l(),u("ngForOf",n.statusOptions)}}function oe(e,i){e&1&&(o(0,"th",27),s(1," Date "),r())}function re(e,i){if(e&1&&(o(0,"td",26),s(1),r()),e&2){let t=i.$implicit,n=m(2);l(),p(" ",n.formatDate(t.created_at)," ")}}function le(e,i){e&1&&M(0,"tr",33)}function se(e,i){e&1&&M(0,"tr",34)}function ce(e,i){if(e&1&&(o(0,"tr",35)(1,"td",36),s(2),r()()),e&2){let t=m(2);l(),F("colspan",t.displayedColumns.length),l(),p(" ",t.error||"No enquiries found"," ")}}function de(e,i){if(e&1){let t=S();o(0,"div",4)(1,"table",5),g(2,6),d(3,At,2,0,"th",7)(4,Ut,2,1,"td",8),_(),g(5,9),d(6,Wt,2,0,"th",10)(7,Zt,2,1,"td",8),_(),g(8,11),d(9,Qt,2,0,"th",10)(10,Gt,2,1,"td",8),_(),g(11,12),d(12,Jt,2,0,"th",10)(13,Kt,2,1,"td",8),_(),g(14,13),d(15,Xt,2,0,"th",10)(16,Yt,2,1,"td",8),_(),g(17,14),d(18,te,2,0,"th",10)(19,ee,2,1,"td",8),_(),g(20,15),d(21,ne,2,0,"th",10)(22,ae,4,2,"td",8),_(),g(23,16),d(24,oe,2,0,"th",10)(25,re,2,1,"td",8),_(),d(26,le,1,0,"tr",17)(27,se,1,0,"tr",18)(28,ce,3,2,"tr",19),r()(),o(29,"div",20)(30,"div",21),s(31," Goto Page "),o(32,"mat-form-field",22)(33,"input",23),v("ngModelChange",function(a){h(t);let c=m();return y(c.currentPage,a)||(c.currentPage=a),C(a)}),x("keyup.enter",function(){h(t);let a=m();return C(a.goToPage(a.currentPage))}),r()()(),o(34,"mat-paginator",24),x("page",function(a){h(t);let c=m();return C(c.onPageChange(a))}),r()()}if(e&2){let t=m();l(),u("dataSource",t.dataSource),l(25),u("matHeaderRowDef",t.displayedColumns)("matHeaderRowDefSticky",!0),l(),u("matRowDefColumns",t.displayedColumns),l(6),w("ngModel",t.currentPage),u("max",t.getTotalPages()),l(),u("length",t.totalRecords)("pageSize",t.pageSize)("pageSizeOptions",N(10,Bt))("pageIndex",t.currentPage-1)}}var Ae=(()=>{class e{constructor(t,n,a,c){this.http=t,this.ngZone=n,this.snackBar=a,this.enquiryService=c,this.displayedColumns=["no","name","company_name","email","mobilenumber","address","status","created_at"],this.dataSource=[],this.currentPage=1,this.pageSize=10,this.totalRecords=0,this.statusOptions=[{value:"P",label:"Pending"},{value:"C",label:"Completed"},{value:"D",label:"Declined"}],this.pagination={currentPage:1,pageSize:10,totalRecords:0,totalPages:0,hasNext:!1,hasPrevious:!1},this.isLoading=!1,this.customPageNumber=1,this.error=null,this.destroy$=new D}ngOnInit(){this.loadEnquiries()}getTotalPages(){return Math.ceil(this.totalRecords/this.pageSize)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}ngAfterViewInit(){this.sort&&this.sort.sortChange.subscribe(()=>{this.loadEnquiries(1)})}loadEnquiries(t=1){if(this.isLoading)return;this.isLoading=!0,this.error=null;let n=localStorage.getItem("token");if(!n){this.showError("Authentication token not found");return}let a=new W().set("Authorization",`Bearer ${n}`);this.ngZone.runOutsideAngular(()=>{this.http.post(`${O.baseURL}/api/enquiries/getAllEnquiries/`,{page:t,pageSize:this.pagination.pageSize},{headers:a}).pipe(k(this.destroy$),q(c=>(this.ngZone.run(()=>this.showError("Failed to load enquiries")),E(null))),T(()=>{this.ngZone.run(()=>{this.isLoading=!1})})).subscribe(c=>{c&&this.ngZone.run(()=>{this.dataSource=c.data,this.pagination=c.pagination,this.customPageNumber=this.pagination.currentPage})})})}onPageChange(t){this.pagination.pageSize=t.pageSize,this.loadEnquiries(t.pageIndex+1)}goToPage(t){t>=1&&t<=this.pagination.totalPages&&this.loadEnquiries(t)}goToFirst(){this.loadEnquiries(1)}goToLast(){this.loadEnquiries(this.pagination.totalPages)}formatDate(t){return new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}showError(t){this.error=t,this.snackBar.open(t,"Close",{duration:5e3,horizontalPosition:"end",verticalPosition:"top",panelClass:["error-snackbar"]}),this.isLoading=!1}getStatusColor(t){switch(t){case"C":return"primary";case"D":return"warn";default:return"accent"}}getStatusText(t){switch(t){case"C":return"Completed";case"D":return"Declined";default:return"Pending"}}onStatusChange(t,n){this.enquiryService.updateEnquiryStatus(t,n).subscribe({next:a=>{this.snackBar.open(a.message,"Close",{duration:3e3,horizontalPosition:"end",verticalPosition:"top",panelClass:["success-snackbar"]}),this.loadEnquiries(this.currentPage)},error:a=>{this.snackBar.open("Failed to update status","Close",{duration:3e3,horizontalPosition:"end",verticalPosition:"top",panelClass:["error-snackbar"]})}})}static{this.\u0275fac=function(n){return new(n||e)(f(b),f(V),f(G),f(Ft))}}static{this.\u0275cmp=z({type:e,selectors:[["app-dashboard"]],viewQuery:function(n,a){if(n&1&&L(P,5),n&2){let c;$(c=j())&&(a.sort=c.first)}},standalone:!0,features:[B],decls:8,vars:1,consts:[[1,"dashboard-container"],[1,"dashboard-card"],[1,"loading-spinner"],["diameter","40"],[1,"table-container"],["mat-table","","matSort","",1,"enquiries-table",3,"dataSource"],["matColumnDef","no"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","company_name"],["matColumnDef","email"],["matColumnDef","mobilenumber"],["matColumnDef","address"],["matColumnDef","status"],["matColumnDef","created_at"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],[1,"pagination-container"],[1,"pagination-controls"],["appearance","outline",1,"page-number-input"],["matInput","","type","number","min","1",3,"ngModelChange","keyup.enter","ngModel","max"],["showFirstLastButtons","","aria-label","Select page",3,"page","length","pageSize","pageSizeOptions","pageIndex"],["mat-header-cell",""],["mat-cell",""],["mat-header-cell","","mat-sort-header",""],["appearance","outline",1,"status-select"],[3,"valueChange","selectionChange","value"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["selected","",3,"color"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],[1,"mat-cell"]],template:function(n,a){n&1&&(o(0,"div",0)(1,"mat-card",1)(2,"mat-card-header")(3,"mat-card-title"),s(4,"Enquiries"),r()(),o(5,"mat-card-content"),d(6,Nt,2,0,"div",2)(7,de,35,11),r()()()),n&2&&(l(6),H(6,a.isLoading?6:7))},dependencies:[U,A,it,K,tt,X,nt,et,Y,vt,ht,ft,Pt,Mt,Ct,Ot,xt,bt,St,wt,yt,qt,Et,ot,at,lt,rt,Q,ut,pt,st,dt,mt,ct,Rt,It,Dt,J,kt,P,Tt,Vt,zt,_t,gt,Z],styles:[".dashboard-container[_ngcontent-%COMP%]{padding:20px;min-height:calc(100vh - 64px)}@media screen and (max-width: 600px){.dashboard-container[_ngcontent-%COMP%]{padding:10px}}.dashboard-card[_ngcontent-%COMP%]{margin-bottom:20px;border-radius:8px;height:100%}.dashboard-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{padding:16px;background-color:var(--primary);border-radius:8px 8px 0 0}.dashboard-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{color:var(--text-white);margin:0;font-size:1.25rem;font-weight:500}.dashboard-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{padding:0}.table-container[_ngcontent-%COMP%]{margin-top:16px;overflow-x:auto}.table-container[_ngcontent-%COMP%]   .enquiries-table[_ngcontent-%COMP%]{width:100%}.table-container[_ngcontent-%COMP%]   .enquiries-table[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%]{white-space:nowrap;padding:16px;font-weight:500;color:var(--text-primary);background-color:var(--primary-lighter)}.table-container[_ngcontent-%COMP%]   .enquiries-table[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%]:first-child{width:80px;text-align:center}.table-container[_ngcontent-%COMP%]   .enquiries-table[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%]{padding:12px 16px}.table-container[_ngcontent-%COMP%]   .enquiries-table[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%]:first-child{text-align:center;color:var(--primary);font-weight:500}.table-container[_ngcontent-%COMP%]   .enquiries-table[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%]:hover{background-color:var(--hover)}.table-container[_ngcontent-%COMP%]   .enquiries-table[_ngcontent-%COMP%]   tr.mat-row.no-data-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:center;padding:16px;font-style:italic;color:var(--text-secondary)}@media screen and (max-width: 600px){.table-container[_ngcontent-%COMP%]   .enquiries-table[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%], .table-container[_ngcontent-%COMP%]   .enquiries-table[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%]{padding:8px;font-size:.875rem}.table-container[_ngcontent-%COMP%]   .enquiries-table[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%]:first-child, .table-container[_ngcontent-%COMP%]   .enquiries-table[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%]:first-child{width:60px;padding:8px}}.loading-spinner[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;min-height:200px}.pagination-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:.5rem 1.5rem;border-top:1px solid var(--border-light);background:var(--surface)}.pagination-container[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}.pagination-container[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .page-number-input[_ngcontent-%COMP%]{width:100px;margin:0}.pagination-container[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .page-number-input[_ngcontent-%COMP%]     .mat-mdc-form-field-wrapper{padding:0}.pagination-container[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .page-number-input[_ngcontent-%COMP%]     .mat-mdc-text-field-wrapper{height:40px;padding:0 .5rem}.pagination-container[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .page-number-input[_ngcontent-%COMP%]     .mat-mdc-form-field-flex{height:40px}.pagination-container[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .page-number-input[_ngcontent-%COMP%]     input.mat-mdc-input-element{text-align:center;margin-top:0}@media screen and (max-width: 768px){.pagination-container[_ngcontent-%COMP%]{flex-direction:column;gap:1rem}.pagination-container[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]{width:100%;justify-content:center}.pagination-container[_ngcontent-%COMP%]   mat-paginator[_ngcontent-%COMP%]{width:100%}}.status-select[_ngcontent-%COMP%]{width:140px}.status-select[_ngcontent-%COMP%]     .mat-mdc-form-field-flex{padding:0 8px}.status-select[_ngcontent-%COMP%]     .mat-mdc-form-field-infix{padding:8px 0;min-height:unset}.status-select[_ngcontent-%COMP%]     .mat-mdc-select-value{padding:4px 0}.status-select[_ngcontent-%COMP%]     .mat-mdc-form-field-underline{display:none}@media screen and (max-width: 600px){.status-select[_ngcontent-%COMP%]{width:120px}}  .mat-mdc-select-panel .mat-mdc-option{padding:4px 8px;height:40px}  .mat-mdc-select-panel .mat-mdc-option .mat-mdc-chip{margin:0}  .success-snackbar{background:var(--primary);color:#fff}  .error-snackbar{background:var(--warn);color:#fff}"]})}}return e})();export{Ae as DashboardComponent};