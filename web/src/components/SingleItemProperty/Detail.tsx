import styled, { css } from 'styled-components';

import { Colors } from '../../styles/colors';

type DetailProps = {
  big?: boolean;
  statLine?: boolean;
};

const Detail = styled.dd<DetailProps>`
  color: ${Colors.blue};
  line-height: ${props => (props.big ? 1 : 'inherit')};
  font-size: ${props => (props.big ? '1.8rem' : '1.4rem')};
  font-weight: ${props => (props.big ? 600 : 'inherit')};
  margin: 0;
  ${props =>
    props.statLine &&
    css`
      text-align: right;
    `};
`;

export default Detail;
