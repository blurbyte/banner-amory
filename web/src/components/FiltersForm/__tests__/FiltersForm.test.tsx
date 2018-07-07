import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import { FilterBonus } from '@sharedTypes/Filter';
import FiltersForm from '../index';

test('renders correctly', () => {
  const component = renderer.create(
    <FiltersForm
      changeFilter={jest.fn()}
      checkedValues={{ part: 1, rank: 1, bonus: FilterBonus.Any }}
    />
  );
  expect(component.toJSON()).toMatchSnapshot();
});
