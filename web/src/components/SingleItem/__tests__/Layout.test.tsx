import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import Layout from '../Layout';

test('renders correctly', () => {
  const component = renderer.create(<Layout />);
  expect(component.toJSON()).toMatchSnapshot();
});
