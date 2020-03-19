import React from 'react';
import './App.css';
import parseContent from './parseContent.js';

function Sources({ match }) {
  if (match && match.params && match.params.s) {
    let source = match.params.s;
    let content;
    try {
      let sourceJSON = require(`./sources/${source}.js`).default;
      content = parseSource(sourceJSON);
    }
    catch(e) {
      content = <div className="content-body">
                  The {source} source doesn't exist!
                </div>
    }
    return (
      <div className="content">
        <div className="content-head">
          <h1>{source.toUpperCase()}</h1>
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
    parseContent(sourceJSON.description, desc);
    parseContent(sourceJSON.resource, resource);
    for (let level in sourceJSON.proficiencies) {
      if (sourceJSON.proficiencies[level].length > 0) {
        let els = [];
        parseContent(sourceJSON.proficiencies[level], els);
        proficiencies.push(<h3 style={{marginTop:0}}>[{Number(level)+1} G]</h3>)
        proficiencies.push(els);
        if (sourceJSON.proficiencies.length > Number(level)+1) proficiencies.push(<br/>)
      }
    }

    // Format for displaying the source's information
    return (
      <div className="content-body">
        <h3>Description: </h3>
        {desc}
        <h3>Resource: </h3>
        {resource}
        {(sourceJSON.proficiencies.length > 0)?<h3>Proficiencies: </h3>:null}
        {proficiencies}
      </div>
    );
}

export default Sources;