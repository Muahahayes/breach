import React from 'react';
import { Link } from 'react-router-dom';
export default { 
  "stargazer": {
    name: "Stargazer",
    skill: "Cosmology",
    requirement: 9,
    description: "Your love of the stars and how Aether shapes our world has given you a deeper understanding of Cosmic powers. When rolling a d20 which uses the Use Power Skill and the Cosmic Source, or contesting a roll which uses the Use Power Skill and the Cosmic Source, you may substitute the Skill used in your roll with the Cosmology Skill."
  },
  "triage": {
    name: "Triage",
    skill: "Medicine",
    requirement: 3,
    description: "Through studying applied medicinal practices you are now capable of healing injuries. While taking a Break with another creature and using medical supplies equaling 10 Virtua or more in value, you may attempt to heal 1 Life on the creature for a non-extreme Injury. Roll a d20 + Medicine. If the result is above a 10 you may heal a Mild Injury, above a 15 you may heal a Moderate Injury, and above a 20 you may heal a Heavy Injury.\n\nWhen your Medicine Skill reaches 15 you may heal Extreme Injuries with a roll above 30."
  },
  "tactician": {
    name: "Tactician",
    skill: "Logic",
    requirement: 9,
    description: "You always find greater success when given the chance to work out a strategy. As a React Action you may construct a plan, declare an Action and a Skill at the end of your turn. If you begin your next turn without taking damage or receiving a Sensory/Cognitive Status Effect you may perform your declared plan. Any d20 rolls involved in this planned Action gain a Favored +1. \n\nWhen your Logic Skill reaches 15 you gain a Favored +2 and may still perform your plan after taking damage, as long as the damage does not subtract from your Life."
  },
  "rapport" : {
    name: "Rapport",
    skill: "Charm",
    requirement: 9,
    description: "Increases the amount of Regard for you a person increases from your successful Charm attempts by 1."
  },
  "ballad" : {
    name: "Ballad",
    skill: "Perform",
    requirement: 3,
    description: "You have heard many tales of the world in the form of songs. You may gain a Favored +1 to History checks, but only if afterwards you sing a few lines of a folk song (player improvised) pertaining to the story being remembered, accuracy depending on if you succeeded the check. (Halflings receive the effects of this technique for free and cannot learn it a second time)"
  },
  "parry" : {
    name: "Parry",
    skill: "Martial Arms",
    requirement: 9,
    description: "When you are attacked by a melee attack, as a React Action you may attempt to deflect the blow. Roll a d20 + Martial Arms vs the attack roll value of the melee attack. On a Hard Success you cause the attack to miss. On a Soft Success you subtract LVL * d4 damage from the attack, it hits you and applies its effects. On a Soft Fail the attack hits you as normal and applies its effects. On a Hard Fail you leave yourself open and cause the attack to hit you harder, it deals an additional LVL * d4 damage and then applies its effects."
  },
  "retaliation" : {
    name: "Retaliation",
    skill: "Martial Arms | Block",
    requirement: 9,
    description: "When you are attacked by a melee attack, if the attack results in a Hard Fail you may immediately as a Free Action deal damage with an equipped weapon to the attacker equal to your level.\n\nWhen your Skill has increased to 15, the damage dealt is increased to 2*LVL."
  },
  "quick strike" : {
    name: "Quick Strike",
    skill: "Martial Arms | Marksman",
    requirement: 3,
    description: "When you do a basic Attack Action you may use your Activation Action to increase the tempo of your strike. Roll a d4, add that value as Initiative to your Speed roll at the start of the next round while determining turn order.\n\nWhen your Skill has increased to 9, roll a second d4 when using this Technique."
  },
  "deep breathing" : {
    name: "Deep Breathing",
    skill: "Athletics",
    requirement: 9,
    description: "As an Action you may take a deep breath and ready your body, on your next turn you may gain a Favored +1 to 1 Attack roll.\n\nWhen your Skill has increased to 15, while you have Deep Breathing active you may use a React to impose an Unfavored -1 to 1 enemy's Attack roll against you before your next turn, this ends the Deep Breathing effect."
  },
  "relay" : {
    name: "Relay",
    skill: "Athletics",
    requirement: 9,
    description: "As a Free Action you may add any unused movement distance from this turn to your movement distance on your next turn. This movement distance is only stored for 1 turn. Relay may be used once per Break.\n\nWhen your Skill has increased to 15 you may use Relay twice per Break."
  },
  "wall run" : {
    name: "Wall Run",
    skill: "Athletics",
    requirement: 9,
    description: "As a Full Action, while using your Movement Action you may move up or along vertical surfaces up to your movement distance as if it were flat ground. However, if you do not end your turn on a horizontal surface you will fall and become prone.\n\nWhen your Skill has increased to 15 you may attempt an Athletics check vs 25 to catch yourself and remain on the wall."
  },
  "execution" : {
    name: "Execution",
    skill: "Martial Arms | Marksman | Unarmed Combat",
    requirement: 15,
    description: "Through your battle experience you can recognize when a creature is near death. When a creature you can see is at 1 Life and drops below half their max Survival you are alerted to this. While they are in this state, your basic Attack Action gains a Favored +2 against them and deals an extra LVL * d4 damage."
  },
  "water tap" : {
    name: "Water Tap",
    skill: "Nature | Outdoorsman",
    requirement: 3,
    description: "You know how to draw water from trees and large plants. When you take a Break near a tree or large plant you can generate 1 Water Point which may be drunk by an ally or stored for later use.\n\nWhen your Skill has increased to 9 you may generate a second Water Point."
  },
  "language" : {
    name: "Language",
    skill: "History | Social",
    requirement: 3,
    description: "You may study a new language. You develop a conversational level of competency with the language of your choice, as well as the ability to read it and write it in a basic fashion. You may learn this Technique multiple times, each time counts towards your limit of Techniques known.\n\nWhen your Skill has increased to 9 you may speak it fluently and your reading and writing reach an average adult's level of competency. When your Skill has increased to 15 you can be considered well spoken, and have the writing skills of a scholar."
  },
  "busking": {
    name: "Busking",
    skill: "Perform",
    requirement: 3,
    description: "When you Hard Succeed a Perform check using your voice or musical instrument in a public place roll a 1d10 and gain that many Virtua from passing listeners. You may benefit from this Technique once per Break.\n\nWhen your Skill has increased to 9 you may do this on a Soft Success and may benefit from this Technique twice per Break."
  },
  "martial arts" : {
    name: "Martial Arts",
    skill: "Unarmed Combat",
    requirement: 3,
    description: "You are trained to develop your fists into a deadly weapon. Your unarmed attack damage is increased to 1d6 Blunt damage.\n\nWhen your Skill has increased to 9 your unarmed attack damage is increased to 1d8 Blunt damage. \nWhen your Skill has increased to 15 your unarmed attack damage is increased to 1d10 Blunt damage. \nWhen your skill has increased to 21 your unarmed attack damage is increased to 1d12 Blunt damage."
  },
  "brewing" : {
    name: "Brewing",
    skill: "Cooking",
    requirement: 3,
    description: "\\:By mixing herbs and spices into the drinks you create you can infuse them with special properties. This requires 30 minutes of effort and at least 1 silver worth of supplies (or your own herbs if successfully scavenged from the wild) to create 4 servings. Choose one effect when brewing a batch of drinks:\nThe drinker restores 2 ae, removes 2 Strain, ends a Psychic Break, or can choose one Faded rune to become Dormant. When your Skill has increased to 9 the ae and Strain become 3.\nThe drinker heals for 1d4 health. When your Skill has increased to 9 the healing becomes 1d6.\nThe drinker feels more alert and gains a Favored +1 to their Awareness checks for 1 hour.\nThe drinker feels comforted and raises the threshold for Hot climate effects and lowers the threshold for Cold climate effects by 10°F.\nThe drinker feels happy and free, putting them into a state of intoxication which reduces their Will by 2 as well as giving them an Unfavored -1 to Insight checks for 30 minutes."
  },
  "fracture" : {
    name: "Fracture",
    skill: "Unarmed Combat",
    requirement: 9,
    description: "When you maintain a Grapple on an enemy you may attempt to break their body using leverage against their joints or bones. Roll a d20 + Unarmed Combat vs their d20 + Athletics or Acrobatics, on a Hard Success you deal 1 point of Life damage and may choose any body part (other than Head) for the Injury location. On a Soft Success you deal 1d8 Crushing Damage. On a Hard Fail the Grapple ends. You may use Fracture once per Break.\n\nWhen your Skill has increased to 15 you may use Fracture twice per Break."
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