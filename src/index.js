import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('book'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

function navToggle() {
  let nav = document.getElementsByClassName('nav-items')[0];
  let cBody = document.getElementsByClassName('content-body')[0];
  let fade = document.getElementsByClassName('fade')[0];
  if (nav.style.display === 'flex') {
    nav.style.display = 'none';
    fade.style.display = 'none';
    cBody.style.width = '95%';
    cBody.style['padding-left'] = '10px';
  }
  else {
    nav.style.display = 'flex';
    fade.style.display = 'block';
    cBody.style.width = '70%';
    cBody.style['padding-left'] = '30%';
  }
}

let hamburger = document.getElementsByClassName('hamburger')[0];
hamburger.addEventListener('click', navToggle, false);

function closeNav() {
  let nav = document.getElementsByClassName('nav-items')[0];
  let fade =document.getElementsByClassName('fade')[0];
  let cBody = document.getElementsByClassName('content-body')[0];
  let hamburger = document.getElementsByClassName('hamburger')[0];
  nav.style.display = 'none';
  fade.style.display = 'none';
  hamburger.style.display = 'block';
  cBody.style.width = '95%';
  cBody.style['padding-left'] = '10px';
  
}
let fadeScreen = document.getElementsByClassName('fade')[0];
fadeScreen.addEventListener('click', closeNav, false);