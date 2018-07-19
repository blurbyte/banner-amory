import styled from 'styled-components';
import { transparentize } from 'polished';

import { Color } from '@styles/color';
import { fadeIn } from '@styles/animations';

const Wrapper = styled.div`
  background: ${transparentize(0.9, Color.Blue)};
  opacity: 0;
  animation: ${fadeIn} 800ms linear forwards 200ms;
`;

export default Wrapper;
