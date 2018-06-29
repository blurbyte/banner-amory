// single item in the grid

import * as React from 'react';
import { Link as BaseLink } from '@reach/router';
import styled from 'styled-components';
import { transparentize } from 'polished';

import { Colors } from '@styles/colors';
import { ItemBasic as GridItemProps } from '@sharedTypes/Item';
import Image from '../Image';
import Rank from './Rank';

const Item = styled.li`
  position: relative;
  background: ${transparentize(0.9, Colors.blue)};
  z-index: 99;
  user-select: none;
`;

const Link = styled(BaseLink)`
  color: ${Colors.blue};
`;

class GridItem extends React.Component<GridItemProps> {
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

export default GridItem;
