import{$ as ua,$a as Of,$b as P_,A as yr,Aa as _a,Ab as Lf,B as vf,Ba as Me,Bb as Ff,C as Yn,Ca as ne,Cb as Nf,D as i_,Da as Yc,Db as kf,E as yf,Ea as Jn,Eb as il,F as qc,Fa as d_,Fb as Ji,G as br,Ga as Zc,Gb as v_,H as bf,Ha as Kc,Hb as Vt,I as n_,Ia as Jc,Ib as nl,J as r_,Ja as An,Jb as y_,K as xf,Ka as f_,Kb as b_,L as Qs,La as Tf,Lb as Uf,M as Zn,Ma as Af,Mb as x_,N as Ri,Na as Rn,Nb as M_,O as si,Oa as Ii,Ob as gt,P as oi,Pa as p_,Pb as S_,Q as zt,Qa as Rf,Qb as ba,R as Mf,Ra as wt,Rb as w_,S as Pe,Sa as va,Sb as E_,T as Jt,Ta as In,Tb as xa,U as s_,Ua as We,Ub as C_,V as et,Va as If,Vb as T_,W as Sf,Wa as Di,Wb as A_,X as be,Xa as Qc,Xb as R_,Y as ye,Ya as el,Yb as I_,Z as wf,Za as Df,Zb as D_,_ as o_,_a as Pf,_b as ds,a as hn,aa as Pt,ab as Ae,ac as Cr,b as Qg,ba as Qt,bb as Ie,bc as Bf,c as un,ca as At,cb as pi,cc as O_,d as pf,da,db as Sr,dc as L_,e as mf,ea as a_,eb as wr,f as lt,fa,fb as dn,g as Mi,ga as Tn,gb as Er,gc as rl,h as Cn,ha as Kn,hb as gi,hc as fs,i as Ai,ia as Wt,ib as xt,j as Te,ja as jt,jb as eo,jc as Pn,k as la,ka as pa,kb as to,kc as sl,l as Wc,la as Ef,lb as hs,lc as ps,m as e_,ma as xr,mb as Pi,n as rt,na as c_,nb as Xt,o as Zs,oa as bt,ob as qt,p as ki,pa as pt,pb as Si,q as ha,qa as Cf,qb as Ye,r as jc,ra as Ct,rb as ai,s as gf,sa as ma,sb as ya,t as ls,ta as l_,tb as Dn,u as t_,ua as $c,ub as Ot,v as Xc,va as h_,vb as m_,w as fi,wa as Ui,wb as g_,x as _f,xa as Mr,xb as __,y as Ks,ya as ga,yb as us,z as Js,za as u_,zb as tl}from"./chunk-NAPQ25MB.js";import{a as te,b as Dt,c as Jg,e as de}from"./chunk-6MDQTQU3.js";var Hf=class extends M_{constructor(){super(...arguments),this.supportsDOMEvents=!0}},Gf=class n extends Hf{static makeCurrent(){x_(new n)}onAndCancel(e,t,i){return e.addEventListener(t,i),()=>{e.removeEventListener(t,i)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.remove()}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=qx();return t==null?null:$x(t)}resetBaseElement(){Ma=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return C_(document.cookie,e)}},Ma=null;function qx(){return Ma=Ma||document.querySelector("base"),Ma?Ma.getAttribute("href"):null}function $x(n){return new URL(n,document.baseURI).pathname}var Yx=(()=>{class n{build(){return new XMLHttpRequest}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Pe({token:n,factory:n.\u0275fac})}}return n})(),Wf=new et(""),k_=(()=>{class n{constructor(t,i){this._zone=i,this._eventNameToPlugin=new Map,t.forEach(r=>{r.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,i,r){return this._findPluginFor(i).addEventListener(t,i,r)}getZone(){return this._zone}_findPluginFor(t){let i=this._eventNameToPlugin.get(t);if(i)return i;if(i=this._plugins.find(s=>s.supports(t)),!i)throw new zt(5101,!1);return this._eventNameToPlugin.set(t,i),i}static{this.\u0275fac=function(i){return new(i||n)(be(Wf),be(pt))}}static{this.\u0275prov=Pe({token:n,factory:n.\u0275fac})}}return n})(),ol=class{constructor(e){this._doc=e}},zf="ng-app-id",U_=(()=>{class n{constructor(t,i,r,s={}){this.doc=t,this.appId=i,this.nonce=r,this.platformId=s,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=Bf(s),this.resetHostNodes()}addStyles(t){for(let i of t)this.changeUsageCount(i,1)===1&&this.onStyleAdded(i)}removeStyles(t){for(let i of t)this.changeUsageCount(i,-1)<=0&&this.onStyleRemoved(i)}ngOnDestroy(){let t=this.styleNodesInDOM;t&&(t.forEach(i=>i.remove()),t.clear());for(let i of this.getAllStyles())this.onStyleRemoved(i);this.resetHostNodes()}addHost(t){this.hostNodes.add(t);for(let i of this.getAllStyles())this.addStyleToHost(t,i)}removeHost(t){this.hostNodes.delete(t)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(t){for(let i of this.hostNodes)this.addStyleToHost(i,t)}onStyleRemoved(t){let i=this.styleRef;i.get(t)?.elements?.forEach(r=>r.remove()),i.delete(t)}collectServerRenderedStyles(){let t=this.doc.head?.querySelectorAll(`style[${zf}="${this.appId}"]`);if(t?.length){let i=new Map;return t.forEach(r=>{r.textContent!=null&&i.set(r.textContent,r)}),i}return null}changeUsageCount(t,i){let r=this.styleRef;if(r.has(t)){let s=r.get(t);return s.usage+=i,s.usage}return r.set(t,{usage:i,elements:[]}),i}getStyleElement(t,i){let r=this.styleNodesInDOM,s=r?.get(i);if(s?.parentNode===t)return r.delete(i),s.removeAttribute(zf),s;{let o=this.doc.createElement("style");return this.nonce&&o.setAttribute("nonce",this.nonce),o.textContent=i,this.platformIsServer&&o.setAttribute(zf,this.appId),t.appendChild(o),o}}addStyleToHost(t,i){let r=this.getStyleElement(t,i),s=this.styleRef,o=s.get(i)?.elements;o?o.push(r):s.set(i,{elements:[r],usage:1})}resetHostNodes(){let t=this.hostNodes;t.clear(),t.add(this.doc.head)}static{this.\u0275fac=function(i){return new(i||n)(be(gt),be($c),be(ga,8),be(Ui))}}static{this.\u0275prov=Pe({token:n,factory:n.\u0275fac})}}return n})(),Vf={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},qf=/%COMP%/g,B_="%COMP%",Zx=`_nghost-${B_}`,Kx=`_ngcontent-${B_}`,Jx=!0,Qx=new et("",{providedIn:"root",factory:()=>Jx});function eM(n){return Kx.replace(qf,n)}function tM(n){return Zx.replace(qf,n)}function z_(n,e){return e.map(t=>t.replace(qf,n))}var al=(()=>{class n{constructor(t,i,r,s,o,a,c,l=null){this.eventManager=t,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=s,this.doc=o,this.platformId=a,this.ngZone=c,this.nonce=l,this.rendererByCompId=new Map,this.platformIsServer=Bf(a),this.defaultRenderer=new Sa(t,o,c,this.platformIsServer)}createRenderer(t,i){if(!t||!i)return this.defaultRenderer;this.platformIsServer&&i.encapsulation===ua.ShadowDom&&(i=Dt(te({},i),{encapsulation:ua.Emulated}));let r=this.getOrCreateRenderer(t,i);return r instanceof cl?r.applyToHost(t):r instanceof wa&&r.applyStyles(),r}getOrCreateRenderer(t,i){let r=this.rendererByCompId,s=r.get(i.id);if(!s){let o=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,h=this.removeStylesOnCompDestroy,u=this.platformIsServer;switch(i.encapsulation){case ua.Emulated:s=new cl(c,l,i,this.appId,h,o,a,u);break;case ua.ShadowDom:return new jf(c,l,t,i,o,a,this.nonce,u);default:s=new wa(c,l,i,h,o,a,u);break}r.set(i.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}static{this.\u0275fac=function(i){return new(i||n)(be(k_),be(U_),be($c),be(Qx),be(gt),be(Ui),be(pt),be(ga))}}static{this.\u0275prov=Pe({token:n,factory:n.\u0275fac})}}return n})(),Sa=class{constructor(e,t,i,r){this.eventManager=e,this.doc=t,this.ngZone=i,this.platformIsServer=r,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(e,t){return t?this.doc.createElementNS(Vf[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(F_(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(F_(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){t.remove()}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new zt(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let s=Vf[r];s?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=Vf[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(_a.DashCase|_a.Important)?e.style.setProperty(t,i,r&_a.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&_a.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i){if(typeof e=="string"&&(e=Uf().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${t}`);return this.eventManager.addEventListener(e,t,this.decoratePreventDefault(i))}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function F_(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var jf=class extends Sa{constructor(e,t,i,r,s,o,a,c){super(e,s,o,c),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let l=z_(r.id,r.styles);for(let h of l){let u=document.createElement("style");a&&u.setAttribute("nonce",a),u.textContent=h,this.shadowRoot.appendChild(u)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(null,t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},wa=class extends Sa{constructor(e,t,i,r,s,o,a,c){super(e,s,o,a),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r,this.styles=c?z_(c,i.styles):i.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},cl=class extends wa{constructor(e,t,i,r,s,o,a,c){let l=r+"-"+i.id;super(e,t,i,s,o,a,c,l),this.contentAttr=eM(l),this.hostAttr=tM(l)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}},iM=(()=>{class n extends ol{constructor(t){super(t)}supports(t){return!0}addEventListener(t,i,r){return t.addEventListener(i,r,!1),()=>this.removeEventListener(t,i,r)}removeEventListener(t,i,r){return t.removeEventListener(i,r)}static{this.\u0275fac=function(i){return new(i||n)(be(gt))}}static{this.\u0275prov=Pe({token:n,factory:n.\u0275fac})}}return n})(),N_=["alt","control","meta","shift"],nM={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},rM={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},sM=(()=>{class n extends ol{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,i,r){let s=n.parseEventName(i),o=n.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Uf().onAndCancel(t,s.domEventName,o))}static parseEventName(t){let i=t.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let s=n._normalizeKey(i.pop()),o="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),o="code."),N_.forEach(l=>{let h=i.indexOf(l);h>-1&&(i.splice(h,1),o+=l+".")}),o+=s,i.length!=0||s.length===0)return null;let c={};return c.domEventName=r,c.fullKey=o,c}static matchEventFullKeyCode(t,i){let r=nM[t.key]||t.key,s="";return i.indexOf("code.")>-1&&(r=t.code,s="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),N_.forEach(o=>{if(o!==r){let a=rM[o];a(t)&&(s+=o+".")}}),s+=r,s===i)}static eventCallback(t,i,r){return s=>{n.matchEventFullKeyCode(s,t)&&r.runGuarded(()=>i(s))}}static _normalizeKey(t){return t==="esc"?"escape":t}static{this.\u0275fac=function(i){return new(i||n)(be(gt))}}static{this.\u0275prov=Pe({token:n,factory:n.\u0275fac})}}return n})();function V_(n,e){return v_(te({rootComponent:n},oM(e)))}function oM(n){return{appProviders:[...uM,...n?.providers??[]],platformProviders:hM}}function aM(){Gf.makeCurrent()}function cM(){return new Cf}function lM(){return l_(document),document}var hM=[{provide:Ui,useValue:P_},{provide:h_,useValue:aM,multi:!0},{provide:gt,useFactory:lM,deps:[]}];var uM=[{provide:a_,useValue:"root"},{provide:Cf,useFactory:cM,deps:[]},{provide:Wf,useClass:iM,multi:!0,deps:[gt,pt,Ui]},{provide:Wf,useClass:sM,multi:!0,deps:[gt]},al,U_,k_,{provide:Kc,useExisting:al},{provide:L_,useClass:Yx,deps:[]},[]];var H_=(()=>{class n{constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static{this.\u0275fac=function(i){return new(i||n)(be(gt))}}static{this.\u0275prov=Pe({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var He="primary",Ba=Symbol("RouteTitle"),Jf=class{constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function ao(n){return new Jf(n)}function pM(n,e,t){let i=t.path.split("/");if(i.length>n.length||t.pathMatch==="full"&&(e.hasChildren()||i.length<n.length))return null;let r={};for(let s=0;s<i.length;s++){let o=i[s],a=n[s];if(o[0]===":")r[o.substring(1)]=a;else if(o!==a.path)return null}return{consumed:n.slice(0,i.length),posParams:r}}function mM(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;++t)if(!On(n[t],e[t]))return!1;return!0}function On(n,e){let t=n?Qf(n):void 0,i=e?Qf(e):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let s=0;s<t.length;s++)if(r=t[s],!Q_(n[r],e[r]))return!1;return!0}function Qf(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function Q_(n,e){if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;let t=[...n].sort(),i=[...e].sort();return t.every((r,s)=>i[s]===r)}else return n===e}function ev(n){return n.length>0?n[n.length-1]:null}function Rr(n){return Wc(n)?n:Lf(n)?Ai(Promise.resolve(n)):Te(n)}var gM={exact:iv,subset:nv},tv={exact:_M,subset:vM,ignored:()=>!0};function G_(n,e,t){return gM[t.paths](n.root,e.root,t.matrixParams)&&tv[t.queryParams](n.queryParams,e.queryParams)&&!(t.fragment==="exact"&&n.fragment!==e.fragment)}function _M(n,e){return On(n,e)}function iv(n,e,t){if(!gs(n.segments,e.segments)||!ul(n.segments,e.segments,t)||n.numberOfChildren!==e.numberOfChildren)return!1;for(let i in e.children)if(!n.children[i]||!iv(n.children[i],e.children[i],t))return!1;return!0}function vM(n,e){return Object.keys(e).length<=Object.keys(n).length&&Object.keys(e).every(t=>Q_(n[t],e[t]))}function nv(n,e,t){return rv(n,e,e.segments,t)}function rv(n,e,t,i){if(n.segments.length>t.length){let r=n.segments.slice(0,t.length);return!(!gs(r,t)||e.hasChildren()||!ul(r,t,i))}else if(n.segments.length===t.length){if(!gs(n.segments,t)||!ul(n.segments,t,i))return!1;for(let r in e.children)if(!n.children[r]||!nv(n.children[r],e.children[r],i))return!1;return!0}else{let r=t.slice(0,n.segments.length),s=t.slice(n.segments.length);return!gs(n.segments,r)||!ul(n.segments,r,i)||!n.children[He]?!1:rv(n.children[He],e,s,i)}}function ul(n,e,t){return e.every((i,r)=>tv[t](n[r].parameters,i.parameters))}var er=class{constructor(e=new dt([],{}),t={},i=null){this.root=e,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap??=ao(this.queryParams),this._queryParamMap}toString(){return xM.serialize(this)}},dt=class{constructor(e,t){this.segments=e,this.children=t,this.parent=null,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return dl(this)}},ms=class{constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=ao(this.parameters),this._parameterMap}toString(){return ov(this)}};function yM(n,e){return gs(n,e)&&n.every((t,i)=>On(t.parameters,e[i].parameters))}function gs(n,e){return n.length!==e.length?!1:n.every((t,i)=>t.path===e[i].path)}function bM(n,e){let t=[];return Object.entries(n.children).forEach(([i,r])=>{i===He&&(t=t.concat(e(r,i)))}),Object.entries(n.children).forEach(([i,r])=>{i!==He&&(t=t.concat(e(r,i)))}),t}var za=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Pe({token:n,factory:()=>new co,providedIn:"root"})}}return n})(),co=class{parse(e){let t=new tp(e);return new er(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${Ea(e.root,!0)}`,i=wM(e.queryParams),r=typeof e.fragment=="string"?`#${MM(e.fragment)}`:"";return`${t}${i}${r}`}},xM=new co;function dl(n){return n.segments.map(e=>ov(e)).join("/")}function Ea(n,e){if(!n.hasChildren())return dl(n);if(e){let t=n.children[He]?Ea(n.children[He],!1):"",i=[];return Object.entries(n.children).forEach(([r,s])=>{r!==He&&i.push(`${r}:${Ea(s,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=bM(n,(i,r)=>r===He?[Ea(n.children[He],!1)]:[`${r}:${Ea(i,!1)}`]);return Object.keys(n.children).length===1&&n.children[He]!=null?`${dl(n)}/${t[0]}`:`${dl(n)}/(${t.join("//")})`}}function sv(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function ll(n){return sv(n).replace(/%3B/gi,";")}function MM(n){return encodeURI(n)}function ep(n){return sv(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function fl(n){return decodeURIComponent(n)}function W_(n){return fl(n.replace(/\+/g,"%20"))}function ov(n){return`${ep(n.path)}${SM(n.parameters)}`}function SM(n){return Object.entries(n).map(([e,t])=>`;${ep(e)}=${ep(t)}`).join("")}function wM(n){let e=Object.entries(n).map(([t,i])=>Array.isArray(i)?i.map(r=>`${ll(t)}=${ll(r)}`).join("&"):`${ll(t)}=${ll(i)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var EM=/^[^\/()?;#]+/;function $f(n){let e=n.match(EM);return e?e[0]:""}var CM=/^[^\/()?;=#]+/;function TM(n){let e=n.match(CM);return e?e[0]:""}var AM=/^[^=?&#]+/;function RM(n){let e=n.match(AM);return e?e[0]:""}var IM=/^[^&#]+/;function DM(n){let e=n.match(IM);return e?e[0]:""}var tp=class{constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new dt([],{}):new dt([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(i[He]=new dt(e,t)),i}parseSegment(){let e=$f(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new zt(4009,!1);return this.capture(e),new ms(fl(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=TM(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let r=$f(this.remaining);r&&(i=r,this.capture(i))}e[fl(t)]=fl(i)}parseQueryParam(e){let t=RM(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let o=DM(this.remaining);o&&(i=o,this.capture(i))}let r=W_(t),s=W_(i);if(e.hasOwnProperty(r)){let o=e[r];Array.isArray(o)||(o=[o],e[r]=o),o.push(s)}else e[r]=s}parseParens(e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=$f(this.remaining),r=this.remaining[i.length];if(r!=="/"&&r!==")"&&r!==";")throw new zt(4010,!1);let s;i.indexOf(":")>-1?(s=i.slice(0,i.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=He);let o=this.parseChildren();t[s]=Object.keys(o).length===1?o[He]:new dt([],o),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new zt(4011,!1)}};function av(n){return n.segments.length>0?new dt([],{[He]:n}):n}function cv(n){let e={};for(let[i,r]of Object.entries(n.children)){let s=cv(r);if(i===He&&s.segments.length===0&&s.hasChildren())for(let[o,a]of Object.entries(s.children))e[o]=a;else(s.segments.length>0||s.hasChildren())&&(e[i]=s)}let t=new dt(n.segments,e);return PM(t)}function PM(n){if(n.numberOfChildren===1&&n.children[He]){let e=n.children[He];return new dt(n.segments.concat(e.segments),e.children)}return n}function _s(n){return n instanceof er}function OM(n,e,t=null,i=null){let r=lv(n);return hv(r,e,t,i)}function lv(n){let e;function t(s){let o={};for(let c of s.children){let l=t(c);o[c.outlet]=l}let a=new dt(s.url,o);return s===n&&(e=a),a}let i=t(n.root),r=av(i);return e??r}function hv(n,e,t,i){let r=n;for(;r.parent;)r=r.parent;if(e.length===0)return Yf(r,r,r,t,i);let s=LM(e);if(s.toRoot())return Yf(r,r,new dt([],{}),t,i);let o=FM(s,r,n),a=o.processChildren?Aa(o.segmentGroup,o.index,s.commands):dv(o.segmentGroup,o.index,s.commands);return Yf(r,o.segmentGroup,a,t,i)}function pl(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function Da(n){return typeof n=="object"&&n!=null&&n.outlets}function Yf(n,e,t,i,r){let s={};i&&Object.entries(i).forEach(([c,l])=>{s[c]=Array.isArray(l)?l.map(h=>`${h}`):`${l}`});let o;n===e?o=t:o=uv(n,e,t);let a=av(cv(o));return new er(a,s,r)}function uv(n,e,t){let i={};return Object.entries(n.children).forEach(([r,s])=>{s===e?i[r]=t:i[r]=uv(s,e,t)}),new dt(n.segments,i)}var ml=class{constructor(e,t,i){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=i,e&&i.length>0&&pl(i[0]))throw new zt(4003,!1);let r=i.find(Da);if(r&&r!==ev(i))throw new zt(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function LM(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new ml(!0,0,n);let e=0,t=!1,i=n.reduce((r,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let a={};return Object.entries(s.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:o===0?(s.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?t=!0:a===".."?e++:a!=""&&r.push(a))}),r):[...r,s]},[]);return new ml(t,e,i)}var ro=class{constructor(e,t,i){this.segmentGroup=e,this.processChildren=t,this.index=i}};function FM(n,e,t){if(n.isAbsolute)return new ro(e,!0,0);if(!t)return new ro(e,!1,NaN);if(t.parent===null)return new ro(t,!0,0);let i=pl(n.commands[0])?0:1,r=t.segments.length-1+i;return NM(t,r,n.numberOfDoubleDots)}function NM(n,e,t){let i=n,r=e,s=t;for(;s>r;){if(s-=r,i=i.parent,!i)throw new zt(4005,!1);r=i.segments.length}return new ro(i,!1,r-s)}function kM(n){return Da(n[0])?n[0].outlets:{[He]:n}}function dv(n,e,t){if(n??=new dt([],{}),n.segments.length===0&&n.hasChildren())return Aa(n,e,t);let i=UM(n,e,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){let s=new dt(n.segments.slice(0,i.pathIndex),{});return s.children[He]=new dt(n.segments.slice(i.pathIndex),n.children),Aa(s,0,r)}else return i.match&&r.length===0?new dt(n.segments,{}):i.match&&!n.hasChildren()?ip(n,e,t):i.match?Aa(n,0,r):ip(n,e,t)}function Aa(n,e,t){if(t.length===0)return new dt(n.segments,{});{let i=kM(t),r={};if(Object.keys(i).some(s=>s!==He)&&n.children[He]&&n.numberOfChildren===1&&n.children[He].segments.length===0){let s=Aa(n.children[He],e,t);return new dt(n.segments,s.children)}return Object.entries(i).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[s]=dv(n.children[s],e,o))}),Object.entries(n.children).forEach(([s,o])=>{i[s]===void 0&&(r[s]=o)}),new dt(n.segments,r)}}function UM(n,e,t){let i=0,r=e,s={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(i>=t.length)return s;let o=n.segments[r],a=t[i];if(Da(a))break;let c=`${a}`,l=i<t.length-1?t[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!X_(c,l,o))return s;i+=2}else{if(!X_(c,{},o))return s;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function ip(n,e,t){let i=n.segments.slice(0,e),r=0;for(;r<t.length;){let s=t[r];if(Da(s)){let c=BM(s.outlets);return new dt(i,c)}if(r===0&&pl(t[0])){let c=n.segments[e];i.push(new ms(c.path,j_(t[0]))),r++;continue}let o=Da(s)?s.outlets[He]:`${s}`,a=r<t.length-1?t[r+1]:null;o&&a&&pl(a)?(i.push(new ms(o,j_(a))),r+=2):(i.push(new ms(o,{})),r++)}return new dt(i,{})}function BM(n){let e={};return Object.entries(n).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(e[t]=ip(new dt([],{}),0,i))}),e}function j_(n){let e={};return Object.entries(n).forEach(([t,i])=>e[t]=`${i}`),e}function X_(n,e,t){return n==t.path&&On(e,t.parameters)}var Ra="imperative",ci=function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n}(ci||{}),Qi=class{constructor(e,t){this.id=e,this.url=t}},lo=class extends Qi{constructor(e,t,i="imperative",r=null){super(e,t),this.type=ci.NavigationStart,this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},pn=class extends Qi{constructor(e,t,i){super(e,t),this.urlAfterRedirects=i,this.type=ci.NavigationEnd}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},zi=function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n}(zi||{}),gl=function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n}(gl||{}),Qn=class extends Qi{constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r,this.type=ci.NavigationCancel}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Tr=class extends Qi{constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r,this.type=ci.NavigationSkipped}},Pa=class extends Qi{constructor(e,t,i,r){super(e,t),this.error=i,this.target=r,this.type=ci.NavigationError}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},_l=class extends Qi{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=ci.RoutesRecognized}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},np=class extends Qi{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=ci.GuardsCheckStart}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},rp=class extends Qi{constructor(e,t,i,r,s){super(e,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=s,this.type=ci.GuardsCheckEnd}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},sp=class extends Qi{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=ci.ResolveStart}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},op=class extends Qi{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=ci.ResolveEnd}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ap=class{constructor(e){this.route=e,this.type=ci.RouteConfigLoadStart}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},cp=class{constructor(e){this.route=e,this.type=ci.RouteConfigLoadEnd}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},lp=class{constructor(e){this.snapshot=e,this.type=ci.ChildActivationStart}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},hp=class{constructor(e){this.snapshot=e,this.type=ci.ChildActivationEnd}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},up=class{constructor(e){this.snapshot=e,this.type=ci.ActivationStart}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},dp=class{constructor(e){this.snapshot=e,this.type=ci.ActivationEnd}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},vl=class{constructor(e,t,i){this.routerEvent=e,this.position=t,this.anchor=i,this.type=ci.Scroll}toString(){let e=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${e}')`}},Oa=class{},ho=class{constructor(e,t){this.url=e,this.navigationBehaviorOptions=t}};function zM(n,e){return n.providers&&!n._injector&&(n._injector=Rf(n.providers,e,`Route: ${n.path}`)),n._injector??e}function fn(n){return n.outlet||He}function VM(n,e){let t=n.filter(i=>fn(i)===e);return t.push(...n.filter(i=>fn(i)!==e)),t}function Va(n){if(!n)return null;if(n.routeConfig?._injector)return n.routeConfig._injector;for(let e=n.parent;e;e=e.parent){let t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var fp=class{get injector(){return Va(this.route?.snapshot)??this.rootInjector}set injector(e){}constructor(e){this.rootInjector=e,this.outlet=null,this.route=null,this.children=new Ha(this.rootInjector),this.attachRef=null}},Ha=(()=>{class n{constructor(t){this.rootInjector=t,this.contexts=new Map}onChildOutletCreated(t,i){let r=this.getOrCreateContext(t);r.outlet=i,this.contexts.set(t,r)}onChildOutletDestroyed(t){let i=this.getContext(t);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let i=this.getContext(t);return i||(i=new fp(this.rootInjector),this.contexts.set(t,i)),i}getContext(t){return this.contexts.get(t)||null}static{this.\u0275fac=function(i){return new(i||n)(be(fa))}}static{this.\u0275prov=Pe({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),yl=class{constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=pp(e,this._root);return t?t.children.map(i=>i.value):[]}firstChild(e){let t=pp(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=mp(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return mp(e,this._root).map(t=>t.value)}};function pp(n,e){if(n===e.value)return e;for(let t of e.children){let i=pp(n,t);if(i)return i}return null}function mp(n,e){if(n===e.value)return[e];for(let t of e.children){let i=mp(n,t);if(i.length)return i.unshift(e),i}return[]}var Bi=class{constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function no(n){let e={};return n&&n.children.forEach(t=>e[t.value.outlet]=t),e}var bl=class extends yl{constructor(e,t){super(e),this.snapshot=t,wp(this,e)}toString(){return this.snapshot.toString()}};function fv(n){let e=HM(n),t=new Mi([new ms("",{})]),i=new Mi({}),r=new Mi({}),s=new Mi({}),o=new Mi(""),a=new Ar(t,i,s,o,r,He,n,e.root);return a.snapshot=e.root,new bl(new Bi(a,[]),e)}function HM(n){let e={},t={},i={},r="",s=new so([],e,i,r,t,He,n,null,{});return new Ml("",new Bi(s,[]))}var Ar=class{constructor(e,t,i,r,s,o,a,c){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=s,this.outlet=o,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(rt(l=>l[Ba]))??Te(void 0),this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(rt(e=>ao(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(rt(e=>ao(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function xl(n,e,t="emptyOnly"){let i,{routeConfig:r}=n;return e!==null&&(t==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?i={params:te(te({},e.params),n.params),data:te(te({},e.data),n.data),resolve:te(te(te(te({},n.data),e.data),r?.data),n._resolvedData)}:i={params:te({},n.params),data:te({},n.data),resolve:te(te({},n.data),n._resolvedData??{})},r&&mv(r)&&(i.resolve[Ba]=r.title),i}var so=class{get title(){return this.data?.[Ba]}constructor(e,t,i,r,s,o,a,c,l){this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s,this.outlet=o,this.component=a,this.routeConfig=c,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=ao(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=ao(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},Ml=class extends yl{constructor(e,t){super(t),this.url=e,wp(this,t)}toString(){return pv(this._root)}};function wp(n,e){e.value._routerState=n,e.children.forEach(t=>wp(n,t))}function pv(n){let e=n.children.length>0?` { ${n.children.map(pv).join(", ")} } `:"";return`${n.value}${e}`}function Zf(n){if(n.snapshot){let e=n.snapshot,t=n._futureSnapshot;n.snapshot=t,On(e.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),On(e.params,t.params)||n.paramsSubject.next(t.params),mM(e.url,t.url)||n.urlSubject.next(t.url),On(e.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function gp(n,e){let t=On(n.params,e.params)&&yM(n.url,e.url),i=!n.parent!=!e.parent;return t&&!i&&(!n.parent||gp(n.parent,e.parent))}function mv(n){return typeof n.title=="string"||n.title===null}var Ep=(()=>{class n{constructor(){this.activated=null,this._activatedRoute=null,this.name=He,this.activateEvents=new bt,this.deactivateEvents=new bt,this.attachEvents=new bt,this.detachEvents=new bt,this.parentContexts=ye(Ha),this.location=ye(An),this.changeDetector=ye(Ji),this.inputBinder=ye(Tl,{optional:!0}),this.supportsBindingToComponentInputs=!0}get activatedComponentRef(){return this.activated}ngOnChanges(t){if(t.name){let{firstChange:i,previousValue:r}=t.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new zt(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new zt(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new zt(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,i){this.activated=t,this._activatedRoute=i,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,i){if(this.isActivated)throw new zt(4013,!1);this._activatedRoute=t;let r=this.location,o=t.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,c=new _p(t,a,r.injector);this.activated=r.createComponent(o,{index:r.length,injector:c,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275dir=At({type:n,selectors:[["router-outlet"]],inputs:{name:"name"},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0,features:[Kn]})}}return n})(),_p=class n{__ngOutletInjector(e){return new n(this.route,this.childContexts,e)}constructor(e,t,i){this.route=e,this.childContexts=t,this.parent=i}get(e,t){return e===Ar?this.route:e===Ha?this.childContexts:this.parent.get(e,t)}},Tl=new et(""),q_=(()=>{class n{constructor(){this.outletDataSubscriptions=new Map}bindActivatedRouteToOutletComponent(t){this.unsubscribeFromRouteData(t),this.subscribeToRouteData(t)}unsubscribeFromRouteData(t){this.outletDataSubscriptions.get(t)?.unsubscribe(),this.outletDataSubscriptions.delete(t)}subscribeToRouteData(t){let{activatedRoute:i}=t,r=Zs([i.queryParams,i.params,i.data]).pipe(Ri(([s,o,a],c)=>(a=te(te(te({},s),o),a),c===0?Te(a):Promise.resolve(a)))).subscribe(s=>{if(!t.isActivated||!t.activatedComponentRef||t.activatedRoute!==i||i.component===null){this.unsubscribeFromRouteData(t);return}let o=b_(i.component);if(!o){this.unsubscribeFromRouteData(t);return}for(let{templateName:a}of o.inputs)t.activatedComponentRef.setInput(a,s[a])});this.outletDataSubscriptions.set(t,r)}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Pe({token:n,factory:n.\u0275fac})}}return n})();function GM(n,e,t){let i=La(n,e._root,t?t._root:void 0);return new bl(i,e)}function La(n,e,t){if(t&&n.shouldReuseRoute(e.value,t.value.snapshot)){let i=t.value;i._futureSnapshot=e.value;let r=WM(n,e,t);return new Bi(i,r)}else{if(n.shouldAttach(e.value)){let s=n.retrieve(e.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=e.value,o.children=e.children.map(a=>La(n,a)),o}}let i=jM(e.value),r=e.children.map(s=>La(n,s));return new Bi(i,r)}}function WM(n,e,t){return e.children.map(i=>{for(let r of t.children)if(n.shouldReuseRoute(i.value,r.value.snapshot))return La(n,i,r);return La(n,i)})}function jM(n){return new Ar(new Mi(n.url),new Mi(n.params),new Mi(n.queryParams),new Mi(n.fragment),new Mi(n.data),n.outlet,n.component,n)}var Fa=class{constructor(e,t){this.redirectTo=e,this.navigationBehaviorOptions=t}},gv="ngNavigationCancelingError";function Sl(n,e){let{redirectTo:t,navigationBehaviorOptions:i}=_s(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=_v(!1,zi.Redirect);return r.url=t,r.navigationBehaviorOptions=i,r}function _v(n,e){let t=new Error(`NavigationCancelingError: ${n||""}`);return t[gv]=!0,t.cancellationCode=e,t}function XM(n){return vv(n)&&_s(n.url)}function vv(n){return!!n&&n[gv]}var qM=(n,e,t,i)=>rt(r=>(new vp(e,r.targetRouterState,r.currentRouterState,t,i).activate(n),r)),vp=class{constructor(e,t,i,r,s){this.routeReuseStrategy=e,this.futureState=t,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=s}activate(e){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,e),Zf(this.futureState.root),this.activateChildRoutes(t,i,e)}deactivateChildRoutes(e,t,i){let r=no(t);e.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,r[o],i),delete r[o]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,i)})}deactivateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(r===s)if(r.component){let o=i.getContext(r.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,i);else s&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=no(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);if(i&&i.outlet){let o=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:o,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=no(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(e,t,i){let r=no(t);e.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],i),this.forwardEvent(new dp(s.value.snapshot))}),e.children.length&&this.forwardEvent(new hp(e.value.snapshot))}activateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(Zf(r),r===s)if(r.component){let o=i.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,i);else if(r.component){let o=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),Zf(a.route.value),this.activateChildRoutes(e,null,o.children)}else o.attachRef=null,o.route=r,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(e,null,o.children)}else this.activateChildRoutes(e,null,i)}},wl=class{constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},oo=class{constructor(e,t){this.component=e,this.route=t}};function $M(n,e,t){let i=n._root,r=e?e._root:null;return Ca(i,r,t,[i.value])}function YM(n){let e=n.routeConfig?n.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:n,guards:e}}function fo(n,e){let t=Symbol(),i=e.get(n,t);return i===t?typeof n=="function"&&!s_(n)?n:e.get(n):i}function Ca(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=no(e);return n.children.forEach(o=>{ZM(o,s[o.value.outlet],t,i.concat([o.value]),r),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,a])=>Ia(a,t.getContext(o),r)),r}function ZM(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=n.value,o=e?e.value:null,a=t?t.getContext(n.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let c=KM(o,s,s.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new wl(i)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?Ca(n,e,a?a.children:null,i,r):Ca(n,e,t,i,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new oo(a.outlet.component,o))}else o&&Ia(e,a,r),r.canActivateChecks.push(new wl(i)),s.component?Ca(n,null,a?a.children:null,i,r):Ca(n,null,t,i,r);return r}function KM(n,e,t){if(typeof t=="function")return t(n,e);switch(t){case"pathParamsChange":return!gs(n.url,e.url);case"pathParamsOrQueryParamsChange":return!gs(n.url,e.url)||!On(n.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!gp(n,e)||!On(n.queryParams,e.queryParams);case"paramsChange":default:return!gp(n,e)}}function Ia(n,e,t){let i=no(n),r=n.value;Object.entries(i).forEach(([s,o])=>{r.component?e?Ia(o,e.children.getContext(s),t):Ia(o,null,t):Ia(o,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new oo(e.outlet.component,r)):t.canDeactivateChecks.push(new oo(null,r)):t.canDeactivateChecks.push(new oo(null,r))}function Ga(n){return typeof n=="function"}function JM(n){return typeof n=="boolean"}function QM(n){return n&&Ga(n.canLoad)}function eS(n){return n&&Ga(n.canActivate)}function tS(n){return n&&Ga(n.canActivateChild)}function iS(n){return n&&Ga(n.canDeactivate)}function nS(n){return n&&Ga(n.canMatch)}function yv(n){return n instanceof e_||n?.name==="EmptyError"}var hl=Symbol("INITIAL_VALUE");function uo(){return Ri(n=>Zs(n.map(e=>e.pipe(Yn(1),Zn(hl)))).pipe(rt(e=>{for(let t of e)if(t!==!0){if(t===hl)return hl;if(t===!1||rS(t))return t}return!0}),fi(e=>e!==hl),Yn(1)))}function rS(n){return _s(n)||n instanceof Fa}function sS(n,e){return ki(t=>{let{targetSnapshot:i,currentSnapshot:r,guards:{canActivateChecks:s,canDeactivateChecks:o}}=t;return o.length===0&&s.length===0?Te(Dt(te({},t),{guardsResult:!0})):oS(o,i,r,n).pipe(ki(a=>a&&JM(a)?aS(i,s,n,e):Te(a)),rt(a=>Dt(te({},t),{guardsResult:a})))})}function oS(n,e,t,i){return Ai(n).pipe(ki(r=>dS(r.component,r.route,t,e,i)),br(r=>r!==!0,!0))}function aS(n,e,t,i){return Ai(e).pipe(Js(r=>jc(lS(r.route.parent,i),cS(r.route,i),uS(n,r.path,t),hS(n,r.route,t))),br(r=>r!==!0,!0))}function cS(n,e){return n!==null&&e&&e(new up(n)),Te(!0)}function lS(n,e){return n!==null&&e&&e(new lp(n)),Te(!0)}function hS(n,e,t){let i=e.routeConfig?e.routeConfig.canActivate:null;if(!i||i.length===0)return Te(!0);let r=i.map(s=>gf(()=>{let o=Va(e)??t,a=fo(s,o),c=eS(a)?a.canActivate(e,n):Tn(o,()=>a(e,n));return Rr(c).pipe(br())}));return Te(r).pipe(uo())}function uS(n,e,t){let i=e[e.length-1],s=e.slice(0,e.length-1).reverse().map(o=>YM(o)).filter(o=>o!==null).map(o=>gf(()=>{let a=o.guards.map(c=>{let l=Va(o.node)??t,h=fo(c,l),u=tS(h)?h.canActivateChild(i,n):Tn(l,()=>h(i,n));return Rr(u).pipe(br())});return Te(a).pipe(uo())}));return Te(s).pipe(uo())}function dS(n,e,t,i,r){let s=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!s||s.length===0)return Te(!0);let o=s.map(a=>{let c=Va(e)??r,l=fo(a,c),h=iS(l)?l.canDeactivate(n,e,t,i):Tn(c,()=>l(n,e,t,i));return Rr(h).pipe(br())});return Te(o).pipe(uo())}function fS(n,e,t,i){let r=e.canLoad;if(r===void 0||r.length===0)return Te(!0);let s=r.map(o=>{let a=fo(o,n),c=QM(a)?a.canLoad(e,t):Tn(n,()=>a(e,t));return Rr(c)});return Te(s).pipe(uo(),bv(i))}function bv(n){return Qg(oi(e=>{if(typeof e!="boolean")throw Sl(n,e)}),rt(e=>e===!0))}function pS(n,e,t,i){let r=e.canMatch;if(!r||r.length===0)return Te(!0);let s=r.map(o=>{let a=fo(o,n),c=nS(a)?a.canMatch(e,t):Tn(n,()=>a(e,t));return Rr(c)});return Te(s).pipe(uo(),bv(i))}var Na=class{constructor(e){this.segmentGroup=e||null}},ka=class extends Error{constructor(e){super(),this.urlTree=e}};function io(n){return la(new Na(n))}function mS(n){return la(new zt(4e3,!1))}function gS(n){return la(_v(!1,zi.GuardRejected))}var yp=class{constructor(e,t){this.urlSerializer=e,this.urlTree=t}lineralizeSegments(e,t){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return Te(i);if(r.numberOfChildren>1||!r.children[He])return mS(`${e.redirectTo}`);r=r.children[He]}}applyRedirectCommands(e,t,i,r,s){if(typeof t!="string"){let a=t,{queryParams:c,fragment:l,routeConfig:h,url:u,outlet:d,params:m,data:g,title:v}=r,p=Tn(s,()=>a({params:m,data:g,queryParams:c,fragment:l,routeConfig:h,url:u,outlet:d,title:v}));if(p instanceof er)throw new ka(p);t=p}let o=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),e,i);if(t[0]==="/")throw new ka(o);return o}applyRedirectCreateUrlTree(e,t,i,r){let s=this.createSegmentGroup(e,t.root,i,r);return new er(s,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let i={};return Object.entries(e).forEach(([r,s])=>{if(typeof s=="string"&&s[0]===":"){let a=s.substring(1);i[r]=t[a]}else i[r]=s}),i}createSegmentGroup(e,t,i,r){let s=this.createSegments(e,t.segments,i,r),o={};return Object.entries(t.children).forEach(([a,c])=>{o[a]=this.createSegmentGroup(e,c,i,r)}),new dt(s,o)}createSegments(e,t,i,r){return t.map(s=>s.path[0]===":"?this.findPosParam(e,s,r):this.findOrReturn(s,i))}findPosParam(e,t,i){let r=i[t.path.substring(1)];if(!r)throw new zt(4001,!1);return r}findOrReturn(e,t){let i=0;for(let r of t){if(r.path===e.path)return t.splice(i),r;i++}return e}},bp={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function _S(n,e,t,i,r){let s=xv(n,e,t);return s.matched?(i=zM(e,i),pS(i,e,t,r).pipe(rt(o=>o===!0?s:te({},bp)))):Te(s)}function xv(n,e,t){if(e.path==="**")return vS(t);if(e.path==="")return e.pathMatch==="full"&&(n.hasChildren()||t.length>0)?te({},bp):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||pM)(t,n,e);if(!r)return te({},bp);let s={};Object.entries(r.posParams??{}).forEach(([a,c])=>{s[a]=c.path});let o=r.consumed.length>0?te(te({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function vS(n){return{matched:!0,parameters:n.length>0?ev(n).parameters:{},consumedSegments:n,remainingSegments:[],positionalParamSegments:{}}}function $_(n,e,t,i){return t.length>0&&xS(n,t,i)?{segmentGroup:new dt(e,bS(i,new dt(t,n.children))),slicedSegments:[]}:t.length===0&&MS(n,t,i)?{segmentGroup:new dt(n.segments,yS(n,t,i,n.children)),slicedSegments:t}:{segmentGroup:new dt(n.segments,n.children),slicedSegments:t}}function yS(n,e,t,i){let r={};for(let s of t)if(Al(n,e,s)&&!i[fn(s)]){let o=new dt([],{});r[fn(s)]=o}return te(te({},i),r)}function bS(n,e){let t={};t[He]=e;for(let i of n)if(i.path===""&&fn(i)!==He){let r=new dt([],{});t[fn(i)]=r}return t}function xS(n,e,t){return t.some(i=>Al(n,e,i)&&fn(i)!==He)}function MS(n,e,t){return t.some(i=>Al(n,e,i))}function Al(n,e,t){return(n.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function SS(n,e,t){return e.length===0&&!n.children[t]}var xp=class{};function wS(n,e,t,i,r,s,o="emptyOnly"){return new Mp(n,e,t,i,r,o,s).recognize()}var ES=31,Mp=class{constructor(e,t,i,r,s,o,a){this.injector=e,this.configLoader=t,this.rootComponentType=i,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.applyRedirects=new yp(this.urlSerializer,this.urlTree),this.absoluteRedirectCount=0,this.allowRedirects=!0}noMatchError(e){return new zt(4002,`'${e.segmentGroup}'`)}recognize(){let e=$_(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(rt(({children:t,rootSnapshot:i})=>{let r=new Bi(i,t),s=new Ml("",r),o=OM(i,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),{state:s,tree:o}}))}match(e){let t=new so([],Object.freeze({}),Object.freeze(te({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),He,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,e,He,t).pipe(rt(i=>({children:i,rootSnapshot:t})),Ks(i=>{if(i instanceof ka)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof Na?this.noMatchError(i):i}))}processSegmentGroup(e,t,i,r,s){return i.segments.length===0&&i.hasChildren()?this.processChildren(e,t,i,s):this.processSegment(e,t,i,i.segments,r,!0,s).pipe(rt(o=>o instanceof Bi?[o]:[]))}processChildren(e,t,i,r){let s=[];for(let o of Object.keys(i.children))o==="primary"?s.unshift(o):s.push(o);return Ai(s).pipe(Js(o=>{let a=i.children[o],c=VM(t,o);return this.processSegmentGroup(e,c,a,o,r)}),r_((o,a)=>(o.push(...a),o)),vf(null),n_(),ki(o=>{if(o===null)return io(i);let a=Mv(o);return CS(a),Te(a)}))}processSegment(e,t,i,r,s,o,a){return Ai(t).pipe(Js(c=>this.processSegmentAgainstRoute(c._injector??e,t,c,i,r,s,o,a).pipe(Ks(l=>{if(l instanceof Na)return Te(null);throw l}))),br(c=>!!c),Ks(c=>{if(yv(c))return SS(i,r,s)?Te(new xp):io(i);throw c}))}processSegmentAgainstRoute(e,t,i,r,s,o,a,c){return fn(i)!==o&&(o===He||!Al(r,s,i))?io(r):i.redirectTo===void 0?this.matchSegmentAgainstRoute(e,r,i,s,o,c):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(e,r,t,i,s,o,c):io(r)}expandSegmentAgainstRouteUsingRedirect(e,t,i,r,s,o,a){let{matched:c,parameters:l,consumedSegments:h,positionalParamSegments:u,remainingSegments:d}=xv(t,r,s);if(!c)return io(t);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>ES&&(this.allowRedirects=!1));let m=new so(s,l,Object.freeze(te({},this.urlTree.queryParams)),this.urlTree.fragment,Y_(r),fn(r),r.component??r._loadedComponent??null,r,Z_(r)),g=xl(m,a,this.paramsInheritanceStrategy);m.params=Object.freeze(g.params),m.data=Object.freeze(g.data);let v=this.applyRedirects.applyRedirectCommands(h,r.redirectTo,u,m,e);return this.applyRedirects.lineralizeSegments(r,v).pipe(ki(p=>this.processSegment(e,i,t,p.concat(d),o,!1,a)))}matchSegmentAgainstRoute(e,t,i,r,s,o){let a=_S(t,i,r,e,this.urlSerializer);return i.path==="**"&&(t.children={}),a.pipe(Ri(c=>c.matched?(e=i._injector??e,this.getChildConfig(e,i,r).pipe(Ri(({routes:l})=>{let h=i._loadedInjector??e,{parameters:u,consumedSegments:d,remainingSegments:m}=c,g=new so(d,u,Object.freeze(te({},this.urlTree.queryParams)),this.urlTree.fragment,Y_(i),fn(i),i.component??i._loadedComponent??null,i,Z_(i)),v=xl(g,o,this.paramsInheritanceStrategy);g.params=Object.freeze(v.params),g.data=Object.freeze(v.data);let{segmentGroup:p,slicedSegments:f}=$_(t,d,m,l);if(f.length===0&&p.hasChildren())return this.processChildren(h,l,p,g).pipe(rt(w=>new Bi(g,w)));if(l.length===0&&f.length===0)return Te(new Bi(g,[]));let E=fn(i)===s;return this.processSegment(h,l,p,f,E?He:s,!0,g).pipe(rt(w=>new Bi(g,w instanceof Bi?[w]:[])))}))):io(t)))}getChildConfig(e,t,i){return t.children?Te({routes:t.children,injector:e}):t.loadChildren?t._loadedRoutes!==void 0?Te({routes:t._loadedRoutes,injector:t._loadedInjector}):fS(e,t,i,this.urlSerializer).pipe(ki(r=>r?this.configLoader.loadChildren(e,t).pipe(oi(s=>{t._loadedRoutes=s.routes,t._loadedInjector=s.injector})):gS(t))):Te({routes:[],injector:e})}};function CS(n){n.sort((e,t)=>e.value.outlet===He?-1:t.value.outlet===He?1:e.value.outlet.localeCompare(t.value.outlet))}function TS(n){let e=n.value.routeConfig;return e&&e.path===""}function Mv(n){let e=[],t=new Set;for(let i of n){if(!TS(i)){e.push(i);continue}let r=e.find(s=>i.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...i.children),t.add(r)):e.push(i)}for(let i of t){let r=Mv(i.children);e.push(new Bi(i.value,r))}return e.filter(i=>!t.has(i))}function Y_(n){return n.data||{}}function Z_(n){return n.resolve||{}}function AS(n,e,t,i,r,s){return ki(o=>wS(n,e,t,i,o.extractedUrl,r,s).pipe(rt(({state:a,tree:c})=>Dt(te({},o),{targetSnapshot:a,urlAfterRedirects:c}))))}function RS(n,e){return ki(t=>{let{targetSnapshot:i,guards:{canActivateChecks:r}}=t;if(!r.length)return Te(t);let s=new Set(r.map(c=>c.route)),o=new Set;for(let c of s)if(!o.has(c))for(let l of Sv(c))o.add(l);let a=0;return Ai(o).pipe(Js(c=>s.has(c)?IS(c,i,n,e):(c.data=xl(c,c.parent,n).resolve,Te(void 0))),oi(()=>a++),bf(1),ki(c=>a===o.size?Te(t):Cn))})}function Sv(n){let e=n.children.map(t=>Sv(t)).flat();return[n,...e]}function IS(n,e,t,i){let r=n.routeConfig,s=n._resolve;return r?.title!==void 0&&!mv(r)&&(s[Ba]=r.title),DS(s,n,e,i).pipe(rt(o=>(n._resolvedData=o,n.data=xl(n,n.parent,t).resolve,null)))}function DS(n,e,t,i){let r=Qf(n);if(r.length===0)return Te({});let s={};return Ai(r).pipe(ki(o=>PS(n[o],e,t,i).pipe(br(),oi(a=>{if(a instanceof Fa)throw Sl(new co,a);s[o]=a}))),bf(1),i_(s),Ks(o=>yv(o)?Cn:la(o)))}function PS(n,e,t,i){let r=Va(e)??i,s=fo(n,r),o=s.resolve?s.resolve(e,t):Tn(r,()=>s(e,t));return Rr(o)}function Kf(n){return Ri(e=>{let t=n(e);return t?Ai(t).pipe(rt(()=>e)):Te(e)})}var wv=(()=>{class n{buildTitle(t){let i,r=t.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(s=>s.outlet===He);return i}getResolvedTitleForRoute(t){return t.data[Ba]}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Pe({token:n,factory:()=>ye(OS),providedIn:"root"})}}return n})(),OS=(()=>{class n extends wv{constructor(t){super(),this.title=t}updateTitle(t){let i=this.buildTitle(t);i!==void 0&&this.title.setTitle(i)}static{this.\u0275fac=function(i){return new(i||n)(be(H_))}}static{this.\u0275prov=Pe({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),Wa=new et("",{providedIn:"root",factory:()=>({})}),LS=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=Pt({type:n,selectors:[["ng-component"]],standalone:!0,features:[Ot],decls:1,vars:0,template:function(i,r){i&1&&pi(0,"router-outlet")},dependencies:[Ep],encapsulation:2})}}return n})();function Cp(n){let e=n.children&&n.children.map(Cp),t=e?Dt(te({},n),{children:e}):te({},n);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==He&&(t.component=LS),t}var Ua=new et(""),Tp=(()=>{class n{constructor(){this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap,this.compiler=ye(il)}loadComponent(t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Te(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let i=Rr(t.loadComponent()).pipe(rt(Ev),oi(s=>{this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=s}),qc(()=>{this.componentLoaders.delete(t)})),r=new mf(i,()=>new lt).pipe(pf());return this.componentLoaders.set(t,r),r}loadChildren(t,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Te({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let s=FS(i,this.compiler,t,this.onLoadEndListener).pipe(qc(()=>{this.childrenLoaders.delete(i)})),o=new mf(s,()=>new lt).pipe(pf());return this.childrenLoaders.set(i,o),o}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Pe({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function FS(n,e,t,i){return Rr(n.loadChildren()).pipe(rt(Ev),ki(r=>r instanceof p_||Array.isArray(r)?Te(r):Ai(e.compileModuleAsync(r))),rt(r=>{i&&i(n);let s,o,a=!1;return Array.isArray(r)?(o=r,a=!0):(s=r.create(t).injector,o=s.get(Ua,[],{optional:!0,self:!0}).flat()),{routes:o.map(Cp),injector:s}}))}function NS(n){return n&&typeof n=="object"&&"default"in n}function Ev(n){return NS(n)?n.default:n}var Ap=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Pe({token:n,factory:()=>ye(kS),providedIn:"root"})}}return n})(),kS=(()=>{class n{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,i){return t}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Pe({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),Cv=new et(""),Tv=new et("");function US(n,e,t){let i=n.get(Tv),r=n.get(gt);return n.get(pt).runOutsideAngular(()=>{if(!r.startViewTransition||i.skipNextTransition)return i.skipNextTransition=!1,new Promise(l=>setTimeout(l));let s,o=new Promise(l=>{s=l}),a=r.startViewTransition(()=>(s(),BS(n))),{onViewTransitionCreated:c}=i;return c&&Tn(n,()=>c({transition:a,from:e,to:t})),o})}function BS(n){return new Promise(e=>{va({read:()=>setTimeout(e)},{injector:n})})}var zS=new et(""),Rp=(()=>{class n{get hasRequestedNavigation(){return this.navigationId!==0}constructor(){this.currentNavigation=null,this.currentTransition=null,this.lastSuccessfulNavigation=null,this.events=new lt,this.transitionAbortSubject=new lt,this.configLoader=ye(Tp),this.environmentInjector=ye(fa),this.urlSerializer=ye(za),this.rootContexts=ye(Ha),this.location=ye(xa),this.inputBindingEnabled=ye(Tl,{optional:!0})!==null,this.titleStrategy=ye(wv),this.options=ye(Wa,{optional:!0})||{},this.paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly",this.urlHandlingStrategy=ye(Ap),this.createViewTransition=ye(Cv,{optional:!0}),this.navigationErrorHandler=ye(zS,{optional:!0}),this.navigationId=0,this.afterPreactivation=()=>Te(void 0),this.rootComponentType=null;let t=r=>this.events.next(new ap(r)),i=r=>this.events.next(new cp(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=t}complete(){this.transitions?.complete()}handleNavigationRequest(t){let i=++this.navigationId;this.transitions?.next(Dt(te(te({},this.transitions.value),t),{id:i}))}setupNavigations(t,i,r){return this.transitions=new Mi({id:0,currentUrlTree:i,currentRawUrl:i,extractedUrl:this.urlHandlingStrategy.extract(i),urlAfterRedirects:this.urlHandlingStrategy.extract(i),rawUrl:i,extras:{},resolve:()=>{},reject:()=>{},promise:Promise.resolve(!0),source:Ra,restoredState:null,currentSnapshot:r.snapshot,targetSnapshot:null,currentRouterState:r,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(fi(s=>s.id!==0),rt(s=>Dt(te({},s),{extractedUrl:this.urlHandlingStrategy.extract(s.rawUrl)})),Ri(s=>{let o=!1,a=!1;return Te(s).pipe(Ri(c=>{if(this.navigationId>s.id)return this.cancelNavigationTransition(s,"",zi.SupersededByNewNavigation),Cn;this.currentTransition=s,this.currentNavigation={id:c.id,initialUrl:c.rawUrl,extractedUrl:c.extractedUrl,targetBrowserUrl:typeof c.extras.browserUrl=="string"?this.urlSerializer.parse(c.extras.browserUrl):c.extras.browserUrl,trigger:c.source,extras:c.extras,previousNavigation:this.lastSuccessfulNavigation?Dt(te({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let l=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),h=c.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!l&&h!=="reload"){let u="";return this.events.next(new Tr(c.id,this.urlSerializer.serialize(c.rawUrl),u,gl.IgnoredSameUrlNavigation)),c.resolve(!1),Cn}if(this.urlHandlingStrategy.shouldProcessUrl(c.rawUrl))return Te(c).pipe(Ri(u=>{let d=this.transitions?.getValue();return this.events.next(new lo(u.id,this.urlSerializer.serialize(u.extractedUrl),u.source,u.restoredState)),d!==this.transitions?.getValue()?Cn:Promise.resolve(u)}),AS(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy),oi(u=>{s.targetSnapshot=u.targetSnapshot,s.urlAfterRedirects=u.urlAfterRedirects,this.currentNavigation=Dt(te({},this.currentNavigation),{finalUrl:u.urlAfterRedirects});let d=new _l(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(d)}));if(l&&this.urlHandlingStrategy.shouldProcessUrl(c.currentRawUrl)){let{id:u,extractedUrl:d,source:m,restoredState:g,extras:v}=c,p=new lo(u,this.urlSerializer.serialize(d),m,g);this.events.next(p);let f=fv(this.rootComponentType).snapshot;return this.currentTransition=s=Dt(te({},c),{targetSnapshot:f,urlAfterRedirects:d,extras:Dt(te({},v),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=d,Te(s)}else{let u="";return this.events.next(new Tr(c.id,this.urlSerializer.serialize(c.extractedUrl),u,gl.IgnoredByUrlHandlingStrategy)),c.resolve(!1),Cn}}),oi(c=>{let l=new np(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(l)}),rt(c=>(this.currentTransition=s=Dt(te({},c),{guards:$M(c.targetSnapshot,c.currentSnapshot,this.rootContexts)}),s)),sS(this.environmentInjector,c=>this.events.next(c)),oi(c=>{if(s.guardsResult=c.guardsResult,c.guardsResult&&typeof c.guardsResult!="boolean")throw Sl(this.urlSerializer,c.guardsResult);let l=new rp(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot,!!c.guardsResult);this.events.next(l)}),fi(c=>c.guardsResult?!0:(this.cancelNavigationTransition(c,"",zi.GuardRejected),!1)),Kf(c=>{if(c.guards.canActivateChecks.length)return Te(c).pipe(oi(l=>{let h=new sp(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(h)}),Ri(l=>{let h=!1;return Te(l).pipe(RS(this.paramsInheritanceStrategy,this.environmentInjector),oi({next:()=>h=!0,complete:()=>{h||this.cancelNavigationTransition(l,"",zi.NoDataFromResolver)}}))}),oi(l=>{let h=new op(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(h)}))}),Kf(c=>{let l=h=>{let u=[];h.routeConfig?.loadComponent&&!h.routeConfig._loadedComponent&&u.push(this.configLoader.loadComponent(h.routeConfig).pipe(oi(d=>{h.component=d}),rt(()=>{})));for(let d of h.children)u.push(...l(d));return u};return Zs(l(c.targetSnapshot.root)).pipe(vf(null),Yn(1))}),Kf(()=>this.afterPreactivation()),Ri(()=>{let{currentSnapshot:c,targetSnapshot:l}=s,h=this.createViewTransition?.(this.environmentInjector,c.root,l.root);return h?Ai(h).pipe(rt(()=>s)):Te(s)}),rt(c=>{let l=GM(t.routeReuseStrategy,c.targetSnapshot,c.currentRouterState);return this.currentTransition=s=Dt(te({},c),{targetRouterState:l}),this.currentNavigation.targetRouterState=l,s}),oi(()=>{this.events.next(new Oa)}),qM(this.rootContexts,t.routeReuseStrategy,c=>this.events.next(c),this.inputBindingEnabled),Yn(1),oi({next:c=>{o=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new pn(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects))),this.titleStrategy?.updateTitle(c.targetRouterState.snapshot),c.resolve(!0)},complete:()=>{o=!0}}),si(this.transitionAbortSubject.pipe(oi(c=>{throw c}))),qc(()=>{!o&&!a&&this.cancelNavigationTransition(s,"",zi.SupersededByNewNavigation),this.currentTransition?.id===s.id&&(this.currentNavigation=null,this.currentTransition=null)}),Ks(c=>{if(a=!0,vv(c))this.events.next(new Qn(s.id,this.urlSerializer.serialize(s.extractedUrl),c.message,c.cancellationCode)),XM(c)?this.events.next(new ho(c.url,c.navigationBehaviorOptions)):s.resolve(!1);else{let l=new Pa(s.id,this.urlSerializer.serialize(s.extractedUrl),c,s.targetSnapshot??void 0);try{let h=Tn(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(h instanceof Fa){let{message:u,cancellationCode:d}=Sl(this.urlSerializer,h);this.events.next(new Qn(s.id,this.urlSerializer.serialize(s.extractedUrl),u,d)),this.events.next(new ho(h.redirectTo,h.navigationBehaviorOptions))}else{this.events.next(l);let u=t.errorHandler(c);s.resolve(!!u)}}catch(h){this.options.resolveNavigationPromiseOnError?s.resolve(!1):s.reject(h)}}return Cn}))}))}cancelNavigationTransition(t,i,r){let s=new Qn(t.id,this.urlSerializer.serialize(t.extractedUrl),i,r);this.events.next(s),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return t.toString()!==i?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Pe({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function VS(n){return n!==Ra}var HS=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Pe({token:n,factory:()=>ye(GS),providedIn:"root"})}}return n})(),Sp=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}},GS=(()=>{class n extends Sp{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=pa(n)))(r||n)}})()}static{this.\u0275prov=Pe({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),Av=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Pe({token:n,factory:()=>ye(WS),providedIn:"root"})}}return n})(),WS=(()=>{class n extends Av{constructor(){super(...arguments),this.location=ye(xa),this.urlSerializer=ye(za),this.options=ye(Wa,{optional:!0})||{},this.canceledNavigationResolution=this.options.canceledNavigationResolution||"replace",this.urlHandlingStrategy=ye(Ap),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.currentUrlTree=new er,this.rawUrlTree=this.currentUrlTree,this.currentPageId=0,this.lastSuccessfulId=-1,this.routerState=fv(null),this.stateMemento=this.createStateMemento()}getCurrentUrlTree(){return this.currentUrlTree}getRawUrlTree(){return this.rawUrlTree}restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}getRouterState(){return this.routerState}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(i=>{i.type==="popstate"&&t(i.url,i.state)})}handleRouterEvent(t,i){if(t instanceof lo)this.stateMemento=this.createStateMemento();else if(t instanceof Tr)this.rawUrlTree=i.initialUrl;else if(t instanceof _l){if(this.urlUpdateStrategy==="eager"&&!i.extras.skipLocationChange){let r=this.urlHandlingStrategy.merge(i.finalUrl,i.initialUrl);this.setBrowserUrl(i.targetBrowserUrl??r,i)}}else t instanceof Oa?(this.currentUrlTree=i.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(i.finalUrl,i.initialUrl),this.routerState=i.targetRouterState,this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(i.targetBrowserUrl??this.rawUrlTree,i)):t instanceof Qn&&(t.code===zi.GuardRejected||t.code===zi.NoDataFromResolver)?this.restoreHistory(i):t instanceof Pa?this.restoreHistory(i,!0):t instanceof pn&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,i){let r=t instanceof er?this.urlSerializer.serialize(t):t;if(this.location.isCurrentPathEqualTo(r)||i.extras.replaceUrl){let s=this.browserPageId,o=te(te({},i.extras.state),this.generateNgRouterState(i.id,s));this.location.replaceState(r,"",o)}else{let s=te(te({},i.extras.state),this.generateNgRouterState(i.id,this.browserPageId+1));this.location.go(r,"",s)}}restoreHistory(t,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,s=this.currentPageId-r;s!==0?this.location.historyGo(s):this.currentUrlTree===t.finalUrl&&s===0&&(this.resetState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetState(t),this.resetUrlToCurrentUrlTree())}resetState(t){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,i){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:i}:{navigationId:t}}static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=pa(n)))(r||n)}})()}static{this.\u0275prov=Pe({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),Ta=function(n){return n[n.COMPLETE=0]="COMPLETE",n[n.FAILED=1]="FAILED",n[n.REDIRECTING=2]="REDIRECTING",n}(Ta||{});function Rv(n,e){n.events.pipe(fi(t=>t instanceof pn||t instanceof Qn||t instanceof Pa||t instanceof Tr),rt(t=>t instanceof pn||t instanceof Tr?Ta.COMPLETE:(t instanceof Qn?t.code===zi.Redirect||t.code===zi.SupersededByNewNavigation:!1)?Ta.REDIRECTING:Ta.FAILED),fi(t=>t!==Ta.REDIRECTING),Yn(1)).subscribe(()=>{e()})}function jS(n){throw n}var XS={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},qS={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Ln=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}constructor(){this.disposed=!1,this.console=ye(tl),this.stateManager=ye(Av),this.options=ye(Wa,{optional:!0})||{},this.pendingTasks=ye(c_),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.navigationTransitions=ye(Rp),this.urlSerializer=ye(za),this.location=ye(xa),this.urlHandlingStrategy=ye(Ap),this._events=new lt,this.errorHandler=this.options.errorHandler||jS,this.navigated=!1,this.routeReuseStrategy=ye(HS),this.onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore",this.config=ye(Ua,{optional:!0})?.flat()??[],this.componentInputBindingEnabled=!!ye(Tl,{optional:!0}),this.eventsSubscription=new hn,this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:t=>{this.console.warn(t)}}),this.subscribeToNavigationEvents()}subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,s=this.navigationTransitions.currentNavigation;if(r!==null&&s!==null){if(this.stateManager.handleRouterEvent(i,s),i instanceof Qn&&i.code!==zi.Redirect&&i.code!==zi.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof pn)this.navigated=!0;else if(i instanceof ho){let o=i.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),c=te({browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||VS(r.source)},o);this.scheduleNavigation(a,Ra,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}YS(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortSubject.next(r)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Ra,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,i)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(t,"popstate",i)},0)})}navigateToSyncWithBrowser(t,i,r){let s={replaceUrl:!0},o=r?.navigationId?r:null;if(r){let c=te({},r);delete c.navigationId,delete c.\u0275routerPageId,Object.keys(c).length!==0&&(s.state=c)}let a=this.parseUrl(t);this.scheduleNavigation(a,i,o,s)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(Cp),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,i={}){let{relativeTo:r,queryParams:s,fragment:o,queryParamsHandling:a,preserveFragment:c}=i,l=c?this.currentUrlTree.fragment:o,h=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":h=te(te({},this.currentUrlTree.queryParams),s);break;case"preserve":h=this.currentUrlTree.queryParams;break;default:h=s||null}h!==null&&(h=this.removeEmptyProps(h));let u;try{let d=r?r.snapshot:this.routerState.snapshot.root;u=lv(d)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),u=this.currentUrlTree.root}return hv(u,t,h,l??null)}navigateByUrl(t,i={skipLocationChange:!1}){let r=_s(t)?t:this.parseUrl(t),s=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(s,Ra,null,i)}navigate(t,i={skipLocationChange:!1}){return $S(t),this.navigateByUrl(this.createUrlTree(t,i),i)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.urlSerializer.parse("/")}}isActive(t,i){let r;if(i===!0?r=te({},XS):i===!1?r=te({},qS):r=i,_s(t))return G_(this.currentUrlTree,t,r);let s=this.parseUrl(t);return G_(this.currentUrlTree,s,r)}removeEmptyProps(t){return Object.entries(t).reduce((i,[r,s])=>(s!=null&&(i[r]=s),i),{})}scheduleNavigation(t,i,r,s,o){if(this.disposed)return Promise.resolve(!1);let a,c,l;o?(a=o.resolve,c=o.reject,l=o.promise):l=new Promise((u,d)=>{a=u,c=d});let h=this.pendingTasks.add();return Rv(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(h))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:s,resolve:a,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(u=>Promise.reject(u))}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Pe({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function $S(n){for(let e=0;e<n.length;e++)if(n[e]==null)throw new zt(4008,!1)}function YS(n){return!(n instanceof Oa)&&!(n instanceof ho)}var El=(()=>{class n{constructor(t,i,r,s,o,a){this.router=t,this.route=i,this.tabIndexAttribute=r,this.renderer=s,this.el=o,this.locationStrategy=a,this.href=null,this.onChanges=new lt,this.preserveFragment=!1,this.skipLocationChange=!1,this.replaceUrl=!1,this.routerLinkInput=null;let c=o.nativeElement.tagName?.toLowerCase();this.isAnchorElement=c==="a"||c==="area",this.isAnchorElement?this.subscription=t.events.subscribe(l=>{l instanceof pn&&this.updateHref()}):this.setTabIndexIfNotOnNativeEl("0")}setTabIndexIfNotOnNativeEl(t){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",t)}ngOnChanges(t){this.isAnchorElement&&this.updateHref(),this.onChanges.next(this)}set routerLink(t){t==null?(this.routerLinkInput=null,this.setTabIndexIfNotOnNativeEl(null)):(_s(t)?this.routerLinkInput=t:this.routerLinkInput=Array.isArray(t)?t:[t],this.setTabIndexIfNotOnNativeEl("0"))}onClick(t,i,r,s,o){let a=this.urlTree;if(a===null||this.isAnchorElement&&(t!==0||i||r||s||o||typeof this.target=="string"&&this.target!="_self"))return!0;let c={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(a,c),!this.isAnchorElement}ngOnDestroy(){this.subscription?.unsubscribe()}updateHref(){let t=this.urlTree;this.href=t!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(t)):null;let i=this.href===null?null:u_(this.href,this.el.nativeElement.tagName.toLowerCase(),"href");this.applyAttributeValue("href",i)}applyAttributeValue(t,i){let r=this.renderer,s=this.el.nativeElement;i!==null?r.setAttribute(s,t,i):r.removeAttribute(s,t)}get urlTree(){return this.routerLinkInput===null?null:_s(this.routerLinkInput)?this.routerLinkInput:this.router.createUrlTree(this.routerLinkInput,{relativeTo:this.relativeTo!==void 0?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}static{this.\u0275fac=function(i){return new(i||n)(ne(Ln),ne(Ar),Ef("tabindex"),ne(Jc),ne(Ct),ne(ba))}}static{this.\u0275dir=At({type:n,selectors:[["","routerLink",""]],hostVars:1,hostBindings:function(i,r){i&1&&gi("click",function(o){return r.onClick(o.button,o.ctrlKey,o.shiftKey,o.altKey,o.metaKey)}),i&2&&In("target",r.target)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",Vt],skipLocationChange:[2,"skipLocationChange","skipLocationChange",Vt],replaceUrl:[2,"replaceUrl","replaceUrl",Vt],routerLink:"routerLink"},standalone:!0,features:[Ii,Kn]})}}return n})(),Iv=(()=>{class n{get isActive(){return this._isActive}constructor(t,i,r,s,o){this.router=t,this.element=i,this.renderer=r,this.cdr=s,this.link=o,this.classes=[],this._isActive=!1,this.routerLinkActiveOptions={exact:!1},this.isActiveChange=new bt,this.routerEventsSubscription=t.events.subscribe(a=>{a instanceof pn&&this.update()})}ngAfterContentInit(){Te(this.links.changes,Te(null)).pipe(ha()).subscribe(t=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let t=[...this.links.toArray(),this.link].filter(i=>!!i).map(i=>i.onChanges);this.linkInputChangesSubscription=Ai(t).pipe(ha()).subscribe(i=>{this._isActive!==this.isLinkActive(this.router)(i)&&this.update()})}set routerLinkActive(t){let i=Array.isArray(t)?t:t.split(" ");this.classes=i.filter(r=>!!r)}ngOnChanges(t){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||queueMicrotask(()=>{let t=this.hasActiveLinks();this.classes.forEach(i=>{t?this.renderer.addClass(this.element.nativeElement,i):this.renderer.removeClass(this.element.nativeElement,i)}),t&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==t&&(this._isActive=t,this.cdr.markForCheck(),this.isActiveChange.emit(t))})}isLinkActive(t){let i=ZS(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact||!1;return r=>{let s=r.urlTree;return s?t.isActive(s,i):!1}}hasActiveLinks(){let t=this.isLinkActive(this.router);return this.link&&t(this.link)||this.links.some(t)}static{this.\u0275fac=function(i){return new(i||n)(ne(Ln),ne(Ct),ne(Jc),ne(Ji),ne(El,8))}}static{this.\u0275dir=At({type:n,selectors:[["","routerLinkActive",""]],contentQueries:function(i,r,s){if(i&1&&hs(s,El,5),i&2){let o;Xt(o=qt())&&(r.links=o)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],standalone:!0,features:[Kn]})}}return n})();function ZS(n){return!!n.paths}var Cl=class{};var KS=(()=>{class n{constructor(t,i,r,s,o){this.router=t,this.injector=r,this.preloadingStrategy=s,this.loader=o}setUpPreloading(){this.subscription=this.router.events.pipe(fi(t=>t instanceof pn),Js(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(t,i){let r=[];for(let s of i){s.providers&&!s._injector&&(s._injector=Rf(s.providers,t,`Route: ${s.path}`));let o=s._injector??t,a=s._loadedInjector??o;(s.loadChildren&&!s._loadedRoutes&&s.canLoad===void 0||s.loadComponent&&!s._loadedComponent)&&r.push(this.preloadConfig(o,s)),(s.children||s._loadedRoutes)&&r.push(this.processRoutes(a,s.children??s._loadedRoutes))}return Ai(r).pipe(ha())}preloadConfig(t,i){return this.preloadingStrategy.preload(i,()=>{let r;i.loadChildren&&i.canLoad===void 0?r=this.loader.loadChildren(t,i):r=Te(null);let s=r.pipe(ki(o=>o===null?Te(void 0):(i._loadedRoutes=o.routes,i._loadedInjector=o.injector,this.processRoutes(o.injector??t,o.routes))));if(i.loadComponent&&!i._loadedComponent){let o=this.loader.loadComponent(i);return Ai([s,o]).pipe(ha())}else return s})}static{this.\u0275fac=function(i){return new(i||n)(be(Ln),be(il),be(fa),be(Cl),be(Tp))}}static{this.\u0275prov=Pe({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),Dv=new et(""),JS=(()=>{class n{constructor(t,i,r,s,o={}){this.urlSerializer=t,this.transitions=i,this.viewportScroller=r,this.zone=s,this.options=o,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},o.scrollPositionRestoration||="disabled",o.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(t=>{t instanceof lo?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=t.navigationTrigger,this.restoredId=t.restoredState?t.restoredState.navigationId:0):t instanceof pn?(this.lastId=t.id,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.urlAfterRedirects).fragment)):t instanceof Tr&&t.code===gl.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(t=>{t instanceof vl&&(t.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0]):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(t.position):t.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(t.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(t,i){this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.zone.run(()=>{this.transitions.events.next(new vl(t,this.lastSource==="popstate"?this.store[this.restoredId]:null,i))})},0)})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static{this.\u0275fac=function(i){Yc()}}static{this.\u0275prov=Pe({token:n,factory:n.\u0275fac})}}return n})();function Pv(n,...e){return da([{provide:Ua,multi:!0,useValue:n},[],{provide:Ar,useFactory:Ov,deps:[Ln]},{provide:Nf,multi:!0,useFactory:Lv},e.map(t=>t.\u0275providers)])}function Ov(n){return n.routerState.root}function ja(n,e){return{\u0275kind:n,\u0275providers:e}}function Lv(){let n=ye(xr);return e=>{let t=n.get(kf);if(e!==t.components[0])return;let i=n.get(Ln),r=n.get(Fv);n.get(Ip)===1&&i.initialNavigation(),n.get(Nv,null,Sf.Optional)?.setUpPreloading(),n.get(Dv,null,Sf.Optional)?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var Fv=new et("",{factory:()=>new lt}),Ip=new et("",{providedIn:"root",factory:()=>1});function QS(){return ja(2,[{provide:Ip,useValue:0},{provide:Ff,multi:!0,deps:[xr],useFactory:e=>{let t=e.get(S_,Promise.resolve());return()=>t.then(()=>new Promise(i=>{let r=e.get(Ln),s=e.get(Fv);Rv(r,()=>{i(!0)}),e.get(Rp).afterPreactivation=()=>(i(!0),s.closed?Te(void 0):s),r.initialNavigation()}))}}])}function ew(){return ja(3,[{provide:Ff,multi:!0,useFactory:()=>{let e=ye(Ln);return()=>{e.setUpLocationChangeListener()}}},{provide:Ip,useValue:2}])}var Nv=new et("");function tw(n){return ja(0,[{provide:Nv,useExisting:KS},{provide:Cl,useExisting:n}])}function iw(){return ja(8,[q_,{provide:Tl,useExisting:q_}])}function nw(n){let e=[{provide:Cv,useValue:US},{provide:Tv,useValue:te({skipNextTransition:!!n?.skipInitialTransition},n)}];return ja(9,e)}var K_=new et("ROUTER_FORROOT_GUARD"),rw=[xa,{provide:za,useClass:co},Ln,Ha,{provide:Ar,useFactory:Ov,deps:[Ln]},Tp,[]],kv=(()=>{class n{constructor(t){}static forRoot(t,i){return{ngModule:n,providers:[rw,[],{provide:Ua,multi:!0,useValue:t},{provide:K_,useFactory:cw,deps:[[Ln,new wf,new o_]]},{provide:Wa,useValue:i||{}},i?.useHash?ow():aw(),sw(),i?.preloadingStrategy?tw(i.preloadingStrategy).\u0275providers:[],i?.initialNavigation?lw(i):[],i?.bindToComponentInputs?iw().\u0275providers:[],i?.enableViewTransitions?nw().\u0275providers:[],hw()]}}static forChild(t){return{ngModule:n,providers:[{provide:Ua,multi:!0,useValue:t}]}}static{this.\u0275fac=function(i){return new(i||n)(be(K_,8))}}static{this.\u0275mod=Qt({type:n})}static{this.\u0275inj=Jt({})}}return n})();function sw(){return{provide:Dv,useFactory:()=>{let n=ye(O_),e=ye(pt),t=ye(Wa),i=ye(Rp),r=ye(za);return t.scrollOffset&&n.setOffset(t.scrollOffset),new JS(r,i,n,e,t)}}}function ow(){return{provide:ba,useClass:E_}}function aw(){return{provide:ba,useClass:w_}}function cw(n){return"guarded"}function lw(n){return[n.initialNavigation==="disabled"?ew().\u0275providers:[],n.initialNavigation==="enabledBlocking"?QS().\u0275providers:[]]}var J_=new et("");function hw(){return[{provide:J_,useFactory:Lv},{provide:Nf,multi:!0,useExisting:J_}]}var dw=()=>({exact:!0}),Rl=class n{constructor(e){this.platformId=e;this.isBrowser=Cr(this.platformId)}title="JF_Portfolio";isBrowser;ngOnInit(){return de(this,null,function*(){this.isBrowser&&(yield import("./chunk-QG7MHQ42.js")).init()})}static \u0275fac=function(t){return new(t||n)(ne(Ui))};static \u0275cmp=Pt({type:n,selectors:[["app-root"]],standalone:!0,features:[Ot],decls:4,vars:2,consts:[[1,"nav"],["routerLink","/","routerLinkActive","active",3,"routerLinkActiveOptions"]],template:function(t,i){t&1&&(Ae(0,"nav",0)(1,"a",1),Ye(2,"Home"),Ie()(),pi(3,"router-outlet")),t&2&&(Me(),We("routerLinkActiveOptions",m_(1,dw)))},dependencies:[ds,kv,Ep,El,Iv],styles:["[_nghost-%COMP%]{display:block;position:relative;min-height:100vh;overflow:hidden}app-particles[_ngcontent-%COMP%]{position:fixed;inset:0;z-index:0;pointer-events:none}main[_ngcontent-%COMP%]{position:relative;z-index:1}.nav[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:2rem;padding:1rem;background-color:#b80099}.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none;font-weight:700}.nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{border-bottom:2px solid #fff}"]})};var tr="generated",Uv="pointerdown",Bv="pointerup",Dp="pointerleave",zv="pointerout",Pp="pointermove",Vv="touchstart",Op="touchend",Hv="touchmove",Gv="touchcancel",Wv="resize",jv="visibilitychange",en="tsParticles - Error";var li={x:0,y:0,z:0},Xa={a:1,b:0,c:0,d:1},qa="random";var $t=2,Xv=Math.PI*$t,Il=60;var Lp="true",Fp="false",Dl="canvas",Np=0,Vi=2,kp=4,qv=1,Up=1,Bp=1,$v=4,Pl=1,$a=255,Ir=360,Ol=100,Ll=100,zp=0,Fl=0,Yv=60,Zv=0,Ya=.25,Vp=.5+Ya;var Kv=1,Jv=0,Qv=0,ey=1,Za=1,ty=1,Hp=1,mo=0,Nl=1,iy=0,ny=120,ry=0,sy=0,oy=1e4,ay=0,cy=1,vs=0,kl=1,ly=1,hy=0,Gp=1,uy=0,dy=0,Wp=-Ya,jp=1.5,Xp=0,fy=1,py=0,Ka=0,my=0,Ul=1,gy=1,go=1,_y=500,qp=50,vy=0,Ja=1,$p=0,Yp=1,yy=0,Dr=255,Bl=3,zl=6,by=1,xy=1,My=0,Sy=0,wy=0,Ey=0;var ei=function(n){return n.bottom="bottom",n.bottomLeft="bottom-left",n.bottomRight="bottom-right",n.left="left",n.none="none",n.right="right",n.top="top",n.topLeft="top-left",n.topRight="top-right",n.outside="outside",n.inside="inside",n}(ei||{});function Vl(n){return typeof n=="boolean"}function mn(n){return typeof n=="string"}function gn(n){return typeof n=="number"}function ir(n){return typeof n=="object"&&n!==null}function _n(n){return Array.isArray(n)}function j(n){return n==null}var _o=class n{constructor(e,t,i){if(this._updateFromAngle=(r,s)=>{this.x=Math.cos(r)*s,this.y=Math.sin(r)*s},!gn(e)&&e){this.x=e.x,this.y=e.y;let r=e;this.z=r.z?r.z:li.z}else if(e!==void 0&&t!==void 0)this.x=e,this.y=t,this.z=i??li.z;else throw new Error(`${en} Vector3d not initialized correctly`)}static get origin(){return n.create(li.x,li.y,li.z)}get angle(){return Math.atan2(this.y,this.x)}set angle(e){this._updateFromAngle(e,this.length)}get length(){return Math.sqrt(this.getLengthSq())}set length(e){this._updateFromAngle(this.angle,e)}static clone(e){return n.create(e.x,e.y,e.z)}static create(e,t,i){return new n(e,t,i)}add(e){return n.create(this.x+e.x,this.y+e.y,this.z+e.z)}addTo(e){this.x+=e.x,this.y+=e.y,this.z+=e.z}copy(){return n.clone(this)}distanceTo(e){return this.sub(e).length}distanceToSq(e){return this.sub(e).getLengthSq()}div(e){return n.create(this.x/e,this.y/e,this.z/e)}divTo(e){this.x/=e,this.y/=e,this.z/=e}getLengthSq(){return this.x**Vi+this.y**Vi}mult(e){return n.create(this.x*e,this.y*e,this.z*e)}multTo(e){this.x*=e,this.y*=e,this.z*=e}normalize(){let e=this.length;e!=vs&&this.multTo(Pl/e)}rotate(e){return n.create(this.x*Math.cos(e)-this.y*Math.sin(e),this.x*Math.sin(e)+this.y*Math.cos(e),li.z)}setTo(e){this.x=e.x,this.y=e.y;let t=e;this.z=t.z?t.z:li.z}sub(e){return n.create(this.x-e.x,this.y-e.y,this.z-e.z)}subFrom(e){this.x-=e.x,this.y-=e.y,this.z-=e.z}},wi=class n extends _o{constructor(e,t){super(e,t,li.z)}static get origin(){return n.create(li.x,li.y)}static clone(e){return n.create(e.x,e.y)}static create(e,t){return new n(e,t)}};var fw=Math.random,Cy={nextFrame:n=>requestAnimationFrame(n),cancel:n=>cancelAnimationFrame(n)};function _t(){return Fn(fw(),0,1-Number.EPSILON)}function Ty(n){return Cy.nextFrame(n)}function Ay(n){Cy.cancel(n)}function Fn(n,e,t){return Math.min(Math.max(n,e),t)}function Ei(n){let e=Pr(n),t=0,i=vo(n);return e===i&&(i=t),_t()*(e-i)+i}function Be(n){return gn(n)?n:Ei(n)}function vo(n){return gn(n)?n:n.min}function Pr(n){return gn(n)?n:n.max}function qe(n,e){if(n===e||e===void 0&&gn(n))return n;let t=vo(n),i=Pr(n);return e!==void 0?{min:Math.min(t,e),max:Math.max(i,e)}:qe(t,i)}function Nn(n,e){let t=n.x-e.x,i=n.y-e.y,r=2;return{dx:t,dy:i,distance:Math.sqrt(t**r+i**r)}}function Or(n,e){return Nn(n,e).distance}function Lr(n){return n*Math.PI/180}function Ry(n,e,t){if(gn(n))return Lr(n);switch(n){case ei.top:return-Math.PI*.5;case ei.topRight:return-Math.PI*Ya;case ei.right:return Zv;case ei.bottomRight:return Math.PI*Ya;case ei.bottom:return Math.PI*.5;case ei.bottomLeft:return Math.PI*Vp;case ei.left:return Math.PI;case ei.topLeft:return-Math.PI*Vp;case ei.inside:return Math.atan2(t.y-e.y,t.x-e.x);case ei.outside:return Math.atan2(e.y-t.y,e.x-t.x);default:return _t()*Xv}}function Iy(n){let e=wi.origin;return e.length=1,e.angle=n,e}function Dy(n){return{x:n.position?.x??_t()*n.size.width,y:n.position?.y??_t()*n.size.height}}function Hl(n){return n?n.endsWith("%")?parseFloat(n)/100:parseFloat(n):1}var Fr=function(n){return n.auto="auto",n.increase="increase",n.decrease="decrease",n.random="random",n}(Fr||{});var ti=function(n){return n.increasing="increasing",n.decreasing="decreasing",n}(ti||{});var Nr=function(n){return n.none="none",n.max="max",n.min="min",n}(Nr||{});var je=function(n){return n.bottom="bottom",n.left="left",n.right="right",n.top="top",n}(je||{});var nr=function(n){return n.precise="precise",n.percent="percent",n}(nr||{});var ys=function(n){return n.max="max",n.min="min",n.random="random",n}(ys||{});var pw={debug:console.debug,error:console.error,info:console.info,log:console.log,verbose:console.log,warning:console.warn};function rr(){return pw}function mw(n){let e=new Map;return(...t)=>{let i=JSON.stringify(t);if(e.has(i))return e.get(i);let r=n(...t);return e.set(i,r),r}}function bs(){return typeof window>"u"||!window||typeof window.document>"u"||!window.document}function gw(){return!bs()&&typeof matchMedia<"u"}function Gl(n){if(gw())return matchMedia(n)}function Py(n){if(!(bs()||typeof IntersectionObserver>"u"))return new IntersectionObserver(n)}function Oy(n){if(!(bs()||typeof MutationObserver>"u"))return new MutationObserver(n)}function Ly(n,e){return n===e||_n(e)&&e.indexOf(n)>-1}function _w(n){return Math.floor(_t()*n.length)}function Wl(n,e,t=!0){return n[e!==void 0&&t?e%n.length:_w(n)]}function yo(n,e,t,i,r){return vw(Qa(n,i??0),e,t,r)}function vw(n,e,t,i){let r=!0;return(!i||i===je.bottom)&&(r=n.top<e.height+t.x),r&&(!i||i===je.left)&&(r=n.right>t.x),r&&(!i||i===je.right)&&(r=n.left<e.width+t.y),r&&(!i||i===je.top)&&(r=n.bottom>t.y),r}function Qa(n,e){return{bottom:n.y+e,left:n.x-e,right:n.x+e,top:n.y-e}}function Rt(n,...e){for(let t of e){if(t==null)continue;if(!ir(t)){n=t;continue}let i=Array.isArray(t);i&&(ir(n)||!n||!Array.isArray(n))?n=[]:!i&&(ir(n)||!n||Array.isArray(n))&&(n={});for(let r in t){if(r==="__proto__")continue;let s=t,o=s[r],a=n;a[r]=ir(o)&&Array.isArray(o)?o.map(c=>Rt(a[r],c)):Rt(a[r],o)}}return n}function kn(n,e){return _n(n)?n.map((i,r)=>e(i,r)):e(n,0)}function Un(n,e,t){return _n(n)?Wl(n,e,t):n}function jl(n,e){let t=n.value,i=n.animation,r={delayTime:Be(i.delay)*1e3,enable:i.enable,value:Be(n.value)*e,max:Pr(t)*e,min:vo(t)*e,loops:0,maxLoops:Be(i.count),time:0},s=1;if(i.enable){switch(r.decay=s-Be(i.decay),i.mode){case Fr.increase:r.status=ti.increasing;break;case Fr.decrease:r.status=ti.decreasing;break;case Fr.random:r.status=_t()>=.5?ti.increasing:ti.decreasing;break}let o=i.mode===Fr.auto;switch(i.startValue){case ys.min:r.value=r.min,o&&(r.status=ti.increasing);break;case ys.max:r.value=r.max,o&&(r.status=ti.decreasing);break;case ys.random:default:r.value=Ei(r),o&&(r.status=_t()>=.5?ti.increasing:ti.decreasing);break}}return r.initialValue=r.value,r}function yw(n,e){if(!(n.mode===nr.percent)){let r=n,{mode:s}=r;return Jg(r,["mode"])}return"x"in n?{x:n.x/100*e.width,y:n.y/100*e.height}:{width:n.width/100*e.width,height:n.height/100*e.height}}function Xl(n,e){return yw(n,e)}function bw(n,e,t,i,r){switch(e){case Nr.max:t>=r&&n.destroy();break;case Nr.min:t<=i&&n.destroy();break}}function ql(n,e,t,i,r){if(n.destroyed||!e||!e.enable||(e.maxLoops??0)>0&&(e.loops??0)>(e.maxLoops??0))return;let h=(e.velocity??0)*r.factor,u=e.min,d=e.max,m=e.decay??1;if(e.time||(e.time=0),(e.delayTime??0)>0&&e.time<(e.delayTime??0)&&(e.time+=r.value),!((e.delayTime??0)>0&&e.time<(e.delayTime??0))){switch(e.status){case ti.increasing:e.value>=d?(t?e.status=ti.decreasing:e.value-=d,e.loops||(e.loops=0),e.loops++):e.value+=h;break;case ti.decreasing:e.value<=u?(t?e.status=ti.increasing:e.value+=d,e.loops||(e.loops=0),e.loops++):e.value-=h}e.velocity&&m!==1&&(e.velocity*=m),bw(n,i,e.value,u,d),n.destroyed||(e.value=Fn(e.value,u,d))}}function Fy(n){let e=document.createElement("div").style;if(!n)return e;for(let t in n){let i=n[t];if(!Object.prototype.hasOwnProperty.call(n,t)||j(i))continue;let r=n.getPropertyValue?.(i);if(!r)continue;let s=n.getPropertyPriority?.(i);s?e.setProperty?.(i,r,s):e.setProperty?.(i,r)}return e}function xw(n){let e=document.createElement("div").style,t=10,i={width:"100%",height:"100%",margin:"0",padding:"0",borderWidth:"0",position:"fixed",zIndex:n.toString(t),"z-index":n.toString(t),top:"0",left:"0"};for(let r in i){let s=i[r];e.setProperty(r,s)}return e}var Ny=mw(xw);var Zp=function(n){return n.darken="darken",n.enlighten="enlighten",n}(Zp||{});function Mw(n,e){if(e){for(let t of n.colorManagers.values())if(e.startsWith(t.stringPrefix))return t.parseString(e)}}function kr(n,e,t,i=!0){if(!e)return;let r=mn(e)?{value:e}:e;if(mn(r.value))return ky(n,r.value,t,i);if(_n(r.value))return kr(n,{value:Wl(r.value,t,i)});for(let s of n.colorManagers.values()){let o=s.handleRangeColor(r);if(o)return o}}function ky(n,e,t,i=!0){if(!e)return;let r=mn(e)?{value:e}:e;if(mn(r.value))return r.value===qa?Ew():ww(n,r.value);if(_n(r.value))return ky(n,{value:Wl(r.value,t,i)});for(let s of n.colorManagers.values()){let o=s.handleColor(r);if(o)return o}}function ec(n,e,t,i=!0){let r=kr(n,e,t,i);return r?Sw(r):void 0}function Sw(n){let e=n.r/$a,t=n.g/$a,i=n.b/$a,r=Math.max(e,t,i),s=Math.min(e,t,i),o={h:zp,l:(r+s)*.5,s:Fl};return r!==s&&(o.s=o.l<.5?(r-s)/(r+s):(r-s)/($t-r-s),o.h=e===r?(t-i)/(r-s):o.h=t===r?$t+(i-e)/(r-s):$t*$t+(e-t)/(r-s)),o.l*=Ll,o.s*=Ol,o.h*=Yv,o.h<zp&&(o.h+=Ir),o.h>=Ir&&(o.h-=Ir),o}function ww(n,e){return Mw(n,e)}function $l(n){let e=(n.h%Ir+Ir)%Ir,t=Math.max(Fl,Math.min(Ol,n.s)),i=Math.max(yy,Math.min(Ll,n.l)),r=e/Ir,s=t/Ol,o=i/Ll;if(t===Fl){let g=Math.round(o*Dr);return{r:g,g,b:g}}let a=(g,v,p)=>{if(p<0&&p++,p>1&&p--,p*zl<1)return g+(v-g)*zl*p;if(p*$t<1)return v;if(p*Bl<1*$t){let w=$t/Bl;return g+(v-g)*(w-p)*zl}return g},c=o<.5?o*(by+s):o+s-o*s,l=$t*o-c,h=xy/Bl,u=Math.min(Dr,Dr*a(l,c,r+h)),d=Math.min(Dr,Dr*a(l,c,r)),m=Math.min(Dr,Dr*a(l,c,r-h));return{r:Math.round(u),g:Math.round(d),b:Math.round(m)}}function Uy(n){let e=$l(n);return{a:n.a,b:e.b,g:e.g,r:e.r}}function Ew(n){let e=n??My,t=$a+Ja;return{b:Math.floor(Ei(qe(e,t))),g:Math.floor(Ei(qe(e,t))),r:Math.floor(Ei(qe(e,t)))}}function bo(n,e){return`rgba(${n.r}, ${n.g}, ${n.b}, ${e??Za})`}function Qp(n,e){return`hsla(${n.h}, ${n.s}%, ${n.l}%, ${e??Za})`}function em(n){return n!==void 0?{h:n.h.value,s:n.s.value,l:n.l.value}:void 0}function By(n,e,t){let i={h:{enable:!1,value:n.h},s:{enable:!1,value:n.s},l:{enable:!1,value:n.l}};return e&&(Kp(i.h,e.h,t),Kp(i.s,e.s,t),Kp(i.l,e.l,t)),i}function Kp(n,e,t){n.enable=e.enable,n.enable?(n.velocity=Be(e.speed)/100*t,n.decay=kl-Be(e.decay),n.status=ti.increasing,n.loops=wy,n.maxLoops=Be(e.count),n.time=Ey,n.delayTime=Be(e.delay)*1e3,e.sync||(n.velocity*=_t(),n.value*=_t()),n.initialValue=n.value,n.offset=qe(e.offset)):n.velocity=Sy}function Jp(n,e,t,i){if(!n||!n.enable||(n.maxLoops??0)>0&&(n.loops??0)>(n.maxLoops??0)||(n.time||(n.time=0),(n.delayTime??0)>0&&n.time<(n.delayTime??0)&&(n.time+=i.value),(n.delayTime??0)>0&&n.time<(n.delayTime??0)))return;let h=n.offset?Ei(n.offset):0,u=(n.velocity??0)*i.factor+h*3.6,d=n.decay??1,m=Pr(e),g=vo(e);!t||n.status===ti.increasing?(n.value+=u,n.value>m&&(n.loops||(n.loops=0),n.loops++,t?n.status=ti.decreasing:n.value-=m)):(n.value-=u,n.value<0&&(n.loops||(n.loops=0),n.loops++,n.status=ti.increasing)),n.velocity&&d!==1&&(n.velocity*=d),n.value=Fn(n.value,g,m)}function zy(n,e){if(!n)return;let{h:t,s:i,l:r}=n,s={h:{min:0,max:360},s:{min:0,max:100},l:{min:0,max:100}};t&&Jp(t,s.h,!1,e),i&&Jp(i,s.s,!0,e),r&&Jp(r,s.l,!0,e)}function Vy(n,e,t){n.fillStyle=t??"rgba(0,0,0,0)",n.fillRect(li.x,li.y,e.width,e.height)}function Hy(n,e,t,i){t&&(n.globalAlpha=i,n.drawImage(t,li.x,li.y,e.width,e.height),n.globalAlpha=1)}function Yl(n,e){n.clearRect(li.x,li.y,e.width,e.height)}function Gy(n){let{container:e,context:t,particle:i,delta:r,colorStyles:s,backgroundMask:o,composite:a,radius:c,opacity:l,shadow:h,transform:u}=n,d=i.getPosition(),m=i.rotation+(i.pathRotation?i.velocity.angle:vy),g={sin:Math.sin(m),cos:Math.cos(m)},v=!!m,p={a:g.cos*(u.a??Xa.a),b:v?g.sin*(u.b??Ja):u.b??Xa.b,c:v?-g.sin*(u.c??Ja):u.c??Xa.c,d:g.cos*(u.d??Xa.d)};t.setTransform(p.a,p.b,p.c,p.d,d.x,d.y),o&&(t.globalCompositeOperation=a);let f=i.shadowColor;h.enable&&f&&(t.shadowBlur=h.blur,t.shadowColor=bo(f),t.shadowOffsetX=h.offset.x,t.shadowOffsetY=h.offset.y),s.fill&&(t.fillStyle=s.fill);let E=i.strokeWidth??$p;t.lineWidth=E,s.stroke&&(t.strokeStyle=s.stroke);let w={container:e,context:t,particle:i,radius:c,opacity:l,delta:r,transformData:p,strokeWidth:E};Tw(w),Aw(w),Cw(w),t.globalCompositeOperation="source-over",t.resetTransform()}function Cw(n){let{container:e,context:t,particle:i,radius:r,opacity:s,delta:o,transformData:a}=n;if(!i.effect)return;let c=e.effectDrawers.get(i.effect);c&&c.draw({context:t,particle:i,radius:r,opacity:s,delta:o,pixelRatio:e.retina.pixelRatio,transformData:te({},a)})}function Tw(n){let{container:e,context:t,particle:i,radius:r,opacity:s,delta:o,strokeWidth:a,transformData:c}=n;if(!i.shape)return;let l=e.shapeDrawers.get(i.shape);l&&(t.beginPath(),l.draw({context:t,particle:i,radius:r,opacity:s,delta:o,pixelRatio:e.retina.pixelRatio,transformData:te({},c)}),i.shapeClose&&t.closePath(),a>$p&&t.stroke(),i.shapeFill&&t.fill())}function Aw(n){let{container:e,context:t,particle:i,radius:r,opacity:s,delta:o,transformData:a}=n;if(!i.shape)return;let c=e.shapeDrawers.get(i.shape);c?.afterDraw&&c.afterDraw({context:t,particle:i,radius:r,opacity:s,delta:o,pixelRatio:e.retina.pixelRatio,transformData:te({},a)})}function Wy(n,e,t){e.draw&&e.draw(n,t)}function jy(n,e,t,i){e.drawParticle&&e.drawParticle(n,t,i)}function Xy(n,e,t){return{h:n.h,s:n.s,l:n.l+(e===Zp.darken?-Yp:Yp)*t}}function Rw(n,e,t){let i=e[t];i!==void 0&&(n[t]=(n[t]??Kv)*i)}function qy(n,e,t=!1){if(!e)return;let i=n;if(!i)return;let r=i.style;if(!r)return;let s=new Set;for(let o in r)Object.prototype.hasOwnProperty.call(r,o)&&s.add(r[o]);for(let o in e)Object.prototype.hasOwnProperty.call(e,o)&&s.add(e[o]);for(let o of s){let a=e.getPropertyValue(o);a?r.setProperty(o,a,t?"important":""):r.removeProperty(o)}}var Zl=class{constructor(e,t){this.container=e,this._applyPostDrawUpdaters=s=>{for(let o of this._postDrawUpdaters)o.afterDraw?.(s)},this._applyPreDrawUpdaters=(s,o,a,c,l,h)=>{for(let u of this._preDrawUpdaters){if(u.getColorStyles){let{fill:d,stroke:m}=u.getColorStyles(o,s,a,c);d&&(l.fill=d),m&&(l.stroke=m)}if(u.getTransformValues){let d=u.getTransformValues(o);for(let m in d)Rw(h,d,m)}u.beforeDraw?.(o)}},this._applyResizePlugins=()=>{for(let s of this._resizePlugins)s.resize?.()},this._getPluginParticleColors=s=>{let o,a;for(let c of this._colorPlugins)if(!o&&c.particleFillColor&&(o=ec(this._engine,c.particleFillColor(s))),!a&&c.particleStrokeColor&&(a=ec(this._engine,c.particleStrokeColor(s))),o&&a)break;return[o,a]},this._initCover=()=>de(this,null,function*(){let s=this.container.actualOptions,o=s.backgroundMask.cover,a=o.color;if(a){let c=kr(this._engine,a);if(c){let l=Dt(te({},c),{a:o.opacity});this._coverColorStyle=bo(l,l.a)}}else yield new Promise((c,l)=>{if(!o.image)return;let h=document.createElement("img");h.addEventListener("load",()=>{this._coverImage={image:h,opacity:o.opacity},c()}),h.addEventListener("error",u=>{l(u.error)}),h.src=o.image})}),this._initStyle=()=>{let s=this.element,o=this.container.actualOptions;if(s){this._fullScreen?this._setFullScreenStyle():this._resetOriginalStyle();for(let a in o.style){if(!a||!o.style||!Object.prototype.hasOwnProperty.call(o.style,a))continue;let c=o.style[a];c&&s.style.setProperty(a,c,"important")}}},this._initTrail=()=>de(this,null,function*(){let s=this.container.actualOptions,o=s.particles.move.trail,a=o.fill;if(!o.enable)return;let c=Pl/o.length;if(a.color){let l=kr(this._engine,a.color);if(!l)return;this._trailFill={color:te({},l),opacity:c}}else yield new Promise((l,h)=>{if(!a.image)return;let u=document.createElement("img");u.addEventListener("load",()=>{this._trailFill={image:u,opacity:c},l()}),u.addEventListener("error",d=>{h(d.error)}),u.src=a.image})}),this._paintBase=s=>{this.draw(o=>Vy(o,this.size,s))},this._paintImage=(s,o)=>{this.draw(a=>Hy(a,this.size,s,o))},this._repairStyle=()=>{let s=this.element;s&&(this._safeMutationObserver(o=>o.disconnect()),this._initStyle(),this.initBackground(),this._safeMutationObserver(o=>{!s||!(s instanceof Node)||o.observe(s,{attributes:!0})}))},this._resetOriginalStyle=()=>{let s=this.element,o=this._originalStyle;!s||!o||qy(s,o,!0)},this._safeMutationObserver=s=>{this._mutationObserver&&s(this._mutationObserver)},this._setFullScreenStyle=()=>{let s=this.element;s&&qy(s,Ny(this.container.actualOptions.fullScreen.zIndex),!0)},this._engine=t,this._standardSize={height:0,width:0};let i=e.retina.pixelRatio,r=this._standardSize;this.size={height:r.height*i,width:r.width*i},this._context=null,this._generated=!1,this._preDrawUpdaters=[],this._postDrawUpdaters=[],this._resizePlugins=[],this._colorPlugins=[]}get _fullScreen(){return this.container.actualOptions.fullScreen.enable}clear(){let e=this.container.actualOptions,t=e.particles.move.trail,i=this._trailFill;e.backgroundMask.enable?this.paint():t.enable&&t.length>Qv&&i?i.color?this._paintBase(bo(i.color,i.opacity)):i.image&&this._paintImage(i.image,i.opacity):e.clear&&this.draw(r=>{Yl(r,this.size)})}destroy(){this.stop(),this._generated?(this.element?.remove(),this.element=void 0):this._resetOriginalStyle(),this._preDrawUpdaters=[],this._postDrawUpdaters=[],this._resizePlugins=[],this._colorPlugins=[]}draw(e){let t=this._context;if(t)return e(t)}drawAsync(e){let t=this._context;if(t)return e(t)}drawParticle(e,t){if(e.spawning||e.destroyed)return;let i=e.getRadius();if(i<=Jv)return;let r=e.getFillColor(),s=e.getStrokeColor()??r,[o,a]=this._getPluginParticleColors(e);o||(o=r),a||(a=s),!(!o&&!a)&&this.draw(c=>{let l=this.container,h=l.actualOptions,u=e.options.zIndex,d=ey-e.zIndexFactor,m=d**u.opacityRate,g=e.bubble.opacity??e.opacity?.value??Za,v=e.strokeOpacity??g,p=g*m,f=v*m,E={},w={fill:o?Qp(o,p):void 0};w.stroke=a?Qp(a,f):w.fill,this._applyPreDrawUpdaters(c,e,i,p,w,E),Gy({container:l,context:c,particle:e,delta:t,colorStyles:w,backgroundMask:h.backgroundMask.enable,composite:h.backgroundMask.composite,radius:i*d**u.sizeRate,opacity:p,shadow:e.options.shadow,transform:E}),this._applyPostDrawUpdaters(e)})}drawParticlePlugin(e,t,i){this.draw(r=>jy(r,e,t,i))}drawPlugin(e,t){this.draw(i=>Wy(i,e,t))}init(){return de(this,null,function*(){this._safeMutationObserver(e=>e.disconnect()),this._mutationObserver=Oy(e=>{for(let t of e)t.type==="attributes"&&t.attributeName==="style"&&this._repairStyle()}),this.resize(),this._initStyle(),yield this._initCover();try{yield this._initTrail()}catch(e){rr().error(e)}this.initBackground(),this._safeMutationObserver(e=>{!this.element||!(this.element instanceof Node)||e.observe(this.element,{attributes:!0})}),this.initUpdaters(),this.initPlugins(),this.paint()})}initBackground(){let e=this.container.actualOptions,t=e.background,i=this.element;if(!i)return;let r=i.style;if(r){if(t.color){let s=kr(this._engine,t.color);r.backgroundColor=s?bo(s,t.opacity):""}else r.backgroundColor="";r.backgroundImage=t.image||"",r.backgroundPosition=t.position||"",r.backgroundRepeat=t.repeat||"",r.backgroundSize=t.size||""}}initPlugins(){this._resizePlugins=[];for(let e of this.container.plugins.values())e.resize&&this._resizePlugins.push(e),(e.particleFillColor??e.particleStrokeColor)&&this._colorPlugins.push(e)}initUpdaters(){this._preDrawUpdaters=[],this._postDrawUpdaters=[];for(let e of this.container.particles.updaters)e.afterDraw&&this._postDrawUpdaters.push(e),(e.getColorStyles??e.getTransformValues??e.beforeDraw)&&this._preDrawUpdaters.push(e)}loadCanvas(e){this._generated&&this.element&&this.element.remove(),this._generated=e.dataset&&tr in e.dataset?e.dataset[tr]==="true":this._generated,this.element=e,this.element.ariaHidden="true",this._originalStyle=Fy(this.element.style);let t=this._standardSize;t.height=e.offsetHeight,t.width=e.offsetWidth;let i=this.container.retina.pixelRatio,r=this.size;e.height=r.height=t.height*i,e.width=r.width=t.width*i,this._context=this.element.getContext("2d"),this._safeMutationObserver(s=>s.disconnect()),this.container.retina.init(),this.initBackground(),this._safeMutationObserver(s=>{!this.element||!(this.element instanceof Node)||s.observe(this.element,{attributes:!0})})}paint(){let e=this.container.actualOptions;this.draw(t=>{e.backgroundMask.enable&&e.backgroundMask.cover?(Yl(t,this.size),this._coverImage?this._paintImage(this._coverImage.image,this._coverImage.opacity):this._coverColorStyle?this._paintBase(this._coverColorStyle):this._paintBase()):this._paintBase()})}resize(){if(!this.element)return!1;let e=this.container,t=e.canvas._standardSize,i={width:this.element.offsetWidth,height:this.element.offsetHeight},r=e.retina.pixelRatio,s={width:i.width*r,height:i.height*r};if(i.height===t.height&&i.width===t.width&&s.height===this.element.height&&s.width===this.element.width)return!1;let o=te({},t);t.height=i.height,t.width=i.width;let a=this.size;return this.element.width=a.width=s.width,this.element.height=a.height=s.height,this.container.started&&e.particles.setResizeFactor({width:t.width/o.width,height:t.height/o.height}),!0}stop(){this._safeMutationObserver(e=>e.disconnect()),this._mutationObserver=void 0,this.draw(e=>Yl(e,this.size))}windowResize(){return de(this,null,function*(){if(!this.element||!this.resize())return;let e=this.container,t=e.updateActualOptions();e.particles.setDensity(),this._applyResizePlugins(),t&&(yield e.refresh())})}};var xs=function(n){return n.canvas="canvas",n.parent="parent",n.window="window",n}(xs||{});function nn(n,e,t,i,r){if(i){let s={passive:!0};Vl(r)?s.capture=r:r!==void 0&&(s=r),n.addEventListener(e,t,s)}else{let s=r;n.removeEventListener(e,t,s)}}var Kl=class{constructor(e){this.container=e,this._doMouseTouchClick=t=>{let i=this.container,r=i.actualOptions;if(this._canPush){let s=i.interactivity.mouse,o=s.position;if(!o)return;s.clickPosition=te({},o),s.clickTime=new Date().getTime();let a=r.interactivity.events.onClick;kn(a.mode,c=>this.container.handleClickMode(c))}t.type==="touchend"&&setTimeout(()=>this._mouseTouchFinish(),_y)},this._handleThemeChange=t=>{let i=t,r=this.container,s=r.options,o=s.defaultThemes,a=i.matches?o.dark:o.light;s.themes.find(l=>l.name===a)?.default.auto&&r.loadTheme(a)},this._handleVisibilityChange=()=>{let t=this.container,i=t.actualOptions;this._mouseTouchFinish(),i.pauseOnBlur&&(document?.hidden?(t.pageHidden=!0,t.pause()):(t.pageHidden=!1,t.animationStatus?t.play(!0):t.draw(!0)))},this._handleWindowResize=()=>{this._resizeTimeout&&(clearTimeout(this._resizeTimeout),delete this._resizeTimeout);let t=()=>de(this,null,function*(){yield this.container.canvas?.windowResize()});this._resizeTimeout=setTimeout(()=>void t(),this.container.actualOptions.interactivity.events.resize.delay*1e3)},this._manageInteractivityListeners=(t,i)=>{let r=this._handlers,s=this.container,o=s.actualOptions,a=s.interactivity.element;if(!a)return;let c=a,l=s.canvas.element;l&&(l.style.pointerEvents=c===l?"initial":"none"),(o.interactivity.events.onHover.enable||o.interactivity.events.onClick.enable)&&(nn(a,Pp,r.mouseMove,i),nn(a,Vv,r.touchStart,i),nn(a,Hv,r.touchMove,i),o.interactivity.events.onClick.enable?(nn(a,Op,r.touchEndClick,i),nn(a,Bv,r.mouseUp,i),nn(a,Uv,r.mouseDown,i)):nn(a,Op,r.touchEnd,i),nn(a,t,r.mouseLeave,i),nn(a,Gv,r.touchCancel,i))},this._manageListeners=t=>{let i=this._handlers,r=this.container,s=r.actualOptions,o=s.interactivity.detectsOn,a=r.canvas.element,c=Dp;o===xs.window?(r.interactivity.element=window,c=zv):o===xs.parent&&a?r.interactivity.element=a.parentElement??a.parentNode:r.interactivity.element=a,this._manageMediaMatch(t),this._manageResize(t),this._manageInteractivityListeners(c,t),document&&nn(document,jv,i.visibilityChange,t,!1)},this._manageMediaMatch=t=>{let i=this._handlers,r=Gl("(prefers-color-scheme: dark)");if(r){if(r.addEventListener!==void 0){nn(r,"change",i.themeChange,t);return}r.addListener!==void 0&&(t?r.addListener(i.oldThemeChange):r.removeListener(i.oldThemeChange))}},this._manageResize=t=>{let i=this._handlers,r=this.container;if(!r.actualOptions.interactivity.events.resize)return;if(typeof ResizeObserver>"u"){nn(window,Wv,i.resize,t);return}let o=r.canvas.element;this._resizeObserver&&!t?(o&&this._resizeObserver.unobserve(o),this._resizeObserver.disconnect(),delete this._resizeObserver):!this._resizeObserver&&t&&o&&(this._resizeObserver=new ResizeObserver(a=>{a.find(l=>l.target===o)&&this._handleWindowResize()}),this._resizeObserver.observe(o))},this._mouseDown=()=>{let{interactivity:t}=this.container;if(!t)return;let{mouse:i}=t;i.clicking=!0,i.downPosition=i.position},this._mouseTouchClick=t=>{let i=this.container,r=i.actualOptions,{mouse:s}=i.interactivity;s.inside=!0;let o=!1,a=s.position;if(!(!a||!r.interactivity.events.onClick.enable)){for(let c of i.plugins.values())if(c.clickPositionValid&&(o=c.clickPositionValid(a),o))break;o||this._doMouseTouchClick(t),s.clicking=!1}},this._mouseTouchFinish=()=>{let t=this.container.interactivity;if(!t)return;let i=t.mouse;delete i.position,delete i.clickPosition,delete i.downPosition,t.status=Dp,i.inside=!1,i.clicking=!1},this._mouseTouchMove=t=>{let i=this.container,r=i.actualOptions,s=i.interactivity,o=i.canvas.element;if(!s?.element)return;s.mouse.inside=!0;let a;if(t.type.startsWith("pointer")){this._canPush=!0;let l=t;if(s.element===window){if(o){let h=o.getBoundingClientRect();a={x:l.clientX-h.left,y:l.clientY-h.top}}}else if(r.interactivity.detectsOn===xs.parent){let h=l.target,u=l.currentTarget;if(h&&u&&o){let d=h.getBoundingClientRect(),m=u.getBoundingClientRect(),g=o.getBoundingClientRect();a={x:l.offsetX+$t*d.left-(m.left+g.left),y:l.offsetY+$t*d.top-(m.top+g.top)}}else a={x:l.offsetX??l.clientX,y:l.offsetY??l.clientY}}else l.target===o&&(a={x:l.offsetX??l.clientX,y:l.offsetY??l.clientY})}else if(this._canPush=t.type!=="touchmove",o){let l=t,h=l.touches[l.touches.length-Ul],u=o.getBoundingClientRect();a={x:h.clientX-(u.left??mo),y:h.clientY-(u.top??mo)}}let c=i.retina.pixelRatio;a&&(a.x*=c,a.y*=c),s.mouse.position=a,s.status=Pp},this._touchEnd=t=>{let i=t,r=Array.from(i.changedTouches);for(let s of r)this._touches.delete(s.identifier);this._mouseTouchFinish()},this._touchEndClick=t=>{let i=t,r=Array.from(i.changedTouches);for(let s of r)this._touches.delete(s.identifier);this._mouseTouchClick(t)},this._touchStart=t=>{let i=t,r=Array.from(i.changedTouches);for(let s of r)this._touches.set(s.identifier,performance.now());this._mouseTouchMove(t)},this._canPush=!0,this._touches=new Map,this._handlers={mouseDown:()=>this._mouseDown(),mouseLeave:()=>this._mouseTouchFinish(),mouseMove:t=>this._mouseTouchMove(t),mouseUp:t=>this._mouseTouchClick(t),touchStart:t=>this._touchStart(t),touchMove:t=>this._mouseTouchMove(t),touchEnd:t=>this._touchEnd(t),touchCancel:t=>this._touchEnd(t),touchEndClick:t=>this._touchEndClick(t),visibilityChange:()=>this._handleVisibilityChange(),themeChange:t=>this._handleThemeChange(t),oldThemeChange:t=>this._handleThemeChange(t),resize:()=>{this._handleWindowResize()}}}addListeners(){this._manageListeners(!0)}removeListeners(){this._manageListeners(!1)}};var hi=function(n){return n.configAdded="configAdded",n.containerInit="containerInit",n.particlesSetup="particlesSetup",n.containerStarted="containerStarted",n.containerStopped="containerStopped",n.containerDestroyed="containerDestroyed",n.containerPaused="containerPaused",n.containerPlay="containerPlay",n.containerBuilt="containerBuilt",n.particleAdded="particleAdded",n.particleDestroyed="particleDestroyed",n.particleRemoved="particleRemoved",n}(hi||{});var Oi=class n{constructor(){this.value=""}static create(e,t){let i=new n;return i.load(e),t!==void 0&&(mn(t)||_n(t)?i.load({value:t}):i.load(t)),i}load(e){j(e)||j(e.value)||(this.value=e.value)}};var Jl=class{constructor(){this.color=new Oi,this.color.value="",this.image="",this.position="",this.repeat="",this.size="",this.opacity=1}load(e){j(e)||(e.color!==void 0&&(this.color=Oi.create(this.color,e.color)),e.image!==void 0&&(this.image=e.image),e.position!==void 0&&(this.position=e.position),e.repeat!==void 0&&(this.repeat=e.repeat),e.size!==void 0&&(this.size=e.size),e.opacity!==void 0&&(this.opacity=e.opacity))}};var Ql=class{constructor(){this.opacity=1}load(e){j(e)||(e.color!==void 0&&(this.color=Oi.create(this.color,e.color)),e.image!==void 0&&(this.image=e.image),e.opacity!==void 0&&(this.opacity=e.opacity))}};var eh=class{constructor(){this.composite="destination-out",this.cover=new Ql,this.enable=!1}load(e){if(!j(e)){if(e.composite!==void 0&&(this.composite=e.composite),e.cover!==void 0){let t=e.cover,i=mn(e.cover)?{color:e.cover}:e.cover;this.cover.load(t.color!==void 0||t.image!==void 0?t:{color:i})}e.enable!==void 0&&(this.enable=e.enable)}}};var th=class{constructor(){this.enable=!0,this.zIndex=0}load(e){j(e)||(e.enable!==void 0&&(this.enable=e.enable),e.zIndex!==void 0&&(this.zIndex=e.zIndex))}};var ih=class{constructor(){this.enable=!1,this.mode=[]}load(e){j(e)||(e.enable!==void 0&&(this.enable=e.enable),e.mode!==void 0&&(this.mode=e.mode))}};var tm=function(n){return n.circle="circle",n.rectangle="rectangle",n}(tm||{});var tc=class{constructor(){this.selectors=[],this.enable=!1,this.mode=[],this.type=tm.circle}load(e){j(e)||(e.selectors!==void 0&&(this.selectors=e.selectors),e.enable!==void 0&&(this.enable=e.enable),e.mode!==void 0&&(this.mode=e.mode),e.type!==void 0&&(this.type=e.type))}};var nh=class{constructor(){this.enable=!1,this.force=2,this.smooth=10}load(e){j(e)||(e.enable!==void 0&&(this.enable=e.enable),e.force!==void 0&&(this.force=e.force),e.smooth!==void 0&&(this.smooth=e.smooth))}};var rh=class{constructor(){this.enable=!1,this.mode=[],this.parallax=new nh}load(e){j(e)||(e.enable!==void 0&&(this.enable=e.enable),e.mode!==void 0&&(this.mode=e.mode),this.parallax.load(e.parallax))}};var sh=class{constructor(){this.delay=.5,this.enable=!0}load(e){j(e)||(e.delay!==void 0&&(this.delay=e.delay),e.enable!==void 0&&(this.enable=e.enable))}};var oh=class{constructor(){this.onClick=new ih,this.onDiv=new tc,this.onHover=new rh,this.resize=new sh}load(e){if(j(e))return;this.onClick.load(e.onClick);let t=e.onDiv;t!==void 0&&(this.onDiv=kn(t,i=>{let r=new tc;return r.load(i),r})),this.onHover.load(e.onHover),this.resize.load(e.resize)}};var ah=class{constructor(e,t){this._engine=e,this._container=t}load(e){if(j(e)||!this._container)return;let t=this._engine.interactors.get(this._container);if(t)for(let i of t)i.loadModeOptions&&i.loadModeOptions(this,e)}};var xo=class{constructor(e,t){this.detectsOn=xs.window,this.events=new oh,this.modes=new ah(e,t)}load(e){if(j(e))return;let t=e.detectsOn;t!==void 0&&(this.detectsOn=t),this.events.load(e.events),this.modes.load(e.modes)}};var ch=class{load(e){j(e)||(e.position&&(this.position={x:e.position.x??qp,y:e.position.y??qp,mode:e.position.mode??nr.percent}),e.options&&(this.options=Rt({},e.options)))}};var Ur=function(n){return n.screen="screen",n.canvas="canvas",n}(Ur||{});var lh=class{constructor(){this.maxWidth=1/0,this.options={},this.mode=Ur.canvas}load(e){j(e)||(j(e.maxWidth)||(this.maxWidth=e.maxWidth),j(e.mode)||(e.mode===Ur.screen?this.mode=Ur.screen:this.mode=Ur.canvas),j(e.options)||(this.options=Rt({},e.options)))}};var sr=function(n){return n.any="any",n.dark="dark",n.light="light",n}(sr||{});var hh=class{constructor(){this.auto=!1,this.mode=sr.any,this.value=!1}load(e){j(e)||(e.auto!==void 0&&(this.auto=e.auto),e.mode!==void 0&&(this.mode=e.mode),e.value!==void 0&&(this.value=e.value))}};var uh=class{constructor(){this.name="",this.default=new hh}load(e){j(e)||(e.name!==void 0&&(this.name=e.name),this.default.load(e.default),e.options!==void 0&&(this.options=Rt({},e.options)))}};var Ms=class{constructor(){this.count=0,this.enable=!1,this.speed=1,this.decay=0,this.delay=0,this.sync=!1}load(e){j(e)||(e.count!==void 0&&(this.count=qe(e.count)),e.enable!==void 0&&(this.enable=e.enable),e.speed!==void 0&&(this.speed=qe(e.speed)),e.decay!==void 0&&(this.decay=qe(e.decay)),e.delay!==void 0&&(this.delay=qe(e.delay)),e.sync!==void 0&&(this.sync=e.sync))}},Br=class extends Ms{constructor(){super(),this.mode=Fr.auto,this.startValue=ys.random}load(e){super.load(e),!j(e)&&(e.mode!==void 0&&(this.mode=e.mode),e.startValue!==void 0&&(this.startValue=e.startValue))}};var Mo=class extends Ms{constructor(){super(),this.offset=0,this.sync=!0}load(e){super.load(e),!j(e)&&e.offset!==void 0&&(this.offset=qe(e.offset))}};var dh=class{constructor(){this.h=new Mo,this.s=new Mo,this.l=new Mo}load(e){j(e)||(this.h.load(e.h),this.s.load(e.s),this.l.load(e.l))}};var Ss=class n extends Oi{constructor(){super(),this.animation=new dh}static create(e,t){let i=new n;return i.load(e),t!==void 0&&(mn(t)||_n(t)?i.load({value:t}):i.load(t)),i}load(e){if(super.load(e),j(e))return;let t=e.animation;t!==void 0&&(t.enable!==void 0?this.animation.h.load(t):this.animation.load(e.animation))}};var im=function(n){return n.absorb="absorb",n.bounce="bounce",n.destroy="destroy",n}(im||{});var fh=class{constructor(){this.speed=2}load(e){j(e)||e.speed!==void 0&&(this.speed=e.speed)}};var ph=class{constructor(){this.enable=!0,this.retries=0}load(e){j(e)||(e.enable!==void 0&&(this.enable=e.enable),e.retries!==void 0&&(this.retries=e.retries))}};var or=class{constructor(){this.value=0}load(e){j(e)||j(e.value)||(this.value=qe(e.value))}},nm=class extends or{constructor(){super(),this.animation=new Ms}load(e){if(super.load(e),j(e))return;let t=e.animation;t!==void 0&&this.animation.load(t)}},So=class extends nm{constructor(){super(),this.animation=new Br}load(e){super.load(e)}};var ic=class extends or{constructor(){super(),this.value=1}};var wo=class{constructor(){this.horizontal=new ic,this.vertical=new ic}load(e){j(e)||(this.horizontal.load(e.horizontal),this.vertical.load(e.vertical))}};var mh=class{constructor(){this.absorb=new fh,this.bounce=new wo,this.enable=!1,this.maxSpeed=50,this.mode=im.bounce,this.overlap=new ph}load(e){j(e)||(this.absorb.load(e.absorb),this.bounce.load(e.bounce),e.enable!==void 0&&(this.enable=e.enable),e.maxSpeed!==void 0&&(this.maxSpeed=qe(e.maxSpeed)),e.mode!==void 0&&(this.mode=e.mode),this.overlap.load(e.overlap))}};var gh=class{constructor(){this.close=!0,this.fill=!0,this.options={},this.type=[]}load(e){if(j(e))return;let t=e.options;if(t!==void 0)for(let i in t){let r=t[i];r&&(this.options[i]=Rt(this.options[i]??{},r))}e.close!==void 0&&(this.close=e.close),e.fill!==void 0&&(this.fill=e.fill),e.type!==void 0&&(this.type=e.type)}};var _h=class{constructor(){this.offset=0,this.value=90}load(e){j(e)||(e.offset!==void 0&&(this.offset=qe(e.offset)),e.value!==void 0&&(this.value=qe(e.value)))}};var vh=class{constructor(){this.distance=200,this.enable=!1,this.rotate={x:3e3,y:3e3}}load(e){if(!j(e)&&(e.distance!==void 0&&(this.distance=qe(e.distance)),e.enable!==void 0&&(this.enable=e.enable),e.rotate)){let t=e.rotate.x;t!==void 0&&(this.rotate.x=t);let i=e.rotate.y;i!==void 0&&(this.rotate.y=i)}}};var yh=class{constructor(){this.x=50,this.y=50,this.mode=nr.percent,this.radius=0}load(e){j(e)||(e.x!==void 0&&(this.x=e.x),e.y!==void 0&&(this.y=e.y),e.mode!==void 0&&(this.mode=e.mode),e.radius!==void 0&&(this.radius=e.radius))}};var bh=class{constructor(){this.acceleration=9.81,this.enable=!1,this.inverse=!1,this.maxSpeed=50}load(e){j(e)||(e.acceleration!==void 0&&(this.acceleration=qe(e.acceleration)),e.enable!==void 0&&(this.enable=e.enable),e.inverse!==void 0&&(this.inverse=e.inverse),e.maxSpeed!==void 0&&(this.maxSpeed=qe(e.maxSpeed)))}};var xh=class{constructor(){this.clamp=!0,this.delay=new or,this.enable=!1,this.options={}}load(e){j(e)||(e.clamp!==void 0&&(this.clamp=e.clamp),this.delay.load(e.delay),e.enable!==void 0&&(this.enable=e.enable),this.generator=e.generator,e.options&&(this.options=Rt(this.options,e.options)))}};var Mh=class{load(e){j(e)||(e.color!==void 0&&(this.color=Oi.create(this.color,e.color)),e.image!==void 0&&(this.image=e.image))}};var Sh=class{constructor(){this.enable=!1,this.length=10,this.fill=new Mh}load(e){j(e)||(e.enable!==void 0&&(this.enable=e.enable),e.fill!==void 0&&this.fill.load(e.fill),e.length!==void 0&&(this.length=e.length))}};var Mt=function(n){return n.bounce="bounce",n.none="none",n.out="out",n.destroy="destroy",n.split="split",n}(Mt||{});var wh=class{constructor(){this.default=Mt.out}load(e){j(e)||(e.default!==void 0&&(this.default=e.default),this.bottom=e.bottom??e.default,this.left=e.left??e.default,this.right=e.right??e.default,this.top=e.top??e.default)}};var Eh=class{constructor(){this.acceleration=0,this.enable=!1}load(e){j(e)||(e.acceleration!==void 0&&(this.acceleration=qe(e.acceleration)),e.enable!==void 0&&(this.enable=e.enable),e.position&&(this.position=Rt({},e.position)))}};var Ch=class{constructor(){this.angle=new _h,this.attract=new vh,this.center=new yh,this.decay=0,this.distance={},this.direction=ei.none,this.drift=0,this.enable=!1,this.gravity=new bh,this.path=new xh,this.outModes=new wh,this.random=!1,this.size=!1,this.speed=2,this.spin=new Eh,this.straight=!1,this.trail=new Sh,this.vibrate=!1,this.warp=!1}load(e){if(j(e))return;this.angle.load(gn(e.angle)?{value:e.angle}:e.angle),this.attract.load(e.attract),this.center.load(e.center),e.decay!==void 0&&(this.decay=qe(e.decay)),e.direction!==void 0&&(this.direction=e.direction),e.distance!==void 0&&(this.distance=gn(e.distance)?{horizontal:e.distance,vertical:e.distance}:te({},e.distance)),e.drift!==void 0&&(this.drift=qe(e.drift)),e.enable!==void 0&&(this.enable=e.enable),this.gravity.load(e.gravity);let t=e.outModes;t!==void 0&&(ir(t)?this.outModes.load(t):this.outModes.load({default:t})),this.path.load(e.path),e.random!==void 0&&(this.random=e.random),e.size!==void 0&&(this.size=e.size),e.speed!==void 0&&(this.speed=qe(e.speed)),this.spin.load(e.spin),e.straight!==void 0&&(this.straight=e.straight),this.trail.load(e.trail),e.vibrate!==void 0&&(this.vibrate=e.vibrate),e.warp!==void 0&&(this.warp=e.warp)}};var Th=class extends Br{constructor(){super(),this.destroy=Nr.none,this.speed=2}load(e){super.load(e),!j(e)&&e.destroy!==void 0&&(this.destroy=e.destroy)}};var Ah=class extends So{constructor(){super(),this.animation=new Th,this.value=1}load(e){if(j(e))return;super.load(e);let t=e.animation;t!==void 0&&this.animation.load(t)}};var Rh=class{constructor(){this.enable=!1,this.width=1920,this.height=1080}load(e){if(j(e))return;e.enable!==void 0&&(this.enable=e.enable);let t=e.width;t!==void 0&&(this.width=t);let i=e.height;i!==void 0&&(this.height=i)}};var Eo=function(n){return n.delete="delete",n.wait="wait",n}(Eo||{});var Ih=class{constructor(){this.mode=Eo.delete,this.value=0}load(e){j(e)||(e.mode!==void 0&&(this.mode=e.mode),e.value!==void 0&&(this.value=e.value))}};var Dh=class{constructor(){this.density=new Rh,this.limit=new Ih,this.value=0}load(e){j(e)||(this.density.load(e.density),this.limit.load(e.limit),e.value!==void 0&&(this.value=e.value))}};var Ph=class{constructor(){this.blur=0,this.color=new Oi,this.enable=!1,this.offset={x:0,y:0},this.color.value="#000"}load(e){j(e)||(e.blur!==void 0&&(this.blur=e.blur),this.color=Oi.create(this.color,e.color),e.enable!==void 0&&(this.enable=e.enable),e.offset!==void 0&&(e.offset.x!==void 0&&(this.offset.x=e.offset.x),e.offset.y!==void 0&&(this.offset.y=e.offset.y)))}};var Oh=class{constructor(){this.close=!0,this.fill=!0,this.options={},this.type="circle"}load(e){if(j(e))return;let t=e.options;if(t!==void 0)for(let i in t){let r=t[i];r&&(this.options[i]=Rt(this.options[i]??{},r))}e.close!==void 0&&(this.close=e.close),e.fill!==void 0&&(this.fill=e.fill),e.type!==void 0&&(this.type=e.type)}};var Lh=class extends Br{constructor(){super(),this.destroy=Nr.none,this.speed=5}load(e){super.load(e),!j(e)&&e.destroy!==void 0&&(this.destroy=e.destroy)}};var Fh=class extends So{constructor(){super(),this.animation=new Lh,this.value=3}load(e){if(super.load(e),j(e))return;let t=e.animation;t!==void 0&&this.animation.load(t)}};var nc=class{constructor(){this.width=0}load(e){j(e)||(e.color!==void 0&&(this.color=Ss.create(this.color,e.color)),e.width!==void 0&&(this.width=qe(e.width)),e.opacity!==void 0&&(this.opacity=qe(e.opacity)))}};var Nh=class extends or{constructor(){super(),this.opacityRate=1,this.sizeRate=1,this.velocityRate=1}load(e){super.load(e),!j(e)&&(e.opacityRate!==void 0&&(this.opacityRate=e.opacityRate),e.sizeRate!==void 0&&(this.sizeRate=e.sizeRate),e.velocityRate!==void 0&&(this.velocityRate=e.velocityRate))}};var kh=class{constructor(e,t){this._engine=e,this._container=t,this.bounce=new wo,this.collisions=new mh,this.color=new Ss,this.color.value="#fff",this.effect=new gh,this.groups={},this.move=new Ch,this.number=new Dh,this.opacity=new Ah,this.reduceDuplicates=!1,this.shadow=new Ph,this.shape=new Oh,this.size=new Fh,this.stroke=new nc,this.zIndex=new Nh}load(e){if(j(e))return;if(e.groups!==void 0)for(let i of Object.keys(e.groups)){if(!Object.hasOwn(e.groups,i))continue;let r=e.groups[i];r!==void 0&&(this.groups[i]=Rt(this.groups[i]??{},r))}e.reduceDuplicates!==void 0&&(this.reduceDuplicates=e.reduceDuplicates),this.bounce.load(e.bounce),this.color.load(Ss.create(this.color,e.color)),this.effect.load(e.effect),this.move.load(e.move),this.number.load(e.number),this.opacity.load(e.opacity),this.shape.load(e.shape),this.size.load(e.size),this.shadow.load(e.shadow),this.zIndex.load(e.zIndex),this.collisions.load(e.collisions),e.interactivity!==void 0&&(this.interactivity=Rt({},e.interactivity));let t=e.stroke;if(t&&(this.stroke=kn(t,i=>{let r=new nc;return r.load(i),r})),this._container){let i=this._engine.updaters.get(this._container);if(i)for(let s of i)s.loadOptions&&s.loadOptions(this,e);let r=this._engine.interactors.get(this._container);if(r)for(let s of r)s.loadParticlesOptions&&s.loadParticlesOptions(this,e)}}};function rm(n,...e){for(let t of e)n.load(t)}function Uh(n,e,...t){let i=new kh(n,e);return rm(i,...t),i}var Bh=class{constructor(e,t){this._findDefaultTheme=i=>this.themes.find(r=>r.default.value&&r.default.mode===i)??this.themes.find(r=>r.default.value&&r.default.mode===sr.any),this._importPreset=i=>{this.load(this._engine.getPreset(i))},this._engine=e,this._container=t,this.autoPlay=!0,this.background=new Jl,this.backgroundMask=new eh,this.clear=!0,this.defaultThemes={},this.delay=0,this.fullScreen=new th,this.detectRetina=!0,this.duration=0,this.fpsLimit=120,this.interactivity=new xo(e,t),this.manualParticles=[],this.particles=Uh(this._engine,this._container),this.pauseOnBlur=!0,this.pauseOnOutsideViewport=!0,this.responsive=[],this.smooth=!1,this.style={},this.themes=[],this.zLayers=100}load(e){if(j(e))return;e.preset!==void 0&&kn(e.preset,o=>this._importPreset(o)),e.autoPlay!==void 0&&(this.autoPlay=e.autoPlay),e.clear!==void 0&&(this.clear=e.clear),e.key!==void 0&&(this.key=e.key),e.name!==void 0&&(this.name=e.name),e.delay!==void 0&&(this.delay=qe(e.delay));let t=e.detectRetina;t!==void 0&&(this.detectRetina=t),e.duration!==void 0&&(this.duration=qe(e.duration));let i=e.fpsLimit;i!==void 0&&(this.fpsLimit=i),e.pauseOnBlur!==void 0&&(this.pauseOnBlur=e.pauseOnBlur),e.pauseOnOutsideViewport!==void 0&&(this.pauseOnOutsideViewport=e.pauseOnOutsideViewport),e.zLayers!==void 0&&(this.zLayers=e.zLayers),this.background.load(e.background);let r=e.fullScreen;Vl(r)?this.fullScreen.enable=r:this.fullScreen.load(r),this.backgroundMask.load(e.backgroundMask),this.interactivity.load(e.interactivity),e.manualParticles&&(this.manualParticles=e.manualParticles.map(o=>{let a=new ch;return a.load(o),a})),this.particles.load(e.particles),this.style=Rt(this.style,e.style),this._engine.loadOptions(this,e),e.smooth!==void 0&&(this.smooth=e.smooth);let s=this._engine.interactors.get(this._container);if(s)for(let o of s)o.loadOptions&&o.loadOptions(this,e);if(e.responsive!==void 0)for(let o of e.responsive){let a=new lh;a.load(o),this.responsive.push(a)}if(this.responsive.sort((o,a)=>o.maxWidth-a.maxWidth),e.themes!==void 0)for(let o of e.themes){let a=this.themes.find(c=>c.name===o.name);if(a)a.load(o);else{let c=new uh;c.load(o),this.themes.push(c)}}this.defaultThemes.dark=this._findDefaultTheme(sr.dark)?.name,this.defaultThemes.light=this._findDefaultTheme(sr.light)?.name}setResponsive(e,t,i){this.load(i);let r=this.responsive.find(s=>s.mode===Ur.screen&&screen?s.maxWidth>screen.availWidth:s.maxWidth*t>e);return this.load(r?.options),r?.maxWidth}setTheme(e){if(e){let t=this.themes.find(i=>i.name===e);t&&this.load(t.options)}else{let t=Gl("(prefers-color-scheme: dark)"),i=t?.matches,r=this._findDefaultTheme(i?sr.dark:sr.light);r&&this.load(r.options)}}};var Co=function(n){return n.external="external",n.particles="particles",n}(Co||{});var zh=class{constructor(e,t){this.container=t,this._engine=e,this._interactors=[],this._externalInteractors=[],this._particleInteractors=[]}externalInteract(e){for(let t of this._externalInteractors)t.isEnabled()&&t.interact(e)}handleClickMode(e){for(let t of this._externalInteractors)t.handleClickMode?.(e)}init(){return de(this,null,function*(){this._interactors=yield this._engine.getInteractors(this.container,!0),this._externalInteractors=[],this._particleInteractors=[];for(let e of this._interactors){switch(e.type){case Co.external:this._externalInteractors.push(e);break;case Co.particles:this._particleInteractors.push(e);break}e.init()}})}particlesInteract(e,t){for(let i of this._externalInteractors)i.clear(e,t);for(let i of this._particleInteractors)i.isEnabled(e)&&i.interact(e,t)}reset(e){for(let t of this._externalInteractors)t.isEnabled()&&t.reset(e);for(let t of this._particleInteractors)t.isEnabled(e)&&t.reset(e)}};var Gi=function(n){return n.normal="normal",n.inside="inside",n.outside="outside",n}(Gi||{});function Iw(n,e,t,i){let r=e.options[n];if(r)return Rt({close:e.close,fill:e.fill},Un(r,t,i))}function Dw(n,e,t,i){let r=e.options[n];if(r)return Rt({close:e.close,fill:e.fill},Un(r,t,i))}function $y(n){if(!Ly(n.outMode,n.checkModes))return;let e=n.radius*$t;n.coord>n.maxCoord-e?n.setCb(-n.radius):n.coord<e&&n.setCb(n.radius)}var Vh=class{constructor(e,t){this.container=t,this._calcPosition=(i,r,s,o=Np)=>{for(let g of i.plugins.values()){let v=g.particlePosition!==void 0?g.particlePosition(r,this):void 0;if(v)return _o.create(v.x,v.y,s)}let a=i.canvas.size,c=Dy({size:a,position:r}),l=_o.create(c.x,c.y,s),h=this.getRadius(),u=this.options.move.outModes,d=g=>{$y({outMode:g,checkModes:[Mt.bounce],coord:l.x,maxCoord:i.canvas.size.width,setCb:v=>l.x+=v,radius:h})},m=g=>{$y({outMode:g,checkModes:[Mt.bounce],coord:l.y,maxCoord:i.canvas.size.height,setCb:v=>l.y+=v,radius:h})};return d(u.left??u.default),d(u.right??u.default),m(u.top??u.default),m(u.bottom??u.default),this._checkOverlap(l,o)?this._calcPosition(i,void 0,s,o+ly):l},this._calculateVelocity=()=>{let i=Iy(this.direction),r=i.copy(),s=this.options.move;if(s.direction===ei.inside||s.direction===ei.outside)return r;let o=Lr(Be(s.angle.value)),a=Lr(Be(s.angle.offset)),c={left:a-o*.5,right:a+o*.5};return s.straight||(r.angle+=Ei(qe(c.left,c.right))),s.random&&typeof s.speed=="number"&&(r.length*=_t()),r},this._checkOverlap=(i,r=Np)=>{let s=this.options.collisions,o=this.getRadius();if(!s.enable)return!1;let a=s.overlap;if(a.enable)return!1;let c=a.retries;if(c>=hy&&r>c)throw new Error(`${en} particle is overlapping and can't be placed`);return!!this.container.particles.find(l=>Or(i,l.position)<o+l.getRadius())},this._getRollColor=i=>{if(!i||!this.roll||!this.backColor&&!this.roll.alter)return i;let r=this.roll.horizontal&&this.roll.vertical?$t*Gp:Gp,s=this.roll.horizontal?Math.PI*.5:vs;return Math.floor(((this.roll.angle??vs)+s)/(Math.PI/r))%$t?this.backColor?this.backColor:this.roll.alter?Xy(i,this.roll.alter.type,this.roll.alter.value):i:i},this._initPosition=i=>{let r=this.container,s=Be(this.options.zIndex.value);this.position=this._calcPosition(r,i,Fn(s,uy,r.zLayers)),this.initialPosition=this.position.copy();let o=r.canvas.size;switch(this.moveCenter=Dt(te({},Xl(this.options.move.center,o)),{radius:this.options.move.center.radius??dy,mode:this.options.move.center.mode??nr.percent}),this.direction=Ry(this.options.move.direction,this.position,this.moveCenter),this.options.move.direction){case ei.inside:this.outType=Gi.inside;break;case ei.outside:this.outType=Gi.outside;break}this.offset=wi.origin},this._engine=e}destroy(e){if(this.unbreakable||this.destroyed)return;this.destroyed=!0,this.bubble.inRange=!1,this.slow.inRange=!1;let t=this.container,i=this.pathGenerator;t.shapeDrawers.get(this.shape)?.particleDestroy?.(this);for(let s of t.plugins.values())s.particleDestroyed?.(this,e);for(let s of t.particles.updaters)s.particleDestroyed?.(this,e);i?.reset(this),this._engine.dispatchEvent(hi.particleDestroyed,{container:this.container,data:{particle:this}})}draw(e){let t=this.container,i=t.canvas;for(let r of t.plugins.values())i.drawParticlePlugin(r,this,e);i.drawParticle(this,e)}getFillColor(){return this._getRollColor(this.bubble.color??em(this.color))}getMass(){return this.getRadius()**Vi*Math.PI*.5}getPosition(){return{x:this.position.x+this.offset.x,y:this.position.y+this.offset.y,z:this.position.z}}getRadius(){return this.bubble.radius??this.size.value}getStrokeColor(){return this._getRollColor(this.bubble.color??em(this.strokeColor))}init(e,t,i,r){let s=this.container,o=this._engine;this.id=e,this.group=r,this.effectClose=!0,this.effectFill=!0,this.shapeClose=!0,this.shapeFill=!0,this.pathRotation=!1,this.lastPathTime=0,this.destroyed=!1,this.unbreakable=!1,this.isRotating=!1,this.rotation=0,this.misplaced=!1,this.retina={maxDistance:{}},this.outType=Gi.normal,this.ignoresResizeRatio=!0;let a=s.retina.pixelRatio,c=s.actualOptions,l=Uh(this._engine,s,c.particles),{reduceDuplicates:h}=l,u=l.effect.type,d=l.shape.type;this.effect=Un(u,this.id,h),this.shape=Un(d,this.id,h);let m=l.effect,g=l.shape;if(i){if(i.effect?.type){let C=i.effect.type,L=Un(C,this.id,h);L&&(this.effect=L,m.load(i.effect))}if(i.shape?.type){let C=i.shape.type,L=Un(C,this.id,h);L&&(this.shape=L,g.load(i.shape))}}if(this.effect===qa){let C=[...this.container.effectDrawers.keys()];this.effect=C[Math.floor(Math.random()*C.length)]}if(this.shape===qa){let C=[...this.container.shapeDrawers.keys()];this.shape=C[Math.floor(Math.random()*C.length)]}this.effectData=Iw(this.effect,m,this.id,h),this.shapeData=Dw(this.shape,g,this.id,h),l.load(i);let v=this.effectData;v&&l.load(v.particles);let p=this.shapeData;p&&l.load(p.particles);let f=new xo(o,s);f.load(s.actualOptions.interactivity),f.load(l.interactivity),this.interactivity=f,this.effectFill=v?.fill??l.effect.fill,this.effectClose=v?.close??l.effect.close,this.shapeFill=p?.fill??l.shape.fill,this.shapeClose=p?.close??l.shape.close,this.options=l;let E=this.options.move.path;this.pathDelay=Be(E.delay.value)*1e3,E.generator&&(this.pathGenerator=this._engine.getPathGenerator(E.generator),this.pathGenerator&&s.addPath(E.generator,this.pathGenerator)&&this.pathGenerator.init(s)),s.retina.initParticle(this),this.size=jl(this.options.size,a),this.bubble={inRange:!1},this.slow={inRange:!1,factor:1},this._initPosition(t),this.initialVelocity=this._calculateVelocity(),this.velocity=this.initialVelocity.copy(),this.moveDecay=kl-Be(this.options.move.decay);let w=s.particles;w.setLastZIndex(this.position.z),this.zIndexFactor=this.position.z/s.zLayers,this.sides=24;let x=s.effectDrawers.get(this.effect);x||(x=this._engine.getEffectDrawer(this.effect),x&&s.effectDrawers.set(this.effect,x)),x?.loadEffect&&x.loadEffect(this);let D=s.shapeDrawers.get(this.shape);D||(D=this._engine.getShapeDrawer(this.shape),D&&s.shapeDrawers.set(this.shape,D)),D?.loadShape&&D.loadShape(this);let I=D?.getSidesCount;I&&(this.sides=I(this)),this.spawning=!1,this.shadowColor=kr(this._engine,this.options.shadow.color);for(let C of w.updaters)C.init(this);for(let C of w.movers)C.init?.(this);x?.particleInit?.(s,this),D?.particleInit?.(s,this);for(let C of s.plugins.values())C.particleCreated?.(this)}isInsideCanvas(){let e=this.getRadius(),t=this.container.canvas.size,i=this.position;return i.x>=-e&&i.y>=-e&&i.y<=t.height+e&&i.x<=t.width+e}isVisible(){return!this.destroyed&&!this.spawning&&this.isInsideCanvas()}reset(){for(let e of this.container.particles.updaters)e.reset?.(this)}};var Hh=class{constructor(e,t){this.position=e,this.particle=t}};var To=function(n){return n.circle="circle",n.rectangle="rectangle",n}(To||{});var Gh=class{constructor(e,t,i){this.position={x:e,y:t},this.type=i}},rc=class n extends Gh{constructor(e,t,i){super(e,t,To.circle),this.radius=i}contains(e){return Or(e,this.position)<=this.radius}intersects(e){let t=this.position,i=e.position,r={x:Math.abs(i.x-t.x),y:Math.abs(i.y-t.y)},s=this.radius;if(e instanceof n||e.type===To.circle){let o=e,a=s+o.radius,c=Math.sqrt(r.x**Vi+r.y**Vi);return a>c}else if(e instanceof zr||e.type===To.rectangle){let o=e,{width:a,height:c}=o.size;return Math.pow(r.x-a,Vi)+Math.pow(r.y-c,Vi)<=s**Vi||r.x<=s+a&&r.y<=s+c||r.x<=a||r.y<=c}return!1}},zr=class n extends Gh{constructor(e,t,i,r){super(e,t,To.rectangle),this.size={height:r,width:i}}contains(e){let t=this.size.width,i=this.size.height,r=this.position;return e.x>=r.x&&e.x<=r.x+t&&e.y>=r.y&&e.y<=r.y+i}intersects(e){if(e instanceof rc)return e.intersects(this);let t=this.size.width,i=this.size.height,r=this.position,s=e.position,o=e instanceof n?e.size:{width:0,height:0},a=o.width,c=o.height;return s.x<r.x+t&&s.x+a>r.x&&s.y<r.y+i&&s.y+c>r.y}};var sc=class n{constructor(e,t){this.rectangle=e,this.capacity=t,this._subdivide=()=>{let{x:i,y:r}=this.rectangle.position,{width:s,height:o}=this.rectangle.size,{capacity:a}=this;for(let c=0;c<$v;c++){let l=c%$t;this._subs.push(new n(new zr(i+s*.5*l,r+o*.5*(Math.round(c*.5)-l),s*.5,o*.5),a))}this._divided=!0},this._points=[],this._divided=!1,this._subs=[]}insert(e){return this.rectangle.contains(e.position)?this._points.length<this.capacity?(this._points.push(e),!0):(this._divided||this._subdivide(),this._subs.some(t=>t.insert(e))):!1}query(e,t){let i=[];if(!e.intersects(this.rectangle))return[];for(let r of this._points)!e.contains(r.position)&&Or(e.position,r.position)>r.particle.getRadius()&&(!t||t(r.particle))||i.push(r.particle);if(this._divided)for(let r of this._subs)i.push(...r.query(e,t));return i}queryCircle(e,t,i){return this.query(new rc(e.x,e.y,t),i)}queryRectangle(e,t,i){return this.query(new zr(e.x,e.y,t.width,t.height),i)}};var Yy=n=>{let{height:e,width:t}=n;return new zr(Wp*t,Wp*e,jp*t,jp*e)},Wh=class{constructor(e,t){this._addToPool=(...r)=>{this._pool.push(...r)},this._applyDensity=(r,s,o)=>{let a=r.number;if(!r.number.density?.enable){o===void 0?this._limit=a.limit.value:a.limit&&this._groupLimits.set(o,a.limit.value);return}let c=this._initDensityFactor(a.density),l=a.value,h=a.limit.value>Xp?a.limit.value:l,u=Math.min(l,h)*c+s,d=Math.min(this.count,this.filter(m=>m.group===o).length);o===void 0?this._limit=a.limit.value*c:this._groupLimits.set(o,a.limit.value*c),d<u?this.push(Math.abs(u-d),void 0,r,o):d>u&&this.removeQuantity(d-u,o)},this._initDensityFactor=r=>{let s=this._container;if(!s.canvas.element||!r.enable)return gy;let o=s.canvas.element,a=s.retina.pixelRatio;return o.width*o.height/(r.height*r.width*a**Vi)},this._pushParticle=(r,s,o,a)=>{try{let c=this._pool.pop();c||(c=new Vh(this._engine,this._container)),c.init(this._nextId,r,s,o);let l=!0;return a&&(l=a(c)),l?(this._array.push(c),this._zArray.push(c),this._nextId++,this._engine.dispatchEvent(hi.particleAdded,{container:this._container,data:{particle:c}}),c):void 0}catch(c){rr().warning(`${en} adding particle: ${c}`)}},this._removeParticle=(r,s,o)=>{let a=this._array[r];if(!a||a.group!==s)return!1;let c=this._zArray.indexOf(a);return this._array.splice(r,go),this._zArray.splice(c,go),a.destroy(o),this._engine.dispatchEvent(hi.particleRemoved,{container:this._container,data:{particle:a}}),this._addToPool(a),!0},this._engine=e,this._container=t,this._nextId=0,this._array=[],this._zArray=[],this._pool=[],this._limit=0,this._groupLimits=new Map,this._needsSort=!1,this._lastZIndex=0,this._interactionManager=new zh(e,t),this._pluginsInitialized=!1;let i=t.canvas.size;this.quadTree=new sc(Yy(i),kp),this.movers=[],this.updaters=[]}get count(){return this._array.length}addManualParticles(){let e=this._container;e.actualOptions.manualParticles.forEach(i=>this.addParticle(i.position?Xl(i.position,e.canvas.size):void 0,i.options))}addParticle(e,t,i,r){let s=this._container.actualOptions.particles.number.limit.mode,o=i===void 0?this._limit:this._groupLimits.get(i)??this._limit,a=this.count;if(o>Xp)switch(s){case Eo.delete:{let c=a+fy-o;c>py&&this.removeQuantity(c);break}case Eo.wait:if(a>=o)return;break}return this._pushParticle(e,t,i,r)}clear(){this._array=[],this._zArray=[],this._pluginsInitialized=!1}destroy(){this._array=[],this._zArray=[],this.movers=[],this.updaters=[]}draw(e){let t=this._container,i=t.canvas;i.clear(),this.update(e);for(let r of t.plugins.values())i.drawPlugin(r,e);for(let r of this._zArray)r.draw(e)}filter(e){return this._array.filter(e)}find(e){return this._array.find(e)}get(e){return this._array[e]}handleClickMode(e){this._interactionManager.handleClickMode(e)}init(){return de(this,null,function*(){let e=this._container,t=e.actualOptions;this._lastZIndex=0,this._needsSort=!1,yield this.initPlugins();let i=!1;for(let r of e.plugins.values())if(i=r.particlesInitialization?.()??i,i)break;if(this.addManualParticles(),!i){let r=t.particles,s=r.groups;for(let o in s){let a=s[o];for(let c=this.count,l=0;l<a.number?.value&&c<r.number.value;c++,l++)this.addParticle(void 0,a,o)}for(let o=this.count;o<r.number.value;o++)this.addParticle()}})}initPlugins(){return de(this,null,function*(){if(this._pluginsInitialized)return;let e=this._container;this.movers=yield this._engine.getMovers(e,!0),this.updaters=yield this._engine.getUpdaters(e,!0),yield this._interactionManager.init();for(let t of e.pathGenerators.values())t.init(e)})}push(e,t,i,r){for(let s=0;s<e;s++)this.addParticle(t?.position,i,r)}redraw(){return de(this,null,function*(){this.clear(),yield this.init(),this.draw({value:0,factor:0})})}remove(e,t,i){this.removeAt(this._array.indexOf(e),void 0,t,i)}removeAt(e,t=qv,i,r){if(e<Ka||e>this.count)return;let s=0;for(let o=e;s<t&&o<this.count;o++)this._removeParticle(o,i,r)&&(o--,s++)}removeQuantity(e,t){this.removeAt(Ka,e,t)}setDensity(){let e=this._container.actualOptions,t=e.particles.groups;for(let i in t)this._applyDensity(t[i],my,i);this._applyDensity(e.particles,e.manualParticles.length)}setLastZIndex(e){this._lastZIndex=e,this._needsSort=this._needsSort||this._lastZIndex<e}setResizeFactor(e){this._resizeFactor=e}update(e){let t=this._container,i=new Set;this.quadTree=new sc(Yy(t.canvas.size),kp);for(let s of t.pathGenerators.values())s.update();for(let s of t.plugins.values())s.update?.(e);let r=this._resizeFactor;for(let s of this._array){r&&!s.ignoresResizeRatio&&(s.position.x*=r.width,s.position.y*=r.height,s.initialPosition.x*=r.width,s.initialPosition.y*=r.height),s.ignoresResizeRatio=!1,this._interactionManager.reset(s);for(let o of this._container.plugins.values()){if(s.destroyed)break;o.particleUpdate?.(s,e)}for(let o of this.movers)o.isEnabled(s)&&o.move(s,e);if(s.destroyed){i.add(s);continue}this.quadTree.insert(new Hh(s.getPosition(),s))}if(i.size){let s=o=>!i.has(o);this._array=this.filter(s),this._zArray=this._zArray.filter(s);for(let o of i)this._engine.dispatchEvent(hi.particleRemoved,{container:this._container,data:{particle:o}});this._addToPool(...i)}this._interactionManager.externalInteract(e);for(let s of this._array){for(let o of this.updaters)o.update(s,e);!s.destroyed&&!s.spawning&&this._interactionManager.particlesInteract(s,e)}if(delete this._resizeFactor,this._needsSort){let s=this._zArray;s.sort((o,a)=>a.position.z-o.position.z||o.id-a.id),this._lastZIndex=s[s.length-Ul].position.z,this._needsSort=!1}}};var jh=class{constructor(e){this.container=e,this.pixelRatio=Up,this.reduceFactor=Bp}init(){let e=this.container,t=e.actualOptions;this.pixelRatio=!t.detectRetina||bs()?Up:window.devicePixelRatio,this.reduceFactor=Bp;let i=this.pixelRatio,r=e.canvas;if(r.element){let a=r.element;r.size.width=a.offsetWidth*i,r.size.height=a.offsetHeight*i}let s=t.particles,o=s.move;this.maxSpeed=Be(o.gravity.maxSpeed)*i,this.sizeAnimationSpeed=Be(s.size.animation.speed)*i}initParticle(e){let t=e.options,i=this.pixelRatio,r=t.move,s=r.distance,o=e.retina;o.moveDrift=Be(r.drift)*i,o.moveSpeed=Be(r.speed)*i,o.sizeAnimationSpeed=Be(t.size.animation.speed)*i;let a=o.maxDistance;a.horizontal=s.horizontal!==void 0?s.horizontal*i:void 0,a.vertical=s.vertical!==void 0?s.vertical*i:void 0,o.maxSpeed=Be(r.gravity.maxSpeed)*i}};function Nt(n){return n&&!n.destroyed}function Pw(n,e=Il,t=!1){return{value:n,factor:t?Il/e:Il*n/1e3}}function Ao(n,e,...t){let i=new Bh(n,e);return rm(i,...t),i}var Xh=class{constructor(e,t,i){this._intersectionManager=r=>{if(!(!Nt(this)||!this.actualOptions.pauseOnOutsideViewport))for(let s of r)s.target===this.interactivity.element&&(s.isIntersecting?this.play():this.pause())},this._nextFrame=r=>{try{if(!this._smooth&&this._lastFrameTime!==void 0&&r<this._lastFrameTime+1e3/this.fpsLimit){this.draw(!1);return}this._lastFrameTime??=r;let s=Pw(r-this._lastFrameTime,this.fpsLimit,this._smooth);if(this.addLifeTime(s.value),this._lastFrameTime=r,s.value>1e3){this.draw(!1);return}if(this.particles.draw(s),!this.alive()){this.destroy();return}this.animationStatus&&this.draw(!1)}catch(s){rr().error(`${en} in animation loop`,s)}},this._engine=e,this.id=Symbol(t),this.fpsLimit=120,this._smooth=!1,this._delay=0,this._duration=0,this._lifeTime=0,this._firstStart=!0,this.started=!1,this.destroyed=!1,this._paused=!0,this._lastFrameTime=0,this.zLayers=100,this.pageHidden=!1,this._clickHandlers=new Map,this._sourceOptions=i,this._initialSourceOptions=i,this.retina=new jh(this),this.canvas=new Zl(this,this._engine),this.particles=new Wh(this._engine,this),this.pathGenerators=new Map,this.interactivity={mouse:{clicking:!1,inside:!1}},this.plugins=new Map,this.effectDrawers=new Map,this.shapeDrawers=new Map,this._options=Ao(this._engine,this),this.actualOptions=Ao(this._engine,this),this._eventListeners=new Kl(this),this._intersectionObserver=Py(r=>this._intersectionManager(r)),this._engine.dispatchEvent(hi.containerBuilt,{container:this})}get animationStatus(){return!this._paused&&!this.pageHidden&&Nt(this)}get options(){return this._options}get sourceOptions(){return this._sourceOptions}addClickHandler(e){if(!Nt(this))return;let t=this.interactivity.element;if(!t)return;let i=(u,d,m)=>{if(!Nt(this))return;let g=this.retina.pixelRatio,v={x:d.x*g,y:d.y*g},p=this.particles.quadTree.queryCircle(v,m*g);e(u,p)},r=u=>{if(!Nt(this))return;let d=u,m={x:d.offsetX||d.clientX,y:d.offsetY||d.clientY};i(u,m,ty)},s=()=>{Nt(this)&&(l=!0,h=!1)},o=()=>{Nt(this)&&(h=!0)},a=u=>{if(Nt(this)){if(l&&!h){let d=u,m=d.touches[d.touches.length-Hp];if(!m&&(m=d.changedTouches[d.changedTouches.length-Hp],!m))return;let g=this.canvas.element,v=g?g.getBoundingClientRect():void 0,p={x:m.clientX-(v?v.left:mo),y:m.clientY-(v?v.top:mo)};i(u,p,Math.max(m.radiusX,m.radiusY))}l=!1,h=!1}},c=()=>{Nt(this)&&(l=!1,h=!1)},l=!1,h=!1;this._clickHandlers.set("click",r),this._clickHandlers.set("touchstart",s),this._clickHandlers.set("touchmove",o),this._clickHandlers.set("touchend",a),this._clickHandlers.set("touchcancel",c);for(let[u,d]of this._clickHandlers)t.addEventListener(u,d)}addLifeTime(e){this._lifeTime+=e}addPath(e,t,i=!1){return!Nt(this)||!i&&this.pathGenerators.has(e)?!1:(this.pathGenerators.set(e,t),!0)}alive(){return!this._duration||this._lifeTime<=this._duration}clearClickHandlers(){if(Nt(this)){for(let[e,t]of this._clickHandlers)this.interactivity.element?.removeEventListener(e,t);this._clickHandlers.clear()}}destroy(e=!0){if(Nt(this)){this.stop(),this.clearClickHandlers(),this.particles.destroy(),this.canvas.destroy();for(let t of this.effectDrawers.values())t.destroy?.(this);for(let t of this.shapeDrawers.values())t.destroy?.(this);for(let t of this.effectDrawers.keys())this.effectDrawers.delete(t);for(let t of this.shapeDrawers.keys())this.shapeDrawers.delete(t);if(this._engine.clearPlugins(this),this.destroyed=!0,e){let t=this._engine.items,i=t.findIndex(r=>r===this);i>=iy&&t.splice(i,Nl)}this._engine.dispatchEvent(hi.containerDestroyed,{container:this})}}draw(e){if(!Nt(this))return;let t=e,i=r=>{t&&(this._lastFrameTime=void 0,t=!1),this._nextFrame(r)};this._drawAnimationFrame=Ty(r=>i(r))}export(i){return de(this,arguments,function*(e,t={}){for(let r of this.plugins.values()){if(!r.export)continue;let s=yield r.export(e,t);if(s.supported)return s.blob}rr().error(`${en} - Export plugin with type ${e} not found`)})}handleClickMode(e){if(Nt(this)){this.particles.handleClickMode(e);for(let t of this.plugins.values())t.handleClickMode?.(e)}}init(){return de(this,null,function*(){if(!Nt(this))return;let e=this._engine.getSupportedEffects();for(let l of e){let h=this._engine.getEffectDrawer(l);h&&this.effectDrawers.set(l,h)}let t=this._engine.getSupportedShapes();for(let l of t){let h=this._engine.getShapeDrawer(l);h&&this.shapeDrawers.set(l,h)}yield this.particles.initPlugins(),this._options=Ao(this._engine,this,this._initialSourceOptions,this.sourceOptions),this.actualOptions=Ao(this._engine,this,this._options);let i=yield this._engine.getAvailablePlugins(this);for(let[l,h]of i)this.plugins.set(l,h);this.retina.init(),yield this.canvas.init(),this.updateActualOptions(),this.canvas.initBackground(),this.canvas.resize();let{zLayers:r,duration:s,delay:o,fpsLimit:a,smooth:c}=this.actualOptions;this.zLayers=r,this._duration=Be(s)*1e3,this._delay=Be(o)*1e3,this._lifeTime=0,this.fpsLimit=a>ry?a:ny,this._smooth=c;for(let l of this.effectDrawers.values())yield l.init?.(this);for(let l of this.shapeDrawers.values())yield l.init?.(this);for(let l of this.plugins.values())yield l.init?.();this._engine.dispatchEvent(hi.containerInit,{container:this}),yield this.particles.init(),this.particles.setDensity();for(let l of this.plugins.values())l.particlesSetup?.();this._engine.dispatchEvent(hi.particlesSetup,{container:this})})}loadTheme(e){return de(this,null,function*(){Nt(this)&&(this._currentTheme=e,yield this.refresh())})}pause(){if(Nt(this)&&(this._drawAnimationFrame!==void 0&&(Ay(this._drawAnimationFrame),delete this._drawAnimationFrame),!this._paused)){for(let e of this.plugins.values())e.pause?.();this.pageHidden||(this._paused=!0),this._engine.dispatchEvent(hi.containerPaused,{container:this})}}play(e){if(!Nt(this))return;let t=this._paused||e;if(this._firstStart&&!this.actualOptions.autoPlay){this._firstStart=!1;return}if(this._paused&&(this._paused=!1),t)for(let i of this.plugins.values())i.play&&i.play();this._engine.dispatchEvent(hi.containerPlay,{container:this}),this.draw(t??!1)}refresh(){return de(this,null,function*(){if(Nt(this))return this.stop(),this.start()})}reset(e){return de(this,null,function*(){if(Nt(this))return this._initialSourceOptions=e,this._sourceOptions=e,this._options=Ao(this._engine,this,this._initialSourceOptions,this.sourceOptions),this.actualOptions=Ao(this._engine,this,this._options),this.refresh()})}start(){return de(this,null,function*(){!Nt(this)||this.started||(yield this.init(),this.started=!0,yield new Promise(e=>{let t=()=>de(this,null,function*(){this._eventListeners.addListeners(),this.interactivity.element instanceof HTMLElement&&this._intersectionObserver&&this._intersectionObserver.observe(this.interactivity.element);for(let i of this.plugins.values())yield i.start?.();this._engine.dispatchEvent(hi.containerStarted,{container:this}),this.play(),e()});this._delayTimeout=setTimeout(()=>void t(),this._delay)}))})}stop(){if(!(!Nt(this)||!this.started)){this._delayTimeout&&(clearTimeout(this._delayTimeout),delete this._delayTimeout),this._firstStart=!0,this.started=!1,this._eventListeners.removeListeners(),this.pause(),this.particles.clear(),this.canvas.stop(),this.interactivity.element instanceof HTMLElement&&this._intersectionObserver&&this._intersectionObserver.unobserve(this.interactivity.element);for(let e of this.plugins.values())e.stop?.();for(let e of this.plugins.keys())this.plugins.delete(e);this._sourceOptions=this._options,this._engine.dispatchEvent(hi.containerStopped,{container:this})}}updateActualOptions(){this.actualOptions.responsive=[];let e=this.actualOptions.setResponsive(this.canvas.size.width,this.retina.pixelRatio,this._options);return this.actualOptions.setTheme(this._currentTheme),this._responsiveMaxWidth===e?!1:(this._responsiveMaxWidth=e,!0)}};var qh=class{constructor(){this._listeners=new Map}addEventListener(e,t){this.removeEventListener(e,t);let i=this._listeners.get(e);i||(i=[],this._listeners.set(e,i)),i.push(t)}dispatchEvent(e,t){this._listeners.get(e)?.forEach(r=>r(t))}hasEventListener(e){return!!this._listeners.get(e)}removeAllEventListeners(e){e?this._listeners.delete(e):this._listeners=new Map}removeEventListener(e,t){let i=this._listeners.get(e);if(!i)return;let r=i.length,s=i.indexOf(t);s<Ka||(r===go?this._listeners.delete(e):i.splice(s,go))}};function sm(n,e,t,i=!1){return de(this,null,function*(){let r=e.get(n);return(!r||i)&&(r=yield Promise.all([...t.values()].map(s=>s(n))),e.set(n,r)),r})}function Ow(n){return de(this,null,function*(){let e=Un(n.url,n.index);if(!e)return n.fallback;let t=yield fetch(e);return t.ok?yield t.json():(rr().error(`${en} ${t.status} while retrieving config file`),n.fallback)})}var Lw=n=>{let e;if(n instanceof HTMLCanvasElement||n.tagName.toLowerCase()===Dl)e=n,e.dataset[tr]||(e.dataset[tr]=Fp);else{let i=n.getElementsByTagName(Dl);i.length?(e=i[sy],e.dataset[tr]=Fp):(e=document.createElement(Dl),e.dataset[tr]=Lp,n.appendChild(e))}let t="100%";return e.style.width||(e.style.width=t),e.style.height||(e.style.height=t),e},Fw=(n,e)=>{let t=e??document.getElementById(n);return t||(t=document.createElement("div"),t.id=n,t.dataset[tr]=Lp,document.body.append(t),t)},$h=class{constructor(){this._configs=new Map,this._domArray=[],this._eventDispatcher=new qh,this._initialized=!1,this.plugins=[],this.colorManagers=new Map,this.easingFunctions=new Map,this._initializers={interactors:new Map,movers:new Map,updaters:new Map},this.interactors=new Map,this.movers=new Map,this.updaters=new Map,this.presets=new Map,this.effectDrawers=new Map,this.shapeDrawers=new Map,this.pathGenerators=new Map}get configs(){let e={};for(let[t,i]of this._configs)e[t]=i;return e}get items(){return this._domArray}get version(){return"3.8.1"}addColorManager(e,t=!0){return de(this,null,function*(){this.colorManagers.set(e.key,e),yield this.refresh(t)})}addConfig(e){let t=e.key??e.name??"default";this._configs.set(t,e),this._eventDispatcher.dispatchEvent(hi.configAdded,{data:{name:t,config:e}})}addEasing(e,t,i=!0){return de(this,null,function*(){this.getEasing(e)||(this.easingFunctions.set(e,t),yield this.refresh(i))})}addEffect(e,t,i=!0){return de(this,null,function*(){kn(e,r=>{this.getEffectDrawer(r)||this.effectDrawers.set(r,t)}),yield this.refresh(i)})}addEventListener(e,t){this._eventDispatcher.addEventListener(e,t)}addInteractor(e,t,i=!0){return de(this,null,function*(){this._initializers.interactors.set(e,t),yield this.refresh(i)})}addMover(e,t,i=!0){return de(this,null,function*(){this._initializers.movers.set(e,t),yield this.refresh(i)})}addParticleUpdater(e,t,i=!0){return de(this,null,function*(){this._initializers.updaters.set(e,t),yield this.refresh(i)})}addPathGenerator(e,t,i=!0){return de(this,null,function*(){this.getPathGenerator(e)||this.pathGenerators.set(e,t),yield this.refresh(i)})}addPlugin(e,t=!0){return de(this,null,function*(){this.getPlugin(e.id)||this.plugins.push(e),yield this.refresh(t)})}addPreset(e,t,i=!1,r=!0){return de(this,null,function*(){(i||!this.getPreset(e))&&this.presets.set(e,t),yield this.refresh(r)})}addShape(e,t=!0){return de(this,null,function*(){for(let i of e.validTypes)this.getShapeDrawer(i)||this.shapeDrawers.set(i,e);yield this.refresh(t)})}checkVersion(e){if(this.version!==e)throw new Error(`The tsParticles version is different from the loaded plugins version. Engine version: ${this.version}. Plugin version: ${e}`)}clearPlugins(e){this.updaters.delete(e),this.movers.delete(e),this.interactors.delete(e)}dispatchEvent(e,t){this._eventDispatcher.dispatchEvent(e,t)}dom(){return this.items}domItem(e){return this.item(e)}getAvailablePlugins(e){return de(this,null,function*(){let t=new Map;for(let i of this.plugins)i.needsPlugin(e.actualOptions)&&t.set(i.id,yield i.getPlugin(e));return t})}getEasing(e){return this.easingFunctions.get(e)??(t=>t)}getEffectDrawer(e){return this.effectDrawers.get(e)}getInteractors(e,t=!1){return de(this,null,function*(){return sm(e,this.interactors,this._initializers.interactors,t)})}getMovers(e,t=!1){return de(this,null,function*(){return sm(e,this.movers,this._initializers.movers,t)})}getPathGenerator(e){return this.pathGenerators.get(e)}getPlugin(e){return this.plugins.find(t=>t.id===e)}getPreset(e){return this.presets.get(e)}getShapeDrawer(e){return this.shapeDrawers.get(e)}getSupportedEffects(){return this.effectDrawers.keys()}getSupportedShapes(){return this.shapeDrawers.keys()}getUpdaters(e,t=!1){return de(this,null,function*(){return sm(e,this.updaters,this._initializers.updaters,t)})}init(){this._initialized||(this._initialized=!0)}item(e){let{items:t}=this,i=t[e];if(!i||i.destroyed){t.splice(e,Nl);return}return i}load(e){return de(this,null,function*(){let t=e.id??e.element?.id??`tsparticles${Math.floor(_t()*oy)}`,{index:i,url:r}=e,s=r?yield Ow({fallback:e.options,url:r,index:i}):e.options,o=Un(s,i),{items:a}=this,c=a.findIndex(d=>d.id.description===t),l=new Xh(this,t,o);if(c>=ay){let d=this.item(c),m=d?cy:vs;d&&!d.destroyed&&d.destroy(!1),a.splice(c,m,l)}else a.push(l);let h=Fw(t,e.element),u=Lw(h);return l.canvas.loadCanvas(u),yield l.start(),l})}loadOptions(e,t){this.plugins.forEach(i=>i.loadOptions?.(e,t))}loadParticlesOptions(e,t,...i){let r=this.updaters.get(e);r&&r.forEach(s=>s.loadOptions?.(t,...i))}refresh(e=!0){return de(this,null,function*(){e&&(yield Promise.all(this.items.map(t=>t.refresh())))})}removeEventListener(e,t){this._eventDispatcher.removeEventListener(e,t)}setOnClickHandler(e){let{items:t}=this;if(!t.length)throw new Error(`${en} can only set click handlers after calling tsParticles.load()`);t.forEach(i=>i.addClickHandler(e))}};function Zy(){let n=new $h;return n.init(),n}var oc=function(n){return n.clockwise="clockwise",n.counterClockwise="counter-clockwise",n.random="random",n}(oc||{});var Yh=Zy();bs()||(window.tsParticles=Yh);var om=.5,Nw=2,Vr=0,vn=1,Ky=60,Jy=0,kw=.01,Uw=Math.PI*Nw;function Qy(n){let e=n.initialPosition,{dx:t,dy:i}=Nn(e,n.position),r=Math.abs(t),s=Math.abs(i),{maxDistance:o}=n.retina,a=o.horizontal,c=o.vertical;if(!a&&!c)return;let l=(a&&r>=a)??!1,h=(c&&s>=c)??!1;if((l||h)&&!n.misplaced)n.misplaced=!!a&&r>a||!!c&&s>c,a&&(n.velocity.x=n.velocity.y*om-n.velocity.x),c&&(n.velocity.y=n.velocity.x*om-n.velocity.y);else if((!a||r<a)&&(!c||s<c)&&n.misplaced)n.misplaced=!1;else if(n.misplaced){let u=n.position,d=n.velocity;a&&(u.x<e.x&&d.x<Vr||u.x>e.x&&d.x>Vr)&&(d.x*=-_t()),c&&(u.y<e.y&&d.y<Vr||u.y>e.y&&d.y>Vr)&&(d.y*=-_t())}}function e0(n,e,t,i,r,s){Bw(n,s);let o=n.gravity,a=o?.enable&&o.inverse?-vn:vn;r&&t&&(n.velocity.x+=r*s.factor/(Ky*t)),o?.enable&&t&&(n.velocity.y+=a*(o.acceleration*s.factor)/(Ky*t));let c=n.moveDecay;n.velocity.multTo(c);let l=n.velocity.mult(t);o?.enable&&i>Vr&&(!o.inverse&&l.y>=Vr&&l.y>=i||o.inverse&&l.y<=Vr&&l.y<=-i)&&(l.y=a*i,t&&(n.velocity.y=l.y/t));let h=n.options.zIndex,u=(vn-n.zIndexFactor)**h.velocityRate;l.multTo(u);let{position:d}=n;d.addTo(l),e.vibrate&&(d.x+=Math.sin(d.x*Math.cos(d.y)),d.y+=Math.cos(d.y*Math.sin(d.x)))}function t0(n,e){let t=n.container;if(!n.spin)return;let i=n.spin.direction===oc.clockwise,r={x:i?Math.cos:Math.sin,y:i?Math.sin:Math.cos};n.position.x=n.spin.center.x+n.spin.radius*r.x(n.spin.angle),n.position.y=n.spin.center.y+n.spin.radius*r.y(n.spin.angle),n.spin.radius+=n.spin.acceleration;let s=Math.max(t.canvas.size.width,t.canvas.size.height),o=s*om;n.spin.radius>o?(n.spin.radius=o,n.spin.acceleration*=-vn):n.spin.radius<Jy&&(n.spin.radius=Jy,n.spin.acceleration*=-vn),n.spin.angle+=e*kw*(vn-n.spin.radius/s)}function Bw(n,e){let t=n.options,i=t.move.path;if(!i.enable)return;if(n.lastPathTime<=n.pathDelay){n.lastPathTime+=e.value;return}let s=n.pathGenerator?.generate(n,e);s&&n.velocity.addTo(s),i.clamp&&(n.velocity.x=Fn(n.velocity.x,-vn,vn),n.velocity.y=Fn(n.velocity.y,-vn,vn)),n.lastPathTime-=n.pathDelay}function i0(n){return n.slow.inRange?n.slow.factor:vn}function n0(n){let e=n.container,t=n.options,i=t.move.spin;if(!i.enable)return;let r=i.position??{x:50,y:50},s=.01,o={x:r.x*s*e.canvas.size.width,y:r.y*s*e.canvas.size.height},a=n.getPosition(),c=Or(a,o),l=Be(i.acceleration);n.retina.spinAcceleration=l*e.retina.pixelRatio,n.spin={center:o,direction:n.velocity.x>=Vr?oc.clockwise:oc.counterClockwise,angle:_t()*Uw,radius:c,acceleration:n.retina.spinAcceleration}}var zw=2,Vw=1,Hw=1,Zh=class{init(e){let t=e.options,i=t.move.gravity;e.gravity={enable:i.enable,acceleration:Be(i.acceleration),inverse:i.inverse},n0(e)}isEnabled(e){return!e.destroyed&&e.options.move.enable}move(e,t){let i=e.options,r=i.move;if(!r.enable)return;let s=e.container,o=s.retina.pixelRatio;e.retina.moveSpeed??=Be(r.speed)*o,e.retina.moveDrift??=Be(e.options.move.drift)*o;let a=i0(e),c=e.retina.moveSpeed*s.retina.reduceFactor,l=e.retina.moveDrift,h=Pr(i.size.value)*o,u=r.size?e.getRadius()/h:Vw,d=t.factor||Hw,m=c*u*a*d/zw,g=e.retina.maxSpeed??s.retina.maxSpeed;r.spin.enable?t0(e,m):e0(e,r,m,g,l,t),Qy(e)}};function r0(n,e=!0){return de(this,null,function*(){n.checkVersion("3.8.1"),yield n.addMover("base",()=>Promise.resolve(new Zh),e)})}var Gw=Math.PI*2,Ww=0,s0={x:0,y:0};function o0(n){let{context:e,particle:t,radius:i}=n;t.circleRange||(t.circleRange={min:Ww,max:Gw});let r=t.circleRange;e.arc(s0.x,s0.y,i,r.min,r.max,!1)}var jw=12,Xw=360,a0=0,Kh=class{constructor(){this.validTypes=["circle"]}draw(e){o0(e)}getSidesCount(){return jw}particleInit(e,t){let i=t.shapeData,r=i?.angle??{max:Xw,min:a0};t.circleRange=ir(r)?{min:Lr(r.min),max:Lr(r.max)}:{min:a0,max:Lr(r)}}};function c0(n,e=!0){return de(this,null,function*(){n.checkVersion("3.8.1"),yield n.addShape(new Kh,e)})}var Jh=class{constructor(e,t){this._container=e,this._engine=t}init(e){let t=ec(this._engine,e.options.color,e.id,e.options.reduceDuplicates);t&&(e.color=By(t,e.options.color.animation,this._container.retina.reduceFactor))}isEnabled(e){let{h:t,s:i,l:r}=e.options.color.animation,{color:s}=e;return!e.destroyed&&!e.spawning&&(s?.h.value!==void 0&&t.enable||s?.s.value!==void 0&&i.enable||s?.l.value!==void 0&&r.enable)}update(e,t){zy(e.color,t)}};function l0(n,e=!0){return de(this,null,function*(){n.checkVersion("3.8.1"),yield n.addParticleUpdater("color",t=>Promise.resolve(new Jh(t,n)),e)})}var Ro=function(n){return n[n.r=1]="r",n[n.g=2]="g",n[n.b=3]="b",n[n.a=4]="a",n}(Ro||{}),qw=/^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i,$w=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i,Qh=16,Yw=1,Zw=255,eu=class{constructor(){this.key="hex",this.stringPrefix="#"}handleColor(e){return this._parseString(e.value)}handleRangeColor(e){return this._parseString(e.value)}parseString(e){return this._parseString(e)}_parseString(e){if(typeof e!="string"||!e?.startsWith(this.stringPrefix))return;let t=e.replace(qw,(r,s,o,a,c)=>s+s+o+o+a+a+(c!==void 0?c+c:"")),i=$w.exec(t);return i?{a:i[Ro.a]!==void 0?parseInt(i[Ro.a],Qh)/Zw:Yw,b:parseInt(i[Ro.b],Qh),g:parseInt(i[Ro.g],Qh),r:parseInt(i[Ro.r],Qh)}:void 0}};function h0(n,e=!0){return de(this,null,function*(){n.checkVersion("3.8.1"),yield n.addColorManager(new eu,e)})}var ac=function(n){return n[n.h=1]="h",n[n.s=2]="s",n[n.l=3]="l",n[n.a=5]="a",n}(ac||{}),tu=class{constructor(){this.key="hsl",this.stringPrefix="hsl"}handleColor(e){let t=e.value,i=t.hsl??e.value;if(i.h!==void 0&&i.s!==void 0&&i.l!==void 0)return $l(i)}handleRangeColor(e){let t=e.value,i=t.hsl??e.value;if(i.h!==void 0&&i.l!==void 0)return $l({h:Be(i.h),l:Be(i.l),s:Be(i.s)})}parseString(e){if(!e.startsWith("hsl"))return;let t=/hsla?\(\s*(\d+)\s*[\s,]\s*(\d+)%\s*[\s,]\s*(\d+)%\s*([\s,]\s*(0|1|0?\.\d+|(\d{1,3})%)\s*)?\)/i,i=t.exec(e),r=4,s=1,o=10;return i?Uy({a:i.length>r?Hl(i[ac.a]):s,h:parseInt(i[ac.h],o),l:parseInt(i[ac.l],o),s:parseInt(i[ac.s],o)}):void 0}};function u0(n,e=!0){return de(this,null,function*(){n.checkVersion("3.8.1"),yield n.addColorManager(new tu,e)})}var iu=class{constructor(e){this.container=e}init(e){let t=e.options.opacity,i=1;e.opacity=jl(t,i);let r=t.animation;r.enable&&(e.opacity.velocity=Be(r.speed)/100*this.container.retina.reduceFactor,r.sync||(e.opacity.velocity*=_t()))}isEnabled(e){return!e.destroyed&&!e.spawning&&!!e.opacity&&e.opacity.enable&&((e.opacity.maxLoops??0)<=0||(e.opacity.maxLoops??0)>0&&(e.opacity.loops??0)<(e.opacity.maxLoops??0))}reset(e){e.opacity&&(e.opacity.time=0,e.opacity.loops=0)}update(e,t){!this.isEnabled(e)||!e.opacity||ql(e,e.opacity,!0,e.options.opacity.animation.destroy,t)}};function d0(n,e=!0){return de(this,null,function*(){n.checkVersion("3.8.1"),yield n.addParticleUpdater("opacity",t=>Promise.resolve(new iu(t)),e)})}var nu=0,Io=0;function f0(n){if(n.outMode!==Mt.bounce&&n.outMode!==Mt.split||n.direction!==je.left&&n.direction!==je.right)return;n.bounds.right<Io&&n.direction===je.left?n.particle.position.x=n.size+n.offset.x:n.bounds.left>n.canvasSize.width&&n.direction===je.right&&(n.particle.position.x=n.canvasSize.width-n.size-n.offset.x);let e=n.particle.velocity.x,t=!1;if(n.direction===je.right&&n.bounds.right>=n.canvasSize.width&&e>nu||n.direction===je.left&&n.bounds.left<=Io&&e<nu){let r=Be(n.particle.options.bounce.horizontal.value);n.particle.velocity.x*=-r,t=!0}if(!t)return;let i=n.offset.x+n.size;n.bounds.right>=n.canvasSize.width&&n.direction===je.right?n.particle.position.x=n.canvasSize.width-i:n.bounds.left<=Io&&n.direction===je.left&&(n.particle.position.x=i),n.outMode===Mt.split&&n.particle.destroy()}function p0(n){if(n.outMode!==Mt.bounce&&n.outMode!==Mt.split||n.direction!==je.bottom&&n.direction!==je.top)return;n.bounds.bottom<Io&&n.direction===je.top?n.particle.position.y=n.size+n.offset.y:n.bounds.top>n.canvasSize.height&&n.direction===je.bottom&&(n.particle.position.y=n.canvasSize.height-n.size-n.offset.y);let e=n.particle.velocity.y,t=!1;if(n.direction===je.bottom&&n.bounds.bottom>=n.canvasSize.height&&e>nu||n.direction===je.top&&n.bounds.top<=Io&&e<nu){let r=Be(n.particle.options.bounce.vertical.value);n.particle.velocity.y*=-r,t=!0}if(!t)return;let i=n.offset.y+n.size;n.bounds.bottom>=n.canvasSize.height&&n.direction===je.bottom?n.particle.position.y=n.canvasSize.height-i:n.bounds.top<=Io&&n.direction===je.top&&(n.particle.position.y=i),n.outMode===Mt.split&&n.particle.destroy()}var ru=class{constructor(e){this.container=e,this.modes=[Mt.bounce,Mt.split]}update(e,t,i,r){if(!this.modes.includes(r))return;let s=this.container,o=!1;for(let d of s.plugins.values())if(d.particleBounce!==void 0&&(o=d.particleBounce(e,i,t)),o)break;if(o)return;let a=e.getPosition(),c=e.offset,l=e.getRadius(),h=Qa(a,l),u=s.canvas.size;f0({particle:e,outMode:r,direction:t,bounds:h,canvasSize:u,offset:c,size:l}),p0({particle:e,outMode:r,direction:t,bounds:h,canvasSize:u,offset:c,size:l})}};var su=0,ou=class{constructor(e){this.container=e,this.modes=[Mt.destroy]}update(e,t,i,r){if(!this.modes.includes(r))return;let s=this.container;switch(e.outType){case Gi.normal:case Gi.outside:if(yo(e.position,s.canvas.size,wi.origin,e.getRadius(),t))return;break;case Gi.inside:{let{dx:o,dy:a}=Nn(e.position,e.moveCenter),{x:c,y:l}=e.velocity;if(c<su&&o>e.moveCenter.radius||l<su&&a>e.moveCenter.radius||c>=su&&o<-e.moveCenter.radius||l>=su&&a<-e.moveCenter.radius)return;break}}s.particles.remove(e,e.group,!0)}};var au=0,cu=class{constructor(e){this.container=e,this.modes=[Mt.none]}update(e,t,i,r){if(!this.modes.includes(r)||((e.options.move.distance.horizontal&&(t===je.left||t===je.right))??(e.options.move.distance.vertical&&(t===je.top||t===je.bottom))))return;let s=e.options.move.gravity,o=this.container,a=o.canvas.size,c=e.getRadius();if(s.enable){let l=e.position;(!s.inverse&&l.y>a.height+c&&t===je.bottom||s.inverse&&l.y<-c&&t===je.top)&&o.particles.remove(e)}else{if(e.velocity.y>au&&e.position.y<=a.height+c||e.velocity.y<au&&e.position.y>=-c||e.velocity.x>au&&e.position.x<=a.width+c||e.velocity.x<au&&e.position.x>=-c)return;yo(e.position,o.canvas.size,wi.origin,c,t)||o.particles.remove(e)}}};var lu=0,hu=0,uu=class{constructor(e){this.container=e,this.modes=[Mt.out]}update(e,t,i,r){if(!this.modes.includes(r))return;let s=this.container;switch(e.outType){case Gi.inside:{let{x:o,y:a}=e.velocity,c=wi.origin;c.length=e.moveCenter.radius,c.angle=e.velocity.angle+Math.PI,c.addTo(wi.create(e.moveCenter));let{dx:l,dy:h}=Nn(e.position,c);if(o<=lu&&l>=hu||a<=lu&&h>=hu||o>=lu&&l<=hu||a>=lu&&h<=hu)return;e.position.x=Math.floor(Ei({min:0,max:s.canvas.size.width})),e.position.y=Math.floor(Ei({min:0,max:s.canvas.size.height}));let{dx:u,dy:d}=Nn(e.position,e.moveCenter);e.direction=Math.atan2(-d,-u),e.velocity.angle=e.direction;break}default:{if(yo(e.position,s.canvas.size,wi.origin,e.getRadius(),t))return;switch(e.outType){case Gi.outside:{e.position.x=Math.floor(Ei({min:-e.moveCenter.radius,max:e.moveCenter.radius}))+e.moveCenter.x,e.position.y=Math.floor(Ei({min:-e.moveCenter.radius,max:e.moveCenter.radius}))+e.moveCenter.y;let{dx:o,dy:a}=Nn(e.position,e.moveCenter);e.moveCenter.radius&&(e.direction=Math.atan2(a,o),e.velocity.angle=e.direction);break}case Gi.normal:{let o=e.options.move.warp,a=s.canvas.size,c={bottom:a.height+e.getRadius()+e.offset.y,left:-e.getRadius()-e.offset.x,right:a.width+e.getRadius()+e.offset.x,top:-e.getRadius()-e.offset.y},l=e.getRadius(),h=Qa(e.position,l);t===je.right&&h.left>a.width+e.offset.x?(e.position.x=c.left,e.initialPosition.x=e.position.x,o||(e.position.y=_t()*a.height,e.initialPosition.y=e.position.y)):t===je.left&&h.right<-e.offset.x&&(e.position.x=c.right,e.initialPosition.x=e.position.x,o||(e.position.y=_t()*a.height,e.initialPosition.y=e.position.y)),t===je.bottom&&h.top>a.height+e.offset.y?(o||(e.position.x=_t()*a.width,e.initialPosition.x=e.position.x),e.position.y=c.top,e.initialPosition.y=e.position.y):t===je.top&&h.bottom<-e.offset.y&&(o||(e.position.x=_t()*a.width,e.initialPosition.x=e.position.x),e.position.y=c.bottom,e.initialPosition.y=e.position.y);break}}break}}}};var Kw=(n,e)=>n.default===e||n.bottom===e||n.left===e||n.right===e||n.top===e,du=class{constructor(e){this._addUpdaterIfMissing=(t,i,r)=>{let s=t.options.move.outModes;!this.updaters.has(i)&&Kw(s,i)&&this.updaters.set(i,r(this.container))},this._updateOutMode=(t,i,r,s)=>{for(let o of this.updaters.values())o.update(t,s,i,r)},this.container=e,this.updaters=new Map}init(e){this._addUpdaterIfMissing(e,Mt.bounce,t=>new ru(t)),this._addUpdaterIfMissing(e,Mt.out,t=>new uu(t)),this._addUpdaterIfMissing(e,Mt.destroy,t=>new ou(t)),this._addUpdaterIfMissing(e,Mt.none,t=>new cu(t))}isEnabled(e){return!e.destroyed&&!e.spawning}update(e,t){let i=e.options.move.outModes;this._updateOutMode(e,t,i.bottom??i.default,je.bottom),this._updateOutMode(e,t,i.left??i.default,je.left),this._updateOutMode(e,t,i.right??i.default,je.right),this._updateOutMode(e,t,i.top??i.default,je.top)}};function m0(n,e=!0){return de(this,null,function*(){n.checkVersion("3.8.1"),yield n.addParticleUpdater("outModes",t=>Promise.resolve(new du(t)),e)})}var cc=function(n){return n[n.r=1]="r",n[n.g=2]="g",n[n.b=3]="b",n[n.a=5]="a",n}(cc||{}),fu=class{constructor(){this.key="rgb",this.stringPrefix="rgb"}handleColor(e){let t=e.value,i=t.rgb??e.value;if(i.r!==void 0)return i}handleRangeColor(e){let t=e.value,i=t.rgb??e.value;if(i.r!==void 0)return{r:Be(i.r),g:Be(i.g),b:Be(i.b)}}parseString(e){if(!e.startsWith(this.stringPrefix))return;let t=/rgba?\(\s*(\d{1,3})\s*[\s,]\s*(\d{1,3})\s*[\s,]\s*(\d{1,3})\s*([\s,]\s*(0|1|0?\.\d+|(\d{1,3})%)\s*)?\)/i,i=t.exec(e),r=10;return i?{a:i.length>4?Hl(i[cc.a]):1,b:parseInt(i[cc.b],r),g:parseInt(i[cc.g],r),r:parseInt(i[cc.r],r)}:void 0}};function g0(n,e=!0){return de(this,null,function*(){n.checkVersion("3.8.1"),yield n.addColorManager(new fu,e)})}var ws=0,pu=class{init(e){let t=e.container,i=e.options.size,r=i.animation;r.enable&&(e.size.velocity=(e.retina.sizeAnimationSpeed??t.retina.sizeAnimationSpeed)/100*t.retina.reduceFactor,r.sync||(e.size.velocity*=_t()))}isEnabled(e){return!e.destroyed&&!e.spawning&&e.size.enable&&((e.size.maxLoops??ws)<=ws||(e.size.maxLoops??ws)>ws&&(e.size.loops??ws)<(e.size.maxLoops??ws))}reset(e){e.size.loops=ws}update(e,t){this.isEnabled(e)&&ql(e,e.size,!0,e.options.size.animation.destroy,t)}};function _0(n,e=!0){return de(this,null,function*(){n.checkVersion("3.8.1"),yield n.addParticleUpdater("size",()=>Promise.resolve(new pu),e)})}function v0(n,e=!0){return de(this,null,function*(){n.checkVersion("3.8.1"),yield h0(n,!1),yield u0(n,!1),yield g0(n,!1),yield r0(n,!1),yield c0(n,!1),yield l0(n,!1),yield d0(n,!1),yield m0(n,!1),yield _0(n,!1),yield n.refresh(e)})}var Do=class n{constructor(e){this.platformId=e}ngOnInit(){return de(this,null,function*(){Cr(this.platformId)&&(yield v0(Yh),yield Yh.load({id:"tsparticles",options:{fullScreen:{enable:!0,zIndex:-1},background:{color:{value:"#ffffff"}},particles:{number:{value:100,density:{enable:!0,value_area:800}},color:{value:"#b80099"},shape:{type:"circle"},opacity:{value:.5},size:{value:{min:1,max:7}},move:{enable:!0,speed:1,direction:"none",outModes:{default:"out"}},links:{enable:!0,color:"#b80099",distance:150,opacity:.5}},detectRetina:!0}}))})}static \u0275fac=function(t){return new(t||n)(ne(Ui))};static \u0275cmp=Pt({type:n,selectors:[["app-particles"]],standalone:!0,features:[Ot],decls:1,vars:0,consts:[["id","tsparticles"]],template:function(t,i){t&1&&pi(0,"div",0)},styles:["#tsparticles[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;z-index:-2}"]})};var cm;try{cm=typeof Intl<"u"&&Intl.v8BreakIterator}catch{cm=!1}var ii=(()=>{class n{constructor(t){this._platformId=t,this.isBrowser=this._platformId?Cr(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||cm)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}static{this.\u0275fac=function(i){return new(i||n)(be(Ui))}}static{this.\u0275prov=Pe({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var lc;function Jw(){if(lc==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>lc=!0}))}finally{lc=lc||!1}return lc}function Hr(n){return Jw()?n:!!n.capture}var yn=function(n){return n[n.NORMAL=0]="NORMAL",n[n.NEGATED=1]="NEGATED",n[n.INVERTED=2]="INVERTED",n}(yn||{}),mu,Es;function y0(){if(Es==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Es=!1,Es;if("scrollBehavior"in document.documentElement.style)Es=!0;else{let n=Element.prototype.scrollTo;n?Es=!/\{\s*\[native code\]\s*\}/.test(n.toString()):Es=!1}}return Es}function Po(){if(typeof document!="object"||!document)return yn.NORMAL;if(mu==null){let n=document.createElement("div"),e=n.style;n.dir="rtl",e.width="1px",e.overflow="auto",e.visibility="hidden",e.pointerEvents="none",e.position="absolute";let t=document.createElement("div"),i=t.style;i.width="2px",i.height="1px",n.appendChild(t),document.body.appendChild(n),mu=yn.NORMAL,n.scrollLeft===0&&(n.scrollLeft=1,mu=n.scrollLeft===0?yn.NEGATED:yn.INVERTED),n.remove()}return mu}var am;function Qw(){if(am==null){let n=typeof document<"u"?document.head:null;am=!!(n&&(n.createShadowRoot||n.attachShadow))}return am}function b0(n){if(Qw()){let e=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&e instanceof ShadowRoot)return e}return null}function Gr(n){return n.composedPath?n.composedPath()[0]:n.target}function x0(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function gu(n,...e){return e.length?e.some(t=>n[t]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}function _u(n,e=0){return eE(n)?Number(n):arguments.length===2?e:0}function eE(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function lm(n){return Array.isArray(n)?n:[n]}function bn(n){return n instanceof Ct?n.nativeElement:n}function tE(n){if(n.type==="characterData"&&n.target instanceof Comment)return!0;if(n.type==="childList"){for(let e=0;e<n.addedNodes.length;e++)if(!(n.addedNodes[e]instanceof Comment))return!1;for(let e=0;e<n.removedNodes.length;e++)if(!(n.removedNodes[e]instanceof Comment))return!1;return!0}return!1}var iE=(()=>{class n{create(t){return typeof MutationObserver>"u"?null:new MutationObserver(t)}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Pe({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),nE=(()=>{class n{constructor(t){this._mutationObserverFactory=t,this._observedElements=new Map,this._ngZone=ye(pt)}ngOnDestroy(){this._observedElements.forEach((t,i)=>this._cleanupObserver(i))}observe(t){let i=bn(t);return new un(r=>{let o=this._observeElement(i).pipe(rt(a=>a.filter(c=>!tE(c))),fi(a=>!!a.length)).subscribe(a=>{this._ngZone.run(()=>{r.next(a)})});return()=>{o.unsubscribe(),this._unobserveElement(i)}})}_observeElement(t){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(t))this._observedElements.get(t).count++;else{let i=new lt,r=this._mutationObserverFactory.create(s=>i.next(s));r&&r.observe(t,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(t,{observer:r,stream:i,count:1})}return this._observedElements.get(t).stream})}_unobserveElement(t){this._observedElements.has(t)&&(this._observedElements.get(t).count--,this._observedElements.get(t).count||this._cleanupObserver(t))}_cleanupObserver(t){if(this._observedElements.has(t)){let{observer:i,stream:r}=this._observedElements.get(t);i&&i.disconnect(),r.complete(),this._observedElements.delete(t)}}static{this.\u0275fac=function(i){return new(i||n)(be(iE))}}static{this.\u0275prov=Pe({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),M0=(()=>{class n{get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._disabled?this._unsubscribe():this._subscribe()}get debounce(){return this._debounce}set debounce(t){this._debounce=_u(t),this._subscribe()}constructor(t,i){this._contentObserver=t,this._elementRef=i,this.event=new bt,this._disabled=!1,this._currentSubscription=null}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let t=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?t.pipe(yr(this.debounce)):t).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static{this.\u0275fac=function(i){return new(i||n)(ne(nE),ne(Ct))}}static{this.\u0275dir=At({type:n,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",Vt],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"],standalone:!0,features:[Ii]})}}return n})();var E0=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=Qt({type:n})}static{this.\u0275inj=Jt({})}}return n})(),S0=new Set,Cs,rE=(()=>{class n{constructor(t,i){this._platform=t,this._nonce=i,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):oE}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&sE(t,this._nonce),this._matchMedia(t)}static{this.\u0275fac=function(i){return new(i||n)(be(ii),be(ga,8))}}static{this.\u0275prov=Pe({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function sE(n,e){if(!S0.has(n))try{Cs||(Cs=document.createElement("style"),e&&Cs.setAttribute("nonce",e),Cs.setAttribute("type","text/css"),document.head.appendChild(Cs)),Cs.sheet&&(Cs.sheet.insertRule(`@media ${n} {body{ }}`,0),S0.add(n))}catch(t){console.error(t)}}function oE(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var vu=(()=>{class n{constructor(t,i){this._mediaMatcher=t,this._zone=i,this._queries=new Map,this._destroySubject=new lt}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return w0(lm(t)).some(r=>this._registerQuery(r).mql.matches)}observe(t){let r=w0(lm(t)).map(o=>this._registerQuery(o).observable),s=Zs(r);return s=jc(s.pipe(Yn(1)),s.pipe(Qs(1),yr(0))),s.pipe(rt(o=>{let a={matches:!1,breakpoints:{}};return o.forEach(({matches:c,query:l})=>{a.matches=a.matches||c,a.breakpoints[l]=c}),a}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let i=this._mediaMatcher.matchMedia(t),s={observable:new un(o=>{let a=c=>this._zone.run(()=>o.next(c));return i.addListener(a),()=>{i.removeListener(a)}}).pipe(Zn(i),rt(({matches:o})=>({query:t,matches:o})),si(this._destroySubject)),mql:i};return this._queries.set(t,s),s}static{this.\u0275fac=function(i){return new(i||n)(be(rE),be(pt))}}static{this.\u0275prov=Pe({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function w0(n){return n.map(e=>e.split(",")).reduce((e,t)=>e.concat(t)).map(e=>e.trim())}var C0={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var CE=200,um=class{constructor(e,t){this._letterKeyStream=new lt,this._items=[],this._selectedItemIndex=-1,this._pressedLetters=[],this._selectedItem=new lt,this.selectedItem=this._selectedItem;let i=typeof t?.debounceInterval=="number"?t.debounceInterval:CE;t?.skipPredicate&&(this._skipPredicateFn=t.skipPredicate),this.setItems(e),this._setupKeyHandler(i)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(e){this._selectedItemIndex=e}setItems(e){this._items=e}handleKey(e){let t=e.keyCode;e.key&&e.key.length===1?this._letterKeyStream.next(e.key.toLocaleUpperCase()):(t>=65&&t<=90||t>=48&&t<=57)&&this._letterKeyStream.next(String.fromCharCode(t))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(e){this._letterKeyStream.pipe(oi(t=>this._pressedLetters.push(t)),yr(e),fi(()=>this._pressedLetters.length>0),rt(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(t=>{for(let i=1;i<this._items.length+1;i++){let r=(this._selectedItemIndex+i)%this._items.length,s=this._items[r];if(!this._skipPredicateFn?.(s)&&s.getLabel?.().toLocaleUpperCase().trim().indexOf(t)===0){this._selectedItem.next(s);break}}this._pressedLetters=[]})}},dm=class{constructor(e,t){this._items=e,this._activeItemIndex=-1,this._activeItem=Af(null),this._wrap=!1,this._typeaheadSubscription=hn.EMPTY,this._vertical=!0,this._allowedModifierKeys=[],this._homeAndEnd=!1,this._pageUpAndDown={enabled:!1,delta:10},this._skipPredicateFn=i=>i.disabled,this.tabOut=new lt,this.change=new lt,e instanceof ma?this._itemChangesSubscription=e.changes.subscribe(i=>this._itemsChanged(i.toArray())):Tf(e)&&(this._effectRef=y_(()=>this._itemsChanged(e()),{injector:t}))}skipPredicate(e){return this._skipPredicateFn=e,this}withWrap(e=!0){return this._wrap=e,this}withVerticalOrientation(e=!0){return this._vertical=e,this}withHorizontalOrientation(e){return this._horizontal=e,this}withAllowedModifierKeys(e){return this._allowedModifierKeys=e,this}withTypeAhead(e=200){this._typeaheadSubscription.unsubscribe();let t=this._getItemsArray();return this._typeahead=new um(t,{debounceInterval:typeof e=="number"?e:void 0,skipPredicate:i=>this._skipPredicateFn(i)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(i=>{this.setActiveItem(i)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(e=!0){return this._homeAndEnd=e,this}withPageUpDown(e=!0,t=10){return this._pageUpAndDown={enabled:e,delta:t},this}setActiveItem(e){let t=this._activeItem();this.updateActiveItem(e),this._activeItem()!==t&&this.change.next(this._activeItemIndex)}onKeydown(e){let t=e.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(s=>!e[s]||this._allowedModifierKeys.indexOf(s)>-1);switch(t){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let s=this._activeItemIndex-this._pageUpAndDown.delta;this._setActiveItemByIndex(s>0?s:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let s=this._activeItemIndex+this._pageUpAndDown.delta,o=this._getItemsArray().length;this._setActiveItemByIndex(s<o?s:o-1,-1);break}else return;default:(r||gu(e,"shiftKey"))&&this._typeahead?.handleKey(e);return}this._typeahead?.reset(),e.preventDefault()}get activeItemIndex(){return this._activeItemIndex}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(e){let t=this._getItemsArray(),i=typeof e=="number"?e:t.indexOf(e),r=t[i];this._activeItem.set(r??null),this._activeItemIndex=i,this._typeahead?.setCurrentSelectedItemIndex(i)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(e){this._wrap?this._setActiveInWrapMode(e):this._setActiveInDefaultMode(e)}_setActiveInWrapMode(e){let t=this._getItemsArray();for(let i=1;i<=t.length;i++){let r=(this._activeItemIndex+e*i+t.length)%t.length,s=t[r];if(!this._skipPredicateFn(s)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(e){this._setActiveItemByIndex(this._activeItemIndex+e,e)}_setActiveItemByIndex(e,t){let i=this._getItemsArray();if(i[e]){for(;this._skipPredicateFn(i[e]);)if(e+=t,!i[e])return;this.setActiveItem(e)}}_getItemsArray(){return Tf(this._items)?this._items():this._items instanceof ma?this._items.toArray():this._items}_itemsChanged(e){this._typeahead?.setItems(e);let t=this._activeItem();if(t){let i=e.indexOf(t);i>-1&&i!==this._activeItemIndex&&(this._activeItemIndex=i,this._typeahead?.setCurrentSelectedItemIndex(i))}}};var xu=class extends dm{constructor(){super(...arguments),this._origin="program"}setFocusOrigin(e){return this._origin=e,this}setActiveItem(e){super.setActiveItem(e),this.activeItem&&this.activeItem.focus(this._origin)}};function fm(n){return n.buttons===0||n.detail===0}function pm(n){let e=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!e&&e.identifier===-1&&(e.radiusX==null||e.radiusX===1)&&(e.radiusY==null||e.radiusY===1)}var TE=new et("cdk-input-modality-detector-options"),AE={ignoreKeys:[18,17,224,91,16]},R0=650,Oo=Hr({passive:!0,capture:!0}),RE=(()=>{class n{get mostRecentModality(){return this._modality.value}constructor(t,i,r,s){this._platform=t,this._mostRecentTarget=null,this._modality=new Mi(null),this._lastTouchMs=0,this._onKeydown=o=>{this._options?.ignoreKeys?.some(a=>a===o.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Gr(o))},this._onMousedown=o=>{Date.now()-this._lastTouchMs<R0||(this._modality.next(fm(o)?"keyboard":"mouse"),this._mostRecentTarget=Gr(o))},this._onTouchstart=o=>{if(pm(o)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Gr(o)},this._options=te(te({},AE),s),this.modalityDetected=this._modality.pipe(Qs(1)),this.modalityChanged=this.modalityDetected.pipe(yf()),t.isBrowser&&i.runOutsideAngular(()=>{r.addEventListener("keydown",this._onKeydown,Oo),r.addEventListener("mousedown",this._onMousedown,Oo),r.addEventListener("touchstart",this._onTouchstart,Oo)})}ngOnDestroy(){this._modality.complete(),this._platform.isBrowser&&(document.removeEventListener("keydown",this._onKeydown,Oo),document.removeEventListener("mousedown",this._onMousedown,Oo),document.removeEventListener("touchstart",this._onTouchstart,Oo))}static{this.\u0275fac=function(i){return new(i||n)(be(ii),be(pt),be(gt),be(TE,8))}}static{this.\u0275prov=Pe({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var bu=function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n}(bu||{}),IE=new et("cdk-focus-monitor-default-options"),yu=Hr({passive:!0,capture:!0}),DE=(()=>{class n{constructor(t,i,r,s,o){this._ngZone=t,this._platform=i,this._inputModalityDetector=r,this._origin=null,this._windowFocused=!1,this._originFromTouchInteraction=!1,this._elementInfo=new Map,this._monitoredElementCount=0,this._rootNodeFocusListenerCount=new Map,this._windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=window.setTimeout(()=>this._windowFocused=!1)},this._stopInputModalityDetector=new lt,this._rootNodeFocusAndBlurListener=a=>{let c=Gr(a);for(let l=c;l;l=l.parentElement)a.type==="focus"?this._onFocus(a,l):this._onBlur(a,l)},this._document=s,this._detectionMode=o?.detectionMode||bu.IMMEDIATE}monitor(t,i=!1){let r=bn(t);if(!this._platform.isBrowser||r.nodeType!==1)return Te();let s=b0(r)||this._getDocument(),o=this._elementInfo.get(r);if(o)return i&&(o.checkChildren=!0),o.subject;let a={checkChildren:i,subject:new lt,rootNode:s};return this._elementInfo.set(r,a),this._registerGlobalListeners(a),a.subject}stopMonitoring(t){let i=bn(t),r=this._elementInfo.get(i);r&&(r.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(r))}focusVia(t,i,r){let s=bn(t),o=this._getDocument().activeElement;s===o?this._getClosestElementsInfo(s).forEach(([a,c])=>this._originChanged(a,i,c)):(this._setOrigin(i),typeof s.focus=="function"&&s.focus(r))}ngOnDestroy(){this._elementInfo.forEach((t,i)=>this.stopMonitoring(i))}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?"mouse":"program"}_shouldBeAttributedToTouch(t){return this._detectionMode===bu.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,i){t.classList.toggle("cdk-focused",!!i),t.classList.toggle("cdk-touch-focused",i==="touch"),t.classList.toggle("cdk-keyboard-focused",i==="keyboard"),t.classList.toggle("cdk-mouse-focused",i==="mouse"),t.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(t,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t==="touch"&&i,this._detectionMode===bu.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?R0:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(t,i){let r=this._elementInfo.get(i),s=Gr(t);!r||!r.checkChildren&&i!==s||this._originChanged(i,this._getFocusOrigin(s),r)}_onBlur(t,i){let r=this._elementInfo.get(i);!r||r.checkChildren&&t.relatedTarget instanceof Node&&i.contains(t.relatedTarget)||(this._setClasses(i),this._emitOrigin(r,null))}_emitOrigin(t,i){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(i))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let i=t.rootNode,r=this._rootNodeFocusListenerCount.get(i)||0;r||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,yu),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,yu)}),this._rootNodeFocusListenerCount.set(i,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(si(this._stopInputModalityDetector)).subscribe(s=>{this._setOrigin(s,!0)}))}_removeGlobalListeners(t){let i=t.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let r=this._rootNodeFocusListenerCount.get(i);r>1?this._rootNodeFocusListenerCount.set(i,r-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,yu),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,yu),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,i,r){this._setClasses(t,i),this._emitOrigin(r,i),this._lastFocusOrigin=i}_getClosestElementsInfo(t){let i=[];return this._elementInfo.forEach((r,s)=>{(s===t||r.checkChildren&&s.contains(t))&&i.push([s,r])}),i}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:i,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!i||i===t||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA"||t.disabled)return!1;let s=t.labels;if(s){for(let o=0;o<s.length;o++)if(s[o].contains(i))return!0}return!1}static{this.\u0275fac=function(i){return new(i||n)(be(pt),be(ii),be(RE),be(gt,8),be(IE,8))}}static{this.\u0275prov=Pe({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),I0=(()=>{class n{constructor(t,i){this._elementRef=t,this._focusMonitor=i,this._focusOrigin=null,this.cdkFocusChange=new bt}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let t=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(t,t.nodeType===1&&t.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(i=>{this._focusOrigin=i,this.cdkFocusChange.emit(i)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription&&this._monitorSubscription.unsubscribe()}static{this.\u0275fac=function(i){return new(i||n)(ne(Ct),ne(DE))}}static{this.\u0275dir=At({type:n,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"],standalone:!0})}}return n})(),Ts=function(n){return n[n.NONE=0]="NONE",n[n.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",n[n.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",n}(Ts||{}),T0="cdk-high-contrast-black-on-white",A0="cdk-high-contrast-white-on-black",hm="cdk-high-contrast-active",D0=(()=>{class n{constructor(t,i){this._platform=t,this._document=i,this._breakpointSubscription=ye(vu).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return Ts.NONE;let t=this._document.createElement("div");t.style.backgroundColor="rgb(1,2,3)",t.style.position="absolute",this._document.body.appendChild(t);let i=this._document.defaultView||window,r=i&&i.getComputedStyle?i.getComputedStyle(t):null,s=(r&&r.backgroundColor||"").replace(/ /g,"");switch(t.remove(),s){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return Ts.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return Ts.BLACK_ON_WHITE}return Ts.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(hm,T0,A0),this._hasCheckedHighContrastMode=!0;let i=this.getHighContrastMode();i===Ts.BLACK_ON_WHITE?t.add(hm,T0):i===Ts.WHITE_ON_BLACK&&t.add(hm,A0)}}static{this.\u0275fac=function(i){return new(i||n)(be(ii),be(gt))}}static{this.\u0275prov=Pe({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var OE=new et("cdk-dir-doc",{providedIn:"root",factory:LE});function LE(){return ye(gt)}var FE=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function NE(n){let e=n?.toLowerCase()||"";return e==="auto"&&typeof navigator<"u"&&navigator?.language?FE.test(navigator.language)?"rtl":"ltr":e==="rtl"?"rtl":"ltr"}var Lo=(()=>{class n{constructor(t){if(this.value="ltr",this.change=new bt,t){let i=t.body?t.body.dir:null,r=t.documentElement?t.documentElement.dir:null;this.value=NE(i||r||"ltr")}}ngOnDestroy(){this.change.complete()}static{this.\u0275fac=function(i){return new(i||n)(be(OE,8))}}static{this.\u0275prov=Pe({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var mm=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=Qt({type:n})}static{this.\u0275inj=Jt({})}}return n})();function kE(){return!0}var UE=new et("mat-sanity-checks",{providedIn:"root",factory:kE}),ym=(()=>{class n{constructor(t,i,r){this._sanityChecks=i,this._document=r,this._hasDoneGlobalChecks=!1,t._applyBodyHighContrastModeCssClasses(),this._hasDoneGlobalChecks||(this._hasDoneGlobalChecks=!0)}_checkIsEnabled(t){return x0()?!1:typeof this._sanityChecks=="boolean"?this._sanityChecks:!!this._sanityChecks[t]}static{this.\u0275fac=function(i){return new(i||n)(be(D0),be(UE,8),be(gt))}}static{this.\u0275mod=Qt({type:n})}static{this.\u0275inj=Jt({imports:[mm,mm]})}}return n})();var rn=function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n}(rn||{}),gm=class{constructor(e,t,i,r=!1){this._renderer=e,this.element=t,this.config=i,this._animationForciblyDisabledThroughCss=r,this.state=rn.HIDDEN}fadeOut(){this._renderer.fadeOutRipple(this)}},O0=Hr({passive:!0,capture:!0}),_m=class{constructor(){this._events=new Map,this._delegateEventHandler=e=>{let t=Gr(e);t&&this._events.get(e.type)?.forEach((i,r)=>{(r===t||r.contains(t))&&i.forEach(s=>s.handleEvent(e))})}}addHandler(e,t,i,r){let s=this._events.get(t);if(s){let o=s.get(i);o?o.add(r):s.set(i,new Set([r]))}else this._events.set(t,new Map([[i,new Set([r])]])),e.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,O0)})}removeHandler(e,t,i){let r=this._events.get(e);if(!r)return;let s=r.get(t);s&&(s.delete(i),s.size===0&&r.delete(t),r.size===0&&(this._events.delete(e),document.removeEventListener(e,this._delegateEventHandler,O0)))}},L0={enterDuration:225,exitDuration:150},BE=800,F0=Hr({passive:!0,capture:!0}),N0=["mousedown","touchstart"],k0=["mouseup","mouseleave","touchend","touchcancel"],vm=class n{static{this._eventManager=new _m}constructor(e,t,i,r){this._target=e,this._ngZone=t,this._platform=r,this._isPointerDown=!1,this._activeRipples=new Map,this._pointerUpEventsRegistered=!1,r.isBrowser&&(this._containerElement=bn(i))}fadeInRipple(e,t,i={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),s=te(te({},L0),i.animation);i.centered&&(e=r.left+r.width/2,t=r.top+r.height/2);let o=i.radius||zE(e,t,r),a=e-r.left,c=t-r.top,l=s.enterDuration,h=document.createElement("div");h.classList.add("mat-ripple-element"),h.style.left=`${a-o}px`,h.style.top=`${c-o}px`,h.style.height=`${o*2}px`,h.style.width=`${o*2}px`,i.color!=null&&(h.style.backgroundColor=i.color),h.style.transitionDuration=`${l}ms`,this._containerElement.appendChild(h);let u=window.getComputedStyle(h),d=u.transitionProperty,m=u.transitionDuration,g=d==="none"||m==="0s"||m==="0s, 0s"||r.width===0&&r.height===0,v=new gm(this,h,i,g);h.style.transform="scale3d(1, 1, 1)",v.state=rn.FADING_IN,i.persistent||(this._mostRecentTransientRipple=v);let p=null;return!g&&(l||s.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let f=()=>{p&&(p.fallbackTimer=null),clearTimeout(w),this._finishRippleTransition(v)},E=()=>this._destroyRipple(v),w=setTimeout(E,l+100);h.addEventListener("transitionend",f),h.addEventListener("transitioncancel",E),p={onTransitionEnd:f,onTransitionCancel:E,fallbackTimer:w}}),this._activeRipples.set(v,p),(g||!l)&&this._finishRippleTransition(v),v}fadeOutRipple(e){if(e.state===rn.FADING_OUT||e.state===rn.HIDDEN)return;let t=e.element,i=te(te({},L0),e.config.animation);t.style.transitionDuration=`${i.exitDuration}ms`,t.style.opacity="0",e.state=rn.FADING_OUT,(e._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(e)}fadeOutAll(){this._getActiveRipples().forEach(e=>e.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(e=>{e.config.persistent||e.fadeOut()})}setupTriggerEvents(e){let t=bn(e);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,N0.forEach(i=>{n._eventManager.addHandler(this._ngZone,i,t,this)}))}handleEvent(e){e.type==="mousedown"?this._onMousedown(e):e.type==="touchstart"?this._onTouchStart(e):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{k0.forEach(t=>{this._triggerElement.addEventListener(t,this,F0)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(e){e.state===rn.FADING_IN?this._startFadeOutTransition(e):e.state===rn.FADING_OUT&&this._destroyRipple(e)}_startFadeOutTransition(e){let t=e===this._mostRecentTransientRipple,{persistent:i}=e.config;e.state=rn.VISIBLE,!i&&(!t||!this._isPointerDown)&&e.fadeOut()}_destroyRipple(e){let t=this._activeRipples.get(e)??null;this._activeRipples.delete(e),this._activeRipples.size||(this._containerRect=null),e===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),e.state=rn.HIDDEN,t!==null&&(e.element.removeEventListener("transitionend",t.onTransitionEnd),e.element.removeEventListener("transitioncancel",t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),e.element.remove()}_onMousedown(e){let t=fm(e),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+BE;!this._target.rippleDisabled&&!t&&!i&&(this._isPointerDown=!0,this.fadeInRipple(e.clientX,e.clientY,this._target.rippleConfig))}_onTouchStart(e){if(!this._target.rippleDisabled&&!pm(e)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=e.changedTouches;if(t)for(let i=0;i<t.length;i++)this.fadeInRipple(t[i].clientX,t[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(e=>{let t=e.state===rn.VISIBLE||e.config.terminateOnPointerUp&&e.state===rn.FADING_IN;!e.config.persistent&&t&&e.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let e=this._triggerElement;e&&(N0.forEach(t=>n._eventManager.removeHandler(t,e,this)),this._pointerUpEventsRegistered&&(k0.forEach(t=>e.removeEventListener(t,this,F0)),this._pointerUpEventsRegistered=!1))}};function zE(n,e,t){let i=Math.max(Math.abs(n-t.left),Math.abs(n-t.right)),r=Math.max(Math.abs(e-t.top),Math.abs(e-t.bottom));return Math.sqrt(i*i+r*r)}var U0=new et("mat-ripple-global-options"),bm=(()=>{class n{get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}constructor(t,i,r,s,o){this._elementRef=t,this._animationMode=o,this.radius=0,this._disabled=!1,this._isInitialized=!1,this._globalOptions=s||{},this._rippleRenderer=new vm(this,i,t,r)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:te(te(te({},this._globalOptions.animation),this._animationMode==="NoopAnimations"?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,i=0,r){return typeof t=="number"?this._rippleRenderer.fadeInRipple(t,i,te(te({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,te(te({},this.rippleConfig),t))}static{this.\u0275fac=function(i){return new(i||n)(ne(Ct),ne(pt),ne(ii),ne(U0,8),ne(Mr,8))}}static{this.\u0275dir=At({type:n,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(i,r){i&2&&Di("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"],standalone:!0})}}return n})();var uc=class{attach(e){return this._attachedHost=e,e.attach(this)}detach(){let e=this._attachedHost;e!=null&&(this._attachedHost=null,e.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(e){this._attachedHost=e}},xm=class extends uc{constructor(e,t,i,r,s){super(),this.component=e,this.viewContainerRef=t,this.injector=i,this.componentFactoryResolver=r,this.projectableNodes=s}},Fo=class extends uc{constructor(e,t,i,r){super(),this.templateRef=e,this.viewContainerRef=t,this.context=i,this.injector=r}get origin(){return this.templateRef.elementRef}attach(e,t=this.context){return this.context=t,super.attach(e)}detach(){return this.context=void 0,super.detach()}},Mm=class extends uc{constructor(e){super(),this.element=e instanceof Ct?e.nativeElement:e}},Sm=class{constructor(){this._isDisposed=!1,this.attachDomPortal=null}hasAttached(){return!!this._attachedPortal}attach(e){if(e instanceof xm)return this._attachedPortal=e,this.attachComponentPortal(e);if(e instanceof Fo)return this._attachedPortal=e,this.attachTemplatePortal(e);if(this.attachDomPortal&&e instanceof Mm)return this._attachedPortal=e,this.attachDomPortal(e)}detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(e){this._disposeFn=e}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var B0=(()=>{class n extends Fo{constructor(t,i){super(t,i)}static{this.\u0275fac=function(i){return new(i||n)(ne(Jn),ne(An))}}static{this.\u0275dir=At({type:n,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],standalone:!0,features:[Rn]})}}return n})();var Mu=(()=>{class n extends Sm{constructor(t,i,r){super(),this._componentFactoryResolver=t,this._viewContainerRef=i,this._isInitialized=!1,this.attached=new bt,this.attachDomPortal=s=>{this._document;let o=s.element;o.parentNode;let a=this._document.createComment("dom-portal");s.setAttachedHost(this),o.parentNode.insertBefore(a,o),this._getRootNode().appendChild(o),this._attachedPortal=s,super.setDisposeFn(()=>{a.parentNode&&a.parentNode.replaceChild(o,a)})},this._document=r}get portal(){return this._attachedPortal}set portal(t){this.hasAttached()&&!t&&!this._isInitialized||(this.hasAttached()&&super.detach(),t&&super.attach(t),this._attachedPortal=t||null)}get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(t){t.setAttachedHost(this);let i=t.viewContainerRef!=null?t.viewContainerRef:this._viewContainerRef,s=(t.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(t.component),o=i.createComponent(s,i.length,t.injector||i.injector,t.projectableNodes||void 0);return i!==this._viewContainerRef&&this._getRootNode().appendChild(o.hostView.rootNodes[0]),super.setDisposeFn(()=>o.destroy()),this._attachedPortal=t,this._attachedRef=o,this.attached.emit(o),o}attachTemplatePortal(t){t.setAttachedHost(this);let i=this._viewContainerRef.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=t,this._attachedRef=i,this.attached.emit(i),i}_getRootNode(){let t=this._viewContainerRef.element.nativeElement;return t.nodeType===t.ELEMENT_NODE?t:t.parentNode}static{this.\u0275fac=function(i){return new(i||n)(ne(Zc),ne(An),ne(gt))}}static{this.\u0275dir=At({type:n,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],standalone:!0,features:[Rn]})}}return n})();var VE=20,HE=(()=>{class n{constructor(t,i,r){this._ngZone=t,this._platform=i,this._scrolled=new lt,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=r}register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)))}deregister(t){let i=this.scrollContainers.get(t);i&&(i.unsubscribe(),this.scrollContainers.delete(t))}scrolled(t=VE){return this._platform.isBrowser?new un(i=>{this._globalSubscription||this._addGlobalListener();let r=t>0?this._scrolled.pipe(_f(t)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):Te()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((t,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(t,i){let r=this.getAncestorScrollContainers(t);return this.scrolled(i).pipe(fi(s=>!s||r.indexOf(s)>-1))}getAncestorScrollContainers(t){let i=[];return this.scrollContainers.forEach((r,s)=>{this._scrollableContainsElement(s,t)&&i.push(s)}),i}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(t,i){let r=bn(i),s=t.getElementRef().nativeElement;do if(r==s)return!0;while(r=r.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>{let t=this._getWindow();return ls(t.document,"scroll").subscribe(()=>this._scrolled.next())})}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}static{this.\u0275fac=function(i){return new(i||n)(be(pt),be(ii),be(gt,8))}}static{this.\u0275prov=Pe({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),z0=(()=>{class n{constructor(t,i,r,s){this.elementRef=t,this.scrollDispatcher=i,this.ngZone=r,this.dir=s,this._destroyed=new lt,this._elementScrolled=new un(o=>this.ngZone.runOutsideAngular(()=>ls(this.elementRef.nativeElement,"scroll").pipe(si(this._destroyed)).subscribe(o)))}ngOnInit(){this.scrollDispatcher.register(this)}ngOnDestroy(){this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(t){let i=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";t.left==null&&(t.left=r?t.end:t.start),t.right==null&&(t.right=r?t.start:t.end),t.bottom!=null&&(t.top=i.scrollHeight-i.clientHeight-t.bottom),r&&Po()!=yn.NORMAL?(t.left!=null&&(t.right=i.scrollWidth-i.clientWidth-t.left),Po()==yn.INVERTED?t.left=t.right:Po()==yn.NEGATED&&(t.left=t.right?-t.right:t.right)):t.right!=null&&(t.left=i.scrollWidth-i.clientWidth-t.right),this._applyScrollToOptions(t)}_applyScrollToOptions(t){let i=this.elementRef.nativeElement;y0()?i.scrollTo(t):(t.top!=null&&(i.scrollTop=t.top),t.left!=null&&(i.scrollLeft=t.left))}measureScrollOffset(t){let i="left",r="right",s=this.elementRef.nativeElement;if(t=="top")return s.scrollTop;if(t=="bottom")return s.scrollHeight-s.clientHeight-s.scrollTop;let o=this.dir&&this.dir.value=="rtl";return t=="start"?t=o?r:i:t=="end"&&(t=o?i:r),o&&Po()==yn.INVERTED?t==i?s.scrollWidth-s.clientWidth-s.scrollLeft:s.scrollLeft:o&&Po()==yn.NEGATED?t==i?s.scrollLeft+s.scrollWidth-s.clientWidth:-s.scrollLeft:t==i?s.scrollLeft:s.scrollWidth-s.clientWidth-s.scrollLeft}static{this.\u0275fac=function(i){return new(i||n)(ne(Ct),ne(HE),ne(pt),ne(Lo,8))}}static{this.\u0275dir=At({type:n,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]],standalone:!0})}}return n})(),GE=20,wm=(()=>{class n{constructor(t,i,r){this._platform=t,this._change=new lt,this._changeListener=s=>{this._change.next(s)},this._document=r,i.runOutsideAngular(()=>{if(t.isBrowser){let s=this._getWindow();s.addEventListener("resize",this._changeListener),s.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){let t=this._getWindow();t.removeEventListener("resize",this._changeListener),t.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){let t=this.getViewportScrollPosition(),{width:i,height:r}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+r,right:t.left+i,height:r,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let t=this._document,i=this._getWindow(),r=t.documentElement,s=r.getBoundingClientRect(),o=-s.top||t.body.scrollTop||i.scrollY||r.scrollTop||0,a=-s.left||t.body.scrollLeft||i.scrollX||r.scrollLeft||0;return{top:o,left:a}}change(t=GE){return t>0?this._change.pipe(_f(t)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let t=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:t.innerWidth,height:t.innerHeight}:{width:0,height:0}}static{this.\u0275fac=function(i){return new(i||n)(be(ii),be(pt),be(gt,8))}}static{this.\u0275prov=Pe({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var Em=class{constructor(e){this._box=e,this._destroyed=new lt,this._resizeSubject=new lt,this._elementObservables=new Map,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(t=>this._resizeSubject.next(t)))}observe(e){return this._elementObservables.has(e)||this._elementObservables.set(e,new un(t=>{let i=this._resizeSubject.subscribe(t);return this._resizeObserver?.observe(e,{box:this._box}),()=>{this._resizeObserver?.unobserve(e),i.unsubscribe(),this._elementObservables.delete(e)}}).pipe(fi(t=>t.some(i=>i.target===e)),xf({bufferSize:1,refCount:!0}),si(this._destroyed))),this._elementObservables.get(e)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},V0=(()=>{class n{constructor(){this._observers=new Map,this._ngZone=ye(pt),typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,t]of this._observers)t.destroy();this._observers.clear(),typeof ResizeObserver<"u"}observe(t,i){let r=i?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new Em(r)),this._observers.get(r).observe(t)}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=Pe({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var Rm=["*"];function qE(n,e){n&1&&to(0)}var $E=["tabListContainer"],YE=["tabList"],ZE=["tabListInner"],KE=["nextPaginator"],JE=["previousPaginator"],QE=n=>({animationDuration:n}),eC=(n,e)=>({value:n,params:e});function tC(n,e){}var iC=["tabBodyWrapper"],nC=["tabHeader"];function rC(n,e){}function sC(n,e){if(n&1&&wt(0,rC,0,0,"ng-template",12),n&2){let t=xt().$implicit;We("cdkPortalOutlet",t.templateLabel)}}function oC(n,e){if(n&1&&Ye(0),n&2){let t=xt().$implicit;ai(t.textLabel)}}function aC(n,e){if(n&1){let t=Er();Ae(0,"div",7,2),gi("click",function(){let r=Wt(t),s=r.$implicit,o=r.$index,a=xt(),c=Si(1);return jt(a._handleClick(s,c,o))})("cdkFocusChange",function(r){let s=Wt(t).$index,o=xt();return jt(o._tabFocusChanged(r,s))}),pi(2,"span",8)(3,"div",9),Ae(4,"span",10)(5,"span",11),wt(6,sC,1,1,null,12)(7,oC,1,1),Ie()()()}if(n&2){let t=e.$implicit,i=e.$index,r=Si(1),s=xt();Qc(t.labelClass),Di("mdc-tab--active",s.selectedIndex===i),We("id",s._getTabLabelId(i))("disabled",t.disabled)("fitInkBarToContent",s.fitInkBarToContent),In("tabIndex",s._getTabIndex(i))("aria-posinset",i+1)("aria-setsize",s._tabs.length)("aria-controls",s._getTabContentId(i))("aria-selected",s.selectedIndex===i)("aria-label",t.ariaLabel||null)("aria-labelledby",!t.ariaLabel&&t.ariaLabelledby?t.ariaLabelledby:null),Me(3),We("matRippleTrigger",r)("matRippleDisabled",t.disabled||s.disableRipple),Me(3),el(t.templateLabel?6:7)}}function cC(n,e){n&1&&to(0)}function lC(n,e){if(n&1){let t=Er();Ae(0,"mat-tab-body",13),gi("_onCentered",function(){Wt(t);let r=xt();return jt(r._removeTabBodyWrapperHeight())})("_onCentering",function(r){Wt(t);let s=xt();return jt(s._setTabBodyWrapperHeight(r))}),Ie()}if(n&2){let t=e.$implicit,i=e.$index,r=xt();Qc(t.bodyClass),Di("mat-mdc-tab-body-active",r.selectedIndex===i),We("id",r._getTabContentId(i))("content",t.content)("position",t.position)("origin",t.origin)("animationDuration",r.animationDuration)("preserveContent",r.preserveContent),In("tabindex",r.contentTabIndex!=null&&r.selectedIndex===i?r.contentTabIndex:null)("aria-labelledby",r._getTabLabelId(i))("aria-hidden",r.selectedIndex!==i)}}var hC=new et("MatTabContent"),uC=(()=>{class n{constructor(t){this.template=t}static{this.\u0275fac=function(i){return new(i||n)(ne(Jn))}}static{this.\u0275dir=At({type:n,selectors:[["","matTabContent",""]],standalone:!0,features:[Dn([{provide:hC,useExisting:n}])]})}}return n})(),dC=new et("MatTabLabel"),W0=new et("MAT_TAB"),fC=(()=>{class n extends B0{constructor(t,i,r){super(t,i),this._closestTab=r}static{this.\u0275fac=function(i){return new(i||n)(ne(Jn),ne(An),ne(W0,8))}}static{this.\u0275dir=At({type:n,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],standalone:!0,features:[Dn([{provide:dC,useExisting:n}]),Rn]})}}return n})(),j0=new et("MAT_TAB_GROUP"),Im=(()=>{class n{get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t)}get content(){return this._contentPortal}constructor(t,i){this._viewContainerRef=t,this._closestTabGroup=i,this.disabled=!1,this._explicitContent=void 0,this.textLabel="",this._contentPortal=null,this._stateChanges=new lt,this.position=null,this.origin=null,this.isActive=!1}ngOnChanges(t){(t.hasOwnProperty("textLabel")||t.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new Fo(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(t){t&&t._closestTab===this&&(this._templateLabel=t)}static{this.\u0275fac=function(i){return new(i||n)(ne(An),ne(j0,8))}}static{this.\u0275cmp=Pt({type:n,selectors:[["mat-tab"]],contentQueries:function(i,r,s){if(i&1&&(hs(s,fC,5),hs(s,uC,7,Jn)),i&2){let o;Xt(o=qt())&&(r.templateLabel=o.first),Xt(o=qt())&&(r._explicitContent=o.first)}},viewQuery:function(i,r){if(i&1&&Pi(Jn,7),i&2){let s;Xt(s=qt())&&(r._implicitContent=s.first)}},hostAttrs:["hidden",""],inputs:{disabled:[2,"disabled","disabled",Vt],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass"},exportAs:["matTab"],standalone:!0,features:[Dn([{provide:W0,useExisting:n}]),Ii,Kn,Ot],ngContentSelectors:Rm,decls:1,vars:0,template:function(i,r){i&1&&(eo(),wt(0,qE,1,0,"ng-template"))},encapsulation:2})}}return n})(),Cm="mdc-tab-indicator--active",H0="mdc-tab-indicator--no-transition",Tm=class{constructor(e){this._items=e}hide(){this._items.forEach(e=>e.deactivateInkBar())}alignToElement(e){let t=this._items.find(r=>r.elementRef.nativeElement===e),i=this._currentItem;if(t!==i&&(i?.deactivateInkBar(),t)){let r=i?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(r),this._currentItem=t}}},pC=(()=>{class n{constructor(){this._elementRef=ye(Ct),this._fitToContent=!1}get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(t){let i=this._elementRef.nativeElement;if(!t||!i.getBoundingClientRect||!this._inkBarContentElement){i.classList.add(Cm);return}let r=i.getBoundingClientRect(),s=t.width/r.width,o=t.left-r.left;i.classList.add(H0),this._inkBarContentElement.style.setProperty("transform",`translateX(${o}px) scaleX(${s})`),i.getBoundingClientRect(),i.classList.remove(H0),i.classList.add(Cm),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(Cm)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,i=this._inkBarElement=t.createElement("span"),r=this._inkBarContentElement=t.createElement("span");i.className="mdc-tab-indicator",r.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",i.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let t=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;t.appendChild(this._inkBarElement)}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275dir=At({type:n,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",Vt]},features:[Ii]})}}return n})();var X0=(()=>{class n extends pC{constructor(t){super(),this.elementRef=t,this.disabled=!1}focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static{this.\u0275fac=function(i){return new(i||n)(ne(Ct))}}static{this.\u0275dir=At({type:n,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(i,r){i&2&&(In("aria-disabled",!!r.disabled),Di("mat-mdc-tab-disabled",r.disabled))},inputs:{disabled:[2,"disabled","disabled",Vt]},standalone:!0,features:[Ii,Rn]})}}return n})(),G0=Hr({passive:!0}),mC=650,gC=100,_C=(()=>{class n{get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let i=isNaN(t)?0:t;this._selectedIndex!=i&&(this._selectedIndexChanged=!0,this._selectedIndex=i,this._keyManager&&this._keyManager.updateActiveItem(i))}constructor(t,i,r,s,o,a,c){this._elementRef=t,this._changeDetectorRef=i,this._viewportRuler=r,this._dir=s,this._ngZone=o,this._platform=a,this._animationMode=c,this._scrollDistance=0,this._selectedIndexChanged=!1,this._destroyed=new lt,this._showPaginationControls=!1,this._disableScrollAfter=!0,this._disableScrollBefore=!0,this._stopScrolling=new lt,this.disablePagination=!1,this._selectedIndex=0,this.selectFocusedIndex=new bt,this.indexFocused=new bt,this._sharedResizeObserver=ye(V0),this._injector=ye(xr),o.runOutsideAngular(()=>{ls(t.nativeElement,"mouseleave").pipe(si(this._destroyed)).subscribe(()=>{this._stopInterval()})})}ngAfterViewInit(){ls(this._previousPaginator.nativeElement,"touchstart",G0).pipe(si(this._destroyed)).subscribe(()=>{this._handlePaginatorPress("before")}),ls(this._nextPaginator.nativeElement,"touchstart",G0).pipe(si(this._destroyed)).subscribe(()=>{this._handlePaginatorPress("after")})}ngAfterContentInit(){let t=this._dir?this._dir.change:Te("ltr"),i=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(yr(32),si(this._destroyed)),r=this._viewportRuler.change(150).pipe(si(this._destroyed)),s=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new xu(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(this._selectedIndex),va(s,{injector:this._injector}),Xc(t,r,i,this._items.changes,this._itemsResized()).pipe(si(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),s()})}),this._keyManager.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(o=>{this.indexFocused.emit(o),this._setTabFocus(o)})}_itemsResized(){return typeof ResizeObserver!="function"?Cn:this._items.changes.pipe(Zn(this._items),Ri(t=>new un(i=>this._ngZone.runOutsideAngular(()=>{let r=new ResizeObserver(s=>i.next(s));return t.forEach(s=>r.observe(s.elementRef.nativeElement)),()=>{r.disconnect()}}))),Qs(1),fi(t=>t.some(i=>i.contentRect.width>0&&i.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!gu(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let i=this._items.get(this.focusIndex);i&&!i.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t))}break;default:this._keyManager.onKeydown(t)}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:!0}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let i=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?i.scrollLeft=0:i.scrollLeft=i.scrollWidth-i.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,i=this._getLayoutDirection()==="ltr"?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(i)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){let i=this._tabListContainer.nativeElement.offsetWidth,r=(t=="before"?-1:1)*i/3;return this._scrollTo(this._scrollDistance+r)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;let i=this._items?this._items.toArray()[t]:null;if(!i)return;let r=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:s,offsetWidth:o}=i.elementRef.nativeElement,a,c;this._getLayoutDirection()=="ltr"?(a=s,c=a+o):(c=this._tabListInner.nativeElement.offsetWidth-s,a=c-o);let l=this.scrollDistance,h=this.scrollDistance+r;a<l?this.scrollDistance-=l-a:c>h&&(this.scrollDistance+=Math.min(c-h,a-l))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let t=this._tabListInner.nativeElement.scrollWidth,i=this._elementRef.nativeElement.offsetWidth,r=t-i>=5;r||(this.scrollDistance=0),r!==this._showPaginationControls&&(this._showPaginationControls=r,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let t=this._tabListInner.nativeElement.scrollWidth,i=this._tabListContainer.nativeElement.offsetWidth;return t-i||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,i=t?t.elementRef.nativeElement:null;i?this._inkBar.alignToElement(i):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,i){i&&i.button!=null&&i.button!==0||(this._stopInterval(),t_(mC,gC).pipe(si(Xc(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:r,distance:s}=this._scrollHeader(t);(s===0||s>=r)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let i=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(i,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:i,distance:this._scrollDistance}}static{this.\u0275fac=function(i){return new(i||n)(ne(Ct),ne(Ji),ne(wm),ne(Lo,8),ne(pt),ne(ii),ne(Mr,8))}}static{this.\u0275dir=At({type:n,inputs:{disablePagination:[2,"disablePagination","disablePagination",Vt],selectedIndex:[2,"selectedIndex","selectedIndex",nl]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"},features:[Ii]})}}return n})(),vC=(()=>{class n extends _C{constructor(t,i,r,s,o,a,c){super(t,i,r,s,o,a,c),this.disableRipple=!1}ngAfterContentInit(){this._inkBar=new Tm(this._items),super.ngAfterContentInit()}_itemSelected(t){t.preventDefault()}static{this.\u0275fac=function(i){return new(i||n)(ne(Ct),ne(Ji),ne(wm),ne(Lo,8),ne(pt),ne(ii),ne(Mr,8))}}static{this.\u0275cmp=Pt({type:n,selectors:[["mat-tab-header"]],contentQueries:function(i,r,s){if(i&1&&hs(s,X0,4),i&2){let o;Xt(o=qt())&&(r._items=o)}},viewQuery:function(i,r){if(i&1&&(Pi($E,7),Pi(YE,7),Pi(ZE,7),Pi(KE,5),Pi(JE,5)),i&2){let s;Xt(s=qt())&&(r._tabListContainer=s.first),Xt(s=qt())&&(r._tabList=s.first),Xt(s=qt())&&(r._tabListInner=s.first),Xt(s=qt())&&(r._nextPaginator=s.first),Xt(s=qt())&&(r._previousPaginator=s.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(i,r){i&2&&Di("mat-mdc-tab-header-pagination-controls-enabled",r._showPaginationControls)("mat-mdc-tab-header-rtl",r._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",Vt]},standalone:!0,features:[Ii,Rn,Ot],ngContentSelectors:Rm,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(i,r){if(i&1){let s=Er();eo(),Ae(0,"div",5,0),gi("click",function(){return Wt(s),jt(r._handlePaginatorClick("before"))})("mousedown",function(a){return Wt(s),jt(r._handlePaginatorPress("before",a))})("touchend",function(){return Wt(s),jt(r._stopInterval())}),pi(2,"div",6),Ie(),Ae(3,"div",7,1),gi("keydown",function(a){return Wt(s),jt(r._handleKeydown(a))}),Ae(5,"div",8,2),gi("cdkObserveContent",function(){return Wt(s),jt(r._onContentChanges())}),Ae(7,"div",9,3),to(9),Ie()()(),Ae(10,"div",10,4),gi("mousedown",function(a){return Wt(s),jt(r._handlePaginatorPress("after",a))})("click",function(){return Wt(s),jt(r._handlePaginatorClick("after"))})("touchend",function(){return Wt(s),jt(r._stopInterval())}),pi(12,"div",6),Ie()}i&2&&(Di("mat-mdc-tab-header-pagination-disabled",r._disableScrollBefore),We("matRippleDisabled",r._disableScrollBefore||r.disableRipple),Me(3),Di("_mat-animation-noopable",r._animationMode==="NoopAnimations"),Me(2),In("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby||null),Me(5),Di("mat-mdc-tab-header-pagination-disabled",r._disableScrollAfter),We("matRippleDisabled",r._disableScrollAfter||r.disableRipple))},dependencies:[bm,M0],styles:[".mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mdc-tab-indicator .mdc-tab-indicator__content{transition-duration:var(--mat-tab-animation-duration, 250ms)}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;outline:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px;border-color:var(--mat-tab-header-pagination-icon-color, var(--mat-app-on-surface))}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}.mat-mdc-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1;border-bottom-style:solid;border-bottom-width:var(--mat-tab-header-divider-height);border-bottom-color:var(--mat-tab-header-divider-color, var(--mat-app-surface-variant))}.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container{border-bottom:none;border-top-style:solid;border-top-width:var(--mat-tab-header-divider-height);border-top-color:var(--mat-tab-header-divider-color, var(--mat-app-surface-variant))}.mat-mdc-tab-labels{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:flex-end}.cdk-drop-list .mat-mdc-tab-labels,.mat-mdc-tab-labels.cdk-drop-list{min-height:var(--mdc-secondary-navigation-tab-container-height)}.mat-mdc-tab::before{margin:5px}.cdk-high-contrast-active .mat-mdc-tab[aria-disabled=true]{color:GrayText}"],encapsulation:2})}}return n})(),yC=new et("MAT_TABS_CONFIG"),bC={translateTab:rl("translateTab",[sl("center, void, left-origin-center, right-origin-center",Pn({transform:"none",visibility:"visible"})),sl("left",Pn({transform:"translate3d(-100%, 0, 0)",minHeight:"1px",visibility:"hidden"})),sl("right",Pn({transform:"translate3d(100%, 0, 0)",minHeight:"1px",visibility:"hidden"})),ps("* => left, * => right, left => center, right => center",fs("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)")),ps("void => left-origin-center",[Pn({transform:"translate3d(-100%, 0, 0)",visibility:"hidden"}),fs("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)")]),ps("void => right-origin-center",[Pn({transform:"translate3d(100%, 0, 0)",visibility:"hidden"}),fs("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)")])])},xC=(()=>{class n extends Mu{constructor(t,i,r,s){super(t,i,s),this._host=r,this._centeringSub=hn.EMPTY,this._leavingSub=hn.EMPTY}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(Zn(this._host._isCenterPosition(this._host._position))).subscribe(t=>{this._host._content&&t&&!this.hasAttached()&&this.attach(this._host._content)}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this.detach()})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static{this.\u0275fac=function(i){return new(i||n)(ne(Zc),ne(An),ne(Mf(()=>q0)),ne(gt))}}static{this.\u0275dir=At({type:n,selectors:[["","matTabBodyHost",""]],standalone:!0,features:[Rn]})}}return n})(),q0=(()=>{class n{set position(t){this._positionIndex=t,this._computePositionAnimationState()}constructor(t,i,r){this._elementRef=t,this._dir=i,this._dirChangeSubscription=hn.EMPTY,this._translateTabComplete=new lt,this._onCentering=new bt,this._beforeCentering=new bt,this._afterLeavingCenter=new bt,this._onCentered=new bt(!0),this.animationDuration="500ms",this.preserveContent=!1,i&&(this._dirChangeSubscription=i.change.subscribe(s=>{this._computePositionAnimationState(s),r.markForCheck()})),this._translateTabComplete.subscribe(s=>{this._isCenterPosition(s.toState)&&this._isCenterPosition(this._position)&&this._onCentered.emit(),this._isCenterPosition(s.fromState)&&!this._isCenterPosition(this._position)&&this._afterLeavingCenter.emit()})}ngOnInit(){this._position=="center"&&this.origin!=null&&(this._position=this._computePositionFromOrigin(this.origin))}ngOnDestroy(){this._dirChangeSubscription.unsubscribe(),this._translateTabComplete.complete()}_onTranslateTabStarted(t){let i=this._isCenterPosition(t.toState);this._beforeCentering.emit(i),i&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(t){return t=="center"||t=="left-origin-center"||t=="right-origin-center"}_computePositionAnimationState(t=this._getLayoutDirection()){this._positionIndex<0?this._position=t=="ltr"?"left":"right":this._positionIndex>0?this._position=t=="ltr"?"right":"left":this._position="center"}_computePositionFromOrigin(t){let i=this._getLayoutDirection();return i=="ltr"&&t<=0||i=="rtl"&&t>0?"left-origin-center":"right-origin-center"}static{this.\u0275fac=function(i){return new(i||n)(ne(Ct),ne(Lo,8),ne(Ji))}}static{this.\u0275cmp=Pt({type:n,selectors:[["mat-tab-body"]],viewQuery:function(i,r){if(i&1&&Pi(Mu,5),i&2){let s;Xt(s=qt())&&(r._portalHost=s.first)}},hostAttrs:[1,"mat-mdc-tab-body"],inputs:{_content:[0,"content","_content"],origin:"origin",animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_afterLeavingCenter:"_afterLeavingCenter",_onCentered:"_onCentered"},standalone:!0,features:[Ot],decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(i,r){if(i&1){let s=Er();Ae(0,"div",1,0),gi("@translateTab.start",function(a){return Wt(s),jt(r._onTranslateTabStarted(a))})("@translateTab.done",function(a){return Wt(s),jt(r._translateTabComplete.next(a))}),wt(2,tC,0,0,"ng-template",2),Ie()}i&2&&We("@translateTab",__(3,eC,r._position,g_(1,QE,r.animationDuration)))},dependencies:[xC,z0],styles:['.mat-mdc-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;outline:0;flex-basis:100%}.mat-mdc-tab-body.mat-mdc-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active{overflow-y:hidden}.mat-mdc-tab-body-content{height:100%;overflow:auto}.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content{overflow:hidden}.mat-mdc-tab-body-content[style*="visibility: hidden"]{display:none}'],encapsulation:2,data:{animation:[bC.translateTab]}})}}return n})(),MC=0,SC=!0,$0=(()=>{class n{get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(t){this._fitInkBarToContent=t,this._changeDetectorRef.markForCheck()}get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=isNaN(t)?null:t}get animationDuration(){return this._animationDuration}set animationDuration(t){let i=t+"";this._animationDuration=/^\d+$/.test(i)?t+"ms":i}get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=isNaN(t)?null:t}get backgroundColor(){return this._backgroundColor}set backgroundColor(t){if(!SC)throw new Error("mat-tab-group background color must be set through the Sass theming API");let i=this._elementRef.nativeElement.classList;i.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),t&&i.add("mat-tabs-with-background",`mat-background-${t}`),this._backgroundColor=t}constructor(t,i,r,s){this._elementRef=t,this._changeDetectorRef=i,this._animationMode=s,this._tabs=new ma,this._indexToSelect=0,this._lastFocusedTabIndex=null,this._tabBodyWrapperHeight=0,this._tabsSubscription=hn.EMPTY,this._tabLabelSubscription=hn.EMPTY,this._fitInkBarToContent=!1,this.stretchTabs=!0,this.dynamicHeight=!1,this._selectedIndex=null,this.headerPosition="above",this.disablePagination=!1,this.disableRipple=!1,this.preserveContent=!1,this.selectedIndexChange=new bt,this.focusChange=new bt,this.animationDone=new bt,this.selectedTabChange=new bt(!0),this._isServer=!ye(ii).isBrowser,this._groupId=MC++,this.animationDuration=r&&r.animationDuration?r.animationDuration:"500ms",this.disablePagination=r&&r.disablePagination!=null?r.disablePagination:!1,this.dynamicHeight=r&&r.dynamicHeight!=null?r.dynamicHeight:!1,r?.contentTabIndex!=null&&(this.contentTabIndex=r.contentTabIndex),this.preserveContent=!!r?.preserveContent,this.fitInkBarToContent=r&&r.fitInkBarToContent!=null?r.fitInkBarToContent:!1,this.stretchTabs=r&&r.stretchTabs!=null?r.stretchTabs:!0}ngAfterContentChecked(){let t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){let i=this._selectedIndex==null;if(!i){this.selectedTabChange.emit(this._createChangeEvent(t));let r=this._tabBodyWrapper.nativeElement;r.style.minHeight=r.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((r,s)=>r.isActive=s===t),i||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((i,r)=>{i.position=r-t,this._selectedIndex!=null&&i.position==0&&!i.origin&&(i.origin=t-this._selectedIndex)}),this._selectedIndex!==t&&(this._selectedIndex=t,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let t=this._clampTabIndex(this._indexToSelect);if(t===this._selectedIndex){let i=this._tabs.toArray(),r;for(let s=0;s<i.length;s++)if(i[s].isActive){this._indexToSelect=this._selectedIndex=s,this._lastFocusedTabIndex=null,r=i[s];break}!r&&i[t]&&Promise.resolve().then(()=>{i[t].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(t))})}this._changeDetectorRef.markForCheck()})}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(Zn(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(i=>i._closestTabGroup===this||!i._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(t){let i=this._tabHeader;i&&(i.focusIndex=t)}_focusChanged(t){this._lastFocusedTabIndex=t,this.focusChange.emit(this._createChangeEvent(t))}_createChangeEvent(t){let i=new Am;return i.index=t,this._tabs&&this._tabs.length&&(i.tab=this._tabs.toArray()[t]),i}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Xc(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t){return`mat-tab-label-${this._groupId}-${t}`}_getTabContentId(t){return`mat-tab-content-${this._groupId}-${t}`}_setTabBodyWrapperHeight(t){if(!this.dynamicHeight||!this._tabBodyWrapperHeight)return;let i=this._tabBodyWrapper.nativeElement;i.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(i.style.height=t+"px")}_removeTabBodyWrapperHeight(){let t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height="",this.animationDone.emit()}_handleClick(t,i,r){i.focusIndex=r,t.disabled||(this.selectedIndex=r)}_getTabIndex(t){let i=this._lastFocusedTabIndex??this.selectedIndex;return t===i?0:-1}_tabFocusChanged(t,i){t&&t!=="mouse"&&t!=="touch"&&(this._tabHeader.focusIndex=i)}static{this.\u0275fac=function(i){return new(i||n)(ne(Ct),ne(Ji),ne(yC,8),ne(Mr,8))}}static{this.\u0275cmp=Pt({type:n,selectors:[["mat-tab-group"]],contentQueries:function(i,r,s){if(i&1&&hs(s,Im,5),i&2){let o;Xt(o=qt())&&(r._allTabs=o)}},viewQuery:function(i,r){if(i&1&&(Pi(iC,5),Pi(nC,5)),i&2){let s;Xt(s=qt())&&(r._tabBodyWrapper=s.first),Xt(s=qt())&&(r._tabHeader=s.first)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:10,hostBindings:function(i,r){i&2&&(Qc("mat-"+(r.color||"primary")),If("--mat-tab-animation-duration",r.animationDuration),Di("mat-mdc-tab-group-dynamic-height",r.dynamicHeight)("mat-mdc-tab-group-inverted-header",r.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",r.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",Vt],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",Vt],dynamicHeight:[2,"dynamicHeight","dynamicHeight",Vt],selectedIndex:[2,"selectedIndex","selectedIndex",nl],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",nl],disablePagination:[2,"disablePagination","disablePagination",Vt],disableRipple:[2,"disableRipple","disableRipple",Vt],preserveContent:[2,"preserveContent","preserveContent",Vt],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],standalone:!0,features:[Dn([{provide:j0,useExisting:n}]),Ii,Ot],ngContentSelectors:Rm,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-mdc-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","mat-mdc-tab-body-active","class","content","position","origin","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-mdc-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","id","content","position","origin","animationDuration","preserveContent"]],template:function(i,r){if(i&1){let s=Er();eo(),Ae(0,"mat-tab-header",3,0),gi("indexFocused",function(a){return Wt(s),jt(r._focusChanged(a))})("selectFocusedIndex",function(a){return Wt(s),jt(r.selectedIndex=a)}),Pf(2,aC,8,17,"div",4,Df),Ie(),wt(4,cC,1,0),Ae(5,"div",5,1),Pf(7,lC,1,13,"mat-tab-body",6,Df),Ie()}i&2&&(We("selectedIndex",r.selectedIndex||0)("disableRipple",r.disableRipple)("disablePagination",r.disablePagination)("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby),Me(2),Of(r._tabs),Me(2),el(r._isServer?4:-1),Me(),Di("_mat-animation-noopable",r._animationMode==="NoopAnimations"),Me(2),Of(r._tabs))},dependencies:[vC,X0,I0,bm,Mu,q0],styles:['.mdc-tab{min-width:90px;padding:0 24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;z-index:1}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab--active .mdc-tab__text-label{transition-delay:100ms}._mat-animation-noopable .mdc-tab__text-label{transition:none}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transition:var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}._mat-animation-noopable .mdc-tab-indicator__content,.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none;background:none;height:var(--mdc-secondary-navigation-tab-container-height);font-family:var(--mat-tab-header-label-text-font, var(--mat-app-title-small-font));font-size:var(--mat-tab-header-label-text-size, var(--mat-app-title-small-size));letter-spacing:var(--mat-tab-header-label-text-tracking, var(--mat-app-title-small-tracking));line-height:var(--mat-tab-header-label-text-line-height, var(--mat-app-title-small-line-height));font-weight:var(--mat-tab-header-label-text-weight, var(--mat-app-title-small-weight))}.mat-mdc-tab.mdc-tab{flex-grow:0}.mat-mdc-tab .mdc-tab-indicator__content--underline{border-color:var(--mdc-tab-indicator-active-indicator-color, var(--mat-app-primary));border-top-width:var(--mdc-tab-indicator-active-indicator-height);border-radius:var(--mdc-tab-indicator-active-indicator-shape)}.mat-mdc-tab:hover .mdc-tab__text-label{color:var(--mat-tab-header-inactive-hover-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab:focus .mdc-tab__text-label{color:var(--mat-tab-header-inactive-focus-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label{color:var(--mat-tab-header-active-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,.mat-mdc-tab.mdc-tab--active .mat-ripple-element{background-color:var(--mat-tab-header-active-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label{color:var(--mat-tab-header-active-hover-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-hover-indicator-color, var(--mat-app-primary))}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label{color:var(--mat-tab-header-active-focus-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-focus-indicator-color, var(--mat-app-primary))}.mat-mdc-tab.mat-mdc-tab-disabled{opacity:.4;pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content{pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element{background-color:var(--mat-tab-header-disabled-ripple-color)}.mat-mdc-tab .mdc-tab__ripple::before{content:"";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-header-inactive-label-text-color, var(--mat-app-on-surface));display:inline-flex;align-items:center}.mat-mdc-tab .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs>.mat-mdc-tab-header .mat-mdc-tab{flex-grow:1}.mat-mdc-tab-group{display:flex;flex-direction:column;max-width:100%}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-tab-header-with-background-background-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-focus-indicator::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-focus-indicator::before{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mdc-tab__ripple::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header{flex-direction:column-reverse}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline{align-self:flex-start}.mat-mdc-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-mdc-tab-body-wrapper._mat-animation-noopable{transition:none !important;animation:none !important}'],encapsulation:2})}}return n})(),Am=class{};var Y0=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=Qt({type:n})}static{this.\u0275inj=Jt({imports:[ym,ym]})}}return n})();var EC={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},g4=Dt(te({},EC),{"[class.ng-submitted]":"isSubmitted"});var CC=new et("CallSetDisabledState",{providedIn:"root",factory:()=>Z0}),Z0="always";var TC=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=Qt({type:n})}static{this.\u0275inj=Jt({})}}return n})();var K0=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:CC,useValue:t.callSetDisabledState??Z0}]}}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=Qt({type:n})}static{this.\u0275inj=Jt({imports:[TC]})}}return n})();var No=class n{profile={name:"Jannatul Fardouse",title:"Software Developer | Full Stack | C++ Specialist",location:"Chemnitz, Germany",email:"jannatul.fardouse.cse@gmail.com",linkedin:"https://www.linkedin.com/in/jannatul-fardouse-a9896819a/",github:"https://github.com/JannatulFardouse",summary:"Passionate developer with strong C++, Angular, and .NET skills. Currently a Working Student at Digitronic GmbH. Seeking a full-time developer role in Germany or Austria.",skills:["Angular 17","C#","C++","ASP.NET Core","MySQL","HTML5","CSS3","Bootstrap","JavaScript ES6"],experiences:[{company:"Digitronic Computer System GmbH",position:"Software Developer (Workstudent)",period:"Jan 2024 \u2013 Present",responsibilities:["Developed Communication System Software (Web + Mobile)","Tech: Angular 17, ASP.NET Core, SQL Server","Also contributed to German Police Management Software"]},{company:"TU Chemnitz \u2013 Philosophy Dept",position:"Student Assistant (Frontend Developer)",period:"Aug 2022 \u2013 Apr 2024",responsibilities:["Built and translated TU Chemnitz\u2019s philosophy website frontend","Used HTML, CSS, JS, MySQL, and Google Translate API","WCAG 2.0.1 accessibility-compliant"]},{company:"TU Chemnitz \u2013 C++ Lab",position:"Teaching Assistant",period:"Mar 2022 \u2013 Jul 2022",responsibilities:["Supervised and supported students in solving C++ lab problems","Provided technical assistance during practical sessions"]},{company:"TU Chemnitz \u2013 Mood Matrix Project",position:"Student Assistant (Data & Docker)",period:"Aug 2021 \u2013 Dec 2021",responsibilities:["Handled preprocessing of physiological and behavioral datasets","Worked with Docker containers and data pipelines"]},{company:"TU Chemnitz \u2013 Research Intern",position:"Log Data Analyst",period:"Nov 2019 \u2013 Mar 2020",responsibilities:["Performed visualizations and clustering on smart home log data","Used Python, Seaborn, Pandas, Matplotlib"]},{company:"London Grace International School, Dhaka",position:"Teacher",period:"May 2018 \u2013 Sep 2019",responsibilities:["Taught Math, Science, and English in an international school environment","Built strong classroom communication and leadership skills"]}],projects:[{title:"TU Chemnitz Website Development",url:"https://www.tu-chemnitz.de/phil/institute.php.en"},{title:"ATM in C++",url:"https://github.com/JannatulFardouse/ATM/blob/main/atm.cpp"},{title:"Work Together Project",url:"https://github.com/JannatulFardouse/AMDWorkTogetherProject"},{title:"Panda Commerce",url:"https://github.com/JannatulFardouse/panda-commerce"},{title:"Hot Gadgets",url:"https://github.com/JannatulFardouse/hot-gadgets"}],education:[{degree:"M.Sc. in Automotive Software Engineering",university:"Technische Universit\xE4t Chemnitz, Germany",status:"Ongoing"},{degree:"B.Sc. in Computer Science & Engineering",university:"Eastern University, Bangladesh",grade:"CGPA: 1.47 out of 4 (German Grade Scale)"}],certifications:[{title:"Complete C++ for Beginners",source:"Udemy"},{title:"Full Stack Web Development",source:"Programming Hero"},{title:"JavaScript Basics",source:"w3schools"}],languages:["English (Fluent)","German (B1)"],softSkills:["Teamwork","Problem Solving","Leadership","Communication"]};getProfile(){return this.profile}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Pe({token:n,factory:n.\u0275fac,providedIn:"root"})};function AC(n,e){n&1&&dn(0)}function RC(n,e){n&1&&dn(0)}function IC(n,e){n&1&&dn(0)}function DC(n,e){n&1&&dn(0)}function PC(n,e){n&1&&dn(0)}function OC(n,e){if(n&1&&(Sr(0),Ae(1,"mat-tab-group",7)(2,"mat-tab",8),wt(3,AC,1,0,"ng-container",9),Ie(),Ae(4,"mat-tab",10),wt(5,RC,1,0,"ng-container",9),Ie(),Ae(6,"mat-tab",11),wt(7,IC,1,0,"ng-container",9),Ie(),Ae(8,"mat-tab",12),wt(9,DC,1,0,"ng-container",9),Ie(),Ae(10,"mat-tab",13),wt(11,PC,1,0,"ng-container",9),Ie()(),wr()),n&2){xt();let t=Si(4),i=Si(6),r=Si(8),s=Si(10),o=Si(12);Me(3),We("ngTemplateOutlet",t),Me(2),We("ngTemplateOutlet",i),Me(2),We("ngTemplateOutlet",r),Me(2),We("ngTemplateOutlet",s),Me(2),We("ngTemplateOutlet",o)}}function LC(n,e){n&1&&dn(0)}function FC(n,e){if(n&1&&(Sr(0),wt(1,LC,1,0,"ng-container",9),wr()),n&2){xt(2);let t=Si(4);Me(),We("ngTemplateOutlet",t)}}function NC(n,e){n&1&&dn(0)}function kC(n,e){if(n&1&&(Sr(0),wt(1,NC,1,0,"ng-container",9),wr()),n&2){xt(2);let t=Si(6);Me(),We("ngTemplateOutlet",t)}}function UC(n,e){n&1&&dn(0)}function BC(n,e){if(n&1&&(Sr(0),wt(1,UC,1,0,"ng-container",9),wr()),n&2){xt(2);let t=Si(8);Me(),We("ngTemplateOutlet",t)}}function zC(n,e){n&1&&dn(0)}function VC(n,e){if(n&1&&(Sr(0),wt(1,zC,1,0,"ng-container",9),wr()),n&2){xt(2);let t=Si(10);Me(),We("ngTemplateOutlet",t)}}function HC(n,e){n&1&&dn(0)}function GC(n,e){if(n&1&&(Sr(0),wt(1,HC,1,0,"ng-container",9),wr()),n&2){xt(2);let t=Si(12);Me(),We("ngTemplateOutlet",t)}}function WC(n,e){if(n&1){let t=Er();Ae(0,"div",14)(1,"div",15)(2,"h3"),Ye(3),Ie()(),Ae(4,"div"),Sr(5,16),wt(6,FC,2,1,"ng-container",17)(7,kC,2,1,"ng-container",17)(8,BC,2,1,"ng-container",17)(9,VC,2,1,"ng-container",17)(10,GC,2,1,"ng-container",17),wr(),Ie(),Ae(11,"div",18)(12,"button",19),gi("click",function(){Wt(t);let r=xt();return jt(r.prevTab())}),Ye(13,"Previous"),Ie(),Ae(14,"button",19),gi("click",function(){Wt(t);let r=xt();return jt(r.nextTab())}),Ye(15,"Next"),Ie()()()}if(n&2){let t=xt();Me(3),ai(t.tabLabels[t.selectedTabIndex]),Me(),We("@fadeInOut",void 0),Me(),We("ngSwitch",t.tabLabels[t.selectedTabIndex]),Me(),We("ngSwitchCase","Skills"),Me(),We("ngSwitchCase","Experience"),Me(),We("ngSwitchCase","Education"),Me(),We("ngSwitchCase","Certifications"),Me(),We("ngSwitchCase","Languages & Soft Skills"),Me(2),We("disabled",t.selectedTabIndex===0),Me(2),We("disabled",t.selectedTabIndex===t.tabLabels.length-1)}}function jC(n,e){if(n&1&&(Ae(0,"span",22),Ye(1),Ie()),n&2){let t=e.$implicit;Me(),ai(t)}}function XC(n,e){if(n&1&&(Ae(0,"div",20),wt(1,jC,2,1,"span",21),Ie()),n&2){let t=xt();Me(),We("ngForOf",t.profile.skills)}}function qC(n,e){if(n&1&&(Ae(0,"li"),Ye(1),Ie()),n&2){let t=e.$implicit;Me(),ai(t)}}function $C(n,e){if(n&1&&(Ae(0,"div",24)(1,"h3"),Ye(2),Ie(),Ae(3,"h4"),Ye(4),Ie(),Ae(5,"p")(6,"em"),Ye(7),Ie()(),Ae(8,"ul"),wt(9,qC,2,1,"li",25),Ie()()),n&2){let t=e.$implicit;Me(2),ai(t.position),Me(2),ai(t.company),Me(3),ai(t.period),Me(2),We("ngForOf",t.responsibilities)}}function YC(n,e){if(n&1&&wt(0,$C,10,4,"div",23),n&2){let t=xt();We("ngForOf",t.profile.experiences)}}function ZC(n,e){if(n&1&&(Ae(0,"small"),Ye(1),Ie()),n&2){let t=xt().$implicit;Me(),ai(t.status)}}function KC(n,e){if(n&1&&(Ae(0,"small"),Ye(1),Ie()),n&2){let t=xt().$implicit;Me(),ai(t.grade)}}function JC(n,e){if(n&1&&(Ae(0,"div",27)(1,"h4"),Ye(2),Ie(),Ae(3,"p"),Ye(4),Ie(),wt(5,ZC,2,1,"small",28)(6,KC,2,1,"small",28),Ie()),n&2){let t=e.$implicit;Me(2),ai(t.degree),Me(2),ai(t.university),Me(),We("ngIf",t.status),Me(),We("ngIf",t.grade)}}function QC(n,e){if(n&1&&wt(0,JC,7,4,"div",26),n&2){let t=xt();We("ngForOf",t.profile.education)}}function eT(n,e){if(n&1&&(Ae(0,"li"),Ye(1),Ae(2,"strong"),Ye(3),Ie()()),n&2){let t=e.$implicit;Me(),ya(" ",t.title," \u2013 "),Me(2),ai(t.source)}}function tT(n,e){if(n&1&&(Ae(0,"ul",29),wt(1,eT,4,2,"li",25),Ie()),n&2){let t=xt();Me(),We("ngForOf",t.profile.certifications)}}function iT(n,e){if(n&1&&(Ae(0,"p")(1,"strong"),Ye(2,"Languages:"),Ie(),Ye(3),Ie(),Ae(4,"p")(5,"strong"),Ye(6,"Soft Skills:"),Ie(),Ye(7),Ie()),n&2){let t=xt();Me(3),ya(" ",t.profile.languages.join(", "),""),Me(4),ya(" ",t.profile.softSkills.join(", "),"")}}var Su=class n{constructor(e,t){this.profileService=e;this.breakpointObserver=t}profile;isMobile=!1;selectedTab="Skills";selectedTabIndex=0;tabLabels=["Skills","Experience","Education","Certifications","Languages & Soft Skills"];ngOnInit(){this.profile=this.profileService.getProfile(),this.breakpointObserver.observe([C0.Handset]).subscribe(e=>{this.isMobile=e.matches})}nextTab(){this.selectedTabIndex<this.tabLabels.length-1&&this.selectedTabIndex++}prevTab(){this.selectedTabIndex>0&&this.selectedTabIndex--}static \u0275fac=function(t){return new(t||n)(ne(No),ne(vu))};static \u0275cmp=Pt({type:n,selectors:[["app-tabs-section"]],standalone:!0,features:[Ot],decls:13,vars:2,consts:[["mobileView",""],["skillsTab",""],["experienceTab",""],["educationTab",""],["certificationsTab",""],["languagesTab",""],[4,"ngIf","ngIfElse"],["animationDuration","500ms","dynamicHeight","","mat-align-tabs","start",1,"custom-tabs"],["label","Skills"],[4,"ngTemplateOutlet"],["label","Experience"],["label","Education"],["label","Certifications"],["label","Languages & Soft Skills"],[1,"mobile-paginator"],[1,"pagination-header"],[3,"ngSwitch"],[4,"ngSwitchCase"],[1,"pagination-controls"],[3,"click","disabled"],[1,"skill-badges"],["class","badge",4,"ngFor","ngForOf"],[1,"badge"],["class","experience-card",4,"ngFor","ngForOf"],[1,"experience-card"],[4,"ngFor","ngForOf"],["class","edu-block",4,"ngFor","ngForOf"],[1,"edu-block"],[4,"ngIf"],[1,"cert-list"]],template:function(t,i){if(t&1&&wt(0,OC,12,5,"ng-container",6)(1,WC,16,10,"ng-template",null,0,us)(3,XC,2,1,"ng-template",null,1,us)(5,YC,1,1,"ng-template",null,2,us)(7,QC,1,1,"ng-template",null,3,us)(9,tT,2,1,"ng-template",null,4,us)(11,iT,8,2,"ng-template",null,5,us),t&2){let r=Si(2);We("ngIf",!i.isMobile)("ngIfElse",r)}},dependencies:[ds,T_,A_,D_,R_,I_,Y0,Im,$0,E0,K0],styles:["[_nghost-%COMP%]     .mat-mdc-tab .mdc-tab__text-label{color:#b80099!important;font-weight:600!important;opacity:1!important}[_nghost-%COMP%]     .mat-mdc-tab.mdc-tab--active .mdc-tab__text-label{color:#b80099!important}[_nghost-%COMP%]     .mat-mdc-tab:hover .mdc-tab__text-label{transform:scale(1.05);cursor:pointer}.custom-tabs[_ngcontent-%COMP%]{margin-top:2rem}.custom-tabs[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{background:#f3e5f5;color:#b80099;padding:.5rem 1rem;border-radius:20px;margin:.3rem;display:inline-block}.custom-tabs[_ngcontent-%COMP%]   .experience-card[_ngcontent-%COMP%], .custom-tabs[_ngcontent-%COMP%]   .edu-block[_ngcontent-%COMP%]{padding:1rem;border-left:3px solid #b80099;background:#fafafa;margin-bottom:1rem;border-radius:6px}.custom-tabs[_ngcontent-%COMP%]   .cert-list[_ngcontent-%COMP%]{list-style-type:none;padding:0}.custom-tabs[_ngcontent-%COMP%]   .cert-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0}.mobile-paginator[_ngcontent-%COMP%]{text-align:center;margin:2rem 0}.mobile-paginator[_ngcontent-%COMP%]   .pagination-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.2rem;color:#b80099;margin-bottom:1rem}.mobile-paginator[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:1rem;margin-top:1rem}.mobile-paginator[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#b80099;color:#fff;border:none;border-radius:6px;padding:.5rem 1.2rem;font-weight:600;cursor:pointer}.mobile-paginator[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background-color:#b80099;cursor:not-allowed}"],data:{animation:[rl("fadeInOut",[ps(":enter",[Pn({opacity:0}),fs("400ms ease-in",Pn({opacity:1}))]),ps(":leave",[fs("400ms ease-out",Pn({opacity:0}))])])]}})};var wu=class n{constructor(e){this.profileService=e}profile;ngOnInit(){this.profile=this.profileService.getProfile()}static \u0275fac=function(t){return new(t||n)(ne(No))};static \u0275cmp=Pt({type:n,selectors:[["app-home"]],standalone:!0,features:[Ot],decls:18,vars:3,consts:[[1,"home"],[1,"container"],[1,"intro"],[1,"name"],[1,"title"],[1,"summary"],[1,"buttons"],["href","/assets/JannatulFardouse_621982.pdf","download","",1,"btn"],["href","#contact",1,"btn-outline"]],template:function(t,i){t&1&&(pi(0,"app-particles"),Ae(1,"section",0)(2,"div",1)(3,"div",2)(4,"h1",3),Ye(5,"Hi, I'm "),Ae(6,"span"),Ye(7),Ie()(),Ae(8,"h2",4),Ye(9),Ie(),Ae(10,"p",5),Ye(11),Ie(),Ae(12,"div",6)(13,"a",7),Ye(14,"Download CV"),Ie(),Ae(15,"a",8),Ye(16,"Contact Me"),Ie()()(),pi(17,"app-tabs-section"),Ie()()),t&2&&(Me(7),ai(i.profile.name),Me(2),ai(i.profile.title),Me(2),ai(i.profile.summary))},dependencies:[ds,Do,Su],styles:['@keyframes _ngcontent-%COMP%_textureMove{0%{background-position:0 0}to{background-position:100% 100%}}.home-content[_ngcontent-%COMP%]{position:relative;z-index:10;padding:2rem}.home[_ngcontent-%COMP%]{position:relative;padding:5rem 1rem;min-height:100vh;display:flex;align-items:center;justify-content:center;background-image:url(/assets/your-texture.png);background-repeat:repeat;background-size:100px 100px;animation:_ngcontent-%COMP%_textureMove 20s linear infinite;overflow:hidden}.home[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;z-index:1}.home[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{position:relative;z-index:2;max-width:1200px;width:100%;margin:0 auto;padding:2rem;display:flex;flex-direction:column;align-items:center}.home[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]{background:#0006;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);padding:2rem;border-radius:1rem;text-align:center;margin-bottom:4rem;color:#fff}.home[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:2.5rem;font-weight:700;color:#fff}.home[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#b80099}.home[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:600;color:#fff;margin-top:.5rem}.home[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]{font-size:1.1rem;color:#f0f0f0;margin-top:1rem;line-height:1.6;max-width:700px;margin-inline:auto}.home[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{margin-top:2rem;display:flex;gap:1rem;justify-content:center}.home[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .home[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn-outline[_ngcontent-%COMP%]{padding:.75rem 1.5rem;font-size:1rem;border-radius:50px;transition:all .3s ease;text-decoration:none}.home[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{background:#b80099;color:#fff}.home[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover{background:#85006f}.home[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn-outline[_ngcontent-%COMP%]{border:2px solid #b80099;color:#fff}.home[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn-outline[_ngcontent-%COMP%]:hover{background:#b80099;color:#fff}.home[_ngcontent-%COMP%]   app-three-scene[_ngcontent-%COMP%]{width:100%;height:400px;border-radius:1rem;overflow:hidden;box-shadow:0 10px 25px #bc629e1a}']})};var Eu=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Pt({type:n,selectors:[["app-projects"]],standalone:!0,features:[Ot],decls:2,vars:0,template:function(t,i){t&1&&(Ae(0,"p"),Ye(1,"projects works!"),Ie())}})};var Cu=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Pt({type:n,selectors:[["app-contact"]],standalone:!0,features:[Ot],decls:2,vars:0,template:function(t,i){t&1&&(Ae(0,"p"),Ye(1,"contact works!"),Ie())}})};var md="175";var gb=0,og=1,_b=2;var ag=1,vb=2,Gn=3,fr=0,Ci=1,Wn=2,gr=0,Ls=1,cg=2,lg=3,hg=4,yb=5,Jr=100,bb=101,xb=102,Mb=103,Sb=104,wb=200,Eb=201,Cb=202,Tb=203,Xu=204,qu=205,Ab=206,Rb=207,Ib=208,Db=209,Pb=210,Ob=211,Lb=212,Fb=213,Nb=214,gd=0,_d=1,vd=2,Fs=3,yd=4,bd=5,xd=6,Md=7,ug=0,kb=1,Ub=2,_r=0,Bb=1,zb=2,Vb=3,Hb=4,Gb=5,Wb=6,jb=7;var Qm=300,Vs=301,Hs=302,Sd=303,wd=304,Pc=306,$u=1e3,Kr=1001,Yu=1002,on=1003,Xb=1004;var Oc=1005;var wn=1006,Ed=1007;var rs=1008;var jn=1009,dg=1010,fg=1011,ea=1012,Cd=1013,ss=1014,Xn=1015,ta=1016,Td=1017,Ad=1018,ia=1020,pg=35902,mg=1021,gg=1022,an=1023,_g=1024,vg=1025,Zo=1026,na=1027,yg=1028,Rd=1029,bg=1030,Id=1031;var Dd=1033,Lc=33776,Fc=33777,Nc=33778,kc=33779,Pd=35840,Od=35841,Ld=35842,Fd=35843,Nd=36196,kd=37492,Ud=37496,Bd=37808,zd=37809,Vd=37810,Hd=37811,Gd=37812,Wd=37813,jd=37814,Xd=37815,qd=37816,$d=37817,Yd=37818,Zd=37819,Kd=37820,Jd=37821,Uc=36492,Qd=36494,ef=36495,xg=36283,tf=36284,nf=36285,rf=36286;var _c=2300,Zu=2301,ju=2302,eg=2400,tg=2401,ig=2402;var qb=3200,$b=3201;var Yb=0,Zb=1,vr="",Xi="srgb",Ns="srgb-linear",vc="linear",mt="srgb";var Ps=7680;var ng=519,Kb=512,Jb=513,Qb=514,Mg=515,ex=516,tx=517,ix=518,nx=519,rg=35044;var Sg="300 es",zn=2e3,yc=2001;var pr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},_i=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Dm=Math.PI/180,Ku=180/Math.PI;function Bc(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_i[n&255]+_i[n>>8&255]+_i[n>>16&255]+_i[n>>24&255]+"-"+_i[e&255]+_i[e>>8&255]+"-"+_i[e>>16&15|64]+_i[e>>24&255]+"-"+_i[t&63|128]+_i[t>>8&255]+"-"+_i[t>>16&255]+_i[t>>24&255]+_i[i&255]+_i[i>>8&255]+_i[i>>16&255]+_i[i>>24&255]).toLowerCase()}function Ze(n,e,t){return Math.max(e,Math.min(t,n))}function nT(n,e){return(n%e+e)%e}function Pm(n,e,t){return(1-t)*n+t*e}function dc(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Li(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var vt=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ze=class n{constructor(e,t,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],m=i[5],g=i[8],v=r[0],p=r[3],f=r[6],E=r[1],w=r[4],x=r[7],D=r[2],I=r[5],C=r[8];return s[0]=o*v+a*E+c*D,s[3]=o*p+a*w+c*I,s[6]=o*f+a*x+c*C,s[1]=l*v+h*E+u*D,s[4]=l*p+h*w+u*I,s[7]=l*f+h*x+u*C,s[2]=d*v+m*E+g*D,s[5]=d*p+m*w+g*I,s[8]=d*f+m*x+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*s*h+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*s,m=l*s-o*c,g=t*u+i*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(r*l-h*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(h*t-r*c)*v,e[5]=(r*s-a*t)*v,e[6]=m*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Om.makeScale(e,t)),this}rotate(e){return this.premultiply(Om.makeRotation(-e)),this}translate(e,t){return this.premultiply(Om.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Om=new ze;function wg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function bc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function rx(){let n=bc("canvas");return n.style.display="block",n}var Q0={};function zc(n){n in Q0||(Q0[n]=!0,console.warn(n))}function sx(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function ox(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ax(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var eb=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tb=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rT(){let n={enabled:!0,workingColorSpace:Ns,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===mt&&(r.r=dr(r.r),r.g=dr(r.g),r.b=dr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===mt&&(r.r=Yo(r.r),r.g=Yo(r.g),r.b=Yo(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===vr?vc:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ns]:{primaries:e,whitePoint:i,transfer:vc,toXYZ:eb,fromXYZ:tb,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xi},outputColorSpaceConfig:{drawingBufferColorSpace:Xi}},[Xi]:{primaries:e,whitePoint:i,transfer:mt,toXYZ:eb,fromXYZ:tb,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xi}}}),n}var st=rT();function dr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Yo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ko,Ju=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ko===void 0&&(ko=bc("canvas")),ko.width=e.width,ko.height=e.height;let r=ko.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ko}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=bc("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=dr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(dr(t[i]/255)*255):t[i]=dr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},sT=0,Ko=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sT++}),this.uuid=Bc(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Lm(r[o].image)):s.push(Lm(r[o]))}else s=Lm(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Lm(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ju.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var oT=0,os=(()=>{class n extends pr{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=Kr,s=Kr,o=wn,a=rs,c=an,l=jn,h=n.DEFAULT_ANISOTROPY,u=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oT++}),this.uuid=Bc(),this.name="",this.source=new Ko(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $u:t.x=t.x-Math.floor(t.x);break;case Kr:t.x=t.x<0?0:1;break;case Yu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $u:t.y=t.y-Math.floor(t.y);break;case Kr:t.y=t.y<0?0:1;break;case Yu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=Qm,n.DEFAULT_ANISOTROPY=1,n})(),Ut=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],m=c[5],g=c[9],v=c[2],p=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(l+1)/2,x=(m+1)/2,D=(f+1)/2,I=(h+d)/4,C=(u+v)/4,L=(g+p)/4;return w>x&&w>D?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=I/i,s=C/i):x>D?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=I/r,s=L/r):D<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),i=C/s,r=L/s),this.set(i,r,s,t),this}let E=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(u-v)/E,this.z=(d-h)/E,this.w=Math.acos((l+m+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qu=class extends pr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t);let r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new os(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ko(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hn=class extends Qu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},xc=class extends os{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ed=class extends os{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mr=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],h=i[r+2],u=i[r+3],d=s[o+0],m=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(u!==v||c!==d||l!==m||h!==g){let p=1-a,f=c*d+l*m+h*g+u*v,E=f>=0?1:-1,w=1-f*f;if(w>Number.EPSILON){let D=Math.sqrt(w),I=Math.atan2(D,f*E);p=Math.sin(p*I)/D,a=Math.sin(a*I)/D}let x=a*E;if(c=c*p+d*x,l=l*p+m*x,h=h*p+g*x,u=u*p+v*x,p===1-a){let D=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=D,l*=D,h*=D,u*=D}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],h=i[r+3],u=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+h*u+c*m-l*d,e[t+1]=c*g+h*d+l*u-a*m,e[t+2]=l*g+h*m+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(r/2),u=a(s/2),d=c(i/2),m=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"YZX":this._x=d*h*u+l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u-d*m*g;break;case"XZY":this._x=d*h*u-l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(i>a&&i>u){let m=2*Math.sqrt(1+i-a-u);this._w=(h-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>u){let m=2*Math.sqrt(1+a-i-u);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+u-i-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-i*l,this._z=s*h+o*l+i*c-r*a,this._w=o*h-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ib.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ib.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),h=2*(a*t-s*r),u=2*(s*i-o*t);return this.x=t+c*l+o*u-a*h,this.y=i+c*h+a*l-s*u,this.z=r+c*u+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Fm.copy(this).projectOnVector(e),this.sub(Fm)}reflect(e){return this.sub(Fm.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Fm=new U,ib=new mr,Qr=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,xn):xn.fromBufferAttribute(s,o),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tu.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Tu.copy(i.boundingBox)),Tu.applyMatrix4(e.matrixWorld),this.union(Tu)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fc),Au.subVectors(this.max,fc),Uo.subVectors(e.a,fc),Bo.subVectors(e.b,fc),zo.subVectors(e.c,fc),Wr.subVectors(Bo,Uo),jr.subVectors(zo,Bo),As.subVectors(Uo,zo);let t=[0,-Wr.z,Wr.y,0,-jr.z,jr.y,0,-As.z,As.y,Wr.z,0,-Wr.x,jr.z,0,-jr.x,As.z,0,-As.x,-Wr.y,Wr.x,0,-jr.y,jr.x,0,-As.y,As.x,0];return!Nm(t,Uo,Bo,zo,Au)||(t=[1,0,0,0,1,0,0,0,1],!Nm(t,Uo,Bo,zo,Au))?!1:(Ru.crossVectors(Wr,jr),t=[Ru.x,Ru.y,Ru.z],Nm(t,Uo,Bo,zo,Au))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ar[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ar[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ar[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ar[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ar[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ar[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ar[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ar[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ar),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ar=[new U,new U,new U,new U,new U,new U,new U,new U],xn=new U,Tu=new Qr,Uo=new U,Bo=new U,zo=new U,Wr=new U,jr=new U,As=new U,fc=new U,Au=new U,Ru=new U,Rs=new U;function Nm(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Rs.fromArray(n,s);let a=r.x*Math.abs(Rs.x)+r.y*Math.abs(Rs.y)+r.z*Math.abs(Rs.z),c=e.dot(Rs),l=t.dot(Rs),h=i.dot(Rs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var aT=new Qr,pc=new U,km=new U,Jo=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):aT.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pc.subVectors(e,this.center);let t=pc.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(pc,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(km.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pc.copy(e.center).add(km)),this.expandByPoint(pc.copy(e.center).sub(km))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},cr=new U,Um=new U,Iu=new U,Xr=new U,Bm=new U,Du=new U,zm=new U,td=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=cr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cr.copy(this.origin).addScaledVector(this.direction,t),cr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Um.copy(e).add(t).multiplyScalar(.5),Iu.copy(t).sub(e).normalize(),Xr.copy(this.origin).sub(Um);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Iu),a=Xr.dot(this.direction),c=-Xr.dot(Iu),l=Xr.lengthSq(),h=Math.abs(1-o*o),u,d,m,g;if(h>0)if(u=o*c-a,d=o*a-c,g=s*h,u>=0)if(d>=-g)if(d<=g){let v=1/h;u*=v,d*=v,m=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),m=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),m=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Um).addScaledVector(Iu,d),m}intersectSphere(e,t){cr.subVectors(e.center,this.origin);let i=cr.dot(this.direction),r=cr.dot(cr)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,cr)!==null}intersectTriangle(e,t,i,r,s){Bm.subVectors(t,e),Du.subVectors(i,e),zm.crossVectors(Bm,Du);let o=this.direction.dot(zm),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xr.subVectors(this.origin,e);let c=a*this.direction.dot(Du.crossVectors(Xr,Du));if(c<0)return null;let l=a*this.direction.dot(Bm.cross(Xr));if(l<0||c+l>o)return null;let h=-a*Xr.dot(zm);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Kt=class n{constructor(e,t,i,r,s,o,a,c,l,h,u,d,m,g,v,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,h,u,d,m,g,v,p)}set(e,t,i,r,s,o,a,c,l,h,u,d,m,g,v,p){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=g,f[11]=v,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/Vo.setFromMatrixColumn(e,0).length(),s=1/Vo.setFromMatrixColumn(e,1).length(),o=1/Vo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=o*h,m=o*u,g=a*h,v=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=m+g*l,t[5]=d-v*l,t[9]=-a*c,t[2]=v-d*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,m=c*u,g=l*h,v=l*u;t[0]=d+v*a,t[4]=g*a-m,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=v+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,m=c*u,g=l*h,v=l*u;t[0]=d-v*a,t[4]=-o*u,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=v-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,m=o*u,g=a*h,v=a*u;t[0]=c*h,t[4]=g*l-m,t[8]=d*l+v,t[1]=c*u,t[5]=v*l+d,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,m=o*l,g=a*c,v=a*l;t[0]=c*h,t[4]=v-d*u,t[8]=g*u+m,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=m*u+g,t[10]=d-v*u}else if(e.order==="XZY"){let d=o*c,m=o*l,g=a*c,v=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+v,t[5]=o*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=a*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cT,e,lT)}lookAt(e,t,i){let r=this.elements;return Wi.subVectors(e,t),Wi.lengthSq()===0&&(Wi.z=1),Wi.normalize(),qr.crossVectors(i,Wi),qr.lengthSq()===0&&(Math.abs(i.z)===1?Wi.x+=1e-4:Wi.z+=1e-4,Wi.normalize(),qr.crossVectors(i,Wi)),qr.normalize(),Pu.crossVectors(Wi,qr),r[0]=qr.x,r[4]=Pu.x,r[8]=Wi.x,r[1]=qr.y,r[5]=Pu.y,r[9]=Wi.y,r[2]=qr.z,r[6]=Pu.z,r[10]=Wi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],m=i[13],g=i[2],v=i[6],p=i[10],f=i[14],E=i[3],w=i[7],x=i[11],D=i[15],I=r[0],C=r[4],L=r[8],M=r[12],b=r[1],A=r[5],G=r[9],B=r[13],Y=r[2],Z=r[6],X=r[10],J=r[14],V=r[3],oe=r[7],pe=r[11],Ee=r[15];return s[0]=o*I+a*b+c*Y+l*V,s[4]=o*C+a*A+c*Z+l*oe,s[8]=o*L+a*G+c*X+l*pe,s[12]=o*M+a*B+c*J+l*Ee,s[1]=h*I+u*b+d*Y+m*V,s[5]=h*C+u*A+d*Z+m*oe,s[9]=h*L+u*G+d*X+m*pe,s[13]=h*M+u*B+d*J+m*Ee,s[2]=g*I+v*b+p*Y+f*V,s[6]=g*C+v*A+p*Z+f*oe,s[10]=g*L+v*G+p*X+f*pe,s[14]=g*M+v*B+p*J+f*Ee,s[3]=E*I+w*b+x*Y+D*V,s[7]=E*C+w*A+x*Z+D*oe,s[11]=E*L+w*G+x*X+D*pe,s[15]=E*M+w*B+x*J+D*Ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],m=e[14],g=e[3],v=e[7],p=e[11],f=e[15];return g*(+s*c*u-r*l*u-s*a*d+i*l*d+r*a*m-i*c*m)+v*(+t*c*m-t*l*d+s*o*d-r*o*m+r*l*h-s*c*h)+p*(+t*l*u-t*a*m-s*o*u+i*o*m+s*a*h-i*l*h)+f*(-r*a*h-t*c*u+t*a*d+r*o*u-i*o*d+i*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],m=e[11],g=e[12],v=e[13],p=e[14],f=e[15],E=u*p*l-v*d*l+v*c*m-a*p*m-u*c*f+a*d*f,w=g*d*l-h*p*l-g*c*m+o*p*m+h*c*f-o*d*f,x=h*v*l-g*u*l+g*a*m-o*v*m-h*a*f+o*u*f,D=g*u*c-h*v*c-g*a*d+o*v*d+h*a*p-o*u*p,I=t*E+i*w+r*x+s*D;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/I;return e[0]=E*C,e[1]=(v*d*s-u*p*s-v*r*m+i*p*m+u*r*f-i*d*f)*C,e[2]=(a*p*s-v*c*s+v*r*l-i*p*l-a*r*f+i*c*f)*C,e[3]=(u*c*s-a*d*s-u*r*l+i*d*l+a*r*m-i*c*m)*C,e[4]=w*C,e[5]=(h*p*s-g*d*s+g*r*m-t*p*m-h*r*f+t*d*f)*C,e[6]=(g*c*s-o*p*s-g*r*l+t*p*l+o*r*f-t*c*f)*C,e[7]=(o*d*s-h*c*s+h*r*l-t*d*l-o*r*m+t*c*m)*C,e[8]=x*C,e[9]=(g*u*s-h*v*s-g*i*m+t*v*m+h*i*f-t*u*f)*C,e[10]=(o*v*s-g*a*s+g*i*l-t*v*l-o*i*f+t*a*f)*C,e[11]=(h*a*s-o*u*s-h*i*l+t*u*l+o*i*m-t*a*m)*C,e[12]=D*C,e[13]=(h*v*r-g*u*r+g*i*d-t*v*d-h*i*p+t*u*p)*C,e[14]=(g*a*r-o*v*r-g*i*c+t*v*c+o*i*p-t*a*p)*C,e[15]=(o*u*r-h*a*r+h*i*c-t*u*c-o*i*d+t*a*d)*C,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+i,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,u=a+a,d=s*l,m=s*h,g=s*u,v=o*h,p=o*u,f=a*u,E=c*l,w=c*h,x=c*u,D=i.x,I=i.y,C=i.z;return r[0]=(1-(v+f))*D,r[1]=(m+x)*D,r[2]=(g-w)*D,r[3]=0,r[4]=(m-x)*I,r[5]=(1-(d+f))*I,r[6]=(p+E)*I,r[7]=0,r[8]=(g+w)*C,r[9]=(p-E)*C,r[10]=(1-(d+v))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=Vo.set(r[0],r[1],r[2]).length(),o=Vo.set(r[4],r[5],r[6]).length(),a=Vo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Mn.copy(this);let l=1/s,h=1/o,u=1/a;return Mn.elements[0]*=l,Mn.elements[1]*=l,Mn.elements[2]*=l,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=u,Mn.elements[9]*=u,Mn.elements[10]*=u,t.setFromRotationMatrix(Mn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=zn){let c=this.elements,l=2*s/(t-e),h=2*s/(i-r),u=(t+e)/(t-e),d=(i+r)/(i-r),m,g;if(a===zn)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===yc)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=zn){let c=this.elements,l=1/(t-e),h=1/(i-r),u=1/(o-s),d=(t+e)*l,m=(i+r)*h,g,v;if(a===zn)g=(o+s)*u,v=-2*u;else if(a===yc)g=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Vo=new U,Mn=new Kt,cT=new U(0,0,0),lT=new U(1,1,1),qr=new U,Pu=new U,Wi=new U,nb=new Kt,rb=new mr,ks=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],h=s[5],u=s[9],d=s[2],m=s[6],g=s[10];switch(i){case"XYZ":this._y=Math.asin(Ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return nb.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nb,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return rb.setFromEuler(this),this.setFromQuaternion(rb,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),Mc=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},hT=0,sb=new U,Ho=new mr,lr=new Kt,Ou=new U,mc=new U,uT=new U,dT=new mr,ob=new U(1,0,0),ab=new U(0,1,0),cb=new U(0,0,1),lb={type:"added"},fT={type:"removed"},Go={type:"childadded",child:null},Vm={type:"childremoved",child:null},Gs=(()=>{class n extends pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hT++}),this.uuid=Bc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new U,i=new ks,r=new mr,s=new U(1,1,1);function o(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Kt},normalMatrix:{value:new ze}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ho.setFromAxisAngle(t,i),this.quaternion.multiply(Ho),this}rotateOnWorldAxis(t,i){return Ho.setFromAxisAngle(t,i),this.quaternion.premultiply(Ho),this}rotateX(t){return this.rotateOnAxis(ob,t)}rotateY(t){return this.rotateOnAxis(ab,t)}rotateZ(t){return this.rotateOnAxis(cb,t)}translateOnAxis(t,i){return sb.copy(t).applyQuaternion(this.quaternion),this.position.add(sb.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(ob,t)}translateY(t){return this.translateOnAxis(ab,t)}translateZ(t){return this.translateOnAxis(cb,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(lr.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Ou.copy(t):Ou.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),mc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?lr.lookAt(mc,Ou,this.up):lr.lookAt(Ou,mc,this.up),this.quaternion.setFromRotationMatrix(lr),s&&(lr.extractRotation(s.matrixWorld),Ho.setFromRotationMatrix(lr),this.quaternion.premultiply(Ho.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(lb),Go.child=t,this.dispatchEvent(Go),Go.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(fT),Vm.child=t,this.dispatchEvent(Vm),Vm.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),lr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),lr.multiply(t.parent.matrixWorld)),t.applyMatrix4(lr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(lb),Go.child=t,this.dispatchEvent(Go),Go.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mc,t,uT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mc,dT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){let d=l[h];o(t.shapes,d)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,h=this.material.length;l<h;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),h=a(t.textures),u=a(t.images),d=a(t.shapes),m=a(t.skeletons),g=a(t.animations),v=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),h.length>0&&(r.textures=h),u.length>0&&(r.images=u),d.length>0&&(r.shapes=d),m.length>0&&(r.skeletons=m),g.length>0&&(r.animations=g),v.length>0&&(r.nodes=v)}return r.object=s,r;function a(c){let l=[];for(let h in c){let u=c[h];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new U(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),Sn=new U,hr=new U,Hm=new U,ur=new U,Wo=new U,jo=new U,hb=new U,Gm=new U,Wm=new U,jm=new U,Xm=new Ut,qm=new Ut,$m=new Ut,Zr=class n{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Sn.subVectors(e,t),r.cross(Sn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Sn.subVectors(r,t),hr.subVectors(i,t),Hm.subVectors(e,t);let o=Sn.dot(Sn),a=Sn.dot(hr),c=Sn.dot(Hm),l=hr.dot(hr),h=hr.dot(Hm),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;let d=1/u,m=(l*c-a*h)*d,g=(o*h-a*c)*d;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ur)===null?!1:ur.x>=0&&ur.y>=0&&ur.x+ur.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,ur)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ur.x),c.addScaledVector(o,ur.y),c.addScaledVector(a,ur.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return Xm.setScalar(0),qm.setScalar(0),$m.setScalar(0),Xm.fromBufferAttribute(e,t),qm.fromBufferAttribute(e,i),$m.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Xm,s.x),o.addScaledVector(qm,s.y),o.addScaledVector($m,s.z),o}static isFrontFacing(e,t,i,r){return Sn.subVectors(i,t),hr.subVectors(e,t),Sn.cross(hr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),hr.subVectors(this.a,this.b),Sn.cross(hr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;Wo.subVectors(r,i),jo.subVectors(s,i),Gm.subVectors(e,i);let c=Wo.dot(Gm),l=jo.dot(Gm);if(c<=0&&l<=0)return t.copy(i);Wm.subVectors(e,r);let h=Wo.dot(Wm),u=jo.dot(Wm);if(h>=0&&u<=h)return t.copy(r);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(Wo,o);jm.subVectors(e,s);let m=Wo.dot(jm),g=jo.dot(jm);if(g>=0&&m<=g)return t.copy(s);let v=m*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(jo,a);let p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return hb.subVectors(s,r),a=(u-h)/(u-h+(m-g)),t.copy(r).addScaledVector(hb,a);let f=1/(p+v+d);return o=v*f,a=d*f,t.copy(i).addScaledVector(Wo,o).addScaledVector(jo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},cx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$r={h:0,s:0,l:0},Lu={h:0,s:0,l:0};function Ym(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ot=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=st.workingColorSpace){if(e=nT(e,1),t=Ze(t,0,1),i=Ze(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Ym(o,s,e+1/3),this.g=Ym(o,s,e),this.b=Ym(o,s,e-1/3)}return st.toWorkingColorSpace(this,r),this}setStyle(e,t=Xi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xi){let i=cx[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}copyLinearToSRGB(e){return this.r=Yo(e.r),this.g=Yo(e.g),this.b=Yo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xi){return st.fromWorkingColorSpace(vi.copy(this),e),Math.round(Ze(vi.r*255,0,255))*65536+Math.round(Ze(vi.g*255,0,255))*256+Math.round(Ze(vi.b*255,0,255))}getHexString(e=Xi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(vi.copy(this),t);let i=vi.r,r=vi.g,s=vi.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-i)/u+2;break;case s:c=(i-r)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(vi.copy(this),t),e.r=vi.r,e.g=vi.g,e.b=vi.b,e}getStyle(e=Xi){st.fromWorkingColorSpace(vi.copy(this),e);let t=vi.r,i=vi.g,r=vi.b;return e!==Xi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL($r),this.setHSL($r.h+e,$r.s+t,$r.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($r),e.getHSL(Lu);let i=Pm($r.h,Lu.h,t),r=Pm($r.s,Lu.s,t),s=Pm($r.l,Lu.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vi=new ot;ot.NAMES=cx;var pT=0,Us=class extends pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pT++}),this.uuid=Bc(),this.name="",this.type="Material",this.blending=Ls,this.side=fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xu,this.blendDst=qu,this.blendEquation=Jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ng,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(i.blending=this.blending),this.side!==fr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xu&&(i.blendSrc=this.blendSrc),this.blendDst!==qu&&(i.blendDst=this.blendDst),this.blendEquation!==Jr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Fs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ng&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Bs=class extends Us{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ks,this.combine=ug,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Zt=new U,Fu=new vt,mT=0,qi=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mT++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=rg,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Fu.fromBufferAttribute(this,t),Fu.applyMatrix3(e),this.setXY(t,Fu.x,Fu.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=dc(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Li(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=dc(t,this.array)),t}setX(e,t){return this.normalized&&(t=Li(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=dc(t,this.array)),t}setY(e,t){return this.normalized&&(t=Li(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=dc(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Li(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=dc(t,this.array)),t}setW(e,t){return this.normalized&&(t=Li(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Li(t,this.array),i=Li(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Li(t,this.array),i=Li(i,this.array),r=Li(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Li(t,this.array),i=Li(i,this.array),r=Li(r,this.array),s=Li(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rg&&(e.usage=this.usage),e}};var Sc=class extends qi{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var wc=class extends qi{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Vn=class extends qi{constructor(e,t,i){super(new Float32Array(e),t,i)}},gT=0,sn=new Kt,Zm=new Gs,Xo=new U,ji=new Qr,gc=new Qr,ui=new U,es=class n extends pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gT++}),this.uuid=Bc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wg(e)?wc:Sc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,i){return sn.makeTranslation(e,t,i),this.applyMatrix4(sn),this}scale(e,t,i){return sn.makeScale(e,t,i),this.applyMatrix4(sn),this}lookAt(e){return Zm.lookAt(e),Zm.updateMatrix(),this.applyMatrix4(Zm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xo).negate(),this.translate(Xo.x,Xo.y,Xo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Vn(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];ji.setFromBufferAttribute(s),this.morphTargetsRelative?(ui.addVectors(this.boundingBox.min,ji.min),this.boundingBox.expandByPoint(ui),ui.addVectors(this.boundingBox.max,ji.max),this.boundingBox.expandByPoint(ui)):(this.boundingBox.expandByPoint(ji.min),this.boundingBox.expandByPoint(ji.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jo);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let i=this.boundingSphere.center;if(ji.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];gc.setFromBufferAttribute(a),this.morphTargetsRelative?(ui.addVectors(ji.min,gc.min),ji.expandByPoint(ui),ui.addVectors(ji.max,gc.max),ji.expandByPoint(ui)):(ji.expandByPoint(gc.min),ji.expandByPoint(gc.max))}ji.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)ui.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ui));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ui.fromBufferAttribute(a,l),c&&(Xo.fromBufferAttribute(e,l),ui.add(Xo)),r=Math.max(r,i.distanceToSquared(ui))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qi(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<i.count;L++)a[L]=new U,c[L]=new U;let l=new U,h=new U,u=new U,d=new vt,m=new vt,g=new vt,v=new U,p=new U;function f(L,M,b){l.fromBufferAttribute(i,L),h.fromBufferAttribute(i,M),u.fromBufferAttribute(i,b),d.fromBufferAttribute(s,L),m.fromBufferAttribute(s,M),g.fromBufferAttribute(s,b),h.sub(l),u.sub(l),m.sub(d),g.sub(d);let A=1/(m.x*g.y-g.x*m.y);isFinite(A)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(A),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(A),a[L].add(v),a[M].add(v),a[b].add(v),c[L].add(p),c[M].add(p),c[b].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let L=0,M=E.length;L<M;++L){let b=E[L],A=b.start,G=b.count;for(let B=A,Y=A+G;B<Y;B+=3)f(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let w=new U,x=new U,D=new U,I=new U;function C(L){D.fromBufferAttribute(r,L),I.copy(D);let M=a[L];w.copy(M),w.sub(D.multiplyScalar(D.dot(M))).normalize(),x.crossVectors(I,M);let A=x.dot(c[L])<0?-1:1;o.setXYZW(L,w.x,w.y,w.z,A)}for(let L=0,M=E.length;L<M;++L){let b=E[L],A=b.start,G=b.count;for(let B=A,Y=A+G;B<Y;B+=3)C(e.getX(B+0)),C(e.getX(B+1)),C(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new qi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);let r=new U,s=new U,o=new U,a=new U,c=new U,l=new U,h=new U,u=new U;if(e)for(let d=0,m=e.count;d<m;d+=3){let g=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,p),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ui.fromBufferAttribute(e,t),ui.normalize(),e.setXYZ(t,ui.x,ui.y,ui.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),m=0,g=0;for(let v=0,p=c.length;v<p;v++){a.isInterleavedBufferAttribute?m=c[v]*a.data.stride+a.offset:m=c[v]*h;for(let f=0;f<h;f++)d[g++]=l[m++]}return new qi(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],m=e(d,i);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let m=l[u];h.push(m.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],u=s[l];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ub=new Kt,Is=new td,Nu=new Jo,db=new U,ku=new U,Uu=new U,Bu=new U,Km=new U,zu=new U,fb=new U,Vu=new U,Fi=class extends Gs{constructor(e=new es,t=new Bs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){zu.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=a[c],u=s[c];h!==0&&(Km.fromBufferAttribute(u,e),o?zu.addScaledVector(Km,h):zu.addScaledVector(Km.sub(t),h))}t.add(zu)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Nu.copy(i.boundingSphere),Nu.applyMatrix4(s),Is.copy(e.ray).recast(e.near),!(Nu.containsPoint(Is.origin)===!1&&(Is.intersectSphere(Nu,db)===null||Is.origin.distanceToSquared(db)>(e.far-e.near)**2))&&(ub.copy(s).invert(),Is.copy(e.ray).applyMatrix4(ub),!(i.boundingBox!==null&&Is.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Is)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let p=d[g],f=o[p.materialIndex],E=Math.max(p.start,m.start),w=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let x=E,D=w;x<D;x+=3){let I=a.getX(x),C=a.getX(x+1),L=a.getX(x+2);r=Hu(this,f,e,i,l,h,u,I,C,L),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{let g=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){let E=a.getX(p),w=a.getX(p+1),x=a.getX(p+2);r=Hu(this,o,e,i,l,h,u,E,w,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let p=d[g],f=o[p.materialIndex],E=Math.max(p.start,m.start),w=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let x=E,D=w;x<D;x+=3){let I=x,C=x+1,L=x+2;r=Hu(this,f,e,i,l,h,u,I,C,L),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{let g=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){let E=p,w=p+1,x=p+2;r=Hu(this,o,e,i,l,h,u,E,w,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}};function _T(n,e,t,i,r,s,o,a){let c;if(e.side===Ci?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===fr,a),c===null)return null;Vu.copy(a),Vu.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Vu);return l<t.near||l>t.far?null:{distance:l,point:Vu.clone(),object:n}}function Hu(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,ku),n.getVertexPosition(c,Uu),n.getVertexPosition(l,Bu);let h=_T(n,e,t,i,ku,Uu,Bu,fb);if(h){let u=new U;Zr.getBarycoord(fb,ku,Uu,Bu,u),r&&(h.uv=Zr.getInterpolatedAttribute(r,a,c,l,u,new vt)),s&&(h.uv1=Zr.getInterpolatedAttribute(s,a,c,l,u,new vt)),o&&(h.normal=Zr.getInterpolatedAttribute(o,a,c,l,u,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new U,materialIndex:0};Zr.getNormal(ku,Uu,Bu,d.normal),h.face=d,h.barycoord=u}return h}var ts=class n extends es{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,m=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Vn(l,3)),this.setAttribute("normal",new Vn(h,3)),this.setAttribute("uv",new Vn(u,2));function g(v,p,f,E,w,x,D,I,C,L,M){let b=x/C,A=D/L,G=x/2,B=D/2,Y=I/2,Z=C+1,X=L+1,J=0,V=0,oe=new U;for(let pe=0;pe<X;pe++){let Ee=pe*A-B;for(let $e=0;$e<Z;$e++){let yt=$e*b-G;oe[v]=yt*E,oe[p]=Ee*w,oe[f]=Y,l.push(oe.x,oe.y,oe.z),oe[v]=0,oe[p]=0,oe[f]=I>0?1:-1,h.push(oe.x,oe.y,oe.z),u.push($e/C),u.push(1-pe/L),J+=1}}for(let pe=0;pe<L;pe++)for(let Ee=0;Ee<C;Ee++){let $e=d+Ee+Z*pe,yt=d+Ee+Z*(pe+1),W=d+(Ee+1)+Z*(pe+1),ie=d+(Ee+1)+Z*pe;c.push($e,yt,ie),c.push(yt,W,ie),V+=6}a.addGroup(m,V,M),m+=V,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ws(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function bi(n){let e={};for(let t=0;t<n.length;t++){let i=Ws(n[t]);for(let r in i)e[r]=i[r]}return e}function vT(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Eg(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}var lx={clone:Ws,merge:bi},yT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,En=class extends Us{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yT,this.fragmentShader=bT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=vT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ec=class extends Gs{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=zn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Yr=new U,pb=new vt,mb=new vt,yi=class extends Ec{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ku*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Dm*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ku*2*Math.atan(Math.tan(Dm*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yr.x,Yr.y).multiplyScalar(-e/Yr.z),Yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yr.x,Yr.y).multiplyScalar(-e/Yr.z)}getViewSize(e,t){return this.getViewBounds(e,pb,mb),t.subVectors(mb,pb)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Dm*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},qo=-90,$o=1,id=class extends Gs{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new yi(qo,$o,e,t);r.layers=this.layers,this.add(r);let s=new yi(qo,$o,e,t);s.layers=this.layers,this.add(s);let o=new yi(qo,$o,e,t);o.layers=this.layers,this.add(o);let a=new yi(qo,$o,e,t);a.layers=this.layers,this.add(a);let c=new yi(qo,$o,e,t);c.layers=this.layers,this.add(c);let l=new yi(qo,$o,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===zn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===yc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(u,d,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Cc=class extends os{constructor(e=[],t=Vs,i,r,s,o,a,c,l,h){super(e,t,i,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},nd=class extends Hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Cc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ts(5,5,5),s=new En({name:"CubemapFromEquirect",uniforms:Ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ci,blending:gr});s.uniforms.tEquirect.value=t;let o=new Fi(r,s),a=t.minFilter;return t.minFilter===rs&&(t.minFilter=wn),new id(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},Os=class extends Gs{constructor(){super(),this.isGroup=!0,this.type="Group"}},xT={type:"move"},Qo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Os,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Os,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Os,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let p=t.getJointPose(v,i),f=this._getHandJoint(l,v);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xT)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Os;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var Tc=class extends Gs{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ks,this.environmentIntensity=1,this.environmentRotation=new ks,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Jm=new U,MT=new U,ST=new ze,Bn=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Jm.subVectors(i,t).cross(MT.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Jm),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||ST.getNormalMatrix(e),r=this.coplanarPoint(Jm).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ds=new Jo,Gu=new U,Ac=class{constructor(e=new Bn,t=new Bn,i=new Bn,r=new Bn,s=new Bn,o=new Bn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=zn){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],h=r[5],u=r[6],d=r[7],m=r[8],g=r[9],v=r[10],p=r[11],f=r[12],E=r[13],w=r[14],x=r[15];if(i[0].setComponents(c-s,d-l,p-m,x-f).normalize(),i[1].setComponents(c+s,d+l,p+m,x+f).normalize(),i[2].setComponents(c+o,d+h,p+g,x+E).normalize(),i[3].setComponents(c-o,d-h,p-g,x-E).normalize(),i[4].setComponents(c-a,d-u,p-v,x-w).normalize(),t===zn)i[5].setComponents(c+a,d+u,p+v,x+w).normalize();else if(t===yc)i[5].setComponents(a,u,v,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(e){return Ds.center.set(0,0,0),Ds.radius=.7071067811865476,Ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Gu.x=r.normal.x>0?e.max.x:e.min.x,Gu.y=r.normal.y>0?e.max.y:e.min.y,Gu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Gu)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Rc=class extends os{constructor(e,t,i=ss,r,s,o,a=on,c=on,l,h=Zo){if(h!==Zo&&h!==na)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ko(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var Ic=class n extends es{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,h=c+1,u=e/a,d=t/c,m=[],g=[],v=[],p=[];for(let f=0;f<h;f++){let E=f*d-o;for(let w=0;w<l;w++){let x=w*u-s;g.push(x,-E,0),v.push(0,0,1),p.push(w/a),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let E=0;E<a;E++){let w=E+l*f,x=E+l*(f+1),D=E+1+l*(f+1),I=E+1+l*f;m.push(w,x,I),m.push(x,D,I)}this.setIndex(m),this.setAttribute("position",new Vn(g,3)),this.setAttribute("normal",new Vn(v,3)),this.setAttribute("uv",new Vn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var rd=class extends Us{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},sd=class extends Us{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Wu(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function wT(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var zs=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];i:{e:{let o;t:{n:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break i}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},od=class extends zs{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:eg,endingEnd:eg}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case tg:s=e,a=2*t-i;break;case ig:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case tg:o=e,c=2*i-t;break;case ig:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(i-t)/(r-t),v=g*g,p=v*g,f=-d*p+2*d*v-d*g,E=(1+d)*p+(-1.5-2*d)*v+(-.5+d)*g+1,w=(-1-m)*p+(1.5+m)*v+.5*g,x=m*p-m*v;for(let D=0;D!==a;++D)s[D]=f*o[h+D]+E*o[l+D]+w*o[c+D]+x*o[u+D];return s}},ad=class extends zs{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(i-t)/(r-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[l+d]*u+o[c+d]*h;return s}},cd=class extends zs{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},$i=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Wu(t,this.TimeBufferType),this.values=Wu(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Wu(e.times,Array),values:Wu(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new cd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ad(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new od(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case _c:t=this.InterpolantFactoryMethodDiscrete;break;case Zu:t=this.InterpolantFactoryMethodLinear;break;case ju:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _c;case this.InterpolantFactoryMethodLinear:return Zu;case this.InterpolantFactoryMethodSmooth:return ju}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&wT(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===ju,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(r)c=!0;else{let u=a*i,d=u-i,m=u+i;for(let g=0;g!==i;++g){let v=t[u+g];if(v!==t[d+g]||v!==t[m+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*i,d=o*i;for(let m=0;m!==i;++m)t[d+m]=t[u+m]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};$i.prototype.ValueTypeName="";$i.prototype.TimeBufferType=Float32Array;$i.prototype.ValueBufferType=Float32Array;$i.prototype.DefaultInterpolation=Zu;var is=class extends $i{constructor(e,t,i){super(e,t,i)}};is.prototype.ValueTypeName="bool";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=_c;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var ld=class extends $i{constructor(e,t,i,r){super(e,t,i,r)}};ld.prototype.ValueTypeName="color";var hd=class extends $i{constructor(e,t,i,r){super(e,t,i,r)}};hd.prototype.ValueTypeName="number";var ud=class extends zs{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let h=l+a;l!==h;l+=4)mr.slerpFlat(s,0,o,l-a,o,l,c);return s}},Dc=class extends $i{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new ud(this.times,this.values,this.getValueSize(),e)}};Dc.prototype.ValueTypeName="quaternion";Dc.prototype.InterpolantFactoryMethodSmooth=void 0;var ns=class extends $i{constructor(e,t,i){super(e,t,i)}};ns.prototype.ValueTypeName="string";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=_c;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var dd=class extends $i{constructor(e,t,i,r){super(e,t,i,r)}};dd.prototype.ValueTypeName="vector";var fd=class extends Ec{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var pd=class extends yi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}};var Cg="\\[\\]\\.:\\/",ET=new RegExp("["+Cg+"]","g"),Tg="[^"+Cg+"]",CT="[^"+Cg.replace("\\.","")+"]",TT=/((?:WC+[\/:])*)/.source.replace("WC",Tg),AT=/(WCOD+)?/.source.replace("WCOD",CT),RT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tg),IT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tg),DT=new RegExp("^"+TT+AT+RT+IT+"$"),PT=["material","materials","bones","map"],sg=class{constructor(e,t,i){let r=i||kt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},kt=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ET,"")}static parseTrackName(t){let i=DT.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);PT.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,o=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let h=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=sg,n})();kt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};kt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};kt.prototype.GetterByBindingType=[kt.prototype._getValue_direct,kt.prototype._getValue_array,kt.prototype._getValue_arrayElement,kt.prototype._getValue_toArray];kt.prototype.SetterByBindingTypeAndVersioning=[[kt.prototype._setValue_direct,kt.prototype._setValue_direct_setNeedsUpdate,kt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_array,kt.prototype._setValue_array_setNeedsUpdate,kt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_arrayElement,kt.prototype._setValue_arrayElement_setNeedsUpdate,kt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_fromArray,kt.prototype._setValue_fromArray_setNeedsUpdate,kt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var P4=new Float32Array(1);function Ag(n,e,t,i){let r=OT(i);switch(t){case mg:return n*e;case _g:return n*e;case vg:return n*e*2;case yg:return n*e/r.components*r.byteLength;case Rd:return n*e/r.components*r.byteLength;case bg:return n*e*2/r.components*r.byteLength;case Id:return n*e*2/r.components*r.byteLength;case gg:return n*e*3/r.components*r.byteLength;case an:return n*e*4/r.components*r.byteLength;case Dd:return n*e*4/r.components*r.byteLength;case Lc:case Fc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Nc:case kc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Od:case Fd:return Math.max(n,16)*Math.max(e,8)/4;case Pd:case Ld:return Math.max(n,8)*Math.max(e,8)/2;case Nd:case kd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ud:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case zd:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Vd:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Hd:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Gd:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Wd:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case jd:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Xd:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case qd:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case $d:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Yd:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Zd:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Kd:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Jd:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Uc:case Qd:case ef:return Math.ceil(n/4)*Math.ceil(e/4)*16;case xg:case tf:return Math.ceil(n/4)*Math.ceil(e/4)*8;case nf:case rf:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function OT(n){switch(n){case jn:case dg:return{byteLength:1,components:1};case ea:case fg:case ta:return{byteLength:2,components:1};case Td:case Ad:return{byteLength:2,components:4};case ss:case Cd:case Xn:return{byteLength:4,components:1};case pg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:md}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=md);function Ox(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function LT(n){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,h),a.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){let h=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,h);else{u.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<u.length;m++){let g=u[d],v=u[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let m=0,g=u.length;m<g;m++){let v=u[m];n.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var FT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,NT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,kT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,UT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,VT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,HT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,GT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,WT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,XT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$T=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,YT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ZT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,KT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,JT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,QT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,rA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,sA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,oA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,aA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uA="gl_FragColor = linearToOutputTexel( gl_FragColor );",dA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,pA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_A=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,MA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,SA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,EA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,CA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,TA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,AA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,RA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,IA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,DA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,PA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,OA=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,LA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,FA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,NA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,UA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,VA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,GA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,WA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,XA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$A=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,YA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,KA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,QA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,eR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,rR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,oR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,aR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,hR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,_R=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,yR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,MR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,SR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ER=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,CR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,TR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,AR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,RR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,IR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,DR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,OR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,LR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,VR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,HR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,GR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,WR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$R=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,YR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,QR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eI=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tI=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,iI=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nI=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rI=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,sI=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oI=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aI=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cI=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lI=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hI=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uI=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dI=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fI=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:FT,alphahash_pars_fragment:NT,alphamap_fragment:kT,alphamap_pars_fragment:UT,alphatest_fragment:BT,alphatest_pars_fragment:zT,aomap_fragment:VT,aomap_pars_fragment:HT,batching_pars_vertex:GT,batching_vertex:WT,begin_vertex:jT,beginnormal_vertex:XT,bsdfs:qT,iridescence_fragment:$T,bumpmap_pars_fragment:YT,clipping_planes_fragment:ZT,clipping_planes_pars_fragment:KT,clipping_planes_pars_vertex:JT,clipping_planes_vertex:QT,color_fragment:eA,color_pars_fragment:tA,color_pars_vertex:iA,color_vertex:nA,common:rA,cube_uv_reflection_fragment:sA,defaultnormal_vertex:oA,displacementmap_pars_vertex:aA,displacementmap_vertex:cA,emissivemap_fragment:lA,emissivemap_pars_fragment:hA,colorspace_fragment:uA,colorspace_pars_fragment:dA,envmap_fragment:fA,envmap_common_pars_fragment:pA,envmap_pars_fragment:mA,envmap_pars_vertex:gA,envmap_physical_pars_fragment:TA,envmap_vertex:_A,fog_vertex:vA,fog_pars_vertex:yA,fog_fragment:bA,fog_pars_fragment:xA,gradientmap_pars_fragment:MA,lightmap_pars_fragment:SA,lights_lambert_fragment:wA,lights_lambert_pars_fragment:EA,lights_pars_begin:CA,lights_toon_fragment:AA,lights_toon_pars_fragment:RA,lights_phong_fragment:IA,lights_phong_pars_fragment:DA,lights_physical_fragment:PA,lights_physical_pars_fragment:OA,lights_fragment_begin:LA,lights_fragment_maps:FA,lights_fragment_end:NA,logdepthbuf_fragment:kA,logdepthbuf_pars_fragment:UA,logdepthbuf_pars_vertex:BA,logdepthbuf_vertex:zA,map_fragment:VA,map_pars_fragment:HA,map_particle_fragment:GA,map_particle_pars_fragment:WA,metalnessmap_fragment:jA,metalnessmap_pars_fragment:XA,morphinstance_vertex:qA,morphcolor_vertex:$A,morphnormal_vertex:YA,morphtarget_pars_vertex:ZA,morphtarget_vertex:KA,normal_fragment_begin:JA,normal_fragment_maps:QA,normal_pars_fragment:eR,normal_pars_vertex:tR,normal_vertex:iR,normalmap_pars_fragment:nR,clearcoat_normal_fragment_begin:rR,clearcoat_normal_fragment_maps:sR,clearcoat_pars_fragment:oR,iridescence_pars_fragment:aR,opaque_fragment:cR,packing:lR,premultiplied_alpha_fragment:hR,project_vertex:uR,dithering_fragment:dR,dithering_pars_fragment:fR,roughnessmap_fragment:pR,roughnessmap_pars_fragment:mR,shadowmap_pars_fragment:gR,shadowmap_pars_vertex:_R,shadowmap_vertex:vR,shadowmask_pars_fragment:yR,skinbase_vertex:bR,skinning_pars_vertex:xR,skinning_vertex:MR,skinnormal_vertex:SR,specularmap_fragment:wR,specularmap_pars_fragment:ER,tonemapping_fragment:CR,tonemapping_pars_fragment:TR,transmission_fragment:AR,transmission_pars_fragment:RR,uv_pars_fragment:IR,uv_pars_vertex:DR,uv_vertex:PR,worldpos_vertex:OR,background_vert:LR,background_frag:FR,backgroundCube_vert:NR,backgroundCube_frag:kR,cube_vert:UR,cube_frag:BR,depth_vert:zR,depth_frag:VR,distanceRGBA_vert:HR,distanceRGBA_frag:GR,equirect_vert:WR,equirect_frag:jR,linedashed_vert:XR,linedashed_frag:qR,meshbasic_vert:$R,meshbasic_frag:YR,meshlambert_vert:ZR,meshlambert_frag:KR,meshmatcap_vert:JR,meshmatcap_frag:QR,meshnormal_vert:eI,meshnormal_frag:tI,meshphong_vert:iI,meshphong_frag:nI,meshphysical_vert:rI,meshphysical_frag:sI,meshtoon_vert:oI,meshtoon_frag:aI,points_vert:cI,points_frag:lI,shadow_vert:hI,shadow_frag:uI,sprite_vert:dI,sprite_frag:fI},re={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},qn={basic:{uniforms:bi([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:bi([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new ot(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:bi([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:bi([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:bi([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new ot(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:bi([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:bi([re.points,re.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:bi([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:bi([re.common,re.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:bi([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:bi([re.sprite,re.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:bi([re.common,re.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:bi([re.lights,re.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};qn.physical={uniforms:bi([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};var sf={r:0,b:0,g:0},js=new ks,pI=new Kt;function mI(n,e,t,i,r,s,o){let a=new ot(0),c=s===!0?0:1,l,h,u=null,d=0,m=null;function g(w){let x=w.isScene===!0?w.background:null;return x&&x.isTexture&&(x=(w.backgroundBlurriness>0?t:e).get(x)),x}function v(w){let x=!1,D=g(w);D===null?f(a,c):D&&D.isColor&&(f(D,1),x=!0);let I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(w,x){let D=g(x);D&&(D.isCubeTexture||D.mapping===Pc)?(h===void 0&&(h=new Fi(new ts(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:Ws(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),js.copy(x.backgroundRotation),js.x*=-1,js.y*=-1,js.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(js.y*=-1,js.z*=-1),h.material.uniforms.envMap.value=D,h.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(pI.makeRotationFromEuler(js)),h.material.toneMapped=st.getTransfer(D.colorSpace)!==mt,(u!==D||d!==D.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,u=D,d=D.version,m=n.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):D&&D.isTexture&&(l===void 0&&(l=new Fi(new Ic(2,2),new En({name:"BackgroundMaterial",uniforms:Ws(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:fr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=D,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=st.getTransfer(D.colorSpace)!==mt,D.matrixAutoUpdate===!0&&D.updateMatrix(),l.material.uniforms.uvTransform.value.copy(D.matrix),(u!==D||d!==D.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,u=D,d=D.version,m=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function f(w,x){w.getRGB(sf,Eg(n)),i.buffers.color.setClear(sf.r,sf.g,sf.b,x,o)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,x=1){a.set(w),c=x,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,f(a,c)},render:v,addToRenderList:p,dispose:E}}function gI(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null),s=r,o=!1;function a(b,A,G,B,Y){let Z=!1,X=u(B,G,A);s!==X&&(s=X,l(s.object)),Z=m(b,B,G,Y),Z&&g(b,B,G,Y),Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,x(b,A,G,B),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function c(){return n.createVertexArray()}function l(b){return n.bindVertexArray(b)}function h(b){return n.deleteVertexArray(b)}function u(b,A,G){let B=G.wireframe===!0,Y=i[b.id];Y===void 0&&(Y={},i[b.id]=Y);let Z=Y[A.id];Z===void 0&&(Z={},Y[A.id]=Z);let X=Z[B];return X===void 0&&(X=d(c()),Z[B]=X),X}function d(b){let A=[],G=[],B=[];for(let Y=0;Y<t;Y++)A[Y]=0,G[Y]=0,B[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:G,attributeDivisors:B,object:b,attributes:{},index:null}}function m(b,A,G,B){let Y=s.attributes,Z=A.attributes,X=0,J=G.getAttributes();for(let V in J)if(J[V].location>=0){let pe=Y[V],Ee=Z[V];if(Ee===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(Ee=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(Ee=b.instanceColor)),pe===void 0||pe.attribute!==Ee||Ee&&pe.data!==Ee.data)return!0;X++}return s.attributesNum!==X||s.index!==B}function g(b,A,G,B){let Y={},Z=A.attributes,X=0,J=G.getAttributes();for(let V in J)if(J[V].location>=0){let pe=Z[V];pe===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(pe=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(pe=b.instanceColor));let Ee={};Ee.attribute=pe,pe&&pe.data&&(Ee.data=pe.data),Y[V]=Ee,X++}s.attributes=Y,s.attributesNum=X,s.index=B}function v(){let b=s.newAttributes;for(let A=0,G=b.length;A<G;A++)b[A]=0}function p(b){f(b,0)}function f(b,A){let G=s.newAttributes,B=s.enabledAttributes,Y=s.attributeDivisors;G[b]=1,B[b]===0&&(n.enableVertexAttribArray(b),B[b]=1),Y[b]!==A&&(n.vertexAttribDivisor(b,A),Y[b]=A)}function E(){let b=s.newAttributes,A=s.enabledAttributes;for(let G=0,B=A.length;G<B;G++)A[G]!==b[G]&&(n.disableVertexAttribArray(G),A[G]=0)}function w(b,A,G,B,Y,Z,X){X===!0?n.vertexAttribIPointer(b,A,G,Y,Z):n.vertexAttribPointer(b,A,G,B,Y,Z)}function x(b,A,G,B){v();let Y=B.attributes,Z=G.getAttributes(),X=A.defaultAttributeValues;for(let J in Z){let V=Z[J];if(V.location>=0){let oe=Y[J];if(oe===void 0&&(J==="instanceMatrix"&&b.instanceMatrix&&(oe=b.instanceMatrix),J==="instanceColor"&&b.instanceColor&&(oe=b.instanceColor)),oe!==void 0){let pe=oe.normalized,Ee=oe.itemSize,$e=e.get(oe);if($e===void 0)continue;let yt=$e.buffer,W=$e.type,ie=$e.bytesPerElement,xe=W===n.INT||W===n.UNSIGNED_INT||oe.gpuType===Cd;if(oe.isInterleavedBufferAttribute){let ae=oe.data,Oe=ae.stride,ct=oe.offset;if(ae.isInstancedInterleavedBuffer){for(let Fe=0;Fe<V.locationSize;Fe++)f(V.location+Fe,ae.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Fe=0;Fe<V.locationSize;Fe++)p(V.location+Fe);n.bindBuffer(n.ARRAY_BUFFER,yt);for(let Fe=0;Fe<V.locationSize;Fe++)w(V.location+Fe,Ee/V.locationSize,W,pe,Oe*ie,(ct+Ee/V.locationSize*Fe)*ie,xe)}else{if(oe.isInstancedBufferAttribute){for(let ae=0;ae<V.locationSize;ae++)f(V.location+ae,oe.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ae=0;ae<V.locationSize;ae++)p(V.location+ae);n.bindBuffer(n.ARRAY_BUFFER,yt);for(let ae=0;ae<V.locationSize;ae++)w(V.location+ae,Ee/V.locationSize,W,pe,Ee*ie,Ee/V.locationSize*ae*ie,xe)}}else if(X!==void 0){let pe=X[J];if(pe!==void 0)switch(pe.length){case 2:n.vertexAttrib2fv(V.location,pe);break;case 3:n.vertexAttrib3fv(V.location,pe);break;case 4:n.vertexAttrib4fv(V.location,pe);break;default:n.vertexAttrib1fv(V.location,pe)}}}}E()}function D(){L();for(let b in i){let A=i[b];for(let G in A){let B=A[G];for(let Y in B)h(B[Y].object),delete B[Y];delete A[G]}delete i[b]}}function I(b){if(i[b.id]===void 0)return;let A=i[b.id];for(let G in A){let B=A[G];for(let Y in B)h(B[Y].object),delete B[Y];delete A[G]}delete i[b.id]}function C(b){for(let A in i){let G=i[A];if(G[b.id]===void 0)continue;let B=G[b.id];for(let Y in B)h(B[Y].object),delete B[Y];delete G[b.id]}}function L(){M(),o=!0,s!==r&&(s=r,l(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:M,dispose:D,releaseStatesOfGeometry:I,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:p,disableUnusedAttributes:E}}function _I(n,e,t){let i;function r(l){i=l}function s(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function o(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),t.update(h,i,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];t.update(m,i,1)}function c(l,h,u,d){if(u===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function vI(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==an&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let L=C===ta&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==jn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Xn&&!L)}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:E,maxVaryings:w,maxFragmentUniforms:x,vertexTextures:D,maxSamples:I}}function yI(n){let e=this,t=null,i=0,r=!1,s=!1,o=new Bn,a=new ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let m=u.length!==0||d||i!==0||r;return r=d,i=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,m){let g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,f=n.get(u);if(!r||g===null||g.length===0||s&&!p)s?h(null):l();else{let E=s?0:i,w=E*4,x=f.clippingState||null;c.value=x,x=h(g,d,w,m);for(let D=0;D!==w;++D)x[D]=t[D];f.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,m,g){let v=u!==null?u.length:0,p=null;if(v!==0){if(p=c.value,g!==!0||p===null){let f=m+v*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<f)&&(p=new Float32Array(f));for(let w=0,x=m;w!==v;++w,x+=4)o.copy(u[w]).applyMatrix4(E,a),o.normal.toArray(p,x),p[x+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function bI(n){let e=new WeakMap;function t(o,a){return a===Sd?o.mapping=Vs:a===wd&&(o.mapping=Hs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Sd||a===wd)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new nd(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var sa=4,hx=[.125,.215,.35,.446,.526,.582],$s=20,Rg=new fd,ux=new ot,Ig=null,Dg=0,Pg=0,Og=!1,qs=(1+Math.sqrt(5))/2,ra=1/qs,dx=[new U(-qs,ra,0),new U(qs,ra,0),new U(-ra,0,qs),new U(ra,0,qs),new U(0,qs,-ra),new U(0,qs,ra),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],xI=new U,cf=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){let{size:o=256,position:a=xI}=s;Ig=this._renderer.getRenderTarget(),Dg=this._renderer.getActiveCubeFace(),Pg=this._renderer.getActiveMipmapLevel(),Og=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=px(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ig,Dg,Pg),this._renderer.xr.enabled=Og,e.scissorTest=!1,of(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vs||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ig=this._renderer.getRenderTarget(),Dg=this._renderer.getActiveCubeFace(),Pg=this._renderer.getActiveMipmapLevel(),Og=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:ta,format:an,colorSpace:Ns,depthBuffer:!1},r=fx(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fx(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=MI(s)),this._blurMaterial=SI(s,e,t)}return r}_compileMaterial(e){let t=new Fi(this._lodPlanes[0],e);this._renderer.compile(t,Rg)}_sceneToCubeUV(e,t,i,r,s){let c=new yi(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,m=u.toneMapping;u.getClearColor(ux),u.toneMapping=_r,u.autoClear=!1;let g=new Bs({name:"PMREM.Background",side:Ci,depthWrite:!1,depthTest:!1}),v=new Fi(new ts,g),p=!1,f=e.background;f?f.isColor&&(g.color.copy(f),e.background=null,p=!0):(g.color.copy(ux),p=!0);for(let E=0;E<6;E++){let w=E%3;w===0?(c.up.set(0,l[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[E],s.y,s.z)):w===1?(c.up.set(0,0,l[E]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[E],s.z)):(c.up.set(0,l[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[E]));let x=this._cubeSize;of(r,w*x,E>2?x:0,x,x),u.setRenderTarget(r),p&&u.render(v,c),u.render(e,c)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=m,u.autoClear=d,e.background=f}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Vs||e.mapping===Hs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=mx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=px());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Fi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;of(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Rg)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=dx[(r-s-1)%dx.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Fi(this._lodPlanes[r],l),d=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*$s-1),v=s/g,p=isFinite(s)?1+Math.floor(h*v):$s;p>$s&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${$s}`);let f=[],E=0;for(let C=0;C<$s;++C){let L=C/v,M=Math.exp(-L*L/2);f.push(M),C===0?E+=M:C<p&&(E+=2*M)}for(let C=0;C<f.length;C++)f[C]=f[C]/E;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:w}=this;d.dTheta.value=g,d.mipInt.value=w-i;let x=this._sizeLods[r],D=3*x*(r>w-sa?r-w+sa:0),I=4*(this._cubeSize-x);of(t,D,I,3*x,2*x),c.setRenderTarget(t),c.render(u,Rg)}};function MI(n){let e=[],t=[],i=[],r=n,s=n-sa+1+hx.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>n-sa?c=hx[o-n+sa-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,v=3,p=2,f=1,E=new Float32Array(v*g*m),w=new Float32Array(p*g*m),x=new Float32Array(f*g*m);for(let I=0;I<m;I++){let C=I%3*2/3-1,L=I>2?0:-1,M=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];E.set(M,v*g*I),w.set(d,p*g*I);let b=[I,I,I,I,I,I];x.set(b,f*g*I)}let D=new es;D.setAttribute("position",new qi(E,v)),D.setAttribute("uv",new qi(w,p)),D.setAttribute("faceIndex",new qi(x,f)),e.push(D),r>sa&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function fx(n,e,t){let i=new Hn(n,e,t);return i.texture.mapping=Pc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function of(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function SI(n,e,t){let i=new Float32Array($s),r=new U(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:$s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Gg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function px(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function mx(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function Gg(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wI(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===Sd||c===wd,h=c===Vs||c===Hs;if(l||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new cf(n)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let m=a.image;return l&&m&&m.height>0||h&&m&&r(m)?(t===null&&(t=new cf(n)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function EI(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&zc("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function CI(n,e,t,i){let r={},s=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];let m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let m in d)e.update(d[m],n.ARRAY_BUFFER)}function l(u){let d=[],m=u.index,g=u.attributes.position,v=0;if(m!==null){let E=m.array;v=m.version;for(let w=0,x=E.length;w<x;w+=3){let D=E[w+0],I=E[w+1],C=E[w+2];d.push(D,I,I,C,C,D)}}else if(g!==void 0){let E=g.array;v=g.version;for(let w=0,x=E.length/3-1;w<x;w+=3){let D=w+0,I=w+1,C=w+2;d.push(D,I,I,C,C,D)}}else return;let p=new(wg(d)?wc:Sc)(d,1);p.version=v;let f=s.get(u);f&&e.remove(f),s.set(u,p)}function h(u){let d=s.get(u);if(d){let m=u.index;m!==null&&d.version<m.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function TI(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,m){n.drawElements(i,m,s,d*o),t.update(m,i,1)}function l(d,m,g){g!==0&&(n.drawElementsInstanced(i,m,s,d*o,g),t.update(m,i,g))}function h(d,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,g);let p=0;for(let f=0;f<g;f++)p+=m[f];t.update(p,i,1)}function u(d,m,g,v){if(g===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)l(d[f]/o,m[f],v[f]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,v,0,g);let f=0;for(let E=0;E<g;E++)f+=m[E]*v[E];t.update(f,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function AI(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function RI(n,e,t){let i=new WeakMap,r=new Ut;function s(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let b=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",b)};var m=b;d!==void 0&&d.texture.dispose();let g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],x=0;g===!0&&(x=1),v===!0&&(x=2),p===!0&&(x=3);let D=a.attributes.position.count*x,I=1;D>e.maxTextureSize&&(I=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);let C=new Float32Array(D*I*4*u),L=new xc(C,D,I,u);L.type=Xn,L.needsUpdate=!0;let M=x*4;for(let A=0;A<u;A++){let G=f[A],B=E[A],Y=w[A],Z=D*I*4*A;for(let X=0;X<G.count;X++){let J=X*M;g===!0&&(r.fromBufferAttribute(G,X),C[Z+J+0]=r.x,C[Z+J+1]=r.y,C[Z+J+2]=r.z,C[Z+J+3]=0),v===!0&&(r.fromBufferAttribute(B,X),C[Z+J+4]=r.x,C[Z+J+5]=r.y,C[Z+J+6]=r.z,C[Z+J+7]=0),p===!0&&(r.fromBufferAttribute(Y,X),C[Z+J+8]=r.x,C[Z+J+9]=r.y,C[Z+J+10]=r.z,C[Z+J+11]=Y.itemSize===4?r.w:1)}}d={count:u,texture:L,size:new vt(D,I)},i.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];let v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function II(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,h=c.geometry,u=e.get(c,h);if(r.get(u)!==l&&(e.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return u}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var Lx=new os,gx=new Rc(1,1),Fx=new xc,Nx=new ed,kx=new Cc,_x=[],vx=[],yx=new Float32Array(16),bx=new Float32Array(9),xx=new Float32Array(4);function aa(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=_x[r];if(s===void 0&&(s=new Float32Array(r),_x[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function ni(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ri(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function hf(n,e){let t=vx[e];t===void 0&&(t=new Int32Array(e),vx[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function DI(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function PI(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ni(t,e))return;n.uniform2fv(this.addr,e),ri(t,e)}}function OI(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ni(t,e))return;n.uniform3fv(this.addr,e),ri(t,e)}}function LI(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ni(t,e))return;n.uniform4fv(this.addr,e),ri(t,e)}}function FI(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(ni(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ri(t,e)}else{if(ni(t,i))return;xx.set(i),n.uniformMatrix2fv(this.addr,!1,xx),ri(t,i)}}function NI(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(ni(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ri(t,e)}else{if(ni(t,i))return;bx.set(i),n.uniformMatrix3fv(this.addr,!1,bx),ri(t,i)}}function kI(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(ni(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ri(t,e)}else{if(ni(t,i))return;yx.set(i),n.uniformMatrix4fv(this.addr,!1,yx),ri(t,i)}}function UI(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function BI(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ni(t,e))return;n.uniform2iv(this.addr,e),ri(t,e)}}function zI(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ni(t,e))return;n.uniform3iv(this.addr,e),ri(t,e)}}function VI(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ni(t,e))return;n.uniform4iv(this.addr,e),ri(t,e)}}function HI(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function GI(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ni(t,e))return;n.uniform2uiv(this.addr,e),ri(t,e)}}function WI(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ni(t,e))return;n.uniform3uiv(this.addr,e),ri(t,e)}}function jI(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ni(t,e))return;n.uniform4uiv(this.addr,e),ri(t,e)}}function XI(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(gx.compareFunction=Mg,s=gx):s=Lx,t.setTexture2D(e||s,r)}function qI(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Nx,r)}function $I(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||kx,r)}function YI(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Fx,r)}function ZI(n){switch(n){case 5126:return DI;case 35664:return PI;case 35665:return OI;case 35666:return LI;case 35674:return FI;case 35675:return NI;case 35676:return kI;case 5124:case 35670:return UI;case 35667:case 35671:return BI;case 35668:case 35672:return zI;case 35669:case 35673:return VI;case 5125:return HI;case 36294:return GI;case 36295:return WI;case 36296:return jI;case 35678:case 36198:case 36298:case 36306:case 35682:return XI;case 35679:case 36299:case 36307:return qI;case 35680:case 36300:case 36308:case 36293:return $I;case 36289:case 36303:case 36311:case 36292:return YI}}function KI(n,e){n.uniform1fv(this.addr,e)}function JI(n,e){let t=aa(e,this.size,2);n.uniform2fv(this.addr,t)}function QI(n,e){let t=aa(e,this.size,3);n.uniform3fv(this.addr,t)}function e1(n,e){let t=aa(e,this.size,4);n.uniform4fv(this.addr,t)}function t1(n,e){let t=aa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function i1(n,e){let t=aa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function n1(n,e){let t=aa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function r1(n,e){n.uniform1iv(this.addr,e)}function s1(n,e){n.uniform2iv(this.addr,e)}function o1(n,e){n.uniform3iv(this.addr,e)}function a1(n,e){n.uniform4iv(this.addr,e)}function c1(n,e){n.uniform1uiv(this.addr,e)}function l1(n,e){n.uniform2uiv(this.addr,e)}function h1(n,e){n.uniform3uiv(this.addr,e)}function u1(n,e){n.uniform4uiv(this.addr,e)}function d1(n,e,t){let i=this.cache,r=e.length,s=hf(t,r);ni(i,s)||(n.uniform1iv(this.addr,s),ri(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Lx,s[o])}function f1(n,e,t){let i=this.cache,r=e.length,s=hf(t,r);ni(i,s)||(n.uniform1iv(this.addr,s),ri(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Nx,s[o])}function p1(n,e,t){let i=this.cache,r=e.length,s=hf(t,r);ni(i,s)||(n.uniform1iv(this.addr,s),ri(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||kx,s[o])}function m1(n,e,t){let i=this.cache,r=e.length,s=hf(t,r);ni(i,s)||(n.uniform1iv(this.addr,s),ri(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Fx,s[o])}function g1(n){switch(n){case 5126:return KI;case 35664:return JI;case 35665:return QI;case 35666:return e1;case 35674:return t1;case 35675:return i1;case 35676:return n1;case 5124:case 35670:return r1;case 35667:case 35671:return s1;case 35668:case 35672:return o1;case 35669:case 35673:return a1;case 5125:return c1;case 36294:return l1;case 36295:return h1;case 36296:return u1;case 35678:case 36198:case 36298:case 36306:case 35682:return d1;case 35679:case 36299:case 36307:return f1;case 35680:case 36300:case 36308:case 36293:return p1;case 36289:case 36303:case 36311:case 36292:return m1}}var Fg=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ZI(t.type)}},Ng=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=g1(t.type)}},kg=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},Lg=/(\w+)(\])?(\[|\.)?/g;function Mx(n,e){n.seq.push(e),n.map[e.id]=e}function _1(n,e,t){let i=n.name,r=i.length;for(Lg.lastIndex=0;;){let s=Lg.exec(i),o=Lg.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Mx(t,l===void 0?new Fg(a,n,e):new Ng(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new kg(a),Mx(t,u)),t=u}}}var oa=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);_1(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function Sx(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var v1=37297,y1=0;function b1(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var wx=new ze;function x1(n){st._getMatrix(wx,st.workingColorSpace,n);let e=`mat3( ${wx.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(n)){case vc:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ex(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+b1(n.getShaderSource(e),o)}else return r}function M1(n,e){let t=x1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function S1(n,e){let t;switch(e){case Bb:t="Linear";break;case zb:t="Reinhard";break;case Vb:t="Cineon";break;case Hb:t="ACESFilmic";break;case Wb:t="AgX";break;case jb:t="Neutral";break;case Gb:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var af=new U;function w1(){st.getLuminanceCoefficients(af);let n=af.x.toFixed(4),e=af.y.toFixed(4),t=af.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function E1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vc).join(`
`)}function C1(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function T1(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Vc(n){return n!==""}function Cx(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tx(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var A1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ug(n){return n.replace(A1,I1)}var R1=new Map;function I1(n,e){let t=Xe[e];if(t===void 0){let i=R1.get(e);if(i!==void 0)t=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ug(t)}var D1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ax(n){return n.replace(D1,P1)}function P1(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Rx(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function O1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ag?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===vb?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Gn&&(e="SHADOWMAP_TYPE_VSM"),e}function L1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Vs:case Hs:e="ENVMAP_TYPE_CUBE";break;case Pc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function F1(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Hs:e="ENVMAP_MODE_REFRACTION";break}return e}function N1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ug:e="ENVMAP_BLENDING_MULTIPLY";break;case kb:e="ENVMAP_BLENDING_MIX";break;case Ub:e="ENVMAP_BLENDING_ADD";break}return e}function k1(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function U1(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=O1(t),l=L1(t),h=F1(t),u=N1(t),d=k1(t),m=E1(t),g=C1(s),v=r.createProgram(),p,f,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Vc).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Vc).join(`
`),f.length>0&&(f+=`
`)):(p=[Rx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vc).join(`
`),f=[Rx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_r?"#define TONE_MAPPING":"",t.toneMapping!==_r?Xe.tonemapping_pars_fragment:"",t.toneMapping!==_r?S1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,M1("linearToOutputTexel",t.outputColorSpace),w1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vc).join(`
`)),o=Ug(o),o=Cx(o,t),o=Tx(o,t),a=Ug(a),a=Cx(a,t),a=Tx(a,t),o=Ax(o),a=Ax(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===Sg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let w=E+p+o,x=E+f+a,D=Sx(r,r.VERTEX_SHADER,w),I=Sx(r,r.FRAGMENT_SHADER,x);r.attachShader(v,D),r.attachShader(v,I),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function C(A){if(n.debug.checkShaderErrors){let G=r.getProgramInfoLog(v).trim(),B=r.getShaderInfoLog(D).trim(),Y=r.getShaderInfoLog(I).trim(),Z=!0,X=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,D,I);else{let J=Ex(r,D,"vertex"),V=Ex(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+G+`
`+J+`
`+V)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(B===""||Y==="")&&(X=!1);X&&(A.diagnostics={runnable:Z,programLog:G,vertexShader:{log:B,prefix:p},fragmentShader:{log:Y,prefix:f}})}r.deleteShader(D),r.deleteShader(I),L=new oa(r,v),M=T1(r,v)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(v,v1)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=y1++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=D,this.fragmentShader=I,this}var B1=0,Bg=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new zg(e),t.set(e,i)),i}},zg=class{constructor(e){this.id=B1++,this.code=e,this.usedTimes=0}};function z1(n,e,t,i,r,s,o){let a=new Mc,c=new Bg,l=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.vertexTextures,m=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return l.add(M),M===0?"uv":`uv${M}`}function p(M,b,A,G,B){let Y=G.fog,Z=B.geometry,X=M.isMeshStandardMaterial?G.environment:null,J=(M.isMeshStandardMaterial?t:e).get(M.envMap||X),V=J&&J.mapping===Pc?J.image.height:null,oe=g[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));let pe=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ee=pe!==void 0?pe.length:0,$e=0;Z.morphAttributes.position!==void 0&&($e=1),Z.morphAttributes.normal!==void 0&&($e=2),Z.morphAttributes.color!==void 0&&($e=3);let yt,W,ie,xe;if(oe){let ft=qn[oe];yt=ft.vertexShader,W=ft.fragmentShader}else yt=M.vertexShader,W=M.fragmentShader,c.update(M),ie=c.getVertexShaderID(M),xe=c.getFragmentShaderID(M);let ae=n.getRenderTarget(),Oe=n.state.buffers.depth.getReversed(),ct=B.isInstancedMesh===!0,Fe=B.isBatchedMesh===!0,Bt=!!M.map,It=!!M.matcap,Ke=!!J,T=!!M.aoMap,Yi=!!M.lightMap,tt=!!M.bumpMap,Je=!!M.normalMap,Ce=!!M.displacementMap,Et=!!M.emissiveMap,we=!!M.metalnessMap,S=!!M.roughnessMap,_=M.anisotropy>0,F=M.clearcoat>0,q=M.dispersion>0,K=M.iridescence>0,H=M.sheen>0,Se=M.transmission>0,ce=_&&!!M.anisotropyMap,me=F&&!!M.clearcoatMap,it=F&&!!M.clearcoatNormalMap,ee=F&&!!M.clearcoatRoughnessMap,ge=K&&!!M.iridescenceMap,Le=K&&!!M.iridescenceThicknessMap,ke=H&&!!M.sheenColorMap,_e=H&&!!M.sheenRoughnessMap,Qe=!!M.specularMap,Ge=!!M.specularColorMap,St=!!M.specularIntensityMap,R=Se&&!!M.transmissionMap,le=Se&&!!M.thicknessMap,z=!!M.gradientMap,$=!!M.alphaMap,ue=M.alphaTest>0,he=!!M.alphaHash,Ve=!!M.extensions,Lt=_r;M.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Lt=n.toneMapping);let mi={shaderID:oe,shaderType:M.type,shaderName:M.name,vertexShader:yt,fragmentShader:W,defines:M.defines,customVertexShaderID:ie,customFragmentShaderID:xe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Fe,batchingColor:Fe&&B._colorsTexture!==null,instancing:ct,instancingColor:ct&&B.instanceColor!==null,instancingMorph:ct&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ae===null?n.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Ns,alphaToCoverage:!!M.alphaToCoverage,map:Bt,matcap:It,envMap:Ke,envMapMode:Ke&&J.mapping,envMapCubeUVHeight:V,aoMap:T,lightMap:Yi,bumpMap:tt,normalMap:Je,displacementMap:d&&Ce,emissiveMap:Et,normalMapObjectSpace:Je&&M.normalMapType===Zb,normalMapTangentSpace:Je&&M.normalMapType===Yb,metalnessMap:we,roughnessMap:S,anisotropy:_,anisotropyMap:ce,clearcoat:F,clearcoatMap:me,clearcoatNormalMap:it,clearcoatRoughnessMap:ee,dispersion:q,iridescence:K,iridescenceMap:ge,iridescenceThicknessMap:Le,sheen:H,sheenColorMap:ke,sheenRoughnessMap:_e,specularMap:Qe,specularColorMap:Ge,specularIntensityMap:St,transmission:Se,transmissionMap:R,thicknessMap:le,gradientMap:z,opaque:M.transparent===!1&&M.blending===Ls&&M.alphaToCoverage===!1,alphaMap:$,alphaTest:ue,alphaHash:he,combine:M.combine,mapUv:Bt&&v(M.map.channel),aoMapUv:T&&v(M.aoMap.channel),lightMapUv:Yi&&v(M.lightMap.channel),bumpMapUv:tt&&v(M.bumpMap.channel),normalMapUv:Je&&v(M.normalMap.channel),displacementMapUv:Ce&&v(M.displacementMap.channel),emissiveMapUv:Et&&v(M.emissiveMap.channel),metalnessMapUv:we&&v(M.metalnessMap.channel),roughnessMapUv:S&&v(M.roughnessMap.channel),anisotropyMapUv:ce&&v(M.anisotropyMap.channel),clearcoatMapUv:me&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:it&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:_e&&v(M.sheenRoughnessMap.channel),specularMapUv:Qe&&v(M.specularMap.channel),specularColorMapUv:Ge&&v(M.specularColorMap.channel),specularIntensityMapUv:St&&v(M.specularIntensityMap.channel),transmissionMapUv:R&&v(M.transmissionMap.channel),thicknessMapUv:le&&v(M.thicknessMap.channel),alphaMapUv:$&&v(M.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Je||_),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Z.attributes.uv&&(Bt||$),fog:!!Y,useFog:M.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Oe,skinning:B.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:$e,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:Lt,decodeVideoTexture:Bt&&M.map.isVideoTexture===!0&&st.getTransfer(M.map.colorSpace)===mt,decodeVideoTextureEmissive:Et&&M.emissiveMap.isVideoTexture===!0&&st.getTransfer(M.emissiveMap.colorSpace)===mt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Wn,flipSided:M.side===Ci,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ve&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&M.extensions.multiDraw===!0||Fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return mi.vertexUv1s=l.has(1),mi.vertexUv2s=l.has(2),mi.vertexUv3s=l.has(3),l.clear(),mi}function f(M){let b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(let A in M.defines)b.push(A),b.push(M.defines[A]);return M.isRawShaderMaterial===!1&&(E(b,M),w(b,M),b.push(n.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function E(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function w(M,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),M.push(a.mask)}function x(M){let b=g[M.type],A;if(b){let G=qn[b];A=lx.clone(G.uniforms)}else A=M.uniforms;return A}function D(M,b){let A;for(let G=0,B=h.length;G<B;G++){let Y=h[G];if(Y.cacheKey===b){A=Y,++A.usedTimes;break}}return A===void 0&&(A=new U1(n,b,M,s),h.push(A)),A}function I(M){if(--M.usedTimes===0){let b=h.indexOf(M);h[b]=h[h.length-1],h.pop(),M.destroy()}}function C(M){c.remove(M)}function L(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:x,acquireProgram:D,releaseProgram:I,releaseShaderCache:C,programs:h,dispose:L}}function V1(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function H1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ix(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Dx(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(u,d,m,g,v,p){let f=n[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:v,group:p},n[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=v,f.group=p),e++,f}function a(u,d,m,g,v,p){let f=o(u,d,m,g,v,p);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):t.push(f)}function c(u,d,m,g,v,p){let f=o(u,d,m,g,v,p);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):t.unshift(f)}function l(u,d){t.length>1&&t.sort(u||H1),i.length>1&&i.sort(d||Ix),r.length>1&&r.sort(d||Ix)}function h(){for(let u=e,d=n.length;u<d;u++){let m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:h,sort:l}}function G1(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new Dx,n.set(i,[o])):r>=s.length?(o=new Dx,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function W1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new ot};break;case"SpotLight":t={position:new U,direction:new U,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function j1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var X1=0;function q1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function $1(n){let e=new W1,t=j1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new U);let r=new U,s=new Kt,o=new Kt;function a(l){let h=0,u=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let m=0,g=0,v=0,p=0,f=0,E=0,w=0,x=0,D=0,I=0,C=0;l.sort(q1);for(let M=0,b=l.length;M<b;M++){let A=l[M],G=A.color,B=A.intensity,Y=A.distance,Z=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=G.r*B,u+=G.g*B,d+=G.b*B;else if(A.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(A.sh.coefficients[X],B);C++}else if(A.isDirectionalLight){let X=e.get(A);if(X.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let J=A.shadow,V=t.get(A);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,i.directionalShadow[m]=V,i.directionalShadowMap[m]=Z,i.directionalShadowMatrix[m]=A.shadow.matrix,E++}i.directional[m]=X,m++}else if(A.isSpotLight){let X=e.get(A);X.position.setFromMatrixPosition(A.matrixWorld),X.color.copy(G).multiplyScalar(B),X.distance=Y,X.coneCos=Math.cos(A.angle),X.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),X.decay=A.decay,i.spot[v]=X;let J=A.shadow;if(A.map&&(i.spotLightMap[D]=A.map,D++,J.updateMatrices(A),A.castShadow&&I++),i.spotLightMatrix[v]=J.matrix,A.castShadow){let V=t.get(A);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,i.spotShadow[v]=V,i.spotShadowMap[v]=Z,x++}v++}else if(A.isRectAreaLight){let X=e.get(A);X.color.copy(G).multiplyScalar(B),X.halfWidth.set(A.width*.5,0,0),X.halfHeight.set(0,A.height*.5,0),i.rectArea[p]=X,p++}else if(A.isPointLight){let X=e.get(A);if(X.color.copy(A.color).multiplyScalar(A.intensity),X.distance=A.distance,X.decay=A.decay,A.castShadow){let J=A.shadow,V=t.get(A);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,V.shadowCameraNear=J.camera.near,V.shadowCameraFar=J.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=A.shadow.matrix,w++}i.point[g]=X,g++}else if(A.isHemisphereLight){let X=e.get(A);X.skyColor.copy(A.color).multiplyScalar(B),X.groundColor.copy(A.groundColor).multiplyScalar(B),i.hemi[f]=X,f++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let L=i.hash;(L.directionalLength!==m||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==p||L.hemiLength!==f||L.numDirectionalShadows!==E||L.numPointShadows!==w||L.numSpotShadows!==x||L.numSpotMaps!==D||L.numLightProbes!==C)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=p,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=x+D-I,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=C,L.directionalLength=m,L.pointLength=g,L.spotLength=v,L.rectAreaLength=p,L.hemiLength=f,L.numDirectionalShadows=E,L.numPointShadows=w,L.numSpotShadows=x,L.numSpotMaps=D,L.numLightProbes=C,i.version=X1++)}function c(l,h){let u=0,d=0,m=0,g=0,v=0,p=h.matrixWorldInverse;for(let f=0,E=l.length;f<E;f++){let w=l[f];if(w.isDirectionalLight){let x=i.directional[u];x.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(p),u++}else if(w.isSpotLight){let x=i.spot[m];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(p),m++}else if(w.isRectAreaLight){let x=i.rectArea[g];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(p),o.identity(),s.copy(w.matrixWorld),s.premultiply(p),o.extractRotation(s),x.halfWidth.set(w.width*.5,0,0),x.halfHeight.set(0,w.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){let x=i.point[d];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(p),d++}else if(w.isHemisphereLight){let x=i.hemi[v];x.direction.setFromMatrixPosition(w.matrixWorld),x.direction.transformDirection(p),v++}}}return{setup:a,setupView:c,state:i}}function Px(n){let e=new $1(n),t=[],i=[];function r(h){l.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function Y1(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new Px(n),e.set(r,[a])):s>=o.length?(a=new Px(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Z1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,K1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function J1(n,e,t){let i=new Ac,r=new vt,s=new vt,o=new Ut,a=new rd({depthPacking:$b}),c=new sd,l={},h=t.maxTextureSize,u={[fr]:Ci,[Ci]:fr,[Wn]:Wn},d=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:Z1,fragmentShader:K1}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new es;g.setAttribute("position",new qi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Fi(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ag;let f=this.type;this.render=function(I,C,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||I.length===0)return;let M=n.getRenderTarget(),b=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),G=n.state;G.setBlending(gr),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let B=f!==Gn&&this.type===Gn,Y=f===Gn&&this.type!==Gn;for(let Z=0,X=I.length;Z<X;Z++){let J=I[Z],V=J.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);let oe=V.getFrameExtents();if(r.multiply(oe),s.copy(V.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/oe.x),r.x=s.x*oe.x,V.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/oe.y),r.y=s.y*oe.y,V.mapSize.y=s.y)),V.map===null||B===!0||Y===!0){let Ee=this.type!==Gn?{minFilter:on,magFilter:on}:{};V.map!==null&&V.map.dispose(),V.map=new Hn(r.x,r.y,Ee),V.map.texture.name=J.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();let pe=V.getViewportCount();for(let Ee=0;Ee<pe;Ee++){let $e=V.getViewport(Ee);o.set(s.x*$e.x,s.y*$e.y,s.x*$e.z,s.y*$e.w),G.viewport(o),V.updateMatrices(J,Ee),i=V.getFrustum(),x(C,L,V.camera,J,this.type)}V.isPointLightShadow!==!0&&this.type===Gn&&E(V,L),V.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(M,b,A)};function E(I,C){let L=e.update(v);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,m.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Hn(r.x,r.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(C,null,L,d,v,null),m.uniforms.shadow_pass.value=I.mapPass.texture,m.uniforms.resolution.value=I.mapSize,m.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(C,null,L,m,v,null)}function w(I,C,L,M){let b=null,A=L.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(A!==void 0)b=A;else if(b=L.isPointLight===!0?c:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let G=b.uuid,B=C.uuid,Y=l[G];Y===void 0&&(Y={},l[G]=Y);let Z=Y[B];Z===void 0&&(Z=b.clone(),Y[B]=Z,C.addEventListener("dispose",D)),b=Z}if(b.visible=C.visible,b.wireframe=C.wireframe,M===Gn?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:u[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,L.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let G=n.properties.get(b);G.light=L}return b}function x(I,C,L,M,b){if(I.visible===!1)return;if(I.layers.test(C.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&b===Gn)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,I.matrixWorld);let B=e.update(I),Y=I.material;if(Array.isArray(Y)){let Z=B.groups;for(let X=0,J=Z.length;X<J;X++){let V=Z[X],oe=Y[V.materialIndex];if(oe&&oe.visible){let pe=w(I,oe,M,b);I.onBeforeShadow(n,I,C,L,B,pe,V),n.renderBufferDirect(L,null,B,pe,I,V),I.onAfterShadow(n,I,C,L,B,pe,V)}}}else if(Y.visible){let Z=w(I,Y,M,b);I.onBeforeShadow(n,I,C,L,B,Z,null),n.renderBufferDirect(L,null,B,Z,I,null),I.onAfterShadow(n,I,C,L,B,Z,null)}}let G=I.children;for(let B=0,Y=G.length;B<Y;B++)x(G[B],C,L,M,b)}function D(I){I.target.removeEventListener("dispose",D);for(let L in l){let M=l[L],b=I.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}var Q1={[gd]:_d,[vd]:xd,[yd]:Md,[Fs]:bd,[_d]:gd,[xd]:vd,[Md]:yd,[bd]:Fs};function eD(n,e){function t(){let R=!1,le=new Ut,z=null,$=new Ut(0,0,0,0);return{setMask:function(ue){z!==ue&&!R&&(n.colorMask(ue,ue,ue,ue),z=ue)},setLocked:function(ue){R=ue},setClear:function(ue,he,Ve,Lt,mi){mi===!0&&(ue*=Lt,he*=Lt,Ve*=Lt),le.set(ue,he,Ve,Lt),$.equals(le)===!1&&(n.clearColor(ue,he,Ve,Lt),$.copy(le))},reset:function(){R=!1,z=null,$.set(-1,0,0,0)}}}function i(){let R=!1,le=!1,z=null,$=null,ue=null;return{setReversed:function(he){if(le!==he){let Ve=e.get("EXT_clip_control");he?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),le=he;let Lt=ue;ue=null,this.setClear(Lt)}},getReversed:function(){return le},setTest:function(he){he?ae(n.DEPTH_TEST):Oe(n.DEPTH_TEST)},setMask:function(he){z!==he&&!R&&(n.depthMask(he),z=he)},setFunc:function(he){if(le&&(he=Q1[he]),$!==he){switch(he){case gd:n.depthFunc(n.NEVER);break;case _d:n.depthFunc(n.ALWAYS);break;case vd:n.depthFunc(n.LESS);break;case Fs:n.depthFunc(n.LEQUAL);break;case yd:n.depthFunc(n.EQUAL);break;case bd:n.depthFunc(n.GEQUAL);break;case xd:n.depthFunc(n.GREATER);break;case Md:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}$=he}},setLocked:function(he){R=he},setClear:function(he){ue!==he&&(le&&(he=1-he),n.clearDepth(he),ue=he)},reset:function(){R=!1,z=null,$=null,ue=null,le=!1}}}function r(){let R=!1,le=null,z=null,$=null,ue=null,he=null,Ve=null,Lt=null,mi=null;return{setTest:function(ft){R||(ft?ae(n.STENCIL_TEST):Oe(n.STENCIL_TEST))},setMask:function(ft){le!==ft&&!R&&(n.stencilMask(ft),le=ft)},setFunc:function(ft,cn,$n){(z!==ft||$!==cn||ue!==$n)&&(n.stencilFunc(ft,cn,$n),z=ft,$=cn,ue=$n)},setOp:function(ft,cn,$n){(he!==ft||Ve!==cn||Lt!==$n)&&(n.stencilOp(ft,cn,$n),he=ft,Ve=cn,Lt=$n)},setLocked:function(ft){R=ft},setClear:function(ft){mi!==ft&&(n.clearStencil(ft),mi=ft)},reset:function(){R=!1,le=null,z=null,$=null,ue=null,he=null,Ve=null,Lt=null,mi=null}}}let s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,m=[],g=null,v=!1,p=null,f=null,E=null,w=null,x=null,D=null,I=null,C=new ot(0,0,0),L=0,M=!1,b=null,A=null,G=null,B=null,Y=null,Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,J=0,V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(V)[1]),X=J>=1):V.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),X=J>=2);let oe=null,pe={},Ee=n.getParameter(n.SCISSOR_BOX),$e=n.getParameter(n.VIEWPORT),yt=new Ut().fromArray(Ee),W=new Ut().fromArray($e);function ie(R,le,z,$){let ue=new Uint8Array(4),he=n.createTexture();n.bindTexture(R,he),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ve=0;Ve<z;Ve++)R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY?n.texImage3D(le,0,n.RGBA,1,1,$,0,n.RGBA,n.UNSIGNED_BYTE,ue):n.texImage2D(le+Ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ue);return he}let xe={};xe[n.TEXTURE_2D]=ie(n.TEXTURE_2D,n.TEXTURE_2D,1),xe[n.TEXTURE_CUBE_MAP]=ie(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[n.TEXTURE_2D_ARRAY]=ie(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),xe[n.TEXTURE_3D]=ie(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(n.DEPTH_TEST),o.setFunc(Fs),tt(!1),Je(og),ae(n.CULL_FACE),T(gr);function ae(R){h[R]!==!0&&(n.enable(R),h[R]=!0)}function Oe(R){h[R]!==!1&&(n.disable(R),h[R]=!1)}function ct(R,le){return u[R]!==le?(n.bindFramebuffer(R,le),u[R]=le,R===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=le),R===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=le),!0):!1}function Fe(R,le){let z=m,$=!1;if(R){z=d.get(le),z===void 0&&(z=[],d.set(le,z));let ue=R.textures;if(z.length!==ue.length||z[0]!==n.COLOR_ATTACHMENT0){for(let he=0,Ve=ue.length;he<Ve;he++)z[he]=n.COLOR_ATTACHMENT0+he;z.length=ue.length,$=!0}}else z[0]!==n.BACK&&(z[0]=n.BACK,$=!0);$&&n.drawBuffers(z)}function Bt(R){return g!==R?(n.useProgram(R),g=R,!0):!1}let It={[Jr]:n.FUNC_ADD,[bb]:n.FUNC_SUBTRACT,[xb]:n.FUNC_REVERSE_SUBTRACT};It[Mb]=n.MIN,It[Sb]=n.MAX;let Ke={[wb]:n.ZERO,[Eb]:n.ONE,[Cb]:n.SRC_COLOR,[Xu]:n.SRC_ALPHA,[Pb]:n.SRC_ALPHA_SATURATE,[Ib]:n.DST_COLOR,[Ab]:n.DST_ALPHA,[Tb]:n.ONE_MINUS_SRC_COLOR,[qu]:n.ONE_MINUS_SRC_ALPHA,[Db]:n.ONE_MINUS_DST_COLOR,[Rb]:n.ONE_MINUS_DST_ALPHA,[Ob]:n.CONSTANT_COLOR,[Lb]:n.ONE_MINUS_CONSTANT_COLOR,[Fb]:n.CONSTANT_ALPHA,[Nb]:n.ONE_MINUS_CONSTANT_ALPHA};function T(R,le,z,$,ue,he,Ve,Lt,mi,ft){if(R===gr){v===!0&&(Oe(n.BLEND),v=!1);return}if(v===!1&&(ae(n.BLEND),v=!0),R!==yb){if(R!==p||ft!==M){if((f!==Jr||x!==Jr)&&(n.blendEquation(n.FUNC_ADD),f=Jr,x=Jr),ft)switch(R){case Ls:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cg:n.blendFunc(n.ONE,n.ONE);break;case lg:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hg:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Ls:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cg:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case lg:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hg:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}E=null,w=null,D=null,I=null,C.set(0,0,0),L=0,p=R,M=ft}return}ue=ue||le,he=he||z,Ve=Ve||$,(le!==f||ue!==x)&&(n.blendEquationSeparate(It[le],It[ue]),f=le,x=ue),(z!==E||$!==w||he!==D||Ve!==I)&&(n.blendFuncSeparate(Ke[z],Ke[$],Ke[he],Ke[Ve]),E=z,w=$,D=he,I=Ve),(Lt.equals(C)===!1||mi!==L)&&(n.blendColor(Lt.r,Lt.g,Lt.b,mi),C.copy(Lt),L=mi),p=R,M=!1}function Yi(R,le){R.side===Wn?Oe(n.CULL_FACE):ae(n.CULL_FACE);let z=R.side===Ci;le&&(z=!z),tt(z),R.blending===Ls&&R.transparent===!1?T(gr):T(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),o.setFunc(R.depthFunc),o.setTest(R.depthTest),o.setMask(R.depthWrite),s.setMask(R.colorWrite);let $=R.stencilWrite;a.setTest($),$&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Et(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?ae(n.SAMPLE_ALPHA_TO_COVERAGE):Oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function tt(R){b!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),b=R)}function Je(R){R!==gb?(ae(n.CULL_FACE),R!==A&&(R===og?n.cullFace(n.BACK):R===_b?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Oe(n.CULL_FACE),A=R}function Ce(R){R!==G&&(X&&n.lineWidth(R),G=R)}function Et(R,le,z){R?(ae(n.POLYGON_OFFSET_FILL),(B!==le||Y!==z)&&(n.polygonOffset(le,z),B=le,Y=z)):Oe(n.POLYGON_OFFSET_FILL)}function we(R){R?ae(n.SCISSOR_TEST):Oe(n.SCISSOR_TEST)}function S(R){R===void 0&&(R=n.TEXTURE0+Z-1),oe!==R&&(n.activeTexture(R),oe=R)}function _(R,le,z){z===void 0&&(oe===null?z=n.TEXTURE0+Z-1:z=oe);let $=pe[z];$===void 0&&($={type:void 0,texture:void 0},pe[z]=$),($.type!==R||$.texture!==le)&&(oe!==z&&(n.activeTexture(z),oe=z),n.bindTexture(R,le||xe[R]),$.type=R,$.texture=le)}function F(){let R=pe[oe];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function q(){try{n.compressedTexImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function K(){try{n.compressedTexImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function H(){try{n.texSubImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Se(){try{n.texSubImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ce(){try{n.compressedTexSubImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function me(){try{n.compressedTexSubImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function it(){try{n.texStorage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ee(){try{n.texStorage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ge(){try{n.texImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Le(){try{n.texImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ke(R){yt.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),yt.copy(R))}function _e(R){W.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),W.copy(R))}function Qe(R,le){let z=l.get(le);z===void 0&&(z=new WeakMap,l.set(le,z));let $=z.get(R);$===void 0&&($=n.getUniformBlockIndex(le,R.name),z.set(R,$))}function Ge(R,le){let $=l.get(le).get(R);c.get(le)!==$&&(n.uniformBlockBinding(le,$,R.__bindingPointIndex),c.set(le,$))}function St(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},oe=null,pe={},u={},d=new WeakMap,m=[],g=null,v=!1,p=null,f=null,E=null,w=null,x=null,D=null,I=null,C=new ot(0,0,0),L=0,M=!1,b=null,A=null,G=null,B=null,Y=null,yt.set(0,0,n.canvas.width,n.canvas.height),W.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ae,disable:Oe,bindFramebuffer:ct,drawBuffers:Fe,useProgram:Bt,setBlending:T,setMaterial:Yi,setFlipSided:tt,setCullFace:Je,setLineWidth:Ce,setPolygonOffset:Et,setScissorTest:we,activeTexture:S,bindTexture:_,unbindTexture:F,compressedTexImage2D:q,compressedTexImage3D:K,texImage2D:ge,texImage3D:Le,updateUBOMapping:Qe,uniformBlockBinding:Ge,texStorage2D:it,texStorage3D:ee,texSubImage2D:H,texSubImage3D:Se,compressedTexSubImage2D:ce,compressedTexSubImage3D:me,scissor:ke,viewport:_e,reset:St}}function tD(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new vt,h=new WeakMap,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,_){return m?new OffscreenCanvas(S,_):bc("canvas")}function v(S,_,F){let q=1,K=we(S);if((K.width>F||K.height>F)&&(q=F/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let H=Math.floor(q*K.width),Se=Math.floor(q*K.height);u===void 0&&(u=g(H,Se));let ce=_?g(H,Se):u;return ce.width=H,ce.height=Se,ce.getContext("2d").drawImage(S,0,0,H,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+H+"x"+Se+")."),ce}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),S;return S}function p(S){return S.generateMipmaps}function f(S){n.generateMipmap(S)}function E(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(S,_,F,q,K=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let H=_;if(_===n.RED&&(F===n.FLOAT&&(H=n.R32F),F===n.HALF_FLOAT&&(H=n.R16F),F===n.UNSIGNED_BYTE&&(H=n.R8)),_===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(H=n.R8UI),F===n.UNSIGNED_SHORT&&(H=n.R16UI),F===n.UNSIGNED_INT&&(H=n.R32UI),F===n.BYTE&&(H=n.R8I),F===n.SHORT&&(H=n.R16I),F===n.INT&&(H=n.R32I)),_===n.RG&&(F===n.FLOAT&&(H=n.RG32F),F===n.HALF_FLOAT&&(H=n.RG16F),F===n.UNSIGNED_BYTE&&(H=n.RG8)),_===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(H=n.RG8UI),F===n.UNSIGNED_SHORT&&(H=n.RG16UI),F===n.UNSIGNED_INT&&(H=n.RG32UI),F===n.BYTE&&(H=n.RG8I),F===n.SHORT&&(H=n.RG16I),F===n.INT&&(H=n.RG32I)),_===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(H=n.RGB8UI),F===n.UNSIGNED_SHORT&&(H=n.RGB16UI),F===n.UNSIGNED_INT&&(H=n.RGB32UI),F===n.BYTE&&(H=n.RGB8I),F===n.SHORT&&(H=n.RGB16I),F===n.INT&&(H=n.RGB32I)),_===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(H=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(H=n.RGBA16UI),F===n.UNSIGNED_INT&&(H=n.RGBA32UI),F===n.BYTE&&(H=n.RGBA8I),F===n.SHORT&&(H=n.RGBA16I),F===n.INT&&(H=n.RGBA32I)),_===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(H=n.RGB9_E5),_===n.RGBA){let Se=K?vc:st.getTransfer(q);F===n.FLOAT&&(H=n.RGBA32F),F===n.HALF_FLOAT&&(H=n.RGBA16F),F===n.UNSIGNED_BYTE&&(H=Se===mt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(H=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(H=n.RGB5_A1)}return(H===n.R16F||H===n.R32F||H===n.RG16F||H===n.RG32F||H===n.RGBA16F||H===n.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function x(S,_){let F;return S?_===null||_===ss||_===ia?F=n.DEPTH24_STENCIL8:_===Xn?F=n.DEPTH32F_STENCIL8:_===ea&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ss||_===ia?F=n.DEPTH_COMPONENT24:_===Xn?F=n.DEPTH_COMPONENT32F:_===ea&&(F=n.DEPTH_COMPONENT16),F}function D(S,_){return p(S)===!0||S.isFramebufferTexture&&S.minFilter!==on&&S.minFilter!==wn?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function I(S){let _=S.target;_.removeEventListener("dispose",I),L(_),_.isVideoTexture&&h.delete(_)}function C(S){let _=S.target;_.removeEventListener("dispose",C),b(_)}function L(S){let _=i.get(S);if(_.__webglInit===void 0)return;let F=S.source,q=d.get(F);if(q){let K=q[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&M(S),Object.keys(q).length===0&&d.delete(F)}i.remove(S)}function M(S){let _=i.get(S);n.deleteTexture(_.__webglTexture);let F=S.source,q=d.get(F);delete q[_.__cacheKey],o.memory.textures--}function b(S){let _=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let K=0;K<_.__webglFramebuffer[q].length;K++)n.deleteFramebuffer(_.__webglFramebuffer[q][K]);else n.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)n.deleteFramebuffer(_.__webglFramebuffer[q]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let F=S.textures;for(let q=0,K=F.length;q<K;q++){let H=i.get(F[q]);H.__webglTexture&&(n.deleteTexture(H.__webglTexture),o.memory.textures--),i.remove(F[q])}i.remove(S)}let A=0;function G(){A=0}function B(){let S=A;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),A+=1,S}function Y(S){let _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function Z(S,_){let F=i.get(S);if(S.isVideoTexture&&Ce(S),S.isRenderTargetTexture===!1&&S.version>0&&F.__version!==S.version){let q=S.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(F,S,_);return}}t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+_)}function X(S,_){let F=i.get(S);if(S.version>0&&F.__version!==S.version){W(F,S,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+_)}function J(S,_){let F=i.get(S);if(S.version>0&&F.__version!==S.version){W(F,S,_);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+_)}function V(S,_){let F=i.get(S);if(S.version>0&&F.__version!==S.version){ie(F,S,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+_)}let oe={[$u]:n.REPEAT,[Kr]:n.CLAMP_TO_EDGE,[Yu]:n.MIRRORED_REPEAT},pe={[on]:n.NEAREST,[Xb]:n.NEAREST_MIPMAP_NEAREST,[Oc]:n.NEAREST_MIPMAP_LINEAR,[wn]:n.LINEAR,[Ed]:n.LINEAR_MIPMAP_NEAREST,[rs]:n.LINEAR_MIPMAP_LINEAR},Ee={[Kb]:n.NEVER,[nx]:n.ALWAYS,[Jb]:n.LESS,[Mg]:n.LEQUAL,[Qb]:n.EQUAL,[ix]:n.GEQUAL,[ex]:n.GREATER,[tx]:n.NOTEQUAL};function $e(S,_){if(_.type===Xn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===wn||_.magFilter===Ed||_.magFilter===Oc||_.magFilter===rs||_.minFilter===wn||_.minFilter===Ed||_.minFilter===Oc||_.minFilter===rs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,oe[_.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,oe[_.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,oe[_.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,pe[_.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,pe[_.minFilter]),_.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,Ee[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===on||_.minFilter!==Oc&&_.minFilter!==rs||_.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function yt(S,_){let F=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",I));let q=_.source,K=d.get(q);K===void 0&&(K={},d.set(q,K));let H=Y(_);if(H!==S.__cacheKey){K[H]===void 0&&(K[H]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),K[H].usedTimes++;let Se=K[S.__cacheKey];Se!==void 0&&(K[S.__cacheKey].usedTimes--,Se.usedTimes===0&&M(_)),S.__cacheKey=H,S.__webglTexture=K[H].texture}return F}function W(S,_,F){let q=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=n.TEXTURE_3D);let K=yt(S,_),H=_.source;t.bindTexture(q,S.__webglTexture,n.TEXTURE0+F);let Se=i.get(H);if(H.version!==Se.__version||K===!0){t.activeTexture(n.TEXTURE0+F);let ce=st.getPrimaries(st.workingColorSpace),me=_.colorSpace===vr?null:st.getPrimaries(_.colorSpace),it=_.colorSpace===vr||ce===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let ee=v(_.image,!1,r.maxTextureSize);ee=Et(_,ee);let ge=s.convert(_.format,_.colorSpace),Le=s.convert(_.type),ke=w(_.internalFormat,ge,Le,_.colorSpace,_.isVideoTexture);$e(q,_);let _e,Qe=_.mipmaps,Ge=_.isVideoTexture!==!0,St=Se.__version===void 0||K===!0,R=H.dataReady,le=D(_,ee);if(_.isDepthTexture)ke=x(_.format===na,_.type),St&&(Ge?t.texStorage2D(n.TEXTURE_2D,1,ke,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,ke,ee.width,ee.height,0,ge,Le,null));else if(_.isDataTexture)if(Qe.length>0){Ge&&St&&t.texStorage2D(n.TEXTURE_2D,le,ke,Qe[0].width,Qe[0].height);for(let z=0,$=Qe.length;z<$;z++)_e=Qe[z],Ge?R&&t.texSubImage2D(n.TEXTURE_2D,z,0,0,_e.width,_e.height,ge,Le,_e.data):t.texImage2D(n.TEXTURE_2D,z,ke,_e.width,_e.height,0,ge,Le,_e.data);_.generateMipmaps=!1}else Ge?(St&&t.texStorage2D(n.TEXTURE_2D,le,ke,ee.width,ee.height),R&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ee.width,ee.height,ge,Le,ee.data)):t.texImage2D(n.TEXTURE_2D,0,ke,ee.width,ee.height,0,ge,Le,ee.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ge&&St&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,ke,Qe[0].width,Qe[0].height,ee.depth);for(let z=0,$=Qe.length;z<$;z++)if(_e=Qe[z],_.format!==an)if(ge!==null)if(Ge){if(R)if(_.layerUpdates.size>0){let ue=Ag(_e.width,_e.height,_.format,_.type);for(let he of _.layerUpdates){let Ve=_e.data.subarray(he*ue/_e.data.BYTES_PER_ELEMENT,(he+1)*ue/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,z,0,0,he,_e.width,_e.height,1,ge,Ve)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,z,0,0,0,_e.width,_e.height,ee.depth,ge,_e.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,z,ke,_e.width,_e.height,ee.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?R&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,z,0,0,0,_e.width,_e.height,ee.depth,ge,Le,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,z,ke,_e.width,_e.height,ee.depth,0,ge,Le,_e.data)}else{Ge&&St&&t.texStorage2D(n.TEXTURE_2D,le,ke,Qe[0].width,Qe[0].height);for(let z=0,$=Qe.length;z<$;z++)_e=Qe[z],_.format!==an?ge!==null?Ge?R&&t.compressedTexSubImage2D(n.TEXTURE_2D,z,0,0,_e.width,_e.height,ge,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,z,ke,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?R&&t.texSubImage2D(n.TEXTURE_2D,z,0,0,_e.width,_e.height,ge,Le,_e.data):t.texImage2D(n.TEXTURE_2D,z,ke,_e.width,_e.height,0,ge,Le,_e.data)}else if(_.isDataArrayTexture)if(Ge){if(St&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,ke,ee.width,ee.height,ee.depth),R)if(_.layerUpdates.size>0){let z=Ag(ee.width,ee.height,_.format,_.type);for(let $ of _.layerUpdates){let ue=ee.data.subarray($*z/ee.data.BYTES_PER_ELEMENT,($+1)*z/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$,ee.width,ee.height,1,ge,Le,ue)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ge,Le,ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ke,ee.width,ee.height,ee.depth,0,ge,Le,ee.data);else if(_.isData3DTexture)Ge?(St&&t.texStorage3D(n.TEXTURE_3D,le,ke,ee.width,ee.height,ee.depth),R&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ge,Le,ee.data)):t.texImage3D(n.TEXTURE_3D,0,ke,ee.width,ee.height,ee.depth,0,ge,Le,ee.data);else if(_.isFramebufferTexture){if(St)if(Ge)t.texStorage2D(n.TEXTURE_2D,le,ke,ee.width,ee.height);else{let z=ee.width,$=ee.height;for(let ue=0;ue<le;ue++)t.texImage2D(n.TEXTURE_2D,ue,ke,z,$,0,ge,Le,null),z>>=1,$>>=1}}else if(Qe.length>0){if(Ge&&St){let z=we(Qe[0]);t.texStorage2D(n.TEXTURE_2D,le,ke,z.width,z.height)}for(let z=0,$=Qe.length;z<$;z++)_e=Qe[z],Ge?R&&t.texSubImage2D(n.TEXTURE_2D,z,0,0,ge,Le,_e):t.texImage2D(n.TEXTURE_2D,z,ke,ge,Le,_e);_.generateMipmaps=!1}else if(Ge){if(St){let z=we(ee);t.texStorage2D(n.TEXTURE_2D,le,ke,z.width,z.height)}R&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,Le,ee)}else t.texImage2D(n.TEXTURE_2D,0,ke,ge,Le,ee);p(_)&&f(q),Se.__version=H.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function ie(S,_,F){if(_.image.length!==6)return;let q=yt(S,_),K=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+F);let H=i.get(K);if(K.version!==H.__version||q===!0){t.activeTexture(n.TEXTURE0+F);let Se=st.getPrimaries(st.workingColorSpace),ce=_.colorSpace===vr?null:st.getPrimaries(_.colorSpace),me=_.colorSpace===vr||Se===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let it=_.isCompressedTexture||_.image[0].isCompressedTexture,ee=_.image[0]&&_.image[0].isDataTexture,ge=[];for(let $=0;$<6;$++)!it&&!ee?ge[$]=v(_.image[$],!0,r.maxCubemapSize):ge[$]=ee?_.image[$].image:_.image[$],ge[$]=Et(_,ge[$]);let Le=ge[0],ke=s.convert(_.format,_.colorSpace),_e=s.convert(_.type),Qe=w(_.internalFormat,ke,_e,_.colorSpace),Ge=_.isVideoTexture!==!0,St=H.__version===void 0||q===!0,R=K.dataReady,le=D(_,Le);$e(n.TEXTURE_CUBE_MAP,_);let z;if(it){Ge&&St&&t.texStorage2D(n.TEXTURE_CUBE_MAP,le,Qe,Le.width,Le.height);for(let $=0;$<6;$++){z=ge[$].mipmaps;for(let ue=0;ue<z.length;ue++){let he=z[ue];_.format!==an?ke!==null?Ge?R&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ue,0,0,he.width,he.height,ke,he.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ue,Qe,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?R&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ue,0,0,he.width,he.height,ke,_e,he.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ue,Qe,he.width,he.height,0,ke,_e,he.data)}}}else{if(z=_.mipmaps,Ge&&St){z.length>0&&le++;let $=we(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,le,Qe,$.width,$.height)}for(let $=0;$<6;$++)if(ee){Ge?R&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ge[$].width,ge[$].height,ke,_e,ge[$].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Qe,ge[$].width,ge[$].height,0,ke,_e,ge[$].data);for(let ue=0;ue<z.length;ue++){let Ve=z[ue].image[$].image;Ge?R&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ue+1,0,0,Ve.width,Ve.height,ke,_e,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ue+1,Qe,Ve.width,Ve.height,0,ke,_e,Ve.data)}}else{Ge?R&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ke,_e,ge[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Qe,ke,_e,ge[$]);for(let ue=0;ue<z.length;ue++){let he=z[ue];Ge?R&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ue+1,0,0,ke,_e,he.image[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ue+1,Qe,ke,_e,he.image[$])}}}p(_)&&f(n.TEXTURE_CUBE_MAP),H.__version=K.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function xe(S,_,F,q,K,H){let Se=s.convert(F.format,F.colorSpace),ce=s.convert(F.type),me=w(F.internalFormat,Se,ce,F.colorSpace),it=i.get(_),ee=i.get(F);if(ee.__renderTarget=_,!it.__hasExternalTextures){let ge=Math.max(1,_.width>>H),Le=Math.max(1,_.height>>H);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,H,me,ge,Le,_.depth,0,Se,ce,null):t.texImage2D(K,H,me,ge,Le,0,Se,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),Je(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,K,ee.__webglTexture,0,tt(_)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,K,ee.__webglTexture,H),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(S,_,F){if(n.bindRenderbuffer(n.RENDERBUFFER,S),_.depthBuffer){let q=_.depthTexture,K=q&&q.isDepthTexture?q.type:null,H=x(_.stencilBuffer,K),Se=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=tt(_);Je(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,H,_.width,_.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,H,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,H,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Se,n.RENDERBUFFER,S)}else{let q=_.textures;for(let K=0;K<q.length;K++){let H=q[K],Se=s.convert(H.format,H.colorSpace),ce=s.convert(H.type),me=w(H.internalFormat,Se,ce,H.colorSpace),it=tt(_);F&&Je(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,it,me,_.width,_.height):Je(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,it,me,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,me,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Oe(S,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=i.get(_.depthTexture);q.__renderTarget=_,(!q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Z(_.depthTexture,0);let K=q.__webglTexture,H=tt(_);if(_.depthTexture.format===Zo)Je(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(_.depthTexture.format===na)Je(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function ct(S){let _=i.get(S),F=S.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==S.depthTexture){let q=S.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),q){let K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,q.removeEventListener("dispose",K)};q.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=q}if(S.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Oe(_.__webglFramebuffer,S)}else if(F){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]===void 0)_.__webglDepthbuffer[q]=n.createRenderbuffer(),ae(_.__webglDepthbuffer[q],S,!1);else{let K=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=_.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,H)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),ae(_.__webglDepthbuffer,S,!1);else{let q=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,K)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Fe(S,_,F){let q=i.get(S);_!==void 0&&xe(q.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&ct(S)}function Bt(S){let _=S.texture,F=i.get(S),q=i.get(_);S.addEventListener("dispose",C);let K=S.textures,H=S.isWebGLCubeRenderTarget===!0,Se=K.length>1;if(Se||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=_.version,o.memory.textures++),H){F.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[ce]=[];for(let me=0;me<_.mipmaps.length;me++)F.__webglFramebuffer[ce][me]=n.createFramebuffer()}else F.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let ce=0;ce<_.mipmaps.length;ce++)F.__webglFramebuffer[ce]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Se)for(let ce=0,me=K.length;ce<me;ce++){let it=i.get(K[ce]);it.__webglTexture===void 0&&(it.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&Je(S)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ce=0;ce<K.length;ce++){let me=K[ce];F.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[ce]);let it=s.convert(me.format,me.colorSpace),ee=s.convert(me.type),ge=w(me.internalFormat,it,ee,me.colorSpace,S.isXRRenderTarget===!0),Le=tt(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,ge,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,F.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),ae(F.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(H){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),$e(n.TEXTURE_CUBE_MAP,_);for(let ce=0;ce<6;ce++)if(_.mipmaps&&_.mipmaps.length>0)for(let me=0;me<_.mipmaps.length;me++)xe(F.__webglFramebuffer[ce][me],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,me);else xe(F.__webglFramebuffer[ce],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);p(_)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let ce=0,me=K.length;ce<me;ce++){let it=K[ce],ee=i.get(it);t.bindTexture(n.TEXTURE_2D,ee.__webglTexture),$e(n.TEXTURE_2D,it),xe(F.__webglFramebuffer,S,it,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),p(it)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ce=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,q.__webglTexture),$e(ce,_),_.mipmaps&&_.mipmaps.length>0)for(let me=0;me<_.mipmaps.length;me++)xe(F.__webglFramebuffer[me],S,_,n.COLOR_ATTACHMENT0,ce,me);else xe(F.__webglFramebuffer,S,_,n.COLOR_ATTACHMENT0,ce,0);p(_)&&f(ce),t.unbindTexture()}S.depthBuffer&&ct(S)}function It(S){let _=S.textures;for(let F=0,q=_.length;F<q;F++){let K=_[F];if(p(K)){let H=E(S),Se=i.get(K).__webglTexture;t.bindTexture(H,Se),f(H),t.unbindTexture()}}}let Ke=[],T=[];function Yi(S){if(S.samples>0){if(Je(S)===!1){let _=S.textures,F=S.width,q=S.height,K=n.COLOR_BUFFER_BIT,H=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=i.get(S),ce=_.length>1;if(ce)for(let me=0;me<_.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let me=0;me<_.length;me++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Se.__webglColorRenderbuffer[me]);let it=i.get(_[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,it,0)}n.blitFramebuffer(0,0,F,q,0,0,F,q,K,n.NEAREST),c===!0&&(Ke.length=0,T.length=0,Ke.push(n.COLOR_ATTACHMENT0+me),S.depthBuffer&&S.resolveDepthBuffer===!1&&(Ke.push(H),T.push(H),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,T)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ke))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let me=0;me<_.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,Se.__webglColorRenderbuffer[me]);let it=i.get(_[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,it,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&c){let _=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function tt(S){return Math.min(r.maxSamples,S.samples)}function Je(S){let _=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ce(S){let _=o.render.frame;h.get(S)!==_&&(h.set(S,_),S.update())}function Et(S,_){let F=S.colorSpace,q=S.format,K=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||F!==Ns&&F!==vr&&(st.getTransfer(F)===mt?(q!==an||K!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}function we(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=G,this.setTexture2D=Z,this.setTexture2DArray=X,this.setTexture3D=J,this.setTextureCube=V,this.rebindTextures=Fe,this.setupRenderTarget=Bt,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=Yi,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Je}function iD(n,e){function t(i,r=vr){let s,o=st.getTransfer(r);if(i===jn)return n.UNSIGNED_BYTE;if(i===Td)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ad)return n.UNSIGNED_SHORT_5_5_5_1;if(i===pg)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===dg)return n.BYTE;if(i===fg)return n.SHORT;if(i===ea)return n.UNSIGNED_SHORT;if(i===Cd)return n.INT;if(i===ss)return n.UNSIGNED_INT;if(i===Xn)return n.FLOAT;if(i===ta)return n.HALF_FLOAT;if(i===mg)return n.ALPHA;if(i===gg)return n.RGB;if(i===an)return n.RGBA;if(i===_g)return n.LUMINANCE;if(i===vg)return n.LUMINANCE_ALPHA;if(i===Zo)return n.DEPTH_COMPONENT;if(i===na)return n.DEPTH_STENCIL;if(i===yg)return n.RED;if(i===Rd)return n.RED_INTEGER;if(i===bg)return n.RG;if(i===Id)return n.RG_INTEGER;if(i===Dd)return n.RGBA_INTEGER;if(i===Lc||i===Fc||i===Nc||i===kc)if(o===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Lc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Nc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===kc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Lc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Nc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===kc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Pd||i===Od||i===Ld||i===Fd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Pd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Od)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ld)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Nd||i===kd||i===Ud)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Nd||i===kd)return o===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ud)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Bd||i===zd||i===Vd||i===Hd||i===Gd||i===Wd||i===jd||i===Xd||i===qd||i===$d||i===Yd||i===Zd||i===Kd||i===Jd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Bd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Hd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Gd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===jd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Xd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===qd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===$d)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Yd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Zd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Kd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Uc||i===Qd||i===ef)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Uc)return o===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ef)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xg||i===tf||i===nf||i===rf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Uc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===tf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===nf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ia?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var nD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rD=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Vg=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new os,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new En({vertexShader:nD,fragmentShader:rD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Fi(new Ic(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Hg=class extends pr{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,m=null,g=null,v=new Vg,p=t.getContextAttributes(),f=null,E=null,w=[],x=[],D=new vt,I=null,C=new yi;C.viewport=new Ut;let L=new yi;L.viewport=new Ut;let M=[C,L],b=new pd,A=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ie=w[W];return ie===void 0&&(ie=new Qo,w[W]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(W){let ie=w[W];return ie===void 0&&(ie=new Qo,w[W]=ie),ie.getGripSpace()},this.getHand=function(W){let ie=w[W];return ie===void 0&&(ie=new Qo,w[W]=ie),ie.getHandSpace()};function B(W){let ie=x.indexOf(W.inputSource);if(ie===-1)return;let xe=w[ie];xe!==void 0&&(xe.update(W.inputSource,W.frame,l||o),xe.dispatchEvent({type:W.type,data:W.inputSource}))}function Y(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",Z);for(let W=0;W<w.length;W++){let ie=x[W];ie!==null&&(x[W]=null,w[W].disconnect(ie))}A=null,G=null,v.reset(),e.setRenderTarget(f),m=null,d=null,u=null,r=null,E=null,yt.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(W){return de(this,null,function*(){if(r=W,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",Z),p.xrCompatible!==!0&&(yield t.makeXRCompatible()),I=e.getPixelRatio(),e.getSize(D),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,ae=null,Oe=null;p.depth&&(Oe=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=p.stencil?na:Zo,ae=p.stencil?ia:ss);let ct={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:s};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(ct),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new Hn(d.textureWidth,d.textureHeight,{format:an,type:jn,depthTexture:new Rc(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let xe={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,xe),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Hn(m.framebufferWidth,m.framebufferHeight,{format:an,type:jn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=yield r.requestReferenceSpace(a),yt.setContext(r),yt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Z(W){for(let ie=0;ie<W.removed.length;ie++){let xe=W.removed[ie],ae=x.indexOf(xe);ae>=0&&(x[ae]=null,w[ae].disconnect(xe))}for(let ie=0;ie<W.added.length;ie++){let xe=W.added[ie],ae=x.indexOf(xe);if(ae===-1){for(let ct=0;ct<w.length;ct++)if(ct>=x.length){x.push(xe),ae=ct;break}else if(x[ct]===null){x[ct]=xe,ae=ct;break}if(ae===-1)break}let Oe=w[ae];Oe&&Oe.connect(xe)}}let X=new U,J=new U;function V(W,ie,xe){X.setFromMatrixPosition(ie.matrixWorld),J.setFromMatrixPosition(xe.matrixWorld);let ae=X.distanceTo(J),Oe=ie.projectionMatrix.elements,ct=xe.projectionMatrix.elements,Fe=Oe[14]/(Oe[10]-1),Bt=Oe[14]/(Oe[10]+1),It=(Oe[9]+1)/Oe[5],Ke=(Oe[9]-1)/Oe[5],T=(Oe[8]-1)/Oe[0],Yi=(ct[8]+1)/ct[0],tt=Fe*T,Je=Fe*Yi,Ce=ae/(-T+Yi),Et=Ce*-T;if(ie.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Et),W.translateZ(Ce),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Oe[10]===-1)W.projectionMatrix.copy(ie.projectionMatrix),W.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let we=Fe+Ce,S=Bt+Ce,_=tt-Et,F=Je+(ae-Et),q=It*Bt/S*we,K=Ke*Bt/S*we;W.projectionMatrix.makePerspective(_,F,q,K,we,S),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function oe(W,ie){ie===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ie.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let ie=W.near,xe=W.far;v.texture!==null&&(v.depthNear>0&&(ie=v.depthNear),v.depthFar>0&&(xe=v.depthFar)),b.near=L.near=C.near=ie,b.far=L.far=C.far=xe,(A!==b.near||G!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),A=b.near,G=b.far),C.layers.mask=W.layers.mask|2,L.layers.mask=W.layers.mask|4,b.layers.mask=C.layers.mask|L.layers.mask;let ae=W.parent,Oe=b.cameras;oe(b,ae);for(let ct=0;ct<Oe.length;ct++)oe(Oe[ct],ae);Oe.length===2?V(b,C,L):b.projectionMatrix.copy(C.projectionMatrix),pe(W,b,ae)};function pe(W,ie,xe){xe===null?W.matrix.copy(ie.matrixWorld):(W.matrix.copy(xe.matrixWorld),W.matrix.invert(),W.matrix.multiply(ie.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ie.projectionMatrix),W.projectionMatrixInverse.copy(ie.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ku*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(W){c=W,d!==null&&(d.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(b)};let Ee=null;function $e(W,ie){if(h=ie.getViewerPose(l||o),g=ie,h!==null){let xe=h.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let ae=!1;xe.length!==b.cameras.length&&(b.cameras.length=0,ae=!0);for(let Fe=0;Fe<xe.length;Fe++){let Bt=xe[Fe],It=null;if(m!==null)It=m.getViewport(Bt);else{let T=u.getViewSubImage(d,Bt);It=T.viewport,Fe===0&&(e.setRenderTargetTextures(E,T.colorTexture,T.depthStencilTexture),e.setRenderTarget(E))}let Ke=M[Fe];Ke===void 0&&(Ke=new yi,Ke.layers.enable(Fe),Ke.viewport=new Ut,M[Fe]=Ke),Ke.matrix.fromArray(Bt.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(Bt.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(It.x,It.y,It.width,It.height),Fe===0&&(b.matrix.copy(Ke.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ae===!0&&b.cameras.push(Ke)}let Oe=r.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&u){let Fe=u.getDepthInformation(xe[0]);Fe&&Fe.isValid&&Fe.texture&&v.init(e,Fe,r.renderState)}}for(let xe=0;xe<w.length;xe++){let ae=x[xe],Oe=w[xe];ae!==null&&Oe!==void 0&&Oe.update(ae,ie,l||o)}Ee&&Ee(W,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),g=null}let yt=new Ox;yt.setAnimationLoop($e),this.setAnimationLoop=function(W){Ee=W},this.dispose=function(){}}},Xs=new ks,sD=new Kt;function oD(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,Eg(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,E,w,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),u(p,f)):f.isMeshPhongMaterial?(s(p,f),h(p,f)):f.isMeshStandardMaterial?(s(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,x)):f.isMeshMatcapMaterial?(s(p,f),g(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),v(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?c(p,f,E,w):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Ci&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Ci&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let E=e.get(f),w=E.envMap,x=E.envMapRotation;w&&(p.envMap.value=w,Xs.copy(x),Xs.x*=-1,Xs.y*=-1,Xs.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Xs.y*=-1,Xs.z*=-1),p.envMapRotation.value.setFromMatrix4(sD.makeRotationFromEuler(Xs)),p.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,E,w){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*E,p.scale.value=w*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,E){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ci&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function v(p,f){let E=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function aD(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,w){let x=w.program;i.uniformBlockBinding(E,x)}function l(E,w){let x=r[E.id];x===void 0&&(g(E),x=h(E),r[E.id]=x,E.addEventListener("dispose",p));let D=w.program;i.updateUBOMapping(E,D);let I=e.render.frame;s[E.id]!==I&&(d(E),s[E.id]=I)}function h(E){let w=u();E.__bindingPointIndex=w;let x=n.createBuffer(),D=E.__size,I=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,D,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,x),x}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){let w=r[E.id],x=E.uniforms,D=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let I=0,C=x.length;I<C;I++){let L=Array.isArray(x[I])?x[I]:[x[I]];for(let M=0,b=L.length;M<b;M++){let A=L[M];if(m(A,I,M,D)===!0){let G=A.__offset,B=Array.isArray(A.value)?A.value:[A.value],Y=0;for(let Z=0;Z<B.length;Z++){let X=B[Z],J=v(X);typeof X=="number"||typeof X=="boolean"?(A.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,G+Y,A.__data)):X.isMatrix3?(A.__data[0]=X.elements[0],A.__data[1]=X.elements[1],A.__data[2]=X.elements[2],A.__data[3]=0,A.__data[4]=X.elements[3],A.__data[5]=X.elements[4],A.__data[6]=X.elements[5],A.__data[7]=0,A.__data[8]=X.elements[6],A.__data[9]=X.elements[7],A.__data[10]=X.elements[8],A.__data[11]=0):(X.toArray(A.__data,Y),Y+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(E,w,x,D){let I=E.value,C=w+"_"+x;if(D[C]===void 0)return typeof I=="number"||typeof I=="boolean"?D[C]=I:D[C]=I.clone(),!0;{let L=D[C];if(typeof I=="number"||typeof I=="boolean"){if(L!==I)return D[C]=I,!0}else if(L.equals(I)===!1)return L.copy(I),!0}return!1}function g(E){let w=E.uniforms,x=0,D=16;for(let C=0,L=w.length;C<L;C++){let M=Array.isArray(w[C])?w[C]:[w[C]];for(let b=0,A=M.length;b<A;b++){let G=M[b],B=Array.isArray(G.value)?G.value:[G.value];for(let Y=0,Z=B.length;Y<Z;Y++){let X=B[Y],J=v(X),V=x%D,oe=V%J.boundary,pe=V+oe;x+=oe,pe!==0&&D-pe<J.storage&&(x+=D-pe),G.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=x,x+=J.storage}}}let I=x%D;return I>0&&(x+=D-I),E.__size=x,E.__cache={},this}function v(E){let w={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(w.boundary=4,w.storage=4):E.isVector2?(w.boundary=8,w.storage=8):E.isVector3||E.isColor?(w.boundary=16,w.storage=12):E.isVector4?(w.boundary=16,w.storage=16):E.isMatrix3?(w.boundary=48,w.storage=48):E.isMatrix4?(w.boundary=64,w.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),w}function p(E){let w=E.target;w.removeEventListener("dispose",p);let x=o.indexOf(w.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function f(){for(let E in r)n.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:c,update:l,dispose:f}}var lf=class{constructor(e={}){let{canvas:t=rx(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;let g=new Uint32Array(4),v=new Int32Array(4),p=null,f=null,E=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_r,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,D=!1;this._outputColorSpace=Xi;let I=0,C=0,L=null,M=-1,b=null,A=new Ut,G=new Ut,B=null,Y=new ot(0),Z=0,X=t.width,J=t.height,V=1,oe=null,pe=null,Ee=new Ut(0,0,X,J),$e=new Ut(0,0,X,J),yt=!1,W=new Ac,ie=!1,xe=!1,ae=new Kt,Oe=new Kt,ct=new U,Fe=new Ut,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},It=!1;function Ke(){return L===null?V:1}let T=i;function Yi(y,P){return t.getContext(y,P)}try{let y={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${md}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",he,!1),T===null){let P="webgl2";if(T=Yi(P,y),T===null)throw Yi(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let tt,Je,Ce,Et,we,S,_,F,q,K,H,Se,ce,me,it,ee,ge,Le,ke,_e,Qe,Ge,St,R;function le(){tt=new EI(T),tt.init(),Ge=new iD(T,tt),Je=new vI(T,tt,e,Ge),Ce=new eD(T,tt),Je.reverseDepthBuffer&&d&&Ce.buffers.depth.setReversed(!0),Et=new AI(T),we=new V1,S=new tD(T,tt,Ce,we,Je,Ge,Et),_=new bI(x),F=new wI(x),q=new LT(T),St=new gI(T,q),K=new CI(T,q,Et,St),H=new II(T,K,q,Et),ke=new RI(T,Je,S),ee=new yI(we),Se=new z1(x,_,F,tt,Je,St,ee),ce=new oD(x,we),me=new G1,it=new Y1(tt),Le=new mI(x,_,F,Ce,H,m,c),ge=new J1(x,H,Je),R=new aD(T,Et,Je,Ce),_e=new _I(T,tt,Et),Qe=new TI(T,tt,Et),Et.programs=Se.programs,x.capabilities=Je,x.extensions=tt,x.properties=we,x.renderLists=me,x.shadowMap=ge,x.state=Ce,x.info=Et}le();let z=new Hg(x,T);this.xr=z,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let y=tt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=tt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(y){y!==void 0&&(V=y,this.setSize(X,J,!1))},this.getSize=function(y){return y.set(X,J)},this.setSize=function(y,P,N=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=y,J=P,t.width=Math.floor(y*V),t.height=Math.floor(P*V),N===!0&&(t.style.width=y+"px",t.style.height=P+"px"),this.setViewport(0,0,y,P)},this.getDrawingBufferSize=function(y){return y.set(X*V,J*V).floor()},this.setDrawingBufferSize=function(y,P,N){X=y,J=P,V=N,t.width=Math.floor(y*N),t.height=Math.floor(P*N),this.setViewport(0,0,y,P)},this.getCurrentViewport=function(y){return y.copy(A)},this.getViewport=function(y){return y.copy(Ee)},this.setViewport=function(y,P,N,k){y.isVector4?Ee.set(y.x,y.y,y.z,y.w):Ee.set(y,P,N,k),Ce.viewport(A.copy(Ee).multiplyScalar(V).round())},this.getScissor=function(y){return y.copy($e)},this.setScissor=function(y,P,N,k){y.isVector4?$e.set(y.x,y.y,y.z,y.w):$e.set(y,P,N,k),Ce.scissor(G.copy($e).multiplyScalar(V).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(y){Ce.setScissorTest(yt=y)},this.setOpaqueSort=function(y){oe=y},this.setTransparentSort=function(y){pe=y},this.getClearColor=function(y){return y.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(y=!0,P=!0,N=!0){let k=0;if(y){let O=!1;if(L!==null){let Q=L.texture.format;O=Q===Dd||Q===Id||Q===Rd}if(O){let Q=L.texture.type,se=Q===jn||Q===ss||Q===ea||Q===ia||Q===Td||Q===Ad,fe=Le.getClearColor(),ve=Le.getClearAlpha(),Ue=fe.r,Ne=fe.g,Re=fe.b;se?(g[0]=Ue,g[1]=Ne,g[2]=Re,g[3]=ve,T.clearBufferuiv(T.COLOR,0,g)):(v[0]=Ue,v[1]=Ne,v[2]=Re,v[3]=ve,T.clearBufferiv(T.COLOR,0,v))}else k|=T.COLOR_BUFFER_BIT}P&&(k|=T.DEPTH_BUFFER_BIT),N&&(k|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",he,!1),Le.dispose(),me.dispose(),it.dispose(),we.dispose(),_.dispose(),F.dispose(),H.dispose(),St.dispose(),R.dispose(),Se.dispose(),z.dispose(),z.removeEventListener("sessionstart",jg),z.removeEventListener("sessionend",Xg),as.stop()};function $(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let y=Et.autoReset,P=ge.enabled,N=ge.autoUpdate,k=ge.needsUpdate,O=ge.type;le(),Et.autoReset=y,ge.enabled=P,ge.autoUpdate=N,ge.needsUpdate=k,ge.type=O}function he(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ve(y){let P=y.target;P.removeEventListener("dispose",Ve),Lt(P)}function Lt(y){mi(y),we.remove(y)}function mi(y){let P=we.get(y).programs;P!==void 0&&(P.forEach(function(N){Se.releaseProgram(N)}),y.isShaderMaterial&&Se.releaseShaderCache(y))}this.renderBufferDirect=function(y,P,N,k,O,Q){P===null&&(P=Bt);let se=O.isMesh&&O.matrixWorld.determinant()<0,fe=zx(y,P,N,k,O);Ce.setMaterial(k,se);let ve=N.index,Ue=1;if(k.wireframe===!0){if(ve=K.getWireframeAttribute(N),ve===void 0)return;Ue=2}let Ne=N.drawRange,Re=N.attributes.position,nt=Ne.start*Ue,ht=(Ne.start+Ne.count)*Ue;Q!==null&&(nt=Math.max(nt,Q.start*Ue),ht=Math.min(ht,(Q.start+Q.count)*Ue)),ve!==null?(nt=Math.max(nt,0),ht=Math.min(ht,ve.count)):Re!=null&&(nt=Math.max(nt,0),ht=Math.min(ht,Re.count));let Gt=ht-nt;if(Gt<0||Gt===1/0)return;St.setup(O,k,fe,N,ve);let Ft,at=_e;if(ve!==null&&(Ft=q.get(ve),at=Qe,at.setIndex(Ft)),O.isMesh)k.wireframe===!0?(Ce.setLineWidth(k.wireframeLinewidth*Ke()),at.setMode(T.LINES)):at.setMode(T.TRIANGLES);else if(O.isLine){let De=k.linewidth;De===void 0&&(De=1),Ce.setLineWidth(De*Ke()),O.isLineSegments?at.setMode(T.LINES):O.isLineLoop?at.setMode(T.LINE_LOOP):at.setMode(T.LINE_STRIP)}else O.isPoints?at.setMode(T.POINTS):O.isSprite&&at.setMode(T.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)zc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))at.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let De=O._multiDrawStarts,di=O._multiDrawCounts,ut=O._multiDrawCount,ln=ve?q.get(ve).bytesPerElement:1,Ys=we.get(k).currentProgram.getUniforms();for(let Ni=0;Ni<ut;Ni++)Ys.setValue(T,"_gl_DrawID",Ni),at.render(De[Ni]/ln,di[Ni])}else if(O.isInstancedMesh)at.renderInstances(nt,Gt,O.count);else if(N.isInstancedBufferGeometry){let De=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,di=Math.min(N.instanceCount,De);at.renderInstances(nt,Gt,di)}else at.render(nt,Gt)};function ft(y,P,N){y.transparent===!0&&y.side===Wn&&y.forceSinglePass===!1?(y.side=Ci,y.needsUpdate=!0,Gc(y,P,N),y.side=fr,y.needsUpdate=!0,Gc(y,P,N),y.side=Wn):Gc(y,P,N)}this.compile=function(y,P,N=null){N===null&&(N=y),f=it.get(N),f.init(P),w.push(f),N.traverseVisible(function(O){O.isLight&&O.layers.test(P.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),y!==N&&y.traverseVisible(function(O){O.isLight&&O.layers.test(P.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights();let k=new Set;return y.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let Q=O.material;if(Q)if(Array.isArray(Q))for(let se=0;se<Q.length;se++){let fe=Q[se];ft(fe,N,O),k.add(fe)}else ft(Q,N,O),k.add(Q)}),f=w.pop(),k},this.compileAsync=function(y,P,N=null){let k=this.compile(y,P,N);return new Promise(O=>{function Q(){if(k.forEach(function(se){we.get(se).currentProgram.isReady()&&k.delete(se)}),k.size===0){O(y);return}setTimeout(Q,10)}tt.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let cn=null;function $n(y){cn&&cn(y)}function jg(){as.stop()}function Xg(){as.start()}let as=new Ox;as.setAnimationLoop($n),typeof self<"u"&&as.setContext(self),this.setAnimationLoop=function(y){cn=y,z.setAnimationLoop(y),y===null?as.stop():as.start()},z.addEventListener("sessionstart",jg),z.addEventListener("sessionend",Xg),this.render=function(y,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(P),P=z.getCamera()),y.isScene===!0&&y.onBeforeRender(x,y,P,L),f=it.get(y,w.length),f.init(P),w.push(f),Oe.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),W.setFromProjectionMatrix(Oe),xe=this.localClippingEnabled,ie=ee.init(this.clippingPlanes,xe),p=me.get(y,E.length),p.init(),E.push(p),z.enabled===!0&&z.isPresenting===!0){let Q=x.xr.getDepthSensingMesh();Q!==null&&df(Q,P,-1/0,x.sortObjects)}df(y,P,0,x.sortObjects),p.finish(),x.sortObjects===!0&&p.sort(oe,pe),It=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,It&&Le.addToRenderList(p,y),this.info.render.frame++,ie===!0&&ee.beginShadows();let N=f.state.shadowsArray;ge.render(N,y,P),ie===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();let k=p.opaque,O=p.transmissive;if(f.setupLights(),P.isArrayCamera){let Q=P.cameras;if(O.length>0)for(let se=0,fe=Q.length;se<fe;se++){let ve=Q[se];$g(k,O,y,ve)}It&&Le.render(y);for(let se=0,fe=Q.length;se<fe;se++){let ve=Q[se];qg(p,y,ve,ve.viewport)}}else O.length>0&&$g(k,O,y,P),It&&Le.render(y),qg(p,y,P);L!==null&&C===0&&(S.updateMultisampleRenderTarget(L),S.updateRenderTargetMipmap(L)),y.isScene===!0&&y.onAfterRender(x,y,P),St.resetDefaultState(),M=-1,b=null,w.pop(),w.length>0?(f=w[w.length-1],ie===!0&&ee.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,E.pop(),E.length>0?p=E[E.length-1]:p=null};function df(y,P,N,k){if(y.visible===!1)return;if(y.layers.test(P.layers)){if(y.isGroup)N=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(P);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||W.intersectsSprite(y)){k&&Fe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Oe);let se=H.update(y),fe=y.material;fe.visible&&p.push(y,se,fe,N,Fe.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||W.intersectsObject(y))){let se=H.update(y),fe=y.material;if(k&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Fe.copy(y.boundingSphere.center)):(se.boundingSphere===null&&se.computeBoundingSphere(),Fe.copy(se.boundingSphere.center)),Fe.applyMatrix4(y.matrixWorld).applyMatrix4(Oe)),Array.isArray(fe)){let ve=se.groups;for(let Ue=0,Ne=ve.length;Ue<Ne;Ue++){let Re=ve[Ue],nt=fe[Re.materialIndex];nt&&nt.visible&&p.push(y,se,nt,N,Fe.z,Re)}}else fe.visible&&p.push(y,se,fe,N,Fe.z,null)}}let Q=y.children;for(let se=0,fe=Q.length;se<fe;se++)df(Q[se],P,N,k)}function qg(y,P,N,k){let O=y.opaque,Q=y.transmissive,se=y.transparent;f.setupLightsView(N),ie===!0&&ee.setGlobalState(x.clippingPlanes,N),k&&Ce.viewport(A.copy(k)),O.length>0&&Hc(O,P,N),Q.length>0&&Hc(Q,P,N),se.length>0&&Hc(se,P,N),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function $g(y,P,N,k){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[k.id]===void 0&&(f.state.transmissionRenderTarget[k.id]=new Hn(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?ta:jn,minFilter:rs,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));let Q=f.state.transmissionRenderTarget[k.id],se=k.viewport||A;Q.setSize(se.z*x.transmissionResolutionScale,se.w*x.transmissionResolutionScale);let fe=x.getRenderTarget();x.setRenderTarget(Q),x.getClearColor(Y),Z=x.getClearAlpha(),Z<1&&x.setClearColor(16777215,.5),x.clear(),It&&Le.render(N);let ve=x.toneMapping;x.toneMapping=_r;let Ue=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),f.setupLightsView(k),ie===!0&&ee.setGlobalState(x.clippingPlanes,k),Hc(y,N,k),S.updateMultisampleRenderTarget(Q),S.updateRenderTargetMipmap(Q),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let Re=0,nt=P.length;Re<nt;Re++){let ht=P[Re],Gt=ht.object,Ft=ht.geometry,at=ht.material,De=ht.group;if(at.side===Wn&&Gt.layers.test(k.layers)){let di=at.side;at.side=Ci,at.needsUpdate=!0,Yg(Gt,N,k,Ft,at,De),at.side=di,at.needsUpdate=!0,Ne=!0}}Ne===!0&&(S.updateMultisampleRenderTarget(Q),S.updateRenderTargetMipmap(Q))}x.setRenderTarget(fe),x.setClearColor(Y,Z),Ue!==void 0&&(k.viewport=Ue),x.toneMapping=ve}function Hc(y,P,N){let k=P.isScene===!0?P.overrideMaterial:null;for(let O=0,Q=y.length;O<Q;O++){let se=y[O],fe=se.object,ve=se.geometry,Ue=se.group,Ne=se.material;Ne.allowOverride===!0&&k!==null&&(Ne=k),fe.layers.test(N.layers)&&Yg(fe,P,N,ve,Ne,Ue)}}function Yg(y,P,N,k,O,Q){y.onBeforeRender(x,P,N,k,O,Q),y.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),O.onBeforeRender(x,P,N,k,y,Q),O.transparent===!0&&O.side===Wn&&O.forceSinglePass===!1?(O.side=Ci,O.needsUpdate=!0,x.renderBufferDirect(N,P,k,O,y,Q),O.side=fr,O.needsUpdate=!0,x.renderBufferDirect(N,P,k,O,y,Q),O.side=Wn):x.renderBufferDirect(N,P,k,O,y,Q),y.onAfterRender(x,P,N,k,O,Q)}function Gc(y,P,N){P.isScene!==!0&&(P=Bt);let k=we.get(y),O=f.state.lights,Q=f.state.shadowsArray,se=O.state.version,fe=Se.getParameters(y,O.state,Q,P,N),ve=Se.getProgramCacheKey(fe),Ue=k.programs;k.environment=y.isMeshStandardMaterial?P.environment:null,k.fog=P.fog,k.envMap=(y.isMeshStandardMaterial?F:_).get(y.envMap||k.environment),k.envMapRotation=k.environment!==null&&y.envMap===null?P.environmentRotation:y.envMapRotation,Ue===void 0&&(y.addEventListener("dispose",Ve),Ue=new Map,k.programs=Ue);let Ne=Ue.get(ve);if(Ne!==void 0){if(k.currentProgram===Ne&&k.lightsStateVersion===se)return Kg(y,fe),Ne}else fe.uniforms=Se.getUniforms(y),y.onBeforeCompile(fe,x),Ne=Se.acquireProgram(fe,ve),Ue.set(ve,Ne),k.uniforms=fe.uniforms;let Re=k.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Re.clippingPlanes=ee.uniform),Kg(y,fe),k.needsLights=Hx(y),k.lightsStateVersion=se,k.needsLights&&(Re.ambientLightColor.value=O.state.ambient,Re.lightProbe.value=O.state.probe,Re.directionalLights.value=O.state.directional,Re.directionalLightShadows.value=O.state.directionalShadow,Re.spotLights.value=O.state.spot,Re.spotLightShadows.value=O.state.spotShadow,Re.rectAreaLights.value=O.state.rectArea,Re.ltc_1.value=O.state.rectAreaLTC1,Re.ltc_2.value=O.state.rectAreaLTC2,Re.pointLights.value=O.state.point,Re.pointLightShadows.value=O.state.pointShadow,Re.hemisphereLights.value=O.state.hemi,Re.directionalShadowMap.value=O.state.directionalShadowMap,Re.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Re.spotShadowMap.value=O.state.spotShadowMap,Re.spotLightMatrix.value=O.state.spotLightMatrix,Re.spotLightMap.value=O.state.spotLightMap,Re.pointShadowMap.value=O.state.pointShadowMap,Re.pointShadowMatrix.value=O.state.pointShadowMatrix),k.currentProgram=Ne,k.uniformsList=null,Ne}function Zg(y){if(y.uniformsList===null){let P=y.currentProgram.getUniforms();y.uniformsList=oa.seqWithValue(P.seq,y.uniforms)}return y.uniformsList}function Kg(y,P){let N=we.get(y);N.outputColorSpace=P.outputColorSpace,N.batching=P.batching,N.batchingColor=P.batchingColor,N.instancing=P.instancing,N.instancingColor=P.instancingColor,N.instancingMorph=P.instancingMorph,N.skinning=P.skinning,N.morphTargets=P.morphTargets,N.morphNormals=P.morphNormals,N.morphColors=P.morphColors,N.morphTargetsCount=P.morphTargetsCount,N.numClippingPlanes=P.numClippingPlanes,N.numIntersection=P.numClipIntersection,N.vertexAlphas=P.vertexAlphas,N.vertexTangents=P.vertexTangents,N.toneMapping=P.toneMapping}function zx(y,P,N,k,O){P.isScene!==!0&&(P=Bt),S.resetTextureUnits();let Q=P.fog,se=k.isMeshStandardMaterial?P.environment:null,fe=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ns,ve=(k.isMeshStandardMaterial?F:_).get(k.envMap||se),Ue=k.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,Ne=!!N.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Re=!!N.morphAttributes.position,nt=!!N.morphAttributes.normal,ht=!!N.morphAttributes.color,Gt=_r;k.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Gt=x.toneMapping);let Ft=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,at=Ft!==void 0?Ft.length:0,De=we.get(k),di=f.state.lights;if(ie===!0&&(xe===!0||y!==b)){let xi=y===b&&k.id===M;ee.setState(k,y,xi)}let ut=!1;k.version===De.__version?(De.needsLights&&De.lightsStateVersion!==di.state.version||De.outputColorSpace!==fe||O.isBatchedMesh&&De.batching===!1||!O.isBatchedMesh&&De.batching===!0||O.isBatchedMesh&&De.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&De.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&De.instancing===!1||!O.isInstancedMesh&&De.instancing===!0||O.isSkinnedMesh&&De.skinning===!1||!O.isSkinnedMesh&&De.skinning===!0||O.isInstancedMesh&&De.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&De.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&De.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&De.instancingMorph===!1&&O.morphTexture!==null||De.envMap!==ve||k.fog===!0&&De.fog!==Q||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==ee.numPlanes||De.numIntersection!==ee.numIntersection)||De.vertexAlphas!==Ue||De.vertexTangents!==Ne||De.morphTargets!==Re||De.morphNormals!==nt||De.morphColors!==ht||De.toneMapping!==Gt||De.morphTargetsCount!==at)&&(ut=!0):(ut=!0,De.__version=k.version);let ln=De.currentProgram;ut===!0&&(ln=Gc(k,P,O));let Ys=!1,Ni=!1,ca=!1,Tt=ln.getUniforms(),Zi=De.uniforms;if(Ce.useProgram(ln.program)&&(Ys=!0,Ni=!0,ca=!0),k.id!==M&&(M=k.id,Ni=!0),Ys||b!==y){Ce.buffers.depth.getReversed()?(ae.copy(y.projectionMatrix),ox(ae),ax(ae),Tt.setValue(T,"projectionMatrix",ae)):Tt.setValue(T,"projectionMatrix",y.projectionMatrix),Tt.setValue(T,"viewMatrix",y.matrixWorldInverse);let Ti=Tt.map.cameraPosition;Ti!==void 0&&Ti.setValue(T,ct.setFromMatrixPosition(y.matrixWorld)),Je.logarithmicDepthBuffer&&Tt.setValue(T,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Tt.setValue(T,"isOrthographic",y.isOrthographicCamera===!0),b!==y&&(b=y,Ni=!0,ca=!0)}if(O.isSkinnedMesh){Tt.setOptional(T,O,"bindMatrix"),Tt.setOptional(T,O,"bindMatrixInverse");let xi=O.skeleton;xi&&(xi.boneTexture===null&&xi.computeBoneTexture(),Tt.setValue(T,"boneTexture",xi.boneTexture,S))}O.isBatchedMesh&&(Tt.setOptional(T,O,"batchingTexture"),Tt.setValue(T,"batchingTexture",O._matricesTexture,S),Tt.setOptional(T,O,"batchingIdTexture"),Tt.setValue(T,"batchingIdTexture",O._indirectTexture,S),Tt.setOptional(T,O,"batchingColorTexture"),O._colorsTexture!==null&&Tt.setValue(T,"batchingColorTexture",O._colorsTexture,S));let Ki=N.morphAttributes;if((Ki.position!==void 0||Ki.normal!==void 0||Ki.color!==void 0)&&ke.update(O,N,ln),(Ni||De.receiveShadow!==O.receiveShadow)&&(De.receiveShadow=O.receiveShadow,Tt.setValue(T,"receiveShadow",O.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Zi.envMap.value=ve,Zi.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&P.environment!==null&&(Zi.envMapIntensity.value=P.environmentIntensity),Ni&&(Tt.setValue(T,"toneMappingExposure",x.toneMappingExposure),De.needsLights&&Vx(Zi,ca),Q&&k.fog===!0&&ce.refreshFogUniforms(Zi,Q),ce.refreshMaterialUniforms(Zi,k,V,J,f.state.transmissionRenderTarget[y.id]),oa.upload(T,Zg(De),Zi,S)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(oa.upload(T,Zg(De),Zi,S),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Tt.setValue(T,"center",O.center),Tt.setValue(T,"modelViewMatrix",O.modelViewMatrix),Tt.setValue(T,"normalMatrix",O.normalMatrix),Tt.setValue(T,"modelMatrix",O.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let xi=k.uniformsGroups;for(let Ti=0,ff=xi.length;Ti<ff;Ti++){let cs=xi[Ti];R.update(cs,ln),R.bind(cs,ln)}}return ln}function Vx(y,P){y.ambientLightColor.needsUpdate=P,y.lightProbe.needsUpdate=P,y.directionalLights.needsUpdate=P,y.directionalLightShadows.needsUpdate=P,y.pointLights.needsUpdate=P,y.pointLightShadows.needsUpdate=P,y.spotLights.needsUpdate=P,y.spotLightShadows.needsUpdate=P,y.rectAreaLights.needsUpdate=P,y.hemisphereLights.needsUpdate=P}function Hx(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(y,P,N){let k=we.get(y);k.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),we.get(y.texture).__webglTexture=P,we.get(y.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:N,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,P){let N=we.get(y);N.__webglFramebuffer=P,N.__useDefaultFramebuffer=P===void 0};let Gx=T.createFramebuffer();this.setRenderTarget=function(y,P=0,N=0){L=y,I=P,C=N;let k=!0,O=null,Q=!1,se=!1;if(y){let ve=we.get(y);if(ve.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(T.FRAMEBUFFER,null),k=!1;else if(ve.__webglFramebuffer===void 0)S.setupRenderTarget(y);else if(ve.__hasExternalTextures)S.rebindTextures(y,we.get(y.texture).__webglTexture,we.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Re=y.depthTexture;if(ve.__boundDepthTexture!==Re){if(Re!==null&&we.has(Re)&&(y.width!==Re.image.width||y.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(y)}}let Ue=y.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(se=!0);let Ne=we.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ne[P])?O=Ne[P][N]:O=Ne[P],Q=!0):y.samples>0&&S.useMultisampledRTT(y)===!1?O=we.get(y).__webglMultisampledFramebuffer:Array.isArray(Ne)?O=Ne[N]:O=Ne,A.copy(y.viewport),G.copy(y.scissor),B=y.scissorTest}else A.copy(Ee).multiplyScalar(V).floor(),G.copy($e).multiplyScalar(V).floor(),B=yt;if(N!==0&&(O=Gx),Ce.bindFramebuffer(T.FRAMEBUFFER,O)&&k&&Ce.drawBuffers(y,O),Ce.viewport(A),Ce.scissor(G),Ce.setScissorTest(B),Q){let ve=we.get(y.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+P,ve.__webglTexture,N)}else if(se){let ve=we.get(y.texture),Ue=P;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,ve.__webglTexture,N,Ue)}else if(y!==null&&N!==0){let ve=we.get(y.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,ve.__webglTexture,N)}M=-1},this.readRenderTargetPixels=function(y,P,N,k,O,Q,se){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=we.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&se!==void 0&&(fe=fe[se]),fe){Ce.bindFramebuffer(T.FRAMEBUFFER,fe);try{let ve=y.texture,Ue=ve.format,Ne=ve.type;if(!Je.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=y.width-k&&N>=0&&N<=y.height-O&&T.readPixels(P,N,k,O,Ge.convert(Ue),Ge.convert(Ne),Q)}finally{let ve=L!==null?we.get(L).__webglFramebuffer:null;Ce.bindFramebuffer(T.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=function(y,P,N,k,O,Q,se){return de(this,null,function*(){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=we.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&se!==void 0&&(fe=fe[se]),fe)if(P>=0&&P<=y.width-k&&N>=0&&N<=y.height-O){Ce.bindFramebuffer(T.FRAMEBUFFER,fe);let ve=y.texture,Ue=ve.format,Ne=ve.type;if(!Je.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Je.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Re=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Re),T.bufferData(T.PIXEL_PACK_BUFFER,Q.byteLength,T.STREAM_READ),T.readPixels(P,N,k,O,Ge.convert(Ue),Ge.convert(Ne),0);let nt=L!==null?we.get(L).__webglFramebuffer:null;Ce.bindFramebuffer(T.FRAMEBUFFER,nt);let ht=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),yield sx(T,ht,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Re),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,Q),T.deleteBuffer(Re),T.deleteSync(ht),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")})},this.copyFramebufferToTexture=function(y,P=null,N=0){let k=Math.pow(2,-N),O=Math.floor(y.image.width*k),Q=Math.floor(y.image.height*k),se=P!==null?P.x:0,fe=P!==null?P.y:0;S.setTexture2D(y,0),T.copyTexSubImage2D(T.TEXTURE_2D,N,0,0,se,fe,O,Q),Ce.unbindTexture()};let Wx=T.createFramebuffer(),jx=T.createFramebuffer();this.copyTextureToTexture=function(y,P,N=null,k=null,O=0,Q=null){Q===null&&(O!==0?(zc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=O,O=0):Q=0);let se,fe,ve,Ue,Ne,Re,nt,ht,Gt,Ft=y.isCompressedTexture?y.mipmaps[Q]:y.image;if(N!==null)se=N.max.x-N.min.x,fe=N.max.y-N.min.y,ve=N.isBox3?N.max.z-N.min.z:1,Ue=N.min.x,Ne=N.min.y,Re=N.isBox3?N.min.z:0;else{let Ki=Math.pow(2,-O);se=Math.floor(Ft.width*Ki),fe=Math.floor(Ft.height*Ki),y.isDataArrayTexture?ve=Ft.depth:y.isData3DTexture?ve=Math.floor(Ft.depth*Ki):ve=1,Ue=0,Ne=0,Re=0}k!==null?(nt=k.x,ht=k.y,Gt=k.z):(nt=0,ht=0,Gt=0);let at=Ge.convert(P.format),De=Ge.convert(P.type),di;P.isData3DTexture?(S.setTexture3D(P,0),di=T.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(S.setTexture2DArray(P,0),di=T.TEXTURE_2D_ARRAY):(S.setTexture2D(P,0),di=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,P.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,P.unpackAlignment);let ut=T.getParameter(T.UNPACK_ROW_LENGTH),ln=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Ys=T.getParameter(T.UNPACK_SKIP_PIXELS),Ni=T.getParameter(T.UNPACK_SKIP_ROWS),ca=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,Ft.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Ft.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ue),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ne),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Re);let Tt=y.isDataArrayTexture||y.isData3DTexture,Zi=P.isDataArrayTexture||P.isData3DTexture;if(y.isDepthTexture){let Ki=we.get(y),xi=we.get(P),Ti=we.get(Ki.__renderTarget),ff=we.get(xi.__renderTarget);Ce.bindFramebuffer(T.READ_FRAMEBUFFER,Ti.__webglFramebuffer),Ce.bindFramebuffer(T.DRAW_FRAMEBUFFER,ff.__webglFramebuffer);for(let cs=0;cs<ve;cs++)Tt&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,we.get(y).__webglTexture,O,Re+cs),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,we.get(P).__webglTexture,Q,Gt+cs)),T.blitFramebuffer(Ue,Ne,se,fe,nt,ht,se,fe,T.DEPTH_BUFFER_BIT,T.NEAREST);Ce.bindFramebuffer(T.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(O!==0||y.isRenderTargetTexture||we.has(y)){let Ki=we.get(y),xi=we.get(P);Ce.bindFramebuffer(T.READ_FRAMEBUFFER,Wx),Ce.bindFramebuffer(T.DRAW_FRAMEBUFFER,jx);for(let Ti=0;Ti<ve;Ti++)Tt?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Ki.__webglTexture,O,Re+Ti):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Ki.__webglTexture,O),Zi?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,xi.__webglTexture,Q,Gt+Ti):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,xi.__webglTexture,Q),O!==0?T.blitFramebuffer(Ue,Ne,se,fe,nt,ht,se,fe,T.COLOR_BUFFER_BIT,T.NEAREST):Zi?T.copyTexSubImage3D(di,Q,nt,ht,Gt+Ti,Ue,Ne,se,fe):T.copyTexSubImage2D(di,Q,nt,ht,Ue,Ne,se,fe);Ce.bindFramebuffer(T.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else Zi?y.isDataTexture||y.isData3DTexture?T.texSubImage3D(di,Q,nt,ht,Gt,se,fe,ve,at,De,Ft.data):P.isCompressedArrayTexture?T.compressedTexSubImage3D(di,Q,nt,ht,Gt,se,fe,ve,at,Ft.data):T.texSubImage3D(di,Q,nt,ht,Gt,se,fe,ve,at,De,Ft):y.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,Q,nt,ht,se,fe,at,De,Ft.data):y.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,Q,nt,ht,Ft.width,Ft.height,at,Ft.data):T.texSubImage2D(T.TEXTURE_2D,Q,nt,ht,se,fe,at,De,Ft);T.pixelStorei(T.UNPACK_ROW_LENGTH,ut),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ln),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ys),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ni),T.pixelStorei(T.UNPACK_SKIP_IMAGES,ca),Q===0&&P.generateMipmaps&&T.generateMipmap(di),Ce.unbindTexture()},this.copyTextureToTexture3D=function(y,P,N=null,k=null,O=0){return zc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,P,N,k,O)},this.initRenderTarget=function(y){we.get(y).__webglFramebuffer===void 0&&S.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?S.setTextureCube(y,0):y.isData3DTexture?S.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?S.setTexture2DArray(y,0):S.setTexture2D(y,0),Ce.unbindTexture()},this.resetState=function(){I=0,C=0,L=null,Ce.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}};var lD=["canvas"],uf=class n{constructor(e){this.platformId=e;this.isBrowser=Cr(this.platformId)}canvasRef;renderer;scene;camera;cube;isBrowser;ngOnInit(){this.isBrowser&&(this.initScene(),this.animate())}initScene(){let e=this.canvasRef.nativeElement.clientWidth,t=this.canvasRef.nativeElement.clientHeight;this.scene=new Tc,this.camera=new yi(75,e/t,.1,1e3),this.camera.position.z=5,this.renderer=new lf({canvas:this.canvasRef.nativeElement}),this.renderer.setSize(e,t);let i=new ts,r=new Bs({color:65488,wireframe:!0});this.cube=new Fi(i,r),this.scene.add(this.cube)}animate=()=>{requestAnimationFrame(this.animate),this.scene.background=new ot("#1e1e2f"),this.cube.rotation.x+=.01,this.cube.rotation.y+=.01,this.renderer.render(this.scene,this.camera)};static \u0275fac=function(t){return new(t||n)(ne(Ui))};static \u0275cmp=Pt({type:n,selectors:[["app-three-scene"]],viewQuery:function(t,i){if(t&1&&Pi(lD,7),t&2){let r;Xt(r=qt())&&(i.canvasRef=r.first)}},standalone:!0,features:[Ot],decls:2,vars:0,consts:[["canvas",""],[1,"scene-canvas"]],template:function(t,i){t&1&&pi(0,"canvas",1,0)},styles:["[_nghost-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:-3;pointer-events:none}canvas[_ngcontent-%COMP%]{width:100%;height:100%;display:block}"]})};var Ux=[{path:"",component:wu},{path:"projects",component:Eu},{path:"contact",component:Cu},{path:"three-scene",component:uf},{path:"particles",component:Do}];var hD="@",uD=(()=>{class n{constructor(t,i,r,s,o){this.doc=t,this.delegate=i,this.zone=r,this.animationType=s,this.moduleImpl=o,this._rendererFactoryPromise=null,this.scheduler=ye(d_,{optional:!0}),this.loadingSchedulerFn=ye(dD,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){let t=()=>this.moduleImpl??import("./chunk-EF5NI5AV.js").then(r=>r),i;return this.loadingSchedulerFn?i=this.loadingSchedulerFn(t):i=t(),i.catch(r=>{throw new zt(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:s})=>{this._engine=r(this.animationType,this.doc);let o=new s(this.delegate,this._engine,this.zone);return this.delegate=o,o})}createRenderer(t,i){let r=this.delegate.createRenderer(t,i);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let s=new Wg(r);return i?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(o=>{let a=o.createRenderer(t,i);s.use(a),this.scheduler?.notify(10)}).catch(o=>{s.use(r)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static{this.\u0275fac=function(i){Yc()}}static{this.\u0275prov=Pe({token:n,factory:n.\u0275fac})}}return n})(),Wg=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,i,r){this.delegate.insertBefore(e,t,i,r)}removeChild(e,t,i){this.delegate.removeChild(e,t,i)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,i,r){this.delegate.setAttribute(e,t,i,r)}removeAttribute(e,t,i){this.delegate.removeAttribute(e,t,i)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,i,r){this.delegate.setStyle(e,t,i,r)}removeStyle(e,t,i){this.delegate.removeStyle(e,t,i)}setProperty(e,t,i){this.shouldReplay(t)&&this.replay.push(r=>r.setProperty(e,t,i)),this.delegate.setProperty(e,t,i)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,i){return this.shouldReplay(t)&&this.replay.push(r=>r.listen(e,t,i)),this.delegate.listen(e,t,i)}shouldReplay(e){return this.replay!==null&&e.startsWith(hD)}},dD=new et("");function Bx(n="animations"){return f_("NgAsyncAnimations"),da([{provide:Kc,useFactory:(e,t,i)=>new uD(e,t,i,n),deps:[gt,al,pt]},{provide:Mr,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}V_(Rl,{providers:[Pv(Ux),Bx()]});
