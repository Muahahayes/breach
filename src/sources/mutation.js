export default {
  name: "Mutation",  
  slogan: "The Powers of Evolution",
  description: "Mutants are a new and not fully understood scientific development who are finding their place in the world.",
  resource: "Metabolism: When you use an active Mutation you experience Strain. You lower your max survival for each point of Strain you gain, and regain this lowered max survival for each point of Strain you lose up to your unstrained maximum. You remove all of your Strain when you fully sleep or if you take a break while eating a full meal. You remove an amount of Strain equal to [Stamina * LVL] when you take a break without eating a full meal. If your Strain exceeds half your unstrained max survival you become Overstrained and become unconscious, you cannot use any Powers until you fully sleep or take a break while eating a full meal.",
  proficiencies: [
    [
      "Thick Skin: Increase your max survival by 5. (Repeatable up to LVL times)",
      "Retractable Canines: Your canine teeth are sharp and can extend to twice their length.",
      "Tail: If you did not already have one, gain a tail of your choice of animal. You gain +1 to Agility rolls.",
      "Two-Handed Speed: If your two-handed weapon reduces your Speed while equipped, reduce the penalty by 1 (to a minimum of 0)."
    ],
    [
      "Expanded Lungs: You can hold your breath twice as long.",
      "Owl Neck: You can face behind you without turning your body, and you can rotate your head upside down.",
      "Genetic Morph: At 5 stacks, gain a new Power up to [LVL 3]. This does not count as Leveling Up. (Repeatable up to 5 stacks, one Power may be gained from this Proficiency)",
      "Fast Reflexes: Add 1 Initiative to your Speed rolls."
    ],
    [
      "Regenerative: Gain +LVL to any healing you receive.",
      "Evolutionary Endurance: Increase your Stamina by 1 and increase its maximum to [LVL + 4].",
      "Constitution: You may add your level to your Stamina rolls.",
      "Clarity: You may add your level to your Will rolls."
    ],
    [
      "Photosynthesis: You gain 1 Food Point whenever you take a Break in direct sunlight."
    ],
    [
      //5
    ],
    [
      //6
    ],
    [
      "Extended Gifts: Gain a new Power from your Source of [LVL 3] or less (Repeatable up to 3)."
      //TODO add capstone proficiencies, powerful effects but can only pick 1
    ]
  ],
  capstones: [

  ],
  lesser: [
    [
      "Beast Rapport: [Action] [Self] For 1 hour you release pheromones which calm beasts who are aware of you. While this effect is active, you may make Charm attempts with beasts with a Will less than 0 which you and your allies have not harmed. On a successful Charm attempt, the beast will not act violently towards you until this effect ends. Causes 1 Strain.",
      "Venom Resistance: [Action] [Self] For 1 hour your stomach becomes hyper-vigilant against Poisons. You may taste and consume Poisoned food without gaining any Poison effects, and you are aware of if the food is Poisoned when you taste it. Causes 1 Strain."
    ],
    [
      "Coiled Muscle: [Action] [Self] For 10 min the muscles in your legs coil and flex, increasing your jump height by 5 ft. Causes 1 strain."
    ],
    [
      "Respite: [Activate] [Self] Choose a Quirk when you take this Lesser Power. Whenever you gain a Favored bonus with this Quirk, if you Hard Succeed on the d20 roll you may use your Activation Action to remove LVL Strain. (Repeatable up to LVL times, choose another Quirk with each repeat)"
    ]
  ]
}