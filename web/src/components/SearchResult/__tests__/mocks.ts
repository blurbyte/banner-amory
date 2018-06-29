import { Item } from '@sharedTypes/Item';
import { searchItems } from '../index';

export const testItem1: Item = {
  name: "Alette's Bracelet",
  slug: 'alettes-bracelet',
  gamePart: 1,
  rank: 1
};

export const testItem2: Item = {
  name: 'Whalebone Needle',
  slug: 'whalebone-needle',
  gamePart: 1,
  rank: 1
};

export const searchItemsMock = [
  {
    request: {
      query: searchItems,
      variables: { query: 'ale' }
    },
    result: {
      data: {
        search: [testItem1, testItem2]
      }
    }
  }
];

export const searchItemsEmptyMock = [
  {
    request: {
      query: searchItems,
      variables: { query: 'xxx' }
    },
    result: {
      data: {
        search: []
      }
    }
  }
];
