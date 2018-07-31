import { getCustomRepository } from 'typeorm';

import { CommentRepository } from '../../repositories/Comment';
import { Item as ItemEntity } from '../../entities/Item';

export const comments = async (parent: ItemEntity) => {
  const comments = await getCustomRepository(CommentRepository).getCommentsByItemId(parent.id);
  return comments;
};
