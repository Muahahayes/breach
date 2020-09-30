import React from 'react';
import { Link } from 'react-router-dom';
export default {
name: 'Humanoid',
description: <p>dudes shaped like people</p>,
creatures:[
  [ // lv0
    { // select all this to copy paste, and if you highlight it all and ctrl+/ it will comment/uncomment it all
      name: 'Human Commoner',
      description: 'A typical Human who has not seen much battle in their life. They are common merchants, farmers, and townsfolk. They do not seek fights unless provoked and many will try to escape a fight against stronger creatures.',
      image: 'https://cdn.discordapp.com/attachments/316751799031824385/698476701101064292/1586599947839.png',
      attributes: '[Human] [Biological]',  // arbitrary, used for searching
      level: 0,
      stats: {
        'actions': 2,
        'life': 1,
        'survival': 5,
        'avoidance': 10,
        'speed': '1d6 + 1',
        'strength': 1,
        'agility': 1,
        'stamina': 1,
        'will': 1
      },
      skills:[ // you can add other skills if they'd be relevant to the creature, these ones are just the combat related ones Art, Logic, Athletics, Persuasion, Search, Medicine, Social, Disruption
        'Athletics: 0',
        'Martial Arms: -2',
        'Marksmanship: -2',
        'Power: -2',
        'Block: -2',
        'Unarmed Combat: -2',
        'Sneak: -2',
        'Hide: -2',
        'Awareness: -2',
        'Search: 0',
        'Insight: -2',
        'Disruption: 0'
      ],
      actions: [ // write various actions here
        'Flee: [Movement] [Self] When the human drops to low health, it runs away using its Full Action to add 10 ft to its Movement.',
        'Swing: [Action] [Melee] The human uses whatever weapon or object is at their disposal to make a basic melee attack. Deals 1d4 damage.',
        "Punch: [Action] [Melee] The human makes a fist and punches at a nearby enemy, making a basic unarmed attack. Deals 1 damage."
      ]
    }
  ], // lv0
  [ // lv1
    {
      name: 'Lesser Goblin',
      description: 'Angry little gobbo Angry little gobbo Angry little gobbo Angry little gobbo Angry little gobbo Angry little gobbo Angry little gobbo Angry little gobbo Angry little gobbo Angry little gobbo Angry little gobbo Angry little gobbo Angry little gobbo Angry little gobbo Angry little gobbo Angry little gobbo Angry little gobbo Angry little gobbo Angry little gobbo ',
      image:'https://cdn.discordapp.com/attachments/575187645601153024/700477642364944464/ugly-goblin-260nw-715354072.png',
      attributes: '[Green] [Goblin] [Biological]',
      level: 1,
      stats: {
        'actions': 2,
        'life': 2,
        'survival': 6,
        'avoidance': 12,
        'speed': '1d4+2',
        'strength': 1,
        'agility': 2,
        'stamina': 0,
        'will': -1
      },
      skills: [
        'Athletics: 1',
        'Martial Arms: 0',
        'Marksmanship: 1',
        'Power: -2',
        'Block: 0',
        'Unarmed Combat: 0',
        'Sneak: 2',
        'Hide: 2',
        'Awareness: 0',
        'Search: 0',
        'Insight: -2',
        'Disruption: -2'
      ],
      actions: [
        'Bash: [Action] [Melee] The goblin swings its weapon at a melee target, making a basic melee attack. Deals 1d4+1 Blunt damage.',
        'Flee: [Movement] [Self] When the goblin drops to low health, it runs away using its Full Action to add 10 ft to its Movement.',
        'Throw: [Action] [Ranged] The goblin throws rocks, trash, or other small debris at a target within 20 ft, making a basic ranged attack. Deals 2 Blunt damage.',
        'Shoot: [Action] [Ranged] The goblin uses a small pistol or bow to shoot at a target within 30 ft, making a basic ranged attack. Deals 1d6+2 Sharp damage.'
      ]
    }
  ],// lv1
  [// lv2
    {
      name: 'Goblin Witchdoctor',
      description: 'When a goblin child shows it has "The Gift" it is chosen to be trained by the current tribe witchdoctor. Its taught the uses of herbs and how to use its strong spirit to heal allies and curse enemies. When it comes of age, if the current witchdoctor is still alive, it will take a few goblins from the tribe to break off and form a new tribe in a new territory. Some witchdoctors have been known to speak the language of nearby civilized races, though they rarely develop anything better than an uneasy truce with their neighbors.',
      image: null,
      attributes: '[Green] [Goblin] [Biological] [Power]', 
      level: 2,
      stats: {
        'actions': 2,
        'life': 2,
        'survival': 10,
        'avoidance': 13,
        'speed': '1d4+2, +1 Initiative',
        'strength': 0,
        'agility': 2,
        'stamina': 0,
        'will': 1
      },
      skills:[ 
        'Athletics: 0',
        'Martial Arms: 0',
        'Marksmanship: 2',
        'Power: 4',
        'Block: 0',
        'Unarmed Combat: 0',
        'Sneak: 2',
        'Hide: 2',
        'Awareness: 4',
        'Search: 0',
        'Insight: 0',
        'Disruption: -2'
      ],
      actions: [
        'Bash: [Action] [Melee] The goblin swings its weapon at a melee target, making a basic melee attack. Deals 1d4+1 Blunt damage.',
        'Flee: [Movement] [Self] When the goblin drops to low health, it runs away using its Full Action to add 10 ft to its Movement.',
        'Throw: [Action] [Ranged] The goblin throws rocks, trash, or other small debris at a target within 20 ft, making a basic ranged attack. Deals 2 Blunt damage.',
        'Shoot: [Action] [Ranged] The goblin uses a small pistol or bow to shoot at a target within 30 ft, making a basic ranged attack. Deals 1d6+2 Sharp damage.',
        'Medicinal Herb: [Action] [Melee] The witchdoctor rubs some herbs into the wound of an ally and says a word of power, healing them for 1d6+1 damage.',
        'Hex: [Action] [Ranged] The witchdoctor points at a creature and angry shouts a word of power while making a Power attack against it. On a Success the creature receives an Unfavored -1 on its next d20 roll and for 1 minute it increases all injury severity rolls by 1.'
      ]
    },
    {
      name: 'Bob',
      description: 'Oh no its bob',
      image: null,
      attributes: '[Bob] [Human] [Biological]',
      level: 2,
      stats: {
        'actions': 5,
        'life': 10,
        'survival': 100,
        'avoidance': 20,
        'speed': '2d8',
        'strength': 10,
        'agility': 10,
        'stamina': 10,
        'will': 10
      },
      skills:[
        'Athletics: 10',
        'Martial Arms: 10',
        'Marksmanship: 10',
        'Power: 10',
        'Block: 10',
        'Unarmed Combat: 10',
        'Sneak: 10',
        'Hide: 10',
        'Awareness: 10',
        'Search: 10',
        'Insight: 10',
        'Disruption: 10'
      ],
      actions: [
        'Wreck: [Action] [Ranged] Bob wrecks everyone\'s shit in a 100ft radius, dealing 10d10 Bob damage.'
      ]
    }
  ],// lv2
  [// lv3
    {
      name: 'Mountain Troll',
      description: 'Trolls from a mountainous region are large and typically broader in build than other types of Troll. Their skin has the consistency of a boulder and their large heads and hands intimidate any wild animals they come across. A Mountain Troll typically lives alone and rarely ventures further than a few miles from the cave it dwells within, only travelling further if it struggles to find food. They can consume any vegetation or animals they can catch, and can resort to eating trees when desperate.',
      image: null,
      attributes: '[Troll] [Biological]',
      level: 3,
      stats: {
        'actions': 2,
        'life': 6,
        'survival': 22,
        'avoidance': 18,
        'speed': '1d4+3',
        'strength': 10,
        'agility': 0,
        'stamina': 8,
        'will': 0
      },
      skills:[
        'Athletics: 9',
        'Martial Arms: 5',
        'Marksmanship: -2',
        'Power: -2',
        'Block: 5',
        'Unarmed Combat: 9',
        'Sneak: -2',
        'Hide: 4',
        'Awareness: 6',
        'Search: 0',
        'Insight: -2',
        'Disruption: 7'
      ],
      actions: [ // write various actions here
        'Smash: [Action] [Melee] The Troll brings down its fist on a creature, dealing 1d8+10 Blunt damage.',
        'Swing: [Action] [Melee] The Troll swings a tree or other large object at a creature, dealing 1d12+10 Blunt damage.',
        'Hard Skin: [Passive] [Self] The Troll has a hard layer of rock-like skin reducing damage it takes from Physical attacks by 5.',
        'Regeneration: [Passive] [Self] Trolls have a naturally high regeneration, causing them to restore 1d4 Survival at the beginning of each turn. If the Troll is at full Survival at the start of its turn it rolls a d4, on a 4 it restores 1 Life. The Troll does not benefit from regeneration if it took any Fire or Nature damage after its previous turn.'
      ]
    }
  ]// lv3
]
}
/*
{ // select all this to copy paste, and if you highlight it all and ctrl+/ it will comment/uncomment it all
  name: '',
  description: '',
  image: '',
  attributes: '',  // arbitrary, used for searching
  level: 0,
  stats: {
    'actions': 0,
    'life': 0,
    'survival': 0,
    'avoidance': 0,
    'speed': '',
    'strength': 0,
    'agility': 0,
    'stamina': 0,
    'will': 0
  },
  skills:[ // you can add other skills if they'd be relevant to the creature, these ones are just the combat related ones
    'Athletics: 0',
    'Martial Arms: 0',
    'Marksmanship: 0',
    'Power: 0',
    'Block: 0',
    'Unarmed Combat: 0',
    'Sneak: 0',
    'Hide: 0',
    'Awareness: 0',
    'Search: 0',
    'Insight: 0',
    'Disruption: 0'
  ],
  actions: [ // write various actions here
    '',
    ''
  ]
}
*/