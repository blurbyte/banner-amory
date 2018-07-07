import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Filter as FilterType, FilterBonus } from '@sharedTypes/Filter';
import Filter from '../index';

test('renders correctly', () => {
  const checkedValues: FilterType = {
    part: 0,
    rank: 0,
    bonus: FilterBonus.Any
  };

  const component = renderer.create(
    <Filter name="rank" checkedValues={checkedValues} onChange={jest.fn()}>
      <Filter.Item value={0} />
      <Filter.Item value={1} />
    </Filter>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
