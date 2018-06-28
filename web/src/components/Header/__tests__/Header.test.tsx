import * as React from 'react';
import { render, cleanup } from 'react-testing-library';

import Header from '../index';

beforeEach(cleanup);

test('renders correctly', () => {
  const {container} = render(<Header />);
  expect(container.firstChild).toMatchSnapshot();
});
