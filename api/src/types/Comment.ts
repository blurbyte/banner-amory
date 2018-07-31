import { gql } from 'apollo-server';

export const Comment = gql`
  # A single comment
  type Comment {
    id: Int!

    # Nick name of comment author with max length of 30 characters
    userName: String!

    # Message with max length of 255 characters
    message: String!

    createdAt: Date!
  }

  # Comment added by user
  input AddCommentInput {
    # Id of related item
    itemId: Int!

    # Author of a comment
    userName: String!

    # Comment content
    message: String!
  }

  extend type Mutation {
    addComment(input: AddCommentInput!): Comment
  }
`;
