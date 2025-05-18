import{a as m,S as h,i as a}from"./assets/vendor-frHSA4Lh.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function p(i){const r="https://pixabay.com/api/",o="50282813-8cc06f543c0e53ea72b225e01",s=new URLSearchParams({key:o,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}?${s}`;return m.get(e).then(t=>t.data).catch(t=>{throw t})}const l=document.querySelector(".gallery"),u=document.querySelector("#loader"),g=new h(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function y(i){const r=i.map(({webformatURL:o,largeImageURL:s,tags:e,likes:t,views:n,comments:f,downloads:d})=>`<li class="gallery-item">
  <a class="gallery-link" href="${s}">
    <img
     class="gallery-image"       src="${o}"
      alt="${e}"
    />
  </a>
  <div class="info-image">
  <div class="info-box">
  <h4 class=info-item>likes</h4>
  <p class=info-text>${t}</p>
  </div>
  <div class="info-box">
  <h4 class=info-item>views</h4>
  <p class=info-text>${n}</p>
  </div>
  <div class="info-box">
   <h4 class=info-item>comments</h4>
  <p class=info-text>${f}</p>
  </div>
  <div class="info-box">
  <h4 class=info-item>downloads</h4>
  <p class=info-text>${d}</p>
   </div>
   </div>
</li>`).join(`
`);l.insertAdjacentHTML("beforeend",r),g.refresh()}function v(){l.innerHTML=""}function b(){u.classList.remove("is-hidden")}function L(){u.classList.add("is-hidden")}const c=document.querySelector(".form"),x=c.querySelector("input");c.addEventListener("submit",i=>{i.preventDefault();const r=x.value.trim();if(r===""){a.warning({title:"Warning",message:"Please enter a search query",backgroundColor:" #ef4040",position:"topRight"});return}b(),v(),p(r).then(o=>{if(o.hits.length===0){a.error({title:"No results",position:"topRight",backgroundColor:" #ef4040",message:"Sorry, there are no images matching your search query. Please try again!"});return}y(o.hits)}).catch(o=>{a.error({title:"Error",message:"An error occurred while fetching the images. Please try again later.",position:"topRight",backgroundColor:" #ef4040"})}).finally(()=>{L(),c.reset()})});
//# sourceMappingURL=index.js.map
