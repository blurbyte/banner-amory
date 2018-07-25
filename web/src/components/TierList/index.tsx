// get only items on tier list
// renders grid of items grouped by tier

import * as React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import { FilterTier } from '@sharedTypes/Filter';
import LoadingPlaceholder from '../LoadingPlaceholder';
import TierGrid from '../TierGrid';
import Headline from '../AnimatedHeadline';
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
  state = {
    toggle: true
  };

  render() {
    return (
      <Content>
        <Query
          query={getItemsWithTier}
          variables={{
            filter: {
              tier: TIER_FILTER
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

            return (
              <>
                <Headline>Survival Mode Tier List</Headline>
                <TierGrid items={data.items} />
              </>
            );
          }}
        </Query>
      </Content>
    );
  }
}

export default TierList;
