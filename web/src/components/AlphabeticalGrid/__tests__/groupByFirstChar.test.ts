import { ItemBasic } from '@sharedTypes/Item';
import groupByFirstChar, { GroupedItems } from '../groupByFirstChar';
import { items, groupedItems } from './mocks';

test('returns collection of grouped items', () => {
  expect(groupByFirstChar(items)).toEqual(groupedItems);
});

test('returns collection containing char and item if only 1 item got passed', () => {
  const items: ItemBasic[] = [
    {
      name: "Taylor's Bracelet",
      slug: 'taylors-bracelet',
      gamePart: 2,
      rank: 1
    }
  ];

  const groupedItems: GroupedItems = {
    t: [
      {
        name: "Taylor's Bracelet",
        slug: 'taylors-bracelet',
        gamePart: 2,
        rank: 1
      }
    ]
  };

  expect(groupByFirstChar(items)).toEqual(groupedItems);
});

test('returns empty object if no items (empty array) got passed', () => {
  expect(groupByFirstChar([])).toEqual({});
});
