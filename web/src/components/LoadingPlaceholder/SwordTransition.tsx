// sword in and out animation

import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { CSSTransition } from 'react-transition-group';

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

  #swordFill {
    y: 54;
    animation: ${moveSwordFill} 12000ms ease-in infinite;
  }
`;

const Transition = styled(CSSTransition)`
  &.sword-enter {
    opacity: 0;
    transform: translateY(-4rem);
  }

  &.sword-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 200ms ease-in 200ms,
      transform 400ms cubic-bezier(0.175, 0.885, 0.32, 1.6) 200ms;
  }

  &.sword-exit {
    opacity: 1;
    transform: translateY(0);
  }

  &.sword-exit-active {
    opacity: 0;
    transform: translateY(-4rem);
    transition: opacity 400ms ease-out, transform 400ms cubic-bezier(0.6, -0.6, 0.735, 0.045);
  }
`;

type SwordTransitionProps = {
  in: boolean;
};

class SwordTransition extends React.Component<SwordTransitionProps> {
  render() {
    return (
      <Transition
        in={this.props.in}
        classNames="sword"
        timeout={600}
        appear
        mountOnEnter
        unmountOnExit
      >
        <Icon>
          <Sword />
        </Icon>
      </Transition>
    );
  }
}

export default SwordTransition;
