import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import Row from '../Row';

test('renders correctly', () => {
  const component = renderer.create(<Row />);
  expect(component.toJSON()).toMatchSnapshot();
});
