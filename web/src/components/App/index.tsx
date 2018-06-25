import '../../styles/sanitize.css';
import '../../styles/global';

import * as React from 'react';
import { Router } from '@reach/router';

import Header from '../Header';
import Items from '../Items';
import TierList from '../TierList';
import SingleItem from '../SingleItem';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Router>
          <Items path="/" />
          <TierList path="tierlist" />
          <SingleItem path="item/:slug" />
        </Router>
      </>
    );
  }
}

export default App;
