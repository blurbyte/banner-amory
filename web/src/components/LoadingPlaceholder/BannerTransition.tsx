// background banner in and out animation

import * as React from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { transparentize } from 'polished';

import { Color } from '@styles/color';
import { Banner } from '../Icons';

const Icon = styled.div`
  color: ${transparentize(0.9, Color.Blue)};
`;

const Transition = styled(CSSTransition)`
  &.banner-enter {
    opacity: 0;
    transform: translateY(-12rem);
  }

  &.banner-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 400ms ease-in, transform 600ms ease-in;
  }

  &.banner-exit {
    opacity: 1;
    transform: translateY(0);
  }

  &.banner-exit-active {
    opacity: 0;
    transform: translateY(-12rem);
    transition: opacity 400ms ease-out 400ms, transform 400ms ease-out 400ms;
  }
`;

type BannerTransitionProps = {
  in: boolean;
};

class BannerTransition extends React.Component<BannerTransitionProps> {
  render() {
    return (
      <Transition
        in={this.props.in}
        classNames="banner"
        timeout={600}
        appear
        mountOnEnter
        unmountOnExit
      >
        <Icon>
          <Banner />
        </Icon>
      </Transition>
    );
  }
}

export default BannerTransition;
