import{r,o as h,a as f,b as p,d as e,e as s,F as u,f as _,i as t,t as l,k as m}from"./index.c1ec00cb.js";const x={class:"mt-5 flex justify-center flex-col"},v=t("h1",{class:"text-2xl text-center font-sans font-semibold tracking-md text-stone-800 capitalize"},null,-1),b={class:"text-center text-5xl capitalize font-semibold font-sans text-stone-800 animate-fade-in-down"},g={class:"container mt-5 p-1.5"},k={class:"text-md capitalize text-left font-semibold font-sans text-stone-650 mt-3.5 border-solid border-2 border-stone-400 rounded-md p-5"},y=m(" Descripci\xF3n: "),w=t("br",null,null,-1),z={class:"indent-1"},B=m(" Ingredientes: "),I=t("br",null,null,-1),M={class:"indent-1"},D=t("div",{class:"rounded-lg p-5"},null,-1),F=[D],j={setup(N){const i=r([]),d=r([]);return h(async()=>{const{productId:c}=f.currentRoute.value.params,o=await p.get(`/multimedia/getAllProductImg/${c}`);d.value=o.data[0].Multimedia,i.value=o.data}),(c,o)=>(e(),s("div",x,[v,(e(!0),s(u,null,_(i.value,(n,a)=>(e(),s("div",{key:a,class:"bg-cover bg-center h-56 w-full self-center"},[t("h1",b,l(n.name),1),t("div",g,[t("div",k,[t("div",null,[y,w,t("h1",z,l(n.description),1)]),t("div",null,[B,I,t("h1",M,l(n.ingredient),1)])])])]))),128)),(e(!0),s(u,null,_(d.value,(n,a)=>(e(),s("div",{key:a},F))),128))]))}};export{j as default};