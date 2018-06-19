// Item query methods exposed as repository

import { EntityRepository, Repository } from 'typeorm';

import { Item } from '../entities/Item';

@EntityRepository(Item)
export class ItemRepository extends Repository<Item> {
  getAllItems() {
    return this.find();
  }
}
