import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import Link from '../Link';

jest.mock('@reach/router', () => ({
  Link: 'BaseLink'
}));

test('renders correctly', () => {
  const component = renderer.create(<Link />);
  expect(component.toJSON()).toMatchSnapshot();
});
