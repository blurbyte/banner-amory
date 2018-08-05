import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { MockedProvider } from 'react-apollo/test-utils';

import Comments from '../index';
import { testComments } from './mocks';

test('renders correctly', () => {
  const component = renderer.create(
    <MockedProvider mocks={[]} addTypename={false}>
      <Comments itemId={83} comments={testComments} />
    </MockedProvider>
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('renders correctly when there are no comments', () => {
  const component = renderer.create(
    <MockedProvider mocks={[]} addTypename={false}>
      <Comments itemId={83} comments={[]} />
    </MockedProvider>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
