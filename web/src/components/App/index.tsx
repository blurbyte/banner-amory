import '@styles/sanitize.css';
import '@styles/global';

import * as React from 'react';
import { Router } from '@reach/router';

import Header from '../Header';
import Items from '../Items';
import TierList from '../TierList';
import SingleItem from '../SingleItem';
import SearchResult from '../SearchResult';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Router>
          <Items path="/" />
          <TierList path="tierlist" />
          <SingleItem path="item/:slug" />
          <SearchResult path="search/:searchQuery" />
        </Router>
      </>
    );
  }
}

export default App;
