// merged GraphQL schema

import { makeExecutableSchema, gql } from 'apollo-server';
import { merge } from 'lodash';

import { typeDefs as scalarsTypeDefs, resolvers as scalarsResolvers } from './types/scalars';

import { Item } from './types/Item';
import { Comment } from './types/Comment';

import { itemQueries } from './queries/item';

import { commentMutations } from './mutations/comment';

// dummy queries and mutations are required
// because graphql can't have empty root types
// later on they are extended
const Root = gql`
  type Query {
    dummy: String
  }

  type Mutation {
    dummy: String
  }
`;

// merged types
const typeDefs = [scalarsTypeDefs, Root, Item, Comment];

// merged resolvers
const resolvers = merge(
  // queries
  scalarsResolvers,
  itemQueries,
  // mutations
  commentMutations
);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema;
