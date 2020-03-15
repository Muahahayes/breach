import React from 'react';
import { Link } from 'react-router-dom';
export default {
  name: "Socializing",
  content: <div>
    <span>Socializing involves Communcation, Argument, Charm and Insight. Communcation is a Free Action and may be done at any time, you are able to communicate with any creature which shares a Language with you with verbal (if your mouth is usable) or written (if your hands are usable) methods of communicating.</span><br/>
    <hr/>
    <h3>Persuasion/Argument:</h3><br/>
    <span>To persuade a person who disagrees with your stance/idea you must initiate an Argument. 
      While in an Argument you make a series of Persuasion Skill checks to build a case for why they should agree with your stance. 
      For some RP flavor it's recommended to speak lines of dialogue to represent each roll in the Argument.<br/>
      The GM determines how stubbornly the person is holding their ground on their stance (if unsure, roll 1d4 or 2d4, if the player is making an outrageous argument you may want to roll 3d4), this is the Agreement threshold. When you gain points equal to their threshold you win the Argument.<br/></span>
      <br/>
    <span><b>Making your Argument:</b></span><br/>
    <span>Roll d20 + Persuasion vs their d20 + Insight (or Persuasion if they are attempting a Counter-Argument of their own to convince you to agree with their stance).<br/> 
      For a <b>Hard Success</b> you gain an Agreement point towards their threshold (this does not give XP, if you win the Argument and made at least 1 Hard Success then the Argument as a whole counts as a single Hard Success for XP).<br/> 
      For a <b>Soft Success</b> you must make an acceptable compromise or forfeit the point and roll again.<br/> 
      For a <b>Soft Fail</b> you do not gain the point, after you have failed a number of times equal to half the Agreement threshold you have lost the Argument.<br/> 
      For a <b>Hard Fail</b> you lose the Argument (and gain XP for the Hard Fail).<br/> 
      When you win the Argument the person accepts your suggestion and acts accordingly (if it is an outrageous suggestion the GM may, at their discretion, have the person compromise or not fully agree but still ease up on you instead of having them fully accept it).<br/> 
      When you lose the Argument the person does not agree with your suggestion, and if they were attempting a Counter-Argument you must accept some compromise with their stance and act accordingly. 
      If the loss was due to a Hard Fail the GM may, at their discretion, impose consequences beyond the person standing their ground. 
      If you lose an Argument with a person, you may not initiate a similar Argument with them for a full day. 
      For each repeated attempt at a similar Argument add 1 to their Agreement threshold.</span>
    <hr/>
    <h3>Charm:</h3><br/>
    <span>To charm a person and increase their Regard of you, roll d20 + Charm vs their d20 + Insight.<br/>
    On a <b>Hard Success</b> their Regard for you increases by 1. <br/>
    On a <b>Soft Success</b> their Regard for you will only increase by 1 if you make some meaningful gesture to impress them. <br/>
    On a <b>Soft Fail</b> their Regard for you does not change. <br/>
    On a <b>Hard Fail</b> their Regard for you decreases by 2. <br/>
    The GM may use the Regard stat to influence the person's interactions with your character and give them motivation to do positive actions for you of their own volition. When you attempt to Persuade a person, subtract their Regard from the Agreement threshold (to a minimum of 1, if their Regard is negative this will increase the threshold). Most people will have a starting Regard for you at zero unless they have a prior opinion of you in the story. You may only attempt to charm a person once per day. The GM may also impose Regard changes based on the events of the story and your interactions.</span>
    <hr/>
    <h3>Insight:</h3><br/>
    <span>If you suspect a person is hiding the truth or their intentions, or to attempt to gain an understanding of a person and their social connections you may roll an Insight check. Roll d20 + Insight vs 15 (or up to GM discretion), or if they are actively trying to deceive you roll vs their d20 + Charm (intentions/understanding) or Persuasion (deceit) instead. <br/>
    On a <b>Hard Success</b> you gain the knowledge you seek within reason. <br/>
    On a <b>Soft Success</b> you know if they are hiding/deceiving or not, or you gain some minor understanding. <br/>
    On a <b>Soft Fail</b> you learn nothing. <br/>
    On a <b>Hard Fail</b> you learn nothing and the GM may impose further consequences.</span>
</div>
}