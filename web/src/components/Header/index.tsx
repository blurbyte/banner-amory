import * as React from 'react';

import Wrapper from './Wrapper';
import Content from './Content';
import Logo from './Logo';

class Header extends React.Component {
  render() {
    return (
      <Wrapper>
        <Content role="banner">
          <Logo />
        </Content>
      </Wrapper>
    );
  }
}

export default Header;
