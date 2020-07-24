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
    description: "Through studying applied medicinal practices you are now capable of healing some injuries. While taking a Break with another creature and using medical supplies equaling 10 Virtua or more in value, you may attempt to heal 1 Life on the creature for a non-extreme Injury. Roll a d20 + Medicine. If the result is above a 10 you may heal a Mild Injury, above a 15 you may heal a Moderate Injury, and above a 20 you may heal a Heavy Injury.\n\nWhen your Medicine Skill reaches 15 you may heal Extreme Injuries with a roll above 30."
  },
  "tactician": {
    name: "Tactician",
    skill: "Logic",
    requirement: 10,
    description: "You always find greater success when given the chance to work out a strategy. As a React Action you may construct a plan, declare an Action and a Skill at the end of your turn. If you begin your next turn without taking damage or receiving a Sensory/Cognitive Status Effect you may perform your declared plan. Any d20 rolls involved in this planned Action gain a Favored +1. When your Logic Skill reaches 15 you gain a Favored +2 and may still perform your plan after taking damage, as long as the damage does not subtract from your Life."
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
// TODO: create techniques list rendering (like the Gifts lists, with modal style popups) maybe refactor to be acordian dropdowns??