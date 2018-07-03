// set of filters for Items

import * as React from 'react';

import Filter from '../Filter';
import Wrapper from './Wrapper';
import Content from './Content';
import Caption from './Caption';
import ToggleButton from './ToggleButton';
import Form from './Form';

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
          <Form isExpanded={isExpanded}>
            <Filter name="part">
              <Filter.Item value="all" />
              <Filter.Item value="1" />
              <Filter.Item value="2" />
            </Filter>
            <Filter name="rank">
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
            <Filter name="bonus">
              <Filter.Item value="any" />
              <Filter.Item value="main stat" />
              <Filter.Item value="talent" />
              <Filter.Item value="per turn" />
              <Filter.Item value="on rest" />
              <Filter.Item value="chance" />
              <Filter.Item value="from market" />
              <Filter.Item value="movement" />
            </Filter>
          </Form>
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
