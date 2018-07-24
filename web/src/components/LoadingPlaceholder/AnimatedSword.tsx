// sword in animation

import * as React from 'react';
import styled, { keyframes } from 'styled-components';

import { slideIn } from '@styles/animations';
import { Sword } from '../Icons';

const moveSwordFill = keyframes`
  0% {
    y: 54;
  }
  10% {
    y: 54;
  }
  40% {
    y: 250;
  }
  60% {
    y: 250;
  }
  90% {
    y: 54;
  }
  100% {
    y: 54;
  }
`;

const Icon = styled.div`
  position: absolute;
  top: 3rem;
  left: 2.5rem;
  opacity: 0;
  animation: ${slideIn(-4)} 600ms cubic-bezier(0.175, 0.885, 0.32, 1.6) forwards 200ms;

  #swordFill {
    y: 54;
    animation: ${moveSwordFill} 12000ms ease-in infinite;
  }
`;

class AnimatedSword extends React.Component {
  render() {
    return (
      <Icon>
        <Sword />
      </Icon>
    );
  }
}

export default AnimatedSword;
