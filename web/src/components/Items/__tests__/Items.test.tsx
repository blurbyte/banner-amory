import * as React from 'react';
import { render, waitForElement, cleanup } from 'react-testing-library';
import { MockedProvider } from 'react-apollo/test-utils';
import * as delay from 'delay';

import { Items } from '../index';
import { itemsMock } from './mocks';

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

  await delay(0);

  expect(container.firstChild).toMatchSnapshot();
});
