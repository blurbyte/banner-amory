import * as React from 'react';
import { render, cleanup } from 'react-testing-library';

import Property from '../index';

beforeEach(cleanup);

test('renders correctly', () => {
  const { container } = render(
    <Property>
      <Property.Label>Taylor</Property.Label>
      <Property.Detail>Swift</Property.Detail>
    </Property>
  );
  expect(container.firstChild).toMatchSnapshot();
});

test('statLine is passed correctly to children', () => {
  const { container } = render(
    <Property statLine>
      <Property.Label>Taylor</Property.Label>
      <Property.Detail>Swift</Property.Detail>
    </Property>
  );
  expect(container.firstChild).toMatchSnapshot();
});
