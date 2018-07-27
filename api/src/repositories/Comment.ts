// Item query methods exposed as repository

import { EntityRepository, Repository } from 'typeorm';

import { Comment, AddCommentInput } from '../entities/Comment';
import { Item } from '../entities/Item';

@EntityRepository(Comment)
export class CommentRepository extends Repository<Comment> {
  getCommentsByItemId(itemId: Item['id']) {
    return this.find({
      where: {
        itemId
      },
      order: {
        createdAt: 'DESC'
      }
    });
  }

  addComment({ itemId, userName, message }: AddCommentInput) {
    return this.save({
      itemId, userName, message
    })
  }
}
