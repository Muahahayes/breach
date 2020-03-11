import React from 'react';
import './App.css';

//TODO: refactor this as a dev tool for turning strings into React elements to save time
// have it output as a string, not as a react element though, so I can easily copy it into a .js file
function parseContent(row, elements) {
  if (Array.isArray(row)) { // its an array, treat as a ul
    let el = [];
    for (let line of row) {
      let sublines = [];
      parseContent(line, sublines);
      el.push(<li>{sublines}</li>)
    }
    elements.push(React.createElement('ul', {}, el));
    elements.push(<br/>);
  }
  else { // its a string, parse for \n and : bolding
    let lines = row.split('\n');
    for (let line of lines) {
      if (line !== '') {
        let str = line.split(':');
        let el = (str.length > 1)?<span><b>{`${str[0]}:`}</b>{str[1]}</span>:<span>{line}</span>;
        elements.push(el);
      }          
      elements.push(<br/>);
    }        
  }
}

export default parseContent;