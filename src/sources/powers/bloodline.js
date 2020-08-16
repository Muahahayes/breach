export default [
  [ // LVL 1
    {
      name: "Vampirism",
      attributes: "[Self] [Passive]",
      description: "At, and only at, LVL 1 you may select this Power. Gain the Bloodthirst and Darkflight Powers. Upon reaching level 2 you also gain the Hemotremor Power. Take 2d4 fire damage if you are touched by sunlight, this can only occur once every 10 minutes but if you remain in the sunlight you feel incredibly uncomfortable and begin to blister. You are pale and feel cold to the touch. You do not age. Each time you use Bloodthirst on a living creature you gain 1 FP, you gain no benefits from food and cannot gain FP otherwise. You gain the Hunger proficiency on your Bloodthirst for free.",
      proficiencies: [
        [],[],
        [
          "Warmth: You may appear darker skin tones. You feel like a normal temperature to the touch."
        ],
        [
          "UV Resistance: You may spend 1 hour a day in direct sunlight before you begin to take damage.",
          "Metabolism: You may eat raw meat or bone marrow to satisfy your hunger."
        ]
      ]
    },
    {
      name: "Withered",
      attributes: "[Self] [Passive]",
      description: "At, and only at, LVL 1 you may select this Power. Gain the Fade and either Shadow Bolt or Dark Shot Powers. Upon reaching level 2 you also gain either the Hex or Malfeasance Power. Your Strength and Stamina may not be increased past your starting values by any means. Your body appears frail and sickly, your beauty fades and onlookers feel a mixture of pity, disgust and discomfort. You have a lower tolerance for physical pain. At will on your turn you may damage yourself by any number up to your current Survival and gain that many Bloodlust.",
      proficiencies: [
        [],
        [
          "Glass Skin: Your skin becomes thin and prone to cuts but your blood courses with power beneath the surface. You become pale with a red hue near major blood vessels. You take +LVL Sharp damage. Add your level to all damage dealt by a Power."
        ],
        [
          "Hardy: Increase your Max Survival by 3.",
          "Gaunt: Lose 20 lb of body weight and 1 Strength. Gain 1 Will and increase its maximum by 1."
        ],
        [
          "Waif: You no longer require food or water. You longer sleep, you gain the benefit of a Full Sleep if you lay down or sit for 6 hours and make minimal movement. You are immune to Sleep and Unconscious effects."
        ]
      ]
    },
    {
      name: "Rampage",
      attributes: "[Action] [Self]",
      description: "Your blood boils with rage throwing you into a violent Rampage. Spend up to 5 Bloodlust to enter a Rampage for that many turns. During a Rampage you are immune to to Sleep, Unconscious, Stun, Fear, and Immobilize effects. Your Rampage ends early if you enter Apathy. A turn counts as 2 towards the duration if you do not deal any damage to a creature during that turn.",
      proficiencies: [
        [
          "Duration: Increase the maximum turns, and maximum cost, by 2. (Repeatable)",
	        "Numb: [Activate] Use your Activation Action when beginning your Rampage, when you take physical damage during this Rampage, you may spend 1 Bloodlust to subtract LVL * d4 from the damage taken.",
	        "Rage: [Activate] Use your Activation Action when beginning your Rampage, when you land a hit that deals damage to a creature during this Rampage, you may spend 1 Bloodlust to add LVL * d4 damage."
        ],
        [
          "Protection: During Rampage, subtract 6 from an Injury Severity roll after seeing the result (to a minimum of 1), usable once per Full Sleep. ",
          "Hyper: Add your level to your Speed rolls during Rampage.",
          "Overpower: [Activate] As an Activation Action during your Rampage before making an attack, gain a Favored +1 to that attack roll. The next attack against you gains a Favored +1."
        ],
        [
          "Roar: When beginning your Rampage, you may Roar to attempt to Taunt every hostile creature within 30 ft of you. Roll a d20 + Disruption, each creature rolls d20 + Will to contest your roll, any that fail are Taunted for 1 turn.",
          "Frenzy: During the Rampage, you may drop below 1 Life without experiencing any of the effects of Dying. If you are still below 1 Life at the end of your Rampage you immediately fall prone and begin Dying."
        ],
        [
          "Sturdy: During a Rampage with Numb active, you may use Protection once per Full Sleep without referring to or counting towards your limit."
        ]
      ]
    },
    {
      name: "Bloodthirst",
      attributes: "[Action] [Melee]",
      description: "As an Action, on touch you attempt to pierce a creature with your teeth or fingers, dealing 1d8 Sharp damage (you may add Strength or Agility's Primary benefit to this damage). Costs 1 Bloodlust.",
      proficiencies: [
        [
          "Fury: On a hit, gain an additional Bloodlust.",
          "Thirst: [Activate] On a hit, as an Activation Action heal Survival equal to your level.",
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
          "Feed: Thirst gains more Survival and deals additional damage equal to your level."
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
      description: "As an Action you channel darkness into your weapon and perform a basic melee attack. Add a d4 for each point of Will you possess to the damage of the attack. Costs 2 Bloodlust.",
      proficiencies: [
        [
          "Fury: On a Hard Success on the basic melee attack, gain an additional Bloodlust."
        ],
        [
          "Confirm: You may choose to apply Sanguine Strike after a basic melee attack has been determined to hit, but before discovering if it is a Soft or Hard Success.",
          "Impact: Increase the size of Sanguine Strike's dice to a d6.",
          "Energized: The damage added by Sanguine Strike is now Darkness damage.",
          "Martial Expertise: Permanently add 1 to your Martial Arms Skill and increase its maximum by 1."
        ],
        [
          "Hellfire: Your weapon alights in flame as it strikes, the creature must roll a Stamina Save. On a fail they are Burned, dealing 1d6 Fire damage over 2 turns. On a Hard Fail the Burn deals 1d8 damage over 3 turns instead.",
          "Quirked: When using a Quirk on this attack, increase the size of Sanguine Strike's dice to a d10. Requires Impact.",
          "Penetration: This attack ignores the target's Aegis."
        ],
        [
          "Greater Impact: Increase the size of Sanguine Strike's dice to a d8. Increase the effect of Quirked to a d12. Requires Impact.",
          "Cleave: [Activate] If a creature dies from this attack, you may spend an Activation Action to roll an Attack roll against another creature within reach. On a Soft Success, deal half this attack's damage to that creature. On a Hard Success, deal full damage.",
          "Deadly Expertise: Permanently add 1 to your Martial Arms Skill and increase its maximum by 1."
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
          "Corporeal: The wings persist for a number of additional rounds equal to your level, allowing you to leap again during your Movement.",
          "Gust: After jumping while Darkflight is active, you may push creatures within 10ft of where you started your jump and/or where you land up to 10ft away."
        ],
        [
          "Dive: [Activate] If you land on top of a creature after leaping at least half your maximum movement distance you may make a basic Melee attack as an Activation Action. Costs 1 Bloodlust."
        ],
        [
          "Shadowflight: While Darkflight is active, as a Full Action, if you are standing out of direct light you may disappear and reappear in another location out of direct light within your maximum movement."
        ]
      ]
    },
    {
      name: "Dark Shot",
      attributes: "[Action] [Ranged]",
      description: "Use a Ranged Weapon to make a basic Ranged Weapon attack. Add 1d4 Darkness damage to the attack. Costs 1 Bloodlust.",
      proficiencies: [
        [
          "Sharp Aim: Permanently add 1 to your Marksmanship Skill and increase its maximum by 1.",
          "Twin Shot: If Dark Shot hits, you may make a basic Ranged Weapon attack on the same target for free."
        ],
        [
          "Impact: Increase the damage die to 1d6.",
          "Fork: Your Twin Shot may be used on any target within range.",
          "Focused: [Action] As an Action, you may focus more power into your shot. Roll each base damage die of your Ranged Weapon twice when adding up your damage dealt."
        ],
        [
          "Deadly Aim: Permanently add 1 to your Marksmanship Skill and increase its maximum by 1.",
          "Dark Twin: You may spend Bloodlust to use Dark Shot with your Twin Shot attack."
        ],
        [
          "Overwhelm: [Activate] If your Dark Shot deals a killing blow you may use any Power which costs Bloodlust. This may only trigger once per turn.",
          "Piercing Shot: [Action] As an Action, you may attempt to apply the Sundered effect to the victim hit. They must roll a Stamina Save to resist the effect.",
          "Greater Impact: Increase the damage die to 1d8."
        ]
      ]
    },
    {
      name: "Gaze",
      attributes: "[Action] [Ranged]",
      description: "You stare into a creature's eyes and assault their mind with dark energy. They must roll a Will Save to withstand the effect. On a Fail they experience intense horror for as long as they look at you, and for 1 turn after looking away they are Feared. Has no effect on creature's of a higher level than you. Costs 1 Bloodlust.",
      proficiencies: [
        [
          //TODO
        ]
      ]
    },
    {
      name: "Shadow Bolt",
      attributes: "[Action] [Ranged]",
      description: "Point at a creature or object you can see within 30ft. A streak of silent shadow leaps from your hand and strikes the target dealing 1d6 Darkness damage. Costs 1 Bloodlust.",
      proficiencies: [
        [
          "Shadowmark: When your Shadow Bolt hits a creature, you may give that creature a Shadowmark. Shadowmark adds a 1d4 to the next Darkness damage roll against the creature and then is removed. Lasts 1 minute. A creature may only have 1 Shadowmark at a time."
        ],
        [
          "Impact: Increase the damage dealt to 1d8.",
          "Fork: Every creature within 10ft of the target must roll a Will Save. On a Fail they receive a Shadowmark. Requires Shadowmark.",
          "Focused: [Action] As an Action, you may focus more power into your Shadow Bolt. Roll each damage die twice (including Shadowmark dice)."
        ],
        [
          "Linger: Shadowmark may be used twice before being removed. Only one Shadowmark may be active on a creature at a time, but attempting to apply a second Shadowmark resets the number of uses available.",
          "Reach: Increase the range to 50ft.",
          "Greater Impact: Increase the damage dealt to 1d10.",
          "Greater Shadowmark: Increase the damage of Shadowmark to 1d6. You may add your Will to this damage if you have the Will Primary benefit."
        ],
        [
          "Magnitude: Increase the damage dealt to 2d6.",
          "Greater Linger: Shadowmark may be used thrice before being removed."
        ]
      ]
    },
    {
      name: "Fade",
      attributes: "[Action] [Self]",
      description: "Your body becomes transparent and difficult to see. Gain a Favored +1 to Hide and Sneak checks. Lasts for 1 minute. Ends prematurely if you take damage or enter Apathy. Costs 1 Bloodlust.",
      proficiencies: [
        /* ideas:
            fully invisible (lv 3 maybe?)
            extend duration
            creatures forget location (requires invisible, lv4?)
            can reappear somewhere else and end the effect (like a blink)
            can remove existance awareness (lv5?)
        */
      ]
    }
  ], // LVL 1
  [// LVL 2
    {
      name: "Hemotremor",
      attributes: "[Action] [AOE]",
      description: "You release a wave of dark energy 30 ft around you. All creatures must roll a Will Save, any that fail take 1d4 Darkness damage. Costs 2 Bloodlust.",
      proficiencies: [
        [],
        [
          "Malignant: Add your level to the Severity roll of any Injury caused by Hemotremor's damage."
        ],//TODO more
        [
          "Impact: Increase the damage to 1d6."
        ]
      ]
    },
    {
      name: "Sillouete",
      attributes: "[Action] [Self]",
      description: "A shadowy form rises from your shadow. It stays attached to your shadow and your shadow is pulled around with it, but if your shadow disappears or the Sillouete is more than 30 ft away from you the Sillouete is destroyed. The Sillouete may spend 1 Bloodlust and 1 Full Action per turn to interact with an object, do a basic melee attack for 1d6 damage, or to use a melee or touch non-minion Power of [LVL 2] or lower without proficiency effects. Spend 2 Bloodlust to summon the Sillouete. If your Sillouete is destroyed it may not be summoned again until you take a Break or finish a Full Sleep.",
      proficiencies: [
        [],
        [
          "Shadow Link: When you take damage which does not reduce your Life, you may apply half the damage to your Sillouete instead. Your Sillouete is destroyed after it has taken damage equal to half your max Survival.",
          "Reach: Increase the range the Sillouete can go without being destroyed to 50 ft."
        ],
        [
          "Gifted: The Sillouete may use Powers up to [LVL 3].",
          "Impact: Increase the damage of the Sillouete's basic melee attack to 1d8."
        ]//TODO: more
      ]
    },
    {
      name: "Bind Daemon",
      attributes: "[Action] [Touch] [Minion]",
      description: "You reach out and touch the forehead of a creature which is at 1 Life or below, by speaking its name and spending 5 Bloodlust you bind it to your service as your Daemon. The creature may make a Will Save to resist the effect, on a success it is not bound and on a Hard Success it can never be bound by you using this Power against its will. The Daemon must make every effort to be within 1 mile of you, cannot directly cause you harm, and you may as an Action spend 1 Bloodlust per creature's level to force the Daemon to do any Action you choose (only if it is capable of carrying it out and will not cause direct harm to the Daemon). Any additional conditions the Daemon agrees to before the binding must also be obeyed. The Daemon comes to your side when called. This binding lasts until the Daemon is destroyed, you die, the terms of an agreement given before the binding, or you spend an hour releasing the binding. You may only have one binding at a time.",
      proficiencies: [
        [],[],
        [
          "Pressure: You may add your level to your Bind Daemon Will check.",
          "Pair: You may have a second binding active at one time. They both must be bound with the same set of conditions."
        ],
        [
          "Trio: You may have a third binding active at one time. Your Daemons may have different sets of conditions. Requires Pair.",
          "Domination: You gain Favored +2 in any opposing skill checks against one of your Daemon."
        ],
        [
          "Dark Gift: You may bestow each of your Daemons with a Power you possess up to [LVL 2] and not including Minion Powers.",
          "Company: You may have up to five bindings active at one time. Requires Trio."
        ],
        [
          "Crowd: You may have up to ten bindings active at one time. Requires Company.",
          "Greater Gift: You may bestow Powers up to [LVL 3]. Requires Dark Gift."
        ],
        [
          "Cult: You may have up to one hundred bindings active at one time. Requires Crowd.",
          "Patron: You may bestow Powers up to [LVL 4], including Bind Daemon."
        ]
      ]
    },
    {
      name: "Hex",
      attributes: "[Action] [Ranged]",
      description: "Point at a creature you can see within 30 ft. and make a Power attack against it. On a Success, apply a Hex Curse to the target. While Hexed, the creature receives an Unfavored -1 on Save rolls triggered by you. Only one Hex Curse may be active on a creature at a time.Lasts 1 Minute. Costs 2 Bloodlust.",
      proficiencies: [
        [],
        [
          "Vulnerable: Increase all Injury severity rolls made by the creature by 1.",
          "Weaken: Temporarily reduce the creature's Power Skill by your level."
        ],
        [
          "Recoil: [React] If the creature deals damage to you, as a Reaction Action you may Fear them for 1 round.",
          "Hinderance: The creature is Slowed -2.",
          "Lingering: Increase the duration to 1 hour."
        ],
        [
          "Malnourish: Instead of its usual effect, Hex lasts indefinitely and shortens the creature's hunger and thirst periods by 1 day. Once per day the creature may attempt a Will Save to end the effect.",
          "Choke: Malnourish also Silences the creature."
        ],
        [
          "Inescapable: Malnourish's effect does not end on a Soft Success."
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
        ],
        [
          "Infusion: [Action] You may spend an hour to use a Soul Fragment to reinfuse an inert Lesser Chaos Gem to create a Lesser Soul Gem. To do so, you must use a Soul Fragment from a creature of at least level 3 and who had a Will of at least 3. Soul Gems may often be used in place of a Chaos Gem. Costs 5 Bloodlust."
        ],
        [
          "Moderate Infusion: Infusion may be used to reinfuse a Moderate Chaos Gem to create a Moderate Soul Gem. To do so, you must use a Soul Fragment from a creature of at least level 4 and who had a Will of at least 5. Requires Infusion."
        ],
        [
          "Greater Infusion: Infusion may be used to reinfuse a Greater Chaos Gem to create a Greater Soul Gem. To do so, you must use a Soul Fragment from a creature of at least level 5 and who had a Will of at least 7. Requires Moderate Infusion."
        ],
        [
          "Epic Infusion: Infusion may be used to reinfuse an Epic Chaos Gem to create an Epic Soul Gem. To do so, you must use a Soul Fragment from a creature of at least level 7 and who had a Will of at least 10. Requires Greater Infusion."
        ]
      ]
    },
    {
      name: "Malfeasance",
      attributes: "[Action] [Ranged]",
      description: "Point at a creature you can see within 30 ft. and make a Power attack against it. On a Success, deal 1d4 Darkness damage. On a Hard Success apply a Malfeasance Curse to the creature, this Curse lasts for 1 Minute. Only one Malfeasance Curse may be active on a creature at a time. Costs 2 Bloodlust.",
      proficiencies: [
        [],
        [
          "Rend: The Curse subtracts this Power's damage dealt from any healing the creature receives.",
          "Subdue: The Curse gives the creature's basic attack rolls against you an Unfavored -1 penalty.",
          "Vulnerable: Increase all Injury severity rolls made by the creature by 1."
        ],
        [
          "Insistant: Apply the Curse on a Soft Success as well.",
          "Harass: [Activate] The Curse grants you a Favored +1 to Attack and Power rolls against the creature.",
          "Assault: [Activate] The Curse increases damage you deal to the creature by your level."
        ],
        [
          "Anger: Instead of its usual effect, Malfeasance lasts indefinitely and causes the creature to have a shorter temper and feel victimized by others more easily. Once per day the creature may attempt a Will Save to end the effect.",
          "Wander: Anger also causes the creature to feel a strong need to travel at least 5 miles a day and not return to the same location twice."
        ],
        [
          "Inescapable: Anger's effect does not end on a Soft Success."
        ]
      ]
    }
  ],// LVL 2
  [// LVL 3
    {
      name: "Ancestral Telepathy",
      attributes: "[Activate] [Self] [Passive]",
      description: "At the time you take this Power, choose 1 Power from the Psychic Source which is of [LVL 3] or below, this is now an Ancient Bloodlines Power you may use. If it causes a Psychic Fatigue check, it instead costs 2 Bloodlust. Using this Power uses your Activation Action in addition to the Action requirements of the selected Power.",
      proficiencies: []
    },
    {
      name: "Homunculus",
      attributes: "[Action] [Touch] [Minion]",
      description: "You spend a Full Action, 5 Bloodlust and 1 hour to touch approximately 1 human body's weight in blood, meat, and bone. You create a Homunculus, a crude creature that visually looks like yourself. The Homunculus has 1 Life, 5 Survival, your own Strength and Agility scores from when you were level 1, 1 Stamina, and 0 Will. It is considered level 1. The Homunculus takes basic commands, but cannot speak or write, and lasts until it or you are killed. You must spend a Full Action to command the Homunculus to use either a Full Action or Movement Action during comabt, but it may be told to repeat that Action until commanded again. You may only have 1 Homunculus at one time.",
      proficiencies: [
        [],[],
        [
          "Mimicry: The Homunculus may speak any language you know. It needs specific directions on what to say but may be taught to say certain responses to certain stimuli (Such as \"Homunculus, say hello if someone greets you\")."
        ],
        [
          "Dark Gift: The Homunculus gains a Power you had at level 1. You must spend an Action to command it to use the Power in combat.",
          "Sturdy: The Homunculus gains 1 Life and 5 Survival.",
          "Physique: The Homunculus now has your current Strength and Agility scores."
        ],
        [
          "Greater Gift: The Homunculus gains a Power you had at up to level 3 not including Minion Powers. Requires Dark Gift",
          "Intelligence: The Homunculus gains 2 Will. It may start to make decisions for itself and act without direct commands.",
          "Tough: The Homunculus gains 2 Life. Requires Sturdy."
        ],
        [
          "Clone: The Homunculus now has your Strength, Agility, Stamina, Will, Life and Survival scores. It can think and act for itself. It possesses all Powers you possessed before you reached level 6, excluding Minion Powers. Requires Mimicry, Greater Gift, Tough, Intelligence, and Physique."
        ]
      ]
    },
    {
      name: "Miasma",
      attributes: "[Action] [AOE] [Melee]",
      description: "As an Action you release a cloud of poisonous gas from your body, which floats in place and takes up an area with a radius of 10 ft. Any creature other than yourself that is within the cloud must roll a Stamina Save each turn they are within the cloud. On a Fail they take 2d8 Nature damage, on a Hard Fail they are also Poisoned for an additional 2d4 Nature damage for 3 turns with a difficulty of [10 + Power].",
      proficiencies: [
        [],[],
        [
          //TODO
        ]
      ]
    },
    {
      name: "Wraith",
      attributes: "[Action] [Minion]",
      description: "You empower a Soul Fragment with dark energy and release it into the world. A Wraith is created at a point you can see within 10 ft of you. This Wraith obeys your commands and will attack any creature it sees which has intent to do physical harm to you. The Wraith fades from this world after 10 minutes. You may only summon 1 Wraith at a time. Costs 2 Bloodlust.",
      proficiencies: [
        //TODO
      ]
    }
  ],// LVL 3
  [// LVL 4
    {
      name: "Shroud",
      attributes: "[Action] [AoE] [Self]",
      description: "A dark energy radiates from your body and extends for 10 ft. The energy persists for up to 10 minutes and during that time creatures within the energy add your level to their Hide checks. While the energy radiates, any creature other than yourself within the energy cannot use their Activation Action. The effect ends prematurely if you enter Apathy. Costs 1 Bloodlust per minute.",
      proficiencies: [
        [],[],[],
        [
          "Nullify: As a Free Action, whenever a creature within 10 ft attempts to use a Power, you may spend 1 Bloodlust to prevent the attempt. The creature must roll a Will Save to resist this effect.",
          "Unravel: Whenever a creature, object, or an Engraving upon an object created by a Power enters the dark energy of the Shroud and you are aware of it, you may spend 1 Bloodlust as a Free Action to destroy it.",
          "Persistent: The effect lasts 1 hour, and is immune to any Powers or effects that attempt to remove it or prevent the initial use of this Power, including another Shroud. No longer costs Bloodlust per minute."
        ],
        [
          "Reach: Increase the range the energy radiates to 30 ft.",
          "Unmaker: The Unravel effect no longer costs Bloodlust and you may choose to make the effect happen automatically without your awareness.",
          "Terror: [Action] As an Action creatures within the dark energy of the Shroud which are 1 level or more below you are Feared until they exit the Shroud and must move away from you."
        ],
        [
          "Immunity: [Activate] Spend your Activation Action at the initial casting of Shroud. During this Shroud effect, any Power that targets you or anywhere within the dark energy of the Shroud fails.",
          "Suppression: [Activate] Spend your Activation Action at the initial casting of Shroud. During this Shroud effect, Nullify may be used on any creature within the dark energy of the Shroud and no longer costs Bloodlust."
        ]
      ]
    },
    {
      name: "Spirit Guise",
      attributes: "[Action] [Self]",
      description: "You consume a Soul Fragment from a humanoid creature to take on their form. For 1 day you have their appearance, voice, and any passive physical attributes of the creature including their Strength, Agility and Stamina. You may perform an Insight check vs [15 + Will] of the creature to remember vague details about their life. Costs 3 Bloodlust.",
      proficiencies: [
        //TODO
      ]
    }    
  ]// LVL 4
]
// {
//   name: "",
//   attributes: "",
//   description: "",
//   proficiencies: [

//   ]
// }