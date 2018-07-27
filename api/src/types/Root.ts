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

  "Root mutation"
  type Mutation {
    addComment(input: AddCommentInput!): Comment
  }

  "Optional items filter, where 0 means ALL"
  input ItemsFilter {
    "Filter by game part (0, 1, 2)"
    part: Int

    "Filter by item rank (0...10)"
    rank: Int

    "Filter by item stat bonus"
    bonus: FilterBonus

    "Filter by item tier (S, A, B, C)"
    tier: FilterTier
  }

  enum FilterBonus {
    ANY
    MAIN_STAT
    TALENT
    PER_TURN
    ON_REST
    CHANCE
    FROM_MARKET
    MOVEMENT
  }

  enum FilterTier {
    ANY
    S
    A
    B
    C
  }

  "Comment added by user"
  input AddCommentInput {
    "Id of related item"
    itemId: Int!

    "Author of a comment"
    userName: String!

    "Comment content"
    message: String!
  }
`;
