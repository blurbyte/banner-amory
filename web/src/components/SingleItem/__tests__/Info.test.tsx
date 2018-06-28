import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import Info from '../Info';
import { testItem } from './mocks';

test('renders correctly', () => {
  const component = renderer.create(<Info {...testItem} />);
  expect(component.toJSON()).toMatchSnapshot();
});
