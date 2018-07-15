// Item query methods exposed as repository

import { EntityRepository, Repository, Like } from 'typeorm';

import { Item } from '../entities/Item';
import { Filter, FilterBonus, AvailableFilterBonusProperty } from '../entities/Filter';

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

  getFilteredItems({ part, rank, bonus, tier }: Filter) {
    // simple part and rank range checks
    if (part && (part < 0 || part > 2)) {
      throw new Error(`Wrong game part filter value provided: ${part}`);
    }

    if (rank && (rank < 0 || rank > 10)) {
      throw new Error(`Wrong item rank filter value provided: ${rank}`);
    }

    // combine filters
    return this.createQueryBuilder('Item')
      .where(query => {
        if (part) {
          query.where('Item.gamePart = :part', { part });
        }

        if (rank) {
          query.andWhere('Item.rank = :rank', { rank });
        }

        if (bonus && bonus !== FilterBonus.Any) {
          query.andWhere(bonusQuery(bonus));
        }

        if (tier === 'ANY') {
          query.andWhere('Item.tier is not null');
        }

        if (tier && tier !== 'ANY') {
          query.andWhere('Item.tier = :tier', { tier });
        }
      })
      .orderBy('Item.rank', 'ASC')
      .addOrderBy('Item.name', 'ASC')
      .getMany();
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
      }
    });
  }
}

// injects query string depending on passed bonus filter
function bonusQuery(bonus: Exclude<FilterBonus, FilterBonus.Any>) {
  if (bonus === FilterBonus.Talent) {
    return notNullQuery([
      'talentAllRanks',
      'talentStrength',
      'talentWillpower',
      'talentArmor',
      'talentArmorBreak',
      'talentExertion'
    ]);
  } else if (bonus === FilterBonus.PerTurn) {
    return notNullQuery(['perTurnArmor', 'perTurnWillpower']);
  } else if (bonus === FilterBonus.OnRest) {
    return notNullQuery(['onRestArmor', 'onRestWillpower']);
  } else if (bonus === FilterBonus.Chance) {
    return notNullQuery(['chanceCrit', 'chanceDodge', 'chanceDivert']);
  } else if (bonus === FilterBonus.FromMarket) {
    return notNullQuery(['acquirementMarketplace']);
  } else if (bonus === FilterBonus.Movement) {
    return notNullQuery(['movement']);
  }
  return notNullQuery(['statStrength', 'statWillpower', 'statArmor', 'statArmorBreak']);
}

// utility function to create typesafe bonus queries
// in shape of: (Item.onRestArmor is not null or Item.onRestWillpower is not null)
function notNullQuery(properties: AvailableFilterBonusProperty[]) {
  return (
    '(' +
    properties.reduce((result, property, index) => {
      // omits or for the last item
      const suffix = 'is not null' + (index !== properties.length - 1 ? ' or ' : '');
      return result.concat(`Item.${property} ${suffix}`);
    }, '') +
    ')'
  );
}
