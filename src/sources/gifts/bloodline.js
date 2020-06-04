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
    },
    {
      name: "Sillouete",
      attributes: "[Action] [Self]",
      description: "A shadowy form rises from your shadow. It stays attached to your shadow and your shadow is pulled around with it, but if your shadow disappears the Sillouete is destroyed. The Sillouete may use 1 of your Full Actions per turn to interact with an object, do a melee attack for 1d6 damage, or to use a melee Gift of 2G or lower without proficiency effects. Spend 1 Bloodlust to summon and 1 Bloodlust per subsequent turn (or 1 minute out of combat) to maintain the Sillouete.",
      proficiencies: [
        
      ]
    },
    {
      name: "Bind Daemon",
      attributes: "[Action] [Touch] [Minion]",
      description: "You reach out and touch the forehead of a creature which is at 1 Life or below, by speaking its name and spending 5 Bloodlust you bind it to your service as your Daemon. The creature may make a Will check vs your Will to resist the effect, on a success it is not bound and on a Hard Success it can never be bound by you using this Gift against its will. The Daemon must make every effort to be within 1 mile of you, cannot directly cause you harm, and you may as an Action spend 1 Bloodlust per creature's G level to force the Daemon to do any Action you choose (only if it is capable of carrying it out and will not cause direct harm to the Daemon). Any additional conditions the Daemon agrees to before the binding must also be obeyed. The Daemon comes to your side when called. This binding lasts until the Daemon is destroyed, you die, or you spend an hour releasing the binding. You may only have one binding at a time.",
      proficiencies: [
        [],[],
        [
          "Pressure: You may add your G to your Will check.",
          "Pair: You may have a second binding active at one time. They both must be bound with the same set of conditions."
        ],
        [
          "Trio: You may have a third binding active at one time. They may have different sets of conditions. Requires Pair.",
          "Domination: You gain Favored +2 in any opposing skill checks against one of your Daemon."
        ],
        [
          "Dark Gift: You may bestow each of your Daemon with a Gift you possess up to 2G and not including Minion Gifts.",
          "Company: You may have up to five bindings active at one time. Requires Trio."
        ],
        [
          "Crowd: You may have up to ten bindings active at one time. Requires Company.",
          "Greater Gift: You may bestow Gifts up to 3G. Requires Dark Gift."
        ],
        [
          "Cult: You may have up to one hundred bindings active at one time. Requires Crowd.",
          "Patron: You may bestow Gifts up to 4G, including Bind Daemon."
        ]
      ]
    }
  ],// 2G
  [// 3G
    {
      name: "Bloodsurge",
      attributes: "[Action] [Self]",
      description: "As a Full Action you draw more energy into your body. The next time you gain Bloodlust, increase the amount gained by 1.",
      proficiencies: [
        
      ]
    },
    {
      name: "Ancestral Telepathy",
      attributes: "[Activate] [Self] [Passive]",
      description: "Choose 1 Gift from the Psychic Source. This is now an Ancient Bloodlines Power you may use. If it causes a Psychic Fatigue check, it instead costs 1 Bloodlust. Using this Power uses your Activation Action in addition to the Action requirements of the selected Power.",
      proficiencies: []
    },
    {
      name: "Homunculus",
      attributes: "[Action] [Touch] [Minion]",
      description: "You spend a Full Action, 5 Bloodlust and 1 hour to touch approximately 1 human body's weight in blood, meat, and bone. You create a Homunculus, a crude creature that visually looks like yourself. The Homunculus has 1 Life, 5 Survival, your own Strength and Agility scores from when you were level 1G, 1 Stamina, and 0 Will. It is considered level 1G. The Homunculus takes basic commands, but cannot speak or write, and lasts until it or you are killed. You must spend a Full Action to command the Homunculus to use either a Full Action or Movement Action during comabt, but it may be told to repeat that Action until commanded again. You may only have 1 Homunculus at one time.",
      proficiencies: [
        [],[],
        [
          "Mimicry: The Homunculus may speak any language you know. It needs specific directions on what to say but may be taught to say certain responses to certain stimuli (Such as \"Homunculus, say hello if someone greets you\")."
        ],
        [
          "Dark Gift: The Homunculus gains a Gift you had at level 1G. You must spend an Action to command it to use the Gift in combat.",
          "Sturdy: The Homunculus gains 1 Life and 5 Survival.",
          "Physique: The Homunculus now has your current Strength and Agility scores."
        ],
        [
          "Greater Gift: The Homunculus gains a Gift you had at up to level 3G not including Minion Gifts. Requires Dark Gift",
          "Intelligence: The Homunculus gains 2 Will. It may start to make decisions for itself and act without direct commands.",
          "Tough: The Homunculus gains 2 Life. Requires Sturdy."
        ],
        [
          "Clone: The Homunculus now has your Strength, Agility, Stamina, Will, Life and Survival scores. It can think and act for itself. It possesses all Gifts you possessed before you reached level 6G, excluding Minion Gifts. Requires Mimicry, Greater Gift, Tough, Intelligence, and Physique."
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