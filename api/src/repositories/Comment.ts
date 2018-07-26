// Item query methods exposed as repository

import { EntityRepository, Repository } from 'typeorm';

import { Comment } from '../entities/Comment';
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
}
