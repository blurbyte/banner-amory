// custom scalars with their typeDefs and resolvers

import { gql } from 'apollo-server';
import { GraphQLScalarType } from 'graphql';
import { Kind, ASTNode } from 'graphql/language';

export const typeDefs = gql`
  scalar Date
`;

export const resolvers = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value: string | number) {
      return new Date(value);
    },
    serialize(value: Date) {
      return value.getTime();
    },
    parseLiteral(ast: ASTNode) {
      if (ast.kind === Kind.INT) {
        return new Date(ast.value);
      }
      return null;
    }
  })
}
