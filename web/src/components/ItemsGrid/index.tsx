// items grid

import * as React from 'react';

import { ItemBasic } from '@sharedTypes/Item';
import GridItem from './GridItem';
import Grid from './Grid';

type ListProps = {
  items: ItemBasic[];
};

class List extends React.Component<ListProps> {
  render() {
    const { items } = this.props;

    return <Grid>{items.map(item => <GridItem key={item.slug} {...item} />)}</Grid>;
  }
}

export default List;
