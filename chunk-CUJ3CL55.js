import{c as j,g as T}from"./chunk-QY77AHDH.js";import{$a as x,Ab as P,Ac as L,Dc as I,Fc as z,Ga as l,Gb as M,Ha as _,Xa as g,Za as d,bc as O,dc as w,gb as n,hb as t,ib as m,ja as v,pb as C,pc as y,rb as b,rc as h,tc as S,uc as E,xc as k,zb as r,zc as F}from"./chunk-BAO3T34Y.js";function N(i,p){i&1&&(n(0,"span"),r(1,"Email is required"),t())}function q(i,p){i&1&&(n(0,"span"),r(1,"Please enter a valid email address"),t())}function A(i,p){if(i&1&&(n(0,"div",26),g(1,N,2,0,"span",24)(2,q,2,0,"span",24),t()),i&2){let a,o,e=b();l(),d("ngIf",(a=e.loginForm.get("email"))==null||a.errors==null?null:a.errors.required),l(),d("ngIf",(o=e.loginForm.get("email"))==null||o.errors==null?null:o.errors.email)}}function D(i,p){i&1&&(n(0,"span"),r(1,"Password is required"),t())}function G(i,p){if(i&1&&(n(0,"div",26),g(1,D,2,0,"span",24),t()),i&2){let a,o=b();l(),d("ngIf",(a=o.loginForm.get("password"))==null||a.errors==null?null:a.errors.required)}}function V(i,p){i&1&&(n(0,"span"),r(1,"Sign In"),t())}function B(i,p){i&1&&m(0,"div",27)}var U=(()=>{class i{constructor(a,o,e){this.fb=a,this.authService=o,this.router=e,this.hidePassword=!0,this.isLoading=!1,this.loginForm=this.fb.group({email:["",[h.required,h.email]],password:["",[h.required]],rememberMe:[!1]})}ngOnInit(){this.authService.isLoggedIn()&&this.router.navigate(["/dashboard"])}onSubmit(){if(this.loginForm.valid&&!this.isLoading){this.isLoading=!0;let{email:a,password:o,rememberMe:e}=this.loginForm.value;this.authService.login(a,o,e).subscribe({next:()=>{this.router.navigate(["/dashboard"])},error:s=>{console.error("Login failed:",s),this.isLoading=!1},complete:()=>{this.isLoading=!1}})}}static{this.\u0275fac=function(o){return new(o||i)(_(I),_(T),_(j))}}static{this.\u0275cmp=v({type:i,selectors:[["app-login"]],standalone:!0,features:[M],decls:46,vars:12,consts:[[1,"login-wrapper"],[1,"login-container"],[1,"login-left"],[1,"brand-section"],[1,"logo-wrapper"],[1,"login-right"],[1,"login-form-container"],[1,"login-header"],[1,"login-form",3,"ngSubmit","formGroup"],[1,"form-group"],[1,"label-wrapper"],["for","email"],[1,"input-container"],[1,"input-icon"],[1,"material-icons"],["id","email","type","email","formControlName","email","placeholder","Enter your email address"],["class","error-message",4,"ngIf"],["for","password"],["id","password","formControlName","password","placeholder","Enter your password",3,"type"],[1,"input-icon","right",3,"click"],[1,"form-options"],[1,"remember-me"],[1,"button-wrapper"],["type","submit",3,"disabled"],[4,"ngIf"],["class","loader",4,"ngIf"],[1,"error-message"],[1,"loader"]],template:function(o,e){if(o&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),m(4,"div",4),n(5,"h2"),r(6,"NeoMat Admin"),t(),n(7,"p"),r(8,"Manage your business efficiently with our powerful admin dashboard"),t()()(),n(9,"div",5)(10,"div",6)(11,"div",7)(12,"h1"),r(13,"Welcome Back!"),t(),n(14,"p"),r(15,"Please sign in to your account"),t()(),n(16,"form",8),C("ngSubmit",function(){return e.onSubmit()}),n(17,"div",9)(18,"div",10)(19,"label",11),r(20,"Email Address"),t()(),n(21,"div",12)(22,"div",13)(23,"span",14),r(24,"mail"),t()(),m(25,"input",15),t(),g(26,A,3,2,"div",16),t(),n(27,"div",9)(28,"div",10)(29,"label",17),r(30,"Password"),t()(),n(31,"div",12)(32,"div",13)(33,"span",14),r(34,"lock"),t()(),m(35,"input",18),n(36,"div",19),C("click",function(){return e.hidePassword=!e.hidePassword}),n(37,"span",14),r(38),t()()(),g(39,G,2,1,"div",16),t(),n(40,"div",20),m(41,"label",21),t(),n(42,"div",22)(43,"button",23),g(44,V,2,0,"span",24)(45,B,1,0,"div",25),t()()()()()()()),o&2){let s,c,u,f;l(16),d("formGroup",e.loginForm),l(9),x("error",((s=e.loginForm.get("email"))==null?null:s.invalid)&&((s=e.loginForm.get("email"))==null?null:s.touched)),l(),d("ngIf",((c=e.loginForm.get("email"))==null?null:c.invalid)&&((c=e.loginForm.get("email"))==null?null:c.touched)),l(9),x("error",((u=e.loginForm.get("password"))==null?null:u.invalid)&&((u=e.loginForm.get("password"))==null?null:u.touched)),d("type",e.hidePassword?"password":"text"),l(3),P(e.hidePassword?"visibility_off":"visibility"),l(),d("ngIf",((f=e.loginForm.get("password"))==null?null:f.invalid)&&((f=e.loginForm.get("password"))==null?null:f.touched)),l(4),d("disabled",e.loginForm.invalid||e.isLoading),l(),d("ngIf",!e.isLoading),l(),d("ngIf",e.isLoading)}},dependencies:[w,O,z,k,y,S,E,F,L],styles:['[_nghost-%COMP%]{display:block;min-height:100vh}.login-wrapper[_ngcontent-%COMP%]{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:20px;background:linear-gradient(135deg,#17a3de0d,#17a3de1a)}@media (max-width: 600px){.login-wrapper[_ngcontent-%COMP%]{padding:0}}.login-container[_ngcontent-%COMP%]{display:flex;width:100%;max-width:1000px;min-height:600px;background:var(--white);border-radius:20px;overflow:hidden;box-shadow:0 10px 40px #0000001a}@media (max-width: 768px){.login-container[_ngcontent-%COMP%]{flex-direction:column;min-height:auto;margin:20px;max-height:calc(100vh - 40px);overflow-y:auto}}@media (max-width: 600px){.login-container[_ngcontent-%COMP%]{margin:0;border-radius:0;box-shadow:none;height:100vh}}.login-left[_ngcontent-%COMP%]{width:45%;background:linear-gradient(135deg,#17a3de,#107099);padding:60px 40px;display:flex;align-items:center;justify-content:center;position:relative}.login-left[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;background:linear-gradient(45deg,#ffffff1a,#fff0)}@media (max-width: 768px){.login-left[_ngcontent-%COMP%]{width:100%;padding:40px 20px}}.brand-section[_ngcontent-%COMP%]{text-align:center;color:var(--white);position:relative;z-index:1}.brand-section[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]{width:120px;height:120px;margin:0 auto 20px;display:flex;align-items:center;justify-content:center}.brand-section[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain;filter:brightness(0) invert(1)}.brand-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.5rem;font-weight:600;margin-bottom:15px}@media (max-width: 600px){.brand-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2rem}}.brand-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.1rem;opacity:.9;line-height:1.6;max-width:300px;margin:0 auto}.login-right[_ngcontent-%COMP%]{flex:1;padding:60px;display:flex;align-items:center;background:var(--white)}@media (max-width: 768px){.login-right[_ngcontent-%COMP%]{padding:40px 20px}}.login-form-container[_ngcontent-%COMP%]{width:100%;max-width:400px;margin:0 auto}.login-header[_ngcontent-%COMP%]{margin-bottom:40px;text-align:center}.login-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.5rem;color:var(--black);margin-bottom:10px;font-weight:600}.login-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--gray-dark);font-size:1.1rem}.form-group[_ngcontent-%COMP%]{margin-bottom:25px}.form-group[_ngcontent-%COMP%]   .label-wrapper[_ngcontent-%COMP%]{margin-bottom:8px}.form-group[_ngcontent-%COMP%]   .label-wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:var(--black);font-weight:500;font-size:.95rem}.input-container[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center}.input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:52px;padding:0 48px;border:2px solid rgba(0,0,0,.1);border-radius:12px;font-size:1rem;transition:all .3s ease;background:var(--white);color:var(--black)}.input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border-color:#17a3de;box-shadow:0 0 0 4px #17a3de1a}.input-container[_ngcontent-%COMP%]   input.error[_ngcontent-%COMP%]{border-color:#f44}.input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:#0006}.input-container[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%]{position:absolute;left:16px;display:flex;align-items:center;justify-content:center;color:#0006;transition:all .3s ease}.input-container[_ngcontent-%COMP%]   .input-icon.right[_ngcontent-%COMP%]{left:auto;right:16px;cursor:pointer}.input-container[_ngcontent-%COMP%]   .input-icon.right[_ngcontent-%COMP%]:hover{color:#17a3de}.input-container[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:20px}.error-message[_ngcontent-%COMP%]{color:#f44;font-size:.85rem;margin-top:6px;font-weight:500}.form-options[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin:30px 0}@media (max-width: 600px){.form-options[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start;gap:15px}}.form-options[_ngcontent-%COMP%]   .remember-me[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;cursor:pointer}.form-options[_ngcontent-%COMP%]   .remember-me[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{width:18px;height:18px;margin:0;cursor:pointer;accent-color:#17a3de}.form-options[_ngcontent-%COMP%]   .remember-me[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]{color:var(--gray-dark);font-size:.95rem}.form-options[_ngcontent-%COMP%]   .forgot-password[_ngcontent-%COMP%]{color:#17a3de;text-decoration:none;font-weight:500;font-size:.95rem;transition:all .3s ease}.form-options[_ngcontent-%COMP%]   .forgot-password[_ngcontent-%COMP%]:hover{opacity:.8;text-decoration:underline}.button-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;height:52px;background:#17a3de;color:#fff;border:none;border-radius:12px;font-size:1rem;font-weight:600;cursor:pointer;transition:all .3s ease;display:flex;align-items:center;justify-content:center}.button-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled){background:#1592c7;transform:translateY(-1px);box-shadow:0 4px 12px #17a3de33}.button-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active:not(:disabled){transform:translateY(0)}.button-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{opacity:.7;cursor:not-allowed}.loader[_ngcontent-%COMP%]{width:20px;height:20px;border:2px solid rgba(255,255,255,.3);border-radius:50%;border-top-color:#fff;animation:_ngcontent-%COMP%_spin .8s linear infinite}@keyframes _ngcontent-%COMP%_spin{to{transform:rotate(360deg)}}']})}}return i})();export{U as LoginComponent};