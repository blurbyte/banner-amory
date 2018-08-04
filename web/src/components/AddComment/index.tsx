import * as React from 'react';

import Form from './Form';
import Input from './Input';
import Actions from './Actions';
import DiscardButton from './DiscardButton';
import SubmitButton from './SubmitButton';

class AddComment extends React.Component {
  render() {
    return (
      <Form>
        <Input placeholder="Name" />
        <Input placeholder="Comment about this item..." />
        <Actions>
          <DiscardButton />
          <SubmitButton />
        </Actions>
      </Form>
    );
  }
}

export default AddComment;
