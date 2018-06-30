import * as React from 'react';
import styled from 'styled-components';

import { Item } from '@sharedTypes/Item';
import { Colors } from '@styles/colors';
import ItemName from './ItemName';
import BaseRank from './Rank';
import GamePart from './GamePart';

const Wrapper = styled.section`
  position: relative;
  width: 75%;
  height: 100%;
  background: ${Colors.blue};
`;

const Rank = styled(BaseRank)`
  background: transparent;
  color: ${Colors.white};
`;

type InfoProps = Pick<Item, 'name' | 'gamePart' | 'rank'>;

class Info extends React.Component<InfoProps> {
  render() {
    const { name, gamePart, rank } = this.props;
    return (
      <Wrapper>
        <ItemName>{name}</ItemName>
        <Rank>{rank}</Rank>
        <GamePart gamePart={gamePart} />
      </Wrapper>
    );
  }
}

export default Info;
