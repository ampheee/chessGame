const c=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};c();var u="/assets/logo-universal.1cb75066.png";function d(r){return window.go.main.App.Greet(r)}document.querySelector("#app").innerHTML=`
    <img id="logo" class="logo">
      <div class="result" id="result">ITS A CHESS GAME!!</div>
      <div class="input-box" id="input">
        <input class="input" id="name" type="text" autocomplete="off" />
        <button class="btn" onclick="greet()">Greet</button>
      </div>
    </div>
`;document.getElementById("logo").src=u;let l=document.getElementById("name");l.focus();let a=document.getElementById("result");window.greet=function(){let r=l.value;if(r!=="")try{d(r).then(o=>{a.innerText=o}).catch(o=>{console.error(o)})}catch(o){console.error(o)}};
