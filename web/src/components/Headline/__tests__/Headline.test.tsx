import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import Headline from '../index';

test('renders correctly', () => {
  const component = renderer.create(<Headline />);
  expect(component.toJSON()).toMatchSnapshot();
});
