import React from 'react';
import { Link } from 'react-router-dom';
export default {
name: 'Exploring the World',
content: <div>
 <h3>Awareness:</h3>
  Creatures cannot perform actions towards, or with the assumption of the existence of, another creature it is not aware of. If a creature is aware of another creature's existence but not its location it may perform actions which assumes it exists but may not target it directly. When a creature is in your line of sight (within 100 ft and the view is not obstructed) and not actively attempting to Hide you become aware of it and it's location. If you enter an area and a creature of a size smaller than you is in line of sight, not moving, and not attempting to be noticed, it will be Hiding by default. 
  <hr/>
 <h3>Lighting:</h3>
  The lighting condition of an environment come in 5 stages:
  <ul>
    <li><b>Harsh:</b> Unfavored -1 to rolls vs Avoidance. Unfavored -1 to Stealth/Hide rolls.</li>
    <li><b>Medium:</b> Good visibility, the default lighting condition if not otherwise stated.</li>
    <li><b>Low:</b> Favored +1 to Stealth and Hide rolls. Restricts your visual Awareness to 50 ft.</li>
    <li><b>Dark:</b> Favored +2 to Stealth and Hide rolls. Unfavored -1 to Search rolls. Restricts your visual Awareness to 20 ft.</li>
    <li><b>Pitch Black:</b> Favored +3 to Stealth and Hide rolls. Unfavored -2 to Search rolls. Restricts your visual Awareness to 0ft.</li>
  </ul>
  <hr/>
 <h3>Hiding or Sneaking:</h3>
  When a creature is not aware of another creature which has either entered its line of sight or has made a sound, the undetected creature may attempt to Hide. The creature rolls a d20 + Hide vs Awareness to remain undetected. If the creature is not moving, it may preemptively perform a Hide roll with a Favored +1 which will apply to the next Awareness or Search check as long as the creature does not move. If a creature suspects that something it is not aware of may be in its line of sight it may do a Search check vs the Hide check of the creature, on a Hard Success it is aware of the creature and its location, on a Soft Success it is only aware of its existence, and on a Fail it is not aware of the creature.<br/>
  When a creature is already detected by another creature, it may attempt to Sneak an Action. The creature rolls a d20 + Sneak vs Awareness, on a Hard Success the Action goes unnoticed, on a Soft Success the creature knows an Action occured but not what happened, and on a Fail the Action is noticed and identified. If a creature is already under scrutiny, the opposing Awareness check may be a Search check instead with a Favored +1.
  <hr/>
 <h3>Traveling:</h3>
  When not in combat you may move up to your travel distance (Stamina multiplied by 5 miles (if it is positive) plus 5 miles, subtract 1 mile for each negative stamina you have) in a day (usually only applicable when traveling long distances or traversing a city repeatedly in a day). Traversing over difficult terrain such as mountains, deserts or swamps limits your movement to half your normal distance. 
  <hr/>
 <h3>Sleeping and Breaks:</h3>
  When you sleep for at least 6 hours within an 8 hour period you experience a Full Sleep. A Full Sleep reduces all Heavy Injuries to Mild and heals all other Non-Extreme Injuries, fully restores your Survival, and may have benefits related to your Source. If you are woken early you recover 1 Mild or Moderate Injury for each hour you slept. <br/>
  When you sleep for at least 1 hour or spend 2 hours while exerting less than moderate physical effort without traveling you experience a Break. Taking a Break recovers 1 Mild or Moderate Injury, fully restores your Survival, and may have other benefits related to your Source.<br/>
  While you are Sleeping, you are not aware of your surroundings. Noises or mild physical interaction may wake you, if you are trying to stay asleep through interruptions roll a [d20 + Stamina] vs 15 to resist waking up. If you voluntarily want to be woken by disturbances while out of combat roll a [d20 + Awareness] vs 15, or vs the sneak of a creature if it is the source of the disturbance, to wake up and gain awareness of the source of the disturbance. If you are in combat and voluntarily want to be woken by disturbances roll a [d20 + Will] vs 15, or vs [the attack roll - damage dealt] if you are hit by an attack which deals damage, if [the attack roll - damage dealt] is less than 1 you wake up instantly. When you are woken by a disturbance and did not already take a turn in this round you are placed at the end of the round's turn order with 0 Movement distance for that turn.<br/>
  <hr/>
 <h3>Size:</h3>
  Creature's come in many shapes and sizes. When moving, you may only pass through another creature's space if you are not in the same Size Tier. Gain an Unfavored -1 reduction when initiating a Grapple against a smaller creature, but gain a Favored +1 bonus when maintaining the Grapple. When a creature of a higher Size category is standing between you and an attacker, the attacker gains an Unfavored -1 to ranged attacks and powers against you.<br/>
  <ul>
    <li>Tiny: Less than 2' tall/long.</li>
    <li>Small: 2'-5' tall/long.</li>
    <li>Medium: 5'-8' tall/long.</li>
    <li id="hunger">Large: 8'-12' tall/long.</li>
    <li>Huge: 12'-20' tall/long.</li>
    <li>Gigantic: More than 20' tall/long.</li>
  </ul>
  <hr/>
  <h3>Hunger:</h3> 
  Your character needs food and water to live. Your character requires 5 Water Points (WP) and 5 Food Points (FP) in every 3 day period. (Food points can be thought of as about 1,000 calories, for ease of play they are simplified and food from official sources are given FP instead. For homebrewing new foods follow a 1,000 calorie per 1 FP rule of thumb. Water is simplified to about 1 WP per quart/liter). <br/>
  You may miss 1 time period for Food, but during that time your Attributes suffer an Unfavored -1 penalty, if you meet your skipped time period's quota the penalty goes away and you start to apply FP to the current time period. You may go 1 day over your Water time period, but during that time your Attributes suffer an Unfavored -1 penalty. If you meet the extended period's quota the penalty goes away and you start to apply WP to the current time period. <br/>
  These timeframes start from the beginning of the game and trigger every 3 days. If you go 1 period over your Food period or 1 day over your Water period without meeting the quota you become unconscious until you are force fed the required Food or Water. If you go 1 more period while unconscious you die of starvation/dehydration. <br/>
  Example: Jimmy has drank 4 WP in a 3 day period and begins his 4th day. He receives then Unfavored -1 penalty. He drinks 1 more WP by the end of the day and the penalty goes away, but now he needs 5 WP before the end of 2 more days or the penalty will return.
  <hr/>
  <h3>Scavenging:</h3>
  While exploring the world you may search for useful objects from your surroundings. The GM may have a list of objects planned for the area with difficulties to find (for low quality/cost or obvious materials a 10, for medium or hidden a 15, for high quality or well hidden a 20 is suggested. For rare or more powerful objects the check can go up to 25 or can have specific requirements to find). Roll an Urban or Outdoorsman Skill check for urban/non-urban environments vs the difficulty to find.<br/>
  If the GM does not have a list planned they may roll on the scavenge table (found in the GM's Guide) to determine what is found and what the difficulty is.<br/>
  While in an urban environment, you may use the Urban Skill to search for sources of food and water in your surroundings. To search for commercial sources, roll Urban vs [10]. To search for free sources (unattended food, dumpster diving, soup kitchens) roll Urban vs 20. Your GM may change the difficulty for narrative reasons based on the standard of living in the city.<br/>
  While in a non-urban environment, you may use the Outdoorsman Skill to search for sources of food and water in your surroundings. The difficulty check is dependant on how difficult the climate and terrain is (for a GM figuring it out, for a more dry and sparsely vegetated environment try a 15 for food and 20 for water, for a more wet and well vegetated environment try a 10 for food and 15 for water. On soft succeeds give your players dirty water and low FP value food)
  <hr/>
  <h3>Investigation and Searching:</h3>
  When there is information or a clue in the immediate area, you may roll an Investigation check to find/discover it. The GM may choose an appropriate difficulty for this check depending on how obscure/hidden it is or how difficult it is to recognize the clue. Investigation applies to things "hiding in plain sight" such as looking through papers or finding a symbol on a tapestry and is not the same as finding a hidden object in an unknown location.<br/>
  When you suspect an object may be in your surroundings, you  may roll a Search check to find it. The GM may choose an appropriate difficulty for this check depending on how well hidden the object is or how wide your Search area must reach.
  <br/>
  <hr/>
  <h3>Currency:</h3>
  The Urban society uses a currency called Virtua, a cryptocurrency that is stored in the Psi Network. Non-psychics must visit a Broker to check on their balance. Citizens are given a V-Chip to carry out transactions, a small card with a built-in crystal chip that resonates with the Psi Network. Two persons each holding their V-Chip against each other will resonate the chips, the person to speak a value will send that value to the other person's V balance on the network. The Consortium can check the network at any time to see transaction histories and the citizen's ID associated with the chips involved. Unmarked chips are made by illegal Brokers who trade materials or give a debt for non-citizens or citizens trying to be untracked to have a V-Chip without their ID. Unmarked chips still have a unique ID, and if the Consortium are able to associate the ID with you they may assign that ID to you and track you through your transactions.<br/>
  Outside of Urban society smaller villages or foreigners do not use Virtua. They may use bartering for physical goods, or trade in precious metals. In general, 1 piece of gold (unmarked, plain chunks of metal about the size of half your thumb, some Dukedoms may mint their own coin but the value is determined by weight when trading across regions) is worth 10 Virtua. 1 piece of silver is worth 5 Virtua.
  <hr/>
  <h3>Climate:</h3>
  Various environmental factors may have an effect on creatures. For each round in combat, or each 10 minutes out of combat, apply the current Climate's effects to creatures within the area of effect. Types of Climate may be combined and cause multiple effects at once. Some tools, Powers, or proficiencies can protect against Climate.<br/>
  Hot: Exceptionally hot temperatures, 110°F or higher. Take 1d4 Fire damage for every 10°F above 100. The heat exhausts the creatures causing all d20 rolls to receive an Unfavored -1 penalty. Shelter raises the threshold by 20°F.<br/>
  Cold: Exceptionally cold temperatures, 0°F or lower. Take 1d4 Cold damage for every 10°F below 10. The cold slows the creatures, reducing travel distance by 1 mile and Speed by 1 for every 10°F below 10 (to a minimum of 1 mile of travel and a Speed of 1). Shelter lowers the threshold by 20°F.<br/>
  Stormy: Extreme winds buffet against the creatures, 50mph or higher. Roll an Athletics check vs 15, if you fail you fall Prone. Shelter's may collapse at 70mph, every hour roll a d20 vs 10, on a fail the shelter is destroyed. Increase both checks' difficulty by 1 for every 10mph.<br/>
  Fog: Thick fog obscures vision. All d20 rolls involving sight receive an Unfavored -1 penalty. Limit sight ranges by half.<br/>
  Wet: Increase the dice size of Hot and Cold Climates to d6's. Unprotected food may spoil, if you are not sheltered during a sleep roll a d4. On 2 half, and on 1 all, of your food is destroyed.<br/>
  Dry: Reduces the time needed to drink your Water quota by 1 day (to a minimum of 1 day).
  <hr/>
  <h3>Shelter:</h3>
  You may spend 30 min setting up a tent or other form of shelter (you may need to scavenge for supplies). You are protected from various Climate effects while you are inside your shelter.
  <hr/>
  <h3>Downtime:</h3>
  If a player spends a full day without engaging in combat, travelling more than 5 miles, or rolling a Skill check they may practice a Skill (recommended to RP or briefly explain what they are doing to practice that Skill). Roll a d10, on a 6 or greater they gain 1 XP using that Skill. On a 5 or lower, they may add 1 to their next downtime practice roll (stacking up to 5). A player may only gain up to 1 Proficiency amount of XP during consecutive downtime days.
  <hr/>
  <h3>Real Estate:</h3> (based on regional standard of living, more to read later) 
  <hr/>
  <h3>Vehicles and Mounts:</h3> (adds to your movement distance while in combat and is needed for some techniques, must move at least half your movement or Brake, while Braked the next move is reduced by half as your vehicle starts moving again. Write additional out of combat stuff about using it and maintaining it. Adds x miles to travel distance)
</div>
}