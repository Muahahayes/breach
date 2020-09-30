import React from 'react';
import ReactDOM from 'react-dom';
import parseContent from './parseContent';
import { Link } from 'react-router-dom'

function renderGift(gift, source) {
  let description = [];
  let attributes = [];
  parseContent(gift.description, description);
  parseContent(gift.attributes, attributes);
  if (!source) { // render the full gift
    let proficiencies = [];
    let tiers = ['Common','Epic','Legendary']
    for (let level in gift.proficiencies) {
      if (gift.proficiencies[level].length > 0) {
        let els = [];
        parseContent(gift.proficiencies[level], els);
        proficiencies.push(<h3>[{tiers[level]}]</h3>)
        proficiencies.push(els);
        proficiencies.push(<br/>);
      }
    }
    return (
      <div className="gift">
        <br/>
        <span><b>Attributes:</b> {gift.attributes}</span>
        <br/>
        {description}
        <br/>
        {(gift.proficiencies.length > 0)?<h3><b>Proficiencies:</b></h3>:null}
        {proficiencies}
      </div>
    );
  }
  else { // render a minimized version
    let giftName = gift.name.toLowerCase().split(' ').join('_');
    return (
      <div className="gift">
        {(window.matchMedia(' (max-width: 800px) ').matches) ? <h2><Link to={`/powers/${source}/${giftName}`}>{gift.name}</Link></h2> : <h2 className="popup-link" onClick = {showPopup.bind(null, gift.name, source)}>{gift.name}</h2>}
        <span><b className="attributes">{gift.attributes}</b></span>
        <br/>
        {description}
      </div>
    );
  }
}

function showPopup(giftName, sourceName) {
  let modal = document.getElementById('popup-modal');
  let screen = document.getElementById('popup-screen');
  console.log(sourceName);
  let source = require(`./sources/powers/${sourceName}`);
  let gift;
  for (let level in source.default) {
    for (let g of source.default[level]) {
      if (g.name.toLowerCase() === giftName.toLowerCase()) {
        gift = g;
        continue;
      }
    }
    if (gift) continue;
  }
  if (!gift) {
    modal.innerHTML = <div className="content">
      <div className="content-head">
        <h1>{giftName}</h1>
      </div>
      <div className="content-body">
        No gift found for this page!
      </div>  
    </div>
  }
  else {
    let content = <div id="modal-body">
      <div style={{display:'flex', justifyContent:'space-around'}}><span style={{fontSize:'0.8rem'}}><a style={{fontSize:'2.5rem'}} href={`/powers/${sourceName}/${giftName.split(' ').join('_')}`}>{giftName}</a> (link to page)</span></div>
      {renderGift(gift)}
    </div>
    ReactDOM.render(content, modal)
  }
  screen.style.display = 'block';
  modal.style.display = 'block';
  // window.scroll(0,0);
}


export default renderGift;