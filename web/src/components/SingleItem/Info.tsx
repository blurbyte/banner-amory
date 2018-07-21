// basic item info such as image and stats

import * as React from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';

import { Item } from '@sharedTypes/Item';
import { Color } from '@styles/color';
import { slideIn } from '@styles/animations';
import { Banner } from '../Icons';
import Image from '../Image';
import Stat from './Stat';

const Wrapper = styled.div`
  opacity: 0;
  display: flex;
  flex-direction: column;
  animation: ${slideIn()} 300ms ease-in forwards 200ms;
`;

const Stats = styled.div`
  width: 100%;
  color: ${transparentize(0.9, Color.Blue)};
  position: relative;
  z-index: 999;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1rem;
  padding-right: 1.4rem;
`;

const DetailOnly = styled.p`
  margin: 1rem 0;
  text-align: right;
  text-transform: uppercase;
  color: ${Color.Blue};
  font-weight: 600;
`;

type InfoProps = Pick<
  Item,
  | 'slug'
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
  | 'perKillWillpower'
  | 'aggro'
  | 'chanceCrit'
  | 'chanceDodge'
  | 'chanceDivert'
  | 'neverMiss'
  | 'movement'
  | 'resist'
  | 'knockback'
  | 'defy'
  | 'extraRange'
  | 'extraStrengthOnAttack'
>;

class Info extends React.Component<InfoProps> {
  render() {
    const {
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
      perKillWillpower,
      onRestArmor,
      onRestWillpower,
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
      <Wrapper>
        <Image slug={slug} />
        <Stats>
          <Banner />
          <Overlay>
            {statStrength && <Stat label="Strength" stat={statStrength} />}
            {statWillpower && <Stat label="Willpower" stat={statWillpower} />}
            {statArmor && <Stat label="Armor" stat={statArmor} />}
            {statArmorBreak && <Stat label="Break" stat={statArmorBreak} />}
            {talentAllRanks && (
              <Stat label="All" secondaryLabel="talent ranks" stat={talentAllRanks} />
            )}
            {talentStrength && (
              <Stat label="Strength" secondaryLabel="talent ranks" stat={talentStrength} />
            )}
            {talentWillpower && (
              <Stat label="Willpower" secondaryLabel="talent ranks" stat={talentWillpower} />
            )}
            {talentArmor && <Stat label="Armor" secondaryLabel="talent ranks" stat={talentArmor} />}
            {talentArmorBreak && (
              <Stat label="Break" secondaryLabel="talent ranks" stat={talentArmorBreak} />
            )}
            {talentExertion && (
              <Stat label="Exertion" secondaryLabel="talent ranks" stat={talentExertion} />
            )}
            {perTurnArmor && <Stat label="Armor" secondaryLabel="per turn" stat={perTurnArmor} />}
            {perTurnWillpower && (
              <Stat label="Willpower" secondaryLabel="per turn" stat={perTurnWillpower} />
            )}
            {perKillWillpower && (
              <Stat label="Willpower" secondaryLabel="per kill" stat={perKillWillpower} />
            )}
            {onRestArmor && <Stat label="Armor" secondaryLabel="on rest" stat={onRestArmor} />}
            {onRestWillpower && (
              <Stat label="Willpower" secondaryLabel="on rest" stat={onRestWillpower} />
            )}
            {aggro && <Stat label="Agro drawing" stat={aggro} />}
            {chanceCrit && <Stat percent label="Crit" secondaryLabel="chance" stat={chanceCrit} />}
            {chanceDodge && (
              <Stat percent label="Dodge" secondaryLabel="chance" stat={chanceDodge} />
            )}
            {chanceDivert && (
              <Stat percent label="Divert" secondaryLabel="chance" stat={chanceDivert} />
            )}
            {neverMiss && <DetailOnly>Never miss</DetailOnly>}
            {movement && <Stat label="Move range" stat={movement} />}
            {resist && <Stat label="Resist" secondaryLabel="strength damage" stat={resist} />}
            {knockback && <Stat label="Knockback" stat={knockback} />}
            {defy && <Stat label="Defy" stat={defy} />}
            {extraRange && <Stat label="Extra range" stat={extraRange} />}
            {extraStrengthOnAttack && (
              <Stat
                label={'Extra strength'}
                secondaryLabel={'on attack'}
                stat={extraStrengthOnAttack}
              />
            )}
          </Overlay>
        </Stats>
      </Wrapper>
    );
  }
}

export default Info;
