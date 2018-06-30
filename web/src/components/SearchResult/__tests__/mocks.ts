import { ItemBasic } from '@sharedTypes/Item';
import { searchItems } from '../index';
import { MockedResponse } from 'react-apollo/test-utils';

export const testItem1: ItemBasic = {
  name: "Alette's Bracelet",
  slug: 'alettes-bracelet',
  gamePart: 1,
  rank: 1
};

export const testItem2: ItemBasic = {
  name: 'Whalebone Needle',
  slug: 'whalebone-needle',
  gamePart: 1,
  rank: 1
};

export const searchItemsMock: MockedResponse[] = [
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
