import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import Wrapper from '../Wrapper';

test('renders correctly', () => {
  const component = renderer.create(<Wrapper />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('renders correctly when isActive', () => {
  const component = renderer.create(<Wrapper isActive />);
  expect(component.toJSON()).toMatchSnapshot();
});
