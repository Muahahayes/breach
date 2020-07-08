export default [
  [ // 1G
    {
      name: "Engraved Weapon",
      attributes: "[Action] [Touch]",
      description: "By pressing your finger against an object you may imbue it with an Engraving of Empowerment and attune it with an Engraving upon your body. " 
      + "While you are holding the object, when you make a basic attack with the object you may add 1d4 to the damage result. "
      + "You may only Engrave one object at a time, and may only Engrave an object once per day. You may remove the Engraving at any time as a Free Action. "
      + "Fade points on this Engraving apply to any Attack roll with the object if you intend to use the effects of this Gift. Lasts for 1 day.",
      proficiencies: [
        [
          "Empowered: Add your Will to the damage given by this Gift.",
          "Surge: [Activate] If this Gift has zero Fade points, add an additional 1d4 damage. Causes 1 additional Fade.",
          "Attuned: You are always aware of this object's location and whoever is touching it."
        ],
        [
          "Impact: Increase the damage of this Gift to 1d6",
          "Overwhelming: Surge rolls an additional die and adds its damage. (Repeatable up to G)",
          "Hazard: Increase any Injury table rolls caused by this Gift by 1.",
          "Reach: If the Engraved object is a Ranged Weapon, increase it's range by 10 ft.",
          "Glow: Once per day, you may treat the usage of this Gift as if it had no Fade points."
        ],
        [
          "Greater Impact: Increase the damage of this Gift to 1d8. Requires Impact.",
          "Burst: [Activate] If this Gift has G or fewer Fade points, you may deal the Engraved Weapon damage to every creature who's Avoidance would be hit by your attack within a 10 ft radius of your attack's target.",
          "Effortless: If any Engraved Weapon damage die rolls its maximum value, this use of Engraved Weapon does not cause any Fade.",
          "Greater Surge: Increase the damage of Surge to 1d6."
        ],
        [
          "Ease: Effortless also subtracts 1 Fade from this Engraving.",
          "Resonant: Surge may be used if this Gift has G or fewer Fade points. Surge no longer causes additional Fade.",
          "Magnitude: Increase the damage of this Gift to 1d10. Requires Greater Impact.",
          "Desperate: [Activate] If this Gift has 10 or more Fade points, you may add 1d10 to its damage. Causes 1 additional Fade.",
          "Greater Reach: If the Engraved object is a Ranged Weapon, increase it's range by 10 ft. Also, increase the radius of Burst by 10 ft."
        ],
        [
          "Evoke: [Activate] Increase this Gift's Fade to 20 points. Deal 1d10 damage to your target and every creature who's Avoidance would be hit by your attack within a 20 ft radius of your target for each Fade point caused by Evoke.",
          "Shine: Increase the uses of Glow by one per day."
        ]
      ]
    },
    {
      name: "Ward",
      attributes: "[Action] [Touch]",
      description: "By pressing your finger against an object you imbue it with an Engraving of Warding and attune it to an Engraving upon your body. The effect lasts 1 hour. "
      +"You are aware of the object's location and whoever is touching it. You may only have 1 Ward active at a time.",
      proficiencies: [
        [
          "Hinderance: [Activate] When you create the Ward, you may give it an Hindering effect. All creatures within 10 ft of the Ward receive a -G to their Speed rolls after determining turn order.",
          "Retaliate: [Activate] When you create the Ward, you may give it a Retaliating effect. Whenever a creature within 30 ft of the Ward harms you, the Ward will attempt a Power attack vs Avoidance to blast a shot of energy at them, dealing 1d6 Kinetic damage. Causes 1 Fade.",
          "Vigor: [Activate] When you create the Ward, you may give it an Invigorating effect. All creatures you choose within 30 ft of the ward receive a +G to their Speed rolls after determining turn order.",
          "Muse: If you imbue an instrument as a Ward, increase your Perform checks with that instrument by G. If you imbue an art tool as a Ward, increase your Art checks with that tool by G."
        ],
        [
          "Sluggish: Hinderance now applies its effect before determining turn order.",
          "Impact: Increase the damage of Retaliate to 1d8.",
          "Elemental: Choose an Elemental damage type, your Retaliate may be Kinetic energy or any element you chose with this Proficiency. (1 Additional element with each repeated proficiency, a single Ward can only select one damage type when created)",
          "Empowered: Creatures effected by Vigor may choose to add your Will to any d20 or damage roll, they may only do this one time while effected by this Ward."
        ],
        [
          "Multiplex: You may have a second Ward active at a time.",
          "Reach: Hinderance's range is increased to 30 ft.",
          "Aggressive: If Retaliate doesn't attack any creatures during a round, at the end of the round you may choose to have it attack the nearest non-allied creature.",
          "Renewing: Whenever a creature effected by Vigor rolls a Speed value higher than they could have without the Vigor effect, they heal 1d6 damage."
        ]
      ]
    },
    {
      name: "Imbued Sight",
      attributes: "[Passive] [Self]",
      description: "Engravings upon your eyes grant you enhanced sight. Gain a +G to Search checks vs the Hide Skill. Only 1 proficiency may be active per eye at one time. "
      +"You must make a choice for each eye when you Awaken this Engraving, and that choice lasts until this Engraving becomes Suppressed.",
      proficiencies: [
        [],
        [
          "Heat Sight: You can now see heat through most solid objects which are less than 5 ft thick.",
          "Zoom: You may reduce your periferal vision, but double your view distance. Your ranged attacks gain +G to the attack roll if you attacked that target on the previous turn."
        ],
        [
          "Dark Sight: You can see in any lighting condition that is not Pitch Black as if it were Medium.",
          "Alert: [React] [Activate] You can track moving targets more easily. You may nullify any effect active on the target of your Ranged Attacks that reduces your attack roll as an Activation Action. "
          +"If a creature moves into and then out of your field of view in one movement, you may do a basic ranged attack against it as a React Action."
        ],
        [
          "Piercing Sight: Your Heat Sight may now see the normal appearance, not just heat.",
          "Third Eye: You gain an additional eye which may be placed anywhere on your body. This proficiency does not count towards your limit, but this eye may not gain other proficiencies. "
          +"If this eye can see a threat, it cannot flank you."
        ]
      ]
    },
    {
      name: "Resonance",
      attributes: "[Action] [React] [Self] [Touch]",
      description: "As an Action you reach out and touch a willing creature. A small rune of Resonance alights upon them. As Reaction when they roll a d6, roll a d6 for yourself. If the sum of the two d6 rolls is equal to 7, you may add this rune's Fade (or a minimum of 1) to their roll. If the sum is equal to 2, subtract this rune's Fade from their roll instead.",
      proficiencies: [
        [
          "Approximation: The sum may equal 8 as well.",
          "Dim: This rune begins with 2 Fade when it is awakened after a Full Sleep."
        ],
        [
          "Perfect: The sum may equal 12 as well, when the sum equals 12 you may also add your G to their roll.",
          "Snake-Eyes: You no longer need to subtract your Fade from their roll when the sum is equal to 2.",
          "Faded: This rune begins with 5 Fade when it is awakened after a Full Sleep. Requires Dim."
        ],
        [
          "Harmony: [Activate] As an Activation Action when another of your runes gains Fade, you may apply Fade to this rune as well.",
          "Cobra-Eyes: When the sum is 2 you may add this rune's Fade to their roll. Requires Snake-Eyes."
        ],
        [
          "Darkened: This rune begins with 10 Fade when it is awakened after a Full Sleep. Requires Faded."
        ]
      ]
    },
    {
      name: "Embolden",
      attributes: "[Action] [Touch]",
      description: "As an Action you reach out and touch a willing creature. A small rune of Embolden alights upon them. On their next Attack roll, add 5 minus this rune's Fade to the result. If their roll fails, cause 1 additional Fade.",
      proficiencies: [
        [
          "Empowered: Add your Will to this rune's effect."
        ],
        [
          "Potency: Add 5 to this rune's effect.",
          "Effortless: Their roll only causes an additional Fade on a Hard Fail."
        ],
        [
          "Greater Potency: Add your G to this rune's effect.",
          "Ease: This rune doesn't cause a base Fade if the creature's roll is a Hard Success.",
          "Boost: Embolden may be used on Use Power rolls."
        ],
        [
          "Quirked: Their roll may use a Quirk without imposing an Unfavored penalty.",
          "Willful: Embolden may be used on any roll that uses the creature's Will. Requires Boost."
        ]
      ]
    }
  ], // 1G
  [ // 2G
    {
      name: "Imbued Projection",
      attributes: "[Action] [Touch]",
      description: "By pressing your finger against a Projection Plating unit, you imbue it with an Engraving of Protection and attune it with an Engraving upon your body. "
      +"Increase the Shielding granted by the Projection Plating by G. Lasts 1 hour.",
      proficiencies: [
        [],
        [
          "Empowered: Add your Will to the Shielding granted.",
          "Protection: [React] Whenever the user of the Projection Plating loses 1 Life they may spend their React to roll a [d20 - Fade] vs 10. "
          +"On a success, reboot the Projection Plating with half its usual effect. Causes 1 Fade."
        ],
        [
          "Deflection: While their Projection Plating is active, increase the effect of their Deflector by 2.",
          "Reactive: Protection no longer spends their React action."
        ],
        [
          "Repelling: While their Projection Plating is active, increase their Avoidance by 1.",
          "Vigilant Deflection: Deflection is active even when their Projection Plating is not active."
        ]
      ]
    },
    {
      name: "Overload",
      attributes: "[Action] [Melee]",
      description: "When a single target attack with a Fade penalty on its roll hits its target, you may spend an Action to add that attack's Fade to the damage dealt.",
      proficiencies: [
        [],
        [
          "Empowered: Add your Will to the damage dealt.",
          "Faded: Overload gains an additional Fade when used."
        ],
        [
          "Impact: You may add Overload's Fade to the damage dealt instead of the original attack's Fade."
        ],
        [
          "Greater Impact: You may add both Overload's Fade and the original attack's Fade to the damage dealt. Requires Impact.",
          "Forked: [Activate] As an Activation Action you may use Overload on attacks which hit up to 3 targets."
        ],
        [
          "Discharge: [Activate] As an Activation Action you may use Overload on attacks that hit more than 3 targets. Requires Forked.",
          "Meltdown: [Activate] Roll a d20 - Fade vs 5. On a success, you may add Overload's Fade a second time to the damage dealt. On a fail you may not add Overload's Fade to the attack at all. Causes 1 additional Fade."
        ],
        [
          "Catastrophy: Meltdown also adds the original attack's Fade a second time."
        ]
      ]
    },
    {
      name: "Flux",
      attributes: "[Action] [Ranged]",
      description: "On your turn, as an Action you release the energy within this rune to cause Flux on a creature you can see. On that creature's next Attack or Power roll, subtract 10 minus this rune's Fade (to a minimum of 0) from that roll. If their roll still succeeds, cause 1 additional Fade. The creature may attempt a d20 + Will vs your Use Power to resist this effect.",
      proficiencies: [
        [],
        [
          "Empowered: Add your Will to the amount subtracted.",
          "Refresh: If their roll is a Hard Fail, this Flux causes 1 fewer Fade."
        ],
        [
          "Impede: You may ready this Action as a React, Flux applies to the creature's current Attack or Power roll when used in this way.",
          "Befuddle: You may use Flux on any roll that uses the creature's Will.",
          "Effortless: This rune no longer causes an additional Fade if the creature's roll Soft Succeeds."
        ],
        [
          "Greater Empowered: Add your G to the amount subtracted. Requires Empowered.",
          "Ease: This rune no longer causes an additional Fade if the creature's roll succeeds. Requires Effortless."
        ],
        [
          "Daze: Instead of its usual effect, Flux may give the creature the Dumb effect until it ends 2 turns or 10 minutes has past."
        ],
        [
          "Boggle: Daze, when used outside of combat, may last for 2 hours. After 1 hour the creature may attempt to end the effect by rolling a d20 + Will vs your Use Power."
        ]
      ]
    }
  ], // 2G
  [// 3G
    {
      name: "Cosmic Rune",
      attributes: "[Activate] [Self] [Passive]",
      description: "Choose 1 Gift from the Cosmic Source at the time you take this Gift. This is now a Runic Arts Power you may use. This Power gains 1 Fade for every 2 ae required, rounding up. Using this Power uses your Activation Action in addition to the Action requirements of the selected Power.",
      proficiencies: []
    },
    {
      name: "Mimicry",
      attributes: "[Action] [Self]",
      description: "As an Action the rune re-lights your most recently used rune, allowing you to use that rune again without any proficiencies. This allows you to ignore the limitation on using an Action for the same purpose twice in one turn. Applies the Fade penalty of this rune as well as the rune being reused as well as adding Fade to that rune.",
      proficiencies: [
        [],[],
        [
          "Ease: Do not add the base Fade of using a rune to the rune being reused.",
          "Mild Effect: You may also reuse one proficiency on the rune being reused, excluding proficiencies that require any kind of action cost."
        ],
        [
          "Moderate Effect: You may reuse one additional proficiency. Requires Mild Effect.",
          "Effortless: Do not apply the Fade penalty of the rune being reused.",
          "Active: You may reuse proficiencies that require an Activation Action without needing to use another Activation Action."
        ],
        [
          "Greater Effect: You may reuse one additional proficiency. Requires Moderate Effect."
        ]
      ]
    },
    {
      name: "Phase",
      attributes: "[Self] [Action]",
      description: "As an Action, your physical form phases into an aether form for 1 round or 1 minute out of combat. While phased you pass through solid objects, cannot interact with the physical world and float freely while conserving your momentum. You become immune to attacks/powers which do not deal elemental or mental damage types, or does not inflict a curse status effect. Phase ends early if you take damage. When passing through an object, being attacked, or being targeted by a negative effect, roll a d20 + Use Power vs 10. On any result other than a Hard Success, gain 1 Fade on this rune. On a Soft Fail you are no longer phasing after resolving the attack or effect. On a Hard Fail you are no longer phasing before resolving the attack or effect. On any Fail involving an object, you do not pass through the object.",
      proficiencies: [
        [],[],
        [
          "Propel: You may move at half your movement distance in any direction in 3D space while phased.",
          "Ease: When you get a Soft Success while passing through objects, being attacked, or being targeted by negative effects, you no longer gain a Fade."
        ],
        [
          "Water Phasing: Instead of its usual effect, you may enter a special form of Phase. In this form, from your perspective water has all of the properties of air and none of the properties of water. Cannot use any proficiencies that do not specifically work with Water Phasing.",
          "Engrave: As an Action you may reach out and touch a creature. That creature gains the effects of Phase or Water Phasing. If the creature is unwilling, it must contest a d20 + Use Power vs your Use Power."
        ],
        [
          "Glide: You may move your full movement distance. Requires Propel."
        ]
      ]
    }
  ],// 3G
  [// 4G
    
  ]// 4G
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