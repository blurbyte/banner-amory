import * as React from 'react';
import * as renderer from 'react-test-renderer';

import FilterItem from '../index';

test('renders correctly', () => {
  const component = renderer.create(
    <FilterItem name="part" value={0} onChange={jest.fn()} label="realName" checkedValue={0} />
  );
  expect(component.toJSON()).toMatchSnapshot();
});
