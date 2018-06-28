import * as React from 'react';
import { render, waitForElement, cleanup } from 'react-testing-library';
import { MockedProvider } from 'react-apollo/test-utils';

import { Items, getItems } from '../index';

const mocks = [
  {
    request: {
      query: getItems
    },
    result: {
      data: {
        items: [
          {
            slug: 'test-slug',
            rank: 10
          },
          {
            slug: 'taylor-swift',
            rank: 1
          }
        ]
      }
    }
  }
];

beforeEach(cleanup);

test('renders loading state initially', () => {
  const { container } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Items />
    </MockedProvider>
  );
  expect(container.firstChild).toMatchSnapshot();
});

test('renders loaded list of items', async () => {
  const { container } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Items />
    </MockedProvider>
  );

  await waitForElement(() => container.querySelector('ul'));

  expect(container.firstChild).toMatchSnapshot();
});
