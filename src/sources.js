import React from 'react';
import './App.css';
import parseContent from './parseContent.js';

function Sources({ match }) {
  if (match && match.params && match.params.s) {
    let source = match.params.s;
    let content, sourceName, slogan;
    try {
      let sourceJSON = require(`./sources/${source}.js`).default;
      content = parseSource(sourceJSON);
      sourceName = sourceJSON.name;
      slogan = sourceJSON.slogan;
    }
    catch(e) {
      content = <div className="content-body">
                  The {source} source doesn't exist!
                </div>
    }
    return (
      <div className="content">
        <div className="content-head">
          <h1>{sourceName}</h1>
          <h3>{`(${slogan})`}</h3>
        </div>
        {content}
      </div>
    );
  }
  else {
    return (
      <div className="content">
        <div className="content-head">
          <h1>SOURCES</h1>
        </div>
        <div className="content-body">
          No source found for this page!
        </div>  
      </div>
    ); 
  }
}

function parseSource(sourceJSON) {
    let desc = [];
    let resource = [];
    let proficiencies = [];
    let lesserGifts = [];
    let capstones = [];
    let paths = [];
    parseContent(sourceJSON.description, desc);
    parseContent(sourceJSON.resource, resource);
    for (let level in sourceJSON.proficiencies) {
      if (sourceJSON.proficiencies[level].length > 0) {
        let els = [];
        parseContent(sourceJSON.proficiencies[level], els);
        proficiencies.push(<h3 style={{marginTop:0}}>[LVL {Number(level)+1}]</h3>);
        proficiencies.push(els);
        if (sourceJSON.proficiencies.length > Number(level)+1) proficiencies.push(<br/>);
      }
    }
    for (let level in sourceJSON.lesser) {
      if (sourceJSON.lesser[level].length > 0) {
        let els = [];
        parseContent(sourceJSON.lesser[level], els);
        lesserGifts.push(<h3 style={{marginTop:0}}>[LVL {Number(level)+1}]</h3>);
        lesserGifts.push(els);
        if (sourceJSON.lesser.length > Number(level)+1) lesserGifts.push(<br/>);
      }
    }
    if(sourceJSON.capstones) parseContent(sourceJSON.capstones, capstones)
    if(sourceJSON.path) parseContent(sourceJSON.path, paths)

    // Format for displaying the source's information
    return (
      <div className="content-body">
        <h3>Description: </h3>
        {desc}
        <h3>Resource: </h3>
        {resource}
        <hr/>
        {(sourceJSON.proficiencies.length > 0)?<h3>Proficiencies: </h3>:null}
        {proficiencies}
        <hr/>
        {(sourceJSON.lesser.length > 0)?<h3>Lesser Powers: </h3>:null}
        {lesserGifts}
        <hr/>
        {(sourceJSON.capstones.length > 0)?<h3>LVL 8 Capstones: </h3>:null}
        {(sourceJSON.capstones)?capstones:null}
        {(sourceJSON.path)?<h3>Paths:</h3>:null}
        {(sourceJSON.path)?paths:null}
      </div>
    );
}

export default Sources;