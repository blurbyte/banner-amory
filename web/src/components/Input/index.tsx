import styled from 'styled-components';
import { transparentize } from 'polished';

import { Color } from '@styles/color';

const Input = styled.input`
  line-height: 1;
  border: none;
  outline: none;
  width: 100%;
  height: 5rem;
  padding: 1.6rem 1rem 0 1rem;
  border-top: 4px solid transparent;
  transition: border-top 0.15s linear 0.15s;

  ::placeholder {
    color: ${transparentize(0.5, Color.Blue)};
  }

  &:focus {
    border-top: 4px solid ${Color.Blue};
  }
`;

export default Input;
