import * as React from 'react';

import Form from './Form';
import Input from './Input';
import Actions from './Actions';
import DiscardButton from './DiscardButton';
import SubmitButton from './SubmitButton';

const initialState = {
  userName: '',
  message: ''
};

type AddCommentState = Readonly<typeof initialState>;

class AddComment extends React.Component<{}, AddCommentState> {
  readonly state = initialState;

  render() {
    return (
      <Form>
        <Input
          placeholder="Name"
          name="userName"
          value={this.state.userName}
          onChange={this.handleInputChange}
        />
        <Input
          placeholder="Comment about this item..."
          name="message"
          value={this.state.message}
          onChange={this.handleInputChange}
        />
        {showActions(this.state) && <Actions>
          <DiscardButton onClick={this.discardComment} />
          <SubmitButton />
        </Actions>}
      </Form>
    );
  }

  private handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    } as AddCommentState);
  };

  private discardComment = () => {
    console.log('discard comment');
    this.setState(initialState);
  };
}

function showActions(state: AddCommentState) {
  return state.userName !== '' && state.message !== '';
}

export default AddComment;
