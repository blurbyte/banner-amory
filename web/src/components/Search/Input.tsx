import styled from 'styled-components';
import { transparentize } from 'polished';

import { Color } from '@styles/color';
import BaseInput from '../Input';

const Input = styled(BaseInput)`
  width: 25rem;
  background: ${transparentize(0.9, Color.Blue)};
  padding-right: 6rem;
`;

export default Input;
