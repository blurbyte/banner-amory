import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Button from '../index';

test('renders correctly', () => {
  const component = renderer.create(<Button type="submit">Submit</Button>);
  expect(component.toJSON()).toMatchSnapshot();
});

test('renders correctly with icon', () => {
  const Icon = () => <>Icon</>;
  const component = renderer.create(
    <Button type="submit" icon={Icon}>
      Submit
    </Button>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
