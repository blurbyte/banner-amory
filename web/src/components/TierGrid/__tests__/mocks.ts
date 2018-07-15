import { ItemWithTier } from '@sharedTypes/Item';
import { GroupedTierItems } from '../groupByTier';

export const items: ItemWithTier[] = [
  {
    name: "Taylor's Bracelet",
    slug: 'taylors-bracelet',
    gamePart: 2,
    rank: 1,
    tier: 'S'
  },
  {
    name: 'Thunder Ball',
    slug: 'thunder-ball',
    gamePart: 2,
    rank: 2,
    tier: 'S'
  },
  {
    name: 'Vibrant Touch',
    slug: 'vibrant-touch',
    gamePart: 2,
    rank: 3,
    tier: 'A'
  }
];

export const groupedItems: GroupedTierItems = {
  S: [
    {
      name: "Taylor's Bracelet",
      slug: 'taylors-bracelet',
      gamePart: 2,
      rank: 1,
      tier: 'S'
    },
    {
      name: 'Thunder Ball',
      slug: 'thunder-ball',
      gamePart: 2,
      rank: 2,
      tier: 'S'
    }
  ],
  A: [
    {
      name: 'Vibrant Touch',
      slug: 'vibrant-touch',
      gamePart: 2,
      rank: 3,
      tier: 'A'
    }
  ]
};
