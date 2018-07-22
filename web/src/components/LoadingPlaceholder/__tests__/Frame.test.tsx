import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import Frame from '../Frame';

test('renders correctly', () => {
  const component = renderer.create(<Frame />);
  expect(component.toJSON()).toMatchSnapshot();
});
