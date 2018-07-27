import { gql } from 'apollo-server';

export const Comment = gql`
  "Single comment"
  type Comment {
    id: Int!

    "Nick name of comment author with max length of 30 characters"
    userName: String!

    "Message with max length of 255 characters"
    message: String!

    createdAt: Date!
  }
`;
