import styled from 'styled-components';

import BaseContent from '../Content';

const Section = BaseContent.withComponent('section');

const Content = styled(Section)`
  margin-top: 5rem;
`;

export default Content;
