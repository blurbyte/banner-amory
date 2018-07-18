// items grid ordered alphabetically

import * as React from 'react';

import { ItemBasic } from '@sharedTypes/Item';
import groupByFirstChar from './groupByFirstChar';
import Grid from '../Grid';
import ItemsGroup from '../GridItemsGroup';

const ANIMATION_DELAY_BASE_MS = 150;

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
        {characters.map((char, index) => {
          return <ItemsGroup key={`${char}-items`} label={char} items={groupedItems[char]} animationDelay={index * ANIMATION_DELAY_BASE_MS} />;
        })}
      </Grid>
    );
  }
}

export default AlphabeticalGrid;
