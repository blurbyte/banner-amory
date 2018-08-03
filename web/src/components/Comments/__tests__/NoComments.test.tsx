import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import NoComments from '../NoComments';

test('renders correctly', () => {
  const component = renderer.create(<NoComments>There are no comments here!</NoComments>);
  expect(component.toJSON()).toMatchSnapshot();
});
