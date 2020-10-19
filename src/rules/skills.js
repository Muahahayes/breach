import React from 'react';
import { Link } from 'react-router-dom';
export default {
  name: "Skills",
  content: <div>
  <span>A Skill increases the result of d20 rolls which attempt to accomplish some task. All Skills start at 0 and are increased by the starting points given by your Race and by gaining <Link to="leveling">XP</Link> from when you <b>Hard Succeed</b> or <b>Hard Fail</b>.</span><br/>
  <hr/>
  <h3>Hard/Soft Rolls:</h3>
  <span>When you roll a d20 to pass a check, there are 4 different tiers of results: <br/>
    A <b>Hard Success</b> occurs when your roll + relevant bonuses exceed the check by at least 5 or roll a Natural 20. <br/>
    A <b>Hard Fail</b> occurs when your roll + relevant bonuses fall short of the check by at least 5 or you roll a Natural 1. <br/>
    A <b>Soft Success/Fail</b> is when your roll + relevant bonuses fall within 5 points of the check.</span><br/><br/>
  <span>When you roll to attempt to use a Skill: <br/>
    if you roll a <b>Soft Success</b> you accomplish your task with some kind of minor drawbacks or less effective result. <br/>
    If you roll a <b>Soft Fail</b> you do not accomplish your task. <br/>
    If you <b>Hard Succeed</b> you accomplish the task with no drawbacks. <br/>
    If you <b>Hard Fail</b> you do not accomplish the task and have a meaningful drawback or consequence.</span><br/><br/>
  <span>Try to use Skill checks as a story telling moment: <br/>
    On a <b>Hard Success</b>, let the player tell you what happens next (within the scope of that one action's consequences). <br/>
    On a <b>Soft Success</b>, the GM tells what happens next (while keeping a neutral or positive overall outcome). <br/>
    On a <b>Soft Fail</b>, the player and GM can discuss what would happen next (while keeping a neutral or negative overall outcome). <br/>
    On a <b>Hard Fail</b> the GM tells what happens next (with possibly some extra penalties or consequences).</span><br/>

  <hr/>
  <h3>Limits:</h3>
  <span>The maximum points you may have in a Skill is 3x your Level. If a Skill is at its maximum and the next XP you would gain would lead to all 5 Skill choices for your next increase being already their max value it cannot gain XP from a <b>Hard Succeed/Fail</b>. (ie. your Athletics and Crafstman are both already at 3 times your level, you have gained XP from Athletics twice and Craftsman twice, you cannot gain XP from either Skill until you have gained an XP and increased a different Skill.)</span><br/>
  <span>You may only increase at most 5 Skills above 15 points.</span>

  <hr/>
  <h3>Inspiring Expertise:</h3>
  <span>If a member of your party is a level above you, their expertise inspires you. This grants 1 XP on any <b>Soft Succeed</b>. This effect only applies when you roll one of their 5 highest Skills and you are within 100 ft.</span><br/>

  <hr/>
  <h3>Skill Contest:</h3>
  <span> When two creatures are opposing one another in an activity and are not resolving it through <Link to="combat">Combat</Link> or <Link to="socializing">Argument</Link> they enter a Skill Contest. Compare the skill values of both creatures for the skill they are contesting, this is their threshold of failing. The two creatures roll Skill checks against one another using the skill being contested, the victor is the higher skill roll, reroll on a tie. <br/>
  On a <b>Hard Success</b> by the victor, the loser temporarily loses skill equal to the victor's level doubled (do not gain XP for this roll). <br/>
  On a <b>Soft Success</b> the loser temporarily loses skill equal to the victor's level. When a creature drops below 1 in the Skill they lose the contest. <br/>
  After the contest, reset the Skill values to their starting value. The victor may make an action with that skill, the loser cannot interfere with the use of that skill. Both creatures receive 1 XP after the contest has ended.</span><br/>

  <hr/>
  <h3>Scenarios:</h3>
  <span>Short challenging moments that require multiple skill checks to overcome (navigating a vehicle through a chase, climbing a crumbling cliff side, repairing the mast on a ship in a storm, etc). May involve multiple creatures.<br/>
  If the players pass ¾ of the checks the overall scenario is a <b>Hard Success</b>, award a Proficiency and they succeed without consequences. <br/>
  If they pass ½ of the checks the overall scenario is a <b>Soft Success</b>, they succeed with some kind of compromise or cost. <br/>
  If they pass ¼ of the checks it's a <b>Soft Failure</b>, they don't succeed and have mild to moderate consequences. Then the story continues down a narratively reasonable path, probably a harder one or a plan B. <br/>
  If they pass less than ¼ of the checks it's a <b>Hard Failure</b>, they don't succeed and the GM can impose heavy penalties; kill a player, end the quest, whatever narratively makes sense. Award a Proficiency.</span><br/>

  <hr/>
  <h3>Concentrated Effort:</h3>
  <span>You may attempt a Skill check while taking some time out of combat to give it your best effort. After 30 minutes of deliberate effort and without any actions stopping your attempt, you may perform the Skill check as if you rolled a 15.</span>
  <hr/>
  <h3>Skills List:</h3>
  <ul>
      <li>Athletics (running, climbing, swimming, and other physical activities that require practiced use of non-flexible motions)</li>
      <li>Acrobatics (jumping, contorting, dodging, and other physical activities that require mobility and flexibility)</li>
      <li>Charm (improving a person's opinion of yourself, long term effect)</li>
      <li>Persuasion (convincing a person to do an action or believe an idea, short term effect)</li>
      <li>Insight (recognizing when someone is lying or is hiding their intentions)</li>
      <li>Social (knowledge of society and ability to interact with locals to gain information)</li>
      <li>Disruption (ability to distract or causes commotion in a group)</li>
      <li>Perform (ability to entertain or carry out an active artistic skill)</li>
      <li>Marksmanship (expertise with ranged weapons)</li>
      <li>Martial Arms (expertise with melee weapons)</li>
      <li>Use Power (using your Powers to accomplish a task or attack a creature, or contesting the effect of an enemy Power)</li>
      <li>Block (reducing the damage of an attack)</li>
      <li>Unarmed Combat (expertise with your fists) </li>
      <li>Sneak (avoiding being noticed/found by others while moving)</li>
      <li>Hide (avoiding being noticed/found by others while staying still)</li>
      <li>Awareness (passively noticing things in the surrounding area)</li>
      <li>Search (actively finding things in the surrounding area)</li>
      <li>Investigation (finding information or clues hiding in plain sight)</li>
      <li>Outdoorsman (survival skills in a natural environment)</li>
      <li>Urban (survival skills in an industrial environment)</li>
      <li>Medicine (knowledge of medical science, expertise with medical equipment)</li>
      <li>Nature (knowledge of biology, zoology and botony related sciences)</li>      
      <li>History (knowledge of the background of an area, or the details of major events/figures)</li>
      <li>Logic (mental capability of math, physical sciences and solving structured puzzles)</li>
      <li>Cosmology (mental capability of the stars, Aether, and related phenomena)</li>
      <li>Mechanics (maintaining, repairing, or improving technology)</li>
      <li>Craftsman (can find blueprints and craft advanced tools and weaponry)</li>
      <li>Runesmithing (can find blueprints to use Prismatic Gems to permanently apply Runic engravings upon objects)</li>
      <li>Art (creation of a static/physical piece of art)</li>
      <li>Cooking (creation of edible foods/drinks)</li>
  </ul>
  <span>Note: Some Skills may have more fleshed out details in common uses explained in the <Link to="exploration">Exploration</Link> page.</span>
</div>
}