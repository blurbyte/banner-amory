import * as React from 'react';

import Background from './Background';
import Frame from './Frame';
import Banner from './AnimatedBanner';
import Sword from './AnimatedSword';

class Loader extends React.Component {
  render() {
    return (
      <Background>
        <Frame>
          <Banner />
          <Sword />
        </Frame>
      </Background>
    );
  }
}

export default Loader;
