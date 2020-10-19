export default {
  name: "Spiritualist",  
  slogan: "The Powers of Belief",
  description: "Draw on the powers of the world, nature, the spirits, or your inner spirit as a source of your power. Belief and Conviction allow them to strain their body to call upon the Aether to aid them, whether their beliefs are true is uncertain and if any gods are listening the world has never heard a reply. This power strengthens your body and ascends you above your original form, granting various alterations to your body as you bond with nature and the world around you. When you create a Spiritualist select a Path, your Path comes with a Promise and rewards you with additional Powers.",
  resource: "Strain: When you use an active Power you experience Strain. You cannot be healed to a value above your Max Survival minus your current Strain. You remove all of your Strain when you fully sleep. You remove an amount of Strain equal to [Stamina * LVL] when you take a break. If your Strain exceeds half your Max Survival you become Overstrained and cannot gain any more Strain.",
  proficiencies: [
    [
      "Thick Skin: Increase your Armor by 1. This is increased to half your Strength when not wearing Torso Armor.",
      "Retractable Canines: Your canine teeth are sharp and can extend to twice their length.",
      "Tail: If you did not already have one, gain a tail of your choice of animal. You gain +1 to Agility rolls.",
      "Two-Handed Speed: If your two-handed weapon reduces your Speed while equipped, reduce the penalty by 1 (to a minimum of 0)."
    ],
    [
      "Expanded Lungs: You can hold your breath twice as long.",
      "Owl Neck: You can face behind you without turning your body, and you can rotate your head upside down.",
      "Spiritual Awakening: After putting 3 points into Spiritual Awakening gain a new [Common] Power. This does not count as Leveling Up. You may only gain 1 Power from this Proficiency.",
      "Fast Reflexes: Add 1 Initiative to your Speed rolls."
    ],
    [
      "Regenerative: Gain +LVL to any healing you receive.",
      "Evolutionary Endurance: Increase your Stamina by 1 and increase its maximum by 1.",
      "Constitution: You may add your level to your Stamina Saving rolls.",
      "Clarity: You may add your level to your Will Saving rolls."
    ],
    [
      "Dawn: You gain 1 Food Point whenever you take a Break in direct sunlight.",
      "Hardy: Increase your Max Survival by 5.",
      "Hardened Skin: Increase your Armor by 3. This is increased by half your Strength when not wearing Torso Armor. Requires Thick Skin."
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
      "Tree Commune: [Action] [Melee] You may reach out and touch a tree or large plant and commune with it for 10 minutes. You may learn basic facts about the local geography and are given vague descriptions of creatures that may have passed by the area within the last day. Causes 1 Strain.",
      "Bloom: [Action] [Melee] You reach out and touch a tree or bush and encourage it to bear fruit. 1 Fruit or 10 Berries are grown from the plant. This may be used once per day, and only once per month on each plant. Weak or dry plants may die in the process. Causes 2 Strain.",
      "Conviction: [Free] [Self] While in good standing with the Promise of your Path, you may gain a Favored +1 to any d20 roll. Usable once per day. Causes 2 Strain.",
      "Comprehend Language: [Action] [Self] Declare a language, for 1 hour you can understand the speech and writing of that language. Causes 1 Strain."
    ],
    [
      "Poison Resistance: [Action] [Self] For 1 hour your stomach becomes hyper-vigilant against Poisons. You may taste and consume Poisoned food without gaining any Poison effects, and you are aware of if the food is Poisoned when you taste it. Causes 1 Strain.",
      "Coiled Muscle: [Action] [Self] For 10 min the muscles in your legs coil and flex, increasing your jump height by 5 ft. Causes 1 strain.",
      "Speak Language: [Passive] Comprehend Language now allows you to speak and write the language as well."
    ],
    [
      "Respite: [Activate] [Self] Choose a Quirk when you take this Lesser Power. Whenever you gain a Favored bonus with this Quirk, if you Hard Succeed on the d20 roll you may use your Activation Action to remove LVL Strain. (Repeatable up to LVL times, choose another Quirk with each repeat)"
    ]
  ],
  path: [
    "Path of the Beast: You Promise to abide by the circle of life and allow no harm to any unintelligent beast if it does not pose a threat. Gain the Beast Rapport Lesser Power and the Shapeshift Power.",
    "Path of the Woods: You Promise to protect the woods of the world, you are friend to all trees and may not allow needless harm to come to any plant. Gain the Tree Commune Lesser Power and the Seedling Power.",
    "Path of the Goddess: You Promise to protect the mothers and children of the world and are obligated to feed any hungry child who has no recourse. Gain the Bloom Lesser Power and the True Strike Power.",
    "Path of the Self: You Promise to strive towards self actualization and to find a great purpose to commit your life to, giving you a compass to aim your life towards. Gain the Conviction Lesser Power and the Radiant Weapon Power.",
    "Path of the Unknown: You Promise to seek truth and uncover the great mysteries of the world, when presented with an opportunity to discover mystical secrets or ancient power you must not turn away. Gain the Comprehend Language Lesser Power and the Zealotry Power."
  ]
}