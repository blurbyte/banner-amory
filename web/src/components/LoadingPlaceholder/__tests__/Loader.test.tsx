import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Loader from '../Loader';

test('renders correctly', () => {
  const component = renderer.create(<Loader />);
  expect(component.toJSON()).toMatchSnapshot();
});
