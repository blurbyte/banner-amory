import * as React from 'react';
import styled from 'styled-components';

import { Color } from '@styles/color';
import { Cross } from '../Icons';

const Wrapper = styled.button`
  width: 3.4rem;
  height: 3.4rem;
  outline: 0;
  border: 0;
  color: ${Color.Red};
  cursor: pointer;
  margin-right: 2rem;
`;

class CloseButton extends React.Component {
  render() {
    return (
      <Wrapper type="button" aria-label="Discard comment">
        <Cross />
      </Wrapper>
    );
  }
}

export default CloseButton;
