import React from 'react';
import { Link } from 'react-router-dom';
import parseContent from './parseContent';

function renderTechnique(tech, mini) {
  let description = [];
  parseContent(tech.description, description);
  if (!mini) { // render full equipment
    return (
      <div className="gift">
        <h4>Requires <b>{tech.skill}</b> {tech.requirement}</h4>
        {description}
      </div>
    );
  }
  else { // render minimized version
    let techName = tech.name.toLowerCase().split(' ').join('_');
    return (
      <div className="gift">
        <h2><Link to={`/techniques/${techName}`}>{tech.name}</Link></h2>
        <span><b className="attributes">{tech.skill}</b><b>: {tech.requirement}</b></span>
        <br/>
        {description}
      </div>
    );
  }
}

export default renderTechnique;