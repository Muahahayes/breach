export default{
  "name":"STATS",
  "content":[
    `Life: Your character has a maximum of 5 Life, plus additional Life equal to your Stamina (a minimum of 1 Life if your Stamina is -4 or less). Whenever you lose a point of Life, you receive an Injury. Roll on the Injury table at the bottom of this page. 

    Survival: Your character has a maximum of 10 Survival, plus additional Survival equal to your Stamina multiplied by 5 (a minimum of 5 Survival if your Stamina is -1 or less). When something deals damage to your character, subtract the amount of damage from your current Survival. When something heals your character, add the amount of healing to your current Survival up to your max Survival.
    
    Death: If for any reason you drop below 1 Life to zero or a negative number which is smaller in value than half your max Life set your Life to 0 and you become unconscious and are Dying, if your Life is a negative number greater in value than half your max Life you are Dead. For every turn (or minute out of combat) you are Dying, subtract 1 Life (going into negative numbers). If you reach a negative number equal in value to half your max Life, you are Dead. Your character can no longer be played and you must create a new character to continue playing, ask your GM what G to create your next character at and how this new character can join the story. 
    
    Shielding: You start with 0 Shielding. You may gain Shielding from various effects in the game. When you have at least 1 Shielding, Attacks which reduce your Survival will first reduce your Shielding instead, if the Attack deals damage greater than your Shielding, the remaining damage after your Shielding is reduced to 0 is subtracted from your Survival. You lose any Shielding after a full sleep. 
    
    Avoidance: Your character gains Avoidance from their equipment, Race, and some Powers. When a creature attempts to Attack your character, the difficulty of the Attack roll is increased by your Avoidance.
    
    Speed: You have Speed dice which are used for determining your maximum distance when doing a Movement Action. The number of dice and their size is determined by your Race and may be increased by Powers.
    
    Attributes:
    A measurement of your natural ability at a base level. No Attribute may be increased above 5 + G
    `,
    [
      "Strength (Raw power, anaerobic activity)",
      "Agility (Physical nimbleness and flexibility)",
      "Will (Mental strength)",
      "Stamina (Life and endurance)"
    ],
    `Strength Benefits: Every point of Strength increases your Carry Weight by 50lb.
    Agility Benefits: Agility is used to determine how difficult it is for enemies to hit you.
    Will Benefits: Will is used to resist some non-physical effects.
    Stamina Benefits: Every point of Stamina increases your Life by 1, your Survival by 5, and the distance you can travel per day by 5 miles.

    Note to D&D players: Charisma and Intellect aren't a base Attribute of a person. Charisma is split into Charm, Persuasion, Street Talk, Perform and Disruption skills, you can be charismatic in different ways. Intellect is split into various knowledge based skills, you can be intelligent in different fields.

    Stat Checks: Some Powers, Techniques, and Attacks will contest an Attribute check. These checks can Hard Succeed or Hard Fail like a Skill check but do not give XP.

    Increasing Attributes: Your Attributes are determined by your Race's starting Attributes, and are increased from Attribute Points (AP) you have at character creation, and gain from Gifts. When increasing an Attribute using AP, you cannot increase the Attribute beyond [2 * G] + 1.
    
    A note on numbers: Whenever you calculate a fraction of a number, if the result is not a whole number you must round down to the nearest non-zero whole number (If it is zero, treat it as 1).`
  ]
}