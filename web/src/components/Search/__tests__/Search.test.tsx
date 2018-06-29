import * as React from 'react';
import { navigate } from '@reach/router';
import { render, cleanup } from 'react-testing-library';

import Search from '../index';

jest.mock('../../Icons', () => ({
  Magnifier: 'svg'
}));

jest.mock('@reach/router', () => ({
  navigate: jest.fn()
}))

beforeEach(cleanup);

test('renders correctly', () => {
  const { container, getByPlaceholderText } = render(<Search />);

  const searchInput = getByPlaceholderText('Search items');
  const submitButton = container.querySelector('button');

  expect(container.firstChild).toMatchSnapshot();
});
