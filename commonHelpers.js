import{S as f,i as u}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const g="/goit-js-hw-11/assets/octagon-7962080a.svg",h="/goit-js-hw-11/assets/close_button-de5d3efc.svg",p=document.querySelector(".form"),a=document.querySelector(".form-input"),c=document.querySelector(".gallery-container");document.querySelector(".loader");const m='<p class="loader">Loading images, please wait...</p>',d=new URLSearchParams({key:"42207525-2f984868f7881b9b68563ca8c",image_type:"photo",orientation:"horizontal",safesearch:!0,q:""}),y=new f(".gallery-link",{className:"my-spinner"});p.addEventListener("submit",o=>{o.preventDefault(),a.value.trim()?w():i("Search field can not be empty"),p.reset()});function b(o){return c.innerHTML=m,d.set("q",o),fetch(`https://pixabay.com/api/?${d}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}function w(){b(a.value).then(o=>{o.hits.length?(L(o.hits),y.refresh()):i("Sorry, there are no images matching your search query. Please, try again!")}).catch(o=>i("Oops! Something went wrong. Try again!"))}function L(o){const s=o.map(t=>`<li class='gallery-item'><a class='gallery-link' href=${t.largeImageURL}><img class='gallery-img' src=${t.webformatURL} width='360' height='200' alt=${t.tags}><span class="img-loader"></span></a><ul class='desc-wrapper'><li class='desc-text'><h3>Likes</h3><p>${t.likes}</p></li><li class='desc-text'><h3>Views</h3><p>${t.views}</p></li><li class='desc-text'><h3>Comments</h3><p>${t.comments}</p></li><li class='desc-text'><h3>Downloads</h3><p>${t.downloads}</p></li></ul></li>`).join("");c.innerHTML=s}function i(o){u.show({class:"my-iziToast",backgroundColor:"#EF4040",messageColor:"#fff",messageSize:16,messageLineHeight:"24",message:o,position:"topRight",iconUrl:g,progressBarColor:"#B51B1B;",close:!1,transitionIn:"bounceInLeft",transitionOut:"fadeOutRight",buttons:[[`<button type="button" style="background-color: #EF4040; padding-top: 15px; padding-bottom: 15px"><img src=${h}></button>`,function(s,t){s.hide({transitionOut:"fadeOutRight"},t)}]],onOpening:function(s,t){c.innerHTML="",a.addEventListener("input",()=>{u.hide({transitionOut:"fadeOutRight"},t)},{once:!0})}})}
//# sourceMappingURL=commonHelpers.js.map
