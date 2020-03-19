import React from 'react';
import parseContent from './parseContent';
import { Link } from 'react-router-dom'

function renderGift(gift, source) {
  let description = [];
  let attributes = [];
  parseContent(gift.description, description);
  parseContent(gift.attributes, attributes);
  if (!source) { // render the full gift
    console.log(gift)
    let proficiencies = [];
    for (let level in gift.proficiencies) {
      if (gift.proficiencies[level].length > 0) {
        let els = [];
        parseContent(gift.proficiencies[level], els);
        proficiencies.push(<h3>[{Number(level)+1} G]</h3>)
        proficiencies.push(els);
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
        <h2><Link to={`/gifts/${source}/${giftName}`}>{gift.name}</Link></h2>
        <span><b className="attributes">{gift.attributes}</b></span>
        <br/>
        {description}
      </div>
    );
  }
}

export default renderGift;