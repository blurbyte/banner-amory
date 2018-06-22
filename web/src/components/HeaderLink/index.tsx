// header navigation link

import * as React from 'react';

import { Match } from '@reach/router';
import Link from './Link';
import IconWrapper from './IconWrapper';
import Wrapper from './Wrapper';

type LinkProps = {
  children: React.ReactNode;
  to: string;
  icon?: React.ComponentType<any>;
};

class HeaderLink extends React.Component<LinkProps> {
  render() {
    // using component injection pattern
    const { children, to, icon: InjectedIcon } = this.props;

    return (
      <Match path={to}>
        {({ match }) => (
          <Wrapper isActive={!!match} role="link">
            {InjectedIcon && (
              <IconWrapper>
                <InjectedIcon alternative={!match} />
              </IconWrapper>
            )}
            <Link to={to}>{children}</Link>
          </Wrapper>
        )}
      </Match>
    );
  }
}

export default HeaderLink;
