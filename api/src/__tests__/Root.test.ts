import { graphql } from 'graphql';
import { addMockFunctionsToSchema } from 'apollo-server';
import { find, filter } from 'lodash';

import schema from '../schema';
import { testItem1, testItem2 } from './mocks';
import { ItemQueryArgs, SearchQueryArgs } from '../queries/root';

// arrange
addMockFunctionsToSchema({
  schema,
  mocks: {
    Int: () => null,
    Boolean: () => null,
    String: () => null,
    Query: () => ({
      items: () => [testItem1, testItem2],
      item: (_root: any, { slug }: ItemQueryArgs) => {
        const items = [testItem1, testItem2];
        const item = find(items, item => item.slug === slug);
        return item;
      },
      search: (_root: any, { query }: SearchQueryArgs) => {
        const items = [testItem1, testItem2];
        const result = filter(items, item => item.name.toLowerCase().includes(query));
        return result;
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

const searchItems = `
  query searchItems($query: String!) {
    search(query: $query) {
      id
      name
      slug
    }
  }
`;

describe('Root queries', () => {
  it('should get list of items', async () => {
    // act
    const result = await graphql(schema, getAllItems);

    // assert
    expect(result).toMatchSnapshot();
  });

  it('should get single item', async () => {
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

  it('should get list of items based on search query', async () => {
    // act
    let params = { query: 'ale' };
    let result = await graphql(schema, searchItems, null, null, params);

    // assert
    expect(result).toMatchSnapshot();
  });

  it("should return empty array if search query doesn't match", async () => {
    // act
    let params = { query: 'ariana grande' };
    let result = await graphql(schema, searchItems, null, null, params);

    // assert
    expect(result).toMatchSnapshot();
  });
});
