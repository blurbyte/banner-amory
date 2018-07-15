import { Item, Tier } from './Item';

// 0 means ALL parts and ranks
export type Filter = {
  part: 0 | Item['gamePart'];
  rank: 0 | Item['rank'];
  bonus: FilterBonus;
  tier: FilterTier;
};

export enum FilterBonus {
  Any = 'ANY',
  MainStat = 'MAIN_STAT',
  Talent = 'TALENT',
  PerTurn = 'PER_TURN',
  OnRest = 'ON_REST',
  Chance = 'CHANCE',
  FromMarket = 'FROM_MARKET',
  Movement = 'MOVEMENT'
}

export type FilterTier = 'ANY' | Tier;

// Item properties on which filtering is based
export type AvailableFilterBonusProperty = Extract<
  keyof Item,
  | 'statStrength'
  | 'statWillpower'
  | 'statArmor'
  | 'statArmorBreak'
  | 'talentAllRanks'
  | 'talentStrength'
  | 'talentWillpower'
  | 'talentArmor'
  | 'talentArmorBreak'
  | 'talentExertion'
  | 'perTurnArmor'
  | 'perTurnWillpower'
  | 'onRestArmor'
  | 'onRestWillpower'
  | 'chanceCrit'
  | 'chanceDodge'
  | 'chanceDivert'
  | 'acquirementMarketplace'
  | 'movement'
>;
