export default [
  [ // 1G
    {
      name: "Rampage",
      attributes: "[Action] [Self]",
      description: "Your blood boils with rage throwing you into a violent Rampage. Spend up to 5 Bloodlust to enter a Rampage for that many turns. During a Rampage you are immune to to Sleep, Unconscious, Stun, Fear, and Immobilize effects. Your Rampage ends early if you enter Apathy. A turn counts as 2 towards the duration if you do not deal any damage to a creature during that turn.",
      proficiencies: [
        [
          "Duration: Increase the maximum turns, and maximum cost, by 2. (Repeatable)",
	        "Numb: [Activate] Use your Activation Action when beginning your Rampage, when you take physical damage during this Rampage, you may spend 1 Bloodlust to subtract Gd4 from the damage taken.",
	        "Rage: [Activate] Use your Activation Action when beginning your Rampage, when you land a hit that deals damage to a creature during this Rampage, you may spend 1 Bloodlust to add Gd4 damage."
        ],
        [
          "Protection: During Rampage, subtract 6 from an Injury Severity roll after seeing the result (to a minimum of 1), usable once per day. ",
          "Hyper: Gain +G to your Speed rolls during Rampage.",
          "Overpower: [Activate] As an Activation Action during your Rampage before making an attack, gain a Favored +1 to that attack roll. The next attack against you gains a Favored +1."
        ],
        [
          "Roar: When beginning your Rampage, you may Roar to attempt to Taunt every hostile creature within 30 ft of you. Roll a d20 + Disruption, each creature rolls d20 + Will to contest your roll, any that fail are Taunted for 1 turn.",
          "Frenzy: During the Rampage, you may drop below 1 Life without experiencing any of the effects of Dying. If you are still below 1 Life at the end of your Rampage you immediately fall prone and begin Dying."
        ],
        [
          "Sturdy: During a Rampage with Numb active, you may use Protection once without referring to or counting towards your daily limit."
        ]
      ]
    },
    {
      name: "Bloodthirst",
      attributes: "[Action] [Melee]",
      description: "As an Action, on touch you attempt to pierce a creature with your teeth or fingers, dealing 1d8 + Strength damage. Costs 1 Bloodlust.",
      proficiencies: [
        [
          "Fury: On a hit, gain an additional Bloodlust.",
          "Thirst: [Activate] On a hit, as an Activation Action heal G Survival.",
          "Assault: [Action] As an Action, you may put extra effort into the attack. Roll each damage die twice when adding up your damage dealt."
        ],
        [
          "Impact: Increase the damage to 1d10.",
          "Hunger: You may use Bloodthirst for free if you are in Apathy.",
          "Quirked: When using a Quirk on this attack, Increase the damage to 2d6."
        ],
        [
          "Anticoagulant: [Activate] On a hit, as an Activation Action the target Bleeds once after 5 turns.",
          "Magnitude: Increase the damage to 2d6. Increase the effect of Quirked to 2d8.",
          "Feed: Thirst gains G more Survival and deals G more damage."
        ],
        [
          "Flow: Anticoagulant Bleeds after 2 fewer turns.",
          "Drain: Thirst and Anticoagulant may both be used with the same Activation Action.",
          "Overwhelming: Increase the damage to 2d8. Increase the effect of Quirked to 2d10."
        ],
        [
          "Rupture: Anticoagulant Bleeds after 1 fewer turn, and may Bleed 2 more times."
        ]
      ]
    },
    {
      name: "Sanguine Strike",
      attributes: "[Action] [Melee]",
      description: "As an additional Action you channel darkness into a basic melee attack before determining if the attack hits. Add a d4 for each point of Will you possess to the damage dealt by the attack. Costs 2 Bloodlust.",
      proficiencies: [
        [
          "Empowered: Add your Will to the damage dealt.",
          "Fury: On a Hard Success, gain an additional Bloodlust."
        ],
        [
          "Confirm: You may choose to apply Sanguine Strike after a basic melee attack has been determined to hit, but before discovering if it is a Soft or Hard Success.",
          "Impact: Increase the size of Sanguine Strike's dice to a d6.",
          "Energized: The damage added by Sanguine Strike is now Darkness damage.",
          "Martial Expertise: Permanently add 1 to your Martial Arms Skill."
        ],
        [
          "Hellfire: Your weapon alights in flame as it strikes, the creature must roll a 20 + Stamina vs your own d20 + Will. On a fail they are Burned, dealing 1d6 Fire damage over 2 turns. On a Hard Fail the Burn deals 1d8 damage over 3 turns instead.",
          "Quirked: When using a Quirk on this attack, increase the size of Sanguine Strike's dice to a d10. Requires Impact.",
          "Penetration: This attack ignores the target's Aegis."
        ],
        [
          "Greater Impact: Increase the size of Sanguine Strike's dice to a d8. Increase the effect of Quirked to a d12. Requires Impact.",
          "Effortless: [Activate] When you use Sanguine Strike you may spend an Activation Action to roll a d4. On a 4, you do not spend a Full Action for this use of Sanguine Strike.",
          "Cleave: [Activate] If a creature dies from this attack, you may spend an Activation Action to roll an Attack roll against another creature within reach. On a Soft Success, deal half this attack's damage to that creature. On a Hard Success, deal full damage.",
          "Deadly Expertise: Permanently add 2 to your Martial Arms Skill."
        ],
        [
          "Magnitude: Increase the size of Sanguine Strike's dice to a d10. Increase the effect of Quirked to 2d8. Requires Greater Impact.",
          "Ease: Effortless also applies on a 3."
        ]
      ]
    },
    {
      name: "Darkflight",
      attributes: "[Action] [Self]",
      description: "Dark wings sprout from your shoulders, doubling your normal jumping height and distance during your Movement. The wings fade away after the round. Costs 1 Bloodlust.",
      proficiencies: [
        [
          "Corporeal: The wings persist for G rounds after the first, allowing you to leap again during your Movement.",
          "Gust: After jumping while Darkflight is active, you may push creatures within 10ft of where you started your jump and/or where you land up to 10ft away."
        ],
        [
          "Dive: [Activate] If you land on top of a creature after leaping at least half your maximum movement distance you may make a basic Melee attack as an Activation Action. Costs 1 Bloodlust."
        ],
        [
          "Shadowflight: While Darkflight is active, as your movement action, if you are standing out of direct light you may disappear and reappear in another location out of direct light within your maximum movement."
        ]
      ]
    },
    {
      name: "Hemotremor",
      attributes: "[Action] [AOE]",
      description: "You release a wave of dark energy 30 ft around you. Roll a d20 + Use Power. All creatures must roll a d20 + Will vs your roll, any that fail take 1d4 Darkness damage. Costs 2 Bloodlust.",
      proficiencies: [
        [
          "Empowered: Add your Will to the damage dealt."
        ],
        [
          "Malignant: Add G to the Severity roll of any Injury caused by Hemotremor's damage."
        ]//TODO more
      ]
    }
  ], // 1G
  [// 2G
    {
      name: "Dark Shot",
      attributes: "[Action] [Ranged]",
      description: "Use a Ranged Weapon to make a basic Ranged Weapon attack. Add 1d4 Darkness damage to the attack. Costs 1 Bloodlust.",
      proficiencies: [
        [],
        [
          "Sharp Aim: Permanently add 1 to your Marksmanship Skill.",
          "Empowered: Add your Will to the damage dealt.",
          "Twin Shot: If Dark Shot hits, you may make a basic Ranged Weapon attack on the same target for free."
        ],
        [
          "Impact: Increase the damage die to 1d6.",
          "Fork: Your Twin Shot may be used on any target within range.",
          "Focused: [Action] As an Action, you may focus more power into your shot. Roll each base damage die of your Ranged Weapon twice when adding up your damage dealt."
        ],
        [
          "Deadly Aim: Permanently add 2 to your Marksmanship Skill",
          "Dark Twin: You may spend Bloodlust to use Dark Shot with your Twin Shot attack.",
          "Piercing Shot: [Action] As an Action, you may attempt to apply the Sundered effect to the victim hit. They may roll d20 + Stamina vs your Use Power to resist the effect."
        ],
        [
          "Overwhelm: [Activate] If your Dark Shot deals a killing blow you may use any Gift which costs Bloodlust. This may only trigger once per turn."
        ]
      ]
    },
    {
      name: "Sillouete",
      attributes: "[Action] [Self]",
      description: "A shadowy form rises from your shadow. It stays attached to your shadow and your shadow is pulled around with it, but if your shadow disappears or the Sillouete is more than 30 ft away from you the Sillouete is destroyed. The Sillouete may spend 1 Bloodlust and 1 Full Action per turn to interact with an object, do a basic melee attack for 1d6 damage, or to use a melee or touch non-minion Gift of 2G or lower without proficiency effects. Spend 2 Bloodlust to summon the Sillouete. If your Sillouete is destroyed it may not be summoned again until you take a Break or finish a Full Sleep.",
      proficiencies: [
        [],
        [
          "Shadow Link: When you take damage which does not reduce your Life, you may apply half the damage to your Sillouete instead. Your Sillouete is destroyed after it has taken damage equal to half your max Survival.",
          "Reach: Increase the range the Sillouete can go without being destroyed to 50 ft."
        ],
        [
          "Gifted: The Sillouete may use Gifts up to [3 G].",
          "Impact: Increase the damage of the Sillouete's basic melee attack to 1d8."
        ]//TODO: more
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
    },
    {
      name: "Hex",
      attributes: "[Action] [Ranged]",
      description: "Point at a creature you can see within 30 ft. and make a Use Power attack. On a hit, apply a Hex Curse to the target. While Hexed, the creature receives an Unfavored -1 on rolls to resist or avoid negative effects or attacks by you. Lasts 1 hour. Costs 2 Bloodlust.",
      proficiencies: [
        [],
        [
          /*
          ideas: 
          increase injury severity rolls
          reduce Use Power
          chance to cause Fear effect if they hit you
          slow -2
          shorten hunger/thirst quota by 1 day
          */
        ]
      ]
    },
    {
      name: "Sacrifice",
      attributes: "[Action] [Melee]",
      description: "After hitting a creature with a melee attack or power, if that creature is at 1 Life you may apply a Mark of Sacrifice upon them. If they die while Marked the user gains 1 Soul Fragment. If they heal at least 1 point of Survival the Mark is removed. Costs 2 Bloodlust.",
      proficiencies: [
        [],
        [
          // consume soul fragments to gain self buffs, note that soul fragment is the same thing in cosmic's Soul Rend so these powers can work together using that shared resource
        ]
      ]
    }
  ],// 2G
  [// 3G
    {
      name: "Ancestral Telepathy",
      attributes: "[Activate] [Self] [Passive]",
      description: "At the time you take this Gift, choose 1 Gift from the Psychic Source which is of [3 G] or below, this is now an Ancient Bloodlines Power you may use. If it causes a Psychic Fatigue check, it instead costs 2 Bloodlust. Using this Power uses your Activation Action in addition to the Action requirements of the selected Power.",
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
    },
    {
      name: "Miasma",
      attributes: "[Action] [AOE] [Melee]",
      description: "As an Action you release a cloud of poisonous gas from your body, which floats in place and takes up an area with a radius of 10 ft. Any creature other than yourself that is within the cloud must roll a d20 + Stamina vs [10 + Use Power] each turn they are within the cloud. On a Fail they take 2d8 Nature damage, on a Hard Fail they are also Poisoned for an additional 2d4 Nature damage for 3 turns with a difficulty of [10 + Use Power].",
      proficiencies: [
        [],[],
        [
          //TODO
        ]
      ]
    }
  ],// 3G
  [// 4G
    {
      name: "Shroud",
      attributes: "[Action] [AoE] [Self]",
      description: "A dark energy radiates from your body and extends for 10 ft. The energy persists for up to 10 minutes and during that time creatures within the energy gain a +G to Hide checks. While the energy radiates, any creature other than yourself within the energy cannot use their Activation Action. The effect ends prematurely if you enter Apathy. Costs 1 Bloodlust per minute.",
      proficiencies: [
        [],[],[],
        [
          "Nullify: As a Free Action, whenever a creature within 10 ft attempts to use a Gift, you may spend 1 Bloodlust to prevent the attempt. The creature must roll a d20 + Will vs [10 + G] to resist this effect.",
          "Unravel: Whenever a creature, object, or an Engraving upon an object created by a Gift enters the dark energy of the Shroud and you are aware of it, you may spend 1 Bloodlust as a Free Action to destroy it.",
          "Persistent: The effect lasts 1 hour, and is immune to any Gifts or effects that attempt to remove it or prevent the initial use of this Gift, including another Shroud. No longer costs Bloodlust per minute."
        ],
        [
          "Reach: Increase the range the energy radiates to 30 ft.",
          "Unmaker: The Unravel effect no longer costs Bloodlust and you may choose to make the effect happen automatically without your awareness.",
          "Terror: [Action] As an Action creatures within the dark energy of the Shroud which are 1 or more G below you are Feared until they exit the Shroud and must move away from you."
        ],
        [
          "Immunity: [Activate] Spend your Activation Action at the initial casting of Shroud. During this Shroud effect, any Gift that targets you or anywhere within the dark energy of the Shroud fails.",
          "Suppression: [Activate] Spend your Activation Action at the initial casting of Shroud. During this Shroud effect, Nullify may be used on any creature within the dark energy of the Shroud and no longer costs Bloodlust."
        ]
      ]
    }    
  ]// 4G
]
// {
//   name: "",
//   attributes: "",
//   description: "",
//   proficiencies: [

//   ]
// }