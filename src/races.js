import React from 'react';
import './App.css';
import parseContent from './parseContent.js';

function Races({ match }) {
  if (match && match.params && match.params.r) {
    let race = match.params.r;
    let content;
    let name;
    try {
      let raceJSON = require(`./races/${race}.js`).default;
      content = parseRace(raceJSON);
      name = raceJSON.name;
    }
    catch(e) {
      content = <div className="content-body">
                  The {race} race doesn't exist!
                </div>
    }
    return (
      <div className="content">
        <div className="content-head">
          <h1>{name}</h1>
        </div>
        {content}
      </div>
    );
  }
  else {
    return (
      <div className="content">
        <div className="content-head">
          <h1>RACES</h1>
        </div>
        <div className="content-body">
          No race found for this page!
        </div>  
      </div>
    ); 
  }
}

function parseRace(raceJSON) {
    // make list of stats
    // let statList = [];
    // for (let stat in raceJSON.stats) {
    //   let el = <li key={'stat'+stat}>{raceJSON.stats[stat]}</li>;
    //   statList.push(el);
    // }
    // let stats = React.createElement('ul', {}, statList);

    // // make list of racial features
    // let racialList = [];
    // for (let racial in raceJSON.racials) {
    //   let el = <li key={'racial'+racial}>{raceJSON.racials[racial]}</li>;
    //   racialList.push(el)
    // }
    // let racials = React.createElement('ul', {}, racialList);
  
    let desc = [];
    let appear = [];
    let stats = [];
    let racials = [];
    parseContent(raceJSON.description, desc);
    parseContent(raceJSON.appearance, appear);
    parseContent(raceJSON.stats, stats);
    parseContent(raceJSON.racials, racials);

    // Format for displaying the race's information
    return (
      <div className="content-body">
        <div className="description">
        {(raceJSON.image)?<img src={raceJSON.image} alt={raceJSON.name+" Profile Picture"} className="descPic"/>:null}
        <h3>Description:</h3>
        {desc}        
        <h3>Appearance:</h3>
        {appear}
        </div><hr/>
        <h3>Base Stats:</h3>
        {stats}
        <hr/>
        <h3>Racial Features:</h3>
        {racials}
        {(raceJSON.sub)?parseSubrace(raceJSON):null}
      </div>
    );
}

function parseSubrace(raceJSON) {
  let subs = raceJSON.sub
  let divs = [];
  for (let i in subs) {
    let sub = subs[i];
    let desc = [];
    let racials = [];
    parseContent(sub.description, desc)
    parseContent(sub.racials, racials)
    let div = <div>
      {(i>0)?<hr/>:null}
  <h2>{sub.name}{(raceJSON.subMarker)?raceJSON.subMarker:" "}{raceJSON.name}</h2>
      <h3>Description:</h3>
      {desc}
      <h3>Subrace Features:</h3>
      {racials}
    </div>
    divs.push(div)
  }
  return(
    <div>
      <hr/>
      <h2>Subraces:</h2>
      {divs}
    </div>
  )
}

export default Races;