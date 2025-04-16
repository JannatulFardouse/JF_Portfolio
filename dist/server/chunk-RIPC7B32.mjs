import './polyfills.server.mjs';
import{$ as xu,$a as xs,A as ii,Aa as qt,B as Ye,Ba as Mo,C as li,Ca as an,D as Ct,Da as It,E as ni,Ea as ep,F as Dt,Fa as tp,G as vo,Ga as ip,H as Pt,Ha as Or,I as Ft,J as yo,K as At,L as Ut,M as Mt,Ma as np,N as bo,O as Xn,Oa as Kn,P as vs,Q as Qf,Qa as Jt,R as ye,Ra as Ea,S as ue,Sa as rp,T as wn,Ta as sp,U as Ma,Ua as di,V as qn,W as yu,Wa as op,X as bu,Xa as ap,Y as on,Ya as cp,Z as Oi,Za as lp,_ as ft,_a as hp,a as Sn,aa as jn,ab as Jn,b as Xi,ba as Ue,bb as up,c as vt,ca as Mu,cb as dp,d as du,da as _i,db as Ta,e as Yf,ea as Sa,eb as Nr,f as gs,fa as wa,fb as cn,g as Pr,ga as Su,gb as Ca,h as $f,ha as wu,hb as kr,i as Zf,ia as Eu,j as Fr,ja as we,k as Kf,ka as Te,kb as fp,l as xa,la as hi,m as sn,ma as Yn,n as fu,na as $n,o as Wn,oa as qi,ob as pp,p as pu,pa as Zn,q as mu,qa as vi,r as gu,ra as ht,rb as mp,s as _s,sa as ys,sb as gp,t as Lr,ta as bs,tb as _p,u as _u,ua as xo,ub as vp,v as ei,va as yi,w as Jf,wa as Wt,x as vu,xa as Xt,y as yt,ya as ui,z as ti,za as Ge}from"./chunk-OZOEAINE.mjs";import{a as tt,b as Gn,d as jf,h as he}from"./chunk-5XUXGTUW.mjs";var Av=()=>({exact:!0}),Aa=class n{constructor(e){this.platformId=e;this.isBrowser=Jn(this.platformId)}title="JF_Portfolio";isBrowser;ngOnInit(){return he(this,null,function*(){this.isBrowser&&(yield import("./chunk-S323QFNC.mjs")).init()})}static \u0275fac=function(t){return new(t||n)(ue(Xn))};static \u0275cmp=Ct({type:n,selectors:[["app-root"]],standalone:!0,features:[It],decls:4,vars:2,consts:[[1,"nav"],["routerLink","/","routerLinkActive","active",3,"routerLinkActiveOptions"]],template:function(t,i){t&1&&(we(0,"nav",0)(1,"a",1),Ge(2,"Home"),Te()(),hi(3,"router-outlet")),t&2&&(ye(),Ue("routerLinkActiveOptions",ep(1,Av)))},dependencies:[xs,vp,pp,mp,gp],styles:["[_nghost-%COMP%]{display:block;position:relative;min-height:100vh;overflow:hidden}app-particles[_ngcontent-%COMP%]{position:fixed;inset:0;z-index:0;pointer-events:none}main[_ngcontent-%COMP%]{position:relative;z-index:1}.nav[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:2rem;padding:1rem;background-color:#b80099}.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none;font-weight:700}.nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{border-bottom:2px solid #fff}"]})};var En="generated",yp="pointerdown",bp="pointerup",Tu="pointerleave",xp="pointerout",Cu="pointermove",Mp="touchstart",Au="touchend",Sp="touchmove",wp="touchcancel",Ep="resize",Tp="visibilitychange",Ni="tsParticles - Error";var Yt={x:0,y:0,z:0},So={a:1,b:0,c:0,d:1},wo="random";var Lt=2,Cp=Math.PI*Lt,Ia=60;var Iu="true",Ru="false",Ra="canvas",Du=0,wi=2,Pu=4,Ap=1,Fu=1,Lu=1,Ip=4,Da=1,Eo=255,Qn=360,Pa=100,Fa=100,Ou=0,La=0,Rp=60,Dp=0,To=.25,Nu=.5+To;var Pp=1,Fp=0,Lp=0,Op=1,Co=1,Np=1,ku=1,Ss=0,Oa=1,kp=0,Up=120,Bp=0,Vp=0,zp=1e4,Hp=0,Gp=1,Ur=0,Na=1,Wp=1,Xp=0,Uu=1,qp=0,jp=0,Bu=-To,Vu=1.5,zu=0,Yp=1,$p=0,Ao=0,Zp=0,ka=1,Kp=1,ws=1,Jp=500,Hu=50,Qp=0,Io=1,Gu=0,Wu=1,em=0,er=255,Ua=3,Ba=6,tm=1,im=1,nm=0,rm=0,sm=0,om=0;var Bt=function(n){return n.bottom="bottom",n.bottomLeft="bottom-left",n.bottomRight="bottom-right",n.left="left",n.none="none",n.right="right",n.top="top",n.topLeft="top-left",n.topRight="top-right",n.outside="outside",n.inside="inside",n}(Bt||{});function Va(n){return typeof n=="boolean"}function ji(n){return typeof n=="string"}function Yi(n){return typeof n=="number"}function Tn(n){return typeof n=="object"&&n!==null}function $i(n){return Array.isArray(n)}function X(n){return n==null}var Es=class n{constructor(e,t,i){if(this._updateFromAngle=(r,s)=>{this.x=Math.cos(r)*s,this.y=Math.sin(r)*s},!Yi(e)&&e){this.x=e.x,this.y=e.y;let r=e;this.z=r.z?r.z:Yt.z}else if(e!==void 0&&t!==void 0)this.x=e,this.y=t,this.z=i??Yt.z;else throw new Error(`${Ni} Vector3d not initialized correctly`)}static get origin(){return n.create(Yt.x,Yt.y,Yt.z)}get angle(){return Math.atan2(this.y,this.x)}set angle(e){this._updateFromAngle(e,this.length)}get length(){return Math.sqrt(this.getLengthSq())}set length(e){this._updateFromAngle(this.angle,e)}static clone(e){return n.create(e.x,e.y,e.z)}static create(e,t,i){return new n(e,t,i)}add(e){return n.create(this.x+e.x,this.y+e.y,this.z+e.z)}addTo(e){this.x+=e.x,this.y+=e.y,this.z+=e.z}copy(){return n.clone(this)}distanceTo(e){return this.sub(e).length}distanceToSq(e){return this.sub(e).getLengthSq()}div(e){return n.create(this.x/e,this.y/e,this.z/e)}divTo(e){this.x/=e,this.y/=e,this.z/=e}getLengthSq(){return this.x**wi+this.y**wi}mult(e){return n.create(this.x*e,this.y*e,this.z*e)}multTo(e){this.x*=e,this.y*=e,this.z*=e}normalize(){let e=this.length;e!=Ur&&this.multTo(Da/e)}rotate(e){return n.create(this.x*Math.cos(e)-this.y*Math.sin(e),this.x*Math.sin(e)+this.y*Math.cos(e),Yt.z)}setTo(e){this.x=e.x,this.y=e.y;let t=e;this.z=t.z?t.z:Yt.z}sub(e){return n.create(this.x-e.x,this.y-e.y,this.z-e.z)}subFrom(e){this.x-=e.x,this.y-=e.y,this.z-=e.z}},fi=class n extends Es{constructor(e,t){super(e,t,Yt.z)}static get origin(){return n.create(Yt.x,Yt.y)}static clone(e){return n.create(e.x,e.y)}static create(e,t){return new n(e,t)}};var Iv=Math.random,am={nextFrame:n=>requestAnimationFrame(n),cancel:n=>cancelAnimationFrame(n)};function at(){return ln(Iv(),0,1-Number.EPSILON)}function cm(n){return am.nextFrame(n)}function lm(n){am.cancel(n)}function ln(n,e,t){return Math.min(Math.max(n,e),t)}function pi(n){let e=tr(n),t=0,i=Ts(n);return e===i&&(i=t),at()*(e-i)+i}function Le(n){return Yi(n)?n:pi(n)}function Ts(n){return Yi(n)?n:n.min}function tr(n){return Yi(n)?n:n.max}function ze(n,e){if(n===e||e===void 0&&Yi(n))return n;let t=Ts(n),i=tr(n);return e!==void 0?{min:Math.min(t,e),max:Math.max(i,e)}:ze(t,i)}function hn(n,e){let t=n.x-e.x,i=n.y-e.y,r=2;return{dx:t,dy:i,distance:Math.sqrt(t**r+i**r)}}function ir(n,e){return hn(n,e).distance}function nr(n){return n*Math.PI/180}function hm(n,e,t){if(Yi(n))return nr(n);switch(n){case Bt.top:return-Math.PI*.5;case Bt.topRight:return-Math.PI*To;case Bt.right:return Dp;case Bt.bottomRight:return Math.PI*To;case Bt.bottom:return Math.PI*.5;case Bt.bottomLeft:return Math.PI*Nu;case Bt.left:return Math.PI;case Bt.topLeft:return-Math.PI*Nu;case Bt.inside:return Math.atan2(t.y-e.y,t.x-e.x);case Bt.outside:return Math.atan2(e.y-t.y,e.x-t.x);default:return at()*Cp}}function um(n){let e=fi.origin;return e.length=1,e.angle=n,e}function dm(n){return{x:n.position?.x??at()*n.size.width,y:n.position?.y??at()*n.size.height}}function za(n){return n?n.endsWith("%")?parseFloat(n)/100:parseFloat(n):1}var rr=function(n){return n.auto="auto",n.increase="increase",n.decrease="decrease",n.random="random",n}(rr||{});var Vt=function(n){return n.increasing="increasing",n.decreasing="decreasing",n}(Vt||{});var sr=function(n){return n.none="none",n.max="max",n.min="min",n}(sr||{});var Be=function(n){return n.bottom="bottom",n.left="left",n.right="right",n.top="top",n}(Be||{});var Cn=function(n){return n.precise="precise",n.percent="percent",n}(Cn||{});var Br=function(n){return n.max="max",n.min="min",n.random="random",n}(Br||{});var Rv={debug:console.debug,error:console.error,info:console.info,log:console.log,verbose:console.log,warning:console.warn};function An(){return Rv}function Dv(n){let e=new Map;return(...t)=>{let i=JSON.stringify(t);if(e.has(i))return e.get(i);let r=n(...t);return e.set(i,r),r}}function Vr(){return typeof window>"u"||!window||typeof window.document>"u"||!window.document}function Pv(){return!Vr()&&typeof matchMedia<"u"}function Ha(n){if(Pv())return matchMedia(n)}function fm(n){if(!(Vr()||typeof IntersectionObserver>"u"))return new IntersectionObserver(n)}function pm(n){if(!(Vr()||typeof MutationObserver>"u"))return new MutationObserver(n)}function mm(n,e){return n===e||$i(e)&&e.indexOf(n)>-1}function Fv(n){return Math.floor(at()*n.length)}function Ga(n,e,t=!0){return n[e!==void 0&&t?e%n.length:Fv(n)]}function Cs(n,e,t,i,r){return Lv(Ro(n,i??0),e,t,r)}function Lv(n,e,t,i){let r=!0;return(!i||i===Be.bottom)&&(r=n.top<e.height+t.x),r&&(!i||i===Be.left)&&(r=n.right>t.x),r&&(!i||i===Be.right)&&(r=n.left<e.width+t.y),r&&(!i||i===Be.top)&&(r=n.bottom>t.y),r}function Ro(n,e){return{bottom:n.y+e,left:n.x-e,right:n.x+e,top:n.y-e}}function gt(n,...e){for(let t of e){if(t==null)continue;if(!Tn(t)){n=t;continue}let i=Array.isArray(t);i&&(Tn(n)||!n||!Array.isArray(n))?n=[]:!i&&(Tn(n)||!n||Array.isArray(n))&&(n={});for(let r in t){if(r==="__proto__")continue;let s=t,o=s[r],a=n;a[r]=Tn(o)&&Array.isArray(o)?o.map(c=>gt(a[r],c)):gt(a[r],o)}}return n}function un(n,e){return $i(n)?n.map((i,r)=>e(i,r)):e(n,0)}function dn(n,e,t){return $i(n)?Ga(n,e,t):n}function Wa(n,e){let t=n.value,i=n.animation,r={delayTime:Le(i.delay)*1e3,enable:i.enable,value:Le(n.value)*e,max:tr(t)*e,min:Ts(t)*e,loops:0,maxLoops:Le(i.count),time:0},s=1;if(i.enable){switch(r.decay=s-Le(i.decay),i.mode){case rr.increase:r.status=Vt.increasing;break;case rr.decrease:r.status=Vt.decreasing;break;case rr.random:r.status=at()>=.5?Vt.increasing:Vt.decreasing;break}let o=i.mode===rr.auto;switch(i.startValue){case Br.min:r.value=r.min,o&&(r.status=Vt.increasing);break;case Br.max:r.value=r.max,o&&(r.status=Vt.decreasing);break;case Br.random:default:r.value=pi(r),o&&(r.status=at()>=.5?Vt.increasing:Vt.decreasing);break}}return r.initialValue=r.value,r}function Ov(n,e){if(!(n.mode===Cn.percent)){let r=n,{mode:s}=r;return jf(r,["mode"])}return"x"in n?{x:n.x/100*e.width,y:n.y/100*e.height}:{width:n.width/100*e.width,height:n.height/100*e.height}}function Xa(n,e){return Ov(n,e)}function Nv(n,e,t,i,r){switch(e){case sr.max:t>=r&&n.destroy();break;case sr.min:t<=i&&n.destroy();break}}function qa(n,e,t,i,r){if(n.destroyed||!e||!e.enable||(e.maxLoops??0)>0&&(e.loops??0)>(e.maxLoops??0))return;let h=(e.velocity??0)*r.factor,u=e.min,d=e.max,m=e.decay??1;if(e.time||(e.time=0),(e.delayTime??0)>0&&e.time<(e.delayTime??0)&&(e.time+=r.value),!((e.delayTime??0)>0&&e.time<(e.delayTime??0))){switch(e.status){case Vt.increasing:e.value>=d?(t?e.status=Vt.decreasing:e.value-=d,e.loops||(e.loops=0),e.loops++):e.value+=h;break;case Vt.decreasing:e.value<=u?(t?e.status=Vt.increasing:e.value+=d,e.loops||(e.loops=0),e.loops++):e.value-=h}e.velocity&&m!==1&&(e.velocity*=m),Nv(n,i,e.value,u,d),n.destroyed||(e.value=ln(e.value,u,d))}}function gm(n){let e=document.createElement("div").style;if(!n)return e;for(let t in n){let i=n[t];if(!Object.prototype.hasOwnProperty.call(n,t)||X(i))continue;let r=n.getPropertyValue?.(i);if(!r)continue;let s=n.getPropertyPriority?.(i);s?e.setProperty?.(i,r,s):e.setProperty?.(i,r)}return e}function kv(n){let e=document.createElement("div").style,t=10,i={width:"100%",height:"100%",margin:"0",padding:"0",borderWidth:"0",position:"fixed",zIndex:n.toString(t),"z-index":n.toString(t),top:"0",left:"0"};for(let r in i){let s=i[r];e.setProperty(r,s)}return e}var _m=Dv(kv);var Xu=function(n){return n.darken="darken",n.enlighten="enlighten",n}(Xu||{});function Uv(n,e){if(e){for(let t of n.colorManagers.values())if(e.startsWith(t.stringPrefix))return t.parseString(e)}}function or(n,e,t,i=!0){if(!e)return;let r=ji(e)?{value:e}:e;if(ji(r.value))return vm(n,r.value,t,i);if($i(r.value))return or(n,{value:Ga(r.value,t,i)});for(let s of n.colorManagers.values()){let o=s.handleRangeColor(r);if(o)return o}}function vm(n,e,t,i=!0){if(!e)return;let r=ji(e)?{value:e}:e;if(ji(r.value))return r.value===wo?zv():Vv(n,r.value);if($i(r.value))return vm(n,{value:Ga(r.value,t,i)});for(let s of n.colorManagers.values()){let o=s.handleColor(r);if(o)return o}}function Do(n,e,t,i=!0){let r=or(n,e,t,i);return r?Bv(r):void 0}function Bv(n){let e=n.r/Eo,t=n.g/Eo,i=n.b/Eo,r=Math.max(e,t,i),s=Math.min(e,t,i),o={h:Ou,l:(r+s)*.5,s:La};return r!==s&&(o.s=o.l<.5?(r-s)/(r+s):(r-s)/(Lt-r-s),o.h=e===r?(t-i)/(r-s):o.h=t===r?Lt+(i-e)/(r-s):Lt*Lt+(e-t)/(r-s)),o.l*=Fa,o.s*=Pa,o.h*=Rp,o.h<Ou&&(o.h+=Qn),o.h>=Qn&&(o.h-=Qn),o}function Vv(n,e){return Uv(n,e)}function ja(n){let e=(n.h%Qn+Qn)%Qn,t=Math.max(La,Math.min(Pa,n.s)),i=Math.max(em,Math.min(Fa,n.l)),r=e/Qn,s=t/Pa,o=i/Fa;if(t===La){let g=Math.round(o*er);return{r:g,g,b:g}}let a=(g,v,p)=>{if(p<0&&p++,p>1&&p--,p*Ba<1)return g+(v-g)*Ba*p;if(p*Lt<1)return v;if(p*Ua<1*Lt){let w=Lt/Ua;return g+(v-g)*(w-p)*Ba}return g},c=o<.5?o*(tm+s):o+s-o*s,l=Lt*o-c,h=im/Ua,u=Math.min(er,er*a(l,c,r+h)),d=Math.min(er,er*a(l,c,r)),m=Math.min(er,er*a(l,c,r-h));return{r:Math.round(u),g:Math.round(d),b:Math.round(m)}}function ym(n){let e=ja(n);return{a:n.a,b:e.b,g:e.g,r:e.r}}function zv(n){let e=n??nm,t=Eo+Io;return{b:Math.floor(pi(ze(e,t))),g:Math.floor(pi(ze(e,t))),r:Math.floor(pi(ze(e,t)))}}function As(n,e){return`rgba(${n.r}, ${n.g}, ${n.b}, ${e??Co})`}function Yu(n,e){return`hsla(${n.h}, ${n.s}%, ${n.l}%, ${e??Co})`}function $u(n){return n!==void 0?{h:n.h.value,s:n.s.value,l:n.l.value}:void 0}function bm(n,e,t){let i={h:{enable:!1,value:n.h},s:{enable:!1,value:n.s},l:{enable:!1,value:n.l}};return e&&(qu(i.h,e.h,t),qu(i.s,e.s,t),qu(i.l,e.l,t)),i}function qu(n,e,t){n.enable=e.enable,n.enable?(n.velocity=Le(e.speed)/100*t,n.decay=Na-Le(e.decay),n.status=Vt.increasing,n.loops=sm,n.maxLoops=Le(e.count),n.time=om,n.delayTime=Le(e.delay)*1e3,e.sync||(n.velocity*=at(),n.value*=at()),n.initialValue=n.value,n.offset=ze(e.offset)):n.velocity=rm}function ju(n,e,t,i){if(!n||!n.enable||(n.maxLoops??0)>0&&(n.loops??0)>(n.maxLoops??0)||(n.time||(n.time=0),(n.delayTime??0)>0&&n.time<(n.delayTime??0)&&(n.time+=i.value),(n.delayTime??0)>0&&n.time<(n.delayTime??0)))return;let h=n.offset?pi(n.offset):0,u=(n.velocity??0)*i.factor+h*3.6,d=n.decay??1,m=tr(e),g=Ts(e);!t||n.status===Vt.increasing?(n.value+=u,n.value>m&&(n.loops||(n.loops=0),n.loops++,t?n.status=Vt.decreasing:n.value-=m)):(n.value-=u,n.value<0&&(n.loops||(n.loops=0),n.loops++,n.status=Vt.increasing)),n.velocity&&d!==1&&(n.velocity*=d),n.value=ln(n.value,g,m)}function xm(n,e){if(!n)return;let{h:t,s:i,l:r}=n,s={h:{min:0,max:360},s:{min:0,max:100},l:{min:0,max:100}};t&&ju(t,s.h,!1,e),i&&ju(i,s.s,!0,e),r&&ju(r,s.l,!0,e)}function Mm(n,e,t){n.fillStyle=t??"rgba(0,0,0,0)",n.fillRect(Yt.x,Yt.y,e.width,e.height)}function Sm(n,e,t,i){t&&(n.globalAlpha=i,n.drawImage(t,Yt.x,Yt.y,e.width,e.height),n.globalAlpha=1)}function Ya(n,e){n.clearRect(Yt.x,Yt.y,e.width,e.height)}function wm(n){let{container:e,context:t,particle:i,delta:r,colorStyles:s,backgroundMask:o,composite:a,radius:c,opacity:l,shadow:h,transform:u}=n,d=i.getPosition(),m=i.rotation+(i.pathRotation?i.velocity.angle:Qp),g={sin:Math.sin(m),cos:Math.cos(m)},v=!!m,p={a:g.cos*(u.a??So.a),b:v?g.sin*(u.b??Io):u.b??So.b,c:v?-g.sin*(u.c??Io):u.c??So.c,d:g.cos*(u.d??So.d)};t.setTransform(p.a,p.b,p.c,p.d,d.x,d.y),o&&(t.globalCompositeOperation=a);let f=i.shadowColor;h.enable&&f&&(t.shadowBlur=h.blur,t.shadowColor=As(f),t.shadowOffsetX=h.offset.x,t.shadowOffsetY=h.offset.y),s.fill&&(t.fillStyle=s.fill);let E=i.strokeWidth??Gu;t.lineWidth=E,s.stroke&&(t.strokeStyle=s.stroke);let w={container:e,context:t,particle:i,radius:c,opacity:l,delta:r,transformData:p,strokeWidth:E};Gv(w),Wv(w),Hv(w),t.globalCompositeOperation="source-over",t.resetTransform()}function Hv(n){let{container:e,context:t,particle:i,radius:r,opacity:s,delta:o,transformData:a}=n;if(!i.effect)return;let c=e.effectDrawers.get(i.effect);c&&c.draw({context:t,particle:i,radius:r,opacity:s,delta:o,pixelRatio:e.retina.pixelRatio,transformData:tt({},a)})}function Gv(n){let{container:e,context:t,particle:i,radius:r,opacity:s,delta:o,strokeWidth:a,transformData:c}=n;if(!i.shape)return;let l=e.shapeDrawers.get(i.shape);l&&(t.beginPath(),l.draw({context:t,particle:i,radius:r,opacity:s,delta:o,pixelRatio:e.retina.pixelRatio,transformData:tt({},c)}),i.shapeClose&&t.closePath(),a>Gu&&t.stroke(),i.shapeFill&&t.fill())}function Wv(n){let{container:e,context:t,particle:i,radius:r,opacity:s,delta:o,transformData:a}=n;if(!i.shape)return;let c=e.shapeDrawers.get(i.shape);c?.afterDraw&&c.afterDraw({context:t,particle:i,radius:r,opacity:s,delta:o,pixelRatio:e.retina.pixelRatio,transformData:tt({},a)})}function Em(n,e,t){e.draw&&e.draw(n,t)}function Tm(n,e,t,i){e.drawParticle&&e.drawParticle(n,t,i)}function Cm(n,e,t){return{h:n.h,s:n.s,l:n.l+(e===Xu.darken?-Wu:Wu)*t}}function Xv(n,e,t){let i=e[t];i!==void 0&&(n[t]=(n[t]??Pp)*i)}function Am(n,e,t=!1){if(!e)return;let i=n;if(!i)return;let r=i.style;if(!r)return;let s=new Set;for(let o in r)Object.prototype.hasOwnProperty.call(r,o)&&s.add(r[o]);for(let o in e)Object.prototype.hasOwnProperty.call(e,o)&&s.add(e[o]);for(let o of s){let a=e.getPropertyValue(o);a?r.setProperty(o,a,t?"important":""):r.removeProperty(o)}}var $a=class{constructor(e,t){this.container=e,this._applyPostDrawUpdaters=s=>{for(let o of this._postDrawUpdaters)o.afterDraw?.(s)},this._applyPreDrawUpdaters=(s,o,a,c,l,h)=>{for(let u of this._preDrawUpdaters){if(u.getColorStyles){let{fill:d,stroke:m}=u.getColorStyles(o,s,a,c);d&&(l.fill=d),m&&(l.stroke=m)}if(u.getTransformValues){let d=u.getTransformValues(o);for(let m in d)Xv(h,d,m)}u.beforeDraw?.(o)}},this._applyResizePlugins=()=>{for(let s of this._resizePlugins)s.resize?.()},this._getPluginParticleColors=s=>{let o,a;for(let c of this._colorPlugins)if(!o&&c.particleFillColor&&(o=Do(this._engine,c.particleFillColor(s))),!a&&c.particleStrokeColor&&(a=Do(this._engine,c.particleStrokeColor(s))),o&&a)break;return[o,a]},this._initCover=()=>he(this,null,function*(){let s=this.container.actualOptions,o=s.backgroundMask.cover,a=o.color;if(a){let c=or(this._engine,a);if(c){let l=Gn(tt({},c),{a:o.opacity});this._coverColorStyle=As(l,l.a)}}else yield new Promise((c,l)=>{if(!o.image)return;let h=document.createElement("img");h.addEventListener("load",()=>{this._coverImage={image:h,opacity:o.opacity},c()}),h.addEventListener("error",u=>{l(u.error)}),h.src=o.image})}),this._initStyle=()=>{let s=this.element,o=this.container.actualOptions;if(s){this._fullScreen?this._setFullScreenStyle():this._resetOriginalStyle();for(let a in o.style){if(!a||!o.style||!Object.prototype.hasOwnProperty.call(o.style,a))continue;let c=o.style[a];c&&s.style.setProperty(a,c,"important")}}},this._initTrail=()=>he(this,null,function*(){let s=this.container.actualOptions,o=s.particles.move.trail,a=o.fill;if(!o.enable)return;let c=Da/o.length;if(a.color){let l=or(this._engine,a.color);if(!l)return;this._trailFill={color:tt({},l),opacity:c}}else yield new Promise((l,h)=>{if(!a.image)return;let u=document.createElement("img");u.addEventListener("load",()=>{this._trailFill={image:u,opacity:c},l()}),u.addEventListener("error",d=>{h(d.error)}),u.src=a.image})}),this._paintBase=s=>{this.draw(o=>Mm(o,this.size,s))},this._paintImage=(s,o)=>{this.draw(a=>Sm(a,this.size,s,o))},this._repairStyle=()=>{let s=this.element;s&&(this._safeMutationObserver(o=>o.disconnect()),this._initStyle(),this.initBackground(),this._safeMutationObserver(o=>{!s||!(s instanceof Node)||o.observe(s,{attributes:!0})}))},this._resetOriginalStyle=()=>{let s=this.element,o=this._originalStyle;!s||!o||Am(s,o,!0)},this._safeMutationObserver=s=>{this._mutationObserver&&s(this._mutationObserver)},this._setFullScreenStyle=()=>{let s=this.element;s&&Am(s,_m(this.container.actualOptions.fullScreen.zIndex),!0)},this._engine=t,this._standardSize={height:0,width:0};let i=e.retina.pixelRatio,r=this._standardSize;this.size={height:r.height*i,width:r.width*i},this._context=null,this._generated=!1,this._preDrawUpdaters=[],this._postDrawUpdaters=[],this._resizePlugins=[],this._colorPlugins=[]}get _fullScreen(){return this.container.actualOptions.fullScreen.enable}clear(){let e=this.container.actualOptions,t=e.particles.move.trail,i=this._trailFill;e.backgroundMask.enable?this.paint():t.enable&&t.length>Lp&&i?i.color?this._paintBase(As(i.color,i.opacity)):i.image&&this._paintImage(i.image,i.opacity):e.clear&&this.draw(r=>{Ya(r,this.size)})}destroy(){this.stop(),this._generated?(this.element?.remove(),this.element=void 0):this._resetOriginalStyle(),this._preDrawUpdaters=[],this._postDrawUpdaters=[],this._resizePlugins=[],this._colorPlugins=[]}draw(e){let t=this._context;if(t)return e(t)}drawAsync(e){let t=this._context;if(t)return e(t)}drawParticle(e,t){if(e.spawning||e.destroyed)return;let i=e.getRadius();if(i<=Fp)return;let r=e.getFillColor(),s=e.getStrokeColor()??r,[o,a]=this._getPluginParticleColors(e);o||(o=r),a||(a=s),!(!o&&!a)&&this.draw(c=>{let l=this.container,h=l.actualOptions,u=e.options.zIndex,d=Op-e.zIndexFactor,m=d**u.opacityRate,g=e.bubble.opacity??e.opacity?.value??Co,v=e.strokeOpacity??g,p=g*m,f=v*m,E={},w={fill:o?Yu(o,p):void 0};w.stroke=a?Yu(a,f):w.fill,this._applyPreDrawUpdaters(c,e,i,p,w,E),wm({container:l,context:c,particle:e,delta:t,colorStyles:w,backgroundMask:h.backgroundMask.enable,composite:h.backgroundMask.composite,radius:i*d**u.sizeRate,opacity:p,shadow:e.options.shadow,transform:E}),this._applyPostDrawUpdaters(e)})}drawParticlePlugin(e,t,i){this.draw(r=>Tm(r,e,t,i))}drawPlugin(e,t){this.draw(i=>Em(i,e,t))}init(){return he(this,null,function*(){this._safeMutationObserver(e=>e.disconnect()),this._mutationObserver=pm(e=>{for(let t of e)t.type==="attributes"&&t.attributeName==="style"&&this._repairStyle()}),this.resize(),this._initStyle(),yield this._initCover();try{yield this._initTrail()}catch(e){An().error(e)}this.initBackground(),this._safeMutationObserver(e=>{!this.element||!(this.element instanceof Node)||e.observe(this.element,{attributes:!0})}),this.initUpdaters(),this.initPlugins(),this.paint()})}initBackground(){let e=this.container.actualOptions,t=e.background,i=this.element;if(!i)return;let r=i.style;if(r){if(t.color){let s=or(this._engine,t.color);r.backgroundColor=s?As(s,t.opacity):""}else r.backgroundColor="";r.backgroundImage=t.image||"",r.backgroundPosition=t.position||"",r.backgroundRepeat=t.repeat||"",r.backgroundSize=t.size||""}}initPlugins(){this._resizePlugins=[];for(let e of this.container.plugins.values())e.resize&&this._resizePlugins.push(e),(e.particleFillColor??e.particleStrokeColor)&&this._colorPlugins.push(e)}initUpdaters(){this._preDrawUpdaters=[],this._postDrawUpdaters=[];for(let e of this.container.particles.updaters)e.afterDraw&&this._postDrawUpdaters.push(e),(e.getColorStyles??e.getTransformValues??e.beforeDraw)&&this._preDrawUpdaters.push(e)}loadCanvas(e){this._generated&&this.element&&this.element.remove(),this._generated=e.dataset&&En in e.dataset?e.dataset[En]==="true":this._generated,this.element=e,this.element.ariaHidden="true",this._originalStyle=gm(this.element.style);let t=this._standardSize;t.height=e.offsetHeight,t.width=e.offsetWidth;let i=this.container.retina.pixelRatio,r=this.size;e.height=r.height=t.height*i,e.width=r.width=t.width*i,this._context=this.element.getContext("2d"),this._safeMutationObserver(s=>s.disconnect()),this.container.retina.init(),this.initBackground(),this._safeMutationObserver(s=>{!this.element||!(this.element instanceof Node)||s.observe(this.element,{attributes:!0})})}paint(){let e=this.container.actualOptions;this.draw(t=>{e.backgroundMask.enable&&e.backgroundMask.cover?(Ya(t,this.size),this._coverImage?this._paintImage(this._coverImage.image,this._coverImage.opacity):this._coverColorStyle?this._paintBase(this._coverColorStyle):this._paintBase()):this._paintBase()})}resize(){if(!this.element)return!1;let e=this.container,t=e.canvas._standardSize,i={width:this.element.offsetWidth,height:this.element.offsetHeight},r=e.retina.pixelRatio,s={width:i.width*r,height:i.height*r};if(i.height===t.height&&i.width===t.width&&s.height===this.element.height&&s.width===this.element.width)return!1;let o=tt({},t);t.height=i.height,t.width=i.width;let a=this.size;return this.element.width=a.width=s.width,this.element.height=a.height=s.height,this.container.started&&e.particles.setResizeFactor({width:t.width/o.width,height:t.height/o.height}),!0}stop(){this._safeMutationObserver(e=>e.disconnect()),this._mutationObserver=void 0,this.draw(e=>Ya(e,this.size))}windowResize(){return he(this,null,function*(){if(!this.element||!this.resize())return;let e=this.container,t=e.updateActualOptions();e.particles.setDensity(),this._applyResizePlugins(),t&&(yield e.refresh())})}};var zr=function(n){return n.canvas="canvas",n.parent="parent",n.window="window",n}(zr||{});function Ui(n,e,t,i,r){if(i){let s={passive:!0};Va(r)?s.capture=r:r!==void 0&&(s=r),n.addEventListener(e,t,s)}else{let s=r;n.removeEventListener(e,t,s)}}var Za=class{constructor(e){this.container=e,this._doMouseTouchClick=t=>{let i=this.container,r=i.actualOptions;if(this._canPush){let s=i.interactivity.mouse,o=s.position;if(!o)return;s.clickPosition=tt({},o),s.clickTime=new Date().getTime();let a=r.interactivity.events.onClick;un(a.mode,c=>this.container.handleClickMode(c))}t.type==="touchend"&&setTimeout(()=>this._mouseTouchFinish(),Jp)},this._handleThemeChange=t=>{let i=t,r=this.container,s=r.options,o=s.defaultThemes,a=i.matches?o.dark:o.light;s.themes.find(l=>l.name===a)?.default.auto&&r.loadTheme(a)},this._handleVisibilityChange=()=>{let t=this.container,i=t.actualOptions;this._mouseTouchFinish(),i.pauseOnBlur&&(document?.hidden?(t.pageHidden=!0,t.pause()):(t.pageHidden=!1,t.animationStatus?t.play(!0):t.draw(!0)))},this._handleWindowResize=()=>{this._resizeTimeout&&(clearTimeout(this._resizeTimeout),delete this._resizeTimeout);let t=()=>he(this,null,function*(){yield this.container.canvas?.windowResize()});this._resizeTimeout=setTimeout(()=>void t(),this.container.actualOptions.interactivity.events.resize.delay*1e3)},this._manageInteractivityListeners=(t,i)=>{let r=this._handlers,s=this.container,o=s.actualOptions,a=s.interactivity.element;if(!a)return;let c=a,l=s.canvas.element;l&&(l.style.pointerEvents=c===l?"initial":"none"),(o.interactivity.events.onHover.enable||o.interactivity.events.onClick.enable)&&(Ui(a,Cu,r.mouseMove,i),Ui(a,Mp,r.touchStart,i),Ui(a,Sp,r.touchMove,i),o.interactivity.events.onClick.enable?(Ui(a,Au,r.touchEndClick,i),Ui(a,bp,r.mouseUp,i),Ui(a,yp,r.mouseDown,i)):Ui(a,Au,r.touchEnd,i),Ui(a,t,r.mouseLeave,i),Ui(a,wp,r.touchCancel,i))},this._manageListeners=t=>{let i=this._handlers,r=this.container,s=r.actualOptions,o=s.interactivity.detectsOn,a=r.canvas.element,c=Tu;o===zr.window?(r.interactivity.element=window,c=xp):o===zr.parent&&a?r.interactivity.element=a.parentElement??a.parentNode:r.interactivity.element=a,this._manageMediaMatch(t),this._manageResize(t),this._manageInteractivityListeners(c,t),document&&Ui(document,Tp,i.visibilityChange,t,!1)},this._manageMediaMatch=t=>{let i=this._handlers,r=Ha("(prefers-color-scheme: dark)");if(r){if(r.addEventListener!==void 0){Ui(r,"change",i.themeChange,t);return}r.addListener!==void 0&&(t?r.addListener(i.oldThemeChange):r.removeListener(i.oldThemeChange))}},this._manageResize=t=>{let i=this._handlers,r=this.container;if(!r.actualOptions.interactivity.events.resize)return;if(typeof ResizeObserver>"u"){Ui(window,Ep,i.resize,t);return}let o=r.canvas.element;this._resizeObserver&&!t?(o&&this._resizeObserver.unobserve(o),this._resizeObserver.disconnect(),delete this._resizeObserver):!this._resizeObserver&&t&&o&&(this._resizeObserver=new ResizeObserver(a=>{a.find(l=>l.target===o)&&this._handleWindowResize()}),this._resizeObserver.observe(o))},this._mouseDown=()=>{let{interactivity:t}=this.container;if(!t)return;let{mouse:i}=t;i.clicking=!0,i.downPosition=i.position},this._mouseTouchClick=t=>{let i=this.container,r=i.actualOptions,{mouse:s}=i.interactivity;s.inside=!0;let o=!1,a=s.position;if(!(!a||!r.interactivity.events.onClick.enable)){for(let c of i.plugins.values())if(c.clickPositionValid&&(o=c.clickPositionValid(a),o))break;o||this._doMouseTouchClick(t),s.clicking=!1}},this._mouseTouchFinish=()=>{let t=this.container.interactivity;if(!t)return;let i=t.mouse;delete i.position,delete i.clickPosition,delete i.downPosition,t.status=Tu,i.inside=!1,i.clicking=!1},this._mouseTouchMove=t=>{let i=this.container,r=i.actualOptions,s=i.interactivity,o=i.canvas.element;if(!s?.element)return;s.mouse.inside=!0;let a;if(t.type.startsWith("pointer")){this._canPush=!0;let l=t;if(s.element===window){if(o){let h=o.getBoundingClientRect();a={x:l.clientX-h.left,y:l.clientY-h.top}}}else if(r.interactivity.detectsOn===zr.parent){let h=l.target,u=l.currentTarget;if(h&&u&&o){let d=h.getBoundingClientRect(),m=u.getBoundingClientRect(),g=o.getBoundingClientRect();a={x:l.offsetX+Lt*d.left-(m.left+g.left),y:l.offsetY+Lt*d.top-(m.top+g.top)}}else a={x:l.offsetX??l.clientX,y:l.offsetY??l.clientY}}else l.target===o&&(a={x:l.offsetX??l.clientX,y:l.offsetY??l.clientY})}else if(this._canPush=t.type!=="touchmove",o){let l=t,h=l.touches[l.touches.length-ka],u=o.getBoundingClientRect();a={x:h.clientX-(u.left??Ss),y:h.clientY-(u.top??Ss)}}let c=i.retina.pixelRatio;a&&(a.x*=c,a.y*=c),s.mouse.position=a,s.status=Cu},this._touchEnd=t=>{let i=t,r=Array.from(i.changedTouches);for(let s of r)this._touches.delete(s.identifier);this._mouseTouchFinish()},this._touchEndClick=t=>{let i=t,r=Array.from(i.changedTouches);for(let s of r)this._touches.delete(s.identifier);this._mouseTouchClick(t)},this._touchStart=t=>{let i=t,r=Array.from(i.changedTouches);for(let s of r)this._touches.set(s.identifier,performance.now());this._mouseTouchMove(t)},this._canPush=!0,this._touches=new Map,this._handlers={mouseDown:()=>this._mouseDown(),mouseLeave:()=>this._mouseTouchFinish(),mouseMove:t=>this._mouseTouchMove(t),mouseUp:t=>this._mouseTouchClick(t),touchStart:t=>this._touchStart(t),touchMove:t=>this._mouseTouchMove(t),touchEnd:t=>this._touchEnd(t),touchCancel:t=>this._touchEnd(t),touchEndClick:t=>this._touchEndClick(t),visibilityChange:()=>this._handleVisibilityChange(),themeChange:t=>this._handleThemeChange(t),oldThemeChange:t=>this._handleThemeChange(t),resize:()=>{this._handleWindowResize()}}}addListeners(){this._manageListeners(!0)}removeListeners(){this._manageListeners(!1)}};var $t=function(n){return n.configAdded="configAdded",n.containerInit="containerInit",n.particlesSetup="particlesSetup",n.containerStarted="containerStarted",n.containerStopped="containerStopped",n.containerDestroyed="containerDestroyed",n.containerPaused="containerPaused",n.containerPlay="containerPlay",n.containerBuilt="containerBuilt",n.particleAdded="particleAdded",n.particleDestroyed="particleDestroyed",n.particleRemoved="particleRemoved",n}($t||{});var bi=class n{constructor(){this.value=""}static create(e,t){let i=new n;return i.load(e),t!==void 0&&(ji(t)||$i(t)?i.load({value:t}):i.load(t)),i}load(e){X(e)||X(e.value)||(this.value=e.value)}};var Ka=class{constructor(){this.color=new bi,this.color.value="",this.image="",this.position="",this.repeat="",this.size="",this.opacity=1}load(e){X(e)||(e.color!==void 0&&(this.color=bi.create(this.color,e.color)),e.image!==void 0&&(this.image=e.image),e.position!==void 0&&(this.position=e.position),e.repeat!==void 0&&(this.repeat=e.repeat),e.size!==void 0&&(this.size=e.size),e.opacity!==void 0&&(this.opacity=e.opacity))}};var Ja=class{constructor(){this.opacity=1}load(e){X(e)||(e.color!==void 0&&(this.color=bi.create(this.color,e.color)),e.image!==void 0&&(this.image=e.image),e.opacity!==void 0&&(this.opacity=e.opacity))}};var Qa=class{constructor(){this.composite="destination-out",this.cover=new Ja,this.enable=!1}load(e){if(!X(e)){if(e.composite!==void 0&&(this.composite=e.composite),e.cover!==void 0){let t=e.cover,i=ji(e.cover)?{color:e.cover}:e.cover;this.cover.load(t.color!==void 0||t.image!==void 0?t:{color:i})}e.enable!==void 0&&(this.enable=e.enable)}}};var ec=class{constructor(){this.enable=!0,this.zIndex=0}load(e){X(e)||(e.enable!==void 0&&(this.enable=e.enable),e.zIndex!==void 0&&(this.zIndex=e.zIndex))}};var tc=class{constructor(){this.enable=!1,this.mode=[]}load(e){X(e)||(e.enable!==void 0&&(this.enable=e.enable),e.mode!==void 0&&(this.mode=e.mode))}};var Zu=function(n){return n.circle="circle",n.rectangle="rectangle",n}(Zu||{});var Po=class{constructor(){this.selectors=[],this.enable=!1,this.mode=[],this.type=Zu.circle}load(e){X(e)||(e.selectors!==void 0&&(this.selectors=e.selectors),e.enable!==void 0&&(this.enable=e.enable),e.mode!==void 0&&(this.mode=e.mode),e.type!==void 0&&(this.type=e.type))}};var ic=class{constructor(){this.enable=!1,this.force=2,this.smooth=10}load(e){X(e)||(e.enable!==void 0&&(this.enable=e.enable),e.force!==void 0&&(this.force=e.force),e.smooth!==void 0&&(this.smooth=e.smooth))}};var nc=class{constructor(){this.enable=!1,this.mode=[],this.parallax=new ic}load(e){X(e)||(e.enable!==void 0&&(this.enable=e.enable),e.mode!==void 0&&(this.mode=e.mode),this.parallax.load(e.parallax))}};var rc=class{constructor(){this.delay=.5,this.enable=!0}load(e){X(e)||(e.delay!==void 0&&(this.delay=e.delay),e.enable!==void 0&&(this.enable=e.enable))}};var sc=class{constructor(){this.onClick=new tc,this.onDiv=new Po,this.onHover=new nc,this.resize=new rc}load(e){if(X(e))return;this.onClick.load(e.onClick);let t=e.onDiv;t!==void 0&&(this.onDiv=un(t,i=>{let r=new Po;return r.load(i),r})),this.onHover.load(e.onHover),this.resize.load(e.resize)}};var oc=class{constructor(e,t){this._engine=e,this._container=t}load(e){if(X(e)||!this._container)return;let t=this._engine.interactors.get(this._container);if(t)for(let i of t)i.loadModeOptions&&i.loadModeOptions(this,e)}};var Is=class{constructor(e,t){this.detectsOn=zr.window,this.events=new sc,this.modes=new oc(e,t)}load(e){if(X(e))return;let t=e.detectsOn;t!==void 0&&(this.detectsOn=t),this.events.load(e.events),this.modes.load(e.modes)}};var ac=class{load(e){X(e)||(e.position&&(this.position={x:e.position.x??Hu,y:e.position.y??Hu,mode:e.position.mode??Cn.percent}),e.options&&(this.options=gt({},e.options)))}};var ar=function(n){return n.screen="screen",n.canvas="canvas",n}(ar||{});var cc=class{constructor(){this.maxWidth=1/0,this.options={},this.mode=ar.canvas}load(e){X(e)||(X(e.maxWidth)||(this.maxWidth=e.maxWidth),X(e.mode)||(e.mode===ar.screen?this.mode=ar.screen:this.mode=ar.canvas),X(e.options)||(this.options=gt({},e.options)))}};var In=function(n){return n.any="any",n.dark="dark",n.light="light",n}(In||{});var lc=class{constructor(){this.auto=!1,this.mode=In.any,this.value=!1}load(e){X(e)||(e.auto!==void 0&&(this.auto=e.auto),e.mode!==void 0&&(this.mode=e.mode),e.value!==void 0&&(this.value=e.value))}};var hc=class{constructor(){this.name="",this.default=new lc}load(e){X(e)||(e.name!==void 0&&(this.name=e.name),this.default.load(e.default),e.options!==void 0&&(this.options=gt({},e.options)))}};var Hr=class{constructor(){this.count=0,this.enable=!1,this.speed=1,this.decay=0,this.delay=0,this.sync=!1}load(e){X(e)||(e.count!==void 0&&(this.count=ze(e.count)),e.enable!==void 0&&(this.enable=e.enable),e.speed!==void 0&&(this.speed=ze(e.speed)),e.decay!==void 0&&(this.decay=ze(e.decay)),e.delay!==void 0&&(this.delay=ze(e.delay)),e.sync!==void 0&&(this.sync=e.sync))}},cr=class extends Hr{constructor(){super(),this.mode=rr.auto,this.startValue=Br.random}load(e){super.load(e),!X(e)&&(e.mode!==void 0&&(this.mode=e.mode),e.startValue!==void 0&&(this.startValue=e.startValue))}};var Rs=class extends Hr{constructor(){super(),this.offset=0,this.sync=!0}load(e){super.load(e),!X(e)&&e.offset!==void 0&&(this.offset=ze(e.offset))}};var uc=class{constructor(){this.h=new Rs,this.s=new Rs,this.l=new Rs}load(e){X(e)||(this.h.load(e.h),this.s.load(e.s),this.l.load(e.l))}};var Gr=class n extends bi{constructor(){super(),this.animation=new uc}static create(e,t){let i=new n;return i.load(e),t!==void 0&&(ji(t)||$i(t)?i.load({value:t}):i.load(t)),i}load(e){if(super.load(e),X(e))return;let t=e.animation;t!==void 0&&(t.enable!==void 0?this.animation.h.load(t):this.animation.load(e.animation))}};var Ku=function(n){return n.absorb="absorb",n.bounce="bounce",n.destroy="destroy",n}(Ku||{});var dc=class{constructor(){this.speed=2}load(e){X(e)||e.speed!==void 0&&(this.speed=e.speed)}};var fc=class{constructor(){this.enable=!0,this.retries=0}load(e){X(e)||(e.enable!==void 0&&(this.enable=e.enable),e.retries!==void 0&&(this.retries=e.retries))}};var Rn=class{constructor(){this.value=0}load(e){X(e)||X(e.value)||(this.value=ze(e.value))}},Ju=class extends Rn{constructor(){super(),this.animation=new Hr}load(e){if(super.load(e),X(e))return;let t=e.animation;t!==void 0&&this.animation.load(t)}},Ds=class extends Ju{constructor(){super(),this.animation=new cr}load(e){super.load(e)}};var Fo=class extends Rn{constructor(){super(),this.value=1}};var Ps=class{constructor(){this.horizontal=new Fo,this.vertical=new Fo}load(e){X(e)||(this.horizontal.load(e.horizontal),this.vertical.load(e.vertical))}};var pc=class{constructor(){this.absorb=new dc,this.bounce=new Ps,this.enable=!1,this.maxSpeed=50,this.mode=Ku.bounce,this.overlap=new fc}load(e){X(e)||(this.absorb.load(e.absorb),this.bounce.load(e.bounce),e.enable!==void 0&&(this.enable=e.enable),e.maxSpeed!==void 0&&(this.maxSpeed=ze(e.maxSpeed)),e.mode!==void 0&&(this.mode=e.mode),this.overlap.load(e.overlap))}};var mc=class{constructor(){this.close=!0,this.fill=!0,this.options={},this.type=[]}load(e){if(X(e))return;let t=e.options;if(t!==void 0)for(let i in t){let r=t[i];r&&(this.options[i]=gt(this.options[i]??{},r))}e.close!==void 0&&(this.close=e.close),e.fill!==void 0&&(this.fill=e.fill),e.type!==void 0&&(this.type=e.type)}};var gc=class{constructor(){this.offset=0,this.value=90}load(e){X(e)||(e.offset!==void 0&&(this.offset=ze(e.offset)),e.value!==void 0&&(this.value=ze(e.value)))}};var _c=class{constructor(){this.distance=200,this.enable=!1,this.rotate={x:3e3,y:3e3}}load(e){if(!X(e)&&(e.distance!==void 0&&(this.distance=ze(e.distance)),e.enable!==void 0&&(this.enable=e.enable),e.rotate)){let t=e.rotate.x;t!==void 0&&(this.rotate.x=t);let i=e.rotate.y;i!==void 0&&(this.rotate.y=i)}}};var vc=class{constructor(){this.x=50,this.y=50,this.mode=Cn.percent,this.radius=0}load(e){X(e)||(e.x!==void 0&&(this.x=e.x),e.y!==void 0&&(this.y=e.y),e.mode!==void 0&&(this.mode=e.mode),e.radius!==void 0&&(this.radius=e.radius))}};var yc=class{constructor(){this.acceleration=9.81,this.enable=!1,this.inverse=!1,this.maxSpeed=50}load(e){X(e)||(e.acceleration!==void 0&&(this.acceleration=ze(e.acceleration)),e.enable!==void 0&&(this.enable=e.enable),e.inverse!==void 0&&(this.inverse=e.inverse),e.maxSpeed!==void 0&&(this.maxSpeed=ze(e.maxSpeed)))}};var bc=class{constructor(){this.clamp=!0,this.delay=new Rn,this.enable=!1,this.options={}}load(e){X(e)||(e.clamp!==void 0&&(this.clamp=e.clamp),this.delay.load(e.delay),e.enable!==void 0&&(this.enable=e.enable),this.generator=e.generator,e.options&&(this.options=gt(this.options,e.options)))}};var xc=class{load(e){X(e)||(e.color!==void 0&&(this.color=bi.create(this.color,e.color)),e.image!==void 0&&(this.image=e.image))}};var Mc=class{constructor(){this.enable=!1,this.length=10,this.fill=new xc}load(e){X(e)||(e.enable!==void 0&&(this.enable=e.enable),e.fill!==void 0&&this.fill.load(e.fill),e.length!==void 0&&(this.length=e.length))}};var ut=function(n){return n.bounce="bounce",n.none="none",n.out="out",n.destroy="destroy",n.split="split",n}(ut||{});var Sc=class{constructor(){this.default=ut.out}load(e){X(e)||(e.default!==void 0&&(this.default=e.default),this.bottom=e.bottom??e.default,this.left=e.left??e.default,this.right=e.right??e.default,this.top=e.top??e.default)}};var wc=class{constructor(){this.acceleration=0,this.enable=!1}load(e){X(e)||(e.acceleration!==void 0&&(this.acceleration=ze(e.acceleration)),e.enable!==void 0&&(this.enable=e.enable),e.position&&(this.position=gt({},e.position)))}};var Ec=class{constructor(){this.angle=new gc,this.attract=new _c,this.center=new vc,this.decay=0,this.distance={},this.direction=Bt.none,this.drift=0,this.enable=!1,this.gravity=new yc,this.path=new bc,this.outModes=new Sc,this.random=!1,this.size=!1,this.speed=2,this.spin=new wc,this.straight=!1,this.trail=new Mc,this.vibrate=!1,this.warp=!1}load(e){if(X(e))return;this.angle.load(Yi(e.angle)?{value:e.angle}:e.angle),this.attract.load(e.attract),this.center.load(e.center),e.decay!==void 0&&(this.decay=ze(e.decay)),e.direction!==void 0&&(this.direction=e.direction),e.distance!==void 0&&(this.distance=Yi(e.distance)?{horizontal:e.distance,vertical:e.distance}:tt({},e.distance)),e.drift!==void 0&&(this.drift=ze(e.drift)),e.enable!==void 0&&(this.enable=e.enable),this.gravity.load(e.gravity);let t=e.outModes;t!==void 0&&(Tn(t)?this.outModes.load(t):this.outModes.load({default:t})),this.path.load(e.path),e.random!==void 0&&(this.random=e.random),e.size!==void 0&&(this.size=e.size),e.speed!==void 0&&(this.speed=ze(e.speed)),this.spin.load(e.spin),e.straight!==void 0&&(this.straight=e.straight),this.trail.load(e.trail),e.vibrate!==void 0&&(this.vibrate=e.vibrate),e.warp!==void 0&&(this.warp=e.warp)}};var Tc=class extends cr{constructor(){super(),this.destroy=sr.none,this.speed=2}load(e){super.load(e),!X(e)&&e.destroy!==void 0&&(this.destroy=e.destroy)}};var Cc=class extends Ds{constructor(){super(),this.animation=new Tc,this.value=1}load(e){if(X(e))return;super.load(e);let t=e.animation;t!==void 0&&this.animation.load(t)}};var Ac=class{constructor(){this.enable=!1,this.width=1920,this.height=1080}load(e){if(X(e))return;e.enable!==void 0&&(this.enable=e.enable);let t=e.width;t!==void 0&&(this.width=t);let i=e.height;i!==void 0&&(this.height=i)}};var Fs=function(n){return n.delete="delete",n.wait="wait",n}(Fs||{});var Ic=class{constructor(){this.mode=Fs.delete,this.value=0}load(e){X(e)||(e.mode!==void 0&&(this.mode=e.mode),e.value!==void 0&&(this.value=e.value))}};var Rc=class{constructor(){this.density=new Ac,this.limit=new Ic,this.value=0}load(e){X(e)||(this.density.load(e.density),this.limit.load(e.limit),e.value!==void 0&&(this.value=e.value))}};var Dc=class{constructor(){this.blur=0,this.color=new bi,this.enable=!1,this.offset={x:0,y:0},this.color.value="#000"}load(e){X(e)||(e.blur!==void 0&&(this.blur=e.blur),this.color=bi.create(this.color,e.color),e.enable!==void 0&&(this.enable=e.enable),e.offset!==void 0&&(e.offset.x!==void 0&&(this.offset.x=e.offset.x),e.offset.y!==void 0&&(this.offset.y=e.offset.y)))}};var Pc=class{constructor(){this.close=!0,this.fill=!0,this.options={},this.type="circle"}load(e){if(X(e))return;let t=e.options;if(t!==void 0)for(let i in t){let r=t[i];r&&(this.options[i]=gt(this.options[i]??{},r))}e.close!==void 0&&(this.close=e.close),e.fill!==void 0&&(this.fill=e.fill),e.type!==void 0&&(this.type=e.type)}};var Fc=class extends cr{constructor(){super(),this.destroy=sr.none,this.speed=5}load(e){super.load(e),!X(e)&&e.destroy!==void 0&&(this.destroy=e.destroy)}};var Lc=class extends Ds{constructor(){super(),this.animation=new Fc,this.value=3}load(e){if(super.load(e),X(e))return;let t=e.animation;t!==void 0&&this.animation.load(t)}};var Lo=class{constructor(){this.width=0}load(e){X(e)||(e.color!==void 0&&(this.color=Gr.create(this.color,e.color)),e.width!==void 0&&(this.width=ze(e.width)),e.opacity!==void 0&&(this.opacity=ze(e.opacity)))}};var Oc=class extends Rn{constructor(){super(),this.opacityRate=1,this.sizeRate=1,this.velocityRate=1}load(e){super.load(e),!X(e)&&(e.opacityRate!==void 0&&(this.opacityRate=e.opacityRate),e.sizeRate!==void 0&&(this.sizeRate=e.sizeRate),e.velocityRate!==void 0&&(this.velocityRate=e.velocityRate))}};var Nc=class{constructor(e,t){this._engine=e,this._container=t,this.bounce=new Ps,this.collisions=new pc,this.color=new Gr,this.color.value="#fff",this.effect=new mc,this.groups={},this.move=new Ec,this.number=new Rc,this.opacity=new Cc,this.reduceDuplicates=!1,this.shadow=new Dc,this.shape=new Pc,this.size=new Lc,this.stroke=new Lo,this.zIndex=new Oc}load(e){if(X(e))return;if(e.groups!==void 0)for(let i of Object.keys(e.groups)){if(!Object.hasOwn(e.groups,i))continue;let r=e.groups[i];r!==void 0&&(this.groups[i]=gt(this.groups[i]??{},r))}e.reduceDuplicates!==void 0&&(this.reduceDuplicates=e.reduceDuplicates),this.bounce.load(e.bounce),this.color.load(Gr.create(this.color,e.color)),this.effect.load(e.effect),this.move.load(e.move),this.number.load(e.number),this.opacity.load(e.opacity),this.shape.load(e.shape),this.size.load(e.size),this.shadow.load(e.shadow),this.zIndex.load(e.zIndex),this.collisions.load(e.collisions),e.interactivity!==void 0&&(this.interactivity=gt({},e.interactivity));let t=e.stroke;if(t&&(this.stroke=un(t,i=>{let r=new Lo;return r.load(i),r})),this._container){let i=this._engine.updaters.get(this._container);if(i)for(let s of i)s.loadOptions&&s.loadOptions(this,e);let r=this._engine.interactors.get(this._container);if(r)for(let s of r)s.loadParticlesOptions&&s.loadParticlesOptions(this,e)}}};function Qu(n,...e){for(let t of e)n.load(t)}function kc(n,e,...t){let i=new Nc(n,e);return Qu(i,...t),i}var Uc=class{constructor(e,t){this._findDefaultTheme=i=>this.themes.find(r=>r.default.value&&r.default.mode===i)??this.themes.find(r=>r.default.value&&r.default.mode===In.any),this._importPreset=i=>{this.load(this._engine.getPreset(i))},this._engine=e,this._container=t,this.autoPlay=!0,this.background=new Ka,this.backgroundMask=new Qa,this.clear=!0,this.defaultThemes={},this.delay=0,this.fullScreen=new ec,this.detectRetina=!0,this.duration=0,this.fpsLimit=120,this.interactivity=new Is(e,t),this.manualParticles=[],this.particles=kc(this._engine,this._container),this.pauseOnBlur=!0,this.pauseOnOutsideViewport=!0,this.responsive=[],this.smooth=!1,this.style={},this.themes=[],this.zLayers=100}load(e){if(X(e))return;e.preset!==void 0&&un(e.preset,o=>this._importPreset(o)),e.autoPlay!==void 0&&(this.autoPlay=e.autoPlay),e.clear!==void 0&&(this.clear=e.clear),e.key!==void 0&&(this.key=e.key),e.name!==void 0&&(this.name=e.name),e.delay!==void 0&&(this.delay=ze(e.delay));let t=e.detectRetina;t!==void 0&&(this.detectRetina=t),e.duration!==void 0&&(this.duration=ze(e.duration));let i=e.fpsLimit;i!==void 0&&(this.fpsLimit=i),e.pauseOnBlur!==void 0&&(this.pauseOnBlur=e.pauseOnBlur),e.pauseOnOutsideViewport!==void 0&&(this.pauseOnOutsideViewport=e.pauseOnOutsideViewport),e.zLayers!==void 0&&(this.zLayers=e.zLayers),this.background.load(e.background);let r=e.fullScreen;Va(r)?this.fullScreen.enable=r:this.fullScreen.load(r),this.backgroundMask.load(e.backgroundMask),this.interactivity.load(e.interactivity),e.manualParticles&&(this.manualParticles=e.manualParticles.map(o=>{let a=new ac;return a.load(o),a})),this.particles.load(e.particles),this.style=gt(this.style,e.style),this._engine.loadOptions(this,e),e.smooth!==void 0&&(this.smooth=e.smooth);let s=this._engine.interactors.get(this._container);if(s)for(let o of s)o.loadOptions&&o.loadOptions(this,e);if(e.responsive!==void 0)for(let o of e.responsive){let a=new cc;a.load(o),this.responsive.push(a)}if(this.responsive.sort((o,a)=>o.maxWidth-a.maxWidth),e.themes!==void 0)for(let o of e.themes){let a=this.themes.find(c=>c.name===o.name);if(a)a.load(o);else{let c=new hc;c.load(o),this.themes.push(c)}}this.defaultThemes.dark=this._findDefaultTheme(In.dark)?.name,this.defaultThemes.light=this._findDefaultTheme(In.light)?.name}setResponsive(e,t,i){this.load(i);let r=this.responsive.find(s=>s.mode===ar.screen&&screen?s.maxWidth>screen.availWidth:s.maxWidth*t>e);return this.load(r?.options),r?.maxWidth}setTheme(e){if(e){let t=this.themes.find(i=>i.name===e);t&&this.load(t.options)}else{let t=Ha("(prefers-color-scheme: dark)"),i=t?.matches,r=this._findDefaultTheme(i?In.dark:In.light);r&&this.load(r.options)}}};var Ls=function(n){return n.external="external",n.particles="particles",n}(Ls||{});var Bc=class{constructor(e,t){this.container=t,this._engine=e,this._interactors=[],this._externalInteractors=[],this._particleInteractors=[]}externalInteract(e){for(let t of this._externalInteractors)t.isEnabled()&&t.interact(e)}handleClickMode(e){for(let t of this._externalInteractors)t.handleClickMode?.(e)}init(){return he(this,null,function*(){this._interactors=yield this._engine.getInteractors(this.container,!0),this._externalInteractors=[],this._particleInteractors=[];for(let e of this._interactors){switch(e.type){case Ls.external:this._externalInteractors.push(e);break;case Ls.particles:this._particleInteractors.push(e);break}e.init()}})}particlesInteract(e,t){for(let i of this._externalInteractors)i.clear(e,t);for(let i of this._particleInteractors)i.isEnabled(e)&&i.interact(e,t)}reset(e){for(let t of this._externalInteractors)t.isEnabled()&&t.reset(e);for(let t of this._particleInteractors)t.isEnabled(e)&&t.reset(e)}};var Ti=function(n){return n.normal="normal",n.inside="inside",n.outside="outside",n}(Ti||{});function qv(n,e,t,i){let r=e.options[n];if(r)return gt({close:e.close,fill:e.fill},dn(r,t,i))}function jv(n,e,t,i){let r=e.options[n];if(r)return gt({close:e.close,fill:e.fill},dn(r,t,i))}function Im(n){if(!mm(n.outMode,n.checkModes))return;let e=n.radius*Lt;n.coord>n.maxCoord-e?n.setCb(-n.radius):n.coord<e&&n.setCb(n.radius)}var Vc=class{constructor(e,t){this.container=t,this._calcPosition=(i,r,s,o=Du)=>{for(let g of i.plugins.values()){let v=g.particlePosition!==void 0?g.particlePosition(r,this):void 0;if(v)return Es.create(v.x,v.y,s)}let a=i.canvas.size,c=dm({size:a,position:r}),l=Es.create(c.x,c.y,s),h=this.getRadius(),u=this.options.move.outModes,d=g=>{Im({outMode:g,checkModes:[ut.bounce],coord:l.x,maxCoord:i.canvas.size.width,setCb:v=>l.x+=v,radius:h})},m=g=>{Im({outMode:g,checkModes:[ut.bounce],coord:l.y,maxCoord:i.canvas.size.height,setCb:v=>l.y+=v,radius:h})};return d(u.left??u.default),d(u.right??u.default),m(u.top??u.default),m(u.bottom??u.default),this._checkOverlap(l,o)?this._calcPosition(i,void 0,s,o+Wp):l},this._calculateVelocity=()=>{let i=um(this.direction),r=i.copy(),s=this.options.move;if(s.direction===Bt.inside||s.direction===Bt.outside)return r;let o=nr(Le(s.angle.value)),a=nr(Le(s.angle.offset)),c={left:a-o*.5,right:a+o*.5};return s.straight||(r.angle+=pi(ze(c.left,c.right))),s.random&&typeof s.speed=="number"&&(r.length*=at()),r},this._checkOverlap=(i,r=Du)=>{let s=this.options.collisions,o=this.getRadius();if(!s.enable)return!1;let a=s.overlap;if(a.enable)return!1;let c=a.retries;if(c>=Xp&&r>c)throw new Error(`${Ni} particle is overlapping and can't be placed`);return!!this.container.particles.find(l=>ir(i,l.position)<o+l.getRadius())},this._getRollColor=i=>{if(!i||!this.roll||!this.backColor&&!this.roll.alter)return i;let r=this.roll.horizontal&&this.roll.vertical?Lt*Uu:Uu,s=this.roll.horizontal?Math.PI*.5:Ur;return Math.floor(((this.roll.angle??Ur)+s)/(Math.PI/r))%Lt?this.backColor?this.backColor:this.roll.alter?Cm(i,this.roll.alter.type,this.roll.alter.value):i:i},this._initPosition=i=>{let r=this.container,s=Le(this.options.zIndex.value);this.position=this._calcPosition(r,i,ln(s,qp,r.zLayers)),this.initialPosition=this.position.copy();let o=r.canvas.size;switch(this.moveCenter=Gn(tt({},Xa(this.options.move.center,o)),{radius:this.options.move.center.radius??jp,mode:this.options.move.center.mode??Cn.percent}),this.direction=hm(this.options.move.direction,this.position,this.moveCenter),this.options.move.direction){case Bt.inside:this.outType=Ti.inside;break;case Bt.outside:this.outType=Ti.outside;break}this.offset=fi.origin},this._engine=e}destroy(e){if(this.unbreakable||this.destroyed)return;this.destroyed=!0,this.bubble.inRange=!1,this.slow.inRange=!1;let t=this.container,i=this.pathGenerator;t.shapeDrawers.get(this.shape)?.particleDestroy?.(this);for(let s of t.plugins.values())s.particleDestroyed?.(this,e);for(let s of t.particles.updaters)s.particleDestroyed?.(this,e);i?.reset(this),this._engine.dispatchEvent($t.particleDestroyed,{container:this.container,data:{particle:this}})}draw(e){let t=this.container,i=t.canvas;for(let r of t.plugins.values())i.drawParticlePlugin(r,this,e);i.drawParticle(this,e)}getFillColor(){return this._getRollColor(this.bubble.color??$u(this.color))}getMass(){return this.getRadius()**wi*Math.PI*.5}getPosition(){return{x:this.position.x+this.offset.x,y:this.position.y+this.offset.y,z:this.position.z}}getRadius(){return this.bubble.radius??this.size.value}getStrokeColor(){return this._getRollColor(this.bubble.color??$u(this.strokeColor))}init(e,t,i,r){let s=this.container,o=this._engine;this.id=e,this.group=r,this.effectClose=!0,this.effectFill=!0,this.shapeClose=!0,this.shapeFill=!0,this.pathRotation=!1,this.lastPathTime=0,this.destroyed=!1,this.unbreakable=!1,this.isRotating=!1,this.rotation=0,this.misplaced=!1,this.retina={maxDistance:{}},this.outType=Ti.normal,this.ignoresResizeRatio=!0;let a=s.retina.pixelRatio,c=s.actualOptions,l=kc(this._engine,s,c.particles),{reduceDuplicates:h}=l,u=l.effect.type,d=l.shape.type;this.effect=dn(u,this.id,h),this.shape=dn(d,this.id,h);let m=l.effect,g=l.shape;if(i){if(i.effect?.type){let T=i.effect.type,L=dn(T,this.id,h);L&&(this.effect=L,m.load(i.effect))}if(i.shape?.type){let T=i.shape.type,L=dn(T,this.id,h);L&&(this.shape=L,g.load(i.shape))}}if(this.effect===wo){let T=[...this.container.effectDrawers.keys()];this.effect=T[Math.floor(Math.random()*T.length)]}if(this.shape===wo){let T=[...this.container.shapeDrawers.keys()];this.shape=T[Math.floor(Math.random()*T.length)]}this.effectData=qv(this.effect,m,this.id,h),this.shapeData=jv(this.shape,g,this.id,h),l.load(i);let v=this.effectData;v&&l.load(v.particles);let p=this.shapeData;p&&l.load(p.particles);let f=new Is(o,s);f.load(s.actualOptions.interactivity),f.load(l.interactivity),this.interactivity=f,this.effectFill=v?.fill??l.effect.fill,this.effectClose=v?.close??l.effect.close,this.shapeFill=p?.fill??l.shape.fill,this.shapeClose=p?.close??l.shape.close,this.options=l;let E=this.options.move.path;this.pathDelay=Le(E.delay.value)*1e3,E.generator&&(this.pathGenerator=this._engine.getPathGenerator(E.generator),this.pathGenerator&&s.addPath(E.generator,this.pathGenerator)&&this.pathGenerator.init(s)),s.retina.initParticle(this),this.size=Wa(this.options.size,a),this.bubble={inRange:!1},this.slow={inRange:!1,factor:1},this._initPosition(t),this.initialVelocity=this._calculateVelocity(),this.velocity=this.initialVelocity.copy(),this.moveDecay=Na-Le(this.options.move.decay);let w=s.particles;w.setLastZIndex(this.position.z),this.zIndexFactor=this.position.z/s.zLayers,this.sides=24;let x=s.effectDrawers.get(this.effect);x||(x=this._engine.getEffectDrawer(this.effect),x&&s.effectDrawers.set(this.effect,x)),x?.loadEffect&&x.loadEffect(this);let D=s.shapeDrawers.get(this.shape);D||(D=this._engine.getShapeDrawer(this.shape),D&&s.shapeDrawers.set(this.shape,D)),D?.loadShape&&D.loadShape(this);let R=D?.getSidesCount;R&&(this.sides=R(this)),this.spawning=!1,this.shadowColor=or(this._engine,this.options.shadow.color);for(let T of w.updaters)T.init(this);for(let T of w.movers)T.init?.(this);x?.particleInit?.(s,this),D?.particleInit?.(s,this);for(let T of s.plugins.values())T.particleCreated?.(this)}isInsideCanvas(){let e=this.getRadius(),t=this.container.canvas.size,i=this.position;return i.x>=-e&&i.y>=-e&&i.y<=t.height+e&&i.x<=t.width+e}isVisible(){return!this.destroyed&&!this.spawning&&this.isInsideCanvas()}reset(){for(let e of this.container.particles.updaters)e.reset?.(this)}};var zc=class{constructor(e,t){this.position=e,this.particle=t}};var Os=function(n){return n.circle="circle",n.rectangle="rectangle",n}(Os||{});var Hc=class{constructor(e,t,i){this.position={x:e,y:t},this.type=i}},Oo=class n extends Hc{constructor(e,t,i){super(e,t,Os.circle),this.radius=i}contains(e){return ir(e,this.position)<=this.radius}intersects(e){let t=this.position,i=e.position,r={x:Math.abs(i.x-t.x),y:Math.abs(i.y-t.y)},s=this.radius;if(e instanceof n||e.type===Os.circle){let o=e,a=s+o.radius,c=Math.sqrt(r.x**wi+r.y**wi);return a>c}else if(e instanceof lr||e.type===Os.rectangle){let o=e,{width:a,height:c}=o.size;return Math.pow(r.x-a,wi)+Math.pow(r.y-c,wi)<=s**wi||r.x<=s+a&&r.y<=s+c||r.x<=a||r.y<=c}return!1}},lr=class n extends Hc{constructor(e,t,i,r){super(e,t,Os.rectangle),this.size={height:r,width:i}}contains(e){let t=this.size.width,i=this.size.height,r=this.position;return e.x>=r.x&&e.x<=r.x+t&&e.y>=r.y&&e.y<=r.y+i}intersects(e){if(e instanceof Oo)return e.intersects(this);let t=this.size.width,i=this.size.height,r=this.position,s=e.position,o=e instanceof n?e.size:{width:0,height:0},a=o.width,c=o.height;return s.x<r.x+t&&s.x+a>r.x&&s.y<r.y+i&&s.y+c>r.y}};var No=class n{constructor(e,t){this.rectangle=e,this.capacity=t,this._subdivide=()=>{let{x:i,y:r}=this.rectangle.position,{width:s,height:o}=this.rectangle.size,{capacity:a}=this;for(let c=0;c<Ip;c++){let l=c%Lt;this._subs.push(new n(new lr(i+s*.5*l,r+o*.5*(Math.round(c*.5)-l),s*.5,o*.5),a))}this._divided=!0},this._points=[],this._divided=!1,this._subs=[]}insert(e){return this.rectangle.contains(e.position)?this._points.length<this.capacity?(this._points.push(e),!0):(this._divided||this._subdivide(),this._subs.some(t=>t.insert(e))):!1}query(e,t){let i=[];if(!e.intersects(this.rectangle))return[];for(let r of this._points)!e.contains(r.position)&&ir(e.position,r.position)>r.particle.getRadius()&&(!t||t(r.particle))||i.push(r.particle);if(this._divided)for(let r of this._subs)i.push(...r.query(e,t));return i}queryCircle(e,t,i){return this.query(new Oo(e.x,e.y,t),i)}queryRectangle(e,t,i){return this.query(new lr(e.x,e.y,t.width,t.height),i)}};var Rm=n=>{let{height:e,width:t}=n;return new lr(Bu*t,Bu*e,Vu*t,Vu*e)},Gc=class{constructor(e,t){this._addToPool=(...r)=>{this._pool.push(...r)},this._applyDensity=(r,s,o)=>{let a=r.number;if(!r.number.density?.enable){o===void 0?this._limit=a.limit.value:a.limit&&this._groupLimits.set(o,a.limit.value);return}let c=this._initDensityFactor(a.density),l=a.value,h=a.limit.value>zu?a.limit.value:l,u=Math.min(l,h)*c+s,d=Math.min(this.count,this.filter(m=>m.group===o).length);o===void 0?this._limit=a.limit.value*c:this._groupLimits.set(o,a.limit.value*c),d<u?this.push(Math.abs(u-d),void 0,r,o):d>u&&this.removeQuantity(d-u,o)},this._initDensityFactor=r=>{let s=this._container;if(!s.canvas.element||!r.enable)return Kp;let o=s.canvas.element,a=s.retina.pixelRatio;return o.width*o.height/(r.height*r.width*a**wi)},this._pushParticle=(r,s,o,a)=>{try{let c=this._pool.pop();c||(c=new Vc(this._engine,this._container)),c.init(this._nextId,r,s,o);let l=!0;return a&&(l=a(c)),l?(this._array.push(c),this._zArray.push(c),this._nextId++,this._engine.dispatchEvent($t.particleAdded,{container:this._container,data:{particle:c}}),c):void 0}catch(c){An().warning(`${Ni} adding particle: ${c}`)}},this._removeParticle=(r,s,o)=>{let a=this._array[r];if(!a||a.group!==s)return!1;let c=this._zArray.indexOf(a);return this._array.splice(r,ws),this._zArray.splice(c,ws),a.destroy(o),this._engine.dispatchEvent($t.particleRemoved,{container:this._container,data:{particle:a}}),this._addToPool(a),!0},this._engine=e,this._container=t,this._nextId=0,this._array=[],this._zArray=[],this._pool=[],this._limit=0,this._groupLimits=new Map,this._needsSort=!1,this._lastZIndex=0,this._interactionManager=new Bc(e,t),this._pluginsInitialized=!1;let i=t.canvas.size;this.quadTree=new No(Rm(i),Pu),this.movers=[],this.updaters=[]}get count(){return this._array.length}addManualParticles(){let e=this._container;e.actualOptions.manualParticles.forEach(i=>this.addParticle(i.position?Xa(i.position,e.canvas.size):void 0,i.options))}addParticle(e,t,i,r){let s=this._container.actualOptions.particles.number.limit.mode,o=i===void 0?this._limit:this._groupLimits.get(i)??this._limit,a=this.count;if(o>zu)switch(s){case Fs.delete:{let c=a+Yp-o;c>$p&&this.removeQuantity(c);break}case Fs.wait:if(a>=o)return;break}return this._pushParticle(e,t,i,r)}clear(){this._array=[],this._zArray=[],this._pluginsInitialized=!1}destroy(){this._array=[],this._zArray=[],this.movers=[],this.updaters=[]}draw(e){let t=this._container,i=t.canvas;i.clear(),this.update(e);for(let r of t.plugins.values())i.drawPlugin(r,e);for(let r of this._zArray)r.draw(e)}filter(e){return this._array.filter(e)}find(e){return this._array.find(e)}get(e){return this._array[e]}handleClickMode(e){this._interactionManager.handleClickMode(e)}init(){return he(this,null,function*(){let e=this._container,t=e.actualOptions;this._lastZIndex=0,this._needsSort=!1,yield this.initPlugins();let i=!1;for(let r of e.plugins.values())if(i=r.particlesInitialization?.()??i,i)break;if(this.addManualParticles(),!i){let r=t.particles,s=r.groups;for(let o in s){let a=s[o];for(let c=this.count,l=0;l<a.number?.value&&c<r.number.value;c++,l++)this.addParticle(void 0,a,o)}for(let o=this.count;o<r.number.value;o++)this.addParticle()}})}initPlugins(){return he(this,null,function*(){if(this._pluginsInitialized)return;let e=this._container;this.movers=yield this._engine.getMovers(e,!0),this.updaters=yield this._engine.getUpdaters(e,!0),yield this._interactionManager.init();for(let t of e.pathGenerators.values())t.init(e)})}push(e,t,i,r){for(let s=0;s<e;s++)this.addParticle(t?.position,i,r)}redraw(){return he(this,null,function*(){this.clear(),yield this.init(),this.draw({value:0,factor:0})})}remove(e,t,i){this.removeAt(this._array.indexOf(e),void 0,t,i)}removeAt(e,t=Ap,i,r){if(e<Ao||e>this.count)return;let s=0;for(let o=e;s<t&&o<this.count;o++)this._removeParticle(o,i,r)&&(o--,s++)}removeQuantity(e,t){this.removeAt(Ao,e,t)}setDensity(){let e=this._container.actualOptions,t=e.particles.groups;for(let i in t)this._applyDensity(t[i],Zp,i);this._applyDensity(e.particles,e.manualParticles.length)}setLastZIndex(e){this._lastZIndex=e,this._needsSort=this._needsSort||this._lastZIndex<e}setResizeFactor(e){this._resizeFactor=e}update(e){let t=this._container,i=new Set;this.quadTree=new No(Rm(t.canvas.size),Pu);for(let s of t.pathGenerators.values())s.update();for(let s of t.plugins.values())s.update?.(e);let r=this._resizeFactor;for(let s of this._array){r&&!s.ignoresResizeRatio&&(s.position.x*=r.width,s.position.y*=r.height,s.initialPosition.x*=r.width,s.initialPosition.y*=r.height),s.ignoresResizeRatio=!1,this._interactionManager.reset(s);for(let o of this._container.plugins.values()){if(s.destroyed)break;o.particleUpdate?.(s,e)}for(let o of this.movers)o.isEnabled(s)&&o.move(s,e);if(s.destroyed){i.add(s);continue}this.quadTree.insert(new zc(s.getPosition(),s))}if(i.size){let s=o=>!i.has(o);this._array=this.filter(s),this._zArray=this._zArray.filter(s);for(let o of i)this._engine.dispatchEvent($t.particleRemoved,{container:this._container,data:{particle:o}});this._addToPool(...i)}this._interactionManager.externalInteract(e);for(let s of this._array){for(let o of this.updaters)o.update(s,e);!s.destroyed&&!s.spawning&&this._interactionManager.particlesInteract(s,e)}if(delete this._resizeFactor,this._needsSort){let s=this._zArray;s.sort((o,a)=>a.position.z-o.position.z||o.id-a.id),this._lastZIndex=s[s.length-ka].position.z,this._needsSort=!1}}};var Wc=class{constructor(e){this.container=e,this.pixelRatio=Fu,this.reduceFactor=Lu}init(){let e=this.container,t=e.actualOptions;this.pixelRatio=!t.detectRetina||Vr()?Fu:window.devicePixelRatio,this.reduceFactor=Lu;let i=this.pixelRatio,r=e.canvas;if(r.element){let a=r.element;r.size.width=a.offsetWidth*i,r.size.height=a.offsetHeight*i}let s=t.particles,o=s.move;this.maxSpeed=Le(o.gravity.maxSpeed)*i,this.sizeAnimationSpeed=Le(s.size.animation.speed)*i}initParticle(e){let t=e.options,i=this.pixelRatio,r=t.move,s=r.distance,o=e.retina;o.moveDrift=Le(r.drift)*i,o.moveSpeed=Le(r.speed)*i,o.sizeAnimationSpeed=Le(t.size.animation.speed)*i;let a=o.maxDistance;a.horizontal=s.horizontal!==void 0?s.horizontal*i:void 0,a.vertical=s.vertical!==void 0?s.vertical*i:void 0,o.maxSpeed=Le(r.gravity.maxSpeed)*i}};function St(n){return n&&!n.destroyed}function Yv(n,e=Ia,t=!1){return{value:n,factor:t?Ia/e:Ia*n/1e3}}function Ns(n,e,...t){let i=new Uc(n,e);return Qu(i,...t),i}var Xc=class{constructor(e,t,i){this._intersectionManager=r=>{if(!(!St(this)||!this.actualOptions.pauseOnOutsideViewport))for(let s of r)s.target===this.interactivity.element&&(s.isIntersecting?this.play():this.pause())},this._nextFrame=r=>{try{if(!this._smooth&&this._lastFrameTime!==void 0&&r<this._lastFrameTime+1e3/this.fpsLimit){this.draw(!1);return}this._lastFrameTime??=r;let s=Yv(r-this._lastFrameTime,this.fpsLimit,this._smooth);if(this.addLifeTime(s.value),this._lastFrameTime=r,s.value>1e3){this.draw(!1);return}if(this.particles.draw(s),!this.alive()){this.destroy();return}this.animationStatus&&this.draw(!1)}catch(s){An().error(`${Ni} in animation loop`,s)}},this._engine=e,this.id=Symbol(t),this.fpsLimit=120,this._smooth=!1,this._delay=0,this._duration=0,this._lifeTime=0,this._firstStart=!0,this.started=!1,this.destroyed=!1,this._paused=!0,this._lastFrameTime=0,this.zLayers=100,this.pageHidden=!1,this._clickHandlers=new Map,this._sourceOptions=i,this._initialSourceOptions=i,this.retina=new Wc(this),this.canvas=new $a(this,this._engine),this.particles=new Gc(this._engine,this),this.pathGenerators=new Map,this.interactivity={mouse:{clicking:!1,inside:!1}},this.plugins=new Map,this.effectDrawers=new Map,this.shapeDrawers=new Map,this._options=Ns(this._engine,this),this.actualOptions=Ns(this._engine,this),this._eventListeners=new Za(this),this._intersectionObserver=fm(r=>this._intersectionManager(r)),this._engine.dispatchEvent($t.containerBuilt,{container:this})}get animationStatus(){return!this._paused&&!this.pageHidden&&St(this)}get options(){return this._options}get sourceOptions(){return this._sourceOptions}addClickHandler(e){if(!St(this))return;let t=this.interactivity.element;if(!t)return;let i=(u,d,m)=>{if(!St(this))return;let g=this.retina.pixelRatio,v={x:d.x*g,y:d.y*g},p=this.particles.quadTree.queryCircle(v,m*g);e(u,p)},r=u=>{if(!St(this))return;let d=u,m={x:d.offsetX||d.clientX,y:d.offsetY||d.clientY};i(u,m,Np)},s=()=>{St(this)&&(l=!0,h=!1)},o=()=>{St(this)&&(h=!0)},a=u=>{if(St(this)){if(l&&!h){let d=u,m=d.touches[d.touches.length-ku];if(!m&&(m=d.changedTouches[d.changedTouches.length-ku],!m))return;let g=this.canvas.element,v=g?g.getBoundingClientRect():void 0,p={x:m.clientX-(v?v.left:Ss),y:m.clientY-(v?v.top:Ss)};i(u,p,Math.max(m.radiusX,m.radiusY))}l=!1,h=!1}},c=()=>{St(this)&&(l=!1,h=!1)},l=!1,h=!1;this._clickHandlers.set("click",r),this._clickHandlers.set("touchstart",s),this._clickHandlers.set("touchmove",o),this._clickHandlers.set("touchend",a),this._clickHandlers.set("touchcancel",c);for(let[u,d]of this._clickHandlers)t.addEventListener(u,d)}addLifeTime(e){this._lifeTime+=e}addPath(e,t,i=!1){return!St(this)||!i&&this.pathGenerators.has(e)?!1:(this.pathGenerators.set(e,t),!0)}alive(){return!this._duration||this._lifeTime<=this._duration}clearClickHandlers(){if(St(this)){for(let[e,t]of this._clickHandlers)this.interactivity.element?.removeEventListener(e,t);this._clickHandlers.clear()}}destroy(e=!0){if(St(this)){this.stop(),this.clearClickHandlers(),this.particles.destroy(),this.canvas.destroy();for(let t of this.effectDrawers.values())t.destroy?.(this);for(let t of this.shapeDrawers.values())t.destroy?.(this);for(let t of this.effectDrawers.keys())this.effectDrawers.delete(t);for(let t of this.shapeDrawers.keys())this.shapeDrawers.delete(t);if(this._engine.clearPlugins(this),this.destroyed=!0,e){let t=this._engine.items,i=t.findIndex(r=>r===this);i>=kp&&t.splice(i,Oa)}this._engine.dispatchEvent($t.containerDestroyed,{container:this})}}draw(e){if(!St(this))return;let t=e,i=r=>{t&&(this._lastFrameTime=void 0,t=!1),this._nextFrame(r)};this._drawAnimationFrame=cm(r=>i(r))}export(i){return he(this,arguments,function*(e,t={}){for(let r of this.plugins.values()){if(!r.export)continue;let s=yield r.export(e,t);if(s.supported)return s.blob}An().error(`${Ni} - Export plugin with type ${e} not found`)})}handleClickMode(e){if(St(this)){this.particles.handleClickMode(e);for(let t of this.plugins.values())t.handleClickMode?.(e)}}init(){return he(this,null,function*(){if(!St(this))return;let e=this._engine.getSupportedEffects();for(let l of e){let h=this._engine.getEffectDrawer(l);h&&this.effectDrawers.set(l,h)}let t=this._engine.getSupportedShapes();for(let l of t){let h=this._engine.getShapeDrawer(l);h&&this.shapeDrawers.set(l,h)}yield this.particles.initPlugins(),this._options=Ns(this._engine,this,this._initialSourceOptions,this.sourceOptions),this.actualOptions=Ns(this._engine,this,this._options);let i=yield this._engine.getAvailablePlugins(this);for(let[l,h]of i)this.plugins.set(l,h);this.retina.init(),yield this.canvas.init(),this.updateActualOptions(),this.canvas.initBackground(),this.canvas.resize();let{zLayers:r,duration:s,delay:o,fpsLimit:a,smooth:c}=this.actualOptions;this.zLayers=r,this._duration=Le(s)*1e3,this._delay=Le(o)*1e3,this._lifeTime=0,this.fpsLimit=a>Bp?a:Up,this._smooth=c;for(let l of this.effectDrawers.values())yield l.init?.(this);for(let l of this.shapeDrawers.values())yield l.init?.(this);for(let l of this.plugins.values())yield l.init?.();this._engine.dispatchEvent($t.containerInit,{container:this}),yield this.particles.init(),this.particles.setDensity();for(let l of this.plugins.values())l.particlesSetup?.();this._engine.dispatchEvent($t.particlesSetup,{container:this})})}loadTheme(e){return he(this,null,function*(){St(this)&&(this._currentTheme=e,yield this.refresh())})}pause(){if(St(this)&&(this._drawAnimationFrame!==void 0&&(lm(this._drawAnimationFrame),delete this._drawAnimationFrame),!this._paused)){for(let e of this.plugins.values())e.pause?.();this.pageHidden||(this._paused=!0),this._engine.dispatchEvent($t.containerPaused,{container:this})}}play(e){if(!St(this))return;let t=this._paused||e;if(this._firstStart&&!this.actualOptions.autoPlay){this._firstStart=!1;return}if(this._paused&&(this._paused=!1),t)for(let i of this.plugins.values())i.play&&i.play();this._engine.dispatchEvent($t.containerPlay,{container:this}),this.draw(t??!1)}refresh(){return he(this,null,function*(){if(St(this))return this.stop(),this.start()})}reset(e){return he(this,null,function*(){if(St(this))return this._initialSourceOptions=e,this._sourceOptions=e,this._options=Ns(this._engine,this,this._initialSourceOptions,this.sourceOptions),this.actualOptions=Ns(this._engine,this,this._options),this.refresh()})}start(){return he(this,null,function*(){!St(this)||this.started||(yield this.init(),this.started=!0,yield new Promise(e=>{let t=()=>he(this,null,function*(){this._eventListeners.addListeners(),this.interactivity.element instanceof HTMLElement&&this._intersectionObserver&&this._intersectionObserver.observe(this.interactivity.element);for(let i of this.plugins.values())yield i.start?.();this._engine.dispatchEvent($t.containerStarted,{container:this}),this.play(),e()});this._delayTimeout=setTimeout(()=>void t(),this._delay)}))})}stop(){if(!(!St(this)||!this.started)){this._delayTimeout&&(clearTimeout(this._delayTimeout),delete this._delayTimeout),this._firstStart=!0,this.started=!1,this._eventListeners.removeListeners(),this.pause(),this.particles.clear(),this.canvas.stop(),this.interactivity.element instanceof HTMLElement&&this._intersectionObserver&&this._intersectionObserver.unobserve(this.interactivity.element);for(let e of this.plugins.values())e.stop?.();for(let e of this.plugins.keys())this.plugins.delete(e);this._sourceOptions=this._options,this._engine.dispatchEvent($t.containerStopped,{container:this})}}updateActualOptions(){this.actualOptions.responsive=[];let e=this.actualOptions.setResponsive(this.canvas.size.width,this.retina.pixelRatio,this._options);return this.actualOptions.setTheme(this._currentTheme),this._responsiveMaxWidth===e?!1:(this._responsiveMaxWidth=e,!0)}};var qc=class{constructor(){this._listeners=new Map}addEventListener(e,t){this.removeEventListener(e,t);let i=this._listeners.get(e);i||(i=[],this._listeners.set(e,i)),i.push(t)}dispatchEvent(e,t){this._listeners.get(e)?.forEach(r=>r(t))}hasEventListener(e){return!!this._listeners.get(e)}removeAllEventListeners(e){e?this._listeners.delete(e):this._listeners=new Map}removeEventListener(e,t){let i=this._listeners.get(e);if(!i)return;let r=i.length,s=i.indexOf(t);s<Ao||(r===ws?this._listeners.delete(e):i.splice(s,ws))}};function ed(n,e,t,i=!1){return he(this,null,function*(){let r=e.get(n);return(!r||i)&&(r=yield Promise.all([...t.values()].map(s=>s(n))),e.set(n,r)),r})}function $v(n){return he(this,null,function*(){let e=dn(n.url,n.index);if(!e)return n.fallback;let t=yield fetch(e);return t.ok?yield t.json():(An().error(`${Ni} ${t.status} while retrieving config file`),n.fallback)})}var Zv=n=>{let e;if(n instanceof HTMLCanvasElement||n.tagName.toLowerCase()===Ra)e=n,e.dataset[En]||(e.dataset[En]=Ru);else{let i=n.getElementsByTagName(Ra);i.length?(e=i[Vp],e.dataset[En]=Ru):(e=document.createElement(Ra),e.dataset[En]=Iu,n.appendChild(e))}let t="100%";return e.style.width||(e.style.width=t),e.style.height||(e.style.height=t),e},Kv=(n,e)=>{let t=e??document.getElementById(n);return t||(t=document.createElement("div"),t.id=n,t.dataset[En]=Iu,document.body.append(t),t)},jc=class{constructor(){this._configs=new Map,this._domArray=[],this._eventDispatcher=new qc,this._initialized=!1,this.plugins=[],this.colorManagers=new Map,this.easingFunctions=new Map,this._initializers={interactors:new Map,movers:new Map,updaters:new Map},this.interactors=new Map,this.movers=new Map,this.updaters=new Map,this.presets=new Map,this.effectDrawers=new Map,this.shapeDrawers=new Map,this.pathGenerators=new Map}get configs(){let e={};for(let[t,i]of this._configs)e[t]=i;return e}get items(){return this._domArray}get version(){return"3.8.1"}addColorManager(e,t=!0){return he(this,null,function*(){this.colorManagers.set(e.key,e),yield this.refresh(t)})}addConfig(e){let t=e.key??e.name??"default";this._configs.set(t,e),this._eventDispatcher.dispatchEvent($t.configAdded,{data:{name:t,config:e}})}addEasing(e,t,i=!0){return he(this,null,function*(){this.getEasing(e)||(this.easingFunctions.set(e,t),yield this.refresh(i))})}addEffect(e,t,i=!0){return he(this,null,function*(){un(e,r=>{this.getEffectDrawer(r)||this.effectDrawers.set(r,t)}),yield this.refresh(i)})}addEventListener(e,t){this._eventDispatcher.addEventListener(e,t)}addInteractor(e,t,i=!0){return he(this,null,function*(){this._initializers.interactors.set(e,t),yield this.refresh(i)})}addMover(e,t,i=!0){return he(this,null,function*(){this._initializers.movers.set(e,t),yield this.refresh(i)})}addParticleUpdater(e,t,i=!0){return he(this,null,function*(){this._initializers.updaters.set(e,t),yield this.refresh(i)})}addPathGenerator(e,t,i=!0){return he(this,null,function*(){this.getPathGenerator(e)||this.pathGenerators.set(e,t),yield this.refresh(i)})}addPlugin(e,t=!0){return he(this,null,function*(){this.getPlugin(e.id)||this.plugins.push(e),yield this.refresh(t)})}addPreset(e,t,i=!1,r=!0){return he(this,null,function*(){(i||!this.getPreset(e))&&this.presets.set(e,t),yield this.refresh(r)})}addShape(e,t=!0){return he(this,null,function*(){for(let i of e.validTypes)this.getShapeDrawer(i)||this.shapeDrawers.set(i,e);yield this.refresh(t)})}checkVersion(e){if(this.version!==e)throw new Error(`The tsParticles version is different from the loaded plugins version. Engine version: ${this.version}. Plugin version: ${e}`)}clearPlugins(e){this.updaters.delete(e),this.movers.delete(e),this.interactors.delete(e)}dispatchEvent(e,t){this._eventDispatcher.dispatchEvent(e,t)}dom(){return this.items}domItem(e){return this.item(e)}getAvailablePlugins(e){return he(this,null,function*(){let t=new Map;for(let i of this.plugins)i.needsPlugin(e.actualOptions)&&t.set(i.id,yield i.getPlugin(e));return t})}getEasing(e){return this.easingFunctions.get(e)??(t=>t)}getEffectDrawer(e){return this.effectDrawers.get(e)}getInteractors(e,t=!1){return he(this,null,function*(){return ed(e,this.interactors,this._initializers.interactors,t)})}getMovers(e,t=!1){return he(this,null,function*(){return ed(e,this.movers,this._initializers.movers,t)})}getPathGenerator(e){return this.pathGenerators.get(e)}getPlugin(e){return this.plugins.find(t=>t.id===e)}getPreset(e){return this.presets.get(e)}getShapeDrawer(e){return this.shapeDrawers.get(e)}getSupportedEffects(){return this.effectDrawers.keys()}getSupportedShapes(){return this.shapeDrawers.keys()}getUpdaters(e,t=!1){return he(this,null,function*(){return ed(e,this.updaters,this._initializers.updaters,t)})}init(){this._initialized||(this._initialized=!0)}item(e){let{items:t}=this,i=t[e];if(!i||i.destroyed){t.splice(e,Oa);return}return i}load(e){return he(this,null,function*(){let t=e.id??e.element?.id??`tsparticles${Math.floor(at()*zp)}`,{index:i,url:r}=e,s=r?yield $v({fallback:e.options,url:r,index:i}):e.options,o=dn(s,i),{items:a}=this,c=a.findIndex(d=>d.id.description===t),l=new Xc(this,t,o);if(c>=Hp){let d=this.item(c),m=d?Gp:Ur;d&&!d.destroyed&&d.destroy(!1),a.splice(c,m,l)}else a.push(l);let h=Kv(t,e.element),u=Zv(h);return l.canvas.loadCanvas(u),yield l.start(),l})}loadOptions(e,t){this.plugins.forEach(i=>i.loadOptions?.(e,t))}loadParticlesOptions(e,t,...i){let r=this.updaters.get(e);r&&r.forEach(s=>s.loadOptions?.(t,...i))}refresh(e=!0){return he(this,null,function*(){e&&(yield Promise.all(this.items.map(t=>t.refresh())))})}removeEventListener(e,t){this._eventDispatcher.removeEventListener(e,t)}setOnClickHandler(e){let{items:t}=this;if(!t.length)throw new Error(`${Ni} can only set click handlers after calling tsParticles.load()`);t.forEach(i=>i.addClickHandler(e))}};function Dm(){let n=new jc;return n.init(),n}var ko=function(n){return n.clockwise="clockwise",n.counterClockwise="counter-clockwise",n.random="random",n}(ko||{});var Yc=Dm();Vr()||(window.tsParticles=Yc);var td=.5,Jv=2,hr=0,Zi=1,Pm=60,Fm=0,Qv=.01,ey=Math.PI*Jv;function Lm(n){let e=n.initialPosition,{dx:t,dy:i}=hn(e,n.position),r=Math.abs(t),s=Math.abs(i),{maxDistance:o}=n.retina,a=o.horizontal,c=o.vertical;if(!a&&!c)return;let l=(a&&r>=a)??!1,h=(c&&s>=c)??!1;if((l||h)&&!n.misplaced)n.misplaced=!!a&&r>a||!!c&&s>c,a&&(n.velocity.x=n.velocity.y*td-n.velocity.x),c&&(n.velocity.y=n.velocity.x*td-n.velocity.y);else if((!a||r<a)&&(!c||s<c)&&n.misplaced)n.misplaced=!1;else if(n.misplaced){let u=n.position,d=n.velocity;a&&(u.x<e.x&&d.x<hr||u.x>e.x&&d.x>hr)&&(d.x*=-at()),c&&(u.y<e.y&&d.y<hr||u.y>e.y&&d.y>hr)&&(d.y*=-at())}}function Om(n,e,t,i,r,s){ty(n,s);let o=n.gravity,a=o?.enable&&o.inverse?-Zi:Zi;r&&t&&(n.velocity.x+=r*s.factor/(Pm*t)),o?.enable&&t&&(n.velocity.y+=a*(o.acceleration*s.factor)/(Pm*t));let c=n.moveDecay;n.velocity.multTo(c);let l=n.velocity.mult(t);o?.enable&&i>hr&&(!o.inverse&&l.y>=hr&&l.y>=i||o.inverse&&l.y<=hr&&l.y<=-i)&&(l.y=a*i,t&&(n.velocity.y=l.y/t));let h=n.options.zIndex,u=(Zi-n.zIndexFactor)**h.velocityRate;l.multTo(u);let{position:d}=n;d.addTo(l),e.vibrate&&(d.x+=Math.sin(d.x*Math.cos(d.y)),d.y+=Math.cos(d.y*Math.sin(d.x)))}function Nm(n,e){let t=n.container;if(!n.spin)return;let i=n.spin.direction===ko.clockwise,r={x:i?Math.cos:Math.sin,y:i?Math.sin:Math.cos};n.position.x=n.spin.center.x+n.spin.radius*r.x(n.spin.angle),n.position.y=n.spin.center.y+n.spin.radius*r.y(n.spin.angle),n.spin.radius+=n.spin.acceleration;let s=Math.max(t.canvas.size.width,t.canvas.size.height),o=s*td;n.spin.radius>o?(n.spin.radius=o,n.spin.acceleration*=-Zi):n.spin.radius<Fm&&(n.spin.radius=Fm,n.spin.acceleration*=-Zi),n.spin.angle+=e*Qv*(Zi-n.spin.radius/s)}function ty(n,e){let t=n.options,i=t.move.path;if(!i.enable)return;if(n.lastPathTime<=n.pathDelay){n.lastPathTime+=e.value;return}let s=n.pathGenerator?.generate(n,e);s&&n.velocity.addTo(s),i.clamp&&(n.velocity.x=ln(n.velocity.x,-Zi,Zi),n.velocity.y=ln(n.velocity.y,-Zi,Zi)),n.lastPathTime-=n.pathDelay}function km(n){return n.slow.inRange?n.slow.factor:Zi}function Um(n){let e=n.container,t=n.options,i=t.move.spin;if(!i.enable)return;let r=i.position??{x:50,y:50},s=.01,o={x:r.x*s*e.canvas.size.width,y:r.y*s*e.canvas.size.height},a=n.getPosition(),c=ir(a,o),l=Le(i.acceleration);n.retina.spinAcceleration=l*e.retina.pixelRatio,n.spin={center:o,direction:n.velocity.x>=hr?ko.clockwise:ko.counterClockwise,angle:at()*ey,radius:c,acceleration:n.retina.spinAcceleration}}var iy=2,ny=1,ry=1,$c=class{init(e){let t=e.options,i=t.move.gravity;e.gravity={enable:i.enable,acceleration:Le(i.acceleration),inverse:i.inverse},Um(e)}isEnabled(e){return!e.destroyed&&e.options.move.enable}move(e,t){let i=e.options,r=i.move;if(!r.enable)return;let s=e.container,o=s.retina.pixelRatio;e.retina.moveSpeed??=Le(r.speed)*o,e.retina.moveDrift??=Le(e.options.move.drift)*o;let a=km(e),c=e.retina.moveSpeed*s.retina.reduceFactor,l=e.retina.moveDrift,h=tr(i.size.value)*o,u=r.size?e.getRadius()/h:ny,d=t.factor||ry,m=c*u*a*d/iy,g=e.retina.maxSpeed??s.retina.maxSpeed;r.spin.enable?Nm(e,m):Om(e,r,m,g,l,t),Lm(e)}};function Bm(n,e=!0){return he(this,null,function*(){n.checkVersion("3.8.1"),yield n.addMover("base",()=>Promise.resolve(new $c),e)})}var sy=Math.PI*2,oy=0,Vm={x:0,y:0};function zm(n){let{context:e,particle:t,radius:i}=n;t.circleRange||(t.circleRange={min:oy,max:sy});let r=t.circleRange;e.arc(Vm.x,Vm.y,i,r.min,r.max,!1)}var ay=12,cy=360,Hm=0,Zc=class{constructor(){this.validTypes=["circle"]}draw(e){zm(e)}getSidesCount(){return ay}particleInit(e,t){let i=t.shapeData,r=i?.angle??{max:cy,min:Hm};t.circleRange=Tn(r)?{min:nr(r.min),max:nr(r.max)}:{min:Hm,max:nr(r)}}};function Gm(n,e=!0){return he(this,null,function*(){n.checkVersion("3.8.1"),yield n.addShape(new Zc,e)})}var Kc=class{constructor(e,t){this._container=e,this._engine=t}init(e){let t=Do(this._engine,e.options.color,e.id,e.options.reduceDuplicates);t&&(e.color=bm(t,e.options.color.animation,this._container.retina.reduceFactor))}isEnabled(e){let{h:t,s:i,l:r}=e.options.color.animation,{color:s}=e;return!e.destroyed&&!e.spawning&&(s?.h.value!==void 0&&t.enable||s?.s.value!==void 0&&i.enable||s?.l.value!==void 0&&r.enable)}update(e,t){xm(e.color,t)}};function Wm(n,e=!0){return he(this,null,function*(){n.checkVersion("3.8.1"),yield n.addParticleUpdater("color",t=>Promise.resolve(new Kc(t,n)),e)})}var ks=function(n){return n[n.r=1]="r",n[n.g=2]="g",n[n.b=3]="b",n[n.a=4]="a",n}(ks||{}),ly=/^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i,hy=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i,Jc=16,uy=1,dy=255,Qc=class{constructor(){this.key="hex",this.stringPrefix="#"}handleColor(e){return this._parseString(e.value)}handleRangeColor(e){return this._parseString(e.value)}parseString(e){return this._parseString(e)}_parseString(e){if(typeof e!="string"||!e?.startsWith(this.stringPrefix))return;let t=e.replace(ly,(r,s,o,a,c)=>s+s+o+o+a+a+(c!==void 0?c+c:"")),i=hy.exec(t);return i?{a:i[ks.a]!==void 0?parseInt(i[ks.a],Jc)/dy:uy,b:parseInt(i[ks.b],Jc),g:parseInt(i[ks.g],Jc),r:parseInt(i[ks.r],Jc)}:void 0}};function Xm(n,e=!0){return he(this,null,function*(){n.checkVersion("3.8.1"),yield n.addColorManager(new Qc,e)})}var Uo=function(n){return n[n.h=1]="h",n[n.s=2]="s",n[n.l=3]="l",n[n.a=5]="a",n}(Uo||{}),el=class{constructor(){this.key="hsl",this.stringPrefix="hsl"}handleColor(e){let t=e.value,i=t.hsl??e.value;if(i.h!==void 0&&i.s!==void 0&&i.l!==void 0)return ja(i)}handleRangeColor(e){let t=e.value,i=t.hsl??e.value;if(i.h!==void 0&&i.l!==void 0)return ja({h:Le(i.h),l:Le(i.l),s:Le(i.s)})}parseString(e){if(!e.startsWith("hsl"))return;let t=/hsla?\(\s*(\d+)\s*[\s,]\s*(\d+)%\s*[\s,]\s*(\d+)%\s*([\s,]\s*(0|1|0?\.\d+|(\d{1,3})%)\s*)?\)/i,i=t.exec(e),r=4,s=1,o=10;return i?ym({a:i.length>r?za(i[Uo.a]):s,h:parseInt(i[Uo.h],o),l:parseInt(i[Uo.l],o),s:parseInt(i[Uo.s],o)}):void 0}};function qm(n,e=!0){return he(this,null,function*(){n.checkVersion("3.8.1"),yield n.addColorManager(new el,e)})}var tl=class{constructor(e){this.container=e}init(e){let t=e.options.opacity,i=1;e.opacity=Wa(t,i);let r=t.animation;r.enable&&(e.opacity.velocity=Le(r.speed)/100*this.container.retina.reduceFactor,r.sync||(e.opacity.velocity*=at()))}isEnabled(e){return!e.destroyed&&!e.spawning&&!!e.opacity&&e.opacity.enable&&((e.opacity.maxLoops??0)<=0||(e.opacity.maxLoops??0)>0&&(e.opacity.loops??0)<(e.opacity.maxLoops??0))}reset(e){e.opacity&&(e.opacity.time=0,e.opacity.loops=0)}update(e,t){!this.isEnabled(e)||!e.opacity||qa(e,e.opacity,!0,e.options.opacity.animation.destroy,t)}};function jm(n,e=!0){return he(this,null,function*(){n.checkVersion("3.8.1"),yield n.addParticleUpdater("opacity",t=>Promise.resolve(new tl(t)),e)})}var il=0,Us=0;function Ym(n){if(n.outMode!==ut.bounce&&n.outMode!==ut.split||n.direction!==Be.left&&n.direction!==Be.right)return;n.bounds.right<Us&&n.direction===Be.left?n.particle.position.x=n.size+n.offset.x:n.bounds.left>n.canvasSize.width&&n.direction===Be.right&&(n.particle.position.x=n.canvasSize.width-n.size-n.offset.x);let e=n.particle.velocity.x,t=!1;if(n.direction===Be.right&&n.bounds.right>=n.canvasSize.width&&e>il||n.direction===Be.left&&n.bounds.left<=Us&&e<il){let r=Le(n.particle.options.bounce.horizontal.value);n.particle.velocity.x*=-r,t=!0}if(!t)return;let i=n.offset.x+n.size;n.bounds.right>=n.canvasSize.width&&n.direction===Be.right?n.particle.position.x=n.canvasSize.width-i:n.bounds.left<=Us&&n.direction===Be.left&&(n.particle.position.x=i),n.outMode===ut.split&&n.particle.destroy()}function $m(n){if(n.outMode!==ut.bounce&&n.outMode!==ut.split||n.direction!==Be.bottom&&n.direction!==Be.top)return;n.bounds.bottom<Us&&n.direction===Be.top?n.particle.position.y=n.size+n.offset.y:n.bounds.top>n.canvasSize.height&&n.direction===Be.bottom&&(n.particle.position.y=n.canvasSize.height-n.size-n.offset.y);let e=n.particle.velocity.y,t=!1;if(n.direction===Be.bottom&&n.bounds.bottom>=n.canvasSize.height&&e>il||n.direction===Be.top&&n.bounds.top<=Us&&e<il){let r=Le(n.particle.options.bounce.vertical.value);n.particle.velocity.y*=-r,t=!0}if(!t)return;let i=n.offset.y+n.size;n.bounds.bottom>=n.canvasSize.height&&n.direction===Be.bottom?n.particle.position.y=n.canvasSize.height-i:n.bounds.top<=Us&&n.direction===Be.top&&(n.particle.position.y=i),n.outMode===ut.split&&n.particle.destroy()}var nl=class{constructor(e){this.container=e,this.modes=[ut.bounce,ut.split]}update(e,t,i,r){if(!this.modes.includes(r))return;let s=this.container,o=!1;for(let d of s.plugins.values())if(d.particleBounce!==void 0&&(o=d.particleBounce(e,i,t)),o)break;if(o)return;let a=e.getPosition(),c=e.offset,l=e.getRadius(),h=Ro(a,l),u=s.canvas.size;Ym({particle:e,outMode:r,direction:t,bounds:h,canvasSize:u,offset:c,size:l}),$m({particle:e,outMode:r,direction:t,bounds:h,canvasSize:u,offset:c,size:l})}};var rl=0,sl=class{constructor(e){this.container=e,this.modes=[ut.destroy]}update(e,t,i,r){if(!this.modes.includes(r))return;let s=this.container;switch(e.outType){case Ti.normal:case Ti.outside:if(Cs(e.position,s.canvas.size,fi.origin,e.getRadius(),t))return;break;case Ti.inside:{let{dx:o,dy:a}=hn(e.position,e.moveCenter),{x:c,y:l}=e.velocity;if(c<rl&&o>e.moveCenter.radius||l<rl&&a>e.moveCenter.radius||c>=rl&&o<-e.moveCenter.radius||l>=rl&&a<-e.moveCenter.radius)return;break}}s.particles.remove(e,e.group,!0)}};var ol=0,al=class{constructor(e){this.container=e,this.modes=[ut.none]}update(e,t,i,r){if(!this.modes.includes(r)||((e.options.move.distance.horizontal&&(t===Be.left||t===Be.right))??(e.options.move.distance.vertical&&(t===Be.top||t===Be.bottom))))return;let s=e.options.move.gravity,o=this.container,a=o.canvas.size,c=e.getRadius();if(s.enable){let l=e.position;(!s.inverse&&l.y>a.height+c&&t===Be.bottom||s.inverse&&l.y<-c&&t===Be.top)&&o.particles.remove(e)}else{if(e.velocity.y>ol&&e.position.y<=a.height+c||e.velocity.y<ol&&e.position.y>=-c||e.velocity.x>ol&&e.position.x<=a.width+c||e.velocity.x<ol&&e.position.x>=-c)return;Cs(e.position,o.canvas.size,fi.origin,c,t)||o.particles.remove(e)}}};var cl=0,ll=0,hl=class{constructor(e){this.container=e,this.modes=[ut.out]}update(e,t,i,r){if(!this.modes.includes(r))return;let s=this.container;switch(e.outType){case Ti.inside:{let{x:o,y:a}=e.velocity,c=fi.origin;c.length=e.moveCenter.radius,c.angle=e.velocity.angle+Math.PI,c.addTo(fi.create(e.moveCenter));let{dx:l,dy:h}=hn(e.position,c);if(o<=cl&&l>=ll||a<=cl&&h>=ll||o>=cl&&l<=ll||a>=cl&&h<=ll)return;e.position.x=Math.floor(pi({min:0,max:s.canvas.size.width})),e.position.y=Math.floor(pi({min:0,max:s.canvas.size.height}));let{dx:u,dy:d}=hn(e.position,e.moveCenter);e.direction=Math.atan2(-d,-u),e.velocity.angle=e.direction;break}default:{if(Cs(e.position,s.canvas.size,fi.origin,e.getRadius(),t))return;switch(e.outType){case Ti.outside:{e.position.x=Math.floor(pi({min:-e.moveCenter.radius,max:e.moveCenter.radius}))+e.moveCenter.x,e.position.y=Math.floor(pi({min:-e.moveCenter.radius,max:e.moveCenter.radius}))+e.moveCenter.y;let{dx:o,dy:a}=hn(e.position,e.moveCenter);e.moveCenter.radius&&(e.direction=Math.atan2(a,o),e.velocity.angle=e.direction);break}case Ti.normal:{let o=e.options.move.warp,a=s.canvas.size,c={bottom:a.height+e.getRadius()+e.offset.y,left:-e.getRadius()-e.offset.x,right:a.width+e.getRadius()+e.offset.x,top:-e.getRadius()-e.offset.y},l=e.getRadius(),h=Ro(e.position,l);t===Be.right&&h.left>a.width+e.offset.x?(e.position.x=c.left,e.initialPosition.x=e.position.x,o||(e.position.y=at()*a.height,e.initialPosition.y=e.position.y)):t===Be.left&&h.right<-e.offset.x&&(e.position.x=c.right,e.initialPosition.x=e.position.x,o||(e.position.y=at()*a.height,e.initialPosition.y=e.position.y)),t===Be.bottom&&h.top>a.height+e.offset.y?(o||(e.position.x=at()*a.width,e.initialPosition.x=e.position.x),e.position.y=c.top,e.initialPosition.y=e.position.y):t===Be.top&&h.bottom<-e.offset.y&&(o||(e.position.x=at()*a.width,e.initialPosition.x=e.position.x),e.position.y=c.bottom,e.initialPosition.y=e.position.y);break}}break}}}};var fy=(n,e)=>n.default===e||n.bottom===e||n.left===e||n.right===e||n.top===e,ul=class{constructor(e){this._addUpdaterIfMissing=(t,i,r)=>{let s=t.options.move.outModes;!this.updaters.has(i)&&fy(s,i)&&this.updaters.set(i,r(this.container))},this._updateOutMode=(t,i,r,s)=>{for(let o of this.updaters.values())o.update(t,s,i,r)},this.container=e,this.updaters=new Map}init(e){this._addUpdaterIfMissing(e,ut.bounce,t=>new nl(t)),this._addUpdaterIfMissing(e,ut.out,t=>new hl(t)),this._addUpdaterIfMissing(e,ut.destroy,t=>new sl(t)),this._addUpdaterIfMissing(e,ut.none,t=>new al(t))}isEnabled(e){return!e.destroyed&&!e.spawning}update(e,t){let i=e.options.move.outModes;this._updateOutMode(e,t,i.bottom??i.default,Be.bottom),this._updateOutMode(e,t,i.left??i.default,Be.left),this._updateOutMode(e,t,i.right??i.default,Be.right),this._updateOutMode(e,t,i.top??i.default,Be.top)}};function Zm(n,e=!0){return he(this,null,function*(){n.checkVersion("3.8.1"),yield n.addParticleUpdater("outModes",t=>Promise.resolve(new ul(t)),e)})}var Bo=function(n){return n[n.r=1]="r",n[n.g=2]="g",n[n.b=3]="b",n[n.a=5]="a",n}(Bo||{}),dl=class{constructor(){this.key="rgb",this.stringPrefix="rgb"}handleColor(e){let t=e.value,i=t.rgb??e.value;if(i.r!==void 0)return i}handleRangeColor(e){let t=e.value,i=t.rgb??e.value;if(i.r!==void 0)return{r:Le(i.r),g:Le(i.g),b:Le(i.b)}}parseString(e){if(!e.startsWith(this.stringPrefix))return;let t=/rgba?\(\s*(\d{1,3})\s*[\s,]\s*(\d{1,3})\s*[\s,]\s*(\d{1,3})\s*([\s,]\s*(0|1|0?\.\d+|(\d{1,3})%)\s*)?\)/i,i=t.exec(e),r=10;return i?{a:i.length>4?za(i[Bo.a]):1,b:parseInt(i[Bo.b],r),g:parseInt(i[Bo.g],r),r:parseInt(i[Bo.r],r)}:void 0}};function Km(n,e=!0){return he(this,null,function*(){n.checkVersion("3.8.1"),yield n.addColorManager(new dl,e)})}var Wr=0,fl=class{init(e){let t=e.container,i=e.options.size,r=i.animation;r.enable&&(e.size.velocity=(e.retina.sizeAnimationSpeed??t.retina.sizeAnimationSpeed)/100*t.retina.reduceFactor,r.sync||(e.size.velocity*=at()))}isEnabled(e){return!e.destroyed&&!e.spawning&&e.size.enable&&((e.size.maxLoops??Wr)<=Wr||(e.size.maxLoops??Wr)>Wr&&(e.size.loops??Wr)<(e.size.maxLoops??Wr))}reset(e){e.size.loops=Wr}update(e,t){this.isEnabled(e)&&qa(e,e.size,!0,e.options.size.animation.destroy,t)}};function Jm(n,e=!0){return he(this,null,function*(){n.checkVersion("3.8.1"),yield n.addParticleUpdater("size",()=>Promise.resolve(new fl),e)})}function Qm(n,e=!0){return he(this,null,function*(){n.checkVersion("3.8.1"),yield Xm(n,!1),yield qm(n,!1),yield Km(n,!1),yield Bm(n,!1),yield Gm(n,!1),yield Wm(n,!1),yield jm(n,!1),yield Zm(n,!1),yield Jm(n,!1),yield n.refresh(e)})}var Bs=class n{constructor(e){this.platformId=e}ngOnInit(){return he(this,null,function*(){Jn(this.platformId)&&(yield Qm(Yc),yield Yc.load({id:"tsparticles",options:{fullScreen:{enable:!0,zIndex:-1},background:{color:{value:"#ffffff"}},particles:{number:{value:100,density:{enable:!0,value_area:800}},color:{value:"#b80099"},shape:{type:"circle"},opacity:{value:.5},size:{value:{min:1,max:7}},move:{enable:!0,speed:1,direction:"none",outModes:{default:"out"}},links:{enable:!0,color:"#b80099",distance:150,opacity:.5}},detectRetina:!0}}))})}static \u0275fac=function(t){return new(t||n)(ue(Xn))};static \u0275cmp=Ct({type:n,selectors:[["app-particles"]],standalone:!0,features:[It],decls:1,vars:0,consts:[["id","tsparticles"]],template:function(t,i){t&1&&hi(0,"div",0)},styles:["#tsparticles[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;z-index:-2}"]})};var nd;try{nd=typeof Intl<"u"&&Intl.v8BreakIterator}catch{nd=!1}var zt=(()=>{class n{constructor(t){this._platformId=t,this.isBrowser=this._platformId?Jn(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||nd)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}static{this.\u0275fac=function(i){return new(i||n)(Ye(Xn))}}static{this.\u0275prov=yt({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var Vo;function py(){if(Vo==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Vo=!0}))}finally{Vo=Vo||!1}return Vo}function ur(n){return py()?n:!!n.capture}var Ki=function(n){return n[n.NORMAL=0]="NORMAL",n[n.NEGATED=1]="NEGATED",n[n.INVERTED=2]="INVERTED",n}(Ki||{}),pl,Xr;function eg(){if(Xr==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Xr=!1,Xr;if("scrollBehavior"in document.documentElement.style)Xr=!0;else{let n=Element.prototype.scrollTo;n?Xr=!/\{\s*\[native code\]\s*\}/.test(n.toString()):Xr=!1}}return Xr}function Vs(){if(typeof document!="object"||!document)return Ki.NORMAL;if(pl==null){let n=document.createElement("div"),e=n.style;n.dir="rtl",e.width="1px",e.overflow="auto",e.visibility="hidden",e.pointerEvents="none",e.position="absolute";let t=document.createElement("div"),i=t.style;i.width="2px",i.height="1px",n.appendChild(t),document.body.appendChild(n),pl=Ki.NORMAL,n.scrollLeft===0&&(n.scrollLeft=1,pl=n.scrollLeft===0?Ki.NEGATED:Ki.INVERTED),n.remove()}return pl}var id;function my(){if(id==null){let n=typeof document<"u"?document.head:null;id=!!(n&&(n.createShadowRoot||n.attachShadow))}return id}function tg(n){if(my()){let e=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&e instanceof ShadowRoot)return e}return null}function dr(n){return n.composedPath?n.composedPath()[0]:n.target}function ig(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function ml(n,...e){return e.length?e.some(t=>n[t]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}function gl(n,e=0){return gy(n)?Number(n):arguments.length===2?e:0}function gy(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function rd(n){return Array.isArray(n)?n:[n]}function Ji(n){return n instanceof Mt?n.nativeElement:n}function _y(n){if(n.type==="characterData"&&n.target instanceof Comment)return!0;if(n.type==="childList"){for(let e=0;e<n.addedNodes.length;e++)if(!(n.addedNodes[e]instanceof Comment))return!1;for(let e=0;e<n.removedNodes.length;e++)if(!(n.removedNodes[e]instanceof Comment))return!1;return!0}return!1}var vy=(()=>{class n{create(t){return typeof MutationObserver>"u"?null:new MutationObserver(t)}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=yt({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),yy=(()=>{class n{constructor(t){this._mutationObserverFactory=t,this._observedElements=new Map,this._ngZone=li(Ut)}ngOnDestroy(){this._observedElements.forEach((t,i)=>this._cleanupObserver(i))}observe(t){let i=Ji(t);return new Xi(r=>{let o=this._observeElement(i).pipe(Pr(a=>a.filter(c=>!_y(c))),sn(a=>!!a.length)).subscribe(a=>{this._ngZone.run(()=>{r.next(a)})});return()=>{o.unsubscribe(),this._unobserveElement(i)}})}_observeElement(t){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(t))this._observedElements.get(t).count++;else{let i=new vt,r=this._mutationObserverFactory.create(s=>i.next(s));r&&r.observe(t,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(t,{observer:r,stream:i,count:1})}return this._observedElements.get(t).stream})}_unobserveElement(t){this._observedElements.has(t)&&(this._observedElements.get(t).count--,this._observedElements.get(t).count||this._cleanupObserver(t))}_cleanupObserver(t){if(this._observedElements.has(t)){let{observer:i,stream:r}=this._observedElements.get(t);i&&i.disconnect(),r.complete(),this._observedElements.delete(t)}}static{this.\u0275fac=function(i){return new(i||n)(Ye(vy))}}static{this.\u0275prov=yt({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),ng=(()=>{class n{get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._disabled?this._unsubscribe():this._subscribe()}get debounce(){return this._debounce}set debounce(t){this._debounce=gl(t),this._subscribe()}constructor(t,i){this._contentObserver=t,this._elementRef=i,this.event=new At,this._disabled=!1,this._currentSubscription=null}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let t=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?t.pipe(Wn(this.debounce)):t).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static{this.\u0275fac=function(i){return new(i||n)(ue(yy),ue(Mt))}}static{this.\u0275dir=Dt({type:n,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",Jt],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"],standalone:!0,features:[Oi]})}}return n})();var og=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=ni({type:n})}static{this.\u0275inj=ti({})}}return n})(),rg=new Set,qr,by=(()=>{class n{constructor(t,i){this._platform=t,this._nonce=i,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):My}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&xy(t,this._nonce),this._matchMedia(t)}static{this.\u0275fac=function(i){return new(i||n)(Ye(zt),Ye(Qf,8))}}static{this.\u0275prov=yt({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function xy(n,e){if(!rg.has(n))try{qr||(qr=document.createElement("style"),e&&qr.setAttribute("nonce",e),qr.setAttribute("type","text/css"),document.head.appendChild(qr)),qr.sheet&&(qr.sheet.insertRule(`@media ${n} {body{ }}`,0),rg.add(n))}catch(t){console.error(t)}}function My(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var _l=(()=>{class n{constructor(t,i){this._mediaMatcher=t,this._zone=i,this._queries=new Map,this._destroySubject=new vt}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return sg(rd(t)).some(r=>this._registerQuery(r).mql.matches)}observe(t){let r=sg(rd(t)).map(o=>this._registerQuery(o).observable),s=$f(r);return s=Zf(s.pipe(pu(1)),s.pipe(_s(1),Wn(0))),s.pipe(Pr(o=>{let a={matches:!1,breakpoints:{}};return o.forEach(({matches:c,query:l})=>{a.matches=a.matches||c,a.breakpoints[l]=c}),a}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let i=this._mediaMatcher.matchMedia(t),s={observable:new Xi(o=>{let a=c=>this._zone.run(()=>o.next(c));return i.addListener(a),()=>{i.removeListener(a)}}).pipe(Lr(i),Pr(({matches:o})=>({query:t,matches:o})),ei(this._destroySubject)),mql:i};return this._queries.set(t,s),s}static{this.\u0275fac=function(i){return new(i||n)(Ye(by),Ye(Ut))}}static{this.\u0275prov=yt({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function sg(n){return n.map(e=>e.split(",")).reduce((e,t)=>e.concat(t)).map(e=>e.trim())}var ag={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var Gy=200,od=class{constructor(e,t){this._letterKeyStream=new vt,this._items=[],this._selectedItemIndex=-1,this._pressedLetters=[],this._selectedItem=new vt,this.selectedItem=this._selectedItem;let i=typeof t?.debounceInterval=="number"?t.debounceInterval:Gy;t?.skipPredicate&&(this._skipPredicateFn=t.skipPredicate),this.setItems(e),this._setupKeyHandler(i)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(e){this._selectedItemIndex=e}setItems(e){this._items=e}handleKey(e){let t=e.keyCode;e.key&&e.key.length===1?this._letterKeyStream.next(e.key.toLocaleUpperCase()):(t>=65&&t<=90||t>=48&&t<=57)&&this._letterKeyStream.next(String.fromCharCode(t))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(e){this._letterKeyStream.pipe(Jf(t=>this._pressedLetters.push(t)),Wn(e),sn(()=>this._pressedLetters.length>0),Pr(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(t=>{for(let i=1;i<this._items.length+1;i++){let r=(this._selectedItemIndex+i)%this._items.length,s=this._items[r];if(!this._skipPredicateFn?.(s)&&s.getLabel?.().toLocaleUpperCase().trim().indexOf(t)===0){this._selectedItem.next(s);break}}this._pressedLetters=[]})}},ad=class{constructor(e,t){this._items=e,this._activeItemIndex=-1,this._activeItem=bu(null),this._wrap=!1,this._typeaheadSubscription=Sn.EMPTY,this._vertical=!0,this._allowedModifierKeys=[],this._homeAndEnd=!1,this._pageUpAndDown={enabled:!1,delta:10},this._skipPredicateFn=i=>i.disabled,this.tabOut=new vt,this.change=new vt,e instanceof bo?this._itemChangesSubscription=e.changes.subscribe(i=>this._itemsChanged(i.toArray())):yu(e)&&(this._effectRef=rp(()=>this._itemsChanged(e()),{injector:t}))}skipPredicate(e){return this._skipPredicateFn=e,this}withWrap(e=!0){return this._wrap=e,this}withVerticalOrientation(e=!0){return this._vertical=e,this}withHorizontalOrientation(e){return this._horizontal=e,this}withAllowedModifierKeys(e){return this._allowedModifierKeys=e,this}withTypeAhead(e=200){this._typeaheadSubscription.unsubscribe();let t=this._getItemsArray();return this._typeahead=new od(t,{debounceInterval:typeof e=="number"?e:void 0,skipPredicate:i=>this._skipPredicateFn(i)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(i=>{this.setActiveItem(i)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(e=!0){return this._homeAndEnd=e,this}withPageUpDown(e=!0,t=10){return this._pageUpAndDown={enabled:e,delta:t},this}setActiveItem(e){let t=this._activeItem();this.updateActiveItem(e),this._activeItem()!==t&&this.change.next(this._activeItemIndex)}onKeydown(e){let t=e.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(s=>!e[s]||this._allowedModifierKeys.indexOf(s)>-1);switch(t){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let s=this._activeItemIndex-this._pageUpAndDown.delta;this._setActiveItemByIndex(s>0?s:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let s=this._activeItemIndex+this._pageUpAndDown.delta,o=this._getItemsArray().length;this._setActiveItemByIndex(s<o?s:o-1,-1);break}else return;default:(r||ml(e,"shiftKey"))&&this._typeahead?.handleKey(e);return}this._typeahead?.reset(),e.preventDefault()}get activeItemIndex(){return this._activeItemIndex}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(e){let t=this._getItemsArray(),i=typeof e=="number"?e:t.indexOf(e),r=t[i];this._activeItem.set(r??null),this._activeItemIndex=i,this._typeahead?.setCurrentSelectedItemIndex(i)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(e){this._wrap?this._setActiveInWrapMode(e):this._setActiveInDefaultMode(e)}_setActiveInWrapMode(e){let t=this._getItemsArray();for(let i=1;i<=t.length;i++){let r=(this._activeItemIndex+e*i+t.length)%t.length,s=t[r];if(!this._skipPredicateFn(s)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(e){this._setActiveItemByIndex(this._activeItemIndex+e,e)}_setActiveItemByIndex(e,t){let i=this._getItemsArray();if(i[e]){for(;this._skipPredicateFn(i[e]);)if(e+=t,!i[e])return;this.setActiveItem(e)}}_getItemsArray(){return yu(this._items)?this._items():this._items instanceof bo?this._items.toArray():this._items}_itemsChanged(e){this._typeahead?.setItems(e);let t=this._activeItem();if(t){let i=e.indexOf(t);i>-1&&i!==this._activeItemIndex&&(this._activeItemIndex=i,this._typeahead?.setCurrentSelectedItemIndex(i))}}};var bl=class extends ad{constructor(){super(...arguments),this._origin="program"}setFocusOrigin(e){return this._origin=e,this}setActiveItem(e){super.setActiveItem(e),this.activeItem&&this.activeItem.focus(this._origin)}};function cd(n){return n.buttons===0||n.detail===0}function ld(n){let e=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!e&&e.identifier===-1&&(e.radiusX==null||e.radiusX===1)&&(e.radiusY==null||e.radiusY===1)}var Wy=new ii("cdk-input-modality-detector-options"),Xy={ignoreKeys:[18,17,224,91,16]},hg=650,zs=ur({passive:!0,capture:!0}),qy=(()=>{class n{get mostRecentModality(){return this._modality.value}constructor(t,i,r,s){this._platform=t,this._mostRecentTarget=null,this._modality=new du(null),this._lastTouchMs=0,this._onKeydown=o=>{this._options?.ignoreKeys?.some(a=>a===o.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=dr(o))},this._onMousedown=o=>{Date.now()-this._lastTouchMs<hg||(this._modality.next(cd(o)?"keyboard":"mouse"),this._mostRecentTarget=dr(o))},this._onTouchstart=o=>{if(ld(o)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=dr(o)},this._options=tt(tt({},Xy),s),this.modalityDetected=this._modality.pipe(_s(1)),this.modalityChanged=this.modalityDetected.pipe(mu()),t.isBrowser&&i.runOutsideAngular(()=>{r.addEventListener("keydown",this._onKeydown,zs),r.addEventListener("mousedown",this._onMousedown,zs),r.addEventListener("touchstart",this._onTouchstart,zs)})}ngOnDestroy(){this._modality.complete(),this._platform.isBrowser&&(document.removeEventListener("keydown",this._onKeydown,zs),document.removeEventListener("mousedown",this._onMousedown,zs),document.removeEventListener("touchstart",this._onTouchstart,zs))}static{this.\u0275fac=function(i){return new(i||n)(Ye(zt),Ye(Ut),Ye(di),Ye(Wy,8))}}static{this.\u0275prov=yt({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var yl=function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n}(yl||{}),jy=new ii("cdk-focus-monitor-default-options"),vl=ur({passive:!0,capture:!0}),Yy=(()=>{class n{constructor(t,i,r,s,o){this._ngZone=t,this._platform=i,this._inputModalityDetector=r,this._origin=null,this._windowFocused=!1,this._originFromTouchInteraction=!1,this._elementInfo=new Map,this._monitoredElementCount=0,this._rootNodeFocusListenerCount=new Map,this._windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=window.setTimeout(()=>this._windowFocused=!1)},this._stopInputModalityDetector=new vt,this._rootNodeFocusAndBlurListener=a=>{let c=dr(a);for(let l=c;l;l=l.parentElement)a.type==="focus"?this._onFocus(a,l):this._onBlur(a,l)},this._document=s,this._detectionMode=o?.detectionMode||yl.IMMEDIATE}monitor(t,i=!1){let r=Ji(t);if(!this._platform.isBrowser||r.nodeType!==1)return gs();let s=tg(r)||this._getDocument(),o=this._elementInfo.get(r);if(o)return i&&(o.checkChildren=!0),o.subject;let a={checkChildren:i,subject:new vt,rootNode:s};return this._elementInfo.set(r,a),this._registerGlobalListeners(a),a.subject}stopMonitoring(t){let i=Ji(t),r=this._elementInfo.get(i);r&&(r.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(r))}focusVia(t,i,r){let s=Ji(t),o=this._getDocument().activeElement;s===o?this._getClosestElementsInfo(s).forEach(([a,c])=>this._originChanged(a,i,c)):(this._setOrigin(i),typeof s.focus=="function"&&s.focus(r))}ngOnDestroy(){this._elementInfo.forEach((t,i)=>this.stopMonitoring(i))}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?"mouse":"program"}_shouldBeAttributedToTouch(t){return this._detectionMode===yl.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,i){t.classList.toggle("cdk-focused",!!i),t.classList.toggle("cdk-touch-focused",i==="touch"),t.classList.toggle("cdk-keyboard-focused",i==="keyboard"),t.classList.toggle("cdk-mouse-focused",i==="mouse"),t.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(t,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t==="touch"&&i,this._detectionMode===yl.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?hg:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(t,i){let r=this._elementInfo.get(i),s=dr(t);!r||!r.checkChildren&&i!==s||this._originChanged(i,this._getFocusOrigin(s),r)}_onBlur(t,i){let r=this._elementInfo.get(i);!r||r.checkChildren&&t.relatedTarget instanceof Node&&i.contains(t.relatedTarget)||(this._setClasses(i),this._emitOrigin(r,null))}_emitOrigin(t,i){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(i))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let i=t.rootNode,r=this._rootNodeFocusListenerCount.get(i)||0;r||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,vl),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,vl)}),this._rootNodeFocusListenerCount.set(i,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(ei(this._stopInputModalityDetector)).subscribe(s=>{this._setOrigin(s,!0)}))}_removeGlobalListeners(t){let i=t.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let r=this._rootNodeFocusListenerCount.get(i);r>1?this._rootNodeFocusListenerCount.set(i,r-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,vl),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,vl),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,i,r){this._setClasses(t,i),this._emitOrigin(r,i),this._lastFocusOrigin=i}_getClosestElementsInfo(t){let i=[];return this._elementInfo.forEach((r,s)=>{(s===t||r.checkChildren&&s.contains(t))&&i.push([s,r])}),i}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:i,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!i||i===t||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA"||t.disabled)return!1;let s=t.labels;if(s){for(let o=0;o<s.length;o++)if(s[o].contains(i))return!0}return!1}static{this.\u0275fac=function(i){return new(i||n)(Ye(Ut),Ye(zt),Ye(qy),Ye(di,8),Ye(jy,8))}}static{this.\u0275prov=yt({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),ug=(()=>{class n{constructor(t,i){this._elementRef=t,this._focusMonitor=i,this._focusOrigin=null,this.cdkFocusChange=new At}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let t=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(t,t.nodeType===1&&t.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(i=>{this._focusOrigin=i,this.cdkFocusChange.emit(i)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription&&this._monitorSubscription.unsubscribe()}static{this.\u0275fac=function(i){return new(i||n)(ue(Mt),ue(Yy))}}static{this.\u0275dir=Dt({type:n,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"],standalone:!0})}}return n})(),jr=function(n){return n[n.NONE=0]="NONE",n[n.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",n[n.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",n}(jr||{}),cg="cdk-high-contrast-black-on-white",lg="cdk-high-contrast-white-on-black",sd="cdk-high-contrast-active",dg=(()=>{class n{constructor(t,i){this._platform=t,this._document=i,this._breakpointSubscription=li(_l).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return jr.NONE;let t=this._document.createElement("div");t.style.backgroundColor="rgb(1,2,3)",t.style.position="absolute",this._document.body.appendChild(t);let i=this._document.defaultView||window,r=i&&i.getComputedStyle?i.getComputedStyle(t):null,s=(r&&r.backgroundColor||"").replace(/ /g,"");switch(t.remove(),s){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return jr.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return jr.BLACK_ON_WHITE}return jr.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(sd,cg,lg),this._hasCheckedHighContrastMode=!0;let i=this.getHighContrastMode();i===jr.BLACK_ON_WHITE?t.add(sd,cg):i===jr.WHITE_ON_BLACK&&t.add(sd,lg)}}static{this.\u0275fac=function(i){return new(i||n)(Ye(zt),Ye(di))}}static{this.\u0275prov=yt({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var Zy=new ii("cdk-dir-doc",{providedIn:"root",factory:Ky});function Ky(){return li(di)}var Jy=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Qy(n){let e=n?.toLowerCase()||"";return e==="auto"&&typeof navigator<"u"&&navigator?.language?Jy.test(navigator.language)?"rtl":"ltr":e==="rtl"?"rtl":"ltr"}var Hs=(()=>{class n{constructor(t){if(this.value="ltr",this.change=new At,t){let i=t.body?t.body.dir:null,r=t.documentElement?t.documentElement.dir:null;this.value=Qy(i||r||"ltr")}}ngOnDestroy(){this.change.complete()}static{this.\u0275fac=function(i){return new(i||n)(Ye(Zy,8))}}static{this.\u0275prov=yt({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var hd=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=ni({type:n})}static{this.\u0275inj=ti({})}}return n})();function t0(){return!0}var i0=new ii("mat-sanity-checks",{providedIn:"root",factory:t0}),pd=(()=>{class n{constructor(t,i,r){this._sanityChecks=i,this._document=r,this._hasDoneGlobalChecks=!1,t._applyBodyHighContrastModeCssClasses(),this._hasDoneGlobalChecks||(this._hasDoneGlobalChecks=!0)}_checkIsEnabled(t){return ig()?!1:typeof this._sanityChecks=="boolean"?this._sanityChecks:!!this._sanityChecks[t]}static{this.\u0275fac=function(i){return new(i||n)(Ye(dg),Ye(i0,8),Ye(di))}}static{this.\u0275mod=ni({type:n})}static{this.\u0275inj=ti({imports:[hd,hd]})}}return n})();var Bi=function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n}(Bi||{}),ud=class{constructor(e,t,i,r=!1){this._renderer=e,this.element=t,this.config=i,this._animationForciblyDisabledThroughCss=r,this.state=Bi.HIDDEN}fadeOut(){this._renderer.fadeOutRipple(this)}},pg=ur({passive:!0,capture:!0}),dd=class{constructor(){this._events=new Map,this._delegateEventHandler=e=>{let t=dr(e);t&&this._events.get(e.type)?.forEach((i,r)=>{(r===t||r.contains(t))&&i.forEach(s=>s.handleEvent(e))})}}addHandler(e,t,i,r){let s=this._events.get(t);if(s){let o=s.get(i);o?o.add(r):s.set(i,new Set([r]))}else this._events.set(t,new Map([[i,new Set([r])]])),e.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,pg)})}removeHandler(e,t,i){let r=this._events.get(e);if(!r)return;let s=r.get(t);s&&(s.delete(i),s.size===0&&r.delete(t),r.size===0&&(this._events.delete(e),document.removeEventListener(e,this._delegateEventHandler,pg)))}},mg={enterDuration:225,exitDuration:150},n0=800,gg=ur({passive:!0,capture:!0}),_g=["mousedown","touchstart"],vg=["mouseup","mouseleave","touchend","touchcancel"],fd=class n{static{this._eventManager=new dd}constructor(e,t,i,r){this._target=e,this._ngZone=t,this._platform=r,this._isPointerDown=!1,this._activeRipples=new Map,this._pointerUpEventsRegistered=!1,r.isBrowser&&(this._containerElement=Ji(i))}fadeInRipple(e,t,i={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),s=tt(tt({},mg),i.animation);i.centered&&(e=r.left+r.width/2,t=r.top+r.height/2);let o=i.radius||r0(e,t,r),a=e-r.left,c=t-r.top,l=s.enterDuration,h=document.createElement("div");h.classList.add("mat-ripple-element"),h.style.left=`${a-o}px`,h.style.top=`${c-o}px`,h.style.height=`${o*2}px`,h.style.width=`${o*2}px`,i.color!=null&&(h.style.backgroundColor=i.color),h.style.transitionDuration=`${l}ms`,this._containerElement.appendChild(h);let u=window.getComputedStyle(h),d=u.transitionProperty,m=u.transitionDuration,g=d==="none"||m==="0s"||m==="0s, 0s"||r.width===0&&r.height===0,v=new ud(this,h,i,g);h.style.transform="scale3d(1, 1, 1)",v.state=Bi.FADING_IN,i.persistent||(this._mostRecentTransientRipple=v);let p=null;return!g&&(l||s.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let f=()=>{p&&(p.fallbackTimer=null),clearTimeout(w),this._finishRippleTransition(v)},E=()=>this._destroyRipple(v),w=setTimeout(E,l+100);h.addEventListener("transitionend",f),h.addEventListener("transitioncancel",E),p={onTransitionEnd:f,onTransitionCancel:E,fallbackTimer:w}}),this._activeRipples.set(v,p),(g||!l)&&this._finishRippleTransition(v),v}fadeOutRipple(e){if(e.state===Bi.FADING_OUT||e.state===Bi.HIDDEN)return;let t=e.element,i=tt(tt({},mg),e.config.animation);t.style.transitionDuration=`${i.exitDuration}ms`,t.style.opacity="0",e.state=Bi.FADING_OUT,(e._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(e)}fadeOutAll(){this._getActiveRipples().forEach(e=>e.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(e=>{e.config.persistent||e.fadeOut()})}setupTriggerEvents(e){let t=Ji(e);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,_g.forEach(i=>{n._eventManager.addHandler(this._ngZone,i,t,this)}))}handleEvent(e){e.type==="mousedown"?this._onMousedown(e):e.type==="touchstart"?this._onTouchStart(e):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{vg.forEach(t=>{this._triggerElement.addEventListener(t,this,gg)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(e){e.state===Bi.FADING_IN?this._startFadeOutTransition(e):e.state===Bi.FADING_OUT&&this._destroyRipple(e)}_startFadeOutTransition(e){let t=e===this._mostRecentTransientRipple,{persistent:i}=e.config;e.state=Bi.VISIBLE,!i&&(!t||!this._isPointerDown)&&e.fadeOut()}_destroyRipple(e){let t=this._activeRipples.get(e)??null;this._activeRipples.delete(e),this._activeRipples.size||(this._containerRect=null),e===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),e.state=Bi.HIDDEN,t!==null&&(e.element.removeEventListener("transitionend",t.onTransitionEnd),e.element.removeEventListener("transitioncancel",t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),e.element.remove()}_onMousedown(e){let t=cd(e),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+n0;!this._target.rippleDisabled&&!t&&!i&&(this._isPointerDown=!0,this.fadeInRipple(e.clientX,e.clientY,this._target.rippleConfig))}_onTouchStart(e){if(!this._target.rippleDisabled&&!ld(e)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=e.changedTouches;if(t)for(let i=0;i<t.length;i++)this.fadeInRipple(t[i].clientX,t[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(e=>{let t=e.state===Bi.VISIBLE||e.config.terminateOnPointerUp&&e.state===Bi.FADING_IN;!e.config.persistent&&t&&e.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let e=this._triggerElement;e&&(_g.forEach(t=>n._eventManager.removeHandler(t,e,this)),this._pointerUpEventsRegistered&&(vg.forEach(t=>e.removeEventListener(t,this,gg)),this._pointerUpEventsRegistered=!1))}};function r0(n,e,t){let i=Math.max(Math.abs(n-t.left),Math.abs(n-t.right)),r=Math.max(Math.abs(e-t.top),Math.abs(e-t.bottom));return Math.sqrt(i*i+r*r)}var yg=new ii("mat-ripple-global-options"),md=(()=>{class n{get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}constructor(t,i,r,s,o){this._elementRef=t,this._animationMode=o,this.radius=0,this._disabled=!1,this._isInitialized=!1,this._globalOptions=s||{},this._rippleRenderer=new fd(this,i,t,r)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:tt(tt(tt({},this._globalOptions.animation),this._animationMode==="NoopAnimations"?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,i=0,r){return typeof t=="number"?this._rippleRenderer.fadeInRipple(t,i,tt(tt({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,tt(tt({},this.rippleConfig),t))}static{this.\u0275fac=function(i){return new(i||n)(ue(Mt),ue(Ut),ue(zt),ue(yg,8),ue(vs,8))}}static{this.\u0275dir=Dt({type:n,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(i,r){i&2&&_i("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"],standalone:!0})}}return n})();var Ho=class{attach(e){return this._attachedHost=e,e.attach(this)}detach(){let e=this._attachedHost;e!=null&&(this._attachedHost=null,e.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(e){this._attachedHost=e}},gd=class extends Ho{constructor(e,t,i,r,s){super(),this.component=e,this.viewContainerRef=t,this.injector=i,this.componentFactoryResolver=r,this.projectableNodes=s}},Gs=class extends Ho{constructor(e,t,i,r){super(),this.templateRef=e,this.viewContainerRef=t,this.context=i,this.injector=r}get origin(){return this.templateRef.elementRef}attach(e,t=this.context){return this.context=t,super.attach(e)}detach(){return this.context=void 0,super.detach()}},_d=class extends Ho{constructor(e){super(),this.element=e instanceof Mt?e.nativeElement:e}},vd=class{constructor(){this._isDisposed=!1,this.attachDomPortal=null}hasAttached(){return!!this._attachedPortal}attach(e){if(e instanceof gd)return this._attachedPortal=e,this.attachComponentPortal(e);if(e instanceof Gs)return this._attachedPortal=e,this.attachTemplatePortal(e);if(this.attachDomPortal&&e instanceof _d)return this._attachedPortal=e,this.attachDomPortal(e)}detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(e){this._disposeFn=e}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var bg=(()=>{class n extends Gs{constructor(t,i){super(t,i)}static{this.\u0275fac=function(i){return new(i||n)(ue(wn),ue(qn))}}static{this.\u0275dir=Dt({type:n,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],standalone:!0,features:[on]})}}return n})();var xl=(()=>{class n extends vd{constructor(t,i,r){super(),this._componentFactoryResolver=t,this._viewContainerRef=i,this._isInitialized=!1,this.attached=new At,this.attachDomPortal=s=>{this._document;let o=s.element;o.parentNode;let a=this._document.createComment("dom-portal");s.setAttachedHost(this),o.parentNode.insertBefore(a,o),this._getRootNode().appendChild(o),this._attachedPortal=s,super.setDisposeFn(()=>{a.parentNode&&a.parentNode.replaceChild(o,a)})},this._document=r}get portal(){return this._attachedPortal}set portal(t){this.hasAttached()&&!t&&!this._isInitialized||(this.hasAttached()&&super.detach(),t&&super.attach(t),this._attachedPortal=t||null)}get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(t){t.setAttachedHost(this);let i=t.viewContainerRef!=null?t.viewContainerRef:this._viewContainerRef,s=(t.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(t.component),o=i.createComponent(s,i.length,t.injector||i.injector,t.projectableNodes||void 0);return i!==this._viewContainerRef&&this._getRootNode().appendChild(o.hostView.rootNodes[0]),super.setDisposeFn(()=>o.destroy()),this._attachedPortal=t,this._attachedRef=o,this.attached.emit(o),o}attachTemplatePortal(t){t.setAttachedHost(this);let i=this._viewContainerRef.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=t,this._attachedRef=i,this.attached.emit(i),i}_getRootNode(){let t=this._viewContainerRef.element.nativeElement;return t.nodeType===t.ELEMENT_NODE?t:t.parentNode}static{this.\u0275fac=function(i){return new(i||n)(ue(Ma),ue(qn),ue(di))}}static{this.\u0275dir=Dt({type:n,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],standalone:!0,features:[on]})}}return n})();var o0=20,a0=(()=>{class n{constructor(t,i,r){this._ngZone=t,this._platform=i,this._scrolled=new vt,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=r}register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)))}deregister(t){let i=this.scrollContainers.get(t);i&&(i.unsubscribe(),this.scrollContainers.delete(t))}scrolled(t=o0){return this._platform.isBrowser?new Xi(i=>{this._globalSubscription||this._addGlobalListener();let r=t>0?this._scrolled.pipe(fu(t)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):gs()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((t,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(t,i){let r=this.getAncestorScrollContainers(t);return this.scrolled(i).pipe(sn(s=>!s||r.indexOf(s)>-1))}getAncestorScrollContainers(t){let i=[];return this.scrollContainers.forEach((r,s)=>{this._scrollableContainsElement(s,t)&&i.push(s)}),i}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(t,i){let r=Ji(i),s=t.getElementRef().nativeElement;do if(r==s)return!0;while(r=r.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>{let t=this._getWindow();return Fr(t.document,"scroll").subscribe(()=>this._scrolled.next())})}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}static{this.\u0275fac=function(i){return new(i||n)(Ye(Ut),Ye(zt),Ye(di,8))}}static{this.\u0275prov=yt({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),xg=(()=>{class n{constructor(t,i,r,s){this.elementRef=t,this.scrollDispatcher=i,this.ngZone=r,this.dir=s,this._destroyed=new vt,this._elementScrolled=new Xi(o=>this.ngZone.runOutsideAngular(()=>Fr(this.elementRef.nativeElement,"scroll").pipe(ei(this._destroyed)).subscribe(o)))}ngOnInit(){this.scrollDispatcher.register(this)}ngOnDestroy(){this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(t){let i=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";t.left==null&&(t.left=r?t.end:t.start),t.right==null&&(t.right=r?t.start:t.end),t.bottom!=null&&(t.top=i.scrollHeight-i.clientHeight-t.bottom),r&&Vs()!=Ki.NORMAL?(t.left!=null&&(t.right=i.scrollWidth-i.clientWidth-t.left),Vs()==Ki.INVERTED?t.left=t.right:Vs()==Ki.NEGATED&&(t.left=t.right?-t.right:t.right)):t.right!=null&&(t.left=i.scrollWidth-i.clientWidth-t.right),this._applyScrollToOptions(t)}_applyScrollToOptions(t){let i=this.elementRef.nativeElement;eg()?i.scrollTo(t):(t.top!=null&&(i.scrollTop=t.top),t.left!=null&&(i.scrollLeft=t.left))}measureScrollOffset(t){let i="left",r="right",s=this.elementRef.nativeElement;if(t=="top")return s.scrollTop;if(t=="bottom")return s.scrollHeight-s.clientHeight-s.scrollTop;let o=this.dir&&this.dir.value=="rtl";return t=="start"?t=o?r:i:t=="end"&&(t=o?i:r),o&&Vs()==Ki.INVERTED?t==i?s.scrollWidth-s.clientWidth-s.scrollLeft:s.scrollLeft:o&&Vs()==Ki.NEGATED?t==i?s.scrollLeft+s.scrollWidth-s.clientWidth:-s.scrollLeft:t==i?s.scrollLeft:s.scrollWidth-s.clientWidth-s.scrollLeft}static{this.\u0275fac=function(i){return new(i||n)(ue(Mt),ue(a0),ue(Ut),ue(Hs,8))}}static{this.\u0275dir=Dt({type:n,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]],standalone:!0})}}return n})(),c0=20,yd=(()=>{class n{constructor(t,i,r){this._platform=t,this._change=new vt,this._changeListener=s=>{this._change.next(s)},this._document=r,i.runOutsideAngular(()=>{if(t.isBrowser){let s=this._getWindow();s.addEventListener("resize",this._changeListener),s.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){let t=this._getWindow();t.removeEventListener("resize",this._changeListener),t.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){let t=this.getViewportScrollPosition(),{width:i,height:r}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+r,right:t.left+i,height:r,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let t=this._document,i=this._getWindow(),r=t.documentElement,s=r.getBoundingClientRect(),o=-s.top||t.body.scrollTop||i.scrollY||r.scrollTop||0,a=-s.left||t.body.scrollLeft||i.scrollX||r.scrollLeft||0;return{top:o,left:a}}change(t=c0){return t>0?this._change.pipe(fu(t)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let t=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:t.innerWidth,height:t.innerHeight}:{width:0,height:0}}static{this.\u0275fac=function(i){return new(i||n)(Ye(zt),Ye(Ut),Ye(di,8))}}static{this.\u0275prov=yt({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var bd=class{constructor(e){this._box=e,this._destroyed=new vt,this._resizeSubject=new vt,this._elementObservables=new Map,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(t=>this._resizeSubject.next(t)))}observe(e){return this._elementObservables.has(e)||this._elementObservables.set(e,new Xi(t=>{let i=this._resizeSubject.subscribe(t);return this._resizeObserver?.observe(e,{box:this._box}),()=>{this._resizeObserver?.unobserve(e),i.unsubscribe(),this._elementObservables.delete(e)}}).pipe(sn(t=>t.some(i=>i.target===e)),gu({bufferSize:1,refCount:!0}),ei(this._destroyed))),this._elementObservables.get(e)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Mg=(()=>{class n{constructor(){this._observers=new Map,this._ngZone=li(Ut),typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,t]of this._observers)t.destroy();this._observers.clear(),typeof ResizeObserver<"u"}observe(t,i){let r=i?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new bd(r)),this._observers.get(r).observe(t)}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=yt({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var wd=["*"];function d0(n,e){n&1&&bs(0)}var f0=["tabListContainer"],p0=["tabList"],m0=["tabListInner"],g0=["nextPaginator"],_0=["previousPaginator"],v0=n=>({animationDuration:n}),y0=(n,e)=>({value:n,params:e});function b0(n,e){}var x0=["tabBodyWrapper"],M0=["tabHeader"];function S0(n,e){}function w0(n,e){if(n&1&&ft(0,S0,0,0,"ng-template",12),n&2){let t=ht().$implicit;Ue("cdkPortalOutlet",t.templateLabel)}}function E0(n,e){if(n&1&&Ge(0),n&2){let t=ht().$implicit;qt(t.textLabel)}}function T0(n,e){if(n&1){let t=Zn();we(0,"div",7,2),vi("click",function(){let r=Pt(t),s=r.$implicit,o=r.$index,a=ht(),c=ui(1);return Ft(a._handleClick(s,c,o))})("cdkFocusChange",function(r){let s=Pt(t).$index,o=ht();return Ft(o._tabFocusChanged(r,s))}),hi(2,"span",8)(3,"div",9),we(4,"span",10)(5,"span",11),ft(6,w0,1,1,null,12)(7,E0,1,1),Te()()()}if(n&2){let t=e.$implicit,i=e.$index,r=ui(1),s=ht();Sa(t.labelClass),_i("mdc-tab--active",s.selectedIndex===i),Ue("id",s._getTabLabelId(i))("disabled",t.disabled)("fitInkBarToContent",s.fitInkBarToContent),jn("tabIndex",s._getTabIndex(i))("aria-posinset",i+1)("aria-setsize",s._tabs.length)("aria-controls",s._getTabContentId(i))("aria-selected",s.selectedIndex===i)("aria-label",t.ariaLabel||null)("aria-labelledby",!t.ariaLabel&&t.ariaLabelledby?t.ariaLabelledby:null),ye(3),Ue("matRippleTrigger",r)("matRippleDisabled",t.disabled||s.disableRipple),ye(3),wa(t.templateLabel?6:7)}}function C0(n,e){n&1&&bs(0)}function A0(n,e){if(n&1){let t=Zn();we(0,"mat-tab-body",13),vi("_onCentered",function(){Pt(t);let r=ht();return Ft(r._removeTabBodyWrapperHeight())})("_onCentering",function(r){Pt(t);let s=ht();return Ft(s._setTabBodyWrapperHeight(r))}),Te()}if(n&2){let t=e.$implicit,i=e.$index,r=ht();Sa(t.bodyClass),_i("mat-mdc-tab-body-active",r.selectedIndex===i),Ue("id",r._getTabContentId(i))("content",t.content)("position",t.position)("origin",t.origin)("animationDuration",r.animationDuration)("preserveContent",r.preserveContent),jn("tabindex",r.contentTabIndex!=null&&r.selectedIndex===i?r.contentTabIndex:null)("aria-labelledby",r._getTabLabelId(i))("aria-hidden",r.selectedIndex!==i)}}var I0=new ii("MatTabContent"),R0=(()=>{class n{constructor(t){this.template=t}static{this.\u0275fac=function(i){return new(i||n)(ue(wn))}}static{this.\u0275dir=Dt({type:n,selectors:[["","matTabContent",""]],standalone:!0,features:[an([{provide:I0,useExisting:n}])]})}}return n})(),D0=new ii("MatTabLabel"),Eg=new ii("MAT_TAB"),P0=(()=>{class n extends bg{constructor(t,i,r){super(t,i),this._closestTab=r}static{this.\u0275fac=function(i){return new(i||n)(ue(wn),ue(qn),ue(Eg,8))}}static{this.\u0275dir=Dt({type:n,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],standalone:!0,features:[an([{provide:D0,useExisting:n}]),on]})}}return n})(),Tg=new ii("MAT_TAB_GROUP"),Ed=(()=>{class n{get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t)}get content(){return this._contentPortal}constructor(t,i){this._viewContainerRef=t,this._closestTabGroup=i,this.disabled=!1,this._explicitContent=void 0,this.textLabel="",this._contentPortal=null,this._stateChanges=new vt,this.position=null,this.origin=null,this.isActive=!1}ngOnChanges(t){(t.hasOwnProperty("textLabel")||t.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new Gs(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(t){t&&t._closestTab===this&&(this._templateLabel=t)}static{this.\u0275fac=function(i){return new(i||n)(ue(qn),ue(Tg,8))}}static{this.\u0275cmp=Ct({type:n,selectors:[["mat-tab"]],contentQueries:function(i,r,s){if(i&1&&(xo(s,P0,5),xo(s,R0,7,wn)),i&2){let o;Wt(o=Xt())&&(r.templateLabel=o.first),Wt(o=Xt())&&(r._explicitContent=o.first)}},viewQuery:function(i,r){if(i&1&&yi(wn,7),i&2){let s;Wt(s=Xt())&&(r._implicitContent=s.first)}},hostAttrs:["hidden",""],inputs:{disabled:[2,"disabled","disabled",Jt],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass"},exportAs:["matTab"],standalone:!0,features:[an([{provide:Eg,useExisting:n}]),Oi,vo,It],ngContentSelectors:wd,decls:1,vars:0,template:function(i,r){i&1&&(ys(),ft(0,d0,1,0,"ng-template"))},encapsulation:2})}}return n})(),xd="mdc-tab-indicator--active",Sg="mdc-tab-indicator--no-transition",Md=class{constructor(e){this._items=e}hide(){this._items.forEach(e=>e.deactivateInkBar())}alignToElement(e){let t=this._items.find(r=>r.elementRef.nativeElement===e),i=this._currentItem;if(t!==i&&(i?.deactivateInkBar(),t)){let r=i?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(r),this._currentItem=t}}},F0=(()=>{class n{constructor(){this._elementRef=li(Mt),this._fitToContent=!1}get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(t){let i=this._elementRef.nativeElement;if(!t||!i.getBoundingClientRect||!this._inkBarContentElement){i.classList.add(xd);return}let r=i.getBoundingClientRect(),s=t.width/r.width,o=t.left-r.left;i.classList.add(Sg),this._inkBarContentElement.style.setProperty("transform",`translateX(${o}px) scaleX(${s})`),i.getBoundingClientRect(),i.classList.remove(Sg),i.classList.add(xd),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(xd)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,i=this._inkBarElement=t.createElement("span"),r=this._inkBarContentElement=t.createElement("span");i.className="mdc-tab-indicator",r.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",i.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let t=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;t.appendChild(this._inkBarElement)}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275dir=Dt({type:n,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",Jt]},features:[Oi]})}}return n})();var Cg=(()=>{class n extends F0{constructor(t){super(),this.elementRef=t,this.disabled=!1}focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static{this.\u0275fac=function(i){return new(i||n)(ue(Mt))}}static{this.\u0275dir=Dt({type:n,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(i,r){i&2&&(jn("aria-disabled",!!r.disabled),_i("mat-mdc-tab-disabled",r.disabled))},inputs:{disabled:[2,"disabled","disabled",Jt]},standalone:!0,features:[Oi,on]})}}return n})(),wg=ur({passive:!0}),L0=650,O0=100,N0=(()=>{class n{get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let i=isNaN(t)?0:t;this._selectedIndex!=i&&(this._selectedIndexChanged=!0,this._selectedIndex=i,this._keyManager&&this._keyManager.updateActiveItem(i))}constructor(t,i,r,s,o,a,c){this._elementRef=t,this._changeDetectorRef=i,this._viewportRuler=r,this._dir=s,this._ngZone=o,this._platform=a,this._animationMode=c,this._scrollDistance=0,this._selectedIndexChanged=!1,this._destroyed=new vt,this._showPaginationControls=!1,this._disableScrollAfter=!0,this._disableScrollBefore=!0,this._stopScrolling=new vt,this.disablePagination=!1,this._selectedIndex=0,this.selectFocusedIndex=new At,this.indexFocused=new At,this._sharedResizeObserver=li(Mg),this._injector=li(yo),o.runOutsideAngular(()=>{Fr(t.nativeElement,"mouseleave").pipe(ei(this._destroyed)).subscribe(()=>{this._stopInterval()})})}ngAfterViewInit(){Fr(this._previousPaginator.nativeElement,"touchstart",wg).pipe(ei(this._destroyed)).subscribe(()=>{this._handlePaginatorPress("before")}),Fr(this._nextPaginator.nativeElement,"touchstart",wg).pipe(ei(this._destroyed)).subscribe(()=>{this._handlePaginatorPress("after")})}ngAfterContentInit(){let t=this._dir?this._dir.change:gs("ltr"),i=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Wn(32),ei(this._destroyed)),r=this._viewportRuler.change(150).pipe(ei(this._destroyed)),s=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new bl(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(this._selectedIndex),xu(s,{injector:this._injector}),xa(t,r,i,this._items.changes,this._itemsResized()).pipe(ei(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),s()})}),this._keyManager.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(o=>{this.indexFocused.emit(o),this._setTabFocus(o)})}_itemsResized(){return typeof ResizeObserver!="function"?Yf:this._items.changes.pipe(Lr(this._items),_u(t=>new Xi(i=>this._ngZone.runOutsideAngular(()=>{let r=new ResizeObserver(s=>i.next(s));return t.forEach(s=>r.observe(s.elementRef.nativeElement)),()=>{r.disconnect()}}))),_s(1),sn(t=>t.some(i=>i.contentRect.width>0&&i.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!ml(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let i=this._items.get(this.focusIndex);i&&!i.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t))}break;default:this._keyManager.onKeydown(t)}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:!0}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let i=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?i.scrollLeft=0:i.scrollLeft=i.scrollWidth-i.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,i=this._getLayoutDirection()==="ltr"?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(i)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){let i=this._tabListContainer.nativeElement.offsetWidth,r=(t=="before"?-1:1)*i/3;return this._scrollTo(this._scrollDistance+r)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;let i=this._items?this._items.toArray()[t]:null;if(!i)return;let r=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:s,offsetWidth:o}=i.elementRef.nativeElement,a,c;this._getLayoutDirection()=="ltr"?(a=s,c=a+o):(c=this._tabListInner.nativeElement.offsetWidth-s,a=c-o);let l=this.scrollDistance,h=this.scrollDistance+r;a<l?this.scrollDistance-=l-a:c>h&&(this.scrollDistance+=Math.min(c-h,a-l))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let t=this._tabListInner.nativeElement.scrollWidth,i=this._elementRef.nativeElement.offsetWidth,r=t-i>=5;r||(this.scrollDistance=0),r!==this._showPaginationControls&&(this._showPaginationControls=r,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let t=this._tabListInner.nativeElement.scrollWidth,i=this._tabListContainer.nativeElement.offsetWidth;return t-i||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,i=t?t.elementRef.nativeElement:null;i?this._inkBar.alignToElement(i):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,i){i&&i.button!=null&&i.button!==0||(this._stopInterval(),Kf(L0,O0).pipe(ei(xa(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:r,distance:s}=this._scrollHeader(t);(s===0||s>=r)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let i=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(i,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:i,distance:this._scrollDistance}}static{this.\u0275fac=function(i){return new(i||n)(ue(Mt),ue(Kn),ue(yd),ue(Hs,8),ue(Ut),ue(zt),ue(vs,8))}}static{this.\u0275dir=Dt({type:n,inputs:{disablePagination:[2,"disablePagination","disablePagination",Jt],selectedIndex:[2,"selectedIndex","selectedIndex",Ea]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"},features:[Oi]})}}return n})(),k0=(()=>{class n extends N0{constructor(t,i,r,s,o,a,c){super(t,i,r,s,o,a,c),this.disableRipple=!1}ngAfterContentInit(){this._inkBar=new Md(this._items),super.ngAfterContentInit()}_itemSelected(t){t.preventDefault()}static{this.\u0275fac=function(i){return new(i||n)(ue(Mt),ue(Kn),ue(yd),ue(Hs,8),ue(Ut),ue(zt),ue(vs,8))}}static{this.\u0275cmp=Ct({type:n,selectors:[["mat-tab-header"]],contentQueries:function(i,r,s){if(i&1&&xo(s,Cg,4),i&2){let o;Wt(o=Xt())&&(r._items=o)}},viewQuery:function(i,r){if(i&1&&(yi(f0,7),yi(p0,7),yi(m0,7),yi(g0,5),yi(_0,5)),i&2){let s;Wt(s=Xt())&&(r._tabListContainer=s.first),Wt(s=Xt())&&(r._tabList=s.first),Wt(s=Xt())&&(r._tabListInner=s.first),Wt(s=Xt())&&(r._nextPaginator=s.first),Wt(s=Xt())&&(r._previousPaginator=s.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(i,r){i&2&&_i("mat-mdc-tab-header-pagination-controls-enabled",r._showPaginationControls)("mat-mdc-tab-header-rtl",r._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",Jt]},standalone:!0,features:[Oi,on,It],ngContentSelectors:wd,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(i,r){if(i&1){let s=Zn();ys(),we(0,"div",5,0),vi("click",function(){return Pt(s),Ft(r._handlePaginatorClick("before"))})("mousedown",function(a){return Pt(s),Ft(r._handlePaginatorPress("before",a))})("touchend",function(){return Pt(s),Ft(r._stopInterval())}),hi(2,"div",6),Te(),we(3,"div",7,1),vi("keydown",function(a){return Pt(s),Ft(r._handleKeydown(a))}),we(5,"div",8,2),vi("cdkObserveContent",function(){return Pt(s),Ft(r._onContentChanges())}),we(7,"div",9,3),bs(9),Te()()(),we(10,"div",10,4),vi("mousedown",function(a){return Pt(s),Ft(r._handlePaginatorPress("after",a))})("click",function(){return Pt(s),Ft(r._handlePaginatorClick("after"))})("touchend",function(){return Pt(s),Ft(r._stopInterval())}),hi(12,"div",6),Te()}i&2&&(_i("mat-mdc-tab-header-pagination-disabled",r._disableScrollBefore),Ue("matRippleDisabled",r._disableScrollBefore||r.disableRipple),ye(3),_i("_mat-animation-noopable",r._animationMode==="NoopAnimations"),ye(2),jn("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby||null),ye(5),_i("mat-mdc-tab-header-pagination-disabled",r._disableScrollAfter),Ue("matRippleDisabled",r._disableScrollAfter||r.disableRipple))},dependencies:[md,ng],styles:[".mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mdc-tab-indicator .mdc-tab-indicator__content{transition-duration:var(--mat-tab-animation-duration, 250ms)}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;outline:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px;border-color:var(--mat-tab-header-pagination-icon-color, var(--mat-app-on-surface))}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}.mat-mdc-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1;border-bottom-style:solid;border-bottom-width:var(--mat-tab-header-divider-height);border-bottom-color:var(--mat-tab-header-divider-color, var(--mat-app-surface-variant))}.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container{border-bottom:none;border-top-style:solid;border-top-width:var(--mat-tab-header-divider-height);border-top-color:var(--mat-tab-header-divider-color, var(--mat-app-surface-variant))}.mat-mdc-tab-labels{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:flex-end}.cdk-drop-list .mat-mdc-tab-labels,.mat-mdc-tab-labels.cdk-drop-list{min-height:var(--mdc-secondary-navigation-tab-container-height)}.mat-mdc-tab::before{margin:5px}.cdk-high-contrast-active .mat-mdc-tab[aria-disabled=true]{color:GrayText}"],encapsulation:2})}}return n})(),U0=new ii("MAT_TABS_CONFIG"),B0={translateTab:Ta("translateTab",[Ca("center, void, left-origin-center, right-origin-center",cn({transform:"none",visibility:"visible"})),Ca("left",cn({transform:"translate3d(-100%, 0, 0)",minHeight:"1px",visibility:"hidden"})),Ca("right",cn({transform:"translate3d(100%, 0, 0)",minHeight:"1px",visibility:"hidden"})),kr("* => left, * => right, left => center, right => center",Nr("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)")),kr("void => left-origin-center",[cn({transform:"translate3d(-100%, 0, 0)",visibility:"hidden"}),Nr("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)")]),kr("void => right-origin-center",[cn({transform:"translate3d(100%, 0, 0)",visibility:"hidden"}),Nr("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)")])])},V0=(()=>{class n extends xl{constructor(t,i,r,s){super(t,i,s),this._host=r,this._centeringSub=Sn.EMPTY,this._leavingSub=Sn.EMPTY}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(Lr(this._host._isCenterPosition(this._host._position))).subscribe(t=>{this._host._content&&t&&!this.hasAttached()&&this.attach(this._host._content)}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this.detach()})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static{this.\u0275fac=function(i){return new(i||n)(ue(Ma),ue(qn),ue(vu(()=>Ag)),ue(di))}}static{this.\u0275dir=Dt({type:n,selectors:[["","matTabBodyHost",""]],standalone:!0,features:[on]})}}return n})(),Ag=(()=>{class n{set position(t){this._positionIndex=t,this._computePositionAnimationState()}constructor(t,i,r){this._elementRef=t,this._dir=i,this._dirChangeSubscription=Sn.EMPTY,this._translateTabComplete=new vt,this._onCentering=new At,this._beforeCentering=new At,this._afterLeavingCenter=new At,this._onCentered=new At(!0),this.animationDuration="500ms",this.preserveContent=!1,i&&(this._dirChangeSubscription=i.change.subscribe(s=>{this._computePositionAnimationState(s),r.markForCheck()})),this._translateTabComplete.subscribe(s=>{this._isCenterPosition(s.toState)&&this._isCenterPosition(this._position)&&this._onCentered.emit(),this._isCenterPosition(s.fromState)&&!this._isCenterPosition(this._position)&&this._afterLeavingCenter.emit()})}ngOnInit(){this._position=="center"&&this.origin!=null&&(this._position=this._computePositionFromOrigin(this.origin))}ngOnDestroy(){this._dirChangeSubscription.unsubscribe(),this._translateTabComplete.complete()}_onTranslateTabStarted(t){let i=this._isCenterPosition(t.toState);this._beforeCentering.emit(i),i&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(t){return t=="center"||t=="left-origin-center"||t=="right-origin-center"}_computePositionAnimationState(t=this._getLayoutDirection()){this._positionIndex<0?this._position=t=="ltr"?"left":"right":this._positionIndex>0?this._position=t=="ltr"?"right":"left":this._position="center"}_computePositionFromOrigin(t){let i=this._getLayoutDirection();return i=="ltr"&&t<=0||i=="rtl"&&t>0?"left-origin-center":"right-origin-center"}static{this.\u0275fac=function(i){return new(i||n)(ue(Mt),ue(Hs,8),ue(Kn))}}static{this.\u0275cmp=Ct({type:n,selectors:[["mat-tab-body"]],viewQuery:function(i,r){if(i&1&&yi(xl,5),i&2){let s;Wt(s=Xt())&&(r._portalHost=s.first)}},hostAttrs:[1,"mat-mdc-tab-body"],inputs:{_content:[0,"content","_content"],origin:"origin",animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_afterLeavingCenter:"_afterLeavingCenter",_onCentered:"_onCentered"},standalone:!0,features:[It],decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(i,r){if(i&1){let s=Zn();we(0,"div",1,0),vi("@translateTab.start",function(a){return Pt(s),Ft(r._onTranslateTabStarted(a))})("@translateTab.done",function(a){return Pt(s),Ft(r._translateTabComplete.next(a))}),ft(2,b0,0,0,"ng-template",2),Te()}i&2&&Ue("@translateTab",ip(3,y0,r._position,tp(1,v0,r.animationDuration)))},dependencies:[V0,xg],styles:['.mat-mdc-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;outline:0;flex-basis:100%}.mat-mdc-tab-body.mat-mdc-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active{overflow-y:hidden}.mat-mdc-tab-body-content{height:100%;overflow:auto}.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content{overflow:hidden}.mat-mdc-tab-body-content[style*="visibility: hidden"]{display:none}'],encapsulation:2,data:{animation:[B0.translateTab]}})}}return n})(),z0=0,H0=!0,Ig=(()=>{class n{get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(t){this._fitInkBarToContent=t,this._changeDetectorRef.markForCheck()}get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=isNaN(t)?null:t}get animationDuration(){return this._animationDuration}set animationDuration(t){let i=t+"";this._animationDuration=/^\d+$/.test(i)?t+"ms":i}get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=isNaN(t)?null:t}get backgroundColor(){return this._backgroundColor}set backgroundColor(t){if(!H0)throw new Error("mat-tab-group background color must be set through the Sass theming API");let i=this._elementRef.nativeElement.classList;i.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),t&&i.add("mat-tabs-with-background",`mat-background-${t}`),this._backgroundColor=t}constructor(t,i,r,s){this._elementRef=t,this._changeDetectorRef=i,this._animationMode=s,this._tabs=new bo,this._indexToSelect=0,this._lastFocusedTabIndex=null,this._tabBodyWrapperHeight=0,this._tabsSubscription=Sn.EMPTY,this._tabLabelSubscription=Sn.EMPTY,this._fitInkBarToContent=!1,this.stretchTabs=!0,this.dynamicHeight=!1,this._selectedIndex=null,this.headerPosition="above",this.disablePagination=!1,this.disableRipple=!1,this.preserveContent=!1,this.selectedIndexChange=new At,this.focusChange=new At,this.animationDone=new At,this.selectedTabChange=new At(!0),this._isServer=!li(zt).isBrowser,this._groupId=z0++,this.animationDuration=r&&r.animationDuration?r.animationDuration:"500ms",this.disablePagination=r&&r.disablePagination!=null?r.disablePagination:!1,this.dynamicHeight=r&&r.dynamicHeight!=null?r.dynamicHeight:!1,r?.contentTabIndex!=null&&(this.contentTabIndex=r.contentTabIndex),this.preserveContent=!!r?.preserveContent,this.fitInkBarToContent=r&&r.fitInkBarToContent!=null?r.fitInkBarToContent:!1,this.stretchTabs=r&&r.stretchTabs!=null?r.stretchTabs:!0}ngAfterContentChecked(){let t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){let i=this._selectedIndex==null;if(!i){this.selectedTabChange.emit(this._createChangeEvent(t));let r=this._tabBodyWrapper.nativeElement;r.style.minHeight=r.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((r,s)=>r.isActive=s===t),i||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((i,r)=>{i.position=r-t,this._selectedIndex!=null&&i.position==0&&!i.origin&&(i.origin=t-this._selectedIndex)}),this._selectedIndex!==t&&(this._selectedIndex=t,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let t=this._clampTabIndex(this._indexToSelect);if(t===this._selectedIndex){let i=this._tabs.toArray(),r;for(let s=0;s<i.length;s++)if(i[s].isActive){this._indexToSelect=this._selectedIndex=s,this._lastFocusedTabIndex=null,r=i[s];break}!r&&i[t]&&Promise.resolve().then(()=>{i[t].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(t))})}this._changeDetectorRef.markForCheck()})}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(Lr(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(i=>i._closestTabGroup===this||!i._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(t){let i=this._tabHeader;i&&(i.focusIndex=t)}_focusChanged(t){this._lastFocusedTabIndex=t,this.focusChange.emit(this._createChangeEvent(t))}_createChangeEvent(t){let i=new Sd;return i.index=t,this._tabs&&this._tabs.length&&(i.tab=this._tabs.toArray()[t]),i}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=xa(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t){return`mat-tab-label-${this._groupId}-${t}`}_getTabContentId(t){return`mat-tab-content-${this._groupId}-${t}`}_setTabBodyWrapperHeight(t){if(!this.dynamicHeight||!this._tabBodyWrapperHeight)return;let i=this._tabBodyWrapper.nativeElement;i.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(i.style.height=t+"px")}_removeTabBodyWrapperHeight(){let t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height="",this.animationDone.emit()}_handleClick(t,i,r){i.focusIndex=r,t.disabled||(this.selectedIndex=r)}_getTabIndex(t){let i=this._lastFocusedTabIndex??this.selectedIndex;return t===i?0:-1}_tabFocusChanged(t,i){t&&t!=="mouse"&&t!=="touch"&&(this._tabHeader.focusIndex=i)}static{this.\u0275fac=function(i){return new(i||n)(ue(Mt),ue(Kn),ue(U0,8),ue(vs,8))}}static{this.\u0275cmp=Ct({type:n,selectors:[["mat-tab-group"]],contentQueries:function(i,r,s){if(i&1&&xo(s,Ed,5),i&2){let o;Wt(o=Xt())&&(r._allTabs=o)}},viewQuery:function(i,r){if(i&1&&(yi(x0,5),yi(M0,5)),i&2){let s;Wt(s=Xt())&&(r._tabBodyWrapper=s.first),Wt(s=Xt())&&(r._tabHeader=s.first)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:10,hostBindings:function(i,r){i&2&&(Sa("mat-"+(r.color||"primary")),Mu("--mat-tab-animation-duration",r.animationDuration),_i("mat-mdc-tab-group-dynamic-height",r.dynamicHeight)("mat-mdc-tab-group-inverted-header",r.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",r.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",Jt],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",Jt],dynamicHeight:[2,"dynamicHeight","dynamicHeight",Jt],selectedIndex:[2,"selectedIndex","selectedIndex",Ea],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",Ea],disablePagination:[2,"disablePagination","disablePagination",Jt],disableRipple:[2,"disableRipple","disableRipple",Jt],preserveContent:[2,"preserveContent","preserveContent",Jt],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],standalone:!0,features:[an([{provide:Tg,useExisting:n}]),Oi,It],ngContentSelectors:wd,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-mdc-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","mat-mdc-tab-body-active","class","content","position","origin","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-mdc-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","id","content","position","origin","animationDuration","preserveContent"]],template:function(i,r){if(i&1){let s=Zn();ys(),we(0,"mat-tab-header",3,0),vi("indexFocused",function(a){return Pt(s),Ft(r._focusChanged(a))})("selectFocusedIndex",function(a){return Pt(s),Ft(r.selectedIndex=a)}),wu(2,T0,8,17,"div",4,Su),Te(),ft(4,C0,1,0),we(5,"div",5,1),wu(7,A0,1,13,"mat-tab-body",6,Su),Te()}i&2&&(Ue("selectedIndex",r.selectedIndex||0)("disableRipple",r.disableRipple)("disablePagination",r.disablePagination)("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby),ye(2),Eu(r._tabs),ye(2),wa(r._isServer?4:-1),ye(),_i("_mat-animation-noopable",r._animationMode==="NoopAnimations"),ye(2),Eu(r._tabs))},dependencies:[k0,Cg,ug,md,xl,Ag],styles:['.mdc-tab{min-width:90px;padding:0 24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;z-index:1}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab--active .mdc-tab__text-label{transition-delay:100ms}._mat-animation-noopable .mdc-tab__text-label{transition:none}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transition:var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}._mat-animation-noopable .mdc-tab-indicator__content,.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none;background:none;height:var(--mdc-secondary-navigation-tab-container-height);font-family:var(--mat-tab-header-label-text-font, var(--mat-app-title-small-font));font-size:var(--mat-tab-header-label-text-size, var(--mat-app-title-small-size));letter-spacing:var(--mat-tab-header-label-text-tracking, var(--mat-app-title-small-tracking));line-height:var(--mat-tab-header-label-text-line-height, var(--mat-app-title-small-line-height));font-weight:var(--mat-tab-header-label-text-weight, var(--mat-app-title-small-weight))}.mat-mdc-tab.mdc-tab{flex-grow:0}.mat-mdc-tab .mdc-tab-indicator__content--underline{border-color:var(--mdc-tab-indicator-active-indicator-color, var(--mat-app-primary));border-top-width:var(--mdc-tab-indicator-active-indicator-height);border-radius:var(--mdc-tab-indicator-active-indicator-shape)}.mat-mdc-tab:hover .mdc-tab__text-label{color:var(--mat-tab-header-inactive-hover-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab:focus .mdc-tab__text-label{color:var(--mat-tab-header-inactive-focus-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label{color:var(--mat-tab-header-active-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,.mat-mdc-tab.mdc-tab--active .mat-ripple-element{background-color:var(--mat-tab-header-active-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label{color:var(--mat-tab-header-active-hover-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-hover-indicator-color, var(--mat-app-primary))}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label{color:var(--mat-tab-header-active-focus-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-focus-indicator-color, var(--mat-app-primary))}.mat-mdc-tab.mat-mdc-tab-disabled{opacity:.4;pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content{pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element{background-color:var(--mat-tab-header-disabled-ripple-color)}.mat-mdc-tab .mdc-tab__ripple::before{content:"";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-header-inactive-label-text-color, var(--mat-app-on-surface));display:inline-flex;align-items:center}.mat-mdc-tab .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs>.mat-mdc-tab-header .mat-mdc-tab{flex-grow:1}.mat-mdc-tab-group{display:flex;flex-direction:column;max-width:100%}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-tab-header-with-background-background-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-focus-indicator::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-focus-indicator::before{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mdc-tab__ripple::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header{flex-direction:column-reverse}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline{align-self:flex-start}.mat-mdc-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-mdc-tab-body-wrapper._mat-animation-noopable{transition:none !important;animation:none !important}'],encapsulation:2})}}return n})(),Sd=class{};var Rg=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=ni({type:n})}static{this.\u0275inj=ti({imports:[pd,pd]})}}return n})();var W0={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Wk=Gn(tt({},W0),{"[class.ng-submitted]":"isSubmitted"});var X0=new ii("CallSetDisabledState",{providedIn:"root",factory:()=>Dg}),Dg="always";var q0=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=ni({type:n})}static{this.\u0275inj=ti({})}}return n})();var Pg=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:X0,useValue:t.callSetDisabledState??Dg}]}}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=ni({type:n})}static{this.\u0275inj=ti({imports:[q0]})}}return n})();var Ws=class n{profile={name:"Jannatul Fardouse",title:"Software Developer | Full Stack | C++ Specialist",location:"Chemnitz, Germany",email:"jannatul.fardouse.cse@gmail.com",linkedin:"https://www.linkedin.com/in/jannatul-fardouse-a9896819a/",github:"https://github.com/JannatulFardouse",summary:"Passionate developer with strong C++, Angular, and .NET skills. Currently a Working Student at Digitronic GmbH. Seeking a full-time developer role in Germany or Austria.",skills:["Angular 17","C#","C++","ASP.NET Core","MySQL","HTML5","CSS3","Bootstrap","JavaScript ES6"],experiences:[{company:"Digitronic Computer System GmbH",position:"Software Developer (Workstudent)",period:"Jan 2024 \u2013 Present",responsibilities:["Developed Communication System Software (Web + Mobile)","Tech: Angular 17, ASP.NET Core, SQL Server","Also contributed to German Police Management Software"]},{company:"TU Chemnitz \u2013 Philosophy Dept",position:"Student Assistant (Frontend Developer)",period:"Aug 2022 \u2013 Apr 2024",responsibilities:["Built and translated TU Chemnitz\u2019s philosophy website frontend","Used HTML, CSS, JS, MySQL, and Google Translate API","WCAG 2.0.1 accessibility-compliant"]},{company:"TU Chemnitz \u2013 C++ Lab",position:"Teaching Assistant",period:"Mar 2022 \u2013 Jul 2022",responsibilities:["Supervised and supported students in solving C++ lab problems","Provided technical assistance during practical sessions"]},{company:"TU Chemnitz \u2013 Mood Matrix Project",position:"Student Assistant (Data & Docker)",period:"Aug 2021 \u2013 Dec 2021",responsibilities:["Handled preprocessing of physiological and behavioral datasets","Worked with Docker containers and data pipelines"]},{company:"TU Chemnitz \u2013 Research Intern",position:"Log Data Analyst",period:"Nov 2019 \u2013 Mar 2020",responsibilities:["Performed visualizations and clustering on smart home log data","Used Python, Seaborn, Pandas, Matplotlib"]},{company:"London Grace International School, Dhaka",position:"Teacher",period:"May 2018 \u2013 Sep 2019",responsibilities:["Taught Math, Science, and English in an international school environment","Built strong classroom communication and leadership skills"]}],projects:[{title:"TU Chemnitz Website Development",url:"https://www.tu-chemnitz.de/phil/institute.php.en"},{title:"ATM in C++",url:"https://github.com/JannatulFardouse/ATM/blob/main/atm.cpp"},{title:"Work Together Project",url:"https://github.com/JannatulFardouse/AMDWorkTogetherProject"},{title:"Panda Commerce",url:"https://github.com/JannatulFardouse/panda-commerce"},{title:"Hot Gadgets",url:"https://github.com/JannatulFardouse/hot-gadgets"}],education:[{degree:"M.Sc. in Automotive Software Engineering",university:"Technische Universit\xE4t Chemnitz, Germany",status:"Ongoing"},{degree:"B.Sc. in Computer Science & Engineering",university:"Eastern University, Bangladesh",grade:"CGPA: 1.47 out of 4 (German Grade Scale)"}],certifications:[{title:"Complete C++ for Beginners",source:"Udemy"},{title:"Full Stack Web Development",source:"Programming Hero"},{title:"JavaScript Basics",source:"w3schools"}],languages:["English (Fluent)","German (B1)"],softSkills:["Teamwork","Problem Solving","Leadership","Communication"]};getProfile(){return this.profile}static \u0275fac=function(t){return new(t||n)};static \u0275prov=yt({token:n,factory:n.\u0275fac,providedIn:"root"})};function j0(n,e){n&1&&qi(0)}function Y0(n,e){n&1&&qi(0)}function $0(n,e){n&1&&qi(0)}function Z0(n,e){n&1&&qi(0)}function K0(n,e){n&1&&qi(0)}function J0(n,e){if(n&1&&(Yn(0),we(1,"mat-tab-group",7)(2,"mat-tab",8),ft(3,j0,1,0,"ng-container",9),Te(),we(4,"mat-tab",10),ft(5,Y0,1,0,"ng-container",9),Te(),we(6,"mat-tab",11),ft(7,$0,1,0,"ng-container",9),Te(),we(8,"mat-tab",12),ft(9,Z0,1,0,"ng-container",9),Te(),we(10,"mat-tab",13),ft(11,K0,1,0,"ng-container",9),Te()(),$n()),n&2){ht();let t=ui(4),i=ui(6),r=ui(8),s=ui(10),o=ui(12);ye(3),Ue("ngTemplateOutlet",t),ye(2),Ue("ngTemplateOutlet",i),ye(2),Ue("ngTemplateOutlet",r),ye(2),Ue("ngTemplateOutlet",s),ye(2),Ue("ngTemplateOutlet",o)}}function Q0(n,e){n&1&&qi(0)}function eb(n,e){if(n&1&&(Yn(0),ft(1,Q0,1,0,"ng-container",9),$n()),n&2){ht(2);let t=ui(4);ye(),Ue("ngTemplateOutlet",t)}}function tb(n,e){n&1&&qi(0)}function ib(n,e){if(n&1&&(Yn(0),ft(1,tb,1,0,"ng-container",9),$n()),n&2){ht(2);let t=ui(6);ye(),Ue("ngTemplateOutlet",t)}}function nb(n,e){n&1&&qi(0)}function rb(n,e){if(n&1&&(Yn(0),ft(1,nb,1,0,"ng-container",9),$n()),n&2){ht(2);let t=ui(8);ye(),Ue("ngTemplateOutlet",t)}}function sb(n,e){n&1&&qi(0)}function ob(n,e){if(n&1&&(Yn(0),ft(1,sb,1,0,"ng-container",9),$n()),n&2){ht(2);let t=ui(10);ye(),Ue("ngTemplateOutlet",t)}}function ab(n,e){n&1&&qi(0)}function cb(n,e){if(n&1&&(Yn(0),ft(1,ab,1,0,"ng-container",9),$n()),n&2){ht(2);let t=ui(12);ye(),Ue("ngTemplateOutlet",t)}}function lb(n,e){if(n&1){let t=Zn();we(0,"div",14)(1,"div",15)(2,"h3"),Ge(3),Te()(),we(4,"div"),Yn(5,16),ft(6,eb,2,1,"ng-container",17)(7,ib,2,1,"ng-container",17)(8,rb,2,1,"ng-container",17)(9,ob,2,1,"ng-container",17)(10,cb,2,1,"ng-container",17),$n(),Te(),we(11,"div",18)(12,"button",19),vi("click",function(){Pt(t);let r=ht();return Ft(r.prevTab())}),Ge(13,"Previous"),Te(),we(14,"button",19),vi("click",function(){Pt(t);let r=ht();return Ft(r.nextTab())}),Ge(15,"Next"),Te()()()}if(n&2){let t=ht();ye(3),qt(t.tabLabels[t.selectedTabIndex]),ye(),Ue("@fadeInOut",void 0),ye(),Ue("ngSwitch",t.tabLabels[t.selectedTabIndex]),ye(),Ue("ngSwitchCase","Skills"),ye(),Ue("ngSwitchCase","Experience"),ye(),Ue("ngSwitchCase","Education"),ye(),Ue("ngSwitchCase","Certifications"),ye(),Ue("ngSwitchCase","Languages & Soft Skills"),ye(2),Ue("disabled",t.selectedTabIndex===0),ye(2),Ue("disabled",t.selectedTabIndex===t.tabLabels.length-1)}}function hb(n,e){if(n&1&&(we(0,"span",22),Ge(1),Te()),n&2){let t=e.$implicit;ye(),qt(t)}}function ub(n,e){if(n&1&&(we(0,"div",20),ft(1,hb,2,1,"span",21),Te()),n&2){let t=ht();ye(),Ue("ngForOf",t.profile.skills)}}function db(n,e){if(n&1&&(we(0,"li"),Ge(1),Te()),n&2){let t=e.$implicit;ye(),qt(t)}}function fb(n,e){if(n&1&&(we(0,"div",24)(1,"h3"),Ge(2),Te(),we(3,"h4"),Ge(4),Te(),we(5,"p")(6,"em"),Ge(7),Te()(),we(8,"ul"),ft(9,db,2,1,"li",25),Te()()),n&2){let t=e.$implicit;ye(2),qt(t.position),ye(2),qt(t.company),ye(3),qt(t.period),ye(2),Ue("ngForOf",t.responsibilities)}}function pb(n,e){if(n&1&&ft(0,fb,10,4,"div",23),n&2){let t=ht();Ue("ngForOf",t.profile.experiences)}}function mb(n,e){if(n&1&&(we(0,"small"),Ge(1),Te()),n&2){let t=ht().$implicit;ye(),qt(t.status)}}function gb(n,e){if(n&1&&(we(0,"small"),Ge(1),Te()),n&2){let t=ht().$implicit;ye(),qt(t.grade)}}function _b(n,e){if(n&1&&(we(0,"div",27)(1,"h4"),Ge(2),Te(),we(3,"p"),Ge(4),Te(),ft(5,mb,2,1,"small",28)(6,gb,2,1,"small",28),Te()),n&2){let t=e.$implicit;ye(2),qt(t.degree),ye(2),qt(t.university),ye(),Ue("ngIf",t.status),ye(),Ue("ngIf",t.grade)}}function vb(n,e){if(n&1&&ft(0,_b,7,4,"div",26),n&2){let t=ht();Ue("ngForOf",t.profile.education)}}function yb(n,e){if(n&1&&(we(0,"li"),Ge(1),we(2,"strong"),Ge(3),Te()()),n&2){let t=e.$implicit;ye(),Mo(" ",t.title," \u2013 "),ye(2),qt(t.source)}}function bb(n,e){if(n&1&&(we(0,"ul",29),ft(1,yb,4,2,"li",25),Te()),n&2){let t=ht();ye(),Ue("ngForOf",t.profile.certifications)}}function xb(n,e){if(n&1&&(we(0,"p")(1,"strong"),Ge(2,"Languages:"),Te(),Ge(3),Te(),we(4,"p")(5,"strong"),Ge(6,"Soft Skills:"),Te(),Ge(7),Te()),n&2){let t=ht();ye(3),Mo(" ",t.profile.languages.join(", "),""),ye(4),Mo(" ",t.profile.softSkills.join(", "),"")}}var Ml=class n{constructor(e,t){this.profileService=e;this.breakpointObserver=t}profile;isMobile=!1;selectedTab="Skills";selectedTabIndex=0;tabLabels=["Skills","Experience","Education","Certifications","Languages & Soft Skills"];ngOnInit(){this.profile=this.profileService.getProfile(),this.breakpointObserver.observe([ag.Handset]).subscribe(e=>{this.isMobile=e.matches})}nextTab(){this.selectedTabIndex<this.tabLabels.length-1&&this.selectedTabIndex++}prevTab(){this.selectedTabIndex>0&&this.selectedTabIndex--}static \u0275fac=function(t){return new(t||n)(ue(Ws),ue(_l))};static \u0275cmp=Ct({type:n,selectors:[["app-tabs-section"]],standalone:!0,features:[It],decls:13,vars:2,consts:[["mobileView",""],["skillsTab",""],["experienceTab",""],["educationTab",""],["certificationsTab",""],["languagesTab",""],[4,"ngIf","ngIfElse"],["animationDuration","500ms","dynamicHeight","","mat-align-tabs","start",1,"custom-tabs"],["label","Skills"],[4,"ngTemplateOutlet"],["label","Experience"],["label","Education"],["label","Certifications"],["label","Languages & Soft Skills"],[1,"mobile-paginator"],[1,"pagination-header"],[3,"ngSwitch"],[4,"ngSwitchCase"],[1,"pagination-controls"],[3,"click","disabled"],[1,"skill-badges"],["class","badge",4,"ngFor","ngForOf"],[1,"badge"],["class","experience-card",4,"ngFor","ngForOf"],[1,"experience-card"],[4,"ngFor","ngForOf"],["class","edu-block",4,"ngFor","ngForOf"],[1,"edu-block"],[4,"ngIf"],[1,"cert-list"]],template:function(t,i){if(t&1&&ft(0,J0,12,5,"ng-container",6)(1,lb,16,10,"ng-template",null,0,Or)(3,ub,2,1,"ng-template",null,1,Or)(5,pb,1,1,"ng-template",null,2,Or)(7,vb,1,1,"ng-template",null,3,Or)(9,bb,2,1,"ng-template",null,4,Or)(11,xb,8,2,"ng-template",null,5,Or),t&2){let r=ui(2);Ue("ngIf",!i.isMobile)("ngIfElse",r)}},dependencies:[xs,op,ap,hp,cp,lp,Rg,Ed,Ig,og,Pg],styles:["[_nghost-%COMP%]     .mat-mdc-tab .mdc-tab__text-label{color:#b80099!important;font-weight:600!important;opacity:1!important}[_nghost-%COMP%]     .mat-mdc-tab.mdc-tab--active .mdc-tab__text-label{color:#b80099!important}[_nghost-%COMP%]     .mat-mdc-tab:hover .mdc-tab__text-label{transform:scale(1.05);cursor:pointer}.custom-tabs[_ngcontent-%COMP%]{margin-top:2rem}.custom-tabs[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{background:#f3e5f5;color:#b80099;padding:.5rem 1rem;border-radius:20px;margin:.3rem;display:inline-block}.custom-tabs[_ngcontent-%COMP%]   .experience-card[_ngcontent-%COMP%], .custom-tabs[_ngcontent-%COMP%]   .edu-block[_ngcontent-%COMP%]{padding:1rem;border-left:3px solid #b80099;background:#fafafa;margin-bottom:1rem;border-radius:6px}.custom-tabs[_ngcontent-%COMP%]   .cert-list[_ngcontent-%COMP%]{list-style-type:none;padding:0}.custom-tabs[_ngcontent-%COMP%]   .cert-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0}.mobile-paginator[_ngcontent-%COMP%]{text-align:center;margin:2rem 0}.mobile-paginator[_ngcontent-%COMP%]   .pagination-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.2rem;color:#b80099;margin-bottom:1rem}.mobile-paginator[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:1rem;margin-top:1rem}.mobile-paginator[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#b80099;color:#fff;border:none;border-radius:6px;padding:.5rem 1.2rem;font-weight:600;cursor:pointer}.mobile-paginator[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background-color:#b80099;cursor:not-allowed}"],data:{animation:[Ta("fadeInOut",[kr(":enter",[cn({opacity:0}),Nr("400ms ease-in",cn({opacity:1}))]),kr(":leave",[Nr("400ms ease-out",cn({opacity:0}))])])]}})};var Sl=class n{constructor(e){this.profileService=e}profile;ngOnInit(){this.profile=this.profileService.getProfile()}static \u0275fac=function(t){return new(t||n)(ue(Ws))};static \u0275cmp=Ct({type:n,selectors:[["app-home"]],standalone:!0,features:[It],decls:18,vars:3,consts:[[1,"home"],[1,"container"],[1,"intro"],[1,"name"],[1,"title"],[1,"summary"],[1,"buttons"],["href","/assets/JannatulFardouse_621982.pdf","download","",1,"btn"],["href","#contact",1,"btn-outline"]],template:function(t,i){t&1&&(hi(0,"app-particles"),we(1,"section",0)(2,"div",1)(3,"div",2)(4,"h1",3),Ge(5,"Hi, I'm "),we(6,"span"),Ge(7),Te()(),we(8,"h2",4),Ge(9),Te(),we(10,"p",5),Ge(11),Te(),we(12,"div",6)(13,"a",7),Ge(14,"Download CV"),Te(),we(15,"a",8),Ge(16,"Contact Me"),Te()()(),hi(17,"app-tabs-section"),Te()()),t&2&&(ye(7),qt(i.profile.name),ye(2),qt(i.profile.title),ye(2),qt(i.profile.summary))},dependencies:[xs,Bs,Ml],styles:['@keyframes _ngcontent-%COMP%_textureMove{0%{background-position:0 0}to{background-position:100% 100%}}.home-content[_ngcontent-%COMP%]{position:relative;z-index:10;padding:2rem}.home[_ngcontent-%COMP%]{position:relative;padding:5rem 1rem;min-height:100vh;display:flex;align-items:center;justify-content:center;background-image:url(/assets/your-texture.png);background-repeat:repeat;background-size:100px 100px;animation:_ngcontent-%COMP%_textureMove 20s linear infinite;overflow:hidden}.home[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;z-index:1}.home[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{position:relative;z-index:2;max-width:1200px;width:100%;margin:0 auto;padding:2rem;display:flex;flex-direction:column;align-items:center}.home[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]{background:#0006;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);padding:2rem;border-radius:1rem;text-align:center;margin-bottom:4rem;color:#fff}.home[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:2.5rem;font-weight:700;color:#fff}.home[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#b80099}.home[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:600;color:#fff;margin-top:.5rem}.home[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]{font-size:1.1rem;color:#f0f0f0;margin-top:1rem;line-height:1.6;max-width:700px;margin-inline:auto}.home[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{margin-top:2rem;display:flex;gap:1rem;justify-content:center}.home[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .home[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn-outline[_ngcontent-%COMP%]{padding:.75rem 1.5rem;font-size:1rem;border-radius:50px;transition:all .3s ease;text-decoration:none}.home[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{background:#b80099;color:#fff}.home[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover{background:#85006f}.home[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn-outline[_ngcontent-%COMP%]{border:2px solid #b80099;color:#fff}.home[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .btn-outline[_ngcontent-%COMP%]:hover{background:#b80099;color:#fff}.home[_ngcontent-%COMP%]   app-three-scene[_ngcontent-%COMP%]{width:100%;height:400px;border-radius:1rem;overflow:hidden;box-shadow:0 10px 25px #bc629e1a}']})};var wl=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Ct({type:n,selectors:[["app-projects"]],standalone:!0,features:[It],decls:2,vars:0,template:function(t,i){t&1&&(we(0,"p"),Ge(1,"projects works!"),Te())}})};var El=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Ct({type:n,selectors:[["app-contact"]],standalone:!0,features:[It],decls:2,vars:0,template:function(t,i){t&1&&(we(0,"p"),Ge(1,"contact works!"),Te())}})};var ph="175";var Kg=0,tf=1,Jg=2;var nf=1,Qg=2,_n=3,kn=0,mi=1,vn=2,Vn=0,es=1,rf=2,sf=3,of=4,e_=5,xr=100,t_=101,i_=102,n_=103,r_=104,s_=200,o_=201,a_=202,c_=203,Xl=204,ql=205,l_=206,h_=207,u_=208,d_=209,f_=210,p_=211,m_=212,g_=213,__=214,mh=0,gh=1,_h=2,ts=3,vh=4,yh=5,bh=6,xh=7,af=0,v_=1,y_=2,zn=0,b_=1,x_=2,M_=3,S_=4,w_=5,E_=6,T_=7;var Yd=300,as=301,cs=302,Mh=303,Sh=304,la=306,jl=1e3,br=1001,Yl=1002,zi=1003,C_=1004;var ha=1005;var nn=1006,wh=1007;var Cr=1008;var yn=1009,cf=1010,lf=1011,co=1012,Eh=1013,Ar=1014,bn=1015,lo=1016,Th=1017,Ch=1018,ho=1020,hf=35902,uf=1021,df=1022,Hi=1023,ff=1024,pf=1025,ro=1026,uo=1027,mf=1028,Ah=1029,gf=1030,Ih=1031;var Rh=1033,ua=33776,da=33777,fa=33778,pa=33779,Dh=35840,Ph=35841,Fh=35842,Lh=35843,Oh=36196,Nh=37492,kh=37496,Uh=37808,Bh=37809,Vh=37810,zh=37811,Hh=37812,Gh=37813,Wh=37814,Xh=37815,qh=37816,jh=37817,Yh=37818,$h=37819,Zh=37820,Kh=37821,ma=36492,Jh=36494,Qh=36495,_f=36283,eu=36284,tu=36285,iu=36286;var Yo=2300,$l=2301,Wl=2302,$d=2400,Zd=2401,Kd=2402;var A_=3200,I_=3201;var R_=0,D_=1,Hn="",Ii="srgb",is="srgb-linear",$o="linear",ot="srgb";var Jr=7680;var Jd=519,P_=512,F_=513,L_=514,vf=515,O_=516,N_=517,k_=518,U_=519,Qd=35044;var yf="300 es",pn=2e3,Zo=2001;var Un=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},ri=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Td=Math.PI/180,Zl=180/Math.PI;function ga(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ri[n&255]+ri[n>>8&255]+ri[n>>16&255]+ri[n>>24&255]+"-"+ri[e&255]+ri[e>>8&255]+"-"+ri[e>>16&15|64]+ri[e>>24&255]+"-"+ri[t&63|128]+ri[t>>8&255]+"-"+ri[t>>16&255]+ri[t>>24&255]+ri[i&255]+ri[i>>8&255]+ri[i>>16&255]+ri[i>>24&255]).toLowerCase()}function We(n,e,t){return Math.max(e,Math.min(t,n))}function Mb(n,e){return(n%e+e)%e}function Cd(n,e,t){return(1-t)*n+t*e}function Go(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function xi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ct=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Oe=class n{constructor(e,t,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],m=i[5],g=i[8],v=r[0],p=r[3],f=r[6],E=r[1],w=r[4],x=r[7],D=r[2],R=r[5],T=r[8];return s[0]=o*v+a*E+c*D,s[3]=o*p+a*w+c*R,s[6]=o*f+a*x+c*T,s[1]=l*v+h*E+u*D,s[4]=l*p+h*w+u*R,s[7]=l*f+h*x+u*T,s[2]=d*v+m*E+g*D,s[5]=d*p+m*w+g*R,s[8]=d*f+m*x+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*s*h+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*s,m=l*s-o*c,g=t*u+i*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(r*l-h*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(h*t-r*c)*v,e[5]=(r*s-a*t)*v,e[6]=m*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ad.makeScale(e,t)),this}rotate(e){return this.premultiply(Ad.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ad.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ad=new Oe;function bf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ko(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function B_(){let n=Ko("canvas");return n.style.display="block",n}var Lg={};function _a(n){n in Lg||(Lg[n]=!0,console.warn(n))}function V_(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function z_(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function H_(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Og=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ng=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sb(){let n={enabled:!0,workingColorSpace:is,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ot&&(r.r=Nn(r.r),r.g=Nn(r.g),r.b=Nn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ot&&(r.r=no(r.r),r.g=no(r.g),r.b=no(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Hn?$o:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[is]:{primaries:e,whitePoint:i,transfer:$o,toXYZ:Og,fromXYZ:Ng,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ii},outputColorSpaceConfig:{drawingBufferColorSpace:Ii}},[Ii]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:Og,fromXYZ:Ng,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ii}}}),n}var Je=Sb();function Nn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function no(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Xs,Kl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Xs===void 0&&(Xs=Ko("canvas")),Xs.width=e.width,Xs.height=e.height;let r=Xs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Xs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ko("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Nn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Nn(t[i]/255)*255):t[i]=Nn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},wb=0,so=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wb++}),this.uuid=ga(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Id(r[o].image)):s.push(Id(r[o]))}else s=Id(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Id(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Kl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Eb=0,Ir=(()=>{class n extends Un{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=br,s=br,o=nn,a=Cr,c=Hi,l=yn,h=n.DEFAULT_ANISOTROPY,u=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eb++}),this.uuid=ga(),this.name="",this.source=new so(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jl:t.x=t.x-Math.floor(t.x);break;case br:t.x=t.x<0?0:1;break;case Yl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jl:t.y=t.y-Math.floor(t.y);break;case br:t.y=t.y<0?0:1;break;case Yl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=Yd,n.DEFAULT_ANISOTROPY=1,n})(),Et=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],m=c[5],g=c[9],v=c[2],p=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(l+1)/2,x=(m+1)/2,D=(f+1)/2,R=(h+d)/4,T=(u+v)/4,L=(g+p)/4;return w>x&&w>D?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=R/i,s=T/i):x>D?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=R/r,s=L/r):D<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),i=T/s,r=L/s),this.set(i,r,s,t),this}let E=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(u-v)/E,this.z=(d-h)/E,this.w=Math.acos((l+m+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Jl=class extends Un{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);let r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new Ir(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new so(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},gn=class extends Jl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Jo=class extends Ir{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zi,this.minFilter=zi,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ql=class extends Ir{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zi,this.minFilter=zi,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bn=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],h=i[r+2],u=i[r+3],d=s[o+0],m=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(u!==v||c!==d||l!==m||h!==g){let p=1-a,f=c*d+l*m+h*g+u*v,E=f>=0?1:-1,w=1-f*f;if(w>Number.EPSILON){let D=Math.sqrt(w),R=Math.atan2(D,f*E);p=Math.sin(p*R)/D,a=Math.sin(a*R)/D}let x=a*E;if(c=c*p+d*x,l=l*p+m*x,h=h*p+g*x,u=u*p+v*x,p===1-a){let D=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=D,l*=D,h*=D,u*=D}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],h=i[r+3],u=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+h*u+c*m-l*d,e[t+1]=c*g+h*d+l*u-a*m,e[t+2]=l*g+h*m+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(r/2),u=a(s/2),d=c(i/2),m=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"YZX":this._x=d*h*u+l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u-d*m*g;break;case"XZY":this._x=d*h*u-l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(i>a&&i>u){let m=2*Math.sqrt(1+i-a-u);this._w=(h-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>u){let m=2*Math.sqrt(1+a-i-u);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+u-i-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-i*l,this._z=s*h+o*l+i*c-r*a,this._w=o*h-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kg.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),h=2*(a*t-s*r),u=2*(s*i-o*t);return this.x=t+c*l+o*u-a*h,this.y=i+c*h+a*l-s*u,this.z=r+c*u+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Rd.copy(this).projectOnVector(e),this.sub(Rd)}reflect(e){return this.sub(Rd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Rd=new U,kg=new Bn,Mr=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Qi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Qi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Qi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qi):Qi.fromBufferAttribute(s,o),Qi.applyMatrix4(e.matrixWorld),this.expandByPoint(Qi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Tl.copy(i.boundingBox)),Tl.applyMatrix4(e.matrixWorld),this.union(Tl)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qi),Qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wo),Cl.subVectors(this.max,Wo),qs.subVectors(e.a,Wo),js.subVectors(e.b,Wo),Ys.subVectors(e.c,Wo),fr.subVectors(js,qs),pr.subVectors(Ys,js),Yr.subVectors(qs,Ys);let t=[0,-fr.z,fr.y,0,-pr.z,pr.y,0,-Yr.z,Yr.y,fr.z,0,-fr.x,pr.z,0,-pr.x,Yr.z,0,-Yr.x,-fr.y,fr.x,0,-pr.y,pr.x,0,-Yr.y,Yr.x,0];return!Dd(t,qs,js,Ys,Cl)||(t=[1,0,0,0,1,0,0,0,1],!Dd(t,qs,js,Ys,Cl))?!1:(Al.crossVectors(fr,pr),t=[Al.x,Al.y,Al.z],Dd(t,qs,js,Ys,Cl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Dn=[new U,new U,new U,new U,new U,new U,new U,new U],Qi=new U,Tl=new Mr,qs=new U,js=new U,Ys=new U,fr=new U,pr=new U,Yr=new U,Wo=new U,Cl=new U,Al=new U,$r=new U;function Dd(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){$r.fromArray(n,s);let a=r.x*Math.abs($r.x)+r.y*Math.abs($r.y)+r.z*Math.abs($r.z),c=e.dot($r),l=t.dot($r),h=i.dot($r);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Tb=new Mr,Xo=new U,Pd=new U,oo=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Tb.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xo.subVectors(e,this.center);let t=Xo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Xo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xo.copy(e.center).add(Pd)),this.expandByPoint(Xo.copy(e.center).sub(Pd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Pn=new U,Fd=new U,Il=new U,mr=new U,Ld=new U,Rl=new U,Od=new U,eh=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pn.copy(this.origin).addScaledVector(this.direction,t),Pn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Fd.copy(e).add(t).multiplyScalar(.5),Il.copy(t).sub(e).normalize(),mr.copy(this.origin).sub(Fd);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Il),a=mr.dot(this.direction),c=-mr.dot(Il),l=mr.lengthSq(),h=Math.abs(1-o*o),u,d,m,g;if(h>0)if(u=o*c-a,d=o*a-c,g=s*h,u>=0)if(d>=-g)if(d<=g){let v=1/h;u*=v,d*=v,m=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),m=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),m=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Fd).addScaledVector(Il,d),m}intersectSphere(e,t){Pn.subVectors(e.center,this.origin);let i=Pn.dot(this.direction),r=Pn.dot(Pn)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Pn)!==null}intersectTriangle(e,t,i,r,s){Ld.subVectors(t,e),Rl.subVectors(i,e),Od.crossVectors(Ld,Rl);let o=this.direction.dot(Od),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mr.subVectors(this.origin,e);let c=a*this.direction.dot(Rl.crossVectors(mr,Rl));if(c<0)return null;let l=a*this.direction.dot(Ld.cross(mr));if(l<0||c+l>o)return null;let h=-a*mr.dot(Od);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},kt=class n{constructor(e,t,i,r,s,o,a,c,l,h,u,d,m,g,v,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,h,u,d,m,g,v,p)}set(e,t,i,r,s,o,a,c,l,h,u,d,m,g,v,p){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=g,f[11]=v,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/$s.setFromMatrixColumn(e,0).length(),s=1/$s.setFromMatrixColumn(e,1).length(),o=1/$s.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=o*h,m=o*u,g=a*h,v=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=m+g*l,t[5]=d-v*l,t[9]=-a*c,t[2]=v-d*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,m=c*u,g=l*h,v=l*u;t[0]=d+v*a,t[4]=g*a-m,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=v+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,m=c*u,g=l*h,v=l*u;t[0]=d-v*a,t[4]=-o*u,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=v-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,m=o*u,g=a*h,v=a*u;t[0]=c*h,t[4]=g*l-m,t[8]=d*l+v,t[1]=c*u,t[5]=v*l+d,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,m=o*l,g=a*c,v=a*l;t[0]=c*h,t[4]=v-d*u,t[8]=g*u+m,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=m*u+g,t[10]=d-v*u}else if(e.order==="XZY"){let d=o*c,m=o*l,g=a*c,v=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+v,t[5]=o*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=a*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cb,e,Ab)}lookAt(e,t,i){let r=this.elements;return Ci.subVectors(e,t),Ci.lengthSq()===0&&(Ci.z=1),Ci.normalize(),gr.crossVectors(i,Ci),gr.lengthSq()===0&&(Math.abs(i.z)===1?Ci.x+=1e-4:Ci.z+=1e-4,Ci.normalize(),gr.crossVectors(i,Ci)),gr.normalize(),Dl.crossVectors(Ci,gr),r[0]=gr.x,r[4]=Dl.x,r[8]=Ci.x,r[1]=gr.y,r[5]=Dl.y,r[9]=Ci.y,r[2]=gr.z,r[6]=Dl.z,r[10]=Ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],m=i[13],g=i[2],v=i[6],p=i[10],f=i[14],E=i[3],w=i[7],x=i[11],D=i[15],R=r[0],T=r[4],L=r[8],M=r[12],b=r[1],A=r[5],G=r[9],B=r[13],$=r[2],Z=r[6],q=r[10],J=r[14],z=r[3],re=r[7],fe=r[11],Me=r[15];return s[0]=o*R+a*b+c*$+l*z,s[4]=o*T+a*A+c*Z+l*re,s[8]=o*L+a*G+c*q+l*fe,s[12]=o*M+a*B+c*J+l*Me,s[1]=h*R+u*b+d*$+m*z,s[5]=h*T+u*A+d*Z+m*re,s[9]=h*L+u*G+d*q+m*fe,s[13]=h*M+u*B+d*J+m*Me,s[2]=g*R+v*b+p*$+f*z,s[6]=g*T+v*A+p*Z+f*re,s[10]=g*L+v*G+p*q+f*fe,s[14]=g*M+v*B+p*J+f*Me,s[3]=E*R+w*b+x*$+D*z,s[7]=E*T+w*A+x*Z+D*re,s[11]=E*L+w*G+x*q+D*fe,s[15]=E*M+w*B+x*J+D*Me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],m=e[14],g=e[3],v=e[7],p=e[11],f=e[15];return g*(+s*c*u-r*l*u-s*a*d+i*l*d+r*a*m-i*c*m)+v*(+t*c*m-t*l*d+s*o*d-r*o*m+r*l*h-s*c*h)+p*(+t*l*u-t*a*m-s*o*u+i*o*m+s*a*h-i*l*h)+f*(-r*a*h-t*c*u+t*a*d+r*o*u-i*o*d+i*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],m=e[11],g=e[12],v=e[13],p=e[14],f=e[15],E=u*p*l-v*d*l+v*c*m-a*p*m-u*c*f+a*d*f,w=g*d*l-h*p*l-g*c*m+o*p*m+h*c*f-o*d*f,x=h*v*l-g*u*l+g*a*m-o*v*m-h*a*f+o*u*f,D=g*u*c-h*v*c-g*a*d+o*v*d+h*a*p-o*u*p,R=t*E+i*w+r*x+s*D;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/R;return e[0]=E*T,e[1]=(v*d*s-u*p*s-v*r*m+i*p*m+u*r*f-i*d*f)*T,e[2]=(a*p*s-v*c*s+v*r*l-i*p*l-a*r*f+i*c*f)*T,e[3]=(u*c*s-a*d*s-u*r*l+i*d*l+a*r*m-i*c*m)*T,e[4]=w*T,e[5]=(h*p*s-g*d*s+g*r*m-t*p*m-h*r*f+t*d*f)*T,e[6]=(g*c*s-o*p*s-g*r*l+t*p*l+o*r*f-t*c*f)*T,e[7]=(o*d*s-h*c*s+h*r*l-t*d*l-o*r*m+t*c*m)*T,e[8]=x*T,e[9]=(g*u*s-h*v*s-g*i*m+t*v*m+h*i*f-t*u*f)*T,e[10]=(o*v*s-g*a*s+g*i*l-t*v*l-o*i*f+t*a*f)*T,e[11]=(h*a*s-o*u*s-h*i*l+t*u*l+o*i*m-t*a*m)*T,e[12]=D*T,e[13]=(h*v*r-g*u*r+g*i*d-t*v*d-h*i*p+t*u*p)*T,e[14]=(g*a*r-o*v*r-g*i*c+t*v*c+o*i*p-t*a*p)*T,e[15]=(o*u*r-h*a*r+h*i*c-t*u*c-o*i*d+t*a*d)*T,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+i,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,u=a+a,d=s*l,m=s*h,g=s*u,v=o*h,p=o*u,f=a*u,E=c*l,w=c*h,x=c*u,D=i.x,R=i.y,T=i.z;return r[0]=(1-(v+f))*D,r[1]=(m+x)*D,r[2]=(g-w)*D,r[3]=0,r[4]=(m-x)*R,r[5]=(1-(d+f))*R,r[6]=(p+E)*R,r[7]=0,r[8]=(g+w)*T,r[9]=(p-E)*T,r[10]=(1-(d+v))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=$s.set(r[0],r[1],r[2]).length(),o=$s.set(r[4],r[5],r[6]).length(),a=$s.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],en.copy(this);let l=1/s,h=1/o,u=1/a;return en.elements[0]*=l,en.elements[1]*=l,en.elements[2]*=l,en.elements[4]*=h,en.elements[5]*=h,en.elements[6]*=h,en.elements[8]*=u,en.elements[9]*=u,en.elements[10]*=u,t.setFromRotationMatrix(en),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=pn){let c=this.elements,l=2*s/(t-e),h=2*s/(i-r),u=(t+e)/(t-e),d=(i+r)/(i-r),m,g;if(a===pn)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Zo)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=pn){let c=this.elements,l=1/(t-e),h=1/(i-r),u=1/(o-s),d=(t+e)*l,m=(i+r)*h,g,v;if(a===pn)g=(o+s)*u,v=-2*u;else if(a===Zo)g=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},$s=new U,en=new kt,Cb=new U(0,0,0),Ab=new U(1,1,1),gr=new U,Dl=new U,Ci=new U,Ug=new kt,Bg=new Bn,ns=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],h=s[5],u=s[9],d=s[2],m=s[6],g=s[10];switch(i){case"XYZ":this._y=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(We(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Ug.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ug,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Bg.setFromEuler(this),this.setFromQuaternion(Bg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),Qo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ib=0,Vg=new U,Zs=new Bn,Fn=new kt,Pl=new U,qo=new U,Rb=new U,Db=new Bn,zg=new U(1,0,0),Hg=new U(0,1,0),Gg=new U(0,0,1),Wg={type:"added"},Pb={type:"removed"},Ks={type:"childadded",child:null},Nd={type:"childremoved",child:null},ls=(()=>{class n extends Un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ib++}),this.uuid=ga(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new U,i=new ns,r=new Bn,s=new U(1,1,1);function o(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new kt},normalMatrix:{value:new Oe}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Zs.setFromAxisAngle(t,i),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(t,i){return Zs.setFromAxisAngle(t,i),this.quaternion.premultiply(Zs),this}rotateX(t){return this.rotateOnAxis(zg,t)}rotateY(t){return this.rotateOnAxis(Hg,t)}rotateZ(t){return this.rotateOnAxis(Gg,t)}translateOnAxis(t,i){return Vg.copy(t).applyQuaternion(this.quaternion),this.position.add(Vg.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(zg,t)}translateY(t){return this.translateOnAxis(Hg,t)}translateZ(t){return this.translateOnAxis(Gg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Pl.copy(t):Pl.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(qo,Pl,this.up):Fn.lookAt(Pl,qo,this.up),this.quaternion.setFromRotationMatrix(Fn),s&&(Fn.extractRotation(s.matrixWorld),Zs.setFromRotationMatrix(Fn),this.quaternion.premultiply(Zs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wg),Ks.child=t,this.dispatchEvent(Ks),Ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Pb),Nd.child=t,this.dispatchEvent(Nd),Nd.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wg),Ks.child=t,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,t,Rb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,Db,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){let d=l[h];o(t.shapes,d)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,h=this.material.length;l<h;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),h=a(t.textures),u=a(t.images),d=a(t.shapes),m=a(t.skeletons),g=a(t.animations),v=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),h.length>0&&(r.textures=h),u.length>0&&(r.images=u),d.length>0&&(r.shapes=d),m.length>0&&(r.skeletons=m),g.length>0&&(r.animations=g),v.length>0&&(r.nodes=v)}return r.object=s,r;function a(c){let l=[];for(let h in c){let u=c[h];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new U(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),tn=new U,Ln=new U,kd=new U,On=new U,Js=new U,Qs=new U,Xg=new U,Ud=new U,Bd=new U,Vd=new U,zd=new Et,Hd=new Et,Gd=new Et,yr=class n{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),tn.subVectors(e,t),r.cross(tn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){tn.subVectors(r,t),Ln.subVectors(i,t),kd.subVectors(e,t);let o=tn.dot(tn),a=tn.dot(Ln),c=tn.dot(kd),l=Ln.dot(Ln),h=Ln.dot(kd),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;let d=1/u,m=(l*c-a*h)*d,g=(o*h-a*c)*d;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,On)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,On.x),c.addScaledVector(o,On.y),c.addScaledVector(a,On.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return zd.setScalar(0),Hd.setScalar(0),Gd.setScalar(0),zd.fromBufferAttribute(e,t),Hd.fromBufferAttribute(e,i),Gd.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(zd,s.x),o.addScaledVector(Hd,s.y),o.addScaledVector(Gd,s.z),o}static isFrontFacing(e,t,i,r){return tn.subVectors(i,t),Ln.subVectors(e,t),tn.cross(Ln).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),tn.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;Js.subVectors(r,i),Qs.subVectors(s,i),Ud.subVectors(e,i);let c=Js.dot(Ud),l=Qs.dot(Ud);if(c<=0&&l<=0)return t.copy(i);Bd.subVectors(e,r);let h=Js.dot(Bd),u=Qs.dot(Bd);if(h>=0&&u<=h)return t.copy(r);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(Js,o);Vd.subVectors(e,s);let m=Js.dot(Vd),g=Qs.dot(Vd);if(g>=0&&m<=g)return t.copy(s);let v=m*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Qs,a);let p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return Xg.subVectors(s,r),a=(u-h)/(u-h+(m-g)),t.copy(r).addScaledVector(Xg,a);let f=1/(p+v+d);return o=v*f,a=d*f,t.copy(i).addScaledVector(Js,o).addScaledVector(Qs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},G_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_r={h:0,s:0,l:0},Fl={h:0,s:0,l:0};function Wd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Qe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Je.workingColorSpace){if(e=Mb(e,1),t=We(t,0,1),i=We(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Wd(o,s,e+1/3),this.g=Wd(o,s,e),this.b=Wd(o,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,t=Ii){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ii){let i=G_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Nn(e.r),this.g=Nn(e.g),this.b=Nn(e.b),this}copyLinearToSRGB(e){return this.r=no(e.r),this.g=no(e.g),this.b=no(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ii){return Je.fromWorkingColorSpace(si.copy(this),e),Math.round(We(si.r*255,0,255))*65536+Math.round(We(si.g*255,0,255))*256+Math.round(We(si.b*255,0,255))}getHexString(e=Ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(si.copy(this),t);let i=si.r,r=si.g,s=si.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-i)/u+2;break;case s:c=(i-r)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(si.copy(this),t),e.r=si.r,e.g=si.g,e.b=si.b,e}getStyle(e=Ii){Je.fromWorkingColorSpace(si.copy(this),e);let t=si.r,i=si.g,r=si.b;return e!==Ii?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(_r),this.setHSL(_r.h+e,_r.s+t,_r.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(_r),e.getHSL(Fl);let i=Cd(_r.h,Fl.h,t),r=Cd(_r.s,Fl.s,t),s=Cd(_r.l,Fl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},si=new Qe;Qe.NAMES=G_;var Fb=0,rs=class extends Un{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fb++}),this.uuid=ga(),this.name="",this.type="Material",this.blending=es,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xl,this.blendDst=ql,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jr,this.stencilZFail=Jr,this.stencilZPass=Jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(i.blending=this.blending),this.side!==kn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xl&&(i.blendSrc=this.blendSrc),this.blendDst!==ql&&(i.blendDst=this.blendDst),this.blendEquation!==xr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ts&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Jr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Jr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ss=class extends rs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ns,this.combine=af,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Nt=new U,Ll=new ct,Lb=0,Ri=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lb++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Qd,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ll.fromBufferAttribute(this,t),Ll.applyMatrix3(e),this.setXY(t,Ll.x,Ll.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Go(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=xi(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Go(t,this.array)),t}setX(e,t){return this.normalized&&(t=xi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Go(t,this.array)),t}setY(e,t){return this.normalized&&(t=xi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Go(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Go(t,this.array)),t}setW(e,t){return this.normalized&&(t=xi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=xi(t,this.array),i=xi(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=xi(t,this.array),i=xi(i,this.array),r=xi(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=xi(t,this.array),i=xi(i,this.array),r=xi(r,this.array),s=xi(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qd&&(e.usage=this.usage),e}};var ea=class extends Ri{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ta=class extends Ri{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var mn=class extends Ri{constructor(e,t,i){super(new Float32Array(e),t,i)}},Ob=0,Vi=new kt,Xd=new ls,eo=new U,Ai=new Mr,jo=new Mr,Zt=new U,Sr=class n extends Un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ob++}),this.uuid=ga(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bf(e)?ta:ea)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vi.makeRotationFromQuaternion(e),this.applyMatrix4(Vi),this}rotateX(e){return Vi.makeRotationX(e),this.applyMatrix4(Vi),this}rotateY(e){return Vi.makeRotationY(e),this.applyMatrix4(Vi),this}rotateZ(e){return Vi.makeRotationZ(e),this.applyMatrix4(Vi),this}translate(e,t,i){return Vi.makeTranslation(e,t,i),this.applyMatrix4(Vi),this}scale(e,t,i){return Vi.makeScale(e,t,i),this.applyMatrix4(Vi),this}lookAt(e){return Xd.lookAt(e),Xd.updateMatrix(),this.applyMatrix4(Xd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(eo).negate(),this.translate(eo.x,eo.y,eo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new mn(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];Ai.setFromBufferAttribute(s),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,Ai.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,Ai.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(Ai.min),this.boundingBox.expandByPoint(Ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oo);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let i=this.boundingSphere.center;if(Ai.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];jo.setFromBufferAttribute(a),this.morphTargetsRelative?(Zt.addVectors(Ai.min,jo.min),Ai.expandByPoint(Zt),Zt.addVectors(Ai.max,jo.max),Ai.expandByPoint(Zt)):(Ai.expandByPoint(jo.min),Ai.expandByPoint(jo.max))}Ai.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Zt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Zt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Zt.fromBufferAttribute(a,l),c&&(eo.fromBufferAttribute(e,l),Zt.add(eo)),r=Math.max(r,i.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ri(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<i.count;L++)a[L]=new U,c[L]=new U;let l=new U,h=new U,u=new U,d=new ct,m=new ct,g=new ct,v=new U,p=new U;function f(L,M,b){l.fromBufferAttribute(i,L),h.fromBufferAttribute(i,M),u.fromBufferAttribute(i,b),d.fromBufferAttribute(s,L),m.fromBufferAttribute(s,M),g.fromBufferAttribute(s,b),h.sub(l),u.sub(l),m.sub(d),g.sub(d);let A=1/(m.x*g.y-g.x*m.y);isFinite(A)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(A),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(A),a[L].add(v),a[M].add(v),a[b].add(v),c[L].add(p),c[M].add(p),c[b].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let L=0,M=E.length;L<M;++L){let b=E[L],A=b.start,G=b.count;for(let B=A,$=A+G;B<$;B+=3)f(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let w=new U,x=new U,D=new U,R=new U;function T(L){D.fromBufferAttribute(r,L),R.copy(D);let M=a[L];w.copy(M),w.sub(D.multiplyScalar(D.dot(M))).normalize(),x.crossVectors(R,M);let A=x.dot(c[L])<0?-1:1;o.setXYZW(L,w.x,w.y,w.z,A)}for(let L=0,M=E.length;L<M;++L){let b=E[L],A=b.start,G=b.count;for(let B=A,$=A+G;B<$;B+=3)T(e.getX(B+0)),T(e.getX(B+1)),T(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ri(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);let r=new U,s=new U,o=new U,a=new U,c=new U,l=new U,h=new U,u=new U;if(e)for(let d=0,m=e.count;d<m;d+=3){let g=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,p),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),m=0,g=0;for(let v=0,p=c.length;v<p;v++){a.isInterleavedBufferAttribute?m=c[v]*a.data.stride+a.offset:m=c[v]*h;for(let f=0;f<h;f++)d[g++]=l[m++]}return new Ri(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],m=e(d,i);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let m=l[u];h.push(m.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],u=s[l];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},qg=new kt,Zr=new eh,Ol=new oo,jg=new U,Nl=new U,kl=new U,Ul=new U,qd=new U,Bl=new U,Yg=new U,Vl=new U,Mi=class extends ls{constructor(e=new Sr,t=new ss){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Bl.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=a[c],u=s[c];h!==0&&(qd.fromBufferAttribute(u,e),o?Bl.addScaledVector(qd,h):Bl.addScaledVector(qd.sub(t),h))}t.add(Bl)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ol.copy(i.boundingSphere),Ol.applyMatrix4(s),Zr.copy(e.ray).recast(e.near),!(Ol.containsPoint(Zr.origin)===!1&&(Zr.intersectSphere(Ol,jg)===null||Zr.origin.distanceToSquared(jg)>(e.far-e.near)**2))&&(qg.copy(s).invert(),Zr.copy(e.ray).applyMatrix4(qg),!(i.boundingBox!==null&&Zr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Zr)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let p=d[g],f=o[p.materialIndex],E=Math.max(p.start,m.start),w=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let x=E,D=w;x<D;x+=3){let R=a.getX(x),T=a.getX(x+1),L=a.getX(x+2);r=zl(this,f,e,i,l,h,u,R,T,L),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{let g=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){let E=a.getX(p),w=a.getX(p+1),x=a.getX(p+2);r=zl(this,o,e,i,l,h,u,E,w,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let p=d[g],f=o[p.materialIndex],E=Math.max(p.start,m.start),w=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let x=E,D=w;x<D;x+=3){let R=x,T=x+1,L=x+2;r=zl(this,f,e,i,l,h,u,R,T,L),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{let g=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){let E=p,w=p+1,x=p+2;r=zl(this,o,e,i,l,h,u,E,w,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}};function Nb(n,e,t,i,r,s,o,a){let c;if(e.side===mi?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===kn,a),c===null)return null;Vl.copy(a),Vl.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Vl);return l<t.near||l>t.far?null:{distance:l,point:Vl.clone(),object:n}}function zl(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,Nl),n.getVertexPosition(c,kl),n.getVertexPosition(l,Ul);let h=Nb(n,e,t,i,Nl,kl,Ul,Yg);if(h){let u=new U;yr.getBarycoord(Yg,Nl,kl,Ul,u),r&&(h.uv=yr.getInterpolatedAttribute(r,a,c,l,u,new ct)),s&&(h.uv1=yr.getInterpolatedAttribute(s,a,c,l,u,new ct)),o&&(h.normal=yr.getInterpolatedAttribute(o,a,c,l,u,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new U,materialIndex:0};yr.getNormal(Nl,kl,Ul,d.normal),h.face=d,h.barycoord=u}return h}var wr=class n extends Sr{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,m=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new mn(l,3)),this.setAttribute("normal",new mn(h,3)),this.setAttribute("uv",new mn(u,2));function g(v,p,f,E,w,x,D,R,T,L,M){let b=x/T,A=D/L,G=x/2,B=D/2,$=R/2,Z=T+1,q=L+1,J=0,z=0,re=new U;for(let fe=0;fe<q;fe++){let Me=fe*A-B;for(let He=0;He<Z;He++){let lt=He*b-G;re[v]=lt*E,re[p]=Me*w,re[f]=$,l.push(re.x,re.y,re.z),re[v]=0,re[p]=0,re[f]=R>0?1:-1,h.push(re.x,re.y,re.z),u.push(He/T),u.push(1-fe/L),J+=1}}for(let fe=0;fe<L;fe++)for(let Me=0;Me<T;Me++){let He=d+Me+Z*fe,lt=d+Me+Z*(fe+1),W=d+(Me+1)+Z*(fe+1),te=d+(Me+1)+Z*fe;c.push(He,lt,te),c.push(lt,W,te),z+=6}a.addGroup(m,z,M),m+=z,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function hs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function ai(n){let e={};for(let t=0;t<n.length;t++){let i=hs(n[t]);for(let r in i)e[r]=i[r]}return e}function kb(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function xf(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}var W_={clone:hs,merge:ai},Ub=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,rn=class extends rs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ub,this.fragmentShader=Bb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hs(e.uniforms),this.uniformsGroups=kb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},ia=class extends ls{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=pn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},vr=new U,$g=new ct,Zg=new ct,oi=class extends ia{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Zl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Td*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zl*2*Math.atan(Math.tan(Td*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vr.x,vr.y).multiplyScalar(-e/vr.z),vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vr.x,vr.y).multiplyScalar(-e/vr.z)}getViewSize(e,t){return this.getViewBounds(e,$g,Zg),t.subVectors(Zg,$g)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Td*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},to=-90,io=1,th=class extends ls{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new oi(to,io,e,t);r.layers=this.layers,this.add(r);let s=new oi(to,io,e,t);s.layers=this.layers,this.add(s);let o=new oi(to,io,e,t);o.layers=this.layers,this.add(o);let a=new oi(to,io,e,t);a.layers=this.layers,this.add(a);let c=new oi(to,io,e,t);c.layers=this.layers,this.add(c);let l=new oi(to,io,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===pn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Zo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(u,d,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},na=class extends Ir{constructor(e=[],t=as,i,r,s,o,a,c,l,h){super(e,t,i,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ih=class extends gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new na(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new wr(5,5,5),s=new rn({name:"CubemapFromEquirect",uniforms:hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mi,blending:Vn});s.uniforms.tEquirect.value=t;let o=new Mi(r,s),a=t.minFilter;return t.minFilter===Cr&&(t.minFilter=nn),new th(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},Qr=class extends ls{constructor(){super(),this.isGroup=!0,this.type="Group"}},Vb={type:"move"},ao=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let p=t.getJointPose(v,i),f=this._getHandJoint(l,v);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vb)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Qr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var ra=class extends ls{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ns,this.environmentIntensity=1,this.environmentRotation=new ns,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var jd=new U,zb=new U,Hb=new Oe,fn=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=jd.subVectors(i,t).cross(zb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(jd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Hb.getNormalMatrix(e),r=this.coplanarPoint(jd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Kr=new oo,Hl=new U,sa=class{constructor(e=new fn,t=new fn,i=new fn,r=new fn,s=new fn,o=new fn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=pn){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],h=r[5],u=r[6],d=r[7],m=r[8],g=r[9],v=r[10],p=r[11],f=r[12],E=r[13],w=r[14],x=r[15];if(i[0].setComponents(c-s,d-l,p-m,x-f).normalize(),i[1].setComponents(c+s,d+l,p+m,x+f).normalize(),i[2].setComponents(c+o,d+h,p+g,x+E).normalize(),i[3].setComponents(c-o,d-h,p-g,x-E).normalize(),i[4].setComponents(c-a,d-u,p-v,x-w).normalize(),t===pn)i[5].setComponents(c+a,d+u,p+v,x+w).normalize();else if(t===Zo)i[5].setComponents(a,u,v,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Kr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kr)}intersectsSprite(e){return Kr.center.set(0,0,0),Kr.radius=.7071067811865476,Kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Hl.x=r.normal.x>0?e.max.x:e.min.x,Hl.y=r.normal.y>0?e.max.y:e.min.y,Hl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Hl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var oa=class extends Ir{constructor(e,t,i=Ar,r,s,o,a=zi,c=zi,l,h=ro){if(h!==ro&&h!==uo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new so(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var aa=class n extends Sr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,h=c+1,u=e/a,d=t/c,m=[],g=[],v=[],p=[];for(let f=0;f<h;f++){let E=f*d-o;for(let w=0;w<l;w++){let x=w*u-s;g.push(x,-E,0),v.push(0,0,1),p.push(w/a),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let E=0;E<a;E++){let w=E+l*f,x=E+l*(f+1),D=E+1+l*(f+1),R=E+1+l*f;m.push(w,x,R),m.push(x,D,R)}this.setIndex(m),this.setAttribute("position",new mn(g,3)),this.setAttribute("normal",new mn(v,3)),this.setAttribute("uv",new mn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var nh=class extends rs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=A_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},rh=class extends rs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Gl(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Gb(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var os=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];i:{e:{let o;t:{n:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break i}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},sh=class extends os{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$d,endingEnd:$d}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Zd:s=e,a=2*t-i;break;case Kd:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Zd:o=e,c=2*i-t;break;case Kd:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(i-t)/(r-t),v=g*g,p=v*g,f=-d*p+2*d*v-d*g,E=(1+d)*p+(-1.5-2*d)*v+(-.5+d)*g+1,w=(-1-m)*p+(1.5+m)*v+.5*g,x=m*p-m*v;for(let D=0;D!==a;++D)s[D]=f*o[h+D]+E*o[l+D]+w*o[c+D]+x*o[u+D];return s}},oh=class extends os{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(i-t)/(r-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[l+d]*u+o[c+d]*h;return s}},ah=class extends os{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Di=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Gl(t,this.TimeBufferType),this.values=Gl(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Gl(e.times,Array),values:Gl(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ah(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new oh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new sh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Yo:t=this.InterpolantFactoryMethodDiscrete;break;case $l:t=this.InterpolantFactoryMethodLinear;break;case Wl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yo;case this.InterpolantFactoryMethodLinear:return $l;case this.InterpolantFactoryMethodSmooth:return Wl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&Gb(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Wl,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(r)c=!0;else{let u=a*i,d=u-i,m=u+i;for(let g=0;g!==i;++g){let v=t[u+g];if(v!==t[d+g]||v!==t[m+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*i,d=o*i;for(let m=0;m!==i;++m)t[d+m]=t[u+m]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Di.prototype.ValueTypeName="";Di.prototype.TimeBufferType=Float32Array;Di.prototype.ValueBufferType=Float32Array;Di.prototype.DefaultInterpolation=$l;var Er=class extends Di{constructor(e,t,i){super(e,t,i)}};Er.prototype.ValueTypeName="bool";Er.prototype.ValueBufferType=Array;Er.prototype.DefaultInterpolation=Yo;Er.prototype.InterpolantFactoryMethodLinear=void 0;Er.prototype.InterpolantFactoryMethodSmooth=void 0;var ch=class extends Di{constructor(e,t,i,r){super(e,t,i,r)}};ch.prototype.ValueTypeName="color";var lh=class extends Di{constructor(e,t,i,r){super(e,t,i,r)}};lh.prototype.ValueTypeName="number";var hh=class extends os{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let h=l+a;l!==h;l+=4)Bn.slerpFlat(s,0,o,l-a,o,l,c);return s}},ca=class extends Di{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new hh(this.times,this.values,this.getValueSize(),e)}};ca.prototype.ValueTypeName="quaternion";ca.prototype.InterpolantFactoryMethodSmooth=void 0;var Tr=class extends Di{constructor(e,t,i){super(e,t,i)}};Tr.prototype.ValueTypeName="string";Tr.prototype.ValueBufferType=Array;Tr.prototype.DefaultInterpolation=Yo;Tr.prototype.InterpolantFactoryMethodLinear=void 0;Tr.prototype.InterpolantFactoryMethodSmooth=void 0;var uh=class extends Di{constructor(e,t,i,r){super(e,t,i,r)}};uh.prototype.ValueTypeName="vector";var dh=class extends ia{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var fh=class extends oi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}};var Mf="\\[\\]\\.:\\/",Wb=new RegExp("["+Mf+"]","g"),Sf="[^"+Mf+"]",Xb="[^"+Mf.replace("\\.","")+"]",qb=/((?:WC+[\/:])*)/.source.replace("WC",Sf),jb=/(WCOD+)?/.source.replace("WCOD",Xb),Yb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sf),$b=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sf),Zb=new RegExp("^"+qb+jb+Yb+$b+"$"),Kb=["material","materials","bones","map"],ef=class{constructor(e,t,i){let r=i||wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},wt=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Wb,"")}static parseTrackName(t){let i=Zb.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);Kb.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,o=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let h=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=ef,n})();wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var aU=new Float32Array(1);function wf(n,e,t,i){let r=Jb(i);switch(t){case uf:return n*e;case ff:return n*e;case pf:return n*e*2;case mf:return n*e/r.components*r.byteLength;case Ah:return n*e/r.components*r.byteLength;case gf:return n*e*2/r.components*r.byteLength;case Ih:return n*e*2/r.components*r.byteLength;case df:return n*e*3/r.components*r.byteLength;case Hi:return n*e*4/r.components*r.byteLength;case Rh:return n*e*4/r.components*r.byteLength;case ua:case da:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case fa:case pa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ph:case Lh:return Math.max(n,16)*Math.max(e,8)/4;case Dh:case Fh:return Math.max(n,8)*Math.max(e,8)/2;case Oh:case Nh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case kh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Uh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Vh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case zh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Gh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Xh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case qh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case jh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Yh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case $h:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Zh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Kh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ma:case Jh:case Qh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case _f:case eu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case tu:case iu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Jb(n){switch(n){case yn:case cf:return{byteLength:1,components:1};case co:case lf:case lo:return{byteLength:2,components:1};case Th:case Ch:return{byteLength:2,components:4};case Ar:case Eh:case bn:return{byteLength:4,components:1};case hf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ph}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ph);function pv(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Qb(n){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,h),a.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){let h=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,h);else{u.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<u.length;m++){let g=u[d],v=u[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let m=0,g=u.length;m<g;m++){let v=u[m];n.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var ex=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tx=`#ifdef USE_ALPHAHASH
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
#endif`,ix=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ox=`#ifdef USE_AOMAP
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
#endif`,ax=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cx=`#ifdef USE_BATCHING
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
#endif`,lx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ux=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fx=`#ifdef USE_IRIDESCENCE
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
#endif`,px=`#ifdef USE_BUMPMAP
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
#endif`,mx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_x=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Sx=`#define PI 3.141592653589793
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
} // validated`,wx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ex=`vec3 transformedNormal = objectNormal;
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
#endif`,Tx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ax=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ix=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Px=`#ifdef USE_ENVMAP
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
#endif`,Fx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lx=`#ifdef USE_ENVMAP
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
#endif`,Ox=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nx=`#ifdef USE_ENVMAP
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
#endif`,kx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ux=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zx=`#ifdef USE_GRADIENTMAP
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
}`,Hx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xx=`uniform bool receiveShadow;
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
#endif`,qx=`#ifdef USE_ENVMAP
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
#endif`,jx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$x=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kx=`PhysicalMaterial material;
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
#endif`,Jx=`struct PhysicalMaterial {
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
}`,Qx=`
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
#endif`,eM=`#if defined( RE_IndirectDiffuse )
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
#endif`,tM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lM=`#if defined( USE_POINTS_UV )
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
#endif`,hM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mM=`#ifdef USE_MORPHTARGETS
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
#endif`,gM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_M=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,MM=`#ifdef USE_NORMALMAP
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
#endif`,SM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,EM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,TM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,CM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,AM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,IM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,RM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,DM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,PM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,FM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,LM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,OM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,NM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,UM=`float getShadowMask() {
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
}`,BM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,VM=`#ifdef USE_SKINNING
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
#endif`,zM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,HM=`#ifdef USE_SKINNING
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
#endif`,GM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jM=`#ifdef USE_TRANSMISSION
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
#endif`,YM=`#ifdef USE_TRANSMISSION
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
#endif`,$M=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,QM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eS=`uniform sampler2D t2D;
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
}`,tS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sS=`#include <common>
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
}`,oS=`#if DEPTH_PACKING == 3200
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
}`,aS=`#define DISTANCE
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
}`,cS=`#define DISTANCE
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
}`,lS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uS=`uniform float scale;
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
}`,dS=`uniform vec3 diffuse;
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
}`,fS=`#include <common>
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
}`,pS=`uniform vec3 diffuse;
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
}`,mS=`#define LAMBERT
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
}`,gS=`#define LAMBERT
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
}`,_S=`#define MATCAP
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
}`,vS=`#define MATCAP
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
}`,yS=`#define NORMAL
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
}`,bS=`#define NORMAL
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
}`,xS=`#define PHONG
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
}`,MS=`#define PHONG
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
}`,SS=`#define STANDARD
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
}`,wS=`#define STANDARD
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
}`,ES=`#define TOON
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
}`,TS=`#define TOON
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
}`,CS=`uniform float size;
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
}`,AS=`uniform vec3 diffuse;
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
}`,IS=`#include <common>
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
}`,RS=`uniform vec3 color;
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
}`,DS=`uniform float rotation;
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
}`,PS=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:ex,alphahash_pars_fragment:tx,alphamap_fragment:ix,alphamap_pars_fragment:nx,alphatest_fragment:rx,alphatest_pars_fragment:sx,aomap_fragment:ox,aomap_pars_fragment:ax,batching_pars_vertex:cx,batching_vertex:lx,begin_vertex:hx,beginnormal_vertex:ux,bsdfs:dx,iridescence_fragment:fx,bumpmap_pars_fragment:px,clipping_planes_fragment:mx,clipping_planes_pars_fragment:gx,clipping_planes_pars_vertex:_x,clipping_planes_vertex:vx,color_fragment:yx,color_pars_fragment:bx,color_pars_vertex:xx,color_vertex:Mx,common:Sx,cube_uv_reflection_fragment:wx,defaultnormal_vertex:Ex,displacementmap_pars_vertex:Tx,displacementmap_vertex:Cx,emissivemap_fragment:Ax,emissivemap_pars_fragment:Ix,colorspace_fragment:Rx,colorspace_pars_fragment:Dx,envmap_fragment:Px,envmap_common_pars_fragment:Fx,envmap_pars_fragment:Lx,envmap_pars_vertex:Ox,envmap_physical_pars_fragment:qx,envmap_vertex:Nx,fog_vertex:kx,fog_pars_vertex:Ux,fog_fragment:Bx,fog_pars_fragment:Vx,gradientmap_pars_fragment:zx,lightmap_pars_fragment:Hx,lights_lambert_fragment:Gx,lights_lambert_pars_fragment:Wx,lights_pars_begin:Xx,lights_toon_fragment:jx,lights_toon_pars_fragment:Yx,lights_phong_fragment:$x,lights_phong_pars_fragment:Zx,lights_physical_fragment:Kx,lights_physical_pars_fragment:Jx,lights_fragment_begin:Qx,lights_fragment_maps:eM,lights_fragment_end:tM,logdepthbuf_fragment:iM,logdepthbuf_pars_fragment:nM,logdepthbuf_pars_vertex:rM,logdepthbuf_vertex:sM,map_fragment:oM,map_pars_fragment:aM,map_particle_fragment:cM,map_particle_pars_fragment:lM,metalnessmap_fragment:hM,metalnessmap_pars_fragment:uM,morphinstance_vertex:dM,morphcolor_vertex:fM,morphnormal_vertex:pM,morphtarget_pars_vertex:mM,morphtarget_vertex:gM,normal_fragment_begin:_M,normal_fragment_maps:vM,normal_pars_fragment:yM,normal_pars_vertex:bM,normal_vertex:xM,normalmap_pars_fragment:MM,clearcoat_normal_fragment_begin:SM,clearcoat_normal_fragment_maps:wM,clearcoat_pars_fragment:EM,iridescence_pars_fragment:TM,opaque_fragment:CM,packing:AM,premultiplied_alpha_fragment:IM,project_vertex:RM,dithering_fragment:DM,dithering_pars_fragment:PM,roughnessmap_fragment:FM,roughnessmap_pars_fragment:LM,shadowmap_pars_fragment:OM,shadowmap_pars_vertex:NM,shadowmap_vertex:kM,shadowmask_pars_fragment:UM,skinbase_vertex:BM,skinning_pars_vertex:VM,skinning_vertex:zM,skinnormal_vertex:HM,specularmap_fragment:GM,specularmap_pars_fragment:WM,tonemapping_fragment:XM,tonemapping_pars_fragment:qM,transmission_fragment:jM,transmission_pars_fragment:YM,uv_pars_fragment:$M,uv_pars_vertex:ZM,uv_vertex:KM,worldpos_vertex:JM,background_vert:QM,background_frag:eS,backgroundCube_vert:tS,backgroundCube_frag:iS,cube_vert:nS,cube_frag:rS,depth_vert:sS,depth_frag:oS,distanceRGBA_vert:aS,distanceRGBA_frag:cS,equirect_vert:lS,equirect_frag:hS,linedashed_vert:uS,linedashed_frag:dS,meshbasic_vert:fS,meshbasic_frag:pS,meshlambert_vert:mS,meshlambert_frag:gS,meshmatcap_vert:_S,meshmatcap_frag:vS,meshnormal_vert:yS,meshnormal_frag:bS,meshphong_vert:xS,meshphong_frag:MS,meshphysical_vert:SS,meshphysical_frag:wS,meshtoon_vert:ES,meshtoon_frag:TS,points_vert:CS,points_frag:AS,shadow_vert:IS,shadow_frag:RS,sprite_vert:DS,sprite_frag:PS},ie={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},xn={basic:{uniforms:ai([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:ai([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:ai([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:ai([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:ai([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:ai([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:ai([ie.points,ie.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:ai([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:ai([ie.common,ie.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:ai([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:ai([ie.sprite,ie.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:ai([ie.common,ie.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:ai([ie.lights,ie.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};xn.physical={uniforms:ai([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};var nu={r:0,b:0,g:0},us=new ns,FS=new kt;function LS(n,e,t,i,r,s,o){let a=new Qe(0),c=s===!0?0:1,l,h,u=null,d=0,m=null;function g(w){let x=w.isScene===!0?w.background:null;return x&&x.isTexture&&(x=(w.backgroundBlurriness>0?t:e).get(x)),x}function v(w){let x=!1,D=g(w);D===null?f(a,c):D&&D.isColor&&(f(D,1),x=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(w,x){let D=g(x);D&&(D.isCubeTexture||D.mapping===la)?(h===void 0&&(h=new Mi(new wr(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:hs(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),us.copy(x.backgroundRotation),us.x*=-1,us.y*=-1,us.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),h.material.uniforms.envMap.value=D,h.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(FS.makeRotationFromEuler(us)),h.material.toneMapped=Je.getTransfer(D.colorSpace)!==ot,(u!==D||d!==D.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,u=D,d=D.version,m=n.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):D&&D.isTexture&&(l===void 0&&(l=new Mi(new aa(2,2),new rn({name:"BackgroundMaterial",uniforms:hs(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=D,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Je.getTransfer(D.colorSpace)!==ot,D.matrixAutoUpdate===!0&&D.updateMatrix(),l.material.uniforms.uvTransform.value.copy(D.matrix),(u!==D||d!==D.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,u=D,d=D.version,m=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function f(w,x){w.getRGB(nu,xf(n)),i.buffers.color.setClear(nu.r,nu.g,nu.b,x,o)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,x=1){a.set(w),c=x,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,f(a,c)},render:v,addToRenderList:p,dispose:E}}function OS(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null),s=r,o=!1;function a(b,A,G,B,$){let Z=!1,q=u(B,G,A);s!==q&&(s=q,l(s.object)),Z=m(b,B,G,$),Z&&g(b,B,G,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,x(b,A,G,B),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function c(){return n.createVertexArray()}function l(b){return n.bindVertexArray(b)}function h(b){return n.deleteVertexArray(b)}function u(b,A,G){let B=G.wireframe===!0,$=i[b.id];$===void 0&&($={},i[b.id]=$);let Z=$[A.id];Z===void 0&&(Z={},$[A.id]=Z);let q=Z[B];return q===void 0&&(q=d(c()),Z[B]=q),q}function d(b){let A=[],G=[],B=[];for(let $=0;$<t;$++)A[$]=0,G[$]=0,B[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:G,attributeDivisors:B,object:b,attributes:{},index:null}}function m(b,A,G,B){let $=s.attributes,Z=A.attributes,q=0,J=G.getAttributes();for(let z in J)if(J[z].location>=0){let fe=$[z],Me=Z[z];if(Me===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(Me=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(Me=b.instanceColor)),fe===void 0||fe.attribute!==Me||Me&&fe.data!==Me.data)return!0;q++}return s.attributesNum!==q||s.index!==B}function g(b,A,G,B){let $={},Z=A.attributes,q=0,J=G.getAttributes();for(let z in J)if(J[z].location>=0){let fe=Z[z];fe===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(fe=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(fe=b.instanceColor));let Me={};Me.attribute=fe,fe&&fe.data&&(Me.data=fe.data),$[z]=Me,q++}s.attributes=$,s.attributesNum=q,s.index=B}function v(){let b=s.newAttributes;for(let A=0,G=b.length;A<G;A++)b[A]=0}function p(b){f(b,0)}function f(b,A){let G=s.newAttributes,B=s.enabledAttributes,$=s.attributeDivisors;G[b]=1,B[b]===0&&(n.enableVertexAttribArray(b),B[b]=1),$[b]!==A&&(n.vertexAttribDivisor(b,A),$[b]=A)}function E(){let b=s.newAttributes,A=s.enabledAttributes;for(let G=0,B=A.length;G<B;G++)A[G]!==b[G]&&(n.disableVertexAttribArray(G),A[G]=0)}function w(b,A,G,B,$,Z,q){q===!0?n.vertexAttribIPointer(b,A,G,$,Z):n.vertexAttribPointer(b,A,G,B,$,Z)}function x(b,A,G,B){v();let $=B.attributes,Z=G.getAttributes(),q=A.defaultAttributeValues;for(let J in Z){let z=Z[J];if(z.location>=0){let re=$[J];if(re===void 0&&(J==="instanceMatrix"&&b.instanceMatrix&&(re=b.instanceMatrix),J==="instanceColor"&&b.instanceColor&&(re=b.instanceColor)),re!==void 0){let fe=re.normalized,Me=re.itemSize,He=e.get(re);if(He===void 0)continue;let lt=He.buffer,W=He.type,te=He.bytesPerElement,ve=W===n.INT||W===n.UNSIGNED_INT||re.gpuType===Eh;if(re.isInterleavedBufferAttribute){let se=re.data,Ae=se.stride,it=re.offset;if(se.isInstancedInterleavedBuffer){for(let Re=0;Re<z.locationSize;Re++)f(z.location+Re,se.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Re=0;Re<z.locationSize;Re++)p(z.location+Re);n.bindBuffer(n.ARRAY_BUFFER,lt);for(let Re=0;Re<z.locationSize;Re++)w(z.location+Re,Me/z.locationSize,W,fe,Ae*te,(it+Me/z.locationSize*Re)*te,ve)}else{if(re.isInstancedBufferAttribute){for(let se=0;se<z.locationSize;se++)f(z.location+se,re.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let se=0;se<z.locationSize;se++)p(z.location+se);n.bindBuffer(n.ARRAY_BUFFER,lt);for(let se=0;se<z.locationSize;se++)w(z.location+se,Me/z.locationSize,W,fe,Me*te,Me/z.locationSize*se*te,ve)}}else if(q!==void 0){let fe=q[J];if(fe!==void 0)switch(fe.length){case 2:n.vertexAttrib2fv(z.location,fe);break;case 3:n.vertexAttrib3fv(z.location,fe);break;case 4:n.vertexAttrib4fv(z.location,fe);break;default:n.vertexAttrib1fv(z.location,fe)}}}}E()}function D(){L();for(let b in i){let A=i[b];for(let G in A){let B=A[G];for(let $ in B)h(B[$].object),delete B[$];delete A[G]}delete i[b]}}function R(b){if(i[b.id]===void 0)return;let A=i[b.id];for(let G in A){let B=A[G];for(let $ in B)h(B[$].object),delete B[$];delete A[G]}delete i[b.id]}function T(b){for(let A in i){let G=i[A];if(G[b.id]===void 0)continue;let B=G[b.id];for(let $ in B)h(B[$].object),delete B[$];delete G[b.id]}}function L(){M(),o=!0,s!==r&&(s=r,l(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:M,dispose:D,releaseStatesOfGeometry:R,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:p,disableUnusedAttributes:E}}function NS(n,e,t){let i;function r(l){i=l}function s(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function o(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),t.update(h,i,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];t.update(m,i,1)}function c(l,h,u,d){if(u===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function kS(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Hi&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let L=T===lo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==yn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==bn&&!L)}function c(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:E,maxVaryings:w,maxFragmentUniforms:x,vertexTextures:D,maxSamples:R}}function US(n){let e=this,t=null,i=0,r=!1,s=!1,o=new fn,a=new Oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let m=u.length!==0||d||i!==0||r;return r=d,i=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,m){let g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,f=n.get(u);if(!r||g===null||g.length===0||s&&!p)s?h(null):l();else{let E=s?0:i,w=E*4,x=f.clippingState||null;c.value=x,x=h(g,d,w,m);for(let D=0;D!==w;++D)x[D]=t[D];f.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,m,g){let v=u!==null?u.length:0,p=null;if(v!==0){if(p=c.value,g!==!0||p===null){let f=m+v*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<f)&&(p=new Float32Array(f));for(let w=0,x=m;w!==v;++w,x+=4)o.copy(u[w]).applyMatrix4(E,a),o.normal.toArray(p,x),p[x+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function BS(n){let e=new WeakMap;function t(o,a){return a===Mh?o.mapping=as:a===Sh&&(o.mapping=cs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Mh||a===Sh)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new ih(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var po=4,X_=[.125,.215,.35,.446,.526,.582],ps=20,Ef=new dh,q_=new Qe,Tf=null,Cf=0,Af=0,If=!1,fs=(1+Math.sqrt(5))/2,fo=1/fs,j_=[new U(-fs,fo,0),new U(fs,fo,0),new U(-fo,0,fs),new U(fo,0,fs),new U(0,fs,-fo),new U(0,fs,fo),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],VS=new U,ou=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){let{size:o=256,position:a=VS}=s;Tf=this._renderer.getRenderTarget(),Cf=this._renderer.getActiveCubeFace(),Af=this._renderer.getActiveMipmapLevel(),If=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Z_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Tf,Cf,Af),this._renderer.xr.enabled=If,e.scissorTest=!1,ru(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===as||e.mapping===cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tf=this._renderer.getRenderTarget(),Cf=this._renderer.getActiveCubeFace(),Af=this._renderer.getActiveMipmapLevel(),If=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:lo,format:Hi,colorSpace:is,depthBuffer:!1},r=Y_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Y_(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zS(s)),this._blurMaterial=HS(s,e,t)}return r}_compileMaterial(e){let t=new Mi(this._lodPlanes[0],e);this._renderer.compile(t,Ef)}_sceneToCubeUV(e,t,i,r,s){let c=new oi(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,m=u.toneMapping;u.getClearColor(q_),u.toneMapping=zn,u.autoClear=!1;let g=new ss({name:"PMREM.Background",side:mi,depthWrite:!1,depthTest:!1}),v=new Mi(new wr,g),p=!1,f=e.background;f?f.isColor&&(g.color.copy(f),e.background=null,p=!0):(g.color.copy(q_),p=!0);for(let E=0;E<6;E++){let w=E%3;w===0?(c.up.set(0,l[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[E],s.y,s.z)):w===1?(c.up.set(0,0,l[E]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[E],s.z)):(c.up.set(0,l[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[E]));let x=this._cubeSize;ru(r,w*x,E>2?x:0,x,x),u.setRenderTarget(r),p&&u.render(v,c),u.render(e,c)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=m,u.autoClear=d,e.background=f}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===as||e.mapping===cs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Z_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$_());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Mi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;ru(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Ef)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=j_[(r-s-1)%j_.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Mi(this._lodPlanes[r],l),d=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ps-1),v=s/g,p=isFinite(s)?1+Math.floor(h*v):ps;p>ps&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ps}`);let f=[],E=0;for(let T=0;T<ps;++T){let L=T/v,M=Math.exp(-L*L/2);f.push(M),T===0?E+=M:T<p&&(E+=2*M)}for(let T=0;T<f.length;T++)f[T]=f[T]/E;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:w}=this;d.dTheta.value=g,d.mipInt.value=w-i;let x=this._sizeLods[r],D=3*x*(r>w-po?r-w+po:0),R=4*(this._cubeSize-x);ru(t,D,R,3*x,2*x),c.setRenderTarget(t),c.render(u,Ef)}};function zS(n){let e=[],t=[],i=[],r=n,s=n-po+1+X_.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>n-po?c=X_[o-n+po-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,v=3,p=2,f=1,E=new Float32Array(v*g*m),w=new Float32Array(p*g*m),x=new Float32Array(f*g*m);for(let R=0;R<m;R++){let T=R%3*2/3-1,L=R>2?0:-1,M=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];E.set(M,v*g*R),w.set(d,p*g*R);let b=[R,R,R,R,R,R];x.set(b,f*g*R)}let D=new Sr;D.setAttribute("position",new Ri(E,v)),D.setAttribute("uv",new Ri(w,p)),D.setAttribute("faceIndex",new Ri(x,f)),e.push(D),r>po&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Y_(n,e,t){let i=new gn(n,e,t);return i.texture.mapping=la,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ru(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function HS(n,e,t){let i=new Float32Array(ps),r=new U(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Bf(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function $_(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bf(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Z_(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Bf(){return`

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
	`}function GS(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===Mh||c===Sh,h=c===as||c===cs;if(l||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new ou(n)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let m=a.image;return l&&m&&m.height>0||h&&m&&r(m)?(t===null&&(t=new ou(n)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function WS(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&_a("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function XS(n,e,t,i){let r={},s=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];let m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let m in d)e.update(d[m],n.ARRAY_BUFFER)}function l(u){let d=[],m=u.index,g=u.attributes.position,v=0;if(m!==null){let E=m.array;v=m.version;for(let w=0,x=E.length;w<x;w+=3){let D=E[w+0],R=E[w+1],T=E[w+2];d.push(D,R,R,T,T,D)}}else if(g!==void 0){let E=g.array;v=g.version;for(let w=0,x=E.length/3-1;w<x;w+=3){let D=w+0,R=w+1,T=w+2;d.push(D,R,R,T,T,D)}}else return;let p=new(bf(d)?ta:ea)(d,1);p.version=v;let f=s.get(u);f&&e.remove(f),s.set(u,p)}function h(u){let d=s.get(u);if(d){let m=u.index;m!==null&&d.version<m.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function qS(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,m){n.drawElements(i,m,s,d*o),t.update(m,i,1)}function l(d,m,g){g!==0&&(n.drawElementsInstanced(i,m,s,d*o,g),t.update(m,i,g))}function h(d,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,g);let p=0;for(let f=0;f<g;f++)p+=m[f];t.update(p,i,1)}function u(d,m,g,v){if(g===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)l(d[f]/o,m[f],v[f]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,v,0,g);let f=0;for(let E=0;E<g;E++)f+=m[E]*v[E];t.update(f,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function jS(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function YS(n,e,t){let i=new WeakMap,r=new Et;function s(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let b=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",b)};var m=b;d!==void 0&&d.texture.dispose();let g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],x=0;g===!0&&(x=1),v===!0&&(x=2),p===!0&&(x=3);let D=a.attributes.position.count*x,R=1;D>e.maxTextureSize&&(R=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);let T=new Float32Array(D*R*4*u),L=new Jo(T,D,R,u);L.type=bn,L.needsUpdate=!0;let M=x*4;for(let A=0;A<u;A++){let G=f[A],B=E[A],$=w[A],Z=D*R*4*A;for(let q=0;q<G.count;q++){let J=q*M;g===!0&&(r.fromBufferAttribute(G,q),T[Z+J+0]=r.x,T[Z+J+1]=r.y,T[Z+J+2]=r.z,T[Z+J+3]=0),v===!0&&(r.fromBufferAttribute(B,q),T[Z+J+4]=r.x,T[Z+J+5]=r.y,T[Z+J+6]=r.z,T[Z+J+7]=0),p===!0&&(r.fromBufferAttribute($,q),T[Z+J+8]=r.x,T[Z+J+9]=r.y,T[Z+J+10]=r.z,T[Z+J+11]=$.itemSize===4?r.w:1)}}d={count:u,texture:L,size:new ct(D,R)},i.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];let v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function $S(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,h=c.geometry,u=e.get(c,h);if(r.get(u)!==l&&(e.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return u}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var mv=new Ir,K_=new oa(1,1),gv=new Jo,_v=new Ql,vv=new na,J_=[],Q_=[],ev=new Float32Array(16),tv=new Float32Array(9),iv=new Float32Array(4);function go(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=J_[r];if(s===void 0&&(s=new Float32Array(r),J_[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Gt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function cu(n,e){let t=Q_[e];t===void 0&&(t=new Int32Array(e),Q_[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ZS(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function KS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2fv(this.addr,e),Gt(t,e)}}function JS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;n.uniform3fv(this.addr,e),Gt(t,e)}}function QS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4fv(this.addr,e),Gt(t,e)}}function ew(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,i))return;iv.set(i),n.uniformMatrix2fv(this.addr,!1,iv),Gt(t,i)}}function tw(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,i))return;tv.set(i),n.uniformMatrix3fv(this.addr,!1,tv),Gt(t,i)}}function iw(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,i))return;ev.set(i),n.uniformMatrix4fv(this.addr,!1,ev),Gt(t,i)}}function nw(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function rw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2iv(this.addr,e),Gt(t,e)}}function sw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3iv(this.addr,e),Gt(t,e)}}function ow(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4iv(this.addr,e),Gt(t,e)}}function aw(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function cw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2uiv(this.addr,e),Gt(t,e)}}function lw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3uiv(this.addr,e),Gt(t,e)}}function hw(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4uiv(this.addr,e),Gt(t,e)}}function uw(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(K_.compareFunction=vf,s=K_):s=mv,t.setTexture2D(e||s,r)}function dw(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||_v,r)}function fw(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||vv,r)}function pw(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||gv,r)}function mw(n){switch(n){case 5126:return ZS;case 35664:return KS;case 35665:return JS;case 35666:return QS;case 35674:return ew;case 35675:return tw;case 35676:return iw;case 5124:case 35670:return nw;case 35667:case 35671:return rw;case 35668:case 35672:return sw;case 35669:case 35673:return ow;case 5125:return aw;case 36294:return cw;case 36295:return lw;case 36296:return hw;case 35678:case 36198:case 36298:case 36306:case 35682:return uw;case 35679:case 36299:case 36307:return dw;case 35680:case 36300:case 36308:case 36293:return fw;case 36289:case 36303:case 36311:case 36292:return pw}}function gw(n,e){n.uniform1fv(this.addr,e)}function _w(n,e){let t=go(e,this.size,2);n.uniform2fv(this.addr,t)}function vw(n,e){let t=go(e,this.size,3);n.uniform3fv(this.addr,t)}function yw(n,e){let t=go(e,this.size,4);n.uniform4fv(this.addr,t)}function bw(n,e){let t=go(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function xw(n,e){let t=go(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Mw(n,e){let t=go(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Sw(n,e){n.uniform1iv(this.addr,e)}function ww(n,e){n.uniform2iv(this.addr,e)}function Ew(n,e){n.uniform3iv(this.addr,e)}function Tw(n,e){n.uniform4iv(this.addr,e)}function Cw(n,e){n.uniform1uiv(this.addr,e)}function Aw(n,e){n.uniform2uiv(this.addr,e)}function Iw(n,e){n.uniform3uiv(this.addr,e)}function Rw(n,e){n.uniform4uiv(this.addr,e)}function Dw(n,e,t){let i=this.cache,r=e.length,s=cu(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||mv,s[o])}function Pw(n,e,t){let i=this.cache,r=e.length,s=cu(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||_v,s[o])}function Fw(n,e,t){let i=this.cache,r=e.length,s=cu(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||vv,s[o])}function Lw(n,e,t){let i=this.cache,r=e.length,s=cu(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||gv,s[o])}function Ow(n){switch(n){case 5126:return gw;case 35664:return _w;case 35665:return vw;case 35666:return yw;case 35674:return bw;case 35675:return xw;case 35676:return Mw;case 5124:case 35670:return Sw;case 35667:case 35671:return ww;case 35668:case 35672:return Ew;case 35669:case 35673:return Tw;case 5125:return Cw;case 36294:return Aw;case 36295:return Iw;case 36296:return Rw;case 35678:case 36198:case 36298:case 36306:case 35682:return Dw;case 35679:case 36299:case 36307:return Pw;case 35680:case 36300:case 36308:case 36293:return Fw;case 36289:case 36303:case 36311:case 36292:return Lw}}var Df=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=mw(t.type)}},Pf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ow(t.type)}},Ff=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},Rf=/(\w+)(\])?(\[|\.)?/g;function nv(n,e){n.seq.push(e),n.map[e.id]=e}function Nw(n,e,t){let i=n.name,r=i.length;for(Rf.lastIndex=0;;){let s=Rf.exec(i),o=Rf.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){nv(t,l===void 0?new Df(a,n,e):new Pf(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Ff(a),nv(t,u)),t=u}}}var mo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Nw(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function rv(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var kw=37297,Uw=0;function Bw(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var sv=new Oe;function Vw(n){Je._getMatrix(sv,Je.workingColorSpace,n);let e=`mat3( ${sv.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(n)){case $o:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ov(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Bw(n.getShaderSource(e),o)}else return r}function zw(n,e){let t=Vw(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Hw(n,e){let t;switch(e){case b_:t="Linear";break;case x_:t="Reinhard";break;case M_:t="Cineon";break;case S_:t="ACESFilmic";break;case E_:t="AgX";break;case T_:t="Neutral";break;case w_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var su=new U;function Gw(){Je.getLuminanceCoefficients(su);let n=su.x.toFixed(4),e=su.y.toFixed(4),t=su.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ww(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(va).join(`
`)}function Xw(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function qw(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function va(n){return n!==""}function av(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cv(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var jw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lf(n){return n.replace(jw,$w)}var Yw=new Map;function $w(n,e){let t=Ve[e];if(t===void 0){let i=Yw.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Lf(t)}var Zw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lv(n){return n.replace(Zw,Kw)}function Kw(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function hv(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Jw(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===nf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Qg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===_n&&(e="SHADOWMAP_TYPE_VSM"),e}function Qw(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case as:case cs:e="ENVMAP_TYPE_CUBE";break;case la:e="ENVMAP_TYPE_CUBE_UV";break}return e}function eE(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case cs:e="ENVMAP_MODE_REFRACTION";break}return e}function tE(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case af:e="ENVMAP_BLENDING_MULTIPLY";break;case v_:e="ENVMAP_BLENDING_MIX";break;case y_:e="ENVMAP_BLENDING_ADD";break}return e}function iE(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function nE(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Jw(t),l=Qw(t),h=eE(t),u=tE(t),d=iE(t),m=Ww(t),g=Xw(s),v=r.createProgram(),p,f,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(va).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(va).join(`
`),f.length>0&&(f+=`
`)):(p=[hv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(va).join(`
`),f=[hv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zn?"#define TONE_MAPPING":"",t.toneMapping!==zn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==zn?Hw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,zw("linearToOutputTexel",t.outputColorSpace),Gw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(va).join(`
`)),o=Lf(o),o=av(o,t),o=cv(o,t),a=Lf(a),a=av(a,t),a=cv(a,t),o=lv(o),a=lv(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===yf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let w=E+p+o,x=E+f+a,D=rv(r,r.VERTEX_SHADER,w),R=rv(r,r.FRAGMENT_SHADER,x);r.attachShader(v,D),r.attachShader(v,R),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function T(A){if(n.debug.checkShaderErrors){let G=r.getProgramInfoLog(v).trim(),B=r.getShaderInfoLog(D).trim(),$=r.getShaderInfoLog(R).trim(),Z=!0,q=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,D,R);else{let J=ov(r,D,"vertex"),z=ov(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+G+`
`+J+`
`+z)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(B===""||$==="")&&(q=!1);q&&(A.diagnostics={runnable:Z,programLog:G,vertexShader:{log:B,prefix:p},fragmentShader:{log:$,prefix:f}})}r.deleteShader(D),r.deleteShader(R),L=new mo(r,v),M=qw(r,v)}let L;this.getUniforms=function(){return L===void 0&&T(this),L};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(v,kw)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Uw++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=D,this.fragmentShader=R,this}var rE=0,Of=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Nf(e),t.set(e,i)),i}},Nf=class{constructor(e){this.id=rE++,this.code=e,this.usedTimes=0}};function sE(n,e,t,i,r,s,o){let a=new Qo,c=new Of,l=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.vertexTextures,m=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return l.add(M),M===0?"uv":`uv${M}`}function p(M,b,A,G,B){let $=G.fog,Z=B.geometry,q=M.isMeshStandardMaterial?G.environment:null,J=(M.isMeshStandardMaterial?t:e).get(M.envMap||q),z=J&&J.mapping===la?J.image.height:null,re=g[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));let fe=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Me=fe!==void 0?fe.length:0,He=0;Z.morphAttributes.position!==void 0&&(He=1),Z.morphAttributes.normal!==void 0&&(He=2),Z.morphAttributes.color!==void 0&&(He=3);let lt,W,te,ve;if(re){let st=xn[re];lt=st.vertexShader,W=st.fragmentShader}else lt=M.vertexShader,W=M.fragmentShader,c.update(M),te=c.getVertexShaderID(M),ve=c.getFragmentShaderID(M);let se=n.getRenderTarget(),Ae=n.state.buffers.depth.getReversed(),it=B.isInstancedMesh===!0,Re=B.isBatchedMesh===!0,Tt=!!M.map,_t=!!M.matcap,Xe=!!J,C=!!M.aoMap,Pi=!!M.lightMap,$e=!!M.bumpMap,qe=!!M.normalMap,Se=!!M.displacementMap,pt=!!M.emissiveMap,xe=!!M.metalnessMap,S=!!M.roughnessMap,_=M.anisotropy>0,O=M.clearcoat>0,j=M.dispersion>0,K=M.iridescence>0,H=M.sheen>0,be=M.transmission>0,oe=_&&!!M.anisotropyMap,pe=O&&!!M.clearcoatMap,Ze=O&&!!M.clearcoatNormalMap,ee=O&&!!M.clearcoatRoughnessMap,me=K&&!!M.iridescenceMap,Ie=K&&!!M.iridescenceThicknessMap,Pe=H&&!!M.sheenColorMap,ge=H&&!!M.sheenRoughnessMap,je=!!M.specularMap,ke=!!M.specularColorMap,dt=!!M.specularIntensityMap,I=be&&!!M.transmissionMap,ae=be&&!!M.thicknessMap,V=!!M.gradientMap,Y=!!M.alphaMap,le=M.alphaTest>0,ce=!!M.alphaHash,Ne=!!M.extensions,bt=zn;M.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(bt=n.toneMapping);let Qt={shaderID:re,shaderType:M.type,shaderName:M.name,vertexShader:lt,fragmentShader:W,defines:M.defines,customVertexShaderID:te,customFragmentShaderID:ve,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Re,batchingColor:Re&&B._colorsTexture!==null,instancing:it,instancingColor:it&&B.instanceColor!==null,instancingMorph:it&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:se===null?n.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:is,alphaToCoverage:!!M.alphaToCoverage,map:Tt,matcap:_t,envMap:Xe,envMapMode:Xe&&J.mapping,envMapCubeUVHeight:z,aoMap:C,lightMap:Pi,bumpMap:$e,normalMap:qe,displacementMap:d&&Se,emissiveMap:pt,normalMapObjectSpace:qe&&M.normalMapType===D_,normalMapTangentSpace:qe&&M.normalMapType===R_,metalnessMap:xe,roughnessMap:S,anisotropy:_,anisotropyMap:oe,clearcoat:O,clearcoatMap:pe,clearcoatNormalMap:Ze,clearcoatRoughnessMap:ee,dispersion:j,iridescence:K,iridescenceMap:me,iridescenceThicknessMap:Ie,sheen:H,sheenColorMap:Pe,sheenRoughnessMap:ge,specularMap:je,specularColorMap:ke,specularIntensityMap:dt,transmission:be,transmissionMap:I,thicknessMap:ae,gradientMap:V,opaque:M.transparent===!1&&M.blending===es&&M.alphaToCoverage===!1,alphaMap:Y,alphaTest:le,alphaHash:ce,combine:M.combine,mapUv:Tt&&v(M.map.channel),aoMapUv:C&&v(M.aoMap.channel),lightMapUv:Pi&&v(M.lightMap.channel),bumpMapUv:$e&&v(M.bumpMap.channel),normalMapUv:qe&&v(M.normalMap.channel),displacementMapUv:Se&&v(M.displacementMap.channel),emissiveMapUv:pt&&v(M.emissiveMap.channel),metalnessMapUv:xe&&v(M.metalnessMap.channel),roughnessMapUv:S&&v(M.roughnessMap.channel),anisotropyMapUv:oe&&v(M.anisotropyMap.channel),clearcoatMapUv:pe&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:Ze&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:ge&&v(M.sheenRoughnessMap.channel),specularMapUv:je&&v(M.specularMap.channel),specularColorMapUv:ke&&v(M.specularColorMap.channel),specularIntensityMapUv:dt&&v(M.specularIntensityMap.channel),transmissionMapUv:I&&v(M.transmissionMap.channel),thicknessMapUv:ae&&v(M.thicknessMap.channel),alphaMapUv:Y&&v(M.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(qe||_),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Z.attributes.uv&&(Tt||Y),fog:!!$,useFog:M.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ae,skinning:B.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:He,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:bt,decodeVideoTexture:Tt&&M.map.isVideoTexture===!0&&Je.getTransfer(M.map.colorSpace)===ot,decodeVideoTextureEmissive:pt&&M.emissiveMap.isVideoTexture===!0&&Je.getTransfer(M.emissiveMap.colorSpace)===ot,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===vn,flipSided:M.side===mi,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ne&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&M.extensions.multiDraw===!0||Re)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Qt.vertexUv1s=l.has(1),Qt.vertexUv2s=l.has(2),Qt.vertexUv3s=l.has(3),l.clear(),Qt}function f(M){let b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(let A in M.defines)b.push(A),b.push(M.defines[A]);return M.isRawShaderMaterial===!1&&(E(b,M),w(b,M),b.push(n.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function E(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function w(M,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),M.push(a.mask)}function x(M){let b=g[M.type],A;if(b){let G=xn[b];A=W_.clone(G.uniforms)}else A=M.uniforms;return A}function D(M,b){let A;for(let G=0,B=h.length;G<B;G++){let $=h[G];if($.cacheKey===b){A=$,++A.usedTimes;break}}return A===void 0&&(A=new nE(n,b,M,s),h.push(A)),A}function R(M){if(--M.usedTimes===0){let b=h.indexOf(M);h[b]=h[h.length-1],h.pop(),M.destroy()}}function T(M){c.remove(M)}function L(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:x,acquireProgram:D,releaseProgram:R,releaseShaderCache:T,programs:h,dispose:L}}function oE(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function aE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function uv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function dv(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(u,d,m,g,v,p){let f=n[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:v,group:p},n[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=v,f.group=p),e++,f}function a(u,d,m,g,v,p){let f=o(u,d,m,g,v,p);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):t.push(f)}function c(u,d,m,g,v,p){let f=o(u,d,m,g,v,p);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):t.unshift(f)}function l(u,d){t.length>1&&t.sort(u||aE),i.length>1&&i.sort(d||uv),r.length>1&&r.sort(d||uv)}function h(){for(let u=e,d=n.length;u<d;u++){let m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:h,sort:l}}function cE(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new dv,n.set(i,[o])):r>=s.length?(o=new dv,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function lE(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Qe};break;case"SpotLight":t={position:new U,direction:new U,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function hE(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var uE=0;function dE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function fE(n){let e=new lE,t=hE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new U);let r=new U,s=new kt,o=new kt;function a(l){let h=0,u=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let m=0,g=0,v=0,p=0,f=0,E=0,w=0,x=0,D=0,R=0,T=0;l.sort(dE);for(let M=0,b=l.length;M<b;M++){let A=l[M],G=A.color,B=A.intensity,$=A.distance,Z=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=G.r*B,u+=G.g*B,d+=G.b*B;else if(A.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(A.sh.coefficients[q],B);T++}else if(A.isDirectionalLight){let q=e.get(A);if(q.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let J=A.shadow,z=t.get(A);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,i.directionalShadow[m]=z,i.directionalShadowMap[m]=Z,i.directionalShadowMatrix[m]=A.shadow.matrix,E++}i.directional[m]=q,m++}else if(A.isSpotLight){let q=e.get(A);q.position.setFromMatrixPosition(A.matrixWorld),q.color.copy(G).multiplyScalar(B),q.distance=$,q.coneCos=Math.cos(A.angle),q.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),q.decay=A.decay,i.spot[v]=q;let J=A.shadow;if(A.map&&(i.spotLightMap[D]=A.map,D++,J.updateMatrices(A),A.castShadow&&R++),i.spotLightMatrix[v]=J.matrix,A.castShadow){let z=t.get(A);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,i.spotShadow[v]=z,i.spotShadowMap[v]=Z,x++}v++}else if(A.isRectAreaLight){let q=e.get(A);q.color.copy(G).multiplyScalar(B),q.halfWidth.set(A.width*.5,0,0),q.halfHeight.set(0,A.height*.5,0),i.rectArea[p]=q,p++}else if(A.isPointLight){let q=e.get(A);if(q.color.copy(A.color).multiplyScalar(A.intensity),q.distance=A.distance,q.decay=A.decay,A.castShadow){let J=A.shadow,z=t.get(A);z.shadowIntensity=J.intensity,z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,z.shadowCameraNear=J.camera.near,z.shadowCameraFar=J.camera.far,i.pointShadow[g]=z,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=A.shadow.matrix,w++}i.point[g]=q,g++}else if(A.isHemisphereLight){let q=e.get(A);q.skyColor.copy(A.color).multiplyScalar(B),q.groundColor.copy(A.groundColor).multiplyScalar(B),i.hemi[f]=q,f++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let L=i.hash;(L.directionalLength!==m||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==p||L.hemiLength!==f||L.numDirectionalShadows!==E||L.numPointShadows!==w||L.numSpotShadows!==x||L.numSpotMaps!==D||L.numLightProbes!==T)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=p,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=x+D-R,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=T,L.directionalLength=m,L.pointLength=g,L.spotLength=v,L.rectAreaLength=p,L.hemiLength=f,L.numDirectionalShadows=E,L.numPointShadows=w,L.numSpotShadows=x,L.numSpotMaps=D,L.numLightProbes=T,i.version=uE++)}function c(l,h){let u=0,d=0,m=0,g=0,v=0,p=h.matrixWorldInverse;for(let f=0,E=l.length;f<E;f++){let w=l[f];if(w.isDirectionalLight){let x=i.directional[u];x.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(p),u++}else if(w.isSpotLight){let x=i.spot[m];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(p),m++}else if(w.isRectAreaLight){let x=i.rectArea[g];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(p),o.identity(),s.copy(w.matrixWorld),s.premultiply(p),o.extractRotation(s),x.halfWidth.set(w.width*.5,0,0),x.halfHeight.set(0,w.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){let x=i.point[d];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(p),d++}else if(w.isHemisphereLight){let x=i.hemi[v];x.direction.setFromMatrixPosition(w.matrixWorld),x.direction.transformDirection(p),v++}}}return{setup:a,setupView:c,state:i}}function fv(n){let e=new fE(n),t=[],i=[];function r(h){l.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function pE(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new fv(n),e.set(r,[a])):s>=o.length?(a=new fv(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var mE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gE=`uniform sampler2D shadow_pass;
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
}`;function _E(n,e,t){let i=new sa,r=new ct,s=new ct,o=new Et,a=new nh({depthPacking:I_}),c=new rh,l={},h=t.maxTextureSize,u={[kn]:mi,[mi]:kn,[vn]:vn},d=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:mE,fragmentShader:gE}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new Sr;g.setAttribute("position",new Ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Mi(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nf;let f=this.type;this.render=function(R,T,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;let M=n.getRenderTarget(),b=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),G=n.state;G.setBlending(Vn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let B=f!==_n&&this.type===_n,$=f===_n&&this.type!==_n;for(let Z=0,q=R.length;Z<q;Z++){let J=R[Z],z=J.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);let re=z.getFrameExtents();if(r.multiply(re),s.copy(z.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/re.x),r.x=s.x*re.x,z.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/re.y),r.y=s.y*re.y,z.mapSize.y=s.y)),z.map===null||B===!0||$===!0){let Me=this.type!==_n?{minFilter:zi,magFilter:zi}:{};z.map!==null&&z.map.dispose(),z.map=new gn(r.x,r.y,Me),z.map.texture.name=J.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();let fe=z.getViewportCount();for(let Me=0;Me<fe;Me++){let He=z.getViewport(Me);o.set(s.x*He.x,s.y*He.y,s.x*He.z,s.y*He.w),G.viewport(o),z.updateMatrices(J,Me),i=z.getFrustum(),x(T,L,z.camera,J,this.type)}z.isPointLightShadow!==!0&&this.type===_n&&E(z,L),z.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(M,b,A)};function E(R,T){let L=e.update(v);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new gn(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(T,null,L,d,v,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(T,null,L,m,v,null)}function w(R,T,L,M){let b=null,A=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(A!==void 0)b=A;else if(b=L.isPointLight===!0?c:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let G=b.uuid,B=T.uuid,$=l[G];$===void 0&&($={},l[G]=$);let Z=$[B];Z===void 0&&(Z=b.clone(),$[B]=Z,T.addEventListener("dispose",D)),b=Z}if(b.visible=T.visible,b.wireframe=T.wireframe,M===_n?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:u[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,L.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let G=n.properties.get(b);G.light=L}return b}function x(R,T,L,M,b){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&b===_n)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);let B=e.update(R),$=R.material;if(Array.isArray($)){let Z=B.groups;for(let q=0,J=Z.length;q<J;q++){let z=Z[q],re=$[z.materialIndex];if(re&&re.visible){let fe=w(R,re,M,b);R.onBeforeShadow(n,R,T,L,B,fe,z),n.renderBufferDirect(L,null,B,fe,R,z),R.onAfterShadow(n,R,T,L,B,fe,z)}}}else if($.visible){let Z=w(R,$,M,b);R.onBeforeShadow(n,R,T,L,B,Z,null),n.renderBufferDirect(L,null,B,Z,R,null),R.onAfterShadow(n,R,T,L,B,Z,null)}}let G=R.children;for(let B=0,$=G.length;B<$;B++)x(G[B],T,L,M,b)}function D(R){R.target.removeEventListener("dispose",D);for(let L in l){let M=l[L],b=R.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}var vE={[mh]:gh,[_h]:bh,[vh]:xh,[ts]:yh,[gh]:mh,[bh]:_h,[xh]:vh,[yh]:ts};function yE(n,e){function t(){let I=!1,ae=new Et,V=null,Y=new Et(0,0,0,0);return{setMask:function(le){V!==le&&!I&&(n.colorMask(le,le,le,le),V=le)},setLocked:function(le){I=le},setClear:function(le,ce,Ne,bt,Qt){Qt===!0&&(le*=bt,ce*=bt,Ne*=bt),ae.set(le,ce,Ne,bt),Y.equals(ae)===!1&&(n.clearColor(le,ce,Ne,bt),Y.copy(ae))},reset:function(){I=!1,V=null,Y.set(-1,0,0,0)}}}function i(){let I=!1,ae=!1,V=null,Y=null,le=null;return{setReversed:function(ce){if(ae!==ce){let Ne=e.get("EXT_clip_control");ce?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),ae=ce;let bt=le;le=null,this.setClear(bt)}},getReversed:function(){return ae},setTest:function(ce){ce?se(n.DEPTH_TEST):Ae(n.DEPTH_TEST)},setMask:function(ce){V!==ce&&!I&&(n.depthMask(ce),V=ce)},setFunc:function(ce){if(ae&&(ce=vE[ce]),Y!==ce){switch(ce){case mh:n.depthFunc(n.NEVER);break;case gh:n.depthFunc(n.ALWAYS);break;case _h:n.depthFunc(n.LESS);break;case ts:n.depthFunc(n.LEQUAL);break;case vh:n.depthFunc(n.EQUAL);break;case yh:n.depthFunc(n.GEQUAL);break;case bh:n.depthFunc(n.GREATER);break;case xh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Y=ce}},setLocked:function(ce){I=ce},setClear:function(ce){le!==ce&&(ae&&(ce=1-ce),n.clearDepth(ce),le=ce)},reset:function(){I=!1,V=null,Y=null,le=null,ae=!1}}}function r(){let I=!1,ae=null,V=null,Y=null,le=null,ce=null,Ne=null,bt=null,Qt=null;return{setTest:function(st){I||(st?se(n.STENCIL_TEST):Ae(n.STENCIL_TEST))},setMask:function(st){ae!==st&&!I&&(n.stencilMask(st),ae=st)},setFunc:function(st,Gi,Mn){(V!==st||Y!==Gi||le!==Mn)&&(n.stencilFunc(st,Gi,Mn),V=st,Y=Gi,le=Mn)},setOp:function(st,Gi,Mn){(ce!==st||Ne!==Gi||bt!==Mn)&&(n.stencilOp(st,Gi,Mn),ce=st,Ne=Gi,bt=Mn)},setLocked:function(st){I=st},setClear:function(st){Qt!==st&&(n.clearStencil(st),Qt=st)},reset:function(){I=!1,ae=null,V=null,Y=null,le=null,ce=null,Ne=null,bt=null,Qt=null}}}let s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,m=[],g=null,v=!1,p=null,f=null,E=null,w=null,x=null,D=null,R=null,T=new Qe(0,0,0),L=0,M=!1,b=null,A=null,G=null,B=null,$=null,Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,J=0,z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(z)[1]),q=J>=1):z.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),q=J>=2);let re=null,fe={},Me=n.getParameter(n.SCISSOR_BOX),He=n.getParameter(n.VIEWPORT),lt=new Et().fromArray(Me),W=new Et().fromArray(He);function te(I,ae,V,Y){let le=new Uint8Array(4),ce=n.createTexture();n.bindTexture(I,ce),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ne=0;Ne<V;Ne++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ae,0,n.RGBA,1,1,Y,0,n.RGBA,n.UNSIGNED_BYTE,le):n.texImage2D(ae+Ne,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,le);return ce}let ve={};ve[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),ve[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ve[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(n.DEPTH_TEST),o.setFunc(ts),$e(!1),qe(tf),se(n.CULL_FACE),C(Vn);function se(I){h[I]!==!0&&(n.enable(I),h[I]=!0)}function Ae(I){h[I]!==!1&&(n.disable(I),h[I]=!1)}function it(I,ae){return u[I]!==ae?(n.bindFramebuffer(I,ae),u[I]=ae,I===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ae),I===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ae),!0):!1}function Re(I,ae){let V=m,Y=!1;if(I){V=d.get(ae),V===void 0&&(V=[],d.set(ae,V));let le=I.textures;if(V.length!==le.length||V[0]!==n.COLOR_ATTACHMENT0){for(let ce=0,Ne=le.length;ce<Ne;ce++)V[ce]=n.COLOR_ATTACHMENT0+ce;V.length=le.length,Y=!0}}else V[0]!==n.BACK&&(V[0]=n.BACK,Y=!0);Y&&n.drawBuffers(V)}function Tt(I){return g!==I?(n.useProgram(I),g=I,!0):!1}let _t={[xr]:n.FUNC_ADD,[t_]:n.FUNC_SUBTRACT,[i_]:n.FUNC_REVERSE_SUBTRACT};_t[n_]=n.MIN,_t[r_]=n.MAX;let Xe={[s_]:n.ZERO,[o_]:n.ONE,[a_]:n.SRC_COLOR,[Xl]:n.SRC_ALPHA,[f_]:n.SRC_ALPHA_SATURATE,[u_]:n.DST_COLOR,[l_]:n.DST_ALPHA,[c_]:n.ONE_MINUS_SRC_COLOR,[ql]:n.ONE_MINUS_SRC_ALPHA,[d_]:n.ONE_MINUS_DST_COLOR,[h_]:n.ONE_MINUS_DST_ALPHA,[p_]:n.CONSTANT_COLOR,[m_]:n.ONE_MINUS_CONSTANT_COLOR,[g_]:n.CONSTANT_ALPHA,[__]:n.ONE_MINUS_CONSTANT_ALPHA};function C(I,ae,V,Y,le,ce,Ne,bt,Qt,st){if(I===Vn){v===!0&&(Ae(n.BLEND),v=!1);return}if(v===!1&&(se(n.BLEND),v=!0),I!==e_){if(I!==p||st!==M){if((f!==xr||x!==xr)&&(n.blendEquation(n.FUNC_ADD),f=xr,x=xr),st)switch(I){case es:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rf:n.blendFunc(n.ONE,n.ONE);break;case sf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case of:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case es:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rf:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case sf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case of:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}E=null,w=null,D=null,R=null,T.set(0,0,0),L=0,p=I,M=st}return}le=le||ae,ce=ce||V,Ne=Ne||Y,(ae!==f||le!==x)&&(n.blendEquationSeparate(_t[ae],_t[le]),f=ae,x=le),(V!==E||Y!==w||ce!==D||Ne!==R)&&(n.blendFuncSeparate(Xe[V],Xe[Y],Xe[ce],Xe[Ne]),E=V,w=Y,D=ce,R=Ne),(bt.equals(T)===!1||Qt!==L)&&(n.blendColor(bt.r,bt.g,bt.b,Qt),T.copy(bt),L=Qt),p=I,M=!1}function Pi(I,ae){I.side===vn?Ae(n.CULL_FACE):se(n.CULL_FACE);let V=I.side===mi;ae&&(V=!V),$e(V),I.blending===es&&I.transparent===!1?C(Vn):C(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);let Y=I.stencilWrite;a.setTest(Y),Y&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),pt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?se(n.SAMPLE_ALPHA_TO_COVERAGE):Ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function $e(I){b!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),b=I)}function qe(I){I!==Kg?(se(n.CULL_FACE),I!==A&&(I===tf?n.cullFace(n.BACK):I===Jg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ae(n.CULL_FACE),A=I}function Se(I){I!==G&&(q&&n.lineWidth(I),G=I)}function pt(I,ae,V){I?(se(n.POLYGON_OFFSET_FILL),(B!==ae||$!==V)&&(n.polygonOffset(ae,V),B=ae,$=V)):Ae(n.POLYGON_OFFSET_FILL)}function xe(I){I?se(n.SCISSOR_TEST):Ae(n.SCISSOR_TEST)}function S(I){I===void 0&&(I=n.TEXTURE0+Z-1),re!==I&&(n.activeTexture(I),re=I)}function _(I,ae,V){V===void 0&&(re===null?V=n.TEXTURE0+Z-1:V=re);let Y=fe[V];Y===void 0&&(Y={type:void 0,texture:void 0},fe[V]=Y),(Y.type!==I||Y.texture!==ae)&&(re!==V&&(n.activeTexture(V),re=V),n.bindTexture(I,ae||ve[I]),Y.type=I,Y.texture=ae)}function O(){let I=fe[re];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function j(){try{n.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{n.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function H(){try{n.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{n.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{n.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(){try{n.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ze(){try{n.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{n.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{n.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ie(){try{n.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pe(I){lt.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),lt.copy(I))}function ge(I){W.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),W.copy(I))}function je(I,ae){let V=l.get(ae);V===void 0&&(V=new WeakMap,l.set(ae,V));let Y=V.get(I);Y===void 0&&(Y=n.getUniformBlockIndex(ae,I.name),V.set(I,Y))}function ke(I,ae){let Y=l.get(ae).get(I);c.get(ae)!==Y&&(n.uniformBlockBinding(ae,Y,I.__bindingPointIndex),c.set(ae,Y))}function dt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},re=null,fe={},u={},d=new WeakMap,m=[],g=null,v=!1,p=null,f=null,E=null,w=null,x=null,D=null,R=null,T=new Qe(0,0,0),L=0,M=!1,b=null,A=null,G=null,B=null,$=null,lt.set(0,0,n.canvas.width,n.canvas.height),W.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:se,disable:Ae,bindFramebuffer:it,drawBuffers:Re,useProgram:Tt,setBlending:C,setMaterial:Pi,setFlipSided:$e,setCullFace:qe,setLineWidth:Se,setPolygonOffset:pt,setScissorTest:xe,activeTexture:S,bindTexture:_,unbindTexture:O,compressedTexImage2D:j,compressedTexImage3D:K,texImage2D:me,texImage3D:Ie,updateUBOMapping:je,uniformBlockBinding:ke,texStorage2D:Ze,texStorage3D:ee,texSubImage2D:H,texSubImage3D:be,compressedTexSubImage2D:oe,compressedTexSubImage3D:pe,scissor:Pe,viewport:ge,reset:dt}}function bE(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ct,h=new WeakMap,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,_){return m?new OffscreenCanvas(S,_):Ko("canvas")}function v(S,_,O){let j=1,K=xe(S);if((K.width>O||K.height>O)&&(j=O/Math.max(K.width,K.height)),j<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let H=Math.floor(j*K.width),be=Math.floor(j*K.height);u===void 0&&(u=g(H,be));let oe=_?g(H,be):u;return oe.width=H,oe.height=be,oe.getContext("2d").drawImage(S,0,0,H,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+H+"x"+be+")."),oe}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),S;return S}function p(S){return S.generateMipmaps}function f(S){n.generateMipmap(S)}function E(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(S,_,O,j,K=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let H=_;if(_===n.RED&&(O===n.FLOAT&&(H=n.R32F),O===n.HALF_FLOAT&&(H=n.R16F),O===n.UNSIGNED_BYTE&&(H=n.R8)),_===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(H=n.R8UI),O===n.UNSIGNED_SHORT&&(H=n.R16UI),O===n.UNSIGNED_INT&&(H=n.R32UI),O===n.BYTE&&(H=n.R8I),O===n.SHORT&&(H=n.R16I),O===n.INT&&(H=n.R32I)),_===n.RG&&(O===n.FLOAT&&(H=n.RG32F),O===n.HALF_FLOAT&&(H=n.RG16F),O===n.UNSIGNED_BYTE&&(H=n.RG8)),_===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(H=n.RG8UI),O===n.UNSIGNED_SHORT&&(H=n.RG16UI),O===n.UNSIGNED_INT&&(H=n.RG32UI),O===n.BYTE&&(H=n.RG8I),O===n.SHORT&&(H=n.RG16I),O===n.INT&&(H=n.RG32I)),_===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(H=n.RGB8UI),O===n.UNSIGNED_SHORT&&(H=n.RGB16UI),O===n.UNSIGNED_INT&&(H=n.RGB32UI),O===n.BYTE&&(H=n.RGB8I),O===n.SHORT&&(H=n.RGB16I),O===n.INT&&(H=n.RGB32I)),_===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(H=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(H=n.RGBA16UI),O===n.UNSIGNED_INT&&(H=n.RGBA32UI),O===n.BYTE&&(H=n.RGBA8I),O===n.SHORT&&(H=n.RGBA16I),O===n.INT&&(H=n.RGBA32I)),_===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(H=n.RGB9_E5),_===n.RGBA){let be=K?$o:Je.getTransfer(j);O===n.FLOAT&&(H=n.RGBA32F),O===n.HALF_FLOAT&&(H=n.RGBA16F),O===n.UNSIGNED_BYTE&&(H=be===ot?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(H=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(H=n.RGB5_A1)}return(H===n.R16F||H===n.R32F||H===n.RG16F||H===n.RG32F||H===n.RGBA16F||H===n.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function x(S,_){let O;return S?_===null||_===Ar||_===ho?O=n.DEPTH24_STENCIL8:_===bn?O=n.DEPTH32F_STENCIL8:_===co&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ar||_===ho?O=n.DEPTH_COMPONENT24:_===bn?O=n.DEPTH_COMPONENT32F:_===co&&(O=n.DEPTH_COMPONENT16),O}function D(S,_){return p(S)===!0||S.isFramebufferTexture&&S.minFilter!==zi&&S.minFilter!==nn?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function R(S){let _=S.target;_.removeEventListener("dispose",R),L(_),_.isVideoTexture&&h.delete(_)}function T(S){let _=S.target;_.removeEventListener("dispose",T),b(_)}function L(S){let _=i.get(S);if(_.__webglInit===void 0)return;let O=S.source,j=d.get(O);if(j){let K=j[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&M(S),Object.keys(j).length===0&&d.delete(O)}i.remove(S)}function M(S){let _=i.get(S);n.deleteTexture(_.__webglTexture);let O=S.source,j=d.get(O);delete j[_.__cacheKey],o.memory.textures--}function b(S){let _=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(_.__webglFramebuffer[j]))for(let K=0;K<_.__webglFramebuffer[j].length;K++)n.deleteFramebuffer(_.__webglFramebuffer[j][K]);else n.deleteFramebuffer(_.__webglFramebuffer[j]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[j])}else{if(Array.isArray(_.__webglFramebuffer))for(let j=0;j<_.__webglFramebuffer.length;j++)n.deleteFramebuffer(_.__webglFramebuffer[j]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let j=0;j<_.__webglColorRenderbuffer.length;j++)_.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[j]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let O=S.textures;for(let j=0,K=O.length;j<K;j++){let H=i.get(O[j]);H.__webglTexture&&(n.deleteTexture(H.__webglTexture),o.memory.textures--),i.remove(O[j])}i.remove(S)}let A=0;function G(){A=0}function B(){let S=A;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),A+=1,S}function $(S){let _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function Z(S,_){let O=i.get(S);if(S.isVideoTexture&&Se(S),S.isRenderTargetTexture===!1&&S.version>0&&O.__version!==S.version){let j=S.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(O,S,_);return}}t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+_)}function q(S,_){let O=i.get(S);if(S.version>0&&O.__version!==S.version){W(O,S,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+_)}function J(S,_){let O=i.get(S);if(S.version>0&&O.__version!==S.version){W(O,S,_);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+_)}function z(S,_){let O=i.get(S);if(S.version>0&&O.__version!==S.version){te(O,S,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+_)}let re={[jl]:n.REPEAT,[br]:n.CLAMP_TO_EDGE,[Yl]:n.MIRRORED_REPEAT},fe={[zi]:n.NEAREST,[C_]:n.NEAREST_MIPMAP_NEAREST,[ha]:n.NEAREST_MIPMAP_LINEAR,[nn]:n.LINEAR,[wh]:n.LINEAR_MIPMAP_NEAREST,[Cr]:n.LINEAR_MIPMAP_LINEAR},Me={[P_]:n.NEVER,[U_]:n.ALWAYS,[F_]:n.LESS,[vf]:n.LEQUAL,[L_]:n.EQUAL,[k_]:n.GEQUAL,[O_]:n.GREATER,[N_]:n.NOTEQUAL};function He(S,_){if(_.type===bn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===nn||_.magFilter===wh||_.magFilter===ha||_.magFilter===Cr||_.minFilter===nn||_.minFilter===wh||_.minFilter===ha||_.minFilter===Cr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,re[_.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,re[_.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,re[_.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,fe[_.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,fe[_.minFilter]),_.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,Me[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===zi||_.minFilter!==ha&&_.minFilter!==Cr||_.type===bn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function lt(S,_){let O=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",R));let j=_.source,K=d.get(j);K===void 0&&(K={},d.set(j,K));let H=$(_);if(H!==S.__cacheKey){K[H]===void 0&&(K[H]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),K[H].usedTimes++;let be=K[S.__cacheKey];be!==void 0&&(K[S.__cacheKey].usedTimes--,be.usedTimes===0&&M(_)),S.__cacheKey=H,S.__webglTexture=K[H].texture}return O}function W(S,_,O){let j=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(j=n.TEXTURE_3D);let K=lt(S,_),H=_.source;t.bindTexture(j,S.__webglTexture,n.TEXTURE0+O);let be=i.get(H);if(H.version!==be.__version||K===!0){t.activeTexture(n.TEXTURE0+O);let oe=Je.getPrimaries(Je.workingColorSpace),pe=_.colorSpace===Hn?null:Je.getPrimaries(_.colorSpace),Ze=_.colorSpace===Hn||oe===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let ee=v(_.image,!1,r.maxTextureSize);ee=pt(_,ee);let me=s.convert(_.format,_.colorSpace),Ie=s.convert(_.type),Pe=w(_.internalFormat,me,Ie,_.colorSpace,_.isVideoTexture);He(j,_);let ge,je=_.mipmaps,ke=_.isVideoTexture!==!0,dt=be.__version===void 0||K===!0,I=H.dataReady,ae=D(_,ee);if(_.isDepthTexture)Pe=x(_.format===uo,_.type),dt&&(ke?t.texStorage2D(n.TEXTURE_2D,1,Pe,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,Pe,ee.width,ee.height,0,me,Ie,null));else if(_.isDataTexture)if(je.length>0){ke&&dt&&t.texStorage2D(n.TEXTURE_2D,ae,Pe,je[0].width,je[0].height);for(let V=0,Y=je.length;V<Y;V++)ge=je[V],ke?I&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,ge.width,ge.height,me,Ie,ge.data):t.texImage2D(n.TEXTURE_2D,V,Pe,ge.width,ge.height,0,me,Ie,ge.data);_.generateMipmaps=!1}else ke?(dt&&t.texStorage2D(n.TEXTURE_2D,ae,Pe,ee.width,ee.height),I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ee.width,ee.height,me,Ie,ee.data)):t.texImage2D(n.TEXTURE_2D,0,Pe,ee.width,ee.height,0,me,Ie,ee.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){ke&&dt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,Pe,je[0].width,je[0].height,ee.depth);for(let V=0,Y=je.length;V<Y;V++)if(ge=je[V],_.format!==Hi)if(me!==null)if(ke){if(I)if(_.layerUpdates.size>0){let le=wf(ge.width,ge.height,_.format,_.type);for(let ce of _.layerUpdates){let Ne=ge.data.subarray(ce*le/ge.data.BYTES_PER_ELEMENT,(ce+1)*le/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,ce,ge.width,ge.height,1,me,Ne)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,ge.width,ge.height,ee.depth,me,ge.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,V,Pe,ge.width,ge.height,ee.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?I&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,ge.width,ge.height,ee.depth,me,Ie,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,V,Pe,ge.width,ge.height,ee.depth,0,me,Ie,ge.data)}else{ke&&dt&&t.texStorage2D(n.TEXTURE_2D,ae,Pe,je[0].width,je[0].height);for(let V=0,Y=je.length;V<Y;V++)ge=je[V],_.format!==Hi?me!==null?ke?I&&t.compressedTexSubImage2D(n.TEXTURE_2D,V,0,0,ge.width,ge.height,me,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,V,Pe,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?I&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,ge.width,ge.height,me,Ie,ge.data):t.texImage2D(n.TEXTURE_2D,V,Pe,ge.width,ge.height,0,me,Ie,ge.data)}else if(_.isDataArrayTexture)if(ke){if(dt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,Pe,ee.width,ee.height,ee.depth),I)if(_.layerUpdates.size>0){let V=wf(ee.width,ee.height,_.format,_.type);for(let Y of _.layerUpdates){let le=ee.data.subarray(Y*V/ee.data.BYTES_PER_ELEMENT,(Y+1)*V/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Y,ee.width,ee.height,1,me,Ie,le)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,me,Ie,ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Pe,ee.width,ee.height,ee.depth,0,me,Ie,ee.data);else if(_.isData3DTexture)ke?(dt&&t.texStorage3D(n.TEXTURE_3D,ae,Pe,ee.width,ee.height,ee.depth),I&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,me,Ie,ee.data)):t.texImage3D(n.TEXTURE_3D,0,Pe,ee.width,ee.height,ee.depth,0,me,Ie,ee.data);else if(_.isFramebufferTexture){if(dt)if(ke)t.texStorage2D(n.TEXTURE_2D,ae,Pe,ee.width,ee.height);else{let V=ee.width,Y=ee.height;for(let le=0;le<ae;le++)t.texImage2D(n.TEXTURE_2D,le,Pe,V,Y,0,me,Ie,null),V>>=1,Y>>=1}}else if(je.length>0){if(ke&&dt){let V=xe(je[0]);t.texStorage2D(n.TEXTURE_2D,ae,Pe,V.width,V.height)}for(let V=0,Y=je.length;V<Y;V++)ge=je[V],ke?I&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,me,Ie,ge):t.texImage2D(n.TEXTURE_2D,V,Pe,me,Ie,ge);_.generateMipmaps=!1}else if(ke){if(dt){let V=xe(ee);t.texStorage2D(n.TEXTURE_2D,ae,Pe,V.width,V.height)}I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,Ie,ee)}else t.texImage2D(n.TEXTURE_2D,0,Pe,me,Ie,ee);p(_)&&f(j),be.__version=H.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function te(S,_,O){if(_.image.length!==6)return;let j=lt(S,_),K=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+O);let H=i.get(K);if(K.version!==H.__version||j===!0){t.activeTexture(n.TEXTURE0+O);let be=Je.getPrimaries(Je.workingColorSpace),oe=_.colorSpace===Hn?null:Je.getPrimaries(_.colorSpace),pe=_.colorSpace===Hn||be===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let Ze=_.isCompressedTexture||_.image[0].isCompressedTexture,ee=_.image[0]&&_.image[0].isDataTexture,me=[];for(let Y=0;Y<6;Y++)!Ze&&!ee?me[Y]=v(_.image[Y],!0,r.maxCubemapSize):me[Y]=ee?_.image[Y].image:_.image[Y],me[Y]=pt(_,me[Y]);let Ie=me[0],Pe=s.convert(_.format,_.colorSpace),ge=s.convert(_.type),je=w(_.internalFormat,Pe,ge,_.colorSpace),ke=_.isVideoTexture!==!0,dt=H.__version===void 0||j===!0,I=K.dataReady,ae=D(_,Ie);He(n.TEXTURE_CUBE_MAP,_);let V;if(Ze){ke&&dt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ae,je,Ie.width,Ie.height);for(let Y=0;Y<6;Y++){V=me[Y].mipmaps;for(let le=0;le<V.length;le++){let ce=V[le];_.format!==Hi?Pe!==null?ke?I&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,le,0,0,ce.width,ce.height,Pe,ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,le,je,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,le,0,0,ce.width,ce.height,Pe,ge,ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,le,je,ce.width,ce.height,0,Pe,ge,ce.data)}}}else{if(V=_.mipmaps,ke&&dt){V.length>0&&ae++;let Y=xe(me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ae,je,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(ee){ke?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,me[Y].width,me[Y].height,Pe,ge,me[Y].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,je,me[Y].width,me[Y].height,0,Pe,ge,me[Y].data);for(let le=0;le<V.length;le++){let Ne=V[le].image[Y].image;ke?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,le+1,0,0,Ne.width,Ne.height,Pe,ge,Ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,le+1,je,Ne.width,Ne.height,0,Pe,ge,Ne.data)}}else{ke?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Pe,ge,me[Y]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,je,Pe,ge,me[Y]);for(let le=0;le<V.length;le++){let ce=V[le];ke?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,le+1,0,0,Pe,ge,ce.image[Y]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,le+1,je,Pe,ge,ce.image[Y])}}}p(_)&&f(n.TEXTURE_CUBE_MAP),H.__version=K.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function ve(S,_,O,j,K,H){let be=s.convert(O.format,O.colorSpace),oe=s.convert(O.type),pe=w(O.internalFormat,be,oe,O.colorSpace),Ze=i.get(_),ee=i.get(O);if(ee.__renderTarget=_,!Ze.__hasExternalTextures){let me=Math.max(1,_.width>>H),Ie=Math.max(1,_.height>>H);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,H,pe,me,Ie,_.depth,0,be,oe,null):t.texImage2D(K,H,pe,me,Ie,0,be,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),qe(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,K,ee.__webglTexture,0,$e(_)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,K,ee.__webglTexture,H),t.bindFramebuffer(n.FRAMEBUFFER,null)}function se(S,_,O){if(n.bindRenderbuffer(n.RENDERBUFFER,S),_.depthBuffer){let j=_.depthTexture,K=j&&j.isDepthTexture?j.type:null,H=x(_.stencilBuffer,K),be=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=$e(_);qe(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,H,_.width,_.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,H,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,H,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,S)}else{let j=_.textures;for(let K=0;K<j.length;K++){let H=j[K],be=s.convert(H.format,H.colorSpace),oe=s.convert(H.type),pe=w(H.internalFormat,be,oe,H.colorSpace),Ze=$e(_);O&&qe(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ze,pe,_.width,_.height):qe(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ze,pe,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,pe,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ae(S,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=i.get(_.depthTexture);j.__renderTarget=_,(!j.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Z(_.depthTexture,0);let K=j.__webglTexture,H=$e(_);if(_.depthTexture.format===ro)qe(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(_.depthTexture.format===uo)qe(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function it(S){let _=i.get(S),O=S.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==S.depthTexture){let j=S.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),j){let K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,j.removeEventListener("dispose",K)};j.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=j}if(S.depthTexture&&!_.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ae(_.__webglFramebuffer,S)}else if(O){_.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[j]),_.__webglDepthbuffer[j]===void 0)_.__webglDepthbuffer[j]=n.createRenderbuffer(),se(_.__webglDepthbuffer[j],S,!1);else{let K=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=_.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,H)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),se(_.__webglDepthbuffer,S,!1);else{let j=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,K)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Re(S,_,O){let j=i.get(S);_!==void 0&&ve(j.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&it(S)}function Tt(S){let _=S.texture,O=i.get(S),j=i.get(_);S.addEventListener("dispose",T);let K=S.textures,H=S.isWebGLCubeRenderTarget===!0,be=K.length>1;if(be||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=_.version,o.memory.textures++),H){O.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[oe]=[];for(let pe=0;pe<_.mipmaps.length;pe++)O.__webglFramebuffer[oe][pe]=n.createFramebuffer()}else O.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let oe=0;oe<_.mipmaps.length;oe++)O.__webglFramebuffer[oe]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(be)for(let oe=0,pe=K.length;oe<pe;oe++){let Ze=i.get(K[oe]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&qe(S)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let oe=0;oe<K.length;oe++){let pe=K[oe];O.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[oe]);let Ze=s.convert(pe.format,pe.colorSpace),ee=s.convert(pe.type),me=w(pe.internalFormat,Ze,ee,pe.colorSpace,S.isXRRenderTarget===!0),Ie=$e(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,me,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,O.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),se(O.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(H){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),He(n.TEXTURE_CUBE_MAP,_);for(let oe=0;oe<6;oe++)if(_.mipmaps&&_.mipmaps.length>0)for(let pe=0;pe<_.mipmaps.length;pe++)ve(O.__webglFramebuffer[oe][pe],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,pe);else ve(O.__webglFramebuffer[oe],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);p(_)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let oe=0,pe=K.length;oe<pe;oe++){let Ze=K[oe],ee=i.get(Ze);t.bindTexture(n.TEXTURE_2D,ee.__webglTexture),He(n.TEXTURE_2D,Ze),ve(O.__webglFramebuffer,S,Ze,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,0),p(Ze)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(oe=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,j.__webglTexture),He(oe,_),_.mipmaps&&_.mipmaps.length>0)for(let pe=0;pe<_.mipmaps.length;pe++)ve(O.__webglFramebuffer[pe],S,_,n.COLOR_ATTACHMENT0,oe,pe);else ve(O.__webglFramebuffer,S,_,n.COLOR_ATTACHMENT0,oe,0);p(_)&&f(oe),t.unbindTexture()}S.depthBuffer&&it(S)}function _t(S){let _=S.textures;for(let O=0,j=_.length;O<j;O++){let K=_[O];if(p(K)){let H=E(S),be=i.get(K).__webglTexture;t.bindTexture(H,be),f(H),t.unbindTexture()}}}let Xe=[],C=[];function Pi(S){if(S.samples>0){if(qe(S)===!1){let _=S.textures,O=S.width,j=S.height,K=n.COLOR_BUFFER_BIT,H=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=i.get(S),oe=_.length>1;if(oe)for(let pe=0;pe<_.length;pe++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let pe=0;pe<_.length;pe++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[pe]);let Ze=i.get(_[pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ze,0)}n.blitFramebuffer(0,0,O,j,0,0,O,j,K,n.NEAREST),c===!0&&(Xe.length=0,C.length=0,Xe.push(n.COLOR_ATTACHMENT0+pe),S.depthBuffer&&S.resolveDepthBuffer===!1&&(Xe.push(H),C.push(H),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,C)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Xe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let pe=0;pe<_.length;pe++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,be.__webglColorRenderbuffer[pe]);let Ze=i.get(_[pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,Ze,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&c){let _=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function $e(S){return Math.min(r.maxSamples,S.samples)}function qe(S){let _=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Se(S){let _=o.render.frame;h.get(S)!==_&&(h.set(S,_),S.update())}function pt(S,_){let O=S.colorSpace,j=S.format,K=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||O!==is&&O!==Hn&&(Je.getTransfer(O)===ot?(j!==Hi||K!==yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),_}function xe(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=G,this.setTexture2D=Z,this.setTexture2DArray=q,this.setTexture3D=J,this.setTextureCube=z,this.rebindTextures=Re,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=Pi,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=qe}function xE(n,e){function t(i,r=Hn){let s,o=Je.getTransfer(r);if(i===yn)return n.UNSIGNED_BYTE;if(i===Th)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ch)return n.UNSIGNED_SHORT_5_5_5_1;if(i===hf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===cf)return n.BYTE;if(i===lf)return n.SHORT;if(i===co)return n.UNSIGNED_SHORT;if(i===Eh)return n.INT;if(i===Ar)return n.UNSIGNED_INT;if(i===bn)return n.FLOAT;if(i===lo)return n.HALF_FLOAT;if(i===uf)return n.ALPHA;if(i===df)return n.RGB;if(i===Hi)return n.RGBA;if(i===ff)return n.LUMINANCE;if(i===pf)return n.LUMINANCE_ALPHA;if(i===ro)return n.DEPTH_COMPONENT;if(i===uo)return n.DEPTH_STENCIL;if(i===mf)return n.RED;if(i===Ah)return n.RED_INTEGER;if(i===gf)return n.RG;if(i===Ih)return n.RG_INTEGER;if(i===Rh)return n.RGBA_INTEGER;if(i===ua||i===da||i===fa||i===pa)if(o===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ua)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===da)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ua)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===da)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===pa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Dh||i===Ph||i===Fh||i===Lh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Dh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ph)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Lh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Oh||i===Nh||i===kh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Oh||i===Nh)return o===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===kh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Uh||i===Bh||i===Vh||i===zh||i===Hh||i===Gh||i===Wh||i===Xh||i===qh||i===jh||i===Yh||i===$h||i===Zh||i===Kh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Uh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Bh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===zh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Hh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Gh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Xh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===qh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===jh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Yh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===$h)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Kh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ma||i===Jh||i===Qh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ma)return o===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Jh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Qh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===_f||i===eu||i===tu||i===iu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ma)return s.COMPRESSED_RED_RGTC1_EXT;if(i===eu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===tu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===iu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ho?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var ME=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,SE=`
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

}`,kf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new Ir,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new rn({vertexShader:ME,fragmentShader:SE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mi(new aa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Uf=class extends Un{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,m=null,g=null,v=new kf,p=t.getContextAttributes(),f=null,E=null,w=[],x=[],D=new ct,R=null,T=new oi;T.viewport=new Et;let L=new oi;L.viewport=new Et;let M=[T,L],b=new fh,A=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let te=w[W];return te===void 0&&(te=new ao,w[W]=te),te.getTargetRaySpace()},this.getControllerGrip=function(W){let te=w[W];return te===void 0&&(te=new ao,w[W]=te),te.getGripSpace()},this.getHand=function(W){let te=w[W];return te===void 0&&(te=new ao,w[W]=te),te.getHandSpace()};function B(W){let te=x.indexOf(W.inputSource);if(te===-1)return;let ve=w[te];ve!==void 0&&(ve.update(W.inputSource,W.frame,l||o),ve.dispatchEvent({type:W.type,data:W.inputSource}))}function $(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",Z);for(let W=0;W<w.length;W++){let te=x[W];te!==null&&(x[W]=null,w[W].disconnect(te))}A=null,G=null,v.reset(),e.setRenderTarget(f),m=null,d=null,u=null,r=null,E=null,lt.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(W){return he(this,null,function*(){if(r=W,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",$),r.addEventListener("inputsourceschange",Z),p.xrCompatible!==!0&&(yield t.makeXRCompatible()),R=e.getPixelRatio(),e.getSize(D),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,se=null,Ae=null;p.depth&&(Ae=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=p.stencil?uo:ro,se=p.stencil?ho:Ar);let it={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:s};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(it),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new gn(d.textureWidth,d.textureHeight,{format:Hi,type:yn,depthTexture:new oa(d.textureWidth,d.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ve={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ve),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new gn(m.framebufferWidth,m.framebufferHeight,{format:Hi,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=yield r.requestReferenceSpace(a),lt.setContext(r),lt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Z(W){for(let te=0;te<W.removed.length;te++){let ve=W.removed[te],se=x.indexOf(ve);se>=0&&(x[se]=null,w[se].disconnect(ve))}for(let te=0;te<W.added.length;te++){let ve=W.added[te],se=x.indexOf(ve);if(se===-1){for(let it=0;it<w.length;it++)if(it>=x.length){x.push(ve),se=it;break}else if(x[it]===null){x[it]=ve,se=it;break}if(se===-1)break}let Ae=w[se];Ae&&Ae.connect(ve)}}let q=new U,J=new U;function z(W,te,ve){q.setFromMatrixPosition(te.matrixWorld),J.setFromMatrixPosition(ve.matrixWorld);let se=q.distanceTo(J),Ae=te.projectionMatrix.elements,it=ve.projectionMatrix.elements,Re=Ae[14]/(Ae[10]-1),Tt=Ae[14]/(Ae[10]+1),_t=(Ae[9]+1)/Ae[5],Xe=(Ae[9]-1)/Ae[5],C=(Ae[8]-1)/Ae[0],Pi=(it[8]+1)/it[0],$e=Re*C,qe=Re*Pi,Se=se/(-C+Pi),pt=Se*-C;if(te.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(pt),W.translateZ(Se),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Ae[10]===-1)W.projectionMatrix.copy(te.projectionMatrix),W.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let xe=Re+Se,S=Tt+Se,_=$e-pt,O=qe+(se-pt),j=_t*Tt/S*xe,K=Xe*Tt/S*xe;W.projectionMatrix.makePerspective(_,O,j,K,xe,S),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function re(W,te){te===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(te.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let te=W.near,ve=W.far;v.texture!==null&&(v.depthNear>0&&(te=v.depthNear),v.depthFar>0&&(ve=v.depthFar)),b.near=L.near=T.near=te,b.far=L.far=T.far=ve,(A!==b.near||G!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),A=b.near,G=b.far),T.layers.mask=W.layers.mask|2,L.layers.mask=W.layers.mask|4,b.layers.mask=T.layers.mask|L.layers.mask;let se=W.parent,Ae=b.cameras;re(b,se);for(let it=0;it<Ae.length;it++)re(Ae[it],se);Ae.length===2?z(b,T,L):b.projectionMatrix.copy(T.projectionMatrix),fe(W,b,se)};function fe(W,te,ve){ve===null?W.matrix.copy(te.matrixWorld):(W.matrix.copy(ve.matrixWorld),W.matrix.invert(),W.matrix.multiply(te.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(te.projectionMatrix),W.projectionMatrixInverse.copy(te.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Zl*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(W){c=W,d!==null&&(d.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(b)};let Me=null;function He(W,te){if(h=te.getViewerPose(l||o),g=te,h!==null){let ve=h.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let se=!1;ve.length!==b.cameras.length&&(b.cameras.length=0,se=!0);for(let Re=0;Re<ve.length;Re++){let Tt=ve[Re],_t=null;if(m!==null)_t=m.getViewport(Tt);else{let C=u.getViewSubImage(d,Tt);_t=C.viewport,Re===0&&(e.setRenderTargetTextures(E,C.colorTexture,C.depthStencilTexture),e.setRenderTarget(E))}let Xe=M[Re];Xe===void 0&&(Xe=new oi,Xe.layers.enable(Re),Xe.viewport=new Et,M[Re]=Xe),Xe.matrix.fromArray(Tt.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Tt.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(_t.x,_t.y,_t.width,_t.height),Re===0&&(b.matrix.copy(Xe.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),se===!0&&b.cameras.push(Xe)}let Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&u){let Re=u.getDepthInformation(ve[0]);Re&&Re.isValid&&Re.texture&&v.init(e,Re,r.renderState)}}for(let ve=0;ve<w.length;ve++){let se=x[ve],Ae=w[ve];se!==null&&Ae!==void 0&&Ae.update(se,te,l||o)}Me&&Me(W,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}let lt=new pv;lt.setAnimationLoop(He),this.setAnimationLoop=function(W){Me=W},this.dispose=function(){}}},ds=new ns,wE=new kt;function EE(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,xf(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,E,w,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),u(p,f)):f.isMeshPhongMaterial?(s(p,f),h(p,f)):f.isMeshStandardMaterial?(s(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,x)):f.isMeshMatcapMaterial?(s(p,f),g(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),v(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?c(p,f,E,w):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===mi&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===mi&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let E=e.get(f),w=E.envMap,x=E.envMapRotation;w&&(p.envMap.value=w,ds.copy(x),ds.x*=-1,ds.y*=-1,ds.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),p.envMapRotation.value.setFromMatrix4(wE.makeRotationFromEuler(ds)),p.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,E,w){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*E,p.scale.value=w*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,E){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===mi&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function v(p,f){let E=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function TE(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,w){let x=w.program;i.uniformBlockBinding(E,x)}function l(E,w){let x=r[E.id];x===void 0&&(g(E),x=h(E),r[E.id]=x,E.addEventListener("dispose",p));let D=w.program;i.updateUBOMapping(E,D);let R=e.render.frame;s[E.id]!==R&&(d(E),s[E.id]=R)}function h(E){let w=u();E.__bindingPointIndex=w;let x=n.createBuffer(),D=E.__size,R=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,D,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,x),x}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){let w=r[E.id],x=E.uniforms,D=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let R=0,T=x.length;R<T;R++){let L=Array.isArray(x[R])?x[R]:[x[R]];for(let M=0,b=L.length;M<b;M++){let A=L[M];if(m(A,R,M,D)===!0){let G=A.__offset,B=Array.isArray(A.value)?A.value:[A.value],$=0;for(let Z=0;Z<B.length;Z++){let q=B[Z],J=v(q);typeof q=="number"||typeof q=="boolean"?(A.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,G+$,A.__data)):q.isMatrix3?(A.__data[0]=q.elements[0],A.__data[1]=q.elements[1],A.__data[2]=q.elements[2],A.__data[3]=0,A.__data[4]=q.elements[3],A.__data[5]=q.elements[4],A.__data[6]=q.elements[5],A.__data[7]=0,A.__data[8]=q.elements[6],A.__data[9]=q.elements[7],A.__data[10]=q.elements[8],A.__data[11]=0):(q.toArray(A.__data,$),$+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(E,w,x,D){let R=E.value,T=w+"_"+x;if(D[T]===void 0)return typeof R=="number"||typeof R=="boolean"?D[T]=R:D[T]=R.clone(),!0;{let L=D[T];if(typeof R=="number"||typeof R=="boolean"){if(L!==R)return D[T]=R,!0}else if(L.equals(R)===!1)return L.copy(R),!0}return!1}function g(E){let w=E.uniforms,x=0,D=16;for(let T=0,L=w.length;T<L;T++){let M=Array.isArray(w[T])?w[T]:[w[T]];for(let b=0,A=M.length;b<A;b++){let G=M[b],B=Array.isArray(G.value)?G.value:[G.value];for(let $=0,Z=B.length;$<Z;$++){let q=B[$],J=v(q),z=x%D,re=z%J.boundary,fe=z+re;x+=re,fe!==0&&D-fe<J.storage&&(x+=D-fe),G.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=x,x+=J.storage}}}let R=x%D;return R>0&&(x+=D-R),E.__size=x,E.__cache={},this}function v(E){let w={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(w.boundary=4,w.storage=4):E.isVector2?(w.boundary=8,w.storage=8):E.isVector3||E.isColor?(w.boundary=16,w.storage=12):E.isVector4?(w.boundary=16,w.storage=16):E.isMatrix3?(w.boundary=48,w.storage=48):E.isMatrix4?(w.boundary=64,w.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),w}function p(E){let w=E.target;w.removeEventListener("dispose",p);let x=o.indexOf(w.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function f(){for(let E in r)n.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:c,update:l,dispose:f}}var au=class{constructor(e={}){let{canvas:t=B_(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;let g=new Uint32Array(4),v=new Int32Array(4),p=null,f=null,E=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,D=!1;this._outputColorSpace=Ii;let R=0,T=0,L=null,M=-1,b=null,A=new Et,G=new Et,B=null,$=new Qe(0),Z=0,q=t.width,J=t.height,z=1,re=null,fe=null,Me=new Et(0,0,q,J),He=new Et(0,0,q,J),lt=!1,W=new sa,te=!1,ve=!1,se=new kt,Ae=new kt,it=new U,Re=new Et,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},_t=!1;function Xe(){return L===null?z:1}let C=i;function Pi(y,P){return t.getContext(y,P)}try{let y={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ph}`),t.addEventListener("webglcontextlost",Y,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",ce,!1),C===null){let P="webgl2";if(C=Pi(P,y),C===null)throw Pi(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let $e,qe,Se,pt,xe,S,_,O,j,K,H,be,oe,pe,Ze,ee,me,Ie,Pe,ge,je,ke,dt,I;function ae(){$e=new WS(C),$e.init(),ke=new xE(C,$e),qe=new kS(C,$e,e,ke),Se=new yE(C,$e),qe.reverseDepthBuffer&&d&&Se.buffers.depth.setReversed(!0),pt=new jS(C),xe=new oE,S=new bE(C,$e,Se,xe,qe,ke,pt),_=new BS(x),O=new GS(x),j=new Qb(C),dt=new OS(C,j),K=new XS(C,j,pt,dt),H=new $S(C,K,j,pt),Pe=new YS(C,qe,S),ee=new US(xe),be=new sE(x,_,O,$e,qe,dt,ee),oe=new EE(x,xe),pe=new cE,Ze=new pE($e),Ie=new LS(x,_,O,Se,H,m,c),me=new _E(x,H,qe),I=new TE(C,pt,qe,Se),ge=new NS(C,$e,pt),je=new qS(C,$e,pt),pt.programs=be.programs,x.capabilities=qe,x.extensions=$e,x.properties=xe,x.renderLists=pe,x.shadowMap=me,x.state=Se,x.info=pt}ae();let V=new Uf(x,C);this.xr=V,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let y=$e.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=$e.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(y){y!==void 0&&(z=y,this.setSize(q,J,!1))},this.getSize=function(y){return y.set(q,J)},this.setSize=function(y,P,N=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=y,J=P,t.width=Math.floor(y*z),t.height=Math.floor(P*z),N===!0&&(t.style.width=y+"px",t.style.height=P+"px"),this.setViewport(0,0,y,P)},this.getDrawingBufferSize=function(y){return y.set(q*z,J*z).floor()},this.setDrawingBufferSize=function(y,P,N){q=y,J=P,z=N,t.width=Math.floor(y*N),t.height=Math.floor(P*N),this.setViewport(0,0,y,P)},this.getCurrentViewport=function(y){return y.copy(A)},this.getViewport=function(y){return y.copy(Me)},this.setViewport=function(y,P,N,k){y.isVector4?Me.set(y.x,y.y,y.z,y.w):Me.set(y,P,N,k),Se.viewport(A.copy(Me).multiplyScalar(z).round())},this.getScissor=function(y){return y.copy(He)},this.setScissor=function(y,P,N,k){y.isVector4?He.set(y.x,y.y,y.z,y.w):He.set(y,P,N,k),Se.scissor(G.copy(He).multiplyScalar(z).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(y){Se.setScissorTest(lt=y)},this.setOpaqueSort=function(y){re=y},this.setTransparentSort=function(y){fe=y},this.getClearColor=function(y){return y.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(y=!0,P=!0,N=!0){let k=0;if(y){let F=!1;if(L!==null){let Q=L.texture.format;F=Q===Rh||Q===Ih||Q===Ah}if(F){let Q=L.texture.type,ne=Q===yn||Q===Ar||Q===co||Q===ho||Q===Th||Q===Ch,de=Ie.getClearColor(),_e=Ie.getClearAlpha(),Fe=de.r,De=de.g,Ee=de.b;ne?(g[0]=Fe,g[1]=De,g[2]=Ee,g[3]=_e,C.clearBufferuiv(C.COLOR,0,g)):(v[0]=Fe,v[1]=De,v[2]=Ee,v[3]=_e,C.clearBufferiv(C.COLOR,0,v))}else k|=C.COLOR_BUFFER_BIT}P&&(k|=C.DEPTH_BUFFER_BIT),N&&(k|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Y,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),Ie.dispose(),pe.dispose(),Ze.dispose(),xe.dispose(),_.dispose(),O.dispose(),H.dispose(),dt.dispose(),I.dispose(),be.dispose(),V.dispose(),V.removeEventListener("sessionstart",Vf),V.removeEventListener("sessionend",zf),Rr.stop()};function Y(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let y=pt.autoReset,P=me.enabled,N=me.autoUpdate,k=me.needsUpdate,F=me.type;ae(),pt.autoReset=y,me.enabled=P,me.autoUpdate=N,me.needsUpdate=k,me.type=F}function ce(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ne(y){let P=y.target;P.removeEventListener("dispose",Ne),bt(P)}function bt(y){Qt(y),xe.remove(y)}function Qt(y){let P=xe.get(y).programs;P!==void 0&&(P.forEach(function(N){be.releaseProgram(N)}),y.isShaderMaterial&&be.releaseShaderCache(y))}this.renderBufferDirect=function(y,P,N,k,F,Q){P===null&&(P=Tt);let ne=F.isMesh&&F.matrixWorld.determinant()<0,de=Mv(y,P,N,k,F);Se.setMaterial(k,ne);let _e=N.index,Fe=1;if(k.wireframe===!0){if(_e=K.getWireframeAttribute(N),_e===void 0)return;Fe=2}let De=N.drawRange,Ee=N.attributes.position,Ke=De.start*Fe,nt=(De.start+De.count)*Fe;Q!==null&&(Ke=Math.max(Ke,Q.start*Fe),nt=Math.min(nt,(Q.start+Q.count)*Fe)),_e!==null?(Ke=Math.max(Ke,0),nt=Math.min(nt,_e.count)):Ee!=null&&(Ke=Math.max(Ke,0),nt=Math.min(nt,Ee.count));let Rt=nt-Ke;if(Rt<0||Rt===1/0)return;dt.setup(F,k,de,N,_e);let xt,et=ge;if(_e!==null&&(xt=j.get(_e),et=je,et.setIndex(xt)),F.isMesh)k.wireframe===!0?(Se.setLineWidth(k.wireframeLinewidth*Xe()),et.setMode(C.LINES)):et.setMode(C.TRIANGLES);else if(F.isLine){let Ce=k.linewidth;Ce===void 0&&(Ce=1),Se.setLineWidth(Ce*Xe()),F.isLineSegments?et.setMode(C.LINES):F.isLineLoop?et.setMode(C.LINE_LOOP):et.setMode(C.LINE_STRIP)}else F.isPoints?et.setMode(C.POINTS):F.isSprite&&et.setMode(C.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)_a("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),et.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if($e.get("WEBGL_multi_draw"))et.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Ce=F._multiDrawStarts,Kt=F._multiDrawCounts,rt=F._multiDrawCount,Wi=_e?j.get(_e).bytesPerElement:1,ms=xe.get(k).currentProgram.getUniforms();for(let Si=0;Si<rt;Si++)ms.setValue(C,"_gl_DrawID",Si),et.render(Ce[Si]/Wi,Kt[Si])}else if(F.isInstancedMesh)et.renderInstances(Ke,Rt,F.count);else if(N.isInstancedBufferGeometry){let Ce=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,Kt=Math.min(N.instanceCount,Ce);et.renderInstances(Ke,Rt,Kt)}else et.render(Ke,Rt)};function st(y,P,N){y.transparent===!0&&y.side===vn&&y.forceSinglePass===!1?(y.side=mi,y.needsUpdate=!0,ba(y,P,N),y.side=kn,y.needsUpdate=!0,ba(y,P,N),y.side=vn):ba(y,P,N)}this.compile=function(y,P,N=null){N===null&&(N=y),f=Ze.get(N),f.init(P),w.push(f),N.traverseVisible(function(F){F.isLight&&F.layers.test(P.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),y!==N&&y.traverseVisible(function(F){F.isLight&&F.layers.test(P.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights();let k=new Set;return y.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let Q=F.material;if(Q)if(Array.isArray(Q))for(let ne=0;ne<Q.length;ne++){let de=Q[ne];st(de,N,F),k.add(de)}else st(Q,N,F),k.add(Q)}),f=w.pop(),k},this.compileAsync=function(y,P,N=null){let k=this.compile(y,P,N);return new Promise(F=>{function Q(){if(k.forEach(function(ne){xe.get(ne).currentProgram.isReady()&&k.delete(ne)}),k.size===0){F(y);return}setTimeout(Q,10)}$e.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Gi=null;function Mn(y){Gi&&Gi(y)}function Vf(){Rr.stop()}function zf(){Rr.start()}let Rr=new pv;Rr.setAnimationLoop(Mn),typeof self<"u"&&Rr.setContext(self),this.setAnimationLoop=function(y){Gi=y,V.setAnimationLoop(y),y===null?Rr.stop():Rr.start()},V.addEventListener("sessionstart",Vf),V.addEventListener("sessionend",zf),this.render=function(y,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(P),P=V.getCamera()),y.isScene===!0&&y.onBeforeRender(x,y,P,L),f=Ze.get(y,w.length),f.init(P),w.push(f),Ae.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),W.setFromProjectionMatrix(Ae),ve=this.localClippingEnabled,te=ee.init(this.clippingPlanes,ve),p=pe.get(y,E.length),p.init(),E.push(p),V.enabled===!0&&V.isPresenting===!0){let Q=x.xr.getDepthSensingMesh();Q!==null&&hu(Q,P,-1/0,x.sortObjects)}hu(y,P,0,x.sortObjects),p.finish(),x.sortObjects===!0&&p.sort(re,fe),_t=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,_t&&Ie.addToRenderList(p,y),this.info.render.frame++,te===!0&&ee.beginShadows();let N=f.state.shadowsArray;me.render(N,y,P),te===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();let k=p.opaque,F=p.transmissive;if(f.setupLights(),P.isArrayCamera){let Q=P.cameras;if(F.length>0)for(let ne=0,de=Q.length;ne<de;ne++){let _e=Q[ne];Gf(k,F,y,_e)}_t&&Ie.render(y);for(let ne=0,de=Q.length;ne<de;ne++){let _e=Q[ne];Hf(p,y,_e,_e.viewport)}}else F.length>0&&Gf(k,F,y,P),_t&&Ie.render(y),Hf(p,y,P);L!==null&&T===0&&(S.updateMultisampleRenderTarget(L),S.updateRenderTargetMipmap(L)),y.isScene===!0&&y.onAfterRender(x,y,P),dt.resetDefaultState(),M=-1,b=null,w.pop(),w.length>0?(f=w[w.length-1],te===!0&&ee.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,E.pop(),E.length>0?p=E[E.length-1]:p=null};function hu(y,P,N,k){if(y.visible===!1)return;if(y.layers.test(P.layers)){if(y.isGroup)N=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(P);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||W.intersectsSprite(y)){k&&Re.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ae);let ne=H.update(y),de=y.material;de.visible&&p.push(y,ne,de,N,Re.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||W.intersectsObject(y))){let ne=H.update(y),de=y.material;if(k&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Re.copy(y.boundingSphere.center)):(ne.boundingSphere===null&&ne.computeBoundingSphere(),Re.copy(ne.boundingSphere.center)),Re.applyMatrix4(y.matrixWorld).applyMatrix4(Ae)),Array.isArray(de)){let _e=ne.groups;for(let Fe=0,De=_e.length;Fe<De;Fe++){let Ee=_e[Fe],Ke=de[Ee.materialIndex];Ke&&Ke.visible&&p.push(y,ne,Ke,N,Re.z,Ee)}}else de.visible&&p.push(y,ne,de,N,Re.z,null)}}let Q=y.children;for(let ne=0,de=Q.length;ne<de;ne++)hu(Q[ne],P,N,k)}function Hf(y,P,N,k){let F=y.opaque,Q=y.transmissive,ne=y.transparent;f.setupLightsView(N),te===!0&&ee.setGlobalState(x.clippingPlanes,N),k&&Se.viewport(A.copy(k)),F.length>0&&ya(F,P,N),Q.length>0&&ya(Q,P,N),ne.length>0&&ya(ne,P,N),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Gf(y,P,N,k){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[k.id]===void 0&&(f.state.transmissionRenderTarget[k.id]=new gn(1,1,{generateMipmaps:!0,type:$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float")?lo:yn,minFilter:Cr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));let Q=f.state.transmissionRenderTarget[k.id],ne=k.viewport||A;Q.setSize(ne.z*x.transmissionResolutionScale,ne.w*x.transmissionResolutionScale);let de=x.getRenderTarget();x.setRenderTarget(Q),x.getClearColor($),Z=x.getClearAlpha(),Z<1&&x.setClearColor(16777215,.5),x.clear(),_t&&Ie.render(N);let _e=x.toneMapping;x.toneMapping=zn;let Fe=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),f.setupLightsView(k),te===!0&&ee.setGlobalState(x.clippingPlanes,k),ya(y,N,k),S.updateMultisampleRenderTarget(Q),S.updateRenderTargetMipmap(Q),$e.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let Ee=0,Ke=P.length;Ee<Ke;Ee++){let nt=P[Ee],Rt=nt.object,xt=nt.geometry,et=nt.material,Ce=nt.group;if(et.side===vn&&Rt.layers.test(k.layers)){let Kt=et.side;et.side=mi,et.needsUpdate=!0,Wf(Rt,N,k,xt,et,Ce),et.side=Kt,et.needsUpdate=!0,De=!0}}De===!0&&(S.updateMultisampleRenderTarget(Q),S.updateRenderTargetMipmap(Q))}x.setRenderTarget(de),x.setClearColor($,Z),Fe!==void 0&&(k.viewport=Fe),x.toneMapping=_e}function ya(y,P,N){let k=P.isScene===!0?P.overrideMaterial:null;for(let F=0,Q=y.length;F<Q;F++){let ne=y[F],de=ne.object,_e=ne.geometry,Fe=ne.group,De=ne.material;De.allowOverride===!0&&k!==null&&(De=k),de.layers.test(N.layers)&&Wf(de,P,N,_e,De,Fe)}}function Wf(y,P,N,k,F,Q){y.onBeforeRender(x,P,N,k,F,Q),y.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),F.onBeforeRender(x,P,N,k,y,Q),F.transparent===!0&&F.side===vn&&F.forceSinglePass===!1?(F.side=mi,F.needsUpdate=!0,x.renderBufferDirect(N,P,k,F,y,Q),F.side=kn,F.needsUpdate=!0,x.renderBufferDirect(N,P,k,F,y,Q),F.side=vn):x.renderBufferDirect(N,P,k,F,y,Q),y.onAfterRender(x,P,N,k,F,Q)}function ba(y,P,N){P.isScene!==!0&&(P=Tt);let k=xe.get(y),F=f.state.lights,Q=f.state.shadowsArray,ne=F.state.version,de=be.getParameters(y,F.state,Q,P,N),_e=be.getProgramCacheKey(de),Fe=k.programs;k.environment=y.isMeshStandardMaterial?P.environment:null,k.fog=P.fog,k.envMap=(y.isMeshStandardMaterial?O:_).get(y.envMap||k.environment),k.envMapRotation=k.environment!==null&&y.envMap===null?P.environmentRotation:y.envMapRotation,Fe===void 0&&(y.addEventListener("dispose",Ne),Fe=new Map,k.programs=Fe);let De=Fe.get(_e);if(De!==void 0){if(k.currentProgram===De&&k.lightsStateVersion===ne)return qf(y,de),De}else de.uniforms=be.getUniforms(y),y.onBeforeCompile(de,x),De=be.acquireProgram(de,_e),Fe.set(_e,De),k.uniforms=de.uniforms;let Ee=k.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ee.clippingPlanes=ee.uniform),qf(y,de),k.needsLights=wv(y),k.lightsStateVersion=ne,k.needsLights&&(Ee.ambientLightColor.value=F.state.ambient,Ee.lightProbe.value=F.state.probe,Ee.directionalLights.value=F.state.directional,Ee.directionalLightShadows.value=F.state.directionalShadow,Ee.spotLights.value=F.state.spot,Ee.spotLightShadows.value=F.state.spotShadow,Ee.rectAreaLights.value=F.state.rectArea,Ee.ltc_1.value=F.state.rectAreaLTC1,Ee.ltc_2.value=F.state.rectAreaLTC2,Ee.pointLights.value=F.state.point,Ee.pointLightShadows.value=F.state.pointShadow,Ee.hemisphereLights.value=F.state.hemi,Ee.directionalShadowMap.value=F.state.directionalShadowMap,Ee.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ee.spotShadowMap.value=F.state.spotShadowMap,Ee.spotLightMatrix.value=F.state.spotLightMatrix,Ee.spotLightMap.value=F.state.spotLightMap,Ee.pointShadowMap.value=F.state.pointShadowMap,Ee.pointShadowMatrix.value=F.state.pointShadowMatrix),k.currentProgram=De,k.uniformsList=null,De}function Xf(y){if(y.uniformsList===null){let P=y.currentProgram.getUniforms();y.uniformsList=mo.seqWithValue(P.seq,y.uniforms)}return y.uniformsList}function qf(y,P){let N=xe.get(y);N.outputColorSpace=P.outputColorSpace,N.batching=P.batching,N.batchingColor=P.batchingColor,N.instancing=P.instancing,N.instancingColor=P.instancingColor,N.instancingMorph=P.instancingMorph,N.skinning=P.skinning,N.morphTargets=P.morphTargets,N.morphNormals=P.morphNormals,N.morphColors=P.morphColors,N.morphTargetsCount=P.morphTargetsCount,N.numClippingPlanes=P.numClippingPlanes,N.numIntersection=P.numClipIntersection,N.vertexAlphas=P.vertexAlphas,N.vertexTangents=P.vertexTangents,N.toneMapping=P.toneMapping}function Mv(y,P,N,k,F){P.isScene!==!0&&(P=Tt),S.resetTextureUnits();let Q=P.fog,ne=k.isMeshStandardMaterial?P.environment:null,de=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:is,_e=(k.isMeshStandardMaterial?O:_).get(k.envMap||ne),Fe=k.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,De=!!N.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ee=!!N.morphAttributes.position,Ke=!!N.morphAttributes.normal,nt=!!N.morphAttributes.color,Rt=zn;k.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Rt=x.toneMapping);let xt=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,et=xt!==void 0?xt.length:0,Ce=xe.get(k),Kt=f.state.lights;if(te===!0&&(ve===!0||y!==b)){let ci=y===b&&k.id===M;ee.setState(k,y,ci)}let rt=!1;k.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Kt.state.version||Ce.outputColorSpace!==de||F.isBatchedMesh&&Ce.batching===!1||!F.isBatchedMesh&&Ce.batching===!0||F.isBatchedMesh&&Ce.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ce.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ce.instancing===!1||!F.isInstancedMesh&&Ce.instancing===!0||F.isSkinnedMesh&&Ce.skinning===!1||!F.isSkinnedMesh&&Ce.skinning===!0||F.isInstancedMesh&&Ce.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ce.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ce.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ce.instancingMorph===!1&&F.morphTexture!==null||Ce.envMap!==_e||k.fog===!0&&Ce.fog!==Q||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==ee.numPlanes||Ce.numIntersection!==ee.numIntersection)||Ce.vertexAlphas!==Fe||Ce.vertexTangents!==De||Ce.morphTargets!==Ee||Ce.morphNormals!==Ke||Ce.morphColors!==nt||Ce.toneMapping!==Rt||Ce.morphTargetsCount!==et)&&(rt=!0):(rt=!0,Ce.__version=k.version);let Wi=Ce.currentProgram;rt===!0&&(Wi=ba(k,P,F));let ms=!1,Si=!1,_o=!1,mt=Wi.getUniforms(),Fi=Ce.uniforms;if(Se.useProgram(Wi.program)&&(ms=!0,Si=!0,_o=!0),k.id!==M&&(M=k.id,Si=!0),ms||b!==y){Se.buffers.depth.getReversed()?(se.copy(y.projectionMatrix),z_(se),H_(se),mt.setValue(C,"projectionMatrix",se)):mt.setValue(C,"projectionMatrix",y.projectionMatrix),mt.setValue(C,"viewMatrix",y.matrixWorldInverse);let gi=mt.map.cameraPosition;gi!==void 0&&gi.setValue(C,it.setFromMatrixPosition(y.matrixWorld)),qe.logarithmicDepthBuffer&&mt.setValue(C,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&mt.setValue(C,"isOrthographic",y.isOrthographicCamera===!0),b!==y&&(b=y,Si=!0,_o=!0)}if(F.isSkinnedMesh){mt.setOptional(C,F,"bindMatrix"),mt.setOptional(C,F,"bindMatrixInverse");let ci=F.skeleton;ci&&(ci.boneTexture===null&&ci.computeBoneTexture(),mt.setValue(C,"boneTexture",ci.boneTexture,S))}F.isBatchedMesh&&(mt.setOptional(C,F,"batchingTexture"),mt.setValue(C,"batchingTexture",F._matricesTexture,S),mt.setOptional(C,F,"batchingIdTexture"),mt.setValue(C,"batchingIdTexture",F._indirectTexture,S),mt.setOptional(C,F,"batchingColorTexture"),F._colorsTexture!==null&&mt.setValue(C,"batchingColorTexture",F._colorsTexture,S));let Li=N.morphAttributes;if((Li.position!==void 0||Li.normal!==void 0||Li.color!==void 0)&&Pe.update(F,N,Wi),(Si||Ce.receiveShadow!==F.receiveShadow)&&(Ce.receiveShadow=F.receiveShadow,mt.setValue(C,"receiveShadow",F.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Fi.envMap.value=_e,Fi.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&P.environment!==null&&(Fi.envMapIntensity.value=P.environmentIntensity),Si&&(mt.setValue(C,"toneMappingExposure",x.toneMappingExposure),Ce.needsLights&&Sv(Fi,_o),Q&&k.fog===!0&&oe.refreshFogUniforms(Fi,Q),oe.refreshMaterialUniforms(Fi,k,z,J,f.state.transmissionRenderTarget[y.id]),mo.upload(C,Xf(Ce),Fi,S)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(mo.upload(C,Xf(Ce),Fi,S),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&mt.setValue(C,"center",F.center),mt.setValue(C,"modelViewMatrix",F.modelViewMatrix),mt.setValue(C,"normalMatrix",F.normalMatrix),mt.setValue(C,"modelMatrix",F.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let ci=k.uniformsGroups;for(let gi=0,uu=ci.length;gi<uu;gi++){let Dr=ci[gi];I.update(Dr,Wi),I.bind(Dr,Wi)}}return Wi}function Sv(y,P){y.ambientLightColor.needsUpdate=P,y.lightProbe.needsUpdate=P,y.directionalLights.needsUpdate=P,y.directionalLightShadows.needsUpdate=P,y.pointLights.needsUpdate=P,y.pointLightShadows.needsUpdate=P,y.spotLights.needsUpdate=P,y.spotLightShadows.needsUpdate=P,y.rectAreaLights.needsUpdate=P,y.hemisphereLights.needsUpdate=P}function wv(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(y,P,N){let k=xe.get(y);k.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),xe.get(y.texture).__webglTexture=P,xe.get(y.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:N,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,P){let N=xe.get(y);N.__webglFramebuffer=P,N.__useDefaultFramebuffer=P===void 0};let Ev=C.createFramebuffer();this.setRenderTarget=function(y,P=0,N=0){L=y,R=P,T=N;let k=!0,F=null,Q=!1,ne=!1;if(y){let _e=xe.get(y);if(_e.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(C.FRAMEBUFFER,null),k=!1;else if(_e.__webglFramebuffer===void 0)S.setupRenderTarget(y);else if(_e.__hasExternalTextures)S.rebindTextures(y,xe.get(y.texture).__webglTexture,xe.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Ee=y.depthTexture;if(_e.__boundDepthTexture!==Ee){if(Ee!==null&&xe.has(Ee)&&(y.width!==Ee.image.width||y.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(y)}}let Fe=y.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ne=!0);let De=xe.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(De[P])?F=De[P][N]:F=De[P],Q=!0):y.samples>0&&S.useMultisampledRTT(y)===!1?F=xe.get(y).__webglMultisampledFramebuffer:Array.isArray(De)?F=De[N]:F=De,A.copy(y.viewport),G.copy(y.scissor),B=y.scissorTest}else A.copy(Me).multiplyScalar(z).floor(),G.copy(He).multiplyScalar(z).floor(),B=lt;if(N!==0&&(F=Ev),Se.bindFramebuffer(C.FRAMEBUFFER,F)&&k&&Se.drawBuffers(y,F),Se.viewport(A),Se.scissor(G),Se.setScissorTest(B),Q){let _e=xe.get(y.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+P,_e.__webglTexture,N)}else if(ne){let _e=xe.get(y.texture),Fe=P;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,_e.__webglTexture,N,Fe)}else if(y!==null&&N!==0){let _e=xe.get(y.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,_e.__webglTexture,N)}M=-1},this.readRenderTargetPixels=function(y,P,N,k,F,Q,ne){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=xe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ne!==void 0&&(de=de[ne]),de){Se.bindFramebuffer(C.FRAMEBUFFER,de);try{let _e=y.texture,Fe=_e.format,De=_e.type;if(!qe.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=y.width-k&&N>=0&&N<=y.height-F&&C.readPixels(P,N,k,F,ke.convert(Fe),ke.convert(De),Q)}finally{let _e=L!==null?xe.get(L).__webglFramebuffer:null;Se.bindFramebuffer(C.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=function(y,P,N,k,F,Q,ne){return he(this,null,function*(){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=xe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ne!==void 0&&(de=de[ne]),de)if(P>=0&&P<=y.width-k&&N>=0&&N<=y.height-F){Se.bindFramebuffer(C.FRAMEBUFFER,de);let _e=y.texture,Fe=_e.format,De=_e.type;if(!qe.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ee=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ee),C.bufferData(C.PIXEL_PACK_BUFFER,Q.byteLength,C.STREAM_READ),C.readPixels(P,N,k,F,ke.convert(Fe),ke.convert(De),0);let Ke=L!==null?xe.get(L).__webglFramebuffer:null;Se.bindFramebuffer(C.FRAMEBUFFER,Ke);let nt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),yield V_(C,nt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ee),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Q),C.deleteBuffer(Ee),C.deleteSync(nt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")})},this.copyFramebufferToTexture=function(y,P=null,N=0){let k=Math.pow(2,-N),F=Math.floor(y.image.width*k),Q=Math.floor(y.image.height*k),ne=P!==null?P.x:0,de=P!==null?P.y:0;S.setTexture2D(y,0),C.copyTexSubImage2D(C.TEXTURE_2D,N,0,0,ne,de,F,Q),Se.unbindTexture()};let Tv=C.createFramebuffer(),Cv=C.createFramebuffer();this.copyTextureToTexture=function(y,P,N=null,k=null,F=0,Q=null){Q===null&&(F!==0?(_a("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=F,F=0):Q=0);let ne,de,_e,Fe,De,Ee,Ke,nt,Rt,xt=y.isCompressedTexture?y.mipmaps[Q]:y.image;if(N!==null)ne=N.max.x-N.min.x,de=N.max.y-N.min.y,_e=N.isBox3?N.max.z-N.min.z:1,Fe=N.min.x,De=N.min.y,Ee=N.isBox3?N.min.z:0;else{let Li=Math.pow(2,-F);ne=Math.floor(xt.width*Li),de=Math.floor(xt.height*Li),y.isDataArrayTexture?_e=xt.depth:y.isData3DTexture?_e=Math.floor(xt.depth*Li):_e=1,Fe=0,De=0,Ee=0}k!==null?(Ke=k.x,nt=k.y,Rt=k.z):(Ke=0,nt=0,Rt=0);let et=ke.convert(P.format),Ce=ke.convert(P.type),Kt;P.isData3DTexture?(S.setTexture3D(P,0),Kt=C.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(S.setTexture2DArray(P,0),Kt=C.TEXTURE_2D_ARRAY):(S.setTexture2D(P,0),Kt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,P.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,P.unpackAlignment);let rt=C.getParameter(C.UNPACK_ROW_LENGTH),Wi=C.getParameter(C.UNPACK_IMAGE_HEIGHT),ms=C.getParameter(C.UNPACK_SKIP_PIXELS),Si=C.getParameter(C.UNPACK_SKIP_ROWS),_o=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,xt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,xt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Fe),C.pixelStorei(C.UNPACK_SKIP_ROWS,De),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ee);let mt=y.isDataArrayTexture||y.isData3DTexture,Fi=P.isDataArrayTexture||P.isData3DTexture;if(y.isDepthTexture){let Li=xe.get(y),ci=xe.get(P),gi=xe.get(Li.__renderTarget),uu=xe.get(ci.__renderTarget);Se.bindFramebuffer(C.READ_FRAMEBUFFER,gi.__webglFramebuffer),Se.bindFramebuffer(C.DRAW_FRAMEBUFFER,uu.__webglFramebuffer);for(let Dr=0;Dr<_e;Dr++)mt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,xe.get(y).__webglTexture,F,Ee+Dr),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,xe.get(P).__webglTexture,Q,Rt+Dr)),C.blitFramebuffer(Fe,De,ne,de,Ke,nt,ne,de,C.DEPTH_BUFFER_BIT,C.NEAREST);Se.bindFramebuffer(C.READ_FRAMEBUFFER,null),Se.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(F!==0||y.isRenderTargetTexture||xe.has(y)){let Li=xe.get(y),ci=xe.get(P);Se.bindFramebuffer(C.READ_FRAMEBUFFER,Tv),Se.bindFramebuffer(C.DRAW_FRAMEBUFFER,Cv);for(let gi=0;gi<_e;gi++)mt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Li.__webglTexture,F,Ee+gi):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Li.__webglTexture,F),Fi?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ci.__webglTexture,Q,Rt+gi):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ci.__webglTexture,Q),F!==0?C.blitFramebuffer(Fe,De,ne,de,Ke,nt,ne,de,C.COLOR_BUFFER_BIT,C.NEAREST):Fi?C.copyTexSubImage3D(Kt,Q,Ke,nt,Rt+gi,Fe,De,ne,de):C.copyTexSubImage2D(Kt,Q,Ke,nt,Fe,De,ne,de);Se.bindFramebuffer(C.READ_FRAMEBUFFER,null),Se.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Fi?y.isDataTexture||y.isData3DTexture?C.texSubImage3D(Kt,Q,Ke,nt,Rt,ne,de,_e,et,Ce,xt.data):P.isCompressedArrayTexture?C.compressedTexSubImage3D(Kt,Q,Ke,nt,Rt,ne,de,_e,et,xt.data):C.texSubImage3D(Kt,Q,Ke,nt,Rt,ne,de,_e,et,Ce,xt):y.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Q,Ke,nt,ne,de,et,Ce,xt.data):y.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Q,Ke,nt,xt.width,xt.height,et,xt.data):C.texSubImage2D(C.TEXTURE_2D,Q,Ke,nt,ne,de,et,Ce,xt);C.pixelStorei(C.UNPACK_ROW_LENGTH,rt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Wi),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ms),C.pixelStorei(C.UNPACK_SKIP_ROWS,Si),C.pixelStorei(C.UNPACK_SKIP_IMAGES,_o),Q===0&&P.generateMipmaps&&C.generateMipmap(Kt),Se.unbindTexture()},this.copyTextureToTexture3D=function(y,P,N=null,k=null,F=0){return _a('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,P,N,k,F)},this.initRenderTarget=function(y){xe.get(y).__webglFramebuffer===void 0&&S.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?S.setTextureCube(y,0):y.isData3DTexture?S.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?S.setTexture2DArray(y,0):S.setTexture2D(y,0),Se.unbindTexture()},this.resetState=function(){R=0,T=0,L=null,Se.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}};var AE=["canvas"],lu=class n{constructor(e){this.platformId=e;this.isBrowser=Jn(this.platformId)}canvasRef;renderer;scene;camera;cube;isBrowser;ngOnInit(){this.isBrowser&&(this.initScene(),this.animate())}initScene(){let e=this.canvasRef.nativeElement.clientWidth,t=this.canvasRef.nativeElement.clientHeight;this.scene=new ra,this.camera=new oi(75,e/t,.1,1e3),this.camera.position.z=5,this.renderer=new au({canvas:this.canvasRef.nativeElement}),this.renderer.setSize(e,t);let i=new wr,r=new ss({color:65488,wireframe:!0});this.cube=new Mi(i,r),this.scene.add(this.cube)}animate=()=>{requestAnimationFrame(this.animate),this.scene.background=new Qe("#1e1e2f"),this.cube.rotation.x+=.01,this.cube.rotation.y+=.01,this.renderer.render(this.scene,this.camera)};static \u0275fac=function(t){return new(t||n)(ue(Xn))};static \u0275cmp=Ct({type:n,selectors:[["app-three-scene"]],viewQuery:function(t,i){if(t&1&&yi(AE,7),t&2){let r;Wt(r=Xt())&&(i.canvasRef=r.first)}},standalone:!0,features:[It],decls:2,vars:0,consts:[["canvas",""],[1,"scene-canvas"]],template:function(t,i){t&1&&hi(0,"canvas",1,0)},styles:["[_nghost-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:-3;pointer-events:none}canvas[_ngcontent-%COMP%]{width:100%;height:100%;display:block}"]})};var yv=[{path:"",component:Sl},{path:"projects",component:wl},{path:"contact",component:El},{path:"three-scene",component:lu},{path:"particles",component:Bs}];var bv={providers:[np({eventCoalescing:!0}),_p(yv),dp()]};var IE={providers:[fp()]},xv=sp(bv,IE);var RE=()=>up(Aa,xv),yz=RE;export{yz as a};
