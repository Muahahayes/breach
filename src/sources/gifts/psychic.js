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
          "Echo: [Action] As an Action you may do a second Psi Burst, this second use must not use the same status effect as the first but may use your Activation Action a second time.",
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
          "Subconscious: Now the first time in a combat with a creature when you use Subtle and deal damage with this Shock, if you succeed and do not damage their Life they are not alerted to your presence.",
          "Twin Shock: [Activate] [Action] As an Activation Action you may use a Full Action to cast an exact copy of this Shock at the same target. This second Shock costs 3 ae and may use a different damage type if you have taken the Elemental proficiency."
        ]
      ]
    },
    {
      name: "Psionic Blade",
      attributes: "[Free] [Melee]",
      description: "You extend a violent Psychic energy from your hand. After making a basic unarmed melee attack, add 1d4 psychic damage to this attack. Usable once per turn. This Power does not trigger the usual Psychic Fatigue check if the attack hits.",
      proficiencies: [
        [
          "Empowered: Add your Will to the damage."
        ],
        [
          "Sheath: You may use Psionic Blade with a sharp or piercing damage melee weapon.", 
          "Horrific: [Activate] Instead of dealing the additional psychic damage, you may Frighten the target for one turn.",
          "Thundering Blade: You may use electric damage instead of psychic.",
          "Impact: Increases the damage to 1d6."
        ],
        [
          "Swift Strike: [Activate] After landing a melee hit, add G to your next speed roll when determining turn order.", 
          "Phase: [Activate] The blade cuts through armor more effectively, add G to your attack roll.",
          "Magnitude: Increases the damage to 1d8. Requires Impact.",
          "Quirked: When using a Quirk on this attack, increase the damage to 1d10."
        ],
        [
          "Cleave: [Activate] When you hit your target, deal the Psionic Blade damage to each creature within melee range of the target which has an avoidance lower than the attack roll.", 
          "Overwhelming: [Activate] Increases the damage to 2d6. Reroll any of these dice that roll a 1. Keep the new result. Requires Magnitude. Also, passively increase the effect of Quirked to 2d8.",
          "Rapid: Psionic Blade is usable more than once per turn, but only once per attack."
        ],
        [
          "Adaptive: You may use two [Activate] Proficiencies for Psionic Blade with one Activation Action.", 
          "Advantage: When you have Favored on the attack, you may add 2d6 damage to the attack."
        ]
      ]
    },
    {
      name: "Pyrokinesis",
      attributes: "[Action] [Ranged]",
      description: "As an Action you may either snuff out a torch sized flame within 10 ft, or ignite a small flame in your hand which you may hold for up to 10 minutes or throw up to 10ft away. If you throw the flame, it must land on a flammable surface or it will snuff out. As a Full Action you may ignite a flame which quickly grows and fans out from your hand in a 10 ft cone in front of you. Every creature within the area must roll a d20 + Athletics vs Power to avoid the fire. On a Success they avoid being hit. Deal 1d4 Fire damage to every creature that Fails.",
      proficiencies: [
        [
          "Empowered: Add your Will to any damage done by Pyrokinesis.",
          "Spectacle: [Activate] You may shape the flame into moving silhouettes. You may use the flame in Perform or Disruption checks as an Activate Action to add your Will to the check."
        ],
        [
          "Blaze: [Action] As a Full Action, you ignite a streak of fire that shoots out in a straight line. Make a ranged Power attack against a creature you can see within 30 ft. On a hit deal 1d8 Fire damage.",
          "Heat: Increase the damage of Pyrokinesis' Full Action attack to 1d6.",
          "Warmth: [Free] You may produce a radiant heat at will, warming the area around you by 10 F within 10 ft. Lasts as long as desired. This effect is disabled if you enter Psychic Exhaustion.",
          "Manipulation: [Action] As an Action you gather the fire within a 5 ft radius you can see within 10 ft and may move it up to 20 ft in any direction. Any creature within the fire's destination must roll a d20 + Athletics vs Power to avoid the fire, On a Success they avoid being hit. Deal 1d4 Fire damage to every creature that Fails."
        ],
        [
          "Ignition: [Activate] Whenever one or more creatures Hard Fail a check to avoid fire from Pyrokinesis, you may spend an Activation Action to apply a Burn to the creatures for 2 turns which deals 1d4 Fire damage.",
          "Reach: Your base Pyrokinesis Action can snuff or throw flames up to 20 ft away, your base Pyrokinesis Full Action effects a 15 ft cone, and your Manipulation proficiency can move fire up to 30 ft.",
          "Impact: Increase the damage of the base Pyrokinesis Full Action and Manipulation proficiency to 1d6, and increase the damage of Blaze to 1d10.",
          "Flash: [Action] As a Full Action you may release a spark which briefly shines a bright light in a 50 ft radius. All creature's receive a -1 Unfavored on their Stealth and Hide checks until the end of the next Round."        
        ],
        [
          "Kindling: You may activate Ignition on Soft Fails. The Burn now deals 1d6 damage over 3 turns.",
          "Magnitude: Increase the damage of the base Pyrokinesis Full Action and Manipulation proficiency to 1d8, and increase the damage of Blaze to 2d6. Requires Impact.",
          "Spread: Increase the range of Blaze to 40 ft, and increase your base Pyrokinesis Full Action effect's cone size by 5 ft."        
        ],
        [
          "Eruption: [Activate] As an Activation Action when you use Blaze, you may release a spurt of molten magma at the target's feet. All creature's within 10 ft of the target must roll a d20 + Athletics vs Power to avoid the magma. On a Hard Success they move out of the area, on a Soft Success they take Blaze's regular damage, on a Fail they take double Blaze's regular damage, and on a Hard Fail they also receive a Burn for 1d8 over 3 turns. Roll an additional Psychic Fatigue check with -1 Unfavored.",
          "Combustion: [Activate] You may use Manipulation to move fire you can see within 50 ft in a radius of 100 ft. Increase the distance you can move this fire by 30 ft. This increases the damage of this Manipulation to 1d8 for every 20 ft in the radius of the fire. Deal half damage to any creature that Soft Succeeds its Athletics check. Roll 2 additional Psychic Fatigue checks with -1 Unfavored."        
        ],
        [
          "Inferno: Increase the radius of Combustion by 100 ft."
        ]
      ]
    },
    {
      name: "Foresight",
      attributes: "[Free] [Self]",
      description: "Use while performing a skill check, the next time you use that same skill (After at least an hour has passed), add double your normal skill bonus to that roll. This roll cannot Hard Succeed. You may store one Foresight roll at a time, you may not store a Foresight roll from a skill check that is using a Foresight roll.",
      proficiencies: [
        [// TODO: if skills become percentile, redo forecast. instead, you 'save' ONE of the d10 rolls (and if its tens or ones digit) and may use that in the next percentile roll
          "Forecast: [Free Action] Before rolling any d20 you may call out a number between 1-4. Roll a d4 and the d20, if you roll your chosen d4 number you may 'save' the number shown on the d20 and do not need to roll a Psychic Fatigue check. The next time you use a d20 for the same purpose, you may substitute the roll with the saved number. If you fail to roll your chosen number, roll a Psychic Fatigue check. You can store a Forecast roll once per full sleep.",
		      "Mulligan: If you fail to guess correctly but succeed the Psychic Fatigue check from the Forecast proficiency you may attempt your Forecast again. Limit of one Mulligan per Forecast used."
        ],
        [
          "Prophetic: You may store a Forecast roll 2 additional times per full sleep, but may only store one roll at a time.",
          "Clairvoyant: You may store a second Foresight roll at a time.",
          "Premonition: As an Action you may roll a Speed check, at the start of any round in the current combat you may use this result instead of rolling a Speed check, this uses up the Premonition result. You may store one Premonition result at one time.",
          "Clarity: [Free Action] When rolling any d20 (even a Skill check not affected by Foresight) you may substitute it with a d10+10 (Once per day). Rolling a 1 or a 10 on this d10 does not count as 'natural'.",
          "Inspiration: When using the Clarity proficiency, if the d20 being substituted was from a Foresight triggering Skill check, you may choose to either add your Will to the result, or this roll does not count towards Clarity's once per day limit (But once this limit has been used, Inspiration can not trigger)."
        ],
        [
          "Focused: You may attempt a Forecast roll after seeing the result of the d20 roll."
        ]
      ]
    },
    {
      name: "Pursuit",
      attributes: "[Action] [Melee]",
      description: "When you hit a creature with a basic melee attack you may spend a Full Action to begin a Pursuit on that creature. The creature must roll a d20 + Will vs the value of your attack roll. On a Soft Fail they are under a Pursuit for your next 2 turns. On a Hard Fail the Pursuit lasts 3 turns. During a Pursuit, whenever you hit that creature with a basic melee attack roll a Psychic Fatigue check and if you succeed add 1d4 to the damage dealt. Only one creature may be under your Pursuit at a time.",
      proficiencies: [
        [
          "Quirked: Whenever you apply a Quirk in a roll involving the creature, gain Favored +1 to the roll.",
          "Empowered: Add your Will to the damage dealt by Pursuit."
        ],
        [
          "Impact: Increase the damage to 1d6.",
          "Ease: You no longer need to make a Psychic Fatigue check when Pursuit triggers from a basic melee attack.",
          "Gifted: You may trigger Pursuit on any attack or power which deals damage while you are within 10 feet of the creature."
        ],
        [
          "Magnitude: Increase the damage to 1d8. Requires Impact.",
          "Chase: [React] If the creature moves further than 10 feet away from you, as a Reaction Action you may move 10 feet towards the creature.",
          "Pressure: While a creature is under your Pursuit, you may give the creature an Unfavored -1 to attack and power rolls against you, but you do not gain the benefits of the Advantage proficiency. Requires Advantage.",
          "Advantage: While a creature is under your Pursuit, gain Favored +1 to your basic melee attack rolls against that creature."
        ],
        [
          "Fork: You may apply your Pursuit to a second creature at a time.",
          "Split: [Activate] If two creatures have your Pursuit and are both within 10 feet of you, you may use your Activation Action to perform a basic melee attack on each of the creatures.",
          "Relentless: Chase also allows you to make a basic melee attack on the creature as a Free Action.",
          "Force: Whenever you apply a Quirk to a roll which results in damage, increase the damage by 1d6."
        ],
        [
          "Favored: Advantage now applies to any rolls against the creature.",
          "Debilitate: [Activate] When Pursuit deals damage, you may instead deal 0 damage and reduce the creature's survival by half the damage it would have dealt. This survival is restored if the creature receives healing equal to its original max survival or when it completes a Full Sleep."
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
      description: "Select a creature you are aware of within 50 ft. You reach out with your mind and attach a Thread to the mind of that creature. The creature is made aware of you. You may extend your line of sight to include that creature's line of sight. The creature may, as an Action, make a Will check vs your own Will check to remove the Thread. The Thread lasts for 30 minutes, or until the creature becomes unconscious or the creature moves 1 mile away from you. Up to 1 Thread may be active at one time. A creature may only have 1 Thread attached to it at one time.",
      proficiencies: [
        [],
        [
          "Subtle: The creature is not made aware of you from this Power. It is made aware of the Thread when it becomes aware of you.",
		      "Branching: You may have up to 2 Threads active at one time.",
 		      "Duration: Your Threads now last for 1 day."
        ],
        [
          "Command: When a Thread is attached to a creature which is not a person, you may convert the creature into a minion. On its turn you may make it do a Full Action and a Movement Action, doing so uses your Activation Action. To convert the creature you must make a Will check vs its own d20 + (G + Will) check. On the first turn of every combat and after a Full Sleep, the creature may attempt to remove the Thread.",
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
      description: "Choose 1 Gift from the Mutation Source at the time you take this Gift. This is now a Psychic Awakening Power you may use. If it causes, refers to, uses, or spends Strain you instead use 1 Psychic Fatigue check for every G Strain. Using this Power uses your Activation Action in addition to the Action requirements of the selected Power.",
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
/*
{
  name: "",
  attributes: "",
  description: "",
  proficiencies: [
  ]
}
*/