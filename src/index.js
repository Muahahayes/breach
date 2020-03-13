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

function ruleToggle() {
  let ruleList = document.getElementById('rule-list');
  let ruleBtn = document.getElementById('rule-btn');
  if (ruleList.style.display === 'none') {
    ruleList.style.display = 'block';
    ruleBtn.innerHTML = '▲';
  }
  else {
    ruleList.style.display = 'none';
    ruleBtn.innerHTML = '▼';
  }
}

function ruleShow() {
  let ruleList = document.getElementById('rule-list');
  let ruleBtn = document.getElementById('rule-btn');
  if (ruleList.style.display === 'none') {
    ruleList.style.display = 'block';
    ruleBtn.innerHTML = '▲';
  }
}
let ruleBtn = document.getElementById('rule-btn');
ruleBtn.addEventListener('click', ruleToggle, false);
let ruleLink = document.getElementById('rule-link');
ruleLink.addEventListener('click', ruleShow, false);

function raceToggle() {
  let raceList = document.getElementById('race-list');
  let raceBtn = document.getElementById('race-btn');
  if (raceList.style.display === 'none') {
    raceList.style.display = 'block';
    raceBtn.innerHTML = '▲';
  }
  else {
    raceList.style.display = 'none';
    raceBtn.innerHTML = '▼';
  }
}

function raceShow() {
  let raceList = document.getElementById('race-list');
  let raceBtn = document.getElementById('race-btn');
  if (raceList.style.display === 'none') {
    raceList.style.display = 'block';
    raceBtn.innerHTML = '▲';
  }
}
let raceBtn = document.getElementById('race-btn');
raceBtn.addEventListener('click', raceToggle, false);
let raceLink = document.getElementById('race-link');
raceLink.addEventListener('click', raceShow, false);

function sourceToggle() {
  let sourceList = document.getElementById('source-list');
  let sourceBtn = document.getElementById('source-btn');
  if (sourceList.style.display === 'none') {
    sourceList.style.display = 'block';
    sourceBtn.innerHTML = '▲';
  }
  else {
    sourceList.style.display = 'none';
    sourceBtn.innerHTML = '▼';
  }
}

function sourceShow() {
  let sourceList = document.getElementById('source-list');
  let sourceBtn = document.getElementById('source-btn');
  if (sourceList.style.display === 'none') {
    sourceList.style.display = 'block';
    sourceBtn.innerHTML = '▲';
  }
}
let sourceBtn = document.getElementById('source-btn');
sourceBtn.addEventListener('click', sourceToggle, false);
let sourceLink = document.getElementById('source-link');
sourceLink.addEventListener('click', sourceShow, false);

function giftToggle() {
  let giftList = document.getElementById('gift-list');
  let giftBtn = document.getElementById('gift-btn');
  if (giftList.style.display === 'none') {
    giftList.style.display = 'block';
    giftBtn.innerHTML = '▲';
  }
  else {
    giftList.style.display = 'none';
    giftBtn.innerHTML = '▼';
  }
}

function giftShow() {
  let giftList = document.getElementById('gift-list');
  let giftBtn = document.getElementById('gift-btn');
  if (giftList.style.display === 'none') {
    giftList.style.display = 'block';
    giftBtn.innerHTML = '▲';
  }
}
let giftBtn = document.getElementById('gift-btn');
giftBtn.addEventListener('click', giftToggle, false);
let giftLink = document.getElementById('gift-link');
giftLink.addEventListener('click', giftShow, false);

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
  console.log('click')
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