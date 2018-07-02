import * as React from 'react';
import { render, cleanup } from 'react-testing-library';

import Filters from '../index';

beforeEach(cleanup);

test('renders loading state initially', () => {
  const { container } = render(<Filters />);
  expect(container.firstChild).toMatchSnapshot();
});
