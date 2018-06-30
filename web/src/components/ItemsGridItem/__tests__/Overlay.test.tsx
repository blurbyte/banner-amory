import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import Overlay from '../Overlay';

test('renders correctly', () => {
  const component = renderer.create(<Overlay />);
  expect(component.toJSON()).toMatchSnapshot();
});
