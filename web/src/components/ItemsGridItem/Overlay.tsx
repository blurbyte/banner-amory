import styled from 'styled-components';

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  width: calc(200% + 1rem);
  height: 100%;
`;

export default Overlay;
