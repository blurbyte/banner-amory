const ReactTransitionGroup = jest.mock('react-transition-group', () => {
  const React = require('react');
  const FakeTransition = jest.fn(({ children }) => children);
  const FakeCSSTransition = jest.fn(
    props => (props.in ? <FakeTransition>{props.children}</FakeTransition> : null)
  );
  return { CSSTransition: FakeCSSTransition, Transition: FakeTransition };
});

export default ReactTransitionGroup;
