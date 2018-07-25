import * as React from 'react';
import { Helmet } from 'react-helmet';

import { Item as ItemProps } from '@sharedTypes/Item';
import Headline from '../AnimatedHeadline';
import Layout from './Layout';
import Info from './Info';
import Details from './Details';

class DetailedItem extends React.Component<ItemProps> {
  render() {
    const {
      name,
      slug,
      description,
      gamePart,
      rank,
      price,
      acquirementMarketplace,
      acquirementQuest,
      acquirementGodstone,
      acquirementHero,
      trivia,
      statStrength,
      statWillpower,
      statArmor,
      statArmorBreak,
      talentAllRanks,
      talentStrength,
      talentWillpower,
      talentArmor,
      talentArmorBreak,
      talentExertion,
      perTurnArmor,
      perTurnWillpower,
      onRestArmor,
      onRestWillpower,
      perKillWillpower,
      aggro,
      chanceCrit,
      chanceDodge,
      chanceDivert,
      neverMiss,
      movement,
      resist,
      knockback,
      defy,
      extraRange,
      extraStrengthOnAttack
    } = this.props;
    return (
      <>
        <Helmet>
          <title>{name}</title>
        </Helmet>
        <Headline>{name}</Headline>
        <Layout>
          <Info
            {...{
              slug,
              statStrength,
              statWillpower,
              statArmor,
              statArmorBreak,
              talentAllRanks,
              talentStrength,
              talentWillpower,
              talentArmor,
              talentArmorBreak,
              talentExertion,
              perTurnArmor,
              perTurnWillpower,
              onRestArmor,
              onRestWillpower,
              perKillWillpower,
              aggro,
              chanceCrit,
              chanceDodge,
              chanceDivert,
              neverMiss,
              movement,
              resist,
              knockback,
              defy,
              extraRange,
              extraStrengthOnAttack
            }}
          />
          <Details
            {...{
              description,
              gamePart,
              rank,
              price,
              acquirementMarketplace,
              acquirementQuest,
              acquirementGodstone,
              acquirementHero,
              trivia
            }}
          />
        </Layout>
      </>
    );
  }
}

export default DetailedItem;
