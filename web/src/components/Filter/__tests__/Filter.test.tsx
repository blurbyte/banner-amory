import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Filter from '../index';

test('renders correctly', () => {
  const component = renderer.create(
    <Filter name="test">
      <Filter.Item value="1" />
      <Filter.Item value="2" />
    </Filter>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
