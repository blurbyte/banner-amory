import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import Item from '../Item';

test('renders correctly', () => {
  const component = renderer.create(<Item />);
  expect(component.toJSON()).toMatchSnapshot();
});
