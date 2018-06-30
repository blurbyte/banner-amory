import * as React from 'react';
import { navigate } from '@reach/router';
import { render, cleanup, fireEvent } from 'react-testing-library';

import Search from '../index';

jest.mock('../../Icons', () => ({
  Magnifier: 'svg'
}));

// spy on navigate
jest.mock('@reach/router', () => ({
  navigate: jest.fn()
}));

beforeEach(cleanup);

test('submits search correctly', () => {
  // arrange
  const { container, getByPlaceholderText } = render(<Search />);

  const searchInput = getByPlaceholderText('Search items') as HTMLInputElement;
  searchInput.value = '  alette  ';
  // for controlled component change event have to be fired manually
  fireEvent.change(searchInput);

  const submitButton = container.querySelector('button');

  // act
  fireEvent.click(submitButton);

  // assert
  expect(navigate).toHaveBeenCalledTimes(1);
  expect(navigate).toHaveBeenCalledWith('/search/alette');
  expect(container.firstChild).toMatchSnapshot();
});
