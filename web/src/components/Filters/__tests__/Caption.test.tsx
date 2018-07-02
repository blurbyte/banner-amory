import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import Caption from '../Caption';

test('renders correctly', () => {
  const component = renderer.create(<Caption />);
  expect(component.toJSON()).toMatchSnapshot();
});
