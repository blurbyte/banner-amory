import { Item } from '../entities/Item';

export const testItem1: Item = {
  id: 1,
  name: 'Alette\'s Bracelet',
  slug: 'alettes-bracelet',
  gamePart: 1,
  rank: 1,
  description: 'Lovingly made by a hunter\'s wife to keep her daughter safe from harm.',
  statStrength: 1,
  statWillpower: 1,
  statArmor: 1,
  acquirementHero: 'Alette'
}

export const testItem2: Item = {
  id: 53,
  name: 'Atfari\'s Golden Boots',
  slug: 'atfaris-golden-boots',
  gamePart: 2,
  rank: 4,
  price: 8,
  description: 'A former skald\'s lightweight boots that attracted the wrong type of attention.',
  aggro: -1,
  movement: -1,
  acquirementMarketplace: true
}
