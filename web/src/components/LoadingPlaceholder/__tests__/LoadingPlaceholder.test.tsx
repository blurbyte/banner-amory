import '../../../__mocks__/ShallowReactTransitionGroup.mock';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import LoadingPlaceholder from '../index';

test('renders correctly when visible', () => {
  const component = renderer.create(<LoadingPlaceholder isVisible />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('renders correctly when hidden', () => {
  const component = renderer.create(<LoadingPlaceholder isVisible={false} />);
  expect(component.toJSON()).toMatchSnapshot();
});
