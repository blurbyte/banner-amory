import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import Strong from '../index';

test('renders correctly', () => {
  const component = renderer.create(<Strong />);
  expect(component.toJSON()).toMatchSnapshot();
});
