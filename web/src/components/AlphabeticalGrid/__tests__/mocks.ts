import { ItemBasic } from '@sharedTypes/Item';
import { GroupedItems } from '../groupByFirstChar';

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
  }
];

export const groupedItems: GroupedItems = {
  t: [
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
  v: [
    {
      name: 'Vibrant Touch',
      slug: 'vibrant-touch',
      gamePart: 2,
      rank: 3
    }
  ]
};
