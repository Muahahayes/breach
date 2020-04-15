export default {
  name: "Runic Arts",  
  slogan: "The Powers of Engraving",
  description: "[Flavor Text]",
  resource: "Engravings: When you level up, instead of selecting 1 Gift you may select 3 (these Gifts collectively count as 1 towards your G). You Engrave these Gifts onto your body to attune yourself to their power. Whenever you select a Lesser Gift, you apply a Lesser Engraving upon your body. You may only use a Gift if that Gift's Engraving is awakened, and may only use a Lesser Gift if that Lesser Gift's Lesser Engraving is awakened. After a Full Sleep all of your currently awakened Engravings become suppressed and then you may select up to G Engravings and G Minor Engravings, these Engraving awaken with Aether and glow brightly on your skin. After a Break you may awaken 1 Engraving by suppressing a different Engraving which is currently awakened. When you gain a Proficiency you may only apply it to a currently awakened Engraving, you may only use Proficiencies that are on currently awakened Engravings.\nFading: Whenever you use an Engraving it will gain a point of Fade. Each point of Fade reduces all d20 rolls done with that Engraving by 1 up to a maximum of 20. All Fades are removed when you finish a Full Sleep.",
  proficiencies: [
    [
      "Sustain: Whenever you roll a natural 20 while using a Gift, you may subtract the Fade points on that Gift by 1."
    ]
  ],
  lesser: [
    [
      "Sense Aether: [Action] [AoE] You open your senses to your surroundings and look upon this Gift's Lesser Engraving. It emits a soft glow signifying if there is an active Gift effect (Prioritizing nearest Gift) within 30 ft of you and which Source caused it, which you can understand. If there is no active Gift, the glow quickly goes dull.",
      "Illuminate: [Minor] [Touch] You touch an object, Engraving a Rune of Illumination upon it. For 1 hour the object emits a soft glow which raises the surroundings from Low to Normal light, or from Dark or Pitch Black to Low Light."
    ]
  ]
}