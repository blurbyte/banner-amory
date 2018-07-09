import styled from 'styled-components';

type WrapperProps = {
  columns: number;
};

const Wrapper = styled.div<WrapperProps>`
  display: grid;
  grid-column: span ${props => props.columns};
`;

export default Wrapper;
