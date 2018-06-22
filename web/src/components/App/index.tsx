import '../../styles/sanitize.css';
import '../../styles/global';

import * as React from 'react';
import { Router } from '@reach/router';

import Header from '../Header';
import ItemsList from '../ItemsList';
import TierList from '../TierList';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Router>
          <ItemsList path="/" />
          <TierList path="tierlist" />
        </Router>
      </>
    );
  }
}

export default App;
