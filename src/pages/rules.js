import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
export default {
name: 'Rules',
content: <Fragment>
    <span>This section details the rules for how your character interacts with the world and other characters. These rules are made to supplement the collective story being told at your table, and can be editted at your GM's discretion. There are 2 main rulesets recommended to play, Full and Simplified.</span><br/>
    <br/>
    <span>The Full rules include everything in the Player's Guide (this website) and the Game Master's Guide (linked above), except for any rule that is explicitly labeled for Simplified play.</span><br/>
    <br/>
    <span>The Simplified ruleset is made to be more new player friendly, and has less math/housekeeping happening throughout the actions of your group.</span><br/>
    <span>Rules with a Simplified Version:</span>
    <ul>
      <li><a href="/rules/damage#injury">Injury Table</a></li>
    </ul>
    <span>Rules to exclude entirely during Simplified play:</span>
    <ul>
      <li><a href="/rules/exploration#hunger">Hunger</a></li>
    </ul>
</Fragment>
}