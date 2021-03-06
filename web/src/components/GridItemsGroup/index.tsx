// items grouped by character

import * as React from 'react';

import { ItemBasic } from '@sharedTypes/Item';
import GridItem from '../ItemsGridItem';
import Wrapper from './Wrapper';
import Label from './Label';
import List from './List';

const MAX_ITEMS_PER_ROW = 10; // number of columns in base Grid

type GridItemsGroupDefaultProps = {
  animationDelay: number;
};

type GridItemsGroupProps = Partial<GridItemsGroupDefaultProps> & {
  items: ItemBasic[];
  label?: string;
  key?: string;
};

class GridItemsGroup extends React.Component<GridItemsGroupProps> {
  static defaultProps: GridItemsGroupDefaultProps = {
    animationDelay: 200
  };

  render() {
    const { label, items, animationDelay } = this.props;

    const numberOfItems = items.length + 1; // add 1 to make 1 column space betweeen groups
    const maxColumns = numberOfItems > MAX_ITEMS_PER_ROW ? MAX_ITEMS_PER_ROW : numberOfItems;

    return (
      <Wrapper columns={maxColumns} animationDelay={animationDelay!}>
        {label && <Label>{label}</Label>}
        <List columns={maxColumns}>
          {items.map(item => <GridItem key={item.slug} {...item} />)}
        </List>
      </Wrapper>
    );
  }
}

export default GridItemsGroup;
