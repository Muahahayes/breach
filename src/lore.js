import React from 'react';

function Lore({ match }) {
  if (match && match.params && match.params.p) {
    let page, content, name
    page = match.params.p
    try {
      let pageJSON = require(`./lore/${page}.js`).default;
      name = pageJSON.name;
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

export default Lore;