import"./chunks/LetsCreateSectionFooter.astro_astro_type_script_index_0_lang.d4380e4a.js";var y={exports:{}};/* @preserve
    _____ __ _     __                _
   / ___// /(_)___/ /___  ____      (_)___
  / (_ // // // _  // -_)/ __/_    / /(_-<
  \___//_//_/ \_,_/ \__//_/  (_)__/ //___/
                              |___/

  Version: 1.7.4
  Author: Nick Piscitelli (pickykneee)
  Website: https://nickpiscitelli.com
  Documentation: http://nickpiscitelli.github.io/Glider.js
  License: MIT License
  Release Date: October 25th, 2018

*/(function(d,u){(function(a){d.exports=a()})(function(){var a=typeof window<"u"?window:this,c=a.Glider=function(t,e){var i=this;if(t._glider)return t._glider;if(i.ele=t,i.ele.classList.add("glider"),(i.ele._glider=i).opt=Object.assign({},{slidesToScroll:1,slidesToShow:1,resizeLock:!0,duration:.5,easing:function(o,s,h,l,n){return l*(s/=n)*s+h}},e),i.animate_id=i.page=i.slide=0,i.arrows={},i._opt=i.opt,i.opt.skipTrack)i.track=i.ele.children[0];else for(i.track=document.createElement("div"),i.ele.appendChild(i.track);i.ele.children.length!==1;)i.track.appendChild(i.ele.children[0]);i.track.classList.add("glider-track"),i.init(),i.resize=i.init.bind(i,!0),i.event(i.ele,"add",{scroll:i.updateControls.bind(i)}),i.event(a,"add",{resize:i.resize})},r=c.prototype;return r.init=function(t,e){var i,o=this,s=0,h=0,l=(o.slides=o.track.children,[].forEach.call(o.slides,function(n,f){n.classList.add("glider-slide"),n.setAttribute("data-gslide",f)}),o.containerWidth=o.ele.clientWidth,o.settingsBreakpoint());e=e||l,o.opt.slidesToShow!=="auto"&&o.opt._autoSlide===void 0||(i=o.containerWidth/o.opt.itemWidth,o.opt._autoSlide=o.opt.slidesToShow=o.opt.exactWidth?i:Math.max(1,Math.floor(i))),o.opt.slidesToScroll==="auto"&&(o.opt.slidesToScroll=Math.floor(o.opt.slidesToShow)),o.itemWidth=o.opt.exactWidth?o.opt.itemWidth:o.containerWidth/o.opt.slidesToShow,[].forEach.call(o.slides,function(n){n.style.height="auto",n.style.width=o.itemWidth+"px",s+=o.itemWidth,h=Math.max(n.offsetHeight,h)}),o.track.style.width=s+"px",o.trackWidth=s,o.isDrag=!1,o.preventClick=!1,o.move=!1,o.opt.resizeLock&&o.scrollTo(o.slide*o.itemWidth,0),(l||e)&&(o.bindArrows(),o.buildDots(),o.bindDrag()),o.updateControls(),o.emit(t?"refresh":"loaded")},r.bindDrag=function(){function t(){e.mouseDown=void 0,e.ele.classList.remove("drag"),e.isDrag&&(e.preventClick=!0),e.isDrag=!1}var e=this;e.mouse=e.mouse||e.handleMouse.bind(e);function i(){e.move=!0}var o={mouseup:t,mouseleave:t,mousedown:function(s){s.preventDefault(),s.stopPropagation(),e.mouseDown=s.clientX,e.ele.classList.add("drag"),e.move=!1,setTimeout(i,300)},touchstart:function(s){e.ele.classList.add("drag"),e.move=!1,setTimeout(i,300)},mousemove:e.mouse,click:function(s){e.preventClick&&e.move&&(s.preventDefault(),s.stopPropagation()),e.preventClick=!1,e.move=!1}};e.ele.classList.toggle("draggable",e.opt.draggable===!0),e.event(e.ele,"remove",o),e.opt.draggable&&e.event(e.ele,"add",o)},r.buildDots=function(){var t=this;if(t.opt.dots){if(typeof t.opt.dots=="string"?t.dots=document.querySelector(t.opt.dots):t.dots=t.opt.dots,t.dots){t.dots.innerHTML="",t.dots.setAttribute("role","tablist"),t.dots.classList.add("glider-dots");for(var e=0;e<Math.ceil(t.slides.length/t.opt.slidesToShow);++e){var i=document.createElement("button");i.dataset.index=e,i.setAttribute("aria-label","Page "+(e+1)),i.setAttribute("role","tab"),i.className="glider-dot "+(e?"":"active"),t.event(i,"add",{click:t.scrollItem.bind(t,e,!0)}),t.dots.appendChild(i)}}}else t.dots&&(t.dots.innerHTML="")},r.bindArrows=function(){var t=this;t.opt.arrows?["prev","next"].forEach(function(e){var i=t.opt.arrows[e];(i=i&&(typeof i=="string"?document.querySelector(i):i))&&(i._func=i._func||t.scrollItem.bind(t,e),t.event(i,"remove",{click:i._func}),t.event(i,"add",{click:i._func}),t.arrows[e]=i)}):Object.keys(t.arrows).forEach(function(e){e=t.arrows[e],t.event(e,"remove",{click:e._func})})},r.updateControls=function(t){var e=this,i=(t&&!e.opt.scrollPropagate&&t.stopPropagation(),e.containerWidth>=e.trackWidth),o=(e.opt.rewind||(e.arrows.prev&&(e.arrows.prev.classList.toggle("disabled",e.ele.scrollLeft<=0||i),e.arrows.prev.setAttribute("aria-disabled",e.arrows.prev.classList.contains("disabled"))),e.arrows.next&&(e.arrows.next.classList.toggle("disabled",Math.ceil(e.ele.scrollLeft+e.containerWidth)>=Math.floor(e.trackWidth)||i),e.arrows.next.setAttribute("aria-disabled",e.arrows.next.classList.contains("disabled")))),e.slide=Math.round(e.ele.scrollLeft/e.itemWidth),e.page=Math.round(e.ele.scrollLeft/e.containerWidth),e.slide+Math.floor(Math.floor(e.opt.slidesToShow)/2)),s=Math.floor(e.opt.slidesToShow)%2?0:o+1;Math.floor(e.opt.slidesToShow)===1&&(s=0),e.ele.scrollLeft+e.containerWidth>=Math.floor(e.trackWidth)&&(e.page=e.dots?e.dots.children.length-1:0),[].forEach.call(e.slides,function(f,l){var n=f.classList,f=n.contains("visible"),E=e.ele.scrollLeft,S=e.ele.scrollLeft+e.containerWidth,p=e.itemWidth*l,W=p+e.itemWidth,p=([].forEach.call(n,function(g){/^left|right/.test(g)&&n.remove(g)}),n.toggle("active",e.slide===l),o===l||s&&s===l?n.add("center"):(n.remove("center"),n.add([l<o?"left":"right",Math.abs(l-(!(l<o)&&s||o))].join("-"))),Math.ceil(p)>=Math.floor(E)&&Math.floor(W)<=Math.ceil(S));n.toggle("visible",p),p!==f&&e.emit("slide-"+(p?"visible":"hidden"),{slide:l})}),e.dots&&[].forEach.call(e.dots.children,function(h,l){h.classList.toggle("active",e.page===l)}),t&&e.opt.scrollLock&&(clearTimeout(e.scrollLock),e.scrollLock=setTimeout(function(){clearTimeout(e.scrollLock),.02<Math.abs(e.ele.scrollLeft/e.itemWidth-e.slide)&&(e.mouseDown||e.trackWidth>e.containerWidth+e.ele.scrollLeft&&e.scrollItem(e.getCurrentSlide()))},e.opt.scrollLockDelay||250))},r.getCurrentSlide=function(){return this.round(this.ele.scrollLeft/this.itemWidth)},r.scrollItem=function(t,e,l){l&&l.preventDefault();var o,s=this,h=t,l=(++s.animate_id,s.slide),n=e===!0?(t=Math.round(t*s.containerWidth/s.itemWidth))*s.itemWidth:(typeof t=="string"&&(n=t==="prev",t=s.opt.slidesToScroll%1||s.opt.slidesToShow%1?s.getCurrentSlide():s.slide,n?t-=s.opt.slidesToScroll:t+=s.opt.slidesToScroll,s.opt.rewind&&(o=s.ele.scrollLeft,t=n&&!o?s.slides.length:!n&&o+s.containerWidth>=Math.floor(s.trackWidth)?0:t)),t=Math.max(Math.min(t,s.slides.length),0),s.slide=t,s.itemWidth*t);return s.emit("scroll-item",{prevSlide:l,slide:t}),s.scrollTo(n,s.opt.duration*Math.abs(s.ele.scrollLeft-n),function(){s.updateControls(),s.emit("animated",{value:h,type:typeof h=="string"?"arrow":e?"dot":"slide"})}),!1},r.settingsBreakpoint=function(){var t=this,e=t._opt.responsive;if(e){e.sort(function(h,l){return l.breakpoint-h.breakpoint});for(var i=0;i<e.length;++i){var o=e[i];if(a.innerWidth>=o.breakpoint)return t.breakpoint!==o.breakpoint&&(t.opt=Object.assign({},t._opt,o.settings),t.breakpoint=o.breakpoint,!0)}}var s=t.breakpoint!==0;return t.opt=Object.assign({},t._opt),t.breakpoint=0,s},r.scrollTo=function(t,e,i){var o=this,s=new Date().getTime(),h=o.animate_id,l=function(){var n=new Date().getTime()-s;o.ele.scrollLeft=o.ele.scrollLeft+(t-o.ele.scrollLeft)*o.opt.easing(0,n,0,1,e),n<e&&h===o.animate_id?a.requestAnimationFrame(l):(o.ele.scrollLeft=t,i&&i.call(o))};a.requestAnimationFrame(l)},r.removeItem=function(t){var e=this;e.slides.length&&(e.track.removeChild(e.slides[t]),e.refresh(!0),e.emit("remove"))},r.addItem=function(t){this.track.appendChild(t),this.refresh(!0),this.emit("add")},r.handleMouse=function(t){var e=this;e.mouseDown&&(e.isDrag=!0,e.ele.scrollLeft+=(e.mouseDown-t.clientX)*(e.opt.dragVelocity||3.3),e.mouseDown=t.clientX)},r.round=function(t){var e=1/(this.opt.slidesToScroll%1||1);return Math.round(t*e)/e},r.refresh=function(t){this.init(!0,t)},r.setOption=function(t,e){var i=this;i.breakpoint&&!e?i._opt.responsive.forEach(function(o){o.breakpoint===i.breakpoint&&(o.settings=Object.assign({},o.settings,t))}):i._opt=Object.assign({},i._opt,t),i.breakpoint=0,i.settingsBreakpoint()},r.destroy=function(){function t(o){o.removeAttribute("style"),[].forEach.call(o.classList,function(s){/^glider/.test(s)&&o.classList.remove(s)})}var e=this,i=e.ele.cloneNode(!0);e.opt.skipTrack||(i.children[0].outerHTML=i.children[0].innerHTML),t(i),[].forEach.call(i.getElementsByTagName("*"),t),e.ele.parentNode.replaceChild(i,e.ele),e.event(a,"remove",{resize:e.resize}),e.emit("destroy")},r.emit=function(t,e){t=new a.CustomEvent("glider-"+t,{bubbles:!this.opt.eventPropagate,detail:e}),this.ele.dispatchEvent(t)},r.event=function(t,e,i){var o=t[e+"EventListener"].bind(t);Object.keys(i).forEach(function(s){o(s,i[s])})},c})})(y);window.onload=d=>{const u=typeof window<"u";let a=window.matchMedia("(min-width: 768px)").matches||!1;const c=()=>{a?Array.from(document.getElementsByClassName("glider")).map(r=>{try{Glider(r)?.destroy()}catch{}}):Array.from(document.getElementsByClassName("glider")).map(r=>{new Glider(r,{slidesToShow:"auto",slidesToScroll:"auto",itemWidth:250,exactWidth:!0,draggable:!0,arrows:{prev:r.nextElementSibling?.getElementsByClassName("slider-prev")[0],next:r.nextElementSibling?.getElementsByClassName("slider-next")[0]},responsive:[{breakpoint:360,settings:{itemWidth:290}},{breakpoint:640,settings:{itemWidth:360}}]}),r.addEventListener("glider-slide-visible",function(t){r.nextElementSibling?.getElementsByClassName("current")?.[0].setAttribute("current",t.detail.slide+1)})})};u&&window.matchMedia("(min-width: 768px)").addEventListener("change",r=>{a=r.matches||!1,c()}),c()};const M=typeof window<"u";let w=!1;const b=document.querySelectorAll(".process-item"),T=document.querySelectorAll(".process-link"),x=document.querySelector(".process-nav");let m,v=!1;function C(d,u,a=200){var c=null,r=function(){c&&clearTimeout(c),c=setTimeout(u,a)};return d.addEventListener("scroll",r),function(){d.removeEventListener("scroll",r)}}function D(){const d=window.innerWidth;return d<1024?67:(d<1047,56)}const _=()=>{v=!0};T.forEach(d=>{d.addEventListener("click",_)});const k=()=>{const d={rootMargin:"-96px",threshold:w?.1:.05};b.forEach(u=>{m?.unobserve(u)}),m=new IntersectionObserver(u=>{u.forEach(a=>{a.isIntersecting&&(document.querySelectorAll(".process-link").forEach(c=>{c.classList.remove("process-active")}),document.querySelectorAll(".process-item").forEach(c=>{c.classList.remove("process-item-active")}),a.target.classList.add("process-item-active"),document.getElementById(`process-${a.target.id}`).classList.add("process-active"),v||document.getElementById(`process-${a.target.id}`).parentNode.scrollIntoView({block:"nearest",inline:"end"}))})},d),b.forEach(u=>{m.observe(u)})},L=()=>{const d=D();x.setAttribute("style",`top: ${d}px`)};k();L();M&&(C(window,function(){v=!1}),window.addEventListener("resize",L),window.matchMedia("(min-width: 960px)").addEventListener("change",d=>{w=d.matches||!1,k()}));