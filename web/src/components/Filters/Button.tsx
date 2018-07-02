import styled from 'styled-components';
import { transparentize } from 'polished';

import { Colors } from '@styles/colors';

type ButtonProps = {
  isExpanded?: boolean;
};

const Button = styled.button<ButtonProps>`
  color: ${props => (props.isExpanded ? Colors.white : transparentize(0.9, Colors.blue))};
  padding: 0;
  padding-bottom: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 10rem;
  height: 2rem;
  border: none;
  cursor: pointer;
  outline: none;
  transform: ${props => (props.isExpanded ? 'rotateX(180deg)' : 'rotateX(0)')};
  transform-origin: top center;
  transition: all 0.4s ease-in-out;
`;

export default Button;
