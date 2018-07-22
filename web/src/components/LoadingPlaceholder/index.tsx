// custom loading placeholder

import * as React from 'react';

import Wrapper from './Wrapper';
import Loader from './Loader';

type LoadingPlaceholderProps = {
  isVisible: boolean;
};

class LoadingPlaceholder extends React.Component<LoadingPlaceholderProps> {
  render() {
    return (
      <Wrapper>
        <Loader isVisible={this.props.isVisible} />
      </Wrapper>
    );
  }
}

export default LoadingPlaceholder;
