import { Link as BaseLink } from '@reach/router';
import styled from 'styled-components';

import { Color } from '@styles/color';

const Link = styled(BaseLink)`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  color: ${Color.Blue};
  padding: 0;
  margin: 0;
  outline: none;
`;

export default Link;
