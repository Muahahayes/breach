import React from 'react';
import './App.css';

function InfoPage({ match }) {
  if (match && match.params && match.params.p) {
    let page = match.params.p;
    let content, name
    try {
      let pageJSON = require(`./pages/${page}.js`).default;
      name = pageJSON.name;
      content = parsePage(pageJSON);
    }
    catch(e) {
      name = page.toUpperCase();
      content = <div className="content-body">
                  The {page} page doesn't exist!
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
          <h1>EMPTY PAGE</h1>
        </div>
        <div className="content-body">
          No content found for this page!
        </div>  
      </div>
    ); 
  }
}

function parsePage(pageJSON) {
    // List of elements to be displayed
    let elements = [];
    for (let row of pageJSON.content) {
      if (Array.isArray(row)) {
        let el = [];
        for (let line of row) {
          el.push(<li>{line}</li>)
        }
        elements.push(React.createElement('ul', {}, el));
        elements.push(<br/>);
      }
      else {
        let lines = row.split('\n');
        for (let line of lines) {
          let sublines = line.split('<br/>');
          for (let subline of sublines) {
            if (subline !== '') {
              let str = subline.split(':');
              let el = (str.length > 1)?<span><b>{`${str[0]}:`}</b>{str[1]}</span>:<span>{subline}</span>;
              elements.push(el);
            }
            elements.push(<br/>);
          }
        }
        
      }
    }
    // Format for displaying the page's information
    return (
      <div className="content-body">
        {elements}
      </div>
    );
}

export default InfoPage;