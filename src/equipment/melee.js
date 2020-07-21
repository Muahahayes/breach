import React from 'react';
export default {
  name: 'Melee Weapons',
  description: <p>
    When making a Melee Attack while a Melee Weapon is equipped, use the damage listed on the weapon. You may only use a weapon to attack if you meet the Strength and Agility Requirements and have enough available hands. 
    If you are wielding a weapon in your Off-Hand (your Character's non-dominant hand) receive an Unfavored -1 on all of your Melee Attacks. If a weapon has both one-handed and two-handed tags you may use it in either way, use the damage listed to the left for one-handed and to the right for two-handed (eg. "1d6/1d8 + Strength Sharp" 1d6 is for one-handed and 1d8 is for two-handed).
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
      price: 10,
      damage: '1d6 + Agility Sharp',
      strength: '-',
      agility: 1,
      tags: 'one-handed'
    },
    {
      name: 'Iron Shortsword',
      description: 'A clean blade made from basic Iron, used by local militia and low-rank security workers.',
      price: 30,
      damage: '1d8 + Strength Sharp',
      strength: 1,
      agility: '-',
      tags: 'one-handed, metal'
    },
    {
      name: 'Iron Mallet',
      description: 'A sturdy hammer with a rectangular head. Used by craftsman and thugs alike for its effective impact.',
      price: 25,
      damage: '1d8 + Strength Blunt',
      strength: 2,
      agility: '-',
      tags: 'one-handed, metal'
    },
    {
      name: 'Iron Longsword',
      description: 'A clean blade made from basic Iron, used by mercenaries and soldiers.',
      price: 50,
      damage: '1d8/1d10 + Strength Sharp',
      strength: 2,
      agility: 1,
      tags: 'one-handed, two-handed, metal'
    },
    {
      name: 'Iron Sledgehammer',
      description: 'A long necked hammer with large rectangular head. Used by construction workers and adventurers for its heavy blows. -1 Speed while equipped.',
      price: 40,
      damage: '1d12 + Strength Blunt',
      strength: 3,
      agility: 1,
      tags: 'two-handed, metal, slow'
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