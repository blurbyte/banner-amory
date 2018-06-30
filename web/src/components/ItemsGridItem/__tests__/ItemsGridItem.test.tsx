import * as React from 'react';
import * as renderer from 'react-test-renderer';

import ItemsGridItem from '../index';

test('renders correctly', () => {
  const props = {
    name: 'Ariana Grande',
    slug: 'ariana-grande',
    gamePart: 2,
    rank: 10
  };
  const component = renderer.create(<ItemsGridItem {...props} />);
  expect(component.toJSON()).toMatchSnapshot();
});
