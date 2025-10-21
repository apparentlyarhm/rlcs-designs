import { CarDesign, CarDesignSearchItem } from './types';

export const mockDesigns: CarDesign[] = [
  {
    id: 'uuid1',
    description: 'from ranked',
    player:{
      name: '@trook_rl',
      x_link:'https://x.com/MohammedArhum'
    },
    bakkesmodCode: 'goeDAAAAAAAAAAAAAAAAAAAAAA==',
    imageUrls: ['/images/designs/trook_1.jpg', '/images/designs/trook_2.jpg'],
    items: {
      body: 'Black Fennec',
      decal: 'Zagamuffin',
      wheels: 'TW Zomba',
      boost: 'Crimson Standard',
      trail: 'Classic',
    },
    createdAt: 1760006666,
  },
  {
    id: 'uuid2',
    description: 'from ranked',
    player:{
      name: '@akaguhh',
      x_link:'https://x.com/MohammedArhum'
    },
    bakkesmodCode: 'hgiFBcAAAAAAAAAAAAAAAAAAAA==',
    imageUrls: ['/images/designs/akaguhh1.jpg','/images/designs/akaguhh2.jpg'],
    items: {
      body: 'Black Fennec',
      decal: 'TW Lunation',
      wheels: 'Cristiano',
      boost: 'Standard Pink',
      trail: 'Classic',
    },
    createdAt: 1760506666,
  },
  {
    id: 'uuid3',
    description: 'from Coupe de France Slash',
    player:{
      name: '@AtowRL',
      x_link:'https://x.com/AtowRL'
    },
    bakkesmodCode: 'RAV5C/BCHELBCyEYEBggABznQQAA',
    imageUrls: ['/images/designs/atow1.jpg'],
    items: {
      body: 'Black Fennec',
      decal: 'Pooch',
      wheels: 'Cristiano',
      boost: 'Alpha Boost',
      trail: 'Classic',
    },
    createdAt: 1760664620,
  },
];

export function convertToSearchItem(item: CarDesign): CarDesignSearchItem {

  return {
    id: item.id,
    description: item.description,
    player: {
      name: item.player.name
    },
    image: item.imageUrls[0] ?? null,
    createdAt: item.createdAt
  }
}