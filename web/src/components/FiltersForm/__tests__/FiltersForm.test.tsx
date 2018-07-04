import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import FiltersForm from '../index';

test('renders correctly', () => {
  const component = renderer.create(<FiltersForm />);
  expect(component.toJSON()).toMatchSnapshot();
});
