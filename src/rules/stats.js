import React from 'react';
import {Link} from 'react-router-dom';
export default {
  name: "Stats",
  content: 
  <div>
    <h3><b>Health:</b></h3>
    <span><b>Life:</b> Your character has a maximum of 5 Life, plus additional Life equal to your Stamina (a minimum of 1 Life if your Stamina is -4 or less). Whenever you lose a point of Life, you receive an Injury. Roll on the Injury table at the bottom of this page. </span><br/>
    <br/>
    <span><b>Survival:</b> Your character has a maximum of 10 Survival, plus additional Survival equal to your Stamina multiplied by 5 (a minimum of 5 Survival if your Stamina is -1 or less). When something deals damage to your character, subtract the amount of damage from your current Survival. When something heals your character, add the amount of healing to your current Survival up to your max Survival.</span><br/>
    <br/>
    <span><b>Death:</b> If for any reason you drop below 1 Life to zero or a negative number which is smaller in value than half your max Life set your Life to 0 and you become unconscious and are Dying, if your Life is a negative number greater in value than half your max Life you are Dead. For every turn (or minute out of combat) you are Dying, subtract 1 Life (going into negative numbers). If you reach a negative number equal in value to half your max Life, you are Dead. Your character can no longer be played and you must create a new character to continue playing, ask your GM what G to create your next character at and how this new character can join the story. </span><br/>
    <hr/>
    
    <h3>Attributes:</h3>
    <span>An Attribute is a measurement of your natural ability at a base level. No Attribute may be increased above 5 + G</span>
    <ul>
      <li><span>Strength (Raw power, anaerobic activity)</span><br/></li>
      <li><span>Agility (Physical nimbleness and flexibility)</span><br/></li>
      <li><span>Will (Mental strength)</span><br/></li>
      <li><span>Stamina (Life and endurance)</span><br/></li>
    </ul>
    <br/>
    <span><b>Strength Benefits:</b> Every point of Strength increases your Carry Weight by 50lb.</span><br/>
    <span><b>Agility Benefits:</b> Agility is used to determine how difficult it is for enemies to hit you.</span><br/>
    <span><b>Will Benefits:</b> Will is used to resist some non-physical effects.</span><br/>
    <span><b>Stamina Benefits:</b> Every point of Stamina increases your Life by 1, your Survival by 5, and the distance you can travel per day by 5 miles.</span><br/>
    <br/>
    <span><b>Note to D&amp;D players:</b> Charisma and Intellect aren't a base Attribute of a person. Charisma is split into Charm, Persuasion, Street Talk, Perform and Disruption skills, you can be charismatic in different ways. Intellect is split into various knowledge based skills, you can be intelligent in different fields.</span><br/>
    <br/>
    <span><b>Stat Checks:</b> Some Powers, Techniques, and Attacks will contest an Attribute check. These checks can Hard Succeed or Hard Fail like a <Link to="skills">Skill</Link> check but do not give <Link to="leveling">XP</Link>.</span><br/>
    <br/>
    <span><b>Increasing Attributes:</b> Your Attributes are determined by your Race's starting Attributes, and are increased from Attribute Points (AP) you have at character creation. When <Link to="leveling">Leveling Up</Link> at every even numbered G Level, you may increase 1 Attribute by 1, but you cannot increase the Attribute beyond [2 * G] + 1.</span><br/>
    <hr/>
    <h3>Secondary Stats:</h3>
    <span><b>Shielding:</b> You start with 0 Shielding. You may gain Shielding from various effects in the game. When you have at least 1 Shielding, Attacks which reduce your Survival will first reduce your Shielding instead, if the Attack deals damage greater than your Shielding, the remaining damage after your Shielding is reduced to 0 is subtracted from your Survival. You lose any Shielding after a full sleep. </span><br/>
    <br/>
    <span><b>Avoidance:</b> Your character gains Avoidance from their equipment, Race, and some Gifts. When a creature attempts to Attack your character, the difficulty of the Attack roll is determined by your Avoidance.</span><br/>
    <br/>
    <span><b>Speed:</b> You have Speed dice which are used for determining your maximum distance when doing a Movement Action. The number of dice and their size is determined by your Race and may be increased by Powers.</span><br/>
    <hr/>
    <span><b>A note on numbers:</b> Whenever you calculate a fraction of a number, if the result is not a whole number you must round down to the nearest non-zero whole number (If it is zero, treat it as 1).</span><br/>
  </div>
}
