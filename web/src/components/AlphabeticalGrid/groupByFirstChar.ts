// group items by their name first character

import { ItemBasic } from '@sharedTypes/Item';

export type GroupedItems = {
  [char: string]: ItemBasic[];
};

function groupByFirstChar(items: ItemBasic[]) {
  return items.reduce(
    (groupedItems, item) => {
      const key = item.slug.charAt(0);
      groupedItems[key] = groupedItems[key] || [];
      groupedItems[key].push(item);
      return groupedItems;
    },
    {} as GroupedItems
  );
}

export default groupByFirstChar;
