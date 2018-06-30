import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import ItemName from '../ItemName';

test('renders correctly', () => {
  const component = renderer.create(<ItemName />);
  expect(component.toJSON()).toMatchSnapshot();
});
