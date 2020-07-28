import React from 'react';
export default {
  name: 'Ranged Weapons',
  description: <p>
    When making a Ranged Attack while a Ranged Weapon is equipped, use the damage listed on the weapon. You may only use a weapon to attack if you meet the Agility and Will Requirements and have enough available hands. 
    If you are wielding a weapon in your Off-Hand (your Character's non-dominant hand) receive an Unfavored -1 on all of your Ranged Attacks. You may only make a Ranged Attack on a creature within your Ranged Weapon's listed Range.
  </p>,
  stats: ['price', 'damage', 'range', 'will', 'agility', 'tags'],
  equipment: [ ]
}
/*
{
  name: '',
  description: '',
  price: 0,
  damage: '',
  range: '',
  will: '-',
  agility: '-',
  weight: 0,
  tags: ''
}
*/