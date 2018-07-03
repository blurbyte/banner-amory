import styled from 'styled-components';
import { transparentize } from 'polished';

import { Colors } from '@styles/colors';

type LabelProps = {
  checked?: boolean;
};

const Label = styled.label<LabelProps>`
  position: relative;
  display: inline-flex;
  justify-content: center;
  height: 2rem;
  line-height: 2rem;
  min-width: 2rem;
  background: ${props => (props.checked ? Colors.red : transparentize(0.8, Colors.blue))};
  color: ${Colors.white};
  font-weight: 400;
  cursor: pointer;
  padding: 0 0.6rem;
  margin-right: 1px;
  text-transform: capitalize;
`;

export default Label;
