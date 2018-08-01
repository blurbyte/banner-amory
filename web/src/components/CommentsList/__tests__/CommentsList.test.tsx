import * as React from 'react';
import * as renderer from 'react-test-renderer';

import CommentsList from '../index';

test('renders correctly', () => {
  const component = renderer.create(<CommentsList />);
  expect(component.toJSON()).toMatchSnapshot();
});
