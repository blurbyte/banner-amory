import { graphql } from 'graphql';
import { addMockFunctionsToSchema } from 'apollo-server';

import schema from '../schema';
import { Comment } from '../entities/Comment';
import { AddCommentMutationArgs } from '../mutations/comment/addComment';

// arrange
addMockFunctionsToSchema({
  schema,
  mocks: {
    Int: () => null,
    Boolean: () => null,
    String: () => null,
    Mutation: () => ({
      addComment: (_root: any, { input }: AddCommentMutationArgs) => {
        const comment: Comment = {
          ...input,
          id: 1,
          createdAt: new Date('2018-01-09T00:00:29.75')
        };
        return comment;
      }
    })
  }
});

const addComment = `
  mutation addComment($input: AddCommentInput!) {
    addComment(input: $input) {
      id
      message
      userName
      createdAt
    }
  }
`;

describe('Comment mutations', () => {
  it('should add a new comment', async () => {
    // act
    const params: AddCommentMutationArgs = {
      input: {
        itemId: 83,
        userName: 'ghandi',
        message: 'Where there is love there is life'
      }
    };
    const result = await graphql(schema, addComment, null, null, params);

    // assert
    expect(result).toMatchSnapshot();
  });
});
