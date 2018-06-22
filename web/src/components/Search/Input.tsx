import styled from 'styled-components';
import { transparentize } from 'polished';

import { Colors } from '../../styles/colors';

const Input = styled.input`
  line-height: 1;
  border: none;
  outline: none;
  width: 25rem;
  height: 5rem;
  background: ${transparentize(0.9, Colors.blue)};
  line-height: 1;
  padding: 1.6rem 6rem 0 1rem;
  border-top: 4px solid transparent;
  transition: border-top 0.15s linear 0.15s;

  ::placeholder {
    color: ${transparentize(0.5, Colors.blue)};
  }

  &:focus {
    border-top: 4px solid ${Colors.blue};
  }
`;

export default Input;
