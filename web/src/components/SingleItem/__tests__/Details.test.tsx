import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import Details from '../Details';
import { testItem } from './mocks';

test('renders correctly', () => {
  const component = renderer.create(<Details {...testItem} />);
  expect(component.toJSON()).toMatchSnapshot();
});
