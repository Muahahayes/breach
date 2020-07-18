import React from 'react';
import {Link} from 'react-router-dom';
export default {
  name: "Stats",
  content: 
  <div>
    <h3><b>Health:</b></h3>
    <span><b>Life:</b> Your character has a maximum of 3 Life, plus or minus Life equal to half your Stamina (a minimum of 1 Life if your Stamina is -4 or less). Whenever you lose a point of Life, you receive an Injury. Roll on the Injury Table at the bottom of the <Link to="damage">Damage</Link> page. </span><br/>
    <br/>
    <span><b>Survival:</b> Your character has a maximum of 10 Survival, plus additional Survival equal to your Stamina (a minimum of 5 Survival if your Stamina is -5 or less). When something deals damage to your character, subtract the amount of damage from your current Survival. When something heals your character, add the amount of healing to your current Survival up to your max Survival.</span><br/>
    <br/>
    <span><b>Death:</b> If for any reason you drop below 1 Life to zero or a negative number which is smaller in absolute value than your max Life, set your Life to 0 and you become unconscious and are Dying. For every turn (or minute out of combat) you are Dying, subtract 1 Life (going into negative numbers). If your Life is ever a negative number equal in absolute value to your max Life, you are Dead. Your character cannot be played while Dead and you must create a new character to continue playing, ask your GM what G to create your next character at and how this new character can join the story.</span><br/>
    <hr/>
    
    <h3>Attributes:</h3>
    <span>An Attribute is a measurement of your natural ability at a base level. No Attribute may be increased above 3 + G</span>
    <ul>
      <li><span>Strength (Raw power, anaerobic activity)</span><br/></li>
      <li><span>Agility (Physical nimbleness and flexibility)</span><br/></li>
      <li><span>Will (Mental strength)</span><br/></li>
      <li><span>Stamina (Life and endurance)</span><br/></li>
    </ul>
    <br/>
    <span><b>Strength Benefits:</b> Every point of Strength increases your Carry Weight by 50lb. Add your Strength value to your melee attack damage.</span><br/>
    <span><b>Agility Benefits:</b> Agility is used to avoid some area of effect attacks. Add your Agility value to your Avoidance stat.</span><br/>
    <span><b>Will Benefits:</b> Will is used to resist some non-physical effects or empower some Gifts.</span><br/>
    <span><b>Stamina Benefits:</b> Every point of Stamina increases your Survival by 1 and the distance you can travel per day by 5 miles. Every even number of Stamina increases your Life by 1.</span><br/>
    <br/>
    <span><b>Stat Checks:</b> Some Powers, Techniques, and Attacks will contest an Attribute check. These checks can Hard Succeed or Hard Fail like a <Link to="skills">Skill</Link> check but do not give <Link to="leveling">XP</Link>.</span><br/>
    <br/>
    <span><b>Increasing Attributes:</b> Your Attributes are determined by your Race's starting Attributes, and are increased from Attribute Points (AP) you have at character creation. When <Link to="leveling">Leveling Up</Link> at every even numbered G Level, you may increase 1 Attribute by 1, but you cannot increase the Attribute beyond 3 + G.</span><br/>
    <hr/>
    <h3>Secondary Stats:</h3>
    <span><b>Shielding:</b> You start with 0 Shielding. You may gain Shielding from various effects in the game. When you have at least 1 Shielding, Attacks which reduce your Survival will first reduce your Shielding instead, if the Attack deals damage greater than your Shielding, the remaining damage after your Shielding is reduced to 0 is subtracted from your Survival. You lose any Shielding after a full sleep. </span><br/>
    <br/>
    <span><b>Avoidance:</b> Your character gains Avoidance from their equipment, Agility, and some Gifts. When a creature attempts to Attack your character, the difficulty of the Attack roll is determined by your Avoidance.</span><br/>
    <br/>
    <span><b>Speed:</b> You have Speed dice which are used for determining your maximum distance when doing a Movement Action. The number of dice and their size is determined by your Race and may be increased by some Gifts.</span><br/>
    <hr id="favored"/>
    <h3>Favored/Unfavored Rolls:</h3>
    <p>In some circumstances, the situation might favor or unfavor a dice roll. In these cases, a bonus/penalty is applied to the favored/unfavored roll respectively, with the degree of the bonus/penalty being +/- in tiers based on the creature's G. 1G, 2G, or 3G depending on how strong of an influence the situation has. Any single roll cannot have more than an Unfavored -3 penalty or a Favored +3 bonus.
      If more than 1 Bonus/Penalty is active, add together the +/- numbers to determine the final result (with a maximum of +/- 3). For example, a player with a Favored +3 bonus has been given an Unfavored -1 penalty. +3 added to -1 equals +2. The player would add 2G to their roll.
    </p>
    <hr/>
    <span><b>A note on numbers:</b> Whenever you calculate a fraction of a number, if the result is not a whole number you must round down to the nearest non-zero whole number (If it is zero, treat it as 1).</span><br/>
  </div>
}
