export default [
  [
    {
      name: "Contract",
      attributes: "[Passive] [Self]",
      description: "You may take this Gift at and only at 1G. When your Powers awakened inside you there was a small tear in the Aether of your soul. You commune with a Cosmic creature through the tear and are granted otherworldly power in exchange for a Contract you agree to uphold (usually has conditions that must be met). This creature may speak to your mind through the tear during a Full Sleep. You gain two [1 G] or one [1 G] and one [2 G] Contract Gifts for free, these do not count towards your G. Contract Gifts may also be selected by Psychics who do not make a Contract, unless stated otherwise, but Proficiencies marked [Contract] may only be used with an active Contract. These Gifts you get for free come from your Contract and if you violate the Contract they may not be used. When you level in future, you may only select [1 G] or [2 G] Gifts from the Psychic Source list. You may only select Gifts of [3 G] or higher if they are Contract Gifts.",
      proficiencies: []
    },
    {
      name: "Psi Burst",
      attributes: "[Action] [Ranged] [AOE]",
      description: "Releases a burst of psychic energy in a 30 ft range centered on your character. Roll d20 + Power, every creature within the effect must roll a Will check vs this roll. Deals 1 kinetic damage on a failed Will check.",
      proficiencies: [
        [
          "Scream: [Activate] Instead of dealing damage or other effects, you may inflict Fear on every target hit for G turns, at the end of each turn they may roll a Will check vs {15 + Will} to end the effect.",
          "Feedback: [Activate] Instead of dealing damage or other effects, you may force a Psychic Fatigue check on every target hit which has a Psychic Source."
        ],
        [
          "Wave: In addition to dealing damage, you may push all targets hit 10 ft away from you.",
          "Impact: Increases the damage to {1d4 + G}.",
          "Shout: [Activate] Instead of dealing damage or other effects, as an Activation Action you may inflict Stun on every target hit for 1 turn. Roll an additional Psychic Fatigue check for each target hit. You do not regain this Activation Action on your next turn."
        ],
        [
          "Echo: As a Minor Action you may do a second Psi Burst, this second use must not use the same status effect as the first but may use your Activation Action a second time.",
          "Telepathic: You may roll your attack vs their Armor + Will instead, this Power deals Psychic damage instead of Kinetic when used this way." 
        ],
        [
          "Magnitude: Increases the damage to 1d6 + G.",
          "Focused: You may direct your Psi Burst at a single creature in range. Instead of dealing damage or other effects, inflict Dumb on hit for G turns."
        ],
        [
          "Lingering: Your Scream proficiency lasts an additional G turns. Your Shout proficiency lasts 1 additional turn. Your Focused proficiency lasts up to 1 day."
        ]
      ]
    },
    {
      name: "Shock",
      attributes: "[Action] [Ranged] [Single Target] [Contract]",
      description: "Point at a creature or object within 30ft. You release a blast of psychic energy at the target dealing 1d4 psychic damage. The creature affected by Shock can hear a screeching in their mind, but otherwise it makes no sound. It creates a warped cascade of light as it travels to its target.",
      proficiencies: [
        [
          "Empowered: Add your Will to the damage roll.",
          "Forceful: Add 1d4 to the damage roll. (Repeatable up to G)"
        ],
        [
          "Impact: Increase the size of the first die rolled. (Repeatable d6, d8, d10)",
          "Telekinetic: Your shock may use kinetic energy, dealing blunt type damage.",
          "Tranquility: You may still use Shock while afflicted by Psychic Break, however only the Empowered and Impact proficiencies will benefit your shocks used in this way."
        ],
        [
          "Greater Empowerment: Add your Will to the damage roll a second time. Requires Empowered.",
          "Magnitude: Increase the size of the Forceful dice rolled. (repeatable d6, d8)",
          "Effort: Roll a copy of the primary die and add the result to the damage of this Shock, roll a Psychic Fatigue check for each copy rolled. (Repeatable up to G)",
          "Reach: Increase the range to 50 ft.",
          "Discharge: [Activate] You may roll a second Power roll, compare this roll to the avoidance of each creature within 5ft of the target of your Shock. Any creature who has a lower avoidance than your roll is hit by the Discharge, roll your Forceful dice and distribute the number of dice equally between the creatures hit to deal the damage of each die to its respective creature. Do not apply your Forceful dice to the original target of your Shock when using Discharge.",
          "Arc: Your discharge can now affect a creature within 10ft of the target of your Shock, and a chain of creatures within 5ft of each other starting from this first Discharge target."
        ],
        [
          "Subtle: [Activate] As an Activation Action you may suppress the light emitted by the Shock. If a creature(s) within range is not aware of you, you may roll a Hide check vs the Awareness Roll of the creature(s). If you succeed and do not damage the creature, this Shock does not alert them to your presence. If you succeed and damage the creature, they are aware of you but not your location.",
          "Overwhelming: [Contract] Increase the size of the first die rolled. Requires 3 points in Impact. (Repeatable d12, d20)"
        ],
        [
          "Subconscious: Now the first time in a combat with a creature when you use Subtle and deal damage with this Shock, if you succeed and do not damage their Life they are not alerted to your presence."
        ]
      ]
    }
  ],
  [
    {
      name: "Focus",
      attributes: "[Action] [Self]",
      description: "During a Psychic Break you may spend a turn to Focus, this does not cause a Psychic Fatigue check. If you are not moved involuntarily, take Life damage, or are forced to take a Psychic Fatigue check during this time you retain this focus. If you take damage equal or greater than ½ your Survival, roll a Psychic Fatigue check to maintain this focus. During your next turn, if you still have this focus, you may use a Power as if you were not in a Psychic Break.",
      proficiencies: [
        [],[],
        [
          "Refreshment: If you retain the focus until the next turn, your Psychic Break ends (1/day).",
          "Inner Peace: You may spend 30min building your focus, you ignore the next Psychic Fatigue check that is not caused by Fear, Stun or Incapacitated effects.",
          "Enhance: If you retain focus until the next turn, add +G to any attack rolls, checks, or damage done by any Powers during that turn. You do not need to be in a Psychic Break to use Focus."
        ],
        [
          "Respite: Increases the number of Refreshment uses per day by 1 (Repeatable up to 4).",
          "Calm: Ignore the first failed condition while retaining your focus.",
          "Tranquil: Inner Peace ignores 1 additional Psychic Fatigue."
        ],
        [
          "Flow: [Activate] You may continue to retain focus after casting a Power for 1 more turn. Uses your Activation Action each turn. (Repeatable, adding 1 to maximum turns up to 5)"
        ]
      ]
    },
    {
      name: "Disruption",
      attributes: "[Action] [Ranged] [Contract]",
      description: "You reach out with your mind to disrupt the flow of energy within a creature you can see. On that creature's next turn, you block the first use of a Power it used on its previous turn. Roll a normal Psychic Fatigue check to place the Disruption on them. The first time they attempt to use a Disrupted Power roll additional Psychic Fatigue checks equal to the G of the Power they attempt to use, if you succeed they cannot use the Power and lose any Actions the Power required. If you fail a check they may use the Power but you do not go into Psychic Exhaustion.",
      proficiencies: [
        [],
        [
          "Suppress: Reduce the number of Psychic Fatigue checks required to Disrupt a Power by 1 (to a minimum of 1 check)."
        ],
        [
          "Counter: [React] As a Reaction, you may attempt to block a Psychic or Cosmic Power before it takes effect, roll Psychic Fatigue checks equal to the G of the Power plus 1.", 
		      "Smother: Increase the reduction from Suppress by 1 (to a minimum of 1 check)."
        ],
        [
          "Disable: When you successfully block a Power, that Power is eligible for blocking on the next turn.",
		      "Denial: Reduce the number of Psychic Fatigue checks required to Counter a Power by 2 (to a minimum of 1 check)."
        ],
        [
          "Permission: [Activate] When you successfully block a Power for a second time in a row, roll a Power vs Will check against the creature. On a success, the creature may only attempt to use that Power when you give it permission. After a Full Sleep the creature may attempt a Power vs Will check to end this effect."
        ],
        [
          "Dominate: [Activate] When a creature fails the check to end the effect of Permission, Permission may deny attempts to use any Power from its Source."
        ]
      ]
    },
    {
      name: "Threads",
      attributes: "[Ranged] [Action] [Contract]",
      description: "Select a creature you are aware of within 50 ft. You reach out with your mind and attach a Thread to the mind of that creature. The creature is made aware of you. You may extend your line of sight to include that creature's line of sight. The creature may, as a Minor Action, make a Will check vs your own Will check to remove the Thread. The Thread lasts for 30 minutes, or until the creature becomes unconscious or the creature moves 1 mile away from you. Up to 1 Thread may be active at one time. A creature may only have 1 Thread attached to it at one time.",
      proficiencies: [
        [],
        [
          
        ]
      ]
    }
  ],
  [
    {
      name: "Psychosomatic",
      attributes: "[Activate] [Self] [Passive]",
      description: "Choose 1 Power from the Mutation Source at the time you take this Gift. This is now a Psychic Power you may use. If it causes, refers to, uses, or spends Strain you instead use 1 Psychic Fatigue check for every 10% of your max survival needed to be substituted as Strain points. Using this Power uses your Activation Action in addition to the Action requirements of the selected Power.",
      proficiencies: []
    }
  ]
]