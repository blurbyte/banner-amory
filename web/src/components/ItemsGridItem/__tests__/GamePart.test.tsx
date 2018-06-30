import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import GamePart from '../GamePart';

jest.mock('../../Icons', () => ({
  Banner: 'Banner'
}));

test('renders correctly', () => {
  const component = renderer.create(<GamePart gamePart={2} />);
  expect(component.toJSON()).toMatchSnapshot();
});
