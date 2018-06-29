// get list of found items
// search query is extracted from url via router

import * as React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import ItemsGrid from '../ItemsGrid';
import Strong from '../Strong';
import Content from './Content';
import Headline from './Headline';

export const searchItems = gql`
  query searchItems($query: String!) {
    search(query: $query) {
      slug
      rank
    }
  }
`;

type SearchResultProps = {
  path?: string;
  searchQuery?: string;
};

export class SearchResult extends React.Component<SearchResultProps> {
  render() {
    const { searchQuery } = this.props;

    return (
      <Content>
        <Query query={searchItems} variables={{ query: searchQuery }}>
          {({ loading, error, data }) => {
            if (loading || error) {
              return null;
            }

            if (data && !data.search.length) {
              return (
                <Headline>
                  {'Bolverk failed to find items for '}
                  <Strong>{this.props.searchQuery}</Strong>
                </Headline>
              );
            }

            return (
              <>
                <Headline>
                  {'Items found for '}
                  <Strong>{this.props.searchQuery}</Strong>
                </Headline>
                <ItemsGrid items={data.search} />
              </>
            );
          }}
        </Query>
      </Content>
    );
  }
}

export default SearchResult;
