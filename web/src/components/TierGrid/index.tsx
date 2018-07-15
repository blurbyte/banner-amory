// items grid ordered by tiers

import * as React from 'react';

import { Tier, ItemWithTier } from '@sharedTypes/Item';
import groupByTier from './groupByTier';
import Grid from '../Grid';
import ItemsGroup from '../GridItemsGroup';

type TierGridProps = {
  items: ItemWithTier[];
};

class TierGrid extends React.Component<TierGridProps> {
  render() {
    const { items } = this.props;
    const groupedItems = groupByTier(items);
    const tiers: Tier[] = ['S', 'A', 'B', 'C'];

    return (
      <Grid>
        {tiers.map(tier => {
          return <ItemsGroup key={`${tier}-items`} label={tier} items={groupedItems[tier]!} />;
        })}
      </Grid>
    );
  }
}

export default TierGrid;
