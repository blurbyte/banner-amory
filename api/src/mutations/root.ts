import { UserInputError } from 'apollo-server';
import { getCustomRepository } from 'typeorm';

import { CommentRepository } from '../repositories/Comment';
import { AddCommentInput } from '../entities/Comment';

type AddCommentMutationArgs = {
  input: AddCommentInput;
};

export const rootMutations = {
  Mutation: {
    addComment: async (_root: any, { input }: AddCommentMutationArgs) => {
      const { userName, message } = input;

      // validation
      if (userName.length < 1 || userName.length > 30) {
        throw new UserInputError(
          `Wrong provided userName length, should be between 1 and 30 characters, instead of ${
            userName.length
          }`,
          { invalidArgs: userName }
        );
      }

      if (message.length < 1 || message.length > 255) {
        throw new UserInputError(
          `Wrong provided message length, should be between 1 and 255 characters, instead of ${
            message.length
          }`,
          { invalidArgs: message }
        );
      }

      // if everything is correct, add comment
      const comment = await getCustomRepository(CommentRepository).addComment({ ...input });
      return comment;
    }
  }
};
