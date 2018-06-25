// items grid

import * as React from 'react';
import styled from 'styled-components';

import { ItemBasic } from '../../types/Item';
import ListItem from './ListItem';

const Grid = styled.ul`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(10, 1fr);
  margin: 0;
  padding: 0;
  list-style: none;
`;

type ListProps = {
  items: [ItemBasic];
};

class List extends React.Component<ListProps> {
  render() {
    const { items } = this.props;

    return <Grid>{items.map(item => <ListItem key={item.slug} {...item} />)}</Grid>;
  }
}

export default List;
