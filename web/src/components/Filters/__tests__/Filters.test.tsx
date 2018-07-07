import * as React from 'react';
import { render, cleanup } from 'react-testing-library';

import { FilterBonus } from '@sharedTypes/Filter';
import Filters from '../index';

beforeEach(cleanup);

test('renders loading state initially', () => {
  const { container } = render(
    <Filters
      changeFilter={jest.fn()}
      checkedValues={{ part: 1, rank: 1, bonus: FilterBonus.Any }}
    />
  );
  expect(container.firstChild).toMatchSnapshot();
});
