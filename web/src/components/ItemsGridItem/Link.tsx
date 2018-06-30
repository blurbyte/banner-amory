import { Link as BaseLink } from '@reach/router';
import styled from 'styled-components';

import { Colors } from '@styles/colors';

const Link = styled(BaseLink)`
  color: ${Colors.blue};
`;

export default Link;
