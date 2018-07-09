import * as React from 'react';
import { render, cleanup } from 'react-testing-library';

import { FilterBonus, OrderBy } from '@sharedTypes/Filter';
import Filters from '..';

beforeEach(cleanup);

test('renders loading state initially', () => {
  const { container } = render(
    <Filters
      changeFilter={jest.fn()}
      checkedValues={{ part: 1, rank: 1, bonus: FilterBonus.Any, orderBy: OrderBy.Rank }}
    />
  );
  expect(container.firstChild).toMatchSnapshot();
});
