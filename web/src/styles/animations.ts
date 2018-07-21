import { keyframes } from 'styled-components';

export function slideIn(amount: number = -1.2) {
  return keyframes`
    from {
      transform: translateY(${amount}rem);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  `;
}

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
