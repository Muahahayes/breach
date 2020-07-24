import React from 'react';
import { Link } from 'react-router-dom';
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
      let sourceName = match.params.s;
      sourceName = sourceName.split('');
      sourceName[0] = sourceName[0].toUpperCase();
      sourceName = sourceName.join('');
      return (        
        <div className="content">
          <div className="content-head">
            <h1>[{giftLevel} G] {gift.name}</h1>
          </div>
          <div className="content-body">
            Return to <Link to={`/sources/${match.params.s}/gifts`}>{sourceName}</Link> Gifts
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
      if (gifts[level].length > 0) {
        if (level > 0) levelContent.push(<hr className="searchHR"/>);
        levelContent.push(<h2>[{Number(level)+1} G]</h2>);
      }      
      for (let gift of gifts[level]) {
        if (gift) levelContent.push(<div className={`searchEntry`} id={gift.name}>{renderGift(gift, match.params.s)}</div>);
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
      let otherBar2 = document.getElementById('attributeSearch');
      if (otherBar.value !== '' && otherCalled !== 'yes') {
        otherBar.value = '';
        search('yes');
      }      
      if (otherBar2.value !== '' && otherCalled !== 'yes') {
        otherBar2.value = '';
        attributes('yes');
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
        let hrs = document.getElementsByClassName('searchHR');
        for (let hr of hrs) {
          hr.style.display = 'none';
        }
      }
      else if (str === '') { // empty search
        let blocks = document.getElementsByClassName('levelBlock');
        for (let block of blocks) {
          block.style.display = 'block';
        }
        let hrs = document.getElementsByClassName('searchHR');
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
      let otherBar2 = document.getElementById('attributeSearch');
      if (otherBar.value !== '' && otherCalled !== 'yes') {
        otherBar.value = '';
        filter('yes');
      }     
      if (otherBar2.value !== '' && otherCalled !== 'yes') {
        otherBar2.value = '';
        attributes('yes');
      } 
      if (str === '') { // display them all again
        let blocks = document.getElementsByClassName('levelBlock');
        for (let block of blocks) {
          block.style.display = 'block';
        }
        let entries = document.getElementsByClassName('searchEntry');
        for (let entry of entries) {
          entry.style.display = 'block';
        }
        let hrs = document.getElementsByClassName('searchHR');
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
            if (child.classList[0] === 'searchHR' && !needHR) {
              child.style.display = 'none'
            }
            else if (child.classList[0] === 'searchEntry') {
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

    function attributes(otherCalled) {
      let bar = document.getElementById('attributeSearch');
      let str = bar.value;
      let otherBar = document.getElementById('giftSearch');
      let otherBar2 = document.getElementById('levelSearch');
      if (otherBar.value !== '' && otherCalled !== 'yes') {
        otherBar.value = '';
        search('yes');
      }  
      if (otherBar2.value !== '' && otherCalled !== 'yes') {
        otherBar2.value = '';
        filter('yes');
      }
      if (str === '') { // display them all again
        let blocks = document.getElementsByClassName('levelBlock');
        for (let block of blocks) {
          block.style.display = 'block';
        }
        let entries = document.getElementsByClassName('searchEntry');
        for (let entry of entries) {
          entry.style.display = 'block';
        }
        let hrs = document.getElementsByClassName('searchHR');
        for (let hr of hrs) {
          hr.style.display = 'block';
        }
      }
      else { // only show gifts that have attributes that include str
        let blocks = document.getElementsByClassName('levelBlock');
        let needHR = false;
        for (let block of blocks) {
          let found = false;
          for (let child of block.children) {
            if (child.classList[0] === 'searchHR' && !needHR) {
              child.style.display = 'none'
            }
            else if (child.classList[0] === 'searchEntry') {
              let atts = str.split('+');
              for (let att of atts) {
                if (child.getElementsByClassName('attributes')[0].textContent.toLowerCase().includes(att.toLowerCase())) { //TODO: add split on +
                  child.style.display = 'block';
                  found = true;
                }
                else if (att !== '') {
                  child.style.display = 'none';
                }
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

    function hidePopup() {
      let modal = document.getElementById('popup-modal');
      let screen = document.getElementById('popup-screen');
      modal.style.display = 'none';
      screen.style.display = 'none';
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
        <input className ="searchBar" type="search" id="giftSearch" name="giftSearch" onChange={search.bind(null, false)} placeholder="Gift" tabIndex={2} title="Searches for a Gift name starting with your text, add a * to the front to search for Gifts that include your text within their name. (eg. *oc finds Shock)"></input>      
        <br/>
        <br/>
        <label className="searchLabel" htmlFor="attributeSearch">Search Attributes:</label>            
        <input className ="searchBar" type="search" id="attributeSearch" name="attributeSearch" onChange={attributes} placeholder="[Attribute]" tabIndex={2} title="Searches for Gifts with any attribute that include your text within the attribute name. Add a + between attributes to narrow the search to match multiple attributes. (eg. Ranged+Action)"></input>        
      </p> 
                  
    }
    else {
      filterEl =  
      <span className="searchSpan">
        <span className="searchBox">
          <label className="searchLabel" htmlFor="levelSearch">Filter Level:</label>
          <input className ="searchBar" type="search" id="levelSearch" name="levelSearch" onChange={filter} placeholder="G#" tabIndex={1}></input>
        </span>
        <label className="searchLabel" htmlFor="giftSearch">Search Gifts:</label>            
        <input className ="searchBar" type="search" id="giftSearch" name="giftSearch" onChange={search} placeholder="Gift" tabIndex={2} title="Searches for a Gift name starting with your text, add a * to the front to search for Gifts that include your text within their name. (eg. *oc finds Shock)"></input>  
        <label className="searchLabel" htmlFor="attributeSearch">Search Attributes:</label>            
        <input className ="searchBar" type="search" id="attributeSearch" name="attributeSearch" onChange={attributes} placeholder="[Attribute]" tabIndex={2} title="Searches for Gifts with any attribute that include your text within the attribute name. Add a + between attributes to narrow the search to match multiple attributes. (eg. Ranged+Action)"></input>            
      </span>
    }
    let {name} = require(`./sources/${match.params.s}`).default;
    return (
      <div className="content">
        <div className="content-head">
          <h1>{name} Gifts</h1>
        </div>
        <div className={"content-body search-list"}>
          <div id="popup-screen" onClick = {hidePopup}></div>
          <div id="popup-modal"></div>
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