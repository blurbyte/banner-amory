import styled from 'styled-components';
import BaseLabel from '../Label';

const Paragraph = BaseLabel.withComponent('p');

const Legend = styled(Paragraph)`
  margin: 0;
  margin-right: 1rem;
  line-height: 2.4rem;
`;

export default Legend;
