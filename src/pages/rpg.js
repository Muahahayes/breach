import React from 'react';
import { Link } from 'react-router-dom';
export default {
  name: "What's a Tabletop RPG?",
  content: <div>
    <p>
      A Tabletop Roleplaying Game (RPG) is a game played with other players focused on creating a shared story. There are two types of participants in a game, a Game Master (GM) and a party of Players. 
      The GM controls the world of the game, they are responsible for creating scenarios and events for the Players to respond to. They craft the environment and control the flow of the story.
      The Players each control a Character, a person who exists within the GM's world and is the vehicle in which the Player explores and interacts with that world. Through their Character, they are the protagonists of the story and navigate through the narrative provided by the GM.<br/>
      Remember, this story is told <i>collaboratively</i> between the Players and the GM. The GM will present a situation to the Players, and the Players will voice some action they wish their Character to take. After rolling dice and using their Character's capabilities, the RPG system will determine how successful the Character's action is.
      This is the primary difference between an RPG and simply sitting in a circle telling stories, and because there is luck and a mechanical system involved no single person has absolute control over the story and unexpected outcomes occur fairly regularly. Don't be scared of this! This uncertainty is a catalyst to push the Players to think creatively and move forward to make a better outcome for their Character and their story.<br/>
    </p><hr/>
    <h3>Characters</h3>
    <p>
      Your Character is your primary tool for interacting with the world and your group's story. Visit the <Link to="/pages/creation">Character Creation</Link> page to see the details for creating your Character.
      A Character is a person who lives within the world of the game. They have their own story and identity. While playing the game you (the Player) do not exist within the world, but you can pilot your Character to Roleplay (the RP in RPG) as a person living within the world.
      To interact with the world you must use your Character, to move a boulder you'd say something like "They push against the boulder and try to move it" and then the GM will (using dice and your Character's <Link to="/rules/skills">Skills</Link> and <Link to="/rules/stats">Attributes</Link>) determine if your Character successfully moved the boulder.
      Your Character can also interact with other people in the world, or even other Players' Characters. You'd speak for your character, and take part in dialogue to interact socially within the world. Through all these interactions you may choose to voice your actions and dialogue in First or Third person ("I" or "They"), either style is great and depends on your comfort and fun.
    </p><hr/>
    <h3>Mechanics</h3>
    <p>
      The primary method for determining the results of your Character's actions is through Rolling Dice and using Skills. Breach uses what is called Polyhedral Dice, meaning it uses a collection of different sized Dice for its system. These dice are a four sided die (d4), a six sided die (d6, the classic die you'd find in a board game), an eight sided die (d8), a ten sided die (d10), a twelve sided die (d12), and a twenty sided die (d20).
      This selection of dice (d4, d6, d8, d10, d12, d20) is found in many game shops and is standard in many other Tabletop RPGs such as Dungeons and Dragons (D&amp;D). Most of these dice are primarily used in <Link to="/rules/combat">Combat</Link> (any type of conflict between two or more creatures that resolves using violence), while most interactions that occur outside of Combat are <Link to="/rules/skills">Skill</Link> Checks which use the d20.
      To perform a Skill Check, you would voice what you are attempting to do and the GM will prompt you to roll a d20 and will tell you which relevant Skill to add to the result. Then, they will compare your overall result with how difficult the action is, and will narrate the resulting event.
    </p><hr/>
    <h3>Primary Takeaway</h3>
    <p>
      This is a game and is meant to be fun! If you are new to Tabletop RPGs, find a group willing to play and someone with experience with Tabletop RPGs to act as the GM. Make an interesting Character and focus on building a story together as a group, the mechanical details are secondary to the shared experience with friends and are only there to facilitate resolving actions in a fair manner. If you have questions don't be afraid to ask others, and feel free to make suggestions to your GM to make the world you are creating together feel alive and exciting to be a part of.
    </p>
  </div>
}