import { gql } from 'apollo-server';

export const Root = gql`
  "Root query"
  type Query {
    "List of all items"
    items: [Item]

    "Single item fetched by providing slug"
    item(slug: String!): Item
  }
`;
