// number of game part with banner background

import * as React from 'react';
import styled from 'styled-components';

import { Item } from '@sharedTypes/Item';
import { Colors } from '@styles/colors';
import { Banner } from '../Icons';
import Rank from './Rank';

const Wrapper = styled.div`
  width: 2rem;
  color: ${Colors.red};
  position: absolute;
  z-index: 9;
  top: 0;
  right: 0;
`;

const Part = styled(Rank)`
  top: 0.4rem;
  background: transparent;
  color: ${Colors.white};
  padding-bottom: 0;
`;

type GamePartProps = {
  gamePart: Item['gamePart'];
};

class GamePart extends React.Component<GamePartProps> {
  render() {
    const { gamePart } = this.props;

    return (
      <Wrapper>
        <Part>{gamePart}</Part>
        <Banner />
      </Wrapper>
    );
  }
}

export default GamePart;
