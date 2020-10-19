export default [
  [ // LVL 1
    {
      name: "Engraved Weapon",
      attributes: "[Action] [Touch]",
      description: "By pressing your finger against an object you may imbue it with an Engraving of Empowerment and attune it with a Rune upon your body. This does not cause Fade. " 
      + "While you are holding the object, when you make a basic attack with the object you may add 1d4 to the damage result. "
      + "You may only Engrave one object at a time, and may only Engrave an object once per day. You may remove the Engraving at any time as a Free Action. "
      + "When you miss with this weapon it applies 1 Fade to this Power, you gain an Unfavored -1 to any attack rolls with this weapon if this Rune is Faded. Lasts for 1 day. Max 3 Fade.",
      proficiencies: [
        [
          "Surge: [Activate] If this Power has zero Fade and is Awakened, when you hit you may as an Activation Action add an additional 1d4 damage.",
          "Attuned: You are always aware of this object's location and whoever is touching it.",
          "Impact: Increase the damage of this Power to 1d6",
          "Overwhelming: Surge rolls an additional die and adds its damage. (Repeatable up to LVL)",
          "Hazard: Increase any Injury table rolls caused by this Power by 1.",
          "Reach: If the Engraved object is a Ranged Weapon, increase it's range by 10 ft.",
          "Glow: Once per Break, you may treat the usage of this Power as if it had no Fade points and was Awakened."
        ],
        [
          "Greater Impact: Increase the damage of this Power to 1d8. Requires Impact.",
          "Burst: [Activate] If this Power is Awakened, you may as an Activation Action deal the Engraved Weapon damage to every creature who's Avoidance would be hit by your attack within a 10 ft radius of your attack's target.",
          "Greater Surge: Increase the damage of Surge to 1d6.",
          "Shine: Increase this Rune's Max Fade by 1.",
          "Resonant: Surge may be used if this Power has LVL or fewer Fade points.",
          "Magnitude: Increase the damage of this Power to 1d10. Requires Greater Impact.",
          "Greater Reach: If the Engraved object is a Ranged Weapon, increase it's range by 10 ft. Also, increase the radius of Burst by 10 ft."
        ],
        [
          "Evoke: [Activate] As an Activation Action you may increase this Power's Fade to its maximum. Deal 1d10 damage to your target and every creature who's Avoidance would be hit by your attack within a 20 ft radius of your target for each Fade point caused by Evoke. Afterwards, this Rune becomes Faded.",
          "Greater Glow: Increase the uses of Glow by one per Break.",
          "Greater Shine: Increase this Rune's Max Fade by 2."
        ]
      ]
    },
    {
      name: "Runic Blast",
      attributes: "[Action] [Ranged]",
      description: "Point to a creature or object you can see within 30 ft, a rune alights on your palm and releases a blast of energy at the target. This makes a moderate clapping sound on impact. Deal 1d8 Kinetic damage. Max 3 Fade.",
      proficiencies: [
        [
          "Surge: [Activate] If you have no Faded Runes, add an additional 1d6 damage.",
          "Impact: Increase the damage of this Power to 1d10",
          "Reach: Increase the range to 50 ft.",
          "Glow: Once per Break, you may treat the usage of this Power as if it had no Fade points and you had no Faded Runes."
        ],
        [
          "Greater Impact: Increase the damage of this Power to 1d12. Requires Impact.",
          "Burst: [Activate] If this Power has 0 Fade you may as an Activation Action deal the Runic Blast damage to every creature who's Avoidance would be hit by your attack within a 10 ft radius of your attack's target.",
          "Effortless: If any Runic Blast damage die rolls its maximum value, this use of Runic Blast does not cause any Fade.",
          "Greater Surge: Increase the damage of Surge to 1d8.",
          "Shine: Increase this Rune's Max Fade by 1.",
          "Resonant: Surge may be used if you have 1 Faded Rune.",
          "Magnitude: Increase the damage of this Power to 2d8. Requires Greater Impact."
        ],
        [
          "Greater Glow: Increase the uses of Glow by one per Break.",
          "Aftershock: Whenever you Hard Succeed the Power roll to hit with Runic Blast you may do another Runic Blast as a Free Action. This second Runic Blast also causes 1 Fade.",
          "Greater Shine: Increase this Rune's Max Fade by 2."
        ]
      ]
    },
    {
      name: "Ward",
      attributes: "[Action] [Touch]",
      description: "By pressing your finger against an object you imbue it with an Engraving of Warding and attune it to a Rune upon your body. The effect lasts 1 hour. "
      +"You are aware of the object's location and whoever is touching it. You may only have 1 Ward active at a time. You may use the Ward Power on a Ward object to change which proficiencies are active on it. Max 1 Fade.",
      proficiencies: [
        [
          "Hinderance: [Activate] When you create the Ward, you may give it an Hindering effect. All creatures who end their turn within 10 ft of the Ward receive -10 ft on their Movement Distance on their next turn.",
          "Retaliate: [Activate] When you create the Ward, you may give it a Retaliating effect. Whenever a creature within 30 ft of the Ward harms you, the Ward will attempt a Power attack vs Avoidance to blast a shot of energy at them, dealing 1d6 Kinetic damage.",
          "Vigor: [Activate] When you create the Ward, you may give it an Invigorating effect. All creatures you choose who end their turn within 10 ft of the ward receive 10 ft on their Movment Distance on their next turn.",
          "Artisan: If you imbue an art tool as a Ward, gain a Favored +1 on Art checks with that tool.",
          "Sluggish: Hinderance now also subtracts 2 from their Initiative.",
          "Impact: Increase the damage of Retaliate to 1d8.",
          "Elemental: Choose an Elemental damage type, your Retaliate may be Kinetic energy or any element you chose with this Proficiency. (1 Additional element with each repeated proficiency, a single Ward can only select one damage type when created)",
          "Empowered: Creatures effected by Vigor may choose to add your Will to any d20 or damage roll, they may only do this one time while affected by this Ward."
        ],
        [
          "Multiplex: You may have a second Ward active at a time.",
          "Reach: Hinderance and Vigor's range are increased to 20 ft.",
          "Aggressive: If Retaliate doesn't attack any creatures during a Round, at the end of the Round you may choose to have it attack the nearest non-allied creature.",
          "Renewing: Whenever a creature effected by Vigor gains a Movement Distance higher than they could have without the Vigor effect, they heal 1d6 damage."
        ]
      ]
    },
    {
      name: "Imbued Sight",
      attributes: "[Passive] [Self]",
      description: "Engravings upon your eyes grant you enhanced sight. Gain a Favored +1 to Search checks vs the Hide Skill. Only 1 proficiency may be active per eye at one time. "
      +"You must make a choice for each eye when you Awaken this Engraving, and that choice lasts until this Engraving becomes Faded or Dormant. Lasts for 10 minutes. Max 1 Fade.",
      proficiencies: [
        [
          "Heat Sight: You can now see heat through most solid objects which are less than 5 ft thick.",
          "Zoom: You may reduce your periferal vision, but double your view distance. Your ranged attacks gain a +1 to the attack roll if you attacked that target on the previous turn.",
          "Shared Sight: You may close this eye to share the sight of your other eye(s) with creatures you choose within 10 ft."
        ],
        [
          "Dark Sight: You can see in any lighting condition that is not Pitch Black as if it were Medium.",
          "Alert: [React] [Activate] You can track moving targets more easily. You may nullify any effect active on the target of your Ranged Attacks that reduces your attack roll as an Activation Action. "
          +"If a creature moves into and then out of your field of view in one movement, you may do a basic ranged attack against it as a React Action.",
          "Piercing Sight: Your Heat Sight may now see the normal appearance, not just heat.",
          "Third Eye: You gain an additional eye which may be placed anywhere on your body. This proficiency does not count towards your limit, but this eye may not gain other proficiencies. "
          +"If this eye can see a threat, it cannot flank you.",
          "Enhanced Zoom: Zoom now grants a +3 bonus and triples your view distance."
        ],
        [
          "Spyglass: Zoom now grants a +5 bonus and quadruples your view distance. Requires Enhanced Zoom."
        ]
      ]
    },
    {
      name: "Resonance",
      attributes: "[Action] [React] [Self] [Touch]",
      description: "As an Action you reach out and touch a willing creature. A small rune of Resonance alights upon them. As Reaction when they roll a d6, roll a d6 for yourself. If the sum of the two d6 rolls is equal to 7, you may add your level plus this rune's Fade (or a minimum of 1) to their roll. If the sum is equal to 2, subtract this rune's Fade from their roll instead. Max 3 Fade.",
      proficiencies: [
        [
          "Approximation: The sum may equal 8 as well.",
          "Perfect: The sum may equal 12 as well, when the sum equals 12 you may also add your LVL to their roll.",
          "Snake-Eyes: You no longer need to subtract your Fade from their roll when the sum is equal to 2.",
          "Collective: Add the Fade on all of your Runes to this effect.",
          "Shine: Increase this Rune's Max Fade by 1."
        ],
        [
          "Harmony: [Activate] As an Activation Action when another of your runes gains Fade, you may apply Fade to this rune as well.",
          "Cobra-Eyes: When the sum is 2 you may add this rune's Fade to their roll. Requires Snake-Eyes.",
          "Combine: Add the number of your Faded Runes to this effect."
        ]
      ]
    },
    {
      name: "Embolden",
      attributes: "[Action] [Touch]",
      description: "As an Action you reach out and touch a willing creature. A small rune of Emboldening alights upon them. On their next Attack roll, add 5 minus this rune's Fade to the result. If their roll Fails, cause 1 additional Fade. Max 3 Fade",
      proficiencies: [
        [
          "Potency: Add your level to this rune's effect.",
          "Effortless: Their roll only causes an additional Fade on a Hard Fail.",
          "Ease: This rune doesn't cause a base Fade if the creature's roll is a Hard Success."
        ],
        [
          "Boost: [Activate] As an Activation Action, Embolden may be used on a Power roll.",
          "Shine: Increase this Rune's Max Fade by 1.",
          "Quirked: Their roll may use a Quirk without imposing an Unfavored penalty.",
          "Willful: [Activate] As an Activation Action, Embolden may be used on any roll that uses the creature's Will. Requires Boost.",
          "Fortune: [Activate] As an Activation Action, instead of its usual effects you may cause their next d20 Skill roll to treat any Hard Fail as a Soft Fail. You may use this proficiency once per Full Sleep."
        ],
        [
          "Prosper: You may use Fortune any number of times until it is used on a roll which results in a Fail. After this happens, you may not use Fortune again until you finish a Full Sleep."
        ]
      ]
    },
    {
      name: "Expertise",
      attributes: "[Action] [Melee] [Ranged]",
      description: "When you gain this Power select any Skill, you gain combat expertise using that Skill. When this Rune is Awakened, you may make basic Melee or Ranged Attacks using this Skill. Gain 1 Fade every time you Fail the attack roll. Max 3 Fade.",
      proficiencies: [
        [
          "Skilled: Increase the Maximum of the Skill by 3."
        ]
      ]
    },
    {
      name: "Restore",
      attributes: "[Action] [Touch]",
      description: "This Rune shines brightly on the palm of your hand. You reach out and touch a creature, healing them for 1d6 damage. Max 2 Fade.",
      proficiencies: [
        [
          "Soothe Mind: Instead of its usual effect, Restore may end a creature's Psychic Break. Causes 2 additional Fade.",
          "Potency: Increase the healing on this Power based on its current Fade. 1d8 at 1 Fade, 1d10 at 2 Fade, 1d12 at 3 Fade or higher.",
          "Triage: Increase the Max Fade of this Rune by 1."
        ],
        [
          "Mend Wound: Instead of its usual effect, if the creature is currently at its Max Survival you may cure 1 non-extreme Injury. Causes 2 additional Fade.",
          "Purify: Instead of its usual effect, you may remove 1 Curse effect from the creature. Causes 2 additional Fade.",
          "Greater Triage: Increase the Max Fade of this Rune by 1."
        ],
        [
          "Cleanse: Purify may remove all Curse effects on the creature, doing so causes Restore to immediately become Faded."
        ]
      ]
    },
    {
      name: "Mystical Muse",
      attributes: "[Action] [Touch]",
      description: "You enscribe an Engraving of the Muse into a musical instrument and attune it with a Rune upon your body. When you use the instrument to do a Perform roll you may use this Power to gain a Favored +1, on a Fail gain 1 Fade. You may enscribe one instrument at a time, this does not cause Fade. Max 3 Fade.",
      proficiencies: [
        [
          "Inspiring Sonnet: [Action] While playing your instrument you recite a poem which inspires courage in the hearts of your comrades. Every ally who hears it gains a Favored +1 on their next basic Attack roll. Causes 1 Fade.",
          "Piercing Chord: [Action] You play a sharp progression of notes which causes great discomfort to all who hear it. Creatures who hear it must roll a Will Save to resist the chord, on a Fail they take 1d4 damage and on a Hard Fail they also are Deaf for 1 Round. Causes 1 Fade.",
          "Virtuoso: When you busk using this instrument, add your LVL to the roll for how much Virtua you earn."
        ],//TODO more
        [
          "Allegro: [Action] You play a jolly tune that inspires swiftness in the hearts of your comrades. Every ally who hears it gains +1 to their next Speed roll. Causes 1 Fade.",
          "Dissonant Tune: [Action] You play a haunting refrain that has a disturbing chord progression without resolution. Creatures who hear it must roll a Will Save to resist the tune, on a Fail they are Feared for 1 Round. Causes 1 Fade.",
          "Focused Acoustics: When you use an Action to use a Mystical Muse Proficiency, you may select which creatures are targeted by the effect.",
          "Impact: Increase the damage of Piercing Chord to 1d6."
        ]
      ]
    },
    {
      name: "Imbued Projection",
      attributes: "[Action] [Touch]",
      description: "By pressing your finger against a Projection Plating unit, you imbue it with an Engraving of Protection. "
      +"Increase the Shielding granted by the Projection Plating by your Will (Imbued Projection does not normally benefit from a Will Primary Attribute). Max 3 Fade.",
      proficiencies: [
        [
          "Empowered: Add your level to the Shielding granted.",
          "Protection: [React] If this Rune is Awakened, when the user of the Projection Plating loses 1 Life they may spend their React to reboot the Projection Plating with half its usual effect. Causes 1 Fade."
        ],
        [
          "Deflection: While their Projection Plating is active, increase the effect of their Deflector by 2.",
          "Reactive: Protection no longer spends their React action.",
          "Repelling: While their Projection Plating is active, increase their Avoidance by 1.",
          "Vigilant Deflection: Deflection is active even when their Projection Plating is not active."
        ]
      ]
    },
    {//TODO rework with new Fade system
      name: "Overload",
      attributes: "[Activation] [Melee]",
      description: "When your single target attack from a Power deals damage to a creature, you may spend an Activation Action to add that attack's Fade to the damage dealt. Causes 1 Fade. Max 5 Fade.",
      proficiencies: [
        [
          "Empowered: Add your Will to the damage dealt.",
          "Impact: You may add Overload's Fade to the damage dealt instead of the original attack's Fade.",
          "Faded: Overload gains an additional Fade when used."
        ],
        [          
          "Greater Impact: You may add both Overload's Fade and the original attack's Fade to the damage dealt. Requires Impact.",
          "Forked: [Activate] As an Activation Action you may use Overload on attacks which hit up to 3 targets."
        ],
        [
          "Discharge: Forked may now be used on attacks which hit more than 3 targets.",
          "Meltdown: [Activate] Roll a d20 - Fade vs 5. On a success, you may add Overload's Fade a second time to the damage dealt. On a fail you may not add Overload's Fade to the attack at all. Causes 1 additional Fade.",
          "Catastrophy: Meltdown also attempts to add the original attack's Fade a second time."
        ]
      ]
    },
    {
      name: "Flux",
      attributes: "[Action] [Ranged]",
      description: "On your turn, as an Action you release the energy within this rune to cause Flux on a creature you can see. On that creature's next Attack or Power roll, subtract 5 minus this rune's Fade from that roll. If their roll still Succeeds, cause 1 additional Fade. The creature may attempt a Will Save to resist this effect. Max 3 Fade.",
      proficiencies: [
        [
          "Impede: You may ready this Action as a React, Flux applies to the creature's current Attack or Power roll when used in this way.",
          "Empowered: Add your level to the amount subtracted."
        ],
        [          
          "Befuddle: You may use Flux on any roll that uses the creature's Will.",
          "Effortless: This rune no longer causes an additional Fade if the creature's roll Soft Succeeds.",
          "Ease: This rune no longer causes an additional Fade if the creature's roll Hard Succeeds. Requires Effortless.",
          "Refresh: If their roll is a Hard Fail, this Flux causes 1 fewer Fade."
        ],
        [
          "Daze: Instead of its usual effect, Flux may give the creature the Dumb effect until it ends 2 turns or 10 minutes has passed.",
          "Boggle: Daze, when used outside of combat, may last for 2 hours. After 1 hour the creature may attempt to end the effect by rolling a Will Save."
        ]
      ]
    },
    {
      name: "Arcane Bolt",
      attributes: "[Action] [Ranged]",
      description: "Shoot a basic Ranged Attack with a shot empowered by runic power. If the attack hits, the victim must roll a Will Save. On a Fail a bolt of energy leaps out of your weapon and strikes at the target as another basic Ranged Attack, dealing kinetic damage. Max 3 Fade.",
      proficiencies: [
        [
          "Empowered: If Will is not your Primary Attribute, you may add your Will to the bolt of energy's damage.",
          "True Shot: On a Hard Success for the original attack the creature does not make a Will Save, the bolt cannot miss."
        ],
        [
          "Ensnared: [Activation] On a Hard Success and as an Activation Action Arcane Bolt may Slow -2 for 2 turns instead of dealing damage.",
          "Paralyzing: [Activation] On a Hard Success and as an Activation Action Arcane Bolt may Paralyze for 1 turn instead of dealing damage.",
          "Echo: If Arcane Bolt hits, the victim must roll a Will Save again to resist a second Arcane Bolt.",
          "Ease: Arcane Bolt causes 1 less Fade if the attack Hard Succeeds."
        ]
      ]
    },
    {
      name: "Quiet",
      attributes: "[Action] [AOE]",
      description: "By tracing a rune in the air you create a Rune of Quiet. All sound within 10 ft of the rune is Silenced, all creatures within the area are Deaf. The rune glows brightly, cannot be moved and persists for 1 minute. Max 1 Fade.",
      proficiencies: [
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
    },
    {
      name: "Aura of Protection",
      attributes: "[Action] [AOE] [Aura]",
      description: "You release a soft glow of Runic energy that imparts safety and protection to friendly creatures around you. Creatures who mean you no harm within 20 ft that are within line of sight receive +1 Armor. Only 1 Aura Rune may be active at one time. This effect persists as long as this Rune is Awakened. After activating this Rune, cause 1 Fade at the end of each of your Turns. Max 3 Fade.",
      proficiencies: [
        [
          "Salvation: [React] As a Reaction, when a creature within this aura rolls a Save you may add +1 to their roll. Causes 1 Fade.",
          "Bulwark: Reduce Physical damage taken by creatures within this aura by 1.",
          "Empowered: Increase the Armor bonus to 2."
        ],
        [
          "Reserve: At the end of your Turn, if no creature within the effect was the target of an attack or received any damage, this Rune does not cause any Fade on this Turn.",
          "Deflection: Increase the creature's Avoidance by 1.",
          "Greater Bulwark: Increase the effect of Bulwark to 3."
        ]
      ]
    },
    {
      name: "Aura of Renewal",
      attributes: "[Action] [AOE] [Aura]",
      description: "You release a soft glow of Runic energy that imparts health and well-being to friendly creatures around you. Creatures who mean you no harm within 20 ft that are within line of sight are healed 1 Survival at the end of each of your Turns, do not add your Will Primary Benefit to this healing. Only 1 Aura Rune may be active at one time. This effect persists as long as this Rune is Awakened. After activating this Rune, cause 1 Fade at the end of each of your Turns. Max 3 Fade.",
      proficiencies: [
        [
          "Rejuvenation: Increases all healing received by creatures within the aura by 1.",
          "Soothe: When the Aura is first cast, reduce the Strain of the creatures by 1."
        ],
        [
          "Empowered: Increase the healing dealt to an amount equal to your level.",
          "Reserve: At the end of your Turn, if all creatures within the effect are already at their Max Survival, this Rune does not cause any Fade on this Turn.",
          "Greater Rejuvenation: Increase the effect of Rejuvenation to 3.",
          "Greater Soothe: Soothe applies to each Turn."
        ]
      ]
    },
    {
      name: "Aura of Might",
      attributes: "[Action] [AOE] [Aura]",
      description: "You release a soft glow of Runic energy that imparts brute force to friendly creatures around you. Creatures who mean you no harm within 20 ft that are within line of sight receive +1 to any Physical Damage they deal. Only 1 Aura Rune may be active at one time. This effect persists as long as this Rune is Awakened. After activating this Rune, cause 1 Fade at the end of each of your Turns. Max 3 Fade.",
      proficiencies: [
        [
          "Elemental: This aura also applies to Elemental damage dealt.",
          "Mental: This aura also applies to Mental damage dealt.",
          "Overpower: Creatures effected also ignore 1 Armor on their attacks."
        ],
        [
          "Empowered: Increase the damage bonus to an amount equal to your level.",
          "Reserve: At the end of your Turn, if no creature dealt damage using this effect's bonus, this Rune does not cause any Fade on this Turn."
        ]
      ]
    }
  ], // LVL 2
  [// LVL 3
    {
      name: "Cosmic Rune",
      attributes: "[Activate] [Self] [Passive]",
      description: "At the time you take this Power, choose 1 Power from the Cosmic Source which is of [LVL 3] or below, this is now a Runic Arts Power you may use. This Power gains 1 Fade for every 2 ae required, rounding up, and your maximum ae is considered 2*LVL when calculating effects based on your maximum. Using this Power uses your Activation Action in addition to the Action requirements of the selected Power.",
      proficiencies: []
    },
    {
      name: "Mimicry",
      attributes: "[Action] [Self]",
      description: "As an Action this Rune temporarily re-lights your most recently used Rune (even if it is Faded), allowing you to use that Rune again without any proficiencies. This allows you to ignore the limitation on using an Action for the same purpose twice in one turn. This causes 1 Fade to both this Rune and the Rune being reused. Mimicry may not reuse Mimicry, or any Rune with a Max Fade of 1. Max 3 Fade.",
      proficiencies: [
        [],
        [
          "Ease: Do not add the base Fade of using a Rune to the Rune being reused.",
          "Mild Effect: You may also reuse one proficiency on the Rune being reused, excluding proficiencies that require any kind of action cost or additional Fade."
        ],
        [
          "Moderate Effect: Mild Effect may reuse two proficiencies. Requires Mild Effect.",
          "Active: You may reuse proficiencies that require an Activation Action without needing to use another Activation Action.",
          "Greater Effect: Mild Effect may reuse a third proficiency. Requires Moderate Effect."
        ]
      ]
    },
    {
      name: "Phase",
      attributes: "[Self] [Action]",
      description: "As an Action, your physical form phases into an aether form for 1 Round or 1 minute out of combat. While phased you pass through solid objects, cannot interact with the physical world and float freely while conserving your momentum. You become immune to attacks/powers except those which deal Elemental or Mental damage types, or which inflict a Curse status effect. Phase ends early if you take damage or if this Rune becomes Faded. When passing through an object, being attacked, or being targeted by a negative effect, roll a d20 + LVL vs 10. On any result other than a Hard Success, gain 1 Fade on this rune. On a Soft Fail you are no longer phasing after resolving the attack or effect. On a Hard Fail you are no longer phasing before resolving the attack or effect. On any Fail involving an object, you do not pass through the object. Max 2 Fade.",
      proficiencies: [
        [],
        [
          "Propel: You may move at half your movement distance in any direction in 3D space while phased.",
          "Water Phasing: Instead of its usual effect, you may enter a special form of Phase. In this form, from your perspective water has all of the properties of air and none of the properties of water. Cannot use any proficiencies that do not specifically work with Water Phasing.",
          "Ease: When you get a Soft Success while passing through objects, being attacked, or being targeted by negative effects, you no longer gain a Fade."
        ],
        [          
          "Engrave: As an Action you may reach out and touch a creature. That creature gains the effects of Phase or Water Phasing. If the creature is unwilling, it must make a Will Save.",
          "Shine: Increase the Max Fade of this Rune by 1.",
          "Glide: You may move your full movement distance. Requires Propel."
        ]
      ]
    },
    {
      name: "Runic Invigoration",
      attributes: "[Action] [Self]",
      description: "As an Action the light from this Rune fades to reignite the light of another. Select 1 Faded Rune, this Rune becomes Dormant. Afterwards, immediately Fade the Runic Invigoration Rune. Max 1 Fade.",
      proficiencies: [
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