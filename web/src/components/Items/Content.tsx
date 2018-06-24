import styled from 'styled-components';

import BaseContent from '../Content';

const Article = BaseContent.withComponent('article');

const Content = styled(Article)`
  margin-top: 1rem;
  margin-bottom: 6rem;
`;

export default Content;
