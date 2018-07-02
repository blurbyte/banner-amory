import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import Button from '../Button';

test('renders correctly', () => {
  const component = renderer.create(<Button />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('renders correctly when filters are expanded', () => {
  const component = renderer.create(<Button isExpanded />);
  expect(component.toJSON()).toMatchSnapshot();
});
