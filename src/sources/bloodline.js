export default {
  name: "Bloodline",  
  slogan: "The Powers of the Past",
  description: "[Flavor Text]",
  resource: "Bloodlust: Whenever you deal damage to, or receive damage from a creature you gain 1 Bloodlust (once per creature per turn, max of [LVL * 2] number of creatures per turn). These Bloodlust points may be spent by various Powers within this Source. Whenever you fail to land an attack on an opponent you lose a Bloodlust. if you reach 0 Bloodlust you enter Apathy and are unable to use any Powers until you gain at least 1 Bloodlust to end your Apathy. You lose all of your Bloodlust when you have a Full Sleep, and half (rounded down) when you take a Break.",
  proficiencies: [
    [
      "Thick Skin: Increase your Max Survival by 5.",
      "Retractable Canines: Your canine teeth are sharp and can extend to twice their length.",
      "Two-Handed Speed: If your two-handed weapon reduces your Speed while equipped, reduce the penalty by 1 (to a minimum of 0)."
    ],
    [
      "Ancestral Strength: Gain Favored +1 to your Strength checks.",
      "Carnivore: After eating a meal which included a type of meat, gain 1 Bloodlust.",
      "Dark Dreams: You retain up to 2 Bloodlust when you Full Sleep."
    ],
    [
      "Regenerative: Gain +LVL to any healing you receive from a Power.",
      "Ancient Endurance: Increase your Stamina by 1 and increase its maximum by 1.",
      "Two-Handed Tempo: Two-Handed Speed reduces the penalty by an additional 1 (to a minimum of 0).",
      "Constitution: You may add your level to your Stamina Saving rolls.",
      "Clarity: You may add your level to your Will Saving rolls."
    ],
    [
      "Hardy: Increase your Max Survival by 5."
    ],
    [
      "Timeless: You do not age and will no longer die of age or natural illnesses."
    ],
    [
      //6
    ],
    [
      "Extended Gifts: Gain a new Power from your Source of [LVL 3] or less (Repeatable up to 3)."
      
    ]
  ],
  capstones: [
    "Blood Frenzy: Once per Full Sleep you may, as an Action, enter into a Blood Frenzy. While in this Frenzy your blood glows brightly across your skin and your eyes become crimson red. Once per turn you may ignore up to 3 Bloodlust required from one Power you use and its Proficiencies. This Frenzy lasts for 30 seconds, and ends prematurely if you are made unconscious, asleep, feared, or if you enter Apathy."
    //TODO add capstone proficiencies, powerful effects but can only pick 1
  ],
  lesser: [
    [
      "Conjure Fire: [Action] [Self] You create a small fire which floats above your hand. You may drop the fire, if it lands on a flammable material it is lit aflame, otherwise the fire snuffs out. The fire raises the nearby surroundings from Pitch Black to Dark or Dark to Low within 15 ft. Does not cost any Bloodlust.",
      "Glamour: [Action] [Self] You mask your face with an illusion to appear like any person of your Race you have seen. If you enter Apathy this effect ends. Costs 1 Bloodlust.",
      "Evocation: [Action] [Self] As a Full Action you draw more energy into your body. The next time you gain Bloodlust, increase the amount gained by an amount equal to your level. You may use Evocation up to LVL times per Full Sleep."
    ],
    [
      "Grudge: [Action] [Ranged] You perform a ritual for 10 minutes to curse a creature with a Grudge within 1 mile. Speak their true full name and describe a nightmarish creature or situation, every night for LVL months the target creature will experience a nightmare you described during every Full Sleep. At level 5 you may cause a nightmarish creature to appear to them in a shadowy form in the corner of their vision at random moments during the day. Costs 1 Bloodlust.",
      "Red-Eye: [Action] [Self] Your eyes alight with a flash of red. You can see as if the surrounding light were 1 stage brighter. Lasts up to 1 hour. Costs 1 Bloodlust."
    ],
    [
      "Blood Oath: [Activate] [Self] Choose a Quirk when you take this Lesser Power. Whenever you gain a Favored bonus from this Quirk you may spend 1 Bloodlust and use your Activation Action to heal LVL survival. (Repeatable up to LVL times, choose another Quirk with each repeat)",
      "Dark Strike: [Activate] [Self] Choose a Quirk when you take this Lesser Power. Whenever you gain a Favored bonus from this Quirk on a damaging attack you may spend 1 Bloodlust and use your Activation Action to dead an additional LVL * d4 damage."
    ]
  ]
}