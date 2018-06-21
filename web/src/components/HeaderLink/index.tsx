import * as React from 'react';

import StyledLink from './StyledLink';
import IconWrapper from './IconWrapper';

type LinkProps = {
  children: React.ReactNode;
  to: string;
  icon?: React.ComponentType<any>;
};

class Link extends React.Component<LinkProps> {
  render() {
    // using component injection pattern
    const { children, to, icon: InjectedIcon, ...rest } = this.props;

    return (
      <StyledLink to={to} {...rest}>
        {InjectedIcon && <IconWrapper><InjectedIcon /></IconWrapper>}
        {children}
      </StyledLink>
    );
  }
}

export default Link;
