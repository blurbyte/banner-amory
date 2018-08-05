import * as React from 'react';
import * as renderer from 'react-test-renderer';

import AddCommentForm from '../index';

test('renders correctly', () => {
  const component = renderer.create(<AddCommentForm itemId={83} addComment={jest.fn()} />);
  expect(component.toJSON()).toMatchSnapshot();
});
