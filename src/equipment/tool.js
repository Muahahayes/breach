import React from 'react';
export default {
  name: 'Tools and Miscellaneous',
  description: <p>
    Tools are used for various purposes and Skills. These tools listed are given standard costs which change depending on your region and GM's story and the descriptions are deliberately non-specific to allow the GM to flavor them as they see fit.
  </p>,
  stats: ['price', 'tags'],
  equipment: [ 
    {
      name: 'Lesser Artisan Tool',
      description: 'A Tool for creating pieces of physical art using the Art Skill.',
      price: 30,
      tags: 'art, lesser'
    },
    {
      name: 'Average Artisan Tool',
      description: 'A Tool for creating pieces of physical art using the Art Skill. Made of decent quality and gives a +1 to Art when used.',
      price: 60,
      tags: 'art, average'
    },
    {
      name: 'Fine Artisan Tool',
      description: 'A Tool for creating pieces of physical art using the Art Skill. Made of elevated quality and gives a +2 to Art when used.',
      price: 100,
      tags: 'art, fine'
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