import React from 'react';
import { Link } from 'react-router-dom';
export default {
  name: "XP and Leveling Up",
  content: <div>
    <p>
    If a character <b>Hard Succeeds</b> or <b>Hard Fails</b> a <Link to="skills">Skill</Link> check they gain 1 XP (if contesting Skill checks between players, XP eligibility is up to the GM's discretion).<br/>
    <br/>
    Every 10 XP points you may choose 1 Skill that gave you one of these 10 XP points, increase that Skill by 1. Also you must add a Proficiency to a Gift or your Source (increasing the power/utility of the Gift, gaining passive bonuses or gaining sub-powers). Starting at 5G you increase a Skill and gain a Proficiency after acquiring 15 points, instead of 10. You do not gain XP from a Hard Succeed on a check if its difficulty is equal or less than your check bonuses. If your Skill check contests multiple counter checks at once, it only counts as a Hard Succeed or Hard Fail if it Hard Succeeds/Hard Fails against at least half of the checks, it counts as a Hard Succeed if there is a tie between Hard Succeeds and Hard Fails.<br/>
    <br/>
    When you reach (X) XP you must select a new Gift from your Source after your next full sleep (or Reboot for cybernetics). Also, the proficiency you gain at this XP cannot be from this new Gift. Gain max <Link to="stats">Survival</Link> equal to your Stamina. Reset XP to 0 (This is Leveling Up). Your number of Gifts acts as a benchmark of your progression and some Powers cannot be selected until you reach certain thresholds as denoted by G (the number of Gifts you possess). Every even numbered G, increase one <Link to="stats">Attribute</Link> by 1.<br/>
    If you are making a character at higher than 1 G: for each G you skipped, select proficiencies at each G equal to the number listed on the XP chart below obeying the [G] limits of that G. (eg. A 3 G character would select 2 [1 G] proficiencies and 3 [1 G] or [2 G] proficiencies). Then, add those proficiencies together to use as Skill points and increase any of your Skills by distributing these points (remember, a Skill can only be as high as 5 times your G). (eg. A 3 G character would distribute 5 Skill points to any Skills they like).
    <br/></p>
    <table>
      <tbody>
      <tr><td>G Level</td><td>XP for next level</td><td>Proficiencies</td></tr>
      <tr><td>1</td><td>20</td><td>2</td></tr>
      <tr><td>2</td><td>30</td><td>3</td></tr>
      <tr><td>3</td><td>60</td><td>6</td></tr>
      <tr><td>4</td><td>100</td><td>10</td></tr>
      <tr><td>5</td><td>150</td><td>10</td></tr>
      <tr><td>6</td><td>210</td><td>14</td></tr>
      <tr><td>7</td><td>285</td><td>19</td></tr>
      </tbody>
    </table>
  </div>
}//TODO: make table's look pretty