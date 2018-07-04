import * as React from 'react';

import Filter from '../Filter';
import Form from './Form';

type FiltersFormProps = {
  isExpanded?: boolean;
};

const initialState = {
  part: 'all',
  rank: 'all',
  bonus: 'any'
};

type FiltersFormState = Readonly<{
  [T in keyof typeof initialState]?: string
}>;

class FiltersForm extends React.Component<FiltersFormProps, FiltersFormState> {
  readonly state = initialState;

  render() {
    const { isExpanded } = this.props;

    return (
      <Form isExpanded={isExpanded}>
        <Filter name="part">
          <Filter.Item
            value="all"
            onChange={this.handleChange}
            checked={this.state.part === 'all'}
          />
          <Filter.Item value="1" onChange={this.handleChange} checked={this.state.part === '1'} />
          <Filter.Item value="2" onChange={this.handleChange} checked={this.state.part === '2'} />
        </Filter>
        <Filter name="rank">
          <Filter.Item
            value="all"
            onChange={this.handleChange}
            checked={this.state.rank === 'all'}
          />
          <Filter.Item value="1" onChange={this.handleChange} checked={this.state.rank === '1'} />
          <Filter.Item value="2" onChange={this.handleChange} checked={this.state.rank === '2'} />
          <Filter.Item value="3" onChange={this.handleChange} checked={this.state.rank === '3'} />
          <Filter.Item value="4" onChange={this.handleChange} checked={this.state.rank === '4'} />
          <Filter.Item value="5" onChange={this.handleChange} checked={this.state.rank === '5'} />
          <Filter.Item value="6" onChange={this.handleChange} checked={this.state.rank === '6'} />
          <Filter.Item value="7" onChange={this.handleChange} checked={this.state.rank === '7'} />
          <Filter.Item value="8" onChange={this.handleChange} checked={this.state.rank === '8'} />
          <Filter.Item value="9" onChange={this.handleChange} checked={this.state.rank === '9'} />
          <Filter.Item value="10" onChange={this.handleChange} checked={this.state.rank === '10'} />
        </Filter>
        <Filter name="bonus">
          <Filter.Item
            value="any"
            onChange={this.handleChange}
            checked={this.state.bonus === 'any'}
          />
          <Filter.Item
            value="mainStat"
            onChange={this.handleChange}
            checked={this.state.bonus === 'mainStat'}
          />
          <Filter.Item
            value="talent"
            onChange={this.handleChange}
            checked={this.state.bonus === 'talent'}
          />
          <Filter.Item
            value="perTurn"
            onChange={this.handleChange}
            checked={this.state.bonus === 'perTurn'}
          />
          <Filter.Item
            value="onRest"
            onChange={this.handleChange}
            checked={this.state.bonus === 'onRest'}
          />
          <Filter.Item
            value="chance"
            onChange={this.handleChange}
            checked={this.state.bonus === 'chance'}
          />
          <Filter.Item
            value="fromMarket"
            onChange={this.handleChange}
            checked={this.state.bonus === 'fromMarket'}
          />
          <Filter.Item
            value="movement"
            onChange={this.handleChange}
            checked={this.state.bonus === 'movement'}
          />
        </Filter>
      </Form>
    );
  }

  private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };
}

export default FiltersForm;
