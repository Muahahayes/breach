import React from 'react';
import { Link } from 'react-router-dom';
export default {
  "name": "Races",
  "content": <div>
    <p>There are many races in the world. Any creature with a Will of at least 1, or is a member of a playable race listed below, is considered a person and is treated as a sentient entity. As the world became more globalized the languages of the world homogenized within each race, many races in modern times only have one common language. If a person knows a language that another person knows, they may communicate between each other in any verbal or written form available to them. Each race has its own unique culture and opinions of the other races, examples will be given in this section but your GM may replace these descriptions with their own or even replace races completely within the format!<br/>
    Some Races have Subraces, which are variations of the Race and have a few additional Racial Features. If a Race has Subraces, you must select one and only one.</p>    
    <p>Each race has a description with this format:</p>
    <ul>
      <li>Physical Build: The race's typical height, weight, lifespan, and other features.</li>
      <li>Base Stats: the starting value of your Attributes before adding AP</li>
      <li>Speed: the dice used for rolling your movement distance and turn order during combat</li>
      <li>Creation AP: this is how many AP you can spend on increasing your Attributes before gaining any Gifts, this is affected by Favored Attributes and the AP gained from leveling up is not.</li>
      <li>Favored Skills: when adding to the value of your Skills at character creation, if you do not select a Skill listed here it will cost 2 Skill Points per point added.</li>
      <li>Creation Skill Points: this is how many points you can spend on increasing your Skills, this is affected by Favored Skills.</li>
      <li>Languages: the languages you have learned before the story begins, the first language listed is your 'mother tongue' and is the most comfortable language they prefer to use.</li>
      <li>Racial Features: unique perks given by your Race with various effects.</li>
    </ul>
    <hr/>
    <h3>Races:</h3>
    <ul>
        <li><Link to="/races/human">Human</Link></li>
        <li><Link to="/races/sylvan">Sylvan</Link></li>
        <li><Link to="/races/darkin">Darkin</Link></li>
        <li><Link to="/races/aeth">Aeth</Link></li>
        <li><Link to="/races/halfling">Halfling</Link></li>
        <li><Link to="/races/giant">Giant</Link></li>
        <li><Link to="/races/trollkin">Trollkin</Link></li>
        <li><Link to="/races/pix">Pix</Link></li>
        <li><Link to="/races/atal">Atal</Link></li>
        <li><Link to="/races/kxi">Kx'i</Link></li>        
        </ul>
  </div>
}