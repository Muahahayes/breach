import React from 'react';
export default {
  name:"Halfling",
  description:`Halflings are a curious and optimistic people. They keep tight knit communities and make friends for life. They feel a kinship with Humans, and often settle in shared rural villages. They enjoy a simple life, and would rather drink and share songs than chase any lofty ambitions.`, 
  appearance:`They are small in stature, with pointed ears. They're often soft bodied with hands and feet firm as if calloused but remaining smooth to the touch. They tend to have round facial structures.`,
  stats:[
    "Physical Build: 3'-4', 40-60lb, 110 years, 2 arms and 2 legs",
    "Base Stats: Strength 1, Agility 2, Stamina 1, Will 2",
    "Speed: 1d4 + 2",
		"Creation AP: 3",
		"Favored Skills: Charm, Insight, History, Hide, Awareness, Perform, Outdoorsman, Street Talk",
		"Creation Skill Points: 12",
		"Languages: Imperial, Any playable race's language"
],
  racials:[
    "Friendly: Gain a +1 to the regard gained by the first Charm success you have on a person in their lifetime.",
		"Ballad: They have heard many tales of the world in the form of songs. May gain a +G bonus to History checks, but only if afterwards they sing a few lines of a folk song (player improvised) pertaining to the story being remembered, accuracy depending on if they succeeded the check.",
		"Optimism: Once per day, you may treat a Hard Fail as a Soft Fail. You still gain any XP earned."
  ]
}