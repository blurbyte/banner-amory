import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import List from '../List';

test('renders correctly', () => {
  const component = renderer.create(<List columns={4} />);
  expect(component.toJSON()).toMatchSnapshot();
});
