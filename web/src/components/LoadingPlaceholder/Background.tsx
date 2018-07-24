import styled from 'styled-components';

import { Color } from '@styles/color';

const Background = styled.div`
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 29rem;
  height: 100%;
  overflow: hidden;
  background: ${Color.White};
  display: flex;
  justify-content: center;
`;

export default Background;
