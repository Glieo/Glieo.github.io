function Lo(i,e){const t=Object.create(null),n=i.split(",");for(let r=0;r<n.length;r++)t[n[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const Zf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jf=Lo(Zf);function Xl(i){return!!i||i===""}function Ro(i){if(Fe(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],r=_t(n)?Qf(n):Ro(n);if(r)for(const s in r)e[s]=r[s]}return e}else{if(_t(i))return i;if(Tt(i))return i}}const Kf=/;(?![^(]*\))/g,$f=/:(.+)/;function Qf(i){const e={};return i.split(Kf).forEach(t=>{if(t){const n=t.split($f);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function Po(i){let e="";if(_t(i))e=i;else if(Fe(i))for(let t=0;t<i.length;t++){const n=Po(i[t]);n&&(e+=n+" ")}else if(Tt(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const Ze={},mi=[],qt=()=>{},ed=()=>!1,td=/^on[^a-z]/,ss=i=>td.test(i),Do=i=>i.startsWith("onUpdate:"),xt=Object.assign,Io=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},nd=Object.prototype.hasOwnProperty,Ve=(i,e)=>nd.call(i,e),Fe=Array.isArray,xr=i=>os(i)==="[object Map]",id=i=>os(i)==="[object Set]",Ne=i=>typeof i=="function",_t=i=>typeof i=="string",Fo=i=>typeof i=="symbol",Tt=i=>i!==null&&typeof i=="object",jl=i=>Tt(i)&&Ne(i.then)&&Ne(i.catch),rd=Object.prototype.toString,os=i=>rd.call(i),sd=i=>os(i).slice(8,-1),od=i=>os(i)==="[object Object]",No=i=>_t(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,as=Lo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ls=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},ad=/-(\w)/g,gi=ls(i=>i.replace(ad,(e,t)=>t?t.toUpperCase():"")),ld=/\B([A-Z])/g,xi=ls(i=>i.replace(ld,"-$1").toLowerCase()),Yl=ls(i=>i.charAt(0).toUpperCase()+i.slice(1)),Bo=ls(i=>i?`on${Yl(i)}`:""),cs=(i,e)=>!Object.is(i,e),Oo=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},us=(i,e,t)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value:t})},cd=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let Zl;const ud=()=>Zl||(Zl=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Jn;const hs=[];class hd{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Jn&&(this.parent=Jn,this.index=(Jn.scopes||(Jn.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}}on(){this.active&&(hs.push(this),Jn=this)}off(){this.active&&(hs.pop(),Jn=hs[hs.length-1])}stop(e){if(this.active){if(this.effects.forEach(t=>t.stop()),this.cleanups.forEach(t=>t()),this.scopes&&this.scopes.forEach(t=>t.stop(!0)),this.parent&&!e){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.active=!1}}}function fd(i,e){e=e||Jn,e&&e.active&&e.effects.push(i)}const zo=i=>{const e=new Set(i);return e.w=0,e.n=0,e},Jl=i=>(i.w&wn)>0,Kl=i=>(i.n&wn)>0,dd=({deps:i})=>{if(i.length)for(let e=0;e<i.length;e++)i[e].w|=wn},pd=i=>{const{deps:e}=i;if(e.length){let t=0;for(let n=0;n<e.length;n++){const r=e[n];Jl(r)&&!Kl(r)?r.delete(i):e[t++]=r,r.w&=~wn,r.n&=~wn}e.length=t}},Uo=new WeakMap;let _r=0,wn=1;const Ho=30,_i=[];let Kn;const $n=Symbol(""),Vo=Symbol("");class ko{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],fd(this,n)}run(){if(!this.active)return this.fn();if(!_i.length||!_i.includes(this))try{return _i.push(Kn=this),md(),wn=1<<++_r,_r<=Ho?dd(this):$l(this),this.fn()}finally{_r<=Ho&&pd(this),wn=1<<--_r,Qn(),_i.pop();const e=_i.length;Kn=e>0?_i[e-1]:void 0}}stop(){this.active&&($l(this),this.onStop&&this.onStop(),this.active=!1)}}function $l(i){const{deps:e}=i;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(i);e.length=0}}let vi=!0;const Go=[];function yi(){Go.push(vi),vi=!1}function md(){Go.push(vi),vi=!0}function Qn(){const i=Go.pop();vi=i===void 0?!0:i}function Ft(i,e,t){if(!Ql())return;let n=Uo.get(i);n||Uo.set(i,n=new Map);let r=n.get(t);r||n.set(t,r=zo()),ec(r)}function Ql(){return vi&&Kn!==void 0}function ec(i,e){let t=!1;_r<=Ho?Kl(i)||(i.n|=wn,t=!Jl(i)):t=!i.has(Kn),t&&(i.add(Kn),Kn.deps.push(i))}function dn(i,e,t,n,r,s){const o=Uo.get(i);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Fe(i))o.forEach((l,c)=>{(c==="length"||c>=n)&&a.push(l)});else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Fe(i)?No(t)&&a.push(o.get("length")):(a.push(o.get($n)),xr(i)&&a.push(o.get(Vo)));break;case"delete":Fe(i)||(a.push(o.get($n)),xr(i)&&a.push(o.get(Vo)));break;case"set":xr(i)&&a.push(o.get($n));break}if(a.length===1)a[0]&&Wo(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Wo(zo(l))}}function Wo(i,e){for(const t of Fe(i)?i:[...i])(t!==Kn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const gd=Lo("__proto__,__v_isRef,__isVue"),tc=new Set(Object.getOwnPropertyNames(Symbol).map(i=>Symbol[i]).filter(Fo)),xd=qo(),_d=qo(!1,!0),vd=qo(!0),nc=yd();function yd(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=We(this);for(let s=0,o=this.length;s<o;s++)Ft(n,"get",s+"");const r=n[e](...t);return r===-1||r===!1?n[e](...t.map(We)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){yi();const n=We(this)[e].apply(this,t);return Qn(),n}}),i}function qo(i=!1,e=!1){return function(n,r,s){if(r==="__v_isReactive")return!i;if(r==="__v_isReadonly")return i;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(i?e?Bd:hc:e?uc:cc).get(n))return n;const o=Fe(n);if(!i&&o&&Ve(nc,r))return Reflect.get(nc,r,s);const a=Reflect.get(n,r,s);return(Fo(r)?tc.has(r):gd(r))||(i||Ft(n,"get",r),e)?a:vt(a)?!o||!No(r)?a.value:a:Tt(a)?i?fc(a):Yo(a):a}}const Md=ic(),bd=ic(!0);function ic(i=!1){return function(t,n,r,s){let o=t[n];if(vr(o)&&vt(o)&&!vt(r))return!1;if(!i&&!vr(r)&&(dc(r)||(r=We(r),o=We(o)),!Fe(t)&&vt(o)&&!vt(r)))return o.value=r,!0;const a=Fe(t)&&No(n)?Number(n)<t.length:Ve(t,n),l=Reflect.set(t,n,r,s);return t===We(s)&&(a?cs(r,o)&&dn(t,"set",n,r):dn(t,"add",n,r)),l}}function wd(i,e){const t=Ve(i,e);i[e];const n=Reflect.deleteProperty(i,e);return n&&t&&dn(i,"delete",e,void 0),n}function Sd(i,e){const t=Reflect.has(i,e);return(!Fo(e)||!tc.has(e))&&Ft(i,"has",e),t}function Ed(i){return Ft(i,"iterate",Fe(i)?"length":$n),Reflect.ownKeys(i)}const rc={get:xd,set:Md,deleteProperty:wd,has:Sd,ownKeys:Ed},Td={get:vd,set(i,e){return!0},deleteProperty(i,e){return!0}},Ad=xt({},rc,{get:_d,set:bd}),Xo=i=>i,fs=i=>Reflect.getPrototypeOf(i);function ds(i,e,t=!1,n=!1){i=i.__v_raw;const r=We(i),s=We(e);e!==s&&!t&&Ft(r,"get",e),!t&&Ft(r,"get",s);const{has:o}=fs(r),a=n?Xo:t?Ko:Jo;if(o.call(r,e))return a(i.get(e));if(o.call(r,s))return a(i.get(s));i!==r&&i.get(e)}function ps(i,e=!1){const t=this.__v_raw,n=We(t),r=We(i);return i!==r&&!e&&Ft(n,"has",i),!e&&Ft(n,"has",r),i===r?t.has(i):t.has(i)||t.has(r)}function ms(i,e=!1){return i=i.__v_raw,!e&&Ft(We(i),"iterate",$n),Reflect.get(i,"size",i)}function sc(i){i=We(i);const e=We(this);return fs(e).has.call(e,i)||(e.add(i),dn(e,"add",i,i)),this}function oc(i,e){e=We(e);const t=We(this),{has:n,get:r}=fs(t);let s=n.call(t,i);s||(i=We(i),s=n.call(t,i));const o=r.call(t,i);return t.set(i,e),s?cs(e,o)&&dn(t,"set",i,e):dn(t,"add",i,e),this}function ac(i){const e=We(this),{has:t,get:n}=fs(e);let r=t.call(e,i);r||(i=We(i),r=t.call(e,i)),n&&n.call(e,i);const s=e.delete(i);return r&&dn(e,"delete",i,void 0),s}function lc(){const i=We(this),e=i.size!==0,t=i.clear();return e&&dn(i,"clear",void 0,void 0),t}function gs(i,e){return function(n,r){const s=this,o=s.__v_raw,a=We(o),l=e?Xo:i?Ko:Jo;return!i&&Ft(a,"iterate",$n),o.forEach((c,u)=>n.call(r,l(c),l(u),s))}}function xs(i,e,t){return function(...n){const r=this.__v_raw,s=We(r),o=xr(s),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=r[i](...n),u=t?Xo:e?Ko:Jo;return!e&&Ft(s,"iterate",l?Vo:$n),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Sn(i){return function(...e){return i==="delete"?!1:this}}function Cd(){const i={get(s){return ds(this,s)},get size(){return ms(this)},has:ps,add:sc,set:oc,delete:ac,clear:lc,forEach:gs(!1,!1)},e={get(s){return ds(this,s,!1,!0)},get size(){return ms(this)},has:ps,add:sc,set:oc,delete:ac,clear:lc,forEach:gs(!1,!0)},t={get(s){return ds(this,s,!0)},get size(){return ms(this,!0)},has(s){return ps.call(this,s,!0)},add:Sn("add"),set:Sn("set"),delete:Sn("delete"),clear:Sn("clear"),forEach:gs(!0,!1)},n={get(s){return ds(this,s,!0,!0)},get size(){return ms(this,!0)},has(s){return ps.call(this,s,!0)},add:Sn("add"),set:Sn("set"),delete:Sn("delete"),clear:Sn("clear"),forEach:gs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{i[s]=xs(s,!1,!1),t[s]=xs(s,!0,!1),e[s]=xs(s,!1,!0),n[s]=xs(s,!0,!0)}),[i,t,e,n]}const[Ld,Rd,Pd,Dd]=Cd();function jo(i,e){const t=e?i?Dd:Pd:i?Rd:Ld;return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(Ve(t,r)&&r in n?t:n,r,s)}const Id={get:jo(!1,!1)},Fd={get:jo(!1,!0)},Nd={get:jo(!0,!1)},cc=new WeakMap,uc=new WeakMap,hc=new WeakMap,Bd=new WeakMap;function Od(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zd(i){return i.__v_skip||!Object.isExtensible(i)?0:Od(sd(i))}function Yo(i){return vr(i)?i:Zo(i,!1,rc,Id,cc)}function Ud(i){return Zo(i,!1,Ad,Fd,uc)}function fc(i){return Zo(i,!0,Td,Nd,hc)}function Zo(i,e,t,n,r){if(!Tt(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const s=r.get(i);if(s)return s;const o=zd(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return r.set(i,a),a}function Mi(i){return vr(i)?Mi(i.__v_raw):!!(i&&i.__v_isReactive)}function vr(i){return!!(i&&i.__v_isReadonly)}function dc(i){return!!(i&&i.__v_isShallow)}function pc(i){return Mi(i)||vr(i)}function We(i){const e=i&&i.__v_raw;return e?We(e):i}function mc(i){return us(i,"__v_skip",!0),i}const Jo=i=>Tt(i)?Yo(i):i,Ko=i=>Tt(i)?fc(i):i;function Hd(i){Ql()&&(i=We(i),i.dep||(i.dep=zo()),ec(i.dep))}function Vd(i,e){i=We(i),i.dep&&Wo(i.dep)}function vt(i){return Boolean(i&&i.__v_isRef===!0)}function kd(i){return vt(i)?i.value:i}const Gd={get:(i,e,t)=>kd(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const r=i[e];return vt(r)&&!vt(t)?(r.value=t,!0):Reflect.set(i,e,t,n)}};function gc(i){return Mi(i)?i:new Proxy(i,Gd)}class Wd{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new ko(e,()=>{this._dirty||(this._dirty=!0,Vd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const e=We(this);return Hd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function qd(i,e,t=!1){let n,r;const s=Ne(i);return s?(n=i,r=qt):(n=i.get,r=i.set),new Wd(n,r,s||!r,t)}Promise.resolve();function En(i,e,t,n){let r;try{r=n?i(...n):i()}catch(s){_s(s,e,t)}return r}function Ht(i,e,t,n){if(Ne(i)){const s=En(i,e,t,n);return s&&jl(s)&&s.catch(o=>{_s(o,e,t)}),s}const r=[];for(let s=0;s<i.length;s++)r.push(Ht(i[s],e,t,n));return r}function _s(i,e,t,n=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){En(l,null,10,[i,o,a]);return}}Xd(i,t,r,n)}function Xd(i,e,t,n=!0){console.error(i)}let vs=!1,$o=!1;const Nt=[];let pn=0;const yr=[];let Mr=null,bi=0;const br=[];let Tn=null,wi=0;const xc=Promise.resolve();let Qo=null,ea=null;function jd(i){const e=Qo||xc;return i?e.then(this?i.bind(this):i):e}function Yd(i){let e=pn+1,t=Nt.length;for(;e<t;){const n=e+t>>>1;wr(Nt[n])<i?e=n+1:t=n}return e}function _c(i){(!Nt.length||!Nt.includes(i,vs&&i.allowRecurse?pn+1:pn))&&i!==ea&&(i.id==null?Nt.push(i):Nt.splice(Yd(i.id),0,i),vc())}function vc(){!vs&&!$o&&($o=!0,Qo=xc.then(bc))}function Zd(i){const e=Nt.indexOf(i);e>pn&&Nt.splice(e,1)}function yc(i,e,t,n){Fe(i)?t.push(...i):(!e||!e.includes(i,i.allowRecurse?n+1:n))&&t.push(i),vc()}function Jd(i){yc(i,Mr,yr,bi)}function Kd(i){yc(i,Tn,br,wi)}function ta(i,e=null){if(yr.length){for(ea=e,Mr=[...new Set(yr)],yr.length=0,bi=0;bi<Mr.length;bi++)Mr[bi]();Mr=null,bi=0,ea=null,ta(i,e)}}function Mc(i){if(br.length){const e=[...new Set(br)];if(br.length=0,Tn){Tn.push(...e);return}for(Tn=e,Tn.sort((t,n)=>wr(t)-wr(n)),wi=0;wi<Tn.length;wi++)Tn[wi]();Tn=null,wi=0}}const wr=i=>i.id==null?1/0:i.id;function bc(i){$o=!1,vs=!0,ta(i),Nt.sort((t,n)=>wr(t)-wr(n));const e=qt;try{for(pn=0;pn<Nt.length;pn++){const t=Nt[pn];t&&t.active!==!1&&En(t,null,14)}}finally{pn=0,Nt.length=0,Mc(),vs=!1,Qo=null,(Nt.length||yr.length||br.length)&&bc(i)}}function $d(i,e,...t){const n=i.vnode.props||Ze;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=n[u]||Ze;f?r=t.map(d=>d.trim()):h&&(r=t.map(cd))}let a,l=n[a=Bo(e)]||n[a=Bo(gi(e))];!l&&s&&(l=n[a=Bo(xi(e))]),l&&Ht(l,i,6,r);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,Ht(c,i,6,r)}}function wc(i,e,t=!1){const n=e.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let o={},a=!1;if(!Ne(i)){const l=c=>{const u=wc(c,e,!0);u&&(a=!0,xt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!s&&!a?(n.set(i,null),null):(Fe(s)?s.forEach(l=>o[l]=null):xt(o,s),n.set(i,o),o)}function na(i,e){return!i||!ss(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ve(i,e[0].toLowerCase()+e.slice(1))||Ve(i,xi(e))||Ve(i,e))}let tn=null,Sc=null;function ys(i){const e=tn;return tn=i,Sc=i&&i.type.__scopeId||null,e}function Qd(i,e=tn,t){if(!e||i._n)return i;const n=(...r)=>{n._d&&Kc(-1);const s=ys(e),o=i(...r);return ys(s),n._d&&Kc(1),o};return n._n=!0,n._c=!0,n._d=!0,n}function ia(i){const{type:e,vnode:t,proxy:n,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:g,inheritAttrs:x}=i;let M,m;const p=ys(i);try{if(t.shapeFlag&4){const w=r||n;M=rn(u.call(w,w,h,s,d,f,g)),m=l}else{const w=e;M=rn(w.length>1?w(s,{attrs:l,slots:a,emit:c}):w(s,null)),m=e.props?l:ep(l)}}catch(w){Sr.length=0,_s(w,i,1),M=Cn(An)}let L=M;if(m&&x!==!1){const w=Object.keys(m),{shapeFlag:T}=L;w.length&&T&(1|6)&&(o&&w.some(Do)&&(m=tp(m,o)),L=Ei(L,m))}return t.dirs&&(L.dirs=L.dirs?L.dirs.concat(t.dirs):t.dirs),t.transition&&(L.transition=t.transition),M=L,ys(p),M}const ep=i=>{let e;for(const t in i)(t==="class"||t==="style"||ss(t))&&((e||(e={}))[t]=i[t]);return e},tp=(i,e)=>{const t={};for(const n in i)(!Do(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function np(i,e,t){const{props:n,children:r,component:s}=i,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?Ec(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==n[f]&&!na(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?Ec(n,o,c):!0:!!o;return!1}function Ec(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==i[s]&&!na(t,s))return!0}return!1}function ip({vnode:i,parent:e},t){for(;e&&e.subTree===i;)(i=e.vnode).el=t,e=e.parent}const rp=i=>i.__isSuspense;function sp(i,e){e&&e.pendingBranch?Fe(i)?e.effects.push(...i):e.effects.push(i):Kd(i)}function op(i,e){if(dt){let t=dt.provides;const n=dt.parent&&dt.parent.provides;n===t&&(t=dt.provides=Object.create(n)),t[i]=e}}function ra(i,e,t=!1){const n=dt||tn;if(n){const r=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(r&&i in r)return r[i];if(arguments.length>1)return t&&Ne(e)?e.call(n.proxy):e}}const Tc={};function sa(i,e,t){return Ac(i,e,t)}function Ac(i,e,{immediate:t,deep:n,flush:r,onTrack:s,onTrigger:o}=Ze){const a=dt;let l,c=!1,u=!1;if(vt(i)?(l=()=>i.value,c=dc(i)):Mi(i)?(l=()=>i,n=!0):Fe(i)?(u=!0,c=i.some(Mi),l=()=>i.map(m=>{if(vt(m))return m.value;if(Mi(m))return Si(m);if(Ne(m))return En(m,a,2)})):Ne(i)?e?l=()=>En(i,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),Ht(i,a,3,[f])}:l=qt,e&&n){const m=l;l=()=>Si(m())}let h,f=m=>{h=M.onStop=()=>{En(m,a,4)}};if(Er)return f=qt,e?t&&Ht(e,a,3,[l(),u?[]:void 0,f]):l(),qt;let d=u?[]:Tc;const g=()=>{if(!!M.active)if(e){const m=M.run();(n||c||(u?m.some((p,L)=>cs(p,d[L])):cs(m,d)))&&(h&&h(),Ht(e,a,3,[m,d===Tc?void 0:d,f]),d=m)}else M.run()};g.allowRecurse=!!e;let x;r==="sync"?x=g:r==="post"?x=()=>Dt(g,a&&a.suspense):x=()=>{!a||a.isMounted?Jd(g):g()};const M=new ko(l,x);return e?t?g():d=M.run():r==="post"?Dt(M.run.bind(M),a&&a.suspense):M.run(),()=>{M.stop(),a&&a.scope&&Io(a.scope.effects,M)}}function ap(i,e,t){const n=this.proxy,r=_t(i)?i.includes(".")?Cc(n,i):()=>n[i]:i.bind(n,n);let s;Ne(e)?s=e:(s=e.handler,t=e);const o=dt;Ti(this);const a=Ac(r,s.bind(n),t);return o?Ti(o):si(),a}function Cc(i,e){const t=e.split(".");return()=>{let n=i;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}function Si(i,e){if(!Tt(i)||i.__v_skip||(e=e||new Set,e.has(i)))return i;if(e.add(i),vt(i))Si(i.value,e);else if(Fe(i))for(let t=0;t<i.length;t++)Si(i[t],e);else if(id(i)||xr(i))i.forEach(t=>{Si(t,e)});else if(od(i))for(const t in i)Si(i[t],e);return i}function lp(){const i={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ic(()=>{i.isMounted=!0}),Fc(()=>{i.isUnmounting=!0}),i}const Vt=[Function,Array],cp={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Vt,onEnter:Vt,onAfterEnter:Vt,onEnterCancelled:Vt,onBeforeLeave:Vt,onLeave:Vt,onAfterLeave:Vt,onLeaveCancelled:Vt,onBeforeAppear:Vt,onAppear:Vt,onAfterAppear:Vt,onAppearCancelled:Vt},setup(i,{slots:e}){const t=Jp(),n=lp();let r;return()=>{const s=e.default&&Pc(e.default(),!0);if(!s||!s.length)return;const o=We(i),{mode:a}=o,l=s[0];if(n.isLeaving)return aa(l);const c=Rc(l);if(!c)return aa(l);const u=oa(c,o,n,t);la(c,u);const h=t.subTree,f=h&&Rc(h);let d=!1;const{getTransitionKey:g}=c.type;if(g){const x=g();r===void 0?r=x:x!==r&&(r=x,d=!0)}if(f&&f.type!==An&&(!ri(c,f)||d)){const x=oa(f,o,n,t);if(la(f,x),a==="out-in")return n.isLeaving=!0,x.afterLeave=()=>{n.isLeaving=!1,t.update()},aa(l);a==="in-out"&&c.type!==An&&(x.delayLeave=(M,m,p)=>{const L=Lc(n,f);L[String(f.key)]=f,M._leaveCb=()=>{m(),M._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=p})}return l}}},up=cp;function Lc(i,e){const{leavingVNodes:t}=i;let n=t.get(e.type);return n||(n=Object.create(null),t.set(e.type,n)),n}function oa(i,e,t,n){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:g,onBeforeAppear:x,onAppear:M,onAfterAppear:m,onAppearCancelled:p}=e,L=String(i.key),w=Lc(t,i),T=(R,K)=>{R&&Ht(R,n,9,K)},F={mode:s,persisted:o,beforeEnter(R){let K=a;if(!t.isMounted)if(r)K=x||a;else return;R._leaveCb&&R._leaveCb(!0);const he=w[L];he&&ri(i,he)&&he.el._leaveCb&&he.el._leaveCb(),T(K,[R])},enter(R){let K=l,he=c,ne=u;if(!t.isMounted)if(r)K=M||l,he=m||c,ne=p||u;else return;let _=!1;const D=R._enterCb=z=>{_||(_=!0,z?T(ne,[R]):T(he,[R]),F.delayedLeave&&F.delayedLeave(),R._enterCb=void 0)};K?(K(R,D),K.length<=1&&D()):D()},leave(R,K){const he=String(i.key);if(R._enterCb&&R._enterCb(!0),t.isUnmounting)return K();T(h,[R]);let ne=!1;const _=R._leaveCb=D=>{ne||(ne=!0,K(),D?T(g,[R]):T(d,[R]),R._leaveCb=void 0,w[he]===i&&delete w[he])};w[he]=i,f?(f(R,_),f.length<=1&&_()):_()},clone(R){return oa(R,e,t,n)}};return F}function aa(i){if(Ms(i))return i=Ei(i),i.children=null,i}function Rc(i){return Ms(i)?i.children?i.children[0]:void 0:i}function la(i,e){i.shapeFlag&6&&i.component?la(i.component.subTree,e):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}function Pc(i,e=!1){let t=[],n=0;for(let r=0;r<i.length;r++){const s=i[r];s.type===nn?(s.patchFlag&128&&n++,t=t.concat(Pc(s.children,e))):(e||s.type!==An)&&t.push(s)}if(n>1)for(let r=0;r<t.length;r++)t[r].patchFlag=-2;return t}function tb(i){return Ne(i)?{setup:i,name:i.name}:i}const ca=i=>!!i.type.__asyncLoader,Ms=i=>i.type.__isKeepAlive;function hp(i,e){Dc(i,"a",e)}function fp(i,e){Dc(i,"da",e)}function Dc(i,e,t=dt){const n=i.__wdc||(i.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(bs(e,n,t),t){let r=t.parent;for(;r&&r.parent;)Ms(r.parent.vnode)&&dp(n,e,t,r),r=r.parent}}function dp(i,e,t,n){const r=bs(e,i,n,!0);Nc(()=>{Io(n[e],r)},t)}function bs(i,e,t=dt,n=!1){if(t){const r=t[i]||(t[i]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;yi(),Ti(t);const a=Ht(e,t,i,o);return si(),Qn(),a});return n?r.unshift(s):r.push(s),s}}const mn=i=>(e,t=dt)=>(!Er||i==="sp")&&bs(i,e,t),pp=mn("bm"),Ic=mn("m"),mp=mn("bu"),gp=mn("u"),Fc=mn("bum"),Nc=mn("um"),xp=mn("sp"),_p=mn("rtg"),vp=mn("rtc");function yp(i,e=dt){bs("ec",i,e)}let ua=!0;function Mp(i){const e=zc(i),t=i.proxy,n=i.ctx;ua=!1,e.beforeCreate&&Bc(e.beforeCreate,i,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:x,deactivated:M,beforeDestroy:m,beforeUnmount:p,destroyed:L,unmounted:w,render:T,renderTracked:F,renderTriggered:R,errorCaptured:K,serverPrefetch:he,expose:ne,inheritAttrs:_,components:D,directives:z,filters:W}=e;if(c&&bp(c,n,null,i.appContext.config.unwrapInjectedRef),o)for(const q in o){const J=o[q];Ne(J)&&(n[q]=J.bind(t))}if(r){const q=r.call(t,t);Tt(q)&&(i.data=Yo(q))}if(ua=!0,s)for(const q in s){const J=s[q],fe=Ne(J)?J.bind(t,t):Ne(J.get)?J.get.bind(t,t):qt,ee=!Ne(J)&&Ne(J.set)?J.set.bind(t):qt,ie=nm({get:fe,set:ee});Object.defineProperty(n,q,{enumerable:!0,configurable:!0,get:()=>ie.value,set:de=>ie.value=de})}if(a)for(const q in a)Oc(a[q],n,t,q);if(l){const q=Ne(l)?l.call(t):l;Reflect.ownKeys(q).forEach(J=>{op(J,q[J])})}u&&Bc(u,i,"c");function O(q,J){Fe(J)?J.forEach(fe=>q(fe.bind(t))):J&&q(J.bind(t))}if(O(pp,h),O(Ic,f),O(mp,d),O(gp,g),O(hp,x),O(fp,M),O(yp,K),O(vp,F),O(_p,R),O(Fc,p),O(Nc,w),O(xp,he),Fe(ne))if(ne.length){const q=i.exposed||(i.exposed={});ne.forEach(J=>{Object.defineProperty(q,J,{get:()=>t[J],set:fe=>t[J]=fe})})}else i.exposed||(i.exposed={});T&&i.render===qt&&(i.render=T),_!=null&&(i.inheritAttrs=_),D&&(i.components=D),z&&(i.directives=z)}function bp(i,e,t=qt,n=!1){Fe(i)&&(i=ha(i));for(const r in i){const s=i[r];let o;Tt(s)?"default"in s?o=ra(s.from||r,s.default,!0):o=ra(s.from||r):o=ra(s),vt(o)&&n?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Bc(i,e,t){Ht(Fe(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function Oc(i,e,t,n){const r=n.includes(".")?Cc(t,n):()=>t[n];if(_t(i)){const s=e[i];Ne(s)&&sa(r,s)}else if(Ne(i))sa(r,i.bind(t));else if(Tt(i))if(Fe(i))i.forEach(s=>Oc(s,e,t,n));else{const s=Ne(i.handler)?i.handler.bind(t):e[i.handler];Ne(s)&&sa(r,s,i)}}function zc(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=i.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!n?l=e:(l={},r.length&&r.forEach(c=>ws(l,c,o,!0)),ws(l,e,o)),s.set(e,l),l}function ws(i,e,t,n=!1){const{mixins:r,extends:s}=e;s&&ws(i,s,t,!0),r&&r.forEach(o=>ws(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=wp[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const wp={data:Uc,props:ei,emits:ei,methods:ei,computed:ei,beforeCreate:At,created:At,beforeMount:At,mounted:At,beforeUpdate:At,updated:At,beforeDestroy:At,beforeUnmount:At,destroyed:At,unmounted:At,activated:At,deactivated:At,errorCaptured:At,serverPrefetch:At,components:ei,directives:ei,watch:Ep,provide:Uc,inject:Sp};function Uc(i,e){return e?i?function(){return xt(Ne(i)?i.call(this,this):i,Ne(e)?e.call(this,this):e)}:e:i}function Sp(i,e){return ei(ha(i),ha(e))}function ha(i){if(Fe(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function At(i,e){return i?[...new Set([].concat(i,e))]:e}function ei(i,e){return i?xt(xt(Object.create(null),i),e):e}function Ep(i,e){if(!i)return e;if(!e)return i;const t=xt(Object.create(null),i);for(const n in e)t[n]=At(i[n],e[n]);return t}function Tp(i,e,t,n=!1){const r={},s={};us(s,Es,1),i.propsDefaults=Object.create(null),Hc(i,e,r,s);for(const o in i.propsOptions[0])o in r||(r[o]=void 0);t?i.props=n?r:Ud(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function Ap(i,e,t,n){const{props:r,attrs:s,vnode:{patchFlag:o}}=i,a=We(r),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];const d=e[f];if(l)if(Ve(s,f))d!==s[f]&&(s[f]=d,c=!0);else{const g=gi(f);r[g]=fa(l,a,g,d,i,!1)}else d!==s[f]&&(s[f]=d,c=!0)}}}else{Hc(i,e,r,s)&&(c=!0);let u;for(const h in a)(!e||!Ve(e,h)&&((u=xi(h))===h||!Ve(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(r[h]=fa(l,a,h,void 0,i,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!Ve(e,h)&&!0)&&(delete s[h],c=!0)}c&&dn(i,"set","$attrs")}function Hc(i,e,t,n){const[r,s]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(as(l))continue;const c=e[l];let u;r&&Ve(r,u=gi(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:na(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(s){const l=We(t),c=a||Ze;for(let u=0;u<s.length;u++){const h=s[u];t[h]=fa(r,l,h,c[h],i,!Ve(c,h))}}return o}function fa(i,e,t,n,r,s){const o=i[t];if(o!=null){const a=Ve(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&Ne(l)){const{propsDefaults:c}=r;t in c?n=c[t]:(Ti(r),n=c[t]=l.call(null,e),si())}else n=l}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===xi(t))&&(n=!0))}return n}function Vc(i,e,t=!1){const n=e.propsCache,r=n.get(i);if(r)return r;const s=i.props,o={},a=[];let l=!1;if(!Ne(i)){const u=h=>{l=!0;const[f,d]=Vc(h,e,!0);xt(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!s&&!l)return n.set(i,mi),mi;if(Fe(s))for(let u=0;u<s.length;u++){const h=gi(s[u]);kc(h)&&(o[h]=Ze)}else if(s)for(const u in s){const h=gi(u);if(kc(h)){const f=s[u],d=o[h]=Fe(f)||Ne(f)?{type:f}:f;if(d){const g=qc(Boolean,d.type),x=qc(String,d.type);d[0]=g>-1,d[1]=x<0||g<x,(g>-1||Ve(d,"default"))&&a.push(h)}}}const c=[o,a];return n.set(i,c),c}function kc(i){return i[0]!=="$"}function Gc(i){const e=i&&i.toString().match(/^\s*function (\w+)/);return e?e[1]:i===null?"null":""}function Wc(i,e){return Gc(i)===Gc(e)}function qc(i,e){return Fe(e)?e.findIndex(t=>Wc(t,i)):Ne(e)&&Wc(e,i)?0:-1}const Xc=i=>i[0]==="_"||i==="$stable",da=i=>Fe(i)?i.map(rn):[rn(i)],Cp=(i,e,t)=>{const n=Qd((...r)=>da(e(...r)),t);return n._c=!1,n},jc=(i,e,t)=>{const n=i._ctx;for(const r in i){if(Xc(r))continue;const s=i[r];if(Ne(s))e[r]=Cp(r,s,n);else if(s!=null){const o=da(s);e[r]=()=>o}}},Yc=(i,e)=>{const t=da(e);i.slots.default=()=>t},Lp=(i,e)=>{if(i.vnode.shapeFlag&32){const t=e._;t?(i.slots=We(e),us(e,"_",t)):jc(e,i.slots={})}else i.slots={},e&&Yc(i,e);us(i.slots,Es,1)},Rp=(i,e,t)=>{const{vnode:n,slots:r}=i;let s=!0,o=Ze;if(n.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(xt(r,e),!t&&a===1&&delete r._):(s=!e.$stable,jc(e,r)),o=e}else e&&(Yc(i,e),o={default:1});if(s)for(const a in r)!Xc(a)&&!(a in o)&&delete r[a]};function ti(i,e,t,n){const r=i.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(yi(),Ht(l,t,8,[i.el,a,i,e]),Qn())}}function Zc(){return{app:null,config:{isNativeTag:ed,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Pp=0;function Dp(i,e){return function(n,r=null){r!=null&&!Tt(r)&&(r=null);const s=Zc(),o=new Set;let a=!1;const l=s.app={_uid:Pp++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:im,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ne(c.install)?(o.add(c),c.install(l,...u)):Ne(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!a){const f=Cn(n,r);return f.appContext=s,u&&e?e(f,c):i(f,c,h),a=!0,l._container=c,c.__vue_app__=l,va(f.component)||f.component.proxy}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function pa(i,e,t,n,r=!1){if(Fe(i)){i.forEach((f,d)=>pa(f,e&&(Fe(e)?e[d]:e),t,n,r));return}if(ca(n)&&!r)return;const s=n.shapeFlag&4?va(n.component)||n.component.proxy:n.el,o=r?null:s,{i:a,r:l}=i,c=e&&e.r,u=a.refs===Ze?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(_t(c)?(u[c]=null,Ve(h,c)&&(h[c]=null)):vt(c)&&(c.value=null)),Ne(l))En(l,a,12,[o,u]);else{const f=_t(l),d=vt(l);if(f||d){const g=()=>{if(i.f){const x=f?u[l]:l.value;r?Fe(x)&&Io(x,s):Fe(x)?x.includes(s)||x.push(s):f?u[l]=[s]:(l.value=[s],i.k&&(u[i.k]=l.value))}else f?(u[l]=o,Ve(h,l)&&(h[l]=o)):vt(l)&&(l.value=o,i.k&&(u[i.k]=o))};o?(g.id=-1,Dt(g,t)):g()}}}const Dt=sp;function Ip(i){return Fp(i)}function Fp(i,e){const t=ud();t.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=qt,cloneNode:g,insertStaticContent:x}=i,M=(b,E,I,B=null,U=null,Y=null,ae=!1,re=null,se=!!E.dynamicChildren)=>{if(b===E)return;b&&!ri(b,E)&&(B=Te(b),xe(b,U,Y,!0),b=null),E.patchFlag===-2&&(se=!1,E.dynamicChildren=null);const{type:y,ref:v,shapeFlag:N}=E;switch(y){case ma:m(b,E,I,B);break;case An:p(b,E,I,B);break;case ga:b==null&&L(E,I,B,ae);break;case nn:z(b,E,I,B,U,Y,ae,re,se);break;default:N&1?F(b,E,I,B,U,Y,ae,re,se):N&6?W(b,E,I,B,U,Y,ae,re,se):(N&64||N&128)&&y.process(b,E,I,B,U,Y,ae,re,se,Le)}v!=null&&U&&pa(v,b&&b.ref,Y,E||b,!E)},m=(b,E,I,B)=>{if(b==null)n(E.el=a(E.children),I,B);else{const U=E.el=b.el;E.children!==b.children&&c(U,E.children)}},p=(b,E,I,B)=>{b==null?n(E.el=l(E.children||""),I,B):E.el=b.el},L=(b,E,I,B)=>{[b.el,b.anchor]=x(b.children,E,I,B,b.el,b.anchor)},w=({el:b,anchor:E},I,B)=>{let U;for(;b&&b!==E;)U=f(b),n(b,I,B),b=U;n(E,I,B)},T=({el:b,anchor:E})=>{let I;for(;b&&b!==E;)I=f(b),r(b),b=I;r(E)},F=(b,E,I,B,U,Y,ae,re,se)=>{ae=ae||E.type==="svg",b==null?R(E,I,B,U,Y,ae,re,se):ne(b,E,U,Y,ae,re,se)},R=(b,E,I,B,U,Y,ae,re)=>{let se,y;const{type:v,props:N,shapeFlag:j,transition:le,patchFlag:V,dirs:pe}=b;if(b.el&&g!==void 0&&V===-1)se=b.el=g(b.el);else{if(se=b.el=o(b.type,Y,N&&N.is,N),j&8?u(se,b.children):j&16&&he(b.children,se,null,B,U,Y&&v!=="foreignObject",ae,re),pe&&ti(b,null,B,"created"),N){for(const G in N)G!=="value"&&!as(G)&&s(se,G,null,N[G],Y,b.children,B,U,ye);"value"in N&&s(se,"value",null,N.value),(y=N.onVnodeBeforeMount)&&sn(y,B,b)}K(se,b,b.scopeId,ae,B)}pe&&ti(b,null,B,"beforeMount");const C=(!U||U&&!U.pendingBranch)&&le&&!le.persisted;C&&le.beforeEnter(se),n(se,E,I),((y=N&&N.onVnodeMounted)||C||pe)&&Dt(()=>{y&&sn(y,B,b),C&&le.enter(se),pe&&ti(b,null,B,"mounted")},U)},K=(b,E,I,B,U)=>{if(I&&d(b,I),B)for(let Y=0;Y<B.length;Y++)d(b,B[Y]);if(U){let Y=U.subTree;if(E===Y){const ae=U.vnode;K(b,ae,ae.scopeId,ae.slotScopeIds,U.parent)}}},he=(b,E,I,B,U,Y,ae,re,se=0)=>{for(let y=se;y<b.length;y++){const v=b[y]=re?Ln(b[y]):rn(b[y]);M(null,v,E,I,B,U,Y,ae,re)}},ne=(b,E,I,B,U,Y,ae)=>{const re=E.el=b.el;let{patchFlag:se,dynamicChildren:y,dirs:v}=E;se|=b.patchFlag&16;const N=b.props||Ze,j=E.props||Ze;let le;I&&ni(I,!1),(le=j.onVnodeBeforeUpdate)&&sn(le,I,E,b),v&&ti(E,b,I,"beforeUpdate"),I&&ni(I,!0);const V=U&&E.type!=="foreignObject";if(y?_(b.dynamicChildren,y,re,I,B,V,Y):ae||fe(b,E,re,null,I,B,V,Y,!1),se>0){if(se&16)D(re,E,N,j,I,B,U);else if(se&2&&N.class!==j.class&&s(re,"class",null,j.class,U),se&4&&s(re,"style",N.style,j.style,U),se&8){const pe=E.dynamicProps;for(let C=0;C<pe.length;C++){const G=pe[C],ce=N[G],Me=j[G];(Me!==ce||G==="value")&&s(re,G,ce,Me,U,b.children,I,B,ye)}}se&1&&b.children!==E.children&&u(re,E.children)}else!ae&&y==null&&D(re,E,N,j,I,B,U);((le=j.onVnodeUpdated)||v)&&Dt(()=>{le&&sn(le,I,E,b),v&&ti(E,b,I,"updated")},B)},_=(b,E,I,B,U,Y,ae)=>{for(let re=0;re<E.length;re++){const se=b[re],y=E[re],v=se.el&&(se.type===nn||!ri(se,y)||se.shapeFlag&(6|64))?h(se.el):I;M(se,y,v,null,B,U,Y,ae,!0)}},D=(b,E,I,B,U,Y,ae)=>{if(I!==B){for(const re in B){if(as(re))continue;const se=B[re],y=I[re];se!==y&&re!=="value"&&s(b,re,y,se,ae,E.children,U,Y,ye)}if(I!==Ze)for(const re in I)!as(re)&&!(re in B)&&s(b,re,I[re],null,ae,E.children,U,Y,ye);"value"in B&&s(b,"value",I.value,B.value)}},z=(b,E,I,B,U,Y,ae,re,se)=>{const y=E.el=b?b.el:a(""),v=E.anchor=b?b.anchor:a("");let{patchFlag:N,dynamicChildren:j,slotScopeIds:le}=E;le&&(re=re?re.concat(le):le),b==null?(n(y,I,B),n(v,I,B),he(E.children,I,v,U,Y,ae,re,se)):N>0&&N&64&&j&&b.dynamicChildren?(_(b.dynamicChildren,j,I,U,Y,ae,re),(E.key!=null||U&&E===U.subTree)&&Jc(b,E,!0)):fe(b,E,I,v,U,Y,ae,re,se)},W=(b,E,I,B,U,Y,ae,re,se)=>{E.slotScopeIds=re,b==null?E.shapeFlag&512?U.ctx.activate(E,I,B,ae,se):H(E,I,B,U,Y,ae,se):O(b,E,se)},H=(b,E,I,B,U,Y,ae)=>{const re=b.component=Zp(b,B,U);if(Ms(b)&&(re.ctx.renderer=Le),Kp(re),re.asyncDep){if(U&&U.registerDep(re,q),!b.el){const se=re.subTree=Cn(An);p(null,se,E,I)}return}q(re,b,E,I,U,Y,ae)},O=(b,E,I)=>{const B=E.component=b.component;if(np(b,E,I))if(B.asyncDep&&!B.asyncResolved){J(B,E,I);return}else B.next=E,Zd(B.update),B.update();else E.component=b.component,E.el=b.el,B.vnode=E},q=(b,E,I,B,U,Y,ae)=>{const re=()=>{if(b.isMounted){let{next:v,bu:N,u:j,parent:le,vnode:V}=b,pe=v,C;ni(b,!1),v?(v.el=V.el,J(b,v,ae)):v=V,N&&Oo(N),(C=v.props&&v.props.onVnodeBeforeUpdate)&&sn(C,le,v,V),ni(b,!0);const G=ia(b),ce=b.subTree;b.subTree=G,M(ce,G,h(ce.el),Te(ce),b,U,Y),v.el=G.el,pe===null&&ip(b,G.el),j&&Dt(j,U),(C=v.props&&v.props.onVnodeUpdated)&&Dt(()=>sn(C,le,v,V),U)}else{let v;const{el:N,props:j}=E,{bm:le,m:V,parent:pe}=b,C=ca(E);if(ni(b,!1),le&&Oo(le),!C&&(v=j&&j.onVnodeBeforeMount)&&sn(v,pe,E),ni(b,!0),N&&te){const G=()=>{b.subTree=ia(b),te(N,b.subTree,b,U,null)};C?E.type.__asyncLoader().then(()=>!b.isUnmounted&&G()):G()}else{const G=b.subTree=ia(b);M(null,G,I,B,b,U,Y),E.el=G.el}if(V&&Dt(V,U),!C&&(v=j&&j.onVnodeMounted)){const G=E;Dt(()=>sn(v,pe,G),U)}E.shapeFlag&256&&b.a&&Dt(b.a,U),b.isMounted=!0,E=I=B=null}},se=b.effect=new ko(re,()=>_c(b.update),b.scope),y=b.update=se.run.bind(se);y.id=b.uid,ni(b,!0),y()},J=(b,E,I)=>{E.component=b;const B=b.vnode.props;b.vnode=E,b.next=null,Ap(b,E.props,B,I),Rp(b,E.children,I),yi(),ta(void 0,b.update),Qn()},fe=(b,E,I,B,U,Y,ae,re,se=!1)=>{const y=b&&b.children,v=b?b.shapeFlag:0,N=E.children,{patchFlag:j,shapeFlag:le}=E;if(j>0){if(j&128){ie(y,N,I,B,U,Y,ae,re,se);return}else if(j&256){ee(y,N,I,B,U,Y,ae,re,se);return}}le&8?(v&16&&ye(y,U,Y),N!==y&&u(I,N)):v&16?le&16?ie(y,N,I,B,U,Y,ae,re,se):ye(y,U,Y,!0):(v&8&&u(I,""),le&16&&he(N,I,B,U,Y,ae,re,se))},ee=(b,E,I,B,U,Y,ae,re,se)=>{b=b||mi,E=E||mi;const y=b.length,v=E.length,N=Math.min(y,v);let j;for(j=0;j<N;j++){const le=E[j]=se?Ln(E[j]):rn(E[j]);M(b[j],le,I,null,U,Y,ae,re,se)}y>v?ye(b,U,Y,!0,!1,N):he(E,I,B,U,Y,ae,re,se,N)},ie=(b,E,I,B,U,Y,ae,re,se)=>{let y=0;const v=E.length;let N=b.length-1,j=v-1;for(;y<=N&&y<=j;){const le=b[y],V=E[y]=se?Ln(E[y]):rn(E[y]);if(ri(le,V))M(le,V,I,null,U,Y,ae,re,se);else break;y++}for(;y<=N&&y<=j;){const le=b[N],V=E[j]=se?Ln(E[j]):rn(E[j]);if(ri(le,V))M(le,V,I,null,U,Y,ae,re,se);else break;N--,j--}if(y>N){if(y<=j){const le=j+1,V=le<v?E[le].el:B;for(;y<=j;)M(null,E[y]=se?Ln(E[y]):rn(E[y]),I,V,U,Y,ae,re,se),y++}}else if(y>j)for(;y<=N;)xe(b[y],U,Y,!0),y++;else{const le=y,V=y,pe=new Map;for(y=V;y<=j;y++){const be=E[y]=se?Ln(E[y]):rn(E[y]);be.key!=null&&pe.set(be.key,y)}let C,G=0;const ce=j-V+1;let Me=!1,P=0;const _e=new Array(ce);for(y=0;y<ce;y++)_e[y]=0;for(y=le;y<=N;y++){const be=b[y];if(G>=ce){xe(be,U,Y,!0);continue}let Z;if(be.key!=null)Z=pe.get(be.key);else for(C=V;C<=j;C++)if(_e[C-V]===0&&ri(be,E[C])){Z=C;break}Z===void 0?xe(be,U,Y,!0):(_e[Z-V]=y+1,Z>=P?P=Z:Me=!0,M(be,E[Z],I,null,U,Y,ae,re,se),G++)}const ge=Me?Np(_e):mi;for(C=ge.length-1,y=ce-1;y>=0;y--){const be=V+y,Z=E[be],we=be+1<v?E[be+1].el:B;_e[y]===0?M(null,Z,I,we,U,Y,ae,re,se):Me&&(C<0||y!==ge[C]?de(Z,I,we,2):C--)}}},de=(b,E,I,B,U=null)=>{const{el:Y,type:ae,transition:re,children:se,shapeFlag:y}=b;if(y&6){de(b.component.subTree,E,I,B);return}if(y&128){b.suspense.move(E,I,B);return}if(y&64){ae.move(b,E,I,Le);return}if(ae===nn){n(Y,E,I);for(let N=0;N<se.length;N++)de(se[N],E,I,B);n(b.anchor,E,I);return}if(ae===ga){w(b,E,I);return}if(B!==2&&y&1&&re)if(B===0)re.beforeEnter(Y),n(Y,E,I),Dt(()=>re.enter(Y),U);else{const{leave:N,delayLeave:j,afterLeave:le}=re,V=()=>n(Y,E,I),pe=()=>{N(Y,()=>{V(),le&&le()})};j?j(Y,V,pe):pe()}else n(Y,E,I)},xe=(b,E,I,B=!1,U=!1)=>{const{type:Y,props:ae,ref:re,children:se,dynamicChildren:y,shapeFlag:v,patchFlag:N,dirs:j}=b;if(re!=null&&pa(re,null,I,b,!0),v&256){E.ctx.deactivate(b);return}const le=v&1&&j,V=!ca(b);let pe;if(V&&(pe=ae&&ae.onVnodeBeforeUnmount)&&sn(pe,E,b),v&6)Oe(b.component,I,B);else{if(v&128){b.suspense.unmount(I,B);return}le&&ti(b,null,E,"beforeUnmount"),v&64?b.type.remove(b,E,I,U,Le,B):y&&(Y!==nn||N>0&&N&64)?ye(y,E,I,!1,!0):(Y===nn&&N&(128|256)||!U&&v&16)&&ye(se,E,I),B&&Se(b)}(V&&(pe=ae&&ae.onVnodeUnmounted)||le)&&Dt(()=>{pe&&sn(pe,E,b),le&&ti(b,null,E,"unmounted")},I)},Se=b=>{const{type:E,el:I,anchor:B,transition:U}=b;if(E===nn){Q(I,B);return}if(E===ga){T(b);return}const Y=()=>{r(I),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(b.shapeFlag&1&&U&&!U.persisted){const{leave:ae,delayLeave:re}=U,se=()=>ae(I,Y);re?re(b.el,Y,se):se()}else Y()},Q=(b,E)=>{let I;for(;b!==E;)I=f(b),r(b),b=I;r(E)},Oe=(b,E,I)=>{const{bum:B,scope:U,update:Y,subTree:ae,um:re}=b;B&&Oo(B),U.stop(),Y&&(Y.active=!1,xe(ae,b,E,I)),re&&Dt(re,E),Dt(()=>{b.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&b.asyncDep&&!b.asyncResolved&&b.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},ye=(b,E,I,B=!1,U=!1,Y=0)=>{for(let ae=Y;ae<b.length;ae++)xe(b[ae],E,I,B,U)},Te=b=>b.shapeFlag&6?Te(b.component.subTree):b.shapeFlag&128?b.suspense.next():f(b.anchor||b.el),ve=(b,E,I)=>{b==null?E._vnode&&xe(E._vnode,null,null,!0):M(E._vnode||null,b,E,null,null,null,I),Mc(),E._vnode=b},Le={p:M,um:xe,m:de,r:Se,mt:H,mc:he,pc:fe,pbc:_,n:Te,o:i};let Ae,te;return e&&([Ae,te]=e(Le)),{render:ve,hydrate:Ae,createApp:Dp(ve,Ae)}}function ni({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function Jc(i,e,t=!1){const n=i.children,r=e.children;if(Fe(n)&&Fe(r))for(let s=0;s<n.length;s++){const o=n[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Ln(r[s]),a.el=o.el),t||Jc(o,a))}}function Np(i){const e=i.slice(),t=[0];let n,r,s,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(r=t[t.length-1],i[r]<c){e[n]=r,t.push(n);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,i[t[a]]<c?s=a+1:o=a;c<i[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const Bp=i=>i.__isTeleport,Op=Symbol(),nn=Symbol(void 0),ma=Symbol(void 0),An=Symbol(void 0),ga=Symbol(void 0),Sr=[];let ii=null;function nb(i=!1){Sr.push(ii=i?null:[])}function zp(){Sr.pop(),ii=Sr[Sr.length-1]||null}let Ss=1;function Kc(i){Ss+=i}function Up(i){return i.dynamicChildren=Ss>0?ii||mi:null,zp(),Ss>0&&ii&&ii.push(i),i}function ib(i,e,t,n,r){return Up(Cn(i,e,t,n,r,!0))}function Hp(i){return i?i.__v_isVNode===!0:!1}function ri(i,e){return i.type===e.type&&i.key===e.key}const Es="__vInternal",$c=({key:i})=>i!=null?i:null,Ts=({ref:i,ref_key:e,ref_for:t})=>i!=null?_t(i)||vt(i)||Ne(i)?{i:tn,r:i,k:e,f:!!t}:i:null;function Vp(i,e=null,t=null,n=0,r=null,s=i===nn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&$c(e),ref:e&&Ts(e),scopeId:Sc,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(xa(l,t),s&128&&i.normalize(l)):t&&(l.shapeFlag|=_t(t)?8:16),Ss>0&&!o&&ii&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&ii.push(l),l}const Cn=kp;function kp(i,e=null,t=null,n=0,r=null,s=!1){if((!i||i===Op)&&(i=An),Hp(i)){const a=Ei(i,e,!0);return t&&xa(a,t),a}if(tm(i)&&(i=i.__vccOpts),e){e=Gp(e);let{class:a,style:l}=e;a&&!_t(a)&&(e.class=Po(a)),Tt(l)&&(pc(l)&&!Fe(l)&&(l=xt({},l)),e.style=Ro(l))}const o=_t(i)?1:rp(i)?128:Bp(i)?64:Tt(i)?4:Ne(i)?2:0;return Vp(i,e,t,n,r,o,s,!0)}function Gp(i){return i?pc(i)||Es in i?xt({},i):i:null}function Ei(i,e,t=!1){const{props:n,ref:r,patchFlag:s,children:o}=i,a=e?qp(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:a,key:a&&$c(a),ref:e&&e.ref?t&&r?Fe(r)?r.concat(Ts(e)):[r,Ts(e)]:Ts(e):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:o,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==nn?s===-1?16:s|16:s,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&Ei(i.ssContent),ssFallback:i.ssFallback&&Ei(i.ssFallback),el:i.el,anchor:i.anchor}}function Wp(i=" ",e=0){return Cn(ma,null,i,e)}function rn(i){return i==null||typeof i=="boolean"?Cn(An):Fe(i)?Cn(nn,null,i.slice()):typeof i=="object"?Ln(i):Cn(ma,null,String(i))}function Ln(i){return i.el===null||i.memo?i:Ei(i)}function xa(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(Fe(e))t=16;else if(typeof e=="object")if(n&(1|64)){const r=e.default;r&&(r._c&&(r._d=!1),xa(i,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(Es in e)?e._ctx=tn:r===3&&tn&&(tn.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else Ne(e)?(e={default:e,_ctx:tn},t=32):(e=String(e),n&64?(t=16,e=[Wp(e)]):t=8);i.children=e,i.shapeFlag|=t}function qp(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=Po([e.class,n.class]));else if(r==="style")e.style=Ro([e.style,n.style]);else if(ss(r)){const s=e[r],o=n[r];o&&s!==o&&!(Fe(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=n[r])}return e}function sn(i,e,t,n=null){Ht(i,e,7,[t,n])}const _a=i=>i?Qc(i)?va(i)||i.proxy:_a(i.parent):null,As=xt(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>_a(i.parent),$root:i=>_a(i.root),$emit:i=>i.emit,$options:i=>zc(i),$forceUpdate:i=>()=>_c(i.update),$nextTick:i=>jd.bind(i.proxy),$watch:i=>ap.bind(i)}),Xp={get({_:i},e){const{ctx:t,setupState:n,data:r,props:s,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return n[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(n!==Ze&&Ve(n,e))return o[e]=1,n[e];if(r!==Ze&&Ve(r,e))return o[e]=2,r[e];if((c=i.propsOptions[0])&&Ve(c,e))return o[e]=3,s[e];if(t!==Ze&&Ve(t,e))return o[e]=4,t[e];ua&&(o[e]=0)}}const u=As[e];let h,f;if(u)return e==="$attrs"&&Ft(i,"get",e),u(i);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==Ze&&Ve(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,Ve(f,e))return f[e]},set({_:i},e,t){const{data:n,setupState:r,ctx:s}=i;if(r!==Ze&&Ve(r,e))r[e]=t;else if(n!==Ze&&Ve(n,e))n[e]=t;else if(Ve(i.props,e))return!1;return e[0]==="$"&&e.slice(1)in i?!1:(s[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:r,propsOptions:s}},o){let a;return!!t[o]||i!==Ze&&Ve(i,o)||e!==Ze&&Ve(e,o)||(a=s[0])&&Ve(a,o)||Ve(n,o)||Ve(As,o)||Ve(r.config.globalProperties,o)}},jp=Zc();let Yp=0;function Zp(i,e,t){const n=i.type,r=(e?e.appContext:i.appContext)||jp,s={uid:Yp++,vnode:i,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new hd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Vc(n,r),emitsOptions:wc(n,r),emit:null,emitted:null,propsDefaults:Ze,inheritAttrs:n.inheritAttrs,ctx:Ze,data:Ze,props:Ze,attrs:Ze,slots:Ze,refs:Ze,setupState:Ze,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=$d.bind(null,s),i.ce&&i.ce(s),s}let dt=null;const Jp=()=>dt||tn,Ti=i=>{dt=i,i.scope.on()},si=()=>{dt&&dt.scope.off(),dt=null};function Qc(i){return i.vnode.shapeFlag&4}let Er=!1;function Kp(i,e=!1){Er=e;const{props:t,children:n}=i.vnode,r=Qc(i);Tp(i,t,r,e),Lp(i,n);const s=r?$p(i,e):void 0;return Er=!1,s}function $p(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=mc(new Proxy(i.ctx,Xp));const{setup:n}=t;if(n){const r=i.setupContext=n.length>1?em(i):null;Ti(i),yi();const s=En(n,i,0,[i.props,r]);if(Qn(),si(),jl(s)){if(s.then(si,si),e)return s.then(o=>{eu(i,o,e)}).catch(o=>{_s(o,i,0)});i.asyncDep=s}else eu(i,s,e)}else nu(i,e)}function eu(i,e,t){Ne(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:Tt(e)&&(i.setupState=gc(e)),nu(i,t)}let tu;function nu(i,e,t){const n=i.type;if(!i.render){if(!e&&tu&&!n.render){const r=n.template;if(r){const{isCustomElement:s,compilerOptions:o}=i.appContext.config,{delimiters:a,compilerOptions:l}=n,c=xt(xt({isCustomElement:s,delimiters:a},o),l);n.render=tu(r,c)}}i.render=n.render||qt}Ti(i),yi(),Mp(i),Qn(),si()}function Qp(i){return new Proxy(i.attrs,{get(e,t){return Ft(i,"get","$attrs"),e[t]}})}function em(i){const e=n=>{i.exposed=n||{}};let t;return{get attrs(){return t||(t=Qp(i))},slots:i.slots,emit:i.emit,expose:e}}function va(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(gc(mc(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in As)return As[t](i)}}))}function tm(i){return Ne(i)&&"__vccOpts"in i}const nm=(i,e)=>qd(i,e,Er),im="3.2.29",rm="http://www.w3.org/2000/svg",oi=typeof document!="undefined"?document:null,iu=oi&&oi.createElement("template"),sm={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const r=e?oi.createElementNS(rm,i):oi.createElement(i,t?{is:t}:void 0);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>oi.createTextNode(i),createComment:i=>oi.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>oi.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},cloneNode(i){const e=i.cloneNode(!0);return"_value"in i&&(e._value=i._value),e},insertStaticContent(i,e,t,n,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{iu.innerHTML=n?`<svg>${i}</svg>`:i;const a=iu.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function om(i,e,t){const n=i._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}function am(i,e,t){const n=i.style,r=_t(t);if(t&&!r){for(const s in t)ya(n,s,t[s]);if(e&&!_t(e))for(const s in e)t[s]==null&&ya(n,s,"")}else{const s=n.display;r?e!==t&&(n.cssText=t):e&&i.removeAttribute("style"),"_vod"in i&&(n.display=s)}}const ru=/\s*!important$/;function ya(i,e,t){if(Fe(t))t.forEach(n=>ya(i,e,n));else if(e.startsWith("--"))i.setProperty(e,t);else{const n=lm(i,e);ru.test(t)?i.setProperty(xi(n),t.replace(ru,""),"important"):i[n]=t}}const su=["Webkit","Moz","ms"],Ma={};function lm(i,e){const t=Ma[e];if(t)return t;let n=gi(e);if(n!=="filter"&&n in i)return Ma[e]=n;n=Yl(n);for(let r=0;r<su.length;r++){const s=su[r]+n;if(s in i)return Ma[e]=s}return e}const ou="http://www.w3.org/1999/xlink";function cm(i,e,t,n,r){if(n&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(ou,e.slice(6,e.length)):i.setAttributeNS(ou,e,t);else{const s=Jf(e);t==null||s&&!Xl(t)?i.removeAttribute(e):i.setAttribute(e,s?"":t)}}function um(i,e,t,n,r,s,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,r,s),i[e]=t==null?"":t;return}if(e==="value"&&i.tagName!=="PROGRESS"&&!i.tagName.includes("-")){i._value=t;const a=t==null?"":t;(i.value!==a||i.tagName==="OPTION")&&(i.value=a),t==null&&i.removeAttribute(e);return}if(t===""||t==null){const a=typeof i[e];if(a==="boolean"){i[e]=Xl(t);return}else if(t==null&&a==="string"){i[e]="",i.removeAttribute(e);return}else if(a==="number"){try{i[e]=0}catch{}i.removeAttribute(e);return}}try{i[e]=t}catch{}}let Cs=Date.now,au=!1;if(typeof window!="undefined"){Cs()>document.createEvent("Event").timeStamp&&(Cs=()=>performance.now());const i=navigator.userAgent.match(/firefox\/(\d+)/i);au=!!(i&&Number(i[1])<=53)}let ba=0;const hm=Promise.resolve(),fm=()=>{ba=0},dm=()=>ba||(hm.then(fm),ba=Cs());function pm(i,e,t,n){i.addEventListener(e,t,n)}function mm(i,e,t,n){i.removeEventListener(e,t,n)}function gm(i,e,t,n,r=null){const s=i._vei||(i._vei={}),o=s[e];if(n&&o)o.value=n;else{const[a,l]=xm(e);if(n){const c=s[e]=_m(n,r);pm(i,a,c,l)}else o&&(mm(i,a,o,l),s[e]=void 0)}}const lu=/(?:Once|Passive|Capture)$/;function xm(i){let e;if(lu.test(i)){e={};let t;for(;t=i.match(lu);)i=i.slice(0,i.length-t[0].length),e[t[0].toLowerCase()]=!0}return[xi(i.slice(2)),e]}function _m(i,e){const t=n=>{const r=n.timeStamp||Cs();(au||r>=t.attached-1)&&Ht(vm(n,t.value),e,5,[n])};return t.value=i,t.attached=dm(),t}function vm(i,e){if(Fe(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>r=>!r._stopped&&n&&n(r))}else return e}const cu=/^on[a-z]/,ym=(i,e,t,n,r=!1,s,o,a,l)=>{e==="class"?om(i,n,r):e==="style"?am(i,t,n):ss(e)?Do(e)||gm(i,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Mm(i,e,n,r))?um(i,e,n,s,o,a,l):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),cm(i,e,n,r))};function Mm(i,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in i&&cu.test(e)&&Ne(t)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA"||cu.test(e)&&_t(t)?!1:e in i}const bm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};up.props;const wm=xt({patchProp:ym},sm);let uu;function Sm(){return uu||(uu=Ip(wm))}const rb=(...i)=>{const e=Sm().createApp(...i),{mount:t}=e;return e.mount=n=>{const r=Em(n);if(!r)return;const s=e._component;!Ne(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Em(i){return _t(i)?document.querySelector(i):i}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wa="137",Ai={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ci={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Tm=0,hu=1,Am=2,fu=1,Cm=2,Tr=3,Li=0,st=1,Ri=2,du=1,Rn=0,Ar=1,pu=2,mu=3,gu=4,Lm=5,Pi=100,Rm=101,Pm=102,xu=103,_u=104,Dm=200,Im=201,Fm=202,Nm=203,vu=204,yu=205,Bm=206,Om=207,zm=208,Um=209,Hm=210,Vm=0,km=1,Gm=2,Sa=3,Wm=4,qm=5,Xm=6,jm=7,Ls=0,Ym=1,Zm=2,Pn=0,Jm=1,Km=2,$m=3,Qm=4,eg=5,Mu=300,Cr=301,Lr=302,Ea=303,Ta=304,Rs=306,Aa=307,Ca=1e3,Bt=1001,La=1002,lt=1003,bu=1004,wu=1005,yt=1006,tg=1007,Ps=1008,Dn=1009,ng=1010,ig=1011,Rr=1012,rg=1013,Ds=1014,ai=1015,Di=1016,sg=1017,og=1018,Ii=1020,ag=1021,Ct=1023,lg=1024,cg=1025,li=1026,Fi=1027,ug=1028,hg=1029,fg=1030,dg=1031,pg=1033,Ra=33776,Pa=33777,Da=33778,Ia=33779,Su=35840,Eu=35841,Tu=35842,Au=35843,mg=36196,Cu=37492,Lu=37496,Ru=37808,Pu=37809,Du=37810,Iu=37811,Fu=37812,Nu=37813,Bu=37814,Ou=37815,zu=37816,Uu=37817,Hu=37818,Vu=37819,ku=37820,Gu=37821,Wu=36492,gg=2200,xg=2201,_g=2202,Is=2300,Fs=2301,Fa=2302,Ni=2400,Bi=2401,Ns=2402,Na=2500,qu=2501,vg=0,In=3e3,Ke=3001,yg=3200,Mg=3201,Oi=0,bg=1,Ba=7680,wg=519,Pr=35044,Bs=35048,Xu="300 es",Oa=1035;class Fn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const pt=[];for(let i=0;i<256;i++)pt[i]=(i<16?"0":"")+i.toString(16);let Os=1234567;const Dr=Math.PI/180,Ir=180/Math.PI;function Xt(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pt[i&255]+pt[i>>8&255]+pt[i>>16&255]+pt[i>>24&255]+"-"+pt[e&255]+pt[e>>8&255]+"-"+pt[e>>16&15|64]+pt[e>>24&255]+"-"+pt[t&63|128]+pt[t>>8&255]+"-"+pt[t>>16&255]+pt[t>>24&255]+pt[n&255]+pt[n>>8&255]+pt[n>>16&255]+pt[n>>24&255]).toUpperCase()}function Lt(i,e,t){return Math.max(e,Math.min(t,i))}function za(i,e){return(i%e+e)%e}function Sg(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Eg(i,e,t){return i!==e?(t-i)/(e-i):0}function Fr(i,e,t){return(1-t)*i+t*e}function Tg(i,e,t,n){return Fr(i,e,1-Math.exp(-t*n))}function Ag(i,e=1){return e-Math.abs(za(i,e*2)-e)}function Cg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Lg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Rg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Pg(i,e){return i+Math.random()*(e-i)}function Dg(i){return i*(.5-Math.random())}function Ig(i){return i!==void 0&&(Os=i%2147483647),Os=Os*16807%2147483647,(Os-1)/2147483646}function Fg(i){return i*Dr}function Ng(i){return i*Ir}function Ua(i){return(i&i-1)==0&&i!==0}function Bg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ju(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Og(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*h,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}var sb=Object.freeze({__proto__:null,DEG2RAD:Dr,RAD2DEG:Ir,generateUUID:Xt,clamp:Lt,euclideanModulo:za,mapLinear:Sg,inverseLerp:Eg,lerp:Fr,damp:Tg,pingpong:Ag,smoothstep:Cg,smootherstep:Lg,randInt:Rg,randFloat:Pg,randFloatSpread:Dg,seededRandom:Ig,degToRad:Fg,radToDeg:Ng,isPowerOfTwo:Ua,ceilPowerOfTwo:Bg,floorPowerOfTwo:ju,setQuaternionFromProperEuler:Og});class ue{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}ue.prototype.isVector2=!0;class mt{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],x=r[0],M=r[3],m=r[6],p=r[1],L=r[4],w=r[7],T=r[2],F=r[5],R=r[8];return s[0]=o*x+a*p+l*T,s[3]=o*M+a*L+l*F,s[6]=o*m+a*w+l*R,s[1]=c*x+u*p+h*T,s[4]=c*M+u*L+h*F,s[7]=c*m+u*w+h*R,s[2]=f*x+d*p+g*T,s[5]=f*M+d*L+g*F,s[8]=f*m+d*w+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,g=t*h+n*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(r*c-u*n)*x,e[2]=(a*n-r*o)*x,e[3]=f*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],c=r[4],u=r[7];return r[0]=t*s+n*l,r[3]=t*o+n*c,r[6]=t*a+n*u,r[1]=-n*s+t*l,r[4]=-n*o+t*c,r[7]=-n*a+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}mt.prototype.isMatrix3=!0;function Yu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>65535)return!0;return!1}function Nr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const Zu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jt={h:0,s:0,l:0},zs={h:0,s:0,l:0};function Ha(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function zi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Va(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}class Ee{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=za(e,1),t=Lt(t,0,1),n=Lt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=Ha(s,r,e+1/3),this.g=Ha(s,r,e),this.b=Ha(s,r,e-1/3)}return this}setStyle(e){function t(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,t(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,t(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const a=parseFloat(r[1])/360,l=parseInt(r[2],10)/100,c=parseInt(r[3],10)/100;return t(r[4]),this.setHSL(a,l,c)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=n[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=Zu[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=Va(e.r),this.g=Va(e.g),this.b=Va(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){const t=this.r,n=this.g,r=this.b,s=Math.max(t,n,r),o=Math.min(t,n,r);let a,l;const c=(o+s)/2;if(o===s)a=0,l=0;else{const u=s-o;switch(l=c<=.5?u/(s+o):u/(2-s-o),s){case t:a=(n-r)/u+(n<r?6:0);break;case n:a=(r-t)/u+2;break;case r:a=(t-n)/u+4;break}a/=6}return e.h=a,e.s=l,e.l=c,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,n){return this.getHSL(jt),jt.h+=e,jt.s+=t,jt.l+=n,this.setHSL(jt.h,jt.s,jt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(jt),e.getHSL(zs);const n=Fr(jt.h,zs.h,t),r=Fr(jt.s,zs.s,t),s=Fr(jt.l,zs.l,t);return this.setHSL(n,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}Ee.NAMES=Zu;Ee.prototype.isColor=!0;Ee.prototype.r=1;Ee.prototype.g=1;Ee.prototype.b=1;let Ui;class ci{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ui===void 0&&(Ui=Nr("canvas")),Ui.width=e.width,Ui.height=e.height;const n=Ui.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ui}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Nr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=zi(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zi(t[n]/255)*255):t[n]=zi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zg=0;class ut extends Fn{constructor(e=ut.DEFAULT_IMAGE,t=ut.DEFAULT_MAPPING,n=Bt,r=Bt,s=yt,o=Ps,a=Ct,l=Dn,c=1,u=In){super();Object.defineProperty(this,"id",{value:zg++}),this.uuid=Xt(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const r=this.image;if(r.uuid===void 0&&(r.uuid=Xt()),!t&&e.images[r.uuid]===void 0){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ka(r[o].image)):s.push(ka(r[o]))}else s=ka(r);e.images[r.uuid]={uuid:r.uuid,url:s}}n.image=r.uuid}return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ca:e.x=e.x-Math.floor(e.x);break;case Bt:e.x=e.x<0?0:1;break;case La:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ca:e.y=e.y-Math.floor(e.y);break;case Bt:e.y=e.y<0?0:1;break;case La:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}}ut.DEFAULT_IMAGE=void 0;ut.DEFAULT_MAPPING=Mu;ut.prototype.isTexture=!0;function ka(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?ci.getDataURL(i):i.data?{data:Array.prototype.slice.call(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class qe{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const o=.01,a=.1,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],x=l[2],M=l[6],m=l[10];if(Math.abs(u-f)<o&&Math.abs(h-x)<o&&Math.abs(g-M)<o){if(Math.abs(u+f)<a&&Math.abs(h+x)<a&&Math.abs(g+M)<a&&Math.abs(c+d+m-3)<a)return this.set(1,0,0,0),this;t=Math.PI;const L=(c+1)/2,w=(d+1)/2,T=(m+1)/2,F=(u+f)/4,R=(h+x)/4,K=(g+M)/4;return L>w&&L>T?L<o?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(L),r=F/n,s=R/n):w>T?w<o?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),n=F/r,s=K/r):T<o?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),n=R/s,r=K/s),this.set(n,r,s,t),this}let p=Math.sqrt((M-g)*(M-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(p)<.001&&(p=1),this.x=(M-g)/p,this.y=(h-x)/p,this.z=(f-u)/p,this.w=Math.acos((c+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}qe.prototype.isVector4=!0;class Ot extends Fn{constructor(e,t,n={}){super();this.width=e,this.height=t,this.depth=1,this.scissor=new qe(0,0,e,t),this.scissorTest=!1,this.viewport=new qe(0,0,e,t),this.texture=new ut(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.image={width:e,height:t,depth:1},this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:yt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image=Object.assign({},e.texture.image),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}Ot.prototype.isWebGLRenderTarget=!0;class Ug extends Ot{constructor(e,t,n){super(e,t);const r=this.texture;this.texture=[];for(let s=0;s<n;s++)this.texture[s]=r.clone()}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.texture.length;r<s;r++)this.texture[r].image.width=e,this.texture[r].image.height=t,this.texture[r].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone();return this}}Ug.prototype.isWebGLMultipleRenderTargets=!0;class Ga extends Ot{constructor(e,t,n={}){super(e,t,n);this.samples=4,this.ignoreDepthForMultisampleCopy=n.ignoreDepth!==void 0?n.ignoreDepth:!0,this.useRenderToTexture=n.useRenderToTexture!==void 0?n.useRenderToTexture:!1,this.useRenderbuffer=this.useRenderToTexture===!1}copy(e){return super.copy.call(this,e),this.samples=e.samples,this.useRenderToTexture=e.useRenderToTexture,this.useRenderbuffer=e.useRenderbuffer,this}}Ga.prototype.isWebGLMultisampleRenderTarget=!0;class Mt{constructor(e=0,t=0,n=0,r=1){this._x=e,this._y=t,this._z=n,this._w=r}static slerp(e,t,n,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,r)}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const f=s[o+0],d=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==f||c!==d||u!==g){let M=1-a;const m=l*f+c*d+u*g+h*x,p=m>=0?1:-1,L=1-m*m;if(L>Number.EPSILON){const T=Math.sqrt(L),F=Math.atan2(T,m*p);M=Math.sin(M*F)/T,a=Math.sin(a*F)/T}const w=a*p;if(l=l*M+f*w,c=c*M+d*w,u=u*M+g*w,h=h*M+x*w,M===1-a){const T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),f=l(n/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Mt.prototype.isQuaternion=!0;class A{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Ju.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ju.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*n,u=l*n+a*t-s*r,h=l*r+s*n-o*t,f=-s*t-o*n-a*r;return this.x=c*l+f*-s+u*-a-h*-o,this.y=u*l+f*-o+h*-s-c*-a,this.z=h*l+f*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Wa.copy(this).projectOnVector(e),this.sub(Wa)}reflect(e){return this.sub(Wa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}A.prototype.isVector3=!0;const Wa=new A,Ju=new Mt;class Yt{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<r&&(r=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<r&&(r=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)ui.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(ui)}else n.boundingBox===null&&n.computeBoundingBox(),qa.copy(n.boundingBox),qa.applyMatrix4(e.matrixWorld),this.union(qa);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Br),Us.subVectors(this.max,Br),Hi.subVectors(e.a,Br),Vi.subVectors(e.b,Br),ki.subVectors(e.c,Br),Nn.subVectors(Vi,Hi),Bn.subVectors(ki,Vi),hi.subVectors(Hi,ki);let t=[0,-Nn.z,Nn.y,0,-Bn.z,Bn.y,0,-hi.z,hi.y,Nn.z,0,-Nn.x,Bn.z,0,-Bn.x,hi.z,0,-hi.x,-Nn.y,Nn.x,0,-Bn.y,Bn.x,0,-hi.y,hi.x,0];return!Xa(t,Hi,Vi,ki,Us)||(t=[1,0,0,0,1,0,0,0,1],!Xa(t,Hi,Vi,ki,Us))?!1:(Hs.crossVectors(Nn,Bn),t=[Hs.x,Hs.y,Hs.z],Xa(t,Hi,Vi,ki,Us))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ui.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}Yt.prototype.isBox3=!0;const gn=[new A,new A,new A,new A,new A,new A,new A,new A],ui=new A,qa=new Yt,Hi=new A,Vi=new A,ki=new A,Nn=new A,Bn=new A,hi=new A,Br=new A,Us=new A,Hs=new A,fi=new A;function Xa(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){fi.fromArray(i,s);const a=r.x*Math.abs(fi.x)+r.y*Math.abs(fi.y)+r.z*Math.abs(fi.z),l=e.dot(fi),c=t.dot(fi),u=n.dot(fi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Hg=new Yt,Ku=new A,Vs=new A,ja=new A;class Gi{constructor(e=new A,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Hg.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){ja.subVectors(e,this.center);const t=ja.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.add(ja.multiplyScalar(r/n)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?Vs.set(0,0,1).multiplyScalar(e.radius):Vs.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Ku.copy(e.center).add(Vs)),this.expandByPoint(Ku.copy(e.center).sub(Vs)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xn=new A,Ya=new A,ks=new A,On=new A,Za=new A,Gs=new A,Ja=new A;class Wi{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xn.copy(this.direction).multiplyScalar(t).add(this.origin),xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ya.copy(e).add(t).multiplyScalar(.5),ks.copy(t).sub(e).normalize(),On.copy(this.origin).sub(Ya);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ks),a=On.dot(this.direction),l=-On.dot(ks),c=On.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const x=1/u;h*=x,f*=x,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),r&&r.copy(ks).multiplyScalar(f).add(Ya),d}intersectSphere(e,t){xn.subVectors(e.center,this.origin);const n=xn.dot(this.direction),r=xn.dot(xn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>r||((s>n||n!==n)&&(n=s),(o<r||r!==r)&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,xn)!==null}intersectTriangle(e,t,n,r,s){Za.subVectors(t,e),Gs.subVectors(n,e),Ja.crossVectors(Za,Gs);let o=this.direction.dot(Ja),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;On.subVectors(this.origin,e);const l=a*this.direction.dot(Gs.crossVectors(On,Gs));if(l<0)return null;const c=a*this.direction.dot(Za.cross(On));if(c<0||l+c>o)return null;const u=-a*On.dot(Ja);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ce{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,r,s,o,a,l,c,u,h,f,d,g,x,M){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=g,m[11]=x,m[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ce().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/qi.setFromMatrixColumn(e,0).length(),s=1/qi.setFromMatrixColumn(e,1).length(),o=1/qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,x=c*h;t[0]=f+x*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,x=c*h;t[0]=f-x*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-x*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vg,e,kg)}lookAt(e,t,n){const r=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),zn.crossVectors(n,zt),zn.lengthSq()===0&&(Math.abs(n.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),zn.crossVectors(n,zt)),zn.normalize(),Ws.crossVectors(zt,zn),r[0]=zn.x,r[4]=Ws.x,r[8]=zt.x,r[1]=zn.y,r[5]=Ws.y,r[9]=zt.y,r[2]=zn.z,r[6]=Ws.z,r[10]=zt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],x=n[6],M=n[10],m=n[14],p=n[3],L=n[7],w=n[11],T=n[15],F=r[0],R=r[4],K=r[8],he=r[12],ne=r[1],_=r[5],D=r[9],z=r[13],W=r[2],H=r[6],O=r[10],q=r[14],J=r[3],fe=r[7],ee=r[11],ie=r[15];return s[0]=o*F+a*ne+l*W+c*J,s[4]=o*R+a*_+l*H+c*fe,s[8]=o*K+a*D+l*O+c*ee,s[12]=o*he+a*z+l*q+c*ie,s[1]=u*F+h*ne+f*W+d*J,s[5]=u*R+h*_+f*H+d*fe,s[9]=u*K+h*D+f*O+d*ee,s[13]=u*he+h*z+f*q+d*ie,s[2]=g*F+x*ne+M*W+m*J,s[6]=g*R+x*_+M*H+m*fe,s[10]=g*K+x*D+M*O+m*ee,s[14]=g*he+x*z+M*q+m*ie,s[3]=p*F+L*ne+w*W+T*J,s[7]=p*R+L*_+w*H+T*fe,s[11]=p*K+L*D+w*O+T*ee,s[15]=p*he+L*z+w*q+T*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],x=e[7],M=e[11],m=e[15];return g*(+s*l*h-r*c*h-s*a*f+n*c*f+r*a*d-n*l*d)+x*(+t*l*d-t*c*f+s*o*f-r*o*d+r*c*u-s*l*u)+M*(+t*c*h-t*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+m*(-r*a*u-t*l*h+t*a*f+r*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],x=e[13],M=e[14],m=e[15],p=h*M*c-x*f*c+x*l*d-a*M*d-h*l*m+a*f*m,L=g*f*c-u*M*c-g*l*d+o*M*d+u*l*m-o*f*m,w=u*x*c-g*h*c+g*a*d-o*x*d-u*a*m+o*h*m,T=g*h*l-u*x*l-g*a*f+o*x*f+u*a*M-o*h*M,F=t*p+n*L+r*w+s*T;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/F;return e[0]=p*R,e[1]=(x*f*s-h*M*s-x*r*d+n*M*d+h*r*m-n*f*m)*R,e[2]=(a*M*s-x*l*s+x*r*c-n*M*c-a*r*m+n*l*m)*R,e[3]=(h*l*s-a*f*s-h*r*c+n*f*c+a*r*d-n*l*d)*R,e[4]=L*R,e[5]=(u*M*s-g*f*s+g*r*d-t*M*d-u*r*m+t*f*m)*R,e[6]=(g*l*s-o*M*s-g*r*c+t*M*c+o*r*m-t*l*m)*R,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*d+t*l*d)*R,e[8]=w*R,e[9]=(g*h*s-u*x*s-g*n*d+t*x*d+u*n*m-t*h*m)*R,e[10]=(o*x*s-g*a*s+g*n*c-t*x*c-o*n*m+t*a*m)*R,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*R,e[12]=T*R,e[13]=(u*x*r-g*h*r+g*n*f-t*x*f-u*n*M+t*h*M)*R,e[14]=(g*a*r-o*x*r-g*n*l+t*x*l+o*n*M-t*a*M)*R,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*f+t*a*f)*R,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,g=s*h,x=o*u,M=o*h,m=a*h,p=l*c,L=l*u,w=l*h,T=n.x,F=n.y,R=n.z;return r[0]=(1-(x+m))*T,r[1]=(d+w)*T,r[2]=(g-L)*T,r[3]=0,r[4]=(d-w)*F,r[5]=(1-(f+m))*F,r[6]=(M+p)*F,r[7]=0,r[8]=(g+L)*R,r[9]=(M-p)*R,r[10]=(1-(f+x))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=qi.set(r[0],r[1],r[2]).length();const o=qi.set(r[4],r[5],r[6]).length(),a=qi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Zt.copy(this);const c=1/s,u=1/o,h=1/a;return Zt.elements[0]*=c,Zt.elements[1]*=c,Zt.elements[2]*=c,Zt.elements[4]*=u,Zt.elements[5]*=u,Zt.elements[6]*=u,Zt.elements[8]*=h,Zt.elements[9]*=h,Zt.elements[10]*=h,t.setFromRotationMatrix(Zt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*s/(t-e),c=2*s/(n-r),u=(t+e)/(t-e),h=(n+r)/(n-r),f=-(o+s)/(o-s),d=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,r,s,o){const a=this.elements,l=1/(t-e),c=1/(n-r),u=1/(o-s),h=(t+e)*l,f=(n+r)*c,d=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}Ce.prototype.isMatrix4=!0;const qi=new A,Zt=new Ce,Vg=new A(0,0,0),kg=new A(1,1,1),zn=new A,Ws=new A,zt=new A,$u=new Ce,Qu=new Mt;class Xi{constructor(e=0,t=0,n=0,r=Xi.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Lt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return $u.makeRotationFromQuaternion(e),this.setFromRotationMatrix($u,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qu.setFromEuler(this),this.setFromQuaternion(Qu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new A(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Xi.prototype.isEuler=!0;Xi.DefaultOrder="XYZ";Xi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class eh{constructor(){this.mask=1|0}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=4294967295|0}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}}let Gg=0;const th=new A,ji=new Mt,_n=new Ce,qs=new A,Or=new A,Wg=new A,qg=new Mt,nh=new A(1,0,0),ih=new A(0,1,0),rh=new A(0,0,1),Xg={type:"added"},sh={type:"removed"};class Xe extends Fn{constructor(){super();Object.defineProperty(this,"id",{value:Gg++}),this.uuid=Xt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xe.DefaultUp.clone();const e=new A,t=new Xi,n=new Mt,r=new A(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ce},normalMatrix:{value:new mt}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=Xe.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new eh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ji.setFromAxisAngle(e,t),this.quaternion.multiply(ji),this}rotateOnWorldAxis(e,t){return ji.setFromAxisAngle(e,t),this.quaternion.premultiply(ji),this}rotateX(e){return this.rotateOnAxis(nh,e)}rotateY(e){return this.rotateOnAxis(ih,e)}rotateZ(e){return this.rotateOnAxis(rh,e)}translateOnAxis(e,t){return th.copy(e).applyQuaternion(this.quaternion),this.position.add(th.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nh,e)}translateY(e){return this.translateOnAxis(ih,e)}translateZ(e){return this.translateOnAxis(rh,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qs.copy(e):qs.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(Or,qs,this.up):_n.lookAt(qs,Or,this.up),this.quaternion.setFromRotationMatrix(_n),r&&(_n.extractRotation(r.matrixWorld),ji.setFromRotationMatrix(_n),this.quaternion.premultiply(ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Xg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(sh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,e,Wg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,qg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Xe.DefaultUp=new A(0,1,0);Xe.DefaultMatrixAutoUpdate=!0;Xe.prototype.isObject3D=!0;const Jt=new A,vn=new A,Ka=new A,yn=new A,Yi=new A,Zi=new A,oh=new A,$a=new A,Qa=new A,el=new A;class ot{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Jt.subVectors(e,t),r.cross(Jt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Jt.subVectors(r,t),vn.subVectors(n,t),Ka.subVectors(e,t);const o=Jt.dot(Jt),a=Jt.dot(vn),l=Jt.dot(Ka),c=vn.dot(vn),u=vn.dot(Ka),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,yn),yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getUV(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,yn),l.set(0,0),l.addScaledVector(s,yn.x),l.addScaledVector(o,yn.y),l.addScaledVector(a,yn.z),l}static isFrontFacing(e,t,n,r){return Jt.subVectors(n,t),vn.subVectors(e,t),Jt.cross(vn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jt.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),Jt.cross(vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ot.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ot.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return ot.getUV(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return ot.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ot.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Yi.subVectors(r,n),Zi.subVectors(s,n),$a.subVectors(e,n);const l=Yi.dot($a),c=Zi.dot($a);if(l<=0&&c<=0)return t.copy(n);Qa.subVectors(e,r);const u=Yi.dot(Qa),h=Zi.dot(Qa);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Yi,o);el.subVectors(e,s);const d=Yi.dot(el),g=Zi.dot(el);if(g>=0&&d<=g)return t.copy(s);const x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Zi,a);const M=u*g-d*h;if(M<=0&&h-u>=0&&d-g>=0)return oh.subVectors(s,r),a=(h-u)/(h-u+(d-g)),t.copy(r).addScaledVector(oh,a);const m=1/(M+x+f);return o=x*m,a=f*m,t.copy(n).addScaledVector(Yi,o).addScaledVector(Zi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let jg=0;class bt extends Fn{constructor(){super();Object.defineProperty(this,"id",{value:jg++}),this.uuid=Xt(),this.name="",this.type="Material",this.fog=!0,this.blending=Ar,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=vu,this.blendDst=yu,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Sa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ba,this.stencilZFail=Ba,this.stencilZPass=Ba,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===du;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ar&&(n.blending=this.blending),this.side!==Li&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}bt.prototype.isMaterial=!0;class tl extends bt{constructor(e){super();this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ls,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}tl.prototype.isMeshBasicMaterial=!0;const Je=new A,Xs=new ue;class ct{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Pr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),o=new Ee),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),o=new ue),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),o=new A),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),o=new qe),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xs.fromBufferAttribute(this,t),Xs.applyMatrix3(e),this.setXY(t,Xs.x,Xs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Je.fromBufferAttribute(this,t),Je.applyMatrix3(e),this.setXYZ(t,Je.x,Je.y,Je.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Je.x=this.getX(t),Je.y=this.getY(t),Je.z=this.getZ(t),Je.applyMatrix4(e),this.setXYZ(t,Je.x,Je.y,Je.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Je.x=this.getX(t),Je.y=this.getY(t),Je.z=this.getZ(t),Je.applyNormalMatrix(e),this.setXYZ(t,Je.x,Je.y,Je.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Je.x=this.getX(t),Je.y=this.getY(t),Je.z=this.getZ(t),Je.transformDirection(e),this.setXYZ(t,Je.x,Je.y,Je.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pr&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}ct.prototype.isBufferAttribute=!0;class ah extends ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class lh extends ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Yg extends ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}}Yg.prototype.isFloat16BufferAttribute=!0;class ht extends ct{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Zg=0;const kt=new Ce,nl=new Xe,Ji=new A,Ut=new Yt,zr=new Yt,ft=new A;class $e extends Fn{constructor(){super();Object.defineProperty(this,"id",{value:Zg++}),this.uuid=Xt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yu(e)?lh:ah)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new mt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kt.makeRotationFromQuaternion(e),this.applyMatrix4(kt),this}rotateX(e){return kt.makeRotationX(e),this.applyMatrix4(kt),this}rotateY(e){return kt.makeRotationY(e),this.applyMatrix4(kt),this}rotateZ(e){return kt.makeRotationZ(e),this.applyMatrix4(kt),this}translate(e,t,n){return kt.makeTranslation(e,t,n),this.applyMatrix4(kt),this}scale(e,t,n){return kt.makeScale(e,t,n),this.applyMatrix4(kt),this}lookAt(e){return nl.lookAt(e),nl.updateMatrix(),this.applyMatrix4(nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ht(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Ut.setFromBufferAttribute(s),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,Ut.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,Ut.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(Ut.min),this.boundingBox.expandByPoint(Ut.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new A,1/0);return}if(e){const n=this.boundingSphere.center;if(Ut.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];zr.setFromBufferAttribute(a),this.morphTargetsRelative?(ft.addVectors(Ut.min,zr.min),Ut.expandByPoint(ft),ft.addVectors(Ut.max,zr.max),Ut.expandByPoint(ft)):(Ut.expandByPoint(zr.min),Ut.expandByPoint(zr.max))}Ut.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)ft.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(ft));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ft.fromBufferAttribute(a,c),l&&(Ji.fromBufferAttribute(e,c),ft.add(Ji)),r=Math.max(r,n.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;t.tangent===void 0&&this.setAttribute("tangent",new ct(new Float32Array(4*a),4));const l=t.tangent.array,c=[],u=[];for(let ne=0;ne<a;ne++)c[ne]=new A,u[ne]=new A;const h=new A,f=new A,d=new A,g=new ue,x=new ue,M=new ue,m=new A,p=new A;function L(ne,_,D){h.fromArray(r,ne*3),f.fromArray(r,_*3),d.fromArray(r,D*3),g.fromArray(o,ne*2),x.fromArray(o,_*2),M.fromArray(o,D*2),f.sub(h),d.sub(h),x.sub(g),M.sub(g);const z=1/(x.x*M.y-M.x*x.y);!isFinite(z)||(m.copy(f).multiplyScalar(M.y).addScaledVector(d,-x.y).multiplyScalar(z),p.copy(d).multiplyScalar(x.x).addScaledVector(f,-M.x).multiplyScalar(z),c[ne].add(m),c[_].add(m),c[D].add(m),u[ne].add(p),u[_].add(p),u[D].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let ne=0,_=w.length;ne<_;++ne){const D=w[ne],z=D.start,W=D.count;for(let H=z,O=z+W;H<O;H+=3)L(n[H+0],n[H+1],n[H+2])}const T=new A,F=new A,R=new A,K=new A;function he(ne){R.fromArray(s,ne*3),K.copy(R);const _=c[ne];T.copy(_),T.sub(R.multiplyScalar(R.dot(_))).normalize(),F.crossVectors(K,_);const z=F.dot(u[ne])<0?-1:1;l[ne*4]=T.x,l[ne*4+1]=T.y,l[ne*4+2]=T.z,l[ne*4+3]=z}for(let ne=0,_=w.length;ne<_;++ne){const D=w[ne],z=D.start,W=D.count;for(let H=z,O=z+W;H<O;H+=3)he(n[H+0]),he(n[H+1]),he(n[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const r=new A,s=new A,o=new A,a=new A,l=new A,c=new A,u=new A,h=new A;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),x=e.getX(f+1),M=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,M),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,M),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(M,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const r in n){if(e.attributes[r]===void 0)continue;const o=n[r].array,a=e.attributes[r],l=a.array,c=a.itemSize*t,u=Math.min(l.length,o.length-c);for(let h=0,f=c;h<u;h++,f++)o[f]=l[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let x=0,M=l.length;x<M;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let m=0;m<u;m++)f[g++]=c[d++]}return new ct(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $e,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}$e.prototype.isBufferGeometry=!0;const ch=new Ce,Ki=new Wi,il=new Gi,Un=new A,Hn=new A,Vn=new A,rl=new A,sl=new A,ol=new A,js=new A,Ys=new A,Zs=new A,Js=new ue,Ks=new ue,$s=new ue,al=new A,Qs=new A;class wt extends Xe{constructor(e=new $e,t=new tl){super();this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),il.copy(n.boundingSphere),il.applyMatrix4(s),e.ray.intersectsSphere(il)===!1)||(ch.copy(s).invert(),Ki.copy(e.ray).applyMatrix4(ch),n.boundingBox!==null&&Ki.intersectsBox(n.boundingBox)===!1))return;let o;if(n.isBufferGeometry){const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,d=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(r))for(let x=0,M=d.length;x<M;x++){const m=d[x],p=r[m.materialIndex],L=Math.max(m.start,g.start),w=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let T=L,F=w;T<F;T+=3){const R=a.getX(T),K=a.getX(T+1),he=a.getX(T+2);o=eo(this,p,e,Ki,l,c,u,h,f,R,K,he),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const x=Math.max(0,g.start),M=Math.min(a.count,g.start+g.count);for(let m=x,p=M;m<p;m+=3){const L=a.getX(m),w=a.getX(m+1),T=a.getX(m+2);o=eo(this,r,e,Ki,l,c,u,h,f,L,w,T),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let x=0,M=d.length;x<M;x++){const m=d[x],p=r[m.materialIndex],L=Math.max(m.start,g.start),w=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let T=L,F=w;T<F;T+=3){const R=T,K=T+1,he=T+2;o=eo(this,p,e,Ki,l,c,u,h,f,R,K,he),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const x=Math.max(0,g.start),M=Math.min(l.count,g.start+g.count);for(let m=x,p=M;m<p;m+=3){const L=m,w=m+1,T=m+2;o=eo(this,r,e,Ki,l,c,u,h,f,L,w,T),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}wt.prototype.isMesh=!0;function Jg(i,e,t,n,r,s,o,a){let l;if(e.side===st?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side!==Ri,a),l===null)return null;Qs.copy(a),Qs.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Qs);return c<t.near||c>t.far?null:{distance:c,point:Qs.clone(),object:i}}function eo(i,e,t,n,r,s,o,a,l,c,u,h){Un.fromBufferAttribute(r,c),Hn.fromBufferAttribute(r,u),Vn.fromBufferAttribute(r,h);const f=i.morphTargetInfluences;if(s&&f){js.set(0,0,0),Ys.set(0,0,0),Zs.set(0,0,0);for(let g=0,x=s.length;g<x;g++){const M=f[g],m=s[g];M!==0&&(rl.fromBufferAttribute(m,c),sl.fromBufferAttribute(m,u),ol.fromBufferAttribute(m,h),o?(js.addScaledVector(rl,M),Ys.addScaledVector(sl,M),Zs.addScaledVector(ol,M)):(js.addScaledVector(rl.sub(Un),M),Ys.addScaledVector(sl.sub(Hn),M),Zs.addScaledVector(ol.sub(Vn),M)))}Un.add(js),Hn.add(Ys),Vn.add(Zs)}i.isSkinnedMesh&&(i.boneTransform(c,Un),i.boneTransform(u,Hn),i.boneTransform(h,Vn));const d=Jg(i,e,t,n,Un,Hn,Vn,al);if(d){a&&(Js.fromBufferAttribute(a,c),Ks.fromBufferAttribute(a,u),$s.fromBufferAttribute(a,h),d.uv=ot.getUV(al,Un,Hn,Vn,Js,Ks,$s,new ue)),l&&(Js.fromBufferAttribute(l,c),Ks.fromBufferAttribute(l,u),$s.fromBufferAttribute(l,h),d.uv2=ot.getUV(al,Un,Hn,Vn,Js,Ks,$s,new ue));const g={a:c,b:u,c:h,normal:new A,materialIndex:0};ot.getNormal(Un,Hn,Vn,g.normal),d.face=g}return d}class $i extends $e{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(u,3)),this.setAttribute("uv",new ht(h,2));function g(x,M,m,p,L,w,T,F,R,K,he){const ne=w/R,_=T/K,D=w/2,z=T/2,W=F/2,H=R+1,O=K+1;let q=0,J=0;const fe=new A;for(let ee=0;ee<O;ee++){const ie=ee*_-z;for(let de=0;de<H;de++){const xe=de*ne-D;fe[x]=xe*p,fe[M]=ie*L,fe[m]=W,c.push(fe.x,fe.y,fe.z),fe[x]=0,fe[M]=0,fe[m]=F>0?1:-1,u.push(fe.x,fe.y,fe.z),h.push(de/R),h.push(1-ee/K),q+=1}}for(let ee=0;ee<K;ee++)for(let ie=0;ie<R;ie++){const de=f+ie+H*ee,xe=f+ie+H*(ee+1),Se=f+(ie+1)+H*(ee+1),Q=f+(ie+1)+H*ee;l.push(de,xe,Q),l.push(xe,Se,Q),J+=6}a.addGroup(d,J,he),d+=J,f+=q}}static fromJSON(e){return new $i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function St(i){const e={};for(let t=0;t<i.length;t++){const n=Qi(i[t]);for(const r in n)e[r]=n[r]}return e}const to={clone:Qi,merge:St};var Kg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$g=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mn extends bt{constructor(e){super();this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Kg,this.fragmentShader=$g,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qi(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}Mn.prototype.isShaderMaterial=!0;class ll extends Xe{constructor(){super();this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}ll.prototype.isCamera=!0;class Rt extends ll{constructor(e=50,t=1,n=.1,r=2e3){super();this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ir*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Dr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ir*2*Math.atan(Math.tan(Dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Dr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}Rt.prototype.isPerspectiveCamera=!0;const er=90,tr=1;class cl extends Xe{constructor(e,t,n){super();if(this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const r=new Rt(er,tr,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new A(1,0,0)),this.add(r);const s=new Rt(er,tr,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new A(-1,0,0)),this.add(s);const o=new Rt(er,tr,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new A(0,1,0)),this.add(o);const a=new Rt(er,tr,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new A(0,-1,0)),this.add(a);const l=new Rt(er,tr,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new A(0,0,1)),this.add(l);const c=new Rt(er,tr,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new A(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,o,a,l,c]=this.children,u=e.xr.enabled,h=e.getRenderTarget();e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class no extends ut{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Cr;super(e,t,n,r,s,o,a,l,c,u);this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}no.prototype.isCubeTexture=!0;class uh extends Ot{constructor(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n);super(e,e,t);t=t||{},this.texture=new no(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=Ct,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new $i(5,5,5),s=new Mn({name:"CubemapFromEquirect",uniforms:Qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:st,blending:Rn});s.uniforms.tEquirect.value=t;const o=new wt(r,s),a=t.minFilter;return t.minFilter===Ps&&(t.minFilter=yt),new cl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}uh.prototype.isWebGLCubeRenderTarget=!0;const ul=new A,Qg=new A,ex=new mt;class on{constructor(e=new A(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ul.subVectors(n,t).cross(Qg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(ul),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ex.getNormalMatrix(e),r=this.coplanarPoint(ul).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}on.prototype.isPlane=!0;const nr=new Gi,io=new A;class ro{constructor(e=new on,t=new on,n=new on,r=new on,s=new on,o=new on){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],d=n[9],g=n[10],x=n[11],M=n[12],m=n[13],p=n[14],L=n[15];return t[0].setComponents(a-r,h-l,x-f,L-M).normalize(),t[1].setComponents(a+r,h+l,x+f,L+M).normalize(),t[2].setComponents(a+s,h+c,x+d,L+m).normalize(),t[3].setComponents(a-s,h-c,x-d,L-m).normalize(),t[4].setComponents(a-o,h-u,x-g,L-p).normalize(),t[5].setComponents(a+o,h+u,x+g,L+p).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),nr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(nr)}intersectsSprite(e){return nr.center.set(0,0,0),nr.radius=.7071067811865476,nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(nr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(io.x=r.normal.x>0?e.max.x:e.min.x,io.y=r.normal.y>0?e.max.y:e.min.y,io.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(io)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hh(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function tx(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const h=c.array,f=c.usage,d=i.createBuffer();i.bindBuffer(u,d),i.bufferData(u,h,f),c.onUploadCallback();let g=5126;return h instanceof Float32Array?g=5126:h instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):h instanceof Uint16Array?c.isFloat16BufferAttribute?t?g=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):g=5123:h instanceof Int16Array?g=5122:h instanceof Uint32Array?g=5125:h instanceof Int32Array?g=5124:h instanceof Int8Array?g=5120:(h instanceof Uint8Array||h instanceof Uint8ClampedArray)&&(g=5121),{buffer:d,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,d=u.updateRange;i.bindBuffer(h,c),d.count===-1?i.bufferSubData(h,0,f):(t?i.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):i.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,r(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class hl extends $e{constructor(e=1,t=1,n=1,r=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],x=[],M=[];for(let m=0;m<u;m++){const p=m*f-o;for(let L=0;L<c;L++){const w=L*h-s;g.push(w,-p,0),x.push(0,0,1),M.push(L/a),M.push(1-m/l)}}for(let m=0;m<l;m++)for(let p=0;p<a;p++){const L=p+c*m,w=p+c*(m+1),T=p+1+c*(m+1),F=p+1+c*m;d.push(L,w,F),d.push(w,T,F)}this.setIndex(d),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(x,3)),this.setAttribute("uv",new ht(M,2))}static fromJSON(e){return new hl(e.width,e.height,e.widthSegments,e.heightSegments)}}var nx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,ix=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,sx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ox=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ax=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lx="vec3 transformed = vec3( position );",cx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ux=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,hx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,dx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,px=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_x=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,vx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,yx=`#define PI 3.141592653589793
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
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Mx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
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
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 ) + 0.5;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		return texture2D( envMap, uv ).rgb;
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
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
#endif`,bx=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,wx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Ex=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ax="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cx=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lx=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
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
#endif`,Rx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Px=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Dx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ix=`#ifdef USE_ENVMAP
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
#endif`,Fx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ox=`#ifdef USE_FOG
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
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Ux=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Hx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vx=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,kx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Gx=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Wx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Xx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Yx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Zx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
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
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
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
}`,Jx=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Kx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$x=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Qx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,e_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,n_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,i_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,r_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,s_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,o_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,a_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,l_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,c_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,u_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;
		vec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {
			float texelIndex = float( vertexIndex * stride + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;
			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV ).xyz;
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,h_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			#ifndef USE_MORPHNORMALS
				if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];
			#else
				if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];
			#endif
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,f_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,d_=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,p_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,x_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,__=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,v_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,y_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,M_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,b_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,w_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,S_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,E_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,T_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,A_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,C_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,L_=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,R_=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,P_=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,D_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,I_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,F_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,N_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,B_=`#ifdef USE_SKINNING
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
#endif`,O_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,z_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,U_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,H_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,V_=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,k_=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef TEXTURE_LOD_EXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,G_=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,W_=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,q_=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,X_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,j_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Y_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Z_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const J_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,K_=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,$_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q_=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,e0=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,t0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,n0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,i0=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,r0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,s0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,o0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,a0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,l0=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
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
}`,c0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u0=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h0=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
}`,d0=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,m0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,g0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
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
}`,x0=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
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
}`,v0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
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
}`,M0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,w0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,S0=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,T0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,A0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Be={alphamap_fragment:nx,alphamap_pars_fragment:ix,alphatest_fragment:rx,alphatest_pars_fragment:sx,aomap_fragment:ox,aomap_pars_fragment:ax,begin_vertex:lx,beginnormal_vertex:cx,bsdfs:ux,bumpmap_pars_fragment:hx,clipping_planes_fragment:fx,clipping_planes_pars_fragment:dx,clipping_planes_pars_vertex:px,clipping_planes_vertex:mx,color_fragment:gx,color_pars_fragment:xx,color_pars_vertex:_x,color_vertex:vx,common:yx,cube_uv_reflection_fragment:Mx,defaultnormal_vertex:bx,displacementmap_pars_vertex:wx,displacementmap_vertex:Sx,emissivemap_fragment:Ex,emissivemap_pars_fragment:Tx,encodings_fragment:Ax,encodings_pars_fragment:Cx,envmap_fragment:Lx,envmap_common_pars_fragment:Rx,envmap_pars_fragment:Px,envmap_pars_vertex:Dx,envmap_physical_pars_fragment:Gx,envmap_vertex:Ix,fog_vertex:Fx,fog_pars_vertex:Nx,fog_fragment:Bx,fog_pars_fragment:Ox,gradientmap_pars_fragment:zx,lightmap_fragment:Ux,lightmap_pars_fragment:Hx,lights_lambert_vertex:Vx,lights_pars_begin:kx,lights_toon_fragment:Wx,lights_toon_pars_fragment:qx,lights_phong_fragment:Xx,lights_phong_pars_fragment:jx,lights_physical_fragment:Yx,lights_physical_pars_fragment:Zx,lights_fragment_begin:Jx,lights_fragment_maps:Kx,lights_fragment_end:$x,logdepthbuf_fragment:Qx,logdepthbuf_pars_fragment:e_,logdepthbuf_pars_vertex:t_,logdepthbuf_vertex:n_,map_fragment:i_,map_pars_fragment:r_,map_particle_fragment:s_,map_particle_pars_fragment:o_,metalnessmap_fragment:a_,metalnessmap_pars_fragment:l_,morphnormal_vertex:c_,morphtarget_pars_vertex:u_,morphtarget_vertex:h_,normal_fragment_begin:f_,normal_fragment_maps:d_,normal_pars_fragment:p_,normal_pars_vertex:m_,normal_vertex:g_,normalmap_pars_fragment:x_,clearcoat_normal_fragment_begin:__,clearcoat_normal_fragment_maps:v_,clearcoat_pars_fragment:y_,output_fragment:M_,packing:b_,premultiplied_alpha_fragment:w_,project_vertex:S_,dithering_fragment:E_,dithering_pars_fragment:T_,roughnessmap_fragment:A_,roughnessmap_pars_fragment:C_,shadowmap_pars_fragment:L_,shadowmap_pars_vertex:R_,shadowmap_vertex:P_,shadowmask_pars_fragment:D_,skinbase_vertex:I_,skinning_pars_vertex:F_,skinning_vertex:N_,skinnormal_vertex:B_,specularmap_fragment:O_,specularmap_pars_fragment:z_,tonemapping_fragment:U_,tonemapping_pars_fragment:H_,transmission_fragment:V_,transmission_pars_fragment:k_,uv_pars_fragment:G_,uv_pars_vertex:W_,uv_vertex:q_,uv2_pars_fragment:X_,uv2_pars_vertex:j_,uv2_vertex:Y_,worldpos_vertex:Z_,background_vert:J_,background_frag:K_,cube_vert:$_,cube_frag:Q_,depth_vert:e0,depth_frag:t0,distanceRGBA_vert:n0,distanceRGBA_frag:i0,equirect_vert:r0,equirect_frag:s0,linedashed_vert:o0,linedashed_frag:a0,meshbasic_vert:l0,meshbasic_frag:c0,meshlambert_vert:u0,meshlambert_frag:h0,meshmatcap_vert:f0,meshmatcap_frag:d0,meshnormal_vert:p0,meshnormal_frag:m0,meshphong_vert:g0,meshphong_frag:x0,meshphysical_vert:_0,meshphysical_frag:v0,meshtoon_vert:y0,meshtoon_frag:M0,points_vert:b0,points_frag:w0,shadow_vert:S0,shadow_frag:E0,sprite_vert:T0,sprite_frag:A0},me={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new mt},uv2Transform:{value:new mt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new mt}}},an={basic:{uniforms:St([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:St([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.fog,me.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:St([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:St([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:St([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:St([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:St([me.points,me.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:St([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:St([me.common,me.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:St([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:St([me.sprite,me.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},cube:{uniforms:St([me.envmap,{opacity:{value:1}}]),vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:St([me.common,me.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:St([me.lights,me.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};an.physical={uniforms:St([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ue(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};function C0(i,e,t,n,r,s){const o=new Ee(0);let a=r===!0?0:1,l,c,u=null,h=0,f=null;function d(x,M){let m=!1,p=M.isScene===!0?M.background:null;p&&p.isTexture&&(p=e.get(p));const L=i.xr,w=L.getSession&&L.getSession();w&&w.environmentBlendMode==="additive"&&(p=null),p===null?g(o,a):p&&p.isColor&&(g(p,1),m=!0),(i.autoClear||m)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),p&&(p.isCubeTexture||p.mapping===Rs)?(c===void 0&&(c=new wt(new $i(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:Qi(an.cube.uniforms),vertexShader:an.cube.vertexShader,fragmentShader:an.cube.fragmentShader,side:st,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,F,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=p,c.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,(u!==p||h!==p.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=p,h=p.version,f=i.toneMapping),x.unshift(c,c.geometry,c.material,0,0,null)):p&&p.isTexture&&(l===void 0&&(l=new wt(new hl(2,2),new Mn({name:"BackgroundMaterial",uniforms:Qi(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=p,p.matrixAutoUpdate===!0&&p.updateMatrix(),l.material.uniforms.uvTransform.value.copy(p.matrix),(u!==p||h!==p.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=p,h=p.version,f=i.toneMapping),x.unshift(l,l.geometry,l.material,0,0,null))}function g(x,M){t.buffers.color.setClear(x.r,x.g,x.b,M,s)}return{getClearColor:function(){return o},setClearColor:function(x,M=1){o.set(x),a=M,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,g(o,a)},render:d}}function L0(i,e,t,n){const r=i.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=x(null);let c=l;function u(z,W,H,O,q){let J=!1;if(o){const fe=g(O,H,W);c!==fe&&(c=fe,f(c.object)),J=M(O,q),J&&m(O,q)}else{const fe=W.wireframe===!0;(c.geometry!==O.id||c.program!==H.id||c.wireframe!==fe)&&(c.geometry=O.id,c.program=H.id,c.wireframe=fe,J=!0)}z.isInstancedMesh===!0&&(J=!0),q!==null&&t.update(q,34963),J&&(R(z,W,H,O),q!==null&&i.bindBuffer(34963,t.get(q).buffer))}function h(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function f(z){return n.isWebGL2?i.bindVertexArray(z):s.bindVertexArrayOES(z)}function d(z){return n.isWebGL2?i.deleteVertexArray(z):s.deleteVertexArrayOES(z)}function g(z,W,H){const O=H.wireframe===!0;let q=a[z.id];q===void 0&&(q={},a[z.id]=q);let J=q[W.id];J===void 0&&(J={},q[W.id]=J);let fe=J[O];return fe===void 0&&(fe=x(h()),J[O]=fe),fe}function x(z){const W=[],H=[],O=[];for(let q=0;q<r;q++)W[q]=0,H[q]=0,O[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:H,attributeDivisors:O,object:z,attributes:{},index:null}}function M(z,W){const H=c.attributes,O=z.attributes;let q=0;for(const J in O){const fe=H[J],ee=O[J];if(fe===void 0||fe.attribute!==ee||fe.data!==ee.data)return!0;q++}return c.attributesNum!==q||c.index!==W}function m(z,W){const H={},O=z.attributes;let q=0;for(const J in O){const fe=O[J],ee={};ee.attribute=fe,fe.data&&(ee.data=fe.data),H[J]=ee,q++}c.attributes=H,c.attributesNum=q,c.index=W}function p(){const z=c.newAttributes;for(let W=0,H=z.length;W<H;W++)z[W]=0}function L(z){w(z,0)}function w(z,W){const H=c.newAttributes,O=c.enabledAttributes,q=c.attributeDivisors;H[z]=1,O[z]===0&&(i.enableVertexAttribArray(z),O[z]=1),q[z]!==W&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,W),q[z]=W)}function T(){const z=c.newAttributes,W=c.enabledAttributes;for(let H=0,O=W.length;H<O;H++)W[H]!==z[H]&&(i.disableVertexAttribArray(H),W[H]=0)}function F(z,W,H,O,q,J){n.isWebGL2===!0&&(H===5124||H===5125)?i.vertexAttribIPointer(z,W,H,q,J):i.vertexAttribPointer(z,W,H,O,q,J)}function R(z,W,H,O){if(n.isWebGL2===!1&&(z.isInstancedMesh||O.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;p();const q=O.attributes,J=H.getAttributes(),fe=W.defaultAttributeValues;for(const ee in J){const ie=J[ee];if(ie.location>=0){let de=q[ee];if(de===void 0&&(ee==="instanceMatrix"&&z.instanceMatrix&&(de=z.instanceMatrix),ee==="instanceColor"&&z.instanceColor&&(de=z.instanceColor)),de!==void 0){const xe=de.normalized,Se=de.itemSize,Q=t.get(de);if(Q===void 0)continue;const Oe=Q.buffer,ye=Q.type,Te=Q.bytesPerElement;if(de.isInterleavedBufferAttribute){const ve=de.data,Le=ve.stride,Ae=de.offset;if(ve&&ve.isInstancedInterleavedBuffer){for(let te=0;te<ie.locationSize;te++)w(ie.location+te,ve.meshPerAttribute);z.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let te=0;te<ie.locationSize;te++)L(ie.location+te);i.bindBuffer(34962,Oe);for(let te=0;te<ie.locationSize;te++)F(ie.location+te,Se/ie.locationSize,ye,xe,Le*Te,(Ae+Se/ie.locationSize*te)*Te)}else{if(de.isInstancedBufferAttribute){for(let ve=0;ve<ie.locationSize;ve++)w(ie.location+ve,de.meshPerAttribute);z.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ve=0;ve<ie.locationSize;ve++)L(ie.location+ve);i.bindBuffer(34962,Oe);for(let ve=0;ve<ie.locationSize;ve++)F(ie.location+ve,Se/ie.locationSize,ye,xe,Se*Te,Se/ie.locationSize*ve*Te)}}else if(fe!==void 0){const xe=fe[ee];if(xe!==void 0)switch(xe.length){case 2:i.vertexAttrib2fv(ie.location,xe);break;case 3:i.vertexAttrib3fv(ie.location,xe);break;case 4:i.vertexAttrib4fv(ie.location,xe);break;default:i.vertexAttrib1fv(ie.location,xe)}}}}T()}function K(){_();for(const z in a){const W=a[z];for(const H in W){const O=W[H];for(const q in O)d(O[q].object),delete O[q];delete W[H]}delete a[z]}}function he(z){if(a[z.id]===void 0)return;const W=a[z.id];for(const H in W){const O=W[H];for(const q in O)d(O[q].object),delete O[q];delete W[H]}delete a[z.id]}function ne(z){for(const W in a){const H=a[W];if(H[z.id]===void 0)continue;const O=H[z.id];for(const q in O)d(O[q].object),delete O[q];delete H[z.id]}}function _(){D(),c!==l&&(c=l,f(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:_,resetDefaultState:D,dispose:K,releaseStatesOfGeometry:he,releaseStatesOfProgram:ne,initAttributes:p,enableAttribute:L,disableUnusedAttributes:T}}function R0(i,e,t,n){const r=n.isWebGL2;let s;function o(c){s=c}function a(c,u){i.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,d;if(r)f=i,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,c,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function P0(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(R){if(R==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&i instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(34930),f=i.getParameter(35660),d=i.getParameter(3379),g=i.getParameter(34076),x=i.getParameter(34921),M=i.getParameter(36347),m=i.getParameter(36348),p=i.getParameter(36349),L=f>0,w=o||e.has("OES_texture_float"),T=L&&w,F=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:M,maxVaryings:m,maxFragmentUniforms:p,vertexTextures:L,floatFragmentTextures:w,floatVertexTextures:T,maxSamples:F}}function D0(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new on,a=new mt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,d){const g=h.length!==0||f||n!==0||r;return r=f,t=u(h,d,0),n=h.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(h,f,d){const g=h.clippingPlanes,x=h.clipIntersection,M=h.clipShadows,m=i.get(h);if(!r||g===null||g.length===0||s&&!M)s?u(null):c();else{const p=s?0:n,L=p*4;let w=m.clippingState||null;l.value=w,w=u(g,f,L,d);for(let T=0;T!==L;++T)w[T]=t[T];m.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=p}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const x=h!==null?h.length:0;let M=null;if(x!==0){if(M=l.value,g!==!0||M===null){const m=d+x*4,p=f.matrixWorldInverse;a.getNormalMatrix(p),(M===null||M.length<m)&&(M=new Float32Array(m));for(let L=0,w=d;L!==x;++L,w+=4)o.copy(h[L]).applyMatrix4(p,a),o.normal.toArray(M,w),M[w+3]=o.constant}l.value=M,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,M}}function I0(i){let e=new WeakMap;function t(o,a){return a===Ea?o.mapping=Cr:a===Ta&&(o.mapping=Lr),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Ea||a===Ta)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new uh(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class fl extends ll{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super();this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}fl.prototype.isOrthographicCamera=!0;class so extends Mn{constructor(e){super(e);this.type="RawShaderMaterial"}}so.prototype.isRawShaderMaterial=!0;const ir=4,kn=8,ln=Math.pow(2,kn),fh=[.125,.215,.35,.446,.526,.582],dh=kn-ir+1+fh.length,rr=20,dl=new fl,{_lodPlanes:Ur,_sizeLods:ph,_sigmas:oo}=F0(),mh=new Ee;let pl=null;const di=(1+Math.sqrt(5))/2,sr=1/di,gh=[new A(1,1,1),new A(-1,1,1),new A(1,1,-1),new A(-1,1,-1),new A(0,di,sr),new A(0,di,-sr),new A(sr,0,di),new A(-sr,0,di),new A(di,sr,0),new A(-di,sr,0)];class xh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=N0(rr),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){pl=this._renderer.getRenderTarget();const s=this._allocateTargets();return this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=yh(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=vh(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<Ur.length;e++)Ur[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pl),e.scissorTest=!1,ao(e,0,0,e.width,e.height)}_fromTexture(e,t){pl=this._renderer.getRenderTarget();const n=t||this._allocateTargets(e);return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(e){const t={magFilter:yt,minFilter:yt,generateMipmaps:!1,type:Di,format:Ct,encoding:In,depthBuffer:!1},n=_h(t);return n.depthBuffer=!e,this._pingPongRenderTarget===null&&(this._pingPongRenderTarget=_h(t)),n}_compileMaterial(e){const t=new wt(Ur[0],e);this._renderer.compile(t,dl)}_sceneToCubeUV(e,t,n,r){const s=90,o=1,a=new Rt(s,o,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(mh),u.toneMapping=Pn,u.autoClear=!1;const d=new tl({name:"PMREM.Background",side:st,depthWrite:!1,depthTest:!1}),g=new wt(new $i,d);let x=!1;const M=e.background;M?M.isColor&&(d.color.copy(M),e.background=null,x=!0):(d.color.copy(mh),x=!0);for(let m=0;m<6;m++){const p=m%3;p===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):p===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m])),ao(r,p*ln,m>2?ln:0,ln,ln),u.setRenderTarget(r),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Cr||e.mapping===Lr;r?(this._cubemapShader===null&&(this._cubemapShader=yh()),this._cubemapShader.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectShader===null&&(this._equirectShader=vh());const s=r?this._cubemapShader:this._equirectShader,o=new wt(Ur[0],s),a=s.uniforms;a.envMap.value=e,r||a.texelSize.value.set(1/e.image.width,1/e.image.height),ao(t,0,0,3*ln,2*ln),n.setRenderTarget(t),n.render(o,dl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<dh;r++){const s=Math.sqrt(oo[r]*oo[r]-oo[r-1]*oo[r-1]),o=gh[(r-1)%gh.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new wt(Ur[r],c),f=c.uniforms,d=ph[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*rr-1),x=s/g,M=isFinite(s)?1+Math.floor(u*x):rr;M>rr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${rr}`);const m=[];let p=0;for(let F=0;F<rr;++F){const R=F/x,K=Math.exp(-R*R/2);m.push(K),F===0?p+=K:F<M&&(p+=2*K)}for(let F=0;F<m.length;F++)m[F]=m[F]/p;f.envMap.value=e.texture,f.samples.value=M,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a),f.dTheta.value=g,f.mipInt.value=kn-n;const L=ph[r],w=3*Math.max(0,ln-2*L),T=(r===0?0:2*ln)+2*L*(r>kn-ir?r-kn+ir:0);ao(t,w,T,3*L,2*L),l.setRenderTarget(t),l.render(h,dl)}}function F0(){const i=[],e=[],t=[];let n=kn;for(let r=0;r<dh;r++){const s=Math.pow(2,n);e.push(s);let o=1/s;r>kn-ir?o=fh[r-kn+ir-1]:r===0&&(o=0),t.push(o);const a=1/(s-1),l=-a/2,c=1+a/2,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,f=6,d=3,g=2,x=1,M=new Float32Array(d*f*h),m=new Float32Array(g*f*h),p=new Float32Array(x*f*h);for(let w=0;w<h;w++){const T=w%3*2/3-1,F=w>2?0:-1,R=[T,F,0,T+2/3,F,0,T+2/3,F+1,0,T,F,0,T+2/3,F+1,0,T,F+1,0];M.set(R,d*f*w),m.set(u,g*f*w);const K=[w,w,w,w,w,w];p.set(K,x*f*w)}const L=new $e;L.setAttribute("position",new ct(M,d)),L.setAttribute("uv",new ct(m,g)),L.setAttribute("faceIndex",new ct(p,x)),i.push(L),n>ir&&n--}return{_lodPlanes:i,_sizeLods:e,_sigmas:t}}function _h(i){const e=new Ot(3*ln,3*ln,i);return e.texture.mapping=Rs,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function ao(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function N0(i){const e=new Float32Array(i),t=new A(0,1,0);return new so({name:"SphericalGaussianBlur",defines:{n:i},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:t}},vertexShader:ml(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function vh(){const i=new ue(1,1);return new so({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:i}},vertexShader:ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = texture2D ( envMap, uv ).rgb;
				uv.x += texelSize.x;
				vec3 tr = texture2D ( envMap, uv ).rgb;
				uv.y += texelSize.y;
				vec3 br = texture2D ( envMap, uv ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = texture2D ( envMap, uv ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function yh(){return new so({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function ml(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
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
	`}function B0(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ea||l===Ta,u=l===Cr||l===Lr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new xh(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new xh(i));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function O0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function z0(i,e,t,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const d=h.morphAttributes;for(const g in d){const x=d[g];for(let M=0,m=x.length;M<m;M++)e.update(x[M],34962)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let x=0;if(d!==null){const p=d.array;x=d.version;for(let L=0,w=p.length;L<w;L+=3){const T=p[L+0],F=p[L+1],R=p[L+2];f.push(T,F,F,R,R,T)}}else{const p=g.array;x=g.version;for(let L=0,w=p.length/3-1;L<w;L+=3){const T=L+0,F=L+1,R=L+2;f.push(T,F,F,R,R,T)}}const M=new(Yu(f)?lh:ah)(f,1);M.version=x;const m=s.get(h);m&&e.remove(m),s.set(h,M)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function U0(i,e,t,n){const r=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,d){i.drawElements(s,d,a,f*l),t.update(d,s,1)}function h(f,d,g){if(g===0)return;let x,M;if(r)x=i,M="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),M="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[M](s,d,a,f*l,g),t.update(d,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function H0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}class gl extends ut{constructor(e=null,t=1,n=1,r=1){super(null);this.image={data:e,width:t,height:n,depth:r},this.magFilter=lt,this.minFilter=lt,this.wrapR=Bt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}gl.prototype.isDataTexture2DArray=!0;function V0(i,e){return i[0]-e[0]}function k0(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Mh(i,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),i.divideScalar(t)}function G0(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new A,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position.length;let x=s.get(u);if(x===void 0||x.count!==g){let D=function(){ne.dispose(),s.delete(u),u.removeEventListener("dispose",D)};x!==void 0&&x.texture.dispose();const p=u.morphAttributes.normal!==void 0,L=u.morphAttributes.position,w=u.morphAttributes.normal||[],T=u.attributes.position.count,F=p===!0?2:1;let R=T*F,K=1;R>e.maxTextureSize&&(K=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const he=new Float32Array(R*K*4*g),ne=new gl(he,R,K,g);ne.format=Ct,ne.type=ai,ne.needsUpdate=!0;const _=F*4;for(let z=0;z<g;z++){const W=L[z],H=w[z],O=R*K*4*z;for(let q=0;q<W.count;q++){o.fromBufferAttribute(W,q),W.normalized===!0&&Mh(o,W);const J=q*_;he[O+J+0]=o.x,he[O+J+1]=o.y,he[O+J+2]=o.z,he[O+J+3]=0,p===!0&&(o.fromBufferAttribute(H,q),H.normalized===!0&&Mh(o,H),he[O+J+4]=o.x,he[O+J+5]=o.y,he[O+J+6]=o.z,he[O+J+7]=0)}}x={count:g,texture:ne,size:new ue(R,K)},s.set(u,x),u.addEventListener("dispose",D)}let M=0;for(let p=0;p<d.length;p++)M+=d[p];const m=u.morphTargetsRelative?1:1-M;f.getUniforms().setValue(i,"morphTargetBaseInfluence",m),f.getUniforms().setValue(i,"morphTargetInfluences",d),f.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{const g=d===void 0?0:d.length;let x=n[u.id];if(x===void 0||x.length!==g){x=[];for(let w=0;w<g;w++)x[w]=[w,0];n[u.id]=x}for(let w=0;w<g;w++){const T=x[w];T[0]=w,T[1]=d[w]}x.sort(k0);for(let w=0;w<8;w++)w<g&&x[w][1]?(a[w][0]=x[w][0],a[w][1]=x[w][1]):(a[w][0]=Number.MAX_SAFE_INTEGER,a[w][1]=0);a.sort(V0);const M=u.morphAttributes.position,m=u.morphAttributes.normal;let p=0;for(let w=0;w<8;w++){const T=a[w],F=T[0],R=T[1];F!==Number.MAX_SAFE_INTEGER&&R?(M&&u.getAttribute("morphTarget"+w)!==M[F]&&u.setAttribute("morphTarget"+w,M[F]),m&&u.getAttribute("morphNormal"+w)!==m[F]&&u.setAttribute("morphNormal"+w,m[F]),r[w]=R,p+=R):(M&&u.hasAttribute("morphTarget"+w)===!0&&u.deleteAttribute("morphTarget"+w),m&&u.hasAttribute("morphNormal"+w)===!0&&u.deleteAttribute("morphNormal"+w),r[w]=0)}const L=u.morphTargetsRelative?1:1-p;f.getUniforms().setValue(i,"morphTargetBaseInfluence",L),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function W0(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class bh extends ut{constructor(e=null,t=1,n=1,r=1){super(null);this.image={data:e,width:t,height:n,depth:r},this.magFilter=lt,this.minFilter=lt,this.wrapR=Bt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}bh.prototype.isDataTexture3D=!0;const wh=new ut,Sh=new gl,Eh=new bh,Th=new no,Ah=[],Ch=[],Lh=new Float32Array(16),Rh=new Float32Array(9),Ph=new Float32Array(4);function or(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Ah[r];if(s===void 0&&(s=new Float32Array(r),Ah[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Et(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function lo(i,e){let t=Ch[e];t===void 0&&(t=new Int32Array(e),Ch[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function q0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function X0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2fv(this.addr,e),Et(t,e)}}function j0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;i.uniform3fv(this.addr,e),Et(t,e)}}function Y0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4fv(this.addr,e),Et(t,e)}}function Z0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(Pt(t,n))return;Ph.set(n),i.uniformMatrix2fv(this.addr,!1,Ph),Et(t,n)}}function J0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(Pt(t,n))return;Rh.set(n),i.uniformMatrix3fv(this.addr,!1,Rh),Et(t,n)}}function K0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(Pt(t,n))return;Lh.set(n),i.uniformMatrix4fv(this.addr,!1,Lh),Et(t,n)}}function $0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Q0(i,e){const t=this.cache;Pt(t,e)||(i.uniform2iv(this.addr,e),Et(t,e))}function ev(i,e){const t=this.cache;Pt(t,e)||(i.uniform3iv(this.addr,e),Et(t,e))}function tv(i,e){const t=this.cache;Pt(t,e)||(i.uniform4iv(this.addr,e),Et(t,e))}function nv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function iv(i,e){const t=this.cache;Pt(t,e)||(i.uniform2uiv(this.addr,e),Et(t,e))}function rv(i,e){const t=this.cache;Pt(t,e)||(i.uniform3uiv(this.addr,e),Et(t,e))}function sv(i,e){const t=this.cache;Pt(t,e)||(i.uniform4uiv(this.addr,e),Et(t,e))}function ov(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.safeSetTexture2D(e||wh,r)}function av(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Eh,r)}function lv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.safeSetTextureCube(e||Th,r)}function cv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Sh,r)}function uv(i){switch(i){case 5126:return q0;case 35664:return X0;case 35665:return j0;case 35666:return Y0;case 35674:return Z0;case 35675:return J0;case 35676:return K0;case 5124:case 35670:return $0;case 35667:case 35671:return Q0;case 35668:case 35672:return ev;case 35669:case 35673:return tv;case 5125:return nv;case 36294:return iv;case 36295:return rv;case 36296:return sv;case 35678:case 36198:case 36298:case 36306:case 35682:return ov;case 35679:case 36299:case 36307:return av;case 35680:case 36300:case 36308:case 36293:return lv;case 36289:case 36303:case 36311:case 36292:return cv}}function hv(i,e){i.uniform1fv(this.addr,e)}function fv(i,e){const t=or(e,this.size,2);i.uniform2fv(this.addr,t)}function dv(i,e){const t=or(e,this.size,3);i.uniform3fv(this.addr,t)}function pv(i,e){const t=or(e,this.size,4);i.uniform4fv(this.addr,t)}function mv(i,e){const t=or(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function gv(i,e){const t=or(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function xv(i,e){const t=or(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function _v(i,e){i.uniform1iv(this.addr,e)}function vv(i,e){i.uniform2iv(this.addr,e)}function yv(i,e){i.uniform3iv(this.addr,e)}function Mv(i,e){i.uniform4iv(this.addr,e)}function bv(i,e){i.uniform1uiv(this.addr,e)}function wv(i,e){i.uniform2uiv(this.addr,e)}function Sv(i,e){i.uniform3uiv(this.addr,e)}function Ev(i,e){i.uniform4uiv(this.addr,e)}function Tv(i,e,t){const n=e.length,r=lo(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.safeSetTexture2D(e[s]||wh,r[s])}function Av(i,e,t){const n=e.length,r=lo(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTexture3D(e[s]||Eh,r[s])}function Cv(i,e,t){const n=e.length,r=lo(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.safeSetTextureCube(e[s]||Th,r[s])}function Lv(i,e,t){const n=e.length,r=lo(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||Sh,r[s])}function Rv(i){switch(i){case 5126:return hv;case 35664:return fv;case 35665:return dv;case 35666:return pv;case 35674:return mv;case 35675:return gv;case 35676:return xv;case 5124:case 35670:return _v;case 35667:case 35671:return vv;case 35668:case 35672:return yv;case 35669:case 35673:return Mv;case 5125:return bv;case 36294:return wv;case 36295:return Sv;case 36296:return Ev;case 35678:case 36198:case 36298:case 36306:case 35682:return Tv;case 35679:case 36299:case 36307:return Av;case 35680:case 36300:case 36308:case 36293:return Cv;case 36289:case 36303:case 36311:case 36292:return Lv}}function Pv(i,e,t){this.id=i,this.addr=t,this.cache=[],this.setValue=uv(e.type)}function Dh(i,e,t){this.id=i,this.addr=t,this.cache=[],this.size=e.size,this.setValue=Rv(e.type)}Dh.prototype.updateCache=function(i){const e=this.cache;i instanceof Float32Array&&e.length!==i.length&&(this.cache=new Float32Array(i.length)),Et(e,i)};function Ih(i){this.id=i,this.seq=[],this.map={}}Ih.prototype.setValue=function(i,e,t){const n=this.seq;for(let r=0,s=n.length;r!==s;++r){const o=n[r];o.setValue(i,e[o.id],t)}};const xl=/(\w+)(\])?(\[|\.)?/g;function Fh(i,e){i.seq.push(e),i.map[e.id]=e}function Dv(i,e,t){const n=i.name,r=n.length;for(xl.lastIndex=0;;){const s=xl.exec(n),o=xl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Fh(t,c===void 0?new Pv(a,i,e):new Dh(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Ih(a),Fh(t,h)),t=h}}}function Gn(i,e){this.seq=[],this.map={};const t=i.getProgramParameter(e,35718);for(let n=0;n<t;++n){const r=i.getActiveUniform(e,n),s=i.getUniformLocation(e,r.name);Dv(r,s,this)}}Gn.prototype.setValue=function(i,e,t,n){const r=this.map[e];r!==void 0&&r.setValue(i,t,n)};Gn.prototype.setOptional=function(i,e,t){const n=e[t];n!==void 0&&this.setValue(i,t,n)};Gn.upload=function(i,e,t,n){for(let r=0,s=e.length;r!==s;++r){const o=e[r],a=t[o.id];a.needsUpdate!==!1&&o.setValue(i,a.value,n)}};Gn.seqWithValue=function(i,e){const t=[];for(let n=0,r=i.length;n!==r;++n){const s=i[n];s.id in e&&t.push(s)}return t};function Nh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let Iv=0;function Fv(i){const e=i.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function Nv(i){switch(i){case In:return["Linear","( value )"];case Ke:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function Bh(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();return n&&r===""?"":t.toUpperCase()+`

`+r+`

`+Fv(i.getShaderSource(e))}function Bv(i,e){const t=Nv(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Ov(i,e){let t;switch(e){case Jm:t="Linear";break;case Km:t="Reinhard";break;case $m:t="OptimizedCineon";break;case Qm:t="ACESFilmic";break;case eg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function zv(i){return[i.extensionDerivatives||i.envMapCubeUV||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Hr).join(`
`)}function Uv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Hv(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Hr(i){return i!==""}function Oh(i,e){return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Vv=/^[ \t]*#include +<([\w\d./]+)>/gm;function _l(i){return i.replace(Vv,kv)}function kv(i,e){const t=Be[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return _l(t)}const Gv=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Wv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uh(i){return i.replace(Wv,Hh).replace(Gv,qv)}function qv(i,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Hh(i,e,t,n)}function Hh(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Vh(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Xv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===fu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Cm?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Tr&&(e="SHADOWMAP_TYPE_VSM"),e}function jv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Cr:case Lr:e="ENVMAP_TYPE_CUBE";break;case Rs:case Aa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Yv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Lr:case Aa:e="ENVMAP_MODE_REFRACTION";break}return e}function Zv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ls:e="ENVMAP_BLENDING_MULTIPLY";break;case Ym:e="ENVMAP_BLENDING_MIX";break;case Zm:e="ENVMAP_BLENDING_ADD";break}return e}function Jv(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Xv(t),c=jv(t),u=Yv(t),h=Zv(t),f=t.isWebGL2?"":zv(t),d=Uv(s),g=r.createProgram();let x,M,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=[d].filter(Hr).join(`
`),x.length>0&&(x+=`
`),M=[f,d].filter(Hr).join(`
`),M.length>0&&(M+=`
`)):(x=[Vh(t),"#define SHADER_NAME "+t.shaderName,d,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hr).join(`
`),M=[f,Vh(t),"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pn?"#define TONE_MAPPING":"",t.toneMapping!==Pn?Be.tonemapping_pars_fragment:"",t.toneMapping!==Pn?Ov("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.transparent?"":"#define OPAQUE",Be.encodings_pars_fragment,Bv("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hr).join(`
`)),o=_l(o),o=Oh(o,t),o=zh(o,t),a=_l(a),a=Oh(a,t),a=zh(a,t),o=Uh(o),a=Uh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,M=["#define varying in",t.glslVersion===Xu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const p=m+x+o,L=m+M+a,w=Nh(r,35633,p),T=Nh(r,35632,L);if(r.attachShader(g,w),r.attachShader(g,T),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g),i.debug.checkShaderErrors){const K=r.getProgramInfoLog(g).trim(),he=r.getShaderInfoLog(w).trim(),ne=r.getShaderInfoLog(T).trim();let _=!0,D=!0;if(r.getProgramParameter(g,35714)===!1){_=!1;const z=Bh(r,w,"vertex"),W=Bh(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,35715)+`

Program Info Log: `+K+`
`+z+`
`+W)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(he===""||ne==="")&&(D=!1);D&&(this.diagnostics={runnable:_,programLog:K,vertexShader:{log:he,prefix:x},fragmentShader:{log:ne,prefix:M}})}r.deleteShader(w),r.deleteShader(T);let F;this.getUniforms=function(){return F===void 0&&(F=new Gn(r,g)),F};let R;return this.getAttributes=function(){return R===void 0&&(R=Hv(r,g)),R},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=Iv++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=T,this}let Kv=0;class $v{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new Qv;t.set(e,n)}return t.get(e)}}class Qv{constructor(){this.id=Kv++,this.usedTimes=0}}function ey(i,e,t,n,r,s,o){const a=new eh,l=new $v,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.floatVertexTextures,d=r.maxVertexUniforms,g=r.vertexTextures;let x=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){const z=_.skeleton.bones;if(f)return 1024;{const H=Math.floor((d-20)/4),O=Math.min(H,z.length);return O<z.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+z.length+" bones. This GPU supports "+O+"."),0):O}}function p(_,D,z,W,H){const O=W.fog,q=_.isMeshStandardMaterial?W.environment:null,J=(_.isMeshStandardMaterial?t:e).get(_.envMap||q),fe=M[_.type],ee=H.isSkinnedMesh?m(H):0;_.precision!==null&&(x=r.getMaxPrecision(_.precision),x!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",x,"instead."));let ie,de,xe,Se;if(fe){const ve=an[fe];ie=ve.vertexShader,de=ve.fragmentShader}else ie=_.vertexShader,de=_.fragmentShader,l.update(_),xe=l.getVertexShaderID(_),Se=l.getFragmentShaderID(_);const Q=i.getRenderTarget(),Oe=_.alphaTest>0,ye=_.clearcoat>0;return{isWebGL2:u,shaderID:fe,shaderName:_.type,vertexShader:ie,fragmentShader:de,defines:_.defines,customVertexShaderID:xe,customFragmentShaderID:Se,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:x,instancing:H.isInstancedMesh===!0,instancingColor:H.isInstancedMesh===!0&&H.instanceColor!==null,supportsVertexTextures:g,outputEncoding:Q===null?i.outputEncoding:Q.isXRRenderTarget===!0?Q.texture.encoding:In,map:!!_.map,matcap:!!_.matcap,envMap:!!J,envMapMode:J&&J.mapping,envMapCubeUV:!!J&&(J.mapping===Rs||J.mapping===Aa),lightMap:!!_.lightMap,aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===bg,tangentSpaceNormalMap:_.normalMapType===Oi,decodeVideoTexture:!!_.map&&_.map.isVideoTexture===!0&&_.map.encoding===Ke,clearcoat:ye,clearcoatMap:ye&&!!_.clearcoatMap,clearcoatRoughnessMap:ye&&!!_.clearcoatRoughnessMap,clearcoatNormalMap:ye&&!!_.clearcoatNormalMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,specularIntensityMap:!!_.specularIntensityMap,specularColorMap:!!_.specularColorMap,transparent:_.transparent,alphaMap:!!_.alphaMap,alphaTest:Oe,gradientMap:!!_.gradientMap,sheen:_.sheen>0,sheenColorMap:!!_.sheenColorMap,sheenRoughnessMap:!!_.sheenRoughnessMap,transmission:_.transmission>0,transmissionMap:!!_.transmissionMap,thicknessMap:!!_.thicknessMap,combine:_.combine,vertexTangents:!!_.normalMap&&!!H.geometry&&!!H.geometry.attributes.tangent,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!H.geometry&&!!H.geometry.attributes.color&&H.geometry.attributes.color.itemSize===4,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.displacementMap||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||!!_.sheenColorMap||!!_.sheenRoughnessMap,uvsVertexOnly:!(!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatNormalMap||_.transmission>0||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||_.sheen>0||!!_.sheenColorMap||!!_.sheenRoughnessMap)&&!!_.displacementMap,fog:!!O,useFog:_.fog,fogExp2:O&&O.isFogExp2,flatShading:!!_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:h,skinning:H.isSkinnedMesh===!0&&ee>0,maxBones:ee,useVertexTexture:f,morphTargets:!!H.geometry&&!!H.geometry.morphAttributes.position,morphNormals:!!H.geometry&&!!H.geometry.morphAttributes.normal,morphTargetsCount:!!H.geometry&&!!H.geometry.morphAttributes.position?H.geometry.morphAttributes.position.length:0,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:_.toneMapped?i.toneMapping:Pn,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ri,flipSided:_.side===st,depthPacking:_.depthPacking!==void 0?_.depthPacking:!1,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function L(_){const D=[];if(_.shaderID?D.push(_.shaderID):(D.push(_.customVertexShaderID),D.push(_.customFragmentShaderID)),_.defines!==void 0)for(const z in _.defines)D.push(z),D.push(_.defines[z]);return _.isRawShaderMaterial===!1&&(w(D,_),T(D,_),D.push(i.outputEncoding)),D.push(_.customProgramCacheKey),D.join()}function w(_,D){_.push(D.precision),_.push(D.outputEncoding),_.push(D.envMapMode),_.push(D.combine),_.push(D.vertexUvs),_.push(D.fogExp2),_.push(D.sizeAttenuation),_.push(D.maxBones),_.push(D.morphTargetsCount),_.push(D.numDirLights),_.push(D.numPointLights),_.push(D.numSpotLights),_.push(D.numHemiLights),_.push(D.numRectAreaLights),_.push(D.numDirLightShadows),_.push(D.numPointLightShadows),_.push(D.numSpotLightShadows),_.push(D.shadowMapType),_.push(D.toneMapping),_.push(D.numClippingPlanes),_.push(D.numClipIntersection)}function T(_,D){a.disableAll(),D.isWebGL2&&a.enable(0),D.supportsVertexTextures&&a.enable(1),D.instancing&&a.enable(2),D.instancingColor&&a.enable(3),D.map&&a.enable(4),D.matcap&&a.enable(5),D.envMap&&a.enable(6),D.envMapCubeUV&&a.enable(7),D.lightMap&&a.enable(8),D.aoMap&&a.enable(9),D.emissiveMap&&a.enable(10),D.bumpMap&&a.enable(11),D.normalMap&&a.enable(12),D.objectSpaceNormalMap&&a.enable(13),D.tangentSpaceNormalMap&&a.enable(14),D.clearcoat&&a.enable(15),D.clearcoatMap&&a.enable(16),D.clearcoatRoughnessMap&&a.enable(17),D.clearcoatNormalMap&&a.enable(18),D.displacementMap&&a.enable(19),D.specularMap&&a.enable(20),D.roughnessMap&&a.enable(21),D.metalnessMap&&a.enable(22),D.gradientMap&&a.enable(23),D.alphaMap&&a.enable(24),D.alphaTest&&a.enable(25),D.vertexColors&&a.enable(26),D.vertexAlphas&&a.enable(27),D.vertexUvs&&a.enable(28),D.vertexTangents&&a.enable(29),D.uvsVertexOnly&&a.enable(30),D.fog&&a.enable(31),_.push(a.mask),a.disableAll(),D.useFog&&a.enable(0),D.flatShading&&a.enable(1),D.logarithmicDepthBuffer&&a.enable(2),D.skinning&&a.enable(3),D.useVertexTexture&&a.enable(4),D.morphTargets&&a.enable(5),D.morphNormals&&a.enable(6),D.premultipliedAlpha&&a.enable(7),D.shadowMapEnabled&&a.enable(8),D.physicallyCorrectLights&&a.enable(9),D.doubleSided&&a.enable(10),D.flipSided&&a.enable(11),D.depthPacking&&a.enable(12),D.dithering&&a.enable(13),D.specularIntensityMap&&a.enable(14),D.specularColorMap&&a.enable(15),D.transmission&&a.enable(16),D.transmissionMap&&a.enable(17),D.thicknessMap&&a.enable(18),D.sheen&&a.enable(19),D.sheenColorMap&&a.enable(20),D.sheenRoughnessMap&&a.enable(21),D.decodeVideoTexture&&a.enable(22),D.transparent&&a.enable(23),_.push(a.mask)}function F(_){const D=M[_.type];let z;if(D){const W=an[D];z=to.clone(W.uniforms)}else z=_.uniforms;return z}function R(_,D){let z;for(let W=0,H=c.length;W<H;W++){const O=c[W];if(O.cacheKey===D){z=O,++z.usedTimes;break}}return z===void 0&&(z=new Jv(i,D,_,s),c.push(z)),z}function K(_){if(--_.usedTimes==0){const D=c.indexOf(_);c[D]=c[c.length-1],c.pop(),_.destroy()}}function he(_){l.remove(_)}function ne(){l.dispose()}return{getParameters:p,getProgramCacheKey:L,getUniforms:F,acquireProgram:R,releaseProgram:K,releaseShaderCache:he,programs:c,dispose:ne}}function ty(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function ny(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function kh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Gh(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,f,d,g,x,M){let m=i[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:x,group:M},i[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=x,m.group=M),e++,m}function a(h,f,d,g,x,M){const m=o(h,f,d,g,x,M);d.transmission>0?n.push(m):d.transparent===!0?r.push(m):t.push(m)}function l(h,f,d,g,x,M){const m=o(h,f,d,g,x,M);d.transmission>0?n.unshift(m):d.transparent===!0?r.unshift(m):t.unshift(m)}function c(h,f){t.length>1&&t.sort(h||ny),n.length>1&&n.sort(f||kh),r.length>1&&r.sort(f||kh)}function u(){for(let h=e,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function iy(){let i=new WeakMap;function e(n,r){let s;return i.has(n)===!1?(s=new Gh,i.set(n,[s])):r>=i.get(n).length?(s=new Gh,i.get(n).push(s)):s=i.get(n)[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function ry(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new Ee};break;case"SpotLight":t={position:new A,direction:new A,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new A,halfWidth:new A,halfHeight:new A};break}return i[e.id]=t,t}}}function sy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let oy=0;function ay(i,e){return(e.castShadow?1:0)-(i.castShadow?1:0)}function ly(i,e){const t=new ry,n=sy(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new A);const s=new A,o=new Ce,a=new Ce;function l(u,h){let f=0,d=0,g=0;for(let he=0;he<9;he++)r.probe[he].set(0,0,0);let x=0,M=0,m=0,p=0,L=0,w=0,T=0,F=0;u.sort(ay);const R=h!==!0?Math.PI:1;for(let he=0,ne=u.length;he<ne;he++){const _=u[he],D=_.color,z=_.intensity,W=_.distance,H=_.shadow&&_.shadow.map?_.shadow.map.texture:null;if(_.isAmbientLight)f+=D.r*z*R,d+=D.g*z*R,g+=D.b*z*R;else if(_.isLightProbe)for(let O=0;O<9;O++)r.probe[O].addScaledVector(_.sh.coefficients[O],z);else if(_.isDirectionalLight){const O=t.get(_);if(O.color.copy(_.color).multiplyScalar(_.intensity*R),_.castShadow){const q=_.shadow,J=n.get(_);J.shadowBias=q.bias,J.shadowNormalBias=q.normalBias,J.shadowRadius=q.radius,J.shadowMapSize=q.mapSize,r.directionalShadow[x]=J,r.directionalShadowMap[x]=H,r.directionalShadowMatrix[x]=_.shadow.matrix,w++}r.directional[x]=O,x++}else if(_.isSpotLight){const O=t.get(_);if(O.position.setFromMatrixPosition(_.matrixWorld),O.color.copy(D).multiplyScalar(z*R),O.distance=W,O.coneCos=Math.cos(_.angle),O.penumbraCos=Math.cos(_.angle*(1-_.penumbra)),O.decay=_.decay,_.castShadow){const q=_.shadow,J=n.get(_);J.shadowBias=q.bias,J.shadowNormalBias=q.normalBias,J.shadowRadius=q.radius,J.shadowMapSize=q.mapSize,r.spotShadow[m]=J,r.spotShadowMap[m]=H,r.spotShadowMatrix[m]=_.shadow.matrix,F++}r.spot[m]=O,m++}else if(_.isRectAreaLight){const O=t.get(_);O.color.copy(D).multiplyScalar(z),O.halfWidth.set(_.width*.5,0,0),O.halfHeight.set(0,_.height*.5,0),r.rectArea[p]=O,p++}else if(_.isPointLight){const O=t.get(_);if(O.color.copy(_.color).multiplyScalar(_.intensity*R),O.distance=_.distance,O.decay=_.decay,_.castShadow){const q=_.shadow,J=n.get(_);J.shadowBias=q.bias,J.shadowNormalBias=q.normalBias,J.shadowRadius=q.radius,J.shadowMapSize=q.mapSize,J.shadowCameraNear=q.camera.near,J.shadowCameraFar=q.camera.far,r.pointShadow[M]=J,r.pointShadowMap[M]=H,r.pointShadowMatrix[M]=_.shadow.matrix,T++}r.point[M]=O,M++}else if(_.isHemisphereLight){const O=t.get(_);O.skyColor.copy(_.color).multiplyScalar(z*R),O.groundColor.copy(_.groundColor).multiplyScalar(z*R),r.hemi[L]=O,L++}}p>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=me.LTC_FLOAT_1,r.rectAreaLTC2=me.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=me.LTC_HALF_1,r.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=d,r.ambient[2]=g;const K=r.hash;(K.directionalLength!==x||K.pointLength!==M||K.spotLength!==m||K.rectAreaLength!==p||K.hemiLength!==L||K.numDirectionalShadows!==w||K.numPointShadows!==T||K.numSpotShadows!==F)&&(r.directional.length=x,r.spot.length=m,r.rectArea.length=p,r.point.length=M,r.hemi.length=L,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=F,r.spotShadowMap.length=F,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=T,r.spotShadowMatrix.length=F,K.directionalLength=x,K.pointLength=M,K.spotLength=m,K.rectAreaLength=p,K.hemiLength=L,K.numDirectionalShadows=w,K.numPointShadows=T,K.numSpotShadows=F,r.version=oy++)}function c(u,h){let f=0,d=0,g=0,x=0,M=0;const m=h.matrixWorldInverse;for(let p=0,L=u.length;p<L;p++){const w=u[p];if(w.isDirectionalLight){const T=r.directional[f];T.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),f++}else if(w.isSpotLight){const T=r.spot[g];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),g++}else if(w.isRectAreaLight){const T=r.rectArea[x];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(m),a.identity(),o.copy(w.matrixWorld),o.premultiply(m),a.extractRotation(o),T.halfWidth.set(w.width*.5,0,0),T.halfHeight.set(0,w.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(w.isPointLight){const T=r.point[d];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){const T=r.hemi[M];T.direction.setFromMatrixPosition(w.matrixWorld),T.direction.transformDirection(m),T.direction.normalize(),M++}}}return{setup:l,setupView:c,state:r}}function Wh(i,e){const t=new ly(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(h){n.push(h)}function a(h){r.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function cy(i,e){let t=new WeakMap;function n(s,o=0){let a;return t.has(s)===!1?(a=new Wh(i,e),t.set(s,[a])):o>=t.get(s).length?(a=new Wh(i,e),t.get(s).push(a)):a=t.get(s)[o],a}function r(){t=new WeakMap}return{get:n,dispose:r}}class qh extends bt{constructor(e){super();this.type="MeshDepthMaterial",this.depthPacking=yg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}qh.prototype.isMeshDepthMaterial=!0;class Xh extends bt{constructor(e){super();this.type="MeshDistanceMaterial",this.referencePosition=new A,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}Xh.prototype.isMeshDistanceMaterial=!0;const uy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hy=`uniform sampler2D shadow_pass;
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
}`;function jh(i,e,t){let n=new ro;const r=new ue,s=new ue,o=new qe,a=new qh({depthPacking:Mg}),l=new Xh,c={},u=t.maxTextureSize,h={0:st,1:Li,2:Ri},f=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:uy,fragmentShader:hy}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new $e;g.setAttribute("position",new ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new wt(g,f),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fu,this.render=function(w,T,F){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||w.length===0)return;const R=i.getRenderTarget(),K=i.getActiveCubeFace(),he=i.getActiveMipmapLevel(),ne=i.state;ne.setBlending(Rn),ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);for(let _=0,D=w.length;_<D;_++){const z=w[_],W=z.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const H=W.getFrameExtents();if(r.multiply(H),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/H.x),r.x=s.x*H.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/H.y),r.y=s.y*H.y,W.mapSize.y=s.y)),W.map===null&&!W.isPointLightShadow&&this.type===Tr){const q={minFilter:yt,magFilter:yt,format:Ct};W.map=new Ot(r.x,r.y,q),W.map.texture.name=z.name+".shadowMap",W.mapPass=new Ot(r.x,r.y,q),W.camera.updateProjectionMatrix()}if(W.map===null){const q={minFilter:lt,magFilter:lt,format:Ct};W.map=new Ot(r.x,r.y,q),W.map.texture.name=z.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const O=W.getViewportCount();for(let q=0;q<O;q++){const J=W.getViewport(q);o.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),ne.viewport(o),W.updateMatrices(z,q),n=W.getFrustum(),L(T,F,W.camera,z,this.type)}!W.isPointLightShadow&&this.type===Tr&&m(W,F),W.needsUpdate=!1}M.needsUpdate=!1,i.setRenderTarget(R,K,he)};function m(w,T){const F=e.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(T,null,F,f,x,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(T,null,F,d,x,null)}function p(w,T,F,R,K,he,ne){let _=null;const D=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0?_=D:_=R.isPointLight===!0?l:a,i.localClippingEnabled&&F.clipShadows===!0&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0){const z=_.uuid,W=F.uuid;let H=c[z];H===void 0&&(H={},c[z]=H);let O=H[W];O===void 0&&(O=_.clone(),H[W]=O),_=O}return _.visible=F.visible,_.wireframe=F.wireframe,ne===Tr?_.side=F.shadowSide!==null?F.shadowSide:F.side:_.side=F.shadowSide!==null?F.shadowSide:h[F.side],_.alphaMap=F.alphaMap,_.alphaTest=F.alphaTest,_.clipShadows=F.clipShadows,_.clippingPlanes=F.clippingPlanes,_.clipIntersection=F.clipIntersection,_.displacementMap=F.displacementMap,_.displacementScale=F.displacementScale,_.displacementBias=F.displacementBias,_.wireframeLinewidth=F.wireframeLinewidth,_.linewidth=F.linewidth,R.isPointLight===!0&&_.isMeshDistanceMaterial===!0&&(_.referencePosition.setFromMatrixPosition(R.matrixWorld),_.nearDistance=K,_.farDistance=he),_}function L(w,T,F,R,K){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&K===Tr)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,w.matrixWorld);const _=e.update(w),D=w.material;if(Array.isArray(D)){const z=_.groups;for(let W=0,H=z.length;W<H;W++){const O=z[W],q=D[O.materialIndex];if(q&&q.visible){const J=p(w,_,q,R,F.near,F.far,K);i.renderBufferDirect(F,null,_,J,w,O)}}}else if(D.visible){const z=p(w,_,D,R,F.near,F.far,K);i.renderBufferDirect(F,null,_,z,w,null)}}const ne=w.children;for(let _=0,D=ne.length;_<D;_++)L(ne[_],T,F,R,K)}}function fy(i,e,t){const n=t.isWebGL2;function r(){let P=!1;const _e=new qe;let ge=null;const be=new qe(0,0,0,0);return{setMask:function(Z){ge!==Z&&!P&&(i.colorMask(Z,Z,Z,Z),ge=Z)},setLocked:function(Z){P=Z},setClear:function(Z,we,ze,et,It){It===!0&&(Z*=et,we*=et,ze*=et),_e.set(Z,we,ze,et),be.equals(_e)===!1&&(i.clearColor(Z,we,ze,et),be.copy(_e))},reset:function(){P=!1,ge=null,be.set(-1,0,0,0)}}}function s(){let P=!1,_e=null,ge=null,be=null;return{setTest:function(Z){Z?Q(2929):Oe(2929)},setMask:function(Z){_e!==Z&&!P&&(i.depthMask(Z),_e=Z)},setFunc:function(Z){if(ge!==Z){if(Z)switch(Z){case Vm:i.depthFunc(512);break;case km:i.depthFunc(519);break;case Gm:i.depthFunc(513);break;case Sa:i.depthFunc(515);break;case Wm:i.depthFunc(514);break;case qm:i.depthFunc(518);break;case Xm:i.depthFunc(516);break;case jm:i.depthFunc(517);break;default:i.depthFunc(515)}else i.depthFunc(515);ge=Z}},setLocked:function(Z){P=Z},setClear:function(Z){be!==Z&&(i.clearDepth(Z),be=Z)},reset:function(){P=!1,_e=null,ge=null,be=null}}}function o(){let P=!1,_e=null,ge=null,be=null,Z=null,we=null,ze=null,et=null,It=null;return{setTest:function(nt){P||(nt?Q(2960):Oe(2960))},setMask:function(nt){_e!==nt&&!P&&(i.stencilMask(nt),_e=nt)},setFunc:function(nt,Kt,hn){(ge!==nt||be!==Kt||Z!==hn)&&(i.stencilFunc(nt,Kt,hn),ge=nt,be=Kt,Z=hn)},setOp:function(nt,Kt,hn){(we!==nt||ze!==Kt||et!==hn)&&(i.stencilOp(nt,Kt,hn),we=nt,ze=Kt,et=hn)},setLocked:function(nt){P=nt},setClear:function(nt){It!==nt&&(i.clearStencil(nt),It=nt)},reset:function(){P=!1,_e=null,ge=null,be=null,Z=null,we=null,ze=null,et=null,It=null}}}const a=new r,l=new s,c=new o;let u={},h={},f=new WeakMap,d=[],g=null,x=!1,M=null,m=null,p=null,L=null,w=null,T=null,F=null,R=!1,K=null,he=null,ne=null,_=null,D=null;const z=i.getParameter(35661);let W=!1,H=0;const O=i.getParameter(7938);O.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(O)[1]),W=H>=1):O.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),W=H>=2);let q=null,J={};const fe=i.getParameter(3088),ee=i.getParameter(2978),ie=new qe().fromArray(fe),de=new qe().fromArray(ee);function xe(P,_e,ge){const be=new Uint8Array(4),Z=i.createTexture();i.bindTexture(P,Z),i.texParameteri(P,10241,9728),i.texParameteri(P,10240,9728);for(let we=0;we<ge;we++)i.texImage2D(_e+we,0,6408,1,1,0,6408,5121,be);return Z}const Se={};Se[3553]=xe(3553,3553,1),Se[34067]=xe(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Q(2929),l.setFunc(Sa),E(!1),I(hu),Q(2884),te(Rn);function Q(P){u[P]!==!0&&(i.enable(P),u[P]=!0)}function Oe(P){u[P]!==!1&&(i.disable(P),u[P]=!1)}function ye(P,_e){return h[P]!==_e?(i.bindFramebuffer(P,_e),h[P]=_e,n&&(P===36009&&(h[36160]=_e),P===36160&&(h[36009]=_e)),!0):!1}function Te(P,_e){let ge=d,be=!1;if(P)if(ge=f.get(_e),ge===void 0&&(ge=[],f.set(_e,ge)),P.isWebGLMultipleRenderTargets){const Z=P.texture;if(ge.length!==Z.length||ge[0]!==36064){for(let we=0,ze=Z.length;we<ze;we++)ge[we]=36064+we;ge.length=Z.length,be=!0}}else ge[0]!==36064&&(ge[0]=36064,be=!0);else ge[0]!==1029&&(ge[0]=1029,be=!0);be&&(t.isWebGL2?i.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function ve(P){return g!==P?(i.useProgram(P),g=P,!0):!1}const Le={[Pi]:32774,[Rm]:32778,[Pm]:32779};if(n)Le[xu]=32775,Le[_u]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&(Le[xu]=P.MIN_EXT,Le[_u]=P.MAX_EXT)}const Ae={[Dm]:0,[Im]:1,[Fm]:768,[vu]:770,[Hm]:776,[zm]:774,[Bm]:772,[Nm]:769,[yu]:771,[Um]:775,[Om]:773};function te(P,_e,ge,be,Z,we,ze,et){if(P===Rn){x===!0&&(Oe(3042),x=!1);return}if(x===!1&&(Q(3042),x=!0),P!==Lm){if(P!==M||et!==R){if((m!==Pi||w!==Pi)&&(i.blendEquation(32774),m=Pi,w=Pi),et)switch(P){case Ar:i.blendFuncSeparate(1,771,1,771);break;case pu:i.blendFunc(1,1);break;case mu:i.blendFuncSeparate(0,769,0,1);break;case gu:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Ar:i.blendFuncSeparate(770,771,1,771);break;case pu:i.blendFunc(770,1);break;case mu:i.blendFuncSeparate(0,769,0,1);break;case gu:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}p=null,L=null,T=null,F=null,M=P,R=et}return}Z=Z||_e,we=we||ge,ze=ze||be,(_e!==m||Z!==w)&&(i.blendEquationSeparate(Le[_e],Le[Z]),m=_e,w=Z),(ge!==p||be!==L||we!==T||ze!==F)&&(i.blendFuncSeparate(Ae[ge],Ae[be],Ae[we],Ae[ze]),p=ge,L=be,T=we,F=ze),M=P,R=null}function b(P,_e){P.side===Ri?Oe(2884):Q(2884);let ge=P.side===st;_e&&(ge=!ge),E(ge),P.blending===Ar&&P.transparent===!1?te(Rn):te(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const be=P.stencilWrite;c.setTest(be),be&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),U(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Q(32926):Oe(32926)}function E(P){K!==P&&(P?i.frontFace(2304):i.frontFace(2305),K=P)}function I(P){P!==Tm?(Q(2884),P!==he&&(P===hu?i.cullFace(1029):P===Am?i.cullFace(1028):i.cullFace(1032))):Oe(2884),he=P}function B(P){P!==ne&&(W&&i.lineWidth(P),ne=P)}function U(P,_e,ge){P?(Q(32823),(_!==_e||D!==ge)&&(i.polygonOffset(_e,ge),_=_e,D=ge)):Oe(32823)}function Y(P){P?Q(3089):Oe(3089)}function ae(P){P===void 0&&(P=33984+z-1),q!==P&&(i.activeTexture(P),q=P)}function re(P,_e){q===null&&ae();let ge=J[q];ge===void 0&&(ge={type:void 0,texture:void 0},J[q]=ge),(ge.type!==P||ge.texture!==_e)&&(i.bindTexture(P,_e||Se[P]),ge.type=P,ge.texture=_e)}function se(){const P=J[q];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function v(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function N(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function le(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function V(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pe(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function C(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function G(P){ie.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),ie.copy(P))}function ce(P){de.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),de.copy(P))}function Me(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},q=null,J={},h={},f=new WeakMap,d=[],g=null,x=!1,M=null,m=null,p=null,L=null,w=null,T=null,F=null,R=!1,K=null,he=null,ne=null,_=null,D=null,ie.set(0,0,i.canvas.width,i.canvas.height),de.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Q,disable:Oe,bindFramebuffer:ye,drawBuffers:Te,useProgram:ve,setBlending:te,setMaterial:b,setFlipSided:E,setCullFace:I,setLineWidth:B,setPolygonOffset:U,setScissorTest:Y,activeTexture:ae,bindTexture:re,unbindTexture:se,compressedTexImage2D:y,texImage2D:pe,texImage3D:C,texStorage2D:le,texStorage3D:V,texSubImage2D:v,texSubImage3D:N,compressedTexSubImage2D:j,scissor:G,viewport:ce,reset:Me}}function dy(i,e,t,n,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):void 0,g=new WeakMap;let x,M=!1;try{M=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(y,v){return M?new OffscreenCanvas(y,v):Nr("canvas")}function p(y,v,N,j){let le=1;if((y.width>j||y.height>j)&&(le=j/Math.max(y.width,y.height)),le<1||v===!0)if(typeof HTMLImageElement!="undefined"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&y instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&y instanceof ImageBitmap){const V=v?ju:Math.floor,pe=V(le*y.width),C=V(le*y.height);x===void 0&&(x=m(pe,C));const G=N?m(pe,C):x;return G.width=pe,G.height=C,G.getContext("2d").drawImage(y,0,0,pe,C),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+pe+"x"+C+")."),G}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function L(y){return Ua(y.width)&&Ua(y.height)}function w(y){return a?!1:y.wrapS!==Bt||y.wrapT!==Bt||y.minFilter!==lt&&y.minFilter!==yt}function T(y,v){return y.generateMipmaps&&v&&y.minFilter!==lt&&y.minFilter!==yt}function F(y){i.generateMipmap(y)}function R(y,v,N,j,le=!1){if(a===!1)return v;if(y!==null){if(i[y]!==void 0)return i[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let V=v;return v===6403&&(N===5126&&(V=33326),N===5131&&(V=33325),N===5121&&(V=33321)),v===33319&&(N===5126&&(V=33328),N===5131&&(V=33327),N===5121&&(V=33323)),v===6408&&(N===5126&&(V=34836),N===5131&&(V=34842),N===5121&&(V=j===Ke&&le===!1?35907:32856),N===32819&&(V=32854),N===32820&&(V=32855)),(V===33325||V===33326||V===33327||V===33328||V===34842||V===34836)&&e.get("EXT_color_buffer_float"),V}function K(y,v,N){return T(y,N)===!0||y.isFramebufferTexture&&y.minFilter!==lt&&y.minFilter!==yt?Math.log2(Math.max(v.width,v.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?v.mipmaps.length:1}function he(y){return y===lt||y===bu||y===wu?9728:9729}function ne(y){const v=y.target;v.removeEventListener("dispose",ne),D(v),v.isVideoTexture&&g.delete(v),o.memory.textures--}function _(y){const v=y.target;v.removeEventListener("dispose",_),z(v)}function D(y){const v=n.get(y);v.__webglInit!==void 0&&(i.deleteTexture(v.__webglTexture),n.remove(y))}function z(y){const v=y.texture,N=n.get(y),j=n.get(v);if(!!y){if(j.__webglTexture!==void 0&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let le=0;le<6;le++)i.deleteFramebuffer(N.__webglFramebuffer[le]),N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer[le]);else i.deleteFramebuffer(N.__webglFramebuffer),N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&i.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer&&i.deleteRenderbuffer(N.__webglColorRenderbuffer),N.__webglDepthRenderbuffer&&i.deleteRenderbuffer(N.__webglDepthRenderbuffer);if(y.isWebGLMultipleRenderTargets)for(let le=0,V=v.length;le<V;le++){const pe=n.get(v[le]);pe.__webglTexture&&(i.deleteTexture(pe.__webglTexture),o.memory.textures--),n.remove(v[le])}n.remove(v),n.remove(y)}}let W=0;function H(){W=0}function O(){const y=W;return y>=l&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+l),W+=1,y}function q(y,v){const N=n.get(y);if(y.isVideoTexture&&B(y),y.version>0&&N.__version!==y.version){const j=y.image;if(j===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(N,y,v);return}}t.activeTexture(33984+v),t.bindTexture(3553,N.__webglTexture)}function J(y,v){const N=n.get(y);if(y.version>0&&N.__version!==y.version){Q(N,y,v);return}t.activeTexture(33984+v),t.bindTexture(35866,N.__webglTexture)}function fe(y,v){const N=n.get(y);if(y.version>0&&N.__version!==y.version){Q(N,y,v);return}t.activeTexture(33984+v),t.bindTexture(32879,N.__webglTexture)}function ee(y,v){const N=n.get(y);if(y.version>0&&N.__version!==y.version){Oe(N,y,v);return}t.activeTexture(33984+v),t.bindTexture(34067,N.__webglTexture)}const ie={[Ca]:10497,[Bt]:33071,[La]:33648},de={[lt]:9728,[bu]:9984,[wu]:9986,[yt]:9729,[tg]:9985,[Ps]:9987};function xe(y,v,N){if(N?(i.texParameteri(y,10242,ie[v.wrapS]),i.texParameteri(y,10243,ie[v.wrapT]),(y===32879||y===35866)&&i.texParameteri(y,32882,ie[v.wrapR]),i.texParameteri(y,10240,de[v.magFilter]),i.texParameteri(y,10241,de[v.minFilter])):(i.texParameteri(y,10242,33071),i.texParameteri(y,10243,33071),(y===32879||y===35866)&&i.texParameteri(y,32882,33071),(v.wrapS!==Bt||v.wrapT!==Bt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(y,10240,he(v.magFilter)),i.texParameteri(y,10241,he(v.minFilter)),v.minFilter!==lt&&v.minFilter!==yt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const j=e.get("EXT_texture_filter_anisotropic");if(v.type===ai&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===Di&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(i.texParameterf(y,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function Se(y,v){y.__webglInit===void 0&&(y.__webglInit=!0,v.addEventListener("dispose",ne),y.__webglTexture=i.createTexture(),o.memory.textures++)}function Q(y,v,N){let j=3553;v.isDataTexture2DArray&&(j=35866),v.isDataTexture3D&&(j=32879),Se(y,v),t.activeTexture(33984+N),t.bindTexture(j,y.__webglTexture),i.pixelStorei(37440,v.flipY),i.pixelStorei(37441,v.premultiplyAlpha),i.pixelStorei(3317,v.unpackAlignment),i.pixelStorei(37443,0);const le=w(v)&&L(v.image)===!1;let V=p(v.image,le,!1,u);V=U(v,V);const pe=L(V)||a,C=s.convert(v.format,v.encoding);let G=s.convert(v.type),ce=R(v.internalFormat,C,G,v.encoding,v.isVideoTexture);xe(j,v,pe);let Me;const P=v.mipmaps,_e=a&&v.isVideoTexture!==!0,ge=y.__version===void 0,be=K(v,V,pe);if(v.isDepthTexture)ce=6402,a?v.type===ai?ce=36012:v.type===Ds?ce=33190:v.type===Ii?ce=35056:ce=33189:v.type===ai&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===li&&ce===6402&&v.type!==Rr&&v.type!==Ds&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Rr,G=s.convert(v.type)),v.format===Fi&&ce===6402&&(ce=34041,v.type!==Ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Ii,G=s.convert(v.type))),_e&&ge?t.texStorage2D(3553,1,ce,V.width,V.height):t.texImage2D(3553,0,ce,V.width,V.height,0,C,G,null);else if(v.isDataTexture)if(P.length>0&&pe){_e&&ge&&t.texStorage2D(3553,be,ce,P[0].width,P[0].height);for(let Z=0,we=P.length;Z<we;Z++)Me=P[Z],_e?t.texSubImage2D(3553,0,0,0,Me.width,Me.height,C,G,Me.data):t.texImage2D(3553,Z,ce,Me.width,Me.height,0,C,G,Me.data);v.generateMipmaps=!1}else _e?(ge&&t.texStorage2D(3553,be,ce,V.width,V.height),t.texSubImage2D(3553,0,0,0,V.width,V.height,C,G,V.data)):t.texImage2D(3553,0,ce,V.width,V.height,0,C,G,V.data);else if(v.isCompressedTexture){_e&&ge&&t.texStorage2D(3553,be,ce,P[0].width,P[0].height);for(let Z=0,we=P.length;Z<we;Z++)Me=P[Z],v.format!==Ct?C!==null?_e?t.compressedTexSubImage2D(3553,Z,0,0,Me.width,Me.height,C,Me.data):t.compressedTexImage2D(3553,Z,ce,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_e?t.texSubImage2D(3553,Z,0,0,Me.width,Me.height,C,G,Me.data):t.texImage2D(3553,Z,ce,Me.width,Me.height,0,C,G,Me.data)}else if(v.isDataTexture2DArray)_e?(ge&&t.texStorage3D(35866,be,ce,V.width,V.height,V.depth),t.texSubImage3D(35866,0,0,0,0,V.width,V.height,V.depth,C,G,V.data)):t.texImage3D(35866,0,ce,V.width,V.height,V.depth,0,C,G,V.data);else if(v.isDataTexture3D)_e?(ge&&t.texStorage3D(32879,be,ce,V.width,V.height,V.depth),t.texSubImage3D(32879,0,0,0,0,V.width,V.height,V.depth,C,G,V.data)):t.texImage3D(32879,0,ce,V.width,V.height,V.depth,0,C,G,V.data);else if(v.isFramebufferTexture)_e&&ge?t.texStorage2D(3553,be,ce,V.width,V.height):t.texImage2D(3553,0,ce,V.width,V.height,0,C,G,null);else if(P.length>0&&pe){_e&&ge&&t.texStorage2D(3553,be,ce,P[0].width,P[0].height);for(let Z=0,we=P.length;Z<we;Z++)Me=P[Z],_e?t.texSubImage2D(3553,Z,0,0,C,G,Me):t.texImage2D(3553,Z,ce,C,G,Me);v.generateMipmaps=!1}else _e?(ge&&t.texStorage2D(3553,be,ce,V.width,V.height),t.texSubImage2D(3553,0,0,0,C,G,V)):t.texImage2D(3553,0,ce,C,G,V);T(v,pe)&&F(j),y.__version=v.version,v.onUpdate&&v.onUpdate(v)}function Oe(y,v,N){if(v.image.length!==6)return;Se(y,v),t.activeTexture(33984+N),t.bindTexture(34067,y.__webglTexture),i.pixelStorei(37440,v.flipY),i.pixelStorei(37441,v.premultiplyAlpha),i.pixelStorei(3317,v.unpackAlignment),i.pixelStorei(37443,0);const j=v&&(v.isCompressedTexture||v.image[0].isCompressedTexture),le=v.image[0]&&v.image[0].isDataTexture,V=[];for(let Z=0;Z<6;Z++)!j&&!le?V[Z]=p(v.image[Z],!1,!0,c):V[Z]=le?v.image[Z].image:v.image[Z],V[Z]=U(v,V[Z]);const pe=V[0],C=L(pe)||a,G=s.convert(v.format,v.encoding),ce=s.convert(v.type),Me=R(v.internalFormat,G,ce,v.encoding),P=a&&v.isVideoTexture!==!0,_e=y.__version===void 0;let ge=K(v,pe,C);xe(34067,v,C);let be;if(j){P&&_e&&t.texStorage2D(34067,ge,Me,pe.width,pe.height);for(let Z=0;Z<6;Z++){be=V[Z].mipmaps;for(let we=0;we<be.length;we++){const ze=be[we];v.format!==Ct?G!==null?P?t.compressedTexSubImage2D(34069+Z,we,0,0,ze.width,ze.height,G,ze.data):t.compressedTexImage2D(34069+Z,we,Me,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?t.texSubImage2D(34069+Z,we,0,0,ze.width,ze.height,G,ce,ze.data):t.texImage2D(34069+Z,we,Me,ze.width,ze.height,0,G,ce,ze.data)}}}else{be=v.mipmaps,P&&_e&&(be.length>0&&ge++,t.texStorage2D(34067,ge,Me,V[0].width,V[0].height));for(let Z=0;Z<6;Z++)if(le){P?t.texSubImage2D(34069+Z,0,0,0,V[Z].width,V[Z].height,G,ce,V[Z].data):t.texImage2D(34069+Z,0,Me,V[Z].width,V[Z].height,0,G,ce,V[Z].data);for(let we=0;we<be.length;we++){const et=be[we].image[Z].image;P?t.texSubImage2D(34069+Z,we+1,0,0,et.width,et.height,G,ce,et.data):t.texImage2D(34069+Z,we+1,Me,et.width,et.height,0,G,ce,et.data)}}else{P?t.texSubImage2D(34069+Z,0,0,0,G,ce,V[Z]):t.texImage2D(34069+Z,0,Me,G,ce,V[Z]);for(let we=0;we<be.length;we++){const ze=be[we];P?t.texSubImage2D(34069+Z,we+1,0,0,G,ce,ze.image[Z]):t.texImage2D(34069+Z,we+1,Me,G,ce,ze.image[Z])}}}T(v,C)&&F(34067),y.__version=v.version,v.onUpdate&&v.onUpdate(v)}function ye(y,v,N,j,le){const V=s.convert(N.format,N.encoding),pe=s.convert(N.type),C=R(N.internalFormat,V,pe,N.encoding);n.get(v).__hasExternalTextures||(le===32879||le===35866?t.texImage3D(le,0,C,v.width,v.height,v.depth,0,V,pe,null):t.texImage2D(le,0,C,v.width,v.height,0,V,pe,null)),t.bindFramebuffer(36160,y),v.useRenderToTexture?d.framebufferTexture2DMultisampleEXT(36160,j,le,n.get(N).__webglTexture,0,I(v)):i.framebufferTexture2D(36160,j,le,n.get(N).__webglTexture,0),t.bindFramebuffer(36160,null)}function Te(y,v,N){if(i.bindRenderbuffer(36161,y),v.depthBuffer&&!v.stencilBuffer){let j=33189;if(N||v.useRenderToTexture){const le=v.depthTexture;le&&le.isDepthTexture&&(le.type===ai?j=36012:le.type===Ds&&(j=33190));const V=I(v);v.useRenderToTexture?d.renderbufferStorageMultisampleEXT(36161,V,j,v.width,v.height):i.renderbufferStorageMultisample(36161,V,j,v.width,v.height)}else i.renderbufferStorage(36161,j,v.width,v.height);i.framebufferRenderbuffer(36160,36096,36161,y)}else if(v.depthBuffer&&v.stencilBuffer){const j=I(v);N&&v.useRenderbuffer?i.renderbufferStorageMultisample(36161,j,35056,v.width,v.height):v.useRenderToTexture?d.renderbufferStorageMultisampleEXT(36161,j,35056,v.width,v.height):i.renderbufferStorage(36161,34041,v.width,v.height),i.framebufferRenderbuffer(36160,33306,36161,y)}else{const j=v.isWebGLMultipleRenderTargets===!0?v.texture[0]:v.texture,le=s.convert(j.format,j.encoding),V=s.convert(j.type),pe=R(j.internalFormat,le,V,j.encoding),C=I(v);N&&v.useRenderbuffer?i.renderbufferStorageMultisample(36161,C,pe,v.width,v.height):v.useRenderToTexture?d.renderbufferStorageMultisampleEXT(36161,C,pe,v.width,v.height):i.renderbufferStorage(36161,pe,v.width,v.height)}i.bindRenderbuffer(36161,null)}function ve(y,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,y),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),q(v.depthTexture,0);const j=n.get(v.depthTexture).__webglTexture,le=I(v);if(v.depthTexture.format===li)v.useRenderToTexture?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,j,0,le):i.framebufferTexture2D(36160,36096,3553,j,0);else if(v.depthTexture.format===Fi)v.useRenderToTexture?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,j,0,le):i.framebufferTexture2D(36160,33306,3553,j,0);else throw new Error("Unknown depthTexture format")}function Le(y){const v=n.get(y),N=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!v.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");ve(v.__webglFramebuffer,y)}else if(N){v.__webglDepthbuffer=[];for(let j=0;j<6;j++)t.bindFramebuffer(36160,v.__webglFramebuffer[j]),v.__webglDepthbuffer[j]=i.createRenderbuffer(),Te(v.__webglDepthbuffer[j],y,!1)}else t.bindFramebuffer(36160,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),Te(v.__webglDepthbuffer,y,!1);t.bindFramebuffer(36160,null)}function Ae(y,v,N){const j=n.get(y);v!==void 0&&ye(j.__webglFramebuffer,y,y.texture,36064,3553),N!==void 0&&Le(y)}function te(y){const v=y.texture,N=n.get(y),j=n.get(v);y.addEventListener("dispose",_),y.isWebGLMultipleRenderTargets!==!0&&(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=v.version,o.memory.textures++);const le=y.isWebGLCubeRenderTarget===!0,V=y.isWebGLMultipleRenderTargets===!0,pe=v.isDataTexture3D||v.isDataTexture2DArray,C=L(y)||a;if(le){N.__webglFramebuffer=[];for(let G=0;G<6;G++)N.__webglFramebuffer[G]=i.createFramebuffer()}else if(N.__webglFramebuffer=i.createFramebuffer(),V)if(r.drawBuffers){const G=y.texture;for(let ce=0,Me=G.length;ce<Me;ce++){const P=n.get(G[ce]);P.__webglTexture===void 0&&(P.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(y.useRenderbuffer)if(a){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=i.createRenderbuffer(),i.bindRenderbuffer(36161,N.__webglColorRenderbuffer);const G=s.convert(v.format,v.encoding),ce=s.convert(v.type),Me=R(v.internalFormat,G,ce,v.encoding),P=I(y);i.renderbufferStorageMultisample(36161,P,Me,y.width,y.height),t.bindFramebuffer(36160,N.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064,36161,N.__webglColorRenderbuffer),i.bindRenderbuffer(36161,null),y.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),Te(N.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(le){t.bindTexture(34067,j.__webglTexture),xe(34067,v,C);for(let G=0;G<6;G++)ye(N.__webglFramebuffer[G],y,v,36064,34069+G);T(v,C)&&F(34067),t.unbindTexture()}else if(V){const G=y.texture;for(let ce=0,Me=G.length;ce<Me;ce++){const P=G[ce],_e=n.get(P);t.bindTexture(3553,_e.__webglTexture),xe(3553,P,C),ye(N.__webglFramebuffer,y,P,36064+ce,3553),T(P,C)&&F(3553)}t.unbindTexture()}else{let G=3553;pe&&(a?G=v.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(G,j.__webglTexture),xe(G,v,C),ye(N.__webglFramebuffer,y,v,36064,G),T(v,C)&&F(G),t.unbindTexture()}y.depthBuffer&&Le(y)}function b(y){const v=L(y)||a,N=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let j=0,le=N.length;j<le;j++){const V=N[j];if(T(V,v)){const pe=y.isWebGLCubeRenderTarget?34067:3553,C=n.get(V).__webglTexture;t.bindTexture(pe,C),F(pe),t.unbindTexture()}}}function E(y){if(y.useRenderbuffer)if(a){const v=y.width,N=y.height;let j=16384;const le=[36064],V=y.stencilBuffer?33306:36096;y.depthBuffer&&le.push(V),y.ignoreDepthForMultisampleCopy||(y.depthBuffer&&(j|=256),y.stencilBuffer&&(j|=1024));const pe=n.get(y);t.bindFramebuffer(36008,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,pe.__webglFramebuffer),y.ignoreDepthForMultisampleCopy&&(i.invalidateFramebuffer(36008,[V]),i.invalidateFramebuffer(36009,[V])),i.blitFramebuffer(0,0,v,N,0,0,v,N,j,9728),i.invalidateFramebuffer(36008,le),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,pe.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function I(y){return a&&(y.useRenderbuffer||y.useRenderToTexture)?Math.min(h,y.samples):0}function B(y){const v=o.render.frame;g.get(y)!==v&&(g.set(y,v),y.update())}function U(y,v){const N=y.encoding,j=y.format,le=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===Oa||N!==In&&(N===Ke?a===!1?e.has("EXT_sRGB")===!0&&j===Ct?(y.format=Oa,y.minFilter=yt,y.generateMipmaps=!1):v=ci.sRGBToLinear(v):(j!==Ct||le!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",N)),v}let Y=!1,ae=!1;function re(y,v){y&&y.isWebGLRenderTarget&&(Y===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),Y=!0),y=y.texture),q(y,v)}function se(y,v){y&&y.isWebGLCubeRenderTarget&&(ae===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),ae=!0),y=y.texture),ee(y,v)}this.allocateTextureUnit=O,this.resetTextureUnits=H,this.setTexture2D=q,this.setTexture2DArray=J,this.setTexture3D=fe,this.setTextureCube=ee,this.rebindTextures=Ae,this.setupRenderTarget=te,this.updateRenderTargetMipmap=b,this.updateMultisampleRenderTarget=E,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=ye,this.safeSetTexture2D=re,this.safeSetTextureCube=se}function py(i,e,t){const n=t.isWebGL2;function r(s,o=null){let a;if(s===Dn)return 5121;if(s===sg)return 32819;if(s===og)return 32820;if(s===ng)return 5120;if(s===ig)return 5122;if(s===Rr)return 5123;if(s===rg)return 5124;if(s===Ds)return 5125;if(s===ai)return 5126;if(s===Di)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===ag)return 6406;if(s===Ct)return 6408;if(s===lg)return 6409;if(s===cg)return 6410;if(s===li)return 6402;if(s===Fi)return 34041;if(s===ug)return 6403;if(s===Oa)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===hg)return 36244;if(s===fg)return 33319;if(s===dg)return 33320;if(s===pg)return 36249;if(s===Ra||s===Pa||s===Da||s===Ia)if(o===Ke)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ra)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Pa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Da)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ia)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ra)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Pa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Da)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ia)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Su||s===Eu||s===Tu||s===Au)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Su)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Eu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Tu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Au)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===mg)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Cu||s===Lu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Cu)return o===Ke?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Lu)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ru||s===Pu||s===Du||s===Iu||s===Fu||s===Nu||s===Bu||s===Ou||s===zu||s===Uu||s===Hu||s===Vu||s===ku||s===Gu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Ru)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Pu)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Du)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Iu)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Fu)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Nu)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Bu)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ou)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===zu)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Uu)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Hu)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Vu)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ku)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Gu)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Wu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Wu)return o===Ke?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Ii)return n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:r}}class Yh extends Rt{constructor(e=[]){super();this.cameras=e}}Yh.prototype.isArrayCamera=!0;class Vr extends Xe{constructor(){super();this.type="Group"}}Vr.prototype.isGroup=!0;const my={type:"move"};class vl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(r=t.getPose(e.targetRaySpace,n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(my))),c&&e.hand){o=!0;for(const x of e.hand.values()){const M=t.getJointPose(x,n);if(c.joints[x.jointName]===void 0){const p=new Vr;p.matrixAutoUpdate=!1,p.visible=!1,c.joints[x.jointName]=p,c.add(p)}const m=c.joints[x.jointName];M!==null&&(m.matrix.fromArray(M.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=M.radius),m.visible=M!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}}class yl extends ut{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:li,u!==li&&u!==Fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===li&&(n=Rr),n===void 0&&u===Fi&&(n=Ii);super(null,r,s,o,a,l,u,n,c);this.image={width:e,height:t},this.magFilter=a!==void 0?a:lt,this.minFilter=l!==void 0?l:lt,this.flipY=!1,this.generateMipmaps=!1}}yl.prototype.isDepthTexture=!0;class gy extends Fn{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor";const l=e.extensions.has("WEBGL_multisampled_render_to_texture");let c=null,u=null,h=null,f=null,d=!1,g=null;const x=t.getContextAttributes();let M=null,m=null;const p=[],L=new Map,w=new Rt;w.layers.enable(1),w.viewport=new qe;const T=new Rt;T.layers.enable(2),T.viewport=new qe;const F=[w,T],R=new Yh;R.layers.enable(1),R.layers.enable(2);let K=null,he=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ie=p[ee];return ie===void 0&&(ie=new vl,p[ee]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(ee){let ie=p[ee];return ie===void 0&&(ie=new vl,p[ee]=ie),ie.getGripSpace()},this.getHand=function(ee){let ie=p[ee];return ie===void 0&&(ie=new vl,p[ee]=ie),ie.getHandSpace()};function ne(ee){const ie=L.get(ee.inputSource);ie&&ie.dispatchEvent({type:ee.type,data:ee.inputSource})}function _(){L.forEach(function(ee,ie){ee.disconnect(ie)}),L.clear(),K=null,he=null,e.setRenderTarget(M),f=null,h=null,u=null,r=null,m=null,fe.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",ne),r.addEventListener("selectstart",ne),r.addEventListener("selectend",ne),r.addEventListener("squeeze",ne),r.addEventListener("squeezestart",ne),r.addEventListener("squeezeend",ne),r.addEventListener("end",_),r.addEventListener("inputsourceschange",D),x.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ie={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:x.alpha,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:f}),m=new Ot(f.framebufferWidth,f.framebufferHeight,{format:Ct,type:Dn,encoding:e.outputEncoding})}else{d=x.antialias;let ie=null,de=null,xe=null;x.depth&&(xe=x.stencil?35056:33190,ie=x.stencil?Fi:li,de=x.stencil?Ii:Rr);const Se={colorFormat:e.outputEncoding===Ke?35907:32856,depthFormat:xe,scaleFactor:s};u=new XRWebGLBinding(r,t),h=u.createProjectionLayer(Se),r.updateRenderState({layers:[h]}),d?m=new Ga(h.textureWidth,h.textureHeight,{format:Ct,type:Dn,depthTexture:new yl(h.textureWidth,h.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:x.stencil,ignoreDepth:h.ignoreDepthValues,useRenderToTexture:l,encoding:e.outputEncoding}):m=new Ot(h.textureWidth,h.textureHeight,{format:Ct,type:Dn,depthTexture:new yl(h.textureWidth,h.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:x.stencil,ignoreDepth:h.ignoreDepthValues,encoding:e.outputEncoding})}m.isXRRenderTarget=!0,this.setFoveation(1),o=await r.requestReferenceSpace(a),fe.setContext(r),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function D(ee){const ie=r.inputSources;for(let de=0;de<p.length;de++)L.set(ie[de],p[de]);for(let de=0;de<ee.removed.length;de++){const xe=ee.removed[de],Se=L.get(xe);Se&&(Se.dispatchEvent({type:"disconnected",data:xe}),L.delete(xe))}for(let de=0;de<ee.added.length;de++){const xe=ee.added[de],Se=L.get(xe);Se&&Se.dispatchEvent({type:"connected",data:xe})}}const z=new A,W=new A;function H(ee,ie,de){z.setFromMatrixPosition(ie.matrixWorld),W.setFromMatrixPosition(de.matrixWorld);const xe=z.distanceTo(W),Se=ie.projectionMatrix.elements,Q=de.projectionMatrix.elements,Oe=Se[14]/(Se[10]-1),ye=Se[14]/(Se[10]+1),Te=(Se[9]+1)/Se[5],ve=(Se[9]-1)/Se[5],Le=(Se[8]-1)/Se[0],Ae=(Q[8]+1)/Q[0],te=Oe*Le,b=Oe*Ae,E=xe/(-Le+Ae),I=E*-Le;ie.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(I),ee.translateZ(E),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert();const B=Oe+E,U=ye+E,Y=te-I,ae=b+(xe-I),re=Te*ye/U*B,se=ve*ye/U*B;ee.projectionMatrix.makePerspective(Y,ae,re,se,B,U)}function O(ee,ie){ie===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ie.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;R.near=T.near=w.near=ee.near,R.far=T.far=w.far=ee.far,(K!==R.near||he!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),K=R.near,he=R.far);const ie=ee.parent,de=R.cameras;O(R,ie);for(let Se=0;Se<de.length;Se++)O(de[Se],ie);R.matrixWorld.decompose(R.position,R.quaternion,R.scale),ee.position.copy(R.position),ee.quaternion.copy(R.quaternion),ee.scale.copy(R.scale),ee.matrix.copy(R.matrix),ee.matrixWorld.copy(R.matrixWorld);const xe=ee.children;for(let Se=0,Q=xe.length;Se<Q;Se++)xe[Se].updateMatrixWorld(!0);de.length===2?H(R,w,T):R.projectionMatrix.copy(w.projectionMatrix)},this.getCamera=function(){return R},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(ee){h!==null&&(h.fixedFoveation=ee),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ee)};let q=null;function J(ee,ie){if(c=ie.getViewerPose(o),g=ie,c!==null){const xe=c.views;f!==null&&(e.setRenderTargetFramebuffer(m,f.framebuffer),e.setRenderTarget(m));let Se=!1;xe.length!==R.cameras.length&&(R.cameras.length=0,Se=!0);for(let Q=0;Q<xe.length;Q++){const Oe=xe[Q];let ye=null;if(f!==null)ye=f.getViewport(Oe);else{const ve=u.getViewSubImage(h,Oe);ye=ve.viewport,Q===0&&(e.setRenderTargetTextures(m,ve.colorTexture,h.ignoreDepthValues?void 0:ve.depthStencilTexture),e.setRenderTarget(m))}const Te=F[Q];Te.matrix.fromArray(Oe.transform.matrix),Te.projectionMatrix.fromArray(Oe.projectionMatrix),Te.viewport.set(ye.x,ye.y,ye.width,ye.height),Q===0&&R.matrix.copy(Te.matrix),Se===!0&&R.cameras.push(Te)}}const de=r.inputSources;for(let xe=0;xe<p.length;xe++){const Se=p[xe],Q=de[xe];Se.update(Q,ie,o)}q&&q(ee,ie),g=null}const fe=new hh;fe.setAnimationLoop(J),this.setAnimationLoop=function(ee){q=ee},this.dispose=function(){}}}function xy(i){function e(m,p){m.fogColor.value.copy(p.color),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function t(m,p,L,w,T){p.isMeshBasicMaterial?n(m,p):p.isMeshLambertMaterial?(n(m,p),l(m,p)):p.isMeshToonMaterial?(n(m,p),u(m,p)):p.isMeshPhongMaterial?(n(m,p),c(m,p)):p.isMeshStandardMaterial?(n(m,p),p.isMeshPhysicalMaterial?f(m,p,T):h(m,p)):p.isMeshMatcapMaterial?(n(m,p),d(m,p)):p.isMeshDepthMaterial?(n(m,p),g(m,p)):p.isMeshDistanceMaterial?(n(m,p),x(m,p)):p.isMeshNormalMaterial?(n(m,p),M(m,p)):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&s(m,p)):p.isPointsMaterial?o(m,p,L,w):p.isSpriteMaterial?a(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function n(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const L=i.get(p).envMap;L&&(m.envMap.value=L,m.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let w;p.map?w=p.map:p.specularMap?w=p.specularMap:p.displacementMap?w=p.displacementMap:p.normalMap?w=p.normalMap:p.bumpMap?w=p.bumpMap:p.roughnessMap?w=p.roughnessMap:p.metalnessMap?w=p.metalnessMap:p.alphaMap?w=p.alphaMap:p.emissiveMap?w=p.emissiveMap:p.clearcoatMap?w=p.clearcoatMap:p.clearcoatNormalMap?w=p.clearcoatNormalMap:p.clearcoatRoughnessMap?w=p.clearcoatRoughnessMap:p.specularIntensityMap?w=p.specularIntensityMap:p.specularColorMap?w=p.specularColorMap:p.transmissionMap?w=p.transmissionMap:p.thicknessMap?w=p.thicknessMap:p.sheenColorMap?w=p.sheenColorMap:p.sheenRoughnessMap&&(w=p.sheenRoughnessMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uvTransform.value.copy(w.matrix));let T;p.aoMap?T=p.aoMap:p.lightMap&&(T=p.lightMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),m.uv2Transform.value.copy(T.matrix))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function s(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function o(m,p,L,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*L,m.scale.value=w*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let T;p.map?T=p.map:p.alphaMap&&(T=p.alphaMap),T!==void 0&&(T.matrixAutoUpdate===!0&&T.updateMatrix(),m.uvTransform.value.copy(T.matrix))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let L;p.map?L=p.map:p.alphaMap&&(L=p.alphaMap),L!==void 0&&(L.matrixAutoUpdate===!0&&L.updateMatrix(),m.uvTransform.value.copy(L.matrix))}function l(m,p){p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===st&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===st&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===st&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===st&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function h(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===st&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===st&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),i.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,L){h(m,p),m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===st&&m.clearcoatNormalScale.value.negate())),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=L.texture,m.transmissionSamplerSize.value.set(L.width,L.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function d(m,p){p.matcap&&(m.matcap.value=p.matcap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===st&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===st&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function g(m,p){p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function x(m,p){p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}function M(m,p){p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===st&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===st&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function _y(){const i=Nr("canvas");return i.style.display="block",i}function Ye(i={}){const e=i.canvas!==void 0?i.canvas:_y(),t=i.context!==void 0?i.context:null,n=i.alpha!==void 0?i.alpha:!1,r=i.depth!==void 0?i.depth:!0,s=i.stencil!==void 0?i.stencil:!0,o=i.antialias!==void 0?i.antialias:!1,a=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,l=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,c=i.powerPreference!==void 0?i.powerPreference:"default",u=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let h=null,f=null;const d=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=In,this.physicallyCorrectLights=!1,this.toneMapping=Pn,this.toneMappingExposure=1;const x=this;let M=!1,m=0,p=0,L=null,w=-1,T=null;const F=new qe,R=new qe;let K=null,he=e.width,ne=e.height,_=1,D=null,z=null;const W=new qe(0,0,he,ne),H=new qe(0,0,he,ne);let O=!1;const q=new ro;let J=!1,fe=!1,ee=null;const ie=new Ce,de=new A,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Se(){return L===null?_:1}let Q=t;function Oe(S,k){for(let $=0;$<S.length;$++){const X=S[$],oe=e.getContext(X,k);if(oe!==null)return oe}return null}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wa}`),e.addEventListener("webglcontextlost",Me,!1),e.addEventListener("webglcontextrestored",P,!1),Q===null){const k=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&k.shift(),Q=Oe(k,S),Q===null)throw Oe(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Q.getShaderPrecisionFormat===void 0&&(Q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ye,Te,ve,Le,Ae,te,b,E,I,B,U,Y,ae,re,se,y,v,N,j,le,V,pe,C;function G(){ye=new O0(Q),Te=new P0(Q,ye,i),ye.init(Te),pe=new py(Q,ye,Te),ve=new fy(Q,ye,Te),Le=new H0(Q),Ae=new ty,te=new dy(Q,ye,ve,Ae,Te,pe,Le),b=new I0(x),E=new B0(x),I=new tx(Q,Te),C=new L0(Q,ye,I,Te),B=new z0(Q,I,Le,C),U=new W0(Q,B,I,Le),j=new G0(Q,Te,te),y=new D0(Ae),Y=new ey(x,b,E,ye,Te,C,y),ae=new xy(Ae),re=new iy,se=new cy(ye,Te),N=new C0(x,b,ve,U,n,a),v=new jh(x,U,Te),le=new R0(Q,ye,Le,Te),V=new U0(Q,ye,Le,Te),Le.programs=Y.programs,x.capabilities=Te,x.extensions=ye,x.properties=Ae,x.renderLists=re,x.shadowMap=v,x.state=ve,x.info=Le}G();const ce=new gy(x,Q);this.xr=ce,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const S=ye.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ye.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return _},this.setPixelRatio=function(S){S!==void 0&&(_=S,this.setSize(he,ne,!1))},this.getSize=function(S){return S.set(he,ne)},this.setSize=function(S,k,$){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}he=S,ne=k,e.width=Math.floor(S*_),e.height=Math.floor(k*_),$!==!1&&(e.style.width=S+"px",e.style.height=k+"px"),this.setViewport(0,0,S,k)},this.getDrawingBufferSize=function(S){return S.set(he*_,ne*_).floor()},this.setDrawingBufferSize=function(S,k,$){he=S,ne=k,_=$,e.width=Math.floor(S*$),e.height=Math.floor(k*$),this.setViewport(0,0,S,k)},this.getCurrentViewport=function(S){return S.copy(F)},this.getViewport=function(S){return S.copy(W)},this.setViewport=function(S,k,$,X){S.isVector4?W.set(S.x,S.y,S.z,S.w):W.set(S,k,$,X),ve.viewport(F.copy(W).multiplyScalar(_).floor())},this.getScissor=function(S){return S.copy(H)},this.setScissor=function(S,k,$,X){S.isVector4?H.set(S.x,S.y,S.z,S.w):H.set(S,k,$,X),ve.scissor(R.copy(H).multiplyScalar(_).floor())},this.getScissorTest=function(){return O},this.setScissorTest=function(S){ve.setScissorTest(O=S)},this.setOpaqueSort=function(S){D=S},this.setTransparentSort=function(S){z=S},this.getClearColor=function(S){return S.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor.apply(N,arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha.apply(N,arguments)},this.clear=function(S,k,$){let X=0;(S===void 0||S)&&(X|=16384),(k===void 0||k)&&(X|=256),($===void 0||$)&&(X|=1024),Q.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Me,!1),e.removeEventListener("webglcontextrestored",P,!1),re.dispose(),se.dispose(),Ae.dispose(),b.dispose(),E.dispose(),U.dispose(),C.dispose(),Y.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",ze),ce.removeEventListener("sessionend",et),ee&&(ee.dispose(),ee=null),It.stop()};function Me(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const S=Le.autoReset,k=v.enabled,$=v.autoUpdate,X=v.needsUpdate,oe=v.type;G(),Le.autoReset=S,v.enabled=k,v.autoUpdate=$,v.needsUpdate=X,v.type=oe}function _e(S){const k=S.target;k.removeEventListener("dispose",_e),ge(k)}function ge(S){be(S),Ae.remove(S)}function be(S){const k=Ae.get(S).programs;k!==void 0&&(k.forEach(function($){Y.releaseProgram($)}),S.isShaderMaterial&&Y.releaseShaderCache(S))}this.renderBufferDirect=function(S,k,$,X,oe,Re){k===null&&(k=xe);const Pe=oe.isMesh&&oe.matrixWorld.determinant()<0,Ie=Xf(S,k,$,X,oe);ve.setMaterial(X,Pe);let De=$.index;const Ge=$.attributes.position;if(De===null){if(Ge===void 0||Ge.count===0)return}else if(De.count===0)return;let Ue=1;X.wireframe===!0&&(De=B.getWireframeAttribute($),Ue=2),C.setup(oe,X,Ie,$,De);let He,it=le;De!==null&&(He=I.get(De),it=V,it.setIndex(He));const Zn=De!==null?De.count:Ge.count,pi=$.drawRange.start*Ue,ke=$.drawRange.count*Ue,$t=Re!==null?Re.start*Ue:0,at=Re!==null?Re.count*Ue:1/0,Qt=Math.max(pi,$t),rs=Math.min(Zn,pi+ke,$t+at)-1,en=Math.max(0,rs-Qt+1);if(en!==0){if(oe.isMesh)X.wireframe===!0?(ve.setLineWidth(X.wireframeLinewidth*Se()),it.setMode(1)):it.setMode(4);else if(oe.isLine){let fn=X.linewidth;fn===void 0&&(fn=1),ve.setLineWidth(fn*Se()),oe.isLineSegments?it.setMode(1):oe.isLineLoop?it.setMode(2):it.setMode(3)}else oe.isPoints?it.setMode(0):oe.isSprite&&it.setMode(4);if(oe.isInstancedMesh)it.renderInstances(Qt,en,oe.count);else if($.isInstancedBufferGeometry){const fn=Math.min($.instanceCount,$._maxInstanceCount);it.renderInstances(Qt,en,fn)}else it.render(Qt,en)}},this.compile=function(S,k){f=se.get(S),f.init(),g.push(f),S.traverseVisible(function($){$.isLight&&$.layers.test(k.layers)&&(f.pushLight($),$.castShadow&&f.pushShadow($))}),f.setupLights(x.physicallyCorrectLights),S.traverse(function($){const X=$.material;if(X)if(Array.isArray(X))for(let oe=0;oe<X.length;oe++){const Re=X[oe];Co(Re,S,$)}else Co(X,S,$)}),g.pop(),f=null};let Z=null;function we(S){Z&&Z(S)}function ze(){It.stop()}function et(){It.start()}const It=new hh;It.setAnimationLoop(we),typeof window!="undefined"&&It.setContext(window),this.setAnimationLoop=function(S){Z=S,ce.setAnimationLoop(S),S===null?It.stop():It.start()},ce.addEventListener("sessionstart",ze),ce.addEventListener("sessionend",et),this.render=function(S,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;S.autoUpdate===!0&&S.updateMatrixWorld(),k.parent===null&&k.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(k),k=ce.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,k,L),f=se.get(S,g.length),f.init(),g.push(f),ie.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),q.setFromProjectionMatrix(ie),fe=this.localClippingEnabled,J=y.init(this.clippingPlanes,fe,k),h=re.get(S,d.length),h.init(),d.push(h),nt(S,k,0,x.sortObjects),h.finish(),x.sortObjects===!0&&h.sort(D,z),J===!0&&y.beginShadows();const $=f.state.shadowsArray;if(v.render($,S,k),J===!0&&y.endShadows(),this.info.autoReset===!0&&this.info.reset(),N.render(h,S),f.setupLights(x.physicallyCorrectLights),k.isArrayCamera){const X=k.cameras;for(let oe=0,Re=X.length;oe<Re;oe++){const Pe=X[oe];Kt(h,S,Pe,Pe.viewport)}}else Kt(h,S,k);L!==null&&(te.updateMultisampleRenderTarget(L),te.updateRenderTargetMipmap(L)),S.isScene===!0&&S.onAfterRender(x,S,k),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1),C.resetDefaultState(),w=-1,T=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,d.pop(),d.length>0?h=d[d.length-1]:h=null};function nt(S,k,$,X){if(S.visible===!1)return;if(S.layers.test(k.layers)){if(S.isGroup)$=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(k);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||q.intersectsSprite(S)){X&&de.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ie);const Pe=U.update(S),Ie=S.material;Ie.visible&&h.push(S,Pe,Ie,$,de.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==Le.render.frame&&(S.skeleton.update(),S.skeleton.frame=Le.render.frame),!S.frustumCulled||q.intersectsObject(S))){X&&de.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ie);const Pe=U.update(S),Ie=S.material;if(Array.isArray(Ie)){const De=Pe.groups;for(let Ge=0,Ue=De.length;Ge<Ue;Ge++){const He=De[Ge],it=Ie[He.materialIndex];it&&it.visible&&h.push(S,Pe,it,$,de.z,He)}}else Ie.visible&&h.push(S,Pe,Ie,$,de.z,null)}}const Re=S.children;for(let Pe=0,Ie=Re.length;Pe<Ie;Pe++)nt(Re[Pe],k,$,X)}function Kt(S,k,$,X){const oe=S.opaque,Re=S.transmissive,Pe=S.transparent;f.setupLightsView($),Re.length>0&&hn(oe,k,$),X&&ve.viewport(F.copy(X)),oe.length>0&&is(oe,k,$),Re.length>0&&is(Re,k,$),Pe.length>0&&is(Pe,k,$)}function hn(S,k,$){if(ee===null){const Pe=o===!0&&Te.isWebGL2===!0?Ga:Ot;ee=new Pe(1024,1024,{generateMipmaps:!0,type:pe.convert(Di)!==null?Di:Dn,minFilter:Ps,magFilter:lt,wrapS:Bt,wrapT:Bt,useRenderToTexture:ye.has("WEBGL_multisampled_render_to_texture")})}const X=x.getRenderTarget();x.setRenderTarget(ee),x.clear();const oe=x.toneMapping;x.toneMapping=Pn,is(S,k,$),x.toneMapping=oe,te.updateMultisampleRenderTarget(ee),te.updateRenderTargetMipmap(ee),x.setRenderTarget(X)}function is(S,k,$){const X=k.isScene===!0?k.overrideMaterial:null;for(let oe=0,Re=S.length;oe<Re;oe++){const Pe=S[oe],Ie=Pe.object,De=Pe.geometry,Ge=X===null?Pe.material:X,Ue=Pe.group;Ie.layers.test($.layers)&&qf(Ie,k,$,De,Ge,Ue)}}function qf(S,k,$,X,oe,Re){S.onBeforeRender(x,k,$,X,oe,Re),S.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),oe.onBeforeRender(x,k,$,X,S,Re),oe.transparent===!0&&oe.side===Ri?(oe.side=st,oe.needsUpdate=!0,x.renderBufferDirect($,k,X,oe,S,Re),oe.side=Li,oe.needsUpdate=!0,x.renderBufferDirect($,k,X,oe,S,Re),oe.side=Ri):x.renderBufferDirect($,k,X,oe,S,Re),S.onAfterRender(x,k,$,X,oe,Re)}function Co(S,k,$){k.isScene!==!0&&(k=xe);const X=Ae.get(S),oe=f.state.lights,Re=f.state.shadowsArray,Pe=oe.state.version,Ie=Y.getParameters(S,oe.state,Re,k,$),De=Y.getProgramCacheKey(Ie);let Ge=X.programs;X.environment=S.isMeshStandardMaterial?k.environment:null,X.fog=k.fog,X.envMap=(S.isMeshStandardMaterial?E:b).get(S.envMap||X.environment),Ge===void 0&&(S.addEventListener("dispose",_e),Ge=new Map,X.programs=Ge);let Ue=Ge.get(De);if(Ue!==void 0){if(X.currentProgram===Ue&&X.lightsStateVersion===Pe)return ql(S,Ie),Ue}else Ie.uniforms=Y.getUniforms(S),S.onBuild($,Ie,x),S.onBeforeCompile(Ie,x),Ue=Y.acquireProgram(Ie,De),Ge.set(De,Ue),X.uniforms=Ie.uniforms;const He=X.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(He.clippingPlanes=y.uniform),ql(S,Ie),X.needsLights=Yf(S),X.lightsStateVersion=Pe,X.needsLights&&(He.ambientLightColor.value=oe.state.ambient,He.lightProbe.value=oe.state.probe,He.directionalLights.value=oe.state.directional,He.directionalLightShadows.value=oe.state.directionalShadow,He.spotLights.value=oe.state.spot,He.spotLightShadows.value=oe.state.spotShadow,He.rectAreaLights.value=oe.state.rectArea,He.ltc_1.value=oe.state.rectAreaLTC1,He.ltc_2.value=oe.state.rectAreaLTC2,He.pointLights.value=oe.state.point,He.pointLightShadows.value=oe.state.pointShadow,He.hemisphereLights.value=oe.state.hemi,He.directionalShadowMap.value=oe.state.directionalShadowMap,He.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,He.spotShadowMap.value=oe.state.spotShadowMap,He.spotShadowMatrix.value=oe.state.spotShadowMatrix,He.pointShadowMap.value=oe.state.pointShadowMap,He.pointShadowMatrix.value=oe.state.pointShadowMatrix);const it=Ue.getUniforms(),Zn=Gn.seqWithValue(it.seq,He);return X.currentProgram=Ue,X.uniformsList=Zn,Ue}function ql(S,k){const $=Ae.get(S);$.outputEncoding=k.outputEncoding,$.instancing=k.instancing,$.skinning=k.skinning,$.morphTargets=k.morphTargets,$.morphNormals=k.morphNormals,$.morphTargetsCount=k.morphTargetsCount,$.numClippingPlanes=k.numClippingPlanes,$.numIntersection=k.numClipIntersection,$.vertexAlphas=k.vertexAlphas,$.vertexTangents=k.vertexTangents,$.toneMapping=k.toneMapping}function Xf(S,k,$,X,oe){k.isScene!==!0&&(k=xe),te.resetTextureUnits();const Re=k.fog,Pe=X.isMeshStandardMaterial?k.environment:null,Ie=L===null?x.outputEncoding:L.isXRRenderTarget===!0?L.texture.encoding:In,De=(X.isMeshStandardMaterial?E:b).get(X.envMap||Pe),Ge=X.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ue=!!X.normalMap&&!!$.attributes.tangent,He=!!$.morphAttributes.position,it=!!$.morphAttributes.normal,Zn=$.morphAttributes.position?$.morphAttributes.position.length:0,pi=X.toneMapped?x.toneMapping:Pn,ke=Ae.get(X),$t=f.state.lights;if(J===!0&&(fe===!0||S!==T)){const Wt=S===T&&X.id===w;y.setState(X,S,Wt)}let at=!1;X.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==$t.state.version||ke.outputEncoding!==Ie||oe.isInstancedMesh&&ke.instancing===!1||!oe.isInstancedMesh&&ke.instancing===!0||oe.isSkinnedMesh&&ke.skinning===!1||!oe.isSkinnedMesh&&ke.skinning===!0||ke.envMap!==De||X.fog&&ke.fog!==Re||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==y.numPlanes||ke.numIntersection!==y.numIntersection)||ke.vertexAlphas!==Ge||ke.vertexTangents!==Ue||ke.morphTargets!==He||ke.morphNormals!==it||ke.toneMapping!==pi||Te.isWebGL2===!0&&ke.morphTargetsCount!==Zn)&&(at=!0):(at=!0,ke.__version=X.version);let Qt=ke.currentProgram;at===!0&&(Qt=Co(X,k,oe));let rs=!1,en=!1,fn=!1;const gt=Qt.getUniforms(),gr=ke.uniforms;if(ve.useProgram(Qt.program)&&(rs=!0,en=!0,fn=!0),X.id!==w&&(w=X.id,en=!0),rs||T!==S){if(gt.setValue(Q,"projectionMatrix",S.projectionMatrix),Te.logarithmicDepthBuffer&&gt.setValue(Q,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),T!==S&&(T=S,en=!0,fn=!0),X.isShaderMaterial||X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshStandardMaterial||X.envMap){const Wt=gt.map.cameraPosition;Wt!==void 0&&Wt.setValue(Q,de.setFromMatrixPosition(S.matrixWorld))}(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&gt.setValue(Q,"isOrthographic",S.isOrthographicCamera===!0),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial||X.isShadowMaterial||oe.isSkinnedMesh)&&gt.setValue(Q,"viewMatrix",S.matrixWorldInverse)}if(oe.isSkinnedMesh){gt.setOptional(Q,oe,"bindMatrix"),gt.setOptional(Q,oe,"bindMatrixInverse");const Wt=oe.skeleton;Wt&&(Te.floatVertexTextures?(Wt.boneTexture===null&&Wt.computeBoneTexture(),gt.setValue(Q,"boneTexture",Wt.boneTexture,te),gt.setValue(Q,"boneTextureSize",Wt.boneTextureSize)):gt.setOptional(Q,Wt,"boneMatrices"))}return!!$&&($.morphAttributes.position!==void 0||$.morphAttributes.normal!==void 0)&&j.update(oe,$,X,Qt),(en||ke.receiveShadow!==oe.receiveShadow)&&(ke.receiveShadow=oe.receiveShadow,gt.setValue(Q,"receiveShadow",oe.receiveShadow)),en&&(gt.setValue(Q,"toneMappingExposure",x.toneMappingExposure),ke.needsLights&&jf(gr,fn),Re&&X.fog&&ae.refreshFogUniforms(gr,Re),ae.refreshMaterialUniforms(gr,X,_,ne,ee),Gn.upload(Q,ke.uniformsList,gr,te)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Gn.upload(Q,ke.uniformsList,gr,te),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&gt.setValue(Q,"center",oe.center),gt.setValue(Q,"modelViewMatrix",oe.modelViewMatrix),gt.setValue(Q,"normalMatrix",oe.normalMatrix),gt.setValue(Q,"modelMatrix",oe.matrixWorld),Qt}function jf(S,k){S.ambientLightColor.needsUpdate=k,S.lightProbe.needsUpdate=k,S.directionalLights.needsUpdate=k,S.directionalLightShadows.needsUpdate=k,S.pointLights.needsUpdate=k,S.pointLightShadows.needsUpdate=k,S.spotLights.needsUpdate=k,S.spotLightShadows.needsUpdate=k,S.rectAreaLights.needsUpdate=k,S.hemisphereLights.needsUpdate=k}function Yf(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return p},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(S,k,$){Ae.get(S.texture).__webglTexture=k,Ae.get(S.depthTexture).__webglTexture=$;const X=Ae.get(S);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=$===void 0,X.__autoAllocateDepthBuffer||S.useRenderToTexture&&(console.warn("render-to-texture extension was disabled because an external texture was provided"),S.useRenderToTexture=!1,S.useRenderbuffer=!0))},this.setRenderTargetFramebuffer=function(S,k){const $=Ae.get(S);$.__webglFramebuffer=k,$.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(S,k=0,$=0){L=S,m=k,p=$;let X=!0;if(S){const De=Ae.get(S);De.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(36160,null),X=!1):De.__webglFramebuffer===void 0?te.setupRenderTarget(S):De.__hasExternalTextures&&te.rebindTextures(S,Ae.get(S.texture).__webglTexture,Ae.get(S.depthTexture).__webglTexture)}let oe=null,Re=!1,Pe=!1;if(S){const De=S.texture;(De.isDataTexture3D||De.isDataTexture2DArray)&&(Pe=!0);const Ge=Ae.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(oe=Ge[k],Re=!0):S.useRenderbuffer?oe=Ae.get(S).__webglMultisampledFramebuffer:oe=Ge,F.copy(S.viewport),R.copy(S.scissor),K=S.scissorTest}else F.copy(W).multiplyScalar(_).floor(),R.copy(H).multiplyScalar(_).floor(),K=O;if(ve.bindFramebuffer(36160,oe)&&Te.drawBuffers&&X&&ve.drawBuffers(S,oe),ve.viewport(F),ve.scissor(R),ve.setScissorTest(K),Re){const De=Ae.get(S.texture);Q.framebufferTexture2D(36160,36064,34069+k,De.__webglTexture,$)}else if(Pe){const De=Ae.get(S.texture),Ge=k||0;Q.framebufferTextureLayer(36160,36064,De.__webglTexture,$||0,Ge)}w=-1},this.readRenderTargetPixels=function(S,k,$,X,oe,Re,Pe){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Ae.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ie=Ie[Pe]),Ie){ve.bindFramebuffer(36160,Ie);try{const De=S.texture,Ge=De.format,Ue=De.type;if(Ge!==Ct&&pe.convert(Ge)!==Q.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=Ue===Di&&(ye.has("EXT_color_buffer_half_float")||Te.isWebGL2&&ye.has("EXT_color_buffer_float"));if(Ue!==Dn&&pe.convert(Ue)!==Q.getParameter(35738)&&!(Ue===ai&&(Te.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q.checkFramebufferStatus(36160)===36053?k>=0&&k<=S.width-X&&$>=0&&$<=S.height-oe&&Q.readPixels(k,$,X,oe,pe.convert(Ge),pe.convert(Ue),Re):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const De=L!==null?Ae.get(L).__webglFramebuffer:null;ve.bindFramebuffer(36160,De)}}},this.copyFramebufferToTexture=function(S,k,$=0){if(k.isFramebufferTexture!==!0){console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");return}const X=Math.pow(2,-$),oe=Math.floor(k.image.width*X),Re=Math.floor(k.image.height*X);te.setTexture2D(k,0),Q.copyTexSubImage2D(3553,$,0,0,S.x,S.y,oe,Re),ve.unbindTexture()},this.copyTextureToTexture=function(S,k,$,X=0){const oe=k.image.width,Re=k.image.height,Pe=pe.convert($.format),Ie=pe.convert($.type);te.setTexture2D($,0),Q.pixelStorei(37440,$.flipY),Q.pixelStorei(37441,$.premultiplyAlpha),Q.pixelStorei(3317,$.unpackAlignment),k.isDataTexture?Q.texSubImage2D(3553,X,S.x,S.y,oe,Re,Pe,Ie,k.image.data):k.isCompressedTexture?Q.compressedTexSubImage2D(3553,X,S.x,S.y,k.mipmaps[0].width,k.mipmaps[0].height,Pe,k.mipmaps[0].data):Q.texSubImage2D(3553,X,S.x,S.y,Pe,Ie,k.image),X===0&&$.generateMipmaps&&Q.generateMipmap(3553),ve.unbindTexture()},this.copyTextureToTexture3D=function(S,k,$,X,oe=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Re=S.max.x-S.min.x+1,Pe=S.max.y-S.min.y+1,Ie=S.max.z-S.min.z+1,De=pe.convert(X.format),Ge=pe.convert(X.type);let Ue;if(X.isDataTexture3D)te.setTexture3D(X,0),Ue=32879;else if(X.isDataTexture2DArray)te.setTexture2DArray(X,0),Ue=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Q.pixelStorei(37440,X.flipY),Q.pixelStorei(37441,X.premultiplyAlpha),Q.pixelStorei(3317,X.unpackAlignment);const He=Q.getParameter(3314),it=Q.getParameter(32878),Zn=Q.getParameter(3316),pi=Q.getParameter(3315),ke=Q.getParameter(32877),$t=$.isCompressedTexture?$.mipmaps[0]:$.image;Q.pixelStorei(3314,$t.width),Q.pixelStorei(32878,$t.height),Q.pixelStorei(3316,S.min.x),Q.pixelStorei(3315,S.min.y),Q.pixelStorei(32877,S.min.z),$.isDataTexture||$.isDataTexture3D?Q.texSubImage3D(Ue,oe,k.x,k.y,k.z,Re,Pe,Ie,De,Ge,$t.data):$.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Q.compressedTexSubImage3D(Ue,oe,k.x,k.y,k.z,Re,Pe,Ie,De,$t.data)):Q.texSubImage3D(Ue,oe,k.x,k.y,k.z,Re,Pe,Ie,De,Ge,$t),Q.pixelStorei(3314,He),Q.pixelStorei(32878,it),Q.pixelStorei(3316,Zn),Q.pixelStorei(3315,pi),Q.pixelStorei(32877,ke),oe===0&&X.generateMipmaps&&Q.generateMipmap(Ue),ve.unbindTexture()},this.initTexture=function(S){te.setTexture2D(S,0),ve.unbindTexture()},this.resetState=function(){m=0,p=0,L=null,ve.reset(),C.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Ye.prototype.isWebGLRenderer=!0;class vy extends Ye{}vy.prototype.isWebGL1Renderer=!0;class Zh extends Xe{constructor(){super();this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}Zh.prototype.isScene=!0;class kr{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Pr,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Xt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}kr.prototype.isInterleavedBuffer=!0;const rt=new A;class Gr{constructor(e,t,n,r=!1){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)rt.x=this.getX(t),rt.y=this.getY(t),rt.z=this.getZ(t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rt.x=this.getX(t),rt.y=this.getY(t),rt.z=this.getZ(t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rt.x=this.getX(t),rt.y=this.getY(t),rt.z=this.getZ(t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Gr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}Gr.prototype.isInterleavedBufferAttribute=!0;class Jh extends bt{constructor(e){super();this.type="SpriteMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}Jh.prototype.isSpriteMaterial=!0;let ar;const Wr=new A,lr=new A,cr=new A,ur=new ue,qr=new ue,Kh=new Ce,co=new A,Xr=new A,uo=new A,$h=new ue,Ml=new ue,Qh=new ue;class yy extends Xe{constructor(e){super();if(this.type="Sprite",ar===void 0){ar=new $e;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new kr(t,5);ar.setIndex([0,1,2,0,2,3]),ar.setAttribute("position",new Gr(n,3,0,!1)),ar.setAttribute("uv",new Gr(n,2,3,!1))}this.geometry=ar,this.material=e!==void 0?e:new Jh,this.center=new ue(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),lr.setFromMatrixScale(this.matrixWorld),Kh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),cr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&lr.multiplyScalar(-cr.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const o=this.center;ho(co.set(-.5,-.5,0),cr,o,lr,r,s),ho(Xr.set(.5,-.5,0),cr,o,lr,r,s),ho(uo.set(.5,.5,0),cr,o,lr,r,s),$h.set(0,0),Ml.set(1,0),Qh.set(1,1);let a=e.ray.intersectTriangle(co,Xr,uo,!1,Wr);if(a===null&&(ho(Xr.set(-.5,.5,0),cr,o,lr,r,s),Ml.set(0,1),a=e.ray.intersectTriangle(co,uo,Xr,!1,Wr),a===null))return;const l=e.ray.origin.distanceTo(Wr);l<e.near||l>e.far||t.push({distance:l,point:Wr.clone(),uv:ot.getUV(Wr,co,Xr,uo,$h,Ml,Qh,new ue),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}yy.prototype.isSprite=!0;function ho(i,e,t,n,r,s){ur.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(qr.x=s*ur.x-r*ur.y,qr.y=r*ur.x+s*ur.y):qr.copy(ur),i.copy(e),i.x+=qr.x,i.y+=qr.y,i.applyMatrix4(Kh)}const ef=new A,tf=new qe,nf=new qe,My=new A,rf=new Ce;class sf extends wt{constructor(e,t){super(e,t);this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ce,this.bindMatrixInverse=new Ce}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new qe,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,r=this.geometry;tf.fromBufferAttribute(r.attributes.skinIndex,e),nf.fromBufferAttribute(r.attributes.skinWeight,e),ef.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=nf.getComponent(s);if(o!==0){const a=tf.getComponent(s);rf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(My.copy(ef).applyMatrix4(rf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}sf.prototype.isSkinnedMesh=!0;class by extends Xe{constructor(){super();this.type="Bone"}}by.prototype.isBone=!0;class wy extends ut{constructor(e=null,t=1,n=1,r,s,o,a,l,c=lt,u=lt,h,f){super(null,o,a,l,c,u,r,s,h,f);this.image={data:e,width:t,height:n},this.magFilter=c,this.minFilter=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}wy.prototype.isDataTexture=!0;class bl extends ct{constructor(e,t,n,r=1){typeof n=="number"&&(r=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."));super(e,t,n);this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}bl.prototype.isInstancedBufferAttribute=!0;const of=new Ce,af=new Ce,fo=[],jr=new wt;class Sy extends wt{constructor(e,t,n){super(e,t);this.instanceMatrix=new bl(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,r=this.count;if(jr.geometry=this.geometry,jr.material=this.material,jr.material!==void 0)for(let s=0;s<r;s++){this.getMatrixAt(s,of),af.multiplyMatrices(n,of),jr.matrixWorld=af,jr.raycast(e,fo);for(let o=0,a=fo.length;o<a;o++){const l=fo[o];l.instanceId=s,l.object=this,t.push(l)}fo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new bl(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}Sy.prototype.isInstancedMesh=!0;class Yr extends bt{constructor(e){super();this.type="LineBasicMaterial",this.color=new Ee(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this}}Yr.prototype.isLineBasicMaterial=!0;const lf=new A,cf=new A,uf=new Ce,wl=new Wi,po=new Gi;class Sl extends Xe{constructor(e=new $e,t=new Yr){super();this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)lf.fromBufferAttribute(t,r-1),cf.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=lf.distanceTo(cf);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(r),po.radius+=s,e.ray.intersectsSphere(po)===!1)return;uf.copy(r).invert(),wl.copy(e.ray).applyMatrix4(uf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new A,u=new A,h=new A,f=new A,d=this.isLineSegments?2:1;if(n.isBufferGeometry){const g=n.index,M=n.attributes.position;if(g!==null){const m=Math.max(0,o.start),p=Math.min(g.count,o.start+o.count);for(let L=m,w=p-1;L<w;L+=d){const T=g.getX(L),F=g.getX(L+1);if(c.fromBufferAttribute(M,T),u.fromBufferAttribute(M,F),wl.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const K=e.ray.origin.distanceTo(f);K<e.near||K>e.far||t.push({distance:K,point:h.clone().applyMatrix4(this.matrixWorld),index:L,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),p=Math.min(M.count,o.start+o.count);for(let L=m,w=p-1;L<w;L+=d){if(c.fromBufferAttribute(M,L),u.fromBufferAttribute(M,L+1),wl.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const F=e.ray.origin.distanceTo(f);F<e.near||F>e.far||t.push({distance:F,point:h.clone().applyMatrix4(this.matrixWorld),index:L,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Sl.prototype.isLine=!0;const hf=new A,ff=new A;class El extends Sl{constructor(e,t){super(e,t);this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)hf.fromBufferAttribute(t,r),ff.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+hf.distanceTo(ff);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}El.prototype.isLineSegments=!0;class Ey extends Sl{constructor(e,t){super(e,t);this.type="LineLoop"}}Ey.prototype.isLineLoop=!0;class df extends bt{constructor(e){super();this.type="PointsMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}}df.prototype.isPointsMaterial=!0;const pf=new Ce,Tl=new Wi,mo=new Gi,go=new A;class Ty extends Xe{constructor(e=new $e,t=new df){super();this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(r),mo.radius+=s,e.ray.intersectsSphere(mo)===!1)return;pf.copy(r).invert(),Tl.copy(e.ray).applyMatrix4(pf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a;if(n.isBufferGeometry){const c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,x=d;g<x;g++){const M=c.getX(g);go.fromBufferAttribute(h,M),mf(go,M,l,r,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,x=d;g<x;g++)go.fromBufferAttribute(h,g),mf(go,g,l,r,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Ty.prototype.isPoints=!0;function mf(i,e,t,n,r,s,o){const a=Tl.distanceSqToPoint(i);if(a<t){const l=new A;Tl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Ay extends ut{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c);this.minFilter=o!==void 0?o:yt,this.magFilter=s!==void 0?s:yt,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}Ay.prototype.isVideoTexture=!0;class Cy extends ut{constructor(e,t,n){super({width:e,height:t});this.format=n,this.magFilter=lt,this.minFilter=lt,this.generateMipmaps=!1,this.needsUpdate=!0}}Cy.prototype.isFramebufferTexture=!0;class Ly extends ut{constructor(e,t,n,r,s,o,a,l,c,u,h,f){super(null,o,a,l,c,u,r,s,h,f);this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}Ly.prototype.isCompressedTexture=!0;class Ry extends ut{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c);this.needsUpdate=!0}}Ry.prototype.isCanvasTexture=!0;new A;new A;new A;new ot;class Gt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const u=n[r],f=n[r+1]-u,d=(o-u)/f;return(r+d)/(s-1)}getTangent(e,t){const n=1e-4;let r=e-n,s=e+n;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new ue:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new A,r=[],s=[],o=[],a=new A,l=new Ce;for(let d=0;d<=e;d++){const g=d/e;r[d]=this.getTangentAt(g,new A)}s[0]=new A,o[0]=new A;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Lt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(Lt(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],d*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class xo extends Gt{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super();this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new ue,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}xo.prototype.isEllipseCurve=!0;class gf extends xo{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o);this.type="ArcCurve"}}gf.prototype.isArcCurve=!0;function Al(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,r(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return i+e*s+t*o+n*a}}}const _o=new A,Cl=new Al,Ll=new Al,Rl=new Al;class xf extends Gt{constructor(e=[],t=!1,n="centripetal",r=.5){super();this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new A){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(_o.subVectors(r[0],r[1]).add(r[0]),c=_o);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(_o.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=_o),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),x=Math.pow(h.distanceToSquared(f),d),M=Math.pow(f.distanceToSquared(u),d);x<1e-4&&(x=1),g<1e-4&&(g=x),M<1e-4&&(M=x),Cl.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,x,M),Ll.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,x,M),Rl.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,x,M)}else this.curveType==="catmullrom"&&(Cl.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Ll.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Rl.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Cl.calc(l),Ll.calc(l),Rl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new A().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}xf.prototype.isCatmullRomCurve3=!0;function _f(i,e,t,n,r){const s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function Py(i,e){const t=1-i;return t*t*e}function Dy(i,e){return 2*(1-i)*i*e}function Iy(i,e){return i*i*e}function Zr(i,e,t,n){return Py(i,e)+Dy(i,t)+Iy(i,n)}function Fy(i,e){const t=1-i;return t*t*t*e}function Ny(i,e){const t=1-i;return 3*t*t*i*e}function By(i,e){return 3*(1-i)*i*i*e}function Oy(i,e){return i*i*i*e}function Jr(i,e,t,n,r){return Fy(i,e)+Ny(i,t)+By(i,n)+Oy(i,r)}class Pl extends Gt{constructor(e=new ue,t=new ue,n=new ue,r=new ue){super();this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new ue){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Jr(e,r.x,s.x,o.x,a.x),Jr(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}Pl.prototype.isCubicBezierCurve=!0;class vf extends Gt{constructor(e=new A,t=new A,n=new A,r=new A){super();this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new A){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Jr(e,r.x,s.x,o.x,a.x),Jr(e,r.y,s.y,o.y,a.y),Jr(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}vf.prototype.isCubicBezierCurve3=!0;class vo extends Gt{constructor(e=new ue,t=new ue){super();this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new ue;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}vo.prototype.isLineCurve=!0;class zy extends Gt{constructor(e=new A,t=new A){super();this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new A){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Dl extends Gt{constructor(e=new ue,t=new ue,n=new ue){super();this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ue){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Zr(e,r.x,s.x,o.x),Zr(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Dl.prototype.isQuadraticBezierCurve=!0;class yf extends Gt{constructor(e=new A,t=new A,n=new A){super();this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new A){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Zr(e,r.x,s.x,o.x),Zr(e,r.y,s.y,o.y),Zr(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}yf.prototype.isQuadraticBezierCurve3=!0;class Il extends Gt{constructor(e=[]){super();this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return n.set(_f(a,l.x,c.x,u.x,h.x),_f(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new ue().fromArray(r))}return this}}Il.prototype.isSplineCurve=!0;var Mf=Object.freeze({__proto__:null,ArcCurve:gf,CatmullRomCurve3:xf,CubicBezierCurve:Pl,CubicBezierCurve3:vf,EllipseCurve:xo,LineCurve:vo,LineCurve3:zy,QuadraticBezierCurve:Dl,QuadraticBezierCurve3:yf,SplineCurve:Il});class Uy extends Gt{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new vo(t,e))}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o&&o.isEllipseCurve?e*2:o&&(o.isLineCurve||o.isLineCurve3)?1:o&&o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new Mf[r.type]().fromJSON(r))}return this}}class Fl extends Uy{constructor(e){super();this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new vo(this.currentPoint.clone(),new ue(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new Dl(this.currentPoint.clone(),new ue(e,t),new ue(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){const a=new Pl(this.currentPoint.clone(),new ue(e,t),new ue(n,r),new ue(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Il(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){const c=new xo(e,t,n,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Kr extends Fl{constructor(e){super(e);this.uuid=Xt(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new Fl().fromJSON(r))}return this}}const Hy={triangulate:function(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=bf(i,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,f,d;if(n&&(s=qy(i,e,s,t)),i.length>80*t){a=c=i[0],l=u=i[1];for(let g=t;g<r;g+=t)h=i[g],f=i[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?1/d:0}return $r(s,o,t,a,l,d),o}};function bf(i,e,t,n,r){let s,o;if(r===nM(i,e,t,n)>0)for(s=e;s<t;s+=n)o=Ef(s,i[s],i[s+1],o);else for(s=t-n;s>=e;s-=n)o=Ef(s,i[s],i[s+1],o);return o&&yo(o,o.next)&&(es(o),o=o.next),o}function Wn(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(yo(t,t.next)||tt(t.prev,t,t.next)===0)){if(es(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function $r(i,e,t,n,r,s,o){if(!i)return;!o&&s&&Jy(i,n,r,s);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?ky(i,n,r,s):Vy(i)){e.push(l.i/t),e.push(i.i/t),e.push(c.i/t),es(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Gy(Wn(i),e,t),$r(i,e,t,n,r,s,2)):o===2&&Wy(i,e,t,n,r,s):$r(Wn(i),e,t,n,r,s,1);break}}}function Vy(i){const e=i.prev,t=i,n=i.next;if(tt(e,t,n)>=0)return!1;let r=i.next.next;for(;r!==i.prev;){if(hr(e.x,e.y,t.x,t.y,n.x,n.y,r.x,r.y)&&tt(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function ky(i,e,t,n){const r=i.prev,s=i,o=i.next;if(tt(r,s,o)>=0)return!1;const a=r.x<s.x?r.x<o.x?r.x:o.x:s.x<o.x?s.x:o.x,l=r.y<s.y?r.y<o.y?r.y:o.y:s.y<o.y?s.y:o.y,c=r.x>s.x?r.x>o.x?r.x:o.x:s.x>o.x?s.x:o.x,u=r.y>s.y?r.y>o.y?r.y:o.y:s.y>o.y?s.y:o.y,h=Nl(a,l,e,t,n),f=Nl(c,u,e,t,n);let d=i.prevZ,g=i.nextZ;for(;d&&d.z>=h&&g&&g.z<=f;){if(d!==i.prev&&d!==i.next&&hr(r.x,r.y,s.x,s.y,o.x,o.y,d.x,d.y)&&tt(d.prev,d,d.next)>=0||(d=d.prevZ,g!==i.prev&&g!==i.next&&hr(r.x,r.y,s.x,s.y,o.x,o.y,g.x,g.y)&&tt(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;d&&d.z>=h;){if(d!==i.prev&&d!==i.next&&hr(r.x,r.y,s.x,s.y,o.x,o.y,d.x,d.y)&&tt(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;g&&g.z<=f;){if(g!==i.prev&&g!==i.next&&hr(r.x,r.y,s.x,s.y,o.x,o.y,g.x,g.y)&&tt(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function Gy(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!yo(r,s)&&wf(r,n,n.next,s)&&Qr(r,s)&&Qr(s,r)&&(e.push(r.i/t),e.push(n.i/t),e.push(s.i/t),es(n),es(n.next),n=i=s),n=n.next}while(n!==i);return Wn(n)}function Wy(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Qy(o,a)){let l=Sf(o,a);o=Wn(o,o.next),l=Wn(l,l.next),$r(o,e,t,n,r,s),$r(l,e,t,n,r,s);return}a=a.next}o=o.next}while(o!==i)}function qy(i,e,t,n){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=bf(i,a,l,n,!1),c===c.next&&(c.steiner=!0),r.push($y(c));for(r.sort(Xy),s=0;s<r.length;s++)jy(r[s],t),t=Wn(t,t.next);return t}function Xy(i,e){return i.x-e.x}function jy(i,e){if(e=Yy(i,e),e){const t=Sf(e,i);Wn(e,e.next),Wn(t,t.next)}}function Yy(i,e){let t=e;const n=i.x,r=i.y;let s=-1/0,o;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>s){if(s=f,f===n){if(r===t.y)return t;if(r===t.next.y)return t.next}o=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!o)return null;if(n===s)return o;const a=o,l=o.x,c=o.y;let u=1/0,h;t=o;do n>=t.x&&t.x>=l&&n!==t.x&&hr(r<c?n:s,r,l,c,r<c?s:n,r,t.x,t.y)&&(h=Math.abs(r-t.y)/(n-t.x),Qr(t,i)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&Zy(o,t)))&&(o=t,u=h)),t=t.next;while(t!==a);return o}function Zy(i,e){return tt(i.prev,i,e.prev)<0&&tt(e.next,i,i.next)<0}function Jy(i,e,t,n){let r=i;do r.z===null&&(r.z=Nl(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Ky(r)}function Ky(i){let e,t,n,r,s,o,a,l,c=1;do{for(t=i,i=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,a--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,c*=2}while(o>1);return i}function Nl(i,e,t,n,r){return i=32767*(i-t)*r,e=32767*(e-n)*r,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function $y(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function hr(i,e,t,n,r,s,o,a){return(r-o)*(e-a)-(i-o)*(s-a)>=0&&(i-o)*(n-a)-(t-o)*(e-a)>=0&&(t-o)*(s-a)-(r-o)*(n-a)>=0}function Qy(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!eM(i,e)&&(Qr(i,e)&&Qr(e,i)&&tM(i,e)&&(tt(i.prev,i,e.prev)||tt(i,e.prev,e))||yo(i,e)&&tt(i.prev,i,i.next)>0&&tt(e.prev,e,e.next)>0)}function tt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function yo(i,e){return i.x===e.x&&i.y===e.y}function wf(i,e,t,n){const r=bo(tt(i,e,t)),s=bo(tt(i,e,n)),o=bo(tt(t,n,i)),a=bo(tt(t,n,e));return!!(r!==s&&o!==a||r===0&&Mo(i,t,e)||s===0&&Mo(i,n,e)||o===0&&Mo(t,i,n)||a===0&&Mo(t,e,n))}function Mo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function bo(i){return i>0?1:i<0?-1:0}function eM(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&wf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Qr(i,e){return tt(i.prev,i,i.next)<0?tt(i,e,i.next)>=0&&tt(i,i.prev,e)>=0:tt(i,e,i.prev)<0||tt(i,i.next,e)<0}function tM(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Sf(i,e){const t=new Bl(i.i,i.x,i.y),n=new Bl(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Ef(i,e,t,n){const r=new Bl(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function es(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Bl(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function nM(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class qn{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return qn.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];Tf(e),Af(n,e);let o=e.length;t.forEach(Tf);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Af(n,t[l]);const a=Hy.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Tf(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Af(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class fr extends $e{constructor(e=new Kr([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new ht(r,3)),this.setAttribute("uv",new ht(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1;let h=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,M=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,p=t.UVGenerator!==void 0?t.UVGenerator:iM;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),h=t.amount);let L,w=!1,T,F,R,K;m&&(L=m.getSpacedPoints(u),w=!0,f=!1,T=m.computeFrenetFrames(u,!1),F=new A,R=new A,K=new A),f||(M=0,d=0,g=0,x=0);const he=a.extractPoints(c);let ne=he.shape;const _=he.holes;if(!qn.isClockWise(ne)){ne=ne.reverse();for(let te=0,b=_.length;te<b;te++){const E=_[te];qn.isClockWise(E)&&(_[te]=E.reverse())}}const z=qn.triangulateShape(ne,_),W=ne;for(let te=0,b=_.length;te<b;te++){const E=_[te];ne=ne.concat(E)}function H(te,b,E){return b||console.error("THREE.ExtrudeGeometry: vec does not exist"),b.clone().multiplyScalar(E).add(te)}const O=ne.length,q=z.length;function J(te,b,E){let I,B,U;const Y=te.x-b.x,ae=te.y-b.y,re=E.x-te.x,se=E.y-te.y,y=Y*Y+ae*ae,v=Y*se-ae*re;if(Math.abs(v)>Number.EPSILON){const N=Math.sqrt(y),j=Math.sqrt(re*re+se*se),le=b.x-ae/N,V=b.y+Y/N,pe=E.x-se/j,C=E.y+re/j,G=((pe-le)*se-(C-V)*re)/(Y*se-ae*re);I=le+Y*G-te.x,B=V+ae*G-te.y;const ce=I*I+B*B;if(ce<=2)return new ue(I,B);U=Math.sqrt(ce/2)}else{let N=!1;Y>Number.EPSILON?re>Number.EPSILON&&(N=!0):Y<-Number.EPSILON?re<-Number.EPSILON&&(N=!0):Math.sign(ae)===Math.sign(se)&&(N=!0),N?(I=-ae,B=Y,U=Math.sqrt(y)):(I=Y,B=ae,U=Math.sqrt(y/2))}return new ue(I/U,B/U)}const fe=[];for(let te=0,b=W.length,E=b-1,I=te+1;te<b;te++,E++,I++)E===b&&(E=0),I===b&&(I=0),fe[te]=J(W[te],W[E],W[I]);const ee=[];let ie,de=fe.concat();for(let te=0,b=_.length;te<b;te++){const E=_[te];ie=[];for(let I=0,B=E.length,U=B-1,Y=I+1;I<B;I++,U++,Y++)U===B&&(U=0),Y===B&&(Y=0),ie[I]=J(E[I],E[U],E[Y]);ee.push(ie),de=de.concat(ie)}for(let te=0;te<M;te++){const b=te/M,E=d*Math.cos(b*Math.PI/2),I=g*Math.sin(b*Math.PI/2)+x;for(let B=0,U=W.length;B<U;B++){const Y=H(W[B],fe[B],I);ye(Y.x,Y.y,-E)}for(let B=0,U=_.length;B<U;B++){const Y=_[B];ie=ee[B];for(let ae=0,re=Y.length;ae<re;ae++){const se=H(Y[ae],ie[ae],I);ye(se.x,se.y,-E)}}}const xe=g+x;for(let te=0;te<O;te++){const b=f?H(ne[te],de[te],xe):ne[te];w?(R.copy(T.normals[0]).multiplyScalar(b.x),F.copy(T.binormals[0]).multiplyScalar(b.y),K.copy(L[0]).add(R).add(F),ye(K.x,K.y,K.z)):ye(b.x,b.y,0)}for(let te=1;te<=u;te++)for(let b=0;b<O;b++){const E=f?H(ne[b],de[b],xe):ne[b];w?(R.copy(T.normals[te]).multiplyScalar(E.x),F.copy(T.binormals[te]).multiplyScalar(E.y),K.copy(L[te]).add(R).add(F),ye(K.x,K.y,K.z)):ye(E.x,E.y,h/u*te)}for(let te=M-1;te>=0;te--){const b=te/M,E=d*Math.cos(b*Math.PI/2),I=g*Math.sin(b*Math.PI/2)+x;for(let B=0,U=W.length;B<U;B++){const Y=H(W[B],fe[B],I);ye(Y.x,Y.y,h+E)}for(let B=0,U=_.length;B<U;B++){const Y=_[B];ie=ee[B];for(let ae=0,re=Y.length;ae<re;ae++){const se=H(Y[ae],ie[ae],I);w?ye(se.x,se.y+L[u-1].y,L[u-1].x+E):ye(se.x,se.y,h+E)}}}Se(),Q();function Se(){const te=r.length/3;if(f){let b=0,E=O*b;for(let I=0;I<q;I++){const B=z[I];Te(B[2]+E,B[1]+E,B[0]+E)}b=u+M*2,E=O*b;for(let I=0;I<q;I++){const B=z[I];Te(B[0]+E,B[1]+E,B[2]+E)}}else{for(let b=0;b<q;b++){const E=z[b];Te(E[2],E[1],E[0])}for(let b=0;b<q;b++){const E=z[b];Te(E[0]+O*u,E[1]+O*u,E[2]+O*u)}}n.addGroup(te,r.length/3-te,0)}function Q(){const te=r.length/3;let b=0;Oe(W,b),b+=W.length;for(let E=0,I=_.length;E<I;E++){const B=_[E];Oe(B,b),b+=B.length}n.addGroup(te,r.length/3-te,1)}function Oe(te,b){let E=te.length;for(;--E>=0;){const I=E;let B=E-1;B<0&&(B=te.length-1);for(let U=0,Y=u+M*2;U<Y;U++){const ae=O*U,re=O*(U+1),se=b+I+ae,y=b+B+ae,v=b+B+re,N=b+I+re;ve(se,y,v,N)}}}function ye(te,b,E){l.push(te),l.push(b),l.push(E)}function Te(te,b,E){Le(te),Le(b),Le(E);const I=r.length/3,B=p.generateTopUV(n,r,I-3,I-2,I-1);Ae(B[0]),Ae(B[1]),Ae(B[2])}function ve(te,b,E,I){Le(te),Le(b),Le(I),Le(b),Le(E),Le(I);const B=r.length/3,U=p.generateSideWallUV(n,r,B-6,B-3,B-2,B-1);Ae(U[0]),Ae(U[1]),Ae(U[3]),Ae(U[1]),Ae(U[2]),Ae(U[3])}function Le(te){r.push(l[te*3+0]),r.push(l[te*3+1]),r.push(l[te*3+2])}function Ae(te){s.push(te.x),s.push(te.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return rM(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Mf[r.type]().fromJSON(r)),new fr(n,e.options)}}const iM={generateTopUV:function(i,e,t,n,r){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[r*3],u=e[r*3+1];return[new ue(s,o),new ue(a,l),new ue(c,u)]},generateSideWallUV:function(i,e,t,n,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[r*3],d=e[r*3+1],g=e[r*3+2],x=e[s*3],M=e[s*3+1],m=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ue(o,1-l),new ue(c,1-h),new ue(f,1-g),new ue(x,1-m)]:[new ue(a,1-l),new ue(u,1-h),new ue(d,1-g),new ue(M,1-m)]}};function rM(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ol extends $e{constructor(e=new Kr([new ue(0,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t=12){super();this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ht(r,3)),this.setAttribute("normal",new ht(s,3)),this.setAttribute("uv",new ht(o,2));function c(u){const h=r.length/3,f=u.extractPoints(t);let d=f.shape;const g=f.holes;qn.isClockWise(d)===!1&&(d=d.reverse());for(let M=0,m=g.length;M<m;M++){const p=g[M];qn.isClockWise(p)===!0&&(g[M]=p.reverse())}const x=qn.triangulateShape(d,g);for(let M=0,m=g.length;M<m;M++){const p=g[M];d=d.concat(p)}for(let M=0,m=d.length;M<m;M++){const p=d[M];r.push(p.x,p.y,0),s.push(0,0,1),o.push(p.x,p.y)}for(let M=0,m=x.length;M<m;M++){const p=x[M],L=p[0]+h,w=p[1]+h,T=p[2]+h;n.push(L,w,T),l+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return sM(t,e)}static fromJSON(e,t){const n=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];n.push(o)}return new Ol(n,e.curveSegments)}}function sM(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}class oM extends bt{constructor(e){super();this.type="ShadowMaterial",this.color=new Ee(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}oM.prototype.isShadowMaterial=!0;class Cf extends bt{constructor(e){super();this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oi,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}Cf.prototype.isMeshStandardMaterial=!0;class aM extends Cf{constructor(e){super();this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenColor=new Ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new Ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ee(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}aM.prototype.isMeshPhysicalMaterial=!0;class lM extends bt{constructor(e){super();this.type="MeshPhongMaterial",this.color=new Ee(16777215),this.specular=new Ee(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oi,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ls,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}lM.prototype.isMeshPhongMaterial=!0;class cM extends bt{constructor(e){super();this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ee(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oi,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}cM.prototype.isMeshToonMaterial=!0;class uM extends bt{constructor(e){super();this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oi,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}uM.prototype.isMeshNormalMaterial=!0;class hM extends bt{constructor(e){super();this.type="MeshLambertMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ls,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}hM.prototype.isMeshLambertMaterial=!0;class fM extends bt{constructor(e){super();this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ee(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oi,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this}}fM.prototype.isMeshMatcapMaterial=!0;class dM extends Yr{constructor(e){super();this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}dM.prototype.isLineDashedMaterial=!0;const Qe={arraySlice:function(i,e,t){return Qe.isTypedArray(i)?new i.constructor(i.subarray(e,t!==void 0?t:i.length)):i.slice(e,t)},convertArray:function(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)},isTypedArray:function(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)},getKeyframeOrder:function(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n},sortedArray:function(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=i[a+l]}return r},flattenJSON:function(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)},subclip:function(i,e,t,n,r=30){const s=i.clone();s.name=e;const o=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],u=c.getValueSize(),h=[],f=[];for(let d=0;d<c.times.length;++d){const g=c.times[d]*r;if(!(g<t||g>=n)){h.push(c.times[d]);for(let x=0;x<u;++x)f.push(c.values[d*u+x])}}h.length!==0&&(c.times=Qe.convertArray(h,c.times.constructor),c.values=Qe.convertArray(f,c.values.constructor),o.push(c))}s.tracks=o;let a=1/0;for(let l=0;l<s.tracks.length;++l)a>s.tracks[l].times[0]&&(a=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(i,e=0,t=i,n=30){n<=0&&(n=30);const r=t.tracks.length,s=e/n;for(let o=0;o<r;++o){const a=t.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=i.tracks.find(function(m){return m.name===a.name&&m.ValueTypeName===l});if(c===void 0)continue;let u=0;const h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let f=0;const d=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=d/3);const g=a.times.length-1;let x;if(s<=a.times[0]){const m=u,p=h-u;x=Qe.arraySlice(a.values,m,p)}else if(s>=a.times[g]){const m=g*h+u,p=m+h-u;x=Qe.arraySlice(a.values,m,p)}else{const m=a.createInterpolant(),p=u,L=h-u;m.evaluate(s),x=Qe.arraySlice(m.resultBuffer,p,L)}l==="quaternion"&&new Mt().fromArray(x).normalize().conjugate().toArray(x);const M=c.times.length;for(let m=0;m<M;++m){const p=m*d+f;if(l==="quaternion")Mt.multiplyQuaternionsFlat(c.values,p,x,0,c.values,p);else{const L=d-f*2;for(let w=0;w<L;++w)c.values[p+w]-=x[w]}}}return i.blendMode=qu,i}};class Xn{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,s)}if(n===a)break;if(s=r,r=t[++n],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,r);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,r);if(r===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,s,e)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}Xn.prototype.beforeStart_=Xn.prototype.copySampleValue_;Xn.prototype.afterEnd_=Xn.prototype.copySampleValue_;class pM extends Xn{constructor(e,t,n,r){super(e,t,n,r);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ni,endingEnd:Ni}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Bi:s=e,a=2*t-n;break;case Ns:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Bi:o=e,l=2*n-t;break;case Ns:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(r-t),x=g*g,M=x*g,m=-f*M+2*f*x-f*g,p=(1+f)*M+(-1.5-2*f)*x+(-.5+f)*g+1,L=(-1-d)*M+(1.5+d)*x+.5*g,w=d*M-d*x;for(let T=0;T!==a;++T)s[T]=m*o[u+T]+p*o[c+T]+L*o[l+T]+w*o[h+T];return s}}class Lf extends Xn{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}}class mM extends Xn{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class cn{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qe.convertArray(t,this.TimeBufferType),this.values=Qe.convertArray(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Qe.convertArray(e.times,Array),values:Qe.convertArray(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new mM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Lf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new pM(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Is:t=this.InterpolantFactoryMethodDiscrete;break;case Fs:t=this.InterpolantFactoryMethodLinear;break;case Fa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Is;case this.InterpolantFactoryMethodLinear:return Fs;case this.InterpolantFactoryMethodSmooth:return Fa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=Qe.arraySlice(n,s,o),this.values=Qe.arraySlice(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&Qe.isTypedArray(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=Qe.arraySlice(this.times),t=Qe.arraySlice(this.values),n=this.getValueSize(),r=this.getInterpolation()===Fa,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const x=t[h+g];if(x!==t[f+g]||x!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=Qe.arraySlice(e,0,o),this.values=Qe.arraySlice(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=Qe.arraySlice(this.times,0),t=Qe.arraySlice(this.values,0),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}cn.prototype.TimeBufferType=Float32Array;cn.prototype.ValueBufferType=Float32Array;cn.prototype.DefaultInterpolation=Fs;class dr extends cn{}dr.prototype.ValueTypeName="bool";dr.prototype.ValueBufferType=Array;dr.prototype.DefaultInterpolation=Is;dr.prototype.InterpolantFactoryMethodLinear=void 0;dr.prototype.InterpolantFactoryMethodSmooth=void 0;class Rf extends cn{}Rf.prototype.ValueTypeName="color";class wo extends cn{}wo.prototype.ValueTypeName="number";class gM extends Xn{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Mt.slerpFlat(s,0,o,c-a,o,c,l);return s}}class ts extends cn{InterpolantFactoryMethodLinear(e){return new gM(this.times,this.values,this.getValueSize(),e)}}ts.prototype.ValueTypeName="quaternion";ts.prototype.DefaultInterpolation=Fs;ts.prototype.InterpolantFactoryMethodSmooth=void 0;class pr extends cn{}pr.prototype.ValueTypeName="string";pr.prototype.ValueBufferType=Array;pr.prototype.DefaultInterpolation=Is;pr.prototype.InterpolantFactoryMethodLinear=void 0;pr.prototype.InterpolantFactoryMethodSmooth=void 0;class So extends cn{}So.prototype.ValueTypeName="vector";class Pf{constructor(e,t=-1,n,r=Na){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Xt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(_M(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(cn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=Qe.getKeyframeOrder(l);l=Qe.sortedArray(l,1,u),c=Qe.sortedArray(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new wo(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=r[h];f||(r[h]=f=[]),f.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,x){if(d.length!==0){const M=[],m=[];Qe.flattenJSON(d,M,m,g),M.length!==0&&x.push(new h(f,M,m))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let x=0;x<f[g].morphTargets.length;x++)d[f[g].morphTargets[x]]=-1;for(const x in d){const M=[],m=[];for(let p=0;p!==f[g].morphTargets.length;++p){const L=f[g];M.push(L.time),m.push(L.morphTarget===x?1:0)}r.push(new wo(".morphTargetInfluence["+x+"]",M,m))}l=d.length*(o||1)}else{const d=".bones["+t[h].name+"]";n(So,d+".position",f,"pos",r),n(ts,d+".quaternion",f,"rot",r),n(So,d+".scale",f,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function xM(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return wo;case"vector":case"vector2":case"vector3":case"vector4":return So;case"color":return Rf;case"quaternion":return ts;case"bool":case"boolean":return dr;case"string":return pr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function _M(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=xM(i.type);if(i.times===void 0){const t=[],n=[];Qe.flattenJSON(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const mr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class vM{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const yM=new vM;class jn{constructor(e){this.manager=e!==void 0?e:yM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const bn={};class MM extends jn{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=mr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(bn[e]!==void 0){bn[e].push({onLoad:t,onProgress:n,onError:r});return}bn[e]=[],bn[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body.getReader===void 0)return c;const u=bn[e],h=c.body.getReader(),f=c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let x=0;const M=new ReadableStream({start(m){p();function p(){h.read().then(({done:L,value:w})=>{if(L)m.close();else{x+=w.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:d});for(let F=0,R=u.length;F<R;F++){const K=u[F];K.onProgress&&K.onProgress(T)}m.enqueue(w),p()}})}}});return new Response(M)}else throw Error(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{mr.add(e,c);const u=bn[e];delete bn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=bn[e];if(u===void 0)throw this.manager.itemError(e),c;delete bn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Df extends jn{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=mr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Nr("img");function l(){u(),mr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class bM extends jn{constructor(e){super(e)}load(e,t,n,r){const s=new no,o=new Df(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(u){s.images[c]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,r)}for(let c=0;c<e.length;++c)l(c);return s}}class wM extends jn{constructor(e){super(e)}load(e,t,n,r){const s=new ut,o=new Df(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class un extends Xe{constructor(e,t=1){super();this.type="Light",this.color=new Ee(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}un.prototype.isLight=!0;class SM extends un{constructor(e,t,n){super(e,n);this.type="HemisphereLight",this.position.copy(Xe.DefaultUp),this.updateMatrix(),this.groundColor=new Ee(t)}copy(e){return un.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}SM.prototype.isHemisphereLight=!0;const If=new Ce,Ff=new A,Nf=new A;class zl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ro,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ff.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ff),Nf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nf),t.updateMatrixWorld(),If.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(If),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Bf extends zl{constructor(){super(new Rt(50,1,.5,500));this.focus=1}updateMatrices(e){const t=this.camera,n=Ir*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}Bf.prototype.isSpotLightShadow=!0;class EM extends un{constructor(e,t,n=0,r=Math.PI/3,s=0,o=1){super(e,t);this.type="SpotLight",this.position.copy(Xe.DefaultUp),this.updateMatrix(),this.target=new Xe,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.shadow=new Bf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}EM.prototype.isSpotLight=!0;const Of=new Ce,ns=new A,Ul=new A;class zf extends zl{constructor(){super(new Rt(90,1,.5,500));this._frameExtents=new ue(4,2),this._viewportCount=6,this._viewports=[new qe(2,1,1,1),new qe(0,1,1,1),new qe(3,1,1,1),new qe(1,1,1,1),new qe(3,0,1,1),new qe(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ns.setFromMatrixPosition(e.matrixWorld),n.position.copy(ns),Ul.copy(n.position),Ul.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ul),n.updateMatrixWorld(),r.makeTranslation(-ns.x,-ns.y,-ns.z),Of.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Of)}}zf.prototype.isPointLightShadow=!0;class TM extends un{constructor(e,t,n=0,r=1){super(e,t);this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new zf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}TM.prototype.isPointLight=!0;class Uf extends zl{constructor(){super(new fl(-5,5,5,-5,.5,500))}}Uf.prototype.isDirectionalLightShadow=!0;class AM extends un{constructor(e,t){super(e,t);this.type="DirectionalLight",this.position.copy(Xe.DefaultUp),this.updateMatrix(),this.target=new Xe,this.shadow=new Uf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}AM.prototype.isDirectionalLight=!0;class CM extends un{constructor(e,t){super(e,t);this.type="AmbientLight"}}CM.prototype.isAmbientLight=!0;class LM extends un{constructor(e,t,n=10,r=10){super(e,t);this.type="RectAreaLight",this.width=n,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}LM.prototype.isRectAreaLight=!0;class Hf{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new A)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,r=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*r),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*r)),t.addScaledVector(o[5],1.092548*(r*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(n*s)),t.addScaledVector(o[8],.546274*(n*n-r*r)),t}getIrradianceAt(e,t){const n=e.x,r=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*r),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*r),t.addScaledVector(o[5],2*.429043*r*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*n*s),t.addScaledVector(o[8],.429043*(n*n-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let r=0;r<9;r++)n[r].fromArray(e,t+r*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let r=0;r<9;r++)n[r].toArray(e,t+r*3);return e}static getBasisAt(e,t){const n=e.x,r=e.y,s=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*r,t[5]=1.092548*r*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-r*r)}}Hf.prototype.isSphericalHarmonics3=!0;class Hl extends un{constructor(e=new Hf,t=1){super(void 0,t);this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}Hl.prototype.isLightProbe=!0;class RM{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class PM extends $e{constructor(){super();this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}PM.prototype.isInstancedBufferGeometry=!0;class DM extends jn{constructor(e){super(e);typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=mr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){mr.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){r&&r(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}DM.prototype.isImageBitmapLoader=!0;let Eo;const IM={getContext:function(){return Eo===void 0&&(Eo=new(window.AudioContext||window.webkitAudioContext)),Eo},setContext:function(i){Eo=i}};class FM extends jn{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new MM(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{const l=a.slice(0);IM.getContext().decodeAudioData(l,function(u){t(u)})}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},n,r)}}class NM extends Hl{constructor(e,t,n=1){super(void 0,n);const r=new Ee().set(e),s=new Ee().set(t),o=new A(r.r,r.g,r.b),a=new A(s.r,s.g,s.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(a).multiplyScalar(l),this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(c)}}NM.prototype.isHemisphereLightProbe=!0;class BM extends Hl{constructor(e,t=1){super(void 0,t);const n=new Ee().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}BM.prototype.isAmbientLightProbe=!0;class OM extends Xe{constructor(e){super();this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class zM{constructor(e,t,n){this.binding=e,this.valueSize=n;let r,s,o;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:r=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,r=this.valueSize,s=e*r+r;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==r;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,r)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,r=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,r,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,r);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,r=n*this._origIndex;e.getValue(t,r);for(let s=n,o=r;s!==o;++s)t[s]=t[r+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,r,s){if(r>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,r){Mt.slerpFlat(e,t,e,t,e,n,r)}_slerpAdditive(e,t,n,r,s){const o=this._workIndex*s;Mt.multiplyQuaternionsFlat(e,o,e,t,e,n),Mt.slerpFlat(e,t,e,t,e,o,r)}_lerp(e,t,n,r,s){const o=1-r;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*r}}_lerpAdditive(e,t,n,r,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*r}}}const Vl="\\[\\]\\.:\\/",UM=new RegExp("["+Vl+"]","g"),kl="[^"+Vl+"]",HM="[^"+Vl.replace("\\.","")+"]",VM=/((?:WC+[\/:])*)/.source.replace("WC",kl),kM=/(WCOD+)?/.source.replace("WCOD",HM),GM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kl),WM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kl),qM=new RegExp("^"+VM+kM+GM+WM+"$"),XM=["material","materials","bones"];class jM{constructor(e,t,n){const r=n||je.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class je{constructor(e,t,n){this.path=t,this.parsedPath=n||je.parseTrackName(t),this.node=je.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new je.Composite(e,t,n):new je(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(UM,"")}static parseTrackName(e){const t=qM.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);XM.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=je.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}je.Composite=jM;je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};je.prototype.GetterByBindingType=[je.prototype._getValue_direct,je.prototype._getValue_array,je.prototype._getValue_arrayElement,je.prototype._getValue_toArray];je.prototype.SetterByBindingTypeAndVersioning=[[je.prototype._setValue_direct,je.prototype._setValue_direct_setNeedsUpdate,je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[je.prototype._setValue_array,je.prototype._setValue_array_setNeedsUpdate,je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[je.prototype._setValue_arrayElement,je.prototype._setValue_arrayElement_setNeedsUpdate,je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[je.prototype._setValue_fromArray,je.prototype._setValue_fromArray_setNeedsUpdate,je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class YM{constructor(e,t,n=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=r;const s=t.tracks,o=s.length,a=new Array(o),l={endingStart:Ni,endingEnd:Ni};for(let c=0;c!==o;++c){const u=s[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=xg,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const r=this._clip.duration,s=e._clip.duration,o=s/r,a=r/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const r=this._mixer,s=r.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,r){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;if(l<0||n===0)return;this._startTime=null,t=n*l}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case qu:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case Na:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(r,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;n!==null&&(t*=n.evaluate(e)[0],e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let r=this.time+e,s=this._loopCount;const o=n===_g;if(e===0)return s===-1?r:o&&(s&1)==1?t-r:r;if(n===gg){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=t||r<0){const a=Math.floor(r/t);r-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=r;if(o&&(s&1)==1)return t-r}return r}_setEndings(e,t,n){const r=this._interpolantSettings;n?(r.endingStart=Bi,r.endingEnd=Bi):(e?r.endingStart=this.zeroSlopeAtStart?Bi:Ni:r.endingStart=Ns,t?r.endingEnd=this.zeroSlopeAtEnd?Bi:Ni:r.endingEnd=Ns)}_scheduleFading(e,t,n){const r=this._mixer,s=r.time;let o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}}class ZM extends Fn{constructor(e){super();this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,r=e._clip.tracks,s=r.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==s;++h){const f=r[h],d=f.name;let g=u[d];if(g!==void 0)++g.referenceCount,o[h]=g;else{if(g=o[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,d));continue}const x=t&&t._propertyBindings[h].binding.parsedPath;g=new zM(je.create(n,d,x),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,d),o[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,n)}const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];s.useCount++==0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];--s.useCount==0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const r=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=r.length,r.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],r=e._cacheIndex;n._cacheIndex=r,t[r]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];--s.referenceCount==0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const r=this._bindingsByRootAndName,s=this._bindings;let o=r[t];o===void 0&&(o={},r[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,r=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[r],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[r]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Lf(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const r=t||this._root,s=r.uuid;let o=typeof e=="string"?Pf.findByName(r,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Na),l!==void 0){const h=l.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const u=new YM(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,s),u}existingAction(e,t){const n=t||this._root,r=n.uuid,s=typeof e=="string"?Pf.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[r]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,r=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(r,e,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,r=this._actionsByClip,s=r[n];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete r[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}ZM.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class JM extends kr{constructor(e,t,n=1){super(e,t);this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}JM.prototype.isInstancedInterleavedBuffer=!0;class Vf{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){const e=1e-6;return this.phi=Math.max(e,Math.min(Math.PI-e,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Lt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Yn=new A,To=new Ce,Gl=new Ce;class KM extends El{constructor(e){const t=kf(e),n=new $e,r=[],s=[],o=new Ee(0,0,1),a=new Ee(0,1,0);for(let c=0;c<t.length;c++){const u=t[c];u.parent&&u.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}n.setAttribute("position",new ht(r,3)),n.setAttribute("color",new ht(s,3));const l=new Yr({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l);this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,r=n.getAttribute("position");Gl.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){const a=t[s];a.parent&&a.parent.isBone&&(To.multiplyMatrices(Gl,a.matrixWorld),Yn.setFromMatrixPosition(To),r.setXYZ(o,Yn.x,Yn.y,Yn.z),To.multiplyMatrices(Gl,a.parent.matrixWorld),Yn.setFromMatrixPosition(To),r.setXYZ(o+1,Yn.x,Yn.y,Yn.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function kf(i){const e=[];i&&i.isBone&&e.push(i);for(let t=0;t<i.children.length;t++)e.push.apply(e,kf(i.children[t]));return e}class $M extends El{constructor(e=10,t=10,n=4473924,r=8947848){n=new Ee(n),r=new Ee(r);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,d=0,g=-a;f<=t;f++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const x=f===s?n:r;x.toArray(c,d),d+=3,x.toArray(c,d),d+=3,x.toArray(c,d),d+=3,x.toArray(c,d),d+=3}const u=new $e;u.setAttribute("position",new ht(l,3)),u.setAttribute("color",new ht(c,3));const h=new Yr({vertexColors:!0,toneMapped:!1});super(u,h);this.type="GridHelper"}}const QM=new Float32Array(1);new Int32Array(QM.buffer);Gt.create=function(i,e){return console.log("THREE.Curve.create() has been deprecated"),i.prototype=Object.create(Gt.prototype),i.prototype.constructor=i,i.prototype.getPoint=e,i};Fl.prototype.fromPoints=function(i){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(i)};$M.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};KM.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};jn.prototype.extractUrlBase=function(i){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),RM.extractUrlBase(i)};jn.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Yt.prototype.center=function(i){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(i)};Yt.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Yt.prototype.isIntersectionBox=function(i){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(i)};Yt.prototype.isIntersectionSphere=function(i){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(i)};Yt.prototype.size=function(i){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(i)};Gi.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};ro.prototype.setFromMatrix=function(i){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(i)};mt.prototype.flattenToArrayOffset=function(i,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(i,e)};mt.prototype.multiplyVector3=function(i){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),i.applyMatrix3(this)};mt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};mt.prototype.applyToBufferAttribute=function(i){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),i.applyMatrix3(this)};mt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};mt.prototype.getInverse=function(i){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(i).invert()};Ce.prototype.extractPosition=function(i){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(i)};Ce.prototype.flattenToArrayOffset=function(i,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(i,e)};Ce.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new A().setFromMatrixColumn(this,3)};Ce.prototype.setRotationFromQuaternion=function(i){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(i)};Ce.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};Ce.prototype.multiplyVector3=function(i){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),i.applyMatrix4(this)};Ce.prototype.multiplyVector4=function(i){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),i.applyMatrix4(this)};Ce.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};Ce.prototype.rotateAxis=function(i){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),i.transformDirection(this)};Ce.prototype.crossVector=function(i){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),i.applyMatrix4(this)};Ce.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};Ce.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};Ce.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};Ce.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};Ce.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};Ce.prototype.applyToBufferAttribute=function(i){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),i.applyMatrix4(this)};Ce.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};Ce.prototype.makeFrustum=function(i,e,t,n,r,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(i,e,n,t,r,s)};Ce.prototype.getInverse=function(i){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(i).invert()};on.prototype.isIntersectionLine=function(i){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(i)};Mt.prototype.multiplyVector3=function(i){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),i.applyQuaternion(this)};Mt.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};Wi.prototype.isIntersectionBox=function(i){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(i)};Wi.prototype.isIntersectionPlane=function(i){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(i)};Wi.prototype.isIntersectionSphere=function(i){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(i)};ot.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};ot.prototype.barycoordFromPoint=function(i,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(i,e)};ot.prototype.midpoint=function(i){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(i)};ot.prototypenormal=function(i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(i)};ot.prototype.plane=function(i){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(i)};ot.barycoordFromPoint=function(i,e,t,n,r){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),ot.getBarycoord(i,e,t,n,r)};ot.normal=function(i,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),ot.getNormal(i,e,t,n)};Kr.prototype.extractAllPoints=function(i){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(i)};Kr.prototype.extrude=function(i){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new fr(this,i)};Kr.prototype.makeGeometry=function(i){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Ol(this,i)};ue.prototype.fromAttribute=function(i,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(i,e,t)};ue.prototype.distanceToManhattan=function(i){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(i)};ue.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};A.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};A.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};A.prototype.getPositionFromMatrix=function(i){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(i)};A.prototype.getScaleFromMatrix=function(i){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(i)};A.prototype.getColumnFromMatrix=function(i,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,i)};A.prototype.applyProjection=function(i){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(i)};A.prototype.fromAttribute=function(i,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(i,e,t)};A.prototype.distanceToManhattan=function(i){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(i)};A.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};qe.prototype.fromAttribute=function(i,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(i,e,t)};qe.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Xe.prototype.getChildByName=function(i){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(i)};Xe.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};Xe.prototype.translate=function(i,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,i)};Xe.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};Xe.prototype.applyMatrix=function(i){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(i)};Object.defineProperties(Xe.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(i){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=i}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});wt.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(wt.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),vg},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});sf.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Rt.prototype.setLens=function(i,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(i)};Object.defineProperties(un.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(i){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=i}},shadowCameraLeft:{set:function(i){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=i}},shadowCameraRight:{set:function(i){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=i}},shadowCameraTop:{set:function(i){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=i}},shadowCameraBottom:{set:function(i){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=i}},shadowCameraNear:{set:function(i){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=i}},shadowCameraFar:{set:function(i){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=i}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(i){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=i}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(i){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=i}},shadowMapHeight:{set:function(i){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=i}}});Object.defineProperties(ct.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Bs},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Bs)}}});ct.prototype.setDynamic=function(i){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(i===!0?Bs:Pr),this};ct.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},ct.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};$e.prototype.addIndex=function(i){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(i)};$e.prototype.addAttribute=function(i,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(i,new ct(arguments[1],arguments[2]))):i==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(i,e)};$e.prototype.addDrawCall=function(i,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(i,e)};$e.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};$e.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};$e.prototype.removeAttribute=function(i){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(i)};$e.prototype.applyMatrix=function(i){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(i)};Object.defineProperties($e.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});kr.prototype.setDynamic=function(i){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(i===!0?Bs:Pr),this};kr.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};fr.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};fr.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};fr.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};Zh.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(bt.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new Ee}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(i){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===du}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(i){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=i}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(Mn.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(i){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=i}}});Ye.prototype.clearTarget=function(i,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(i),this.clear(e,t,n)};Ye.prototype.animate=function(i){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(i)};Ye.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};Ye.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};Ye.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};Ye.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};Ye.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};Ye.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};Ye.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};Ye.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};Ye.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};Ye.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};Ye.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};Ye.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};Ye.prototype.enableScissorTest=function(i){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(i)};Ye.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};Ye.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};Ye.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};Ye.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};Ye.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};Ye.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};Ye.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};Ye.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};Ye.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};Ye.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(Ye.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(i){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=i}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(i){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=i}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(i){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=i===!0?Ke:In}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}},gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});Object.defineProperties(jh.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(Ot.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(i){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=i}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(i){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=i}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(i){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=i}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(i){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=i}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(i){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=i}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(i){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=i}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(i){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=i}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(i){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=i}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(i){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=i}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(i){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=i}}});OM.prototype.load=function(i){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new FM().load(i,function(n){e.setBuffer(n)}),this};cl.prototype.updateCubeMap=function(i,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(i,e)};cl.prototype.clear=function(i,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(i,e,t,n)};ci.crossOrigin=void 0;ci.loadTexture=function(i,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const r=new wM;r.setCrossOrigin(this.crossOrigin);const s=r.load(i,t,void 0,n);return e&&(s.mapping=e),s};ci.loadTextureCube=function(i,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const r=new bM;r.setCrossOrigin(this.crossOrigin);const s=r.load(i,t,void 0,n);return e&&(s.mapping=e),s};ci.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};ci.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wa}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wa);const Gf={type:"change"},Wl={type:"start"},Wf={type:"end"};class ob extends Fn{constructor(e,t){super();t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ai.ROTATE,MIDDLE:Ai.DOLLY,RIGHT:Ai.PAN},this.touches={ONE:Ci.ROTATE,TWO:Ci.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",se),this._domElementKeyEvents=C},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Gf),n.update(),s=r.NONE},this.update=function(){const C=new A,G=new Mt().setFromUnitVectors(e.up,new A(0,1,0)),ce=G.clone().invert(),Me=new A,P=new Mt,_e=2*Math.PI;return function(){const be=n.object.position;C.copy(be).sub(n.target),C.applyQuaternion(G),a.setFromVector3(C),n.autoRotate&&s===r.NONE&&he(R()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Z=n.minAzimuthAngle,we=n.maxAzimuthAngle;return isFinite(Z)&&isFinite(we)&&(Z<-Math.PI?Z+=_e:Z>Math.PI&&(Z-=_e),we<-Math.PI?we+=_e:we>Math.PI&&(we-=_e),Z<=we?a.theta=Math.max(Z,Math.min(we,a.theta)):a.theta=a.theta>(Z+we)/2?Math.max(Z,a.theta):Math.min(we,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),C.setFromSpherical(a),C.applyQuaternion(ce),be.copy(n.target).add(C),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||Me.distanceToSquared(n.object.position)>o||8*(1-P.dot(n.object.quaternion))>o?(n.dispatchEvent(Gf),Me.copy(n.object.position),P.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",N),n.domElement.removeEventListener("pointerdown",E),n.domElement.removeEventListener("pointercancel",U),n.domElement.removeEventListener("wheel",re),n.domElement.removeEventListener("pointermove",I),n.domElement.removeEventListener("pointerup",B),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",se)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Vf,l=new Vf;let c=1;const u=new A;let h=!1;const f=new ue,d=new ue,g=new ue,x=new ue,M=new ue,m=new ue,p=new ue,L=new ue,w=new ue,T=[],F={};function R(){return 2*Math.PI/60/60*n.autoRotateSpeed}function K(){return Math.pow(.95,n.zoomSpeed)}function he(C){l.theta-=C}function ne(C){l.phi-=C}const _=function(){const C=new A;return function(ce,Me){C.setFromMatrixColumn(Me,0),C.multiplyScalar(-ce),u.add(C)}}(),D=function(){const C=new A;return function(ce,Me){n.screenSpacePanning===!0?C.setFromMatrixColumn(Me,1):(C.setFromMatrixColumn(Me,0),C.crossVectors(n.object.up,C)),C.multiplyScalar(ce),u.add(C)}}(),z=function(){const C=new A;return function(ce,Me){const P=n.domElement;if(n.object.isPerspectiveCamera){const _e=n.object.position;C.copy(_e).sub(n.target);let ge=C.length();ge*=Math.tan(n.object.fov/2*Math.PI/180),_(2*ce*ge/P.clientHeight,n.object.matrix),D(2*Me*ge/P.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(_(ce*(n.object.right-n.object.left)/n.object.zoom/P.clientWidth,n.object.matrix),D(Me*(n.object.top-n.object.bottom)/n.object.zoom/P.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function W(C){n.object.isPerspectiveCamera?c/=C:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*C)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(C){n.object.isPerspectiveCamera?c*=C:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/C)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function O(C){f.set(C.clientX,C.clientY)}function q(C){p.set(C.clientX,C.clientY)}function J(C){x.set(C.clientX,C.clientY)}function fe(C){d.set(C.clientX,C.clientY),g.subVectors(d,f).multiplyScalar(n.rotateSpeed);const G=n.domElement;he(2*Math.PI*g.x/G.clientHeight),ne(2*Math.PI*g.y/G.clientHeight),f.copy(d),n.update()}function ee(C){L.set(C.clientX,C.clientY),w.subVectors(L,p),w.y>0?W(K()):w.y<0&&H(K()),p.copy(L),n.update()}function ie(C){M.set(C.clientX,C.clientY),m.subVectors(M,x).multiplyScalar(n.panSpeed),z(m.x,m.y),x.copy(M),n.update()}function de(C){C.deltaY<0?H(K()):C.deltaY>0&&W(K()),n.update()}function xe(C){let G=!1;switch(C.code){case n.keys.UP:z(0,n.keyPanSpeed),G=!0;break;case n.keys.BOTTOM:z(0,-n.keyPanSpeed),G=!0;break;case n.keys.LEFT:z(n.keyPanSpeed,0),G=!0;break;case n.keys.RIGHT:z(-n.keyPanSpeed,0),G=!0;break}G&&(C.preventDefault(),n.update())}function Se(){if(T.length===1)f.set(T[0].pageX,T[0].pageY);else{const C=.5*(T[0].pageX+T[1].pageX),G=.5*(T[0].pageY+T[1].pageY);f.set(C,G)}}function Q(){if(T.length===1)x.set(T[0].pageX,T[0].pageY);else{const C=.5*(T[0].pageX+T[1].pageX),G=.5*(T[0].pageY+T[1].pageY);x.set(C,G)}}function Oe(){const C=T[0].pageX-T[1].pageX,G=T[0].pageY-T[1].pageY,ce=Math.sqrt(C*C+G*G);p.set(0,ce)}function ye(){n.enableZoom&&Oe(),n.enablePan&&Q()}function Te(){n.enableZoom&&Oe(),n.enableRotate&&Se()}function ve(C){if(T.length==1)d.set(C.pageX,C.pageY);else{const ce=pe(C),Me=.5*(C.pageX+ce.x),P=.5*(C.pageY+ce.y);d.set(Me,P)}g.subVectors(d,f).multiplyScalar(n.rotateSpeed);const G=n.domElement;he(2*Math.PI*g.x/G.clientHeight),ne(2*Math.PI*g.y/G.clientHeight),f.copy(d)}function Le(C){if(T.length===1)M.set(C.pageX,C.pageY);else{const G=pe(C),ce=.5*(C.pageX+G.x),Me=.5*(C.pageY+G.y);M.set(ce,Me)}m.subVectors(M,x).multiplyScalar(n.panSpeed),z(m.x,m.y),x.copy(M)}function Ae(C){const G=pe(C),ce=C.pageX-G.x,Me=C.pageY-G.y,P=Math.sqrt(ce*ce+Me*Me);L.set(0,P),w.set(0,Math.pow(L.y/p.y,n.zoomSpeed)),W(w.y),p.copy(L)}function te(C){n.enableZoom&&Ae(C),n.enablePan&&Le(C)}function b(C){n.enableZoom&&Ae(C),n.enableRotate&&ve(C)}function E(C){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(C.pointerId),n.domElement.addEventListener("pointermove",I),n.domElement.addEventListener("pointerup",B)),j(C),C.pointerType==="touch"?y(C):Y(C))}function I(C){n.enabled!==!1&&(C.pointerType==="touch"?v(C):ae(C))}function B(C){le(C),T.length===0&&(n.domElement.releasePointerCapture(C.pointerId),n.domElement.removeEventListener("pointermove",I),n.domElement.removeEventListener("pointerup",B)),n.dispatchEvent(Wf),s=r.NONE}function U(C){le(C)}function Y(C){let G;switch(C.button){case 0:G=n.mouseButtons.LEFT;break;case 1:G=n.mouseButtons.MIDDLE;break;case 2:G=n.mouseButtons.RIGHT;break;default:G=-1}switch(G){case Ai.DOLLY:if(n.enableZoom===!1)return;q(C),s=r.DOLLY;break;case Ai.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enablePan===!1)return;J(C),s=r.PAN}else{if(n.enableRotate===!1)return;O(C),s=r.ROTATE}break;case Ai.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enableRotate===!1)return;O(C),s=r.ROTATE}else{if(n.enablePan===!1)return;J(C),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Wl)}function ae(C){if(n.enabled!==!1)switch(s){case r.ROTATE:if(n.enableRotate===!1)return;fe(C);break;case r.DOLLY:if(n.enableZoom===!1)return;ee(C);break;case r.PAN:if(n.enablePan===!1)return;ie(C);break}}function re(C){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(C.preventDefault(),n.dispatchEvent(Wl),de(C),n.dispatchEvent(Wf))}function se(C){n.enabled===!1||n.enablePan===!1||xe(C)}function y(C){switch(V(C),T.length){case 1:switch(n.touches.ONE){case Ci.ROTATE:if(n.enableRotate===!1)return;Se(),s=r.TOUCH_ROTATE;break;case Ci.PAN:if(n.enablePan===!1)return;Q(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case Ci.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ye(),s=r.TOUCH_DOLLY_PAN;break;case Ci.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Te(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Wl)}function v(C){switch(V(C),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;ve(C),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Le(C),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;te(C),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;b(C),n.update();break;default:s=r.NONE}}function N(C){n.enabled!==!1&&C.preventDefault()}function j(C){T.push(C)}function le(C){delete F[C.pointerId];for(let G=0;G<T.length;G++)if(T[G].pointerId==C.pointerId){T.splice(G,1);return}}function V(C){let G=F[C.pointerId];G===void 0&&(G=new ue,F[C.pointerId]=G),G.set(C.pageX,C.pageY)}function pe(C){const G=C.pointerId===T[0].pointerId?T[1]:T[0];return F[G.pointerId]}n.domElement.addEventListener("contextmenu",N),n.domElement.addEventListener("pointerdown",E),n.domElement.addEventListener("pointercancel",U),n.domElement.addEventListener("wheel",re,{passive:!1}),this.update()}}class eb extends wt{constructor(e,t={}){super(e);const n=this,r=t.textureWidth!==void 0?t.textureWidth:512,s=t.textureHeight!==void 0?t.textureHeight:512,o=t.clipBias!==void 0?t.clipBias:0,a=t.alpha!==void 0?t.alpha:1,l=t.time!==void 0?t.time:0,c=t.waterNormals!==void 0?t.waterNormals:null,u=t.sunDirection!==void 0?t.sunDirection:new A(.70707,.70707,0),h=new Ee(t.sunColor!==void 0?t.sunColor:16777215),f=new Ee(t.waterColor!==void 0?t.waterColor:8355711),d=t.eye!==void 0?t.eye:new A(0,0,0),g=t.distortionScale!==void 0?t.distortionScale:20,x=t.side!==void 0?t.side:Li,M=t.fog!==void 0?t.fog:!1,m=new on,p=new A,L=new A,w=new A,T=new Ce,F=new A(0,0,-1),R=new qe,K=new A,he=new A,ne=new qe,_=new Ce,D=new Rt,z=new Ot(r,s),W={uniforms:to.merge([me.fog,me.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new Ce},sunColor:{value:new Ee(8355711)},sunDirection:{value:new A(.70707,.70707,0)},eye:{value:new A},waterColor:{value:new Ee(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.3;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <fog_fragment>
				}`},H=new Mn({fragmentShader:W.fragmentShader,vertexShader:W.vertexShader,uniforms:to.clone(W.uniforms),lights:!0,side:x,fog:M});H.uniforms.mirrorSampler.value=z.texture,H.uniforms.textureMatrix.value=_,H.uniforms.alpha.value=a,H.uniforms.time.value=l,H.uniforms.normalSampler.value=c,H.uniforms.sunColor.value=h,H.uniforms.waterColor.value=f,H.uniforms.sunDirection.value=u,H.uniforms.distortionScale.value=g,H.uniforms.eye.value=d,n.material=H,n.onBeforeRender=function(O,q,J){if(L.setFromMatrixPosition(n.matrixWorld),w.setFromMatrixPosition(J.matrixWorld),T.extractRotation(n.matrixWorld),p.set(0,0,1),p.applyMatrix4(T),K.subVectors(L,w),K.dot(p)>0)return;K.reflect(p).negate(),K.add(L),T.extractRotation(J.matrixWorld),F.set(0,0,-1),F.applyMatrix4(T),F.add(w),he.subVectors(L,F),he.reflect(p).negate(),he.add(L),D.position.copy(K),D.up.set(0,1,0),D.up.applyMatrix4(T),D.up.reflect(p),D.lookAt(he),D.far=J.far,D.updateMatrixWorld(),D.projectionMatrix.copy(J.projectionMatrix),_.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),_.multiply(D.projectionMatrix),_.multiply(D.matrixWorldInverse),m.setFromNormalAndCoplanarPoint(p,L),m.applyMatrix4(D.matrixWorldInverse),R.set(m.normal.x,m.normal.y,m.normal.z,m.constant);const fe=D.projectionMatrix;ne.x=(Math.sign(R.x)+fe.elements[8])/fe.elements[0],ne.y=(Math.sign(R.y)+fe.elements[9])/fe.elements[5],ne.z=-1,ne.w=(1+fe.elements[10])/fe.elements[14],R.multiplyScalar(2/R.dot(ne)),fe.elements[2]=R.x,fe.elements[6]=R.y,fe.elements[10]=R.z+1-o,fe.elements[14]=R.w,d.setFromMatrixPosition(J.matrixWorld);const ee=O.getRenderTarget(),ie=O.xr.enabled,de=O.shadowMap.autoUpdate;n.visible=!1,O.xr.enabled=!1,O.shadowMap.autoUpdate=!1,O.setRenderTarget(z),O.state.buffers.depth.setMask(!0),O.autoClear===!1&&O.clear(),O.render(q,D),n.visible=!0,O.xr.enabled=ie,O.shadowMap.autoUpdate=de,O.setRenderTarget(ee);const xe=J.viewport;xe!==void 0&&O.state.viewport(xe)}}}eb.prototype.isWater=!0;class Ao extends wt{constructor(){const e=Ao.SkyShader,t=new Mn({name:"SkyShader",fragmentShader:e.fragmentShader,vertexShader:e.vertexShader,uniforms:to.clone(e.uniforms),side:st,depthWrite:!1});super(new $i(1,1,1),t)}}Ao.prototype.isSky=!0;Ao.SkyShader={uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new A},up:{value:new A(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		const vec3 cameraPos = vec3( 0.0, 0.0, 0.0 );

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPos );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <encodings_fragment>

		}`};export{Qm as A,sb as M,ob as O,Rt as P,Ca as R,Zh as S,wM as T,A as V,Ye as W,hl as a,eb as b,Ao as c,tb as d,xh as e,ib as f,nb as g,rb as h,Ic as o};
