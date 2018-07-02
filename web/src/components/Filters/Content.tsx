import styled from 'styled-components';
import BaseContent from '../Content';

const Section = BaseContent.withComponent('section');

const Content = styled(Section)`
  position: relative;
  z-index: 99;
  user-select: none;
  margin-bottom: 2rem;
`;

export default Content;
