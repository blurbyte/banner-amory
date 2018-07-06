import { UserInputError } from 'apollo-server';
import { getCustomRepository } from 'typeorm';

import { ItemRepository } from '../repositories/Item';
import { Item as ItemEntity } from '../entities/Item';
import { Filter, FilterBonus } from '../entities/Filter';

export type ItemQueryArgs = {
  slug: ItemEntity['slug'];
};

export type SearchQueryArgs = {
  query: string;
};

export type ItemsFilterArgs = {
  filter: Filter;
};

export const rootQueries = {
  Query: {
    items: async (_root: any, { filter }: ItemsFilterArgs) => {
      let items;
      // if filters are not provided or only all / any values are passed (alias with 0) then get all items
      if (!filter || (filter.part === 0 && filter.rank === 0 && filter.bonus === FilterBonus.Any)) {
        items = await getCustomRepository(ItemRepository).getAllItems();
      } else {
        items = await getCustomRepository(ItemRepository).getFilteredItems(filter);
      }

      return items;
    },
    item: async (_root: any, { slug }: ItemQueryArgs) => {
      const item = await getCustomRepository(ItemRepository).getItemBySlug(slug);

      if (!item) {
        throw new UserInputError('Such item does not exist', { invalidArgs: slug });
      }

      return item;
    },
    search: async (_root: any, { query }: SearchQueryArgs) => {
      const items = await getCustomRepository(ItemRepository).searchForItemsByName(query);
      return items;
    }
  }
};
