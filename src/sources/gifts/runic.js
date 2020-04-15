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
          "Attuned: You are always aware of this object's location and whoever is holding it."
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