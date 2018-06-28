import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import Stat from '../Stat';

test('renders correctly (with percent)', () => {
  const component = renderer.create(
    <Stat stat={10} label="taylor" secondaryLabel="swift" percent />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('renders correctly with negative stat', () => {
  const component = renderer.create(<Stat stat={-10} label="ariana" secondaryLabel="grande" />);
  expect(component.toJSON()).toMatchSnapshot();
});
