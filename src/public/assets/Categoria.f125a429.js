import{r as u,o as d,a as g,b as m,c as _,d as s,e as n,F as f,f as p,n as h,g as x,h as v,w as b,i as t,t as y,j as k}from"./index.593aa181.js";const w={class:"grid grid-cols-2 gap-2 lg:grid-cols-3 p-5 min-h-screen"},C=t("div",{class:"absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-stone-900/50 rounded-lg"},null,-1),j=t("div",{class:"absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center"},[t("div",{class:"text-white font-regular flex flex-col justify-start"},[t("span",{class:"text-3xl leading-0 font-semibold"},"25"),t("span",{class:"-mt-2"},"En men\xFA")])],-1),B={class:"relative p-5 text-center"},$={class:"tracking-tight font-medium font-regular text-white/90"},z={setup(l){const a=u([]);return d(async()=>{const{restaurantId:r}=g.currentRoute.value.params;await m.get(`/category/getallCategory/${r}`).then(o=>{a.value=o.data})}),(r,o)=>{const i=_("router-link");return s(),n("div",w,[(s(!0),n(f,null,p(a.value,(e,c)=>(s(),n("div",{key:c,class:h(`relative h-64 w-full flex items-end
      justify-center text-center
      bg-cover bg-center
      rounded-lg cursor-pointer`),style:x(`background-image: url(${e.Category.imgPath})`)},[v(i,{to:"/menu/"+e.Restaurant.id+"/"+e.Category.id},{default:b(()=>[C,j,t("main",B,[t("a",$,[t("h2",null,y(e.Category.name),1)])])]),_:2},1032,["to"])],4))),128))])}}},F={setup(l){return(a,r)=>(s(),k(z))}};export{F as default};