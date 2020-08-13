import React from 'react';
export default {
  name:"Kx'i",
  description:"The Kx'i are a strange insect-like race that joined human society only within the last 50 years. They are known for the strength and cunning, but their mobility and flexibility falls behind the mammalian races. The Kx'i have a long tradition of revering Psychics, much like modern human culture, and have made their way up in urban society despite the discomfort they create. They tend to cluster into large communities with trict hierarchies, typically following a revered family of Kx'i that rule for generations. The Aeth claim they've never seen their kind in a Breach and must be from below the earth, but the Darkin claim they are not of this world. The Kx'i don't confirm or deny either claim and keep their history to themselves.",
  appearance:"Their upper body appears humanoid with some insect-like features which varies between communities, but they typically have a pronounced curve in the spine and arms. They have 4 thin chitinous legs and a softer chitin on their torso and arms. Their mouth and eyes are large, which can be off putting for people who have not spent time around them.",
  stats:[
    "Physical Build: 5'-6'6\", 150-200lb, 60-120 years, 4 legs and 2 arms",
    "Base Stats: Strength 1, Agility -1, Stamina 2, Will 1",
    "Speed: 2d4",
		"Creation AP: 4",
		"Favored Skills: Athletics, Persuasion, Insight, Logic, Sneak, Awareness, Medicine, Urban",
		"Creation Skill Points: 10",
		"Languages: Kx'u, Imperial"
  ],
  racials:[    
		"Barbed Feet: May make unarmed attacks with their front feet, dealing 1d6 damage. Also, may move their full movement distance while climbing and may end their movement on vertical surfaces without falling.",
		"Psi Speak: Even the most ungifted Kx'i can communicate psionically with other Kx'i within 100ft, and Kx'i who grew up in a city can interface with the Psi Network without the Psi Network proficiency."
  ],
  sub:[
    {
      name:"Royal",
      description: "A Royal Kx'i comes from a family of Kx'i which have a position of authority over a community. Royal Kx'i can live up to 120 years and pass on their authority to their children, if those children have not already left to create their own community to rule over. They may only be born from a female Royal Kx'i. Beyond the social distinction of a Royal they physiologically have differences from other Kx'i, most notably their thinner limbs and slightly larger heads. Their chitin is typically more colorful than other Kx'i, with a beautiful sheen across the surface with a smoother texture.",
      racials:[
        "Hive Speak: May psionically send 1 way messages to any Kx'i they are aware of, or to all Kx'i at once, within a 1 mile radius.",
        "Dominant: Increase the starting Regard for you by +1 for all Drone Kx'i you meet.",
        "Ruler: Gain +1 Will."
      ]
    },
    {
      name:"Drone",
      description: "A Drone Kx'i is the most common type of Kx'i. Drones tend to live no more than 80 years and rarely migrate from their community. They do the bulk of the work, and feel an instinctual bond to the Royal Kx'i who rules them. Their limbs tend to be thicker and stronger, and their bodies more round. Their chitin has more dull hues with a rough matte texture.",
      racials:[
        "Chitin: Take -LVL damage from Sharp and Piercing damage attacks.",
        "Worker: Gain +1 Strength."
      ]
    }    
  ]
}