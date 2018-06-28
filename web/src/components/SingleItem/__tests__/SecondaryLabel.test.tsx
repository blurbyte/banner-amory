import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import SecondaryLabel from '../SecondaryLabel';

test('renders correctly', () => {
  const component = renderer.create(<SecondaryLabel secondaryLabel="taylor swift" />);
  expect(component.toJSON()).toMatchSnapshot();
});
