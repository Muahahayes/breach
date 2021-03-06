import React from 'react';
export default {
  name: 'Deflectors',
  description: <p>
    A Personal Deflector is a Rune enscribed upon a metal crest worn upon your chest, which emits a small field around the individual's body that reacts to high velocity objects and repels them to reduce their force. 
    When you are hit by a Ranged Attack, reduce the damage dealt by the Reduction listed on your Deflector (to a minimum of 1).
  </p>,
  stats: ['price', 'reduction', 'tag'],
  equipment: [
    {
      name: 'Off-brand Dx100',
      description: 'An unlicensed reproduction of a Dx100 Personal Deflector, a knock-off of a low grade unit that offers little protection.',
      price: 40,
      reduction: 2,
      weight: 1,
      tag: 'personal'
    },
    {
      name: 'Off-brand Dx200',
      description: 'An unlicensed reproduction of a Dx200 Personal Deflector',
      price: 75,
      reduction: 4,
      weight: 1,
      tag: 'personal'
    },
    {
      name: 'Dx100 PD',
      description: 'An official Dx100 Personal Deflector, an entry level unit for the general public.',
      price: 60,
      reduction: 3,
      weight: 1,
      tag: 'personal'
    },
    {
      name: 'Dx200 PD',
      description: 'An official Dx200 Personal Deflector, the standard unit for low-rank security workers in many agencies.',
      price: 100,
      reduction: 5,
      weight: 2,
      tag: 'personal'
    }
  ]
}
/* 
{
  name: '',
  description: '',
  price: 0,
  reduction: 0,
  weight: 0,
  tag: ''
}
*/