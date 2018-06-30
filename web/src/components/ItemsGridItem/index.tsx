// single item in the grid

import * as React from 'react';

import { ItemBasic as GridItemProps } from '@sharedTypes/Item';
import Image from '../Image';
import Item from './Item';
import Link from './Link';
import Rank from './Rank';

class ItemsGridItem extends React.Component<GridItemProps> {
  render() {
    const { slug, rank } = this.props;

    return (
      <Item>
        <Link to={`/item/${slug}`}>
          <Image slug={slug} />
          <Rank>{rank}</Rank>
        </Link>
      </Item>
    );
  }
}

export default ItemsGridItem;
