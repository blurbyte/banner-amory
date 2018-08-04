import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Comments from '../index';
import { testComments } from './mocks';

test('renders correctly', () => {
  const component = renderer.create(<Comments itemId={83} comments={testComments} />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('renders correctly when there are no comments', () => {
  const component = renderer.create(<Comments itemId={83} comments={[]} />);
  expect(component.toJSON()).toMatchSnapshot();
});
