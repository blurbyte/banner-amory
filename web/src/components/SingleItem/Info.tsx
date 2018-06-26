// basic item info such as image and stats

import * as React from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';

import { Item } from '../../types/Item';
import { Colors } from '../../styles/colors';
import { Banner } from '../Icons';
import Image from '../Image';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Stats = styled.div`
  width: 100%;
  color: ${transparentize(0.9, Colors.blue)};
`;

type InfoProps = Pick<Item, 'slug'>;

class Info extends React.Component<InfoProps> {
  render() {
    const { slug } = this.props;
    return (
      <Wrapper>
        <Image slug={slug} />
        <Stats>
          <Banner />
        </Stats>
      </Wrapper>
    );
  }
}

export default Info;
