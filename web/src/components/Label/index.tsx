import styled from 'styled-components';
import { transparentize } from 'polished';

import { Color } from '@styles/color';

const Label = styled.label`
  font-size: 1.2rem;
  color: ${transparentize(0.5, Color.Blue)};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export default Label;
