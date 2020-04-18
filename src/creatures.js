import React from 'react';
import { Link } from 'react-router-dom';
import renderCreature from './renderCreature';

function Creatures({ match }) {
  if (match && match.params && match.params.c && match.params.t) { // individual creature
    let creatureName = match.params.c;
    creatureName = creatureName.split('_').join(' ');
    let creature;
    let cType;
    try {
      cType = require(`./creatures/${match.params.t}`).default.creatures;
    }
    catch (e) {
      return (
        <div className="content">
        <div className="content-head">
          <h1>{creatureName}</h1>
        </div>
        <div className="content-body">
          No creature found for this page!
        </div>  
      </div>
      );
    }
    for (let level in cType) {
      for (let c of cType[level]) {
        if (c.name.toLowerCase() === creatureName.toLowerCase()) {
          creature = c;
          continue;
        }
      }
      if (creature) continue;
    }
    if (!creature) {
      return (
        <div className="content">
        <div className="content-head">
          <h1>{creatureName}</h1>
        </div>
        <div className="content-body">
          No creature found for this page!
        </div>  
      </div>
      );
    }
    else {
      return (        
        <div className="content">
          <div className="content-head">
            <h1>[{creature.level} G] {creature.name}</h1>
          </div>
          <div className="content-body">
            Return to <Link to={`/world/creatures/${match.params.t}`}>{match.params.t}</Link> creatures.
            <br/>
            {renderCreature(creature)}
          </div>  
        </div>
      );    
    }
  }
  else if (match && match.params && match.params.t) { // source, render all creatures
    let cType = require(`./creatures/${match.params.t}`).default;
    let creatures = cType.creatures;
    let content = [];
    for (let level in creatures) {
      let levelContent = [];
      if (level > 0) levelContent.push(<hr className="searchHR"/>);
      levelContent.push(<h2>[{Number(level)+1} G]</h2>);
      for (let creature of creatures[level]) {
        if (creature.name) {
          levelContent.push(<div className={`searchEntry`} id={creature.name}>{renderCreature(creature, match.params.t)}</div>);
        }
      }
      let idStr = `level${Number(level)+1}`
      let levelBlock = React.createElement("div", {className: "levelBlock", id: idStr}, levelContent);
      content.push(levelBlock);
    }

    // TODO, refactor filtering and searching to hide everything, go through the original file, and re-render only things that match
    function filter(otherCalled) {
      let bar = document.getElementById('levelSearch');
      let str = bar.value;
      let otherBar = document.getElementById('creaturesearch');
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
      let bar = document.getElementById('creaturesearch');
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
      let otherBar = document.getElementById('creaturesearch');
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
      else { // only show creatures that have attributes that include str
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
                  <label className="searchLabel" htmlFor="creaturesearch">Search Creatures:</label>            
                  <input className ="searchBar" type="search" id="creaturesearch" name="creaturesearch" onChange={search.bind(null, false)} placeholder="Creature" tabIndex={2} title="Searches for a creature name starting with your text, add a * to the front to search for creatures that include your text within their name. (eg. *oc finds Shock)"></input>      
                  <br/>
                  <br/>
                  <label className="searchLabel" htmlFor="attributeSearch">Search Attributes:</label>            
                  <input className ="searchBar" type="search" id="attributeSearch" name="attributeSearch" onChange={attributes} placeholder="[Attribute]" tabIndex={2} title="Searches for creatures with any attribute that include your text within the attribute name. Add a + between attributes to narrow the search to match multiple attributes. (eg. Ranged+Action)"></input>        
                </p> 
                  
    }
    else {
      filterEl =  
                <span className="searchSpan">
                  <span className="searchBox">
                    <label className="searchLabel" htmlFor="levelSearch">Filter Level:</label>
                    <input className ="searchBar" type="search" id="levelSearch" name="levelSearch" onChange={filter} placeholder="G#" tabIndex={1}></input>
                  </span>
                  <label className="searchLabel" htmlFor="creaturesearch">Search Creatures:</label>            
                  <input className ="searchBar" type="search" id="creaturesearch" name="creaturesearch" onChange={search} placeholder="Creature" tabIndex={2} title="Searches for a creature name starting with your text, add a * to the front to search for creatures that include your text within their name. (eg. *oc finds Shock)"></input>  
                  <label className="searchLabel" htmlFor="attributeSearch">Search Attributes:</label>            
                  <input className ="searchBar" type="search" id="attributeSearch" name="attributeSearch" onChange={attributes} placeholder="[Attribute]" tabIndex={2} title="Searches for creatures with any attribute that include your text within the attribute name. Add a + between attributes to narrow the search to match multiple attributes. (eg. Ranged+Action)"></input>            
                </span>
    }
    return (
      <div className="content">
        <div className="content-head">
          <h1>{cType.name} Creatures</h1>
        </div>
        <div className="content-body">
          <div className="description">
            {(cType.image)?<img src={cType.image} alt={cType.name+" Profile Picture"} className="descPic"/>:null}
            {cType.description}
          </div>
          <div className="search-list">
            <br/>
            {filterEl}
            <br/>
            {content}
          </div>
        </div>  
      </div>
    ); 
  }
  else if (match && match.params && match.params.b) {
    let content, name
    try {
      let pageJSON = require(`./world/creatures.js`).default;
      name = pageJSON.name;
      // content = parsePage(pageJSON);
      content = pageJSON.content;
    }
    catch(e) {
      name = 'Creatures'
      content = <p>
                  The {name} page doesn't exist!
                </p>
    }
    return (
      <div className="content">
        <div className="content-head">
          <h1>{name}</h1>
        </div>
        <div className="content-body">
          {content}
        </div>
      </div>
    );
  }
  else {
    return (
      <div className="content">
        <div className="content-head">
          <h1>Creatures</h1>
        </div>
        <div className="content-body">
          No creatures found for this page!!
        </div>  
      </div>
    ); 
  }
}

export default Creatures;