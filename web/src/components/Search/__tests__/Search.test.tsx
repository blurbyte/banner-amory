import * as React from 'react';
import { render } from 'react-testing-library';

import Search from '../index';

jest.mock('../../Icons', () => ({
  Magnifier: 'svg'
}));

test('renders correctly', () => {
  const { container } = render(<Search />);
  expect(container.firstChild).toMatchSnapshot();
});
