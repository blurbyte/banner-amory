import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Comments from '../index';

test('renders correctly', () => {
  const component = renderer.create(<Comments />);
  expect(component.toJSON()).toMatchSnapshot();
});
