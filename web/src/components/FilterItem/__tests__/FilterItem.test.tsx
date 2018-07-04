import * as React from 'react';
import * as renderer from 'react-test-renderer';

import FilterItem from '../index';

test('renders correctly', () => {
  const component = renderer.create(<FilterItem name="part" value="all" onChange={jest.fn()} label="realName" checkedValue="all" />);
  expect(component.toJSON()).toMatchSnapshot();
});
