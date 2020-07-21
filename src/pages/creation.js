import React from 'react';
import { Link } from 'react-router-dom';
export default {
  name:"Character Creation",
  content: <div>
    <span>In Breach the characters Players create start off mechanically simple compared to other Tabletop RPGs. The customization and variety of character choices in Breach come from the leveling process, so to create a character from scratch at level 1 is very straightforward (to create a character of higher level, read further below).<br/></span>
    <h3>Creating a Character follows this 8 step process:</h3>
    <ul>
      <li><b>Write your 5 <Link to="/rules/quirks">Quirks</Link>:</b> It's best to have an idea of who your character is before you make mechanical choices to bring them into the game. If you end up with a character that doesn't fully fit your Quirks, you can come back and change these before you finish.</li>
      <li><b>Select your <Link to="/races">Race</Link> (and possibly a Subrace):</b> Choose a Race to represent your character, your character's appearance is cusomizable within the bounds of their race. Your character gains all of the racial features of that Race, and base stats.</li>
      <li><b>Assign your <Link to="/rules/stats">Attribute</Link> Points:</b> Using the Creation AP from your Race, distribute these points across your 4 Attributes.</li>
      <li><b>Calculate your <Link to="/rules/stats">Life and Survival</Link>:</b> Your character starts with a maximum of 5 Life. Increase or decrease your Life by an amount equal to your Stamina (to a minimum of 1 Life). Your character starts with a maximum of 10 Survival. Increase or decrease your Survival by an amount equal to your Stamina (to a minimum of 5 Survival).</li>
      <li><b>Assign your <Link to="/rules/skills">Skill</Link> Points:</b> Using the Creation SP from your Race, distribute these points across your Skills. A Skill may never be more than 5 times your level. If a Skill is not listed in your Race's Favored Skills, it costs 2 points for every Skill point increased. Any Skills you did not assign points to will start at 0.</li>
      <li><b>Select your <Link to="/sources">Source</Link>:</b> This Source will be the origin of your character's Gifts, it sets them apart from the common public.</li>
      <li><b>Select your first <Link to="/gifts">Gift</Link>:</b> You may only select Gifts from your Source, and it must be [1 G]. As you level up you will select a new Gift at each level, and it must be a [G] equal or less than your level.</li>
      <li><b>Starting <Link to="/equipment">Equipment</Link>:</b> Refer to the Equipment tables, you may spend up to 200 Virtua on Equipment which your character will start their story possessing. You may not spend more than 100 Virtua on a single piece of Starting Equipment.</li>
    </ul>
    <hr/>
    <h3>Creating a Character at higher levels:</h3>
    <span>Consult the chart at the bottom of the <Link to="/rules/leveling">XP and Leveling Up</Link> page. Increase your maximum Survival by your Stamina times your Level and for every even numbered level you <i>skipped</i> increase one Attribute by 1. For each level you <i>skipped</i> add together the Proficiencies. Distribute this value across your Skills, keep in mind a Skill may never be more than 5 times your level. Then, for each level you <i>skipped</i> select a new Gift with a [G] equal or less than that level, and distribute that level's Proficiencies across your current Gifts and Source. Finally, select a new Gift with a [G] equal or less than your current level, and if your level is even numbered increase one Attribute by 1.</span>
    <hr/>
    <h3>Example Character Build:</h3>
    <span>Bob wants to play Breach with his friends, but he needs a character first! Bob's always been a fan of sneaky lizard races in his RPG playing, so he names his character Argo and writes 5 Quirks that describe him as a thief who upset a crime syndicate and is now on the run.
      He selects the Atal race, specifically the Akkso'Atal subrace and he writes down the Atal racial features as well as the Akkso features. He has 3 AP to distribute, he puts 2 into Agility and 1 into Stamina so he is sneaky but has some more survivability. He has 2 Stamina, so he has 3 + 2 maximum Life and 10 + 2 maximum Survival.
      Next, Bob looks at the 8 Skill Points given by the Atal race. He puts 5 into Hide (his limit is 5 at level 1, since Skills cannot go above 5 times your level) and the remaining 3 into Sneak. Now his character Argo is sneaky and can be a more effective "Thief", the arbitrary Role Quirk he had written.
      Now that Bob's character has an identity, race, and skills, he looks at the Sources to find one that best fits the playstyle he's going for. He likes the Dermal Markings Gift because of its Hide boosting Proficiency called Camouflage, along with some other melee focused abilities in the Mutation Source, so he selects Mutation. 
      He looks through Mutation's [1 G] Gifts and settles on Retractable Claws as his first choice, it helps him in combat right away and he can pick up Dermal Markings at level 2 when he wants more utility.
      Finally, Bob looks through the Equipment Table and spends his 200 Virtua on 2 Shivs, a Light Bow, and a Dx100 PD. The remaining Virtua he spends on some tools and ammunition. Bob fills out his character sheet with these choices and can now take Argo to the table to play with his friends next weekend, creation is complete!
    </span>
  </div>
}