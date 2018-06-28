// get items basic data with GraphQL
// renders grid of items

import * as React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import List from './List';
import Content from './Content';

export const getItems = gql`
  query getItems {
    items {
      slug
      rank
    }
  }
`;

type ItemsProps = {
  path?: string;
};

export class Items extends React.Component<ItemsProps> {
  render() {
    return (
      <Content>
        <Query query={getItems}>
          {({ loading, error, data }) => {
            if (loading || error) {
              return null;
            }

            return <List items={data.items} />;
          }}
        </Query>
      </Content>
    );
  }
}

export default Items;
