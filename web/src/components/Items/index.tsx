// get items basic data with GraphQL
// renders grid of items

import * as React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import { Filter, FilterBonus, OrderBy } from '@sharedTypes/Filter';
import Filters from '../Filters';
import RanksGrid from '../RanksGrid';
import AlphabeticalGrid from '../AlphabeticalGrid';
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
      bonus: FilterBonus.Any,
      orderBy: OrderBy.Rank
    }
  };

  render() {
    const { filter } = this.state;

    // ordering is done on the client side
    // only part, rank and bonus are consumed by GraphQL Query
    const { part, rank, bonus, orderBy } = filter;

    return (
      <>
        <Filters changeFilter={this.changeFilter} checkedValues={filter} />
        <Content>
          <Query query={getItems} variables={{ filter: {
            part,
            rank,
            bonus
          } }}>
            {({ loading, error, data }) => {
              if (loading || error) {
                return null;
              }

              if (data && !data.items.length) {
                return <Headline>Iver failed to find matching items</Headline>;
              }

              // cleint side ordering
              return orderBy === OrderBy.Rank ? <RanksGrid items={data.items} /> : <AlphabeticalGrid items={data.items} />;
            }}
          </Query>
        </Content>
      </>
    );
  }

  private changeFilter = (name: string, value: string | number) => {
    this.setState(
      state =>
        ({
          ...state,
          filter: {
            ...state.filter,
            [name]: value
          }
        } as ItemsState)
    );
  };
}

export default Items;
