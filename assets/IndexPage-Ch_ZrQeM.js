import{a as O,b as f,h as _,d as x,i as _e,e as fe,f as U,n as Me,g as pe,j as M,l as Te,k as Se,w as P,p as $e,m as ut,t as ct,q as ee,s as H,u as ne,v as De,x as ce,y as dt,_ as Y,o as A,c as N,z as E,A as F,B as Z,C as K,D as ft,E as be,F as He,G as Ie,H as vt,I as ht}from"./index-CB0b1PpX.js";import{h as oe,v as je,Q as Ee,a as mt,b as We,c as Qe,g as gt,d as bt}from"./QBtn-DxGiROT-.js";const yt=O({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:i}){const n=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>_("div",{class:n.value},oe(i.default))}}),Ve=O({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:i}){const n=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>_("div",{class:n.value,role:"toolbar"},oe(i.default))}});function wt(){const e=x(!_e.value);return e.value===!1&&fe(()=>{e.value=!0}),{isHydrated:e}}const Ne=typeof ResizeObserver<"u",Ae=Ne===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},te=O({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:i}){let n=null,t,o={width:-1,height:-1};function c(v){v===!0||e.debounce===0||e.debounce==="0"?s():n===null&&(n=setTimeout(s,e.debounce))}function s(){if(n!==null&&(clearTimeout(n),n=null),t){const{offsetWidth:v,offsetHeight:g}=t;(v!==o.width||g!==o.height)&&(o={width:v,height:g},i("resize",o))}}const{proxy:p}=M();if(p.trigger=c,Ne===!0){let v;const g=k=>{t=p.$el.parentNode,t?(v=new ResizeObserver(c),v.observe(t),s()):k!==!0&&pe(()=>{g(!0)})};return fe(()=>{g()}),U(()=>{n!==null&&clearTimeout(n),v!==void 0&&(v.disconnect!==void 0?v.disconnect():t&&v.unobserve(t))}),Me}else{let v=function(){n!==null&&(clearTimeout(n),n=null),C!==void 0&&(C.removeEventListener!==void 0&&C.removeEventListener("resize",c,Te.passive),C=void 0)},g=function(){v(),t&&t.contentDocument&&(C=t.contentDocument.defaultView,C.addEventListener("resize",c,Te.passive),s())};const{isHydrated:k}=wt();let C;return fe(()=>{pe(()=>{t=p.$el,t&&g()})}),U(v),()=>{if(k.value===!0)return _("object",{class:"q--avoid-card-border",style:Ae.style,tabindex:-1,type:"text/html",data:Ae.url,"aria-hidden":"true",onLoad:g})}}}});function ye(){let e;const i=M();function n(){e=void 0}return Se(n),U(n),{removeTick:n,registerTick(t){e=t,pe(()=>{e===t&&(je(i)===!1&&e(),e=void 0)})}}}function Fe(){let e=null;const i=M();function n(){e!==null&&(clearTimeout(e),e=null)}return Se(n),U(n),{removeTimeout:n,registerTimeout(t,o){n(),je(i)===!1&&(e=setTimeout(()=>{e=null,t()},o))}}}let Ue=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const i=document.createElement("div");Object.assign(i.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(i),e.scrollLeft=-1e3,Ue=e.scrollLeft>=0,e.remove()}function pt(e,i,n){const t=n===!0?["left","right"]:["top","bottom"];return`absolute-${i===!0?t[0]:t[1]}${e?` text-${e}`:""}`}const Tt=["left","center","right","justify"],_t=O({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>Tt.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:i,emit:n}){const{proxy:t}=M(),{$q:o}=t,{registerTick:c}=ye(),{registerTick:s}=ye(),{registerTick:p}=ye(),{registerTimeout:v,removeTimeout:g}=Fe(),{registerTimeout:k,removeTimeout:C}=Fe(),R=x(null),h=x(null),q=x(e.modelValue),L=x(!1),I=x(!0),V=x(!1),u=x(!1),T=[],m=x(0),a=x(!1);let y=null,z=null,Q;const ie=f(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:pt(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),Ke=f(()=>{const l=m.value,r=q.value;for(let d=0;d<l;d++)if(T[d].name.value===r)return!0;return!1}),Xe=f(()=>`q-tabs__content--align-${L.value===!0?"left":u.value===!0?"justify":e.align}`),Ge=f(()=>`q-tabs row no-wrap items-center q-tabs--${L.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),Ye=f(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+Xe.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),re=f(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),ae=f(()=>e.vertical!==!0&&o.lang.rtl===!0),ve=f(()=>Ue===!1&&ae.value===!0);P(ae,G),P(()=>e.modelValue,l=>{he({name:l,setCurrent:!0,skipEmit:!0})}),P(()=>e.outsideArrows,se);function he({name:l,setCurrent:r,skipEmit:d}){q.value!==l&&(d!==!0&&e["onUpdate:modelValue"]!==void 0&&n("update:modelValue",l),(r===!0||e["onUpdate:modelValue"]===void 0)&&(Je(q.value,l),q.value=l))}function se(){c(()=>{xe({width:R.value.offsetWidth,height:R.value.offsetHeight})})}function xe(l){if(re.value===void 0||h.value===null)return;const r=l[re.value.container],d=Math.min(h.value[re.value.scroll],Array.prototype.reduce.call(h.value.children,($,w)=>$+(w[re.value.content]||0),0)),S=r>0&&d>r;L.value=S,S===!0&&s(G),u.value=r<parseInt(e.breakpoint,10)}function Je(l,r){const d=l!=null&&l!==""?T.find($=>$.name.value===l):null,S=r!=null&&r!==""?T.find($=>$.name.value===r):null;if(ue===!0)ue=!1;else if(d&&S){const $=d.tabIndicatorRef.value,w=S.tabIndicatorRef.value;y!==null&&(clearTimeout(y),y=null),$.style.transition="none",$.style.transform="none",w.style.transition="none",w.style.transform="none";const b=$.getBoundingClientRect(),B=w.getBoundingClientRect();w.style.transform=e.vertical===!0?`translate3d(0,${b.top-B.top}px,0) scale3d(1,${B.height?b.height/B.height:1},1)`:`translate3d(${b.left-B.left}px,0,0) scale3d(${B.width?b.width/B.width:1},1,1)`,p(()=>{y=setTimeout(()=>{y=null,w.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",w.style.transform="none"},70)})}S&&L.value===!0&&X(S.rootRef.value)}function X(l){const{left:r,width:d,top:S,height:$}=h.value.getBoundingClientRect(),w=l.getBoundingClientRect();let b=e.vertical===!0?w.top-S:w.left-r;if(b<0){h.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(b),G();return}b+=e.vertical===!0?w.height-$:w.width-d,b>0&&(h.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(b),G())}function G(){const l=h.value;if(l===null)return;const r=l.getBoundingClientRect(),d=e.vertical===!0?l.scrollTop:Math.abs(l.scrollLeft);ae.value===!0?(I.value=Math.ceil(d+r.width)<l.scrollWidth-1,V.value=d>0):(I.value=d>0,V.value=e.vertical===!0?Math.ceil(d+r.height)<l.scrollHeight:Math.ceil(d+r.width)<l.scrollWidth)}function Ce(l){z!==null&&clearInterval(z),z=setInterval(()=>{tt(l)===!0&&j()},5)}function qe(){Ce(ve.value===!0?Number.MAX_SAFE_INTEGER:0)}function Le(){Ce(ve.value===!0?0:Number.MAX_SAFE_INTEGER)}function j(){z!==null&&(clearInterval(z),z=null)}function Ze(l,r){const d=Array.prototype.filter.call(h.value.children,B=>B===r||B.matches&&B.matches(".q-tab.q-focusable")===!0),S=d.length;if(S===0)return;if(l===36)return X(d[0]),d[0].focus(),!0;if(l===35)return X(d[S-1]),d[S-1].focus(),!0;const $=l===(e.vertical===!0?38:37),w=l===(e.vertical===!0?40:39),b=$===!0?-1:w===!0?1:void 0;if(b!==void 0){const B=ae.value===!0?-1:1,D=d.indexOf(r)+b*B;return D>=0&&D<S&&(X(d[D]),d[D].focus({preventScroll:!0})),!0}}const et=f(()=>ve.value===!0?{get:l=>Math.abs(l.scrollLeft),set:(l,r)=>{l.scrollLeft=-r}}:e.vertical===!0?{get:l=>l.scrollTop,set:(l,r)=>{l.scrollTop=r}}:{get:l=>l.scrollLeft,set:(l,r)=>{l.scrollLeft=r}});function tt(l){const r=h.value,{get:d,set:S}=et.value;let $=!1,w=d(r);const b=l<w?-1:1;return w+=b*5,w<0?($=!0,w=0):(b===-1&&w<=l||b===1&&w>=l)&&($=!0,w=l),S(r,w),G(),$}function ze(l,r){for(const d in l)if(l[d]!==r[d])return!1;return!0}function nt(){let l=null,r={matchedLen:0,queryDiff:9999,hrefLen:0};const d=T.filter(b=>b.routeData!==void 0&&b.routeData.hasRouterLink.value===!0),{hash:S,query:$}=t.$route,w=Object.keys($).length;for(const b of d){const B=b.routeData.exact.value===!0;if(b.routeData[B===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:D,query:me,matched:at,href:st}=b.routeData.resolvedLink.value,ge=Object.keys(me).length;if(B===!0){if(D!==S||ge!==w||ze($,me)===!1)continue;l=b.name.value;break}if(D!==""&&D!==S||ge!==0&&ze(me,$)===!1)continue;const W={matchedLen:at.length,queryDiff:w-ge,hrefLen:st.length-D.length};if(W.matchedLen>r.matchedLen){l=b.name.value,r=W;continue}else if(W.matchedLen!==r.matchedLen)continue;if(W.queryDiff<r.queryDiff)l=b.name.value,r=W;else if(W.queryDiff!==r.queryDiff)continue;W.hrefLen>r.hrefLen&&(l=b.name.value,r=W)}if(l===null&&T.some(b=>b.routeData===void 0&&b.name.value===q.value)===!0){ue=!1;return}he({name:l,setCurrent:!0})}function ot(l){if(g(),a.value!==!0&&R.value!==null&&l.target&&typeof l.target.closest=="function"){const r=l.target.closest(".q-tab");r&&R.value.contains(r)===!0&&(a.value=!0,L.value===!0&&X(r))}}function lt(){v(()=>{a.value=!1},30)}function J(){ke.avoidRouteWatcher===!1?k(nt):C()}function Pe(){if(Q===void 0){const l=P(()=>t.$route.fullPath,J);Q=()=>{l(),Q=void 0}}}function it(l){T.push(l),m.value++,se(),l.routeData===void 0||t.$route===void 0?k(()=>{if(L.value===!0){const r=q.value,d=r!=null&&r!==""?T.find(S=>S.name.value===r):null;d&&X(d.rootRef.value)}}):(Pe(),l.routeData.hasRouterLink.value===!0&&J())}function rt(l){T.splice(T.indexOf(l),1),m.value--,se(),Q!==void 0&&l.routeData!==void 0&&(T.every(r=>r.routeData===void 0)===!0&&Q(),J())}const ke={currentModel:q,tabProps:ie,hasFocus:a,hasActiveTab:Ke,registerTab:it,unregisterTab:rt,verifyRouteModel:J,updateModel:he,onKbdNavigate:Ze,avoidRouteWatcher:!1};$e(ct,ke);function Re(){y!==null&&clearTimeout(y),j(),Q!==void 0&&Q()}let Be,ue;return U(Re),Se(()=>{Be=Q!==void 0,Re()}),ut(()=>{Be===!0&&(Pe(),ue=!0,J()),se()}),()=>_("div",{ref:R,class:Ge.value,role:"tablist",onFocusin:ot,onFocusout:lt},[_(te,{onResize:xe}),_("div",{ref:h,class:Ye.value,onScroll:G},oe(i.default)),_(Ee,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(I.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||o.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:qe,onTouchstartPassive:qe,onMouseupPassive:j,onMouseleavePassive:j,onTouchendPassive:j}),_(Ee,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(V.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||o.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:Le,onTouchstartPassive:Le,onMouseupPassive:j,onMouseleavePassive:j,onTouchendPassive:j})])}}),St=O({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:i,emit:n}){const{proxy:{$q:t}}=M(),o=ee(ne,H);if(o===H)return console.error("QHeader needs to be child of QLayout"),H;const c=x(parseInt(e.heightHint,10)),s=x(!0),p=f(()=>e.reveal===!0||o.view.value.indexOf("H")!==-1||t.platform.is.ios&&o.isContainer.value===!0),v=f(()=>{if(e.modelValue!==!0)return 0;if(p.value===!0)return s.value===!0?c.value:0;const u=c.value-o.scroll.value.position;return u>0?u:0}),g=f(()=>e.modelValue!==!0||p.value===!0&&s.value!==!0),k=f(()=>e.modelValue===!0&&g.value===!0&&e.reveal===!0),C=f(()=>"q-header q-layout__section--marginal "+(p.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(g.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),R=f(()=>{const u=o.rows.value.top,T={};return u[0]==="l"&&o.left.space===!0&&(T[t.lang.rtl===!0?"right":"left"]=`${o.left.size}px`),u[2]==="r"&&o.right.space===!0&&(T[t.lang.rtl===!0?"left":"right"]=`${o.right.size}px`),T});function h(u,T){o.update("header",u,T)}function q(u,T){u.value!==T&&(u.value=T)}function L({height:u}){q(c,u),h("size",u)}function I(u){k.value===!0&&q(s,!0),n("focusin",u)}P(()=>e.modelValue,u=>{h("space",u),q(s,!0),o.animate()}),P(v,u=>{h("offset",u)}),P(()=>e.reveal,u=>{u===!1&&q(s,e.modelValue)}),P(s,u=>{o.animate(),n("reveal",u)}),P(o.scroll,u=>{e.reveal===!0&&q(s,u.direction==="up"||u.position<=e.revealOffset||u.position-u.inflectionPoint<100)});const V={};return o.instances.header=V,e.modelValue===!0&&h("size",c.value),h("space",e.modelValue),h("offset",v.value),U(()=>{o.instances.header===V&&(o.instances.header=void 0,h("size",0),h("offset",0),h("space",!1))}),()=>{const u=mt(i.default,[]);return e.elevated===!0&&u.push(_("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),u.push(_(te,{debounce:0,onResize:L})),_("header",{class:C.value,style:R.value,onFocusin:I},u)}}}),$t=O({name:"QPageContainer",setup(e,{slots:i}){const{proxy:{$q:n}}=M(),t=ee(ne,H);if(t===H)return console.error("QPageContainer needs to be child of QLayout"),H;$e(De,!0);const o=f(()=>{const c={};return t.header.space===!0&&(c.paddingTop=`${t.header.size}px`),t.right.space===!0&&(c[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(c.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(c[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),c});return()=>_("div",{class:"q-page-container",style:o.value},oe(i.default))}}),xt=O({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:i,emit:n}){const{proxy:{$q:t}}=M(),o=ee(ne,H);if(o===H)return console.error("QFooter needs to be child of QLayout"),H;const c=x(parseInt(e.heightHint,10)),s=x(!0),p=x(_e.value===!0||o.isContainer.value===!0?0:window.innerHeight),v=f(()=>e.reveal===!0||o.view.value.indexOf("F")!==-1||t.platform.is.ios&&o.isContainer.value===!0),g=f(()=>o.isContainer.value===!0?o.containerHeight.value:p.value),k=f(()=>{if(e.modelValue!==!0)return 0;if(v.value===!0)return s.value===!0?c.value:0;const a=o.scroll.value.position+g.value+c.value-o.height.value;return a>0?a:0}),C=f(()=>e.modelValue!==!0||v.value===!0&&s.value!==!0),R=f(()=>e.modelValue===!0&&C.value===!0&&e.reveal===!0),h=f(()=>"q-footer q-layout__section--marginal "+(v.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(C.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(v.value!==!0?" hidden":""):"")),q=f(()=>{const a=o.rows.value.bottom,y={};return a[0]==="l"&&o.left.space===!0&&(y[t.lang.rtl===!0?"right":"left"]=`${o.left.size}px`),a[2]==="r"&&o.right.space===!0&&(y[t.lang.rtl===!0?"left":"right"]=`${o.right.size}px`),y});function L(a,y){o.update("footer",a,y)}function I(a,y){a.value!==y&&(a.value=y)}function V({height:a}){I(c,a),L("size",a)}function u(){if(e.reveal!==!0)return;const{direction:a,position:y,inflectionPoint:z}=o.scroll.value;I(s,a==="up"||y-z<100||o.height.value-g.value-y-c.value<300)}function T(a){R.value===!0&&I(s,!0),n("focusin",a)}P(()=>e.modelValue,a=>{L("space",a),I(s,!0),o.animate()}),P(k,a=>{L("offset",a)}),P(()=>e.reveal,a=>{a===!1&&I(s,e.modelValue)}),P(s,a=>{o.animate(),n("reveal",a)}),P([c,o.scroll,o.height],u),P(()=>t.screen.height,a=>{o.isContainer.value!==!0&&I(p,a)});const m={};return o.instances.footer=m,e.modelValue===!0&&L("size",c.value),L("space",e.modelValue),L("offset",k.value),U(()=>{o.instances.footer===m&&(o.instances.footer=void 0,L("size",0),L("offset",0),L("space",!1))}),()=>{const a=We(i.default,[_(te,{debounce:0,onResize:V})]);return e.elevated===!0&&a.push(_("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),_("footer",{class:h.value,style:q.value,onFocusin:T},a)}}}),Ct=[Element,String],qt=[null,document,document.body,document.scrollingElement,document.documentElement];function Lt(e,i){let n=gt(i);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return qt.includes(n)?window:n}function zt(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function Pt(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let de;function we(){if(de!==void 0)return de;const e=document.createElement("p"),i=document.createElement("div");Qe(e,{width:"100%",height:"200px"}),Qe(i,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),i.appendChild(e),document.body.appendChild(i);const n=e.offsetWidth;i.style.overflow="scroll";let t=e.offsetWidth;return n===t&&(t=i.clientWidth),i.remove(),de=n-t,de}const{passive:Oe}=Te,kt=["both","horizontal","vertical"],Rt=O({name:"QScrollObserver",props:{axis:{type:String,validator:e=>kt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:Ct},emits:["scroll"],setup(e,{emit:i}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,o,c;P(()=>e.scrollTarget,()=>{v(),p()});function s(){t!==null&&t();const C=Math.max(0,zt(o)),R=Pt(o),h={top:C-n.position.top,left:R-n.position.left};if(e.axis==="vertical"&&h.top===0||e.axis==="horizontal"&&h.left===0)return;const q=Math.abs(h.top)>=Math.abs(h.left)?h.top<0?"up":"down":h.left<0?"left":"right";n.position={top:C,left:R},n.directionChanged=n.direction!==q,n.delta=h,n.directionChanged===!0&&(n.direction=q,n.inflectionPoint=n.position),i("scroll",{...n})}function p(){o=Lt(c,e.scrollTarget),o.addEventListener("scroll",g,Oe),g(!0)}function v(){o!==void 0&&(o.removeEventListener("scroll",g,Oe),o=void 0)}function g(C){if(C===!0||e.debounce===0||e.debounce==="0")s();else if(t===null){const[R,h]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];t=()=>{h(R),t=null}}}const{proxy:k}=M();return P(()=>k.$q.lang.rtl,s),fe(()=>{c=k.$el.parentNode,p()}),U(()=>{t!==null&&t(),v()}),Object.assign(k,{trigger:g,getPosition:()=>n}),Me}}),Bt=O({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:i,emit:n}){const{proxy:{$q:t}}=M(),o=x(null),c=x(t.screen.height),s=x(e.container===!0?0:t.screen.width),p=x({position:0,direction:"down",inflectionPoint:0}),v=x(0),g=x(_e.value===!0?0:we()),k=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),C=f(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),R=f(()=>g.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${g.value}px`}:null),h=f(()=>g.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${g.value}px`,width:`calc(100% + ${g.value}px)`}:null);function q(m){if(e.container===!0||document.qScrollPrevented!==!0){const a={position:m.position.top,direction:m.direction,directionChanged:m.directionChanged,inflectionPoint:m.inflectionPoint.top,delta:m.delta.top};p.value=a,e.onScroll!==void 0&&n("scroll",a)}}function L(m){const{height:a,width:y}=m;let z=!1;c.value!==a&&(z=!0,c.value=a,e.onScrollHeight!==void 0&&n("scrollHeight",a),V()),s.value!==y&&(z=!0,s.value=y),z===!0&&e.onResize!==void 0&&n("resize",m)}function I({height:m}){v.value!==m&&(v.value=m,V())}function V(){if(e.container===!0){const m=c.value>v.value?we():0;g.value!==m&&(g.value=m)}}let u=null;const T={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:o,height:c,containerHeight:v,scrollbarWidth:g,totalWidth:f(()=>s.value+g.value),rows:f(()=>{const m=e.view.toLowerCase().split(" ");return{top:m[0].split(""),middle:m[1].split(""),bottom:m[2].split("")}}),header:ce({size:0,offset:0,space:!1}),right:ce({size:300,offset:0,space:!1}),footer:ce({size:0,offset:0,space:!1}),left:ce({size:300,offset:0,space:!1}),scroll:p,animate(){u!==null?clearTimeout(u):document.body.classList.add("q-body--layout-animate"),u=setTimeout(()=>{u=null,document.body.classList.remove("q-body--layout-animate")},155)},update(m,a,y){T[m][a]=y}};if($e(ne,T),we()>0){let m=function(){z=null,Q.classList.remove("hide-scrollbar")},a=function(){if(z===null){if(Q.scrollHeight>t.screen.height)return;Q.classList.add("hide-scrollbar")}else clearTimeout(z);z=setTimeout(m,300)},y=function(ie){z!==null&&ie==="remove"&&(clearTimeout(z),m()),window[`${ie}EventListener`]("resize",a)},z=null;const Q=document.body;P(()=>e.container!==!0?"add":"remove",y),e.container!==!0&&y("add"),dt(()=>{y("remove")})}return()=>{const m=We(i.default,[_(Rt,{onScroll:q}),_(te,{onResize:L})]),a=_("div",{class:k.value,style:C.value,ref:e.container===!0?void 0:o,tabindex:-1},m);return e.container===!0?_("div",{class:"q-layout-container overflow-hidden",ref:o},[_(te,{onResize:I}),_("div",{class:"absolute-full",style:R.value},[_("div",{class:"scroll",style:h.value},[a])])]):a}}}),le=O({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:i}){const{proxy:{$q:n}}=M(),t=ee(ne,H);if(t===H)return console.error("QPage needs to be a deep child of QLayout"),H;if(ee(De,H)===H)return console.error("QPage needs to be child of QPageContainer"),H;const c=f(()=>{const p=(t.header.space===!0?t.header.size:0)+(t.footer.space===!0?t.footer.size:0);if(typeof e.styleFn=="function"){const v=t.isContainer.value===!0?t.containerHeight.value:n.screen.height;return e.styleFn(p,v)}return{minHeight:t.isContainer.value===!0?t.containerHeight.value-p+"px":n.screen.height===0?p!==0?`calc(100vh - ${p}px)`:"100vh":n.screen.height-p+"px"}}),s=f(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>_("main",{class:s.value,style:c.value},oe(i.default))}}),Ht={name:"HomeSection"};function It(e,i,n,t,o,c){return A(),N(le,{class:"q-pa-md"},{default:E(()=>i[0]||(i[0]=[F("h1",null,"Welcome to Home",-1),F("p",null,"This is the home page content.",-1)])),_:1})}const Et=Y(Ht,[["render",It],["__file","HomeSection.vue"]]),Qt={name:"AboutSection"};function Vt(e,i,n,t,o,c){return A(),N(le,{class:"q-pa-md"},{default:E(()=>i[0]||(i[0]=[F("h1",null,"About Me",-1),F("p",null,"Details about you can go here.",-1)])),_:1})}const At=Y(Qt,[["render",Vt],["__file","AboutSection.vue"]]),Ft={name:"SkillsSection"};function Ot(e,i,n,t,o,c){return A(),N(le,{class:"q-pa-md"},{default:E(()=>i[0]||(i[0]=[F("h1",null,"Skills",-1),F("p",null,"Skills component content",-1)])),_:1})}const Mt=Y(Ft,[["render",Ot],["__file","SkillsSection.vue"]]),Dt={name:"ProjectsSection"};function jt(e,i,n,t,o,c){return A(),N(le,{class:"q-pa-md"},{default:E(()=>i[0]||(i[0]=[F("h1",null,"Projects",-1),F("p",null,"Projects to be shown here",-1)])),_:1})}const Wt=Y(Dt,[["render",jt],["__file","ProjectsSection.vue"]]),Nt={name:"ContactSection"};function Ut(e,i,n,t,o,c){return A(),N(le,{class:"q-pa-md"},{default:E(()=>i[0]||(i[0]=[F("h1",null,"Contact",-1),F("p",null,"Contact information here",-1)])),_:1})}const Kt=Y(Nt,[["render",Ut],["__file","ContactSection.vue"]]),Xt={name:"IndexPage",data(){return{navItems:[{id:"home",label:"Home",component:Z(Et)},{id:"about",label:"About Me",component:Z(At)},{id:"skills",label:"Skills",component:Z(Mt)},{id:"projects",label:"Projects",component:Z(Wt)},{id:"contact",label:"Contact",component:Z(Kt)}],activeSection:"home"}},methods:{scrollTo(e){const i=document.getElementById(e);i&&i.scrollIntoView({behavior:"smooth"})},observeSections(){const e=new IntersectionObserver(i=>{i.forEach(n=>{n.isIntersecting&&(this.activeSection=n.target.id)})},{root:null,threshold:.5});this.navItems.forEach(i=>{const n=document.getElementById(i.id);n&&e.observe(n)})}},mounted(){this.observeSections()}},Gt=["id"];function Yt(e,i,n,t,o,c){return A(),N(Bt,{view:"hHh lpR fFf"},{default:E(()=>[K(St,{elevated:"",class:"bg-primary text-white","height-hint":"98"},{default:E(()=>[K(_t,{align:"center"},{default:E(()=>[K(Ve,null,{default:E(()=>[K(yt,null,{default:E(()=>i[0]||(i[0]=[ft("Shivam. Oraon")])),_:1})]),_:1}),(A(!0),be(Ie,null,He(o.navItems,s=>(A(),N(bt,{key:s.id,label:s.label,class:vt({"active-nav":o.activeSection===s.id}),onClick:p=>c.scrollTo(s.id)},null,8,["label","class","onClick"]))),128))]),_:1})]),_:1}),K($t,null,{default:E(()=>[(A(!0),be(Ie,null,He(o.navItems,s=>(A(),be("div",{key:s.id,id:s.id,class:"section"},[(A(),N(ht(s.component),{ref_for:!0,ref:s.id},null,512))],8,Gt))),128))]),_:1}),K(xt,{elevated:""},{default:E(()=>[K(Ve,null,{default:E(()=>i[1]||(i[1]=[F("div",null,"© 2024 Shivam. Oraon",-1)])),_:1})]),_:1})]),_:1})}const en=Y(Xt,[["render",Yt],["__file","IndexPage.vue"]]);export{en as default};
