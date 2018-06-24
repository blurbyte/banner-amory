import * as React from 'react';

import Wrapper from './Wrapper';
import Image from './Image';
import Rank from './Rank';

class Item extends React.Component {
  render() {
    return (
      <Wrapper>
        <Image src={`${process.env.STORAGE_URL}alettes-bracelet.png`} />
        <Rank>5</Rank>
      </Wrapper>
    );
  }
}

export default Item;
