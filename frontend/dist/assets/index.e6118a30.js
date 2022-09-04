const l=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};l();var c="/assets/logo-universal.7e21d659.png";function d(o){return window.go.main.App.Greet(o)}document.querySelector("#app").innerHTML=`
    <img id="logo" class="logo">
    <div class="chess" id="chess">!IT IS A CHESS GAME!</div>
    <div class="input-box" id="input">
      <button class="btn" onclick="greet()">Easy AI</button>
    </div>
      
    <div class="input-box" id="input">
      <button class="btn" onclick="greet()">Medium AI</button>
    </div>
      
    <div class="input-box" id="input">
      <button class="btn" onclick="greet()">Hard AI</button>
    </div>
    <div class="developer" id="developer">developed by @ampheee</button>
    </div>
`;document.getElementById("logo").src=c;let u=document.getElementById("name");u.focus();let a=document.getElementById("result");window.gameEasy=function(){if(document.querySelector(),name!=="")try{d(name).then(o=>{a.innerText=o}).catch(o=>{console.error(o)})}catch(o){console.error(o)}};window.gameMedium=function(){};window.gameHard=function(){};
