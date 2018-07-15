import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { ItemBasic } from '@sharedTypes/Item';
import GridItemsGroup from '../index';

test('renders correctly', () => {
  type Props = {
    label: string;
    items: ItemBasic[];
  };

  const props: Props = {
    label: 'x',
    items: [
      {
        name: 'Xanathous Crown',
        slug: 'xanathous-crown',
        gamePart: 1,
        rank: 4
      },
      {
        name: 'Xyndra Grimore',
        slug: 'xyndra-grimore',
        gamePart: 2,
        rank: 6
      }
    ]
  };

  const component = renderer.create(<GridItemsGroup {...props} />);
  expect(component.toJSON()).toMatchSnapshot();
});
