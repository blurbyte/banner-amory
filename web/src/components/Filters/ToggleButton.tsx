// animated button at the bottom

import * as React from 'react';
import styled from 'styled-components';

import { SimpleArrow } from '../Icons';
import Button from './Button';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  left: 0;
`;

type ToggleButtonProps = {
  onClick: () => void;
  isExpanded?: boolean;
};

class ToggleButton extends React.Component<ToggleButtonProps> {
  render() {
    return (
      <Wrapper>
        <Button type="button" aria-label="Toggle filters" {...this.props}>
          <SimpleArrow />
        </Button>
      </Wrapper>
    );
  }
}

export default ToggleButton;
