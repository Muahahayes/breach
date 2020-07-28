import React from 'react';
export default {
  name: 'Aegis',
  description: <p>
    An Aegis unit is a small more focused Hard Light Plate localized in an area, usually on a forearm. While it is active, it may increase your Avoidance and also provides further benefits while you Block. 
    While you are Blocking, gain Avoidance from your active Aegis. When you use the Block action with an Aegis, add the Aegis's Reduction to the damage reduced by the Block. 
    After you have Blocked a number of hits equal to the Aegis' threshold, the Aegis fails and shuts off. The Aegis recharges after taking a Break or Full Sleep. You may only 
    equip an Aegis if you meet the required Strength.
  </p>,
  stats: ['price', 'avoidance', 'hits', 'reduction', 'strength', 'tags'],
  equipment: [ 
    {
      name: 'Off-Brand AGS Mk1',
      description: 'A poor reproduction of the AGS Mk1 for use to protect oneself from thugs and miscreants in lower society.',
      price: 100,
      avoidance: 1,
      hits: 5,
      reduction: 2,
      strength: 2,
      weight: 2,
      tags: 'Off-Brand'
    },
    {
      name: 'AGS Mk1',
      description: 'The AGS Mk1 is the standard issue Aegis for bodyguards and security escorts. A basic unit with average value in each stat.',
      price: 200,
      avoidance: 1,
      hits: 10,
      reduction: 5,
      strength: 2,
      weight: 2,
      tags: 'AGS'
    },
    {
      name: 'Splint-Light',
      description: 'The Splint-Light is designed for deflecting blows rather than blocking them. It has a low threshold for protection but allows to user to avoid hits more easily.',
      price: 250,
      avoidance: 4,
      hits: 2,
      reduction: 3,
      strength: 1,
      weight: 1,
      tags: 'Splint'
    },
    {
      name: 'Bulwark A1',
      description: 'Bulwark\'s A1 model is designed to take hits and is used by security forces to shut down riots.',
      price: 300,
      avoidance: -1,
      hits: 20,
      reduction: 5,
      strength: 3,
      weight: 2,
      tags: 'Bulwark'
    },
    {
      name: 'AGS Mk2',
      description: 'AGS\' 2nd model is a minor upgrade over the original, with higher reduction and a slightly improved capacity to handle hits.',
      price: 300,
      avoidance: 1,
      hits: 12,
      reduction: 8,
      strength: 2,
      weight: 2,
      tags: 'AGS'
    },
    {
      name: 'The Imposing Barrier',
      description: 'This marvel of runic craftsmanship has no signature and no known date of creation. The Aether imbued into the device protects the wearer even while the device is inactive, granting the Avoidance benefit even while not blocking or while the unit has otherwise failed.',
      price: 20000,
      avoidance: 3,
      hits: 20,
      reduction: 10,
      strength: 3,
      weight: 3,
      tags: 'Unique, Special'
    }
  ]
}
/*
{
  name: '',
  description: '',
  price: 0,
  avoidance: 0,
  hits: 0,
  reduction: 0,
  strength: '-',
  weight: 0,
  tags: ''
}
*/