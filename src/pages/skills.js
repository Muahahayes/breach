import React from 'react';
import { Link } from 'react-router-dom';
export default {
  name: "SKILLS",
  content: <div>
  <p>
  <span>Increases the result of d20 rolls which attempt to accomplish some task. All Skills start at 0 and are increased by the starting points given by your Race and by gaining <Link to="leveling">XP</Link> from when you Hard Succeed.</span><br/>
  <br/>
  <span><b>Hard/Soft Rolls:</b></span><br/>
  <span>When you roll a d20 to pass a check, there are 4 different tiers of results. A <b>Hard Success</b> occurs when your roll + relevant bonuses exceed the check by at least 5 or roll a Natural 20. A <b>Hard Fail</b> occurs when your roll + relevant bonuses fall short of the check by at least 5 or you roll a Natural 1. A <b>Soft Success/Fail</b> is when your roll + relevant bonuses fall within 5 points of the check.</span><br/>
  <span>When you roll to attempt to use a Skill, if you roll a <b>Soft Success</b> you accomplish your task with some kind of minor drawbacks or less effective result. If you roll a <b>Soft Fail</b> you do not accomplish your task. If you <b>Hard Succeed</b> you accomplish the task with no drawbacks. If you <b>Hard Fail</b> you do not accomplish the task and have a meaningful drawback or consequence.</span><br/>
  <span>Try to use Skill checks as a story telling moment. On a <b>Hard Success</b>, let the player tell you what happens next (within the scope of that one action's consequences). On a <b>Soft Success</b>, the GM tells what happens next (while keeping a neutral or positive overall outcome). On a <b>Soft Fail</b>, the player and GM can discuss what would happen next (while keeping a neutral or negative overall outcome). On a <b>Hard Fail</b> the GM tells what happens next (with possibly some extra penalties or consequences).</span><br/>
  <br/>
  <span><b>Limits:</b></span><br/>
  <span>The maximum points you may have in a Skill is 5x the number of Gifts you possess. If a Skill is at its maximum it cannot gain XP from a <b>Hard Succeed</b>.</span><br/>
  <br/>
  <span><b>Inspiring Expertise:</b></span><br/>
  <span>If a member of your party is a Gift level above you, their expertise inspires you. This grants 1 XP on any <b>Soft Succeed</b>. This effect only applies when you roll one of their 5 highest Skills and you are within 100 ft.</span><br/>
  <br/>
  <span><b>Skills:</b></span><br/>
  </p>
  <ul>
      <li>Mechanics (maintaining, repairing, or improving non-cybernetic technology)</li>
      <li>Cybernetics (maintaining, repairing, or improving cybernetic technology)</li>
      <li>Techno-craft (can find blueprints and craft advanced tools and weaponry)</li>
      <li>Athletics (running, jumping, climbing, swimming, and other aerobic activities that take specific skills)</li>
      <li>Charm (improving a person's opinion of yourself, not a specific moment)</li>
      <li>Persuasion (convincing a person to do an action or believe an idea, specific moment)</li>
      <li>Insight (recognizing when someone is lying or is hiding their intentions)</li>
      <li>History (knowledge of the background of an area, or the details of major events/figures)</li>
      <li>Logic (mental capability of finding patterns and solving structured puzzles)</li>
      <li>Marksmanship (expertise with ranged weapons)</li>
      <li>Martial Arms (expertise with melee weapons)</li>
      <li>Use Power (using your Powers to accomplish a task or attack a creature, or contesting the effect of an enemy Power)</li>
      <li>Block (reducing the damage of an attack)</li>
      <li>Unarmed Combat (expertise with your fists) </li>
      <li>Sneak (avoiding being noticed/found by others while moving)</li>
      <li>Hide (avoiding being noticed/found by others while staying still)</li>
      <li>Perception (passively noticing things in the surrounding area)</li>
      <li>Search (actively finding things in the surrounding area)</li>
      <li>Medicine (knowledge of medical science, expertise with medical equipment)</li>
      <li>Outdoorsman (survival skills in a natural environment)</li>
      <li>Urban (survival skills in an industrial environment)</li>
      <li>Street Talk (ability to interact with urban locals and gain information)</li>
      <li>Disruption (ability to distract or causes commotion in a group)</li>
      <li>Perform (ability to entertain or carry out an active artistic skill)</li>
      <li>Art (creation of a static/physical piece of art)</li>
      <li>Cooking (creation of edible foods/drinks)</li>
  </ul>
  <br/>
</div>
}