export default {
  name: "Psychic",
  slogan: "The Powers of the Mind",
  description: "Psychics are an established class of 'better' creatures with a genetic advantage within the urban society, they developed about 200 years ago early on in the industrial boom. Using their unique Aether within themselves, they intuitively feel in tune with the world and can resonate with the Aether around them to impose changes upon it. They created the modern capitalist state by taking advantage of the non-psionic peoples and established themselves as the upper class.",
  resource: "Psychic Fatigue: When you use any kind of action (even a Free Action) to use a Gift or Lesser Gift, roll a d20. If you roll lower than [9 + G] (or a natural 1) you fail to contain the energies within your mind causing a Psychic Break. Cancel that Gift's effect and you cannot use any of your Gifts or Lesser Gifts until you fully sleep or take a break. If you are Feared or Stunned you must make a Psychic Fatigue check each turn of the effect's duration.",
  proficiencies: [
    [
      "Mental Fortitude: Subtract 1 from the difficulty of Psychic Fatigue checks (to a minimum of 8). (Repeatable)",
      "Study: Whenever you level up, you may select 1 Lesser Gift for free without spending a Proficiency.",
      "Charismatic: Gain a +G to Charm attempts against persons with a Will less than 2."
    ],
    [
      "Iron Will: Subtract your Will from the difficulty of Psychic Fatigue checks.",
      "Mind Over Matter: Every 2 Proficiency you put into Mind Over Matter gives you 1 AP you can spend on any Attribute except Will. (Cannot increase an Attribute higher than [G + 3]). (Repeatable up to G)",
      "Mental Map: You are always aware of which direction is True North and what time of day it is."
    ],
    [
      "Focused: Add G to your defensive Will checks.",
      "Uncensored: Once per day you may at will end a Silence status effect active on you."
    ],
    [
      "No Resistance: Roll your Psychic Fatigue checks after the main roll of using a Gift. Whenever you Hard Succeed while using a Gift, you do not make the base Psychic Fatigue check for that use of that Gift."
    ],
    [
      "Mental Resilience: After putting 3 points into Mental Resilience you gain resistance to Mental damage, reducing damage taken from Mental damage types by half. (Repeatable up to 3)"
    ]
  ],
  lesser: [
    [
      "Greater Flourish: [Action] [Ranged] For 10 minutes, within 30 ft you may manipulate objects and/or lift objects weighing no more than 5G pounds up to 30 ft in the air. Requires use of your hand. Do not make a Psychic Fatigue check.",
      "Link: [Action] [Ranged] You can initiate Psychic Links with other persons as an Action. While Linked you may communicate silently with one another using any Language you share. If you move further than 100 ft apart the Link is broken. Lasts 1 hour, the effect ends prematurely if you enter a Psychic Break.",
      "Psi Network: [Free] [Touch] You can tap into the Psi Network of your current city if a Psi Network exists at any Network Crystal, giving you access to information and long range communication. Do not make a Psychic Fatigue check."
    ],
    [
      "Resonance: [Action] [Ranged] For 10 minutes you open your senses to feel the minds of creature's within 30 ft. Ignore the effects of lighting conditions for Search and Awareness checks against creatures with a Will of at least 0. You may make these checks against creature's out of your line of sight. This effect ends prematurely if you enter a Psychic Break."
    ],
    [
      "Hypnotic: [Action] [Melee] Touch the forehead of a person with no Source and a Will under 2 who you have not recently harmed. Make a Charm attempt against the person, on a success gain twice the normal Regard.",
      "Fortunate: [Activation] [Self] Choose a Quirk when you take this Lesser Gift. Whenever you gain a Favored bonus with this Quirk, if you roll a Soft Success on the d20 roll you may use your Activation Action to count it as a Hard Success. Usable once per Full Sleep."
    ]
  ]
}