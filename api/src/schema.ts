// merged GraphQL schema

import { makeExecutableSchema } from 'apollo-server';
import { merge } from 'lodash';

import { typeDefs as scalarsTypeDefs, resolvers as scalarsResolvers } from './types/scalars';

import { Root } from './types/Root';
import { Item } from './types/Item';
import { Comment } from './types/Comment';

import { rootQueries } from './queries/root';
import { itemQueries } from './queries/item';

// merged types
const typeDefs = [scalarsTypeDefs, Root, Item, Comment];

// merged resolvers
const resolvers = merge({}, scalarsResolvers, rootQueries, itemQueries);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema;
