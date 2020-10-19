import React from 'react';
export default {
  name: 'Melee Weapons',
  description: <p>
    When making a Melee Attack while a Melee Weapon is equipped, use the damage listed on the weapon. You may only use a weapon to attack if you meet the Strength and Agility Requirements and have enough available hands. 
    If you are wielding a weapon in your Off-Hand (your Character's non-dominant hand) receive an Unfavored -1 on all of your Melee Attacks. If a weapon has both one-handed and two-handed tags you may use it in either way, use the damage listed to the left for one-handed and to the right for two-handed (eg. "1d6/1d8 Sharp" 1d6 is for one-handed and 1d8 is for two-handed).<br/><br/>
    Different types of weapon provide additional effects (some numbers may increase for high quality or Runic weapons):
    <ul>
      <li>Swords: Increase Avoidance by 1.</li>
      <li>Daggers: Deal an additional 1d4 damage on a Hard Success.</li>
      <li>Axes: Ignore 2 points of Armor. Two-Handed Axes ignore 4.</li>
      <li>Maces: Knock the victim prone when dealing an Injury.</li>
      <li>Spears: Roll double the damage dice on a Critical hit.</li>
      <li>Kamas/Scythes: On a Hard Success apply a 2 turn Bleed.</li>
      <li>Halberds: Dismount the victim on a Hard Success. Also, roll double the damage dice on a Critical hit.</li>
      <li>Staves: Double the impede effect during an Opportunity.</li>
    </ul>
  </p>,
  stats: ['price', 'damage', 'strength', 'agility', 'tags'],
  equipment: [ 
    {
      name: 'Rusted Pipe',
      description: 'A used bit of metal pipe used as a blunt weapon.',
      price: 0.5,
      damage: '1d6 Blunt',
      strength: 1,
      agility: '-',
      weight: 1,
      tags: 'one-handed, metal, mace'
    },
    {
      name: 'Shiv',
      description: 'A small sharp object used as a weapon.',
      price: 0.5,
      damage: '1d6 Sharp',
      strength: '-',
      agility: 1,
      weight: 1,
      tags: 'one-handed, dagger'
    },
    {
      name: 'Iron Shortsword',
      description: 'A clean blade made from basic Iron, used by local militia and low-rank security workers.',
      price: 3,
      damage: '1d8 Sharp',
      strength: 1,
      agility: '-',
      weight: 1,
      tags: 'one-handed, metal, sword'
    },
    {
      name: 'Silver Shortsword',
      description: 'A high quality blade made of silver. This damage may be considered Spirit if needed to avoid damage immunity. Increases Avoidance by an additional 1.',
      price: 50,
      damage: '1d8 Sharp',
      strength: 1,
      agility: '-',
      weight: 1,
      tags: 'one-handed, metal, sword'
    },
    {
      name: 'Iron Mallet',
      description: 'A sturdy hammer with a rectangular head. Used by craftsman and thugs alike for its effective impact.',
      price: 2.5,
      damage: '1d8 Blunt',
      strength: 2,
      agility: '-',
      weight: 1,
      tags: 'one-handed, metal, mace'
    },
    {
      name: 'Hatchet',
      description: 'A small axe used by huntsmen and bandits alike.',
      price: 0,
      damage: '1d8 Sharp',
      strength: 2,
      agility: '-',
      weight: 1,
      tags: 'one-handed, metal, axe'
    },
    {
      name: 'Iron Longsword',
      description: 'A clean blade made from basic Iron, used by mercenaries and soldiers.',
      price: 10,
      damage: '1d8/1d10 Sharp',
      strength: 2,
      agility: 1,
      weight: 2,
      tags: 'one-handed, two-handed, metal, sword'
    },
    {
      name: 'Iron Sledgehammer',
      description: 'A long necked hammer with large rectangular head. Used by construction workers and adventurers for its heavy blows. -1 Speed while equipped.',
      price: 10,
      damage: '1d12 Blunt',
      strength: 3,
      agility: 1,
      weight: 3,
      tags: 'two-handed, metal, slow, mace'
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
  weight: 0,
  tags: ''
}
*/