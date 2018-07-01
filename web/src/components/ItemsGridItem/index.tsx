// single item in the grid

import * as React from 'react';

import { ItemBasic as ItemsGridItemProps } from '@sharedTypes/Item';
import Image from '../Image';
import Item from './Item';
import Link from './Link';
import Overlay from './Overlay';
import Info from './Info';
import Rank from './Rank';
import FadeOut from './FadeOut';

const initialState = {
  overlayIsVisible: false
};

type ItemsGridItemState = Readonly<typeof initialState>;

class ItemsGridItem extends React.Component<ItemsGridItemProps, ItemsGridItemState> {
  readonly state = initialState;

  render() {
    const { name, slug, gamePart, rank } = this.props;
    const { overlayIsVisible } = this.state;

    return (
      <Item onMouseEnter={this.showOverlay} onMouseLeave={this.hideOverlay}>
        {overlayIsVisible && (
          <Overlay>
            <Link to={`/item/${slug}`}>
              <Info name={name} gamePart={gamePart} rank={rank} />
            </Link>
          </Overlay>
        )}
        <Image slug={slug} />
        <FadeOut isVisible={!overlayIsVisible}>
          <Rank>{rank}</Rank>
        </FadeOut>
      </Item>
    );
  }

  private showOverlay = () => {
    this.setState({
      overlayIsVisible: true
    });
  };

  private hideOverlay = () => {
    this.setState({
      overlayIsVisible: false
    });
  };
}

export default ItemsGridItem;
