export default {
  name: "Cosmic",  
  slogan: "The Powers of the Aether",
  description: "Cosmics are an educated sect of mystics, who seek to understand the universe. They use rigorous metaphysics theory, called Aethology, to study and define the way magic interacts with the world. While Psychics intuitively resonate their inner Aether with their surroundings; Cosmics use meditation to draw Aether inside themselves, manipulate and change it through studied practice, and release it back into the world to spread those changes. In modern society if you do not have Psychic talents, joining Cosmic academia is another established path into the upper class.",
  resource: "Cosmic Well: You gain a Well of Aether (ae) within your soul. Your Well can hold up to [5 + LVL + Will] ae at one time. You gain [5 + LVL] ae from a Full Sleep, and an amount equal to [LVL + Will] when you take a Break. If you reach 0 ae you will be rendered unconscious and you will regain 1 ae if you are woken up, or 5 if you fully sleep.\nElemental Soul: Choose Spirit, Darkness, or an Elemental damage type. Your Well is attuned to this element. Add LVL damage to any damage you deal with this element. You are resistant to this damage type.",
  proficiencies: [
    [
      "Willful: Add 1 to your Will attribute and increase its maximum by 1."
    ],
    [
      "Deep Well: Increase your maximum well by 3.",
      "Deep Sleep: Increase the ae gained from a Full Sleep by an amount equal to your level."
    ],
    [
      "Pool: Increase your maximum well by 3.",
      "Third Eye: You are immune to the Blind effect.",
      "Focused: Add your level to your defensive Will checks.",
      "Channeled Aether: [Activate] As an Activation Action you may delay any Power you use by up to LVL turns. The Power's targeting does not move from the original location. When the Power takes effect, you may replace damage/healing/effect dice up to the number of turns delayed with their maximum value.",
      "Constitution: You may add your level to your Stamina Saving rolls.",
      "Clarity: You may add your level to your Will Saving rolls."
    ],
    [
      "Pond: Increase your maximum well by 5.",
      "Attuned Chakra: Select 1 elemental damage type. You are resistant to damage of that type.",
      "Power Nap: You gain half the ae of taking a Break when you are afflicted by the Sleep effect.",
      "Slumber: Increase the ae gained from a Full Sleep by 5."
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
    "Archon: Once per Full Sleep you may, as an Action, enter into an Archon form. While within this form your body becomes translucent and thrums with energy matching your Elemental Soul. When rolling dice for damage, healing or shielding, after seeing the result of the roll you may spend 1 ae to replace that result with the maximum value of that die. This form lasts for 1 minute and ends prematurely if you are made unconscious, or asleep."
    //TODO add capstone proficiencies, powerful effects but can only pick 1
  ],
  lesser: [
    [
      "Bind: [Action] [Melee] You reach out and touch two objects and press them together. If the two objects are broken pieces of the same original object they are reconnected and repaired, otherwise the two objects are fused together at the point of contact with a mix of the two materials creating a weld with its strength equal to the average hardness of the two materials.",
      "Illuminate: [Action] [Touch] You touch an object, imbuing it with Aether. For 1 hour the object emits a soft glow which raises the surroundings from Low to Normal light, or from Dark or Pitch Black to Low Light."
    ],
    [
      "Greater Flourish: [Action] [Ranged] For 10 minutes, within 30 ft you may manipulate objects and/or lift objects weighing no more than 5*LVL pounds up to 30 ft in the air. Costs 1 ae.",
      "Cord: [Action] [Ranged] A silvery rope of spirit energy extends from your hand up to a length of 10 ft. It can be used as rope, but can only physically interact with living flesh. The cord can only by broken by a d20 + Strength vs 10 + Use Power. Lasts up to 1 day. Costs 1 ae."
    ],
    [
      "Harmony: [Activate] [Self] Choose a Quirk when you take this Lesser Power. Whenever you gain a Favored bonus with this Quirk, if you Hard Succeed on the d20 roll you may use your Activation Action to gain LVL ae. (Repeatable up to LVL times, choose another Quirk with each repeat)",
      "Desperation: [Activate] [Self] Choose a Quirk when you take this Lesser Power. Whenever you gain an Unfavored penalty with this Quirk, if you succeed on the d20 roll you may use your Activation Action as a Full Action during this turn. Usable once per Full Sleep.", // TEST THIS: could throw off action economy?
      "Binding of Honesty: [Action] [Touch] While touching a creature you can create a Binding of Honesty. Until you are no longer touching the creature they are compelled to tell the truth. If they knowingly attempt to lie, they must succeed a Will vs Will check. On a Soft Fail they may still lie by omission. On a Hard Fail they must tell the full truth. Lasts up to 1 hour. Costs 2 ae."
    ]
  ]
}