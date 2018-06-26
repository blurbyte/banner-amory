import * as React from 'react';

import Img from './Img';

type ImageProps = {
  slug: string;
};

class Image extends React.Component<ImageProps> {
  render() {
    const { slug } = this.props;

    return <Img src={`${process.env.STORAGE_URL}${slug}.png`} />;
  }
}

export default Image;
