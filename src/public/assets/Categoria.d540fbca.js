import{r as d,o as _,a as g,b as m,c as f,d as s,e as r,F as p,f as h,n as x,g as b,h as v,w as y,i as t,t as l,j as k}from"./index.66b84484.js";const w={class:"grid grid-cols-2 gap-2 lg:grid-cols-3 p-5 min-h-screen"},C=t("div",{class:"absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-stone-900/50 rounded-lg"},null,-1),j={class:"absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center"},B={class:"text-white font-regular flex flex-col justify-start"},$={class:"text-3xl leading-0 font-semibold"},z=t("span",{class:"-mt-2"},"En men\xFA",-1),E={class:"relative p-5 text-center"},F={class:"tracking-tight font-medium font-regular text-white/90"},N={setup(i){const a=d([]);return _(async()=>{const{restaurantId:o}=g.currentRoute.value.params;await m.get(`/category/getallCategory/${o}`).then(n=>{a.value=n.data})}),(o,n)=>{const c=f("router-link");return s(),r("div",w,[(s(!0),r(p,null,h(a.value,(e,u)=>(s(),r("div",{key:u,class:x(`relative w-full flex items-end
      justify-center text-center
      bg-cover bg-center
      h-64
      rounded-lg cursor-pointer animate-fade-in-up`),style:b(`background-image: url(${e.Category.imgPath})`)},[v(c,{to:"/subcategory/"+e.Restaurant.id+"/"+e.Category.id},{default:y(()=>[C,t("div",j,[t("div",B,[t("span",$,l(e.totalProducts),1),z])]),t("main",E,[t("a",F,[t("h2",null,l(e.Category.name),1)])])]),_:2},1032,["to"])],4))),128))])}}},R={setup(i){return(a,o)=>(s(),k(N))}};export{R as default};
