import styled from 'styled-components';

const List = styled.ul`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(10, 1fr);
  grid-auto-rows: 87px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export default List;
