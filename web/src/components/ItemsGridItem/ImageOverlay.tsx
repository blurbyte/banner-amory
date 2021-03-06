import styled from 'styled-components';
import { transparentize } from 'polished';

import { Color } from '@styles/color';
import { fadeIn } from '@styles/animations';

const ImageOverlay = styled.div`
  position: absolute;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background: ${transparentize(0.6, Color.Blue)};
  animation: ${fadeIn} 200ms ease-in forwards 200ms;
`;

export default ImageOverlay;
