import React from 'react';
import renderGift from './renderGift';

function Gifts({ match }) {
  if (match && match.params && match.params.g) { // individual gift
    let giftName = match.params.g;
    giftName = giftName.split('_').join(' ');
    let source = require(`./sources/gifts/${match.params.s}`);
    let gift;
    let giftLevel;
    for (let level in source.default) {
      for (let g of source.default[level]) {
        if (g.name.toLowerCase() === giftName.toLowerCase()) {
          gift = g;
          giftLevel = Number(level) + 1;
          continue;
        }
      }
      if (gift) continue;
    }
    if (!gift) {
      return (
        <div className="content">
        <div className="content-head">
          <h1>{giftName}</h1>
        </div>
        <div className="content-body">
          No gift found for this page!
        </div>  
      </div>
      );
    }
    else {
      return (
        <div className="content">
          <div className="content-head">
            <h1>[{giftLevel} G] {gift.name}</h1>
          </div>
          <div className="content-body">
            {renderGift(gift)}
          </div>  
        </div>
      );  
    }
    
  }
  else if (match && match.params && match.params.s) { // source, render all gifts
    let source = require(`./sources/gifts/${match.params.s}`);
    let gifts = source.default;
    let content = [];

    for (let level in gifts) {
      let levelContent = [];
      if (level > 0) levelContent.push(<hr className="giftHR"/>);
      levelContent.push(<h2>[{Number(level)+1} G]</h2>);
      for (let gift of gifts[level]) {
        levelContent.push(<div className={`giftEntry`} id={gift.name}>{renderGift(gift, match.params.s)}</div>);
      }
      let idStr = `level${Number(level)+1}`
      let levelBlock = React.createElement("div", {className: "levelBlock", id: idStr}, levelContent);
      content.push(levelBlock);
    }

    // TODO, refactor filtering and searching to hide everything, go through the original file, and re-render only things that match
    function filter(otherCalled) {
      let bar = document.getElementById('levelSearch');
      let str = bar.value;
      let otherBar = document.getElementById('giftSearch');
      if (otherBar.value !== '' && otherCalled !== 'yes') {
        otherBar.value = '';
        search('yes');
      }      
      if (str.match(/^[1-9]$/)) { // one and only one digit
        let blocks = document.getElementsByClassName('levelBlock');
        for (let block of blocks) {
          if (block.id !== `level${str}`) {
            block.style.display = 'none';
          }
          else {
            block.style.display = 'block';
          }
        }
        let hrs = document.getElementsByClassName('giftHR');
        for (let hr of hrs) {
          hr.style.display = 'none';
        }
      }
      else if (str === '') { // empty search
        let blocks = document.getElementsByClassName('levelBlock');
        for (let block of blocks) {
          block.style.display = 'block';
        }
        let hrs = document.getElementsByClassName('giftHR');
        for (let hr of hrs) {
          hr.style.display = 'block';
        }
      }
      else if (str.match(/^[1-9]/)) { // they typed something after the one digit
        bar.value = str.split('')[0];
      }
      else {
        bar.value = '';
      }
    }

    function search(otherCalled) {
      let bar = document.getElementById('giftSearch');
      let str = bar.value;
      let otherBar = document.getElementById('levelSearch');
      if (otherBar.value !== '' && otherCalled !== 'yes') {
        otherBar.value = '';
        filter('yes');
      }     
      if (str === '') { // display them all again
        let blocks = document.getElementsByClassName('levelBlock');
        for (let block of blocks) {
          block.style.display = 'block';
        }
        let entries = document.getElementsByClassName('giftEntry');
        for (let entry of entries) {
          entry.style.display = 'block';
        }
        let hrs = document.getElementsByClassName('giftHR');
        for (let hr of hrs) {
          hr.style.display = 'block';
        }
      }
      else { // only show the one that matches str
        let blocks = document.getElementsByClassName('levelBlock');
        let needHR = false;
        for (let block of blocks) {
          let found = false;
          for (let child of block.children) {
            if (child.classList[0] === 'giftHR' && !needHR) {
              child.style.display = 'none'
            }
            else if (child.classList[0] === 'giftEntry') {
              if (child.id.toLowerCase().startsWith(str.toLowerCase()) || (str[0] === '*' && child.id.toLowerCase().includes(str.slice(1).toLowerCase()))) {
                child.style.display = 'block';
                found = true;
              }
              else {
                child.style.display = 'none';
              }
            }
          }
          if (!found) {
            block.style.display = 'none';
          }
          else {
            block.style.display = 'block';
            needHR = true;
          }
        }
      }
    }

    let filterEl;
    if (document.defaultView.screen.availWidth < 800) {
      filterEl =    
                <p className="searchSpan">
                  <span className="searchBox">
                    <label className="searchLabel" htmlFor="levelSearch">Filter Level:</label>
                    <input className ="searchBar" type="tel" id="levelSearch" name="levelSearch" onChange={filter.bind(null, false)} placeholder="G#" tabIndex={1}></input>                  
                  </span>
                  <br/>
                  <br/>
                  <label className="searchLabel" htmlFor="giftSearch">Search Gift:</label>            
                  <input className ="searchBar" type="search" id="giftSearch" name="giftSearch" onChange={search.bind(null, false)} placeholder="Gift" tabIndex={2}></input>            
                </p> 
                  
    }
    else {
      filterEl =  
                <span className="searchSpan">
                  <span className="searchBox">
                    <label className="searchLabel" htmlFor="levelSearch">Filter Level:</label>
                    <input className ="searchBar" type="search" id="levelSearch" name="levelSearch" onChange={filter} placeholder="G#" tabIndex={1}></input>
                  </span>
                  <label className="searchLabel" htmlFor="giftSearch">Search Gift:</label>            
                  <input className ="searchBar" type="search" id="giftSearch" name="giftSearch" onChange={search} placeholder="Gift" tabIndex={2}></input>            
                </span>
    }
    
    return (
      <div className="content">
        <div className="content-head">
          <h1>{match.params.s.toUpperCase()}</h1>
        </div>
        <div className={"content-body gift-list"}>
          <br/>
          {filterEl}
          <br/>
          {content}
        </div>  
      </div>
    ); 
  }
  else {
    return (
      <div className="content">
        <div className="content-head">
          <h1>GIFTS</h1>
        </div>
        <div className="content-body">
          No gifts found for this page!
        </div>  
      </div>
    ); 
  }
}

export default Gifts;