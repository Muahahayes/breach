import React, { Fragment } from 'react';
import parseContent from './parseContent';
import { Link } from 'react-router-dom';

function renderCreature(creature, cType) {
  if (!cType) { // render full creature on its own page
    let description = [];
    let actions = [];
    let skills = [];
    let row = [];
    let stats = creature.stats;
    parseContent(creature.description, description);
    parseContent(creature.actions, actions);
    for (let i=0; i<creature.skills.length; i+=4) {
    row.push(renderSkill(creature.skills[i]));
    if (creature.skills[i+1]) {
      row.push(renderSkill(creature.skills[i+1]));
      if (creature.skills[i+2]) {
        row.push(renderSkill(creature.skills[i+2]));
        if (creature.skills[i+3]) {
          row.push(renderSkill(creature.skills[i+3]));
        }
      }
    }
    skills.push(<tr>{row}</tr>);
    row = [];
    }
    return (
        <Fragment>
        <div className="description">
        {(creature.image)?<img src={creature.image} alt={creature.name+" Profile Picture"} className="descPic"/>:null}
        <h3>Description:</h3>
        {description}
        </div><hr/>
        <table className="blankTable">
          <caption><h3>Stats</h3></caption>
          <tbody>
            <tr><td><b>Life:</b> {stats.life}</td><td><b>Survival:</b> {stats.survival}</td><td><b>Avoidance:</b> {stats.avoidance}</td><td><b>Speed:</b> {stats.speed}</td></tr>
            <tr><td><b>Strength:</b> {stats.strength}</td><td><b>Agility:</b> {stats.agility}</td><td><b>Stamina:</b> {stats.stamina}</td><td><b>Will:</b> {stats.will}</td></tr>
          </tbody>
        </table>
        <hr/>
        <table className="blankTable">
          <caption><h3>Combat Skills</h3></caption>
          <tbody>
          {skills}
          </tbody>
        </table>
        <hr/>
        <h3>Actions:</h3>
        {actions}
        </Fragment>
    );
  }
  else { // render a minimized version
    let description = [];
    parseContent(creature.description, description);
    return (
      <div className="creature">
        <h2><Link to={`/world/creatures/${cType}/${creature.name.split(' ').join('_')}`}>{creature.name}</Link></h2>
        <span><b className="attributes">{creature.attributes}</b></span>
        <br/>
        {description}
      </div>
    );
  }
}

function renderSkill(skill) {
  let subs = skill.split(':');
  let [name, ...str] = subs;
  str = str.join(':');
  
  return (
    <td>
      <b>{name}:</b> {str}
    </td>
  );
}

export default renderCreature;