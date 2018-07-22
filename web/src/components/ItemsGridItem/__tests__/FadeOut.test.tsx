import '../../__mocks__/ReactTransitionGroup.mock';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import FadeOut from '../FadeOut';

test('renders correctly', () => {
  const component = renderer.create(<FadeOut isVisible>Test</FadeOut>);
  expect(component.toJSON()).toMatchSnapshot();
});
