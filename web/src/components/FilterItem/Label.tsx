import styled from 'styled-components';
import { transparentize } from 'polished';

import { Color } from '@styles/color';

type LabelProps = {
  checked?: boolean;
};

const Label = styled.label<LabelProps>`
  position: relative;
  display: inline-flex;
  justify-content: center;
  height: 2.4rem;
  line-height: 2.4rem;
  min-width: 2.4rem;
  background: ${props => (props.checked ? Color.Red : transparentize(0.8, Color.Blue))};
  color: ${Color.White};
  font-weight: 400;
  cursor: pointer;
  padding: 0 0.6rem;
  margin-right: 1px;
  text-transform: capitalize;
  transition: background 0.15s linear;
`;

export default Label;
