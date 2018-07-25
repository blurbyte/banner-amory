import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import AnimatedHeadline from '../index';

test('renders correctly', () => {
  const component = renderer.create(<AnimatedHeadline />);
  expect(component.toJSON()).toMatchSnapshot();
});
