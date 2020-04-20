import React from 'react';
export default {
  name: 'Melee Weapons',
  description: <p>
    When making a Melee Attack while a Melee Weapon is equipped, use the damage listed on the weapon. You may only use a weapon to attack if you meet the Strength and Agility Requirements and have enough available hands. 
    If you are wielding a weapon in your Off-Hand (your Character's non-dominant hand) receive an Unfavored -1 on all of your Melee Attacks.
  </p>,
  stats: ['price', 'damage', 'strength', 'agility', 'tags'],
  equipment: [ 
    {
      name: 'Rusted Pipe',
      description: 'A used bit of metal pipe used as a blunt weapon.',
      price: 5,
      damage: '1d6 + Strength Blunt',
      strength: 1,
      agility: '-',
      tags: 'one-handed, metal'
    },
    {
      name: 'Shiv',
      description: 'A small sharp object used as a sharp weapon.',
      price: 5,
      damage: '1d6 + Agility Sharp',
      strength: '-',
      agility: 1,
      tags: 'one-handed'
    },
    {
      name: 'Iron Shortsword',
      description: 'A clean blade made from basic Iron, used by local militia and low-rank security workers.',
      price: 20,
      damage: '1d8 + Strength Sharp',
      strength: 1,
      agility: '-',
      tags: 'one-handed, metal'
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