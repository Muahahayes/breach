import React from 'react';
import { Link } from 'react-router-dom';
import renderEquipment from './renderEquipment';

function Equipment({match}) {
  if (match && match.params && match.params.e) { // individual equipment
    let equipmentName = match.params.e;
    equipmentName = equipmentName.split('_').join(' ');
    let equipment;
    let eType;
    try {
      eType = require(`./equipment/${match.params.t}`).default;
    }
    catch (e) {
      return (
        <div className="content">
        <div className="content-head">
          <h1>{equipmentName}</h1>
        </div>
        <div className="content-body">
          No equipment found for this page!
        </div>  
      </div>
      );
    }
    for (let e of eType.equipment) {
      if (e.name.toLowerCase() === equipmentName.toLowerCase()) {
        equipment = e;
        continue;
      }
    }
    if (!equipment) {
      return (
        <div className="content">
        <div className="content-head">
          <h1>{equipment}</h1>
        </div>
        <div className="content-body">
          No equipment found for this page!
        </div>  
      </div>
      );
    }
    else {
      return (        
        <div className="content">
          <div className="content-head">
            <h1>{equipment.name}</h1>
          </div>
          <div className="content-body">
            Return to <Link to={`/equipment/${match.params.t}`}>{eType.name}</Link>.
            <br/>
            {renderEquipment(equipment)}
          </div>  
        </div>
      );    
    }
  }
  else if (match && match.params && match.params.t) { // render all equipment from this type
    let eType;
    try {
      eType = require(`./equipment/${match.params.t}`).default;
    }
    catch (e) {
      return (
        <div className="content">
        <div className="content-head">
          <h1>{match.params.t}</h1>
        </div>
        <div className="content-body">
          No equipment found for this page!
        </div>  
      </div>
      );
    }

    let keyRow = [];
    keyRow.push(<td>Name</td>)
    for (let stat of eType.stats) {
      let statName = stat[0].toUpperCase();
      statName += stat.slice(1);
      keyRow.push(<td>{statName}</td>);
    }
    let equipmentRows = [];
    for (let equipment of eType.equipment) {
      let statRow = [];
      statRow.push(<td><Link to={`/equipment/${match.params.t}/${equipment.name.split(' ').join('_')}`}>{equipment.name}</Link></td>);
      for (let stat of eType.stats) {
        statRow.push(<td>{equipment[stat]}</td>);
      }
      equipmentRows.push(<tr>{statRow}</tr>);
    }

    return (
      <div className="content">
        <div className="content-head">
          <h1>{eType.name}</h1>
        </div>
        <div className="content-body">
          <div className="description">
            {(eType.image)?<img src={eType.image} alt={eType.name+" Profile Picture"} className="descPic"/>:null}
            {eType.description}
          </div>
          <br/>
          <table style={{width:'80%', marginLeft:'10%'}}>
            <tr>{keyRow}</tr>
            {equipmentRows}
          </table>
        </div>
      </div>
    );
  }
  else {
    return (
      <div className="content">
        <div className="content-head">
          <h1>Equipment</h1>
        </div>
        <div className="content-body">
          No equipment found for this page!
        </div>  
      </div>
    ); 
  }
}

export default Equipment;