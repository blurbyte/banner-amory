import * as React from 'react';
import Wrapper from './Wrapper';
import Icon from './Icon';

type ButtonProps = {
  children: React.ReactNode;
  icon?: React.ComponentType<any>;
  type?: string;
}

class Button extends React.Component<ButtonProps> {
  render() {
    const { children, icon: InjectedIcon, type } = this.props;
    return (
    <Wrapper type={type}>{InjectedIcon && <Icon><InjectedIcon /></Icon>}{children}</Wrapper>
    );
  }
}

export default Button;
