export default {
  name: "Ancient Bloodline",  
  slogan: "The Powers of the Past",
  description: "[Flavor Text]",
  resource: "Bloodlust: Whenever you deal damage to, or receive damage from a creature you gain 1 Bloodlust (once per creature per turn, max of [G * 2] number of creatures per turn). These Bloodlust points may be spent by various Powers within this Source. Whenever you fail to land an attack on an opponent you lose a Bloodlust. if you reach 0 Bloodlust you enter Apathy and are unable to use any Powers until you gain at least 1 Bloodlust to end your Apathy. You lose all of your Bloodlust when you have a Full Sleep, and half (rounded down) when you take a Break.",
  proficiencies: [
    [
      "Thick Skin: Increase your max survival by 5. (Repeatable up to G times)",
      "Retractable Canines: Your canine teeth are sharp and can extend to twice their length.",
      "Study: Whenever you level up, you may select 1 Lesser Gift for free without spending a Proficiency."
    ],
    [
      "Ancestral Strength: Add G to your Strength checks.",
      "Carnivore: After eating a meal which included a type of meat, gain 1 Bloodlust.",
      "Dark Dreams: You retain up to 2 Bloodlust when you Full Sleep."
    ],
    [
      "Regenerative: Gain +G to any healing you receive from a Gift."
    ]
  ],
  lesser: [
    [
      "Conjure Fire: [Action] [Self] You create a small fire which floats above your hand. You may drop the fire, if it lands on a flammable material it is lit aflame, otherwise the fire snuffs out. The fire raises the nearby surroundings from Pitch Black to Dark or Dark to Low within 15 ft. Does not cost any Bloodlust.",
      "Glamour: [Action] [Self] You mask your face with an illusion to appear like any person of your Race you have seen. If you enter Apathy this effect ends. Costs 1 Bloodlust."
    ],
    [
      "Grudge: [Action] [Ranged] You perform a ritual for 10 minutes to curse a creature with a Grudge within 1 mile. Speak their true full name and describe a nightmarish creature or situation, every night for G months the target creature will experience a nightmare you described during every Full Sleep. At 5G you may cause a nightmarish creature to appear to them in a shadowy form in the corner of their vision at random moments during the day."
    ],
    [
      "Blood Oath: [Activate] [Self] Choose a Quirk when you take this Lesser Gift. Whenever you gain a Favored bonus from this Quirk you may spend 1 Bloodlust and use your Activation Action to heal G health.",
      "Dark Strike: [Activate] [Self] Choose a Quirk when you take this Lesser Gift. Whenever you gain a Favored bonus from this Quirk on a damaging attack you may spend 1 Bloodlust and use your Activation Action to dead an additional Gd4 damage."
    ]
  ]
}