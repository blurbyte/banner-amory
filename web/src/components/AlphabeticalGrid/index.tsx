// items grid ordered alphabetically

import * as React from 'react';

import { ItemBasic } from '@sharedTypes/Item';
import groupByFirstChar from './groupByFirstChar';
import Grid from '../Grid';
import ItemsGroup from '../GridItemsGroup';

type AlphabeticalGridProps = {
  items: ItemBasic[];
};

class AlphabeticalGrid extends React.Component<AlphabeticalGridProps> {
  render() {
    const { items } = this.props;
    const groupedItems = groupByFirstChar(items);
    const characters = Object.keys(groupedItems).sort();

    return (
      <Grid>
        {characters.map(char => {
          return <ItemsGroup key={`${char}-items`} label={char} items={groupedItems[char]} />;
        })}
      </Grid>
    );
  }
}

export default AlphabeticalGrid;
