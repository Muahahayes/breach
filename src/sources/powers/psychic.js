export default [//TODO: change profs that add additional psychic fatigue checks to have Effort +1
  [// LVL 1
    {
      name: "Contract",
      attributes: "[Passive] [Self]",
      description: "You may take this Power at and only at [LVL 1]. When your Powers awakened inside you there was a small tear in the Aether of your soul. You commune with a powerful creature through the tear and are granted otherworldly power in exchange for a Contract you agree to uphold (usually has conditions that must be met). Create a new Promise Quirk to represent this Contract. This creature may speak to your mind through the tear during a Full Sleep at its discretion. You gain two [LVL 1] or one [LVL 1] and one [LVL 2] Contract Powers for free. Contract Powers may also be selected by Psychics who do not make a Contract, unless stated otherwise, but Proficiencies marked [Contract] may only be used with an active Contract. These Powers you get for free come from your Contract and if you violate the Contract they may be lost, you may regain these Powers by reconciling your Contract or creating a new Contract with this or another powerful otherworldly being. When you level in future, you may only select Powers of [LVL 3] or below, you may only select higher level Powers if they are marked as a Contract Power.",
      proficiencies: []
    },
    {
      name: "Psi Burst",
      attributes: "[Action] [Ranged] [AOE]",
      description: "Releases a burst of psychic energy in a 30 ft range centered on your character. Every creature within the effect must roll a Will check. Deals LVL kinetic damage on a failed Will check.",
      proficiencies: [
        [
          "Scream: [Activate] Instead of dealing damage or other effects, you may inflict Fear on every target hit for LVL turns, at the end of each turn they may roll a Will check vs [15 + Will] to end the effect.",
          "Feedback: [Activate] Instead of dealing damage or other effects, you may force a Psychic Fatigue check on every target hit which has a Psychic Source.",
          "Wave: In addition to dealing damage, you may push all targets hit 10 ft away from you.",
          "Impact: Deals an additional 1d4.",
          "Shout: [Activate] Instead of dealing damage or other effects, as an Activation Action you may inflict Stun on every target hit for 1 turn. Roll an additional Psychic Fatigue check for each target hit. You do not regain this Activation Action on your next turn."
        ],
        [
          "Echo: [Action] As an Action you may do a second Psi Burst, this second use must not use the same status effect as the first but may use your Activation Action a second time.",
          "Telepathic: You may roll your attack vs their Avoidance + Will instead, this Power deals Psychic damage instead of Kinetic when used this way.",
          "Magnitude: Increases the damage of Impact to 1d6.",
          "Focused: You may direct your Psi Burst at a single creature in range. Instead of dealing damage or other effects, inflict Dumb on hit for LVL turns."
        ],
        [
          "Lingering: Your Shout proficiency lasts 1 additional turn. Your Focused proficiency lasts up to 1 day."
        ]
      ]
    },
    {
      name: "Shock",
      attributes: "[Action] [Ranged] [Single Target] [Contract]",
      description: "Point at a creature or object within 30ft. You release a blast of psychic energy at the target dealing 1d6 psychic damage. The creature affected by Shock can hear a screeching in their mind, but otherwise it makes no sound. It creates a warped cascade of light as it travels to its target.",
      proficiencies: [
        [
          "Forceful: Add 1d4 to the damage roll. (Repeatable up to LVL)",
          "Impact: Increase the damage roll to 1d8.",
          "Telekinetic: Your shock may use kinetic energy, dealing blunt type damage.",
          "Tranquility: You may still use Shock while afflicted by Psychic Break, however only the Empowered and Impact proficiencies will benefit your shocks used in this way.",
          "Reach: Increase the range to 50ft.",
        ],
        [
          "Empowerment: Add your Will to the damage roll (in addition to the Will Primary benefit).",
          "Magnitude: Increase the size of the Forceful dice rolled to a d6.",          
          "Greater Impact: Increase the damage roll to 1d10. Requires Impact.",
          "Discharge: [Activate] You may roll a second Power roll, compare this roll to the avoidance of each creature within 5ft of the target of your Shock. Any creature who has a lower avoidance than your roll is hit by the Discharge, roll your Forceful dice and distribute the number of dice equally between the creatures hit to deal the damage of each die to its respective creature. Do not apply your Forceful dice to the original target of your Shock when using Discharge.",
          "Subtle: [Activate] As an Activation Action you may suppress the light emitted by the Shock. If a creature(s) within range is not aware of you, you may roll a Hide check vs the Awareness Roll of the creature(s). If you succeed and do not damage the creature, this Shock does not alert them to your presence. If you succeed and damage the creature, they are aware of you but not your location.",
          "Overwhelming: [Contract] Increase the damage roll to 2d6. If you have a Contract increase this to 2d8 instead. Requires Greater Impact.",
          "Greater Magnitude: Increase the size of the Forceful dice to a d8."
        ],
        [
          "Subconscious: Now the first time in a combat with a creature when you use Subtle and deal damage with this Shock, if you succeed and do not damage their Life they are not alerted to your presence.",
          "Twin Shock: [Activate] [Action] As an Activation Action you may use a Full Action to cast an exact copy of this Shock at the same target. This second Shock costs 3 ae and may use a different damage type if you have taken the Telekinetic proficiency."
        ]
      ]
    },
    {
      name: "Illusory Arrow",
      attributes: "[Action] [Ranged]",
      description: "You weave a colored arrow of light and project it out of a ranged weapon. Make a basic ranged weapon attack. A glowing streak of color sails through the air towards the target, dealing an additional 1d4 Psychic damage on hit. This attack uses no ammo but has no effect on blind creatures.",
      proficiencies: [
        //TODO
      ]
    },
    {
      name: "Psionic Blade",
      attributes: "[Free] [Melee]",
      description: "You extend a shard of violent Psychic energy from your hand. Make a basic unarmed melee attack, on a hit add 1d4 psychic damage to the attack. Usable once per turn. This Power does not trigger the usual Psychic Fatigue check if the attack hits.",
      proficiencies: [
        [
          "Sheath: You may use Psionic Blade with a sharp or piercing damage melee weapon.", 
          "Horrific: [Activate] Instead of dealing the additional psychic damage, you may Frighten the target for one turn.",
          "Thundering Blade: You may use electric damage instead of psychic.",
          "Impact: Increases the damage to 1d6."
        ],
        [
          "Swift Strike: [Activate] After landing a melee hit, add LVL Initiative to your next speed roll when determining turn order.", 
          "Phase: [Activate] The blade cuts through armor more effectively, add LVL to your attack roll.",
          "Magnitude: Increases the damage to 1d8. Requires Impact.",
          "Quirked: When using a Quirk on this attack, increase the damage to 1d10.",
          "Cleave: [Activate] When you hit your target, deal the Psionic Blade damage to each creature within melee range of the target which has an avoidance lower than the attack roll. This damage ignores Armor.", 
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
      description: "As an Action you may either snuff out a torch sized flame within 10 ft, or ignite a small flame in your hand which you may hold for up to 10 minutes or throw up to 10ft away. If you throw the flame, it must land on a flammable surface or it will snuff out. As a Full Action you may ignite a flame which quickly grows and fans out from your hand in a 10 ft cone in front of you. Every creature within the area must roll an Agility Save to avoid the fire. On a Success they avoid being hit. Deal 1d4 Fire damage to every creature that Fails.",
      proficiencies: [
        [
          "Spectacle: [Activate] You may shape the flame into moving silhouettes. You may use the flame in Perform or Disruption checks as an Activate Action to add your Will to the check.",
          "Blaze: [Action] As a Full Action, you ignite a streak of fire that shoots out in a straight line. Make a ranged Power attack against a creature you can see within 30 ft. On a hit deal 1d8 Fire damage.",
          "Heat: Increase the damage of Pyrokinesis' Full Action attack to 1d6.",
          "Warmth: [Free] You may produce a radiant heat at will, warming the area around you by 10 F within 10 ft. Lasts as long as desired. This effect is disabled if you enter Psychic Exhaustion.",
          "Manipulation: [Action] As an Action you gather the fire within a 5 ft radius you can see within 10 ft and may move it up to 20 ft in any direction. Any creature within the fire's destination must roll an Agility Save to avoid the fire, On a Success they avoid being hit. Deal 1d4 Fire damage to every creature that Fails."
        ],
        [
          "Ignition: [Activate] Whenever one or more creatures Hard Fail a check to avoid fire from Pyrokinesis, you may spend an Activation Action to apply a Burn to the creatures for 2 turns which deals 1d4 Fire damage.",
          "Reach: Your base Pyrokinesis Action can snuff or throw flames up to 20 ft away, your base Pyrokinesis Full Action effects a 15 ft cone, and your Manipulation proficiency can move fire up to 30 ft.",
          "Impact: Increase the damage of the base Pyrokinesis Full Action and Manipulation proficiency to 1d6, and increase the damage of Blaze to 1d10.",
          "Flash: [Action] As a Full Action you may release a spark which briefly shines a bright light in a 50 ft radius. All creature's receive a -1 Unfavored on their Stealth and Hide checks until the end of the next Round.",
          "Kindling: You may activate Ignition on Soft Fails. The Burn now deals 1d6 damage over 3 turns.",
          "Magnitude: Increase the damage of the base Pyrokinesis Full Action and Manipulation proficiency to 1d8, and increase the damage of Blaze to 2d6. Requires Impact.",
          "Spread: Increase the range of Blaze to 40 ft, and increase your base Pyrokinesis Full Action effect's cone size by 5 ft."        
        ],
        [
          "Eruption: [Activate] As an Activation Action when you use Blaze, you may release a spurt of molten magma at the target's feet. All creature's within 10 ft of the target must roll an Agility Save to avoid the magma. On a Hard Success they move out of the area, on a Soft Success they take Blaze's regular damage, on a Fail they take double Blaze's regular damage, and on a Hard Fail they also receive a Burn for 1d8 over 3 turns. Roll an additional Psychic Fatigue check with -1 Unfavored.",
          "Combustion: [Activate] You may use Manipulation to move fire you can see within 50 ft in a radius of 100 ft. Increase the distance you can move this fire by 30 ft. This increases the damage of this Manipulation to 1d8 for every 20 ft in the radius of the fire. Deal half damage to any creature that Soft Succeeds its Athletics check. Roll 2 additional Psychic Fatigue checks with -1 Unfavored.",
          "Inferno: Increase the radius of Combustion by 100 ft."
        ]
      ]
    },
    {
      name: "Foresight",
      attributes: "[Free] [Self]",
      description: "Use while performing a Skill check, the next time you use that same Skill (After at least an hour has passed), add double your normal Skill bonus to that roll. This roll cannot Hard Succeed. You may store one Foresight roll at a time, you may not store a Foresight roll from a skill check that is using a Foresight roll.",
      proficiencies: [
        [
          "Forecast: [Free Action] Before rolling any d20 you may call out a number between 1-4. Roll a d4 and the d20, if you roll your chosen d4 number you may 'save' the number shown on the d20 and do not need to roll a Psychic Fatigue check. The next time you use a d20 for the same purpose, you may substitute the roll with the saved number. If you fail to roll your chosen number, roll a Psychic Fatigue check. You can store a Forecast roll once per Full Sleep.",
		      "Mulligan: If you fail to guess correctly but succeed the Psychic Fatigue check from the Forecast proficiency you may attempt your Forecast again. Limit of one Mulligan per Forecast used."
        ],
        [
          "Prophetic: You may store a Forecast roll 2 additional times per full sleep, but may only store one roll at a time.",
          "Clairvoyant: You may store a second Foresight roll at a time.",
          "Premonition: As an Action you may roll a Speed check, at the start of any round in the current combat you may use this result instead of rolling a Speed check, this uses up the Premonition result. You may store one Premonition result at one time.",
          "Clarity: [Free Action] When rolling any d20 (even a Skill check not affected by Foresight) you may substitute it with a d10+10 (Once per day). Rolling a 1 or a 10 on this d10 does not count as 'natural'.",
          "Inspiration: When using the Clarity proficiency, if the d20 being substituted was from a Foresight triggering Skill check, you may choose to either add your Will to the result, or this roll does not count towards Clarity's once per day limit (But once this limit has been used, Inspiration can not trigger).",
          "Focused: You may attempt a Forecast roll after seeing the result of the d20 roll."
        ]
      ]
    },
    {
      name: "Pursuit",
      attributes: "[Action] [Melee]",
      description: "When you hit a creature with a basic melee attack you may spend a Full Action to begin a Pursuit on that creature. The creature must roll a Will Save. On a Soft Fail they are under a Pursuit for your next 2 turns. On a Hard Fail the Pursuit lasts 3 turns. During a Pursuit, whenever you hit that creature with a basic melee attack roll a Psychic Fatigue check and if you succeed add 1d4 to the damage dealt. Only one creature may be under your Pursuit at a time.",
      proficiencies: [
        [
          "Quirked: Whenever you apply a Quirk in a roll involving the creature, gain Favored +1 to the roll.",
          "Charge: [Activate] After moving you may, as an Activation Action, use your Full Action to make a basic melee attack against a creature you are Pursuing if you are within melee range. This does not cause a Psychic Fatigue check.",
          "Impact: Increase the damage to 1d6.",
          "Ease: You no longer need to make a Psychic Fatigue check when Pursuit triggers from a basic melee attack.",
          "Improved Charge: The basic melee attack from Charge no longer costs a Full Action.",
          "Phase Rush: [Action] While within 20 ft of a creature you are Pursuing you may, as a Full Action, blur out of phase with the physical world and be pulled towards them. You appear 1 second later at a point you can see within 5 ft of the creature. This causes a Psychic Fatigue check."
        ],
        [
          "Magnitude: Increase the damage to 1d8. Requires Impact.",
          "Chase: [React] Using an Opportunity to Chase a creature you are Pursuing is increased to 10 ft.",
          "Advantage: While a creature is under your Pursuit, gain a Favored +1 to your basic melee attack rolls against that creature.",
          "Pressure: While a creature is under your Pursuit, you may give the creature an Unfavored -1 to attack and power rolls against you, but you do not gain the benefits of the Advantage proficiency. Requires Advantage.",
          "Gifted: You may trigger Pursuit on any attack or power which deals damage while you are within 10 feet of the creature.",
          "Fork: You may apply your Pursuit to a second creature at a time.",
          "Split: [Activate] If two creatures have your Pursuit and are both within 10 feet of you, you may use your Activation Action to perform a basic melee attack on each of the creatures.",
          "Relentless: Chase also allows you to make a basic melee attack on the creature as a Free Action.",
          "Force: Whenever you apply a Quirk to a roll which results in damage against a creature you are Pursuing increase the damage by 1d6."
        ],
        [
          "Favored: Advantage now applies to any rolls against the creature.",
          "Debilitate: [Activate] When Pursuit deals damage, you may as an Activation Action instead deal 0 damage and reduce the creature's max survival by half the damage your attack would have dealt. This survival is restored if the creature receives a healing amount which would bring it to its original max survival or when it completes a Full Sleep."
        ]
      ]
    },
    // add a non-combat related power
    {
      name: "Befuddle",
      attributes: "[Action] [Ranged]",
      description: "Point at a creature within 30 ft you can see. The creature must make a Will Save. On a Soft Fail the creature is Slowed -1 for 3 turns or 1 minute out of combat. On a Hard Fail the creature becomes confused and has difficulty keeping track of its surroundings, on its next turn or for the next 1 minute out of combat when it attempts to move it must roll a 2d4. The direction of its movement is determined by the result, with a 2 being diagonally behind it to the right, and diagonal values rotating counter clockwise to 8 being behind it to the left. A 5 is directly ahead of it. On a Hard Success, increase the difficulty of your Psychic Fatigue checks by 1.",
      proficiencies: [
        //TODO
      ]
    },
    {//TODO, remove due to the psychic fatigue rework?? or maybe have it lower the DC of the psychic fatigue checks
      name: "Focus",
      attributes: "[Action] [Self]",
      description: "During a Psychic Break you may spend a turn to Focus, this does not cause a Psychic Fatigue check. If you are not moved involuntarily, take Life damage, or are forced to take a Psychic Fatigue check during this time you retain this focus. If you take damage equal or greater than ½ your Survival, roll a Psychic Fatigue check to maintain this focus. During your next turn, if you still have this focus, you may use a Power as if you were not in a Psychic Break.",
      proficiencies: [
        [
          "Refreshment: If you retain the focus until the next turn, your Psychic Break ends, Refreshment is usable once per Full Sleep.",
          "Soothe: If you retain the focus until the next turn, you may remove 1 Blind, Deaf, Fear or Taunt effect from yourself."
        ],
        [
          "Relaxed: Your use of Refreshment is reset on a Break as well as a Full Sleep.",
          "Inner Peace: You may spend 30min building your focus, you ignore the next Psychic Fatigue check that is not caused by Fear, Stun or Incapacitated effects.",
          "Enhance: If you retain focus until the next turn, gain a Favored +1 to any attack rolls, checks, or damage done by any Powers during that turn. You do not need to be in a Psychic Break to use Focus.",
          "Respite: Increases the number of Refreshment uses by 1 (Repeatable up to 4 additional uses).",
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
      description: "You reach out with your mind to disrupt the flow of energy within a creature you can see. Roll a d20 + Power vs Power. On a Success roll your normal Psychic Fatigue check to place a Disruption on a Power they used on their most recent turn. This Disruption lasts until the end of their next turn. When they attempt to use a Disrupted Power roll additional Psychic Fatigue checks equal to the LVL of the Power they attempt to use, if you succeed they cannot use the Power and lose any Actions the Power required. If you fail one of the additional checks they may use the Power but you do not go into Psychic Exhaustion.",
      proficiencies: [
        [
          "Suppress: Reduce the number of Psychic Fatigue checks required to Disrupt a Power by 1 (to a minimum of 1 check).",
          "Hush: Instead of its usual effects, you may apply the Silence effect to the creature for 1 turn."
        ],
        [
          "Counter: [React] As a Reaction, you may attempt to Disrupt a Psychic or Cosmic Power the victim of your Disruption attempts before it takes effect, roll Psychic Fatigue checks equal to the LVL of the Power plus 1. If you succeed they cannot use the Power and lose any Actions required. If you fail one of these checks they may use the Power and you do not enter Psychic Exaustion.", 
		      "Smother: Increase the reduction from Suppress by 1 (to a minimum of 1 check).",
          "Disable: When you successfully nullify a Power, that Power remains Disrupted for one more turn.",
          "Denial: Reduce the number of Psychic Fatigue checks required to Counter a Power by 2 (to a minimum of 1 check).",
          "Censor: [Activate] You may, as an Activation Action, roll a d20 + Power vs Power against the creature each turn to continue the Silence effect from Hush."
        ],
        [
          "Permission: [Activate] When you successfully nullify a creature's Power twice in a row, roll a Power vs Will check against the creature. On a success, the creature may only attempt to use that Power when you give it permission. After every Full Sleep the creature may attempt another Power vs Will check to end this effect.",
          "Dominate: [Activate] When a creature fails the check to end the effect of Permission, Permission may deny attempts to use any Power from its Source."
        ]
      ]
    },
    {
      name: "Threads",
      attributes: "[Action] [Ranged] [Contract]",
      description: "Select a creature you are aware of within 50 ft. You reach out with your mind and attach a Thread to the mind of that creature. The creature is made aware of you. You may extend your line of sight to include that creature's line of sight. The creature may, as an Action, make a Will check vs your own Will check to remove the Thread. The Thread lasts for 30 minutes, or until the creature becomes unconscious or the creature moves 1 mile away from you. Up to 1 Thread may be active at one time. A creature may only have 1 Thread attached to it at one time.",
      proficiencies: [
        [
          "Subtle: The creature is not made aware of you from this Power. It is made aware of the Thread when it becomes aware of you.",
		      "Branching: You may have up to 2 Threads active at one time.",
 		      "Duration: Your Threads now last for 1 day."
        ],
        [
          "Command: When a Thread is attached to a creature which is not a person, you may convert the creature into a minion. On its turn you may make it do a Full Action and a Movement Action, doing so uses your Activation Action. To convert the creature you must make a Will check vs its own d20 + (LVL + Will) check. On the first turn of every combat and after a Full Sleep, the creature may attempt to remove the Thread.",
          "Influence: While a person has a Thread attached to them, increase their Regard for you by LVL.",
          "Propagation: You may use the Threads power on creatures within 50 ft of a creature you currently have a Thread attached to.",
		      "Iron Grip: The creature must make a Will check vs your own Power check (instead of vs your own Will check) to remove the Thread.",
		      "Multiply: You may have up to LVL more Threads active at one time. Requires Branching."
        ],
        [
          "Control: You may use Command on a person. Only 1 Thread may use Control at one time. You may only use Control on a person with a regard for you greater than -1.",
		      "Double: You may use Control on 2 Threads at one time.",
          "Deep Roots: Threads persist through the creature becoming unconscious and have no time limit."
        ]
      ]
    },
    {
      name: "Restraining Light",
      attributes: "[Action] [Ranged]",
      description: "A cage formed out of light appears around a creature you can see within 30 ft. They must make a Will Save to resist the effect, on a Fail they are Snared for 1 Round. This has no effect on creatures with a Will less than 1.",
      proficiencies: [
        [
          //cage all creatures in a 5ft radius
          //can extend duration by spending an Activation Action each turn, creatures may make the Will Save on each turn
          //prevent creature from making a melee attack
          //may effect creatures with low Will
        ]
      ]
    }
    // scrying
  ],// LVL 2
  [// LVL 3
    {
      name: "Psychosomatic",
      attributes: "[Activate] [Self] [Passive]",
      description: "At the time you take this Power, choose 1 Power from the Mutation Source which is of [LVL 3] or below, this is now a Psychic Awakening Power you may use. If it causes, refers to, uses, or spends Strain you instead use 1 Psychic Fatigue check for every LVL Strain. Using this Power uses your Activation Action in addition to the Action requirements of the selected Power.",
      proficiencies: []
    },
    {
      name: "Twist Reality",
      attributes: "[Action] [Touch]",
      description: "\\:You touch the head of a person who has a high regard for you, if their regard is greater than 2 you may impose a trigger or rule for how one aspect of their psyche interprets their world. The effect fails if their regard is not high enough, and causes them to lose 2 regard for you. Examples: \"all puppies look like dangerous wolves\", \"people who offer you a handshake are trying to recruit you into a shadowy organization/death cult\", \"if you don't walk up this hill and say hello to every sunrise you will die\". They roll a d20 + Insight vs Power to resist the new twist, on any Success they resist the effect and lower their regard for you by 2 or set it to -2 whichever results in a lower value, on a Soft Fail they may make a new harder check (add their regard to your Power roll) each time it triggers, on a Hard Fail they may not. For these triggered checks, on a Hard Success the effect ends, on a Soft Success they grow suspicious and lower their regard toward the Psychic by 1. They may also make the harder check when a person brings their attention to it, once per trigger, even if they Hard Failed the original check. For this assisted check the victim can use their Insight or the assisting person's Persuasion, whichever is higher. On a Hard Success the effect ends, on a Soft Success they grow suspicious and lower their regard towards the Psychic by 1, on a Hard Fail they lower regard of the person helping them by 1. The effect lasts for 1 week and ends prematurely if they go 10 miles away from you or if you enter Psychic Exhaustion within sight of them.",
      proficiencies: [
        [],
        [
          "Persuasive: You may use your Persuasion skill instead of Power.",
		      "Lucid: You are immune to the Twist Reality Power from other Psychics.",
		      "Confidant: You may use this Power if their regard is greater than 1.",
          "Belief: [Activate] A Soft Fail on the original check no longer allows them to roll repeated checks when the effect triggers in future.",
		      "Fanatic: On a Soft Fail on an assisted check they lower regard of the person helping them by 1."		      
        ],
        [
          "Deep Rooted: The effect lasts 1 year and no longer ends if they go 10 miles away.",
          "Zealous: When the victim lowers their regard for an assisting person, lower it by 2.",
		      "Devoted: [Activate] Assisted and triggered checks cannot Hard Succeed if their regard for the Psychic is greater than 0. They gain 1 regard for the Psychic whenever they Hard Fail any check against this Power up to a Max regard of 5."
        ]
      ]
    },
    {
      name: "Illusory Chains",
      attributes: "[Action] [Melee]",
      description: "Chains appear that extend from your hands. They reach up to 10 ft away from you and last for 1 hour. You may make unarmed melee attacks using the chains to deal 1d6 Kinetic damage. You may grapple creatures within reach of the chains, doing so uses your Power skill instead of Athletics. A creature may make an Awareness check vs Power to see through the illusion, on a Soft Success they may not be grappled by these chains and on a Hard Success they also may not be damaged by these chains.",
      proficiencies: [
        [],
        [
          /*
          prof ideas
          increase damage
          allow you to climb with them
          allow you to Block using the chains
          increase the reach to 15 ft for making attacks
          if a creature hard fails their attempt to end the grapple, you may leave chains behind that do not go away until they succeed the grapple or you enter a psychic break
          while grappled the creature is compelled to only speak truths
          */
        ]
      ]
    },
    {
      name: "Bewitching Colors",
      attributes: "[Action] [Ranged]",
      description: "Point at a creature you can see within 30 ft. A dazzling display of colors appears before their eyes, they must roll a Will Save. On a Fail they are under the spell of the lights, hindering their actions and causing them to be Paralyzed on their next turn.",
      proficiencies: [
        /*TODO
          can maintain this up to a minute by spending your activation action each turn
          on a hard fail they are Asleep with their eyes open
          after the effect ends they receive an Unfavored -1 on their next roll against you
          you can use the effect to communicate visual and auditory information to the creature
         */
      ]
    },
    {
      name: "Mind Flay",
      attributes: "[Action] [Ranged]",
      description: "Point at a creature in your line of sight within 50 ft. Dark and twisted horrors flash before their eyes. Roll a d20 + Use Power vs their Insight. On a Success they may not target you with an Action on their next turn. On a Hard Success they are Feared for 1 turn and must move away from you.",
      proficiencies: [
        [],
        [
          "Trauma: [Activation] After the Fear effect ends, as an Activation Action you may induce Trauma. The Trauma causes the creature to receive an Unfavored -1 for all d20 rolls against you. The Trauma persists until it succeeds a d20 roll against you or a Psychic with a higher Use Power Skill than your own spends 1 hour to end the effect.",
          "Terrify: You may perform an additional Psychic Fatigue check before rolling your Use Power check against the creature, if you succeed the target will also receive the Fear effect on a Soft Success.",
          "Probe: You probe into their mind and gain greater insight into their secrets. After a successful Mind Flay, your next Insight roll against the creature has a Favored +1.",
          "Nightmare: While under the Trauma effect, the creature will experience vivid nightmares about you during every Full Sleep. After experiencing its first nightmare, the Trauma effect becomes an Unfavored -2.",
          "Cracked: Reduce the creature's Will by 1 until the Trauma effect ends.",
          "Depression: After the Fear effect ends, the creature receives an Unfavored -1 on its next Perform, Art, Cooking, Charm or Craftsman Skill check."
        ],
        [
          "Inescapable: The Trauma effect no longer ends on a Soft Success.",
          "Madness: After the Trauma effect has persisted for 1 week the creature becomes Dumb and reduces its Will by 1 until the Trauma effect ends."
        ]
      ]
    },
    {
      name: "Mirror Image",
      attributes: "[Action] [Self]",
      description: "As an Action you twist the light around you to blur yourself for 1 second. When the blur fades a illusory duplicate of yourself appears standing beside you and generally mimics your actions. Creatures making an Action towards you must make a d20 + Investigation vs [10 + Power] to discover which is the duplicate. On a Fail they will target the duplicate. The duplicate is destroyed if it takes 1 point of non-physical damage, when you enter Psychic Exhaution, or when you dismiss it as a Free Action. If the duplicate receives physical damage it shimmers and enemies which see this will no longer be deceived by it.",
      proficiencies: [
        [],
        [
          //TODO profs
          /* 
            ideas:
            can take up to half your max survival in damage
            increase check by Will
            can cast as a React when you are hit
            can create 3 images (if one shimmers, the other still has an active effect)
            4 images
            can create mirror images for another creature
            can give awareness to selected creatures to reveal which one is you
          */
        ]
      ]
    },
    // mind drain
    {
      name: "Madness",
      attributes: "[Action] [Touch]",
      description: "As an Action you reach out and grab a creature's head. Make a basic melee attack roll with an Unfavored -1. On a hit, instead of dealing damage you assault their mind with Madness. Roll a d20 + Charm vs Insight. On any Fail the creature resists you and there is no effect. On a Soft Success the creature is Stunned for 1 turn, roll an additional Psychic Fatigue check. On a Hard Success the creature is driven mad and must attempt to perform damaging actions against a random creature which is hostile towards you on its next turn. If no creatures nearby are hostile towards you the creature spends its turn moving up to half of its movement distance away from you and will attack any creature near it at random.",
      proficiencies: [
        [],
        [
          "Empowered: Add your Will to the Charm roll",
          "Unstable: [Activate] As an Activation Action you may cause the madness to become even more unstable. Roll a d6. On a 1 the creature snaps out of it and the madness effect ends prematurely. On a 2-3 the creature becomes enraged and gains a Favored +1 to its attack rolls on its next turn. On a 4-5 the creature screeches in horror and takes 3d6 Psychic damage. On a 6 the creature is driven mad for 1 additional turn and is immune to Sensory/Cognitive Status Effects during the madness.",
          "Sightless: [Activate] As an Activation Action the Madness causes the creature to go Blind after the primary effect ends. On each of its turns it may attempt a d20 Insight roll against your original Charm roll, on a Success the Blind effect ends."
        ],
        [
          "Feral: [Activate] As an Activation Action, if the creature is 2 or more levels below you the creature is permanently driven mad. It will wander the world randomly and attack any creature it encounters. This effect may be removed by a person immobilizing the creature and spending 1 hour to roll a d20 + Charm vs your original Madness Charm roll, on a Success the effect is removed.",
          "Maddening Howl: On rolling a 4 or higher on an Unstable roll, or if under the effect of Feral, any creature attacked by the mad creature must roll a d20 Insight vs your original Madness Charm roll. On a Soft Fail they take 1d8 Psychic Damage. On a Hard Fail they are also driven mad and receive a Madness effect with their own Unstable roll.",
          "Touch of Madness: You are more familiar with how the mind can fall apart and passively gain immunity to the Dumb Status Effect."
        ]
      ]
    }
  ]// LVL 4
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