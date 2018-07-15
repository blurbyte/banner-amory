// items grid ordered by rank

import * as React from 'react';

import { ItemBasic } from '@sharedTypes/Item';
import GridItem from '../ItemsGridItem';
import Grid from './Grid';

type RanksGridProps = {
  items: ItemBasic[];
};

class RanksGrid extends React.Component<RanksGridProps> {
  render() {
    const { items } = this.props;

    return <Grid>{items.map(item => <GridItem key={item.slug} {...item} />)}</Grid>;
  }
}

export default RanksGrid;
