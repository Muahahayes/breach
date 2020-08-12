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
      attributes: '[Human]',  // arbitrary, used for searching
      level: 0,
      stats: {
        'actions': 1,
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
        'actions': 1,
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
        'Bash: [Action] [Melee] The goblin swings its weapon at a melee target, making a basic melee attack. Deals 1d4+1 damage.',
        'Flee: [Movement] [Self] When the goblin drops to low health, it runs away using its Full Action to add 10 ft to its Movement.',
        'Throw: [Action] [Ranged] The goblin throws rocks, trash, or other small debris at a target within 20 ft, making a basic ranged attack. Deals 2 damage.',
        'Shoot: [Action] [Ranged] The goblin uses a small pistol or bow to shoot at a target within 30 ft, making a basic ranged attack. Deals 1d6+2 damage.'
      ]
    }
  ],// lv1
  [// lv2
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
  ]// lv2
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