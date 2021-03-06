export default [
  [// LVL 1
    {
      name: "Harden",
      attributes: "[React] [Self]",
      description: "On Reaction from being hit, your body is infused with power and shifts to better embody your ideals. For more nature oriented faiths it may appear like hard scales or bark, and for more divine oriented faiths is may appear to gain angelic armor. When you receive damage, you may reduce the damage taken by an amount equal to your current Strain. Afterwards, causes 2 Strain. May only be used while Blocking and may only be used twice per Full Sleep. Regain a use after taking a Break, or regain all uses after a Full Sleep.",
      proficiencies: [
        [
          "Calloused: Reduce the damage taken by an additional amount equal to your level.",
          "Frequency: Increase the number of times you may use this per Full Sleep by 2.",
          "Spines: [Activate] If you use Harden against a melee attack, you may deal 1d4 sharp damage to the attacker. This causes 1 Strain.",
          "Calloused: Increase the number of uses regained after taking a Break to 2."
        ],
        [
          "Reactive Skin: You may use Harden while not Blocking.",
          "Quills: Increase the size of the Spines and Quill Spray dice. (Repeatable d6, d8, d10)",
          "Quill Spray: [Activate] When you use Harden, you may release a spray of quills around. Every creature within 10ft must roll an Agility check vs your current Strain, you deal 1d4 sharp damage to any Soft Fail and additional damage equal to your level to any Hard Fail. This causes 2 Strain. Requires Spines."
        ],
        [
          "Shield of Faith: [Passive] While Blocking at any time, increase your Armor by 4.",
          "Adaptive Flesh: [Activate] When you use Harden you may become Resistant to the type of damage you received, unless this damage would bring you to 0 Survival. This lasts until you lose at least 1 Life or you use Adaptive Flesh again."
        ]
      ]
    },
    {
      name: "Inciting Visage",
      attributes: "[Action] [Self]",
      description: "You call upon your faith to display your power upon your body. Roll a Disruption check. All enemies that can See you must roll an Insight check vs your Disruption. Any that fail are Taunted for 1 turn. Causes 1 Strain. On a natural 1 for the Disruption check the Strain is doubled.",
      proficiencies: [
        [
          "Infuriate: On an enemy's Hard Fail the effect lasts an additional turn.",
          "Stripes: You may, instead of its normal effect, subtract LVL from attack rolls against you for 1 turn.",
          "Camouflage: You may, instead of its normal effect, add LVL to Hide checks for 10min.",
          "Instinct: On creatures with a Will less than ½ your level, the effect lasts a number of turns equal to your level."
        ],
        [
          "Fluorescent: Raises the surroundings to Low Lighting, up to 10min.",
          "Distracting: [Activate] Subtract LVL from any attack rolls against allies in melee range for 1 turn.",
          "Primal: [Activate] The Instinct effect now lasts until they lose awareness of you for as long as you spend your Activation Action each turn. They may roll an Insight check vs your original Disruption roll on each turn to end the effect."
        ]
      ]
    },
    {
      name: "Retractable Claws",
      attributes: "[Passive]",
      description: "You call upon your inner beast to extend 3 inch claws from your fingers or toes at will. These claws are durable and if broken can be regrown. Your unarmed melee attack now deals 1d6 sharp damage.",
      proficiencies: [
        [
          "Chiseling: You can use your claws to carve basic shapes into rock or softer materials, add your level to Art checks involving Stonecrafting or Pottery. Additionally add your level to your Athletics checks if you are climbing.",
          "Elongate: You can extend the claws up to 6 inches.",
          "Barbed: You add your level to attempts to Grapple or maintain a Grapple.",
          "Precision: Add your level to your unarmed melee attack damage."
        ],
        [
          "Sharpened: Your unarmed melee attack now deals 1d8 sharp damage.",
          "Poisoned: [Activate] Your unarmed melee attack now may apply a Poison if it naturally rolls 15+ on its attack and hits. This Poison deals 1d4 nature damage per turn, afterwards if the enemy rolls a Stamina Save the Poison effect ends.",
          "Razors: Your unarmed melee attack now deals 1d10 sharp damage.",
          "Ethereal: [Activate] As an Activation Action, you may deal Spirit damage instead of Sharp with your unarmed melee attack."
        ]
      ]
    },
    {
      name: "Budding",
      attributes: "[Action] [Melee]",
      description: "You are at peace with nature, and have invited ten flowers to bud on your skin. You may have one burst and shower a creature (not yourself) in melee range with parasitic pollen which clings onto their skin. Whenever you fully sleep or take a break while eating a full meal you regain all flowers, choose 1 color of flower and if they all heal or deal damage. The flowers do the effect chosen on creatures the pollen touches for 1d6 healing/damage. Causes 1 Strain to burst a flower.",
      proficiencies: [
        [
	        "Perennial: When you switch flowers, you may keep up to LVL flowers from the previous budding.",
	        "Garden: You may bud up to LVL more flowers.",
          "Bloom: You may burst a second flower which affects a secondary target. Causes 2 Strain.",
	        "Bountiful: Increase the healing or damage to 1d8 (take again for the other choice), may attract pollinating insects such as bees more frequently.",
	        "Hyper-allergenic: Causes sneezing/allergy responses. Unfavored -1 to the victim's attack rolls for 1 turn."
        ],
        [
          "Poisonous: [Activate] Your pollen's damage may apply a Poison if it naturally rolls 15+ on its attack and hits. This Poison deals 1d4 nature damage per turn, afterwards if the enemy rolls d20+Stamina above {10 + G} the Poison effect ends.",
	        "Blossom: [Activate] The pollen grows into small flowers on the target after healing them, healing an additional 1d4 on each of your turns for LVL turns.",
          "Bouquet: Your flowers take on a multitude of colors at once, and you can choose to heal or damage at the moment of bursting on an individual flower basis.",
          "Puff: Bloom may burst a third flower which affects a tertiary target. Causes an additional 2 Strain.",
          "Meadow: Garden may bud up to LVL more flowers."
        ],
        [
          "Deep Roots: Your Blossom effect lasts LVL more turns, and your pollen healing is increased to 1d10."
        ]
      ]
    },
    {
      name: "Lay on Hands",
      attributes: "[Action] [Melee]",
      description: "You reach out and touch a creature. You bless them with good health, healing them for 1d8. Causes 1 Strain.",
      proficiencies: [
        [
          "Potency: Increases the amount healed to 1d10.",
          "Heated Soul: [Activate] Your body is now a higher temperature. You feel warm to the touch, you take -G cold damage, and the Climate affects you as if the temperature was 10°F warmer. Additionally, your Lay on Hands target may gain LVL Bloodlust when healed. Cannot take with Cold Justice.",
	        "Cold Justice: [Activate] Your body now relies on the temperature around you, and tends to be colder. You take -G fire damage and the Climate affects you as if the temperature was 10°F colder. Additionally, your Lay on Hands target may ignore their next Psychic Fatigue check. Cannot take with Heated Soul."
        ],
        [          
          "Gifted: Add LVL to the amount healed.",
          "Purity: Instead of healing, may cure the target of any Poison effects.",
          "Cleanse: Instead of healing, may cure the target of any Cursed Poison effects. Requires Purity.",
	        "Healing: Increases the amount healed to 2d6. Requires Potency."
        ],
        [
          "Renew: [Activate] Increases the amount healed to 2d8. Healing from Lay on Hands may trigger the Purity or Cleanse effect if you have them, using your Activation Action. Requires Healing.",
	        "Conviction: May substitute rolling the healing dice with the current amount of Strain you have. Requires Healing."
        ]
      ]
    },
    // melee non-weapon power
    // song based power
    {
      name: "Tight Reflexes",
      attributes: "[React] [Self]",
      description: "When attacked by a melee or ranged weapon attack you may Dodge, reducing their attack roll by your level. Causes 2 Strain.",
      proficiencies: [
        [
          "Nimble: [Activation] Whenever you roll for the Acrobatics Skill, you may spend an Activation Action to gain a Favored +1 on the roll."
        ],
        [
          "Reactive: You may perform a second React Action per Round.",
          "Proactive: [Activate] As an Activation Action you may perform a third Action in a turn. Cannot be used with any Action that does not cause Strain, and this Action causes double the usual Strain. Usable LVL times per day.",
          "Evasive: [Passive] Increase your Avoidance by 1."
        ]
      ]
    },
    {
      name: "Barkskin",
      attributes: "[Action] [Self]",
      description: "Your skin hardens with a thick bark. Gain 1d6 Shielding. Barkskin effects persist until your Shielding reaches 0. Gain a Favored +1 to Hide rolls while in a forested environment. Causes 2 Strain.",
      proficiencies: [
        [
          "Potency: Increase the Shielding to 1d8.",
          "Ease: If you roll a 3 or less on the Shielding roll, Barkskin causes 1 less Strain.",
          "Rooted: You may increase the Shielding by 5. You are Snared for 1 turn.",
          "Hardwood: While Backskin is active, increase your Armor by 2."
        ],
        [          
          "Hard: After using Barkskin reduce Blunt damage taken by G",
          "Treeherder: After using Barkskin gain a Favored +1 to Nature rolls related to plants.",
          "Greater Potency: Increase the Shielding to 1d10. Requires Potency.",
          "Effortless: Ease now triggers on a 5 or less.",
          "Natural Growth: After using Barkskin increase all healing received by G."
        ],
        [
          "Evergreen: If you are in direct sunlight your Barkskin does not cause Strain, also you may roll your Barkskin die twice and keep the higher result."
        ]
      ]
    },
    {
      name: "Shapeshift",
      attributes: "[Action] [Self]",
      description: "You may take on the form and appearance of any creature who you have touched and is equal or lesser level than yourself. While in this form your Strength, Agility and Stamina stats match the values of the creature's stats, you may not use Powers and you gain any Passive physical traits of the creature. When you have lost at least 1 Life, or as an Action on your turn voluntarily, you immediately revert to your normal form, apply that lost Life and any Injuries to your original body and reset your Survival to its full value. You may use Shapeshift twice per Full Sleep. Causes 3 Strain.",
      proficiencies: [
        [
          "Feral: In the form of creatures with a Will below 1, add your level to all unarmed attack damage.",
          "Malleable: You may use Shapeshift one more time per Full Sleep."
        ],
        [          
          "Gifted: While Shapeshifted you may use [Common] Powers but must spend an additional Activation Action.",
          "Up Leveled: You may take on the form of creatures 1 level above yourself.",
          "Resize: [Action] You may, as a Full Action, change the size of your form by 1 Size.",
          "Relaxed: Shapeshift causes 3 fewer Strain, however if you revert forms due to losing Life you immediately gain 3 Strain.",
          "Reform: [React] You may revert to your normal form as a React Action."
        ],
        [
          "Effortless: You may use Powers up to [Epic] while Shapeshifted. Requires Gifted.",
          "Beastial: If you willingly revert to your normal form you regain one usage of Shapeshift."
        ]
      ]
    },
    {
      name: "Seedling",
      attributes: "[Action] [Minion]",
      description: "You release a seed onto the ground which sprouts into a Tiny sized Plant Creature. The Seedling is completely under your control and has a Movement and Full Action, the Seedling has small limbs for movement but no limbs for interacting with objects or creatures. The Seedling has 1 Life, [2 * LVL] Survival, 10 ft of movement, 2 Strength, 1 Agility, 1 Stamina, and 0 Will. The Seedling cannot be controlled by another person unless they control you. One Seedling may exist at a time. Lasts 10 minutes. Cannot be taken if you possess a Minion Power. Causes 2 Strain.",
      proficiencies: [
        [
          "Bark: The Seedling increases its Survival to [5 * LVL].",
          "Vines: The Seedling grows vines which can hold items (up to 20lb) and Grapple creatures, deals 1d4 crushing damage on a success. Can Grapple one creature at a time, uses their Full Action. Add LVL to its Grapple check."
        ],
        [
          "Roots: May Snare while successfully Grappling a creature.",
          "Barbs: May attack as a Full Action, dealing 1d6 Sharp damage. Adds your level to its attack rolls.",
          "Hardy: Lasts up to 1 hour.",
          "In Season: You may have 2 more Seedlings at one time. This Power only produces 1 per action.",
          "Enlarge: The Seedlings are now Medium size, have +2 Life, and Barbs deals 1d8 damage.",
	        "Creep: The Seedling's movement is increased to 20 ft.",
	        "Full Bloom: The base Strength, Stamina, or Agility of the Seedling will equal your current G. (Select one stat per repeated Proficiency)",
	        "Budding: [Activate] On their second turn being alive, your Seedlings may produce a new Seedling which copies all of its Powers, Stats, and Proficiencies except for the Budding proficiency. Uses their Full Action and your Activation Action. These extra Seedlings do not count towards your limit of active Seedlings."
        ],
        [
          "Garden: You may have 2 more Seedlings at one time. This Power may produce 2 per action.",
	        "Entangle: Seedlings add an additional LVL to their Grapple check and Vines deals 1d6 damage."
        ]
      ]
    },
    {
      name: "Broodling",
      attributes: "[Action] [Minion]",
      description: "You may birth a Small sized creature with mammal traits. The Broodling is not completely under your control but may be given verbal commands (which it interprets to the best of its ability and cannot handle complex sequences) and has a Movement and Full Action. The Broodling has small limbs for movement and 2 fore-limbs for interacting with objects or creatures but cannot use mechanical tools. The Broodling has 1 Life, [5 * LVL] Survival, 20 ft of movement, 3 Strength, 3 Agility, 1 Stamina, and 0 Will. One Broodling may exist at a time. Lasts 1 day. Cannot be taken if you possess a Minion Power. Causes Strain equal to 10% of your base max survival and takes 10 minutes of uninterrupted effort.",
      proficiencies: [
        [
          //TODO
        ]
      ]
    },    
    {
      name: "True Strike",
      attributes: "[Action] [Melee]",
      description: "Channel your conviction into a melee attack, gain a Favored +1 to the attack roll. Causes 1 Strain",
      proficiencies: [
        [
          /*
          On a Hard Success treat any roll on your damage dice which is below half of the maximum value as if you rolled half it's maximum value
          lvl 2, Ignore physical damage immunity to deal half damage, also ignore physical damage resistance 
           */
        ],
        [
          //lvl 4, may deal spirit type damage, requires ^
        ]
      ]
    },
    {
      name: "Radiant Weapon",
      attributes: "[Action] [Melee]",
      description: "Empower a melee weapon or your fists with a shining light. Choose a visual representation based on your convictions (such as sunlight, moonlight, lightning, ect.) and choose either Spirit, Darkness, Nature or Electric damage when you gain this Power. Make a melee or unarmed attack and deal an additional 1d4 damage of your chosen type. Causes 1 Strain.",
      proficiencies: [
        [
          "Clergy: Heal yourself for half of the bonus damage dealt by this effect (rounded up).",
          "Turn Evil: When used against an Undead or Fiend they must roll a Will Save, on a Fail they are feared for 1 turn.",
          "Impact: Increase the damage dealt to 1d6."
        ],
        [
          "Greater Clergy: Heal yourself for the full bonus damage dealt by this effect. Requires Clergy.",
          "Greater Turn Evil: Turn Evil fears the creature for an additional turn.",
          "Turn Foe: Pick one type of creature (a list from the Creatures section), your Turn Evil now also applies to this type.",
          "True Judgement: Your attack still deals this bonus damage to the target when you Soft Fail the attack roll.",
          "Greater Impact: Increase the damage dealt to 1d8. Requires Impact.",
          "Cleave: Choose a creature within 5ft of your target. If your attack roll would succeed against this creature you may deal this bonus damage to that creature as well."
        ]
      ]
    },
    {
      name: "Zealotry",
      attributes: "[Action] [Ranged]",
      description: "You gaze upon a creature within 30 ft and rebuke them, speaking harsh words at them empowered by your convictions. Can be used in different ways such as insult, mock, belittle, admonish or threaten. The creature must make a Will Save, on a Fail they receive an Unfavored -1 on their d20 rolls for the next minute. Causes 2 Strain.",
      proficiencies: [
        [
          "Falter: On a Hard Fail the creature receives an Unfavored -2 instead.",
          "Motivate: Instead of its usual effect, you may speak words to motivate a creature in an unpleasant way (such as tough love, a hard lesson, call to take action, ect). The creature does not need to make a Will Save and receives a Favored +1 on its next d20 roll, however a Soft Fail will be considered a Hard Fail.",
          "Boldness: Instead of its usual effect, you may use Zealotry to embolden yourself against a creature under the effect of your Zealotry and fuel your conviction. If the creature Fails its Will Save it does not receive any penalty, but you will remove up to 3 Strain. On a Hard Fail you may remove 1 additional Strain."
        ],
        [
          "Expose: You may also reduce the creature's Armor by 2 for the duration."
        ]
        //TODO
      ]
    },
    {
      name: "Ensnarement",
      attributes: "[Action] [Ranged]",
      description: "Point at a creature you can see within 10 ft which is within 5 ft of the ground or a large plant. Roots, vines, branches or the earth itself ensnare the creature's legs. The creature must roll an Agility Save. On a Soft Fail the creature is Slowed -2, on a Hard Fail the creature is Snared. The effect lasts for 1 turn. Causes 2 Strain.",
      proficiencies: [
        [
          "_:This effect now lasts for up to LVL turns. The creature may roll an Agility Save each turn, on a Success the effect ends.",
          "_:Deals 1d4 Crushing damage each turn.",
          "_:Ensnarement can effect up to 2 additional creatures within 5 ft of the target creature"
        ],
        [
          "_:Deals 1d6 damage",
          "_:The effect now lasts until the creature succeeds an Agility Save. Requires _"
        ]
      ]
    }
  ], // LVL 2
  [ // LVL 3
    {
      name: "Runic Evolution",
      attributes: "[Activate] [Self] [Passive]",
      description: "Your DNA forms a runic word, your body has evolved to use it but cannot Awaken any other runes. At the time you take this Power, choose 1 Power from the Runic Arts Source which is of [LVL 3] or below, this is now a Spiritualist Power you may use. This Power gains Fade as a Runic Arts Power normally would. Using this Power uses your Activation Action in addition to the Action requirements of the selected Power.",
      proficiencies: []
    },
    {
      name: "Smite",
      attributes: "[Action] [AOE]",
      description: "By spending 2 Full Actions the Spiritualist calls upon a greater power to deliver their wrath to nearby creatures, when selecting this power choose one appearance based on your beliefs (such as a flash of light, a moonbeam, a crash of thunder, ect). Deals 6 d6s of Spirit Damage distributed amongst nearby creatures within 10 ft before rolling, no one creature may take more than 12 damage from these dice (extra damage bonuses such as Will Primary Benefit are unaffected). Creatures that receive at least 1 die must roll an Agility Save to avoid the effect, on a Success they are not affected. Causes 3 Strain.",
      proficiencies: [
        [],
        [
          /**
          Profs:
          Epic
          Add 2 d6s
          Increase the cap on dice damage to 18
          Deal half damage on a Soft Success for the Save
          May roll before distributing the dice
          Deal half damage but apply the Blind effect for 2 turns to creatures that Hard Fail the Save

          Legendary
          Add 2 d6s
          May spend 3 more Strain and Activation to use all the dice on one target with uncapped damage
          May spend 3 more Strain and Activation to increase the size of the dice to a d10, however no creature may receive more than 1 die
          */
        ]
      ]
    },
    {
      name: "Tranquility",
      attributes: "[Action] [Minion]",
      description: "Spend 2 Full Actions to perform a small prayer to create an area of peace, reducing up to 3 damage dealt to ANY creature within 20 ft, up to a total of 10 damage reduced throughout the duration. Lasts 1 turn. Causes 2 Strain. ",
      proficiencies: [
        [],
        [
          //TODO
        ]
      ]
    }, 
    {
      name: "Flurry",
      attributes: "[Action] [Melee]",
      description: "After performing a basic melee attack action, perform a basic melee attack action on the same target. Causes 3 Strain.",
      proficiencies: [
        [],
        [
          "Effortless: You may use Flurry without causing Strain once per day.",
          "Strained: You may use Flurry after any other Power that causes damage and causes Strain.",
          "Momentum: If the Flurry attack hits, perform another attack on the same target.",
          "Cleave: Flurry may be used on any target that is within melee range."
        ],
        [
          "Juggernaut: If Momentum's attack hits, perform another attack on the same target.",
          "Sweep: Momentum may be used on any target that is within melee range.",
          "Swing Through: [Activate] If Flurry deals a killing blow, you may use it again on a target in melee range without causing any further Strain, do not trigger Momentum until the Swing Through(s) are finished. Only the first Swing Through uses your Activation Action.",
          "Overwhelm: [Activate] If Flurry deals a killing blow, you may perform a Power that causes Strain. This may only trigger once per turn."
        ]        
      ]
    },
    {
      name: "Swarm",
      attributes: "[Action] [AOE]",
      description: "A swarm of flying insects spew forth from your body, attacking all creatures within a 10 ft radius and quickly die afterwards. All creatures in the afflicted area must roll a Stamina Save, on a Fail they take 1d8 Nature damage. Causes 3 Strain.",
      proficiencies: [
        [],[],
        [
          /*
            ideas:
            insect swarm can apply a poison on a Hard Fail
            insect swarm has 20 ft range
            as an activation, can do a swarm of hairless rodents which persist for 2 turns and deal damage in the area each turn 
          */
        ]
      ]
    }
  ], // LVL 4
  [ // LVL 5
    {
      name: "Phagogenesis",
      attributes: "[Action] [Melee]",
      description: "Eat the brain of a target person. If they have the Spiritualist Source and have died within the last 1 hour, you absorb some of their DNA. Pets you produce gain 1 Power (one choice shared across all active pets) from any person whose DNA you have absorbed. The Power has no Proficiencies and can only be up to [Common] in requirement and may not produce Pets, minions or other creatures. You can only contain 1 person's DNA at one time. You can only store 1 new person per day. The act is seen as disturbing, immoral, or even unforgivable by some cultures.",
      proficiencies: [
        [],
        [
          "RNA: You may select 1 Proficiency on the Power for your pet to use, this Proficiency can only be up to [Common] in requirement.",
          "Memory: You can store a second person's DNA.",
          "Evolved: Your pets can use a Power up to [Epic], and RNA may be a Proficiency up to [Epic] in requirement.",
          "Bank: You can store a third person's DNA, requires Memory.",
          "Complex: Your Pets may have a second Power up to [Common], RNA may apply to this second Power."
        ]
      ]
    }
  ] // LVL 5
]
// {
//   name: "",
//   attributes: "",
//   description: "",
//   proficiencies: [
    
//   ]
// }