export default {
  name: "Mutation",  
  slogan: "The Powers of Evolution",
  description: "Mutants are a new and not fully understood scientific development who are finding their place in the world.",
  // TODO: refactor mutation to be Shaman/Spiritualist. Draw on the powers of the world, nature, the spirits, or your inner spirit as a source of your power. Belief and Conviction allow them to strain their body to call upon the Aether to aid them, whether their beliefs are true is uncertain and if any gods are listening the world has never heard a reply. This power strengthens your body and ascends you above your original form, granting various alterations to your body as you bond with nature and the world around you. still uses Strain as its resource. add a unique level 1 choice for this source called your Path. Path of the Beast, the Woods, the Goddess, the Self, the Unknown. These give a free Power and some passive benefit, but require a Promise Quirk.
  resource: "Metabolism: When you use an active Mutation you experience Strain. You cannot be healed to a value above your Max Survival minus your current Strain. You remove all of your Strain when you fully sleep or if you take a break while eating a full meal. You remove an amount of Strain equal to [Stamina * LVL] when you take a break without eating a full meal. If your Strain exceeds half your Max Survival you become Overstrained and cannot gain any more Strain.",
  proficiencies: [
    [
      "Thick Skin: Increase your Max Survival by 5.",
      "Retractable Canines: Your canine teeth are sharp and can extend to twice their length.",
      "Tail: If you did not already have one, gain a tail of your choice of animal. You gain +1 to Agility rolls.",
      "Two-Handed Speed: If your two-handed weapon reduces your Speed while equipped, reduce the penalty by 1 (to a minimum of 0)."
    ],
    [
      "Expanded Lungs: You can hold your breath twice as long.",
      "Owl Neck: You can face behind you without turning your body, and you can rotate your head upside down.",
      "Genetic Morph: After putting 3 points into Genetic Morph gain a new Power up to [LVL 3]. This does not count as Leveling Up. You may only gain 1 Power from this Proficiency.",
      "Fast Reflexes: Add 1 Initiative to your Speed rolls."
    ],
    [
      "Regenerative: Gain +LVL to any healing you receive.",
      "Evolutionary Endurance: Increase your Stamina by 1 and increase its maximum by 1.",
      "Constitution: You may add your level to your Stamina Saving rolls.",
      "Clarity: You may add your level to your Will Saving rolls."
    ],
    [
      "Photosynthesis: You gain 1 Food Point whenever you take a Break in direct sunlight.",
      "Hardy: Increase your Max Survival by 5."
    ],
    [
      //5
    ],
    [
      //6
    ],
    [
      "Extended Gifts: Gain a new Power from your Source of Common Tier (Repeatable up to 3)."      
    ]
  ],
  capstones: [
//TODO add capstone proficiencies, powerful effects but can only pick 1
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
  ],
  path: [
    "Path of the Beast:", // shapeshift and beast rapport, grant some melee durability
    "Path of the Woods:", // seedling and a tree communing lesser power, grants 
    "Path of the Goddess:",
    "Path of the Self:",
    "Path of the Unknown:"
  ]
}