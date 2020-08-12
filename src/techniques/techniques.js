import React from 'react';
import { Link } from 'react-router-dom';
export default { 
  "stargazer": {
    name: "Stargazer",
    skill: "Cosmology",
    requirement: 10,
    description: "Your love of the stars and how Aether shapes our world has given you a deeper understanding of Cosmic powers. When rolling a d20 which uses the Use Power Skill and the Cosmic Source, or contesting a roll which uses the Use Power Skill and the Cosmic Source, you may substitute the Skill used in your roll with the Cosmology Skill."
  },
  "triage": {
    name: "Triage",
    skill: "Medicine",
    requirement: 5,
    description: "Through studying applied medicinal practices you are now capable of healing injuries. While taking a Break with another creature and using medical supplies equaling 10 Virtua or more in value, you may attempt to heal 1 Life on the creature for a non-extreme Injury. Roll a d20 + Medicine. If the result is above a 10 you may heal a Mild Injury, above a 15 you may heal a Moderate Injury, and above a 20 you may heal a Heavy Injury.\n\nWhen your Medicine Skill reaches 15 you may heal Extreme Injuries with a roll above 30."
  },
  "tactician": {
    name: "Tactician",
    skill: "Logic",
    requirement: 10,
    description: "You always find greater success when given the chance to work out a strategy. As a React Action you may construct a plan, declare an Action and a Skill at the end of your turn. If you begin your next turn without taking damage or receiving a Sensory/Cognitive Status Effect you may perform your declared plan. Any d20 rolls involved in this planned Action gain a Favored +1. When your Logic Skill reaches 15 you gain a Favored +2 and may still perform your plan after taking damage, as long as the damage does not subtract from your Life."
  },
  "rapport" : {
    name: "Rapport",
    skill: "Charm",
    requirement: 10,
    description: "Increases the amount of Regard for you a person increases from your successful Charm attempts by 1."
  },
  "ballad" : {
    name: "Ballad",
    skill: "Perform",
    requirement: 10,
    description: "You have heard many tales of the world in the form of songs. You may gain a Favored +1 to History checks, but only if afterwards you sing a few lines of a folk song (player improvised) pertaining to the story being remembered, accuracy depending on if you succeeded the check. (Halflings receive the effects of this technique for free and cannot learn it a second time)"
  },
  "parry" : {
    name: "Parry",
    skill: "Martial Arms",
    requirement: 10,
    description: "When you are attacked by a melee attack, as a React Action you may attempt to deflect the blow. Roll a d20 + Martial Arms vs the attack roll value of the melee attack. On a Hard Success you cause the attack to miss. On a Soft Success you subtract LVL * d4 damage from the attack, it hits you and applies its effects. On a Soft Fail the attack hits you as normal and applies its effects. On a Hard Fail you leave yourself open and cause the attack to hit you harder, it deals an additional LVL * d4 damage and then applies its effects."
  },
  "retaliation" : {
    name: "Retaliation",
    skill: "Martial Arms | Block",
    requirement: 10,
    description: "When you are attacked by a melee attack, if the attack results in a Hard Fail you may immediately as a Free Action deal damage with an equipped weapon to the attacker equal to your level.\n\nWhen your Skill has increased to 15, the damage dealt is increased to 2*LVL."
  },
  "quick strike" : {
    name: "Quick Strike",
    skill: "Martial Arms | Marksman",
    requirement: 5,
    description: "When you do a basic Attack Action you may use your Activation Action to increase the tempo of your strike. Roll a d4, add that value as Initiative to your Speed roll at the start of the next round while determining turn order.\n\nWhen your Skill has increased to 10, roll a second d4 when using this Technique."
  },
  "deep breathing" : {
    name: "Deep Breathing",
    skill: "Athletics",
    requirement: 10,
    description: "As an Action you may take a deep breath and ready your body, on your next turn you may gain a Favored +1 to 1 Attack roll.\n\nWhen your Skill has increased to 10, while you have Deep Breathing active you may use a React to impose an Unfavored -1 to 1 enemy's Attack roll against you before your next turn, this ends the Deep Breathing effect."
  },
  "relay" : {
    name: "Relay",
    skill: "Athletics",
    requirement: 10,
    description: "As a Free Action you may add any unused movement distance from this turn to your movement distance on your next turn. This movement distance is only stored for 1 turn. Relay may be used once per Break.\n\nWhen your Skill has increased to 15 you may use Relay twice per Break."
  },
  "wall run" : {
    name: "Wall Run",
    skill: "Athletics",
    requirement: 10,
    description: "As a Full Action, while using your Movement Action you may move up or along vertical surfaces up to your movement distance as if it were flat ground. However, if you do not end your turn on a horizontal surface you will fall and become prone.\n\nWhen your Skill has increased to 15 you may attempt an Athletics check vs 25 to catch yourself and remain on the wall."
  },
  "execution" : {
    name: "Execution",
    skill: "Martial Arms | Marksman",
    requirement: 15,
    description: "Through your battle experience you can recognize when a creature is near death. When a creature you can see is at 1 Life and drops below half their max Survival you are alerted to this. While they are in this state, your basic Attack Action gains a Favored +2 against them and deals an extra LVL * d4 damage."
  },
  "water tap" : {
    name: "Water Tap",
    skill: "Nature | Outdoorsman",
    requirement: 10,
    description: "You know how to draw water from trees and large plants. When you take a Break near a tree or large plant you can generate 1 Water Point which may be drunk by an ally or stored for later use.\n\nWhen your Skill has increased to 15 you may generate a second Water Point."
  }
}
/*
"" : {
  name: "",
  skill: "",
  requirement: 0,
  description: ""
}
*/