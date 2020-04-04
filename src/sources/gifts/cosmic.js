export default [
  [ // 1G
    {
      name: "Shock",
      attributes: "[Action] [Ranged] [Single Target]",
      description: "Point at a creature or object within 30ft. You release a blast of kinetic energy at the target dealing 1d4 kinetic damage. This makes a moderate clapping sound on impact. It creates a distorted ripple through the air as it travels to its target.",
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
      description: "Choose 1 Power from the Ancient Bloodlines Source, this is now a Cosmic Forces Power you may use. If this Power spends or gains any Bloodlust, substitute it with Aether. Using this Power uses your Activation Action in addition to the Action requirements of the selected Power.",
      proficiencies: []
    },
    {
      name: "Destiny Bomb",
      attributes: "[Action] [AoE] [Melee]",
      description: "The Cosmic focuses the Aether within themselves into a volatile high pressure state which begins to pull on the surrounding Aether distorting the karmic destiny of any creature within 20 ft of the Cosmic. The energy is released, spending half of the Cosmic's current ae and dealing 1d10 damage for each ae spent to all creature's hit within the area. Creature's must roll a d20 + Agility vs Power, on a Soft Success they talk half damage and on any Fail they take full damage from the effect. After the effect, any creature that failed the check receives a -1 Unfavored on their next d20 roll and any creature that Hard Failed the check considers their next Soft Fail of any kind to be a Hard Fail. The Cosmic also receives both these effects. These effects only occur if more than G ae was spent.",
      proficiencies: [
        [],[],
        [
          "Empowered: Add your Will to the damage for each ae spent.",
		      "Impact: Consider all effects and damage as if 1 more ae was spent."
        ],
        [
          "Reach: Increase the range to 30 ft.",
          "Magnitude: Increase the damage by 2d10.",
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
          "Rebound: [Activate] A second Destiny Bomb detonates in the same area on your next turn, this second Destiny Bomb considers all effects and damage as if it spent half the ae that the first one spent. The negative effects only effect the Cosmic if they are within the effect range.",
          "Karmic Explosion: [Activate] Instead of its usual effects and ignoring any proficiencies, deal 2d10 damage for each ae spent in an area with a radius of 20 ft that is centered at a location you can see within 50 ft. Every creature within the area must roll a d20 + Agility vs Power, on any Success they take half the damage, on a Soft Fail they take full damage and are stunned for 1 turn, on a Hard Fail they take 5 Life damage directly instead of the normal damage and are stunned for 2 turns. This effect costs all of your current ae and requires at least half your Max ae to be spent. The unconscious effect from hitting 0 ae from this cost lasts for at least 1 hour regardless of any attempts to wake you."
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