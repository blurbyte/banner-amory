import * as React from 'react';
import { render, cleanup } from 'react-testing-library';
import { MockedProvider } from 'react-apollo/test-utils';
import * as delay from 'delay';

import { SingleItem } from '../index';
import { singleItemMock } from './mocks';

beforeEach(cleanup);

test('renders loading state initially', () => {
  const { container } = render(
    <MockedProvider mocks={singleItemMock} addTypename={false}>
      <SingleItem slug="alettes-bracelet" />
    </MockedProvider>
  );
  expect(container.firstChild).toMatchSnapshot();
});

test('renders loaded item', async () => {
  const { container } = render(
    <MockedProvider mocks={singleItemMock} addTypename={false}>
      <SingleItem slug="alettes-bracelet" />
    </MockedProvider>
  );

  await delay(10);

  expect(container.firstChild).toMatchSnapshot();
});
