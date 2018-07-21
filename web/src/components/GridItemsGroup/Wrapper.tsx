import styled from 'styled-components';

import { slideIn } from '@styles/animations';

type WrapperProps = {
  columns: number;
  animationDelay?: number;
};

const Wrapper = styled.div<WrapperProps>`
  display: grid;
  grid-column: span ${props => props.columns};
  opacity: 0;
  animation: ${slideIn()} 300ms ease-in forwards
    ${props => (props.animationDelay ? props.animationDelay : 0)}ms;
`;

export default Wrapper;
