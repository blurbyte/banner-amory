import * as React from 'react';
import * as renderer from 'react-test-renderer';

import AddComment from '../index';

test('renders correctly', () => {
  const component = renderer.create(<AddComment />);
  expect(component.toJSON()).toMatchSnapshot();
});
