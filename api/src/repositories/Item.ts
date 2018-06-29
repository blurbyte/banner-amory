// Item query methods exposed as repository

import { EntityRepository, Repository, Like } from 'typeorm';

import { Item } from '../entities/Item';

@EntityRepository(Item)
export class ItemRepository extends Repository<Item> {
  getAllItems() {
    return this.find({
      order: {
        rank: 'ASC',
        name: 'ASC'
      }
    });
  }

  getItemBySlug(slug: string) {
    return this.findOne({
      slug
    });
  }

  searchForItemsByName(query: string) {
    return this.find({
      where: {
        name: Like(`%${query}%`)
      },
      order: {
        rank: 'ASC',
        name: 'ASC'
      }
    });
  }
}
