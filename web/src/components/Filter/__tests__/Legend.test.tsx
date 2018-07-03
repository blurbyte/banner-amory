import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import Legend from '../Legend';

test('renders correctly', () => {
  const component = renderer.create(<Legend />);
  expect(component.toJSON()).toMatchSnapshot();
});
