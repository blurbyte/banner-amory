import { gql } from 'apollo-server';

export const Item = gql`
  # Banner Saga detailed item
  type Item {
    id: Int!

    name: String!

    # Short identifier used to construct routes and getting images
    slug: String!

    # Banner Saga 1 or 2
    gamePart: Int!

    # Item rank from 1 to 10
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

    # Users' comments about item
    comments: [Comment]
  }

  # Available item tiers
  enum Tier {
    S
    A
    B
    C
  }

  # Categoriest to filter items by
  enum FilterBonus {
    ANY
    MAIN_STAT
    TALENT
    PER_TURN
    ON_REST
    CHANCE
    FROM_MARKET
    MOVEMENT
  }

  enum FilterTier {
    ANY
    S
    A
    B
    C
  }

  # Optional items filter, where 0 means ALL
  input ItemsFilter {
    # Filter by game part (0, 1, 2)
    part: Int

    # Filter by item rank (0...10)
    rank: Int

    # Filter by item stat bonus
    bonus: FilterBonus

    # Filter by item tier (S, A, B, C)
    tier: FilterTier
  }

  extend type Query {
    # List of all items
    items(filter: ItemsFilter): [Item]

    # Single item fetched by providing slug
    item(slug: String!): Item

    # Search for items based on provided phrase
    search(query: String!): [Item]
  }
`;
