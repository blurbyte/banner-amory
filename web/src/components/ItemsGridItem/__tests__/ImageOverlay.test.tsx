import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import ImageOverlay from '../ImageOverlay';

test('renders correctly', () => {
  const component = renderer.create(<ImageOverlay />);
  expect(component.toJSON()).toMatchSnapshot();
});
