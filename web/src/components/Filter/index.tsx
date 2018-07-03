// group of filter items
// with automatic name applied to each child

import * as React from 'react';

import FilterItem from '../FilterItem';
import Wrapper from './Wrapper';
import Legend from './Legend';

type FilterProps = {
  children: React.ReactNode;
  name: string;
};

class Filter extends React.Component<FilterProps> {
  static Item = FilterItem;

  renderChildren = () => {
    const { children, name } = this.props;
    // pass name prop to all Item children
    return React.Children.map(children, child => {
      return React.cloneElement(child as React.ReactElement<any>, { name });
    });
  };

  render() {
    const { name } = this.props;

    return (
      <Wrapper>
        <Legend>{name}</Legend>
        {this.renderChildren()}
      </Wrapper>
    );
  }
}

export default Filter;
