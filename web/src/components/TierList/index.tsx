import * as React from 'react';

import Headline from '../Headline';
import Content from './Content';

type TierListProps = {
  path?: string;
};

class TierList extends React.Component<TierListProps> {
  render() {
    return (
      <Content>
        <Headline>Tier List</Headline>
      </Content>
    );
  }
}

export default TierList;
