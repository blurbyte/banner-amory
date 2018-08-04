import * as React from 'react';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';

import Form from '../AddCommentForm';

const addSingleComment = gql`
  mutation addComment($input: AddCommentInput!) {
    addComment(input: $input) {
      id
      userName
      message
    }
  }
`;

type AddCommentProps = {
  itemId: number;
};

class AddComment extends React.Component<AddCommentProps> {
  render() {
    const { itemId } = this.props;

    return (
      <Mutation mutation={addSingleComment}>
        {addComment => <Form itemId={itemId} addComment={addComment} />}
      </Mutation>
    );
  }
}

export default AddComment;
