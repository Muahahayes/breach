import React from 'react';
import { Link } from 'react-router-dom';
export default {
name: 'Undead',
description: <p>Creature's that have been brought back from death into varying states of life or undeath.</p>,
creatures:[
  [ // lv0

  ], // lv0
  [// lv1
    { // select all this to copy paste
      name: 'Thrall',
      description: `A lifeless corpse given automation again by Aether, their eyes are dull and void of whatever mind they once had. Thrall\'s are created by dark magics and are seen as unholy desecrations of the dead. A Thrall may be given basic commands by its creator to follow, but many are old and forgotten which act on a base instinct to feed on living flesh.`,
      image: '',
      attributes: '[Mindless]', // arbitrary, used for searching
      level: 1,
      stats: {
        'actions': 1,
        'life': 1,
        'survival': 10,
        'avoidance': 10,
        'speed': '1d4',
        'strength': 1,
        'agility': -1,
        'stamina': 0,
        'will': -3
      },
      skills:[ // you can add other skills if they'd be relevant to the creature, these ones are just the combat related ones
        'Athletics: 1',
        'Martial Arms: 1',
        'Marksmanship: 0',
        'Power: 0',
        'Block: 1',
        'Unarmed Combat: 2',
        'Sneak: 1',
        'Hide: 1',
        'Awareness: 0',
        'Search: 0',
        'Insight: 0',
        'Disruption: 2'
      ],
      actions: [ // write various actions here
        `Bash: [Action] [Melee] The Thrall swings its arms at a melee target, making a melee attack roll. Deals 1d4+1 damage.`,
        `Bite: [Action] [Melee] The Thrall bites onto a melee target, making a melee attack roll with Unfavored -1. Deals 1d4+1 damage and applies a Poison which deals 1 nature damage per turn, with a Stamina check of [10]`
      ]
    } // end of a creature, select up to this point to copy paste
  ],
  [// lv2

  ],// lv2
  [// lv3
    { // select all this to copy paste
        name: `Wight`,
        description: `A deceased person brought back to life by reinfusing their Aether into their corpse. A failed ressurection, with no past memories and limited power. Despite having no memory of their mortal life, often some negative emotions will persist in death and motivate the Wight's behavior.`,
        image: ``,
        attributes: `[Sentient]`, // arbitrary, used for searching
        level: 3,
        stats: {
          'actions': 2,
          'life': 5,
          'survival': 15,
          'avoidance': 14,
          'speed': '1d6+1',
          'strength': 2,
          'agility': 2,
          'stamina': 2,
          'will': 1
        },
        skills:[ // you can add other skills if they'd be relevant to the creature, these ones are just the combat related ones
          'Athletics: 2',
          'Martial Arms: 3',
          'Marksmanship: 3',
          'Power: 2',
          'Block: 2',
          'Unarmed Combat: 2',
          'Sneak: 2',
          'Hide: 2',
          'Awareness: 3',
          'Search: 2',
          'Insight: 0',
          'Disruption: 1'
        ],
        actions: [ // write various actions here
          `Strike: [Action] [Melee] The Wight swings its weapon at a melee target, making a melee attack roll. Deals 1d10+2 damage.`,
          `Command: [Action] [Ranged] The Wight calls out to any undead creature in the area which is of lesser level than the Wight and is not currently under another creature's control. They give a command for the undead to perform an Action.`,
          `Shoot: [Action] [Ranged] The Wight uses a ranged weapon to shoot at a target within 30 ft, making a ranged attack roll. Deals 1d8+2 damage.`,
          `Use Power: [Optional] [Action] The Wight may use a Power it had in life, the GM selects what powers (if any) it might have.`
        ]
      }
  ]// lv3
]
}