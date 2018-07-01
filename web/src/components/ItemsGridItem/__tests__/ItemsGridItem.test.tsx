import * as React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import { ItemBasic } from '@sharedTypes/Item';
import ItemsGridItem from '../index';

afterEach(cleanup);

test('hides and shows overlay based on mouse entering and leaving Item wrapper', () => {
  // arrange
  const props: ItemBasic = {
    name: 'Ariana Grande',
    slug: 'ariana-grande',
    gamePart: 2,
    rank: 10
  };

  const { container } = render(<ItemsGridItem {...props} />);

  const itemWrapper = container.querySelector('a') as HTMLElement;

  // test onMouseEnter
  // act
  fireEvent.mouseEnter(itemWrapper);
  // assert
  expect(container.querySelector('h3')).toBeInTheDOM();
  expect(container.firstChild).toMatchSnapshot();

  // test onMouseLeave
  // act
  fireEvent.mouseLeave(itemWrapper);
  // assert
  expect(container.querySelector('h3')).not.toBeInTheDOM();
  expect(container.firstChild).toMatchSnapshot();
});
