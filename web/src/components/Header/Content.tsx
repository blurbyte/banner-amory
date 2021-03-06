import styled from 'styled-components';

import BaseContent from '../Content';

const Content = styled(BaseContent)`
  position: relative;
  z-index: 9999;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

export default Content;
