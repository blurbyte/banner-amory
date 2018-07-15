import { MockedResponse } from 'react-apollo/test-utils';

import { ItemWithTier } from '@sharedTypes/Item';
import { getItemsWithTier, TIER_FILTER } from '../index';

export const testItem1: ItemWithTier = {
  name: 'Ariana Grande',
  slug: 'ariana-grande',
  gamePart: 1,
  rank: 10,
  tier: 'S'
};

export const testItem2: ItemWithTier = {
  name: 'Taylor Swift',
  slug: 'taylor-swift',
  gamePart: 1,
  rank: 1,
  tier: 'S'
};

export const itemsMock: MockedResponse[] = [
  {
    request: {
      query: getItemsWithTier,
      variables: {
        filter: {
          tier: TIER_FILTER
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
