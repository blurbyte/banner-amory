// a bit more details about an item

import * as React from 'react';
import styled from 'styled-components';

import { Item } from '@sharedTypes/Item';
import { slideIn } from '@styles/animations';
import Property from '../SingleItemProperty';
import Strong from '../Strong';

const Wrapper = styled.div`
  opacity: 0;
  margin-left: 2rem;
  animation: ${slideIn} 400ms ease-in forwards 600ms;
`;

const Description = styled.p`
  margin: 0;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  line-height: 1.2;
  font-style: italic;
`;

type DetailsProps = Pick<
  Item,
  | 'description'
  | 'gamePart'
  | 'rank'
  | 'price'
  | 'acquirementMarketplace'
  | 'acquirementQuest'
  | 'acquirementGodstone'
  | 'acquirementHero'
  | 'trivia'
>;

class Details extends React.Component<DetailsProps> {
  render() {
    const {
      description,
      gamePart,
      rank,
      price,
      acquirementMarketplace,
      acquirementQuest,
      acquirementGodstone,
      acquirementHero,
      trivia
    } = this.props;
    return (
      <Wrapper>
        {description && <Description>{description}</Description>}
        {/* part */}
        <Property>
          <Property.Label>Part</Property.Label>
          <Property.Detail>{`The Banner Saga ${gamePart}`}</Property.Detail>
        </Property>
        {/* rank */}
        <Property>
          <Property.Label>Rank</Property.Label>
          <Property.Detail big>{rank}</Property.Detail>
        </Property>
        {/* price */}
        {price && (
          <Property>
            <Property.Label>Price</Property.Label>
            <Property.Detail big>{price}</Property.Detail>
          </Property>
        )}
        {/* acquirements */}
        <Property>
          <Property.Label>How to get</Property.Label>
          {acquirementMarketplace && <Property.Detail>Bought from market</Property.Detail>}
          {acquirementQuest && <Property.Detail>{acquirementQuest}</Property.Detail>}
          {acquirementGodstone && (
            <Property.Detail>
              {'Found at '}
              <Strong>{acquirementGodstone}</Strong>
              {' godstone'}
            </Property.Detail>
          )}
          {acquirementHero && (
            <Property.Detail>
              <Strong>{acquirementHero}</Strong>
              {' starts with it'}
            </Property.Detail>
          )}
          {!acquirementMarketplace &&
            !acquirementQuest &&
            !acquirementGodstone &&
            !acquirementHero && <Property.Detail>Unknown</Property.Detail>}
        </Property>
        {/* trivia */}
        {trivia && (
          <Property>
            <Property.Label>Trivia</Property.Label>
            <Property.Detail>{trivia}</Property.Detail>
          </Property>
        )}
      </Wrapper>
    );
  }
}

export default Details;
