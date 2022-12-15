import{S as K,i as U,s as Y,e as w,o as Z,t as V,c as p,a as C,p as q,b as j,d as k,f as l,g as D,h as m,k as S,w as z,a9 as G,D as J,l as Q,m as R}from"./chunks/index.401bb9b3.js";import{t as H,s as W,g as X}from"./chunks/theme.e33cc65a.js";import{c as M}from"./chunks/clsx.m.94787637.js";import"./chunks/index.18b7dd6b.js";const x=typeof window<"u",$=t=>{x&&(window.document.documentElement.className=t,H.set(t),W("theme",t,365))},ee='<path d="M21.0009 12.79C20.8436 14.4922 20.2047 16.1144 19.1591 17.4668C18.1135 18.8192 16.7044 19.8458 15.0966 20.4265C13.4888 21.0073 11.7489 21.1181 10.0804 20.7461C8.4119 20.3741 6.88387 19.5345 5.6751 18.3258C4.46633 17.117 3.62682 15.589 3.25479 13.9205C2.88275 12.252 2.99359 10.5121 3.57434 8.9043C4.15508 7.29651 5.18171 5.88737 6.53409 4.84175C7.88647 3.79614 9.50867 3.15731 11.2109 3C10.2143 4.34827 9.73473 6.00945 9.85941 7.68141C9.98409 9.35338 10.7047 10.9251 11.8903 12.1106C13.0758 13.2961 14.6475 14.0168 16.3195 14.1415C17.9914 14.2662 19.6526 13.7866 21.0009 12.79V12.79Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />',te=`<g><path d="M15.4142 6C15.149 6 14.8946 5.89464 14.7071 5.70711L12.7071 3.70711C12.3166 3.31658 11.6834 3.31658 11.2929 3.70711L9.2929 5.70711C9.10537 5.89464 8.85101 6 8.5858 6H7.00001C6.44773 6 6.00001 6.44772 6.00001 7V8.58579C6.00001 8.851 5.89465 9.10536 5.70712 9.29289L3.70711 11.2929C3.31658 11.6834 3.31658 12.3166 3.70711 12.7071L5.70712 14.7071C5.89465 14.8946 6.00001 15.149 6.00001 15.4142V17C6.00001 17.5523 6.44773 18 7.00001 18H8.58578C8.85099 18 9.10535 18.1054 9.29288 18.2929L11.2929 20.2929C11.6834 20.6834 12.3166 20.6834 12.7071 20.2929L14.7071 18.2929C14.8946 18.1054 15.149 18 15.4142 18H17C17.5523 18 18 17.5523 18 17V15.4142C18 15.149 18.1054 14.8946 18.2929 14.7071L20.2929 12.7071C20.6834 12.3166 20.6834 11.6834 20.2929 11.2929L18.2929 9.29289C18.1054 9.10536 18 8.851 18 8.58579V7C18 6.44772 17.5523 6 17 6H15.4142Z" stroke-width="2" stroke-linecap="square" />
<path d="M16 12C16 9.79086 14.2091 8 12 8V16C14.2091 16 16 14.2091 16 12Z" stroke-width="2" stroke-linecap="square" /></g>`,oe=`<g>
<path
d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
stroke-width="2"
stroke-linecap="round"
stroke-linejoin="round"
/>
<path
d="M12 1V3"
stroke-width="2"
stroke-linecap="round"
stroke-linejoin="round"
/>
<path
d="M12 21V23"
stroke-width="2"
stroke-linecap="round"
stroke-linejoin="round"
/>
<path
d="M4.21973 4.21973L5.63973 5.63973"
stroke-width="2"
stroke-linecap="round"
stroke-linejoin="round"
/>
<path
d="M18.3604 18.3604L19.7804 19.7804"
stroke-width="2"
stroke-linecap="round"
stroke-linejoin="round"
/>
<path
d="M1 12H3"
stroke-width="2"
stroke-linecap="round"
stroke-linejoin="round"
/>
<path
d="M21 12H23"
stroke-width="2"
stroke-linecap="round"
stroke-linejoin="round"
/>
<path
d="M4.21973 19.7804L5.63973 18.3604"
stroke-width="2"
stroke-linecap="round"
stroke-linejoin="round"
/>
<path
d="M18.3604 5.63973L19.7804 4.21973"
stroke-width="2"
stroke-linecap="round"
stroke-linejoin="round"
/>
</g>`;var A=(t=>(t.Light="light",t.Dark="dark",t.Dark2="dark2",t))(A||{});const{Light:P,Dark:B,Dark2:I}=A,_={[B]:{value:I,label:"Contrast",icon:te},[I]:{value:B,label:"Dark",icon:ee},[P]:{value:P,label:"Light",icon:oe}},re=[...new Set(Object.keys(_))],ae=typeof window<"u",ne=()=>{if(ae){let t=X("theme");H.set(t)}};function O(t,e,o){const h=t.slice();return h[10]=e[o],h}function se(t){let e,o,h=_[t[10]].icon+"",f,c,u,s=_[t[10]].label.toLowerCase()==="contrast"?"High":"",r,n=" ",a,d,b=_[t[10]].label+"",i,L;return{c(){e=w("div"),o=Q("svg"),f=Z(),c=w("p"),u=w("span"),r=V(s),a=V(n),d=w("span"),i=V(b),this.h()},l(g){e=p(g,"DIV",{class:!0});var v=C(e);o=R(v,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0,"aria-hidden":!0});var T=C(o);T.forEach(k),f=q(v),c=p(v,"P",{class:!0});var y=C(c);u=p(y,"SPAN",{class:!0});var E=C(u);r=j(E,s),a=j(E,n),E.forEach(k),d=p(y,"SPAN",{});var N=C(d);i=j(N,b),N.forEach(k),y.forEach(k),v.forEach(k),this.h()},h(){l(o,"width","24"),l(o,"height","24"),l(o,"viewBox","0 0 24 24"),l(o,"fill","none"),l(o,"xmlns","http://www.w3.org/2000/svg"),l(o,"aria-hidden","true"),l(u,"class","hidden lg:inline"),l(c,"class",L=M("md:ml-3 mt-2 md:mt-0 font-sans font-normal",t[1]?"":"hidden")),l(e,"class",t[4])},m(g,v){D(g,e,v),m(e,o),o.innerHTML=h,m(e,f),m(e,c),m(c,u),m(u,r),m(u,a),m(c,d),m(d,i)},p(g,v){v&2&&L!==(L=M("md:ml-3 mt-2 md:mt-0 font-sans font-normal",g[1]?"":"hidden"))&&l(c,"class",L),v&16&&l(e,"class",g[4])},d(g){g&&k(e)}}}function F(t){let e,o=re.some(r),h,f,c,u,s;function r(...d){return t[8](t[10],...d)}let n=o&&se(t);function a(){return t[9](t[10])}return{c(){e=w("button"),n&&n.c(),this.h()},l(d){e=p(d,"BUTTON",{"data-variant":!0,"data-key":!0,"data-active":!0,"aria-label":!0,"aria-live":!0,tabindex:!0,class:!0});var b=C(e);n&&n.l(b),b.forEach(k),this.h()},h(){l(e,"data-variant",t[3]),l(e,"data-key",t[10]),l(e,"data-active",h=t[6]===t[10]&&t[0]?"true":"false"),e.disabled=f=t[6]===t[10],l(e,"aria-label",`${_[t[10]].label} theme`),l(e,"aria-live","polite"),l(e,"tabindex",-1),l(e,"class",c=M("theme","theme-switch",!t[1]&&"bg-cardChi border-t border-r lg:border-r-0 lg:border-t-0 border-b border-highContrast first:border-t"))},m(d,b){D(d,e,b),n&&n.m(e,null),u||(s=J(e,"click",a),u=!0)},p(d,b){t=d,o&&n.p(t,b),b&8&&l(e,"data-variant",t[3]),b&65&&h!==(h=t[6]===t[10]&&t[0]?"true":"false")&&l(e,"data-active",h),b&64&&f!==(f=t[6]===t[10])&&(e.disabled=f),b&2&&c!==(c=M("theme","theme-switch",!t[1]&&"bg-cardChi border-t border-r lg:border-r-0 lg:border-t-0 border-b border-highContrast first:border-t"))&&l(e,"class",c)},d(d){d&&k(e),n&&n.d(),u=!1,s()}}}function ie(t){let e,o,h,f,c,u=Object.keys(_),s=[];for(let r=0;r<u.length;r+=1)s[r]=F(O(t,u,r));return{c(){e=w("div");for(let r=0;r<s.length;r+=1)s[r].c();o=Z(),h=w("style"),f=V("button{color:rgb(var(--color-textPrimary))}button[data-active=true]{background-color:#daf464;color:#000}button svg{stroke:currentColor}.is-footer button[data-active=true]{background-color:transparent;border-bottom-width:2px;color:rgb(var(--color-textPrimary))}.is-footer button+button{margin-left:2rem}"),this.h()},l(r){e=p(r,"DIV",{"data-variant":!0,class:!0});var n=C(e);for(let d=0;d<s.length;d+=1)s[d].l(n);o=q(n),h=p(n,"STYLE",{});var a=C(h);f=j(a,"button{color:rgb(var(--color-textPrimary))}button[data-active=true]{background-color:#daf464;color:#000}button svg{stroke:currentColor}.is-footer button[data-active=true]{background-color:transparent;border-bottom-width:2px;color:rgb(var(--color-textPrimary))}.is-footer button+button{margin-left:2rem}"),a.forEach(k),n.forEach(k),this.h()},h(){l(e,"data-variant",t[2]),l(e,"class",c=M("theme",t[1]?"is-footer":"border-l border-highContrast","theme-switcher",t[5]))},m(r,n){D(r,e,n);for(let a=0;a<s.length;a+=1)s[a].m(e,null);m(e,o),m(e,h),m(h,f)},p(r,[n]){if(n&219){u=Object.keys(_);let a;for(a=0;a<u.length;a+=1){const d=O(r,u,a);s[a]?s[a].p(d,n):(s[a]=F(d),s[a].c(),s[a].m(e,o))}for(;a<s.length;a+=1)s[a].d(1);s.length=u.length}n&4&&l(e,"data-variant",r[2]),n&34&&c!==(c=M("theme",r[1]?"is-footer":"border-l border-highContrast","theme-switcher",r[5]))&&l(e,"class",c)},i:S,o:S,d(r){r&&k(e),z(s,r)}}}function le(t,e,o){let h;H.subscribe(i=>{o(6,h=i)});let{isMounted:f=!1}=e;G(()=>{ne(),o(0,f=!0)});const c=i=>{$(i),o(6,h=i)};let{isFooter:u}=e,{variant:s="header-desktop"}=e,{subVariant:r="header-mobile"}=e,{content:n=""}=e,{className:a}=e;const d=(i,L)=>L.toLowerCase()===_[i].value,b=i=>c(i);return t.$$set=i=>{"isMounted"in i&&o(0,f=i.isMounted),"isFooter"in i&&o(1,u=i.isFooter),"variant"in i&&o(2,s=i.variant),"subVariant"in i&&o(3,r=i.subVariant),"content"in i&&o(4,n=i.content),"className"in i&&o(5,a=i.className)},[f,u,s,r,n,a,h,c,d,b]}class fe extends K{constructor(e){super(),U(this,e,le,ie,Y,{isMounted:0,isFooter:1,variant:2,subVariant:3,content:4,className:5})}}export{fe as default};
