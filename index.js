import{a as w,S as q,i as a}from"./assets/vendor-frHSA4Lh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();async function x(r,t=1,s=15){const n="https://pixabay.com/api/",e="50282813-8cc06f543c0e53ea72b225e01",o=new URLSearchParams({key:e,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:s,page:t}),i=`${n}?${o}`;return(await w.get(i)).data}const p=document.querySelector(".gallery"),g=document.querySelector("#loader"),y=document.querySelector(".btn"),S=new q(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function P(r){const t=r.map(({webformatURL:s,largeImageURL:n,tags:e,likes:o,views:i,comments:f,downloads:L})=>`<li class="gallery-item">
  <a class="gallery-link" href="${n}">
    <img
     class="gallery-image"       src="${s}"
      alt="${e}"
    />
  </a>
  <div class="info-image">
  <div class="info-box">
  <h4 class=info-item>likes</h4>
  <p class=info-text>${o}</p>
  </div>
  <div class="info-box">
  <h4 class=info-item>views</h4>
  <p class=info-text>${i}</p>
  </div>
  <div class="info-box">
   <h4 class=info-item>comments</h4>
  <p class=info-text>${f}</p>
  </div>
  <div class="info-box">
  <h4 class=info-item>downloads</h4>
  <p class=info-text>${L}</p>
   </div>
   </div>
</li>`).join(`
`);p.insertAdjacentHTML("beforeend",t),S.refresh()}function $(){p.innerHTML=""}function B(){g.classList.remove("is-hidden")}function R(){g.classList.add("is-hidden")}function C(){y.classList.remove("is-hidden")}function c(){y.classList.add("is-hidden")}const d=document.querySelector(".form"),E=d.querySelector("input"),u=document.querySelector(".btn");let b="",l=1;const m=15;let h=0;d.addEventListener("submit",async r=>{r.preventDefault();const t=E.value.trim();if(!t)return a.warning({title:"Warning",message:"Please enter a search query",backgroundColor:"#ef4040",position:"topRight"});b=t,l=1,$(),c(),await v(),d.reset()});u.addEventListener("click",async()=>{l++,await v(!0)});async function v(r=!1){B(),u.disabled=!0;try{const t=await x(b,l,m);if(!t.hits.length)return c(),a.error({title:"No results",message:"Sorry, there are no images matching your search query.",backgroundColor:"#ef4040",position:"topRight"});if(P(t.hits),h=Math.ceil(t.totalHits/m),l<h?C():(c(),a.info({title:"End",message:"You've reached the end of search results.",backgroundColor:"#4CAF50",position:"topRight"})),r){const{height:s}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})}}catch{a.error({title:"Error",message:"An error occurred while fetching images.",backgroundColor:"#ef4040",position:"topRight"}),c()}finally{R(),u.disabled=!1}}
//# sourceMappingURL=index.js.map
