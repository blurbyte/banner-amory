import * as React from 'react';

import { Filter as FilterType, FilterBonus, OrderBy } from '@sharedTypes/Filter';
import Filter from '../Filter';
import Form from './Form';
import Group from './Group';

type FiltersFormProps = {
  checkedValues: FilterType;
  changeFilter: (name: string, value: string | number) => void;
  isExpanded?: boolean;
};

class FiltersForm extends React.Component<FiltersFormProps> {
  render() {
    const { checkedValues, isExpanded } = this.props;

    return (
      <Form isExpanded={isExpanded}>
        <Group>
          <Filter name="part" onChange={this.handleChange} checkedValues={checkedValues}>
            <Filter.Item value={0} label="all" />
            <Filter.Item value={1} />
            <Filter.Item value={2} />
          </Filter>
          <Filter name="rank" onChange={this.handleChange} checkedValues={checkedValues}>
            <Filter.Item value={0} label="all" />
            <Filter.Item value={1} />
            <Filter.Item value={2} />
            <Filter.Item value={3} />
            <Filter.Item value={4} />
            <Filter.Item value={5} />
            <Filter.Item value={6} />
            <Filter.Item value={7} />
            <Filter.Item value={8} />
            <Filter.Item value={9} />
            <Filter.Item value={10} />
          </Filter>
          <Filter name="bonus" onChange={this.handleChange} checkedValues={checkedValues}>
            <Filter.Item value={FilterBonus.Any} label="any" />
            <Filter.Item value={FilterBonus.MainStat} label="main stat" />
            <Filter.Item value={FilterBonus.Talent} label="talent" />
            <Filter.Item value={FilterBonus.PerTurn} label="per turn" />
            <Filter.Item value={FilterBonus.OnRest} label="on rest" />
            <Filter.Item value={FilterBonus.Chance} label="chance" />
            <Filter.Item value={FilterBonus.FromMarket} label="from market" />
            <Filter.Item value={FilterBonus.Movement} label="movement" />
          </Filter>
        </Group>
        <Group>
          <Filter
            name="orderBy"
            label="order by"
            onChange={this.handleChange}
            checkedValues={checkedValues}
          >
            <Filter.Item value={OrderBy.Rank} label="rank" />
            <Filter.Item value={OrderBy.Alphabetically} label="alphabetically" />
          </Filter>
        </Group>
      </Form>
    );
  }

  private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    // parse input value to int for part and rank
    const parsedValue = name === 'part' || name === 'rank' ? parseInt(value, 10) : value;
    this.props.changeFilter(name, parsedValue);
  };
}

export default FiltersForm;
