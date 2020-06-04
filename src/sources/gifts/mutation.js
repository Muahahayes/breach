export default [
  [// 1G
    {
      name: "Harden",
      attributes: "[React] [Self]",
      description: "Your skin can flex and morph to become a hard like armor. When you receive damage, you may reduce the damage taken by an amount equal to your current Strain. Afterwards, causes G Strain. May only be used while Blocking and may only be used twice per day. Regain a use after taking a Break, or regain all uses after a Full Sleep.",
      proficiencies: [
        [
          "Calloused: Reduce the damage taken by an additional amount equal to G.",
          "Frequency: Increase the number of times you may use this per day by 1. (Repeatable up to 4)"
        ],
        [
          "Spines: [Activate] If you use Harden against a melee attack, deal 1d4 piercing damage to the attacker.",
          "Calloused: Increase the number of uses regained after taking a Break to 2."
        ],
        [
          "Reactive Skin: You may use Harden while not Blocking.",
          "Quills: Increase the size of the Spines or Quill Spray die, causes G Strain per size increase. (Repeatable d6, d8, d10)"
        ],
        [
          "Quill Spray: [Activate] When you use Harden, you may release a spray of quills around. Every creature within 10ft must roll an Agility check vs your current Strain, you deal 1d4 piercing damage to any Soft Fail and an additional G damage to any Hard Fail."
        ],
        [
          "Armored Skin: [Passive] While Blocking, increase your Avoidance by 2.",
          "Adaptive Flesh: [Activate] When you use Harden, you may become Resistant to the type of damage you received (after applying this damage to your Survival). This lasts until you lose 1 Life or you use Adaptive Flesh again."
        ]
      ]
    },
    {
      name: "Dermal Markings",
      attributes: "[Action] [Self]",
      description: "Roll a Disruption check. All enemies that can See you must roll an Insight check vs your Disruption. Any that fail are Taunted for 1 turn. Causes G Strain. On a natural 1 for the Disruption check the Strain is doubled.",
      proficiencies: [
        [
          "Infuriate: On an enemy's Hard Fail the effect lasts an additional turn.",
          "Stripes: You may, instead of its normal effect, subtract G from attack rolls against you for 1 turn.",
          "Camouflage: You may, instead of its normal effect, add G to Hide checks for 10min."
        ],
        [
          "Instinct: On creatures with a Will less than ½ G, the effect lasts G turns."
        ],
        [
          "Fluorescent: Raises the surroundings to Low Lighting, up to 10min.",
          "Distracting: [Activate] Subtract G from any attack rolls against allies in melee range for 1 turn."
        ],
        [
          "Primal: [Activate] The Instinct effect now lasts until they lose awareness of you for as long as you spend your Activation Action each turn. They may roll an Insight check vs your original Disruption roll on each turn to end the effect."
        ]
      ]
    },
    {
      name: "Retractable Claws",
      attributes: "[Passive]",
      description: "You can extend 3 inch claws from your fingers or toes at will. These claws are durable and if broken can be regrown. Your unarmed melee attack now deals 1d6 sharp damage.",
      proficiencies: [
        [
          "Chiseling: You can use your claws to carve basic shapes into rock or softer materials, gain +G to Art checks involving Stonecrafting or Pottery. Additionally your Athletics checks gain +G if you are climbing.",
          "Elongate: You can extend the claws up to 6 inches."
        ],
        [
          "Barbed: You gain +G to attempts to Grapple or maintain a Grapple.",
          "Precision: Add +G to your unarmed melee attack damage."
        ],
        [
          "Sharpened: Your unarmed melee attack now deals 1d8 sharp damage.",
          "Poisoned: [Activate] Your unarmed melee attack now may apply a Poison if it naturally rolls 15+ on its attack and hits. This Poison deals 1d4 nature damage per turn, afterwards if the enemy rolls d20+Stamina above {10 + G} the Poison effect ends."
        ],
        [
          "Razors: Your unarmed melee attack now deals 1d10 sharp damage.",
          "Ethereal: [Activate] As an Activation Action, you may deal Spirit damage instead of Sharp with your unarmed melee attack."
        ]
      ]
    },
    {
      name: "Budding",
      attributes: "[Action] [Melee]",
      description: "You have ten flowers budding on your skin. You may have one burst and shower a creature (not yourself) in melee range with parasitic pollen which clings onto their skin. Whenever you fully sleep or take a break while eating a full meal you regain all flowers, choose 1 color of flower and if they all heal or deal damage. The flowers do the effect chosen on creatures the pollen touches for 1d6 healing/damage. Causes G Strain to burst a flower.",
      proficiencies: [
        [
          "Empowered: Add your Will to the amount healed.",
          "Passion: Add your Will to the amount damaged.",
	        "Perennial: When you switch flowers, you may keep up to G flowers from the previous budding.",
	        "Garden: You may bud up to G more flowers."
        ],
        [
          "Bloom: You may burst a second flower which affects a secondary target. Causes G Strain.",
	        "Bountiful: Increase the healing or damage to 1d8 (take again for the other choice), may attract pollinating insects such as bees more frequently.",
	        "Hyper-allergenic: Causes sneezing/allergy responses. Unfavored -1 to the victim's attack rolls for 1 turn."
        ],
        [
          "Poisonous: [Activate] Your pollen's damage may apply a Poison if it naturally rolls 15+ on its attack and hits. This Poison deals 1d4 nature damage per turn, afterwards if the enemy rolls d20+Stamina above {10 + G} the Poison effect ends.",
	        "Blossom: [Activate] The pollen grows into small flowers on the target after healing them, healing an additional 1d4 on each of your turns for G turns."
        ],
        [
          "Bouquet: Your flowers take on a multitude of colors at once, and you can choose to heal or damage at the moment of bursting on an individual flower basis.",
          "Puff: Bloom may burst a third flower which affects a tertiary target. Causes additional G Strain.",
          "Meadow: Garden may bud up to G more flowers."
        ],
        [
          "Deep Roots: Your Blossom effect lasts G more turns, and your pollen healing is increased to 1d10."
        ]
      ]
    },
    {
      name: "Transfusion",
      attributes: "[Action] [Melee]",
      description: "You reach out and touch a creature. You inject them with a spine from your wrist, transferring some small portion of your blood into their system, healing them for 1d8. Causes G Strain.",
      proficiencies: [
        [
          "Empowered: Add your Will to the amount healed.",
          "Heated: [Activate] Your blood is now a higher temperature. You feel warm to the touch, you take -G cold damage, and the Climate affects you as if the temperature was 10°F warmer. Additionally, your Transfusion target may gain G Bloodlust when healed. Cannot take with Cold-Blooded."
        ],
        [
          "Rejection: You may inject a malignant portion of blood. The victim's system rejects this blood, taking 1d8 nature damage instead of healing. Additionally, they lose G Bloodlust after this damage.",
	        "Cold-Blooded: [Activate] Your blood now relies on the temperature around you, and tends to be colder. You take -G fire damage and the Climate affects you as if the temperature was 10°F colder. Additionally, your Transfusion target may ignore their next Psychic Fatigue check. Cannot take with Heated."
        ],
        [
          "Potency: Increases the amount healed to 1d10.",
          "Gifted: Add G to the amount healed.",
          "Purity: Instead of healing, may cure the target of any Poison effects."
        ],
        [
          "Cleanse: Instead of healing, may cure the target of any Cursed Poison effects.",
	        "Healing: Increases the amount healed to 2d6. Requires Potency."
        ],
        [
          "Renew: [Activate] Increases the amount healed to 2d8. Healing from Transfusion may trigger the Purity or Cleanse effect if you have them, using your Activation Action. Requires Healing.",
	        "T-Cells: May substitute rolling the healing dice with the current amount of Strain you have."
        ]
      ]
    }
  ], // 1G
  [ // 2G
    {
      name: "Tight Reflexes",
      attributes: "[React] [Self]",
      description: "When attacked by a melee or ranged weapon attack you may Dodge, reducing their attack roll by G. Causes G Strain.",
      proficiencies: [
        [],[],
        [
          "Reactive: You may perform a second React Action per Round."
        ],
        [],
        [
          "Proactive: [Activate] As an Activation Action you may perform a second Action in a turn. Cannot be used with any Action that does not cause Strain, and causes double the usual Strain. Usable G times per day.",
          "Evasive: [Passive] Increase your Avoidance by 1."
        ]
      ]
    },
    {
      name: "Shapeshift",
      attributes: "[Action] [Self]",
      description: "You may take on the form and appearance of any creature who you have touched and is equal or lesser G than yourself. While in this form your Strength, Agility and Stamina stats match the values of the creature's stats, you can use [1 G] Powers as an additional Activation Action and you gain any Passive physical traits of the creature. When you have lost Life equal to your G during your transformation, or as an Action on your turn voluntarily, you immediately revert to your normal form, negate any remaining damage received, set your Strain to ½ your max Survival, and reset your Survival to its full value. Usable once per Full Sleep.",
      proficiencies: [
        [],
        [
          "Malleable: You may use Shapeshift one more time per Full Sleep."
        ],
        [
          "Feral: In the form of creatures with a Will below 1, add your G to all unarmed attack damage.",
          "Gifted: You may use Powers up to [2 G] while Shapeshifted.",
          "Up Leveled: You may take on the form of creatures 1 G above yourself."
        ],
        [
          "Resize: [Action] You may, as a Full Action, change the size of your form by 1 Size.",
          "Relaxed: Set your Strain to ¼ your max Survival when you revert to your normal form.",
          "Reform: [React] You may revert to your normal form as a React Action."
        ],
        [
          "Effortless: You may take on the form of creatures 2 G above yourself and use Powers up to [3 G] while Shapeshifted. Requires Up Leveled and Gifted."
        ]
      ]
    },
    {
      name: "Seedling",
      attributes: "[Action] [Pet]",
      description: "You release a seed onto the ground which sprouts into a Tiny sized Plant Creature. The Seedling is completely under your control and has a Movement and Full Action, the Seedling has small limbs for movement but no limbs for interacting with objects or creatures. The Seedling has 1 Life, 2G Survival, 10 ft of movement, 2 Strength, 1 Agility, 2 Stamina, and 0 Will. The Seedling cannot be controlled by another person unless they control you. One Seedling may exist at a time. Lasts 10 minutes. Cannot be taken with the Broodling Power. Causes G Strain.",
      proficiencies: [
        [],
        [
          "Bark: The Seedling increases its Survival to 5G.",
          "Vines: The Seedling grows vines which can hold items (up to 20lb) and Grapple creatures, deals 1d4 crushing damage on a success. Can Grapple one creature at a time, uses their Full Action. Add G to its Grapple check."
        ],
        [
          "Roots: May Snare while successfully Grappling a creature.",
          "Barbs: May attack as a Full Action, dealing 1d6 Sharp damage. Adds your G to its attack rolls.",
          "Hardy: Lasts up to 1 hour.",
          "In Season: You may have 2 more Seedlings at one time. This Power only produces 1 per action."
        ],
        [
          "Enlarge: The Seedlings are now Medium size, have +2 Life, and Barbs deals 1d8 damage.",
	        "Creep: The Seedling's movement is increased to 20 ft.",
	        "Full Bloom: The base Strength, Stamina, or Agility of the Seedling will equal your current G. (Select one stat per repeated Proficiency)",
	        "Budding: [Activate] On their second turn being alive, your Seedlings may produce a new Seedling which copies all of its Powers, Stats, and Proficiencies except for the Budding proficiency. Uses their Full Action and your Activation Action. These extra Seedlings do not count towards your limit of active Seedlings."
        ],
        [
          "Garden: You may have 2 more Seedlings at one time. This Power may produce 2 per action.",
	        "Entangle: Seedlings add an additional G to their Grapple check and Vines deals 1d6 damage."
        ]
      ]
    }
  ], // 2G
  [ // 3G
    {
      name: "Runic Evolution",
      attributes: "[Activate] [Self] [Passive]",
      description: "Your DNA forms a runic word, your body has evolved to use it but cannot Awaken any other runes. Choose 1 Gift from the Runic Arts Source, that is now a Mutant Power you may use. Gain G Strain for each point of Fade the Gift gains. Using this Power uses your Activation Action in addition to the Action requirements of the selected Power.",
      proficiencies: []
    },
    {
      name: "Flurry",
      attributes: "[Action] [Melee]",
      description: "After performing a basic attack action, perform a basic attack action on the same target. Causes Strain equal to 10% of your max survival (rounded down, minimum of 1).",
      proficiencies: [
        [],[],
        [
          "Effortless: You may use Flurry without causing Strain once per day.",
          "Strained: You may use Flurry after any other Mutation that causes damage and causes Strain.",
          "Momentum: If the Flurry attack hits, perform another attack on the same target.",
          "Cleave: Flurry may be used on any target that is within melee range."
        ],
        [
          "Juggernaut: If Momentum's attack hits, perform another attack on the same target.",
          "Sweep: Momentum may be used on any target that is within melee range.",
          "Swing Through: [Activate] If Flurry deals a killing blow, you may use it again on a target in melee range without causing any further Strain, do not trigger Momentum until the Swing Through(s) are finished. Only the first Swing Through uses your Activation Action."
        ],
        [
          "Overwhelm: [Activate] If Flurry deals a killing blow, you may perform a Mutation that causes Strain. This may only trigger once per turn."
        ]        
      ]
    }
  ], // 3G
  [ // 4G

  ], // 4G
  [ // 5G
    {
      name: "Phagogenesis",
      attributes: "[Action] [Melee]",
      description: "Eat the brain of a target person. If they have the Mutation Source and have died within the last 1 hour, you absorb some of their DNA. Pets you produce gain 1 Power (one choice shared across all active pets) from any person whose DNA you have absorbed. The Power has no Proficiencies and can only be up to [2 G] in requirement and may not produce Pets, minions or other creatures. You can only contain 1 person's DNA at one time. You can only store 1 new person per day. The act is seen as disturbing, immoral, or even unforgivable by some cultures.",
      proficiencies: [
        [],[],[],[],
        [
          "RNA: You can have 1 Proficiency active on the Power, this Proficiency can only be up to [3 G] in requirement.",
          "Memory: You can store a second person's DNA."
        ],
        [
          "Evolved: Your pets can use a Power up to [4 G], and RNA may be a Proficiency up to [5 G] in requirement.",
          "Bank: You can store a third person's DNA, requires Memory."
        ],
        [
          "Complex: Your Pets may have a second Power up to [2 G], RNA may apply to this second Power."
        ]
      ]
    }
  ] // 5G
]
// {
//   name: "",
//   attributes: "",
//   description: "",
//   proficiencies: [
    
//   ]
// }