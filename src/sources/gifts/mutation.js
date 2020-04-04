export default [
  [// 1G
    {
      name: "Harden",
      attributes: "[React] [Self]",
      description: "Your skin can flex and morph to become a hard leathery hide. When you receive damage, you may reduce the damage taken by an amount equal to your current Strain. Afterwards, causes G Strain. May only be used while Blocking and may only be used twice. Regain a use after taking a Break, or regain all uses after a Full Sleep.",
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
      attributes: "[Minor] [Self]",
      description: "Roll a Disruption check. All enemies that can See you must roll a Will check vs your Disruption. Any that fail are Taunted for 1 turn. Causes G Strain. On a natural 1 for the Disruption check the Strain is doubled.",
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
          "Fluorescent: Raises the surroundings by 1 light level, up to 10min.",
          "Distracting: [Activate] Subtract G from any attack rolls against allies in melee range for 1 turn."
        ],
        [
          "Primal: [Activate] The Instinct effect now lasts until they lose awareness of you for as long as you spend your Activation Action each turn. They may roll a Will check vs your Disruption on each turn to end the effect."
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
      description: "You may take on the form and appearance of any creature who you have touched and is equal or lesser G than yourself. While in this form your Strength, Agility and Stamina stats match the values of the creature's stats, you can use [1 G] Powers as an additional Activation Action and you gain any Passive physical traits of the creature. When you have lost Life equal to your G during your transformation, or as a Minor Action on your turn voluntarily, you immediately revert to your normal form, negate any remaining damage received, set your Strain to ½ your max Survival, and reset your Survival to its full value. Usable once per Full Sleep.",
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
    }
  ], // 2G
  [ // 3G
    {
      name: "Artificial Evolution",
      attributes: "[Activate] [Self] [Passive]",
      description: "You gain a Module Chip that is embedded into your brain, your brain has evolved to interface with it but cannot handle loading new Augments onto it. Choose 1 Gift from the Cybernetic Augmentations Source, that is now a Mutant Power you may use. Gain G Strain whenever you use this power, and if it causes any Faults beyond the passive Fault from failing a roll, gain an additional G Strain for each Fault. Using this Power uses your Activation Action in addition to the Action requirements of the selected Power.",
      proficiencies: []
    }
  ] // 3G
]
// {
//   name: "",
//   attributes: "",
//   description: "",
//   proficiencies: [
    
//   ]
// }