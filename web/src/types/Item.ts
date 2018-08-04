import { Comment } from './Comment';

export type Item = {
  id: number;
  name: string;
  slug: string;
  gamePart: 1 | 2;
  rank: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  comments: Comment[];
  description?: string;
  price?: number;
  statStrength?: number;
  statWillpower?: number;
  statArmor?: number;
  statArmorBreak?: number;
  talentAllRanks?: number;
  talentStrength?: number;
  talentWillpower?: number;
  talentArmor?: number;
  talentArmorBreak?: number;
  talentExertion?: number;
  perTurnArmor?: number;
  perTurnWillpower?: number;
  onRestArmor?: number;
  onRestWillpower?: number;
  perKillWillpower?: number;
  aggro?: number;
  chanceCrit?: number;
  chanceDodge?: number;
  chanceDivert?: number;
  neverMiss?: boolean;
  movement?: number;
  resist?: number;
  knockback?: number;
  defy?: number;
  extraRange?: number;
  extraStrengthOnAttack?: number;
  acquirementMarketplace?: boolean;
  acquirementQuest?: string;
  acquirementGodstone?: string;
  acquirementHero?: string;
  trivia?: string;
  tier?: Tier;
};

export type Tier = 'S' | 'A' | 'B' | 'C';

export type ItemBasic = Pick<Item, 'name' | 'slug' | 'gamePart' | 'rank'>;

export type ItemWithTier = ItemBasic & {
  tier: Tier;
};
