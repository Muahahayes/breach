import React from 'react';
import { Link } from 'react-router-dom';
export default {
name: 'Damage',
content: <div>
  <p><b>Damaging:</b> When dealing damage to a creature subtract the damage value from creature's Shielding, and then subtract the remaining damage, if any, from the creature's Survival. If the victim's Survival reaches 0, subtract 1 from the victim's Life and roll on the Injury Table below. Then, reset the victim's Survival to its maximum value and apply the remaining damage, if any, to their Survival. If this brings them to 0 Survival again repeat the Injury process but roll the severity die twice and keep the higher result.<br/><br/>
  <b>Killing/Subduing:</b> When dealing damage the attacker may attempt to subdue and not kill the victim, if they reduce the victim's Life below 1 but not to a negative number higher than the victim's Max Life the victim is made unconscious, otherwise the victim is Dead. If the creature's Life drops below 1 from damage, the attacker intends to kill, and the creature is a Player, or for NPCs at your GM's discretion, apply the <Link to="/rules/stats">Death</Link> rules. Otherwise, the creature is immediately Dead.</p>
  <hr/>
  <h3>Types of Damage:</h3>
  <p><b>Resistance:</b> When you are Resistant to a type of Damage, subtract your Level from all damage received from that type. Additionally, whenever that type of damage would bring you to 0 Survival, roll a d20 vs the remaining damage. On a success, cancel the remaining damage and set your Survival to 1.<br/><br/>
  <b>Physical types:</b><br/>
  <ul>
    <li><b>Blunt:</b> Damage caused by impact with a flat non-sharp object.</li>
    <li><b>Sharp:</b> Damage caused by being cut, stabbed, or sliced.</li>
    <li><b>Crushing:</b> Damaged caused by being crushed, squeezed, or pressured.</li><br/>
  </ul>
  <b>Elemental types:</b><br/>
  <ul>
    <li><b>Fire:</b> Damaged caused by extreme heat or burning.</li>
    <li><b>Water:</b> Damaged caused by drowning, extreme cold, or crashing waves.</li>
    <li><b>Nature:</b> Damaged caused by poisons, disease, or supernatural plant life.</li>
    <li><b>Electric:</b> Damaged caused by lightning, electricity, or other electromagnetic energy.</li><br/>
  </ul>
  <b>Mental types:</b><br/>
  <ul>
    <li><b>Psychic:</b> Damaged caused by assaults on the mind.</li>
    <li><b>Kinetic:</b> Damaged caused to the body by the powers of the mind. Resistance to Physical or Mental damage gives resistance to Kinetic, but Immunity to only one of the two does not give Immunity to Kinetic.</li>
    <li><b>Spirit:</b> Damage caused by the raw Aether within living things.</li>
    <li><b>Darkness:</b> Damage which pierces the Aether within a sentient creature's soul.</li>
  </ul>  
  </p>
  <hr/>
  <h3>Status Effects:</h3>
  <p>
    <b>Immunity:</b> When a creature is Immune to a Status Effect any attempt to cause that Status Effect on the creature automatically fails and if they currently have this type of Status Effect when they gain Immunity the effect immediately ends.<br/><br/>
    <b>Sensory/Cognitive Effects:</b><br/>
    <ul>
      <li><b>Blind:</b> You cannot see with your eyes. Any Attack or Skill roll which would normally require sight receives an Unfavored -2. You are unaware of creatures you have not heard or felt recently. You cannot React to anything you can't hear/feel.</li>
      <li><b>Deaf:</b> You cannot hear with your ears. You are unaware of the location of creatures you have not seen or felt recently. You cannot React to anything not directly in your line of sight or you cannot feel.</li>
      <li><b>Silence:</b> You are unable to speak or produce other sounds with your throat.</li>
      <li><b>Unconscious:</b> You are unaware of your surroundings. You cannot use any Actions. If you are Unconscious for 2 hours it counts as a Break, and after 6 hours you are considered Sleeping.</li>
      <li><b>Sleep:</b> You are unaware of your surroundings. You cannot use any Actions. If the Sleep effect lasts for longer than 1 hour it counts as taking a Break, after 6 hours it counts as a Full Sleep.</li>
      <li><b>Stun:</b> You cannot use any Actions.</li>
      <li><b>Fear:</b> You must attempt to use your full Movement to move away from the source of the Fear effect. You cannot use an Action that targets the source of the Fear effect.</li>
      <li><b>Taunt:</b> You must move towards the source of the Taunt effect either up to your full Movement or until you are within range and use an attack or Power you possess. Your first Full Action on your turn must have targeting which includes the source of the Taunt effect.</li><br/>
    </ul>
    <b>Immobilize Effects:</b>
    <ul>
      <li><b>Paralyze:</b> You can only do 1 of your Actions (Full, Movement, React, Activation) per round.</li>
      <li><b>Snare:</b> You cannot use your Movement Action.</li>
      <li><b>Slow:</b> Your Speed roll is reduced, the amount is defined by the source of the Slow effect.</li>
      <li><b>Cripple:</b> The limb that has this effect cannot be used in any Actions. If only 1 leg is not crippled you may move, but your Movement is reduced by half.</li><br/>
    </ul>
    <b>Soul Effects:</b>
    <ul>
    <li><b>Curse:</b> A Status Effect with a Curse has its normal effect but cannot be removed until the Curse has been removed.</li>
    <li><b>Dumb:</b> Written and spoken Language, and all symbolic or pictographic information are all gibberish to you. Any of these things that come from you also appear as gibberish to other creatures.</li>
    <li><b>Sunder:</b> For the duration, your maximum Survival is set to 1. When this effect ends your current and max Survival returns to the values it had when the effect began.</li><br/>
    </ul>
    <b>Passive Damage Effects:</b>
    <ul>
    <li><b>Poison:</b> Deals Nature damage each turn until succeeding at some Stamina check. The amount of damage, the difficulty of the check, and duration are given by the source of the Poison. A creature may have 1 Poison effect at a time, the highest difficulty check taking priority.</li>
    <li><b>Burn:</b> Deals Fire damage each turn until spending an Action putting out the fire, or when the duration ends. The damage and duration are given by the source of the Burn. A creature may have 1 Burn effect at a time, the highest damage taking priority.</li>
    <li><b>Bleed:</b> Loses 1 Life every x number of turns until a creature succeeds a Medicine check vs the Attack roll of the damage source (or a given difficulty) or the creature is healed to max Life. The period of turns is given by the source of the Bleed. Some bleeds only occur a limited number of times. A creature may have 1 Bleed effect at a time, the shortest period bleed taking priority but taking the duration of the longest duration Bleed.</li>
    </ul>
  </p>
  <hr/>
  <h3 id="injury">Injury:</h3>
  <p>When you receive an injury for any reason roll 2d10, the first roll decides the severity. The second roll decides where the injury occurs (Physical/Elemental damage effects the body, and Mental effects the mind). If you already have an Extreme Injury in that location lose 1 Life instead and roll an Injury for that Life lost.<br/>
    If at any time all 5 areas of the Body or Mind have an Extreme injury you instantly drop to 0 Life and become <Link to="/rules/stats">Dying</Link>. When a Life point is healed you may select 1 Injury to be removed. Life points for Extreme severity Injuries cannot be healed until the Injury is cured.</p>
  <h3>Simplified Injury Table:</h3>
  <p>While playing the Simplified ruleset, or for non-person creatures, roll 1d10 on the Simplified Injury Table and do not worry about the location of the Injury.</p>
  <table>
    <caption>Simplified Injury Table</caption>
    <tbody> 
    <tr><td>d10</td><td>Severity</td><td>Effect</td></tr>
    <tr><td>1-4</td><td>Mild</td><td>No Effect</td></tr>
    <tr><td>5-8</td><td>Moderate</td><td>-LVL Survival</td></tr>
    <tr><td>9-10</td><td>Heavy</td><td><Link to="/rules/stats#favored">Unfavored</Link> -1 on All Rolls</td></tr>
    </tbody>
  </table>
  <h3>Full Injury Tables:</h3>
  <p>While playing the Full Ruleset, roll 2d10. Apply the first d10 to the Severity table. Apply the second d10 to the Body or Mind tables for Physical/Elemental or Mental damage types respectively.</p>
  <div className="tableDiv">
    <table>
      <caption>Severity Table</caption>
      <tbody> 
      <tr><td>d10</td><td>Severity</td><td>Effect</td></tr>
      <tr><td>1-3</td><td>Mild</td><td>No Effect</td></tr>
      <tr><td>4-7</td><td>Moderate</td><td>Read Body/Mind</td></tr>
      <tr><td>8-9</td><td>Heavy</td><td>Read Body/Mind</td></tr>
      <tr><td>10</td><td>Extreme</td><td>Read Body/Mind</td></tr>
      </tbody>
    </table>
  </div>
    <div className="tableDiv">
      <table className="injuryTable">
        <caption>Body Injuries</caption>
        <tbody> 
        <tr><td>d10</td><td>Severity</td><td>Moderate</td><td>Heavy</td><td>Extreme</td></tr>
        <tr><td>1-2</td><td>Legs</td><td>-1 Speed</td><td>-LVL Speed and knocked Prone</td><td>Heavy and can't use Movement Action</td></tr>
        <tr><td>3-4</td><td>Lower Torso</td><td>-1 Avoidance</td><td>-LVL Avoidance</td><td>Heavy and Paralyzed</td></tr>
        <tr><td>5-6</td><td>Arms</td><td>-1 Attack Rolls</td><td>Unfavored -1 to Attack Rolls</td><td>Heavy and 1 arm is Crippled</td></tr>
        <tr><td>7-9</td><td>Upper Torso</td><td>-LVL Max Survival</td><td>Lose 1 additional Life (Mild Injury)</td><td>Heavy and add your level to Physical Damage received</td></tr>
        <tr><td>10</td><td>Head</td><td>Unfavored on -1 All Rolls</td><td>Moderate and roll a Moderate effect from the Body Injury table</td><td>Unconscious until this Injury is cured</td></tr>
        </tbody>
      </table>
    </div>
    <div className="tableDiv">
      <table className="injuryTable">
        <caption>Mind Injuries</caption>
        <tbody> 
        <tr><td>d10</td><td>Severity</td><td>Moderate</td><td>Heavy</td><td>Extreme</td></tr>
        <tr><td>1-2</td><td>Memory</td><td>You cannot use an action on or move towards any creature which is not in line of sight</td><td>Give your character sheet to the GM, you cannot look at the sheet until this injury is cured</td><td>Heavy and any time you try to recall a name, location, or event roll a d4, on a 1 you don't remember any of it and on a 2 or 3 you forget a meaningful detail</td></tr>
        <tr><td>3-4</td><td>Balance</td><td>-1 Avoidance</td><td>-LVL Avoidance</td><td>Heavy and Paralyzed</td></tr>
        <tr><td>5-6</td><td>Sensory</td><td>-1 Attack Rolls</td><td>Unfavored -1 Attack Rolls</td><td>Heavy and lose sense of touch</td></tr>
        <tr><td>7-9</td><td>Emotional</td><td>-LVL Max Survival</td><td>Lose 1 additional Life (Mild Injury)</td><td>Heavy and add your level to Mental Damage received</td></tr>
        <tr><td>10</td><td>Cognitive</td><td>Unfavored on -1 All Rolls</td><td>Moderate and roll a Moderate effect from the Mind Injury table</td><td>Unconscious until this Injury is cured</td></tr>
        </tbody>
      </table>
    </div>
</div>
}