// item propert with a label
// for example: name - alette's bracelet

import * as React from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';

import { Colors } from '../../styles/colors';

const Row = styled.dl`
  margin: 1rem 0;
`;

const Label = styled.dt`
  font-size: 1.2rem;
  color: ${transparentize(0.5, Colors.blue)};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

type DetailProps = {
  big?: boolean;
};

const Detail = styled.dd<DetailProps>`
  font-size: ${props => (props.big ? '1.8rem' : '1.4rem')};
  font-weight: ${props => (props.big ? 600 : 'inherit')};
  margin: 0;
`;

type PropertyProps = {
  children: React.ReactNode;
};

class Property extends React.Component<PropertyProps> {
  static Label = Label;

  static Detail = Detail;

  render() {
    const { children } = this.props;
    return <Row>{children}</Row>;
  }
}

export default Property;
