import { gql } from 'apollo-server';

export const Item = gql`
  "Banner Saga detailed item"
  type Item {
    id: Int!

    name: String!

    "Short identifier used to construct routes and getting images"
    slug: String!

    "Banner Saga 1 or 2"
    gamePart: Int!

    "Item rank from 1 to 10"
    rank: Int!

    description: String

    price: Int

    statStrength: Int

    statWillpower: Int

    statArmor: Int

    statArmorBreak: Int

    talentAllRanks: Int

    talentStrength: Int

    talentWillpower: Int

    talentArmor: Int

    talentArmorBreak: Int

    talentExertion: Int

    perTurnArmor: Int

    perTurnWillpower: Int

    onRestArmor: Int

    onRestWillpower: Int

    perKillWillpower: Int

    aggro: Int

    chanceCrit: Int

    chanceDodge: Int

    chanceDivert: Int

    neverMiss: Boolean

    movement: Int

    resist: Int

    knockback: Int

    defy: Int

    extraRange: Int

    extraStrengthOnAttack: Int

    acquirementMarketplace: Boolean

    acquirementQuest: String

    acquirementGodstone: String

    acquirementHero: String

    trivia: String

    tier: Tier
  }

  "Available item tiers"
  enum Tier {
    S
    A
    B
    C
  }
`;
