import styled from 'styled-components';

import { fadeIn } from '@styles/animations';
import BaseHeadline from '../Headline';

const AnimatedHeadline = styled(BaseHeadline)`
  animation: ${fadeIn} 400ms ease-in forwards;
`;

export default AnimatedHeadline;
