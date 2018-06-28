import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import IconWrapper from '../IconWrapper';

test('renders correctly', () => {
  const component = renderer.create(<IconWrapper />);
  expect(component.toJSON()).toMatchSnapshot();
});
