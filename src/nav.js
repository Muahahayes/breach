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
      <li><Link style={navStyle} to="/pages/creation">Character Creation</Link></li>
      <li><Link style={navStyle} to="/rules" id="rule-link">Rules</Link> <span className="btn" id="rule-btn">▼</span></li>
      <li id="rule-list" className="list" style={hidden}>
        <ul>
          <li><Link style={navStyle} to="/rules/leveling">XP and Leveling</Link></li>
          <li><Link style={navStyle} to="/rules/stats">Stats</Link></li>
          <li><Link style={navStyle} to="/rules/skills">Skills</Link></li>   
          <li><Link style={navStyle} to="/rules/combat">Combat</Link></li>
          <li><Link style={navStyle} to="/rules/socializing">Socializing</Link></li>
          <li><Link style={navStyle} to="/rules/quirks">Quirks</Link></li>
          <li><Link style={navStyle} to="/rules/exploration">Exploration</Link></li>
        </ul>
      </li>       
      <li><Link style={navStyle} to="/races" id="race-link">Races</Link> <span className="btn" id="race-btn">▼</span></li>
      <li id="race-list" className="list" style={hidden}> 
        <ul>
        <li><Link style={navStyle} to="/races/human">Human</Link></li>
        <li><Link style={navStyle} to="/races/sylvan">Sylvan</Link></li>
        <li><Link style={navStyle} to="/races/darkin">Darkin</Link></li>
        <li><Link style={navStyle} to="/races/aeth">Aeth</Link></li>
        </ul>
      </li>
      <li><Link style={navStyle} to="/sources" id="source-link">Sources</Link> <span className="btn" id="source-btn">▼</span></li>
      <li id="source-list" className="list" style={hidden}>
        <ul>
        <li><Link style={navStyle} to="/sources/psychic">Psychic</Link></li>
        <li><Link style={navStyle} to="/sources/mutation">Mutation</Link></li>
        </ul>
      </li>
      <li><Link style={navStyle} to="/gifts" id="gift-link">Gifts</Link> <span className="btn" id="gift-btn">▼</span></li>
      <li id="gift-list" className="list" style={hidden}>
        <ul>
        <li><Link style={navStyle} to="/sources/psychic/gifts">Psychic</Link></li>
        <li><Link style={navStyle} to="/sources/mutation/gifts">Mutation</Link></li>
        </ul>
      </li>
      <li><Link style={navStyle} to="/lore" id="lore-link">Lore</Link> <span className="btn" id="lore-btn">▼</span></li>
      <li id="lore-list" className="list" style={hidden}>
        <ul>
        <li><Link style={navStyle} to="/lore/world">The World</Link></li>
        </ul>
      </li>
    </ul>
  );
}

export default Nav;
