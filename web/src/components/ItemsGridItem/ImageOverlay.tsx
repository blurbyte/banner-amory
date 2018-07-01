import styled, { keyframes } from 'styled-components';
import { transparentize } from 'polished';

import { Colors } from '@styles/colors';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background: ${transparentize(0.6, Colors.blue)};
  animation: ${fadeIn} 0.2s ease-in forwards 0.2s;
`;

export default ImageOverlay;
