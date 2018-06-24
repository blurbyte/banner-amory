import * as React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import Item from '../Item';
import Content from './Content';
import List from './List';

type ItemsProps = {
  path?: string;
};

const GET_ITEMS = gql`
  {
    items {
      name
      slug
      rank
      gamePart
    }
  }
`;

class Items extends React.Component<ItemsProps> {
  render() {
    return (
      <Content>
        <Query query={GET_ITEMS}>
          {({ loading, data }) => {
            console.log(data);
            return !loading && data ? <div>Success</div> : null;
          }}
        </Query>
        <List>
          <Item />
        </List>
      </Content>
    );
  }
}

export default Items;
