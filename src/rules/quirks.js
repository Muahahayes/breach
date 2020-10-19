import React from 'react';
import { Link } from 'react-router-dom';
export default {
  name: "Quirks",
  content: <div>
    Select one single sentence or phrase for each of the 5 Quirks below. Try to select 5 Quirks which do not paint the same picture at first glance, more variety leads to a more fleshed out character and more situations where a Quirk can come into play! <br/>
    If a Quirk would probably apply to ¼ or more combat encounters during the campaign, reword or replace the Quirk (ie. Role: Master Black Belt, the player may ask for a bonus to any melee fight they encounter, try something like Wise Monk and emphasize the philosophy of martial arts more than just the combat ability). <br/>
    Whenever a Quirk would reasonably give you more experience or aptitude in a situation, apply a Favored +1 to your rolls and you gain 1 XP for any result. If a Quirk would reasonably increase the difficulty of a situation apply an Unfavored -1 to your rolls, but you're awarded 3 <Link to="rules/leveling">XP</Link> instead of 1 for any Hard Success that would award XP, and 1 XP for any other result. You cannot apply more than 1 Quirk to a single roll. You may also as a Reaction attempt to Influence a nearby ally if you have a Quirk that is relevant to a d20 roll they are attempting. Roll a d10, on a 6+ they may apply your Quirk to their d20 roll. On a 1 you get in their way and apply an Unfavored -1 to their roll instead.<br/>
		<hr/>
    <h3>The 5 Character Quirks:</h3>
    <ul>
    <li>Role: What type of person are they, what is their place in the world</li>
		<li>Philosophy: What brief description represents the way they think the world should be or the way they think people should act towards one another</li>
		<li>Goal/Dream: What do they want to accomplish with their life</li>
		<li>Weaknesses: What bad habit, fear or shortcoming gets in the way of them succeeding</li>
		<li>Conflict: What event, person, place, or organization is actively or passively pushing them to fail or acts as an obstacle</li>
    </ul>
    <hr/>
    <h3>Promises:</h3>
    A Promise Quirk is a special Quirk that is gained through storytelling or special Powers you may select from your Source. A Promise is a set of rules or actions you agree to abide by. Whenever you violate a Promise while doing an Action, gain an Unfavored -1 on any d20 rolls involved. If you are going down the wrong path or violating the Promise over a period of time, receive this Unfavored -1 on all d20 rolls you make during this time. Do not gain additional XP for this Unfavored penalty and you do not use Promise Quirks for bonuses or penalties like you would one of your 5 base Quirks. You may have any number of Promises at one time.
  </div>
}