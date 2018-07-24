// background banner in animation

import * as React from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';

import { Color } from '@styles/color';
import { slideIn } from '@styles/animations';
import { Banner } from '../Icons';

const Icon = styled.div`
  color: ${transparentize(0.9, Color.Blue)};
  opacity: 0;
  animation: ${slideIn(-12)} 400ms ease-in forwards;
`;

class BannerTransition extends React.Component {
  render() {
    return (
      <Icon>
        <Banner />
      </Icon>
    );
  }
}

export default BannerTransition;
