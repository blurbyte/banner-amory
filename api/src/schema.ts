// merged GraphQL schema

import { makeExecutableSchema } from 'apollo-server';
import { merge } from 'lodash';

import { Root } from './types/Root';
import { Item } from './types/Item';

import { rootQueries } from './queries/root';

// merged types
const typeDefs = [Root, Item];

// merged resolvers
const resolvers = merge({}, rootQueries);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema;
