const ShallowReactTransitionGroup = jest.mock('react-transition-group', () => {
  const FakeCSSTransition = jest.fn(() => 'CssTransition');
  return { CSSTransition: FakeCSSTransition };
});
