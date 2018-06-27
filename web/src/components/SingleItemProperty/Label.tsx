import styled from 'styled-components';
import { transparentize } from 'polished';

import { Colors } from '../../styles/colors';

type LabelProps = {
  statLine?: boolean;
};

const Label = styled.dt<LabelProps>`
  font-size: 1.2rem;
  color: ${transparentize(0.5, Colors.blue)};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-align: ${props => props.statLine && 'right'};
  line-height: ${props => (props.statLine ? 1.2 : 'inherit')};
`;

export default Label;
