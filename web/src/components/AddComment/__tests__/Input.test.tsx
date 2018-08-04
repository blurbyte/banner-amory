import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import Input from '../Input';

test('renders correctly', () => {
  const component = renderer.create(<Input />);
  expect(component.toJSON()).toMatchSnapshot();
});
