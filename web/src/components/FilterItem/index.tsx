// single filter item
// use in combination with Filter component

import * as React from 'react';

import Label from './Label';
import Input from './Input';

type FilterItemProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  checked?: boolean;
};

class FilterItem extends React.Component<FilterItemProps> {
  render() {
    const { value, name, checked, onChange } = this.props;
    return (
      <Label checked={checked}>
        {value}
        <Input type="radio" name={name} checked={checked} value={value} onChange={onChange} />
      </Label>
    );
  }
}

export default FilterItem;
