// custom loading placeholder
// display loader after delay
// so if data got loaded fast it won't be shown

import * as React from 'react';
import Loader from './Loader';

type LoadingPlaceholderState = Readonly<{
  showLoader: boolean;
}>;

class LoadingPlaceholder extends React.Component<{}, LoadingPlaceholderState> {
  readonly state = {
    showLoader: false
  };

  private delay = setTimeout(() => {
    this.setState({ showLoader: true });
  }, 1000);

  componentWillUnmount() {
    clearTimeout(this.delay);
  }

  render() {
    return this.state.showLoader ? <Loader /> : null;
  }
}

export default LoadingPlaceholder;
