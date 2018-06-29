import * as React from 'react';
import { render, cleanup } from 'react-testing-library';
import { MockedProvider } from 'react-apollo/test-utils';
import * as delay from 'delay';

import { SearchResult } from '../index';
import { searchItemsMock, searchItemsEmptyMock } from './mocks';

beforeEach(cleanup);

test('renders loading state initially', () => {
  const { container } = render(
    <MockedProvider mocks={searchItemsMock} addTypename={false}>
      <SearchResult searchQuery="ale" />
    </MockedProvider>
  );
  expect(container.firstChild).toMatchSnapshot();
});

test('renders loaded item', async () => {
  const { container } = render(
    <MockedProvider mocks={searchItemsMock} addTypename={false}>
      <SearchResult searchQuery="ale" />
    </MockedProvider>
  );

  await delay(0);

  expect(container.firstChild).toMatchSnapshot();
});

test('renders info message when no items match search', async () => {
  const { container } = render(
    <MockedProvider mocks={searchItemsEmptyMock} addTypename={false}>
      <SearchResult searchQuery="xxx" />
    </MockedProvider>
  );

  await delay(0);

  expect(container.firstChild).toMatchSnapshot();
});
