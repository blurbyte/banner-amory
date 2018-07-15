// get only items on tier list
// renders grid of items grouped by tier

import * as React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import { FilterTier } from '@sharedTypes/Filter';
import TierGrid from '../TierGrid';
import Headline from '../Headline';
import Content from './Content';

export const getItemsWithTier = gql`
  query getItems($filter: ItemsFilter) {
    items(filter: $filter) {
      name
      slug
      gamePart
      rank
      tier
    }
  }
`;

export const TIER_FILTER: FilterTier = 'ANY';

type TierListProps = {
  path?: string;
};

export class TierList extends React.Component<TierListProps> {
  render() {
    return (
      <Content>
        <Headline>Survival Mode Tier List</Headline>
        <Query
          query={getItemsWithTier}
          variables={{
            filter: {
              tier: TIER_FILTER
            }
          }}
        >
          {({ loading, error, data }) => {
            if (loading || error) {
              return null;
            }

            return <TierGrid items={data.items} />;
          }}
        </Query>
      </Content>
    );
  }
}

export default TierList;
