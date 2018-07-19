import { keyframes } from 'styled-components';

export const slideIn = keyframes`
  from {
    transform: translateY(-1.2rem);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
