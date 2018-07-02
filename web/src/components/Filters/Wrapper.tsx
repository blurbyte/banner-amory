import styled from 'styled-components';
import { transparentize } from 'polished';

import { Colors } from '@styles/colors';

const Wrapper = styled.div`
  background: ${transparentize(0.9, Colors.blue)};
`;

export default Wrapper;
