// items grid ordered by rank

import * as React from 'react';

import { ItemBasic } from '@sharedTypes/Item';
import itemsByRow from './itemsByRow';
import Grid from '../Grid';
import ItemsGroup from '../GridItemsGroup';

const MAX_ITEMS_PER_ROW = 10; // number of columns in base Grid
const ANIMATION_DELAY_BASE_MS = 150;

type RanksGridProps = {
  items: ItemBasic[];
};

class RanksGrid extends React.Component<RanksGridProps> {
  render() {
    const { items } = this.props;
    const groupedItems = itemsByRow(items, MAX_ITEMS_PER_ROW);

    return (
      <Grid>
        {groupedItems.map((_rows, index) => {
          return (
            <ItemsGroup
              key={`${index}-row`}
              items={groupedItems[index]}
              animationDelay={index * ANIMATION_DELAY_BASE_MS}
            />
          );
        })}
      </Grid>
    );
  }
}

export default RanksGrid;
