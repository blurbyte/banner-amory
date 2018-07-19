// Creates 2D array of rows, split by number of provided chunks (maxItemsPerRow)

import { ItemBasic } from '@sharedTypes/Item';

function itemsByRow(items: ItemBasic[], maxItemsPerRow: number) {
  const numberOfRows = Math.ceil(items.length / maxItemsPerRow);
  // create array representing rows, to be iterated through
  const arrayOfRows = Array.from(Array(numberOfRows).keys());
  // 2D array of rows
  return arrayOfRows.map(row =>
    items.slice(row * maxItemsPerRow, row * maxItemsPerRow + maxItemsPerRow)
  );
}

export default itemsByRow;
