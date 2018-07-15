import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import Wrapper from '../Wrapper';

test('renders correctly', () => {
  const component = renderer.create(<Wrapper columns={4} />);
  expect(component.toJSON()).toMatchSnapshot();
});
