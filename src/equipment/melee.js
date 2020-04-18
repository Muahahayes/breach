import React from 'react';
export default {
  name: 'Melee Weapons',
  description: <p>Bash people over the head. You may only use a weapon to attack if you meet the Strength and Agility Requirements and have enough available hands.</p>,
  stats: ['price', 'damage', 'strength', 'agility', 'tags'],
  equipment: [ 
    {
      name: 'Rusted Pipe',
      description: 'A used bit of metal pipe used as a blunt weapon.',
      price: 5,
      damage: '1d6 Blunt',
      strength: 1,
      agility: '-',
      tags: 'one-handed'
    }
  ]
}
/*
{
  name: '',
  description: '',
  price: 0,
  damage: '',
  strength: '-',
  agility: '-',
  tags: ''
}
*/