import * as React from 'react';

import Search from '../Search';
import Link from '../HeaderLink';
import { Ring, Shield } from '../Icons';
import Wrapper from './Wrapper';
import Content from './Content';
import Logo from './Logo';
import Nav from './Nav';

class Header extends React.Component {
  render() {
    return (
      <Wrapper>
        <Content role="banner">
          <Logo />
          <Nav>
            <Link to="/" icon={Ring}>
              Items
            </Link>
            <Link to="/tierlist" icon={Shield}>
              Tier List
            </Link>
          </Nav>
          <Search />
        </Content>
      </Wrapper>
    );
  }
}

export default Header;
