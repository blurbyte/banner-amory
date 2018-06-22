import * as React from 'react';

import Headline from '../Headline';
import Content from './Content';

type ItemsListProps = {
  path?: string;
};

class ItemsList extends React.Component<ItemsListProps> {
  render() {
    return (
      <Content>
        <Headline>Items List</Headline>
      </Content>
    );
  }
}

export default ItemsList;
