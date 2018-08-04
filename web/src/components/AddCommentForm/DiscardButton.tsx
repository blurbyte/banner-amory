import * as React from 'react';
import styled from 'styled-components';

import { Color } from '@styles/color';
import { Cross } from '../Icons';

const Button = styled.button`
  width: 3.4rem;
  height: 3.4rem;
  outline: 0;
  border: 0;
  color: ${Color.Red};
  cursor: pointer;
  margin-right: 2rem;
`;

type DiscardButtonProps = {
  onClick: () => void;
};

class DiscardButton extends React.Component<DiscardButtonProps> {
  render() {
    const { onClick } = this.props;
    return (
      <Button type="button" onClick={onClick} aria-label="Discard comment">
        <Cross />
      </Button>
    );
  }
}

export default DiscardButton;
