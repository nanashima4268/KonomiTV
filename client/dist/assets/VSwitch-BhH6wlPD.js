import{u as Y,m as j,V,j as q}from"./VTextField-DoBCnobE.js";import{G as E,H as G,I as g,dk as H,q as O,dd as W,T as w,ae as $,Y as J,af as K,a as t,D as y,F as Q,cY as X,d7 as Z,dl as ee,ai as te}from"./index-CzJN5vpE.js";import{m as ae,V as C}from"./VChip-ar_Fnbpl.js";const le=G({indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...j(),...ae()},"VSwitch"),ie=E()({name:"VSwitch",inheritAttrs:!1,props:le(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,b){let{attrs:S,slots:a}=b;const n=g(e,"indeterminate"),s=g(e,"modelValue"),{loaderClasses:P}=H(e),{isFocused:_,focus:I,blur:F}=Y(e),m=O(),h=W&&window.matchMedia("(forced-colors: active)").matches,x=w(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),A=$(),B=w(()=>e.id||`switch-${A}`);function p(){n.value&&(n.value=!1)}function D(i){var u,d;i.stopPropagation(),i.preventDefault(),(d=(u=m.value)==null?void 0:u.input)==null||d.click()}return J(()=>{const[i,u]=K(S),d=V.filterProps(e),R=C.filterProps(e);return t(V,y({class:["v-switch",{"v-switch--flat":e.flat},{"v-switch--inset":e.inset},{"v-switch--indeterminate":n.value},P.value,e.class]},i,d,{modelValue:s.value,"onUpdate:modelValue":r=>s.value=r,id:B.value,focused:_.value,style:e.style}),{...a,default:r=>{let{id:z,messagesId:M,isDisabled:N,isReadonly:T,isValid:k}=r;const c={model:s,isValid:k};return t(C,y({ref:m},R,{modelValue:s.value,"onUpdate:modelValue":[o=>s.value=o,p],id:z.value,"aria-describedby":M.value,type:"checkbox","aria-checked":n.value?"mixed":void 0,disabled:N.value,readonly:T.value,onFocus:I,onBlur:F},u),{...a,default:o=>{let{backgroundColorClasses:v,backgroundColorStyles:l}=o;return t("div",{class:["v-switch__track",h?void 0:v.value],style:l.value,onClick:D},[a["track-true"]&&t("div",{key:"prepend",class:"v-switch__track-true"},[a["track-true"](c)]),a["track-false"]&&t("div",{key:"append",class:"v-switch__track-false"},[a["track-false"](c)])])},input:o=>{let{inputNode:v,icon:l,backgroundColorClasses:U,backgroundColorStyles:L}=o;return t(Q,null,[v,t("div",{class:["v-switch__thumb",{"v-switch__thumb--filled":l||e.loading},e.inset||h?void 0:U.value],style:e.inset?void 0:L.value},[a.thumb?t(X,{defaults:{VIcon:{icon:l,size:"x-small"}}},{default:()=>[a.thumb({...c,icon:l})]}):t(q,null,{default:()=>[e.loading?t(ee,{name:"v-switch",active:!0,color:k.value===!1?void 0:x.value},{default:f=>a.loader?a.loader(f):t(te,{active:f.isActive,color:f.color,indeterminate:!0,size:"16",width:"2"},null)}):l&&t(Z,{key:String(l),icon:l,size:"x-small"},null)]})])])}})}})}),{}}});export{ie as V};
