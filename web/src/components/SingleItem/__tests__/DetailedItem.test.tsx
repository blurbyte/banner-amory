import * as React from 'react';
import * as renderer from 'react-test-renderer';

import DetailedItem from '../DetailedItem';
import { testItem } from './mocks';

test('renders correctly', () => {
  const component = renderer.create(<DetailedItem {...testItem} />);
  expect(component.toJSON()).toMatchSnapshot();
});
