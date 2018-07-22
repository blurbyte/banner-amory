import '../../__mocks__/ReactTransitionGroup.mock';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import SwordTransition from '../SwordTransition';

test('renders correctly', () => {
  const component = renderer.create(<SwordTransition in />);
  expect(component.toJSON()).toMatchSnapshot();
});
