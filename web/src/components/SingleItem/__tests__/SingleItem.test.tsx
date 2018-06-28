import * as React from 'react';
import { render, cleanup } from 'react-testing-library';
import { MockedProvider } from 'react-apollo/test-utils';
import * as delay from 'delay';

import { SingleItem, getSingleItem } from '../index';
import { testItem } from './mocks';

const mocks = [
  {
    request: {
      query: getSingleItem,
      variables: { slug: 'alettes-bracelet' }
    },
    result: {
      data: {
        item: {...testItem}
      }
    }
  }
];

beforeEach(cleanup);

test('renders loading state initially', () => {
  const { container } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <SingleItem slug="alettes-bracelet"/>
    </MockedProvider>
  );
  expect(container.firstChild).toMatchSnapshot();
});

test('renders loaded item', async () => {
  const { container, getByTestId } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <SingleItem slug="alettes-bracelet"/>
    </MockedProvider>
  );

  await delay(0);

  expect(container.firstChild).toMatchSnapshot();
});
