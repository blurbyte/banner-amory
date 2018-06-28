import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import Img from '../Img';

test('renders correctly', () => {
  process.env.STORAGE_URL = '/test';
  const component = renderer.create(<Img />);
  expect(component.toJSON()).toMatchSnapshot();
});
