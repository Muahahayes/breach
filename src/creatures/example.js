import React from 'react';
import { Link } from 'react-router-dom';
export default {
name: 'name',
description: <p>blahblah</p>,
creatures:[
  [// 1G
    { // select all this to copy paste, and if you highlight it all and ctrl+/ it will comment/uncomment it all
      name: '',
      description: '',
      image: '',
      attributes: '', // arbitrary, used for searching
      level: 0,
      stats: {
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
  ],
  [// 2G

  ]//ect
]
}