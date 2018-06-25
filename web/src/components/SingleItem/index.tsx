import * as React from 'react';

import { Item } from '../../types/Item';
import Content from '../Content';
import Headline from '../Headline';

type SingleItemProps = {
  path?: string;
  slug?: Item['slug'];
};

class SingleItem extends React.Component<SingleItemProps> {
  render() {
    return (
      <Content>
        <Headline>{this.props.slug}</Headline>
      </Content>
    );
  }
}

export default SingleItem;
