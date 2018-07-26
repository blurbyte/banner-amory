import { gql } from 'apollo-server';

export const Comment = gql`
  "Single comment"
  type Comment {
    id: Int!

    "Nick name of comment author"
    userName: String!

    message: String!

    createdAt: Date!
  }
`;
