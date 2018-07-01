// item thumb wrapper
// modifies the look of overlay if it is last element in row
// or the last element of the grid

import styled from 'styled-components';
import { transparentize } from 'polished';

import { Colors } from '@styles/colors';
import Overaly from './Overlay';

const Item = styled.li`
  background: ${transparentize(0.9, Colors.blue)};
  user-select: none;

  &:nth-child(10n) ${Overaly}, &:last-child:not(:first-child) ${Overaly} {
    left: auto;
    right: 0;
    justify-content: flex-start;
  }
`;

export default Item;
