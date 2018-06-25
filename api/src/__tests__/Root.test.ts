import { graphql } from 'graphql';
import { addMockFunctionsToSchema } from 'apollo-server';
import { find } from 'lodash';

import schema from '../schema';
import { testItem1, testItem2 } from './mocks';

// arrange
addMockFunctionsToSchema({
  schema,
  mocks: {
    Int: () => null,
    Boolean: () => null,
    String: () => null,
    Query: () => ({
      items: () => [testItem1, testItem2],
      item: (_root, { slug }) => {
        const items = [testItem1, testItem2];
        const item = find(items, item => item.slug === slug);
        return item;
      }
    })
  }
});

const getAllItems = `
  query getAllItems {
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

const getSingleItem = `
  query getSingleItem($slug: String!) {
    item(slug: $slug) {
      id
      name
      slug
    }
  }
`;

describe('Root queries', () => {
  it('should fetch list of items', async () => {
    // act
    const result = await graphql(schema, getAllItems);

    // assert
    expect(result).toMatchSnapshot();
  });

  it('should fetch single item', async () => {
    // act
    let params = { slug: 'alettes-bracelet' };
    let result = await graphql(schema, getSingleItem, null, null, params);

    // assert
    expect(result).toMatchSnapshot();
  });

  it('should return null if wrong slug got passed', async () => {
    // act
    let params = { slug: 'wrong-one' };
    let result = await graphql(schema, getSingleItem, null, null, params);

    // assert
    expect(result).toMatchSnapshot();
  });
});
