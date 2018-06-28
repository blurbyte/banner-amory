import * as React from 'react';
import * as renderer from 'react-test-renderer';

import TierList from '../index';

test('renders correctly', () => {
  const component = renderer.create(<TierList />);
  expect(component.toJSON()).toMatchSnapshot();
});
