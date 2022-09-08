import './style.css';
import './appStartMenu.css';

import logo from './assets/images/logo-universal.png';

document.querySelector('#app').innerHTML = `
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
`;
document.getElementById('logo').src = logo;

window.gameEasy = function (){
}



window.gameMedium = function (){
}

window.gameHard = function (){

}