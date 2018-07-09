import styled from 'styled-components';

import Headline from '../Headline';

const Paragraph = Headline.withComponent('p');

const Char = styled(Paragraph)`
  text-transform: uppercase;
  margin: 0;
`;

export default Char;
