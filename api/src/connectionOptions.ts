// config required to connect to database

import { ConnectionOptions } from 'typeorm';

import { Item } from './entities/Item';
import { Comment } from './entities/Comment';

const connectionOptions: ConnectionOptions = {
  type: 'mssql',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Item, Comment],
  options: {
    encrypt: true
  }
};

export default connectionOptions;
