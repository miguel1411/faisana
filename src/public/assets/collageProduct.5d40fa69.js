import{c as p,d as o,j as u,w as y,e as _,f as b,g as w,F as k,a as m,r as d,o as I,b as g,i as e,t as l,m as v,p as S,q as z,s as C,E as $}from"./index.003a4d65.js";import{_ as f}from"./plugin-vue_export-helper.21dcd24c.js";const B={props:{images:{type:Array}},setup(s){const r=s;return(t,i)=>{const n=p("el-carousel-item"),a=p("el-carousel");return o(),u(a,{arrow:"always",autoplay:!1},{default:y(()=>[(o(!0),_(k,null,b(r.images,c=>(o(),u(n,{lazy:"",key:c,class:"bg-contain bg-no-repeat bg-center",style:w(`background-image: url(${c.location})`)},null,8,["style"]))),128))]),_:1})}}};var P=f(B,[["__scopeId","data-v-be4e2db0"]]);const x=s=>(z("data-v-4bff08b1"),s=s(),C(),s),E={class:"flex flex-col bg-stone-900 w-full min-h-screen"},F={class:"py-5 px-2 text-gray-200 text-2xl text-center font-sans font-semibold tracking-md capitalize"},L={class:"carrousel py-2"},N={key:0,class:"flex justify-between px-2"},V={class:"ml-4 text-xl capitalize font-semibold font-sans text-gray-200 animate-fade-in-down"},j={class:"font-semibold text-2xl font-sans text-gray-200 animate-fade-in-down mr-4"},q=x(()=>e("strong",null,"$",-1)),A={class:"container p-3 mt-1"},M={class:"text-md capitalize rounded-md p-2"},R={class:"text-gray-300"},T={class:"indent-1"},D=x(()=>e("br",null,null,-1)),G={class:"text-gray-300"},H={class:"indent-1"},J={setup(s){const r=()=>{const a=$.service({lock:!0,text:"Loading",background:"rgba(0, 0, 0, 0.9)"});setTimeout(()=>{a.close()},2e3)};m.currentRoute.value.params;const t=d([]),i=d([]),n=d(!1);return I(async()=>{r();const{productId:a}=m.currentRoute.value.params,c=await g.get(`/multimedia/getAllProductImg/${a}`),h=await g.get(`/product/getProduct/${a}`);i.value=c.data,t.value=h.data[0],n.value=!0}),(a,c)=>(o(),_("div",E,[e("h1",F,l(t.value.name),1),e("div",L,[n.value?(o(),u(P,{key:0,images:i.value},null,8,["images"])):v("",!0)]),n.value?(o(),_("div",N,[e("h1",V,l(t.value.name),1),e("span",j,[q,S(" "+l(t.value.price),1)])])):v("",!0),e("div",A,[e("div",M,[e("div",R,[e("h1",T,l(t.value.description),1)]),D,e("div",G,[e("h1",H,l(t.value.ingredient),1)])])])]))}};var Q=f(J,[["__scopeId","data-v-4bff08b1"]]);export{Q as default};