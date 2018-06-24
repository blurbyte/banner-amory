import styled from 'styled-components';

import { Colors } from '../../styles/colors';

const Rank = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 99;
  background: ${Colors.white};
  margin: 0;
  padding: 0;
  width: 2rem;
  height: 2rem;
  font-weight: 600;
`;

export default Rank;
