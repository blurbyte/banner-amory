import { Item } from '@sharedTypes/Item';
import { getSingleItem } from '../index';

export const testItem: Item = {
  name: "Alette's Bracelet",
  slug: 'alettes-bracelet',
  gamePart: 1,
  rank: 1,
  description: "Lovingly made by a hunter's wife to keep her daughter safe from harm.",
  statStrength: 1,
  statWillpower: 1,
  statArmor: 1,
  acquirementHero: 'Alette'
};

export const singleItemMock = [
  {
    request: {
      query: getSingleItem,
      variables: { slug: 'alettes-bracelet' }
    },
    result: {
      data: {
        item: { ...testItem }
      }
    }
  }
];