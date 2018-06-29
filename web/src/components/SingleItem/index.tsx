// get detailed item data with GraphQL

import * as React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import { Item } from '@sharedTypes/Item';
import Content from './Content';
import DetailedItem from './DetailedItem';

export const getSingleItem = gql`
  query getSingleItem($slug: String!) {
    item(slug: $slug) {
      name
      slug
      gamePart
      rank
      description
      price
      statStrength
      statWillpower
      statArmor
      statArmorBreak
      talentAllRanks
      talentStrength
      talentWillpower
      talentArmor
      talentArmorBreak
      talentExertion
      perTurnArmor
      perTurnWillpower
      onRestArmor
      onRestWillpower
      perKillWillpower
      aggro
      chanceCrit
      chanceDodge
      chanceDivert
      neverMiss
      movement
      resist
      knockback
      defy
      extraRange
      extraStrengthOnAttack
      acquirementMarketplace
      acquirementQuest
      acquirementGodstone
      acquirementHero
      trivia
    }
  }
`;

type SingleItemProps = {
  path?: string;
  slug?: Item['slug'];
};

export class SingleItem extends React.Component<SingleItemProps> {
  render() {
    const { slug } = this.props;
    return (
      <Content>
        <Query query={getSingleItem} variables={{ slug }}>
          {({ loading, error, data }) => {
            if (loading || error) {
              return null;
            }

            return <DetailedItem {...data.item} />;
          }}
        </Query>
      </Content>
    );
  }
}

export default SingleItem;
