import * as React from 'react';

import Frame from './Frame';
import BannerTransition from './BannerTransition';
import SwordTransition from './SwordTransition';

type LoaderProps = {
  isVisible: boolean;
};

class Loader extends React.Component<LoaderProps> {
  render() {
    const { isVisible } = this.props;
    return (
      <Frame>
        <BannerTransition in={isVisible} />
        <SwordTransition in={isVisible} />
      </Frame>
    );
  }
}

export default Loader;
