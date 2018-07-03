import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import Label from '../Label';

test('renders correctly', () => {
  const component = renderer.create(<Label />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('renders correctly when checked', () => {
  const component = renderer.create(<Label checked />);
  expect(component.toJSON()).toMatchSnapshot();
});
