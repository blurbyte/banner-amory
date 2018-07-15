// group items by their name first character

import { ItemWithTier, Tier } from '@sharedTypes/Item';

export type GroupedTierItems = { [tier in Tier]?: ItemWithTier[] };

function groupByTier(items: ItemWithTier[]) {
  return items.reduce(
    (groupedItems, item) => {
      const key = item.tier;
      groupedItems[key] = groupedItems[key] || [];
      // bang operator is required here since all GroupedTierItems keys could be optional
      groupedItems[key]!.push(item);
      return groupedItems;
    },
    {} as GroupedTierItems
  );
}

export default groupByTier;
