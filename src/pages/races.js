import React from 'react';
import { Link } from 'react-router-dom';
export default {
  "name": "Races",
  "content": <div>
    <p>There are many races which now, after much time of racial turmoil that reverberates still to this day, inhabit our modern world alongside humanity. At first, Humans roamed the Earth in search of meaning without much hope of finding lifeforms of relative intelligence or willpower. Any creature with a Will of at least 0, or belongs to a playable race (listed below, or, introduced by your GM), is considered a person and is to be treated as a sentient entity. <br/>
    As the world became increasingly globalized and technologically interconnected, unique languages homogenized within each race; resulting in modern races having only one common language (pretty easy, right?). If a person knows a language that another person knows, they may communicate between each other in any available verbal or written forms. With time you will discover that each race has its own unique culture and opinions of other races, examples will be given throughout this section but your GM may replace these descriptions and common interactions entirely using their own discretion or even replace races completely within the format.</p>    
    <p>Each race has a description with this format:</p>
    <ul>
      <li><b>Physical Build:</b> The race's typical height, weight, lifespan, and other features.</li>
      <li><b>Base Stats:</b> the starting value of your Attributes before adding AP</li>
      <li><b>Speed:</b> the dice used for rolling your movement distance and turn order during combat</li>
      <li><b>Creation AP:</b> this is how many AP you can spend on increasing your Attributes before gaining any Gifts.</li>
      <li><b>Favored Skills:</b> when adding to the value of your Skills at character creation, if you do not select a Skill listed here it will cost 2 Skill Points per point added.</li>
      <li><b>Creation Skill Points:</b> this is how many points you can spend on increasing your Skills, this is affected by Favored Skills.</li>
      <li><b>Languages:</b> the languages you have learned before the story begins, the first language listed is your 'mother tongue' and is the most comfortable language they prefer to use.</li>
      <li><b>Racial Features:</b> unique perks given by your Race with various effects.</li>
    </ul>
    <hr/>
    <h3>Races:</h3>
    <ul>
      <li><Link to="/races/human">Human</Link></li>
      <li><Link to="/races/halfling">Halfling</Link></li>
      <li><Link to="/races/alcyon">Alcyon</Link></li>
      <li><Link to="/races/sylvan">Sylvan</Link></li>
      <li><Link to="/races/darkin">Darkin</Link></li>
      <li><Link to="/races/aeth">Aeth</Link></li>
      <li><Link to="/races/trollkin">Trollkin</Link></li>
      <li><Link to="/races/pix">Pix</Link></li>
      <li><Link to="/races/atal">Atal</Link></li>
      <li><Link to="/races/kxi">Kx'i</Link></li>        
    </ul>
  </div>
}