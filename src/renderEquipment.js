import React from 'react';
import { Link } from 'react-router-dom';
import parseContent from './parseContent';

function renderEquipment(equipment, eType) {
  if (!eType) { // render full equipment
    let description = [];
    parseContent(equipment.description, description);

    let statRow = [];
    let keyRow = [];
    let eKeys = Object.keys(equipment);
    for (let stat of eKeys) {
      if (stat !== 'name' && stat !== 'description') {
        let statName = stat[0].toUpperCase();
        statName += stat.slice(1);
        keyRow.push(<td>{statName}</td>);
        statRow.push(<td>{equipment[stat]}</td>);
      }
    }

    return (
      <div className="equipment">
        <br/>
        {description}
        <table style={{justifySelf:'left', marginLeft:'2%', marginRight:'2%'}}>
          <caption><h3>Stats</h3></caption>
          <tbody>
            <tr>{keyRow}</tr>
            <tr>{statRow}</tr>
          </tbody>
        </table>
      </div>
    );
  }
  else { // render minimized version
    let statRow = [];
    for (let stat of eType.stats) {
      statRow.push(<td>{equipment[stat]}</td>)
    }
    return (
      <tr><td>{equipment.name}</td>{statRow}</tr>
    );
  }
}

export default renderEquipment;