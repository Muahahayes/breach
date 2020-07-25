import React from 'react';
import { Link } from 'react-router-dom';
import renderTechnique from './renderTechniques';
import techniques from './techniques/techniques';

function Techniques({ match }) {
  if (match && match.params && match.params.t) { // individual technique
    let techName = match.params.t;
    techName = techName.split('_').join(' ');
    let techniques = require('./techniques/techniques').default;
    let technique = techniques[techName.toLowerCase()];
    if (!technique) {
      return (
        <div className="content">
          <div className="content-head">
            <h1>{techName}</h1>
          </div>
          <div className="content-body">
            No technique found for this page!
          </div>
        </div>
      )
    }
    else {
      return (
        <div className="content">
          <div className="content-head">
            <h1>{technique.name}</h1>
          </div>
          <div className="content-body">
            Return to <Link to={`/techniques`}>Techniques</Link>
            <br/><br/>
            {renderTechnique(technique)}
          </div>  
        </div>
      )
    }
  }
  else { // list of techniques
    let techniques = require('./techniques/techniques').default;
    let tList = [];
    let content = [];
    
    for (let t in techniques) {
      tList.push(techniques[t]);
    }
    tList.sort((a,b)=>a.requirement - b.requirement); // sort list by skill requirements
    let tier = 0;
    let tierContent = [];

    for (let t of tList) {
      if (t.requirement > tier*5) { // start new tier
        if (tier > 0) {
          content.push(React.createElement("div", {className: "levelBlock", id: `level${tier}`}, tierContent));
          tierContent = [];
        }
        tier++;
        if (tier > 1) tierContent.push(<hr className="searchHR"/>)
        tierContent.push(<h2>[Skill {tier*5}]</h2>);
        tierContent.push(<div className={`searchEntry ${t.skill}`} id={t.name}>{renderTechnique(t, true)}</div>);
      }
      else {
        tierContent.push(<div className={`searchEntry ${t.skill}`} id={t.name}>{renderTechnique(t,true)}</div>);
      }
    }
    content.push(React.createElement("div", {className: "levelBlock", id: `level${tier}`}, tierContent));
    
    function search(otherCalled) {
      let bar = document.getElementById('giftSearch');
      let str = bar.value;
      let otherBar = document.getElementById('attributeSearch');
      if (otherBar.value !== '' && otherCalled !== 'yes') {
        otherBar.value = '';
        skills('yes');
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

    function skills(otherCalled) {
      let bar = document.getElementById('attributeSearch');
      let str = bar.value;
      let otherBar = document.getElementById('giftSearch');
      if (otherBar.value !== '' && otherCalled !== 'yes') {
        otherBar.value = '';
        search('yes');
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
              if (child.getElementsByClassName('attributes')[0].textContent.toLowerCase().includes(str.toLowerCase())) { //TODO: add split on +
                child.style.display = 'block';
                found = true;
              }
              else if (str !== '') {
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
        <label className="searchLabel" htmlFor="giftSearch">Search Techniques:</label>            
        <input className ="searchBar" type="search" id="giftSearch" name="giftSearch" onChange={search.bind(null, false)} placeholder="Technique" tabIndex={2} title="Searches for a Technique name starting with your text, add a * to the front to search for Techniques that include your text within their name. (eg. *age finds Triage)"></input>      
        <br/>
        <br/>
        <label className="searchLabel" htmlFor="attributeSearch">Search Skills:</label>            
        <input className ="searchBar" type="search" id="attributeSearch" name="attributeSearch" onChange={skills} placeholder="Skill" tabIndex={2} title="Searches for Techniques with any Skill that include your text within the Skill name. (eg. Medicine)"></input>        
      </p>
    }
    else {
      filterEl =  
      <span className="searchSpan">
        <label className="searchLabel" htmlFor="giftSearch">Search Techniques:</label>            
        <input className ="searchBar" type="search" id="giftSearch" name="giftSearch" onChange={search} placeholder="Technique" tabIndex={2} title="Searches for a Technique name starting with your text, add a * to the front to search for Techniques that include your text within their name. (eg. *age finds Triage)"></input>      
        <label className="searchLabel" htmlFor="attributeSearch">Search Skills:</label>            
        <input className ="searchBar" type="search" id="attributeSearch" name="attributeSearch" onChange={skills} placeholder="Skill" tabIndex={2} title="Searches for Techniques with any Skill that include your text within the Skill name. (eg. Medicine)"></input>        
      </span>
    }
    
    return (
      <div className="content">
        <div className="content-head">
          <h1>Techniques</h1>
        </div>
        <div className="content-body search-list">
          <div className="description">
          <p>Techniques are unique abilities and features which are learned through the story of a game. A player may learn a technique for their character through story events with NPCs which are capable of teaching the Technique, consult your GM with ideas for which Techniques you wish to learn and if they can include relevant story events into your game. The character must have a Skill value which meets the requirement of the Technique in order to learn it. A character is limited to learning a number of Techniques up to their level, however these Techniques are not learned when a character levels up and more than one Technique may be learned during a given level if they are still below their limit. Characters created above level 1 do not learn Techniques during the creation process and must still learn Techniques through story events.</p>
          </div>
          <div id="popup-screen" onClick = {hidePopup}></div>
          <div id="popup-modal"></div>
          {filterEl}
          <br/>
          <br/>
          {content}
        </div>
      </div>
    )
  }
}

export default Techniques;