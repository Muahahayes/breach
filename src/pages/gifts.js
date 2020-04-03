import React from 'react';

export default {
  name: "Gifts",
  content: <p>
    Gifts are a supernatural or technological Power given by your <a href="sources">Source</a>. When you <a href="rules/leveling">Level Up</a> you gain a new Gift, this new Gift must have a [G] requirement at or below your current G level.
    <br/>
    Proficiencies are extra perks attached to a Gift, and must have a [G] requirement at or below your current G level. Some Proficiencies can be taken multiple times for extra effect, and will be labelled with (Repeatable). Others may require you already possess another Proficiency before you can aquire it.
    <br/><br/>
    Below is a list of the pages you can visit to see the Gifts offered in each Source, each page will have 3 search bars to help you find Gifts. <br/>
    Level, put in a number to filter the Gifts by level and only see Gifts of the level you choose. <br/>
    Gift, start typing the name of the Gift you want, or put * in front of your text to find Gifts that include your text somewhere in the name. (eg. *ard finds Harden while in Mutation) <br/>
    Attribute, finds Gifts that possess a given attribute, add a + between attributes to search for Gifts that possess a combination of specific attributes. (eg. range+aoe finds Gifts that have both [Ranged] and [AOE])
    <ul>
    <li><a href="/sources/psychic/gifts">Psychic</a></li>
    <li><a href="/sources/cosmic/gifts">Cosmic</a></li>
    <li><a href="/sources/mutation/gifts">Mutation</a></li>
    </ul>
  </p>
}