import { Link as BaseLink } from '@reach/router';
import styled from 'styled-components';

import { Colors } from '../../styles/colors';

const StyledLink = styled(BaseLink)`
  display: flex;
  position: relative;
  z-index: 9999;
  width: 12rem;
  height: 5rem;
  background: ${Colors.red};
  color: ${Colors.black};
  font-size: 1.8rem;
  font-weight: 700;
  text-decoration: none;
  margin-right: 3rem;
  padding: 0.4rem 1rem;
  align-items: flex-end;
  justify-content: flex-end;
  user-select: none;
`;

export default StyledLink;
