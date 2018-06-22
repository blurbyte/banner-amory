import { Link as BaseLink } from '@reach/router';
import styled from 'styled-components';

const Link = styled(BaseLink)`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0.4rem 1rem;
  align-items: flex-end;
  justify-content: flex-end;
  color: inherit;
  text-decoration: inherit;
  outline: none;
  border-top: 4px solid transparent;
  transition: border-top 0.15s linear 0.15s;
`;

export default Link;
