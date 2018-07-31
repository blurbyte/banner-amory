import { getCustomRepository } from 'typeorm';

import { ItemRepository } from '../../repositories/Item';
import { Filter, FilterBonus } from '../../entities/Filter';

export type ItemsFilterArgs = {
  filter: Filter;
};

export const items = async (_root: any, { filter }: ItemsFilterArgs) => {
  let items;
  // if filters are not provided or only all/any values are passed (alias with 0) then get all items
  if (
    !filter ||
    (!filter.part && !filter.bonus && !filter.tier) ||
    (filter.part === 0 && filter.rank === 0 && filter.bonus === FilterBonus.Any && !filter.tier)
  ) {
    items = await getCustomRepository(ItemRepository).getAllItems();
  } else {
    items = await getCustomRepository(ItemRepository).getFilteredItems(filter);
  }

  return items;
};
