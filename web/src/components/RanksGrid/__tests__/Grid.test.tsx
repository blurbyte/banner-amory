import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import Grid from '../Grid';

test('renders correctly', () => {
  const component = renderer.create(<Grid />);
  expect(component.toJSON()).toMatchSnapshot();
});
