import * as React from 'react';

import Wrapper from './Wrapper';
import Actions from './Actions';
import Form from './Form';
import Input from './Input';
import SubmitButton from './SubmitButton';
import DiscardButton from './DiscardButton';

class Comments extends React.Component {
  render() {
    return <Wrapper>
        <Form>
          <Input placeholder="Name"/>
          <Input placeholder="Comment about this item..." />
          <Actions>
            <DiscardButton />
            <SubmitButton />
          </Actions>
        </Form>
      </Wrapper>;
  }
}

export default Comments;
