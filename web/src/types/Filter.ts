// for sake of simplicity and compability with GraphQL part and rank are integers
// 0 means ALL parts and ranks

import { Item } from './Item';

export type Filter = {
  part: 0 | Item['gamePart'];
  rank: 0 | Item['rank'];
  bonus: FilterBonus;
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
