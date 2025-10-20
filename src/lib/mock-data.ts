import { CarDesign } from './types';

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
    createdAt: '2025-10-02T10:00:00Z',
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
    createdAt: '2025-10-10T14:30:00Z',
  },
];