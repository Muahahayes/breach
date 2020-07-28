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
          "Glow: Once per Break, you may treat the usage of this Gift as if it had no Fade points."
        ],
        [
          "Greater Impact: Increase the damage of this Gift to 1d8. Requires Impact.",
          "Burst: [Activate] If this Gift has G or fewer Fade points, you may deal the Engraved Weapon damage to every creature who's Avoidance would be hit by your attack within a 10 ft radius of your attack's target.",
          "Effortless: If any Engraved Weapon damage die rolls its maximum value, this use of Engraved Weapon does not cause any Fade.",
          "Greater Surge: Increase the damage of Surge to 1d6."
        ],
        [
          "Ease: Effortless also subtracts 1 Fade from this Gift.",
          "Resonant: Surge may be used if this Gift has G or fewer Fade points. Surge no longer causes additional Fade.",
          "Magnitude: Increase the damage of this Gift to 1d10. Requires Greater Impact.",
          "Desperate: [Activate] If this Gift has 10 or more Fade points, you may add 1d10 to its damage. Causes 1 additional Fade.",
          "Greater Reach: If the Engraved object is a Ranged Weapon, increase it's range by 10 ft. Also, increase the radius of Burst by 10 ft."
        ],
        [
          "Evoke: [Activate] Increase this Gift's Fade to 20 points. Deal 1d10 damage to your target and every creature who's Avoidance would be hit by your attack within a 20 ft radius of your target for each Fade point caused by Evoke.",
          "Shine: Increase the uses of Glow by one per Break."
        ]
      ]
    },
    {
      name: "Runic Blast",
      attributes: "[Action] [Ranged]",
      description: "Point to a creature or object you can see within 30 ft, a rune alights on your palm and releases a blast of energy at the target. This makes a moderate clapping sound on impact. Deal 1d8 Kinetic damage.",
      proficiencies: [
        [
          "Empowered: Add your Will to the damage dealt.",
          "Surge: [Activate] If this Gift has zero Fade points, add an additional 1d6 damage. Causes 1 additional Fade."
        ],
        [
          "Impact: Increase the damage of this Gift to 1d10",
          "Reach: Increase the range to 50 ft.",
          "Glow: Once per Break, you may treat the usage of this Gift as if it had no Fade points."
        ],
        [
          "Greater Impact: Increase the damage of this Gift to 1d12. Requires Impact.",
          "Burst: [Activate] If this Gift has G or fewer Fade points, you may deal the Runic Blast damage to every creature who's Avoidance would be hit by your attack within a 10 ft radius of your attack's target.",
          "Effortless: If any Runic Blast damage die rolls its maximum value, this use of Runic Blast does not cause any Fade.",
          "Greater Surge: Increase the damage of Surge to 1d8."
        ],
        [
          "Ease: Effortless also subtracts 1 Fade from this Gift.",
          "Resonant: Surge may be used if this Gift has G or fewer Fade points. Surge no longer causes additional Fade.",
          "Magnitude: Increase the damage of this Gift to 2d8. Requires Greater Impact."
        ],
        [
          "Shine: Increase the uses of Glow by one per Break.",
          "Aftershock: Whenever you Hard Succeed the Use Power roll to hit with Runic Blast you may do another Runic Blast as a Free Action."
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
          "Hinderance: [Activate] When you create the Ward, you may give it an Hindering effect. All creatures within 10 ft of the Ward receive -G on their next Speed roll after determining turn order.",
          "Retaliate: [Activate] When you create the Ward, you may give it a Retaliating effect. Whenever a creature within 30 ft of the Ward harms you, the Ward will attempt a Power attack vs Avoidance to blast a shot of energy at them, dealing 1d6 Kinetic damage. Causes 1 Fade.",
          "Vigor: [Activate] When you create the Ward, you may give it an Invigorating effect. All creatures you choose within 10 ft of the ward receive +G on their next Speed roll after determining turn order.",
          "Muse: If you imbue an instrument as a Ward, gain a Favored +1 on Perform checks with that instrument (does not stack with Mystical Muse). If you imbue an art tool as a Ward, gain a Favored +1 on Art checks with that tool."
        ],
        [
          "Sluggish: Hinderance now applies its effect before determining turn order.",
          "Impact: Increase the damage of Retaliate to 1d8.",
          "Elemental: Choose an Elemental damage type, your Retaliate may be Kinetic energy or any element you chose with this Proficiency. (1 Additional element with each repeated proficiency, a single Ward can only select one damage type when created)",
          "Empowered: Creatures effected by Vigor may choose to add your Will to any d20 or damage roll, they may only do this one time while affected by this Ward."
        ],
        [
          "Multiplex: You may have a second Ward active at a time.",
          "Reach: Hinderance and Vigor's range are increased to 30 ft.",
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
      description: "As an Action you reach out and touch a willing creature. A small rune of Emboldening alights upon them. On their next Attack roll, add 5 minus this rune's Fade to the result. If their roll fails, cause 1 additional Fade.",
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
          "Boost: [Activate] As an Activation Action, Embolden may be used on Use Power rolls."
        ],
        [
          "Quirked: Their roll may use a Quirk without imposing an Unfavored penalty.",
          "Willful: [Activate] As an Activation Action, Embolden may be used on any roll that uses the creature's Will. Requires Boost.",
          "Fortune: [Activate] As an Activation Action, instead of its usual effects you may cause their next d20 Skill roll to treat any Hard Fail as a Soft Fail. You may use this proficiency once per Full Sleep."
        ],
        [
          "Prosper: You may use Fortune any number of times until it is used on a roll which results in a Hard Fail. After this happens, you may not use Fortune again until you finish a Full Sleep."
        ]
      ]
    }
  ], // 1G
  [ // 2G
    {
      name: "Mystical Muse",
      attributes: "[Action] [Touch]",
      description: "You enscribe a Rune of the Muse into a musical instrument and attune it with an Engraving upon your body. When you use the instrument to do a Perform roll gain a Favored +1. You may enscribe one instrument at a time.",
      proficiencies: [
        [],
        [
          "Inspiring Sonnet: [Action] You recite a poem which inspires courage in the hearts of your comrades. Every ally who hears it gains a Favored +1 on their next basic Attack roll.",
          "Piercing Chord: [Action] You play a sharp progression of notes which causes great discomfort to all who hear it. Creatures who hear it must roll a d20 + Will vs [10 + Fade] to resist the chord, on a Fail they take 1d4 damage and on a Hard Fail they also are Deaf for 1 turn.",
          "Busking: When you Hard Succeed a Perform check using your enscribed instrument in a public place roll a 1d10 and gain that many Virtua from passing listeners. You may benefit from this proficiency once per Break."
        ],//TODO more
        [
          "Allegro: [Action] You play a jolly tune that inspires swiftness in the hearts of your comrades. Every ally who hears it gains +1 to their next Speed roll.",
          "Focused Acoustics: When you use an Action to use a Mystical Muse Proficiency, you may select which creatures are targeted by the effect."
        ]
      ]
    },
    {
      name: "Imbued Projection",
      attributes: "[Action] [Touch]",
      description: "By pressing your finger against a Projection Plating unit, you imbue it with an Engraving of Protection. "
      +"Increase the Shielding granted by the Projection Plating by G. Lasts 1 hour. You may imbue one Projection Plating unit at a time.",
      proficiencies: [
        [],
        [
          "Empowered: Add your Will to the Shielding granted.",
          "Protection: [React] Whenever the user of the Projection Plating loses 1 Life they may spend their React to roll a [d20 - Fade] vs 10. "
          +"On a success, reboot the Projection Plating with half its usual effect. Causes 1 Fade."
        ],
        [
          "Deflection: While their Projection Plating is active, increase the effect of their Deflector by 2.",
          "Reactive: Protection no longer spends their React action.",
          "Protector: You may imbue one additional Projection Plating unit."
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
          "Discharge: Forked may now be used on attacks which hit more than 3 targets.",
          "Meltdown: [Activate] Roll a d20 - Fade vs 5. On a success, you may add Overload's Fade a second time to the damage dealt. On a fail you may not add Overload's Fade to the attack at all. Causes 1 additional Fade."
        ],
        [
          "Catastrophy: Meltdown also attempts to add the original attack's Fade a second time."
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
    },
    {
      name: "Arcane Bolt",
      attributes: "[Action] [Ranged]",
      description: "Shoot a basic Ranged Attack with a shot empowered by runic power. If the attack hits, roll a d20 + Use Power vs [10 + Fade]. On a Success a bolt of energy leaps out of your weapon and strikes at the target as another basic Ranged Attack, dealing kinetic damage.",
      proficiencies: [
        [],
        [
          "Empowered: Add your Will to the bolt of energy's damage.",
          "True Shot: On a Hard Success do not roll for the bolt of energy to hit, it cannot miss."
        ],
        [
          "Ensnared: [Activation] On a Hard Success and as an Activation Action Arcane Bolt may Slow -10 ft for 2 turns instead of dealing damage.",
          "Paralyzing: [Activation] On a Hard Success and as an Activation Action Arcane Bolt may Paralyze for 1 turn instead of dealing damage."
        ],
        [
          "Echo: If Arcane Bolt hits, you may roll a second time to fire a second Arcane Bolt."
        ]
      ]
    },
    {
      name: "Quiet",
      attributes: "[Action] [AOE]",
      description: "By tracing a rune in the air you create a Rune of Quiet. All sound within 10 ft of the rune is Silenced, all creatures within the area are Deaf. The rune glows brightly, cannot be moved and persists for 1 minute.",
      proficiencies: [
        [],
        [
          /*
            ideas:
            longer duration
            20 ft range
            can choose for all creatures to not be made Deaf
            can choose for sounds to exist within the area but can't be heard from outside the area
            as an activation can impose a difficulty check to use Cosmic powers
          */
        ]
      ]
    }
  ], // 2G
  [// 3G
    {
      name: "Cosmic Rune",
      attributes: "[Activate] [Self] [Passive]",
      description: "At the time you take this Gift, choose 1 Gift from the Cosmic Source, this is now a Runic Arts Power you may use. This Power gains 1 Fade for every 2 ae required, rounding up, and your maximum ae is considered 10 when calculating effects based on your maximum. Using this Power uses your Activation Action in addition to the Action requirements of the selected Power.",
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