export default {
  name: "Runic Arts",  
  slogan: "The Powers of Engraving",
  description: "[Flavor Text]", //TODO
  resource: "Runes: When you level up, instead of selecting 1 Power you may select 2. You engrave these Powers onto your body as a Rune to attune yourself to their power. Whenever you select a Lesser Power, you apply a Lesser Rune upon your body. A Rune may be in 3 states: Awakened, Dormant, or Faded. You may only use a Power if that Power's Rune is Awakened. After a Full Sleep all of your currently Awakened and Faded Runes become Dormant and then you may select up to LVL Runes, these Runes become Awakened with Aether and glow brightly on your skin. After a Break you may Awaken any 1 Rune (Dormant or Faded) by selecting a different Rune which is currently Awakened and make it Dormant. You may only use Proficiencies that are on currently Awakened Rune. All Lesser Runes are Awakened after a Full Sleep.\nFading: Awakened Runes gain 1 Fade when their Power is used. When a Rune's Fade is equal or greater than your level that Rune becomes Faded, it is no longer Awakened and you must choose a Dormant Rune to Awaken in its place. If no Runes are currently Dormant, all of your Faded Runes become Dormant. You may select one of these Dormant Runes, except for the Rune that just barely Faded. Lesser Runes do not Awaken another Rune when they Fade, after a Lesser Rune has Faded it only becomes Awakened after a Full Sleep.",
  proficiencies: [
    [
      "Sustain: Whenever you roll a natural 20 while using a Power, this does count towards it Fading. This effect does not apply to Runes with a Max of only 1 Fade.",
      "Two-Handed Speed: If your two-handed weapon reduces your Speed while equipped, reduce the penalty by 1 (to a minimum of 0).",
      "Willful: Add 1 to your Will attribute and increase its maximum by 1."
    ],
    [
      "Energized: While you have 0 Faded Runes, add +1 to any damage you deal with a Power.",
      "Glow: Subract 1 Fade from the first 2 uses of your Powers, resets after a Full Sleep. This effect does not apply to Runes with a Max of only 1 Fade.",
      "Thick Skin: Increase your Armor by 1. This is increased to half your Strength when not wearing Torso Armor."
    ],
    [
      "Greater Energized: Increase Energized to +LVL.",
      "Receptive: Gain +LVL to any healing you receive from a Cosmic or Runic Power.",
      "Proficient: When you level up, you may select 4 Powers instead of 3. At least 1 Power must be Common Tier.",
      "Constitution: You may add your level to your Stamina Saving rolls.",
      "Clarity: You may add your level to your Will Saving rolls."
    ],
    [
      "Light: You may Awaken one additional Rune after a Full Sleep. At this time you may not Awaken any runes above Common Tier while using Light. This Rune does not Awaken another Rune when it Fades.",
      "Shine: Increase Glow to 4.",
      "Refresh: When you take a Break, you may Awaken 1 additional Rune.",
      "Brighten: Select 1 Power which has a Max Fade greater than 1. Increase its Max Fade by 1."
    ],
    [
      "Ascended: You may use Light while a rune above Common Tier is awakened. However, any rune(s) awakened by Light may not be above Common Tier.",
      "Greater Light: Light may Awaken one additional Rune."
    ],
    [
      "Major Light: Light may Awaken one additional Rune."
    ],
    [
      "Extended Gifts: Gain 2 new Powers from your Source of Common Tier (Repeatable up to 3)."
    ]
  ],
  capstones: [
//TODO add capstone proficiencies, powerful effects but can only pick 1
    "Resplendent: Once per Week you may consume the energy from a Moderate Chaos Gem or higher, or a Greater Soul Gem or higher, to Awaken all of your Runes. All of your Runes are reset to 0 Fade and become Dormant instead of Faded when they Fade. This effect lasts for 1 minute.",
    "Accelerate: Once per Full Sleep you may focus your energy into accelerating your Powers. You gain 1 additional Full Action on each of your turns, but your Runes cause 1 additional Fade when they are used. Lasts for 30 seconds."
  ],
  lesser: [
    [
      "Sense Aether: [Action] [AoE] You open your senses to your surroundings and look upon this Power's Lesser Engraving. It emits a soft glow signifying if there is an active Power effect (Prioritizing nearest Power) within 30 ft of you and which Source caused it, which you can understand. If there is no active Power, the glow quickly goes dull.",
      "Illuminate: [Action] [Touch] You touch an object, Engraving a Rune of Illumination upon it. For 1 hour the object emits a soft glow which raises the surroundings from Low to Normal light, or from Dark or Pitch Black to Low Light."
    ],
    [
      "Runic Munitions: [Action] [Touch] Spend 10 minutes to Engrave up to 30 pieces of ammo. Increase the damage of any ranged attack using this ammo by an amount equal to your level.",
      "Rune of Alarm: [Action] [Touch] Spend 1 minute touching an object to Engrave it. You are aware of any creature within 3 feet of the Rune. The Rune persists for 1 day per level."
    ],
    [
      "Sealing Shot: [Action] [Touch] Spend 10 minutes to Engrave a creature's full true name onto a piece of ammo and roll a d20 + Power, if a ranged attack hits using that ammo hits the creature it must Succeed a Will check or they are Silenced and Snared for LVL rounds. This Rune is only usable once per Full Sleep.",
      "Invigorate: [Activation] [Self] Choose a Quirk when you take this Lesser Power. Whenever you gain a Favored bonus with this Quirk you may use your Activation Action to subtract 1 Fade from any awakened Rune.",
      "Feedback: [Activation] [Self] Whenever you roll a Hard Fail, as an Activation Action you may apply 1 Fade to a rune of your choice which is currently awakened.",
      "Glyph of Honesty: [Action] [AOE] By running your palm along a flat surface you create a circle of runes. While within it, creatures that attempt to knowingly lie must succeed a d20 + Will vs Will or be compelled to tell the truth. On a Soft Fail they may still lie by omission. On a Hard Fail they must tell the full truth. This Rune is only usable once per Full Sleep."
    ]
  ]
}