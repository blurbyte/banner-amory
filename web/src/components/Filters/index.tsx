// set of filters for Items

import * as React from 'react';

import FiltersForm from '../FiltersForm';
import Wrapper from './Wrapper';
import Content from './Content';
import Caption from './Caption';
import ToggleButton from './ToggleButton';

const initialState = {
  isExpanded: false
};

type FiltersState = Readonly<typeof initialState>;

class Filters extends React.Component<{}, FiltersState> {
  readonly state = initialState;

  render() {
    const { isExpanded } = this.state;

    return (
      <Wrapper>
        <Content>
          <Caption onClick={this.toggle}>Filter &amp; Sort</Caption>
          <FiltersForm isExpanded={isExpanded} />
          <ToggleButton onClick={this.toggle} isExpanded={isExpanded} />
        </Content>
      </Wrapper>
    );
  }

  private toggle = () => {
    this.setState(state => ({
      isExpanded: !state.isExpanded
    }));
  };
}

export default Filters;
