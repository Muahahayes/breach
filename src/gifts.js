import React from 'react';
import { Link } from 'react-router-dom';
import parseContent from './parseContent.js';
import renderGift from './renderGift';

function Gifts({ match }) {
  if (match && match.params && match.params.g) { // individual gift
    let giftName = match.params.g;
    giftName = giftName.split('_').join(' ');
    let source = require(`./sources/gifts/${match.params.s}`);
    let gift;
    for (let level of source.default) {
      for (let g of level) {
        if (g.name.toLowerCase() === giftName.toLowerCase()) {
          gift = g;
          continue;
        }
      }
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
            <h1>{gift.name}</h1>
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
    console.log(gifts)
    let content = [];

    for (let level in gifts) {
      if (level > 0) content.push(<hr/>);
      let levelContent = [];
      for (let gift of gifts[level]) {
        console.log(gift)
        levelContent.push(<div className="giftEntry">{renderGift(gift, match.params.s)}</div>);
      }
      content.push(<h2>[{Number(level)+1} G]</h2>);
      content.push(levelContent);
    }

    return (
      <div className="content">
        <div className="content-head">
          <h1>{match.params.s.toUpperCase()}</h1>
        </div>
        <div className={"content-body gift-list"}>
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