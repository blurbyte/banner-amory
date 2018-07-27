import { getCustomRepository } from 'typeorm';

import { CommentRepository } from '../repositories/Comment';
import { AddCommentInput } from '../entities/Comment';

type AddCommentMutationArgs = {
  input: AddCommentInput
}

export const rootMutations = {
  Mutation: {
    addComment: async (_root: any, { input }: AddCommentMutationArgs) => {
      const comment = await getCustomRepository(CommentRepository).addComment({ ...input });
      return comment;
    }
  }
};
