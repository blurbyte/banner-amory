// for sake of simplicity input values are strings and compability with GraphQL

export type Filter = {
  part: 'all' | '1' | '2';
  rank: 'all' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';
  bonus: FilterBonus;
};

export enum FilterBonus {
  any = 'any',
  mainStat = 'mainStat',
  talent = 'talent',
  perTurn = 'perTurn',
  onRest = 'onRest',
  chance = 'chance',
  fromMarket = 'fromMarket',
  movement = 'movement'
}
