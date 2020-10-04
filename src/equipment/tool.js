import React from 'react';
export default {
  name: 'Tools and Miscellaneous',
  description: <p>
    Tools are used for various purposes and Skills. These tools listed are given standard costs which change depending on your region and GM's story and the descriptions are deliberately non-specific to allow the GM to flavor them as they see fit.
  </p>,
  stats: ['price', 'tags'],
  equipment: [
    {
      name: 'Arrows',
      description: 'A bundle of 30 arrows.',
      price: 0.5,
      tags: 'ammo'
    }, 
    {
      name: 'Shot',
      description: 'Black powder and small metal balls. Enough for 10 shots.',
      price: 1,
      tags: 'ammo'
    },
    {
      name: 'Bolts',
      description: 'A bundle of 10 crossbow bolts.',
      price: 0.5,
      tags: 'ammo'
    },
    {
      name: 'Lesser Artisan Tool',
      description: 'A Tool for creating pieces of physical art using the Art Skill. May be a paint brush, a sewing kit, sculpting knife, or various other art implement.',
      price: 3,
      tags: 'art, lesser'
    },
    {
      name: 'Average Artisan Tool',
      description: 'A Tool for creating pieces of physical art using the Art Skill. May be a paint brush, a sewing kit, sculpting knife, or various other art implement. Made of decent quality and gives a +1 to Art when used.',
      price: 6,
      tags: 'art, average'
    },
    {
      name: 'Fine Artisan Tool',
      description: 'A Tool for creating pieces of physical art using the Art Skill. May be a paint brush, a sewing kit, sculpting knife, or various other art implement. Made of elevated quality and gives a +2 to Art when used.',
      price: 10,
      tags: 'art, fine'
    },
    {
      name: 'Lesser Chaos Gem',
      description: 'A small gemstone infused with chaotic energy, about a quarter of an inch in length. These gems are mined from deep beneath the earth where the spiritual energy of the world is most volatile. Many crafting recipes and incredible Powers make use of these gems, however pulling the energy from a gem will render it inert and brittle.',
      price: 20,
      tags: 'gem, lesser'
    },
    {
      name: 'Moderate Chaos Gem',
      description: 'A gemstone infused with chaotic energy, about 1 inch in length. These gems are mined from deep beneath the earth where the spiritual energy of the world is most volatile. Many crafting recipes and incredible Powers make use of these gems, however pulling the energy from a gem will render it inert and brittle.',
      price: 100,
      tags: 'gem, moderate'
    },
    {
      name: 'Greater Chaos Gem',
      description: 'A large gemstone infused with chaotic energy, about 2-3 inches in length. These gems are mined from deep beneath the earth where the spiritual energy of the world is most volatile. Many crafting recipes and incredible Powers make use of these gems, however pulling the energy from a gem will render it inert and brittle.',
      price: 500,
      tags: 'gem, greater'
    },
    {
      name: 'Epic Chaos Gem',
      description: 'A large gemstone infused with chaotic energy, about 6 inches in length. Epic Chaos Gems are the most rare and are almost never seen on the open market, making their actual price hard to determine. These gems are mined from deep beneath the earth where the spiritual energy of the world is most volatile. Many crafting recipes and incredible Powers make use of these gems, however pulling the energy from a gem will render it inert and brittle.',
      price: 5000,
      tags: 'gem, epic'
    }
  ]
}
/*
{
  name: '',
  description: '',
  price: 0,
  tags: ''
}
*/