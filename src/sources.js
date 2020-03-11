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
    parseContent(sourceJSON.description, desc);
    parseContent(sourceJSON.resource, resource);

    // Format for displaying the source's information
    return (
      <div className="content-body">
        <h3>Description: </h3>
        {desc}
        <h3>Resource: </h3>
        {resource}
      </div>
    );
}

export default Sources;