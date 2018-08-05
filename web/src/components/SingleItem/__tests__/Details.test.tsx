import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { MockedProvider } from 'react-apollo/test-utils';
import 'jest-styled-components';

import Details from '../Details';
import { testItem } from './mocks';

test('renders correctly', () => {
  const component = renderer.create(
    <MockedProvider mocks={[]} addTypename={false}>
      <Details {...testItem} />
    </MockedProvider>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
