import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import DiscardButton from '../DiscardButton';

test('renders correctly', () => {
  const component = renderer.create(<DiscardButton />);
  expect(component.toJSON()).toMatchSnapshot();
});
