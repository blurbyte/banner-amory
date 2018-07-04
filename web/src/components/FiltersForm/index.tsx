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
    part: 'all',
    rank: 'all',
    bonus: FilterBonus.any
  };

  render() {
    const { isExpanded } = this.props;

    return (
      <Form isExpanded={isExpanded}>
        <Filter name="part" onChange={this.handleChange} checkedValues={this.state}>
          <Filter.Item value="all" />
          <Filter.Item value="1" />
          <Filter.Item value="2" />
        </Filter>
        <Filter name="rank" onChange={this.handleChange} checkedValues={this.state}>
          <Filter.Item value="all" />
          <Filter.Item value="1" />
          <Filter.Item value="2" />
          <Filter.Item value="3" />
          <Filter.Item value="4" />
          <Filter.Item value="5" />
          <Filter.Item value="6" />
          <Filter.Item value="7" />
          <Filter.Item value="8" />
          <Filter.Item value="9" />
          <Filter.Item value="10" />
        </Filter>
        <Filter name="bonus" onChange={this.handleChange} checkedValues={this.state}>
          <Filter.Item value={FilterBonus.any} label="any" />
          <Filter.Item value={FilterBonus.mainStat} label="main stat" />
          <Filter.Item value={FilterBonus.talent} label="talent" />
          <Filter.Item value={FilterBonus.perTurn} label="per turn" />
          <Filter.Item value={FilterBonus.onRest} label="on rest" />
          <Filter.Item value={FilterBonus.chance} label="chance"/>
          <Filter.Item value={FilterBonus.fromMarket} label="from market"/>
          <Filter.Item value={FilterBonus.movement} label="movement"/>
        </Filter>
      </Form>
    );
  }

  private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    } as FiltersFormState);
  };
}

export default FiltersForm;
