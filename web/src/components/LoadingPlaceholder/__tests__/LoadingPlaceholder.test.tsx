import * as React from 'react';
import * as renderer from 'react-test-renderer';

import LoadingPlaceholder from '../index';

test('renders correctly', () => {
  const component = renderer.create(<LoadingPlaceholder />);
  expect(component.toJSON()).toMatchSnapshot();
});
