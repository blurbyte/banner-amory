import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import DiscardButton from '../DiscardButton';

test('renders correctly', () => {
  const component = renderer.create(<DiscardButton onClick={jest.fn()} />);
  expect(component.toJSON()).toMatchSnapshot();
});
