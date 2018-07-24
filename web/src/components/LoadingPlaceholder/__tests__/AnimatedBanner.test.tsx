import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import AnimatedBanner from '../AnimatedBanner';

test('renders correctly', () => {
  const component = renderer.create(<AnimatedBanner />);
  expect(component.toJSON()).toMatchSnapshot();
});
