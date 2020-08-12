import React from 'react';
import {Link} from 'react-router-dom';
export default {
  name: "Stats",
  content: 
  <div>
    <h3><b>Health:</b></h3>
    <span><b>Life:</b> Your character has a maximum of 3 Life, plus or minus Life equal to half your Stamina (a minimum of 1 Life if your Stamina is -4 or less). Whenever you lose a point of Life, you receive an Injury. Roll on the Injury Table at the bottom of the <Link to="damage">Damage</Link> page. </span><br/>
    <br/>
    <span><b>Survival:</b> Your character has a maximum of 10 Survival, plus additional Survival equal to double your Stamina (a minimum of 5 Survival if your Stamina is -3 or less). When something deals damage to your character, subtract the amount of damage from your current Survival. When something heals your character, add the amount of healing to your current Survival up to your max Survival.</span><br/>
    <br/>
    <span><b>Death:</b> If for any reason you drop below 1 Life to zero or a negative number which is smaller in absolute value than your max Life set your Life to 0, fall <Link to="combat">Prone</Link>, and you become unconscious and are Dying. For every turn (or minute out of combat) you are Dying, subtract 1 Life (going into negative numbers). If your Life is ever a negative number equal or greater in absolute value to your max Life, you are Dead. Your character cannot be played while Dead and you must create a new character to continue playing, ask your GM what level to create your next character at and how this new character can join the story.</span><br/>
    <br/>
    <span><b>Stabalizing:</b> If a creature is Dying, an ally may attempt to stabalize them. Roll a d20 + Medicine vs 10. Add 5 to the difficulty for every point of Life in the negative the creature is. On a Soft Fail they do not subtract Life the next time they would subtract Life for Dying. On a Success the creature is stabalized, their Life is set to 0, and they are no longer Dying. They remain unconscious until they are healed to at least 1 Life (usually by finishing a Full Sleep). If the person rolling the Medicine check has a Medicine Skill of at least 5 + the dying creature's level, and the dying creature has at least 1 injury which is not Extreme, then on a Hard Success the creature is healed to 1 Life but is still Prone.</span>
    <hr/>
    
    <h3>Attributes:</h3>
    <span>An Attribute is a measurement of your natural ability at a base level. No Attribute may be increased above 3 + LVL</span>
    <ul>
      <li><span>Strength (Raw power, anaerobic activity): Every point of Strength increases your Equip Weight by 1 and is required to use heavier equipment.</span><br/></li>
      <li><span>Agility (Physical nimbleness and flexibility): Add half your Agility value to your Avoidance stat.</span><br/></li>
      <li><span>Will (Mental strength): Add your Will to the Save Difficulty on your Powers.</span><br/></li>
      <li><span>Stamina (Life and endurance): Every point of Stamina increases your Survival by 2 and the distance you can travel per day by 5 miles. Every even number of Stamina increases your Life by 1.</span><br/></li>
    </ul>
    <br/>
    <span><b>Stat Checks:</b> Some Powers, Techniques, and Attacks will contest an Attribute check. These checks can Hard Succeed or Hard Fail like a <Link to="skills">Skill</Link> check but do not give <Link to="leveling">XP</Link>.</span><br/>
    <br/>
    <span><b>Increasing Attributes:</b> Your Attributes are determined by your Race's starting Attributes, and are increased from Attribute Points (AP) you have at character creation. When <Link to="leveling">Leveling Up</Link> at every even numbered Level, you may increase 1 Attribute by 1, but you cannot increase the Attribute beyond 3 + LVL.</span><br/>
    <br/>
    <span><b>Primary Attribute:</b> A person may have 1 Primary Attribute. On Odd number levels when leveling up, increase this Attribute by 1. You may add your level to rolls involving your Primary Attribute. Your Primary Attribute also gives you additional benefits.</span><br/>
    <span><b>Strength Benefits:</b>  Add your Strength value to your unarmed attack damage, melee weapon attack damage, and your Athletics rolls. Reduce damage taken from Physical damage types by the value of your Strength.</span><br/>
    <span><b>Agility Benefits:</b> Add your Agility value to your unarmed attack damage, melee weapon attack damage, ranged weapon attack damage, and your Acrobatics rolls. Add your full Agility value to your Avoidance stat instead of only half.</span><br/>
    <span><b>Will Benefits:</b> Add your Will value to any damage, healing or shielding dealt by a Power. Reduce damage taken from Mental damage types by the value of your Will.</span><br/>
    <span><b>Stamina Benefits:</b> Each point of Stamina increases your Survival by 3 instead of 2 at character creation and when leveling up. You may treat an Extreme Injury as a Heavy Injury once per Full Sleep, upon attaining 5 Stamina you may do this twice.</span><br/>
    <hr/>
    <h3>Secondary Stats:</h3>
    <span><b>Shielding:</b> You start with 0 Shielding. You may gain Shielding from various effects in the game. When you have at least 1 Shielding, Attacks which reduce your Survival will first reduce your Shielding instead, if the Attack deals damage greater than your Shielding the remaining damage after your Shielding is reduced to 0 is subtracted from your Survival. You lose any Shielding after a Full Sleep. </span><br/>
    <br/>
    <span><b>Avoidance:</b> Your character gains Avoidance from their equipment, Agility, and some Powers. When a creature attempts to Attack your character, the difficulty of the Attack roll is determined by your Avoidance. If you do not have any Equipment that is increasing your Avoidance, your default Avoidance is 12 + Half your Agility.</span><br/>
    <br/>
    <span><b>Speed:</b> You have Speed dice which are used for determining your maximum distance when doing a Movement Action. The number of dice and their size is determined by your Race and may be increased by some Powers.</span><br/>
    <hr id="favored"/>
    <h3>Favored/Unfavored Rolls:</h3>
    <p>In some circumstances, the situation might favor or unfavor a dice roll. In these cases, a bonus/penalty is applied to the favored/unfavored roll respectively, with the degree of the bonus/penalty being +/- in tiers based on the creature's level. Their level, double their level, or triple their level depending on how strong of an influence the situation has. Any single roll cannot have more than an Unfavored -3 penalty or a Favored +3 bonus.
      If more than 1 Bonus/Penalty is active, add together the +/- numbers to determine the final result (with a maximum of +/- 3). For example, a player with a Favored +3 bonus has been given an Unfavored -1 penalty. +3 added to -1 equals +2 so the player would add twice their level to their roll. When rolling an opposing roll against another creature an Unfavored bonus is based on the opposing creature's level instead of your own.
    </p>
    <hr/>
    <h3>Saving Rolls:</h3>
    <p>Sometimes when a Power attempts to apply a negative effect to you, there is an Attribute Save required to Save yourself from the effect. Roll a d20 plus the Attribute declared against the Save Difficulty of the Power.
    The Save Difficulty of a Power is equal to 7 + Will + LVL for the user of that Power.</p><br/><br/>
    <span><b>A note on numbers:</b> Whenever you calculate a fraction of a number, if the result is not a whole number you must round down to the nearest non-zero whole number (If this results in zero, treat it as 1). A fraction of zero is always zero.</span>
  </div>
}
