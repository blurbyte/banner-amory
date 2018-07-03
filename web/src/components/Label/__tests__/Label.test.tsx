import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import Label from '../index';

test('renders correctly', () => {
  const component = renderer.create(<Label />);
  expect(component.toJSON()).toMatchSnapshot();
});
