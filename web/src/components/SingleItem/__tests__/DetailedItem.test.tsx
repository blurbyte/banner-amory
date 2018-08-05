import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { MockedProvider } from 'react-apollo/test-utils';

import DetailedItem from '../DetailedItem';
import { testItem } from './mocks';

test('renders correctly', () => {
  const component = renderer.create(
    <MockedProvider mocks={[]} addTypename={false}>
      <DetailedItem {...testItem} />
    </MockedProvider>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
