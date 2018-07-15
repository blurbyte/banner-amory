import { ItemWithTier } from '@sharedTypes/Item';
import groupByTier, { GroupedTierItems } from '../groupByTier';
import { items, groupedItems } from './mocks';

test('returns collection of grouped items', () => {
  expect(groupByTier(items)).toEqual(groupedItems);
});

test('returns collection containing char and item if only 1 item got passed', () => {
  const items: ItemWithTier[] = [
    {
      name: "Taylor's Bracelet",
      slug: 'taylors-bracelet',
      gamePart: 2,
      rank: 1,
      tier: 'S'
    }
  ];

  const groupedItems: GroupedTierItems = {
    S: [
      {
        name: "Taylor's Bracelet",
        slug: 'taylors-bracelet',
        gamePart: 2,
        rank: 1,
        tier: 'S'
      }
    ]
  };

  expect(groupByTier(items)).toEqual(groupedItems);
});

test('returns empty object if no items (empty array) got passed', () => {
  expect(groupByTier([])).toEqual({});
});
