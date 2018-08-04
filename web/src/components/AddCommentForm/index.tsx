import * as React from 'react';
import { MutationFn } from 'react-apollo';

import { Comment, AddCommentInput } from '@sharedTypes/Comment';
import Form from './Form';
import Input from './Input';
import Actions from './Actions';
import DiscardButton from './DiscardButton';
import SubmitButton from './SubmitButton';

type AddCommentFormProps = {
  itemId: number;
  addComment: MutationFn<Comment, { input: AddCommentInput }>;
};

const initialState = {
  userName: '',
  message: ''
};

type AddCommentFormState = Readonly<typeof initialState>;

class AddCommentForm extends React.Component<AddCommentFormProps, AddCommentFormState> {
  readonly state = initialState;

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
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
        {showActions(this.state) && (
          <Actions>
            <DiscardButton onClick={this.clearInputs} />
            <SubmitButton />
          </Actions>
        )}
      </Form>
    );
  }

  private handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // trigger mutation
    this.props.addComment({
      variables: {
        input: {
          itemId: this.props.itemId,
          userName: this.state.userName,
          message: this.state.message
        }
      }
    });

    this.clearInputs();
  };

  private handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    } as AddCommentFormState);
  };

  private clearInputs = () => {
    this.setState(initialState);
  };
}

function showActions(state: AddCommentFormState) {
  return state.userName !== '' && state.message !== '';
}

export default AddCommentForm;
