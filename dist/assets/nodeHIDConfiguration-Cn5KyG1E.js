var tl=Object.defineProperty;var nl=(e,t,n)=>t in e?tl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ge=(e,t,n)=>nl(e,typeof t!="symbol"?t+"":t,n);import{bh as Qn,bi as Pt,bj as hn,bk as Ft,bl as rl,bm as ol,bn as il,bo as er,bp as ot,bq as tr,br as nr,bs as wo,bt as St,bu as Dn,bv as yr,bw as ll,bx as xr,by as _r,bz as on,bA as al,bB as Cr,bC as sl,bD as dl,bE as ul,bF as cl,bG as fl,bH as hl,I as We,o as lt,i as pl,w as Ce,c as $,k as at,s as pe,r as L,f as wt,d as ft,H as He,au as yo,av as xo,as as _o,J as Co,g as X,bI as vl,L as Be,ad as Nt,bJ as Sr,bK as gl,j as g,bL as ml,bM as So,u as rr,E as te,ag as or,R as _t,V as kr,ar as ir,bN as bl,bO as wl,aK as Le,ax as nt,b7 as ln,bP as _n,bQ as lr,bR as yl,bS as xl,bT as _l,l as A,q as Y,m as R,bU as Un,bV as ko,y as ar,D as Cl,N as Dt,z as Oe,A as re,bW as Sl,O as ne,Q as Pe,aq as bt,ac as Ut,n as D,p as Te,ab as sr,x as Me,bX as pn,S as vn,M as gn,bY as kl,P as yt,bZ as Ol,b_ as Il,K as dr,ae as sn,v as Oo,b$ as Ke,ah as Vn,c0 as Rt,c1 as zl,F as ur,at as $l,c2 as Rl,az as Ml,c3 as Tl,am as Bl,T as he,aI as Pl,c4 as Al,c5 as Or,c6 as El,c7 as Ll,c8 as Fl,c9 as Nl,G as Io,ca as Dl,cb as Ul,aa as At,cc as Vl,aH as jl,cd as Hl,ce as Wl,ay as Gl,ao as ql,ap as Kl,cf as Yl,cg as Xl,ch as Zl,ci as Jl,cj as zo,aj as Ir,ck as Ql,cl as zr,cm as ea,aC as $o,cn as Ro,co as ta,cp as na,cq as $r,cr as ra,b6 as Ie,aR as Mo,aZ as $e,aM as je,aN as Ne,aO as De,aP as To,b5 as oa,a$ as Ee,b2 as ia,a_ as la,b3 as aa,aW as Bo,aQ as sa,bb as Rr,aX as Fe,aV as Cn,cs as da,b1 as ua,ba as Po,aY as Ao,aU as Xt,aT as Zt}from"./index-C6o3MmhI.js";var ca=/\s/;function fa(e){for(var t=e.length;t--&&ca.test(e.charAt(t)););return t}var ha=/^\s+/;function pa(e){return e&&e.slice(0,fa(e)+1).replace(ha,"")}var Mr=NaN,va=/^[-+]0x[0-9a-f]+$/i,ga=/^0b[01]+$/i,ma=/^0o[0-7]+$/i,ba=parseInt;function Tr(e){if(typeof e=="number")return e;if(Qn(e))return Mr;if(Pt(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Pt(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=pa(e);var n=ga.test(e);return n||ma.test(e)?ba(e.slice(2),n?2:8):va.test(e)?Mr:+e}var jn=hn(Ft,"WeakMap"),wa=rl(Object.keys,Object),ya=Object.prototype,xa=ya.hasOwnProperty;function _a(e){if(!ol(e))return wa(e);var t=[];for(var n in Object(e))xa.call(e,n)&&n!="constructor"&&t.push(n);return t}function cr(e){return er(e)?il(e):_a(e)}var Ca=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Sa=/^\w*$/;function fr(e,t){if(ot(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||Qn(e)?!0:Sa.test(e)||!Ca.test(e)||t!=null&&e in Object(t)}var ka="Expected a function";function hr(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(ka);var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var l=e.apply(this,r);return n.cache=i.set(o,l)||i,l};return n.cache=new(hr.Cache||tr),n}hr.Cache=tr;var Oa=500;function Ia(e){var t=hr(e,function(r){return n.size===Oa&&n.clear(),r}),n=t.cache;return t}var za=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,$a=/\\(\\)?/g,Ra=Ia(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(za,function(n,r,o,i){t.push(o?i.replace($a,"$1"):r||n)}),t});function Eo(e,t){return ot(e)?e:fr(e,t)?[e]:Ra(nr(e))}function mn(e){if(typeof e=="string"||Qn(e))return e;var t=e+"";return t=="0"&&1/e==-1/0?"-0":t}function Lo(e,t){t=Eo(t,e);for(var n=0,r=t.length;e!=null&&n<r;)e=e[mn(t[n++])];return n&&n==r?e:void 0}function pr(e,t,n){var r=e==null?void 0:Lo(e,t);return r===void 0?n:r}function Ma(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e}function Ta(e,t,n,r){for(var o=-1,i=e==null?0:e.length;++o<i;)n=t(n,e[o],o,e);return n}function Ba(e){return function(t){return e==null?void 0:e[t]}}var Pa={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Aa=Ba(Pa),Ea=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,La="\\u0300-\\u036f",Fa="\\ufe20-\\ufe2f",Na="\\u20d0-\\u20ff",Da=La+Fa+Na,Ua="["+Da+"]",Va=RegExp(Ua,"g");function ja(e){return e=nr(e),e&&e.replace(Ea,Aa).replace(Va,"")}var Ha=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function Wa(e){return e.match(Ha)||[]}var Ga=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function qa(e){return Ga.test(e)}var Fo="\\ud800-\\udfff",Ka="\\u0300-\\u036f",Ya="\\ufe20-\\ufe2f",Xa="\\u20d0-\\u20ff",Za=Ka+Ya+Xa,No="\\u2700-\\u27bf",Do="a-z\\xdf-\\xf6\\xf8-\\xff",Ja="\\xac\\xb1\\xd7\\xf7",Qa="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",es="\\u2000-\\u206f",ts=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Uo="A-Z\\xc0-\\xd6\\xd8-\\xde",ns="\\ufe0e\\ufe0f",Vo=Ja+Qa+es+ts,jo="['’]",Br="["+Vo+"]",rs="["+Za+"]",Ho="\\d+",os="["+No+"]",Wo="["+Do+"]",Go="[^"+Fo+Vo+Ho+No+Do+Uo+"]",is="\\ud83c[\\udffb-\\udfff]",ls="(?:"+rs+"|"+is+")",as="[^"+Fo+"]",qo="(?:\\ud83c[\\udde6-\\uddff]){2}",Ko="[\\ud800-\\udbff][\\udc00-\\udfff]",mt="["+Uo+"]",ss="\\u200d",Pr="(?:"+Wo+"|"+Go+")",ds="(?:"+mt+"|"+Go+")",Ar="(?:"+jo+"(?:d|ll|m|re|s|t|ve))?",Er="(?:"+jo+"(?:D|LL|M|RE|S|T|VE))?",Yo=ls+"?",Xo="["+ns+"]?",us="(?:"+ss+"(?:"+[as,qo,Ko].join("|")+")"+Xo+Yo+")*",cs="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",fs="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",hs=Xo+Yo+us,ps="(?:"+[os,qo,Ko].join("|")+")"+hs,vs=RegExp([mt+"?"+Wo+"+"+Ar+"(?="+[Br,mt,"$"].join("|")+")",ds+"+"+Er+"(?="+[Br,mt+Pr,"$"].join("|")+")",mt+"?"+Pr+"+"+Ar,mt+"+"+Er,fs,cs,Ho,ps].join("|"),"g");function gs(e){return e.match(vs)||[]}function ms(e,t,n){return e=nr(e),t=t,t===void 0?qa(e)?gs(e):Wa(e):e.match(t)||[]}var bs="['’]",ws=RegExp(bs,"g");function ys(e){return function(t){return Ta(ms(ja(t).replace(ws,"")),e,"")}}function xs(e,t){for(var n=-1,r=e==null?0:e.length,o=0,i=[];++n<r;){var l=e[n];t(l,n,e)&&(i[o++]=l)}return i}function _s(){return[]}var Cs=Object.prototype,Ss=Cs.propertyIsEnumerable,Lr=Object.getOwnPropertySymbols,ks=Lr?function(e){return e==null?[]:(e=Object(e),xs(Lr(e),function(t){return Ss.call(e,t)}))}:_s;function Os(e,t,n){var r=t(e);return ot(e)?r:Ma(r,n(e))}function Fr(e){return Os(e,cr,ks)}var Hn=hn(Ft,"DataView"),Wn=hn(Ft,"Promise"),Gn=hn(Ft,"Set"),Nr="[object Map]",Is="[object Object]",Dr="[object Promise]",Ur="[object Set]",Vr="[object WeakMap]",jr="[object DataView]",zs=St(Hn),$s=St(Dn),Rs=St(Wn),Ms=St(Gn),Ts=St(jn),tt=wo;(Hn&&tt(new Hn(new ArrayBuffer(1)))!=jr||Dn&&tt(new Dn)!=Nr||Wn&&tt(Wn.resolve())!=Dr||Gn&&tt(new Gn)!=Ur||jn&&tt(new jn)!=Vr)&&(tt=function(e){var t=wo(e),n=t==Is?e.constructor:void 0,r=n?St(n):"";if(r)switch(r){case zs:return jr;case $s:return Nr;case Rs:return Dr;case Ms:return Ur;case Ts:return Vr}return t});var Bs="__lodash_hash_undefined__";function Ps(e){return this.__data__.set(e,Bs),this}function As(e){return this.__data__.has(e)}function dn(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new tr;++t<n;)this.add(e[t])}dn.prototype.add=dn.prototype.push=Ps;dn.prototype.has=As;function Es(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}function Ls(e,t){return e.has(t)}var Fs=1,Ns=2;function Zo(e,t,n,r,o,i){var l=n&Fs,a=e.length,s=t.length;if(a!=s&&!(l&&s>a))return!1;var u=i.get(e),d=i.get(t);if(u&&d)return u==t&&d==e;var f=-1,h=!0,m=n&Ns?new dn:void 0;for(i.set(e,t),i.set(t,e);++f<a;){var c=e[f],v=t[f];if(r)var y=l?r(v,c,f,t,e,i):r(c,v,f,e,t,i);if(y!==void 0){if(y)continue;h=!1;break}if(m){if(!Es(t,function(p,w){if(!Ls(m,w)&&(c===p||o(c,p,n,r,i)))return m.push(w)})){h=!1;break}}else if(!(c===v||o(c,v,n,r,i))){h=!1;break}}return i.delete(e),i.delete(t),h}function Ds(e){var t=-1,n=Array(e.size);return e.forEach(function(r,o){n[++t]=[o,r]}),n}function Us(e){var t=-1,n=Array(e.size);return e.forEach(function(r){n[++t]=r}),n}var Vs=1,js=2,Hs="[object Boolean]",Ws="[object Date]",Gs="[object Error]",qs="[object Map]",Ks="[object Number]",Ys="[object RegExp]",Xs="[object Set]",Zs="[object String]",Js="[object Symbol]",Qs="[object ArrayBuffer]",ed="[object DataView]",Hr=yr?yr.prototype:void 0,Sn=Hr?Hr.valueOf:void 0;function td(e,t,n,r,o,i,l){switch(n){case ed:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case Qs:return!(e.byteLength!=t.byteLength||!i(new xr(e),new xr(t)));case Hs:case Ws:case Ks:return ll(+e,+t);case Gs:return e.name==t.name&&e.message==t.message;case Ys:case Zs:return e==t+"";case qs:var a=Ds;case Xs:var s=r&Vs;if(a||(a=Us),e.size!=t.size&&!s)return!1;var u=l.get(e);if(u)return u==t;r|=js,l.set(e,t);var d=Zo(a(e),a(t),r,o,i,l);return l.delete(e),d;case Js:if(Sn)return Sn.call(e)==Sn.call(t)}return!1}var nd=1,rd=Object.prototype,od=rd.hasOwnProperty;function id(e,t,n,r,o,i){var l=n&nd,a=Fr(e),s=a.length,u=Fr(t),d=u.length;if(s!=d&&!l)return!1;for(var f=s;f--;){var h=a[f];if(!(l?h in t:od.call(t,h)))return!1}var m=i.get(e),c=i.get(t);if(m&&c)return m==t&&c==e;var v=!0;i.set(e,t),i.set(t,e);for(var y=l;++f<s;){h=a[f];var p=e[h],w=t[h];if(r)var x=l?r(w,p,h,t,e,i):r(p,w,h,e,t,i);if(!(x===void 0?p===w||o(p,w,n,r,i):x)){v=!1;break}y||(y=h=="constructor")}if(v&&!y){var b=e.constructor,_=t.constructor;b!=_&&"constructor"in e&&"constructor"in t&&!(typeof b=="function"&&b instanceof b&&typeof _=="function"&&_ instanceof _)&&(v=!1)}return i.delete(e),i.delete(t),v}var ld=1,Wr="[object Arguments]",Gr="[object Array]",Jt="[object Object]",ad=Object.prototype,qr=ad.hasOwnProperty;function sd(e,t,n,r,o,i){var l=ot(e),a=ot(t),s=l?Gr:tt(e),u=a?Gr:tt(t);s=s==Wr?Jt:s,u=u==Wr?Jt:u;var d=s==Jt,f=u==Jt,h=s==u;if(h&&_r(e)){if(!_r(t))return!1;l=!0,d=!1}if(h&&!d)return i||(i=new on),l||al(e)?Zo(e,t,n,r,o,i):td(e,t,s,n,r,o,i);if(!(n&ld)){var m=d&&qr.call(e,"__wrapped__"),c=f&&qr.call(t,"__wrapped__");if(m||c){var v=m?e.value():e,y=c?t.value():t;return i||(i=new on),o(v,y,n,r,i)}}return h?(i||(i=new on),id(e,t,n,r,o,i)):!1}function vr(e,t,n,r,o){return e===t?!0:e==null||t==null||!Cr(e)&&!Cr(t)?e!==e&&t!==t:sd(e,t,n,r,vr,o)}var dd=1,ud=2;function cd(e,t,n,r){var o=n.length,i=o;if(e==null)return!i;for(e=Object(e);o--;){var l=n[o];if(l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++o<i;){l=n[o];var a=l[0],s=e[a],u=l[1];if(l[2]){if(s===void 0&&!(a in e))return!1}else{var d=new on,f;if(!(f===void 0?vr(u,s,dd|ud,r,d):f))return!1}}return!0}function Jo(e){return e===e&&!Pt(e)}function fd(e){for(var t=cr(e),n=t.length;n--;){var r=t[n],o=e[r];t[n]=[r,o,Jo(o)]}return t}function Qo(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}function hd(e){var t=fd(e);return t.length==1&&t[0][2]?Qo(t[0][0],t[0][1]):function(n){return n===e||cd(n,e,t)}}function pd(e,t){return e!=null&&t in Object(e)}function vd(e,t,n){t=Eo(t,e);for(var r=-1,o=t.length,i=!1;++r<o;){var l=mn(t[r]);if(!(i=e!=null&&n(e,l)))break;e=e[l]}return i||++r!=o?i:(o=e==null?0:e.length,!!o&&sl(o)&&dl(l,o)&&(ot(e)||ul(e)))}function gd(e,t){return e!=null&&vd(e,t,pd)}var md=1,bd=2;function wd(e,t){return fr(e)&&Jo(t)?Qo(mn(e),t):function(n){var r=pr(n,e);return r===void 0&&r===t?gd(n,e):vr(t,r,md|bd)}}function yd(e){return function(t){return t==null?void 0:t[e]}}function xd(e){return function(t){return Lo(t,e)}}function _d(e){return fr(e)?yd(mn(e)):xd(e)}function Cd(e){return typeof e=="function"?e:e==null?cl:typeof e=="object"?ot(e)?wd(e[0],e[1]):hd(e):_d(e)}function Sd(e,t){return e&&fl(e,t,cr)}function kd(e,t){return function(n,r){if(n==null)return n;if(!er(n))return e(n,r);for(var o=n.length,i=-1,l=Object(n);++i<o&&r(l[i],i,l)!==!1;);return n}}var Od=kd(Sd),kn=function(){return Ft.Date.now()},Id="Expected a function",zd=Math.max,$d=Math.min;function Rd(e,t,n){var r,o,i,l,a,s,u=0,d=!1,f=!1,h=!0;if(typeof e!="function")throw new TypeError(Id);t=Tr(t)||0,Pt(n)&&(d=!!n.leading,f="maxWait"in n,i=f?zd(Tr(n.maxWait)||0,t):i,h="trailing"in n?!!n.trailing:h);function m(C){var k=r,I=o;return r=o=void 0,u=C,l=e.apply(I,k),l}function c(C){return u=C,a=setTimeout(p,t),d?m(C):l}function v(C){var k=C-s,I=C-u,F=t-k;return f?$d(F,i-I):F}function y(C){var k=C-s,I=C-u;return s===void 0||k>=t||k<0||f&&I>=i}function p(){var C=kn();if(y(C))return w(C);a=setTimeout(p,v(C))}function w(C){return a=void 0,h&&r?m(C):(r=o=void 0,l)}function x(){a!==void 0&&clearTimeout(a),u=0,r=s=o=a=void 0}function b(){return a===void 0?l:w(kn())}function _(){var C=kn(),k=y(C);if(r=arguments,o=this,s=C,k){if(a===void 0)return c(s);if(f)return clearTimeout(a),a=setTimeout(p,t),m(s)}return a===void 0&&(a=setTimeout(p,t)),l}return _.cancel=x,_.flush=b,_}function Md(e,t){var n=-1,r=er(e)?Array(e.length):[];return Od(e,function(o,i,l){r[++n]=t(o,i,l)}),r}function Td(e,t){var n=ot(e)?hl:Md;return n(e,Cd(t))}var Bd=ys(function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}),Pd="Expected a function";function Ad(e,t,n){var r=!0,o=!0;if(typeof e!="function")throw new TypeError(Pd);return Pt(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),Rd(e,t,{leading:r,maxWait:t,trailing:o})}let un=[];const ei=new WeakMap;function Ed(){un.forEach(e=>e(...ei.get(e))),un=[]}function ti(e,...t){ei.set(e,t),!un.includes(e)&&un.push(e)===1&&requestAnimationFrame(Ed)}function Mt(e,t){let{target:n}=e;for(;n;){if(n.dataset&&n.dataset[t]!==void 0)return!0;n=n.parentElement}return!1}let xt,Tt;const Ld=()=>{var e,t;xt=pl?(t=(e=document)===null||e===void 0?void 0:e.fonts)===null||t===void 0?void 0:t.ready:void 0,Tt=!1,xt!==void 0?xt.then(()=>{Tt=!0}):Tt=!0};Ld();function Fd(e){if(Tt)return;let t=!1;We(()=>{Tt||xt==null||xt.then(()=>{t||e()})}),lt(()=>{t=!0})}function Et(e,t){return Ce(e,n=>{n!==void 0&&(t.value=n)}),$(()=>e.value===void 0?t.value:e.value)}function ni(e,t){return $(()=>{for(const n of t)if(e[n]!==void 0)return e[n];return e[t[t.length-1]]})}const gr=at("n-internal-select-menu"),ri=at("n-internal-select-menu-body"),oi="__disabled__";function Ze(e){const t=pe(yo,null),n=pe(xo,null),r=pe(_o,null),o=pe(ri,null),i=L();if(typeof document<"u"){i.value=document.fullscreenElement;const l=()=>{i.value=document.fullscreenElement};We(()=>{wt("fullscreenchange",document,l)}),lt(()=>{ft("fullscreenchange",document,l)})}return He(()=>{var l;const{to:a}=e;return a!==void 0?a===!1?oi:a===!0?i.value||"body":a:t!=null&&t.value?(l=t.value.$el)!==null&&l!==void 0?l:t.value:n!=null&&n.value?n.value:r!=null&&r.value?r.value:o!=null&&o.value?o.value:a??(i.value||"body")})}Ze.tdkey=oi;Ze.propTo={type:[String,Object,Boolean],default:void 0};function Nd(e,t,n){var r;const o=pe(e,null);if(o===null)return;const i=(r=Co())===null||r===void 0?void 0:r.proxy;Ce(n,l),l(n.value),lt(()=>{l(void 0,n.value)});function l(u,d){if(!o)return;const f=o[t];d!==void 0&&a(f,d),u!==void 0&&s(f,u)}function a(u,d){u[d]||(u[d]=[]),u[d].splice(u[d].findIndex(f=>f===i),1)}function s(u,d){u[d]||(u[d]=[]),~u[d].findIndex(f=>f===i)||u[d].push(i)}}let Qe=null;function ii(){if(Qe===null&&(Qe=document.getElementById("v-binder-view-measurer"),Qe===null)){Qe=document.createElement("div"),Qe.id="v-binder-view-measurer";const{style:e}=Qe;e.position="fixed",e.left="0",e.right="0",e.top="0",e.bottom="0",e.pointerEvents="none",e.visibility="hidden",document.body.appendChild(Qe)}return Qe.getBoundingClientRect()}function Dd(e,t){const n=ii();return{top:t,left:e,height:0,width:0,right:n.width-e,bottom:n.height-t}}function On(e){const t=e.getBoundingClientRect(),n=ii();return{left:t.left-n.left,top:t.top-n.top,bottom:n.height+n.top-t.bottom,right:n.width+n.left-t.right,width:t.width,height:t.height}}function Ud(e){return e.nodeType===9?null:e.parentNode}function li(e){if(e===null)return null;const t=Ud(e);if(t===null)return null;if(t.nodeType===9)return document;if(t.nodeType===1){const{overflow:n,overflowX:r,overflowY:o}=getComputedStyle(t);if(/(auto|scroll|overlay)/.test(n+o+r))return t}return li(t)}const ai=X({name:"Binder",props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(e){var t;Be("VBinder",(t=Co())===null||t===void 0?void 0:t.proxy);const n=pe("VBinder",null),r=L(null),o=p=>{r.value=p,n&&e.syncTargetWithParent&&n.setTargetRef(p)};let i=[];const l=()=>{let p=r.value;for(;p=li(p),p!==null;)i.push(p);for(const w of i)wt("scroll",w,f,!0)},a=()=>{for(const p of i)ft("scroll",p,f,!0);i=[]},s=new Set,u=p=>{s.size===0&&l(),s.has(p)||s.add(p)},d=p=>{s.has(p)&&s.delete(p),s.size===0&&a()},f=()=>{ti(h)},h=()=>{s.forEach(p=>p())},m=new Set,c=p=>{m.size===0&&wt("resize",window,y),m.has(p)||m.add(p)},v=p=>{m.has(p)&&m.delete(p),m.size===0&&ft("resize",window,y)},y=()=>{m.forEach(p=>p())};return lt(()=>{ft("resize",window,y),a()}),{targetRef:r,setTargetRef:o,addScrollListener:u,removeScrollListener:d,addResizeListener:c,removeResizeListener:v}},render(){return vl("binder",this.$slots)}}),si=X({name:"Target",setup(){const{setTargetRef:e,syncTarget:t}=pe("VBinder");return{syncTarget:t,setTargetDirective:{mounted:e,updated:e}}},render(){const{syncTarget:e,setTargetDirective:t}=this;return e?Nt(Sr("follower",this.$slots),[[t]]):Sr("follower",this.$slots)}}),pt="@@mmoContext",Vd={mounted(e,{value:t}){e[pt]={handler:void 0},typeof t=="function"&&(e[pt].handler=t,wt("mousemoveoutside",e,t))},updated(e,{value:t}){const n=e[pt];typeof t=="function"?n.handler?n.handler!==t&&(ft("mousemoveoutside",e,n.handler),n.handler=t,wt("mousemoveoutside",e,t)):(e[pt].handler=t,wt("mousemoveoutside",e,t)):n.handler&&(ft("mousemoveoutside",e,n.handler),n.handler=void 0)},unmounted(e){const{handler:t}=e[pt];t&&ft("mousemoveoutside",e,t),e[pt].handler=void 0}},{c:rt}=gl(),mr="vueuc-style";function Kr(e){return e&-e}class di{constructor(t,n){this.l=t,this.min=n;const r=new Array(t+1);for(let o=0;o<t+1;++o)r[o]=0;this.ft=r}add(t,n){if(n===0)return;const{l:r,ft:o}=this;for(t+=1;t<=r;)o[t]+=n,t+=Kr(t)}get(t){return this.sum(t+1)-this.sum(t)}sum(t){if(t===void 0&&(t=this.l),t<=0)return 0;const{ft:n,min:r,l:o}=this;if(t>o)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let i=t*r;for(;t>0;)i+=n[t],t-=Kr(t);return i}getBound(t){let n=0,r=this.l;for(;r>n;){const o=Math.floor((n+r)/2),i=this.sum(o);if(i>t){r=o;continue}else if(i<t){if(n===o)return this.sum(n+1)<=t?n+1:o;n=o}else return o}return n}}const Qt={top:"bottom",bottom:"top",left:"right",right:"left"},Yr={start:"end",center:"center",end:"start"},In={top:"height",bottom:"height",left:"width",right:"width"},jd={"bottom-start":"top left",bottom:"top center","bottom-end":"top right","top-start":"bottom left",top:"bottom center","top-end":"bottom right","right-start":"top left",right:"center left","right-end":"bottom left","left-start":"top right",left:"center right","left-end":"bottom right"},Hd={"bottom-start":"bottom left",bottom:"bottom center","bottom-end":"bottom right","top-start":"top left",top:"top center","top-end":"top right","right-start":"top right",right:"center right","right-end":"bottom right","left-start":"top left",left:"center left","left-end":"bottom left"},Wd={"bottom-start":"right","bottom-end":"left","top-start":"right","top-end":"left","right-start":"bottom","right-end":"top","left-start":"bottom","left-end":"top"},Xr={top:!0,bottom:!1,left:!0,right:!1},Zr={top:"end",bottom:"start",left:"end",right:"start"};function Gd(e,t,n,r,o,i){if(!o||i)return{placement:e,top:0,left:0};const[l,a]=e.split("-");let s=a??"center",u={top:0,left:0};const d=(m,c,v)=>{let y=0,p=0;const w=n[m]-t[c]-t[m];return w>0&&r&&(v?p=Xr[c]?w:-w:y=Xr[c]?w:-w),{left:y,top:p}},f=l==="left"||l==="right";if(s!=="center"){const m=Wd[e],c=Qt[m],v=In[m];if(n[v]>t[v]){if(t[m]+t[v]<n[v]){const y=(n[v]-t[v])/2;t[m]<y||t[c]<y?t[m]<t[c]?(s=Yr[a],u=d(v,c,f)):u=d(v,m,f):s="center"}}else n[v]<t[v]&&t[c]<0&&t[m]>t[c]&&(s=Yr[a])}else{const m=l==="bottom"||l==="top"?"left":"top",c=Qt[m],v=In[m],y=(n[v]-t[v])/2;(t[m]<y||t[c]<y)&&(t[m]>t[c]?(s=Zr[m],u=d(v,m,f)):(s=Zr[c],u=d(v,c,f)))}let h=l;return t[l]<n[In[l]]&&t[l]<t[Qt[l]]&&(h=Qt[l]),{placement:s!=="center"?`${h}-${s}`:h,left:u.left,top:u.top}}function qd(e,t){return t?Hd[e]:jd[e]}function Kd(e,t,n,r,o,i){if(i)switch(e){case"bottom-start":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-100%)"};case"bottom-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left)}px`,transform:""};case"top-end":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%)"};case"right-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%)"};case"right-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"left-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left)}px`,transform:""};case"left-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-100%)"};case"top":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width/2)}px`,transform:"translateX(-50%)"};case"right":return{top:`${Math.round(n.top-t.top+n.height/2)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-50%)"};case"left":return{top:`${Math.round(n.top-t.top+n.height/2)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-50%)"};case"bottom":default:return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width/2)}px`,transform:"translateX(-50%) translateY(-100%)"}}switch(e){case"bottom-start":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+o)}px`,transform:""};case"bottom-end":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+n.width+o)}px`,transform:"translateX(-100%)"};case"top-start":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+o)}px`,transform:"translateY(-100%)"};case"top-end":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+n.width+o)}px`,transform:"translateX(-100%) translateY(-100%)"};case"right-start":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+n.width+o)}px`,transform:""};case"right-end":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+n.width+o)}px`,transform:"translateY(-100%)"};case"left-start":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+o)}px`,transform:"translateX(-100%)"};case"left-end":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+o)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+n.width/2+o)}px`,transform:"translateY(-100%) translateX(-50%)"};case"right":return{top:`${Math.round(n.top-t.top+n.height/2+r)}px`,left:`${Math.round(n.left-t.left+n.width+o)}px`,transform:"translateY(-50%)"};case"left":return{top:`${Math.round(n.top-t.top+n.height/2+r)}px`,left:`${Math.round(n.left-t.left+o)}px`,transform:"translateY(-50%) translateX(-100%)"};case"bottom":default:return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+n.width/2+o)}px`,transform:"translateX(-50%)"}}}const Yd=rt([rt(".v-binder-follower-container",{position:"absolute",left:"0",right:"0",top:"0",height:"0",pointerEvents:"none",zIndex:"auto"}),rt(".v-binder-follower-content",{position:"absolute",zIndex:"auto"},[rt("> *",{pointerEvents:"all"})])]),ui=X({name:"Follower",inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:"bottom"},syncTrigger:{type:Array,default:["resize","scroll"]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(e){const t=pe("VBinder"),n=He(()=>e.enabled!==void 0?e.enabled:e.show),r=L(null),o=L(null),i=()=>{const{syncTrigger:h}=e;h.includes("scroll")&&t.addScrollListener(s),h.includes("resize")&&t.addResizeListener(s)},l=()=>{t.removeScrollListener(s),t.removeResizeListener(s)};We(()=>{n.value&&(s(),i())});const a=rr();Yd.mount({id:"vueuc/binder",head:!0,anchorMetaName:mr,ssr:a}),lt(()=>{l()}),Fd(()=>{n.value&&s()});const s=()=>{if(!n.value)return;const h=r.value;if(h===null)return;const m=t.targetRef,{x:c,y:v,overlap:y}=e,p=c!==void 0&&v!==void 0?Dd(c,v):On(m);h.style.setProperty("--v-target-width",`${Math.round(p.width)}px`),h.style.setProperty("--v-target-height",`${Math.round(p.height)}px`);const{width:w,minWidth:x,placement:b,internalShift:_,flip:C}=e;h.setAttribute("v-placement",b),y?h.setAttribute("v-overlap",""):h.removeAttribute("v-overlap");const{style:k}=h;w==="target"?k.width=`${p.width}px`:w!==void 0?k.width=w:k.width="",x==="target"?k.minWidth=`${p.width}px`:x!==void 0?k.minWidth=x:k.minWidth="";const I=On(h),F=On(o.value),{left:B,top:U,placement:K}=Gd(b,p,I,_,C,y),O=qd(K,y),{left:M,top:z,transform:V}=Kd(K,F,p,U,B,y);h.setAttribute("v-placement",K),h.style.setProperty("--v-offset-left",`${Math.round(B)}px`),h.style.setProperty("--v-offset-top",`${Math.round(U)}px`),h.style.transform=`translateX(${M}) translateY(${z}) ${V}`,h.style.setProperty("--v-transform-origin",O),h.style.transformOrigin=O};Ce(n,h=>{h?(i(),u()):l()});const u=()=>{_t().then(s).catch(h=>console.error(h))};["placement","x","y","internalShift","flip","width","overlap","minWidth"].forEach(h=>{Ce(te(e,h),s)}),["teleportDisabled"].forEach(h=>{Ce(te(e,h),u)}),Ce(te(e,"syncTrigger"),h=>{h.includes("resize")?t.addResizeListener(s):t.removeResizeListener(s),h.includes("scroll")?t.addScrollListener(s):t.removeScrollListener(s)});const d=or(),f=He(()=>{const{to:h}=e;if(h!==void 0)return h;d.value});return{VBinder:t,mergedEnabled:n,offsetContainerRef:o,followerRef:r,mergedTo:f,syncPosition:s}},render(){return g(ml,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{var e,t;const n=g("div",{class:["v-binder-follower-container",this.containerClass],ref:"offsetContainerRef"},[g("div",{class:"v-binder-follower-content",ref:"followerRef"},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e))]);return this.zindexable?Nt(n,[[So,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):n}})}});let en;function Xd(){return typeof document>"u"?!1:(en===void 0&&("matchMedia"in window?en=window.matchMedia("(pointer:coarse)").matches:en=!1),en)}let zn;function Jr(){return typeof document>"u"?1:(zn===void 0&&(zn="chrome"in window?window.devicePixelRatio:1),zn)}const ci="VVirtualListXScroll";function Zd({columnsRef:e,renderColRef:t,renderItemWithColsRef:n}){const r=L(0),o=L(0),i=$(()=>{const u=e.value;if(u.length===0)return null;const d=new di(u.length,0);return u.forEach((f,h)=>{d.add(h,f.width)}),d}),l=He(()=>{const u=i.value;return u!==null?Math.max(u.getBound(o.value)-1,0):0}),a=u=>{const d=i.value;return d!==null?d.sum(u):0},s=He(()=>{const u=i.value;return u!==null?Math.min(u.getBound(o.value+r.value)+1,e.value.length-1):0});return Be(ci,{startIndexRef:l,endIndexRef:s,columnsRef:e,renderColRef:t,renderItemWithColsRef:n,getLeft:a}),{listWidthRef:r,scrollLeftRef:o}}const Qr=X({name:"VirtualListRow",props:{index:{type:Number,required:!0},item:{type:Object,required:!0}},setup(){const{startIndexRef:e,endIndexRef:t,columnsRef:n,getLeft:r,renderColRef:o,renderItemWithColsRef:i}=pe(ci);return{startIndex:e,endIndex:t,columns:n,renderCol:o,renderItemWithCols:i,getLeft:r}},render(){const{startIndex:e,endIndex:t,columns:n,renderCol:r,renderItemWithCols:o,getLeft:i,item:l}=this;if(o!=null)return o({itemIndex:this.index,startColIndex:e,endColIndex:t,allColumns:n,item:l,getLeft:i});if(r!=null){const a=[];for(let s=e;s<=t;++s){const u=n[s];a.push(r({column:u,left:i(s),item:l}))}return a}return null}}),Jd=rt(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[rt("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[rt("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),Qd=X({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},columns:{type:Array,default:()=>[]},renderCol:Function,renderItemWithCols:Function,items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const t=rr();Jd.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:mr,ssr:t}),We(()=>{const{defaultScrollIndex:O,defaultScrollKey:M}=e;O!=null?y({index:O}):M!=null&&y({key:M})});let n=!1,r=!1;bl(()=>{if(n=!1,!r){r=!0;return}y({top:m.value,left:l.value})}),wl(()=>{n=!0,r||(r=!0)});const o=He(()=>{if(e.renderCol==null&&e.renderItemWithCols==null||e.columns.length===0)return;let O=0;return e.columns.forEach(M=>{O+=M.width}),O}),i=$(()=>{const O=new Map,{keyField:M}=e;return e.items.forEach((z,V)=>{O.set(z[M],V)}),O}),{scrollLeftRef:l,listWidthRef:a}=Zd({columnsRef:te(e,"columns"),renderColRef:te(e,"renderCol"),renderItemWithColsRef:te(e,"renderItemWithCols")}),s=L(null),u=L(void 0),d=new Map,f=$(()=>{const{items:O,itemSize:M,keyField:z}=e,V=new di(O.length,M);return O.forEach((H,G)=>{const Z=H[z],q=d.get(Z);q!==void 0&&V.add(G,q)}),V}),h=L(0),m=L(0),c=He(()=>Math.max(f.value.getBound(m.value-Le(e.paddingTop))-1,0)),v=$(()=>{const{value:O}=u;if(O===void 0)return[];const{items:M,itemSize:z}=e,V=c.value,H=Math.min(V+Math.ceil(O/z+1),M.length-1),G=[];for(let Z=V;Z<=H;++Z)G.push(M[Z]);return G}),y=(O,M)=>{if(typeof O=="number"){b(O,M,"auto");return}const{left:z,top:V,index:H,key:G,position:Z,behavior:q,debounce:ee=!0}=O;if(z!==void 0||V!==void 0)b(z,V,q);else if(H!==void 0)x(H,q,ee);else if(G!==void 0){const T=i.value.get(G);T!==void 0&&x(T,q,ee)}else Z==="bottom"?b(0,Number.MAX_SAFE_INTEGER,q):Z==="top"&&b(0,0,q)};let p,w=null;function x(O,M,z){const{value:V}=f,H=V.sum(O)+Le(e.paddingTop);if(!z)s.value.scrollTo({left:0,top:H,behavior:M});else{p=O,w!==null&&window.clearTimeout(w),w=window.setTimeout(()=>{p=void 0,w=null},16);const{scrollTop:G,offsetHeight:Z}=s.value;if(H>G){const q=V.get(O);H+q<=G+Z||s.value.scrollTo({left:0,top:H+q-Z,behavior:M})}else s.value.scrollTo({left:0,top:H,behavior:M})}}function b(O,M,z){s.value.scrollTo({left:O,top:M,behavior:z})}function _(O,M){var z,V,H;if(n||e.ignoreItemResize||K(M.target))return;const{value:G}=f,Z=i.value.get(O),q=G.get(Z),ee=(H=(V=(z=M.borderBoxSize)===null||z===void 0?void 0:z[0])===null||V===void 0?void 0:V.blockSize)!==null&&H!==void 0?H:M.contentRect.height;if(ee===q)return;ee-e.itemSize===0?d.delete(O):d.set(O,ee-e.itemSize);const E=ee-q;if(E===0)return;G.add(Z,E);const J=s.value;if(J!=null){if(p===void 0){const fe=G.sum(Z);J.scrollTop>fe&&J.scrollBy(0,E)}else if(Z<p)J.scrollBy(0,E);else if(Z===p){const fe=G.sum(Z);ee+fe>J.scrollTop+J.offsetHeight&&J.scrollBy(0,E)}U()}h.value++}const C=!Xd();let k=!1;function I(O){var M;(M=e.onScroll)===null||M===void 0||M.call(e,O),(!C||!k)&&U()}function F(O){var M;if((M=e.onWheel)===null||M===void 0||M.call(e,O),C){const z=s.value;if(z!=null){if(O.deltaX===0&&(z.scrollTop===0&&O.deltaY<=0||z.scrollTop+z.offsetHeight>=z.scrollHeight&&O.deltaY>=0))return;O.preventDefault(),z.scrollTop+=O.deltaY/Jr(),z.scrollLeft+=O.deltaX/Jr(),U(),k=!0,ti(()=>{k=!1})}}}function B(O){if(n||K(O.target))return;if(e.renderCol==null&&e.renderItemWithCols==null){if(O.contentRect.height===u.value)return}else if(O.contentRect.height===u.value&&O.contentRect.width===a.value)return;u.value=O.contentRect.height,a.value=O.contentRect.width;const{onResize:M}=e;M!==void 0&&M(O)}function U(){const{value:O}=s;O!=null&&(m.value=O.scrollTop,l.value=O.scrollLeft)}function K(O){let M=O;for(;M!==null;){if(M.style.display==="none")return!0;M=M.parentElement}return!1}return{listHeight:u,listStyle:{overflow:"auto"},keyToIndex:i,itemsStyle:$(()=>{const{itemResizable:O}=e,M=nt(f.value.sum());return h.value,[e.itemsStyle,{boxSizing:"content-box",width:nt(o.value),height:O?"":M,minHeight:O?M:"",paddingTop:nt(e.paddingTop),paddingBottom:nt(e.paddingBottom)}]}),visibleItemsStyle:$(()=>(h.value,{transform:`translateY(${nt(f.value.sum(c.value))})`})),viewportItems:v,listElRef:s,itemsElRef:L(null),scrollTo:y,handleListResize:B,handleListScroll:I,handleListWheel:F,handleItemResize:_}},render(){const{itemResizable:e,keyField:t,keyToIndex:n,visibleItemsTag:r}=this;return g(kr,{onResize:this.handleListResize},{default:()=>{var o,i;return g("div",ir(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?g("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[g(r,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>{const{renderCol:l,renderItemWithCols:a}=this;return this.viewportItems.map(s=>{const u=s[t],d=n.get(u),f=l!=null?g(Qr,{index:d,item:s}):void 0,h=a!=null?g(Qr,{index:d,item:s}):void 0,m=this.$slots.default({item:s,renderedCols:f,renderedItemWithCols:h,index:d})[0];return e?g(kr,{key:u,onResize:c=>this.handleItemResize(u,c)},{default:()=>m}):(m.key=u,m)})}})]):(i=(o=this.$slots).empty)===null||i===void 0?void 0:i.call(o)])}})}}),Ye="v-hidden",eu=rt("[v-hidden]",{display:"none!important"}),eo=X({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:t}){const n=L(null),r=L(null);function o(l){const{value:a}=n,{getCounter:s,getTail:u}=e;let d;if(s!==void 0?d=s():d=r.value,!a||!d)return;d.hasAttribute(Ye)&&d.removeAttribute(Ye);const{children:f}=a;if(l.showAllItemsBeforeCalculate)for(const x of f)x.hasAttribute(Ye)&&x.removeAttribute(Ye);const h=a.offsetWidth,m=[],c=t.tail?u==null?void 0:u():null;let v=c?c.offsetWidth:0,y=!1;const p=a.children.length-(t.tail?1:0);for(let x=0;x<p-1;++x){if(x<0)continue;const b=f[x];if(y){b.hasAttribute(Ye)||b.setAttribute(Ye,"");continue}else b.hasAttribute(Ye)&&b.removeAttribute(Ye);const _=b.offsetWidth;if(v+=_,m[x]=_,v>h){const{updateCounter:C}=e;for(let k=x;k>=0;--k){const I=p-1-k;C!==void 0?C(I):d.textContent=`${I}`;const F=d.offsetWidth;if(v-=m[k],v+F<=h||k===0){y=!0,x=k-1,c&&(x===-1?(c.style.maxWidth=`${h-F}px`,c.style.boxSizing="border-box"):c.style.maxWidth="");const{onUpdateCount:B}=e;B&&B(I);break}}}}const{onUpdateOverflow:w}=e;y?w!==void 0&&w(!0):(w!==void 0&&w(!1),d.setAttribute(Ye,""))}const i=rr();return eu.mount({id:"vueuc/overflow",head:!0,anchorMetaName:mr,ssr:i}),We(()=>o({showAllItemsBeforeCalculate:!1})),{selfRef:n,counterRef:r,sync:o}},render(){const{$slots:e}=this;return _t(()=>this.sync({showAllItemsBeforeCalculate:!1})),g("div",{class:"v-overflow",ref:"selfRef"},[ln(e,"default"),e.counter?e.counter():g("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function fi(e,t){t&&(We(()=>{const{value:n}=e;n&&_n.registerHandler(n,t)}),Ce(e,(n,r)=>{r&&_n.unregisterHandler(r)},{deep:!1}),lt(()=>{const{value:n}=e;n&&_n.unregisterHandler(n)}))}let $n;function tu(){return $n===void 0&&($n=navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),$n}function to(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function Rn(e){const t=e.filter(n=>n!==void 0);if(t.length!==0)return t.length===1?t[0]:n=>{e.forEach(r=>{r&&r(n)})}}function hi(e,t){const n=pe(lr,null);return $(()=>e.hljs||(n==null?void 0:n.mergedHljsRef.value))}function br(e){const{mergedLocaleRef:t,mergedDateLocaleRef:n}=pe(lr,null)||{},r=$(()=>{var i,l;return(l=(i=t==null?void 0:t.value)===null||i===void 0?void 0:i[e])!==null&&l!==void 0?l:yl[e]});return{dateLocaleRef:$(()=>{var i;return(i=n==null?void 0:n.value)!==null&&i!==void 0?i:xl}),localeRef:r}}const nu=X({name:"Checkmark",render(){return g("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},g("g",{fill:"none"},g("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),ru=X({name:"ChevronDown",render(){return g("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},g("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),ou=X({name:"ChevronRight",render(){return g("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},g("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),iu=_l("clear",()=>g("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},g("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},g("g",{fill:"currentColor","fill-rule":"nonzero"},g("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),lu=X({name:"Empty",render(){return g("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},g("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),g("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),au=A("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[Y(">",[R("clear",`
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `,[Y("&:hover",`
 color: var(--n-clear-color-hover)!important;
 `),Y("&:active",`
 color: var(--n-clear-color-pressed)!important;
 `)]),R("placeholder",`
 display: flex;
 `),R("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[Un({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),su=X({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(e){return Cl("-base-clear",au,te(e,"clsPrefix")),{handleMouseDown(t){t.preventDefault()}}},render(){const{clsPrefix:e}=this;return g("div",{class:`${e}-base-clear`},g(ko,null,{default:()=>{var t,n;return this.show?g("div",{key:"dismiss",class:`${e}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},ar(this.$slots.icon,()=>[g(Dt,{clsPrefix:e},{default:()=>g(iu,null)})])):g("div",{key:"icon",class:`${e}-base-clear__placeholder`},(n=(t=this.$slots).placeholder)===null||n===void 0?void 0:n.call(t))}}))}}),du=X({props:{onFocus:Function,onBlur:Function},setup(e){return()=>g("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}});function no(e){return Array.isArray(e)?e:[e]}const qn={STOP:"STOP"};function pi(e,t){const n=t(e);e.children!==void 0&&n!==qn.STOP&&e.children.forEach(r=>pi(r,t))}function uu(e,t={}){const{preserveGroup:n=!1}=t,r=[],o=n?l=>{l.isLeaf||(r.push(l.key),i(l.children))}:l=>{l.isLeaf||(l.isGroup||r.push(l.key),i(l.children))};function i(l){l.forEach(o)}return i(e),r}function cu(e,t){const{isLeaf:n}=e;return n!==void 0?n:!t(e)}function fu(e){return e.children}function hu(e){return e.key}function pu(){return!1}function vu(e,t){const{isLeaf:n}=e;return!(n===!1&&!Array.isArray(t(e)))}function gu(e){return e.disabled===!0}function mu(e,t){return e.isLeaf===!1&&!Array.isArray(t(e))}function Mn(e){var t;return e==null?[]:Array.isArray(e)?e:(t=e.checkedKeys)!==null&&t!==void 0?t:[]}function Tn(e){var t;return e==null||Array.isArray(e)?[]:(t=e.indeterminateKeys)!==null&&t!==void 0?t:[]}function bu(e,t){const n=new Set(e);return t.forEach(r=>{n.has(r)||n.add(r)}),Array.from(n)}function wu(e,t){const n=new Set(e);return t.forEach(r=>{n.has(r)&&n.delete(r)}),Array.from(n)}function yu(e){return(e==null?void 0:e.type)==="group"}function xu(e){const t=new Map;return e.forEach((n,r)=>{t.set(n.key,r)}),n=>{var r;return(r=t.get(n))!==null&&r!==void 0?r:null}}class _u extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function Cu(e,t,n,r){return cn(t.concat(e),n,r,!1)}function Su(e,t){const n=new Set;return e.forEach(r=>{const o=t.treeNodeMap.get(r);if(o!==void 0){let i=o.parent;for(;i!==null&&!(i.disabled||n.has(i.key));)n.add(i.key),i=i.parent}}),n}function ku(e,t,n,r){const o=cn(t,n,r,!1),i=cn(e,n,r,!0),l=Su(e,n),a=[];return o.forEach(s=>{(i.has(s)||l.has(s))&&a.push(s)}),a.forEach(s=>o.delete(s)),o}function Bn(e,t){const{checkedKeys:n,keysToCheck:r,keysToUncheck:o,indeterminateKeys:i,cascade:l,leafOnly:a,checkStrategy:s,allowNotLoaded:u}=e;if(!l)return r!==void 0?{checkedKeys:bu(n,r),indeterminateKeys:Array.from(i)}:o!==void 0?{checkedKeys:wu(n,o),indeterminateKeys:Array.from(i)}:{checkedKeys:Array.from(n),indeterminateKeys:Array.from(i)};const{levelTreeNodeMap:d}=t;let f;o!==void 0?f=ku(o,n,t,u):r!==void 0?f=Cu(r,n,t,u):f=cn(n,t,u,!1);const h=s==="parent",m=s==="child"||a,c=f,v=new Set,y=Math.max.apply(null,Array.from(d.keys()));for(let p=y;p>=0;p-=1){const w=p===0,x=d.get(p);for(const b of x){if(b.isLeaf)continue;const{key:_,shallowLoaded:C}=b;if(m&&C&&b.children.forEach(B=>{!B.disabled&&!B.isLeaf&&B.shallowLoaded&&c.has(B.key)&&c.delete(B.key)}),b.disabled||!C)continue;let k=!0,I=!1,F=!0;for(const B of b.children){const U=B.key;if(!B.disabled){if(F&&(F=!1),c.has(U))I=!0;else if(v.has(U)){I=!0,k=!1;break}else if(k=!1,I)break}}k&&!F?(h&&b.children.forEach(B=>{!B.disabled&&c.has(B.key)&&c.delete(B.key)}),c.add(_)):I&&v.add(_),w&&m&&c.has(_)&&c.delete(_)}}return{checkedKeys:Array.from(c),indeterminateKeys:Array.from(v)}}function cn(e,t,n,r){const{treeNodeMap:o,getChildren:i}=t,l=new Set,a=new Set(e);return e.forEach(s=>{const u=o.get(s);u!==void 0&&pi(u,d=>{if(d.disabled)return qn.STOP;const{key:f}=d;if(!l.has(f)&&(l.add(f),a.add(f),mu(d.rawNode,i))){if(r)return qn.STOP;if(!n)throw new _u}})}),a}function Ou(e,{includeGroup:t=!1,includeSelf:n=!0},r){var o;const i=r.treeNodeMap;let l=e==null?null:(o=i.get(e))!==null&&o!==void 0?o:null;const a={keyPath:[],treeNodePath:[],treeNode:l};if(l!=null&&l.ignored)return a.treeNode=null,a;for(;l;)!l.ignored&&(t||!l.isGroup)&&a.treeNodePath.push(l),l=l.parent;return a.treeNodePath.reverse(),n||a.treeNodePath.pop(),a.keyPath=a.treeNodePath.map(s=>s.key),a}function Iu(e){if(e.length===0)return null;const t=e[0];return t.isGroup||t.ignored||t.disabled?t.getNext():t}function zu(e,t){const n=e.siblings,r=n.length,{index:o}=e;return t?n[(o+1)%r]:o===n.length-1?null:n[o+1]}function ro(e,t,{loop:n=!1,includeDisabled:r=!1}={}){const o=t==="prev"?$u:zu,i={reverse:t==="prev"};let l=!1,a=null;function s(u){if(u!==null){if(u===e){if(!l)l=!0;else if(!e.disabled&&!e.isGroup){a=e;return}}else if((!u.disabled||r)&&!u.ignored&&!u.isGroup){a=u;return}if(u.isGroup){const d=wr(u,i);d!==null?a=d:s(o(u,n))}else{const d=o(u,!1);if(d!==null)s(d);else{const f=Ru(u);f!=null&&f.isGroup?s(o(f,n)):n&&s(o(u,!0))}}}}return s(e),a}function $u(e,t){const n=e.siblings,r=n.length,{index:o}=e;return t?n[(o-1+r)%r]:o===0?null:n[o-1]}function Ru(e){return e.parent}function wr(e,t={}){const{reverse:n=!1}=t,{children:r}=e;if(r){const{length:o}=r,i=n?o-1:0,l=n?-1:o,a=n?-1:1;for(let s=i;s!==l;s+=a){const u=r[s];if(!u.disabled&&!u.ignored)if(u.isGroup){const d=wr(u,t);if(d!==null)return d}else return u}}return null}const Mu={getChild(){return this.ignored?null:wr(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return ro(this,"next",e)},getPrev(e={}){return ro(this,"prev",e)}};function Tu(e,t){const n=t?new Set(t):void 0,r=[];function o(i){i.forEach(l=>{r.push(l),!(l.isLeaf||!l.children||l.ignored)&&(l.isGroup||n===void 0||n.has(l.key))&&o(l.children)})}return o(e),r}function Bu(e,t){const n=e.key;for(;t;){if(t.key===n)return!0;t=t.parent}return!1}function vi(e,t,n,r,o,i=null,l=0){const a=[];return e.forEach((s,u)=>{var d;const f=Object.create(r);if(f.rawNode=s,f.siblings=a,f.level=l,f.index=u,f.isFirstChild=u===0,f.isLastChild=u+1===e.length,f.parent=i,!f.ignored){const h=o(s);Array.isArray(h)&&(f.children=vi(h,t,n,r,o,f,l+1))}a.push(f),t.set(f.key,f),n.has(l)||n.set(l,[]),(d=n.get(l))===null||d===void 0||d.push(f)}),a}function Pu(e,t={}){var n;const r=new Map,o=new Map,{getDisabled:i=gu,getIgnored:l=pu,getIsGroup:a=yu,getKey:s=hu}=t,u=(n=t.getChildren)!==null&&n!==void 0?n:fu,d=t.ignoreEmptyChildren?b=>{const _=u(b);return Array.isArray(_)?_.length?_:null:_}:u,f=Object.assign({get key(){return s(this.rawNode)},get disabled(){return i(this.rawNode)},get isGroup(){return a(this.rawNode)},get isLeaf(){return cu(this.rawNode,d)},get shallowLoaded(){return vu(this.rawNode,d)},get ignored(){return l(this.rawNode)},contains(b){return Bu(this,b)}},Mu),h=vi(e,r,o,f,d);function m(b){if(b==null)return null;const _=r.get(b);return _&&!_.isGroup&&!_.ignored?_:null}function c(b){if(b==null)return null;const _=r.get(b);return _&&!_.ignored?_:null}function v(b,_){const C=c(b);return C?C.getPrev(_):null}function y(b,_){const C=c(b);return C?C.getNext(_):null}function p(b){const _=c(b);return _?_.getParent():null}function w(b){const _=c(b);return _?_.getChild():null}const x={treeNodes:h,treeNodeMap:r,levelTreeNodeMap:o,maxLevel:Math.max(...o.keys()),getChildren:d,getFlattenedNodes(b){return Tu(h,b)},getNode:m,getPrev:v,getNext:y,getParent:p,getChild:w,getFirstAvailableNode(){return Iu(h)},getPath(b,_={}){return Ou(b,_,x)},getCheckedKeys(b,_={}){const{cascade:C=!0,leafOnly:k=!1,checkStrategy:I="all",allowNotLoaded:F=!1}=_;return Bn({checkedKeys:Mn(b),indeterminateKeys:Tn(b),cascade:C,leafOnly:k,checkStrategy:I,allowNotLoaded:F},x)},check(b,_,C={}){const{cascade:k=!0,leafOnly:I=!1,checkStrategy:F="all",allowNotLoaded:B=!1}=C;return Bn({checkedKeys:Mn(_),indeterminateKeys:Tn(_),keysToCheck:b==null?[]:no(b),cascade:k,leafOnly:I,checkStrategy:F,allowNotLoaded:B},x)},uncheck(b,_,C={}){const{cascade:k=!0,leafOnly:I=!1,checkStrategy:F="all",allowNotLoaded:B=!1}=C;return Bn({checkedKeys:Mn(_),indeterminateKeys:Tn(_),keysToUncheck:b==null?[]:no(b),cascade:k,leafOnly:I,checkStrategy:F,allowNotLoaded:B},x)},getNonLeafKeys(b={}){return uu(h,b)}};return x}const Au=A("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[R("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[Y("+",[R("description",`
 margin-top: 8px;
 `)])]),R("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),R("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),Eu=Object.assign(Object.assign({},re.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),Lu=X({name:"Empty",props:Eu,slots:Object,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n,mergedComponentPropsRef:r}=Oe(e),o=re("Empty","-empty",Au,Sl,e,t),{localeRef:i}=br("Empty"),l=$(()=>{var d,f,h;return(d=e.description)!==null&&d!==void 0?d:(h=(f=r==null?void 0:r.value)===null||f===void 0?void 0:f.Empty)===null||h===void 0?void 0:h.description}),a=$(()=>{var d,f;return((f=(d=r==null?void 0:r.value)===null||d===void 0?void 0:d.Empty)===null||f===void 0?void 0:f.renderIcon)||(()=>g(lu,null))}),s=$(()=>{const{size:d}=e,{common:{cubicBezierEaseInOut:f},self:{[ne("iconSize",d)]:h,[ne("fontSize",d)]:m,textColor:c,iconColor:v,extraTextColor:y}}=o.value;return{"--n-icon-size":h,"--n-font-size":m,"--n-bezier":f,"--n-text-color":c,"--n-icon-color":v,"--n-extra-text-color":y}}),u=n?Pe("empty",$(()=>{let d="";const{size:f}=e;return d+=f[0],d}),s,e):void 0;return{mergedClsPrefix:t,mergedRenderIcon:a,localizedDescription:$(()=>l.value||i.value.description),cssVars:n?void 0:s,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:n}=this;return n==null||n(),g("div",{class:[`${t}-empty`,this.themeClass],style:this.cssVars},this.showIcon?g("div",{class:`${t}-empty__icon`},e.icon?e.icon():g(Dt,{clsPrefix:t},{default:this.mergedRenderIcon})):null,this.showDescription?g("div",{class:`${t}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?g("div",{class:`${t}-empty__extra`},e.extra()):null)}}),oo=X({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:t,labelFieldRef:n,nodePropsRef:r}=pe(gr);return{labelField:n,nodeProps:r,renderLabel:e,renderOption:t}},render(){const{clsPrefix:e,renderLabel:t,renderOption:n,nodeProps:r,tmNode:{rawNode:o}}=this,i=r==null?void 0:r(o),l=t?t(o,!1):bt(o[this.labelField],o,!1),a=g("div",Object.assign({},i,{class:[`${e}-base-select-group-header`,i==null?void 0:i.class]}),l);return o.render?o.render({node:a,option:o}):n?n({node:a,option:o,selected:!1}):a}});function Fu(e,t){return g(Ut,{name:"fade-in-scale-up-transition"},{default:()=>e?g(Dt,{clsPrefix:t,class:`${t}-base-select-option__check`},{default:()=>g(nu)}):null})}const io=X({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:t,pendingTmNodeRef:n,multipleRef:r,valueSetRef:o,renderLabelRef:i,renderOptionRef:l,labelFieldRef:a,valueFieldRef:s,showCheckmarkRef:u,nodePropsRef:d,handleOptionClick:f,handleOptionMouseEnter:h}=pe(gr),m=He(()=>{const{value:p}=n;return p?e.tmNode.key===p.key:!1});function c(p){const{tmNode:w}=e;w.disabled||f(p,w)}function v(p){const{tmNode:w}=e;w.disabled||h(p,w)}function y(p){const{tmNode:w}=e,{value:x}=m;w.disabled||x||h(p,w)}return{multiple:r,isGrouped:He(()=>{const{tmNode:p}=e,{parent:w}=p;return w&&w.rawNode.type==="group"}),showCheckmark:u,nodeProps:d,isPending:m,isSelected:He(()=>{const{value:p}=t,{value:w}=r;if(p===null)return!1;const x=e.tmNode.rawNode[s.value];if(w){const{value:b}=o;return b.has(x)}else return p===x}),labelField:a,renderLabel:i,renderOption:l,handleMouseMove:y,handleMouseEnter:v,handleClick:c}},render(){const{clsPrefix:e,tmNode:{rawNode:t},isSelected:n,isPending:r,isGrouped:o,showCheckmark:i,nodeProps:l,renderOption:a,renderLabel:s,handleClick:u,handleMouseEnter:d,handleMouseMove:f}=this,h=Fu(n,e),m=s?[s(t,n),i&&h]:[bt(t[this.labelField],t,n),i&&h],c=l==null?void 0:l(t),v=g("div",Object.assign({},c,{class:[`${e}-base-select-option`,t.class,c==null?void 0:c.class,{[`${e}-base-select-option--disabled`]:t.disabled,[`${e}-base-select-option--selected`]:n,[`${e}-base-select-option--grouped`]:o,[`${e}-base-select-option--pending`]:r,[`${e}-base-select-option--show-checkmark`]:i}],style:[(c==null?void 0:c.style)||"",t.style||""],onClick:Rn([u,c==null?void 0:c.onClick]),onMouseenter:Rn([d,c==null?void 0:c.onMouseenter]),onMousemove:Rn([f,c==null?void 0:c.onMousemove])}),g("div",{class:`${e}-base-select-option__content`},m));return t.render?t.render({node:v,option:t,selected:n}):a?a({node:v,option:t,selected:n}):v}}),Nu=A("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[A("scrollbar",`
 max-height: var(--n-height);
 `),A("virtual-list",`
 max-height: var(--n-height);
 `),A("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[R("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),A("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),A("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),R("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),R("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),R("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),R("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),A("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),A("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[D("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),Y("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),Y("&:active",`
 color: var(--n-option-text-color-pressed);
 `),D("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),D("pending",[Y("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),D("selected",`
 color: var(--n-option-text-color-active);
 `,[Y("&::before",`
 background-color: var(--n-option-color-active);
 `),D("pending",[Y("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),D("disabled",`
 cursor: not-allowed;
 `,[Te("selected",`
 color: var(--n-option-text-color-disabled);
 `),D("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),R("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[sr({enterScale:"0.5"})])])]),Du=X({name:"InternalSelectMenu",props:Object.assign(Object.assign({},re.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:n}=Oe(e),r=gn("InternalSelectMenu",n,t),o=re("InternalSelectMenu","-internal-select-menu",Nu,kl,e,te(e,"clsPrefix")),i=L(null),l=L(null),a=L(null),s=$(()=>e.treeMate.getFlattenedNodes()),u=$(()=>xu(s.value)),d=L(null);function f(){const{treeMate:T}=e;let E=null;const{value:J}=e;J===null?E=T.getFirstAvailableNode():(e.multiple?E=T.getNode((J||[])[(J||[]).length-1]):E=T.getNode(J),(!E||E.disabled)&&(E=T.getFirstAvailableNode())),M(E||null)}function h(){const{value:T}=d;T&&!e.treeMate.getNode(T.key)&&(d.value=null)}let m;Ce(()=>e.show,T=>{T?m=Ce(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?f():h(),_t(z)):h()},{immediate:!0}):m==null||m()},{immediate:!0}),lt(()=>{m==null||m()});const c=$(()=>Le(o.value.self[ne("optionHeight",e.size)])),v=$(()=>yt(o.value.self[ne("padding",e.size)])),y=$(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),p=$(()=>{const T=s.value;return T&&T.length===0});function w(T){const{onToggle:E}=e;E&&E(T)}function x(T){const{onScroll:E}=e;E&&E(T)}function b(T){var E;(E=a.value)===null||E===void 0||E.sync(),x(T)}function _(){var T;(T=a.value)===null||T===void 0||T.sync()}function C(){const{value:T}=d;return T||null}function k(T,E){E.disabled||M(E,!1)}function I(T,E){E.disabled||w(E)}function F(T){var E;Mt(T,"action")||(E=e.onKeyup)===null||E===void 0||E.call(e,T)}function B(T){var E;Mt(T,"action")||(E=e.onKeydown)===null||E===void 0||E.call(e,T)}function U(T){var E;(E=e.onMousedown)===null||E===void 0||E.call(e,T),!e.focusable&&T.preventDefault()}function K(){const{value:T}=d;T&&M(T.getNext({loop:!0}),!0)}function O(){const{value:T}=d;T&&M(T.getPrev({loop:!0}),!0)}function M(T,E=!1){d.value=T,E&&z()}function z(){var T,E;const J=d.value;if(!J)return;const fe=u.value(J.key);fe!==null&&(e.virtualScroll?(T=l.value)===null||T===void 0||T.scrollTo({index:fe}):(E=a.value)===null||E===void 0||E.scrollTo({index:fe,elSize:c.value}))}function V(T){var E,J;!((E=i.value)===null||E===void 0)&&E.contains(T.target)&&((J=e.onFocus)===null||J===void 0||J.call(e,T))}function H(T){var E,J;!((E=i.value)===null||E===void 0)&&E.contains(T.relatedTarget)||(J=e.onBlur)===null||J===void 0||J.call(e,T)}Be(gr,{handleOptionMouseEnter:k,handleOptionClick:I,valueSetRef:y,pendingTmNodeRef:d,nodePropsRef:te(e,"nodeProps"),showCheckmarkRef:te(e,"showCheckmark"),multipleRef:te(e,"multiple"),valueRef:te(e,"value"),renderLabelRef:te(e,"renderLabel"),renderOptionRef:te(e,"renderOption"),labelFieldRef:te(e,"labelField"),valueFieldRef:te(e,"valueField")}),Be(ri,i),We(()=>{const{value:T}=a;T&&T.sync()});const G=$(()=>{const{size:T}=e,{common:{cubicBezierEaseInOut:E},self:{height:J,borderRadius:fe,color:ce,groupHeaderTextColor:ye,actionDividerColor:me,optionTextColorPressed:be,optionTextColor:Ae,optionTextColorDisabled:ke,optionTextColorActive:se,optionOpacityDisabled:ve,optionCheckColor:ue,actionTextColor:Ge,optionColorPending:st,optionColorActive:dt,loadingColor:kt,loadingSize:Ot,optionColorActivePending:It,[ne("optionFontSize",T)]:ht,[ne("optionHeight",T)]:ut,[ne("optionPadding",T)]:Re}}=o.value;return{"--n-height":J,"--n-action-divider-color":me,"--n-action-text-color":Ge,"--n-bezier":E,"--n-border-radius":fe,"--n-color":ce,"--n-option-font-size":ht,"--n-group-header-text-color":ye,"--n-option-check-color":ue,"--n-option-color-pending":st,"--n-option-color-active":dt,"--n-option-color-active-pending":It,"--n-option-height":ut,"--n-option-opacity-disabled":ve,"--n-option-text-color":Ae,"--n-option-text-color-active":se,"--n-option-text-color-disabled":ke,"--n-option-text-color-pressed":be,"--n-option-padding":Re,"--n-option-padding-left":yt(Re,"left"),"--n-option-padding-right":yt(Re,"right"),"--n-loading-color":kt,"--n-loading-size":Ot}}),{inlineThemeDisabled:Z}=e,q=Z?Pe("internal-select-menu",$(()=>e.size[0]),G,e):void 0,ee={selfRef:i,next:K,prev:O,getPendingTmNode:C};return fi(i,e.onResize),Object.assign({mergedTheme:o,mergedClsPrefix:t,rtlEnabled:r,virtualListRef:l,scrollbarRef:a,itemSize:c,padding:v,flattenedNodes:s,empty:p,virtualListContainer(){const{value:T}=l;return T==null?void 0:T.listElRef},virtualListContent(){const{value:T}=l;return T==null?void 0:T.itemsElRef},doScroll:x,handleFocusin:V,handleFocusout:H,handleKeyUp:F,handleKeyDown:B,handleMouseDown:U,handleVirtualListResize:_,handleVirtualListScroll:b,cssVars:Z?void 0:G,themeClass:q==null?void 0:q.themeClass,onRender:q==null?void 0:q.onRender},ee)},render(){const{$slots:e,virtualScroll:t,clsPrefix:n,mergedTheme:r,themeClass:o,onRender:i}=this;return i==null||i(),g("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${n}-base-select-menu`,this.rtlEnabled&&`${n}-base-select-menu--rtl`,o,this.multiple&&`${n}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},Me(e.header,l=>l&&g("div",{class:`${n}-base-select-menu__header`,"data-header":!0,key:"header"},l)),this.loading?g("div",{class:`${n}-base-select-menu__loading`},g(pn,{clsPrefix:n,strokeWidth:20})):this.empty?g("div",{class:`${n}-base-select-menu__empty`,"data-empty":!0},ar(e.empty,()=>[g(Lu,{theme:r.peers.Empty,themeOverrides:r.peerOverrides.Empty,size:this.size})])):g(vn,{ref:"scrollbarRef",theme:r.peers.Scrollbar,themeOverrides:r.peerOverrides.Scrollbar,scrollable:this.scrollable,container:t?this.virtualListContainer:void 0,content:t?this.virtualListContent:void 0,onScroll:t?void 0:this.doScroll},{default:()=>t?g(Qd,{ref:"virtualListRef",class:`${n}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:l})=>l.isGroup?g(oo,{key:l.key,clsPrefix:n,tmNode:l}):l.ignored?null:g(io,{clsPrefix:n,key:l.key,tmNode:l})}):g("div",{class:`${n}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(l=>l.isGroup?g(oo,{key:l.key,clsPrefix:n,tmNode:l}):g(io,{clsPrefix:n,key:l.key,tmNode:l})))}),Me(e.action,l=>l&&[g("div",{class:`${n}-base-select-menu__action`,"data-action":!0,key:"action"},l),g(du,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),Pn={top:"bottom",bottom:"top",left:"right",right:"left"},_e="var(--n-arrow-height) * 1.414",Uu=Y([A("popover",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `,[Y(">",[A("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),Te("raw",`
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,[Te("scrollable",[Te("show-header-or-footer","padding: var(--n-padding);")])]),R("header",`
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),R("footer",`
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),D("scrollable, show-header-or-footer",[R("content",`
 padding: var(--n-padding);
 `)])]),A("popover-shared",`
 transform-origin: inherit;
 `,[A("popover-arrow-wrapper",`
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,[A("popover-arrow",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${_e});
 height: calc(${_e});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),Y("&.popover-transition-enter-from, &.popover-transition-leave-to",`
 opacity: 0;
 transform: scale(.85);
 `),Y("&.popover-transition-enter-to, &.popover-transition-leave-from",`
 transform: scale(1);
 opacity: 1;
 `),Y("&.popover-transition-enter-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),Y("&.popover-transition-leave-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]),Ve("top-start",`
 top: calc(${_e} / -2);
 left: calc(${Xe("top-start")} - var(--v-offset-left));
 `),Ve("top",`
 top: calc(${_e} / -2);
 transform: translateX(calc(${_e} / -2)) rotate(45deg);
 left: 50%;
 `),Ve("top-end",`
 top: calc(${_e} / -2);
 right: calc(${Xe("top-end")} + var(--v-offset-left));
 `),Ve("bottom-start",`
 bottom: calc(${_e} / -2);
 left: calc(${Xe("bottom-start")} - var(--v-offset-left));
 `),Ve("bottom",`
 bottom: calc(${_e} / -2);
 transform: translateX(calc(${_e} / -2)) rotate(45deg);
 left: 50%;
 `),Ve("bottom-end",`
 bottom: calc(${_e} / -2);
 right: calc(${Xe("bottom-end")} + var(--v-offset-left));
 `),Ve("left-start",`
 left: calc(${_e} / -2);
 top: calc(${Xe("left-start")} - var(--v-offset-top));
 `),Ve("left",`
 left: calc(${_e} / -2);
 transform: translateY(calc(${_e} / -2)) rotate(45deg);
 top: 50%;
 `),Ve("left-end",`
 left: calc(${_e} / -2);
 bottom: calc(${Xe("left-end")} + var(--v-offset-top));
 `),Ve("right-start",`
 right: calc(${_e} / -2);
 top: calc(${Xe("right-start")} - var(--v-offset-top));
 `),Ve("right",`
 right: calc(${_e} / -2);
 transform: translateY(calc(${_e} / -2)) rotate(45deg);
 top: 50%;
 `),Ve("right-end",`
 right: calc(${_e} / -2);
 bottom: calc(${Xe("right-end")} + var(--v-offset-top));
 `),...Td({top:["right-start","left-start"],right:["top-end","bottom-end"],bottom:["right-end","left-end"],left:["top-start","bottom-start"]},(e,t)=>{const n=["right","left"].includes(t),r=n?"width":"height";return e.map(o=>{const i=o.split("-")[1]==="end",a=`calc((${`var(--v-target-${r}, 0px)`} - ${_e}) / 2)`,s=Xe(o);return Y(`[v-placement="${o}"] >`,[A("popover-shared",[D("center-arrow",[A("popover-arrow",`${t}: calc(max(${a}, ${s}) ${i?"+":"-"} var(--v-offset-${n?"left":"top"}));`)])])])})})]);function Xe(e){return["top","bottom"].includes(e.split("-")[0])?"var(--n-arrow-offset)":"var(--n-arrow-offset-vertical)"}function Ve(e,t){const n=e.split("-")[0],r=["top","bottom"].includes(n)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return Y(`[v-placement="${e}"] >`,[A("popover-shared",`
 margin-${Pn[n]}: var(--n-space);
 `,[D("show-arrow",`
 margin-${Pn[n]}: var(--n-space-arrow);
 `),D("overlap",`
 margin: 0;
 `),Ol("popover-arrow-wrapper",`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${n}: 100%;
 ${Pn[n]}: auto;
 ${r}
 `,[A("popover-arrow",t)])])])}const gi=Object.assign(Object.assign({},re.props),{to:Ze.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowClass:String,arrowStyle:[String,Object],arrowWrapperClass:String,arrowWrapperStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number});function Vu({arrowClass:e,arrowStyle:t,arrowWrapperClass:n,arrowWrapperStyle:r,clsPrefix:o}){return g("div",{key:"__popover-arrow__",style:r,class:[`${o}-popover-arrow-wrapper`,n]},g("div",{class:[`${o}-popover-arrow`,e],style:t}))}const ju=X({name:"PopoverBody",inheritAttrs:!1,props:gi,setup(e,{slots:t,attrs:n}){const{namespaceRef:r,mergedClsPrefixRef:o,inlineThemeDisabled:i}=Oe(e),l=re("Popover","-popover",Uu,Il,e,o),a=L(null),s=pe("NPopover"),u=L(null),d=L(e.show),f=L(!1);dr(()=>{const{show:k}=e;k&&!tu()&&!e.internalDeactivateImmediately&&(f.value=!0)});const h=$(()=>{const{trigger:k,onClickoutside:I}=e,F=[],{positionManuallyRef:{value:B}}=s;return B||(k==="click"&&!I&&F.push([sn,b,void 0,{capture:!0}]),k==="hover"&&F.push([Vd,x])),I&&F.push([sn,b,void 0,{capture:!0}]),(e.displayDirective==="show"||e.animated&&f.value)&&F.push([Oo,e.show]),F}),m=$(()=>{const{common:{cubicBezierEaseInOut:k,cubicBezierEaseIn:I,cubicBezierEaseOut:F},self:{space:B,spaceArrow:U,padding:K,fontSize:O,textColor:M,dividerColor:z,color:V,boxShadow:H,borderRadius:G,arrowHeight:Z,arrowOffset:q,arrowOffsetVertical:ee}}=l.value;return{"--n-box-shadow":H,"--n-bezier":k,"--n-bezier-ease-in":I,"--n-bezier-ease-out":F,"--n-font-size":O,"--n-text-color":M,"--n-color":V,"--n-divider-color":z,"--n-border-radius":G,"--n-arrow-height":Z,"--n-arrow-offset":q,"--n-arrow-offset-vertical":ee,"--n-padding":K,"--n-space":B,"--n-space-arrow":U}}),c=$(()=>{const k=e.width==="trigger"?void 0:Ke(e.width),I=[];k&&I.push({width:k});const{maxWidth:F,minWidth:B}=e;return F&&I.push({maxWidth:Ke(F)}),B&&I.push({maxWidth:Ke(B)}),i||I.push(m.value),I}),v=i?Pe("popover",void 0,m,e):void 0;s.setBodyInstance({syncPosition:y}),lt(()=>{s.setBodyInstance(null)}),Ce(te(e,"show"),k=>{e.animated||(k?d.value=!0:d.value=!1)});function y(){var k;(k=a.value)===null||k===void 0||k.syncPosition()}function p(k){e.trigger==="hover"&&e.keepAliveOnHover&&e.show&&s.handleMouseEnter(k)}function w(k){e.trigger==="hover"&&e.keepAliveOnHover&&s.handleMouseLeave(k)}function x(k){e.trigger==="hover"&&!_().contains(Vn(k))&&s.handleMouseMoveOutside(k)}function b(k){(e.trigger==="click"&&!_().contains(Vn(k))||e.onClickoutside)&&s.handleClickOutside(k)}function _(){return s.getTriggerElement()}Be(_o,u),Be(xo,null),Be(yo,null);function C(){if(v==null||v.onRender(),!(e.displayDirective==="show"||e.show||e.animated&&f.value))return null;let I;const F=s.internalRenderBodyRef.value,{value:B}=o;if(F)I=F([`${B}-popover-shared`,v==null?void 0:v.themeClass.value,e.overlap&&`${B}-popover-shared--overlap`,e.showArrow&&`${B}-popover-shared--show-arrow`,e.arrowPointToCenter&&`${B}-popover-shared--center-arrow`],u,c.value,p,w);else{const{value:U}=s.extraClassRef,{internalTrapFocus:K}=e,O=!Rt(t.header)||!Rt(t.footer),M=()=>{var z,V;const H=O?g(ur,null,Me(t.header,q=>q?g("div",{class:[`${B}-popover__header`,e.headerClass],style:e.headerStyle},q):null),Me(t.default,q=>q?g("div",{class:[`${B}-popover__content`,e.contentClass],style:e.contentStyle},t):null),Me(t.footer,q=>q?g("div",{class:[`${B}-popover__footer`,e.footerClass],style:e.footerStyle},q):null)):e.scrollable?(z=t.default)===null||z===void 0?void 0:z.call(t):g("div",{class:[`${B}-popover__content`,e.contentClass],style:e.contentStyle},t),G=e.scrollable?g($l,{contentClass:O?void 0:`${B}-popover__content ${(V=e.contentClass)!==null&&V!==void 0?V:""}`,contentStyle:O?void 0:e.contentStyle},{default:()=>H}):H,Z=e.showArrow?Vu({arrowClass:e.arrowClass,arrowStyle:e.arrowStyle,arrowWrapperClass:e.arrowWrapperClass,arrowWrapperStyle:e.arrowWrapperStyle,clsPrefix:B}):null;return[G,Z]};I=g("div",ir({class:[`${B}-popover`,`${B}-popover-shared`,v==null?void 0:v.themeClass.value,U.map(z=>`${B}-${z}`),{[`${B}-popover--scrollable`]:e.scrollable,[`${B}-popover--show-header-or-footer`]:O,[`${B}-popover--raw`]:e.raw,[`${B}-popover-shared--overlap`]:e.overlap,[`${B}-popover-shared--show-arrow`]:e.showArrow,[`${B}-popover-shared--center-arrow`]:e.arrowPointToCenter}],ref:u,style:c.value,onKeydown:s.handleKeydown,onMouseenter:p,onMouseleave:w},n),K?g(zl,{active:e.show,autoFocus:!0},{default:M}):M())}return Nt(I,h.value)}return{displayed:f,namespace:r,isMounted:s.isMountedRef,zIndex:s.zIndexRef,followerRef:a,adjustedTo:Ze(e),followerEnabled:d,renderContentNode:C}},render(){return g(ui,{ref:"followerRef",zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===Ze.tdkey},{default:()=>this.animated?g(Ut,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{var e;(e=this.internalOnAfterLeave)===null||e===void 0||e.call(this),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}}),Hu=Object.keys(gi),Wu={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function Gu(e,t,n){Wu[t].forEach(r=>{e.props?e.props=Object.assign({},e.props):e.props={};const o=e.props[r],i=n[r];o?e.props[r]=(...l)=>{o(...l),i(...l)}:e.props[r]=i})}const mi={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowClass:String,arrowStyle:[String,Object],arrowWrapperClass:String,arrowWrapperStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:Ze.propTo,scrollable:Boolean,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},qu=Object.assign(Object.assign(Object.assign({},re.props),mi),{internalOnAfterLeave:Function,internalRenderBody:Function}),bi=X({name:"Popover",inheritAttrs:!1,props:qu,slots:Object,__popover__:!0,setup(e){const t=or(),n=L(null),r=$(()=>e.show),o=L(e.defaultShow),i=Et(r,o),l=He(()=>e.disabled?!1:i.value),a=()=>{if(e.disabled)return!0;const{getDisabled:z}=e;return!!(z!=null&&z())},s=()=>a()?!1:i.value,u=ni(e,["arrow","showArrow"]),d=$(()=>e.overlap?!1:u.value);let f=null;const h=L(null),m=L(null),c=He(()=>e.x!==void 0&&e.y!==void 0);function v(z){const{"onUpdate:show":V,onUpdateShow:H,onShow:G,onHide:Z}=e;o.value=z,V&&he(V,z),H&&he(H,z),z&&G&&he(G,!0),z&&Z&&he(Z,!1)}function y(){f&&f.syncPosition()}function p(){const{value:z}=h;z&&(window.clearTimeout(z),h.value=null)}function w(){const{value:z}=m;z&&(window.clearTimeout(z),m.value=null)}function x(){const z=a();if(e.trigger==="focus"&&!z){if(s())return;v(!0)}}function b(){const z=a();if(e.trigger==="focus"&&!z){if(!s())return;v(!1)}}function _(){const z=a();if(e.trigger==="hover"&&!z){if(w(),h.value!==null||s())return;const V=()=>{v(!0),h.value=null},{delay:H}=e;H===0?V():h.value=window.setTimeout(V,H)}}function C(){const z=a();if(e.trigger==="hover"&&!z){if(p(),m.value!==null||!s())return;const V=()=>{v(!1),m.value=null},{duration:H}=e;H===0?V():m.value=window.setTimeout(V,H)}}function k(){C()}function I(z){var V;s()&&(e.trigger==="click"&&(p(),w(),v(!1)),(V=e.onClickoutside)===null||V===void 0||V.call(e,z))}function F(){if(e.trigger==="click"&&!a()){p(),w();const z=!s();v(z)}}function B(z){e.internalTrapFocus&&z.key==="Escape"&&(p(),w(),v(!1))}function U(z){o.value=z}function K(){var z;return(z=n.value)===null||z===void 0?void 0:z.targetRef}function O(z){f=z}return Be("NPopover",{getTriggerElement:K,handleKeydown:B,handleMouseEnter:_,handleMouseLeave:C,handleClickOutside:I,handleMouseMoveOutside:k,setBodyInstance:O,positionManuallyRef:c,isMountedRef:t,zIndexRef:te(e,"zIndex"),extraClassRef:te(e,"internalExtraClass"),internalRenderBodyRef:te(e,"internalRenderBody")}),dr(()=>{i.value&&a()&&v(!1)}),{binderInstRef:n,positionManually:c,mergedShowConsideringDisabledProp:l,uncontrolledShow:o,mergedShowArrow:d,getMergedShow:s,setShow:U,handleClick:F,handleMouseEnter:_,handleMouseLeave:C,handleFocus:x,handleBlur:b,syncPosition:y}},render(){var e;const{positionManually:t,$slots:n}=this;let r,o=!1;if(!t&&(r=Rl(n,"trigger"),r)){r=Ml(r),r=r.type===Tl?g("span",[r]):r;const i={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(!((e=r.type)===null||e===void 0)&&e.__popover__)o=!0,r.props||(r.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),r.props.internalSyncTargetWithParent=!0,r.props.internalInheritedEventHandlers?r.props.internalInheritedEventHandlers=[i,...r.props.internalInheritedEventHandlers]:r.props.internalInheritedEventHandlers=[i];else{const{internalInheritedEventHandlers:l}=this,a=[i,...l],s={onBlur:u=>{a.forEach(d=>{d.onBlur(u)})},onFocus:u=>{a.forEach(d=>{d.onFocus(u)})},onClick:u=>{a.forEach(d=>{d.onClick(u)})},onMouseenter:u=>{a.forEach(d=>{d.onMouseenter(u)})},onMouseleave:u=>{a.forEach(d=>{d.onMouseleave(u)})}};Gu(r,l?"nested":t?"manual":this.trigger,s)}}return g(ai,{ref:"binderInstRef",syncTarget:!o,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const i=this.getMergedShow();return[this.internalTrapFocus&&i?Nt(g("div",{style:{position:"fixed",top:0,right:0,bottom:0,left:0}}),[[So,{enabled:i,zIndex:this.zIndex}]]):null,t?null:g(si,null,{default:()=>r}),g(ju,Bl(this.$props,Hu,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:i})),{default:()=>{var l,a;return(a=(l=this.$slots).default)===null||a===void 0?void 0:a.call(l)},header:()=>{var l,a;return(a=(l=this.$slots).header)===null||a===void 0?void 0:a.call(l)},footer:()=>{var l,a;return(a=(l=this.$slots).footer)===null||a===void 0?void 0:a.call(l)}})]}})}}),Ku={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},Yu=A("tag",`
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[D("strong",`
 font-weight: var(--n-font-weight-strong);
 `),R("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),R("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),R("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),R("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),D("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[R("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),R("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),D("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),D("icon, avatar",[D("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),D("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),D("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[Te("disabled",[Y("&:hover","background-color: var(--n-color-hover-checkable);",[Te("checked","color: var(--n-text-color-hover-checkable);")]),Y("&:active","background-color: var(--n-color-pressed-checkable);",[Te("checked","color: var(--n-text-color-pressed-checkable);")])]),D("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[Te("disabled",[Y("&:hover","background-color: var(--n-color-checked-hover);"),Y("&:active","background-color: var(--n-color-checked-pressed);")])])])]),Xu=Object.assign(Object.assign(Object.assign({},re.props),Ku),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),Zu=at("n-tag"),An=X({name:"Tag",props:Xu,slots:Object,setup(e){const t=L(null),{mergedBorderedRef:n,mergedClsPrefixRef:r,inlineThemeDisabled:o,mergedRtlRef:i}=Oe(e),l=re("Tag","-tag",Yu,Al,e,r);Be(Zu,{roundRef:te(e,"round")});function a(){if(!e.disabled&&e.checkable){const{checked:m,onCheckedChange:c,onUpdateChecked:v,"onUpdate:checked":y}=e;v&&v(!m),y&&y(!m),c&&c(!m)}}function s(m){if(e.triggerClickOnClose||m.stopPropagation(),!e.disabled){const{onClose:c}=e;c&&he(c,m)}}const u={setTextContent(m){const{value:c}=t;c&&(c.textContent=m)}},d=gn("Tag",i,r),f=$(()=>{const{type:m,size:c,color:{color:v,textColor:y}={}}=e,{common:{cubicBezierEaseInOut:p},self:{padding:w,closeMargin:x,borderRadius:b,opacityDisabled:_,textColorCheckable:C,textColorHoverCheckable:k,textColorPressedCheckable:I,textColorChecked:F,colorCheckable:B,colorHoverCheckable:U,colorPressedCheckable:K,colorChecked:O,colorCheckedHover:M,colorCheckedPressed:z,closeBorderRadius:V,fontWeightStrong:H,[ne("colorBordered",m)]:G,[ne("closeSize",c)]:Z,[ne("closeIconSize",c)]:q,[ne("fontSize",c)]:ee,[ne("height",c)]:T,[ne("color",m)]:E,[ne("textColor",m)]:J,[ne("border",m)]:fe,[ne("closeIconColor",m)]:ce,[ne("closeIconColorHover",m)]:ye,[ne("closeIconColorPressed",m)]:me,[ne("closeColorHover",m)]:be,[ne("closeColorPressed",m)]:Ae}}=l.value,ke=yt(x);return{"--n-font-weight-strong":H,"--n-avatar-size-override":`calc(${T} - 8px)`,"--n-bezier":p,"--n-border-radius":b,"--n-border":fe,"--n-close-icon-size":q,"--n-close-color-pressed":Ae,"--n-close-color-hover":be,"--n-close-border-radius":V,"--n-close-icon-color":ce,"--n-close-icon-color-hover":ye,"--n-close-icon-color-pressed":me,"--n-close-icon-color-disabled":ce,"--n-close-margin-top":ke.top,"--n-close-margin-right":ke.right,"--n-close-margin-bottom":ke.bottom,"--n-close-margin-left":ke.left,"--n-close-size":Z,"--n-color":v||(n.value?G:E),"--n-color-checkable":B,"--n-color-checked":O,"--n-color-checked-hover":M,"--n-color-checked-pressed":z,"--n-color-hover-checkable":U,"--n-color-pressed-checkable":K,"--n-font-size":ee,"--n-height":T,"--n-opacity-disabled":_,"--n-padding":w,"--n-text-color":y||J,"--n-text-color-checkable":C,"--n-text-color-checked":F,"--n-text-color-hover-checkable":k,"--n-text-color-pressed-checkable":I}}),h=o?Pe("tag",$(()=>{let m="";const{type:c,size:v,color:{color:y,textColor:p}={}}=e;return m+=c[0],m+=v[0],y&&(m+=`a${Or(y)}`),p&&(m+=`b${Or(p)}`),n.value&&(m+="c"),m}),f,e):void 0;return Object.assign(Object.assign({},u),{rtlEnabled:d,mergedClsPrefix:r,contentRef:t,mergedBordered:n,handleClick:a,handleCloseClick:s,cssVars:o?void 0:f,themeClass:h==null?void 0:h.themeClass,onRender:h==null?void 0:h.onRender})},render(){var e,t;const{mergedClsPrefix:n,rtlEnabled:r,closable:o,color:{borderColor:i}={},round:l,onRender:a,$slots:s}=this;a==null||a();const u=Me(s.avatar,f=>f&&g("div",{class:`${n}-tag__avatar`},f)),d=Me(s.icon,f=>f&&g("div",{class:`${n}-tag__icon`},f));return g("div",{class:[`${n}-tag`,this.themeClass,{[`${n}-tag--rtl`]:r,[`${n}-tag--strong`]:this.strong,[`${n}-tag--disabled`]:this.disabled,[`${n}-tag--checkable`]:this.checkable,[`${n}-tag--checked`]:this.checkable&&this.checked,[`${n}-tag--round`]:l,[`${n}-tag--avatar`]:u,[`${n}-tag--icon`]:d,[`${n}-tag--closable`]:o}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},d||u,g("span",{class:`${n}-tag__content`,ref:"contentRef"},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e)),!this.checkable&&o?g(Pl,{clsPrefix:n,class:`${n}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:l,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?g("div",{class:`${n}-tag__border`,style:{borderColor:i}}):null)}}),Ju=X({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(e,{slots:t}){return()=>{const{clsPrefix:n}=e;return g(pn,{clsPrefix:n,class:`${n}-base-suffix`,strokeWidth:24,scale:.85,show:e.loading},{default:()=>e.showArrow?g(su,{clsPrefix:n,show:e.showClear,onClear:e.onClear},{placeholder:()=>g(Dt,{clsPrefix:n,class:`${n}-base-suffix__arrow`},{default:()=>ar(t.default,()=>[g(ru,null)])})}):null})}}}),Qu=Y([A("base-selection",`
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[A("base-loading",`
 color: var(--n-loading-color);
 `),A("base-selection-tags","min-height: var(--n-height);"),R("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),R("state-border",`
 z-index: 1;
 border-color: #0000;
 `),A("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[R("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),A("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[R("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),A("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[R("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),A("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),A("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[A("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[R("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),R("render-label",`
 color: var(--n-text-color);
 `)]),Te("disabled",[Y("&:hover",[R("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),D("focus",[R("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),D("active",[R("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),A("base-selection-label","background-color: var(--n-color-active);"),A("base-selection-tags","background-color: var(--n-color-active);")])]),D("disabled","cursor: not-allowed;",[R("arrow",`
 color: var(--n-arrow-color-disabled);
 `),A("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[A("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),R("render-label",`
 color: var(--n-text-color-disabled);
 `)]),A("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),A("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),A("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[R("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),R("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>D(`${e}-status`,[R("state-border",`border: var(--n-border-${e});`),Te("disabled",[Y("&:hover",[R("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),D("active",[R("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),A("base-selection-label",`background-color: var(--n-color-active-${e});`),A("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),D("focus",[R("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),A("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),A("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[Y("&:last-child","padding-right: 0;"),A("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[R("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),ec=X({name:"InternalSelection",props:Object.assign(Object.assign({},re.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:n}=Oe(e),r=gn("InternalSelection",n,t),o=L(null),i=L(null),l=L(null),a=L(null),s=L(null),u=L(null),d=L(null),f=L(null),h=L(null),m=L(null),c=L(!1),v=L(!1),y=L(!1),p=re("InternalSelection","-internal-selection",Qu,Ll,e,te(e,"clsPrefix")),w=$(()=>e.clearable&&!e.disabled&&(y.value||e.active)),x=$(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):bt(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),b=$(()=>{const P=e.selectedOption;if(P)return P[e.labelField]}),_=$(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function C(){var P;const{value:W}=o;if(W){const{value:we}=i;we&&(we.style.width=`${W.offsetWidth}px`,e.maxTagCount!=="responsive"&&((P=h.value)===null||P===void 0||P.sync({showAllItemsBeforeCalculate:!1})))}}function k(){const{value:P}=m;P&&(P.style.display="none")}function I(){const{value:P}=m;P&&(P.style.display="inline-block")}Ce(te(e,"active"),P=>{P||k()}),Ce(te(e,"pattern"),()=>{e.multiple&&_t(C)});function F(P){const{onFocus:W}=e;W&&W(P)}function B(P){const{onBlur:W}=e;W&&W(P)}function U(P){const{onDeleteOption:W}=e;W&&W(P)}function K(P){const{onClear:W}=e;W&&W(P)}function O(P){const{onPatternInput:W}=e;W&&W(P)}function M(P){var W;(!P.relatedTarget||!(!((W=l.value)===null||W===void 0)&&W.contains(P.relatedTarget)))&&F(P)}function z(P){var W;!((W=l.value)===null||W===void 0)&&W.contains(P.relatedTarget)||B(P)}function V(P){K(P)}function H(){y.value=!0}function G(){y.value=!1}function Z(P){!e.active||!e.filterable||P.target!==i.value&&P.preventDefault()}function q(P){U(P)}const ee=L(!1);function T(P){if(P.key==="Backspace"&&!ee.value&&!e.pattern.length){const{selectedOptions:W}=e;W!=null&&W.length&&q(W[W.length-1])}}let E=null;function J(P){const{value:W}=o;if(W){const we=P.target.value;W.textContent=we,C()}e.ignoreComposition&&ee.value?E=P:O(P)}function fe(){ee.value=!0}function ce(){ee.value=!1,e.ignoreComposition&&O(E),E=null}function ye(P){var W;v.value=!0,(W=e.onPatternFocus)===null||W===void 0||W.call(e,P)}function me(P){var W;v.value=!1,(W=e.onPatternBlur)===null||W===void 0||W.call(e,P)}function be(){var P,W;if(e.filterable)v.value=!1,(P=u.value)===null||P===void 0||P.blur(),(W=i.value)===null||W===void 0||W.blur();else if(e.multiple){const{value:we}=a;we==null||we.blur()}else{const{value:we}=s;we==null||we.blur()}}function Ae(){var P,W,we;e.filterable?(v.value=!1,(P=u.value)===null||P===void 0||P.focus()):e.multiple?(W=a.value)===null||W===void 0||W.focus():(we=s.value)===null||we===void 0||we.focus()}function ke(){const{value:P}=i;P&&(I(),P.focus())}function se(){const{value:P}=i;P&&P.blur()}function ve(P){const{value:W}=d;W&&W.setTextContent(`+${P}`)}function ue(){const{value:P}=f;return P}function Ge(){return i.value}let st=null;function dt(){st!==null&&window.clearTimeout(st)}function kt(){e.active||(dt(),st=window.setTimeout(()=>{_.value&&(c.value=!0)},100))}function Ot(){dt()}function It(P){P||(dt(),c.value=!1)}Ce(_,P=>{P||(c.value=!1)}),We(()=>{dr(()=>{const P=u.value;P&&(e.disabled?P.removeAttribute("tabindex"):P.tabIndex=v.value?-1:0)})}),fi(l,e.onResize);const{inlineThemeDisabled:ht}=e,ut=$(()=>{const{size:P}=e,{common:{cubicBezierEaseInOut:W},self:{fontWeight:we,borderRadius:bn,color:wn,placeholderColor:Ht,textColor:Wt,paddingSingle:Gt,paddingMultiple:yn,caretColor:xn,colorDisabled:qt,textColorDisabled:Je,placeholderColorDisabled:S,colorActive:N,boxShadowFocus:Q,boxShadowActive:de,boxShadowHover:le,border:ie,borderFocus:ae,borderHover:xe,borderActive:qe,arrowColor:$i,arrowColorDisabled:Ri,loadingColor:Mi,colorActiveWarning:Ti,boxShadowFocusWarning:Bi,boxShadowActiveWarning:Pi,boxShadowHoverWarning:Ai,borderWarning:Ei,borderFocusWarning:Li,borderHoverWarning:Fi,borderActiveWarning:Ni,colorActiveError:Di,boxShadowFocusError:Ui,boxShadowActiveError:Vi,boxShadowHoverError:ji,borderError:Hi,borderFocusError:Wi,borderHoverError:Gi,borderActiveError:qi,clearColor:Ki,clearColorHover:Yi,clearColorPressed:Xi,clearSize:Zi,arrowSize:Ji,[ne("height",P)]:Qi,[ne("fontSize",P)]:el}}=p.value,Kt=yt(Gt),Yt=yt(yn);return{"--n-bezier":W,"--n-border":ie,"--n-border-active":qe,"--n-border-focus":ae,"--n-border-hover":xe,"--n-border-radius":bn,"--n-box-shadow-active":de,"--n-box-shadow-focus":Q,"--n-box-shadow-hover":le,"--n-caret-color":xn,"--n-color":wn,"--n-color-active":N,"--n-color-disabled":qt,"--n-font-size":el,"--n-height":Qi,"--n-padding-single-top":Kt.top,"--n-padding-multiple-top":Yt.top,"--n-padding-single-right":Kt.right,"--n-padding-multiple-right":Yt.right,"--n-padding-single-left":Kt.left,"--n-padding-multiple-left":Yt.left,"--n-padding-single-bottom":Kt.bottom,"--n-padding-multiple-bottom":Yt.bottom,"--n-placeholder-color":Ht,"--n-placeholder-color-disabled":S,"--n-text-color":Wt,"--n-text-color-disabled":Je,"--n-arrow-color":$i,"--n-arrow-color-disabled":Ri,"--n-loading-color":Mi,"--n-color-active-warning":Ti,"--n-box-shadow-focus-warning":Bi,"--n-box-shadow-active-warning":Pi,"--n-box-shadow-hover-warning":Ai,"--n-border-warning":Ei,"--n-border-focus-warning":Li,"--n-border-hover-warning":Fi,"--n-border-active-warning":Ni,"--n-color-active-error":Di,"--n-box-shadow-focus-error":Ui,"--n-box-shadow-active-error":Vi,"--n-box-shadow-hover-error":ji,"--n-border-error":Hi,"--n-border-focus-error":Wi,"--n-border-hover-error":Gi,"--n-border-active-error":qi,"--n-clear-size":Zi,"--n-clear-color":Ki,"--n-clear-color-hover":Yi,"--n-clear-color-pressed":Xi,"--n-arrow-size":Ji,"--n-font-weight":we}}),Re=ht?Pe("internal-selection",$(()=>e.size[0]),ut,e):void 0;return{mergedTheme:p,mergedClearable:w,mergedClsPrefix:t,rtlEnabled:r,patternInputFocused:v,filterablePlaceholder:x,label:b,selected:_,showTagsPanel:c,isComposing:ee,counterRef:d,counterWrapperRef:f,patternInputMirrorRef:o,patternInputRef:i,selfRef:l,multipleElRef:a,singleElRef:s,patternInputWrapperRef:u,overflowRef:h,inputTagElRef:m,handleMouseDown:Z,handleFocusin:M,handleClear:V,handleMouseEnter:H,handleMouseLeave:G,handleDeleteOption:q,handlePatternKeyDown:T,handlePatternInputInput:J,handlePatternInputBlur:me,handlePatternInputFocus:ye,handleMouseEnterCounter:kt,handleMouseLeaveCounter:Ot,handleFocusout:z,handleCompositionEnd:ce,handleCompositionStart:fe,onPopoverUpdateShow:It,focus:Ae,focusInput:ke,blur:be,blurInput:se,updateCounter:ve,getCounter:ue,getTail:Ge,renderLabel:e.renderLabel,cssVars:ht?void 0:ut,themeClass:Re==null?void 0:Re.themeClass,onRender:Re==null?void 0:Re.onRender}},render(){const{status:e,multiple:t,size:n,disabled:r,filterable:o,maxTagCount:i,bordered:l,clsPrefix:a,ellipsisTagPopoverProps:s,onRender:u,renderTag:d,renderLabel:f}=this;u==null||u();const h=i==="responsive",m=typeof i=="number",c=h||m,v=g(El,null,{default:()=>g(Ju,{clsPrefix:a,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var p,w;return(w=(p=this.$slots).arrow)===null||w===void 0?void 0:w.call(p)}})});let y;if(t){const{labelField:p}=this,w=O=>g("div",{class:`${a}-base-selection-tag-wrapper`,key:O.value},d?d({option:O,handleClose:()=>{this.handleDeleteOption(O)}}):g(An,{size:n,closable:!O.disabled,disabled:r,onClose:()=>{this.handleDeleteOption(O)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>f?f(O,!0):bt(O[p],O,!0)})),x=()=>(m?this.selectedOptions.slice(0,i):this.selectedOptions).map(w),b=o?g("div",{class:`${a}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},g("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:r,value:this.pattern,autofocus:this.autofocus,class:`${a}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),g("span",{ref:"patternInputMirrorRef",class:`${a}-base-selection-input-tag__mirror`},this.pattern)):null,_=h?()=>g("div",{class:`${a}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},g(An,{size:n,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:r})):void 0;let C;if(m){const O=this.selectedOptions.length-i;O>0&&(C=g("div",{class:`${a}-base-selection-tag-wrapper`,key:"__counter__"},g(An,{size:n,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:r},{default:()=>`+${O}`})))}const k=h?o?g(eo,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:x,counter:_,tail:()=>b}):g(eo,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:x,counter:_}):m&&C?x().concat(C):x(),I=c?()=>g("div",{class:`${a}-base-selection-popover`},h?x():this.selectedOptions.map(w)):void 0,F=c?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},s):null,U=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?g("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`},g("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)):null,K=o?g("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-tags`},k,h?null:b,v):g("div",{ref:"multipleElRef",class:`${a}-base-selection-tags`,tabindex:r?void 0:0},k,v);y=g(ur,null,c?g(bi,Object.assign({},F,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>K,default:I}):K,U)}else if(o){const p=this.pattern||this.isComposing,w=this.active?!p:!this.selected,x=this.active?!1:this.selected;y=g("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-label`,title:this.patternInputFocused?void 0:to(this.label)},g("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${a}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:r,disabled:r,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),x?g("div",{class:`${a}-base-selection-label__render-label ${a}-base-selection-overlay`,key:"input"},g("div",{class:`${a}-base-selection-overlay__wrapper`},d?d({option:this.selectedOption,handleClose:()=>{}}):f?f(this.selectedOption,!0):bt(this.label,this.selectedOption,!0))):null,w?g("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},g("div",{class:`${a}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,v)}else y=g("div",{ref:"singleElRef",class:`${a}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?g("div",{class:`${a}-base-selection-input`,title:to(this.label),key:"input"},g("div",{class:`${a}-base-selection-input__content`},d?d({option:this.selectedOption,handleClose:()=>{}}):f?f(this.selectedOption,!0):bt(this.label,this.selectedOption,!0))):g("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},g("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)),v);return g("div",{ref:"selfRef",class:[`${a}-base-selection`,this.rtlEnabled&&`${a}-base-selection--rtl`,this.themeClass,e&&`${a}-base-selection--${e}-status`,{[`${a}-base-selection--active`]:this.active,[`${a}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${a}-base-selection--disabled`]:this.disabled,[`${a}-base-selection--multiple`]:this.multiple,[`${a}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},y,l?g("div",{class:`${a}-base-selection__border`}):null,l?g("div",{class:`${a}-base-selection__state-border`}):null)}});function fn(e){return e.type==="group"}function wi(e){return e.type==="ignored"}function En(e,t){try{return!!(1+t.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function tc(e,t){return{getIsGroup:fn,getIgnored:wi,getKey(r){return fn(r)?r.name||r.key||"key-required":r[e]},getChildren(r){return r[t]}}}function nc(e,t,n,r){if(!t)return e;function o(i){if(!Array.isArray(i))return[];const l=[];for(const a of i)if(fn(a)){const s=o(a[r]);s.length&&l.push(Object.assign({},a,{[r]:s}))}else{if(wi(a))continue;t(n,a)&&l.push(a)}return l}return o(e)}function rc(e,t,n){const r=new Map;return e.forEach(o=>{fn(o)?o[n].forEach(i=>{r.set(i[t],i)}):r.set(o[t],o)}),r}const oc=Y([A("code",`
 font-size: var(--n-font-size);
 font-family: var(--n-font-family);
 `,[D("show-line-numbers",`
 display: flex;
 `),R("line-numbers",`
 user-select: none;
 padding-right: 12px;
 text-align: right;
 transition: color .3s var(--n-bezier);
 color: var(--n-line-number-text-color);
 `),D("word-wrap",[Y("pre",`
 white-space: pre-wrap;
 word-break: break-all;
 `)]),Y("pre",`
 margin: 0;
 line-height: inherit;
 font-size: inherit;
 font-family: inherit;
 `),Y("[class^=hljs]",`
 color: var(--n-text-color);
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),({props:e})=>{const t=`${e.bPrefix}code`;return[`${t} .hljs-comment,
 ${t} .hljs-quote {
 color: var(--n-mono-3);
 font-style: italic;
 }`,`${t} .hljs-doctag,
 ${t} .hljs-keyword,
 ${t} .hljs-formula {
 color: var(--n-hue-3);
 }`,`${t} .hljs-section,
 ${t} .hljs-name,
 ${t} .hljs-selector-tag,
 ${t} .hljs-deletion,
 ${t} .hljs-subst {
 color: var(--n-hue-5);
 }`,`${t} .hljs-literal {
 color: var(--n-hue-1);
 }`,`${t} .hljs-string,
 ${t} .hljs-regexp,
 ${t} .hljs-addition,
 ${t} .hljs-attribute,
 ${t} .hljs-meta-string {
 color: var(--n-hue-4);
 }`,`${t} .hljs-built_in,
 ${t} .hljs-class .hljs-title {
 color: var(--n-hue-6-2);
 }`,`${t} .hljs-attr,
 ${t} .hljs-variable,
 ${t} .hljs-template-variable,
 ${t} .hljs-type,
 ${t} .hljs-selector-class,
 ${t} .hljs-selector-attr,
 ${t} .hljs-selector-pseudo,
 ${t} .hljs-number {
 color: var(--n-hue-6);
 }`,`${t} .hljs-symbol,
 ${t} .hljs-bullet,
 ${t} .hljs-link,
 ${t} .hljs-meta,
 ${t} .hljs-selector-id,
 ${t} .hljs-title {
 color: var(--n-hue-2);
 }`,`${t} .hljs-emphasis {
 font-style: italic;
 }`,`${t} .hljs-strong {
 font-weight: var(--n-font-weight-strong);
 }`,`${t} .hljs-link {
 text-decoration: underline;
 }`]}]),ic=Object.assign(Object.assign({},re.props),{language:String,code:{type:String,default:""},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,wordWrap:Boolean,showLineNumbers:Boolean,internalFontSize:Number,internalNoHighlight:Boolean}),lc=X({name:"Code",props:ic,setup(e,{slots:t}){const{internalNoHighlight:n}=e,{mergedClsPrefixRef:r,inlineThemeDisabled:o}=Oe(),i=L(null),l=n?{value:void 0}:hi(e),a=(m,c,v)=>{const{value:y}=l;return!y||!(m&&y.getLanguage(m))?null:y.highlight(v?c.trim():c,{language:m}).value},s=$(()=>e.inline||e.wordWrap?!1:e.showLineNumbers),u=()=>{if(t.default)return;const{value:m}=i;if(!m)return;const{language:c}=e,v=e.uri?window.decodeURIComponent(e.code):e.code;if(c){const p=a(c,v,e.trim);if(p!==null){if(e.inline)m.innerHTML=p;else{const w=m.querySelector(".__code__");w&&m.removeChild(w);const x=document.createElement("pre");x.className="__code__",x.innerHTML=p,m.appendChild(x)}return}}if(e.inline){m.textContent=v;return}const y=m.querySelector(".__code__");if(y)y.textContent=v;else{const p=document.createElement("pre");p.className="__code__",p.textContent=v,m.innerHTML="",m.appendChild(p)}};We(u),Ce(te(e,"language"),u),Ce(te(e,"code"),u),n||Ce(l,u);const d=re("Code","-code",oc,Fl,e,r),f=$(()=>{const{common:{cubicBezierEaseInOut:m,fontFamilyMono:c},self:{textColor:v,fontSize:y,fontWeightStrong:p,lineNumberTextColor:w,"mono-3":x,"hue-1":b,"hue-2":_,"hue-3":C,"hue-4":k,"hue-5":I,"hue-5-2":F,"hue-6":B,"hue-6-2":U}}=d.value,{internalFontSize:K}=e;return{"--n-font-size":K?`${K}px`:y,"--n-font-family":c,"--n-font-weight-strong":p,"--n-bezier":m,"--n-text-color":v,"--n-mono-3":x,"--n-hue-1":b,"--n-hue-2":_,"--n-hue-3":C,"--n-hue-4":k,"--n-hue-5":I,"--n-hue-5-2":F,"--n-hue-6":B,"--n-hue-6-2":U,"--n-line-number-text-color":w}}),h=o?Pe("code",$(()=>`${e.internalFontSize||"a"}`),f,e):void 0;return{mergedClsPrefix:r,codeRef:i,mergedShowLineNumbers:s,lineNumbers:$(()=>{let m=1;const c=[];let v=!1;for(const y of e.code)y===`
`?(v=!0,c.push(m++)):v=!1;return v||c.push(m++),c.join(`
`)}),cssVars:o?void 0:f,themeClass:h==null?void 0:h.themeClass,onRender:h==null?void 0:h.onRender}},render(){var e,t;const{mergedClsPrefix:n,wordWrap:r,mergedShowLineNumbers:o,onRender:i}=this;return i==null||i(),g("code",{class:[`${n}-code`,this.themeClass,r&&`${n}-code--word-wrap`,o&&`${n}-code--show-line-numbers`],style:this.cssVars,ref:"codeRef"},o?g("pre",{class:`${n}-code__line-numbers`},this.lineNumbers):null,(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e))}}),ac=Y([A("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),A("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[sr({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),sc=Object.assign(Object.assign({},re.props),{to:Ze.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),dc=X({name:"Select",props:sc,slots:Object,setup(e){const{mergedClsPrefixRef:t,mergedBorderedRef:n,namespaceRef:r,inlineThemeDisabled:o}=Oe(e),i=re("Select","-select",ac,Nl,e,t),l=L(e.defaultValue),a=te(e,"value"),s=Et(a,l),u=L(!1),d=L(""),f=ni(e,["items","options"]),h=L([]),m=L([]),c=$(()=>m.value.concat(h.value).concat(f.value)),v=$(()=>{const{filter:S}=e;if(S)return S;const{labelField:N,valueField:Q}=e;return(de,le)=>{if(!le)return!1;const ie=le[N];if(typeof ie=="string")return En(de,ie);const ae=le[Q];return typeof ae=="string"?En(de,ae):typeof ae=="number"?En(de,String(ae)):!1}}),y=$(()=>{if(e.remote)return f.value;{const{value:S}=c,{value:N}=d;return!N.length||!e.filterable?S:nc(S,v.value,N,e.childrenField)}}),p=$(()=>{const{valueField:S,childrenField:N}=e,Q=tc(S,N);return Pu(y.value,Q)}),w=$(()=>rc(c.value,e.valueField,e.childrenField)),x=L(!1),b=Et(te(e,"show"),x),_=L(null),C=L(null),k=L(null),{localeRef:I}=br("Select"),F=$(()=>{var S;return(S=e.placeholder)!==null&&S!==void 0?S:I.value.placeholder}),B=[],U=L(new Map),K=$(()=>{const{fallbackOption:S}=e;if(S===void 0){const{labelField:N,valueField:Q}=e;return de=>({[N]:String(de),[Q]:de})}return S===!1?!1:N=>Object.assign(S(N),{value:N})});function O(S){const N=e.remote,{value:Q}=U,{value:de}=w,{value:le}=K,ie=[];return S.forEach(ae=>{if(de.has(ae))ie.push(de.get(ae));else if(N&&Q.has(ae))ie.push(Q.get(ae));else if(le){const xe=le(ae);xe&&ie.push(xe)}}),ie}const M=$(()=>{if(e.multiple){const{value:S}=s;return Array.isArray(S)?O(S):[]}return null}),z=$(()=>{const{value:S}=s;return!e.multiple&&!Array.isArray(S)?S===null?null:O([S])[0]||null:null}),V=Io(e),{mergedSizeRef:H,mergedDisabledRef:G,mergedStatusRef:Z}=V;function q(S,N){const{onChange:Q,"onUpdate:value":de,onUpdateValue:le}=e,{nTriggerFormChange:ie,nTriggerFormInput:ae}=V;Q&&he(Q,S,N),le&&he(le,S,N),de&&he(de,S,N),l.value=S,ie(),ae()}function ee(S){const{onBlur:N}=e,{nTriggerFormBlur:Q}=V;N&&he(N,S),Q()}function T(){const{onClear:S}=e;S&&he(S)}function E(S){const{onFocus:N,showOnFocus:Q}=e,{nTriggerFormFocus:de}=V;N&&he(N,S),de(),Q&&me()}function J(S){const{onSearch:N}=e;N&&he(N,S)}function fe(S){const{onScroll:N}=e;N&&he(N,S)}function ce(){var S;const{remote:N,multiple:Q}=e;if(N){const{value:de}=U;if(Q){const{valueField:le}=e;(S=M.value)===null||S===void 0||S.forEach(ie=>{de.set(ie[le],ie)})}else{const le=z.value;le&&de.set(le[e.valueField],le)}}}function ye(S){const{onUpdateShow:N,"onUpdate:show":Q}=e;N&&he(N,S),Q&&he(Q,S),x.value=S}function me(){G.value||(ye(!0),x.value=!0,e.filterable&&Gt())}function be(){ye(!1)}function Ae(){d.value="",m.value=B}const ke=L(!1);function se(){e.filterable&&(ke.value=!0)}function ve(){e.filterable&&(ke.value=!1,b.value||Ae())}function ue(){G.value||(b.value?e.filterable?Gt():be():me())}function Ge(S){var N,Q;!((Q=(N=k.value)===null||N===void 0?void 0:N.selfRef)===null||Q===void 0)&&Q.contains(S.relatedTarget)||(u.value=!1,ee(S),be())}function st(S){E(S),u.value=!0}function dt(){u.value=!0}function kt(S){var N;!((N=_.value)===null||N===void 0)&&N.$el.contains(S.relatedTarget)||(u.value=!1,ee(S),be())}function Ot(){var S;(S=_.value)===null||S===void 0||S.focus(),be()}function It(S){var N;b.value&&(!((N=_.value)===null||N===void 0)&&N.$el.contains(Vn(S))||be())}function ht(S){if(!Array.isArray(S))return[];if(K.value)return Array.from(S);{const{remote:N}=e,{value:Q}=w;if(N){const{value:de}=U;return S.filter(le=>Q.has(le)||de.has(le))}else return S.filter(de=>Q.has(de))}}function ut(S){Re(S.rawNode)}function Re(S){if(G.value)return;const{tag:N,remote:Q,clearFilterAfterSelect:de,valueField:le}=e;if(N&&!Q){const{value:ie}=m,ae=ie[0]||null;if(ae){const xe=h.value;xe.length?xe.push(ae):h.value=[ae],m.value=B}}if(Q&&U.value.set(S[le],S),e.multiple){const ie=ht(s.value),ae=ie.findIndex(xe=>xe===S[le]);if(~ae){if(ie.splice(ae,1),N&&!Q){const xe=P(S[le]);~xe&&(h.value.splice(xe,1),de&&(d.value=""))}}else ie.push(S[le]),de&&(d.value="");q(ie,O(ie))}else{if(N&&!Q){const ie=P(S[le]);~ie?h.value=[h.value[ie]]:h.value=B}Wt(),be(),q(S[le],S)}}function P(S){return h.value.findIndex(Q=>Q[e.valueField]===S)}function W(S){b.value||me();const{value:N}=S.target;d.value=N;const{tag:Q,remote:de}=e;if(J(N),Q&&!de){if(!N){m.value=B;return}const{onCreate:le}=e,ie=le?le(N):{[e.labelField]:N,[e.valueField]:N},{valueField:ae,labelField:xe}=e;f.value.some(qe=>qe[ae]===ie[ae]||qe[xe]===ie[xe])||h.value.some(qe=>qe[ae]===ie[ae]||qe[xe]===ie[xe])?m.value=B:m.value=[ie]}}function we(S){S.stopPropagation();const{multiple:N}=e;!N&&e.filterable&&be(),T(),N?q([],[]):q(null,null)}function bn(S){!Mt(S,"action")&&!Mt(S,"empty")&&!Mt(S,"header")&&S.preventDefault()}function wn(S){fe(S)}function Ht(S){var N,Q,de,le,ie;if(!e.keyboard){S.preventDefault();return}switch(S.key){case" ":if(e.filterable)break;S.preventDefault();case"Enter":if(!(!((N=_.value)===null||N===void 0)&&N.isComposing)){if(b.value){const ae=(Q=k.value)===null||Q===void 0?void 0:Q.getPendingTmNode();ae?ut(ae):e.filterable||(be(),Wt())}else if(me(),e.tag&&ke.value){const ae=m.value[0];if(ae){const xe=ae[e.valueField],{value:qe}=s;e.multiple&&Array.isArray(qe)&&qe.includes(xe)||Re(ae)}}}S.preventDefault();break;case"ArrowUp":if(S.preventDefault(),e.loading)return;b.value&&((de=k.value)===null||de===void 0||de.prev());break;case"ArrowDown":if(S.preventDefault(),e.loading)return;b.value?(le=k.value)===null||le===void 0||le.next():me();break;case"Escape":b.value&&(Dl(S),be()),(ie=_.value)===null||ie===void 0||ie.focus();break}}function Wt(){var S;(S=_.value)===null||S===void 0||S.focus()}function Gt(){var S;(S=_.value)===null||S===void 0||S.focusInput()}function yn(){var S;b.value&&((S=C.value)===null||S===void 0||S.syncPosition())}ce(),Ce(te(e,"options"),ce);const xn={focus:()=>{var S;(S=_.value)===null||S===void 0||S.focus()},focusInput:()=>{var S;(S=_.value)===null||S===void 0||S.focusInput()},blur:()=>{var S;(S=_.value)===null||S===void 0||S.blur()},blurInput:()=>{var S;(S=_.value)===null||S===void 0||S.blurInput()}},qt=$(()=>{const{self:{menuBoxShadow:S}}=i.value;return{"--n-menu-box-shadow":S}}),Je=o?Pe("select",void 0,qt,e):void 0;return Object.assign(Object.assign({},xn),{mergedStatus:Z,mergedClsPrefix:t,mergedBordered:n,namespace:r,treeMate:p,isMounted:or(),triggerRef:_,menuRef:k,pattern:d,uncontrolledShow:x,mergedShow:b,adjustedTo:Ze(e),uncontrolledValue:l,mergedValue:s,followerRef:C,localizedPlaceholder:F,selectedOption:z,selectedOptions:M,mergedSize:H,mergedDisabled:G,focused:u,activeWithoutMenuOpen:ke,inlineThemeDisabled:o,onTriggerInputFocus:se,onTriggerInputBlur:ve,handleTriggerOrMenuResize:yn,handleMenuFocus:dt,handleMenuBlur:kt,handleMenuTabOut:Ot,handleTriggerClick:ue,handleToggle:ut,handleDeleteOption:Re,handlePatternInput:W,handleClear:we,handleTriggerBlur:Ge,handleTriggerFocus:st,handleKeydown:Ht,handleMenuAfterLeave:Ae,handleMenuClickOutside:It,handleMenuScroll:wn,handleMenuKeydown:Ht,handleMenuMousedown:bn,mergedTheme:i,cssVars:o?void 0:qt,themeClass:Je==null?void 0:Je.themeClass,onRender:Je==null?void 0:Je.onRender})},render(){return g("div",{class:`${this.mergedClsPrefix}-select`},g(ai,null,{default:()=>[g(si,null,{default:()=>g(ec,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,t;return[(t=(e=this.$slots).arrow)===null||t===void 0?void 0:t.call(e)]}})}),g(ui,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===Ze.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>g(Ut,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,t,n;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),Nt(g(Du,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(t=this.menuProps)===null||t===void 0?void 0:t.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(n=this.menuProps)===null||n===void 0?void 0:n.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var r,o;return[(o=(r=this.$slots).empty)===null||o===void 0?void 0:o.call(r)]},header:()=>{var r,o;return[(o=(r=this.$slots).header)===null||o===void 0?void 0:o.call(r)]},action:()=>{var r,o;return[(o=(r=this.$slots).action)===null||o===void 0?void 0:o.call(r)]}}),this.displayDirective==="show"?[[Oo,this.mergedShow],[sn,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[sn,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}}),uc=Object.assign(Object.assign({},mi),re.props),cc=X({name:"Tooltip",props:uc,slots:Object,__popover__:!0,setup(e){const{mergedClsPrefixRef:t}=Oe(e),n=re("Tooltip","-tooltip",void 0,Ul,e,t),r=L(null);return Object.assign(Object.assign({},{syncPosition(){r.value.syncPosition()},setShow(i){r.value.setShow(i)}}),{popoverRef:r,mergedTheme:n,popoverThemeOverrides:$(()=>n.value.self)})},render(){const{mergedTheme:e,internalExtraClass:t}=this;return g(bi,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:t.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),fc=A("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[D("color-transition",{transition:"color .3s var(--n-bezier)"}),D("depth",{color:"var(--n-color)"},[Y("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),Y("svg",{height:"1em",width:"1em"})]),hc=Object.assign(Object.assign({},re.props),{depth:[String,Number],size:[Number,String],color:String,component:[Object,Function]}),yi=X({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:hc,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=Oe(e),r=re("Icon","-icon",fc,Vl,e,t),o=$(()=>{const{depth:l}=e,{common:{cubicBezierEaseInOut:a},self:s}=r.value;if(l!==void 0){const{color:u,[`opacity${l}Depth`]:d}=s;return{"--n-bezier":a,"--n-color":u,"--n-opacity":d}}return{"--n-bezier":a,"--n-color":"","--n-opacity":""}}),i=n?Pe("icon",$(()=>`${e.depth||"d"}`),o,e):void 0;return{mergedClsPrefix:t,mergedStyle:$(()=>{const{size:l,color:a}=e;return{fontSize:Ke(l),color:a}}),cssVars:n?void 0:o,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{$parent:t,depth:n,mergedClsPrefix:r,component:o,onRender:i,themeClass:l}=this;return!((e=t==null?void 0:t.$options)===null||e===void 0)&&e._n_icon__&&At("icon","don't wrap `n-icon` inside `n-icon`"),i==null||i(),g("i",ir(this.$attrs,{role:"img",class:[`${r}-icon`,l,{[`${r}-icon--depth`]:n,[`${r}-icon--color-transition`]:n!==void 0}],style:[this.cssVars,this.mergedStyle]}),o?g(o):this.$slots)}});function ih(){const e=pe(Hl,null);return e===null&&jl("use-dialog","No outer <n-dialog-provider /> founded."),e}const pc=A("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[Te("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[Te("no-title",`
 display: flex;
 align-items: center;
 `)]),R("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),D("title-position-left",[R("line",[D("left",{width:"28px"})])]),D("title-position-right",[R("line",[D("right",{width:"28px"})])]),D("dashed",[R("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),D("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),R("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),Te("dashed",[R("line",{backgroundColor:"var(--n-color)"})]),D("dashed",[R("line",{borderColor:"var(--n-color)"})]),D("vertical",{backgroundColor:"var(--n-color)"})]),vc=Object.assign(Object.assign({},re.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),lh=X({name:"Divider",props:vc,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=Oe(e),r=re("Divider","-divider",pc,Wl,e,t),o=$(()=>{const{common:{cubicBezierEaseInOut:l},self:{color:a,textColor:s,fontWeight:u}}=r.value;return{"--n-bezier":l,"--n-color":a,"--n-text-color":s,"--n-font-weight":u}}),i=n?Pe("divider",void 0,o,e):void 0;return{mergedClsPrefix:t,cssVars:n?void 0:o,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{$slots:t,titlePlacement:n,vertical:r,dashed:o,cssVars:i,mergedClsPrefix:l}=this;return(e=this.onRender)===null||e===void 0||e.call(this),g("div",{role:"separator",class:[`${l}-divider`,this.themeClass,{[`${l}-divider--vertical`]:r,[`${l}-divider--no-title`]:!t.default,[`${l}-divider--dashed`]:o,[`${l}-divider--title-position-${n}`]:t.default&&n}],style:i},r?null:g("div",{class:`${l}-divider__line ${l}-divider__line--left`}),!r&&t.default?g(ur,null,g("div",{class:`${l}-divider__title`},this.$slots),g("div",{class:`${l}-divider__line ${l}-divider__line--right`})):null)}});let Ln;function gc(){if(!Gl)return!0;if(Ln===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const t=e.scrollHeight===1;return document.body.removeChild(e),Ln=t}return Ln}const mc=Object.assign(Object.assign({},re.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,reverse:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemClass:String,itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),ah=X({name:"Space",props:mc,setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:n}=Oe(e),r=re("Space","-space",void 0,Zl,e,t),o=gn("Space",n,t);return{useGap:gc(),rtlEnabled:o,mergedClsPrefix:t,margin:$(()=>{const{size:i}=e;if(Array.isArray(i))return{horizontal:i[0],vertical:i[1]};if(typeof i=="number")return{horizontal:i,vertical:i};const{self:{[ne("gap",i)]:l}}=r.value,{row:a,col:s}=Xl(l);return{horizontal:Le(s),vertical:Le(a)}})}},render(){const{vertical:e,reverse:t,align:n,inline:r,justify:o,itemClass:i,itemStyle:l,margin:a,wrap:s,mergedClsPrefix:u,rtlEnabled:d,useGap:f,wrapItem:h,internalUseGap:m}=this,c=ql(Kl(this),!1);if(!c.length)return null;const v=`${a.horizontal}px`,y=`${a.horizontal/2}px`,p=`${a.vertical}px`,w=`${a.vertical/2}px`,x=c.length-1,b=o.startsWith("space-");return g("div",{role:"none",class:[`${u}-space`,d&&`${u}-space--rtl`],style:{display:r?"inline-flex":"flex",flexDirection:e&&!t?"column":e&&t?"column-reverse":!e&&t?"row-reverse":"row",justifyContent:["start","end"].includes(o)?`flex-${o}`:o,flexWrap:!s||e?"nowrap":"wrap",marginTop:f||e?"":`-${w}`,marginBottom:f||e?"":`-${w}`,alignItems:n,gap:f?`${a.vertical}px ${a.horizontal}px`:""}},!h&&(f||m)?c:c.map((_,C)=>_.type===Yl?_:g("div",{role:"none",class:i,style:[l,{maxWidth:"100%"},f?"":e?{marginBottom:C!==x?p:""}:d?{marginLeft:b?o==="space-between"&&C===x?"":y:C!==x?v:"",marginRight:b?o==="space-between"&&C===0?"":y:"",paddingTop:w,paddingBottom:w}:{marginRight:b?o==="space-between"&&C===x?"":y:C!==x?v:"",marginLeft:b?o==="space-between"&&C===0?"":y:"",paddingTop:w,paddingBottom:w}]},_)))}}),bc=Object.assign(Object.assign({},re.props),{tag:{type:String,default:"div"}}),sh=X({name:"Element",alias:["El"],props:bc,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=Oe(e),r=re("Element","-element",void 0,Jl,e,t),o=$(()=>{const{common:l}=r.value;return Object.keys(l).reduce((a,s)=>(a[`--${Bd(s)}`]=l[s],a),{})}),i=n?Pe("element",void 0,o,e):void 0;return{mergedClsPrefix:t,cssVars:n?void 0:o,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{tag:t,mergedClsPrefix:n,cssVars:r,themeClass:o,onRender:i,$slots:l}=this;return i==null||i(),g(t,{role:"none",class:[`${n}-element`,o],style:r},(e=l.default)===null||e===void 0?void 0:e.call(l))}}),Vt=at("n-form"),xi=at("n-form-item-insts"),wc=A("form",[D("inline",`
 width: 100%;
 display: inline-flex;
 align-items: flex-start;
 align-content: space-around;
 `,[A("form-item",{width:"auto",marginRight:"18px"},[Y("&:last-child",{marginRight:0})])])]);var yc=function(e,t,n,r){function o(i){return i instanceof n?i:new n(function(l){l(i)})}return new(n||(n=Promise))(function(i,l){function a(d){try{u(r.next(d))}catch(f){l(f)}}function s(d){try{u(r.throw(d))}catch(f){l(f)}}function u(d){d.done?i(d.value):o(d.value).then(a,s)}u((r=r.apply(e,t||[])).next())})};const xc=Object.assign(Object.assign({},re.props),{inline:Boolean,labelWidth:[Number,String],labelAlign:String,labelPlacement:{type:String,default:"top"},model:{type:Object,default:()=>{}},rules:Object,disabled:Boolean,size:String,showRequireMark:{type:Boolean,default:void 0},requireMarkPlacement:String,showFeedback:{type:Boolean,default:!0},onSubmit:{type:Function,default:e=>{e.preventDefault()}},showLabel:{type:Boolean,default:void 0},validateMessages:Object}),_c=X({name:"Form",props:xc,setup(e){const{mergedClsPrefixRef:t}=Oe(e);re("Form","-form",wc,zo,e,t);const n={},r=L(void 0),o=s=>{const u=r.value;(u===void 0||s>=u)&&(r.value=s)};function i(s){return yc(this,arguments,void 0,function*(u,d=()=>!0){return yield new Promise((f,h)=>{const m=[];for(const c of Ir(n)){const v=n[c];for(const y of v)y.path&&m.push(y.internalValidate(null,d))}Promise.all(m).then(c=>{const v=c.some(w=>!w.valid),y=[],p=[];c.forEach(w=>{var x,b;!((x=w.errors)===null||x===void 0)&&x.length&&y.push(w.errors),!((b=w.warnings)===null||b===void 0)&&b.length&&p.push(w.warnings)}),u&&u(y.length?y:void 0,{warnings:p.length?p:void 0}),v?h(y.length?y:void 0):f({warnings:p.length?p:void 0})})})})}function l(){for(const s of Ir(n)){const u=n[s];for(const d of u)d.restoreValidation()}}return Be(Vt,{props:e,maxChildLabelWidthRef:r,deriveMaxChildLabelWidth:o}),Be(xi,{formItems:n}),Object.assign({validate:i,restoreValidation:l},{mergedClsPrefix:t})},render(){const{mergedClsPrefix:e}=this;return g("form",{class:[`${e}-form`,this.inline&&`${e}-form--inline`],onSubmit:this.onSubmit},this.$slots)}});function ct(){return ct=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ct.apply(this,arguments)}function Cc(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Lt(e,t)}function Kn(e){return Kn=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Kn(e)}function Lt(e,t){return Lt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},Lt(e,t)}function Sc(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function an(e,t,n){return Sc()?an=Reflect.construct.bind():an=function(o,i,l){var a=[null];a.push.apply(a,i);var s=Function.bind.apply(o,a),u=new s;return l&&Lt(u,l.prototype),u},an.apply(null,arguments)}function kc(e){return Function.toString.call(e).indexOf("[native code]")!==-1}function Yn(e){var t=typeof Map=="function"?new Map:void 0;return Yn=function(r){if(r===null||!kc(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof t<"u"){if(t.has(r))return t.get(r);t.set(r,o)}function o(){return an(r,arguments,Kn(this).constructor)}return o.prototype=Object.create(r.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),Lt(o,r)},Yn(e)}var Oc=/%[sdj%]/g,Ic=function(){};function Xn(e){if(!e||!e.length)return null;var t={};return e.forEach(function(n){var r=n.field;t[r]=t[r]||[],t[r].push(n)}),t}function Ue(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,i=n.length;if(typeof e=="function")return e.apply(null,n);if(typeof e=="string"){var l=e.replace(Oc,function(a){if(a==="%%")return"%";if(o>=i)return a;switch(a){case"%s":return String(n[o++]);case"%d":return Number(n[o++]);case"%j":try{return JSON.stringify(n[o++])}catch{return"[Circular]"}break;default:return a}});return l}return e}function zc(e){return e==="string"||e==="url"||e==="hex"||e==="email"||e==="date"||e==="pattern"}function Se(e,t){return!!(e==null||t==="array"&&Array.isArray(e)&&!e.length||zc(t)&&typeof e=="string"&&!e)}function $c(e,t,n){var r=[],o=0,i=e.length;function l(a){r.push.apply(r,a||[]),o++,o===i&&n(r)}e.forEach(function(a){t(a,l)})}function lo(e,t,n){var r=0,o=e.length;function i(l){if(l&&l.length){n(l);return}var a=r;r=r+1,a<o?t(e[a],i):n([])}i([])}function Rc(e){var t=[];return Object.keys(e).forEach(function(n){t.push.apply(t,e[n]||[])}),t}var ao=function(e){Cc(t,e);function t(n,r){var o;return o=e.call(this,"Async Validation Error")||this,o.errors=n,o.fields=r,o}return t}(Yn(Error));function Mc(e,t,n,r,o){if(t.first){var i=new Promise(function(h,m){var c=function(p){return r(p),p.length?m(new ao(p,Xn(p))):h(o)},v=Rc(e);lo(v,n,c)});return i.catch(function(h){return h}),i}var l=t.firstFields===!0?Object.keys(e):t.firstFields||[],a=Object.keys(e),s=a.length,u=0,d=[],f=new Promise(function(h,m){var c=function(y){if(d.push.apply(d,y),u++,u===s)return r(d),d.length?m(new ao(d,Xn(d))):h(o)};a.length||(r(d),h(o)),a.forEach(function(v){var y=e[v];l.indexOf(v)!==-1?lo(y,n,c):$c(y,n,c)})});return f.catch(function(h){return h}),f}function Tc(e){return!!(e&&e.message!==void 0)}function Bc(e,t){for(var n=e,r=0;r<t.length;r++){if(n==null)return n;n=n[t[r]]}return n}function so(e,t){return function(n){var r;return e.fullFields?r=Bc(t,e.fullFields):r=t[n.field||e.fullField],Tc(n)?(n.field=n.field||e.fullField,n.fieldValue=r,n):{message:typeof n=="function"?n():n,fieldValue:r,field:n.field||e.fullField}}}function uo(e,t){if(t){for(var n in t)if(t.hasOwnProperty(n)){var r=t[n];typeof r=="object"&&typeof e[n]=="object"?e[n]=ct({},e[n],r):e[n]=r}}return e}var _i=function(t,n,r,o,i,l){t.required&&(!r.hasOwnProperty(t.field)||Se(n,l||t.type))&&o.push(Ue(i.messages.required,t.fullField))},Pc=function(t,n,r,o,i){(/^\s+$/.test(n)||n==="")&&o.push(Ue(i.messages.whitespace,t.fullField))},tn,Ac=function(){if(tn)return tn;var e="[a-fA-F\\d:]",t=function(b){return b&&b.includeBoundaries?"(?:(?<=\\s|^)(?="+e+")|(?<="+e+")(?=\\s|$))":""},n="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",r="[a-fA-F\\d]{1,4}",o=(`
(?:
(?:`+r+":){7}(?:"+r+`|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:`+r+":){6}(?:"+n+"|:"+r+`|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:`+r+":){5}(?::"+n+"|(?::"+r+`){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:`+r+":){4}(?:(?::"+r+"){0,1}:"+n+"|(?::"+r+`){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:`+r+":){3}(?:(?::"+r+"){0,2}:"+n+"|(?::"+r+`){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:`+r+":){2}(?:(?::"+r+"){0,3}:"+n+"|(?::"+r+`){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:`+r+":){1}(?:(?::"+r+"){0,4}:"+n+"|(?::"+r+`){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::`+r+"){0,5}:"+n+"|(?::"+r+`){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),i=new RegExp("(?:^"+n+"$)|(?:^"+o+"$)"),l=new RegExp("^"+n+"$"),a=new RegExp("^"+o+"$"),s=function(b){return b&&b.exact?i:new RegExp("(?:"+t(b)+n+t(b)+")|(?:"+t(b)+o+t(b)+")","g")};s.v4=function(x){return x&&x.exact?l:new RegExp(""+t(x)+n+t(x),"g")},s.v6=function(x){return x&&x.exact?a:new RegExp(""+t(x)+o+t(x),"g")};var u="(?:(?:[a-z]+:)?//)",d="(?:\\S+(?::\\S*)?@)?",f=s.v4().source,h=s.v6().source,m="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",c="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",v="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",y="(?::\\d{2,5})?",p='(?:[/?#][^\\s"]*)?',w="(?:"+u+"|www\\.)"+d+"(?:localhost|"+f+"|"+h+"|"+m+c+v+")"+y+p;return tn=new RegExp("(?:^"+w+"$)","i"),tn},co={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},$t={integer:function(t){return $t.number(t)&&parseInt(t,10)===t},float:function(t){return $t.number(t)&&!$t.integer(t)},array:function(t){return Array.isArray(t)},regexp:function(t){if(t instanceof RegExp)return!0;try{return!!new RegExp(t)}catch{return!1}},date:function(t){return typeof t.getTime=="function"&&typeof t.getMonth=="function"&&typeof t.getYear=="function"&&!isNaN(t.getTime())},number:function(t){return isNaN(t)?!1:typeof t=="number"},object:function(t){return typeof t=="object"&&!$t.array(t)},method:function(t){return typeof t=="function"},email:function(t){return typeof t=="string"&&t.length<=320&&!!t.match(co.email)},url:function(t){return typeof t=="string"&&t.length<=2048&&!!t.match(Ac())},hex:function(t){return typeof t=="string"&&!!t.match(co.hex)}},Ec=function(t,n,r,o,i){if(t.required&&n===void 0){_i(t,n,r,o,i);return}var l=["integer","float","array","regexp","object","method","email","number","date","url","hex"],a=t.type;l.indexOf(a)>-1?$t[a](n)||o.push(Ue(i.messages.types[a],t.fullField,t.type)):a&&typeof n!==t.type&&o.push(Ue(i.messages.types[a],t.fullField,t.type))},Lc=function(t,n,r,o,i){var l=typeof t.len=="number",a=typeof t.min=="number",s=typeof t.max=="number",u=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,d=n,f=null,h=typeof n=="number",m=typeof n=="string",c=Array.isArray(n);if(h?f="number":m?f="string":c&&(f="array"),!f)return!1;c&&(d=n.length),m&&(d=n.replace(u,"_").length),l?d!==t.len&&o.push(Ue(i.messages[f].len,t.fullField,t.len)):a&&!s&&d<t.min?o.push(Ue(i.messages[f].min,t.fullField,t.min)):s&&!a&&d>t.max?o.push(Ue(i.messages[f].max,t.fullField,t.max)):a&&s&&(d<t.min||d>t.max)&&o.push(Ue(i.messages[f].range,t.fullField,t.min,t.max))},vt="enum",Fc=function(t,n,r,o,i){t[vt]=Array.isArray(t[vt])?t[vt]:[],t[vt].indexOf(n)===-1&&o.push(Ue(i.messages[vt],t.fullField,t[vt].join(", ")))},Nc=function(t,n,r,o,i){if(t.pattern){if(t.pattern instanceof RegExp)t.pattern.lastIndex=0,t.pattern.test(n)||o.push(Ue(i.messages.pattern.mismatch,t.fullField,n,t.pattern));else if(typeof t.pattern=="string"){var l=new RegExp(t.pattern);l.test(n)||o.push(Ue(i.messages.pattern.mismatch,t.fullField,n,t.pattern))}}},oe={required:_i,whitespace:Pc,type:Ec,range:Lc,enum:Fc,pattern:Nc},Dc=function(t,n,r,o,i){var l=[],a=t.required||!t.required&&o.hasOwnProperty(t.field);if(a){if(Se(n,"string")&&!t.required)return r();oe.required(t,n,o,l,i,"string"),Se(n,"string")||(oe.type(t,n,o,l,i),oe.range(t,n,o,l,i),oe.pattern(t,n,o,l,i),t.whitespace===!0&&oe.whitespace(t,n,o,l,i))}r(l)},Uc=function(t,n,r,o,i){var l=[],a=t.required||!t.required&&o.hasOwnProperty(t.field);if(a){if(Se(n)&&!t.required)return r();oe.required(t,n,o,l,i),n!==void 0&&oe.type(t,n,o,l,i)}r(l)},Vc=function(t,n,r,o,i){var l=[],a=t.required||!t.required&&o.hasOwnProperty(t.field);if(a){if(n===""&&(n=void 0),Se(n)&&!t.required)return r();oe.required(t,n,o,l,i),n!==void 0&&(oe.type(t,n,o,l,i),oe.range(t,n,o,l,i))}r(l)},jc=function(t,n,r,o,i){var l=[],a=t.required||!t.required&&o.hasOwnProperty(t.field);if(a){if(Se(n)&&!t.required)return r();oe.required(t,n,o,l,i),n!==void 0&&oe.type(t,n,o,l,i)}r(l)},Hc=function(t,n,r,o,i){var l=[],a=t.required||!t.required&&o.hasOwnProperty(t.field);if(a){if(Se(n)&&!t.required)return r();oe.required(t,n,o,l,i),Se(n)||oe.type(t,n,o,l,i)}r(l)},Wc=function(t,n,r,o,i){var l=[],a=t.required||!t.required&&o.hasOwnProperty(t.field);if(a){if(Se(n)&&!t.required)return r();oe.required(t,n,o,l,i),n!==void 0&&(oe.type(t,n,o,l,i),oe.range(t,n,o,l,i))}r(l)},Gc=function(t,n,r,o,i){var l=[],a=t.required||!t.required&&o.hasOwnProperty(t.field);if(a){if(Se(n)&&!t.required)return r();oe.required(t,n,o,l,i),n!==void 0&&(oe.type(t,n,o,l,i),oe.range(t,n,o,l,i))}r(l)},qc=function(t,n,r,o,i){var l=[],a=t.required||!t.required&&o.hasOwnProperty(t.field);if(a){if(n==null&&!t.required)return r();oe.required(t,n,o,l,i,"array"),n!=null&&(oe.type(t,n,o,l,i),oe.range(t,n,o,l,i))}r(l)},Kc=function(t,n,r,o,i){var l=[],a=t.required||!t.required&&o.hasOwnProperty(t.field);if(a){if(Se(n)&&!t.required)return r();oe.required(t,n,o,l,i),n!==void 0&&oe.type(t,n,o,l,i)}r(l)},Yc="enum",Xc=function(t,n,r,o,i){var l=[],a=t.required||!t.required&&o.hasOwnProperty(t.field);if(a){if(Se(n)&&!t.required)return r();oe.required(t,n,o,l,i),n!==void 0&&oe[Yc](t,n,o,l,i)}r(l)},Zc=function(t,n,r,o,i){var l=[],a=t.required||!t.required&&o.hasOwnProperty(t.field);if(a){if(Se(n,"string")&&!t.required)return r();oe.required(t,n,o,l,i),Se(n,"string")||oe.pattern(t,n,o,l,i)}r(l)},Jc=function(t,n,r,o,i){var l=[],a=t.required||!t.required&&o.hasOwnProperty(t.field);if(a){if(Se(n,"date")&&!t.required)return r();if(oe.required(t,n,o,l,i),!Se(n,"date")){var s;n instanceof Date?s=n:s=new Date(n),oe.type(t,s,o,l,i),s&&oe.range(t,s.getTime(),o,l,i)}}r(l)},Qc=function(t,n,r,o,i){var l=[],a=Array.isArray(n)?"array":typeof n;oe.required(t,n,o,l,i,a),r(l)},Fn=function(t,n,r,o,i){var l=t.type,a=[],s=t.required||!t.required&&o.hasOwnProperty(t.field);if(s){if(Se(n,l)&&!t.required)return r();oe.required(t,n,o,a,i,l),Se(n,l)||oe.type(t,n,o,a,i)}r(a)},ef=function(t,n,r,o,i){var l=[],a=t.required||!t.required&&o.hasOwnProperty(t.field);if(a){if(Se(n)&&!t.required)return r();oe.required(t,n,o,l,i)}r(l)},Bt={string:Dc,method:Uc,number:Vc,boolean:jc,regexp:Hc,integer:Wc,float:Gc,array:qc,object:Kc,enum:Xc,pattern:Zc,date:Jc,url:Fn,hex:Fn,email:Fn,required:Qc,any:ef};function Zn(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var t=JSON.parse(JSON.stringify(this));return t.clone=this.clone,t}}}var Jn=Zn(),Ct=function(){function e(n){this.rules=null,this._messages=Jn,this.define(n)}var t=e.prototype;return t.define=function(r){var o=this;if(!r)throw new Error("Cannot configure a schema with no rules");if(typeof r!="object"||Array.isArray(r))throw new Error("Rules must be an object");this.rules={},Object.keys(r).forEach(function(i){var l=r[i];o.rules[i]=Array.isArray(l)?l:[l]})},t.messages=function(r){return r&&(this._messages=uo(Zn(),r)),this._messages},t.validate=function(r,o,i){var l=this;o===void 0&&(o={}),i===void 0&&(i=function(){});var a=r,s=o,u=i;if(typeof s=="function"&&(u=s,s={}),!this.rules||Object.keys(this.rules).length===0)return u&&u(null,a),Promise.resolve(a);function d(v){var y=[],p={};function w(b){if(Array.isArray(b)){var _;y=(_=y).concat.apply(_,b)}else y.push(b)}for(var x=0;x<v.length;x++)w(v[x]);y.length?(p=Xn(y),u(y,p)):u(null,a)}if(s.messages){var f=this.messages();f===Jn&&(f=Zn()),uo(f,s.messages),s.messages=f}else s.messages=this.messages();var h={},m=s.keys||Object.keys(this.rules);m.forEach(function(v){var y=l.rules[v],p=a[v];y.forEach(function(w){var x=w;typeof x.transform=="function"&&(a===r&&(a=ct({},a)),p=a[v]=x.transform(p)),typeof x=="function"?x={validator:x}:x=ct({},x),x.validator=l.getValidationMethod(x),x.validator&&(x.field=v,x.fullField=x.fullField||v,x.type=l.getType(x),h[v]=h[v]||[],h[v].push({rule:x,value:p,source:a,field:v}))})});var c={};return Mc(h,s,function(v,y){var p=v.rule,w=(p.type==="object"||p.type==="array")&&(typeof p.fields=="object"||typeof p.defaultField=="object");w=w&&(p.required||!p.required&&v.value),p.field=v.field;function x(C,k){return ct({},k,{fullField:p.fullField+"."+C,fullFields:p.fullFields?[].concat(p.fullFields,[C]):[C]})}function b(C){C===void 0&&(C=[]);var k=Array.isArray(C)?C:[C];!s.suppressWarning&&k.length&&e.warning("async-validator:",k),k.length&&p.message!==void 0&&(k=[].concat(p.message));var I=k.map(so(p,a));if(s.first&&I.length)return c[p.field]=1,y(I);if(!w)y(I);else{if(p.required&&!v.value)return p.message!==void 0?I=[].concat(p.message).map(so(p,a)):s.error&&(I=[s.error(p,Ue(s.messages.required,p.field))]),y(I);var F={};p.defaultField&&Object.keys(v.value).map(function(K){F[K]=p.defaultField}),F=ct({},F,v.rule.fields);var B={};Object.keys(F).forEach(function(K){var O=F[K],M=Array.isArray(O)?O:[O];B[K]=M.map(x.bind(null,K))});var U=new e(B);U.messages(s.messages),v.rule.options&&(v.rule.options.messages=s.messages,v.rule.options.error=s.error),U.validate(v.value,v.rule.options||s,function(K){var O=[];I&&I.length&&O.push.apply(O,I),K&&K.length&&O.push.apply(O,K),y(O.length?O:null)})}}var _;if(p.asyncValidator)_=p.asyncValidator(p,v.value,b,v.source,s);else if(p.validator){try{_=p.validator(p,v.value,b,v.source,s)}catch(C){console.error==null||console.error(C),s.suppressValidatorError||setTimeout(function(){throw C},0),b(C.message)}_===!0?b():_===!1?b(typeof p.message=="function"?p.message(p.fullField||p.field):p.message||(p.fullField||p.field)+" fails"):_ instanceof Array?b(_):_ instanceof Error&&b(_.message)}_&&_.then&&_.then(function(){return b()},function(C){return b(C)})},function(v){d(v)},a)},t.getType=function(r){if(r.type===void 0&&r.pattern instanceof RegExp&&(r.type="pattern"),typeof r.validator!="function"&&r.type&&!Bt.hasOwnProperty(r.type))throw new Error(Ue("Unknown rule type %s",r.type));return r.type||"string"},t.getValidationMethod=function(r){if(typeof r.validator=="function")return r.validator;var o=Object.keys(r),i=o.indexOf("message");return i!==-1&&o.splice(i,1),o.length===1&&o[0]==="required"?Bt.required:Bt[this.getType(r)]||void 0},e}();Ct.register=function(t,n){if(typeof n!="function")throw new Error("Cannot register a validator by type, validator is not a function");Bt[t]=n};Ct.warning=Ic;Ct.messages=Jn;Ct.validators=Bt;const{cubicBezierEaseInOut:fo}=Ql;function tf({name:e="fade-down",fromOffset:t="-4px",enterDuration:n=".3s",leaveDuration:r=".3s",enterCubicBezier:o=fo,leaveCubicBezier:i=fo}={}){return[Y(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`,{opacity:0,transform:`translateY(${t})`}),Y(`&.${e}-transition-enter-to, &.${e}-transition-leave-from`,{opacity:1,transform:"translateY(0)"}),Y(`&.${e}-transition-leave-active`,{transition:`opacity ${r} ${i}, transform ${r} ${i}`}),Y(`&.${e}-transition-enter-active`,{transition:`opacity ${n} ${o}, transform ${n} ${o}`})]}const nf=A("form-item",`
 display: grid;
 line-height: var(--n-line-height);
`,[A("form-item-label",`
 grid-area: label;
 align-items: center;
 line-height: 1.25;
 text-align: var(--n-label-text-align);
 font-size: var(--n-label-font-size);
 min-height: var(--n-label-height);
 padding: var(--n-label-padding);
 color: var(--n-label-text-color);
 transition: color .3s var(--n-bezier);
 box-sizing: border-box;
 font-weight: var(--n-label-font-weight);
 `,[R("asterisk",`
 white-space: nowrap;
 user-select: none;
 -webkit-user-select: none;
 color: var(--n-asterisk-color);
 transition: color .3s var(--n-bezier);
 `),R("asterisk-placeholder",`
 grid-area: mark;
 user-select: none;
 -webkit-user-select: none;
 visibility: hidden; 
 `)]),A("form-item-blank",`
 grid-area: blank;
 min-height: var(--n-blank-height);
 `),D("auto-label-width",[A("form-item-label","white-space: nowrap;")]),D("left-labelled",`
 grid-template-areas:
 "label blank"
 "label feedback";
 grid-template-columns: auto minmax(0, 1fr);
 grid-template-rows: auto 1fr;
 align-items: flex-start;
 `,[A("form-item-label",`
 display: grid;
 grid-template-columns: 1fr auto;
 min-height: var(--n-blank-height);
 height: auto;
 box-sizing: border-box;
 flex-shrink: 0;
 flex-grow: 0;
 `,[D("reverse-columns-space",`
 grid-template-columns: auto 1fr;
 `),D("left-mark",`
 grid-template-areas:
 "mark text"
 ". text";
 `),D("right-mark",`
 grid-template-areas: 
 "text mark"
 "text .";
 `),D("right-hanging-mark",`
 grid-template-areas: 
 "text mark"
 "text .";
 `),R("text",`
 grid-area: text; 
 `),R("asterisk",`
 grid-area: mark; 
 align-self: end;
 `)])]),D("top-labelled",`
 grid-template-areas:
 "label"
 "blank"
 "feedback";
 grid-template-rows: minmax(var(--n-label-height), auto) 1fr;
 grid-template-columns: minmax(0, 100%);
 `,[D("no-label",`
 grid-template-areas:
 "blank"
 "feedback";
 grid-template-rows: 1fr;
 `),A("form-item-label",`
 display: flex;
 align-items: flex-start;
 justify-content: var(--n-label-text-align);
 `)]),A("form-item-blank",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 position: relative;
 `),A("form-item-feedback-wrapper",`
 grid-area: feedback;
 box-sizing: border-box;
 min-height: var(--n-feedback-height);
 font-size: var(--n-feedback-font-size);
 line-height: 1.25;
 transform-origin: top left;
 `,[Y("&:not(:empty)",`
 padding: var(--n-feedback-padding);
 `),A("form-item-feedback",{transition:"color .3s var(--n-bezier)",color:"var(--n-feedback-text-color)"},[D("warning",{color:"var(--n-feedback-text-color-warning)"}),D("error",{color:"var(--n-feedback-text-color-error)"}),tf({fromOffset:"-3px",enterDuration:".3s",leaveDuration:".2s"})])])]);function rf(e){const t=pe(Vt,null);return{mergedSize:$(()=>e.size!==void 0?e.size:(t==null?void 0:t.props.size)!==void 0?t.props.size:"medium")}}function of(e){const t=pe(Vt,null),n=$(()=>{const{labelPlacement:c}=e;return c!==void 0?c:t!=null&&t.props.labelPlacement?t.props.labelPlacement:"top"}),r=$(()=>n.value==="left"&&(e.labelWidth==="auto"||(t==null?void 0:t.props.labelWidth)==="auto")),o=$(()=>{if(n.value==="top")return;const{labelWidth:c}=e;if(c!==void 0&&c!=="auto")return Ke(c);if(r.value){const v=t==null?void 0:t.maxChildLabelWidthRef.value;return v!==void 0?Ke(v):void 0}if((t==null?void 0:t.props.labelWidth)!==void 0)return Ke(t.props.labelWidth)}),i=$(()=>{const{labelAlign:c}=e;if(c)return c;if(t!=null&&t.props.labelAlign)return t.props.labelAlign}),l=$(()=>{var c;return[(c=e.labelProps)===null||c===void 0?void 0:c.style,e.labelStyle,{width:o.value}]}),a=$(()=>{const{showRequireMark:c}=e;return c!==void 0?c:t==null?void 0:t.props.showRequireMark}),s=$(()=>{const{requireMarkPlacement:c}=e;return c!==void 0?c:(t==null?void 0:t.props.requireMarkPlacement)||"right"}),u=L(!1),d=L(!1),f=$(()=>{const{validationStatus:c}=e;if(c!==void 0)return c;if(u.value)return"error";if(d.value)return"warning"}),h=$(()=>{const{showFeedback:c}=e;return c!==void 0?c:(t==null?void 0:t.props.showFeedback)!==void 0?t.props.showFeedback:!0}),m=$(()=>{const{showLabel:c}=e;return c!==void 0?c:(t==null?void 0:t.props.showLabel)!==void 0?t.props.showLabel:!0});return{validationErrored:u,validationWarned:d,mergedLabelStyle:l,mergedLabelPlacement:n,mergedLabelAlign:i,mergedShowRequireMark:a,mergedRequireMarkPlacement:s,mergedValidationStatus:f,mergedShowFeedback:h,mergedShowLabel:m,isAutoLabelWidth:r}}function lf(e){const t=pe(Vt,null),n=$(()=>{const{rulePath:l}=e;if(l!==void 0)return l;const{path:a}=e;if(a!==void 0)return a}),r=$(()=>{const l=[],{rule:a}=e;if(a!==void 0&&(Array.isArray(a)?l.push(...a):l.push(a)),t){const{rules:s}=t.props,{value:u}=n;if(s!==void 0&&u!==void 0){const d=pr(s,u);d!==void 0&&(Array.isArray(d)?l.push(...d):l.push(d))}}return l}),o=$(()=>r.value.some(l=>l.required)),i=$(()=>o.value||e.required);return{mergedRules:r,mergedRequired:i}}var ho=function(e,t,n,r){function o(i){return i instanceof n?i:new n(function(l){l(i)})}return new(n||(n=Promise))(function(i,l){function a(d){try{u(r.next(d))}catch(f){l(f)}}function s(d){try{u(r.throw(d))}catch(f){l(f)}}function u(d){d.done?i(d.value):o(d.value).then(a,s)}u((r=r.apply(e,t||[])).next())})};const af=Object.assign(Object.assign({},re.props),{label:String,labelWidth:[Number,String],labelStyle:[String,Object],labelAlign:String,labelPlacement:String,path:String,first:Boolean,rulePath:String,required:Boolean,showRequireMark:{type:Boolean,default:void 0},requireMarkPlacement:String,showFeedback:{type:Boolean,default:void 0},rule:[Object,Array],size:String,ignorePathChange:Boolean,validationStatus:String,feedback:String,feedbackClass:String,feedbackStyle:[String,Object],showLabel:{type:Boolean,default:void 0},labelProps:Object});function po(e,t){return(...n)=>{try{const r=e(...n);return!t&&(typeof r=="boolean"||r instanceof Error||Array.isArray(r))||r!=null&&r.then?r:(r===void 0||At("form-item/validate",`You return a ${typeof r} typed value in the validator method, which is not recommended. Please use ${t?"`Promise`":"`boolean`, `Error` or `Promise`"} typed value instead.`),!0)}catch(r){At("form-item/validate","An error is catched in the validation, so the validation won't be done. Your callback in `validate` method of `n-form` or `n-form-item` won't be called in this validation."),console.error(r);return}}}const sf=X({name:"FormItem",props:af,setup(e){Nd(xi,"formItems",te(e,"path"));const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=Oe(e),r=pe(Vt,null),o=rf(e),i=of(e),{validationErrored:l,validationWarned:a}=i,{mergedRequired:s,mergedRules:u}=lf(e),{mergedSize:d}=o,{mergedLabelPlacement:f,mergedLabelAlign:h,mergedRequireMarkPlacement:m}=i,c=L([]),v=L(zr()),y=r?te(r.props,"disabled"):L(!1),p=re("Form","-form-item",nf,zo,e,t);Ce(te(e,"path"),()=>{e.ignorePathChange||w()});function w(){c.value=[],l.value=!1,a.value=!1,e.feedback&&(v.value=zr())}const x=(...M)=>ho(this,[...M],void 0,function*(z=null,V=()=>!0,H={suppressWarning:!0}){const{path:G}=e;H?H.first||(H.first=e.first):H={};const{value:Z}=u,q=r?pr(r.props.model,G||""):void 0,ee={},T={},E=(z?Z.filter(se=>Array.isArray(se.trigger)?se.trigger.includes(z):se.trigger===z):Z).filter(V).map((se,ve)=>{const ue=Object.assign({},se);if(ue.validator&&(ue.validator=po(ue.validator,!1)),ue.asyncValidator&&(ue.asyncValidator=po(ue.asyncValidator,!0)),ue.renderMessage){const Ge=`__renderMessage__${ve}`;T[Ge]=ue.message,ue.message=Ge,ee[Ge]=ue.renderMessage}return ue}),J=E.filter(se=>se.level!=="warning"),fe=E.filter(se=>se.level==="warning"),ce={valid:!0,errors:void 0,warnings:void 0};if(!E.length)return ce;const ye=G??"__n_no_path__",me=new Ct({[ye]:J}),be=new Ct({[ye]:fe}),{validateMessages:Ae}=(r==null?void 0:r.props)||{};Ae&&(me.messages(Ae),be.messages(Ae));const ke=se=>{c.value=se.map(ve=>{const ue=(ve==null?void 0:ve.message)||"";return{key:ue,render:()=>ue.startsWith("__renderMessage__")?ee[ue]():ue}}),se.forEach(ve=>{var ue;!((ue=ve.message)===null||ue===void 0)&&ue.startsWith("__renderMessage__")&&(ve.message=T[ve.message])})};if(J.length){const se=yield new Promise(ve=>{me.validate({[ye]:q},H,ve)});se!=null&&se.length&&(ce.valid=!1,ce.errors=se,ke(se))}if(fe.length&&!ce.errors){const se=yield new Promise(ve=>{be.validate({[ye]:q},H,ve)});se!=null&&se.length&&(ke(se),ce.warnings=se)}return!ce.errors&&!ce.warnings?w():(l.value=!!ce.errors,a.value=!!ce.warnings),ce});function b(){x("blur")}function _(){x("change")}function C(){x("focus")}function k(){x("input")}function I(M,z){return ho(this,void 0,void 0,function*(){let V,H,G,Z;return typeof M=="string"?(V=M,H=z):M!==null&&typeof M=="object"&&(V=M.trigger,H=M.callback,G=M.shouldRuleBeApplied,Z=M.options),yield new Promise((q,ee)=>{x(V,G,Z).then(({valid:T,errors:E,warnings:J})=>{T?(H&&H(void 0,{warnings:J}),q({warnings:J})):(H&&H(E,{warnings:J}),ee(E))})})})}Be(ea,{path:te(e,"path"),disabled:y,mergedSize:o.mergedSize,mergedValidationStatus:i.mergedValidationStatus,restoreValidation:w,handleContentBlur:b,handleContentChange:_,handleContentFocus:C,handleContentInput:k});const F={validate:I,restoreValidation:w,internalValidate:x},B=L(null);We(()=>{if(!i.isAutoLabelWidth.value)return;const M=B.value;if(M!==null){const z=M.style.whiteSpace;M.style.whiteSpace="nowrap",M.style.width="",r==null||r.deriveMaxChildLabelWidth(Number(getComputedStyle(M).width.slice(0,-2))),M.style.whiteSpace=z}});const U=$(()=>{var M;const{value:z}=d,{value:V}=f,H=V==="top"?"vertical":"horizontal",{common:{cubicBezierEaseInOut:G},self:{labelTextColor:Z,asteriskColor:q,lineHeight:ee,feedbackTextColor:T,feedbackTextColorWarning:E,feedbackTextColorError:J,feedbackPadding:fe,labelFontWeight:ce,[ne("labelHeight",z)]:ye,[ne("blankHeight",z)]:me,[ne("feedbackFontSize",z)]:be,[ne("feedbackHeight",z)]:Ae,[ne("labelPadding",H)]:ke,[ne("labelTextAlign",H)]:se,[ne(ne("labelFontSize",V),z)]:ve}}=p.value;let ue=(M=h.value)!==null&&M!==void 0?M:se;return V==="top"&&(ue=ue==="right"?"flex-end":"flex-start"),{"--n-bezier":G,"--n-line-height":ee,"--n-blank-height":me,"--n-label-font-size":ve,"--n-label-text-align":ue,"--n-label-height":ye,"--n-label-padding":ke,"--n-label-font-weight":ce,"--n-asterisk-color":q,"--n-label-text-color":Z,"--n-feedback-padding":fe,"--n-feedback-font-size":be,"--n-feedback-height":Ae,"--n-feedback-text-color":T,"--n-feedback-text-color-warning":E,"--n-feedback-text-color-error":J}}),K=n?Pe("form-item",$(()=>{var M;return`${d.value[0]}${f.value[0]}${((M=h.value)===null||M===void 0?void 0:M[0])||""}`}),U,e):void 0,O=$(()=>f.value==="left"&&m.value==="left"&&h.value==="left");return Object.assign(Object.assign(Object.assign(Object.assign({labelElementRef:B,mergedClsPrefix:t,mergedRequired:s,feedbackId:v,renderExplains:c,reverseColSpace:O},i),o),F),{cssVars:n?void 0:U,themeClass:K==null?void 0:K.themeClass,onRender:K==null?void 0:K.onRender})},render(){const{$slots:e,mergedClsPrefix:t,mergedShowLabel:n,mergedShowRequireMark:r,mergedRequireMarkPlacement:o,onRender:i}=this,l=r!==void 0?r:this.mergedRequired;i==null||i();const a=()=>{const s=this.$slots.label?this.$slots.label():this.label;if(!s)return null;const u=g("span",{class:`${t}-form-item-label__text`},s),d=l?g("span",{class:`${t}-form-item-label__asterisk`},o!=="left"?" *":"* "):o==="right-hanging"&&g("span",{class:`${t}-form-item-label__asterisk-placeholder`}," *"),{labelProps:f}=this;return g("label",Object.assign({},f,{class:[f==null?void 0:f.class,`${t}-form-item-label`,`${t}-form-item-label--${o}-mark`,this.reverseColSpace&&`${t}-form-item-label--reverse-columns-space`],style:this.mergedLabelStyle,ref:"labelElementRef"}),o==="left"?[d,u]:[u,d])};return g("div",{class:[`${t}-form-item`,this.themeClass,`${t}-form-item--${this.mergedSize}-size`,`${t}-form-item--${this.mergedLabelPlacement}-labelled`,this.isAutoLabelWidth&&`${t}-form-item--auto-label-width`,!n&&`${t}-form-item--no-label`],style:this.cssVars},n&&a(),g("div",{class:[`${t}-form-item-blank`,this.mergedValidationStatus&&`${t}-form-item-blank--${this.mergedValidationStatus}`]},e),this.mergedShowFeedback?g("div",{key:this.feedbackId,style:this.feedbackStyle,class:[`${t}-form-item-feedback-wrapper`,this.feedbackClass]},g(Ut,{name:"fade-down-transition",mode:"out-in"},{default:()=>{const{mergedValidationStatus:s}=this;return Me(e.feedback,u=>{var d;const{feedback:f}=this,h=u||f?g("div",{key:"__feedback__",class:`${t}-form-item-feedback__line`},u||f):this.renderExplains.length?(d=this.renderExplains)===null||d===void 0?void 0:d.map(({key:m,render:c})=>g("div",{key:m,class:`${t}-form-item-feedback__line`},c())):null;return h?s==="warning"?g("div",{key:"controlled-warning",class:`${t}-form-item-feedback ${t}-form-item-feedback--warning`},h):s==="error"?g("div",{key:"controlled-error",class:`${t}-form-item-feedback ${t}-form-item-feedback--error`},h):s==="success"?g("div",{key:"controlled-success",class:`${t}-form-item-feedback ${t}-form-item-feedback--success`},h):g("div",{key:"controlled-default",class:`${t}-form-item-feedback`},h):null})}})):null)}}),df=at("n-layout-sider"),Ci={type:String,default:"static"},uf=A("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[A("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),D("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),cf={embedded:Boolean,position:Ci,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},Si=at("n-layout");function ki(e){return X({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},re.props),cf),setup(t){const n=L(null),r=L(null),{mergedClsPrefixRef:o,inlineThemeDisabled:i}=Oe(t),l=re("Layout","-layout",uf,$o,t,o);function a(v,y){if(t.nativeScrollbar){const{value:p}=n;p&&(y===void 0?p.scrollTo(v):p.scrollTo(v,y))}else{const{value:p}=r;p&&p.scrollTo(v,y)}}Be(Si,t);let s=0,u=0;const d=v=>{var y;const p=v.target;s=p.scrollLeft,u=p.scrollTop,(y=t.onScroll)===null||y===void 0||y.call(t,v)};Ro(()=>{if(t.nativeScrollbar){const v=n.value;v&&(v.scrollTop=u,v.scrollLeft=s)}});const f={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},h={scrollTo:a},m=$(()=>{const{common:{cubicBezierEaseInOut:v},self:y}=l.value;return{"--n-bezier":v,"--n-color":t.embedded?y.colorEmbedded:y.color,"--n-text-color":y.textColor}}),c=i?Pe("layout",$(()=>t.embedded?"e":""),m,t):void 0;return Object.assign({mergedClsPrefix:o,scrollableElRef:n,scrollbarInstRef:r,hasSiderStyle:f,mergedTheme:l,handleNativeElScroll:d,cssVars:i?void 0:m,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender},h)},render(){var t;const{mergedClsPrefix:n,hasSider:r}=this;(t=this.onRender)===null||t===void 0||t.call(this);const o=r?this.hasSiderStyle:void 0,i=[this.themeClass,e&&`${n}-layout-content`,`${n}-layout`,`${n}-layout--${this.position}-positioned`];return g("div",{class:i,style:this.cssVars},this.nativeScrollbar?g("div",{ref:"scrollableElRef",class:[`${n}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,o],onScroll:this.handleNativeElScroll},this.$slots):g(vn,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,o]}),this.$slots))}})}const dh=ki(!1),uh=ki(!0),ff=A("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[D("bordered",[R("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),R("left-placement",[D("bordered",[R("border",`
 right: 0;
 `)])]),D("right-placement",`
 justify-content: flex-start;
 `,[D("bordered",[R("border",`
 left: 0;
 `)]),D("collapsed",[A("layout-toggle-button",[A("base-icon",`
 transform: rotate(180deg);
 `)]),A("layout-toggle-bar",[Y("&:hover",[R("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),R("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),A("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[A("base-icon",`
 transform: rotate(0);
 `)]),A("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[Y("&:hover",[R("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),R("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),D("collapsed",[A("layout-toggle-bar",[Y("&:hover",[R("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),R("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),A("layout-toggle-button",[A("base-icon",`
 transform: rotate(0);
 `)])]),A("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[A("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),A("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[R("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),R("bottom",`
 position: absolute;
 top: 34px;
 `),Y("&:hover",[R("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),R("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),R("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),Y("&:hover",[R("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),R("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),A("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),D("show-content",[A("layout-sider-scroll-container",{opacity:1})]),D("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),hf=X({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return g("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},g("div",{class:`${e}-layout-toggle-bar__top`}),g("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),pf=X({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return g("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},g(Dt,{clsPrefix:e},{default:()=>g(ou,null)}))}}),vf={position:Ci,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},ch=X({name:"LayoutSider",props:Object.assign(Object.assign({},re.props),vf),setup(e){const t=pe(Si),n=L(null),r=L(null),o=L(e.defaultCollapsed),i=Et(te(e,"collapsed"),o),l=$(()=>Ke(i.value?e.collapsedWidth:e.width)),a=$(()=>e.collapseMode!=="transform"?{}:{minWidth:Ke(e.width)}),s=$(()=>t?t.siderPlacement:"left");function u(_,C){if(e.nativeScrollbar){const{value:k}=n;k&&(C===void 0?k.scrollTo(_):k.scrollTo(_,C))}else{const{value:k}=r;k&&k.scrollTo(_,C)}}function d(){const{"onUpdate:collapsed":_,onUpdateCollapsed:C,onExpand:k,onCollapse:I}=e,{value:F}=i;C&&he(C,!F),_&&he(_,!F),o.value=!F,F?k&&he(k):I&&he(I)}let f=0,h=0;const m=_=>{var C;const k=_.target;f=k.scrollLeft,h=k.scrollTop,(C=e.onScroll)===null||C===void 0||C.call(e,_)};Ro(()=>{if(e.nativeScrollbar){const _=n.value;_&&(_.scrollTop=h,_.scrollLeft=f)}}),Be(df,{collapsedRef:i,collapseModeRef:te(e,"collapseMode")});const{mergedClsPrefixRef:c,inlineThemeDisabled:v}=Oe(e),y=re("Layout","-layout-sider",ff,$o,e,c);function p(_){var C,k;_.propertyName==="max-width"&&(i.value?(C=e.onAfterLeave)===null||C===void 0||C.call(e):(k=e.onAfterEnter)===null||k===void 0||k.call(e))}const w={scrollTo:u},x=$(()=>{const{common:{cubicBezierEaseInOut:_},self:C}=y.value,{siderToggleButtonColor:k,siderToggleButtonBorder:I,siderToggleBarColor:F,siderToggleBarColorHover:B}=C,U={"--n-bezier":_,"--n-toggle-button-color":k,"--n-toggle-button-border":I,"--n-toggle-bar-color":F,"--n-toggle-bar-color-hover":B};return e.inverted?(U["--n-color"]=C.siderColorInverted,U["--n-text-color"]=C.textColorInverted,U["--n-border-color"]=C.siderBorderColorInverted,U["--n-toggle-button-icon-color"]=C.siderToggleButtonIconColorInverted,U.__invertScrollbar=C.__invertScrollbar):(U["--n-color"]=C.siderColor,U["--n-text-color"]=C.textColor,U["--n-border-color"]=C.siderBorderColor,U["--n-toggle-button-icon-color"]=C.siderToggleButtonIconColor),U}),b=v?Pe("layout-sider",$(()=>e.inverted?"a":"b"),x,e):void 0;return Object.assign({scrollableElRef:n,scrollbarInstRef:r,mergedClsPrefix:c,mergedTheme:y,styleMaxWidth:l,mergedCollapsed:i,scrollContainerStyle:a,siderPlacement:s,handleNativeElScroll:m,handleTransitionend:p,handleTriggerClick:d,inlineThemeDisabled:v,cssVars:x,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender},w)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:n,showTrigger:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),g("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,n&&`${t}-layout-sider--collapsed`,(!n||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:Ke(this.width)}]},this.nativeScrollbar?g("div",{class:[`${t}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):g(vn,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),r?r==="bar"?g(hf,{clsPrefix:t,class:n?this.collapsedTriggerClass:this.triggerClass,style:n?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):g(pf,{clsPrefix:t,class:n?this.collapsedTriggerClass:this.triggerClass,style:n?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?g("div",{class:`${t}-layout-sider__border`}):null)}}),Oi=at("n-log"),gf=X({props:{line:{type:String,default:""}},setup(e){const{trimRef:t,highlightRef:n,languageRef:r,mergedHljsRef:o}=pe(Oi),i=L(null),l=$(()=>t.value?e.line.trim():e.line);function a(){i.value&&(i.value.innerHTML=s(r.value,l.value))}function s(u,d){const{value:f}=o;return f&&u&&f.getLanguage(u)?f.highlight(d,{language:u}).value:d}return We(()=>{n.value&&a()}),Ce(te(e,"line"),()=>{n.value&&a()}),{highlight:n,selfRef:i,maybeTrimmedLines:l}},render(){const{highlight:e,maybeTrimmedLines:t}=this;return g("pre",{ref:"selfRef"},e?null:t)}}),mf=X({name:"LogLoader",props:{clsPrefix:{type:String,required:!0}},setup(){return{locale:br("Log").localeRef}},render(){const{clsPrefix:e}=this;return g("div",{class:`${e}-log-loader`},g(pn,{clsPrefix:e,strokeWidth:24,scale:.85}),g("span",{class:`${e}-log-loader__content`},this.locale.loading))}}),bf=A("log",`
 position: relative;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
`,[Y("pre",`
 white-space: pre-wrap;
 word-break: break-word;
 margin: 0;
 `),A("log-loader",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 position: absolute;
 right: 16px;
 top: 8px;
 height: 34px;
 border-radius: 17px;
 line-height: 34px;
 white-space: nowrap;
 overflow: hidden;
 border: var(--n-loader-border);
 color: var(--n-loader-text-color);
 background-color: var(--n-loader-color);
 font-size: var(--n-loader-font-size);
 `,[sr(),R("content",`
 display: inline-block;
 vertical-align: bottom;
 line-height: 34px;
 padding-left: 40px;
 padding-right: 20px;
 white-space: nowrap;
 `),A("base-loading",`
 color: var(--n-loading-color);
 position: absolute;
 left: 12px;
 top: calc(50% - 10px);
 font-size: 20px;
 width: 20px;
 height: 20px;
 display: inline-block;
 `)])]),wf=Object.assign(Object.assign({},re.props),{loading:Boolean,trim:Boolean,log:String,fontSize:{type:Number,default:14},lines:{type:Array,default:()=>[]},lineHeight:{type:Number,default:1.25},language:String,rows:{type:Number,default:15},offsetTop:{type:Number,default:0},offsetBottom:{type:Number,default:0},hljs:Object,onReachTop:Function,onReachBottom:Function,onRequireMore:Function}),fh=X({name:"Log",props:wf,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=Oe(e),r=L(!1),o=$(()=>e.language!==void 0),i=$(()=>`calc(${Math.round(e.rows*e.lineHeight*e.fontSize)}px)`),l=$(()=>{const{log:w}=e;return w?w.split(`
`):e.lines}),a=L(null),s=re("Log","-log",bf,ta,e,t);function u(w){const x=w.target,b=x.firstElementChild;if(r.value){_t(()=>{r.value=!1});return}const _=x.offsetHeight,C=x.scrollTop,k=b.offsetHeight,I=C,F=k-C-_;if(I<=e.offsetTop){const{onReachTop:B,onRequireMore:U}=e;U&&U("top"),B&&B()}if(F<=e.offsetBottom){const{onReachBottom:B,onRequireMore:U}=e;U&&U("bottom"),B&&B()}}const d=Ad(f,300);function f(w){if(r.value){_t(()=>{r.value=!1});return}if(a.value){const{containerRef:x,contentRef:b}=a.value;if(x&&b){const _=x.offsetHeight,C=x.scrollTop,k=b.offsetHeight,I=C,F=k-C-_,B=w.deltaY;if(I===0&&B<0){const{onRequireMore:U}=e;U&&U("top")}if(F<=0&&B>0){const{onRequireMore:U}=e;U&&U("bottom")}}}}function h(w){const{value:x}=a;if(!x)return;const{silent:b,top:_,position:C}=w;b&&(r.value=!0),_!==void 0?x.scrollTo({left:0,top:_}):(C==="bottom"||C==="top")&&x.scrollTo({position:C})}function m(w=!1){At("log","`scrollToTop` is deprecated, please use `scrollTo({ position: 'top'})` instead."),h({position:"top",silent:w})}function c(w=!1){At("log","`scrollToTop` is deprecated, please use `scrollTo({ position: 'bottom'})` instead."),h({position:"bottom",silent:w})}Be(Oi,{languageRef:te(e,"language"),mergedHljsRef:hi(e),trimRef:te(e,"trim"),highlightRef:o});const v={scrollTo:h},y=$(()=>{const{self:{loaderFontSize:w,loaderTextColor:x,loaderColor:b,loaderBorder:_,loadingColor:C},common:{cubicBezierEaseInOut:k}}=s.value;return{"--n-bezier":k,"--n-loader-font-size":w,"--n-loader-border":_,"--n-loader-color":b,"--n-loader-text-color":x,"--n-loading-color":C}}),p=n?Pe("log",void 0,y,e):void 0;return Object.assign(Object.assign({},v),{mergedClsPrefix:t,scrollbarRef:a,mergedTheme:s,styleHeight:i,mergedLines:l,scrollToTop:m,scrollToBottom:c,handleWheel:d,handleScroll:u,cssVars:n?void 0:y,themeClass:p==null?void 0:p.themeClass,onRender:p==null?void 0:p.onRender})},render(){const{mergedClsPrefix:e,mergedTheme:t,onRender:n}=this;return n==null||n(),g("div",{class:[`${e}-log`,this.themeClass],style:[{lineHeight:this.lineHeight,height:this.styleHeight},this.cssVars],onWheelPassive:this.handleWheel},[g(vn,{ref:"scrollbarRef",theme:t.peers.Scrollbar,themeOverrides:t.peerOverrides.Scrollbar,onScroll:this.handleScroll},{default:()=>g(lc,{internalNoHighlight:!0,internalFontSize:this.fontSize,theme:t.peers.Code,themeOverrides:t.peerOverrides.Code},{default:()=>this.mergedLines.map((r,o)=>g(gf,{key:o,line:r}))})}),g(Ut,{name:"fade-in-scale-up-transition"},{default:()=>this.loading?g(mf,{clsPrefix:e}):null})])}}),yf=A("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[R("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),R("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),R("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),A("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[Un({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),R("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),R("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),R("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),Y("&:focus",[R("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),D("round",[R("rail","border-radius: calc(var(--n-rail-height) / 2);",[R("button","border-radius: calc(var(--n-button-height) / 2);")])]),Te("disabled",[Te("icon",[D("rubber-band",[D("pressed",[R("rail",[R("button","max-width: var(--n-button-width-pressed);")])]),R("rail",[Y("&:active",[R("button","max-width: var(--n-button-width-pressed);")])]),D("active",[D("pressed",[R("rail",[R("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),R("rail",[Y("&:active",[R("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),D("active",[R("rail",[R("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),R("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[R("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[Un()]),R("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),D("active",[R("rail","background-color: var(--n-rail-color-active);")]),D("loading",[R("rail",`
 cursor: wait;
 `)]),D("disabled",[R("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),xf=Object.assign(Object.assign({},re.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let zt;const _f=X({name:"Switch",props:xf,slots:Object,setup(e){zt===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?zt=CSS.supports("width","max(1px)"):zt=!1:zt=!0);const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=Oe(e),r=re("Switch","-switch",yf,na,e,t),o=Io(e),{mergedSizeRef:i,mergedDisabledRef:l}=o,a=L(e.defaultValue),s=te(e,"value"),u=Et(s,a),d=$(()=>u.value===e.checkedValue),f=L(!1),h=L(!1),m=$(()=>{const{railStyle:I}=e;if(I)return I({focused:h.value,checked:d.value})});function c(I){const{"onUpdate:value":F,onChange:B,onUpdateValue:U}=e,{nTriggerFormInput:K,nTriggerFormChange:O}=o;F&&he(F,I),U&&he(U,I),B&&he(B,I),a.value=I,K(),O()}function v(){const{nTriggerFormFocus:I}=o;I()}function y(){const{nTriggerFormBlur:I}=o;I()}function p(){e.loading||l.value||(u.value!==e.checkedValue?c(e.checkedValue):c(e.uncheckedValue))}function w(){h.value=!0,v()}function x(){h.value=!1,y(),f.value=!1}function b(I){e.loading||l.value||I.key===" "&&(u.value!==e.checkedValue?c(e.checkedValue):c(e.uncheckedValue),f.value=!1)}function _(I){e.loading||l.value||I.key===" "&&(I.preventDefault(),f.value=!0)}const C=$(()=>{const{value:I}=i,{self:{opacityDisabled:F,railColor:B,railColorActive:U,buttonBoxShadow:K,buttonColor:O,boxShadowFocus:M,loadingColor:z,textColor:V,iconColor:H,[ne("buttonHeight",I)]:G,[ne("buttonWidth",I)]:Z,[ne("buttonWidthPressed",I)]:q,[ne("railHeight",I)]:ee,[ne("railWidth",I)]:T,[ne("railBorderRadius",I)]:E,[ne("buttonBorderRadius",I)]:J},common:{cubicBezierEaseInOut:fe}}=r.value;let ce,ye,me;return zt?(ce=`calc((${ee} - ${G}) / 2)`,ye=`max(${ee}, ${G})`,me=`max(${T}, calc(${T} + ${G} - ${ee}))`):(ce=nt((Le(ee)-Le(G))/2),ye=nt(Math.max(Le(ee),Le(G))),me=Le(ee)>Le(G)?T:nt(Le(T)+Le(G)-Le(ee))),{"--n-bezier":fe,"--n-button-border-radius":J,"--n-button-box-shadow":K,"--n-button-color":O,"--n-button-width":Z,"--n-button-width-pressed":q,"--n-button-height":G,"--n-height":ye,"--n-offset":ce,"--n-opacity-disabled":F,"--n-rail-border-radius":E,"--n-rail-color":B,"--n-rail-color-active":U,"--n-rail-height":ee,"--n-rail-width":T,"--n-width":me,"--n-box-shadow-focus":M,"--n-loading-color":z,"--n-text-color":V,"--n-icon-color":H}}),k=n?Pe("switch",$(()=>i.value[0]),C,e):void 0;return{handleClick:p,handleBlur:x,handleFocus:w,handleKeyup:b,handleKeydown:_,mergedRailStyle:m,pressed:f,mergedClsPrefix:t,mergedValue:u,checked:d,mergedDisabled:l,cssVars:n?void 0:C,themeClass:k==null?void 0:k.themeClass,onRender:k==null?void 0:k.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:t,checked:n,mergedRailStyle:r,onRender:o,$slots:i}=this;o==null||o();const{checked:l,unchecked:a,icon:s,"checked-icon":u,"unchecked-icon":d}=i,f=!(Rt(s)&&Rt(u)&&Rt(d));return g("div",{role:"switch","aria-checked":n,class:[`${e}-switch`,this.themeClass,f&&`${e}-switch--icon`,n&&`${e}-switch--active`,t&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},g("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:r},Me(l,h=>Me(a,m=>h||m?g("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},g("div",{class:`${e}-switch__rail-placeholder`},g("div",{class:`${e}-switch__button-placeholder`}),h),g("div",{class:`${e}-switch__rail-placeholder`},g("div",{class:`${e}-switch__button-placeholder`}),m)):null)),g("div",{class:`${e}-switch__button`},Me(s,h=>Me(u,m=>Me(d,c=>g(ko,null,{default:()=>this.loading?g(pn,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(m||h)?g("div",{class:`${e}-switch__button-icon`,key:m?"checked-icon":"icon"},m||h):!this.checked&&(c||h)?g("div",{class:`${e}-switch__button-icon`,key:c?"unchecked-icon":"icon"},c||h):null})))),Me(l,h=>h&&g("div",{key:"checked",class:`${e}-switch__checked`},h)),Me(a,h=>h&&g("div",{key:"unchecked",class:`${e}-switch__unchecked`},h)))))}});function hh(){const e=pe(lr,null);return $(()=>{if(e===null)return $r;const{mergedThemeRef:{value:t},mergedThemeOverridesRef:{value:n}}=e,r=(t==null?void 0:t.common)||$r;return n!=null&&n.common?Object.assign({},r,n.common):r})}const j=ra("devices",{state:()=>({list:[],nodeHidDevice:[],currentDeviceIndex:-1,macro:[],lastSelectDevice:"",onboardConfigurationFilesName:[],picture:[]}),persist:[{paths:["macro","lastSelectDevice","onboardConfigurationFilesName","picture"],storage:localStorage}],actions:{addHidDevice(e){Ie().DeviceFactoryResetLoading=!1,this.list=e},pushHidDevice(e){this.list.push(e)},selectDevice(e){this.currentDeviceIndex=e},closeCurrentDevice(){if(this.currentDeviceIndex>-1){const e=this.list[this.currentDeviceIndex].device;e.opened&&(e.close(),e.forget(),this.currentDeviceIndex=-1)}},sendReport(e,t){if(t.opened){e.length<63&&(e.length=63,e=e.fill(0,e.length,63));const n=new ArrayBuffer(e.length),r=new DataView(n);for(let o=0;o<e.length;o++)r.setUint8(o,e[o]);return new Promise((o,i)=>{t.sendReport(11,r).then(()=>o()).catch(l=>{l instanceof DOMException?this.removeHidDevice(t):console.error("Error sending report:",l),i(l)})})}else return Promise.reject("设备未打开")},findIndex(e){return this.list.findIndex(t=>t.device.productId===e.productId&&t.device.vendorId===e.vendorId)},updateHidDevice(e,t){const n=this.findIndex(e);n>-1&&(this.list[n]={...this.list[n],...t})},updateHidDeviceBuffer(e,t){const n=this.findIndex(e);n>-1&&(this.list[n].buffer={...this.list[n].buffer,...t})},removeHidDevice(e){const t=this.findIndex(e);if(t>-1){if(this.list[t].is_dfu===!0)return;this.list[t].device.opened&&(this.list[t].device.close(),this.list[t].device.forget(),this.currentDeviceIndex=-1),this.list.splice(t,1),this.currentDeviceIndex===t&&(this.currentDeviceIndex=-1)}},setMacros(e){this.macro=e},updateMacro(e,t){this.macro[e]=t},addMacro(e){this.macro.push(e)},removeMacro(e){this.macro.splice(e,1)},setLastSelectDevice(e){this.lastSelectDevice=e}},getters:{getHidDevices(){return this.list},getCurrentHidDevice(){return this.list[this.currentDeviceIndex]},getMacros(){return this.macro},getLastSelectDevice(){return this.lastSelectDevice},getCurrentDeviceIndex(){return this.currentDeviceIndex}}}),Cf=j(),{getCurrentHidDevice:Ii}=Mo(Cf),nn=async e=>new Promise(t=>setTimeout(t,e)),gt=$(()=>{const{device:{vendorId:e,productId:t}}=Ii.value;return it.find(r=>r.vendorId===e&&r.productId===t).bleSupport250HzSetting}),Nn=$(()=>{const{device:{vendorId:e,productId:t}}=Ii.value;return it.find(r=>r.vendorId===e&&r.productId===t).lcdDisplaySettingSupported}),vo={taskQueue:[],task_interval:null,useDevicesStore:j(),useAppStore:Ie(),getVersion:()=>513,reportCmd:{12:(e,t)=>{const n=j().getCurrentHidDevice;if(n&&n.buffer&&n.buffer.mouse_config){const r=n.buffer.mouse_config;switch(e[2]){case 193:j().updateHidDevice(t,{current_dpi:e[3]}),r[3]=e[3],j().updateHidDeviceBuffer(t,{mouse_config:r});break;case 196:j().updateHidDevice(t,{power:e[3],is_charge:!!(!e[4]&&e[5])});break;case 198:Ie().DeviceFactoryResetLoading?console.log(Ie().DeviceFactoryResetLoading):j().updateHidDevice(t,{sleep:e[4]>=2});break;case 194:j().getCurrentHidDevice.wireless_connected?j().updateHidDevice(t,{report_rate:e[3]}):j().updateHidDevice(t,{usb_report_rate:e[3]});break;case 199:Ie().DeviceFactoryResetLoading||e[3]==0&&(j().selectDevice(-1),j().addHidDevice([]));break}}},13:(e,t)=>{var b;let n="";e[3]===2||e[3]===3||e[3]===6||e[3]===7?n="mouseMode.wired":e[3]===0||e[3]===1||e[3]===4||e[3]===5?n="mouseMode.wireless":n="mouseMode.unknown";const r=e[10]>>4&15,o=e[10]&15,i=e[11]*1e4+r*100+o,l=`${e[11]}.${r}.${o}`,a=(e[11]<<8)+e[10],s=e[12]>>4&15,u=e[12]&15,d=e[13]*1e4+s*100+u,f=`${e[13]}.${s}.${u}`,h=(e[13]<<8)+e[12],m=e[14],c=(b=j().picture.find(_=>_.vendorId===t.vendorId&&_.productId===t.productId))==null?void 0:b.mid,v=c??e[15],y=e[19]===1||e[17]>=100?!1:e[16]===1,p=e[17],w=e[19]===1,x=e[20];j().updateHidDeviceBuffer(t,{mouse_info:e}),j().updateHidDevice(t,{receiver_version_origin:a,mouse_version_origin:h,receiver_version:i,mouse_version:d,receiver_version_text:l,mouse_version_text:f,receiver_version_number:i,mouse_version_number:d,mode:n,power:p,is_charge:y,cid:m,mid:v,wireless_connected:w,current_configuration:x})},14:(e,t)=>{j().updateHidDevice(t,{sleep:!e[3]})},15:(e,t)=>{j().updateHidDeviceBuffer(t,{button_info:$e.getArrayIndex(e,3,e.length)}),j().updateHidDevice(t,{mouse_key:{left:[e[3],e[4],e[5]],middle:[e[6],e[7],e[8]],right:[e[9],e[10],e[11]],backward:[e[12],e[13],e[14]],forward:[e[15],e[16],e[17]],dpi:[e[18],e[19],e[20]],"":[]}})},16:(e,t)=>{const n=$e.getArrayIndex(e,3,e.length);j().updateHidDeviceBuffer(t,{button_info:n}),Ie().updateHidDeviceBuffer({button_info:n}),j().updateHidDevice(t,{mouse_key:{left:[e[3],e[4],e[5]],middle:[e[6],e[7],e[8]],right:[e[9],e[10],e[11]],backward:[e[12],e[13],e[14]],forward:[e[15],e[16],e[17]],dpi:[e[18],e[19],e[20]],"":[]}})},17:(e,t)=>{const n=e[3],r=e[4],o=e[5],i=e[6],l=e[9],a=e[10],s=e[11]===1,u=e[13]===1,d=e[14],f=e[18]===1,h=e[28],m=e[30],c=e[31],v=e[32];let y=0,p=0,w=0;Nn.value?(y=e[33],p=e[34],gt.value&&(w=e[35])):gt.value&&(w=e[33]),j().updateHidDevice(t,{report_rate:n,usb_report_rate:r,max_dpi:o,current_dpi:i,silent_height:l,key_debounce_time:a,motion_sync_enable:s,linear_correction_enable:u,ripple_control_option:d,sensor_power_saving_mode_enable:f,sleep_time:h,RGB_effect:m,RGB_brightness:c,RGB_speed:v,LCD_show_hide:y,LCD_move_shutoff:p,BLE_250Hz_Setting_Enable:w}),j().updateHidDeviceBuffer(t,{mouse_config:$e.getArrayIndex(e,3,e.length)})},18:(e,t)=>{const n=e[3],r=e[4],o=e[5],i=e[6],l=e[9],a=e[10],s=e[11]===1,u=e[13]===1,d=e[14],f=e[18]===1,h=e[28],m=e[30],c=e[31],v=e[32];let y=0,p=0,w=0;Nn.value?(y=e[33],p=e[34],gt.value&&(w=e[35])):gt.value&&(w=e[33]),j().updateHidDevice(t,{report_rate:n,usb_report_rate:r,max_dpi:o,current_dpi:i,silent_height:l,key_debounce_time:a,motion_sync_enable:s,linear_correction_enable:u,ripple_control_option:d,sensor_power_saving_mode_enable:f,sleep_time:h,RGB_effect:m,RGB_brightness:c,RGB_speed:v,LCD_show_hide:y,LCD_move_shutoff:p,BLE_250Hz_Setting_Enable:w});const x=$e.getArrayIndex(e,3,e.length);j().updateHidDeviceBuffer(t,{mouse_config:x}),Ie().updateHidDeviceBuffer({mouse_config:x})},19:(e,t)=>{j().updateHidDeviceBuffer(t,{mouse_dpi_config:$e.getArrayIndex(e,3,e.length)})},20:()=>{},21:()=>{},22:(e,t)=>{const n=e[3],r=e[4];j().updateHidDevice(t,{max_dpi:r,current_dpi:n})},28:(e,t)=>{const n=e[4],r=e[5],o=e[6],i=j().getCurrentHidDevice.buffer.mouse_config;i[27]=n,i[28]=r,i[29]=o,j().updateHidDeviceBuffer(t,{mouse_config:i}),j().updateHidDevice(t,{RGB_effect:n,RGB_brightness:r,RGB_speed:o})},"1A":(e,t)=>{const n=$e.getArrayIndex(e,3,e.length);j().updateHidDeviceBuffer(t,{mouse_dpi_config:n}),Ie().updateHidDeviceBuffer({mouse_dpi_config:n})},"1B":()=>{},"1C":()=>{},"1D":(e,t)=>{const n=e;j().updateHidDevice(t,{combination_key:n})},"1E":function(e,t){const n=e;j().updateHidDevice(t,{combination_key:n})},30:function(e,t){console.log("恢复出厂设置, reportcmd, 0x30"),Ie().DeviceFactoryResetLoading=!1,j().updateHidDevice(t,{is_reseting:!1});const n=j().getCurrentHidDevice;n!=null&&n.device&&$e.queueExecute([()=>rn(n==null?void 0:n.device,"13"),async()=>{await nn(80)},()=>rn(n==null?void 0:n.device,"15"),async()=>{await nn(80)},()=>rn(n==null?void 0:n.device,"17"),async()=>{await nn(80)},()=>rn(n==null?void 0:n.device,"19")],100)},EF:function(e,t){j().updateHidDevice(t,{is_dfu:!0})}},report(e,t){$e.arrayBuffer2Hex(t.buffer).then(n=>{Ie().onboardSwitchLoading?(n[2]==="00"&&n[0]!="21"&&n[0]!="C1"&&n[0]!="12"?this.reportCmd[n[0]](n.map(r=>$e.toDec(r)),e):n[0]==="12"&&this.reportCmd[n[0]](n.map(r=>$e.toDec(r)),e),n[0]==="21"&&n[2]==="00"&&(Ie().onboardSwitchProfileReturn=!0),n[0]==="13"&&n[2]==="00"?Ie().onboardSwitchProgress=40:n[0]==="15"&&n[2]==="00"?Ie().onboardSwitchProgress=60:n[0]==="17"&&n[2]==="00"?Ie().onboardSwitchProgress=80:n[0]==="19"&&n[2]==="00"&&(Ie().onboardSwitchProgress=100)):n[2]==="00"?this.reportCmd[n[0]](n.map(r=>$e.toDec(r)),e):n[0]==="12"&&this.reportCmd[n[0]](n.map(r=>$e.toDec(r)),e)}).catch(n=>{console.log(n,"error")})},sendCmd:{send:(e,t)=>j().sendReport(t,e),13:function(e){return this.send(e,[19,0,0])},14:function(e){return this.send(e,[20,0,0])},15:function(e){return this.send(e,[21,0,0])},16:function(e,t){return this.send(e,[22,18,...t])},17:function(e){return this.send(e,[23,0,0])},18:function(e,t){return Nn.value?gt.value?this.send(e,[24,33,...t]):this.send(e,[24,32,...t]):gt.value?this.send(e,[24,31,...t]):this.send(e,[24,30,...t])},19:function(e){return this.send(e,[25,0,0])},20:function(e,t){return this.send(e,[32,Number($e.toHex(t.length)),...t])},21:function(e,t){return this.send(e,[33,1,t])},22:function(e,t){return this.send(e,[34,2,...t])},28:function(e,t){return this.send(e,[40,4,...t])},"1A":function(e,t){return this.send(e,[26,48,...t])},"1B":function(e){return this.send(e,[27,0])},"1C":function(e){return this.send(e,[28,0])},"1D":function(e,t){return this.send(e,[29,1,t])},"1E":function(e,t){return this.send(e,[30,Number($e.toHex(t.length)),...t])},30:async function(e){return Ie().DeviceFactoryResetLoading=!0,await nn(100),await this.send(e,[48,1,255])},EF:function(e){return this.send(e,[239,0,0])}}},et=""+new URL("M30_BLACK-DV9--Pvr.png",import.meta.url).href,go=[{name:"IRISv2-NearLink",Id:"M30_IRISv2_1K1K_V2",vendorId:13884,productId:60421,usagePage:65440,usage:2,isDongle:!1,wirelessReportRates:[{label:"1000",value:1},{label:"500",value:2},{label:"250",value:4},{label:"125",value:8}],wiredReportRates:[{label:"1000",value:1},{label:"500",value:2},{label:"250",value:4},{label:"125",value:8}],configuration:vo,picture:[{mid:0,src:et,zhCN:"黑色",enUS:"Black",ruRU:""},{mid:1,src:et,zhCN:"黑色",enUS:"Black",ruRU:""},{mid:2,src:et,zhCN:"黑色",enUS:"Black",ruRU:""},{mid:3,src:et,zhCN:"黑色",enUS:"Black",ruRU:""}],switch_picture:!1,dpiLightEffectSetting:!0,sensor_type:"PAW3395",sensor_lift_values:[{label:"1mm",value:1},{label:"2mm",value:2}],sensor_max_dpi:26e3,sensor_min_dpi:50,sensor_dpi_step:50,lcdDisplaySettingSupported:!1,dpiButtonSetting:!1,lodSetting:!0,isOfficeDevice:!1,d2fpZeroKeyDebouceSupported:!1,bleSupport250HzSetting:!1,firmware:[{folder:"1.0.13",mouse:{version:"1.0.13",fw:"MOUSE_SIGN_V1_0_13-02449AF2.BIN",updateLog:{zhCN:`>首次发布版本
>支持移动唤醒电脑设置
>支持一键无缝升级
>优化性能`,enUS:`>Support mobile wake up computer.
> Optimize performance.`,ruRU:`>Support mobile wake up computer.
> Optimize performance.`}},dongle:{version:"1.0.13",fw:"DONGLE_SIGN_V1_0_13-01BD50A2.BIN",updateLog:{zhCN:`>首次发布版本
>支持移动唤醒电脑设置
>支持一键无缝升级
>优化性能`,enUS:`>Support mobile wake up computer.
> Optimize performance.`,ruRU:`>Support mobile wake up computer.
> Optimize performance.`}},firmware_tool:"OTA_M30_IRISv2_3395_1K_SIGN_V1_0_13-02449AF2-01BD50A2.zip",latest:!0},{folder:"1.0.12",mouse:{version:"1.0.12",fw:"MOUSE_SIGN_V1_0_12-0244C418.BIN",updateLog:{zhCN:`>首次发布版本
>支持移动唤醒电脑设置
>支持一键无缝升级
>优化性能`,enUS:`>Support mobile wake up computer.
> Optimize performance.`,ruRU:`>Support mobile wake up computer.
> Optimize performance.`}},dongle:{version:"1.0.12",fw:"DONGLE_SIGN_V1_0_12-01BCB8FB.BIN",updateLog:{zhCN:`>首次发布版本
>支持移动唤醒电脑设置
>支持一键无缝升级
>优化性能`,enUS:`>Support mobile wake up computer.
> Optimize performance.`,ruRU:`>Support mobile wake up computer.
> Optimize performance.`}},firmware_tool:"OTA_M30_IRISv2_3395_1K_SIGN_V1_0_12-0244C418-01BCB8FB.zip"},{folder:"1.0.11",mouse:{version:"1.0.11",fw:"MOUSE_SIGN_V1_0_11-0245340F.BIN",updateLog:{zhCN:`>首次发布版本
>支持移动唤醒电脑设置
>支持一键无缝升级
>优化性能`,enUS:`>Support mobile wake up computer.
> Optimize performance.`,ruRU:`>Support mobile wake up computer.
> Optimize performance.`}},dongle:{version:"1.0.11",fw:"DONGLE_SIGN_V1_0_11-01BD729D.BIN",updateLog:{zhCN:`>首次发布版本
>支持移动唤醒电脑设置
>支持一键无缝升级
>优化性能`,enUS:`>Support mobile wake up computer.
> Optimize performance.`,ruRU:`>Support mobile wake up computer.
> Optimize performance.`}},firmware_tool:"OTA_M30_IRISv2_3395_1K_SIGN_V1_0_11-0245340F-01BD729D.zip"},{folder:"1.0.10",mouse:{version:"1.0.10",fw:"MOUSE_SIGN_V1_0_10-02466C19.BIN",updateLog:{zhCN:`>首次发布版本
>支持移动唤醒电脑设置
>支持一键无缝升级
>优化性能`,enUS:`>Support mobile wake up computer.
> Optimize performance.`,ruRU:`>Support mobile wake up computer.
> Optimize performance.`}},dongle:{version:"1.0.10",fw:"DONGLE_SIGN_V1_0_10-01BCBE7C.BIN",updateLog:{zhCN:`>首次发布版本
>支持移动唤醒电脑设置
>支持一键无缝升级
>优化性能`,enUS:`>Support mobile wake up computer.
> Optimize performance.`,ruRU:`>Support mobile wake up computer.
> Optimize performance.`}},firmware_tool:"OTA_M30_IRISv2_3395_1K_SIGN_V1_0_10-02466C19-01BCBE7C.zip"},{folder:"1.0.9",mouse:{version:"1.0.9",fw:"MOUSE_SIGN_V1_0_9-0246053D.BIN",updateLog:{zhCN:`>首次发布版本
>支持移动唤醒电脑设置
>支持一键无缝升级
>优化性能`,enUS:`>Support mobile wake up computer.
> Optimize performance.`,ruRU:`>Support mobile wake up computer.
> Optimize performance.`}},dongle:{version:"1.0.9",fw:"DONGLE_SIGN_V1_0_9-01BCBE7C.BIN",updateLog:{zhCN:`>首次发布版本
>支持移动唤醒电脑设置
>支持一键无缝升级
>优化性能`,enUS:`>Support mobile wake up computer.
> Optimize performance.`,ruRU:`>Support mobile wake up computer.
> Optimize performance.`}},firmware_tool:"OTA_M30_IRISv2_3395_1K_SIGN_V1_0_9-0246053D-01BCBE7C.zip"},{folder:"1.0.8",mouse:{version:"1.0.8",fw:"MOUSE_SIGN_V1_0_8-024664AD.BIN",updateLog:{zhCN:`>首次发布版本
>支持移动唤醒电脑设置
>支持一键无缝升级
>优化性能`,enUS:`>Support mobile wake up computer.
> Optimize performance.`,ruRU:`>Support mobile wake up computer.
> Optimize performance.`}},dongle:{version:"1.0.8",fw:"DONGLE_SIGN_V1_0_8-01BC4890.BIN",updateLog:{zhCN:`>首次发布版本
>支持移动唤醒电脑设置
>支持一键无缝升级
>优化性能`,enUS:`>Support mobile wake up computer.
> Optimize performance.`,ruRU:`>Support mobile wake up computer.
> Optimize performance.`}},firmware_tool:"OTA_M30_IRISv2_3395_1K_SIGN_V1_0_8-024664AD-01BC4890.zip"},{folder:"1.0.7",mouse:{version:"1.0.7",fw:"MOUSE_SIGN_V1_0_7-02467CD3.BIN",updateLog:{zhCN:`>首次发布版本
>支持移动唤醒电脑设置
>支持一键无缝升级
>优化性能`,enUS:`>Support mobile wake up computer.
> Optimize performance.`,ruRU:`>Support mobile wake up computer.
> Optimize performance.`}},dongle:{version:"1.0.7",fw:"DONGLE_SIGN_V1_0_7-01BD0E81.BIN",updateLog:{zhCN:`>首次发布版本
>支持移动唤醒电脑设置
>支持一键无缝升级
>优化性能`,enUS:`>Support mobile wake up computer.
> Optimize performance.`,ruRU:`>Support mobile wake up computer.
> Optimize performance.`}},firmware_tool:"OTA_M30_IRISv2_3395_1K_SIGN_V1_0_7-02467CD3-01BD0E81.zip"},{folder:"1.0.6",mouse:{version:"1.0.6",fw:"MOUSE_SIGN_V1_0_6-024447F8.BIN",updateLog:{zhCN:`>首次发布版本
>支持移动唤醒电脑设置
>支持一键无缝升级
>优化性能`,enUS:`>Support mobile wake up computer.
> Optimize performance.`,ruRU:`>Support mobile wake up computer.
> Optimize performance.`}},dongle:{version:"1.0.6",fw:"DONGLE_SIGN_V1_0_6-01BC99BB.BIN",updateLog:{zhCN:`>首次发布版本
>支持移动唤醒电脑设置
>支持一键无缝升级
>优化性能`,enUS:`>Support mobile wake up computer.
> Optimize performance.`,ruRU:`>Support mobile wake up computer.
> Optimize performance.`}},firmware_tool:"OTA_M30_IRISv2_3395_1K_SIGN_V1_0_6-024447F8-01BC99BB.zip"}],dpiKeyPosition:"top-[205px] right-[-95px]",dpiKeyWidth:"!w-[90px]",dpiKeyOnBottom:!0},{name:"IRISv2-NearLink Dongle",Id:"M30_IRISv2_1K1K_V2",vendorId:13884,productId:60422,usagePage:65440,usage:2,isDongle:!0,wirelessReportRates:[{label:"1000",value:1},{label:"500",value:2},{label:"250",value:4},{label:"125",value:8}],wiredReportRates:[{label:"1000",value:1},{label:"500",value:2},{label:"250",value:4},{label:"125",value:8}],configuration:vo,picture:[{mid:0,src:et,zhCN:"黑色",enUS:"Black",ruRU:""},{mid:1,src:et,zhCN:"黑色",enUS:"Black",ruRU:""},{mid:2,src:et,zhCN:"黑色",enUS:"Black",ruRU:""},{mid:3,src:et,zhCN:"黑色",enUS:"Black",ruRU:""}],switch_picture:!1,dpiLightEffectSetting:!0,sensor_type:"PAW3395",sensor_lift_values:[{label:"1mm",value:1},{label:"2mm",value:2}],sensor_max_dpi:26e3,sensor_min_dpi:50,sensor_dpi_step:50,lcdDisplaySettingSupported:!1,dpiButtonSetting:!1,lodSetting:!0,isOfficeDevice:!1,d2fpZeroKeyDebouceSupported:!1,bleSupport250HzSetting:!1,firmware:[{folder:"1.0.13",mouse:{version:"1.0.13",fw:"MOUSE_SIGN_V1_0_13-02449AF2.BIN",updateLog:{zhCN:`>首次发布版本
>支持移动唤醒电脑设置
>支持一键无缝升级
>优化性能`,enUS:`>Support mobile wake up computer.
> Optimize performance.`,ruRU:`>Support mobile wake up computer.
> Optimize performance.`}},dongle:{version:"1.0.13",fw:"DONGLE_SIGN_V1_0_13-01BD50A2.BIN",updateLog:{zhCN:`>首次发布版本
>支持移动唤醒电脑设置
>支持一键无缝升级
>优化性能`,enUS:`>Support mobile wake up computer.
> Optimize performance.`,ruRU:`>Support mobile wake up computer.
> Optimize performance.`}},firmware_tool:"OTA_M30_IRISv2_3395_1K_SIGN_V1_0_13-02449AF2-01BD50A2.zip",latest:!0},{folder:"1.0.12",mouse:{version:"1.0.12",fw:"MOUSE_SIGN_V1_0_12-0244C418.BIN",updateLog:{zhCN:`>首次发布版本
>支持移动唤醒电脑设置
>支持一键无缝升级
>优化性能`,enUS:`>Support mobile wake up computer.
> Optimize performance.`,ruRU:`>Support mobile wake up computer.
> Optimize performance.`}},dongle:{version:"1.0.12",fw:"DONGLE_SIGN_V1_0_12-01BCB8FB.BIN",updateLog:{zhCN:`>首次发布版本
>支持移动唤醒电脑设置
>支持一键无缝升级
>优化性能`,enUS:`>Support mobile wake up computer.
> Optimize performance.`,ruRU:`>Support mobile wake up computer.
> Optimize performance.`}},firmware_tool:"OTA_M30_IRISv2_3395_1K_SIGN_V1_0_12-0244C418-01BCB8FB.zip"},{folder:"1.0.11",mouse:{version:"1.0.11",fw:"MOUSE_SIGN_V1_0_11-0245340F.BIN",updateLog:{zhCN:`>首次发布版本
>支持移动唤醒电脑设置
>支持一键无缝升级
>优化性能`,enUS:`>Support mobile wake up computer.
> Optimize performance.`,ruRU:`>Support mobile wake up computer.
> Optimize performance.`}},dongle:{version:"1.0.11",fw:"DONGLE_SIGN_V1_0_11-01BD729D.BIN",updateLog:{zhCN:`>首次发布版本
>支持移动唤醒电脑设置
>支持一键无缝升级
>优化性能`,enUS:`>Support mobile wake up computer.
> Optimize performance.`,ruRU:`>Support mobile wake up computer.
> Optimize performance.`}},firmware_tool:"OTA_M30_IRISv2_3395_1K_SIGN_V1_0_11-0245340F-01BD729D.zip"},{folder:"1.0.10",mouse:{version:"1.0.10",fw:"MOUSE_SIGN_V1_0_10-02466C19.BIN",updateLog:{zhCN:`>首次发布版本
>支持移动唤醒电脑设置
>支持一键无缝升级
>优化性能`,enUS:`>Support mobile wake up computer.
> Optimize performance.`,ruRU:`>Support mobile wake up computer.
> Optimize performance.`}},dongle:{version:"1.0.10",fw:"DONGLE_SIGN_V1_0_10-01BCBE7C.BIN",updateLog:{zhCN:`>首次发布版本
>支持移动唤醒电脑设置
>支持一键无缝升级
>优化性能`,enUS:`>Support mobile wake up computer.
> Optimize performance.`,ruRU:`>Support mobile wake up computer.
> Optimize performance.`}},firmware_tool:"OTA_M30_IRISv2_3395_1K_SIGN_V1_0_10-02466C19-01BCBE7C.zip"},{folder:"1.0.9",mouse:{version:"1.0.9",fw:"MOUSE_SIGN_V1_0_9-0246053D.BIN",updateLog:{zhCN:`>首次发布版本
>支持移动唤醒电脑设置
>支持一键无缝升级
>优化性能`,enUS:`>Support mobile wake up computer.
> Optimize performance.`,ruRU:`>Support mobile wake up computer.
> Optimize performance.`}},dongle:{version:"1.0.9",fw:"DONGLE_SIGN_V1_0_9-01BCBE7C.BIN",updateLog:{zhCN:`>首次发布版本
>支持移动唤醒电脑设置
>支持一键无缝升级
>优化性能`,enUS:`>Support mobile wake up computer.
> Optimize performance.`,ruRU:`>Support mobile wake up computer.
> Optimize performance.`}},firmware_tool:"OTA_M30_IRISv2_3395_1K_SIGN_V1_0_9-0246053D-01BCBE7C.zip"},{folder:"1.0.8",mouse:{version:"1.0.8",fw:"MOUSE_SIGN_V1_0_8-024664AD.BIN",updateLog:{zhCN:`>首次发布版本
>支持移动唤醒电脑设置
>支持一键无缝升级
>优化性能`,enUS:`>Support mobile wake up computer.
> Optimize performance.`,ruRU:`>Support mobile wake up computer.
> Optimize performance.`}},dongle:{version:"1.0.8",fw:"DONGLE_SIGN_V1_0_8-01BC4890.BIN",updateLog:{zhCN:`>首次发布版本
>支持移动唤醒电脑设置
>支持一键无缝升级
>优化性能`,enUS:`>Support mobile wake up computer.
> Optimize performance.`,ruRU:`>Support mobile wake up computer.
> Optimize performance.`}},firmware_tool:"OTA_M30_IRISv2_3395_1K_SIGN_V1_0_8-024664AD-01BC4890.zip"},{folder:"1.0.7",mouse:{version:"1.0.7",fw:"MOUSE_SIGN_V1_0_7-02467CD3.BIN",updateLog:{zhCN:`>首次发布版本
>支持移动唤醒电脑设置
>支持一键无缝升级
>优化性能`,enUS:`>Support mobile wake up computer.
> Optimize performance.`,ruRU:`>Support mobile wake up computer.
> Optimize performance.`}},dongle:{version:"1.0.7",fw:"DONGLE_SIGN_V1_0_7-01BD0E81.BIN",updateLog:{zhCN:`>首次发布版本
>支持移动唤醒电脑设置
>支持一键无缝升级
>优化性能`,enUS:`>Support mobile wake up computer.
> Optimize performance.`,ruRU:`>Support mobile wake up computer.
> Optimize performance.`}},firmware_tool:"OTA_M30_IRISv2_3395_1K_SIGN_V1_0_7-02467CD3-01BD0E81.zip"},{folder:"1.0.6",mouse:{version:"1.0.6",fw:"MOUSE_SIGN_V1_0_6-024447F8.BIN",updateLog:{zhCN:`>首次发布版本
>支持移动唤醒电脑设置
>支持一键无缝升级
>优化性能`,enUS:`>Support mobile wake up computer.
> Optimize performance.`,ruRU:`>Support mobile wake up computer.
> Optimize performance.`}},dongle:{version:"1.0.6",fw:"DONGLE_SIGN_V1_0_6-01BC99BB.BIN",updateLog:{zhCN:`>首次发布版本
>支持移动唤醒电脑设置
>支持一键无缝升级
>优化性能`,enUS:`>Support mobile wake up computer.
> Optimize performance.`,ruRU:`>Support mobile wake up computer.
> Optimize performance.`}},firmware_tool:"OTA_M30_IRISv2_3395_1K_SIGN_V1_0_6-024447F8-01BC99BB.zip"}],dpiKeyPosition:"top-[205px] right-[-95px]",dpiKeyWidth:"!w-[90px]",dpiKeyOnBottom:!0}],Sf=65286,kf=65287,Of=65281,zi=JSON.parse('[{"vendorId":"0x363c","productId":"0xff06","usagePage":"0xffdf","usage":"0x01"},{"vendorId":"0x363c","productId":"0xff07","usagePage":"0xffdf","usage":"0x01", "is_dongle":true}]').map(e=>({vendorId:parseInt(e.vendorId,16),productId:parseInt(e.productId,16),usagePage:parseInt(e.usagePage,16),usage:parseInt(e.usage,16)})),ph=zi.filter(e=>e.productId===kf||e.productId===Of),vh=zi.filter(e=>e.productId===Sf),mo=JSON.parse('[{"vendorId":"0x363c","productId":"0xec05"},{"vendorId":"0x363c","productId":"0xec06"}]').map(e=>({vendorId:parseInt(e.vendorId,16),productId:parseInt(e.productId,16)}));let it=[];mo.length?mo.forEach(e=>{const t=go.find(n=>n.vendorId===e.vendorId&&n.productId===e.productId);t&&it.push(t)}):it=go;const gh=e=>{const t=it.find(n=>n.vendorId===e.device.vendorId&&n.productId===e.device.productId);t&&t.configuration.report(t,e.data)},rn=(e,t,n)=>{const r=it.find(o=>o.vendorId===e.vendorId&&o.productId===e.productId);return r?r.configuration.sendCmd[t](e,n):Promise.reject("未找到设备")},mh=e=>{const t=it.find(n=>n.vendorId===e.vendorId&&n.productId===e.productId);return t?t.configuration.getVersion():Promise.reject("未找到设备")},bh=(e,t,n,r)=>e===13884&&(t===65424||t===65425)||e===13884&&(t===65432||t===65433)?r>=262:e===13884&&(t===65438||t===65439)?r>=518:e===13884&&(t===64515||t===64517)?r>=263:e===13884&&(t===65384||t===65385)?r>=262:!0,wh=e=>new Promise((t,n)=>{setTimeout(()=>{t(!0)},e)}),If=["src"],yh=X({__name:"index",props:{item:{}},setup(e){const t=e,n=$(()=>{var o;return((o=it.find(i=>i.vendorId===t.item.device.vendorId&&i.productId===t.item.device.productId).picture.find(i=>i.mid===t.item.mid))==null?void 0:o.src)||""});return(r,o)=>(Ne(),je("img",{class:"mx-auto block",width:"100px",src:n.value},null,8,If))}}),zf={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},$f=De("path",{d:"M264 480A232 232 0 0 1 32 248c0-94 54-178.28 137.61-214.67a16 16 0 0 1 21.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200c31.34 0 59.57-5.07 81.61-14.67a16 16 0 0 1 21.06 21.06C442.28 426 358 480 264 480z",fill:"currentColor"},null,-1),Rf=[$f],Mf=X({name:"Moon",render:function(t,n){return Ne(),je("svg",zf,Rf)}}),Tf={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Bf=De("path",{d:"M256 176a80 80 0 1 0 80 80a80.24 80.24 0 0 0-80-80zm172.72 80a165.53 165.53 0 0 1-1.64 22.34l48.69 38.12a11.59 11.59 0 0 1 2.63 14.78l-46.06 79.52a11.64 11.64 0 0 1-14.14 4.93l-57.25-23a176.56 176.56 0 0 1-38.82 22.67l-8.56 60.78a11.93 11.93 0 0 1-11.51 9.86h-92.12a12 12 0 0 1-11.51-9.53l-8.56-60.78A169.3 169.3 0 0 1 151.05 393L93.8 416a11.64 11.64 0 0 1-14.14-4.92L33.6 331.57a11.59 11.59 0 0 1 2.63-14.78l48.69-38.12A174.58 174.58 0 0 1 83.28 256a165.53 165.53 0 0 1 1.64-22.34l-48.69-38.12a11.59 11.59 0 0 1-2.63-14.78l46.06-79.52a11.64 11.64 0 0 1 14.14-4.93l57.25 23a176.56 176.56 0 0 1 38.82-22.67l8.56-60.78A11.93 11.93 0 0 1 209.94 26h92.12a12 12 0 0 1 11.51 9.53l8.56 60.78A169.3 169.3 0 0 1 361 119l57.2-23a11.64 11.64 0 0 1 14.14 4.92l46.06 79.52a11.59 11.59 0 0 1-2.63 14.78l-48.69 38.12a174.58 174.58 0 0 1 1.64 22.66z",fill:"currentColor"},null,-1),Pf=[Bf],xh=X({name:"SettingsSharp",render:function(t,n){return Ne(),je("svg",Tf,Pf)}}),Af={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Ef=To('<path d="M234 26h44v92h-44z" fill="currentColor"></path><path d="M234 394h44v92h-44z" fill="currentColor"></path><path d="M338.025 142.857l65.054-65.054l31.113 31.113l-65.054 65.054z" fill="currentColor"></path><path d="M77.815 403.074l65.054-65.054l31.113 31.113l-65.054 65.054z" fill="currentColor"></path><path d="M394 234h92v44h-92z" fill="currentColor"></path><path d="M26 234h92v44H26z" fill="currentColor"></path><path d="M338.029 369.14l31.112-31.113l65.054 65.054l-31.112 31.112z" fill="currentColor"></path><path d="M77.802 108.92l31.113-31.113l65.054 65.054l-31.113 31.112z" fill="currentColor"></path><path d="M256 358a102 102 0 1 1 102-102a102.12 102.12 0 0 1-102 102z" fill="currentColor"></path>',9),Lf=[Ef],Ff=X({name:"SunnySharp",render:function(t,n){return Ne(),je("svg",Af,Lf)}}),Nf={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Df=De("path",{d:"M346.65 304.3a136 136 0 0 0-180.71 0a21 21 0 1 0 27.91 31.38a94 94 0 0 1 124.89 0a21 21 0 0 0 27.91-31.4z",fill:"currentColor"},null,-1),Uf=De("path",{d:"M256.28 183.7a221.47 221.47 0 0 0-151.8 59.92a21 21 0 1 0 28.68 30.67a180.28 180.28 0 0 1 246.24 0a21 21 0 1 0 28.68-30.67a221.47 221.47 0 0 0-151.8-59.92z",fill:"currentColor"},null,-1),Vf=De("path",{d:"M462 175.86a309 309 0 0 0-411.44 0a21 21 0 1 0 28 31.29a267 267 0 0 1 355.43 0a21 21 0 0 0 28-31.31z",fill:"currentColor"},null,-1),jf=De("circle",{cx:"256.28",cy:"393.41",r:"32",fill:"currentColor"},null,-1),Hf=[Df,Uf,Vf,jf],_h=X({name:"Wifi",render:function(t,n){return Ne(),je("svg",Nf,Hf)}}),Wf={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},Gf=To('<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="19" r="2"></circle><path d="M12 17V5.5"></path><path d="M7 10v3l5 3"></path><path d="M12 14.5l5-2V10"></path><path d="M16 10h2V8h-2z"></path><circle cx="7" cy="9" r="1"></circle><path d="M10 5.5h4L12 3z"></path></g>',1),qf=[Gf],Ch=X({name:"Usb",render:function(t,n){return Ne(),je("svg",Wf,qf)}}),Sh=X({__name:"index",props:{modelValue:{type:Boolean,default:!1},title:{default:""},style:{default:""},closable:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(e,{emit:t}){const n=t,r=()=>{n("update:modelValue",!1)};return(o,i)=>{const l=la;return Ne(),oa(l,{show:o.modelValue,preset:"dialog","show-icon":!1,style:ia(o.style),closable:o.closable,onClose:r},{header:Ee(()=>[ln(o.$slots,"header",{},()=>[aa(Bo(o.title),1)])]),action:Ee(()=>[ln(o.$slots,"action")]),default:Ee(()=>[ln(o.$slots,"content")]),_:3},8,["show","style","closable"])}}}),Kf={class:"mt-5"},Yf={class:"dark-switch"},Xf=X({__name:"index",setup(e){const{locale:t}=sa(),n=Ie(),{language:r,theme:o}=Mo(n),i=L(o.value==="dark"),l=L([]),a=JSON.parse('["enUS"]');Array.isArray(a)&&a.length>0?l.value=a.map(d=>Rr[d]).map(d=>({label:d.language.label,value:d.language.value})):l.value=Object.values(Rr).map(d=>d.language);const s=d=>{n.changeLanguage(t,d)},u=d=>{n.changeTheme(d?"dark":"light"),d?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),Po.send("set-theme",d?"dark":"light")};return(d,f)=>{const h=dc,m=sf,c=_c,v=yi,y=_f,p=cc,w=ua;return Ne(),je("div",Kf,[Fe(c,{"label-width":80},{default:Ee(()=>[Fe(m,{label:d.$t("language.txt")},{default:Ee(()=>[Fe(h,{value:Cn(r),"onUpdate:value":[f[0]||(f[0]=x=>da(r)?r.value=x:null),s],options:l.value},null,8,["value","options"])]),_:1},8,["label"])]),_:1}),Fe(c,{"label-width":80},{default:Ee(()=>[Fe(m,{label:d.$t("setting.theme.title")},{default:Ee(()=>[De("div",Yf,[Fe(p,{placement:"bottom"},{trigger:Ee(()=>[Fe(y,{value:i.value,"onUpdate:value":[f[1]||(f[1]=x=>i.value=x),u]},{unchecked:Ee(()=>[Fe(v,{size:"14",color:"#ffd93b"},{default:Ee(()=>[Fe(Cn(Ff))]),_:1})]),checked:Ee(()=>[Fe(v,{size:"14",color:"#ffd93b"},{default:Ee(()=>[Fe(Cn(Mf))]),_:1})]),_:1},8,["value"])]),default:Ee(()=>[De("span",null,Bo(i.value?d.$t("setting.theme.dark"):d.$t("setting.theme.light")),1)]),_:1})])]),_:1},8,["label"])]),_:1}),Fe(w)])}}}),kh=Ao(Xf,[["__scopeId","data-v-f952977e"]]),ze=class ze{constructor(){ge(this,"flag");ge(this,"headCRC");ge(this,"headLength");ge(this,"fwLength");ge(this,"nextFileAddress");ge(this,"version");ge(this,"DeciveType");ge(this,"VID");ge(this,"PID");ge(this,"BOOT_VID");ge(this,"BOOT_PID");ge(this,"Cid");ge(this,"Mid");ge(this,"senserName");ge(this,"CHIP");ge(this,"productName");ge(this,"device");ge(this,"deviceType");this.flag=ze.KNOWN_FLAG,this.headCRC=0,this.headLength=0,this.fwLength=0,this.nextFileAddress=0,this.version=0,this.DeciveType=0,this.VID=0,this.PID=0,this.BOOT_VID=0,this.BOOT_PID=0,this.Cid=0,this.Mid=0,this.senserName=new Uint8Array(ze.MaxCmdLength),this.CHIP=new Uint8Array(ze.MaxCmdLength),this.productName=new Uint8Array(ze.MaxCmdLength*2),this.device=null,this.deviceType=0}serialize(){const t=new ArrayBuffer(this.byteLength()),n=new DataView(t);n.setUint32(0,this.flag,!0),n.setUint32(4,this.headCRC,!0),n.setUint32(8,this.headLength,!0),n.setUint32(12,this.fwLength,!0),n.setUint32(16,this.nextFileAddress,!0),n.setUint32(20,this.version,!0),n.setUint8(24,this.DeciveType),n.setUint16(25,this.VID,!0),n.setUint16(27,this.PID,!0),n.setUint16(29,this.BOOT_VID,!0),n.setUint16(31,this.BOOT_PID,!0),n.setUint8(33,this.Cid),n.setUint8(34,this.Mid);for(let r=0;r<ze.MaxCmdLength;r++)n.setUint8(35+r,this.senserName[r]);for(let r=0;r<ze.MaxCmdLength;r++)n.setUint8(99+r,this.CHIP[r]);for(let r=0;r<ze.MaxCmdLength*2;r++)n.setUint8(163+r,this.productName[r]);return t}deserialize(t){const n=new DataView(t);this.flag=n.getUint32(0,!0),this.headCRC=n.getUint32(4,!0),this.headLength=n.getUint32(8,!0),this.fwLength=n.getUint32(12,!0),this.nextFileAddress=n.getUint32(16,!0),this.version=n.getUint32(20,!0),this.DeciveType=n.getUint8(24),this.VID=n.getUint16(25,!0),this.PID=n.getUint16(27,!0),this.BOOT_VID=n.getUint16(29,!0),this.BOOT_PID=n.getUint16(31,!0),this.Cid=n.getUint8(33),this.Mid=n.getUint8(34);for(let r=0;r<ze.MaxCmdLength;r++)this.senserName[r]=n.getUint8(35+r);for(let r=0;r<ze.MaxCmdLength;r++)this.CHIP[r]=n.getUint8(99+r);for(let r=0;r<ze.MaxCmdLength*2;r++)this.productName[r]=n.getUint8(163+r)}byteLength(){return 35+ze.MaxCmdLength+ze.MaxCmdLength+ze.MaxCmdLength*2}validate(t,n){const r=this.byteLength(),o=new Uint8Array(t.slice(r,r+this.fwLength));if(n){if(this.deviceType!=211)return{success:!1,message:"other.update.error2"}}else if(this.deviceType!=210)return{success:!1,message:"other.update.error2"};if(o.length!==this.fwLength)return{success:!1,message:"other.update.error1"};if(this.device){const{vendorId:i,productId:l}=this.device;return i!==this.VID&&l!==this.PID?{success:!1,message:"other.update.error2"}:this.deviceType!==this.DeciveType?{success:!1,message:"other.update.error3"}:{success:!0,message:""}}else return{success:!1,message:""}}setDevice(t,n){this.device=t,this.deviceType=n}};ge(ze,"MaxCmdLength",64),ge(ze,"KNOWN_FLAG",472727119);let bo=ze;const jt=255,Zf=6,Jf=jt-Zf,Oh=162;function Qf(e){let t=0;const n=new Uint8Array(e);for(let r=0;r<n.length;r++)t+=n[r];return t&65535}function Ih(e,t){if(!e||e.byteLength===0)throw new Error("Invalid firmware buffer");const n={start_flag:255,total_length:t},r=new ArrayBuffer(jt),o=new DataView(r);o.setUint8(0,n.start_flag),o.setUint32(1,n.total_length,!0);const i=new Uint8Array(o.buffer);return console.log("View Data:",i),o}function zh(e,t){const n=Jf,r=e.slice(t,t+n),o=r.byteLength,i={start_flag:2,packet_size:o,check_sum:Qf(r)},l=new ArrayBuffer(jt),a=new DataView(l);a.setUint8(0,i.start_flag),a.setUint16(1,i.packet_size,!0),a.setUint16(3,i.check_sum,!0);const s=new DataView(e);for(let d=0;d<o;d++)a.setUint8(d+5,s.getUint8(t+d));const u=new Uint8Array(a.buffer);return console.log("View Data:",u),a}function $h(){const e={start_flag:1,packet_size:0,check_sum:0},t=new ArrayBuffer(jt),n=new DataView(t);n.setUint8(0,e.start_flag),n.setUint16(1,e.packet_size,!0),n.setUint16(3,e.check_sum,!0);const r=new Uint8Array(n.buffer);return console.log("View Data:",r),n}function Rh(){const e={start_flag:0,packet_size:0,check_sum:0},t=new ArrayBuffer(jt),n=new DataView(t);n.setUint8(0,e.start_flag),n.setUint16(1,e.packet_size,!0),n.setUint16(3,e.check_sum,!0);const r=new Uint8Array(n.buffer);return console.log("View Data:",r),n}function Mh(e){const t=new DataView(e);return{start_flag:t.getUint8(0),packet_size:t.getUint16(1,!0),check_sum:t.getUint16(3,!0),result:t.getUint8(5),total_length:t.getUint32(6,!0)}.result===0}const eh={class:"w-[26px] h-[15px] relative"},th={key:0,class:"w-full h-full flex items-center justify-center relative"},nh=X({__name:"index",props:{power:{default:0},isCharge:{type:[Boolean,null],default:!1}},setup(e){const t=e,n=$(()=>t.power<10?"bg-red-500":t.power<30?"bg-yellow-200":"green-color");return(r,o)=>{const i=yi;return Ne(),je("div",eh,[De("div",{class:Xt([[r.isCharge?"":"gap-[2px] px-[2px]"],"absolute flex justify-between items-center inset-0 border-[2px] border-light-text2 dark:!border-white rounded-[4px] overflow-hidden"])},[r.isCharge?(Ne(),je("div",th,[o[1]||(o[1]=De("div",{class:"charge-animation h-full bg-green-400 absolute top-0 left-0"},null,-1)),Fe(i,{color:"#ffffff",size:"10"},{default:Ee(()=>o[0]||(o[0]=[De("svg",{t:"1760612982346",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"19133",width:"200",height:"200"},[De("path",{d:"M563.159857 409.559847v-409.559847l-409.559847 614.339771h307.169885v409.559847l409.559847-614.339771h-307.169885z","p-id":"19134"})],-1)])),_:1,__:[0]})])):Zt("",!0),r.isCharge?Zt("",!0):(Ne(),je("div",{key:1,class:Xt(["h-[8px] flex-1 rounded-[1px]",[n.value,r.power===0?"!bg-transparent":""]])},null,2)),r.isCharge?Zt("",!0):(Ne(),je("div",{key:2,class:Xt(["h-[8px] flex-1 rounded-[1px]",[n.value,r.power<30?"!bg-transparent":""]])},null,2)),r.isCharge?Zt("",!0):(Ne(),je("div",{key:3,class:Xt(["h-[8px] flex-1 rounded-[1px]",[n.value,r.power<90?"!bg-transparent":""]])},null,2))],2),o[2]||(o[2]=De("div",{class:"absolute bottom-[4px] top-[3px] w-[2px] bg-light-text2 dark:!bg-white rounded-[1px] right-[-3px]"},null,-1))])}}}),Th=Ao(nh,[["__scopeId","data-v-2d383545"]]),Bh={useDevicesStore:j(),reportCmd:{12:(e,t)=>{const n=j().nodeHidDevice.findIndex(r=>r.path===t);switch(e[2]){case 196:j().nodeHidDevice[n].power=e[3],j().nodeHidDevice[n].is_charge=!!(!e[4]&&e[5]);break;case 198:j().nodeHidDevice[n].sleep=e[4]>=2;break;case 199:e[3]==0;break}},13:(e,t)=>{var x;let n="",r=!1;e[3]===2||e[3]===3||e[3]===6||e[3]===7?(n="mouseMode.wired",r=!1):e[3]===0||e[3]===1||e[3]===4||e[3]===5?(n="mouseMode.wireless",r=!0):n="mouseMode.unknown";const o=e[14],i=j().nodeHidDevice.find(b=>b.path===t),l=(x=j().picture.find(b=>b.vendorId===i.vendorId&&b.productId===i.productId))==null?void 0:x.mid,a=l??e[15],s=e[19]===1||e[17]>=100?!1:e[16]===1,u=e[17],d=e[12]>>4&15,f=e[12]&15,h=e[13]*1e4+d*100+f,m=`${e[13]}.${d}.${f}`,c=e[10]>>4&15,v=e[10]&15,y=e[11]*1e4+c*100+v,p=`${e[11]}.${c}.${v}`,w=j().nodeHidDevice.findIndex(b=>b.path===t);w!==-1&&(j().nodeHidDevice[w].mid=a,j().nodeHidDevice[w].cid=o,j().nodeHidDevice[w].mode=n,j().nodeHidDevice[w].power=u,j().nodeHidDevice[w].is_charge=s,j().nodeHidDevice[w].wireless_connected=r,j().nodeHidDevice[w].mouse_version=h,j().nodeHidDevice[w].receiver_version=y,j().nodeHidDevice[w].receiver_version_text=p,j().nodeHidDevice[w].mouse_version_text=m,j().nodeHidDevice[w].receiver_version_number=y,j().nodeHidDevice[w].mouse_version_number=h)},14:(e,t)=>{const n=j().nodeHidDevice.findIndex(r=>r.path===t);j().nodeHidDevice[n].sleep=!e[3]}},report(e,t){$e.arrayBuffer2Hex(t.buffer).then(n=>{n&&this.reportCmd[n[0]]&&this.reportCmd[n[0]](n.map(r=>$e.toDec(r)),e)})},sendCmd:{send:(e,t)=>{Po.invoke("write-device",e,t)},13:function(e){this.send(e,[19,0,0])},14:function(e){this.send(e,[20,0,0])}}};export{ph as $,sh as A,ai as B,ou as C,it as D,_c as E,sf as F,lh as G,An as H,rn as I,bh as J,_f as K,ih as L,mh as M,su as N,Lu as O,fh as P,Ih as Q,Oh as R,Mh as S,bo as T,Jf as U,si as V,zh as W,Rh as X,$h as Y,cc as Z,yh as _,mr as a,vh as a0,wh as a1,Bh as a2,dh as a3,Th as a4,_h as a5,Ch as a6,ch as a7,xh as a8,uh as a9,kh as aa,gh as ab,Ju as b,rt as c,Et as d,ui as e,Ze as f,Du as g,Pu as h,tc as i,Mt as j,bi as k,yi as l,Rn as m,ti as n,Ci as o,mi as p,ni as q,Vu as r,Fd as s,Ad as t,br as u,j as v,hh as w,ah as x,Sh as y,dc as z};
