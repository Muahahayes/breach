import React from 'react';
export default {
  name: 'Shields',
  description: <p>
    A shield is a plate of hard material used to block attacks and protect the user, providing passive Armor. When you Block add the shield's Reduction to the damage reduction of your Block.

    {/* An Aegis unit is a small more focused Hard Light Plate localized in an area, usually on a forearm. While it is active, it may provide benefits while you Block. 
    While you are Blocking, gain armor from your active Aegis. When you use the Block action with an Aegis, add the Aegis's Reduction to the damage reduced by the Block. 
    After you have Blocked a number of hits equal to the Aegis' threshold, the Aegis fails and shuts off. The Aegis recharges after taking a Break or Full Sleep. You may only 
    equip an Aegis if you meet the required Strength. */}
  </p>,
  stats: ['price', 'armor', 'reduction', 'strength', 'tags'],
  equipment: [ 
    {
      name: 'Wooden Shield',
      description: 'A simple wood disk for use to protect oneself from thugs and miscreants in lower society.',
      price: 5,
      armor: 2,
      reduction: 2,
      strength: 1,
      weight: 1,
      tags: 'wooden'
    },
    {
      name: 'Iron Shield',
      description: 'A plain plate of metal used by bodyguards and security escorts. A basic unit with average value in each stat.',
      price: 10,
      armor: 2,
      reduction: 4,
      strength: 2,
      weight: 2,
      tags: 'iron'
    },
    {
      name: 'Iron Buckler',
      description: 'A smaller disk of metal which is designed for deflecting blows rather than blocking them. It has a low threshold for protection but allows to user to avoid hits more easily, granting +1 Avoidance.',
      price: 10,
      armor: 2,
      reduction: 1,
      strength: 1,
      weight: 1,
      tags: 'iron, buckler'
    },
    {
      name: 'Steel Shield',
      description: 'A stronger plate of heavy steel which is designed to take heavier hits and is used by security forces to shut down riots. The shield is thicker than a typical shield and is more difficult to use.',
      price: 25,
      armor: 2,
      reduction: 6,
      strength: 3,
      weight: 2,
      tags: 'steel'
    },
    {
      name: 'Silver Shield',
      description: 'A gleeming plate of higher quality metal with runes of protection engraved on the interior side.',
      price: 50,
      armor: 2,
      reduction: 6,
      strength: 2,
      weight: 1,
      tags: 'silver'
    },
    {
      name: 'The Imposing Barrier',
      description: 'This marvel of runic craftsmanship has no signature and no known date of creation. The Aether imbued into the device protects the wearer from heavy blows and reduces the Severity rolls of Arm Injury by 1.',
      price: 1000,
      armor: 4,
      reduction: 10,
      strength: 4,
      weight: 3,
      tags: 'unique, special'
    }
  ]
}
/*
{
  name: '',
  description: '',
  price: 0,
  armor: 0,
  hits: 0,
  reduction: 0,
  strength: '-',
  weight: 0,
  tags: ''
}
*/