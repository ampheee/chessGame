const s=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}};s();var d="/assets/logo-universal.7e21d659.png";document.querySelector("#app").innerHTML=`
    <img id="logo" class="logo">
    <div class="chess" id="chess">!IT IS A CHESS GAME!</div>
    <div class="input-box" id="input">
      <button class="btn" onclick="gameEasy()">Easy AI</button>
    </div>
      
    <div class="input-box" id="input">
      <button class="btn" onclick="gameMedium()">Medium AI</button>
    </div>
      
    <div class="input-box" id="input">
      <button class="btn" onclick="gameHard()">Hard AI</button>
    </div>
    <div class="developer" id="developer">developed by @ampheee</button>
    </div>  
`;document.getElementById("logo").src=d;window.gameEasy=function(){};window.gameMedium=function(){};window.gameHard=function(){};
