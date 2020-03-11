import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
  const navStyle = {
    color: 'white'
  };
  const hidden = {
    display: 'none'
  };

  return (
    <ul className ="nav-items">
      <li><h3 className ="nav-top">Pages</h3><br/></li>
      <li><Link style={navStyle} to="/">Home</Link></li> {/* Replace with a Logo */}
      <li><Link style={navStyle} to="/pages/rpg">What's a RPG</Link></li>
      <li><Link style={navStyle} to="/pages/new">What's New</Link></li>
      <li><Link style={navStyle} to="/pages/stats">Stats</Link></li>
      <li><Link style={navStyle} to="/pages/skills">Skills</Link></li>
      <li><Link style={navStyle} to="/pages/leveling">XP and Leveling</Link></li>
      <li><Link style={navStyle} to="/races" id="race-link">Races</Link> <span className="btn" id="race-btn">▼</span></li>
      <li id="race-list" style={hidden}> 
        <ul>
        <li><Link style={navStyle} to="/races/human">Human</Link></li>
        <li><Link style={navStyle} to="/races/sylvan">Sylvan</Link></li>
        <li><Link style={navStyle} to="/races/darkin">Darkin</Link></li>
        <li><Link style={navStyle} to="/races/aeth">Aeth</Link></li>
        </ul>
      </li>
      <li><Link style={navStyle} to="/sources" id="source-link">Sources</Link> <span className="btn" id="source-btn">▼</span></li>
      <li id="source-list" style={hidden}>
        <ul>
          
        </ul>
      </li>
    </ul>
  );
}

export default Nav;
