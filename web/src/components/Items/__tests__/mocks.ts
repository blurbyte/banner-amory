import { MockedResponse } from 'react-apollo/test-utils';

import { ItemBasic } from '@sharedTypes/Item';
import { FilterBonus } from '@sharedTypes/Filter';
import { getItems } from '../index';

export const testItem1: ItemBasic = {
  name: 'Ariana Grande',
  slug: 'ariana-grande',
  gamePart: 1,
  rank: 10
};

export const testItem2: ItemBasic = {
  name: 'Taylor Swift',
  slug: 'taylor-swift',
  gamePart: 1,
  rank: 1
};

export const itemsMock: MockedResponse[] = [
  {
    request: {
      query: getItems,
      variables: {
        filter: {
          part: 1,
          rank: 0,
          bonus: FilterBonus.Any
        }
      }
    },
    result: {
      data: {
        items: [testItem1, testItem2]
      }
    }
  }
];

export const itemsEmptyMock: MockedResponse[] = [
  {
    request: {
      query: getItems,
      variables: {
        filter: {
          part: 2,
          rank: 1,
          bonus: FilterBonus.Any
        }
      }
    },
    result: {
      data: {
        items: []
      }
    }
  }
];
