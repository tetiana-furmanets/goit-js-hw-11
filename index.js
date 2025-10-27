import{a as p,S as y,i as n}from"./assets/vendor-BNibzuFn.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const h="https://pixabay.com/api/",b="52901396-de7aac391364669bcd79cab11",L={key:b,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:20};async function w(o){try{return(await p.get(h,{params:{q:o,...L}})).data}catch(r){throw r}}const u=document.querySelector(".gallery"),c=document.querySelector(".loader-wrapper"),S=new y(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function v(o){const r=o.map(a=>{const{webformatURL:s,largeImageURL:e,tags:t,likes:i,views:m,comments:d,downloads:g}=a;return`
      <li class="gallery-item">
        <a class="gallery-link" href="${e}">
          <img class="gallery-image" src="${s}" alt="${t}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b>${i}</p>
          <p class="info-item"><b>Views</b>${m}</p>
          <p class="info-item"><b>Comments</b>${d}</p>
          <p class="info-item"><b>Downloads</b>${g}</p>
        </div>
      </li>
      `}).join("");u.insertAdjacentHTML("beforeend",r),S.refresh()}function P(){u.innerHTML=""}function $(){c&&c.classList.add("is-visible")}function l(){c&&c.classList.remove("is-visible")}const f=document.querySelector(".form");f.addEventListener("submit",q);async function q(o){o.preventDefault();const a=f.elements["search-text"].value.trim();if(!a){n.warning({title:"Warning",message:"Please enter a search query"});return}P(),$();try{const s=await w(a),{hits:e,totalHits:t}=s;if(!e||e.length===0){n.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"}),l();return}v(e),n.success({title:"Found",message:`Found ${t} images. Showing ${e.length} results.`})}catch(s){console.error(s),n.error({title:"Error",message:"Something went wrong when fetching images. Please try again later."})}finally{l()}}
//# sourceMappingURL=index.js.map
