import * as React from 'react';
import * as renderer from 'react-test-renderer';

import RanksGrid from '../index';
import { items } from './mocks';

test('renders correctly', () => {
  const component = renderer.create(<RanksGrid items={items} />);
  expect(component.toJSON()).toMatchSnapshot();
});
