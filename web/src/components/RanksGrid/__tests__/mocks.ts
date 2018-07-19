import { ItemBasic } from '@sharedTypes/Item';

export const items: ItemBasic[] = [
  {
    name: "Taylor's Bracelet",
    slug: 'taylors-bracelet',
    gamePart: 2,
    rank: 1
  },
  {
    name: 'Thunder Ball',
    slug: 'thunder-ball',
    gamePart: 2,
    rank: 2
  },
  {
    name: 'Vibrant Touch',
    slug: 'vibrant-touch',
    gamePart: 2,
    rank: 3
  },
  {
    name: 'Ariana Grande',
    slug: 'ariana-grande',
    gamePart: 2,
    rank: 3
  },
  {
    name: 'Katy Perry',
    slug: 'katy-perry',
    gamePart: 2,
    rank: 4
  }
];

export const groupedItems: ItemBasic[][] = [
  [
    {
      name: "Taylor's Bracelet",
      slug: 'taylors-bracelet',
      gamePart: 2,
      rank: 1
    },
    {
      name: 'Thunder Ball',
      slug: 'thunder-ball',
      gamePart: 2,
      rank: 2
    }
  ],
  [{
    name: 'Vibrant Touch',
    slug: 'vibrant-touch',
    gamePart: 2,
    rank: 3
  },
  {
    name: 'Ariana Grande',
    slug: 'ariana-grande',
    gamePart: 2,
    rank: 3
  }],
  [{
    name: 'Katy Perry',
    slug: 'katy-perry',
    gamePart: 2,
    rank: 4
  }]
];
