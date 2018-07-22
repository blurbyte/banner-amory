import '../../__mocks__/ShallowReactTransitionGroup.mock';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Loader from '../Loader';

test('renders correctly', () => {
  const component = renderer.create(<Loader isVisible />);
  expect(component.toJSON()).toMatchSnapshot();
});
