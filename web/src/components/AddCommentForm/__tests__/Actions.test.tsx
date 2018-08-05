import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import Actions from '../Actions';

test('renders correctly', () => {
  const component = renderer.create(<Actions />);
  expect(component.toJSON()).toMatchSnapshot();
});
