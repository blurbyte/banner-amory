import { UserInputError } from 'apollo-server';
import { getCustomRepository } from 'typeorm';

import { ItemRepository } from '../repositories/Item';
import { Item as ItemEntity } from '../entities/Item';

type ItemQueryArgs = {
  slug: ItemEntity['slug'];
};

export const rootQueries = {
  Query: {
    items: async () => {
      const items = await getCustomRepository(ItemRepository).getAllItems();
      return items;
    },
    item: async (_root: any, { slug }: ItemQueryArgs) => {
      const item = await getCustomRepository(ItemRepository).getItemBySlug(slug);

      if (!item) {
        throw new UserInputError('Such item does not exist', { invalidArgs: slug });
      }

      return item;
    }
  }
};
