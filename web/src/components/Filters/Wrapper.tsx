import styled from 'styled-components';
import { transparentize } from 'polished';

import { Color } from '@styles/color';

const Wrapper = styled.div`
  background: ${transparentize(0.9, Color.Blue)};
`;

export default Wrapper;
