import { ApolloServer, gql } from 'apollo-server';
import chalk from 'chalk';

const typeDefs = gql`
  "**Test** type"
  type Hello {
    message: String!
  }

  "Root query"
  type Query {
    hello: Hello
  }
`;

const resolvers = {
  Query: {
    hello: () => ({ message: 'Hello there!' }),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(chalk.bgBlue(`🚀  Server ready at ${url}`));
});
