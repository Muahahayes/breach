import React from 'react';

function InfoPage({ match }) {
  if (match && match.params && (match.params.p || match.params.w)) {
    let page = (match.params.p)?match.params.p:match.params.w;
    let content, name, folder;
    if (match.params.p) folder = 'pages';
    else if (match.params.w) folder = 'world';
    else if (match.params.g) folder = 'gm';
    try {
      let pageJSON = require(`./${folder}/${page}.js`).default;
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