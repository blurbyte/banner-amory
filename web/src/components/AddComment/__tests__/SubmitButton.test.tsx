import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import SubmitButton from '../SubmitButton';

test('renders correctly', () => {
  const component = renderer.create(<SubmitButton />);
  expect(component.toJSON()).toMatchSnapshot();
});
