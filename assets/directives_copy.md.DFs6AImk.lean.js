import{v as d}from"./chunks/theme.DDaGUECi.js";import{d as g,p as l,c as a,o as n,ag as y,j as p,k as F,a as o,t as E,_ as c,ah as k,G as t}from"./chunks/framework.DBggldPO.js";import{A as C}from"./chunks/ApiTable.CHGtgl-X.js";const B={class:"demo-container"},u={class:"copy-text",title:"点击复制"},v=g({__name:"CopyDemo",setup(e){const i=l("这是一段可以直接复制的文本内容");return(h,s)=>(n(),a("div",B,[y((n(),a("div",u,[o(E(i.value),1)])),[[F(d)]]),s[0]||(s[0]=p("p",{class:"demo-tip"},"点击上方文本区域即可复制文本内容（隐式复制）",-1))]))}}),A=c(v,[["__scopeId","data-v-3406ff7d"]]),m={class:"demo-container"},b={class:"content-display"},D={class:"copy-button",title:"点击复制"},_=g({__name:"CopyDemoTo",setup(e){const i=l("点击复制"),h=l("这是将被复制的内容");return(s,r)=>(n(),a("div",m,[p("div",b,"预设文本内容："+E(h.value),1),y((n(),a("button",D,[o(E(i.value),1)])),[[F(d),h.value]]),r[0]||(r[0]=p("p",{class:"demo-tip"},"点击按钮复制预设的文本内容（显式复制）",-1))]))}}),q=c(_,[["__scopeId","data-v-fbecc163"]]),S=JSON.parse('{"title":"v-copy 指令","description":"","frontmatter":{},"headers":[],"relativePath":"directives/copy.md","filePath":"directives/copy.md","lastUpdated":1739895970000}'),x={name:"directives/copy.md"},I=Object.assign(x,{setup(e){const i=[{name:"value",description:"一键复制文本内容，支持动态文本和复制状态反馈",type:"string | Ref<string>",required:!1}];return(h,s)=>(n(),a("div",null,[s[0]||(s[0]=k("",13)),t(A),s[1]||(s[1]=k("",3)),t(q),s[2]||(s[2]=k("",2)),t(C,{data:i}),s[3]||(s[3]=k("",3))]))}});export{S as __pageData,I as default};
