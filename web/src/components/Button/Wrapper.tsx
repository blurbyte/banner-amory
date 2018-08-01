import styled from 'styled-components';
import { transparentize } from 'polished';

import { Color } from '@styles/color';

const Wrapper = styled.button`
  position: relative;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 5rem;
  width: 15rem;
  background: ${transparentize(0.9, Color.Blue)};
  padding: 1.4rem 1rem 0 1rem;
  border: 0;
  outline: 0;
  border-top: 4px solid transparent;
  cursor: pointer;
  font-size: 1.8rem;
  font-weight: 700;
  user-select: none;
  transition: all 0.15s linear;

  &:focus {
    border-top: 4px solid ${Color.Blue};
  }
`;

export default Wrapper;
