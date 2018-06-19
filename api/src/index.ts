require('dotenv').config(); // take environment variables from .env file
import 'reflect-metadata'; // required by TypeORM
import { ApolloServer } from 'apollo-server';
import { createConnection } from 'typeorm';
import chalk from 'chalk';

import connectionOptions from './connectionOptions';
import schema from './schema';

// establishing connection with database
createConnection(connectionOptions)
  .then(() => {
    // initializing GraphQL server with provided schema
    const server = new ApolloServer({ schema });

    server.listen().then(({ url }) => {
      console.log(chalk.bgBlue(`🚀  GraphQL server ready at ${url}`));
    });
  })
  .catch(error => console.log(chalk.bgRed(`⚠️  Connection to database failed: ${error}`)));
