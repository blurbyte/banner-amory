import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import AnimatedSword from '../AnimatedSword';

test('renders correctly', () => {
  const component = renderer.create(<AnimatedSword />);
  expect(component.toJSON()).toMatchSnapshot();
});
