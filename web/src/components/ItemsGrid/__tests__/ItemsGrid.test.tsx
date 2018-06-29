import * as React from 'react';
import * as renderer from 'react-test-renderer';

import ItemsGrid from '../index';

test('renders correctly', () => {
  const items = [
    {
      slug: 'test-slug',
      rank: 10
    },
    {
      slug: 'taylor-swift',
      rank: 1
    }
  ];
  const component = renderer.create(<ItemsGrid items={items} />);
  expect(component.toJSON()).toMatchSnapshot();
});
