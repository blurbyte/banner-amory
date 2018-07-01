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
import ImageOverlay from './ImageOverlay';

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
      <Item>
        <Link
          onMouseEnter={this.showOverlay}
          onMouseLeave={this.hideOverlay}
          onFocus={this.showOverlay}
          onBlur={this.hideOverlay}
          to={`/item/${slug}`}
        >
          {overlayIsVisible && (
            <Overlay>
              <Info name={name} gamePart={gamePart} rank={rank} />
            </Overlay>
          )}
          {overlayIsVisible && <ImageOverlay />}
          <Image slug={slug} />
          <FadeOut isVisible={!overlayIsVisible}>
            <Rank>{rank}</Rank>
          </FadeOut>
        </Link>
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
