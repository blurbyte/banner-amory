import styled from 'styled-components';
import { transparentize } from 'polished';

import { Color } from '@styles/color';

const Form = styled.form`
  display: grid;
  grid-template-columns: 15rem 1fr 25rem;
  border-bottom: 1px solid ${transparentize(0.5, Color.Blue)};
`;

export default Form;
