import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import ListItem from '../ListItem';

test('renders correctly', () => {
  const props = {
    slug: 'test-slug',
    rank: 10
  };
  const component = renderer.create(<ListItem {...props} />);
  expect(component.toJSON()).toMatchSnapshot();
});
