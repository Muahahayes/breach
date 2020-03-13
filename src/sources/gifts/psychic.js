export default [
  [
    {
      name: "Psi Burst",
      attributes: "[Action] [Ranged] [AOE]",
      description: "Releases a burst of psychic energy in a 30 ft range centered on your character. Roll d20 + Power, every creature within the effect must roll a Will check vs this roll. Deals 1 kinetic damage on a failed Will check.",
      proficiencies: [
        [
          "Scream: Instead of dealing damage or other effects, you may inflict Fear on every target hit for G turns, at the end of each turn they may roll a Will check vs {15 + Will} to end the effect.",
          "Feedback: Instead of dealing damage or other effects, you may force a Psychic Fatigue check on every target hit which has a Psychic Source."
        ],
        [
          "Impact: Increases the damage to {1d4 + G}.",
          "Shout: Instead of dealing damage or other effects, you may inflict Stun on every target hit for 1 turn. Roll an extra Psychic Fatigue check."
        ]        
      ]
    },
    {
      name: "Shock",
      attributes: "[Action] [Ranged] [Single Target]",
      description: "Blasts psychic energy at an opponent within 30 ft. Deals 1d4 psychic damage.",
      proficiencies: [
        [
          "Empowered: Add your Will to the damage roll.",
          "Forceful: Add 1d4 to the damage roll. (Repeatable)"
        ]
      ]
    }
  ],
  [
    {
      name: "Focus",
      attributes: "[Action] [Self]",
      description: "During a Psychic Break you may spend a turn to Focus, this does not cause a Psychic Fatigue check. If you are not moved,  take Life damage, or are forced to take a Psychic Fatigue check during this time you retain this focus. If you take damage equal or greater than ½ your Survival, roll a Psychic Fatigue check to maintain this focus. During your next turn, if you still have this focus, you may use a Power as if you were not in a Psychic Break.",
      proficiencies: [
        [],[],
        [
          "Refreshment: If you retain the focus until the next turn, your Psychic Break ends (1/day).",
          "Inner Peace: You may spend 30min building your focus, you ignore the next Psychic Fatigue check that is not caused by Fear, Stun or Incapacitated effects."
        ],
        [
          "Respite: Increases the number of Refreshment uses per day by 1 (Repeatable up to 5).",
          "Calm: Ignore the first failed condition while retaining your focus.",
          "Tranquil: Inner Peace ignores 1 additional Psychic Fatigue."
        ],
        [
          "Flow: You may continue to retain focus after casting a Power for 1 more turn. (Repeatable)"
        ]
      ]
    }
  ]
]