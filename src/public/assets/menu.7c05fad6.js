import{r as i,o as g,a as m,b as p,k as _,c as v,d as n,e as l,i as o,F as h,f as x,u as w,h as y,w as k,g as b,t as c}from"./index.66b84484.js";const $={class:"flex flex-col justify-center"},C={class:"p-3 grid gap-1 grid-cols-2 md:grid-cols-3 md:gap-2 lg:grid-cols-5"},B={class:"rounded-md flex p-2 flex-col w-full bg-gradient-to-r from-stone-700/80 to-transparent"},I={class:"font-semibold capitalize"},j={setup(L){const d=i(""),s=i([]);g(async()=>{const{restaurantId:t,categoryId:a,subcategoryId:r}=m.currentRoute.value.params,e=await p.get(`/product/getAllProduct/${t}/${a}/${r}`);s.value=e.data});const u=_(()=>{let t=d.value;return t.length?s.value.filter(a=>a.name.toLowerCase().includes(t.toLowerCase())):s.value});return(t,a)=>{const r=v("router-link");return n(),l("div",$,[o("div",C,[(n(!0),l(h,null,x(w(u),(e,f)=>(n(),l("div",{key:f},[y(r,{to:"/productDetails/"+e.id},{default:k(()=>[o("div",{class:"p-1 overflow-hidden relative justify-end cursor-pointer flex flex-col rounded-md h-64 text-white bg-cover animate-fade-in-down",style:b(`background-image : url(${e.imgPath})`)},[o("div",B,[o("span",I,c(e.name)+" $"+c(e.price),1)])],4)]),_:2},1032,["to"])]))),128))])])}}};export{j as default};
