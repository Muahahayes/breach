import React from 'react';
import './App.css';

function parseContent(row, elements) {
  if (Array.isArray(row)) { // its an array, treat as a ul
    let el = [];
    for (let line of row) {
      let sublines = [];
      parseContent(line, sublines);
      el.push(<li>{sublines}</li>)
    }
    elements.push(React.createElement('ul', {}, el));
  }
  else if (typeof row === 'string') { // its a string, parse for \n and : bolding
    let lines = row.split('\n');
    for (let line of lines) {
      if (line !== '') {
        let str = line.split(':');
        let remaining = str.slice(1).join(':')
        str[0] = (str[0] !== '\\')?`${str[0]}:`:'';
//eslint-disable-next-line
        let el = (str.length > 1)?<span><b>{`${str[0]}`}</b>{remaining}</span>:<span>{line}</span>;
        elements.push(el);
      }          
      elements.push(<br/>);
    }        
  }
  else {
    elements.push(row);
  }
}

export default parseContent;