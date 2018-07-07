// get items basic data with GraphQL
// renders grid of items

import * as React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import { Filter, FilterBonus } from '@sharedTypes/Filter';
import Filters from '../Filters';
import ItemsGrid from '../ItemsGrid';
import Content from './Content';
import Headline from './Headline';

export const getItems = gql`
  query getItems($filter: ItemsFilter) {
    items(filter: $filter) {
      name
      slug
      gamePart
      rank
    }
  }
`;

type ItemsProps = {
  path?: string;
};

type ItemsState = Readonly<{
  filter: Filter;
}>;

export class Items extends React.Component<ItemsProps, ItemsState> {
  readonly state: ItemsState = {
    filter: {
      part: 0,
      rank: 0,
      bonus: FilterBonus.Any
    }
  };

  render() {
    const { filter } = this.state;

    return (
      <>
        <Filters changeFilter={this.changeFilter} checkedValues={filter} />
        <Content>
          <Query
            query={getItems}
            variables={{
              filter
            }}
          >
            {({ loading, error, data }) => {
              if (loading || error) {
                return null;
              }

              if (data && !data.items.length) {
                return <Headline>Iver failed to find matching items</Headline>
              }

              return <ItemsGrid items={data.items} />;
            }}
          </Query>
        </Content>
      </>
    );
  }

  private changeFilter = (name: string, value: string | number) => {
    this.setState(state => ({
      ...state,
      filter: {
        ...state.filter,
        [name]: value
      }
    }) as ItemsState);
  };
}

export default Items;
