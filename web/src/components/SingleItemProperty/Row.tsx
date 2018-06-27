import styled, { css } from 'styled-components';

type RowProps = {
  statLine?: boolean;
};

const Row = styled.dl<RowProps>`
  margin: 1rem 0;
  ${props =>
    props.statLine &&
    css`
      display: grid;
      grid-template-columns: 2fr 1fr;
      align-items: start;
    `};
`;

export default Row;
