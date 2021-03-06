import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import Label from '../Label';

test('renders correctly', () => {
  const component = renderer.create(<Label />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('renders correctly when statLine prop is passed', () => {
  const component = renderer.create(<Label statLine />);
  expect(component.toJSON()).toMatchSnapshot();
});
