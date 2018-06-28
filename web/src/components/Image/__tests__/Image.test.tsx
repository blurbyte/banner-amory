import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Image from '../index';

test('renders correctly', () => {
  const component = renderer.create(<Image slug="test-slug" />);
  expect(component.toJSON()).toMatchSnapshot();
});
