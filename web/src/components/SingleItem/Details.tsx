// a bit more details about an item

import * as React from 'react';
import styled from 'styled-components';

import { Item } from '@sharedTypes/Item';
import { slideIn } from '@styles/animations';
import Property from '../SingleItemProperty';
import Strong from '../Strong';
import Comments from '../Comments';

const Wrapper = styled.div`
  margin-left: 3rem;
`;

const Properties = styled.div`
  opacity: 0;
  animation: ${slideIn()} 400ms ease-in forwards 600ms;
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
  | 'id'
  | 'description'
  | 'gamePart'
  | 'rank'
  | 'price'
  | 'acquirementMarketplace'
  | 'acquirementQuest'
  | 'acquirementGodstone'
  | 'acquirementHero'
  | 'trivia'
  | 'comments'
>;

class Details extends React.Component<DetailsProps> {
  render() {
    const {
      id,
      description,
      gamePart,
      rank,
      price,
      acquirementMarketplace,
      acquirementQuest,
      acquirementGodstone,
      acquirementHero,
      trivia,
      comments
    } = this.props;
    return (
      <Wrapper>
        <Properties>
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
        </Properties>
        <Comments itemId={id} comments={comments} />
      </Wrapper>
    );
  }
}

export default Details;
