import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import Background from '../Background';

test('renders correctly', () => {
  const component = renderer.create(<Background />);
  expect(component.toJSON()).toMatchSnapshot();
});
