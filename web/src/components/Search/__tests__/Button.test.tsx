import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import Button from '../Button';

jest.mock('../../Icons', () => ({
  Magnifier: 'Magnifier'
}));

test('renders correctly', () => {
  const component = renderer.create(<Button />);
  expect(component.toJSON()).toMatchSnapshot();
});
