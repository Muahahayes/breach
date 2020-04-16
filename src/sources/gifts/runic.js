export default [
  [ // 1G
    {
      name: "Engraved Weapon",
      attributes: "[Action] [Self]",
      description: "By pressing your finger against an object you may imbue it with an Engraving of Empowerment and attune it with an Engraving upon your body. While you are holding the object, when you make a basic attack with the object you may add 1d4 to the damage result. You may only Engrave one object at a time, and may only Engrave an object once per day. You may remove the Engraving at any time as a Free Action. Fade points on this Engraving apply to any Attack roll with the object if you intend to use the effects of this Gift.",
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
      attributes: "[Action] [Melee]",
      description: "By pressing your finger against an object you imbue it with an Engraving of Warding and attune it to an Engraving upon your body. The effect lasts 1 hour. You are aware of the object's location and whoever is touching it. You may only have 1 Ward active at a time.",
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
    }
  ] // 1G
]
// {
//   name: "",
//   attributes: "",
//   description: "",
//   proficiencies: [
//    
//   ]
// }