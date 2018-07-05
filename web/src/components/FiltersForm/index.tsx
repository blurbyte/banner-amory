import * as React from 'react';

import { Filter as FilterType, FilterBonus } from '@sharedTypes/Filter';
import Filter from '../Filter';
import Form from './Form';

type FiltersFormProps = {
  isExpanded?: boolean;
};

type FiltersFormState = Readonly<FilterType>;

class FiltersForm extends React.Component<FiltersFormProps, FiltersFormState> {
  readonly state: FiltersFormState = {
    part: 0,
    rank: 0,
    bonus: FilterBonus.Any
  };

  render() {
    const { isExpanded } = this.props;

    return (
      <Form isExpanded={isExpanded}>
        <Filter name="part" onChange={this.handleChange} checkedValues={this.state}>
          <Filter.Item value={0} label="all" />
          <Filter.Item value={1} />
          <Filter.Item value={2} />
        </Filter>
        <Filter name="rank" onChange={this.handleChange} checkedValues={this.state}>
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
        <Filter name="bonus" onChange={this.handleChange} checkedValues={this.state}>
          <Filter.Item value={FilterBonus.Any} label="any" />
          <Filter.Item value={FilterBonus.MainStat} label="main stat" />
          <Filter.Item value={FilterBonus.Talent} label="talent" />
          <Filter.Item value={FilterBonus.PerTurn} label="per turn" />
          <Filter.Item value={FilterBonus.OnRest} label="on rest" />
          <Filter.Item value={FilterBonus.Chance} label="chance" />
          <Filter.Item value={FilterBonus.FromMarket} label="from market" />
          <Filter.Item value={FilterBonus.Movement} label="movement" />
        </Filter>
      </Form>
    );
  }

  private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    // parse input value to int for part and rank
    this.setState({
      [name]: name !== 'bonus' ? parseInt(value, 10) : value
    } as FiltersFormState);
  };
}

export default FiltersForm;
