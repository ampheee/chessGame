import './style.css';
import './appStartMenu.css';

import logo from './assets/images/logo-universal.png';
import {Greet} from '../wailsjs/go/main/App';

document.querySelector('#app').innerHTML = `
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
`;
document.getElementById('logo').src = logo;

let nameElement = document.getElementById("name");
nameElement.focus();
let resultElement = document.getElementById("result");

window.gameEasy = function () {
    document.querySelector()
    if (name === "") return;
    try {
        Greet(name)
            .then((result) => {
                // Update result with data back from App.Greet()
                resultElement.innerText = result;
            })
            .catch((err) => {
                console.error(err);
            });
    } catch (err) {
        console.error(err);
    }
};

window.gameMedium = function (){
}

window.gameHard = function (){

}