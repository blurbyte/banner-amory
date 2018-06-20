import { graphql } from 'graphql';
import { addMockFunctionsToSchema } from 'apollo-server';

import schema from '../schema';
import { testItem1, testItem2 } from './mocks';

describe('Root queries', () => {
  it('should fetch list of items', async () => {
    // arrange
    addMockFunctionsToSchema({
      schema,
      mocks: {
        Int: () => null,
        Boolean: () => null,
        String: () => null,
        Query: () => ({
          items: [testItem1, testItem2]
        })
      }
    });

    const query = `
      {
        items {
          id
          name
          slug
          gamePart
          description
          statStrength
          aggro
          acquirementMarketplace
        }
      }
    `;

    // act
    const result = await graphql(schema, query);

    // assert
    expect(result).toMatchSnapshot();
  });
});
