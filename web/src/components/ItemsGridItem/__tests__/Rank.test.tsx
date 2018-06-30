import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import Rank from '../Rank';

test('renders correctly', () => {
  const component = renderer.create(<Rank />);
  expect(component.toJSON()).toMatchSnapshot();
});
