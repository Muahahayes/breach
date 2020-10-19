import React from 'react';
import { Link } from 'react-router-dom';
export default {
name: 'Beast',
description: <p>Wild creatures of the natural world.</p>,
creatures:[
  [// lv0

  ],
  [// lv1
  ],
  [// lv2
    {
      name: `Dire Wolf`,
      description: `Large wolves standing up to 5 feet tall from paw to shoulder and 9 feet long from snout to rear (up to 12 counting their tail). They have a long ancestry to Syff the mother wolf, who was infused with power from the world soul when the world was young and was a dedicated companion of the Moon. They travel in packs and live in forests in the mountainous regions of the world where they can see the moon and call out to her. As mountain spirits die the dire wolves may be driven off the slopes in fear and become confused by new moons when the sky is dark and there is no mountain spirit to calm them in her absence.`,
      image: null,
      attributes: `[Wolf] [Mammal]`,
      level: 2,
      stats: {
        'actions': 2,
        'life': 3,
        'survival': 15,
        'avoidance': 14,
        'speed': '1d6+2',
        'strength': 5,
        'agility': 2,
        'stamina': 6,
        'will': -1
      },
      skills:[
        'Athletics: 5',
        'Martial Arms: -2',
        'Marksmanship: -2',
        'Power: -2',
        'Block: -2',
        'Unarmed Combat: 5',
        'Sneak: 0',
        'Hide: 2',
        'Awareness: 5',
        'Search: 5',
        'Insight: 0',
        'Disruption: 0'
      ],
      actions: [
        `Bite: [Action] [Melee] The wolf attacks with his sharp fangs making an Unarmed attack. Deals 1d6+5 Sharp damage.`,
        `Howl: [Action] [Ranged] The wolf raises its head to the sky and lets out a resonating howl. Often used when the Wolf has lost 3 Life. Creatures within 30 ft must make a Will Save vs 10, on a Soft Fail they receive an Unfavored -1 on their next attack or power roll. On a Hard Fail they are Feared for 1 turn instead. Nearby wolves will react to the howl and focus their attention on the creatures nearest the injured wolf.`,
        `Leap: [Action] [Melee] The wolf may leap at a creature within 15 ft. The creature must make a Strength Save vs 15, on a Fail it is knocked prone. The wolf may not use its Movement Action or Leap on its next turn.`
      ]
    }  
  ],//ect
  [
    {
      name: `Dire Wolf Pack Mother`,
      description: `The largest and strongest wolf in a pack of Dire Wolves. An intimidating figure reaching 7 feet tall at the shoulder and 12 feet long from snout to rear (up to 15 counting their tail). The Pack Mother is the matriarch of her pack and views all her wolves as her children, she has a commanding aura and is rarely seen without other wolves following beside her.`,
      image: null,
      attributes: `[Wolf] [Mammal]`,
      level: 3,
      stats: {
        'actions': 2,
        'life': 4,
        'survival': 18,
        'avoidance': 14,
        'speed': '1d6+3',
        'strength': 6,
        'agility': 2,
        'stamina': 6,
        'will': -1
      },
      skills:[
        'Athletics: 7',
        'Martial Arms: -2',
        'Marksmanship: -2',
        'Power: -2',
        'Block: -2',
        'Unarmed Combat: 7',
        'Sneak: 0',
        'Hide: 2',
        'Awareness: 6',
        'Search: 6',
        'Insight: 1',
        'Disruption: 1'
      ],
      actions: [
        `Bite: [Action] [Melee] The wolf attacks with his sharp fangs making an Unarmed attack. Deals 1d6+6 Sharp damage.`,
        `Howl: [Action] [Ranged] The wolf raises its head to the sky and lets out a resonating howl. Often used when the Wolf has lost 3 Life. Creatures within 30 ft must make a Will Save vs 11, on a Soft Fail they receive an Unfavored -1 on their next attack or power roll. On a Hard Fail they are Feared for 1 turn instead. Nearby wolves will react to the howl and focus their attention on the creatures nearest the injured wolf.`,
        `Leap: [Action] [Melee] The wolf may leap at a creature within 15 ft. The creature must make a Strength Save vs 16, on a Fail it is knocked prone. The wolf may not use its Movement Action or Leap on its next turn.`,
        `Pack Mother: [Passive] Nearby wolves will prioritize protecting the Pack Mother during a fight. If the Pack Mother sees one of her wolves die she will go into a rage, gaining an additional Action on her next turn.`
      ]
    }
  ]
]
}

/*
{
      name: ``,
      description: ``,
      image: ``,
      attributes: ``,
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
      skills:[
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
      actions: [
        ``,
        ``
      ]
    }  
*/