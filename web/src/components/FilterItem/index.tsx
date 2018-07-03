// single filter item
// use in combination with Filter component

import * as React from 'react';

import Label from './Label';
import Input from './Input';

type FilterItemProps = {
  value: string;
  name?: string;
  checked?: boolean;
};

class FilterItem extends React.Component<FilterItemProps> {
  render() {
    const { value, name, checked } = this.props;
    return (
      <Label checked={checked}>
        {value}
        <Input type="radio" name={name} checked={checked} value={value} />
      </Label>
    );
  }
}

export default FilterItem;
