// get items basic data with GraphQL
// renders grid of items

import * as React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import { Filter, FilterBonus, OrderBy } from '@sharedTypes/Filter';
import LoadingPlaceholder from '../LoadingPlaceholder';
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

const ITEMS_FILTERS_KEY = 'items-filters';

type ItemsProps = {
  path?: string;
};

type ItemsState = Readonly<{
  filter: Filter;
}>;

const initialState: ItemsState = {
  filter: {
    part: 0,
    rank: 0,
    bonus: FilterBonus.Any,
    orderBy: OrderBy.Rank
  }
};

export class Items extends React.Component<ItemsProps, ItemsState> {
  readonly state: ItemsState;

  constructor(props: ItemsProps) {
    super(props);

    const filterFromLocalStorage = localStorage.getItem(ITEMS_FILTERS_KEY);

    // retrieve filters from local storage
    // or set initial state if they don't exist
    if (filterFromLocalStorage) {
      this.state = {
        ...initialState,
        filter: JSON.parse(filterFromLocalStorage)
      };
    } else {
      this.state = initialState;
    }
  }

  render() {
    const { filter } = this.state;

    // ordering is done on the client side
    // only part, rank and bonus are consumed by GraphQL Query
    const { part, rank, bonus, orderBy } = filter;

    return (
      <>
        <Filters changeFilter={this.changeFilter} checkedValues={filter} />
        <Content>
          <Query
            query={getItems}
            variables={{
              filter: {
                part,
                rank,
                bonus
              }
            }}
          >
            {({ loading, error, data }) => {
              if (loading) {
                return <LoadingPlaceholder />;
              }

              if (error) {
                return null;
              }

              if (data && !data.items.length) {
                return <Headline>Iver failed to find matching items</Headline>;
              }

              // client side ordering
              return orderBy === OrderBy.Rank ? (
                <RanksGrid items={data.items} />
              ) : (
                <AlphabeticalGrid items={data.items} />
              );
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
        } as ItemsState),
      () => {
        // save filters in local storage
        localStorage.setItem(ITEMS_FILTERS_KEY, JSON.stringify(this.state.filter));
      }
    );
  };
}

export default Items;
