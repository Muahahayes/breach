import React from 'react';
import { Link } from 'react-router-dom';
export default {
name: 'Combat',
content: <div>
  <p>Combat begins when a conflict between two or more creatures is resolved with violence. A Round starts and there continues to be new Rounds after each Round finishes until either all creatures still conscious are allied, or all creatures have voluntarily given up on fighting. A creature may choose to give up on fighting at any time and forfeit their next turn, and may continue to forfeit turns. </p>
  <hr/>
  <h3>Turns and Rounds:</h3>
  <p>Combat is divided into moments in time called Turns, Rounds, and Phases. All players take Turns doing actions until the Combat has ended. <br/><br/>
  <b>Rounds:</b><br/> A collection of Turns, each creature takes 1 Turn in order and the Round concludes after each creature has finished their Turns. At the start of a new round every creature rolls their Speed dice and add any Movement bonuses to determine the maximum distance of their Movement Action and add any Initiative bonuses to the roll to determine order in the next Round. Then, all creatures go in order and decide if they wish to use their Movement Action or not and where they would like to move. After movement has concluded, each creature takes its turn in order and uses its Actions (Movement Actions may not be used during a regular Turn).<br/><br/>
  <b>Turns:</b><br/> A segment of time about 5 seconds long. Creatures may use their Full Action(s) during their Turn, if they did not move during the start of the Round they may use an additional Full Action. The order in which creatures take their turn is determined by the Speed they rolled for the current round. A tie between players and non-player creatures always favors the player. A tie between players may be decided by the group of players at the moment the turn is available (to settle disagreements roll a d20 contest to break the tie). If a player has minions/pets they may do those actions in any order after their character has finished their turn.</p>
  <hr/>
  <h3>Actions:</h3>
  <p>If a Skill, Technique, Power, or other thing you do tells you to use a type of Action see the rules for each listed below. If it tells you that you may do it as a "free action" or "at will" it does not need an Action and may be done without spending one.<br/><br/>
	<b>Full:</b><br/> Sometimes just called Action, with a Full Action you can Attack, use some Powers, Grapple, or interact with objects on your turn. All characters may use their Action on their turn to begin Blocking. If you choose to not move during the start of a Round you may do an additional Full Action. You may not use a Full Action to do the same Action you have done previously in the turn. As a rule of thumb, anything that takes more than 1 second of effort will take a Full Action, and anything that takes more than 5 seconds will take an additional Full Action each turn for each 5 seconds of effort.<br/><br/>
	<b>React:</b><br/> You can use some Powers or a readied Full/Movement Action on another creature's turn. To ready an Action on your turn to use as a React Action you must declare the Action and declare what Action another creature does or other event will trigger your Action. This uses your Action on your current turn, and uses your React when it is triggered. Movement done in this way is limited to half your available movement distance.<br/><br/>
	<b>Movement:</b><br/> You may move along the ground (or air if you have a flight speed) in the world. Roll your Speed dice and multiply the result by 5 ft to determine your maximum distance during this action (this usually comes from your Race, and may be increased by Powers or decreased by some statuses or effects).<br/><br/>
  If you are able to Fly you may choose to Fly or move along the ground whenever you use a Movement Action, you remain airborne and flying until you choose to land on your turn as a Free Action (while within 5 ft of the ground), start moving on the ground, become Prone, or become Unconscious or Asleep. While flying you ignore rough and uneven terrain, unless it is caused by wind effects.<br/><br/>
 	Travelling over rough or uneven terrain, climbing, or swimming limits your movement to half your Speed dice while traversing. Swimming requires an Athletics check [10] after each turn in the water or you will begin drowning (you will be snared and if you are not saved or do not succeed another Athletics check [15] within LVL turns you will become unconscious in the water. 10 minutes of this will result in your death. You may be saved by another creature succeeding an Athletics check [15] which will allow you to continue swimming).<br/><br/>
	You may choose to jump instead of moving along the ground. You may jump [3 * Strength] ft upward, and you may jump horizontally up to half your maximum movement distance.<br/><br/>
  <b>Activation:</b><br/> Some proficiencies, passive effects, techniques, or items may require an Activation Action. This is separate from your Full Action, may only be used once per Round, and cannot be readied on its own as a Reaction. However, if a readied Full or Movement Action requires an Activation Action as a base cost of doing the Action or a Power specifies a trigger for the Activation Action it may be used if you still have it available.</p>
  <hr/>
  <h3>Attacking:</h3>
  <p><b>Attack Rolls:</b><br/>
  On a critical success (a Natural 20 on a d20 attack roll), the attack automatically succeeds to hit the target (up to your GMs discretion if the target is hittable at all) and deals additional damage equal to the maximum value of the largest die in the attack. Then do an additional effect related to the type of damage in the list below. Also you gain 1 XP. On a critical fail (a Natural 1 on a d20 roll), the attack automatically fails to hit the target and it is considered a Hard Fail, your GM may give stronger consequences than a regular Hard Fail.<br/>
  Otherwise, on a Hard or Soft Success you hit the target. Powers may specify extra effects for Hard or Soft Successes. On a Soft Fail you miss your attack. On a Hard Fail you miss your attack and have a meaningful consequence.<br/><br/>
  <b>Melee rules:</b><br/>
  As a Full Action you may attempt to Attack a single creature within Melee range (equal to your Height rounded up to the nearest foot. Simplified rules use a default of 5 ft.). If you have a Melee weapon in your hands you may roll a Martial Arms check vs their Avoidance to use the weapon to Attack, or else roll an Unarmed Combat check vs their Avoidance. If you succeed deal the damage described by the weapon used, or deal 1d4 + Strength blunt damage if you are using Unarmed Combat.<br/><br/>
  <b>Ranged rules:</b><br/>
  As a Full Action you may attempt to Attack a single creature. You must have a Ranged weapon in your hands, and the enemy must be within the range listed on the weapon. Roll a Marksmanship check vs their Avoidance to use the weapon to Attack. If you succeed deal the damage described by the weapon used. If a creature is behind a solid object of at least half their height, gain Unfavored -1 to the attack.<br/><br/>
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
  <p>While Grappled a creature cannot make Full or Movement Actions on their Turn. You may initiate a Grapple by rolling an Unarmed Melee Attack, and if you hit instead of dealing damage you enter a Grapple contest with the target. Roll Athletics vs their Athletics or Acrobatics, on a Hard Success you succeed in Grappling them, on a Soft Success they are Grappled for only one turn. On a Soft Fail they are not Grappled, on a Hard Fail they are not Grappled and you lose your React for this Round.<br/>
  If you succeed in Grappling them, on each of your turns you must spend a Full Action to maintain the Grapple. On each of the creature's turns they may reroll their check vs your original Athletics roll. If they Succeed they end the Grapple. If they Fail they add a Favored +1 to their next attempt (up to +3).</p>
  <hr/>
  <h3>Blocking:</h3>
  <p>You may spend a Full Action to begin Blocking, you may attempt Block checks as a Free Action against any attack which hits you until your next Turn. Block checks are done by rolling [Block + Strength] vs the result of the attack roll which hit you. You may only Block if you are holding a melee weapon or <Link to="/equipment/aegis">Aegis</Link>. On any Success, you reduce the damage amount of the attack by the difference between the rolls plus an additional amount based on your Aegis. On a Hard Fail, you are no longer Blocking.</p>
  <hr/>
  <h3>Prone:</h3>
  <p>If you fall or are knocked to the ground you are Prone. While Prone you cannot use your Movement Action except to stand up, and you begin your turn with only 1 Full Action. When rolling your Speed dice at the start of a round, if you are Prone the result is reduced by half. On your turn you may stand up and end the Prone effect as a Movement Action. While you are Prone, enemy attacks are Favored +1 against you. Your defensive rolls while prone are considered a Hard Fail when you roll a Soft Fail.</p>
  <hr/>
  <h3>Opportunity:</h3>
  <p>Whenever a creature moves out of your melee range you may take an Opportunity. This Opportunity may be used to Impede, Attack, or Chase. When you Impede you reduce their Movement Distance by 5 ft. When you Attack you may make 1 basic melee attack against the creature. When you Chase you may move 5 ft in the direction the creature is moving.</p>
</div>
}
