import React from 'react';
import { Link } from 'react-router-dom';
export default {
  name: "XP and Leveling Up",
  content: <div>
    <h3>Experience (XP):</h3>
    <span>If a character <b>Hard Succeeds</b> or <b>Hard Fails</b> a <Link to="skills">Skill</Link> check they gain 1 XP (if contesting Skill checks between players, XP eligibility is up to the GM's discretion).<br/>
    You do not gain XP from a Hard Succeed on a check if its difficulty is equal or less than your check bonuses. If your Skill check contests multiple counter checks at once, it only counts as a Hard Succeed or Hard Fail if it Hard Succeeds/Hard Fails against at least half of the checks, it counts as a Hard Succeed if there is a tie between Hard Succeeds and Hard Fails.<br/>
    <br/>
    Every 5 XP points you may choose 1 Skill that gave you one of these 5 XP points, increase that Skill by 1. Also you immediately must choose a Proficiency from a Power or your Source, or choose a Lesser Power from your Source. This choice must be within the given threshold as denoted by LVL, representing your level. Proficiencies increase the power/utility of a Power, grant passive bonuses or grant sub-powers. If you gain a Proficiency from any other source (such as defeating an Epic creature or Hard Succeeding/Hard Failing a scenario) you immediately gain XP equal to the amount required to gain Proficiencies at your level, and you may increase any Skill by 1.<br/></span>
    <hr/>
    <h3>Leveling Up:</h3>
    <span>When you gain enough XP for your next level you must select a new Power and a new Lesser Power from your Source after your next Full Sleep. However, the Proficiency you gain from this XP cannot be used on this new Power. Gain max <Link to="stats">Survival</Link> equal to your Stamina. Reset XP to 0 plus any leftover XP past the leveling threshold. Some Powers cannot be selected until you reach certain thresholds as denoted by Level. Every even numbered level, increase one <Link to="stats">Attribute</Link> by 1.<br/>
    If you are making a character at higher than LVL 1: for each level you skipped, select proficiencies at each level equal to the number listed on the XP chart below obeying the [LVL] limits of that level. (eg. A LVL 3 character would select 3 [LVL 1] proficiencies and 5 [LVL 1] or [LVL 2] proficiencies). Then, add those proficiencies together to use as Skill points and increase any of your Skills by distributing these points (remember, a Skill can only be as high as 5 times your level). (eg. A LVL 3 character would distribute 8 Skill points to any Skills they like). Remember, Techniques are learned through story progression and cannot be arbitrarily chosen at character creation, even for characters created above LVL 1!<br/>
    Note: LVL 7 is the maximum level you can attain, but you may continue to gain Proficiencies and increase your Skills.
    </span><br/><br/>
    <hr/>
    <h3>Max Level:</h3>
    <span>Upon reaching lvl 7 your character no longer levels up by gaining XP. You still may gain XP as normal, and gain Proficiencies and increase your Skills, but there is no higher level than 7.<br/>
    Additionally, immediately after attaining level 7 you must select 1 Capstone from your Source. These are powerful and unique passives or abilities that showcase reaching the peak of your Source.
    </span>
    <table>
      <tbody>
      <tr><td>Level</td><td>XP for next level</td><td>Proficiencies</td></tr>
      <tr><td>1</td><td>15</td><td>3</td></tr>
      <tr><td>2</td><td>25</td><td>5</td></tr>
      <tr><td>3</td><td>40</td><td>8</td></tr>
      <tr><td>4</td><td>60</td><td>12</td></tr>
      <tr><td>5</td><td>100</td><td>20</td></tr>
      <tr><td>6</td><td>100</td><td>20</td></tr>
      <tr><td>7</td><td>---</td><td>&#8734;</td></tr>
      </tbody>
    </table>
  </div>
}//TODO: make table's look pretty