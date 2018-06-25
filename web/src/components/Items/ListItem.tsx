// single item in the grid

import * as React from 'react';
import { Link as BaseLink } from '@reach/router';
import styled from 'styled-components';
import { transparentize } from 'polished';

import { Colors } from '../../styles/colors';
import { ItemBasic } from '../../types/Item';

const Item = styled.li`
  position: relative;
  background: ${transparentize(0.9, Colors.blue)};
  z-index: 99;
  user-select: none;
`;

const Link = styled(BaseLink)`
  color: ${Colors.blue};
`;

const Image = styled.img`
  max-width: 100%;
`;

const Rank = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 99;
  background: ${Colors.white};
  margin: 0;
  padding: 0;
  width: 2rem;
  height: 2rem;
  font-weight: 600;
`;

class ListItem extends React.Component<ItemBasic> {
  render() {
    const { slug, rank } = this.props;

    return (
      <Item>
        <Link to={`item/${slug}`}>
          <Image src={`${process.env.STORAGE_URL}${slug}.png`} />
          <Rank>{rank}</Rank>
        </Link>
      </Item>
    );
  }
}

export default ListItem;
