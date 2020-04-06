import React from 'react';
import { Link } from 'react-router-dom';
export default {
  name:"What's New in Breach?",
  content: <div>
    <p>If you've played similar Tabletop RPG games before, this section will go over what to expect from a session of Breach. We'll start with what's the same in brief, and then go over what's new in detail.</p>
    <hr/>
    <p><b>What's the Same?</b><br/>
    Breach is an action/adventure style RPG where you cooperatively create a story with a group of players and a GM (Game Master, some RPG's may call this a Dungeon Master or something similar). There are pre-written campaigns made by the Breach team for your GM to run, or they may choose to come up with their own story and setting! You can bring your same bag of dice to the table, Breach uses the classic polyhedral set of d4, d6, d8, d10, d12 and d20 dice. Just like other Tabletop RPGs, the story is driven by players voicing an action and then rolling dice to determine the result.<br/>
    <br/>
    Here's a short list of other game mechanics that may look familiar</p>
    <ul>
     <li><b>AC:</b> We call this Avoidance.</li>
     <li><b>HP:</b> We call this Life and Survival, and its a bit different this time around so read more below!</li>
     <li><b>Attributes:</b> There's a few missing in Breach, we'll detail why below.</li>
     <li><b>Levels and Experience:</b> We call this Gifts and XP.</li>
     <li><b>Races:</b> There may be a different selection than you're familiar with, but there's a variety of different types of character to express yourself with!</li>
     <li><b>Skills:</b> These are more important than ever and factor directly into your leveling process!</li>
     <li><b>Aspects/Personality:</b> We call these Quirks, and it has a mechanical effect on the game.</li>
    </ul>
    <hr/>
    <p><b>What's New?</b><br/>
    Now you might be saying "Hold on, where's Classes? or Initiative? and what was that about HP being different and some Attributes missing?", well hold onto your seat as we go over the changes in Breach.<br/>
    <br/>
    <b>Classes:</b> Gone! (See <Link to="sources">Sources</Link>)<br/>
    Instead of Classes, we have something called your Source. Don't think of this as a direct replacement though. Sources are not as regimented as a Class.
    When you create your character you select what Source your character gains their Gifts from. A Gift is some kind of power or ability that sets them apart from the average person. Every time you gain enough XP to level up, you select a new Gift from your chosen Source. There's plenty to choose from within each Source, so you can be a lot more freeform with developing your abilities than a typical Class in other RPGs.
    To supplement the Source and Gift system, we have something called Proficiencies. As you gain XP, you'll have opportunities to pick Proficiencies from the Gifts you possess. Think of these as passive bonuses or smaller sub-abilities (or Talent Trees from Video Game RPGs) that you can unlock from your existing Gifts.<br/>
    <br/>
    <b>HP:</b> Split in two! (See <Link to="/rules/stats">Stats</Link>)<br/>
    The classic system of having a raw chunk of health to slowly wittle down sounded boring and didn't make much sense to us. Have 20 arrows sticking out of you? That's just fine! Did a 21st arrow hit your arm? You're dying on the ground! So we split HP into two stats, Life and Survival.
    Life measures how alive you are, and how close to death you are. Whenever you lose 1 point of Life, you get more injured and receive various penalties. If it hits 0, you're on the ground dying unless you get some help!
    Survival measures your toughness and luck, and comes between your precious Life and those arrows that want to take it away! Whenever you receive damage, it applies to your Survival first. If your Survival hits 0 you subtract 1 from your Life and reset your Survival.
    With this 2 part system, we can make better sense of the arrows turning your character into a pin-cushion! The first couple arrows hit but get caught in your armor or don't hit anything vital and you can shrug it off, but every couple of arrows manage to hit something important and leave behind a meaningful effect!<br/>
    <br/>
    <b>Attributes:</b> Trimmed down! (See <Link to="/rules/stats">Stats</Link>)<br/>
    We've reduced the core attributes to 4 stats. Strength, Agility, Will and Stamina.
    For D&amp;D players, Will is a pseudo replacement for Wisdom and partially Charisma, the social aspects of Charisma are now purely based on Skills.
    Intelligence is gone and lives on in numerous Skills showing specific ways of being intelligent.<br/>
    <br/>
    <b>Initiative:</b> Reworked! (See <Link to="/rules/combat">Combat</Link>)<br/>
    In Breach, every round of combat the creatures involved roll their Speed to determine how far they can move during their turn. The turn order is based on the highest to lowest movement distances of the creatures. This means we have a Dynamic Turn Order, which can change each round.<br/>
    <br/>
    <b>XP:</b> Now with less murder-hobo! (See <Link to="/rules/leveling">XP</Link>)<br/>
    In Breach you no longer gain XP from killing. Instead, it's tied into the Skill system. When you Hard Succeed or Hard Fail at a Skill check, you gain 1 XP. Every 5 XP you can pick a Proficiency from your Source/Gifts and a Skill increases by 1.
    You can still gain XP from combat, because most ways of attacking rely on Skill checks. But now, there's other ways of leveling up. Ever wanted to play a merchant or a thief (that didn't need to kill?), now you can level and keep up with the party without shedding a drop of blood!<br/>
    <br/>
    <b>Succeed/Fail:</b> Hard what? (See <Link to="/rules/skills">Skills</Link>)<br/>
    Ever feel like RPGs tend to be too binary? Breach has 2 levels of success and failure, called Hard and Soft. Whenever you surpass a Skill check by more than 5 we call that a Hard Success, and a Hard Fail is when you fall more than 5 short of a pass. That 5 point area around the pass is where Soft Success and Failure lives.
    A Hard Success means you pass it, no strings attached! A Soft Success means you pass it, but there might be a drawback or consequence. A Soft Fail means you failed, but the outcome could have been worse! Finally, a Hard Fail is where you fail and it goes worse, your GM can get creative with dishing out punishment for these.<br/>
    <br/>
    <b>Socializing:</b> Time to get Persuasive! (See <Link to="/rules/socializing">Socializing</Link>)<br/>
    Persuasion is no longer a binary pass/fail to completely change a character's mind. Now we use something called Arguments, where you roll Skill checks back and forth to come to an agreement. 
    This is supported by another system called Charm and Regard. You can Charm someone to increase their Regard for you, and the higher their Regard the more likely they are to support and trust you.<br/>
    <br/>
    </p>
  </div>
}
