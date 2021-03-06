import styled from 'styled-components';

import { Color } from '@styles/color';

const Rank = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 99;
  background: ${Color.White};
  margin: 0;
  padding: 0;
  width: 2rem;
  height: 2rem;
  font-weight: 600;
  padding-bottom: 0.2rem;
`;

export default Rank;
