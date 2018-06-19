// root GraphQL schema

import { gql, makeExecutableSchema } from 'apollo-server';
import { getCustomRepository } from 'typeorm';
import { merge } from 'lodash';

import { ItemRepository } from './repositories/Item';

// types
import { Item } from './types/Item';

const Root = gql`
  type Query {
    items: [Item]
  }
`

const rootResolvers = {
  Query: {
    items: async () => {
      const items = await getCustomRepository(ItemRepository).getAllItems();
      return items;
    }
  }
}

// merged types
const typeDefs = [
  Root,
  Item
];

// merged resolvers
const resolvers = merge(
  {},
  rootResolvers
);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema;
