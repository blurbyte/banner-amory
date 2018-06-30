import styled from 'styled-components';
import { transparentize } from 'polished';

import { Colors } from '@styles/colors';

const Item = styled.li`
  position: relative;
  background: ${transparentize(0.9, Colors.blue)};
  z-index: 99;
  user-select: none;
`;

export default Item;
