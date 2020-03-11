import React from 'react';
import './App.css';
import parseContent from './parseContent.js';

function Races({ match }) {
  if (match && match.params && match.params.r) {
    let race = match.params.r;
    let content
    try {
      let raceJSON = require(`./races/${race}.js`).default;
      content = parseRace(raceJSON);
    }
    catch(e) {
      content = <div className="content-body">
                  The {race} race doesn't exist!
                </div>
    }
    return (
      <div className="content">
        <div className="content-head">
          <h1>{race.toUpperCase()}</h1>
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
        {/* <b>Description: </b>{raceJSON.description}
        <br/><br/>
        <b>Appearance: </b>
        {raceJSON.appearance}
        <br/><br/>
        <b>Base Stats:</b>
        {stats}
        <br/><br/>
        <b>Racial Features:</b>
        {racials} */}
        <h3>Description: </h3>
        {desc}
        <h3>Appearance: </h3>
        {appear}
        <h3>Base Stats:</h3>
        {stats}
        <h3>Racial Features:</h3>
        {racials}

      </div>
    );
}

export default Races;