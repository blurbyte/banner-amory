import * as React from 'react';
import { navigate } from '@reach/router';

import Form from './Form';
import Input from './Input';
import Button from './Button';

const initialState = {
  query: ''
};

type SearchState = Readonly<typeof initialState>;

class Search extends React.Component<{}, SearchState> {
  readonly state = initialState;

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          type="search"
          autoCapitalize="off"
          spellCheck={false}
          autoCorrect="off"
          autoComplete="off"
          placeholder="Search items"
          onChange={this.handleChange}
        />
        <Button />
      </Form>
    );
  }

  private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    this.setState({ query });
  };

  private handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { query } = this.state;
    if (query) {
      // redirect to search location if query is not empty
      navigate(`/search/${query.trim()}`);
    }
  };
}

export default Search;
