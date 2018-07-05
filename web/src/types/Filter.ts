// for sake of simplicity input values are strings and compability with GraphQL

export type Filter = {
  part: 'all' | '1' | '2';
  rank: 'all' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';
  bonus: FilterBonus;
};

export enum FilterBonus {
  Any = 'ANY',
  MainStat = 'MAIN_STAT',
  Talent = 'TALENT',
  PerTurn = 'PEWR_TURN',
  OnRest = 'ON_REST',
  Chance = 'CHANCE',
  FromMarket = 'FROM_MARKET',
  Movement = 'MOVEMENT'
}
