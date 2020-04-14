export default [
  [ // 1G
    {
      name: "Rampage",
      attributes: "[Minor] [Self]",
      description: "Your blood boils with rage throwing you into a violent Rampage. Spend up to 5 Bloodlust to enter a Rampage for that many turns. During a Rampage you cannot be put to sleep, incapacitated, stunned, feared or have your movement impaired. Your Rampage ends early if you enter Apathy. A turn counts as 2 towards the duration if you do not deal any damage to a creature during that turn.",
      proficiencies: [
        [
          "Duration: Increase the maximum turns, and maximum cost, by 2. (Repeatable)",
	        "Numb: [Activate] Use your Activation Action when beginning your Rampage, when you take physical damage during this Rampage, you may spend 1 Bloodlust to subtract Gd4 from the damage taken.",
	        "Rage: [Activate] Use your Activation Action when beginning your Rampage, when you land a hit that deals damage to a creature during this Rampage, you may spend 1 Bloodlust to add Gd4 damage."
        ],
        [
          "Protection: During Rampage, subtract 6 from an Injury Severity roll after seeing the result (to a minimum of 1), usable once per day. ",
          "Hyper: Gain +G to your Speed rolls during Rampage.",
          "Overpower: [Activate] As an Activation Action during your Rampage before making an attack, gain +1 Favored to that attack roll. The next attack against you gains +1 Favored."
        ],
        [
          "Roar: When beginning your Rampage, you may Roar to apply the Taunt effect to every hostile creature within 30 ft of you. Roll a d20 + Disruption, each creature rolls d20 + Will to contest your roll, any that fail are Taunted for 1 turn."
        ],
        [
          "Sturdy: During a Rampage with Numb active, you may use Protection once without referring to or counting towards your daily limit."
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
    
//   ]
// }