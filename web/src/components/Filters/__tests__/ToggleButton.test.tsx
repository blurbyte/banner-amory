import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import ToggleButton from '../ToggleButton';

test('renders correctly', () => {
  const props = {
    onClick: jest.fn(),
    isExpanded: true
  };

  const component = renderer.create(<ToggleButton {...props} />);
  expect(component.toJSON()).toMatchSnapshot();
});
