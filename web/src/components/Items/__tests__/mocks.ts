import { getItems } from '../index';

export const itemsMock = [
  {
    request: {
      query: getItems
    },
    result: {
      data: {
        items: [
          {
            slug: 'test-slug',
            rank: 10
          },
          {
            slug: 'taylor-swift',
            rank: 1
          }
        ]
      }
    }
  }
];
