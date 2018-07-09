// simple wrapper to group filters

import styled from 'styled-components';

const Group = styled.div`
  display: flex;
  flex-wrap: wrap;

  &:not(:first-child) {
    margin-top: 1.2rem;
  }
`;

export default Group;
