import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import ListItem from '../ListItem';

test('renders correctly', () => {
  const component = renderer.create(
    <ListItem userName="Taylor Swift" message="Hello, lets have a message here!" />
  );
  expect(component.toJSON()).toMatchSnapshot();
});
