import styled from 'styled-components';

import BaseContent from '../Content';

const Article = BaseContent.withComponent('article');

const Content = styled(Article)`
  margin-top: 5rem;
`;

export default Content;
