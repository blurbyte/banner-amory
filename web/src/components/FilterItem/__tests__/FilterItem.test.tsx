import * as React from 'react';
import * as renderer from 'react-test-renderer';

import FilterItem from '../index';

test('renders correctly', () => {
  const component = renderer.create(<FilterItem value="test" onChange={jest.fn()}/>);
  expect(component.toJSON()).toMatchSnapshot();
});
