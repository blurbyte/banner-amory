import { gql } from 'apollo-server';

export const Root = gql`
  "Root query"
  type Query {
    "List of all items"
    items(filter: ItemsFilter): [Item]

    "Single item fetched by providing slug"
    item(slug: String!): Item

    "Search for items based on provided name"
    search(query: String!): [Item]
  }

  "Optional items filter"
  input ItemsFilter {
    "Filter by game part (all, 1, 2)"
    part: String!

    "Filter by item rank (all, 1...10)"
    rank: String!

    "Filter by item stat bonus"
    bonus: Bonus!
  }

  enum Bonus {
    ANY
    MAIN_STAT
    TALENT
    PER_TURN
    ON_REST
    CHANCE
    FROM_MARKET
    MOVEMENT
  }
`;
