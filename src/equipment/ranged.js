import React from 'react';
export default {
  name: 'Ranged Weapons',
  description: <p>
    When making a Ranged Attack while a Ranged Weapon is equipped, use the damage listed on the weapon. You may only use a weapon to attack if you meet the Agility Requirement and have enough available hands. Many weapons use some form of ammunition, you may carry up to 30 units of ammunition in a basic pack.
    If you are wielding a weapon in your Off-Hand (your Character's non-dominant hand) receive an Unfavored -1 on all of your Ranged Attacks. You may only make a Ranged Attack on a creature within your Ranged Weapon's listed Range.
  </p>,
  stats: ['price', 'damage', 'range', 'agility', 'tags'],
  equipment: [ 
    {
      name: 'Short Bow',
      description: 'A simple bow made of a flexible wood. Used by hunters or travellers.',
      price: 5,
      damage: '1d6',
      range: '30 ft',
      agility: '2',
      weight: 1,
      tags: 'wood, bow'
    },
    {
      name: 'Musket',
      description: 'A muzzle-loaded hand cannon which takes black powder and shot to deal moderate damage at superior range. Requires 1 Action to load the shot before attacking.',
      price: 20,
      damage: '1d12',
      range: '100 ft',
      agility: '1',
      weight: 2,
      tags: 'gun'
    },
    {
      name: 'Small Crossbow',
      description: 'A simple crossbow which fires a bolt at a superior range. Requires 1 Action to load the shot before attacking.',
      price: 10,
      damage: '1d8',
      range: '100 ft',
      agility: '1',
      weight: 2,
      tags: 'crossbow'
    },
    {
      name: 'Longbow',
      description: 'A larger bow made of a higher quality wood. Used by archers in the military.',
      price: 20,
      damage: '1d8',
      range: '60 ft',
      agility: '3',
      weight: 2,
      tags: 'wood, bow'
    },
    {
      name: 'Sling',
      description: 'A small sling for flinging stones and small objects. Spending 1 Action to scavenge may gain you ammo for the Sling.',
      price: 1,
      damage: '1d4',
      range: '30 ft',
      agility: '2',
      weight: 0,
      tags: 'sling'
    }
  ]
}
/*
{
  name: '',
  description: '',
  price: 0,
  damage: '',
  range: '',
  agility: '-',
  weight: 0,
  tags: ''
}
*/