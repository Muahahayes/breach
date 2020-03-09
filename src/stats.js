import React from 'react';
import './App.css';

function Stats() {

  return (
    <div className="content">
      <div className="content-head">
        <h1>STATS</h1>
      </div>
      <div className="content-body">
        <b>Life:</b> (TODO update Life system) Your character has a maximum of 1 Life, plus additional Life equal to your Stamina. When something deals damage to your character, subtract the amount of damage from your current Life. When something heals your character, add the amount of healing to your current Life up to your max Life.<br/>
        <br/>
        <b>Death:</b> If you drop below 1 Life for any reason, if your Life is zero or a negative number which is smaller in value than half your max Life set your Life to 0 and you become unconscious and are Dying, else if your Life is a negative number greater in value than half your max Life you are Dead. For every turn (or minute out of combat) you are Dying, subtract 1 Life (going into negative numbers). If you reach a negative number equal to your Stamina multiplied by 2, you are Dead. Your character can no longer be played and you must create a new character to continue playing, ask your GM what G to create your next character at and how this new character can join the story. <br/>
        <br/>
        <b>Shielding:</b> You start with 0 Shielding. You may gain Shielding from various effects in the game. When you have at least 1 Shielding, Attacks which reduce your Life have their damage reduced by the amount of Shielding you have and subtract that damage amount from your Shielding, if the Attack deals damage greater than your Shielding, the remaining damage after your Shielding is reduced to 0 is subtracted from your Life. You lose any Shielding after a full sleep. <br/>
        <br/>
        <b>Avoidance:</b> Your character gains armor from their equipment, Race, and some Powers. When a creature attempts to Attack your character, the difficulty of the Attack roll is increased by your Armor.<br/>
        <br/>
        <b>Speed:</b> You have Speed dice used for determining your maximum distance when doing a Movement Action. The number of dice and their size is determined by your Race and may be increased by Powers.<br/>
        <br/>
        <b>Attributes:</b> A measurement of your natural ability at a base level. No Attribute may be increased above 5 + G
        <ul>
          <li>Strength (Raw power, anaerobic activity)</li>
          <li>Agility (Physical nimbleness and flexibility)</li>
          <li>Will (Mental strength)</li>
          <li>Stamina (Life and endurance)</li>
        </ul>	        
        (TODO: flesh out more)<br/>
        Strength Benefits: Every point of Strength increases your Carry Weight by 50lb.<br/>
        Agility Benefits: Agility is used to determine how difficult it is for enemies to hit you.<br/>
        Will Benefits: Will is used to resist some non-physical effects.<br/>
        Stamina Benefits: Every point of Stamina increases your Life by 20 and the distance you can travel per day by 5 miles.<br/>
        <b>Note to D&D players:</b> Charisma and Intellect aren't a base Attribute of a person. Charisma is split into Charm, Persuasion, Street Talk, Perform and Disruption skills, you can be charismatic in different ways. Intellect is split into various knowledge based skills, you can be intelligent in different fields.<br/>
        <br/>
        Stat Checks: Some Powers, Techniques, and Attacks will contest an Attribute check. These checks can Hard Succeed or Hard Fail like a Skill check but do not give XP.<br/>
        <br/>
        Increasing Attributes: Your Attributes are determined by your Race's starting Attributes, and are increased from Attribute Points (AP) you have at character creation, and gain from Gifts. When increasing an Attribute using AP, you cannot increase the Attribute beyond [2 * G] + 1.<br/>
        <br/>
        A note on numbers: Whenever you calculate a fraction of a number, if the result is not a whole number you must round down to the nearest non-zero whole number (If it is zero, treat it as 1).
      </div>
    </div>
  );
}

export default Stats;
