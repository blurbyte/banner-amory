// grid containing items under single character

import styled from 'styled-components';

type ListProps = {
  columns: number;
};

const List = styled.ul<ListProps>`
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  grid-gap: 1rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export default List;
