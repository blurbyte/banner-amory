import * as React from 'react';

import Form from './Form';
import Input from './Input';
import Button from './Button';

class Search extends React.Component {
  render() {
    return (
      <Form>
        <Input
          type="search"
          autoCapitalize="off"
          spellCheck={false}
          autoCorrect="off"
          autoComplete="off"
          placeholder="Search items"
        />
        <Button />
      </Form>
    );
  }
}

export default Search;
