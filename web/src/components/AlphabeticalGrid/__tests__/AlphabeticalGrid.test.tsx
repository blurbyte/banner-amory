import * as React from 'react';
import * as renderer from 'react-test-renderer';

import AlphabeticalGrid from '../index';
import { items } from './mocks';

test('renders items grouped by first name character', () => {
  const component = renderer.create(<AlphabeticalGrid items={items} />);
  expect(component.toJSON()).toMatchSnapshot();
});
