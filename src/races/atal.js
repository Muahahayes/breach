import React from 'react';
export default {
  name:"Atal",
  description:`The Atal have been in a state of civil war for millennia between 2 closely related species with a shared homeland. They hail from the tropical continent of Etzal to the south, where the two species contend for dominance in a never ending feud. In recent times they've brokered an uneasy peace to end physical hostilities, but they compete fiercely in all matters of culture, trade, and diplomacy on the global stage.`, 
  appearance:`The common traits between the two Atal races are their serpent-like bodies and cold-blooded metabolism. They have hunched shoulders and are as comfortable running on four legs or two. Although they share a language, each has a dialect which gives its own flavor.`,
  stats:[
    "Physical Build: 5'-7', 70-300lb, 80 years, 2 legs, 2 arms, tail",
    "Base Stats: Strength 1, Agility 1, Stamina 1, Will 1",
    "Speed: 2d4 + 5ft",
		"Creation AP: 3",
		"Favored Skills: Athletics, Art, Awareness, Disruption, Insight, Martial Arms, Outdoorsman",
		"Creation Skill Points: 8",
		"Languages: Atali, Imperial"
  ],
  racials:[
    "Cold-blooded: Take -LVL fire damage and the Climate affects you as if the temperature was 10°F colder.",
    "Poison Resistance: When you are Poisoned, reduce the duration by LVL rounds (to a minimum of 0)."
  ],
  subMarker:"'",
  sub:[
    {
      name:"Alko",
      description: "The Alko'Atal are a proud race of warriors, with colorful feathers sprouting from their heads, forearms, and along their tail. Their faces are angular, with rows are sharp teeth. They stand between six and seven feet tall when their back is straight, with a tail of only two feet in length. Their shoulders are more broad than the Akkso'Atal and their skin is a leathery hide, aiding them in carving out sections of jungle to settle their cities. The Alko'Atal see themselves as the 'True Atal' by virtue of their strength and should rule Etzal by might.",
      racials:[
        "Alko Might: Gain +2 Strength. Your Strength may go up to [LVL + 4].",
        "Warcry: Gain a Favored +1 to your Disruption checks."
      ]
    },
    {
      name:"Akkso",
      description: "The Akkso'Atal are a determined race of opportunists. They stand between five and six feet tall when their back is straight, which is rare, with a tail up to four feet in length. Their bodies are more lithe than the Alko'Atal and their skin is soft and slippery, with smooth faces and frills extending from their heads. They feel at home in swamps and riverlands, and settle along the sides of the great rivers in the jungles of Etzal. The Akkso'Atal see themselves as the 'True Atal' by virtue of being more at home in the harsh environments of Etzal.",
      racials:[
        "Akkso Guile: Gain +2 Agility. Your Agility may go up to [LVL + 4].",
        "Amphibious: Gain a Favored +1 to all Swimming based Athletics checks, and you may spend up to 1 hour underwater before needing to breathe. You require 1 additional Water Point to satisfy your Hunger."
      ]
    }
  ]
}