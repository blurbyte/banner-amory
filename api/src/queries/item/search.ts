import { getCustomRepository } from 'typeorm';

import { ItemRepository } from '../../repositories/Item';

export type SearchQueryArgs = {
  query: string;
};

export const search = async (_root: any, { query }: SearchQueryArgs) => {
  const items = await getCustomRepository(ItemRepository).searchForItemsByName(query);
  return items;
};
