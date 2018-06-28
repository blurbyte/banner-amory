import * as React from 'react';
import { render, cleanup } from 'react-testing-library';

import HeaderLink from '../index';

beforeEach(cleanup);

test('renders correctly', () => {
  const Icon = () => <>Icon</>;
  const {container} = render(<HeaderLink icon={Icon} to="/test">Test</HeaderLink>);
  expect(container.firstChild).toMatchSnapshot();
});
