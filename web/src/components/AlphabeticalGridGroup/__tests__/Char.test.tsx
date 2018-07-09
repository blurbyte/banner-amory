import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import Char from '../Char';

test('renders correctly', () => {
  const component = renderer.create(<Char>a</Char>);
  expect(component.toJSON()).toMatchSnapshot();
});
