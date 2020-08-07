import React from 'react';
import { Link } from 'react-router-dom';
export default {
name: 'name',
description: <p>blahblah</p>,
creatures:[
  [// lv1
    
    //start of creature
    { // select all this to copy paste
      name: ``,
      description: ``,
      image: ``,
      attributes: ``, // arbitrary, used for searching
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
        ``,
        ``
      ]
    }  
    // end of a creature, select up to this point to copy paste

  ],
  [// lv2

  ]//ect
]
}