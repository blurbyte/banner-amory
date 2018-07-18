import * as React from 'react';

import Square from './Square';
import Img from './Img';

type ImageProps = {
  slug: string;
};

class Image extends React.Component<ImageProps> {
  render() {
    const { slug } = this.props;

    return (
      <Square>
        <Img src={`${process.env.STORAGE_URL}${slug}.png`} />
      </Square>
    );
  }
}

export default Image;
