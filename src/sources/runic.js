export default {
  name: "Runic Arts",  
  slogan: "The Powers of Engraving",
  description: "[Flavor Text]",
  resource: "Engravings: When you level up, instead of selecting 1 Gift you may select 3 (these Gifts collectively count as 1 towards your G). You Engrave these Gifts onto your body to attune yourself to their power. Whenever you select a Lesser Gift, you apply a Lesser Engraving upon your body. You may only use a Gift if that Gift's Engraving is awakened, and may only use a Lesser Gift if that Lesser Gift's Lesser Engraving is awakened. After a Full Sleep all of your currently awakened Engravings become suppressed and then you may select up to G Engravings and G Minor Engravings, these Engraving awaken with Aether and glow brightly on your skin. After a Break you may awaken 1 Engraving by suppressing a different Engraving which is currently awakened. When you gain a Proficiency you may only apply it to a currently awakened Engraving, you may only use Proficiencies that are on currently awakened Engravings.\nFading: Whenever you use an Engraving it will gain a point of Fade. Each point of Fade reduces all d20 rolls done with that Engraving by 1 up to a maximum of 20. All Fades are removed when you finish a Full Sleep.",
  proficiencies: [
    [
      "Sustain: Whenever you roll a natural 20 while using a Gift, you may subtract the Fade points on that Gift by 1.",
      "Study: Whenever you level up, you may select 1 Lesser Gift for free without spending a Proficiency."
    ],
    [
      "Energized: While a Gift has 0 Fade points, add +1 to any damage it deals."
      
    ],
    [
      "Greater Energized: Increase Energized to +G.",
      "Receptive: Gain +G to any healing you receive from a Cosmic or Runic Gift.",
      "Proficient: When you level up, you may select 4 Gifts instead of 3. At least 1 Gift must be below 3G."
    ]
  ],
  lesser: [
    [
      "Sense Aether: [Action] [AoE] You open your senses to your surroundings and look upon this Gift's Lesser Engraving. It emits a soft glow signifying if there is an active Gift effect (Prioritizing nearest Gift) within 30 ft of you and which Source caused it, which you can understand. If there is no active Gift, the glow quickly goes dull.",
      "Illuminate: [Action] [Touch] You touch an object, Engraving a Rune of Illumination upon it. For 1 hour the object emits a soft glow which raises the surroundings from Low to Normal light, or from Dark or Pitch Black to Low Light."
    ],
    [
      "Runic Munitions: [Action] [Touch] Spend 10 minutes to Engrave up to 30 pieces of ammo. Increase the damage of any ranged attack using this ammo by G."
    ],
    [
      "Sealing Shot: [Action] [Touch] Spend 10 minutes to Engrave a creature's full true name onto a piece of ammo and roll a d20 + Power, if you land a ranged attack with that ammo that creature must make a Will check vs the Power roll engraved or they are Silenced and Snared for G rounds. Usable once per Full Sleep."
    ]
  ]
}