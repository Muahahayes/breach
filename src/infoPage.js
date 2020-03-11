import React from 'react';
import './App.css';
// import parseContent from './parseContent.js';

function InfoPage({ match }) {
  if (match && match.params && match.params.p) {
    let page = match.params.p;
    let content, name
    try {
      let pageJSON = require(`./pages/${page}.js`).default;
      name = pageJSON.name;
      // content = parsePage(pageJSON);
      content = pageJSON.content;
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
        <div className="content-body">
          {content}
        </div>
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

// function parsePage(pageJSON) {
//   // TODO: ok, making .js files that export React elements is probably the best way to go, give up on this parsing stuff and just do that
//     let elements = [];
//     for (let row of pageJSON.content) {
//       parseContent(row, elements);
//     }
//     // Format for displaying the page's information
//     return (
//       <div className="content-body">
//         {elements}
//       </div>
//     );
// }

export default InfoPage;