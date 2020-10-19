import React from 'react';
export default {
  name: 'Armor',
  description: <p>
    Armor comes in multiple kinds. Simple leather, metal rings or full plate may protect the wearer from harm but are heavy and cumbersome. You may wear 1 piece of Armor on your Torso and 1 on your Legs, some Armor may be used along side these. Some Runic armor can be light-weight and protect you from immediate damage by providing shielding but when the shielding runs out becomes only regular cloth until the shielding recharges.
    When it is active, it provides you with an amount of Shielding and may also increase your Avoidance. When the Shielding runs out, the rune fails and no longer is active and no longer provides any Avoidance. The rune recharges and comes back on after taking a Break or a Full Sleep. 
    Armor can weigh a considerable amount, you can only equip a piece of Armor if you meet the required Strength.
  </p>,
  stats: ['price', 'armor', 'shielding', 'avoidance', 'strength', 'weight', 'tags'],
  equipment: [ 
    {
      name: 'Leather Jacket',
      description: 'A simple jacket made with half-inch thick leather, provides mild protection. Can be worn with torso armor.',
      price: 5,
      armor: 1,
      shielding: 0,
      avoidance: 0,
      strength: '1',
      weight: 1,
      tags: 'leather, armor'
    },
    {
      name: 'Chain Shirt',
      description: 'A simple chain shirt made of ring-mail, heavy but provides moderate protection. Subtract 1 from Severity rolls towards Upper Torso Injury. Reduces Speed by 1.',
      price: 30,
      armor: 4,
      shielding: 0,
      avoidance: 1,
      strength: '4',
      weight: 3,
      tags: 'chain, torso, armor, slow, severity'
    },
    {
      name: 'Leather Vest',
      description: 'A vest made of hardened leather, provides mild protection.',
      price: 15,
      armor: 1,
      shielding: 0,
      avoidance: 2,
      strength: '1',
      weight: 1,
      tags: 'leather, torso, armor'
    },
    {
      name: 'Wool Cloak',
      description: 'A simple cloak made of woven wool. Protects you from cold temperature, lowering the threshold for climate effects by 10°F.',
      price: 10,
      armor: 0,
      shielding: 0,
      avoidance: 1,
      strength: '0',
      weight: 1,
      tags: 'cloth'
    },
    {
      name: 'Runic Cloak',
      description: 'A plain wool cloak with a glowing rune upon the inner lining. Provides minor shielding. Can be worn with torso armor.',
      price: 15,
      armor: 0,
      shielding: 4,
      avoidance: 1,
      strength: '0',
      weight: 1,
      tags: 'cloth, runic'
    },
    {
      name: 'Runic Belt',
      description: 'A simple leather belt with a glowing rune weaving along the interior. Provides minor shielding. Can be worn with leg armor.',
      price: 15,
      armor: 0,
      shielding: 4,
      avoidance: 0,
      strength: '0',
      weight: 0,
      tags: 'leather, runic'
    }
  ]
}
/*
{
  name: '',
  description: '',
  price: 0,
  armor: 0,
  shielding: 0,
  avoidance: 0,
  strength: '-',
  weight: 0,
  tags: ''
}
*/