import * as React from 'react';
import * as renderer from 'react-test-renderer';

import CommentsList from '../index';
import { testComments1, testComments2 } from './mocks';

test('renders correctly when there is only one comment', () => {
  const component = renderer.create(<CommentsList comments={testComments1} />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('renders correctly when there are multiple comments', () => {
  const component = renderer.create(<CommentsList comments={testComments2} />);
  expect(component.toJSON()).toMatchSnapshot();
});
