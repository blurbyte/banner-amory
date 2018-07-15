import * as React from 'react';
import { render, cleanup } from 'react-testing-library';
import { MockedProvider } from 'react-apollo/test-utils';
import * as delay from 'delay';

import { Items } from '../index';
import { itemsMock, itemsEmptyMock } from './mocks';

beforeEach(cleanup);

test('renders loading state initially', () => {
  const { container } = render(
    <MockedProvider mocks={itemsMock} addTypename={false}>
      <Items />
    </MockedProvider>
  );
  expect(container.firstChild).toMatchSnapshot();
});

test('renders loaded list of items', async () => {
  const { container } = render(
    <MockedProvider mocks={itemsMock} addTypename={false}>
      <Items />
    </MockedProvider>
  );

  await delay(10);

  expect(container.firstChild).toMatchSnapshot();
});

test('renders info message when no items match filters', async () => {
  const { container } = render(
    <MockedProvider mocks={itemsEmptyMock} addTypename={false}>
      <Items />
    </MockedProvider>
  );

  await delay(10);

  expect(container.firstChild).toMatchSnapshot();
});
