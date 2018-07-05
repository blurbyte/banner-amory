// wrapper is used here to avoid unknown props React warning

import styled from 'styled-components';
import { transparentize } from 'polished';

import { Color } from '@styles/color';
import Link from './Link';

type WrapperProps = {
  isActive?: boolean;
};

const Wrapper = styled.div<WrapperProps>`
  display: block;
  position: relative;
  z-index: 9999;
  width: 12rem;
  height: 5rem;
  background: ${props => (props.isActive ? Color.Red : transparentize(0.9, Color.Blue))};
  color: ${props => (props.isActive ? Color.Black : Color.Blue)};
  font-size: 1.8rem;
  font-weight: 700;
  text-decoration: none;
  margin-right: 3rem;
  user-select: none;
  transition: all 0.15s linear;

  & > ${Link}:focus {
    border-top: 4px solid ${props => (props.isActive ? Color.Black : Color.Blue)};
  }
`;

export default Wrapper;
