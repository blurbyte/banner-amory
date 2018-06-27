import * as React from 'react';

import { Item as ItemProps } from '../../types/Item';
import Headline from '../Headline';
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
