import '../../__mocks__/ReactTransitionGroup.mock';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import BannerTransition from '../BannerTransition';

test('renders correctly', () => {
  const component = renderer.create(<BannerTransition in />);
  expect(component.toJSON()).toMatchSnapshot();
});
