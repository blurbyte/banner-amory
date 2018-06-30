import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import Info from '../Info';

jest.mock('../../Icons', () => ({
  Banner: 'Banner'
}));

test('renders correctly', () => {
  const component = renderer.create(<Info name="Ash Mead" rank={5} gamePart={1} />);
  expect(component.toJSON()).toMatchSnapshot();
});
