import * as React from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

const Transition = styled(CSSTransition)`
  &.fade-out-exit {
    opacity: 1;
  }

  &.fade-out-exit-active {
    opacity: 0;
    transition: opacity 250ms ease-in 150ms;
  }
`;

type FadeOutProps = {
  children: React.ReactNode;
  isVisible: boolean;
};

class FadeOut extends React.Component<FadeOutProps> {
  render() {
    const { children, isVisible } = this.props;
    return (
      <Transition in={isVisible} classNames="fade-out" timeout={400} unmountOnExit>
        {children}
      </Transition>
    );
  }
}

export default FadeOut;
