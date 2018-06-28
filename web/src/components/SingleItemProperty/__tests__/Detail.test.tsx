import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import Detail from '../Detail';

test('renders correctly', () => {
  const component = renderer.create(<Detail />);
  expect(component.toJSON()).toMatchSnapshot();
});
