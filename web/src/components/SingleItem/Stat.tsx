// stat line on the banner

import * as React from 'react';
import styled from 'styled-components';

import { Color } from '@styles/color';
import Property from '../SingleItemProperty';
import SecondaryLabel from './SecondaryLabel';

function isNegative(stat: number) {
  return stat < 0;
}

type ColorizerProps = {
  isNegative: boolean;
};

const Colorizer = styled.span<ColorizerProps>`
  color: ${props => (props.isNegative ? Color.Red : Color.Blue)};
`;

type StatProps = {
  label: string;
  secondaryLabel?: string;
  stat: number;
  percent?: boolean;
};

class Stat extends React.Component<StatProps> {
  render() {
    const { label, secondaryLabel, stat, percent } = this.props;

    return (
      <Property statLine>
        <Property.Label>
          {
            <>
              {label}
              {secondaryLabel && <SecondaryLabel secondaryLabel={secondaryLabel} />}
            </>
          }
        </Property.Label>
        <Property.Detail big>
          <Colorizer isNegative={isNegative(stat)}>
            {!percent && !isNegative(stat) && '+'}
            {stat}
            {percent && '%'}
          </Colorizer>
        </Property.Detail>
      </Property>
    );
  }
}

export default Stat;
