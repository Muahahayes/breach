export default [
  [
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
          "Armored Skin: [Passive] While Blocking, increase your Avoidance by 2."
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
      name: "",
      attributes: "",
      description: "",
      proficiencies: [
        
      ]
    }
  ]
]