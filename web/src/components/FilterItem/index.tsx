// single filter item
// use in combination with Filter component

import * as React from 'react';

import { Filter } from '@sharedTypes/Filter';
import Label from './Label';
import Input from './Input';

type FilterValue = Filter[keyof Filter];

// most props are optional since it's parent Filter is passing them down
// pass label prop if you want differnet caption to be displayed than default name
type FilterItemProps = {
  value: FilterValue;
  name?: keyof Filter;
  checkedValue?: FilterValue;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
};

class FilterItem extends React.Component<FilterItemProps> {
  render() {
    const { value, name, checkedValue, onChange, label } = this.props;
    return (
      <Label checked={checkedValue === value}>
        {label ? label : value}
        <Input
          type="radio"
          name={name}
          checked={checkedValue === value}
          value={value}
          onChange={onChange}
        />
      </Label>
    );
  }
}

export default FilterItem;
