import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import Group from '../Group';

test('renders correctly', () => {
  const component = renderer.create(<Group />);
  expect(component.toJSON()).toMatchSnapshot();
});
