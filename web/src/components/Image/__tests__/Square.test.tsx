import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import Square from '../Square';

test('renders correctly', () => {
  const component = renderer.create(<Square />);
  expect(component.toJSON()).toMatchSnapshot();
});
