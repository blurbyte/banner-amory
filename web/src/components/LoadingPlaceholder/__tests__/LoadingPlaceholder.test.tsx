import * as React from 'react';
import * as renderer from 'react-test-renderer';

import LoadingPlaceholder from '../index';

jest.useFakeTimers();

test('renders correctly with no delay', () => {
  const component = renderer.create(<LoadingPlaceholder />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('renders correctly after 200ms has passed', () => {
  const component = renderer.create(<LoadingPlaceholder />);
  jest.advanceTimersByTime(200);
  expect(component.toJSON()).toMatchSnapshot();
});

test('renders correctly after 800ms has passed', () => {
  const component = renderer.create(<LoadingPlaceholder />);
  jest.advanceTimersByTime(800);
  expect(component.toJSON()).toMatchSnapshot();
});

jest.clearAllTimers();
