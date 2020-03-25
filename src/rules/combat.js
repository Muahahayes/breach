import React from 'react';
import { Link } from 'react-router-dom';
export default {
name: 'Combat',
content: <div>
  <p>Combat begins when a conflict between two or more creatures is resolved with violence. A Round starts and there continues to be new Rounds after each Round finishes until either; all creatures still conscious are allied, or all creatures have voluntarily given up on fighting. A creature may choose to give up on fighting at any time and forfeit their next turn, and may continue to forfeit turns. </p>
  <hr/>
  <h3>Turns and Rounds:</h3>
  <p>Combat is divided into moments in time called Turns and Rounds. All players take turns doing actions until the Combat has ended. <br/><br/>
  <b>Turns:</b><br/> A segment of time about 5 seconds long. The order in which creatures take their turn is determined by the movement distance they rolled for the current round. A tie between players and non-player creatures always favors the player. A tie between players may be decided by the group of players at the moment the turn is available (to settle disagreements roll a d20 contest to break the tie). If a player has minions/pets they may do those actions in any order after their character has finished their turn.<br/><br/>
  <b>Rounds:</b><br/> A collection of Turns, each creature takes 1 Turn in order and the Round concludes after each creature has finished their Turn. At the start of a new round every creature rolls their Speed dice to determine the maximum distance of their Movement action on their Turn.</p>
  <hr/>
  <h3>Actions:</h3>
  <p>If a Skill, Technique, Gift, or other thing you do tells you to use a type of Action see the rules for each listed below. If it tells you that you may do it as a "free action" or "at will" it does not need an Action and may be done without spending one.<br/><br/>
	<b>Full:</b><br/> Sometimes just called Action, with a Full Action you can Attack, use some Powers, Grapple, or interact with objects on your turn. As a rule of thumb, anything that takes more than 1 second of effort will take a Full Action, and anything that takes more than 5 seconds will take an additional Full Action each turn for each 5 seconds of effort. A Full Action may be used in substitution for a Minor.<br/><br/>
	<b>Minor:</b><br/> You can interact with objects or use some Powers on your turn. As a rule of thumb, anything that takes 1 second of effort or less will take a Minor Action. All characters can choose to use their Minor Action to Block incoming attacks for the next Round. <br/><br/>
	<b>React:</b><br/> You can use some Powers or a readied Minor/Movement Action on another creature's turn. To ready a Minor Action on your turn to use as a React Action you must declare the Action, declare what Action another creature does or other type of event that will trigger your Action. This uses your Minor Action on your current turn, and uses your React when it is triggered. To ready a Movement Action follow the same steps as a Minor Action, but the Movement is limited to half your available movement distance.<br/><br/>
	<b>Movement:</b><br/> You may move along the ground (or air if you have a flight speed) in the world. Roll your Speed dice and multiply the result by 5 ft to determine your maximum distance during this action (this usually comes from your Race, and may be increased by Powers or decreased by some statuses or effects).<br/><br/>
 	Travelling over rough or uneven terrain, climbing, or swimming limits your movement to half your Speed dice while traversing. Swimming requires an Athletics check [10] after each turn in the water or you will begin drowning (you will be snared and if you are not saved or do not succeed another Athletics check [15] within G turns you will become unconscious in the water. 10 minutes of this will result in your death. You may be saved by another creature succeeding an Athletics check [15] which will allow you to continue swimming).<br/><br/>
	You may choose to jump instead of moving along the ground. You may jump [3 * Strength] ft upward, and you may jump horizontally up to half your maximum movement distance.<br/><br/>
  <b>Activate:</b><br/> Some proficiencies, passive effects, techniques, or items may require an Activation Action. This is separate from your Minor Action, may only be used once per Round, and cannot be readied on its own as a Reaction. However, if a Minor/Movement Action requires an Activation Action as a base cost of doing the Action, it may be used if you still have it available.</p>
  <hr/>
  <h3>Attacking:</h3>
  <p><b>Attack Rolls:</b><br/>
  On a critical success (a Natural 20 on a d20 attack roll), the attack automatically succeeds to hit the target (up to your GMs discretion if the target is hittable at all) and deals additional damage equal to the maximum value of the largest die in the attack. Then do an additional effect related to the type of damage in the list below. Also you gain 1 XP. On a critical fail (a Natural 1 on a d20 roll), the attack automatically fails to hit the target and it is considered a Hard Fail, your GM may give stronger consequences than a regular Hard Fail.<br/>
  Otherwise, on a Hard or Soft Success you hit the target. Powers may specify extra effects for Hard or Soft Successes. On a Soft Fail you miss your attack. On a Hard Fail you miss your attack and have a meaningful consequence.<br/><br/>
  <b>Melee rules:</b><br/>
  As a Full Action you may attempt to Attack a single creature within Melee range (5 ft by default, may be different depending on your <Link to="/rules/exploration">Size</Link>). If you have a Melee weapon in your hands you may roll a Martial Arms check vs their Avoidance to use the weapon to Attack, or else roll an Unarmed Combat check vs their Avoidance. If you succeed deal the damage described by the weapon used, or deal 1d4 + Strength blunt damage if you are using Unarmed Combat.<br/><br/>
  <b>Ranged rules:</b><br/>
  As a Full Action you may attempt to Attack a single creature. You must have a Ranged weapon in your hands, and the enemy must be within the range listed on the weapon. Roll a Marksmanship check vs their Avoidance to use the weapon to Attack. If you succeed deal the damage described by the weapon used.<br/><br/>
  <b>Power rules:</b><br/>
  As an Action you may attempt to Attack creatures (the Action used, range required and number of creatures are described by the Power). If the Power does not specify a Skill or Attribute used in a check, roll a Power check vs their Avoidance. On a success, deal the damage and/or apply the effect described by the Power used.</p>
  <hr/>
  <h3>Targeting Types:</h3>
  <p>
  <b>Single Target:</b> Only affects 1 creature/object.<br/>
  <b>In a Radius or Within x ft:</b> If no shape or center point is given, assume it is a circle which is centered at the source of the effect.<br/>
  <b>Cone:</b> A 90 degree cone in the direction the source of the effect is facing, anything past 45 degrees to the left or right of the faced direction will not be caught in the effect.<br/>
  <b>Point at:</b> The creature must make some form of gesture to designate a single point within line of sight.<br/>
  <b>Line:</b> In a chosen direction, all creatures/objects between the source and a point at the end of the effect's range in that direction are caught in the effect.</p>
  <hr/>
  <h3>Grappling:</h3>
  <p>While Grappled a creature cannot make Full or Movement Actions on their Turn. You may initiate a Grapple by rolling an Unarmed Melee Attack, and if you hit instead of dealing damage you enter a Grapple contest with the target. Roll Strength vs their Agility, on a Hard Success you succeed in Grappling them, on a Soft Success they are Grappled for only one turn. On a Soft Fail they are not Grappled, on a Hard Fail they are not Grappled and you lose your React for this Round.<br/>
  If you succeed in Grappling them, on each of your turns you must spend your Minor Action to maintain the Grapple. On each of the creature's turns they may reroll their Agility check vs your original Strength roll. If they Succeed they end the Grapple. If they Fail they add a Favored +1 to their next attempt (up to +3).</p>
  <hr/>
  <h3>Blocking:</h3>
  <p>You may spend a Minor Action to begin Blocking, you may attempt Block checks against any attack which hits you until your next Turn. Block checks are done by rolling [Block + Strength] vs the result of the attack roll which hit you. On any Success, you reduce the damage amount of the attack by the difference between the rolls. On a Hard Fail, you are no longer Blocking.</p>
  <hr/>
  <h3>Prone:</h3>
  <p>If you fall or are knocked to the ground you are Prone. While Prone you cannot use your Full or Movement Actions. When rolling your Speed dice at the start of a round, if you are Prone the result is reduced by half. On your turn you may stand up and end the Prone effect as a Minor or Movement Action. While you are Prone, enemy attacks are Favored +1 against you. Your defensive rolls while prone are considered a Hard Fail when you roll a Soft Fail.</p>

</div>
}
