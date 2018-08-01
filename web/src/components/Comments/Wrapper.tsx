import styled from 'styled-components';

import { slideIn } from '@styles/animations';
import { Color } from '@styles/color';

const Wrapper = styled.div`
  margin-top: 5rem;
  opacity: 0;
  animation: ${slideIn()} 400ms ease-in forwards 1000ms;
  border-top: 1px solid ${Color.Blue};
`;

export default Wrapper;
