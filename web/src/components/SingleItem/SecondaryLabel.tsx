// smaller label below main one

import * as React from 'react';
import styled from 'styled-components';

const SmallText = styled.small`
  font-size: 1rem;
`;

type SecondaryLabelProps = {
  secondaryLabel: string;
};

class SecondaryLabel extends React.Component<SecondaryLabelProps> {
  render() {
    const { secondaryLabel } = this.props;
    return (
      <>
        <br />
        <SmallText>{secondaryLabel}</SmallText>
      </>
    );
  }
}

export default SecondaryLabel;
