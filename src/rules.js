import React from 'react';

function InfoPage({ match }) {
  if (match && match.params && match.params.r) {
    let page = match.params.r;
    let content, name
    try {
      let pageJSON = require(`./rules/${page}.js`).default;
      name = pageJSON.name;
      // content = parsePage(pageJSON);
      content = pageJSON.content;
    }
    catch(e) {
      name = page.toUpperCase();
      content = <p>
                  The {page} page doesn't exist!
                </p>
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

export default InfoPage;