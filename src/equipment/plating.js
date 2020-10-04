import React from 'react';
export default {
  name: 'Armor',
  description: <p>
    Armor comes in multiple kinds. Simple leather, metal rings or full plate may protect the wearer from harm but are heavy and cumbersome. Some Runic armor can be light-weight and protect you from immediate damage by providing shielding but when the shielding runs out becomes only regular cloth until the shielding recharges.
    When it is active, it provides you with an amount of Shielding and may also increase your Avoidance. When the Shielding runs out, the rune fails and no longer is active and no longer provides any Avoidance. The rune recharges and comes back on after taking a Break or a Full Sleep. 
    Armor can weigh a considerable amount, you can only equip a piece of Armor if you meet the required Strength.
  </p>,
  stats: ['price', 'reduction', 'shielding', 'avoidance', 'strength', 'weight', 'tags'],
  equipment: [ 
    {
      name: 'Leather Jacket',
      description: 'A simple jacket made with half-inch thick leather, protects from mild Physical damage.',
      price: 5,
      reduction: 1,
      shielding: 0,
      avoidance: 2,
      strength: '1',
      weight: 1,
      tags: 'leather, armor'
    },
    {
      name: 'Chain Shirt',
      description: 'A simple chain shirt made of ring-mail, heavy but protects from moderate Physical damage. Subtract 1 from Severity rolls towards Upper Torso Injury. Reduces Speed by 1.',
      price: 20,
      reduction: 4,
      shielding: 0,
      avoidance: 3,
      strength: '4',
      weight: 3,
      tags: 'chain, armor, slow, severity'
    },
    {
      name: 'Runic Cloak',
      description: 'A plain wool cloak with a glowing rune upon the inner lining. Provides minor shielding.',
      price: 10,
      reduction: 0,
      shielding: 4,
      avoidance: 2,
      strength: '0',
      weight: 1,
      tags: 'cloth, runic'
    },
    {
      name: 'Runic Belt',
      description: 'A simple leather belt with a glowing rune weaving along the interior. Provides minor shielding.',
      price: 5,
      reduction: 0,
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
  reduction: 0,
  shielding: 0,
  avoidance: 0,
  strength: '-',
  weight: 0,
  tags: ''
}
*/