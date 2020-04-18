import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('book'));

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