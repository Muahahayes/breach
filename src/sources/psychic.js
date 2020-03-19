export default {
  name: "Psychic",
  description: "Psychics are an established class of 'better' creatures with a genetic advantage within the urban society, they developed about 200 years ago early on in the industrial boom. Using their unique Aether within themselves, they intuitively feel in tune with the world around them and can resonate with the Aether around them to impose changes upon it. They created the modern capitalist state by taking advantage of the non-psionic peoples and established themselves as the upper class.",
  resource: "Psychic Fatigue: When you use any kind of action (even a Free Action) to use a Power roll a d20, if you roll lower than {9 + G} (or a natural 1) you fail to contain the energies within your mind causing a Psychic Break. Cancel that Power's effect and you cannot use any of your Powers until you fully sleep or take a break. If you are Feared or Stunned you must make a Psychic Fatigue check each turn of the effect's duration.",
  proficiencies: [
    [
      "Mental Fortitude: Subtract 1 from the difficulty of Psychic Fatigue checks (to a minimum of 8). (Repeatable)"
    ],
    [
      "Iron Will: Subtract your Will from the difficulty of Psychic Fatigue checks.",
      "Link: You can initiate Psychic Links with other persons as a Minor Action. You can always be Linked by other Psychics capable of initiating Links even if you don't have this Proficiency or the Psychic Source. While Linked you may communicate silently with one another using any Language you share. If you move further than 100 ft apart the Link is broken.",
      "Psi Network: You can tap into the Psi Network of your current city if a Psi Network exists, giving you access to information and long range communication.",
      "Mind Over Matter: Every 2 Proficiency you put into Mind Over Matter gives you 1 AP you can spend on any Attribute except Will. (Cannot increase an Attribute higher than {2 * G}). (Repeatable up to G)"
    ],
    [
      "Focused: Add G to your defensive Will checks."
    ],
    [
      "No Resistance: Roll your Psychic Fatigue checks after the main roll of using a Power. Whenever you Hard Succeed while using a Power, you do not make the base Psychic Fatigue check for that use of that Power."
    ],
    [
      "Mental Resilience: After putting 3 points into Mental Resilience you gain resistance to Mental damage, reducing damage taken from Mental damage types by half. (Repeatable up to 3)"
    ]
  ]
}