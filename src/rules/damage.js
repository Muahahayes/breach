import React from 'react';
import { Link } from 'react-router-dom';
export default {
name: 'Damage',
content: <div>
  <p><b>Damaging:</b> When dealing damage to a creature subtract the damage value from creature's Shielding, and then subtract the remaining damage, if any, from the creature's Survival. If the victim's Survival reaches 0, subtract 1 from the victim's Life and roll on the Injury Table below. Then, reset the victim's Survival to its maximum value and apply the remaining damage, if any, to their Survival. If this brings them to 0 Survival again repeat the Injury process but roll the severity die twice and keep the higher result for this and any further Injuries.<br/>
  <b>Killing/Subduing:</b> When dealing damage the attacker may attempt to subdue and not kill the victim, if they reduce the victim's Life below 1 but not to a negative number higher than half the victim's max Life the victim is made unconscious, otherwise the victim is Dead. If the creature's Life drops below 1 from damage, the attacker intends to kill, and the creature is a Player, or for NPCs at your GM's discretion, apply the <Link to="/rules/stats">Death</Link> rules. Otherwise, the creature is immediately Dead.</p>
  <hr/>
  <h3>Types of Damage:</h3>
  <p><b>Resistance:</b> When you are Resistant to a type of Damage, subtract G from all damage from that type. Additionally, whenever that type would bring you to 0 Survival, roll a d20 vs the remaining damage. On a success, cancel the remaining damage and set your Survival to 1.<br/><br/>
  <b>Physical types:</b><br/>
  <ul>
    <li><b>Blunt:</b> On a critical hit, Stuns biological type creatures for 1 turn.<br/></li>
    <li><b>Sharp:</b> On a critical hit, Bleeds biological type creatures every 5 turns and causes G Strain.<br/></li>
    <li><b>Crushing:</b> On a critical hit, deals an additional Gd4 damage and causes G Faults.<br/><br/></li>
  </ul>
  <b>Elemental types:</b><br/>
  <ul>
    <li><b>Fire:</b> On a critical hit, Burns the target causing G fire damage over G turns.<br/></li>
    <li><b>Water:</b> On a critical hit, Freezes the target snaring them for G turns.<br/></li>
    <li><b>Nature:</b> On a critical hit, Poisons the target dealing G Nature damage over 4 turns with difficulty [15 + G], and subtracting G Bloodlust.<br/></li>
    <li><b>Electric:</b> On a critical hit, Paralyzes the target for G turns. Cybernetic type creatures are also Stunned for the first turn.<br/><br/></li>
  </ul>
  <b>Mental types:</b><br/>
  <ul>
    <li><b>Psychic:</b> On a critical hit, Disorients the target subtracting G from their next attack roll.<br/></li>
    <li><b>Kinetic</b> (deals Blunt damage if it hits): On a critical hit, Stuns the target for 1 turn.<br/></li>
    <li><b>Spirit:</b> On a critical hit, Drains the target, damaging them and heals the attacker for Gd4 Life.<br/></li>
    <li><b>Darkness:</b> On a critical hit, Blinds the target for 1 turn and subtracts G ae.</li>
  </ul>  
  </p>
  <hr/>
  <h3 id="injury">Injury:</h3>
  <p>When you receive an injury for any reason roll 2d10, the first roll decides the severity.<br/>
  The second roll decides where the injury occurs (Physical/Elemental damage effects the body, and Mental effects the mind).<br/>
  If at any time all 5 areas of the Body or Mind have an Extreme injury you instantly drop to 0 Life and become <Link to="/rules/stats">Dying</Link>.<br/>
  Life points for Heavy or higher severity Injuries cannot be healed until the Injury is cured. Injuries which are not a Disability can be cured by a Full Sleep or some Powers/Techniques.</p>
  <h3>Simplified Injury Table:</h3>
  <p>While playing the Simplified ruleset, or for non-person creatures, roll 1d10 on the Simplified Injury Table and do not worry about the location of the Injury.</p>
  <table>
    <caption>Simplified Injury Table</caption>
    <tbody> 
    <tr><td>d10</td><td>Severity</td><td>Effect</td></tr>
    <tr><td>1-4</td><td>Mild</td><td>No Effect</td></tr>
    <tr><td>5-8</td><td>Moderate</td><td>-G Survival</td></tr>
    <tr><td>9-10</td><td>Heavy</td><td>Moderate and <Link to="/rules/stats#favored">Unfavored</Link> -1 on Attacks, Skills and Powers</td></tr>
    </tbody>
  </table>
  <h3>Full Injury Tables:</h3>
  <p>While playing the Full Ruleset, roll 2d10. Apply the first d10 to the Severity table. Apply the second d10 to the Body or Mind tables for Physical/Elemental or Mental damage types respectively. <br/>
    If the attack that caused the Injury was a Critical Hit and you roll a 6 or higher on the Severity Table, treat this as a Disabling Injury. The Injury cannot be cured by a Full Sleep or Powers/Techniques unless it specifically heals Disability.</p>
  <table>
    <caption>Severity Table</caption>
    <tbody> 
    <tr><td>d10</td><td>Severity</td><td>Effect</td></tr>
    <tr><td>1-2</td><td>Mild</td><td>No Effect</td></tr>
    <tr><td>3-5</td><td>Moderate</td><td>Read Body/Mind</td></tr>
    <tr><td>6-8</td><td>Heavy</td><td>Read Body/Mind</td></tr>
    <tr><td>9-10</td><td>Extreme</td><td>Read Body/Mind</td></tr>
    </tbody>
  </table>
  <div className="injuryDiv">
    <table className="injuryTable">
      <caption>Body Injuries</caption>
      <tbody> 
      <tr><td>d10</td><td>Severity</td><td>Moderate</td><td>Heavy</td><td>Extreme</td></tr>
      <tr><td>1-2</td><td>Legs</td><td>-5ft speed</td><td>Moderate and always Prone</td><td>Heavy and can't use Movement Action</td></tr>
      <tr><td>3-4</td><td>Lower Body</td><td>-1 Avoidance</td><td>-G Avoidance</td><td>Heavy and 1/2 Carry Weight</td></tr>
      <tr><td>5-6</td><td>Arms</td><td>-1 Attack Rolls</td><td>-G Attack Rolls</td><td>Heavy and cannot use 1 arm</td></tr>
      <tr><td>7-9</td><td>Upper Body</td><td>-G Survival</td><td>Moderate and lose 1 additional Life</td><td>Heavy but -1/2 Survival instead of -G</td></tr>
      <tr><td>10</td><td>Head</td><td>Unfavored -1 All Rolls (up to -3)</td><td>Moderate and roll a Moderate effect from the Mental Damage injury table</td><td>Heavy and Unconscious until this Injury is cured</td></tr>
      </tbody>
    </table>
    <table className="injuryTable">
      <caption>Mind Injuries</caption>
      <tbody> 
      <tr><td>d10</td><td>Severity</td><td>Moderate</td><td>Heavy</td><td>Extreme</td></tr>
      <tr><td>1-2</td><td>Memory</td><td>On your next turn you cannot use an action on any creature which is not in line of sight at the start of your turn</td><td>Give your character sheet to the GM, you cannot look at the sheet until this injury is cured</td><td>Heavy and any time you try to recall a name, location, or event roll a d4, on a 1 you don't remember any of it and on a 2 or 3 you forget some meaningful detail</td></tr>
      <tr><td>3-4</td><td>Balance</td><td>-1 Avoidance</td><td>-G Avoidance</td><td>Heavy and 1/2 Carry Weight</td></tr>
      <tr><td>5-6</td><td>Sensory</td><td>-1 Attack Rolls</td><td>-G Attack Rolls</td><td>Heavy and cannot use 1 arm</td></tr>
      <tr><td>7-9</td><td>Emotional</td><td>-G Survival</td><td>Moderate and lose 1 additional Life</td><td>Heavy but -1/2 Survival instead of -G</td></tr>
      <tr><td>10</td><td>Cognitive</td><td>Unfavored -1 All Rolls (up to -3)</td><td>Moderate and roll a Moderate effect from the Mental Damage injury table</td><td>Heavy and Asleep until this Injury is cured</td></tr>
      </tbody>
    </table>
  </div>
</div>
}