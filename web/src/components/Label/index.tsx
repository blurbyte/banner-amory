import styled from 'styled-components';
import { transparentize } from 'polished';

import { Colors } from '@styles/colors';

const Label = styled.label`
  font-size: 1.2rem;
  color: ${transparentize(0.5, Colors.blue)};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export default Label;
