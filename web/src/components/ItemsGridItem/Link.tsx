import { Link as BaseLink } from '@reach/router';
import styled from 'styled-components';

import { Colors } from '@styles/colors';

const Link = styled(BaseLink)`
  display: flex;
  justify-content: flex-end;
  color: ${Colors.blue};
  width: 100%;
  height: 100%;
`;

export default Link;
