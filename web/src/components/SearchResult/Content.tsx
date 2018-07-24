import styled from 'styled-components';

import BaseContent from '../Content';

const Article = BaseContent.withComponent('article');

const Content = styled(Article)`
  position: relative;
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

export default Content;
