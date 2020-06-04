export default [
  [ // 1G
    {
      name: "Shock",
      attributes: "[Action] [Ranged] [Single Target]",
      description: "Point at a creature or object within 30ft. You release a blast of kinetic energy at the target dealing 1d4 kinetic damage. This makes a moderate clapping sound on impact. It creates a distorted ripple through the air as it travels to its target. Costs 1 ae.",
      proficiencies: [
        [
          "Empowered: Add your Will to the damage roll.",
          "Forceful: Add 1d4 to the damage roll, this increases the cost by 1 ae per die. (1 Additional optional die with each repeated proficiency, repeatable up to [2 * G])"
        ],
        [
          "Impact: Increase the size of the first die rolled. (1 Additional optional size increase with each repeated proficiency, repeatable d6, d8, d10)",
          "Elemental: Choose an elemental damage type (or Spirit/Darkness, but only if you have that Elemental Soul type), your shock may be kinetic energy or any element you chose with this Proficiency. (1 Additional element with each repeated proficiency, a single shock may only be one damage type)."
        ],
        [
          "Magnitude: You may increase the size of the Forceful dice rolled, this increases the cost by 1 ae per size increase. (1 Additional optional size increase with each repeated proficiency, repeatable d6, d8, d10).",
          "Reach: Increase the range to 50 ft.",
          "Discharge: [Activate] You may roll a second Power roll, compare this roll to the avoidance of each creature within 5ft of the target of your Shock. Any creature who has a lower avoidance than your roll is hit by the Discharge, roll your Forceful dice and distribute the number of dice equally between the creatures hit to deal the damage of each die to its respective creature. Do not apply your Forceful dice to the original target of your Shock when using Discharge.",
          "Arc: Your discharge can now affect a creature within 10ft of the target of your Shock, and a chain of creatures within 5ft of each other starting from this first Discharge target."
        ],
        [
          "Subtle: [Activate] As an Activation Action you may suppress the sound of the blast and smooth out the ripple effect. If a creature(s) within range is not aware of you, you may roll a Hide check vs the Awareness Roll of the creature(s). If you succeed and do not damage the creature, this Shock does not alert them to your presence. If you succeed and damage the creature, they are aware of you but not your location.",
          "Twin Shock: [Activate] As an Activation Action you may cast an exact copy of a Shock you cast as a Full Action this turn at a second target within range. This second Shock costs 3 ae and may use a different damage type if you have taken the Elemental proficiency."
        ]
      ]
    },
    {
      name: "Spirit Shield",
      attributes: "[Action] [Ranged]",
      description: "Point at a person within 30 ft that you can see. A thin shimmering layer of spirit energy wraps around their body, protecting them from harm. Provide them with 1d8 Shielding. A person may only have one Spirit Shield effect active on them at one time. Lasts 1 day. Costs 1 ae.",
      proficiencies: [
        [
          "Empowered: Add your Will to the Shielding."
        ],
        [
          "Hardened: Until the person's Shielding drops to 0, reduce physical damage taken by 1."
        ],
        [
          "Reinforced: Hardened reduces damage by G instead.",
          "Redoubt: When the person's Shielding drops to 0 from damage, if the remaining damage would bring them below 1 Survival cancel any damage beyond bringing them to 1 Survival, up to an amount of damage equal to their Max Survival.",
          "Potency: Increase the Shielding to 1d10. Increases the cost by 1 ae."
        ],
        [
          "Greater Shielding: Increase the Shielding to 2d6. Requires Potency. Increases the cost by 1 ae.",
          "Prismatic: Hardened now applies to Elemental and Mental damage (except for Darkness)."
        ],
        [
          "Shatter: [Activate] When the person's Shielding drops to 0 from damage, you roll a Will check vs Agility for all creatures within 10 ft, deal 1d10 Spirit damage to any creature that fails the check.",
          "Bounce: [Activate] If at least 1 point of Shielding from Spirit Shield remains after being hit by an attack, roll a d4. On a 4, apply the Spirit Shield effect to another person within 30 ft and within line of sight. Costs G ae."
        ],
        [
          "Bulwark: Increase the Shielding to 4d6. Requires Greater Shielding. Increases the cost by 2 ae.",
          "Skipping Stones: [Activate] When you cast the Spirit Shield power successfully, you may immediately attempt a Bounce effect on that Spirit Shield, and any further Spirit Shields this effect creates during this turn. These Bounce effects do not cost additional Activation Actions.",
          "Smooth Stones: When using Skipping Stones, the Bounce effect succeeds on a 3 or a 4."
        ]
      ]
    },
    {
      name: "Soul Stitching",
      attributes: "[Action] [Melee]",
      description: "The Cosmic lays their hand upon a creature and weaves the Aether within their body to close up their wounds. Heal 1d6 damage from that person. Costs 1 ae.",
      proficiencies: [
        [
          "Empowered: Add your Will to the amount healed.",
          "Ease Pain: [Activate] Reduces Strain on the target by the amount healed (before healing)."
        ],
        [
          "Potency: Increase the amount healed to 1d8. Increases the cost by 1 ae.",
          "Experienced: Add G to the amount healed."
        ],
        [
          "Clear Mind: [Activate] The target may ignore their next Psychic Fatigue check.",
          "Restore: Instead of healing Soul Stitching may end any Blind, Deafen, or Immobilizing effects originating from a Cosmic or Psychic Source. Costs 1 additional ae when used in this way.",
          "Reach: [Activate] You may cast Soul Stitching on a target up to 20 ft away. Only the Empowered, Experienced, Potency, Greater Healing, and Renew proficiencies may be active when the Power is used in this way. Costs 1 additional ae when used in this way."
        ],
        [
          "Revival: May overheal into positive values when used on a target below 1 Life. Costs 1 additional ae when used in this way.",
          "Greater Healing: Increase the amount healed to 1d10. Requires Potency. Increases the cost by 1 ae."
        ],
        [
          "Renew: Increase the amount healed to 2d6. May apply Restore with its cost. Requires Greater Healing. Increases the cost by 1 ae.",
          "Spirit Stitching: [Activate] You may apply a basic Spirit Shield effect if you possess that Gift. Costs 1 additional ae when used in this way."
        ],
        [
          "Protection: When Spirit Stitching applies the Spirit Shield effect, it may use any proficiencies you possess for Spirit Shield. Costs 2 additional ae when used in this way (in addition to Spirit Stitching)."
        ]
      ]
    },
    {
      name: "Hydromancy",
      attributes: "[Action] [Action] [Ranged] [Elemental]",
      description: "Requires your Elemental Soul to be the Water type. As a Full Action you may create water in an area you can see in a sphere with a radius of 5 ft which centers around a point within 10 ft of you. After creation you may use this Power's Action Action to move it or else it will fall to the ground, you may move this water up to 20 ft in any direction in a wave-like shape and once reaching its destination it falls to the ground. Any creature that is pushed by the water must roll a d20 + Athletics vs Power to resist being moved. On a Success they do not move, on a Soft Fail they are carried with the water to its destination and on a Hard Fail they are also dealt 1d6 Water damage. Costs 1 ae.",
      proficiencies: [
        [
          "Manipulation: [Action] As an Action you pull together water you can see within 10 ft of you and the water forms into a sphere with a 5 ft radius, if the source of the water has a volume greater than a 5 ft sphere the excess water is left behind. You may move this water just like you would use an Action to move water you have created with Hydromancy. Costs 1 ae.",
          "Whip: [Action] As a Full Action you pull water to you from at least 1 cup (240ml) of water you can see within 20 ft and use it to whip a target you can see within 20 ft of you. Roll a Power Attack against the creature and on a hit deal 1d8 Water damage. On a hit you may conserve the water in your hand or return it to its source, on a miss the water falls to the ground. Costs 1 ae."
        ],
        [
          "Crash: The base Hydromancy effect now deals damage on a Soft Fail.",
          "Shape: [Activate] Instead of moving water with Hydromancy or Manipulation, you can shape it into any shape while conserving its volume. You can hold it in that shape for up to 10 minutes as long as you spend your Activation Action each turn. The Shape cannot move unless you use Manipulation to move it.",
          "Empowered: Add your Will to any damage dealt by a Hydromancy effect.",
          "Ventilation: [Passive] You can draw the oxygen out of the water around you. You and any creatures you choose within 10 ft can breath while underwater. This effect is disabled when you have 0 ae.",
          "Mist: [Free] You may produce a cooling mist at will, cooling the area around you by 10 F within 10 ft. Lasts as long as desired. The effect is disabled when you have 0 ae."
        ],
        [
          "Freeze: [Action] You may freeze a body of water you can see within 10 ft of you. You can freeze a size of water equal to a sphere with a radius of 5 ft. Any creature within the water is Snared, and on its turn must make an Athletics check vs Power to break free. On a Fail it remains Snared, on a Success it is no longer snared, but on a Soft Success it is Slowed for 1 turn. Costs 2 ae.",
          "Reach: Your base Hydromancy effects and the Manipulation proficiency can create or affect water within 20 ft of you. When you move water, you may move it up to 30 ft.",
          "Impact: Increase the damage of Whip to 1d10 and the base Hydromancy effect to 1d8.",
          "Elemental: [Action] As a Full Action you pull water to you from at least 5 gallons (19 liters) of water you can see within 20 ft and use it to form a Water Elemental which you give Aether to animate into Life. See the [3 G] Water Elemental in the bestiary for its Stats and Abilities. The Elemental obeys you and on your turn you may spend an Activation Action to command it to use an Action, otherwise it will attempt to move within 10 ft of you. The Elemental lasts until you reach 0 ae or 1 week, whichever comes first. Costs 5 ae."
        ],
        [
          "Flash Freeze: [Activate] You may use the Freeze proficiency as an Activation Action whenever you deal damage with a Hydromancy effect to freeze the water touching the victim.",
		      "Rain: [Action] You may create a small cloud that has a radius of 10 ft centered at a point directly above you within 30 ft of you vertically. The cloud creates a downpour of rain on the area below it for G turns. All non-aquatic creatures except a Cosmic with a Water type Elemental Soul caught in the rain are hindered by the heavy flood of water and receive a -1 Unfavored on all rolls while they are within the area.",
		      "Magnitude: Increase the damage of Whip to 2d6 and the base Hydromancy effect to 1d10. Requires Impact.",
		      "Volume: Increase the sphere radius size of all Hydromancy effects by 5 ft."
        ],
        [
          "Typhoon: [Activate] You may use Manipulation to move water you can see within 50 ft in a radius of 100 ft. Increase the distance you may move this water by 30 ft. This increases the cost of using Manipulation to 5 ae and the damage it deals is 1d10 for every 20 ft in the radius of the water. Deal half damage to any creature that Soft Succeeds its Athletic's check."
        ],
        [
          "Tsunami: Increase the radius of Typhoon by 100 ft."
        ]
      ]
    },
    {
      name: "Pyromancy",
      attributes: "[Action] [Action] [Ranged] [Elemental]",
      description: "Requires your Elemental Soul to be the Fire type. As an Action you may either snuff out a torch sized flame within 10 ft, or ignite a small flame in your hand which you may hold for up to 10 minutes or throw up to 10ft away. If you throw the flame, it must land on a flammable surface or it will snuff out. As a Full Action you may ignite a flame which quickly grows and fans out from your hand in a 10 ft cone in front of you. Every creature within the area must roll a d20 + Athletics vs Power to avoid the fire. On a Success they avoid being hit. Deal 1d4 Fire damage to every creature that Fails. Costs 1 ae.",
      proficiencies: [
        [
          "Empowered: Add your Will to any damage done by Pyromancy.",
          "Spectacle: [Activate] You may shape the flame into moving silhouettes. You may use the flame in Perform or Disruption checks as an Activate Action to add your Will to the check. Costs 1 ae."
        ],
        [
          "Blaze: [Action] As a Full Action, you ignite a streak of fire that shoots out in a straight line. Make a ranged Power attack against a creature you can see within 30 ft. On a hit deal 1d8 Fire damage. Costs 1 ae.",
          "Heat: Increase the damage of Pyromancy' Full Action attack to 1d6.",
          "Warmth: [Free] You may produce a radiant heat at will, warming the area around you by 10 F within 10 ft. This effect is disabled when you are at 0 ae.",
          "Manipulation: [Action] As an Action you gather the fire within a 5 ft radius you can see within 10 ft and may move it up to 20 ft in any direction. Any creature within the fire's destination must roll a d20 + Athletics vs Power to avoid the fire, On a Success they avoid being hit. Deal 1d4 Fire damage to every creature that Fails. Costs 1 ae."
        ],
        [
          "Ignition: [Activate] Whenever one or more creatures Hard Fail a check to avoid fire from Pyromancy, you may spend an Activation Action to apply a Burn to the creatures for 2 turns which deals 1d4 Fire damage.",
          "Reach: Your base Pyromancy Action can snuff or throw flames up to 20 ft away, your base Pyromancy Full Action effects a 15 ft cone, and your Manipulation proficiency can move fire up to 30 ft.",
          "Impact: Increase the damage of the base Pyromancy Full Action and Manipulation proficiency to 1d6, and increase the damage of Blaze to 1d10.",
          "Elemental: [Action] As a Full Action you may gather fire from at least a bonfire sized flame you can see within 20 ft and use it to form a Fire Elemental which you give Aether to animate into Life. See the [3 G] Fire Elemental in the bestiary for its Stats and Abilities. The Elemental obeys you and on your turn you may spend an Activation Action to command it to use an Action, otherwise it will attempt to move within 10 ft of you. The Elemental lasts until you reach 0 ae or 1 week, whichever comes first. Costs 5 ae.",
          "Flash: [Action] As a Full Action you may release a spark which briefly shines a bright light in a 50 ft radius. All creature's receive a -1 Unfavored on their Stealth and Hide checks until the end of the next Round."        
        ],
        [
          "Kindling: You may activate Ignition on Soft Fails. The Burn now deals 1d6 damage over 3 turns.",
          "Magnitude: Increase the damage of the base Pyromancy Full Action and Manipulation proficiency to 1d8, and increase the damage of Blaze to 2d6. Requires Impact.",
          "Spread: Increase the range of Blaze to 40 ft, and increase your base Pyromancy Full Action effect's cone size by 5 ft."        
        ],
        [
          "Combustion: [Activate] You may use Manipulation to move fire you can see within 50 ft in a radius of 100 ft. Increase the distance you can move this fire by 30 ft. This increases the cost of using Manipulation to 5 ae and the damage it deals is 1d8 for every 20 ft in the radius of the fire. Deal half damage to any creature that Soft Succeeds its Agility check."
        ],
        [
          "Inferno: Increase the radius of Combustion by 100 ft."
        ]
      ]
    }
  ],// 1G
  [// 2G
    {
      name: "Barrier",
      attributes: "[Action] [AoE]",
      description: "Point at two places on the ground no more than 10 ft apart. A shimmering wall of kinetic energy spreads across the space in between, standing 5 ft tall. Roll 1d4. Any attack that is not psychic or darkness that goes through the wall deals reduced damage equal to the amount rolled. Lasts 2 turns. Only one Barrier may be active at a time. Costs 2 ae.",
      proficiencies: [
        [],
        [
          "Empowered: Add your Will to the Barrier roll.",
          "Width: Add 5 ft to the width of the wall.",
          "Height: Add 5 ft to the height of the wall.",
          "Obscurement: Gives an Unfavored -1 to any awareness rolls related to looking through the Barrier."
        ],
        [
          "Greater Barrier: Add your G to the Barrier roll.",
          "Turbulent: The wall deals 1d4 + Will blunt damage to any creature that passes through it. Cannot be taken with the Deflection or Potency proficiency.",
          "Deflection: Reduces the attack roll of ranged attacks by -1 if they touch the wall. Cannot be taken with the Turbulent or Potency proficiency.",
          "Potency: Increase the Barrier roll to 1d6. Cannot be taken with the Deflection or Turbulent proficiency."
        ],
        [
          "Maelstrom: Increases Turbulent to 1d6 + Will.",
          "Warped: Increase Deflection to -3.",
          "Bulwark: Increase Potency to 1d8."
        ]
      ]
    },
    {
      name: "Fortitude",
      attributes: "[Action] [Range]",
      description: "Point at a creature you can see within 30 ft, you weave a shroud of spirit energy around their body to protect them from harm. Increases the target's Max Survival by 1d8. Lasts 1 hour. If they receive Darkness damage equal to at least half their Max Survival from one attack, or if they drop below 1 Life, the effect ends. A creature may only benefit from one Fortitude effect at one time, if Fortitude is used on a creature with a current Fortitude effect the Max Survival is increased by the greater of the two values and any secondary effects are replaced by the new Fortitude. Costs 2 ae.",
      proficiencies: [
        [],
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
          "Repel: The creature gains 1 Armor."
        ],
        [
          "Firm: Increase the effect by G.",
          "Resistant: [Activate] You may give the creature Resistance to your Elemental Soul's damage type.",
          "Fortune: [Activate] You may give a -1 Unfavored penalty to the next attack against the creature."
        ],
        [
          "Bolster: [Activate] If the creature currently does not have Fortitude, instead of its usual effects Fortitude may fully restore the creature's Survival and activate the Invigorate and Fortune effects if you have those proficiencies chosen. Afterwards the creature may not receive any Fortitude effect for 1 hour.",
          "Resolve: [Activate] You may increase the effect roll to 2d10."
        ],
        [
          "Endure: When the creature reaches 1 Life while Fortitude is active, they immediately cure up to 2 Mild or Moderate Injuries, heal 2 Life and fully restore their Survival. Afterwards, the current Fortitude effect ends and the creature may not receive any Fortitude effects except for Bolster for 1 hour."
        ]
      ]
    }
  ],// 2G
  [// 3G
    {
      name: "Dark Ritual",
      attributes: "[Self] [Activate] [Passive]",
      description: "Choose 1 Gift from the Ancient Bloodlines Source, this is now a Cosmic Forces Power you may use. If this Power spends or gains any Bloodlust, substitute it with Aether. Using this Power uses your Activation Action in addition to the Action requirements of the selected Power.",
      proficiencies: []
    },
    {
      name: "Destiny Bomb",
      attributes: "[Action] [AoE] [Melee]",
      description: "The Cosmic focuses the Aether within themselves into a volatile high pressure state which begins to pull on the surrounding Aether distorting the karmic destiny of any creature within 20 ft of the Cosmic. The energy is released, spending half of the Cosmic's current ae and dealing 1d10 damage for each ae spent to all creature's hit within the area. Creature's must roll a d20 + Athletics vs Power, on a Soft Success they talk half damage and on any Fail they take full damage from the effect. After the effect, any creature that failed the check receives a -1 Unfavored on their next d20 roll and any creature that Hard Failed the check considers their next Soft Fail of any kind to be a Hard Fail. The Cosmic also receives both these effects. These non-damaging effects only occur if more than G ae was spent.",
      proficiencies: [
        [],[],
        [
          "Empowered: Add your Will to the damage for each ae spent.",
		      "Impact: Consider all effects and damage as if 1 more ae was spent."
        ],
        [
          "Reach: Increase the range to 30 ft.",
          "Magnitude: Increase the total damage by 2d10.",
          "Luck: If any creature Hard Failed their check, you don't gain a -1 Unfavored on your next d20 roll.",
          "Bad Karma: [Activate] Any creature that Soft Failed their check considers their next Soft Fail of any kind to be a Hard Fail."
        ],
        [
          "Deadly Fate: Gain 1 ae for each creature killed by the blast.",
		      "Overwhelming: [Activate] For every 2 ae spent, increase the damage by 1d10.",
		      "Fortune: If any creature Hard Failed their check, gain a +1 Favored on your next d20 roll.",
		      "Effort: You may spend additional ae up to your current ae."
        ],
        [
          "Rebound: [Activate] A second Destiny Bomb detonates in the same area at the start of your next turn, this second Destiny Bomb considers all effects and damage as if it spent half the ae that the first one spent. The negative effects only effect the Cosmic if they are within the effect range.",
          "Karmic Explosion: [Activate] Instead of its usual effects and ignoring any proficiencies, deal 2d10 + Will damage for each ae spent in an area with a radius of 20 ft that is centered at a location you can see within 50 ft. Every creature within the area must roll a d20 + Athletics vs Power, on any Success they take half the damage, on a Soft Fail they take full damage and are stunned for 1 turn, on a Hard Fail they take 5 Life damage directly instead of the normal damage and are stunned for 2 turns. This effect costs all of your current ae and requires at least half your Max ae to be spent. The unconscious effect from hitting 0 ae from this cost lasts for at least 1 hour regardless of any attempts to wake you."
        ]
      ]
    },
    {
      name: "Kharmic Bubble",
      attributes: "[Action] [AoE]",
      description: "Creates a Field of twisted Aether around yourself with a radius of 10 ft which distorts the karmic balance of the area. Whenever a creature within this Field deals damage to another creature they receive 1d4 damage of the same type. Costs 3 ae and lasts for 2 turns. If you are incapacitated the effect ends.",
      proficiencies: [
        [],[],
        [
          "Duration: When the effect reaches the end of its duration, you may extend it by 1 turn for 1 ae. (1 Additional optional extension with each repeated proficiency).",
          "Empowered: Add your Will to the damage roll.",
          "Impact: Increase the damage to 1d8."        
        ],
        [
          "Greater Impact: Increase the damage to 1d10, requires Impact.",
          "True Kharma: This damage ignores damage resistances/immunities and cannot be reduced.",
          "Increases the radius by 5 ft. (Repeatable up to a total increase of 20)",
          "Violence: [Activate] When you create the bubble, you may make the bubble encourage violence, which gives all attack rolls within the field a +1 Favored during the duration.",
          "Peace: [Activate] When you create the bubble, you may make the bubble discourage violence, which gives all attack rolls within the field a -1 Unfavored during the duration."        
        ]
      ]
    }
  ]// 3G
]
// {
//   name: "",
//   attributes: "",
//   description: "",
//   proficiencies: [
    
//   ]
// }