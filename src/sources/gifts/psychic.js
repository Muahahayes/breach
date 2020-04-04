export default [
  [// 1G
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
  ],// 1G
  [// 2G
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
      description: "You reach out with your mind to disrupt the flow of energy within a creature you can see. On that creature's next turn, you nullify the first use of a Power it used on its previous turn. Roll a normal Psychic Fatigue check to place the Disruption on them. The first time they attempt to use a Disrupted Power roll additional Psychic Fatigue checks equal to the G of the Power they attempt to use, if you succeed they cannot use the Power and lose any Actions the Power required. If you fail one of the additional checks they may use the Power but you do not go into Psychic Exhaustion.",
      proficiencies: [
        [],
        [
          "Suppress: Reduce the number of Psychic Fatigue checks required to Disrupt a Power by 1 (to a minimum of 1 check)."
        ],
        [
          "Counter: [React] As a Reaction, you may attempt to nullify a Psychic or Cosmic Power before it takes effect, roll Psychic Fatigue checks equal to the G of the Power plus 1.", 
		      "Smother: Increase the reduction from Suppress by 1 (to a minimum of 1 check)."
        ],
        [
          "Disable: When you successfully nullify a Power, that Power is eligible for nullifying on the next turn.",
		      "Denial: Reduce the number of Psychic Fatigue checks required to Counter a Power by 2 (to a minimum of 1 check)."
        ],
        [
          "Permission: [Activate] When you successfully nullify a Power for a second time in a row, roll a Power vs Will check against the creature. On a success, the creature may only attempt to use that Power when you give it permission. After a Full Sleep the creature may attempt a Power vs Will check to end this effect."
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
          "Subtle: The creature is not made aware of you from this Power. It is made aware of the Thread when it becomes aware of you.",
		      "Branching: You may have up to 2 Threads active at one time.",
 		      "Duration: Your Threads now last for 1 day."
        ],
        [
          "Command: When a Thread is attached to a creature which is not a person, you may convert the creature into a minion. On its turn you may make it do a Full or Minor Action and a Movement Action, doing so uses your Activation Action. To convert the creature you must make a Will check vs its own d20 + (G + Will) check. On the first turn of every combat and after a Full Sleep, the creature may attempt to remove the Thread.",
          "Influence: While a person has a Thread attached to them, increase their Regard for you by G."
        ],
        [
          "Propagation: You may use the Threads power on creatures within 50 ft of a creature you currently have a Thread attached to.",
		      "Iron Grip: The creature must make a Will check vs your own Power check (instead of vs your own Will check) to remove the Thread.",
		      "Multiply: You may have up to G more Threads active at one time. Requires Branching."
        ],
        [
          "Control: You may use Command on a person. Only 1 Thread may use Control at one time. You may only use Control on a person with a regard for you greater than -1.",
		      "Double: You may use Control on 2 Threads at one time."
        ],
        [
          "Deep Roots: Threads persist through the creature becoming unconscious and have no time limit."
        ]
      ]
    }
  ],// 2G
  [// 3G
    {
      name: "Psychosomatic",
      attributes: "[Activate] [Self] [Passive]",
      description: "Choose 1 Power from the Mutation Source at the time you take this Gift. This is now a Psychic Awakening Power you may use. If it causes, refers to, uses, or spends Strain you instead use 1 Psychic Fatigue check for every G Strain. Using this Power uses your Activation Action in addition to the Action requirements of the selected Power.",
      proficiencies: []
    },
    {
      name: "Twist Reality",
      attributes: "[Action] [Melee]",
      description: "\\:You touch the head of a person who has a high regard for you, if their regard is greater than 2 you may impose a trigger or rule for how one aspect of their psyche interprets their world. The effect fails if their regard is not high enough, and causes them to lose 2 regard for you. Examples: \"all puppies look like dangerous wolves\", \"people who offer you a handshake are trying to recruit you into a shadowy organization/death cult\", \"if you don't walk up this hill and say hello to every sunrise you will die\". They roll a d20 + Insight vs Power to resist the new twist, on any Success they resist the effect and lower their regard for you by 2 or set it to -2 whichever results in a lower value, on a Soft Fail they may make a new harder check (add their regard to your Power roll) each time it triggers, on a Hard Fail they may not. For these triggered checks, on a Hard Success the effect ends, on a Soft Success they grow suspicious and lower their regard toward the Psychic by 1. They may also make the harder check when a person brings their attention to it, once per trigger, even if they Hard Failed the original check. For this assisted check the victim can use their Insight or the assisting person's Persuasion, whichever is higher. On a Hard Success the effect ends, on a Soft Success they grow suspicious and lower their regard towards the Psychic by 1, on a Hard Fail they lower regard of the person helping them by 1. The effect lasts for 1 week and ends prematurely if they go 10 miles away from you or if you enter Psychic Exhaustion within sight of them.",
      proficiencies: [
        [],[],
        [
          "Persuasive: You may use your Persuasion skill instead of Power.",
		      "Lucid: You are immune to the Twist Reality Power from other Psychics.",
		      "Confidant: You may use this Power if their regard is greater than 1."
        ],
        [
          "Belief: [Activate] A Soft Fail on the original check no longer allows them to roll repeated checks when the effect triggers in future.",
		      "Fanatic: On a Soft Fail on an assisted check they lower regard of the person helping them by 1.",
		      "Deep Rooted: The effect lasts 1 year and no longer ends if they go 10 miles away."
        ],
        [
          "Zealous: When the victim lowers their regard for an assisting person, lower it by 2.",
		      "Devoted: [Activate] Assisted and triggered checks cannot Hard Succeed if their regard for the Psychic is greater than 0. They gain 1 regard for the Psychic whenever they Hard Fail any check against this Power up to a Max regard of 5."
        ]
      ]
    }
  ]// 3G
]
