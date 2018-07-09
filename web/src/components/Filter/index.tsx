// group of filter items
// with automatic name, onChange and checkedValue applied to each child

import * as React from 'react';

import { Filter as FilterType } from '@sharedTypes/Filter';
import FilterItem from '../FilterItem';
import Wrapper from './Wrapper';
import Legend from './Legend';

export type FilterProps = {
  children: React.ReactNode;
  name: keyof FilterType;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checkedValues: FilterType;
  label?: string;
};

class Filter extends React.Component<FilterProps> {
  static Item = FilterItem;

  renderChildren = () => {
    const { children, name, onChange, checkedValues } = this.props;
    let checkedValue = checkedValues[name];

    // pass name prop to all Item children
    return React.Children.map(children, child => {
      return React.cloneElement(child as React.ReactElement<any>, { name, onChange, checkedValue });
    });
  };

  render() {
    const { name, label } = this.props;

    return (
      <Wrapper>
        <Legend>{label ? label : name}</Legend>
        {this.renderChildren()}
      </Wrapper>
    );
  }
}

export default Filter;
