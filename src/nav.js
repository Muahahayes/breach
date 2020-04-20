import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav({ match }) {
  const navStyle = {
    color: 'white'
  };
  const hidden = {
    display: 'none'
  };
  function toggle(group) {
    let list = document.getElementById(group+'-list');
    let btn = document.getElementById(group+'-btn');      
    if (list.style.display === 'none') {
      let allLists = document.getElementsByClassName('list');
      let allBtns = document.getElementsByClassName('listBtn');
      for (let l of allLists) {
        l.style.display = 'none';
      }
      for (let b of allBtns) {
        b.innerHTML = '▼';
      }
      list.style.display = 'block';
      btn.innerHTML = '▲';
    }
    else {
      list.style.display = 'none';
      btn.innerHTML = '▼';
    }
  }

  function show(group) {
    let list = document.getElementById(group+'-list');      
    if (list.style.display === 'none') {
      let btn = document.getElementById(group+'-btn');
      let allLists = document.getElementsByClassName('list');
      let allBtns = document.getElementsByClassName('listBtn');
      for (let l of allLists) {
        l.style.display = 'none';
      }
      for (let b of allBtns) {
        b.innerHTML = '▼';
      }
      list.style.display = 'block';
      btn.innerHTML = '▲';
    }
  }

  if (!match.params || (match.params.b !== 'world' && match.params.b !== 'gm')) { // default, Player's Guidebook
    return (
      <ul className ="nav-items">
        <li className ="nav-top"><h3><Link style={navStyle} to="/world">World</Link></h3></li>
        <li className ="nav-top"><h3><Link style={navStyle} to="/gm">GM</Link></h3></li>
        <li><Link style={navStyle} to="/">Home</Link></li> {/* Replace with a Logo */}
        <li><Link style={navStyle} to="/pages/rpg">What's an RPG</Link></li>
        <li><Link style={navStyle} to="/pages/new">What's New</Link></li>
        <li><Link style={navStyle} to="/pages/creation">Character Creation</Link></li>
        <li><Link style={navStyle} to="/rules" id="rule-link" onClick={show.bind(null,'rule')}>Rules</Link> <span className="listBtn" id="rule-btn" onClick={toggle.bind(null,'rule')}>▼</span></li>
        <li id="rule-list" className="list" style={hidden}>
          <ul>
            <li><Link style={navStyle} to="/rules/leveling">XP and Leveling</Link></li>
            <li><Link style={navStyle} to="/rules/stats">Stats</Link></li>
            <li><Link style={navStyle} to="/rules/skills">Skills</Link></li>   
            <li><Link style={navStyle} to="/rules/combat">Combat</Link></li>
            <li><Link style={navStyle} to="/rules/damage">Damage</Link></li>
            <li><Link style={navStyle} to="/rules/socializing">Socializing</Link></li>
            <li><Link style={navStyle} to="/rules/quirks">Quirks</Link></li>
            <li><Link style={navStyle} to="/rules/exploration">Exploration</Link></li>
          </ul>
        </li>       
        <li><Link style={navStyle} to="/races" id="race-link" onClick={show.bind(null,'race')}>Races</Link> <span className="listBtn" id="race-btn" onClick={toggle.bind(null,'race')}>▼</span></li>
        <li id="race-list" className="list" style={hidden}> 
          <ul>
          <li><Link style={navStyle} to="/races/human">Human</Link></li>
          <li><Link style={navStyle} to="/races/halfling">Halfling</Link></li>
          <li><Link style={navStyle} to="/races/alcyon">Alcyon</Link></li>
          <li><Link style={navStyle} to="/races/sylvan">Sylvan</Link></li>
          <li><Link style={navStyle} to="/races/darkin">Darkin</Link></li>
          <li><Link style={navStyle} to="/races/aeth">Aeth</Link></li>      
          <li><Link style={navStyle} to="/races/trollkin">Trollkin</Link></li>
          <li><Link style={navStyle} to="/races/pix">Pix</Link></li>
          <li><Link style={navStyle} to="/races/atal">Atal</Link></li>
          <li><Link style={navStyle} to="/races/kxi">Kx'i</Link></li>        
          </ul>
        </li>
        <li><Link style={navStyle} to="/sources" id="source-link" onClick={show.bind(null,'source')}>Sources</Link> <span className="listBtn" id="source-btn" onClick={toggle.bind(null,'source')}>▼</span></li>
        <li id="source-list" className="list" style={hidden}>
          <ul>
          <li><Link style={navStyle} to="/sources/psychic">Psychic</Link></li>
          <li><Link style={navStyle} to="/sources/cosmic">Cosmic</Link></li>
          <li><Link style={navStyle} to="/sources/runic">Runic Arts</Link></li>
          <li><Link style={navStyle} to="/sources/bloodline">Ancient Bloodline</Link></li>
          <li><Link style={navStyle} to="/sources/mutation">Mutation</Link></li>
          </ul>
        </li>
        <li><Link style={navStyle} to="/gifts" id="gift-link" onClick={show.bind(null,'gift')}>Gifts</Link> <span className="listBtn" id="gift-btn" onClick={toggle.bind(null,'gift')}>▼</span></li>
        <li id="gift-list" className="list" style={hidden}>
          <ul>
          <li><Link style={navStyle} to="/sources/psychic/gifts">Psychic</Link></li>
          <li><Link style={navStyle} to="/sources/cosmic/gifts">Cosmic</Link></li>
          <li><Link style={navStyle} to="/sources/runic/gifts">Runic Arts</Link></li>
          <li><Link style={navStyle} to="/sources/bloodline/gifts">Ancient Bloodline</Link></li>
          <li><Link style={navStyle} to="/sources/mutation/gifts">Mutation</Link></li>
          </ul>
        </li>
        <li><Link style={navStyle} to="/equipment" id="equipment-link" onClick={show.bind(null,'equipment')}>Equipment</Link> <span className="listBtn" id="equipment-btn" onClick={toggle.bind(null,'equipment')}>▼</span></li>
        <li id="equipment-list" className="list" style={hidden}>
          <ul>
          <li><Link style={navStyle} to="/equipment/melee">Melee Weapons</Link></li>
          <li><Link style={navStyle} to="/equipment/ranged">Ranged Weapons</Link></li>
          <li><Link style={navStyle} to="/equipment/deflector">Deflectors</Link></li>
          <li><Link style={navStyle} to="/equipment/plating">Projection Plating</Link></li>
          <li><Link style={navStyle} to="/equipment/aegis">Aegis</Link></li>
          </ul>
        </li>
      </ul>
    );
  }
  else if (match.params.b === 'world') { // World book, lore/beastiary/world/ect
    return (
    <ul className="nav-items">
      <li className ="nav-top"><h3><Link style={navStyle} to="/">Players</Link></h3></li>
      <li className ="nav-top"><h3><Link style={navStyle} to="/gm">GM</Link></h3></li>
      <li><Link style={navStyle} to="/world/lore" id="lore-link" onClick={show.bind(null,'lore')}>Lore</Link> <span className="listBtn" id="lore-btn" onClick={toggle.bind(null,'lore')}>▼</span></li>
      <li id="lore-list" className="list" style={hidden}>
        <ul>
        <li><Link style={navStyle} to="/world/lore/world">The World</Link></li>
        </ul>
      </li>
      <li><Link style={navStyle} to="/world/creatures" id="creatures-link" onClick={show.bind(null,'creatures')}>Creatures</Link> <span className="listBtn" id="creatures-btn" onClick={toggle.bind(null,'creatures')}>▼</span></li>
      <li id="creatures-list" className="list" style={hidden}>
        <ul>
        <li><Link style={navStyle} to="/world/creatures/humanoid">Humanoids</Link></li>
        </ul>
      </li>
    </ul>
    );
  }
  else { // Game Master's Guidebook
  return (
    <ul className="nav-items">
      <li className ="nav-top"><h3><Link style={navStyle} to="/">Players</Link></h3></li>
      <li className ="nav-top"><h3><Link style={navStyle} to="/world">World</Link></h3></li>      
    </ul>
  )
  }
}

export default Nav;
