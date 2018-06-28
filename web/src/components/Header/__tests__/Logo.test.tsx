import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import Logo from '../Logo';

jest.mock('../../Icons', () => ({
  Logo: 'BaseLogo'
}))

test('renders correctly', () => {
  const component = renderer.create(<Logo />);
  expect(component.toJSON()).toMatchSnapshot();
});
