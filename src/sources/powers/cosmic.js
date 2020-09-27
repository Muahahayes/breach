export default [
  [ // LVL 1
    {
      name: "Shock",
      attributes: "[Action] [Ranged] [Single Target]",
      description: "Point at a creature or object within 30ft and make a Power Attack roll. You release a blast of kinetic energy at the target dealing 1d6 kinetic damage. This makes a moderate clapping sound on impact. It creates a distorted ripple through the air as it travels to its target. Costs 1 ae.",
      proficiencies: [
        [
          "Forceful: Add 1d4 to the damage roll, this increases the cost by 1 ae per die. (1 Additional optional die with each repeated proficiency, repeatable up to [2 * LVL])",
          "Impact: Increase the damage roll to 1d8.",
          "Elemental: Choose an elemental damage type (or Spirit/Darkness, but only if you have that Elemental Soul type), your shock may be kinetic energy or any element you chose with this Proficiency. (1 Additional element with each repeated proficiency, a single shock may only be one damage type)."
        ],
        [
          "Magnitude: Increase the size of the Forceful dice to a d6.",
          "Reach: Increase the range to 50ft.",
          "Discharge: [Activate] You may roll a second Power roll, compare this roll to the avoidance of each creature within 5ft of the target of your Shock. Any creature who has a lower avoidance than your roll is hit by the Discharge, roll your Forceful dice and distribute the number of dice equally between the creatures hit to deal the damage of each die to its respective creature. Do not apply your Forceful dice to the original target of your Shock when using Discharge.",
          "Arc: Your discharge can now affect a creature within 10ft of the target of your Shock, and a chain of creatures within 5ft of each other starting from this first Discharge target.",
          "Greater Impact: Increase the damage roll to 1d10. Requires Impact.",
          "Subtle: [Activate] As an Activation Action you may suppress the sound of the blast and smooth out the ripple effect. If a creature(s) within range is not aware of you, you may roll a Hide check vs the Awareness Roll of the creature(s). If you succeed and do not damage the creature, this Shock does not alert them to your presence. If you succeed and damage the creature, they are aware of you but not your location.",
          "Twin Shock: [Activate] [Action] As an Activation Action you may use a Full Action to cast an exact copy of this Shock at a second target within range. This second Shock costs 3 ae and may use a different damage type if you have taken the Elemental proficiency.",
        ],
        [          
          "Area: Increase the range of Discharge to 10ft, the initial range of Arc to 20ft and the distance between creatures in the chain to 10ft.",
          "Greater Magnitude: Increase the size of the Forceful dice to a d8."
        ]
      ]
    },
    {
      name: "Hydromancy",
      attributes: "[Action] [Action] [Ranged] [Elemental]",
      description: "Requires your Elemental Soul to be the Water type. As a Full Action you may create water in an area you can see in a sphere with a radius of 5 ft which centers around a point within 10 ft of you. After creation you may use this Power's Action Action to move it or else it will fall to the ground, you may move this water up to 20 ft in any direction in a wave-like shape and once reaching its destination it falls to the ground. Any creature that is pushed by the water must roll an Agility Save to resist being moved. On a Success they do not move, on a Soft Fail they are carried with the water to its destination and on a Hard Fail they are also dealt 1d6 Water damage. Costs 1 ae.",
      proficiencies: [
        [
          "Manipulation: [Action] As an Action you pull together water you can see within 10 ft of you and the water forms into a sphere with a 5 ft radius, if the source of the water has a volume greater than a 5 ft sphere the excess water is left behind. You may move this water just like you would use an Action to move water you have created with Hydromancy. Costs 1 ae.",
          "Whip: [Action] As a Full Action you pull water to you from at least 1 cup (240ml) of water you can see within 20 ft and use it to whip a target you can see within 20 ft of you. Roll a Power Attack against the creature and on a hit deal 1d8 Water damage. On a hit you may conserve the water in your hand or return it to its source, on a miss the water falls to the ground. Costs 1 ae.",          "Crash: The base Hydromancy effect now deals damage on a Soft Fail.",
          "Shape: [Activate] Instead of moving water with Hydromancy or Manipulation, you can shape it into any shape while conserving its volume. You can hold it in that shape for up to 10 minutes as long as you spend your Activation Action each turn. The Shape cannot move unless you use Manipulation to move it.",
          "Ventilation: [Passive] You can draw the oxygen out of the water around you. You and any creatures you choose within 10 ft can breath while underwater. This effect is disabled when you have 0 ae.",
          "Mist: [Free] You may produce a cooling mist at will, cooling the area around you by 10 F within 10 ft. Lasts as long as desired. The effect is disabled when you have 0 ae."
        ],
        [
          "Freeze: [Action] You may freeze a body of water you can see within 10 ft of you. You can freeze a size of water equal to a sphere with a radius of 5 ft. Any creature within the water is Snared, and on its turn must make an Athletics check vs Power to break free. On a Fail it remains Snared, on a Success it is no longer snared, but on a Soft Success it is Slowed for 1 turn. Costs 2 ae.",
          "Reach: Your base Hydromancy effects and the Manipulation proficiency can create or affect water within 20 ft of you. When you move water, you may move it up to 30 ft.",
          "Impact: Increase the damage of Whip to 1d10 and the base Hydromancy effect to 1d8.",
          "Elemental: [Action] As a Full Action you pull water to you from at least 5 gallons (19 liters) of water you can see within 20 ft and use it to form a Water Elemental which you give Aether to animate into Life. See the [LVL 3] Water Elemental in the bestiary for its Stats and Abilities. The Elemental obeys you and on your turn you may spend an Activation Action to command it to use an Action, otherwise it will attempt to move within 10 ft of you. The Elemental lasts until you reach 0 ae or 1 week, whichever comes first. Costs 5 ae.",        
          "Flash Freeze: [Activate] You may use the Freeze proficiency as an Activation Action whenever you deal damage with a Hydromancy effect to freeze the water touching the victim.",
		      "Rain: [Action] You may create a small cloud that has a radius of 10 ft centered at a point directly above you within 30 ft of you vertically. The cloud creates a downpour of rain on the area below it for a number of turns equal to your level. All non-aquatic creatures except a Cosmic with a Water type Elemental Soul caught in the rain are hindered by the heavy flood of water and receive a -1 Unfavored on all rolls while they are within the area.",
		      "Magnitude: Increase the damage of Whip to 2d6 and the base Hydromancy effect to 1d10. Requires Impact.",
		      "Volume: Increase the sphere radius size of all Hydromancy effects by 5 ft."
        ],
        [
          "Typhoon: [Activate] You may use Manipulation to move water you can see within 50 ft in a radius of 100 ft. Increase the distance you may move this water by 30 ft. This increases the cost of using Manipulation to 5 ae and the damage it deals is 1d10 for every 20 ft in the radius of the water. Deal half damage to any creature that Soft Succeeds its Athletic's check.",       
          "Tsunami: Increase the radius of Typhoon by 100 ft."
        ]
      ]
    },
    {
      name: "Pyromancy",
      attributes: "[Action] [Action] [Ranged] [Elemental]",
      description: "Requires your Elemental Soul to be the Fire type. As an Action you may either snuff out a torch sized flame within 10 ft, or ignite a small flame in your hand which you may hold for up to 10 minutes or throw up to 10ft away. If you throw the flame, it must land on a flammable surface or it will snuff out. As a Full Action you may ignite a flame which quickly grows and fans out from your hand in a 10 ft cone in front of you. Every creature within the area must roll an Agility Save to avoid the fire. On a Success they avoid being hit. Deal 1d4 Fire damage to every creature that Fails. Costs 1 ae.",
      proficiencies: [
        [
          "Spectacle: [Activate] You may shape the flame into moving silhouettes. You may use the flame in Perform or Disruption checks as an Activate Action to add your Will to the check. Costs 1 ae.",        
          "Blaze: [Action] As a Full Action, you ignite a streak of fire that shoots out in a straight line. Make a ranged Power attack against a creature you can see within 30 ft. On a hit deal 1d8 Fire damage. Costs 1 ae.",
          "Heat: Increase the damage of Pyromancy' Full Action attack to 1d6.",
          "Warmth: [Free] You may produce a radiant heat at will, warming the area around you by 10 F within 10 ft. This effect is disabled when you are at 0 ae.",
          "Manipulation: [Action] As an Action you gather the fire within a 5 ft radius you can see within 10 ft and may move it up to 20 ft in any direction. Any creature within the fire's destination must roll an Agility Save to avoid the fire, On a Success they avoid being hit. Deal 1d4 Fire damage to every creature that Fails. Costs 1 ae."
        ],
        [
          "Ignition: [Activate] Whenever one or more creatures Hard Fail a check to avoid fire from Pyromancy, you may spend an Activation Action to apply a Burn to the creatures for 2 turns which deals 1d4 Fire damage.",
          "Reach: Your base Pyromancy Action can snuff or throw flames up to 20 ft away, your base Pyromancy Full Action effects a 15 ft cone, and your Manipulation proficiency can move fire up to 30 ft.",
          "Impact: Increase the damage of the base Pyromancy Full Action and Manipulation proficiency to 1d6, and increase the damage of Blaze to 1d10.",
          "Elemental: [Action] As a Full Action you may gather fire from at least a bonfire sized flame you can see within 20 ft and use it to form a Fire Elemental which you give Aether to animate into Life. See the [LVL 3] Fire Elemental in the bestiary for its Stats and Abilities. The Elemental obeys you and on your turn you may spend an Activation Action to command it to use an Action, otherwise it will attempt to move within 10 ft of you. The Elemental lasts until you reach 0 ae or 1 week, whichever comes first. Costs 5 ae.",
          "Flash: [Action] As a Full Action you may release a spark which briefly shines a bright light in a 50 ft radius. All creature's receive a -1 Unfavored on their Stealth and Hide checks until the end of the next Round.",
          "Kindling: You may activate Ignition on Soft Fails. The Burn now deals 1d6 damage over 3 turns.",
          "Magnitude: Increase the damage of the base Pyromancy Full Action and Manipulation proficiency to 1d8, and increase the damage of Blaze to 2d6. Requires Impact.",
          "Spread: Increase the range of Blaze to 40 ft, and increase your base Pyromancy Full Action effect's cone size by 5 ft."        
        ],
        [
          "Combustion: [Activate] You may use Manipulation to move fire you can see within 50 ft in a radius of 100 ft. Increase the distance you can move this fire by 30 ft. This increases the cost of using Manipulation to 5 ae and the damage it deals is 1d8 for every 20 ft in the radius of the fire. Deal half damage to any creature that Soft Succeeds its Agility check.",        
          "Inferno: Increase the radius of Combustion by 100 ft."
        ]
      ]
    },
    {
      name: "Shining Shot",
      attributes: "[Action] [Ranged]",
      description: "Use a Ranged Weapon to make a basic Ranged Weapon attack. The shot shines brightly as it streaks through the air towards its target. Add 1d4 Spirit damage to the attack. Costs 1 ae.",
      proficiencies: [
        [
          "Silvered: The physical damage dealt by this attack is considered a Silver weapon.",
          "Sharp Aim: Permanently add 1 to your Marksmanship Skill and increase its maximum by 1.",
          "Impact: Increase the damage die to 1d6.",
          "Twin Shot: If Shining Shot hits, you may make a basic Ranged Weapon attack on the same target for free.",          
          "Focused: [Action] As an Action before attacking, you may focus more power into your shot. Roll each base damage die of your Ranged Weapon twice when adding up your damage dealt."
        ],
        [
          "Deadly Aim: Permanently add 1 to your Marksmanship Skill and increase its maximum by 1.",
          "Fork: Your Twin Shot may be used on any target within range.",
          "Dark Twin: You may spend 1 ae to use Shining Shot with your Twin Shot attack.",
          "Greater Impact: Increase the damage die to 1d8. Requires Magnitude."
        ],
        [
          "Piercing Shot: [Action] As an Action, you may attempt to deal 1 point of Life damage to the target hit. They must roll a Stamina Save to resist the effect.",
          "Magnitude: Increase the damage die to 1d10. Requires Greater Impact."
        ]
      ]
    },
    {
      name: "Spirit Shield",
      attributes: "[Action] [Ranged]",
      description: "Point at a person within 30 ft that you can see. A thin shimmering layer of spirit energy wraps around their body, protecting them from harm. Provide them with 1d6 Shielding. A person may only have one Spirit Shield effect active on them at one time. Lasts 1 day. Costs 1 ae.",
      proficiencies: [
        [
          "Empowered: Increase the Shielding to 1d8.",
          "Hardened: Until the person's Shielding drops to 0, reduce physical damage taken by 1.",
          "Pull: You may pull the person up to 5 ft towards you. This does not trigger Opportunity.",
          "Potency: You may increase the Shielding to 1d10. This increases the cost by 1 ae."
        ],
        [
          "Reinforced: Hardened reduces damage by your level instead.",
          "Redoubt: When the person's Shielding drops to 0 from damage, if the remaining damage would bring them below 1 Survival cancel any damage beyond bringing them to 1 Survival, up to an amount of damage equal to their Max Survival.",
          "Greater Shielding: Increase the effect of Potency to 2d6.",
          "Prismatic: Hardened now applies to Elemental and Mental damage (except for Darkness).",
          "Greater Pull: Increase the effect of Pull to 10 ft"
        ],
        [
          "Shatter: [Activate] When the person's Shielding drops to 0 from damage, roll a Will check vs Agility for all creatures within 10 ft, deal 1d10 Spirit damage to any creature that fails the check.",
          "Bounce: [Activate] If at least 1 point of Shielding from Spirit Shield remains after being hit by an attack, roll a d4. On a 4, apply the Spirit Shield effect to another person within 30 ft and within line of sight. Costs LVL ae.",
          "Greater Empowerment: Increase the effect of Empowered to 1d10.",
          "Bulwark: Increase the effect of Greater Shielding to 4d6. Increase the cost by 1 additional ae.",
          "Skipping Stones: [Activate] When you cast the Spirit Shield power successfully, you may immediately attempt a Bounce effect on that Spirit Shield, and any further Spirit Shields this effect creates during this turn. These Bounce effects do not cost additional Activation Actions.",
          "Smooth Stones: When using Skipping Stones, the Bounce effect succeeds on a 3 or a 4."
        ]
      ]
    },
    {
      name: "Soul Stitching",
      attributes: "[Action] [Melee]",
      description: "Lay your hand upon a creature and weave the Aether within their body to close up their wounds. Heal 1d6 damage from that person. Costs 1 ae.",
      proficiencies: [
        [
          "Ease Pain: [Activate] You may spend any amount of the healing to reduce their Strain instead of healing them, and then heal them with the remaining amount.",
          "Refund: If you roll a 1 on the healing die this Power costs 0 ae.",
          "Potency: Increase the amount healed to 1d8.",
          "Experienced: Add your level to the amount healed.",
          "Greater Refund: Refund now applies to a 1 or a 2 on the healing roll."
        ],
        [
          "Clear Mind: [Activate] The target may ignore their next Psychic Fatigue check.",
          "Restore: Instead of healing, Soul Stitching may end any Blind, Deafen, Silence, Slow or Snare effects not originating from a Bloodline or Mutation Source. Costs 1 additional ae when used in this way.",
          "Reach: [Activate] You may cast Soul Stitching on a target up to 20 ft away. Only the Refund, Greater Refund, and Experienced proficiencies may be active when the Power is used in this way. Costs 1 additional ae when used in this way.",
          "Revival: When used on a target below 1 Life, restore 1 Life instead of its usual effects. Costs 1 additional ae when used in this way.",
          "Greater Healing: Increase the amount healed to 1d10. Requires Potency. Increases the cost by 1 ae.",
          "Cure: If the target's Survival is at its Max, instead of healing Close Wound cures one Non-Extreme Injury. Costs 1 additional ae when used in this way."
        ],
        [
          "Renew: Increase the amount healed to 2d6. May apply Restore's effect with its cost. Requires Greater Healing.",
          "Cleanse: Restore may be used on effects caused by a Curse.",
          "Spirit Stitching: [Activate] You may apply a basic Spirit Shield effect if you possess that Power. Costs 1 additional ae when used in this way.",
          "Protection: When Spirit Stitching applies the Spirit Shield effect, it may use any proficiencies you possess for Spirit Shield. Costs 2 additional ae when used in this way (in addition to Spirit Stitching)."
        ]
      ]
    },
    {
      name: "Close Wound",
      attributes: "[Action] [Touch]",
      description: "The Cosmic presses their hand against a creature's open wound caused by damage taken during this Round or the previous Round. Heal the creature for up to 5 of the damage caused (healing added from Will's Primary Attribute benefit cannot go above the original damage caused). Costs 1 ae.",
      proficiencies: [
        [
          "Ease Pain: [Activate] You may use Close Wound to reduce Strain gained during this Round or the previous Round.",
          "Refund: If Close Wound only heals a damage amount equal or less than your level this Power costs 0 ae. (ignores healing caused by Holistic Healing)",
          "Holistic Healing: Healing added from the Will Primary Attribute benefit may go above the original damage caused. (ie, the creature took 3 damage on the previous Round and you have a Will of 4. You may heal the 3 damage, and then an additional 4 points of healing)",
          "Experienced: Add your level to the maximum possible damage healed."
        ],
        [
          "Greater Refund: Refund now applies to up to double your level.",
          "Potency: Increase the potential amount healed by 5.", //10
          "Restore: Instead of healing, Close Wound may end any Blind, Deafen, Silence, Slow or Cripple effects not originating from a Bloodline or Mutation Source. Costs 1 additional ae when used in this way.",
          "Reach: [Activate] You may cast Close Wound on a target up to 20 ft away. Only the Refund, Greater Refund, Experienced, Holistic Healing and Potency proficiencies may be active when the Power is used in this way. Costs 1 additional ae when used in this way.",
          "Cure: If the target's Survival is at its Max, instead of healing Close Wound cures one Non-Extreme Injury. Costs 1 additional ae when used in this way.",
          "Revival: When used on a target below 1 Life, restore 1 Life instead of its usual effects. Costs 1 additional ae when used in this way.",
          "Treatment: [Activate] When Close Wound is used on a target at their Max Survival (or no less than your Will below their Max Survival if Will is your Primary Attribute), instead of healing you may remove one Non-Extreme Injury from the target as an Activation Action. Costs 1 additional ae when used in this way."
        ],
        [
          "Greater Potency: Increase the potential amount healed by 5.", //15
          "Cleanse: Restore may be used on effects caused by a Curse.",
          "Greater Cure: Cure may be used on Extreme Injuries. Increases the cost by an additional 2 ae when used to cure an Extreme Injury."
        ]
      ]
    },
    // add a non-combat related power
    // chaos bolt
    {
      name: "Barrier",
      attributes: "[Action] [AoE]",
      description: "Point at two places on the ground no more than 10 ft apart. A shimmering wall of kinetic energy spreads across the space in between, standing 5 ft tall. Roll 1d4. Any attack that is not psychic or darkness that goes through the wall deals reduced damage equal to the amount rolled. Lasts 2 turns. Only one Barrier may be active at a time. Costs 2 ae.",
      proficiencies: [
        [
          "Empowered: Add your Will to the Barrier roll.",
          "Width: Add 5 ft to the width of the wall.",
          "Height: Add 5 ft to the height of the wall.",
          "Obscurement: Gives an Unfavored -1 to any awareness rolls related to looking through the Barrier."
        ],
        [
          "Greater Barrier: Add your level to the Barrier roll.",
          "Turbulent: [Activate] As an Activation Action when creating the Barrier, the wall deals 1d4 + Will blunt damage to any creature that passes through it.",
          "Deflection: [Activate] As an Activation Action when creating the Barrier, reduce the attack roll of ranged attacks by -1 if they touch the wall.",
          "Potency: [Activate] As an Activation Action when creating the Barrier, increase the Barrier roll to 1d6.",
          "Wind: The wall prevents gases and liquids from passing through and deflects them upwards with a gust of wind. Medium or smaller creatures which attempt to Fly through the Barrier are lifted to the height of the Barrier and lose movement equal to this elevating effect."
        ],
        [
          "Maelstrom: Increases Turbulent to 1d6 + Will.",
          "Warped: Increase Deflection to -3.",
          "Bulwark: Increase Potency to 1d8.",
          "Updraft: You may choose to increase the movement of a creature when it is lifted by the Wind proficiency instead of it losing movement due to being elevated. You may also lift willing creatures to the height of the Barrier if they step into it."
        ]
      ]
    },
    {
      name: "Fortitude",
      attributes: "[Action] [Ranged]",
      description: "Point at a creature you can see within 30 ft, you weave a shroud of spirit energy around their body to protect them from harm. Increases the target's Max Survival by 1d8. Lasts 1 hour. If they receive Darkness damage equal to at least half their Max Survival from one attack, or if they drop below 1 Life, the effect ends. A creature may only benefit from one Fortitude effect at one time, if Fortitude is used on a creature with a current Fortitude effect the Max Survival is increased by the greater of the two values and any secondary effects are replaced by the new Fortitude. Costs 2 ae.",
      proficiencies: [
        [
          "Empowered: Add your Will to the effect.",
          "Respite: If the creature's Max Survival increases from Fortitude's effect, the creature's current Survival is also increased by the amount of Max Survival added.",
          "Hazy: Add +G to the creature's next Stealth or Hide check.",
          "Fork: [Activate] You may apply Fortitude to a second creature you can see within 30ft."
        ],
        [
          "Invigorate: [Activate] You may increase the damage of the creature's next attack by your Will.",
          "Calm: [Activate] You may allow the creature to ignore its next Psychic Fatigue check.",
          "Potency: Increase the effect roll to 1d10.",
          "Repel: The creature gains 1 Avoidance.",
          "Firm: Increase the effect by your level.",
          "Resistant: [Activate] You may give the creature Resistance to your Elemental Soul's damage type.",
          "Fortune: [Activate] You may give a -1 Unfavored penalty to the next attack against the creature."
        ],
        [
          "Bolster: [Activate] If the creature currently does not have Fortitude, instead of its usual effects Fortitude may fully restore the creature's Survival and activate the Invigorate and Fortune effects if you have those proficiencies chosen. Afterwards the creature may not receive any Fortitude effect for 1 hour.",
          "Resolve: [Activate] You may increase the effect roll to 2d10.",
          "Endure: When the creature reaches 1 Life while Fortitude is active, they immediately cure up to 2 Mild or Moderate Injuries, heal 2 Life and fully restore their Survival. Afterwards, the current Fortitude effect ends and the creature may not receive any Fortitude effects except for Bolster until they finish a Full Sleep."
        ]
      ]
    },
    {
      name: "Soul Rend",
      attributes: "[Action] [Ranged]",
      description: "Point at a creature you can see within 30 ft and tear at their soul dealing 1d6 spirit damage. If they are currently at 1 Life this applies a Mark of Rending upon them. If they die while Marked the cosmic gains 1 Soul Fragment, a small wisp of energy that contains a portion of the creature's spirit. If they heal at least 1 point of Survival the Mark is removed. Costs 2 ae.",
      proficiencies: [
        [
          "Infusion: [Action] You may spend an hour to use a Soul Fragment to reinfuse an inert Lesser Chaos Gem to create a Lesser Soul Gem. To do so, you must use a Soul Fragment from a creature of at least level 3 and who had a Will of at least 3. Soul Gems may often be used in place of a Chaos Gem. Costs 5 ae.",
          "Haunt: [Action] Point at a creature you can see and release a Soul Fragment upon them. They must roll a Will Save or else become cursed with a Haunting. While Haunted they receive a Unfavored -1 on any roll for an Action which deals damage. Lasts for 3 turns.",
          "Vengence: [Action] Point at a creature you can see and release a Soul Fragment upon them. They must roll a Will Save or else by struck by a Spirit of Vengence. They take 2d8 spirit damage. If they rolled a Hard Fail they are also gripped by the spirit, Snaring them for 1 turn."
        ],//TODO more
        [          
          "Spectral Force: [Activate] As an Activation Action, when you deal Spirit damage you may use 1 Soul Fragment to deal Darkness damage instead. Add a 1d4 to this damage dealt.",
          "Moderate Infusion: Infusion may be used to reinfuse a Moderate Chaos Gem to create a Moderate Soul Gem. To do so, you must use a Soul Fragment from a creature of at least level 4 and who had a Will of at least 5. Requires Infusion."
        ],
        [
          "Greater Infusion: Infusion may be used to reinfuse a Greater Chaos Gem to create a Greater Soul Gem. To do so, you must use a Soul Fragment from a creature of at least level 5 and who had a Will of at least 7. Requires Moderate Infusion.",
          "Epic Infusion: Infusion may be used to reinfuse an Epic Chaos Gem to create an Epic Soul Gem. To do so, you must use a Soul Fragment from a creature of at least level 7 and who had a Will of at least 10. Requires Greater Infusion."
        ]
      ]
    },
    {
      name: "Cryonic Flash",
      attributes: "[Action] [Ranged]",
      description: "Reach out towards a creature you can see within 30 ft, a flash of Aether is released from your body and a wave of cold washes over them. They must roll a Will Save to resist the effect. On a Fail they take 1d8 Water damage. On a Hard Fail they also are Slowed -1 for 1 turn. Costs 2 ae.",
      proficiencies: [
        [
          "Freeze: [Action] You may freeze a body of water you can see within 10 ft of you. You can freeze a size of water equal to a sphere with a radius of 5 ft. Any creature within the water is Snared, and on its turn must make an Athletics check vs Power to break free. On a Fail it remains Snared, on a Success it is no longer snared, but on a Soft Success it is Slowed for 1 turn. Costs 2 ae.",
          "Impact: Increase the damage to 1d10.",
          "Cooling: You may use Cryonic Flash to cool an area. Within 30 ft the temperature is reduced by 20F and the Dry climate effect is nullified."
        ],
        [
          "Deep Cold: Creatures are now Slowed on a Soft Fail.",
          "Frigid Wave: [Activate] As an Activation Action, Cryonic Flash effects every creature within 30 ft in the direction you are facing. Costs 2 additional ae.",
          "Sluggish: Increase the Slow effect to -2.",
          "Rooted: When you use Cryonic Flash, you may decide if all creatures affected are Slowed or Snared if they Hard Fail their roll.",
          "Lingering: The Slow effect is extended by 1 turn.",
          "Magnitude: Increase the damage to 2d6."
        ],
        [
          "Flash Freeze: If the target is already Slowed or Snared by Cryonic Flash and Hard Fails the check it is Stunned for 1 turn and takes an additional 2d6 damage."
        ]
      ]
    }
  ],// LVL 2
  [// LVL 3
    {
      name: "Dark Ritual",
      attributes: "[Self] [Activate] [Passive]",
      description: "At the time you take this Power, choose 1 Power from the Ancient Bloodlines Source which is of [LVL 3] or below, this is now a Cosmic Forces Power you may use. If this Power spends or gains any Bloodlust, substitute it with Aether. Using this Power uses your Activation Action in addition to the Action requirements of the selected Power.",
      proficiencies: []
    },
    {
      name: "Destiny Bomb",
      attributes: "[Action] [AoE] [Melee]",
      description: "By spending 2 Full Actions the Cosmic focuses the Aether within themselves into a volatile high pressure state which begins to pull on the surrounding Aether distorting the karmic destiny of any creature within 20 ft of the Cosmic. The energy is released, spending half of the Cosmic's current ae and dealing 1d10 spirit damage for each ae spent to all creature's hit within the area. Creature's must roll an Agility or Will Save, on a Soft Success they talk half damage and on any Fail they take full damage from the effect. After the effect, any creature that failed the check receives a -1 Unfavored on their next d20 roll and any creature that Hard Failed the check considers their next Soft Fail of any kind to be a Hard Fail. The Cosmic also receives the Unfavored effect, and recieves the other effect if any creature Hard Succeeds their roll. These non-damaging effects only occur if more than LVL ae was spent.",
      proficiencies: [
        [],
        [
          "Empowered: Add your Will to the damage for each ae spent.",
		      "Impact: Consider all effects and damage as if 1 more ae was spent.",
          "Reach: Increase the range to 30 ft.",
          "Magnitude: Increase the total damage by 2d10.",
          "Luck: If any creature Hard Failed their check, you don't gain a -1 Unfavored on your next d20 roll.",
          "Bad Karma: [Activate] As an Activation Action while releasing the Destiny Bomb, any creature(s) that Soft Failed their check considers their next Soft Fail of any kind to be a Hard Fail.",
          "Deadly Fate: Gain 1 ae for each creature killed by the blast."
        ],
        [          
		      "Overwhelming: [Activate] As an Activation Action increase the damage by 1d10 for every 2 ae spent.",
		      "Fortune: If any creature Hard Failed their check, gain a +1 Favored on your next d20 roll. Requires Luck.",
		      "Effort: You may spend additional ae up to your current ae.",
          "Rebound: [Activate] A second Destiny Bomb detonates in the same area at the start of your next turn, this second Destiny Bomb considers all effects and damage as if it spent half the ae that the first one spent. The negative effects only effect the Cosmic if they are within the effect range.",
          "Karmic Explosion: [Activate] Instead of its usual effects and ignoring any proficiencies, deal 2d10 + Will damage for each ae spent in an area with a radius of 20 ft that is centered at a location you can see within 50 ft. Every creature within the area must roll an Agility or Will Save, on any Success they take half the damage, on a Soft Fail they take full damage and are stunned for 1 turn, on a Hard Fail they take 3 Life damage directly before applying the normal damage and are stunned for 2 turns. This effect costs all of your current ae and requires at least half your Max ae to be spent. The unconscious effect from hitting 0 ae from this cost lasts for at least 1 hour regardless of any attempts to wake you."
        ]
      ]
    },
    {
      name: "Kharmic Bubble",
      attributes: "[Action] [AoE]",
      description: "Creates a Field of twisted Aether around yourself with a radius of 10 ft which distorts the karmic balance of the area. Whenever a creature within this Field deals damage to another creature they receive 1d6 damage of the same type. Costs 3 ae and lasts for 2 turns. If you are incapacitated the effect ends.",
      proficiencies: [
        [],
        [
          "Duration: When the effect reaches the end of its duration, you may extend it by 1 turn for 1 ae. (1 Additional optional extension with each repeated proficiency).",
          "Impact: Increase the damage to 1d8.",
          "Increases the radius by 5 ft. (Repeatable up to a total increase of 20)",
        ],
        [
          "Greater Impact: Increase the damage to 2d6, requires Impact.",
          "True Kharma: This damage ignores damage resistances/immunities and cannot be reduced.",          
          "Violence: [Activate] When you create the bubble, you may make the bubble encourage violence, which gives all attack rolls within the field a +1 Favored during the duration.",
          "Peace: [Activate] When you create the bubble, you may make the bubble discourage violence, which gives all attack rolls within the field a -1 Unfavored during the duration."        
        ]
      ]
    },
    {
      name: "Blink",
      attributes: "[Action] [Self]",
      description: "You close your eyes for a moment to focus as your body becomes pulled by cosmic forces towards a new location. After 1 second of focusing you appear in a location within 20 feet and within your line of sight. This does not count as movement and you do not interact with any physical objects or creatures between you and your new location. Costs 2 ae.",
      proficiencies: [
        [],
        [
          "Empowered: Increase the range of your Blink by 5 feet multiplied by your Will.",
          "Rewind: Until the end of your next turn, or for 1 minute out of combat, you may spend 1 ae to return to your original location even if you are no longer within line of sight of that location. The effect fails if you are no longer within 1 mile.",
          "Teleport: [Action] As an Action you may focus for a full minute to transport yourself to any location you have previously been to within a 10 mile radius. This costs 5 ae.",
          "Extended Travel: Your Teleport now reaches up to 100 miles.",          
          "Escape: [React] As a React Action when taking damage you may Blink. This Blink has a reduced range of 10 feet."
        ],
        [          
          "Portal: [Activation] As an Activation Action, when you Teleport or Blink you may leave an opening in space behind you. Creatures that move through the Portal will arrive at your Teleport/Blink destination. The Portal closes after 1 turn, or 1 minute out of combat. Costs an additional 3 ae.",
          "Door: You may extend the duration of your Portal by spending 1 ae for every 1 turn or 1 minute out of combat.",
          "Interplanetary: Your Teleport now has no range limits and can be used between different planets.",
          "Gate: Your Portal may persist for as long as you will it and a linked Portal will appear at the destination which creatures can use to return. The Portal will close if you die, or if another Cosmic with the Gate proficiency spends 1 day to close it. You may keep open a number of Portals equal to your level with Gate at one time. Costs 5 ae to use the Gate proficiency to either make Portals persist or close. Requires Door."
        ]
      ]
    },
    {
      name: "Mirror Force",
      attributes: "[Action] [React] [Self]",
      description: "As an Action, declare a status effect. For the next 1 round if you are targetted by an attempt to inflict you with that status effect but you resist or avoid it, you may spend your React to reflect the status effect back upon its origin. Costs 1 ae to declare, and 1 ae to reflect.",
      proficiencies: [
        [],[],
        [
          /*
          ideas:
          reflect missed attacks of a declared damage type
          reflect on behalf of nearby allies
          increase damage reflected
          declare a whole category of status effects
          declare a whole category of damage types
          declare both a status effect and a damage type
          can reflect a second time for free
          */
        ]
      ]
    },
    {
      name: "Spirit Guise",
      attributes: "[Action] [Self]",
      description: "You consume a Soul Fragment from a humanoid creature to take on their form. For 1 day you have their appearance, voice, and any passive physical attributes of the creature including their Strength, Agility and Stamina. You may perform an Insight check vs [15 + Will] of the creature to remember vague details about their life. Costs 4 ae.",
      proficiencies: [
        //TODO
      ]
    }
  ]// LVL 4
]
// {
//   name: "",
//   attributes: "",
//   description: "",
//   proficiencies: [
    
//   ]
// }