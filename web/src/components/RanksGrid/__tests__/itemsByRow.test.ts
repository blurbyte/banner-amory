import { ItemBasic } from '@sharedTypes/Item';
import itemsByRow from '../itemsByRow';
import { items, groupedItems } from './mocks';

const MAX_ITEMS_PER_ROW = 2;

test('returns 2d array of grouped items', () => {
  expect(itemsByRow(items, MAX_ITEMS_PER_ROW)).toEqual(groupedItems);
});

test('returns 2d array of single item', () => {
  const items: ItemBasic[] = [
    {
      name: "Taylor's Bracelet",
      slug: 'taylors-bracelet',
      gamePart: 2,
      rank: 1
    }
  ];

  const groupedItems: ItemBasic[][] = [
    [
      {
        name: "Taylor's Bracelet",
        slug: 'taylors-bracelet',
        gamePart: 2,
        rank: 1
      }
    ]
  ];

  expect(itemsByRow(items, MAX_ITEMS_PER_ROW)).toEqual(groupedItems);
});

test('returns empty array', () => {
  expect(itemsByRow([], MAX_ITEMS_PER_ROW)).toEqual([]);
});
