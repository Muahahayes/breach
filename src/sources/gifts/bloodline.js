export default [
  [ // 1G
    {
      name: "Rampage",
      attributes: "[Action] [Self]",
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
    },
    {
      name: "Bloodthirst",
      attributes: "[Action] [Melee]",
      description: "On touch you attempt to pierce a creature with your teeth or fingers, dealing 1d8 damage. Costs 1 Bloodlust.",
      proficiencies: [
        [
          "Fury: On a hit, gain an additional Bloodlust.",
		      "Thirst: [Activate] On a hit, as an Activation Action heal G Survival."
        ],
        [
          "Impact: Increase the damage to 1d10.",
		      "Hunger: You may use Bloodthirst for free if you are in Apathy."
        ],
        [
          "Anticoagulant: [Activate] On a hit, as an Activation Action the target Bleeds once after 5 turns.",
          "Magnitude: Increase the damage to 2d6.",
          "Feed: Thirst gains G more Survival and deals G more damage."
        ],
        [
          "Flow: Anticoagulant Bleeds after 2 fewer turns.",
          "Drain: Thirst and Anticoagulant may both be used with the same Activation Action.",
          "Overwhelming: Increase the damage to 2d8."
        ],
        [
          "Rupture: Anticoagulant Bleeds after 1 fewer turn, and may Bleed 2 more times."
        ]
      ]
    }
  ], // 1G
  [// 2G
    {
      name: "Dark Shot",
      attributes: "[Action] [Ranged]",
      description: "Use a Ranged Weapon to make a basic Ranged Weapon attack. Add 1d4 Darkness damage to the attack. Costs 1 Bloodlust.",
      proficiencies: [
        
      ]
    }
  ]// 2G
]
// {
//   name: "",
//   attributes: "",
//   description: "",
//   proficiencies: [
    
//   ]
// }