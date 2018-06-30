import { MockedResponse } from 'react-apollo/test-utils';

import { ItemBasic } from '@sharedTypes/Item';
import { getItems } from '../index';

const testItem1: ItemBasic = {
  name: 'Ariana Grande',
  slug: 'ariana-grande',
  gamePart: 1,
  rank: 10
};

const testItem2: ItemBasic = {
  name: 'Taylor Swift',
  slug: 'taylor-swift',
  gamePart: 2,
  rank: 1
};

export const itemsMock: MockedResponse[] = [
  {
    request: {
      query: getItems
    },
    result: {
      data: {
        items: [testItem1, testItem2]
      }
    }
  }
];
