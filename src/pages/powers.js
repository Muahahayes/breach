import React from 'react';

export default {
  name: "Powers",
  content: <div>
    <p>
    Powers are a supernatural ability or gift given by your <a href="sources">Source</a>. When you <a href="rules/leveling">Level Up</a> you gain a new Power, this new Power must have a [LVL] requirement at or below your current level. Also when you Level Up you gain a new Lesser Power.
    <br/>
    Proficiencies are extra perks attached to a Power, and must have a [LVL] requirement at or below your current level. Some Proficiencies can be taken multiple times for extra effect, and will be labelled with (Repeatable). Others may require you already possess another Proficiency before you can aquire it.
    <br/><br/>
    Below is a list of the pages you can visit to see the Powers offered in each Source, each page will have 3 search bars to help you find Powers. <br/>
    Level, put in a number to filter the Powers by tier level and only see Powers of the tier you choose. <br/>
    Power, start typing the name of the Power you want, or put * in front of your text to find Powers that include your text somewhere in the name. (eg. *ard finds Harden while in Mutation) <br/>
    Attribute, finds Powers that possess a given attribute, add a + between attributes to search for Powers that possess a combination of specific attributes. (eg. range+aoe finds Powers that have both [Ranged] and [AOE])
    </p><ul>
    <li><a href="/sources/psychic/powers">Psychic</a></li>
    <li><a href="/sources/cosmic/powers">Cosmic</a></li>
    <li><a href="/sources/runic/powers">Runic Arts</a></li>
    <li><a href="/sources/bloodline/powers">Bloodline</a></li>
    <li><a href="/sources/spiritualist/powers">Spiritualist</a></li>
    </ul>
  </div>
}