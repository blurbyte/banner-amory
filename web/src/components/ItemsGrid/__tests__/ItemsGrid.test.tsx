import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { ItemBasic } from '@sharedTypes/Item';
import ItemsGrid from '../index';

test('renders correctly', () => {
  const items: ItemBasic[] = [
    {
      name: 'Test',
      slug: 'test-slug',
      gamePart: 2,
      rank: 10
    },
    {
      name: 'Taylor Swift',
      slug: 'taylor-swift',
      gamePart: 2,
      rank: 1
    }
  ];
  const component = renderer.create(<ItemsGrid items={items} />);
  expect(component.toJSON()).toMatchSnapshot();
});
