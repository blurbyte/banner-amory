import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import Nav from '../Nav';

test('renders correctly', () => {
  const component = renderer.create(<Nav />);
  expect(component.toJSON()).toMatchSnapshot();
});
