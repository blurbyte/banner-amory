import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateY(-1.2rem);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

type WrapperProps = {
  columns: number;
  animationDelay: number;
};

const Wrapper = styled.div<WrapperProps>`
  display: grid;
  grid-column: span ${props => props.columns};
  opacity: 0;
  animation: ${slideIn} 300ms ease-in forwards ${props => props.animationDelay}ms;
`;

export default Wrapper;
