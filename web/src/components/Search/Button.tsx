import * as React from 'react';
import styled from 'styled-components';

import { Magnifier } from '../Icons';

const Hitbox = styled.button`
  border: none;
  background: transparent;
  position: absolute;
  outline: none;
  padding: 0;
  cursor: pointer;
  top: 0.8rem;
  right: 0.8rem;
`;

class Button extends React.Component {
  render() {
    return (
      <Hitbox type="submit">
        <Magnifier />
      </Hitbox>
    );
  }
}

export default Button;
