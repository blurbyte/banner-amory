import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import FadeOut from '../FadeOut';

jest.mock('react-transition-group', () => {
  const FakeCSSTransition = jest.fn(() => 'CssTransition')
  return {CSSTransition: FakeCSSTransition}
})

test('renders correctly', () => {
  const component = renderer.create(<FadeOut isVisible>Test</FadeOut>);
  expect(component.toJSON()).toMatchSnapshot();
});
