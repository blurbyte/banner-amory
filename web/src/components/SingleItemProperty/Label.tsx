import styled from 'styled-components';
import BaseLabel from '../Label';

const Term = BaseLabel.withComponent('dt');

type LabelProps = {
  statLine?: boolean;
};

const Label = styled(Term)<LabelProps>`
  text-align: ${props => props.statLine && 'right'};
  line-height: ${props => (props.statLine ? 1.2 : 'inherit')};
`;

export default Label;
