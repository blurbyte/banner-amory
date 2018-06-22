import * as React from 'react';

import Form from './Form';
import Input from './Input';
import Button from './Button';

class Search extends React.Component {
  render() {
    return (
      <Form>
        <Input type="text" placeholder="Search items" />
        <Button />
      </Form>
    );
  }
}

export default Search;
