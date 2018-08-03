import * as React from 'react';

import { Comment } from '@sharedTypes/Comment';
import CommentsList from '../CommentsList';
import Wrapper from './Wrapper';
import Actions from './Actions';
import Form from './Form';
import Input from './Input';
import SubmitButton from './SubmitButton';
import DiscardButton from './DiscardButton';
import NoComments from './NoComments';

type CommentsProps = {
  comments: Comment[];
};

class Comments extends React.Component<CommentsProps> {
  render() {
    const { comments } = this.props;
    return (
      <Wrapper>
        <Form>
          <Input placeholder="Name" />
          <Input placeholder="Comment about this item..." />
          <Actions>
            <DiscardButton />
            <SubmitButton />
          </Actions>
        </Form>
        {comments.length ? (
          <CommentsList comments={comments} />
        ) : (
          <NoComments>There are no comments here yet.</NoComments>
        )}
      </Wrapper>
    );
  }
}

export default Comments;
