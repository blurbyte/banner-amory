import { items } from './items';
import { item } from './item';
import { search } from './search';
import { comments } from './comments';

export const itemQueries = {
  Query: {
    items,
    item,
    search
  },
  Item: {
    comments
  }
};
